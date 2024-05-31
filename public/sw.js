const CACHE_NAME = 'my-nextjs-pwa-cache-v2';
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
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }).catch((error) => {
      console.error('Caching failed during install:', error);
    })
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
    }).then(() => {
      return self.clients.claim();
    }).catch((error) => {
      console.error('Activation failed:', error);
    })
  );
});

// Fetch handler to serve cached content
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).then((fetchResponse) => {
        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
          return fetchResponse;
        }
        const responseToCache = fetchResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        }).catch((error) => {
          console.error('Caching failed during fetch:', error);
        });
        return fetchResponse;
      });
    }).catch(() => {
      // Fallback for offline use if both cache and network fail
      return caches.match('/');
    })
  );
});
