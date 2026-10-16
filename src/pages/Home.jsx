import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/home/Hero';
import AboutTeaser from '../components/home/AboutTeaser';
import ServicesOverview from '../components/home/ServicesOverview';
import ConditionsTeaser from '../components/home/ConditionsTeaser';
import RehabilitationTeaser from '../components/home/RehabilitationTeaser';
import WhySavelixTeaser from '../components/home/WhySavelixTeaser';
import EducationTeaser from '../components/home/EducationTeaser';
import FinalCta from '../components/home/FinalCta';

/**
 * SAVELIX Homepage — Stage 4: Approved Homepage Teaser Sections
 *
 * Sequence locked per SAVELIX Website Content & Structure Plan (Page 15):
 * 01. Hero (Section 01)
 * 02. About SAVELIX Teaser (Section 02)
 * 03. Services Overview (Section 03)
 * 04. Conditions We Support Teaser (Section 04)
 * 05. Rehabilitation & Recovery Teaser (Section 05)
 * 06. Why Savelix Teaser (Section 06)
 * 07. Education & Internship Teaser (Section 07)
 * 08. Final Call to Action (Section 08)
 * (09. Footer is housed in the persistent Layout shell)
 *
 * Design Language:
 * - Balancia reference-led visual hierarchy, card radiuses, and typography.
 * - Baskervville serif italic accents on key heading keywords.
 * - SAVELIX official colour tokens (#F7F3FA, #EDE5F4, #8065A8, #302B50, #666477, #E4DCEB).
 * - Zero unverified content inventions, testimonials, or claims.
 */
export default function Home() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  return (
    <div className="w-full">
      {/* 01. Hero Section */}
      <Hero onOpenAppointmentModal={onOpenAppointmentModal} />

      {/* 02. About SAVELIX Teaser */}
      <AboutTeaser />

      {/* 03. Services Overview */}
      <ServicesOverview />

      {/* 04. Conditions We Support Teaser */}
      <ConditionsTeaser />

      {/* 05. Rehabilitation & Recovery Teaser */}
      <RehabilitationTeaser />

      {/* 06. Why Savelix Teaser */}
      <WhySavelixTeaser />

      {/* 07. Education & Internship Teaser */}
      <EducationTeaser />

      {/* 08. Final Call to Action */}
      <FinalCta onOpenAppointmentModal={onOpenAppointmentModal} />
    </div>
  );
}
