import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  GitMerge,
  FileText,
  ShieldCheck,
  Activity,
  HeartHandshake,
  Users,
  Compass,
  GraduationCap,
} from 'lucide-react';
import DecorOrbits from '../ui/decor/DecorOrbits';

/**
 * Section 06: Why Savelix Teaser
 *
 * Editorial Art Direction:
 * - Distinctive open editorial composition eliminating repetitive boxed-card grids
 * - Calm, spacious typographic hierarchy with deliberate whitespace
 * - All 8 approved clinical differentiators and commitment statement preserved verbatim
 */
export default function WhySavelixTeaser() {
  const differentiators = [
    {
      icon: GitMerge,
      title: 'Integrated Mental Healthcare',
      desc: 'Involving psychiatric professionals and psychologists working in close clinical collaboration.',
    },
    {
      icon: FileText,
      title: 'Personalised Treatment Plans',
      desc: 'Formulated collaboratively to align with each individual’s unique symptoms and clinical needs.',
    },
    {
      icon: ShieldCheck,
      title: 'Evidence-Based Support',
      desc: 'Clinically validated psychological therapies, structured interventions, and transparent care.',
    },
    {
      icon: Activity,
      title: 'Comprehensive Rehabilitation',
      desc: 'Daily routines, life-skills training, cognitive stimulation, and functional independence.',
    },
    {
      icon: HeartHandshake,
      title: 'Family-Centred Care',
      desc: 'Guidance, supportive communication skills, and condition psychoeducation for family members.',
    },
    {
      icon: Users,
      title: 'Support Across Life Stages',
      desc: 'Dedicated care pathways addressing children, adolescents, adults, and older individuals.',
    },
    {
      icon: Compass,
      title: 'Substance-Use Recovery Support',
      desc: 'Assessment, counselling, coping-skills development, and structured relapse-prevention strategies.',
    },
    {
      icon: GraduationCap,
      title: 'Student Learning Opportunities',
      desc: 'Supervised clinical exposure and academic training for psychology, social work, and nursing students.',
    },
  ];

  return (
    <section
      id="why-savelix-teaser"
      aria-labelledby="why-savelix-heading"
      className="relative py-20 sm:py-28 lg:py-32 3xl:py-40 bg-savelix-lilac overflow-hidden"
    >
      {/* Background SVG Orbits & Connected Dots (Left Outer Corner) */}
      <DecorOrbits
        variant="left"
        className="top-1/3 -left-16 sm:top-1/3 sm:-left-12 lg:top-1/4 lg:-left-6"
        opacity="opacity-40 sm:opacity-55 lg:opacity-70"
        size="w-56 sm:w-76 lg:w-96 xl:w-[420px]"
      />

      <div className="savelix-container relative z-10 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl 3xl:max-w-4xl mx-auto space-y-3 sm:space-y-4 animate-reveal">
          <h2
            id="why-savelix-heading"
            className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-extrabold text-savelix-plum tracking-tight leading-[1.18]"
          >
            Why Choose{' '}
            <span className="font-serif italic font-normal text-savelix-purple">Savelix?</span>
          </h2>

          <p className="text-base sm:text-lg 3xl:text-xl font-medium text-savelix-plum">
            Compassionate Care. Professional Expertise. Individualised Support.
          </p>

          <p className="text-base sm:text-lg 3xl:text-xl text-savelix-grey leading-relaxed max-w-2xl 3xl:max-w-3xl mx-auto">
            Savelix strives to create a respectful and supportive environment where clients feel
            heard, families feel guided, and individuals receive care aligned with their clinical
            needs.
          </p>
        </div>

        {/* 8 Differentiators — Open Editorial Roster (Unboxed, Transparent Entries) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 3xl:gap-12">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="space-y-3.5 animate-reveal text-left"
              >
                <div className="w-11 h-11 rounded-2xl bg-savelix-lavender flex items-center justify-center text-savelix-purple">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-lg 3xl:text-xl font-bold text-savelix-plum">
                  {item.title}
                </h3>

                <p className="text-base text-savelix-grey leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Commitment Statement Band (Page 13 Verbatim) */}
        <div className="p-8 sm:p-10 3xl:p-12 rounded-3xl bg-savelix-lavender text-center max-w-4xl 3xl:max-w-5xl mx-auto animate-reveal">
          <p className="text-base sm:text-lg 3xl:text-xl text-savelix-plum font-medium leading-relaxed font-serif italic">
            &ldquo;The focus is on understanding the person beyond the condition and supporting each
            individual’s journey towards improved mental health and quality of life.&rdquo;
          </p>
        </div>

        {/* Bottom Centered Pill CTA Button */}
        <div className="text-center">
          <Link
            to="/why-savelix"
            className="group inline-flex items-center gap-3 pl-7 pr-3 py-3.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm 3xl:text-base font-semibold tracking-wide transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
          >
            <span>Why Savelix</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
