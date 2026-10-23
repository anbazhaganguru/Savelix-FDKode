import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import BackButton from '../../components/common/BackButton';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  Smile,
  GraduationCap,
  Heart,
  Users,
  Compass,
  ShieldAlert,
  Brain,
  CheckCircle2,
} from 'lucide-react';

/**
 * PAGE G — CHILD & ADOLESCENT COUNSELLING
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 4, 11, 14, 15)
 *
 * Visual Presentation:
 * - Editorial youth & developmental counselling layout.
 * - Baskervville serif italic heading accents and structured divider-led lists.
 * - Mobile-optimised full-width sections and clear tactile tap targets.
 * - All visible text is strictly verbatim from the approved Content Document.
 */
export default function ChildAdolescentCounselling() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const servicesList = [
    {
      num: '01',
      text: 'Emotional and behavioural difficulties',
      icon: Smile,
    },
    {
      num: '02',
      text: 'Anxiety, fears and childhood stress',
      icon: Heart,
    },
    {
      num: '03',
      text: 'Anger management and emotional regulation',
      icon: Brain,
    },
    {
      num: '04',
      text: 'School-related stress, academic difficulties and adjustment concerns',
      icon: GraduationCap,
    },
    {
      num: '05',
      text: 'Behavioural challenges and social interaction difficulties',
      icon: Compass,
    },
    {
      num: '06',
      text: 'Self-esteem, confidence and communication skills',
      icon: Sparkles,
    },
    {
      num: '07',
      text: 'Parenting guidance and parent-child relationship support',
      icon: Users,
    },
    {
      num: '08',
      text: 'Adjustment to family changes or stressful life events',
      icon: CheckCircle2,
    },
    {
      num: '09',
      text: 'Referral for specialised developmental or psychiatric assessment when indicated',
      icon: ShieldAlert,
      badge: 'When indicated',
    },
  ];

  const outcomesList = [
    'Improved emotional expression and self-regulation',
    'Age-appropriate coping skills',
    'Better communication and social interaction',
    'Improved confidence and adaptive behaviour',
    'Enhanced parent-child understanding',
    'Better adjustment at home, school and in social settings',
  ];

  return (
    <div className="w-full bg-savelix-lilac min-h-screen">
      {/* Top Utility Bar: Smart Back & Breadcrumbs */}
      <div className="border-b border-savelix-border/60 bg-white/60 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <BackButton fallback="/services" />
              <span className="hidden sm:inline-block h-4 w-px bg-savelix-border" aria-hidden="true" />
              <nav aria-label="Breadcrumb" className="hidden sm:block">
                <ol className="flex items-center space-x-2 text-xs text-savelix-grey">
                  <li>
                    <Link to="/" className="hover:text-savelix-purple transition-colors focus-visible:underline">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link to="/services" className="hover:text-savelix-purple transition-colors focus-visible:underline">
                      Services
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-savelix-plum font-semibold" aria-current="page">
                    Child &amp; Adolescent Counselling
                  </li>
                </ol>
              </nav>
            </div>
            <span className="text-[11px] font-semibold text-savelix-purple uppercase tracking-wider hidden md:inline-block">
              Developmental &amp; Youth Support
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Service Hero */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-savelix-lavender text-savelix-plum text-xs font-semibold tracking-wider uppercase border border-savelix-border/70">
              <Sparkles className="w-3.5 h-3.5 text-savelix-purple" />
              <span>SAVELIX Services</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-savelix-plum tracking-tight leading-[1.15]">
              Child &amp; Adolescent{' '}
              <span className="font-serif italic font-normal text-savelix-purple">Counselling</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-savelix-grey leading-relaxed font-normal">
              Age-appropriate psychological support for children and adolescents experiencing emotional, behavioural, developmental or adjustment difficulties. The approach considers individual needs, developmental stage, family environment and school experiences.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {onOpenAppointmentModal && (
                <button
                  type="button"
                  onClick={onOpenAppointmentModal}
                  className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2 cursor-pointer"
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
            </div>
          </div>
        </div>
      </section>

      {/* Support Areas: Editorial Structured Stream */}
      <section className="py-12 sm:py-16 bg-white border-y border-savelix-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-12 space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-savelix-purple">
              Support Areas
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

          {/* Parental Involvement & Framework Note */}
          <div className="mt-10 p-6 sm:p-8 rounded-[24px] bg-savelix-lavender/60 border border-savelix-border flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-savelix-purple/10 text-savelix-purple flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-sm sm:text-base text-savelix-plum leading-relaxed font-medium">
              Services use developmentally appropriate methods, with parental or guardian involvement and confidentiality practices suited to the child&apos;s age, needs and applicable requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Expected Outcomes: Clean Editorial Checklist */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-savelix-purple">
              Developmental Progress &amp; Framework
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-savelix-plum tracking-tight">
              Expected{' '}
              <span className="font-serif italic font-normal text-savelix-purple">Outcomes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {outcomesList.map((outcome, idx) => (
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
        <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-savelix-lavender to-white p-8 sm:p-12 lg:p-14 border border-savelix-border shadow-savelix-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
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

          <div className="flex flex-wrap items-center gap-3.5 flex-shrink-0 w-full sm:w-auto">
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
              to="/services/inpatient-safety-monitoring"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-xs sm:text-sm font-medium border border-savelix-border transition-colors"
            >
              <span>Inpatient Safety Monitoring</span>
              <ArrowRight className="w-3.5 h-3.5 text-savelix-purple" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
