import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { CheckCircle2, Calendar, Compass, ShieldCheck } from 'lucide-react';

/**
 * SAVELIX Home View (Stage 2 Shell Verification)
 *
 * Confirms Stage 2 navigation shell and brand identity readiness.
 * Strict adherence: Hero scroll choreography and section teasers are held
 * for Stage 3 & Stage 4 per the approved implementation sequence.
 */
export default function HomeStage2() {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <div className="bg-white border border-savelix-border rounded-2xl p-8 sm:p-12 shadow-sm">
        {/* Stage Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-savelix-lavender text-savelix-purple mb-6">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Stage 2: Navigation Shell &amp; Brand Identity Verified</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-savelix-plum tracking-tight mb-3">
          SAVELIX PSYCHIATRIC CLINIC &amp; REHABILITATION CENTRE
        </h1>

        <p className="text-base sm:text-lg font-medium text-savelix-purple mb-4">
          Empowering Mental Health and Emotional Well-being
        </p>

        <p className="text-sm text-savelix-grey leading-relaxed max-w-2xl mx-auto mb-8">
          The reusable website navigation shell, official brand logo, responsive desktop dropdown, mobile drawer, accessible appointment modal, and dark plum clinical footer are fully established and operational.
        </p>

        {/* Verification Checklist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left my-8">
          <div className="p-4 rounded-xl bg-savelix-lilac/70 border border-savelix-border">
            <div className="w-8 h-8 rounded-lg bg-savelix-lavender flex items-center justify-center text-savelix-purple mb-2">
              <Compass className="w-4 h-4" />
            </div>
            <h2 className="text-xs font-bold text-savelix-plum mb-1">
              Responsive Navigation
            </h2>
            <p className="text-xs text-savelix-grey leading-relaxed">
              Desktop navigation with services dropdown, active states, and mobile sliding drawer with accordion.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-savelix-lilac/70 border border-savelix-border">
            <div className="w-8 h-8 rounded-lg bg-savelix-lavender flex items-center justify-center text-savelix-purple mb-2">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="text-xs font-bold text-savelix-plum mb-1">
              Official Brand Identity
            </h2>
            <p className="text-xs text-savelix-grey leading-relaxed">
              Official floral emblem logo, calibrated proportions, and verified SAVELIX colour tokens.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-savelix-lilac/70 border border-savelix-border">
            <div className="w-8 h-8 rounded-lg bg-savelix-lavender flex items-center justify-center text-savelix-purple mb-2">
              <Calendar className="w-4 h-4" />
            </div>
            <h2 className="text-xs font-bold text-savelix-plum mb-1">
              Accessible CTA Modal
            </h2>
            <p className="text-xs text-savelix-grey leading-relaxed">
              Interactive appointment booking dialog with keyboard focus trap and polite user confirmation.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-savelix-border">
          {onOpenAppointmentModal && (
            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Test Appointment Modal</span>
            </button>
          )}

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-savelix-lavender hover:bg-savelix-lavender-light text-savelix-plum text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple"
          >
            <span>Explore Services Navigation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
