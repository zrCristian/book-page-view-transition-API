import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { g as deserializeManifest } from './chunks/astro.b86288a0.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.ed74e273.mjs');
const _page1  = () => import('./chunks/404@_@astro.59a4a3f6.mjs');
const _page2  = () => import('./chunks/_book_@_@astro.468a3fe2.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/404.astro", _page1],["src/pages/[book].astro", _page2]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await(await fetch(n.pathname)).text(),[,o]=e.match(/<body[^>]*>([\\s\\S]*)<\\/body>/i);document.startViewTransition(()=>{document.body.innerHTML=o,document.documentElement.scrollTop=0})}})});\n"}],"styles":[{"type":"external","src":"/_astro/404.d2d30754.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await(await fetch(n.pathname)).text(),[,o]=e.match(/<body[^>]*>([\\s\\S]*)<\\/body>/i);document.startViewTransition(()=>{document.body.innerHTML=o,document.documentElement.scrollTop=0})}})});\n"}],"styles":[{"type":"external","src":"/_astro/404.d2d30754.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await(await fetch(n.pathname)).text(),[,o]=e.match(/<body[^>]*>([\\s\\S]*)<\\/body>/i);document.startViewTransition(()=>{document.body.innerHTML=o,document.documentElement.scrollTop=0})}})});\n"}],"styles":[{"type":"external","src":"/_astro/404.d2d30754.css"}],"routeData":{"route":"/[book]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"book","dynamic":true,"spread":false}]],"params":["book"],"component":"src/pages/[book].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["C:/Users/crist/Desktop/Astro/view-transitions-API/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/crist/Desktop/Astro/view-transitions-API/src/pages/[book].astro",{"propagation":"none","containsHead":true}],["C:/Users/crist/Desktop/Astro/view-transitions-API/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index.astro.aca320a4.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.ed74e273.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404@_@astro.59a4a3f6.mjs","\u0000@astro-page:src/pages/[book]@_@astro":"chunks/_book_@_@astro.468a3fe2.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.57ca7251.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/404.d2d30754.css","/favicon.svg"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
