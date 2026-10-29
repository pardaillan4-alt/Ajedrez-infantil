// Service worker de Jaque Mimito: permite instalar la app y jugar sin internet.
const CACHE = 'jaque-mimito-d94a86f8a0';
const CORE = ['./', 'index.html', 'vendor/three.min.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('jaque-mimito-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  if (url.pathname.includes('/music/')) return; // la música se transmite por partes; no se guarda
  if (req.mode === 'navigate') {
    // la página: primero internet (para recibir mejoras), si no hay, la copia guardada
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(k => k.put('index.html', c)); return r; })
      .catch(() => caches.match('index.html').then(r => r || caches.match('./'))));
    return;
  }
  // lo demás (modelos, fotos, íconos): primero la copia guardada
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok && r.status === 200) { const c = r.clone(); caches.open(CACHE).then(k => k.put(req, c)); }
    return r;
  })));
});
