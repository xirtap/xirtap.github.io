const staticCacheName = 'site-static-v1';
const assets = [
  'me.html',
  'U2FsdGVkX19qS0yZfjF1fgNP2d1zbgYc.html',
  'js/patrick.js',
  'css/style.css',
  'img/mic.png',
  'https://fonts.googleapis.com/css?family=Noto+Serif',
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