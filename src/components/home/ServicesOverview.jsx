import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  Brain,
  Activity,
  Users,
  HeartCrack,
  Smile,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

/**
 * Section 03: Services Overview
 *
 * Source Authority:
 * - SAVELIX Website Content & Structure Plan (Page 3 Section 03 & Pages 6-11)
 *
 * Balancia Visual Pattern:
 * - Deep Plum container (#302B50), 24px rounded corners, centered Baskervville italic heading,
 *   3-column card grid with hover elevation (translateY(-4px)), bullet lists, and pill CTAs.
 */
export default function ServicesOverview() {
  const services = [
    {
      id: 'psychiatric-care',
      title: 'Psychiatric Care',
      path: '/services/psychiatric-care',
      icon: Stethoscope,
      bullets: [
        'Comprehensive psychiatric evaluation & diagnosis',
        'Individualised medication management & monitoring',
        'Relapse-prevention planning & clinical follow-up',
      ],
    },
    {
      id: 'psychological-counselling',
      title: 'Psychological Counselling',
      path: '/services/psychological-counselling',
      icon: Brain,
      bullets: [
        'Individual counselling & supportive psychotherapy',
        'CBT & emotional-regulation skill development',
        'Stress management, mindfulness & coping strategies',
      ],
    },
    {
      id: 'psychiatric-rehabilitation',
      title: 'Psychiatric Rehabilitation',
      path: '/services/psychiatric-rehabilitation',
      icon: Activity,
      bullets: [
        'Structured daily routines & activity interventions',
        'Social skills, self-care & functional development',
        'Individualised recovery goals & progress review',
      ],
    },
    {
      id: 'family-counselling',
      title: 'Family & Marriage Counselling',
      path: '/services/family-counselling',
      icon: Users,
      bullets: [
        'Relationship guidance & communication training',
        'Family conflict resolution & parenting dynamics',
        'Family psychoeducation for condition support',
      ],
    },
    {
      id: 'substance-use-support',
      title: 'Substance Use & Addiction Support',
      path: '/services/substance-use-support',
      icon: HeartCrack,
      bullets: [
        'Assessment of substance use & emotional concerns',
        'Motivational interviewing & coping-skills training',
        'Structured recovery support & relapse prevention',
      ],
    },
    {
      id: 'child-adolescent-counselling',
      title: 'Child & Adolescent Counselling',
      path: '/services/child-adolescent-counselling',
      icon: Smile,
      bullets: [
        'Age-appropriate emotional & behavioural guidance',
        'School-related stress & academic adjustment',
        'Parenting support & parent-child communication',
      ],
    },
  ];

  return (
    <section
      id="services-overview"
      aria-labelledby="services-heading"
      className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Balancia-Style Deep Plum Container (#302B50 with 24px/32px Radius) */}
      <div className="rounded-3xl lg:rounded-[36px] bg-savelix-plum text-white p-6 sm:p-10 lg:p-14 border border-savelix-purple/30 shadow-2xl relative overflow-hidden">
        {/* Subtle Ambient Light Glow inside the Plum Canvas */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 bg-savelix-purple/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-savelix-lavender/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-savelix-lavender text-xs font-semibold tracking-wider uppercase border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-savelix-lavender" />
            <span>Comprehensive Care Pathways</span>
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]"
          >
            Our{' '}
            <span className="font-serif italic font-normal text-savelix-lavender">Services</span>
          </h2>

          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-savelix-lavender/90">
            Comprehensive Psychiatric Care and Psychological Support
          </p>
        </div>

        {/* 3-Column Service Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <Link
                key={service.id}
                to={service.path}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#3A3358]/80 hover:bg-[#433A66] border border-white/10 hover:border-savelix-purple/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-lavender"
              >
                <div>
                  {/* Icon Emblem Header */}
                  <div className="w-12 h-12 rounded-2xl bg-savelix-lavender/15 flex items-center justify-center text-savelix-lavender border border-white/10 mb-5 group-hover:scale-105 transition-transform duration-200">
                    <IconComponent className="w-6 h-6 text-savelix-lavender" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-savelix-lavender transition-colors">
                    {service.title}
                  </h3>

                  {/* Verbatim Bullet Points from Source Pages */}
                  <ul className="space-y-2 text-xs sm:text-sm text-savelix-lavender/80 leading-relaxed mb-6">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-savelix-purple mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-savelix-lavender group-hover:text-white transition-colors">
                  <span>Explore Service</span>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA to Services Directory */}
        <div className="text-center pt-10 sm:pt-14 relative z-10">
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>View All Services</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
