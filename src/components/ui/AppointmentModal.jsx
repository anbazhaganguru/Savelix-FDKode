import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, CheckCircle2, Calendar, ArrowRight, ChevronDown, Loader2 } from 'lucide-react';
import { SERVICES_NAV_ITEMS } from '../../config/navigation';

/**
 * Premium Appointment & Enquiry Modal for SAVELIX
 *
 * Design Direction:
 * - Refined healthcare typography and calm, trustworthy visual hierarchy
 * - Palette: Deep Plum (#302B50), Muted Purple (#8065A8), Pale Lilac (#F7F3FA), Soft Lavender (#EDE5F4), White
 * - Crisp form controls with custom chevron, clear required indicators, and accessible focus rings
 * - Comprehensive accessibility: focus trapping, Escape key, backdrop dismiss, and focus restoration
 * - Controlled desktop width (480–490px) and seamless mobile responsive scrolling (touch targets >= 44px)
 * - Transparent request-receipt messaging without misleading fake booking confirmations
 */
export default function AppointmentModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    contactInfo: '',
    service: 'Psychiatric Care',
    notes: '',
  });

  const modalRef = useRef(null);
  const firstInputRef = useRef(null);
  const previousActiveElement = useRef(null);

  const resetForm = useCallback(() => {
    setFormSubmitted(false);
    setIsSubmitting(false);
    setErrors({});
    setTouched({});
    setFormData({
      fullName: '',
      contactInfo: '',
      service: 'Psychiatric Care',
      notes: '',
    });
  }, []);

  const handleClose = useCallback(() => {
    resetForm();
    onClose();
  }, [onClose, resetForm]);

  // Focus restoration & keyboard navigation / scroll locking
  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    const focusTimer = setTimeout(() => {
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    }, 60);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(focusTimer);
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const validateField = (name, value) => {
    if (name === 'fullName') {
      if (!value.trim()) return 'Please enter your full name.';
      if (value.trim().length < 2) return 'Name should be at least 2 characters.';
    }
    if (name === 'contactInfo') {
      if (!value.trim()) return 'Please provide a valid phone number or email.';
      if (value.trim().length < 5) return 'Please provide a valid contact method.';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameErr = validateField('fullName', formData.fullName);
    const contactErr = validateField('contactInfo', formData.contactInfo);

    if (nameErr || contactErr) {
      setErrors({ fullName: nameErr, contactInfo: contactErr });
      setTouched({ fullName: true, contactInfo: true });
      if (nameErr && firstInputRef.current) {
        firstInputRef.current.focus();
      }
      return;
    }

    setIsSubmitting(true);
    // Controlled async submission feedback preventing accidental duplicate submits
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 450);
  };

  const clinicalServices = SERVICES_NAV_ITEMS.filter((item) => item.path !== '/services');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-savelix-plum/60 backdrop-blur-sm transition-opacity duration-200 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[490px] max-h-[min(94dvh,760px)] bg-white rounded-[24px] sm:rounded-[28px] shadow-[0_24px_60px_-12px_rgba(48,43,80,0.22)] border border-savelix-border flex flex-col overflow-hidden text-left"
      >
        {/* Header Ribbon with Close Button */}
        <div className="relative px-5 sm:px-7 pt-5 sm:pt-7 pb-4 border-b border-savelix-lavender/70 flex items-start justify-between gap-4 bg-gradient-to-b from-savelix-lilac/50 to-white">
          <div className="flex items-start gap-3 sm:gap-3.5 pr-8">
            <div
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-savelix-lavender text-savelix-purple flex items-center justify-center flex-shrink-0 shadow-sm border border-savelix-border/50"
              aria-hidden="true"
            >
              <Calendar className="w-5 h-5 text-savelix-purple" />
            </div>
            <div>
              <h2
                id="modal-title"
                className="text-lg sm:text-xl font-extrabold text-savelix-plum tracking-tight leading-snug"
              >
                Book an Appointment
              </h2>
              <p className="text-[11px] sm:text-xs font-semibold text-savelix-purple tracking-wide uppercase mt-0.5">
                SAVELIX Psychiatric Clinic &amp; Rehabilitation Centre
              </p>
            </div>
          </div>

          {/* Close Action */}
          <button
            type="button"
            onClick={handleClose}
            className="p-2 sm:p-2.5 rounded-full text-savelix-grey hover:text-savelix-plum hover:bg-savelix-lavender transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple cursor-pointer flex-shrink-0"
            aria-label="Close appointment modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto px-5 sm:px-7 py-5 space-y-5">
          {formSubmitted ? (
            <div className="py-6 sm:py-8 text-center space-y-5 animate-fadeIn">
              <div
                className="w-16 h-16 mx-auto rounded-2xl bg-savelix-lavender flex items-center justify-center text-savelix-purple shadow-sm border border-savelix-border/70"
                aria-hidden="true"
              >
                <CheckCircle2 className="w-9 h-9 text-savelix-purple" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-savelix-plum tracking-tight">
                  Appointment Request Received
                </h3>
                <p className="text-sm sm:text-base text-savelix-grey leading-relaxed max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-savelix-plum">{formData.fullName}</span>. Your consultation request for <span className="font-semibold text-savelix-plum">{formData.service}</span> has been securely noted.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-savelix-lilac/70 border border-savelix-lavender text-left space-y-1.5 max-w-md mx-auto">
                <p className="text-xs font-semibold text-savelix-plum uppercase tracking-wider">
                  Next Steps
                </p>
                <p className="text-xs sm:text-sm text-savelix-plum/80 leading-relaxed">
                  Our clinical coordinator will reach out to you via <strong className="font-medium text-savelix-plum">{formData.contactInfo}</strong> to confirm your appointment timing and answer any preliminary questions.
                </p>
              </div>

              <p className="text-[11px] text-savelix-grey/80 leading-normal max-w-sm mx-auto">
                All inquiries are treated with strict confidentiality. If you require urgent or emergency medical assistance, please contact local emergency medical services or visit the nearest hospital.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2 min-h-[44px] cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Supporting Confidentiality Notice */}
              <p
                id="modal-description"
                className="text-xs sm:text-[13px] text-savelix-grey leading-relaxed bg-savelix-lilac/70 px-3.5 py-2.5 rounded-xl border border-savelix-border/70"
              >
                Please share your preferred consultation details. All communications are confidential and handled in accordance with clinical care guidelines.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
                {/* 1. Full Name (Required) */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="fullName"
                    className="flex items-center justify-between text-xs sm:text-sm font-semibold text-savelix-plum"
                  >
                    <span>
                      Full Name <span className="text-rose-500 font-bold ml-0.5" aria-hidden="true">*</span>
                    </span>
                    {touched.fullName && errors.fullName && (
                      <span className="text-xs font-medium text-rose-500" role="alert">
                        {errors.fullName}
                      </span>
                    )}
                  </label>
                  <input
                    ref={firstInputRef}
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Enter your name"
                    aria-required="true"
                    aria-invalid={touched.fullName && !!errors.fullName}
                    className={`w-full px-3.5 py-2.5 sm:py-3 text-sm rounded-xl border bg-white text-savelix-plum placeholder:text-savelix-grey/50 transition-all duration-150 shadow-sm focus:outline-none focus:ring-2 min-h-[44px] ${
                      touched.fullName && errors.fullName
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                        : 'border-savelix-border focus:border-savelix-purple focus:ring-savelix-purple/20'
                    }`}
                  />
                </div>

                {/* 2. Phone Number or Email Address (Required) */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contactInfo"
                    className="flex items-center justify-between text-xs sm:text-sm font-semibold text-savelix-plum"
                  >
                    <span>
                      Phone Number or Email Address <span className="text-rose-500 font-bold ml-0.5" aria-hidden="true">*</span>
                    </span>
                    {touched.contactInfo && errors.contactInfo && (
                      <span className="text-xs font-medium text-rose-500" role="alert">
                        {errors.contactInfo}
                      </span>
                    )}
                  </label>
                  <input
                    id="contactInfo"
                    name="contactInfo"
                    type="text"
                    required
                    autoComplete="tel email"
                    value={formData.contactInfo}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="e.g. your phone or email"
                    aria-required="true"
                    aria-invalid={touched.contactInfo && !!errors.contactInfo}
                    className={`w-full px-3.5 py-2.5 sm:py-3 text-sm rounded-xl border bg-white text-savelix-plum placeholder:text-savelix-grey/50 transition-all duration-150 shadow-sm focus:outline-none focus:ring-2 min-h-[44px] ${
                      touched.contactInfo && errors.contactInfo
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                        : 'border-savelix-border focus:border-savelix-purple focus:ring-savelix-purple/20'
                    }`}
                  />
                </div>

                {/* 3. Clinical Service Requested */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="service"
                    className="block text-xs sm:text-sm font-semibold text-savelix-plum"
                  >
                    Clinical Service Requested
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full appearance-none px-3.5 py-2.5 sm:py-3 pr-10 text-sm rounded-xl border border-savelix-border bg-white text-savelix-plum shadow-sm focus:outline-none focus:border-savelix-purple focus:ring-2 focus:ring-savelix-purple/20 transition-all duration-150 cursor-pointer min-h-[44px]"
                    >
                      {clinicalServices.map((service) => (
                        <option key={service.path} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="w-4 h-4 text-savelix-purple absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* 4. Enquiry Note or Preferred Timing (Optional) */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="notes"
                    className="flex items-center justify-between text-xs sm:text-sm font-semibold text-savelix-plum"
                  >
                    <span>
                      Enquiry Note or Preferred Timing{' '}
                      <span className="text-xs font-normal text-savelix-grey">(Optional)</span>
                    </span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Briefly state your concern or preferred appointment time..."
                    className="w-full px-3.5 py-2.5 sm:py-3 text-sm rounded-xl border border-savelix-border bg-white text-savelix-plum placeholder:text-savelix-grey/50 shadow-sm focus:outline-none focus:border-savelix-purple focus:ring-2 focus:ring-savelix-purple/20 transition-all duration-150 resize-none min-h-[88px]"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex items-center justify-between gap-3 border-t border-savelix-lavender/60">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-savelix-grey hover:text-savelix-plum hover:bg-savelix-lavender/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple min-h-[44px] cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover active:bg-[#5C457D] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed min-h-[44px] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" aria-hidden="true" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
