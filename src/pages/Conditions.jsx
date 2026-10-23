import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import BackButton from '../components/common/BackButton';
import { Calendar, ArrowRight } from 'lucide-react';

/**
 * PAGE C — CONDITIONS WE SUPPORT
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 3, 5, 7, 14, 15)
 *
 * Art-directed Editorial Taxonomy:
 * - Two-column editorial clinical taxonomy stream replacing repetitive card grids.
 * - Expressive serif italic accents paired with geometric sans-serif typography.
 * - Flat tone transitions (Lilac canvas, Warm White clinical taxonomy, Deep Plum care continuum).
 * - Zero nested cards, zero thin hairline rules, zero resting shadows, zero decorative numbering.
 * - 100% approved content preserved verbatim.
 */
export default function Conditions() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const conditionGroups = [
    {
      title: 'Anxiety disorders and stress-related concerns',
      concerns:
        'Excessive worry, fear and nervousness; panic symptoms and phobias; work-related, personal and emotional stress; sleep difficulties associated with psychological distress.',
    },
    {
      title: 'Depression and mood disorders',
      concerns:
        'Persistent sadness and loss of interest; low motivation, fatigue and feelings of hopelessness; bipolar disorder, including manic and depressive episodes; emotional regulation and mood-management difficulties.',
    },
    {
      title: 'Obsessive-Compulsive Disorder (OCD)',
      concerns:
        'Recurrent intrusive thoughts and obsessions; repetitive behaviours and compulsions; anxiety associated with unwanted thoughts; difficulties affecting daily routines and functioning.',
    },
    {
      title: 'Personality disorders',
      concerns:
        'Borderline personality disorder (BPD); other personality disorders; difficulties with emotional regulation, interpersonal relationships and behavioural patterns.',
    },
    {
      title: 'Psychotic disorders',
      concerns:
        'Schizophrenia; schizoaffective disorder; hallucinations, delusions and disturbances in thinking or perception; social withdrawal and difficulties with everyday functioning.',
    },
    {
      title: 'Neurocognitive conditions',
      concerns:
        'Dementia and associated cognitive changes; difficulties with memory, orientation and daily activities; behavioural and emotional concerns associated with cognitive impairment.',
    },
    {
      title: 'Other concerns listed',
      concerns:
        'Sleep disturbances, anger-management difficulties, adjustment problems, substance-use concerns and other emotional or behavioural challenges, following appropriate clinical assessment.',
    },
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
                    Conditions We Support
                  </li>
                </ol>
              </nav>
            </div>
            <span className="text-sm font-semibold text-savelix-purple hidden md:inline-block">
              Clinical Assessment &amp; Diagnosis
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Hero */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-savelix-plum tracking-tight leading-[1.08]">
              Conditions <span className="font-serif italic font-normal text-savelix-purple">We Support</span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-savelix-purple tracking-tight">
              Support for a range of mental health concerns
            </p>

            <p className="text-lg sm:text-xl text-savelix-plum font-normal leading-relaxed max-w-[62ch]">
              Mental health difficulties can affect thoughts, emotions, behaviour, relationships, education, employment and everyday activities. Care considers the whole person rather than focusing only on symptoms.
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

      {/* Clinical Conditions Directory: Open Two-Column Taxonomy Stream */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-savelix-plum tracking-tight">
              Supported <span className="font-serif italic font-normal text-savelix-purple">Clinical Areas</span>
            </h2>
            <p className="text-base sm:text-lg text-savelix-plum/80 leading-relaxed max-w-[60ch]">
              Care at Savelix begins with thorough clinical assessment to understand each individual&apos;s personal and medical circumstances.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20">
            {conditionGroups.map((group, idx) => (
              <div
                key={idx}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-start">
                  <div className="lg:col-span-5 space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-savelix-plum tracking-tight group-hover:text-savelix-purple transition-colors">
                      {group.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-7">
                    <p className="text-base sm:text-lg text-savelix-plum/90 leading-relaxed max-w-[58ch]">
                      {group.concerns}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Continuum: Deep Plum Grounding Section */}
      <section className="py-20 sm:py-28 bg-savelix-plum text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A Comprehensive Approach to <span className="font-serif italic font-normal text-savelix-lavender">Mental Healthcare</span>
            </h2>
            <p className="text-base sm:text-xl text-savelix-lavender/90 leading-relaxed pt-2 max-w-[62ch]">
              Services support different stages of the mental health journey, from early identification and outpatient consultation to inpatient care, rehabilitation and continued recovery support. Care considers the whole person rather than focusing only on symptoms.
            </p>
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
