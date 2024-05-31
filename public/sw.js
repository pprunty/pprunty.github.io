const CACHE_NAME = 'my-nextjs-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/images/favicon.ico',
  '/consultations',
  '/photography',
  '/videos',
  '/project/jigsaw-academy',
  '/project/jigsaw-presents',
  // Add other static assets and routes to cache
  '/blog/ambient-writing',
  '/blog/daydream',
  '/blog/discovering',
  '/blog/page/1',
  '/blog/page/2',
  '/blog/page/3',
  // Add more blog pages and other dynamic routes as necessary
];

// Cache static assets during the install phase
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Clean up old caches during the activate phase
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch handler to serve cached content
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    }).catch(() => {
      return caches.match('/');
    })
  );
});
