/* Copyright 2023, Vitalij Lutsker, shop-app version: 0.8.3 (Sun, 26 Feb 2023 20:48:03 GMT) */
(()=>{const a="storeApp-v1",c=["/3af61a7acaafa6454882d4157096a602a483a1d4f8/main.css","/3af61a7acaafa6454882d4157096a602a483a1d4f8/index.html","/3af61a7acaafa6454882d4157096a602a483a1d4f8/index.bundle.js","/3af61a7acaafa6454882d4157096a602a483a1d4f8/rcpyr-icon.png"];self.addEventListener("install",(e=>{console.log("[Service Worker] Install"),e.waitUntil((async()=>{const e=await caches.open(a);console.log("[Service Worker] Caching assets"),await e.addAll(c)}))})),self.addEventListener("activate",(function(){console.log("[Service Worker] activate"),e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>{if(e!==a)return caches.delete(e)}))))))})),self.addEventListener("fetch",(e=>{console.log("[Service Worker] Fetch request for:",e.request.url),e.respondWith((async()=>{const c=await caches.match(e.request);if(console.log(`[Service Worker] Fetching resource: ${e.request.url}`),c)return c;const t=await fetch(e.request),r=await caches.open(a);return console.log(`[Service Worker] Caching new resource: ${e.request.url}`),r.put(e.request,t.clone()),t})())}))})();