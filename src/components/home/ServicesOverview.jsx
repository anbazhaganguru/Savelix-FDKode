import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Brain, Activity, Users, HeartCrack, Smile } from 'lucide-react';
import DecorFlow from '../ui/decor/DecorFlow';

/**
 * Section 03: Services Overview
 *
 * Image-Led Editorial Art Direction:
 * - Asymmetrical image-led service composition replacing repetitive icon cards
 * - Relevant existing approved imagery with varied crops and proportions
 * - Subtle white fade at the bottom of each image blending naturally into photography
 * - Dark, high-contrast typography over the white fade with zero nested card borders
 * - All existing service routes, titles, and verbatim bullet points preserved strictly
 */
export default function ServicesOverview() {
  const primaryServices = [
    {
      id: 'psychiatric-care',
      title: 'Psychiatric Care',
      path: '/services/psychiatric-care',
      icon: Stethoscope,
      image: `${import.meta.env.BASE_URL}assets/services/psychiatric-care.jpg`,
      imagePosition: 'object-[center_20%]',
      colSpan: 'lg:col-span-7',
      minHeight: 'min-h-[480px] sm:min-h-[540px] 3xl:min-h-[620px]',
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
      image: `${import.meta.env.BASE_URL}assets/services/psychological-counselling.jpg`,
      imagePosition: 'object-[center_20%]',
      colSpan: 'lg:col-span-5',
      minHeight: 'min-h-[480px] sm:min-h-[540px] 3xl:min-h-[620px]',
      bullets: [
        'Individual counselling & supportive psychotherapy',
        'CBT & emotional-regulation skill development',
        'Stress management, mindfulness & coping strategies',
      ],
    },
  ];

  const secondaryServices = [
    {
      id: 'psychiatric-rehabilitation',
      title: 'Psychiatric Rehabilitation',
      path: '/services/psychiatric-rehabilitation',
      icon: Activity,
      image: `${import.meta.env.BASE_URL}assets/services/psychiatric-rehabilitation.jpg`,
      imagePosition: 'object-top',
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
      image: `${import.meta.env.BASE_URL}assets/services/family-counselling.jpg`,
      imagePosition: 'object-[center_20%]',
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
      image: `${import.meta.env.BASE_URL}assets/services/substance-use-support.jpg`,
      imagePosition: 'object-[center_20%]',
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
      image: `${import.meta.env.BASE_URL}assets/services/child-adolescent-counselling.jpg`,
      imagePosition: 'object-[center_20%]',
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
      className="relative py-20 sm:py-28 lg:py-32 3xl:py-40 bg-white overflow-hidden"
    >
      {/* Background SVG Flow Decoration (Top-Right Outer Corner) */}
      <DecorFlow
        variant="top-right"
        className="top-2 -right-12 sm:top-6 sm:-right-8 lg:top-10 lg:-right-4"
        opacity="opacity-40 sm:opacity-55 lg:opacity-70"
        size="w-56 sm:w-76 lg:w-[400px] xl:w-[460px]"
      />

      {/* Background SVG Flow Decoration (Bottom-Left Outer Corner) */}
      <DecorFlow
        variant="bottom-left"
        className="bottom-16 -left-16 sm:bottom-24 sm:-left-12 lg:bottom-32 lg:-left-6 rotate-180"
        opacity="opacity-35 sm:opacity-50 lg:opacity-65"
        size="w-52 sm:w-72 lg:w-[380px] xl:w-[430px]"
      />

      <div className="savelix-container relative z-10 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl 3xl:max-w-4xl mx-auto space-y-3 sm:space-y-4 animate-reveal">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-extrabold text-savelix-plum tracking-tight leading-[1.18]"
          >
            Our{' '}
            <span className="font-serif italic font-normal text-savelix-purple">Services</span>
          </h2>

          <p className="text-base sm:text-lg 3xl:text-xl font-medium text-savelix-plum">
            Comprehensive Psychiatric Care and Psychological Support
          </p>
        </div>

        {/* Asymmetrical Editorial Composition: Primary Lead Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 3xl:gap-10">
          {primaryServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                to={service.path}
                className={`group relative rounded-3xl 3xl:rounded-[36px] overflow-hidden flex flex-col justify-end bg-savelix-lavender ${service.colSpan} ${service.minHeight} transition-transform duration-300 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple animate-reveal`}
              >
                {/* Background Photograph */}
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 w-full h-full object-cover ${service.imagePosition || 'object-center'} transition-transform duration-700 ease-out group-hover:scale-105`}
                  loading="lazy"
                />

                {/* Natural White Fade Gradient Scrim */}
                <div
                  className="absolute inset-0 pointer-events-none scrim-white-fade"
                  aria-hidden="true"
                />

                {/* Overlaid Content Resting Over Natural White Fade */}
                <div className="relative z-10 p-6 sm:p-8 3xl:p-10 space-y-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-savelix-lavender flex items-center justify-center text-savelix-purple flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl 3xl:text-3xl font-bold text-savelix-plum group-hover:text-savelix-purple transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Verbatim Bullet Points */}
                  <ul className="space-y-1.5 text-sm sm:text-base 3xl:text-lg text-savelix-plum/90 leading-relaxed max-w-xl">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-savelix-purple mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link CTA Indicator */}
                  <div className="pt-2 flex items-center justify-between text-sm font-semibold text-savelix-purple group-hover:text-savelix-purple-hover">
                    <span>Explore Service</span>
                    <span className="w-7 h-7 rounded-full bg-savelix-lavender flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5 text-savelix-purple" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Secondary Services: 4-Column Balanced Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 3xl:gap-10">
          {secondaryServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                to={service.path}
                className="group relative rounded-3xl 3xl:rounded-[36px] overflow-hidden flex flex-col justify-end bg-savelix-lavender min-h-[460px] sm:min-h-[500px] 3xl:min-h-[560px] transition-transform duration-300 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple animate-reveal"
              >
                {/* Background Photograph */}
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 w-full h-full object-cover ${service.imagePosition || 'object-center'} transition-transform duration-700 ease-out group-hover:scale-105`}
                  loading="lazy"
                />

                {/* Natural White Fade Gradient Scrim */}
                <div
                  className="absolute inset-0 pointer-events-none scrim-white-fade"
                  aria-hidden="true"
                />

                {/* Overlaid Content Resting Over Natural White Fade */}
                <div className="relative z-10 p-6 sm:p-7 3xl:p-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-savelix-lavender flex items-center justify-center text-savelix-purple flex-shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-savelix-plum group-hover:text-savelix-purple transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Verbatim Bullet Points */}
                  <ul className="space-y-1.5 text-sm sm:text-base text-savelix-plum/90 leading-relaxed">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-savelix-purple mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link CTA Indicator */}
                  <div className="pt-2 flex items-center justify-between text-sm font-semibold text-savelix-purple group-hover:text-savelix-purple-hover">
                    <span>Explore Service</span>
                    <span className="w-7 h-7 rounded-full bg-savelix-lavender flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5 text-savelix-purple" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA to Services Directory */}
        <div className="text-center pt-6">
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 pl-7 pr-3 py-3.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm 3xl:text-base font-semibold tracking-wide transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
          >
            <span>View All Services</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
