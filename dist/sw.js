if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-0d8277e8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"../index.html",revision:"6a9f6345c2a3d4b8482b2a4eb13f59d2"},{url:"444.a5a0ee8ba2c034c33194.js",revision:null},{url:"444.a5a0ee8ba2c034c33194.js.LICENSE.txt",revision:"a837d574946e5c820c351484c3b8d197"},{url:"658.c6396f944e79773dd40a.js",revision:null},{url:"658.c6396f944e79773dd40a.js.LICENSE.txt",revision:"7f433dcd1e8163fd68cb6e3d97245ff4"},{url:"733.cc40bfbd62461598b426.js",revision:null},{url:"733.cc40bfbd62461598b426.js.LICENSE.txt",revision:"5f8e45fa8b412f7da23d0d1392331c1c"},{url:"main.627711794b20714aa981.js",revision:null},{url:"main.627711794b20714aa981.js.LICENSE.txt",revision:"f96ab19197a70890ba238aeae344d339"},{url:"main.e5456a31d9fab7cfb6c2.css",revision:null}],{})}));
