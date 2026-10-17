// Service worker mínimo para que el portal se pueda instalar como app.
// No guarda nada en caché: siempre va a la red, así los datos están al día.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{});
