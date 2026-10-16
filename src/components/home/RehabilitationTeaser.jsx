import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  Brain,
  Palette,
  ShieldCheck,
} from 'lucide-react';

/**
 * Section 05: Psychiatric Rehabilitation & Recovery Teaser
 *
 * Source Authority:
 * - SAVELIX Website Content & Structure Plan (Page 3 Section 05 & Page 8 Page D)
 *
 * Balancia Visual Pattern:
 * - 2-column asymmetric structured split, Baskervville italic heading accent,
 *   rounded-3xl (24px) framed image with ambient lavender glow, icon-led feature cards,
 *   and pill CTA with circular arrow wrapper.
 */
export default function RehabilitationTeaser() {
  const rehabPillars = [
    {
      icon: Clock,
      title: 'Structured Daily Routines',
      desc: 'Consistent daily schedules, personal hygiene, self-care and essential life-skills development.',
    },
    {
      icon: Users,
      title: 'Social Skills & Communication',
      desc: 'Activity-based interventions, communication training, and meaningful social interaction.',
    },
    {
      icon: Brain,
      title: 'Cognitive & Functional Support',
      desc: 'Cognitive stimulation and functional support where appropriate to rebuild daily autonomy.',
    },
    {
      icon: Palette,
      title: 'Meaningful Activities',
      desc: 'Therapeutic recreational and engagement activities aligned with individual recovery goals.',
    },
  ];

  return (
    <section
      id="rehabilitation-teaser"
      aria-labelledby="rehabilitation-heading"
      className="relative py-16 sm:py-24 lg:py-28 overflow-hidden bg-savelix-lilac"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Rehabilitation Narrative & Structured Pillars */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Kicker Badge with Star Emblem */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-savelix-lavender text-savelix-plum text-xs font-semibold tracking-wider uppercase border border-savelix-border/70">
              <Sparkles className="w-3.5 h-3.5 text-savelix-purple" />
              <span>Recovery &amp; Daily Functioning</span>
            </div>

            {/* H2 Heading with Editorial Italic Accent */}
            <h2
              id="rehabilitation-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-savelix-plum tracking-tight leading-[1.2]"
            >
              Psychiatric{' '}
              <span className="font-serif italic font-normal text-savelix-purple">Rehabilitation</span>
            </h2>

            {/* Source-backed Subtitle / Kicker (Page 3 Section 05) */}
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-savelix-purple">
              Structured support for daily functioning and recovery goals
            </p>

            {/* Lead Narrative (Page 3 Section 05 & Page 8 Verbatim) */}
            <p className="text-base sm:text-lg text-savelix-grey leading-relaxed font-normal">
              Rehabilitation at SAVELIX focuses on structured daily routines, social skills, self-care
              and life skills, cognitive and functional support, meaningful activities, and
              individualised rehabilitation goals.
            </p>

            {/* 4 Structured Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {rehabPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-savelix-border shadow-savelix-sm hover:shadow-savelix-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-savelix-lavender flex items-center justify-center text-savelix-purple flex-shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-savelix-plum">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-savelix-grey leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Pill CTA Button matching Balancia Style */}
            <div className="pt-2">
              <Link
                to="/services/psychiatric-rehabilitation"
                className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
              >
                <span>Psychiatric Rehabilitation</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Framed Image with Ambient Glow and Safety Monitoring Badge */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Radial Lavender Glow (Balancia feature) */}
            <div
              className="absolute -inset-4 bg-savelix-lavender/70 rounded-full blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            <div className="relative rounded-3xl overflow-hidden border border-savelix-border shadow-savelix-md bg-white">
              <img
                src={`${import.meta.env.BASE_URL}assets/rehab-clinic.jpg`}
                alt="SAVELIX Rehabilitation and Supportive Activity Environment"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center"
                loading="lazy"
              />

              {/* Bottom Inpatient Safety & Monitoring Highlight Box (Page 8 Verbatim) */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-savelix-plum via-savelix-plum/85 to-transparent text-white">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-savelix-lavender flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wider uppercase text-savelix-lavender">
                      Inpatient Environment &amp; Safety
                    </h4>
                    <p className="text-xs text-white/90 mt-1 leading-relaxed">
                      Safe, supportive and structured rehabilitation with infection prevention,
                      routine safety checks, and respectful patient monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
