import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Microscope,
  Award,
  GraduationCap,
} from 'lucide-react';

/**
 * Section 07: Education & Internship Teaser
 *
 * Source Authority:
 * - SAVELIX Website Content & Structure Plan (Page 4 Section 07 & Page 12 Page H)
 *
 * Balancia Visual Pattern:
 * - Balancia Section 12 ("The Psychology Journal" pattern):
 *   3-column editorial card grid, Baskervville italic heading accent,
 *   photographic integration (/assets/education-clinic.jpg), and pill CTA with circular arrow wrapper.
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
      className="relative py-16 sm:py-24 lg:py-28 overflow-hidden bg-savelix-lilac"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-savelix-lavender text-savelix-plum text-xs font-semibold tracking-wider uppercase border border-savelix-border/80">
            <Sparkles className="w-3.5 h-3.5 text-savelix-purple" />
            <span>Academic &amp; Clinical Training</span>
          </div>

          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-savelix-plum tracking-tight leading-[1.2]"
          >
            Education, Training &amp;{' '}
            <span className="font-serif italic font-normal text-savelix-purple">Internship</span>
          </h2>

          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-savelix-purple">
            Theoretical learning and supervised practical exposure
          </p>

          <p className="text-sm sm:text-base text-savelix-grey leading-relaxed max-w-2xl mx-auto">
            Educational support and structured internship opportunities for students pursuing
            psychology, social work, nursing and other relevant healthcare disciplines, connecting
            theoretical knowledge with guided learning.
          </p>
        </div>

        {/* Feature Hero Card with Clinical Training Photo (Balancia Journal Header Treatment) */}
        <div className="mb-10 sm:mb-12 rounded-3xl overflow-hidden border border-savelix-border shadow-savelix-md bg-white grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-10 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-savelix-lavender text-savelix-purple">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Disciplines: Psychology • Social Work • Nursing</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-savelix-plum">
              Bridging Classroom Theory with Clinical Practice
            </h3>

            <p className="text-xs sm:text-sm text-savelix-grey leading-relaxed">
              Internship activities connect theoretical knowledge with supervised clinical exposure,
              fostering reflective thinking, professional communication, and deep respect for patient
              dignity in psychiatric and psychological care.
            </p>

            <div className="pt-2">
              <Link
                to="/education-internship"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-savelix-purple hover:text-savelix-purple-hover"
              >
                <span>Learn about programme eligibility &amp; conditions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[280px]">
            <img
              src={`${import.meta.env.BASE_URL}assets/education-clinic.jpg`}
              alt="SAVELIX Clinical Study and Healthcare Training Library"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        {/* 3-Column Structured Learning Tracks (Balancia 3-Card Grid Pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {tracks.map((track, idx) => {
            const IconComponent = track.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-savelix-border shadow-savelix-sm hover:shadow-savelix-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-savelix-lavender flex items-center justify-center text-savelix-purple">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-savelix-lilac text-savelix-purple border border-savelix-border">
                      {track.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-savelix-plum mb-2">
                    {track.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-savelix-grey leading-relaxed">
                    {track.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Centered Pill CTA Button */}
        <div className="text-center pt-10 sm:pt-14">
          <Link
            to="/education-internship"
            className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
          >
            <span>Education &amp; Internship</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
