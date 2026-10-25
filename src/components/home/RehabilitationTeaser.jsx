import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Brain, Palette, ShieldCheck } from 'lucide-react';
import DecorBotanical from '../ui/decor/DecorBotanical';
import DecorBranching from '../ui/decor/DecorBranching';

/**
 * Section 05: Psychiatric Rehabilitation & Recovery Teaser
 *
 * Editorial Art Direction:
 * - Wide photographic hero composition utilizing approved rehab-clinic asset
 * - Open editorial typography replacing repetitive card grids
 * - Responsive proportion scaling from mobile to 4K displays
 * - Verbatim approved rehabilitation copy and inpatient safety notice preserved
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
      className="relative py-20 sm:py-28 lg:py-32 3xl:py-40 bg-white overflow-hidden"
    >
      {/* Background SVG Botanical Decoration (Upper-Right Edge) */}
      <DecorBotanical
        variant="right"
        className="top-2 -right-12 sm:top-6 sm:-right-8 lg:top-8 lg:right-0"
        opacity="opacity-40 sm:opacity-55 lg:opacity-70"
        size="w-48 sm:w-64 lg:w-80 xl:w-96"
      />

      {/* Background SVG Growth Branch Decoration (Lower-Left Edge) */}
      <DecorBranching
        className="-bottom-16 -left-12 sm:-bottom-12 sm:-left-8 lg:-bottom-6 lg:left-0 -scale-x-100"
        opacity="opacity-35 sm:opacity-50 lg:opacity-65"
        size="w-48 sm:w-64 lg:w-80 xl:w-92"
      />

      <div className="savelix-container relative z-10 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl 3xl:max-w-4xl space-y-3 sm:space-y-4 text-left animate-reveal">
          <h2
            id="rehabilitation-heading"
            className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-extrabold text-savelix-plum tracking-tight leading-[1.18]"
          >
            Psychiatric{' '}
            <span className="font-serif italic font-normal text-savelix-purple">Rehabilitation</span>
          </h2>

          <p className="text-base sm:text-lg 3xl:text-xl font-medium text-savelix-plum">
            Structured support for daily functioning and recovery goals
          </p>

          <p className="text-base sm:text-lg 3xl:text-xl text-savelix-grey leading-relaxed">
            Rehabilitation at SAVELIX focuses on structured daily routines, social skills, self-care
            and life skills, cognitive and functional support, meaningful activities, and
            individualised rehabilitation goals.
          </p>
        </div>

        {/* Wide Panoramic Approved Clinical Visual */}
        <div className="relative rounded-3xl 3xl:rounded-[40px] overflow-hidden bg-savelix-lavender animate-reveal">
          <img
            src={`${import.meta.env.BASE_URL}assets/rehab-clinic.jpg`}
            alt="SAVELIX Rehabilitation and Supportive Activity Environment"
            className="w-full h-[320px] sm:h-[440px] lg:h-[520px] 3xl:h-[640px] object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* 4 Pillars in Open Editorial Format (Unboxed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 3xl:gap-10">
          {rehabPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div key={idx} className="space-y-3 animate-reveal">
                <div className="w-10 h-10 rounded-2xl bg-savelix-lavender flex items-center justify-center text-savelix-purple">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg 3xl:text-xl font-bold text-savelix-plum">
                  {pillar.title}
                </h3>
                <p className="text-base text-savelix-grey leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Inpatient Safety & Dignity Strip (Page 8 Verbatim) */}
        <div className="p-8 3xl:p-10 rounded-3xl bg-savelix-lilac flex flex-col md:flex-row md:items-center justify-between gap-6 animate-reveal">
          <div className="flex items-start gap-4 max-w-3xl 3xl:max-w-4xl">
            <div className="w-10 h-10 rounded-2xl bg-savelix-lavender flex items-center justify-center text-savelix-purple flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg 3xl:text-xl font-bold text-savelix-plum">
                Inpatient Environment &amp; Safety
              </h4>
              <p className="text-base text-savelix-grey mt-1 leading-relaxed">
                Safe, supportive and structured rehabilitation with infection prevention, routine safety
                checks, and respectful patient monitoring.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/services/psychiatric-rehabilitation"
              className="group inline-flex items-center gap-3 pl-7 pr-3 py-3.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm 3xl:text-base font-semibold tracking-wide transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
            >
              <span>Psychiatric Rehabilitation</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
