// ─────────────────────────────────────────────
//  TasteNote 🍷 Service Worker
// ─────────────────────────────────────────────

const CACHE = 'tastenote-v1';

// Files to cache immediately on install
const PRECACHE = [
  './',
  './index.html'
];

// External origins to cache when first fetched
const CACHE_ORIGINS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'www.gstatic.com'   // Firebase SDK CDN
];

// Never cache these — let Firebase / network handle them
const NEVER_CACHE = [
  'firestore.googleapis.com',
  'identitytoolkit.googleapis.com',
  'securetoken.googleapis.com',
  'firebase.googleapis.com',
  'firebasestorage.googleapis.com'
];

// ── Install ───────────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

// ── Activate ──────────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch ─────────────────────────────────────
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Always skip non-GET requests
  if (e.request.method !== 'GET') return;

  // Never cache Firebase API / auth calls
  if (NEVER_CACHE.some(h => url.hostname.includes(h))) return;

  // For the app shell and CDN assets — cache first, fall back to network
  if (
    url.origin === self.location.origin ||
    CACHE_ORIGINS.some(h => url.hostname.includes(h))
  ) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;

        return fetch(e.request)
          .then(response => {
            // Only cache valid responses
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }
            const clone = response.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
            return response;
          })
          .catch(() => {
            // If we're offline and it's the main page, return cached shell
            if (e.request.destination === 'document') {
              return caches.match('./index.html');
            }
          });
      })
    );
    return;
  }

  // Everything else — network only
});
