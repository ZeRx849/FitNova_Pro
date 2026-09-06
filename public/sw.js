const CACHE="fitnova-shell-v12";
const CORE=["/","/index.html","/workout.html","/food.html","/coach.html","/progress.html","/settings.html","/manifest.json","/css/app.css?v=12","/js/store.js?v=12","/js/ui.js?v=12","/js/app.js?v=12","/icons/icon-192.png","/icons/icon-512.png","/icons/apple-touch-icon.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith("fitnova-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
 const r=e.request;if(r.method!=="GET")return;
 const u=new URL(r.url);if(u.origin!==self.location.origin||u.pathname.startsWith("/api/"))return;
 if(r.mode==="navigate"){e.respondWith(fetch(r).catch(()=>caches.match(r).then(x=>x||caches.match("/index.html"))));return}
 e.respondWith(caches.match(r).then(c=>{
   if(c)return c;
   return fetch(r).then(res=>{
     if(res.ok){const copy=res.clone();caches.open(CACHE).then(x=>x.put(r,copy)).catch(()=>{});}
     return res;
   }).catch(()=>caches.match("/index.html"));
 }));
});
