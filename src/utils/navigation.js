/**
 * In-App Navigation State Tracker
 *
 * Tracks internal client-side navigation within the SAVELIX website.
 * Prevents accidental external website exits, preserves browser history on internal navigation,
 * and falls back safely to sensible parent routes on direct entry.
 */

let internalNavigationCount = 0;

/**
 * Increment the internal navigation counter.
 * Called when a user navigates between routes inside the application.
 */
export function recordNavigation() {
  internalNavigationCount += 1;
}

/**
 * Retrieve the current count of internal navigations.
 */
export function getInternalNavigationCount() {
  return internalNavigationCount;
}

/**
 * Reset internal navigation counter (primarily used in testing).
 */
export function resetNavigationCountForTesting() {
  internalNavigationCount = 0;
}

/**
 * Checks whether a valid in-app history entry exists to navigate back to.
 *
 * Conditions for valid in-app history:
 * 1. React Router sets `window.history.state.idx` starting at 0 on initial document mount
 *    and increments it for every in-app push navigation. An `idx > 0` strictly guarantees
 *    that the previous entry in browser history was pushed by this React Router instance.
 * 2. Alternatively, our in-memory `internalNavigationCount > 0` confirms that client-side
 *    navigation has occurred within the current session.
 *
 * On a fresh tab, external link, or bookmark:
 * - `window.history.state.idx` is 0 (or null)
 * - `internalNavigationCount` is 0
 * This prevents `navigate(-1)` from accidentally leaving the website to an external URL.
 */
export function hasInAppHistory() {
  if (typeof window === 'undefined') return false;

  const historyIdx = window.history?.state?.idx;

  // React Router v6 & v7 internal history stack indicator
  // idx === 0 strictly indicates initial session entry (fresh tab, direct link, or bookmark).
  // idx > 0 guarantees a preceding in-app entry exists within this React Router instance.
  if (typeof historyIdx === 'number') {
    return historyIdx > 0;
  }

  // Fallback check against in-memory navigation counter if history.state.idx is unavailable
  return internalNavigationCount > 0;
}

/**
 * Resolves the sensible parent fallback route for a given pathname.
 * - Service detail pages (/services/*) -> /services
 * - Other inner pages -> /
 */
export function getSensibleFallback(pathname) {
  if (!pathname || typeof pathname !== 'string') {
    return '/';
  }

  const cleanPath = pathname.replace(/\/+$/, '') || '/';

  // Service detail routes (/services/psychiatric-care, etc.) fall back to /services
  if (cleanPath.startsWith('/services/') && cleanPath !== '/services') {
    return '/services';
  }

  // All other inner routes fall back to /
  return '/';
}
