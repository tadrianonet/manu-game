// Build replaces these values with the exact version and files in dist.
const PREFIX='manu-game-';
const CACHE=PREFIX+'__CACHE_VERSION__';
const FILES="__PRECACHE_FILES__";
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 event.respondWith(fetch(event.request).catch(async()=>{
  const cache=await caches.open(CACHE);
  return (await cache.match(event.request))||(event.request.mode==='navigate'?await cache.match('./'):undefined)||Response.error();
 }));
});
