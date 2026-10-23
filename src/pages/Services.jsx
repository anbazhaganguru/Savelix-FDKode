import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import BackButton from '../components/common/BackButton';
import { Calendar, ArrowRight, ArrowUpRight } from 'lucide-react';

/**
 * SECTION 03 — SERVICES DIRECTORY OVERVIEW
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 3, 5, 6, 8, 9, 10, 11, 14)
 *
 * Art-directed Editorial Directory:
 * - Editorial healthcare directory with open structured rows and rich typographic pacing.
 * - Serif italic accents paired with geometric sans-serif typography.
 * - Flat tone transitions (Lilac canvas, Warm White directory field, Deep Plum collaborative band).
 * - Zero nested card boxes, zero thin hairline rules, zero resting shadows, zero decorative numbering.
 * - 100% approved content preserved verbatim.
 */
export default function Services() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const servicesList = [
    {
      title: 'Psychiatric Care',
      href: '/services/psychiatric-care',
      summary:
        'Comprehensive psychiatric evaluation and diagnosis; individualised medication management and monitoring; review of symptoms, treatment response and possible side effects; ongoing clinical follow-up and relapse-prevention planning.',
      category: 'Medical & Clinical Evaluation',
    },
    {
      title: 'Psychological Counselling',
      href: '/services/psychological-counselling',
      summary:
        'Psychological assessment and mental status evaluation; individual counselling and supportive psychotherapy; CBT where clinically appropriate; DBT-informed interventions and emotional-regulation skills; stress management, relaxation and mindfulness techniques; coping skills, behavioural strategies and problem-solving support.',
      category: 'Evidence-Informed Psychotherapy',
    },
    {
      title: 'Psychiatric Rehabilitation',
      href: '/services/psychiatric-rehabilitation',
      summary:
        'Structured daily routines and activity-based interventions; social skills and communication training; personal hygiene, self-care and life-skills development; cognitive stimulation and functional support where appropriate; therapeutic recreational and meaningful engagement activities; individualised rehabilitation goals and progress monitoring.',
      category: 'Functional & Recovery Support',
    },
    {
      title: 'Family, Marriage & Relationship Counselling',
      href: '/services/family-counselling',
      summary:
        'A supportive and confidential environment for individuals, couples and families to address emotional difficulties, communication barriers and relationship challenges.',
      category: 'Relationship & Family Dynamics',
    },
    {
      title: 'Substance Use & Addiction Support',
      href: '/services/substance-use-support',
      summary:
        'Support for individuals experiencing difficulties related to alcohol, tobacco and other psychoactive substance use through appropriate assessment, psychiatric care, psychological interventions and rehabilitation support.',
      category: 'Specialised Recovery Care',
    },
    {
      title: 'Child & Adolescent Counselling',
      href: '/services/child-adolescent-counselling',
      summary:
        'Age-appropriate psychological support for children and adolescents experiencing emotional, behavioural, developmental or adjustment difficulties. The approach considers individual needs, developmental stage, family environment and school experiences.',
      category: 'Developmental & Youth Support',
    },
    {
      title: 'Inpatient Environment & Safety Monitoring',
      href: '/services/inpatient-safety-monitoring',
      summary:
        'A safe, supportive and structured rehabilitation environment, with infection prevention and control measures, environmental safety checks and regular monitoring to protect patients, families, visitors and staff.',
      category: 'Clinical Environment & Safeguards',
    },
  ];

  const collaborativeRoles = [
    {
      title: 'Psychiatrists',
      role: 'Psychiatrists focus on psychiatric evaluation, diagnosis and medical treatment.',
    },
    {
      title: 'Psychologists',
      role: 'Psychologists contribute psychological assessment, counselling and appropriate therapeutic interventions.',
    },
    {
      title: 'Rehabilitation Professionals',
      role: 'Rehabilitation professionals support daily functioning, social skills and recovery-oriented activities.',
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
                    Services
                  </li>
                </ol>
              </nav>
            </div>
            <span className="text-sm font-semibold text-savelix-purple hidden md:inline-block">
              Clinical Disciplines
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Hero */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-savelix-plum tracking-tight leading-[1.08]">
                Our <span className="font-serif italic font-normal text-savelix-purple">Services</span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-savelix-purple tracking-tight">
                Comprehensive Psychiatric Care and Psychological Support
              </p>

              <p className="text-lg sm:text-xl text-savelix-plum font-normal leading-relaxed max-w-[62ch]">
                Care considers the whole person rather than focusing only on symptoms. Services support different stages of the mental health journey, from early identification and outpatient consultation to inpatient care, rehabilitation and continued recovery support.
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
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple min-h-[48px]"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 text-savelix-purple" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-[32px] overflow-hidden bg-savelix-lavender aspect-[4/3]">
                <img
                  src={`${import.meta.env.BASE_URL}assets/rehab-clinic.jpg`}
                  alt="Savelix Psychiatric Care & Rehabilitation Environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Editorial Service Directory: Open Editorial Rows on Crisp White Ground */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-savelix-plum tracking-tight">
              Dedicated <span className="font-serif italic font-normal text-savelix-purple">Care Disciplines</span>
            </h2>
            <p className="text-base sm:text-lg text-savelix-plum/80 leading-relaxed max-w-[60ch]">
              Select any clinical discipline for detailed information on treatment pathways, assessment, and recovery support.
            </p>
          </div>

          {/* Open Directory Stream */}
          <div className="space-y-16 sm:space-y-20">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                  {/* Category Column */}
                  <div className="lg:col-span-3">
                    <span className="inline-block text-sm font-semibold text-savelix-purple bg-savelix-lavender px-4 py-1.5 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Narrative Column */}
                  <div className="lg:col-span-6 space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-savelix-plum tracking-tight group-hover:text-savelix-purple transition-colors">
                      <Link to={service.href} className="focus-visible:underline">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-base sm:text-lg text-savelix-plum/90 leading-relaxed max-w-[58ch]">
                      {service.summary}
                    </p>
                  </div>

                  {/* Action Link Column */}
                  <div className="lg:col-span-3 flex items-center lg:justify-end pt-2 lg:pt-0">
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 text-base font-semibold text-savelix-purple group-hover:text-savelix-purple-hover px-6 py-3 rounded-full bg-savelix-lilac group-hover:bg-savelix-lavender transition-colors min-h-[48px]"
                    >
                      <span>Explore Details</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multidisciplinary Collaborative Approach: Expansive Deep Plum Band */}
      <section className="py-20 sm:py-28 bg-savelix-plum text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Collaborative <span className="font-serif italic font-normal text-savelix-lavender">Approach</span>
            </h2>
            <p className="text-base sm:text-lg text-savelix-lavender/90 leading-relaxed max-w-[60ch]">
              Integrated psychiatric care, psychological counselling, and recovery-oriented rehabilitation working in harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {collaborativeRoles.map((role, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {role.title}
                </h3>
                <p className="text-base sm:text-lg text-savelix-lavender/90 leading-relaxed font-normal">
                  {role.role}
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
