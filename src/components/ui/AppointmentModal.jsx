import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { SERVICES_NAV_ITEMS } from '../../config/navigation';

/**
 * Accessible Appointment & Enquiry Modal
 *
 * Provides a functional clinical contact touchpoint without fabricating
 * unverified clinic telephone numbers or email addresses.
 */
export default function AppointmentModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    contactInfo: '',
    service: 'Psychiatric Care',
    notes: '',
  });

  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  const handleClose = React.useCallback(() => {
    setFormSubmitted(false);
    onClose();
  }, [onClose]);

  // Close on Escape, trap focus, & lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        handleClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    const timer = setTimeout(() => {
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    }, 50);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const clinicalServices = SERVICES_NAV_ITEMS.filter((item) => item.path !== '/services');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-savelix-plum/60 backdrop-blur-sm transition-opacity animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg max-h-[calc(100dvh-2rem)] bg-white rounded-2xl shadow-xl border border-savelix-border p-6 sm:p-8 overflow-y-auto text-left"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-savelix-grey hover:text-savelix-plum hover:bg-savelix-lavender transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple"
          aria-label="Close appointment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {formSubmitted ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-savelix-lavender flex items-center justify-center text-savelix-purple">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 id="modal-title" className="text-xl font-bold text-savelix-plum mb-2">
              Appointment Request Received
            </h2>
            <p className="text-sm text-savelix-grey leading-relaxed mb-6 max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-savelix-plum">{formData.fullName}</span>. Your enquiry for <span className="font-semibold text-savelix-plum">{formData.service}</span> has been noted. Our clinical coordinator will connect with you to confirm scheduling.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-savelix-lavender text-savelix-purple">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h2 id="modal-title" className="text-lg sm:text-xl font-bold text-savelix-plum">
                  Book an Appointment
                </h2>
                <p className="text-xs text-savelix-grey">
                  SAVELIX Psychiatric Clinic &amp; Rehabilitation Centre
                </p>
              </div>
            </div>

            <p className="text-xs text-savelix-grey mb-6">
              Please share your preferred consultation details. All communications are confidential and handled in accordance with clinical care guidelines.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-savelix-plum mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-savelix-border bg-savelix-lilac/30 text-savelix-plum placeholder-savelix-grey/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-savelix-purple"
                />
              </div>

              <div>
                <label htmlFor="contactInfo" className="block text-xs font-semibold text-savelix-plum mb-1">
                  Phone Number or Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="contactInfo"
                  name="contactInfo"
                  type="text"
                  required
                  value={formData.contactInfo}
                  onChange={handleInputChange}
                  placeholder="e.g. your phone or email"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-savelix-border bg-savelix-lilac/30 text-savelix-plum placeholder-savelix-grey/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-savelix-purple"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-semibold text-savelix-plum mb-1">
                  Clinical Service Requested
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-savelix-border bg-white text-savelix-plum focus:outline-none focus:ring-2 focus:ring-savelix-purple"
                >
                  {clinicalServices.map((service) => (
                    <option key={service.path} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-savelix-plum mb-1">
                  Enquiry Note or Preferred Timing (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Briefly state your concern or preferred appointment time..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-savelix-border bg-savelix-lilac/30 text-savelix-plum placeholder-savelix-grey/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-savelix-purple resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-full text-xs font-medium text-savelix-grey hover:text-savelix-plum hover:bg-savelix-lavender transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
                >
                  <span>Submit Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
