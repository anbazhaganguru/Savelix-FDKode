import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ArrowLeft, Calendar, FileText, CheckCircle2 } from 'lucide-react';

/**
 * StageRoutePlaceholder
 *
 * Dedicated route handler for approved inner pages during Stage 2.
 * Strictly adheres to source copy from SAVELIX Website Content & Structure Plan.
 * Provides intentional destination feedback without inventing unapproved content.
 */
export default function StageRoutePlaceholder({
  title,
  subtitle,
  scopeDetails = [],
  sectionCode = '',
}) {
  const { onOpenAppointmentModal } = useOutletContext() || {};

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-xs text-savelix-grey">
          <li>
            <Link
              to="/"
              className="hover:text-savelix-purple transition-colors focus-visible:underline"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-savelix-plum font-semibold" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>

      {/* Content Header Card */}
      <div className="bg-white border border-savelix-border rounded-2xl p-6 sm:p-10 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-savelix-lavender text-savelix-purple">
            <FileText className="w-3.5 h-3.5" />
            <span>Approved Structure Plan {sectionCode && `• ${sectionCode}`}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 text-xs text-savelix-grey">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Navigation Route Verified</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-savelix-plum tracking-tight mb-3">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm sm:text-base text-savelix-grey leading-relaxed mb-6 font-normal">
            {subtitle}
          </p>
        )}

        {/* Scope Details from Source Document */}
        {scopeDetails.length > 0 && (
          <div className="mt-6 pt-6 border-t border-savelix-border/70">
            <h2 className="text-xs font-bold uppercase tracking-wider text-savelix-purple mb-4">
              Clinical &amp; Service Scope (Source-Backed)
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-savelix-plum">
              {scopeDetails.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-savelix-lilac/50 border border-savelix-border/40"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-savelix-purple mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Controls */}
        <div className="mt-8 pt-6 border-t border-savelix-border/70 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-savelix-purple hover:text-savelix-purple-hover transition-colors focus-visible:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          {onOpenAppointmentModal && (
            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-savelix-purple hover:bg-savelix-purple-hover text-white text-xs font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>
          )}
        </div>
      </div>

      {/* Stage Notice */}
      <div className="mt-6 p-4 rounded-xl bg-savelix-lavender/40 border border-savelix-border/50 text-center">
        <p className="text-xs text-savelix-grey">
          <strong className="text-savelix-plum">Stage 2 Status:</strong> Navigation shell and brand identity established. Full detailed editorial layout for this page is scheduled for Stage 5.
        </p>
      </div>
    </div>
  );
}
