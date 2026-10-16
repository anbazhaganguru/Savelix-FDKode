import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register GSAP React plugin
gsap.registerPlugin(useGSAP);

/**
 * SAVELIX Homepage Hero Component (Stage 3 — Balancia Reference Fidelity)
 *
 * Strictly adheres to:
 * 1. Approved SAVELIX Website Content & Structure Plan (Page 3 Section 01 Hero):
 *    - Headline: "Comprehensive Mental Healthcare for Better Living"
 *    - Description: "Compassionate, professional and evidence-informed mental healthcare through assessment, psychiatric consultation, psychological counselling, treatment planning and rehabilitation support."
 *    - CTAs: "Book an Appointment", "Explore Our Services", "Contact Us"
 * 2. Balancia Visual Reference Design Language:
 *    - Inset framed card with 42px border radius on desktop (rounded-3xl on mobile)
 *    - Atmospheric serene visual background with deep plum/violet vignette
 *    - Staggered dual-line headline with Baskervville serif italic accents
 *    - Overlapping pill CTA button sitting across the bottom frame border with arrow circle icon
 * 3. Motion & Accessibility:
 *    - GSAP entrance timeline scoped to hero container via useGSAP
 *    - Strict prefers-reduced-motion support
 *    - Fully visible fallback if JS is disabled or delayed
 */
export default function Hero({ onOpenAppointmentModal }) {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      // Respect prefers-reduced-motion
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      // Scoped entrance reveal
      gsap.from('.hero-animate', {
        y: 22,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        clearProps: 'all',
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-labelledby="hero-heading"
      className="relative w-full px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-3 sm:pt-6 pb-14 sm:pb-20"
      data-stage="3"
    >
      {/* Balancia-Style Inset Framed Hero Card (42px radius on desktop) */}
      <div className="relative w-full overflow-visible rounded-3xl md:rounded-[42px] border border-savelix-border/70 shadow-savelix-lg min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between items-center text-center p-6 sm:p-10 lg:p-14 transition-all">
        {/* Background Therapeutic Visual with Vignette Overlays */}
        <div
          className="absolute inset-0 rounded-3xl md:rounded-[42px] overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          {/* Calming Atmospheric Background Image */}
          <img
            src={`${import.meta.env.BASE_URL}assets/hero-bg.jpg`}
            alt=""
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
            loading="eager"
            fetchPriority="high"
          />

          {/* Deep Plum & Violet Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-savelix-plum/90 via-savelix-plum/80 to-savelix-plum/95 backdrop-blur-[1px]" />

          {/* Calming Ambient Lavender Light Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-savelix-purple/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Top Header Badge — Verified Clinic Name (Section 01 / Page 3) */}
        <div className="hero-animate relative z-10 pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-savelix-lavender shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-savelix-lavender" />
            <span>SAVELIX PSYCHIATRIC CLINIC AND REHABILITATION CENTRE</span>
          </div>
        </div>

        {/* Center Main Stage: Editorial Typography & Verified Content */}
        <div className="relative z-10 max-w-4xl mx-auto py-8 sm:py-12 flex flex-col items-center space-y-6 sm:space-y-7">
          {/* Staggered Dual-Line H1 Headline with Baskervville Italic Accents */}
          <h1
            id="hero-heading"
            className="hero-animate text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-white tracking-tight leading-[1.14] text-center"
          >
            <span className="block sm:-translate-x-6 md:-translate-x-12">
              Comprehensive Mental{' '}
              <span className="font-serif italic font-normal text-savelix-lavender">Healthcare</span>
            </span>
            <span className="block sm:translate-x-6 md:translate-x-12">
              <span className="font-serif italic font-normal text-savelix-lavender">for Better</span>{' '}
              Living
            </span>
          </h1>

          {/* Verified Supporting Description (Section 01 Page 3 Verbatim) */}
          <p className="hero-animate text-sm sm:text-base md:text-lg text-savelix-lavender/90 max-w-2xl sm:max-w-3xl leading-relaxed font-normal">
            Compassionate, professional and evidence-informed mental healthcare through assessment,
            psychiatric consultation, psychological counselling, treatment planning and
            rehabilitation support.
          </p>

          {/* Secondary Actions & Verified Location Badge */}
          <div className="hero-animate flex flex-wrap items-center justify-center gap-3 pt-1">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/20 backdrop-blur-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-savelix-lavender" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-transparent hover:bg-white/10 text-savelix-lavender text-xs sm:text-sm font-medium border border-white/15 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Contact Us</span>
            </Link>

            {/* Source-verified location tag (Page 14) */}
            <span className="hidden md:inline-flex items-center gap-1 text-xs text-savelix-lavender/80 px-3 py-1.5 rounded-full bg-black/20 border border-white/10">
              <MapPin className="w-3 h-3 text-savelix-purple" />
              <span>Ambattur &amp; Pudur, Chennai</span>
            </span>
          </div>

          {/* Care Trust Commitments from Page 5 */}
          <div className="hero-animate hidden sm:flex items-center gap-4 pt-2 text-xs text-savelix-lavender/80">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Confidential &amp; Ethical Practice</span>
            </span>
            <span className="text-white/20" aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5 text-savelix-lavender" />
              <span>Person-Centred Recovery</span>
            </span>
          </div>
        </div>

        {/* Balancia-Style Bottom Overlapping Primary CTA Button */}
        <div className="hero-animate relative -mb-11 sm:-mb-13 z-20">
          {onOpenAppointmentModal ? (
            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="group inline-flex items-center gap-3 pl-7 pr-3 py-3 sm:py-3.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide border-4 sm:border-8 border-savelix-lilac shadow-xl transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2 min-h-[48px]"
              aria-label="Book an Appointment with SAVELIX Psychiatric Clinic"
            >
              <span>Book an Appointment</span>
              <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-inner">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>
          ) : (
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 pl-7 pr-3 py-3 sm:py-3.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide border-4 sm:border-8 border-savelix-lilac shadow-xl transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2 min-h-[48px]"
            >
              <span>Book an Appointment</span>
              <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-inner">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
