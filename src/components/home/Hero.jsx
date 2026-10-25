import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

/**
 * SAVELIX Homepage Hero Component — Refined Centered Composition
 *
 * Art Direction & Layout:
 * - Full-viewport safe sizing: min-h-[100svh] spanning edge-to-edge
 * - Precisely centered hero composition accounting for transparent navbar and background focal point
 * - Unified center axis: brand eyebrow, display headline, description, and CTA group
 * - Disciplined 2-line display headline with balanced visual weight across all viewports
 * - Proportional reading measure for supporting description (narrower than headline)
 * - Composed CTA group with matched button heights, clear primary emphasis, and clean wrapping
 * - Pure legibility scrim preserving the architectural scenery and scenic vista
 * - Stable GSAP/ScrollTrigger hooks: data-hero-bg, data-hero-content, data-hero-eyebrow,
 *   data-hero-heading, data-hero-description, data-hero-actions, data-hero-primary-cta, data-hero-secondary-cta
 */
export default function Hero({ onOpenAppointmentModal }) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-savelix-plum text-white text-center"
    >
      {/* Layer 1: Full-Viewport Responsive Architectural Background (GSAP Hook: data-hero-bg) */}
      <div
        data-hero-bg
        className="hero-background-layer absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <picture className="w-full h-full">
          {/* Desktop & 4K: 1024px and above */}
          <source
            media="(min-width: 1024px)"
            srcSet={`${import.meta.env.BASE_URL}assets/hero/hero-desktop.png`}
          />
          {/* Tablet: 640px to 1023px */}
          <source
            media="(min-width: 640px)"
            srcSet={`${import.meta.env.BASE_URL}assets/hero/hero-tablet.png`}
          />
          {/* Mobile: default fallback below 640px */}
          <img
            src={`${import.meta.env.BASE_URL}assets/hero/hero-mobile.png`}
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Balanced Vertical Contrast Scrim preserving architectural clarity */}
        <div className="absolute inset-0 scrim-hero-full" />
      </div>

      {/* Layer 2: Centered Editorial Content Layer (GSAP Hook: data-hero-content) */}
      <div
        data-hero-content
        className="hero-content-layer relative z-10 w-full savelix-container pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 flex flex-col items-center justify-center text-center"
      >
        <div className="w-full max-w-4xl lg:max-w-5xl 3xl:max-w-6xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-7 lg:space-y-8 animate-reveal">
          {/* 1. Brand Identifier Eyebrow with Fine Rules (GSAP Hook: data-hero-eyebrow) */}
          <div
            data-hero-eyebrow
            className="inline-flex items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.18em] uppercase text-savelix-lavender/90 max-w-full px-2"
          >
            <span className="hidden xs:inline-block h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-savelix-purple" aria-hidden="true" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#9D7BC7] shadow-[0_0_8px_rgba(157,123,199,0.8)] flex-shrink-0" aria-hidden="true" />
            <span className="text-center">SAVELIX PSYCHIATRIC CLINIC AND REHABILITATION CENTRE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9D7BC7] shadow-[0_0_8px_rgba(157,123,199,0.8)] flex-shrink-0" aria-hidden="true" />
            <span className="hidden xs:inline-block h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-savelix-purple" aria-hidden="true" />
          </div>

          {/* 2. Editorial Serif Display Heading (GSAP Hook: data-hero-heading) */}
          <h1
            id="hero-heading"
            data-hero-heading
            className="font-serif font-normal text-[28px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[68px] 2xl:text-[74px] 3xl:text-[82px] 4k:text-[94px] text-white tracking-[-0.01em] leading-[1.12] sm:leading-[1.14] text-center max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto"
          >
            <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">Comprehensive</span>
            <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">Mental Healthcare</span>
            <span className="block drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              <span className="font-serif italic font-normal text-savelix-lavender/85">for </span>
              <span className="font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#F0E6F8] via-[#D8C2F2] to-[#BFA0E8] drop-shadow-[0_2px_14px_rgba(128,101,168,0.5)]">
                Better Living
              </span>
            </span>
          </h1>

          {/* 3. Supporting Description with Controlled Measure (GSAP Hook: data-hero-description) */}
          <p
            data-hero-description
            className="text-sm xs:text-base sm:text-lg lg:text-[18px] 2xl:text-xl text-savelix-lavender/95 max-w-xl sm:max-w-2xl lg:max-w-[680px] xl:max-w-[720px] 3xl:max-w-[820px] mx-auto leading-relaxed sm:leading-[1.65] font-normal"
          >
            Compassionate, professional and evidence-informed mental healthcare through assessment,
            psychiatric consultation, psychological counselling, treatment planning and
            rehabilitation support.
          </p>

          {/* 4. Unified CTA Group with Clear Visual Hierarchy (GSAP Hook: data-hero-actions) */}
          <div
            data-hero-actions
            className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
          >
            {/* Primary Appointment CTA (GSAP Hook: data-hero-primary-cta) */}
            {onOpenAppointmentModal ? (
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                data-hero-primary-cta
                className="group relative w-auto inline-flex items-center justify-center gap-2.5 h-12 sm:h-13 px-6 sm:px-7 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm sm:text-base font-semibold tracking-wide shadow-[0_4px_22px_rgba(128,101,168,0.45)] hover:shadow-[0_6px_28px_rgba(128,101,168,0.6)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Book an Appointment with SAVELIX"
              >
                <Calendar className="w-4 h-4 text-white" aria-hidden="true" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
            ) : (
              <Link
                to="/contact"
                data-hero-primary-cta
                className="group relative w-auto inline-flex items-center justify-center gap-2.5 h-12 sm:h-13 px-6 sm:px-7 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm sm:text-base font-semibold tracking-wide shadow-[0_4px_22px_rgba(128,101,168,0.45)] hover:shadow-[0_6px_28px_rgba(128,101,168,0.6)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Calendar className="w-4 h-4 text-white" aria-hidden="true" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            )}

            {/* Secondary CTA: Contact Us (GSAP Hook: data-hero-secondary-cta) */}
            <Link
              to="/contact"
              data-hero-secondary-cta
              className="w-auto inline-flex items-center justify-center gap-2 h-12 sm:h-13 px-6 sm:px-7 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold tracking-wide border border-white/25 backdrop-blur-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Contact Us</span>
            </Link>

            {/* Tertiary CTA: Explore Our Services (GSAP Hook: data-hero-secondary-cta) */}
            <Link
              to="/services"
              data-hero-secondary-cta
              className="group w-auto inline-flex items-center justify-center gap-2 h-12 sm:h-13 px-6 sm:px-7 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold tracking-wide border border-white/25 backdrop-blur-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
