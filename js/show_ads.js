(function(sttc){'use strict';var aa={};/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var l=this||self;function ba(a,b){a:{var c=["CLOSURE_FLAGS"];for(var d=l,f=0;f<c.length;f++)if(d=d[c[f]],null==d){c=null;break a}c=d}a=c&&c[a];return null!=a?a:b}function ca(a){return a};function da(a){l.setTimeout(()=>{throw a;},0)};var ea=ba(610401301,!1),fa=ba(572417392,ba(1,!0));var m;const ha=l.navigator;m=ha?ha.userAgentData||null:null;function ia(a){return ea?m?m.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function u(a){var b;a:{if(b=l.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function v(){return ea?!!m&&0<m.brands.length:!1}function ja(){!u("Safari")||ka()||(v()?0:u("Coast"))||(v()?0:u("Opera"))||(v()?0:u("Edge"))||(v()?ia("Microsoft Edge"):u("Edg/"))||v()&&ia("Opera")}function ka(){return v()?ia("Chromium"):(u("Chrome")||u("CriOS"))&&!(v()?0:u("Edge"))||u("Silk")};function la(a){la[" "](a);return a}la[" "]=function(){};var ma=v()?!1:u("Trident")||u("MSIE");!u("Android")||ka();ka();ja();var na=!fa;let oa=!fa;let pa=0,qa=0;function ra(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);if(b){b=c;c=~a;b?b=~b+1:c+=1;const [d,f]=[b,c];a=f;c=d}pa=c>>>0;qa=a>>>0}function sa(){var a=pa,b=qa;if(b&2147483648)var c=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0));else b>>>=0,a>>>=0,2097151>=b?c=""+(4294967296*b+a):c=""+(BigInt(b)<<BigInt(32)|BigInt(a));return c};const z=Symbol();function ta(){var a=[];a[z]|=1;return a}function ua(a,b){b[z]=(a|34)&-14557}function va(a){a=a>>14&1023;return 0===a?536870912:a};var wa={},xa={};function Ba(a){return!(!a||"object"!==typeof a||a.I!==xa)}function B(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let Ca=!fa;function Da(a,b,c){if(!Array.isArray(a)||a.length)return!1;const d=a[z]|0;if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;a[z]=d|1;return!0}const Ea=[];Ea[z]=55;Object.freeze(Ea);function D(a){if(a&2)throw Error();};function Fa(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b};let E;function Ga(a){if(E)throw Error("");E=a}function Ha(a){if(E)try{E(a)}catch(b){throw b.cause=a,b;}}function Ia(){const a=Ja();E?l.setTimeout(()=>{Ha(a)},0):da(a)}function Ka(a){a=Error(a);Fa(a,"warning");Ha(a);return a}function Ja(){const a=Error();Fa(a,"incident");return a};function La(a){if(null==a||"boolean"===typeof a)return a;if("number"===typeof a)return!!a}const Ma=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Na(a){const b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Ma.test(a)}function Oa(a){Number.isFinite(a)||Ia();return a}function Pa(a){if("number"!==typeof a)throw Ka("int32");Number.isFinite(a)||Ia();return a} 
function Qa(a){var b=!!b;if(!Na(a))throw Ka("int64");"string"===typeof a?b=Ra(a,b):b?(a=Math.trunc(a),!b||Number.isSafeInteger(a)?b=String(a):(b=String(a),Sa(b)||(ra(a),b=sa()))):b=Ta(a);return b}function Sa(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}function Ta(a){return a=Math.trunc(a)} 
function Ra(a,b){var c=Math.trunc(Number(a));if(Number.isSafeInteger(c))return String(c);c=a.indexOf(".");-1!==c&&(a=a.substring(0,c));b&&(Sa(a)||(16>a.length?ra(Number(a)):(a=BigInt(a),pa=Number(a&BigInt(4294967295))>>>0,qa=Number(a>>BigInt(32)&BigInt(4294967295))),a=sa()));return a}function Ua(a){if("string"!==typeof a)throw Error();return a}function F(a){if(null!=a&&"string"!==typeof a)throw Error();return a}function Va(a){return null==a||"string"===typeof a?a:void 0};let H;function Wa(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return Ca||!Da(a,void 0,9999)?a:void 0;if(null!=a&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}}}return a};function Xa(a,b,c){a=Array.prototype.slice.call(a);var d=a.length;const f=b&256?a[d-1]:void 0;d+=f?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(f){b=a[b]={};for(const e in f)Object.prototype.hasOwnProperty.call(f,e)&&(b[e]=c(f[e]))}return a} 
function Ya(a,b,c,d,f,e){if(null!=a){if(Array.isArray(a))a=f&&0==a.length&&(a[z]|0)&1?void 0:e&&(a[z]|0)&2?a:Za(a,b,c,void 0!==d,f,e);else if(B(a)){const h={};for(let g in a)Object.prototype.hasOwnProperty.call(a,g)&&(h[g]=Ya(a[g],b,c,d,f,e));a=h}else a=b(a,d);return a}}function Za(a,b,c,d,f,e){const h=d||c?a[z]|0:0;d=d?!!(h&32):void 0;a=Array.prototype.slice.call(a);for(let g=0;g<a.length;g++)a[g]=Ya(a[g],b,c,d,f,e);c&&c(h,a);return a}function $a(a){return a.B===wa?a.toJSON():Wa(a)};function ab(a,b,c=ua){if(null!=a){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=a[z]|0;if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(a[z]=(d|34)&-12293,a):Za(a,ab,d&4?ua:c,!0,!1,!0)}a.B===wa&&(c=a.j,d=c[z],a=d&2?a:bb(a,c,d));return a}}function bb(a,b,c){a=a.constructor;H=b=cb(b,c);b=new a(b);H=void 0;return b}function cb(a,b){const c=!!(b&32);a=Xa(a,b,d=>ab(d,c,ua));a[z]|=34;return a};Object.freeze({});function I(a,b){a=a.j;return db(a,a[z],b)}function db(a,b,c){if(-1===c)return null;if(c>=va(b)){if(b&256)return a[a.length-1][c]}else if(b=c+(+!!(b&512)-1),b<a.length)return a[b]}function J(a,b,c,d){var f=va(b);if(c>=f){let e=b;if(b&256)f=a[a.length-1];else{if(null==d)return e;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&(a[z]=e);return e}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b} 
function eb(a,b,c,d){a=a.j;let f=a[z];D(f);if(null==c)J(a,f,b);else{var e=c[z]|0,h=e,g=!!(2&e)||Object.isFrozen(c),n=!g&&!1;if(!(4&e))for(e=21,g&&(c=Array.prototype.slice.call(c),h=0,e=2&f?e|2:e&-3,e=(32&f?e|32:e&-33)&-2049),g=0;g<c.length;g++)c[g]=d(c[g]);n&&(e|=2);e!==h&&(c[z]=e);n&&Object.freeze(c);J(a,f,b,c)}}function K(a,b,c,d){const f=a.j;let e=f[z];D(e);J(f,e,b,("0"===d?0===Number(c):c===d)?void 0:c);return a} 
function fb(a,b,c){null==c&&(c=void 0);const d=a.j;let f=d[z];D(f);J(d,f,b,c);return a};var L=class{constructor(a){a:{null==a&&(a=H);H=void 0;if(null==a){var b=96;a=[]}else{if(!Array.isArray(a))throw Error();b=a[z]|0;if(b&64)break a;b|=64;var c=a.length;if(c&&(--c,B(a[c]))){b|=256;c-=+!!(b&512)-1;if(1024<=c)throw Error();b=b&-16760833|(c&1023)<<14}}a[z]=b}this.j=a}toJSON(){{var a=Za(this.j,$a,void 0,void 0,!1,!1);const q=this.constructor.o;var b=this.j[z];if(q&&Ca){var c=this.j[z],d=va(c);c=+!!(c&512)-1;var f;for(var e=0;e<q.length;e++){var h=q[e];if(h<d)h+=c,null==a[h]&&(a[h]=ta()); 
else{if(!f){var g=void 0;a.length&&B(g=a[a.length-1])?f=g:a.push(f={})}null==f[h]&&(f[h]=ta())}}}if(f=a.length){var n;if(B(d=a[f-1])){b:{var k=d;g={};c=!1;for(var p in k)if(Object.prototype.hasOwnProperty.call(k,p)){e=k[p];if(Array.isArray(e)){h=e;if(!oa&&Da(e,q,+p)||!na&&Ba(e)&&0===e.size)e=null;e!=h&&(c=!0)}null!=e?g[p]=e:c=!0}if(c){for(let G in g){k=g;break b}k=null}}k!=d&&(n=!0);f--}for(b=+!!(b&512)-1;0<f;f--){p=f-1;d=a[p];if(!(null==d||!oa&&Da(d,q,p-b)||!na&&Ba(d)&&0===d.size))break;var r=!0}if(n|| 
r)a=Array.prototype.slice.call(a,0,f),k&&a.push(k)}}return a}};L.prototype.B=wa;function gb(a,b){const c=hb;hb=void 0;if(!b(a))throw b=c?c()+"\n":"",Error(b+String(a));}const ib=a=>null!==a&&void 0!==a;let hb=void 0;function jb(a,b){a.addEventListener&&a.addEventListener("load",b,!1)};var O;var kb=class{constructor(a){this.g=a}toString(){return this.g+""}},lb={};function mb(a){if(void 0===O){var b=null;var c=l.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:ca,createScript:ca,createScriptURL:ca})}catch(d){l.console&&l.console.error(d.message)}O=b}else O=b}a=(b=O)?b.createScriptURL(a):a;return new kb(a,lb)};var nb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var ob=class{};class pb extends ob{constructor(a){super();this.g=a}toString(){return this.g}};function qb(a,b,c){var d=[rb`data-`];if(0===d.length)throw Error("");d=d.map(e=>{if(e instanceof pb)e=e.g;else throw Error("");return e});const f=b.toLowerCase();if(d.every(e=>0!==f.indexOf(e)))throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);a.setAttribute(b,c)};function sb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}let P=[];const tb=()=>{const a=P;P=[];for(const b of a)try{b()}catch{}};var ub=a=>{var b=document;"complete"===b.readyState||"interactive"===b.readyState?(P.push(a),1==P.length&&(window.Promise?Promise.resolve().then(tb):window.setImmediate?setImmediate(tb):setTimeout(tb,0))):b.addEventListener("DOMContentLoaded",a)};function wb(a,b=document){return b.createElement(String(a).toLowerCase())};function xb(a){l.google_image_requests||(l.google_image_requests=[]);const b=wb("IMG",l.document);b.src=a;l.google_image_requests.push(b)};var yb=window;function rb(a){return new pb(a[0].toLowerCase())};function zb(a,...b){if(0===b.length)return mb(a[0]);let c=a[0];for(let d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return mb(c)};var Ab=()=>{if(!yb)return!1;try{return!(!yb.navigator.standalone&&!yb.top.navigator.standalone)}catch(a){return!1}};class Bb{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const Cb=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var Db=class{constructor(a,b){this.g=a;this.h=b}},Eb=class{constructor(a,b){this.url=a;this.u=!!b;this.depth=null}};let Q=null;function Fb(){const a=l.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Gb(){const a=l.performance;return a&&a.now?a.now():null};var Hb=class{constructor(a,b){var c=Gb()||Fb();this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()}};const R=l.performance,Ib=!!(R&&R.mark&&R.measure&&R.clearMarks),S=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(()=>{var a;if(a=Ib){var b;if(null===Q){Q="";try{a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}a&&(Q=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Q;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Jb(a){a&&R&&S()&&(R.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),R.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
function T(a){a.g=!1;if(a.h!=a.i.google_js_reporting_queue){if(S()){var b=a.h;const c=b.length;b="string"===typeof b?b.split(""):b;for(let d=0;d<c;d++)d in b&&Jb.call(void 0,b[d])}a.h.length=0}} 
class Kb{constructor(a){this.h=[];this.i=a||l;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=S()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new Hb(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;R&&S()&&R.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(Gb()||Fb())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;R&&S()&&R.mark(b);!this.g||2048<this.h.length|| 
this.h.push(a)}}};function U(a,b){const c={};c[a]=b;return[c]}function Lb(a,b,c,d,f){const e=[];sb(a,function(h,g){(h=Mb(h,b,c,d,f))&&e.push(g+"="+h)});return e.join(b)} 
function Mb(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const e=[];for(let h=0;h<a.length;h++)e.push(Mb(a[h],b,c,d+1,f));return e.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(Lb(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))}function Nb(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1} 
function Ob(a,b){let c="https://pagead2.googlesyndication.com"+b,d=Nb(a)-b.length;if(0>d)return"";a.g.sort(function(e,h){return e-h});b=null;let f="";for(let e=0;e<a.g.length;e++){const h=a.g[e],g=a.h[h];for(let n=0;n<g.length;n++){if(!d){b=null==b?h:b;break}let k=Lb(g[n],a.i,",$");if(k){k=f+k;if(d>=k.length){d-=k.length;c+=k;f=a.i;break}b=null==b?h:b}}}a="";null!=b&&(a=f+"trn="+b);return c+a}class Pb{constructor(){this.i="&";this.h={};this.l=0;this.g=[]}};function Qb(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b}function Rb(a,b){a.i=b} 
var Tb=class{constructor(a,b,c=null){this.l=a;this.v=b;this.g=c;this.i=null;this.h=!1;this.D=this.m}m(a,b,c,d,f){f=f||"jserror";let e;try{const t=new Pb;t.g.push(1);t.h[1]=U("context",a);b.error&&b.meta&&b.id||(b=new Bb(b,{message:Qb(b)}));if(b.msg){var h=b.msg.substring(0,512);t.g.push(2);t.h[2]=U("msg",h)}const X=b.meta||{};if(this.i)try{this.i(X)}catch(C){}if(d)try{d(X)}catch(C){}b=[X];t.g.push(3);t.h[3]=b;d=l;b=[];let ya;h=null;do{var g=d;try{var n;if(n=!!g&&null!=g.location.href)b:{try{la(g.foo); 
n=!0;break b}catch(C){}n=!1}var k=n}catch{k=!1}k?(ya=g.location.href,h=g.document&&g.document.referrer||null):(ya=h,h=null);b.push(new Eb(ya||""));try{d=g.parent}catch(C){d=null}}while(d&&g!=d);for(let C=0,vb=b.length-1;C<=vb;++C)b[C].depth=vb-C;g=l;if(g.location&&g.location.ancestorOrigins&&g.location.ancestorOrigins.length==b.length-1)for(k=1;k<b.length;++k){var p=b[k];p.url||(p.url=g.location.ancestorOrigins[k-1]||"",p.u=!0)}var r=b;let za=new Eb(l.location.href,!1);g=null;const Aa=r.length-1; 
for(p=Aa;0<=p;--p){var q=r[p];!g&&Cb.test(q.url)&&(g=q);if(q.url&&!q.u){za=q;break}}q=null;const lc=r.length&&r[Aa].url;0!=za.depth&&lc&&(q=r[Aa]);e=new Db(za,q);if(e.h){var G=e.h.url||"";t.g.push(4);t.h[4]=U("top",G)}var M={url:e.g.url||""};if(e.g.url){var N=e.g.url.match(nb),x=N[1],y=N[3],w=N[4];r="";x&&(r+=x+":");y&&(r+="//",r+=y,w&&(r+=":"+w));var A=r}else A="";M=[M,{url:A}];t.g.push(5);t.h[5]=M;Sb(this.l,f,t,this.h,c)}catch(t){try{Sb(this.l,f,{context:"ecmserr",rctx:a,msg:Qb(t),url:e&&e.g.url}, 
this.h,c)}catch(X){}}return this.v}};var V=a=>"string"===typeof a,Ub=a=>void 0===a;var Vb=class extends L{constructor(){super()}};function Wb(a,b){const c=d=>[{[d.H]:d.F}];return JSON.stringify([a.filter(d=>d.A).map(c),b.toJSON(),a.filter(d=>!d.A).map(c)])}var Xb=class{constructor(a,b){var c=new Vb;a=K(c,1,null==a?a:Oa(a),0);b=K(a,2,F(b),"");a=b.j;c=a[z];this.i=c&2?b:bb(b,a,c)}};var Yb=class extends L{constructor(){super()}};var Zb=class extends L{constructor(){super()}};Zb.o=[4,5];var $b=class extends L{constructor(){super()}getTagSessionCorrelator(){var a=I(this,1);a=null==a?a:Na(a)?"number"===typeof a?Ta(a):Ra(a,!1):void 0;return a??0}};$b.o=[2];var ac=class extends L{constructor(){super()}},bc=[4,6];class cc extends Xb{}function dc(a,...b){ec(a,...b.map(c=>({A:!0,H:3,F:c.toJSON()})))}var fc=class extends cc{};var gc=(a,b)=>{globalThis.fetch(a,{method:"POST",body:b,keepalive:65536>b.length,credentials:"omit",mode:"no-cors",redirect:"follow"}).catch(()=>{})};function ec(a,...b){a.g.push(...b);100<=a.g.length&&hc(a);a.g.length&&null===a.h&&(a.h=setTimeout(()=>{hc(a)},1E3))}function hc(a){null!==a.h&&(clearTimeout(a.h),a.h=null);if(a.g.length){var b=Wb(a.g,a.i);a.l("https://pagead2.googlesyndication.com/pagead/ping?e=1",b);a.g=[]}}var ic=class extends fc{constructor(){super(2,"m202311140101");this.l=gc;this.g=[];this.h=null}},jc=class extends ic{};function kc(){var a=mc,b="s";a.s&&a.hasOwnProperty(b)||(b=new a,a.s=b);return[]}class mc{};function Sb(a,b,c,d=!1,f){if((d?a.g:Math.random())<(f||.01))try{let e;c instanceof Pb?e=c:(e=new Pb,sb(c,(g,n)=>{var k=e;const p=k.l++;g=U(n,g);k.g.push(p);k.h[p]=g}));const h=Ob(e,"/pagead/gen_204?id="+b+"&");h&&xb(h)}catch(e){}}function nc(a,b){0<=b&&1>=b&&(a.g=b)}class oc{constructor(){this.g=Math.random()}};let pc,qc;const W=new Kb(window);(a=>{pc=a??new oc;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());nc(pc,window.google_srt);qc=new Tb(pc,!0,W);Rb(qc,()=>{});qc.h=!0;"complete"==window.document.readyState?window.google_measure_js_timing||T(W):W.g&&jb(window,()=>{window.google_measure_js_timing||T(W)})})();let rc=(new Date).getTime();let sc,Y;const tc=new Kb(l);((a,b=!0)=>{sc=a||new oc;"number"!==typeof l.google_srt&&(l.google_srt=Math.random());nc(sc,l.google_srt);Y=new Tb(sc,b,tc);Y.h=!0;"complete"==l.document.readyState?l.google_measure_js_timing||T(tc):tc.g&&jb(l,()=>{l.google_measure_js_timing||T(tc)})})();let uc=void 0;function vc(a){gb(uc,Ub);uc=a};var wc=class extends L{};wc.o=[19];var xc="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_semantic_area google_placement_id google_daaos_ts google_erank google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_apsail google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ad_positions google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_content_recommendation_use_square_imgs google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed efwr google_full_width_responsive gfwroh gfwrow gfwroml gfwromr gfwroz gfwrnh gfwrnwer gfwrnher google_gl google_hints google_image_size google_kw google_kw_type google_language google_loeid google_max_num_ads google_max_radlink_len google_max_responsive_height google_ml_rank google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width rpe google_responsive_formats google_responsive_auto_format armr google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_video_play_muted google_source_type google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_tag_origin google_tag_partner google_targeting google_tfs google_video_doc_id google_video_product_type google_webgl_support google_package google_debug_params dash google_restrict_data_processing google_ad_public_floor google_ad_private_floor google_traffic_source easpi asptt asro asiscm seiel asla asaa sedf sefa sugawps ascmds slcwct sacwct slmct samct google_shadow_mode google_privacy_treatments google_xz".split(" "), 
yc={google_analytics_domain_name:!0,google_analytics_uacct:!0,google_pause_ad_requests:!0,google_user_agent_client_hint:!0},zc=a=>(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&RegExp("google_ad_client").test(a[1])?a[1]:null,Ac=a=>{if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&RegExp("google_ad_client").test(a[1]))return a[1]; 
return null},Dc=a=>{try{a:{var b=a.document.getElementsByTagName("script"),c=a.navigator&&a.navigator.userAgent||"";const f=RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube","i").test(c)||/i(phone|pad|pod)/i.test(c)&&/applewebkit/i.test(c)&&!/version|safari/i.test(c)&&!Ab()?zc:Ac;for(let e=b.length-1;0<=e;e--){const h=b[e];if(!h.google_parsed_script){h.google_parsed_script=!0;const g=f(h); 
if(g){var d=g;break a}}}d=null}}catch(f){return!1}if(!d)return!1;try{c=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;b={};let f;for(;f=c.exec(d);)b[f[1]]=Bc(f[2]);Cc(b,a)}catch(f){return!1}return!!a.google_ad_client},Ec=a=>{const b={};null==a.google_ad_client&&Dc(a)&&(b.google_loader_features_used=2048);Cc(a,b);return b},Fc=a=>{for(let b=0,c=xc.length;b<c;b++){const d=xc[b];yc[d]||(a[d]=null)}},Bc=a=>{switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break; 
default:try{const b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){const c=parseFloat(a);return c===c?c:void 0}}catch(b){}}},Cc=(a,b)=>{for(let c=0;c<xc.length;c++){const d=xc[c];null==b[d]&&null!=a[d]&&(b[d]=a[d])}};function Gc(){var a=window;return"on"===l.google_adtest||"on"===l.google_adbreak_test||a.location.host.endsWith("h5games.usercontent.goog")?a.document.querySelector('meta[name="h5-games-eids"]')?.getAttribute("content")?.split(",").map(b=>Math.floor(Number(b))).filter(b=>!isNaN(b)&&0<b)||[]:[]};function Hc({C:a,G:b}){return a||("dev"===b?"dev":"")};function Ic(a){Rb(Y,b=>{b.shv=String(a);b.mjsv=Hc({C:"m202311140101",G:a});const c=kc(),d=Gc();b.eid=c.concat(d).join(",")})};ma||ja();var Jc=(a,b,c)=>{a.dataset.adsbygoogleStatus="reserved";a.className+=" adsbygoogle-noablate";if(!c.adsbygoogle){c.adsbygoogle=[];var d=c.document,f=zb`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`;const e=wb("SCRIPT",d);e.src=f instanceof kb&&f.constructor===kb?f.g:"type_error:TrustedResourceUrl";(void 0)?.J||(f=(f=(e.ownerDocument&&e.ownerDocument.defaultView||window).document.querySelector?.("script[nonce]"))?f.nonce||f.getAttribute("nonce")||"":"")&&e.setAttribute("nonce",f); 
(d=d.getElementsByTagName("script")[0])&&d.parentNode&&d.parentNode.insertBefore(e,d)}c.adsbygoogle.push({element:a,params:b})};var Kc="undefined"===typeof sttc?void 0:sttc;function Lc(){var a=Y;try{return gb(Kc,V),new wc(JSON.parse(Kc))}catch(b){a.m(838,b instanceof Error?b:Error(String(b)),void 0,c=>{c.jspb=String(Kc)})}return new wc};function Mc(a,b){const c=document.createElement("ins");c.className="adsbygoogle";const d=Number(b.google_ad_width)||0,f=Number(b.google_ad_height)||0;c.style.display="inline-block";c.style.width=`${d}px`;c.style.height=`${f}px`;sb(b,(e,h)=>{qb(c,h.replace("google","data").replace(/_/g,"-"),e)});b=document.currentScript;b||(a=a.document.querySelectorAll('script[src*="show_ads.js"]'),b=a[a.length-1]);gb(b,ib);if(b.parentElement===document.head)return new Promise(e=>{ub(()=>{document.body.prepend?document.body.prepend(c): 
document.body.appendChild(c);e(c)})});b.after?b.after(c):b.parentElement.insertBefore(c,b.nextSibling);return c}function Nc(a,b){a=[Va(I(a,15))??"",Va(I(a,23))??""].filter(c=>""!==c).join(",");""!==a&&(b.saaei=a)} 
function Oc(){var a=window;const b=new jc;try{Ga(e=>{var h=new ac;var g=new $b;try{var n=window;if("number"!==typeof n.goog_pvsid)try{var k=Object,p=k.defineProperty,r=Math.random;var q=Math.floor(r()*2**52);p.call(k,n,"goog_pvsid",{value:q,configurable:!1})}catch(A){}var G=Number(n.goog_pvsid)||-1;var M=null==G?G:Qa(G);K(g,1,M,"0")}catch(A){}try{var N=kc();eb(g,2,N,Pa)}catch(A){}try{K(g,3,F(window.document.URL),"")}catch(A){}h=fb(h,2,g);g=new Zb;g=K(g,1,Oa(1194),0);try{var x=V(e?.name)?e.name:"Unknown error"; 
K(g,2,F(x),"")}catch(A){}try{var y=V(e?.message)?e.message:`Caught ${e}`;K(g,3,F(y),"")}catch(A){}try{var w=V(e?.stack)?e.stack:Error().stack;w&&eb(g,4,w.split(/\n\s*/),Ua)}catch(A){}e=fb(h,1,g);x=new Yb;try{K(x,1,F("m202311140101"),"")}catch{}null==x&&(x=void 0);y=e.j;w=y[z];D(w);h=w;g=0;for(n=0;n<bc.length;n++)k=bc[n],null!=db(y,h,k)&&(0!==g&&(h=J(y,h,g)),g=k);(h=g)&&6!==h&&null!=x&&(w=J(y,w,h));J(y,w,6,x);K(e,5,Qa(1),"0");dc(b,e)})}catch(e){}const c=Lc();Ic(Va(I(c,2))??"");vc(La(I(c,6))??!1);var d= 
Ec(a);Fc(a);d=Mc(a,d);const f={google_loader_used:"sd",google_start_time:rc};Nc(c,f);"then"in d?d.then(e=>{Jc(e,f,a)}):Jc(d,f,a);console.warn("You are using deprecated show_ads.js script to display AdSense ads. To improve performance of your ads switch to the modern adsbygoogle.js script. See instructions on https://support.google.com/adsense/answer/9190028.")};var Z=Y;let Pc;try{Z.g&&Z.g.g?(Pc=Z.g.start((1113).toString(),3),Oc(),Z.g.end(Pc)):Oc()}catch(a){let b=Z.v;try{Jb(Pc),b=Z.D(1113,new Bb(a,{message:Qb(a)}),void 0,void 0)}catch(c){Z.m(217,c)}if(b)window.console?.error?.(a);else throw a;}; 
}).call(this,"[2021,\"r20231109\",\"r20190131\",null,null,null,null,\".google.ru\",null,null,null,null,null,null,\"31079756\",null,null,-1,[44759875,44759926]]");
