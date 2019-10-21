
// triggered by the browser
self.addEventListener('install', function (event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
});


// triggered by the app
self.addEventListener('fetch', function (event) {
    console.log('[Service Worker] Fetching ...', event);
    event.respondWith(fetch(event.request));
});
