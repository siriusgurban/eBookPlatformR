function U_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Ct=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zp={exports:{}},Ca={},em={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),B_=Symbol.for("react.portal"),W_=Symbol.for("react.fragment"),$_=Symbol.for("react.strict_mode"),H_=Symbol.for("react.profiler"),V_=Symbol.for("react.provider"),Y_=Symbol.for("react.context"),G_=Symbol.for("react.forward_ref"),Q_=Symbol.for("react.suspense"),K_=Symbol.for("react.memo"),q_=Symbol.for("react.lazy"),vd=Symbol.iterator;function X_(e){return e===null||typeof e!="object"?null:(e=vd&&e[vd]||e["@@iterator"],typeof e=="function"?e:null)}var tm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nm=Object.assign,rm={};function Gr(e,t,n){this.props=e,this.context=t,this.refs=rm,this.updater=n||tm}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function im(){}im.prototype=Gr.prototype;function bc(e,t,n){this.props=e,this.context=t,this.refs=rm,this.updater=n||tm}var Ic=bc.prototype=new im;Ic.constructor=bc;nm(Ic,Gr.prototype);Ic.isPureReactComponent=!0;var yd=Array.isArray,sm=Object.prototype.hasOwnProperty,Nc={current:null},om={key:!0,ref:!0,__self:!0,__source:!0};function am(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)sm.call(t,r)&&!om.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:_s,type:e,key:s,ref:o,props:i,_owner:Nc.current}}function J_(e,t){return{$$typeof:_s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tc(e){return typeof e=="object"&&e!==null&&e.$$typeof===_s}function Z_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _d=/\/+/g;function ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Z_(""+e.key):t.toString(36)}function po(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case _s:case B_:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ll(o,0):r,yd(i)?(n="",e!=null&&(n=e.replace(_d,"$&/")+"/"),po(i,t,n,"",function(u){return u})):i!=null&&(Tc(i)&&(i=J_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_d,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",yd(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+ll(s,a);o+=po(s,t,n,l,i)}else if(l=X_(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+ll(s,a++),o+=po(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function js(e,t,n){if(e==null)return e;var r=[],i=0;return po(e,r,"","",function(s){return t.call(n,s,i++)}),r}function e0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},mo={transition:null},t0={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:mo,ReactCurrentOwner:Nc};B.Children={map:js,forEach:function(e,t,n){js(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return js(e,function(){t++}),t},toArray:function(e){return js(e,function(t){return t})||[]},only:function(e){if(!Tc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Gr;B.Fragment=W_;B.Profiler=H_;B.PureComponent=bc;B.StrictMode=$_;B.Suspense=Q_;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nm({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Nc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)sm.call(t,l)&&!om.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:_s,type:e.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(e){return e={$$typeof:Y_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:V_,_context:e},e.Consumer=e};B.createElement=am;B.createFactory=function(e){var t=am.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:G_,render:e}};B.isValidElement=Tc;B.lazy=function(e){return{$$typeof:q_,_payload:{_status:-1,_result:e},_init:e0}};B.memo=function(e,t){return{$$typeof:K_,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=mo.transition;mo.transition={};try{e()}finally{mo.transition=t}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(e,t){return De.current.useCallback(e,t)};B.useContext=function(e){return De.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return De.current.useDeferredValue(e)};B.useEffect=function(e,t){return De.current.useEffect(e,t)};B.useId=function(){return De.current.useId()};B.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return De.current.useMemo(e,t)};B.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};B.useRef=function(e){return De.current.useRef(e)};B.useState=function(e){return De.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return De.current.useTransition()};B.version="18.2.0";em.exports=B;var x=em.exports;const Sa=Jp(x),n0=U_({__proto__:null,default:Sa},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=x,i0=Symbol.for("react.element"),s0=Symbol.for("react.fragment"),o0=Object.prototype.hasOwnProperty,a0=r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l0={key:!0,ref:!0,__self:!0,__source:!0};function lm(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)o0.call(t,r)&&!l0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:i0,type:e,key:s,ref:o,props:i,_owner:a0.current}}Ca.Fragment=s0;Ca.jsx=lm;Ca.jsxs=lm;Zp.exports=Ca;var w=Zp.exports,Jl={},um={exports:{}},Qe={},cm={exports:{}},fm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,D){var L=P.length;P.push(D);e:for(;0<L;){var le=L-1>>>1,ve=P[le];if(0<i(ve,D))P[le]=D,P[L]=ve,L=le;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],L=P.pop();if(L!==D){P[0]=L;e:for(var le=0,ve=P.length,Ms=ve>>>1;le<Ms;){var xn=2*(le+1)-1,al=P[xn],bn=xn+1,Fs=P[bn];if(0>i(al,L))bn<ve&&0>i(Fs,al)?(P[le]=Fs,P[bn]=L,le=bn):(P[le]=al,P[xn]=L,le=xn);else if(bn<ve&&0>i(Fs,L))P[le]=Fs,P[bn]=L,le=bn;else break e}}return D}function i(P,D){var L=P.sortIndex-D.sortIndex;return L!==0?L:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,c=null,d=3,g=!1,v=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function _(P){if(y=!1,m(P),!v)if(n(l)!==null)v=!0,sl(S);else{var D=n(u);D!==null&&ol(_,D.startTime-P)}}function S(P,D){v=!1,y&&(y=!1,p(O),O=-1),g=!0;var L=d;try{for(m(D),c=n(l);c!==null&&(!(c.expirationTime>D)||P&&!rt());){var le=c.callback;if(typeof le=="function"){c.callback=null,d=c.priorityLevel;var ve=le(c.expirationTime<=D);D=e.unstable_now(),typeof ve=="function"?c.callback=ve:c===n(l)&&r(l),m(D)}else r(l);c=n(l)}if(c!==null)var Ms=!0;else{var xn=n(u);xn!==null&&ol(_,xn.startTime-D),Ms=!1}return Ms}finally{c=null,d=L,g=!1}}var N=!1,T=null,O=-1,H=5,F=-1;function rt(){return!(e.unstable_now()-F<H)}function ri(){if(T!==null){var P=e.unstable_now();F=P;var D=!0;try{D=T(!0,P)}finally{D?ii():(N=!1,T=null)}}else N=!1}var ii;if(typeof h=="function")ii=function(){h(ri)};else if(typeof MessageChannel<"u"){var gd=new MessageChannel,z_=gd.port2;gd.port1.onmessage=ri,ii=function(){z_.postMessage(null)}}else ii=function(){E(ri,0)};function sl(P){T=P,N||(N=!0,ii())}function ol(P,D){O=E(function(){P(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,sl(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var L=d;d=D;try{return P()}finally{d=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=d;d=P;try{return D()}finally{d=L}},e.unstable_scheduleCallback=function(P,D,L){var le=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?le+L:le):L=le,P){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=L+ve,P={id:f++,callback:D,priorityLevel:P,startTime:L,expirationTime:ve,sortIndex:-1},L>le?(P.sortIndex=L,t(u,P),n(l)===null&&P===n(u)&&(y?(p(O),O=-1):y=!0,ol(_,L-le))):(P.sortIndex=ve,t(l,P),v||g||(v=!0,sl(S))),P},e.unstable_shouldYield=rt,e.unstable_wrapCallback=function(P){var D=d;return function(){var L=d;d=D;try{return P.apply(this,arguments)}finally{d=L}}}})(fm);cm.exports=fm;var u0=cm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm=x,Ge=u0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hm=new Set,Fi={};function Jn(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(Fi[e]=t,e=0;e<t.length;e++)hm.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,c0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wd={},Ed={};function f0(e){return Zl.call(Ed,e)?!0:Zl.call(wd,e)?!1:c0.test(e)?Ed[e]=!0:(wd[e]=!0,!1)}function d0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function h0(e,t,n,r){if(t===null||typeof t>"u"||d0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pc=/[\-:]([a-z])/g;function Rc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pc,Rc);xe[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pc,Rc);xe[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pc,Rc);xe[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Oc(e,t,n,r){var i=xe.hasOwnProperty(t)?xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(h0(t,n,i,r)&&(n=null),r||i===null?f0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zs=Symbol.for("react.element"),ar=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),eu=Symbol.for("react.profiler"),pm=Symbol.for("react.provider"),mm=Symbol.for("react.context"),Dc=Symbol.for("react.forward_ref"),tu=Symbol.for("react.suspense"),nu=Symbol.for("react.suspense_list"),Lc=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),gm=Symbol.for("react.offscreen"),Cd=Symbol.iterator;function si(e){return e===null||typeof e!="object"?null:(e=Cd&&e[Cd]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,ul;function vi(e){if(ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ul=t&&t[1]||""}return`
`+ul+e}var cl=!1;function fl(e,t){if(!e||cl)return"";cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vi(e):""}function p0(e){switch(e.tag){case 5:return vi(e.type);case 16:return vi("Lazy");case 13:return vi("Suspense");case 19:return vi("SuspenseList");case 0:case 2:case 15:return e=fl(e.type,!1),e;case 11:return e=fl(e.type.render,!1),e;case 1:return e=fl(e.type,!0),e;default:return""}}function ru(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case ar:return"Portal";case eu:return"Profiler";case Ac:return"StrictMode";case tu:return"Suspense";case nu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mm:return(e.displayName||"Context")+".Consumer";case pm:return(e._context.displayName||"Context")+".Provider";case Dc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lc:return t=e.displayName||null,t!==null?t:ru(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return ru(e(t))}catch{}}return null}function m0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ru(t);case 8:return t===Ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function g0(e){var t=vm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Us(e){e._valueTracker||(e._valueTracker=g0(e))}function ym(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function To(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function iu(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _m(e,t){t=t.checked,t!=null&&Oc(e,"checked",t,!1)}function su(e,t){_m(e,t);var n=pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ou(e,t.type,n):t.hasOwnProperty("defaultValue")&&ou(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ou(e,t,n){(t!=="number"||To(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yi=Array.isArray;function Sr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function au(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(yi(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pn(n)}}function wm(e,t){var n=pn(t.value),r=pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Em(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Em(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bs,Cm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ji(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v0=["Webkit","ms","Moz","O"];Object.keys(Ci).forEach(function(e){v0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ci[t]=Ci[e]})});function Sm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ci.hasOwnProperty(e)&&Ci[e]?(""+t).trim():t+"px"}function km(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var y0=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uu(e,t){if(t){if(y0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function cu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fu=null;function Mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var du=null,kr=null,xr=null;function Id(e){if(e=Cs(e)){if(typeof du!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Na(t),du(e.stateNode,e.type,t))}}function xm(e){kr?xr?xr.push(e):xr=[e]:kr=e}function bm(){if(kr){var e=kr,t=xr;if(xr=kr=null,Id(e),t)for(e=0;e<t.length;e++)Id(t[e])}}function Im(e,t){return e(t)}function Nm(){}var dl=!1;function Tm(e,t,n){if(dl)return e(t,n);dl=!0;try{return Im(e,t,n)}finally{dl=!1,(kr!==null||xr!==null)&&(Nm(),bm())}}function zi(e,t){var n=e.stateNode;if(n===null)return null;var r=Na(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var hu=!1;if(Rt)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){hu=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{hu=!1}function _0(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Si=!1,Po=null,Ro=!1,pu=null,w0={onError:function(e){Si=!0,Po=e}};function E0(e,t,n,r,i,s,o,a,l){Si=!1,Po=null,_0.apply(w0,arguments)}function C0(e,t,n,r,i,s,o,a,l){if(E0.apply(this,arguments),Si){if(Si){var u=Po;Si=!1,Po=null}else throw Error(C(198));Ro||(Ro=!0,pu=u)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nd(e){if(Zn(e)!==e)throw Error(C(188))}function S0(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Nd(i),e;if(s===r)return Nd(i),t;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Rm(e){return e=S0(e),e!==null?Om(e):null}function Om(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Om(e);if(t!==null)return t;e=e.sibling}return null}var Am=Ge.unstable_scheduleCallback,Td=Ge.unstable_cancelCallback,k0=Ge.unstable_shouldYield,x0=Ge.unstable_requestPaint,ue=Ge.unstable_now,b0=Ge.unstable_getCurrentPriorityLevel,Fc=Ge.unstable_ImmediatePriority,Dm=Ge.unstable_UserBlockingPriority,Oo=Ge.unstable_NormalPriority,I0=Ge.unstable_LowPriority,Lm=Ge.unstable_IdlePriority,ka=null,wt=null;function N0(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(ka,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:R0,T0=Math.log,P0=Math.LN2;function R0(e){return e>>>=0,e===0?32:31-(T0(e)/P0|0)|0}var Ws=64,$s=4194304;function _i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_i(a):(s&=o,s!==0&&(r=_i(s)))}else o=n&~i,o!==0?r=_i(o):s!==0&&(r=_i(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function O0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-dt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=O0(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function mu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mm(){var e=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),e}function hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ws(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function D0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function jc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function Fm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jm,zc,zm,Um,Bm,gu=!1,Hs=[],en=null,tn=null,nn=null,Ui=new Map,Bi=new Map,Gt=[],L0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pd(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(t.pointerId)}}function ai(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Cs(t),t!==null&&zc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function M0(e,t,n,r,i){switch(t){case"focusin":return en=ai(en,e,t,n,r,i),!0;case"dragenter":return tn=ai(tn,e,t,n,r,i),!0;case"mouseover":return nn=ai(nn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ui.set(s,ai(Ui.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bi.set(s,ai(Bi.get(s)||null,e,t,n,r,i)),!0}return!1}function Wm(e){var t=Rn(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=Pm(n),t!==null){e.blockedOn=t,Bm(e.priority,function(){zm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fu=r,n.target.dispatchEvent(r),fu=null}else return t=Cs(n),t!==null&&zc(t),e.blockedOn=n,!1;t.shift()}return!0}function Rd(e,t,n){go(e)&&n.delete(t)}function F0(){gu=!1,en!==null&&go(en)&&(en=null),tn!==null&&go(tn)&&(tn=null),nn!==null&&go(nn)&&(nn=null),Ui.forEach(Rd),Bi.forEach(Rd)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,gu||(gu=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,F0)))}function Wi(e){function t(i){return li(i,e)}if(0<Hs.length){li(Hs[0],e);for(var n=1;n<Hs.length;n++){var r=Hs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(en!==null&&li(en,e),tn!==null&&li(tn,e),nn!==null&&li(nn,e),Ui.forEach(t),Bi.forEach(t),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)Wm(n),n.blockedOn===null&&Gt.shift()}var br=zt.ReactCurrentBatchConfig,Do=!0;function j0(e,t,n,r){var i=V,s=br.transition;br.transition=null;try{V=1,Uc(e,t,n,r)}finally{V=i,br.transition=s}}function z0(e,t,n,r){var i=V,s=br.transition;br.transition=null;try{V=4,Uc(e,t,n,r)}finally{V=i,br.transition=s}}function Uc(e,t,n,r){if(Do){var i=vu(e,t,n,r);if(i===null)Sl(e,t,r,Lo,n),Pd(e,r);else if(M0(i,e,t,n,r))r.stopPropagation();else if(Pd(e,r),t&4&&-1<L0.indexOf(e)){for(;i!==null;){var s=Cs(i);if(s!==null&&jm(s),s=vu(e,t,n,r),s===null&&Sl(e,t,r,Lo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sl(e,t,r,null,n)}}var Lo=null;function vu(e,t,n,r){if(Lo=null,e=Mc(r),e=Rn(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lo=e,null}function $m(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b0()){case Fc:return 1;case Dm:return 4;case Oo:case I0:return 16;case Lm:return 536870912;default:return 16}default:return 16}}var Kt=null,Bc=null,vo=null;function Hm(){if(vo)return vo;var e,t=Bc,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return vo=i.slice(e,1<r?1-r:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vs(){return!0}function Od(){return!1}function Ke(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vs:Od,this.isPropagationStopped=Od,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=Ke(Qr),Es=ie({},Qr,{view:0,detail:0}),U0=Ke(Es),pl,ml,ui,xa=ie({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(pl=e.screenX-ui.screenX,ml=e.screenY-ui.screenY):ml=pl=0,ui=e),pl)},movementY:function(e){return"movementY"in e?e.movementY:ml}}),Ad=Ke(xa),B0=ie({},xa,{dataTransfer:0}),W0=Ke(B0),$0=ie({},Es,{relatedTarget:0}),gl=Ke($0),H0=ie({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),V0=Ke(H0),Y0=ie({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G0=Ke(Y0),Q0=ie({},Qr,{data:0}),Dd=Ke(Q0),K0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X0[e])?!!t[e]:!1}function $c(){return J0}var Z0=ie({},Es,{key:function(e){if(e.key){var t=K0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),e1=Ke(Z0),t1=ie({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ld=Ke(t1),n1=ie({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),r1=Ke(n1),i1=ie({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),s1=Ke(i1),o1=ie({},xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a1=Ke(o1),l1=[9,13,27,32],Hc=Rt&&"CompositionEvent"in window,ki=null;Rt&&"documentMode"in document&&(ki=document.documentMode);var u1=Rt&&"TextEvent"in window&&!ki,Vm=Rt&&(!Hc||ki&&8<ki&&11>=ki),Md=" ",Fd=!1;function Ym(e,t){switch(e){case"keyup":return l1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function c1(e,t){switch(e){case"compositionend":return Gm(t);case"keypress":return t.which!==32?null:(Fd=!0,Md);case"textInput":return e=t.data,e===Md&&Fd?null:e;default:return null}}function f1(e,t){if(ur)return e==="compositionend"||!Hc&&Ym(e,t)?(e=Hm(),vo=Bc=Kt=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vm&&t.locale!=="ko"?null:t.data;default:return null}}var d1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!d1[e.type]:t==="textarea"}function Qm(e,t,n,r){xm(r),t=Mo(t,"onChange"),0<t.length&&(n=new Wc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xi=null,$i=null;function h1(e){sg(e,0)}function ba(e){var t=dr(e);if(ym(t))return e}function p1(e,t){if(e==="change")return t}var Km=!1;if(Rt){var vl;if(Rt){var yl="oninput"in document;if(!yl){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),yl=typeof zd.oninput=="function"}vl=yl}else vl=!1;Km=vl&&(!document.documentMode||9<document.documentMode)}function Ud(){xi&&(xi.detachEvent("onpropertychange",qm),$i=xi=null)}function qm(e){if(e.propertyName==="value"&&ba($i)){var t=[];Qm(t,$i,e,Mc(e)),Tm(h1,t)}}function m1(e,t,n){e==="focusin"?(Ud(),xi=t,$i=n,xi.attachEvent("onpropertychange",qm)):e==="focusout"&&Ud()}function g1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ba($i)}function v1(e,t){if(e==="click")return ba(t)}function y1(e,t){if(e==="input"||e==="change")return ba(t)}function _1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:_1;function Hi(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zl.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function Bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wd(e,t){var n=Bd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bd(n)}}function Xm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jm(){for(var e=window,t=To();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=To(e.document)}return t}function Vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function w1(e){var t=Jm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xm(n.ownerDocument.documentElement,n)){if(r!==null&&Vc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Wd(n,s);var o=Wd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var E1=Rt&&"documentMode"in document&&11>=document.documentMode,cr=null,yu=null,bi=null,_u=!1;function $d(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_u||cr==null||cr!==To(r)||(r=cr,"selectionStart"in r&&Vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&Hi(bi,r)||(bi=r,r=Mo(yu,"onSelect"),0<r.length&&(t=new Wc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cr)))}function Ys(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:Ys("Animation","AnimationEnd"),animationiteration:Ys("Animation","AnimationIteration"),animationstart:Ys("Animation","AnimationStart"),transitionend:Ys("Transition","TransitionEnd")},_l={},Zm={};Rt&&(Zm=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Ia(e){if(_l[e])return _l[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zm)return _l[e]=t[n];return e}var eg=Ia("animationend"),tg=Ia("animationiteration"),ng=Ia("animationstart"),rg=Ia("transitionend"),ig=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,t){ig.set(e,t),Jn(t,[e])}for(var wl=0;wl<Hd.length;wl++){var El=Hd[wl],C1=El.toLowerCase(),S1=El[0].toUpperCase()+El.slice(1);Cn(C1,"on"+S1)}Cn(eg,"onAnimationEnd");Cn(tg,"onAnimationIteration");Cn(ng,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(rg,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k1=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function Vd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,C0(r,t,void 0,e),e.currentTarget=null}function sg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Vd(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Vd(i,a,u),s=l}}}if(Ro)throw e=pu,Ro=!1,pu=null,e}function q(e,t){var n=t[ku];n===void 0&&(n=t[ku]=new Set);var r=e+"__bubble";n.has(r)||(og(t,e,2,!1),n.add(r))}function Cl(e,t,n){var r=0;t&&(r|=4),og(n,e,r,t)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function Vi(e){if(!e[Gs]){e[Gs]=!0,hm.forEach(function(n){n!=="selectionchange"&&(k1.has(n)||Cl(n,!1,e),Cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gs]||(t[Gs]=!0,Cl("selectionchange",!1,t))}}function og(e,t,n,r){switch($m(t)){case 1:var i=j0;break;case 4:i=z0;break;default:i=Uc}n=i.bind(null,t,n,e),i=void 0,!hu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Sl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Rn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Tm(function(){var u=s,f=Mc(n),c=[];e:{var d=ig.get(e);if(d!==void 0){var g=Wc,v=e;switch(e){case"keypress":if(yo(n)===0)break e;case"keydown":case"keyup":g=e1;break;case"focusin":v="focus",g=gl;break;case"focusout":v="blur",g=gl;break;case"beforeblur":case"afterblur":g=gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=r1;break;case eg:case tg:case ng:g=V0;break;case rg:g=s1;break;case"scroll":g=U0;break;case"wheel":g=a1;break;case"copy":case"cut":case"paste":g=G0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ld}var y=(t&4)!==0,E=!y&&e==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var h=u,m;h!==null;){m=h;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,p!==null&&(_=zi(h,p),_!=null&&y.push(Yi(h,_,m)))),E)break;h=h.return}0<y.length&&(d=new g(d,v,null,n,f),c.push({event:d,listeners:y}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==fu&&(v=n.relatedTarget||n.fromElement)&&(Rn(v)||v[Ot]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Rn(v):null,v!==null&&(E=Zn(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Ad,_="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ld,_="onPointerLeave",p="onPointerEnter",h="pointer"),E=g==null?d:dr(g),m=v==null?d:dr(v),d=new y(_,h+"leave",g,n,f),d.target=E,d.relatedTarget=m,_=null,Rn(f)===u&&(y=new y(p,h+"enter",v,n,f),y.target=m,y.relatedTarget=E,_=y),E=_,g&&v)t:{for(y=g,p=v,h=0,m=y;m;m=ir(m))h++;for(m=0,_=p;_;_=ir(_))m++;for(;0<h-m;)y=ir(y),h--;for(;0<m-h;)p=ir(p),m--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=ir(y),p=ir(p)}y=null}else y=null;g!==null&&Yd(c,d,g,y,!1),v!==null&&E!==null&&Yd(c,E,v,y,!0)}}e:{if(d=u?dr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var S=p1;else if(jd(d))if(Km)S=y1;else{S=g1;var N=m1}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=v1);if(S&&(S=S(e,u))){Qm(c,S,n,f);break e}N&&N(e,d,u),e==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&ou(d,"number",d.value)}switch(N=u?dr(u):window,e){case"focusin":(jd(N)||N.contentEditable==="true")&&(cr=N,yu=u,bi=null);break;case"focusout":bi=yu=cr=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,$d(c,n,f);break;case"selectionchange":if(E1)break;case"keydown":case"keyup":$d(c,n,f)}var T;if(Hc)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ur?Ym(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Vm&&n.locale!=="ko"&&(ur||O!=="onCompositionStart"?O==="onCompositionEnd"&&ur&&(T=Hm()):(Kt=f,Bc="value"in Kt?Kt.value:Kt.textContent,ur=!0)),N=Mo(u,O),0<N.length&&(O=new Dd(O,e,null,n,f),c.push({event:O,listeners:N}),T?O.data=T:(T=Gm(n),T!==null&&(O.data=T)))),(T=u1?c1(e,n):f1(e,n))&&(u=Mo(u,"onBeforeInput"),0<u.length&&(f=new Dd("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=T))}sg(c,t)})}function Yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zi(e,n),s!=null&&r.unshift(Yi(e,s,i)),s=zi(e,t),s!=null&&r.push(Yi(e,s,i))),e=e.return}return r}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yd(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=zi(n,s),l!=null&&o.unshift(Yi(n,l,a))):i||(l=zi(n,s),l!=null&&o.push(Yi(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var x1=/\r\n?/g,b1=/\u0000|\uFFFD/g;function Gd(e){return(typeof e=="string"?e:""+e).replace(x1,`
`).replace(b1,"")}function Qs(e,t,n){if(t=Gd(t),Gd(e)!==t&&n)throw Error(C(425))}function Fo(){}var wu=null,Eu=null;function Cu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,I1=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,N1=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(e){return Qd.resolve(null).then(e).catch(T1)}:Su;function T1(e){setTimeout(function(){throw e})}function kl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wi(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),yt="__reactFiber$"+Kr,Gi="__reactProps$"+Kr,Ot="__reactContainer$"+Kr,ku="__reactEvents$"+Kr,P1="__reactListeners$"+Kr,R1="__reactHandles$"+Kr;function Rn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kd(e);e!==null;){if(n=e[yt])return n;e=Kd(e)}return t}e=n,n=e.parentNode}return null}function Cs(e){return e=e[yt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Na(e){return e[Gi]||null}var xu=[],hr=-1;function Sn(e){return{current:e}}function Z(e){0>hr||(e.current=xu[hr],xu[hr]=null,hr--)}function K(e,t){hr++,xu[hr]=e.current,e.current=t}var mn={},Pe=Sn(mn),ze=Sn(!1),Bn=mn;function Lr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function jo(){Z(ze),Z(Pe)}function qd(e,t,n){if(Pe.current!==mn)throw Error(C(168));K(Pe,t),K(ze,n)}function ag(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,m0(e)||"Unknown",i));return ie({},n,r)}function zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Bn=Pe.current,K(Pe,e),K(ze,ze.current),!0}function Xd(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=ag(e,t,Bn),r.__reactInternalMemoizedMergedChildContext=e,Z(ze),Z(Pe),K(Pe,e)):Z(ze),K(ze,n)}var xt=null,Ta=!1,xl=!1;function lg(e){xt===null?xt=[e]:xt.push(e)}function O1(e){Ta=!0,lg(e)}function kn(){if(!xl&&xt!==null){xl=!0;var e=0,t=V;try{var n=xt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,Ta=!1}catch(i){throw xt!==null&&(xt=xt.slice(e+1)),Am(Fc,kn),i}finally{V=t,xl=!1}}return null}var pr=[],mr=0,Uo=null,Bo=0,Xe=[],Je=0,Wn=null,bt=1,It="";function In(e,t){pr[mr++]=Bo,pr[mr++]=Uo,Uo=e,Bo=t}function ug(e,t,n){Xe[Je++]=bt,Xe[Je++]=It,Xe[Je++]=Wn,Wn=e;var r=bt;e=It;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var s=32-dt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,bt=1<<32-dt(t)+i|n<<i|r,It=s+e}else bt=1<<s|n<<i|r,It=e}function Yc(e){e.return!==null&&(In(e,1),ug(e,1,0))}function Gc(e){for(;e===Uo;)Uo=pr[--mr],pr[mr]=null,Bo=pr[--mr],pr[mr]=null;for(;e===Wn;)Wn=Xe[--Je],Xe[Je]=null,It=Xe[--Je],Xe[Je]=null,bt=Xe[--Je],Xe[Je]=null}var Ye=null,Ve=null,te=!1,at=null;function cg(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Jd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Ve=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wn!==null?{id:bt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,Ve=null,!0):!1;default:return!1}}function bu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Iu(e){if(te){var t=Ve;if(t){var n=t;if(!Jd(e,t)){if(bu(e))throw Error(C(418));t=rn(n.nextSibling);var r=Ye;t&&Jd(e,t)?cg(r,n):(e.flags=e.flags&-4097|2,te=!1,Ye=e)}}else{if(bu(e))throw Error(C(418));e.flags=e.flags&-4097|2,te=!1,Ye=e}}}function Zd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function Ks(e){if(e!==Ye)return!1;if(!te)return Zd(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cu(e.type,e.memoizedProps)),t&&(t=Ve)){if(bu(e))throw fg(),Error(C(418));for(;t;)cg(e,t),t=rn(t.nextSibling)}if(Zd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Ye?rn(e.stateNode.nextSibling):null;return!0}function fg(){for(var e=Ve;e;)e=rn(e.nextSibling)}function Mr(){Ve=Ye=null,te=!1}function Qc(e){at===null?at=[e]:at.push(e)}var A1=zt.ReactCurrentBatchConfig;function st(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Wo=Sn(null),$o=null,gr=null,Kc=null;function qc(){Kc=gr=$o=null}function Xc(e){var t=Wo.current;Z(Wo),e._currentValue=t}function Nu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ir(e,t){$o=e,Kc=gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(Kc!==e)if(e={context:e,memoizedValue:t,next:null},gr===null){if($o===null)throw Error(C(308));gr=e,$o.dependencies={lanes:0,firstContext:e}}else gr=gr.next=e;return t}var On=null;function Jc(e){On===null?On=[e]:On.push(e)}function dg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Jc(t)):(n.next=i.next,i.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function Zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,At(e,n)}return i=r.interleaved,i===null?(t.next=t,Jc(r)):(t.next=i.next,i.next=t),r.interleaved=t,At(e,n)}function _o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jc(e,n)}}function eh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ho(e,t,n,r){var i=e.updateQueue;Yt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(d=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(g,c,d);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(g,c,d):v,d==null)break e;c=ie({},c,d);break e;case 2:Yt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=c):f=f.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Hn|=o,e.lanes=o,e.memoizedState=c}}function th(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var pg=new dm.Component().refs;function Tu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pa={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=an(e),s=Tt(r,i);s.payload=t,n!=null&&(s.callback=n),t=sn(e,s,i),t!==null&&(ht(t,e,i,r),_o(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),i=an(e),s=Tt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=sn(e,s,i),t!==null&&(ht(t,e,i,r),_o(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=an(e),i=Tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=sn(e,i,r),t!==null&&(ht(t,e,r,n),_o(t,e,r))}};function nh(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Hi(n,r)||!Hi(i,s):!0}function mg(e,t,n){var r=!1,i=mn,s=t.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=Ue(t)?Bn:Pe.current,r=t.contextTypes,s=(r=r!=null)?Lr(e,i):mn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function rh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pa.enqueueReplaceState(t,t.state,null)}function Pu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=pg,Zc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=Ue(t)?Bn:Pe.current,i.context=Lr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Tu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Pa.enqueueReplaceState(i,i.state,null),Ho(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===pg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function qs(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ih(e){var t=e._init;return t(e._payload)}function gg(e){function t(p,h){if(e){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=ln(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,_){return h===null||h.tag!==6?(h=Ol(m,p.mode,_),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,_){var S=m.type;return S===lr?f(p,h,m.props.children,_,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Vt&&ih(S)===h.type)?(_=i(h,m.props),_.ref=ci(p,h,m),_.return=p,_):(_=xo(m.type,m.key,m.props,null,p.mode,_),_.ref=ci(p,h,m),_.return=p,_)}function u(p,h,m,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Al(m,p.mode,_),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function f(p,h,m,_,S){return h===null||h.tag!==7?(h=zn(m,p.mode,_,S),h.return=p,h):(h=i(h,m),h.return=p,h)}function c(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ol(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case zs:return m=xo(h.type,h.key,h.props,null,p.mode,m),m.ref=ci(p,null,h),m.return=p,m;case ar:return h=Al(h,p.mode,m),h.return=p,h;case Vt:var _=h._init;return c(p,_(h._payload),m)}if(yi(h)||si(h))return h=zn(h,p.mode,m,null),h.return=p,h;qs(p,h)}return null}function d(p,h,m,_){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(p,h,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zs:return m.key===S?l(p,h,m,_):null;case ar:return m.key===S?u(p,h,m,_):null;case Vt:return S=m._init,d(p,h,S(m._payload),_)}if(yi(m)||si(m))return S!==null?null:f(p,h,m,_,null);qs(p,m)}return null}function g(p,h,m,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(m)||null,a(h,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case zs:return p=p.get(_.key===null?m:_.key)||null,l(h,p,_,S);case ar:return p=p.get(_.key===null?m:_.key)||null,u(h,p,_,S);case Vt:var N=_._init;return g(p,h,m,N(_._payload),S)}if(yi(_)||si(_))return p=p.get(m)||null,f(h,p,_,S,null);qs(h,_)}return null}function v(p,h,m,_){for(var S=null,N=null,T=h,O=h=0,H=null;T!==null&&O<m.length;O++){T.index>O?(H=T,T=null):H=T.sibling;var F=d(p,T,m[O],_);if(F===null){T===null&&(T=H);break}e&&T&&F.alternate===null&&t(p,T),h=s(F,h,O),N===null?S=F:N.sibling=F,N=F,T=H}if(O===m.length)return n(p,T),te&&In(p,O),S;if(T===null){for(;O<m.length;O++)T=c(p,m[O],_),T!==null&&(h=s(T,h,O),N===null?S=T:N.sibling=T,N=T);return te&&In(p,O),S}for(T=r(p,T);O<m.length;O++)H=g(T,p,O,m[O],_),H!==null&&(e&&H.alternate!==null&&T.delete(H.key===null?O:H.key),h=s(H,h,O),N===null?S=H:N.sibling=H,N=H);return e&&T.forEach(function(rt){return t(p,rt)}),te&&In(p,O),S}function y(p,h,m,_){var S=si(m);if(typeof S!="function")throw Error(C(150));if(m=S.call(m),m==null)throw Error(C(151));for(var N=S=null,T=h,O=h=0,H=null,F=m.next();T!==null&&!F.done;O++,F=m.next()){T.index>O?(H=T,T=null):H=T.sibling;var rt=d(p,T,F.value,_);if(rt===null){T===null&&(T=H);break}e&&T&&rt.alternate===null&&t(p,T),h=s(rt,h,O),N===null?S=rt:N.sibling=rt,N=rt,T=H}if(F.done)return n(p,T),te&&In(p,O),S;if(T===null){for(;!F.done;O++,F=m.next())F=c(p,F.value,_),F!==null&&(h=s(F,h,O),N===null?S=F:N.sibling=F,N=F);return te&&In(p,O),S}for(T=r(p,T);!F.done;O++,F=m.next())F=g(T,p,O,F.value,_),F!==null&&(e&&F.alternate!==null&&T.delete(F.key===null?O:F.key),h=s(F,h,O),N===null?S=F:N.sibling=F,N=F);return e&&T.forEach(function(ri){return t(p,ri)}),te&&In(p,O),S}function E(p,h,m,_){if(typeof m=="object"&&m!==null&&m.type===lr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case zs:e:{for(var S=m.key,N=h;N!==null;){if(N.key===S){if(S=m.type,S===lr){if(N.tag===7){n(p,N.sibling),h=i(N,m.props.children),h.return=p,p=h;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Vt&&ih(S)===N.type){n(p,N.sibling),h=i(N,m.props),h.ref=ci(p,N,m),h.return=p,p=h;break e}n(p,N);break}else t(p,N);N=N.sibling}m.type===lr?(h=zn(m.props.children,p.mode,_,m.key),h.return=p,p=h):(_=xo(m.type,m.key,m.props,null,p.mode,_),_.ref=ci(p,h,m),_.return=p,p=_)}return o(p);case ar:e:{for(N=m.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=Al(m,p.mode,_),h.return=p,p=h}return o(p);case Vt:return N=m._init,E(p,h,N(m._payload),_)}if(yi(m))return v(p,h,m,_);if(si(m))return y(p,h,m,_);qs(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Ol(m,p.mode,_),h.return=p,p=h),o(p)):n(p,h)}return E}var Fr=gg(!0),vg=gg(!1),Ss={},Et=Sn(Ss),Qi=Sn(Ss),Ki=Sn(Ss);function An(e){if(e===Ss)throw Error(C(174));return e}function ef(e,t){switch(K(Ki,t),K(Qi,e),K(Et,Ss),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lu(t,e)}Z(Et),K(Et,t)}function jr(){Z(Et),Z(Qi),Z(Ki)}function yg(e){An(Ki.current);var t=An(Et.current),n=lu(t,e.type);t!==n&&(K(Qi,e),K(Et,n))}function tf(e){Qi.current===e&&(Z(Et),Z(Qi))}var ne=Sn(0);function Vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bl=[];function nf(){for(var e=0;e<bl.length;e++)bl[e]._workInProgressVersionPrimary=null;bl.length=0}var wo=zt.ReactCurrentDispatcher,Il=zt.ReactCurrentBatchConfig,$n=0,re=null,de=null,_e=null,Yo=!1,Ii=!1,qi=0,D1=0;function be(){throw Error(C(321))}function rf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function sf(e,t,n,r,i,s){if($n=s,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wo.current=e===null||e.memoizedState===null?j1:z1,e=n(r,i),Ii){s=0;do{if(Ii=!1,qi=0,25<=s)throw Error(C(301));s+=1,_e=de=null,t.updateQueue=null,wo.current=U1,e=n(r,i)}while(Ii)}if(wo.current=Go,t=de!==null&&de.next!==null,$n=0,_e=de=re=null,Yo=!1,t)throw Error(C(300));return e}function of(){var e=qi!==0;return qi=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?re.memoizedState=_e=e:_e=_e.next=e,_e}function nt(){if(de===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=_e===null?re.memoizedState:_e.next;if(t!==null)_e=t,de=e;else{if(e===null)throw Error(C(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},_e===null?re.memoizedState=_e=e:_e=_e.next=e}return _e}function Xi(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=nt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=de,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if(($n&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,re.lanes|=f,Hn|=f}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,mt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,re.lanes|=s,Hn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Tl(e){var t=nt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);mt(s,t.memoizedState)||(Fe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function _g(){}function wg(e,t){var n=re,r=nt(),i=t(),s=!mt(r.memoizedState,i);if(s&&(r.memoizedState=i,Fe=!0),r=r.queue,af(Sg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Ji(9,Cg.bind(null,n,r,i,t),void 0,null),Ce===null)throw Error(C(349));$n&30||Eg(n,t,i)}return i}function Eg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cg(e,t,n,r){t.value=n,t.getSnapshot=r,kg(t)&&xg(e)}function Sg(e,t,n){return n(function(){kg(t)&&xg(e)})}function kg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function xg(e){var t=At(e,1);t!==null&&ht(t,e,1,-1)}function sh(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},t.queue=e,e=e.dispatch=F1.bind(null,re,e),[t.memoizedState,e]}function Ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bg(){return nt().memoizedState}function Eo(e,t,n,r){var i=vt();re.flags|=e,i.memoizedState=Ji(1|t,n,void 0,r===void 0?null:r)}function Ra(e,t,n,r){var i=nt();r=r===void 0?null:r;var s=void 0;if(de!==null){var o=de.memoizedState;if(s=o.destroy,r!==null&&rf(r,o.deps)){i.memoizedState=Ji(t,n,s,r);return}}re.flags|=e,i.memoizedState=Ji(1|t,n,s,r)}function oh(e,t){return Eo(8390656,8,e,t)}function af(e,t){return Ra(2048,8,e,t)}function Ig(e,t){return Ra(4,2,e,t)}function Ng(e,t){return Ra(4,4,e,t)}function Tg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pg(e,t,n){return n=n!=null?n.concat([e]):null,Ra(4,4,Tg.bind(null,t,e),n)}function lf(){}function Rg(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Og(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ag(e,t,n){return $n&21?(mt(n,t)||(n=Mm(),re.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function L1(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Il.transition;Il.transition={};try{e(!1),t()}finally{V=n,Il.transition=r}}function Dg(){return nt().memoizedState}function M1(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lg(e))Mg(t,n);else if(n=dg(e,t,n,r),n!==null){var i=Ae();ht(n,e,r,i),Fg(n,t,r)}}function F1(e,t,n){var r=an(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lg(e))Mg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,mt(a,o)){var l=t.interleaved;l===null?(i.next=i,Jc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=dg(e,t,i,r),n!==null&&(i=Ae(),ht(n,e,r,i),Fg(n,t,r))}}function Lg(e){var t=e.alternate;return e===re||t!==null&&t===re}function Mg(e,t){Ii=Yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jc(e,n)}}var Go={readContext:tt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},j1={readContext:tt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:oh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4194308,4,Tg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Eo(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=M1.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:sh,useDebugValue:lf,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=sh(!1),t=e[0];return e=L1.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,i=vt();if(te){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),Ce===null)throw Error(C(349));$n&30||Eg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,oh(Sg.bind(null,r,s,e),[e]),r.flags|=2048,Ji(9,Cg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=vt(),t=Ce.identifierPrefix;if(te){var n=It,r=bt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=D1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},z1={readContext:tt,useCallback:Rg,useContext:tt,useEffect:af,useImperativeHandle:Pg,useInsertionEffect:Ig,useLayoutEffect:Ng,useMemo:Og,useReducer:Nl,useRef:bg,useState:function(){return Nl(Xi)},useDebugValue:lf,useDeferredValue:function(e){var t=nt();return Ag(t,de.memoizedState,e)},useTransition:function(){var e=Nl(Xi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:_g,useSyncExternalStore:wg,useId:Dg,unstable_isNewReconciler:!1},U1={readContext:tt,useCallback:Rg,useContext:tt,useEffect:af,useImperativeHandle:Pg,useInsertionEffect:Ig,useLayoutEffect:Ng,useMemo:Og,useReducer:Tl,useRef:bg,useState:function(){return Tl(Xi)},useDebugValue:lf,useDeferredValue:function(e){var t=nt();return de===null?t.memoizedState=e:Ag(t,de.memoizedState,e)},useTransition:function(){var e=Tl(Xi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:_g,useSyncExternalStore:wg,useId:Dg,unstable_isNewReconciler:!1};function zr(e,t){try{var n="",r=t;do n+=p0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ru(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var B1=typeof WeakMap=="function"?WeakMap:Map;function jg(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ko||(Ko=!0,Bu=r),Ru(e,t)},n}function zg(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ru(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ru(e,t),typeof r!="function"&&(on===null?on=new Set([this]):on.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ah(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new B1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=tw.bind(null,e,t,n),t.then(e,e))}function lh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function uh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e)}var W1=zt.ReactCurrentOwner,Fe=!1;function Re(e,t,n,r){t.child=e===null?vg(t,null,n,r):Fr(t,e.child,n,r)}function ch(e,t,n,r,i){n=n.render;var s=t.ref;return Ir(t,i),r=sf(e,t,n,r,s,i),n=of(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(te&&n&&Yc(t),t.flags|=1,Re(e,t,r,i),t.child)}function fh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!gf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ug(e,t,s,r,i)):(e=xo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hi,n(o,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=ln(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ug(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Hi(s,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return Ou(e,t,n,r,i)}function Bg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(yr,He),He|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(yr,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(yr,He),He|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,K(yr,He),He|=r;return Re(e,t,i,n),t.child}function Wg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ou(e,t,n,r,i){var s=Ue(n)?Bn:Pe.current;return s=Lr(t,s),Ir(t,i),n=sf(e,t,n,r,s,i),r=of(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(te&&r&&Yc(t),t.flags|=1,Re(e,t,n,i),t.child)}function dh(e,t,n,r,i){if(Ue(n)){var s=!0;zo(t)}else s=!1;if(Ir(t,i),t.stateNode===null)Co(e,t),mg(t,n,r),Pu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Ue(n)?Bn:Pe.current,u=Lr(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&rh(t,o,r,u),Yt=!1;var d=t.memoizedState;o.state=d,Ho(t,r,o,i),l=t.memoizedState,a!==r||d!==l||ze.current||Yt?(typeof f=="function"&&(Tu(t,n,f,r),l=t.memoizedState),(a=Yt||nh(t,n,a,r,d,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,hg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:st(t.type,a),o.props=u,c=t.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tt(l):(l=Ue(n)?Bn:Pe.current,l=Lr(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||d!==l)&&rh(t,o,r,l),Yt=!1,d=t.memoizedState,o.state=d,Ho(t,r,o,i);var v=t.memoizedState;a!==c||d!==v||ze.current||Yt?(typeof g=="function"&&(Tu(t,n,g,r),v=t.memoizedState),(u=Yt||nh(t,n,u,r,d,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Au(e,t,n,r,s,i)}function Au(e,t,n,r,i,s){Wg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Xd(t,n,!1),Dt(e,t,s);r=t.stateNode,W1.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Fr(t,e.child,null,s),t.child=Fr(t,null,a,s)):Re(e,t,a,s),t.memoizedState=r.state,i&&Xd(t,n,!0),t.child}function $g(e){var t=e.stateNode;t.pendingContext?qd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qd(e,t.context,!1),ef(e,t.containerInfo)}function hh(e,t,n,r,i){return Mr(),Qc(i),t.flags|=256,Re(e,t,n,r),t.child}var Du={dehydrated:null,treeContext:null,retryLane:0};function Lu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hg(e,t,n){var r=t.pendingProps,i=ne.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(ne,i&1),e===null)return Iu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Da(o,r,0,null),e=zn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Lu(n),t.memoizedState=Du,e):uf(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $1(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ln(a,s):(s=zn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Lu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Du,r}return s=e.child,e=s.sibling,r=ln(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function uf(e,t){return t=Da({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xs(e,t,n,r){return r!==null&&Qc(r),Fr(t,e.child,null,n),e=uf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $1(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(C(422))),Xs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Da({mode:"visible",children:r.children},i,0,null),s=zn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Fr(t,e.child,null,o),t.child.memoizedState=Lu(o),t.memoizedState=Du,s);if(!(t.mode&1))return Xs(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Pl(s,r,void 0),Xs(e,t,o,r)}if(a=(o&e.childLanes)!==0,Fe||a){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,At(e,i),ht(r,e,i,-1))}return mf(),r=Pl(Error(C(421))),Xs(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=nw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ve=rn(i.nextSibling),Ye=t,te=!0,at=null,e!==null&&(Xe[Je++]=bt,Xe[Je++]=It,Xe[Je++]=Wn,bt=e.id,It=e.overflow,Wn=t),t=uf(t,r.children),t.flags|=4096,t)}function ph(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nu(e.return,t,n)}function Rl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Vg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Re(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ph(e,n,t);else if(e.tag===19)ph(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rl(t,!0,n,null,s);break;case"together":Rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Co(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function H1(e,t,n){switch(t.tag){case 3:$g(t),Mr();break;case 5:yg(t);break;case 1:Ue(t.type)&&zo(t);break;case 4:ef(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(Wo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?Hg(e,t,n):(K(ne,ne.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);K(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Bg(e,t,n)}return Dt(e,t,n)}var Yg,Mu,Gg,Qg;Yg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mu=function(){};Gg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,An(Et.current);var s=null;switch(n){case"input":i=iu(e,i),r=iu(e,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=au(e,i),r=au(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fo)}uu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&q("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Qg=function(e,t,n,r){n!==r&&(t.flags|=4)};function fi(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function V1(e,t,n){var r=t.pendingProps;switch(Gc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ue(t.type)&&jo(),Ie(t),null;case 3:return r=t.stateNode,jr(),Z(ze),Z(Pe),nf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ks(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Hu(at),at=null))),Mu(e,t),Ie(t),null;case 5:tf(t);var i=An(Ki.current);if(n=t.type,e!==null&&t.stateNode!=null)Gg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Ie(t),null}if(e=An(Et.current),Ks(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[yt]=t,r[Gi]=s,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<wi.length;i++)q(wi[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Sd(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":xd(r,s),q("invalid",r)}uu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,a,e),i=["children",""+a]):Fi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":Us(r),kd(r,s,!0);break;case"textarea":Us(r),bd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Em(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[yt]=t,e[Gi]=r,Yg(e,t,!1,!1),t.stateNode=e;e:{switch(o=cu(n,r),n){case"dialog":q("cancel",e),q("close",e),i=r;break;case"iframe":case"object":case"embed":q("load",e),i=r;break;case"video":case"audio":for(i=0;i<wi.length;i++)q(wi[i],e);i=r;break;case"source":q("error",e),i=r;break;case"img":case"image":case"link":q("error",e),q("load",e),i=r;break;case"details":q("toggle",e),i=r;break;case"input":Sd(e,r),i=iu(e,r),q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),q("invalid",e);break;case"textarea":xd(e,r),i=au(e,r),q("invalid",e);break;default:i=r}uu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?km(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cm(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ji(e,l):typeof l=="number"&&ji(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&q("scroll",e):l!=null&&Oc(e,s,l,o))}switch(n){case"input":Us(e),kd(e,r,!1);break;case"textarea":Us(e),bd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Sr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)Qg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=An(Ki.current),An(Et.current),Ks(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(s=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:Qs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return Ie(t),null;case 13:if(Z(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ve!==null&&t.mode&1&&!(t.flags&128))fg(),Mr(),t.flags|=98560,s=!1;else if(s=Ks(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[yt]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),s=!1}else at!==null&&(Hu(at),at=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?me===0&&(me=3):mf())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return jr(),Mu(e,t),e===null&&Vi(t.stateNode.containerInfo),Ie(t),null;case 10:return Xc(t.type._context),Ie(t),null;case 17:return Ue(t.type)&&jo(),Ie(t),null;case 19:if(Z(ne),s=t.memoizedState,s===null)return Ie(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)fi(s,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Vo(e),o!==null){for(t.flags|=128,fi(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ne,ne.current&1|2),t.child}e=e.sibling}s.tail!==null&&ue()>Ur&&(t.flags|=128,r=!0,fi(s,!1),t.lanes=4194304)}else{if(!r)if(e=Vo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!te)return Ie(t),null}else 2*ue()-s.renderingStartTime>Ur&&n!==1073741824&&(t.flags|=128,r=!0,fi(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ue(),t.sibling=null,n=ne.current,K(ne,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return pf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Y1(e,t){switch(Gc(t),t.tag){case 1:return Ue(t.type)&&jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),Z(ze),Z(Pe),nf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tf(t),null;case 13:if(Z(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ne),null;case 4:return jr(),null;case 10:return Xc(t.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var Js=!1,Ne=!1,G1=typeof WeakSet=="function"?WeakSet:Set,I=null;function vr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Fu(e,t,n){try{n()}catch(r){se(e,t,r)}}var mh=!1;function Q1(e,t){if(wu=Do,e=Jm(),Vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,c=e,d=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)d=c,c=g;for(;;){if(c===e)break t;if(d===n&&++u===i&&(a=o),d===s&&++f===r&&(l=o),(g=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eu={focusedElem:e,selectionRange:n},Do=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,E=v.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:st(t.type,y),E);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(_){se(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=mh,mh=!1,v}function Ni(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fu(t,n,s)}i=i.next}while(i!==r)}}function Oa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ju(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kg(e){var t=e.alternate;t!==null&&(e.alternate=null,Kg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[Gi],delete t[ku],delete t[P1],delete t[R1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qg(e){return e.tag===5||e.tag===3||e.tag===4}function gh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fo));else if(r!==4&&(e=e.child,e!==null))for(zu(e,t,n),e=e.sibling;e!==null;)zu(e,t,n),e=e.sibling}function Uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Uu(e,t,n),e=e.sibling;e!==null;)Uu(e,t,n),e=e.sibling}var Se=null,ot=!1;function $t(e,t,n){for(n=n.child;n!==null;)Xg(e,t,n),n=n.sibling}function Xg(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(ka,n)}catch{}switch(n.tag){case 5:Ne||vr(n,t);case 6:var r=Se,i=ot;Se=null,$t(e,t,n),Se=r,ot=i,Se!==null&&(ot?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ot?(e=Se,n=n.stateNode,e.nodeType===8?kl(e.parentNode,n):e.nodeType===1&&kl(e,n),Wi(e)):kl(Se,n.stateNode));break;case 4:r=Se,i=ot,Se=n.stateNode.containerInfo,ot=!0,$t(e,t,n),Se=r,ot=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fu(n,t,o),i=i.next}while(i!==r)}$t(e,t,n);break;case 1:if(!Ne&&(vr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,$t(e,t,n),Ne=r):$t(e,t,n);break;default:$t(e,t,n)}}function vh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new G1),t.forEach(function(r){var i=rw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,ot=!1;break e;case 3:Se=a.stateNode.containerInfo,ot=!0;break e;case 4:Se=a.stateNode.containerInfo,ot=!0;break e}a=a.return}if(Se===null)throw Error(C(160));Xg(s,o,i),Se=null,ot=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jg(t,e),t=t.sibling}function Jg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),gt(e),r&4){try{Ni(3,e,e.return),Oa(3,e)}catch(y){se(e,e.return,y)}try{Ni(5,e,e.return)}catch(y){se(e,e.return,y)}}break;case 1:it(t,e),gt(e),r&512&&n!==null&&vr(n,n.return);break;case 5:if(it(t,e),gt(e),r&512&&n!==null&&vr(n,n.return),e.flags&32){var i=e.stateNode;try{ji(i,"")}catch(y){se(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_m(i,s),cu(a,o);var u=cu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],c=l[o+1];f==="style"?km(i,c):f==="dangerouslySetInnerHTML"?Cm(i,c):f==="children"?ji(i,c):Oc(i,f,c,u)}switch(a){case"input":su(i,s);break;case"textarea":wm(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Sr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Sr(i,!!s.multiple,s.defaultValue,!0):Sr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Gi]=s}catch(y){se(e,e.return,y)}}break;case 6:if(it(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){se(e,e.return,y)}}break;case 3:if(it(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(y){se(e,e.return,y)}break;case 4:it(t,e),gt(e);break;case 13:it(t,e),gt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(df=ue())),r&4&&vh(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||f,it(t,e),Ne=u):it(t,e),gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(I=e,f=e.child;f!==null;){for(c=I=f;I!==null;){switch(d=I,g=d.child,d.tag){case 0:case 11:case 14:case 15:Ni(4,d,d.return);break;case 1:vr(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){se(r,n,y)}}break;case 5:vr(d,d.return);break;case 22:if(d.memoizedState!==null){_h(c);continue}}g!==null?(g.return=d,I=g):_h(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sm("display",o))}catch(y){se(e,e.return,y)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){se(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:it(t,e),gt(e),r&4&&vh(e);break;case 21:break;default:it(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qg(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ji(i,""),r.flags&=-33);var s=gh(e);Uu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=gh(e);zu(e,a,o);break;default:throw Error(C(161))}}catch(l){se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K1(e,t,n){I=e,Zg(e)}function Zg(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Js;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ne;a=Js;var u=Ne;if(Js=o,(Ne=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?wh(i):l!==null?(l.return=o,I=l):wh(i);for(;s!==null;)I=s,Zg(s),s=s.sibling;I=i,Js=a,Ne=u}yh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):yh(e)}}function yh(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||Oa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&th(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}th(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Wi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ne||t.flags&512&&ju(t)}catch(d){se(t,t.return,d)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function _h(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function wh(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oa(4,t)}catch(l){se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){se(t,i,l)}}var s=t.return;try{ju(t)}catch(l){se(t,s,l)}break;case 5:var o=t.return;try{ju(t)}catch(l){se(t,o,l)}}}catch(l){se(t,t.return,l)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var q1=Math.ceil,Qo=zt.ReactCurrentDispatcher,cf=zt.ReactCurrentOwner,et=zt.ReactCurrentBatchConfig,W=0,Ce=null,ce=null,ke=0,He=0,yr=Sn(0),me=0,Zi=null,Hn=0,Aa=0,ff=0,Ti=null,Me=null,df=0,Ur=1/0,kt=null,Ko=!1,Bu=null,on=null,Zs=!1,qt=null,qo=0,Pi=0,Wu=null,So=-1,ko=0;function Ae(){return W&6?ue():So!==-1?So:So=ue()}function an(e){return e.mode&1?W&2&&ke!==0?ke&-ke:A1.transition!==null?(ko===0&&(ko=Mm()),ko):(e=V,e!==0||(e=window.event,e=e===void 0?16:$m(e.type)),e):1}function ht(e,t,n,r){if(50<Pi)throw Pi=0,Wu=null,Error(C(185));ws(e,n,r),(!(W&2)||e!==Ce)&&(e===Ce&&(!(W&2)&&(Aa|=n),me===4&&Qt(e,ke)),Be(e,r),n===1&&W===0&&!(t.mode&1)&&(Ur=ue()+500,Ta&&kn()))}function Be(e,t){var n=e.callbackNode;A0(e,t);var r=Ao(e,e===Ce?ke:0);if(r===0)n!==null&&Td(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Td(n),t===1)e.tag===0?O1(Eh.bind(null,e)):lg(Eh.bind(null,e)),N1(function(){!(W&6)&&kn()}),n=null;else{switch(Fm(r)){case 1:n=Fc;break;case 4:n=Dm;break;case 16:n=Oo;break;case 536870912:n=Lm;break;default:n=Oo}n=av(n,ev.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ev(e,t){if(So=-1,ko=0,W&6)throw Error(C(327));var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var r=Ao(e,e===Ce?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xo(e,r);else{t=r;var i=W;W|=2;var s=nv();(Ce!==e||ke!==t)&&(kt=null,Ur=ue()+500,jn(e,t));do try{Z1();break}catch(a){tv(e,a)}while(!0);qc(),Qo.current=s,W=i,ce!==null?t=0:(Ce=null,ke=0,t=me)}if(t!==0){if(t===2&&(i=mu(e),i!==0&&(r=i,t=$u(e,i))),t===1)throw n=Zi,jn(e,0),Qt(e,r),Be(e,ue()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,!(r&30)&&!X1(i)&&(t=Xo(e,r),t===2&&(s=mu(e),s!==0&&(r=s,t=$u(e,s))),t===1))throw n=Zi,jn(e,0),Qt(e,r),Be(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Nn(e,Me,kt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=df+500-ue(),10<t)){if(Ao(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Su(Nn.bind(null,e,Me,kt),t);break}Nn(e,Me,kt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-dt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*q1(r/1960))-r,10<r){e.timeoutHandle=Su(Nn.bind(null,e,Me,kt),r);break}Nn(e,Me,kt);break;case 5:Nn(e,Me,kt);break;default:throw Error(C(329))}}}return Be(e,ue()),e.callbackNode===n?ev.bind(null,e):null}function $u(e,t){var n=Ti;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=Xo(e,t),e!==2&&(t=Me,Me=n,t!==null&&Hu(t)),e}function Hu(e){Me===null?Me=e:Me.push.apply(Me,e)}function X1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~ff,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Eh(e){if(W&6)throw Error(C(327));Nr();var t=Ao(e,0);if(!(t&1))return Be(e,ue()),null;var n=Xo(e,t);if(e.tag!==0&&n===2){var r=mu(e);r!==0&&(t=r,n=$u(e,r))}if(n===1)throw n=Zi,jn(e,0),Qt(e,t),Be(e,ue()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,Me,kt),Be(e,ue()),null}function hf(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Ur=ue()+500,Ta&&kn())}}function Vn(e){qt!==null&&qt.tag===0&&!(W&6)&&Nr();var t=W;W|=1;var n=et.transition,r=V;try{if(et.transition=null,V=1,e)return e()}finally{V=r,et.transition=n,W=t,!(W&6)&&kn()}}function pf(){He=yr.current,Z(yr)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,I1(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Gc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:jr(),Z(ze),Z(Pe),nf();break;case 5:tf(r);break;case 4:jr();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:Xc(r.type._context);break;case 22:case 23:pf()}n=n.return}if(Ce=e,ce=e=ln(e.current,null),ke=He=t,me=0,Zi=null,ff=Aa=Hn=0,Me=Ti=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}On=null}return e}function tv(e,t){do{var n=ce;try{if(qc(),wo.current=Go,Yo){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yo=!1}if($n=0,_e=de=re=null,Ii=!1,qi=0,cf.current=null,n===null||n.return===null){me=1,Zi=t,ce=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=lh(o);if(g!==null){g.flags&=-257,uh(g,o,a,s,t),g.mode&1&&ah(s,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){ah(s,u,t),mf();break e}l=Error(C(426))}}else if(te&&a.mode&1){var E=lh(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),uh(E,o,a,s,t),Qc(zr(l,a));break e}}s=l=zr(l,a),me!==4&&(me=2),Ti===null?Ti=[s]:Ti.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=jg(s,l,t);eh(s,p);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(on===null||!on.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=zg(s,a,t);eh(s,_);break e}}s=s.return}while(s!==null)}iv(n)}catch(S){t=S,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function nv(){var e=Qo.current;return Qo.current=Go,e===null?Go:e}function mf(){(me===0||me===3||me===2)&&(me=4),Ce===null||!(Hn&268435455)&&!(Aa&268435455)||Qt(Ce,ke)}function Xo(e,t){var n=W;W|=2;var r=nv();(Ce!==e||ke!==t)&&(kt=null,jn(e,t));do try{J1();break}catch(i){tv(e,i)}while(!0);if(qc(),W=n,Qo.current=r,ce!==null)throw Error(C(261));return Ce=null,ke=0,me}function J1(){for(;ce!==null;)rv(ce)}function Z1(){for(;ce!==null&&!k0();)rv(ce)}function rv(e){var t=ov(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?iv(e):ce=t,cf.current=null}function iv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Y1(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,ce=null;return}}else if(n=V1(n,t,He),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);me===0&&(me=5)}function Nn(e,t,n){var r=V,i=et.transition;try{et.transition=null,V=1,ew(e,t,n,r)}finally{et.transition=i,V=r}return null}function ew(e,t,n,r){do Nr();while(qt!==null);if(W&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(D0(e,s),e===Ce&&(ce=Ce=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zs||(Zs=!0,av(Oo,function(){return Nr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=et.transition,et.transition=null;var o=V;V=1;var a=W;W|=4,cf.current=null,Q1(e,n),Jg(n,e),w1(Eu),Do=!!wu,Eu=wu=null,e.current=n,K1(n),x0(),W=a,V=o,et.transition=s}else e.current=n;if(Zs&&(Zs=!1,qt=e,qo=i),s=e.pendingLanes,s===0&&(on=null),N0(n.stateNode),Be(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ko)throw Ko=!1,e=Bu,Bu=null,e;return qo&1&&e.tag!==0&&Nr(),s=e.pendingLanes,s&1?e===Wu?Pi++:(Pi=0,Wu=e):Pi=0,kn(),null}function Nr(){if(qt!==null){var e=Fm(qo),t=et.transition,n=V;try{if(et.transition=null,V=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,qo=0,W&6)throw Error(C(331));var i=W;for(W|=4,I=e.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var f=I;switch(f.tag){case 0:case 11:case 15:Ni(8,f,s)}var c=f.child;if(c!==null)c.return=f,I=c;else for(;I!==null;){f=I;var d=f.sibling,g=f.return;if(Kg(f),f===u){I=null;break}if(d!==null){d.return=g,I=d;break}I=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ni(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,I=p;break e}I=s.return}}var h=e.current;for(I=h;I!==null;){o=I;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,I=m;else e:for(o=h;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oa(9,a)}}catch(S){se(a,a.return,S)}if(a===o){I=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,I=_;break e}I=a.return}}if(W=i,kn(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(ka,e)}catch{}r=!0}return r}finally{V=n,et.transition=t}}return!1}function Ch(e,t,n){t=zr(n,t),t=jg(e,t,1),e=sn(e,t,1),t=Ae(),e!==null&&(ws(e,1,t),Be(e,t))}function se(e,t,n){if(e.tag===3)Ch(e,e,n);else for(;t!==null;){if(t.tag===3){Ch(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(on===null||!on.has(r))){e=zr(n,e),e=zg(t,e,1),t=sn(t,e,1),e=Ae(),t!==null&&(ws(t,1,e),Be(t,e));break}}t=t.return}}function tw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(ke&n)===n&&(me===4||me===3&&(ke&130023424)===ke&&500>ue()-df?jn(e,0):ff|=n),Be(e,t)}function sv(e,t){t===0&&(e.mode&1?(t=$s,$s<<=1,!($s&130023424)&&($s=4194304)):t=1);var n=Ae();e=At(e,t),e!==null&&(ws(e,t,n),Be(e,n))}function nw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sv(e,n)}function rw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),sv(e,n)}var ov;ov=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,H1(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,te&&t.flags&1048576&&ug(t,Bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Co(e,t),e=t.pendingProps;var i=Lr(t,Pe.current);Ir(t,n),i=sf(null,t,r,e,i,n);var s=of();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(s=!0,zo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zc(t),i.updater=Pa,t.stateNode=i,i._reactInternals=t,Pu(t,r,e,n),t=Au(null,t,r,!0,s,n)):(t.tag=0,te&&s&&Yc(t),Re(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Co(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=sw(r),e=st(r,e),i){case 0:t=Ou(null,t,r,e,n);break e;case 1:t=dh(null,t,r,e,n);break e;case 11:t=ch(null,t,r,e,n);break e;case 14:t=fh(null,t,r,st(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Ou(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),dh(e,t,r,i,n);case 3:e:{if($g(t),e===null)throw Error(C(387));r=t.pendingProps,s=t.memoizedState,i=s.element,hg(e,t),Ho(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=zr(Error(C(423)),t),t=hh(e,t,r,n,i);break e}else if(r!==i){i=zr(Error(C(424)),t),t=hh(e,t,r,n,i);break e}else for(Ve=rn(t.stateNode.containerInfo.firstChild),Ye=t,te=!0,at=null,n=vg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===i){t=Dt(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return yg(t),e===null&&Iu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Cu(r,i)?o=null:s!==null&&Cu(r,s)&&(t.flags|=32),Wg(e,t),Re(e,t,o,n),t.child;case 6:return e===null&&Iu(t),null;case 13:return Hg(e,t,n);case 4:return ef(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fr(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),ch(e,t,r,i,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,K(Wo,r._currentValue),r._currentValue=o,s!==null)if(mt(s.value,o)){if(s.children===i.children&&!ze.current){t=Dt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Tt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nu(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nu(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ir(t,n),i=tt(i),r=r(i),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,i=st(r,t.pendingProps),i=st(r.type,i),fh(e,t,r,i,n);case 15:return Ug(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Co(e,t),t.tag=1,Ue(r)?(e=!0,zo(t)):e=!1,Ir(t,n),mg(t,r,i),Pu(t,r,i,n),Au(null,t,r,!0,e,n);case 19:return Vg(e,t,n);case 22:return Bg(e,t,n)}throw Error(C(156,t.tag))};function av(e,t){return Am(e,t)}function iw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new iw(e,t,n,r)}function gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sw(e){if(typeof e=="function")return gf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dc)return 11;if(e===Lc)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xo(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")gf(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case lr:return zn(n.children,i,s,t);case Ac:o=8,i|=8;break;case eu:return e=Ze(12,n,t,i|2),e.elementType=eu,e.lanes=s,e;case tu:return e=Ze(13,n,t,i),e.elementType=tu,e.lanes=s,e;case nu:return e=Ze(19,n,t,i),e.elementType=nu,e.lanes=s,e;case gm:return Da(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pm:o=10;break e;case mm:o=9;break e;case Dc:o=11;break e;case Lc:o=14;break e;case Vt:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ze(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function zn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Da(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=gm,e.lanes=n,e.stateNode={isHidden:!1},e}function Ol(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Al(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ow(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vf(e,t,n,r,i,s,o,a,l){return e=new ow(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ze(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(s),e}function aw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lv(e){if(!e)return mn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ue(n))return ag(e,n,t)}return t}function uv(e,t,n,r,i,s,o,a,l){return e=vf(n,r,!0,e,i,s,o,a,l),e.context=lv(null),n=e.current,r=Ae(),i=an(n),s=Tt(r,i),s.callback=t??null,sn(n,s,i),e.current.lanes=i,ws(e,i,r),Be(e,r),e}function La(e,t,n,r){var i=t.current,s=Ae(),o=an(i);return n=lv(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(i,t,o),e!==null&&(ht(e,i,o,s),_o(e,i,o)),o}function Jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yf(e,t){Sh(e,t),(e=e.alternate)&&Sh(e,t)}function lw(){return null}var cv=typeof reportError=="function"?reportError:function(e){console.error(e)};function _f(e){this._internalRoot=e}Ma.prototype.render=_f.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));La(e,t,null,null)};Ma.prototype.unmount=_f.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){La(null,e,null,null)}),t[Ot]=null}};function Ma(e){this._internalRoot=e}Ma.prototype.unstable_scheduleHydration=function(e){if(e){var t=Um();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gt.length&&t!==0&&t<Gt[n].priority;n++);Gt.splice(n,0,e),n===0&&Wm(e)}};function wf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kh(){}function uw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Jo(o);s.call(u)}}var o=uv(t,r,e,0,null,!1,!1,"",kh);return e._reactRootContainer=o,e[Ot]=o.current,Vi(e.nodeType===8?e.parentNode:e),Vn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Jo(l);a.call(u)}}var l=vf(e,0,!1,null,null,!1,!1,"",kh);return e._reactRootContainer=l,e[Ot]=l.current,Vi(e.nodeType===8?e.parentNode:e),Vn(function(){La(t,l,n,r)}),l}function ja(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Jo(o);a.call(l)}}La(t,o,e,i)}else o=uw(n,t,e,i,r);return Jo(o)}jm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_i(t.pendingLanes);n!==0&&(jc(t,n|1),Be(t,ue()),!(W&6)&&(Ur=ue()+500,kn()))}break;case 13:Vn(function(){var r=At(e,1);if(r!==null){var i=Ae();ht(r,e,1,i)}}),yf(e,1)}};zc=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Ae();ht(t,e,134217728,n)}yf(e,134217728)}};zm=function(e){if(e.tag===13){var t=an(e),n=At(e,t);if(n!==null){var r=Ae();ht(n,e,t,r)}yf(e,t)}};Um=function(){return V};Bm=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};du=function(e,t,n){switch(t){case"input":if(su(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Na(r);if(!i)throw Error(C(90));ym(r),su(r,i)}}}break;case"textarea":wm(e,n);break;case"select":t=n.value,t!=null&&Sr(e,!!n.multiple,t,!1)}};Im=hf;Nm=Vn;var cw={usingClientEntryPoint:!1,Events:[Cs,dr,Na,xm,bm,hf]},di={findFiberByHostInstance:Rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},fw={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rm(e),e===null?null:e.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{ka=eo.inject(fw),wt=eo}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wf(t))throw Error(C(200));return aw(e,t,null,n)};Qe.createRoot=function(e,t){if(!wf(e))throw Error(C(299));var n=!1,r="",i=cv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vf(e,1,!1,null,null,n,!1,r,i),e[Ot]=t.current,Vi(e.nodeType===8?e.parentNode:e),new _f(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Rm(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Vn(e)};Qe.hydrate=function(e,t,n){if(!Fa(t))throw Error(C(200));return ja(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!wf(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=cv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=uv(t,null,e,1,n??null,i,!1,s,o),e[Ot]=t.current,Vi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ma(t)};Qe.render=function(e,t,n){if(!Fa(t))throw Error(C(200));return ja(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!Fa(e))throw Error(C(40));return e._reactRootContainer?(Vn(function(){ja(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Qe.unstable_batchedUpdates=hf;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fa(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ja(e,t,n,!1,r)};Qe.version="18.2.0-next-9e3b772b8-20220608";function fv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fv)}catch(e){console.error(e)}}fv(),um.exports=Qe;var dw=um.exports,xh=dw;Jl.createRoot=xh.createRoot,Jl.hydrateRoot=xh.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}var Xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xt||(Xt={}));const bh="popstate";function hw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Vu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zo(i)}return mw(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ef(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pw(){return Math.random().toString(36).substr(2,8)}function Ih(e,t){return{usr:e.state,key:e.key,idx:t}}function Vu(e,t,n,r){return n===void 0&&(n=null),es({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qr(t):t,{state:n,key:t&&t.key||r||pw()})}function Zo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function mw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Xt.Pop,l=null,u=f();u==null&&(u=0,o.replaceState(es({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function c(){a=Xt.Pop;let E=f(),p=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:p})}function d(E,p){a=Xt.Push;let h=Vu(y.location,E,p);n&&n(h,E),u=f()+1;let m=Ih(h,u),_=y.createHref(h);try{o.pushState(m,"",_)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(_)}s&&l&&l({action:a,location:y.location,delta:1})}function g(E,p){a=Xt.Replace;let h=Vu(y.location,E,p);n&&n(h,E),u=f();let m=Ih(h,u),_=y.createHref(h);o.replaceState(m,"",_),s&&l&&l({action:a,location:y.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:Zo(E);return fe(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let y={get action(){return a},get location(){return e(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(bh,c),l=E,()=>{i.removeEventListener(bh,c),l=null}},createHref(E){return t(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(E){return o.go(E)}};return y}var Nh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Nh||(Nh={}));function gw(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?qr(t):t,i=Cf(r.pathname||"/",n);if(i==null)return null;let s=dv(e);vw(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=bw(s[a],Tw(i));return o}function dv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=un([r,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dv(s.children,t,f,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:kw(u,s.index),routesMeta:f})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of hv(s.path))i(s,o,l)}),t}function hv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=hv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function vw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yw=/^:[\w-]+$/,_w=3,ww=2,Ew=1,Cw=10,Sw=-2,Th=e=>e==="*";function kw(e,t){let n=e.split("/"),r=n.length;return n.some(Th)&&(r+=Sw),t&&(r+=ww),n.filter(i=>!Th(i)).reduce((i,s)=>i+(yw.test(s)?_w:s===""?Ew:Cw),r)}function xw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function bw(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=Iw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let c=a.route;s.push({params:r,pathname:un([i,f.pathname]),pathnameBase:Dw(un([i,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(i=un([i,f.pathnameBase]))}return s}function Iw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Nw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:d,isOptional:g}=f;if(d==="*"){let y=a[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[c];return g&&!v?u[d]=void 0:u[d]=Pw(v||"",d),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Nw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ef(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Tw(e){try{return decodeURI(e)}catch(t){return Ef(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Pw(e,t){try{return decodeURIComponent(e)}catch(n){return Ef(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Cf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Rw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qr(e):e;return{pathname:n?n.startsWith("/")?n:Ow(n,t):t,search:Lw(r),hash:Mw(i)}}function Ow(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Aw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pv(e,t){let n=Aw(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function mv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=qr(e):(i=es({},e),fe(!i.pathname||!i.pathname.includes("?"),Dl("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),Dl("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),Dl("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=t.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}a=c>=0?t[c]:"/"}let l=Rw(i,a),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const un=e=>e.join("/").replace(/\/\/+/g,"/"),Dw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Lw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Mw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gv=["post","put","patch","delete"];new Set(gv);const jw=["get",...gv];new Set(jw);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ts.apply(this,arguments)}const Sf=x.createContext(null),zw=x.createContext(null),er=x.createContext(null),za=x.createContext(null),tr=x.createContext({outlet:null,matches:[],isDataRoute:!1}),vv=x.createContext(null);function Uw(e,t){let{relative:n}=t===void 0?{}:t;ks()||fe(!1);let{basename:r,navigator:i}=x.useContext(er),{hash:s,pathname:o,search:a}=_v(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:un([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ks(){return x.useContext(za)!=null}function Ua(){return ks()||fe(!1),x.useContext(za).location}function yv(e){x.useContext(er).static||x.useLayoutEffect(e)}function Bw(){let{isDataRoute:e}=x.useContext(tr);return e?eE():Ww()}function Ww(){ks()||fe(!1);let e=x.useContext(Sf),{basename:t,future:n,navigator:r}=x.useContext(er),{matches:i}=x.useContext(tr),{pathname:s}=Ua(),o=JSON.stringify(pv(i,n.v7_relativeSplatPath)),a=x.useRef(!1);return yv(()=>{a.current=!0}),x.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=mv(u,JSON.parse(o),s,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:un([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,o,s,e])}function _v(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(er),{matches:i}=x.useContext(tr),{pathname:s}=Ua(),o=JSON.stringify(pv(i,r.v7_relativeSplatPath));return x.useMemo(()=>mv(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function $w(e,t){return Hw(e,t)}function Hw(e,t,n,r){ks()||fe(!1);let{navigator:i}=x.useContext(er),{matches:s}=x.useContext(tr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Ua(),f;if(t){var c;let E=typeof t=="string"?qr(t):t;l==="/"||(c=E.pathname)!=null&&c.startsWith(l)||fe(!1),f=E}else f=u;let d=f.pathname||"/",g=l==="/"?d:d.slice(l.length)||"/",v=gw(e,{pathname:g}),y=Kw(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:un([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:un([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return t&&y?x.createElement(za.Provider,{value:{location:ts({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Xt.Pop}},y):y}function Vw(){let e=Zw(),t=Fw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,null)}const Yw=x.createElement(Vw,null);class Gw extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(tr.Provider,{value:this.props.routeContext},x.createElement(vv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qw(e){let{routeContext:t,match:n,children:r}=e,i=x.useContext(Sf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(tr.Provider,{value:t},r)}function Kw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));f>=0||fe(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let c=o[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:d,errors:g}=n,v=c.route.loader&&d[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,c,d)=>{let g,v=!1,y=null,E=null;n&&(g=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||Yw,l&&(u<0&&d===0?(tE("route-fallback",!1),v=!0,E=null):u===d&&(v=!0,E=c.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,d+1)),h=()=>{let m;return g?m=y:v?m=E:c.route.Component?m=x.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=f,x.createElement(Qw,{match:c,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?x.createElement(Gw,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var wv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(wv||{}),ea=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ea||{});function qw(e){let t=x.useContext(Sf);return t||fe(!1),t}function Xw(e){let t=x.useContext(zw);return t||fe(!1),t}function Jw(e){let t=x.useContext(tr);return t||fe(!1),t}function Ev(e){let t=Jw(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Zw(){var e;let t=x.useContext(vv),n=Xw(ea.UseRouteError),r=Ev(ea.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function eE(){let{router:e}=qw(wv.UseNavigateStable),t=Ev(ea.UseNavigateStable),n=x.useRef(!1);return yv(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ts({fromRouteId:t},s)))},[e,t])}const Ph={};function tE(e,t,n){!t&&!Ph[e]&&(Ph[e]=!0)}function bo(e){fe(!1)}function nE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xt.Pop,navigator:s,static:o=!1,future:a}=e;ks()&&fe(!1);let l=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:l,navigator:s,static:o,future:ts({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=qr(r));let{pathname:f="/",search:c="",hash:d="",state:g=null,key:v="default"}=r,y=x.useMemo(()=>{let E=Cf(f,l);return E==null?null:{location:{pathname:E,search:c,hash:d,state:g,key:v},navigationType:i}},[l,f,c,d,g,v,i]);return y==null?null:x.createElement(er.Provider,{value:u},x.createElement(za.Provider,{children:n,value:y}))}function rE(e){let{children:t,location:n}=e;return $w(Yu(t),n)}new Promise(()=>{});function Yu(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let s=[...t,i];if(r.type===x.Fragment){n.push.apply(n,Yu(r.props.children,s));return}r.type!==bo&&fe(!1),!r.props.index||!r.props.children||fe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Yu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gu(){return Gu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gu.apply(this,arguments)}function iE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function sE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oE(e,t){return e.button===0&&(!t||t==="_self")&&!sE(e)}const aE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],lE="startTransition",Rh=n0[lE];function uE(e){let{basename:t,children:n,future:r,window:i}=e,s=x.useRef();s.current==null&&(s.current=hw({window:i,v5Compat:!0}));let o=s.current,[a,l]=x.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=x.useCallback(c=>{u&&Rh?Rh(()=>l(c)):l(c)},[l,u]);return x.useLayoutEffect(()=>o.listen(f),[o,f]),x.createElement(nE,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const cE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ll=x.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:f,unstable_viewTransition:c}=t,d=iE(t,aE),{basename:g}=x.useContext(er),v,y=!1;if(typeof u=="string"&&fE.test(u)&&(v=u,cE))try{let m=new URL(window.location.href),_=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=Cf(_.pathname,g);_.origin===m.origin&&S!=null?u=S+_.search+_.hash:y=!0}catch{}let E=Uw(u,{relative:i}),p=dE(u,{replace:o,state:a,target:l,preventScrollReset:f,relative:i,unstable_viewTransition:c});function h(m){r&&r(m),m.defaultPrevented||p(m)}return x.createElement("a",Gu({},d,{href:v||E,onClick:y||s?r:h,ref:n,target:l}))});var Oh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Oh||(Oh={}));var Ah;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ah||(Ah={}));function dE(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=Bw(),u=Ua(),f=_v(e,{relative:o});return x.useCallback(c=>{if(oE(c,n)){c.preventDefault();let d=r!==void 0?r:Zo(u)===Zo(f);l(e,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,f,r,i,n,e,s,o,a])}var Dh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(e,t){if(!e)throw Xr(t)},Xr=function(e){return new Error("Firebase Database ("+Cv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},hE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},kf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=s>>2,c=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[f],n[c],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Sv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):hE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const c=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new pE;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class pE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kv=function(e){const t=Sv(e);return kf.encodeByteArray(t,!0)},ta=function(e){return kv(e).replace(/\./g,"")},Qu=function(e){try{return kf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(e){return xv(void 0,e)}function xv(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!gE(n)||(e[n]=xv(e[n],t[n]));return e}function gE(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=()=>vE().__FIREBASE_DEFAULTS__,_E=()=>{if(typeof process>"u"||typeof Dh>"u")return;const e=Dh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},wE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Qu(e[1]);return t&&JSON.parse(t)},bv=()=>{try{return yE()||_E()||wE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},EE=e=>{var t,n;return(n=(t=bv())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},CE=e=>{const t=EE(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Iv=()=>{var e;return(e=bv())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ta(JSON.stringify(n)),ta(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kE())}function xE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tv(){return Cv.NODE_ADMIN===!0}function bE(){try{return typeof indexedDB=="object"}catch{return!1}}function IE(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="FirebaseError";class xs extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=NE,Object.setPrototypeOf(this,xs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pv.prototype.create)}}class Pv{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?TE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xs(i,a,r)}}function TE(e,t){return e.replace(PE,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const PE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e){return JSON.parse(e)}function he(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=ns(Qu(s[0])||""),n=ns(Qu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},RE=function(e){const t=Rv(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},OE=function(e){const t=Rv(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Br(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Lh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function na(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Ku(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Mh(s)&&Mh(o)){if(!Ku(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mh(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let c=0;c<16;c++)r[c]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,f;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),f=1518500249):(u=s^o^a,f=1859775393):c<60?(u=s&o|a&(s|o),f=2400959708):(u=s^o^a,f=3395469782);const d=(i<<5|i>>>27)+u+l+f+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function xf(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Wa=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e){return e&&e._delegate?e._delegate:e}class rs{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ba;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jE(t))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Tn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Tn){return this.instances.has(t)}getOptions(t=Tn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Tn){return this.component?this.component.multipleInstances?t:Tn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FE(e){return e===Tn?void 0:e}function jE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ME(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(G||(G={}));const UE={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},BE=G.INFO,WE={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},$E=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=WE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ov{constructor(t){this.name=t,this._logLevel=BE,this._logHandler=$E,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?UE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const HE=(e,t)=>t.some(n=>e instanceof n);let Fh,jh;function VE(){return Fh||(Fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YE(){return jh||(jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Av=new WeakMap,qu=new WeakMap,Dv=new WeakMap,Ml=new WeakMap,bf=new WeakMap;function GE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(cn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Av.set(n,e)}).catch(()=>{}),bf.set(t,e),t}function QE(e){if(qu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});qu.set(e,t)}let Xu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Dv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function KE(e){Xu=e(Xu)}function qE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fl(this),t,...n);return Dv.set(r,t.sort?t.sort():[t]),cn(r)}:YE().includes(e)?function(...t){return e.apply(Fl(this),t),cn(Av.get(this))}:function(...t){return cn(e.apply(Fl(this),t))}}function XE(e){return typeof e=="function"?qE(e):(e instanceof IDBTransaction&&QE(e),HE(e,VE())?new Proxy(e,Xu):e)}function cn(e){if(e instanceof IDBRequest)return GE(e);if(Ml.has(e))return Ml.get(e);const t=XE(e);return t!==e&&(Ml.set(e,t),bf.set(t,e)),t}const Fl=e=>bf.get(e);function JE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=cn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(cn(o.result),l.oldVersion,l.newVersion,cn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ZE=["get","getKey","getAll","getAllKeys","count"],eC=["put","add","delete","clear"],jl=new Map;function zh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(jl.get(t))return jl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=eC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return jl.set(t,s),s}KE(e=>({...e,get:(t,n,r)=>zh(t,n)||e.get(t,n,r),has:(t,n)=>!!zh(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nC(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ju="@firebase/app",Uh="0.9.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Ov("@firebase/app"),rC="@firebase/app-compat",iC="@firebase/analytics-compat",sC="@firebase/analytics",oC="@firebase/app-check-compat",aC="@firebase/app-check",lC="@firebase/auth",uC="@firebase/auth-compat",cC="@firebase/database",fC="@firebase/database-compat",dC="@firebase/functions",hC="@firebase/functions-compat",pC="@firebase/installations",mC="@firebase/installations-compat",gC="@firebase/messaging",vC="@firebase/messaging-compat",yC="@firebase/performance",_C="@firebase/performance-compat",wC="@firebase/remote-config",EC="@firebase/remote-config-compat",CC="@firebase/storage",SC="@firebase/storage-compat",kC="@firebase/firestore",xC="@firebase/firestore-compat",bC="firebase",IC="10.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="[DEFAULT]",NC={[Ju]:"fire-core",[rC]:"fire-core-compat",[sC]:"fire-analytics",[iC]:"fire-analytics-compat",[aC]:"fire-app-check",[oC]:"fire-app-check-compat",[lC]:"fire-auth",[uC]:"fire-auth-compat",[cC]:"fire-rtdb",[fC]:"fire-rtdb-compat",[dC]:"fire-fn",[hC]:"fire-fn-compat",[pC]:"fire-iid",[mC]:"fire-iid-compat",[gC]:"fire-fcm",[vC]:"fire-fcm-compat",[yC]:"fire-perf",[_C]:"fire-perf-compat",[wC]:"fire-rc",[EC]:"fire-rc-compat",[CC]:"fire-gcs",[SC]:"fire-gcs-compat",[kC]:"fire-fst",[xC]:"fire-fst-compat","fire-js":"fire-js",[bC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new Map,ec=new Map;function TC(e,t){try{e.container.addComponent(t)}catch(n){Yn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ia(e){const t=e.name;if(ec.has(t))return Yn.debug(`There were multiple attempts to register component ${t}.`),!1;ec.set(t,e);for(const n of ra.values())TC(n,e);return!0}function PC(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fn=new Pv("app","Firebase",RC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=IC;function bs(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Zu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw fn.create("bad-app-name",{appName:String(i)});if(n||(n=Iv()),!n)throw fn.create("no-options");const s=ra.get(i);if(s){if(Ku(n,s.options)&&Ku(r,s.config))return s;throw fn.create("duplicate-app",{appName:i})}const o=new zE(i);for(const l of ec.values())o.addComponent(l);const a=new OC(n,r,o);return ra.set(i,a),a}function DC(e=Zu){const t=ra.get(e);if(!t&&e===Zu&&Iv())return bs();if(!t)throw fn.create("no-app",{appName:e});return t}function Tr(e,t,n){var r;let i=(r=NC[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yn.warn(a.join(" "));return}ia(new rs(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="firebase-heartbeat-database",MC=1,is="firebase-heartbeat-store";let zl=null;function Lv(){return zl||(zl=JE(LC,MC,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(is)}catch(n){console.warn(n)}}}}).catch(e=>{throw fn.create("idb-open",{originalErrorMessage:e.message})})),zl}async function FC(e){try{return await(await Lv()).transaction(is).objectStore(is).get(Mv(e))}catch(t){if(t instanceof xs)Yn.warn(t.message);else{const n=fn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Yn.warn(n.message)}}}async function Bh(e,t){try{const r=(await Lv()).transaction(is,"readwrite");await r.objectStore(is).put(t,Mv(e)),await r.done}catch(n){if(n instanceof xs)Yn.warn(n.message);else{const r=fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yn.warn(r.message)}}}function Mv(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=1024,zC=30*24*60*60*1e3;class UC{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wh();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=zC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wh(),{heartbeatsToSend:r,unsentEntries:i}=BC(this._heartbeatsCache.heartbeats),s=ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wh(){return new Date().toISOString().substring(0,10)}function BC(e,t=jC){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$h(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$h(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WC{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bE()?IE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function $h(e){return ta(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(e){ia(new rs("platform-logger",t=>new tC(t),"PRIVATE")),ia(new rs("heartbeat",t=>new UC(t),"PRIVATE")),Tr(Ju,Uh,e),Tr(Ju,Uh,"esm2017"),Tr("fire-js","")}$C("");var HC="firebase",VC="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tr(HC,VC,"app");var Hh={};const Vh="@firebase/database",Yh="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fv="";function YC(e){Fv=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),he(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:ns(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Ut(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new GC(t)}}catch{}return new QC},Dn=jv("localStorage"),tc=jv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Ov("@firebase/database"),KC=function(){let e=1;return function(){return e++}}(),zv=function(e){const t=LE(e),n=new DE;n.update(t);const r=n.digest();return kf.encodeByteArray(r)},Is=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Is.apply(null,r):typeof r=="object"?t+=he(r):t+=r,t+=" "}return t};let Un=null,Gh=!0;const qC=function(e,t){k(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Pr.logLevel=G.VERBOSE,Un=Pr.log.bind(Pr),t&&tc.set("logging_enabled",!0)):typeof e=="function"?Un=e:(Un=null,tc.remove("logging_enabled"))},Te=function(...e){if(Gh===!0&&(Gh=!1,Un===null&&tc.get("logging_enabled")===!0&&qC(!0)),Un){const t=Is.apply(null,e);Un(t)}},Ns=function(e){return function(...t){Te(e,...t)}},nc=function(...e){const t="FIREBASE INTERNAL ERROR: "+Is(...e);Pr.error(t)},Lt=function(...e){const t=`FIREBASE FATAL ERROR: ${Is(...e)}`;throw Pr.error(t),new Error(t)},We=function(...e){const t="FIREBASE WARNING: "+Is(...e);Pr.warn(t)},XC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Uv=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},JC=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wr="[MIN_NAME]",Gn="[MAX_NAME]",Jr=function(e,t){if(e===t)return 0;if(e===Wr||t===Gn)return-1;if(t===Wr||e===Gn)return 1;{const n=Qh(e),r=Qh(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},ZC=function(e,t){return e===t?0:e<t?-1:1},hi=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+he(t))},If=function(e){if(typeof e!="object"||e===null)return he(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=he(t[r]),n+=":",n+=If(e[t[r]]);return n+="}",n},Bv=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function $e(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Wv=function(e){k(!Uv(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,a,l;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=a+r,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let c="";for(l=0;l<64;l+=8){let d=parseInt(f.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},eS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nS(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const rS=new RegExp("^-?(0*)\\d{1,10}$"),iS=-2147483648,sS=2147483647,Qh=function(e){if(rS.test(e)){const t=Number(e);if(t>=iS&&t<=sS)return t}return null},Zr=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw We("Exception was thrown by user callback.",n),t},Math.floor(0))}},oS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ri=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(t)}}class Rr{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Rr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="5",$v="v",Hv="s",Vv="r",Yv="f",Gv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Qv="ls",Kv="p",rc="ac",qv="websocket",Xv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(t,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Dn.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Dn.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function uS(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Zv(e,t,n){k(typeof t=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(t===qv)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===Xv)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);uS(e)&&(n.ns=e.namespace);const i=[];return $e(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.counters_={}}incrementCounter(t,n=1){Ut(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return mE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul={},Bl={};function Tf(e){const t=e.toString();return Ul[t]||(Ul[t]=new cS),Ul[t]}function fS(e,t){const n=e.toString();return Bl[n]||(Bl[n]=t()),Bl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Zr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="start",hS="close",pS="pLPCommand",mS="pRTLPCB",ey="id",ty="pw",ny="ser",gS="cb",vS="seg",yS="ts",_S="d",wS="dframe",ry=1870,iy=30,ES=ry-iy,CS=25e3,SS=3e4;class _r{constructor(t,n,r,i,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ns(t),this.stats_=Tf(n),this.urlFn=l=>(this.appCheckToken&&(l[rc]=this.appCheckToken),Zv(n,Xv,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dS(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SS)),JC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pf((...s)=>{const[o,a,l,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kh)this.id=a,this.password=l;else if(o===hS)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Kh]="t",r[ny]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[gS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[$v]=Nf,this.transportSessionId&&(r[Hv]=this.transportSessionId),this.lastSessionId&&(r[Qv]=this.lastSessionId),this.applicationId&&(r[Kv]=this.applicationId),this.appCheckToken&&(r[rc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gv.test(location.hostname)&&(r[Vv]=Yv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_r.forceAllow_=!0}static forceDisallow(){_r.forceDisallow_=!0}static isAvailable(){return _r.forceAllow_?!0:!_r.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eS()&&!tS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=he(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kv(n),i=Bv(r,ES);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[wS]="t",r[ey]=t,r[ty]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=he(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pf{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KC(),window[pS+this.uniqueCallbackIdentifier]=t,window[mS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Te("frame writing exception"),a.stack&&Te(a.stack),Te(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[ey]=this.myID,t[ty]=this.myPW,t[ny]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+iy+r.length<=ry;){const o=this.pendingSegs.shift();r=r+"&"+vS+i+"="+o.seg+"&"+yS+i+"="+o.ts+"&"+_S+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(CS)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=16384,xS=45e3;let sa=null;typeof MozWebSocket<"u"?sa=MozWebSocket:typeof WebSocket<"u"&&(sa=WebSocket);class lt{constructor(t,n,r,i,s,o,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ns(this.connId),this.stats_=Tf(n),this.connURL=lt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[$v]=Nf,typeof location<"u"&&location.hostname&&Gv.test(location.hostname)&&(o[Vv]=Yv),n&&(o[Hv]=n),r&&(o[Qv]=r),i&&(o[rc]=i),s&&(o[Kv]=s),Zv(t,qv,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Dn.set("previous_websocket_failure",!0);try{let r;Tv(),this.mySock=new sa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&sa!==null&&!lt.forceDisallow_}static previouslyFailed(){return Dn.isInMemoryStorage||Dn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Dn.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ns(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(k(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=he(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Bv(n,kS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xS))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lt.responsesRequiredToBeHealthy=2;lt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[_r,lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=lt&&lt.isAvailable();let r=n&&!lt.previouslyFailed();if(t.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[lt];else{const i=this.transports_=[];for(const s of ss.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ss.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ss.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=6e4,IS=5e3,NS=10*1024,TS=100*1024,Wl="t",qh="d",PS="s",Xh="r",RS="e",Jh="o",Zh="a",ep="n",tp="p",OS="h";class AS{constructor(t,n,r,i,s,o,a,l,u,f){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ns("c:"+this.id+":"),this.transportManager_=new ss(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ri(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>TS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Wl in t){const n=t[Wl];n===Zh?this.upgradeIfSecondaryHealthy_():n===Xh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Jh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=hi("t",t),r=hi("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ep,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=hi("t",t),r=hi("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=hi(Wl,t);if(qh in t){const r=t[qh];if(n===OS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ep){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===PS?this.onConnectionShutdown_(r):n===Xh?this.onReset_(r):n===RS?nc("Server Error: "+r):n===Jh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nc("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Nf!==r&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ri(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bS))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ri(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(IS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tp,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Dn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(t){this.allowedEvents_=t,this.listeners_={},k(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){k(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends oy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Nv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new oa}getInitialEvent(t){return k(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=32,rp=768;class Y{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function $(){return new Y("")}function U(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function gn(e){return e.pieces_.length-e.pieceNum_}function Q(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Y(e.pieces_,t)}function ay(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function DS(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function ly(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function uy(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Y(t,0)}function pe(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Y)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Y(n,0)}function z(e){return e.pieceNum_>=e.pieces_.length}function Oe(e,t){const n=U(e),r=U(t);if(n===null)return t;if(n===r)return Oe(Q(e),Q(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function cy(e,t){if(gn(e)!==gn(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function ut(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(gn(e)>gn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class LS{constructor(t,n){this.errorPrefix_=n,this.parts_=ly(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Wa(this.parts_[r]);fy(this)}}function MS(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Wa(t),fy(e)}function FS(e){const t=e.parts_.pop();e.byteLength_-=Wa(t),e.parts_.length>0&&(e.byteLength_-=1)}function fy(e){if(e.byteLength_>rp)throw new Error(e.errorPrefix_+"has a key path longer than "+rp+" bytes ("+e.byteLength_+").");if(e.parts_.length>np)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+np+") or object contains a cycle "+Pn(e))}function Pn(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends oy{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Rf}getInitialEvent(t){return k(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=1e3,jS=60*5*1e3,ip=30*1e3,zS=1.3,US=3e4,BS="server_kill",sp=3;class Pt extends sy{constructor(t,n,r,i,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Pt.nextPersistentConnectionId_++,this.log_=Ns("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pi,this.maxReconnectDelay_=jS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Tv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rf.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&oa.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(he(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new Ba,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Pt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Ut(t,"w")){const r=Br(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||OE(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ip)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=RE(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+he(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):nc("Unrecognized action received from server: "+he(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pi,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=pi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>US&&(this.reconnectDelay_=pi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,a=new AS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,g=>{We(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(BS)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&We(c),l())}}}interrupt(t){Te("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Te("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Lh(this.interruptReasons_)&&(this.reconnectDelay_=pi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>If(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new Y(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){Te("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sp&&(this.reconnectDelay_=ip,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Te("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+Fv.replace(/\./g,"-")]=1,Nv()?t["framework.cordova"]=1:xE()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=oa.getInstance().currentlyOnline();return Lh(this.interruptReasons_)&&t}}Pt.nextPersistentConnectionId_=0;Pt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new M(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new M(Wr,t),i=new M(Wr,n);return this.compare(r,i)!==0}minPost(){return M.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;class dy extends $a{static get __EMPTY_NODE(){return to}static set __EMPTY_NODE(t){to=t}compare(t,n){return Jr(t.name,n.name)}isDefinedOn(t){throw Xr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return M.MIN}maxPost(){return new M(Gn,to)}makePost(t,n){return k(typeof t=="string","KeyIndex indexValue must always be a string."),new M(t,to)}toString(){return".key"}}const Or=new dy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class we{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??we.RED,this.left=i??je.EMPTY_NODE,this.right=s??je.EMPTY_NODE}copy(t,n,r,i,s){return new we(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return je.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return je.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class WS{copy(t,n,r,i,s){return this}insert(t,n,r){return new we(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class je{constructor(t,n=je.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new je(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(t){return new je(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,we.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new no(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new no(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new no(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new no(this.root_,null,this.comparator_,!0,t)}}je.EMPTY_NODE=new WS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(e,t){return Jr(e.name,t.name)}function Of(e,t){return Jr(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;function HS(e){ic=e}const hy=function(e){return typeof e=="number"?"number:"+Wv(e):"string:"+e},py=function(e){if(e.isLeafNode()){const t=e.val();k(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Ut(t,".sv"),"Priority must be a string or number.")}else k(e===ic||e.isEmpty(),"priority of unexpected type.");k(e===ic||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let op;class ye{constructor(t,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),py(this.priorityNode_)}static set __childrenNodeConstructor(t){op=t}static get __childrenNodeConstructor(){return op}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new ye(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return z(t)?this:U(t)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=U(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||gn(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+hy(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=Wv(this.value_):t+=this.value_,this.lazyHash_=zv(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===ye.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof ye.__childrenNodeConstructor?-1:(k(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),s=ye.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let my,gy;function VS(e){my=e}function YS(e){gy=e}class GS extends $a{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Jr(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Gn,new ye("[PRIORITY-POST]",gy))}makePost(t,n){const r=my(t);return new M(n,new ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const ae=new GS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=Math.log(2);class KS{constructor(t){const n=s=>parseInt(Math.log(s)/QS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const aa=function(e,t,n,r){e.sort(t);const i=function(l,u){const f=u-l;let c,d;if(f===0)return null;if(f===1)return c=e[l],d=n?n(c):c,new we(d,c.node,we.BLACK,null,null);{const g=parseInt(f/2,10)+l,v=i(l,g),y=i(g+1,u);return c=e[g],d=n?n(c):c,new we(d,c.node,we.BLACK,v,y)}},s=function(l){let u=null,f=null,c=e.length;const d=function(v,y){const E=c-v,p=c;c-=v;const h=i(E+1,p),m=e[E],_=n?n(m):m;g(new we(_,m.node,y,null,h))},g=function(v){u?(u.left=v,u=v):(f=v,u=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));y?d(E,we.BLACK):(d(E,we.BLACK),d(E,we.RED))}return f},o=new KS(e.length),a=s(o);return new je(r||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l;const sr={};class Nt{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return k(sr&&ae,"ChildrenNode.ts has not been loaded"),$l=$l||new Nt({".priority":sr},{".priority":ae}),$l}get(t){const n=Br(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof je?n:null}hasIndex(t){return Ut(this.indexSet_,t.toString())}addIndex(t,n){k(t!==Or,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(M.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=aa(r,t.getCompare()):a=sr;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const f=Object.assign({},this.indexes_);return f[l]=a,new Nt(f,u)}addToIndexes(t,n){const r=na(this.indexes_,(i,s)=>{const o=Br(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===sr)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(M.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),aa(a,o.getCompare())}else return sr;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new M(t.name,a))),l.insert(t,t.node)}});return new Nt(r,this.indexSet_)}removeFromIndexes(t,n){const r=na(this.indexes_,i=>{if(i===sr)return i;{const s=n.get(t.name);return s?i.remove(new M(t.name,s)):i}});return new Nt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi;class A{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&py(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mi||(mi=new A(new je(Of),null,Nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mi}updatePriority(t){return this.children_.isEmpty()?this:new A(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?mi:n}}getChild(t){const n=U(t);return n===null?this:this.getImmediateChild(n).getChild(Q(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(k(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new M(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?mi:this.priorityNode_;return new A(i,o,s)}}updateChild(t,n){const r=U(t);if(r===null)return n;{k(U(t)!==".priority"||gn(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ae,(o,a)=>{n[o]=a.val(t),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+hy(this.getPriority().val())+":"),this.forEachChild(ae,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":zv(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new M(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new M(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new M(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Ts?-1:0}withIndex(t){if(t===Or||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Or||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ae),i=n.getIterator(ae);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===Or?null:this.indexMap_.get(t.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qS extends A{constructor(){super(new je(Of),A.EMPTY_NODE,Nt.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return A.EMPTY_NODE}isEmpty(){return!1}}const Ts=new qS;Object.defineProperties(M,{MIN:{value:new M(Wr,A.EMPTY_NODE)},MAX:{value:new M(Gn,Ts)}});dy.__EMPTY_NODE=A.EMPTY_NODE;ye.__childrenNodeConstructor=A;HS(Ts);YS(Ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=!0;function Ee(e,t=null){if(e===null)return A.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),k(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new ye(n,Ee(t))}if(!(e instanceof Array)&&XS){const n=[];let r=!1;if($e(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ee(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new M(o,l)))}}),n.length===0)return A.EMPTY_NODE;const s=aa(n,$S,o=>o.name,Of);if(r){const o=aa(n,ae.getCompare());return new A(s,Ee(t),new Nt({".priority":o},{".priority":ae}))}else return new A(s,Ee(t),Nt.Default)}else{let n=A.EMPTY_NODE;return $e(e,(r,i)=>{if(Ut(e,r)&&r.substring(0,1)!=="."){const s=Ee(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ee(t))}}VS(Ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS extends $a{constructor(t){super(),this.indexPath_=t,k(!z(t)&&U(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Jr(t.name,n.name):s}makePost(t,n){const r=Ee(t),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new M(n,i)}maxPost(){const t=A.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new M(Gn,t)}toString(){return ly(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS extends $a{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Jr(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(t,n){const r=Ee(t);return new M(n,r)}toString(){return".value"}}const ek=new ZS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(e){return{type:"value",snapshotNode:e}}function $r(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function os(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function as(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function tk(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){this.index_=t}updateChild(t,n,r,i,s,o){k(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?t.hasChild(n)?o.trackChildChange(os(n,a)):k(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange($r(n,r)):o.trackChildChange(as(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(ae,(i,s)=>{n.hasChild(i)||r.trackChildChange(os(i,s))}),n.isLeafNode()||n.forEachChild(ae,(i,s)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(s)||r.trackChildChange(as(i,s,o))}else r.trackChildChange($r(i,s))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?A.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t){this.indexedFilter_=new Af(t.getIndex()),this.index_=t.getIndex(),this.startPost_=ls.getStartPost_(t),this.endPost_=ls.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,s,o){return this.matches(new M(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,s,o)}updateFullNode(t,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ae,(o,a)=>{s.matches(new M(o,a))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ls(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,s,o){return this.rangedFilter_.matches(new M(n,r))||(r=A.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,s,o):this.fullLimitUpdateChild_(t,n,r,s,o)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,g)=>c(g,d)}else o=this.index_.getCompare();const a=t;k(a.numChildren()===this.limit_,"");const l=new M(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,l);if(f&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(as(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(os(n,c));const y=a.updateImmediateChild(n,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange($r(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return r.isEmpty()?t:f&&o(u,l)>=0?(s!=null&&(s.trackChildChange(os(u.name,u.node)),s.trackChildChange($r(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const t=new Df;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function rk(e){return e.loadsAllData()?new Af(e.getIndex()):e.hasLimit()?new nk(e):new ls(e)}function ap(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ae?n="$priority":e.index_===ek?n="$value":e.index_===Or?n="$key":(k(e.index_ instanceof JS,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=he(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=he(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+he(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=he(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+he(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function lp(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==ae&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends sy{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ns("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(k(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=la.getListenId_(t,r),a={};this.listens_[o]=a;const l=ap(t._queryParams);this.restRequest_(s+".json",l,(u,f)=>{let c=f;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Br(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(t,n){const r=la.getListenId_(t,n);delete this.listens_[r]}get(t){const n=ap(t._queryParams),r=t._path.toString(),i=new Ba;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+AE(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ns(a.responseText)}catch{We("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(){return{value:null,children:new Map}}function yy(e,t,n){if(z(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=U(t);e.children.has(r)||e.children.set(r,ua());const i=e.children.get(r);t=Q(t),yy(i,t,n)}}function sc(e,t,n){e.value!==null?n(t,e.value):sk(e,(r,i)=>{const s=new Y(t.toString()+"/"+r);sc(i,s,n)})}function sk(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&$e(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=10*1e3,ak=30*1e3,lk=5*60*1e3;class uk{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ok(t);const r=up+(ak-up)*Math.random();Ri(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;$e(t,(i,s)=>{s>0&&Ut(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ri(this.reportStats_.bind(this),Math.floor(Math.random()*2*lk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function _y(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Lf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Mf(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=_y()}operationForChild(t){if(z(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(t));return new ca($(),n,this.revert)}}else return k(U(this.path)===t,"operationForChild called for unrelated child."),new ca(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,n){this.source=t,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(t){return z(this.path)?new us(this.source,$()):new us(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(t){return z(this.path)?new Qn(this.source,$(),this.snap.getImmediateChild(t)):new Qn(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(t){if(z(this.path)){const n=this.children.subtree(new Y(t));return n.isEmpty()?null:n.value?new Qn(this.source,$(),n.value):new cs(this.source,$(),n)}else return k(U(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new cs(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(z(t))return this.isFullyInitialized()&&!this.filtered_;const n=U(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function fk(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(tk(o.childName,o.snapshotNode))}),gi(e,i,"child_removed",t,r,n),gi(e,i,"child_added",t,r,n),gi(e,i,"child_moved",s,r,n),gi(e,i,"child_changed",t,r,n),gi(e,i,"value",t,r,n),i}function gi(e,t,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>hk(e,a,l)),o.forEach(a=>{const l=dk(e,a,s);i.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function dk(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function hk(e,t,n){if(t.childName==null||n.childName==null)throw Xr("Should only compare child_ events.");const r=new M(t.childName,t.snapshotNode),i=new M(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(e,t){return{eventCache:e,serverCache:t}}function Oi(e,t,n,r){return Ha(new vn(t,n,r),e.serverCache)}function wy(e,t,n,r){return Ha(e.eventCache,new vn(t,n,r))}function fa(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Kn(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hl;const pk=()=>(Hl||(Hl=new je(ZC)),Hl);class X{constructor(t,n=pk()){this.value=t,this.children=n}static fromObject(t){let n=new X(null);return $e(t,(r,i)=>{n=n.set(new Y(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(z(t))return null;{const r=U(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(t),n);return s!=null?{path:pe(new Y(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(z(t))return this;{const n=U(t),r=this.children.get(n);return r!==null?r.subtree(Q(t)):new X(null)}}set(t,n){if(z(t))return new X(n,this.children);{const r=U(t),s=(this.children.get(r)||new X(null)).set(Q(t),n),o=this.children.insert(r,s);return new X(this.value,o)}}remove(t){if(z(t))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=U(t),r=this.children.get(n);if(r){const i=r.remove(Q(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new X(null):new X(this.value,s)}else return this}}get(t){if(z(t))return this.value;{const n=U(t),r=this.children.get(n);return r?r.get(Q(t)):null}}setTree(t,n){if(z(t))return n;{const r=U(t),s=(this.children.get(r)||new X(null)).setTree(Q(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new X(this.value,o)}}fold(t){return this.fold_($(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(pe(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,$(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(t))return null;{const s=U(t),o=this.children.get(s);return o?o.findOnPath_(Q(t),pe(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,$(),n)}foreachOnPath_(t,n,r){if(z(t))return this;{this.value&&r(n,this.value);const i=U(t),s=this.children.get(i);return s?s.foreachOnPath_(Q(t),pe(n,i),r):new X(null)}}foreach(t){this.foreach_($(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(pe(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.writeTree_=t}static empty(){return new pt(new X(null))}}function Ai(e,t,n){if(z(t))return new pt(new X(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=Oe(i,t);return s=s.updateChild(o,n),new pt(e.writeTree_.set(i,s))}else{const i=new X(n),s=e.writeTree_.setTree(t,i);return new pt(s)}}}function cp(e,t,n){let r=e;return $e(n,(i,s)=>{r=Ai(r,pe(t,i),s)}),r}function fp(e,t){if(z(t))return pt.empty();{const n=e.writeTree_.setTree(t,new X(null));return new pt(n)}}function oc(e,t){return rr(e,t)!=null}function rr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Oe(n.path,t)):null}function dp(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(r,i)=>{t.push(new M(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new M(r,i.value))}),t}function dn(e,t){if(z(t))return e;{const n=rr(e,t);return n!=null?new pt(new X(n)):new pt(e.writeTree_.subtree(t))}}function ac(e){return e.writeTree_.isEmpty()}function Hr(e,t){return Ey($(),e.writeTree_,t)}function Ey(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ey(pe(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(pe(e,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(e,t){return xy(t,e)}function mk(e,t,n,r,i){k(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Ai(e.visibleWrites,t,n)),e.lastWriteId=r}function gk(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function vk(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);k(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&yk(a,r.path)?i=!1:ut(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return _k(e),!0;if(r.snap)e.visibleWrites=fp(e.visibleWrites,r.path);else{const a=r.children;$e(a,l=>{e.visibleWrites=fp(e.visibleWrites,pe(r.path,l))})}return!0}else return!1}function yk(e,t){if(e.snap)return ut(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&ut(pe(e.path,n),t))return!0;return!1}function _k(e){e.visibleWrites=Cy(e.allWrites,wk,$()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function wk(e){return e.visible}function Cy(e,t,n){let r=pt.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let a;if(s.snap)ut(n,o)?(a=Oe(n,o),r=Ai(r,a,s.snap)):ut(o,n)&&(a=Oe(o,n),r=Ai(r,$(),s.snap.getChild(a)));else if(s.children){if(ut(n,o))a=Oe(n,o),r=cp(r,a,s.children);else if(ut(o,n))if(a=Oe(o,n),z(a))r=cp(r,$(),s.children);else{const l=Br(s.children,U(a));if(l){const u=l.getChild(Q(a));r=Ai(r,$(),u)}}}else throw Xr("WriteRecord should have .snap or .children")}}return r}function Sy(e,t,n,r,i){if(!r&&!i){const s=rr(e.visibleWrites,t);if(s!=null)return s;{const o=dn(e.visibleWrites,t);if(ac(o))return n;if(n==null&&!oc(o,$()))return null;{const a=n||A.EMPTY_NODE;return Hr(o,a)}}}else{const s=dn(e.visibleWrites,t);if(!i&&ac(s))return n;if(!i&&n==null&&!oc(s,$()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ut(u.path,t)||ut(t,u.path))},a=Cy(e.allWrites,o,t),l=n||A.EMPTY_NODE;return Hr(a,l)}}}function Ek(e,t,n){let r=A.EMPTY_NODE;const i=rr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(ae,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=dn(e.visibleWrites,t);return n.forEachChild(ae,(o,a)=>{const l=Hr(dn(s,new Y(o)),a);r=r.updateImmediateChild(o,l)}),dp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=dn(e.visibleWrites,t);return dp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Ck(e,t,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=pe(t,n);if(oc(e.visibleWrites,s))return null;{const o=dn(e.visibleWrites,s);return ac(o)?i.getChild(n):Hr(o,i.getChild(n))}}function Sk(e,t,n,r){const i=pe(t,n),s=rr(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=dn(e.visibleWrites,i);return Hr(o,r.getNode().getImmediateChild(n))}else return null}function kk(e,t){return rr(e.visibleWrites,t)}function xk(e,t,n,r,i,s,o){let a;const l=dn(e.visibleWrites,t),u=rr(l,$());if(u!=null)a=u;else if(n!=null)a=Hr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],c=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=d.getNext();for(;g&&f.length<i;)c(g,r)!==0&&f.push(g),g=d.getNext();return f}else return[]}function bk(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function da(e,t,n,r){return Sy(e.writeTree,e.treePath,t,n,r)}function Ff(e,t){return Ek(e.writeTree,e.treePath,t)}function hp(e,t,n,r){return Ck(e.writeTree,e.treePath,t,n,r)}function ha(e,t){return kk(e.writeTree,pe(e.treePath,t))}function Ik(e,t,n,r,i,s){return xk(e.writeTree,e.treePath,t,n,r,i,s)}function jf(e,t,n){return Sk(e.writeTree,e.treePath,t,n)}function ky(e,t){return xy(pe(e.treePath,t),e.writeTree)}function xy(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,as(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,os(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,$r(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,as(r,t.snapshotNode,i.oldSnap));else throw Xr("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const by=new Tk;class zf{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new vn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jf(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Kn(this.viewCache_),s=Ik(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(e){return{filter:e}}function Rk(e,t){k(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),k(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Ok(e,t,n,r,i){const s=new Nk;let o,a;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=lc(e,t,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!z(u.path),o=pa(e,t,u.path,u.snap,r,i,a,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=Dk(e,t,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),o=uc(e,t,u.path,u.children,r,i,a,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=Fk(e,t,u.path,r,i,s):o=Lk(e,t,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=Mk(e,t,n.path,r,s);else throw Xr("Unknown operation type: "+n.type);const l=s.getChanges();return Ak(t,o,l),{viewCache:o,changes:l}}function Ak(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=fa(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(vy(fa(t)))}}function Iy(e,t,n,r,i,s){const o=t.eventCache;if(ha(r,n)!=null)return t;{let a,l;if(z(n))if(k(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=Kn(t),f=u instanceof A?u:A.EMPTY_NODE,c=Ff(r,f);a=e.filter.updateFullNode(t.eventCache.getNode(),c,s)}else{const u=da(r,Kn(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){k(gn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();l=t.serverCache.getNode();const c=hp(r,n,f,l);c!=null?a=e.filter.updatePriority(f,c):a=o.getNode()}else{const f=Q(n);let c;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const d=hp(r,n,o.getNode(),l);d!=null?c=o.getNode().getImmediateChild(u).updateChild(f,d):c=o.getNode().getImmediateChild(u)}else c=jf(r,u,t.serverCache);c!=null?a=e.filter.updateChild(o.getNode(),u,c,f,i,s):a=o.getNode()}}return Oi(t,a,o.isFullyInitialized()||z(n),e.filter.filtersNodes())}}function pa(e,t,n,r,i,s,o,a){const l=t.serverCache;let u;const f=o?e.filter:e.filter.getIndexedFilter();if(z(n))u=f.updateFullNode(l.getNode(),r,null);else if(f.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=f.updateFullNode(l.getNode(),g,null)}else{const g=U(n);if(!l.isCompleteForPath(n)&&gn(n)>1)return t;const v=Q(n),E=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=f.updatePriority(l.getNode(),E):u=f.updateChild(l.getNode(),g,E,v,by,null)}const c=wy(t,u,l.isFullyInitialized()||z(n),f.filtersNodes()),d=new zf(i,c,s);return Iy(e,c,n,i,d,a)}function lc(e,t,n,r,i,s,o){const a=t.eventCache;let l,u;const f=new zf(i,t,s);if(z(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Oi(t,u,!0,e.filter.filtersNodes());else{const c=U(n);if(c===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),l=Oi(t,u,a.isFullyInitialized(),a.isFiltered());else{const d=Q(n),g=a.getNode().getImmediateChild(c);let v;if(z(d))v=r;else{const y=f.getCompleteChild(c);y!=null?ay(d)===".priority"&&y.getChild(uy(d)).isEmpty()?v=y:v=y.updateChild(d,r):v=A.EMPTY_NODE}if(g.equals(v))l=t;else{const y=e.filter.updateChild(a.getNode(),c,v,d,f,o);l=Oi(t,y,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function pp(e,t){return e.eventCache.isCompleteForChild(t)}function Dk(e,t,n,r,i,s,o){let a=t;return r.foreach((l,u)=>{const f=pe(n,l);pp(t,U(f))&&(a=lc(e,a,f,u,i,s,o))}),r.foreach((l,u)=>{const f=pe(n,l);pp(t,U(f))||(a=lc(e,a,f,u,i,s,o))}),a}function mp(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function uc(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;z(n)?u=r:u=new X(null).setTree(n,r);const f=t.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(f.hasChild(c)){const g=t.serverCache.getNode().getImmediateChild(c),v=mp(e,g,d);l=pa(e,l,new Y(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,d)=>{const g=!t.serverCache.isCompleteForChild(c)&&d.value===null;if(!f.hasChild(c)&&!g){const v=t.serverCache.getNode().getImmediateChild(c),y=mp(e,v,d);l=pa(e,l,new Y(c),y,i,s,o,a)}}),l}function Lk(e,t,n,r,i,s,o){if(ha(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return pa(e,t,n,l.getNode().getChild(n),i,s,a,o);if(z(n)){let u=new X(null);return l.getNode().forEachChild(Or,(f,c)=>{u=u.set(new Y(f),c)}),uc(e,t,n,u,i,s,a,o)}else return t}else{let u=new X(null);return r.foreach((f,c)=>{const d=pe(n,f);l.isCompleteForPath(d)&&(u=u.set(f,l.getNode().getChild(d)))}),uc(e,t,n,u,i,s,a,o)}}function Mk(e,t,n,r,i){const s=t.serverCache,o=wy(t,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return Iy(e,o,n,r,by,i)}function Fk(e,t,n,r,i,s){let o;if(ha(r,n)!=null)return t;{const a=new zf(r,t,i),l=t.eventCache.getNode();let u;if(z(n)||U(n)===".priority"){let f;if(t.serverCache.isFullyInitialized())f=da(r,Kn(t));else{const c=t.serverCache.getNode();k(c instanceof A,"serverChildren would be complete if leaf node"),f=Ff(r,c)}f=f,u=e.filter.updateFullNode(l,f,s)}else{const f=U(n);let c=jf(r,f,t.serverCache);c==null&&t.serverCache.isCompleteForChild(f)&&(c=l.getImmediateChild(f)),c!=null?u=e.filter.updateChild(l,f,c,Q(n),a,s):t.eventCache.getNode().hasChild(f)?u=e.filter.updateChild(l,f,A.EMPTY_NODE,Q(n),a,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=da(r,Kn(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||ha(r,$())!=null,Oi(t,u,o,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Af(r.getIndex()),s=rk(r);this.processor_=Pk(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,a.getNode(),null),f=new vn(l,o.isFullyInitialized(),i.filtersNodes()),c=new vn(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ha(c,f),this.eventGenerator_=new ck(this.query_)}get query(){return this.query_}}function zk(e){return e.viewCache_.serverCache.getNode()}function Uk(e){return fa(e.viewCache_)}function Bk(e,t){const n=Kn(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!z(t)&&!n.getImmediateChild(U(t)).isEmpty())?n.getChild(t):null}function gp(e){return e.eventRegistrations_.length===0}function Wk(e,t){e.eventRegistrations_.push(t)}function vp(e,t,n){const r=[];if(n){k(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(t){let i=[];for(let s=0;s<e.eventRegistrations_.length;++s){const o=e.eventRegistrations_[s];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function yp(e,t,n,r){t.type===ct.MERGE&&t.source.queryId!==null&&(k(Kn(e.viewCache_),"We should always have a full cache before handling merges"),k(fa(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=Ok(e.processor_,i,t,n,r);return Rk(e.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Ny(e,s.changes,s.viewCache.eventCache.getNode(),null)}function $k(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(s,o)=>{r.push($r(s,o))}),n.isFullyInitialized()&&r.push(vy(n.getNode())),Ny(e,r,n.getNode(),t)}function Ny(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return fk(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma;class Ty{constructor(){this.views=new Map}}function Hk(e){k(!ma,"__referenceConstructor has already been defined"),ma=e}function Vk(){return k(ma,"Reference.ts has not been loaded"),ma}function Yk(e){return e.views.size===0}function Uf(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),yp(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(yp(o,t,n,r));return s}}function Py(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let a=da(n,i?r:null),l=!1;a?l=!0:r instanceof A?(a=Ff(n,r),l=!1):(a=A.EMPTY_NODE,l=!1);const u=Ha(new vn(a,l,!1),new vn(r,i,!1));return new jk(t,u)}return o}function Gk(e,t,n,r,i,s){const o=Py(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),Wk(o,n),$k(o,n)}function Qk(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=yn(e);if(i==="default")for(const[l,u]of e.views.entries())o=o.concat(vp(u,n,r)),gp(u)&&(e.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=e.views.get(i);l&&(o=o.concat(vp(l,n,r)),gp(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!yn(e)&&s.push(new(Vk())(t._repo,t._path)),{removed:s,events:o}}function Ry(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function hn(e,t){let n=null;for(const r of e.views.values())n=n||Bk(r,t);return n}function Oy(e,t){if(t._queryParams.loadsAllData())return Ya(e);{const r=t._queryIdentifier;return e.views.get(r)}}function Ay(e,t){return Oy(e,t)!=null}function yn(e){return Ya(e)!=null}function Ya(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga;function Kk(e){k(!ga,"__referenceConstructor has already been defined"),ga=e}function qk(){return k(ga,"Reference.ts has not been loaded"),ga}let Xk=1;class _p{constructor(t){this.listenProvider_=t,this.syncPointTree_=new X(null),this.pendingWriteTree_=bk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Dy(e,t,n,r,i){return mk(e.pendingWriteTree_,t,n,r,i),i?Rs(e,new Qn(_y(),t,n)):[]}function Ln(e,t,n=!1){const r=gk(e.pendingWriteTree_,t);if(vk(e.pendingWriteTree_,t)){let s=new X(null);return r.snap!=null?s=s.set($(),!0):$e(r.children,o=>{s=s.set(new Y(o),!0)}),Rs(e,new ca(r.path,s,n))}else return[]}function Ps(e,t,n){return Rs(e,new Qn(Lf(),t,n))}function Jk(e,t,n){const r=X.fromObject(n);return Rs(e,new cs(Lf(),t,r))}function Zk(e,t){return Rs(e,new us(Lf(),t))}function ex(e,t,n){const r=Wf(e,n);if(r){const i=$f(r),s=i.path,o=i.queryId,a=Oe(s,t),l=new us(Mf(o),a);return Hf(e,s,l)}else return[]}function Ly(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&(t._queryIdentifier==="default"||Ay(o,t))){const l=Qk(o,t,n,r);Yk(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const f=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=e.syncPointTree_.findOnPath(s,(d,g)=>yn(g));if(f&&!c){const d=e.syncPointTree_.subtree(s);if(!d.isEmpty()){const g=ix(d);for(let v=0;v<g.length;++v){const y=g[v],E=y.query,p=zy(e,y);e.listenProvider_.startListening(Di(E),fs(e,E),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(f?e.listenProvider_.stopListening(Di(t),null):u.forEach(d=>{const g=e.queryToTagMap.get(Ga(d));e.listenProvider_.stopListening(Di(d),g)}))}sx(e,u)}return a}function My(e,t,n,r){const i=Wf(e,r);if(i!=null){const s=$f(i),o=s.path,a=s.queryId,l=Oe(o,t),u=new Qn(Mf(a),l,n);return Hf(e,o,u)}else return[]}function tx(e,t,n,r){const i=Wf(e,r);if(i){const s=$f(i),o=s.path,a=s.queryId,l=Oe(o,t),u=X.fromObject(n),f=new cs(Mf(a),l,u);return Hf(e,o,f)}else return[]}function nx(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(d,g)=>{const v=Oe(d,i);s=s||hn(g,v),o=o||yn(g)});let a=e.syncPointTree_.get(i);a?(o=o||yn(a),s=s||hn(a,$())):(a=new Ty,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=A.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((g,v)=>{const y=hn(v,$());y&&(s=s.updateImmediateChild(g,y))}));const u=Ay(a,t);if(!u&&!t._queryParams.loadsAllData()){const d=Ga(t);k(!e.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=ox();e.queryToTagMap.set(d,g),e.tagToQueryMap.set(g,d)}const f=Va(e.pendingWriteTree_,i);let c=Gk(a,t,n,f,s,l);if(!u&&!o&&!r){const d=Oy(a,t);c=c.concat(ax(e,t,d))}return c}function Bf(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=Oe(o,t),u=hn(a,l);if(u)return u});return Sy(i,t,s,n,!0)}function rx(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(u,f)=>{const c=Oe(u,n);r=r||hn(f,c)});let i=e.syncPointTree_.get(n);i?r=r||hn(i,$()):(i=new Ty,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=r!=null,o=s?new vn(r,!0,!1):null,a=Va(e.pendingWriteTree_,t._path),l=Py(i,t,a,s?o.getNode():A.EMPTY_NODE,s);return Uk(l)}function Rs(e,t){return Fy(t,e.syncPointTree_,null,Va(e.pendingWriteTree_,$()))}function Fy(e,t,n,r){if(z(e.path))return jy(e,t,n,r);{const i=t.get($());n==null&&i!=null&&(n=hn(i,$()));let s=[];const o=U(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,f=ky(r,o);s=s.concat(Fy(a,l,u,f))}return i&&(s=s.concat(Uf(i,e,r,n))),s}}function jy(e,t,n,r){const i=t.get($());n==null&&i!=null&&(n=hn(i,$()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=ky(r,o),f=e.operationForChild(o);f&&(s=s.concat(jy(f,a,l,u)))}),i&&(s=s.concat(Uf(i,e,r,n))),s}function zy(e,t){const n=t.query,r=fs(e,n);return{hashFn:()=>(zk(t)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ex(e,n._path,r):Zk(e,n._path);{const s=nS(i,n);return Ly(e,n,null,s)}}}}function fs(e,t){const n=Ga(t);return e.queryToTagMap.get(n)}function Ga(e){return e._path.toString()+"$"+e._queryIdentifier}function Wf(e,t){return e.tagToQueryMap.get(t)}function $f(e){const t=e.indexOf("$");return k(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Y(e.substr(0,t))}}function Hf(e,t,n){const r=e.syncPointTree_.get(t);k(r,"Missing sync point for query tag that we're tracking");const i=Va(e.pendingWriteTree_,t);return Uf(r,n,i,null)}function ix(e){return e.fold((t,n,r)=>{if(n&&yn(n))return[Ya(n)];{let i=[];return n&&(i=Ry(n)),$e(r,(s,o)=>{i=i.concat(o)}),i}})}function Di(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(qk())(e._repo,e._path):e}function sx(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=Ga(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}function ox(){return Xk++}function ax(e,t,n){const r=t._path,i=fs(e,t),s=zy(e,n),o=e.listenProvider_.startListening(Di(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)k(!yn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,f,c)=>{if(!z(u)&&f&&yn(f))return[Ya(f).query];{let d=[];return f&&(d=d.concat(Ry(f).map(g=>g.query))),$e(c,(g,v)=>{d=d.concat(v)}),d}});for(let u=0;u<l.length;++u){const f=l[u];e.listenProvider_.stopListening(Di(f),fs(e,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Vf(n)}node(){return this.node_}}class Yf{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=pe(this.path_,t);return new Yf(this.syncTree_,n)}node(){return Bf(this.syncTree_,this.path_)}}const lx=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},wp=function(e,t,n){if(!e||typeof e!="object")return e;if(k(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return ux(e[".sv"],t,n);if(typeof e[".sv"]=="object")return cx(e[".sv"],t);k(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},ux=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+e)}},cx=function(e,t,n){e.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=t.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},fx=function(e,t,n,r){return Gf(t,new Yf(n,e),r)},Uy=function(e,t,n){return Gf(e,new Vf(t),n)};function Gf(e,t,n){const r=e.getPriority().val(),i=wp(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=wp(o.getValue(),t,n);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,Ee(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ye(i))),o.forEachChild(ae,(a,l)=>{const u=Gf(l,t.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function Kf(e,t){let n=t instanceof Y?t:new Y(t),r=e,i=U(n);for(;i!==null;){const s=Br(r.node.children,i)||{children:{},childCount:0};r=new Qf(i,r,s),n=Q(n),i=U(n)}return r}function ei(e){return e.node.value}function By(e,t){e.node.value=t,cc(e)}function Wy(e){return e.node.childCount>0}function dx(e){return ei(e)===void 0&&!Wy(e)}function Qa(e,t){$e(e.node.children,(n,r)=>{t(new Qf(n,e,r))})}function $y(e,t,n,r){n&&!r&&t(e),Qa(e,i=>{$y(i,t,!0,r)}),n&&r&&t(e)}function hx(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Os(e){return new Y(e.parent===null?e.name:Os(e.parent)+"/"+e.name)}function cc(e){e.parent!==null&&px(e.parent,e.name,e)}function px(e,t,n){const r=dx(n),i=Ut(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,cc(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,cc(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=/[\[\].#$\/\u0000-\u001F\u007F]/,gx=/[\[\].#$\u0000-\u001F\u007F]/,Vl=10*1024*1024,Hy=function(e){return typeof e=="string"&&e.length!==0&&!mx.test(e)},Vy=function(e){return typeof e=="string"&&e.length!==0&&!gx.test(e)},vx=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Vy(e)},Yy=function(e,t,n,r){r&&t===void 0||qf(xf(e,"value"),t,n)},qf=function(e,t,n){const r=n instanceof Y?new LS(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Pn(r));if(typeof t=="function")throw new Error(e+"contains a function "+Pn(r)+" with contents = "+t.toString());if(Uv(t))throw new Error(e+"contains "+t.toString()+" "+Pn(r));if(typeof t=="string"&&t.length>Vl/3&&Wa(t)>Vl)throw new Error(e+"contains a string greater than "+Vl+" utf8 bytes "+Pn(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if($e(t,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Hy(o)))throw new Error(e+" contains an invalid key ("+o+") "+Pn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);MS(r,o),qf(e,a,r),FS(r)}),i&&s)throw new Error(e+' contains ".value" child '+Pn(r)+" in addition to actual children.")}},Gy=function(e,t,n,r){if(!(r&&n===void 0)&&!Vy(n))throw new Error(xf(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yx=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gy(e,t,n,r)},Qy=function(e,t){if(U(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},_x=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Hy(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vx(n))throw new Error(xf(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ky(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!cy(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function St(e,t,n){Ky(e,n),Ex(e,r=>ut(r,t)||ut(t,r))}function Ex(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(Cx(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Cx(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();Un&&Te("event: "+n.toString()),Zr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx="repo_interrupt",kx=25;class xx{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ua(),this.transactionQueueTree_=new Qf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bx(e,t,n){if(e.stats_=Tf(e.repoInfo_),e.forceRestClient_||oS())e.server_=new la(e.repoInfo_,(r,i,s,o)=>{Ep(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Cp(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Pt(e.repoInfo_,t,(r,i,s,o)=>{Ep(e,r,i,s,o)},r=>{Cp(e,r)},r=>{Ix(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=fS(e.repoInfo_,()=>new uk(e.stats_,e.server_)),e.infoData_=new ik,e.infoSyncTree_=new _p({startListening:(r,i,s,o)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=Ps(e.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Jf(e,"connected",!1),e.serverSyncTree_=new _p({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);St(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function qy(e){const n=e.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Xf(e){return lx({timestamp:qy(e)})}function Ep(e,t,n,r,i){e.dataUpdateCount++;const s=new Y(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const l=na(n,u=>Ee(u));o=tx(e.serverSyncTree_,s,l,i)}else{const l=Ee(n);o=My(e.serverSyncTree_,s,l,i)}else if(r){const l=na(n,u=>Ee(u));o=Jk(e.serverSyncTree_,s,l)}else{const l=Ee(n);o=Ps(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=qa(e,s)),St(e.eventQueue_,a,o)}function Cp(e,t){Jf(e,"connected",t),t===!1&&Px(e)}function Ix(e,t){$e(t,(n,r)=>{Jf(e,n,r)})}function Jf(e,t,n){const r=new Y("/.info/"+t),i=Ee(n);e.infoData_.updateSnapshot(r,i);const s=Ps(e.infoSyncTree_,r,i);St(e.eventQueue_,r,s)}function Xy(e){return e.nextWriteId_++}function Nx(e,t,n){const r=rx(e.serverSyncTree_,t);return r!=null?Promise.resolve(r):e.server_.get(t).then(i=>{const s=Ee(i).withIndex(t._queryParams.getIndex());nx(e.serverSyncTree_,t,n,!0);let o;if(t._queryParams.loadsAllData())o=Ps(e.serverSyncTree_,t._path,s);else{const a=fs(e.serverSyncTree_,t);o=My(e.serverSyncTree_,t._path,s,a)}return St(e.eventQueue_,t._path,o),Ly(e.serverSyncTree_,t,n,null,!0),s},i=>(Ka(e,"get for query "+he(t)+" failed: "+i),Promise.reject(new Error(i))))}function Tx(e,t,n,r,i){Ka(e,"set",{path:t.toString(),value:n,priority:r});const s=Xf(e),o=Ee(n,r),a=Bf(e.serverSyncTree_,t),l=Uy(o,a,s),u=Xy(e),f=Dy(e.serverSyncTree_,t,l,u,!0);Ky(e.eventQueue_,f),e.server_.put(t.toString(),o.val(!0),(d,g)=>{const v=d==="ok";v||We("set at "+t+" failed: "+d);const y=Ln(e.serverSyncTree_,u,!v);St(e.eventQueue_,t,y),Ox(e,i,d,g)});const c=n_(e,t);qa(e,c),St(e.eventQueue_,c,[])}function Px(e){Ka(e,"onDisconnectEvents");const t=Xf(e),n=ua();sc(e.onDisconnect_,$(),(i,s)=>{const o=fx(i,s,e.serverSyncTree_,t);yy(n,i,o)});let r=[];sc(n,$(),(i,s)=>{r=r.concat(Ps(e.serverSyncTree_,i,s));const o=n_(e,i);qa(e,o)}),e.onDisconnect_=ua(),St(e.eventQueue_,$(),r)}function Rx(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Sx)}function Ka(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Te(n,...t)}function Ox(e,t,n,r){t&&Zr(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,t(o)}})}function Jy(e,t,n){return Bf(e.serverSyncTree_,t,n)||A.EMPTY_NODE}function Zf(e,t=e.transactionQueueTree_){if(t||Xa(e,t),ei(t)){const n=e_(e,t);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ax(e,Os(t),n)}else Wy(t)&&Qa(t,n=>{Zf(e,n)})}function Ax(e,t,n){const r=n.map(u=>u.currentWriteId),i=Jy(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];k(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const c=Oe(t,f.path);s=s.updateChild(c,f.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,u=>{Ka(e,"transaction put response",{path:l.toString(),status:u});let f=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(Ln(e.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Xa(e,Kf(e.transactionQueueTree_,t)),Zf(e,e.transactionQueueTree_),St(e.eventQueue_,t,f);for(let d=0;d<c.length;d++)Zr(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{We("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}qa(e,t)}},o)}function qa(e,t){const n=Zy(e,t),r=Os(n),i=e_(e,n);return Dx(e,i,r),r}function Dx(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=Oe(n,l.path);let f=!1,c;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,c=l.abortReason,i=i.concat(Ln(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=kx)f=!0,c="maxretry",i=i.concat(Ln(e.serverSyncTree_,l.currentWriteId,!0));else{const d=Jy(e,l.path,o);l.currentInputSnapshot=d;const g=t[a].update(d.val());if(g!==void 0){qf("transaction failed: Data returned ",g,l.path);let v=Ee(g);typeof g=="object"&&g!=null&&Ut(g,".priority")||(v=v.updatePriority(d.getPriority()));const E=l.currentWriteId,p=Xf(e),h=Uy(v,d,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=Xy(e),o.splice(o.indexOf(E),1),i=i.concat(Dy(e.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Ln(e.serverSyncTree_,E,!0))}else f=!0,c="nodata",i=i.concat(Ln(e.serverSyncTree_,l.currentWriteId,!0))}St(e.eventQueue_,n,i),i=[],f&&(t[a].status=2,function(d){setTimeout(d,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(c==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(c),!1,null))))}Xa(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)Zr(r[a]);Zf(e,e.transactionQueueTree_)}function Zy(e,t){let n,r=e.transactionQueueTree_;for(n=U(t);n!==null&&ei(r)===void 0;)r=Kf(r,n),t=Q(t),n=U(t);return r}function e_(e,t){const n=[];return t_(e,t,n),n.sort((r,i)=>r.order-i.order),n}function t_(e,t,n){const r=ei(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Qa(t,i=>{t_(e,i,n)})}function Xa(e,t){const n=ei(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,By(t,n.length>0?n:void 0)}Qa(t,r=>{Xa(e,r)})}function n_(e,t){const n=Os(Zy(e,t)),r=Kf(e.transactionQueueTree_,t);return hx(r,i=>{Yl(e,i)}),Yl(e,r),$y(r,i=>{Yl(e,i)}),n}function Yl(e,t){const n=ei(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ln(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?By(t,void 0):n.length=s+1,St(e.eventQueue_,Os(t),i);for(let o=0;o<r.length;o++)Zr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function Mx(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):We(`Invalid query segment '${n}' in query '${e}'`)}return t}const Sp=function(e,t){const n=Fx(e),r=n.namespace;n.domain==="firebase.com"&&Lt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Lt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||XC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Jv(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Y(n.pathString)}},Fx=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let f=e.indexOf("/");f===-1&&(f=e.length);let c=e.indexOf("?");c===-1&&(c=e.length),t=e.substring(0,Math.min(f,c)),f<c&&(i=Lx(e.substring(f,c)));const d=Mx(e.substring(Math.min(e.length,c)));u=t.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const g=t.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=t.indexOf(".");r=t.substring(0,v).toLowerCase(),n=t.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",jx=function(){let e=0;const t=[];return function(n){const r=n===e;e=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=kp.charAt(n%64),n=Math.floor(n/64);k(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=kp.charAt(t[i]);return k(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class Ux{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:ay(this._path)}get ref(){return new Bt(this._repo,this._path)}get _queryIdentifier(){const t=lp(this._queryParams),n=If(t);return n==="{}"?"default":n}get _queryObject(){return lp(this._queryParams)}isEqual(t){if(t=nr(t),!(t instanceof ed))return!1;const n=this._repo===t._repo,r=cy(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+DS(this._path)}}class Bt extends ed{constructor(t,n){super(t,n,new Df,!1)}get parent(){const t=uy(this._path);return t===null?null:new Bt(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class ds{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new Y(t),r=hs(this.ref,t);return new ds(this._node.getChild(n),r,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new ds(i,hs(this.ref,r),ae)))}hasChild(t){const n=new Y(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ja(e,t){return e=nr(e),e._checkNotDeleted("ref"),t!==void 0?hs(e._root,t):e._root}function hs(e,t){return e=nr(e),U(e._path)===null?yx("child","path",t,!1):Gy("child","path",t,!1),new Bt(e._repo,pe(e._path,t))}function Wx(e,t){e=nr(e),Qy("push",e._path),Yy("push",t,e._path,!0);const n=qy(e._repo),r=jx(n),i=hs(e,r),s=hs(e,r);let o;return t!=null?o=$x(s,t).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function $x(e,t){e=nr(e),Qy("set",e._path),Yy("set",t,e._path,!1);const n=new Ba;return Tx(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function td(e){e=nr(e);const t=new Bx(()=>{}),n=new nd(t);return Nx(e._repo,e,n).then(r=>new ds(r,new Bt(e._repo,e._path),e._queryParams.getIndex()))}class nd{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new zx("value",this,new ds(t.snapshotNode,new Bt(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Ux(this,t,n):null}matches(t){return t instanceof nd?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Hk(Bt);Kk(Bt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx="FIREBASE_DATABASE_EMULATOR_HOST",fc={};let Vx=!1;function Yx(e,t,n,r){e.repoInfo_=new Jv(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function Gx(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||Lt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=Sp(s,i),a=o.repoInfo,l,u;typeof process<"u"&&Hh&&(u=Hh[Hx]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Sp(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const f=i&&l?new Rr(Rr.OWNER):new lS(e.name,e.options,t);_x("Invalid Firebase Database URL",o),z(o.path)||Lt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=Kx(a,e,f,new aS(e.name,n));return new qx(c,e)}function Qx(e,t){const n=fc[t];(!n||n[e.key]!==e)&&Lt(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Rx(e),delete n[e.key]}function Kx(e,t,n,r){let i=fc[t.name];i||(i={},fc[t.name]=i);let s=i[e.toURLString()];return s&&Lt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new xx(e,Vx,n,r),i[e.toURLString()]=s,s}class qx{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Qx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Lt("Cannot call "+t+" on a deleted database.")}}function Za(e=DC(),t){const n=PC(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=CE("database");r&&Xx(n,...r)}return n}function Xx(e,t,n,r={}){e=nr(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Lt("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Lt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Rr(Rr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:SE(r.mockUserToken,e.app.options.projectId);s=new Rr(o)}Yx(i,t,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(e){YC(AC),ia(new rs("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return Gx(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Tr(Vh,Yh,e),Tr(Vh,Yh,"esm2017")}Pt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};Pt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Jx();var r_={},Vr={};Object.defineProperty(Vr,"__esModule",{value:!0});Vr.cssValue=Vr.parseLengthAndUnit=void 0;var Zx={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function i_(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return Zx[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}Vr.parseLengthAndUnit=i_;function eb(e){var t=i_(e);return"".concat(t.value).concat(t.unit)}Vr.cssValue=eb;var el={};Object.defineProperty(el,"__esModule",{value:!0});el.createAnimation=void 0;var tb=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return s&&s.insertRule(o,0),r};el.createAnimation=tb;var va=Ct&&Ct.__assign||function(){return va=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},va.apply(this,arguments)},nb=Ct&&Ct.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),rb=Ct&&Ct.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ib=Ct&&Ct.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&nb(t,e,n);return rb(t,e),t},sb=Ct&&Ct.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};Object.defineProperty(r_,"__esModule",{value:!0});var or=ib(x),ro=Vr,ob=el,ab=(0,ob.createAnimation)("ScaleLoader","0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}","scale");function lb(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?"#000000":r,s=e.speedMultiplier,o=s===void 0?1:s,a=e.cssOverride,l=a===void 0?{}:a,u=e.height,f=u===void 0?35:u,c=e.width,d=c===void 0?4:c,g=e.radius,v=g===void 0?2:g,y=e.margin,E=y===void 0?2:y,p=sb(e,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),h=va({display:"inherit"},l),m=function(_){return{backgroundColor:i,width:(0,ro.cssValue)(d),height:(0,ro.cssValue)(f),margin:(0,ro.cssValue)(E),borderRadius:(0,ro.cssValue)(v),display:"inline-block",animation:"".concat(ab," ").concat(1/o,"s ").concat(_*.1,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return n?or.createElement("span",va({style:h},p),or.createElement("span",{style:m(1)}),or.createElement("span",{style:m(2)}),or.createElement("span",{style:m(3)}),or.createElement("span",{style:m(4)}),or.createElement("span",{style:m(5)})):null}var ub=r_.default=lb;function Jt(){return w.jsx(w.Fragment,{children:w.jsx(ub,{color:"rgba(51, 75, 114, 1)",height:50,width:10})})}function xp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xp(Object(n),!0).forEach(function(r){ge(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ya(e){"@babel/helpers - typeof";return ya=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ya(e)}function cb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fb(e,t,n){return t&&bp(e.prototype,t),n&&bp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rd(e,t){return hb(e)||mb(e,t)||s_(e,t)||vb()}function As(e){return db(e)||pb(e)||s_(e)||gb()}function db(e){if(Array.isArray(e))return dc(e)}function hb(e){if(Array.isArray(e))return e}function pb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function s_(e,t){if(e){if(typeof e=="string")return dc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dc(e,t)}}function dc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ip=function(){},id={},o_={},a_=null,l_={mark:Ip,measure:Ip};try{typeof window<"u"&&(id=window),typeof document<"u"&&(o_=document),typeof MutationObserver<"u"&&(a_=MutationObserver),typeof performance<"u"&&(l_=performance)}catch{}var yb=id.navigator||{},Np=yb.userAgent,Tp=Np===void 0?"":Np,_n=id,ee=o_,Pp=a_,io=l_;_n.document;var Wt=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",u_=~Tp.indexOf("MSIE")||~Tp.indexOf("Trident/"),so,oo,ao,lo,uo,Mt="___FONT_AWESOME___",hc=16,c_="fa",f_="svg-inline--fa",qn="data-fa-i2svg",pc="data-fa-pseudo-element",_b="data-fa-pseudo-element-pending",sd="data-prefix",od="data-icon",Rp="fontawesome-i2svg",wb="async",Eb=["HTML","HEAD","STYLE","SCRIPT"],d_=function(){try{return!0}catch{return!1}}(),J="classic",oe="sharp",ad=[J,oe];function Ds(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[J]}})}var ps=Ds((so={},ge(so,J,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ge(so,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),so)),ms=Ds((oo={},ge(oo,J,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ge(oo,oe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),oo)),gs=Ds((ao={},ge(ao,J,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ge(ao,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ao)),Cb=Ds((lo={},ge(lo,J,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ge(lo,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),lo)),Sb=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,h_="fa-layers-text",kb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,xb=Ds((uo={},ge(uo,J,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ge(uo,oe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),uo)),p_=[1,2,3,4,5,6,7,8,9,10],bb=p_.concat([11,12,13,14,15,16,17,18,19,20]),Ib=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vs=new Set;Object.keys(ms[J]).map(vs.add.bind(vs));Object.keys(ms[oe]).map(vs.add.bind(vs));var Nb=[].concat(ad,As(vs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Mn.GROUP,Mn.SWAP_OPACITY,Mn.PRIMARY,Mn.SECONDARY]).concat(p_.map(function(e){return"".concat(e,"x")})).concat(bb.map(function(e){return"w-".concat(e)})),Li=_n.FontAwesomeConfig||{};function Tb(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Pb(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var Rb=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rb.forEach(function(e){var t=rd(e,2),n=t[0],r=t[1],i=Pb(Tb(n));i!=null&&(Li[r]=i)})}var m_={styleDefault:"solid",familyDefault:"classic",cssPrefix:c_,replacementClass:f_,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Li.familyPrefix&&(Li.cssPrefix=Li.familyPrefix);var Yr=b(b({},m_),Li);Yr.autoReplaceSvg||(Yr.observeMutations=!1);var R={};Object.keys(m_).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(n){Yr[e]=n,Mi.forEach(function(r){return r(R)})},get:function(){return Yr[e]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(t){Yr.cssPrefix=t,Mi.forEach(function(n){return n(R)})},get:function(){return Yr.cssPrefix}});_n.FontAwesomeConfig=R;var Mi=[];function Ob(e){return Mi.push(e),function(){Mi.splice(Mi.indexOf(e),1)}}var Ht=hc,_t={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ab(e){if(!(!e||!Wt)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ee.head.insertBefore(t,r),e}}var Db="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ys(){for(var e=12,t="";e-- >0;)t+=Db[Math.random()*62|0];return t}function ti(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ld(e){return e.classList?ti(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function g_(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Lb(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(g_(e[n]),'" ')},"").trim()}function tl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ud(e){return e.size!==_t.size||e.x!==_t.x||e.y!==_t.y||e.rotate!==_t.rotate||e.flipX||e.flipY}function Mb(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Fb(e){var t=e.transform,n=e.width,r=n===void 0?hc:n,i=e.height,s=i===void 0?hc:i,o=e.startCentered,a=o===void 0?!1:o,l="";return a&&u_?l+="translate(".concat(t.x/Ht-r/2,"em, ").concat(t.y/Ht-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Ht,"em), calc(-50% + ").concat(t.y/Ht,"em)) "):l+="translate(".concat(t.x/Ht,"em, ").concat(t.y/Ht,"em) "),l+="scale(".concat(t.size/Ht*(t.flipX?-1:1),", ").concat(t.size/Ht*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var jb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function v_(){var e=c_,t=f_,n=R.cssPrefix,r=R.replacementClass,i=jb;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Op=!1;function Gl(){R.autoAddCss&&!Op&&(Ab(v_()),Op=!0)}var zb={mixout:function(){return{dom:{css:v_,insertCss:Gl}}},hooks:function(){return{beforeDOMElementCreation:function(){Gl()},beforeI2svg:function(){Gl()}}}},Ft=_n||{};Ft[Mt]||(Ft[Mt]={});Ft[Mt].styles||(Ft[Mt].styles={});Ft[Mt].hooks||(Ft[Mt].hooks={});Ft[Mt].shims||(Ft[Mt].shims=[]);var ft=Ft[Mt],y_=[],Ub=function e(){ee.removeEventListener("DOMContentLoaded",e),_a=1,y_.map(function(t){return t()})},_a=!1;Wt&&(_a=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),_a||ee.addEventListener("DOMContentLoaded",Ub));function Bb(e){Wt&&(_a?setTimeout(e,0):y_.push(e))}function Ls(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?g_(e):"<".concat(t," ").concat(Lb(r),">").concat(s.map(Ls).join(""),"</").concat(t,">")}function Ap(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Wb=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},Ql=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=i!==void 0?Wb(n,i):n,l,u,f;for(r===void 0?(l=1,f=t[s[0]]):(l=0,f=r);l<o;l++)u=s[l],f=a(f,t[u],u,t);return f};function $b(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function mc(e){var t=$b(e);return t.length===1?t[0].toString(16):null}function Hb(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Dp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function gc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Dp(t);typeof ft.hooks.addPack=="function"&&!i?ft.hooks.addPack(e,Dp(t)):ft.styles[e]=b(b({},ft.styles[e]||{}),s),e==="fas"&&gc("fa",t)}var co,fo,ho,wr=ft.styles,Vb=ft.shims,Yb=(co={},ge(co,J,Object.values(gs[J])),ge(co,oe,Object.values(gs[oe])),co),cd=null,__={},w_={},E_={},C_={},S_={},Gb=(fo={},ge(fo,J,Object.keys(ps[J])),ge(fo,oe,Object.keys(ps[oe])),fo);function Qb(e){return~Nb.indexOf(e)}function Kb(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Qb(i)?i:null}var k_=function(){var t=function(s){return Ql(wr,function(o,a,l){return o[l]=Ql(a,s,{}),o},{})};__=t(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),w_=t(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),S_=t(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in wr||R.autoFetchSvg,r=Ql(Vb,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});E_=r.names,C_=r.unicodes,cd=nl(R.styleDefault,{family:R.familyDefault})};Ob(function(e){cd=nl(e.styleDefault,{family:R.familyDefault})});k_();function fd(e,t){return(__[e]||{})[t]}function qb(e,t){return(w_[e]||{})[t]}function Fn(e,t){return(S_[e]||{})[t]}function x_(e){return E_[e]||{prefix:null,iconName:null}}function Xb(e){var t=C_[e],n=fd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wn(){return cd}var dd=function(){return{prefix:null,iconName:null,rest:[]}};function nl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?J:n,i=ps[r][e],s=ms[r][e]||ms[r][i],o=e in ft.styles?e:null;return s||o||null}var Lp=(ho={},ge(ho,J,Object.keys(gs[J])),ge(ho,oe,Object.keys(gs[oe])),ho);function rl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},ge(t,J,"".concat(R.cssPrefix,"-").concat(J)),ge(t,oe,"".concat(R.cssPrefix,"-").concat(oe)),t),o=null,a=J;(e.includes(s[J])||e.some(function(u){return Lp[J].includes(u)}))&&(a=J),(e.includes(s[oe])||e.some(function(u){return Lp[oe].includes(u)}))&&(a=oe);var l=e.reduce(function(u,f){var c=Kb(R.cssPrefix,f);if(wr[f]?(f=Yb[a].includes(f)?Cb[a][f]:f,o=f,u.prefix=f):Gb[a].indexOf(f)>-1?(o=f,u.prefix=nl(f,{family:a})):c?u.iconName=c:f!==R.replacementClass&&f!==s[J]&&f!==s[oe]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var d=o==="fa"?x_(u.iconName):{},g=Fn(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||g||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!wr.far&&wr.fas&&!R.autoFetchSvg&&(u.prefix="fas")}return u},dd());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===oe&&(wr.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=Fn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=wn()||"fas"),l}var Jb=function(){function e(){cb(this,e),this.definitions={}}return fb(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=b(b({},n.definitions[a]||{}),o[a]),gc(a,o[a]);var l=gs[J][a];l&&gc(l,o[a]),k_()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,f=u[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(c){typeof c=="string"&&(n[a][c]=u)}),n[a][l]=u}),n}}]),e}(),Mp=[],Er={},Ar={},Zb=Object.keys(Ar);function eI(e,t){var n=t.mixoutsTo;return Mp=e,Er={},Object.keys(Ar).forEach(function(r){Zb.indexOf(r)===-1&&delete Ar[r]}),Mp.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ya(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Er[o]||(Er[o]=[]),Er[o].push(s[o])})}r.provides&&r.provides(Ar)}),n}function vc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Er[e]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Xn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Er[e]||[];i.forEach(function(s){s.apply(null,n)})}function jt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ar[e]?Ar[e].apply(null,t):void 0}function yc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||wn();if(t)return t=Fn(n,t)||t,Ap(b_.definitions,n,t)||Ap(ft.styles,n,t)}var b_=new Jb,tI=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,Xn("noAuto")},nI={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wt?(Xn("beforeI2svg",t),jt("pseudoElements2svg",t),jt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Bb(function(){iI({autoReplaceSvgRoot:n}),Xn("watch",t)})}},rI={icon:function(t){if(t===null)return null;if(ya(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Fn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=nl(t[0]);return{prefix:r,iconName:Fn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(R.cssPrefix,"-"))>-1||t.match(Sb))){var i=rl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||wn(),iconName:Fn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=wn();return{prefix:s,iconName:Fn(s,t)||t}}}},qe={noAuto:tI,config:R,dom:nI,parse:rI,library:b_,findIconDefinition:yc,toHtml:Ls},iI=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(ft.styles).length>0||R.autoFetchSvg)&&Wt&&R.autoReplaceSvg&&qe.dom.i2svg({node:r})};function il(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ls(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Wt){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function sI(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(ud(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=tl(b(b({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function oI(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(R.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},i),{},{id:o}),children:r}]}]}function hd(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,l=e.title,u=e.maskId,f=e.titleId,c=e.extra,d=e.watchable,g=d===void 0?!1:d,v=r.found?r:n,y=v.width,E=v.height,p=i==="fak",h=[R.replacementClass,s?"".concat(R.cssPrefix,"-").concat(s):""].filter(function(H){return c.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(c.classes).join(" "),m={children:[],attributes:b(b({},c.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(E)})},_=p&&!~c.classes.indexOf("fa-fw")?{width:"".concat(y/E*16*.0625,"em")}:{};g&&(m.attributes[qn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(f||ys())},children:[l]}),delete m.attributes.title);var S=b(b({},m),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:b(b({},_),c.styles)}),N=r.found&&n.found?jt("generateAbstractMask",S)||{children:[],attributes:{}}:jt("generateAbstractIcon",S)||{children:[],attributes:{}},T=N.children,O=N.attributes;return S.children=T,S.attributes=O,a?oI(S):sI(S)}function Fp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,l=a===void 0?!1:a,u=b(b(b({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[qn]="");var f=b({},o.styles);ud(i)&&(f.transform=Fb({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var c=tl(f);c.length>0&&(u.style=c);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function aI(e){var t=e.content,n=e.title,r=e.extra,i=b(b(b({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=tl(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Kl=ft.styles;function _c(e){var t=e[0],n=e[1],r=e.slice(4),i=rd(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(Mn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Mn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Mn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var lI={found:!1,width:512,height:512};function uI(e,t){!d_&&!R.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function wc(e,t){var n=t;return t==="fa"&&R.styleDefault!==null&&(t=wn()),new Promise(function(r,i){if(jt("missingIconAbstract"),n==="fa"){var s=x_(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Kl[t]&&Kl[t][e]){var o=Kl[t][e];return r(_c(o))}uI(e,t),r(b(b({},lI),{},{icon:R.showMissingIcons&&e?jt("missingIconAbstract")||{}:{}}))})}var jp=function(){},Ec=R.measurePerformance&&io&&io.mark&&io.measure?io:{mark:jp,measure:jp},Ei='FA "6.5.1"',cI=function(t){return Ec.mark("".concat(Ei," ").concat(t," begins")),function(){return I_(t)}},I_=function(t){Ec.mark("".concat(Ei," ").concat(t," ends")),Ec.measure("".concat(Ei," ").concat(t),"".concat(Ei," ").concat(t," begins"),"".concat(Ei," ").concat(t," ends"))},pd={begin:cI,end:I_},Io=function(){};function zp(e){var t=e.getAttribute?e.getAttribute(qn):null;return typeof t=="string"}function fI(e){var t=e.getAttribute?e.getAttribute(sd):null,n=e.getAttribute?e.getAttribute(od):null;return t&&n}function dI(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function hI(){if(R.autoReplaceSvg===!0)return No.replace;var e=No[R.autoReplaceSvg];return e||No.replace}function pI(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function mI(e){return ee.createElement(e)}function N_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?pI:mI:n;if(typeof e=="string")return ee.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var s=e.children||[];return s.forEach(function(o){i.appendChild(N_(o,{ceFn:r}))}),i}function gI(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var No={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(N_(i),n)}),n.getAttribute(qn)===null&&R.keepOriginalSource){var r=ee.createComment(gI(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ld(n).indexOf(R.replacementClass))return No.replace(t);var i=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===R.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Ls(a)}).join(`
`);n.setAttribute(qn,""),n.innerHTML=o}};function Up(e){e()}function T_(e,t){var n=typeof t=="function"?t:Io;if(e.length===0)n();else{var r=Up;R.mutateApproach===wb&&(r=_n.requestAnimationFrame||Up),r(function(){var i=hI(),s=pd.begin("mutate");e.map(i),s(),n()})}}var md=!1;function P_(){md=!0}function Cc(){md=!1}var wa=null;function Bp(e){if(Pp&&R.observeMutations){var t=e.treeCallback,n=t===void 0?Io:t,r=e.nodeCallback,i=r===void 0?Io:r,s=e.pseudoElementsCallback,o=s===void 0?Io:s,a=e.observeMutationsRoot,l=a===void 0?ee:a;wa=new Pp(function(u){if(!md){var f=wn();ti(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!zp(c.addedNodes[0])&&(R.searchPseudoElements&&o(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&R.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&zp(c.target)&&~Ib.indexOf(c.attributeName))if(c.attributeName==="class"&&fI(c.target)){var d=rl(ld(c.target)),g=d.prefix,v=d.iconName;c.target.setAttribute(sd,g||f),v&&c.target.setAttribute(od,v)}else dI(c.target)&&i(c.target)})}}),Wt&&wa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vI(){wa&&wa.disconnect()}function yI(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function _I(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=rl(ld(e));return i.prefix||(i.prefix=wn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=qb(i.prefix,e.innerText)||fd(i.prefix,mc(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function wI(e){var t=ti(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return R.autoA11y&&(n?t["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||ys()):(t["aria-hidden"]="true",t.focusable="false")),t}function EI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_t,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=_I(e),r=n.iconName,i=n.prefix,s=n.rest,o=wI(e),a=vc("parseNodeAttributes",{},e),l=t.styleParser?yI(e):[];return b({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:_t,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var CI=ft.styles;function R_(e){var t=R.autoReplaceSvg==="nest"?Wp(e,{styleParser:!1}):Wp(e);return~t.extra.classes.indexOf(h_)?jt("generateLayersText",e,t):jt("generateSvgReplacementMutation",e,t)}var En=new Set;ad.map(function(e){En.add("fa-".concat(e))});Object.keys(ps[J]).map(En.add.bind(En));Object.keys(ps[oe]).map(En.add.bind(En));En=As(En);function $p(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wt)return Promise.resolve();var n=ee.documentElement.classList,r=function(c){return n.add("".concat(Rp,"-").concat(c))},i=function(c){return n.remove("".concat(Rp,"-").concat(c))},s=R.autoFetchSvg?En:ad.map(function(f){return"fa-".concat(f)}).concat(Object.keys(CI));s.includes("fa")||s.push("fa");var o=[".".concat(h_,":not([").concat(qn,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(qn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ti(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=pd.begin("onTree"),u=a.reduce(function(f,c){try{var d=R_(c);d&&f.push(d)}catch(g){d_||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,c){Promise.all(u).then(function(d){T_(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(d){l(),c(d)})})}function SI(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;R_(e).then(function(n){n&&T_([n],t)})}function kI(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:yc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:yc(i||{})),e(r,b(b({},n),{},{mask:i}))}}var xI=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?_t:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,f=u===void 0?null:u,c=n.title,d=c===void 0?null:c,g=n.titleId,v=g===void 0?null:g,y=n.classes,E=y===void 0?[]:y,p=n.attributes,h=p===void 0?{}:p,m=n.styles,_=m===void 0?{}:m;if(t){var S=t.prefix,N=t.iconName,T=t.icon;return il(b({type:"icon"},t),function(){return Xn("beforeDOMElementCreation",{iconDefinition:t,params:n}),R.autoA11y&&(d?h["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(v||ys()):(h["aria-hidden"]="true",h.focusable="false")),hd({icons:{main:_c(T),mask:l?_c(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:N,transform:b(b({},_t),i),symbol:o,title:d,maskId:f,titleId:v,extra:{attributes:h,styles:_,classes:E}})})}},bI={mixout:function(){return{icon:kI(xI)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$p,n.nodeCallback=SI,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ee:r,s=n.callback,o=s===void 0?function(){}:s;return $p(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,f=r.mask,c=r.maskId,d=r.extra;return new Promise(function(g,v){Promise.all([wc(i,a),f.iconName?wc(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var E=rd(y,2),p=E[0],h=E[1];g([n,hd({icons:{main:p,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:c,title:s,titleId:o,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=tl(a);l.length>0&&(i.style=l);var u;return ud(o)&&(u=jt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},II={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return il({type:"layer"},function(){Xn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(As(s)).join(" ")},children:o}]})}}}},NI={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,f=r.styles,c=f===void 0?{}:f;return il({type:"counter",content:n},function(){return Xn("beforeDOMElementCreation",{content:n,params:r}),aI({content:n.toString(),title:s,extra:{attributes:u,styles:c,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(As(a))}})})}}}},TI={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?_t:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,f=r.attributes,c=f===void 0?{}:f,d=r.styles,g=d===void 0?{}:d;return il({type:"text",content:n},function(){return Xn("beforeDOMElementCreation",{content:n,params:r}),Fp({content:n,transform:b(b({},_t),s),title:a,extra:{attributes:c,styles:g,classes:["".concat(R.cssPrefix,"-layers-text")].concat(As(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(u_){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();a=f.width/u,l=f.height/u}return R.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Fp({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},PI=new RegExp('"',"ug"),Hp=[1105920,1112319];function RI(e){var t=e.replace(PI,""),n=Hb(t,0),r=n>=Hp[0]&&n<=Hp[1],i=t.length===2?t[0]===t[1]:!1;return{value:mc(i?t[0]:t),isSecondary:r||i}}function Vp(e,t){var n="".concat(_b).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=ti(e.children),o=s.filter(function(T){return T.getAttribute(pc)===t})[0],a=_n.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(kb),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var c=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?oe:J,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ms[d][l[2].toLowerCase()]:xb[d][u],v=RI(c),y=v.value,E=v.isSecondary,p=l[0].startsWith("FontAwesome"),h=fd(g,y),m=h;if(p){var _=Xb(y);_.iconName&&_.prefix&&(h=_.iconName,g=_.prefix)}if(h&&!E&&(!o||o.getAttribute(sd)!==g||o.getAttribute(od)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var S=EI(),N=S.extra;N.attributes[pc]=t,wc(h,g).then(function(T){var O=hd(b(b({},S),{},{icons:{main:T,mask:dd()},prefix:g,iconName:m,extra:N,watchable:!0})),H=ee.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(H,e.firstChild):e.appendChild(H),H.outerHTML=O.map(function(F){return Ls(F)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function OI(e){return Promise.all([Vp(e,"::before"),Vp(e,"::after")])}function AI(e){return e.parentNode!==document.head&&!~Eb.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(pc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Yp(e){if(Wt)return new Promise(function(t,n){var r=ti(e.querySelectorAll("*")).filter(AI).map(OI),i=pd.begin("searchPseudoElements");P_(),Promise.all(r).then(function(){i(),Cc(),t()}).catch(function(){i(),Cc(),n()})})}var DI={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Yp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ee:r;R.searchPseudoElements&&Yp(i)}}},Gp=!1,LI={mixout:function(){return{dom:{unwatch:function(){P_(),Gp=!0}}}},hooks:function(){return{bootstrap:function(){Bp(vc("mutationObserverCallbacks",{}))},noAuto:function(){vI()},watch:function(n){var r=n.observeMutationsRoot;Gp?Cc():Bp(vc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Qp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},MI={mixout:function(){return{parse:{transform:function(n){return Qp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Qp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(f)},d={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:c,path:d};return{tag:"g",attributes:b({},g.outer),children:[{tag:"g",attributes:b({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:b(b({},r.icon.attributes),g.path)}]}]}}}},ql={x:0,y:0,width:"100%",height:"100%"};function Kp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function FI(e){return e.tag==="g"?e.children:[e]}var jI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?rl(i.split(" ").map(function(o){return o.trim()})):dd();return s.prefix||(s.prefix=wn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,f=s.icon,c=o.width,d=o.icon,g=Mb({transform:l,containerWidth:c,iconWidth:u}),v={tag:"rect",attributes:b(b({},ql),{},{fill:"white"})},y=f.children?{children:f.children.map(Kp)}:{},E={tag:"g",attributes:b({},g.inner),children:[Kp(b({tag:f.tag,attributes:b(b({},f.attributes),g.path)},y))]},p={tag:"g",attributes:b({},g.outer),children:[E]},h="mask-".concat(a||ys()),m="clip-".concat(a||ys()),_={tag:"mask",attributes:b(b({},ql),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:FI(d)},_]};return r.push(S,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},ql)}),{children:r,attributes:i}}}},zI={provides:function(t){var n=!1;_n.matchMedia&&(n=_n.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:b(b({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=b(b({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:b(b({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:b(b({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(b({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:b(b({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:b(b({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:b(b({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(b({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},UI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},BI=[zb,bI,II,NI,TI,DI,LI,MI,jI,zI,UI];eI(BI,{mixoutsTo:qe});qe.noAuto;qe.config;qe.library;qe.dom;var Sc=qe.parse;qe.findIconDefinition;qe.toHtml;var WI=qe.icon;qe.layer;qe.text;qe.counter;var O_={exports:{}},$I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",HI=$I,VI=HI;function A_(){}function D_(){}D_.resetWarningCache=A_;var YI=function(){function e(r,i,s,o,a,l){if(l!==VI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:D_,resetWarningCache:A_};return n.PropTypes=n,n};O_.exports=YI();var GI=O_.exports;const j=Jp(GI);function qp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Zt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qp(Object(n),!0).forEach(function(r){Cr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ea(e){"@babel/helpers - typeof";return Ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ea(e)}function Cr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QI(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function KI(e,t){if(e==null)return{};var n=QI(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function kc(e){return qI(e)||XI(e)||JI(e)||ZI()}function qI(e){if(Array.isArray(e))return xc(e)}function XI(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function JI(e,t){if(e){if(typeof e=="string")return xc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xc(e,t)}}function xc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ZI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eN(e){var t,n=e.beat,r=e.fade,i=e.beatFade,s=e.bounce,o=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,f=e.spinReverse,c=e.pulse,d=e.fixedWidth,g=e.inverse,v=e.border,y=e.listItem,E=e.flip,p=e.size,h=e.rotation,m=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":c,"fa-fw":d,"fa-inverse":g,"fa-border":v,"fa-li":y,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Cr(t,"fa-".concat(p),typeof p<"u"&&p!==null),Cr(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Cr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Cr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(S){return _[S]?S:null}).filter(function(S){return S})}function tN(e){return e=e-0,e===e}function L_(e){return tN(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var nN=["style"];function rN(e){return e.charAt(0).toUpperCase()+e.slice(1)}function iN(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=L_(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?t[rN(i)]=s:t[i]=s,t},{})}function M_(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return M_(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var f=t.attributes[u];switch(u){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=iN(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=f:l.attrs[L_(u)]=f}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=KI(n,nN);return i.attrs.style=Zt(Zt({},i.attrs.style),o),e.apply(void 0,[t.tag,Zt(Zt({},i.attrs),a)].concat(kc(r)))}var F_=!1;try{F_=!0}catch{}function sN(){if(!F_&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Xp(e){if(e&&Ea(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Sc.icon)return Sc.icon(e);if(e===null)return null;if(e&&Ea(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Xl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Cr({},e,t):{}}var ni=Sa.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,s=e.className,o=e.title,a=e.titleId,l=e.maskId,u=Xp(n),f=Xl("classes",[].concat(kc(eN(e)),kc(s.split(" ")))),c=Xl("transform",typeof e.transform=="string"?Sc.transform(e.transform):e.transform),d=Xl("mask",Xp(r)),g=WI(u,Zt(Zt(Zt(Zt({},f),c),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return sN("Could not find icon",u),null;var v=g.abstract,y={ref:t};return Object.keys(e).forEach(function(E){ni.defaultProps.hasOwnProperty(E)||(y[E]=e[E])}),oN(v[0],y)});ni.displayName="FontAwesomeIcon";ni.propTypes={beat:j.bool,border:j.bool,beatFade:j.bool,bounce:j.bool,className:j.string,fade:j.bool,flash:j.bool,mask:j.oneOfType([j.object,j.array,j.string]),maskId:j.string,fixedWidth:j.bool,inverse:j.bool,flip:j.oneOf([!0,!1,"horizontal","vertical","both"]),icon:j.oneOfType([j.object,j.array,j.string]),listItem:j.bool,pull:j.oneOf(["right","left"]),pulse:j.bool,rotation:j.oneOf([0,90,180,270]),shake:j.bool,size:j.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:j.bool,spinPulse:j.bool,spinReverse:j.bool,symbol:j.oneOfType([j.bool,j.string]),title:j.string,titleId:j.string,transform:j.oneOfType([j.string,j.object]),swapOpacity:j.bool};ni.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var oN=M_.bind(null,Sa.createElement),j_={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]};const aN={apiKey:"AIzaSyCvgpngfod6RpetJJMjVWkv8c26Xx4BuBQ",authDomain:"ebookplatform-cd7cc.firebaseapp.com",projectId:"ebookplatform-cd7cc",storageBucket:"ebookplatform-cd7cc.appspot.com",messagingSenderId:"896905892543",appId:"1:896905892543:web:b9cdd2f3ed000f5fb32c0a"},lN=bs(aN),uN=Za(lN);function cN(){const[e,t]=x.useState(""),[n,r]=x.useState(!1);x.useEffect(()=>{async function s(o){try{r(!0),console.log(".....");const a=Ja(uN,o);t(await td(a).then(l=>l.val()))}catch(a){console.log(a)}finally{r(!1)}}s("books")},[]),console.log(e,"list");function i(s){return Object.entries(s).map(l=>({id:l[0],...l[1]}))}return w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"position-relative",children:[w.jsx("div",{className:"",children:w.jsx("img",{className:"img-fluid w-100",src:"https://miro.medium.com/v2/resize:fit:1200/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg"})}),w.jsxs("div",{className:"position-absolute top-0 left-0 w-100 h-100 bg-main-50 d-flex flex-column justify-content-center align-items-center gap-4",children:[w.jsx("h2",{className:"fw-bold display-2 text-light",children:"Welcome to Clever platform"}),w.jsx("p",{className:"fw-bold h4 text-light text-center w-75",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis libero, eum, distinctio, culpa quam sapiente architecto aliquam ullam fugiat obcaecati autem ad! Magnam nostrum quas corrupti incidunt illo mollitia aliquid!"})]})]}),w.jsx("main",{className:"container",children:w.jsx("section",{className:"d-flex justify-content-around flex-wrap my-5 ",id:"booksSection",children:n?w.jsxs("div",{className:"d-flex justify-content-between w-100",children:[w.jsx("div",{children:w.jsx(Jt,{})}),w.jsx("div",{children:w.jsx(Jt,{})}),w.jsx("div",{children:w.jsx(Jt,{})}),w.jsx("div",{children:w.jsx(Jt,{})})]}):i(e).map(s=>w.jsxs("div",{className:"card position-relative my-3",style:{width:"23%"},children:[w.jsx("img",{src:s.image,className:"card-img-top object-fit-cover zoom",height:"300",alt:s.title}),w.jsxs("div",{className:"card-body",children:[w.jsxs("h5",{className:"card-title",children:["$",s.title]}),w.jsx("h6",{className:"card-subtitle mb-2 text-muted",children:s.author}),w.jsxs("p",{className:"card-text",children:[s.desc.slice(0,80)," ..."]})]}),w.jsx("div",{className:" h2 position-absolute top-0 end-0",role:"button",children:w.jsx(ni,{className:s.favorite?"text-danger":"",icon:j_})})]},s.id))})})]})}const fN={apiKey:"AIzaSyCvgpngfod6RpetJJMjVWkv8c26Xx4BuBQ",authDomain:"ebookplatform-cd7cc.firebaseapp.com",projectId:"ebookplatform-cd7cc",storageBucket:"ebookplatform-cd7cc.appspot.com",messagingSenderId:"896905892543",appId:"1:896905892543:web:b9cdd2f3ed000f5fb32c0a"},dN=bs(fN),hN=Za(dN);function pN(){function e(p,h){return Wx(Ja(hN,p),h).key}const[t,n]=x.useState(""),[r,i]=x.useState(""),[s,o]=x.useState(""),[a,l]=x.useState(""),[u,f]=x.useState(""),[c,d]=x.useState(""),[g,v]=x.useState([]);function y(){n(""),i(""),o(""),l(!1),f(""),console.log("cleared")}async function E(p){try{let m=await(await fetch(`https://www.googleapis.com/books/v1/volumes/?q={${p}}`)).json();return console.log(m.items),v(m.items)}catch(h){console.log(h)}}return w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"position-relative",children:[w.jsx("img",{className:"img-fluid w-100",src:"https://www.eui.eu/Content-Types-Assets/Web-Unit/Student-in-law-library-section.x7622d211.jpg?w=1920&h=1080"}),w.jsx("div",{className:"position-absolute top-0 left-0 w-100 h-100 bg-main-50 d-flex flex-column justify-content-center align-items-center gap-4",children:w.jsx("h2",{className:"fw-bold display-2 text-light",children:"Create your book for platform"})}),w.jsxs("div",{className:"d-flex flex-column gap-2 position-absolute top-50 start-0 w-100 mt-5",children:[w.jsx("label",{htmlFor:"bookInp",className:"form-label text-white fs-2",children:"Search book"}),w.jsx("input",{style:{width:"80%"},className:"form-control mx-auto",id:"bookInp",onChange:p=>{d(p.target.value)}}),w.jsx("ul",{className:"list-group gap-1",style:{overflowY:"scroll",height:"120px"},children:g.map(p=>w.jsxs("li",{style:{width:"78%"},className:"list-group-item  mx-auto",role:"button",onMouseEnter:h=>{h.target.classList.add("active")},onMouseLeave:h=>{h.target.classList.remove("active")},onClick:()=>{i(p.volumeInfo.authors),n(p.volumeInfo.title),o(p.volumeInfo.imageLinks.thumbnail),f(p.volumeInfo.description)},children:[p.volumeInfo.authors," - ",p.volumeInfo.title]},p.id))}),w.jsx("button",{className:"btn btn-info w-25 mx-auto fs-4",onClick:()=>E(c),children:"Search"})]}),w.jsx("div",{className:"d-flex flex-column gap-1 position-absolute top-50 start-50"})]}),w.jsx("main",{className:"container",children:w.jsxs("form",{className:"my-5",children:[w.jsx("div",{className:"alert alert-danger bg-main-50 text-light d-none",role:"alert",children:"A simple primary alert—check it out!"}),w.jsx("div",{className:"alert alert-danger d-none",role:"alert",children:"A simple primary alert—check it out!"}),w.jsxs("div",{className:"mb-3",children:[w.jsx("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Title"}),w.jsx("input",{value:t,className:"form-control",id:"bookTitle",onChange:p=>n(p.target.value)})]}),w.jsxs("div",{className:"mb-3",children:[w.jsx("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Author"}),w.jsx("input",{value:r,className:"form-control",id:"bookAuthor",onChange:p=>i(p.target.value)})]}),w.jsxs("div",{className:"mb-3",children:[w.jsx("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Image url"}),w.jsx("input",{value:s,className:"form-control",id:"bookUrl",onChange:p=>o(p.target.value)})]}),w.jsxs("div",{className:"form-check mb-3 d-flex gap-3 align-items-center",children:[w.jsx("input",{className:"form-check-input",type:"checkbox",id:"isFavorite",onChange:p=>l(p.target.checked)}),w.jsx("label",{className:"form-check-label",htmlFor:"isFavorite",children:"is Favorite book?"})]}),w.jsxs("div",{className:"mb-3",children:[w.jsx("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Description"}),w.jsx("textarea",{value:u,className:"form-control",id:"bookDesc",rows:"3",onChange:p=>f(p.target.value)})]}),w.jsx("button",{className:"btn bg-main btn-lg w-100 text-light mt-4",id:"bookCrtBtn",onClick:p=>{p.preventDefault(),console.log("cliked",t),e("books",{title:t,author:r,image:s,favorite:a,desc:u}),y()},children:"Create"})]})})]})}const mN={apiKey:"AIzaSyCvgpngfod6RpetJJMjVWkv8c26Xx4BuBQ",authDomain:"ebookplatform-cd7cc.firebaseapp.com",projectId:"ebookplatform-cd7cc",storageBucket:"ebookplatform-cd7cc.appspot.com",messagingSenderId:"896905892543",appId:"1:896905892543:web:b9cdd2f3ed000f5fb32c0a"},gN=bs(mN),vN=Za(gN);function yN(){const[e,t]=x.useState(""),[n,r]=x.useState(!1);x.useEffect(()=>{async function s(o){try{r(!0);const a=Ja(vN,o);t(await td(a).then(l=>l.val()))}catch(a){console.log(a)}finally{r(!1)}}s("books")},[]),console.log(e,"list");function i(s){return Object.entries(s).map(l=>({id:l[0],...l[1]}))}return w.jsxs(w.Fragment,{children:[w.jsxs("div",{className:"position-relative",children:[w.jsx("img",{className:"img-fluid w-100",src:"https://cdn.outsideonline.com/wp-content/uploads/2021/12/best-books-2021_h.jpeg?crop=16:9&width=960&enable=upscale&quality=100"}),w.jsx("div",{className:"position-absolute top-0 left-0 w-100 h-100 bg-main-50 d-flex flex-column justify-content-center align-items-center gap-4",children:w.jsx("h2",{className:"fw-bold display-2 text-light",children:"Your favorite boooks"})})]}),w.jsx("main",{className:"container",children:w.jsx("section",{className:"d-flex justify-content-around gap-4 flex-wrap my-5",id:"booksSection",children:n?w.jsxs("div",{className:"d-flex justify-content-between w-100",children:[w.jsx("div",{children:w.jsx(Jt,{})}),w.jsx("div",{children:w.jsx(Jt,{})}),w.jsx("div",{children:w.jsx(Jt,{})}),w.jsx("div",{children:w.jsx(Jt,{})})]}):i(e).filter(s=>s.favorite==!0).map((s,o)=>w.jsxs("div",{className:"card position-relative  my-3",style:{width:"23%"},children:[w.jsx("img",{src:s.image,className:"card-img-top object-fit-cover zoom",height:"300",alt:s.title}),w.jsxs("div",{className:"card-body",children:[w.jsxs("h5",{className:"card-title",children:["$",s.title]}),w.jsx("h6",{className:"card-subtitle mb-2 text-muted",children:s.author}),w.jsxs("p",{className:"card-text",children:[s.desc.slice(0,80)," ..."]})]}),w.jsx("div",{className:" h2 position-absolute top-0 end-0",children:w.jsx(ni,{className:s.favorite?"text-danger":"",icon:j_})})]},o))})})]})}const _N={apiKey:"AIzaSyCvgpngfod6RpetJJMjVWkv8c26Xx4BuBQ",authDomain:"ebookplatform-cd7cc.firebaseapp.com",projectId:"ebookplatform-cd7cc",storageBucket:"ebookplatform-cd7cc.appspot.com",messagingSenderId:"896905892543",appId:"1:896905892543:web:b9cdd2f3ed000f5fb32c0a"},wN=bs(_N),EN=Za(wN);function CN(){const[e,t]=x.useState(""),[n,r]=x.useState(!1);x.useEffect(()=>{async function s(o){try{r(!0),console.log(".....");const a=Ja(EN,o);t(await td(a).then(l=>l.val()))}catch(a){console.log(a)}finally{r(!1)}}s("books")},[]);function i(s){return Object.entries(s).map(l=>({id:l[0],...l[1]}))}return w.jsx(w.Fragment,{children:w.jsx("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:w.jsxs("div",{className:"container-fluid",children:[w.jsx(Ll,{className:"navbar-brand fw-bold",to:"/",children:"Clever"}),w.jsx("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarID","aria-controls":"navbarID","aria-expanded":"false","aria-label":"Toggle navigation",children:w.jsx("span",{className:"navbar-toggler-icon"})}),w.jsxs("div",{className:"collapse navbar-collapse",id:"navbarID",children:[w.jsx("div",{className:"navbar-nav",children:w.jsx("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),w.jsx("div",{className:"navbar-nav",children:w.jsxs(Ll,{className:"nav-link active","aria-current":"page",to:"/favorite",children:["Favorite",w.jsx("span",{className:"badge text-bg-warning",children:i(e).filter(s=>s.favorite===!0).length})]})}),w.jsx(Ll,{className:"btn bg-main text-white",to:"/books",children:"Create Your Book"})]})]})})})}function SN(){return w.jsxs(w.Fragment,{children:[w.jsx(CN,{}),w.jsxs(rE,{children:[w.jsx(bo,{path:"/",element:w.jsx(cN,{})}),w.jsx(bo,{path:"/books",element:w.jsx(pN,{})}),w.jsx(bo,{path:"/favorite",element:w.jsx(yN,{})})]})]})}Jl.createRoot(document.getElementById("root")).render(w.jsx(Sa.StrictMode,{children:w.jsx(uE,{children:w.jsx(SN,{})})}));
