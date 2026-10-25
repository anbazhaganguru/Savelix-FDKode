import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AppointmentModal from '../ui/AppointmentModal';
import ScrollToTop from '../common/ScrollToTop';
import MotionOrchestrator from '../common/MotionOrchestrator';
import SmoothScrollProvider from '../../context/SmoothScrollProvider';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

/**
 * SAVELIX Shared Layout Shell
 *
 * Provides the persistent shell across all application routes:
 * - Responsive Navbar with official branding and accessible dropdown
 * - Page content container (Outlet)
 * - Branded clinical Footer
 * - Accessible Appointment / Enquiry Modal
 * - Automatic Scroll-to-Top on route change
 * - Lenis Smooth Scrolling Engine synchronized with GSAP ScrollTrigger
 */
export default function Layout() {
  return (
    <SmoothScrollProvider>
      <LayoutContent />
    </SmoothScrollProvider>
  );
}

function LayoutContent() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const smoothScroll = useSmoothScroll();

  useEffect(() => {
    if (isAppointmentModalOpen) {
      smoothScroll?.stop();
    } else {
      smoothScroll?.start();
    }
  }, [isAppointmentModalOpen, smoothScroll]);

  const handleOpenAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-savelix-lilac text-savelix-plum antialiased selection:bg-savelix-lavender selection:text-savelix-plum">
      <ScrollToTop />
      <MotionOrchestrator />

      {/* Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-savelix-purple focus:text-white focus:rounded-full focus:outline-none focus:ring-2 focus:ring-white text-sm font-semibold"
      >
        Skip to main content
      </a>

      {/* Global Clinical Navigation */}
      <Navbar onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Primary Page Canvas */}
      <main className="flex-1 w-full" id="main-content">
        <Outlet context={{ onOpenAppointmentModal: handleOpenAppointmentModal }} />
      </main>

      {/* Persistent Brand Footer */}
      <Footer onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Accessible Appointment Booking Dialog */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
      />
    </div>
  );
}
