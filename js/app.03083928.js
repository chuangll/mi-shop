(function(t){function e(e){for(var r,a,s=e[0],o=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],i[a]&&d.push(i[a][0]),i[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);m&&m(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i={app:0},c=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0de723":"6fba4d90","chunk-323f0322":"955cbecc","chunk-4a94807b":"98758949","chunk-7b2fdf0f":"189e7d53","chunk-c7f7bf2a":"1f17770c","chunk-f315e140":"d5aa7e7f"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-323f0322":1,"chunk-4a94807b":1,"chunk-7b2fdf0f":1,"chunk-c7f7bf2a":1,"chunk-f315e140":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0de723":"31d6cfe0","chunk-323f0322":"8144c0ab","chunk-4a94807b":"353bfc29","chunk-7b2fdf0f":"1e1b6e5e","chunk-c7f7bf2a":"7549483b","chunk-f315e140":"2e622098"}[t]+".css",i=o.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],m.parentNode.removeChild(m),n(c)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)}).then(function(){a[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}i[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/my-demo/mobile-mi/dist/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"004b":function(t,e,n){"use strict";var r=n("2a57"),a=n.n(r);a.a},"053c":function(t,e,n){"use strict";var r=n("279b"),a=n.n(r);a.a},"0f9a":function(t,e){},"279b":function(t,e,n){},"2a57":function(t,e,n){},"4ba6":function(t,e,n){},"51ff":function(t,e,n){var r={"./add.svg":"c2a3","./drag.svg":"9bbf","./loading.svg":"d412"};function a(t){var e=i(t);return n(e)}function i(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="51ff"},5494:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("transition",[n("router-view")],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-view-component"},[n("router-view")],1)},s=[],o={},l=o,u=(n("e96e"),n("2877")),d=Object(u["a"])(l,c,s,!1,null,"406a1c54",null),m=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Footer")],1)},v=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],g={name:"HelloWorld",props:{msg:String}},b=g,w=(n("004b"),Object(u["a"])(b,p,h,!1,null,"7bb339c8",null)),A=w.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("transition",{attrs:{name:t.transitionName}},[n("keep-alive",[n("router-view")],1)],1),n("div",{staticClass:"bottom-nav-container"},[n("div",{staticClass:"bottom-nav"},[n("router-link",{staticClass:"flex-item",attrs:{to:"/home"}},[n("div",{staticClass:"icon-home app-bottom-icon"}),n("div",[t._v("首页")])]),n("router-link",{staticClass:"flex-item",attrs:{to:"/category"}},[n("div",{staticClass:"icon-category app-bottom-icon"}),n("div",[t._v("分类")])]),n("router-link",{staticClass:"flex-item",attrs:{to:"/shopcart"}},[n("div",{staticClass:"icon-shop-cart app-bottom-icon"},[n("div",{staticClass:"bubble-num"},[t._v(t._s(t.cartTotal))])]),n("div",[t._v("购物车")])]),n("router-link",{staticClass:"flex-item",attrs:{to:"/mine"}},[n("div",{staticClass:"icon-mine app-bottom-icon"}),n("div",[t._v("我的")])])],1)])],1)},k=[],C=n("d178"),_={components:{Navbar:C["default"]},data:function(){return{bottomNav:"home",transitionName:"slide-left"}},computed:{cartTotal:function(){return this.$store.getters.getCartTotal}},mounted:function(){},methods:{},watch:{$route:function(t,e){t.meta.index>e.meta.index?this.transitionName="slide-right":this.transitionName="slide-left"}}},E=_,B=(n("c6fe"),Object(u["a"])(E,y,k,!1,null,"4423efff",null)),I=B.exports,H={name:"home",components:{HelloWorld:A,Footer:I}},j=H,S=Object(u["a"])(j,f,v,!1,null,null,null),U=S.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[t.requestLoading?n("div",{staticClass:"request-loading-component"},[n("svg-icon",{attrs:{"icon-class":"loading"}})],1):t._e()])},Z=[],N=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),M=n("2f62");function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(n,!0).forEach(function(e){Object(N["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var D={name:"RequestLoading",computed:L({},Object(M["b"])(["requestLoading"]))},T=D,G=(n("053c"),Object(u["a"])(T,O,Z,!1,null,"adc10486",null)),R=G.exports,Q={components:{ContentView:m,RequestLoding:R,Home:U}},z=Q,V=(n("9598"),Object(u["a"])(z,a,i,!1,null,"d1ef1c58",null)),F=V.exports,J=n("8c4f");r["default"].use(J["a"]);var W=new J["a"]({mode:"history",scrollBehavior:function(){return{y:0}},base:"/my-demo/mobile-mi/dist/",routes:[{path:"/",component:U,children:[{path:"",name:"home",component:function(){return Promise.resolve().then(n.bind(null,"d178"))},meta:{title:"首页",index:1}},{path:"category",name:"category",component:function(){return n.e("chunk-323f0322").then(n.bind(null,"0d32"))},meta:{title:"分类",index:2}},{path:"shopcart",name:"shopcart",component:function(){return n.e("chunk-c7f7bf2a").then(n.bind(null,"8aa0"))},meta:{title:"购物车",index:3}},{path:"mine",name:"mine",component:function(){return n.e("chunk-7b2fdf0f").then(n.bind(null,"fbcc"))},meta:{title:"我的",index:4}}]},{path:"/detail/:id/:name/:price/:imgurl",name:"detail",component:function(){return n.e("chunk-f315e140").then(n.bind(null,"c84b"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-4a94807b").then(n.bind(null,"a55b"))}},{path:"/test",name:"test",component:function(){return n.e("chunk-2d0de723").then(n.bind(null,"864c"))}},{path:"*",name:"404",redirect:"/"}]}),X=n("a78e"),P=n.n(X),Y={state:{size:P.a.get("size")||"medium",requestLoading:0},mutations:{SET_LOADING:function(t,e){t.requestLoading=0!==e?e?++t.requestLoading:--t.requestLoading:0},SET_SIZE:function(t,e){t.size=e,P.a.set("size",e)}},actions:{SetLoading:function(t,e){var n=t.commit;n("SET_LOADING",e)},setSize:function(t,e){var n=t.commit;n("SET_SIZE",e)}}},K=Y,q=n("0f9a"),$=n.n(q),tt=(n("20d6"),n("7514"),{cartItems:JSON.parse(localStorage.getItem("cartItems"))||[],sheet:!1}),et={getSheetStatus:function(t){return t.sheet},getCartItems:function(t){return t.cartItems},getCartTotal:function(t){var e=0;return t.cartItems.forEach(function(t){e+=t.count}),e},getCartItemTotal:function(t){return function(e){var n=t.cartItems.find(function(t){return t.id==e});return n.count}},calcTotalPrice:function(t){return function(e){var n=0;return e.forEach(function(e){var r=t.cartItems.find(function(t){return t.id==e});n+=r.price*r.count}),n}}},nt={},rt={setSheetStatus:function(t){t.sheet=!t.sheet},addGoodsToCart:function(t,e){var n=t.cartItems.find(function(t){return t.id===e.id});n?(n.count+=e.count,n.selected=e.selected,console.log(n)):t.cartItems.push(e),localStorage.setItem("cartItems",JSON.stringify(t.cartItems))},addQuantity:function(t,e){var n=t.cartItems.find(function(t){return t.id==e});n.count++,localStorage.setItem("cartItems",JSON.stringify(t.cartItems))},subtractQuantity:function(t,e){var n=t.cartItems.find(function(t){return t.id==e});n.count>1&&(n.count--,localStorage.setItem("cartItems",JSON.stringify(t.cartItems)))},setSelectedStatus:function(t,e){t.cartItems.forEach(function(t){t.selected=!1}),e.forEach(function(e){var n=t.cartItems.find(function(t){return t.id==e});n.selected=!0}),localStorage.setItem("cartItems",JSON.stringify(t.cartItems))},deleteGoodsFromCart:function(t,e){var n=t.cartItems.findIndex(function(t){return t.id==e});-1!=n&&(t.cartItems.splice(n,1),localStorage.setItem("cartItems",JSON.stringify(t.cartItems)))}},at={state:tt,getters:et,actions:nt,mutations:rt},it=(n("7f7f"),{requestLoading:function(t){return t.app.requestLoading},size:function(t){return t.app.size},token:function(t){return t.user.token},avatar:function(t){return t.user.avatar},name:function(t){return t.user.name},roles:function(t){return t.user.roles}}),ct=it;r["default"].use(M["a"]);var st=new M["a"].Store({modules:{app:K,user:$.a,shopcart:at},getters:ct}),ot=st,lt=(n("b20f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.svgClass,attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":t.iconName}})])}),ut=[],dt={name:"SvgIcon",props:{iconClass:{type:String,required:!0},className:{type:String,default:""}},computed:{iconName:function(){return"#icon-".concat(this.iconClass)},svgClass:function(){return this.className?"svg-icon "+this.className:"svg-icon"}}},mt=dt,ft=(n("ec3e"),Object(u["a"])(mt,lt,ut,!1,null,"2f28985a",null)),vt=ft.exports;r["default"].component("svg-icon",vt);var pt=function(t){return t.keys().map(t)},ht=n("51ff");pt(ht);var gt={install:function(t,e){t.prototype.$cloneDeep=function(t){var e;if(t instanceof Array){e=[];var n=t.length;while(n--)e[n]=this.$cloneDeep(t[n]);return e}if(t instanceof Object){for(var r in e={},t)t.hasOwnProperty(r)&&(e[r]=this.$cloneDeep(t[r]));return e}return t},t.prototype.$enum={styleStatus:["停用","启用"],barType:["样式类别","url类别"]}}},bt=gt,wt=(n("a481"),n("7618"));function At(t,e){if(0===arguments.length)return null;var n,r=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(wt["a"])(t)?n=t:(10===(""+t).length&&(t=1e3*parseInt(t)),n=new Date(t));var a={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},i=r.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var n=a[e];return"a"===e?["日","一","二","三","四","五","六"][n]:(t.length>0&&n<10&&(n="0"+n),n||0)});return i}var yt={DateTime:function(t){return At(t)},styleStatus:function(t){var e="";switch(t){case 0:e="停用";break;case 1:e="启用";break}return e},styleTypeStatus:function(t){var e="";switch(t){case 0:e="停用";break;case 1:e="启用";break}return e}},kt=yt,Ct=n("bc3a"),_t=n.n(Ct),Et=n("a7fe"),Bt=n.n(Et),It=n("ce5b"),Ht=n.n(It),jt=(n("bf40"),n("d1e7"),n("caf9"));for(var St in _t.a.defaults.baseURL="https://buqiyuan.xyz/my-demo/mobile-mi/dist",_t.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r["default"].use(jt["a"],{preLoad:1.3,error:n("5b4d"),loading:n("5b4d"),attempt:1}),r["default"].use(jt["a"]),r["default"].use(Bt.a,_t.a),r["default"].use(Ht.a),kt)r["default"].filter(St,kt[St]);r["default"].use(bt),r["default"].config.productionTip=!1,new r["default"]({router:W,store:ot,render:function(t){return t(F)}}).$mount("#app")},"5b4d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAADGUlEQVR4nO3dwYuMYQDH8e/Pjg3hMEnSHjQ5bCLlhqODkoODlKtyUUrKyV/Axt4cHRUpJxcStbnJQWqkLXJAG5K2Peyox+F9lzdZWrs702/296lpmuedd3ve+e77zDtN7aqUQvhZN+gJxP9JOFMJZyrhTCWcqYQzlXCmEs5UwplKOFMJZyrhTCWcqYQzlXCmEs5UwplKOFMJZyrhTCWcqYQzlXCmEs5UwplKOFMJZyrhTCWcqYQzlXCmEs5UwplKOFMJZyrhTCWcqYQzlXCmEs5UwplKOFMJZyrhTCWcqdagJ7BU8/PzrMZf/BsZGaHV8nk5fGZa63a7E71e7+QSdvkOvAKuAU8a42PA1MKDdrt9qdPp3F2RSfaBXThJ2yXtWuJuu4FjwHngRj3WAn7+HEmbV2B6fbOW3uPWUZ11Owc9kZVgd8b95hNwGJj/w7YWcIAq1lg9tgE4BNgsiYtxDzcLvP7L9mngC/CwMWa1JC5mmJbKCeBNfZtqjE8PZjqry/2Ma9pO42Jj2A3TGbemJJyphDOVcKYSzpR7uMXm735c/2T3caCUMlVKWZj3TGPTU34dT3N8FrjVeDz9p/FSitXnPbn9U6R8rVMZ+iVlWPn8itW63e6xXq+3FdgBvAXGgevABeBq46mngH3APeAlcAbYCtwE9gDb6vtnwMF2uz3Z6XS+9ukwls3ujJN0WtILSfslzUraIumQpHeSqG8HJB2VNClpXNJFSR8lPZA0UW+bk7Re0pikD5JODPrYlsIuXG2G6uLiPfCZ6uuas1QryDgwCnwDvgKbgI1U3xLM8GuVeVfv+7F+3mj/pr98dktlKeV+KWUOeEQV4xnVi3+b6sU/TrV07gWuAI+BO8A54Ahwud72BXhe34+WUjb090iWJ1eVNberSrtwUXF9j1vzEs5UwplKOFMJZyrhTCWcqYQzlXCmEs5UwplKOFMJZyrhTCWcqYQzlXCmEs5UwplKOFMJZyrhTCWcqYQzlXCmEs5UwplKOFMJZyrhTCWcqYQzlXCmEs5UwplKOFMJZyrhTCWcqYQzlXCmfgAPHIXkp3v7mAAAAABJRU5ErkJggg=="},"5fd3":function(t,e,n){},"6fc9":function(t,e,n){t.exports=n.p+"img/top.451d650e.png"},7780:function(t,e,n){},"866d":function(t,e,n){"use strict";var r=n("7780"),a=n.n(r);a.a},"8cf1":function(t,e,n){"use strict";var r=n("8f4a"),a=n.n(r);a.a},"8f4a":function(t,e,n){},9598:function(t,e,n){"use strict";var r=n("5fd3"),a=n.n(r);a.a},"9bbf":function(t,e,n){t.exports=n.p+"img/drag.449cc662.svg"},b20f:function(t,e,n){},be00:function(t,e,n){"use strict";var r=n("dd90"),a=n.n(r);a.a},c2a3:function(t,e,n){t.exports=n.p+"img/add.6cd18c3e.svg"},c6fe:function(t,e,n){"use strict";var r=n("fd13"),a=n.n(r);a.a},d178:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-header"},[r("v-toolbar",{staticClass:"nav-active",attrs:{color:"#f2f2f2",dark:"",tabs:""},scopedSlots:t._u([{key:"extension",fn:function(){return[r("v-tabs",{attrs:{"active-class":"nav-active",centered:"",color:"transparent","slider-color":"rgb(237, 91, 0)"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabs,function(e,n){return r("v-tab",{key:n,attrs:{color:"red"}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),1)]},proxy:!0}])},[r("div",{staticClass:"logo"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC",expression:"'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC'"}]})]),r("v-text-field",{staticClass:"mx-3",attrs:{"append-icon":"mic",flat:"",label:"Search","prepend-inner-icon":"search","solo-inverted":""}}),r("div",{staticClass:"user-avatar"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAkFBMVEUAAABiYmJoaGhxcXFwcHBwcHBycnJwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBzc3NycnJwcHB2dnZwcHBwcHBxcXFwcHBwcHBwcHBwcHBwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBnZ2dwcHC6NtRcAAAAMHRSTlMAAwoXHycsRXWfxdzz+jB+vv8ljv/+72HU682aahOXTQ+wNblUtazlb1elWuE7B4ObTEwxAAADdklEQVR4AZWWh5rqOgyEnd7LEA2k0Os24P3f7vLdBVOSTTizBbfflmVZWHXJUBeZlu24rmNbpm56U5bnB2EUJ0kchYHvWep9pVke40FxnqX9hLZ4VEQQgEk8vihOCAiiYnTpHGKNSQmAVd1MvdRxUm/a1BUBlJNLZz87mycAo2axNHTjctFEBJL5rI82lL0SYjxfX+sX/ZbW8zEoK1sZPexGiHL7cDa6uC1B2XTQ2uaVEDv3idS8uwNl9bflhRB7q7vbUNYelOKvhRck8g5W0znIhTI6+2rwsO5zyfpA1N2zfwg5Ub2akPLR6a0I2Jn9J2nugKjLZ5/s3FDLLfxUba0guTUYgLlg1e6wIkg2HPqZIJq1DRpj3Gu1HlbpYbrVT6QcDcOjWpKPFlxAclMNyswFRQv+ElmpN7QS+WrBe5H9kNV6XP/Kre5HuL3yHLIx1LB2gnkLzii1peuW9RwES10KhVkL/o5x8G6tXlnq8kXTn91vCjHU8Ufi75Zv3AMwvbUWIuFSGbebWIlsr+UpcXBVSyHk6zbjBGRxO3UnB+PrPT99CULVVkZU66txy42Q+/X/w7c1KGdtBJh1wE6lM5Sh0lKIn+Dbm+5iEF+3O1wIK0d1aA6Oj7ddpzkAxuMEv9le/bprTDSdsZNWxEanCescERAgCSeXputuwCrtjsMMRHEZdI2p1N/XUdhMLB1lBYjsrzSxAZk9BOPSSUfGfTaflFyb1kqtEZhkevjvqNv/U5YQUU9qXlQgG/s+n6GH2gGIaqF6tD2ACL/NVg74DEEctqpXXg0i3kxe5lzFIGpPDcgJElA4ffouiYVIAkcN6vRdM0HsKkP7MUHC8PvUz11d3JDE8Q57QrL47Rt4DB2bmMRudoetXMi4OQ4+h2b+Dwis7Ke7vieIH3/Zz7orgizPs5eT8ksS3Lt97LEE8XN+fa9dKs75AKI89rCREJujemavVS8HJTr+FdpuKUQwa6FX3ArAru8znXtQmH8/aMwClFX3gDOI5tT3oDk1IM6dG44fEknPjY+7nLbDLXuqvscUsGs3b2NtUR+dgfG2tcRe9PusD7ZLyKplzw94VidjSKoAfvTurrAPRLZ6Q3YE+C8WBoLQHjmjATkjO4QEL8EVgUn1lhKidJXxAC9A4k2RWDzBn5LwPSVkIp9Pm16m7j8ovWaF/wCc31NtcLeHeAAAAABJRU5ErkJggg==",expression:"'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAkFBMVEUAAABiYmJoaGhxcXFwcHBwcHBycnJwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBzc3NycnJwcHB2dnZwcHBwcHBxcXFwcHBwcHBwcHBwcHBwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBnZ2dwcHC6NtRcAAAAMHRSTlMAAwoXHycsRXWfxdzz+jB+vv8ljv/+72HU682aahOXTQ+wNblUtazlb1elWuE7B4ObTEwxAAADdklEQVR4AZWWh5rqOgyEnd7LEA2k0Os24P3f7vLdBVOSTTizBbfflmVZWHXJUBeZlu24rmNbpm56U5bnB2EUJ0kchYHvWep9pVke40FxnqX9hLZ4VEQQgEk8vihOCAiiYnTpHGKNSQmAVd1MvdRxUm/a1BUBlJNLZz87mycAo2axNHTjctFEBJL5rI82lL0SYjxfX+sX/ZbW8zEoK1sZPexGiHL7cDa6uC1B2XTQ2uaVEDv3idS8uwNl9bflhRB7q7vbUNYelOKvhRck8g5W0znIhTI6+2rwsO5zyfpA1N2zfwg5Ub2akPLR6a0I2Jn9J2nugKjLZ5/s3FDLLfxUba0guTUYgLlg1e6wIkg2HPqZIJq1DRpj3Gu1HlbpYbrVT6QcDcOjWpKPFlxAclMNyswFRQv+ElmpN7QS+WrBe5H9kNV6XP/Kre5HuL3yHLIx1LB2gnkLzii1peuW9RwES10KhVkL/o5x8G6tXlnq8kXTn91vCjHU8Ufi75Zv3AMwvbUWIuFSGbebWIlsr+UpcXBVSyHk6zbjBGRxO3UnB+PrPT99CULVVkZU66txy42Q+/X/w7c1KGdtBJh1wE6lM5Sh0lKIn+Dbm+5iEF+3O1wIK0d1aA6Oj7ddpzkAxuMEv9le/bprTDSdsZNWxEanCescERAgCSeXputuwCrtjsMMRHEZdI2p1N/XUdhMLB1lBYjsrzSxAZk9BOPSSUfGfTaflFyb1kqtEZhkevjvqNv/U5YQUU9qXlQgG/s+n6GH2gGIaqF6tD2ACL/NVg74DEEctqpXXg0i3kxe5lzFIGpPDcgJElA4ffouiYVIAkcN6vRdM0HsKkP7MUHC8PvUz11d3JDE8Q57QrL47Rt4DB2bmMRudoetXMi4OQ4+h2b+Dwis7Ke7vieIH3/Zz7orgizPs5eT8ksS3Lt97LEE8XN+fa9dKs75AKI89rCREJujemavVS8HJTr+FdpuKUQwa6FX3ArAru8znXtQmH8/aMwClFX3gDOI5tT3oDk1IM6dG44fEknPjY+7nLbDLXuqvscUsGs3b2NtUR+dgfG2tcRe9PusD7ZLyKplzw94VidjSKoAfvTurrAPRLZ6Q3YE+C8WBoLQHjmjATkjO4QEL8EVgUn1lhKidJXxAC9A4k2RWDzBn5LwPSVkIp9Pm16m7j8ovWaF/wCc31NtcLeHeAAAAABJRU5ErkJggg=='"}],attrs:{alt:""}})])],1),r("v-tabs-items",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.apis,function(t,e){return r("home-tabs",{key:e,attrs:{className:"card"+(e+1),apiUrl:t}})}),1),r("div",{staticClass:"back-top",on:{click:t.backTop}},[r("img",{attrs:{src:n("6fc9"),alt:""}})])],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-container"},[n("v-tab-item",[n("v-card",{staticClass:"component-list-main",class:t.className},t._l(t.sections,function(e,r){return n("div",{key:r},["gallery"==e.view_type?n("Carousel",{attrs:{items:e.body.items}}):"cells_auto_fill"==e.view_type?n("div",{class:[e.view_type,"multi_cell"],style:{width:e.body.w/100+"rem",height:e.body.h/100+"rem"}},t._l(e.body.items,function(t,e){return n("a",{key:e,staticClass:"items",style:{width:t.w/100+"rem",height:t.h/100+"rem",left:t.x/100+"rem",top:t.y/100+"rem"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img_url,expression:"item.img_url"}],attrs:{alt:""}})])}),0):"divider_line"==e.view_type?n("div",{style:{height:e.body.line_height/100+"rem",borderBottom:e.body.line_height/100+"rem solid "+e.body.line_color,backgroundColor:e.body.line_color}}):"list_one_type14"==e.view_type?n("div",{class:[e.view_type,"box-flex"],style:{backgroundColor:e.body.bg_color}},t._l(e.body.items,function(e,r){return n("a",{key:r,staticClass:"exposure item",on:{click:function(n){return t.toDetail(e)}}},[n("div",{staticClass:"img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img_url,expression:"item.img_url"}],style:{width:"6.96rem",height:"4.36rem"},attrs:{alt:""}})])])}),0):"list_two_type13"==e.view_type?n("div",{class:[e.view_type,"box-flex"],style:{backgroundColor:e.body.bg_color}},t._l(e.body.items,function(e,r){return n("a",{key:r,staticClass:"exposure item",on:{click:function(n){return t.toDetail(e)}}},[n("div",{staticClass:"img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img_url,expression:"item.img_url"}],style:{width:"3.44rem",height:"2.8rem"},attrs:{alt:""}})]),n("div",{staticClass:"info bgw align-center"},[n("div",{staticClass:"name"},[t._v(t._s(e.product_name))]),n("div",{staticClass:"brief"},[t._v(t._s(e.product_brief))]),n("div",{staticClass:"price"},[t._v("\n                "+t._s(e.product_price)+"\n                "),n("span",{staticStyle:{"font-size":".2rem"}},[t._v("\n                  "+t._s(e.show_price_qi?"起":"")+"\n                ")]),e.product_price<e.product_org_price?n("span",{staticClass:"price old"},[n("s",[t._v(t._s(e.product_org_price))])]):t._e()]),n("div",{staticClass:"buybtn mauto"},[t._v(" 立即购买")])])])}),0):"list_two_type1"==e.view_type?n("div",{staticClass:"list_two_type1 box-flex",style:{backgroundColor:e.body.bg_color}},t._l(e.body.items,function(e,r){return n("a",{key:r,staticClass:"exposure item",on:{click:function(n){return t.toDetail(e)}}},[n("div",{staticClass:"img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img_url,expression:"item.img_url"}],staticClass:"big",staticStyle:{width:"3.6rem",height:"3.6rem"}})]),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v(t._s(e.product_name))]),n("div",{staticClass:"brief"},[t._v(t._s(e.product_brief))]),n("div",{staticClass:"price"},[t._v("\n                "+t._s(e.product_price)+"\n                "),e.product_price<e.product_org_price?n("span",{staticClass:"price old"},[n("s",[t._v(t._s(e.product_org_price))])]):t._e()])])])}),0):"list_three_type4"==e.view_type?n("div",{class:e.view_type,style:{backgroundColor:e.body.bg_color}},[n("div",{staticClass:"goods-list"},t._l(e.body.items,function(e,r){return n("a",{key:r,staticClass:"exposure item item-xs",on:{click:function(n){return t.toDetail(e)}}},[n("div",{staticClass:"img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img_url,expression:"item.img_url"}],staticClass:"big",staticStyle:{width:"2.21rem",height:"2.21rem"}})]),n("div",{staticClass:"info-box"},[n("div",{staticClass:"text"},[n("div",{staticClass:"name"},[t._v(t._s(e.product_name))]),n("div",{staticClass:"brief"},[t._v(t._s(e.product_brief))]),n("div",{staticClass:"price",staticStyle:{color:"rgb(245, 75, 75)"}},[t._v(t._s(e.product_price))])])])])}),0)]):t._e()],1)}),0)],1)],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-carousel",on:{touchstart:function(t){t.stopPropagation()},touchmove:function(t){t.stopPropagation()},touchend:function(t){t.stopPropagation()}}},[n("v-carousel",{attrs:{height:"3.66rem",interval:"3000",cycle:"","hide-delimiter-background":"","hide-controls":""}},t._l(t.items,function(t,e){return n("v-carousel-item",{key:e,attrs:{height:"3.66rem",src:t.img_url}})}),1)],1)},o=[],l={data:function(){return{}},props:["items"]},u=l,d=(n("8cf1"),n("2877")),m=Object(d["a"])(u,s,o,!1,null,null,null),f=m.exports,v={data:function(){return{items:[],cells_auto_fill:null,divider_line:null,list_two_type13:null,list_two_type1:null,list_one_type14:null,list_three_type4:null,sections:[]}},components:{Carousel:f},props:["className","apiUrl"],created:function(){var t=this;this.axios({method:"get",url:"/api/home/".concat(this.apiUrl,".json")}).then(function(e){if("ok"==e.data.result){var n=e.data.data.data.sections;t.sections=n}}).catch(function(t){console.log("err"+t)})},methods:{toDetail:function(t){this.$router.push({name:"detail",params:{id:t.action.path,name:t.product_name,price:t.product_price,imgurl:t.img_url}})}}},p=v,h=(n("be00"),Object(d["a"])(p,i,c,!1,null,null,null)),g=h.exports,b={components:{HomeTabs:g},data:function(){return{tabs:[],apis:["recommend","phone","smart","tv","computer","appliance","periphery"],active:null}},created:function(){var t=this;this.axios.get("/api/home/tabs.json").then(function(e){"ok"==e.data.result&&(t.tabs=e.data.data.tabs)})},activated:function(){window.addEventListener("scroll",this.scrollEvent)},deactivated:function(){window.removeEventListener("scroll",this.scrollEvent)},methods:{backTop:function(){document.body.scrollIntoView({block:"start",behavior:"auto"})},scrollEvent:function(){var t=document.querySelector(".nav-header").getBoundingClientRect().top;document.querySelector(".back-top").style.display=t<-800?"block":"none"}}},w=b,A=(n("866d"),Object(d["a"])(w,r,a,!1,null,"cb3575ae",null));e["default"]=A.exports},d412:function(t,e,n){t.exports=n.p+"img/loading.91e34c65.svg"},dd90:function(t,e,n){},e96e:function(t,e,n){"use strict";var r=n("5494"),a=n.n(r);a.a},ec3e:function(t,e,n){"use strict";var r=n("4ba6"),a=n.n(r);a.a},fd13:function(t,e,n){}});
//# sourceMappingURL=app.03083928.js.map