import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import Logo from '../ui/Logo';
import { MAIN_NAV_ITEMS, SERVICES_NAV_ITEMS } from '../../config/navigation';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * SAVELIX Website Footer
 *
 * Implements:
 * - Deep Plum background (#302B50) per Page 3 of UI Design System
 * - High-contrast White typography for headings and Soft Lavender for supporting copy
 * - Approved navigation links and verified clinic wording
 * - Strict Content Rule adherence: Zero fabricated phone numbers, addresses, or fake email
 * - Interactive appointment CTA linking to accessible modal
 */
export default function Footer({ onOpenAppointmentModal }) {
  // Filter main nav for quick links (excluding Services dropdown, handled separately)
  const quickLinks = MAIN_NAV_ITEMS.filter((item) => !item.isDropdown);
  const clinicalServices = SERVICES_NAV_ITEMS.filter((item) => item.path !== '/services');

  return (
    <footer className="bg-savelix-plum text-white">
      {/* Upper CTA Banner Section */}
      <div className="bg-black/15 py-12">
        <div className="savelix-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
              Take the First Step Towards Better Mental Health
            </h2>
            <p className="text-sm sm:text-base text-savelix-lavender leading-relaxed">
              Compassionate psychiatric care, professional psychological counselling, and personalised rehabilitation support for individuals and families.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contact Clinic
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Directory Columns */}
      <div className="savelix-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="dark-bg" size="sm" />

            <div className="pt-2">
              <p className="text-sm font-semibold text-white tracking-wide uppercase">
                SAVELIX PSYCHIATRIC CLINIC &amp; REHABILITATION CENTRE
              </p>
              <p className="text-sm text-savelix-lavender font-medium mt-1">
                Empowering Mental Health and Emotional Well-being
              </p>
            </div>

            <p className="text-sm text-savelix-lavender/90 leading-relaxed max-w-md pt-1">
              Providing compassionate, professional, and evidence-informed mental healthcare through psychiatric evaluation, psychological counselling, individualised treatment planning, and rehabilitation support.
            </p>

            <div className="flex items-center gap-5 pt-3 text-sm text-savelix-lavender/85">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-savelix-lavender" />
                Ethical &amp; Confidential Care
              </span>
              <span className="inline-flex items-center gap-2">
                <Heart className="w-4 h-4 text-savelix-lavender" />
                Person-Centred Recovery
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-base font-semibold text-white">
              Clinic Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-savelix-lavender hover:text-white transition-colors focus-visible:outline-none focus-visible:underline inline-block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Services Column */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-base font-semibold text-white">
              Clinical Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-sm">
              {clinicalServices.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-savelix-lavender hover:text-white transition-colors focus-visible:outline-none focus-visible:underline inline-block py-0.5"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Clinical Disclaimer & Ethical Notice */}
        <div className="mt-14 pt-8 bg-black/10 p-6 rounded-2xl text-sm text-savelix-lavender/80 leading-relaxed">
          <p>
            <strong className="text-white font-medium">Care Principle:</strong> Mental health difficulties can affect thoughts, emotions, behaviour, relationships, and everyday activities. SAVELIX care considers the whole person rather than focusing only on symptoms. Individualised treatment plans and rehabilitation goals are formulated in accordance with clinical assessment, patient consent, and applicable professional standards.
          </p>
        </div>

        {/* Sub-footer Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-savelix-lavender/70 gap-4">
          <p>
            &copy; {CURRENT_YEAR} SAVELIX Psychiatric Clinic &amp; Rehabilitation Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/about"
              className="hover:text-white transition-colors focus-visible:underline"
            >
              About Clinic
            </Link>
            <span>&bull;</span>
            <Link
              to="/contact"
              className="hover:text-white transition-colors focus-visible:underline"
            >
              Enquiries &amp; Consultations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
