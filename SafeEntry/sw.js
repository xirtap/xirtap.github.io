const staticCacheName = 'site-static-v1';
const assets = [
  'a.html',
  'js/patrick.js',
  'css/style.css',
  'https://www.w3schools.com/w3css/4/w3.css',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/gsap.min.js',
];
// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});