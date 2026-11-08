export const meals=[{pet:'cronos',name:'Cronos',food:'Cenoura',answer:1},{pet:'ragnar',name:'Ragnar',food:'Ração para cães',answer:0},{pet:'merida',name:'Mérida',food:'Ração para gatos',answer:2}];
export const melodies=[[0,2],[1,0,2],[2,0,1,2]];
export function checkSequence(sequence,input){return input.every((n,i)=>n===sequence[i])?(input.length===sequence.length?'complete':'continue'):'retry'}
export function distance(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}
export function readBadges(raw){try{const a=JSON.parse(raw||'[]');return Array.isArray(a)?[...new Set(a.filter(n=>Number.isInteger(n)&&n>=1&&n<=4))]:[]}catch{return []}}
