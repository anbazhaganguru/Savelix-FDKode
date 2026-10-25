import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, MessageSquare } from 'lucide-react';
import DecorOrbits from '../ui/decor/DecorOrbits';

/**
 * Section 08: Final Homepage Call to Action
 *
 * Editorial Art Direction:
 * - Inset Deep Plum canvas with dignified proportions scaling from mobile to 4K
 * - 2-line headline discipline strictly maintained at all viewports (390px, 768px, 1440px, 4K)
 * - Deliberate reading measure preventing text stretching at 4K
 * - Verbatim approved CTA copy and interactive modal triggers preserved strictly
 * - Subtle background SVG orbit atmosphere (.savelix-decor)
 */
export default function FinalCta({ onOpenAppointmentModal }) {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="relative py-14 sm:py-20 lg:py-24 3xl:py-32"
    >
      <div className="savelix-hero-frame px-3 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl md:rounded-[42px] 4k:rounded-[56px] bg-savelix-plum text-white p-8 sm:p-14 lg:p-20 3xl:p-28 overflow-hidden text-center">
          {/* Subtle Supporting SVG Orbit Detail in Plum Card */}
          <DecorOrbits
            variant="right"
            className="-top-24 -right-24 sm:-top-28 sm:-right-28"
            opacity="opacity-10 sm:opacity-15"
            size="w-72 sm:w-96 lg:w-[480px]"
          />

          <div className="relative z-10 max-w-3xl 3xl:max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-reveal">
            {/* 2-Line Headline Discipline */}
            <h2
              id="final-cta-heading"
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-extrabold text-white tracking-tight leading-[1.18]"
            >
              Take the First Step Towards{' '}
              <span className="block font-serif italic font-normal text-savelix-lavender">
                Better Mental Health
              </span>
            </h2>

            {/* Subtitle (Page 4 & 14 Verbatim) */}
            <p className="text-base sm:text-lg 3xl:text-xl font-medium text-savelix-lavender">
              Your mental health matters.
            </p>

            {/* Paragraph (Page 14 Verbatim) */}
            <p className="text-base sm:text-lg 3xl:text-xl text-savelix-lavender/90 leading-relaxed font-normal">
              At Savelix Psychiatric Clinic &amp; Rehabilitation Centre, we provide compassionate
              psychiatric care, professional psychological counselling, and personalised
              rehabilitation support to help individuals and families move towards improved emotional
              well-being and quality of life. You don&apos;t have to face your challenges alone. Let us
              support you on your journey towards recovery.
            </p>

            {/* Dual Pill CTA Buttons (Page 14 Verbatim CTAs) */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-7 pr-3 py-3.5 sm:py-4 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm 3xl:text-base font-semibold tracking-wide transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[52px]"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book an Appointment</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>

              <Link
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm 3xl:text-base font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[52px]"
              >
                <MessageSquare className="w-4 h-4 text-savelix-lavender" />
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-savelix-lavender group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
