import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import BackButton from '../../components/common/BackButton';
import {
  ShieldCheck,
  Calendar,
  ArrowRight,
  Sparkles,
  Wind,
  AlertTriangle,
  Pill,
  Eye,
  Flame,
  Users,
  FileCheck,
  CheckCircle2,
  Lock,
} from 'lucide-react';

/**
 * PAGE D — INPATIENT ENVIRONMENT & SAFETY MONITORING
 * Source: SAVELIX Website Content & Structure Plan (Pages 2, 4, 8, 14, 15)
 *
 * Visual Presentation:
 * - Editorial clinical safeguards & infection control layout.
 * - Baskervville serif italic heading accents and structured protocol stream.
 * - Deep plum safety principles statement block preserving patient dignity.
 * - All visible text is strictly verbatim from the approved Content Document.
 */
export default function InpatientSafetyMonitoring() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  const safetyDetails = [
    {
      num: '01',
      text: 'Routine cleanliness, hygiene and safety checks',
      icon: Sparkles,
      category: 'Environmental Hygiene',
    },
    {
      num: '02',
      text: 'Hand hygiene, appropriate personal protective equipment and safe waste disposal',
      icon: ShieldCheck,
      category: 'Infection Prevention',
    },
    {
      num: '03',
      text: 'Monitoring ventilation, lighting, temperature and sanitation',
      icon: Wind,
      category: 'Facility Standards',
    },
    {
      num: '04',
      text: 'Identifying hazards such as falls, fire risks, unsafe equipment, overcrowding and restricted access areas',
      icon: AlertTriangle,
      category: 'Hazard Mitigation',
    },
    {
      num: '05',
      text: 'Safe medicine storage, handling and administration',
      icon: Pill,
      category: 'Medication Safety',
    },
    {
      num: '06',
      text: 'Patient-safety monitoring',
      icon: Eye,
      category: 'Clinical Surveillance',
    },
    {
      num: '07',
      text: 'Emergency procedures and incident reporting',
      icon: Flame,
      category: 'Emergency Preparedness',
    },
    {
      num: '08',
      text: 'Staff training',
      icon: Users,
      category: 'Staff Education',
    },
    {
      num: '09',
      text: 'Documentation and continuous review',
      icon: FileCheck,
      category: 'Clinical Documentation',
    },
    {
      num: '10',
      text: 'Coordination with families and relevant services when required',
      icon: CheckCircle2,
      category: 'Family Coordination',
    },
  ];

  return (
    <div className="w-full bg-savelix-lilac min-h-screen">
      {/* Top Utility Bar: Smart Back & Breadcrumbs */}
      <div className="border-b border-savelix-border/60 bg-white/60 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <BackButton fallback="/services" />
              <span className="hidden sm:inline-block h-4 w-px bg-savelix-border" aria-hidden="true" />
              <nav aria-label="Breadcrumb" className="hidden sm:block">
                <ol className="flex items-center space-x-2 text-xs text-savelix-grey">
                  <li>
                    <Link to="/" className="hover:text-savelix-purple transition-colors focus-visible:underline">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link to="/services" className="hover:text-savelix-purple transition-colors focus-visible:underline">
                      Services
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-savelix-plum font-semibold" aria-current="page">
                    Inpatient Safety Monitoring
                  </li>
                </ol>
              </nav>
            </div>
            <span className="text-[11px] font-semibold text-savelix-purple uppercase tracking-wider hidden md:inline-block">
              Clinical Safeguards &amp; Hygiene
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Service Hero */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-savelix-lavender text-savelix-plum text-xs font-semibold tracking-wider uppercase border border-savelix-border/70">
              <ShieldCheck className="w-3.5 h-3.5 text-savelix-purple" />
              <span>SAVELIX Services</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-savelix-plum tracking-tight leading-[1.15]">
              Inpatient Environment &amp;{' '}
              <span className="font-serif italic font-normal text-savelix-purple">Safety</span> Monitoring
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-savelix-grey leading-relaxed font-normal">
              A safe, supportive and structured rehabilitation environment, with infection prevention and control measures, environmental safety checks and regular monitoring to protect patients, families, visitors and staff.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {onOpenAppointmentModal && (
                <button
                  type="button"
                  onClick={onOpenAppointmentModal}
                  className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white/90" />
                  <span>Book an Appointment</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </button>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-xs sm:text-sm font-medium border border-savelix-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-savelix-purple" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Monitoring Details: Structured Editorial Protocol Stream */}
      <section className="py-12 sm:py-16 bg-white border-y border-savelix-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-12 space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-savelix-purple">
              Protocols &amp; Safeguards
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-savelix-plum tracking-tight">
              Safety monitoring details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 divide-y md:divide-y-0 divide-savelix-border">
            {safetyDetails.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="py-6 border-b border-savelix-border/70 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-savelix-lavender text-savelix-purple flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-serif italic text-savelix-grey/60 font-semibold">
                        {item.num}
                      </span>
                      <span className="text-[10px] font-semibold text-savelix-purple bg-savelix-lavender px-2 py-0.5 rounded-full border border-savelix-border/60">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg text-savelix-plum font-semibold leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Principles: Deep Plum Reassurance Statement */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-savelix-plum text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-savelix-lavender text-xs font-semibold tracking-wider uppercase">
              <Lock className="w-3.5 h-3.5" />
              <span>Clinical Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Safety{' '}
              <span className="font-serif italic font-normal text-savelix-lavender">Principles</span>
            </h2>
            <p className="text-base sm:text-lg text-savelix-lavender/95 leading-relaxed font-normal pt-2 font-serif italic">
              &ldquo;Monitoring is routine and also occurs when a patient&apos;s condition, treatment needs or level of risk changes. Measures are implemented respectfully and proportionately while maintaining dignity, privacy, therapeutic engagement and applicable confidentiality requirements.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Service Navigation & Final CTA */}
      <section className="pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-savelix-lavender to-white p-8 sm:p-12 lg:p-14 border border-savelix-border shadow-savelix-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-savelix-purple">
              Next Service in Care Continuum
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-savelix-plum tracking-tight">
              Take the First Step Towards Better Mental Health
            </h3>
            <p className="text-sm sm:text-base text-savelix-grey leading-relaxed pt-1">
              Your mental health matters. Savelix provides compassionate psychiatric care, professional psychological counselling and personalised rehabilitation support for individuals and families.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 flex-shrink-0 w-full sm:w-auto">
            {onOpenAppointmentModal && (
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple cursor-pointer"
              >
                Book an Appointment
              </button>
            )}
            <Link
              to="/services/psychiatric-care"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum text-xs sm:text-sm font-medium border border-savelix-border transition-colors"
            >
              <span>Psychiatric Care</span>
              <ArrowRight className="w-3.5 h-3.5 text-savelix-purple" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
