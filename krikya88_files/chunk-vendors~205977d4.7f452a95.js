(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~205977d4"],{"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.0.7
  * (c) 2019 Evan You
  * @license MIT
  */function r(t,e){0}function o(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function i(t,e){for(var n in e)t[n]=e[n];return t}var a={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,a=e.data;a.routerView=!0;var s=o.$createElement,c=n.name,p=o.$route,f=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;while(o&&o._routerRoot!==o){var d=o.$vnode&&o.$vnode.data;d&&(d.routerView&&h++,d.keepAlive&&o._inactive&&(l=!0)),o=o.$parent}if(a.routerViewDepth=h,l)return s(f[c],a,r);var y=p.matched[h];if(!y)return f[c]=null,s();var v=f[c]=y.components[c];a.registerRouteInstance=function(t,e){var n=y.instances[c];(e&&n!==t||!e&&n===t)&&(y.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){y.instances[c]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==y.instances[c]&&(y.instances[c]=t.componentInstance)};var m=a.props=u(p,y.props&&y.props[c]);if(m){m=a.props=i({},m);var g=a.attrs=a.attrs||{};for(var b in m)v.props&&b in v.props||(g[b]=m[b],delete m[b])}return s(v,a,r)}};function u(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}var s=/[!'()*]/g,c=function(t){return"%"+t.charCodeAt(0).toString(16)},p=/%2C/g,f=function(t){return encodeURIComponent(t).replace(s,c).replace(p,",")},h=decodeURIComponent;function l(t,e,n){void 0===e&&(e={});var r,o=n||d;try{r=o(t||"")}catch(a){r={}}for(var i in e)r[i]=e[i];return r}function d(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=h(n.shift()),o=n.length>0?h(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]})),e):e}function y(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return f(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(f(e)):r.push(f(e)+"="+f(t)))})),r.join("&")}return f(e)+"="+f(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var v=/\/?$/;function m(t,e,n,r){var o=r&&r.options.stringifyQuery,i=e.query||{};try{i=g(i)}catch(u){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:x(e,o),matched:t?w(t):[]};return n&&(a.redirectedFrom=x(n,o)),Object.freeze(a)}function g(t){if(Array.isArray(t))return t.map(g);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=g(t[n]);return e}return t}var b=m(null,{path:"/"});function w(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function x(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash;void 0===o&&(o="");var i=e||y;return(n||"/")+i(r)+o}function k(t,e){return e===b?t===e:!!e&&(t.path&&e.path?t.path.replace(v,"")===e.path.replace(v,"")&&t.hash===e.hash&&_(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&_(t.query,e.query)&&_(t.params,e.params)))}function _(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every((function(n){var r=t[n],o=e[n];return"object"===typeof r&&"object"===typeof o?_(r,o):String(r)===String(o)}))}function R(t,e){return 0===t.path.replace(v,"/").indexOf(e.path.replace(v,"/"))&&(!e.hash||t.hash===e.hash)&&C(t.query,e.query)}function C(t,e){for(var n in e)if(!(n in t))return!1;return!0}var E,O=[String,Object],A=[String,Array],$={name:"RouterLink",props:{to:{type:O,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:A,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),a=o.location,u=o.route,s=o.href,c={},p=n.options.linkActiveClass,f=n.options.linkExactActiveClass,h=null==p?"router-link-active":p,l=null==f?"router-link-exact-active":f,d=null==this.activeClass?h:this.activeClass,y=null==this.exactActiveClass?l:this.exactActiveClass,v=a.path?m(null,a,null,n):u;c[y]=k(r,v),c[d]=this.exact?c[y]:R(r,v);var g=function(t){j(t)&&(e.replace?n.replace(a):n.push(a))},b={click:j};Array.isArray(this.event)?this.event.forEach((function(t){b[t]=g})):b[this.event]=g;var w={class:c};if("a"===this.tag)w.on=b,w.attrs={href:s};else{var x=T(this.$slots.default);if(x){x.isStatic=!1;var _=x.data=i({},x.data);_.on=b;var C=x.data.attrs=i({},x.data.attrs);C.href=s}else w.on=b}return t(this.tag,w,this.$slots.default)}};function j(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function T(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=T(e.children)))return e}}function S(t){if(!S.installed||E!==t){S.installed=!0,E=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",a),t.component("RouterLink",$);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var q="undefined"!==typeof window;function L(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function P(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function I(t){return t.replace(/\/\//g,"/")}var U=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},B=rt,M=D,V=N,z=Q,F=nt,H=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function D(t,e){var n,r=[],o=0,i=0,a="",u=e&&e.delimiter||"/";while(null!=(n=H.exec(t))){var s=n[0],c=n[1],p=n.index;if(a+=t.slice(i,p),i=p+s.length,c)a+=c[1];else{var f=t[i],h=n[2],l=n[3],d=n[4],y=n[5],v=n[6],m=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===v||"*"===v,w="?"===v||"*"===v,x=n[2]||u,k=d||y;r.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:k?Y(k):m?".*":"[^"+X(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function N(t,e){return Q(D(t,e))}function J(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function K(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function Q(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},u=a.pretty?J:encodeURIComponent,s=0;s<t.length;s++){var c=t[s];if("string"!==typeof c){var p,f=i[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(U(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[s].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?K(f):u(f),!e[s].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}function X(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Y(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function W(t,e){return t.keys=e,t}function G(t){return t.sensitive?"":"i"}function Z(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return W(t,e)}function tt(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(rt(t[o],e,n).source);var i=new RegExp("(?:"+r.join("|")+")",G(n));return W(i,e)}function et(t,e,n){return nt(D(t,n),e,n)}function nt(t,e,n){U(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"===typeof u)i+=X(u);else{var s=X(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")",i+=c}}var p=X(n.delimiter||"/"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+p+"|$)",W(new RegExp("^"+i,G(n)),e)}function rt(t,e,n){return U(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?Z(t,e):U(t)?tt(t,e,n):et(t,e,n)}B.parse=M,B.compile=V,B.tokensToFunction=z,B.tokensToRegExp=F;var ot=Object.create(null);function it(t,e,n){e=e||{};try{var r=ot[t]||(ot[t]=B.compile(t));return e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(o){return""}finally{delete e[0]}}function at(t,e,n,r){var o=e||[],i=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){ut(o,i,a,t)}));for(var u=0,s=o.length;u<s;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),s--,u--);return{pathList:o,pathMap:i,nameMap:a}}function ut(t,e,n,r,o,i){var a=r.path,u=r.name;var s=r.pathToRegexpOptions||{},c=ct(a,o,s.strict);"boolean"===typeof r.caseSensitive&&(s.sensitive=r.caseSensitive);var p={path:c,regex:st(c,s),components:r.components||{default:r.component},instances:{},name:u,parent:o,matchAs:i,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var o=i?I(i+"/"+r.path):void 0;ut(t,e,n,r,p,o)})),void 0!==r.alias){var f=Array.isArray(r.alias)?r.alias:[r.alias];f.forEach((function(i){var a={path:i,children:r.children};ut(t,e,n,a,o,p.path||"/")}))}e[p.path]||(t.push(p.path),e[p.path]=p),u&&(n[u]||(n[u]=p))}function st(t,e){var n=B(t,[],e);return n}function ct(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]?t:null==e?t:I(e.path+"/"+t)}function pt(t,e,n,r){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name)return i({},t);if(!o.path&&o.params&&e){o=i({},o),o._normalized=!0;var a=i(i({},e.params),o.params);if(e.name)o.name=e.name,o.params=a;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;o.path=it(u,a,"path "+e.path)}else 0;return o}var s=P(o.path||""),c=e&&e.path||"/",p=s.path?L(s.path,c,n||o.append):c,f=l(s.query,o.query,r&&r.options.parseQuery),h=o.hash||s.hash;return h&&"#"!==h.charAt(0)&&(h="#"+h),{_normalized:!0,path:p,query:f,hash:h}}function ft(t,e){var n=at(t),r=n.pathList,o=n.pathMap,i=n.nameMap;function a(t){at(t,r,o,i)}function u(t,n,a){var u=pt(t,n,!1,e),s=u.name;if(s){var c=i[s];if(!c)return p(null,u);var f=c.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof u.params&&(u.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in u.params)&&f.indexOf(h)>-1&&(u.params[h]=n.params[h]);return u.path=it(c.path,u.params,'named route "'+s+'"'),p(c,u,a)}if(u.path){u.params={};for(var l=0;l<r.length;l++){var d=r[l],y=o[d];if(ht(y.regex,u.path,u.params))return p(y,u,a)}}return p(null,u)}function s(t,n){var r=t.redirect,o="function"===typeof r?r(m(t,n,null,e)):r;if("string"===typeof o&&(o={path:o}),!o||"object"!==typeof o)return p(null,n);var a=o,s=a.name,c=a.path,f=n.query,h=n.hash,l=n.params;if(f=a.hasOwnProperty("query")?a.query:f,h=a.hasOwnProperty("hash")?a.hash:h,l=a.hasOwnProperty("params")?a.params:l,s){i[s];return u({_normalized:!0,name:s,query:f,hash:h,params:l},void 0,n)}if(c){var d=lt(c,t),y=it(d,l,'redirect route with path "'+d+'"');return u({_normalized:!0,path:y,query:f,hash:h},void 0,n)}return p(null,n)}function c(t,e,n){var r=it(n,e.params,'aliased route with path "'+n+'"'),o=u({_normalized:!0,path:r});if(o){var i=o.matched,a=i[i.length-1];return e.params=o.params,p(a,e)}return p(null,e)}function p(t,n,r){return t&&t.redirect?s(t,r||n):t&&t.matchAs?c(t,n,t.matchAs):m(t,n,r,e)}return{match:u,addRoutes:a}}function ht(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var o=1,i=r.length;o<i;++o){var a=t.keys[o-1],u="string"===typeof r[o]?decodeURIComponent(r[o]):r[o];a&&(n[a.name||"pathMatch"]=u)}return!0}function lt(t,e){return L(t,e.parent?e.parent.path:"/",!0)}var dt=Object.create(null);function yt(){var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,"");window.history.replaceState({key:$t()},"",e),window.addEventListener("popstate",(function(t){mt(),t.state&&t.state.key&&jt(t.state.key)}))}function vt(t,e,n,r){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=gt(),a=o.call(t,e,n,r?i:null);a&&("function"===typeof a.then?a.then((function(t){Rt(t,i)})).catch((function(t){0})):Rt(a,i))}))}}function mt(){var t=$t();t&&(dt[t]={x:window.pageXOffset,y:window.pageYOffset})}function gt(){var t=$t();if(t)return dt[t]}function bt(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-r.left-e.x,y:o.top-r.top-e.y}}function wt(t){return _t(t.x)||_t(t.y)}function xt(t){return{x:_t(t.x)?t.x:window.pageXOffset,y:_t(t.y)?t.y:window.pageYOffset}}function kt(t){return{x:_t(t.x)?t.x:0,y:_t(t.y)?t.y:0}}function _t(t){return"number"===typeof t}function Rt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=document.querySelector(t.selector);if(r){var o=t.offset&&"object"===typeof t.offset?t.offset:{};o=kt(o),e=bt(r,o)}else wt(t)&&(e=xt(t))}else n&&wt(t)&&(e=xt(t));e&&window.scrollTo(e.x,e.y)}var Ct=q&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),Et=q&&window.performance&&window.performance.now?window.performance:Date,Ot=At();function At(){return Et.now().toFixed(3)}function $t(){return Ot}function jt(t){Ot=t}function Tt(t,e){mt();var n=window.history;try{e?n.replaceState({key:Ot},"",t):(Ot=At(),n.pushState({key:Ot},"",t))}catch(r){window.location[e?"replace":"assign"](t)}}function St(t){Tt(t,!0)}function qt(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],(function(){r(o+1)})):r(o+1)};r(0)}function Lt(t){return function(e,n,r){var i=!1,a=0,u=null;Pt(t,(function(t,e,n,s){if("function"===typeof t&&void 0===t.cid){i=!0,a++;var c,p=Mt((function(e){Bt(e)&&(e=e.default),t.resolved="function"===typeof e?e:E.extend(e),n.components[s]=e,a--,a<=0&&r()})),f=Mt((function(t){var e="Failed to resolve async component "+s+": "+t;u||(u=o(t)?t:new Error(e),r(u))}));try{c=t(p,f)}catch(l){f(l)}if(c)if("function"===typeof c.then)c.then(p,f);else{var h=c.component;h&&"function"===typeof h.then&&h.then(p,f)}}})),i||r()}}function Pt(t,e){return It(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function It(t){return Array.prototype.concat.apply([],t)}var Ut="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Bt(t){return t.__esModule||Ut&&"Module"===t[Symbol.toStringTag]}function Mt(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var Vt=function(t,e){this.router=t,this.base=zt(e),this.current=b,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};function zt(t){if(!t)if(q){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function Ft(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function Ht(t,e,n,r){var o=Pt(t,(function(t,r,o,i){var a=Dt(t,e);if(a)return Array.isArray(a)?a.map((function(t){return n(t,r,o,i)})):n(a,r,o,i)}));return It(r?o.reverse():o)}function Dt(t,e){return"function"!==typeof t&&(t=E.extend(t)),t.options[e]}function Nt(t){return Ht(t,"beforeRouteLeave",Kt,!0)}function Jt(t){return Ht(t,"beforeRouteUpdate",Kt)}function Kt(t,e){if(e)return function(){return t.apply(e,arguments)}}function Qt(t,e,n){return Ht(t,"beforeRouteEnter",(function(t,r,o,i){return Xt(t,o,i,e,n)}))}function Xt(t,e,n,r,o){return function(i,a,u){return t(i,a,(function(t){"function"===typeof t&&r.push((function(){Yt(t,e.instances,n,o)})),u(t)}))}}function Yt(t,e,n,r){e[n]&&!e[n]._isBeingDestroyed?t(e[n]):r()&&setTimeout((function(){Yt(t,e,n,r)}),16)}Vt.prototype.listen=function(t){this.cb=t},Vt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Vt.prototype.onError=function(t){this.errorCbs.push(t)},Vt.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,(function(){r.updateRoute(o),e&&e(o),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach((function(t){t(o)})))}),(function(t){n&&n(t),t&&!r.ready&&(r.ready=!0,r.readyErrorCbs.forEach((function(e){e(t)})))}))},Vt.prototype.confirmTransition=function(t,e,n){var i=this,a=this.current,u=function(t){o(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):(r(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)};if(k(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),u();var s=Ft(this.current.matched,t.matched),c=s.updated,p=s.deactivated,f=s.activated,h=[].concat(Nt(p),this.router.beforeHooks,Jt(c),f.map((function(t){return t.beforeEnter})),Lt(f));this.pending=t;var l=function(e,n){if(i.pending!==t)return u();try{e(t,a,(function(t){!1===t||o(t)?(i.ensureURL(!0),u(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(u(),"object"===typeof t&&t.replace?i.replace(t):i.push(t)):n(t)}))}catch(r){u(r)}};qt(h,l,(function(){var n=[],r=function(){return i.current===t},o=Qt(f,n,r),a=o.concat(i.router.resolveHooks);qt(a,l,(function(){if(i.pending!==t)return u();i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){n.forEach((function(t){t()}))}))}))}))},Vt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach((function(n){n&&n(t,e)}))};var Wt=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior,i=Ct&&o;i&&yt();var a=Gt(this.base);window.addEventListener("popstate",(function(t){var n=r.current,o=Gt(r.base);r.current===b&&o===a||r.transitionTo(o,(function(t){i&&vt(e,t,n,!0)}))}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,(function(t){Tt(I(r.base+t.fullPath)),vt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,(function(t){St(I(r.base+t.fullPath)),vt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(Gt(this.base)!==this.current.fullPath){var e=I(this.base+this.current.fullPath);t?Tt(e):St(e)}},e.prototype.getCurrentLocation=function(){return Gt(this.base)},e}(Vt);function Gt(t){var e=decodeURI(window.location.pathname);return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Zt=function(t){function e(e,n,r){t.call(this,e,n),r&&te(this.base)||ee()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router,n=e.options.scrollBehavior,r=Ct&&n;r&&yt(),window.addEventListener(Ct?"popstate":"hashchange",(function(){var e=t.current;ee()&&t.transitionTo(ne(),(function(n){r&&vt(t.router,n,e,!0),Ct||ie(n.fullPath)}))}))},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,(function(t){oe(t.fullPath),vt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,(function(t){ie(t.fullPath),vt(r.router,t,i,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ne()!==e&&(t?oe(e):ie(e))},e.prototype.getCurrentLocation=function(){return ne()},e}(Vt);function te(t){var e=Gt(t);if(!/^\/#/.test(e))return window.location.replace(I(t+"/#"+e)),!0}function ee(){var t=ne();return"/"===t.charAt(0)||(ie("/"+t),!1)}function ne(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";t=t.slice(e+1);var n=t.indexOf("?");if(n<0){var r=t.indexOf("#");t=r>-1?decodeURI(t.slice(0,r))+t.slice(r):decodeURI(t)}else n>-1&&(t=decodeURI(t.slice(0,n))+t.slice(n));return t}function re(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function oe(t){Ct?Tt(re(t)):window.location.hash=t}function ie(t){Ct?St(re(t)):window.location.replace(re(t))}var ae=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){e.index=n,e.updateRoute(r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Vt),ue=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ft(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Ct&&!1!==t.fallback,this.fallback&&(e="hash"),q||(e="abstract"),this.mode=e,e){case"history":this.history=new Wt(this,t.base);break;case"hash":this.history=new Zt(this,t.base,this.fallback);break;case"abstract":this.history=new ae(this,t.base);break;default:0}},se={currentRoute:{configurable:!0}};function ce(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function pe(t,e,n){var r="hash"===n?"#"+e:e;return t?I(t+"/"+r):r}ue.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},se.currentRoute.get=function(){return this.history&&this.history.current},ue.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null)})),!this.app){this.app=t;var n=this.history;if(n instanceof Wt)n.transitionTo(n.getCurrentLocation());else if(n instanceof Zt){var r=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},ue.prototype.beforeEach=function(t){return ce(this.beforeHooks,t)},ue.prototype.beforeResolve=function(t){return ce(this.resolveHooks,t)},ue.prototype.afterEach=function(t){return ce(this.afterHooks,t)},ue.prototype.onReady=function(t,e){this.history.onReady(t,e)},ue.prototype.onError=function(t){this.history.onError(t)},ue.prototype.push=function(t,e,n){this.history.push(t,e,n)},ue.prototype.replace=function(t,e,n){this.history.replace(t,e,n)},ue.prototype.go=function(t){this.history.go(t)},ue.prototype.back=function(){this.go(-1)},ue.prototype.forward=function(){this.go(1)},ue.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},ue.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=pt(t,e,n,this),o=this.match(r,e),i=o.redirectedFrom||o.fullPath,a=this.history.base,u=pe(a,i,this.mode);return{location:r,route:o,href:u,normalizedTo:r,resolved:o}},ue.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==b&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(ue.prototype,se),ue.install=S,ue.version="3.0.7",q&&window.Vue&&window.Vue.use(ue),e["a"]=ue},dfcf:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},o=[],i=(n("a9e3"),n("ca00")),a=n.n(i),u={props:{text:{type:String,required:!0},size:{type:Number,required:!1,default:256},color:{type:String,required:!1,default:"#000"},bgColor:{type:String,required:!1,default:"#FFF"},errorLevel:{type:String,validator:function(t){return"L"===t||"M"===t||"Q"===t||"H"===t},required:!1,default:"H"}},watch:{text:function(){this.clear(),this.makeCode(this.text)}},data:function(){return{qrCode:{}}},mounted:function(){this.qrCode=new a.a(this.$el,{text:this.text,width:this.size,height:this.size,colorDark:this.color,colorLight:this.bgColor,correctLevel:a.a.CorrectLevel[this.errorLevel]})},methods:{clear:function(){this.qrCode.clear()},makeCode:function(t){this.qrCode.makeCode(t)}}},s=u,c=n("2877"),p=Object(c["a"])(s,r,o,!1,null,null,null);e["a"]=p.exports},f24a:function(t,e,n){"use strict";(function(t){var r=n("a06b"),o=n.n(r),i={props:{options:{type:Object,default:function(){return{}}},autoPlay:{type:Boolean,default:!1},playDuration:{type:Number,default:6e3},current:{type:Number,default:0},ready:{type:Boolean,default:!0}},data:function(){return{playing:this.autoPlay,time:this.playDuration}},mounted:function(){this.ready&&this.init()},beforeDestroy:function(){this.playing&&clearInterval(this.$options.play_timer),this.destroy()},methods:{init:function(){var t=this;this.$nextTick((function(){void 0===t.options&&(t.options={}),t.options.selector=t.$el,t.options.onInit=function(){t.$emit("init")},t.options.onChange=function(){t.$emit("update:current",t.siema.currentSlide),t.playing&&(clearTimeout(t.$options.play_timer),t.$options.play_timer=setTimeout((function(){t.siema.next()}),t.time)),t.$emit("change")},t.playing&&t.play(t.time),t.siema=new o.a(t.options)}))},prev:function(t,e){this.siema.prev(t,e)},next:function(t,e){this.siema.next(t,e)},goTo:function(t,e){this.siema.goTo(t,e)},remove:function(t,e){this.siema.remove(t,e)},insert:function(t,e,n){this.siema.insert(t,e,n)},prepend:function(t,e){this.siema.prepend(t,e)},append:function(t,e){this.siema.append(t,e)},destroy:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments[1];this.siema.destroy(t,e)},play:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e3;this.time=e,this.playing=!0,this.$options.play_timer=setTimeout((function(){t.siema.next()}),e),this.$emit("update:playing",!0)},stop:function(){this.playing=!1,clearTimeout(this.$options.play_timer),this.$emit("update:playing",!1)}}},a=i,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},s=[];u._withStripped=!0;var c="undefined"!==typeof u?{render:u,staticRenderFns:s}:{},p=void 0,f=void 0,h=void 0,l=!1;function d(t,e,n,r,o,i,a,u){var s=("function"===typeof n?n.options:n)||{};return s.__file="/srv/core/vue2-siema/src/components/siema.vue",s.render||(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0,o&&(s.functional=!0)),s._scopeId=r,s}function y(){var t=document.head||document.getElementsByTagName("head")[0],e=y.styles||(y.styles={}),n="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,o){if(!document.querySelector('style[data-vue-ssr-id~="'+r+'"]')){var i=n?o.media||"default":r,a=e[i]||(e[i]={ids:[],parts:[],element:void 0});if(!a.ids.includes(r)){var u=o.source,s=a.ids.length;if(a.ids.push(r),n&&(a.element=a.element||document.querySelector("style[data-group="+i+"]")),!a.element){var c=a.element=document.createElement("style");c.type="text/css",o.media&&c.setAttribute("media",o.media),n&&(c.setAttribute("data-group",i),c.setAttribute("data-next-index","0")),t.appendChild(c)}if(n&&(s=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",s+1)),a.element.styleSheet)a.parts.push(u),a.element.styleSheet.cssText=a.parts.filter(Boolean).join("\n");else{var p=document.createTextNode(u),f=a.element.childNodes;f[s]&&a.element.removeChild(f[s]),f.length?a.element.insertBefore(p,f[s]):a.element.appendChild(p)}}}}}var v=d(c,p,"undefined"===typeof a?{}:a,f,l,h,"undefined"!==typeof y?y:function(){},"undefined"!==typeof __vue_create_injector_ssr__?__vue_create_injector_ssr__:function(){});function m(t){t.component("siema",v)}var g={version:"0.2.2",install:m},b=null;"undefined"!==typeof window?b=window.Vue:"undefined"!==typeof t&&(b=t.Vue),b&&b.use(g),e["a"]=g}).call(this,n("24aa"))}}]);
//# sourceMappingURL=chunk-vendors~205977d4.7f452a95.js.map