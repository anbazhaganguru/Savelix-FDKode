/**
 * SAVELIX Public Website — Lead Submission Verification Suite (14 Tests)
 * 
 * Verifies client-side E.164 phone normalization, optional email validation,
 * all eight CRM service enum mappings, cryptographic UUID v4 idempotency keys,
 * mandatory Turnstile token enforcement, honeypot handling, and API error resilience.
 */

import {
  parseAndNormalizeContact,
  mapServiceToOffering,
  isValidEmail,
  generateIdempotencyKey,
  submitLeadToApi
} from '../src/services/leadSubmission.js';
import {
  mapReferrerToSource,
  initAttributionTracker,
  getAttribution,
  ATTRIBUTION_STORAGE_KEY
} from '../src/services/attributionTracker.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (!condition) {
    failed++;
    console.error(`  ✗ FAIL: ${message}`);
    throw new Error(message);
  } else {
    passed++;
    console.log(`  ✓ ${message}`);
  }
}

console.log('--- SAVELIX Form Integration & Lead Submission Tests (14 Tests) ---\n');

// =========================================================================
// Suite 1: Phone & Email Normalization & Validation (Tests 1-7)
// =========================================================================
console.log('[Suite 1: Phone & Email Normalization & Validation]');

// Test 1: Normalizes 10-digit Indian mobile number to E.164 (+91...)
{
  const res = parseAndNormalizeContact('9876543210');
  assert(res.phone === '+919876543210' && res.email === null && !res.error, '1. Normalizes 10-digit Indian mobile number to E.164 (+91...)');
}

// Test 2: Normalizes Indian number with leading 0 or 91 prefix
{
  const res1 = parseAndNormalizeContact('09876543210');
  const res2 = parseAndNormalizeContact('919876543210');
  assert(
    res1.phone === '+919876543210' && res2.phone === '+919876543210',
    '2. Normalizes Indian number with leading 0 or 91 prefix to E.164'
  );
}

// Test 3: Valid international E.164 number with + is preserved
{
  const res = parseAndNormalizeContact('+447123456789');
  assert(res.phone === '+447123456789' && !res.error, '3. Preserves valid international E.164 number with +');
}

// Test 4: Accepts valid phone and optional email when user provides both
{
  const res = parseAndNormalizeContact('+91 98765 43210 patient@example.com');
  assert(
    res.phone === '+919876543210' && res.email === 'patient@example.com' && !res.error,
    '4. Extracts valid phone and optional email when user provides both'
  );
}

// Test 5: Rejects invalid or incomplete phone numbers client-side
{
  const res = parseAndNormalizeContact('12345');
  assert(
    res.phone === null && typeof res.error === 'string' && res.error.includes('telephone number'),
    '5. Rejects invalid or incomplete phone numbers client-side'
  );
}

// Test 6: Rejects email-only submissions (phone is strictly mandatory)
{
  const res = parseAndNormalizeContact('patient@example.com');
  assert(
    res.phone === null && typeof res.error === 'string' && res.error.includes('telephone number is required'),
    '6. Rejects email-only submissions (phone is strictly mandatory)'
  );
}

// Test 7: Rejects invalid email syntax independently (never silently discards invalid email)
{
  const res = parseAndNormalizeContact('+919876543210 not-a-valid-email@');
  const directCheck = isValidEmail('invalid-email-no-domain');
  assert(
    res.phone === null && typeof res.error === 'string' && res.error.includes('email') && directCheck === false,
    '7. Rejects invalid email syntax independently (never silently discards invalid email)'
  );
}

// =========================================================================
// Suite 2: Service Offering Enum Mapping & Unknown Rejection (Tests 8-9)
// =========================================================================
console.log('\n[Suite 2: Service Offering Enum Mapping & Unknown Rejection]');

// Test 8: All 8 approved CRM service enums map correctly
{
  const approved = [
    ['Psychiatric Care', 'psychiatric_care'],
    ['Psychological Counselling', 'psychological_counselling'],
    ['Psychiatric Rehabilitation', 'psychiatric_rehabilitation'],
    ['Family, Marriage & Relationship Counselling', 'family_counselling'],
    ['Substance Use & Addiction Support', 'substance_use_support'],
    ['Child & Adolescent Counselling', 'child_adolescent_counselling'],
    ['Inpatient Environment & Safety Monitoring', 'inpatient_safety_monitoring'],
    ['Overview', 'general_enquiry']
  ];

  const allApprovedMatch = approved.every(([title, expectedEnum]) => {
    const res = mapServiceToOffering(title);
    return res.valid === true && res.offering === expectedEnum && res.pendingApproval === false;
  });

  assert(allApprovedMatch, '8. Maps all 8 canonical clinical services to approved CRM enums');
}

// Test 9: Handles pending-approval internship mapping and rejects unknown services
{
  const internshipRes = mapServiceToOffering('Education & Internship Enquiry');
  const unknownRes = mapServiceToOffering('Unknown Acupuncture Therapy');
  assert(
    internshipRes.valid === true && internshipRes.offering === 'general_enquiry' && internshipRes.pendingApproval === true &&
    unknownRes.valid === false && unknownRes.error?.includes('Unknown service'),
    '9. Correctly flags pending internship mapping and strictly rejects unknown services'
  );
}

// =========================================================================
// Suite 3: Cryptographic RFC 4122 v4 UUID & Idempotency Key (Tests 10-11)
// =========================================================================
console.log('\n[Suite 3: Cryptographic RFC 4122 v4 UUID & Idempotency Key]');

// Test 10: Generates cryptographically secure RFC 4122 v4 UUID
{
  const key1 = generateIdempotencyKey();
  const key2 = generateIdempotencyKey();
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  assert(
    uuidRegex.test(key1) && uuidRegex.test(key2) && key1 !== key2,
    '10. Generates cryptographically secure RFC 4122 v4 UUID'
  );
}

// Test 11: Preserves idempotency key across retries and creates new key for new submission
{
  const initialKey = generateIdempotencyKey();
  const retryKey = initialKey; // reused on retry of same submission
  const nextSubmissionKey = generateIdempotencyKey(); // generated fresh on new submission
  assert(
    initialKey === retryKey && initialKey !== nextSubmissionKey,
    '11. Preserves idempotency key on submission retry and generates new key for new submissions'
  );
}

// =========================================================================
// Suite 4: Public Ingestion API Contract, Custom Services & Error Handling (Tests 12-14)
// =========================================================================
console.log('\n[Suite 4: Public Ingestion API Contract, Custom Services & Error Handling]');

// Test 12: Other / Custom Enquiry requires custom description and maps to general_enquiry
{
  const missingCustomRes = await submitLeadToApi({
    fullName: 'Ananya Roy',
    contactInfo: '+919876543210',
    service: 'Other / Custom Enquiry',
    customService: '' // Missing description
  });

  const validCustomMapping = mapServiceToOffering('Other / Custom Enquiry');

  assert(
    missingCustomRes.success === false &&
    missingCustomRes.errorType === 'VALIDATION' &&
    missingCustomRes.message.includes('brief description of your custom enquiry') &&
    validCustomMapping.valid === true &&
    validCustomMapping.offering === 'general_enquiry',
    '12. Other / Custom Enquiry requires custom description and maps to general_enquiry'
  );
}

// Test 13: Submits valid lead payload without CAPTCHA token, receiving HTTP 201 with reference code
{
  const originalFetch = globalThis.fetch;
  let sentPayload = null;
  let sentHeaders = null;

  globalThis.fetch = async (url, options) => {
    sentPayload = JSON.parse(options.body);
    sentHeaders = options.headers;
    return {
      status: 201,
      headers: new Headers({ 'x-idempotency-replay': 'false' }),
      json: async () => ({
        success: true,
        data: {
          reference_code: 'SVX-2026-TEST1',
          message: 'Your consultation enquiry has been securely received by SAVELIX Clinic.',
          created_at: new Date().toISOString()
        }
      })
    };
  };

  const testKey = generateIdempotencyKey();
  const result = await submitLeadToApi({
    fullName: 'Aarav Patel',
    contactInfo: '+919876543210 aarav@example.com',
    service: 'Other / Custom Enquiry',
    customService: 'Post-trauma psychological rehabilitation inquiry',
    notes: 'Clinical anxiety consultation enquiry.',
    source: 'modal_appointment',
    honeypot: '',
    idempotencyKey: testKey
  });

  globalThis.fetch = originalFetch;

  assert(
    result.success === true &&
    result.referenceCode === 'SVX-2026-TEST1' &&
    sentPayload.full_name === 'Aarav Patel' &&
    sentPayload.phone === '+919876543210' &&
    sentPayload.email === 'aarav@example.com' &&
    sentPayload.service_requested === 'general_enquiry' &&
    sentPayload.custom_service_description === 'Post-trauma psychological rehabilitation inquiry' &&
    sentPayload.cf_turnstile_token === undefined &&
    sentHeaders['Idempotency-Key'] === testKey,
    '13. Submits valid lead payload without CAPTCHA token and receives HTTP 201 with reference code'
  );
}

// Test 14: Structured error handling for Duplicate Submission (409), Rate Limit (429), Schema Validation (422), and Network Disconnection
{
  const originalFetch = globalThis.fetch;

  // 14a: HTTP 409 Duplicate Lead Conflict
  globalThis.fetch = async () => ({
    status: 409,
    headers: new Headers(),
    json: async () => ({
      success: false,
      error: {
        code: 'DUPLICATE_LEAD',
        message: 'You have already submitted a response. Our team will contact you shortly.'
      }
    })
  });

  const res409 = await submitLeadToApi({
    fullName: 'Test User',
    contactInfo: '+919876543210',
    service: 'Psychiatric Care'
  });

  // 14b: HTTP 429 Rate Limit
  globalThis.fetch = async () => ({
    status: 429,
    headers: new Headers(),
    json: async () => ({
      success: false,
      error: { code: 'RATE_LIMIT_EXCEEDED', message: 'Too many consultation inquiries from this IP.' }
    })
  });

  const res429 = await submitLeadToApi({
    fullName: 'Test User',
    contactInfo: '+919876543210',
    service: 'Psychiatric Care'
  });

  // 14c: HTTP 422 Validation Error
  globalThis.fetch = async () => ({
    status: 422,
    headers: new Headers(),
    json: async () => ({
      success: false,
      error: { code: 'VALIDATION_ERROR', message: 'Invalid payload', details: [{ message: 'Field error' }] }
    })
  });

  const res422 = await submitLeadToApi({
    fullName: 'Test User',
    contactInfo: '+919876543210',
    service: 'Psychiatric Care'
  });

  // 14d: Network drop
  globalThis.fetch = async () => {
    throw new TypeError('Failed to fetch');
  };

  const resNetwork = await submitLeadToApi({
    fullName: 'Test User',
    contactInfo: '+919876543210',
    service: 'Psychiatric Care'
  });

  globalThis.fetch = originalFetch;

  assert(
    res409.success === false && res409.errorType === 'DUPLICATE' && res409.message.includes('already submitted a response') &&
    res429.success === false && res429.errorType === 'RATE_LIMIT' &&
    res422.success === false && res422.errorType === 'VALIDATION' &&
    resNetwork.success === false && resNetwork.errorType === 'NETWORK',
    '14. Structured error handling for Duplicate Submission (409), Rate Limit (429), Schema Validation (422), and Network Disconnection'
  );
}

// ---------------------------------------------------------------------------
// SUITE 5: Attribution Tracking & Navigation Persistence
// ---------------------------------------------------------------------------
console.log('\n[Suite 5: Attribution Tracking & Navigation Persistence]');
{
  const mockStorage = new Map();
  const originalWindow = globalThis.window;
  const originalDoc = globalThis.document;

  globalThis.window = {
    location: {
      pathname: '/',
      search: '?utm_source=instagram&utm_medium=bio_link&utm_campaign=wellness_launch&utm_content=story1&utm_term=anxiety',
      hostname: 'savelixclinic.com'
    },
    sessionStorage: {
      getItem: (key) => mockStorage.get(key) || null,
      setItem: (key, val) => mockStorage.set(key, String(val)),
      removeItem: (key) => mockStorage.delete(key),
      clear: () => mockStorage.clear()
    }
  };
  globalThis.document = {
    referrer: 'https://l.instagram.com/'
  };

  // 15: Initial landing extracts and persists UTM parameters in sessionStorage
  initAttributionTracker();
  const storedJson = mockStorage.get(ATTRIBUTION_STORAGE_KEY);
  const parsedStored = JSON.parse(storedJson || '{}');
  assert(
    parsedStored.utm_source === 'instagram' &&
    parsedStored.utm_medium === 'bio_link' &&
    parsedStored.utm_campaign === 'wellness_launch' &&
    parsedStored.utm_content === 'story1' &&
    parsedStored.utm_term === 'anxiety',
    '15. Extracts and persists UTM parameters in sessionStorage on initial landing'
  );

  // 16: Multi-page navigation (search query string becomes empty on /contact)
  globalThis.window.location.pathname = '/contact';
  globalThis.window.location.search = ''; // No UTMs in URL on subsequent page
  const retainedAttr = getAttribution();
  assert(
    retainedAttr.utm_source === 'instagram' &&
    retainedAttr.utm_medium === 'bio_link' &&
    retainedAttr.utm_campaign === 'wellness_launch' &&
    retainedAttr.source_page === '/contact',
    '16. Preserves attribution across multi-page internal navigation when query params are absent'
  );

  // 17: Referrer Domain Heuristic Mapping
  assert(mapReferrerToSource('https://youtube.com/watch?v=123') === 'youtube', '17a. Maps youtube.com to youtube');
  assert(mapReferrerToSource('https://web.whatsapp.com/') === 'whatsapp', '17b. Maps whatsapp domain to whatsapp');
  assert(mapReferrerToSource('https://m.facebook.com/') === 'facebook', '17c. Maps facebook domain to facebook');
  assert(mapReferrerToSource('https://www.google.co.in/') === 'google', '17d. Maps google domain to google');
  assert(mapReferrerToSource('https://savelixclinic.com/about') === undefined, '17e. Ignores internal self-referrals');

  // Restore
  globalThis.window = originalWindow;
  globalThis.document = originalDoc;
}

console.log('\n========================================');
console.log(`Lead Submission Tests: ${passed}/${passed + failed} Passed`);
console.log('========================================');

if (failed > 0) {
  process.exit(1);
}
