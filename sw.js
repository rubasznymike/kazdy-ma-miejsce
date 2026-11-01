/* Tryb offline zestawu „Każdy ma miejsce”.
   Najpierw sieć (zawsze najnowsza wersja z GitHub Pages), a bez internetu — kopia zapisana w przeglądarce.
   ✏️ Po dodaniu lub zmianie nazwy pliku dopisz go do listy FILES i zwiększ numer wersji w CACHE. */
const CACHE = 'kazdy-ma-miejsce-v2';
const FILES = [
  './', './index.html', './nauczyciel.html',
  './most-wspolpracy.html', './klasa-dla-kazdego.html', './co-powiesz.html',
  './kazdy-ma-swoja-droge.html', './wspolny-piknik.html', './detektywi-barier.html',
  './manifest.webmanifest', './podglad.png',
  './ikony/ikona-192.png', './ikony/ikona-512.png', './ikony/ikona-maskable-512.png', './ikony/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('kazdy-ma-miejsce-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true })
        .then(hit => hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
