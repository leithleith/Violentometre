self.importScripts('script.js');
var cacheName = 'violentometre';
var appShellFiles = [
  'index.html',
  'vmetre.css',
  'vmetre.js',
  'plotly-violentometre.min.js',
  'plotly-locale-fr.js',
  'logoUFICT.png',
  'cc.png',
  'qrcodevmetre.png'
];
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(appShellFiles);
      })
    );
});
self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(r) {
        return r || fetch(e.request).then(function(response) {
          return caches.open(cacheName).then(function(cache) {
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    );
});
