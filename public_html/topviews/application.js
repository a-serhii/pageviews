<<<<<<< b5b30ae8d575459ebb054f538fc38644300a631c
if(!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function i(e){var t="length"in e&&e.length,i=X.type(e);return"function"!==i&&!X.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===i||0===t||"number"==typeof t&&t>0&&t-1 in e))}function n(e,t,i){if(X.isFunction(t))return X.grep(e,function(e,n){return!!t.call(e,n,e)!==i});if(t.nodeType)return X.grep(e,function(e){return e===t!==i});if("string"==typeof t){if(se.test(t))return X.filter(t,e,i);t=X.filter(t,e)}return X.grep(e,function(e){return B.call(t,e)>=0!==i})}function o(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function r(e){var t=fe[e]={};return X.each(e.match(pe)||[],function(e,i){t[i]=!0}),t}function a(){K.removeEventListener("DOMContentLoaded",a,!1),e.removeEventListener("load",a,!1),X.ready()}function s(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=X.expando+s.uid++}function l(e,t,i){var n;if(void 0===i&&1===e.nodeType)if(n="data-"+t.replace(ve,"-$1").toLowerCase(),i=e.getAttribute(n),"string"==typeof i){try{i="true"===i||"false"!==i&&("null"===i?null:+i+""===i?+i:ye.test(i)?X.parseJSON(i):i)}catch(e){}ke.set(e,t,i)}else i=void 0;return i}function u(){return!0}function c(){return!1}function d(){try{return K.activeElement}catch(e){}}function h(e,t){return X.nodeName(e,"table")&&X.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function p(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function f(e){var t=Ne.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function g(e,t){for(var i=0,n=e.length;n>i;i++)we.set(e[i],"globalEval",!t||we.get(t[i],"globalEval"))}function m(e,t){var i,n,o,r,a,s,l,u;if(1===t.nodeType){if(we.hasData(e)&&(r=we.access(e),a=we.set(t,r),u=r.events)){delete a.handle,a.events={};for(o in u)for(i=0,n=u[o].length;n>i;i++)X.event.add(t,o,u[o][i])}ke.hasData(e)&&(s=ke.access(e),l=X.extend({},s),ke.set(t,l))}}function w(e,t){var i=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&X.nodeName(e,t)?X.merge([e],i):i}function k(e,t){var i=t.nodeName.toLowerCase();"input"===i&&Ye.test(e.type)?t.checked=e.checked:("input"===i||"textarea"===i)&&(t.defaultValue=e.defaultValue)}function y(t,i){var n,o=X(i.createElement(t)).appendTo(i.body),r=e.getDefaultComputedStyle&&(n=e.getDefaultComputedStyle(o[0]))?n.display:X.css(o[0],"display");return o.detach(),r}function v(e){var t=K,i=Ue[e];return i||(i=y(e,t),"none"!==i&&i||(Pe=(Pe||X("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Pe[0].contentDocument,t.write(),t.close(),i=y(e,t),Pe.detach()),Ue[e]=i),i}function b(e,t,i){var n,o,r,a,s=e.style;return i=i||ze(e),i&&(a=i.getPropertyValue(t)||i[t]),i&&(""!==a||X.contains(e.ownerDocument,e)||(a=X.style(e,t)),Fe.test(a)&&Re.test(t)&&(n=s.width,o=s.minWidth,r=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=i.width,s.width=n,s.minWidth=o,s.maxWidth=r)),void 0!==a?a+"":a}function D(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function _(e,t){if(t in e)return t;for(var i=t[0].toUpperCase()+t.slice(1),n=t,o=Qe.length;o--;)if(t=Qe[o]+i,t in e)return t;return n}function Y(e,t,i){var n=We.exec(t);return n?Math.max(0,n[1]-(i||0))+(n[2]||"px"):t}function x(e,t,i,n,o){for(var r=i===(n?"border":"content")?4:"width"===t?1:0,a=0;4>r;r+=2)"margin"===i&&(a+=X.css(e,i+De[r],!0,o)),n?("content"===i&&(a-=X.css(e,"padding"+De[r],!0,o)),"margin"!==i&&(a-=X.css(e,"border"+De[r]+"Width",!0,o))):(a+=X.css(e,"padding"+De[r],!0,o),"padding"!==i&&(a+=X.css(e,"border"+De[r]+"Width",!0,o)));return a}function T(e,t,i){var n=!0,o="width"===t?e.offsetWidth:e.offsetHeight,r=ze(e),a="border-box"===X.css(e,"boxSizing",!1,r);if(0>=o||null==o){if(o=b(e,t,r),(0>o||null==o)&&(o=e.style[t]),Fe.test(o))return o;n=a&&(Z.boxSizingReliable()||o===e.style[t]),o=parseFloat(o)||0}return o+x(e,t,i||(a?"border":"content"),n,r)+"px"}function M(e,t){for(var i,n,o,r=[],a=0,s=e.length;s>a;a++)n=e[a],n.style&&(r[a]=we.get(n,"olddisplay"),i=n.style.display,t?(r[a]||"none"!==i||(n.style.display=""),""===n.style.display&&_e(n)&&(r[a]=we.access(n,"olddisplay",v(n.nodeName)))):(o=_e(n),"none"===i&&o||we.set(n,"olddisplay",o?i:X.css(n,"display"))));for(a=0;s>a;a++)n=e[a],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?r[a]||"":"none"));return e}function C(e,t,i,n,o){return new C.prototype.init(e,t,i,n,o)}function S(){return setTimeout(function(){Ze=void 0}),Ze=X.now()}function $(e,t){var i,n=0,o={height:e};for(t=t?1:0;4>n;n+=2-t)i=De[n],o["margin"+i]=o["padding"+i]=e;return t&&(o.opacity=o.width=e),o}function O(e,t,i){for(var n,o=(it[t]||[]).concat(it["*"]),r=0,a=o.length;a>r;r++)if(n=o[r].call(i,t,e))return n}function E(e,t,i){var n,o,r,a,s,l,u,c,d=this,h={},p=e.style,f=e.nodeType&&_e(e),g=we.get(e,"fxshow");i.queue||(s=X._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,X.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(i.overflow=[p.overflow,p.overflowX,p.overflowY],u=X.css(e,"display"),c="none"===u?we.get(e,"olddisplay")||v(e.nodeName):u,"inline"===c&&"none"===X.css(e,"float")&&(p.display="inline-block")),i.overflow&&(p.overflow="hidden",d.always(function(){p.overflow=i.overflow[0],p.overflowX=i.overflow[1],p.overflowY=i.overflow[2]}));for(n in t)if(o=t[n],Je.exec(o)){if(delete t[n],r=r||"toggle"===o,o===(f?"hide":"show")){if("show"!==o||!g||void 0===g[n])continue;f=!0}h[n]=g&&g[n]||X.style(e,n)}else u=void 0;if(X.isEmptyObject(h))"inline"===("none"===u?v(e.nodeName):u)&&(p.display=u);else{g?"hidden"in g&&(f=g.hidden):g=we.access(e,"fxshow",{}),r&&(g.hidden=!f),f?X(e).show():d.done(function(){X(e).hide()}),d.done(function(){var t;we.remove(e,"fxshow");for(t in h)X.style(e,t,h[t])});for(n in h)a=O(f?g[n]:0,n,d),n in g||(g[n]=a.start,f&&(a.end=a.start,a.start="width"===n||"height"===n?1:0))}}function A(e,t){var i,n,o,r,a;for(i in e)if(n=X.camelCase(i),o=t[n],r=e[i],X.isArray(r)&&(o=r[1],r=e[i]=r[0]),i!==n&&(e[n]=r,delete e[i]),a=X.cssHooks[n],a&&"expand"in a){r=a.expand(r),delete e[n];for(i in r)i in e||(e[i]=r[i],t[i]=o)}else t[n]=o}function j(e,t,i){var n,o,r=0,a=tt.length,s=X.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var t=Ze||S(),i=Math.max(0,u.startTime+u.duration-t),n=i/u.duration||0,r=1-n,a=0,l=u.tweens.length;l>a;a++)u.tweens[a].run(r);return s.notifyWith(e,[u,r,i]),1>r&&l?i:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:X.extend({},t),opts:X.extend(!0,{specialEasing:{}},i),originalProperties:t,originalOptions:i,startTime:Ze||S(),duration:i.duration,tweens:[],createTween:function(t,i){var n=X.Tween(e,u.opts,t,i,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(n),n},stop:function(t){var i=0,n=t?u.tweens.length:0;if(o)return this;for(o=!0;n>i;i++)u.tweens[i].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(A(c,u.opts.specialEasing);a>r;r++)if(n=tt[r].call(u,e,c,u.opts))return n;return X.map(c,O,u),X.isFunction(u.opts.start)&&u.opts.start.call(e,u),X.fx.timer(X.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function q(e){return function(t,i){"string"!=typeof t&&(i=t,t="*");var n,o=0,r=t.toLowerCase().match(pe)||[];if(X.isFunction(i))for(;n=r[o++];)"+"===n[0]?(n=n.slice(1)||"*",(e[n]=e[n]||[]).unshift(i)):(e[n]=e[n]||[]).push(i)}}function N(e,t,i,n){function o(s){var l;return r[s]=!0,X.each(e[s]||[],function(e,s){var u=s(t,i,n);return"string"!=typeof u||a||r[u]?a?!(l=u):void 0:(t.dataTypes.unshift(u),o(u),!1)}),l}var r={},a=e===yt;return o(t.dataTypes[0])||!r["*"]&&o("*")}function L(e,t){var i,n,o=X.ajaxSettings.flatOptions||{};for(i in t)void 0!==t[i]&&((o[i]?e:n||(n={}))[i]=t[i]);return n&&X.extend(!0,e,n),e}function I(e,t,i){for(var n,o,r,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=e.mimeType||t.getResponseHeader("Content-Type"));if(n)for(o in s)if(s[o]&&s[o].test(n)){l.unshift(o);break}if(l[0]in i)r=l[0];else{for(o in i){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}a||(a=o)}r=r||a}return r?(r!==l[0]&&l.unshift(r),i[r]):void 0}function P(e,t,i,n){var o,r,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(r=c.shift();r;)if(e.responseFields[r]&&(i[e.responseFields[r]]=t),!l&&n&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=c.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(a=u[l+" "+r]||u["* "+r],!a)for(o in u)if(s=o.split(" "),s[1]===r&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[o]:u[o]!==!0&&(r=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}function U(e,t,i,n){var o;if(X.isArray(t))X.each(t,function(t,o){i||Yt.test(e)?n(e,o):U(e+"["+("object"==typeof o?t:"")+"]",o,i,n)});else if(i||"object"!==X.type(t))n(e,t);else for(o in t)U(e+"["+o+"]",t[o],i,n)}function R(e){return X.isWindow(e)?e:9===e.nodeType&&e.defaultView}var F=[],z=F.slice,H=F.concat,W=F.push,B=F.indexOf,V={},G=V.toString,Q=V.hasOwnProperty,Z={},K=e.document,J="2.1.4",X=function(e,t){return new X.fn.init(e,t)},ee=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,te=/^-ms-/,ie=/-([\da-z])/gi,ne=function(e,t){return t.toUpperCase()};X.fn=X.prototype={jquery:J,constructor:X,selector:"",length:0,toArray:function(){return z.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:z.call(this)},pushStack:function(e){var t=X.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return X.each(this,e,t)},map:function(e){return this.pushStack(X.map(this,function(t,i){return e.call(t,i,t)}))},slice:function(){return this.pushStack(z.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,i=+e+(0>e?t:0);return this.pushStack(i>=0&&t>i?[this[i]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:W,sort:F.sort,splice:F.splice},X.extend=X.fn.extend=function(){var e,t,i,n,o,r,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||X.isFunction(a)||(a={}),s===l&&(a=this,s--);l>s;s++)if(null!=(e=arguments[s]))for(t in e)i=a[t],n=e[t],a!==n&&(u&&n&&(X.isPlainObject(n)||(o=X.isArray(n)))?(o?(o=!1,r=i&&X.isArray(i)?i:[]):r=i&&X.isPlainObject(i)?i:{},a[t]=X.extend(u,r,n)):void 0!==n&&(a[t]=n));return a},X.extend({expando:"jQuery"+(J+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===X.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!X.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"===X.type(e)&&!e.nodeType&&!X.isWindow(e)&&!(e.constructor&&!Q.call(e.constructor.prototype,"isPrototypeOf"))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?V[G.call(e)]||"object":typeof e},globalEval:function(e){var t,i=eval;e=X.trim(e),e&&(1===e.indexOf("use strict")?(t=K.createElement("script"),t.text=e,K.head.appendChild(t).parentNode.removeChild(t)):i(e))},camelCase:function(e){return e.replace(te,"ms-").replace(ie,ne)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var o,r=0,a=e.length,s=i(e);if(n){if(s)for(;a>r&&(o=t.apply(e[r],n),o!==!1);r++);else for(r in e)if(o=t.apply(e[r],n),o===!1)break}else if(s)for(;a>r&&(o=t.call(e[r],r,e[r]),o!==!1);r++);else for(r in e)if(o=t.call(e[r],r,e[r]),o===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(ee,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(i(Object(e))?X.merge(n,"string"==typeof e?[e]:e):W.call(n,e)),n},inArray:function(e,t,i){return null==t?-1:B.call(t,e,i)},merge:function(e,t){for(var i=+t.length,n=0,o=e.length;i>n;n++)e[o++]=t[n];return e.length=o,e},grep:function(e,t,i){for(var n,o=[],r=0,a=e.length,s=!i;a>r;r++)n=!t(e[r],r),n!==s&&o.push(e[r]);return o},map:function(e,t,n){var o,r=0,a=e.length,s=i(e),l=[];if(s)for(;a>r;r++)o=t(e[r],r,n),null!=o&&l.push(o);else for(r in e)o=t(e[r],r,n),null!=o&&l.push(o);return H.apply([],l)},guid:1,proxy:function(e,t){var i,n,o;return"string"==typeof t&&(i=e[t],t=e,e=i),X.isFunction(e)?(n=z.call(arguments,2),o=function(){return e.apply(t||this,n.concat(z.call(arguments)))},o.guid=e.guid=e.guid||X.guid++,o):void 0},now:Date.now,support:Z}),X.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){V["[object "+t+"]"]=t.toLowerCase()});var oe=function(e){function t(e,t,i,n){var o,r,a,s,l,u,d,p,f,g;if((t?t.ownerDocument||t:U)!==E&&O(t),t=t||E,i=i||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return i;if(!n&&j){if(11!==s&&(o=ke.exec(e)))if(a=o[1]){if(9===s){if(r=t.getElementById(a),!r||!r.parentNode)return i;if(r.id===a)return i.push(r),i}else if(t.ownerDocument&&(r=t.ownerDocument.getElementById(a))&&I(t,r)&&r.id===a)return i.push(r),i}else{if(o[2])return J.apply(i,t.getElementsByTagName(e)),i;if((a=o[3])&&b.getElementsByClassName)return J.apply(i,t.getElementsByClassName(a)),i}if(b.qsa&&(!q||!q.test(e))){if(p=d=P,f=t,g=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(u=x(e),(d=t.getAttribute("id"))?p=d.replace(ve,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",l=u.length;l--;)u[l]=p+h(u[l]);f=ye.test(e)&&c(t.parentNode)||t,g=u.join(",")}if(g)try{return J.apply(i,f.querySelectorAll(g)),i}catch(e){}finally{d||t.removeAttribute("id")}}}return M(e.replace(le,"$1"),t,i,n)}function i(){function e(i,n){return t.push(i+" ")>D.cacheLength&&delete e[t.shift()],e[i+" "]=n}var t=[];return e}function n(e){return e[P]=!0,e}function o(e){var t=E.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function r(e,t){for(var i=e.split("|"),n=e.length;n--;)D.attrHandle[i[n]]=t}function a(e,t){var i=t&&e,n=i&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);if(n)return n;if(i)for(;i=i.nextSibling;)if(i===t)return-1;return e?1:-1}function s(e){return function(t){var i=t.nodeName.toLowerCase();return"input"===i&&t.type===e}}function l(e){return function(t){var i=t.nodeName.toLowerCase();return("input"===i||"button"===i)&&t.type===e}}function u(e){return n(function(t){return t=+t,n(function(i,n){for(var o,r=e([],i.length,t),a=r.length;a--;)i[o=r[a]]&&(i[o]=!(n[o]=i[o]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function h(e){for(var t=0,i=e.length,n="";i>t;t++)n+=e[t].value;return n}function p(e,t,i){var n=t.dir,o=i&&"parentNode"===n,r=F++;return t.first?function(t,i,r){for(;t=t[n];)if(1===t.nodeType||o)return e(t,i,r)}:function(t,i,a){var s,l,u=[R,r];if(a){for(;t=t[n];)if((1===t.nodeType||o)&&e(t,i,a))return!0}else for(;t=t[n];)if(1===t.nodeType||o){if(l=t[P]||(t[P]={}),(s=l[n])&&s[0]===R&&s[1]===r)return u[2]=s[2];if(l[n]=u,u[2]=e(t,i,a))return!0}}}function f(e){return e.length>1?function(t,i,n){for(var o=e.length;o--;)if(!e[o](t,i,n))return!1;return!0}:e[0]}function g(e,i,n){for(var o=0,r=i.length;r>o;o++)t(e,i[o],n);return n}function m(e,t,i,n,o){for(var r,a=[],s=0,l=e.length,u=null!=t;l>s;s++)(r=e[s])&&(!i||i(r,n,o))&&(a.push(r),u&&t.push(s));return a}function w(e,t,i,o,r,a){return o&&!o[P]&&(o=w(o)),r&&!r[P]&&(r=w(r,a)),n(function(n,a,s,l){var u,c,d,h=[],p=[],f=a.length,w=n||g(t||"*",s.nodeType?[s]:s,[]),k=!e||!n&&t?w:m(w,h,e,s,l),y=i?r||(n?e:f||o)?[]:a:k;if(i&&i(k,y,s,l),o)for(u=m(y,p),o(u,[],s,l),c=u.length;c--;)(d=u[c])&&(y[p[c]]=!(k[p[c]]=d));if(n){if(r||e){if(r){for(u=[],c=y.length;c--;)(d=y[c])&&u.push(k[c]=d);r(null,y=[],u,l)}for(c=y.length;c--;)(d=y[c])&&(u=r?ee(n,d):h[c])>-1&&(n[u]=!(a[u]=d))}}else y=m(y===a?y.splice(f,y.length):y),r?r(null,a,y,l):J.apply(a,y)})}function k(e){for(var t,i,n,o=e.length,r=D.relative[e[0].type],a=r||D.relative[" "],s=r?1:0,l=p(function(e){return e===t},a,!0),u=p(function(e){return ee(t,e)>-1},a,!0),c=[function(e,i,n){var o=!r&&(n||i!==C)||((t=i).nodeType?l(e,i,n):u(e,i,n));return t=null,o}];o>s;s++)if(i=D.relative[e[s].type])c=[p(f(c),i)];else{if(i=D.filter[e[s].type].apply(null,e[s].matches),i[P]){for(n=++s;o>n&&!D.relative[e[n].type];n++);return w(s>1&&f(c),s>1&&h(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(le,"$1"),i,n>s&&k(e.slice(s,n)),o>n&&k(e=e.slice(n)),o>n&&h(e))}c.push(i)}return f(c)}function y(e,i){var o=i.length>0,r=e.length>0,a=function(n,a,s,l,u){var c,d,h,p=0,f="0",g=n&&[],w=[],k=C,y=n||r&&D.find.TAG("*",u),v=R+=null==k?1:Math.random()||.1,b=y.length;for(u&&(C=a!==E&&a);f!==b&&null!=(c=y[f]);f++){if(r&&c){for(d=0;h=e[d++];)if(h(c,a,s)){l.push(c);break}u&&(R=v)}o&&((c=!h&&c)&&p--,n&&g.push(c))}if(p+=f,o&&f!==p){for(d=0;h=i[d++];)h(g,w,a,s);if(n){if(p>0)for(;f--;)g[f]||w[f]||(w[f]=Z.call(l));w=m(w)}J.apply(l,w),u&&!n&&w.length>0&&p+i.length>1&&t.uniqueSort(l)}return u&&(R=v,C=k),g};return o?n(a):a}var v,b,D,_,Y,x,T,M,C,S,$,O,E,A,j,q,N,L,I,P="sizzle"+1*new Date,U=e.document,R=0,F=0,z=i(),H=i(),W=i(),B=function(e,t){return e===t&&($=!0),0},V=1<<31,G={}.hasOwnProperty,Q=[],Z=Q.pop,K=Q.push,J=Q.push,X=Q.slice,ee=function(e,t){for(var i=0,n=e.length;n>i;i++)if(e[i]===t)return i;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ie="[\\x20\\t\\r\\n\\f]",ne="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe=ne.replace("w","w#"),re="\\["+ie+"*("+ne+")(?:"+ie+"*([*^$|!~]?=)"+ie+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+oe+"))|)"+ie+"*\\]",ae=":("+ne+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+re+")*)|.*)\\)|)",se=new RegExp(ie+"+","g"),le=new RegExp("^"+ie+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ie+"+$","g"),ue=new RegExp("^"+ie+"*,"+ie+"*"),ce=new RegExp("^"+ie+"*([>+~]|"+ie+")"+ie+"*"),de=new RegExp("="+ie+"*([^\\]'\"]*?)"+ie+"*\\]","g"),he=new RegExp(ae),pe=new RegExp("^"+oe+"$"),fe={ID:new RegExp("^#("+ne+")"),CLASS:new RegExp("^\\.("+ne+")"),TAG:new RegExp("^("+ne.replace("w","w*")+")"),ATTR:new RegExp("^"+re),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ie+"*(even|odd|(([+-]|)(\\d*)n|)"+ie+"*(?:([+-]|)"+ie+"*(\\d+)|))"+ie+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ie+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ie+"*((?:-\\d)?\\d*)"+ie+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,we=/^[^{]+\{\s*\[native \w/,ke=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,ve=/'|\\/g,be=new RegExp("\\\\([\\da-f]{1,6}"+ie+"?|("+ie+")|.)","ig"),De=function(e,t,i){var n="0x"+t-65536;return n!==n||i?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)},_e=function(){O()};try{J.apply(Q=X.call(U.childNodes),U.childNodes),Q[U.childNodes.length].nodeType}catch(e){J={apply:Q.length?function(e,t){K.apply(e,X.call(t))}:function(e,t){for(var i=e.length,n=0;e[i++]=t[n++];);e.length=i-1}}}b=t.support={},Y=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},O=t.setDocument=function(e){var t,i,n=e?e.ownerDocument||e:U;return n!==E&&9===n.nodeType&&n.documentElement?(E=n,A=n.documentElement,i=n.defaultView,i&&i!==i.top&&(i.addEventListener?i.addEventListener("unload",_e,!1):i.attachEvent&&i.attachEvent("onunload",_e)),j=!Y(n),b.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=o(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=we.test(n.getElementsByClassName),b.getById=o(function(e){return A.appendChild(e).id=P,!n.getElementsByName||!n.getElementsByName(P).length}),b.getById?(D.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&j){var i=t.getElementById(e);return i&&i.parentNode?[i]:[]}},D.filter.ID=function(e){var t=e.replace(be,De);return function(e){return e.getAttribute("id")===t}}):(delete D.find.ID,D.filter.ID=function(e){var t=e.replace(be,De);return function(e){var i="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return i&&i.value===t}}),D.find.TAG=b.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0}:function(e,t){var i,n=[],o=0,r=t.getElementsByTagName(e);if("*"===e){for(;i=r[o++];)1===i.nodeType&&n.push(i);return n}return r},D.find.CLASS=b.getElementsByClassName&&function(e,t){return j?t.getElementsByClassName(e):void 0},N=[],q=[],(b.qsa=we.test(n.querySelectorAll))&&(o(function(e){A.appendChild(e).innerHTML="<a id='"+P+"'></a><select id='"+P+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+ie+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||q.push("\\["+ie+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+P+"-]").length||q.push("~="),e.querySelectorAll(":checked").length||q.push(":checked"),e.querySelectorAll("a#"+P+"+*").length||q.push(".#.+[+~]")}),o(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&q.push("name"+ie+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),q.push(",.*:")})),(b.matchesSelector=we.test(L=A.matches||A.webkitMatchesSelector||A.mozMatchesSelector||A.oMatchesSelector||A.msMatchesSelector))&&o(function(e){b.disconnectedMatch=L.call(e,"div"),L.call(e,"[s!='']:x"),N.push("!=",ae)}),q=q.length&&new RegExp(q.join("|")),N=N.length&&new RegExp(N.join("|")),t=we.test(A.compareDocumentPosition),I=t||we.test(A.contains)?function(e,t){var i=9===e.nodeType?e.documentElement:e,n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(i.contains?i.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},B=t?function(e,t){if(e===t)return $=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i?i:(i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&i||!b.sortDetached&&t.compareDocumentPosition(e)===i?e===n||e.ownerDocument===U&&I(U,e)?-1:t===n||t.ownerDocument===U&&I(U,t)?1:S?ee(S,e)-ee(S,t):0:4&i?-1:1)}:function(e,t){if(e===t)return $=!0,0;var i,o=0,r=e.parentNode,s=t.parentNode,l=[e],u=[t];if(!r||!s)return e===n?-1:t===n?1:r?-1:s?1:S?ee(S,e)-ee(S,t):0;if(r===s)return a(e,t);for(i=e;i=i.parentNode;)l.unshift(i);for(i=t;i=i.parentNode;)u.unshift(i);for(;l[o]===u[o];)o++;return o?a(l[o],u[o]):l[o]===U?-1:u[o]===U?1:0},n):E},t.matches=function(e,i){return t(e,null,null,i)},t.matchesSelector=function(e,i){if((e.ownerDocument||e)!==E&&O(e),i=i.replace(de,"='$1']"),!(!b.matchesSelector||!j||N&&N.test(i)||q&&q.test(i)))try{var n=L.call(e,i);if(n||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return t(i,E,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==E&&O(e),I(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==E&&O(e);var i=D.attrHandle[t.toLowerCase()],n=i&&G.call(D.attrHandle,t.toLowerCase())?i(e,t,!j):void 0;return void 0!==n?n:b.attributes||!j?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,i=[],n=0,o=0;if($=!b.detectDuplicates,S=!b.sortStable&&e.slice(0),e.sort(B),$){for(;t=e[o++];)t===e[o]&&(n=i.push(o));for(;n--;)e.splice(i[n],1)}return S=null,e},_=t.getText=function(e){var t,i="",n=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)i+=_(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[n++];)i+=_(t);return i},D=t.selectors={cacheLength:50,createPseudo:n,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,De),e[3]=(e[3]||e[4]||e[5]||"").replace(be,De),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,i=!e[6]&&e[2];return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":i&&he.test(i)&&(t=x(i,!0))&&(t=i.indexOf(")",i.length-t)-i.length)&&(e[0]=e[0].slice(0,t),e[2]=i.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,De).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+ie+")"+e+"("+ie+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,i,n){return function(o){var r=t.attr(o,e);return null==r?"!="===i:!i||(r+="","="===i?r===n:"!="===i?r!==n:"^="===i?n&&0===r.indexOf(n):"*="===i?n&&r.indexOf(n)>-1:"$="===i?n&&r.slice(-n.length)===n:"~="===i?(" "+r.replace(se," ")+" ").indexOf(n)>-1:"|="===i&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,i,n,o){var r="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===n&&0===o?function(e){return!!e.parentNode}:function(t,i,l){var u,c,d,h,p,f,g=r!==a?"nextSibling":"previousSibling",m=t.parentNode,w=s&&t.nodeName.toLowerCase(),k=!l&&!s;if(m){if(r){for(;g;){for(d=t;d=d[g];)if(s?d.nodeName.toLowerCase()===w:1===d.nodeType)return!1;f=g="only"===e&&!f&&"nextSibling"}return!0}if(f=[a?m.firstChild:m.lastChild],a&&k){for(c=m[P]||(m[P]={}),u=c[e]||[],p=u[0]===R&&u[1],h=u[0]===R&&u[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(h=p=0)||f.pop();)if(1===d.nodeType&&++h&&d===t){c[e]=[R,p,h];break}}else if(k&&(u=(t[P]||(t[P]={}))[e])&&u[0]===R)h=u[1];else for(;(d=++p&&d&&d[g]||(h=p=0)||f.pop())&&((s?d.nodeName.toLowerCase()!==w:1!==d.nodeType)||!++h||(k&&((d[P]||(d[P]={}))[e]=[R,h]),d!==t)););return h-=o,h===n||h%n===0&&h/n>=0}}},PSEUDO:function(e,i){var o,r=D.pseudos[e]||D.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return r[P]?r(i):r.length>1?(o=[e,e,"",i],D.setFilters.hasOwnProperty(e.toLowerCase())?n(function(e,t){for(var n,o=r(e,i),a=o.length;a--;)n=ee(e,o[a]),e[n]=!(t[n]=o[a])}):function(e){return r(e,0,o)}):r}},pseudos:{not:n(function(e){var t=[],i=[],o=T(e.replace(le,"$1"));return o[P]?n(function(e,t,i,n){for(var r,a=o(e,null,n,[]),s=e.length;s--;)(r=a[s])&&(e[s]=!(t[s]=r))}):function(e,n,r){return t[0]=e,o(t,null,r,i),t[0]=null,!i.pop()}}),has:n(function(e){return function(i){return t(e,i).length>0}}),contains:n(function(e){return e=e.replace(be,De),function(t){return(t.textContent||t.innerText||_(t)).indexOf(e)>-1}}),lang:n(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,De).toLowerCase(),function(t){var i;do if(i=j?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return i=i.toLowerCase(),i===e||0===i.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var i=e.location&&e.location.hash;return i&&i.slice(1)===t.id},root:function(e){return e===A},focus:function(e){return e===E.activeElement&&(!E.hasFocus||E.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!D.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return ge.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,i){return[0>i?i+t:i]}),even:u(function(e,t){for(var i=0;t>i;i+=2)e.push(i);return e}),odd:u(function(e,t){for(var i=1;t>i;i+=2)e.push(i);return e}),lt:u(function(e,t,i){for(var n=0>i?i+t:i;--n>=0;)e.push(n);return e}),gt:u(function(e,t,i){for(var n=0>i?i+t:i;++n<t;)e.push(n);return e})}},D.pseudos.nth=D.pseudos.eq;for(v in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})D.pseudos[v]=s(v);for(v in{submit:!0,reset:!0})D.pseudos[v]=l(v);return d.prototype=D.filters=D.pseudos,D.setFilters=new d,x=t.tokenize=function(e,i){var n,o,r,a,s,l,u,c=H[e+" "];if(c)return i?0:c.slice(0);for(s=e,l=[],u=D.preFilter;s;){(!n||(o=ue.exec(s)))&&(o&&(s=s.slice(o[0].length)||s),l.push(r=[])),n=!1,(o=ce.exec(s))&&(n=o.shift(),r.push({value:n,type:o[0].replace(le," ")}),s=s.slice(n.length));for(a in D.filter)!(o=fe[a].exec(s))||u[a]&&!(o=u[a](o))||(n=o.shift(),r.push({value:n,type:a,matches:o}),s=s.slice(n.length));if(!n)break}return i?s.length:s?t.error(e):H(e,l).slice(0)},T=t.compile=function(e,t){var i,n=[],o=[],r=W[e+" "];if(!r){for(t||(t=x(e)),i=t.length;i--;)r=k(t[i]),r[P]?n.push(r):o.push(r);r=W(e,y(o,n)),r.selector=e}return r},M=t.select=function(e,t,i,n){var o,r,a,s,l,u="function"==typeof e&&e,d=!n&&x(e=u.selector||e);if(i=i||[],1===d.length){if(r=d[0]=d[0].slice(0),r.length>2&&"ID"===(a=r[0]).type&&b.getById&&9===t.nodeType&&j&&D.relative[r[1].type]){if(t=(D.find.ID(a.matches[0].replace(be,De),t)||[])[0],!t)return i;u&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(o=fe.needsContext.test(e)?0:r.length;o--&&(a=r[o],!D.relative[s=a.type]);)if((l=D.find[s])&&(n=l(a.matches[0].replace(be,De),ye.test(r[0].type)&&c(t.parentNode)||t))){if(r.splice(o,1),e=n.length&&h(r),!e)return J.apply(i,n),i;break}}return(u||T(e,d))(n,t,!j,i,ye.test(e)&&c(t.parentNode)||t),i},b.sortStable=P.split("").sort(B).join("")===P,b.detectDuplicates=!!$,O(),b.sortDetached=o(function(e){return 1&e.compareDocumentPosition(E.createElement("div"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,i){return i?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,i){return i||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||r(te,function(e,t,i){var n;return i?void 0:e[t]===!0?t.toLowerCase():(n=e.getAttributeNode(t))&&n.specified?n.value:null}),t}(e);X.find=oe,X.expr=oe.selectors,X.expr[":"]=X.expr.pseudos,X.unique=oe.uniqueSort,X.text=oe.getText,X.isXMLDoc=oe.isXML,X.contains=oe.contains;var re=X.expr.match.needsContext,ae=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,se=/^.[^:#\[\.,]*$/;X.filter=function(e,t,i){var n=t[0];return i&&(e=":not("+e+")"),1===t.length&&1===n.nodeType?X.find.matchesSelector(n,e)?[n]:[]:X.find.matches(e,X.grep(t,function(e){return 1===e.nodeType}))},X.fn.extend({find:function(e){var t,i=this.length,n=[],o=this;if("string"!=typeof e)return this.pushStack(X(e).filter(function(){
for(t=0;i>t;t++)if(X.contains(o[t],this))return!0}));for(t=0;i>t;t++)X.find(e,o[t],n);return n=this.pushStack(i>1?X.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(n(this,e||[],!1))},not:function(e){return this.pushStack(n(this,e||[],!0))},is:function(e){return!!n(this,"string"==typeof e&&re.test(e)?X(e):e||[],!1).length}});var le,ue=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ce=X.fn.init=function(e,t){var i,n;if(!e)return this;if("string"==typeof e){if(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ue.exec(e),!i||!i[1]&&t)return!t||t.jquery?(t||le).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof X?t[0]:t,X.merge(this,X.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:K,!0)),ae.test(i[1])&&X.isPlainObject(t))for(i in t)X.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return n=K.getElementById(i[2]),n&&n.parentNode&&(this.length=1,this[0]=n),this.context=K,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):X.isFunction(e)?"undefined"!=typeof le.ready?le.ready(e):e(X):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),X.makeArray(e,this))};ce.prototype=X.fn,le=X(K);var de=/^(?:parents|prev(?:Until|All))/,he={children:!0,contents:!0,next:!0,prev:!0};X.extend({dir:function(e,t,i){for(var n=[],o=void 0!==i;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&X(e).is(i))break;n.push(e)}return n},sibling:function(e,t){for(var i=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&i.push(e);return i}}),X.fn.extend({has:function(e){var t=X(e,this),i=t.length;return this.filter(function(){for(var e=0;i>e;e++)if(X.contains(this,t[e]))return!0})},closest:function(e,t){for(var i,n=0,o=this.length,r=[],a=re.test(e)||"string"!=typeof e?X(e,t||this.context):0;o>n;n++)for(i=this[n];i&&i!==t;i=i.parentNode)if(i.nodeType<11&&(a?a.index(i)>-1:1===i.nodeType&&X.find.matchesSelector(i,e))){r.push(i);break}return this.pushStack(r.length>1?X.unique(r):r)},index:function(e){return e?"string"==typeof e?B.call(X(e),this[0]):B.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(X.unique(X.merge(this.get(),X(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),X.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return X.dir(e,"parentNode")},parentsUntil:function(e,t,i){return X.dir(e,"parentNode",i)},next:function(e){return o(e,"nextSibling")},prev:function(e){return o(e,"previousSibling")},nextAll:function(e){return X.dir(e,"nextSibling")},prevAll:function(e){return X.dir(e,"previousSibling")},nextUntil:function(e,t,i){return X.dir(e,"nextSibling",i)},prevUntil:function(e,t,i){return X.dir(e,"previousSibling",i)},siblings:function(e){return X.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return X.sibling(e.firstChild)},contents:function(e){return e.contentDocument||X.merge([],e.childNodes)}},function(e,t){X.fn[e]=function(i,n){var o=X.map(this,t,i);return"Until"!==e.slice(-5)&&(n=i),n&&"string"==typeof n&&(o=X.filter(n,o)),this.length>1&&(he[e]||X.unique(o),de.test(e)&&o.reverse()),this.pushStack(o)}});var pe=/\S+/g,fe={};X.Callbacks=function(e){e="string"==typeof e?fe[e]||r(e):X.extend({},e);var t,i,n,o,a,s,l=[],u=!e.once&&[],c=function(r){for(t=e.memory&&r,i=!0,s=o||0,o=0,a=l.length,n=!0;l&&a>s;s++)if(l[s].apply(r[0],r[1])===!1&&e.stopOnFalse){t=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):t?l=[]:d.disable())},d={add:function(){if(l){var i=l.length;!function t(i){X.each(i,function(i,n){var o=X.type(n);"function"===o?e.unique&&d.has(n)||l.push(n):n&&n.length&&"string"!==o&&t(n)})}(arguments),n?a=l.length:t&&(o=i,c(t))}return this},remove:function(){return l&&X.each(arguments,function(e,t){for(var i;(i=X.inArray(t,l,i))>-1;)l.splice(i,1),n&&(a>=i&&a--,s>=i&&s--)}),this},has:function(e){return e?X.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],a=0,this},disable:function(){return l=u=t=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,t||d.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!i}};return d},X.extend({Deferred:function(e){var t=[["resolve","done",X.Callbacks("once memory"),"resolved"],["reject","fail",X.Callbacks("once memory"),"rejected"],["notify","progress",X.Callbacks("memory")]],i="pending",n={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var e=arguments;return X.Deferred(function(i){X.each(t,function(t,r){var a=X.isFunction(e[t])&&e[t];o[r[1]](function(){var e=a&&a.apply(this,arguments);e&&X.isFunction(e.promise)?e.promise().done(i.resolve).fail(i.reject).progress(i.notify):i[r[0]+"With"](this===n?i.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?X.extend(e,n):n}},o={};return n.pipe=n.then,X.each(t,function(e,r){var a=r[2],s=r[3];n[r[1]]=a.add,s&&a.add(function(){i=s},t[1^e][2].disable,t[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?n:this,arguments),this},o[r[0]+"With"]=a.fireWith}),n.promise(o),e&&e.call(o,o),o},when:function(e){var t,i,n,o=0,r=z.call(arguments),a=r.length,s=1!==a||e&&X.isFunction(e.promise)?a:0,l=1===s?e:X.Deferred(),u=function(e,i,n){return function(o){i[e]=this,n[e]=arguments.length>1?z.call(arguments):o,n===t?l.notifyWith(i,n):--s||l.resolveWith(i,n)}};if(a>1)for(t=new Array(a),i=new Array(a),n=new Array(a);a>o;o++)r[o]&&X.isFunction(r[o].promise)?r[o].promise().done(u(o,n,r)).fail(l.reject).progress(u(o,i,t)):--s;return s||l.resolveWith(n,r),l.promise()}});var ge;X.fn.ready=function(e){return X.ready.promise().done(e),this},X.extend({isReady:!1,readyWait:1,holdReady:function(e){e?X.readyWait++:X.ready(!0)},ready:function(e){(e===!0?--X.readyWait:X.isReady)||(X.isReady=!0,e!==!0&&--X.readyWait>0||(ge.resolveWith(K,[X]),X.fn.triggerHandler&&(X(K).triggerHandler("ready"),X(K).off("ready"))))}}),X.ready.promise=function(t){return ge||(ge=X.Deferred(),"complete"===K.readyState?setTimeout(X.ready):(K.addEventListener("DOMContentLoaded",a,!1),e.addEventListener("load",a,!1))),ge.promise(t)},X.ready.promise();var me=X.access=function(e,t,i,n,o,r,a){var s=0,l=e.length,u=null==i;if("object"===X.type(i)){o=!0;for(s in i)X.access(e,t,s,i[s],!0,r,a)}else if(void 0!==n&&(o=!0,X.isFunction(n)||(a=!0),u&&(a?(t.call(e,n),t=null):(u=t,t=function(e,t,i){return u.call(X(e),i)})),t))for(;l>s;s++)t(e[s],i,a?n:n.call(e[s],s,t(e[s],i)));return o?e:u?t.call(e):l?t(e[0],i):r};X.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},s.uid=1,s.accepts=X.acceptData,s.prototype={key:function(e){if(!s.accepts(e))return 0;var t={},i=e[this.expando];if(!i){i=s.uid++;try{t[this.expando]={value:i},Object.defineProperties(e,t)}catch(n){t[this.expando]=i,X.extend(e,t)}}return this.cache[i]||(this.cache[i]={}),i},set:function(e,t,i){var n,o=this.key(e),r=this.cache[o];if("string"==typeof t)r[t]=i;else if(X.isEmptyObject(r))X.extend(this.cache[o],t);else for(n in t)r[n]=t[n];return r},get:function(e,t){var i=this.cache[this.key(e)];return void 0===t?i:i[t]},access:function(e,t,i){var n;return void 0===t||t&&"string"==typeof t&&void 0===i?(n=this.get(e,t),void 0!==n?n:this.get(e,X.camelCase(t))):(this.set(e,t,i),void 0!==i?i:t)},remove:function(e,t){var i,n,o,r=this.key(e),a=this.cache[r];if(void 0===t)this.cache[r]={};else{X.isArray(t)?n=t.concat(t.map(X.camelCase)):(o=X.camelCase(t),t in a?n=[t,o]:(n=o,n=n in a?[n]:n.match(pe)||[])),i=n.length;for(;i--;)delete a[n[i]]}},hasData:function(e){return!X.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var we=new s,ke=new s,ye=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ve=/([A-Z])/g;X.extend({hasData:function(e){return ke.hasData(e)||we.hasData(e)},data:function(e,t,i){return ke.access(e,t,i)},removeData:function(e,t){ke.remove(e,t)},_data:function(e,t,i){return we.access(e,t,i)},_removeData:function(e,t){we.remove(e,t)}}),X.fn.extend({data:function(e,t){var i,n,o,r=this[0],a=r&&r.attributes;if(void 0===e){if(this.length&&(o=ke.get(r),1===r.nodeType&&!we.get(r,"hasDataAttrs"))){for(i=a.length;i--;)a[i]&&(n=a[i].name,0===n.indexOf("data-")&&(n=X.camelCase(n.slice(5)),l(r,n,o[n])));we.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each(function(){ke.set(this,e)}):me(this,function(t){var i,n=X.camelCase(e);if(r&&void 0===t){if(i=ke.get(r,e),void 0!==i)return i;if(i=ke.get(r,n),void 0!==i)return i;if(i=l(r,n,void 0),void 0!==i)return i}else this.each(function(){var i=ke.get(this,n);ke.set(this,n,t),-1!==e.indexOf("-")&&void 0!==i&&ke.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ke.remove(this,e)})}}),X.extend({queue:function(e,t,i){var n;return e?(t=(t||"fx")+"queue",n=we.get(e,t),i&&(!n||X.isArray(i)?n=we.access(e,t,X.makeArray(i)):n.push(i)),n||[]):void 0},dequeue:function(e,t){t=t||"fx";var i=X.queue(e,t),n=i.length,o=i.shift(),r=X._queueHooks(e,t),a=function(){X.dequeue(e,t)};"inprogress"===o&&(o=i.shift(),n--),o&&("fx"===t&&i.unshift("inprogress"),delete r.stop,o.call(e,a,r)),!n&&r&&r.empty.fire()},_queueHooks:function(e,t){var i=t+"queueHooks";return we.get(e,i)||we.access(e,i,{empty:X.Callbacks("once memory").add(function(){we.remove(e,[t+"queue",i])})})}}),X.fn.extend({queue:function(e,t){var i=2;return"string"!=typeof e&&(t=e,e="fx",i--),arguments.length<i?X.queue(this[0],e):void 0===t?this:this.each(function(){var i=X.queue(this,e,t);X._queueHooks(this,e),"fx"===e&&"inprogress"!==i[0]&&X.dequeue(this,e)})},dequeue:function(e){return this.each(function(){X.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var i,n=1,o=X.Deferred(),r=this,a=this.length,s=function(){--n||o.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)i=we.get(r[a],e+"queueHooks"),i&&i.empty&&(n++,i.empty.add(s));return s(),o.promise(t)}});var be=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,De=["Top","Right","Bottom","Left"],_e=function(e,t){return e=t||e,"none"===X.css(e,"display")||!X.contains(e.ownerDocument,e)},Ye=/^(?:checkbox|radio)$/i;!function(){var e=K.createDocumentFragment(),t=e.appendChild(K.createElement("div")),i=K.createElement("input");i.setAttribute("type","radio"),i.setAttribute("checked","checked"),i.setAttribute("name","t"),t.appendChild(i),Z.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Z.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var xe="undefined";Z.focusinBubbles="onfocusin"in e;var Te=/^key/,Me=/^(?:mouse|pointer|contextmenu)|click/,Ce=/^(?:focusinfocus|focusoutblur)$/,Se=/^([^.]*)(?:\.(.+)|)$/;X.event={global:{},add:function(e,t,i,n,o){var r,a,s,l,u,c,d,h,p,f,g,m=we.get(e);if(m)for(i.handler&&(r=i,i=r.handler,o=r.selector),i.guid||(i.guid=X.guid++),(l=m.events)||(l=m.events={}),(a=m.handle)||(a=m.handle=function(t){return typeof X!==xe&&X.event.triggered!==t.type?X.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(pe)||[""],u=t.length;u--;)s=Se.exec(t[u])||[],p=g=s[1],f=(s[2]||"").split(".").sort(),p&&(d=X.event.special[p]||{},p=(o?d.delegateType:d.bindType)||p,d=X.event.special[p]||{},c=X.extend({type:p,origType:g,data:n,handler:i,guid:i.guid,selector:o,needsContext:o&&X.expr.match.needsContext.test(o),namespace:f.join(".")},r),(h=l[p])||(h=l[p]=[],h.delegateCount=0,d.setup&&d.setup.call(e,n,f,a)!==!1||e.addEventListener&&e.addEventListener(p,a,!1)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=i.guid)),o?h.splice(h.delegateCount++,0,c):h.push(c),X.event.global[p]=!0)},remove:function(e,t,i,n,o){var r,a,s,l,u,c,d,h,p,f,g,m=we.hasData(e)&&we.get(e);if(m&&(l=m.events)){for(t=(t||"").match(pe)||[""],u=t.length;u--;)if(s=Se.exec(t[u])||[],p=g=s[1],f=(s[2]||"").split(".").sort(),p){for(d=X.event.special[p]||{},p=(n?d.delegateType:d.bindType)||p,h=l[p]||[],s=s[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=r=h.length;r--;)c=h[r],!o&&g!==c.origType||i&&i.guid!==c.guid||s&&!s.test(c.namespace)||n&&n!==c.selector&&("**"!==n||!c.selector)||(h.splice(r,1),c.selector&&h.delegateCount--,d.remove&&d.remove.call(e,c));a&&!h.length&&(d.teardown&&d.teardown.call(e,f,m.handle)!==!1||X.removeEvent(e,p,m.handle),delete l[p])}else for(p in l)X.event.remove(e,p+t[u],i,n,!0);X.isEmptyObject(l)&&(delete m.handle,we.remove(e,"events"))}},trigger:function(t,i,n,o){var r,a,s,l,u,c,d,h=[n||K],p=Q.call(t,"type")?t.type:t,f=Q.call(t,"namespace")?t.namespace.split("."):[];if(a=s=n=n||K,3!==n.nodeType&&8!==n.nodeType&&!Ce.test(p+X.event.triggered)&&(p.indexOf(".")>=0&&(f=p.split("."),p=f.shift(),f.sort()),u=p.indexOf(":")<0&&"on"+p,t=t[X.expando]?t:new X.Event(p,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=f.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=n),i=null==i?[t]:X.makeArray(i,[t]),d=X.event.special[p]||{},o||!d.trigger||d.trigger.apply(n,i)!==!1)){if(!o&&!d.noBubble&&!X.isWindow(n)){for(l=d.delegateType||p,Ce.test(l+p)||(a=a.parentNode);a;a=a.parentNode)h.push(a),s=a;s===(n.ownerDocument||K)&&h.push(s.defaultView||s.parentWindow||e)}for(r=0;(a=h[r++])&&!t.isPropagationStopped();)t.type=r>1?l:d.bindType||p,c=(we.get(a,"events")||{})[t.type]&&we.get(a,"handle"),c&&c.apply(a,i),c=u&&a[u],c&&c.apply&&X.acceptData(a)&&(t.result=c.apply(a,i),t.result===!1&&t.preventDefault());return t.type=p,o||t.isDefaultPrevented()||d._default&&d._default.apply(h.pop(),i)!==!1||!X.acceptData(n)||u&&X.isFunction(n[p])&&!X.isWindow(n)&&(s=n[u],s&&(n[u]=null),X.event.triggered=p,n[p](),X.event.triggered=void 0,s&&(n[u]=s)),t.result}},dispatch:function(e){e=X.event.fix(e);var t,i,n,o,r,a=[],s=z.call(arguments),l=(we.get(this,"events")||{})[e.type]||[],u=X.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){for(a=X.event.handlers.call(this,e,l),t=0;(o=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,i=0;(r=o.handlers[i++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(r.namespace))&&(e.handleObj=r,e.data=r.data,n=((X.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,s),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var i,n,o,r,a=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!==this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(n=[],i=0;s>i;i++)r=t[i],o=r.selector+" ",void 0===n[o]&&(n[o]=r.needsContext?X(o,this).index(l)>=0:X.find(o,this,null,[l]).length),n[o]&&n.push(r);n.length&&a.push({elem:l,handlers:n})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var i,n,o,r=t.button;return null==e.pageX&&null!=t.clientX&&(i=e.target.ownerDocument||K,n=i.documentElement,o=i.body,e.pageX=t.clientX+(n&&n.scrollLeft||o&&o.scrollLeft||0)-(n&&n.clientLeft||o&&o.clientLeft||0),e.pageY=t.clientY+(n&&n.scrollTop||o&&o.scrollTop||0)-(n&&n.clientTop||o&&o.clientTop||0)),e.which||void 0===r||(e.which=1&r?1:2&r?3:4&r?2:0),e}},fix:function(e){if(e[X.expando])return e;var t,i,n,o=e.type,r=e,a=this.fixHooks[o];for(a||(this.fixHooks[o]=a=Me.test(o)?this.mouseHooks:Te.test(o)?this.keyHooks:{}),n=a.props?this.props.concat(a.props):this.props,e=new X.Event(r),t=n.length;t--;)i=n[t],e[i]=r[i];return e.target||(e.target=K),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,r):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==d()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===d()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&X.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return X.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,i,n){var o=X.extend(new X.Event,i,{type:e,isSimulated:!0,originalEvent:{}});n?X.event.trigger(o,null,t):X.event.dispatch.call(t,o),o.isDefaultPrevented()&&i.preventDefault()}},X.removeEvent=function(e,t,i){e.removeEventListener&&e.removeEventListener(t,i,!1)},X.Event=function(e,t){return this instanceof X.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?u:c):this.type=e,t&&X.extend(this,t),this.timeStamp=e&&e.timeStamp||X.now(),void(this[X.expando]=!0)):new X.Event(e,t)},X.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=u,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},X.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){X.event.special[e]={delegateType:t,bindType:t,handle:function(e){var i,n=this,o=e.relatedTarget,r=e.handleObj;return(!o||o!==n&&!X.contains(n,o))&&(e.type=r.origType,i=r.handler.apply(this,arguments),e.type=t),i}}}),Z.focusinBubbles||X.each({focus:"focusin",blur:"focusout"},function(e,t){var i=function(e){X.event.simulate(t,e.target,X.event.fix(e),!0)};X.event.special[t]={setup:function(){var n=this.ownerDocument||this,o=we.access(n,t);o||n.addEventListener(e,i,!0),we.access(n,t,(o||0)+1)},teardown:function(){var n=this.ownerDocument||this,o=we.access(n,t)-1;o?we.access(n,t,o):(n.removeEventListener(e,i,!0),we.remove(n,t))}}}),X.fn.extend({on:function(e,t,i,n,o){var r,a;if("object"==typeof e){"string"!=typeof t&&(i=i||t,t=void 0);for(a in e)this.on(a,t,i,e[a],o);return this}if(null==i&&null==n?(n=t,i=t=void 0):null==n&&("string"==typeof t?(n=i,i=void 0):(n=i,i=t,t=void 0)),n===!1)n=c;else if(!n)return this;return 1===o&&(r=n,n=function(e){return X().off(e),r.apply(this,arguments)},n.guid=r.guid||(r.guid=X.guid++)),this.each(function(){X.event.add(this,e,n,i,t)})},one:function(e,t,i,n){return this.on(e,t,i,n,1)},off:function(e,t,i){var n,o;if(e&&e.preventDefault&&e.handleObj)return n=e.handleObj,X(e.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return(t===!1||"function"==typeof t)&&(i=t,t=void 0),i===!1&&(i=c),this.each(function(){X.event.remove(this,e,i,t)})},trigger:function(e,t){return this.each(function(){X.event.trigger(e,t,this)})},triggerHandler:function(e,t){var i=this[0];return i?X.event.trigger(e,t,i,!0):void 0}});var $e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Oe=/<([\w:]+)/,Ee=/<|&#?\w+;/,Ae=/<(?:script|style|link)/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^$|\/(?:java|ecma)script/i,Ne=/^true\/(.*)/,Le=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ie={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ie.optgroup=Ie.option,Ie.tbody=Ie.tfoot=Ie.colgroup=Ie.caption=Ie.thead,Ie.th=Ie.td,X.extend({clone:function(e,t,i){var n,o,r,a,s=e.cloneNode(!0),l=X.contains(e.ownerDocument,e);if(!(Z.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||X.isXMLDoc(e)))for(a=w(s),r=w(e),n=0,o=r.length;o>n;n++)k(r[n],a[n]);if(t)if(i)for(r=r||w(e),a=a||w(s),n=0,o=r.length;o>n;n++)m(r[n],a[n]);else m(e,s);return a=w(s,"script"),a.length>0&&g(a,!l&&w(e,"script")),s},buildFragment:function(e,t,i,n){for(var o,r,a,s,l,u,c=t.createDocumentFragment(),d=[],h=0,p=e.length;p>h;h++)if(o=e[h],o||0===o)if("object"===X.type(o))X.merge(d,o.nodeType?[o]:o);else if(Ee.test(o)){for(r=r||c.appendChild(t.createElement("div")),a=(Oe.exec(o)||["",""])[1].toLowerCase(),s=Ie[a]||Ie._default,r.innerHTML=s[1]+o.replace($e,"<$1></$2>")+s[2],u=s[0];u--;)r=r.lastChild;X.merge(d,r.childNodes),r=c.firstChild,r.textContent=""}else d.push(t.createTextNode(o));for(c.textContent="",h=0;o=d[h++];)if((!n||-1===X.inArray(o,n))&&(l=X.contains(o.ownerDocument,o),r=w(c.appendChild(o),"script"),l&&g(r),i))for(u=0;o=r[u++];)qe.test(o.type||"")&&i.push(o);return c},cleanData:function(e){for(var t,i,n,o,r=X.event.special,a=0;void 0!==(i=e[a]);a++){if(X.acceptData(i)&&(o=i[we.expando],o&&(t=we.cache[o]))){if(t.events)for(n in t.events)r[n]?X.event.remove(i,n):X.removeEvent(i,n,t.handle);we.cache[o]&&delete we.cache[o]}delete ke.cache[i[ke.expando]]}}}),X.fn.extend({text:function(e){return me(this,function(e){return void 0===e?X.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=h(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=h(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var i,n=e?X.filter(e,this):this,o=0;null!=(i=n[o]);o++)t||1!==i.nodeType||X.cleanData(w(i)),i.parentNode&&(t&&X.contains(i.ownerDocument,i)&&g(w(i,"script")),i.parentNode.removeChild(i));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(X.cleanData(w(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return X.clone(this,e,t)})},html:function(e){return me(this,function(e){var t=this[0]||{},i=0,n=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!Ie[(Oe.exec(e)||["",""])[1].toLowerCase()]){e=e.replace($e,"<$1></$2>");try{for(;n>i;i++)t=this[i]||{},1===t.nodeType&&(X.cleanData(w(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,X.cleanData(w(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=H.apply([],e);var i,n,o,r,a,s,l=0,u=this.length,c=this,d=u-1,h=e[0],g=X.isFunction(h);if(g||u>1&&"string"==typeof h&&!Z.checkClone&&je.test(h))return this.each(function(i){var n=c.eq(i);g&&(e[0]=h.call(this,i,n.html())),n.domManip(e,t)});if(u&&(i=X.buildFragment(e,this[0].ownerDocument,!1,this),n=i.firstChild,1===i.childNodes.length&&(i=n),n)){for(o=X.map(w(i,"script"),p),r=o.length;u>l;l++)a=i,l!==d&&(a=X.clone(a,!0,!0),r&&X.merge(o,w(a,"script"))),t.call(this[l],a,l);if(r)for(s=o[o.length-1].ownerDocument,X.map(o,f),l=0;r>l;l++)a=o[l],qe.test(a.type||"")&&!we.access(a,"globalEval")&&X.contains(s,a)&&(a.src?X._evalUrl&&X._evalUrl(a.src):X.globalEval(a.textContent.replace(Le,"")))}return this}}),X.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){X.fn[e]=function(e){for(var i,n=[],o=X(e),r=o.length-1,a=0;r>=a;a++)i=a===r?this:this.clone(!0),X(o[a])[t](i),W.apply(n,i.get());return this.pushStack(n)}});var Pe,Ue={},Re=/^margin/,Fe=new RegExp("^("+be+")(?!px)[a-z%]+$","i"),ze=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)};!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a.innerHTML="",o.appendChild(r);var t=e.getComputedStyle(a,null);i="1%"!==t.top,n="4px"===t.width,o.removeChild(r)}var i,n,o=K.documentElement,r=K.createElement("div"),a=K.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",Z.clearCloneStyle="content-box"===a.style.backgroundClip,r.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",r.appendChild(a),e.getComputedStyle&&X.extend(Z,{pixelPosition:function(){return t(),i},boxSizingReliable:function(){return null==n&&t(),n},reliableMarginRight:function(){var t,i=a.appendChild(K.createElement("div"));return i.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",a.style.width="1px",o.appendChild(r),t=!parseFloat(e.getComputedStyle(i,null).marginRight),o.removeChild(r),a.removeChild(i),t}}))}(),X.swap=function(e,t,i,n){var o,r,a={};for(r in t)a[r]=e.style[r],e.style[r]=t[r];o=i.apply(e,n||[]);for(r in t)e.style[r]=a[r];return o};var He=/^(none|table(?!-c[ea]).+)/,We=new RegExp("^("+be+")(.*)$","i"),Be=new RegExp("^([+-])=("+be+")","i"),Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"},Qe=["Webkit","O","Moz","ms"];X.extend({cssHooks:{opacity:{get:function(e,t){if(t){var i=b(e,"opacity");return""===i?"1":i}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,i,n){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,a,s=X.camelCase(t),l=e.style;return t=X.cssProps[s]||(X.cssProps[s]=_(l,s)),a=X.cssHooks[t]||X.cssHooks[s],void 0===i?a&&"get"in a&&void 0!==(o=a.get(e,!1,n))?o:l[t]:(r=typeof i,"string"===r&&(o=Be.exec(i))&&(i=(o[1]+1)*o[2]+parseFloat(X.css(e,t)),r="number"),void(null!=i&&i===i&&("number"!==r||X.cssNumber[s]||(i+="px"),Z.clearCloneStyle||""!==i||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(i=a.set(e,i,n))||(l[t]=i))))}},css:function(e,t,i,n){var o,r,a,s=X.camelCase(t);return t=X.cssProps[s]||(X.cssProps[s]=_(e.style,s)),a=X.cssHooks[t]||X.cssHooks[s],a&&"get"in a&&(o=a.get(e,!0,i)),void 0===o&&(o=b(e,t,n)),"normal"===o&&t in Ge&&(o=Ge[t]),""===i||i?(r=parseFloat(o),i===!0||X.isNumeric(r)?r||0:o):o}}),X.each(["height","width"],function(e,t){X.cssHooks[t]={get:function(e,i,n){return i?He.test(X.css(e,"display"))&&0===e.offsetWidth?X.swap(e,Ve,function(){return T(e,t,n)}):T(e,t,n):void 0},set:function(e,i,n){var o=n&&ze(e);return Y(e,i,n?x(e,t,n,"border-box"===X.css(e,"boxSizing",!1,o),o):0)}}}),X.cssHooks.marginRight=D(Z.reliableMarginRight,function(e,t){return t?X.swap(e,{display:"inline-block"},b,[e,"marginRight"]):void 0}),X.each({margin:"",padding:"",border:"Width"},function(e,t){X.cssHooks[e+t]={expand:function(i){for(var n=0,o={},r="string"==typeof i?i.split(" "):[i];4>n;n++)o[e+De[n]+t]=r[n]||r[n-2]||r[0];return o}},Re.test(e)||(X.cssHooks[e+t].set=Y)}),X.fn.extend({css:function(e,t){return me(this,function(e,t,i){var n,o,r={},a=0;if(X.isArray(t)){for(n=ze(e),o=t.length;o>a;a++)r[t[a]]=X.css(e,t[a],!1,n);return r}return void 0!==i?X.style(e,t,i):X.css(e,t)},e,t,arguments.length>1)},show:function(){return M(this,!0)},hide:function(){return M(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){_e(this)?X(this).show():X(this).hide()})}}),X.Tween=C,C.prototype={constructor:C,init:function(e,t,i,n,o,r){this.elem=e,this.prop=i,this.easing=o||"swing",this.options=t,this.start=this.now=this.cur(),this.end=n,this.unit=r||(X.cssNumber[i]?"":"px")},cur:function(){var e=C.propHooks[this.prop];return e&&e.get?e.get(this):C.propHooks._default.get(this)},run:function(e){var t,i=C.propHooks[this.prop];return this.options.duration?this.pos=t=X.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=X.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){X.fx.step[e.prop]?X.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[X.cssProps[e.prop]]||X.cssHooks[e.prop])?X.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},X.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},X.fx=C.prototype.init,X.fx.step={};var Ze,Ke,Je=/^(?:toggle|show|hide)$/,Xe=new RegExp("^(?:([+-])=|)("+be+")([a-z%]*)$","i"),et=/queueHooks$/,tt=[E],it={"*":[function(e,t){var i=this.createTween(e,t),n=i.cur(),o=Xe.exec(t),r=o&&o[3]||(X.cssNumber[e]?"":"px"),a=(X.cssNumber[e]||"px"!==r&&+n)&&Xe.exec(X.css(i.elem,e)),s=1,l=20;if(a&&a[3]!==r){r=r||a[3],o=o||[],a=+n||1;do s=s||".5",a/=s,X.style(i.elem,e,a+r);while(s!==(s=i.cur()/n)&&1!==s&&--l)}return o&&(a=i.start=+a||+n||0,i.unit=r,i.end=o[1]?a+(o[1]+1)*o[2]:+o[2]),i}]};X.Animation=X.extend(j,{tweener:function(e,t){X.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var i,n=0,o=e.length;o>n;n++)i=e[n],it[i]=it[i]||[],it[i].unshift(t)},prefilter:function(e,t){t?tt.unshift(e):tt.push(e)}}),X.speed=function(e,t,i){var n=e&&"object"==typeof e?X.extend({},e):{complete:i||!i&&t||X.isFunction(e)&&e,duration:e,easing:i&&t||t&&!X.isFunction(t)&&t};return n.duration=X.fx.off?0:"number"==typeof n.duration?n.duration:n.duration in X.fx.speeds?X.fx.speeds[n.duration]:X.fx.speeds._default,(null==n.queue||n.queue===!0)&&(n.queue="fx"),n.old=n.complete,n.complete=function(){X.isFunction(n.old)&&n.old.call(this),n.queue&&X.dequeue(this,n.queue)},n},X.fn.extend({fadeTo:function(e,t,i,n){return this.filter(_e).css("opacity",0).show().end().animate({opacity:t},e,i,n)},animate:function(e,t,i,n){var o=X.isEmptyObject(e),r=X.speed(t,i,n),a=function(){var t=j(this,X.extend({},e),r);(o||we.get(this,"finish"))&&t.stop(!0)};return a.finish=a,o||r.queue===!1?this.each(a):this.queue(r.queue,a)},stop:function(e,t,i){var n=function(e){var t=e.stop;delete e.stop,t(i)};return"string"!=typeof e&&(i=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=X.timers,a=we.get(this);if(o)a[o]&&a[o].stop&&n(a[o]);else for(o in a)a[o]&&a[o].stop&&et.test(o)&&n(a[o]);for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(i),t=!1,r.splice(o,1));(t||!i)&&X.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,i=we.get(this),n=i[e+"queue"],o=i[e+"queueHooks"],r=X.timers,a=n?n.length:0;for(i.finish=!0,X.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),
r.splice(t,1));for(t=0;a>t;t++)n[t]&&n[t].finish&&n[t].finish.call(this);delete i.finish})}}),X.each(["toggle","show","hide"],function(e,t){var i=X.fn[t];X.fn[t]=function(e,n,o){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate($(t,!0),e,n,o)}}),X.each({slideDown:$("show"),slideUp:$("hide"),slideToggle:$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){X.fn[e]=function(e,i,n){return this.animate(t,e,i,n)}}),X.timers=[],X.fx.tick=function(){var e,t=0,i=X.timers;for(Ze=X.now();t<i.length;t++)e=i[t],e()||i[t]!==e||i.splice(t--,1);i.length||X.fx.stop(),Ze=void 0},X.fx.timer=function(e){X.timers.push(e),e()?X.fx.start():X.timers.pop()},X.fx.interval=13,X.fx.start=function(){Ke||(Ke=setInterval(X.fx.tick,X.fx.interval))},X.fx.stop=function(){clearInterval(Ke),Ke=null},X.fx.speeds={slow:600,fast:200,_default:400},X.fn.delay=function(e,t){return e=X.fx?X.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,i){var n=setTimeout(t,e);i.stop=function(){clearTimeout(n)}})},function(){var e=K.createElement("input"),t=K.createElement("select"),i=t.appendChild(K.createElement("option"));e.type="checkbox",Z.checkOn=""!==e.value,Z.optSelected=i.selected,t.disabled=!0,Z.optDisabled=!i.disabled,e=K.createElement("input"),e.value="t",e.type="radio",Z.radioValue="t"===e.value}();var nt,ot,rt=X.expr.attrHandle;X.fn.extend({attr:function(e,t){return me(this,X.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){X.removeAttr(this,e)})}}),X.extend({attr:function(e,t,i){var n,o,r=e.nodeType;if(e&&3!==r&&8!==r&&2!==r)return typeof e.getAttribute===xe?X.prop(e,t,i):(1===r&&X.isXMLDoc(e)||(t=t.toLowerCase(),n=X.attrHooks[t]||(X.expr.match.bool.test(t)?ot:nt)),void 0===i?n&&"get"in n&&null!==(o=n.get(e,t))?o:(o=X.find.attr(e,t),null==o?void 0:o):null!==i?n&&"set"in n&&void 0!==(o=n.set(e,i,t))?o:(e.setAttribute(t,i+""),i):void X.removeAttr(e,t))},removeAttr:function(e,t){var i,n,o=0,r=t&&t.match(pe);if(r&&1===e.nodeType)for(;i=r[o++];)n=X.propFix[i]||i,X.expr.match.bool.test(i)&&(e[n]=!1),e.removeAttribute(i)},attrHooks:{type:{set:function(e,t){if(!Z.radioValue&&"radio"===t&&X.nodeName(e,"input")){var i=e.value;return e.setAttribute("type",t),i&&(e.value=i),t}}}}}),ot={set:function(e,t,i){return t===!1?X.removeAttr(e,i):e.setAttribute(i,i),i}},X.each(X.expr.match.bool.source.match(/\w+/g),function(e,t){var i=rt[t]||X.find.attr;rt[t]=function(e,t,n){var o,r;return n||(r=rt[t],rt[t]=o,o=null!=i(e,t,n)?t.toLowerCase():null,rt[t]=r),o}});var at=/^(?:input|select|textarea|button)$/i;X.fn.extend({prop:function(e,t){return me(this,X.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[X.propFix[e]||e]})}}),X.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,i){var n,o,r,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return r=1!==a||!X.isXMLDoc(e),r&&(t=X.propFix[t]||t,o=X.propHooks[t]),void 0!==i?o&&"set"in o&&void 0!==(n=o.set(e,i,t))?n:e[t]=i:o&&"get"in o&&null!==(n=o.get(e,t))?n:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||at.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),Z.optSelected||(X.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),X.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){X.propFix[this.toLowerCase()]=this});var st=/[\t\r\n\f]/g;X.fn.extend({addClass:function(e){var t,i,n,o,r,a,s="string"==typeof e&&e,l=0,u=this.length;if(X.isFunction(e))return this.each(function(t){X(this).addClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(pe)||[];u>l;l++)if(i=this[l],n=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(st," "):" ")){for(r=0;o=t[r++];)n.indexOf(" "+o+" ")<0&&(n+=o+" ");a=X.trim(n),i.className!==a&&(i.className=a)}return this},removeClass:function(e){var t,i,n,o,r,a,s=0===arguments.length||"string"==typeof e&&e,l=0,u=this.length;if(X.isFunction(e))return this.each(function(t){X(this).removeClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(pe)||[];u>l;l++)if(i=this[l],n=1===i.nodeType&&(i.className?(" "+i.className+" ").replace(st," "):"")){for(r=0;o=t[r++];)for(;n.indexOf(" "+o+" ")>=0;)n=n.replace(" "+o+" "," ");a=e?X.trim(n):"",i.className!==a&&(i.className=a)}return this},toggleClass:function(e,t){var i=typeof e;return"boolean"==typeof t&&"string"===i?t?this.addClass(e):this.removeClass(e):this.each(X.isFunction(e)?function(i){X(this).toggleClass(e.call(this,i,this.className,t),t)}:function(){if("string"===i)for(var t,n=0,o=X(this),r=e.match(pe)||[];t=r[n++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else(i===xe||"boolean"===i)&&(this.className&&we.set(this,"__className__",this.className),this.className=this.className||e===!1?"":we.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",i=0,n=this.length;n>i;i++)if(1===this[i].nodeType&&(" "+this[i].className+" ").replace(st," ").indexOf(t)>=0)return!0;return!1}});var lt=/\r/g;X.fn.extend({val:function(e){var t,i,n,o=this[0];return arguments.length?(n=X.isFunction(e),this.each(function(i){var o;1===this.nodeType&&(o=n?e.call(this,i,X(this).val()):e,null==o?o="":"number"==typeof o?o+="":X.isArray(o)&&(o=X.map(o,function(e){return null==e?"":e+""})),t=X.valHooks[this.type]||X.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=X.valHooks[o.type]||X.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(i=t.get(o,"value"))?i:(i=o.value,"string"==typeof i?i.replace(lt,""):null==i?"":i)):void 0}}),X.extend({valHooks:{option:{get:function(e){var t=X.find.attr(e,"value");return null!=t?t:X.trim(X.text(e))}},select:{get:function(e){for(var t,i,n=e.options,o=e.selectedIndex,r="select-one"===e.type||0>o,a=r?null:[],s=r?o+1:n.length,l=0>o?s:r?o:0;s>l;l++)if(i=n[l],!(!i.selected&&l!==o||(Z.optDisabled?i.disabled:null!==i.getAttribute("disabled"))||i.parentNode.disabled&&X.nodeName(i.parentNode,"optgroup"))){if(t=X(i).val(),r)return t;a.push(t)}return a},set:function(e,t){for(var i,n,o=e.options,r=X.makeArray(t),a=o.length;a--;)n=o[a],(n.selected=X.inArray(n.value,r)>=0)&&(i=!0);return i||(e.selectedIndex=-1),r}}}}),X.each(["radio","checkbox"],function(){X.valHooks[this]={set:function(e,t){return X.isArray(t)?e.checked=X.inArray(X(e).val(),t)>=0:void 0}},Z.checkOn||(X.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),X.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){X.fn[t]=function(e,i){return arguments.length>0?this.on(t,null,e,i):this.trigger(t)}}),X.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,i){return this.on(e,null,t,i)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,i,n){return this.on(t,e,i,n)},undelegate:function(e,t,i){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",i)}});var ut=X.now(),ct=/\?/;X.parseJSON=function(e){return JSON.parse(e+"")},X.parseXML=function(e){var t,i;if(!e||"string"!=typeof e)return null;try{i=new DOMParser,t=i.parseFromString(e,"text/xml")}catch(e){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&X.error("Invalid XML: "+e),t};var dt=/#.*$/,ht=/([?&])_=[^&]*/,pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,ft=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,gt=/^(?:GET|HEAD)$/,mt=/^\/\//,wt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,kt={},yt={},vt="*/".concat("*"),bt=e.location.href,Dt=wt.exec(bt.toLowerCase())||[];X.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt,type:"GET",isLocal:ft.test(Dt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":vt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":X.parseJSON,"text xml":X.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?L(L(e,X.ajaxSettings),t):L(X.ajaxSettings,e)},ajaxPrefilter:q(kt),ajaxTransport:q(yt),ajax:function(e,t){function i(e,t,i,a){var l,c,w,k,v,D=t;2!==y&&(y=2,s&&clearTimeout(s),n=void 0,r=a||"",b.readyState=e>0?4:0,l=e>=200&&300>e||304===e,i&&(k=I(d,b,i)),k=P(d,k,b,l),l?(d.ifModified&&(v=b.getResponseHeader("Last-Modified"),v&&(X.lastModified[o]=v),v=b.getResponseHeader("etag"),v&&(X.etag[o]=v)),204===e||"HEAD"===d.type?D="nocontent":304===e?D="notmodified":(D=k.state,c=k.data,w=k.error,l=!w)):(w=D,(e||!D)&&(D="error",0>e&&(e=0))),b.status=e,b.statusText=(t||D)+"",l?f.resolveWith(h,[c,D,b]):f.rejectWith(h,[b,D,w]),b.statusCode(m),m=void 0,u&&p.trigger(l?"ajaxSuccess":"ajaxError",[b,d,l?c:w]),g.fireWith(h,[b,D]),u&&(p.trigger("ajaxComplete",[b,d]),--X.active||X.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var n,o,r,a,s,l,u,c,d=X.ajaxSetup({},t),h=d.context||d,p=d.context&&(h.nodeType||h.jquery)?X(h):X.event,f=X.Deferred(),g=X.Callbacks("once memory"),m=d.statusCode||{},w={},k={},y=0,v="canceled",b={readyState:0,getResponseHeader:function(e){var t;if(2===y){if(!a)for(a={};t=pt.exec(r);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===y?r:null},setRequestHeader:function(e,t){var i=e.toLowerCase();return y||(e=k[i]=k[i]||e,w[e]=t),this},overrideMimeType:function(e){return y||(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>y)for(t in e)m[t]=[m[t],e[t]];else b.always(e[b.status]);return this},abort:function(e){var t=e||v;return n&&n.abort(t),i(0,t),this}};if(f.promise(b).complete=g.add,b.success=b.done,b.error=b.fail,d.url=((e||d.url||bt)+"").replace(dt,"").replace(mt,Dt[1]+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=X.trim(d.dataType||"*").toLowerCase().match(pe)||[""],null==d.crossDomain&&(l=wt.exec(d.url.toLowerCase()),d.crossDomain=!(!l||l[1]===Dt[1]&&l[2]===Dt[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(Dt[3]||("http:"===Dt[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=X.param(d.data,d.traditional)),N(kt,d,t,b),2===y)return b;u=X.event&&d.global,u&&0===X.active++&&X.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!gt.test(d.type),o=d.url,d.hasContent||(d.data&&(o=d.url+=(ct.test(o)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=ht.test(o)?o.replace(ht,"$1_="+ut++):o+(ct.test(o)?"&":"?")+"_="+ut++)),d.ifModified&&(X.lastModified[o]&&b.setRequestHeader("If-Modified-Since",X.lastModified[o]),X.etag[o]&&b.setRequestHeader("If-None-Match",X.etag[o])),(d.data&&d.hasContent&&d.contentType!==!1||t.contentType)&&b.setRequestHeader("Content-Type",d.contentType),b.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+vt+"; q=0.01":""):d.accepts["*"]);for(c in d.headers)b.setRequestHeader(c,d.headers[c]);if(d.beforeSend&&(d.beforeSend.call(h,b,d)===!1||2===y))return b.abort();v="abort";for(c in{success:1,error:1,complete:1})b[c](d[c]);if(n=N(yt,d,t,b)){b.readyState=1,u&&p.trigger("ajaxSend",[b,d]),d.async&&d.timeout>0&&(s=setTimeout(function(){b.abort("timeout")},d.timeout));try{y=1,n.send(w,i)}catch(e){if(!(2>y))throw e;i(-1,e)}}else i(-1,"No Transport");return b},getJSON:function(e,t,i){return X.get(e,t,i,"json")},getScript:function(e,t){return X.get(e,void 0,t,"script")}}),X.each(["get","post"],function(e,t){X[t]=function(e,i,n,o){return X.isFunction(i)&&(o=o||n,n=i,i=void 0),X.ajax({url:e,type:t,dataType:o,data:i,success:n})}}),X._evalUrl=function(e){return X.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},X.fn.extend({wrapAll:function(e){var t;return X.isFunction(e)?this.each(function(t){X(this).wrapAll(e.call(this,t))}):(this[0]&&(t=X(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return this.each(X.isFunction(e)?function(t){X(this).wrapInner(e.call(this,t))}:function(){var t=X(this),i=t.contents();i.length?i.wrapAll(e):t.append(e)})},wrap:function(e){var t=X.isFunction(e);return this.each(function(i){X(this).wrapAll(t?e.call(this,i):e)})},unwrap:function(){return this.parent().each(function(){X.nodeName(this,"body")||X(this).replaceWith(this.childNodes)}).end()}}),X.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},X.expr.filters.visible=function(e){return!X.expr.filters.hidden(e)};var _t=/%20/g,Yt=/\[\]$/,xt=/\r?\n/g,Tt=/^(?:submit|button|image|reset|file)$/i,Mt=/^(?:input|select|textarea|keygen)/i;X.param=function(e,t){var i,n=[],o=function(e,t){t=X.isFunction(t)?t():null==t?"":t,n[n.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=X.ajaxSettings&&X.ajaxSettings.traditional),X.isArray(e)||e.jquery&&!X.isPlainObject(e))X.each(e,function(){o(this.name,this.value)});else for(i in e)U(i,e[i],t,o);return n.join("&").replace(_t,"+")},X.fn.extend({serialize:function(){return X.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=X.prop(this,"elements");return e?X.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!X(this).is(":disabled")&&Mt.test(this.nodeName)&&!Tt.test(e)&&(this.checked||!Ye.test(e))}).map(function(e,t){var i=X(this).val();return null==i?null:X.isArray(i)?X.map(i,function(e){return{name:t.name,value:e.replace(xt,"\r\n")}}):{name:t.name,value:i.replace(xt,"\r\n")}}).get()}}),X.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Ct=0,St={},$t={0:200,1223:204},Ot=X.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in St)St[e]()}),Z.cors=!!Ot&&"withCredentials"in Ot,Z.ajax=Ot=!!Ot,X.ajaxTransport(function(e){var t;return Z.cors||Ot&&!e.crossDomain?{send:function(i,n){var o,r=e.xhr(),a=++Ct;if(r.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)r[o]=e.xhrFields[o];e.mimeType&&r.overrideMimeType&&r.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(o in i)r.setRequestHeader(o,i[o]);t=function(e){return function(){t&&(delete St[a],t=r.onload=r.onerror=null,"abort"===e?r.abort():"error"===e?n(r.status,r.statusText):n($t[r.status]||r.status,r.statusText,"string"==typeof r.responseText?{text:r.responseText}:void 0,r.getAllResponseHeaders()))}},r.onload=t(),r.onerror=t("error"),t=St[a]=t("abort");try{r.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}:void 0}),X.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return X.globalEval(e),e}}}),X.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),X.ajaxTransport("script",function(e){if(e.crossDomain){var t,i;return{send:function(n,o){t=X("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",i=function(e){t.remove(),i=null,e&&o("error"===e.type?404:200,e.type)}),K.head.appendChild(t[0])},abort:function(){i&&i()}}}});var Et=[],At=/(=)\?(?=&|$)|\?\?/;X.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Et.pop()||X.expando+"_"+ut++;return this[e]=!0,e}}),X.ajaxPrefilter("json jsonp",function(t,i,n){var o,r,a,s=t.jsonp!==!1&&(At.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&At.test(t.data)&&"data");return s||"jsonp"===t.dataTypes[0]?(o=t.jsonpCallback=X.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(At,"$1"+o):t.jsonp!==!1&&(t.url+=(ct.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return a||X.error(o+" was not called"),a[0]},t.dataTypes[0]="json",r=e[o],e[o]=function(){a=arguments},n.always(function(){e[o]=r,t[o]&&(t.jsonpCallback=i.jsonpCallback,Et.push(o)),a&&X.isFunction(r)&&r(a[0]),a=r=void 0}),"script"):void 0}),X.parseHTML=function(e,t,i){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(i=t,t=!1),t=t||K;var n=ae.exec(e),o=!i&&[];return n?[t.createElement(n[1])]:(n=X.buildFragment([e],t,o),o&&o.length&&X(o).remove(),X.merge([],n.childNodes))};var jt=X.fn.load;X.fn.load=function(e,t,i){if("string"!=typeof e&&jt)return jt.apply(this,arguments);var n,o,r,a=this,s=e.indexOf(" ");return s>=0&&(n=X.trim(e.slice(s)),e=e.slice(0,s)),X.isFunction(t)?(i=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&X.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){r=arguments,a.html(n?X("<div>").append(X.parseHTML(e)).find(n):e)}).complete(i&&function(e,t){a.each(i,r||[e.responseText,t,e])}),this},X.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){X.fn[t]=function(e){return this.on(t,e)}}),X.expr.filters.animated=function(e){return X.grep(X.timers,function(t){return e===t.elem}).length};var qt=e.document.documentElement;X.offset={setOffset:function(e,t,i){var n,o,r,a,s,l,u,c=X.css(e,"position"),d=X(e),h={};"static"===c&&(e.style.position="relative"),s=d.offset(),r=X.css(e,"top"),l=X.css(e,"left"),u=("absolute"===c||"fixed"===c)&&(r+l).indexOf("auto")>-1,u?(n=d.position(),a=n.top,o=n.left):(a=parseFloat(r)||0,o=parseFloat(l)||0),X.isFunction(t)&&(t=t.call(e,i,s)),null!=t.top&&(h.top=t.top-s.top+a),null!=t.left&&(h.left=t.left-s.left+o),"using"in t?t.using.call(e,h):d.css(h)}},X.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){X.offset.setOffset(this,e,t)});var t,i,n=this[0],o={top:0,left:0},r=n&&n.ownerDocument;return r?(t=r.documentElement,X.contains(t,n)?(typeof n.getBoundingClientRect!==xe&&(o=n.getBoundingClientRect()),i=R(r),{top:o.top+i.pageYOffset-t.clientTop,left:o.left+i.pageXOffset-t.clientLeft}):o):void 0},position:function(){if(this[0]){var e,t,i=this[0],n={top:0,left:0};return"fixed"===X.css(i,"position")?t=i.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),X.nodeName(e[0],"html")||(n=e.offset()),n.top+=X.css(e[0],"borderTopWidth",!0),n.left+=X.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-X.css(i,"marginTop",!0),left:t.left-n.left-X.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||qt;e&&!X.nodeName(e,"html")&&"static"===X.css(e,"position");)e=e.offsetParent;return e||qt})}}),X.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var n="pageYOffset"===i;X.fn[t]=function(o){return me(this,function(t,o,r){var a=R(t);return void 0===r?a?a[i]:t[o]:void(a?a.scrollTo(n?e.pageXOffset:r,n?r:e.pageYOffset):t[o]=r)},t,o,arguments.length,null)}}),X.each(["top","left"],function(e,t){X.cssHooks[t]=D(Z.pixelPosition,function(e,i){return i?(i=b(e,t),Fe.test(i)?X(e).position()[t]+"px":i):void 0})}),X.each({Height:"height",Width:"width"},function(e,t){X.each({padding:"inner"+e,content:t,"":"outer"+e},function(i,n){X.fn[n]=function(n,o){var r=arguments.length&&(i||"boolean"!=typeof n),a=i||(n===!0||o===!0?"margin":"border");return me(this,function(t,i,n){var o;return X.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===n?X.css(t,i,a):X.style(t,i,n,a)},t,r?n:void 0,r,null)}})}),X.fn.size=function(){return this.length},X.fn.andSelf=X.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return X});var Nt=e.jQuery,Lt=e.$;return X.noConflict=function(t){return e.$===X&&(e.$=Lt),t&&e.jQuery===X&&(e.jQuery=Nt),X},typeof t===xe&&(e.jQuery=e.$=X),X}),function(e){"use strict";var t,i,n=Array.prototype.slice;i=function(t){this.options=e.extend({},i.defaults,t),this.parser=this.options.parser,this.locale=this.options.locale,this.messageStore=this.options.messageStore,this.languages={},this.init()},i.prototype={init:function(){var t=this;String.locale=t.locale,String.prototype.toLocaleString=function(){var i,n,o,r,a,s,l;for(o=this.valueOf(),r=t.locale,a=0;r;){i=r.split("-"),n=i.length;do{if(s=i.slice(0,n).join("-"),l=t.messageStore.get(s,o))return l;n--}while(n);if("en"===r)break;r=e.i18n.fallbacks[t.locale]&&e.i18n.fallbacks[t.locale][a]||t.options.fallbackLocale,e.i18n.log("Trying fallback locale for "+t.locale+": "+r),a++}return""}},destroy:function(){e.removeData(document,"i18n")},load:function(t,i){var n,o,r,a={};if(t||i||(t="i18n/"+e.i18n().locale+".json",i=e.i18n().locale),"string"==typeof t&&"json"!==t.split(".").pop()){a[i]=t+"/"+i+".json",n=(e.i18n.fallbacks[i]||[]).concat(this.options.fallbackLocale);for(o in n)r=n[o],a[r]=t+"/"+r+".json";return this.load(a)}return this.messageStore.load(t,i)},parse:function(t,i){var n=t.toLocaleString();return this.parser.language=e.i18n.languages[e.i18n().locale]||e.i18n.languages.default,""===n&&(n=t),this.parser.parse(n,i)}},e.i18n=function(t,o){var r,a=e.data(document,"i18n"),s="object"==typeof t&&t;return s&&s.locale&&a&&a.locale!==s.locale&&(String.locale=a.locale=s.locale),a||(a=new i(s),e.data(document,"i18n",a)),"string"==typeof t?(r=void 0!==o?n.call(arguments,1):[],a.parse(t,r)):a},e.fn.i18n=function(){var t=e.data(document,"i18n");return t||(t=new i,e.data(document,"i18n",t)),String.locale=t.locale,this.each(function(){var i=e(this),n=i.data("i18n");n?i.text(t.parse(n)):i.find("[data-i18n]").i18n()})},String.locale=String.locale||e("html").attr("lang"),String.locale||(void 0!==typeof window.navigator?(t=window.navigator,String.locale=t.language||t.userLanguage||""):String.locale=""),e.i18n.languages={},e.i18n.messageStore=e.i18n.messageStore||{},e.i18n.parser={parse:function(e,t){return e.replace(/\$(\d+)/g,function(e,i){var n=parseInt(i,10)-1;return void 0!==t[n]?t[n]:"$"+i})},emitter:{}},e.i18n.fallbacks={},e.i18n.debug=!1,e.i18n.log=function(){window.console&&e.i18n.debug&&window.console.log.apply(window.console,arguments)},i.defaults={locale:String.locale,fallbackLocale:"en",parser:e.i18n.parser,messageStore:e.i18n.messageStore},e.i18n.constructor=i}(jQuery),function(e,t,i){"use strict";function n(t){var i=e.Deferred();return e.getJSON(t).done(i.resolve).fail(function(n,o,r){e.i18n.log("Error in loading messages from "+t+" Exception: "+r),i.resolve()}),i.promise()}var o=function(){this.messages={},this.sources={}};o.prototype={load:function(t,i){var o=null,r=null,a=[],s=this;if("string"==typeof t)return e.i18n.log("Loading messages from: "+t),r=n(t).done(function(e){s.set(i,e)}),r.promise();if(i)return s.set(i,t),e.Deferred().resolve();for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&(i=o,a.push(s.load(t[o],i)));return e.when.apply(e,a)},set:function(t,i){this.messages[t]?this.messages[t]=e.extend(this.messages[t],i):this.messages[t]=i},get:function(e,t){return this.messages[e]&&this.messages[e][t]}},e.extend(e.i18n.messageStore,new o)}(jQuery,window),function(e){"use strict";var t=function(t){this.options=e.extend({},e.i18n.parser.defaults,t),this.language=e.i18n.languages[String.locale]||e.i18n.languages.default,this.emitter=e.i18n.parser.emitter};t.prototype={constructor:t,simpleParse:function(e,t){return e.replace(/\$(\d+)/g,function(e,i){var n=parseInt(i,10)-1;return void 0!==t[n]?t[n]:"$"+i})},parse:function(t,i){return t.indexOf("{{")<0?this.simpleParse(t,i):(this.emitter.language=e.i18n.languages[e.i18n().locale]||e.i18n.languages.default,this.emitter.emit(this.ast(t),i))},ast:function(e){function t(e){return function(){var t,i;for(t=0;t<e.length;t++)if(i=e[t](),null!==i)return i;return null}}function i(e){var t,i,n=j,o=[];for(t=0;t<e.length;t++){if(i=e[t](),null===i)return j=n,null;o.push(i)}return o}function n(e,t){return function(){for(var i=j,n=[],o=t();null!==o;)n.push(o),o=t();return n.length<e?(j=i,null):n}}function o(t){var i=t.length;return function(){var n=null;return e.substr(j,i)===t&&(n=t,j+=i),n}}function r(t){return function(){var i=e.substr(j).match(t);return null===i?null:(j+=i[0].length,i[0])}}function a(e,t){return function(){var i=e();return null===i?null:t(i)}}function s(){var e=n(1,x)();return null===e?null:e.join("")}function l(){var e=n(1,T)();return null===e?null:e.join("")}function u(){var e=i([k,y]);return null===e?null:e[1]}function c(){var e=i([v,b]);return null===e?null:["REPLACE",parseInt(e[1],10)-1]}function d(){var e,t=i([m,n(0,E)]);return null===t?null:(e=t[1],e.length>1?["CONCAT"].concat(e):e[0])}function h(){var e=i([C,w,c]);return null===e?null:[e[0],e[2]]}function p(){var e=i([C,w,E]);return null===e?null:[e[0],e[2]]}function f(){var e=i([S,M,$]);return null===e?null:e[1]}function g(){var e=n(0,O)();return null===e?null:["CONCAT"].concat(e)}var m,w,k,y,v,b,D,_,Y,x,T,M,C,S,$,O,E,A,j=0;if(m=o("|"),w=o(":"),k=o("\\"),y=r(/^./),v=o("$"),b=r(/^\d+/),D=r(/^[^{}\[\]$\\]/),_=r(/^[^{}\[\]$\\|]/),Y=r(/^[^{}\[\]$\s]/),t([u,Y]),x=t([u,_]),T=t([u,D]),C=a(r(/^[ !"$&'()*,.\/0-9;=?@A-Z\^_`a-z~\x80-\xFF+\-]+/),function(e){return e.toString()}),M=t([function(){var e=i([t([h,p]),n(0,d)]);return null===e?null:e[0].concat(e[1])},function(){var e=i([C,n(0,d)]);return null===e?null:[e[0]].concat(e[1])}]),S=o("{{"),$=o("}}"),O=t([f,c,l]),E=t([f,c,s]),A=g(),null===A||j!==e.length)throw new Error("Parse error at position "+j.toString()+" in input: "+e);return A}},e.extend(e.i18n.parser,new t)}(jQuery),function(e){"use strict";var t=function(){this.language=e.i18n.languages[String.locale]||e.i18n.languages.default};t.prototype={constructor:t,emit:function(t,i){var n,o,r,a=this;switch(typeof t){case"string":case"number":n=t;break;case"object":if(o=e.map(t.slice(1),function(e){return a.emit(e,i)}),r=t[0].toLowerCase(),"function"!=typeof a[r])throw new Error('unknown operation "'+r+'"');n=a[r](o,i);break;case"undefined":n="";break;default:throw new Error("unexpected type in AST: "+typeof t)}return n},concat:function(t){var i="";return e.each(t,function(e,t){i+=t}),i},replace:function(e,t){var i=parseInt(e[0],10);return i<t.length?t[i]:"$"+(i+1)},plural:function(e){var t=parseFloat(this.language.convertNumber(e[0],10)),i=e.slice(1);return i.length?this.language.convertPlural(t,i):""},gender:function(e){var t=e[0],i=e.slice(1);return this.language.gender(t,i)},grammar:function(e){var t=e[0],i=e[1];return i&&t&&this.language.convertGrammar(i,t)}},e.extend(e.i18n.parser.emitter,new t)}(jQuery),function(e){"use strict";var t={pluralRules:{ak:{one:"n = 0..1"},am:{one:"i = 0 or n = 1"},ar:{zero:"n = 0",one:"n = 1",two:"n = 2",few:"n % 100 = 3..10",many:"n % 100 = 11..99"},be:{one:"n % 10 = 1 and n % 100 != 11",few:"n % 10 = 2..4 and n % 100 != 12..14",many:"n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14"},bh:{one:"n = 0..1"},bn:{one:"i = 0 or n = 1"},br:{one:"n % 10 = 1 and n % 100 != 11,71,91",two:"n % 10 = 2 and n % 100 != 12,72,92",few:"n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99",many:"n != 0 and n % 1000000 = 0"},bs:{one:"v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11",few:"v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14"},cs:{one:"i = 1 and v = 0",few:"i = 2..4 and v = 0",many:"v != 0"},cy:{zero:"n = 0",one:"n = 1",two:"n = 2",few:"n = 3",many:"n = 6"},da:{one:"n = 1 or t != 0 and i = 0,1"},fa:{one:"i = 0 or n = 1"},ff:{one:"i = 0,1"},fil:{one:"i = 0..1 and v = 0"},fr:{one:"i = 0,1"},ga:{one:"n = 1",two:"n = 2",few:"n = 3..6",many:"n = 7..10"},gd:{one:"n = 1,11",two:"n = 2,12",few:"n = 3..10,13..19"},gu:{one:"i = 0 or n = 1"},guw:{one:"n = 0..1"},gv:{one:"n % 10 = 1",two:"n % 10 = 2",few:"n % 100 = 0,20,40,60"},he:{one:"i = 1 and v = 0",two:"i = 2 and v = 0",many:"v = 0 and n != 0..10 and n % 10 = 0"},hi:{one:"i = 0 or n = 1"},hr:{one:"v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11",few:"v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14"},hy:{one:"i = 0,1"},is:{one:"t = 0 and i % 10 = 1 and i % 100 != 11 or t != 0"},iu:{one:"n = 1",two:"n = 2"},iw:{one:"i = 1 and v = 0",two:"i = 2 and v = 0",many:"v = 0 and n != 0..10 and n % 10 = 0"},kab:{one:"i = 0,1"},kn:{one:"i = 0 or n = 1"},kw:{one:"n = 1",two:"n = 2"},lag:{zero:"n = 0",one:"i = 0,1 and n != 0"},ln:{one:"n = 0..1"},lt:{one:"n % 10 = 1 and n % 100 != 11..19",few:"n % 10 = 2..9 and n % 100 != 11..19",many:"f != 0"},lv:{zero:"n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19",one:"n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1"},mg:{one:"n = 0..1"},mk:{one:"v = 0 and i % 10 = 1 or f % 10 = 1"},mo:{one:"i = 1 and v = 0",few:"v != 0 or n = 0 or n != 1 and n % 100 = 1..19"},mr:{one:"i = 0 or n = 1"},mt:{one:"n = 1",few:"n = 0 or n % 100 = 2..10",many:"n % 100 = 11..19"},naq:{one:"n = 1",two:"n = 2"},nso:{one:"n = 0..1"},pa:{one:"n = 0..1"},pl:{one:"i = 1 and v = 0",few:"v = 0 and i % 10 = 2..4 and i % 100 != 12..14",many:"v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14"},pt:{one:"i = 1 and v = 0 or i = 0 and t = 1"},pt_PT:{one:"n = 1 and v = 0"},ro:{one:"i = 1 and v = 0",few:"v != 0 or n = 0 or n != 1 and n % 100 = 1..19"},ru:{one:"v = 0 and i % 10 = 1 and i % 100 != 11",many:"v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14"},se:{one:"n = 1",two:"n = 2"},sh:{one:"v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11",few:"v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14"},shi:{one:"i = 0 or n = 1",few:"n = 2..10"},si:{one:"n = 0,1 or i = 0 and f = 1"},sk:{one:"i = 1 and v = 0",few:"i = 2..4 and v = 0",many:"v != 0"},sl:{one:"v = 0 and i % 100 = 1",two:"v = 0 and i % 100 = 2",few:"v = 0 and i % 100 = 3..4 or v != 0"},sma:{one:"n = 1",two:"n = 2"},smi:{one:"n = 1",two:"n = 2"},smj:{one:"n = 1",two:"n = 2"},smn:{one:"n = 1",two:"n = 2"},sms:{one:"n = 1",two:"n = 2"},sr:{one:"v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11",few:"v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14"},ti:{one:"n = 0..1"},tl:{one:"i = 0..1 and v = 0"},tzm:{one:"n = 0..1 or n = 11..99"},uk:{one:"v = 0 and i % 10 = 1 and i % 100 != 11",few:"v = 0 and i % 10 = 2..4 and i % 100 != 12..14",many:"v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14"},wa:{one:"n = 0..1"},zu:{one:"i = 0 or n = 1"}},convertPlural:function(t,i){var n,o,r,a,s,l=new RegExp("\\d+=","i");if(!i||0===i.length)return"";for(r=0;r<i.length;r++)if(s=i[r],l.test(s)){if(a=parseInt(s.substring(0,s.indexOf("=")),10),a===t)return s.substr(s.indexOf("=")+1);i[r]=void 0}return i=e.map(i,function(e){if(void 0!==e)return e}),(n=this.pluralRules[e.i18n().locale])?(o=this.getPluralForm(t,n),o=Math.min(o,i.length-1),i[o]):1===t?i[0]:i[1]},getPluralForm:function(e,t){var i,n=["zero","one","two","few","many","other"],o=0;for(i=0;i<n.length;i++)if(t[n[i]]){if("undefined"==typeof pluralRuleParser)return o;if(pluralRuleParser(t[n[i]],e))return o;o++}return o},convertNumber:function(t,i){var n,o,r,a,s,l;if(a=this.digitTransformTable(e.i18n().locale),s=String(t),l="",!a)return t;if(i){if(parseFloat(t,10)===t)return t;n=[];for(o in a)n[a[o]]=o;a=n}for(r=0;r<s.length;r++)l+=a[s[r]]?a[s[r]]:s[r];return i?parseFloat(l,10):l},convertGrammar:function(e,t){return e},gender:function(e,t){if(!t||0===t.length)return"";for(;t.length<2;)t.push(t[t.length-1]);return"male"===e?t[0]:"female"===e?t[1]:3===t.length?t[2]:t[0]},digitTransformTable:function(e){var t={ar:"٠١٢٣٤٥٦٧٨٩",fa:"۰۱۲۳۴۵۶۷۸۹",ml:"൦൧൨൩൪൫൬൭൮൯",kn:"೦೧೨೩೪೫೬೭೮೯",lo:"໐໑໒໓໔໕໖໗໘໙",or:"୦୧୨୩୪୫୬୭୮୯",kh:"០១២៣៤៥៦៧៨៩",pa:"੦੧੨੩੪੫੬੭੮੯",gu:"૦૧૨૩૪૫૬૭૮૯",
hi:"०१२३४५६७८९",my:"၀၁၂၃၄၅၆၇၈၉",ta:"௦௧௨௩௪௫௬௭௮௯",te:"౦౧౨౩౪౫౬౭౮౯",th:"๐๑๒๓๔๕๖๗๘๙",bo:"༠༡༢༣༤༥༦༧༨༩"};return!!t[e]&&t[e].split("")}};e.extend(e.i18n.languages,{default:t})}(jQuery),!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";function e(){return Ai.apply(null,arguments)}function t(e){Ai=e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)}function n(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function o(e,t){var i,n=[];for(i=0;i<e.length;++i)n.push(t(e[i],i));return n}function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function a(e,t){for(var i in t)r(t,i)&&(e[i]=t[i]);return r(t,"toString")&&(e.toString=t.toString),r(t,"valueOf")&&(e.valueOf=t.valueOf),e}function s(e,t,i,n){return Ce(e,t,i,n,!0).utc()}function l(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function u(e){return null==e._pf&&(e._pf=l()),e._pf}function c(e){if(null==e._isValid){var t=u(e);e._isValid=!(isNaN(e._d.getTime())||!(t.overflow<0)||t.empty||t.invalidMonth||t.invalidWeekday||t.nullInput||t.invalidFormat||t.userInvalidated),e._strict&&(e._isValid=e._isValid&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour)}return e._isValid}function d(e){var t=s(NaN);return null!=e?a(u(t),e):u(t).userInvalidated=!0,t}function h(e,t){var i,n,o;if("undefined"!=typeof t._isAMomentObject&&(e._isAMomentObject=t._isAMomentObject),"undefined"!=typeof t._i&&(e._i=t._i),"undefined"!=typeof t._f&&(e._f=t._f),"undefined"!=typeof t._l&&(e._l=t._l),"undefined"!=typeof t._strict&&(e._strict=t._strict),"undefined"!=typeof t._tzm&&(e._tzm=t._tzm),"undefined"!=typeof t._isUTC&&(e._isUTC=t._isUTC),"undefined"!=typeof t._offset&&(e._offset=t._offset),"undefined"!=typeof t._pf&&(e._pf=u(t)),"undefined"!=typeof t._locale&&(e._locale=t._locale),qi.length>0)for(i in qi)n=qi[i],o=t[n],"undefined"!=typeof o&&(e[n]=o);return e}function p(t){h(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),Ni===!1&&(Ni=!0,e.updateOffset(this),Ni=!1)}function f(e){return e instanceof p||null!=e&&null!=e._isAMomentObject}function g(e){return 0>e?Math.ceil(e):Math.floor(e)}function m(e){var t=+e,i=0;return 0!==t&&isFinite(t)&&(i=g(t)),i}function w(e,t,i){var n,o=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(n=0;o>n;n++)(i&&e[n]!==t[n]||!i&&m(e[n])!==m(t[n]))&&a++;return a+r}function k(){}function y(e){return e?e.toLowerCase().replace("_","-"):e}function v(e){for(var t,i,n,o,r=0;r<e.length;){for(o=y(e[r]).split("-"),t=o.length,i=y(e[r+1]),i=i?i.split("-"):null;t>0;){if(n=b(o.slice(0,t).join("-")))return n;if(i&&i.length>=t&&w(o,i,!0)>=t-1)break;t--}r++}return null}function b(e){var t=null;if(!Li[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=ji._abbr,require("./locale/"+e),D(t)}catch(e){}return Li[e]}function D(e,t){var i;return e&&(i="undefined"==typeof t?Y(e):_(e,t),i&&(ji=i)),ji._abbr}function _(e,t){return null!==t?(t.abbr=e,Li[e]=Li[e]||new k,Li[e].set(t),D(e),Li[e]):(delete Li[e],null)}function Y(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return ji;if(!i(e)){if(t=b(e))return t;e=[e]}return v(e)}function x(e,t){var i=e.toLowerCase();Ii[i]=Ii[i+"s"]=Ii[t]=e}function T(e){return"string"==typeof e?Ii[e]||Ii[e.toLowerCase()]:void 0}function M(e){var t,i,n={};for(i in e)r(e,i)&&(t=T(i),t&&(n[t]=e[i]));return n}function C(t,i){return function(n){return null!=n?($(this,t,n),e.updateOffset(this,i),this):S(this,t)}}function S(e,t){return e._d["get"+(e._isUTC?"UTC":"")+t]()}function $(e,t,i){return e._d["set"+(e._isUTC?"UTC":"")+t](i)}function O(e,t){var i;if("object"==typeof e)for(i in e)this.set(i,e[i]);else if(e=T(e),"function"==typeof this[e])return this[e](t);return this}function E(e,t,i){var n=""+Math.abs(e),o=t-n.length,r=e>=0;return(r?i?"+":"":"-")+Math.pow(10,Math.max(0,o)).toString().substr(1)+n}function A(e,t,i,n){var o=n;"string"==typeof n&&(o=function(){return this[n]()}),e&&(Fi[e]=o),t&&(Fi[t[0]]=function(){return E(o.apply(this,arguments),t[1],t[2])}),i&&(Fi[i]=function(){return this.localeData().ordinal(o.apply(this,arguments),e)})}function j(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function q(e){var t,i,n=e.match(Pi);for(t=0,i=n.length;i>t;t++)Fi[n[t]]?n[t]=Fi[n[t]]:n[t]=j(n[t]);return function(o){var r="";for(t=0;i>t;t++)r+=n[t]instanceof Function?n[t].call(o,e):n[t];return r}}function N(e,t){return e.isValid()?(t=L(t,e.localeData()),Ri[t]=Ri[t]||q(t),Ri[t](e)):e.localeData().invalidDate()}function L(e,t){function i(e){return t.longDateFormat(e)||e}var n=5;for(Ui.lastIndex=0;n>=0&&Ui.test(e);)e=e.replace(Ui,i),Ui.lastIndex=0,n-=1;return e}function I(e){return"function"==typeof e&&"[object Function]"===Object.prototype.toString.call(e)}function P(e,t,i){on[e]=I(t)?t:function(e){return e&&i?i:t}}function U(e,t){return r(on,e)?on[e](t._strict,t._locale):new RegExp(R(e))}function R(e){return e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,i,n,o){return t||i||n||o}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function F(e,t){var i,n=t;for("string"==typeof e&&(e=[e]),"number"==typeof t&&(n=function(e,i){i[t]=m(e)}),i=0;i<e.length;i++)rn[e[i]]=n}function z(e,t){F(e,function(e,i,n,o){n._w=n._w||{},t(e,n._w,n,o)})}function H(e,t,i){null!=t&&r(rn,e)&&rn[e](t,i._a,i,e)}function W(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function B(e){return this._months[e.month()]}function V(e){return this._monthsShort[e.month()]}function G(e,t,i){var n,o,r;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;12>n;n++){if(o=s([2e3,n]),i&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(o,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(o,"").replace(".","")+"$","i")),i||this._monthsParse[n]||(r="^"+this.months(o,"")+"|^"+this.monthsShort(o,""),this._monthsParse[n]=new RegExp(r.replace(".",""),"i")),i&&"MMMM"===t&&this._longMonthsParse[n].test(e))return n;if(i&&"MMM"===t&&this._shortMonthsParse[n].test(e))return n;if(!i&&this._monthsParse[n].test(e))return n}}function Q(e,t){var i;return"string"==typeof t&&(t=e.localeData().monthsParse(t),"number"!=typeof t)?e:(i=Math.min(e.date(),W(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,i),e)}function Z(t){return null!=t?(Q(this,t),e.updateOffset(this,!0),this):S(this,"Month")}function K(){return W(this.year(),this.month())}function J(e){var t,i=e._a;return i&&-2===u(e).overflow&&(t=i[sn]<0||i[sn]>11?sn:i[ln]<1||i[ln]>W(i[an],i[sn])?ln:i[un]<0||i[un]>24||24===i[un]&&(0!==i[cn]||0!==i[dn]||0!==i[hn])?un:i[cn]<0||i[cn]>59?cn:i[dn]<0||i[dn]>59?dn:i[hn]<0||i[hn]>999?hn:-1,u(e)._overflowDayOfYear&&(an>t||t>ln)&&(t=ln),u(e).overflow=t),e}function X(t){e.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function ee(e,t){var i=!0;return a(function(){return i&&(X(e+"\n"+(new Error).stack),i=!1),t.apply(this,arguments)},t)}function te(e,t){gn[e]||(X(t),gn[e]=!0)}function ie(e){var t,i,n=e._i,o=mn.exec(n);if(o){for(u(e).iso=!0,t=0,i=wn.length;i>t;t++)if(wn[t][1].exec(n)){e._f=wn[t][0];break}for(t=0,i=kn.length;i>t;t++)if(kn[t][1].exec(n)){e._f+=(o[6]||" ")+kn[t][0];break}n.match(en)&&(e._f+="Z"),be(e)}else e._isValid=!1}function ne(t){var i=yn.exec(t._i);return null!==i?void(t._d=new Date((+i[1]))):(ie(t),void(t._isValid===!1&&(delete t._isValid,e.createFromInputFallback(t))))}function oe(e,t,i,n,o,r,a){var s=new Date(e,t,i,n,o,r,a);return 1970>e&&s.setFullYear(e),s}function re(e){var t=new Date(Date.UTC.apply(null,arguments));return 1970>e&&t.setUTCFullYear(e),t}function ae(e){return se(e)?366:365}function se(e){return e%4===0&&e%100!==0||e%400===0}function le(){return se(this.year())}function ue(e,t,i){var n,o=i-t,r=i-e.day();return r>o&&(r-=7),o-7>r&&(r+=7),n=Se(e).add(r,"d"),{week:Math.ceil(n.dayOfYear()/7),year:n.year()}}function ce(e){return ue(e,this._week.dow,this._week.doy).week}function de(){return this._week.dow}function he(){return this._week.doy}function pe(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function fe(e){var t=ue(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function ge(e,t,i,n,o){var r,a=6+o-n,s=re(e,0,1+a),l=s.getUTCDay();return o>l&&(l+=7),i=null!=i?1*i:o,r=1+a+7*(t-1)-l+i,{year:r>0?e:e-1,dayOfYear:r>0?r:ae(e-1)+r}}function me(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}function we(e,t,i){return null!=e?e:null!=t?t:i}function ke(e){var t=new Date;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function ye(e){var t,i,n,o,r=[];if(!e._d){for(n=ke(e),e._w&&null==e._a[ln]&&null==e._a[sn]&&ve(e),e._dayOfYear&&(o=we(e._a[an],n[an]),e._dayOfYear>ae(o)&&(u(e)._overflowDayOfYear=!0),i=re(o,0,e._dayOfYear),e._a[sn]=i.getUTCMonth(),e._a[ln]=i.getUTCDate()),t=0;3>t&&null==e._a[t];++t)e._a[t]=r[t]=n[t];for(;7>t;t++)e._a[t]=r[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[un]&&0===e._a[cn]&&0===e._a[dn]&&0===e._a[hn]&&(e._nextDay=!0,e._a[un]=0),e._d=(e._useUTC?re:oe).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[un]=24)}}function ve(e){var t,i,n,o,r,a,s;t=e._w,null!=t.GG||null!=t.W||null!=t.E?(r=1,a=4,i=we(t.GG,e._a[an],ue(Se(),1,4).year),n=we(t.W,1),o=we(t.E,1)):(r=e._locale._week.dow,a=e._locale._week.doy,i=we(t.gg,e._a[an],ue(Se(),r,a).year),n=we(t.w,1),null!=t.d?(o=t.d,r>o&&++n):o=null!=t.e?t.e+r:r),s=ge(i,n,o,a,r),e._a[an]=s.year,e._dayOfYear=s.dayOfYear}function be(t){if(t._f===e.ISO_8601)return void ie(t);t._a=[],u(t).empty=!0;var i,n,o,r,a,s=""+t._i,l=s.length,c=0;for(o=L(t._f,t._locale).match(Pi)||[],i=0;i<o.length;i++)r=o[i],n=(s.match(U(r,t))||[])[0],n&&(a=s.substr(0,s.indexOf(n)),a.length>0&&u(t).unusedInput.push(a),s=s.slice(s.indexOf(n)+n.length),c+=n.length),Fi[r]?(n?u(t).empty=!1:u(t).unusedTokens.push(r),H(r,n,t)):t._strict&&!n&&u(t).unusedTokens.push(r);u(t).charsLeftOver=l-c,s.length>0&&u(t).unusedInput.push(s),u(t).bigHour===!0&&t._a[un]<=12&&t._a[un]>0&&(u(t).bigHour=void 0),t._a[un]=De(t._locale,t._a[un],t._meridiem),ye(t),J(t)}function De(e,t,i){var n;return null==i?t:null!=e.meridiemHour?e.meridiemHour(t,i):null!=e.isPM?(n=e.isPM(i),n&&12>t&&(t+=12),n||12!==t||(t=0),t):t}function _e(e){var t,i,n,o,r;if(0===e._f.length)return u(e).invalidFormat=!0,void(e._d=new Date(NaN));for(o=0;o<e._f.length;o++)r=0,t=h({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[o],be(t),c(t)&&(r+=u(t).charsLeftOver,r+=10*u(t).unusedTokens.length,u(t).score=r,(null==n||n>r)&&(n=r,i=t));a(e,i||t)}function Ye(e){if(!e._d){var t=M(e._i);e._a=[t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],ye(e)}}function xe(e){var t=new p(J(Te(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Te(e){var t=e._i,o=e._f;return e._locale=e._locale||Y(e._l),null===t||void 0===o&&""===t?d({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),f(t)?new p(J(t)):(i(o)?_e(e):o?be(e):n(t)?e._d=t:Me(e),e))}function Me(t){var r=t._i;void 0===r?t._d=new Date:n(r)?t._d=new Date((+r)):"string"==typeof r?ne(t):i(r)?(t._a=o(r.slice(0),function(e){return parseInt(e,10)}),ye(t)):"object"==typeof r?Ye(t):"number"==typeof r?t._d=new Date(r):e.createFromInputFallback(t)}function Ce(e,t,i,n,o){var r={};return"boolean"==typeof i&&(n=i,i=void 0),r._isAMomentObject=!0,r._useUTC=r._isUTC=o,r._l=i,r._i=e,r._f=t,r._strict=n,xe(r)}function Se(e,t,i,n){return Ce(e,t,i,n,!1)}function $e(e,t){var n,o;if(1===t.length&&i(t[0])&&(t=t[0]),!t.length)return Se();for(n=t[0],o=1;o<t.length;++o)(!t[o].isValid()||t[o][e](n))&&(n=t[o]);return n}function Oe(){var e=[].slice.call(arguments,0);return $e("isBefore",e)}function Ee(){var e=[].slice.call(arguments,0);return $e("isAfter",e)}function Ae(e){var t=M(e),i=t.year||0,n=t.quarter||0,o=t.month||0,r=t.week||0,a=t.day||0,s=t.hour||0,l=t.minute||0,u=t.second||0,c=t.millisecond||0;this._milliseconds=+c+1e3*u+6e4*l+36e5*s,this._days=+a+7*r,this._months=+o+3*n+12*i,this._data={},this._locale=Y(),this._bubble()}function je(e){return e instanceof Ae}function qe(e,t){A(e,0,0,function(){var e=this.utcOffset(),i="+";return 0>e&&(e=-e,i="-"),i+E(~~(e/60),2)+t+E(~~e%60,2)})}function Ne(e){var t=(e||"").match(en)||[],i=t[t.length-1]||[],n=(i+"").match(Yn)||["-",0,0],o=+(60*n[1])+m(n[2]);return"+"===n[0]?o:-o}function Le(t,i){var o,r;return i._isUTC?(o=i.clone(),r=(f(t)||n(t)?+t:+Se(t))-+o,o._d.setTime(+o._d+r),e.updateOffset(o,!1),o):Se(t).local()}function Ie(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Pe(t,i){var n,o=this._offset||0;return null!=t?("string"==typeof t&&(t=Ne(t)),Math.abs(t)<16&&(t=60*t),!this._isUTC&&i&&(n=Ie(this)),this._offset=t,this._isUTC=!0,null!=n&&this.add(n,"m"),o!==t&&(!i||this._changeInProgress?tt(this,Ze(t-o,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?o:Ie(this)}function Ue(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Re(e){return this.utcOffset(0,e)}function Fe(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ie(this),"m")),this}function ze(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ne(this._i)),this}function He(e){return e=e?Se(e).utcOffset():0,(this.utcOffset()-e)%60===0}function We(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Be(){if("undefined"!=typeof this._isDSTShifted)return this._isDSTShifted;var e={};if(h(e,this),e=Te(e),e._a){var t=e._isUTC?s(e._a):Se(e._a);this._isDSTShifted=this.isValid()&&w(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Ve(){return!this._isUTC}function Ge(){return this._isUTC}function Qe(){return this._isUTC&&0===this._offset}function Ze(e,t){var i,n,o,a=e,s=null;return je(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(a={},t?a[t]=e:a.milliseconds=e):(s=xn.exec(e))?(i="-"===s[1]?-1:1,a={y:0,d:m(s[ln])*i,h:m(s[un])*i,m:m(s[cn])*i,s:m(s[dn])*i,ms:m(s[hn])*i}):(s=Tn.exec(e))?(i="-"===s[1]?-1:1,a={y:Ke(s[2],i),M:Ke(s[3],i),d:Ke(s[4],i),h:Ke(s[5],i),m:Ke(s[6],i),s:Ke(s[7],i),w:Ke(s[8],i)}):null==a?a={}:"object"==typeof a&&("from"in a||"to"in a)&&(o=Xe(Se(a.from),Se(a.to)),a={},a.ms=o.milliseconds,a.M=o.months),n=new Ae(a),je(e)&&r(e,"_locale")&&(n._locale=e._locale),n}function Ke(e,t){var i=e&&parseFloat(e.replace(",","."));return(isNaN(i)?0:i)*t}function Je(e,t){var i={milliseconds:0,months:0};return i.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(i.months,"M").isAfter(t)&&--i.months,i.milliseconds=+t-+e.clone().add(i.months,"M"),i}function Xe(e,t){var i;return t=Le(t,e),e.isBefore(t)?i=Je(e,t):(i=Je(t,e),i.milliseconds=-i.milliseconds,i.months=-i.months),i}function et(e,t){return function(i,n){var o,r;return null===n||isNaN(+n)||(te(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period)."),r=i,i=n,n=r),i="string"==typeof i?+i:i,o=Ze(i,n),tt(this,o,e),this}}function tt(t,i,n,o){var r=i._milliseconds,a=i._days,s=i._months;o=null==o||o,r&&t._d.setTime(+t._d+r*n),a&&$(t,"Date",S(t,"Date")+a*n),s&&Q(t,S(t,"Month")+s*n),o&&e.updateOffset(t,a||s)}function it(e,t){var i=e||Se(),n=Le(i,this).startOf("day"),o=this.diff(n,"days",!0),r=-6>o?"sameElse":-1>o?"lastWeek":0>o?"lastDay":1>o?"sameDay":2>o?"nextDay":7>o?"nextWeek":"sameElse";return this.format(t&&t[r]||this.localeData().calendar(r,this,Se(i)))}function nt(){return new p(this)}function ot(e,t){var i;return t=T("undefined"!=typeof t?t:"millisecond"),"millisecond"===t?(e=f(e)?e:Se(e),+this>+e):(i=f(e)?+e:+Se(e),i<+this.clone().startOf(t))}function rt(e,t){var i;return t=T("undefined"!=typeof t?t:"millisecond"),"millisecond"===t?(e=f(e)?e:Se(e),+e>+this):(i=f(e)?+e:+Se(e),+this.clone().endOf(t)<i)}function at(e,t,i){return this.isAfter(e,i)&&this.isBefore(t,i)}function st(e,t){var i;return t=T(t||"millisecond"),"millisecond"===t?(e=f(e)?e:Se(e),+this===+e):(i=+Se(e),+this.clone().startOf(t)<=i&&i<=+this.clone().endOf(t))}function lt(e,t,i){var n,o,r=Le(e,this),a=6e4*(r.utcOffset()-this.utcOffset());return t=T(t),"year"===t||"month"===t||"quarter"===t?(o=ut(this,r),"quarter"===t?o/=3:"year"===t&&(o/=12)):(n=this-r,o="second"===t?n/1e3:"minute"===t?n/6e4:"hour"===t?n/36e5:"day"===t?(n-a)/864e5:"week"===t?(n-a)/6048e5:n),i?o:g(o)}function ut(e,t){var i,n,o=12*(t.year()-e.year())+(t.month()-e.month()),r=e.clone().add(o,"months");return 0>t-r?(i=e.clone().add(o-1,"months"),n=(t-r)/(r-i)):(i=e.clone().add(o+1,"months"),n=(t-r)/(i-r)),-(o+n)}function ct(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function dt(){var e=this.clone().utc();return 0<e.year()&&e.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():N(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function ht(t){var i=N(this,t||e.defaultFormat);return this.localeData().postformat(i)}function pt(e,t){return this.isValid()?Ze({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function ft(e){return this.from(Se(),e)}function gt(e,t){return this.isValid()?Ze({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function mt(e){return this.to(Se(),e)}function wt(e){var t;return void 0===e?this._locale._abbr:(t=Y(e),null!=t&&(this._locale=t),this)}function kt(){return this._locale}function yt(e){switch(e=T(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function vt(e){return e=T(e),void 0===e||"millisecond"===e?this:this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms")}function bt(){return+this._d-6e4*(this._offset||0)}function Dt(){return Math.floor(+this/1e3)}function _t(){return this._offset?new Date((+this)):this._d}function Yt(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function xt(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Tt(){return c(this)}function Mt(){return a({},u(this))}function Ct(){return u(this).overflow}function St(e,t){A(0,[e,e.length],0,t)}function $t(e,t,i){return ue(Se([e,11,31+t-i]),t,i).week}function Ot(e){var t=ue(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==e?t:this.add(e-t,"y")}function Et(e){var t=ue(this,1,4).year;return null==e?t:this.add(e-t,"y")}function At(){return $t(this.year(),1,4)}function jt(){var e=this.localeData()._week;return $t(this.year(),e.dow,e.doy)}function qt(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}function Nt(e,t){return"string"!=typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function Lt(e){return this._weekdays[e.day()]}function It(e){return this._weekdaysShort[e.day()]}function Pt(e){return this._weekdaysMin[e.day()]}function Ut(e){var t,i,n;for(this._weekdaysParse=this._weekdaysParse||[],t=0;7>t;t++)if(this._weekdaysParse[t]||(i=Se([2e3,1]).day(t),n="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[t]=new RegExp(n.replace(".",""),"i")),this._weekdaysParse[t].test(e))return t}function Rt(e){var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=Nt(e,this.localeData()),this.add(e-t,"d")):t}function Ft(e){var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function zt(e){return null==e?this.day()||7:this.day(this.day()%7?e:e-7)}function Ht(e,t){A(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Wt(e,t){return t._meridiemParse}function Bt(e){return"p"===(e+"").toLowerCase().charAt(0)}function Vt(e,t,i){return e>11?i?"pm":"PM":i?"am":"AM"}function Gt(e,t){t[hn]=m(1e3*("0."+e))}function Qt(){return this._isUTC?"UTC":""}function Zt(){return this._isUTC?"Coordinated Universal Time":""}function Kt(e){return Se(1e3*e)}function Jt(){return Se.apply(null,arguments).parseZone()}function Xt(e,t,i){var n=this._calendar[e];return"function"==typeof n?n.call(t,i):n}function ei(e){var t=this._longDateFormat[e],i=this._longDateFormat[e.toUpperCase()];return t||!i?t:(this._longDateFormat[e]=i.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function ti(){return this._invalidDate}function ii(e){return this._ordinal.replace("%d",e)}function ni(e){return e}function oi(e,t,i,n){var o=this._relativeTime[i];return"function"==typeof o?o(e,t,i,n):o.replace(/%d/i,e)}function ri(e,t){var i=this._relativeTime[e>0?"future":"past"];return"function"==typeof i?i(t):i.replace(/%s/i,t)}function ai(e){var t,i;for(i in e)t=e[i],"function"==typeof t?this[i]=t:this["_"+i]=t;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function si(e,t,i,n){var o=Y(),r=s().set(n,t);return o[i](r,e)}function li(e,t,i,n,o){if("number"==typeof e&&(t=e,e=void 0),e=e||"",null!=t)return si(e,t,i,o);var r,a=[];for(r=0;n>r;r++)a[r]=si(e,r,i,o);return a}function ui(e,t){return li(e,t,"months",12,"month")}function ci(e,t){return li(e,t,"monthsShort",12,"month")}function di(e,t){return li(e,t,"weekdays",7,"day")}function hi(e,t){return li(e,t,"weekdaysShort",7,"day")}function pi(e,t){return li(e,t,"weekdaysMin",7,"day")}function fi(){var e=this._data;return this._milliseconds=Qn(this._milliseconds),this._days=Qn(this._days),this._months=Qn(this._months),e.milliseconds=Qn(e.milliseconds),e.seconds=Qn(e.seconds),e.minutes=Qn(e.minutes),e.hours=Qn(e.hours),e.months=Qn(e.months),e.years=Qn(e.years),this}function gi(e,t,i,n){var o=Ze(t,i);return e._milliseconds+=n*o._milliseconds,e._days+=n*o._days,e._months+=n*o._months,e._bubble()}function mi(e,t){return gi(this,e,t,1)}function wi(e,t){return gi(this,e,t,-1)}function ki(e){return 0>e?Math.floor(e):Math.ceil(e)}function yi(){var e,t,i,n,o,r=this._milliseconds,a=this._days,s=this._months,l=this._data;return r>=0&&a>=0&&s>=0||0>=r&&0>=a&&0>=s||(r+=864e5*ki(bi(s)+a),a=0,s=0),l.milliseconds=r%1e3,e=g(r/1e3),l.seconds=e%60,t=g(e/60),l.minutes=t%60,i=g(t/60),l.hours=i%24,a+=g(i/24),o=g(vi(a)),s+=o,a-=ki(bi(o)),n=g(s/12),s%=12,l.days=a,l.months=s,l.years=n,this}function vi(e){return 4800*e/146097}function bi(e){return 146097*e/4800}function Di(e){var t,i,n=this._milliseconds;if(e=T(e),"month"===e||"year"===e)return t=this._days+n/864e5,i=this._months+vi(t),"month"===e?i:i/12;switch(t=this._days+Math.round(bi(this._months)),e){case"week":return t/7+n/6048e5;case"day":return t+n/864e5;case"hour":return 24*t+n/36e5;case"minute":return 1440*t+n/6e4;case"second":return 86400*t+n/1e3;case"millisecond":return Math.floor(864e5*t)+n;default:throw new Error("Unknown unit "+e)}}function _i(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*m(this._months/12)}function Yi(e){return function(){return this.as(e)}}function xi(e){return e=T(e),this[e+"s"]()}function Ti(e){return function(){return this._data[e]}}function Mi(){return g(this.days()/7)}function Ci(e,t,i,n,o){return o.relativeTime(t||1,!!i,e,n)}function Si(e,t,i){var n=Ze(e).abs(),o=ho(n.as("s")),r=ho(n.as("m")),a=ho(n.as("h")),s=ho(n.as("d")),l=ho(n.as("M")),u=ho(n.as("y")),c=o<po.s&&["s",o]||1===r&&["m"]||r<po.m&&["mm",r]||1===a&&["h"]||a<po.h&&["hh",a]||1===s&&["d"]||s<po.d&&["dd",s]||1===l&&["M"]||l<po.M&&["MM",l]||1===u&&["y"]||["yy",u];return c[2]=t,c[3]=+e>0,c[4]=i,Ci.apply(null,c)}function $i(e,t){return void 0!==po[e]&&(void 0===t?po[e]:(po[e]=t,!0))}function Oi(e){var t=this.localeData(),i=Si(this,!e,t);return e&&(i=t.pastFuture(+this,i)),t.postformat(i)}function Ei(){var e,t,i,n=fo(this._milliseconds)/1e3,o=fo(this._days),r=fo(this._months);e=g(n/60),t=g(e/60),n%=60,e%=60,i=g(r/12),r%=12;var a=i,s=r,l=o,u=t,c=e,d=n,h=this.asSeconds();return h?(0>h?"-":"")+"P"+(a?a+"Y":"")+(s?s+"M":"")+(l?l+"D":"")+(u||c||d?"T":"")+(u?u+"H":"")+(c?c+"M":"")+(d?d+"S":""):"P0D"}var Ai,ji,qi=e.momentProperties=[],Ni=!1,Li={},Ii={},Pi=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ui=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ri={},Fi={},zi=/\d/,Hi=/\d\d/,Wi=/\d{3}/,Bi=/\d{4}/,Vi=/[+-]?\d{6}/,Gi=/\d\d?/,Qi=/\d{1,3}/,Zi=/\d{1,4}/,Ki=/[+-]?\d{1,6}/,Ji=/\d+/,Xi=/[+-]?\d+/,en=/Z|[+-]\d\d:?\d\d/gi,tn=/[+-]?\d+(\.\d{1,3})?/,nn=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,on={},rn={},an=0,sn=1,ln=2,un=3,cn=4,dn=5,hn=6;A("M",["MM",2],"Mo",function(){return this.month()+1}),A("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),A("MMMM",0,0,function(e){return this.localeData().months(this,e)}),x("month","M"),P("M",Gi),P("MM",Gi,Hi),P("MMM",nn),P("MMMM",nn),F(["M","MM"],function(e,t){t[sn]=m(e)-1}),F(["MMM","MMMM"],function(e,t,i,n){var o=i._locale.monthsParse(e,n,i._strict);null!=o?t[sn]=o:u(i).invalidMonth=e});var pn="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),fn="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),gn={};e.suppressDeprecationWarnings=!1;var mn=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,wn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],kn=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],yn=/^\/?Date\((\-?\d+)/i;e.createFromInputFallback=ee("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),A(0,["YY",2],0,function(){return this.year()%100}),A(0,["YYYY",4],0,"year"),A(0,["YYYYY",5],0,"year"),A(0,["YYYYYY",6,!0],0,"year"),x("year","y"),P("Y",Xi),P("YY",Gi,Hi),P("YYYY",Zi,Bi),P("YYYYY",Ki,Vi),P("YYYYYY",Ki,Vi),F(["YYYYY","YYYYYY"],an),F("YYYY",function(t,i){i[an]=2===t.length?e.parseTwoDigitYear(t):m(t)}),F("YY",function(t,i){i[an]=e.parseTwoDigitYear(t)}),e.parseTwoDigitYear=function(e){return m(e)+(m(e)>68?1900:2e3)};var vn=C("FullYear",!1);A("w",["ww",2],"wo","week"),A("W",["WW",2],"Wo","isoWeek"),x("week","w"),x("isoWeek","W"),P("w",Gi),P("ww",Gi,Hi),P("W",Gi),P("WW",Gi,Hi),z(["w","ww","W","WW"],function(e,t,i,n){t[n.substr(0,1)]=m(e)});var bn={dow:0,doy:6};A("DDD",["DDDD",3],"DDDo","dayOfYear"),x("dayOfYear","DDD"),P("DDD",Qi),P("DDDD",Wi),F(["DDD","DDDD"],function(e,t,i){i._dayOfYear=m(e)}),e.ISO_8601=function(){};var Dn=ee("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var e=Se.apply(null,arguments);return this>e?this:e}),_n=ee("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var e=Se.apply(null,arguments);return e>this?this:e});qe("Z",":"),qe("ZZ",""),P("Z",en),P("ZZ",en),F(["Z","ZZ"],function(e,t,i){i._useUTC=!0,i._tzm=Ne(e)});var Yn=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var xn=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Tn=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Ze.fn=Ae.prototype;var Mn=et(1,"add"),Cn=et(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var Sn=ee("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});A(0,["gg",2],0,function(){return this.weekYear()%100}),A(0,["GG",2],0,function(){return this.isoWeekYear()%100}),St("gggg","weekYear"),St("ggggg","weekYear"),St("GGGG","isoWeekYear"),St("GGGGG","isoWeekYear"),x("weekYear","gg"),x("isoWeekYear","GG"),P("G",Xi),P("g",Xi),P("GG",Gi,Hi),P("gg",Gi,Hi),P("GGGG",Zi,Bi),P("gggg",Zi,Bi),P("GGGGG",Ki,Vi),P("ggggg",Ki,Vi),z(["gggg","ggggg","GGGG","GGGGG"],function(e,t,i,n){t[n.substr(0,2)]=m(e)}),z(["gg","GG"],function(t,i,n,o){i[o]=e.parseTwoDigitYear(t)}),A("Q",0,0,"quarter"),x("quarter","Q"),P("Q",zi),F("Q",function(e,t){t[sn]=3*(m(e)-1)}),A("D",["DD",2],"Do","date"),x("date","D"),P("D",Gi),P("DD",Gi,Hi),P("Do",function(e,t){return e?t._ordinalParse:t._ordinalParseLenient}),F(["D","DD"],ln),F("Do",function(e,t){t[ln]=m(e.match(Gi)[0],10)});var $n=C("Date",!0);A("d",0,"do","day"),A("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),A("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),A("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),A("e",0,0,"weekday"),A("E",0,0,"isoWeekday"),x("day","d"),x("weekday","e"),x("isoWeekday","E"),P("d",Gi),P("e",Gi),P("E",Gi),P("dd",nn),P("ddd",nn),P("dddd",nn),z(["dd","ddd","dddd"],function(e,t,i){var n=i._locale.weekdaysParse(e);null!=n?t.d=n:u(i).invalidWeekday=e}),z(["d","e","E"],function(e,t,i,n){t[n]=m(e)});var On="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),En="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),An="Su_Mo_Tu_We_Th_Fr_Sa".split("_");A("H",["HH",2],0,"hour"),A("h",["hh",2],0,function(){return this.hours()%12||12}),Ht("a",!0),Ht("A",!1),x("hour","h"),P("a",Wt),P("A",Wt),P("H",Gi),P("h",Gi),P("HH",Gi,Hi),P("hh",Gi,Hi),F(["H","HH"],un),F(["a","A"],function(e,t,i){i._isPm=i._locale.isPM(e),i._meridiem=e}),F(["h","hh"],function(e,t,i){t[un]=m(e),u(i).bigHour=!0});var jn=/[ap]\.?m?\.?/i,qn=C("Hours",!0);A("m",["mm",2],0,"minute"),x("minute","m"),P("m",Gi),P("mm",Gi,Hi),F(["m","mm"],cn);var Nn=C("Minutes",!1);A("s",["ss",2],0,"second"),x("second","s"),P("s",Gi),P("ss",Gi,Hi),F(["s","ss"],dn);var Ln=C("Seconds",!1);A("S",0,0,function(){return~~(this.millisecond()/100)}),A(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),A(0,["SSS",3],0,"millisecond"),A(0,["SSSS",4],0,function(){return 10*this.millisecond()}),A(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),A(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),A(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),A(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),A(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),x("millisecond","ms"),P("S",Qi,zi),P("SS",Qi,Hi),P("SSS",Qi,Wi);var In;for(In="SSSS";In.length<=9;In+="S")P(In,Ji);for(In="S";In.length<=9;In+="S")F(In,Gt);var Pn=C("Milliseconds",!1);A("z",0,0,"zoneAbbr"),A("zz",0,0,"zoneName");var Un=p.prototype;Un.add=Mn,Un.calendar=it,Un.clone=nt,Un.diff=lt,Un.endOf=vt,Un.format=ht,Un.from=pt,Un.fromNow=ft,Un.to=gt,Un.toNow=mt,Un.get=O,Un.invalidAt=Ct,Un.isAfter=ot,Un.isBefore=rt,Un.isBetween=at,Un.isSame=st,Un.isValid=Tt,Un.lang=Sn,Un.locale=wt,Un.localeData=kt,Un.max=_n,Un.min=Dn,Un.parsingFlags=Mt,Un.set=O,Un.startOf=yt,Un.subtract=Cn,Un.toArray=Yt,Un.toObject=xt,Un.toDate=_t,Un.toISOString=dt,Un.toJSON=dt,Un.toString=ct,Un.unix=Dt,Un.valueOf=bt,Un.year=vn,Un.isLeapYear=le,Un.weekYear=Ot,Un.isoWeekYear=Et,Un.quarter=Un.quarters=qt,Un.month=Z,Un.daysInMonth=K,Un.week=Un.weeks=pe,Un.isoWeek=Un.isoWeeks=fe,
Un.weeksInYear=jt,Un.isoWeeksInYear=At,Un.date=$n,Un.day=Un.days=Rt,Un.weekday=Ft,Un.isoWeekday=zt,Un.dayOfYear=me,Un.hour=Un.hours=qn,Un.minute=Un.minutes=Nn,Un.second=Un.seconds=Ln,Un.millisecond=Un.milliseconds=Pn,Un.utcOffset=Pe,Un.utc=Re,Un.local=Fe,Un.parseZone=ze,Un.hasAlignedHourOffset=He,Un.isDST=We,Un.isDSTShifted=Be,Un.isLocal=Ve,Un.isUtcOffset=Ge,Un.isUtc=Qe,Un.isUTC=Qe,Un.zoneAbbr=Qt,Un.zoneName=Zt,Un.dates=ee("dates accessor is deprecated. Use date instead.",$n),Un.months=ee("months accessor is deprecated. Use month instead",Z),Un.years=ee("years accessor is deprecated. Use year instead",vn),Un.zone=ee("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Ue);var Rn=Un,Fn={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},zn={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Hn="Invalid date",Wn="%d",Bn=/\d{1,2}/,Vn={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Gn=k.prototype;Gn._calendar=Fn,Gn.calendar=Xt,Gn._longDateFormat=zn,Gn.longDateFormat=ei,Gn._invalidDate=Hn,Gn.invalidDate=ti,Gn._ordinal=Wn,Gn.ordinal=ii,Gn._ordinalParse=Bn,Gn.preparse=ni,Gn.postformat=ni,Gn._relativeTime=Vn,Gn.relativeTime=oi,Gn.pastFuture=ri,Gn.set=ai,Gn.months=B,Gn._months=pn,Gn.monthsShort=V,Gn._monthsShort=fn,Gn.monthsParse=G,Gn.week=ce,Gn._week=bn,Gn.firstDayOfYear=he,Gn.firstDayOfWeek=de,Gn.weekdays=Lt,Gn._weekdays=On,Gn.weekdaysMin=Pt,Gn._weekdaysMin=An,Gn.weekdaysShort=It,Gn._weekdaysShort=En,Gn.weekdaysParse=Ut,Gn.isPM=Bt,Gn._meridiemParse=jn,Gn.meridiem=Vt,D("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,i=1===m(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+i}}),e.lang=ee("moment.lang is deprecated. Use moment.locale instead.",D),e.langData=ee("moment.langData is deprecated. Use moment.localeData instead.",Y);var Qn=Math.abs,Zn=Yi("ms"),Kn=Yi("s"),Jn=Yi("m"),Xn=Yi("h"),eo=Yi("d"),to=Yi("w"),io=Yi("M"),no=Yi("y"),oo=Ti("milliseconds"),ro=Ti("seconds"),ao=Ti("minutes"),so=Ti("hours"),lo=Ti("days"),uo=Ti("months"),co=Ti("years"),ho=Math.round,po={s:45,m:45,h:22,d:26,M:11},fo=Math.abs,go=Ae.prototype;go.abs=fi,go.add=mi,go.subtract=wi,go.as=Di,go.asMilliseconds=Zn,go.asSeconds=Kn,go.asMinutes=Jn,go.asHours=Xn,go.asDays=eo,go.asWeeks=to,go.asMonths=io,go.asYears=no,go.valueOf=_i,go._bubble=yi,go.get=xi,go.milliseconds=oo,go.seconds=ro,go.minutes=ao,go.hours=so,go.days=lo,go.weeks=Mi,go.months=uo,go.years=co,go.humanize=Oi,go.toISOString=Ei,go.toString=Ei,go.toJSON=Ei,go.locale=wt,go.localeData=kt,go.toIsoString=ee("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ei),go.lang=Sn,A("X",0,0,"unix"),A("x",0,0,"valueOf"),P("x",Xi),P("X",tn),F("X",function(e,t,i){i._d=new Date(1e3*parseFloat(e,10))}),F("x",function(e,t,i){i._d=new Date(m(e))}),e.version="2.10.6",t(Se),e.fn=Rn,e.min=Oe,e.max=Ee,e.utc=s,e.unix=Kt,e.months=ui,e.isDate=n,e.locale=D,e.invalid=d,e.duration=Ze,e.isMoment=f,e.weekdays=di,e.parseZone=Jt,e.localeData=Y,e.isDuration=je,e.monthsShort=ci,e.weekdaysMin=pi,e.defineLocale=_,e.weekdaysShort=hi,e.normalizeUnits=T,e.relativeTimeThreshold=$i;var mo=e;return mo}),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(e){"use strict";var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(e){"use strict";function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(void 0!==e.style[i])return{end:t[i]};return!1}e.fn.emulateTransitionEnd=function(t){var i=!1,n=this;e(this).one("bsTransitionEnd",function(){i=!0});var o=function(){i||e(n).trigger(e.support.transition.end)};return setTimeout(o,t),this},e(function(){e.support.transition=t(),e.support.transition&&(e.event.special.bsTransitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end,handle:function(t){return e(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),o=i.data("bs.alert");o||i.data("bs.alert",o=new n(this)),"string"==typeof t&&o[t].call(i)})}var i='[data-dismiss="alert"]',n=function(t){e(t).on("click",i,this.close)};n.VERSION="3.3.5",n.TRANSITION_DURATION=150,n.prototype.close=function(t){function i(){a.detach().trigger("closed.bs.alert").remove()}var o=e(this),r=o.attr("data-target");r||(r=o.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));var a=e(r);t&&t.preventDefault(),a.length||(a=o.closest(".alert")),a.trigger(t=e.Event("close.bs.alert")),t.isDefaultPrevented()||(a.removeClass("in"),e.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i())};var o=e.fn.alert;e.fn.alert=t,e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=o,this},e(document).on("click.bs.alert.data-api",i,n.prototype.close)}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var n=e(this),o=n.data("bs.button"),r="object"==typeof t&&t;o||n.data("bs.button",o=new i(this,r)),"toggle"==t?o.toggle():t&&o.setState(t)})}var i=function(t,n){this.$element=e(t),this.options=e.extend({},i.DEFAULTS,n),this.isLoading=!1};i.VERSION="3.3.5",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(t){var i="disabled",n=this.$element,o=n.is("input")?"val":"html",r=n.data();t+="Text",null==r.resetText&&n.data("resetText",n[o]()),setTimeout(e.proxy(function(){n[o](null==r[t]?this.options[t]:r[t]),"loadingText"==t?(this.isLoading=!0,n.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,n.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var e=!0,t=this.$element.closest('[data-toggle="buttons"]');if(t.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(e=!1),t.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(e=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),e&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=t,e.fn.button.Constructor=i,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var n=e(i.target);n.hasClass("btn")||(n=n.closest(".btn")),t.call(n,"toggle"),e(i.target).is('input[type="radio"]')||e(i.target).is('input[type="checkbox"]')||i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){e(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var n=e(this),o=n.data("bs.carousel"),r=e.extend({},i.DEFAULTS,n.data(),"object"==typeof t&&t),a="string"==typeof t?t:r.slide;o||n.data("bs.carousel",o=new i(this,r)),"number"==typeof t?o.to(t):a?o[a]():r.interval&&o.pause().cycle()})}var i=function(t,i){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",e.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",e.proxy(this.pause,this)).on("mouseleave.bs.carousel",e.proxy(this.cycle,this))};i.VERSION="3.3.5",i.TRANSITION_DURATION=600,i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},i.prototype.keydown=function(e){if(!/input|textarea/i.test(e.target.tagName)){switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()}},i.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)},i.prototype.getItemForDirection=function(e,t){var i=this.getItemIndex(t),n="prev"==e&&0===i||"next"==e&&i==this.$items.length-1;if(n&&!this.options.wrap)return t;var o="prev"==e?-1:1,r=(i+o)%this.$items.length;return this.$items.eq(r)},i.prototype.to=function(e){var t=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){t.to(e)}):i==e?this.pause().cycle():this.slide(e>i?"next":"prev",this.$items.eq(e))},i.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(t,n){var o=this.$element.find(".item.active"),r=n||this.getItemForDirection(t,o),a=this.interval,s="next"==t?"left":"right",l=this;if(r.hasClass("active"))return this.sliding=!1;var u=r[0],c=e.Event("slide.bs.carousel",{relatedTarget:u,direction:s});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var d=e(this.$indicators.children()[this.getItemIndex(r)]);d&&d.addClass("active")}var h=e.Event("slid.bs.carousel",{relatedTarget:u,direction:s});return e.support.transition&&this.$element.hasClass("slide")?(r.addClass(t),r[0].offsetWidth,o.addClass(s),r.addClass(s),o.one("bsTransitionEnd",function(){r.removeClass([t,s].join(" ")).addClass("active"),o.removeClass(["active",s].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(h)},0)}).emulateTransitionEnd(i.TRANSITION_DURATION)):(o.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(h)),a&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=t,e.fn.carousel.Constructor=i,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this};var o=function(i){var n,o=e(this),r=e(o.attr("data-target")||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""));if(r.hasClass("carousel")){var a=e.extend({},r.data(),o.data()),s=o.attr("data-slide-to");s&&(a.interval=!1),t.call(r,a),s&&r.data("bs.carousel").to(s),i.preventDefault()}};e(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var i=e(this);t.call(i,i.data())})})}(jQuery),+function(e){"use strict";function t(t){var i,n=t.attr("data-target")||(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return e(n)}function i(t){return this.each(function(){var i=e(this),o=i.data("bs.collapse"),r=e.extend({},n.DEFAULTS,i.data(),"object"==typeof t&&t);!o&&r.toggle&&/show|hide/.test(t)&&(r.toggle=!1),o||i.data("bs.collapse",o=new n(this,r)),"string"==typeof t&&o[t]()})}var n=function(t,i){this.$element=e(t),this.options=e.extend({},n.DEFAULTS,i),this.$trigger=e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};n.VERSION="3.3.5",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(t=o.data("bs.collapse"),t&&t.transitioning))){var r=e.Event("show.bs.collapse");if(this.$element.trigger(r),!r.isDefaultPrevented()){o&&o.length&&(i.call(o,"hide"),t||o.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return s.call(this);var l=e.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",e.proxy(s,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][l])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=e.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return e.support.transition?void this.$element[i](0).one("bsTransitionEnd",e.proxy(o,this)).emulateTransitionEnd(n.TRANSITION_DURATION):o.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return e(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(e.proxy(function(i,n){var o=e(n);this.addAriaAndCollapsedClass(t(o),o)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(e,t){var i=e.hasClass("in");e.attr("aria-expanded",i),t.toggleClass("collapsed",!i).attr("aria-expanded",i)};var o=e.fn.collapse;e.fn.collapse=i,e.fn.collapse.Constructor=n,e.fn.collapse.noConflict=function(){return e.fn.collapse=o,this},e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var o=e(this);o.attr("data-target")||n.preventDefault();var r=t(o),a=r.data("bs.collapse"),s=a?"toggle":o.data();i.call(r,s)})}(jQuery),+function(e){"use strict";function t(t){var i=t.attr("data-target");i||(i=t.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&e(i);return n&&n.length?n:t.parent()}function i(i){i&&3===i.which||(e(o).remove(),e(r).each(function(){var n=e(this),o=t(n),r={relatedTarget:this};o.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&e.contains(o[0],i.target)||(o.trigger(i=e.Event("hide.bs.dropdown",r)),i.isDefaultPrevented()||(n.attr("aria-expanded","false"),o.removeClass("open").trigger("hidden.bs.dropdown",r))))}))}function n(t){return this.each(function(){var i=e(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new a(this)),"string"==typeof t&&n[t].call(i)})}var o=".dropdown-backdrop",r='[data-toggle="dropdown"]',a=function(t){e(t).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.5",a.prototype.toggle=function(n){var o=e(this);if(!o.is(".disabled, :disabled")){var r=t(o),a=r.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click",i);var s={relatedTarget:this};if(r.trigger(n=e.Event("show.bs.dropdown",s)),n.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),r.toggleClass("open").trigger("shown.bs.dropdown",s)}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var n=e(this);if(i.preventDefault(),i.stopPropagation(),!n.is(".disabled, :disabled")){var o=t(n),a=o.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&o.find(r).trigger("focus"),n.trigger("click");var s=" li:not(.disabled):visible a",l=o.find(".dropdown-menu"+s);if(l.length){var u=l.index(i.target);38==i.which&&u>0&&u--,40==i.which&&u<l.length-1&&u++,~u||(u=0),l.eq(u).trigger("focus")}}}};var s=e.fn.dropdown;e.fn.dropdown=n,e.fn.dropdown.Constructor=a,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",r,a.prototype.toggle).on("keydown.bs.dropdown.data-api",r,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(e){"use strict";function t(t,n){return this.each(function(){var o=e(this),r=o.data("bs.modal"),a=e.extend({},i.DEFAULTS,o.data(),"object"==typeof t&&t);r||o.data("bs.modal",r=new i(this,a)),"string"==typeof t?r[t](n):a.show&&r.show(n)})}var i=function(t,i){this.options=i,this.$body=e(document.body),this.$element=e(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.5",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)},i.prototype.show=function(t){var n=this,o=e.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){n.$element.one("mouseup.dismiss.bs.modal",function(t){e(t.target).is(n.$element)&&(n.ignoreBackdropClick=!0)})}),this.backdrop(function(){var o=e.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),n.adjustDialog(),o&&n.$element[0].offsetWidth,n.$element.addClass("in"),n.enforceFocus();var r=e.Event("shown.bs.modal",{relatedTarget:t});o?n.$dialog.one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(r)}).emulateTransitionEnd(i.TRANSITION_DURATION):n.$element.trigger("focus").trigger(r)}))},i.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",e.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",e.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?e(window).on("resize.bs.modal",e.proxy(this.handleUpdate,this)):e(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var e=this;this.$element.hide(),this.backdrop(function(){e.$body.removeClass("modal-open"),e.resetAdjustments(),e.resetScrollbar(),e.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(t){var n=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var r=e.support.transition&&o;if(this.$backdrop=e(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",e.proxy(function(e){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;r?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){n.removeBackdrop(),t&&t()};e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else t&&t()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var e=window.innerWidth;if(!e){var t=document.documentElement.getBoundingClientRect();e=t.right-Math.abs(t.left)}this.bodyIsOverflowing=document.body.clientWidth<e,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",e+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",this.$body.append(e);var t=e.offsetWidth-e.clientWidth;return this.$body[0].removeChild(e),t};var n=e.fn.modal;e.fn.modal=t,e.fn.modal.Constructor=i,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var n=e(this),o=n.attr("href"),r=e(n.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),a=r.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(o)&&o},r.data(),n.data());n.is("a")&&i.preventDefault(),r.one("show.bs.modal",function(e){e.isDefaultPrevented()||r.one("hidden.bs.modal",function(){n.is(":visible")&&n.trigger("focus")})}),t.call(r,a,this)})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var n=e(this),o=n.data("bs.tooltip"),r="object"==typeof t&&t;(o||!/destroy|hide/.test(t))&&(o||n.data("bs.tooltip",o=new i(this,r)),"string"==typeof t&&o[t]())})}var i=function(e,t){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",e,t)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(t,i,n){if(this.enabled=!0,this.type=t,this.$element=e(i),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&e(e.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),r=o.length;r--;){var a=o[r];if("click"==a)this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this));else if("manual"!=a){var s="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(t){return t=e.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},i.prototype.getDelegateOptions=function(){var t={},i=this.getDefaults();return this._options&&e.each(this._options,function(e,n){i[e]!=n&&(t[e]=n)}),t},i.prototype.enter=function(t){var i=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,i)),t instanceof e.Event&&(i.inState["focusin"==t.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var e in this.inState)if(this.inState[e])return!0;return!1},i.prototype.leave=function(t){var i=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,i)),t instanceof e.Event&&(i.inState["focusout"==t.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var t=e.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var n=e.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!n)return;var o=this,r=this.tip(),a=this.getUID(this.type);this.setContent(),r.attr("id",a),this.$element.attr("aria-describedby",a),this.options.animation&&r.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,u=l.test(s);u&&(s=s.replace(l,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var c=this.getPosition(),d=r[0].offsetWidth,h=r[0].offsetHeight;if(u){var p=s,f=this.getPosition(this.$viewport);s="bottom"==s&&c.bottom+h>f.bottom?"top":"top"==s&&c.top-h<f.top?"bottom":"right"==s&&c.right+d>f.width?"left":"left"==s&&c.left-d<f.left?"right":s,r.removeClass(p).addClass(s)}var g=this.getCalculatedOffset(s,c,d,h);this.applyPlacement(g,s);var m=function(){var e=o.hoverState;o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==e&&o.leave(o)};e.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m()}},i.prototype.applyPlacement=function(t,i){var n=this.tip(),o=n[0].offsetWidth,r=n[0].offsetHeight,a=parseInt(n.css("margin-top"),10),s=parseInt(n.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(s)&&(s=0),t.top+=a,t.left+=s,e.offset.setOffset(n[0],e.extend({using:function(e){n.css({top:Math.round(e.top),left:Math.round(e.left)})}},t),0),n.addClass("in");var l=n[0].offsetWidth,u=n[0].offsetHeight;"top"==i&&u!=r&&(t.top=t.top+r-u);var c=this.getViewportAdjustedDelta(i,t,l,u);c.left?t.left+=c.left:t.top+=c.top;var d=/top|bottom/.test(i),h=d?2*c.left-o+l:2*c.top-r+u,p=d?"offsetWidth":"offsetHeight";n.offset(t),this.replaceArrow(h,n[0][p],d)},i.prototype.replaceArrow=function(e,t,i){this.arrow().css(i?"left":"top",50*(1-e/t)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},i.prototype.hide=function(t){function n(){"in"!=o.hoverState&&r.detach(),o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),t&&t()}var o=this,r=e(this.$tip),a=e.Event("hide.bs."+this.type);return this.$element.trigger(a),a.isDefaultPrevented()?void 0:(r.removeClass("in"),e.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(t){t=t||this.$element;var i=t[0],n="BODY"==i.tagName,o=i.getBoundingClientRect();null==o.width&&(o=e.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var r=n?{top:0,left:0}:t.offset(),a={scroll:n?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},s=n?{width:e(window).width(),height:e(window).height()}:null;return e.extend({},o,a,s,r)},i.prototype.getCalculatedOffset=function(e,t,i,n){return"bottom"==e?{top:t.top+t.height,left:t.left+t.width/2-i/2}:"top"==e?{top:t.top-n,left:t.left+t.width/2-i/2}:"left"==e?{top:t.top+t.height/2-n/2,left:t.left-i}:{top:t.top+t.height/2-n/2,left:t.left+t.width}},i.prototype.getViewportAdjustedDelta=function(e,t,i,n){var o={top:0,left:0};if(!this.$viewport)return o;var r=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(e)){var s=t.top-r-a.scroll,l=t.top+r-a.scroll+n;s<a.top?o.top=a.top-s:l>a.top+a.height&&(o.top=a.top+a.height-l)}else{var u=t.left-r,c=t.left+r+i;u<a.left?o.left=a.left-u:c>a.right&&(o.left=a.left+a.width-c)}return o},i.prototype.getTitle=function(){var e,t=this.$element,i=this.options;return e=t.attr("data-original-title")||("function"==typeof i.title?i.title.call(t[0]):i.title)},i.prototype.getUID=function(e){do e+=~~(1e6*Math.random());while(document.getElementById(e));return e},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=e(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(t){var i=this;t&&(i=e(t.currentTarget).data("bs."+this.type),i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,i))),t?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var e=this;clearTimeout(this.timeout),this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type),e.$tip&&e.$tip.detach(),e.$tip=null,e.$arrow=null,e.$viewport=null})};var n=e.fn.tooltip;e.fn.tooltip=t,e.fn.tooltip.Constructor=i,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var n=e(this),o=n.data("bs.popover"),r="object"==typeof t&&t;
(o||!/destroy|hide/.test(t))&&(o||n.data("bs.popover",o=new i(this,r)),"string"==typeof t&&o[t]())})}var i=function(e,t){this.init("popover",e,t)};if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.3.5",i.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=e.extend({},e.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var e=this.tip(),t=this.getTitle(),i=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),e.removeClass("fade top bottom left right in"),e.find(".popover-title").html()||e.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var e=this.$element,t=this.options;return e.attr("data-content")||("function"==typeof t.content?t.content.call(e[0]):t.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var n=e.fn.popover;e.fn.popover=t,e.fn.popover.Constructor=i,e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(jQuery),+function(e){"use strict";function t(i,n){this.$body=e(document.body),this.$scrollElement=e(e(i).is(document.body)?window:i),this.options=e.extend({},t.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var n=e(this),o=n.data("bs.scrollspy"),r="object"==typeof i&&i;o||n.data("bs.scrollspy",o=new t(this,r)),"string"==typeof i&&o[i]()})}t.VERSION="3.3.5",t.DEFAULTS={offset:10},t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},t.prototype.refresh=function(){var t=this,i="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),e.isWindow(this.$scrollElement[0])||(i="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=e(this),o=t.data("target")||t.attr("href"),r=/^#./.test(o)&&e(o);return r&&r.length&&r.is(":visible")&&[[r[i]().top+n,o]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},t.prototype.process=function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),n=this.options.offset+i-this.$scrollElement.height(),o=this.offsets,r=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),t>=n)return a!=(e=r[r.length-1])&&this.activate(e);if(a&&t<o[0])return this.activeTarget=null,this.clear();for(e=o.length;e--;)a!=r[e]&&t>=o[e]&&(void 0===o[e+1]||t<o[e+1])&&this.activate(r[e])},t.prototype.activate=function(t){this.activeTarget=t,this.clear();var i=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(i).parents("li").addClass("active");n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate.bs.scrollspy")},t.prototype.clear=function(){e(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var n=e.fn.scrollspy;e.fn.scrollspy=i,e.fn.scrollspy.Constructor=t,e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load.bs.scrollspy.data-api",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);i.call(t,t.data())})})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var n=e(this),o=n.data("bs.tab");o||n.data("bs.tab",o=new i(this)),"string"==typeof t&&o[t]()})}var i=function(t){this.element=e(t)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.prototype.show=function(){var t=this.element,i=t.closest("ul:not(.dropdown-menu)"),n=t.data("target");if(n||(n=t.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=i.find(".active:last a"),r=e.Event("hide.bs.tab",{relatedTarget:t[0]}),a=e.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(r),t.trigger(a),!a.isDefaultPrevented()&&!r.isDefaultPrevented()){var s=e(n);this.activate(t.closest("li"),i),this.activate(s,s.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},i.prototype.activate=function(t,n,o){function r(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var a=n.find("> .active"),s=o&&e.support.transition&&(a.length&&a.hasClass("fade")||!!n.find("> .fade").length);a.length&&s?a.one("bsTransitionEnd",r).emulateTransitionEnd(i.TRANSITION_DURATION):r(),a.removeClass("in")};var n=e.fn.tab;e.fn.tab=t,e.fn.tab.Constructor=i,e.fn.tab.noConflict=function(){return e.fn.tab=n,this};var o=function(i){i.preventDefault(),t.call(e(this),"show")};e(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var n=e(this),o=n.data("bs.affix"),r="object"==typeof t&&t;o||n.data("bs.affix",o=new i(this,r)),"string"==typeof t&&o[t]()})}var i=function(t,n){this.options=e.extend({},i.DEFAULTS,n),this.$target=e(this.options.target).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.$element=e(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.5",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(e,t,i,n){var o=this.$target.scrollTop(),r=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>o&&"top";if("bottom"==this.affixed)return null!=i?!(o+this.unpin<=r.top)&&"bottom":!(e-n>=o+a)&&"bottom";var s=null==this.affixed,l=s?o:r.top,u=s?a:t;return null!=i&&i>=o?"top":null!=n&&l+u>=e-n&&"bottom"},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var e=this.$target.scrollTop(),t=this.$element.offset();return this.pinnedOffset=t.top-e},i.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),n=this.options.offset,o=n.top,r=n.bottom,a=Math.max(e(document).height(),e(document.body).height());"object"!=typeof n&&(r=o=n),"function"==typeof o&&(o=n.top(this.$element)),"function"==typeof r&&(r=n.bottom(this.$element));var s=this.getState(a,t,o,r);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var l="affix"+(s?"-"+s:""),u=e.Event(l+".bs.affix");if(this.$element.trigger(u),u.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:a-t-r})}};var n=e.fn.affix;e.fn.affix=t,e.fn.affix.Constructor=i,e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var i=e(this),n=i.data();n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),t.call(i,n)})})}(jQuery),!function(e){e(["jquery"],function(e){return function(){function t(e,t,i){return f({type:b.error,iconClass:g().iconClasses.error,message:e,optionsOverride:i,title:t})}function i(t,i){return t||(t=g()),w=e("#"+t.containerId),w.length?w:(i&&(w=d(t)),w)}function n(e,t,i){return f({type:b.info,iconClass:g().iconClasses.info,message:e,optionsOverride:i,title:t})}function o(e){k=e}function r(e,t,i){return f({type:b.success,iconClass:g().iconClasses.success,message:e,optionsOverride:i,title:t})}function a(e,t,i){return f({type:b.warning,iconClass:g().iconClasses.warning,message:e,optionsOverride:i,title:t})}function s(e,t){var n=g();w||i(n),c(e,n,t)||u(n)}function l(t){var n=g();return w||i(n),t&&0===e(":focus",t).length?void m(t):void(w.children().length&&w.remove())}function u(t){for(var i=w.children(),n=i.length-1;n>=0;n--)c(e(i[n]),t)}function c(t,i,n){var o=!(!n||!n.force)&&n.force;return!(!t||!o&&0!==e(":focus",t).length||(t[i.hideMethod]({duration:i.hideDuration,easing:i.hideEasing,complete:function(){m(t)}}),0))}function d(t){return w=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),w.appendTo(e(t.target)),w}function h(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function p(e){k&&k(e)}function f(t){function n(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function o(){l(),c(),d(),h(),f(),k(),u(),r()}function r(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}S.attr("aria-live",e)}function a(){T.closeOnHover&&S.hover(Y,_),!T.onclick&&T.tapToDismiss&&S.click(D),T.closeButton&&A&&A.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),T.onCloseClick&&T.onCloseClick(e),D(!0)}),T.onclick&&S.click(function(e){T.onclick(e),D()})}function s(){S.hide(),S[T.showMethod]({duration:T.showDuration,easing:T.showEasing,complete:T.onShown}),T.timeOut>0&&(C=setTimeout(D,T.timeOut),j.maxHideTime=parseFloat(T.timeOut),j.hideEta=(new Date).getTime()+j.maxHideTime,T.progressBar&&(j.intervalId=setInterval(x,10)))}function l(){t.iconClass&&S.addClass(T.toastClass).addClass(M)}function u(){T.newestOnTop?w.prepend(S):w.append(S)}function c(){if(t.title){var e=t.title;T.escapeHtml&&(e=n(t.title)),$.append(e).addClass(T.titleClass),S.append($)}}function d(){if(t.message){var e=t.message;T.escapeHtml&&(e=n(t.message)),O.append(e).addClass(T.messageClass),S.append(O)}}function h(){T.closeButton&&(A.addClass(T.closeClass).attr("role","button"),S.prepend(A))}function f(){T.progressBar&&(E.addClass(T.progressClass),S.prepend(E))}function k(){T.rtl&&S.addClass("rtl")}function b(e,t){if(e.preventDuplicates){if(t.message===y)return!0;y=t.message}return!1}function D(t){var i=t&&T.closeMethod!==!1?T.closeMethod:T.hideMethod,n=t&&T.closeDuration!==!1?T.closeDuration:T.hideDuration,o=t&&T.closeEasing!==!1?T.closeEasing:T.hideEasing;if(!e(":focus",S).length||t)return clearTimeout(j.intervalId),S[i]({duration:n,easing:o,complete:function(){m(S),clearTimeout(C),T.onHidden&&"hidden"!==q.state&&T.onHidden(),q.state="hidden",q.endTime=new Date,p(q)}})}function _(){(T.timeOut>0||T.extendedTimeOut>0)&&(C=setTimeout(D,T.extendedTimeOut),j.maxHideTime=parseFloat(T.extendedTimeOut),j.hideEta=(new Date).getTime()+j.maxHideTime)}function Y(){clearTimeout(C),j.hideEta=0,S.stop(!0,!0)[T.showMethod]({duration:T.showDuration,easing:T.showEasing})}function x(){var e=(j.hideEta-(new Date).getTime())/j.maxHideTime*100;E.width(e+"%")}var T=g(),M=t.iconClass||T.iconClass;if("undefined"!=typeof t.optionsOverride&&(T=e.extend(T,t.optionsOverride),M=t.optionsOverride.iconClass||M),!b(T,t)){v++,w=i(T,!0);var C=null,S=e("<div/>"),$=e("<div/>"),O=e("<div/>"),E=e("<div/>"),A=e(T.closeHtml),j={intervalId:null,hideEta:null,maxHideTime:null},q={toastId:v,state:"visible",startTime:new Date,options:T,map:t};return o(),s(),a(),p(q),T.debug&&console&&console.log(q),S}}function g(){return e.extend({},h(),D.options)}function m(e){w||(w=i()),e.is(":visible")||(e.remove(),e=null,0===w.children().length&&(w.remove(),y=void 0))}var w,k,y,v=0,b={error:"error",info:"info",success:"success",warning:"warning"},D={clear:s,remove:l,error:t,getContainer:i,info:n,options:{},subscribe:o,success:r,version:"2.1.3",warning:a};return D}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(t):"undefined"!=typeof exports?module.exports=t():e.simpleStorage=t()}(this,function(){"use strict";function e(){g=u(),n(),a(),t(),"addEventListener"in window&&window.addEventListener("pageshow",function(e){e.persisted&&i()},!1),g=!0}function t(){"addEventListener"in window?window.addEventListener("storage",i,!1):document.attachEvent("onstorage",i)}function i(){try{n()}catch(e){return void(g=!1)}a()}function n(){var e=localStorage.getItem("simpleStorage");try{p=JSON.parse(e)||{}}catch(e){p={}}f=r()}function o(){try{localStorage.setItem("simpleStorage",JSON.stringify(p)),f=r()}catch(e){return c(e)}return!0}function r(){var e=localStorage.getItem("simpleStorage");return e?String(e).length:0}function a(){var e,t,i,n,r,s=1/0,u=0;if(clearTimeout(m),p&&p.__simpleStorage_meta&&p.__simpleStorage_meta.TTL){for(e=+new Date,r=p.__simpleStorage_meta.TTL.keys||[],n=p.__simpleStorage_meta.TTL.expire||{},t=0,i=r.length;t<i;t++){if(!(n[r[t]]<=e)){n[r[t]]<s&&(s=n[r[t]]);break}u++,delete p[r[t]],delete n[r[t]]}s!==1/0&&(m=setTimeout(a,Math.min(s-e,2147483647))),u&&(r.splice(0,u),l(),o())}}function s(e,t){var i,n,o=+new Date,r=!1;if(t=Number(t)||0,0!==t){if(!p.hasOwnProperty(e))return!1;if(p.__simpleStorage_meta||(p.__simpleStorage_meta={}),p.__simpleStorage_meta.TTL||(p.__simpleStorage_meta.TTL={expire:{},keys:[]}),p.__simpleStorage_meta.TTL.expire[e]=o+t,p.__simpleStorage_meta.TTL.expire.hasOwnProperty(e))for(i=0,n=p.__simpleStorage_meta.TTL.keys.length;i<n;i++)p.__simpleStorage_meta.TTL.keys[i]===e&&p.__simpleStorage_meta.TTL.keys.splice(i);for(i=0,n=p.__simpleStorage_meta.TTL.keys.length;i<n;i++)if(p.__simpleStorage_meta.TTL.expire[p.__simpleStorage_meta.TTL.keys[i]]>o+t){p.__simpleStorage_meta.TTL.keys.splice(i,0,e),r=!0;break}r||p.__simpleStorage_meta.TTL.keys.push(e)}else if(p&&p.__simpleStorage_meta&&p.__simpleStorage_meta.TTL){if(p.__simpleStorage_meta.TTL.expire.hasOwnProperty(e))for(delete p.__simpleStorage_meta.TTL.expire[e],i=0,n=p.__simpleStorage_meta.TTL.keys.length;i<n;i++)if(p.__simpleStorage_meta.TTL.keys[i]===e){p.__simpleStorage_meta.TTL.keys.splice(i,1);break}l()}return clearTimeout(m),p&&p.__simpleStorage_meta&&p.__simpleStorage_meta.TTL&&p.__simpleStorage_meta.TTL.keys.length&&(m=setTimeout(a,Math.min(Math.max(p.__simpleStorage_meta.TTL.expire[p.__simpleStorage_meta.TTL.keys[0]]-o,0),2147483647))),!0}function l(){var e,t=!1,i=!1;if(!p||!p.__simpleStorage_meta)return t;p.__simpleStorage_meta.TTL&&!p.__simpleStorage_meta.TTL.keys.length&&(delete p.__simpleStorage_meta.TTL,t=!0);for(e in p.__simpleStorage_meta)if(p.__simpleStorage_meta.hasOwnProperty(e)){i=!0;break}return i||(delete p.__simpleStorage_meta,t=!0),t}function u(){var e,t=0;if(null===window.localStorage||"unknown"==typeof window.localStorage)throw e=new Error("localStorage is disabled"),e.code=y,e;if(!window.localStorage)throw e=new Error("localStorage not supported"),e.code=k,e;try{t=window.localStorage.length}catch(e){throw c(e)}try{window.localStorage.setItem("__simpleStorageInitTest",Date.now().toString(16)),window.localStorage.removeItem("__simpleStorageInitTest")}catch(i){throw t?c(i):(e=new Error("localStorage is disabled"),e.code=y,e)}return!0}function c(e){var t;return 22===e.code||1014===e.code||[-2147024882,-2146828281,-21474675259].indexOf(e.number)>0?(t=new Error("localStorage quota exceeded"),t.code=v,t):18===e.code||1e3===e.code?(t=new Error("localStorage is disabled"),t.code=y,t):"TypeError"===e.name?(t=new Error("localStorage is disabled"),t.code=y,t):e}function d(e){if(!e)return w="OK",e;switch(e.code){case k:case y:case v:w=e.code;break;default:w=e.code||e.number||e.message||e.name}return e}var h="0.2.1",p=!1,f=0,g=!1,m=null,w="OK",k="LS_NOT_AVAILABLE",y="LS_DISABLED",v="LS_QUOTA_EXCEEDED";try{e()}catch(e){d(e)}return{version:h,status:w,canUse:function(){return"OK"===w&&!!g},set:function(e,t,i){if("__simpleStorage_meta"===e)return!1;if(!p)return!1;if("undefined"==typeof t)return this.deleteKey(e);i=i||{};try{t=JSON.parse(JSON.stringify(t))}catch(e){return c(e)}return p[e]=t,s(e,i.TTL||0),o()},hasKey:function(e){return!!p&&!(!p.hasOwnProperty(e)||"__simpleStorage_meta"===e)},get:function(e){return!!p&&(p.hasOwnProperty(e)&&"__simpleStorage_meta"!==e&&this.getTTL(e)?p[e]:void 0)},deleteKey:function(e){return!!p&&(e in p&&(delete p[e],s(e,0),o()))},setTTL:function(e,t){return!!p&&(s(e,t),o())},getTTL:function(e){var t;return!!p&&(!!p.hasOwnProperty(e)&&(p.__simpleStorage_meta&&p.__simpleStorage_meta.TTL&&p.__simpleStorage_meta.TTL.expire&&p.__simpleStorage_meta.TTL.expire.hasOwnProperty(e)?(t=Math.max(p.__simpleStorage_meta.TTL.expire[e]-+new Date||0,0),t||!1):1/0))},flush:function(){if(!p)return!1;p={};try{return localStorage.removeItem("simpleStorage"),!0}catch(e){return c(e)}},index:function(){if(!p)return!1;var e,t=[];for(e in p)p.hasOwnProperty(e)&&"__simpleStorage_meta"!==e&&t.push(e);return t},storageSize:function(){return f}}}),!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var t=function(){if(e&&e.fn&&e.fn.select2&&e.fn.select2.amd)var t=e.fn.select2.amd;var t;return function(){if(!t||!t.requirejs){t?i=t:t={};var e,i,n;!function(t){function o(e,t){return v.call(e,t)}function r(e,t){var i,n,o,r,a,s,l,u,c,d,h,p=t&&t.split("/"),f=k.map,g=f&&f["*"]||{};if(e&&"."===e.charAt(0))if(t){for(p=p.slice(0,p.length-1),e=e.split("/"),a=e.length-1,k.nodeIdCompat&&D.test(e[a])&&(e[a]=e[a].replace(D,"")),e=p.concat(e),c=0;c<e.length;c+=1)if(h=e[c],"."===h)e.splice(c,1),c-=1;else if(".."===h){if(1===c&&(".."===e[2]||".."===e[0]))break;c>0&&(e.splice(c-1,2),c-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((p||g)&&f){for(i=e.split("/"),c=i.length;c>0;c-=1){if(n=i.slice(0,c).join("/"),p)for(d=p.length;d>0;d-=1)if(o=f[p.slice(0,d).join("/")],o&&(o=o[n])){r=o,s=c;break}if(r)break;!l&&g&&g[n]&&(l=g[n],u=c)}!r&&l&&(r=l,s=u),r&&(i.splice(0,s,r),e=i.join("/"))}return e}function a(e,i){return function(){return p.apply(t,b.call(arguments,0).concat([e,i]))}}function s(e){return function(t){return r(t,e)}}function l(e){return function(t){m[e]=t}}function u(e){if(o(w,e)){var i=w[e];delete w[e],y[e]=!0,h.apply(t,i)}if(!o(m,e)&&!o(y,e))throw new Error("No "+e);return m[e]}function c(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function d(e){return function(){return k&&k.config&&k.config[e]||{}}}var h,p,f,g,m={},w={},k={},y={},v=Object.prototype.hasOwnProperty,b=[].slice,D=/\.js$/;f=function(e,t){var i,n=c(e),o=n[0];return e=n[1],o&&(o=r(o,t),i=u(o)),o?e=i&&i.normalize?i.normalize(e,s(t)):r(e,t):(e=r(e,t),n=c(e),o=n[0],e=n[1],o&&(i=u(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:i}},g={require:function(e){return a(e)},exports:function(e){var t=m[e];return"undefined"!=typeof t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:d(e)}}},h=function(e,i,n,r){var s,c,d,h,p,k,v=[],b=typeof n;if(r=r||e,"undefined"===b||"function"===b){for(i=!i.length&&n.length?["require","exports","module"]:i,p=0;p<i.length;p+=1)if(h=f(i[p],r),c=h.f,"require"===c)v[p]=g.require(e);else if("exports"===c)v[p]=g.exports(e),k=!0;else if("module"===c)s=v[p]=g.module(e);else if(o(m,c)||o(w,c)||o(y,c))v[p]=u(c);else{if(!h.p)throw new Error(e+" missing "+c);h.p.load(h.n,a(r,!0),l(c),{}),v[p]=m[c]}d=n?n.apply(m[e],v):void 0,e&&(s&&s.exports!==t&&s.exports!==m[e]?m[e]=s.exports:d===t&&k||(m[e]=d))}else e&&(m[e]=n)},e=i=p=function(e,i,n,o,r){if("string"==typeof e)return g[e]?g[e](i):u(f(e,i).f);if(!e.splice){if(k=e,k.deps&&p(k.deps,k.callback),!i)return;i.splice?(e=i,i=n,n=null):e=t}return i=i||function(){},"function"==typeof n&&(n=o,o=r),o?h(t,e,i,n):setTimeout(function(){h(t,e,i,n)},4),p},p.config=function(e){return p(e)},e._defined=m,n=function(e,t,i){t.splice||(i=t,t=[]),o(m,e)||o(w,e)||(w[e]=[e,t,i])},n.amd={jQuery:!0}}(),t.requirejs=e,t.require=i,t.define=n}}(),t.define("almond",function(){}),t.define("jquery",[],function(){var t=e||$;return null==t&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),t}),t.define("select2/utils",["jquery"],function(e){function t(e){var t=e.prototype,i=[];for(var n in t){var o=t[n];"function"==typeof o&&"constructor"!==n&&i.push(n)}return i}var i={};i.Extend=function(e,t){function i(){this.constructor=e}var n={}.hasOwnProperty;for(var o in t)n.call(t,o)&&(e[o]=t[o]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},i.Decorate=function(e,i){function n(){var t=Array.prototype.unshift,n=i.prototype.constructor.length,o=e.prototype.constructor;n>0&&(t.call(arguments,e.prototype.constructor),o=i.prototype.constructor),o.apply(this,arguments)}function o(){this.constructor=n}var r=t(i),a=t(e);i.displayName=e.displayName,n.prototype=new o;for(var s=0;s<a.length;s++){var l=a[s];n.prototype[l]=e.prototype[l]}for(var u=(function(e){var t=function(){};e in n.prototype&&(t=n.prototype[e]);var o=i.prototype[e];return function(){var e=Array.prototype.unshift;return e.call(arguments,t),o.apply(this,arguments)}}),c=0;c<r.length;c++){var d=r[c];n.prototype[d]=u(d)}return n};var n=function(){this.listeners={}};return n.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},n.prototype.trigger=function(e){var t=Array.prototype.slice;this.listeners=this.listeners||{},e in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},n.prototype.invoke=function(e,t){for(var i=0,n=e.length;n>i;i++)e[i].apply(this,t)},i.Observable=n,i.generateChars=function(e){for(var t="",i=0;e>i;i++){var n=Math.floor(36*Math.random());t+=n.toString(36)}return t},i.bind=function(e,t){return function(){e.apply(t,arguments)}},i._convertData=function(e){for(var t in e){var i=t.split("-"),n=e;if(1!==i.length){for(var o=0;o<i.length;o++){var r=i[o];r=r.substring(0,1).toLowerCase()+r.substring(1),r in n||(n[r]={}),o==i.length-1&&(n[r]=e[t]),n=n[r]}delete e[t]}}return e},i.hasScroll=function(t,i){var n=e(i),o=i.style.overflowX,r=i.style.overflowY;return(o!==r||"hidden"!==r&&"visible"!==r)&&("scroll"===o||"scroll"===r||(n.innerHeight()<i.scrollHeight||n.innerWidth()<i.scrollWidth))},i.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},i.appendMany=function(t,i){if("1.7"===e.fn.jquery.substr(0,3)){var n=e();e.map(i,function(e){n=n.add(e)}),i=n}t.append(i)},i}),t.define("select2/results",["jquery","./utils"],function(e,t){function i(e,t,n){this.$element=e,this.data=n,this.options=t,i.__super__.constructor.call(this)}return t.Extend(i,t.Observable),i.prototype.render=function(){var t=e('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&t.attr("aria-multiselectable","true"),this.$results=t,t},i.prototype.clear=function(){this.$results.empty()},i.prototype.displayMessage=function(t){var i=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=e('<li role="treeitem" class="select2-results__option"></li>'),o=this.options.get("translations").get(t.message);n.append(i(o(t.args))),this.$results.append(n)},i.prototype.append=function(e){this.hideLoading();var t=[];if(null==e.results||0===e.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));e.results=this.sort(e.results);for(var i=0;i<e.results.length;i++){var n=e.results[i],o=this.option(n);t.push(o)}this.$results.append(t)},i.prototype.position=function(e,t){var i=t.find(".select2-results");i.append(e)},i.prototype.sort=function(e){var t=this.options.get("sorter");return t(e)},i.prototype.setClasses=function(){var t=this;this.data.current(function(i){var n=e.map(i,function(e){return e.id.toString()}),o=t.$results.find(".select2-results__option[aria-selected]");o.each(function(){var t=e(this),i=e.data(this,"data"),o=""+i.id;null!=i.element&&i.element.selected||null==i.element&&e.inArray(o,n)>-1?t.attr("aria-selected","true"):t.attr("aria-selected","false")});var r=o.filter("[aria-selected=true]");r.length>0?r.first().trigger("mouseenter"):o.first().trigger("mouseenter")})},i.prototype.showLoading=function(e){this.hideLoading();var t=this.options.get("translations").get("searching"),i={disabled:!0,loading:!0,text:t(e)},n=this.option(i);n.className+=" loading-results",this.$results.prepend(n)},i.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},i.prototype.option=function(t){var i=document.createElement("li");i.className="select2-results__option";var n={role:"treeitem","aria-selected":"false"};t.disabled&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==t.id&&delete n["aria-selected"],null!=t._resultId&&(i.id=t._resultId),t.title&&(i.title=t.title),t.children&&(n.role="group",n["aria-label"]=t.text,delete n["aria-selected"]);for(var o in n){var r=n[o];i.setAttribute(o,r)}if(t.children){var a=e(i),s=document.createElement("strong");s.className="select2-results__group",e(s),this.template(t,s);for(var l=[],u=0;u<t.children.length;u++){var c=t.children[u],d=this.option(c);l.push(d)}var h=e("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});h.append(l),a.append(s),a.append(h)}else this.template(t,i);return e.data(i,"data",t),i},i.prototype.bind=function(t){var i=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){i.clear(),i.append(e.data),t.isOpen()&&i.setClasses()}),t.on("results:append",function(e){i.append(e.data),t.isOpen()&&i.setClasses()}),t.on("query",function(e){i.showLoading(e)}),t.on("select",function(){t.isOpen()&&i.setClasses()}),t.on("unselect",function(){t.isOpen()&&i.setClasses()}),t.on("open",function(){i.$results.attr("aria-expanded","true"),i.$results.attr("aria-hidden","false"),i.setClasses(),i.ensureHighlightVisible()}),t.on("close",function(){i.$results.attr("aria-expanded","false"),i.$results.attr("aria-hidden","true"),i.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=i.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=i.getHighlightedResults();if(0!==e.length){var t=e.data("data");"true"==e.attr("aria-selected")?i.trigger("close"):i.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=i.getHighlightedResults(),t=i.$results.find("[aria-selected]"),n=t.index(e);if(0!==n){var o=n-1;0===e.length&&(o=0);var r=t.eq(o);r.trigger("mouseenter");var a=i.$results.offset().top,s=r.offset().top,l=i.$results.scrollTop()+(s-a);0===o?i.$results.scrollTop(0):0>s-a&&i.$results.scrollTop(l)}}),t.on("results:next",function(){var e=i.getHighlightedResults(),t=i.$results.find("[aria-selected]"),n=t.index(e),o=n+1;if(!(o>=t.length)){var r=t.eq(o);r.trigger("mouseenter");var a=i.$results.offset().top+i.$results.outerHeight(!1),s=r.offset().top+r.outerHeight(!1),l=i.$results.scrollTop()+s-a;0===o?i.$results.scrollTop(0):s>a&&i.$results.scrollTop(l)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){i.displayMessage(e)}),e.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=i.$results.scrollTop(),n=i.$results.get(0).scrollHeight-i.$results.scrollTop()+e.deltaY,o=e.deltaY>0&&t-e.deltaY<=0,r=e.deltaY<0&&n<=i.$results.height();o?(i.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):r&&(i.$results.scrollTop(i.$results.get(0).scrollHeight-i.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(t){var n=e(this),o=n.data("data");return"true"===n.attr("aria-selected")?void(i.options.get("multiple")?i.trigger("unselect",{originalEvent:t,data:o}):i.trigger("close")):void i.trigger("select",{originalEvent:t,data:o})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(){var t=e(this).data("data");i.getHighlightedResults().removeClass("select2-results__option--highlighted"),i.trigger("results:focus",{data:t,element:e(this)})})},i.prototype.getHighlightedResults=function(){var e=this.$results.find(".select2-results__option--highlighted");return e},i.prototype.destroy=function(){this.$results.remove()},i.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]"),i=t.index(e),n=this.$results.offset().top,o=e.offset().top,r=this.$results.scrollTop()+(o-n),a=o-n;r-=2*e.outerHeight(!1),2>=i?this.$results.scrollTop(0):(a>this.$results.outerHeight()||0>a)&&this.$results.scrollTop(r)}},i.prototype.template=function(t,i){var n=this.options.get("templateResult"),o=this.options.get("escapeMarkup"),r=n(t);null==r?i.style.display="none":"string"==typeof r?i.innerHTML=o(r):e(i).append(r)},i}),t.define("select2/keys",[],function(){var e={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return e}),t.define("select2/selection/base",["jquery","../utils","../keys"],function(e,t,i){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,t.Observable),n.prototype.render=function(){var t=e('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),t.attr("title",this.$element.attr("title")),t.attr("tabindex",this._tabindex),this.$selection=t,t},n.prototype.bind=function(e){var t=this,n=(e.id+"-container",e.id+"-results");this.container=e,this.$selection.on("focus",function(e){t.trigger("focus",e)}),this.$selection.on("blur",function(e){t.trigger("blur",e)}),this.$selection.on("keydown",function(e){t.trigger("keypress",e),e.which===i.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){t.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){t.update(e.data)}),e.on("open",function(){t.$selection.attr("aria-expanded","true"),t.$selection.attr("aria-owns",n),t._attachCloseHandler(e)}),e.on("close",function(){t.$selection.attr("aria-expanded","false"),
t.$selection.removeAttr("aria-activedescendant"),t.$selection.removeAttr("aria-owns"),t.$selection.focus(),t._detachCloseHandler(e)}),e.on("enable",function(){t.$selection.attr("tabindex",t._tabindex)}),e.on("disable",function(){t.$selection.attr("tabindex","-1")})},n.prototype._attachCloseHandler=function(t){e(document.body).on("mousedown.select2."+t.id,function(t){var i=e(t.target),n=i.closest(".select2"),o=e(".select2.select2-container--open");o.each(function(){var t=e(this);if(this!=n[0]){var i=t.data("element");i.select2("close")}})})},n.prototype._detachCloseHandler=function(t){e(document.body).off("mousedown.select2."+t.id)},n.prototype.position=function(e,t){var i=t.find(".selection");i.append(e)},n.prototype.destroy=function(){this._detachCloseHandler(this.container)},n.prototype.update=function(){throw new Error("The `update` method must be defined in child classes.")},n}),t.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,i){function n(){n.__super__.constructor.apply(this,arguments)}return i.Extend(n,t),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},n.prototype.bind=function(e){var t=this;n.__super__.bind.apply(this,arguments);var i=e.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",i),this.$selection.attr("aria-labelledby",i),this.$selection.on("mousedown",function(e){1===e.which&&t.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(){}),this.$selection.on("blur",function(){}),e.on("selection:update",function(e){t.update(e.data)})},n.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},n.prototype.display=function(e){var t=this.options.get("templateSelection"),i=this.options.get("escapeMarkup");return i(t(e))},n.prototype.selectionContainer=function(){return e("<span></span>")},n.prototype.update=function(e){if(0===e.length)return void this.clear();var t=e[0],i=this.display(t),n=this.$selection.find(".select2-selection__rendered");n.empty().append(i),n.prop("title",t.title||t.text)},n}),t.define("select2/selection/multiple",["jquery","./base","../utils"],function(e,t,i){function n(){n.__super__.constructor.apply(this,arguments)}return i.Extend(n,t),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},n.prototype.bind=function(){var t=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){t.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(i){var n=e(this),o=n.parent(),r=o.data("data");t.trigger("unselect",{originalEvent:i,data:r})})},n.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},n.prototype.display=function(e){var t=this.options.get("templateSelection"),i=this.options.get("escapeMarkup");return i(t(e))},n.prototype.selectionContainer=function(){var t=e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return t},n.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=0;n<e.length;n++){var o=e[n],r=this.display(o),a=this.selectionContainer();a.append(r),a.prop("title",o.title||o.text),a.data("data",o),t.push(a)}var s=this.$selection.find(".select2-selection__rendered");i.appendMany(s,t)}},n}),t.define("select2/selection/placeholder",["../utils"],function(){function e(e,t,i){this.placeholder=this.normalizePlaceholder(i.get("placeholder")),e.call(this,t,i)}return e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.createPlaceholder=function(e,t){var i=this.selectionContainer();return i.html(this.display(t)),i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),i},e.prototype.update=function(e,t){var i=1==t.length&&t[0].id!=this.placeholder.id,n=t.length>1;if(n||i)return e.call(this,t);this.clear();var o=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(o)},e}),t.define("select2/selection/allowClear",["jquery","../keys"],function(e,t){function i(){}return i.prototype.bind=function(e,t,i){var n=this;e.call(this,t,i),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){n._handleClear(e)}),t.on("keypress",function(e){n._handleKeyboardClear(e,t)})},i.prototype._handleClear=function(e,t){if(!this.options.get("disabled")){var i=this.$selection.find(".select2-selection__clear");if(0!==i.length){t.stopPropagation();for(var n=i.data("data"),o=0;o<n.length;o++){var r={data:n[o]};if(this.trigger("unselect",r),r.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle")}}},i.prototype._handleKeyboardClear=function(e,i,n){n.isOpen()||(i.which==t.DELETE||i.which==t.BACKSPACE)&&this._handleClear(i)},i.prototype.update=function(t,i){if(t.call(this,i),!(this.$selection.find(".select2-selection__placeholder").length>0||0===i.length)){var n=e('<span class="select2-selection__clear">&times;</span>');n.data("data",i),this.$selection.find(".select2-selection__rendered").prepend(n)}},i}),t.define("select2/selection/search",["jquery","../utils","../keys"],function(e,t,i){function n(e,t,i){e.call(this,t,i)}return n.prototype.render=function(t){var i=e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');this.$searchContainer=i,this.$search=i.find("input");var n=t.call(this);return n},n.prototype.bind=function(e,t,n){var o=this;e.call(this,t,n),t.on("open",function(){o.$search.attr("tabindex",0),o.$search.focus()}),t.on("close",function(){o.$search.attr("tabindex",-1),o.$search.val(""),o.$search.focus()}),t.on("enable",function(){o.$search.prop("disabled",!1)}),t.on("disable",function(){o.$search.prop("disabled",!0)}),this.$selection.on("focusin",".select2-search--inline",function(e){o.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){o.trigger("blur",e)}),this.$selection.on("keydown",".select2-search--inline",function(e){e.stopPropagation(),o.trigger("keypress",e),o._keyUpPrevented=e.isDefaultPrevented();var t=e.which;if(t===i.BACKSPACE&&""===o.$search.val()){var n=o.$searchContainer.prev(".select2-selection__choice");if(n.length>0){var r=n.data("data");o.searchRemoveChoice(r),e.preventDefault()}}}),this.$selection.on("input",".select2-search--inline",function(){o.$selection.off("keyup.search")}),this.$selection.on("keyup.search input",".select2-search--inline",function(e){o.handleSearch(e)})},n.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},n.prototype.update=function(e,t){this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch()},n.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},n.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.trigger("open"),this.$search.val(t.text+" ")},n.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";if(""!==this.$search.attr("placeholder"))e=this.$selection.find(".select2-selection__rendered").innerWidth();else{var t=this.$search.val().length+1;e=.75*t+"em"}this.$search.css("width",e)},n}),t.define("select2/selection/eventRelay",["jquery"],function(e){function t(){}return t.prototype.bind=function(t,i,n){var o=this,r=["open","opening","close","closing","select","selecting","unselect","unselecting"],a=["opening","closing","selecting","unselecting"];t.call(this,i,n),i.on("*",function(t,i){if(-1!==e.inArray(t,r)){i=i||{};var n=e.Event("select2:"+t,{params:i});o.$element.trigger(n),-1!==e.inArray(t,a)&&(i.prevented=n.isDefaultPrevented())}})},t}),t.define("select2/translation",["jquery","require"],function(e,t){function i(e){this.dict=e||{}}return i.prototype.all=function(){return this.dict},i.prototype.get=function(e){return this.dict[e]},i.prototype.extend=function(t){this.dict=e.extend({},t.all(),this.dict)},i._cache={},i.loadPath=function(e){if(!(e in i._cache)){var n=t(e);i._cache[e]=n}return new i(i._cache[e])},i}),t.define("select2/diacritics",[],function(){var e={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return e}),t.define("select2/data/base",["../utils"],function(e){function t(){t.__super__.constructor.call(this)}return e.Extend(t,e.Observable),t.prototype.current=function(){throw new Error("The `current` method must be defined in child classes.")},t.prototype.query=function(){throw new Error("The `query` method must be defined in child classes.")},t.prototype.bind=function(){},t.prototype.destroy=function(){},t.prototype.generateResultId=function(t,i){var n=t.id+"-result-";return n+=e.generateChars(4),n+=null!=i.id?"-"+i.id.toString():"-"+e.generateChars(4)},t}),t.define("select2/data/select",["./base","../utils","jquery"],function(e,t,i){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,e),n.prototype.current=function(e){var t=[],n=this;this.$element.find(":selected").each(function(){var e=i(this),o=n.item(e);t.push(o)}),e(t)},n.prototype.select=function(e){var t=this;if(e.selected=!0,i(e.element).is("option"))return e.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(n){var o=[];e=[e],e.push.apply(e,n);for(var r=0;r<e.length;r++){var a=e[r].id;-1===i.inArray(a,o)&&o.push(a)}t.$element.val(o),t.$element.trigger("change")});else{var n=e.id;this.$element.val(n),this.$element.trigger("change")}},n.prototype.unselect=function(e){var t=this;if(this.$element.prop("multiple"))return e.selected=!1,i(e.element).is("option")?(e.element.selected=!1,void this.$element.trigger("change")):void this.current(function(n){for(var o=[],r=0;r<n.length;r++){var a=n[r].id;a!==e.id&&-1===i.inArray(a,o)&&o.push(a)}t.$element.val(o),t.$element.trigger("change")})},n.prototype.bind=function(e){var t=this;this.container=e,e.on("select",function(e){t.select(e.data)}),e.on("unselect",function(e){t.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){i.removeData(this,"data")})},n.prototype.query=function(e,t){var n=[],o=this,r=this.$element.children();r.each(function(){var t=i(this);if(t.is("option")||t.is("optgroup")){var r=o.item(t),a=o.matches(e,r);null!==a&&n.push(a)}}),t({results:n})},n.prototype.addOptions=function(e){t.appendMany(this.$element,e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup"),t.label=e.text):(t=document.createElement("option"),void 0!==t.textContent?t.textContent=e.text:t.innerText=e.text),e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var n=i(t),o=this._normalizeItem(e);return o.element=t,i.data(t,"data",o),n},n.prototype.item=function(e){var t={};if(t=i.data(e[0],"data"),null!=t)return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var n=e.children("option"),o=[],r=0;r<n.length;r++){var a=i(n[r]),s=this.item(a);o.push(s)}t.children=o}return t=this._normalizeItem(t),t.element=e[0],i.data(e[0],"data",t),t},n.prototype._normalizeItem=function(e){i.isPlainObject(e)||(e={id:e,text:e}),e=i.extend({},{text:""},e);var t={selected:!1,disabled:!1};return null!=e.id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),i.extend({},t,e)},n.prototype.matches=function(e,t){var i=this.options.get("matcher");return i(e,t)},n}),t.define("select2/data/array",["./select","../utils","jquery"],function(e,t,i){function n(e,t){var i=t.get("data")||[];n.__super__.constructor.call(this,e,t),this.addOptions(this.convertToOptions(i))}return t.Extend(n,e),n.prototype.select=function(e){var t=this.$element.find("option").filter(function(t,i){return i.value==e.id.toString()});0===t.length&&(t=this.option(e),this.addOptions(t)),n.__super__.select.call(this,e)},n.prototype.convertToOptions=function(e){function n(e){return function(){return i(this).val()==e.id}}for(var o=this,r=this.$element.find("option"),a=r.map(function(){return o.item(i(this)).id}).get(),s=[],l=0;l<e.length;l++){var u=this._normalizeItem(e[l]);if(i.inArray(u.id,a)>=0){var c=r.filter(n(u)),d=this.item(c),h=(i.extend(!0,{},d,u),this.option(d));c.replaceWith(h)}else{var p=this.option(u);if(u.children){var f=this.convertToOptions(u.children);t.appendMany(p,f)}s.push(p)}}return s},n}),t.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,i){function n(t,i){this.ajaxOptions=this._applyDefaults(i.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),e.__super__.constructor.call(this,t,i)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return{q:e.term}},transport:function(e,t,n){var o=i.ajax(e);return o.then(t),o.fail(n),o}};return i.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(e,t){function n(){var n=r.transport(r,function(n){var r=o.processResults(n,e);o.options.get("debug")&&window.console&&console.error&&(r&&r.results&&i.isArray(r.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),t(r)},function(){});o._request=n}var o=this;null!=this._request&&(i.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var r=i.extend({type:"GET"},this.ajaxOptions);"function"==typeof r.url&&(r.url=r.url(e)),"function"==typeof r.data&&(r.data=r.data(e)),this.ajaxOptions.delay&&""!==e.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(n,this.ajaxOptions.delay)):n()},n}),t.define("select2/data/tags",["jquery"],function(e){function t(t,i,n){var o=n.get("tags"),r=n.get("createTag");if(void 0!==r&&(this.createTag=r),t.call(this,i,n),e.isArray(o))for(var a=0;a<o.length;a++){var s=o[a],l=this._normalizeItem(s),u=this.option(l);this.$element.append(u)}}return t.prototype.query=function(e,t,i){function n(e,r){for(var a=e.results,s=0;s<a.length;s++){var l=a[s],u=null!=l.children&&!n({results:l.children},!0),c=l.text===t.term;if(c||u)return!r&&(e.data=a,void i(e))}if(r)return!0;var d=o.createTag(t);if(null!=d){var h=o.option(d);h.attr("data-select2-tag",!0),o.addOptions([h]),o.insertTag(a,d)}e.results=a,i(e)}var o=this;return this._removeOldTags(),null==t.term||null!=t.page?void e.call(this,t,i):void e.call(this,t,n)},t.prototype.createTag=function(t,i){var n=e.trim(i.term);return""===n?null:{id:n,text:n}},t.prototype.insertTag=function(e,t,i){t.unshift(i)},t.prototype._removeOldTags=function(){var t=(this._lastTag,this.$element.find("option[data-select2-tag]"));t.each(function(){this.selected||e(this).remove()})},t}),t.define("select2/data/tokenizer",["jquery"],function(e){function t(e,t,i){var n=i.get("tokenizer");void 0!==n&&(this.tokenizer=n),e.call(this,t,i)}return t.prototype.bind=function(e,t,i){e.call(this,t,i),this.$search=t.dropdown.$search||t.selection.$search||i.find(".select2-search__field")},t.prototype.query=function(e,t,i){function n(e){o.select(e)}var o=this;t.term=t.term||"";var r=this.tokenizer(t,this.options,n);r.term!==t.term&&(this.$search.length&&(this.$search.val(r.term),this.$search.focus()),t.term=r.term),e.call(this,t,i)},t.prototype.tokenizer=function(t,i,n,o){for(var r=n.get("tokenSeparators")||[],a=i.term,s=0,l=this.createTag||function(e){return{id:e.term,text:e.term}};s<a.length;){var u=a[s];if(-1!==e.inArray(u,r)){var c=a.substr(0,s),d=e.extend({},i,{term:c}),h=l(d);o(h),a=a.substr(s+1)||"",s=0}else s++}return{term:a}},t}),t.define("select2/data/minimumInputLength",[],function(){function e(e,t,i){this.minimumInputLength=i.get("minimumInputLength"),e.call(this,t,i)}return e.prototype.query=function(e,t,i){return t.term=t.term||"",t.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):void e.call(this,t,i)},e}),t.define("select2/data/maximumInputLength",[],function(){function e(e,t,i){this.maximumInputLength=i.get("maximumInputLength"),e.call(this,t,i)}return e.prototype.query=function(e,t,i){return t.term=t.term||"",this.maximumInputLength>0&&t.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):void e.call(this,t,i)},e}),t.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,i){this.maximumSelectionLength=i.get("maximumSelectionLength"),e.call(this,t,i)}return e.prototype.query=function(e,t,i){var n=this;this.current(function(o){var r=null!=o?o.length:0;return n.maximumSelectionLength>0&&r>=n.maximumSelectionLength?void n.trigger("results:message",{message:"maximumSelected",args:{maximum:n.maximumSelectionLength}}):void e.call(n,t,i)})},e}),t.define("select2/dropdown",["jquery","./utils"],function(e,t){function i(e,t){this.$element=e,this.options=t,i.__super__.constructor.call(this)}return t.Extend(i,t.Observable),i.prototype.render=function(){var t=e('<span class="select2-dropdown"><span class="select2-results"></span></span>');return t.attr("dir",this.options.get("dir")),this.$dropdown=t,t},i.prototype.position=function(){},i.prototype.destroy=function(){this.$dropdown.remove()},i}),t.define("select2/dropdown/search",["jquery","../utils"],function(e){function t(){}return t.prototype.render=function(t){var i=t.call(this),n=e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),i.prepend(n),i},t.prototype.bind=function(t,i,n){var o=this;t.call(this,i,n),this.$search.on("keydown",function(e){o.trigger("keypress",e),o._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(){e(this).off("keyup")}),this.$search.on("keyup input",function(e){o.handleSearch(e)}),i.on("open",function(){o.$search.attr("tabindex",0),o.$search.focus(),window.setTimeout(function(){o.$search.focus()},0)}),i.on("close",function(){o.$search.attr("tabindex",-1),o.$search.val("")}),i.on("results:all",function(e){if(null==e.query.term||""===e.query.term){var t=o.showSearch(e);t?o.$searchContainer.removeClass("select2-search--hide"):o.$searchContainer.addClass("select2-search--hide")}})},t.prototype.handleSearch=function(){if(!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},t.prototype.showSearch=function(){return!0},t}),t.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,i,n){this.placeholder=this.normalizePlaceholder(i.get("placeholder")),e.call(this,t,i,n)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var i=t.slice(0),n=t.length-1;n>=0;n--){var o=t[n];this.placeholder.id===o.id&&i.splice(n,1)}return i},e}),t.define("select2/dropdown/infiniteScroll",["jquery"],function(e){function t(e,t,i,n){this.lastParams={},e.call(this,t,i,n),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return t.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&this.$results.append(this.$loadingMore)},t.prototype.bind=function(t,i,n){var o=this;t.call(this,i,n),i.on("query",function(e){o.lastParams=e,o.loading=!0}),i.on("query:append",function(e){o.lastParams=e,o.loading=!0}),this.$results.on("scroll",function(){var t=e.contains(document.documentElement,o.$loadingMore[0]);if(!o.loading&&t){var i=o.$results.offset().top+o.$results.outerHeight(!1),n=o.$loadingMore.offset().top+o.$loadingMore.outerHeight(!1);i+50>=n&&o.loadMore()}})},t.prototype.loadMore=function(){this.loading=!0;var t=e.extend({},{page:1},this.lastParams);t.page++,this.trigger("query:append",t)},t.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},t.prototype.createLoadingMore=function(){var t=e('<li class="option load-more" role="treeitem"></li>'),i=this.options.get("translations").get("loadingMore");return t.html(i(this.lastParams)),t},t}),t.define("select2/dropdown/attachBody",["jquery","../utils"],function(e,t){function i(e,t,i){this.$dropdownParent=i.get("dropdownParent")||document.body,e.call(this,t,i)}return i.prototype.bind=function(e,t,i){var n=this,o=!1;e.call(this,t,i),t.on("open",function(){n._showDropdown(),n._attachPositioningHandler(t),o||(o=!0,t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}))}),t.on("close",function(){n._hideDropdown(),n._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},i.prototype.position=function(e,t,i){t.attr("class",i.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=i},i.prototype.render=function(t){var i=e("<span></span>"),n=t.call(this);return i.append(n),this.$dropdownContainer=i,i},i.prototype._hideDropdown=function(){this.$dropdownContainer.detach()},i.prototype._attachPositioningHandler=function(i){var n=this,o="scroll.select2."+i.id,r="resize.select2."+i.id,a="orientationchange.select2."+i.id,s=this.$container.parents().filter(t.hasScroll);s.each(function(){e(this).data("select2-scroll-position",{x:e(this).scrollLeft(),y:e(this).scrollTop()})}),s.on(o,function(){var t=e(this).data("select2-scroll-position");e(this).scrollTop(t.y)}),e(window).on(o+" "+r+" "+a,function(){n._positionDropdown(),n._resizeDropdown()})},i.prototype._detachPositioningHandler=function(i){var n="scroll.select2."+i.id,o="resize.select2."+i.id,r="orientationchange.select2."+i.id,a=this.$container.parents().filter(t.hasScroll);a.off(n),e(window).off(n+" "+o+" "+r)},i.prototype._positionDropdown=function(){var t=e(window),i=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),o=null,r=(this.$container.position(),this.$container.offset());r.bottom=r.top+this.$container.outerHeight(!1);var a={height:this.$container.outerHeight(!1)};a.top=r.top,a.bottom=r.top+a.height;var s={height:this.$dropdown.outerHeight(!1)},l={top:t.scrollTop(),bottom:t.scrollTop()+t.height()},u=l.top<r.top-s.height,c=l.bottom>r.bottom+s.height,d={left:r.left,top:a.bottom};i||n||(o="below"),c||!u||i?!u&&c&&i&&(o="below"):o="above",("above"==o||i&&"below"!==o)&&(d.top=a.top-s.height),null!=o&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+o),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+o)),this.$dropdownContainer.css(d)},i.prototype._resizeDropdown=function(){this.$dropdownContainer.width();var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.width="auto"),this.$dropdown.css(e)},i.prototype._showDropdown=function(){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},i}),t.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(t){for(var i=0,n=0;n<t.length;n++){var o=t[n];o.children?i+=e(o.children):i++}return i}function t(e,t,i,n){this.minimumResultsForSearch=i.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,i,n)}return t.prototype.showSearch=function(t,i){return!(e(i.data.results)<this.minimumResultsForSearch)&&t.call(this,i)},t}),t.define("select2/dropdown/selectOnClose",[],function(){function e(){}return e.prototype.bind=function(e,t,i){var n=this;e.call(this,t,i),t.on("close",function(){n._handleSelectOnClose()})},e.prototype._handleSelectOnClose=function(){var e=this.getHighlightedResults();e.length<1||this.trigger("select",{data:e.data("data")})},e}),t.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,i){var n=this;e.call(this,t,i),t.on("select",function(e){n._selectTriggered(e);
}),t.on("unselect",function(e){n._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var i=t.originalEvent;i&&i.ctrlKey||this.trigger("close")},e}),t.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,i=$.i18n("select2-max-chars",t);return 1!=t&&(i+="s"),i},inputTooShort:function(e){var t=e.minimum-e.input.length,i=$.i18n("select2-min-chars",t);return i},loadingMore:function(){return $.i18n("select2-loading")},maximumSelected:function(e){var t=$.i18n("select2-max-items",e.maximum);return 1!=e.maximum&&(t+=""),t},noResults:function(){return $.i18n("select2-no-results")},searching:function(){}}}),t.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(e,t,i,n,o,r,a,s,l,u,c,d,h,p,f,g,m,w,k,y,v,b,D,_,Y,x,T,M,C){function S(){this.reset()}S.prototype.apply=function(d){if(d=e.extend({},this.defaults,d),null==d.dataAdapter){if(d.dataAdapter=null!=d.ajax?f:null!=d.data?p:h,d.minimumInputLength>0&&(d.dataAdapter=u.Decorate(d.dataAdapter,w)),d.maximumInputLength>0&&(d.dataAdapter=u.Decorate(d.dataAdapter,k)),d.maximumSelectionLength>0&&(d.dataAdapter=u.Decorate(d.dataAdapter,y)),d.tags&&(d.dataAdapter=u.Decorate(d.dataAdapter,g)),(null!=d.tokenSeparators||null!=d.tokenizer)&&(d.dataAdapter=u.Decorate(d.dataAdapter,m)),null!=d.query){var C=t(d.amdBase+"compat/query");d.dataAdapter=u.Decorate(d.dataAdapter,C)}if(null!=d.initSelection){var S=t(d.amdBase+"compat/initSelection");d.dataAdapter=u.Decorate(d.dataAdapter,S)}}if(null==d.resultsAdapter&&(d.resultsAdapter=i,null!=d.ajax&&(d.resultsAdapter=u.Decorate(d.resultsAdapter,_)),null!=d.placeholder&&(d.resultsAdapter=u.Decorate(d.resultsAdapter,D)),d.selectOnClose&&(d.resultsAdapter=u.Decorate(d.resultsAdapter,T))),null==d.dropdownAdapter){if(d.multiple)d.dropdownAdapter=v;else{var $=u.Decorate(v,b);d.dropdownAdapter=$}if(0!==d.minimumResultsForSearch&&(d.dropdownAdapter=u.Decorate(d.dropdownAdapter,x)),d.closeOnSelect&&(d.dropdownAdapter=u.Decorate(d.dropdownAdapter,M)),null!=d.dropdownCssClass||null!=d.dropdownCss||null!=d.adaptDropdownCssClass){var O=t(d.amdBase+"compat/dropdownCss");d.dropdownAdapter=u.Decorate(d.dropdownAdapter,O)}d.dropdownAdapter=u.Decorate(d.dropdownAdapter,Y)}if(null==d.selectionAdapter){if(d.selectionAdapter=d.multiple?o:n,null!=d.placeholder&&(d.selectionAdapter=u.Decorate(d.selectionAdapter,r)),d.allowClear&&(d.selectionAdapter=u.Decorate(d.selectionAdapter,a)),d.multiple&&(d.selectionAdapter=u.Decorate(d.selectionAdapter,s)),null!=d.containerCssClass||null!=d.containerCss||null!=d.adaptContainerCssClass){var E=t(d.amdBase+"compat/containerCss");d.selectionAdapter=u.Decorate(d.selectionAdapter,E)}d.selectionAdapter=u.Decorate(d.selectionAdapter,l)}if("string"==typeof d.language)if(d.language.indexOf("-")>0){var A=d.language.split("-"),j=A[0];d.language=[d.language,j]}else d.language=[d.language];if(e.isArray(d.language)){var q=new c;d.language.push("en");for(var N=d.language,L=0;L<N.length;L++){var I=N[L],P={};try{P=c.loadPath(I)}catch(e){try{I=this.defaults.amdLanguageBase+I,P=c.loadPath(I)}catch(e){d.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+I+'" could not be automatically loaded. A fallback will be used instead.');continue}}q.extend(P)}d.translations=q}else{var U=c.loadPath(this.defaults.amdLanguageBase+"en"),R=new c(d.language);R.extend(U),d.translations=R}return d},S.prototype.reset=function(){function t(e){function t(e){return d[e]||e}return e.replace(/[^\u0000-\u007E]/g,t)}function i(n,o){if(""===e.trim(n.term))return o;if(o.children&&o.children.length>0){for(var r=e.extend(!0,{},o),a=o.children.length-1;a>=0;a--){var s=o.children[a],l=i(n,s);null==l&&r.children.splice(a,1)}return r.children.length>0?r:i(n,r)}var u=t(o.text).toUpperCase(),c=t(n.term).toUpperCase();return u.indexOf(c)>-1?o:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:u.escapeMarkup,language:C,matcher:i,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},S.prototype.set=function(t,i){var n=e.camelCase(t),o={};o[n]=i;var r=u._convertData(o);e.extend(this.defaults,r)};var $=new S;return $}),t.define("select2/options",["require","jquery","./defaults","./utils"],function(e,t,i,n){function o(t,o){if(this.options=t,null!=o&&this.fromElement(o),this.options=i.apply(this.options),o&&o.is("input")){var r=e(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=n.Decorate(this.options.dataAdapter,r)}}return o.prototype.fromElement=function(e){var i=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.language&&(e.prop("lang")?this.options.language=e.prop("lang").toLowerCase():e.closest("[lang]").prop("lang")&&(this.options.language=e.closest("[lang]").prop("lang"))),null==this.options.dir&&(this.options.dir=e.prop("dir")?e.prop("dir"):e.closest("[dir]").prop("dir")?e.closest("[dir]").prop("dir"):"ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),e.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),e.data("data",e.data("select2Tags")),e.data("tags",!0)),e.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",e.data("ajaxUrl")),e.data("ajax--url",e.data("ajaxUrl")));var o={};o=t.fn.jquery&&"1."==t.fn.jquery.substr(0,2)&&e[0].dataset?t.extend(!0,{},e[0].dataset,e.data()):e.data();var r=t.extend(!0,{},o);r=n._convertData(r);for(var a in r)t.inArray(a,i)>-1||(t.isPlainObject(this.options[a])?t.extend(this.options[a],r[a]):this.options[a]=r[a]);return this},o.prototype.get=function(e){return this.options[e]},o.prototype.set=function(e,t){this.options[e]=t},o}),t.define("select2/core",["jquery","./options","./utils","./keys"],function(e,t,i,n){var o=function(e,i){null!=e.data("select2")&&e.data("select2").destroy(),this.$element=e,this.id=this._generateId(e),i=i||{},this.options=new t(i,e),o.__super__.constructor.call(this);var n=e.attr("tabindex")||0;e.data("old-tabindex",n),e.attr("tabindex","-1");var r=this.options.get("dataAdapter");this.dataAdapter=new r(e,this.options);var a=this.render();this._placeContainer(a);var s=this.options.get("selectionAdapter");this.selection=new s(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,a);var l=this.options.get("dropdownAdapter");this.dropdown=new l(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,a);var u=this.options.get("resultsAdapter");this.results=new u(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var c=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){c.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),e.data("select2",this)};return i.Extend(o,i.Observable),o.prototype._generateId=function(e){var t="";return t=null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+i.generateChars(2):i.generateChars(4),t="select2-"+t},o.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},o.prototype._resolveWidth=function(e,t){var i=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var n=this._resolveWidth(e,"style");return null!=n?n:this._resolveWidth(e,"element")}if("element"==t){var o=e.outerWidth(!1);return 0>=o?"auto":o+"px"}if("style"==t){var r=e.attr("style");if("string"!=typeof r)return null;for(var a=r.split(";"),s=0,l=a.length;l>s;s+=1){var u=a[s].replace(/\s/g,""),c=u.match(i);if(null!==c&&c.length>=1)return c[1]}return null}return t},o.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},o.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this._sync=i.bind(this._syncAttributes,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._sync);var n=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=n?(this._observer=new n(function(i){e.each(i,t._sync)}),this._observer.observe(this.$element[0],{attributes:!0,subtree:!1})):this.$element[0].addEventListener&&this.$element[0].addEventListener("DOMAttrModified",t._sync,!1)},o.prototype._registerDataEvents=function(){var e=this;this.dataAdapter.on("*",function(t,i){e.trigger(t,i)})},o.prototype._registerSelectionEvents=function(){var t=this,i=["toggle"];this.selection.on("toggle",function(){t.toggleDropdown()}),this.selection.on("*",function(n,o){-1===e.inArray(n,i)&&t.trigger(n,o)})},o.prototype._registerDropdownEvents=function(){var e=this;this.dropdown.on("*",function(t,i){e.trigger(t,i)})},o.prototype._registerResultsEvents=function(){var e=this;this.results.on("*",function(t,i){e.trigger(t,i)})},o.prototype._registerEvents=function(){var e=this;this.on("open",function(){e.$container.addClass("select2-container--open")}),this.on("close",function(){e.$container.removeClass("select2-container--open")}),this.on("enable",function(){e.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){e.$container.addClass("select2-container--disabled")}),this.on("focus",function(){e.$container.addClass("select2-container--focus")}),this.on("blur",function(){e.$container.removeClass("select2-container--focus")}),this.on("query",function(t){e.isOpen()||e.trigger("open"),this.dataAdapter.query(t,function(i){e.trigger("results:all",{data:i,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(i){e.trigger("results:append",{data:i,query:t})})}),this.on("keypress",function(t){var i=t.which;e.isOpen()?i===n.ENTER?(e.trigger("results:select"),t.preventDefault()):i===n.SPACE&&t.ctrlKey?(e.trigger("results:toggle"),t.preventDefault()):i===n.UP?(e.trigger("results:previous"),t.preventDefault()):i===n.DOWN?(e.trigger("results:next"),t.preventDefault()):(i===n.ESC||i===n.TAB)&&(e.close(),t.preventDefault()):(i===n.ENTER||i===n.SPACE||(i===n.DOWN||i===n.UP)&&t.altKey)&&(e.open(),t.preventDefault())})},o.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable")):this.trigger("enable")},o.prototype.trigger=function(e,t){var i=o.__super__.trigger,n={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(e in n){var r=n[e],a={prevented:!1,name:e,args:t};if(i.call(this,r,a),a.prevented)return void(t.prevented=!0)}i.call(this,e,t)},o.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},o.prototype.open=function(){this.isOpen()||(this.trigger("query",{}),this.trigger("open"))},o.prototype.close=function(){this.isOpen()&&this.trigger("close")},o.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},o.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==e||0===e.length)&&(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},o.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var e=[];return this.dataAdapter.current(function(t){e=t}),e},o.prototype.val=function(t){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==t||0===t.length)return this.$element.val();var i=t[0];e.isArray(i)&&(i=e.map(i,function(e){return e.toString()})),this.$element.val(i).trigger("change")},o.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._sync),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&this.$element[0].removeEventListener("DOMAttrModified",this._sync,!1),this._sync=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},o.prototype.render=function(){var t=e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return t.attr("dir",this.options.get("dir")),this.$container=t,this.$container.addClass("select2-container--"+this.options.get("theme")),t.data("element",this.$element),t},o}),t.define("jquery.select2",["jquery","require","./select2/core","./select2/defaults"],function(e,t,i,n){if(t("jquery.mousewheel"),null==e.fn.select2){var o=["open","close","destroy"];e.fn.select2=function(t){if(t=t||{},"object"==typeof t)return this.each(function(){var n=e.extend({},t,!0);new i(e(this),n)}),this;if("string"==typeof t){var n=this.data("select2");null==n&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2.");var r=Array.prototype.slice.call(arguments,1),a=n[t](r);return e.inArray(t,o)>-1?this:a}throw new Error("Invalid arguments for Select2: "+t)}}return null==e.fn.select2.defaults&&(e.fn.select2.defaults=n),i}),t.define("jquery.mousewheel",["jquery"],function(e){return e}),{define:t.define,require:t.require}}(),i=t.require("jquery.select2");return e.fn.select2.amd=t,i}),!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e,t){function i(){return new Date(Date.UTC.apply(Date,arguments))}function n(){var e=new Date;return i(e.getFullYear(),e.getMonth(),e.getDate())}function o(e,t){return e.getUTCFullYear()===t.getUTCFullYear()&&e.getUTCMonth()===t.getUTCMonth()&&e.getUTCDate()===t.getUTCDate()}function r(e){return function(){return this[e].apply(this,arguments)}}function a(e){return e&&!isNaN(e.getTime())}function s(t,i){function n(e,t){return t.toLowerCase()}var o,r=e(t).data(),a={},s=new RegExp("^"+i.toLowerCase()+"([A-Z])");i=new RegExp("^"+i.toLowerCase());for(var l in r)i.test(l)&&(o=l.replace(s,n),a[o]=r[l]);return a}function l(t){var i={};if(m[t]||(t=t.split("-")[0],m[t])){var n=m[t];return e.each(g,function(e,t){t in n&&(i[t]=n[t])}),i}}var u=function(){var t={get:function(e){return this.slice(e)[0]},contains:function(e){for(var t=e&&e.valueOf(),i=0,n=this.length;n>i;i++)if(0<=this[i].valueOf()-t&&this[i].valueOf()-t<864e5)return i;return-1},remove:function(e){this.splice(e,1)},replace:function(t){t&&(e.isArray(t)||(t=[t]),this.clear(),this.push.apply(this,t))},clear:function(){this.length=0},copy:function(){var e=new u;return e.replace(this),e}};return function(){var i=[];return i.push.apply(i,arguments),e.extend(i,t),i}}(),c=function(t,i){e.data(t,"datepicker",this),this._process_options(i),this.dates=new u,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=e(t),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .btn"),this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=e(w.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(e,t){return Number(t)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.setViewMode(this.o.startView),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.isInline&&this.show()};c.prototype={constructor:c,_resolveViewName:function(t){return e.each(w.viewModes,function(i,n){return t===i||-1!==e.inArray(t,n.names)?(t=i,!1):void 0}),t},_resolveDaysOfWeek:function(t){return e.isArray(t)||(t=t.split(/[,\s]*/)),e.map(t,Number)},_check_template:function(i){try{if(i===t||""===i)return!1;if((i.match(/[<>]/g)||[]).length<=0)return!0;var n=e(i);return n.length>0}catch(e){return!1}},_process_options:function(t){this._o=e.extend({},this._o,t);var o=this.o=e.extend({},this._o),r=o.language;m[r]||(r=r.split("-")[0],m[r]||(r=f.language)),o.language=r,o.startView=this._resolveViewName(o.startView),o.minViewMode=this._resolveViewName(o.minViewMode),o.maxViewMode=this._resolveViewName(o.maxViewMode),o.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,o.startView)),o.multidate!==!0&&(o.multidate=Number(o.multidate)||!1,o.multidate!==!1&&(o.multidate=Math.max(0,o.multidate))),o.multidateSeparator=String(o.multidateSeparator),o.weekStart%=7,o.weekEnd=(o.weekStart+6)%7;var a=w.parseFormat(o.format);o.startDate!==-(1/0)&&(o.startDate?o.startDate instanceof Date?o.startDate=this._local_to_utc(this._zero_time(o.startDate)):o.startDate=w.parseDate(o.startDate,a,o.language,o.assumeNearbyYear):o.startDate=-(1/0)),o.endDate!==1/0&&(o.endDate?o.endDate instanceof Date?o.endDate=this._local_to_utc(this._zero_time(o.endDate)):o.endDate=w.parseDate(o.endDate,a,o.language,o.assumeNearbyYear):o.endDate=1/0),o.daysOfWeekDisabled=this._resolveDaysOfWeek(o.daysOfWeekDisabled||[]),o.daysOfWeekHighlighted=this._resolveDaysOfWeek(o.daysOfWeekHighlighted||[]),o.datesDisabled=o.datesDisabled||[],e.isArray(o.datesDisabled)||(o.datesDisabled=o.datesDisabled.split(",")),o.datesDisabled=e.map(o.datesDisabled,function(e){return w.parseDate(e,a,o.language,o.assumeNearbyYear)});var s=String(o.orientation).toLowerCase().split(/\s+/g),l=o.orientation.toLowerCase();if(s=e.grep(s,function(e){return/^auto|left|right|top|bottom$/.test(e)}),o.orientation={x:"auto",y:"auto"},l&&"auto"!==l)if(1===s.length)switch(s[0]){case"top":case"bottom":o.orientation.y=s[0];break;case"left":case"right":o.orientation.x=s[0]}else l=e.grep(s,function(e){return/^left|right$/.test(e)}),o.orientation.x=l[0]||"auto",l=e.grep(s,function(e){return/^top|bottom$/.test(e)}),o.orientation.y=l[0]||"auto";if(o.defaultViewDate){var u=o.defaultViewDate.year||(new Date).getFullYear(),c=o.defaultViewDate.month||0,d=o.defaultViewDate.day||1;o.defaultViewDate=i(u,c,d)}else o.defaultViewDate=n()},_events:[],_secondaryEvents:[],_applyEvents:function(e){for(var i,n,o,r=0;r<e.length;r++)i=e[r][0],2===e[r].length?(n=t,o=e[r][1]):3===e[r].length&&(n=e[r][1],o=e[r][2]),i.on(o,n)},_unapplyEvents:function(e){for(var i,n,o,r=0;r<e.length;r++)i=e[r][0],2===e[r].length?(o=t,n=e[r][1]):3===e[r].length&&(o=e[r][1],n=e[r][2]),i.off(n,o)},_buildEvents:function(){var t={keyup:e.proxy(function(t){-1===e.inArray(t.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:e.proxy(this.keydown,this),paste:e.proxy(this.paste,this)};this.o.showOnFocus===!0&&(t.focus=e.proxy(this.show,this)),this.isInput?this._events=[[this.element,t]]:this.component&&this.inputField.length?this._events=[[this.inputField,t],[this.component,{click:e.proxy(this.show,this)}]]:this._events=[[this.element,{click:e.proxy(this.show,this),keydown:e.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:e.proxy(function(e){this._focused_from=e.target},this)}],[this.element,{blur:e.proxy(function(e){this._focused_from=e.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":e.proxy(function(e){this.update(e.date)},this)}]),this._secondaryEvents=[[this.picker,{click:e.proxy(this.click,this)}],[this.picker,".prev, .next",{click:e.proxy(this.navArrowsClick,this)}],[e(window),{resize:e.proxy(this.place,this)}],[e(document),{"mousedown touchstart":e.proxy(function(e){this.element.is(e.target)||this.element.find(e.target).length||this.picker.is(e.target)||this.picker.find(e.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(t,i){var n=i||this.dates.get(-1),o=this._utc_to_local(n);this.element.trigger({type:t,date:o,viewMode:this.viewMode,dates:e.map(this.dates,this._utc_to_local),format:e.proxy(function(e,t){0===arguments.length?(e=this.dates.length-1,t=this.o.format):"string"==typeof e&&(t=e,e=this.dates.length-1),t=t||this.o.format;var i=this.dates.get(e);return w.formatDate(i,t,this.o.language)},this)})},show:function(){return this.inputField.prop("disabled")||this.inputField.prop("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&e(this.element).blur(),this)},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(t){var i;if(t.originalEvent.clipboardData&&t.originalEvent.clipboardData.types&&-1!==e.inArray("text/plain",t.originalEvent.clipboardData.types))i=t.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;i=window.clipboardData.getData("Text")}this.setDate(i),this.update(),t.preventDefault()},_utc_to_local:function(e){return e&&new Date(e.getTime()+6e4*e.getTimezoneOffset())},_local_to_utc:function(e){return e&&new Date(e.getTime()-6e4*e.getTimezoneOffset())},_zero_time:function(e){return e&&new Date(e.getFullYear(),e.getMonth(),e.getDate())},_zero_utc_time:function(e){return e&&i(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())},getDates:function(){return e.map(this.dates,this._utc_to_local)},getUTCDates:function(){return e.map(this.dates,function(e){return new Date(e)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var e=this.dates.get(-1);return e!==t?new Date(e):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var t=e.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,t),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var t=e.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,e.map(t,this._utc_to_local)),this},setDate:r("setDates"),setUTCDate:r("setUTCDates"),remove:r("destroy"),setValue:function(){var e=this.getFormattedDate();return this.inputField.val(e),this},getFormattedDate:function(i){i===t&&(i=this.o.format);var n=this.o.language;return e.map(this.dates,function(e){return w.formatDate(e,i,n)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(e){return this._process_options({startDate:e}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(e){return this._process_options({endDate:e}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(e){return this._process_options({daysOfWeekDisabled:e}),this.update(),this},setDaysOfWeekHighlighted:function(e){return this._process_options({daysOfWeekHighlighted:e}),this.update(),this},setDatesDisabled:function(e){return this._process_options({datesDisabled:e}),this.update(),this},place:function(){if(this.isInline)return this;var t=this.picker.outerWidth(),i=this.picker.outerHeight(),n=10,o=e(this.o.container),r=o.width(),a="body"===this.o.container?e(document).scrollTop():o.scrollTop(),s=o.offset(),l=[];this.element.parents().each(function(){var t=e(this).css("z-index");"auto"!==t&&0!==t&&l.push(parseInt(t))});var u=Math.max.apply(Math,l)+this.o.zIndexOffset,c=this.component?this.component.parent().offset():this.element.offset(),d=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),h=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),p=c.left-s.left,f=c.top-s.top;"body"!==this.o.container&&(f+=a),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(p-=t-h)):c.left<0?(this.picker.addClass("datepicker-orient-left"),p-=c.left-n):p+t>r?(this.picker.addClass("datepicker-orient-right"),p+=h-t):this.picker.addClass("datepicker-orient-left");var g,m=this.o.orientation.y;if("auto"===m&&(g=-a+f-i,m=0>g?"bottom":"top"),this.picker.addClass("datepicker-orient-"+m),"top"===m?f-=i+parseInt(this.picker.css("padding-top")):f+=d,this.o.rtl){var w=r-(p+h);this.picker.css({top:f,right:w,zIndex:u})}else this.picker.css({top:f,left:p,zIndex:u});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var t=this.dates.copy(),i=[],n=!1;return arguments.length?(e.each(arguments,e.proxy(function(e,t){t instanceof Date&&(t=this._local_to_utc(t)),i.push(t)},this)),n=!0):(i=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),i=i&&this.o.multidate?i.split(this.o.multidateSeparator):[i],delete this.element.data().date),i=e.map(i,e.proxy(function(e){return w.parseDate(e,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),i=e.grep(i,e.proxy(function(e){return!this.dateWithinRange(e)||!e},this),!0),this.dates.replace(i),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate,n?(this.setValue(),this.element.change()):this.dates.length&&String(t)!==String(this.dates)&&n&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&t.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){var t=this.o.weekStart,i="<tr>";for(this.o.calendarWeeks&&(i+='<th class="cw">&#160;</th>');t<this.o.weekStart+7;)i+='<th class="dow',-1!==e.inArray(t,this.o.daysOfWeekDisabled)&&(i+=" disabled"),i+='">'+m[this.o.language].daysMin[t++%7]+"</th>";i+="</tr>",this.picker.find(".datepicker-days thead").append(i)},fillMonths:function(){for(var e=this._utc_to_local(this.viewDate),t="",i=0;12>i;){var n=e&&e.getMonth()===i?" focused":"";t+='<span class="month'+n+'">'+m[this.o.language].monthsShort[i++]+"</span>"}this.picker.find(".datepicker-months td").html(t)},setRange:function(t){t&&t.length?this.range=e.map(t,function(e){return e.valueOf()}):delete this.range,this.fill()},getClassNames:function(t){var i=[],r=this.viewDate.getUTCFullYear(),a=this.viewDate.getUTCMonth(),s=n();return t.getUTCFullYear()<r||t.getUTCFullYear()===r&&t.getUTCMonth()<a?i.push("old"):(t.getUTCFullYear()>r||t.getUTCFullYear()===r&&t.getUTCMonth()>a)&&i.push("new"),this.focusDate&&t.valueOf()===this.focusDate.valueOf()&&i.push("focused"),this.o.todayHighlight&&o(t,s)&&i.push("today"),-1!==this.dates.contains(t)&&i.push("active"),this.dateWithinRange(t)||i.push("disabled"),this.dateIsDisabled(t)&&i.push("disabled","disabled-date"),-1!==e.inArray(t.getUTCDay(),this.o.daysOfWeekHighlighted)&&i.push("highlighted"),this.range&&(t>this.range[0]&&t<this.range[this.range.length-1]&&i.push("range"),-1!==e.inArray(t.valueOf(),this.range)&&i.push("selected"),t.valueOf()===this.range[0]&&i.push("range-start"),t.valueOf()===this.range[this.range.length-1]&&i.push("range-end")),i},_fill_yearsView:function(i,n,o,r,a,s,l,u){var c,d,h,p,f,g,m,w,k,y,v;for(c="",d=this.picker.find(i),h=parseInt(a/o,10)*o,f=parseInt(s/r,10)*r,g=parseInt(l/r,10)*r,p=e.map(this.dates,function(e){return parseInt(e.getUTCFullYear()/r,10)*r}),d.find(".datepicker-switch").text(h+"-"+(h+9*r)),m=h-r,w=-1;11>w;w+=1)k=[n],y=null,-1===w?k.push("old"):10===w&&k.push("new"),-1!==e.inArray(m,p)&&k.push("active"),(f>m||m>g)&&k.push("disabled"),m===this.viewDate.getFullYear()&&k.push("focused"),u!==e.noop&&(v=u(new Date(m,0,1)),v===t?v={}:"boolean"==typeof v?v={enabled:v}:"string"==typeof v&&(v={classes:v}),v.enabled===!1&&k.push("disabled"),v.classes&&(k=k.concat(v.classes.split(/\s+/))),v.tooltip&&(y=v.tooltip)),c+='<span class="'+k.join(" ")+'"'+(y?' title="'+y+'"':"")+">"+m+"</span>",m+=r;d.find("td").html(c)},fill:function(){var n,o,r=new Date(this.viewDate),a=r.getUTCFullYear(),s=r.getUTCMonth(),l=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),u=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),c=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,d=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,h=m[this.o.language].today||m.en.today||"",p=m[this.o.language].clear||m.en.clear||"",f=m[this.o.language].titleFormat||m.en.titleFormat;
if(!isNaN(a)&&!isNaN(s)){this.picker.find(".datepicker-days .datepicker-switch").text(w.formatDate(r,f,this.o.language)),this.picker.find("tfoot .today").text(h).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(p).toggle(this.o.clearBtn!==!1),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();var g=i(a,s,0),k=g.getUTCDate();g.setUTCDate(k-(g.getUTCDay()-this.o.weekStart+7)%7);var y=new Date(g);g.getUTCFullYear()<100&&y.setUTCFullYear(g.getUTCFullYear()),y.setUTCDate(y.getUTCDate()+42),y=y.valueOf();for(var v,b,D=[];g.valueOf()<y;){if(v=g.getUTCDay(),v===this.o.weekStart&&(D.push("<tr>"),this.o.calendarWeeks)){var _=new Date(+g+(this.o.weekStart-v-7)%7*864e5),Y=new Date(Number(_)+(11-_.getUTCDay())%7*864e5),x=new Date(Number(x=i(Y.getUTCFullYear(),0,1))+(11-x.getUTCDay())%7*864e5),T=(Y-x)/864e5/7+1;D.push('<td class="cw">'+T+"</td>")}b=this.getClassNames(g),b.push("day"),this.o.beforeShowDay!==e.noop&&(o=this.o.beforeShowDay(this._utc_to_local(g)),o===t?o={}:"boolean"==typeof o?o={enabled:o}:"string"==typeof o&&(o={classes:o}),o.enabled===!1&&b.push("disabled"),o.classes&&(b=b.concat(o.classes.split(/\s+/))),o.tooltip&&(n=o.tooltip)),b=e.isFunction(e.uniqueSort)?e.uniqueSort(b):e.unique(b),D.push('<td class="'+b.join(" ")+'"'+(n?' title="'+n+'"':"")+(this.o.dateCells?' data-date="'+g.getTime().toString()+'"':"")+">"+g.getUTCDate()+"</td>"),n=null,v===this.o.weekEnd&&D.push("</tr>"),g.setUTCDate(g.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(D.join(""));var M=m[this.o.language].monthsTitle||m.en.monthsTitle||"Months",C=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?M:a).end().find("tbody span").removeClass("active");if(e.each(this.dates,function(e,t){t.getUTCFullYear()===a&&C.eq(t.getUTCMonth()).addClass("active")}),(l>a||a>c)&&C.addClass("disabled"),a===l&&C.slice(0,u).addClass("disabled"),a===c&&C.slice(d+1).addClass("disabled"),this.o.beforeShowMonth!==e.noop){var S=this;e.each(C,function(i,n){var o=new Date(a,i,1),r=S.o.beforeShowMonth(o);r===t?r={}:"boolean"==typeof r?r={enabled:r}:"string"==typeof r&&(r={classes:r}),r.enabled!==!1||e(n).hasClass("disabled")||e(n).addClass("disabled"),r.classes&&e(n).addClass(r.classes),r.tooltip&&e(n).prop("title",r.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,1,a,l,c,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,10,a,l,c,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,100,a,l,c,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var e,t,i=new Date(this.viewDate),n=i.getUTCFullYear(),o=i.getUTCMonth();switch(this.viewMode){case 0:e=this.o.startDate!==-(1/0)&&n<=this.o.startDate.getUTCFullYear()&&o<=this.o.startDate.getUTCMonth(),t=this.o.endDate!==1/0&&n>=this.o.endDate.getUTCFullYear()&&o>=this.o.endDate.getUTCMonth();break;case 1:case 2:case 3:case 4:e=this.o.startDate!==-(1/0)&&n<=this.o.startDate.getUTCFullYear(),t=this.o.endDate!==1/0&&n>=this.o.endDate.getUTCFullYear()}this.picker.find(".prev").toggleClass("disabled",e),this.picker.find(".next").toggleClass("disabled",t)}},click:function(t){t.preventDefault(),t.stopPropagation();var o,r,a,s,l;o=e(t.target),o.hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),o.hasClass("today")&&!o.hasClass("day")&&(this.setViewMode(0),this._setDate(n(),"linked"===this.o.todayBtn?null:"view")),o.hasClass("clear")&&this.clearDates(),o.hasClass("disabled")||(o.hasClass("day")&&(a=Number(o.text()),s=this.viewDate.getUTCFullYear(),l=this.viewDate.getUTCMonth(),(o.hasClass("old")||o.hasClass("new"))&&(r=o.hasClass("old")?-1:1,l=(l+r+12)%12,(-1===r&&11===l||1===r&&0===l)&&(s+=r,this._trigger("changeYear",this.viewDate)),this._trigger("changeMonth",this.viewDate)),this._setDate(i(s,l,a))),(o.hasClass("month")||o.hasClass("year")||o.hasClass("decade")||o.hasClass("century"))&&(this.viewDate.setUTCDate(1),a=1,1===this.viewMode?(l=o.parent().find("span").index(o),s=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(l)):(l=0,s=Number(o.text()),this.viewDate.setUTCFullYear(s)),this._trigger(w.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(i(s,l,a)):(this.setViewMode(this.viewMode-1),this.fill()))),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},navArrowsClick:function(t){var i=e(t.target),n=i.hasClass("prev")?-1:1;0!==this.viewMode&&(n*=12*w.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,n),this._trigger(w.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(e){var t=this.dates.contains(e);if(e||this.dates.clear(),-1!==t?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(t):this.o.multidate===!1?(this.dates.clear(),this.dates.push(e)):this.dates.push(e),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(e,t){t&&"date"!==t||this._toggle_multidate(e&&new Date(e)),t&&"view"!==t||(this.viewDate=e&&new Date(e)),this.fill(),this.setValue(),t&&"view"===t||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||t&&"date"!==t||this.hide()},moveDay:function(e,t){var i=new Date(e);return i.setUTCDate(e.getUTCDate()+t),i},moveWeek:function(e,t){return this.moveDay(e,7*t)},moveMonth:function(e,t){if(!a(e))return this.o.defaultViewDate;if(!t)return e;var i,n,o=new Date(e.valueOf()),r=o.getUTCDate(),s=o.getUTCMonth(),l=Math.abs(t);if(t=t>0?1:-1,1===l)n=-1===t?function(){return o.getUTCMonth()===s}:function(){return o.getUTCMonth()!==i},i=s+t,o.setUTCMonth(i),i=(i+12)%12;else{for(var u=0;l>u;u++)o=this.moveMonth(o,t);i=o.getUTCMonth(),o.setUTCDate(r),n=function(){return i!==o.getUTCMonth()}}for(;n();)o.setUTCDate(--r),o.setUTCMonth(i);return o},moveYear:function(e,t){return this.moveMonth(e,12*t)},moveAvailableDate:function(e,t,i){do{if(e=this[i](e,t),!this.dateWithinRange(e))return!1;i="moveDay"}while(this.dateIsDisabled(e));return e},weekOfDateIsDisabled:function(t){return-1!==e.inArray(t.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(t){return this.weekOfDateIsDisabled(t)||e.grep(this.o.datesDisabled,function(e){return o(t,e)}).length>0},dateWithinRange:function(e){return e>=this.o.startDate&&e<=this.o.endDate},keydown:function(e){if(!this.picker.is(":visible"))return void((40===e.keyCode||27===e.keyCode)&&(this.show(),e.stopPropagation()));var t,i,n=!1,o=this.focusDate||this.viewDate;switch(e.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),e.preventDefault(),e.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;t=37===e.keyCode||38===e.keyCode?-1:1,0===this.viewMode?e.ctrlKey?(i=this.moveAvailableDate(o,t,"moveYear"),i&&this._trigger("changeYear",this.viewDate)):e.shiftKey?(i=this.moveAvailableDate(o,t,"moveMonth"),i&&this._trigger("changeMonth",this.viewDate)):37===e.keyCode||39===e.keyCode?i=this.moveAvailableDate(o,t,"moveDay"):this.weekOfDateIsDisabled(o)||(i=this.moveAvailableDate(o,t,"moveWeek")):1===this.viewMode?((38===e.keyCode||40===e.keyCode)&&(t=4*t),i=this.moveAvailableDate(o,t,"moveMonth")):2===this.viewMode&&((38===e.keyCode||40===e.keyCode)&&(t=4*t),i=this.moveAvailableDate(o,t,"moveYear")),i&&(this.focusDate=this.viewDate=i,this.setValue(),this.fill(),e.preventDefault());break;case 13:if(!this.o.forceParse)break;o=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(o),n=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(e.preventDefault(),e.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}n&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))},setViewMode:function(e){this.viewMode=e,this.picker.children("div").hide().filter(".datepicker-"+w.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}};var d=function(t,i){e.data(t,"datepicker",this),this.element=e(t),this.inputs=e.map(i.inputs,function(e){return e.jquery?e[0]:e}),delete i.inputs,this.keepEmptyValues=i.keepEmptyValues,delete i.keepEmptyValues,p.call(e(this.inputs),i).on("changeDate",e.proxy(this.dateUpdated,this)),this.pickers=e.map(this.inputs,function(t){return e.data(t,"datepicker")}),this.updateDates()};d.prototype={updateDates:function(){this.dates=e.map(this.pickers,function(e){return e.getUTCDate()}),this.updateRanges()},updateRanges:function(){var t=e.map(this.dates,function(e){return e.valueOf()});e.each(this.pickers,function(e,i){i.setRange(t)})},dateUpdated:function(i){if(!this.updating){this.updating=!0;var n=e.data(i.target,"datepicker");if(n!==t){var o=n.getUTCDate(),r=this.keepEmptyValues,a=e.inArray(i.target,this.inputs),s=a-1,l=a+1,u=this.inputs.length;if(-1!==a){if(e.each(this.pickers,function(e,t){t.getUTCDate()||t!==n&&r||t.setUTCDate(o)}),o<this.dates[s])for(;s>=0&&o<this.dates[s];)this.pickers[s--].setUTCDate(o);else if(o>this.dates[l])for(;u>l&&o>this.dates[l];)this.pickers[l++].setUTCDate(o);this.updateDates(),delete this.updating}}}},destroy:function(){e.map(this.pickers,function(e){e.destroy()}),delete this.element.data().datepicker},remove:r("destroy")};var h=e.fn.datepicker,p=function(i){var n=Array.apply(null,arguments);n.shift();var o;if(this.each(function(){var t=e(this),r=t.data("datepicker"),a="object"==typeof i&&i;if(!r){var u=s(this,"date"),h=e.extend({},f,u,a),p=l(h.language),g=e.extend({},f,p,u,a);t.hasClass("input-daterange")||g.inputs?(e.extend(g,{inputs:g.inputs||t.find("input").toArray()}),r=new d(this,g)):r=new c(this,g),t.data("datepicker",r)}"string"==typeof i&&"function"==typeof r[i]&&(o=r[i].apply(r,n))}),o===t||o instanceof c||o instanceof d)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+i+" function)");return o};e.fn.datepicker=p;var f=e.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:e.noop,beforeShowMonth:e.noop,beforeShowYear:e.noop,beforeShowDecade:e.noop,beforeShowCentury:e.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,dateCells:!1,title:"",templates:{leftArrow:"&laquo;",rightArrow:"&raquo;"}},g=e.fn.datepicker.locale_opts=["format","rtl","weekStart"];e.fn.datepicker.Constructor=c;var m=e.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},w={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(e){if("function"==typeof e.toValue&&"function"==typeof e.toDisplay)return e;var t=e.replace(this.validParts,"\0").split("\0"),i=e.match(this.validParts);if(!t||!t.length||!i||0===i.length)throw new Error("Invalid date format.");return{separators:t,parts:i}},parseDate:function(o,r,a,s){function l(e,t){return t===!0&&(t=10),100>e&&(e+=2e3,e>(new Date).getFullYear()+t&&(e-=100)),e}function u(){var e=this.slice(0,d[f].length),t=d[f].slice(0,e.length);return e.toLowerCase()===t.toLowerCase()}if(!o)return t;if(o instanceof Date)return o;if("string"==typeof r&&(r=w.parseFormat(r)),r.toValue)return r.toValue(o,r,a);var d,h,p,f,g,k={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},y={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(o in y&&(o=y[o]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(o)){for(d=o.match(/([\-+]\d+)([dmwy])/gi),o=new Date,f=0;f<d.length;f++)h=d[f].match(/([\-+]\d+)([dmwy])/i),p=Number(h[1]),g=k[h[2].toLowerCase()],o=c.prototype[g](o,p);return i(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate())}d=o&&o.match(this.nonpunctuation)||[],o=new Date;var v,b,D={},_=["yyyy","yy","M","MM","m","mm","d","dd"],Y={yyyy:function(e,t){return e.setUTCFullYear(s?l(t,s):t)},m:function(e,t){if(isNaN(e))return e;for(t-=1;0>t;)t+=12;for(t%=12,e.setUTCMonth(t);e.getUTCMonth()!==t;)e.setUTCDate(e.getUTCDate()-1);return e},d:function(e,t){return e.setUTCDate(t)}};Y.yy=Y.yyyy,Y.M=Y.MM=Y.mm=Y.m,Y.dd=Y.d,o=n();var x=r.parts.slice();if(d.length!==x.length&&(x=e(x).filter(function(t,i){return-1!==e.inArray(i,_)}).toArray()),d.length===x.length){var T;for(f=0,T=x.length;T>f;f++){if(v=parseInt(d[f],10),h=x[f],isNaN(v))switch(h){case"MM":b=e(m[a].months).filter(u),v=e.inArray(b[0],m[a].months)+1;break;case"M":b=e(m[a].monthsShort).filter(u),v=e.inArray(b[0],m[a].monthsShort)+1}D[h]=v}var M,C;for(f=0;f<_.length;f++)C=_[f],C in D&&!isNaN(D[C])&&(M=new Date(o),Y[C](M,D[C]),isNaN(M)||(o=M))}return o},formatDate:function(t,i,n){if(!t)return"";if("string"==typeof i&&(i=w.parseFormat(i)),i.toDisplay)return i.toDisplay(t,i,n);var o={d:t.getUTCDate(),D:m[n].daysShort[t.getUTCDay()],DD:m[n].days[t.getUTCDay()],m:t.getUTCMonth()+1,M:m[n].monthsShort[t.getUTCMonth()],MM:m[n].months[t.getUTCMonth()],yy:t.getUTCFullYear().toString().substring(2),yyyy:t.getUTCFullYear()};o.dd=(o.d<10?"0":"")+o.d,o.mm=(o.m<10?"0":"")+o.m,t=[];for(var r=e.extend([],i.separators),a=0,s=i.parts.length;s>=a;a++)r.length&&t.push(r.shift()),t.push(o[i.parts[a]]);return t.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};w.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+w.headTemplate+"<tbody></tbody>"+w.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+w.headTemplate+w.contTemplate+w.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+w.headTemplate+w.contTemplate+w.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+w.headTemplate+w.contTemplate+w.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+w.headTemplate+w.contTemplate+w.footTemplate+"</table></div></div>",e.fn.datepicker.DPGlobal=w,e.fn.datepicker.noConflict=function(){return e.fn.datepicker=h,this},e.fn.datepicker.version="1.7.0-dev",e(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(t){var i=e(this);i.data("datepicker")||(t.preventDefault(),p.call(i,"show"))}),e(function(){p.call(e('[data-provide="datepicker-inline"]'))})}),function e(t,i,n){function o(a,s){if(!i[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=i[a]={exports:{}};t[a][0].call(c.exports,function(e){var i=t[a][1][e];return o(i?i:e)},c,c.exports,e,t,i,n)}return i[a].exports}for(var r="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();String.prototype.descore=function(){return this.replace(/_/g," ")},String.prototype.score=function(){return this.replace(/ /g,"_")},String.prototype.upcase=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.escape=function(){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};return this.replace(/[&<>"'\/]/g,function(t){return e[t]})},Array.prototype.unique=function(){return this.filter(function(e,t,i){return i.indexOf(e)===t})},window.mix=function(e){return new r(e)};var r=function(){function e(t){n(this,e),this.superclass=t}return o(e,[{key:"with",value:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.reduce(function(e,t){return t(e)},this.superclass)}}]),e}();$.whenAll=function(){var e=$.Deferred(),t=0,i="resolved",n=new(Function.prototype.bind.apply(Array,[null].concat(Array.prototype.slice.call(arguments)))),o=function(){"rejected"===this.state&&(i="rejected"),t++,t===n.length&&e["rejected"===i?"reject":"resolve"]()};return $.each(n,function(e,t){t.always(o)}),e.promise()}},{}],2:[function(e,t,i){"use strict";Array.prototype.includes||(Array.prototype.includes=function(e){return this.indexOf(e)!==-1}),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&this.indexOf(e,t)!==-1}),"function"!=typeof Object.assign&&!function(){Object.assign=function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),i=1;i<arguments.length;i++){var n=arguments[i];if(void 0!==n&&null!==n)for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])}return t}}(),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode.removeChild(this)}),String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.substr(t,e.length)===e}),Array.of||(Array.of=function(){return Array.prototype.slice.call(arguments)}),Array.prototype.find||(Array.prototype.find=function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t=Object(this),i=t.length>>>0,n=arguments[1],o=void 0,r=0;r<i;r++)if(o=t[r],e.call(n,o,r,t))return o}),Array.prototype.fill||(Array.prototype.fill=function(e){if(null===this)throw new TypeError("this is null or not defined");for(var t=Object(this),i=t.length>>>0,n=arguments[1],o=n>>0,r=o<0?Math.max(i+o,0):Math.min(o,i),a=arguments[2],s=void 0===a?i:a>>0,l=s<0?Math.max(i+s,0):Math.min(s,i);r<l;)t[r]=e,r++;return t})},{}],3:[function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){var i=[],n=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw r}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();e("./core_extensions"),e("./polyfills");var c=e("./pv_config"),d=e("./site_map"),h=Object.keys(d).map(function(e){return d[e]}),p=function(e){function t(e){o(this,t);var i=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=i.config.defaults,s=i.config.validParams;if(i.config=Object.assign({},i.config,e),i.config.defaults=Object.assign({},a,e.defaults),i.config.validParams=Object.assign({},s,e.validParams),i.colorsStyleEl=void 0,i.storage={},["localizeDateFormat","numericalFormatting","bezierCurve","autocomplete","autoLogDetection","beginAtZero","rememberChart"].forEach(function(e){i[e]=i.getFromLocalStorage("pageviews-settings-"+e)||i.config.defaults[e]}),i.setupSettingsModal(),i.params=null,i.siteInfo={},i.processStart=null,i.debug=location.search.includes("debug=true")||"localhost"===location.host,location.pathname.includes("-test")&&!location.search.includes("debug=true")){var u=function(){var e=location.pathname.replace(/-test\/?/,"");$("body").html("\n        <p class='tm text-center'>This is the staging environment!</p>\n        <p class='tm text-center'>To use the staging app, append <code>debug=true</code> to the URL</p>\n        <p class='tm text-center'>Otherwise, please update your links to use\n          <strong><a href='"+e+"'>https://"+location.host+e+"</a></strong>\n        </p>\n        <p class='text-center' style='margin-top:50px; font-weight:bold'>\n          Redirecting you to the production "+document.title+" in\n          <span class='countdown'>10</span>...\n        </p>\n      ");var t=10;return setInterval(function(){return 0===--t?document.location=e:void $(".countdown").text(t)},1e3),{v:r(i)}}();if("object"===("undefined"==typeof u?"undefined":l(u)))return u.v}i.debug?window.app=i:i.splash();var c=n({},i18nLang,"/pageviews/messages/"+i18nLang+".json");return"en"!==i18nLang&&(c.en="/pageviews/messages/en.json"),$.i18n({locale:i18nLang}).load(c).then(i.initialize.bind(i)),toastr.options={closeButton:!0,debug:"localhost"===location.host,newestOnTop:!1,progressBar:!1,positionClass:"toast-top-center",preventDuplicates:!0,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"3000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut",toastClass:"alert",iconClasses:{error:"alert-danger",info:"alert-info",success:"alert-success",warning:"alert-warning"}},i}return a(t,e),u(t,[{key:"toast",value:function(e){var t=e.title?"<strong>"+e.title+"</strong> ":"";e=Object.assign({message:t+e.message,level:"warning",timeout:10},e),toastr.options.timeOut=1e3*e.timeout,toastr[e.level](e.message)}},{key:"toastSuccess",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;this.toast({message:e,level:"success",timeout:t})}},{key:"toastInfo",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;this.toast({message:e,level:"info",timeout:t})}},{key:"toastWarn",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;this.toast({message:e,level:"warning",timeout:t})}},{key:"toastError",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;this.toast({message:e,level:"error",timeout:t})}},{key:"addInvalidParamNotice",value:function(e){var t="<a href='/"+this.app+"/url_structure'>"+$.i18n("documentation").toLowerCase()+"</a>";this.toastError("\n      <strong>"+$.i18n("invalid-params")+"</strong>\n      "+$.i18n("param-error-3",e,t)+"\n    ")}},{key:"validateDateRange",value:function(e){if(e.range)this.setSpecialRange(e.range)||(this.addInvalidParamNotice("range"),this.setSpecialRange(this.config.defaults.dateRange));else if(e.start){var t=/\d{4}-\d{2}-\d{2}$/,i=void 0,n=void 0;if(!e.start||!t.test(e.start))return this.addInvalidParamNotice("start"),!1;if(i=moment(e.start),!e.end||!t.test(e.end))return this.addInvalidParamNotice("end"),!1;if(n=moment(e.end),i<this.config.minDate||n<this.config.minDate)return this.toastError("\n          <strong>"+$.i18n("invalid-params")+"</strong>\n          "+$.i18n("param-error-1",moment(this.config.minDate).format(this.dateFormat))+"\n        "),!1;if(i>n)return this.toastError("\n          <strong>"+$.i18n("param-error-2")+"</strong>\n          "+$.i18n("invalid-params")+"\n        "),!1;this.daterangepicker.startDate=i,this.daterangepicker.setEndDate(n)}else this.setSpecialRange(this.config.defaults.dateRange);return!0}},{key:"clearMessages",value:function(){$(".message-container").html("")}},{key:"dbName",value:function(e){return Object.keys(d).find(function(t){return d[t]===e.replace(/\.org$/,"")+".org"})}},{key:"downloadData",value:function(e,t){var i=encodeURI(e),n=document.createElement("a");if("string"==typeof n.download){document.body.appendChild(n);var o=this.getExportFilename()+"."+t;n.download=o,n.href=i,n.click(),document.body.removeChild(n)}else window.open(i)}},{key:"fillInSettings",value:function(){var e=this;$.each($("#settings-modal input"),function(t,i){"checkbox"===i.type?i.checked="true"===e[i.name]:i.checked=e[i.name]===i.value})}},{key:"focusSelect2",value:function(){$(".select2-selection").trigger("click"),$(".select2-search__field").focus()}},{key:"formatNumber",value:function(e){var t=this.getFromLocalStorage("pageviews-settings-numericalFormatting")||this.config.defaults.numericalFormatting;return"true"===t?this.n(e):e}},{key:"formatYAxisNumber",value:function(e){return e%1===0?this.formatNumber(e):null}},{key:"getDateHeadings",value:function(){for(var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=[],i=moment(this.daterangepicker.endDate).add(1,"day"),n=moment(this.daterangepicker.startDate);n.isBefore(i);n.add(1,"day"))e?t.push(n.format(this.dateFormat)):t.push(n.format("YYYY-MM-DD"));return t}},{key:"getExpandedPageURL",value:function(e){return"//"+this.project+".org/w/index.php?title="+encodeURIComponent(e.score()).replace(/'/,escape)}},{key:"getHistoryLink",value:function(e,t){return'<a href="'+this.getExpandedPageURL(e)+'&action=history" target="_blank">\n        '+t+"\n      </a>"}},{key:"getExportFilename",value:function(){var e=this.daterangepicker.startDate.startOf("day").format("YYYYMMDD"),t=this.daterangepicker.endDate.startOf("day").format("YYYYMMDD");return this.app+"-"+e+"-"+t}},{key:"getPageLink",value:function(e,t){return'<a target="_blank" href="'+this.getPageURL(e,t)+'">'+e.descore().escape()+"</a>"}},{key:"getPageURL",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.project;return"//"+t.replace(/\.org$/,"").escape()+".org/wiki/"+encodeURIComponent(e.score())}},{key:"getSiteLink",value:function(e){return'<a target="_blank" href="//'+e.replace(/\.org$/,"")+'.org">'+e+"</a>"}},{key:"getLocaleDateString",value:function(){if(!navigator.language)return this.config.defaults.dateFormat;var e={"ar-sa":"DD/MM/YY","bg-bg":"DD.M.YYYY","ca-es":"DD/MM/YYYY","zh-tw":"YYYY/M/D","cs-cz":"D.M.YYYY","da-dk":"DD-MM-YYYY","de-de":"DD.MM.YYYY","el-gr":"D/M/YYYY","en-us":"M/D/YYYY","fi-fi":"D.M.YYYY","fr-fr":"DD/MM/YYYY","he-il":"DD/MM/YYYY","hu-hu":"YYYY. MM. DD.","is-is":"D.M.YYYY","it-it":"DD/MM/YYYY","ja-jp":"YYYY/MM/DD","ko-kr":"YYYY-MM-DD","nl-nl":"D-M-YYYY","nb-no":"DD.MM.YYYY","pl-pl":"YYYY-MM-DD","pt-br":"D/M/YYYY","ro-ro":"DD.MM.YYYY","ru-ru":"DD.MM.YYYY","hr-hr":"D.M.YYYY","sk-sk":"D. M. YYYY","sq-al":"YYYY-MM-DD","sv-se":"YYYY-MM-DD","th-th":"D/M/YYYY","tr-tr":"DD.MM.YYYY","ur-pk":"DD/MM/YYYY","id-id":"DD/MM/YYYY","uk-ua":"DD.MM.YYYY","be-by":"DD.MM.YYYY","sl-si":"D.M.YYYY","et-ee":"D.MM.YYYY","lv-lv":"YYYY.MM.DD.","lt-lt":"YYYY.MM.DD","fa-ir":"MM/DD/YYYY","vi-vn":"DD/MM/YYYY","hy-am":"DD.MM.YYYY","az-latn-az":"DD.MM.YYYY","eu-es":"YYYY/MM/DD","mk-mk":"DD.MM.YYYY","af-za":"YYYY/MM/DD","ka-ge":"DD.MM.YYYY","fo-fo":"DD-MM-YYYY","hi-in":"DD-MM-YYYY","ms-my":"DD/MM/YYYY","kk-kz":"DD.MM.YYYY","ky-kg":"DD.MM.YY","sw-ke":"M/d/YYYY","uz-latn-uz":"DD/MM YYYY","tt-ru":"DD.MM.YYYY","pa-in":"DD-MM-YY","gu-in":"DD-MM-YY","ta-in":"DD-MM-YYYY","te-in":"DD-MM-YY","kn-in":"DD-MM-YY","mr-in":"DD-MM-YYYY","sa-in":"DD-MM-YYYY","mn-mn":"YY.MM.DD","gl-es":"DD/MM/YY","kok-in":"DD-MM-YYYY","syr-sy":"DD/MM/YYYY","dv-mv":"DD/MM/YY","ar-iq":"DD/MM/YYYY","zh-cn":"YYYY/M/D","de-ch":"DD.MM.YYYY","en-gb":"DD/MM/YYYY","es-mx":"DD/MM/YYYY","fr-be":"D/MM/YYYY","it-ch":"DD.MM.YYYY","nl-be":"D/MM/YYYY","nn-no":"DD.MM.YYYY","pt-pt":"DD-MM-YYYY","sr-latn-cs":"D.M.YYYY","sv-fi":"D.M.YYYY","az-cyrl-az":"DD.MM.YYYY","ms-bn":"DD/MM/YYYY","uz-cyrl-uz":"DD.MM.YYYY","ar-eg":"DD/MM/YYYY","zh-hk":"D/M/YYYY","de-at":"DD.MM.YYYY","en-au":"D/MM/YYYY","es-es":"DD/MM/YYYY","fr-ca":"YYYY-MM-DD","sr-cyrl-cs":"D.M.YYYY","ar-ly":"DD/MM/YYYY","zh-sg":"D/M/YYYY","de-lu":"DD.MM.YYYY","en-ca":"DD/MM/YYYY","es-gt":"DD/MM/YYYY","fr-ch":"DD.MM.YYYY","ar-dz":"DD-MM-YYYY","zh-mo":"D/M/YYYY","de-li":"DD.MM.YYYY","en-nz":"D/MM/YYYY","es-cr":"DD/MM/YYYY","fr-lu":"DD/MM/YYYY","ar-ma":"DD-MM-YYYY","en-ie":"DD/MM/YYYY","es-pa":"MM/DD/YYYY","fr-mc":"DD/MM/YYYY","ar-tn":"DD-MM-YYYY","en-za":"YYYY/MM/DD","es-do":"DD/MM/YYYY","ar-om":"DD/MM/YYYY","en-jm":"DD/MM/YYYY","es-ve":"DD/MM/YYYY","ar-ye":"DD/MM/YYYY","en-029":"MM/DD/YYYY","es-co":"DD/MM/YYYY","ar-sy":"DD/MM/YYYY","en-bz":"DD/MM/YYYY","es-pe":"DD/MM/YYYY","ar-jo":"DD/MM/YYYY","en-tt":"DD/MM/YYYY","es-ar":"DD/MM/YYYY","ar-lb":"DD/MM/YYYY","en-zw":"M/D/YYYY","es-ec":"DD/MM/YYYY","ar-kw":"DD/MM/YYYY","en-ph":"M/D/YYYY","es-cl":"DD-MM-YYYY","ar-ae":"DD/MM/YYYY","es-uy":"DD/MM/YYYY","ar-bh":"DD/MM/YYYY","es-py":"DD/MM/YYYY","ar-qa":"DD/MM/YYYY","es-bo":"DD/MM/YYYY","es-sv":"DD/MM/YYYY","es-hn":"DD/MM/YYYY","es-ni":"DD/MM/YYYY","es-pr":"DD/MM/YYYY","am-et":"D/M/YYYY","tzm-latn-dz":"DD-MM-YYYY","iu-latn-ca":"D/MM/YYYY","sma-no":"DD.MM.YYYY","mn-mong-cn":"YYYY/M/D","gd-gb":"DD/MM/YYYY","en-my":"D/M/YYYY","prs-af":"DD/MM/YY","bn-bd":"DD-MM-YY","wo-sn":"DD/MM/YYYY","rw-rw":"M/D/YYYY","qut-gt":"DD/MM/YYYY","sah-ru":"MM.DD.YYYY","gsw-fr":"DD/MM/YYYY","co-fr":"DD/MM/YYYY","oc-fr":"DD/MM/YYYY","mi-nz":"DD/MM/YYYY","ga-ie":"DD/MM/YYYY","se-se":"YYYY-MM-DD","br-fr":"DD/MM/YYYY","smn-fi":"D.M.YYYY","moh-ca":"M/D/YYYY","arn-cl":"DD-MM-YYYY","ii-cn":"YYYY/M/D","dsb-de":"D. M. YYYY","ig-ng":"D/M/YYYY","kl-gl":"DD-MM-YYYY","lb-lu":"DD/MM/YYYY","ba-ru":"DD.MM.YY","nso-za":"YYYY/MM/DD","quz-bo":"DD/MM/YYYY","yo-ng":"D/M/YYYY","ha-latn-ng":"D/M/YYYY","fil-ph":"M/D/YYYY","ps-af":"DD/MM/YY","fy-nl":"D-M-YYYY","ne-np":"M/D/YYYY","se-no":"DD.MM.YYYY","iu-cans-ca":"D/M/YYYY","sr-latn-rs":"D.M.YYYY","si-lk":"YYYY-MM-DD","sr-cyrl-rs":"D.M.YYYY","lo-la":"DD/MM/YYYY","km-kh":"YYYY-MM-DD","cy-gb":"DD/MM/YYYY","bo-cn":"YYYY/M/D","sms-fi":"D.M.YYYY","as-in":"DD-MM-YYYY","ml-in":"DD-MM-YY","en-in":"DD-MM-YYYY","or-in":"DD-MM-YY","bn-in":"DD-MM-YY","tk-tm":"DD.MM.YY","bs-latn-ba":"D.M.YYYY","mt-mt":"DD/MM/YYYY","sr-cyrl-me":"D.M.YYYY","se-fi":"D.M.YYYY","zu-za":"YYYY/MM/DD","xh-za":"YYYY/MM/DD","tn-za":"YYYY/MM/DD","hsb-de":"D. M. YYYY","bs-cyrl-ba":"D.M.YYYY",
"tg-cyrl-tj":"DD.MM.yy","sr-latn-ba":"D.M.YYYY","smj-no":"DD.MM.YYYY","rm-ch":"DD/MM/YYYY","smj-se":"YYYY-MM-DD","quz-ec":"DD/MM/YYYY","quz-pe":"DD/MM/YYYY","hr-ba":"D.M.YYYY.","sr-latn-me":"D.M.YYYY","sma-se":"YYYY-MM-DD","en-sg":"D/M/YYYY","ug-cn":"YYYY-M-D","sr-cyrl-ba":"D.M.YYYY","es-us":"M/D/YYYY"},t=navigator.language.toLowerCase();return e[t]||this.config.defaults.dateFormat}},{key:"getFromLocalStorage",value:function(e){try{return localStorage.getItem(e)}catch(t){return storage[e]}}},{key:"getBugReportURL",value:function(e,t){var i="https://meta.wikimedia.org/w/index.php?title=Talk:Pageviews_Analysis&action=edit&section=new&preloadtitle="+(t||this.app.upcase()+" bug report");return e?i+"&preload=Talk:Pageviews_Analysis/Preload&preloadparams[]="+e:i}},{key:"fetchSiteInfo",value:function(e){var t=this;e=e.replace(/\.org$/,"");var i=$.Deferred(),n="pageviews-siteinfo-"+e;return this.siteInfo[e]?i.resolve(this.siteInfo):(simpleStorage.hasKey(n)?(this.siteInfo[e]=simpleStorage.get(n),i.resolve(this.siteInfo)):$.ajax({url:"https://"+e+".org/w/api.php",data:{action:"query",meta:"siteinfo",siprop:"general|namespaces",format:"json"},dataType:"jsonp"}).done(function(o){t.siteInfo[e]=o.query,simpleStorage.set(n,t.siteInfo[e],{TTL:6048e5}),i.resolve(t.siteInfo)}).fail(function(e){i.reject(e)}),i)}},{key:"getSiteInfo",value:function(e){return this.siteInfo[e.replace(/\.org$/,"")]}},{key:"getTopviewsMonth",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=e?"startDate":"endDate",i=moment(this.daterangepicker[t]);return i.month()!==moment().month()&&i.month()!==moment().subtract(2,"days").month()||i.subtract(1,"month"),i}},{key:"getTopviewsMonthURL",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getTopviewsMonth(),i={project:e,platform:"all-access",date:t.startOf("month").format("YYYY-MM")};return"/topviews?"+$.param(i)}},{key:"getUserAgent",value:function(){return navigator.userAgent?navigator.userAgent:"Unknown"}},{key:"setLocalStorage",value:function(e,t){try{return localStorage.setItem(e,t)}catch(i){return storage[e]=t}}},{key:"hashCode",value:function(e){return e.split("").reduce(function(e,t){return(e<<5)-e+t.charCodeAt(0)},0)}},{key:"isChartApp",value:function(){return!this.isListApp()}},{key:"isListApp",value:function(){return["langviews","massviews","redirectviews"].includes(this.app)}},{key:"isMultilangProject",value:function(){return new RegExp(".*?\\.("+t.multilangProjects.join("|")+")").test(this.project)}},{key:"massApi",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"continue",n=arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.config.apiLimit;/\.org$/.test(t)||(t+=".org");var r=$.Deferred(),a={pages:[]},s=function s(l){var u=Object.assign({action:"query",format:"json",formatversion:"2"},e);l&&(u[i]=l);var c=$.ajax({url:"https://"+t+"/w/api.php",jsonp:"callback",dataType:"jsonp",data:u});c.done(function(e){if(e.error)return r.resolve(e);var t=void 0;"function"==typeof n?(a.pages=a.pages.concat(n(e.query)),t=a.pages.length>=o):(e.query.pages&&(a.pages=a.pages.concat(e.query.pages)),e.query[n]&&(a[n]=(a[n]||[]).concat(e.query[n])),t=a.pages.length>=o||a[n].length>=o),!t&&e.continue&&e.continue[i]?setTimeout(function(){s(e.continue[i])},100):(e.continue&&(a.continue=!0),r.resolve(a))}).fail(function(e){r.reject(e)})};return s(),r}},{key:"n",value:function(e){return new Number(e).toLocaleString()}},{key:"getPageInfo",value:function(e){var t=$.Deferred();return e=e.map(function(e){return encodeURIComponent(decodeURIComponent(e))}),$.ajax({url:"https://"+this.project+".org/w/api.php?action=query&prop=info&inprop=protection|watchers&formatversion=2&format=json&titles="+e.join("|"),dataType:"jsonp"}).then(function(i){i.query.normalized&&i.query.normalized.forEach(function(t){e[e.indexOf(encodeURIComponent(t.from))]=t.to});var n={};return e.forEach(function(e){e=decodeURIComponent(e),n[e]=i.query.pages.find(function(t){return t.title===e})}),t.resolve(n)})}},{key:"numDaysInRange",value:function(){return this.daterangepicker.endDate.diff(this.daterangepicker.startDate,"days")+1}},{key:"parseQueryString",value:function(e){for(var t=decodeURI(location.search.slice(1)),i=t.split("&"),n={},o=0;o<i.length;o++){var r=i[o].split("=");e&&r[0]===e?n[e]=r[1].split("|").filter(function(e){return!!e}).unique():n[r[0]]=r[1]}return n}},{key:"patchUsage",value:function(e){location.pathname.includes("-test")?$.ajax({url:"//"+metaRoot+"/usage/"+this.app+"-test/"+(this.project||i18nLang),method:"POST"}):metaRoot&&$.ajax({url:"//"+metaRoot+"/usage/"+this.app+"/"+(this.project||i18nLang),method:"POST"})}},{key:"processStarted",value:function(){return this.processStart=moment()}},{key:"processEnded",value:function(){var e=moment(),t=e.diff(this.processStart,"milliseconds");try{$(".elapsed-time").attr("datetime",e.format()).text($.i18n("elapsed-time",t/1e3))}catch(e){}return t}},{key:"rateLimit",value:function(e,t,i){var n=[],o=void 0,r=function(){var t=n.shift();t&&e.apply(t.context,t.arguments),0===n.length&&(clearInterval(o),o=null)};return function(){n.push({context:i||this,arguments:[].slice.call(arguments)}),o||(r(),o=setInterval(r,t))}}},{key:"resetSelect2",value:function(){var e=$(this.config.select2Input);e.data("select2")&&(e.off("change"),e.select2("val",null),e.select2("data",null),e.select2("destroy")),this.setupSelect2()}},{key:"rgba",value:function(e,t){return e.replace(/,\s*\d\)/,", "+t+")")}},{key:"saveSetting",value:function(e,t){this[e]=t,this.setLocalStorage("pageviews-settings-"+e,t)}},{key:"saveSettings",value:function(){var e=this,t="no_autocomplete"===this.autocomplete;$.each($("#settings-modal input"),function(t,i){"checkbox"===i.type?e.saveSetting(i.name,i.checked?"true":"false"):i.checked&&e.saveSetting(i.name,i.value)}),"topviews"!==this.app&&(this.daterangepicker.locale.format=this.dateFormat,this.daterangepicker.updateElement(),this.setupSelect2Colors(),"no_autocomplete"===this.autocomplete!==t&&this.resetSelect2(),"true"===this.beginAtZero&&$(".begin-at-zero-option").prop("checked",!0)),this.processInput(!0)}},{key:"setSelect2Defaults",value:function(e){var t=this;return e.forEach(function(e){var i=$("<div>").text(e).html();$("<option>"+i+"</option>").appendTo(t.config.select2Input)}),$(this.config.select2Input).select2("val",e),$(this.config.select2Input).trigger("select2:select"),e}},{key:"setSpecialRange",value:function(e){var t=Object.keys(this.config.specialRanges).indexOf(e),i=void 0,n=void 0,o=void 0;if(e.includes("latest-")){o=parseInt(e.replace("latest-",""),10)||20;var r=this.config.specialRanges.latest(o),a=s(r,2);i=a[0],n=a[1]}else{if(!(t>=0))return;var l="latest"===e?this.config.specialRanges.latest():this.config.specialRanges[e],u=s(l,2);i=u[0],n=u[1],$(".daterangepicker .ranges li").eq(t).trigger("click")}return this.specialRange={range:e,value:i.format(this.dateFormat)+" - "+n.format(this.dateFormat)},this.daterangepicker.startDate=i,this.daterangepicker.setEndDate(n),$(".latest-text").text($.i18n("latest-days",o)),this.specialRange}},{key:"setupSelect2Colors",value:function(){var e=this;return this.colorsStyleEl&&this.colorsStyleEl.remove(),this.colorsStyleEl=document.createElement("style"),this.colorsStyleEl.appendChild(document.createTextNode("")),document.head.appendChild(this.colorsStyleEl),this.config.colors.forEach(function(t,i){e.colorsStyleEl.sheet.insertRule(".select2-selection__choice:nth-of-type("+(i+1)+") { background: "+t+" !important }",0)}),this.colorsStyleEl.sheet}},{key:"setupListeners",value:function(){var e=this;$("a[href='#']").on("click",function(e){return e.preventDefault()}),$(".download-csv").on("click",this.exportCSV.bind(this)),$(".download-json").on("click",this.exportJSON.bind(this)),$(this.config.projectInput).on("focusin",function(){this.dataset.value=this.value}),$(this.config.projectInput).on("change",function(){return e.validateProject()})}},{key:"setupSettingsModal",value:function(){this.fillInSettings(),$(".save-settings-btn").on("click",this.saveSettings.bind(this)),$(".cancel-settings-btn").on("click",this.fillInSettings.bind(this))}},{key:"setupDateRangeSelector",value:function(){var e=this,t=$(this.config.dateRangeSelector),i={};Object.keys(this.config.specialRanges).forEach(function(t){"latest"!==t&&(i[$.i18n(t)]=e.config.specialRanges[t])});var n={locale:{format:this.dateFormat,applyLabel:$.i18n("apply"),cancelLabel:$.i18n("cancel"),customRangeLabel:$.i18n("custom-range"),daysOfWeek:[$.i18n("su"),$.i18n("mo"),$.i18n("tu"),$.i18n("we"),$.i18n("th"),$.i18n("fr"),$.i18n("sa")],monthNames:[$.i18n("january"),$.i18n("february"),$.i18n("march"),$.i18n("april"),$.i18n("may"),$.i18n("june"),$.i18n("july"),$.i18n("august"),$.i18n("september"),$.i18n("october"),$.i18n("november"),$.i18n("december")]},startDate:moment().subtract(this.config.daysAgo,"days"),minDate:this.config.minDate,maxDate:this.config.maxDate,ranges:i};this.config.dateLimit&&(n.dateLimit={days:this.config.dateLimit}),t.daterangepicker(n),$(".daterangepicker").append($("<div>").addClass("daterange-notice").html($.i18n("date-notice",document.title,"<a href='http://stats.grok.se' target='_blank'>stats.grok.se</a>",$.i18n("july")+" 2015"))),$(".daterangepicker .ranges li").on("click",function(t){var i=$(".daterangepicker .ranges li").index(t.target),n=e.daterangepicker.container,o=n.find(".daterangepicker_input input");e.specialRange={range:Object.keys(e.config.specialRanges)[i],value:o[0].value+" - "+o[1].value}}),$(this.config.dateRangeSelector).on("apply.daterangepicker",function(t,i){i.chosenLabel===$.i18n("custom-range")&&(e.specialRange=null,e.daterangepicker.updateElement())})}},{key:"showFatalErrors",value:function(e){var t=this;this.resetView(),e.forEach(function(e){t.writeMessage("<strong>"+$.i18n("fatal-error")+"</strong>: <code>"+e+"</code>")});var i=function(e){return t.toastError("\n      <strong>"+$.i18n("fatal-error")+"</strong>: "+$.i18n("error-please-report",t.getBugReportURL(e))+"\n    ",0)};if(this.debug)throw e[0];e&&e[0]&&e[0].stack&&$.ajax({method:"POST",url:"//tools.wmflabs.org/musikanimal/paste",data:{content:"\ndate:      "+moment().utc().format()+("\ntool:      "+this.app)+("\nlanguage:  "+i18nLang)+("\nchart:     "+this.chartType)+("\nurl:       "+document.location.href)+("\nuserAgent: "+this.getUserAgent())+("\ntrace:     "+e[0].stack),title:"Pageviews Analysis error report: "+e[0]}}).done(function(e){e&&e.result&&e.result.objectName?i(e.result.objectName):i()}).fail(function(){i()})}},{key:"splash",value:function(){var e="background: #eee; color: #555; padding: 4px; font-family:monospace";console.log("%c      ___            __ _                     _                             ",e),console.log("%c     | _ \\  __ _    / _` |   ___    __ __    (_)     ___   __ __ __  ___    ",e),console.log("%c     |  _/ / _` |   \\__, |  / -_)   \\ V /    | |    / -_)  \\ V  V / (_-<    ",e),console.log("%c    _|_|_  \\__,_|   |___/   \\___|   _\\_/_   _|_|_   \\___|   \\_/\\_/  /__/_   ",e),console.log('%c  _| """ |_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|  ',e),console.log("%c  \"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'  ",e),console.log("%c              ___                     _  _     _               _            ",e),console.log("%c      o O O  /   \\   _ _     __ _    | || |   | |     ___     (_)     ___   ",e),console.log("%c     o       | - |  | ' \\   / _` |    \\_, |   | |    (_-<     | |    (_-<   ",e),console.log("%c    TS__[O]  |_|_|  |_||_|  \\__,_|   _|__/   _|_|_   /__/_   _|_|_   /__/_  ",e),console.log('%c   {======|_|"""""|_|"""""|_|"""""|_| """"|_|"""""|_|"""""|_|"""""|_|"""""| ',e),console.log("%c  ./o--000'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-'\"`-0-0-' ",e),console.log("%c                                                                            ",e),console.log("%c  Copyright © "+(new Date).getFullYear()+" MusikAnimal, Kaldari, Marcel Ruiz Forns                  ",e)}},{key:"startSpinny",value:function(){var e=this;$("body").addClass("loading"),document.activeElement.blur(),clearTimeout(this.timeout),this.timeout=setTimeout(function(t){e.resetView(),e.toastError("\n        <strong>"+$.i18n("fatal-error")+"</strong>:\n        "+$.i18n("error-timed-out")+"\n        "+$.i18n("error-please-report",e.getBugReportURL())+"\n      ")},3e4)}},{key:"stopSpinny",value:function(){$("body").removeClass("loading initial"),clearTimeout(this.timeout)}},{key:"underscorePageNames",value:function(e){return e.map(function(e){return decodeURIComponent(e).score()})}},{key:"updateInterAppLinks",value:function(){var e=this;$(".interapp-link").each(function(t,i){var n=i.href.split("?")[0];i.classList.contains("interapp-link--siteviews")?i.href=n+"?sites="+e.project.escape()+".org":i.href=n+"?project="+e.project.escape()+".org"})}},{key:"validateParams",value:function(e){var t=this;return this.config.validateParams.forEach(function(i){"project"===i&&e.project&&(e.project=e.project.replace(/^www\./,""));var n=t.config.defaults[i],o=e[i];n&&!t.config.validParams[i].includes(o)&&(o&&t.addInvalidParamNotice(i),e[i]=n)}),e}},{key:"validateProject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=$(this.config.projectInput)[0],i=t.value.replace(/^www\./,""),n=!1;return e&&!this.isMultilangProject()?(this.toastWarn($.i18n("invalid-lang-project","<a href='//"+i.escape()+"'>"+i.escape()+"</a>")),i=t.dataset.value):h.includes(i)?(this.updateInterAppLinks(),n=!0):(this.toastWarn($.i18n("invalid-project","<a href='//"+i.escape()+"'>"+i.escape()+"</a>")),i=t.dataset.value),t.value=i,n}},{key:"writeMessage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t&&this.clearMessages(),$(".message-container").append("<div class='error-message'>"+e+"</div>")}},{key:"dateFormat",get:function(){return"true"===this.localizeDateFormat?this.getLocaleDateString():this.config.defaults.dateFormat}},{key:"daterangepicker",get:function(){return $(this.config.dateRangeSelector).data("daterangepicker")}},{key:"project",get:function(){var e=$(this.config.projectInput).val();return e?e.toLowerCase().replace(/.org$/,""):null}}],[{key:"multilangProjects",get:function(){return["wikipedia","wikibooks","wikinews","wikiquote","wikisource","wikiversity","wikivoyage"]}}]),t}(c);t.exports=p},{"./core_extensions":1,"./polyfills":2,"./pv_config":4,"./site_map":5}],4:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=e("./site_map"),a=Object.keys(r).map(function(e){return r[e]}),s=function(){function e(){var t=this;n(this,e);var i=this,o=function(e){var i=moment(e,t.dateFormat).weekday();return i%7?e:"• "+e};this.config={apiLimit:2e4,apiThrottle:10,apps:["pageviews","topviews","langviews","siteviews","massviews","redirectviews"],chartConfig:{line:{opts:{scales:{yAxes:[{ticks:{callback:function(e){return t.formatYAxisNumber(e)}}}],xAxes:[{ticks:{callback:function(e){return o(e)}}}]},legendCallback:function(e){return t.config.chartLegend(i)},tooltips:this.linearTooltips()},dataset:function(e){return{color:e,backgroundColor:"rgba(0,0,0,0)",borderWidth:2,borderColor:e,pointColor:e,pointBackgroundColor:e,pointBorderColor:i.rgba(e,.2),pointHoverBackgroundColor:e,pointHoverBorderColor:e,pointHoverBorderWidth:2,pointHoverRadius:5,tension:"true"===i.bezierCurve?.4:0}}},bar:{opts:{scales:{yAxes:[{ticks:{callback:function(e){return t.formatYAxisNumber(e)}}}],xAxes:[{barPercentage:1,categoryPercentage:.85,ticks:{callback:function(e){return o(e)}}}]},legendCallback:function(e){return t.config.chartLegend(i)},tooltips:this.linearTooltips("label")},dataset:function(e){return{color:e,backgroundColor:i.rgba(e,.6),borderColor:i.rgba(e,.9),borderWidth:2,hoverBackgroundColor:i.rgba(e,.75),hoverBorderColor:e}}},radar:{opts:{scale:{ticks:{callback:function(e){return t.formatNumber(e)}}},legendCallback:function(e){return t.config.chartLegend(i)},tooltips:this.linearTooltips()},dataset:function(e){return{color:e,backgroundColor:i.rgba(e,.1),borderColor:e,borderWidth:2,pointBackgroundColor:e,pointBorderColor:i.rgba(e,.8),pointHoverBackgroundColor:e,pointHoverBorderColor:e,pointHoverRadius:5}}},pie:{opts:{legendCallback:function(e){return t.config.chartLegend(i)},tooltips:this.circularTooltips},dataset:function(e){return{color:e,backgroundColor:e,hoverBackgroundColor:i.rgba(e,.8)}}},doughnut:{opts:{legendCallback:function(e){return t.config.chartLegend(i)},tooltips:this.circularTooltips},dataset:function(e){return{color:e,backgroundColor:e,hoverBackgroundColor:i.rgba(e,.8)}}},polarArea:{opts:{scale:{ticks:{beginAtZero:!0,callback:function(e){return t.formatNumber(e)}}},legendCallback:function(e){return t.config.chartLegend(i)},tooltips:this.circularTooltips},dataset:function(e){return{color:e,backgroundColor:i.rgba(e,.7),hoverBackgroundColor:i.rgba(e,.9)}}}},circularCharts:["pie","doughnut","polarArea"],colors:["rgba(171, 212, 235, 1)","rgba(178, 223, 138, 1)","rgba(251, 154, 153, 1)","rgba(253, 191, 111, 1)","rgba(202, 178, 214, 1)","rgba(207, 182, 128, 1)","rgba(141, 211, 199, 1)","rgba(252, 205, 229, 1)","rgba(255, 247, 161, 1)","rgba(217, 217, 217, 1)"],defaults:{autocomplete:"autocomplete",chartType:function(e){return e>1?"line":"bar"},dateFormat:"YYYY-MM-DD",localizeDateFormat:"true",numericalFormatting:"true",bezierCurve:"false",autoLogDetection:"false",beginAtZero:"false",rememberChart:"false",agent:"user",platform:"all-access",project:"en.wikipedia.org"},globalChartOpts:{animation:{duration:500,easing:"easeInOutQuart"},hover:{animationDuration:0},legend:{display:!1}},linearCharts:["line","bar","radar"],linearOpts:{scales:{yAxes:[{ticks:{callback:function(e){return t.formatNumber(e)}}}]},legendCallback:function(e){return t.config.chartLegend(e.data.datasets,i)}},daysAgo:20,minDate:moment("2015-07-01").startOf("day"),maxDate:moment().subtract(1,"days").startOf("day"),specialRanges:{"last-week":[moment().subtract(1,"week").startOf("week"),moment().subtract(1,"week").endOf("week")],"this-month":[moment().startOf("month"),moment().subtract(1,"days").startOf("day")],"last-month":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")],"this-year":[moment().startOf("year"),moment().subtract(1,"days").startOf("day")],"last-year":[moment().subtract(1,"year").startOf("year"),moment().subtract(1,"year").endOf("year")],"all-time":[moment("2015-07-01").startOf("day"),moment().subtract(1,"days").startOf("day")],latest:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.config.daysAgo;return[moment().subtract(e,"days").startOf("day"),i.config.maxDate]}},timestampFormat:"YYYYMMDD00",validParams:{agent:["all-agents","user","spider","bot"],platform:["all-access","desktop","mobile-app","mobile-web"],project:a}}}return o(e,[{key:"linearTooltips",value:function(e){var t=this;return{mode:e||"x-axis",callbacks:{label:function(e){return Number.isNaN(e.yLabel)?" "+$.i18n("unknown"):" "+t.formatNumber(e.yLabel)}},bodyFontSize:14,bodySpacing:7,caretSize:0,titleFontSize:14}}},{key:"circularTooltips",get:function(){var e=this;return{callbacks:{label:function t(i,n){var o=n.datasets[i.datasetIndex].data[i.index],t=n.labels[i.index];return Number.isNaN(o)?t+": "+$.i18n("unknown"):t+": "+e.formatNumber(o)}},bodyFontSize:14,bodySpacing:7,caretSize:0,titleFontSize:14}}}]),e}();t.exports=s},{"./site_map":5}],5:[function(e,t,i){"use strict";var n={aawiki:"aa.wikipedia.org",aawiktionary:"aa.wiktionary.org",aawikibooks:"aa.wikibooks.org",abwiki:"ab.wikipedia.org",abwiktionary:"ab.wiktionary.org",acewiki:"ace.wikipedia.org",adywiki:"ady.wikipedia.org",afwiki:"af.wikipedia.org",afwiktionary:"af.wiktionary.org",afwikibooks:"af.wikibooks.org",afwikiquote:"af.wikiquote.org",akwiki:"ak.wikipedia.org",akwiktionary:"ak.wiktionary.org",akwikibooks:"ak.wikibooks.org",alswiki:"als.wikipedia.org",alswiktionary:"als.wiktionary.org",alswikibooks:"als.wikibooks.org",alswikiquote:"als.wikiquote.org",amwiki:"am.wikipedia.org",amwiktionary:"am.wiktionary.org",amwikiquote:"am.wikiquote.org",anwiki:"an.wikipedia.org",anwiktionary:"an.wiktionary.org",angwiki:"ang.wikipedia.org",angwiktionary:"ang.wiktionary.org",angwikibooks:"ang.wikibooks.org",angwikiquote:"ang.wikiquote.org",angwikisource:"ang.wikisource.org",arwiki:"ar.wikipedia.org",arwiktionary:"ar.wiktionary.org",arwikibooks:"ar.wikibooks.org",arwikinews:"ar.wikinews.org",arwikiquote:"ar.wikiquote.org",arwikisource:"ar.wikisource.org",arwikiversity:"ar.wikiversity.org",arcwiki:"arc.wikipedia.org",arzwiki:"arz.wikipedia.org",aswiki:"as.wikipedia.org",aswiktionary:"as.wiktionary.org",aswikibooks:"as.wikibooks.org",aswikisource:"as.wikisource.org",astwiki:"ast.wikipedia.org",astwiktionary:"ast.wiktionary.org",astwikibooks:"ast.wikibooks.org",astwikiquote:"ast.wikiquote.org",avwiki:"av.wikipedia.org",avwiktionary:"av.wiktionary.org",aywiki:"ay.wikipedia.org",aywiktionary:"ay.wiktionary.org",aywikibooks:"ay.wikibooks.org",azwiki:"az.wikipedia.org",azwiktionary:"az.wiktionary.org",azwikibooks:"az.wikibooks.org",azwikiquote:"az.wikiquote.org",azwikisource:"az.wikisource.org",azbwiki:"azb.wikipedia.org",bawiki:"ba.wikipedia.org",bawikibooks:"ba.wikibooks.org",barwiki:"bar.wikipedia.org",bat_smgwiki:"bat-smg.wikipedia.org",bclwiki:"bcl.wikipedia.org",bewiki:"be.wikipedia.org",bewiktionary:"be.wiktionary.org",bewikibooks:"be.wikibooks.org",bewikiquote:"be.wikiquote.org",bewikisource:"be.wikisource.org",be_x_oldwiki:"be-tarask.wikipedia.org",bgwiki:"bg.wikipedia.org",bgwiktionary:"bg.wiktionary.org",bgwikibooks:"bg.wikibooks.org",bgwikinews:"bg.wikinews.org",bgwikiquote:"bg.wikiquote.org",bgwikisource:"bg.wikisource.org",bhwiki:"bh.wikipedia.org",bhwiktionary:"bh.wiktionary.org",biwiki:"bi.wikipedia.org",biwiktionary:"bi.wiktionary.org",biwikibooks:"bi.wikibooks.org",bjnwiki:"bjn.wikipedia.org",bmwiki:"bm.wikipedia.org",bmwiktionary:"bm.wiktionary.org",bmwikibooks:"bm.wikibooks.org",bmwikiquote:"bm.wikiquote.org",bnwiki:"bn.wikipedia.org",bnwiktionary:"bn.wiktionary.org",bnwikibooks:"bn.wikibooks.org",bnwikisource:"bn.wikisource.org",bowiki:"bo.wikipedia.org",bowiktionary:"bo.wiktionary.org",bowikibooks:"bo.wikibooks.org",bpywiki:"bpy.wikipedia.org",brwiki:"br.wikipedia.org",brwiktionary:"br.wiktionary.org",brwikiquote:"br.wikiquote.org",brwikisource:"br.wikisource.org",bswiki:"bs.wikipedia.org",bswiktionary:"bs.wiktionary.org",bswikibooks:"bs.wikibooks.org",bswikinews:"bs.wikinews.org",bswikiquote:"bs.wikiquote.org",bswikisource:"bs.wikisource.org",bugwiki:"bug.wikipedia.org",bxrwiki:"bxr.wikipedia.org",cawiki:"ca.wikipedia.org",cawiktionary:"ca.wiktionary.org",cawikibooks:"ca.wikibooks.org",cawikinews:"ca.wikinews.org",cawikiquote:"ca.wikiquote.org",cawikisource:"ca.wikisource.org",cbk_zamwiki:"cbk-zam.wikipedia.org",cdowiki:"cdo.wikipedia.org",cewiki:"ce.wikipedia.org",cebwiki:"ceb.wikipedia.org",chwiki:"ch.wikipedia.org",chwiktionary:"ch.wiktionary.org",chwikibooks:"ch.wikibooks.org",chowiki:"cho.wikipedia.org",chrwiki:"chr.wikipedia.org",chrwiktionary:"chr.wiktionary.org",chywiki:"chy.wikipedia.org",ckbwiki:"ckb.wikipedia.org",cowiki:"co.wikipedia.org",cowiktionary:"co.wiktionary.org",cowikibooks:"co.wikibooks.org",cowikiquote:"co.wikiquote.org",crwiki:"cr.wikipedia.org",crwiktionary:"cr.wiktionary.org",crwikiquote:"cr.wikiquote.org",crhwiki:"crh.wikipedia.org",cswiki:"cs.wikipedia.org",cswiktionary:"cs.wiktionary.org",cswikibooks:"cs.wikibooks.org",cswikinews:"cs.wikinews.org",cswikiquote:"cs.wikiquote.org",cswikisource:"cs.wikisource.org",cswikiversity:"cs.wikiversity.org",csbwiki:"csb.wikipedia.org",csbwiktionary:"csb.wiktionary.org",cuwiki:"cu.wikipedia.org",cvwiki:"cv.wikipedia.org",cvwikibooks:"cv.wikibooks.org",cywiki:"cy.wikipedia.org",cywiktionary:"cy.wiktionary.org",cywikibooks:"cy.wikibooks.org",cywikiquote:"cy.wikiquote.org",cywikisource:"cy.wikisource.org",dawiki:"da.wikipedia.org",dawiktionary:"da.wiktionary.org",dawikibooks:"da.wikibooks.org",dawikiquote:"da.wikiquote.org",dawikisource:"da.wikisource.org",dewiki:"de.wikipedia.org",dewiktionary:"de.wiktionary.org",dewikibooks:"de.wikibooks.org",dewikinews:"de.wikinews.org",dewikiquote:"de.wikiquote.org",dewikisource:"de.wikisource.org",dewikiversity:"de.wikiversity.org",dewikivoyage:"de.wikivoyage.org",diqwiki:"diq.wikipedia.org",dsbwiki:"dsb.wikipedia.org",dvwiki:"dv.wikipedia.org",dvwiktionary:"dv.wiktionary.org",dzwiki:"dz.wikipedia.org",dzwiktionary:"dz.wiktionary.org",eewiki:"ee.wikipedia.org",elwiki:"el.wikipedia.org",elwiktionary:"el.wiktionary.org",elwikibooks:"el.wikibooks.org",elwikinews:"el.wikinews.org",elwikiquote:"el.wikiquote.org",elwikisource:"el.wikisource.org",elwikiversity:"el.wikiversity.org",elwikivoyage:"el.wikivoyage.org",emlwiki:"eml.wikipedia.org",enwiki:"en.wikipedia.org",enwiktionary:"en.wiktionary.org",enwikibooks:"en.wikibooks.org",enwikinews:"en.wikinews.org",enwikiquote:"en.wikiquote.org",enwikisource:"en.wikisource.org",enwikiversity:"en.wikiversity.org",enwikivoyage:"en.wikivoyage.org",eowiki:"eo.wikipedia.org",eowiktionary:"eo.wiktionary.org",eowikibooks:"eo.wikibooks.org",eowikinews:"eo.wikinews.org",eowikiquote:"eo.wikiquote.org",eowikisource:"eo.wikisource.org",eswiki:"es.wikipedia.org",eswiktionary:"es.wiktionary.org",eswikibooks:"es.wikibooks.org",eswikinews:"es.wikinews.org",eswikiquote:"es.wikiquote.org",eswikisource:"es.wikisource.org",eswikiversity:"es.wikiversity.org",eswikivoyage:"es.wikivoyage.org",etwiki:"et.wikipedia.org",etwiktionary:"et.wiktionary.org",etwikibooks:"et.wikibooks.org",etwikiquote:"et.wikiquote.org",etwikisource:"et.wikisource.org",euwiki:"eu.wikipedia.org",euwiktionary:"eu.wiktionary.org",euwikibooks:"eu.wikibooks.org",euwikiquote:"eu.wikiquote.org",extwiki:"ext.wikipedia.org",fawiki:"fa.wikipedia.org",fawiktionary:"fa.wiktionary.org",fawikibooks:"fa.wikibooks.org",fawikinews:"fa.wikinews.org",fawikiquote:"fa.wikiquote.org",fawikisource:"fa.wikisource.org",fawikivoyage:"fa.wikivoyage.org",ffwiki:"ff.wikipedia.org",fiwiki:"fi.wikipedia.org",fiwiktionary:"fi.wiktionary.org",fiwikibooks:"fi.wikibooks.org",fiwikinews:"fi.wikinews.org",fiwikiquote:"fi.wikiquote.org",fiwikisource:"fi.wikisource.org",fiwikiversity:"fi.wikiversity.org",fiu_vrowiki:"fiu-vro.wikipedia.org",fjwiki:"fj.wikipedia.org",fjwiktionary:"fj.wiktionary.org",fowiki:"fo.wikipedia.org",fowiktionary:"fo.wiktionary.org",fowikisource:"fo.wikisource.org",frwiki:"fr.wikipedia.org",frwiktionary:"fr.wiktionary.org",frwikibooks:"fr.wikibooks.org",frwikinews:"fr.wikinews.org",frwikiquote:"fr.wikiquote.org",frwikisource:"fr.wikisource.org",frwikiversity:"fr.wikiversity.org",frwikivoyage:"fr.wikivoyage.org",frpwiki:"frp.wikipedia.org",frrwiki:"frr.wikipedia.org",furwiki:"fur.wikipedia.org",fywiki:"fy.wikipedia.org",fywiktionary:"fy.wiktionary.org",fywikibooks:"fy.wikibooks.org",gawiki:"ga.wikipedia.org",gawiktionary:"ga.wiktionary.org",gawikibooks:"ga.wikibooks.org",gawikiquote:"ga.wikiquote.org",gagwiki:"gag.wikipedia.org",ganwiki:"gan.wikipedia.org",gdwiki:"gd.wikipedia.org",gdwiktionary:"gd.wiktionary.org",glwiki:"gl.wikipedia.org",glwiktionary:"gl.wiktionary.org",glwikibooks:"gl.wikibooks.org",glwikiquote:"gl.wikiquote.org",glwikisource:"gl.wikisource.org",glkwiki:"glk.wikipedia.org",gnwiki:"gn.wikipedia.org",gnwiktionary:"gn.wiktionary.org",gnwikibooks:"gn.wikibooks.org",gomwiki:"gom.wikipedia.org",gotwiki:"got.wikipedia.org",gotwikibooks:"got.wikibooks.org",guwiki:"gu.wikipedia.org",guwiktionary:"gu.wiktionary.org",guwikibooks:"gu.wikibooks.org",guwikiquote:"gu.wikiquote.org",guwikisource:"gu.wikisource.org",gvwiki:"gv.wikipedia.org",gvwiktionary:"gv.wiktionary.org",hawiki:"ha.wikipedia.org",hawiktionary:"ha.wiktionary.org",hakwiki:"hak.wikipedia.org",hawwiki:"haw.wikipedia.org",hewiki:"he.wikipedia.org",hewiktionary:"he.wiktionary.org",hewikibooks:"he.wikibooks.org",hewikinews:"he.wikinews.org",hewikiquote:"he.wikiquote.org",hewikisource:"he.wikisource.org",hewikivoyage:"he.wikivoyage.org",hiwiki:"hi.wikipedia.org",hiwiktionary:"hi.wiktionary.org",hiwikibooks:"hi.wikibooks.org",hiwikiquote:"hi.wikiquote.org",hifwiki:"hif.wikipedia.org",howiki:"ho.wikipedia.org",hrwiki:"hr.wikipedia.org",hrwiktionary:"hr.wiktionary.org",hrwikibooks:"hr.wikibooks.org",hrwikiquote:"hr.wikiquote.org",hrwikisource:"hr.wikisource.org",hsbwiki:"hsb.wikipedia.org",hsbwiktionary:"hsb.wiktionary.org",htwiki:"ht.wikipedia.org",htwikisource:"ht.wikisource.org",huwiki:"hu.wikipedia.org",huwiktionary:"hu.wiktionary.org",huwikibooks:"hu.wikibooks.org",huwikinews:"hu.wikinews.org",huwikiquote:"hu.wikiquote.org",huwikisource:"hu.wikisource.org",hywiki:"hy.wikipedia.org",hywiktionary:"hy.wiktionary.org",hywikibooks:"hy.wikibooks.org",hywikiquote:"hy.wikiquote.org",hywikisource:"hy.wikisource.org",hzwiki:"hz.wikipedia.org",iawiki:"ia.wikipedia.org",iawiktionary:"ia.wiktionary.org",iawikibooks:"ia.wikibooks.org",idwiki:"id.wikipedia.org",idwiktionary:"id.wiktionary.org",idwikibooks:"id.wikibooks.org",idwikiquote:"id.wikiquote.org",idwikisource:"id.wikisource.org",iewiki:"ie.wikipedia.org",iewiktionary:"ie.wiktionary.org",iewikibooks:"ie.wikibooks.org",igwiki:"ig.wikipedia.org",iiwiki:"ii.wikipedia.org",ikwiki:"ik.wikipedia.org",ikwiktionary:"ik.wiktionary.org",ilowiki:"ilo.wikipedia.org",iowiki:"io.wikipedia.org",iowiktionary:"io.wiktionary.org",iswiki:"is.wikipedia.org",iswiktionary:"is.wiktionary.org",iswikibooks:"is.wikibooks.org",iswikiquote:"is.wikiquote.org",iswikisource:"is.wikisource.org",itwiki:"it.wikipedia.org",itwiktionary:"it.wiktionary.org",itwikibooks:"it.wikibooks.org",itwikinews:"it.wikinews.org",itwikiquote:"it.wikiquote.org",itwikisource:"it.wikisource.org",itwikiversity:"it.wikiversity.org",itwikivoyage:"it.wikivoyage.org",iuwiki:"iu.wikipedia.org",iuwiktionary:"iu.wiktionary.org",jawiki:"ja.wikipedia.org",jawiktionary:"ja.wiktionary.org",jawikibooks:"ja.wikibooks.org",jawikinews:"ja.wikinews.org",jawikiquote:"ja.wikiquote.org",jawikisource:"ja.wikisource.org",jawikiversity:"ja.wikiversity.org",jbowiki:"jbo.wikipedia.org",jbowiktionary:"jbo.wiktionary.org",jvwiki:"jv.wikipedia.org",jvwiktionary:"jv.wiktionary.org",kawiki:"ka.wikipedia.org",kawiktionary:"ka.wiktionary.org",kawikibooks:"ka.wikibooks.org",kawikiquote:"ka.wikiquote.org",kaawiki:"kaa.wikipedia.org",kabwiki:"kab.wikipedia.org",kbdwiki:"kbd.wikipedia.org",kgwiki:"kg.wikipedia.org",kiwiki:"ki.wikipedia.org",kjwiki:"kj.wikipedia.org",kkwiki:"kk.wikipedia.org",kkwiktionary:"kk.wiktionary.org",kkwikibooks:"kk.wikibooks.org",kkwikiquote:"kk.wikiquote.org",klwiki:"kl.wikipedia.org",klwiktionary:"kl.wiktionary.org",kmwiki:"km.wikipedia.org",kmwiktionary:"km.wiktionary.org",kmwikibooks:"km.wikibooks.org",knwiki:"kn.wikipedia.org",knwiktionary:"kn.wiktionary.org",knwikibooks:"kn.wikibooks.org",knwikiquote:"kn.wikiquote.org",knwikisource:"kn.wikisource.org",kowiki:"ko.wikipedia.org",kowiktionary:"ko.wiktionary.org",kowikibooks:"ko.wikibooks.org",kowikinews:"ko.wikinews.org",kowikiquote:"ko.wikiquote.org",kowikisource:"ko.wikisource.org",kowikiversity:"ko.wikiversity.org",koiwiki:"koi.wikipedia.org",krwiki:"kr.wikipedia.org",krwikiquote:"kr.wikiquote.org",krcwiki:"krc.wikipedia.org",kswiki:"ks.wikipedia.org",kswiktionary:"ks.wiktionary.org",kswikibooks:"ks.wikibooks.org",kswikiquote:"ks.wikiquote.org",kshwiki:"ksh.wikipedia.org",kuwiki:"ku.wikipedia.org",kuwiktionary:"ku.wiktionary.org",kuwikibooks:"ku.wikibooks.org",kuwikiquote:"ku.wikiquote.org",kvwiki:"kv.wikipedia.org",kwwiki:"kw.wikipedia.org",kwwiktionary:"kw.wiktionary.org",kwwikiquote:"kw.wikiquote.org",kywiki:"ky.wikipedia.org",kywiktionary:"ky.wiktionary.org",kywikibooks:"ky.wikibooks.org",
kywikiquote:"ky.wikiquote.org",lawiki:"la.wikipedia.org",lawiktionary:"la.wiktionary.org",lawikibooks:"la.wikibooks.org",lawikiquote:"la.wikiquote.org",lawikisource:"la.wikisource.org",ladwiki:"lad.wikipedia.org",lbwiki:"lb.wikipedia.org",lbwiktionary:"lb.wiktionary.org",lbwikibooks:"lb.wikibooks.org",lbwikiquote:"lb.wikiquote.org",lbewiki:"lbe.wikipedia.org",lezwiki:"lez.wikipedia.org",lgwiki:"lg.wikipedia.org",liwiki:"li.wikipedia.org",liwiktionary:"li.wiktionary.org",liwikibooks:"li.wikibooks.org",liwikiquote:"li.wikiquote.org",liwikisource:"li.wikisource.org",lijwiki:"lij.wikipedia.org",lmowiki:"lmo.wikipedia.org",lnwiki:"ln.wikipedia.org",lnwiktionary:"ln.wiktionary.org",lnwikibooks:"ln.wikibooks.org",lowiki:"lo.wikipedia.org",lowiktionary:"lo.wiktionary.org",lrcwiki:"lrc.wikipedia.org",ltwiki:"lt.wikipedia.org",ltwiktionary:"lt.wiktionary.org",ltwikibooks:"lt.wikibooks.org",ltwikiquote:"lt.wikiquote.org",ltwikisource:"lt.wikisource.org",ltgwiki:"ltg.wikipedia.org",lvwiki:"lv.wikipedia.org",lvwiktionary:"lv.wiktionary.org",lvwikibooks:"lv.wikibooks.org",maiwiki:"mai.wikipedia.org",map_bmswiki:"map-bms.wikipedia.org",mdfwiki:"mdf.wikipedia.org",mgwiki:"mg.wikipedia.org",mgwiktionary:"mg.wiktionary.org",mgwikibooks:"mg.wikibooks.org",mhwiki:"mh.wikipedia.org",mhwiktionary:"mh.wiktionary.org",mhrwiki:"mhr.wikipedia.org",miwiki:"mi.wikipedia.org",miwiktionary:"mi.wiktionary.org",miwikibooks:"mi.wikibooks.org",minwiki:"min.wikipedia.org",mkwiki:"mk.wikipedia.org",mkwiktionary:"mk.wiktionary.org",mkwikibooks:"mk.wikibooks.org",mkwikisource:"mk.wikisource.org",mlwiki:"ml.wikipedia.org",mlwiktionary:"ml.wiktionary.org",mlwikibooks:"ml.wikibooks.org",mlwikiquote:"ml.wikiquote.org",mlwikisource:"ml.wikisource.org",mnwiki:"mn.wikipedia.org",mnwiktionary:"mn.wiktionary.org",mnwikibooks:"mn.wikibooks.org",mowiki:"mo.wikipedia.org",mowiktionary:"mo.wiktionary.org",mrwiki:"mr.wikipedia.org",mrwiktionary:"mr.wiktionary.org",mrwikibooks:"mr.wikibooks.org",mrwikiquote:"mr.wikiquote.org",mrwikisource:"mr.wikisource.org",mrjwiki:"mrj.wikipedia.org",mswiki:"ms.wikipedia.org",mswiktionary:"ms.wiktionary.org",mswikibooks:"ms.wikibooks.org",mtwiki:"mt.wikipedia.org",mtwiktionary:"mt.wiktionary.org",muswiki:"mus.wikipedia.org",mwlwiki:"mwl.wikipedia.org",mywiki:"my.wikipedia.org",mywiktionary:"my.wiktionary.org",mywikibooks:"my.wikibooks.org",myvwiki:"myv.wikipedia.org",mznwiki:"mzn.wikipedia.org",nawiki:"na.wikipedia.org",nawiktionary:"na.wiktionary.org",nawikibooks:"na.wikibooks.org",nawikiquote:"na.wikiquote.org",nahwiki:"nah.wikipedia.org",nahwiktionary:"nah.wiktionary.org",nahwikibooks:"nah.wikibooks.org",napwiki:"nap.wikipedia.org",ndswiki:"nds.wikipedia.org",ndswiktionary:"nds.wiktionary.org",ndswikibooks:"nds.wikibooks.org",ndswikiquote:"nds.wikiquote.org",nds_nlwiki:"nds-nl.wikipedia.org",newiki:"ne.wikipedia.org",newiktionary:"ne.wiktionary.org",newikibooks:"ne.wikibooks.org",newwiki:"new.wikipedia.org",ngwiki:"ng.wikipedia.org",nlwiki:"nl.wikipedia.org",nlwiktionary:"nl.wiktionary.org",nlwikibooks:"nl.wikibooks.org",nlwikinews:"nl.wikinews.org",nlwikiquote:"nl.wikiquote.org",nlwikisource:"nl.wikisource.org",nlwikivoyage:"nl.wikivoyage.org",nnwiki:"nn.wikipedia.org",nnwiktionary:"nn.wiktionary.org",nnwikiquote:"nn.wikiquote.org",nowiki:"no.wikipedia.org",nowiktionary:"no.wiktionary.org",nowikibooks:"no.wikibooks.org",nowikinews:"no.wikinews.org",nowikiquote:"no.wikiquote.org",nowikisource:"no.wikisource.org",novwiki:"nov.wikipedia.org",nrmwiki:"nrm.wikipedia.org",nsowiki:"nso.wikipedia.org",nvwiki:"nv.wikipedia.org",nywiki:"ny.wikipedia.org",ocwiki:"oc.wikipedia.org",ocwiktionary:"oc.wiktionary.org",ocwikibooks:"oc.wikibooks.org",omwiki:"om.wikipedia.org",omwiktionary:"om.wiktionary.org",orwiki:"or.wikipedia.org",orwiktionary:"or.wiktionary.org",orwikisource:"or.wikisource.org",oswiki:"os.wikipedia.org",pawiki:"pa.wikipedia.org",pawiktionary:"pa.wiktionary.org",pawikibooks:"pa.wikibooks.org",pagwiki:"pag.wikipedia.org",pamwiki:"pam.wikipedia.org",papwiki:"pap.wikipedia.org",pcdwiki:"pcd.wikipedia.org",pdcwiki:"pdc.wikipedia.org",pflwiki:"pfl.wikipedia.org",piwiki:"pi.wikipedia.org",piwiktionary:"pi.wiktionary.org",pihwiki:"pih.wikipedia.org",plwiki:"pl.wikipedia.org",plwiktionary:"pl.wiktionary.org",plwikibooks:"pl.wikibooks.org",plwikinews:"pl.wikinews.org",plwikiquote:"pl.wikiquote.org",plwikisource:"pl.wikisource.org",plwikivoyage:"pl.wikivoyage.org",pmswiki:"pms.wikipedia.org",pnbwiki:"pnb.wikipedia.org",pnbwiktionary:"pnb.wiktionary.org",pntwiki:"pnt.wikipedia.org",pswiki:"ps.wikipedia.org",pswiktionary:"ps.wiktionary.org",pswikibooks:"ps.wikibooks.org",ptwiki:"pt.wikipedia.org",ptwiktionary:"pt.wiktionary.org",ptwikibooks:"pt.wikibooks.org",ptwikinews:"pt.wikinews.org",ptwikiquote:"pt.wikiquote.org",ptwikisource:"pt.wikisource.org",ptwikiversity:"pt.wikiversity.org",ptwikivoyage:"pt.wikivoyage.org",quwiki:"qu.wikipedia.org",quwiktionary:"qu.wiktionary.org",quwikibooks:"qu.wikibooks.org",quwikiquote:"qu.wikiquote.org",rmwiki:"rm.wikipedia.org",rmwiktionary:"rm.wiktionary.org",rmwikibooks:"rm.wikibooks.org",rmywiki:"rmy.wikipedia.org",rnwiki:"rn.wikipedia.org",rnwiktionary:"rn.wiktionary.org",rowiki:"ro.wikipedia.org",rowiktionary:"ro.wiktionary.org",rowikibooks:"ro.wikibooks.org",rowikinews:"ro.wikinews.org",rowikiquote:"ro.wikiquote.org",rowikisource:"ro.wikisource.org",rowikivoyage:"ro.wikivoyage.org",roa_rupwiki:"roa-rup.wikipedia.org",roa_rupwiktionary:"roa-rup.wiktionary.org",roa_tarawiki:"roa-tara.wikipedia.org",ruwiki:"ru.wikipedia.org",ruwiktionary:"ru.wiktionary.org",ruwikibooks:"ru.wikibooks.org",ruwikinews:"ru.wikinews.org",ruwikiquote:"ru.wikiquote.org",ruwikisource:"ru.wikisource.org",ruwikiversity:"ru.wikiversity.org",ruwikivoyage:"ru.wikivoyage.org",ruewiki:"rue.wikipedia.org",rwwiki:"rw.wikipedia.org",rwwiktionary:"rw.wiktionary.org",sawiki:"sa.wikipedia.org",sawiktionary:"sa.wiktionary.org",sawikibooks:"sa.wikibooks.org",sawikiquote:"sa.wikiquote.org",sawikisource:"sa.wikisource.org",sahwiki:"sah.wikipedia.org",sahwikisource:"sah.wikisource.org",scwiki:"sc.wikipedia.org",scwiktionary:"sc.wiktionary.org",scnwiki:"scn.wikipedia.org",scnwiktionary:"scn.wiktionary.org",scowiki:"sco.wikipedia.org",sdwiki:"sd.wikipedia.org",sdwiktionary:"sd.wiktionary.org",sdwikinews:"sd.wikinews.org",sewiki:"se.wikipedia.org",sewikibooks:"se.wikibooks.org",sgwiki:"sg.wikipedia.org",sgwiktionary:"sg.wiktionary.org",shwiki:"sh.wikipedia.org",shwiktionary:"sh.wiktionary.org",siwiki:"si.wikipedia.org",siwiktionary:"si.wiktionary.org",siwikibooks:"si.wikibooks.org",simplewiki:"simple.wikipedia.org",simplewiktionary:"simple.wiktionary.org",simplewikibooks:"simple.wikibooks.org",simplewikiquote:"simple.wikiquote.org",skwiki:"sk.wikipedia.org",skwiktionary:"sk.wiktionary.org",skwikibooks:"sk.wikibooks.org",skwikiquote:"sk.wikiquote.org",skwikisource:"sk.wikisource.org",slwiki:"sl.wikipedia.org",slwiktionary:"sl.wiktionary.org",slwikibooks:"sl.wikibooks.org",slwikiquote:"sl.wikiquote.org",slwikisource:"sl.wikisource.org",slwikiversity:"sl.wikiversity.org",smwiki:"sm.wikipedia.org",smwiktionary:"sm.wiktionary.org",snwiki:"sn.wikipedia.org",snwiktionary:"sn.wiktionary.org",sowiki:"so.wikipedia.org",sowiktionary:"so.wiktionary.org",sqwiki:"sq.wikipedia.org",sqwiktionary:"sq.wiktionary.org",sqwikibooks:"sq.wikibooks.org",sqwikinews:"sq.wikinews.org",sqwikiquote:"sq.wikiquote.org",srwiki:"sr.wikipedia.org",srwiktionary:"sr.wiktionary.org",srwikibooks:"sr.wikibooks.org",srwikinews:"sr.wikinews.org",srwikiquote:"sr.wikiquote.org",srwikisource:"sr.wikisource.org",srnwiki:"srn.wikipedia.org",sswiki:"ss.wikipedia.org",sswiktionary:"ss.wiktionary.org",stwiki:"st.wikipedia.org",stwiktionary:"st.wiktionary.org",stqwiki:"stq.wikipedia.org",suwiki:"su.wikipedia.org",suwiktionary:"su.wiktionary.org",suwikibooks:"su.wikibooks.org",suwikiquote:"su.wikiquote.org",svwiki:"sv.wikipedia.org",svwiktionary:"sv.wiktionary.org",svwikibooks:"sv.wikibooks.org",svwikinews:"sv.wikinews.org",svwikiquote:"sv.wikiquote.org",svwikisource:"sv.wikisource.org",svwikiversity:"sv.wikiversity.org",svwikivoyage:"sv.wikivoyage.org",swwiki:"sw.wikipedia.org",swwiktionary:"sw.wiktionary.org",swwikibooks:"sw.wikibooks.org",szlwiki:"szl.wikipedia.org",tawiki:"ta.wikipedia.org",tawiktionary:"ta.wiktionary.org",tawikibooks:"ta.wikibooks.org",tawikinews:"ta.wikinews.org",tawikiquote:"ta.wikiquote.org",tawikisource:"ta.wikisource.org",tewiki:"te.wikipedia.org",tewiktionary:"te.wiktionary.org",tewikibooks:"te.wikibooks.org",tewikiquote:"te.wikiquote.org",tewikisource:"te.wikisource.org",tetwiki:"tet.wikipedia.org",tgwiki:"tg.wikipedia.org",tgwiktionary:"tg.wiktionary.org",tgwikibooks:"tg.wikibooks.org",thwiki:"th.wikipedia.org",thwiktionary:"th.wiktionary.org",thwikibooks:"th.wikibooks.org",thwikinews:"th.wikinews.org",thwikiquote:"th.wikiquote.org",thwikisource:"th.wikisource.org",tiwiki:"ti.wikipedia.org",tiwiktionary:"ti.wiktionary.org",tkwiki:"tk.wikipedia.org",tkwiktionary:"tk.wiktionary.org",tkwikibooks:"tk.wikibooks.org",tkwikiquote:"tk.wikiquote.org",tlwiki:"tl.wikipedia.org",tlwiktionary:"tl.wiktionary.org",tlwikibooks:"tl.wikibooks.org",tnwiki:"tn.wikipedia.org",tnwiktionary:"tn.wiktionary.org",towiki:"to.wikipedia.org",towiktionary:"to.wiktionary.org",tpiwiki:"tpi.wikipedia.org",tpiwiktionary:"tpi.wiktionary.org",trwiki:"tr.wikipedia.org",trwiktionary:"tr.wiktionary.org",trwikibooks:"tr.wikibooks.org",trwikinews:"tr.wikinews.org",trwikiquote:"tr.wikiquote.org",trwikisource:"tr.wikisource.org",tswiki:"ts.wikipedia.org",tswiktionary:"ts.wiktionary.org",ttwiki:"tt.wikipedia.org",ttwiktionary:"tt.wiktionary.org",ttwikibooks:"tt.wikibooks.org",ttwikiquote:"tt.wikiquote.org",tumwiki:"tum.wikipedia.org",twwiki:"tw.wikipedia.org",twwiktionary:"tw.wiktionary.org",tywiki:"ty.wikipedia.org",tyvwiki:"tyv.wikipedia.org",udmwiki:"udm.wikipedia.org",ugwiki:"ug.wikipedia.org",ugwiktionary:"ug.wiktionary.org",ugwikibooks:"ug.wikibooks.org",ugwikiquote:"ug.wikiquote.org",ukwiki:"uk.wikipedia.org",ukwiktionary:"uk.wiktionary.org",ukwikibooks:"uk.wikibooks.org",ukwikinews:"uk.wikinews.org",ukwikiquote:"uk.wikiquote.org",ukwikisource:"uk.wikisource.org",ukwikivoyage:"uk.wikivoyage.org",urwiki:"ur.wikipedia.org",urwiktionary:"ur.wiktionary.org",urwikibooks:"ur.wikibooks.org",urwikiquote:"ur.wikiquote.org",uzwiki:"uz.wikipedia.org",uzwiktionary:"uz.wiktionary.org",uzwikibooks:"uz.wikibooks.org",uzwikiquote:"uz.wikiquote.org",vewiki:"ve.wikipedia.org",vecwiki:"vec.wikipedia.org",vecwiktionary:"vec.wiktionary.org",vecwikisource:"vec.wikisource.org",vepwiki:"vep.wikipedia.org",viwiki:"vi.wikipedia.org",viwiktionary:"vi.wiktionary.org",viwikibooks:"vi.wikibooks.org",viwikiquote:"vi.wikiquote.org",viwikisource:"vi.wikisource.org",viwikivoyage:"vi.wikivoyage.org",vlswiki:"vls.wikipedia.org",vowiki:"vo.wikipedia.org",vowiktionary:"vo.wiktionary.org",vowikibooks:"vo.wikibooks.org",vowikiquote:"vo.wikiquote.org",wawiki:"wa.wikipedia.org",wawiktionary:"wa.wiktionary.org",wawikibooks:"wa.wikibooks.org",warwiki:"war.wikipedia.org",wowiki:"wo.wikipedia.org",wowiktionary:"wo.wiktionary.org",wowikiquote:"wo.wikiquote.org",wuuwiki:"wuu.wikipedia.org",xalwiki:"xal.wikipedia.org",xhwiki:"xh.wikipedia.org",xhwiktionary:"xh.wiktionary.org",xhwikibooks:"xh.wikibooks.org",xmfwiki:"xmf.wikipedia.org",yiwiki:"yi.wikipedia.org",yiwiktionary:"yi.wiktionary.org",yiwikisource:"yi.wikisource.org",yowiki:"yo.wikipedia.org",yowiktionary:"yo.wiktionary.org",yowikibooks:"yo.wikibooks.org",zawiki:"za.wikipedia.org",zawiktionary:"za.wiktionary.org",zawikibooks:"za.wikibooks.org",zawikiquote:"za.wikiquote.org",zeawiki:"zea.wikipedia.org",zhwiki:"zh.wikipedia.org",zhwiktionary:"zh.wiktionary.org",zhwikibooks:"zh.wikibooks.org",zhwikinews:"zh.wikinews.org",zhwikiquote:"zh.wikiquote.org",zhwikisource:"zh.wikisource.org",zhwikivoyage:"zh.wikivoyage.org",zh_classicalwiki:"zh-classical.wikipedia.org",zh_min_nanwiki:"zh-min-nan.wikipedia.org",zh_min_nanwiktionary:"zh-min-nan.wiktionary.org",zh_min_nanwikibooks:"zh-min-nan.wikibooks.org",zh_min_nanwikiquote:"zh-min-nan.wikiquote.org",zh_min_nanwikisource:"zh-min-nan.wikisource.org",zh_yuewiki:"zh-yue.wikipedia.org",zuwiki:"zu.wikipedia.org",zuwiktionary:"zu.wiktionary.org",zuwikibooks:"zu.wikibooks.org",arwikimedia:"ar.wikimedia.org",bdwikimedia:"bd.wikimedia.org",bewikimedia:"be.wikimedia.org",betawikiversity:"beta.wikiversity.org",brwikimedia:"br.wikimedia.org",cawikimedia:"ca.wikimedia.org",cnwikimedia:"cn.wikimedia.org",cowikimedia:"co.wikimedia.org",commonswiki:"commons.wikimedia.org",dkwikimedia:"dk.wikimedia.org",etwikimedia:"ee.wikimedia.org",fiwikimedia:"fi.wikimedia.org",foundationwiki:"wikimediafoundation.org",iegcomwiki:"iegcom.wikimedia.org",ilwikimedia:"il.wikimedia.org",incubatorwiki:"incubator.wikimedia.org",labswiki:"wikitech.wikimedia.org",loginwiki:"login.wikimedia.org",mediawikiwiki:"mediawiki.org",metawiki:"meta.wikimedia.org",mkwikimedia:"mk.wikimedia.org",mxwikimedia:"mx.wikimedia.org",nlwikimedia:"nl.wikimedia.org",nowikimedia:"no.wikimedia.org",nostalgiawiki:"nostalgia.wikipedia.org",nzwikimedia:"nz.wikimedia.org",outreachwiki:"outreach.wikimedia.org",pa_uswikimedia:"pa-us.wikimedia.org",plwikimedia:"pl.wikimedia.org",rswikimedia:"rs.wikimedia.org",ruwikimedia:"ru.wikimedia.org",sewikimedia:"se.wikimedia.org",sourceswiki:"wikisource.org",specieswiki:"species.wikimedia.org",trwikimedia:"tr.wikimedia.org",uawikimedia:"ua.wikimedia.org",ukwikimedia:"uk.wikimedia.org",wg_enwiki:"wg-en.wikipedia.org",wikidatawiki:"wikidata.org"};t.exports=n},{}],6:[function(e,t,i){"use strict";var n=(e("../shared/pv"),{select2Input:".aqs-select2-selector",dateRangeSelector:".aqs-date-range-selector",defaults:{dateRange:"last-month",excludes:[]},maxDate:moment(moment().utc().subtract(1,"day").startOf("day").toDate()).startOf("day").toDate(),maxMonth:moment().subtract(1,"month").subtract(2,"days").startOf("month").toDate(),pageSize:100,platformSelector:"#platform-select",projectInput:".aqs-project-input",validateParams:["project","platform"],timestampFormat:"YYYYMMDD00"});t.exports=n},{"../shared/pv":3}],7:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s=function e(t,i,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,i);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},l=e("./config"),u=e("../shared/pv"),c=function(e){function t(){n(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,l));return e.app="topviews",e.excludes=[],e.offset=0,e.max=null,e.pageData=[],e.pageNames=[],e}return r(t,e),a(t,[{key:"initialize",value:function(){this.popParams(),this.updateInterAppLinks()}},{key:"processInput",value:function(e){return this.clearSearch(),this.pushParams(),!(location.search===this.params&&!e)&&(this.params=location.search,this.resetView(!1),this.initData().then(this.drawData.bind(this)))}},{key:"drawData",value:function(){$(".chart-container").html("");for(var e=0,t=0;e<this.config.pageSize+this.offset;){var i=this.pageData[t++];if(!this.excludes.includes(i.article)){this.max||(this.max=i.views);var n=100*(i.views/this.max),o=i18nRtl?"to left":"to right";$(".chart-container").append("<div class='topview-entry' id='topview-entry-"+t+"' style='background:linear-gradient("+o+", #EEE "+n+"%, transparent "+n+"%)'>\n         <span class='topview-entry--remove glyphicon glyphicon-remove' data-article-id="+(t-1)+"\n           title='Remove this page from Topviews rankings' aria-hidden='true'></span>\n         <span class='topview-entry--rank'>"+ ++e+"</span>\n         <a class='topview-entry--label' href=\""+this.getPageURL(i.article)+'" target="_blank">'+i.article+"</a>\n         <span class='topview-entry--leader'></span>\n         <a class='topview-entry--views' href='"+this.getPageviewsURL(i.article)+"'>"+this.formatNumber(i.views)+"</a></div>")}}this.pushParams(),this.stopSpinny(),this.addExcludeListeners()}},{key:"addExclude",value:function(e){var t=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Array.isArray(e)||(e=[e]),e.forEach(function(e){t.excludes.includes(e)||t.excludes.push(e)}),$(this.config.select2Input).html(""),this.excludes.forEach(function(e){var i=$("<div>").text(e).html();$("<option>"+i+"</option>").appendTo(t.config.select2Input)}),i&&$(this.config.select2Input).val(this.excludes).trigger("change")}},{key:"addExcludeListeners",value:function(){var e=this;$(".topview-entry--remove").off("click").on("click",function(t){var i=e.pageNames[$(t.target).data("article-id")];e.addExclude(i),e.pushParams()})}},{key:"clearSearch",value:function(){$(".topviews-search-icon").hasClass("glyphicon-remove")&&($("#topviews_search_field").val(""),$(".topviews-search-icon").removeClass("glyphicon-remove").addClass("glyphicon-search"),this.drawData())}},{key:"exportCSV",value:function(){var e="data:text/csv;charset=utf-8,Page,Views\n";this.pageData.forEach(function(t){var i='"'+t.article.replace(/"/g,'""')+'"';e+=i+","+t.views+"\n"}),this.downloadData(e,"csv")}},{key:"exportJSON",value:function(){var e="data:text/json;charset=utf-8,"+JSON.stringify(this.pageData);this.downloadData(e,"json")}},{key:"getExportFilename",value:function(){var e=this.datepicker.getDate(),t=void 0;return t=this.isMonthly()?moment(e).format("YYYY/MM"):moment(e).format("YYYY/MM/DD"),this.app+"-"+t}},{key:"getPageviewsURL",value:function(e){var t=moment(this.datepicker.getDate()),i=void 0,n=void 0;this.isMonthly()?(i=t.format("YYYY-MM-01"),n=t.endOf("month").format("YYYY-MM-DD")):(i=moment(t).subtract(3,"days").format("YYYY-MM-DD"),n=t.add(3,"days").format("YYYY-MM-DD"));var o=$(this.config.platformSelector).val(),r=$(this.config.projectInput).val();return"/pageviews?start="+i+"&end="+n+"&project="+r+"&platform="+o+"&pages="+e}},{key:"getParams",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t={project:$(this.config.projectInput).val(),platform:$(this.config.platformSelector).val()},i=this.datepicker.getDate();return this.specialRange&&e?t.date=this.specialRange.range:this.isMonthly()?t.date=moment(i).format("YYYY-MM"):t.date=moment(i).format("YYYY-MM-DD"),t}},{key:"getPermaLink",value:function(){var e=this.getParams(!1);return delete e.range,e}},{key:"setSpecialRange",value:function(e){if("last-month"===e)this.setupDateRangeSelector("monthly"),this.datepicker.setDate(this.config.maxMonth),this.specialRange={range:e,value:moment(this.config.maxMonth).format("YYYY/MM")};else{if("yesterday"!==e)return!1;this.setupDateRangeSelector("daily"),this.datepicker.setDate(this.config.maxDate),this.specialRange={range:e,value:moment(this.config.maxDate).format("YYYY-MM-DD")}}return!0}},{key:"setDate",value:function(e){var i=void 0;if(/\d{4}-\d{2}$/.test(e))this.setupDateRangeSelector("monthly"),i=moment(e+"-01").toDate(),i>this.config.maxMonth&&(i=this.config.maxMonth);else{if(!/\d{4}-\d{2}-\d{2}$/.test(e))return this.setSpecialRange(e)||this.setSpecialRange(this.config.defaults.dateRange);this.setupDateRangeSelector("daily"),i=moment(e).toDate(),i>this.config.maxDate&&(i=this.config.maxDate)}return i<this.config.minDate.toDate()&&(this.toastError("\n        <strong>"+$.i18n("invalid-params")+"</strong>\n        "+$.i18n("param-error-1",moment(this.config.minDate).format(s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"dateFormat",this)))+"\n      "),i=this.config.minDate.toDate()),this.datepicker.setDate(i)}},{key:"popParams",value:function(){var e=this;this.startSpinny();var t=this.validateParams(this.parseQueryString("excludes"));(t.range||t.start||t.end)&&(this.fixLegacyDates(t),this.toastWarn("\n        <strong>Topviews has been revamped!</strong>\n        Custom date ranges are\n        <a href='//meta.wikimedia.org/wiki/Special:Permalink/15931284#Topviews_revamped'>no longer supported</a>.\n        Using defaults instead.\n      ")),this.setDate(t.date),$(this.config.projectInput).val(t.project),$(this.config.platformSelector).val(t.platform),this.patchUsage(),this.excludes=(t.excludes||[]).map(function(e){return decodeURIComponent(e.descore())}),this.params=location.search,this.initData().done(function(){e.drawData()}).always(function(){e.setupSelect2(),e.setupListeners()})}},{key:"fixLegacyDates",value:function(e){if(e.date||!e.start&&!e.end&&!e.range)return e;if(e.range)return e.date="last-month",e;var t=/\d{4}-\d{2}-\d{2}$/;if(!t.test(e.start)&&!t.test(e.end))return e.date="last-month",e;var i=moment(e.start,"YYYY-MM-DD"),n=moment(e.end,"YYYY-MM-DD"),o=Math.abs(n.diff(i,"days"));return o>3?e.date=i.format("YYYY-MM"):e.date=e.start,e}},{key:"pushParams",value:function(){var e=this.underscorePageNames(this.excludes).join("|").replace(/[&%?]/g,escape);window.history&&window.history.replaceState&&window.history.replaceState({},document.title,"?"+$.param(this.getParams())+"&excludes="+e),$(".permalink").prop("href","?"+$.param(this.getPermaLink())+"&excludes="+e)}},{key:"resetView",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.max=null,this.offset=0,this.pageData=[],this.pageNames=[],this.stopSpinny(!0),$(".chart-container").html(""),$(".message-container").html(""),e&&(this.resetSelect2(),this.excludes=[])}},{key:"searchTopviews",value:function(){var e=this,t=$("#topviews_search_field").val().replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");if(!t)return this.clearSearch();var i=[],n=0;this.pageData.forEach(function(o,r){e.excludes.includes(o.article)||(n++,new RegExp(t,"i").test(o.article)&&(o.rank=n,o.index=r,i.push(o)))}),$(".chart-container").html(""),$(".expand-chart").hide(),$(".topviews-search-icon").removeClass("glyphicon-search").addClass("glyphicon-remove"),i.forEach(function(t){var i=100*(t.views/e.max),n=i18nRtl?"to left":"to right";$(".chart-container").append("<div class='topview-entry' style='background:linear-gradient("+n+", #EEE "+i+"%, transparent "+i+"%)'>\n         <span class='topview-entry--remove glyphicon glyphicon-remove' data-article-id="+t.index+" aria-hidden='true'></span>\n         <span class='topview-entry--rank'>"+t.rank+"</span>\n         <a class='topview-entry--label' href=\""+e.getPageURL(t.article)+'" target="_blank">'+t.article+"</a>\n         <span class='topview-entry--leader'></span>\n         <a class='topview-entry--views' href='"+e.getPageviewsURL(t.article)+"'>"+e.formatNumber(t.views)+"</a></div>")}),this.addExcludeListeners()}},{key:"validateProject",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"validateProject",this).call(this)&&(this.resetView(!0),this.processInput())}},{key:"setupSelect2",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.excludes,i=$(this.config.select2Input);i.select2({data:[],maximumSelectionLength:50,minimumInputLength:0,placeholder:$.i18n("hover-to-exclude")}),t.length&&this.setSelect2Defaults(t),i.on("change",function(t){e.excludes=$(t.target).val()||[],e.max=null,e.clearSearch(),e.drawData()}),setTimeout(function(){$(".select2-search__field").prop("disabled",!0)})}},{key:"setSelect2Defaults",value:function(e){var t=this;return e=e.map(function(e){var i=$("<div>").text(e).html();return $("<option>"+i+"</option>").appendTo(t.config.select2Input),e}),$(this.config.select2Input).select2("val",e),e}},{key:"setupDateRangeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"monthly";$("#date-type-select").val(e);var t="monthly"===e?{format:"MM yyyy",viewMode:"months",minViewMode:"months",endDate:this.config.maxMonth}:{format:this.dateFormat,viewMode:"days",endDate:this.config.maxDate};$(this.config.dateRangeSelector).datepicker("destroy"),$(this.config.dateRangeSelector).datepicker(Object.assign({autoclose:!0,startDate:this.config.minDate.toDate()},t))}},{key:"setupListeners",value:function(){var e=this;s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setupListeners",this).call(this),$(this.config.platformSelector).on("change",this.processInput.bind(this)),$("#date-type-select").on("change",function(t){e.setSpecialRange(e.isMonthly()?"last-month":"yesterday")}),$(".expand-chart").on("click",function(){e.offset+=e.config.pageSize,e.drawData()}),$(this.config.dateRangeSelector).on("change",function(t){e.specialRange&&e.specialRange.value!==t.target.value&&(e.specialRange=null),e.processInput()}),$(".mainspace-only-option").on("click",this.processInput.bind(this)),$("#topviews_search_field").on("keyup",this.searchTopviews.bind(this)),$(".topviews-search-icon").on("click",this.clearSearch.bind(this))}},{key:"startSpinny",value:function(){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"startSpinny",this).call(this),$(".expand-chart").hide(),$(".data-links").addClass("invisible"),$(".search-topviews").addClass("invisible"),$(".data-notice").addClass("invisible")}},{key:"stopSpinny",value:function(e){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"stopSpinny",this).call(this),e||($(".data-links").removeClass("invisible"),$(".search-topviews").removeClass("invisible"),$(".data-notice").removeClass("invisible"),$(".expand-chart").show())}},{key:"isMonthly",value:function(){return"monthly"===$("#date-type-select").val()}},{key:"getAPIDate",value:function(){var e=this.datepicker.getDate();return this.isMonthly()?moment(e).format("YYYY/MM")+"/all-days":moment(e).format("YYYY/MM/DD")}},{key:"initData",value:function(){var e=this,t=$.Deferred();this.startSpinny();var i=$(this.config.platformSelector).val();return $.ajax({url:"https://wikimedia.org/api/rest_v1/metrics/pageviews/top/"+this.project+"/"+i+"/"+this.getAPIDate(),dataType:"json"}).done(function(i){return e.pageData=i.items[0].articles.map(function(e){return e.article=e.article.descore(),e}),e.pageNames=e.pageData.map(function(e){return e.article}),$(".mainspace-only-option").is(":checked")?void e.filterOutNamespace(e.pageNames).done(function(i){return e.pageNames=i,e.pageData=e.pageData.filter(function(e){return i.includes(e.article)}),t.resolve(e.pageData)}):t.resolve(e.pageData)}).fail(function(i){return e.resetView(),e.writeMessage($.i18n("api-error","Pageviews API")+" - "+i.responseJSON.title),t.reject()}),t}},{key:"filterOutNamespace",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=$.Deferred(),o=function(e,n){return e.filter(function(e){var o=e.split(":")[0];return(0!==i||e!==t.getSiteInfo(t.project).general.mainpage)&&(!e.includes(":")||!n.includes(o))})};return this.fetchSiteInfo(this.project).done(function(){var r=[];0===i&&(r=["Wikipedia","Special","Sp?cial"]);for(var a in t.getSiteInfo(t.project).namespaces)r.push(t.getSiteInfo(t.project).namespaces[a]["*"]);e=o(e,r),t.excludes=o(t.excludes,r),n.resolve(e)}).fail(function(){t.writeMessage(""+$.i18n("api-error","Siteinfo API")),n.resolve(e)}),n}},{key:"dateFormat",get:function(){return s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"dateFormat",this).toLowerCase()}},{key:"datepicker",get:function(){return $(this.config.dateRangeSelector).data("datepicker")}}]),t}(u);$(document).ready(function(){return document.location.hash&&!document.location.search?document.location.href=document.location.href.replace("#","?"):document.location.hash?document.location.href=document.location.href.replace(/\#.*/,""):void new c})},{"../shared/pv":3,"./config":6}]},{},[7]);
=======
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var nav, I18N,
		slice = Array.prototype.slice;
	/**
	 * @constructor
	 * @param {Object} options
	 */
	I18N = function ( options ) {
		// Load defaults
		this.options = $.extend( {}, I18N.defaults, options );

		this.parser = this.options.parser;
		this.locale = this.options.locale;
		this.messageStore = this.options.messageStore;
		this.languages = {};

		this.init();
	};

	I18N.prototype = {
		/**
		 * Initialize by loading locales and setting up
		 * String.prototype.toLocaleString and String.locale.
		 */
		init: function () {
			var i18n = this;

			// Set locale of String environment
			String.locale = i18n.locale;

			// Override String.localeString method
			String.prototype.toLocaleString = function () {
				var localeParts, localePartIndex, value, locale, fallbackIndex,
					tryingLocale, message;

				value = this.valueOf();
				locale = i18n.locale;
				fallbackIndex = 0;

				while ( locale ) {
					// Iterate through locales starting at most-specific until
					// localization is found. As in fi-Latn-FI, fi-Latn and fi.
					localeParts = locale.split( '-' );
					localePartIndex = localeParts.length;

					do {
						tryingLocale = localeParts.slice( 0, localePartIndex ).join( '-' );
						message = i18n.messageStore.get( tryingLocale, value );

						if ( message ) {
							return message;
						}

						localePartIndex--;
					} while ( localePartIndex );

					if ( locale === 'en' ) {
						break;
					}

					locale = ( $.i18n.fallbacks[ i18n.locale ] && $.i18n.fallbacks[ i18n.locale ][ fallbackIndex ] ) ||
						i18n.options.fallbackLocale;
					$.i18n.log( 'Trying fallback locale for ' + i18n.locale + ': ' + locale );

					fallbackIndex++;
				}

				// key not found
				return '';
			};
		},

		/*
		 * Destroy the i18n instance.
		 */
		destroy: function () {
			$.removeData( document, 'i18n' );
		},

		/**
		 * General message loading API This can take a URL string for
		 * the json formatted messages. Example:
		 * <code>load('path/to/all_localizations.json');</code>
		 *
		 * To load a localization file for a locale:
		 * <code>
		 * load('path/to/de-messages.json', 'de' );
		 * </code>
		 *
		 * To load a localization file from a directory:
		 * <code>
		 * load('path/to/i18n/directory', 'de' );
		 * </code>
		 * The above method has the advantage of fallback resolution.
		 * ie, it will automatically load the fallback locales for de.
		 * For most usecases, this is the recommended method.
		 * It is optional to have trailing slash at end.
		 *
		 * A data object containing message key- message translation mappings
		 * can also be passed. Example:
		 * <code>
		 * load( { 'hello' : 'Hello' }, optionalLocale );
		 * </code>
		 *
		 * A source map containing key-value pair of languagename and locations
		 * can also be passed. Example:
		 * <code>
		 * load( {
		 * bn: 'i18n/bn.json',
		 * he: 'i18n/he.json',
		 * en: 'i18n/en.json'
		 * } )
		 * </code>
		 *
		 * If the data argument is null/undefined/false,
		 * all cached messages for the i18n instance will get reset.
		 *
		 * @param {string|Object} source
		 * @param {string} locale Language tag
		 * @return {jQuery.Promise}
		 */
		load: function ( source, locale ) {
			var fallbackLocales, locIndex, fallbackLocale, sourceMap = {};
			if ( !source && !locale ) {
				source = 'i18n/' + $.i18n().locale + '.json';
				locale = $.i18n().locale;
			}
			if ( typeof source === 'string'	&&
				source.split( '.' ).pop() !== 'json'
			) {
				// Load specified locale then check for fallbacks when directory is specified in load()
				sourceMap[ locale ] = source + '/' + locale + '.json';
				fallbackLocales = ( $.i18n.fallbacks[ locale ] || [] )
					.concat( this.options.fallbackLocale );
				for ( locIndex in fallbackLocales ) {
					fallbackLocale = fallbackLocales[ locIndex ];
					sourceMap[ fallbackLocale ] = source + '/' + fallbackLocale + '.json';
				}
				return this.load( sourceMap );
			} else {
				return this.messageStore.load( source, locale );
			}

		},

		/**
		 * Does parameter and magic word substitution.
		 *
		 * @param {string} key Message key
		 * @param {Array} parameters Message parameters
		 * @return {string}
		 */
		parse: function ( key, parameters ) {
			var message = key.toLocaleString();
			// FIXME: This changes the state of the I18N object,
			// should probably not change the 'this.parser' but just
			// pass it to the parser.
			this.parser.language = $.i18n.languages[ $.i18n().locale ] || $.i18n.languages[ 'default' ];
			if ( message === '' ) {
				message = key;
			}
			return this.parser.parse( message, parameters );
		}
	};

	/**
	 * Process a message from the $.I18N instance
	 * for the current document, stored in jQuery.data(document).
	 *
	 * @param {string} key Key of the message.
	 * @param {string} param1 [param...] Variadic list of parameters for {key}.
	 * @return {string|$.I18N} Parsed message, or if no key was given
	 * the instance of $.I18N is returned.
	 */
	$.i18n = function ( key, param1 ) {
		var parameters,
			i18n = $.data( document, 'i18n' ),
			options = typeof key === 'object' && key;

		// If the locale option for this call is different then the setup so far,
		// update it automatically. This doesn't just change the context for this
		// call but for all future call as well.
		// If there is no i18n setup yet, don't do this. It will be taken care of
		// by the `new I18N` construction below.
		// NOTE: It should only change language for this one call.
		// Then cache instances of I18N somewhere.
		if ( options && options.locale && i18n && i18n.locale !== options.locale ) {
			String.locale = i18n.locale = options.locale;
		}

		if ( !i18n ) {
			i18n = new I18N( options );
			$.data( document, 'i18n', i18n );
		}

		if ( typeof key === 'string' ) {
			if ( param1 !== undefined ) {
				parameters = slice.call( arguments, 1 );
			} else {
				parameters = [];
			}

			return i18n.parse( key, parameters );
		} else {
			// FIXME: remove this feature/bug.
			return i18n;
		}
	};

	$.fn.i18n = function () {
		var i18n = $.data( document, 'i18n' );

		if ( !i18n ) {
			i18n = new I18N();
			$.data( document, 'i18n', i18n );
		}
		String.locale = i18n.locale;
		return this.each( function () {
			var $this = $( this ),
				messageKey = $this.data( 'i18n' );

			if ( messageKey ) {
				$this.text( i18n.parse( messageKey ) );
			} else {
				$this.find( '[data-i18n]' ).i18n();
			}
		} );
	};

	String.locale = String.locale || $( 'html' ).attr( 'lang' );

	if ( !String.locale ) {
		if ( typeof window.navigator !== undefined ) {
			nav = window.navigator;
			String.locale = nav.language || nav.userLanguage || '';
		} else {
			String.locale = '';
		}
	}

	$.i18n.languages = {};
	$.i18n.messageStore = $.i18n.messageStore || {};
	$.i18n.parser = {
		// The default parser only handles variable substitution
		parse: function ( message, parameters ) {
			return message.replace( /\$(\d+)/g, function ( str, match ) {
				var index = parseInt( match, 10 ) - 1;
				return parameters[ index ] !== undefined ? parameters[ index ] : '$' + match;
			} );
		},
		emitter: {}
	};
	$.i18n.fallbacks = {};
	$.i18n.debug = false;
	$.i18n.log = function ( /* arguments */ ) {
		if ( window.console && $.i18n.debug ) {
			window.console.log.apply( window.console, arguments );
		}
	};
	/* Static members */
	I18N.defaults = {
		locale: String.locale,
		fallbackLocale: 'en',
		parser: $.i18n.parser,
		messageStore: $.i18n.messageStore
	};

	// Expose constructor
	$.i18n.constructor = I18N;
}( jQuery ) );

/*!
 * jQuery Internationalization library - Message Store
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do anything special to
 * choose one license or the other and you don't have to notify anyone which license you are using.
 * You are free to use UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $, window, undefined ) {
	'use strict';

	var MessageStore = function () {
		this.messages = {};
		this.sources = {};
	};

	/**
	 * See https://github.com/wikimedia/jquery.i18n/wiki/Specification#wiki-Message_File_Loading
	 */
	MessageStore.prototype = {

		/**
		 * General message loading API This can take a URL string for
		 * the json formatted messages.
		 * <code>load('path/to/all_localizations.json');</code>
		 *
		 * This can also load a localization file for a locale <code>
		 * load( 'path/to/de-messages.json', 'de' );
		 * </code>
		 * A data object containing message key- message translation mappings
		 * can also be passed Eg:
		 * <code>
		 * load( { 'hello' : 'Hello' }, optionalLocale );
		 * </code> If the data argument is
		 * null/undefined/false,
		 * all cached messages for the i18n instance will get reset.
		 *
		 * @param {string|Object} source
		 * @param {string} locale Language tag
		 * @return {jQuery.Promise}
		 */
		load: function ( source, locale ) {
			var key = null,
				deferred = null,
				deferreds = [],
				messageStore = this;

			if ( typeof source === 'string' ) {
				// This is a URL to the messages file.
				$.i18n.log( 'Loading messages from: ' + source );
				deferred = jsonMessageLoader( source )
					.done( function ( localization ) {
						messageStore.set( locale, localization );
					} );

				return deferred.promise();
			}

			if ( locale ) {
				// source is an key-value pair of messages for given locale
				messageStore.set( locale, source );

				return $.Deferred().resolve();
			} else {
				// source is a key-value pair of locales and their source
				for ( key in source ) {
					if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
						locale = key;
						// No {locale} given, assume data is a group of languages,
						// call this function again for each language.
						deferreds.push( messageStore.load( source[ key ], locale ) );
					}
				}
				return $.when.apply( $, deferreds );
			}

		},

		/**
		 * Set messages to the given locale.
		 * If locale exists, add messages to the locale.
		 *
		 * @param {string} locale
		 * @param {Object} messages
		 */
		set: function ( locale, messages ) {
			if ( !this.messages[ locale ] ) {
				this.messages[ locale ] = messages;
			} else {
				this.messages[ locale ] = $.extend( this.messages[ locale ], messages );
			}
		},

		/**
		 *
		 * @param {string} locale
		 * @param {string} messageKey
		 * @return {boolean}
		 */
		get: function ( locale, messageKey ) {
			return this.messages[ locale ] && this.messages[ locale ][ messageKey ];
		}
	};

	function jsonMessageLoader( url ) {
		var deferred = $.Deferred();

		$.getJSON( url )
			.done( deferred.resolve )
			.fail( function ( jqxhr, settings, exception ) {
				$.i18n.log( 'Error in loading messages from ' + url + ' Exception: ' + exception );
				// Ignore 404 exception, because we are handling fallabacks explicitly
				deferred.resolve();
			} );

		return deferred.promise();
	}

	$.extend( $.i18n.messageStore, new MessageStore() );
}( jQuery, window ) );

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2011-2013 Santhosh Thottingal, Neil Kandalgaonkar
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var MessageParser = function ( options ) {
		this.options = $.extend( {}, $.i18n.parser.defaults, options );
		this.language = $.i18n.languages[ String.locale ] || $.i18n.languages[ 'default' ];
		this.emitter = $.i18n.parser.emitter;
	};

	MessageParser.prototype = {

		constructor: MessageParser,

		simpleParse: function ( message, parameters ) {
			return message.replace( /\$(\d+)/g, function ( str, match ) {
				var index = parseInt( match, 10 ) - 1;

				return parameters[ index ] !== undefined ? parameters[ index ] : '$' + match;
			} );
		},

		parse: function ( message, replacements ) {
			if ( message.indexOf( '{{' ) < 0 ) {
				return this.simpleParse( message, replacements );
			}

			this.emitter.language = $.i18n.languages[ $.i18n().locale ] ||
				$.i18n.languages[ 'default' ];

			return this.emitter.emit( this.ast( message ), replacements );
		},

		ast: function ( message ) {
			var pipe, colon, backslash, anyCharacter, dollar, digits, regularLiteral,
				regularLiteralWithoutBar, regularLiteralWithoutSpace, escapedOrLiteralWithoutBar,
				escapedOrRegularLiteral, templateContents, templateName, openTemplate,
				closeTemplate, expression, paramExpression, result,
				pos = 0;

			// Try parsers until one works, if none work return null
			function choice( parserSyntax ) {
				return function () {
					var i, result;

					for ( i = 0; i < parserSyntax.length; i++ ) {
						result = parserSyntax[ i ]();

						if ( result !== null ) {
							return result;
						}
					}

					return null;
				};
			}

			// Try several parserSyntax-es in a row.
			// All must succeed; otherwise, return null.
			// This is the only eager one.
			function sequence( parserSyntax ) {
				var i, res,
					originalPos = pos,
					result = [];

				for ( i = 0; i < parserSyntax.length; i++ ) {
					res = parserSyntax[ i ]();

					if ( res === null ) {
						pos = originalPos;

						return null;
					}

					result.push( res );
				}

				return result;
			}

			// Run the same parser over and over until it fails.
			// Must succeed a minimum of n times; otherwise, return null.
			function nOrMore( n, p ) {
				return function () {
					var originalPos = pos,
						result = [],
						parsed = p();

					while ( parsed !== null ) {
						result.push( parsed );
						parsed = p();
					}

					if ( result.length < n ) {
						pos = originalPos;

						return null;
					}

					return result;
				};
			}

			// Helpers -- just make parserSyntax out of simpler JS builtin types

			function makeStringParser( s ) {
				var len = s.length;

				return function () {
					var result = null;

					if ( message.substr( pos, len ) === s ) {
						result = s;
						pos += len;
					}

					return result;
				};
			}

			function makeRegexParser( regex ) {
				return function () {
					var matches = message.substr( pos ).match( regex );

					if ( matches === null ) {
						return null;
					}

					pos += matches[ 0 ].length;

					return matches[ 0 ];
				};
			}

			pipe = makeStringParser( '|' );
			colon = makeStringParser( ':' );
			backslash = makeStringParser( '\\' );
			anyCharacter = makeRegexParser( /^./ );
			dollar = makeStringParser( '$' );
			digits = makeRegexParser( /^\d+/ );
			regularLiteral = makeRegexParser( /^[^{}\[\]$\\]/ );
			regularLiteralWithoutBar = makeRegexParser( /^[^{}\[\]$\\|]/ );
			regularLiteralWithoutSpace = makeRegexParser( /^[^{}\[\]$\s]/ );

			// There is a general pattern:
			// parse a thing;
			// if it worked, apply transform,
			// otherwise return null.
			// But using this as a combinator seems to cause problems
			// when combined with nOrMore().
			// May be some scoping issue.
			function transform( p, fn ) {
				return function () {
					var result = p();

					return result === null ? null : fn( result );
				};
			}

			// Used to define "literals" within template parameters. The pipe
			// character is the parameter delimeter, so by default
			// it is not a literal in the parameter
			function literalWithoutBar() {
				var result = nOrMore( 1, escapedOrLiteralWithoutBar )();

				return result === null ? null : result.join( '' );
			}

			function literal() {
				var result = nOrMore( 1, escapedOrRegularLiteral )();

				return result === null ? null : result.join( '' );
			}

			function escapedLiteral() {
				var result = sequence( [ backslash, anyCharacter ] );

				return result === null ? null : result[ 1 ];
			}

			choice( [ escapedLiteral, regularLiteralWithoutSpace ] );
			escapedOrLiteralWithoutBar = choice( [ escapedLiteral, regularLiteralWithoutBar ] );
			escapedOrRegularLiteral = choice( [ escapedLiteral, regularLiteral ] );

			function replacement() {
				var result = sequence( [ dollar, digits ] );

				if ( result === null ) {
					return null;
				}

				return [ 'REPLACE', parseInt( result[ 1 ], 10 ) - 1 ];
			}

			templateName = transform(
				// see $wgLegalTitleChars
				// not allowing : due to the need to catch "PLURAL:$1"
				makeRegexParser( /^[ !"$&'()*,.\/0-9;=?@A-Z\^_`a-z~\x80-\xFF+\-]+/ ),

				function ( result ) {
					return result.toString();
				}
			);

			function templateParam() {
				var expr,
					result = sequence( [ pipe, nOrMore( 0, paramExpression ) ] );

				if ( result === null ) {
					return null;
				}

				expr = result[ 1 ];

				// use a "CONCAT" operator if there are multiple nodes,
				// otherwise return the first node, raw.
				return expr.length > 1 ? [ 'CONCAT' ].concat( expr ) : expr[ 0 ];
			}

			function templateWithReplacement() {
				var result = sequence( [ templateName, colon, replacement ] );

				return result === null ? null : [ result[ 0 ], result[ 2 ] ];
			}

			function templateWithOutReplacement() {
				var result = sequence( [ templateName, colon, paramExpression ] );

				return result === null ? null : [ result[ 0 ], result[ 2 ] ];
			}

			templateContents = choice( [
				function () {
					var res = sequence( [
						// templates can have placeholders for dynamic
						// replacement eg: {{PLURAL:$1|one car|$1 cars}}
						// or no placeholders eg:
						// {{GRAMMAR:genitive|{{SITENAME}}}
						choice( [ templateWithReplacement, templateWithOutReplacement ] ),
						nOrMore( 0, templateParam )
					] );

					return res === null ? null : res[ 0 ].concat( res[ 1 ] );
				},
				function () {
					var res = sequence( [ templateName, nOrMore( 0, templateParam ) ] );

					if ( res === null ) {
						return null;
					}

					return [ res[ 0 ] ].concat( res[ 1 ] );
				}
			] );

			openTemplate = makeStringParser( '{{' );
			closeTemplate = makeStringParser( '}}' );

			function template() {
				var result = sequence( [ openTemplate, templateContents, closeTemplate ] );

				return result === null ? null : result[ 1 ];
			}

			expression = choice( [ template, replacement, literal ] );
			paramExpression = choice( [ template, replacement, literalWithoutBar ] );

			function start() {
				var result = nOrMore( 0, expression )();

				if ( result === null ) {
					return null;
				}

				return [ 'CONCAT' ].concat( result );
			}

			result = start();

			/*
			 * For success, the pos must have gotten to the end of the input
			 * and returned a non-null.
			 * n.b. This is part of language infrastructure, so we do not throw an internationalizable message.
			 */
			if ( result === null || pos !== message.length ) {
				throw new Error( 'Parse error at position ' + pos.toString() + ' in input: ' + message );
			}

			return result;
		}

	};

	$.extend( $.i18n.parser, new MessageParser() );
}( jQuery ) );

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2011-2013 Santhosh Thottingal, Neil Kandalgaonkar
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var MessageParserEmitter = function () {
		this.language = $.i18n.languages[ String.locale ] || $.i18n.languages[ 'default' ];
	};

	MessageParserEmitter.prototype = {
		constructor: MessageParserEmitter,

		/**
		 * (We put this method definition here, and not in prototype, to make
		 * sure it's not overwritten by any magic.) Walk entire node structure,
		 * applying replacements and template functions when appropriate
		 *
		 * @param {Mixed} node abstract syntax tree (top node or subnode)
		 * @param {Array} replacements for $1, $2, ... $n
		 * @return {Mixed} single-string node or array of nodes suitable for
		 *  jQuery appending.
		 */
		emit: function ( node, replacements ) {
			var ret, subnodes, operation,
				messageParserEmitter = this;

			switch ( typeof node ) {
			case 'string':
			case 'number':
				ret = node;
				break;
			case 'object':
				// node is an array of nodes
				subnodes = $.map( node.slice( 1 ), function ( n ) {
					return messageParserEmitter.emit( n, replacements );
				} );

				operation = node[ 0 ].toLowerCase();

				if ( typeof messageParserEmitter[ operation ] === 'function' ) {
					ret = messageParserEmitter[ operation ]( subnodes, replacements );
				} else {
					throw new Error( 'unknown operation "' + operation + '"' );
				}

				break;
			case 'undefined':
				// Parsing the empty string (as an entire expression, or as a
				// paramExpression in a template) results in undefined
				// Perhaps a more clever parser can detect this, and return the
				// empty string? Or is that useful information?
				// The logical thing is probably to return the empty string here
				// when we encounter undefined.
				ret = '';
				break;
			default:
				throw new Error( 'unexpected type in AST: ' + typeof node );
			}

			return ret;
		},

		/**
		 * Parsing has been applied depth-first we can assume that all nodes
		 * here are single nodes Must return a single node to parents -- a
		 * jQuery with synthetic span However, unwrap any other synthetic spans
		 * in our children and pass them upwards
		 *
		 * @param {Array} nodes Mixed, some single nodes, some arrays of nodes.
		 * @return {string}
		 */
		concat: function ( nodes ) {
			var result = '';

			$.each( nodes, function ( i, node ) {
				// strings, integers, anything else
				result += node;
			} );

			return result;
		},

		/**
		 * Return escaped replacement of correct index, or string if
		 * unavailable. Note that we expect the parsed parameter to be
		 * zero-based. i.e. $1 should have become [ 0 ]. if the specified
		 * parameter is not found return the same string (e.g. "$99" ->
		 * parameter 98 -> not found -> return "$99" ) TODO throw error if
		 * nodes.length > 1 ?
		 *
		 * @param {Array} nodes One element, integer, n >= 0
		 * @param {Array} replacements for $1, $2, ... $n
		 * @return {string} replacement
		 */
		replace: function ( nodes, replacements ) {
			var index = parseInt( nodes[ 0 ], 10 );

			if ( index < replacements.length ) {
				// replacement is not a string, don't touch!
				return replacements[ index ];
			} else {
				// index not found, fallback to displaying variable
				return '$' + ( index + 1 );
			}
		},

		/**
		 * Transform parsed structure into pluralization n.b. The first node may
		 * be a non-integer (for instance, a string representing an Arabic
		 * number). So convert it back with the current language's
		 * convertNumber.
		 *
		 * @param {Array} nodes List [ {String|Number}, {String}, {String} ... ]
		 * @return {string} selected pluralized form according to current
		 *  language.
		 */
		plural: function ( nodes ) {
			var count = parseFloat( this.language.convertNumber( nodes[ 0 ], 10 ) ),
				forms = nodes.slice( 1 );

			return forms.length ? this.language.convertPlural( count, forms ) : '';
		},

		/**
		 * Transform parsed structure into gender Usage
		 * {{gender:gender|masculine|feminine|neutral}}.
		 *
		 * @param {Array} nodes List [ {String}, {String}, {String} , {String} ]
		 * @return {string} selected gender form according to current language
		 */
		gender: function ( nodes ) {
			var gender = nodes[ 0 ],
				forms = nodes.slice( 1 );

			return this.language.gender( gender, forms );
		},

		/**
		 * Transform parsed structure into grammar conversion. Invoked by
		 * putting {{grammar:form|word}} in a message
		 *
		 * @param {Array} nodes List [{Grammar case eg: genitive}, {String word}]
		 * @return {string} selected grammatical form according to current
		 *  language.
		 */
		grammar: function ( nodes ) {
			var form = nodes[ 0 ],
				word = nodes[ 1 ];

			return word && form && this.language.convertGrammar( word, form );
		}
	};

	$.extend( $.i18n.parser.emitter, new MessageParserEmitter() );
}( jQuery ) );

/*global pluralRuleParser */
( function ( $ ) {
	'use strict';

	var language = {
		// CLDR plural rules generated using
		// libs/CLDRPluralRuleParser/tools/PluralXML2JSON.html
		pluralRules: {
			ak: {
				one: 'n = 0..1'
			},
			am: {
				one: 'i = 0 or n = 1'
			},
			ar: {
				zero: 'n = 0',
				one: 'n = 1',
				two: 'n = 2',
				few: 'n % 100 = 3..10',
				many: 'n % 100 = 11..99'
			},
			be: {
				one: 'n % 10 = 1 and n % 100 != 11',
				few: 'n % 10 = 2..4 and n % 100 != 12..14',
				many: 'n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14'
			},
			bh: {
				one: 'n = 0..1'
			},
			bn: {
				one: 'i = 0 or n = 1'
			},
			br: {
				one: 'n % 10 = 1 and n % 100 != 11,71,91',
				two: 'n % 10 = 2 and n % 100 != 12,72,92',
				few: 'n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99',
				many: 'n != 0 and n % 1000000 = 0'
			},
			bs: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			cs: {
				one: 'i = 1 and v = 0',
				few: 'i = 2..4 and v = 0',
				many: 'v != 0'
			},
			cy: {
				zero: 'n = 0',
				one: 'n = 1',
				two: 'n = 2',
				few: 'n = 3',
				many: 'n = 6'
			},
			da: {
				one: 'n = 1 or t != 0 and i = 0,1'
			},
			fa: {
				one: 'i = 0 or n = 1'
			},
			ff: {
				one: 'i = 0,1'
			},
			fil: {
				one: 'i = 0..1 and v = 0'
			},
			fr: {
				one: 'i = 0,1'
			},
			ga: {
				one: 'n = 1',
				two: 'n = 2',
				few: 'n = 3..6',
				many: 'n = 7..10'
			},
			gd: {
				one: 'n = 1,11',
				two: 'n = 2,12',
				few: 'n = 3..10,13..19'
			},
			gu: {
				one: 'i = 0 or n = 1'
			},
			guw: {
				one: 'n = 0..1'
			},
			gv: {
				one: 'n % 10 = 1',
				two: 'n % 10 = 2',
				few: 'n % 100 = 0,20,40,60'
			},
			he: {
				one: 'i = 1 and v = 0',
				two: 'i = 2 and v = 0',
				many: 'v = 0 and n != 0..10 and n % 10 = 0'
			},
			hi: {
				one: 'i = 0 or n = 1'
			},
			hr: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			hy: {
				one: 'i = 0,1'
			},
			is: {
				one: 't = 0 and i % 10 = 1 and i % 100 != 11 or t != 0'
			},
			iu: {
				one: 'n = 1',
				two: 'n = 2'
			},
			iw: {
				one: 'i = 1 and v = 0',
				two: 'i = 2 and v = 0',
				many: 'v = 0 and n != 0..10 and n % 10 = 0'
			},
			kab: {
				one: 'i = 0,1'
			},
			kn: {
				one: 'i = 0 or n = 1'
			},
			kw: {
				one: 'n = 1',
				two: 'n = 2'
			},
			lag: {
				zero: 'n = 0',
				one: 'i = 0,1 and n != 0'
			},
			ln: {
				one: 'n = 0..1'
			},
			lt: {
				one: 'n % 10 = 1 and n % 100 != 11..19',
				few: 'n % 10 = 2..9 and n % 100 != 11..19',
				many: 'f != 0'
			},
			lv: {
				zero: 'n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19',
				one: 'n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1'
			},
			mg: {
				one: 'n = 0..1'
			},
			mk: {
				one: 'v = 0 and i % 10 = 1 or f % 10 = 1'
			},
			mo: {
				one: 'i = 1 and v = 0',
				few: 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'
			},
			mr: {
				one: 'i = 0 or n = 1'
			},
			mt: {
				one: 'n = 1',
				few: 'n = 0 or n % 100 = 2..10',
				many: 'n % 100 = 11..19'
			},
			naq: {
				one: 'n = 1',
				two: 'n = 2'
			},
			nso: {
				one: 'n = 0..1'
			},
			pa: {
				one: 'n = 0..1'
			},
			pl: {
				one: 'i = 1 and v = 0',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
				many: 'v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14'
			},
			pt: {
				one: 'i = 1 and v = 0 or i = 0 and t = 1'
			},
			// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
			pt_PT: {
				one: 'n = 1 and v = 0'
			},
			// jscs:enable requireCamelCaseOrUpperCaseIdentifiers
			ro: {
				one: 'i = 1 and v = 0',
				few: 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'
			},
			ru: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11',
				many: 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'
			},
			se: {
				one: 'n = 1',
				two: 'n = 2'
			},
			sh: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			shi: {
				one: 'i = 0 or n = 1',
				few: 'n = 2..10'
			},
			si: {
				one: 'n = 0,1 or i = 0 and f = 1'
			},
			sk: {
				one: 'i = 1 and v = 0',
				few: 'i = 2..4 and v = 0',
				many: 'v != 0'
			},
			sl: {
				one: 'v = 0 and i % 100 = 1',
				two: 'v = 0 and i % 100 = 2',
				few: 'v = 0 and i % 100 = 3..4 or v != 0'
			},
			sma: {
				one: 'n = 1',
				two: 'n = 2'
			},
			smi: {
				one: 'n = 1',
				two: 'n = 2'
			},
			smj: {
				one: 'n = 1',
				two: 'n = 2'
			},
			smn: {
				one: 'n = 1',
				two: 'n = 2'
			},
			sms: {
				one: 'n = 1',
				two: 'n = 2'
			},
			sr: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			ti: {
				one: 'n = 0..1'
			},
			tl: {
				one: 'i = 0..1 and v = 0'
			},
			tzm: {
				one: 'n = 0..1 or n = 11..99'
			},
			uk: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
				many: 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'
			},
			wa: {
				one: 'n = 0..1'
			},
			zu: {
				one: 'i = 0 or n = 1'
			}
		},

		/**
		 * Plural form transformations, needed for some languages.
		 *
		 * @param {integer} count
		 *            Non-localized quantifier
		 * @param {Array} forms
		 *            List of plural forms
		 * @return {string} Correct form for quantifier in this language
		 */
		convertPlural: function ( count, forms ) {
			var pluralRules,
				pluralFormIndex,
				index,
				explicitPluralPattern = new RegExp( '\\d+=', 'i' ),
				formCount,
				form;

			if ( !forms || forms.length === 0 ) {
				return '';
			}

			// Handle for Explicit 0= & 1= values
			for ( index = 0; index < forms.length; index++ ) {
				form = forms[ index ];
				if ( explicitPluralPattern.test( form ) ) {
					formCount = parseInt( form.substring( 0, form.indexOf( '=' ) ), 10 );
					if ( formCount === count ) {
						return ( form.substr( form.indexOf( '=' ) + 1 ) );
					}
					forms[ index ] = undefined;
				}
			}

			forms = $.map( forms, function ( form ) {
				if ( form !== undefined ) {
					return form;
				}
			} );

			pluralRules = this.pluralRules[ $.i18n().locale ];

			if ( !pluralRules ) {
				// default fallback.
				return ( count === 1 ) ? forms[ 0 ] : forms[ 1 ];
			}

			pluralFormIndex = this.getPluralForm( count, pluralRules );
			pluralFormIndex = Math.min( pluralFormIndex, forms.length - 1 );

			return forms[ pluralFormIndex ];
		},

		/**
		 * For the number, get the plural for index
		 *
		 * @param {integer} number
		 * @param {Object} pluralRules
		 * @return {integer} plural form index
		 */
		getPluralForm: function ( number, pluralRules ) {
			var i,
				pluralForms = [ 'zero', 'one', 'two', 'few', 'many', 'other' ],
				pluralFormIndex = 0;

			for ( i = 0; i < pluralForms.length; i++ ) {
				if ( pluralRules[ pluralForms[ i ] ] ) {
					if ( typeof pluralRuleParser === 'undefined' ) {
						return pluralFormIndex;
					} else {
						if ( pluralRuleParser( pluralRules[ pluralForms[ i ] ], number ) ) {
							return pluralFormIndex;
						}
					}

					pluralFormIndex++;
				}
			}

			return pluralFormIndex;
		},

		/**
		 * Converts a number using digitTransformTable.
		 *
		 * @param {number} num Value to be converted
		 * @param {boolean} integer Convert the return value to an integer
		 */
		convertNumber: function ( num, integer ) {
			var tmp, item, i,
				transformTable, numberString, convertedNumber;

			// Set the target Transform table:
			transformTable = this.digitTransformTable( $.i18n().locale );
			numberString = String( num );
			convertedNumber = '';

			if ( !transformTable ) {
				return num;
			}

			// Check if the restore to Latin number flag is set:
			if ( integer ) {
				if ( parseFloat( num, 10 ) === num ) {
					return num;
				}

				tmp = [];

				for ( item in transformTable ) {
					tmp[ transformTable[ item ] ] = item;
				}

				transformTable = tmp;
			}

			for ( i = 0; i < numberString.length; i++ ) {
				if ( transformTable[ numberString[ i ] ] ) {
					convertedNumber += transformTable[ numberString[ i ] ];
				} else {
					convertedNumber += numberString[ i ];
				}
			}

			return integer ? parseFloat( convertedNumber, 10 ) : convertedNumber;
		},

		/**
		 * Grammatical transformations, needed for inflected languages.
		 * Invoked by putting {{grammar:form|word}} in a message.
		 * Override this method for languages that need special grammar rules
		 * applied dynamically.
		 *
		 * @param {string} word
		 * @param {string} form
		 * @return {string}
		 */
		convertGrammar: function ( word, form ) { /*jshint unused: false */
			return word;
		},

		/**
		 * Provides an alternative text depending on specified gender. Usage
		 * {{gender:[gender|user object]|masculine|feminine|neutral}}. If second
		 * or third parameter are not specified, masculine is used.
		 *
		 * These details may be overriden per language.
		 *
		 * @param {string} gender
		 *      male, female, or anything else for neutral.
		 * @param {Array} forms
		 *      List of gender forms
		 *
		 * @return {string}
		 */
		gender: function ( gender, forms ) {
			if ( !forms || forms.length === 0 ) {
				return '';
			}

			while ( forms.length < 2 ) {
				forms.push( forms[ forms.length - 1 ] );
			}

			if ( gender === 'male' ) {
				return forms[ 0 ];
			}

			if ( gender === 'female' ) {
				return forms[ 1 ];
			}

			return ( forms.length === 3 ) ? forms[ 2 ] : forms[ 0 ];
		},

		/**
		 * Get the digit transform table for the given language
		 * See http://cldr.unicode.org/translation/numbering-systems
		 *
		 * @param {string} language
		 * @return {Array|boolean} List of digits in the passed language or false
		 * representation, or boolean false if there is no information.
		 */
		digitTransformTable: function ( language ) {
			var tables = {
				ar: '٠١٢٣٤٥٦٧٨٩',
				fa: '۰۱۲۳۴۵۶۷۸۹',
				ml: '൦൧൨൩൪൫൬൭൮൯',
				kn: '೦೧೨೩೪೫೬೭೮೯',
				lo: '໐໑໒໓໔໕໖໗໘໙',
				or: '୦୧୨୩୪୫୬୭୮୯',
				kh: '០១២៣៤៥៦៧៨៩',
				pa: '੦੧੨੩੪੫੬੭੮੯',
				gu: '૦૧૨૩૪૫૬૭૮૯',
				hi: '०१२३४५६७८९',
				my: '၀၁၂၃၄၅၆၇၈၉',
				ta: '௦௧௨௩௪௫௬௭௮௯',
				te: '౦౧౨౩౪౫౬౭౮౯',
				th: '๐๑๒๓๔๕๖๗๘๙', // FIXME use iso 639 codes
				bo: '༠༡༢༣༤༥༦༧༨༩' // FIXME use iso 639 codes
			};

			if ( !tables[ language ] ) {
				return false;
			}

			return tables[ language ].split( '' );
		}
	};

	$.extend( $.i18n.languages, {
		'default': language
	} );
}( jQuery ) );

//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Hc.apply(null,arguments)}function b(a){Hc=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Ca(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!(isNaN(a._d.getTime())||!(b.overflow<0)||b.empty||b.invalidMonth||b.invalidWeekday||b.nullInput||b.invalidFormat||b.userInvalidated),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=j(b)),"undefined"!=typeof b._locale&&(a._locale=b._locale),Jc.length>0)for(c in Jc)d=Jc[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function n(b){m(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),Kc===!1&&(Kc=!0,a.updateOffset(this),Kc=!1)}function o(a){return a instanceof n||null!=a&&null!=a._isAMomentObject}function p(a){return 0>a?Math.ceil(a):Math.floor(a)}function q(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=p(b)),c}function r(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&q(a[d])!==q(b[d]))&&g++;return g+f}function s(){}function t(a){return a?a.toLowerCase().replace("_","-"):a}function u(a){for(var b,c,d,e,f=0;f<a.length;){for(e=t(a[f]).split("-"),b=e.length,c=t(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=v(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&r(e,c,!0)>=b-1)break;b--}f++}return null}function v(a){var b=null;if(!Lc[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Ic._abbr,require("./locale/"+a),w(b)}catch(c){}return Lc[a]}function w(a,b){var c;return a&&(c="undefined"==typeof b?y(a):x(a,b),c&&(Ic=c)),Ic._abbr}function x(a,b){return null!==b?(b.abbr=a,Lc[a]=Lc[a]||new s,Lc[a].set(b),w(a),Lc[a]):(delete Lc[a],null)}function y(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Ic;if(!c(a)){if(b=v(a))return b;a=[a]}return u(a)}function z(a,b){var c=a.toLowerCase();Mc[c]=Mc[c+"s"]=Mc[b]=a}function A(a){return"string"==typeof a?Mc[a]||Mc[a.toLowerCase()]:void 0}function B(a){var b,c,d={};for(c in a)f(a,c)&&(b=A(c),b&&(d[b]=a[c]));return d}function C(b,c){return function(d){return null!=d?(E(this,b,d),a.updateOffset(this,c),this):D(this,b)}}function D(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function E(a,b,c){return a._d["set"+(a._isUTC?"UTC":"")+b](c)}function F(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=A(a),"function"==typeof this[a])return this[a](b);return this}function G(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function H(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Qc[a]=e),b&&(Qc[b[0]]=function(){return G(e.apply(this,arguments),b[1],b[2])}),c&&(Qc[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function I(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function J(a){var b,c,d=a.match(Nc);for(b=0,c=d.length;c>b;b++)Qc[d[b]]?d[b]=Qc[d[b]]:d[b]=I(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function K(a,b){return a.isValid()?(b=L(b,a.localeData()),Pc[b]=Pc[b]||J(b),Pc[b](a)):a.localeData().invalidDate()}function L(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Oc.lastIndex=0;d>=0&&Oc.test(a);)a=a.replace(Oc,c),Oc.lastIndex=0,d-=1;return a}function M(a){return"function"==typeof a&&"[object Function]"===Object.prototype.toString.call(a)}function N(a,b,c){dd[a]=M(b)?b:function(a){return a&&c?c:b}}function O(a,b){return f(dd,a)?dd[a](b._strict,b._locale):new RegExp(P(a))}function P(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=q(a)}),c=0;c<a.length;c++)ed[a[c]]=d}function R(a,b){Q(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function S(a,b,c){null!=b&&f(ed,a)&&ed[a](b,c._a,c,a)}function T(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function U(a){return this._months[a.month()]}function V(a){return this._monthsShort[a.month()]}function W(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function X(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),T(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function Y(b){return null!=b?(X(this,b),a.updateOffset(this,!0),this):D(this,"Month")}function Z(){return T(this.year(),this.month())}function $(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[gd]<0||c[gd]>11?gd:c[hd]<1||c[hd]>T(c[fd],c[gd])?hd:c[id]<0||c[id]>24||24===c[id]&&(0!==c[jd]||0!==c[kd]||0!==c[ld])?id:c[jd]<0||c[jd]>59?jd:c[kd]<0||c[kd]>59?kd:c[ld]<0||c[ld]>999?ld:-1,j(a)._overflowDayOfYear&&(fd>b||b>hd)&&(b=hd),j(a).overflow=b),a}function _(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function aa(a,b){var c=!0;return g(function(){return c&&(_(a+"\n"+(new Error).stack),c=!1),b.apply(this,arguments)},b)}function ba(a,b){od[a]||(_(b),od[a]=!0)}function ca(a){var b,c,d=a._i,e=pd.exec(d);if(e){for(j(a).iso=!0,b=0,c=qd.length;c>b;b++)if(qd[b][1].exec(d)){a._f=qd[b][0];break}for(b=0,c=rd.length;c>b;b++)if(rd[b][1].exec(d)){a._f+=(e[6]||" ")+rd[b][0];break}d.match(ad)&&(a._f+="Z"),va(a)}else a._isValid=!1}function da(b){var c=sd.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(ca(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function ea(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fa(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function ga(a){return ha(a)?366:365}function ha(a){return a%4===0&&a%100!==0||a%400===0}function ia(){return ha(this.year())}function ja(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=Da(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ka(a){return ja(a,this._week.dow,this._week.doy).week}function la(){return this._week.dow}function ma(){return this._week.doy}function na(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function oa(a){var b=ja(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function pa(a,b,c,d,e){var f,g=6+e-d,h=fa(a,0,1+g),i=h.getUTCDay();return e>i&&(i+=7),c=null!=c?1*c:e,f=1+g+7*(b-1)-i+c,{year:f>0?a:a-1,dayOfYear:f>0?f:ga(a-1)+f}}function qa(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function ra(a,b,c){return null!=a?a:null!=b?b:c}function sa(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function ta(a){var b,c,d,e,f=[];if(!a._d){for(d=sa(a),a._w&&null==a._a[hd]&&null==a._a[gd]&&ua(a),a._dayOfYear&&(e=ra(a._a[fd],d[fd]),a._dayOfYear>ga(e)&&(j(a)._overflowDayOfYear=!0),c=fa(e,0,a._dayOfYear),a._a[gd]=c.getUTCMonth(),a._a[hd]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[id]&&0===a._a[jd]&&0===a._a[kd]&&0===a._a[ld]&&(a._nextDay=!0,a._a[id]=0),a._d=(a._useUTC?fa:ea).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[id]=24)}}function ua(a){var b,c,d,e,f,g,h;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=ra(b.GG,a._a[fd],ja(Da(),1,4).year),d=ra(b.W,1),e=ra(b.E,1)):(f=a._locale._week.dow,g=a._locale._week.doy,c=ra(b.gg,a._a[fd],ja(Da(),f,g).year),d=ra(b.w,1),null!=b.d?(e=b.d,f>e&&++d):e=null!=b.e?b.e+f:f),h=pa(c,d,e,g,f),a._a[fd]=h.year,a._dayOfYear=h.dayOfYear}function va(b){if(b._f===a.ISO_8601)return void ca(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=L(b._f,b._locale).match(Nc)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(O(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),Qc[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),S(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[id]<=12&&b._a[id]>0&&(j(b).bigHour=void 0),b._a[id]=wa(b._locale,b._a[id],b._meridiem),ta(b),$(b)}function wa(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function xa(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=m({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],va(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function ya(a){if(!a._d){var b=B(a._i);a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],ta(a)}}function za(a){var b=new n($(Aa(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Aa(a){var b=a._i,e=a._f;return a._locale=a._locale||y(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),o(b)?new n($(b)):(c(e)?xa(a):e?va(a):d(b)?a._d=b:Ba(a),a))}function Ba(b){var f=b._i;void 0===f?b._d=new Date:d(f)?b._d=new Date(+f):"string"==typeof f?da(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),ta(b)):"object"==typeof f?ya(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Ca(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,za(f)}function Da(a,b,c,d){return Ca(a,b,c,d,!1)}function Ea(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Da();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Fa(){var a=[].slice.call(arguments,0);return Ea("isBefore",a)}function Ga(){var a=[].slice.call(arguments,0);return Ea("isAfter",a)}function Ha(a){var b=B(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=y(),this._bubble()}function Ia(a){return a instanceof Ha}function Ja(a,b){H(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+G(~~(a/60),2)+b+G(~~a%60,2)})}function Ka(a){var b=(a||"").match(ad)||[],c=b[b.length-1]||[],d=(c+"").match(xd)||["-",0,0],e=+(60*d[1])+q(d[2]);return"+"===d[0]?e:-e}function La(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(o(b)||d(b)?+b:+Da(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Da(b).local()}function Ma(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Na(b,c){var d,e=this._offset||0;return null!=b?("string"==typeof b&&(b=Ka(b)),Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ma(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?bb(this,Ya(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ma(this)}function Oa(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Pa(a){return this.utcOffset(0,a)}function Qa(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ma(this),"m")),this}function Ra(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ka(this._i)),this}function Sa(a){return a=a?Da(a).utcOffset():0,(this.utcOffset()-a)%60===0}function Ta(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ua(){if("undefined"!=typeof this._isDSTShifted)return this._isDSTShifted;var a={};if(m(a,this),a=Aa(a),a._a){var b=a._isUTC?h(a._a):Da(a._a);this._isDSTShifted=this.isValid()&&r(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Va(){return!this._isUTC}function Wa(){return this._isUTC}function Xa(){return this._isUTC&&0===this._offset}function Ya(a,b){var c,d,e,g=a,h=null;return Ia(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=yd.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:q(h[hd])*c,h:q(h[id])*c,m:q(h[jd])*c,s:q(h[kd])*c,ms:q(h[ld])*c}):(h=zd.exec(a))?(c="-"===h[1]?-1:1,g={y:Za(h[2],c),M:Za(h[3],c),d:Za(h[4],c),h:Za(h[5],c),m:Za(h[6],c),s:Za(h[7],c),w:Za(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=_a(Da(g.from),Da(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ha(g),Ia(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function Za(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function $a(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function _a(a,b){var c;return b=La(b,a),a.isBefore(b)?c=$a(a,b):(c=$a(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function ab(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(ba(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Ya(c,d),bb(this,e,a),this}}function bb(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&E(b,"Date",D(b,"Date")+g*d),h&&X(b,D(b,"Month")+h*d),e&&a.updateOffset(b,g||h)}function cb(a,b){var c=a||Da(),d=La(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse";return this.format(b&&b[f]||this.localeData().calendar(f,this,Da(c)))}function db(){return new n(this)}function eb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this>+a):(c=o(a)?+a:+Da(a),c<+this.clone().startOf(b))}function fb(a,b){var c;return b=A("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+a>+this):(c=o(a)?+a:+Da(a),+this.clone().endOf(b)<c)}function gb(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function hb(a,b){var c;return b=A(b||"millisecond"),"millisecond"===b?(a=o(a)?a:Da(a),+this===+a):(c=+Da(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))}function ib(a,b,c){var d,e,f=La(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=A(b),"year"===b||"month"===b||"quarter"===b?(e=jb(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:p(e)}function jb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function kb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function lb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():K(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):K(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function mb(b){var c=K(this,b||a.defaultFormat);return this.localeData().postformat(c)}function nb(a,b){return this.isValid()?Ya({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ob(a){return this.from(Da(),a)}function pb(a,b){return this.isValid()?Ya({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function qb(a){return this.to(Da(),a)}function rb(a){var b;return void 0===a?this._locale._abbr:(b=y(a),null!=b&&(this._locale=b),this)}function sb(){return this._locale}function tb(a){switch(a=A(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function ub(a){return a=A(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function vb(){return+this._d-6e4*(this._offset||0)}function wb(){return Math.floor(+this/1e3)}function xb(){return this._offset?new Date(+this):this._d}function yb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function zb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Ab(){return k(this)}function Bb(){return g({},j(this))}function Cb(){return j(this).overflow}function Db(a,b){H(0,[a,a.length],0,b)}function Eb(a,b,c){return ja(Da([a,11,31+b-c]),b,c).week}function Fb(a){var b=ja(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")}function Gb(a){var b=ja(this,1,4).year;return null==a?b:this.add(a-b,"y")}function Hb(){return Eb(this.year(),1,4)}function Ib(){var a=this.localeData()._week;return Eb(this.year(),a.dow,a.doy)}function Jb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Kb(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Lb(a){return this._weekdays[a.day()]}function Mb(a){return this._weekdaysShort[a.day()]}function Nb(a){return this._weekdaysMin[a.day()]}function Ob(a){var b,c,d;for(this._weekdaysParse=this._weekdaysParse||[],b=0;7>b;b++)if(this._weekdaysParse[b]||(c=Da([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b}function Pb(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Kb(a,this.localeData()),this.add(a-b,"d")):b}function Qb(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Rb(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)}function Sb(a,b){H(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Tb(a,b){return b._meridiemParse}function Ub(a){return"p"===(a+"").toLowerCase().charAt(0)}function Vb(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wb(a,b){b[ld]=q(1e3*("0."+a))}function Xb(){return this._isUTC?"UTC":""}function Yb(){return this._isUTC?"Coordinated Universal Time":""}function Zb(a){return Da(1e3*a)}function $b(){return Da.apply(null,arguments).parseZone()}function _b(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.call(b,c):d}function ac(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function bc(){return this._invalidDate}function cc(a){return this._ordinal.replace("%d",a)}function dc(a){return a}function ec(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)}function fc(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)}function gc(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function hc(a,b,c,d){var e=y(),f=h().set(d,b);return e[c](f,a)}function ic(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return hc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=hc(a,f,c,e);return g}function jc(a,b){return ic(a,b,"months",12,"month")}function kc(a,b){return ic(a,b,"monthsShort",12,"month")}function lc(a,b){return ic(a,b,"weekdays",7,"day")}function mc(a,b){return ic(a,b,"weekdaysShort",7,"day")}function nc(a,b){return ic(a,b,"weekdaysMin",7,"day")}function oc(){var a=this._data;return this._milliseconds=Wd(this._milliseconds),this._days=Wd(this._days),this._months=Wd(this._months),a.milliseconds=Wd(a.milliseconds),a.seconds=Wd(a.seconds),a.minutes=Wd(a.minutes),a.hours=Wd(a.hours),a.months=Wd(a.months),a.years=Wd(a.years),this}function pc(a,b,c,d){var e=Ya(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function qc(a,b){return pc(this,a,b,1)}function rc(a,b){return pc(this,a,b,-1)}function sc(a){return 0>a?Math.floor(a):Math.ceil(a)}function tc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*sc(vc(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=p(f/1e3),i.seconds=a%60,b=p(a/60),i.minutes=b%60,c=p(b/60),i.hours=c%24,g+=p(c/24),e=p(uc(g)),h+=e,g-=sc(vc(e)),d=p(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function uc(a){return 4800*a/146097}function vc(a){return 146097*a/4800}function wc(a){var b,c,d=this._milliseconds;if(a=A(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+uc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(vc(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function xc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*q(this._months/12)}function yc(a){return function(){return this.as(a)}}function zc(a){return a=A(a),this[a+"s"]()}function Ac(a){return function(){return this._data[a]}}function Bc(){return p(this.days()/7)}function Cc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Dc(a,b,c){var d=Ya(a).abs(),e=ke(d.as("s")),f=ke(d.as("m")),g=ke(d.as("h")),h=ke(d.as("d")),i=ke(d.as("M")),j=ke(d.as("y")),k=e<le.s&&["s",e]||1===f&&["m"]||f<le.m&&["mm",f]||1===g&&["h"]||g<le.h&&["hh",g]||1===h&&["d"]||h<le.d&&["dd",h]||1===i&&["M"]||i<le.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,Cc.apply(null,k)}function Ec(a,b){return void 0===le[a]?!1:void 0===b?le[a]:(le[a]=b,!0)}function Fc(a){var b=this.localeData(),c=Dc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Gc(){var a,b,c,d=me(this._milliseconds)/1e3,e=me(this._days),f=me(this._months);a=p(d/60),b=p(a/60),d%=60,a%=60,c=p(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var Hc,Ic,Jc=a.momentProperties=[],Kc=!1,Lc={},Mc={},Nc=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Oc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pc={},Qc={},Rc=/\d/,Sc=/\d\d/,Tc=/\d{3}/,Uc=/\d{4}/,Vc=/[+-]?\d{6}/,Wc=/\d\d?/,Xc=/\d{1,3}/,Yc=/\d{1,4}/,Zc=/[+-]?\d{1,6}/,$c=/\d+/,_c=/[+-]?\d+/,ad=/Z|[+-]\d\d:?\d\d/gi,bd=/[+-]?\d+(\.\d{1,3})?/,cd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,dd={},ed={},fd=0,gd=1,hd=2,id=3,jd=4,kd=5,ld=6;H("M",["MM",2],"Mo",function(){return this.month()+1}),H("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),H("MMMM",0,0,function(a){return this.localeData().months(this,a)}),z("month","M"),N("M",Wc),N("MM",Wc,Sc),N("MMM",cd),N("MMMM",cd),Q(["M","MM"],function(a,b){b[gd]=q(a)-1}),Q(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[gd]=e:j(c).invalidMonth=a});var md="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),nd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),od={};a.suppressDeprecationWarnings=!1;var pd=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],rd=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],sd=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=aa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),H(0,["YY",2],0,function(){return this.year()%100}),H(0,["YYYY",4],0,"year"),H(0,["YYYYY",5],0,"year"),H(0,["YYYYYY",6,!0],0,"year"),z("year","y"),N("Y",_c),N("YY",Wc,Sc),N("YYYY",Yc,Uc),N("YYYYY",Zc,Vc),N("YYYYYY",Zc,Vc),Q(["YYYYY","YYYYYY"],fd),Q("YYYY",function(b,c){c[fd]=2===b.length?a.parseTwoDigitYear(b):q(b)}),Q("YY",function(b,c){c[fd]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return q(a)+(q(a)>68?1900:2e3)};var td=C("FullYear",!1);H("w",["ww",2],"wo","week"),H("W",["WW",2],"Wo","isoWeek"),z("week","w"),z("isoWeek","W"),N("w",Wc),N("ww",Wc,Sc),N("W",Wc),N("WW",Wc,Sc),R(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=q(a)});var ud={dow:0,doy:6};H("DDD",["DDDD",3],"DDDo","dayOfYear"),z("dayOfYear","DDD"),N("DDD",Xc),N("DDDD",Tc),Q(["DDD","DDDD"],function(a,b,c){c._dayOfYear=q(a)}),a.ISO_8601=function(){};var vd=aa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return this>a?this:a}),wd=aa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Da.apply(null,arguments);return a>this?this:a});Ja("Z",":"),Ja("ZZ",""),N("Z",ad),N("ZZ",ad),Q(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ka(a)});var xd=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var yd=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,zd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Ya.fn=Ha.prototype;var Ad=ab(1,"add"),Bd=ab(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var Cd=aa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});H(0,["gg",2],0,function(){return this.weekYear()%100}),H(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Db("gggg","weekYear"),Db("ggggg","weekYear"),Db("GGGG","isoWeekYear"),Db("GGGGG","isoWeekYear"),z("weekYear","gg"),z("isoWeekYear","GG"),N("G",_c),N("g",_c),N("GG",Wc,Sc),N("gg",Wc,Sc),N("GGGG",Yc,Uc),N("gggg",Yc,Uc),N("GGGGG",Zc,Vc),N("ggggg",Zc,Vc),R(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=q(a)}),R(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),H("Q",0,0,"quarter"),z("quarter","Q"),N("Q",Rc),Q("Q",function(a,b){b[gd]=3*(q(a)-1)}),H("D",["DD",2],"Do","date"),z("date","D"),N("D",Wc),N("DD",Wc,Sc),N("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),Q(["D","DD"],hd),Q("Do",function(a,b){b[hd]=q(a.match(Wc)[0],10)});var Dd=C("Date",!0);H("d",0,"do","day"),H("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),H("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),H("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),H("e",0,0,"weekday"),H("E",0,0,"isoWeekday"),z("day","d"),z("weekday","e"),z("isoWeekday","E"),N("d",Wc),N("e",Wc),N("E",Wc),N("dd",cd),N("ddd",cd),N("dddd",cd),R(["dd","ddd","dddd"],function(a,b,c){var d=c._locale.weekdaysParse(a);null!=d?b.d=d:j(c).invalidWeekday=a}),R(["d","e","E"],function(a,b,c,d){b[d]=q(a)});var Ed="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Fd="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Gd="Su_Mo_Tu_We_Th_Fr_Sa".split("_");H("H",["HH",2],0,"hour"),H("h",["hh",2],0,function(){return this.hours()%12||12}),Sb("a",!0),Sb("A",!1),z("hour","h"),N("a",Tb),N("A",Tb),N("H",Wc),N("h",Wc),N("HH",Wc,Sc),N("hh",Wc,Sc),Q(["H","HH"],id),Q(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),Q(["h","hh"],function(a,b,c){b[id]=q(a),j(c).bigHour=!0});var Hd=/[ap]\.?m?\.?/i,Id=C("Hours",!0);H("m",["mm",2],0,"minute"),z("minute","m"),N("m",Wc),N("mm",Wc,Sc),Q(["m","mm"],jd);var Jd=C("Minutes",!1);H("s",["ss",2],0,"second"),z("second","s"),N("s",Wc),N("ss",Wc,Sc),Q(["s","ss"],kd);var Kd=C("Seconds",!1);H("S",0,0,function(){return~~(this.millisecond()/100)}),H(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),H(0,["SSS",3],0,"millisecond"),H(0,["SSSS",4],0,function(){return 10*this.millisecond()}),H(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),H(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),H(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),H(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),H(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),z("millisecond","ms"),N("S",Xc,Rc),N("SS",Xc,Sc),N("SSS",Xc,Tc);var Ld;for(Ld="SSSS";Ld.length<=9;Ld+="S")N(Ld,$c);for(Ld="S";Ld.length<=9;Ld+="S")Q(Ld,Wb);var Md=C("Milliseconds",!1);H("z",0,0,"zoneAbbr"),H("zz",0,0,"zoneName");var Nd=n.prototype;Nd.add=Ad,Nd.calendar=cb,Nd.clone=db,Nd.diff=ib,Nd.endOf=ub,Nd.format=mb,Nd.from=nb,Nd.fromNow=ob,Nd.to=pb,Nd.toNow=qb,Nd.get=F,Nd.invalidAt=Cb,Nd.isAfter=eb,Nd.isBefore=fb,Nd.isBetween=gb,Nd.isSame=hb,Nd.isValid=Ab,Nd.lang=Cd,Nd.locale=rb,Nd.localeData=sb,Nd.max=wd,Nd.min=vd,Nd.parsingFlags=Bb,Nd.set=F,Nd.startOf=tb,Nd.subtract=Bd,Nd.toArray=yb,Nd.toObject=zb,Nd.toDate=xb,Nd.toISOString=lb,Nd.toJSON=lb,Nd.toString=kb,Nd.unix=wb,Nd.valueOf=vb,Nd.year=td,Nd.isLeapYear=ia,Nd.weekYear=Fb,Nd.isoWeekYear=Gb,Nd.quarter=Nd.quarters=Jb,Nd.month=Y,Nd.daysInMonth=Z,Nd.week=Nd.weeks=na,Nd.isoWeek=Nd.isoWeeks=oa,Nd.weeksInYear=Ib,Nd.isoWeeksInYear=Hb,Nd.date=Dd,Nd.day=Nd.days=Pb,Nd.weekday=Qb,Nd.isoWeekday=Rb,Nd.dayOfYear=qa,Nd.hour=Nd.hours=Id,Nd.minute=Nd.minutes=Jd,Nd.second=Nd.seconds=Kd,
Nd.millisecond=Nd.milliseconds=Md,Nd.utcOffset=Na,Nd.utc=Pa,Nd.local=Qa,Nd.parseZone=Ra,Nd.hasAlignedHourOffset=Sa,Nd.isDST=Ta,Nd.isDSTShifted=Ua,Nd.isLocal=Va,Nd.isUtcOffset=Wa,Nd.isUtc=Xa,Nd.isUTC=Xa,Nd.zoneAbbr=Xb,Nd.zoneName=Yb,Nd.dates=aa("dates accessor is deprecated. Use date instead.",Dd),Nd.months=aa("months accessor is deprecated. Use month instead",Y),Nd.years=aa("years accessor is deprecated. Use year instead",td),Nd.zone=aa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Oa);var Od=Nd,Pd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Qd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Rd="Invalid date",Sd="%d",Td=/\d{1,2}/,Ud={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Vd=s.prototype;Vd._calendar=Pd,Vd.calendar=_b,Vd._longDateFormat=Qd,Vd.longDateFormat=ac,Vd._invalidDate=Rd,Vd.invalidDate=bc,Vd._ordinal=Sd,Vd.ordinal=cc,Vd._ordinalParse=Td,Vd.preparse=dc,Vd.postformat=dc,Vd._relativeTime=Ud,Vd.relativeTime=ec,Vd.pastFuture=fc,Vd.set=gc,Vd.months=U,Vd._months=md,Vd.monthsShort=V,Vd._monthsShort=nd,Vd.monthsParse=W,Vd.week=ka,Vd._week=ud,Vd.firstDayOfYear=ma,Vd.firstDayOfWeek=la,Vd.weekdays=Lb,Vd._weekdays=Ed,Vd.weekdaysMin=Nb,Vd._weekdaysMin=Gd,Vd.weekdaysShort=Mb,Vd._weekdaysShort=Fd,Vd.weekdaysParse=Ob,Vd.isPM=Ub,Vd._meridiemParse=Hd,Vd.meridiem=Vb,w("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===q(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=aa("moment.lang is deprecated. Use moment.locale instead.",w),a.langData=aa("moment.langData is deprecated. Use moment.localeData instead.",y);var Wd=Math.abs,Xd=yc("ms"),Yd=yc("s"),Zd=yc("m"),$d=yc("h"),_d=yc("d"),ae=yc("w"),be=yc("M"),ce=yc("y"),de=Ac("milliseconds"),ee=Ac("seconds"),fe=Ac("minutes"),ge=Ac("hours"),he=Ac("days"),ie=Ac("months"),je=Ac("years"),ke=Math.round,le={s:45,m:45,h:22,d:26,M:11},me=Math.abs,ne=Ha.prototype;ne.abs=oc,ne.add=qc,ne.subtract=rc,ne.as=wc,ne.asMilliseconds=Xd,ne.asSeconds=Yd,ne.asMinutes=Zd,ne.asHours=$d,ne.asDays=_d,ne.asWeeks=ae,ne.asMonths=be,ne.asYears=ce,ne.valueOf=xc,ne._bubble=tc,ne.get=zc,ne.milliseconds=de,ne.seconds=ee,ne.minutes=fe,ne.hours=ge,ne.days=he,ne.weeks=Bc,ne.months=ie,ne.years=je,ne.humanize=Fc,ne.toISOString=Gc,ne.toString=Gc,ne.toJSON=Gc,ne.locale=rb,ne.localeData=sb,ne.toIsoString=aa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Gc),ne.lang=Cd,H("X",0,0,"unix"),H("x",0,0,"valueOf"),N("x",_c),N("X",bd),Q("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),Q("x",function(a,b,c){c._d=new Date(q(a))}),a.version="2.10.6",b(Da),a.fn=Od,a.min=Fa,a.max=Ga,a.utc=h,a.unix=Zb,a.months=jc,a.isDate=d,a.locale=w,a.invalid=l,a.duration=Ya,a.isMoment=o,a.weekdays=lc,a.parseZone=$b,a.localeData=y,a.isDuration=Ia,a.monthsShort=kc,a.weekdaysMin=nc,a.defineLocale=x,a.weekdaysShort=mc,a.normalizeUnits=A,a.relativeTimeThreshold=Ec;var oe=a;return oe});
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return g({type:O.error,iconClass:m().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=m()),v=e("#"+t.containerId),v.length?v:(n&&(v=d(t)),v)}function o(e,t,n){return g({type:O.info,iconClass:m().iconClasses.info,message:e,optionsOverride:n,title:t})}function s(e){C=e}function i(e,t,n){return g({type:O.success,iconClass:m().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return g({type:O.warning,iconClass:m().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e,t){var o=m();v||n(o),u(e,o,t)||l(o)}function c(t){var o=m();return v||n(o),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function l(t){for(var n=v.children(),o=n.length-1;o>=0;o--)u(e(n[o]),t)}function u(t,n,o){var s=!(!o||!o.force)&&o.force;return!(!t||!s&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0)}function d(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function f(e){C&&C(e)}function g(t){function o(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(){c(),u(),d(),p(),g(),C(),l(),i()}function i(){var e="";switch(t.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}I.attr("aria-live",e)}function a(){E.closeOnHover&&I.hover(H,D),!E.onclick&&E.tapToDismiss&&I.click(b),E.closeButton&&j&&j.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),E.onCloseClick&&E.onCloseClick(e),b(!0)}),E.onclick&&I.click(function(e){E.onclick(e),b()})}function r(){I.hide(),I[E.showMethod]({duration:E.showDuration,easing:E.showEasing,complete:E.onShown}),E.timeOut>0&&(k=setTimeout(b,E.timeOut),F.maxHideTime=parseFloat(E.timeOut),F.hideEta=(new Date).getTime()+F.maxHideTime,E.progressBar&&(F.intervalId=setInterval(x,10)))}function c(){t.iconClass&&I.addClass(E.toastClass).addClass(y)}function l(){E.newestOnTop?v.prepend(I):v.append(I)}function u(){if(t.title){var e=t.title;E.escapeHtml&&(e=o(t.title)),M.append(e).addClass(E.titleClass),I.append(M)}}function d(){if(t.message){var e=t.message;E.escapeHtml&&(e=o(t.message)),B.append(e).addClass(E.messageClass),I.append(B)}}function p(){E.closeButton&&(j.addClass(E.closeClass).attr("role","button"),I.prepend(j))}function g(){E.progressBar&&(q.addClass(E.progressClass),I.prepend(q))}function C(){E.rtl&&I.addClass("rtl")}function O(e,t){if(e.preventDuplicates){if(t.message===w)return!0;w=t.message}return!1}function b(t){var n=t&&E.closeMethod!==!1?E.closeMethod:E.hideMethod,o=t&&E.closeDuration!==!1?E.closeDuration:E.hideDuration,s=t&&E.closeEasing!==!1?E.closeEasing:E.hideEasing;if(!e(":focus",I).length||t)return clearTimeout(F.intervalId),I[n]({duration:o,easing:s,complete:function(){h(I),clearTimeout(k),E.onHidden&&"hidden"!==P.state&&E.onHidden(),P.state="hidden",P.endTime=new Date,f(P)}})}function D(){(E.timeOut>0||E.extendedTimeOut>0)&&(k=setTimeout(b,E.extendedTimeOut),F.maxHideTime=parseFloat(E.extendedTimeOut),F.hideEta=(new Date).getTime()+F.maxHideTime)}function H(){clearTimeout(k),F.hideEta=0,I.stop(!0,!0)[E.showMethod]({duration:E.showDuration,easing:E.showEasing})}function x(){var e=(F.hideEta-(new Date).getTime())/F.maxHideTime*100;q.width(e+"%")}var E=m(),y=t.iconClass||E.iconClass;if("undefined"!=typeof t.optionsOverride&&(E=e.extend(E,t.optionsOverride),y=t.optionsOverride.iconClass||y),!O(E,t)){T++,v=n(E,!0);var k=null,I=e("<div/>"),M=e("<div/>"),B=e("<div/>"),q=e("<div/>"),j=e(E.closeHtml),F={intervalId:null,hideEta:null,maxHideTime:null},P={toastId:T,state:"visible",startTime:new Date,options:E,map:t};return s(),r(),a(),f(P),E.debug&&console&&console.log(P),I}}function m(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),w=void 0))}var v,C,w,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:c,error:t,getContainer:n,info:o,options:{},subscribe:s,success:i,version:"2.1.3",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
//# sourceMappingURL=toastr.js.map

/* jshint browser: true */
/* global define: false, module: false */

// AMD shim
(function(root, factory) {

    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory();
    } else {
        root.simpleStorage = factory();
    }

}(this, function() {

    'use strict';

    var VERSION = '0.2.1';

    /* This is the object, that holds the cached values */
    var _storage = false;

    /* How much space does the storage take */
    var _storage_size = 0;

    var _storage_available = false;
    var _ttl_timeout = null;

    var _lsStatus = 'OK';
    var LS_NOT_AVAILABLE = 'LS_NOT_AVAILABLE';
    var LS_DISABLED = 'LS_DISABLED';
    var LS_QUOTA_EXCEEDED = 'LS_QUOTA_EXCEEDED';

    // This method might throw as it touches localStorage and doing so
    // can be prohibited in some environments
    function _init() {

        // this method throws if localStorage is not usable, otherwise returns true
        _storage_available = _checkAvailability();

        // Load data from storage
        _loadStorage();

        // remove dead keys
        _handleTTL();

        // start listening for changes
        _setupUpdateObserver();

        // handle cached navigation
        if ('addEventListener' in window) {
            window.addEventListener('pageshow', function(event) {
                if (event.persisted) {
                    _reloadData();
                }
            }, false);
        }

        _storage_available = true;
    }

    /**
     * Sets up a storage change observer
     */
    function _setupUpdateObserver() {
        if ('addEventListener' in window) {
            window.addEventListener('storage', _reloadData, false);
        } else {
            document.attachEvent('onstorage', _reloadData);
        }
    }

    /**
     * Reload data from storage when needed
     */
    function _reloadData() {
        try {
            _loadStorage();
        } catch (E) {
            _storage_available = false;
            return;
        }
        _handleTTL();
    }

    function _loadStorage() {
        var source = localStorage.getItem('simpleStorage');

        try {
            _storage = JSON.parse(source) || {};
        } catch (E) {
            _storage = {};
        }

        _storage_size = _get_storage_size();
    }

    function _save() {
        try {
            localStorage.setItem('simpleStorage', JSON.stringify(_storage));
            _storage_size = _get_storage_size();
        } catch (E) {
            return _formatError(E);
        }
        return true;
    }

    function _get_storage_size() {
        var source = localStorage.getItem('simpleStorage');
        return source ? String(source).length : 0;
    }

    function _handleTTL() {
        var curtime, i, len, expire, keys, nextExpire = Infinity,
            expiredKeysCount = 0;

        clearTimeout(_ttl_timeout);

        if (!_storage || !_storage.__simpleStorage_meta || !_storage.__simpleStorage_meta.TTL) {
            return;
        }

        curtime = +new Date();
        keys = _storage.__simpleStorage_meta.TTL.keys || [];
        expire = _storage.__simpleStorage_meta.TTL.expire || {};

        for (i = 0, len = keys.length; i < len; i++) {
            if (expire[keys[i]] <= curtime) {
                expiredKeysCount++;
                delete _storage[keys[i]];
                delete expire[keys[i]];
            } else {
                if (expire[keys[i]] < nextExpire) {
                    nextExpire = expire[keys[i]];
                }
                break;
            }
        }

        // set next check
        if (nextExpire !== Infinity) {
            _ttl_timeout = setTimeout(_handleTTL, Math.min(nextExpire - curtime, 0x7FFFFFFF));
        }

        // remove expired from TTL list and save changes
        if (expiredKeysCount) {
            keys.splice(0, expiredKeysCount);

            _cleanMetaObject();
            _save();
        }
    }

    function _setTTL(key, ttl) {
        var curtime = +new Date(),
            i, len, added = false;

        ttl = Number(ttl) || 0;

        // Set TTL value for the key
        if (ttl !== 0) {
            // If key exists, set TTL
            if (_storage.hasOwnProperty(key)) {

                if (!_storage.__simpleStorage_meta) {
                    _storage.__simpleStorage_meta = {};
                }

                if (!_storage.__simpleStorage_meta.TTL) {
                    _storage.__simpleStorage_meta.TTL = {
                        expire: {},
                        keys: []
                    };
                }

                _storage.__simpleStorage_meta.TTL.expire[key] = curtime + ttl;

                // find the expiring key in the array and remove it and all before it (because of sort)
                if (_storage.__simpleStorage_meta.TTL.expire.hasOwnProperty(key)) {
                    for (i = 0, len = _storage.__simpleStorage_meta.TTL.keys.length; i < len; i++) {
                        if (_storage.__simpleStorage_meta.TTL.keys[i] === key) {
                            _storage.__simpleStorage_meta.TTL.keys.splice(i);
                        }
                    }
                }

                // add key to keys array preserving sort (soonest first)
                for (i = 0, len = _storage.__simpleStorage_meta.TTL.keys.length; i < len; i++) {
                    if (_storage.__simpleStorage_meta.TTL.expire[_storage.__simpleStorage_meta.TTL.keys[i]] > (curtime + ttl)) {
                        _storage.__simpleStorage_meta.TTL.keys.splice(i, 0, key);
                        added = true;
                        break;
                    }
                }

                // if not added in previous loop, add here
                if (!added) {
                    _storage.__simpleStorage_meta.TTL.keys.push(key);
                }
            } else {
                return false;
            }
        } else {
            // Remove TTL if set
            if (_storage && _storage.__simpleStorage_meta && _storage.__simpleStorage_meta.TTL) {

                if (_storage.__simpleStorage_meta.TTL.expire.hasOwnProperty(key)) {
                    delete _storage.__simpleStorage_meta.TTL.expire[key];
                    for (i = 0, len = _storage.__simpleStorage_meta.TTL.keys.length; i < len; i++) {
                        if (_storage.__simpleStorage_meta.TTL.keys[i] === key) {
                            _storage.__simpleStorage_meta.TTL.keys.splice(i, 1);
                            break;
                        }
                    }
                }

                _cleanMetaObject();
            }
        }

        // schedule next TTL check
        clearTimeout(_ttl_timeout);
        if (_storage && _storage.__simpleStorage_meta && _storage.__simpleStorage_meta.TTL && _storage.__simpleStorage_meta.TTL.keys.length) {
            _ttl_timeout = setTimeout(_handleTTL, Math.min(Math.max(_storage.__simpleStorage_meta.TTL.expire[_storage.__simpleStorage_meta.TTL.keys[0]] - curtime, 0), 0x7FFFFFFF));
        }

        return true;
    }

    function _cleanMetaObject() {
        var updated = false,
            hasProperties = false,
            i;

        if (!_storage || !_storage.__simpleStorage_meta) {
            return updated;
        }

        // If nothing to TTL, remove the object
        if (_storage.__simpleStorage_meta.TTL && !_storage.__simpleStorage_meta.TTL.keys.length) {
            delete _storage.__simpleStorage_meta.TTL;
            updated = true;
        }

        // If meta object is empty, remove it
        for (i in _storage.__simpleStorage_meta) {
            if (_storage.__simpleStorage_meta.hasOwnProperty(i)) {
                hasProperties = true;
                break;
            }
        }

        if (!hasProperties) {
            delete _storage.__simpleStorage_meta;
            updated = true;
        }

        return updated;
    }

    /**
     * Checks if localStorage is available or throws an error
     */
    function _checkAvailability() {
        var err;
        var items = 0;

        // Firefox sets localStorage to 'null' if support is disabled
        // IE might go crazy if quota is exceeded and start treating it as 'unknown'
        if (window.localStorage === null || typeof window.localStorage === 'unknown') {
            err = new Error('localStorage is disabled');
            err.code = LS_DISABLED;
            throw err;
        }

        // There doesn't seem to be any indication about localStorage support
        if (!window.localStorage) {
            err = new Error('localStorage not supported');
            err.code = LS_NOT_AVAILABLE;
            throw err;
        }

        try {
            items = window.localStorage.length;
        } catch (E) {
            throw _formatError(E);
        }

        try {
            // we try to set a value to see if localStorage is really usable or not
            window.localStorage.setItem('__simpleStorageInitTest', Date.now().toString(16));
            window.localStorage.removeItem('__simpleStorageInitTest');
        } catch (E) {
            if (items) {
                // there is already some data stored, so this might mean that storage is full
                throw _formatError(E);
            } else {
                // we do not have any data stored and we can't add anything new
                // so we are most probably in Private Browsing mode where
                // localStorage is turned off in some browsers (max storage size is 0)
                err = new Error('localStorage is disabled');
                err.code = LS_DISABLED;
                throw err;
            }
        }

        return true;
    }

    function _formatError(E) {
        var err;

        // No more storage:
        // Mozilla: NS_ERROR_DOM_QUOTA_REACHED, code 1014
        // WebKit: QuotaExceededError/QUOTA_EXCEEDED_ERR, code 22
        // IE number -2146828281: Out of memory
        // IE number -2147024882: Not enough storage is available to complete this operation
        if (E.code === 22 || E.code === 1014 || [-2147024882, -2146828281, -21474675259].indexOf(E.number) > 0) {
            err = new Error('localStorage quota exceeded');
            err.code = LS_QUOTA_EXCEEDED;
            return err;
        }

        // SecurityError, localStorage is turned off
        if (E.code === 18 || E.code === 1000) {
            err = new Error('localStorage is disabled');
            err.code = LS_DISABLED;
            return err;
        }

        // We are trying to access something from an object that is either null or undefined
        if (E.name === 'TypeError') {
            err = new Error('localStorage is disabled');
            err.code = LS_DISABLED;
            return err;
        }

        return E;
    }

    // Sets value for _lsStatus
    function _checkError(err) {
        if (!err) {
            _lsStatus = 'OK';
            return err;
        }

        switch (err.code) {
            case LS_NOT_AVAILABLE:
            case LS_DISABLED:
            case LS_QUOTA_EXCEEDED:
                _lsStatus = err.code;
                break;
            default:
                _lsStatus = err.code || err.number || err.message || err.name;
        }

        return err;
    }

    ////////////////////////// PUBLIC INTERFACE /////////////////////////

    try {
        _init();
    } catch (E) {
        _checkError(E);
    }

    return {

        version: VERSION,

        status: _lsStatus,

        canUse: function() {
            return _lsStatus === 'OK' && !!_storage_available;
        },

        set: function(key, value, options) {
            if (key === '__simpleStorage_meta') {
                return false;
            }

            if (!_storage) {
                return false;
            }

            // undefined values are deleted automatically
            if (typeof value === 'undefined') {
                return this.deleteKey(key);
            }

            options = options || {};

            // Check if the value is JSON compatible (and remove reference to existing objects/arrays)
            try {
                value = JSON.parse(JSON.stringify(value));
            } catch (E) {
                return _formatError(E);
            }

            _storage[key] = value;

            _setTTL(key, options.TTL || 0);

            return _save();
        },

        hasKey: function(key) {
            if (!_storage) {
                return false;
            }

            if (_storage.hasOwnProperty(key) && key !== '__simpleStorage_meta') {
                return true;
            }

            return false;
        },

        get: function(key) {
            if (!_storage) {
                return false;
            }

            if (_storage.hasOwnProperty(key) && key !== '__simpleStorage_meta') {
                // TTL value for an existing key is either a positive number or an Infinity
                if (this.getTTL(key)) {
                    return _storage[key];
                }
            }
        },

        deleteKey: function(key) {

            if (!_storage) {
                return false;
            }

            if (key in _storage) {
                delete _storage[key];

                _setTTL(key, 0);

                return _save();
            }

            return false;
        },

        setTTL: function(key, ttl) {
            if (!_storage) {
                return false;
            }

            _setTTL(key, ttl);

            return _save();
        },

        getTTL: function(key) {
            var ttl;

            if (!_storage) {
                return false;
            }

            if (_storage.hasOwnProperty(key)) {
                if (_storage.__simpleStorage_meta &&
                    _storage.__simpleStorage_meta.TTL &&
                    _storage.__simpleStorage_meta.TTL.expire &&
                    _storage.__simpleStorage_meta.TTL.expire.hasOwnProperty(key)) {

                    ttl = Math.max(_storage.__simpleStorage_meta.TTL.expire[key] - (+new Date()) || 0, 0);

                    return ttl || false;
                } else {
                    return Infinity;
                }
            }

            return false;
        },

        flush: function() {
            if (!_storage) {
                return false;
            }

            _storage = {};
            try {
                localStorage.removeItem('simpleStorage');
                return true;
            } catch (E) {
                return _formatError(E);
            }
        },

        index: function() {
            if (!_storage) {
                return false;
            }

            var index = [],
                i;
            for (i in _storage) {
                if (_storage.hasOwnProperty(i) && i !== '__simpleStorage_meta') {
                    index.push(i);
                }
            }
            return index;
        },

        storageSize: function() {
            return _storage_size;
        }
    };

}));

/* Note that this file is hacked to add i18n support via jquery.i18n.js. Please retain the hack when upgrading. */
/*! Select2 4.0.0 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(n=n.slice(0,n.length-1),a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){return n.apply(b,v.call(arguments,0).concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice;this.listeners=this.listeners||{},a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),this.$results.append(d)},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")});var f=e.filter("[aria-selected=true]");f.length>0?f.first().trigger("mouseenter"):e.first().trigger("mouseenter")})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";{a(h)}this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b){var c=this,d=b.id+"-results";this.$results.attr("id",d),b.on("results:all",function(a){c.clear(),c.append(a.data),b.isOpen()&&c.setClasses()}),b.on("results:append",function(a){c.append(a.data),b.isOpen()&&c.setClasses()}),b.on("query",function(a){c.showLoading(a)}),b.on("select",function(){b.isOpen()&&c.setClasses()}),b.on("unselect",function(){b.isOpen()&&c.setClasses()}),b.on("open",function(){c.$results.attr("aria-expanded","true"),c.$results.attr("aria-hidden","false"),c.setClasses(),c.ensureHighlightVisible()}),b.on("close",function(){c.$results.attr("aria-expanded","false"),c.$results.attr("aria-hidden","true"),c.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=c.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=c.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?c.trigger("close"):c.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=c.getHighlightedResults(),b=c.$results.find("[aria-selected]"),d=b.index(a);if(0!==d){var e=d-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=c.$results.offset().top,h=f.offset().top,i=c.$results.scrollTop()+(h-g);0===e?c.$results.scrollTop(0):0>h-g&&c.$results.scrollTop(i)}}),b.on("results:next",function(){var a=c.getHighlightedResults(),b=c.$results.find("[aria-selected]"),d=b.index(a),e=d+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=c.$results.offset().top+c.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=c.$results.scrollTop()+h-g;0===e?c.$results.scrollTop(0):h>g&&c.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){c.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=c.$results.scrollTop(),d=c.$results.get(0).scrollHeight-c.$results.scrollTop()+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&d<=c.$results.height();e?(c.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(c.$results.scrollTop(c.$results.get(0).scrollHeight-c.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var d=a(this),e=d.data("data");return"true"===d.attr("aria-selected")?void(c.options.get("multiple")?c.trigger("unselect",{originalEvent:b,data:e}):c.trigger("close")):void c.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(){var b=a(this).data("data");c.getHighlightedResults().removeClass("select2-results__option--highlighted"),c.trigger("results:focus",{data:b,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a){var b=this,d=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){b.trigger("focus",a)}),this.$selection.on("blur",function(a){b.trigger("blur",a)}),this.$selection.on("keydown",function(a){b.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){b.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){b.update(a.data)}),a.on("open",function(){b.$selection.attr("aria-expanded","true"),b.$selection.attr("aria-owns",d),b._attachCloseHandler(a)}),a.on("close",function(){b.$selection.attr("aria-expanded","false"),b.$selection.removeAttr("aria-activedescendant"),b.$selection.removeAttr("aria-owns"),b.$selection.focus(),b._detachCloseHandler(a)}),a.on("enable",function(){b.$selection.attr("tabindex",b._tabindex)}),a.on("disable",function(){b.$selection.attr("tabindex","-1")})},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c){function d(){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},d.prototype.bind=function(a){var b=this;d.__super__.bind.apply(this,arguments);var c=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",c),this.$selection.attr("aria-labelledby",c),this.$selection.on("mousedown",function(a){1===a.which&&b.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(){}),this.$selection.on("blur",function(){}),a.on("selection:update",function(a){b.update(a.data)})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a){var b=this.options.get("templateSelection"),c=this.options.get("escapeMarkup");return c(b(a))},d.prototype.selectionContainer=function(){return a("<span></span>")},d.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.display(b),d=this.$selection.find(".select2-selection__rendered");d.empty().append(c),d.prop("title",b.title||b.text)},d}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(){var b=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){b.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(c){var d=a(this),e=d.parent(),f=e.data("data");b.trigger("unselect",{originalEvent:c,data:f})})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a){var b=this.options.get("templateSelection"),c=this.options.get("escapeMarkup");return c(b(a))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.display(e),g=this.selectionContainer();g.append(f),g.prop("title",e.title||e.text),g.data("data",e),b.push(g)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(){function a(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},a.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},a}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle")}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus()}),b.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val(""),e.$search.focus()}),b.on("enable",function(){e.$search.prop("disabled",!1)}),b.on("disable",function(){e.$search.prop("disabled",!0)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e.trigger("blur",a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}}),this.$selection.on("input",".select2-search--inline",function(){e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input",".select2-search--inline",function(a){e.handleSearch(a)})},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.trigger("open"),this.$search.val(b.text+" ")},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a){var b=this;this.container=a,a.on("select",function(a){b.select(a.data)}),a.on("unselect",function(a){b.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};
if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=(c.extend(!0,{},l,j),this.option(l));k.replaceWith(m)}else{var n=this.option(j);if(j.children){var o=this.convertToOptions(j.children);b.appendMany(n,o)}h.push(n)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(b,c){this.ajaxOptions=this._applyDefaults(c.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),a.__super__.constructor.call(this,b,c)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return{q:a.term}},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url(a)),"function"==typeof f.data&&(f.data=f.data(a)),this.ajaxOptions.delay&&""!==a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");if(void 0!==f&&(this.createTag=f),b.call(this,c,d),a.isArray(e))for(var g=0;g<e.length;g++){var h=e[g],i=this._normalizeItem(h),j=this.option(i);this.$element.append(j)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(){var b=(this._lastTag,this.$element.find("option[data-select2-tag]"));b.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(a,b,c){function d(a){e.select(a)}var e=this;b.term=b.term||"";var f=this.tokenizer(b,this.options,d);f.term!==b.term&&(this.$search.length&&(this.$search.val(f.term),this.$search.focus()),b.term=f.term),a.call(this,b,c)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);e(m),g=g.substr(h+1)||"",h=0}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.position=function(){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a){function b(){}return b.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},b.prototype.handleSearch=function(){if(!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},b.prototype.showSearch=function(){return!0},b}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="option load-more" role="treeitem"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(a,b,c){this.$dropdownParent=c.get("dropdownParent")||document.body,a.call(this,b,c)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c){var d=this,e="scroll.select2."+c.id,f="resize.select2."+c.id,g="orientationchange.select2."+c.id,h=this.$container.parents().filter(b.hasScroll);h.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),h.on(e,function(){var b=a(this).data("select2-scroll-position");a(this).scrollTop(b.y)}),a(window).on(e+" "+f+" "+g,function(){d._positionDropdown(),d._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c){var d="scroll.select2."+c.id,e="resize.select2."+c.id,f="orientationchange.select2."+c.id,g=this.$container.parents().filter(b.hasScroll);g.off(d),a(window).off(d+" "+e+" "+f)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=(this.$container.position(),this.$container.offset());f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom};c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){this.$dropdownContainer.width();var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(){d._handleSelectOnClose()})},a.prototype._handleSelectOnClose=function(){var a=this.getHighlightedResults();a.length<1||this.trigger("select",{data:a.data("data")})},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close")},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c=$.i18n('select2-max-chars',b);return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c=$.i18n('select2-min-chars',b);return c},loadingMore:function(){return $.i18n('select2-loading')},maximumSelected:function(a){var b=$.i18n('select2-max-items', a.maximum);return 1!=a.maximum&&(b+=""),b},noResults:function(){return $.i18n('select2-no-results')},searching:function(){}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend({},this.defaults,l),null==l.dataAdapter){if(l.dataAdapter=null!=l.ajax?o:null!=l.data?n:m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.selectionAdapter=l.multiple?e:d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(this.options.dir=a.prop("dir")?a.prop("dir"):a.closest("[dir]").prop("dir")?a.closest("[dir]").prop("dir"):"ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this._sync=c.bind(this._syncAttributes,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._sync);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._sync)}),this._observer.observe(this.$element[0],{attributes:!0,subtree:!1})):this.$element[0].addEventListener&&this.$element[0].addEventListener("DOMAttrModified",b._sync,!1)},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("focus",function(){a.$container.addClass("select2-container--focus")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open"),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ENTER?(a.trigger("results:select"),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle"),b.preventDefault()):c===d.UP?(a.trigger("results:previous"),b.preventDefault()):c===d.DOWN?(a.trigger("results:next"),b.preventDefault()):(c===d.ESC||c===d.TAB)&&(a.close(),b.preventDefault()):(c===d.ENTER||c===d.SPACE||(c===d.DOWN||c===d.UP)&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable")):this.trigger("enable")},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||(this.trigger("query",{}),this.trigger("open"))},e.prototype.close=function(){this.isOpen()&&this.trigger("close")},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._sync),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&this.$element[0].removeEventListener("DOMAttrModified",this._sync,!1),this._sync=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery.select2",["jquery","require","./select2/core","./select2/defaults"],function(a,b,c,d){if(b("jquery.mousewheel"),null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){{var d=a.extend({},b,!0);new c(a(this),d)}}),this;if("string"==typeof b){var d=this.data("select2");null==d&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2.");var f=Array.prototype.slice.call(arguments,1),g=d[b](f);return a.inArray(b,e)>-1?this:g}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),b.define("jquery.mousewheel",["jquery"],function(a){return a}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/*!
 * Datepicker for Bootstrap v1.7.0-dev (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(a){return function(){return this[a].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;d>c;c++)if(0<=this[c].valueOf()-b&&this[c].valueOf()-b<864e5)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){a.data(b,"datepicker",this),this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=a(r.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(a,b){return Number(b)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.setViewMode(this.o.startView),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(b){return a.each(r.viewModes,function(c,d){return b===c||-1!==a.inArray(b,d.names)?(b=c,!1):void 0}),b},_resolveDaysOfWeek:function(b){return a.isArray(b)||(b=b.split(/[,\s]*/)),a.map(b,Number)},_check_template:function(c){try{if(c===b||""===c)return!1;if((c.match(/[<>]/g)||[]).length<=0)return!0;var d=a(c);return d.length>0}catch(e){return!1}},_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView=this._resolveViewName(e.startView),e.minViewMode=this._resolveViewName(e.minViewMode),e.maxViewMode=this._resolveViewName(e.maxViewMode),e.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,e.startView)),e.multidate!==!0&&(e.multidate=Number(e.multidate)||!1,e.multidate!==!1&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);e.startDate!==-(1/0)&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language,e.assumeNearbyYear):e.startDate=-(1/0)),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=this._resolveDaysOfWeek(e.daysOfWeekDisabled||[]),e.daysOfWeekHighlighted=this._resolveDaysOfWeek(e.daysOfWeekHighlighted||[]),e.datesDisabled=e.datesDisabled||[],a.isArray(e.datesDisabled)||(e.datesDisabled=e.datesDisabled.split(",")),e.datesDisabled=a.map(e.datesDisabled,function(a){return r.parseDate(a,g,e.language,e.assumeNearbyYear)});var h=String(e.orientation).toLowerCase().split(/\s+/g),i=e.orientation.toLowerCase();if(h=a.grep(h,function(a){return/^auto|left|right|top|bottom$/.test(a)}),e.orientation={x:"auto",y:"auto"},i&&"auto"!==i)if(1===h.length)switch(h[0]){case"top":case"bottom":e.orientation.y=h[0];break;case"left":case"right":e.orientation.x=h[0]}else i=a.grep(h,function(a){return/^left|right$/.test(a)}),e.orientation.x=i[0]||"auto",i=a.grep(h,function(a){return/^top|bottom$/.test(a)}),e.orientation.y=i[0]||"auto";else;if(e.defaultViewDate){var j=e.defaultViewDate.year||(new Date).getFullYear(),k=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=c(j,k,l)}else e.defaultViewDate=d()},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.inputField.length?this._events=[[this.inputField,b],[this.component,{click:a.proxy(this.show,this)}]]:this._events=[[this.element,{click:a.proxy(this.show,this),keydown:a.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[this.picker,".prev, .next",{click:a.proxy(this.navArrowsClick,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{"mousedown touchstart":a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,viewMode:this.viewMode,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){return this.inputField.prop("disabled")||this.inputField.prop("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this)},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){return a&&new Date(a.getTime()+6e4*a.getTimezoneOffset())},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&c(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate())},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return a!==b?new Date(a):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,a.map(b,this._utc_to_local)),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),remove:f("destroy"),setValue:function(){var a=this.getFormattedDate();return this.inputField.val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){return this._process_options({datesDisabled:a}),this.update(),this},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container),f=e.width(),g="body"===this.o.container?a(document).scrollTop():e.scrollTop(),h=e.offset(),i=[];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==b&&i.push(parseInt(b))});var j=Math.max.apply(Math,i)+this.o.zIndexOffset,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;"body"!==this.o.container&&(o+=g),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>f?(this.picker.addClass("datepicker-orient-right"),n+=m-b):this.picker.addClass("datepicker-orient-left");var p,q=this.o.orientation.y;if("auto"===q&&(p=-g+o-c,q=0>p?"bottom":"top"),this.picker.addClass("datepicker-orient-"+q),"top"===q?o-=c+parseInt(this.picker.css("padding-top")):o+=l,this.o.rtl){var r=f-(n+m);this.picker.css({top:o,right:r,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),c=a.grep(c,a.proxy(function(a){return!this.dateWithinRange(a)||!a},this),!0),this.dates.replace(c),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate,d?(this.setValue(),this.element.change()):this.dates.length&&String(b)!==String(this.dates)&&d&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&b.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){var b=this.o.weekStart,c="<tr>";for(this.o.calendarWeeks&&(c+='<th class="cw">&#160;</th>');b<this.o.weekStart+7;)c+='<th class="dow',-1!==a.inArray(b,this.o.daysOfWeekDisabled)&&(c+=" disabled"),c+='">'+q[this.o.language].daysMin[b++%7]+"</th>";c+="</tr>",this.picker.find(".datepicker-days thead").append(c)},fillMonths:function(){for(var a=this._utc_to_local(this.viewDate),b="",c=0;12>c;){var d=a&&a.getMonth()===c?" focused":"";b+='<span class="month'+d+'">'+q[this.o.language].monthsShort[c++]+"</span>"}this.picker.find(".datepicker-months td").html(b)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],f=this.viewDate.getUTCFullYear(),g=this.viewDate.getUTCMonth(),h=d();return b.getUTCFullYear()<f||b.getUTCFullYear()===f&&b.getUTCMonth()<g?c.push("old"):(b.getUTCFullYear()>f||b.getUTCFullYear()===f&&b.getUTCMonth()>g)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&e(b,h)&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),this.dateWithinRange(b)||c.push("disabled"),this.dateIsDisabled(b)&&c.push("disabled","disabled-date"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},_fill_yearsView:function(c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;for(k="",l=this.picker.find(c),m=parseInt(g/e,10)*e,o=parseInt(h/f,10)*f,p=parseInt(i/f,10)*f,n=a.map(this.dates,function(a){return parseInt(a.getUTCFullYear()/f,10)*f}),l.find(".datepicker-switch").text(m+"-"+(m+9*f)),q=m-f,r=-1;11>r;r+=1)s=[d],t=null,-1===r?s.push("old"):10===r&&s.push("new"),-1!==a.inArray(q,n)&&s.push("active"),(o>q||q>p)&&s.push("disabled"),q===this.viewDate.getFullYear()&&s.push("focused"),j!==a.noop&&(u=j(new Date(q,0,1)),u===b?u={}:"boolean"==typeof u?u={enabled:u}:"string"==typeof u&&(u={classes:u}),u.enabled===!1&&s.push("disabled"),u.classes&&(s=s.concat(u.classes.split(/\s+/))),u.tooltip&&(t=u.tooltip)),k+='<span class="'+s.join(" ")+'"'+(t?' title="'+t+'"':"")+">"+q+"</span>",q+=f;l.find("td").html(k)},fill:function(){var d,e,f=new Date(this.viewDate),g=f.getUTCFullYear(),h=f.getUTCMonth(),i=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),j=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),k=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,m=q[this.o.language].today||q.en.today||"",n=q[this.o.language].clear||q.en.clear||"",o=q[this.o.language].titleFormat||q.en.titleFormat;if(!isNaN(g)&&!isNaN(h)){this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f,o,this.o.language)),this.picker.find("tfoot .today").text(m).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(n).toggle(this.o.clearBtn!==!1),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();var p=c(g,h,0),s=p.getUTCDate();p.setUTCDate(s-(p.getUTCDay()-this.o.weekStart+7)%7);var t=new Date(p);p.getUTCFullYear()<100&&t.setUTCFullYear(p.getUTCFullYear()),t.setUTCDate(t.getUTCDate()+42),t=t.valueOf();for(var u,v,w=[];p.valueOf()<t;){if(u=p.getUTCDay(),u===this.o.weekStart&&(w.push("<tr>"),this.o.calendarWeeks)){var x=new Date(+p+(this.o.weekStart-u-7)%7*864e5),y=new Date(Number(x)+(11-x.getUTCDay())%7*864e5),z=new Date(Number(z=c(y.getUTCFullYear(),0,1))+(11-z.getUTCDay())%7*864e5),A=(y-z)/864e5/7+1;w.push('<td class="cw">'+A+"</td>")}v=this.getClassNames(p),v.push("day"),this.o.beforeShowDay!==a.noop&&(e=this.o.beforeShowDay(this._utc_to_local(p)),e===b?e={}:"boolean"==typeof e?e={enabled:e}:"string"==typeof e&&(e={classes:e}),e.enabled===!1&&v.push("disabled"),e.classes&&(v=v.concat(e.classes.split(/\s+/))),e.tooltip&&(d=e.tooltip)),v=a.isFunction(a.uniqueSort)?a.uniqueSort(v):a.unique(v),w.push('<td class="'+v.join(" ")+'"'+(d?' title="'+d+'"':"")+(this.o.dateCells?' data-date="'+p.getTime().toString()+'"':"")+">"+p.getUTCDate()+"</td>"),d=null,u===this.o.weekEnd&&w.push("</tr>"),p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(w.join(""));var B=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",C=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?B:g).end().find("tbody span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===g&&C.eq(b.getUTCMonth()).addClass("active")}),(i>g||g>k)&&C.addClass("disabled"),g===i&&C.slice(0,j).addClass("disabled"),g===k&&C.slice(l+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var D=this;a.each(C,function(c,d){var e=new Date(g,c,1),f=D.o.beforeShowMonth(e);f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),f.enabled!==!1||a(d).hasClass("disabled")||a(d).addClass("disabled"),f.classes&&a(d).addClass(f.classes),f.tooltip&&a(d).prop("title",f.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,1,g,i,k,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,10,g,i,k,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,100,g,i,k,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var a,b,c=new Date(this.viewDate),d=c.getUTCFullYear(),e=c.getUTCMonth();switch(this.viewMode){case 0:a=this.o.startDate!==-(1/0)&&d<=this.o.startDate.getUTCFullYear()&&e<=this.o.startDate.getUTCMonth(),b=this.o.endDate!==1/0&&d>=this.o.endDate.getUTCFullYear()&&e>=this.o.endDate.getUTCMonth();break;case 1:case 2:case 3:case 4:a=this.o.startDate!==-(1/0)&&d<=this.o.startDate.getUTCFullYear(),b=this.o.endDate!==1/0&&d>=this.o.endDate.getUTCFullYear()}this.picker.find(".prev").toggleClass("disabled",a),this.picker.find(".next").toggleClass("disabled",b)}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h,i;e=a(b.target),e.hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),e.hasClass("today")&&!e.hasClass("day")&&(this.setViewMode(0),this._setDate(d(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("day")&&(g=Number(e.text()),h=this.viewDate.getUTCFullYear(),i=this.viewDate.getUTCMonth(),(e.hasClass("old")||e.hasClass("new"))&&(f=e.hasClass("old")?-1:1,i=(i+f+12)%12,(-1===f&&11===i||1===f&&0===i)&&(h+=f,this._trigger("changeYear",this.viewDate)),this._trigger("changeMonth",this.viewDate)),this._setDate(c(h,i,g))),(e.hasClass("month")||e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),g=1,1===this.viewMode?(i=e.parent().find("span").index(e),h=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(i)):(i=0,h=Number(e.text()),this.viewDate.setUTCFullYear(h)),this._trigger(r.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(c(h,i,g)):(this.setViewMode(this.viewMode-1),this.fill()))),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},navArrowsClick:function(b){var c=a(b.target),d=c.hasClass("prev")?-1:1;0!==this.viewMode&&(d*=12*r.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,d),this._trigger(r.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),b&&"view"!==b||(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),c=(c+12)%12;else{for(var j=0;i>j;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void((40===a.keyCode||27===a.keyCode)&&(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,0===this.viewMode?a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"),c&&this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"),c&&this._trigger("changeMonth",this.viewDate)):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")):1===this.viewMode?((38===a.keyCode||40===a.keyCode)&&(b=4*b),c=this.moveAvailableDate(e,b,"moveMonth")):2===this.viewMode&&((38===a.keyCode||40===a.keyCode)&&(b=4*b),c=this.moveAvailableDate(e,b,"moveYear")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}d&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))},setViewMode:function(a){this.viewMode=a,this.picker.children("div").hide().filter(".datepicker-"+r.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}};var l=function(b,c){a.data(b,"datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,this.keepEmptyValues=c.keepEmptyValues,delete c.keepEmptyValues,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a.data(b,"datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(c){if(!this.updating){this.updating=!0;var d=a.data(c.target,"datepicker");if(d!==b){var e=d.getUTCDate(),f=this.keepEmptyValues,g=a.inArray(c.target,this.inputs),h=g-1,i=g+1,j=this.inputs.length;if(-1!==g){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b!==d&&f||b.setUTCDate(e)}),e<this.dates[h])for(;h>=0&&e<this.dates[h];)this.pickers[h--].setUTCDate(e);else if(e>this.dates[i])for(;j>i&&e>this.dates[i];)this.pickers[i++].setUTCDate(e);this.updateDates(),delete this.updating}}}},destroy:function(){a.map(this.pickers,function(a){a.destroy()}),delete this.element.data().datepicker},remove:f("destroy")};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,beforeShowDecade:a.noop,beforeShowCentury:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,dateCells:!1,title:"",templates:{leftArrow:"&laquo;",rightArrow:"&raquo;"}},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\x00").split("\x00"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(e,f,g,h){function i(a,b){return b===!0&&(b=10),100>a&&(a+=2e3,a>(new Date).getFullYear()+b&&(a-=100)),a}function j(){var a=this.slice(0,l[o].length),b=l[o].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!e)return b;if(e instanceof Date)return e;if("string"==typeof f&&(f=r.parseFormat(f)),f.toValue)return f.toValue(e,f,g);var l,m,n,o,p,s={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},t={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(e in t&&(e=t[e]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(e)){for(l=e.match(/([\-+]\d+)([dmwy])/gi),e=new Date,o=0;o<l.length;o++)m=l[o].match(/([\-+]\d+)([dmwy])/i),n=Number(m[1]),p=s[m[2].toLowerCase()],e=k.prototype[p](e,n);return c(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}l=e&&e.match(this.nonpunctuation)||[],e=new Date;var u,v,w={},x=["yyyy","yy","M","MM","m","mm","d","dd"],y={yyyy:function(a,b){return a.setUTCFullYear(h?i(b,h):b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};y.yy=y.yyyy,y.M=y.MM=y.mm=y.m,y.dd=y.d,e=d();var z=f.parts.slice();if(l.length!==z.length&&(z=a(z).filter(function(b,c){return-1!==a.inArray(c,x)}).toArray()),l.length===z.length){var A;for(o=0,A=z.length;A>o;o++){if(u=parseInt(l[o],10),m=z[o],isNaN(u))switch(m){case"MM":v=a(q[g].months).filter(j),u=a.inArray(v[0],q[g].months)+1;break;case"M":v=a(q[g].monthsShort).filter(j),u=a.inArray(v[0],q[g].monthsShort)+1}w[m]=u}var B,C;for(o=0;o<x.length;o++)C=x[o],C in w&&!isNaN(w[C])&&(B=new Date(e),y[C](B,w[C]),isNaN(B)||(e=B))}return e},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",
a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.7.0-dev",a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @file Core JavaScript extensions, either to native JS or a library.
 *   Polyfills have their own file [polyfills.js](global.html#polyfills)
 * @author MusikAnimal
 * @copyright 2016 MusikAnimal
 * @license MIT License: https://opensource.org/licenses/MIT
 */

String.prototype.descore = function () {
  return this.replace(/_/g, ' ');
};
String.prototype.score = function () {
  return this.replace(/ /g, '_');
};
String.prototype.upcase = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.escape = function () {
  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };

  return this.replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
};

// remove duplicate values from Array
Array.prototype.unique = function () {
  return this.filter(function (value, index, array) {
    return array.indexOf(value) === index;
  });
};

// Improve syntax to emulate mixins in ES6
window.mix = function (superclass) {
  return new MixinBuilder(superclass);
};

var MixinBuilder = function () {
  /**
   * set super class instance variable
   * @param  {class} superclass
   */

  function MixinBuilder(superclass) {
    _classCallCheck(this, MixinBuilder);

    this.superclass = superclass;
  }

  /**
   * blend given classes with current superclass
   * @param  {...class} mixins
   * @returns {Array} classes
   */


  _createClass(MixinBuilder, [{
    key: 'with',
    value: function _with() {
      for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
        mixins[_key] = arguments[_key];
      }

      return mixins.reduce(function (c, mixin) {
        return mixin(c);
      }, this.superclass);
    }
  }]);

  return MixinBuilder;
}();

$.whenAll = function () {
  var dfd = $.Deferred(),
      counter = 0,
      state = 'resolved',
      promises = new (Function.prototype.bind.apply(Array, [null].concat(Array.prototype.slice.call(arguments))))();

  var resolveOrReject = function resolveOrReject() {
    if (this.state === 'rejected') {
      state = 'rejected';
    }
    counter++;

    if (counter === promises.length) {
      dfd[state === 'rejected' ? 'reject' : 'resolve']();
    }
  };

  $.each(promises, function (_i, promise) {
    promise.always(resolveOrReject);
  });

  return dfd.promise();
};

},{}],2:[function(require,module,exports){
'use strict';

/**
 * @file Polyfills for users who refuse to upgrade their browsers
 *   Most code is adapted from [MDN](https://developer.mozilla.org)
 */

// Array.includes function polyfill
// This is not a full implementation, just a shorthand to indexOf !== -1
if (!Array.prototype.includes) {
  Array.prototype.includes = function (search) {
    return this.indexOf(search) !== -1;
  };
}

// String.includes function polyfill
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

// Object.assign
if (typeof Object.assign !== 'function') {
  (function () {
    Object.assign = function (target) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}

// ChildNode.remove
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function () {
    this.parentNode.removeChild(this);
  };
}

// String.startsWith
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

// Array.of
if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments);
  };
}

// Array.find
if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value = void 0;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

// Array.fill
if (!Array.prototype.fill) {
  Array.prototype.fill = function (value) {

    // Steps 1-2.
    if (this === null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Steps 3-5.
    var len = O.length >>> 0;

    // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0;

    // Step 8.
    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);

    // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;

    // Step 11.
    var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

    // Step 12.
    while (k < final) {
      O[k] = value;
      k++;
    }

    // Step 13.
    return O;
  };
}

},{}],3:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file Shared code amongst all apps (Pageviews, Topviews, Langviews, Siteviews, Massviews, Redirect Views)
 * @author MusikAnimal, Kaldari
 * @copyright 2016 MusikAnimal
 * @license MIT License: https://opensource.org/licenses/MIT
 */

/** class-less files with global overrides */
require('./core_extensions');
require('./polyfills');

var PvConfig = require('./pv_config');
var siteMap = require('./site_map');
var siteDomains = Object.keys(siteMap).map(function (key) {
  return siteMap[key];
});

/** Pv class, contains code amongst all apps (Pageviews, Topviews, Langviews, Siteviews, Massviews, Redirect Views) */

var Pv = function (_PvConfig) {
  _inherits(Pv, _PvConfig);

  /**
   * Main constructor for each app, giving way to the parent constructor in list_helpers or chart_helpers
   * @param {Object} appConfig - as defined in the app's config.js
   * @override
   */

  function Pv(appConfig) {
    _classCallCheck(this, Pv);

    /** assign initial class properties */

    var _this = _possibleConstructorReturn(this, (Pv.__proto__ || Object.getPrototypeOf(Pv)).call(this, appConfig));

    var defaults = _this.config.defaults,
        validParams = _this.config.validParams;
    _this.config = Object.assign({}, _this.config, appConfig);
    _this.config.defaults = Object.assign({}, defaults, appConfig.defaults);
    _this.config.validParams = Object.assign({}, validParams, appConfig.validParams);

    _this.colorsStyleEl = undefined;
    _this.storage = {}; // used as fallback when localStorage is not supported

    ['localizeDateFormat', 'numericalFormatting', 'bezierCurve', 'autocomplete', 'autoLogDetection', 'beginAtZero', 'rememberChart'].forEach(function (setting) {
      _this[setting] = _this.getFromLocalStorage('pageviews-settings-' + setting) || _this.config.defaults[setting];
    });
    _this.setupSettingsModal();

    _this.params = null;
    _this.siteInfo = {};

    /**
     * tracking of elapsed time
     * @type {null|Date}
     */
    _this.processStart = null;

    _this.debug = location.search.includes('debug=true') || location.host === 'localhost';

    /** redirect to production if debug flag isn't given */
    if (location.pathname.includes('-test') && !location.search.includes('debug=true')) {
      var _ret = function () {
        var actualPathName = location.pathname.replace(/-test\/?/, '');
        $('body').html('\n        <p class=\'tm text-center\'>This is the staging environment!</p>\n        <p class=\'tm text-center\'>To use the staging app, append <code>debug=true</code> to the URL</p>\n        <p class=\'tm text-center\'>Otherwise, please update your links to use\n          <strong><a href=\'' + actualPathName + '\'>https://' + location.host + actualPathName + '</a></strong>\n        </p>\n        <p class=\'text-center\' style=\'margin-top:50px; font-weight:bold\'>\n          Redirecting you to the production ' + document.title + ' in\n          <span class=\'countdown\'>10</span>...\n        </p>\n      ');

        var count = 10;

        setInterval(function () {
          if (--count === 0) {
            return document.location = actualPathName;
          }
          $('.countdown').text(count);
        }, 1000);

        return {
          v: _possibleConstructorReturn(_this)
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }

    /** assign app instance to window for debugging on local environment */
    if (_this.debug) {
      window.app = _this;
    } else {
      _this.splash();
    }

    /**
     * Load translations then initialize the app.
     * Each app has it's own initialize method.
     * Make sure we load 'en.json' as a fallback
     */
    var messagesToLoad = _defineProperty({}, i18nLang, '/pageviews/messages/' + i18nLang + '.json');
    if (i18nLang !== 'en') {
      messagesToLoad.en = '/pageviews/messages/en.json';
    }
    $.i18n({
      locale: i18nLang
    }).load(messagesToLoad).then(_this.initialize.bind(_this));

    /** set up toastr config. The duration may be overriden later */
    toastr.options = {
      closeButton: true,
      debug: location.host === 'localhost',
      newestOnTop: false,
      progressBar: false,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      onclick: null,
      showDuration: '300',
      hideDuration: '1000',
      timeOut: '5000',
      extendedTimeOut: '3000',
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
      toastClass: 'alert',
      iconClasses: {
        error: 'alert-danger',
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning'
      }
    };
    return _this;
  }

  /**
   * Add a site notice (Bootstrap alert)
   * @param {Object} opts - as follows:
   * {
   *   message: '',       // {String} message - message to show
   *   level: 'warning',  // one of 'success', 'info', 'warning', 'error'
   *   timeout: 10,       // {Number} [timeout] - in seconds. Use 0 to show indefinitely
   *   title: ''          // {String} [title] - will appear in bold and in front of the message
   * }
   */


  _createClass(Pv, [{
    key: 'toast',
    value: function toast(opts) {
      var title = opts.title ? '<strong>' + opts.title + '</strong> ' : '';
      opts = Object.assign({
        message: title + opts.message,
        level: 'warning',
        timeout: 10
      }, opts);

      toastr.options.timeOut = opts.timeout * 1000;
      toastr[opts.level](opts.message);
    }

    /**
     * Show success message to user via this.toast
     * @param {String} message
     * @param {Number} [timeout] - in seconds
     */

  }, {
    key: 'toastSuccess',
    value: function toastSuccess(message) {
      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      this.toast({ message: message, level: 'success', timeout: timeout });
    }

    /**
     * Show info message to user via this.toast
     * @param {String} message
     * @param {Number} [timeout] - in seconds
     */

  }, {
    key: 'toastInfo',
    value: function toastInfo(message) {
      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      this.toast({ message: message, level: 'info', timeout: timeout });
    }

    /**
     * Show warning to user via this.toast
     * @param {String} message
     * @param {Number} [timeout] - in seconds
     */

  }, {
    key: 'toastWarn',
    value: function toastWarn(message) {
      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      this.toast({ message: message, level: 'warning', timeout: timeout });
    }

    /**
     * Show an error to user via this.toast
     * @param {String} message
     * @param {Number} [timeout] - in seconds
     */

  }, {
    key: 'toastError',
    value: function toastError(message) {
      var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      this.toast({ message: message, level: 'error', timeout: timeout });
    }

    /**
     * Add site notice for invalid parameter
     * @param {String} param - name of parameter
     */

  }, {
    key: 'addInvalidParamNotice',
    value: function addInvalidParamNotice(param) {
      var docLink = '<a href=\'/' + this.app + '/url_structure\'>' + $.i18n('documentation').toLowerCase() + '</a>';
      this.toastError('\n      <strong>' + $.i18n('invalid-params') + '</strong>\n      ' + $.i18n('param-error-3', param, docLink) + '\n    ');
    }

    /**
     * Validate the date range of given params
     *   and throw errors as necessary and/or set defaults
     * @param {Object} params - as returned by this.parseQueryString()
     * @returns {Boolean} true if there were no errors, false otherwise
     */

  }, {
    key: 'validateDateRange',
    value: function validateDateRange(params) {
      if (params.range) {
        if (!this.setSpecialRange(params.range)) {
          this.addInvalidParamNotice('range');
          this.setSpecialRange(this.config.defaults.dateRange);
        }
      } else if (params.start) {
        var dateRegex = /\d{4}-\d{2}-\d{2}$/;

        // first set defaults
        var startDate = void 0,
            endDate = void 0;

        // then check format of start and end date
        if (params.start && dateRegex.test(params.start)) {
          startDate = moment(params.start);
        } else {
          this.addInvalidParamNotice('start');
          return false;
        }
        if (params.end && dateRegex.test(params.end)) {
          endDate = moment(params.end);
        } else {
          this.addInvalidParamNotice('end');
          return false;
        }

        // check if they are outside the valid range or if in the wrong order
        if (startDate < this.config.minDate || endDate < this.config.minDate) {
          this.toastError('\n          <strong>' + $.i18n('invalid-params') + '</strong>\n          ' + $.i18n('param-error-1', moment(this.config.minDate).format(this.dateFormat)) + '\n        ');
          return false;
        } else if (startDate > endDate) {
          this.toastError('\n          <strong>' + $.i18n('param-error-2') + '</strong>\n          ' + $.i18n('invalid-params') + '\n        ');
          return false;
        }

        /** directly assign startDate before calling setEndDate so events will be fired once */
        this.daterangepicker.startDate = startDate;
        this.daterangepicker.setEndDate(endDate);
      } else {
        this.setSpecialRange(this.config.defaults.dateRange);
      }

      return true;
    }

    /**
     * Clear inline messages used to show non-critical errors
     */

  }, {
    key: 'clearMessages',
    value: function clearMessages() {
      $('.message-container').html('');
    }

    /**
     * Get date format to use based on settings
     * @returns {string} date format to passed to parser
     */

  }, {
    key: 'dbName',


    /**
     * Get the database name of the given projet
     * @param  {String} project - with or without .org
     * @return {String} database name
     */
    value: function dbName(project) {
      return Object.keys(siteMap).find(function (key) {
        return siteMap[key] === project.replace(/\.org$/, '') + '.org';
      });
    }

    /**
     * Force download of given data, or open in a new tab if HTML5 <a> download attribute is not supported
     * @param {String} data - Raw data prepended with data type, e.g. "data:text/csv;charset=utf-8,my data..."
     * @param {String} extension - the file extension to use
     */

  }, {
    key: 'downloadData',
    value: function downloadData(data, extension) {
      var encodedUri = encodeURI(data);

      // create HTML5 download element and force click so we can specify a filename
      var link = document.createElement('a');
      if (typeof link.download === 'string') {
        document.body.appendChild(link); // Firefox requires the link to be in the body

        var filename = this.getExportFilename() + '.' + extension;
        link.download = filename;
        link.href = encodedUri;
        link.click();

        document.body.removeChild(link); // remove the link when done
      } else {
          window.open(encodedUri); // open in new tab if download isn't supported (*cough* Safari)
        }
    }

    /**
     * Fill in values within settings modal with what's in the session object
     */

  }, {
    key: 'fillInSettings',
    value: function fillInSettings() {
      var _this2 = this;

      $.each($('#settings-modal input'), function (index, el) {
        if (el.type === 'checkbox') {
          el.checked = _this2[el.name] === 'true';
        } else {
          el.checked = _this2[el.name] === el.value;
        }
      });
    }

    /**
     * Add focus to Select2 input field
     */

  }, {
    key: 'focusSelect2',
    value: function focusSelect2() {
      $('.select2-selection').trigger('click');
      $('.select2-search__field').focus();
    }

    /**
     * Format number based on current settings, e.g. localize with comma delimeters
     * @param {number|string} num - number to format
     * @returns {string} formatted number
     */

  }, {
    key: 'formatNumber',
    value: function formatNumber(num) {
      var numericalFormatting = this.getFromLocalStorage('pageviews-settings-numericalFormatting') || this.config.defaults.numericalFormatting;
      if (numericalFormatting === 'true') {
        return this.n(num);
      } else {
        return num;
      }
    }

    /**
     * show every other number in the y-axis, called from PvConfig
     * @param  {Number} num - numerical value
     * @return {String|null} formatted number or null if an even number
     */

  }, {
    key: 'formatYAxisNumber',
    value: function formatYAxisNumber(num) {
      if (num % 1 === 0) {
        return this.formatNumber(num);
      } else {
        return null;
      }
    }

    /**
     * Gets the date headings as strings - i18n compliant
     * @param {boolean} localized - whether the dates should be localized per browser language
     * @returns {Array} the date headings as strings
     */

  }, {
    key: 'getDateHeadings',
    value: function getDateHeadings() {
      var localized = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var dateHeadings = [],
          endDate = moment(this.daterangepicker.endDate).add(1, 'day');

      for (var date = moment(this.daterangepicker.startDate); date.isBefore(endDate); date.add(1, 'day')) {
        if (localized) {
          dateHeadings.push(date.format(this.dateFormat));
        } else {
          dateHeadings.push(date.format('YYYY-MM-DD'));
        }
      }
      return dateHeadings;
    }

    /**
     * Get the explanded wiki URL given the page name
     * This should be used instead of getPageURL when you want to chain query string parameters
     *
     * @param {string} page name
     * @returns {string} URL for the page
     */

  }, {
    key: 'getExpandedPageURL',
    value: function getExpandedPageURL(page) {
      return '//' + this.project + '.org/w/index.php?title=' + encodeURIComponent(page.score()).replace(/'/, escape);
    }

    /**
     * Get full link to page history for given page and project
     * @param  {string} page - page to link to
     * @param  {string} content - what to put as the link text
     * @return {string} HTML markup
     */

  }, {
    key: 'getHistoryLink',
    value: function getHistoryLink(page, content) {
      return '<a href="' + this.getExpandedPageURL(page) + '&action=history" target="_blank">\n        ' + content + '\n      </a>';
    }

    /**
     * Get informative filename without extension to be used for export options
     * @return {string} filename without an extension
     */

  }, {
    key: 'getExportFilename',
    value: function getExportFilename() {
      var startDate = this.daterangepicker.startDate.startOf('day').format('YYYYMMDD'),
          endDate = this.daterangepicker.endDate.startOf('day').format('YYYYMMDD');
      return this.app + '-' + startDate + '-' + endDate;
    }

    /**
     * Get a full link for the given page and project
     * @param  {string} page - page to link to
     * @param  {string} [project] - project link, defaults to `this.project`
     * @return {string} HTML markup
     */

  }, {
    key: 'getPageLink',
    value: function getPageLink(page, project) {
      return '<a target="_blank" href="' + this.getPageURL(page, project) + '">' + page.descore().escape() + '</a>';
    }

    /**
     * Get the wiki URL given the page name
     * @param {string} page - page name
     * @param {string} [project] - project, or this.project (for chart-based apps)
     * @returns {string} URL for the page
     */

  }, {
    key: 'getPageURL',
    value: function getPageURL(page) {
      var project = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.project;

      return '//' + project.replace(/\.org$/, '').escape() + '.org/wiki/' + encodeURIComponent(page.score());
    }

    /**
     * Get the wiki URL given the page name
     *
     * @param {string} site - site name (e.g. en.wikipedia.org)
     * @returns {string} URL for the site
     */

  }, {
    key: 'getSiteLink',
    value: function getSiteLink(site) {
      return '<a target="_blank" href="//' + site.replace(/\.org$/, '') + '.org">' + site + '</a>';
    }

    /**
     * Get the project name (without the .org)
     *
     * @returns {boolean} lang.projectname
     */

  }, {
    key: 'getLocaleDateString',


    /**
     * get date format for the browser's locale
     * @return {String} format to be passed to moment.format()
     */
    value: function getLocaleDateString() {
      if (!navigator.language) {
        return this.config.defaults.dateFormat;
      }

      var formats = {
        'ar-sa': 'DD/MM/YY',
        'bg-bg': 'DD.M.YYYY',
        'ca-es': 'DD/MM/YYYY',
        'zh-tw': 'YYYY/M/D',
        'cs-cz': 'D.M.YYYY',
        'da-dk': 'DD-MM-YYYY',
        'de-de': 'DD.MM.YYYY',
        'el-gr': 'D/M/YYYY',
        'en-us': 'M/D/YYYY',
        'fi-fi': 'D.M.YYYY',
        'fr-fr': 'DD/MM/YYYY',
        'he-il': 'DD/MM/YYYY',
        'hu-hu': 'YYYY. MM. DD.',
        'is-is': 'D.M.YYYY',
        'it-it': 'DD/MM/YYYY',
        'ja-jp': 'YYYY/MM/DD',
        'ko-kr': 'YYYY-MM-DD',
        'nl-nl': 'D-M-YYYY',
        'nb-no': 'DD.MM.YYYY',
        'pl-pl': 'YYYY-MM-DD',
        'pt-br': 'D/M/YYYY',
        'ro-ro': 'DD.MM.YYYY',
        'ru-ru': 'DD.MM.YYYY',
        'hr-hr': 'D.M.YYYY',
        'sk-sk': 'D. M. YYYY',
        'sq-al': 'YYYY-MM-DD',
        'sv-se': 'YYYY-MM-DD',
        'th-th': 'D/M/YYYY',
        'tr-tr': 'DD.MM.YYYY',
        'ur-pk': 'DD/MM/YYYY',
        'id-id': 'DD/MM/YYYY',
        'uk-ua': 'DD.MM.YYYY',
        'be-by': 'DD.MM.YYYY',
        'sl-si': 'D.M.YYYY',
        'et-ee': 'D.MM.YYYY',
        'lv-lv': 'YYYY.MM.DD.',
        'lt-lt': 'YYYY.MM.DD',
        'fa-ir': 'MM/DD/YYYY',
        'vi-vn': 'DD/MM/YYYY',
        'hy-am': 'DD.MM.YYYY',
        'az-latn-az': 'DD.MM.YYYY',
        'eu-es': 'YYYY/MM/DD',
        'mk-mk': 'DD.MM.YYYY',
        'af-za': 'YYYY/MM/DD',
        'ka-ge': 'DD.MM.YYYY',
        'fo-fo': 'DD-MM-YYYY',
        'hi-in': 'DD-MM-YYYY',
        'ms-my': 'DD/MM/YYYY',
        'kk-kz': 'DD.MM.YYYY',
        'ky-kg': 'DD.MM.YY',
        'sw-ke': 'M/d/YYYY',
        'uz-latn-uz': 'DD/MM YYYY',
        'tt-ru': 'DD.MM.YYYY',
        'pa-in': 'DD-MM-YY',
        'gu-in': 'DD-MM-YY',
        'ta-in': 'DD-MM-YYYY',
        'te-in': 'DD-MM-YY',
        'kn-in': 'DD-MM-YY',
        'mr-in': 'DD-MM-YYYY',
        'sa-in': 'DD-MM-YYYY',
        'mn-mn': 'YY.MM.DD',
        'gl-es': 'DD/MM/YY',
        'kok-in': 'DD-MM-YYYY',
        'syr-sy': 'DD/MM/YYYY',
        'dv-mv': 'DD/MM/YY',
        'ar-iq': 'DD/MM/YYYY',
        'zh-cn': 'YYYY/M/D',
        'de-ch': 'DD.MM.YYYY',
        'en-gb': 'DD/MM/YYYY',
        'es-mx': 'DD/MM/YYYY',
        'fr-be': 'D/MM/YYYY',
        'it-ch': 'DD.MM.YYYY',
        'nl-be': 'D/MM/YYYY',
        'nn-no': 'DD.MM.YYYY',
        'pt-pt': 'DD-MM-YYYY',
        'sr-latn-cs': 'D.M.YYYY',
        'sv-fi': 'D.M.YYYY',
        'az-cyrl-az': 'DD.MM.YYYY',
        'ms-bn': 'DD/MM/YYYY',
        'uz-cyrl-uz': 'DD.MM.YYYY',
        'ar-eg': 'DD/MM/YYYY',
        'zh-hk': 'D/M/YYYY',
        'de-at': 'DD.MM.YYYY',
        'en-au': 'D/MM/YYYY',
        'es-es': 'DD/MM/YYYY',
        'fr-ca': 'YYYY-MM-DD',
        'sr-cyrl-cs': 'D.M.YYYY',
        'ar-ly': 'DD/MM/YYYY',
        'zh-sg': 'D/M/YYYY',
        'de-lu': 'DD.MM.YYYY',
        'en-ca': 'DD/MM/YYYY',
        'es-gt': 'DD/MM/YYYY',
        'fr-ch': 'DD.MM.YYYY',
        'ar-dz': 'DD-MM-YYYY',
        'zh-mo': 'D/M/YYYY',
        'de-li': 'DD.MM.YYYY',
        'en-nz': 'D/MM/YYYY',
        'es-cr': 'DD/MM/YYYY',
        'fr-lu': 'DD/MM/YYYY',
        'ar-ma': 'DD-MM-YYYY',
        'en-ie': 'DD/MM/YYYY',
        'es-pa': 'MM/DD/YYYY',
        'fr-mc': 'DD/MM/YYYY',
        'ar-tn': 'DD-MM-YYYY',
        'en-za': 'YYYY/MM/DD',
        'es-do': 'DD/MM/YYYY',
        'ar-om': 'DD/MM/YYYY',
        'en-jm': 'DD/MM/YYYY',
        'es-ve': 'DD/MM/YYYY',
        'ar-ye': 'DD/MM/YYYY',
        'en-029': 'MM/DD/YYYY',
        'es-co': 'DD/MM/YYYY',
        'ar-sy': 'DD/MM/YYYY',
        'en-bz': 'DD/MM/YYYY',
        'es-pe': 'DD/MM/YYYY',
        'ar-jo': 'DD/MM/YYYY',
        'en-tt': 'DD/MM/YYYY',
        'es-ar': 'DD/MM/YYYY',
        'ar-lb': 'DD/MM/YYYY',
        'en-zw': 'M/D/YYYY',
        'es-ec': 'DD/MM/YYYY',
        'ar-kw': 'DD/MM/YYYY',
        'en-ph': 'M/D/YYYY',
        'es-cl': 'DD-MM-YYYY',
        'ar-ae': 'DD/MM/YYYY',
        'es-uy': 'DD/MM/YYYY',
        'ar-bh': 'DD/MM/YYYY',
        'es-py': 'DD/MM/YYYY',
        'ar-qa': 'DD/MM/YYYY',
        'es-bo': 'DD/MM/YYYY',
        'es-sv': 'DD/MM/YYYY',
        'es-hn': 'DD/MM/YYYY',
        'es-ni': 'DD/MM/YYYY',
        'es-pr': 'DD/MM/YYYY',
        'am-et': 'D/M/YYYY',
        'tzm-latn-dz': 'DD-MM-YYYY',
        'iu-latn-ca': 'D/MM/YYYY',
        'sma-no': 'DD.MM.YYYY',
        'mn-mong-cn': 'YYYY/M/D',
        'gd-gb': 'DD/MM/YYYY',
        'en-my': 'D/M/YYYY',
        'prs-af': 'DD/MM/YY',
        'bn-bd': 'DD-MM-YY',
        'wo-sn': 'DD/MM/YYYY',
        'rw-rw': 'M/D/YYYY',
        'qut-gt': 'DD/MM/YYYY',
        'sah-ru': 'MM.DD.YYYY',
        'gsw-fr': 'DD/MM/YYYY',
        'co-fr': 'DD/MM/YYYY',
        'oc-fr': 'DD/MM/YYYY',
        'mi-nz': 'DD/MM/YYYY',
        'ga-ie': 'DD/MM/YYYY',
        'se-se': 'YYYY-MM-DD',
        'br-fr': 'DD/MM/YYYY',
        'smn-fi': 'D.M.YYYY',
        'moh-ca': 'M/D/YYYY',
        'arn-cl': 'DD-MM-YYYY',
        'ii-cn': 'YYYY/M/D',
        'dsb-de': 'D. M. YYYY',
        'ig-ng': 'D/M/YYYY',
        'kl-gl': 'DD-MM-YYYY',
        'lb-lu': 'DD/MM/YYYY',
        'ba-ru': 'DD.MM.YY',
        'nso-za': 'YYYY/MM/DD',
        'quz-bo': 'DD/MM/YYYY',
        'yo-ng': 'D/M/YYYY',
        'ha-latn-ng': 'D/M/YYYY',
        'fil-ph': 'M/D/YYYY',
        'ps-af': 'DD/MM/YY',
        'fy-nl': 'D-M-YYYY',
        'ne-np': 'M/D/YYYY',
        'se-no': 'DD.MM.YYYY',
        'iu-cans-ca': 'D/M/YYYY',
        'sr-latn-rs': 'D.M.YYYY',
        'si-lk': 'YYYY-MM-DD',
        'sr-cyrl-rs': 'D.M.YYYY',
        'lo-la': 'DD/MM/YYYY',
        'km-kh': 'YYYY-MM-DD',
        'cy-gb': 'DD/MM/YYYY',
        'bo-cn': 'YYYY/M/D',
        'sms-fi': 'D.M.YYYY',
        'as-in': 'DD-MM-YYYY',
        'ml-in': 'DD-MM-YY',
        'en-in': 'DD-MM-YYYY',
        'or-in': 'DD-MM-YY',
        'bn-in': 'DD-MM-YY',
        'tk-tm': 'DD.MM.YY',
        'bs-latn-ba': 'D.M.YYYY',
        'mt-mt': 'DD/MM/YYYY',
        'sr-cyrl-me': 'D.M.YYYY',
        'se-fi': 'D.M.YYYY',
        'zu-za': 'YYYY/MM/DD',
        'xh-za': 'YYYY/MM/DD',
        'tn-za': 'YYYY/MM/DD',
        'hsb-de': 'D. M. YYYY',
        'bs-cyrl-ba': 'D.M.YYYY',
        'tg-cyrl-tj': 'DD.MM.yy',
        'sr-latn-ba': 'D.M.YYYY',
        'smj-no': 'DD.MM.YYYY',
        'rm-ch': 'DD/MM/YYYY',
        'smj-se': 'YYYY-MM-DD',
        'quz-ec': 'DD/MM/YYYY',
        'quz-pe': 'DD/MM/YYYY',
        'hr-ba': 'D.M.YYYY.',
        'sr-latn-me': 'D.M.YYYY',
        'sma-se': 'YYYY-MM-DD',
        'en-sg': 'D/M/YYYY',
        'ug-cn': 'YYYY-M-D',
        'sr-cyrl-ba': 'D.M.YYYY',
        'es-us': 'M/D/YYYY'
      };

      var key = navigator.language.toLowerCase();
      return formats[key] || this.config.defaults.dateFormat;
    }

    /**
     * Get a value from localStorage, using a temporary storage if localStorage is not supported
     * @param {string} key - key for the value to retrieve
     * @returns {Mixed} stored value
     */

  }, {
    key: 'getFromLocalStorage',
    value: function getFromLocalStorage(key) {
      // See if localStorage is supported and enabled
      try {
        return localStorage.getItem(key);
      } catch (err) {
        return storage[key];
      }
    }

    /**
     * Get URL to file a report on Meta, preloaded with permalink
     * @param {String} [phabPaste] URL to auto-generated error report on Phabricator
     * @param {String} [titleOverride] goes in the title input field of the wiki editing interface
     * @return {String} URL
     */

  }, {
    key: 'getBugReportURL',
    value: function getBugReportURL(phabPaste, titleOverride) {
      var reportURL = 'https://meta.wikimedia.org/w/index.php?title=Talk:Pageviews_Analysis&action=edit' + ('&section=new&preloadtitle=' + (titleOverride || this.app.upcase() + ' bug report'));

      if (phabPaste) {
        return reportURL + '&preload=Talk:Pageviews_Analysis/Preload&preloadparams[]=' + phabPaste;
      } else {
        return reportURL;
      }
    }

    /**
     * Get general information about a project, such as namespaces, title of the main page, etc.
     * Data returned by the api is also stored in this.siteInfo
     * @param {String} project - project such as en.wikipedia (with or without .org)
     * @returns {Deferred} promise resolving with siteinfo,
     *   along with any other cached siteinfo for other projects
     */

  }, {
    key: 'fetchSiteInfo',
    value: function fetchSiteInfo(project) {
      var _this3 = this;

      project = project.replace(/\.org$/, '');
      var dfd = $.Deferred(),
          cacheKey = 'pageviews-siteinfo-' + project;

      if (this.siteInfo[project]) return dfd.resolve(this.siteInfo);

      // use cached site info if present
      if (simpleStorage.hasKey(cacheKey)) {
        this.siteInfo[project] = simpleStorage.get(cacheKey);
        dfd.resolve(this.siteInfo);
      } else {
        // otherwise fetch siteinfo and store in cache
        $.ajax({
          url: 'https://' + project + '.org/w/api.php',
          data: {
            action: 'query',
            meta: 'siteinfo',
            siprop: 'general|namespaces',
            format: 'json'
          },
          dataType: 'jsonp'
        }).done(function (data) {
          _this3.siteInfo[project] = data.query;

          // cache for one week (TTL is in milliseconds)
          simpleStorage.set(cacheKey, _this3.siteInfo[project], { TTL: 1000 * 60 * 60 * 24 * 7 });

          dfd.resolve(_this3.siteInfo);
        }).fail(function (data) {
          dfd.reject(data);
        });
      }

      return dfd;
    }

    /**
     * Helper to get siteinfo from this.siteInfo for given project, with or without .org
     * @param {String} project - project name, with or without .org
     * @returns {Object|undefined} site information if present
     */

  }, {
    key: 'getSiteInfo',
    value: function getSiteInfo(project) {
      return this.siteInfo[project.replace(/\.org$/, '')];
    }

    /**
     * Get month that would be shown in Topviews based on start date or end date, as specified
     * @param {Boolean} [useStartDate] - if false, the end date will be used
     * @return {moment} date within the month that will be used
     */

  }, {
    key: 'getTopviewsMonth',
    value: function getTopviewsMonth() {
      var useStartDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var dateKey = useStartDate ? 'startDate' : 'endDate';
      var targetMonth = moment(this.daterangepicker[dateKey]);

      // Use the month of the target date as the date value for Topviews.
      // If we are on the cusp of a new month, use the previous month as last month's data may not be available yet.
      if (targetMonth.month() === moment().month() || targetMonth.month() === moment().subtract(2, 'days').month()) {
        targetMonth.subtract(1, 'month');
      }

      return targetMonth;
    }

    /**
     * Link to /topviews for given project and chosen options
     * @param {String} project - project to link to
     * @param {moment} [month] - date that lies within the month we want to link to
     * @returns {String} URL
     */

  }, {
    key: 'getTopviewsMonthURL',
    value: function getTopviewsMonthURL(project) {
      var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getTopviewsMonth();

      var params = {
        project: project,
        platform: 'all-access',
        date: month.startOf('month').format('YYYY-MM')
      };

      return '/topviews?' + $.param(params);
    }

    /**
     * Get user agent, if supported
     * @returns {string} user-agent
     */

  }, {
    key: 'getUserAgent',
    value: function getUserAgent() {
      return navigator.userAgent ? navigator.userAgent : 'Unknown';
    }

    /**
     * Set a value to localStorage, using a temporary storage if localStorage is not supported
     * @param {string} key - key for the value to set
     * @param {Mixed} value - value to store
     * @returns {Mixed} stored value
     */

  }, {
    key: 'setLocalStorage',
    value: function setLocalStorage(key, value) {
      // See if localStorage is supported and enabled
      try {
        return localStorage.setItem(key, value);
      } catch (err) {
        return storage[key] = value;
      }
    }

    /**
     * Generate a unique hash code from given string
     * @param  {String} str - to be hashed
     * @return {String} the hash
     */

  }, {
    key: 'hashCode',
    value: function hashCode(str) {
      return str.split('').reduce(function (prevHash, currVal) {
        return (prevHash << 5) - prevHash + currVal.charCodeAt(0);
      }, 0);
    }

    /**
     * Is this one of the chart-view apps (that does not have a list view)?
     * @return {Boolean} true or false
     */

  }, {
    key: 'isChartApp',
    value: function isChartApp() {
      return !this.isListApp();
    }

    /**
     * Is this one of the list-view apps?
     * @return {Boolean} true or false
     */

  }, {
    key: 'isListApp',
    value: function isListApp() {
      return ['langviews', 'massviews', 'redirectviews', 'userviews'].includes(this.app);
    }

    /**
     * Test if the current project is a multilingual project
     * @returns {Boolean} is multilingual or not
     */

  }, {
    key: 'isMultilangProject',
    value: function isMultilangProject() {
      return new RegExp('.*?\\.(' + Pv.multilangProjects.join('|') + ')').test(this.project);
    }

    /**
     * List of valid multilingual projects
     * @return {Array} base projects, without the language
     */

  }, {
    key: 'massApi',


    /**
     * Make mass requests to MediaWiki API
     * The API normally limits to 500 pages, but gives you a 'continue' value
     *   to finish iterating through the resource.
     * @param {Object} params - parameters to pass to the API
     * @param {String} project - project to query, e.g. en.wikipedia (.org is optional)
     * @param {String} [continueKey] - the key to look in the continue hash, if present (e.g. cmcontinue for API:Categorymembers)
     * @param {String|Function} [dataKey] - the key for the main chunk of data, in the query hash (e.g. categorymembers for API:Categorymembers)
     *   If this is a function it is given the response data, and expected to return the data we want to concatentate.
     * @param {Number} [limit] - max number of pages to fetch
     * @return {Deferred} promise resolving with data
     */
    value: function massApi(params, project) {
      var continueKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'continue';
      var dataKey = arguments[3];
      var limit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.config.apiLimit;

      if (!/\.org$/.test(project)) project += '.org';

      var dfd = $.Deferred();
      var resolveData = {
        pages: []
      };

      var makeRequest = function makeRequest(continueValue) {
        var requestData = Object.assign({
          action: 'query',
          format: 'json',
          formatversion: '2'
        }, params);

        if (continueValue) requestData[continueKey] = continueValue;

        var promise = $.ajax({
          url: 'https://' + project + '/w/api.php',
          jsonp: 'callback',
          dataType: 'jsonp',
          data: requestData
        });

        promise.done(function (data) {
          // some failures come back as 200s, so we still resolve and let the local app handle it
          if (data.error) return dfd.resolve(data);

          var isFinished = void 0;

          // allow custom function to parse the data we want, if provided
          if (typeof dataKey === 'function') {
            resolveData.pages = resolveData.pages.concat(dataKey(data.query));
            isFinished = resolveData.pages.length >= limit;
          } else {
            // append new data to data from last request. We might want both 'pages' and dataKey
            if (data.query.pages) {
              resolveData.pages = resolveData.pages.concat(data.query.pages);
            }
            if (data.query[dataKey]) {
              resolveData[dataKey] = (resolveData[dataKey] || []).concat(data.query[dataKey]);
            }
            // If pages is not the collection we want, it will be either an empty array or one entry with basic page info
            //   depending on what API we're hitting. So resolveData[dataKey] will hit the limit
            isFinished = resolveData.pages.length >= limit || resolveData[dataKey].length >= limit;
          }

          // make recursive call if needed, waiting 100ms
          if (!isFinished && data.continue && data.continue[continueKey]) {
            setTimeout(function () {
              makeRequest(data.continue[continueKey]);
            }, 100);
          } else {
            // indicate there were more entries than the limit
            if (data.continue) resolveData.continue = true;
            dfd.resolve(resolveData);
          }
        }).fail(function (data) {
          dfd.reject(data);
        });
      };

      makeRequest();

      return dfd;
    }

    /**
     * Localize Number object with delimiters
     *
     * @param {Number} value - the Number, e.g. 1234567
     * @returns {string} - with locale delimiters, e.g. 1,234,567 (en-US)
     */

  }, {
    key: 'n',
    value: function n(value) {
      return new Number(value).toLocaleString();
    }

    /**
     * Get basic info on given pages, including the normalized page names.
     * E.g. masculine versus feminine namespaces on dewiki
     * @param {array} pages - array of page names
     * @returns {Deferred} promise with data fetched from API
     */

  }, {
    key: 'getPageInfo',
    value: function getPageInfo(pages) {
      var dfd = $.Deferred();
      pages = pages.map(function (page) {
        return encodeURIComponent(decodeURIComponent(page));
      });

      return $.ajax({
        url: 'https://' + this.project + '.org/w/api.php?action=query&prop=info&inprop=protection|watchers' + ('&formatversion=2&format=json&titles=' + pages.join('|')),
        dataType: 'jsonp'
      }).then(function (data) {
        // restore original order of pages, taking into account out any page names that were normalized
        if (data.query.normalized) {
          data.query.normalized.forEach(function (n) {
            pages[pages.indexOf(encodeURIComponent(n.from))] = n.to;
          });
        }
        var pageData = {};
        pages.forEach(function (page) {
          page = decodeURIComponent(page);
          pageData[page] = data.query.pages.find(function (p) {
            return p.title === page;
          });
        });
        return dfd.resolve(pageData);
      });
    }

    /**
     * Compute how many days are in the selected date range
     * @returns {integer} number of days
     */

  }, {
    key: 'numDaysInRange',
    value: function numDaysInRange() {
      return this.daterangepicker.endDate.diff(this.daterangepicker.startDate, 'days') + 1;
    }

    /**
     * Generate key/value pairs of URL query string
     * @param {string} [multiParam] - parameter whose values needs to split by pipe character
     * @returns {Object} key/value pairs representation of query string
     */

  }, {
    key: 'parseQueryString',
    value: function parseQueryString(multiParam) {
      var uri = decodeURI(location.search.slice(1)),
          chunks = uri.split('&');
      var params = {};

      for (var i = 0; i < chunks.length; i++) {
        var chunk = chunks[i].split('=');

        if (multiParam && chunk[0] === multiParam) {
          params[multiParam] = chunk[1].split('|').filter(function (param) {
            return !!param;
          }).unique();
        } else {
          params[chunk[0]] = chunk[1];
        }
      }

      return params;
    }

    /**
     * Simple metric to see how many use it (pageviews of the pageview, a meta-pageview, if you will :)
     * @param {string} app - one of: pv, lv, tv, sv, ms
     */

  }, {
    key: 'patchUsage',
    value: function patchUsage(app) {
      if (location.pathname.includes('-test')) {
        $.ajax({
          url: '//' + metaRoot + '/usage/' + this.app + '-test/' + (this.project || i18nLang),
          method: 'POST'
        });
      } else if (metaRoot) {
        $.ajax({
          url: '//' + metaRoot + '/usage/' + this.app + '/' + (this.project || i18nLang),
          method: 'POST'
        });
      }
    }

    /**
     * Set timestamp of when process started
     * @return {moment} start time
     */

  }, {
    key: 'processStarted',
    value: function processStarted() {
      return this.processStart = moment();
    }

    /**
     * Get elapsed time from this.processStart, and show it
     * @return {moment} Elapsed time from `this.processStart` in milliseconds
     */

  }, {
    key: 'processEnded',
    value: function processEnded() {
      var endTime = moment(),
          elapsedTime = endTime.diff(this.processStart, 'milliseconds');

      /** FIXME: report this bug: some languages don't parse PLURAL correctly ('he' for example) with the English fallback message */
      try {
        $('.elapsed-time').attr('datetime', endTime.format()).text($.i18n('elapsed-time', elapsedTime / 1000));
      } catch (e) {
        // intentionall nothing, everything will still show
      }

      return elapsedTime;
    }

    /**
     * Adapted from http://jsfiddle.net/dandv/47cbj/ courtesy of dandv
     *
     * Same as _.debounce but queues and executes all function calls
     * @param  {Function} fn - function to debounce
     * @param  {delay} delay - delay duration of milliseconds
     * @param  {object} context - scope the function should refer to
     * @return {Function} rate-limited function to call instead of your function
     */

  }, {
    key: 'rateLimit',
    value: function rateLimit(fn, delay, context) {
      var queue = [],
          timer = void 0;

      var processQueue = function processQueue() {
        var item = queue.shift();
        if (item) {
          fn.apply(item.context, item.arguments);
        }
        if (queue.length === 0) {
          clearInterval(timer), timer = null;
        }
      };

      return function limited() {
        queue.push({
          context: context || this,
          arguments: [].slice.call(arguments)
        });

        if (!timer) {
          processQueue(); // start immediately on the first invocation
          timer = setInterval(processQueue, delay);
        }
      };
    }

    /**
     * Removes all Select2 related stuff then adds it back
     * Also might result in the chart being re-rendered
     */

  }, {
    key: 'resetSelect2',
    value: function resetSelect2() {
      var select2Input = $(this.config.select2Input);
      select2Input.off('change');
      select2Input.select2('val', null);
      select2Input.select2('data', null);
      select2Input.select2('destroy');
      this.setupSelect2();
    }

    /**
     * Change alpha level of an rgba value
     *
     * @param {string} value - rgba value
     * @param {float|string} alpha - transparency as float value
     * @returns {string} rgba value
     */

  }, {
    key: 'rgba',
    value: function rgba(value, alpha) {
      return value.replace(/,\s*\d\)/, ', ' + alpha + ')');
    }

    /**
     * Save a particular setting to session and localStorage
     *
     * @param {string} key - settings key
     * @param {string|boolean} value - value to save
     */

  }, {
    key: 'saveSetting',
    value: function saveSetting(key, value) {
      this[key] = value;
      this.setLocalStorage('pageviews-settings-' + key, value);
    }

    /**
     * Save the selected settings within the settings modal
     * Prefer this implementation over a large library like serializeObject or serializeJSON
     */

  }, {
    key: 'saveSettings',
    value: function saveSettings() {
      var _this4 = this;

      /** track if we're changing to no_autocomplete mode */
      var wasAutocomplete = this.autocomplete === 'no_autocomplete';

      $.each($('#settings-modal input'), function (index, el) {
        if (el.type === 'checkbox') {
          _this4.saveSetting(el.name, el.checked ? 'true' : 'false');
        } else if (el.checked) {
          _this4.saveSetting(el.name, el.value);
        }
      });

      if (this.app !== 'topviews') {
        this.daterangepicker.locale.format = this.dateFormat;
        this.daterangepicker.updateElement();

        this.setupSelect2Colors();

        /**
         * If we changed to/from no_autocomplete we have to reset Select2 entirely
         *   as setSelect2Defaults is super buggy due to Select2 constraints
         * So let's only reset if we have to
         */
        if (this.autocomplete === 'no_autocomplete' !== wasAutocomplete) {
          this.resetSelect2();
        }

        if (this.beginAtZero === 'true') {
          $('.begin-at-zero-option').prop('checked', true);
        }
      }

      this.processInput(true);
    }

    /**
     * Directly set items in Select2
     * Currently is not able to remove underscores from page names
     *
     * @param {array} items - page titles
     * @returns {array} - untouched array of items
     */

  }, {
    key: 'setSelect2Defaults',
    value: function setSelect2Defaults(items) {
      var _this5 = this;

      items.forEach(function (item) {
        var escapedText = $('<div>').text(item).html();
        $('<option>' + escapedText + '</option>').appendTo(_this5.config.select2Input);
      });
      $(this.config.select2Input).select2('val', items);
      $(this.config.select2Input).trigger('select2:select');

      return items;
    }

    /**
     * Sets the daterange picker values and this.specialRange based on provided special range key
     * WARNING: not to be called on daterange picker GUI events (e.g. special range buttons)
     *
     * @param {string} type - one of special ranges defined in this.config.specialRanges,
     *   including dynamic latest range, such as `latest-15` for latest 15 days
     * @returns {object|null} updated this.specialRange object or null if type was invalid
     */

  }, {
    key: 'setSpecialRange',
    value: function setSpecialRange(type) {
      var rangeIndex = Object.keys(this.config.specialRanges).indexOf(type);
      var startDate = void 0,
          endDate = void 0,
          offset = void 0;

      if (type.includes('latest-')) {
        offset = parseInt(type.replace('latest-', ''), 10) || 20; // fallback of 20

        var _config$specialRanges = this.config.specialRanges.latest(offset);

        var _config$specialRanges2 = _slicedToArray(_config$specialRanges, 2);

        startDate = _config$specialRanges2[0];
        endDate = _config$specialRanges2[1];
      } else if (rangeIndex >= 0) {
        var _ref = type === 'latest' ? this.config.specialRanges.latest() : this.config.specialRanges[type];
        /** treat 'latest' as a function */


        var _ref2 = _slicedToArray(_ref, 2);

        startDate = _ref2[0];
        endDate = _ref2[1];

        $('.daterangepicker .ranges li').eq(rangeIndex).trigger('click');
      } else {
        return;
      }

      this.specialRange = {
        range: type,
        value: startDate.format(this.dateFormat) + ' - ' + endDate.format(this.dateFormat)
      };

      /** directly assign startDate then use setEndDate so that the events will be fired once */
      this.daterangepicker.startDate = startDate;
      this.daterangepicker.setEndDate(endDate);

      $('.latest-num').text(offset);

      return this.specialRange;
    }

    /**
     * Setup colors for Select2 entries so we can dynamically change them
     * This is a necessary evil, as we have to mark them as !important
     *   and since there are any number of entires, we need to use nth-child selectors
     * @returns {CSSStylesheet} our new stylesheet
     */

  }, {
    key: 'setupSelect2Colors',
    value: function setupSelect2Colors() {
      var _this6 = this;

      /** first delete old stylesheet, if present */
      if (this.colorsStyleEl) this.colorsStyleEl.remove();

      /** create new stylesheet */
      this.colorsStyleEl = document.createElement('style');
      this.colorsStyleEl.appendChild(document.createTextNode('')); // WebKit hack :(
      document.head.appendChild(this.colorsStyleEl);

      /** add color rules */
      this.config.colors.forEach(function (color, index) {
        _this6.colorsStyleEl.sheet.insertRule('.select2-selection__choice:nth-of-type(' + (index + 1) + ') { background: ' + color + ' !important }', 0);
      });

      return this.colorsStyleEl.sheet;
    }

    /**
     * Cross-application listeners
     * Each app has it's own setupListeners() that should call super.setupListeners()
     */

  }, {
    key: 'setupListeners',
    value: function setupListeners() {
      var _this7 = this;

      /** prevent browser's default behaviour for any link with href="#" */
      $("a[href='#']").on('click', function (e) {
        return e.preventDefault();
      });

      /** download listeners */
      $('.download-csv').on('click', this.exportCSV.bind(this));
      $('.download-json').on('click', this.exportJSON.bind(this));

      /** project input listeners, saving and restoring old value if new one is invalid */
      $(this.config.projectInput).on('focusin', function () {
        this.dataset.value = this.value;
      });
      $(this.config.projectInput).on('change', function (e) {
        return _this7.validateProject(e);
      });
    }

    /**
     * Set values of form based on localStorage or defaults, add listeners
     */

  }, {
    key: 'setupSettingsModal',
    value: function setupSettingsModal() {
      /** fill in values, everything is either a checkbox or radio */
      this.fillInSettings();

      /** add listener */
      $('.save-settings-btn').on('click', this.saveSettings.bind(this));
      $('.cancel-settings-btn').on('click', this.fillInSettings.bind(this));
    }

    /**
     * sets up the daterange selector and adds listeners
     */

  }, {
    key: 'setupDateRangeSelector',
    value: function setupDateRangeSelector() {
      var _this8 = this;

      var dateRangeSelector = $(this.config.dateRangeSelector);

      /**
       * Transform this.config.specialRanges to have i18n as keys
       * This is what is shown as the special ranges (Last month, etc.) in the datepicker menu
       * @type {Object}
       */
      var ranges = {};
      Object.keys(this.config.specialRanges).forEach(function (key) {
        if (key === 'latest') return; // this is a function, not meant to be in the list of special ranges
        ranges[$.i18n(key)] = _this8.config.specialRanges[key];
      });

      var datepickerOptions = {
        locale: {
          format: this.dateFormat,
          applyLabel: $.i18n('apply'),
          cancelLabel: $.i18n('cancel'),
          customRangeLabel: $.i18n('custom-range'),
          daysOfWeek: [$.i18n('su'), $.i18n('mo'), $.i18n('tu'), $.i18n('we'), $.i18n('th'), $.i18n('fr'), $.i18n('sa')],
          monthNames: [$.i18n('january'), $.i18n('february'), $.i18n('march'), $.i18n('april'), $.i18n('may'), $.i18n('june'), $.i18n('july'), $.i18n('august'), $.i18n('september'), $.i18n('october'), $.i18n('november'), $.i18n('december')]
        },
        startDate: moment().subtract(this.config.daysAgo, 'days'),
        minDate: this.config.minDate,
        maxDate: this.config.maxDate,
        ranges: ranges
      };

      if (this.config.dateLimit) datepickerOptions.dateLimit = { days: this.config.dateLimit };

      dateRangeSelector.daterangepicker(datepickerOptions);

      /** so people know why they can't query data older than July 2015 */
      $('.daterangepicker').append($('<div>').addClass('daterange-notice').html($.i18n('date-notice', document.title, "<a href='http://stats.grok.se' target='_blank'>stats.grok.se</a>", $.i18n('july') + ' 2015')));

      /**
       * The special date range options (buttons the right side of the daterange picker)
       *
       * WARNING: we're unable to add class names or data attrs to the range options,
       * so checking which was clicked is hardcoded based on the index of the LI,
       * as defined in this.config.specialRanges
       */
      $('.daterangepicker .ranges li').on('click', function (e) {
        var index = $('.daterangepicker .ranges li').index(e.target),
            container = _this8.daterangepicker.container,
            inputs = container.find('.daterangepicker_input input');
        _this8.specialRange = {
          range: Object.keys(_this8.config.specialRanges)[index],
          value: inputs[0].value + ' - ' + inputs[1].value
        };
      });

      $(this.config.dateRangeSelector).on('apply.daterangepicker', function (e, action) {
        if (action.chosenLabel === $.i18n('custom-range')) {
          _this8.specialRange = null;

          /** force events to re-fire since apply.daterangepicker occurs before 'change' event */
          _this8.daterangepicker.updateElement();
        }
      });
    }

    /**
     * Loop through given errors and show them to the user, also creating a paste on phabricator
     * @param  {Array} errors - list of error messages (strings)
     */

  }, {
    key: 'showFatalErrors',
    value: function showFatalErrors(errors) {
      var _this9 = this;

      this.resetView();
      errors.forEach(function (error) {
        _this9.writeMessage('<strong>' + $.i18n('fatal-error') + '</strong>: <code>' + error + '</code>');
      });

      var throwToastError = function throwToastError(bugUrl) {
        return _this9.toastError('\n      <strong>' + $.i18n('fatal-error') + '</strong>: ' + $.i18n('error-please-report', _this9.getBugReportURL(bugUrl)) + '\n    ', 0);
      };

      if (this.debug) {
        throw errors[0];
      } else if (errors && errors[0] && errors[0].stack) {
        $.ajax({
          method: 'POST',
          url: '//tools.wmflabs.org/musikanimal/paste',
          data: {
            content: '' + ('\ndate:      ' + moment().utc().format()) + ('\ntool:      ' + this.app) + ('\nlanguage:  ' + i18nLang) + ('\nchart:     ' + this.chartType) + ('\nurl:       ' + document.location.href) + ('\nuserAgent: ' + this.getUserAgent()) + ('\ntrace:     ' + errors[0].stack),

            title: 'Pageviews Analysis error report: ' + errors[0]
          }
        }).done(function (data) {
          if (data && data.result && data.result.objectName) {
            throwToastError(data.result.objectName);
          } else {
            throwToastError();
          }
        }).fail(function () {
          throwToastError();
        });
      }
    }

    /**
     * Splash in console, just for fun
     */

  }, {
    key: 'splash',
    value: function splash() {
      var style = 'background: #eee; color: #555; padding: 4px; font-family:monospace';
      console.log('%c      ___            __ _                     _                             ', style);
      console.log('%c     | _ \\  __ _    / _` |   ___    __ __    (_)     ___   __ __ __  ___    ', style);
      console.log('%c     |  _/ / _` |   \\__, |  / -_)   \\ V /    | |    / -_)  \\ V  V / (_-<    ', style);
      console.log('%c    _|_|_  \\__,_|   |___/   \\___|   _\\_/_   _|_|_   \\___|   \\_/\\_/  /__/_   ', style);
      console.log('%c  _| """ |_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|  ', style);
      console.log('%c  "`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'  ', style);
      console.log('%c              ___                     _  _     _               _            ', style);
      console.log('%c      o O O  /   \\   _ _     __ _    | || |   | |     ___     (_)     ___   ', style);
      console.log('%c     o       | - |  | \' \\   / _` |    \\_, |   | |    (_-<     | |    (_-<   ', style);
      console.log('%c    TS__[O]  |_|_|  |_||_|  \\__,_|   _|__/   _|_|_   /__/_   _|_|_   /__/_  ', style);
      console.log('%c   {======|_|"""""|_|"""""|_|"""""|_| """"|_|"""""|_|"""""|_|"""""|_|"""""| ', style);
      console.log('%c  ./o--000\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\'"`-0-0-\' ', style);
      console.log('%c                                                                            ', style);
      console.log('%c  Copyright © ' + new Date().getFullYear() + ' MusikAnimal, Kaldari, Marcel Ruiz Forns                  ', style);
    }

    /**
     * Add the loading indicator class and set the safeguard timeout
     */

  }, {
    key: 'startSpinny',
    value: function startSpinny() {
      var _this10 = this;

      $('body').addClass('loading');
      document.activeElement.blur();
      clearTimeout(this.timeout);

      this.timeout = setTimeout(function (err) {
        _this10.resetView();
        _this10.toastError('\n        <strong>' + $.i18n('fatal-error') + '</strong>:\n        ' + $.i18n('error-timed-out') + '\n        ' + $.i18n('error-please-report', _this10.getBugReportURL()) + '\n      ');
      }, 30 * 1000);
    }

    /**
     * Remove loading indicator class and clear the safeguard timeout
     */

  }, {
    key: 'stopSpinny',
    value: function stopSpinny() {
      $('body').removeClass('loading initial');
      clearTimeout(this.timeout);
    }

    /**
     * Replace spaces with underscores
     *
     * @param {array} pages - array of page names
     * @returns {array} page names with underscores
     */

  }, {
    key: 'underscorePageNames',
    value: function underscorePageNames(pages) {
      return pages.map(function (page) {
        return decodeURIComponent(page).score();
      });
    }

    /**
     * Update hrefs of inter-app links to load currently selected project
     */

  }, {
    key: 'updateInterAppLinks',
    value: function updateInterAppLinks() {
      var _this11 = this;

      $('.interapp-link').each(function (i, link) {
        var url = link.href.split('?')[0];

        if (link.classList.contains('interapp-link--siteviews')) {
          link.href = url + '?sites=' + _this11.project.escape() + '.org';
        } else {
          link.href = url + '?project=' + _this11.project.escape() + '.org';
        }
      });
    }

    /**
     * Validate basic params against what is defined in the config,
     *   and if they are invalid set the default
     * @param {Object} params - params as fetched by this.parseQueryString()
     * @returns {Object} same params with some invalid parameters correted, as necessary
     */

  }, {
    key: 'validateParams',
    value: function validateParams(params) {
      var _this12 = this;

      this.config.validateParams.forEach(function (paramKey) {
        if (paramKey === 'project' && params.project) {
          params.project = params.project.replace(/^www\./, '');
        }

        var defaultValue = _this12.config.defaults[paramKey],
            paramValue = params[paramKey];

        if (defaultValue && !_this12.config.validParams[paramKey].includes(paramValue)) {
          // only throw error if they tried to provide an invalid value
          if (!!paramValue) {
            _this12.addInvalidParamNotice(paramKey);
          }

          params[paramKey] = defaultValue;
        }
      });

      return params;
    }

    /**
     * Adds listeners to the project input for validations against the site map,
     *   reverting to the old value if the new one is invalid
     * @param {Boolean} [multilingual] - whether we should check if it is a multilingual project
     * @returns {Boolean} whether or not validations passed
     */

  }, {
    key: 'validateProject',
    value: function validateProject() {
      var multilingual = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var projectInput = $(this.config.projectInput)[0];
      var project = projectInput.value.replace(/^www\./, ''),
          valid = false;

      if (multilingual && !this.isMultilangProject()) {
        this.toastWarn($.i18n('invalid-lang-project', '<a href=\'//' + project.escape() + '\'>' + project.escape() + '</a>'));
        project = projectInput.dataset.value;
      } else if (siteDomains.includes(project)) {
        this.clearMessages();
        this.updateInterAppLinks();
        valid = true;
      } else {
        this.toastWarn($.i18n('invalid-project', '<a href=\'//' + project.escape() + '\'>' + project.escape() + '</a>'));
        project = projectInput.dataset.value;
      }

      projectInput.value = project;

      return valid;
    }

    /**
     * Writes message just below the chart or list of data
     * @param {string} message - message to write
     * @param {boolean} [clear] - whether to clear any existing messages
     * @returns {jQuery} - jQuery object of message container
     */

  }, {
    key: 'writeMessage',
    value: function writeMessage(message) {
      var clear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (clear) this.clearMessages();
      return $('.message-container').append('<div class=\'error-message\'>' + message + '</div>');
    }
  }, {
    key: 'dateFormat',
    get: function get() {
      if (this.localizeDateFormat === 'true') {
        return this.getLocaleDateString();
      } else {
        return this.config.defaults.dateFormat;
      }
    }

    /**
     * Get the daterangepicker instance. Plain and simple.
     * @return {Object} daterange picker
     */

  }, {
    key: 'daterangepicker',
    get: function get() {
      return $(this.config.dateRangeSelector).data('daterangepicker');
    }
  }, {
    key: 'project',
    get: function get() {
      var project = $(this.config.projectInput).val();
      /** Get the first 2 characters from the project code to get the language */
      return project ? project.toLowerCase().replace(/.org$/, '') : null;
    }
  }], [{
    key: 'multilangProjects',
    get: function get() {
      return ['wikipedia', 'wikibooks', 'wikinews', 'wikiquote', 'wikisource', 'wikiversity', 'wikivoyage'];
    }
  }]);

  return Pv;
}(PvConfig);

module.exports = Pv;

},{"./core_extensions":1,"./polyfills":2,"./pv_config":4,"./site_map":5}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @file Shared config amongst all apps
 * @author MusikAnimal
 * @copyright 2016 MusikAnimal
 * @license MIT License: https://opensource.org/licenses/MIT
 */

var siteMap = require('./site_map');
var siteDomains = Object.keys(siteMap).map(function (key) {
  return siteMap[key];
});

/**
 * Configuration for all Pageviews applications.
 * Some properties may be overriden by app-specific configs
 */

var PvConfig = function () {
  /** set instance variable (config), also defining any private methods */

  function PvConfig() {
    var _this = this;

    _classCallCheck(this, PvConfig);

    var self = this;
    var formatXAxisTick = function formatXAxisTick(value) {
      var dayOfWeek = moment(value, _this.dateFormat).weekday();
      if (dayOfWeek % 7) {
        return value;
      } else {
        return '• ' + value;
      }
    };

    this.config = {
      apiLimit: 20000,
      apiThrottle: 10,
      apps: ['pageviews', 'topviews', 'langviews', 'siteviews', 'massviews', 'redirectviews', 'userviews'],
      chartConfig: {
        line: {
          opts: {
            scales: {
              yAxes: [{
                ticks: {
                  callback: function callback(value) {
                    return _this.formatYAxisNumber(value);
                  }
                }
              }],
              xAxes: [{
                ticks: {
                  callback: function callback(value) {
                    return formatXAxisTick(value);
                  }
                }
              }]
            },
            legendCallback: function legendCallback(chart) {
              return _this.config.chartLegend(self);
            },
            tooltips: this.linearTooltips()
          },
          dataset: function dataset(color) {
            return {
              color: color,
              backgroundColor: 'rgba(0,0,0,0)',
              borderWidth: 2,
              borderColor: color,
              pointColor: color,
              pointBackgroundColor: color,
              pointBorderColor: self.rgba(color, 0.2),
              pointHoverBackgroundColor: color,
              pointHoverBorderColor: color,
              pointHoverBorderWidth: 2,
              pointHoverRadius: 5,
              tension: self.bezierCurve === 'true' ? 0.4 : 0
            };
          }
        },
        bar: {
          opts: {
            scales: {
              yAxes: [{
                ticks: {
                  callback: function callback(value) {
                    return _this.formatYAxisNumber(value);
                  }
                }
              }],
              xAxes: [{
                barPercentage: 1.0,
                categoryPercentage: 0.85,
                ticks: {
                  callback: function callback(value) {
                    return formatXAxisTick(value);
                  }
                }
              }]
            },
            legendCallback: function legendCallback(chart) {
              return _this.config.chartLegend(self);
            },
            tooltips: this.linearTooltips('label')
          },
          dataset: function dataset(color) {
            return {
              color: color,
              backgroundColor: self.rgba(color, 0.6),
              borderColor: self.rgba(color, 0.9),
              borderWidth: 2,
              hoverBackgroundColor: self.rgba(color, 0.75),
              hoverBorderColor: color
            };
          }
        },
        radar: {
          opts: {
            scale: {
              ticks: {
                callback: function callback(value) {
                  return _this.formatNumber(value);
                }
              }
            },
            legendCallback: function legendCallback(chart) {
              return _this.config.chartLegend(self);
            },
            tooltips: this.linearTooltips()
          },
          dataset: function dataset(color) {
            return {
              color: color,
              backgroundColor: self.rgba(color, 0.1),
              borderColor: color,
              borderWidth: 2,
              pointBackgroundColor: color,
              pointBorderColor: self.rgba(color, 0.8),
              pointHoverBackgroundColor: color,
              pointHoverBorderColor: color,
              pointHoverRadius: 5
            };
          }
        },
        pie: {
          opts: {
            legendCallback: function legendCallback(chart) {
              return _this.config.chartLegend(self);
            },
            tooltips: this.circularTooltips
          },
          dataset: function dataset(color) {
            return {
              color: color,
              backgroundColor: color,
              hoverBackgroundColor: self.rgba(color, 0.8)
            };
          }
        },
        doughnut: {
          opts: {
            legendCallback: function legendCallback(chart) {
              return _this.config.chartLegend(self);
            },
            tooltips: this.circularTooltips
          },
          dataset: function dataset(color) {
            return {
              color: color,
              backgroundColor: color,
              hoverBackgroundColor: self.rgba(color, 0.8)
            };
          }
        },
        polarArea: {
          opts: {
            scale: {
              ticks: {
                beginAtZero: true,
                callback: function callback(value) {
                  return _this.formatNumber(value);
                }
              }
            },
            legendCallback: function legendCallback(chart) {
              return _this.config.chartLegend(self);
            },
            tooltips: this.circularTooltips
          },
          dataset: function dataset(color) {
            return {
              color: color,
              backgroundColor: self.rgba(color, 0.7),
              hoverBackgroundColor: self.rgba(color, 0.9)
            };
          }
        }
      },
      circularCharts: ['pie', 'doughnut', 'polarArea'],
      colors: ['rgba(171, 212, 235, 1)', 'rgba(178, 223, 138, 1)', 'rgba(251, 154, 153, 1)', 'rgba(253, 191, 111, 1)', 'rgba(202, 178, 214, 1)', 'rgba(207, 182, 128, 1)', 'rgba(141, 211, 199, 1)', 'rgba(252, 205, 229, 1)', 'rgba(255, 247, 161, 1)', 'rgba(217, 217, 217, 1)'],
      defaults: {
        autocomplete: 'autocomplete',
        chartType: function chartType(numDatasets) {
          return numDatasets > 1 ? 'line' : 'bar';
        },
        dateFormat: 'YYYY-MM-DD',
        localizeDateFormat: 'true',
        numericalFormatting: 'true',
        bezierCurve: 'false',
        autoLogDetection: 'false',
        beginAtZero: 'false',
        rememberChart: 'false',
        agent: 'user',
        platform: 'all-access',
        project: 'en.wikipedia.org'
      },
      globalChartOpts: {
        animation: {
          duration: 500,
          easing: 'easeInOutQuart'
        },
        hover: {
          animationDuration: 0
        },
        legend: {
          display: false
        }
      },
      linearCharts: ['line', 'bar', 'radar'],
      linearOpts: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function callback(value) {
                return _this.formatNumber(value);
              }
            }
          }]
        },
        legendCallback: function legendCallback(chart) {
          return _this.config.chartLegend(chart.data.datasets, self);
        }
      },
      daysAgo: 20,
      minDate: moment('2015-07-01').startOf('day'),
      maxDate: moment().subtract(1, 'days').startOf('day'),
      specialRanges: {
        'last-week': [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
        'this-month': [moment().startOf('month'), moment().subtract(1, 'days').startOf('day')],
        'last-month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        'this-year': [moment().startOf('year'), moment().subtract(1, 'days').startOf('day')],
        'last-year': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')],
        'all-time': [moment('2015-07-01').startOf('day'), moment().subtract(1, 'days').startOf('day')],
        latest: function latest() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.config.daysAgo;

          return [moment().subtract(offset, 'days').startOf('day'), self.config.maxDate];
        }
      },
      timestampFormat: 'YYYYMMDD00',
      validParams: {
        agent: ['all-agents', 'user', 'spider', 'bot'],
        platform: ['all-access', 'desktop', 'mobile-app', 'mobile-web'],
        project: siteDomains
      }
    };
  }

  /**
   * Get config for tooltips shown on linear charts, used by Chart.js
   * @param {String} [mode] - x-axis or label depending on chart type
   * @return {Object}
   */


  _createClass(PvConfig, [{
    key: 'linearTooltips',
    value: function linearTooltips(mode) {
      var _this2 = this;

      return {
        mode: mode || 'x-axis',
        callbacks: {
          label: function label(tooltipItem) {
            if (Number.isNaN(tooltipItem.yLabel)) {
              return ' ' + $.i18n('unknown');
            } else {
              return ' ' + _this2.formatNumber(tooltipItem.yLabel);
            }
          }
        },
        bodyFontSize: 14,
        bodySpacing: 7,
        caretSize: 0,
        titleFontSize: 14
      };
    }

    /**
     * Get config for tooltips shown on circular charts, used by Chart.js
     * @return {Object}
     */

  }, {
    key: 'circularTooltips',
    get: function get() {
      var _this3 = this;

      return {
        callbacks: {
          label: function label(tooltipItem, chartInstance) {
            var value = chartInstance.datasets[tooltipItem.datasetIndex].data[tooltipItem.index],
                label = chartInstance.labels[tooltipItem.index];

            if (Number.isNaN(value)) {
              return label + ': ' + $.i18n('unknown');
            } else {
              return label + ': ' + _this3.formatNumber(value);
            }
          }
        },
        bodyFontSize: 14,
        bodySpacing: 7,
        caretSize: 0,
        titleFontSize: 14
      };
    }
  }]);

  return PvConfig;
}();

module.exports = PvConfig;

},{"./site_map":5}],5:[function(require,module,exports){
'use strict';

/**
 * @file WMF [site matrix](https://www.mediawiki.org/w/api.php?action=sitematrix), with some unsupported wikis removed
 */

/**
 * Sitematrix of all supported WMF wikis
 * @type {Object}
 */
var siteMap = {
  'aawiki': 'aa.wikipedia.org',
  'aawiktionary': 'aa.wiktionary.org',
  'aawikibooks': 'aa.wikibooks.org',
  'abwiki': 'ab.wikipedia.org',
  'abwiktionary': 'ab.wiktionary.org',
  'acewiki': 'ace.wikipedia.org',
  'adywiki': 'ady.wikipedia.org',
  'afwiki': 'af.wikipedia.org',
  'afwiktionary': 'af.wiktionary.org',
  'afwikibooks': 'af.wikibooks.org',
  'afwikiquote': 'af.wikiquote.org',
  'akwiki': 'ak.wikipedia.org',
  'akwiktionary': 'ak.wiktionary.org',
  'akwikibooks': 'ak.wikibooks.org',
  'alswiki': 'als.wikipedia.org',
  'alswiktionary': 'als.wiktionary.org',
  'alswikibooks': 'als.wikibooks.org',
  'alswikiquote': 'als.wikiquote.org',
  'amwiki': 'am.wikipedia.org',
  'amwiktionary': 'am.wiktionary.org',
  'amwikiquote': 'am.wikiquote.org',
  'anwiki': 'an.wikipedia.org',
  'anwiktionary': 'an.wiktionary.org',
  'angwiki': 'ang.wikipedia.org',
  'angwiktionary': 'ang.wiktionary.org',
  'angwikibooks': 'ang.wikibooks.org',
  'angwikiquote': 'ang.wikiquote.org',
  'angwikisource': 'ang.wikisource.org',
  'arwiki': 'ar.wikipedia.org',
  'arwiktionary': 'ar.wiktionary.org',
  'arwikibooks': 'ar.wikibooks.org',
  'arwikinews': 'ar.wikinews.org',
  'arwikiquote': 'ar.wikiquote.org',
  'arwikisource': 'ar.wikisource.org',
  'arwikiversity': 'ar.wikiversity.org',
  'arcwiki': 'arc.wikipedia.org',
  'arzwiki': 'arz.wikipedia.org',
  'aswiki': 'as.wikipedia.org',
  'aswiktionary': 'as.wiktionary.org',
  'aswikibooks': 'as.wikibooks.org',
  'aswikisource': 'as.wikisource.org',
  'astwiki': 'ast.wikipedia.org',
  'astwiktionary': 'ast.wiktionary.org',
  'astwikibooks': 'ast.wikibooks.org',
  'astwikiquote': 'ast.wikiquote.org',
  'avwiki': 'av.wikipedia.org',
  'avwiktionary': 'av.wiktionary.org',
  'aywiki': 'ay.wikipedia.org',
  'aywiktionary': 'ay.wiktionary.org',
  'aywikibooks': 'ay.wikibooks.org',
  'azwiki': 'az.wikipedia.org',
  'azwiktionary': 'az.wiktionary.org',
  'azwikibooks': 'az.wikibooks.org',
  'azwikiquote': 'az.wikiquote.org',
  'azwikisource': 'az.wikisource.org',
  'azbwiki': 'azb.wikipedia.org',
  'bawiki': 'ba.wikipedia.org',
  'bawikibooks': 'ba.wikibooks.org',
  'barwiki': 'bar.wikipedia.org',
  'bat_smgwiki': 'bat-smg.wikipedia.org',
  'bclwiki': 'bcl.wikipedia.org',
  'bewiki': 'be.wikipedia.org',
  'bewiktionary': 'be.wiktionary.org',
  'bewikibooks': 'be.wikibooks.org',
  'bewikiquote': 'be.wikiquote.org',
  'bewikisource': 'be.wikisource.org',
  'be_x_oldwiki': 'be-tarask.wikipedia.org',
  'bgwiki': 'bg.wikipedia.org',
  'bgwiktionary': 'bg.wiktionary.org',
  'bgwikibooks': 'bg.wikibooks.org',
  'bgwikinews': 'bg.wikinews.org',
  'bgwikiquote': 'bg.wikiquote.org',
  'bgwikisource': 'bg.wikisource.org',
  'bhwiki': 'bh.wikipedia.org',
  'bhwiktionary': 'bh.wiktionary.org',
  'biwiki': 'bi.wikipedia.org',
  'biwiktionary': 'bi.wiktionary.org',
  'biwikibooks': 'bi.wikibooks.org',
  'bjnwiki': 'bjn.wikipedia.org',
  'bmwiki': 'bm.wikipedia.org',
  'bmwiktionary': 'bm.wiktionary.org',
  'bmwikibooks': 'bm.wikibooks.org',
  'bmwikiquote': 'bm.wikiquote.org',
  'bnwiki': 'bn.wikipedia.org',
  'bnwiktionary': 'bn.wiktionary.org',
  'bnwikibooks': 'bn.wikibooks.org',
  'bnwikisource': 'bn.wikisource.org',
  'bowiki': 'bo.wikipedia.org',
  'bowiktionary': 'bo.wiktionary.org',
  'bowikibooks': 'bo.wikibooks.org',
  'bpywiki': 'bpy.wikipedia.org',
  'brwiki': 'br.wikipedia.org',
  'brwiktionary': 'br.wiktionary.org',
  'brwikiquote': 'br.wikiquote.org',
  'brwikisource': 'br.wikisource.org',
  'bswiki': 'bs.wikipedia.org',
  'bswiktionary': 'bs.wiktionary.org',
  'bswikibooks': 'bs.wikibooks.org',
  'bswikinews': 'bs.wikinews.org',
  'bswikiquote': 'bs.wikiquote.org',
  'bswikisource': 'bs.wikisource.org',
  'bugwiki': 'bug.wikipedia.org',
  'bxrwiki': 'bxr.wikipedia.org',
  'cawiki': 'ca.wikipedia.org',
  'cawiktionary': 'ca.wiktionary.org',
  'cawikibooks': 'ca.wikibooks.org',
  'cawikinews': 'ca.wikinews.org',
  'cawikiquote': 'ca.wikiquote.org',
  'cawikisource': 'ca.wikisource.org',
  'cbk_zamwiki': 'cbk-zam.wikipedia.org',
  'cdowiki': 'cdo.wikipedia.org',
  'cewiki': 'ce.wikipedia.org',
  'cebwiki': 'ceb.wikipedia.org',
  'chwiki': 'ch.wikipedia.org',
  'chwiktionary': 'ch.wiktionary.org',
  'chwikibooks': 'ch.wikibooks.org',
  'chowiki': 'cho.wikipedia.org',
  'chrwiki': 'chr.wikipedia.org',
  'chrwiktionary': 'chr.wiktionary.org',
  'chywiki': 'chy.wikipedia.org',
  'ckbwiki': 'ckb.wikipedia.org',
  'cowiki': 'co.wikipedia.org',
  'cowiktionary': 'co.wiktionary.org',
  'cowikibooks': 'co.wikibooks.org',
  'cowikiquote': 'co.wikiquote.org',
  'crwiki': 'cr.wikipedia.org',
  'crwiktionary': 'cr.wiktionary.org',
  'crwikiquote': 'cr.wikiquote.org',
  'crhwiki': 'crh.wikipedia.org',
  'cswiki': 'cs.wikipedia.org',
  'cswiktionary': 'cs.wiktionary.org',
  'cswikibooks': 'cs.wikibooks.org',
  'cswikinews': 'cs.wikinews.org',
  'cswikiquote': 'cs.wikiquote.org',
  'cswikisource': 'cs.wikisource.org',
  'cswikiversity': 'cs.wikiversity.org',
  'csbwiki': 'csb.wikipedia.org',
  'csbwiktionary': 'csb.wiktionary.org',
  'cuwiki': 'cu.wikipedia.org',
  'cvwiki': 'cv.wikipedia.org',
  'cvwikibooks': 'cv.wikibooks.org',
  'cywiki': 'cy.wikipedia.org',
  'cywiktionary': 'cy.wiktionary.org',
  'cywikibooks': 'cy.wikibooks.org',
  'cywikiquote': 'cy.wikiquote.org',
  'cywikisource': 'cy.wikisource.org',
  'dawiki': 'da.wikipedia.org',
  'dawiktionary': 'da.wiktionary.org',
  'dawikibooks': 'da.wikibooks.org',
  'dawikiquote': 'da.wikiquote.org',
  'dawikisource': 'da.wikisource.org',
  'dewiki': 'de.wikipedia.org',
  'dewiktionary': 'de.wiktionary.org',
  'dewikibooks': 'de.wikibooks.org',
  'dewikinews': 'de.wikinews.org',
  'dewikiquote': 'de.wikiquote.org',
  'dewikisource': 'de.wikisource.org',
  'dewikiversity': 'de.wikiversity.org',
  'dewikivoyage': 'de.wikivoyage.org',
  'diqwiki': 'diq.wikipedia.org',
  'dsbwiki': 'dsb.wikipedia.org',
  'dvwiki': 'dv.wikipedia.org',
  'dvwiktionary': 'dv.wiktionary.org',
  'dzwiki': 'dz.wikipedia.org',
  'dzwiktionary': 'dz.wiktionary.org',
  'eewiki': 'ee.wikipedia.org',
  'elwiki': 'el.wikipedia.org',
  'elwiktionary': 'el.wiktionary.org',
  'elwikibooks': 'el.wikibooks.org',
  'elwikinews': 'el.wikinews.org',
  'elwikiquote': 'el.wikiquote.org',
  'elwikisource': 'el.wikisource.org',
  'elwikiversity': 'el.wikiversity.org',
  'elwikivoyage': 'el.wikivoyage.org',
  'emlwiki': 'eml.wikipedia.org',
  'enwiki': 'en.wikipedia.org',
  'enwiktionary': 'en.wiktionary.org',
  'enwikibooks': 'en.wikibooks.org',
  'enwikinews': 'en.wikinews.org',
  'enwikiquote': 'en.wikiquote.org',
  'enwikisource': 'en.wikisource.org',
  'enwikiversity': 'en.wikiversity.org',
  'enwikivoyage': 'en.wikivoyage.org',
  'eowiki': 'eo.wikipedia.org',
  'eowiktionary': 'eo.wiktionary.org',
  'eowikibooks': 'eo.wikibooks.org',
  'eowikinews': 'eo.wikinews.org',
  'eowikiquote': 'eo.wikiquote.org',
  'eowikisource': 'eo.wikisource.org',
  'eswiki': 'es.wikipedia.org',
  'eswiktionary': 'es.wiktionary.org',
  'eswikibooks': 'es.wikibooks.org',
  'eswikinews': 'es.wikinews.org',
  'eswikiquote': 'es.wikiquote.org',
  'eswikisource': 'es.wikisource.org',
  'eswikiversity': 'es.wikiversity.org',
  'eswikivoyage': 'es.wikivoyage.org',
  'etwiki': 'et.wikipedia.org',
  'etwiktionary': 'et.wiktionary.org',
  'etwikibooks': 'et.wikibooks.org',
  'etwikiquote': 'et.wikiquote.org',
  'etwikisource': 'et.wikisource.org',
  'euwiki': 'eu.wikipedia.org',
  'euwiktionary': 'eu.wiktionary.org',
  'euwikibooks': 'eu.wikibooks.org',
  'euwikiquote': 'eu.wikiquote.org',
  'extwiki': 'ext.wikipedia.org',
  'fawiki': 'fa.wikipedia.org',
  'fawiktionary': 'fa.wiktionary.org',
  'fawikibooks': 'fa.wikibooks.org',
  'fawikinews': 'fa.wikinews.org',
  'fawikiquote': 'fa.wikiquote.org',
  'fawikisource': 'fa.wikisource.org',
  'fawikivoyage': 'fa.wikivoyage.org',
  'ffwiki': 'ff.wikipedia.org',
  'fiwiki': 'fi.wikipedia.org',
  'fiwiktionary': 'fi.wiktionary.org',
  'fiwikibooks': 'fi.wikibooks.org',
  'fiwikinews': 'fi.wikinews.org',
  'fiwikiquote': 'fi.wikiquote.org',
  'fiwikisource': 'fi.wikisource.org',
  'fiwikiversity': 'fi.wikiversity.org',
  'fiu_vrowiki': 'fiu-vro.wikipedia.org',
  'fjwiki': 'fj.wikipedia.org',
  'fjwiktionary': 'fj.wiktionary.org',
  'fowiki': 'fo.wikipedia.org',
  'fowiktionary': 'fo.wiktionary.org',
  'fowikisource': 'fo.wikisource.org',
  'frwiki': 'fr.wikipedia.org',
  'frwiktionary': 'fr.wiktionary.org',
  'frwikibooks': 'fr.wikibooks.org',
  'frwikinews': 'fr.wikinews.org',
  'frwikiquote': 'fr.wikiquote.org',
  'frwikisource': 'fr.wikisource.org',
  'frwikiversity': 'fr.wikiversity.org',
  'frwikivoyage': 'fr.wikivoyage.org',
  'frpwiki': 'frp.wikipedia.org',
  'frrwiki': 'frr.wikipedia.org',
  'furwiki': 'fur.wikipedia.org',
  'fywiki': 'fy.wikipedia.org',
  'fywiktionary': 'fy.wiktionary.org',
  'fywikibooks': 'fy.wikibooks.org',
  'gawiki': 'ga.wikipedia.org',
  'gawiktionary': 'ga.wiktionary.org',
  'gawikibooks': 'ga.wikibooks.org',
  'gawikiquote': 'ga.wikiquote.org',
  'gagwiki': 'gag.wikipedia.org',
  'ganwiki': 'gan.wikipedia.org',
  'gdwiki': 'gd.wikipedia.org',
  'gdwiktionary': 'gd.wiktionary.org',
  'glwiki': 'gl.wikipedia.org',
  'glwiktionary': 'gl.wiktionary.org',
  'glwikibooks': 'gl.wikibooks.org',
  'glwikiquote': 'gl.wikiquote.org',
  'glwikisource': 'gl.wikisource.org',
  'glkwiki': 'glk.wikipedia.org',
  'gnwiki': 'gn.wikipedia.org',
  'gnwiktionary': 'gn.wiktionary.org',
  'gnwikibooks': 'gn.wikibooks.org',
  'gomwiki': 'gom.wikipedia.org',
  'gotwiki': 'got.wikipedia.org',
  'gotwikibooks': 'got.wikibooks.org',
  'guwiki': 'gu.wikipedia.org',
  'guwiktionary': 'gu.wiktionary.org',
  'guwikibooks': 'gu.wikibooks.org',
  'guwikiquote': 'gu.wikiquote.org',
  'guwikisource': 'gu.wikisource.org',
  'gvwiki': 'gv.wikipedia.org',
  'gvwiktionary': 'gv.wiktionary.org',
  'hawiki': 'ha.wikipedia.org',
  'hawiktionary': 'ha.wiktionary.org',
  'hakwiki': 'hak.wikipedia.org',
  'hawwiki': 'haw.wikipedia.org',
  'hewiki': 'he.wikipedia.org',
  'hewiktionary': 'he.wiktionary.org',
  'hewikibooks': 'he.wikibooks.org',
  'hewikinews': 'he.wikinews.org',
  'hewikiquote': 'he.wikiquote.org',
  'hewikisource': 'he.wikisource.org',
  'hewikivoyage': 'he.wikivoyage.org',
  'hiwiki': 'hi.wikipedia.org',
  'hiwiktionary': 'hi.wiktionary.org',
  'hiwikibooks': 'hi.wikibooks.org',
  'hiwikiquote': 'hi.wikiquote.org',
  'hifwiki': 'hif.wikipedia.org',
  'howiki': 'ho.wikipedia.org',
  'hrwiki': 'hr.wikipedia.org',
  'hrwiktionary': 'hr.wiktionary.org',
  'hrwikibooks': 'hr.wikibooks.org',
  'hrwikiquote': 'hr.wikiquote.org',
  'hrwikisource': 'hr.wikisource.org',
  'hsbwiki': 'hsb.wikipedia.org',
  'hsbwiktionary': 'hsb.wiktionary.org',
  'htwiki': 'ht.wikipedia.org',
  'htwikisource': 'ht.wikisource.org',
  'huwiki': 'hu.wikipedia.org',
  'huwiktionary': 'hu.wiktionary.org',
  'huwikibooks': 'hu.wikibooks.org',
  'huwikinews': 'hu.wikinews.org',
  'huwikiquote': 'hu.wikiquote.org',
  'huwikisource': 'hu.wikisource.org',
  'hywiki': 'hy.wikipedia.org',
  'hywiktionary': 'hy.wiktionary.org',
  'hywikibooks': 'hy.wikibooks.org',
  'hywikiquote': 'hy.wikiquote.org',
  'hywikisource': 'hy.wikisource.org',
  'hzwiki': 'hz.wikipedia.org',
  'iawiki': 'ia.wikipedia.org',
  'iawiktionary': 'ia.wiktionary.org',
  'iawikibooks': 'ia.wikibooks.org',
  'idwiki': 'id.wikipedia.org',
  'idwiktionary': 'id.wiktionary.org',
  'idwikibooks': 'id.wikibooks.org',
  'idwikiquote': 'id.wikiquote.org',
  'idwikisource': 'id.wikisource.org',
  'iewiki': 'ie.wikipedia.org',
  'iewiktionary': 'ie.wiktionary.org',
  'iewikibooks': 'ie.wikibooks.org',
  'igwiki': 'ig.wikipedia.org',
  'iiwiki': 'ii.wikipedia.org',
  'ikwiki': 'ik.wikipedia.org',
  'ikwiktionary': 'ik.wiktionary.org',
  'ilowiki': 'ilo.wikipedia.org',
  'iowiki': 'io.wikipedia.org',
  'iowiktionary': 'io.wiktionary.org',
  'iswiki': 'is.wikipedia.org',
  'iswiktionary': 'is.wiktionary.org',
  'iswikibooks': 'is.wikibooks.org',
  'iswikiquote': 'is.wikiquote.org',
  'iswikisource': 'is.wikisource.org',
  'itwiki': 'it.wikipedia.org',
  'itwiktionary': 'it.wiktionary.org',
  'itwikibooks': 'it.wikibooks.org',
  'itwikinews': 'it.wikinews.org',
  'itwikiquote': 'it.wikiquote.org',
  'itwikisource': 'it.wikisource.org',
  'itwikiversity': 'it.wikiversity.org',
  'itwikivoyage': 'it.wikivoyage.org',
  'iuwiki': 'iu.wikipedia.org',
  'iuwiktionary': 'iu.wiktionary.org',
  'jawiki': 'ja.wikipedia.org',
  'jawiktionary': 'ja.wiktionary.org',
  'jawikibooks': 'ja.wikibooks.org',
  'jawikinews': 'ja.wikinews.org',
  'jawikiquote': 'ja.wikiquote.org',
  'jawikisource': 'ja.wikisource.org',
  'jawikiversity': 'ja.wikiversity.org',
  'jbowiki': 'jbo.wikipedia.org',
  'jbowiktionary': 'jbo.wiktionary.org',
  'jvwiki': 'jv.wikipedia.org',
  'jvwiktionary': 'jv.wiktionary.org',
  'kawiki': 'ka.wikipedia.org',
  'kawiktionary': 'ka.wiktionary.org',
  'kawikibooks': 'ka.wikibooks.org',
  'kawikiquote': 'ka.wikiquote.org',
  'kaawiki': 'kaa.wikipedia.org',
  'kabwiki': 'kab.wikipedia.org',
  'kbdwiki': 'kbd.wikipedia.org',
  'kgwiki': 'kg.wikipedia.org',
  'kiwiki': 'ki.wikipedia.org',
  'kjwiki': 'kj.wikipedia.org',
  'kkwiki': 'kk.wikipedia.org',
  'kkwiktionary': 'kk.wiktionary.org',
  'kkwikibooks': 'kk.wikibooks.org',
  'kkwikiquote': 'kk.wikiquote.org',
  'klwiki': 'kl.wikipedia.org',
  'klwiktionary': 'kl.wiktionary.org',
  'kmwiki': 'km.wikipedia.org',
  'kmwiktionary': 'km.wiktionary.org',
  'kmwikibooks': 'km.wikibooks.org',
  'knwiki': 'kn.wikipedia.org',
  'knwiktionary': 'kn.wiktionary.org',
  'knwikibooks': 'kn.wikibooks.org',
  'knwikiquote': 'kn.wikiquote.org',
  'knwikisource': 'kn.wikisource.org',
  'kowiki': 'ko.wikipedia.org',
  'kowiktionary': 'ko.wiktionary.org',
  'kowikibooks': 'ko.wikibooks.org',
  'kowikinews': 'ko.wikinews.org',
  'kowikiquote': 'ko.wikiquote.org',
  'kowikisource': 'ko.wikisource.org',
  'kowikiversity': 'ko.wikiversity.org',
  'koiwiki': 'koi.wikipedia.org',
  'krwiki': 'kr.wikipedia.org',
  'krwikiquote': 'kr.wikiquote.org',
  'krcwiki': 'krc.wikipedia.org',
  'kswiki': 'ks.wikipedia.org',
  'kswiktionary': 'ks.wiktionary.org',
  'kswikibooks': 'ks.wikibooks.org',
  'kswikiquote': 'ks.wikiquote.org',
  'kshwiki': 'ksh.wikipedia.org',
  'kuwiki': 'ku.wikipedia.org',
  'kuwiktionary': 'ku.wiktionary.org',
  'kuwikibooks': 'ku.wikibooks.org',
  'kuwikiquote': 'ku.wikiquote.org',
  'kvwiki': 'kv.wikipedia.org',
  'kwwiki': 'kw.wikipedia.org',
  'kwwiktionary': 'kw.wiktionary.org',
  'kwwikiquote': 'kw.wikiquote.org',
  'kywiki': 'ky.wikipedia.org',
  'kywiktionary': 'ky.wiktionary.org',
  'kywikibooks': 'ky.wikibooks.org',
  'kywikiquote': 'ky.wikiquote.org',
  'lawiki': 'la.wikipedia.org',
  'lawiktionary': 'la.wiktionary.org',
  'lawikibooks': 'la.wikibooks.org',
  'lawikiquote': 'la.wikiquote.org',
  'lawikisource': 'la.wikisource.org',
  'ladwiki': 'lad.wikipedia.org',
  'lbwiki': 'lb.wikipedia.org',
  'lbwiktionary': 'lb.wiktionary.org',
  'lbwikibooks': 'lb.wikibooks.org',
  'lbwikiquote': 'lb.wikiquote.org',
  'lbewiki': 'lbe.wikipedia.org',
  'lezwiki': 'lez.wikipedia.org',
  'lgwiki': 'lg.wikipedia.org',
  'liwiki': 'li.wikipedia.org',
  'liwiktionary': 'li.wiktionary.org',
  'liwikibooks': 'li.wikibooks.org',
  'liwikiquote': 'li.wikiquote.org',
  'liwikisource': 'li.wikisource.org',
  'lijwiki': 'lij.wikipedia.org',
  'lmowiki': 'lmo.wikipedia.org',
  'lnwiki': 'ln.wikipedia.org',
  'lnwiktionary': 'ln.wiktionary.org',
  'lnwikibooks': 'ln.wikibooks.org',
  'lowiki': 'lo.wikipedia.org',
  'lowiktionary': 'lo.wiktionary.org',
  'lrcwiki': 'lrc.wikipedia.org',
  'ltwiki': 'lt.wikipedia.org',
  'ltwiktionary': 'lt.wiktionary.org',
  'ltwikibooks': 'lt.wikibooks.org',
  'ltwikiquote': 'lt.wikiquote.org',
  'ltwikisource': 'lt.wikisource.org',
  'ltgwiki': 'ltg.wikipedia.org',
  'lvwiki': 'lv.wikipedia.org',
  'lvwiktionary': 'lv.wiktionary.org',
  'lvwikibooks': 'lv.wikibooks.org',
  'maiwiki': 'mai.wikipedia.org',
  'map_bmswiki': 'map-bms.wikipedia.org',
  'mdfwiki': 'mdf.wikipedia.org',
  'mgwiki': 'mg.wikipedia.org',
  'mgwiktionary': 'mg.wiktionary.org',
  'mgwikibooks': 'mg.wikibooks.org',
  'mhwiki': 'mh.wikipedia.org',
  'mhwiktionary': 'mh.wiktionary.org',
  'mhrwiki': 'mhr.wikipedia.org',
  'miwiki': 'mi.wikipedia.org',
  'miwiktionary': 'mi.wiktionary.org',
  'miwikibooks': 'mi.wikibooks.org',
  'minwiki': 'min.wikipedia.org',
  'mkwiki': 'mk.wikipedia.org',
  'mkwiktionary': 'mk.wiktionary.org',
  'mkwikibooks': 'mk.wikibooks.org',
  'mkwikisource': 'mk.wikisource.org',
  'mlwiki': 'ml.wikipedia.org',
  'mlwiktionary': 'ml.wiktionary.org',
  'mlwikibooks': 'ml.wikibooks.org',
  'mlwikiquote': 'ml.wikiquote.org',
  'mlwikisource': 'ml.wikisource.org',
  'mnwiki': 'mn.wikipedia.org',
  'mnwiktionary': 'mn.wiktionary.org',
  'mnwikibooks': 'mn.wikibooks.org',
  'mowiki': 'mo.wikipedia.org',
  'mowiktionary': 'mo.wiktionary.org',
  'mrwiki': 'mr.wikipedia.org',
  'mrwiktionary': 'mr.wiktionary.org',
  'mrwikibooks': 'mr.wikibooks.org',
  'mrwikiquote': 'mr.wikiquote.org',
  'mrwikisource': 'mr.wikisource.org',
  'mrjwiki': 'mrj.wikipedia.org',
  'mswiki': 'ms.wikipedia.org',
  'mswiktionary': 'ms.wiktionary.org',
  'mswikibooks': 'ms.wikibooks.org',
  'mtwiki': 'mt.wikipedia.org',
  'mtwiktionary': 'mt.wiktionary.org',
  'muswiki': 'mus.wikipedia.org',
  'mwlwiki': 'mwl.wikipedia.org',
  'mywiki': 'my.wikipedia.org',
  'mywiktionary': 'my.wiktionary.org',
  'mywikibooks': 'my.wikibooks.org',
  'myvwiki': 'myv.wikipedia.org',
  'mznwiki': 'mzn.wikipedia.org',
  'nawiki': 'na.wikipedia.org',
  'nawiktionary': 'na.wiktionary.org',
  'nawikibooks': 'na.wikibooks.org',
  'nawikiquote': 'na.wikiquote.org',
  'nahwiki': 'nah.wikipedia.org',
  'nahwiktionary': 'nah.wiktionary.org',
  'nahwikibooks': 'nah.wikibooks.org',
  'napwiki': 'nap.wikipedia.org',
  'ndswiki': 'nds.wikipedia.org',
  'ndswiktionary': 'nds.wiktionary.org',
  'ndswikibooks': 'nds.wikibooks.org',
  'ndswikiquote': 'nds.wikiquote.org',
  'nds_nlwiki': 'nds-nl.wikipedia.org',
  'newiki': 'ne.wikipedia.org',
  'newiktionary': 'ne.wiktionary.org',
  'newikibooks': 'ne.wikibooks.org',
  'newwiki': 'new.wikipedia.org',
  'ngwiki': 'ng.wikipedia.org',
  'nlwiki': 'nl.wikipedia.org',
  'nlwiktionary': 'nl.wiktionary.org',
  'nlwikibooks': 'nl.wikibooks.org',
  'nlwikinews': 'nl.wikinews.org',
  'nlwikiquote': 'nl.wikiquote.org',
  'nlwikisource': 'nl.wikisource.org',
  'nlwikivoyage': 'nl.wikivoyage.org',
  'nnwiki': 'nn.wikipedia.org',
  'nnwiktionary': 'nn.wiktionary.org',
  'nnwikiquote': 'nn.wikiquote.org',
  'nowiki': 'no.wikipedia.org',
  'nowiktionary': 'no.wiktionary.org',
  'nowikibooks': 'no.wikibooks.org',
  'nowikinews': 'no.wikinews.org',
  'nowikiquote': 'no.wikiquote.org',
  'nowikisource': 'no.wikisource.org',
  'novwiki': 'nov.wikipedia.org',
  'nrmwiki': 'nrm.wikipedia.org',
  'nsowiki': 'nso.wikipedia.org',
  'nvwiki': 'nv.wikipedia.org',
  'nywiki': 'ny.wikipedia.org',
  'ocwiki': 'oc.wikipedia.org',
  'ocwiktionary': 'oc.wiktionary.org',
  'ocwikibooks': 'oc.wikibooks.org',
  'omwiki': 'om.wikipedia.org',
  'omwiktionary': 'om.wiktionary.org',
  'orwiki': 'or.wikipedia.org',
  'orwiktionary': 'or.wiktionary.org',
  'orwikisource': 'or.wikisource.org',
  'oswiki': 'os.wikipedia.org',
  'pawiki': 'pa.wikipedia.org',
  'pawiktionary': 'pa.wiktionary.org',
  'pawikibooks': 'pa.wikibooks.org',
  'pagwiki': 'pag.wikipedia.org',
  'pamwiki': 'pam.wikipedia.org',
  'papwiki': 'pap.wikipedia.org',
  'pcdwiki': 'pcd.wikipedia.org',
  'pdcwiki': 'pdc.wikipedia.org',
  'pflwiki': 'pfl.wikipedia.org',
  'piwiki': 'pi.wikipedia.org',
  'piwiktionary': 'pi.wiktionary.org',
  'pihwiki': 'pih.wikipedia.org',
  'plwiki': 'pl.wikipedia.org',
  'plwiktionary': 'pl.wiktionary.org',
  'plwikibooks': 'pl.wikibooks.org',
  'plwikinews': 'pl.wikinews.org',
  'plwikiquote': 'pl.wikiquote.org',
  'plwikisource': 'pl.wikisource.org',
  'plwikivoyage': 'pl.wikivoyage.org',
  'pmswiki': 'pms.wikipedia.org',
  'pnbwiki': 'pnb.wikipedia.org',
  'pnbwiktionary': 'pnb.wiktionary.org',
  'pntwiki': 'pnt.wikipedia.org',
  'pswiki': 'ps.wikipedia.org',
  'pswiktionary': 'ps.wiktionary.org',
  'pswikibooks': 'ps.wikibooks.org',
  'ptwiki': 'pt.wikipedia.org',
  'ptwiktionary': 'pt.wiktionary.org',
  'ptwikibooks': 'pt.wikibooks.org',
  'ptwikinews': 'pt.wikinews.org',
  'ptwikiquote': 'pt.wikiquote.org',
  'ptwikisource': 'pt.wikisource.org',
  'ptwikiversity': 'pt.wikiversity.org',
  'ptwikivoyage': 'pt.wikivoyage.org',
  'quwiki': 'qu.wikipedia.org',
  'quwiktionary': 'qu.wiktionary.org',
  'quwikibooks': 'qu.wikibooks.org',
  'quwikiquote': 'qu.wikiquote.org',
  'rmwiki': 'rm.wikipedia.org',
  'rmwiktionary': 'rm.wiktionary.org',
  'rmwikibooks': 'rm.wikibooks.org',
  'rmywiki': 'rmy.wikipedia.org',
  'rnwiki': 'rn.wikipedia.org',
  'rnwiktionary': 'rn.wiktionary.org',
  'rowiki': 'ro.wikipedia.org',
  'rowiktionary': 'ro.wiktionary.org',
  'rowikibooks': 'ro.wikibooks.org',
  'rowikinews': 'ro.wikinews.org',
  'rowikiquote': 'ro.wikiquote.org',
  'rowikisource': 'ro.wikisource.org',
  'rowikivoyage': 'ro.wikivoyage.org',
  'roa_rupwiki': 'roa-rup.wikipedia.org',
  'roa_rupwiktionary': 'roa-rup.wiktionary.org',
  'roa_tarawiki': 'roa-tara.wikipedia.org',
  'ruwiki': 'ru.wikipedia.org',
  'ruwiktionary': 'ru.wiktionary.org',
  'ruwikibooks': 'ru.wikibooks.org',
  'ruwikinews': 'ru.wikinews.org',
  'ruwikiquote': 'ru.wikiquote.org',
  'ruwikisource': 'ru.wikisource.org',
  'ruwikiversity': 'ru.wikiversity.org',
  'ruwikivoyage': 'ru.wikivoyage.org',
  'ruewiki': 'rue.wikipedia.org',
  'rwwiki': 'rw.wikipedia.org',
  'rwwiktionary': 'rw.wiktionary.org',
  'sawiki': 'sa.wikipedia.org',
  'sawiktionary': 'sa.wiktionary.org',
  'sawikibooks': 'sa.wikibooks.org',
  'sawikiquote': 'sa.wikiquote.org',
  'sawikisource': 'sa.wikisource.org',
  'sahwiki': 'sah.wikipedia.org',
  'sahwikisource': 'sah.wikisource.org',
  'scwiki': 'sc.wikipedia.org',
  'scwiktionary': 'sc.wiktionary.org',
  'scnwiki': 'scn.wikipedia.org',
  'scnwiktionary': 'scn.wiktionary.org',
  'scowiki': 'sco.wikipedia.org',
  'sdwiki': 'sd.wikipedia.org',
  'sdwiktionary': 'sd.wiktionary.org',
  'sdwikinews': 'sd.wikinews.org',
  'sewiki': 'se.wikipedia.org',
  'sewikibooks': 'se.wikibooks.org',
  'sgwiki': 'sg.wikipedia.org',
  'sgwiktionary': 'sg.wiktionary.org',
  'shwiki': 'sh.wikipedia.org',
  'shwiktionary': 'sh.wiktionary.org',
  'siwiki': 'si.wikipedia.org',
  'siwiktionary': 'si.wiktionary.org',
  'siwikibooks': 'si.wikibooks.org',
  'simplewiki': 'simple.wikipedia.org',
  'simplewiktionary': 'simple.wiktionary.org',
  'simplewikibooks': 'simple.wikibooks.org',
  'simplewikiquote': 'simple.wikiquote.org',
  'skwiki': 'sk.wikipedia.org',
  'skwiktionary': 'sk.wiktionary.org',
  'skwikibooks': 'sk.wikibooks.org',
  'skwikiquote': 'sk.wikiquote.org',
  'skwikisource': 'sk.wikisource.org',
  'slwiki': 'sl.wikipedia.org',
  'slwiktionary': 'sl.wiktionary.org',
  'slwikibooks': 'sl.wikibooks.org',
  'slwikiquote': 'sl.wikiquote.org',
  'slwikisource': 'sl.wikisource.org',
  'slwikiversity': 'sl.wikiversity.org',
  'smwiki': 'sm.wikipedia.org',
  'smwiktionary': 'sm.wiktionary.org',
  'snwiki': 'sn.wikipedia.org',
  'snwiktionary': 'sn.wiktionary.org',
  'sowiki': 'so.wikipedia.org',
  'sowiktionary': 'so.wiktionary.org',
  'sqwiki': 'sq.wikipedia.org',
  'sqwiktionary': 'sq.wiktionary.org',
  'sqwikibooks': 'sq.wikibooks.org',
  'sqwikinews': 'sq.wikinews.org',
  'sqwikiquote': 'sq.wikiquote.org',
  'srwiki': 'sr.wikipedia.org',
  'srwiktionary': 'sr.wiktionary.org',
  'srwikibooks': 'sr.wikibooks.org',
  'srwikinews': 'sr.wikinews.org',
  'srwikiquote': 'sr.wikiquote.org',
  'srwikisource': 'sr.wikisource.org',
  'srnwiki': 'srn.wikipedia.org',
  'sswiki': 'ss.wikipedia.org',
  'sswiktionary': 'ss.wiktionary.org',
  'stwiki': 'st.wikipedia.org',
  'stwiktionary': 'st.wiktionary.org',
  'stqwiki': 'stq.wikipedia.org',
  'suwiki': 'su.wikipedia.org',
  'suwiktionary': 'su.wiktionary.org',
  'suwikibooks': 'su.wikibooks.org',
  'suwikiquote': 'su.wikiquote.org',
  'svwiki': 'sv.wikipedia.org',
  'svwiktionary': 'sv.wiktionary.org',
  'svwikibooks': 'sv.wikibooks.org',
  'svwikinews': 'sv.wikinews.org',
  'svwikiquote': 'sv.wikiquote.org',
  'svwikisource': 'sv.wikisource.org',
  'svwikiversity': 'sv.wikiversity.org',
  'svwikivoyage': 'sv.wikivoyage.org',
  'swwiki': 'sw.wikipedia.org',
  'swwiktionary': 'sw.wiktionary.org',
  'swwikibooks': 'sw.wikibooks.org',
  'szlwiki': 'szl.wikipedia.org',
  'tawiki': 'ta.wikipedia.org',
  'tawiktionary': 'ta.wiktionary.org',
  'tawikibooks': 'ta.wikibooks.org',
  'tawikinews': 'ta.wikinews.org',
  'tawikiquote': 'ta.wikiquote.org',
  'tawikisource': 'ta.wikisource.org',
  'tewiki': 'te.wikipedia.org',
  'tewiktionary': 'te.wiktionary.org',
  'tewikibooks': 'te.wikibooks.org',
  'tewikiquote': 'te.wikiquote.org',
  'tewikisource': 'te.wikisource.org',
  'tetwiki': 'tet.wikipedia.org',
  'tgwiki': 'tg.wikipedia.org',
  'tgwiktionary': 'tg.wiktionary.org',
  'tgwikibooks': 'tg.wikibooks.org',
  'thwiki': 'th.wikipedia.org',
  'thwiktionary': 'th.wiktionary.org',
  'thwikibooks': 'th.wikibooks.org',
  'thwikinews': 'th.wikinews.org',
  'thwikiquote': 'th.wikiquote.org',
  'thwikisource': 'th.wikisource.org',
  'tiwiki': 'ti.wikipedia.org',
  'tiwiktionary': 'ti.wiktionary.org',
  'tkwiki': 'tk.wikipedia.org',
  'tkwiktionary': 'tk.wiktionary.org',
  'tkwikibooks': 'tk.wikibooks.org',
  'tkwikiquote': 'tk.wikiquote.org',
  'tlwiki': 'tl.wikipedia.org',
  'tlwiktionary': 'tl.wiktionary.org',
  'tlwikibooks': 'tl.wikibooks.org',
  'tnwiki': 'tn.wikipedia.org',
  'tnwiktionary': 'tn.wiktionary.org',
  'towiki': 'to.wikipedia.org',
  'towiktionary': 'to.wiktionary.org',
  'tpiwiki': 'tpi.wikipedia.org',
  'tpiwiktionary': 'tpi.wiktionary.org',
  'trwiki': 'tr.wikipedia.org',
  'trwiktionary': 'tr.wiktionary.org',
  'trwikibooks': 'tr.wikibooks.org',
  'trwikinews': 'tr.wikinews.org',
  'trwikiquote': 'tr.wikiquote.org',
  'trwikisource': 'tr.wikisource.org',
  'tswiki': 'ts.wikipedia.org',
  'tswiktionary': 'ts.wiktionary.org',
  'ttwiki': 'tt.wikipedia.org',
  'ttwiktionary': 'tt.wiktionary.org',
  'ttwikibooks': 'tt.wikibooks.org',
  'ttwikiquote': 'tt.wikiquote.org',
  'tumwiki': 'tum.wikipedia.org',
  'twwiki': 'tw.wikipedia.org',
  'twwiktionary': 'tw.wiktionary.org',
  'tywiki': 'ty.wikipedia.org',
  'tyvwiki': 'tyv.wikipedia.org',
  'udmwiki': 'udm.wikipedia.org',
  'ugwiki': 'ug.wikipedia.org',
  'ugwiktionary': 'ug.wiktionary.org',
  'ugwikibooks': 'ug.wikibooks.org',
  'ugwikiquote': 'ug.wikiquote.org',
  'ukwiki': 'uk.wikipedia.org',
  'ukwiktionary': 'uk.wiktionary.org',
  'ukwikibooks': 'uk.wikibooks.org',
  'ukwikinews': 'uk.wikinews.org',
  'ukwikiquote': 'uk.wikiquote.org',
  'ukwikisource': 'uk.wikisource.org',
  'ukwikivoyage': 'uk.wikivoyage.org',
  'urwiki': 'ur.wikipedia.org',
  'urwiktionary': 'ur.wiktionary.org',
  'urwikibooks': 'ur.wikibooks.org',
  'urwikiquote': 'ur.wikiquote.org',
  'uzwiki': 'uz.wikipedia.org',
  'uzwiktionary': 'uz.wiktionary.org',
  'uzwikibooks': 'uz.wikibooks.org',
  'uzwikiquote': 'uz.wikiquote.org',
  'vewiki': 've.wikipedia.org',
  'vecwiki': 'vec.wikipedia.org',
  'vecwiktionary': 'vec.wiktionary.org',
  'vecwikisource': 'vec.wikisource.org',
  'vepwiki': 'vep.wikipedia.org',
  'viwiki': 'vi.wikipedia.org',
  'viwiktionary': 'vi.wiktionary.org',
  'viwikibooks': 'vi.wikibooks.org',
  'viwikiquote': 'vi.wikiquote.org',
  'viwikisource': 'vi.wikisource.org',
  'viwikivoyage': 'vi.wikivoyage.org',
  'vlswiki': 'vls.wikipedia.org',
  'vowiki': 'vo.wikipedia.org',
  'vowiktionary': 'vo.wiktionary.org',
  'vowikibooks': 'vo.wikibooks.org',
  'vowikiquote': 'vo.wikiquote.org',
  'wawiki': 'wa.wikipedia.org',
  'wawiktionary': 'wa.wiktionary.org',
  'wawikibooks': 'wa.wikibooks.org',
  'warwiki': 'war.wikipedia.org',
  'wowiki': 'wo.wikipedia.org',
  'wowiktionary': 'wo.wiktionary.org',
  'wowikiquote': 'wo.wikiquote.org',
  'wuuwiki': 'wuu.wikipedia.org',
  'xalwiki': 'xal.wikipedia.org',
  'xhwiki': 'xh.wikipedia.org',
  'xhwiktionary': 'xh.wiktionary.org',
  'xhwikibooks': 'xh.wikibooks.org',
  'xmfwiki': 'xmf.wikipedia.org',
  'yiwiki': 'yi.wikipedia.org',
  'yiwiktionary': 'yi.wiktionary.org',
  'yiwikisource': 'yi.wikisource.org',
  'yowiki': 'yo.wikipedia.org',
  'yowiktionary': 'yo.wiktionary.org',
  'yowikibooks': 'yo.wikibooks.org',
  'zawiki': 'za.wikipedia.org',
  'zawiktionary': 'za.wiktionary.org',
  'zawikibooks': 'za.wikibooks.org',
  'zawikiquote': 'za.wikiquote.org',
  'zeawiki': 'zea.wikipedia.org',
  'zhwiki': 'zh.wikipedia.org',
  'zhwiktionary': 'zh.wiktionary.org',
  'zhwikibooks': 'zh.wikibooks.org',
  'zhwikinews': 'zh.wikinews.org',
  'zhwikiquote': 'zh.wikiquote.org',
  'zhwikisource': 'zh.wikisource.org',
  'zhwikivoyage': 'zh.wikivoyage.org',
  'zh_classicalwiki': 'zh-classical.wikipedia.org',
  'zh_min_nanwiki': 'zh-min-nan.wikipedia.org',
  'zh_min_nanwiktionary': 'zh-min-nan.wiktionary.org',
  'zh_min_nanwikibooks': 'zh-min-nan.wikibooks.org',
  'zh_min_nanwikiquote': 'zh-min-nan.wikiquote.org',
  'zh_min_nanwikisource': 'zh-min-nan.wikisource.org',
  'zh_yuewiki': 'zh-yue.wikipedia.org',
  'zuwiki': 'zu.wikipedia.org',
  'zuwiktionary': 'zu.wiktionary.org',
  'zuwikibooks': 'zu.wikibooks.org',
  'advisorywiki': 'advisory.wikimedia.org',
  'arwikimedia': 'ar.wikimedia.org',
  'arbcom_dewiki': 'arbcom-de.wikipedia.org',
  'arbcom_enwiki': 'arbcom-en.wikipedia.org',
  'arbcom_fiwiki': 'arbcom-fi.wikipedia.org',
  'arbcom_nlwiki': 'arbcom-nl.wikipedia.org',
  'auditcomwiki': 'auditcom.wikimedia.org',
  'bdwikimedia': 'bd.wikimedia.org',
  'bewikimedia': 'be.wikimedia.org',
  'betawikiversity': 'beta.wikiversity.org',
  'boardwiki': 'board.wikimedia.org',
  'boardgovcomwiki': 'boardgovcom.wikimedia.org',
  'brwikimedia': 'br.wikimedia.org',
  'cawikimedia': 'ca.wikimedia.org',
  'chairwiki': 'chair.wikimedia.org',
  'chapcomwiki': 'affcom.wikimedia.org',
  'checkuserwiki': 'checkuser.wikimedia.org',
  'cnwikimedia': 'cn.wikimedia.org',
  'cowikimedia': 'co.wikimedia.org',
  'collabwiki': 'collab.wikimedia.org',
  'commonswiki': 'commons.wikimedia.org',
  'dkwikimedia': 'dk.wikimedia.org',
  'donatewiki': 'donate.wikimedia.org',
  'etwikimedia': 'ee.wikimedia.org',
  'execwiki': 'exec.wikimedia.org',
  'fdcwiki': 'fdc.wikimedia.org',
  'fiwikimedia': 'fi.wikimedia.org',
  'foundationwiki': 'wikimediafoundation.org',
  'grantswiki': 'grants.wikimedia.org',
  'iegcomwiki': 'iegcom.wikimedia.org',
  'ilwikimedia': 'il.wikimedia.org',
  'incubatorwiki': 'incubator.wikimedia.org',
  'internalwiki': 'internal.wikimedia.org',
  'labswiki': 'wikitech.wikimedia.org',
  'labtestwiki': 'labtestwikitech.wikimedia.org',
  'legalteamwiki': 'legalteam.wikimedia.org',
  'loginwiki': 'login.wikimedia.org',
  'mediawikiwiki': 'mediawiki.org',
  'metawiki': 'meta.wikimedia.org',
  'mkwikimedia': 'mk.wikimedia.org',
  'movementroleswiki': 'movementroles.wikimedia.org',
  'mxwikimedia': 'mx.wikimedia.org',
  'nlwikimedia': 'nl.wikimedia.org',
  'nowikimedia': 'no.wikimedia.org',
  'noboard_chapterswikimedia': 'noboard-chapters.wikimedia.org',
  'nostalgiawiki': 'nostalgia.wikipedia.org',
  'nycwikimedia': 'nyc.wikimedia.org',
  'nzwikimedia': 'nz.wikimedia.org',
  'officewiki': 'office.wikimedia.org',
  'ombudsmenwiki': 'ombudsmen.wikimedia.org',
  'otrs_wikiwiki': 'otrs-wiki.wikimedia.org',
  'outreachwiki': 'outreach.wikimedia.org',
  'pa_uswikimedia': 'pa-us.wikimedia.org',
  'plwikimedia': 'pl.wikimedia.org',
  'qualitywiki': 'quality.wikimedia.org',
  'rswikimedia': 'rs.wikimedia.org',
  'ruwikimedia': 'ru.wikimedia.org',
  'sewikimedia': 'se.wikimedia.org',
  'searchcomwiki': 'searchcom.wikimedia.org',
  'sourceswiki': 'wikisource.org',
  'spcomwiki': 'spcom.wikimedia.org',
  'specieswiki': 'species.wikimedia.org',
  'stewardwiki': 'steward.wikimedia.org',
  'strategywiki': 'strategy.wikimedia.org',
  'tenwiki': 'ten.wikipedia.org',
  'testwiki': 'test.wikipedia.org',
  'test2wiki': 'test2.wikipedia.org',
  'testwikidatawiki': 'test.wikidata.org',
  'trwikimedia': 'tr.wikimedia.org',
  'transitionteamwiki': 'transitionteam.wikimedia.org',
  'uawikimedia': 'ua.wikimedia.org',
  'ukwikimedia': 'uk.wikimedia.org',
  'usabilitywiki': 'usability.wikimedia.org',
  'votewiki': 'vote.wikimedia.org',
  'wg_enwiki': 'wg-en.wikipedia.org',
  'wikidatawiki': 'wikidata.org',
  'wikimania2005wiki': 'wikimania2005.wikimedia.org',
  'wikimania2006wiki': 'wikimania2006.wikimedia.org',
  'wikimania2007wiki': 'wikimania2007.wikimedia.org',
  'wikimania2008wiki': 'wikimania2008.wikimedia.org',
  'wikimania2009wiki': 'wikimania2009.wikimedia.org',
  'wikimania2010wiki': 'wikimania2010.wikimedia.org',
  'wikimania2011wiki': 'wikimania2011.wikimedia.org',
  'wikimania2012wiki': 'wikimania2012.wikimedia.org',
  'wikimania2013wiki': 'wikimania2013.wikimedia.org',
  'wikimania2014wiki': 'wikimania2014.wikimedia.org',
  'wikimania2015wiki': 'wikimania2015.wikimedia.org',
  'wikimania2016wiki': 'wikimania2016.wikimedia.org',
  'wikimania2017wiki': 'wikimania2017.wikimedia.org',
  'wikimaniateamwiki': 'wikimaniateam.wikimedia.org',
  'zerowiki': 'zero.wikimedia.org'
};

module.exports = siteMap;

},{}],6:[function(require,module,exports){
'use strict';

/**
 * @file Configuration for Topviews application
 * @author MusikAnimal
 * @copyright 2016 MusikAnimal
 */

var pv = require('../shared/pv');

/**
 * Configuration for Topviews application.
 * This includes selectors, defaults, and other constants specific to Topviews
 * @type {Object}
 */
var config = {
  select2Input: '.aqs-select2-selector',
  dateRangeSelector: '.aqs-date-range-selector',
  defaults: {
    dateRange: 'last-month',
    excludes: []
  },
  maxDate: moment(moment().utc().subtract(1, 'day').startOf('day').toDate()).startOf('day').toDate(),
  maxMonth: moment().subtract(1, 'month').subtract(2, 'days').startOf('month').toDate(),
  pageSize: 100,
  platformSelector: '#platform-select',
  projectInput: '.aqs-project-input',
  validateParams: ['project', 'platform'],
  timestampFormat: 'YYYYMMDD00'
};

module.exports = config;

},{"../shared/pv":3}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Topviews Analysis tool
 * @file Main file for Topviews application
 * @author MusikAnimal
 * @copyright 2016 MusikAnimal
 * @license MIT License: https://opensource.org/licenses/MIT
 * @requires Pv
 */

var config = require('./config');
var Pv = require('../shared/pv');

/** Main TopViews class */

var TopViews = function (_Pv) {
  _inherits(TopViews, _Pv);

  /**
   * Set instance variables and boot the app via pv.constructor
   * @override
   */

  function TopViews() {
    _classCallCheck(this, TopViews);

    var _this = _possibleConstructorReturn(this, (TopViews.__proto__ || Object.getPrototypeOf(TopViews)).call(this, config));

    _this.app = 'topviews';

    _this.excludes = [];
    _this.offset = 0;
    _this.max = null;
    _this.pageData = [];
    _this.pageNames = [];
    return _this;
  }

  /**
   * Initialize the application.
   * Called in `pv.js` after translations have loaded
   */


  _createClass(TopViews, [{
    key: 'initialize',
    value: function initialize() {
      this.popParams();
      this.updateInterAppLinks();
    }

    /**
     * Apply user input by updating the URL query string and view, if needed
     * @param {boolean} force - apply all user options even if we've detected nothing has changed
     * @returns {Deferred} deferred object from initData
     */

  }, {
    key: 'processInput',
    value: function processInput(force) {
      this.clearSearch();
      this.pushParams();

      /** prevent redundant querying */
      if (location.search === this.params && !force) {
        return false;
      }
      this.params = location.search;

      this.resetView(false);
      return this.initData().then(this.drawData.bind(this));
    }

    /**
     * Print list of top pages
     */

  }, {
    key: 'drawData',
    value: function drawData() {
      $('.chart-container').html('');

      var count = 0,
          index = 0;

      while (count < this.config.pageSize + this.offset) {
        var item = this.pageData[index++];

        if (this.excludes.includes(item.article)) continue;
        if (!this.max) this.max = item.views;

        var width = 100 * (item.views / this.max),
            direction = !!i18nRtl ? 'to left' : 'to right';

        $('.chart-container').append('<div class=\'topview-entry\' id=\'topview-entry-' + index + '\' style=\'background:linear-gradient(' + direction + ', #EEE ' + width + '%, transparent ' + width + '%)\'>\n         <span class=\'topview-entry--remove glyphicon glyphicon-remove\' data-article-id=' + (index - 1) + '\n           title=\'Remove this page from Topviews rankings\' aria-hidden=\'true\'></span>\n         <span class=\'topview-entry--rank\'>' + ++count + '</span>\n         <a class=\'topview-entry--label\' href="' + this.getPageURL(item.article) + '" target="_blank">' + item.article + '</a>\n         <span class=\'topview-entry--leader\'></span>\n         <a class=\'topview-entry--views\' href=\'' + this.getPageviewsURL(item.article) + '\'>' + this.formatNumber(item.views) + '</a></div>');
      }

      this.pushParams();
      this.stopSpinny();

      this.addExcludeListeners();
    }

    /**
     * Add given page(s) to list of excluded pages and optionally re-render the view
     * @param {Array|String} pages - page(s) to add to excludes
     * @param {Boolean} [triggerChange] - whether or not to re-render the view
     */

  }, {
    key: 'addExclude',
    value: function addExclude(pages) {
      var _this2 = this;

      var triggerChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!Array.isArray(pages)) pages = [pages];

      pages.forEach(function (page) {
        if (!_this2.excludes.includes(page)) {
          _this2.excludes.push(page);
        }
      });

      $(this.config.select2Input).html('');

      this.excludes.forEach(function (exclude) {
        var escapedText = $('<div>').text(exclude).html();
        $('<option>' + escapedText + '</option>').appendTo(_this2.config.select2Input);
      });

      if (triggerChange) $(this.config.select2Input).val(this.excludes).trigger('change');
    }

    /**
     * Re-add listeners to exclude pages, called after sorting or changing params
     */

  }, {
    key: 'addExcludeListeners',
    value: function addExcludeListeners() {
      var _this3 = this;

      $('.topview-entry--remove').off('click').on('click', function (e) {
        var pageName = _this3.pageNames[$(e.target).data('article-id')];
        _this3.addExclude(pageName);
        _this3.pushParams();
      });
    }

    /**
     * Clear the topviews search
     */

  }, {
    key: 'clearSearch',
    value: function clearSearch() {
      if ($('.topviews-search-icon').hasClass('glyphicon-remove')) {
        $('#topviews_search_field').val('');
        $('.topviews-search-icon').removeClass('glyphicon-remove').addClass('glyphicon-search');
        this.drawData();
      }
    }

    /**
     * Exports current chart data to CSV format and loads it in a new tab
     * With the prepended data:text/csv this should cause the browser to download the data
     * @override
     */

  }, {
    key: 'exportCSV',
    value: function exportCSV() {
      var csvContent = 'data:text/csv;charset=utf-8,Page,Views\n';

      this.pageData.forEach(function (entry) {
        // Build an array of page titles for use in the CSV header
        var title = '"' + entry.article.replace(/"/g, '""') + '"';

        csvContent += title + ',' + entry.views + '\n';
      });

      this.downloadData(csvContent, 'csv');
    }

    /**
     * Exports current chart data to JSON format and loads it in a new tab
     * @override
     */

  }, {
    key: 'exportJSON',
    value: function exportJSON() {
      var jsonContent = 'data:text/json;charset=utf-8,' + JSON.stringify(this.pageData);
      this.downloadData(jsonContent, 'json');
    }

    /**
     * Get informative filename without extension to be used for export options
     * @return {string} filename without an extension
     * @override
     */

  }, {
    key: 'getExportFilename',
    value: function getExportFilename() {
      var datepickerValue = this.datepicker.getDate();
      var date = void 0;

      if (this.isMonthly()) {
        date = moment(datepickerValue).format('YYYY/MM');
      } else {
        date = moment(datepickerValue).format('YYYY/MM/DD');
      }

      return this.app + '-' + date;
    }

    /**
     * Link to /pageviews for given article and chosen daterange
     * @param {string} article - page name
     * @returns {string} URL
     */

  }, {
    key: 'getPageviewsURL',
    value: function getPageviewsURL(article) {
      // first get the date range
      var date = moment(this.datepicker.getDate());
      var startDate = void 0,
          endDate = void 0;
      if (this.isMonthly()) {
        startDate = date.format('YYYY-MM-01');
        endDate = date.endOf('month').format('YYYY-MM-DD');
      } else {
        // surround single dates with 3 days to make the pageviews chart meaningful
        startDate = moment(date).subtract(3, 'days').format('YYYY-MM-DD');
        endDate = date.add(3, 'days').format('YYYY-MM-DD');
      }

      var platform = $(this.config.platformSelector).val(),
          project = $(this.config.projectInput).val();

      return '/pageviews?start=' + startDate + '&end=' + endDate + '&project=' + project + '&platform=' + platform + '&pages=' + article;
    }

    /**
     * Get all user-inputted parameters except the pages
     * @param {boolean} [specialRange] whether or not to include the special range instead of start/end, if applicable
     * @return {Object} project, platform, excludes, etc.
     */

  }, {
    key: 'getParams',
    value: function getParams() {
      var specialRange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var params = {
        project: $(this.config.projectInput).val(),
        platform: $(this.config.platformSelector).val()
      };

      var datepickerValue = this.datepicker.getDate();

      /**
       * Override start and end with custom range values,
       *   if configured (set by URL params or setupDateRangeSelector)
       */
      if (this.specialRange && specialRange) {
        params.date = this.specialRange.range;
      } else if (this.isMonthly()) {
        params.date = moment(datepickerValue).format('YYYY-MM');
      } else {
        params.date = moment(datepickerValue).format('YYYY-MM-DD');
      }

      return params;
    }

    /**
     * Get params needed to create a permanent link of visible data
     * @return {Object} hash of params
     */

  }, {
    key: 'getPermaLink',
    value: function getPermaLink() {
      var params = this.getParams(false);
      delete params.range;
      return params;
    }

    /**
     * Set datepicker based on provided relative range
     * @param {String} range - e.g. 'last-month', 'yesterday'
     * @returns {Boolean} whether a valid range was provided and was set
     * @override
     */

  }, {
    key: 'setSpecialRange',
    value: function setSpecialRange(range) {
      if (range === 'last-month') {
        this.setupDateRangeSelector('monthly');
        this.datepicker.setDate(this.config.maxMonth);
        this.specialRange = {
          range: range,
          value: moment(this.config.maxMonth).format('YYYY/MM')
        };
      } else if (range === 'yesterday') {
        this.setupDateRangeSelector('daily');
        this.datepicker.setDate(this.config.maxDate);
        this.specialRange = {
          range: range,
          value: moment(this.config.maxDate).format('YYYY-MM-DD')
        };
      } else {
        return false;
      }

      return true;
    }

    /**
     * Set datepicker based on provided date or range
     * @param {String} dateInput - either a range like 'last-month', 'yesterday' or date with format 'YYYY-MM-DD'
     * @return {null}
     */

  }, {
    key: 'setDate',
    value: function setDate(dateInput) {
      var date = void 0;

      if (/\d{4}-\d{2}$/.test(dateInput)) {
        // monthly
        this.setupDateRangeSelector('monthly');
        date = moment(dateInput + '-01').toDate();

        // if over max, set to max
        if (date > this.config.maxMonth) {
          date = this.config.maxMonth;
        }
      } else if (/\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
        // daily
        this.setupDateRangeSelector('daily');
        date = moment(dateInput).toDate();

        // if over max, set to max (Topviews maxDate is a Date object, not moment)
        if (date > this.config.maxDate) {
          date = this.config.maxDate;
        }
      } else {
        // attempt to set as special range, or default range if range is invalid
        return this.setSpecialRange(dateInput) || this.setSpecialRange(this.config.defaults.dateRange);
      }

      // if less than min, throw error (since this is a common request)
      if (date < this.config.minDate.toDate()) {
        // use super.dateFormat since this is for moment, not for our datepicker
        this.toastError('\n        <strong>' + $.i18n('invalid-params') + '</strong>\n        ' + $.i18n('param-error-1', moment(this.config.minDate).format(_get(TopViews.prototype.__proto__ || Object.getPrototypeOf(TopViews.prototype), 'dateFormat', this))) + '\n      ');
        date = this.config.minDate.toDate();
      }

      return this.datepicker.setDate(date);
    }

    /**
     * Parses the URL query string and sets all the inputs accordingly
     * Should only be called on initial page load, until we decide to support pop states (probably never)
     */

  }, {
    key: 'popParams',
    value: function popParams() {
      var _this4 = this;

      /** show loading indicator and add error handling for timeouts */
      this.startSpinny();

      var params = this.validateParams(this.parseQueryString('excludes'));

      // FIXME: remove once all affected wikis/links have been updated
      if (params.range || params.start || params.end) {
        this.fixLegacyDates(params);
        this.toastWarn('\n        <strong>Topviews has been revamped!</strong>\n        Custom date ranges are\n        <a href=\'//meta.wikimedia.org/wiki/Special:Permalink/15931284#Topviews_revamped\'>no longer supported</a>.\n        Using defaults instead.\n      ');
      }

      this.setDate(params.date); // also performs validations

      $(this.config.projectInput).val(params.project);
      $(this.config.platformSelector).val(params.platform);
      this.patchUsage();

      this.excludes = (params.excludes || []).map(function (exclude) {
        return decodeURIComponent(exclude.descore());
      });

      this.params = location.search;

      this.initData().done(function () {
        _this4.drawData();
      }).always(function () {
        _this4.setupSelect2();
        _this4.setupListeners();
      });
    }

    /**
     * Fix legacy links to Topviews that used a defined date range.
     * Instead, we'll determine how wide the range is, and if it's greater than 3 days
     *   then use the month, otherwise use the first day of the range
     * @param {Object} params - params as provided by this.parseQueryString
     * @returns {Object} modified params with corrected dates
     */

  }, {
    key: 'fixLegacyDates',
    value: function fixLegacyDates(params) {
      // all is well if we were given a date parameter (new version)
      //   or if no date params were provided
      if (params.date || !params.start && !params.end && !params.range) return params;

      // use last-month if any range was provided
      if (params.range) {
        params.date = 'last-month';
        return params;
      }

      // if invalid start/end use last-month
      var dateRegex = /\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(params.start) && !dateRegex.test(params.end)) {
        params.date = 'last-month';
        return params;
      }

      var startDate = moment(params.start, 'YYYY-MM-DD'),
          endDate = moment(params.end, 'YYYY-MM-DD'),
          numDays = Math.abs(endDate.diff(startDate, 'days'));

      if (numDays > 3) {
        params.date = startDate.format('YYYY-MM');
      } else {
        params.date = params.start;
      }

      return params;
    }

    /**
     * Replaces history state with new URL query string representing current user input
     * Called whenever we go to update the chart
     */

  }, {
    key: 'pushParams',
    value: function pushParams() {
      var excludes = this.underscorePageNames(this.excludes).join('|').replace(/[&%?]/g, escape);

      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, document.title, '?' + $.param(this.getParams()) + '&excludes=' + excludes);
      }

      $('.permalink').prop('href', '?' + $.param(this.getPermaLink()) + '&excludes=' + excludes);
    }

    /**
     * Removes all Select2 related stuff then adds it back
     */

  }, {
    key: 'resetSelect2',
    value: function resetSelect2() {
      var select2Input = $(this.config.select2Input);
      select2Input.off('change');
      select2Input.val(null);
      select2Input.html('');
      select2Input.select2('data', null);
      select2Input.select2('destroy');
      this.setupSelect2();
    }

    /**
     * Removes chart, messages, and resets Select2 selections
     * @param {Boolean} [clearSelector] - whether to clear the Select2 control
     */

  }, {
    key: 'resetView',
    value: function resetView() {
      var clearSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.max = null;
      this.offset = 0;
      this.pageData = [];
      this.pageNames = [];
      this.stopSpinny(true);
      $('.chart-container').html('');
      $('.message-container').html('');
      if (clearSelector) {
        this.resetSelect2();
        this.excludes = [];
      }
    }

    /**
     * Search the topviews data for the given page title
     * and restrict the view to the matches
     * @return {null}
     */

  }, {
    key: 'searchTopviews',
    value: function searchTopviews() {
      var _this5 = this;

      var query = $('#topviews_search_field').val().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

      if (!query) return this.clearSearch();

      var matchedData = [],
          count = 0;

      // add ranking to pageData and fetch matches
      this.pageData.forEach(function (entry, index) {
        if (!_this5.excludes.includes(entry.article)) {
          count++;
          if (new RegExp(query, 'i').test(entry.article)) {
            entry.rank = count;
            entry.index = index;
            matchedData.push(entry);
          }
        }
      });

      $('.chart-container').html('');
      $('.expand-chart').hide();
      $('.topviews-search-icon').removeClass('glyphicon-search').addClass('glyphicon-remove');

      matchedData.forEach(function (item) {
        var width = 100 * (item.views / _this5.max),
            direction = !!i18nRtl ? 'to left' : 'to right';

        $('.chart-container').append('<div class=\'topview-entry\' style=\'background:linear-gradient(' + direction + ', #EEE ' + width + '%, transparent ' + width + '%)\'>\n         <span class=\'topview-entry--remove glyphicon glyphicon-remove\' data-article-id=' + item.index + ' aria-hidden=\'true\'></span>\n         <span class=\'topview-entry--rank\'>' + item.rank + '</span>\n         <a class=\'topview-entry--label\' href="' + _this5.getPageURL(item.article) + '" target="_blank">' + item.article + '</a>\n         <span class=\'topview-entry--leader\'></span>\n         <a class=\'topview-entry--views\' href=\'' + _this5.getPageviewsURL(item.article) + '\'>' + _this5.formatNumber(item.views) + '</a></div>');
      });

      this.addExcludeListeners();
    }

    /**
     * Calls parent setupProjectInput and updates the view if validations passed
     *   reverting to the old value if the new one is invalid
     * @override
     */

  }, {
    key: 'validateProject',
    value: function validateProject(e) {
      if (_get(TopViews.prototype.__proto__ || Object.getPrototypeOf(TopViews.prototype), 'validateProject', this).call(this, e)) {
        this.resetView(true);
        this.processInput();
      }
    }

    /**
     * Sets up the Select2 selector and adds listener to update chart
     * @param {array} excludes - default page names to exclude
     */

  }, {
    key: 'setupSelect2',
    value: function setupSelect2() {
      var _this6 = this;

      var excludes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.excludes;

      var select2Input = $(this.config.select2Input);

      select2Input.select2({
        data: [],
        maximumSelectionLength: 50,
        minimumInputLength: 0,
        placeholder: $.i18n('hover-to-exclude')
      });

      if (excludes.length) this.setSelect2Defaults(excludes);

      select2Input.on('change', function (e) {
        _this6.excludes = $(e.target).val() || [];
        _this6.max = null;
        _this6.clearSearch();
        _this6.drawData();
      });

      /**
       * for topviews we don't want the user input functionality of Select2
       * setTimeout of 0 to let rendering threads catch up and actually disable the field
       */
      setTimeout(function () {
        $('.select2-search__field').prop('disabled', true);
      });
    }

    /**
     * Directly set pages in Select2 selector
     * Currently is not able to remove underscore from page names
     *
     * @param {array} pages - page titles
     * @returns {array} - untouched array of pages
     */

  }, {
    key: 'setSelect2Defaults',
    value: function setSelect2Defaults(pages) {
      var _this7 = this;

      pages = pages.map(function (page) {
        // page = page.replace(/ /g, '_');
        var escapedText = $('<div>').text(page).html();
        $('<option>' + escapedText + '</option>').appendTo(_this7.config.select2Input);
        return page;
      });
      $(this.config.select2Input).select2('val', pages);

      return pages;
    }

    /**
     * sets up the datepicker based on given type
     * @param {String} [type] - either 'monthly' or 'daily'
     * @override
     */

  }, {
    key: 'setupDateRangeSelector',
    value: function setupDateRangeSelector() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'monthly';

      $('#date-type-select').val(type);

      var datepickerParams = type === 'monthly' ? {
        format: 'MM yyyy',
        viewMode: 'months',
        minViewMode: 'months',
        endDate: this.config.maxMonth
      } : {
        format: this.dateFormat,
        viewMode: 'days',
        endDate: this.config.maxDate
      };

      $(this.config.dateRangeSelector).datepicker('destroy');
      $(this.config.dateRangeSelector).datepicker(Object.assign({
        autoclose: true,
        startDate: this.config.minDate.toDate()
      }, datepickerParams));
    }

    /**
     * General place to add page-wide listeners
     */

  }, {
    key: 'setupListeners',
    value: function setupListeners() {
      var _this8 = this;

      _get(TopViews.prototype.__proto__ || Object.getPrototypeOf(TopViews.prototype), 'setupListeners', this).call(this);

      $(this.config.platformSelector).on('change', this.processInput.bind(this));
      $('#date-type-select').on('change', function (e) {
        // also calls setupDateRangeSelector
        _this8.setSpecialRange(_this8.isMonthly() ? 'last-month' : 'yesterday');
      });
      $('.expand-chart').on('click', function () {
        _this8.offset += _this8.config.pageSize;
        _this8.drawData();
      });
      $(this.config.dateRangeSelector).on('change', function (e) {
        /** clear out specialRange if it doesn't match our input */
        if (_this8.specialRange && _this8.specialRange.value !== e.target.value) {
          _this8.specialRange = null;
        }
        _this8.processInput();
      });
      $('.mainspace-only-option').on('click', this.processInput.bind(this));
      $('#topviews_search_field').on('keyup', this.searchTopviews.bind(this));
      $('.topviews-search-icon').on('click', this.clearSearch.bind(this));
    }

    /**
     * Add the loading indicator class and set the safeguard timeout
     * @override
     */

  }, {
    key: 'startSpinny',
    value: function startSpinny() {
      _get(TopViews.prototype.__proto__ || Object.getPrototypeOf(TopViews.prototype), 'startSpinny', this).call(this);
      $('.expand-chart').hide();
      $('.data-links').addClass('invisible');
      $('.search-topviews').addClass('invisible');
      $('.data-notice').addClass('invisible');
    }

    /**
     * Remove loading indicator class and clear the safeguard timeout
     * @param {Boolean} hideDataLinks - whether or not to hide the data links
     * @override
     */

  }, {
    key: 'stopSpinny',
    value: function stopSpinny(hideDataLinks) {
      _get(TopViews.prototype.__proto__ || Object.getPrototypeOf(TopViews.prototype), 'stopSpinny', this).call(this);
      if (!hideDataLinks) {
        $('.data-links').removeClass('invisible');
        $('.search-topviews').removeClass('invisible');
        $('.data-notice').removeClass('invisible');
        $('.expand-chart').show();
      }
    }

    /**
     * Get date format to use based on settings
     * @returns {string} date format to passed to parser
     * @override
     */

  }, {
    key: 'isMonthly',


    /**
     * Are we in 'monthly' mode? (If we aren't then we're in daily)
     * @return {Boolean} yes or no
     */
    value: function isMonthly() {
      return $('#date-type-select').val() === 'monthly';
    }

    /**
     * Get the currently selected date for the purposes of pageviews API call
     * @return {String} formatted date
     */

  }, {
    key: 'getAPIDate',
    value: function getAPIDate() {
      var datepickerValue = this.datepicker.getDate();

      if (this.isMonthly()) {
        return moment(datepickerValue).format('YYYY/MM') + '/all-days';
      } else {
        return moment(datepickerValue).format('YYYY/MM/DD');
      }
    }

    /**
     * Fetch data from API
     * @returns {Deferred} promise with data
     */

  }, {
    key: 'initData',
    value: function initData() {
      var _this9 = this;

      var dfd = $.Deferred();

      this.startSpinny();

      var access = $(this.config.platformSelector).val();

      $.ajax({
        url: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/top/' + this.project + '/' + access + '/' + this.getAPIDate(),
        dataType: 'json'
      }).done(function (data) {
        // store pageData from API, removing underscores from the page name
        _this9.pageData = data.items[0].articles.map(function (page) {
          page.article = page.article.descore();
          return page;
        });

        /** build the pageNames array for Select2 */
        _this9.pageNames = _this9.pageData.map(function (page) {
          return page.article;
        });

        if ($('.mainspace-only-option').is(':checked')) {
          _this9.filterOutNamespace(_this9.pageNames).done(function (pageNames) {
            _this9.pageNames = pageNames;
            _this9.pageData = _this9.pageData.filter(function (page) {
              return pageNames.includes(page.article);
            });
            return dfd.resolve(_this9.pageData);
          });
        } else {
          return dfd.resolve(_this9.pageData);
        }
      }).fail(function (errorData) {
        _this9.resetView();
        _this9.writeMessage($.i18n('api-error', 'Pageviews API') + ' - ' + errorData.responseJSON.title);
        return dfd.reject();
      });

      return dfd;
    }

    /**
     * Get the pages that are not in the given namespace
     * @param {array} pages - pages to filter
     * @param {Number} [restrictedNamespace] - ID of the namespace to restrict to, defaults to 0 (mainspace)
     * @return {Deferred} promise resolving with pages in given namespace
     */

  }, {
    key: 'filterOutNamespace',
    value: function filterOutNamespace(pages) {
      var _this10 = this;

      var restrictedNamespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var dfd = $.Deferred();

      var doFiltering = function doFiltering(entries, unacceptableNamespaces) {
        return entries.filter(function (entry) {
          var ns = entry.split(':')[0];

          // include main page as non-mainspace
          if (restrictedNamespace === 0 && entry === _this10.getSiteInfo(_this10.project).general.mainpage) {
            return false;
          }

          // Verify there was a namespace. For instance, don't filter out a mainspace article
          //  called 'Search', when we wanted to filter out Special:Search
          if (!entry.includes(':')) return true;

          return !unacceptableNamespaces.includes(ns);
        });
      };

      this.fetchSiteInfo(this.project).done(function () {
        var unacceptableNamespaces = [];

        // for non-mainspace, count 'Wikipedia' and 'Special' since API seems to
        //  include for instance both Wikipedia and Wikipédia in some projects
        // FIXME: the 'Sp?cial' is an apparent bug, see phab:T145043
        if (restrictedNamespace === 0) {
          unacceptableNamespaces = ['Wikipedia', 'Special', 'Sp?cial'];
        }

        for (var ns in _this10.getSiteInfo(_this10.project).namespaces) {
          unacceptableNamespaces.push(_this10.getSiteInfo(_this10.project).namespaces[ns]['*']);
        }

        // the actual filtering of the given pages
        pages = doFiltering(pages, unacceptableNamespaces);

        // remove excludes that would otherwise automatically be filtered out
        _this10.excludes = doFiltering(_this10.excludes, unacceptableNamespaces);

        dfd.resolve(pages);
      }).fail(function () {
        _this10.writeMessage('' + $.i18n('api-error', 'Siteinfo API'));
        dfd.resolve(pages);
      });

      return dfd;
    }
  }, {
    key: 'dateFormat',
    get: function get() {
      return _get(TopViews.prototype.__proto__ || Object.getPrototypeOf(TopViews.prototype), 'dateFormat', this).toLowerCase();
    }

    /**
     * Get instance of datepicker
     * @return {Object} the datepicker instance
     */

  }, {
    key: 'datepicker',
    get: function get() {
      return $(this.config.dateRangeSelector).data('datepicker');
    }
  }]);

  return TopViews;
}(Pv);

$(document).ready(function () {
  /** assume hash params are supposed to be query params */
  if (document.location.hash && !document.location.search) {
    return document.location.href = document.location.href.replace('#', '?');
  } else if (document.location.hash) {
    return document.location.href = document.location.href.replace(/\#.*/, '');
  }

  new TopViews();
});

},{"../shared/pv":3,"./config":6}]},{},[7]);
>>>>>>> sqush me
