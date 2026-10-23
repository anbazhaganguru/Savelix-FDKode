import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { hasInAppHistory, getSensibleFallback } from '../../utils/navigation';

/**
 * SAVELIX Smart Back Navigation Button
 *
 * Provides consistent, accessible, and functional Back navigation across all inner pages:
 * 1. Returns user to the actual previous in-app page via `navigate(-1)` when a valid in-app
 *    history entry exists.
 * 2. On direct entry (bookmark, external link, fresh tab) with no usable in-app history,
 *    navigates to a sensible parent route:
 *    - Service detail pages -> `/services`
 *    - Other inner pages -> `/`
 * 3. Prevents Back navigation from leaving the website to an unrelated external website.
 * 4. Preserves browser Back and Forward history synchronization.
 * 5. Accessible with visible label, left-arrow icon, keyboard support, and clear focus states.
 *
 * @param {Object} props
 * @param {string} [props.fallback] - Custom parent fallback route if no in-app history exists.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {string} [props.label='Back'] - Visible button label.
 */
export default function BackButton({ fallback, className = '', label = 'Back' }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // Determine sensible parent fallback if not explicitly provided
    const targetFallback = fallback || getSensibleFallback(location.pathname);

    if (hasInAppHistory()) {
      navigate(-1);
    } else {
      // Use replace on direct entry so fallback becomes root/parent without creating loop
      navigate(targetFallback, { replace: true });
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label="Go back to previous page"
      className={`group inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-pill bg-white hover:bg-savelix-lavender text-savelix-plum hover:text-savelix-purple text-xs sm:text-sm font-semibold border border-savelix-border shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savelix-purple focus-visible:ring-offset-2 select-none cursor-pointer ${className}`}
    >
      <ArrowLeft
        className="w-4 h-4 text-savelix-purple transition-transform duration-200 group-hover:-translate-x-0.5"
        aria-hidden="true"
      />
      <span>{label}</span>
    </button>
  );
}
