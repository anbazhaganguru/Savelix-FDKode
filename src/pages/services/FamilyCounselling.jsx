import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import BackButton from '../../components/common/BackButton';
import {
  Users,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Heart,
  MessageSquare,
  Sparkles,
  GitMerge,
  LifeBuoy,
} from 'lucide-react';

/**
 * PAGE E — FAMILY, MARRIAGE & RELATIONSHIP COUNSELLING
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 4, 5, 9, 14, 15)
 *
 * Visual Presentation:
 * - Editorial relationship & systemic counselling layout.
 * - Baskervville serif italic heading accents and structured divider-led lists.
 * - Mobile-optimised full-width sections and clear tactile tap targets.
 * - All visible text is strictly verbatim from the approved Content Document.
 */
export default function FamilyCounselling() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const servicesList = [
    {
      num: '01',
      text: 'Marriage and relationship counselling',
      icon: Heart,
    },
    {
      num: '02',
      text: 'Family conflict resolution and communication skills',
      icon: MessageSquare,
    },
    {
      num: '03',
      text: 'Premarital counselling and relationship guidance',
      icon: Sparkles,
    },
    {
      num: '04',
      text: 'Parenting challenges and family dynamics',
      icon: Users,
    },
    {
      num: '05',
      text: 'Emotional adjustment, separation and life transitions',
      icon: GitMerge,
    },
    {
      num: '06',
      text: 'Family psychoeducation for supporting individuals with mental health conditions',
      icon: LifeBuoy,
    },
  ];

  const expectedOutcomes = [
    {
      step: '01',
      title: 'Communication',
      desc: 'Improved communication and mutual understanding',
    },
    {
      step: '02',
      title: 'Healthy Patterns',
      desc: 'Healthier relationship patterns and boundaries',
    },
    {
      step: '03',
      title: 'Conflict Resolution',
      desc: 'Better conflict-management and problem-solving skills',
    },
    {
      step: '04',
      title: 'Family Support',
      desc: 'Stronger family support and emotional well-being',
    },
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
                    Family &amp; Relationship Counselling
                  </li>
                </ol>
              </nav>
            </div>
            <span className="text-[11px] font-semibold text-savelix-purple uppercase tracking-wider hidden md:inline-block">
              Relationship &amp; Family Dynamics
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Service Hero */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-savelix-lavender text-savelix-plum text-xs font-semibold tracking-wider uppercase border border-savelix-border/70">
              <Users className="w-3.5 h-3.5 text-savelix-purple" />
              <span>SAVELIX Services</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-savelix-plum tracking-tight leading-[1.15]">
              Family, Marriage &amp;{' '}
              <span className="font-serif italic font-normal text-savelix-purple">Relationship</span> Counselling
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-savelix-grey leading-relaxed font-normal">
              A supportive and confidential environment for individuals, couples and families to address emotional difficulties, communication barriers and relationship challenges.
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

      {/* Counselling Areas: Editorial Structured Stream */}
      <section className="py-12 sm:py-16 bg-white border-y border-savelix-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-12 space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-savelix-purple">
              Counselling Areas
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
                    <span className="text-xs font-serif italic text-savelix-grey/60 font-semibold">
                      {service.num}
                    </span>
                    <p className="text-base sm:text-lg text-savelix-plum font-semibold leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Family Involvement Principle Note */}
          <div className="mt-10 p-6 sm:p-8 rounded-[24px] bg-savelix-lavender/60 border border-savelix-border flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-savelix-purple/10 text-savelix-purple flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-sm sm:text-base text-savelix-plum leading-relaxed font-medium">
              Family involvement is encouraged where appropriate, with consideration for the individual&apos;s privacy, consent and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Expected Outcomes: Numbered Sequential Milestones */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-savelix-purple">
              Therapeutic Progress
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-savelix-plum tracking-tight">
              Expected{' '}
              <span className="font-serif italic font-normal text-savelix-purple">Outcomes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {expectedOutcomes.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-savelix-border shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif italic text-savelix-purple/50 font-normal">
                    {item.step}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-savelix-purple" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-savelix-purple">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-savelix-plum font-semibold leading-snug">
                    {item.desc}
                  </p>
                </div>
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
              to="/services/substance-use-support"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-xs sm:text-sm font-medium border border-savelix-border transition-colors"
            >
              <span>Substance Use Support</span>
              <ArrowRight className="w-3.5 h-3.5 text-savelix-purple" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
