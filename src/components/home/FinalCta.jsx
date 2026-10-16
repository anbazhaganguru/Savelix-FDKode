import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

/**
 * Section 08: Final Homepage Call to Action
 *
 * Source Authority:
 * - SAVELIX Website Content & Structure Plan (Page 4 Section 08 & Page 14 Final CTA Copy)
 *
 * Balancia Visual Pattern:
 * - Balancia Section 9 ("Feel like yourself again") & Section 13 (Framed Pre-Footer consultation block):
 *   Inset container with rounded-3xl/rounded-[36px], Deep Plum canvas (#302B50) with ambient glow,
 *   Baskervville italic heading accent, and high-contrast dual pill action buttons.
 */
export default function FinalCta({ onOpenAppointmentModal }) {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="relative rounded-3xl lg:rounded-[36px] bg-savelix-plum text-white p-8 sm:p-12 lg:p-16 border border-savelix-purple/30 shadow-2xl overflow-hidden text-center">
        {/* Subtle Ambient Radial Glows (Balancia signature atmosphere) */}
        <div
          className="absolute -top-32 -left-32 w-80 h-80 bg-savelix-purple/30 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-savelix-lavender/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-5 sm:space-y-6">
          {/* Kicker Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-savelix-lavender text-xs font-semibold tracking-wider uppercase border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-savelix-lavender" />
            <span>Begin Your Recovery Journey</span>
          </div>

          {/* Heading with Baskervville Italic Accent */}
          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]"
          >
            Take the First Step Towards{' '}
            <span className="font-serif italic font-normal text-savelix-lavender">
              Better Mental Health
            </span>
          </h2>

          {/* Subtitle (Page 4 & 14 Verbatim) */}
          <p className="text-sm sm:text-base font-semibold text-savelix-lavender uppercase tracking-widest">
            Your mental health matters.
          </p>

          {/* Paragraph (Page 14 Verbatim) */}
          <p className="text-sm sm:text-base text-savelix-lavender/85 leading-relaxed font-normal">
            At Savelix Psychiatric Clinic &amp; Rehabilitation Centre, we provide compassionate
            psychiatric care, professional psychological counselling, and personalised
            rehabilitation support to help individuals and families move towards improved emotional
            well-being and quality of life. You don&apos;t have to face your challenges alone. Let us
            support you on your journey towards recovery.
          </p>

          {/* Dual Pill CTA Buttons (Page 14 Verbatim CTAs) */}
          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book an Appointment</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </button>

            <Link
              to="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide border border-white/20 transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageSquare className="w-4 h-4 text-savelix-lavender" />
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-savelix-lavender group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
