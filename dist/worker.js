!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){const r=n(1);addEventListener("fetch",t=>{t.respondWith(s(t.request))});const o=[{name:"Cloudflare Worker Blog",url:"https://blog.cloudflare.com/asynchronous-htmlrewriter-for-cloudflare-workers/"},{name:"GitHub",url:"https://github.com/jonlee96"},{name:"LinkedIn",url:"https://www.linkedin.com/in/jonathan-lee-b6099a116/"}],s=async t=>{const e=new r;e.get(".*/links",t=>(t=>{const e=JSON.stringify(o);return new Response(e,{headers:{"content-type":"application/json"}})})()),e.get(".*/.*",t=>fetch("https://static-links-page.signalnerve.workers.dev").then(t=>(new HTMLRewriter).on("div#links",new a).on("div#profile",new i("style")).on("div#social",new i("style")).on("body",new i("class")).on("body",new u("class","bg-red-900")).on("div#social",new c("div","id","links")).on("img#avatar",new u("src","https://avatars0.githubusercontent.com/u/48492574?s=460&u=f96be9951fb82082ea4546f308254554d30a742e&v=4")).on("h1#name",new l("Jonathan Lee")).on("title",new h("Hi Cloudflare!")).transform(t)));return await e.route(t)};class a{constructor(t){this.links=t}async element(t){for(let e=0;e<o.length;e++)t.prepend(`<a href=${o[e].url}>${o[e].name}</a>`,{html:!0})}}class i{constructor(t){this.attributeName=t}async element(t){t.getAttribute(this.attributeName)&&t.removeAttribute(this.attributeName)}}class u{constructor(t,e){this.attributeName=t,this.attributeValue=e}async element(t){t.setAttribute(this.attributeName,this.attributeValue)}}class l{constructor(t){this.textContent=t}async element(t){t.prepend(this.textContent)}}class c{constructor(t,e,n){this.elementTag=t,this.attributeName=e,this.attributeValue=n}async element(t){this.attributeName?t.prepend(`<${this.elementTag} ${this.attributeName}="${this.attributeValue}"></${this.elementTag}>`,{html:!0}):t.prepend(`<${this.elementTag}></${this.elementTag}>`,{html:!0})}}class h{constructor(t){this.textContent=t}async element(t){t.setInnerContent(this.textContent)}}},function(t,e){const n=t=>e=>e.method.toLowerCase()===t.toLowerCase(),r=n("connect"),o=n("delete"),s=n("get"),a=n("head"),i=n("options"),u=n("patch"),l=n("post"),c=n("put"),h=n("trace"),d=t=>e=>{const n=new URL(e.url).pathname;return(n.match(t)||[])[0]===n};t.exports=class{constructor(){this.routes=[]}handle(t,e){return this.routes.push({conditions:t,handler:e}),this}connect(t,e){return this.handle([r,d(t)],e)}delete(t,e){return this.handle([o,d(t)],e)}get(t,e){return this.handle([s,d(t)],e)}head(t,e){return this.handle([a,d(t)],e)}options(t,e){return this.handle([i,d(t)],e)}patch(t,e){return this.handle([u,d(t)],e)}post(t,e){return this.handle([l,d(t)],e)}put(t,e){return this.handle([c,d(t)],e)}trace(t,e){return this.handle([h,d(t)],e)}all(t){return this.handle([],t)}route(t){const e=this.resolve(t);return e?e.handler(t):new Response("resource not found",{status:404,statusText:"not found",headers:{"content-type":"text/plain"}})}resolve(t){return this.routes.find(e=>!(e.conditions&&(!Array.isArray(e)||e.conditions.length))||("function"==typeof e.conditions?e.conditions(t):e.conditions.every(e=>e(t))))}}}]);