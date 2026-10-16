import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

/**
 * Section 04: Conditions We Support Teaser
 *
 * Source Authority:
 * - SAVELIX Website Content & Structure Plan (Page 3 Section 04 & Page 7 Page C)
 *
 * Balancia Visual Pattern:
 * - Centered radial/editorial layout, Baskervville italic heading accent,
 *   symmetrical condition nodes with star emblem dots, and pill button CTA.
 */
export default function ConditionsTeaser() {
  const conditionGroups = [
    {
      title: 'Anxiety & Stress-Related Concerns',
      items: 'Excessive worry, fear and nervousness; panic symptoms and phobias; personal and emotional stress; sleep difficulties.',
    },
    {
      title: 'Depression & Mood Disorders',
      items: 'Persistent sadness and loss of interest; low motivation and fatigue; bipolar disorder (manic and depressive episodes).',
    },
    {
      title: 'Obsessive-Compulsive Disorder (OCD)',
      items: 'Recurrent intrusive thoughts and obsessions; repetitive behaviours and compulsions; anxiety affecting daily routines.',
    },
    {
      title: 'Personality Disorders',
      items: 'Borderline personality disorder (BPD); difficulties with emotional regulation, interpersonal relationships and behavioural patterns.',
    },
    {
      title: 'Psychotic Disorders',
      items: 'Schizophrenia; schizoaffective disorder; hallucinations, delusions and disturbances in thinking, perception and functioning.',
    },
    {
      title: 'Neurocognitive Conditions',
      items: 'Dementia and associated cognitive changes; difficulties with memory, orientation and daily living activities.',
    },
    {
      title: 'Other Emotional & Behavioural Challenges',
      items: 'Sleep disturbances, anger-management difficulties, adjustment problems, and substance-use concerns following clinical assessment.',
    },
  ];

  return (
    <section
      id="conditions-teaser"
      aria-labelledby="conditions-heading"
      className="relative py-16 sm:py-24 lg:py-28 bg-white/60 border-y border-savelix-border/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-savelix-lavender text-savelix-plum text-xs font-semibold tracking-wider uppercase border border-savelix-border/80">
            <Sparkles className="w-3.5 h-3.5 text-savelix-purple" />
            <span>Clinical Scope of Care</span>
          </div>

          <h2
            id="conditions-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-savelix-plum tracking-tight leading-[1.2]"
          >
            Mental Health{' '}
            <span className="font-serif italic font-normal text-savelix-purple">Conditions</span>{' '}
            We Support
          </h2>

          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-savelix-purple">
            Support for a range of mental health concerns
          </p>

          <p className="text-sm sm:text-base text-savelix-grey leading-relaxed max-w-2xl mx-auto">
            Care considers the whole person, providing evidence-informed interventions tailored to
            individual needs following appropriate clinical assessment.
          </p>
        </div>

        {/* Balancia-Style Centered Diagnostic Hub Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {conditionGroups.map((group, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-savelix-border/80 shadow-savelix-sm hover:shadow-savelix-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-savelix-lavender flex items-center justify-center text-savelix-purple flex-shrink-0 group-hover:bg-savelix-purple group-hover:text-white transition-colors duration-200">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-savelix-plum group-hover:text-savelix-purple transition-colors">
                  {group.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-savelix-grey leading-relaxed">
                {group.items}
              </p>
            </div>
          ))}

          {/* Clinical Assessment Assurance Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-savelix-lavender/50 border border-savelix-purple/30 shadow-savelix-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-full bg-savelix-purple text-white flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-savelix-plum">
                Individualised Assessment
              </h3>
              <p className="text-xs sm:text-sm text-savelix-grey leading-relaxed">
                All care pathways begin with a thorough psychiatric and psychological evaluation to
                clarify symptoms and formulate a collaborative recovery plan.
              </p>
            </div>

            <div className="pt-4">
              <Link
                to="/conditions"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-savelix-purple hover:text-savelix-purple-hover"
              >
                <span>Read detailed conditions guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Centered Pill CTA Button */}
        <div className="text-center pt-12 sm:pt-16">
          <Link
            to="/conditions"
            className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
          >
            <span>Conditions We Support</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
