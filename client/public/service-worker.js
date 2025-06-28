self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open('travelx-cache').then((cache) => {
      console.log('[Service Worker] Caching app shell');
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        // add static files, images, css etc if needed
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== 'travelx-cache') {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
