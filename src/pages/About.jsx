import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import BackButton from '../components/common/BackButton';
import { Calendar, ArrowRight } from 'lucide-react';

/**
 * PAGE A — ABOUT US
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 4, 5, 14, 15)
 *
 * Art-directed Editorial Layout:
 * - Expressive serif italic accents paired with geometric sans-serif typography.
 * - Asymmetric editorial hero with approved clinic facility photography.
 * - Open three-column clinical principles on white ground with generous line measures.
 * - Stately Vision & Mission pair balancing deep plum and warm lavender planes.
 * - Open typographic Core Values catalog without decorative index badges or nested card borders.
 * - 100% approved content preserved verbatim.
 */
export default function About() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const coreValues = [
    { title: 'Compassion and empathy', desc: 'Providing heartfelt, respectful clinical understanding for every individual.' },
    { title: 'Dignity and respect', desc: 'Upholding personal autonomy, privacy, and unconditional human dignity.' },
    { title: 'Confidentiality and ethical practice', desc: 'Strict adherence to professional medical standards and complete privacy.' },
    { title: 'Individualised and evidence-informed care', desc: 'Personalised treatment paths grounded in clinical science and research.' },
    { title: 'Collaboration and family education', desc: 'Engaging families as supportive partners in the recovery process.' },
    { title: 'Recovery, independence and inclusion', desc: 'Supporting daily functioning, social engagement, and lifelong well-being.' },
    { title: 'Continuous learning and professional development', desc: 'Ongoing clinical education and dedicated academic standards.' },
  ];

  const missionPoints = [
    'Provide psychiatric consultation and treatment',
    'Psychological counselling and emotional support',
    'Structured inpatient care and rehabilitation',
    'Family understanding and participation',
    'Mental health awareness, early intervention and stigma reduction',
    'Educational and supervised learning opportunities',
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
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
            <span className="text-sm font-semibold text-savelix-purple hidden md:inline-block">
              Clinical Care &amp; Rehabilitation
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Hero: Asymmetric Narrative & Clinic Facility Asset */}
      <section className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-savelix-plum tracking-tight leading-[1.08]">
                About <span className="font-serif italic font-normal text-savelix-purple">Savelix</span>
              </h1>

              <p className="text-lg sm:text-2xl text-savelix-plum font-normal leading-relaxed max-w-[62ch]">
                Savelix Psychiatric Clinic and Rehabilitation Centre supports individuals and families facing mental health challenges through psychiatric care, psychological interventions, counselling and rehabilitation services.
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

            {/* Right Facility Asset */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-[32px] overflow-hidden bg-savelix-lavender aspect-[4/3]">
                <img
                  src={`${import.meta.env.BASE_URL}assets/about-clinic.jpg`}
                  alt="Savelix Psychiatric Clinic and Rehabilitation Centre"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Principles: 3 Open Columns on Crisp White Ground */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Approach */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-savelix-plum tracking-tight">
                Our <span className="font-serif italic font-normal text-savelix-purple">approach</span>
              </h2>
              <p className="text-base sm:text-lg text-savelix-plum/90 leading-relaxed max-w-[45ch]">
                Mental health difficulties can affect thoughts, emotions, behaviour, relationships, education, employment and everyday activities. Care considers the whole person rather than focusing only on symptoms.
              </p>
            </div>

            {/* Care Journey */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-savelix-plum tracking-tight">
                Care <span className="font-serif italic font-normal text-savelix-purple">journey</span>
              </h2>
              <p className="text-base sm:text-lg text-savelix-plum/90 leading-relaxed max-w-[45ch]">
                Services support different stages of the mental health journey, from early identification and outpatient consultation to inpatient care, rehabilitation and continued recovery support.
              </p>
            </div>

            {/* Family Involvement */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-savelix-plum tracking-tight">
                Family <span className="font-serif italic font-normal text-savelix-purple">involvement</span>
              </h2>
              <p className="text-base sm:text-lg text-savelix-plum/90 leading-relaxed max-w-[45ch]">
                Family involvement is encouraged where appropriate, with consideration for the individual&apos;s privacy, consent and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission: Deep Plum & Lavender Editorial Pair */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Vision: Deep Plum Stately Box */}
            <div className="lg:col-span-5 bg-savelix-plum text-white rounded-[32px] p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Our <span className="font-serif italic font-normal text-savelix-lavender">Vision</span>
                </h2>
                <blockquote className="text-xl sm:text-2xl text-savelix-lavender leading-relaxed font-serif italic pt-2">
                  &ldquo;To promote accessible, compassionate and professional mental healthcare that supports recovery, resilience, independence and improved quality of life.&rdquo;
                </blockquote>
              </div>
              <div className="pt-6">
                <span className="text-sm text-savelix-lavender/80 font-medium">
                  Savelix Psychiatric Clinic &amp; Rehabilitation Centre
                </span>
              </div>
            </div>

            {/* Mission: Open List on Warm Lavender Canvas */}
            <div className="lg:col-span-7 bg-savelix-lavender/70 rounded-[32px] p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-savelix-plum tracking-tight">
                  Our <span className="font-serif italic font-normal text-savelix-purple">Mission</span>
                </h2>

                <ul className="space-y-4 pt-2">
                  {missionPoints.map((point, idx) => (
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
        </div>
      </section>

      {/* Core Values: Open Typographic Manifesto */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-savelix-plum tracking-tight">
              Core <span className="font-serif italic font-normal text-savelix-purple">Values</span>
            </h2>
            <p className="text-base sm:text-lg text-savelix-plum/80 leading-relaxed">
              Foundational principles that guide every aspect of care, interaction, and clinical rehabilitation at Savelix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {coreValues.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-savelix-plum tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base text-savelix-plum/80 leading-relaxed">
                  {item.desc}
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
