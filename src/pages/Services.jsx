import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  Calendar,
  ArrowRight,
  Stethoscope,
  Brain,
  Activity,
  Users,
  HeartCrack,
  Smile,
  ShieldCheck,
} from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import DecorFlow from '../components/ui/decor/DecorFlow';
import DecorOrbits from '../components/ui/decor/DecorOrbits';
import DecorBotanical from '../components/ui/decor/DecorBotanical';

/**
 * SECTION 03 — SERVICES DIRECTORY OVERVIEW
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 3, 5, 6, 8, 9, 10, 11, 14)
 *
 * Art-directed Editorial Directory:
 * - Editorial healthcare directory with open structured rows and rich typographic pacing.
 * - Serif italic accents paired with geometric sans-serif typography.
 * - Flat tone transitions (Lilac canvas, Warm White directory field, Deep Plum collaborative band).
 * - Zero nested card boxes, zero thin hairline rules, zero resting shadows, zero decorative numbering.
 * - 100% approved content preserved verbatim.
 */
export default function Services() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const servicesList = [
    {
      title: 'Psychiatric Care',
      href: '/services/psychiatric-care',
      summary:
        'Comprehensive psychiatric evaluation and diagnosis; individualised medication management and monitoring; review of symptoms, treatment response and possible side effects; ongoing clinical follow-up and relapse-prevention planning.',
      category: 'Medical & Clinical Evaluation',
      icon: Stethoscope,
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-6',
      bgTone: 'bg-savelix-lilac/50 hover:bg-savelix-lavender/50',
    },
    {
      title: 'Psychological Counselling',
      href: '/services/psychological-counselling',
      summary:
        'Psychological assessment and mental status evaluation; individual counselling and supportive psychotherapy; CBT where clinically appropriate; DBT-informed interventions and emotional-regulation skills; stress management, relaxation and mindfulness techniques; coping skills, behavioural strategies and problem-solving support.',
      category: 'Evidence-Informed Psychotherapy',
      icon: Brain,
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-6',
      bgTone: 'bg-savelix-lilac/50 hover:bg-savelix-lavender/50',
    },
    {
      title: 'Psychiatric Rehabilitation',
      href: '/services/psychiatric-rehabilitation',
      summary:
        'Structured daily routines and activity-based interventions; social skills and communication training; personal hygiene, self-care and life-skills development; cognitive stimulation and functional support where appropriate; therapeutic recreational and meaningful engagement activities; individualised rehabilitation goals and progress monitoring.',
      category: 'Functional & Recovery Support',
      icon: Activity,
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-4',
      bgTone: 'bg-savelix-lavender/35 hover:bg-savelix-lavender/65',
    },
    {
      title: 'Family, Marriage & Relationship Counselling',
      href: '/services/family-counselling',
      summary:
        'A supportive and confidential environment for individuals, couples and families to address emotional difficulties, communication barriers and relationship challenges.',
      category: 'Relationship & Family Dynamics',
      icon: Users,
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-4',
      bgTone: 'bg-savelix-lavender/35 hover:bg-savelix-lavender/65',
    },
    {
      title: 'Substance Use & Addiction Support',
      href: '/services/substance-use-support',
      summary:
        'Support for individuals experiencing difficulties related to alcohol, tobacco and other psychoactive substance use through appropriate assessment, psychiatric care, psychological interventions and rehabilitation support.',
      category: 'Specialised Recovery Care',
      icon: HeartCrack,
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-4',
      bgTone: 'bg-savelix-lavender/35 hover:bg-savelix-lavender/65',
    },
    {
      title: 'Child & Adolescent Counselling',
      href: '/services/child-adolescent-counselling',
      summary:
        'Age-appropriate psychological support for children and adolescents experiencing emotional, behavioural, developmental or adjustment difficulties. The approach considers individual needs, developmental stage, family environment and school experiences.',
      category: 'Developmental & Youth Support',
      icon: Smile,
      colSpan: 'col-span-1 md:col-span-1 lg:col-span-6',
      bgTone: 'bg-savelix-lilac/50 hover:bg-savelix-lavender/50',
    },
    {
      title: 'Inpatient Environment & Safety Monitoring',
      href: '/services/inpatient-safety-monitoring',
      summary:
        'A safe, supportive and structured rehabilitation environment, with infection prevention and control measures, environmental safety checks and regular monitoring to protect patients, families, visitors and staff.',
      category: 'Clinical Environment & Safeguards',
      icon: ShieldCheck,
      colSpan: 'col-span-1 md:col-span-2 lg:col-span-6',
      bgTone: 'bg-savelix-lilac/50 hover:bg-savelix-lavender/50',
    },
  ];

  const collaborativeRoles = [
    {
      title: 'Psychiatrists',
      role: 'Psychiatrists focus on psychiatric evaluation, diagnosis and medical treatment.',
    },
    {
      title: 'Psychologists',
      role: 'Psychologists contribute psychological assessment, counselling and appropriate therapeutic interventions.',
    },
    {
      title: 'Rehabilitation Professionals',
      role: 'Rehabilitation professionals support daily functioning, social skills and recovery-oriented activities.',
    },
  ];

  return (
    <div className="w-full bg-savelix-lilac min-h-[100dvh] text-savelix-plum">

      {/* Full-Width Image-Led Editorial Hero */}
      <PageHero
        title={
          <>
            Our <span className="font-serif italic font-normal text-savelix-purple">Services</span>
          </>
        }
        subtitle="Comprehensive Psychiatric Care and Psychological Support"
        description="Care considers the whole person rather than focusing only on symptoms. Services support different stages of the mental health journey, from early identification and outpatient consultation to inpatient care, rehabilitation and continued recovery support."
        image={`${import.meta.env.BASE_URL}assets/heroes/services.jpg`}
        imageAlt="Savelix Psychiatric Care & Rehabilitation Environment"
        imagePosition="object-[right_20%] lg:object-[right_15%]"
        actions={
          <>
            {onOpenAppointmentModal && (
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-base font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple cursor-pointer min-h-[48px]"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </button>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple min-h-[48px]"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-savelix-purple" />
            </Link>
          </>
        }
      />

      {/* Dedicated Care Disciplines: Architectural Editorial Discovery Directory */}
      <section
        id="care-disciplines"
        aria-labelledby="care-disciplines-heading"
        className="py-16 sm:py-24 lg:py-28 bg-white scroll-mt-24 relative overflow-hidden"
      >
        {/* Background SVG Flow Decoration (Section 1: Left Outer Corner) */}
        <DecorFlow
          variant="left"
          className="top-8 left-0 sm:top-14 sm:left-0 lg:top-16 lg:left-0"
          opacity="opacity-45 sm:opacity-60 lg:opacity-75"
          size="w-44 sm:w-60 lg:w-80 xl:w-[420px] h-auto"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header: Centered & Visually Prominent */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-3 sm:space-y-4">
            <h2
              id="care-disciplines-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-savelix-plum tracking-tight leading-[1.14]"
            >
              Dedicated{' '}
              <span className="font-serif italic font-normal text-savelix-purple">
                Care Disciplines
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-savelix-plum/80 leading-relaxed max-w-[58ch] mx-auto font-normal">
              Select any clinical discipline for detailed information on treatment pathways, assessment and recovery support.
            </p>
          </div>

          {/* Editorial Service Discovery Grid: 2 + 3 + 2 Balanced Cadence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-7">
            {servicesList.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={idx}
                  to={service.href}
                  className={`group relative flex flex-col justify-between p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-savelix-border/80 hover:border-savelix-purple/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2 ${service.colSpan} ${service.bgTone}`}
                >
                  <div>
                    {/* Category Header with Established Clinical Icon */}
                    <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                      <span className="w-8 h-8 rounded-xl bg-white border border-savelix-border/70 flex items-center justify-center text-savelix-purple group-hover:bg-savelix-purple group-hover:text-white transition-colors duration-200 flex-shrink-0">
                        <IconComponent className="w-4 h-4" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-semibold text-savelix-purple tracking-wide">
                        {service.category}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-savelix-plum tracking-tight group-hover:text-savelix-purple transition-colors duration-200 leading-snug mb-2 sm:mb-3">
                      {service.title}
                    </h3>

                    {/* Verbatim Summary Description */}
                    <p className="text-xs sm:text-sm lg:text-base text-savelix-plum/85 leading-relaxed font-normal">
                      {service.summary}
                    </p>
                  </div>

                  {/* Accessible Action Footer */}
                  <div className="mt-5 sm:mt-7 flex items-center justify-between text-xs sm:text-sm font-semibold text-savelix-purple group-hover:text-savelix-purple-hover">
                    <span className="inline-flex items-center gap-2">
                      <span>Explore Clinical Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-savelix-grey/80 hidden sm:inline-block font-medium">
                      Pathway Details
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Multidisciplinary Collaborative Approach: Expansive Deep Plum Band */}
      <section className="py-20 sm:py-28 bg-savelix-plum text-white relative overflow-hidden">
        {/* Background SVG Orbits Decoration (Section 2: Right Outer Corner) */}
        <DecorOrbits
          variant="right"
          className="top-4 right-0 sm:top-8 sm:right-0 lg:top-10 lg:right-0"
          opacity="opacity-15 sm:opacity-20 lg:opacity-25"
          size="w-48 sm:w-64 lg:w-80 xl:w-96 h-auto"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3 mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Collaborative <span className="font-serif italic font-normal text-savelix-lavender">Approach</span>
            </h2>
            <p className="text-base sm:text-lg text-savelix-lavender/90 leading-relaxed max-w-[60ch]">
              Integrated psychiatric care, psychological counselling, and recovery-oriented rehabilitation working in harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {collaborativeRoles.map((role, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {role.title}
                </h3>
                <p className="text-base sm:text-lg text-savelix-lavender/90 leading-relaxed font-normal">
                  {role.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Care Invitation: Tailored & Restrained */}
      <section className="py-20 sm:py-28 bg-savelix-lavender relative overflow-hidden">
        {/* Background SVG Botanical Decoration (Section 3: Left Outer Corner) */}
        <DecorBotanical
          variant="left"
          className="top-4 left-0 sm:top-6 sm:left-0 lg:top-8 lg:left-0"
          opacity="opacity-40 sm:opacity-55 lg:opacity-75"
          size="w-40 sm:w-56 lg:w-72 xl:w-80 h-auto"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-savelix-plum tracking-tight leading-tight">
                Take the First Step Towards <span className="font-serif italic font-normal text-savelix-purple">Better Mental Health</span>
              </h2>
              <p className="text-base sm:text-lg text-savelix-plum leading-relaxed max-w-[60ch]">
                Your mental health matters. Savelix provides compassionate psychiatric care, professional psychological counselling and personalised rehabilitation support for individuals and families.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 flex-shrink-0 w-full sm:w-auto">
              {onOpenAppointmentModal && (
                <button
                  type="button"
                  onClick={onOpenAppointmentModal}
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-base font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple cursor-pointer min-h-[48px]"
                >
                  Book an Appointment
                </button>
              )}
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-savelix-lilac text-savelix-plum text-base font-semibold transition-colors min-h-[48px]"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-savelix-purple" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
