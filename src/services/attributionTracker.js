/**
 * SAVELIX Public Website — Lead Source Attribution Tracker
 * 
 * Captures marketing attribution parameters (UTMs and referrers) upon landing,
 * and preserves them in sessionStorage across internal page navigation so that
 * when a user navigates from the landing page to /services or /contact, the
 * campaign attribution is not lost.
 * 
 * Also applies intelligent domain heuristics for major platforms:
 * - Instagram (l.instagram.com, instagram.com) -> 'instagram'
 * - YouTube (youtube.com, youtu.be) -> 'youtube'
 * - WhatsApp (web.whatsapp.com, api.whatsapp.com) -> 'whatsapp'
 * - Google (google.com, google.co.in, etc.) -> 'google'
 * - Facebook (facebook.com, m.facebook.com, l.facebook.com) -> 'facebook'
 * - LinkedIn (linkedin.com, lnkd.in) -> 'linkedin'
 */

export const ATTRIBUTION_STORAGE_KEY = 'savelix_utm_attribution';

/**
 * Maps external referrer domains to standardized source channels.
 * @param {string} referrerUrl
 * @returns {string|undefined}
 */
export function mapReferrerToSource(referrerUrl) {
  if (!referrerUrl || typeof referrerUrl !== 'string') return undefined;

  try {
    const parsed = new URL(referrerUrl);
    const host = parsed.hostname.toLowerCase();

    // Internal domain check (ignore self-referrals)
    if (typeof window !== 'undefined' && host === window.location.hostname.toLowerCase()) {
      return undefined;
    }

    if (host.includes('instagram.com')) return 'instagram';
    if (host.includes('youtube.com') || host.includes('youtu.be')) return 'youtube';
    if (host.includes('whatsapp')) return 'whatsapp';
    if (host.includes('facebook.com') || host.includes('fb.com') || host.includes('m.facebook.com')) return 'facebook';
    if (host.includes('google.')) return 'google';
    if (host.includes('linkedin.com') || host.includes('lnkd.in')) return 'linkedin';
    if (host.includes('twitter.com') || host.includes('t.co') || host.includes('x.com')) return 'twitter_x';
  } catch {
    // If not a valid full URL, inspect as plain string
    const lower = referrerUrl.toLowerCase();
    if (lower.includes('instagram')) return 'instagram';
    if (lower.includes('youtube')) return 'youtube';
    if (lower.includes('whatsapp')) return 'whatsapp';
    if (lower.includes('facebook')) return 'facebook';
    if (lower.includes('google')) return 'google';
  }

  return undefined;
}

/**
 * Captures attribution from the current URL or referrer and saves to sessionStorage.
 */
export function initAttributionTracker() {
  if (typeof window === 'undefined') return;

  try {
    let stored = {};
    const existing = window.sessionStorage?.getItem(ATTRIBUTION_STORAGE_KEY);
    if (existing) {
      try {
        stored = JSON.parse(existing) || {};
      } catch {
        stored = {};
      }
    }

    const search = window.location.search;
    let urlHasUtm = false;

    if (search) {
      const params = new URLSearchParams(search);
      const utmSource = params.get('utm_source')?.trim();
      const utmMedium = params.get('utm_medium')?.trim();
      const utmCampaign = params.get('utm_campaign')?.trim();
      const utmContent = params.get('utm_content')?.trim();
      const utmTerm = params.get('utm_term')?.trim();

      if (utmSource || utmMedium || utmCampaign || utmContent || utmTerm) {
        urlHasUtm = true;
        if (utmSource) stored.utm_source = utmSource.slice(0, 100);
        if (utmMedium) stored.utm_medium = utmMedium.slice(0, 100);
        if (utmCampaign) stored.utm_campaign = utmCampaign.slice(0, 150);
        if (utmContent) stored.utm_content = utmContent.slice(0, 150);
        if (utmTerm) stored.utm_term = utmTerm.slice(0, 150);
      }
    }

    // Capture referrer if available
    const referrer = typeof document !== 'undefined' ? document.referrer : undefined;
    if (referrer && !stored.referrer) {
      stored.referrer = referrer.slice(0, 500);

      // If no explicit UTM source was provided, apply domain heuristic fallback
      if (!stored.utm_source && !urlHasUtm) {
        const detected = mapReferrerToSource(referrer);
        if (detected) {
          stored.utm_source = detected;
          if (!stored.utm_medium) {
            stored.utm_medium = 'organic_referral';
          }
        }
      }
    }

    // Persist updated attribution
    if (Object.keys(stored).length > 0 && window.sessionStorage) {
      window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(stored));
    }
  } catch {
    // Fail-safe: Never disrupt user browsing on storage errors
  }
}

/**
 * Retrieves the active marketing attribution payload.
 * Reads from sessionStorage first, falls back to current URL or direct referrer.
 * @returns {object}
 */
export function getAttribution() {
  const result = {
    source_page: undefined,
    referrer: undefined,
    utm_source: undefined,
    utm_medium: undefined,
    utm_campaign: undefined,
    utm_content: undefined,
    utm_term: undefined
  };

  if (typeof window === 'undefined') return result;

  try {
    // 1. Current page pathname
    if (window.location.pathname) {
      result.source_page = window.location.pathname.slice(0, 255);
    }

    // 2. Read persisted session storage
    let stored = {};
    const existing = window.sessionStorage?.getItem(ATTRIBUTION_STORAGE_KEY);
    if (existing) {
      try {
        stored = JSON.parse(existing) || {};
      } catch {
        stored = {};
      }
    }

    // 3. Current URL params (overrides if present)
    const search = window.location.search;
    let urlParams = null;
    if (search) {
      urlParams = new URLSearchParams(search);
    }

    result.utm_source =
      urlParams?.get('utm_source')?.slice(0, 100) ||
      stored.utm_source ||
      undefined;

    result.utm_medium =
      urlParams?.get('utm_medium')?.slice(0, 100) ||
      stored.utm_medium ||
      undefined;

    result.utm_campaign =
      urlParams?.get('utm_campaign')?.slice(0, 150) ||
      stored.utm_campaign ||
      undefined;

    result.utm_content =
      urlParams?.get('utm_content')?.slice(0, 150) ||
      stored.utm_content ||
      undefined;

    result.utm_term =
      urlParams?.get('utm_term')?.slice(0, 150) ||
      stored.utm_term ||
      undefined;

    // 4. Referrer (stored or current)
    result.referrer = stored.referrer || (typeof document !== 'undefined' && document.referrer ? document.referrer.slice(0, 500) : undefined);

    // 5. Fallback: If still no utm_source, try mapping current referrer
    if (!result.utm_source && result.referrer) {
      const detected = mapReferrerToSource(result.referrer);
      if (detected) {
        result.utm_source = detected;
        if (!result.utm_medium) {
          result.utm_medium = 'organic_referral';
        }
      }
    }
  } catch {
    // Fail-safe
  }

  return result;
}

// Auto-initialize immediately on module evaluation in browser
if (typeof window !== 'undefined') {
  initAttributionTracker();
}
