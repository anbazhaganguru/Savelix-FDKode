/**
 * SAVELIX Public Website — Centralized Lead Ingestion Service
 * 
 * Complies with the SAVELIX CRM Platform API Contract:
 * POST /api/v1/public/leads
 * 
 * Strict Business Rules & Security Invariants:
 * 1. Phone number is MANDATORY (E.164 format: +91... or international +<country><digits>)
 * 2. Email is OPTIONAL; if supplied, it must be strictly validated.
 *    Invalid emails are NEVER silently discarded.
 * 3. Email-only submissions are strictly rejected.
 * 4. Never generate fake or placeholder phone numbers.
 * 5. Cryptographically secure RFC 4122 v4 UUIDs for idempotency.
 *    No Math.random() fallback.
 * 6. Canonical CRM service offerings + "Other / Custom Enquiry" supported.
 *    "Other / Custom Enquiry" maps canonically to general_enquiry with required custom_service_description.
 * 7. Active lead duplicate prevention handled safely (HTTP 409 DUPLICATE_LEAD).
 * 8. Honeypot bot trap (hp_clinical_validation) preserved.
 */

import { getAttribution } from './attributionTracker.js';

/**
 * Approved CRM Service Offering Enums (8 canonical offerings + custom enquiry aliases)
 */
export const APPROVED_SERVICE_MAP = {
  // 1. Psychiatric Care
  'psychiatric care': 'psychiatric_care',
  'psychiatric_care': 'psychiatric_care',

  // 2. Psychological Counselling
  'psychological counselling': 'psychological_counselling',
  'psychological_counselling': 'psychological_counselling',

  // 3. Psychiatric Rehabilitation
  'psychiatric rehabilitation': 'psychiatric_rehabilitation',
  'psychiatric_rehabilitation': 'psychiatric_rehabilitation',

  // 4. Family Counselling
  'family, marriage & relationship counselling': 'family_counselling',
  'family counselling': 'family_counselling',
  'family_counselling': 'family_counselling',

  // 5. Substance Use Support
  'substance use & addiction support': 'substance_use_support',
  'substance use support': 'substance_use_support',
  'substance_use_support': 'substance_use_support',

  // 6. Child & Adolescent Counselling
  'child & adolescent counselling': 'child_adolescent_counselling',
  'child adolescent counselling': 'child_adolescent_counselling',
  'child_adolescent_counselling': 'child_adolescent_counselling',

  // 7. Inpatient Safety Monitoring
  'inpatient environment & safety monitoring': 'inpatient_safety_monitoring',
  'inpatient safety monitoring': 'inpatient_safety_monitoring',
  'inpatient_safety_monitoring': 'inpatient_safety_monitoring',

  // 8. General Enquiry
  'general enquiry': 'general_enquiry',
  'general_enquiry': 'general_enquiry',
  'overview': 'general_enquiry',

  // 9. Other / Custom Enquiry (canonical mapping to general_enquiry, detail in custom_service_description)
  'other / custom enquiry': 'general_enquiry',
  'other / custom': 'general_enquiry',
  'other': 'general_enquiry',
  'custom enquiry': 'general_enquiry',
  'other enquiry': 'general_enquiry'
};

/**
 * Proposed Service Mappings (Pending explicit business stakeholder confirmation)
 * NOTE: 'Education & Internship Enquiry' is present on the public website Contact page.
 * The CRM database service_offering enum does not have a separate internship offering.
 * Mapped to 'general_enquiry' pending formal business sign-off.
 */
export const PENDING_APPROVAL_SERVICE_MAP = {
  'education & internship enquiry': 'general_enquiry',
  'education & internship': 'general_enquiry'
};

/**
 * Approved Lead Sources
 */
export const VALID_LEAD_SOURCES = new Set([
  'modal_appointment',
  'contact_page',
  'internship_enquiry',
  'manual_crm',
  'phone_inquiry',
  'meta_ads',
  'google_ads'
]);

/**
 * Standard RFC 5322-compliant email syntax validation.
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (trimmed.length > 254) return false;
  // Strict practical email regex
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return regex.test(trimmed);
}

/**
 * Resolves display service name to canonical CRM ServiceOffering enum.
 * Rejects unknown services with an error rather than silently defaulting.
 * 
 * @param {string} serviceDisplay
 * @returns {{ valid: boolean, offering?: string, pendingApproval?: boolean, error?: string }}
 */
export function mapServiceToOffering(serviceDisplay) {
  if (!serviceDisplay || typeof serviceDisplay !== 'string' || !serviceDisplay.trim()) {
    return {
      valid: false,
      error: 'Clinical service selection is required.'
    };
  }

  const normalized = serviceDisplay.trim().toLowerCase();

  if (APPROVED_SERVICE_MAP[normalized]) {
    return {
      valid: true,
      offering: APPROVED_SERVICE_MAP[normalized],
      pendingApproval: false
    };
  }

  if (PENDING_APPROVAL_SERVICE_MAP[normalized]) {
    return {
      valid: true,
      offering: PENDING_APPROVAL_SERVICE_MAP[normalized],
      pendingApproval: true
    };
  }

  return {
    valid: false,
    error: `Unknown service requested: "${serviceDisplay}". Please select an approved clinical offering.`
  };
}

/**
 * Parses and normalizes raw contact input into E.164 phone and optional email.
 * 
 * Rules:
 * - Phone is mandatory.
 * - Email is optional.
 * - If an email is attempted (contains '@') but is invalid, it is rejected with an error.
 * - Never silently discards an invalid email.
 * - Email-only inputs are rejected with a clear message.
 * 
 * @param {string} rawContact
 * @returns {{ phone: string | null, email: string | null, error?: string }}
 */
export function parseAndNormalizeContact(rawContact) {
  if (!rawContact || typeof rawContact !== 'string' || !rawContact.trim()) {
    return {
      phone: null,
      email: null,
      error: 'A valid telephone number is required.'
    };
  }

  let text = rawContact.trim();
  let extractedEmail = null;

  // Check if an email address was attempted in the input
  if (text.includes('@')) {
    // Split into tokens to find the email candidate
    const tokens = text.split(/\s+/);
    const emailCandidate = tokens.find((t) => t.includes('@'));

    if (emailCandidate) {
      if (!isValidEmail(emailCandidate)) {
        return {
          phone: null,
          email: null,
          error: 'The email address provided is invalid. Please check your email syntax or provide a phone number only.'
        };
      }
      extractedEmail = emailCandidate.toLowerCase().trim();
      // Remove email candidate to isolate remaining phone digits
      text = text.replace(emailCandidate, '').trim();
    }
  }

  // Clean phone characters (keep digits and leading +)
  let cleanPhone = text.replace(/[^\d+]/g, '');

  if (cleanPhone.startsWith('+')) {
    cleanPhone = '+' + cleanPhone.slice(1).replace(/\+/g, '');
  } else {
    cleanPhone = cleanPhone.replace(/\+/g, '');
  }

  // If no telephone digits were provided
  if (!cleanPhone || cleanPhone === '+') {
    if (extractedEmail) {
      return {
        phone: null,
        email: extractedEmail,
        error: 'A contact telephone number is required. Email-only submissions are not accepted for clinical appointments.'
      };
    }
    return {
      phone: null,
      email: null,
      error: 'Please enter a valid telephone number.'
    };
  }

  // Handle standard international prefix '00'
  if (cleanPhone.startsWith('00')) {
    cleanPhone = '+' + cleanPhone.slice(2);
  }

  let normalizedPhone = null;

  if (cleanPhone.startsWith('+')) {
    // International number with country code
    const digitsOnly = cleanPhone.slice(1);
    if (/^[1-9]\d{7,14}$/.test(digitsOnly)) {
      normalizedPhone = cleanPhone;
    }
  } else {
    // Unprefixed numbers: inspect patterns without inventing country codes
    // 1. 10-digit Indian mobile number (6, 7, 8, 9 prefix)
    if (/^[6-9]\d{9}$/.test(cleanPhone)) {
      normalizedPhone = `+91${cleanPhone}`;
    }
    // 2. 11-digit Indian number with leading 0 (e.g., 09876543210)
    else if (/^0[6-9]\d{9}$/.test(cleanPhone)) {
      normalizedPhone = `+91${cleanPhone.slice(1)}`;
    }
    // 3. 12-digit Indian number with 91 prefix without plus (e.g., 919876543210)
    else if (/^91[6-9]\d{9}$/.test(cleanPhone)) {
      normalizedPhone = `+${cleanPhone}`;
    }
  }

  if (!normalizedPhone || !/^\+[1-9]\d{7,14}$/.test(normalizedPhone)) {
    return {
      phone: null,
      email: extractedEmail,
      error: 'Please enter a valid telephone number with country code (e.g., +91 98765 43210).'
    };
  }

  return {
    phone: normalizedPhone,
    email: extractedEmail
  };
}

/**
 * Generates an RFC 4122 v4 UUID for distributed idempotency tracking.
 * STRICT SECURITY INVARIANT: Must use cryptographically secure RNG.
 * Throws an Error if secure crypto is unavailable. Never falls back to Math.random().
 * 
 * @returns {string} UUID v4
 */
export function generateIdempotencyKey() {
  if (typeof crypto !== 'undefined') {
    if (typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    if (typeof crypto.getRandomValues === 'function') {
      const bytes = new Uint8Array(16);
      crypto.getRandomValues(bytes);
      bytes[6] = (bytes[6] & 0x0f) | 0x40; // Version 4
      bytes[8] = (bytes[8] & 0x3f) | 0x80; // Variant 10xx
      const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
      return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    }
  }
  throw new Error('Cryptographically secure random number generator is unavailable.');
}

/**
 * Extracts browser-side UTM marketing attribution and referrer safely.
 * Preserves campaign attribution across internal site navigation using sessionStorage.
 * @returns {object}
 */
export function extractAttribution() {
  return getAttribution();
}

/**
 * Resolves the API Base URL from Vite or Process environment variables.
 * @returns {string}
 */
export function getApiBaseUrl() {
  const envUrl =
    (typeof process !== 'undefined' && process.env?.VITE_API_BASE_URL) ||
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL) ||
    'http://localhost:4000/api/v1';

  return envUrl.replace(/\/+$/, '');
}

/**
 * Submits a public consultation lead enquiry to the central CRM API.
 * 
 * @param {object} params
 * @param {string} params.fullName - Visitor's full name (required, min 2 chars)
 * @param {string} [params.contactInfo] - Combined raw contact info
 * @param {string} [params.phone] - Directly supplied telephone number
 * @param {string} [params.email] - Directly supplied email address (optional)
 * @param {string} params.service - Service requested display title
 * @param {string} [params.customService] - Specific custom service enquiry text (required if custom enquiry chosen)
 * @param {string} [params.notes] - Clinical enquiry notes or description
 * @param {string} [params.source] - Lead source ('modal_appointment' | 'contact_page')
 * @param {string} [params.honeypot] - Hidden bot trap input
 * @param {string} [params.idempotencyKey] - Unguessable UUID v4 key (preserved across retries)
 * @returns {Promise<{ success: boolean, referenceCode?: string, message?: string, errorType?: string, data?: unknown }>}
 */
export async function submitLeadToApi(params) {
  // Support field naming conventions
  const name = (params.fullName || params.name || '').trim();
  const contact = (params.contactInfo || params.contact || '').trim();
  const rawService = params.service || params.serviceInterest;
  const customDescription = (params.customService || params.custom_service_description || '').trim();
  const notes = (params.notes || params.message || '').trim();
  const source = params.source || 'modal_appointment';
  const honeypot = params.honeypot || params.hp_clinical_validation || '';

  // 1. Client-Side Validation: Full Name
  if (!name || name.length < 2) {
    return {
      success: false,
      errorType: 'VALIDATION',
      message: 'Please provide your full name (minimum 2 characters).'
    };
  }

  // 2. Client-Side Validation: Phone & Email Separation & Validation
  let phone = params.phone ? params.phone.trim() : null;
  let email = params.email ? params.email.trim() : null;

  if (params.email && params.email.trim() !== '') {
    if (!isValidEmail(params.email)) {
      return {
        success: false,
        errorType: 'VALIDATION',
        message: 'The email address provided is invalid. Please enter a valid email or leave it blank.'
      };
    }
    email = params.email.trim().toLowerCase();
  }

  if (!phone) {
    const contactResult = parseAndNormalizeContact(contact);
    if (contactResult.error) {
      return {
        success: false,
        errorType: 'VALIDATION',
        message: contactResult.error
      };
    }
    phone = contactResult.phone;
    if (!email && contactResult.email) {
      email = contactResult.email;
    }
  } else {
    const directResult = parseAndNormalizeContact(phone);
    if (directResult.error) {
      return {
        success: false,
        errorType: 'VALIDATION',
        message: directResult.error
      };
    }
    phone = directResult.phone;
  }

  // 3. Client-Side Validation: Service Offering Mapping & Custom Description
  const serviceResult = mapServiceToOffering(rawService);
  if (!serviceResult.valid) {
    return {
      success: false,
      errorType: 'VALIDATION',
      message: serviceResult.error
    };
  }

  const normalizedService = (rawService || '').trim().toLowerCase();
  const isCustomService = normalizedService.includes('other') || normalizedService.includes('custom');
  if (isCustomService && !customDescription) {
    return {
      success: false,
      errorType: 'VALIDATION',
      message: 'Please provide a brief description of your custom enquiry.'
    };
  }

  // 4. Client-Side Validation: Source Validation (Do NOT invent source mappings)
  if (!VALID_LEAD_SOURCES.has(source)) {
    return {
      success: false,
      errorType: 'VALIDATION',
      message: `Invalid lead source: "${source}".`
    };
  }

  // 5. Manage Idempotency Key (RFC 4122 v4 UUID)
  let idempotencyKey = params.idempotencyKey;
  if (!idempotencyKey) {
    try {
      idempotencyKey = generateIdempotencyKey();
    } catch {
      return {
        success: false,
        errorType: 'VALIDATION',
        message: 'Cryptographically secure environment is required for lead submission.'
      };
    }
  }

  // 6. Extract Marketing Attribution
  const attribution = extractAttribution();

  // 7. Build Strict API Payload
  const payload = {
    full_name: name.slice(0, 150),
    phone: phone,
    email: email ? email.slice(0, 255) : '',
    service_requested: serviceResult.offering,
    custom_service_description: customDescription ? customDescription.slice(0, 255) : undefined,
    notes: notes ? notes.slice(0, 2000) : undefined,
    source: source,
    source_page: attribution.source_page,
    utm_source: attribution.utm_source,
    utm_medium: attribution.utm_medium,
    utm_campaign: attribution.utm_campaign,
    utm_content: attribution.utm_content,
    utm_term: attribution.utm_term,
    referrer: attribution.referrer,
    hp_clinical_validation: honeypot || undefined
  };

  // 8. Network Dispatch
  const apiUrl = `${getApiBaseUrl()}/public/leads`;

  try {
    const headers = {
      'Content-Type': 'application/json',
      'Idempotency-Key': idempotencyKey
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => null);

    if (response.status === 201) {
      return {
        success: true,
        referenceCode: data?.data?.reference_code,
        message: data?.data?.message || 'Your consultation enquiry has been securely received by SAVELIX Clinic.',
        createdAt: data?.data?.created_at,
        replayed: response.headers.get('x-idempotency-replay') === 'true'
      };
    }

    if (response.status === 409) {
      return {
        success: false,
        errorType: 'DUPLICATE',
        message: data?.error?.message || 'You have already submitted a response. Our team will contact you shortly.'
      };
    }

    if (response.status === 429) {
      return {
        success: false,
        errorType: 'RATE_LIMIT',
        message: data?.error?.message || 'Too many consultation inquiries submitted from this IP address. Please try again in an hour.'
      };
    }

    if (response.status === 422) {
      const details = data?.error?.details;
      const detailMsg = Array.isArray(details) ? details.map((d) => d.message).join('; ') : null;
      return {
        success: false,
        errorType: 'VALIDATION',
        message: detailMsg || data?.error?.message || 'Please review and correct the form information.'
      };
    }

    return {
      success: false,
      errorType: 'API_ERROR',
      message: data?.error?.message || 'An unexpected error occurred while processing your request. Please try again.'
    };
  } catch {
    return {
      success: false,
      errorType: 'NETWORK',
      message: 'Unable to reach the consultation service. Please check your internet connection or contact the clinic directly.'
    };
  }
}
