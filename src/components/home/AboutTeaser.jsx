import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, Compass, ShieldCheck } from 'lucide-react';
import FounderPortrait from './founder/FounderPortrait';
import DecorBotanical from '../ui/decor/DecorBotanical';

/**
 * Section 02: About SAVELIX Teaser
 *
 * Editorial Art Direction:
 * - Clean editorial image-and-text composition replacing card-in-card nesting
 * - Responsive 2-column layout expanding proportionally across 1440px to 4K
 * - Crisp whitespace and visual hierarchy
 * - Verbatim approved content and principles preserved strictly
 * - Layered founder portrait with code-based botanical decor and custom Jayalakshmi plaque
 * - Background SVG botanical growth decor at section edge (.savelix-decor)
 */
export default function AboutTeaser() {
  const principles = [
    {
      icon: HeartHandshake,
      title: 'Whole-Person Care',
      desc: 'Considers emotions, daily routines, and everyday functioning rather than symptoms alone.',
    },
    {
      icon: Compass,
      title: 'Full Care Journey',
      desc: 'Support from early assessment and outpatient care to inpatient recovery and rehabilitation.',
    },
    {
      icon: ShieldCheck,
      title: 'Family-Centred',
      desc: 'Family involvement encouraged with strict respect for individual privacy, dignity and consent.',
    },
  ];

  return (
    <section
      id="about-teaser"
      aria-labelledby="about-teaser-heading"
      className="relative py-20 sm:py-28 lg:py-32 3xl:py-40 bg-savelix-lilac overflow-hidden"
    >
      {/* Background SVG Botanical Decoration (Outer Right Edge) */}
      <DecorBotanical
        variant="right"
        className="-top-10 -right-12 sm:-top-16 sm:-right-8 lg:-top-20 lg:-right-4"
        opacity="opacity-40 sm:opacity-55 lg:opacity-70"
        size="w-52 sm:w-72 lg:w-96 xl:w-[420px] h-auto"
      />

      <div className="savelix-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 3xl:gap-24 items-center">
          {/* Left Column: Clinical Philosophy & Editorial Narrative */}
          <div className="lg:col-span-7 space-y-7 3xl:space-y-9 text-left animate-reveal">
            <div className="space-y-3">
              <h2
                id="about-teaser-heading"
                className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-extrabold text-savelix-plum tracking-tight leading-[1.18]"
              >
                About{' '}
                <span className="font-serif italic font-normal text-savelix-purple">Savelix</span>
              </h2>

              <p className="text-base sm:text-lg 3xl:text-xl font-medium text-savelix-plum">
                Supporting individuals and families through mental health challenges
              </p>
            </div>

            {/* Verbatim Lead Narrative (Page 3 Verbatim) */}
            <p className="text-base sm:text-lg 3xl:text-xl text-savelix-grey leading-relaxed max-w-2xl 3xl:max-w-3xl">
              Savelix provides psychiatric care, psychological interventions, counselling and
              rehabilitation services, with care that considers the whole person and everyday
              functioning.
            </p>

            {/* 3 Core Principles — Open Editorial Hierarchy (No Boxed Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {principles.map((principle, idx) => {
                const IconComponent = principle.icon;
                return (
                  <div key={idx} className="space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-savelix-lavender flex items-center justify-center text-savelix-purple">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-base 3xl:text-lg font-bold text-savelix-plum">
                      {principle.title}
                    </h3>
                    <p className="text-sm sm:text-base text-savelix-grey leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Pill CTA Button */}
            <div className="pt-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 pl-7 pr-3 py-3.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm 3xl:text-base font-semibold tracking-wide transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
              >
                <span>About Us</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Founder Presentation with Layered Frame, Botanical Elements & Custom Nameplate */}
          <div className="lg:col-span-5 relative flex flex-col items-center pb-8 sm:pb-10 lg:pb-0">
            <FounderPortrait />
          </div>
        </div>
      </div>
    </section>
  );
}
