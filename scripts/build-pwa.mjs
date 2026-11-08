import {readFile,writeFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const files=['./','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
for(const name of await readdir('dist/assets'))files.push('./assets/'+name);
const hash=createHash('sha256');
for(const file of files)hash.update(await readFile(file==='./'?'dist/index.html':'dist/'+file.slice(2)));
const template=await readFile('public/sw.js','utf8');
await writeFile('dist/sw.js',template.replace('"__PRECACHE_FILES__"',JSON.stringify(files)).replace('__CACHE_VERSION__',hash.digest('hex').slice(0,16)));
console.log(`PWA: ${files.length} resources precached.`);
