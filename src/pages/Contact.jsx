import React, { useState, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Calendar,
  Send,
  MapPin,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Loader2
} from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import DecorFlow from '../components/ui/decor/DecorFlow';
import DecorBotanical from '../components/ui/decor/DecorBotanical';
import {
  submitLeadToApi,
  parseAndNormalizeContact,
  generateIdempotencyKey
} from '../services/leadSubmission';

/**
 * SECTION 02 & PAGE 14 — CONTACT US
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 4, 14, 15)
 *
 * Art-directed Clinical Coordination Suite:
 * - Expressive serif italic accents paired with geometric sans-serif typography.
 * - Flat tone transitions (Lilac canvas, Warm White coordination field, Soft Lavender directory).
 * - Zero nested card boxes, zero thin hairline rules, zero resting shadows.
 * - 100% approved content preserved verbatim.
 */
export default function Contact() {
  const { onOpenAppointmentModal } = useOutletContext() || {};
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [serverError, setServerError] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const idempotencyKeyRef = useRef(generateIdempotencyKey());

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    serviceInterest: 'Psychiatric Care',
    customService: '',
    message: '',
    hp_clinical_validation: ''
  });

  const validateField = (name, value) => {
    if (name === 'name') {
      if (!value.trim()) return 'Please enter your full name.';
      if (value.trim().length < 2) return 'Name should be at least 2 characters.';
    }
    if (name === 'contact') {
      if (!value.trim()) return 'Please enter your contact phone number (e.g., +91 98765 43210).';
      const parsed = parseAndNormalizeContact(value);
      if (parsed.error) return parsed.error;
    }
    if (name === 'customService' && formData.serviceInterest === 'Other / Custom Enquiry') {
      if (!value.trim()) return 'Please provide a brief description of your custom enquiry.';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (serverError) setServerError(null);

    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameErr = validateField('name', formData.name);
    const contactErr = validateField('contact', formData.contact);
    const customErr = formData.serviceInterest === 'Other / Custom Enquiry'
      ? validateField('customService', formData.customService)
      : '';

    if (nameErr || contactErr || customErr) {
      setErrors({
        name: nameErr,
        contact: contactErr,
        ...(customErr ? { customService: customErr } : {})
      });
      setTouched({
        name: true,
        contact: true,
        ...(formData.serviceInterest === 'Other / Custom Enquiry' ? { customService: true } : {})
      });
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const result = await submitLeadToApi({
        fullName: formData.name,
        contactInfo: formData.contact,
        service: formData.serviceInterest,
        customService: formData.customService,
        notes: formData.message,
        source: 'contact_page',
        honeypot: formData.hp_clinical_validation,
        idempotencyKey: idempotencyKeyRef.current
      });

      if (result.success) {
        setReferenceCode(result.referenceCode || '');
        setFormSubmitted(true);
        idempotencyKeyRef.current = generateIdempotencyKey();
      } else {
        setServerError(result.message || 'Unable to submit your enquiry. Please verify your details and try again.');
      }
    } catch {
      setServerError('A network error occurred. Please verify your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    'Psychiatric Care',
    'Psychological Counselling',
    'Psychiatric Rehabilitation',
    'Family, Marriage & Relationship Counselling',
    'Substance Use & Addiction Support',
    'Child & Adolescent Counselling',
    'Inpatient Environment & Safety Monitoring',
    'Education & Internship Enquiry',
    'Other / Custom Enquiry'
  ];

  const locationPhrases = [
    'Psychiatric Rehabilitation Centre in Ambattur',
    'Mental Health Clinic in Chennai',
    'Psychological Counselling in Ambattur',
    'Psychiatric clinic in Pudur',
    'Mental health clinic near Pudur',
    'Psychology Internship in Chennai',
  ];

  return (
    <div className="w-full bg-savelix-lilac min-h-[100dvh] text-savelix-plum">

      {/* Full-Width Image-Led Editorial Hero */}
      <PageHero
        title={
          <>
            Take the First Step Towards{' '}
            <span className="font-serif italic font-normal text-savelix-purple">
              Better Mental Health
            </span>
          </>
        }
        subtitle="Your mental health matters."
        description="At Savelix Psychiatric Clinic & Rehabilitation Centre, we provide compassionate psychiatric care, professional psychological counselling, and personalised rehabilitation support to help individuals and families move towards improved emotional well-being and quality of life. You don't have to face your challenges alone. Let us support you on your journey towards recovery."
        image={`${import.meta.env.BASE_URL}assets/heroes/contact.jpg`}
        imageAlt="Savelix Mental Health Coordination & Clinic Environment"
        imagePosition="object-[right_25%] lg:object-[right_20%]"
        actions={
          onOpenAppointmentModal && (
            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-base font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple cursor-pointer min-h-[48px]"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </button>
          )
        }
      />

      {/* Main Coordination Suite: Two-Column Consultation Layout on Crisp White Ground */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Background SVG Flow Decoration (Left Outer Corner) */}
        <DecorFlow
          variant="left"
          className="top-8 left-0 sm:top-14 sm:left-0 lg:top-16 lg:left-0"
          opacity="opacity-45 sm:opacity-60 lg:opacity-75"
          size="w-44 sm:w-60 lg:w-80 xl:w-[420px] h-auto"
        />

        {/* Background SVG Botanical Decoration (Right Outer Corner) */}
        <DecorBotanical
          variant="right"
          className="bottom-6 right-0 sm:bottom-10 sm:right-0 lg:bottom-12 lg:right-0"
          opacity="opacity-40 sm:opacity-55 lg:opacity-70"
          size="w-40 sm:w-56 lg:w-72 xl:w-80 h-auto"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Appointment & Regional Coverage */}
            <div className="lg:col-span-5 space-y-10">
              {/* Direct Appointment Launcher */}
              <div className="p-8 sm:p-10 rounded-[32px] bg-savelix-lavender space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-savelix-plum tracking-tight">
                    Schedule a <span className="font-serif italic font-normal text-savelix-purple">Consultation</span>
                  </h2>
                  <p className="text-base text-savelix-plum/80">
                    Confidential psychiatric and counselling appointments
                  </p>
                </div>

                {onOpenAppointmentModal && (
                  <button
                    type="button"
                    onClick={onOpenAppointmentModal}
                    className="w-full inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple cursor-pointer min-h-[48px]"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Launch Appointment Scheduler</span>
                  </button>
                )}
              </div>

              {/* Regional Coverage Directory */}
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-savelix-plum tracking-tight">
                  Clinical <span className="font-serif italic font-normal text-savelix-purple">Service Areas</span>
                </h3>

                <div className="space-y-3">
                  {locationPhrases.map((phrase, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-[20px] bg-savelix-lilac/70 flex items-center gap-3.5"
                    >
                      <MapPin className="w-5 h-5 text-savelix-purple flex-shrink-0" />
                      <span className="text-base font-semibold text-savelix-plum">
                        {phrase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transparent Disclosure Notice */}
              <div className="p-6 sm:p-8 rounded-[24px] bg-savelix-lilac flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-savelix-purple flex-shrink-0 mt-0.5" />
                <div className="space-y-1 max-w-[50ch]">
                  <h4 className="text-base font-bold text-savelix-plum">
                    Clinic Notice
                  </h4>
                  <p className="text-sm sm:text-base text-savelix-plum/80 leading-relaxed">
                    Official phone number, email address, physical clinic address, and operating hours will be displayed here once verified and provided by the clinic administration.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Consultation Enquiry Request Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 rounded-[32px] bg-savelix-lilac/50 space-y-8" data-ui="form">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-savelix-plum tracking-tight">
                  Consultation &amp; <span className="font-serif italic font-normal text-savelix-purple">Enquiry Request</span>
                </h2>
                <p className="text-base sm:text-lg text-savelix-plum/80">
                  Submit an initial enquiry regarding clinical evaluations, psychotherapy, or rehabilitation programmes.
                </p>
              </div>

              {/* Server Alert Banner */}
              {serverError && (
                <div
                  className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-start gap-3 animate-fadeIn"
                  role="alert"
                >
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-relaxed">{serverError}</span>
                </div>
              )}

              {formSubmitted ? (
                <div className="p-8 sm:p-10 rounded-[24px] bg-white space-y-5 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-savelix-lavender text-savelix-purple flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-savelix-plum">
                    Enquiry Received
                  </h3>

                  {referenceCode && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-savelix-lavender border border-savelix-border/80 text-sm font-mono font-bold text-savelix-plum">
                      <span className="text-savelix-purple font-semibold uppercase tracking-wider text-xs">Reference:</span>
                      <span className="select-all">{referenceCode}</span>
                    </div>
                  )}

                  <p className="text-base sm:text-lg text-savelix-plum/90 leading-relaxed">
                    Thank you, <strong className="font-bold">{formData.name || 'Visitor'}</strong>. Your consultation enquiry for <strong className="font-bold">{formData.serviceInterest}</strong> has been securely recorded. Our clinical coordinator will review your message confidentially.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setReferenceCode('');
                      setServerError(null);
                      setFormData({
                        name: '',
                        contact: '',
                        serviceInterest: 'Psychiatric Care',
                        customService: '',
                        message: '',
                        hp_clinical_validation: ''
                      });
                      idempotencyKeyRef.current = generateIdempotencyKey();
                    }}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-savelix-purple text-white text-base font-semibold hover:bg-savelix-purple-hover transition-colors min-h-[48px] cursor-pointer"
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Invisible Honeypot Field */}
                  <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                    <label htmlFor="contact-hp">Leave this field blank</label>
                    <input
                      id="contact-hp"
                      name="hp_clinical_validation"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.hp_clinical_validation}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="contact-name"
                        className="block text-base font-bold text-savelix-plum"
                      >
                        Full Name <span className="text-rose-500 font-bold ml-0.5" aria-hidden="true">*</span>
                      </label>
                      {touched.name && errors.name && (
                        <span className="text-xs font-semibold text-rose-500" role="alert">
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={touched.name && !!errors.name}
                      className={`w-full px-5 py-4 rounded-2xl bg-white text-savelix-plum text-base placeholder:text-savelix-grey focus-visible:outline-none focus-visible:ring-2 min-h-[48px] ${
                        touched.name && errors.name
                          ? 'border border-rose-400 focus-visible:ring-rose-400'
                          : 'focus-visible:ring-savelix-purple'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="contact-detail"
                        className="block text-base font-bold text-savelix-plum"
                      >
                        Contact Number or Email <span className="text-rose-500 font-bold ml-0.5" aria-hidden="true">*</span>
                      </label>
                      {touched.contact && errors.contact && (
                        <span className="text-xs font-semibold text-rose-500" role="alert">
                          {errors.contact}
                        </span>
                      )}
                    </div>
                    <input
                      id="contact-detail"
                      name="contact"
                      type="text"
                      required
                      placeholder="e.g. +91 98765 43210 (or phone with email)"
                      value={formData.contact}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={touched.contact && !!errors.contact}
                      className={`w-full px-5 py-4 rounded-2xl bg-white text-savelix-plum text-base placeholder:text-savelix-grey focus-visible:outline-none focus-visible:ring-2 min-h-[48px] ${
                        touched.contact && errors.contact
                          ? 'border border-rose-400 focus-visible:ring-rose-400'
                          : 'focus-visible:ring-savelix-purple'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-service"
                      className="block text-base font-bold text-savelix-plum"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="contact-service"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-2xl bg-white text-savelix-plum text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple min-h-[48px] cursor-pointer"
                    >
                      {serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Custom Enquiry Description (when 'Other / Custom Enquiry' chosen) */}
                  {formData.serviceInterest === 'Other / Custom Enquiry' && (
                    <div className="space-y-2 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="contact-custom-service"
                          className="block text-base font-bold text-savelix-plum"
                        >
                          Custom Enquiry Description <span className="text-rose-500 font-bold ml-0.5" aria-hidden="true">*</span>
                        </label>
                        {touched.customService && errors.customService && (
                          <span className="text-xs font-semibold text-rose-500" role="alert">
                            {errors.customService}
                          </span>
                        )}
                      </div>
                      <input
                        id="contact-custom-service"
                        name="customService"
                        type="text"
                        required
                        placeholder="Describe your custom enquiry or requirement..."
                        value={formData.customService}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={touched.customService && !!errors.customService}
                        className={`w-full px-5 py-4 rounded-2xl bg-white text-savelix-plum text-base placeholder:text-savelix-grey focus-visible:outline-none focus-visible:ring-2 min-h-[48px] ${
                          touched.customService && errors.customService
                            ? 'border border-rose-400 focus-visible:ring-rose-400'
                            : 'focus-visible:ring-savelix-purple'
                        }`}
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-base font-bold text-savelix-plum"
                    >
                      Message or Description
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Please briefly describe your enquiry or preferred appointment timing..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-2xl bg-white text-savelix-plum text-base placeholder:text-savelix-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple resize-y min-h-[120px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple cursor-pointer min-h-[48px] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-white" aria-hidden="true" />
                        <span>Submitting Confidential Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Confidential Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
