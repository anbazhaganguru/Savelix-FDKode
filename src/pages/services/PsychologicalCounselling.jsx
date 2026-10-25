import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import PageHero from '../../components/layout/PageHero';
import DecorFlow from '../../components/ui/decor/DecorFlow';
import DecorOrbits from '../../components/ui/decor/DecorOrbits';
import DecorBotanical from '../../components/ui/decor/DecorBotanical';
import {
  Brain,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Activity,
  Heart,
  Smile,
  Compass,
  Sparkles,
} from 'lucide-react';

/**
 * PAGE B — PSYCHOLOGICAL COUNSELLING
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 3, 5, 6, 14, 15)
 *
 * Visual Presentation:
 * - Editorial psychotherapy layout with structured modality index instead of repeated cards.
 * - Baskervville serif italic heading accents, tactile mobile touch points.
 * - All visible text is strictly verbatim from the approved Content Document.
 */
export default function PsychologicalCounselling() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const counsellingServices = [
    {
      num: '01',
      text: 'Psychological assessment and mental status evaluation',
      icon: Compass,
      category: 'Clinical Assessment',
    },
    {
      num: '02',
      text: 'Individual counselling and supportive psychotherapy',
      icon: Heart,
      category: 'Individual Therapy',
    },
    {
      num: '03',
      text: 'CBT where clinically appropriate',
      icon: Brain,
      category: 'Evidence-Based Modality',
      badge: 'Where clinically appropriate',
    },
    {
      num: '04',
      text: 'DBT-informed interventions and emotional-regulation skills',
      icon: Sparkles,
      category: 'Emotion Regulation',
    },
    {
      num: '05',
      text: 'Stress management, relaxation and mindfulness techniques',
      icon: Smile,
      category: 'Mindfulness & Relaxation',
    },
    {
      num: '06',
      text: 'Coping skills, behavioural strategies and problem-solving support',
      icon: CheckCircle2,
      category: 'Behavioural Support',
    },
  ];

  const collaborativeRoles = [
    {
      title: 'Psychologists',
      role: 'Psychologists contribute psychological assessment, counselling and appropriate therapeutic interventions.',
      icon: Brain,
    },
    {
      title: 'Psychiatrists',
      role: 'Psychiatrists focus on psychiatric evaluation, diagnosis and medical treatment.',
      icon: Stethoscope,
    },
    {
      title: 'Rehabilitation Professionals',
      role: 'Rehabilitation professionals support daily functioning, social skills and recovery-oriented activities.',
      icon: Activity,
    },
  ];

  return (
    <div className="w-full bg-savelix-lilac min-h-screen">
      {/* Full-bleed Inner Page Hero */}
      <PageHero
        eyebrow={
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-savelix-lavender text-savelix-plum text-xs font-semibold tracking-wider uppercase border border-savelix-border/70">
            <Brain className="w-3.5 h-3.5 text-savelix-purple" />
            <span>SAVELIX Services</span>
          </div>
        }
        title={
          <>
            Psychological{' '}
            <span className="font-serif italic font-normal text-savelix-purple">Counselling</span>
          </>
        }
        description="Mental health difficulties can affect thoughts, emotions, behaviour, relationships, education, employment and everyday activities. Care considers the whole person rather than focusing only on symptoms."
        image={`${import.meta.env.BASE_URL}assets/heroes/psychological-counselling.jpg`}
        imageAlt="Psychologist conducting individual counselling session in a supportive clinic environment"
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

      {/* Main Therapeutic Modalities: Editorial Structured Index */}
      <section className="py-12 sm:py-16 bg-white border-y border-savelix-border/70 relative overflow-hidden">
        {/* Background SVG Flow Decoration (Section 1: Left Outer Corner) */}
        <DecorFlow
          variant="left"
          className="top-4 left-0 sm:top-8 sm:left-0 lg:top-10 lg:left-0"
          opacity="opacity-45 sm:opacity-60 lg:opacity-75"
          size="w-44 sm:w-60 lg:w-80 xl:w-[400px] h-auto"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-8 sm:mb-12 space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-savelix-purple">
              Therapeutic Interventions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-savelix-plum tracking-tight">
              Psychological assessment and counselling
            </h2>
          </div>

          {/* Structured 2-Column Divider Stream (Not Boxy Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 divide-y md:divide-y-0 divide-savelix-border">
            {counsellingServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="py-6 border-b border-savelix-border/70 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-savelix-lavender text-savelix-purple flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold text-savelix-purple uppercase tracking-wider">
                        {service.category}
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

          {/* Context Note on Family Involvement: Editorial Quote Callout */}
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

      {/* Multidisciplinary Collaborative Care: Integrated Strip */}
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

      {/* Bottom Service Navigation & Final CTA */}
      <section className="pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-savelix-lavender to-white p-8 sm:p-12 lg:p-14 border border-savelix-border shadow-savelix-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
          {/* Background SVG Botanical Decoration (Section 3: Left Outer Corner) */}
          <DecorBotanical
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
              to="/services/psychiatric-rehabilitation"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-xs sm:text-sm font-medium border border-savelix-border transition-colors"
            >
              <span>Psychiatric Rehabilitation</span>
              <ArrowRight className="w-3.5 h-3.5 text-savelix-purple" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
