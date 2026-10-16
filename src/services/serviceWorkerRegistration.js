/**
 * Safe Service Worker Registration Strategy
 *
 * Implements resilient service worker lifecycle registration:
 * - Checks browser feature support ('serviceWorker' in navigator)
 * - Defers registration until the 'load' event to avoid competing for network bandwidth during initial page render
 * - Supports registration lifecycle callbacks (onSuccess, onUpdate)
 * - Safe error handling preventing any startup failures
 */

export function register(config = {}) {
  if (typeof window === 'undefined') return;

  if ('serviceWorker' in navigator) {
    // Only register in production or when explicitly enabled
    const isLocalhost = Boolean(
      window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
    );

    window.addEventListener('load', () => {
      const swUrl = `${import.meta.env.BASE_URL}sw.js`;

      if (isLocalhost && !import.meta.env.PROD) {
        // Safe check on localhost in dev: verify sw exists before registering
        checkValidServiceWorker(swUrl, config);
      } else {
        // Production registration
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) return;

        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New content is available but will be used once tabs are closed
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // Content is cached for offline use
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      // Safe fallback - log in development, do not crash application
      if (import.meta.env.DEV) {
        console.warn('Service worker registration note:', error);
      }
    });
}

function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, { headers: { 'Service-Worker': 'script' } })
    .then((response) => {
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No valid service worker found, unregister if existing
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister();
        });
      } else {
        // Valid service worker found, proceed with registration
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      // Offline or network error during check, safely proceed
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
