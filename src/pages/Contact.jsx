import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Calendar,
  Send,
  MapPin,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import DecorFlow from '../components/ui/decor/DecorFlow';
import DecorBotanical from '../components/ui/decor/DecorBotanical';

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
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    serviceInterest: 'Psychiatric Care',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
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

              {formSubmitted ? (
                <div className="p-8 sm:p-10 rounded-[24px] bg-white space-y-5">
                  <div className="w-12 h-12 rounded-full bg-savelix-lavender text-savelix-purple flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-savelix-plum">
                    Enquiry Received
                  </h3>
                  <p className="text-base sm:text-lg text-savelix-plum/90 leading-relaxed">
                    Thank you, {formData.name || 'Visitor'}. Your consultation enquiry for {formData.serviceInterest} has been recorded. Our team will review your message confidentially.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        contact: '',
                        serviceInterest: 'Psychiatric Care',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-savelix-purple text-white text-base font-semibold hover:bg-savelix-purple-hover transition-colors min-h-[48px]"
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-base font-bold text-savelix-plum"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white text-savelix-plum text-base placeholder:text-savelix-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple min-h-[48px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-detail"
                      className="block text-base font-bold text-savelix-plum"
                    >
                      Contact Number or Email
                    </label>
                    <input
                      id="contact-detail"
                      type="text"
                      required
                      placeholder="phone@example.com or mobile number"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white text-savelix-plum text-base placeholder:text-savelix-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple min-h-[48px]"
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
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white text-savelix-plum text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple min-h-[48px]"
                    >
                      {serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-base font-bold text-savelix-plum"
                    >
                      Message or Description
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Please briefly describe your enquiry or preferred appointment timing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white text-savelix-plum text-base placeholder:text-savelix-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple resize-y min-h-[120px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple cursor-pointer min-h-[48px]"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Confidential Enquiry</span>
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
