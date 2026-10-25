import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Microscope, Award, GraduationCap } from 'lucide-react';
import DecorBranching from '../ui/decor/DecorBranching';

/**
 * Section 07: Education & Internship Teaser
 *
 * Editorial Art Direction:
 * - Editorial magazine layout integrating the approved education-clinic photograph
 * - Open hierarchy replacing nested card-in-card containers
 * - Fluid proportion scaling across mobile to 4K displays
 * - Verbatim approved educational tracks and eligibility links preserved
 */
export default function EducationTeaser() {
  const tracks = [
    {
      icon: BookOpen,
      title: 'Theoretical Learning',
      badge: 'Academic Foundation',
      desc: 'Introduction to psychiatry, abnormal psychology, Mental Status Examination (MSE), psychiatric case history, and professional boundaries.',
    },
    {
      icon: Microscope,
      title: 'Practical Clinical Exposure',
      badge: 'Supervised Practice',
      desc: 'Observation of psychiatric assessments where authorised, guided MSE documentation, psychoeducation activities, and rehabilitation programmes.',
    },
    {
      icon: Award,
      title: 'Skill Development & Ethics',
      badge: 'Professional Growth',
      desc: 'Clinical observation and documentation, professional communication, patient-centred recovery care, and strict ethical confidentiality.',
    },
  ];

  return (
    <section
      id="education-teaser"
      aria-labelledby="education-heading"
      className="relative py-20 sm:py-28 lg:py-32 3xl:py-40 bg-white overflow-hidden"
    >
      {/* Background SVG Branching Growth & Discovery (Right Margin) */}
      <DecorBranching
        variant="right"
        className="top-8 -right-12 sm:top-12 sm:-right-8 lg:top-16 lg:right-0"
        opacity="opacity-45 sm:opacity-60 lg:opacity-75"
        size="w-52 sm:w-72 lg:w-88 xl:w-96"
      />

      <div className="savelix-container relative z-10 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl 3xl:max-w-4xl mx-auto space-y-3 sm:space-y-4 animate-reveal">
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-extrabold text-savelix-plum tracking-tight leading-[1.18]"
          >
            Education, Training &amp;{' '}
            <span className="font-serif italic font-normal text-savelix-purple">Internship</span>
          </h2>

          <p className="text-base sm:text-lg 3xl:text-xl font-medium text-savelix-plum">
            Theoretical learning and supervised practical exposure
          </p>

          <p className="text-base sm:text-lg 3xl:text-xl text-savelix-grey leading-relaxed max-w-2xl 3xl:max-w-3xl mx-auto">
            Educational support and structured internship opportunities for students pursuing
            psychology, social work, nursing and other relevant healthcare disciplines, connecting
            theoretical knowledge with guided learning.
          </p>
        </div>

        {/* Editorial Feature Spread: Image & Clinical Narrative (No Nested Card Boxes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 3xl:gap-16 items-center">
          {/* Photographic Anchor: Approved Clinical Learning Environment */}
          <div className="lg:col-span-6 relative rounded-3xl 3xl:rounded-[40px] overflow-hidden bg-savelix-lavender animate-reveal">
            <img
              src={`${import.meta.env.BASE_URL}assets/education-clinic.jpg`}
              alt="SAVELIX Clinical Study and Healthcare Training Library"
              className="w-full h-[360px] sm:h-[440px] lg:h-[500px] 3xl:h-[600px] object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Lead Academic Narrative */}
          <div className="lg:col-span-6 space-y-5 3xl:space-y-7 text-left animate-reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-semibold bg-savelix-lavender text-savelix-plum">
              <GraduationCap className="w-4 h-4 text-savelix-purple" />
              <span>Disciplines: Psychology • Social Work • Nursing</span>
            </div>

            <h3 className="text-2xl sm:text-3xl 3xl:text-4xl font-bold text-savelix-plum leading-snug">
              Bridging Classroom Theory with Clinical Practice
            </h3>

            <p className="text-base sm:text-lg 3xl:text-xl text-savelix-grey leading-relaxed">
              Internship activities connect theoretical knowledge with supervised clinical exposure,
              fostering reflective thinking, professional communication, and deep respect for patient
              dignity in psychiatric and psychological care.
            </p>

            <div className="pt-2">
              <Link
                to="/education-internship"
                className="inline-flex items-center gap-2 text-base font-semibold text-savelix-plum hover:text-savelix-purple transition-colors"
              >
                <span>Learn about programme eligibility &amp; conditions</span>
                <ArrowRight className="w-4 h-4 text-savelix-purple" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Structured Learning Tracks in Open Typographic Roster (Unboxed) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 3xl:gap-10">
          {tracks.map((track, idx) => {
            const IconComponent = track.icon;
            return (
              <div
                key={idx}
                className="space-y-4 animate-reveal text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-savelix-lavender flex items-center justify-center text-savelix-purple">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide px-3 py-1 rounded-full bg-savelix-lavender text-savelix-purple">
                    {track.badge}
                  </span>
                </div>

                <h3 className="text-lg 3xl:text-xl font-bold text-savelix-plum">
                  {track.title}
                </h3>

                <p className="text-base text-savelix-grey leading-relaxed">
                  {track.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Centered Pill CTA Button */}
        <div className="text-center pt-4">
          <Link
            to="/education-internship"
            className="group inline-flex items-center gap-3 pl-7 pr-3 py-3.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm 3xl:text-base font-semibold tracking-wide transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
          >
            <span>Education &amp; Internship</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
