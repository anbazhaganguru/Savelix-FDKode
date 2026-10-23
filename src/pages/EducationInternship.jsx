import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import BackButton from '../components/common/BackButton';
import { Calendar, ArrowRight, AlertCircle } from 'lucide-react';

/**
 * PAGE H — EDUCATION & INTERNSHIP
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 4, 12, 14, 15)
 *
 * Art-directed Academic & Clinical Layout:
 * - Expressive serif italic accents paired with geometric sans-serif typography.
 * - Academic curriculum spread with comparative two-track syllabus.
 * - Open clinical competencies without decorative numbering or card frames.
 * - Flat tone transitions (Lilac canvas, Warm White curriculum, Deep Plum guidelines).
 * - Zero nested cards, zero thin hairline rules, zero resting shadows.
 * - 100% approved content preserved verbatim.
 */
export default function EducationInternship() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const theoreticalPoints = [
    'Introduction to psychiatry and abnormal psychology',
    'Common mental health conditions and clinical presentations',
    'Mental Status Examination (MSE) and psychiatric case history',
    'Basics of psychological assessment and counselling',
    'Psychoeducation, therapeutic communication and patient care',
    'Mental health awareness, ethics and professional boundaries',
  ];

  const practicalPoints = [
    'Observation of psychiatric assessments and clinical procedures where authorised',
    'Guided learning in MSE and case-history documentation',
    'Participation in psychoeducation and awareness activities',
    'Exposure to structured psychiatric rehabilitation programmes',
    'Therapeutic activities and patient engagement',
    'Behavioural observation, communication and patient interaction',
    'Case discussions and clinical learning under appropriate supervision',
  ];

  const skillPoints = [
    'Clinical observation and documentation',
    'Professional communication and teamwork',
    'Patient-centred and recovery-oriented care',
    'Ethical practice, confidentiality and respect for patient dignity',
    'Reflective thinking and clinical reasoning',
    'Connecting theory with practice',
    'Understanding psychiatric conditions, multidisciplinary care, psychological support and rehabilitation methods',
    'Building professional awareness and confidence',
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
                    Education &amp; Internship
                  </li>
                </ol>
              </nav>
            </div>
            <span className="text-sm font-semibold text-savelix-purple hidden md:inline-block">
              Academic &amp; Clinical Training
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Hero */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-savelix-plum tracking-tight leading-[1.08]">
                Education, Training &amp; <span className="font-serif italic font-normal text-savelix-purple">Internship</span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-savelix-purple tracking-tight">
                Theoretical learning and supervised practical exposure
              </p>

              <p className="text-lg sm:text-xl text-savelix-plum font-normal leading-relaxed max-w-[62ch]">
                Educational support and structured internship opportunities for students pursuing psychology, social work, nursing and other relevant healthcare disciplines, connecting theoretical knowledge with guided learning and supervised clinical exposure.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-base font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple cursor-pointer min-h-[48px]"
                >
                  <span>Internship Enquiry</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </Link>
                {onOpenAppointmentModal && (
                  <button
                    type="button"
                    onClick={onOpenAppointmentModal}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple min-h-[48px]"
                  >
                    <Calendar className="w-4 h-4 text-savelix-purple" />
                    <span>Book an Appointment</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Facility Asset */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-[32px] overflow-hidden bg-savelix-lavender aspect-[4/3]">
                <img
                  src={`${import.meta.env.BASE_URL}assets/education-clinic.jpg`}
                  alt="Education, Training and Internship at Savelix"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Tracks: Comparative Two-Column Academic Syllabus */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-savelix-plum tracking-tight">
              Structured <span className="font-serif italic font-normal text-savelix-purple">Academic Syllabus</span>
            </h2>
            <p className="text-base sm:text-lg text-savelix-plum/80 leading-relaxed max-w-[60ch]">
              Guided curriculum integrating foundational mental health science with hands-on clinical observation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Track 1: Theoretical Learning */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-savelix-plum tracking-tight">
                Theoretical learning
              </h3>

              <ul className="space-y-4 pt-2">
                {theoreticalPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-savelix-purple mt-2.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-savelix-plum font-medium leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Track 2: Practical Learning */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-savelix-plum tracking-tight">
                Practical learning and clinical exposure
              </h3>

              <ul className="space-y-4 pt-2">
                {practicalPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-savelix-purple mt-2.5 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-savelix-plum font-medium leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Development & Learning Outcomes */}
      <section className="py-20 sm:py-28 bg-savelix-lilac">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-savelix-plum tracking-tight">
              Skill development and <span className="font-serif italic font-normal text-savelix-purple">Learning Outcomes</span>
            </h2>
            <p className="text-base sm:text-lg text-savelix-plum/80 leading-relaxed max-w-[60ch]">
              Key competencies cultivated through supervised patient interaction and multidisciplinary clinical review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {skillPoints.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-[24px] bg-white space-y-2"
              >
                <p className="text-lg sm:text-xl font-bold text-savelix-plum leading-snug">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment & Conditions: Expansive Deep Plum Section */}
      <section className="py-20 sm:py-28 bg-savelix-plum text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Commitment and <span className="font-serif italic font-normal text-savelix-lavender">Conditions</span>
            </h2>
            <blockquote className="text-xl sm:text-2xl text-savelix-lavender leading-relaxed font-serif italic pt-2">
              &ldquo;A supportive learning environment for knowledge, practical skills and insight into psychiatric and psychological care. Internship activities, clinical exposure and certificates are subject to programme availability, institutional policies, patient consent, confidentiality requirements and appropriate professional supervision.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Source Note: Clean Editorial Transparency Notice */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-[28px] bg-savelix-lavender flex items-start gap-5">
            <AlertCircle className="w-6 h-6 text-savelix-purple flex-shrink-0 mt-0.5" />
            <div className="space-y-2 max-w-[65ch]">
              <h3 className="text-lg font-bold text-savelix-plum">
                Source note for implementation
              </h3>
              <p className="text-base text-savelix-plum/90 leading-relaxed">
                The supplied document explicitly notes that this page should include a clear internship enquiry call to action, clarify supervision and student role boundaries, and remain concise. The enquiry destination and application details are not provided.
              </p>
            </div>
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
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-base font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple min-h-[48px]"
              >
                Contact Us for Enquiries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
