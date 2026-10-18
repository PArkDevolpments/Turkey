'use strict';
const CACHE='lira-pocket-v1.1';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('lira-pocket-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('fetch',e=>{const req=e.request,u=new URL(req.url);if(req.method!=='GET'||u.origin!==self.location.origin)return;if(req.mode==='navigate'){e.respondWith(fetch(req).catch(()=>caches.match('./index.html')))}else{e.respondWith(caches.match(req).then(hit=>hit||fetch(req)))}});
