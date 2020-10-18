const staticCacheName = 'site-static-v1';
const assets = [
  'index.html',
  'Build/UnityLoader.js',
  'Build/WEBGL.data.unityweb',
  'Build/WEBGL.json',
  'Build/WEBGL.wasm.code.unityweb',
  'Build/WEBGL.wasm.framework.unityweb', 
  'TemplateData/responsive.javascript',   
  'TemplateData/UnityProgress.javascript',   
  'TemplateData/style.css',     
  'css/style.css',
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