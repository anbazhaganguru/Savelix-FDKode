/**
 * SAVELIX Service Worker (Foundation Stage 1)
 *
 * Safe registration placeholder. Full caching, precache manifests,
 * and offline route fallbacks are reserved for Stage 6 per project plan.
 */

self.addEventListener('install', () => {
  // Activate worker immediately once installed
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claim active clients to ensure current pages are controlled
  event.waitUntil(self.clients.claim());
});

// Fetch listener placeholder for offline asset interception in Stage 6
self.addEventListener('fetch', () => {
  // Pass-through in Stage 1 foundation
  return;
});
