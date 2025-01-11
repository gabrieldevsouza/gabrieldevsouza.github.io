/* Qwik Service Worker */
const appBundles=[["../service-worker.js",[]],["q-0dBZfy6e.js",[4],["1raneLGffO8"]],["q-69zrJiqE.js",[22],["qGVD1Sz413o"]],["q-B8dWvBzk.js",[27],["N26RLdG0oBg"]],["q-B8wTDDDj.js",[7],["zPJUEsxZLIA"]],["q-B9DY0vJq.js",[7]],["q-BFm3ZgoC.js",[7],["tntnak2DhJ8"]],["q-BGeZwhMI.js",[27],["pWsmcogutG8"]],["q-BHi06b6r.js",[7],["PmWjL2RrvZM"]],["q-BNPJXT0q.js",[27],["26Zk9LevwR4"]],["q-BfcacFJB.js",[27],["B0lqk5IDDy4"]],["q-C45_u0VA.js",[7]],["q-CJffVNRd.js",[7],["zpHcJzYZ88E"]],["q-CTDstkl4.js",[8],["MiPVFWJLcMo"]],["q-Cd9lcWrN.js",[7],["xe8duyQ5aaU"]],["q-Cei8RSIy.js",[22],["K4gvalEGCME"]],["q-ChUWn_e5.js",[7],["0vphQYqOdZI"]],["q-Cmlnyh2Q.js",[27],["VKFlAWJuVm8"]],["q-CrsqOqgk.js",[4],["FdQ8zERN4uM"]],["q-DVpD4vR_.js",[22],["Ysfvd0zsHZc"]],["q-Dnu1GT-_.js",[7],["ScE8eseirUA"]],["q-DthHZjZf.js",[7],["WfTOxT4IrdA"]],["q-Dti2wdyI.js",[7],["p1yCGpFL1xE"]],["q-F156cQaX.js",[],["9KRx0IOCHt8"]],["q-FpHrlLXO.js",[7]],["q-c7ngcCaP.js",[22],["aww2BzpANGM"]],["q-kCGQ8Vlu.js",[7]],["q-lNDDqrzM.js",[],["A5SCimyrjAE"]]];
const libraryBundleIds=[22];
const linkBundles=[[/^\/$/,[5,17,24,10]]];
const p=(t,e)=>e.filter(n=>!t.some(c=>n.endsWith(c[0]))),q=(t,e)=>!!e&&!B(e),B=t=>{const e=t.headers.get("Cache-Control")||"";return e.includes("no-cache")||e.includes("max-age=0")},N=(t,e)=>t.some(n=>e.endsWith("/"+n[0])),W=(t,e)=>t.find(n=>n[0]===e),g=(t,e)=>e.map(n=>t[n]?t[n][0]:null),w=(t,e)=>e.map(n=>t.get(n)).filter(n=>n!=null),C=t=>{const e=new Map;for(const n of t){const c=n[2];if(c)for(const o of c)e.set(o,n[0])}return e},k=(t,e,n,c)=>new Promise((o,a)=>{const s=c.url,r=n.get(s);if(r)r.push([o,a]);else{const l=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d]of i)d(f.clone())}else o(f.clone())},u=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d,U]of i)U(f)}else a(f)};n.set(s,[[o,a]]),t.match(s).then(f=>{if(q(c,f))l(f);else return e(c).then(async i=>{i.ok&&await t.put(s,i.clone()),l(i)})}).catch(f=>t.match(s).then(i=>{i?l(i):u(f)}))}}),y="QwikBuild",b=new Set,A=new Map,h=[],m=(t,e,n,c,o,a=!1)=>{Array.isArray(o)&&v(o,t,c,a),L(e,n)};function v(t,e,n,c){for(const o of t)try{const a=W(e,o);if(a){const s=g(e,a[1]),r=new URL(o,n).href,l=h.indexOf(r);l>-1?c&&(h.splice(l,1),h.unshift(r)):(c?h.unshift(r):h.push(r),v(s,e,n,c))}}catch(a){console.error(a)}}function L(t,e){for(;h.length>0&&A.size<6;){const n=h.shift();if(!b.has(n)){const c=new Request(n);b.add(n),k(t,e,A,c).catch(()=>{b.delete(n)}).finally(()=>L(t,e))}}}const E=(t,e,n,c,o,a,s)=>{try{m(t,c,o,a,g(t,e))}catch(r){console.error(r)}for(const r of s)try{for(const l of n){const[u,f]=l;if(u.test(r)){m(t,c,o,a,g(t,f));break}}}catch(l){console.error(l)}},T=(t,e,n,c)=>{try{const{baseUrl:o,requestedBundleName:a}=x(c);m(t,e,n,o,[a],!0)}catch(o){console.error(o)}};function x(t){const e=t.href.split("/"),n=e[e.length-1];return e[e.length-1]="",{baseUrl:new URL(e.join("/")),requestedBundleName:n}}const P=(t,e,n,c)=>{const o=t.fetch.bind(t),a=C(e);t.addEventListener("activate",s=>{(async()=>{try{s.waitUntil(t.caches.keys().then(i=>Promise.all(i.map(d=>{if(d!==y)return caches.delete(d)}))));const r=await t.caches.open(y),u=(await r.keys()).map(i=>i.url),f=p(e,u);await Promise.all(f.map(i=>r.delete(i)))}catch(r){console.error(r)}})()}),t.addEventListener("message",async({data:s})=>{if(s.type==="qprefetch"&&typeof s.base=="string"){const r=await t.caches.open(y),l=new URL(s.base,t.origin);Array.isArray(s.links)&&E(e,n,c,r,o,l,s.links),Array.isArray(s.bundles)&&m(e,r,o,l,s.bundles),Array.isArray(s.symbols)&&m(e,r,o,l,w(a,s.symbols))}}),t.addEventListener("fetch",s=>{const r=s.request;if(r.method==="GET"){const l=new URL(r.url);N(e,l.pathname)&&s.respondWith(t.caches.open(y).then(u=>(T(e,u,o,l),k(u,o,A,r))))}})},Q=()=>{typeof self<"u"&&typeof appBundles<"u"&&P(self,appBundles,libraryBundleIds,linkBundles)};Q();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());