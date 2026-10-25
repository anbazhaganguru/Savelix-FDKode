import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import DecorOrbits from '../components/ui/decor/DecorOrbits';
import DecorBotanical from '../components/ui/decor/DecorBotanical';
import DecorFlow from '../components/ui/decor/DecorFlow';
import DecorBranching from '../components/ui/decor/DecorBranching';

/**
 * PAGE I — WHY CHOOSE SAVELIX
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 4, 5, 13, 14, 15)
 *
 * Art-directed Editorial Layout:
 * - Two-column clinical differentiator spread replacing repetitive card grids.
 * - Serif italic accents paired with geometric sans-serif typography.
 * - Flat tone transitions (Lilac canvas, Warm White differentiators, Deep Plum commitment).
 * - Zero nested cards, zero thin hairline rules, zero resting shadows, zero decorative numbering.
 * - 100% approved content preserved verbatim.
 */
export default function WhySavelix() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const differentiators = [
    'Integrated mental healthcare involving psychiatric professionals and psychologists',
    'Personalised treatment plans',
    'Evidence-based psychological support',
    'Comprehensive rehabilitation',
    'Family-centred care',
    'Child, adolescent and adult support',
    'Substance-use recovery support',
    'Education and clinical learning opportunities',
  ];

  const coreValues = [
    'Compassion and empathy',
    'Dignity and respect',
    'Confidentiality and ethical practice',
    'Individualised and evidence-informed care',
    'Collaboration and family education',
    'Recovery, independence and inclusion',
    'Continuous learning and professional development',
  ];

  return (
    <div className="w-full bg-savelix-lilac min-h-[100dvh] text-savelix-plum">

      {/* Full-Width Image-Led Editorial Hero */}
      <PageHero
        title={
          <>
            Why Choose <span className="font-serif italic font-normal text-savelix-purple">Savelix?</span>
          </>
        }
        subtitle="Compassionate Care. Professional Expertise. Individualised Support."
        description="Savelix provides psychiatric care, psychological interventions, counselling and rehabilitation services, with care that considers the whole person and everyday functioning."
        image={`${import.meta.env.BASE_URL}assets/heroes/why-savelix.jpg`}
        imageAlt="Savelix Comprehensive Care Environment"
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
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple min-h-[48px]"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-savelix-purple" />
            </Link>
          </>
        }
      />

      {/* Clinical Strengths: Open Editorial Spread on Crisp White Ground */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Background SVG Orbits Decoration (Section 1: Left Outer Corner) */}
        <DecorOrbits
          variant="left"
          className="top-8 left-0 sm:top-14 sm:left-0 lg:top-16 lg:left-0"
          opacity="opacity-45 sm:opacity-60 lg:opacity-75"
          size="w-44 sm:w-60 lg:w-80 xl:w-[400px] h-auto"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative Anchor */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-savelix-plum tracking-tight">
                Source-Listed <span className="font-serif italic font-normal text-savelix-purple">Strengths</span>
              </h2>
              <p className="text-base sm:text-lg text-savelix-plum/80 leading-relaxed max-w-[45ch]">
                Our clinical framework is built on integrated expertise, patient-centred rehabilitation, and continuous professional practice.
              </p>
            </div>

            {/* Right Differentiators Stream */}
            <div className="lg:col-span-7 space-y-6">
              {differentiators.map((diff, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-[24px] bg-savelix-lilac/70 space-y-2"
                >
                  <p className="text-lg sm:text-xl font-bold text-savelix-plum leading-snug">
                    {diff}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment: Expansive Deep Plum Section */}
      <section className="py-20 sm:py-28 bg-savelix-plum text-white relative overflow-hidden">
        {/* Background SVG Botanical Decoration (Section 2: Right Outer Corner) */}
        <DecorBotanical
          variant="right"
          className="top-4 right-0 sm:top-8 sm:right-0 lg:top-10 lg:right-0"
          opacity="opacity-15 sm:opacity-20 lg:opacity-25"
          size="w-44 sm:w-60 lg:w-76 xl:w-88 h-auto"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Our <span className="font-serif italic font-normal text-savelix-lavender">Commitment</span>
            </h2>
            <blockquote className="text-xl sm:text-2xl text-savelix-lavender leading-relaxed font-serif italic pt-2">
              &ldquo;Savelix strives to create a respectful and supportive environment where clients feel heard, families feel guided and individuals receive care aligned with their clinical needs. The focus is on understanding the person beyond the condition and supporting each individual&apos;s journey towards improved mental health and quality of life.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Core Values: Open Typographic Layout */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Background SVG Flow Decoration (Section 3: Left Outer Corner) */}
        <DecorFlow
          variant="left"
          className="top-6 left-0 sm:top-10 sm:left-0 lg:top-12 lg:left-0"
          opacity="opacity-45 sm:opacity-60 lg:opacity-75"
          size="w-44 sm:w-60 lg:w-80 xl:w-[400px] h-auto"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-14 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-savelix-plum tracking-tight">
              Core <span className="font-serif italic font-normal text-savelix-purple">Values</span>
            </h2>
            <p className="text-base sm:text-lg text-savelix-plum/80 leading-relaxed">
              Foundational principles that govern clinical decisions and therapeutic relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {coreValues.map((val, idx) => (
              <div key={idx} className="space-y-2">
                <span className="w-2.5 h-2.5 rounded-full bg-savelix-purple inline-block mb-2" />
                <p className="text-lg sm:text-xl font-bold text-savelix-plum leading-snug">
                  {val}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Care Invitation: Tailored & Restrained */}
      <section className="py-20 sm:py-28 bg-savelix-lavender relative overflow-hidden">
        {/* Background SVG Branching Decoration (Section 4: Right Outer Corner) */}
        <DecorBranching
          variant="right"
          className="top-4 right-0 sm:top-6 sm:right-0 lg:top-8 lg:right-0"
          opacity="opacity-40 sm:opacity-55 lg:opacity-70"
          size="w-40 sm:w-56 lg:w-72 xl:w-84 h-auto"
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
