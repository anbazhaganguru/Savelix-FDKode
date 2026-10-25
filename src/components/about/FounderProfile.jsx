import React from 'react';
import { ArrowUpRight, Sparkles, HeartHandshake, Megaphone, ShieldCheck } from 'lucide-react';
import FounderPortrait from '../home/founder/FounderPortrait';

/**
 * FounderProfile Component for About Us Page
 *
 * Editorial art-direction:
 * - Two-column desktop layout featuring founder narrative and verified advocacy
 * - Reuses verified founder portrait with layered frame, code-based botanical decor, and custom nameplate
 * - Discrete, accessible link to public Instagram profile (@manasu_mukkiyam)
 * - Restrained typography and palette (Plum, Purple, Lavender, Lilac, White)
 * - Strict adherence to verified factual information without invented qualifications
 */
export default function FounderProfile() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Safe Space to Heal',
      desc: 'Creating an atmosphere of privacy, trust, and unconditional clinical empathy in Ambattur.',
    },
    {
      icon: Megaphone,
      title: 'Public Mental Health Advocacy',
      desc: 'Active community awareness and stigma reduction through the Manasu Mukkiyam initiative.',
    },
    {
      icon: HeartHandshake,
      title: 'Integrated Care Vision',
      desc: 'Uniting psychiatry, counselling, and rehabilitation for comprehensive whole-person recovery.',
    },
  ];

  return (
    <section
      id="founder-profile"
      aria-labelledby="founder-profile-heading"
      className="py-20 sm:py-28 lg:py-32 bg-savelix-lilac relative overflow-hidden border-t border-savelix-lavender/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 3xl:gap-24 items-center">
          {/* Left Column: Founder Narrative, Advocacy & Instagram Link */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-savelix-lavender/80 border border-savelix-purple/20 text-savelix-purple text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Founder &amp; Leadership</span>
            </div>

            {/* Section Heading */}
            <div className="space-y-3">
              <h2
                id="founder-profile-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-savelix-plum tracking-tight leading-[1.18]"
              >
                Founder&apos;s Vision &amp;{' '}
                <span className="font-serif italic font-normal text-savelix-purple">
                  Community Advocacy
                </span>
              </h2>
              <p className="text-base sm:text-lg font-medium text-savelix-purple">
                Guiding SAVELIX Psychiatric Clinic &amp; Rehabilitation Centre
              </p>
            </div>

            {/* Lead Principle Quote */}
            <blockquote className="text-lg sm:text-xl font-serif italic text-savelix-plum/90 leading-relaxed border-l-2 border-savelix-purple pl-4 py-1">
              &ldquo;Mental health is the foundation of human dignity, emotional resilience, and everyday well-being. Every individual deserves a safe, compassionate space to heal.&rdquo;
            </blockquote>

            {/* Factual, Verified Biographical Narrative */}
            <div className="space-y-4 text-base sm:text-lg text-savelix-plum/85 leading-relaxed">
              <p>
                As the Founder of SAVELIX Psychiatric Clinic and Rehabilitation Centre in Ambattur, Chennai, <strong className="font-semibold text-savelix-plum">Jayalakshmi</strong> established the centre with a steadfast commitment: to provide an accessible, compassionate, and confidential clinical environment where individuals and families can navigate mental health challenges with dignity and hope.
              </p>
              <p>
                Beyond clinic walls, she spearheads public mental health awareness through her community initiative, <strong className="font-semibold text-savelix-plum">Manasu Mukkiyam</strong> (&ldquo;Mind Matters&rdquo;). Through educational content and advocacy, she actively works to normalize conversations surrounding emotional well-being, stress management, and psychological support—encouraging individuals to seek timely care without fear or hesitation.
              </p>
              <p>
                Her leadership at Savelix brings psychiatric care, psychological counselling, and structured rehabilitation into a unified care model, ensuring that every person is supported with personalized treatment, family guidance, and continuous recovery support.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="space-y-2 p-4 rounded-2xl bg-white/70 border border-savelix-lavender">
                    <div className="w-8 h-8 rounded-lg bg-savelix-lavender flex items-center justify-center text-savelix-purple">
                      <IconComponent className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-bold text-savelix-plum">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-savelix-plum/75 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Public Instagram Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://www.instagram.com/manasu_mukkiyam/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white hover:bg-savelix-lavender text-savelix-plum border border-savelix-purple/20 text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple min-h-[48px]"
                aria-label="Follow Jayalakshmi on Instagram @manasu_mukkiyam (opens in a new tab)"
              >
                {/* Instagram Glyph */}
                <svg
                  className="w-5 h-5 text-savelix-purple transition-transform duration-200 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Follow on Instagram</span>
                <span className="text-xs text-savelix-purple/80 font-medium">@manasu_mukkiyam</span>
                <ArrowUpRight className="w-4 h-4 text-savelix-purple transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Founder Presentation with Layered Frame, Botanical Elements & Custom Nameplate */}
          <div className="lg:col-span-5 relative flex flex-col items-center pb-8 sm:pb-10 lg:pb-0">
            <FounderPortrait />
          </div>
        </div>
      </div>
    </section>
  );
}
