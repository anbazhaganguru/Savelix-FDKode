import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
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

/**
 * Section 06: Why Savelix Teaser
 *
 * Source Authority:
 * - SAVELIX Website Content & Structure Plan (Page 4 Section 06 & Page 13 Page I)
 *
 * Balancia Visual Pattern:
 * - Centered editorial header, Baskervville italic heading accent,
 *   8-card structured grid (Balancia feature card styling with 24px radius and soft elevations),
 *   and pill CTA with circular arrow wrapper.
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
      className="relative py-16 sm:py-24 lg:py-28 bg-white/70 border-t border-savelix-border/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-savelix-lavender text-savelix-plum text-xs font-semibold tracking-wider uppercase border border-savelix-border/80">
            <Sparkles className="w-3.5 h-3.5 text-savelix-purple" />
            <span>Clinical Excellence &amp; Values</span>
          </div>

          <h2
            id="why-savelix-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-savelix-plum tracking-tight leading-[1.2]"
          >
            Why Choose{' '}
            <span className="font-serif italic font-normal text-savelix-purple">Savelix?</span>
          </h2>

          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-savelix-purple">
            Compassionate Care. Professional Expertise. Individualised Support.
          </p>

          <p className="text-sm sm:text-base text-savelix-grey leading-relaxed max-w-2xl mx-auto">
            Savelix strives to create a respectful and supportive environment where clients feel
            heard, families feel guided, and individuals receive care aligned with their clinical
            needs.
          </p>
        </div>

        {/* 8-Card Grid reproducing Balancia's Feature Card Geometry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white border border-savelix-border shadow-savelix-sm hover:shadow-savelix-md transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-savelix-lavender flex items-center justify-center text-savelix-purple mb-4 group-hover:bg-savelix-purple group-hover:text-white transition-colors duration-200">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-savelix-plum mb-2 group-hover:text-savelix-purple transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-savelix-grey leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Statement Banner (Page 13 Verbatim) */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-savelix-lavender/50 border border-savelix-purple/20 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-savelix-plum font-medium leading-relaxed italic">
            &ldquo;The focus is on understanding the person beyond the condition and supporting each
            individual’s journey towards improved mental health and quality of life.&rdquo;
          </p>
        </div>

        {/* Bottom Centered Pill CTA Button */}
        <div className="text-center pt-10 sm:pt-14">
          <Link
            to="/why-savelix"
            className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
          >
            <span>Why Savelix</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
