// The cache's name will be our app's name
const cacheName = 'todo-list';

// Files that must load to be operational
const staticAssets = [
  './',
  './js/app.js',
  './css/main.css',
  './css/reset.css'
];

// Cache the main files on install
self.addEventListener('install', async function () {
  const cache = await caches.open(cacheName);
  cache.addAll(staticAssets);
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  //const url = new URL(request.url);
  //if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  //} else {
  // event.respondWith(networkFirst(request));
  //}
});


async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  return cachedResponse || fetch(request);
}

// async function networkFirst(request) {
//   const dynamicCache = await caches.open('news-dynamic');
//   try {
//     const networkResponse = await fetch(request);
//     dynamicCache.put(request, networkResponse.clone());
//     return networkResponse;
//   } catch (err) {
//     const cachedResponse = await dynamicCache.match(request);
//     return cachedResponse || await caches.match('./fallback.json');
//   }
// }


//
//
// self.addEventListener('activate', (event) => {
//   event.waitUntil(self.clients.claim());
// });
//
//
//
