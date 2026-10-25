import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageHero from '../../components/layout/PageHero';
import {
  HeartCrack,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Brain,
  Activity,
  Users,
  Compass,
  Sparkles,
  ShieldAlert,
} from 'lucide-react';
import DecorFlow from '../../components/ui/decor/DecorFlow';
import DecorOrbits from '../../components/ui/decor/DecorOrbits';
import DecorBranching from '../../components/ui/decor/DecorBranching';

/**
 * PAGE F — SUBSTANCE USE & ADDICTION SUPPORT
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 4, 10, 14, 15)
 *
 * Visual Presentation:
 * - Editorial addiction recovery & relapse prevention layout.
 * - Baskervville serif italic heading accents and structured divider-led lists.
 * - Mobile-optimised full-width sections and clear tactile tap targets.
 * - All visible text is strictly verbatim from the approved Content Document.
 */
export default function SubstanceUseSupport() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const servicesList = [
    {
      num: '01',
      text: 'Assessment of substance use and related psychological concerns',
      icon: Compass,
    },
    {
      num: '02',
      text: 'Psychiatric consultation and medical management',
      icon: Stethoscope,
    },
    {
      num: '03',
      text: 'Motivational interviewing and relapse-prevention strategies where appropriate',
      icon: Sparkles,
      badge: 'Where appropriate',
    },
    {
      num: '04',
      text: 'Individual counselling and coping-skills development',
      icon: Brain,
    },
    {
      num: '05',
      text: 'Emotional regulation and stress-management training',
      icon: Activity,
    },
    {
      num: '06',
      text: 'Family counselling and psychoeducation',
      icon: Users,
    },
    {
      num: '07',
      text: 'Structured rehabilitation and recovery-oriented support',
      icon: CheckCircle2,
    },
    {
      num: '08',
      text: 'Guidance towards medically supervised withdrawal management or specialist treatment when required',
      icon: ShieldAlert,
      badge: 'When required',
    },
  ];

  const expectedOutcomes = [
    'Increased awareness of substance-related risks',
    'Improved motivation for recovery',
    'Healthier coping strategies',
    'Better identification of triggers and relapse warning signs',
    'Improved family relationships and daily functioning',
    'Support for sustained recovery and relapse prevention',
  ];

  return (
    <div className="w-full bg-savelix-lilac min-h-screen">

      {/* Full-bleed Inner Page Hero */}
      <PageHero
        eyebrow={
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-savelix-lavender text-savelix-plum text-xs font-semibold tracking-wider uppercase border border-savelix-border/70">
            <HeartCrack className="w-3.5 h-3.5 text-savelix-purple" />
            <span>SAVELIX Services</span>
          </div>
        }
        title={
          <>
            Substance Use &amp;{' '}
            <span className="font-serif italic font-normal text-savelix-purple">Addiction</span> Support
          </>
        }
        description="Support for individuals experiencing difficulties related to alcohol, tobacco and other psychoactive substance use through appropriate assessment, psychiatric care, psychological interventions and rehabilitation support."
        image={`${import.meta.env.BASE_URL}assets/heroes/substance-use-support.jpg`}
        imageAlt="Professional addiction recovery consultation in a private, supportive clinic setting"
        imagePosition="object-[right_20%] lg:object-[right_15%]"
        actions={
          <>
            {onOpenAppointmentModal && (
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white/90" />
                <span>Book an Appointment</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-xs sm:text-sm font-medium border border-savelix-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-savelix-purple" />
            </Link>
          </>
        }
      />

      {/* Clinical & Recovery Interventions: Editorial Stream with Dividers */}
      <section className="py-12 sm:py-16 bg-white border-y border-savelix-border/70 relative overflow-hidden">
        {/* Alternating Decor 1: LEFT Outer Corner */}
        <DecorFlow
          variant="left"
          className="pointer-events-none -top-12 -left-12 sm:-top-8 sm:-left-8 w-44 sm:w-56 md:w-72 lg:w-88 text-savelix-purple/15"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-8 sm:mb-12 space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-savelix-purple">
              Clinical &amp; Recovery Interventions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-savelix-plum tracking-tight">
              Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 divide-y md:divide-y-0 divide-savelix-border">
            {servicesList.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="py-6 border-b border-savelix-border/70 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-savelix-lavender text-savelix-purple flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-serif italic text-savelix-grey/60 font-semibold">
                        {service.num}
                      </span>
                      {service.badge && (
                        <span className="text-[10px] font-semibold text-savelix-purple bg-savelix-lavender px-2 py-0.5 rounded-full border border-savelix-border/60">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-base sm:text-lg text-savelix-plum font-semibold leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expected Outcomes: Clean Editorial Checklist */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Alternating Decor 2: RIGHT Outer Corner */}
        <DecorOrbits
          variant="right"
          className="pointer-events-none -top-12 -right-12 sm:-top-8 sm:-right-8 w-44 sm:w-56 md:w-72 lg:w-88 text-savelix-purple/20"
        />

        <div className="space-y-8 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-savelix-purple">
              Recovery Goals
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-savelix-plum tracking-tight">
              Expected{' '}
              <span className="font-serif italic font-normal text-savelix-purple">Outcomes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {expectedOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-savelix-border shadow-xs flex items-start gap-3.5"
              >
                <CheckCircle2 className="w-4 h-4 text-savelix-purple flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-savelix-plum font-medium leading-relaxed">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Service Navigation & Final CTA */}
      <section className="pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-savelix-lavender to-white p-8 sm:p-12 lg:p-14 border border-savelix-border shadow-savelix-md relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Alternating Decor 3: LEFT Corner */}
          <DecorBranching
            variant="left"
            className="pointer-events-none -bottom-10 -left-10 w-44 sm:w-56 md:w-72 text-savelix-purple/20"
          />

          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-savelix-purple">
              Next Service in Care Continuum
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-savelix-plum tracking-tight">
              Take the First Step Towards Better Mental Health
            </h3>
            <p className="text-sm sm:text-base text-savelix-grey leading-relaxed pt-1">
              Your mental health matters. Savelix provides compassionate psychiatric care, professional psychological counselling and personalised rehabilitation support for individuals and families.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 flex-shrink-0 w-full sm:w-auto relative z-10">
            {onOpenAppointmentModal && (
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple cursor-pointer"
              >
                Book an Appointment
              </button>
            )}
            <Link
              to="/services/child-adolescent-counselling"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-xs sm:text-sm font-medium border border-savelix-border transition-colors"
            >
              <span>Child &amp; Adolescent Counselling</span>
              <ArrowRight className="w-3.5 h-3.5 text-savelix-purple" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
