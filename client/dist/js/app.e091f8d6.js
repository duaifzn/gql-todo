(function(e){function t(t){for(var n,o,l=t[0],i=t[1],s=t[2],c=0,f=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9652bd3a"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"5c175449"}[e]+".css",a=i.p+n,u=document.getElementsByTagName("link"),l=0;l<u.length;l++){var s=u[l],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===n||c===a))return t()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){s=f[l],c=s.getAttribute("data-href");if(c===n||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],p.parentNode.removeChild(p),r(u)},p.href=a;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=l(e);var f=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=c;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},4805:function(e,t,r){"use strict";var n=r("8ce0"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("0cdd");var n=r("2b0e"),o=r("5f5b"),a=r("b1e0");r("ab8b"),r("2dd8");n["default"].use(o["a"]),n["default"].use(a["a"]);var u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),r("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e._v("| "),r("a",{attrs:{href:"#"},on:{click:e.logout}},[e._v("Logout")])],1),r("router-view")],1)},l=[],i=(r("96cf"),r("1da1")),s=r("ca94"),c={name:"Logout",methods:{logout:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["c"])();case 2:e.$router.push("/");case 3:case"end":return t.stop()}}),t)})))()}}},f=c,p=(r("034f"),r("2877")),v=Object(p["a"])(f,u,l,!1,null,null,null),h=v.exports,d=(r("d3b7"),r("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],w={name:"HelloWorld",props:{msg:String}},k=w,j=(r("4805"),Object(p["a"])(k,b,_,!1,null,"b9167eee",null)),y=j.exports,E={name:"Home",components:{HelloWorld:y}},O=E,x=Object(p["a"])(O,g,m,!1,null,null,null),C=x.exports;n["default"].use(d["a"]);var L=[{path:"/",name:"Home",component:C},{path:"/login",name:"Login",component:function(){return r.e("about").then(r.bind(null,"a55b"))}},{path:"/todo",name:"Todo",component:function(){return r.e("about").then(r.bind(null,"a3b3"))}}],T=new d["a"]({routes:L}),P=T;n["default"].config.productionTip=!1,new n["default"]({router:P,apolloProvider:s["a"],render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,r){},"8ce0":function(e,t,r){},ca94:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return w}));r("96cf");var n=r("1da1"),o=r("2b0e"),a=r("74ca"),u=r("478e"),l=r("2bf2"),i=r("522d"),s=r("2b27"),c=r.n(s),f=r("a18f"),p=r.n(f);o["default"].use(i["a"]),o["default"].use(c.a);var v=Object({NODE_ENV:"production",BASE_URL:"/"}).AUTH_TOKEN,h=function(){var e={},t=o["default"].$cookies.get(v);return t&&(e[v]="".concat(t)),e},d=new u["a"]({uri:Object({NODE_ENV:"production",BASE_URL:"/"}).GRAPHQL_URI||"http://localhost:3000/graphql",fetch:p.a,headers:h()}),g=new a["a"]({link:d,cache:new l["a"],connectToDevTools:!0}),m=new i["a"]({defaultClient:g});function b(e){return _.apply(this,arguments)}function _(){return _=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t&&o["default"].$cookies.set(v,t);case 1:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function w(){return k.apply(this,arguments)}function k(){return k=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"undefined"!==typeof o["default"].$cookies.get(v)&&o["default"].$cookies.remove(v);case 1:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.e091f8d6.js.map