import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  Stethoscope,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Brain,
  Activity,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';
import PageHero from '../../components/layout/PageHero';
import DecorBotanical from '../../components/ui/decor/DecorBotanical';
import DecorOrbits from '../../components/ui/decor/DecorOrbits';
import DecorFlow from '../../components/ui/decor/DecorFlow';

/**
 * PAGE B — PSYCHIATRIC CARE
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 3, 5, 6, 14, 15)
 *
 * Visual Presentation:
 * - Editorial clinical layout with asymmetrical two-column composition.
 * - Divider-led clinical checklist instead of repeated card boxes.
 * - Baskervville serif italic heading accents and tactile app-like mobile experience.
 * - All visible text is strictly verbatim from the approved Content Document.
 */
export default function PsychiatricCare() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const assessmentPoints = [
    'Comprehensive psychiatric evaluation and diagnosis',
    'Individualised medication management and monitoring',
    'Review of symptoms, treatment response and possible side effects',
    'Ongoing clinical follow-up and relapse-prevention planning',
  ];

  const familyPoints = [
    'Education about mental health conditions and treatment',
    'Guidance on communication and supportive caregiving',
    'Recognition of early warning signs and relapse indicators',
    'Family involvement in recovery planning with appropriate consent',
  ];

  const collaborativeRoles = [
    {
      title: 'Psychiatrists',
      role: 'Psychiatrists focus on psychiatric evaluation, diagnosis and medical treatment.',
      icon: Stethoscope,
    },
    {
      title: 'Psychologists',
      role: 'Psychologists contribute psychological assessment, counselling and appropriate therapeutic interventions.',
      icon: Brain,
    },
    {
      title: 'Rehabilitation Professionals',
      role: 'Rehabilitation professionals support daily functioning, social skills and recovery-oriented activities.',
      icon: Activity,
    },
  ];

  return (
    <div className="w-full bg-savelix-lilac min-h-screen">

      {/* Full-Width Image-Led Editorial Service Hero */}
      <PageHero
        eyebrow={
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 text-savelix-plum text-xs font-semibold tracking-wider uppercase border border-savelix-border/70 backdrop-blur-sm">
            <Stethoscope className="w-3.5 h-3.5 text-savelix-purple" />
            <span>SAVELIX Services</span>
          </div>
        }
        title={
          <>
            Psychiatric{' '}
            <span className="font-serif italic font-normal text-savelix-purple">
              Care
            </span>
          </>
        }
        description="Care considers the whole person rather than focusing only on symptoms. Services support different stages of the mental health journey, from early identification and outpatient consultation to inpatient care, rehabilitation and continued recovery support."
        image={`${import.meta.env.BASE_URL}assets/heroes/psychiatric-care.jpg`}
        imageAlt="Psychiatric clinical evaluation and consultation"
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

      {/* Main Clinical Content: Asymmetrical Two-Column Split */}
      <section className="py-12 sm:py-16 bg-white border-y border-savelix-border/70 relative overflow-hidden">
        {/* Background SVG Botanical Decoration (Section 1: Left Outer Corner) */}
        <DecorBotanical
          variant="left"
          className="top-4 left-0 sm:top-8 sm:left-0 lg:top-10 lg:left-0"
          opacity="opacity-40 sm:opacity-55 lg:opacity-75"
          size="w-40 sm:w-56 lg:w-72 xl:w-80 h-auto"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Assessment & Treatment Flow */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-savelix-purple">
                  Clinical Services
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-savelix-plum tracking-tight">
                  Psychiatric assessment and treatment
                </h2>
              </div>

              {/* Structured Checklist with Hairline Dividers (Not Repeated Cards) */}
              <div className="divide-y divide-savelix-border pt-2">
                {assessmentPoints.map((point, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-savelix-lavender text-savelix-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-base sm:text-lg text-savelix-plum font-medium leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Family Support & Psychoeducation Panel */}
            <div className="lg:col-span-5 bg-savelix-lilac/80 rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 border border-savelix-border space-y-5">
              <div className="space-y-1.5">
                <div className="w-10 h-10 rounded-2xl bg-savelix-lavender text-savelix-purple flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-savelix-purple">
                  Support &amp; Guidance
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-savelix-plum tracking-tight">
                  Family support and psychoeducation
                </h2>
              </div>

              <p className="text-sm text-savelix-grey leading-relaxed">
                Family involvement is encouraged where appropriate, with consideration for the individual&apos;s privacy, consent and well-being.
              </p>

              <div className="space-y-3 pt-2">
                {familyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-savelix-border/70 flex items-start gap-3 shadow-xs"
                  >
                    <ShieldCheck className="w-4 h-4 text-savelix-purple flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-savelix-plum leading-relaxed font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multidisciplinary Collaborative Care: Integrated Full-Width Strip */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-savelix-plum text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          {/* Background SVG Orbits Decoration (Section 2: Right Outer Corner) */}
          <DecorOrbits
            variant="right"
            className="-top-16 -right-16 sm:-top-20 sm:-right-20 lg:-top-24 lg:-right-24"
            opacity="opacity-15 sm:opacity-20"
            size="w-56 sm:w-72 lg:w-96 h-auto"
          />

          <div className="max-w-3xl space-y-3 mb-10 sm:mb-12 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-savelix-lavender">
              Multidisciplinary Care
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Collaborative{' '}
              <span className="font-serif italic font-normal text-savelix-lavender">Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 gap-8 md:gap-0 relative z-10">
            {collaborativeRoles.map((role, idx) => {
              const IconComp = role.icon;
              return (
                <div
                  key={idx}
                  className="space-y-4 pt-6 md:pt-0 md:px-8 first:pt-0 first:md:pl-0 last:md:pr-0"
                >
                  <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-savelix-lavender">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-savelix-lavender/85 leading-relaxed font-normal">
                    {role.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Service Navigation & Final Reassurance CTA */}
      <section className="pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-savelix-lavender to-white p-8 sm:p-12 lg:p-14 border border-savelix-border shadow-savelix-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
          {/* Background SVG Flow Decoration (Section 3: Left Outer Corner) */}
          <DecorFlow
            variant="left"
            className="top-2 left-0 sm:top-4 sm:left-0 lg:top-6 lg:left-0"
            opacity="opacity-35 sm:opacity-50 lg:opacity-65"
            size="w-40 sm:w-52 lg:w-68 xl:w-76 h-auto"
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
              to="/services/psychological-counselling"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-xs sm:text-sm font-medium border border-savelix-border transition-colors"
            >
              <span>Psychological Counselling</span>
              <ArrowRight className="w-3.5 h-3.5 text-savelix-purple" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
