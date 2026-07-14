// sw.js - Service Worker minimal pour valider la PWA
self.addEventListener('install', (e) => {
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
  });
  
  self.addEventListener('fetch', (e) => {
    // Laisse passer toutes les requêtes réseau normalement
  });