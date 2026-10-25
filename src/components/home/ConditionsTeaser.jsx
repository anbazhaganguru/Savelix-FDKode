import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Check } from 'lucide-react';
import DecorFlow from '../ui/decor/DecorFlow';

/**
 * Section 04: Conditions We Support Teaser
 *
 * Editorial Art Direction:
 * - Open editorial directory layout avoiding repetitive card grids
 * - Typographic clarity with generous whitespace and calm pacing
 * - Distinctive architectural ledger format suited to clinical taxonomy
 * - All condition groups, descriptions, and navigation links preserved verbatim
 */
export default function ConditionsTeaser() {
  const conditionGroups = [
    {
      title: 'Anxiety & Stress-Related Concerns',
      items:
        'Excessive worry, fear and nervousness; panic symptoms and phobias; personal and emotional stress; sleep difficulties.',
    },
    {
      title: 'Depression & Mood Disorders',
      items:
        'Persistent sadness and loss of interest; low motivation and fatigue; bipolar disorder (manic and depressive episodes).',
    },
    {
      title: 'Obsessive-Compulsive Disorder (OCD)',
      items:
        'Recurrent intrusive thoughts and obsessions; repetitive behaviours and compulsions; anxiety affecting daily routines.',
    },
    {
      title: 'Personality Disorders',
      items:
        'Borderline personality disorder (BPD); difficulties with emotional regulation, interpersonal relationships and behavioural patterns.',
    },
    {
      title: 'Psychotic Disorders',
      items:
        'Schizophrenia; schizoaffective disorder; hallucinations, delusions and disturbances in thinking, perception and functioning.',
    },
    {
      title: 'Neurocognitive Conditions',
      items:
        'Dementia and associated cognitive changes; difficulties with memory, orientation and daily living activities.',
    },
    {
      title: 'Other Emotional & Behavioural Challenges',
      items:
        'Sleep disturbances, anger-management difficulties, adjustment problems, and substance-use concerns following clinical assessment.',
    },
  ];

  return (
    <section
      id="conditions-teaser"
      aria-labelledby="conditions-heading"
      className="relative py-20 sm:py-28 lg:py-32 3xl:py-40 bg-savelix-lilac overflow-hidden"
    >
      {/* Background SVG Wellness Flow Decoration (Left Margin) */}
      <DecorFlow
        variant="side-left"
        className="top-1/4 -left-16 sm:-left-12 lg:-left-6 -translate-y-8"
        opacity="opacity-40 sm:opacity-55 lg:opacity-70"
        size="w-56 sm:w-76 lg:w-[400px] xl:w-[460px]"
      />

      <div className="savelix-container relative z-10 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl 3xl:max-w-4xl mx-auto space-y-3 sm:space-y-4 animate-reveal">
          <h2
            id="conditions-heading"
            className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-extrabold text-savelix-plum tracking-tight leading-[1.18]"
          >
            Mental Health{' '}
            <span className="font-serif italic font-normal text-savelix-purple">Conditions</span>{' '}
            We Support
          </h2>

          <p className="text-base sm:text-lg 3xl:text-xl font-medium text-savelix-plum">
            Support for a range of mental health concerns
          </p>

          <p className="text-base sm:text-lg 3xl:text-xl text-savelix-grey leading-relaxed max-w-2xl 3xl:max-w-3xl mx-auto">
            Care considers the whole person, providing evidence-informed interventions tailored to
            individual needs following appropriate clinical assessment.
          </p>
        </div>

        {/* Open Editorial Directory: Unboxed Architectural Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 3xl:gap-16">
          {conditionGroups.map((group, index) => (
            <div
              key={index}
              className="space-y-2.5 animate-reveal text-left"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-savelix-lavender text-savelix-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl 3xl:text-2xl font-bold text-savelix-plum">
                  {group.title}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-savelix-grey leading-relaxed pl-10.5">
                {group.items}
              </p>
            </div>
          ))}

          {/* Clinical Assessment Assurance Feature Box */}
          <div className="p-8 3xl:p-10 rounded-3xl bg-savelix-lavender text-savelix-plum flex flex-col justify-between space-y-4 animate-reveal">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-savelix-purple text-white flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl 3xl:text-2xl font-bold text-savelix-plum">
                  Individualised Assessment
                </h3>
              </div>
              <p className="text-base sm:text-lg text-savelix-grey leading-relaxed">
                All care pathways begin with a thorough psychiatric and psychological evaluation to
                clarify symptoms and formulate a collaborative recovery plan.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/conditions"
                className="inline-flex items-center gap-2 text-base font-semibold text-savelix-plum hover:text-savelix-purple transition-colors"
              >
                <span>Read detailed conditions guide</span>
                <ArrowRight className="w-4 h-4 text-savelix-purple" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Centered Pill CTA Button */}
        <div className="text-center pt-4">
          <Link
            to="/conditions"
            className="group inline-flex items-center gap-3 pl-7 pr-3 py-3.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm 3xl:text-base font-semibold tracking-wide transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
          >
            <span>Conditions We Support</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
