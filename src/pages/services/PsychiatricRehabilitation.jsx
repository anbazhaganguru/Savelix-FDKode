import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import BackButton from '../../components/common/BackButton';
import {
  Activity,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Brain,
  Palette,
  Heart,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

/**
 * PAGE D — PSYCHIATRIC REHABILITATION
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 3, 4, 8, 14, 15)
 *
 * Visual Presentation:
 * - Editorial rehabilitation & functional living layout.
 * - Framed local asset (rehab-clinic.jpg) in asymmetric two-column composition.
 * - Structured recovery matrix and clean divider-led expected outcomes.
 * - All visible text is strictly verbatim from the approved Content Document.
 */
export default function PsychiatricRehabilitation() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const rehabSupportItems = [
    {
      num: '01',
      text: 'Structured daily routines and activity-based interventions',
      icon: Clock,
      subtitle: 'Daily Routines',
    },
    {
      num: '02',
      text: 'Social skills and communication training',
      icon: Users,
      subtitle: 'Social Functioning',
    },
    {
      num: '03',
      text: 'Personal hygiene, self-care and life-skills development',
      icon: Heart,
      subtitle: 'Self-Care & Independence',
    },
    {
      num: '04',
      text: 'Cognitive stimulation and functional support where appropriate',
      icon: Brain,
      subtitle: 'Cognitive Support',
    },
    {
      num: '05',
      text: 'Therapeutic recreational activities',
      icon: Palette,
      subtitle: 'Therapeutic Engagement',
    },
    {
      num: '06',
      text: 'Individualised goals with progress monitoring',
      icon: Activity,
      subtitle: 'Progress Review',
    },
  ];

  const expectedOutcomes = [
    'Better understanding and management of symptoms',
    'Improved emotional regulation and coping',
    'Reduced distress and stress management',
    'Better sleep, daily routines and self-care where achievable',
    'Improved communication and relationships',
    'Increased social engagement and functional independence',
    'Treatment adherence and awareness of relapse warning signs',
    'Family understanding',
    'Progress towards individualised recovery goals',
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
                    Psychiatric Rehabilitation
                  </li>
                </ol>
              </nav>
            </div>
            <span className="text-[11px] font-semibold text-savelix-purple uppercase tracking-wider hidden md:inline-block">
              Functional Recovery &amp; Living Skills
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Service Hero: Asymmetric Composition with Clinic Asset */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-savelix-lavender text-savelix-plum text-xs font-semibold tracking-wider uppercase border border-savelix-border/70">
                <Activity className="w-3.5 h-3.5 text-savelix-purple" />
                <span>SAVELIX Services</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-savelix-plum tracking-tight leading-[1.15]">
                Psychiatric{' '}
                <span className="font-serif italic font-normal text-savelix-purple">Rehabilitation</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-savelix-grey leading-relaxed font-normal max-w-2xl">
                Structured support for daily functioning and recovery goals. Savelix provides psychiatric care, psychological interventions, counselling and rehabilitation services, with care that considers the whole person and everyday functioning.
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

            {/* Right Editorial Facility Portrait */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-savelix-border/80 shadow-savelix-lg aspect-[4/3] bg-savelix-lavender">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/rehab-clinic.jpg`}
                    alt="Savelix Psychiatric Rehabilitation Centre"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-savelix-plum/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Rehabilitation Support Matrix (Not Isolated Box Cards) */}
      <section className="py-12 sm:py-16 bg-white border-y border-savelix-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-savelix-purple">
              Programme Overview
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-savelix-plum tracking-tight">
              Rehabilitation support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {rehabSupportItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-savelix-lilac/50 border border-savelix-border/80 hover:border-savelix-purple/40 transition-colors flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-savelix-lavender text-savelix-purple flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-serif italic text-savelix-grey/60 font-semibold">
                      {item.num}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-savelix-purple">
                      {item.subtitle}
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-savelix-plum leading-snug">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expected Outcomes: Clean Editorial Checklist Stream */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-savelix-lavender text-savelix-purple text-xs font-semibold tracking-wider uppercase border border-savelix-border">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clinical Recovery Goals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-savelix-plum tracking-tight">
              Expected{' '}
              <span className="font-serif italic font-normal text-savelix-purple">Outcomes</span>
            </h2>
            <p className="text-sm sm:text-base text-savelix-grey leading-relaxed">
              Depending on the individual&apos;s condition, treatment needs and participation, care aims to support:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {expectedOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-savelix-border shadow-xs flex items-start gap-3.5"
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

      {/* Cross-Link to Inpatient Environment and Safety Monitoring */}
      <section className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-[28px] sm:rounded-[36px] bg-savelix-plum text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-savelix-lavender flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Inpatient environment and safety monitoring
              </h3>
              <p className="text-xs sm:text-sm text-savelix-lavender/85 max-w-xl">
                A safe, supportive and structured rehabilitation environment, with infection prevention and control measures.
              </p>
            </div>
          </div>
          <Link
            to="/services/inpatient-safety-monitoring"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-savelix-plum text-xs sm:text-sm font-semibold hover:bg-savelix-lavender transition-colors flex-shrink-0 shadow-sm"
          >
            <span>View Safety Monitoring</span>
            <ArrowRight className="w-3.5 h-3.5 text-savelix-purple" />
          </Link>
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
              to="/services/family-counselling"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-xs sm:text-sm font-medium border border-savelix-border transition-colors"
            >
              <span>Family Counselling</span>
              <ArrowRight className="w-3.5 h-3.5 text-savelix-purple" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
