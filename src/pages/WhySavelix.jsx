import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import BackButton from '../components/common/BackButton';
import { Calendar, ArrowRight } from 'lucide-react';

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
      {/* Top Utility Bar: Smart Back & Breadcrumbs */}
      <div className="bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <BackButton fallback="/" />
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm text-savelix-plum/70">
                  <li>
                    <Link to="/" className="hover:text-savelix-purple transition-colors focus-visible:underline">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-savelix-plum/40">/</li>
                  <li className="text-savelix-plum font-semibold" aria-current="page">
                    Why Savelix
                  </li>
                </ol>
              </nav>
            </div>
            <span className="text-sm font-semibold text-savelix-purple hidden md:inline-block">
              Clinical Differentiators
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Hero */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-savelix-plum tracking-tight leading-[1.08]">
              Why Choose <span className="font-serif italic font-normal text-savelix-purple">Savelix?</span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-savelix-purple tracking-tight">
              Compassionate Care. Professional Expertise. Individualised Support.
            </p>

            <p className="text-lg sm:text-xl text-savelix-plum font-normal leading-relaxed max-w-[62ch]">
              Savelix provides psychiatric care, psychological interventions, counselling and rehabilitation services, with care that considers the whole person and everyday functioning.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Strengths: Open Editorial Spread on Crisp White Ground */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-20 sm:py-28 bg-savelix-plum text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-20 sm:py-28 bg-savelix-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
