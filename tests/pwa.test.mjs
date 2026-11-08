import {test} from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';import vm from 'node:vm';
const template=await readFile(new URL('../public/sw.js',import.meta.url),'utf8');
const files=['./','./assets/game.js','./assets/game.css'];
function worker(){
 const events={},stored=new Map(),deleted=[];let claimed=false;
 const cache={addAll:async list=>{for(const f of list)stored.set(f,{resource:f})},match:async r=>stored.get(typeof r==='string'?r:'./'+new URL(r.url).pathname.split('/manu-game/')[1])};
 const sandbox={self:{location:{origin:'https://example.com'},registration:{scope:'https://example.com/manu-game/'},clients:{claim:async()=>{claimed=true}},addEventListener:(type,fn)=>events[type]=fn},caches:{open:async()=>cache,keys:async()=>['another-pwa','manu-game-old','manu-game-test'],delete:async k=>deleted.push(k)},fetch:async()=>{throw Error('offline')},URL,Response};
 vm.runInNewContext(template.replace('"__PRECACHE_FILES__"',JSON.stringify(files)).replace('__CACHE_VERSION__','test'),sandbox);
 return {events,stored,deleted,claimed:()=>claimed};
}
test('installation caches full app shell; activation preserves other PWAs',async()=>{
 const w=worker();let pending;w.events.install({waitUntil:p=>pending=p});await pending;assert.deepEqual([...w.stored.keys()],files);
 w.events.activate({waitUntil:p=>pending=p});await pending;assert.deepEqual(w.deleted,['manu-game-old']);assert.equal(w.claimed(),true);
});
test('offline requests return cached navigation and game assets; other apps ignored',async()=>{
 const w=worker();let pending;w.events.install({waitUntil:p=>pending=p});await pending;
 for(const [path,mode,expected] of [['','navigate','./'],['assets/game.js','cors','./assets/game.js'],['new-route','navigate','./']]){
  let reply;w.events.fetch({request:{url:'https://example.com/manu-game/'+path,method:'GET',mode},respondWith:p=>reply=p});assert.equal((await reply).resource,expected);
 }
 let intercepted=false;w.events.fetch({request:{url:'https://example.com/other-app/',method:'GET'},respondWith:()=>intercepted=true});assert.equal(intercepted,false);
});
