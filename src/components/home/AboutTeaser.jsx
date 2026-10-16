import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';

/**
 * Section 02: About SAVELIX Teaser
 *
 * Source Authority:
 * - SAVELIX Website Content & Structure Plan (Page 3 Section 02 & Page 5 Page A)
 *
 * Balancia Visual Pattern:
 * - Asymmetric 2-column layout, emblem kicker, Baskervville italic heading accent,
 *   pill button with circular arrow wrapper, and 24px framed photo with ambient glow.
 */
export default function AboutTeaser() {
  return (
    <section
      id="about-teaser"
      aria-labelledby="about-teaser-heading"
      className="relative py-16 sm:py-24 lg:py-28 overflow-hidden bg-savelix-lilac"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clinical Philosophy & Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Kicker Badge with Star Emblem */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-savelix-lavender text-savelix-plum text-xs font-semibold tracking-wider uppercase border border-savelix-border/70">
              <Sparkles className="w-3.5 h-3.5 text-savelix-purple" />
              <span>Supporting Individuals &amp; Families</span>
            </div>

            {/* H2 Heading with Editorial Italic Accent */}
            <h2
              id="about-teaser-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-savelix-plum tracking-tight leading-[1.2]"
            >
              About{' '}
              <span className="font-serif italic font-normal text-savelix-purple">Savelix</span>
            </h2>

            {/* Source-backed Subtitle / Kicker (Page 3 Section 02) */}
            <p className="text-sm sm:text-base font-semibold text-savelix-purple uppercase tracking-wider">
              Supporting individuals and families through mental health challenges
            </p>

            {/* Lead Narrative (Page 3 Verbatim) */}
            <p className="text-base sm:text-lg text-savelix-grey leading-relaxed font-normal">
              Savelix provides psychiatric care, psychological interventions, counselling and
              rehabilitation services, with care that considers the whole person and everyday
              functioning.
            </p>

            {/* Key Clinical Principles from Page 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/80 border border-savelix-border/80 shadow-savelix-sm space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-savelix-lavender flex items-center justify-center text-savelix-purple">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-savelix-plum">Whole-Person Care</h3>
                <p className="text-xs text-savelix-grey leading-relaxed">
                  Considers emotions, daily routines, and everyday functioning rather than symptoms alone.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-savelix-border/80 shadow-savelix-sm space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-savelix-lavender flex items-center justify-center text-savelix-purple">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-savelix-plum">Full Care Journey</h3>
                <p className="text-xs text-savelix-grey leading-relaxed">
                  Support from early assessment and outpatient care to inpatient recovery and rehabilitation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-savelix-border/80 shadow-savelix-sm space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-savelix-lavender flex items-center justify-center text-savelix-purple">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-savelix-plum">Family-Centred</h3>
                <p className="text-xs text-savelix-grey leading-relaxed">
                  Family involvement encouraged with strict respect for individual privacy, dignity and consent.
                </p>
              </div>
            </div>

            {/* Pill CTA Button matching Balancia Style */}
            <div className="pt-2">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
              >
                <span>About Us</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Framed Image with Ambient Glow */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Radial Lavender Glow (Balancia feature) */}
            <div
              className="absolute -inset-4 bg-savelix-lavender/70 rounded-full blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            <div className="relative rounded-3xl overflow-hidden border border-savelix-border shadow-savelix-md bg-white">
              <img
                src={`${import.meta.env.BASE_URL}assets/about-clinic.jpg`}
                alt="SAVELIX Calm Consultation Environment"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                loading="lazy"
              />

              {/* Bottom Subtle Gradient Card Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-savelix-plum/90 via-savelix-plum/60 to-transparent text-white">
                <p className="text-xs font-bold tracking-wider uppercase text-savelix-lavender">
                  Compassionate Mental Healthcare
                </p>
                <p className="text-xs text-white/90 mt-1">
                  Empowering Mental Health and Emotional Well-being
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
