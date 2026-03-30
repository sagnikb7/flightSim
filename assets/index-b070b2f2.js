(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();var C0=Object.defineProperty,P0=(t,e,r)=>e in t?C0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ie=(t,e,r)=>(P0(t,typeof e!="symbol"?e+"":e,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();function L0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bm={exports:{}},Pl={},Em={exports:{}},We={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Vs=Symbol.for("react.element"),U0=Symbol.for("react.portal"),D0=Symbol.for("react.fragment"),I0=Symbol.for("react.strict_mode"),N0=Symbol.for("react.profiler"),O0=Symbol.for("react.provider"),F0=Symbol.for("react.context"),z0=Symbol.for("react.forward_ref"),k0=Symbol.for("react.suspense"),B0=Symbol.for("react.memo"),H0=Symbol.for("react.lazy"),Ud=Symbol.iterator;function G0(t){return t===null||typeof t!="object"?null:(t=Ud&&t[Ud]||t["@@iterator"],typeof t=="function"?t:null)}var wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tm=Object.assign,Am={};function Da(t,e,r){this.props=t,this.context=e,this.refs=Am,this.updater=r||wm}Da.prototype.isReactComponent={};Da.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Da.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rm(){}Rm.prototype=Da.prototype;function gh(t,e,r){this.props=t,this.context=e,this.refs=Am,this.updater=r||wm}var vh=gh.prototype=new Rm;vh.constructor=gh;Tm(vh,Da.prototype);vh.isPureReactComponent=!0;var Dd=Array.isArray,Cm=Object.prototype.hasOwnProperty,_h={current:null},Pm={key:!0,ref:!0,__self:!0,__source:!0};function Lm(t,e,r){var i,n={},a=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)Cm.call(e,i)&&!Pm.hasOwnProperty(i)&&(n[i]=e[i]);var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];n.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)n[i]===void 0&&(n[i]=o[i]);return{$$typeof:Vs,type:t,key:a,ref:s,props:n,_owner:_h.current}}function V0(t,e){return{$$typeof:Vs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vs}function W0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Id=/\/+/g;function au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?W0(""+t.key):e.toString(36)}function Go(t,e,r,i,n){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Vs:case U0:s=!0}}if(s)return s=t,n=n(s),t=i===""?"."+au(s,0):i,Dd(n)?(r="",t!=null&&(r=t.replace(Id,"$&/")+"/"),Go(n,e,r,"",function(u){return u})):n!=null&&(xh(n)&&(n=V0(n,r+(!n.key||s&&s.key===n.key?"":(""+n.key).replace(Id,"$&/")+"/")+t)),e.push(n)),1;if(s=0,i=i===""?".":i+":",Dd(t))for(var o=0;o<t.length;o++){a=t[o];var l=i+au(a,o);s+=Go(a,e,r,l,n)}else if(l=G0(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=i+au(a,o++),s+=Go(a,e,r,l,n);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function $s(t,e,r){if(t==null)return t;var i=[],n=0;return Go(t,i,"","",function(a){return e.call(r,a,n++)}),i}function X0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Vo={transition:null},j0={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:_h};function Um(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:$s,forEach:function(t,e,r){$s(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return $s(t,function(){e++}),e},toArray:function(t){return $s(t,function(e){return e})||[]},only:function(t){if(!xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Da;We.Fragment=D0;We.Profiler=N0;We.PureComponent=gh;We.StrictMode=I0;We.Suspense=k0;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j0;We.act=Um;We.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tm({},t.props),n=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=_h.current),e.key!==void 0&&(n=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Cm.call(e,l)&&!Pm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Vs,type:t.type,key:n,ref:a,props:i,_owner:s}};We.createContext=function(t){return t={$$typeof:F0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:O0,_context:t},t.Consumer=t};We.createElement=Lm;We.createFactory=function(t){var e=Lm.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:z0,render:t}};We.isValidElement=xh;We.lazy=function(t){return{$$typeof:H0,_payload:{_status:-1,_result:t},_init:X0}};We.memo=function(t,e){return{$$typeof:B0,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Vo.transition;Vo.transition={};try{t()}finally{Vo.transition=e}};We.unstable_act=Um;We.useCallback=function(t,e){return Kt.current.useCallback(t,e)};We.useContext=function(t){return Kt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};We.useEffect=function(t,e){return Kt.current.useEffect(t,e)};We.useId=function(){return Kt.current.useId()};We.useImperativeHandle=function(t,e,r){return Kt.current.useImperativeHandle(t,e,r)};We.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return Kt.current.useMemo(t,e)};We.useReducer=function(t,e,r){return Kt.current.useReducer(t,e,r)};We.useRef=function(t){return Kt.current.useRef(t)};We.useState=function(t){return Kt.current.useState(t)};We.useSyncExternalStore=function(t,e,r){return Kt.current.useSyncExternalStore(t,e,r)};We.useTransition=function(){return Kt.current.useTransition()};We.version="18.3.1";Em.exports=We;var _r=Em.exports;const Y0=L0(_r);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var q0=_r,J0=Symbol.for("react.element"),K0=Symbol.for("react.fragment"),Z0=Object.prototype.hasOwnProperty,Q0=q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$0={key:!0,ref:!0,__self:!0,__source:!0};function Dm(t,e,r){var i,n={},a=null,s=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Z0.call(e,i)&&!$0.hasOwnProperty(i)&&(n[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)n[i]===void 0&&(n[i]=e[i]);return{$$typeof:J0,type:t,key:a,ref:s,props:n,_owner:Q0.current}}Pl.Fragment=K0;Pl.jsx=Dm;Pl.jsxs=Dm;bm.exports=Pl;var ge=bm.exports,dc={},Im={exports:{}},fr={},Nm={exports:{}},Om={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(D,W){var H=D.length;D.push(W);e:for(;0<H;){var N=H-1>>>1,j=D[N];if(0<n(j,W))D[N]=W,D[H]=j,H=N;else break e}}function r(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var W=D[0],H=D.pop();if(H!==W){D[0]=H;e:for(var N=0,j=D.length,ie=j>>>1;N<ie;){var he=2*(N+1)-1,Me=D[he],_e=he+1,Re=D[_e];if(0>n(Me,H))_e<j&&0>n(Re,Me)?(D[N]=Re,D[_e]=H,N=_e):(D[N]=Me,D[he]=H,N=he);else if(_e<j&&0>n(Re,H))D[N]=Re,D[_e]=H,N=_e;else break e}}return W}function n(D,W){var H=D.sortIndex-W.sortIndex;return H!==0?H:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],u=[],c=1,p=null,d=3,m=!1,_=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(D){for(var W=r(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=D)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=r(u)}}function y(D){if(x=!1,f(D),!_)if(r(l)!==null)_=!0,Q(b);else{var W=r(u);W!==null&&K(y,W.startTime-D)}}function b(D,W){_=!1,x&&(x=!1,h(C),C=-1),m=!0;var H=d;try{for(f(W),p=r(l);p!==null&&(!(p.expirationTime>W)||D&&!z());){var N=p.callback;if(typeof N=="function"){p.callback=null,d=p.priorityLevel;var j=N(p.expirationTime<=W);W=t.unstable_now(),typeof j=="function"?p.callback=j:p===r(l)&&i(l),f(W)}else i(l);p=r(l)}if(p!==null)var ie=!0;else{var he=r(u);he!==null&&K(y,he.startTime-W),ie=!1}return ie}finally{p=null,d=H,m=!1}}var w=!1,T=null,C=-1,M=5,S=-1;function z(){return!(t.unstable_now()-S<M)}function V(){if(T!==null){var D=t.unstable_now();S=D;var W=!0;try{W=T(!0,D)}finally{W?I():(w=!1,T=null)}}else w=!1}var I;if(typeof v=="function")I=function(){v(V)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,G=F.port2;F.port1.onmessage=V,I=function(){G.postMessage(null)}}else I=function(){g(V,0)};function Q(D){T=D,w||(w=!0,I())}function K(D,W){C=g(function(){D(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Q(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var H=d;d=W;try{return D()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=d;d=D;try{return W()}finally{d=H}},t.unstable_scheduleCallback=function(D,W,H){var N=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?N+H:N):H=N,D){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=H+j,D={id:c++,callback:W,priorityLevel:D,startTime:H,expirationTime:j,sortIndex:-1},H>N?(D.sortIndex=H,e(u,D),r(l)===null&&D===r(u)&&(x?(h(C),C=-1):x=!0,K(y,H-N))):(D.sortIndex=j,e(l,D),_||m||(_=!0,Q(b))),D},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(D){var W=d;return function(){var H=d;d=W;try{return D.apply(this,arguments)}finally{d=H}}}})(Om);Nm.exports=Om;var e_=Nm.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var t_=_r,pr=e_;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fm=new Set,ys={};function Cn(t,e){Ma(t,e),Ma(t+"Capture",e)}function Ma(t,e){for(ys[t]=e,t=0;t<e.length;t++)Fm.add(e[t])}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=Object.prototype.hasOwnProperty,r_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nd={},Od={};function i_(t){return pc.call(Od,t)?!0:pc.call(Nd,t)?!1:r_.test(t)?Od[t]=!0:(Nd[t]=!0,!1)}function n_(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function a_(t,e,r,i){if(e===null||typeof e>"u"||n_(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,r,i,n,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var yh=/[\-:]([a-z])/g;function Mh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yh,Mh);Nt[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yh,Mh);Nt[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yh,Mh);Nt[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sh(t,e,r,i){var n=Nt.hasOwnProperty(e)?Nt[e]:null;(n!==null?n.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(a_(e,r,n,i)&&(r=null),i||n===null?i_(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):n.mustUseProperty?t[n.propertyName]=r===null?n.type===3?!1:"":r:(e=n.attributeName,i=n.attributeNamespace,r===null?t.removeAttribute(e):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var Si=t_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),bh=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),zm=Symbol.for("react.provider"),km=Symbol.for("react.context"),Eh=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),gc=Symbol.for("react.suspense_list"),wh=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),Bm=Symbol.for("react.offscreen"),Fd=Symbol.iterator;function ka(t){return t===null||typeof t!="object"?null:(t=Fd&&t[Fd]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,su;function $a(t){if(su===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||""}return`
`+su+t}var ou=!1;function lu(t,e){if(!t||ou)return"";ou=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var n=u.stack.split(`
`),a=i.stack.split(`
`),s=n.length-1,o=a.length-1;1<=s&&0<=o&&n[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(n[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||n[s]!==a[o]){var l=`
`+n[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{ou=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?$a(t):""}function s_(t){switch(t.tag){case 5:return $a(t.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 2:case 15:return t=lu(t.type,!1),t;case 11:return t=lu(t.type.render,!1),t;case 1:return t=lu(t.type,!0),t;default:return""}}function vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $n:return"Fragment";case Qn:return"Portal";case fc:return"Profiler";case bh:return"StrictMode";case mc:return"Suspense";case gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case km:return(t.displayName||"Context")+".Consumer";case zm:return(t._context.displayName||"Context")+".Provider";case Eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wh:return e=t.displayName||null,e!==null?e:vc(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return vc(t(e))}catch{}}return null}function o_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vc(e);case 8:return e===bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function l_(t){var e=Hm(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function to(t){t._valueTracker||(t._valueTracker=l_(t))}function Gm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=Hm(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _c(t,e){var r=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function zd(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=qi(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vm(t,e){e=e.checked,e!=null&&Sh(t,"checked",e,!1)}function xc(t,e){Vm(t,e);var r=qi(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yc(t,e.type,r):e.hasOwnProperty("defaultValue")&&yc(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kd(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function yc(t,e,r){(e!=="number"||tl(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var es=Array.isArray;function pa(t,e,r,i){if(t=t.options,e){e={};for(var n=0;n<r.length;n++)e["$"+r[n]]=!0;for(r=0;r<t.length;r++)n=e.hasOwnProperty("$"+t[r].value),t[r].selected!==n&&(t[r].selected=n),n&&i&&(t[r].defaultSelected=!0)}else{for(r=""+qi(r),e=null,n=0;n<t.length;n++){if(t[n].value===r){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Mc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bd(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(ee(92));if(es(r)){if(1<r.length)throw Error(ee(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:qi(r)}}function Wm(t,e){var r=qi(e.value),i=qi(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function Hd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,jm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,n){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,n)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ms(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u_=["Webkit","ms","Moz","O"];Object.keys(ns).forEach(function(t){u_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ns[e]=ns[t]})});function Ym(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||ns.hasOwnProperty(t)&&ns[t]?(""+e).trim():e+"px"}function qm(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,n=Ym(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,n):t[r]=n}}var c_=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bc(t,e){if(e){if(c_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Ec(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=null;function Th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tc=null,fa=null,ma=null;function Gd(t){if(t=js(t)){if(typeof Tc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Nl(e),Tc(t.stateNode,t.type,e))}}function Jm(t){fa?ma?ma.push(t):ma=[t]:fa=t}function Km(){if(fa){var t=fa,e=ma;if(ma=fa=null,Gd(t),e)for(t=0;t<e.length;t++)Gd(e[t])}}function Zm(t,e){return t(e)}function Qm(){}var uu=!1;function $m(t,e,r){if(uu)return t(e,r);uu=!0;try{return Zm(t,e,r)}finally{uu=!1,(fa!==null||ma!==null)&&(Qm(),Km())}}function Ss(t,e){var r=t.stateNode;if(r===null)return null;var i=Nl(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(ee(231,e,typeof r));return r}var Ac=!1;if(_i)try{var Ba={};Object.defineProperty(Ba,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{Ac=!1}function h_(t,e,r,i,n,a,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(c){this.onError(c)}}var as=!1,rl=null,il=!1,Rc=null,d_={onError:function(t){as=!0,rl=t}};function p_(t,e,r,i,n,a,s,o,l){as=!1,rl=null,h_.apply(d_,arguments)}function f_(t,e,r,i,n,a,s,o,l){if(p_.apply(this,arguments),as){if(as){var u=rl;as=!1,rl=null}else throw Error(ee(198));il||(il=!0,Rc=u)}}function Pn(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function eg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vd(t){if(Pn(t)!==t)throw Error(ee(188))}function m_(t){var e=t.alternate;if(!e){if(e=Pn(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var r=t,i=e;;){var n=r.return;if(n===null)break;var a=n.alternate;if(a===null){if(i=n.return,i!==null){r=i;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===r)return Vd(n),t;if(a===i)return Vd(n),e;a=a.sibling}throw Error(ee(188))}if(r.return!==i.return)r=n,i=a;else{for(var s=!1,o=n.child;o;){if(o===r){s=!0,r=n,i=a;break}if(o===i){s=!0,i=n,r=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===r){s=!0,r=a,i=n;break}if(o===i){s=!0,i=a,r=n;break}o=o.sibling}if(!s)throw Error(ee(189))}}if(r.alternate!==i)throw Error(ee(190))}if(r.tag!==3)throw Error(ee(188));return r.stateNode.current===r?t:e}function tg(t){return t=m_(t),t!==null?rg(t):null}function rg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rg(t);if(e!==null)return e;t=t.sibling}return null}var ig=pr.unstable_scheduleCallback,Wd=pr.unstable_cancelCallback,g_=pr.unstable_shouldYield,v_=pr.unstable_requestPaint,pt=pr.unstable_now,__=pr.unstable_getCurrentPriorityLevel,Ah=pr.unstable_ImmediatePriority,ng=pr.unstable_UserBlockingPriority,nl=pr.unstable_NormalPriority,x_=pr.unstable_LowPriority,ag=pr.unstable_IdlePriority,Ll=null,Zr=null;function y_(t){if(Zr&&typeof Zr.onCommitFiberRoot=="function")try{Zr.onCommitFiberRoot(Ll,t,void 0,(t.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:b_,M_=Math.log,S_=Math.LN2;function b_(t){return t>>>=0,t===0?32:31-(M_(t)/S_|0)|0}var io=64,no=4194304;function ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,n=t.suspendedLanes,a=t.pingedLanes,s=r&268435455;if(s!==0){var o=s&~n;o!==0?i=ts(o):(a&=s,a!==0&&(i=ts(a)))}else s=r&~n,s!==0?i=ts(s):a!==0&&(i=ts(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&n)&&(n=i&-i,a=e&-e,n>=a||n===16&&(a&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-kr(e),n=1<<r,i|=t[r],e&=~n;return i}function E_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w_(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-kr(a),o=1<<s,l=n[s];l===-1?(!(o&r)||o&i)&&(n[s]=E_(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function Cc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sg(){var t=io;return io<<=1,!(io&4194240)&&(io=64),t}function cu(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Ws(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kr(e),t[e]=r}function T_(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var n=31-kr(r),a=1<<n;e[n]=0,i[n]=-1,t[n]=-1,r&=~a}}function Rh(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-kr(r),n=1<<i;n&e|t[i]&e&&(t[i]|=e),r&=~n}}var Je=0;function og(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var lg,Ch,ug,cg,hg,Pc=!1,ao=[],Fi=null,zi=null,ki=null,bs=new Map,Es=new Map,Pi=[],A_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xd(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":bs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(e.pointerId)}}function Ha(t,e,r,i,n,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[n]},e!==null&&(e=js(e),e!==null&&Ch(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function R_(t,e,r,i,n){switch(e){case"focusin":return Fi=Ha(Fi,t,e,r,i,n),!0;case"dragenter":return zi=Ha(zi,t,e,r,i,n),!0;case"mouseover":return ki=Ha(ki,t,e,r,i,n),!0;case"pointerover":var a=n.pointerId;return bs.set(a,Ha(bs.get(a)||null,t,e,r,i,n)),!0;case"gotpointercapture":return a=n.pointerId,Es.set(a,Ha(Es.get(a)||null,t,e,r,i,n)),!0}return!1}function dg(t){var e=dn(t.target);if(e!==null){var r=Pn(e);if(r!==null){if(e=r.tag,e===13){if(e=eg(r),e!==null){t.blockedOn=e,hg(t.priority,function(){ug(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Lc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);wc=i,r.target.dispatchEvent(i),wc=null}else return e=js(r),e!==null&&Ch(e),t.blockedOn=r,!1;e.shift()}return!0}function jd(t,e,r){Wo(t)&&r.delete(e)}function C_(){Pc=!1,Fi!==null&&Wo(Fi)&&(Fi=null),zi!==null&&Wo(zi)&&(zi=null),ki!==null&&Wo(ki)&&(ki=null),bs.forEach(jd),Es.forEach(jd)}function Ga(t,e){t.blockedOn===e&&(t.blockedOn=null,Pc||(Pc=!0,pr.unstable_scheduleCallback(pr.unstable_NormalPriority,C_)))}function ws(t){function e(n){return Ga(n,t)}if(0<ao.length){Ga(ao[0],t);for(var r=1;r<ao.length;r++){var i=ao[r];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&Ga(Fi,t),zi!==null&&Ga(zi,t),ki!==null&&Ga(ki,t),bs.forEach(e),Es.forEach(e),r=0;r<Pi.length;r++)i=Pi[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(r=Pi[0],r.blockedOn===null);)dg(r),r.blockedOn===null&&Pi.shift()}var ga=Si.ReactCurrentBatchConfig,sl=!0;function P_(t,e,r,i){var n=Je,a=ga.transition;ga.transition=null;try{Je=1,Ph(t,e,r,i)}finally{Je=n,ga.transition=a}}function L_(t,e,r,i){var n=Je,a=ga.transition;ga.transition=null;try{Je=4,Ph(t,e,r,i)}finally{Je=n,ga.transition=a}}function Ph(t,e,r,i){if(sl){var n=Lc(t,e,r,i);if(n===null)yu(t,e,i,ol,r),Xd(t,i);else if(R_(n,t,e,r,i))i.stopPropagation();else if(Xd(t,i),e&4&&-1<A_.indexOf(t)){for(;n!==null;){var a=js(n);if(a!==null&&lg(a),a=Lc(t,e,r,i),a===null&&yu(t,e,i,ol,r),a===n)break;n=a}n!==null&&i.stopPropagation()}else yu(t,e,i,null,r)}}var ol=null;function Lc(t,e,r,i){if(ol=null,t=Th(i),t=dn(t),t!==null)if(e=Pn(t),e===null)t=null;else if(r=e.tag,r===13){if(t=eg(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ol=t,null}function pg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(__()){case Ah:return 1;case ng:return 4;case nl:case x_:return 16;case ag:return 536870912;default:return 16}default:return 16}}var Di=null,Lh=null,Xo=null;function fg(){if(Xo)return Xo;var t,e=Lh,r=e.length,i,n="value"in Di?Di.value:Di.textContent,a=n.length;for(t=0;t<r&&e[t]===n[t];t++);var s=r-t;for(i=1;i<=s&&e[r-i]===n[a-i];i++);return Xo=n.slice(t,1<i?1-i:void 0)}function jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function Yd(){return!1}function mr(t){function e(r,i,n,a,s){this._reactName=r,this._targetInst=n,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(r=t[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?so:Yd,this.isPropagationStopped=Yd,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),e}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=mr(Ia),Xs=ut({},Ia,{view:0,detail:0}),U_=mr(Xs),hu,du,Va,Ul=ut({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Va&&(Va&&t.type==="mousemove"?(hu=t.screenX-Va.screenX,du=t.screenY-Va.screenY):du=hu=0,Va=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:du}}),qd=mr(Ul),D_=ut({},Ul,{dataTransfer:0}),I_=mr(D_),N_=ut({},Xs,{relatedTarget:0}),pu=mr(N_),O_=ut({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),F_=mr(O_),z_=ut({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k_=mr(z_),B_=ut({},Ia,{data:0}),Jd=mr(B_),H_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V_[t])?!!e[t]:!1}function Dh(){return W_}var X_=ut({},Xs,{key:function(t){if(t.key){var e=H_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?G_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dh,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j_=mr(X_),Y_=ut({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=mr(Y_),q_=ut({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dh}),J_=mr(q_),K_=ut({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z_=mr(K_),Q_=ut({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$_=mr(Q_),ex=[9,13,27,32],Ih=_i&&"CompositionEvent"in window,ss=null;_i&&"documentMode"in document&&(ss=document.documentMode);var tx=_i&&"TextEvent"in window&&!ss,mg=_i&&(!Ih||ss&&8<ss&&11>=ss),Zd=String.fromCharCode(32),Qd=!1;function gg(t,e){switch(t){case"keyup":return ex.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ea=!1;function rx(t,e){switch(t){case"compositionend":return vg(e);case"keypress":return e.which!==32?null:(Qd=!0,Zd);case"textInput":return t=e.data,t===Zd&&Qd?null:t;default:return null}}function ix(t,e){if(ea)return t==="compositionend"||!Ih&&gg(t,e)?(t=fg(),Xo=Lh=Di=null,ea=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mg&&e.locale!=="ko"?null:e.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nx[t.type]:e==="textarea"}function _g(t,e,r,i){Jm(i),e=ll(e,"onChange"),0<e.length&&(r=new Uh("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var os=null,Ts=null;function ax(t){Cg(t,0)}function Dl(t){var e=ia(t);if(Gm(e))return t}function sx(t,e){if(t==="change")return e}var xg=!1;if(_i){var fu;if(_i){var mu="oninput"in document;if(!mu){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),mu=typeof ep.oninput=="function"}fu=mu}else fu=!1;xg=fu&&(!document.documentMode||9<document.documentMode)}function tp(){os&&(os.detachEvent("onpropertychange",yg),Ts=os=null)}function yg(t){if(t.propertyName==="value"&&Dl(Ts)){var e=[];_g(e,Ts,t,Th(t)),$m(ax,e)}}function ox(t,e,r){t==="focusin"?(tp(),os=e,Ts=r,os.attachEvent("onpropertychange",yg)):t==="focusout"&&tp()}function lx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(Ts)}function ux(t,e){if(t==="click")return Dl(e)}function cx(t,e){if(t==="input"||t==="change")return Dl(e)}function hx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vr=typeof Object.is=="function"?Object.is:hx;function As(t,e){if(Vr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var n=r[i];if(!pc.call(e,n)||!Vr(t[n],e[n]))return!1}return!0}function rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ip(t,e){var r=rp(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=rp(r)}}function Mg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sg(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=tl(t.document)}return e}function Nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dx(t){var e=Sg(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&Mg(r.ownerDocument.documentElement,r)){if(i!==null&&Nh(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var n=r.textContent.length,a=Math.min(i.start,n);i=i.end===void 0?a:Math.min(i.end,n),!t.extend&&a>i&&(n=i,i=a,a=n),n=ip(r,a);var s=ip(r,i);n&&s&&(t.rangeCount!==1||t.anchorNode!==n.node||t.anchorOffset!==n.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var px=_i&&"documentMode"in document&&11>=document.documentMode,ta=null,Uc=null,ls=null,Dc=!1;function np(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Dc||ta==null||ta!==tl(i)||(i=ta,"selectionStart"in i&&Nh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ls&&As(ls,i)||(ls=i,i=ll(Uc,"onSelect"),0<i.length&&(e=new Uh("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=ta)))}function oo(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var ra={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},gu={},bg={};_i&&(bg=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function Il(t){if(gu[t])return gu[t];if(!ra[t])return t;var e=ra[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in bg)return gu[t]=e[r];return t}var Eg=Il("animationend"),wg=Il("animationiteration"),Tg=Il("animationstart"),Ag=Il("transitionend"),Rg=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){Rg.set(t,e),Cn(e,[t])}for(var vu=0;vu<ap.length;vu++){var _u=ap[vu],fx=_u.toLowerCase(),mx=_u[0].toUpperCase()+_u.slice(1);Zi(fx,"on"+mx)}Zi(Eg,"onAnimationEnd");Zi(wg,"onAnimationIteration");Zi(Tg,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(Ag,"onTransitionEnd");Ma("onMouseEnter",["mouseout","mouseover"]);Ma("onMouseLeave",["mouseout","mouseover"]);Ma("onPointerEnter",["pointerout","pointerover"]);Ma("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gx=new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));function sp(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,f_(i,e,void 0,t),t.currentTarget=null}function Cg(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],n=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==a&&n.isPropagationStopped())break e;sp(n,o,u),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==a&&n.isPropagationStopped())break e;sp(n,o,u),a=l}}}if(il)throw t=Rc,il=!1,Rc=null,t}function $e(t,e){var r=e[zc];r===void 0&&(r=e[zc]=new Set);var i=t+"__bubble";r.has(i)||(Pg(e,t,2,!1),r.add(i))}function xu(t,e,r){var i=0;e&&(i|=4),Pg(r,t,i,e)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Rs(t){if(!t[lo]){t[lo]=!0,Fm.forEach(function(r){r!=="selectionchange"&&(gx.has(r)||xu(r,!1,t),xu(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lo]||(e[lo]=!0,xu("selectionchange",!1,e))}}function Pg(t,e,r,i){switch(pg(e)){case 1:var n=P_;break;case 4:n=L_;break;default:n=Ph}r=n.bind(null,e,r,t),n=void 0,!Ac||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,r,{capture:!0,passive:n}):t.addEventListener(e,r,!0):n!==void 0?t.addEventListener(e,r,{passive:n}):t.addEventListener(e,r,!1)}function yu(t,e,r,i,n){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===n||o.nodeType===8&&o.parentNode===n)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;s=s.return}for(;o!==null;){if(s=dn(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}$m(function(){var u=a,c=Th(r),p=[];e:{var d=Rg.get(t);if(d!==void 0){var m=Uh,_=t;switch(t){case"keypress":if(jo(r)===0)break e;case"keydown":case"keyup":m=j_;break;case"focusin":_="focus",m=pu;break;case"focusout":_="blur",m=pu;break;case"beforeblur":case"afterblur":m=pu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=I_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=J_;break;case Eg:case wg:case Tg:m=F_;break;case Ag:m=Z_;break;case"scroll":m=U_;break;case"wheel":m=$_;break;case"copy":case"cut":case"paste":m=k_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Kd}var x=(e&4)!==0,g=!x&&t==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var v=u,f;v!==null;){f=v;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,h!==null&&(y=Ss(v,h),y!=null&&x.push(Cs(v,y,f)))),g)break;v=v.return}0<x.length&&(d=new m(d,_,null,r,c),p.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&r!==wc&&(_=r.relatedTarget||r.fromElement)&&(dn(_)||_[xi]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=r.relatedTarget||r.toElement,m=u,_=_?dn(_):null,_!==null&&(g=Pn(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(x=qd,y="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Kd,y="onPointerLeave",h="onPointerEnter",v="pointer"),g=m==null?d:ia(m),f=_==null?d:ia(_),d=new x(y,v+"leave",m,r,c),d.target=g,d.relatedTarget=f,y=null,dn(c)===u&&(x=new x(h,v+"enter",_,r,c),x.target=f,x.relatedTarget=g,y=x),g=y,m&&_)t:{for(x=m,h=_,v=0,f=x;f;f=Dn(f))v++;for(f=0,y=h;y;y=Dn(y))f++;for(;0<v-f;)x=Dn(x),v--;for(;0<f-v;)h=Dn(h),f--;for(;v--;){if(x===h||h!==null&&x===h.alternate)break t;x=Dn(x),h=Dn(h)}x=null}else x=null;m!==null&&op(p,d,m,x,!1),_!==null&&g!==null&&op(p,g,_,x,!0)}}e:{if(d=u?ia(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var b=sx;else if($d(d))if(xg)b=cx;else{b=lx;var w=ox}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=ux);if(b&&(b=b(t,u))){_g(p,b,r,c);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&yc(d,"number",d.value)}switch(w=u?ia(u):window,t){case"focusin":($d(w)||w.contentEditable==="true")&&(ta=w,Uc=u,ls=null);break;case"focusout":ls=Uc=ta=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,np(p,r,c);break;case"selectionchange":if(px)break;case"keydown":case"keyup":np(p,r,c)}var T;if(Ih)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ea?gg(t,r)&&(C="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(C="onCompositionStart");C&&(mg&&r.locale!=="ko"&&(ea||C!=="onCompositionStart"?C==="onCompositionEnd"&&ea&&(T=fg()):(Di=c,Lh="value"in Di?Di.value:Di.textContent,ea=!0)),w=ll(u,C),0<w.length&&(C=new Jd(C,t,null,r,c),p.push({event:C,listeners:w}),T?C.data=T:(T=vg(r),T!==null&&(C.data=T)))),(T=tx?rx(t,r):ix(t,r))&&(u=ll(u,"onBeforeInput"),0<u.length&&(c=new Jd("onBeforeInput","beforeinput",null,r,c),p.push({event:c,listeners:u}),c.data=T))}Cg(p,e)})}function Cs(t,e,r){return{instance:t,listener:e,currentTarget:r}}function ll(t,e){for(var r=e+"Capture",i=[];t!==null;){var n=t,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=Ss(t,r),a!=null&&i.unshift(Cs(t,a,n)),a=Ss(t,e),a!=null&&i.push(Cs(t,a,n))),t=t.return}return i}function Dn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function op(t,e,r,i,n){for(var a=e._reactName,s=[];r!==null&&r!==i;){var o=r,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,n?(l=Ss(r,a),l!=null&&s.unshift(Cs(r,l,o))):n||(l=Ss(r,a),l!=null&&s.push(Cs(r,l,o)))),r=r.return}s.length!==0&&t.push({event:e,listeners:s})}var vx=/\r\n?/g,_x=/\u0000|\uFFFD/g;function lp(t){return(typeof t=="string"?t:""+t).replace(vx,`
`).replace(_x,"")}function uo(t,e,r){if(e=lp(e),lp(t)!==e&&r)throw Error(ee(425))}function ul(){}var Ic=null,Nc=null;function Oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,xx=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,yx=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(t){return up.resolve(null).then(t).catch(Mx)}:Fc;function Mx(t){setTimeout(function(){throw t})}function Mu(t,e){var r=e,i=0;do{var n=r.nextSibling;if(t.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(i===0){t.removeChild(n),ws(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=n}while(r);ws(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Na=Math.random().toString(36).slice(2),Jr="__reactFiber$"+Na,Ps="__reactProps$"+Na,xi="__reactContainer$"+Na,zc="__reactEvents$"+Na,Sx="__reactListeners$"+Na,bx="__reactHandles$"+Na;function dn(t){var e=t[Jr];if(e)return e;for(var r=t.parentNode;r;){if(e=r[xi]||r[Jr]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=cp(t);t!==null;){if(r=t[Jr])return r;t=cp(t)}return e}t=r,r=t.parentNode}return null}function js(t){return t=t[Jr]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ia(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Nl(t){return t[Ps]||null}var kc=[],na=-1;function Qi(t){return{current:t}}function et(t){0>na||(t.current=kc[na],kc[na]=null,na--)}function Ze(t,e){na++,kc[na]=t.current,t.current=e}var Ji={},Ht=Qi(Ji),er=Qi(!1),Sn=Ji;function Sa(t,e){var r=t.type.contextTypes;if(!r)return Ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in r)n[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=n),n}function tr(t){return t=t.childContextTypes,t!=null}function cl(){et(er),et(Ht)}function hp(t,e,r){if(Ht.current!==Ji)throw Error(ee(168));Ze(Ht,e),Ze(er,r)}function Lg(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var n in i)if(!(n in e))throw Error(ee(108,o_(t)||"Unknown",n));return ut({},r,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Sn=Ht.current,Ze(Ht,t),Ze(er,er.current),!0}function dp(t,e,r){var i=t.stateNode;if(!i)throw Error(ee(169));r?(t=Lg(t,e,Sn),i.__reactInternalMemoizedMergedChildContext=t,et(er),et(Ht),Ze(Ht,t)):et(er),Ze(er,r)}var ci=null,Ol=!1,Su=!1;function Ug(t){ci===null?ci=[t]:ci.push(t)}function Ex(t){Ol=!0,Ug(t)}function $i(){if(!Su&&ci!==null){Su=!0;var t=0,e=Je;try{var r=ci;for(Je=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}ci=null,Ol=!1}catch(n){throw ci!==null&&(ci=ci.slice(t+1)),ig(Ah,$i),n}finally{Je=e,Su=!1}}return null}var aa=[],sa=0,dl=null,pl=0,xr=[],yr=0,bn=null,di=1,pi="";function on(t,e){aa[sa++]=pl,aa[sa++]=dl,dl=t,pl=e}function Dg(t,e,r){xr[yr++]=di,xr[yr++]=pi,xr[yr++]=bn,bn=t;var i=di;t=pi;var n=32-kr(i)-1;i&=~(1<<n),r+=1;var a=32-kr(e)+n;if(30<a){var s=n-n%5;a=(i&(1<<s)-1).toString(32),i>>=s,n-=s,di=1<<32-kr(e)+n|r<<n|i,pi=a+t}else di=1<<a|r<<n|i,pi=t}function Oh(t){t.return!==null&&(on(t,1),Dg(t,1,0))}function Fh(t){for(;t===dl;)dl=aa[--sa],aa[sa]=null,pl=aa[--sa],aa[sa]=null;for(;t===bn;)bn=xr[--yr],xr[yr]=null,pi=xr[--yr],xr[yr]=null,di=xr[--yr],xr[yr]=null}var hr=null,ur=null,it=!1,Nr=null;function Ig(t,e){var r=br(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function pp(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hr=t,ur=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hr=t,ur=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=bn!==null?{id:di,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=br(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,hr=t,ur=null,!0):!1;default:return!1}}function Bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hc(t){if(it){var e=ur;if(e){var r=e;if(!pp(t,e)){if(Bc(t))throw Error(ee(418));e=Bi(r.nextSibling);var i=hr;e&&pp(t,e)?Ig(i,r):(t.flags=t.flags&-4097|2,it=!1,hr=t)}}else{if(Bc(t))throw Error(ee(418));t.flags=t.flags&-4097|2,it=!1,hr=t}}}function fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hr=t}function co(t){if(t!==hr)return!1;if(!it)return fp(t),it=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oc(t.type,t.memoizedProps)),e&&(e=ur)){if(Bc(t))throw Ng(),Error(ee(418));for(;e;)Ig(t,e),e=Bi(e.nextSibling)}if(fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){ur=Bi(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}ur=null}}else ur=hr?Bi(t.stateNode.nextSibling):null;return!0}function Ng(){for(var t=ur;t;)t=Bi(t.nextSibling)}function ba(){ur=hr=null,it=!1}function zh(t){Nr===null?Nr=[t]:Nr.push(t)}var wx=Si.ReactCurrentBatchConfig;function Wa(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(ee(309));var i=r.stateNode}if(!i)throw Error(ee(147,t));var n=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=n.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(ee(284));if(!r._owner)throw Error(ee(290,t))}return t}function ho(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mp(t){var e=t._init;return e(t._payload)}function Og(t){function e(h,v){if(t){var f=h.deletions;f===null?(h.deletions=[v],h.flags|=16):f.push(v)}}function r(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function n(h,v){return h=Wi(h,v),h.index=0,h.sibling=null,h}function a(h,v,f){return h.index=f,t?(f=h.alternate,f!==null?(f=f.index,f<v?(h.flags|=2,v):f):(h.flags|=2,v)):(h.flags|=1048576,v)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,v,f,y){return v===null||v.tag!==6?(v=Cu(f,h.mode,y),v.return=h,v):(v=n(v,f),v.return=h,v)}function l(h,v,f,y){var b=f.type;return b===$n?c(h,v,f.props.children,y,f.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ri&&mp(b)===v.type)?(y=n(v,f.props),y.ref=Wa(h,v,f),y.return=h,y):(y=$o(f.type,f.key,f.props,null,h.mode,y),y.ref=Wa(h,v,f),y.return=h,y)}function u(h,v,f,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==f.containerInfo||v.stateNode.implementation!==f.implementation?(v=Pu(f,h.mode,y),v.return=h,v):(v=n(v,f.children||[]),v.return=h,v)}function c(h,v,f,y,b){return v===null||v.tag!==7?(v=gn(f,h.mode,y,b),v.return=h,v):(v=n(v,f),v.return=h,v)}function p(h,v,f){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Cu(""+v,h.mode,f),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case eo:return f=$o(v.type,v.key,v.props,null,h.mode,f),f.ref=Wa(h,null,v),f.return=h,f;case Qn:return v=Pu(v,h.mode,f),v.return=h,v;case Ri:var y=v._init;return p(h,y(v._payload),f)}if(es(v)||ka(v))return v=gn(v,h.mode,f,null),v.return=h,v;ho(h,v)}return null}function d(h,v,f,y){var b=v!==null?v.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return b!==null?null:o(h,v,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case eo:return f.key===b?l(h,v,f,y):null;case Qn:return f.key===b?u(h,v,f,y):null;case Ri:return b=f._init,d(h,v,b(f._payload),y)}if(es(f)||ka(f))return b!==null?null:c(h,v,f,y,null);ho(h,f)}return null}function m(h,v,f,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(f)||null,o(v,h,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case eo:return h=h.get(y.key===null?f:y.key)||null,l(v,h,y,b);case Qn:return h=h.get(y.key===null?f:y.key)||null,u(v,h,y,b);case Ri:var w=y._init;return m(h,v,f,w(y._payload),b)}if(es(y)||ka(y))return h=h.get(f)||null,c(v,h,y,b,null);ho(v,y)}return null}function _(h,v,f,y){for(var b=null,w=null,T=v,C=v=0,M=null;T!==null&&C<f.length;C++){T.index>C?(M=T,T=null):M=T.sibling;var S=d(h,T,f[C],y);if(S===null){T===null&&(T=M);break}t&&T&&S.alternate===null&&e(h,T),v=a(S,v,C),w===null?b=S:w.sibling=S,w=S,T=M}if(C===f.length)return r(h,T),it&&on(h,C),b;if(T===null){for(;C<f.length;C++)T=p(h,f[C],y),T!==null&&(v=a(T,v,C),w===null?b=T:w.sibling=T,w=T);return it&&on(h,C),b}for(T=i(h,T);C<f.length;C++)M=m(T,h,C,f[C],y),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?C:M.key),v=a(M,v,C),w===null?b=M:w.sibling=M,w=M);return t&&T.forEach(function(z){return e(h,z)}),it&&on(h,C),b}function x(h,v,f,y){var b=ka(f);if(typeof b!="function")throw Error(ee(150));if(f=b.call(f),f==null)throw Error(ee(151));for(var w=b=null,T=v,C=v=0,M=null,S=f.next();T!==null&&!S.done;C++,S=f.next()){T.index>C?(M=T,T=null):M=T.sibling;var z=d(h,T,S.value,y);if(z===null){T===null&&(T=M);break}t&&T&&z.alternate===null&&e(h,T),v=a(z,v,C),w===null?b=z:w.sibling=z,w=z,T=M}if(S.done)return r(h,T),it&&on(h,C),b;if(T===null){for(;!S.done;C++,S=f.next())S=p(h,S.value,y),S!==null&&(v=a(S,v,C),w===null?b=S:w.sibling=S,w=S);return it&&on(h,C),b}for(T=i(h,T);!S.done;C++,S=f.next())S=m(T,h,C,S.value,y),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?C:S.key),v=a(S,v,C),w===null?b=S:w.sibling=S,w=S);return t&&T.forEach(function(V){return e(h,V)}),it&&on(h,C),b}function g(h,v,f,y){if(typeof f=="object"&&f!==null&&f.type===$n&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case eo:e:{for(var b=f.key,w=v;w!==null;){if(w.key===b){if(b=f.type,b===$n){if(w.tag===7){r(h,w.sibling),v=n(w,f.props.children),v.return=h,h=v;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ri&&mp(b)===w.type){r(h,w.sibling),v=n(w,f.props),v.ref=Wa(h,w,f),v.return=h,h=v;break e}r(h,w);break}else e(h,w);w=w.sibling}f.type===$n?(v=gn(f.props.children,h.mode,y,f.key),v.return=h,h=v):(y=$o(f.type,f.key,f.props,null,h.mode,y),y.ref=Wa(h,v,f),y.return=h,h=y)}return s(h);case Qn:e:{for(w=f.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===f.containerInfo&&v.stateNode.implementation===f.implementation){r(h,v.sibling),v=n(v,f.children||[]),v.return=h,h=v;break e}else{r(h,v);break}else e(h,v);v=v.sibling}v=Pu(f,h.mode,y),v.return=h,h=v}return s(h);case Ri:return w=f._init,g(h,v,w(f._payload),y)}if(es(f))return _(h,v,f,y);if(ka(f))return x(h,v,f,y);ho(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,v!==null&&v.tag===6?(r(h,v.sibling),v=n(v,f),v.return=h,h=v):(r(h,v),v=Cu(f,h.mode,y),v.return=h,h=v),s(h)):r(h,v)}return g}var Ea=Og(!0),Fg=Og(!1),fl=Qi(null),ml=null,oa=null,kh=null;function Bh(){kh=oa=ml=null}function Hh(t){var e=fl.current;et(fl),t._currentValue=e}function Gc(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function va(t,e){ml=t,kh=oa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function wr(t){var e=t._currentValue;if(kh!==t)if(t={context:t,memoizedValue:e,next:null},oa===null){if(ml===null)throw Error(ee(308));oa=t,ml.dependencies={lanes:0,firstContext:t}}else oa=oa.next=t;return e}var pn=null;function Gh(t){pn===null?pn=[t]:pn.push(t)}function zg(t,e,r,i){var n=e.interleaved;return n===null?(r.next=r,Gh(e)):(r.next=n.next,n.next=r),e.interleaved=r,yi(t,i)}function yi(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Ci=!1;function Vh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,yi(t,r)}return n=i.interleaved,n===null?(e.next=e,Gh(i)):(e.next=n.next,n.next=e),i.interleaved=e,yi(t,r)}function Yo(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,Rh(t,r)}}function gp(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var n=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?n=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?n=a=e:a=a.next=e}else n=a=e;r={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function gl(t,e,r,i){var n=t.updateQueue;Ci=!1;var a=n.firstBaseUpdate,s=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?a=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==s&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(a!==null){var p=n.baseState;s=0,c=u=l=null,o=a;do{var d=o.lane,m=o.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(d=e,m=r,x.tag){case 1:if(_=x.payload,typeof _=="function"){p=_.call(m,p,d);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(m,p,d):_,d==null)break e;p=ut({},p,d);break e;case 2:Ci=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=n.effects,d===null?n.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=m,l=p):c=c.next=m,s|=d;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;d=o,o=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(1);if(c===null&&(l=p),n.baseState=l,n.firstBaseUpdate=u,n.lastBaseUpdate=c,e=n.shared.interleaved,e!==null){n=e;do s|=n.lane,n=n.next;while(n!==e)}else a===null&&(n.shared.lanes=0);wn|=s,t.lanes=s,t.memoizedState=p}}function vp(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],n=i.callback;if(n!==null){if(i.callback=null,i=r,typeof n!="function")throw Error(ee(191,n));n.call(i)}}}var Ys={},Qr=Qi(Ys),Ls=Qi(Ys),Us=Qi(Ys);function fn(t){if(t===Ys)throw Error(ee(174));return t}function Wh(t,e){switch(Ze(Us,e),Ze(Ls,t),Ze(Qr,Ys),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sc(e,t)}et(Qr),Ze(Qr,e)}function wa(){et(Qr),et(Ls),et(Us)}function Bg(t){fn(Us.current);var e=fn(Qr.current),r=Sc(e,t.type);e!==r&&(Ze(Ls,t),Ze(Qr,r))}function Xh(t){Ls.current===t&&(et(Qr),et(Ls))}var st=Qi(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bu=[];function jh(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var qo=Si.ReactCurrentDispatcher,Eu=Si.ReactCurrentBatchConfig,En=0,lt=null,St=null,Rt=null,_l=!1,us=!1,Ds=0,Tx=0;function Ot(){throw Error(ee(321))}function Yh(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Vr(t[r],e[r]))return!1;return!0}function qh(t,e,r,i,n,a){if(En=a,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qo.current=t===null||t.memoizedState===null?Px:Lx,t=r(i,n),us){a=0;do{if(us=!1,Ds=0,25<=a)throw Error(ee(301));a+=1,Rt=St=null,e.updateQueue=null,qo.current=Ux,t=r(i,n)}while(us)}if(qo.current=xl,e=St!==null&&St.next!==null,En=0,Rt=St=lt=null,_l=!1,e)throw Error(ee(300));return t}function Jh(){var t=Ds!==0;return Ds=0,t}function Yr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?lt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Tr(){if(St===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Rt===null?lt.memoizedState:Rt.next;if(e!==null)Rt=e,St=t;else{if(t===null)throw Error(ee(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Rt===null?lt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Is(t,e){return typeof e=="function"?e(t):e}function wu(t){var e=Tr(),r=e.queue;if(r===null)throw Error(ee(311));r.lastRenderedReducer=t;var i=St,n=i.baseQueue,a=r.pending;if(a!==null){if(n!==null){var s=n.next;n.next=a.next,a.next=s}i.baseQueue=n=a,r.pending=null}if(n!==null){a=n.next,i=i.baseState;var o=s=null,l=null,u=a;do{var c=u.lane;if((En&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,s=i):l=l.next=p,lt.lanes|=c,wn|=c}u=u.next}while(u!==null&&u!==a);l===null?s=i:l.next=o,Vr(i,e.memoizedState)||($t=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,r.lastRenderedState=i}if(t=r.interleaved,t!==null){n=t;do a=n.lane,lt.lanes|=a,wn|=a,n=n.next;while(n!==t)}else n===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Tu(t){var e=Tr(),r=e.queue;if(r===null)throw Error(ee(311));r.lastRenderedReducer=t;var i=r.dispatch,n=r.pending,a=e.memoizedState;if(n!==null){r.pending=null;var s=n=n.next;do a=t(a,s.action),s=s.next;while(s!==n);Vr(a,e.memoizedState)||($t=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,i]}function Hg(){}function Gg(t,e){var r=lt,i=Tr(),n=e(),a=!Vr(i.memoizedState,n);if(a&&(i.memoizedState=n,$t=!0),i=i.queue,Kh(Xg.bind(null,r,i,t),[t]),i.getSnapshot!==e||a||Rt!==null&&Rt.memoizedState.tag&1){if(r.flags|=2048,Ns(9,Wg.bind(null,r,i,n,e),void 0,null),Pt===null)throw Error(ee(349));En&30||Vg(r,e,n)}return n}function Vg(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Wg(t,e,r,i){e.value=r,e.getSnapshot=i,jg(e)&&Yg(t)}function Xg(t,e,r){return r(function(){jg(e)&&Yg(t)})}function jg(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Vr(t,r)}catch{return!0}}function Yg(t){var e=yi(t,1);e!==null&&Br(e,t,1,-1)}function _p(t){var e=Yr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},e.queue=t,t=t.dispatch=Cx.bind(null,lt,t),[e.memoizedState,t]}function Ns(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function qg(){return Tr().memoizedState}function Jo(t,e,r,i){var n=Yr();lt.flags|=t,n.memoizedState=Ns(1|e,r,void 0,i===void 0?null:i)}function Fl(t,e,r,i){var n=Tr();i=i===void 0?null:i;var a=void 0;if(St!==null){var s=St.memoizedState;if(a=s.destroy,i!==null&&Yh(i,s.deps)){n.memoizedState=Ns(e,r,a,i);return}}lt.flags|=t,n.memoizedState=Ns(1|e,r,a,i)}function xp(t,e){return Jo(8390656,8,t,e)}function Kh(t,e){return Fl(2048,8,t,e)}function Jg(t,e){return Fl(4,2,t,e)}function Kg(t,e){return Fl(4,4,t,e)}function Zg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qg(t,e,r){return r=r!=null?r.concat([t]):null,Fl(4,4,Zg.bind(null,e,t),r)}function Zh(){}function $g(t,e){var r=Tr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Yh(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function ev(t,e){var r=Tr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Yh(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function tv(t,e,r){return En&21?(Vr(r,e)||(r=sg(),lt.lanes|=r,wn|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=r)}function Ax(t,e){var r=Je;Je=r!==0&&4>r?r:4,t(!0);var i=Eu.transition;Eu.transition={};try{t(!1),e()}finally{Je=r,Eu.transition=i}}function rv(){return Tr().memoizedState}function Rx(t,e,r){var i=Vi(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},iv(t))nv(e,r);else if(r=zg(t,e,r,i),r!==null){var n=qt();Br(r,t,i,n),av(r,e,i)}}function Cx(t,e,r){var i=Vi(t),n={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(iv(t))nv(e,n);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,r);if(n.hasEagerState=!0,n.eagerState=o,Vr(o,s)){var l=e.interleaved;l===null?(n.next=n,Gh(e)):(n.next=l.next,l.next=n),e.interleaved=n;return}}catch{}finally{}r=zg(t,e,n,i),r!==null&&(n=qt(),Br(r,t,i,n),av(r,e,i))}}function iv(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function nv(t,e){us=_l=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function av(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,Rh(t,r)}}var xl={readContext:wr,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},Px={readContext:wr,useCallback:function(t,e){return Yr().memoizedState=[t,e===void 0?null:e],t},useContext:wr,useEffect:xp,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Jo(4194308,4,Zg.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jo(4,2,t,e)},useMemo:function(t,e){var r=Yr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=Yr();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Rx.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=Yr();return t={current:t},e.memoizedState=t},useState:_p,useDebugValue:Zh,useDeferredValue:function(t){return Yr().memoizedState=t},useTransition:function(){var t=_p(!1),e=t[0];return t=Ax.bind(null,t[1]),Yr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=lt,n=Yr();if(it){if(r===void 0)throw Error(ee(407));r=r()}else{if(r=e(),Pt===null)throw Error(ee(349));En&30||Vg(i,e,r)}n.memoizedState=r;var a={value:r,getSnapshot:e};return n.queue=a,xp(Xg.bind(null,i,a,t),[t]),i.flags|=2048,Ns(9,Wg.bind(null,i,a,r,e),void 0,null),r},useId:function(){var t=Yr(),e=Pt.identifierPrefix;if(it){var r=pi,i=di;r=(i&~(1<<32-kr(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=Ds++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Tx++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lx={readContext:wr,useCallback:$g,useContext:wr,useEffect:Kh,useImperativeHandle:Qg,useInsertionEffect:Jg,useLayoutEffect:Kg,useMemo:ev,useReducer:wu,useRef:qg,useState:function(){return wu(Is)},useDebugValue:Zh,useDeferredValue:function(t){var e=Tr();return tv(e,St.memoizedState,t)},useTransition:function(){var t=wu(Is)[0],e=Tr().memoizedState;return[t,e]},useMutableSource:Hg,useSyncExternalStore:Gg,useId:rv,unstable_isNewReconciler:!1},Ux={readContext:wr,useCallback:$g,useContext:wr,useEffect:Kh,useImperativeHandle:Qg,useInsertionEffect:Jg,useLayoutEffect:Kg,useMemo:ev,useReducer:Tu,useRef:qg,useState:function(){return Tu(Is)},useDebugValue:Zh,useDeferredValue:function(t){var e=Tr();return St===null?e.memoizedState=t:tv(e,St.memoizedState,t)},useTransition:function(){var t=Tu(Is)[0],e=Tr().memoizedState;return[t,e]},useMutableSource:Hg,useSyncExternalStore:Gg,useId:rv,unstable_isNewReconciler:!1};function Dr(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Vc(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:ut({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var zl={isMounted:function(t){return(t=t._reactInternals)?Pn(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=qt(),n=Vi(t),a=mi(i,n);a.payload=e,r!=null&&(a.callback=r),e=Hi(t,a,n),e!==null&&(Br(e,t,n,i),Yo(e,t,n))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=qt(),n=Vi(t),a=mi(i,n);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=Hi(t,a,n),e!==null&&(Br(e,t,n,i),Yo(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=qt(),i=Vi(t),n=mi(r,i);n.tag=2,e!=null&&(n.callback=e),e=Hi(t,n,i),e!==null&&(Br(e,t,i,r),Yo(e,t,i))}};function yp(t,e,r,i,n,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!As(r,i)||!As(n,a):!0}function sv(t,e,r){var i=!1,n=Ji,a=e.contextType;return typeof a=="object"&&a!==null?a=wr(a):(n=tr(e)?Sn:Ht.current,i=e.contextTypes,a=(i=i!=null)?Sa(t,n):Ji),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=a),e}function Mp(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&zl.enqueueReplaceState(e,e.state,null)}function Wc(t,e,r,i){var n=t.stateNode;n.props=r,n.state=t.memoizedState,n.refs={},Vh(t);var a=e.contextType;typeof a=="object"&&a!==null?n.context=wr(a):(a=tr(e)?Sn:Ht.current,n.context=Sa(t,a)),n.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Vc(t,e,a,r),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&zl.enqueueReplaceState(n,n.state,null),gl(t,r,n,i),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308)}function Ta(t,e){try{var r="",i=e;do r+=s_(i),i=i.return;while(i);var n=r}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:n,digest:null}}function Au(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Xc(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Dx=typeof WeakMap=="function"?WeakMap:Map;function ov(t,e,r){r=mi(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){Ml||(Ml=!0,eh=i),Xc(t,e)},r}function lv(t,e,r){r=mi(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;r.payload=function(){return i(n)},r.callback=function(){Xc(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Xc(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),r}function Sp(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new Dx;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(r)||(n.add(r),t=Yx.bind(null,t,e,r),e.then(t,t))}function bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ep(t,e,r,i,n){return t.mode&1?(t.flags|=65536,t.lanes=n,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=mi(-1,1),e.tag=2,Hi(r,e,1))),r.lanes|=1),t)}var Ix=Si.ReactCurrentOwner,$t=!1;function jt(t,e,r,i){e.child=t===null?Fg(e,null,r,i):Ea(e,t.child,r,i)}function wp(t,e,r,i,n){r=r.render;var a=e.ref;return va(e,n),i=qh(t,e,r,i,a,n),r=Jh(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,Mi(t,e,n)):(it&&r&&Oh(e),e.flags|=1,jt(t,e,i,n),e.child)}function Tp(t,e,r,i,n){if(t===null){var a=r.type;return typeof a=="function"&&!ad(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,uv(t,e,a,i,n)):(t=$o(r.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&n)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:As,r(s,i)&&t.ref===e.ref)return Mi(t,e,n)}return e.flags|=1,t=Wi(a,i),t.ref=e.ref,t.return=e,e.child=t}function uv(t,e,r,i,n){if(t!==null){var a=t.memoizedProps;if(As(a,i)&&t.ref===e.ref)if($t=!1,e.pendingProps=i=a,(t.lanes&n)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,Mi(t,e,n)}return jc(t,e,r,i,n)}function cv(t,e,r){var i=e.pendingProps,n=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(ua,or),or|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ze(ua,or),or|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,Ze(ua,or),or|=i}else a!==null?(i=a.baseLanes|r,e.memoizedState=null):i=r,Ze(ua,or),or|=i;return jt(t,e,n,r),e.child}function hv(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function jc(t,e,r,i,n){var a=tr(r)?Sn:Ht.current;return a=Sa(e,a),va(e,n),r=qh(t,e,r,i,a,n),i=Jh(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,Mi(t,e,n)):(it&&i&&Oh(e),e.flags|=1,jt(t,e,r,n),e.child)}function Ap(t,e,r,i,n){if(tr(r)){var a=!0;hl(e)}else a=!1;if(va(e,n),e.stateNode===null)Ko(t,e),sv(e,r,i),Wc(e,r,i,n),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=wr(u):(u=tr(r)?Sn:Ht.current,u=Sa(e,u));var c=r.getDerivedStateFromProps,p=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Mp(e,s,i,u),Ci=!1;var d=e.memoizedState;s.state=d,gl(e,i,s,n),l=e.memoizedState,o!==i||d!==l||er.current||Ci?(typeof c=="function"&&(Vc(e,r,c,i),l=e.memoizedState),(o=Ci||yp(e,r,o,i,d,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,kg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Dr(e.type,o),s.props=u,p=e.pendingProps,d=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=wr(l):(l=tr(r)?Sn:Ht.current,l=Sa(e,l));var m=r.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||d!==l)&&Mp(e,s,i,l),Ci=!1,d=e.memoizedState,s.state=d,gl(e,i,s,n);var _=e.memoizedState;o!==p||d!==_||er.current||Ci?(typeof m=="function"&&(Vc(e,r,m,i),_=e.memoizedState),(u=Ci||yp(e,r,u,i,d,_,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Yc(t,e,r,i,a,n)}function Yc(t,e,r,i,n,a){hv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return n&&dp(e,r,!1),Mi(t,e,a);i=e.stateNode,Ix.current=e;var o=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ea(e,t.child,null,a),e.child=Ea(e,null,o,a)):jt(t,e,o,a),e.memoizedState=i.state,n&&dp(e,r,!0),e.child}function dv(t){var e=t.stateNode;e.pendingContext?hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hp(t,e.context,!1),Wh(t,e.containerInfo)}function Rp(t,e,r,i,n){return ba(),zh(n),e.flags|=256,jt(t,e,r,i),e.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function Jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function pv(t,e,r){var i=e.pendingProps,n=st.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(n&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(n|=1),Ze(st,n&1),t===null)return Hc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,a?(i=e.mode,a=e.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Hl(s,i,0,null),t=gn(t,i,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Jc(r),e.memoizedState=qc,t):Qh(e,s));if(n=t.memoizedState,n!==null&&(o=n.dehydrated,o!==null))return Nx(t,e,s,i,o,n,r);if(a){a=i.fallback,s=e.mode,n=t.child,o=n.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==n?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Wi(n,l),i.subtreeFlags=n.subtreeFlags&14680064),o!==null?a=Wi(o,a):(a=gn(a,s,r,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,s=t.child.memoizedState,s=s===null?Jc(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~r,e.memoizedState=qc,i}return a=t.child,t=a.sibling,i=Wi(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function Qh(t,e){return e=Hl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function po(t,e,r,i){return i!==null&&zh(i),Ea(e,t.child,null,r),t=Qh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nx(t,e,r,i,n,a,s){if(r)return e.flags&256?(e.flags&=-257,i=Au(Error(ee(422))),po(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,n=e.mode,i=Hl({mode:"visible",children:i.children},n,0,null),a=gn(a,n,s,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Ea(e,t.child,null,s),e.child.memoizedState=Jc(s),e.memoizedState=qc,a);if(!(e.mode&1))return po(t,e,s,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(ee(419)),i=Au(a,i,void 0),po(t,e,s,i)}if(o=(s&t.childLanes)!==0,$t||o){if(i=Pt,i!==null){switch(s&-s){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(i.suspendedLanes|s)?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,yi(t,n),Br(i,t,n,-1))}return nd(),i=Au(Error(ee(421))),po(t,e,s,i)}return n.data==="$?"?(e.flags|=128,e.child=t.child,e=qx.bind(null,t),n._reactRetry=e,null):(t=a.treeContext,ur=Bi(n.nextSibling),hr=e,it=!0,Nr=null,t!==null&&(xr[yr++]=di,xr[yr++]=pi,xr[yr++]=bn,di=t.id,pi=t.overflow,bn=e),e=Qh(e,i.children),e.flags|=4096,e)}function Cp(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Gc(t.return,e,r)}function Ru(t,e,r,i,n){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:n}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=n)}function fv(t,e,r){var i=e.pendingProps,n=i.revealOrder,a=i.tail;if(jt(t,e,i.children,r),i=st.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cp(t,r,e);else if(t.tag===19)Cp(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ze(st,i),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(r=e.child,n=null;r!==null;)t=r.alternate,t!==null&&vl(t)===null&&(n=r),r=r.sibling;r=n,r===null?(n=e.child,e.child=null):(n=r.sibling,r.sibling=null),Ru(e,!1,n,r,a);break;case"backwards":for(r=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&vl(t)===null){e.child=n;break}t=n.sibling,n.sibling=r,r=n,n=t}Ru(e,!0,r,null,a);break;case"together":Ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ko(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),wn|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,r=Wi(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Wi(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function Ox(t,e,r){switch(e.tag){case 3:dv(e),ba();break;case 5:Bg(e);break;case 1:tr(e.type)&&hl(e);break;case 4:Wh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,n=e.memoizedProps.value;Ze(fl,i._currentValue),i._currentValue=n;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ze(st,st.current&1),e.flags|=128,null):r&e.child.childLanes?pv(t,e,r):(Ze(st,st.current&1),t=Mi(t,e,r),t!==null?t.sibling:null);Ze(st,st.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return fv(t,e,r);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Ze(st,st.current),i)break;return null;case 22:case 23:return e.lanes=0,cv(t,e,r)}return Mi(t,e,r)}var mv,Kc,gv,vv;mv=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Kc=function(){};gv=function(t,e,r,i){var n=t.memoizedProps;if(n!==i){t=e.stateNode,fn(Qr.current);var a=null;switch(r){case"input":n=_c(t,n),i=_c(t,i),a=[];break;case"select":n=ut({},n,{value:void 0}),i=ut({},i,{value:void 0}),a=[];break;case"textarea":n=Mc(t,n),i=Mc(t,i),a=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ul)}bc(r,i);var s;r=null;for(u in n)if(!i.hasOwnProperty(u)&&n.hasOwnProperty(u)&&n[u]!=null)if(u==="style"){var o=n[u];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ys.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var l=i[u];if(o=n!=null?n[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(a||(a=[]),a.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ys.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$e("scroll",t),a||o===l||(a=[])):(a=a||[]).push(u,l))}r&&(a=a||[]).push("style",r);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};vv=function(t,e,r,i){r!==i&&(e.flags|=4)};function Xa(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function Fx(t,e,r){var i=e.pendingProps;switch(Fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return tr(e.type)&&cl(),Ft(e),null;case 3:return i=e.stateNode,wa(),et(er),et(Ht),jh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nr!==null&&(ih(Nr),Nr=null))),Kc(t,e),Ft(e),null;case 5:Xh(e);var n=fn(Us.current);if(r=e.type,t!==null&&e.stateNode!=null)gv(t,e,r,i,n),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ft(e),null}if(t=fn(Qr.current),co(e)){i=e.stateNode,r=e.type;var a=e.memoizedProps;switch(i[Jr]=e,i[Ps]=a,t=(e.mode&1)!==0,r){case"dialog":$e("cancel",i),$e("close",i);break;case"iframe":case"object":case"embed":$e("load",i);break;case"video":case"audio":for(n=0;n<rs.length;n++)$e(rs[n],i);break;case"source":$e("error",i);break;case"img":case"image":case"link":$e("error",i),$e("load",i);break;case"details":$e("toggle",i);break;case"input":zd(i,a),$e("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},$e("invalid",i);break;case"textarea":Bd(i,a),$e("invalid",i)}bc(r,a),n=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),n=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),n=["children",""+o]):ys.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&$e("scroll",i)}switch(r){case"input":to(i),kd(i,a,!0);break;case"textarea":to(i),Hd(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=ul)}i=n,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=n.nodeType===9?n:n.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xm(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(r,{is:i.is}):(t=s.createElement(r),r==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,r),t[Jr]=e,t[Ps]=i,mv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ec(r,i),r){case"dialog":$e("cancel",t),$e("close",t),n=i;break;case"iframe":case"object":case"embed":$e("load",t),n=i;break;case"video":case"audio":for(n=0;n<rs.length;n++)$e(rs[n],t);n=i;break;case"source":$e("error",t),n=i;break;case"img":case"image":case"link":$e("error",t),$e("load",t),n=i;break;case"details":$e("toggle",t),n=i;break;case"input":zd(t,i),n=_c(t,i),$e("invalid",t);break;case"option":n=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},n=ut({},i,{value:void 0}),$e("invalid",t);break;case"textarea":Bd(t,i),n=Mc(t,i),$e("invalid",t);break;default:n=i}bc(r,n),o=n;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?qm(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jm(t,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ms(t,l):typeof l=="number"&&Ms(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ys.hasOwnProperty(a)?l!=null&&a==="onScroll"&&$e("scroll",t):l!=null&&Sh(t,a,l,s))}switch(r){case"input":to(t),kd(t,i,!1);break;case"textarea":to(t),Hd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qi(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?pa(t,!!i.multiple,a,!1):i.defaultValue!=null&&pa(t,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(t.onclick=ul)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)vv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(r=fn(Us.current),fn(Qr.current),co(e)){if(i=e.stateNode,r=e.memoizedProps,i[Jr]=e,(a=i.nodeValue!==r)&&(t=hr,t!==null))switch(t.tag){case 3:uo(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(i.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Jr]=e,e.stateNode=i}return Ft(e),null;case 13:if(et(st),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&ur!==null&&e.mode&1&&!(e.flags&128))Ng(),ba(),e.flags|=98560,a=!1;else if(a=co(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ee(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ee(317));a[Jr]=e}else ba(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),a=!1}else Nr!==null&&(ih(Nr),Nr=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||st.current&1?bt===0&&(bt=3):nd())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return wa(),Kc(t,e),t===null&&Rs(e.stateNode.containerInfo),Ft(e),null;case 10:return Hh(e.type._context),Ft(e),null;case 17:return tr(e.type)&&cl(),Ft(e),null;case 19:if(et(st),a=e.memoizedState,a===null)return Ft(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)Xa(a,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=vl(t),s!==null){for(e.flags|=128,Xa(a,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)a=r,t=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Ze(st,st.current&1|2),e.child}t=t.sibling}a.tail!==null&&pt()>Aa&&(e.flags|=128,i=!0,Xa(a,!1),e.lanes=4194304)}else{if(!i)if(t=vl(s),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Xa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!it)return Ft(e),null}else 2*pt()-a.renderingStartTime>Aa&&r!==1073741824&&(e.flags|=128,i=!0,Xa(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(r=a.last,r!==null?r.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=pt(),e.sibling=null,r=st.current,Ze(st,i?r&1|2:r&1),e):(Ft(e),null);case 22:case 23:return id(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?or&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function zx(t,e){switch(Fh(e),e.tag){case 1:return tr(e.type)&&cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wa(),et(er),et(Ht),jh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xh(e),null;case 13:if(et(st),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ba()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(st),null;case 4:return wa(),null;case 10:return Hh(e.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var fo=!1,Bt=!1,kx=typeof WeakSet=="function"?WeakSet:Set,ve=null;function la(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){ht(t,e,i)}else r.current=null}function _v(t,e,r){try{r()}catch(i){ht(t,e,i)}}var Pp=!1;function Bx(t,e){if(Ic=sl,t=Sg(),Nh(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var n=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,o=-1,l=-1,u=0,c=0,p=t,d=null;t:for(;;){for(var m;p!==r||n!==0&&p.nodeType!==3||(o=s+n),p!==a||i!==0&&p.nodeType!==3||(l=s+i),p.nodeType===3&&(s+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===r&&++u===n&&(o=s),d===a&&++c===i&&(l=s),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}r=o===-1||l===-1?null:{start:o,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Nc={focusedElem:t,selectionRange:r},sl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,g=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Dr(e.type,x),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){ht(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return _=Pp,Pp=!1,_}function cs(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&t)===t){var a=n.destroy;n.destroy=void 0,a!==void 0&&_v(e,r,a)}n=n.next}while(n!==i)}}function kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function Zc(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function xv(t){var e=t.alternate;e!==null&&(t.alternate=null,xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jr],delete e[Ps],delete e[zc],delete e[Sx],delete e[bx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yv(t){return t.tag===5||t.tag===3||t.tag===4}function Lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=ul));else if(i!==4&&(t=t.child,t!==null))for(Qc(t,e,r),t=t.sibling;t!==null;)Qc(t,e,r),t=t.sibling}function $c(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($c(t,e,r),t=t.sibling;t!==null;)$c(t,e,r),t=t.sibling}var Lt=null,Ir=!1;function bi(t,e,r){for(r=r.child;r!==null;)Mv(t,e,r),r=r.sibling}function Mv(t,e,r){if(Zr&&typeof Zr.onCommitFiberUnmount=="function")try{Zr.onCommitFiberUnmount(Ll,r)}catch{}switch(r.tag){case 5:Bt||la(r,e);case 6:var i=Lt,n=Ir;Lt=null,bi(t,e,r),Lt=i,Ir=n,Lt!==null&&(Ir?(t=Lt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Lt.removeChild(r.stateNode));break;case 18:Lt!==null&&(Ir?(t=Lt,r=r.stateNode,t.nodeType===8?Mu(t.parentNode,r):t.nodeType===1&&Mu(t,r),ws(t)):Mu(Lt,r.stateNode));break;case 4:i=Lt,n=Ir,Lt=r.stateNode.containerInfo,Ir=!0,bi(t,e,r),Lt=i,Ir=n;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var a=n,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&_v(r,e,s),n=n.next}while(n!==i)}bi(t,e,r);break;case 1:if(!Bt&&(la(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(o){ht(r,e,o)}bi(t,e,r);break;case 21:bi(t,e,r);break;case 22:r.mode&1?(Bt=(i=Bt)||r.memoizedState!==null,bi(t,e,r),Bt=i):bi(t,e,r);break;default:bi(t,e,r)}}function Up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new kx),e.forEach(function(i){var n=Jx.bind(null,t,i);r.has(i)||(r.add(i),i.then(n,n))})}}function Ar(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var n=r[i];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Lt=o.stateNode,Ir=!1;break e;case 3:Lt=o.stateNode.containerInfo,Ir=!0;break e;case 4:Lt=o.stateNode.containerInfo,Ir=!0;break e}o=o.return}if(Lt===null)throw Error(ee(160));Mv(a,s,n),Lt=null,Ir=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(u){ht(n,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sv(e,t),e=e.sibling}function Sv(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ar(e,t),jr(t),i&4){try{cs(3,t,t.return),kl(3,t)}catch(x){ht(t,t.return,x)}try{cs(5,t,t.return)}catch(x){ht(t,t.return,x)}}break;case 1:Ar(e,t),jr(t),i&512&&r!==null&&la(r,r.return);break;case 5:if(Ar(e,t),jr(t),i&512&&r!==null&&la(r,r.return),t.flags&32){var n=t.stateNode;try{Ms(n,"")}catch(x){ht(t,t.return,x)}}if(i&4&&(n=t.stateNode,n!=null)){var a=t.memoizedProps,s=r!==null?r.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Vm(n,a),Ec(o,s);var u=Ec(o,a);for(s=0;s<l.length;s+=2){var c=l[s],p=l[s+1];c==="style"?qm(n,p):c==="dangerouslySetInnerHTML"?jm(n,p):c==="children"?Ms(n,p):Sh(n,c,p,u)}switch(o){case"input":xc(n,a);break;case"textarea":Wm(n,a);break;case"select":var d=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?pa(n,!!a.multiple,m,!1):d!==!!a.multiple&&(a.defaultValue!=null?pa(n,!!a.multiple,a.defaultValue,!0):pa(n,!!a.multiple,a.multiple?[]:"",!1))}n[Ps]=a}catch(x){ht(t,t.return,x)}}break;case 6:if(Ar(e,t),jr(t),i&4){if(t.stateNode===null)throw Error(ee(162));n=t.stateNode,a=t.memoizedProps;try{n.nodeValue=a}catch(x){ht(t,t.return,x)}}break;case 3:if(Ar(e,t),jr(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{ws(e.containerInfo)}catch(x){ht(t,t.return,x)}break;case 4:Ar(e,t),jr(t);break;case 13:Ar(e,t),jr(t),n=t.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(td=pt())),i&4&&Up(t);break;case 22:if(c=r!==null&&r.memoizedState!==null,t.mode&1?(Bt=(u=Bt)||c,Ar(e,t),Bt=u):Ar(e,t),jr(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ve=t,c=t.child;c!==null;){for(p=ve=c;ve!==null;){switch(d=ve,m=d.child,d.tag){case 0:case 11:case 14:case 15:cs(4,d,d.return);break;case 1:la(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,r=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){ht(i,r,x)}}break;case 5:la(d,d.return);break;case 22:if(d.memoizedState!==null){Ip(p);continue}}m!==null?(m.return=d,ve=m):Ip(p)}c=c.sibling}e:for(c=null,p=t;;){if(p.tag===5){if(c===null){c=p;try{n=p.stateNode,u?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Ym("display",s))}catch(x){ht(t,t.return,x)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){ht(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ar(e,t),jr(t),i&4&&Up(t);break;case 21:break;default:Ar(e,t),jr(t)}}function jr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(yv(r)){var i=r;break e}r=r.return}throw Error(ee(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(Ms(n,""),i.flags&=-33);var a=Lp(t);$c(t,a,n);break;case 3:case 4:var s=i.stateNode.containerInfo,o=Lp(t);Qc(t,o,s);break;default:throw Error(ee(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hx(t,e,r){ve=t,bv(t)}function bv(t,e,r){for(var i=(t.mode&1)!==0;ve!==null;){var n=ve,a=n.child;if(n.tag===22&&i){var s=n.memoizedState!==null||fo;if(!s){var o=n.alternate,l=o!==null&&o.memoizedState!==null||Bt;o=fo;var u=Bt;if(fo=s,(Bt=l)&&!u)for(ve=n;ve!==null;)s=ve,l=s.child,s.tag===22&&s.memoizedState!==null?Np(n):l!==null?(l.return=s,ve=l):Np(n);for(;a!==null;)ve=a,bv(a),a=a.sibling;ve=n,fo=o,Bt=u}Dp(t)}else n.subtreeFlags&8772&&a!==null?(a.return=n,ve=a):Dp(t)}}function Dp(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(r===null)i.componentDidMount();else{var n=e.elementType===e.type?r.memoizedProps:Dr(e.type,r.memoizedProps);i.componentDidUpdate(n,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&vp(e,a,i);break;case 3:var s=e.updateQueue;if(s!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}vp(e,s,r)}break;case 5:var o=e.stateNode;if(r===null&&e.flags&4){r=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&ws(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Bt||e.flags&512&&Zc(e)}catch(d){ht(e,e.return,d)}}if(e===t){ve=null;break}if(r=e.sibling,r!==null){r.return=e.return,ve=r;break}ve=e.return}}function Ip(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var r=e.sibling;if(r!==null){r.return=e.return,ve=r;break}ve=e.return}}function Np(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{kl(4,e)}catch(l){ht(e,r,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var n=e.return;try{i.componentDidMount()}catch(l){ht(e,n,l)}}var a=e.return;try{Zc(e)}catch(l){ht(e,a,l)}break;case 5:var s=e.return;try{Zc(e)}catch(l){ht(e,s,l)}}}catch(l){ht(e,e.return,l)}if(e===t){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var Gx=Math.ceil,yl=Si.ReactCurrentDispatcher,$h=Si.ReactCurrentOwner,Er=Si.ReactCurrentBatchConfig,qe=0,Pt=null,yt=null,Dt=0,or=0,ua=Qi(0),bt=0,Os=null,wn=0,Bl=0,ed=0,hs=null,Qt=null,td=0,Aa=1/0,ui=null,Ml=!1,eh=null,Gi=null,mo=!1,Ii=null,Sl=0,ds=0,th=null,Zo=-1,Qo=0;function qt(){return qe&6?pt():Zo!==-1?Zo:Zo=pt()}function Vi(t){return t.mode&1?qe&2&&Dt!==0?Dt&-Dt:wx.transition!==null?(Qo===0&&(Qo=sg()),Qo):(t=Je,t!==0||(t=window.event,t=t===void 0?16:pg(t.type)),t):1}function Br(t,e,r,i){if(50<ds)throw ds=0,th=null,Error(ee(185));Ws(t,r,i),(!(qe&2)||t!==Pt)&&(t===Pt&&(!(qe&2)&&(Bl|=r),bt===4&&Li(t,Dt)),rr(t,i),r===1&&qe===0&&!(e.mode&1)&&(Aa=pt()+500,Ol&&$i()))}function rr(t,e){var r=t.callbackNode;w_(t,e);var i=al(t,t===Pt?Dt:0);if(i===0)r!==null&&Wd(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&Wd(r),e===1)t.tag===0?Ex(Op.bind(null,t)):Ug(Op.bind(null,t)),yx(function(){!(qe&6)&&$i()}),r=null;else{switch(og(i)){case 1:r=Ah;break;case 4:r=ng;break;case 16:r=nl;break;case 536870912:r=ag;break;default:r=nl}r=Lv(r,Ev.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Ev(t,e){if(Zo=-1,Qo=0,qe&6)throw Error(ee(327));var r=t.callbackNode;if(_a()&&t.callbackNode!==r)return null;var i=al(t,t===Pt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bl(t,i);else{e=i;var n=qe;qe|=2;var a=Tv();(Pt!==t||Dt!==e)&&(ui=null,Aa=pt()+500,mn(t,e));do try{Xx();break}catch(o){wv(t,o)}while(1);Bh(),yl.current=a,qe=n,yt!==null?e=0:(Pt=null,Dt=0,e=bt)}if(e!==0){if(e===2&&(n=Cc(t),n!==0&&(i=n,e=rh(t,n))),e===1)throw r=Os,mn(t,0),Li(t,i),rr(t,pt()),r;if(e===6)Li(t,i);else{if(n=t.current.alternate,!(i&30)&&!Vx(n)&&(e=bl(t,i),e===2&&(a=Cc(t),a!==0&&(i=a,e=rh(t,a))),e===1))throw r=Os,mn(t,0),Li(t,i),rr(t,pt()),r;switch(t.finishedWork=n,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:ln(t,Qt,ui);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=td+500-pt(),10<e)){if(al(t,0)!==0)break;if(n=t.suspendedLanes,(n&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&n;break}t.timeoutHandle=Fc(ln.bind(null,t,Qt,ui),e);break}ln(t,Qt,ui);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,n=-1;0<i;){var s=31-kr(i);a=1<<s,s=e[s],s>n&&(n=s),i&=~a}if(i=n,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Gx(i/1960))-i,10<i){t.timeoutHandle=Fc(ln.bind(null,t,Qt,ui),i);break}ln(t,Qt,ui);break;case 5:ln(t,Qt,ui);break;default:throw Error(ee(329))}}}return rr(t,pt()),t.callbackNode===r?Ev.bind(null,t):null}function rh(t,e){var r=hs;return t.current.memoizedState.isDehydrated&&(mn(t,e).flags|=256),t=bl(t,e),t!==2&&(e=Qt,Qt=r,e!==null&&ih(e)),t}function ih(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function Vx(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var n=r[i],a=n.getSnapshot;n=n.value;try{if(!Vr(a(),n))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~ed,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-kr(e),i=1<<r;t[r]=-1,e&=~i}}function Op(t){if(qe&6)throw Error(ee(327));_a();var e=al(t,0);if(!(e&1))return rr(t,pt()),null;var r=bl(t,e);if(t.tag!==0&&r===2){var i=Cc(t);i!==0&&(e=i,r=rh(t,i))}if(r===1)throw r=Os,mn(t,0),Li(t,e),rr(t,pt()),r;if(r===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ln(t,Qt,ui),rr(t,pt()),null}function rd(t,e){var r=qe;qe|=1;try{return t(e)}finally{qe=r,qe===0&&(Aa=pt()+500,Ol&&$i())}}function Tn(t){Ii!==null&&Ii.tag===0&&!(qe&6)&&_a();var e=qe;qe|=1;var r=Er.transition,i=Je;try{if(Er.transition=null,Je=1,t)return t()}finally{Je=i,Er.transition=r,qe=e,!(qe&6)&&$i()}}function id(){or=ua.current,et(ua)}function mn(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,xx(r)),yt!==null)for(r=yt.return;r!==null;){var i=r;switch(Fh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cl();break;case 3:wa(),et(er),et(Ht),jh();break;case 5:Xh(i);break;case 4:wa();break;case 13:et(st);break;case 19:et(st);break;case 10:Hh(i.type._context);break;case 22:case 23:id()}r=r.return}if(Pt=t,yt=t=Wi(t.current,null),Dt=or=e,bt=0,Os=null,ed=Bl=wn=0,Qt=hs=null,pn!==null){for(e=0;e<pn.length;e++)if(r=pn[e],i=r.interleaved,i!==null){r.interleaved=null;var n=i.next,a=r.pending;if(a!==null){var s=a.next;a.next=n,i.next=s}r.pending=i}pn=null}return t}function wv(t,e){do{var r=yt;try{if(Bh(),qo.current=xl,_l){for(var i=lt.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}_l=!1}if(En=0,Rt=St=lt=null,us=!1,Ds=0,$h.current=null,r===null||r.return===null){bt=1,Os=e,yt=null;break}e:{var a=t,s=r.return,o=r,l=e;if(e=Dt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=bp(s);if(m!==null){m.flags&=-257,Ep(m,s,o,a,e),m.mode&1&&Sp(a,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Sp(a,u,e),nd();break e}l=Error(ee(426))}}else if(it&&o.mode&1){var g=bp(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Ep(g,s,o,a,e),zh(Ta(l,o));break e}}a=l=Ta(l,o),bt!==4&&(bt=2),hs===null?hs=[a]:hs.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var h=ov(a,l,e);gp(a,h);break e;case 1:o=l;var v=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Gi===null||!Gi.has(f)))){a.flags|=65536,e&=-e,a.lanes|=e;var y=lv(a,o,e);gp(a,y);break e}}a=a.return}while(a!==null)}Rv(r)}catch(b){e=b,yt===r&&r!==null&&(yt=r=r.return);continue}break}while(1)}function Tv(){var t=yl.current;return yl.current=xl,t===null?xl:t}function nd(){(bt===0||bt===3||bt===2)&&(bt=4),Pt===null||!(wn&268435455)&&!(Bl&268435455)||Li(Pt,Dt)}function bl(t,e){var r=qe;qe|=2;var i=Tv();(Pt!==t||Dt!==e)&&(ui=null,mn(t,e));do try{Wx();break}catch(n){wv(t,n)}while(1);if(Bh(),qe=r,yl.current=i,yt!==null)throw Error(ee(261));return Pt=null,Dt=0,bt}function Wx(){for(;yt!==null;)Av(yt)}function Xx(){for(;yt!==null&&!g_();)Av(yt)}function Av(t){var e=Pv(t.alternate,t,or);t.memoizedProps=t.pendingProps,e===null?Rv(t):yt=e,$h.current=null}function Rv(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=zx(r,e),r!==null){r.flags&=32767,yt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,yt=null;return}}else if(r=Fx(r,e,or),r!==null){yt=r;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);bt===0&&(bt=5)}function ln(t,e,r){var i=Je,n=Er.transition;try{Er.transition=null,Je=1,jx(t,e,r,i)}finally{Er.transition=n,Je=i}return null}function jx(t,e,r,i){do _a();while(Ii!==null);if(qe&6)throw Error(ee(327));r=t.finishedWork;var n=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(T_(t,a),t===Pt&&(yt=Pt=null,Dt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||mo||(mo=!0,Lv(nl,function(){return _a(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Er.transition,Er.transition=null;var s=Je;Je=1;var o=qe;qe|=4,$h.current=null,Bx(t,r),Sv(r,t),dx(Nc),sl=!!Ic,Nc=Ic=null,t.current=r,Hx(r),v_(),qe=o,Je=s,Er.transition=a}else t.current=r;if(mo&&(mo=!1,Ii=t,Sl=n),a=t.pendingLanes,a===0&&(Gi=null),y_(r.stateNode),rr(t,pt()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)n=e[r],i(n.value,{componentStack:n.stack,digest:n.digest});if(Ml)throw Ml=!1,t=eh,eh=null,t;return Sl&1&&t.tag!==0&&_a(),a=t.pendingLanes,a&1?t===th?ds++:(ds=0,th=t):ds=0,$i(),null}function _a(){if(Ii!==null){var t=og(Sl),e=Er.transition,r=Je;try{if(Er.transition=null,Je=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,Sl=0,qe&6)throw Error(ee(331));var n=qe;for(qe|=4,ve=t.current;ve!==null;){var a=ve,s=a.child;if(ve.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(ve=u;ve!==null;){var c=ve;switch(c.tag){case 0:case 11:case 15:cs(8,c,a)}var p=c.child;if(p!==null)p.return=c,ve=p;else for(;ve!==null;){c=ve;var d=c.sibling,m=c.return;if(xv(c),c===u){ve=null;break}if(d!==null){d.return=m,ve=d;break}ve=m}}}var _=a.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}ve=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,ve=s;else e:for(;ve!==null;){if(a=ve,a.flags&2048)switch(a.tag){case 0:case 11:case 15:cs(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,ve=h;break e}ve=a.return}}var v=t.current;for(ve=v;ve!==null;){s=ve;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,ve=f;else e:for(s=v;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:kl(9,o)}}catch(b){ht(o,o.return,b)}if(o===s){ve=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ve=y;break e}ve=o.return}}if(qe=n,$i(),Zr&&typeof Zr.onPostCommitFiberRoot=="function")try{Zr.onPostCommitFiberRoot(Ll,t)}catch{}i=!0}return i}finally{Je=r,Er.transition=e}}return!1}function Fp(t,e,r){e=Ta(r,e),e=ov(t,e,1),t=Hi(t,e,1),e=qt(),t!==null&&(Ws(t,1,e),rr(t,e))}function ht(t,e,r){if(t.tag===3)Fp(t,t,r);else for(;e!==null;){if(e.tag===3){Fp(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=Ta(r,t),t=lv(e,t,1),e=Hi(e,t,1),t=qt(),e!==null&&(Ws(e,1,t),rr(e,t));break}}e=e.return}}function Yx(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&r,Pt===t&&(Dt&r)===r&&(bt===4||bt===3&&(Dt&130023424)===Dt&&500>pt()-td?mn(t,0):ed|=r),rr(t,e)}function Cv(t,e){e===0&&(t.mode&1?(e=no,no<<=1,!(no&130023424)&&(no=4194304)):e=1);var r=qt();t=yi(t,e),t!==null&&(Ws(t,e,r),rr(t,r))}function qx(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Cv(t,r)}function Jx(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(r=n.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Cv(t,r)}var Pv;Pv=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||er.current)$t=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return $t=!1,Ox(t,e,r);$t=!!(t.flags&131072)}else $t=!1,it&&e.flags&1048576&&Dg(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ko(t,e),t=e.pendingProps;var n=Sa(e,Ht.current);va(e,r),n=qh(null,e,i,t,n,r);var a=Jh();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tr(i)?(a=!0,hl(e)):a=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Vh(e),n.updater=zl,e.stateNode=n,n._reactInternals=e,Wc(e,i,t,r),e=Yc(null,e,i,!0,a,r)):(e.tag=0,it&&a&&Oh(e),jt(null,e,n,r),e=e.child),e;case 16:i=e.elementType;e:{switch(Ko(t,e),t=e.pendingProps,n=i._init,i=n(i._payload),e.type=i,n=e.tag=Zx(i),t=Dr(i,t),n){case 0:e=jc(null,e,i,t,r);break e;case 1:e=Ap(null,e,i,t,r);break e;case 11:e=wp(null,e,i,t,r);break e;case 14:e=Tp(null,e,i,Dr(i.type,t),r);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Dr(i,n),jc(t,e,i,n,r);case 1:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Dr(i,n),Ap(t,e,i,n,r);case 3:e:{if(dv(e),t===null)throw Error(ee(387));i=e.pendingProps,a=e.memoizedState,n=a.element,kg(t,e),gl(e,i,null,r);var s=e.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){n=Ta(Error(ee(423)),e),e=Rp(t,e,i,r,n);break e}else if(i!==n){n=Ta(Error(ee(424)),e),e=Rp(t,e,i,r,n);break e}else for(ur=Bi(e.stateNode.containerInfo.firstChild),hr=e,it=!0,Nr=null,r=Fg(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ba(),i===n){e=Mi(t,e,r);break e}jt(t,e,i,r)}e=e.child}return e;case 5:return Bg(e),t===null&&Hc(e),i=e.type,n=e.pendingProps,a=t!==null?t.memoizedProps:null,s=n.children,Oc(i,n)?s=null:a!==null&&Oc(i,a)&&(e.flags|=32),hv(t,e),jt(t,e,s,r),e.child;case 6:return t===null&&Hc(e),null;case 13:return pv(t,e,r);case 4:return Wh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ea(e,null,i,r):jt(t,e,i,r),e.child;case 11:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Dr(i,n),wp(t,e,i,n,r);case 7:return jt(t,e,e.pendingProps,r),e.child;case 8:return jt(t,e,e.pendingProps.children,r),e.child;case 12:return jt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,n=e.pendingProps,a=e.memoizedProps,s=n.value,Ze(fl,i._currentValue),i._currentValue=s,a!==null)if(Vr(a.value,s)){if(a.children===n.children&&!er.current){e=Mi(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=mi(-1,r&-r),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),Gc(a.return,r,e),o.lanes|=r;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(ee(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),Gc(s,r,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}jt(t,e,n.children,r),e=e.child}return e;case 9:return n=e.type,i=e.pendingProps.children,va(e,r),n=wr(n),i=i(n),e.flags|=1,jt(t,e,i,r),e.child;case 14:return i=e.type,n=Dr(i,e.pendingProps),n=Dr(i.type,n),Tp(t,e,i,n,r);case 15:return uv(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Dr(i,n),Ko(t,e),e.tag=1,tr(i)?(t=!0,hl(e)):t=!1,va(e,r),sv(e,i,n),Wc(e,i,n,r),Yc(null,e,i,!0,t,r);case 19:return fv(t,e,r);case 22:return cv(t,e,r)}throw Error(ee(156,e.tag))};function Lv(t,e){return ig(t,e)}function Kx(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(t,e,r,i){return new Kx(t,e,r,i)}function ad(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zx(t){if(typeof t=="function")return ad(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Eh)return 11;if(t===wh)return 14}return 2}function Wi(t,e){var r=t.alternate;return r===null?(r=br(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function $o(t,e,r,i,n,a){var s=2;if(i=t,typeof t=="function")ad(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case $n:return gn(r.children,n,a,e);case bh:s=8,n|=8;break;case fc:return t=br(12,r,e,n|2),t.elementType=fc,t.lanes=a,t;case mc:return t=br(13,r,e,n),t.elementType=mc,t.lanes=a,t;case gc:return t=br(19,r,e,n),t.elementType=gc,t.lanes=a,t;case Bm:return Hl(r,n,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zm:s=10;break e;case km:s=9;break e;case Eh:s=11;break e;case wh:s=14;break e;case Ri:s=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=br(s,r,e,n),e.elementType=t,e.type=i,e.lanes=a,e}function gn(t,e,r,i){return t=br(7,t,i,e),t.lanes=r,t}function Hl(t,e,r,i){return t=br(22,t,i,e),t.elementType=Bm,t.lanes=r,t.stateNode={isHidden:!1},t}function Cu(t,e,r){return t=br(6,t,null,e),t.lanes=r,t}function Pu(t,e,r){return e=br(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qx(t,e,r,i,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cu(0),this.expirationTimes=cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function sd(t,e,r,i,n,a,s,o,l){return t=new Qx(t,e,r,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=br(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vh(a),t}function $x(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function Uv(t){if(!t)return Ji;t=t._reactInternals;e:{if(Pn(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tr(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var r=t.type;if(tr(r))return Lg(t,r,e)}return e}function Dv(t,e,r,i,n,a,s,o,l){return t=sd(r,i,!0,t,n,a,s,o,l),t.context=Uv(null),r=t.current,i=qt(),n=Vi(r),a=mi(i,n),a.callback=e??null,Hi(r,a,n),t.current.lanes=n,Ws(t,n,i),rr(t,i),t}function Gl(t,e,r,i){var n=e.current,a=qt(),s=Vi(n);return r=Uv(r),e.context===null?e.context=r:e.pendingContext=r,e=mi(a,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(n,e,s),t!==null&&(Br(t,n,s,a),Yo(t,n,s)),s}function El(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function od(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function ey(){return null}var Iv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ld(t){this._internalRoot=t}Vl.prototype.render=ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Gl(t,e,null,null)};Vl.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tn(function(){Gl(null,t,null,null)}),e[xi]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=cg();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Pi.length&&e!==0&&e<Pi[r].priority;r++);Pi.splice(r,0,t),r===0&&dg(t)}};function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kp(){}function ty(t,e,r,i,n){if(n){if(typeof i=="function"){var a=i;i=function(){var u=El(s);a.call(u)}}var s=Dv(e,i,t,0,null,!1,!1,"",kp);return t._reactRootContainer=s,t[xi]=s.current,Rs(t.nodeType===8?t.parentNode:t),Tn(),s}for(;n=t.lastChild;)t.removeChild(n);if(typeof i=="function"){var o=i;i=function(){var u=El(l);o.call(u)}}var l=sd(t,0,!1,null,null,!1,!1,"",kp);return t._reactRootContainer=l,t[xi]=l.current,Rs(t.nodeType===8?t.parentNode:t),Tn(function(){Gl(e,l,r,i)}),l}function Xl(t,e,r,i,n){var a=r._reactRootContainer;if(a){var s=a;if(typeof n=="function"){var o=n;n=function(){var l=El(s);o.call(l)}}Gl(e,s,t,n)}else s=ty(r,e,t,n,i);return El(s)}lg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=ts(e.pendingLanes);r!==0&&(Rh(e,r|1),rr(e,pt()),!(qe&6)&&(Aa=pt()+500,$i()))}break;case 13:Tn(function(){var i=yi(t,1);if(i!==null){var n=qt();Br(i,t,1,n)}}),od(t,1)}};Ch=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var r=qt();Br(e,t,134217728,r)}od(t,134217728)}};ug=function(t){if(t.tag===13){var e=Vi(t),r=yi(t,e);if(r!==null){var i=qt();Br(r,t,e,i)}od(t,e)}};cg=function(){return Je};hg=function(t,e){var r=Je;try{return Je=t,e()}finally{Je=r}};Tc=function(t,e,r){switch(e){case"input":if(xc(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var n=Nl(i);if(!n)throw Error(ee(90));Gm(i),xc(i,n)}}}break;case"textarea":Wm(t,r);break;case"select":e=r.value,e!=null&&pa(t,!!r.multiple,e,!1)}};Zm=rd;Qm=Tn;var ry={usingClientEntryPoint:!1,Events:[js,ia,Nl,Jm,Km,rd]},ja={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iy={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tg(t),t===null?null:t.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||ey,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Ll=go.inject(iy),Zr=go}catch{}}fr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ry;fr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(e))throw Error(ee(200));return $x(t,e,null,r)};fr.createRoot=function(t,e){if(!ud(t))throw Error(ee(299));var r=!1,i="",n=Iv;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=sd(t,1,!1,null,null,r,!1,i,n),t[xi]=e.current,Rs(t.nodeType===8?t.parentNode:t),new ld(e)};fr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=tg(e),t=t===null?null:t.stateNode,t};fr.flushSync=function(t){return Tn(t)};fr.hydrate=function(t,e,r){if(!Wl(e))throw Error(ee(200));return Xl(null,t,e,!0,r)};fr.hydrateRoot=function(t,e,r){if(!ud(t))throw Error(ee(405));var i=r!=null&&r.hydratedSources||null,n=!1,a="",s=Iv;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),e=Dv(e,null,t,1,r??null,n,!1,a,s),t[xi]=e.current,Rs(t),i)for(t=0;t<i.length;t++)r=i[t],n=r._getVersion,n=n(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,n]:e.mutableSourceEagerHydrationData.push(r,n);return new Vl(e)};fr.render=function(t,e,r){if(!Wl(e))throw Error(ee(200));return Xl(null,t,e,!1,r)};fr.unmountComponentAtNode=function(t){if(!Wl(t))throw Error(ee(40));return t._reactRootContainer?(Tn(function(){Xl(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};fr.unstable_batchedUpdates=rd;fr.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!Wl(r))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Xl(t,e,r,!1,i)};fr.version="18.3.1-next-f1338f8080-20240426";function Nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv)}catch(t){console.error(t)}}Nv(),Im.exports=fr;var ny=Im.exports,Bp=ny;dc.createRoot=Bp.createRoot,dc.hydrateRoot=Bp.hydrateRoot;/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const cd="156",ay=0,Hp=1,sy=2,Ov=1,oy=2,li=3,Ki=0,ir=1,hi=2,gi=0,xa=1,wl=2,Gp=3,Vp=4,ly=5,Kn=100,uy=101,cy=102,Wp=103,Xp=104,hy=200,dy=201,py=202,fy=203,Fv=204,zv=205,my=206,gy=207,vy=208,_y=209,xy=210,yy=0,My=1,Sy=2,nh=3,by=4,Ey=5,wy=6,Ty=7,hd=0,Ay=1,Ry=2,Xi=0,Cy=1,Py=2,Ly=3,Uy=4,Dy=5,kv=300,Ra=301,Ca=302,ah=303,sh=304,jl=306,oh=1e3,Fr=1001,lh=1002,Yt=1003,jp=1004,Lu=1005,Mr=1006,Iy=1007,Fs=1008,ji=1009,Ny=1010,Oy=1011,dd=1012,Bv=1013,Ni=1014,Oi=1015,vi=1016,Hv=1017,Gv=1018,vn=1020,Fy=1021,zr=1023,zy=1024,ky=1025,_n=1026,Pa=1027,By=1028,Vv=1029,Hy=1030,Wv=1031,Xv=1033,Uu=33776,Du=33777,Iu=33778,Nu=33779,Yp=35840,qp=35841,Jp=35842,Kp=35843,Gy=36196,Zp=37492,Qp=37496,$p=37808,ef=37809,tf=37810,rf=37811,nf=37812,af=37813,sf=37814,of=37815,lf=37816,uf=37817,cf=37818,hf=37819,df=37820,pf=37821,Ou=36492,ff=36494,mf=36495,Vy=36283,gf=36284,vf=36285,_f=36286,jv=3e3,xn=3001,Wy=3200,Xy=3201,pd=0,jy=1,yn="",rt="srgb",$r="srgb-linear",Yl="display-p3",Fu=7680,Yy=519,qy=512,Jy=513,Ky=514,Zy=515,Qy=516,$y=517,e1=518,t1=519,xf=35044,yf="300 es",uh=1035,fi=2e3,Tl=2001;class Oa{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(r)===-1&&i[e].push(r)}hasEventListener(e,r){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(r)!==-1}removeEventListener(e,r){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mf=1234567;const ps=Math.PI/180,zs=180/Math.PI;function Ln(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[r&63|128]+zt[r>>8&255]+"-"+zt[r>>16&255]+zt[r>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Ut(t,e,r){return Math.max(e,Math.min(r,t))}function fd(t,e){return(t%e+e)%e}function r1(t,e,r,i,n){return i+(t-e)*(n-i)/(r-e)}function i1(t,e,r){return t!==e?(r-t)/(e-t):0}function fs(t,e,r){return(1-r)*t+r*e}function n1(t,e,r,i){return fs(t,e,1-Math.exp(-r*i))}function a1(t,e=1){return e-Math.abs(fd(t,e*2)-e)}function s1(t,e,r){return t<=e?0:t>=r?1:(t=(t-e)/(r-e),t*t*(3-2*t))}function o1(t,e,r){return t<=e?0:t>=r?1:(t=(t-e)/(r-e),t*t*t*(t*(t*6-15)+10))}function l1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function u1(t,e){return t+Math.random()*(e-t)}function c1(t){return t*(.5-Math.random())}function h1(t){t!==void 0&&(Mf=t);let e=Mf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function d1(t){return t*ps}function p1(t){return t*zs}function ch(t){return(t&t-1)===0&&t!==0}function f1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Al(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function m1(t,e,r,i,n){const a=Math.cos,s=Math.sin,o=a(r/2),l=s(r/2),u=a((e+i)/2),c=s((e+i)/2),p=a((e-i)/2),d=s((e-i)/2),m=a((i-e)/2),_=s((i-e)/2);switch(n){case"XYX":t.set(o*c,l*p,l*d,o*u);break;case"YZY":t.set(l*d,o*c,l*p,o*u);break;case"ZXZ":t.set(l*p,l*d,o*c,o*u);break;case"XZX":t.set(o*c,l*_,l*m,o*u);break;case"YXY":t.set(l*m,o*c,l*_,o*u);break;case"ZYZ":t.set(l*_,l*m,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Zn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Wt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Mn={DEG2RAD:ps,RAD2DEG:zs,generateUUID:Ln,clamp:Ut,euclideanModulo:fd,mapLinear:r1,inverseLerp:i1,lerp:fs,damp:n1,pingpong:a1,smoothstep:s1,smootherstep:o1,randInt:l1,randFloat:u1,randFloatSpread:c1,seededRandom:h1,degToRad:d1,radToDeg:p1,isPowerOfTwo:ch,ceilPowerOfTwo:f1,floorPowerOfTwo:Al,setQuaternionFromProperEuler:m1,normalize:Wt,denormalize:Zn};class ne{constructor(e=0,r=0){ne.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,i=this.y,n=e.elements;return this.x=n[0]*r+n[3]*i+n[6],this.y=n[1]*r+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y;return r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const i=Math.cos(r),n=Math.sin(r),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,r,i,n,a,s,o,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,s,o,l,u)}set(e,r,i,n,a,s,o,l,u){const c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=r,c[4]=a,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(e,r,i){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],c=i[4],p=i[7],d=i[2],m=i[5],_=i[8],x=n[0],g=n[3],h=n[6],v=n[1],f=n[4],y=n[7],b=n[2],w=n[5],T=n[8];return a[0]=s*x+o*v+l*b,a[3]=s*g+o*f+l*w,a[6]=s*h+o*y+l*T,a[1]=u*x+c*v+p*b,a[4]=u*g+c*f+p*w,a[7]=u*h+c*y+p*T,a[2]=d*x+m*v+_*b,a[5]=d*g+m*f+_*w,a[8]=d*h+m*y+_*T,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return r*s*c-r*o*u-i*a*c+i*o*l+n*a*u-n*s*l}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8],p=c*s-o*u,d=o*l-c*a,m=u*a-s*l,_=r*p+i*d+n*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=p*x,e[1]=(n*u-c*i)*x,e[2]=(o*i-n*s)*x,e[3]=d*x,e[4]=(c*r-n*l)*x,e[5]=(n*a-o*r)*x,e[6]=m*x,e[7]=(i*l-u*r)*x,e[8]=(s*r-i*a)*x,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,i,n,a,s,o){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*s+u*o)+s+e,-n*u,n*l,-n*(-u*s+l*o)+o+r,0,0,1),this}scale(e,r){return this.premultiply(zu.makeScale(e,r)),this}rotate(e){return this.premultiply(zu.makeRotation(-e)),this}translate(e,r){return this.premultiply(zu.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<9;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<9;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zu=new Ge;function Yv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Rl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function g1(){const t=Rl("canvas");return t.style.display="block",t}const Sf={};function ms(t){t in Sf||(Sf[t]=!0,console.warn(t))}function ya(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ku(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const v1=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),_1=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function x1(t){return t.convertSRGBToLinear().applyMatrix3(_1)}function y1(t){return t.applyMatrix3(v1).convertLinearToSRGB()}const M1={[$r]:t=>t,[rt]:t=>t.convertSRGBToLinear(),[Yl]:x1},S1={[$r]:t=>t,[rt]:t=>t.convertLinearToSRGB(),[Yl]:y1},Rr={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return $r},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,r){if(this.enabled===!1||e===r||!e||!r)return t;const i=M1[e],n=S1[r];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${r}".`);return n(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let In;class qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{In===void 0&&(In=Rl("canvas")),In.width=e.width,In.height=e.height;const i=In.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=In}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=Rl("canvas");r.width=e.width,r.height=e.height;const i=r.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=ya(a[s]/255)*255;return i.putImageData(n,0,0),r}else if(e.data){const r=e.data.slice(0);for(let i=0;i<r.length;i++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[i]=Math.floor(ya(r[i]/255)*255):r[i]=ya(r[i]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b1=0;class Jv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Ln(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(Bu(n[s].image)):a.push(Bu(n[s]))}else a=Bu(n);i.url=a}return r||(e.images[this.uuid]=i),i}}function Bu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E1=0;class dr extends Oa{constructor(e=dr.DEFAULT_IMAGE,r=dr.DEFAULT_MAPPING,i=Fr,n=Fr,a=Mr,s=Fs,o=zr,l=ji,u=dr.DEFAULT_ANISOTROPY,c=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Ln(),this.name="",this.source=new Jv(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===xn?rt:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oh:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oh:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rt?xn:jv}set encoding(e){ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xn?rt:yn}}dr.DEFAULT_IMAGE=null;dr.DEFAULT_MAPPING=kv;dr.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,r=0,i=0,n=1){Ct.prototype.isVector4=!0,this.x=e,this.y=r,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,i,n){return this.x=e,this.y=r,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*r+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*r+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*r+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*r+s[7]*i+s[11]*n+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,i,n,a;const s=e.elements,o=s[0],l=s[4],u=s[8],c=s[1],p=s[5],d=s[9],m=s[2],_=s[6],x=s[10];if(Math.abs(l-c)<.01&&Math.abs(u-m)<.01&&Math.abs(d-_)<.01){if(Math.abs(l+c)<.1&&Math.abs(u+m)<.1&&Math.abs(d+_)<.1&&Math.abs(o+p+x-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const h=(o+1)/2,v=(p+1)/2,f=(x+1)/2,y=(l+c)/4,b=(u+m)/4,w=(d+_)/4;return h>v&&h>f?h<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(h),n=y/i,a=b/i):v>f?v<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(v),i=y/n,a=w/n):f<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(f),i=b/a,n=w/a),this.set(i,n,a,r),this}let g=Math.sqrt((_-d)*(_-d)+(u-m)*(u-m)+(c-l)*(c-l));return Math.abs(g)<.001&&(g=1),this.x=(_-d)/g,this.y=(u-m)/g,this.z=(c-l)/g,this.w=Math.acos((o+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this.w=Math.max(e.w,Math.min(r.w,this.w)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this.w=Math.max(e,Math.min(r,this.w)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this.w=e.w+(r.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w1 extends Oa{constructor(e=1,r=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=1,this.scissor=new Ct(0,0,e,r),this.scissorTest=!1,this.viewport=new Ct(0,0,e,r);const n={width:e,height:r,depth:1};i.encoding!==void 0&&(ms("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xn?rt:yn),this.texture=new dr(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Mr,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,r,i=1){(this.width!==e||this.height!==r||this.depth!==i)&&(this.width=e,this.height=r,this.depth=i,this.texture.image.width=e,this.texture.image.height=r,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const r=Object.assign({},e.texture.image);return this.texture.source=new Jv(r),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hr extends w1{constructor(e=1,r=1,i={}){super(e,r,i),this.isWebGLRenderTarget=!0}}class Kv extends dr{constructor(e=null,r=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class T1 extends dr{constructor(e=null,r=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qs{constructor(e=0,r=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=i,this._w=n}static slerpFlat(e,r,i,n,a,s,o){let l=i[n+0],u=i[n+1],c=i[n+2],p=i[n+3];const d=a[s+0],m=a[s+1],_=a[s+2],x=a[s+3];if(o===0){e[r+0]=l,e[r+1]=u,e[r+2]=c,e[r+3]=p;return}if(o===1){e[r+0]=d,e[r+1]=m,e[r+2]=_,e[r+3]=x;return}if(p!==x||l!==d||u!==m||c!==_){let g=1-o;const h=l*d+u*m+c*_+p*x,v=h>=0?1:-1,f=1-h*h;if(f>Number.EPSILON){const b=Math.sqrt(f),w=Math.atan2(b,h*v);g=Math.sin(g*w)/b,o=Math.sin(o*w)/b}const y=o*v;if(l=l*g+d*y,u=u*g+m*y,c=c*g+_*y,p=p*g+x*y,g===1-o){const b=1/Math.sqrt(l*l+u*u+c*c+p*p);l*=b,u*=b,c*=b,p*=b}}e[r]=l,e[r+1]=u,e[r+2]=c,e[r+3]=p}static multiplyQuaternionsFlat(e,r,i,n,a,s){const o=i[n],l=i[n+1],u=i[n+2],c=i[n+3],p=a[s],d=a[s+1],m=a[s+2],_=a[s+3];return e[r]=o*_+c*p+l*m-u*d,e[r+1]=l*_+c*d+u*p-o*m,e[r+2]=u*_+c*m+o*d-l*p,e[r+3]=c*_-o*p-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,i,n){return this._x=e,this._y=r,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r){const i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(n/2),p=o(a/2),d=l(i/2),m=l(n/2),_=l(a/2);switch(s){case"XYZ":this._x=d*c*p+u*m*_,this._y=u*m*p-d*c*_,this._z=u*c*_+d*m*p,this._w=u*c*p-d*m*_;break;case"YXZ":this._x=d*c*p+u*m*_,this._y=u*m*p-d*c*_,this._z=u*c*_-d*m*p,this._w=u*c*p+d*m*_;break;case"ZXY":this._x=d*c*p-u*m*_,this._y=u*m*p+d*c*_,this._z=u*c*_+d*m*p,this._w=u*c*p-d*m*_;break;case"ZYX":this._x=d*c*p-u*m*_,this._y=u*m*p+d*c*_,this._z=u*c*_-d*m*p,this._w=u*c*p+d*m*_;break;case"YZX":this._x=d*c*p+u*m*_,this._y=u*m*p+d*c*_,this._z=u*c*_-d*m*p,this._w=u*c*p-d*m*_;break;case"XZY":this._x=d*c*p-u*m*_,this._y=u*m*p-d*c*_,this._z=u*c*_+d*m*p,this._w=u*c*p+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return r!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const i=r/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,i=r[0],n=r[4],a=r[8],s=r[1],o=r[5],l=r[9],u=r[2],c=r[6],p=r[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(a-u)*m,this._z=(s-n)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(c-l)/m,this._x=.25*m,this._y=(n+s)/m,this._z=(a+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(a-u)/m,this._x=(n+s)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(s-n)/m,this._x=(a+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let i=e.dot(r)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,r){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,r/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const i=e._x,n=e._y,a=e._z,s=e._w,o=r._x,l=r._y,u=r._z,c=r._w;return this._x=i*c+s*o+n*u-a*l,this._y=n*c+s*l+a*o-i*u,this._z=a*c+s*u+i*l-n*o,this._w=s*c-i*o-n*l-a*u,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-r;return this._w=m*s+r*this._w,this._x=m*i+r*this._x,this._y=m*n+r*this._y,this._z=m*a+r*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),p=Math.sin((1-r)*c)/u,d=Math.sin(r*c)/u;return this._w=s*p+this._w*d,this._x=i*p+this._x*d,this._y=n*p+this._y*d,this._z=a*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,r,i){return this.copy(e).slerp(r,i)}random(){const e=Math.random(),r=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(r*Math.cos(n),i*Math.sin(a),i*Math.cos(a),r*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,r=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=r,this.z=i}set(e,r,i){return i===void 0&&(i=this.z),this.x=e,this.y=r,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(bf.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(bf.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[3]*i+a[6]*n,this.y=a[1]*r+a[4]*i+a[7]*n,this.z=a[2]*r+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*r+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*r+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*r+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*r+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){const r=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,u=l*r+s*n-o*i,c=l*i+o*r-a*n,p=l*n+a*i-s*r,d=-a*r-s*i-o*n;return this.x=u*l+d*-a+c*-o-p*-s,this.y=c*l+d*-s+p*-a-u*-o,this.z=p*l+d*-o+u*-s-c*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[4]*i+a[8]*n,this.y=a[1]*r+a[5]*i+a[9]*n,this.z=a[2]*r+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const i=e.x,n=e.y,a=e.z,s=r.x,o=r.y,l=r.z;return this.x=n*l-a*o,this.y=a*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const i=e.dot(this)/r;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return r*r+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,i){const n=Math.sin(r)*e;return this.x=n*Math.sin(i),this.y=Math.cos(r)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,i){return this.x=e*Math.sin(r),this.y=i,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=i,this.z=n,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,r=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(r),this.y=i*Math.sin(r),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hu=new U,bf=new qs;class An{constructor(e=new U(1/0,1/0,1/0),r=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r+=3)this.expandByPoint(ii.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,i=e.count;r<i;r++)this.expandByPoint(ii.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const i=ii.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Nn.copy(e.boundingBox),Nn.applyMatrix4(e.matrixWorld),this.union(Nn);else{const n=e.geometry;if(n!==void 0)if(r&&n.attributes!==void 0&&n.attributes.position!==void 0){const a=n.attributes.position;for(let s=0,o=a.count;s<o;s++)ii.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(ii)}else n.boundingBox===null&&n.computeBoundingBox(),Nn.copy(n.boundingBox),Nn.applyMatrix4(e.matrixWorld),this.union(Nn)}const i=e.children;for(let n=0,a=i.length;n<a;n++)this.expandByObject(i[n],r);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,i;return e.normal.x>0?(r=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),r<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ya),vo.subVectors(this.max,Ya),On.subVectors(e.a,Ya),Fn.subVectors(e.b,Ya),zn.subVectors(e.c,Ya),Ei.subVectors(Fn,On),wi.subVectors(zn,Fn),rn.subVectors(On,zn);let r=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-rn.z,rn.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,rn.z,0,-rn.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-rn.y,rn.x,0];return!Gu(r,On,Fn,zn,vo)||(r=[1,0,0,0,1,0,0,0,1],!Gu(r,On,Fn,zn,vo))?!1:(_o.crossVectors(Ei,wi),r=[_o.x,_o.y,_o.z],Gu(r,On,Fn,zn,vo))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new U,new U,new U,new U,new U,new U,new U,new U],ii=new U,Nn=new An,On=new U,Fn=new U,zn=new U,Ei=new U,wi=new U,rn=new U,Ya=new U,vo=new U,_o=new U,nn=new U;function Gu(t,e,r,i,n){for(let a=0,s=t.length-3;a<=s;a+=3){nn.fromArray(t,a);const o=n.x*Math.abs(nn.x)+n.y*Math.abs(nn.y)+n.z*Math.abs(nn.z),l=e.dot(nn),u=r.dot(nn),c=i.dot(nn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const A1=new An,qa=new U,Vu=new U;class ql{constructor(e=new U,r=-1){this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const i=this.center;r!==void 0?i.copy(r):A1.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const i=this.center.distanceToSquared(e);return r.copy(e),i>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qa.subVectors(e,this.center);const r=qa.lengthSq();if(r>this.radius*this.radius){const i=Math.sqrt(r),n=(i-this.radius)*.5;this.center.addScaledVector(qa,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qa.copy(e.center).add(Vu)),this.expandByPoint(qa.copy(e.center).sub(Vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new U,Wu=new U,xo=new U,Ti=new U,Xu=new U,yo=new U,ju=new U;class Zv{constructor(e=new U,r=new U(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const i=r.dot(this.direction);return i<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=ni.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,r),ni.distanceToSquared(e))}distanceSqToSegment(e,r,i,n){Wu.copy(e).add(r).multiplyScalar(.5),xo.copy(r).sub(e).normalize(),Ti.copy(this.origin).sub(Wu);const a=e.distanceTo(r)*.5,s=-this.direction.dot(xo),o=Ti.dot(this.direction),l=-Ti.dot(xo),u=Ti.lengthSq(),c=Math.abs(1-s*s);let p,d,m,_;if(c>0)if(p=s*l-o,d=s*o-l,_=a*c,p>=0)if(d>=-_)if(d<=_){const x=1/c;p*=x,d*=x,m=p*(p+s*d+2*o)+d*(s*p+d+2*l)+u}else d=a,p=Math.max(0,-(s*d+o)),m=-p*p+d*(d+2*l)+u;else d=-a,p=Math.max(0,-(s*d+o)),m=-p*p+d*(d+2*l)+u;else d<=-_?(p=Math.max(0,-(-s*a+o)),d=p>0?-a:Math.min(Math.max(-a,-l),a),m=-p*p+d*(d+2*l)+u):d<=_?(p=0,d=Math.min(Math.max(-a,-l),a),m=d*(d+2*l)+u):(p=Math.max(0,-(s*a+o)),d=p>0?a:Math.min(Math.max(-a,-l),a),m=-p*p+d*(d+2*l)+u);else d=s>0?-a:a,p=Math.max(0,-(s*d+o)),m=-p*p+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),n&&n.copy(Wu).addScaledVector(xo,d),m}intersectSphere(e,r){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),n=ni.dot(ni)-i*i,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,r):this.at(o,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/r;return i>=0?i:null}intersectPlane(e,r){const i=this.distanceToPlane(e);return i===null?null:this.at(i,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let i,n,a,s,o,l;const u=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,n=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,n=(e.min.x-d.x)*u),c>=0?(a=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(a=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,r)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,r,i,n,a){Xu.subVectors(r,e),yo.subVectors(i,e),ju.crossVectors(Xu,yo);let s=this.direction.dot(ju),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ti.subVectors(this.origin,e);const l=o*this.direction.dot(yo.crossVectors(Ti,yo));if(l<0)return null;const u=o*this.direction.dot(Xu.cross(Ti));if(u<0||l+u>s)return null;const c=-o*Ti.dot(ju);return c<0?null:this.at(c/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,r,i,n,a,s,o,l,u,c,p,d,m,_,x,g){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,s,o,l,u,c,p,d,m,_,x,g)}set(e,r,i,n,a,s,o,l,u,c,p,d,m,_,x,g){const h=this.elements;return h[0]=e,h[4]=r,h[8]=i,h[12]=n,h[1]=a,h[5]=s,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=p,h[14]=d,h[3]=m,h[7]=_,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(e){const r=this.elements,i=e.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,i){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,r,i){return this.set(e.x,r.x,i.x,0,e.y,r.y,i.y,0,e.z,r.z,i.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,i=e.elements,n=1/kn.setFromMatrixColumn(e,0).length(),a=1/kn.setFromMatrixColumn(e,1).length(),s=1/kn.setFromMatrixColumn(e,2).length();return r[0]=i[0]*n,r[1]=i[1]*n,r[2]=i[2]*n,r[3]=0,r[4]=i[4]*a,r[5]=i[5]*a,r[6]=i[6]*a,r[7]=0,r[8]=i[8]*s,r[9]=i[9]*s,r[10]=i[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),u=Math.sin(n),c=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const d=s*c,m=s*p,_=o*c,x=o*p;r[0]=l*c,r[4]=-l*p,r[8]=u,r[1]=m+_*u,r[5]=d-x*u,r[9]=-o*l,r[2]=x-d*u,r[6]=_+m*u,r[10]=s*l}else if(e.order==="YXZ"){const d=l*c,m=l*p,_=u*c,x=u*p;r[0]=d+x*o,r[4]=_*o-m,r[8]=s*u,r[1]=s*p,r[5]=s*c,r[9]=-o,r[2]=m*o-_,r[6]=x+d*o,r[10]=s*l}else if(e.order==="ZXY"){const d=l*c,m=l*p,_=u*c,x=u*p;r[0]=d-x*o,r[4]=-s*p,r[8]=_+m*o,r[1]=m+_*o,r[5]=s*c,r[9]=x-d*o,r[2]=-s*u,r[6]=o,r[10]=s*l}else if(e.order==="ZYX"){const d=s*c,m=s*p,_=o*c,x=o*p;r[0]=l*c,r[4]=_*u-m,r[8]=d*u+x,r[1]=l*p,r[5]=x*u+d,r[9]=m*u-_,r[2]=-u,r[6]=o*l,r[10]=s*l}else if(e.order==="YZX"){const d=s*l,m=s*u,_=o*l,x=o*u;r[0]=l*c,r[4]=x-d*p,r[8]=_*p+m,r[1]=p,r[5]=s*c,r[9]=-o*c,r[2]=-u*c,r[6]=m*p+_,r[10]=d-x*p}else if(e.order==="XZY"){const d=s*l,m=s*u,_=o*l,x=o*u;r[0]=l*c,r[4]=-p,r[8]=u*c,r[1]=d*p+x,r[5]=s*c,r[9]=m*p-_,r[2]=_*p-m,r[6]=o*c,r[10]=x*p+d}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R1,e,C1)}lookAt(e,r,i){const n=this.elements;return ar.subVectors(e,r),ar.lengthSq()===0&&(ar.z=1),ar.normalize(),Ai.crossVectors(i,ar),Ai.lengthSq()===0&&(Math.abs(i.z)===1?ar.x+=1e-4:ar.z+=1e-4,ar.normalize(),Ai.crossVectors(i,ar)),Ai.normalize(),Mo.crossVectors(ar,Ai),n[0]=Ai.x,n[4]=Mo.x,n[8]=ar.x,n[1]=Ai.y,n[5]=Mo.y,n[9]=ar.y,n[2]=Ai.z,n[6]=Mo.z,n[10]=ar.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],c=i[1],p=i[5],d=i[9],m=i[13],_=i[2],x=i[6],g=i[10],h=i[14],v=i[3],f=i[7],y=i[11],b=i[15],w=n[0],T=n[4],C=n[8],M=n[12],S=n[1],z=n[5],V=n[9],I=n[13],F=n[2],G=n[6],Q=n[10],K=n[14],D=n[3],W=n[7],H=n[11],N=n[15];return a[0]=s*w+o*S+l*F+u*D,a[4]=s*T+o*z+l*G+u*W,a[8]=s*C+o*V+l*Q+u*H,a[12]=s*M+o*I+l*K+u*N,a[1]=c*w+p*S+d*F+m*D,a[5]=c*T+p*z+d*G+m*W,a[9]=c*C+p*V+d*Q+m*H,a[13]=c*M+p*I+d*K+m*N,a[2]=_*w+x*S+g*F+h*D,a[6]=_*T+x*z+g*G+h*W,a[10]=_*C+x*V+g*Q+h*H,a[14]=_*M+x*I+g*K+h*N,a[3]=v*w+f*S+y*F+b*D,a[7]=v*T+f*z+y*G+b*W,a[11]=v*C+f*V+y*Q+b*H,a[15]=v*M+f*I+y*K+b*N,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],u=e[13],c=e[2],p=e[6],d=e[10],m=e[14],_=e[3],x=e[7],g=e[11],h=e[15];return _*(+a*l*p-n*u*p-a*o*d+i*u*d+n*o*m-i*l*m)+x*(+r*l*m-r*u*d+a*s*d-n*s*m+n*u*c-a*l*c)+g*(+r*u*p-r*o*m-a*s*p+i*s*m+a*o*c-i*u*c)+h*(-n*o*c-r*l*p+r*o*d+n*s*p-i*s*d+i*l*c)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=r,n[14]=i),this}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8],p=e[9],d=e[10],m=e[11],_=e[12],x=e[13],g=e[14],h=e[15],v=p*g*u-x*d*u+x*l*m-o*g*m-p*l*h+o*d*h,f=_*d*u-c*g*u-_*l*m+s*g*m+c*l*h-s*d*h,y=c*x*u-_*p*u+_*o*m-s*x*m-c*o*h+s*p*h,b=_*p*l-c*x*l-_*o*d+s*x*d+c*o*g-s*p*g,w=r*v+i*f+n*y+a*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=v*T,e[1]=(x*d*a-p*g*a-x*n*m+i*g*m+p*n*h-i*d*h)*T,e[2]=(o*g*a-x*l*a+x*n*u-i*g*u-o*n*h+i*l*h)*T,e[3]=(p*l*a-o*d*a-p*n*u+i*d*u+o*n*m-i*l*m)*T,e[4]=f*T,e[5]=(c*g*a-_*d*a+_*n*m-r*g*m-c*n*h+r*d*h)*T,e[6]=(_*l*a-s*g*a-_*n*u+r*g*u+s*n*h-r*l*h)*T,e[7]=(s*d*a-c*l*a+c*n*u-r*d*u-s*n*m+r*l*m)*T,e[8]=y*T,e[9]=(_*p*a-c*x*a-_*i*m+r*x*m+c*i*h-r*p*h)*T,e[10]=(s*x*a-_*o*a+_*i*u-r*x*u-s*i*h+r*o*h)*T,e[11]=(c*o*a-s*p*a-c*i*u+r*p*u+s*i*m-r*o*m)*T,e[12]=b*T,e[13]=(c*x*n-_*p*n+_*i*d-r*x*d-c*i*g+r*p*g)*T,e[14]=(_*o*n-s*x*n-_*i*l+r*x*l+s*i*g-r*o*g)*T,e[15]=(s*p*n-c*o*n+c*i*l-r*p*l-s*i*d+r*o*d)*T,this}scale(e){const r=this.elements,i=e.x,n=e.y,a=e.z;return r[0]*=i,r[4]*=n,r[8]*=a,r[1]*=i,r[5]*=n,r[9]*=a,r[2]*=i,r[6]*=n,r[10]*=a,r[3]*=i,r[7]*=n,r[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,i,n))}makeTranslation(e,r,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const i=Math.cos(r),n=Math.sin(r),a=1-i,s=e.x,o=e.y,l=e.z,u=a*s,c=a*o;return this.set(u*s+i,u*o-n*l,u*l+n*o,0,u*o+n*l,c*o+i,c*l-n*s,0,u*l-n*o,c*l+n*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,r,i){return this.set(e,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,r,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,r,n,1,0,0,0,0,1),this}compose(e,r,i){const n=this.elements,a=r._x,s=r._y,o=r._z,l=r._w,u=a+a,c=s+s,p=o+o,d=a*u,m=a*c,_=a*p,x=s*c,g=s*p,h=o*p,v=l*u,f=l*c,y=l*p,b=i.x,w=i.y,T=i.z;return n[0]=(1-(x+h))*b,n[1]=(m+y)*b,n[2]=(_-f)*b,n[3]=0,n[4]=(m-y)*w,n[5]=(1-(d+h))*w,n[6]=(g+v)*w,n[7]=0,n[8]=(_+f)*T,n[9]=(g-v)*T,n[10]=(1-(d+x))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,r,i){const n=this.elements;let a=kn.set(n[0],n[1],n[2]).length();const s=kn.set(n[4],n[5],n[6]).length(),o=kn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Cr.copy(this);const l=1/a,u=1/s,c=1/o;return Cr.elements[0]*=l,Cr.elements[1]*=l,Cr.elements[2]*=l,Cr.elements[4]*=u,Cr.elements[5]*=u,Cr.elements[6]*=u,Cr.elements[8]*=c,Cr.elements[9]*=c,Cr.elements[10]*=c,r.setFromRotationMatrix(Cr),i.x=a,i.y=s,i.z=o,this}makePerspective(e,r,i,n,a,s,o=fi){const l=this.elements,u=2*a/(r-e),c=2*a/(i-n),p=(r+e)/(r-e),d=(i+n)/(i-n);let m,_;if(o===fi)m=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===Tl)m=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,r,i,n,a,s,o=fi){const l=this.elements,u=1/(r-e),c=1/(i-n),p=1/(s-a),d=(r+e)*u,m=(i+n)*c;let _,x;if(o===fi)_=(s+a)*p,x=-2*p;else if(o===Tl)_=a*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<16;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<16;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e[r+9]=i[9],e[r+10]=i[10],e[r+11]=i[11],e[r+12]=i[12],e[r+13]=i[13],e[r+14]=i[14],e[r+15]=i[15],e}}const kn=new U,Cr=new ft,R1=new U(0,0,0),C1=new U(1,1,1),Ai=new U,Mo=new U,ar=new U,Ef=new ft,wf=new qs;class Jl{constructor(e=0,r=0,i=0,n=Jl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,i,n=this._order){return this._x=e,this._y=r,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,i=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],u=n[5],c=n[9],p=n[2],d=n[6],m=n[10];switch(r){case"XYZ":this._y=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,i){return Ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ef,r,i)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return wf.setFromEuler(this),this.setFromQuaternion(wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jl.DEFAULT_ORDER="XYZ";class Qv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P1=0;const Tf=new U,Bn=new qs,ai=new ft,So=new U,Ja=new U,L1=new U,U1=new qs,Af=new U(1,0,0),Rf=new U(0,1,0),Cf=new U(0,0,1),D1={type:"added"},I1={type:"removed"};class It extends Oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new U,r=new Jl,i=new qs,n=new U(1,1,1);function a(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ge}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return Bn.setFromAxisAngle(e,r),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(e,r){return Bn.setFromAxisAngle(e,r),this.quaternion.premultiply(Bn),this}rotateX(e){return this.rotateOnAxis(Af,e)}rotateY(e){return this.rotateOnAxis(Rf,e)}rotateZ(e){return this.rotateOnAxis(Cf,e)}translateOnAxis(e,r){return Tf.copy(e).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(Af,e)}translateY(e){return this.translateOnAxis(Rf,e)}translateZ(e){return this.translateOnAxis(Cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,r,i){e.isVector3?So.copy(e):So.set(e,r,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Ja,So,this.up):ai.lookAt(So,Ja,this.up),this.quaternion.setFromRotationMatrix(ai),n&&(ai.extractRotation(n.matrixWorld),Bn.setFromRotationMatrix(ai),this.quaternion.premultiply(Bn.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(D1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(I1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,r);if(a!==void 0)return a}}getObjectsByProperty(e,r){let i=[];this[e]===r&&i.push(this);for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectsByProperty(e,r);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,e,L1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,U1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let i=0,n=r.length;i<n;i++){const a=r[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,r){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),r===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++){const o=n[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const r=e===void 0||typeof e=="string",i={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const p=l[u];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(r){const o=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),p=s(e.shapes),d=s(e.skeletons),m=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=n,i;function s(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}It.DEFAULT_UP=new U(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pr=new U,si=new U,Yu=new U,oi=new U,Hn=new U,Gn=new U,Pf=new U,qu=new U,Ju=new U,Ku=new U;let bo=!1;class Or{constructor(e=new U,r=new U,i=new U){this.a=e,this.b=r,this.c=i}static getNormal(e,r,i,n){n.subVectors(i,r),Pr.subVectors(e,r),n.cross(Pr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,r,i,n,a){Pr.subVectors(n,r),si.subVectors(i,r),Yu.subVectors(e,r);const s=Pr.dot(Pr),o=Pr.dot(si),l=Pr.dot(Yu),u=si.dot(si),c=si.dot(Yu),p=s*u-o*o;if(p===0)return a.set(-2,-1,-1);const d=1/p,m=(u*l-o*c)*d,_=(s*c-o*l)*d;return a.set(1-m-_,_,m)}static containsPoint(e,r,i,n){return this.getBarycoord(e,r,i,n,oi),oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getUV(e,r,i,n,a,s,o,l){return bo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bo=!0),this.getInterpolation(e,r,i,n,a,s,o,l)}static getInterpolation(e,r,i,n,a,s,o,l){return this.getBarycoord(e,r,i,n,oi),l.setScalar(0),l.addScaledVector(a,oi.x),l.addScaledVector(s,oi.y),l.addScaledVector(o,oi.z),l}static isFrontFacing(e,r,i,n){return Pr.subVectors(i,r),si.subVectors(e,r),Pr.cross(si).dot(n)<0}set(e,r,i){return this.a.copy(e),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(e,r,i,n){return this.a.copy(e[r]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,r,i,n){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pr.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Pr.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Or.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return Or.getBarycoord(e,this.a,this.b,this.c,r)}getUV(e,r,i,n,a){return bo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bo=!0),Or.getInterpolation(e,this.a,this.b,this.c,r,i,n,a)}getInterpolation(e,r,i,n,a){return Or.getInterpolation(e,this.a,this.b,this.c,r,i,n,a)}containsPoint(e){return Or.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Or.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const i=this.a,n=this.b,a=this.c;let s,o;Hn.subVectors(n,i),Gn.subVectors(a,i),qu.subVectors(e,i);const l=Hn.dot(qu),u=Gn.dot(qu);if(l<=0&&u<=0)return r.copy(i);Ju.subVectors(e,n);const c=Hn.dot(Ju),p=Gn.dot(Ju);if(c>=0&&p<=c)return r.copy(n);const d=l*p-c*u;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),r.copy(i).addScaledVector(Hn,s);Ku.subVectors(e,a);const m=Hn.dot(Ku),_=Gn.dot(Ku);if(_>=0&&m<=_)return r.copy(a);const x=m*u-l*_;if(x<=0&&u>=0&&_<=0)return o=u/(u-_),r.copy(i).addScaledVector(Gn,o);const g=c*_-m*p;if(g<=0&&p-c>=0&&m-_>=0)return Pf.subVectors(a,n),o=(p-c)/(p-c+(m-_)),r.copy(n).addScaledVector(Pf,o);const h=1/(g+x+d);return s=x*h,o=d*h,r.copy(i).addScaledVector(Hn,s).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let N1=0;class Un extends Oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=xa,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fv,this.blendDst=zv,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fu,this.stencilZFail=Fu,this.stencilZPass=Fu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const i=e[r];if(i===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const n=this[r];if(n===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[r]=i}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xa&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(r){const a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let i=null;if(r!==null){const n=r.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=r[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Zu(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*6*(2/3-r):t}class we{constructor(e,r,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,i)}set(e,r,i){if(r===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,r,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rr.toWorkingColorSpace(this,r),this}setRGB(e,r,i,n=Rr.workingColorSpace){return this.r=e,this.g=r,this.b=i,Rr.toWorkingColorSpace(this,n),this}setHSL(e,r,i,n=Rr.workingColorSpace){if(e=fd(e,1),r=Ut(r,0,1),i=Ut(i,0,1),r===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+r):i+r-i*r,s=2*i-a;this.r=Zu(s,a,e+1/3),this.g=Zu(s,a,e),this.b=Zu(s,a,e-1/3)}return Rr.toWorkingColorSpace(this,n),this}setStyle(e,r=rt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,r);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,r);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,r);if(s===6)return this.setHex(parseInt(a,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=rt){const i=$v[e.toLowerCase()];return i!==void 0?this.setHex(i,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}copyLinearToSRGB(e){return this.r=ku(e.r),this.g=ku(e.g),this.b=ku(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return Rr.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ut(kt.r*255,0,255))*65536+Math.round(Ut(kt.g*255,0,255))*256+Math.round(Ut(kt.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=Rr.workingColorSpace){Rr.fromWorkingColorSpace(kt.copy(this),r);const i=kt.r,n=kt.g,a=kt.b,s=Math.max(i,n,a),o=Math.min(i,n,a);let l,u;const c=(o+s)/2;if(o===s)l=0,u=0;else{const p=s-o;switch(u=c<=.5?p/(s+o):p/(2-s-o),s){case i:l=(n-a)/p+(n<a?6:0);break;case n:l=(a-i)/p+2;break;case a:l=(i-n)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,r=Rr.workingColorSpace){return Rr.fromWorkingColorSpace(kt.copy(this),r),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=rt){Rr.fromWorkingColorSpace(kt.copy(this),e);const r=kt.r,i=kt.g,n=kt.b;return e!==rt?`color(${e} ${r.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,r,i){return this.getHSL(Lr),Lr.h+=e,Lr.s+=r,Lr.l+=i,this.setHSL(Lr.h,Lr.s,Lr.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,i){return this.r=e.r+(r.r-e.r)*i,this.g=e.g+(r.g-e.g)*i,this.b=e.b+(r.b-e.b)*i,this}lerpHSL(e,r){this.getHSL(Lr),e.getHSL(Eo);const i=fs(Lr.h,Eo.h,r),n=fs(Lr.s,Eo.s,r),a=fs(Lr.l,Eo.l,r);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*r+a[3]*i+a[6]*n,this.g=a[1]*r+a[4]*i+a[7]*n,this.b=a[2]*r+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new we;we.NAMES=$v;class Js extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new U,wo=new ne;class Gr{constructor(e,r,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=i,this.usage=xf,this.updateRange={offset:0,count:-1},this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,i){e*=this.itemSize,i*=r.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=r.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,i=this.count;r<i;r++)wo.fromBufferAttribute(this,r),wo.applyMatrix3(e),this.setXY(r,wo.x,wo.y);else if(this.itemSize===3)for(let r=0,i=this.count;r<i;r++)xt.fromBufferAttribute(this,r),xt.applyMatrix3(e),this.setXYZ(r,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let r=0,i=this.count;r<i;r++)xt.fromBufferAttribute(this,r),xt.applyMatrix4(e),this.setXYZ(r,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let r=0,i=this.count;r<i;r++)xt.fromBufferAttribute(this,r),xt.applyNormalMatrix(e),this.setXYZ(r,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let r=0,i=this.count;r<i;r++)xt.fromBufferAttribute(this,r),xt.transformDirection(e),this.setXYZ(r,xt.x,xt.y,xt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let i=this.array[e*this.itemSize+r];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(e,r,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+r]=i,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=Zn(r,this.array)),r}setX(e,r){return this.normalized&&(r=Wt(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=Zn(r,this.array)),r}setY(e,r){return this.normalized&&(r=Wt(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=Zn(r,this.array)),r}setZ(e,r){return this.normalized&&(r=Wt(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=Zn(r,this.array)),r}setW(e,r){return this.normalized&&(r=Wt(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,i){return e*=this.itemSize,this.normalized&&(r=Wt(r,this.array),i=Wt(i,this.array)),this.array[e+0]=r,this.array[e+1]=i,this}setXYZ(e,r,i,n){return e*=this.itemSize,this.normalized&&(r=Wt(r,this.array),i=Wt(i,this.array),n=Wt(n,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,r,i,n,a){return e*=this.itemSize,this.normalized&&(r=Wt(r,this.array),i=Wt(i,this.array),n=Wt(n,this.array),a=Wt(a,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class e0 extends Gr{constructor(e,r,i){super(new Uint16Array(e),r,i)}}class t0 extends Gr{constructor(e,r,i){super(new Uint32Array(e),r,i)}}class mt extends Gr{constructor(e,r,i){super(new Float32Array(e),r,i)}}let O1=0;const vr=new ft,Qu=new It,Vn=new U,sr=new An,Ka=new An,At=new U;class Jt extends Oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yv(e)?t0:e0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,i=0){this.groups.push({start:e,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ge().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vr.makeRotationFromQuaternion(e),this.applyMatrix4(vr),this}rotateX(e){return vr.makeRotationX(e),this.applyMatrix4(vr),this}rotateY(e){return vr.makeRotationY(e),this.applyMatrix4(vr),this}rotateZ(e){return vr.makeRotationZ(e),this.applyMatrix4(vr),this}translate(e,r,i){return vr.makeTranslation(e,r,i),this.applyMatrix4(vr),this}scale(e,r,i){return vr.makeScale(e,r,i),this.applyMatrix4(vr),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(e){const r=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];r.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new mt(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let i=0,n=r.length;i<n;i++){const a=r[i];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,sr.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,sr.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(sr.min),this.boundingBox.expandByPoint(sr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(sr.setFromBufferAttribute(e),r)for(let a=0,s=r.length;a<s;a++){const o=r[a];Ka.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(sr.min,Ka.min),sr.expandByPoint(At),At.addVectors(sr.max,Ka.max),sr.expandByPoint(At)):(sr.expandByPoint(Ka.min),sr.expandByPoint(Ka.max))}sr.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)At.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(At));if(r)for(let a=0,s=r.length;a<s;a++){const o=r[a],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)At.fromBufferAttribute(o,u),l&&(Vn.fromBufferAttribute(e,u),At.add(Vn)),n=Math.max(n,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=r.position.array,a=r.normal.array,s=r.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gr(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let S=0;S<o;S++)u[S]=new U,c[S]=new U;const p=new U,d=new U,m=new U,_=new ne,x=new ne,g=new ne,h=new U,v=new U;function f(S,z,V){p.fromArray(n,S*3),d.fromArray(n,z*3),m.fromArray(n,V*3),_.fromArray(s,S*2),x.fromArray(s,z*2),g.fromArray(s,V*2),d.sub(p),m.sub(p),x.sub(_),g.sub(_);const I=1/(x.x*g.y-g.x*x.y);isFinite(I)&&(h.copy(d).multiplyScalar(g.y).addScaledVector(m,-x.y).multiplyScalar(I),v.copy(m).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(I),u[S].add(h),u[z].add(h),u[V].add(h),c[S].add(v),c[z].add(v),c[V].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let S=0,z=y.length;S<z;++S){const V=y[S],I=V.start,F=V.count;for(let G=I,Q=I+F;G<Q;G+=3)f(i[G+0],i[G+1],i[G+2])}const b=new U,w=new U,T=new U,C=new U;function M(S){T.fromArray(a,S*3),C.copy(T);const z=u[S];b.copy(z),b.sub(T.multiplyScalar(T.dot(z))).normalize(),w.crossVectors(C,z);const V=w.dot(c[S])<0?-1:1;l[S*4]=b.x,l[S*4+1]=b.y,l[S*4+2]=b.z,l[S*4+3]=V}for(let S=0,z=y.length;S<z;++S){const V=y[S],I=V.start,F=V.count;for(let G=I,Q=I+F;G<Q;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gr(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const n=new U,a=new U,s=new U,o=new U,l=new U,u=new U,c=new U,p=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);n.fromBufferAttribute(r,_),a.fromBufferAttribute(r,x),s.fromBufferAttribute(r,g),c.subVectors(s,a),p.subVectors(n,a),c.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,g),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,m=r.count;d<m;d+=3)n.fromBufferAttribute(r,d+0),a.fromBufferAttribute(r,d+1),s.fromBufferAttribute(r,d+2),c.subVectors(s,a),p.subVectors(n,a),c.cross(p),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,i=e.count;r<i;r++)At.fromBufferAttribute(e,r),At.normalize(),e.setXYZ(r,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,p=o.normalized,d=new u.constructor(l.length*c);let m=0,_=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*c;for(let h=0;h<c;h++)d[_++]=u[m++]}return new Gr(d,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new Jt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],u=e(l,i);r.setAttribute(o,u)}const a=this.morphAttributes;for(const o in a){const l=[],u=a[o];for(let c=0,p=u.length;c<p;c++){const d=u[c],m=e(d,i);l.push(m)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];r.addGroup(u.start,u.count,u.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let p=0,d=u.length;p<d;p++){const m=u[p];c.push(m.toJSON(e.data))}c.length>0&&(n[l]=c,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(r));const n=e.attributes;for(const u in n){const c=n[u];this.setAttribute(u,c.clone(r))}const a=e.morphAttributes;for(const u in a){const c=[],p=a[u];for(let d=0,m=p.length;d<m;d++)c.push(p[d].clone(r));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const p=s[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lf=new ft,an=new Zv,To=new ql,Uf=new U,Wn=new U,Xn=new U,jn=new U,$u=new U,Ao=new U,Ro=new ne,Co=new ne,Po=new ne,Df=new U,If=new U,Nf=new U,Lo=new U,Uo=new U;class Ye extends It{constructor(e=new Jt,r=new Js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,r){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;r.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){Ao.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const c=o[l],p=a[l];c!==0&&($u.fromBufferAttribute(p,e),s?Ao.addScaledVector($u,c):Ao.addScaledVector($u.sub(r),c))}r.add(Ao)}return r}raycast(e,r){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(a),an.copy(e.ray).recast(e.near),!(To.containsPoint(an.origin)===!1&&(an.intersectSphere(To,Uf)===null||an.origin.distanceToSquared(Uf)>(e.far-e.near)**2))&&(Lf.copy(a).invert(),an.copy(e.ray).applyMatrix4(Lf),!(i.boundingBox!==null&&an.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,r,an)))}_computeIntersections(e,r,i){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,u=a.attributes.uv,c=a.attributes.uv1,p=a.attributes.normal,d=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,x=d.length;_<x;_++){const g=d[_],h=s[g.materialIndex],v=Math.max(g.start,m.start),f=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=v,b=f;y<b;y+=3){const w=o.getX(y),T=o.getX(y+1),C=o.getX(y+2);n=Do(this,h,e,i,u,c,p,w,T,C),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,r.push(n))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=_,h=x;g<h;g+=3){const v=o.getX(g),f=o.getX(g+1),y=o.getX(g+2);n=Do(this,s,e,i,u,c,p,v,f,y),n&&(n.faceIndex=Math.floor(g/3),r.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=d.length;_<x;_++){const g=d[_],h=s[g.materialIndex],v=Math.max(g.start,m.start),f=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=v,b=f;y<b;y+=3){const w=y,T=y+1,C=y+2;n=Do(this,h,e,i,u,c,p,w,T,C),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=g.materialIndex,r.push(n))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=_,h=x;g<h;g+=3){const v=g,f=g+1,y=g+2;n=Do(this,s,e,i,u,c,p,v,f,y),n&&(n.faceIndex=Math.floor(g/3),r.push(n))}}}}function F1(t,e,r,i,n,a,s,o){let l;if(e.side===ir?l=i.intersectTriangle(s,a,n,!0,o):l=i.intersectTriangle(n,a,s,e.side===Ki,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(t.matrixWorld);const u=r.ray.origin.distanceTo(Uo);return u<r.near||u>r.far?null:{distance:u,point:Uo.clone(),object:t}}function Do(t,e,r,i,n,a,s,o,l,u){t.getVertexPosition(o,Wn),t.getVertexPosition(l,Xn),t.getVertexPosition(u,jn);const c=F1(t,e,r,i,Wn,Xn,jn,Lo);if(c){n&&(Ro.fromBufferAttribute(n,o),Co.fromBufferAttribute(n,l),Po.fromBufferAttribute(n,u),c.uv=Or.getInterpolation(Lo,Wn,Xn,jn,Ro,Co,Po,new ne)),a&&(Ro.fromBufferAttribute(a,o),Co.fromBufferAttribute(a,l),Po.fromBufferAttribute(a,u),c.uv1=Or.getInterpolation(Lo,Wn,Xn,jn,Ro,Co,Po,new ne),c.uv2=c.uv1),s&&(Df.fromBufferAttribute(s,o),If.fromBufferAttribute(s,l),Nf.fromBufferAttribute(s,u),c.normal=Or.getInterpolation(Lo,Wn,Xn,jn,Df,If,Nf,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const p={a:o,b:l,c:u,normal:new U,materialIndex:0};Or.getNormal(Wn,Xn,jn,p.normal),c.face=p}return c}class Yi extends Jt{constructor(e=1,r=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],u=[],c=[],p=[];let d=0,m=0;_("z","y","x",-1,-1,i,r,e,s,a,0),_("z","y","x",1,-1,i,r,-e,s,a,1),_("x","z","y",1,1,e,i,r,n,s,2),_("x","z","y",1,-1,e,i,-r,n,s,3),_("x","y","z",1,-1,e,r,i,n,a,4),_("x","y","z",-1,-1,e,r,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(p,2));function _(x,g,h,v,f,y,b,w,T,C,M){const S=y/T,z=b/C,V=y/2,I=b/2,F=w/2,G=T+1,Q=C+1;let K=0,D=0;const W=new U;for(let H=0;H<Q;H++){const N=H*z-I;for(let j=0;j<G;j++){const ie=j*S-V;W[x]=ie*v,W[g]=N*f,W[h]=F,u.push(W.x,W.y,W.z),W[x]=0,W[g]=0,W[h]=w>0?1:-1,c.push(W.x,W.y,W.z),p.push(j/T),p.push(1-H/C),K+=1}}for(let H=0;H<C;H++)for(let N=0;N<T;N++){const j=d+N+G*H,ie=d+N+G*(H+1),he=d+(N+1)+G*(H+1),Me=d+(N+1)+G*H;l.push(j,ie,Me),l.push(ie,he,Me),D+=6}o.addGroup(m,D,M),m+=D,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function La(t){const e={};for(const r in t){e[r]={};for(const i in t[r]){const n=t[r][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][i]=null):e[r][i]=n.clone():Array.isArray(n)?e[r][i]=n.slice():e[r][i]=n}}return e}function Xt(t){const e={};for(let r=0;r<t.length;r++){const i=La(t[r]);for(const n in i)e[n]=i[n]}return e}function z1(t){const e=[];for(let r=0;r<t.length;r++)e.push(t[r].clone());return e}function r0(t){return t.getRenderTarget()===null?t.outputColorSpace:$r}const Cl={clone:La,merge:Xt};var k1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k1,this.fragmentShader=B1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=La(e.uniforms),this.uniformsGroups=z1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?r.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?r.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?r.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?r.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?r.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?r.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?r.uniforms[n]={type:"m4",value:a.toArray()}:r.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(r.extensions=i),r}}class i0 extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=fi}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(-r[8],-r[9],-r[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sr extends i0{constructor(e=50,r=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,r,i,n,a,s){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(ps*.5*this.fov)/this.zoom,i=2*r,n=this.aspect*i,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;a+=s.offsetX*n/l,r-=s.offsetY*i/u,n*=s.width/l,i*=s.height/u}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,r,r-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Yn=-90,qn=1;class H1 extends It{constructor(e,r,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const n=new Sr(Yn,qn,e,r);n.layers=this.layers,this.add(n);const a=new Sr(Yn,qn,e,r);a.layers=this.layers,this.add(a);const s=new Sr(Yn,qn,e,r);s.layers=this.layers,this.add(s);const o=new Sr(Yn,qn,e,r);o.layers=this.layers,this.add(o);const l=new Sr(Yn,qn,e,r);l.layers=this.layers,this.add(l);const u=new Sr(Yn,qn,e,r);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[i,n,a,s,o,l]=r;for(const u of r)this.remove(u);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of r)this.add(u),u.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,a,s,o,l,u]=this.children,c=e.getRenderTarget(),p=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(r,n),e.setRenderTarget(i,1),e.render(r,a),e.setRenderTarget(i,2),e.render(r,s),e.setRenderTarget(i,3),e.render(r,o),e.setRenderTarget(i,4),e.render(r,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(r,u),e.setRenderTarget(c),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class n0 extends dr{constructor(e,r,i,n,a,s,o,l,u,c){e=e!==void 0?e:[],r=r!==void 0?r:Ra,super(e,r,i,n,a,s,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class G1 extends Hr{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];r.encoding!==void 0&&(ms("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===xn?rt:yn),this.texture=new n0(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Mr}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Yi(5,5,5),a=new cr({name:"CubemapFromEquirect",uniforms:La(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ir,blending:gi});a.uniforms.tEquirect.value=r;const s=new Ye(n,a),o=r.minFilter;return r.minFilter===Fs&&(r.minFilter=Mr),new H1(1,10,this).update(e,s),r.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,r,i,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(r,i,n);e.setRenderTarget(a)}}const ec=new U,V1=new U,W1=new Ge;class un{constructor(e=new U(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,i,n){return this.normal.set(e,r,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,i){const n=ec.subVectors(i,r).cross(V1.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const i=e.delta(ec),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:r.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const r=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return r<0&&i>0||i<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const i=r||W1.getNormalMatrix(e),n=this.coplanarPoint(ec).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sn=new ql,Io=new U;class md{constructor(e=new un,r=new un,i=new un,n=new un,a=new un,s=new un){this.planes=[e,r,i,n,a,s]}set(e,r,i,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(r),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const r=this.planes;for(let i=0;i<6;i++)r[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,r=fi){const i=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],u=n[4],c=n[5],p=n[6],d=n[7],m=n[8],_=n[9],x=n[10],g=n[11],h=n[12],v=n[13],f=n[14],y=n[15];if(i[0].setComponents(l-a,d-u,g-m,y-h).normalize(),i[1].setComponents(l+a,d+u,g+m,y+h).normalize(),i[2].setComponents(l+s,d+c,g+_,y+v).normalize(),i[3].setComponents(l-s,d-c,g-_,y-v).normalize(),i[4].setComponents(l-o,d-p,g-x,y-f).normalize(),r===fi)i[5].setComponents(l+o,d+p,g+x,y+f).normalize();else if(r===Tl)i[5].setComponents(o,p,x,f).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),sn.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sn)}intersectsSprite(e){return sn.center.set(0,0,0),sn.radius=.7071067811865476,sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(sn)}intersectsSphere(e){const r=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(r[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const r=this.planes;for(let i=0;i<6;i++){const n=r[i];if(Io.x=n.normal.x>0?e.max.x:e.min.x,Io.y=n.normal.y>0?e.max.y:e.min.y,Io.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let i=0;i<6;i++)if(r[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function a0(){let t=null,e=!1,r=null,i=null;function n(a,s){r(a,s),i=t.requestAnimationFrame(n)}return{start:function(){e!==!0&&r!==null&&(i=t.requestAnimationFrame(n),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){r=a},setContext:function(a){t=a}}}function X1(t,e){const r=e.isWebGL2,i=new WeakMap;function n(u,c){const p=u.array,d=u.usage,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,p,d),u.onUploadCallback();let _;if(p instanceof Float32Array)_=t.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(r)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=t.SHORT;else if(p instanceof Uint32Array)_=t.UNSIGNED_INT;else if(p instanceof Int32Array)_=t.INT;else if(p instanceof Int8Array)_=t.BYTE;else if(p instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version}}function a(u,c,p){const d=c.array,m=c.updateRange;t.bindBuffer(p,u),m.count===-1?t.bufferSubData(p,0,d):(r?t.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);p===void 0?i.set(u,n(u,c)):p.version<u.version&&(a(p.buffer,u,c),p.version=u.version)}return{get:s,remove:o,update:l}}class Kl extends Jt{constructor(e=1,r=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:i,heightSegments:n};const a=e/2,s=r/2,o=Math.floor(i),l=Math.floor(n),u=o+1,c=l+1,p=e/o,d=r/l,m=[],_=[],x=[],g=[];for(let h=0;h<c;h++){const v=h*d-s;for(let f=0;f<u;f++){const y=f*p-a;_.push(y,-v,0),x.push(0,0,1),g.push(f/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const f=v+u*h,y=v+u*(h+1),b=v+1+u*(h+1),w=v+1+u*h;m.push(f,y,w),m.push(y,b,w)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var j1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yM="gl_FragColor = linearToOutputTexel( gl_FragColor );",MM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,DM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,VM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,YM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,KM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ZM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,aS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,oS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,lS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_S=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ES=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,LS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,US=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ZS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,db=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:j1,alphahash_pars_fragment:Y1,alphamap_fragment:q1,alphamap_pars_fragment:J1,alphatest_fragment:K1,alphatest_pars_fragment:Z1,aomap_fragment:Q1,aomap_pars_fragment:$1,begin_vertex:eM,beginnormal_vertex:tM,bsdfs:rM,iridescence_fragment:iM,bumpmap_pars_fragment:nM,clipping_planes_fragment:aM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:oM,clipping_planes_vertex:lM,color_fragment:uM,color_pars_fragment:cM,color_pars_vertex:hM,color_vertex:dM,common:pM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:vM,emissivemap_fragment:_M,emissivemap_pars_fragment:xM,colorspace_fragment:yM,colorspace_pars_fragment:MM,envmap_fragment:SM,envmap_common_pars_fragment:bM,envmap_pars_fragment:EM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:FM,envmap_vertex:TM,fog_vertex:AM,fog_pars_vertex:RM,fog_fragment:CM,fog_pars_fragment:PM,gradientmap_pars_fragment:LM,lightmap_fragment:UM,lightmap_pars_fragment:DM,lights_lambert_fragment:IM,lights_lambert_pars_fragment:NM,lights_pars_begin:OM,lights_toon_fragment:zM,lights_toon_pars_fragment:kM,lights_phong_fragment:BM,lights_phong_pars_fragment:HM,lights_physical_fragment:GM,lights_physical_pars_fragment:VM,lights_fragment_begin:WM,lights_fragment_maps:XM,lights_fragment_end:jM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:qM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:KM,map_fragment:ZM,map_pars_fragment:QM,map_particle_fragment:$M,map_particle_pars_fragment:eS,metalnessmap_fragment:tS,metalnessmap_pars_fragment:rS,morphcolor_vertex:iS,morphnormal_vertex:nS,morphtarget_pars_vertex:aS,morphtarget_vertex:sS,normal_fragment_begin:oS,normal_fragment_maps:lS,normal_pars_fragment:uS,normal_pars_vertex:cS,normal_vertex:hS,normalmap_pars_fragment:dS,clearcoat_normal_fragment_begin:pS,clearcoat_normal_fragment_maps:fS,clearcoat_pars_fragment:mS,iridescence_pars_fragment:gS,opaque_fragment:vS,packing:_S,premultiplied_alpha_fragment:xS,project_vertex:yS,dithering_fragment:MS,dithering_pars_fragment:SS,roughnessmap_fragment:bS,roughnessmap_pars_fragment:ES,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:TS,shadowmap_vertex:AS,shadowmask_pars_fragment:RS,skinbase_vertex:CS,skinning_pars_vertex:PS,skinning_vertex:LS,skinnormal_vertex:US,specularmap_fragment:DS,specularmap_pars_fragment:IS,tonemapping_fragment:NS,tonemapping_pars_fragment:OS,transmission_fragment:FS,transmission_pars_fragment:zS,uv_pars_fragment:kS,uv_pars_vertex:BS,uv_vertex:HS,worldpos_vertex:GS,background_vert:VS,background_frag:WS,backgroundCube_vert:XS,backgroundCube_frag:jS,cube_vert:YS,cube_frag:qS,depth_vert:JS,depth_frag:KS,distanceRGBA_vert:ZS,distanceRGBA_frag:QS,equirect_vert:$S,equirect_frag:eb,linedashed_vert:tb,linedashed_frag:rb,meshbasic_vert:ib,meshbasic_frag:nb,meshlambert_vert:ab,meshlambert_frag:sb,meshmatcap_vert:ob,meshmatcap_frag:lb,meshnormal_vert:ub,meshnormal_frag:cb,meshphong_vert:hb,meshphong_frag:db,meshphysical_vert:pb,meshphysical_frag:fb,meshtoon_vert:mb,meshtoon_frag:gb,points_vert:vb,points_frag:_b,shadow_vert:xb,shadow_frag:yb,sprite_vert:Mb,sprite_frag:Sb},de={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},qr={basic:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new we(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Xt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Xt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new we(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Xt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Xt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Xt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Xt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Xt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Xt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Xt([de.common,de.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Xt([de.lights,de.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};qr.physical={uniforms:Xt([qr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const No={r:0,b:0,g:0};function bb(t,e,r,i,n,a,s){const o=new we(0);let l=a===!0?0:1,u,c,p=null,d=0,m=null;function _(g,h){let v=!1,f=h.isScene===!0?h.background:null;f&&f.isTexture&&(f=(h.backgroundBlurriness>0?r:e).get(f)),f===null?x(o,l):f&&f.isColor&&(x(f,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),f&&(f.isCubeTexture||f.mapping===jl)?(c===void 0&&(c=new Ye(new Yi(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:La(qr.backgroundCube.uniforms),vertexShader:qr.backgroundCube.vertexShader,fragmentShader:qr.backgroundCube.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=f,c.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=f.colorSpace!==rt,(p!==f||d!==f.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=f,d=f.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):f&&f.isTexture&&(u===void 0&&(u=new Ye(new Kl(2,2),new cr({name:"BackgroundMaterial",uniforms:La(qr.background.uniforms),vertexShader:qr.background.vertexShader,fragmentShader:qr.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=f,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=f.colorSpace!==rt,f.matrixAutoUpdate===!0&&f.updateMatrix(),u.material.uniforms.uvTransform.value.copy(f.matrix),(p!==f||d!==f.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,p=f,d=f.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function x(g,h){g.getRGB(No,r0(t)),i.buffers.color.setClear(No.r,No.g,No.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(g,h=1){o.set(g),l=h,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(o,l)},render:_}}function Eb(t,e,r,i){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=g(null);let u=l,c=!1;function p(F,G,Q,K,D){let W=!1;if(s){const H=x(K,Q,G);u!==H&&(u=H,m(u.object)),W=h(F,K,Q,D),W&&v(F,K,Q,D)}else{const H=G.wireframe===!0;(u.geometry!==K.id||u.program!==Q.id||u.wireframe!==H)&&(u.geometry=K.id,u.program=Q.id,u.wireframe=H,W=!0)}D!==null&&r.update(D,t.ELEMENT_ARRAY_BUFFER),(W||c)&&(c=!1,C(F,G,Q,K),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r.get(D).buffer))}function d(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function m(F){return i.isWebGL2?t.bindVertexArray(F):a.bindVertexArrayOES(F)}function _(F){return i.isWebGL2?t.deleteVertexArray(F):a.deleteVertexArrayOES(F)}function x(F,G,Q){const K=Q.wireframe===!0;let D=o[F.id];D===void 0&&(D={},o[F.id]=D);let W=D[G.id];W===void 0&&(W={},D[G.id]=W);let H=W[K];return H===void 0&&(H=g(d()),W[K]=H),H}function g(F){const G=[],Q=[],K=[];for(let D=0;D<n;D++)G[D]=0,Q[D]=0,K[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:K,object:F,attributes:{},index:null}}function h(F,G,Q,K){const D=u.attributes,W=G.attributes;let H=0;const N=Q.getAttributes();for(const j in N)if(N[j].location>=0){const ie=D[j];let he=W[j];if(he===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(he=F.instanceColor)),ie===void 0||ie.attribute!==he||he&&ie.data!==he.data)return!0;H++}return u.attributesNum!==H||u.index!==K}function v(F,G,Q,K){const D={},W=G.attributes;let H=0;const N=Q.getAttributes();for(const j in N)if(N[j].location>=0){let ie=W[j];ie===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor));const he={};he.attribute=ie,ie&&ie.data&&(he.data=ie.data),D[j]=he,H++}u.attributes=D,u.attributesNum=H,u.index=K}function f(){const F=u.newAttributes;for(let G=0,Q=F.length;G<Q;G++)F[G]=0}function y(F){b(F,0)}function b(F,G){const Q=u.newAttributes,K=u.enabledAttributes,D=u.attributeDivisors;Q[F]=1,K[F]===0&&(t.enableVertexAttribArray(F),K[F]=1),D[F]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,G),D[F]=G)}function w(){const F=u.newAttributes,G=u.enabledAttributes;for(let Q=0,K=G.length;Q<K;Q++)G[Q]!==F[Q]&&(t.disableVertexAttribArray(Q),G[Q]=0)}function T(F,G,Q,K,D,W,H){H===!0?t.vertexAttribIPointer(F,G,Q,D,W):t.vertexAttribPointer(F,G,Q,K,D,W)}function C(F,G,Q,K){if(i.isWebGL2===!1&&(F.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();const D=K.attributes,W=Q.getAttributes(),H=G.defaultAttributeValues;for(const N in W){const j=W[N];if(j.location>=0){let ie=D[N];if(ie===void 0&&(N==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),N==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor)),ie!==void 0){const he=ie.normalized,Me=ie.itemSize,_e=r.get(ie);if(_e===void 0)continue;const Re=_e.buffer,Le=_e.type,ze=_e.bytesPerElement,tt=i.isWebGL2===!0&&(Le===t.INT||Le===t.UNSIGNED_INT||ie.gpuType===Bv);if(ie.isInterleavedBufferAttribute){const Z=ie.data,P=Z.stride,le=ie.offset;if(Z.isInstancedInterleavedBuffer){for(let te=0;te<j.locationSize;te++)b(j.location+te,Z.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let te=0;te<j.locationSize;te++)y(j.location+te);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let te=0;te<j.locationSize;te++)T(j.location+te,Me/j.locationSize,Le,he,P*ze,(le+Me/j.locationSize*te)*ze,tt)}else{if(ie.isInstancedBufferAttribute){for(let Z=0;Z<j.locationSize;Z++)b(j.location+Z,ie.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Z=0;Z<j.locationSize;Z++)y(j.location+Z);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let Z=0;Z<j.locationSize;Z++)T(j.location+Z,Me/j.locationSize,Le,he,Me*ze,Me/j.locationSize*Z*ze,tt)}}else if(H!==void 0){const he=H[N];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(j.location,he);break;case 3:t.vertexAttrib3fv(j.location,he);break;case 4:t.vertexAttrib4fv(j.location,he);break;default:t.vertexAttrib1fv(j.location,he)}}}}w()}function M(){V();for(const F in o){const G=o[F];for(const Q in G){const K=G[Q];for(const D in K)_(K[D].object),delete K[D];delete G[Q]}delete o[F]}}function S(F){if(o[F.id]===void 0)return;const G=o[F.id];for(const Q in G){const K=G[Q];for(const D in K)_(K[D].object),delete K[D];delete G[Q]}delete o[F.id]}function z(F){for(const G in o){const Q=o[G];if(Q[F.id]===void 0)continue;const K=Q[F.id];for(const D in K)_(K[D].object),delete K[D];delete Q[F.id]}}function V(){I(),c=!0,u!==l&&(u=l,m(u.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:V,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:z,initAttributes:f,enableAttribute:y,disableUnusedAttributes:w}}function wb(t,e,r,i){const n=i.isWebGL2;let a;function s(u){a=u}function o(u,c){t.drawArrays(a,u,c),r.update(c,a,1)}function l(u,c,p){if(p===0)return;let d,m;if(n)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](a,u,c,p),r.update(c,a,p)}this.setMode=s,this.render=o,this.renderInstances=l}function Tb(t,e,r){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=r.precision!==void 0?r.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=s||e.has("WEBGL_draw_buffers"),c=r.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),f=d>0,y=s||e.has("OES_texture_float"),b=f&&y,w=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:n,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:c,maxTextures:p,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:f,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:w}}function Ab(t){const e=this;let r=null,i=0,n=!1,a=!1;const s=new un,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||n;return n=d,i=p.length,m},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,d){r=c(p,d,0)},this.setState=function(p,d,m){const _=p.clippingPlanes,x=p.clipIntersection,g=p.clipShadows,h=t.get(p);if(!n||_===null||_.length===0||a&&!g)a?c(null):u();else{const v=a?0:i,f=v*4;let y=h.clippingState||null;l.value=y,y=c(_,d,f,m);for(let b=0;b!==f;++b)y[b]=r[b];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(p,d,m,_){const x=p!==null?p.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const h=m+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let f=0,y=m;f!==x;++f,y+=4)s.copy(p[f]).applyMatrix4(v,o),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Rb(t){let e=new WeakMap;function r(s,o){return o===ah?s.mapping=Ra:o===sh&&(s.mapping=Ca),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===ah||o===sh)if(e.has(s)){const l=e.get(s).texture;return r(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new G1(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",n),r(u.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class gd extends i0{constructor(e=-1,r=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=n+r,l=n-r;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,s=a+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const ca=4,Of=[.125,.215,.35,.446,.526,.582],hn=20,tc=new gd,Ff=new we;let rc=null;const cn=(1+Math.sqrt(5))/2,Jn=1/cn,zf=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,cn,Jn),new U(0,cn,-Jn),new U(Jn,0,cn),new U(-Jn,0,cn),new U(cn,Jn,0),new U(-cn,Jn,0)];class kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,i=.1,n=100){rc=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),r>0&&this._blur(a,0,0,r),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rc),e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===Ra||e.mapping===Ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rc=this._renderer.getRenderTarget();const i=r||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,i={magFilter:Mr,minFilter:Mr,generateMipmaps:!1,type:vi,format:zr,colorSpace:$r,depthBuffer:!1},n=Bf(e,r,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bf(e,r,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(a)),this._blurMaterial=Pb(a,e,r)}return n}_compileMaterial(e){const r=new Ye(this._lodPlanes[0],e);this._renderer.compile(r,tc)}_sceneToCubeUV(e,r,i,n){const a=new Sr(90,1,r,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,c=l.toneMapping;l.getClearColor(Ff),l.toneMapping=Xi,l.autoClear=!1;const p=new Js({name:"PMREM.Background",side:ir,depthWrite:!1,depthTest:!1}),d=new Ye(new Yi,p);let m=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(Ff),m=!0);for(let x=0;x<6;x++){const g=x%3;g===0?(a.up.set(0,s[x],0),a.lookAt(o[x],0,0)):g===1?(a.up.set(0,0,s[x]),a.lookAt(0,o[x],0)):(a.up.set(0,s[x],0),a.lookAt(0,0,o[x]));const h=this._cubeSize;Oo(n,g*h,x>2?h:0,h,h),l.setRenderTarget(n),m&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=c,l.autoClear=u,e.background=_}_textureToCubeUV(e,r){const i=this._renderer,n=e.mapping===Ra||e.mapping===Ca;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new Ye(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Oo(r,0,0,3*l,2*l),i.setRenderTarget(r),i.render(s,tc)}_applyPMREM(e){const r=this._renderer,i=r.autoClear;r.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=zf[(n-1)%zf.length];this._blur(e,n-1,n,a,s)}r.autoClear=i}_blur(e,r,i,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,r,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,r,i,n,a,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,p=new Ye(this._lodPlanes[n],u),d=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*hn-1),x=a/_,g=isFinite(a)?1+Math.floor(c*x):hn;g>hn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hn}`);const h=[];let v=0;for(let T=0;T<hn;++T){const C=T/x,M=Math.exp(-C*C/2);h.push(M),T===0?v+=M:T<g&&(v+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:f}=this;d.dTheta.value=_,d.mipInt.value=f-i;const y=this._sizeLods[n],b=3*y*(n>f-ca?n-f+ca:0),w=4*(this._cubeSize-y);Oo(r,b,w,3*y,2*y),l.setRenderTarget(r),l.render(p,tc)}}function Cb(t){const e=[],r=[],i=[];let n=t;const a=t-ca+1+Of.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);r.push(o);let l=1/o;s>t-ca?l=Of[s-t+ca-1]:s===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,p=1+u,d=[c,c,p,c,p,p,c,c,p,p,c,p],m=6,_=6,x=3,g=2,h=1,v=new Float32Array(x*_*m),f=new Float32Array(g*_*m),y=new Float32Array(h*_*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,C=w>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(M,x*_*w),f.set(d,g*_*w);const S=[w,w,w,w,w,w];y.set(S,h*_*w)}const b=new Jt;b.setAttribute("position",new Gr(v,x)),b.setAttribute("uv",new Gr(f,g)),b.setAttribute("faceIndex",new Gr(y,h)),e.push(b),n>ca&&n--}return{lodPlanes:e,sizeLods:r,sigmas:i}}function Bf(t,e,r){const i=new Hr(t,e,r);return i.texture.mapping=jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(t,e,r,i,n){t.viewport.set(e,r,i,n),t.scissor.set(e,r,i,n)}function Pb(t,e,r){const i=new Float32Array(hn),n=new U(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Hf(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Gf(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lb(t){let e=new WeakMap,r=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===ah||l===sh,c=l===Ra||l===Ca;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return r===null&&(r=new kf(t)),p=u?r.fromEquirectangular(o,p):r.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(u&&p&&p.height>0||c&&p&&n(p)){r===null&&(r=new kf(t));const d=u?r.fromEquirectangular(o):r.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",a),d.texture}else return null}}}return o}function n(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function a(o){const l=o.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:s}}function Ub(t){const e={};function r(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=t.getExtension(i)}return e[i]=n,n}return{has:function(i){return r(i)!==null},init:function(i){i.isWebGL2?r("EXT_color_buffer_float"):(r("WEBGL_depth_texture"),r("OES_texture_float"),r("OES_texture_half_float"),r("OES_texture_half_float_linear"),r("OES_standard_derivatives"),r("OES_element_index_uint"),r("OES_vertex_array_object"),r("ANGLE_instanced_arrays")),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture")},get:function(i){const n=r(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Db(t,e,r,i){const n={},a=new WeakMap;function s(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let g=0,h=x.length;g<h;g++)e.remove(x[g])}d.removeEventListener("dispose",s),delete n[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,r.memory.geometries--}function o(p,d){return n[d.id]===!0||(d.addEventListener("dispose",s),n[d.id]=!0,r.memory.geometries++),d}function l(p){const d=p.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const x=m[_];for(let g=0,h=x.length;g<h;g++)e.update(x[g],t.ARRAY_BUFFER)}}function u(p){const d=[],m=p.index,_=p.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let f=0,y=v.length;f<y;f+=3){const b=v[f+0],w=v[f+1],T=v[f+2];d.push(b,w,w,T,T,b)}}else if(_!==void 0){const v=_.array;x=_.version;for(let f=0,y=v.length/3-1;f<y;f+=3){const b=f+0,w=f+1,T=f+2;d.push(b,w,w,T,T,b)}}else return;const g=new(Yv(d)?t0:e0)(d,1);g.version=x;const h=a.get(p);h&&e.remove(h),a.set(p,g)}function c(p){const d=a.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&u(p)}else u(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:c}}function Ib(t,e,r,i){const n=i.isWebGL2;let a;function s(d){a=d}let o,l;function u(d){o=d.type,l=d.bytesPerElement}function c(d,m){t.drawElements(a,m,o,d*l),r.update(m,a,1)}function p(d,m,_){if(_===0)return;let x,g;if(n)x=t,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](a,m,o,d*l,_),r.update(m,a,_)}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=p}function Nb(t){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(r.calls++,s){case t.TRIANGLES:r.triangles+=o*(a/3);break;case t.LINES:r.lines+=o*(a/2);break;case t.LINE_STRIP:r.lines+=o*(a-1);break;case t.LINE_LOOP:r.lines+=o*a;break;case t.POINTS:r.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:n,update:i}}function Ob(t,e){return t[0]-e[0]}function Fb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function zb(t,e,r){const i={},n=new Float32Array(8),a=new WeakMap,s=new Ct,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,p){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=m!==void 0?m.length:0;let x=a.get(c);if(x===void 0||x.count!==_){let v=function(){I.dispose(),a.delete(c),c.removeEventListener("dispose",v)};x!==void 0&&x.texture.dispose();const f=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let M=0;f===!0&&(M=1),y===!0&&(M=2),b===!0&&(M=3);let S=c.attributes.position.count*M,z=1;S>e.maxTextureSize&&(z=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const V=new Float32Array(S*z*4*_),I=new Kv(V,S,z,_);I.type=Oi,I.needsUpdate=!0;const F=M*4;for(let G=0;G<_;G++){const Q=w[G],K=T[G],D=C[G],W=S*z*4*G;for(let H=0;H<Q.count;H++){const N=H*F;f===!0&&(s.fromBufferAttribute(Q,H),V[W+N+0]=s.x,V[W+N+1]=s.y,V[W+N+2]=s.z,V[W+N+3]=0),y===!0&&(s.fromBufferAttribute(K,H),V[W+N+4]=s.x,V[W+N+5]=s.y,V[W+N+6]=s.z,V[W+N+7]=0),b===!0&&(s.fromBufferAttribute(D,H),V[W+N+8]=s.x,V[W+N+9]=s.y,V[W+N+10]=s.z,V[W+N+11]=D.itemSize===4?s.w:1)}}x={count:_,texture:I,size:new ne(S,z)},a.set(c,x),c.addEventListener("dispose",v)}let g=0;for(let v=0;v<d.length;v++)g+=d[v];const h=c.morphTargetsRelative?1:1-g;p.getUniforms().setValue(t,"morphTargetBaseInfluence",h),p.getUniforms().setValue(t,"morphTargetInfluences",d),p.getUniforms().setValue(t,"morphTargetsTexture",x.texture,r),p.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const m=d===void 0?0:d.length;let _=i[c.id];if(_===void 0||_.length!==m){_=[];for(let f=0;f<m;f++)_[f]=[f,0];i[c.id]=_}for(let f=0;f<m;f++){const y=_[f];y[0]=f,y[1]=d[f]}_.sort(Fb);for(let f=0;f<8;f++)f<m&&_[f][1]?(o[f][0]=_[f][0],o[f][1]=_[f][1]):(o[f][0]=Number.MAX_SAFE_INTEGER,o[f][1]=0);o.sort(Ob);const x=c.morphAttributes.position,g=c.morphAttributes.normal;let h=0;for(let f=0;f<8;f++){const y=o[f],b=y[0],w=y[1];b!==Number.MAX_SAFE_INTEGER&&w?(x&&c.getAttribute("morphTarget"+f)!==x[b]&&c.setAttribute("morphTarget"+f,x[b]),g&&c.getAttribute("morphNormal"+f)!==g[b]&&c.setAttribute("morphNormal"+f,g[b]),n[f]=w,h+=w):(x&&c.hasAttribute("morphTarget"+f)===!0&&c.deleteAttribute("morphTarget"+f),g&&c.hasAttribute("morphNormal"+f)===!0&&c.deleteAttribute("morphNormal"+f),n[f]=0)}const v=c.morphTargetsRelative?1:1-h;p.getUniforms().setValue(t,"morphTargetBaseInfluence",v),p.getUniforms().setValue(t,"morphTargetInfluences",n)}}return{update:l}}function kb(t,e,r,i){let n=new WeakMap;function a(l){const u=i.render.frame,c=l.geometry,p=e.get(l,c);if(n.get(p)!==u&&(e.update(p),n.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==u&&(r.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,t.ARRAY_BUFFER),n.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==u&&(d.update(),n.set(d,u))}return p}function s(){n=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),r.remove(u.instanceMatrix),u.instanceColor!==null&&r.remove(u.instanceColor)}return{update:a,dispose:s}}const s0=new dr,o0=new Kv,l0=new T1,u0=new n0,Vf=[],Wf=[],Xf=new Float32Array(16),jf=new Float32Array(9),Yf=new Float32Array(4);function Fa(t,e,r){const i=t[0];if(i<=0||i>0)return t;const n=e*r;let a=Vf[n];if(a===void 0&&(a=new Float32Array(n),Vf[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=r,t[s].toArray(a,o)}return a}function Et(t,e){if(t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==e[r])return!1;return!0}function wt(t,e){for(let r=0,i=e.length;r<i;r++)t[r]=e[r]}function Zl(t,e){let r=Wf[e];r===void 0&&(r=new Int32Array(e),Wf[e]=r);for(let i=0;i!==e;++i)r[i]=t.allocateTextureUnit();return r}function Bb(t,e){const r=this.cache;r[0]!==e&&(t.uniform1f(this.addr,e),r[0]=e)}function Hb(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Et(r,e))return;t.uniform2fv(this.addr,e),wt(r,e)}}function Gb(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(Et(r,e))return;t.uniform3fv(this.addr,e),wt(r,e)}}function Vb(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Et(r,e))return;t.uniform4fv(this.addr,e),wt(r,e)}}function Wb(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Et(r,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(r,e)}else{if(Et(r,i))return;Yf.set(i),t.uniformMatrix2fv(this.addr,!1,Yf),wt(r,i)}}function Xb(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Et(r,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(r,e)}else{if(Et(r,i))return;jf.set(i),t.uniformMatrix3fv(this.addr,!1,jf),wt(r,i)}}function jb(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Et(r,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(r,e)}else{if(Et(r,i))return;Xf.set(i),t.uniformMatrix4fv(this.addr,!1,Xf),wt(r,i)}}function Yb(t,e){const r=this.cache;r[0]!==e&&(t.uniform1i(this.addr,e),r[0]=e)}function qb(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Et(r,e))return;t.uniform2iv(this.addr,e),wt(r,e)}}function Jb(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Et(r,e))return;t.uniform3iv(this.addr,e),wt(r,e)}}function Kb(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Et(r,e))return;t.uniform4iv(this.addr,e),wt(r,e)}}function Zb(t,e){const r=this.cache;r[0]!==e&&(t.uniform1ui(this.addr,e),r[0]=e)}function Qb(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Et(r,e))return;t.uniform2uiv(this.addr,e),wt(r,e)}}function $b(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Et(r,e))return;t.uniform3uiv(this.addr,e),wt(r,e)}}function eE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Et(r,e))return;t.uniform4uiv(this.addr,e),wt(r,e)}}function tE(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture2D(e||s0,n)}function rE(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture3D(e||l0,n)}function iE(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTextureCube(e||u0,n)}function nE(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture2DArray(e||o0,n)}function aE(t){switch(t){case 5126:return Bb;case 35664:return Hb;case 35665:return Gb;case 35666:return Vb;case 35674:return Wb;case 35675:return Xb;case 35676:return jb;case 5124:case 35670:return Yb;case 35667:case 35671:return qb;case 35668:case 35672:return Jb;case 35669:case 35673:return Kb;case 5125:return Zb;case 36294:return Qb;case 36295:return $b;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return rE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return nE}}function sE(t,e){t.uniform1fv(this.addr,e)}function oE(t,e){const r=Fa(e,this.size,2);t.uniform2fv(this.addr,r)}function lE(t,e){const r=Fa(e,this.size,3);t.uniform3fv(this.addr,r)}function uE(t,e){const r=Fa(e,this.size,4);t.uniform4fv(this.addr,r)}function cE(t,e){const r=Fa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function hE(t,e){const r=Fa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function dE(t,e){const r=Fa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function pE(t,e){t.uniform1iv(this.addr,e)}function fE(t,e){t.uniform2iv(this.addr,e)}function mE(t,e){t.uniform3iv(this.addr,e)}function gE(t,e){t.uniform4iv(this.addr,e)}function vE(t,e){t.uniform1uiv(this.addr,e)}function _E(t,e){t.uniform2uiv(this.addr,e)}function xE(t,e){t.uniform3uiv(this.addr,e)}function yE(t,e){t.uniform4uiv(this.addr,e)}function ME(t,e,r){const i=this.cache,n=e.length,a=Zl(r,n);Et(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==n;++s)r.setTexture2D(e[s]||s0,a[s])}function SE(t,e,r){const i=this.cache,n=e.length,a=Zl(r,n);Et(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==n;++s)r.setTexture3D(e[s]||l0,a[s])}function bE(t,e,r){const i=this.cache,n=e.length,a=Zl(r,n);Et(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==n;++s)r.setTextureCube(e[s]||u0,a[s])}function EE(t,e,r){const i=this.cache,n=e.length,a=Zl(r,n);Et(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==n;++s)r.setTexture2DArray(e[s]||o0,a[s])}function wE(t){switch(t){case 5126:return sE;case 35664:return oE;case 35665:return lE;case 35666:return uE;case 35674:return cE;case 35675:return hE;case 35676:return dE;case 5124:case 35670:return pE;case 35667:case 35671:return fE;case 35668:case 35672:return mE;case 35669:case 35673:return gE;case 5125:return vE;case 36294:return _E;case 36295:return xE;case 36296:return yE;case 35678:case 36198:case 36298:case 36306:case 35682:return ME;case 35679:case 36299:case 36307:return SE;case 35680:case 36300:case 36308:case 36293:return bE;case 36289:case 36303:case 36311:case 36292:return EE}}class TE{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.setValue=aE(r.type)}}class AE{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.size=r.size,this.setValue=wE(r.type)}}class RE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,i){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,r[o.id],i)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function qf(t,e){t.seq.push(e),t.map[e.id]=e}function CE(t,e,r){const i=t.name,n=i.length;for(ic.lastIndex=0;;){const a=ic.exec(i),s=ic.lastIndex;let o=a[1];const l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===n){qf(r,u===void 0?new TE(o,t,e):new AE(o,t,e));break}else{let c=r.map[o];c===void 0&&(c=new RE(o),qf(r,c)),r=c}}}class el{constructor(e,r){this.seq=[],this.map={};const i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(r,n),s=e.getUniformLocation(r,a.name);CE(a,s,this)}}setValue(e,r,i,n){const a=this.map[r];a!==void 0&&a.setValue(e,i,n)}setOptional(e,r,i){const n=r[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,r,i,n){for(let a=0,s=r.length;a!==s;++a){const o=r[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,r){const i=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in r&&i.push(s)}return i}}function Jf(t,e,r){const i=t.createShader(e);return t.shaderSource(i,r),t.compileShader(i),i}let PE=0;function LE(t,e){const r=t.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,r.length);for(let s=n;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${r[s]}`)}return i.join(`
`)}function UE(t){switch(t){case $r:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Kf(t,e,r){const i=t.getShaderParameter(e,t.COMPILE_STATUS),n=t.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return r.toUpperCase()+`

`+n+`

`+LE(t.getShaderSource(e),s)}else return n}function DE(t,e){const r=UE(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+r[0]+r[1]+"; }"}function IE(t,e){let r;switch(e){case Cy:r="Linear";break;case Py:r="Reinhard";break;case Ly:r="OptimizedCineon";break;case Uy:r="ACESFilmic";break;case Dy:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+t+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}function NE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function OE(t){const e=[];for(const r in t){const i=t[r];i!==!1&&e.push("#define "+r+" "+i)}return e.join(`
`)}function FE(t,e){const r={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=t.getActiveAttrib(e,n),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),r[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return r}function is(t){return t!==""}function Zf(t,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zE=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(t){return t.replace(zE,BE)}const kE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function BE(t,e){let r=He[e];if(r===void 0){const i=kE.get(e);if(i!==void 0)r=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hh(r)}const HE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(t){return t.replace(HE,GE)}function GE(t,e,r,i){let n="";for(let a=parseInt(e);a<parseInt(r);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function em(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ov?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===oy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function WE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ra:case Ca:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ca:e="ENVMAP_MODE_REFRACTION";break}return e}function jE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case Ay:e="ENVMAP_BLENDING_MIX";break;case Ry:e="ENVMAP_BLENDING_ADD";break}return e}function YE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:i,maxMip:r}}function qE(t,e,r,i){const n=t.getContext(),a=r.defines;let s=r.vertexShader,o=r.fragmentShader;const l=VE(r),u=WE(r),c=XE(r),p=jE(r),d=YE(r),m=r.isWebGL2?"":NE(r),_=OE(a),x=n.createProgram();let g,h,v=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(g=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_].filter(is).join(`
`),g.length>0&&(g+=`
`),h=[m,"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_].filter(is).join(`
`),h.length>0&&(h+=`
`)):(g=[em(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_,r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors&&r.isWebGL2?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0&&r.isWebGL2?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.useLegacyLights?"#define LEGACY_LIGHTS":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&r.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),h=[m,em(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+u:"",r.envMap?"#define "+c:"",r.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.useLegacyLights?"#define LEGACY_LIGHTS":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&r.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Xi?"#define TONE_MAPPING":"",r.toneMapping!==Xi?He.tonemapping_pars_fragment:"",r.toneMapping!==Xi?IE("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,DE("linearToOutputTexel",r.outputColorSpace),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(is).join(`
`)),s=hh(s),s=Zf(s,r),s=Qf(s,r),o=hh(o),o=Zf(o,r),o=Qf(o,r),s=$f(s),o=$f(o),r.isWebGL2&&r.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",r.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const f=v+g+s,y=v+h+o,b=Jf(n,n.VERTEX_SHADER,f),w=Jf(n,n.FRAGMENT_SHADER,y);if(n.attachShader(x,b),n.attachShader(x,w),r.index0AttributeName!==void 0?n.bindAttribLocation(x,0,r.index0AttributeName):r.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x),t.debug.checkShaderErrors){const M=n.getProgramInfoLog(x).trim(),S=n.getShaderInfoLog(b).trim(),z=n.getShaderInfoLog(w).trim();let V=!0,I=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,x,b,w);else{const F=Kf(n,b,"vertex"),G=Kf(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+F+`
`+G)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(S===""||z==="")&&(I=!1);I&&(this.diagnostics={runnable:V,programLog:M,vertexShader:{log:S,prefix:g},fragmentShader:{log:z,prefix:h}})}n.deleteShader(b),n.deleteShader(w);let T;this.getUniforms=function(){return T===void 0&&(T=new el(n,x)),T};let C;return this.getAttributes=function(){return C===void 0&&(C=FE(n,x)),C},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=PE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=w,this}let JE=0;class KE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(r),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const i of r)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let i=r.get(e);return i===void 0&&(i=new Set,r.set(e,i)),i}_getShaderStage(e){const r=this.shaderCache;let i=r.get(e);return i===void 0&&(i=new ZE(e),r.set(e,i)),i}}class ZE{constructor(e){this.id=JE++,this.code=e,this.usedTimes=0}}function QE(t,e,r,i,n,a,s){const o=new Qv,l=new KE,u=[],c=n.isWebGL2,p=n.logarithmicDepthBuffer,d=n.vertexTextures;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function g(M,S,z,V,I){const F=V.fog,G=I.geometry,Q=M.isMeshStandardMaterial?V.environment:null,K=(M.isMeshStandardMaterial?r:e).get(M.envMap||Q),D=K&&K.mapping===jl?K.image.height:null,W=_[M.type];M.precision!==null&&(m=n.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const H=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,N=H!==void 0?H.length:0;let j=0;G.morphAttributes.position!==void 0&&(j=1),G.morphAttributes.normal!==void 0&&(j=2),G.morphAttributes.color!==void 0&&(j=3);let ie,he,Me,_e;if(W){const Wr=qr[W];ie=Wr.vertexShader,he=Wr.fragmentShader}else ie=M.vertexShader,he=M.fragmentShader,l.update(M),Me=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const Re=t.getRenderTarget(),Le=I.isInstancedMesh===!0,ze=!!M.map,tt=!!M.matcap,Z=!!K,P=!!M.aoMap,le=!!M.lightMap,te=!!M.bumpMap,$=!!M.normalMap,pe=!!M.displacementMap,Te=!!M.emissiveMap,Se=!!M.metalnessMap,Ee=!!M.roughnessMap,Ne=M.anisotropy>0,nt=M.clearcoat>0,gt=M.iridescence>0,R=M.sheen>0,E=M.transmission>0,k=Ne&&!!M.anisotropyMap,se=nt&&!!M.clearcoatMap,re=nt&&!!M.clearcoatNormalMap,ae=nt&&!!M.clearcoatRoughnessMap,be=gt&&!!M.iridescenceMap,oe=gt&&!!M.iridescenceThicknessMap,Y=R&&!!M.sheenColorMap,Ce=R&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,Ue=!!M.specularColorMap,xe=!!M.specularIntensityMap,ye=E&&!!M.transmissionMap,Ve=E&&!!M.thicknessMap,Ke=!!M.gradientMap,L=!!M.alphaMap,fe=M.alphaTest>0,X=!!M.alphaHash,ue=!!M.extensions,ce=!!G.attributes.uv1,Qe=!!G.attributes.uv2,at=!!G.attributes.uv3;let vt=Xi;return M.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(vt=t.toneMapping),{isWebGL2:c,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:ie,fragmentShader:he,defines:M.defines,customVertexShaderID:Me,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Le,instancingColor:Le&&I.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Re===null?t.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:$r,map:ze,matcap:tt,envMap:Z,envMapMode:Z&&K.mapping,envMapCubeUVHeight:D,aoMap:P,lightMap:le,bumpMap:te,normalMap:$,displacementMap:d&&pe,emissiveMap:Te,normalMapObjectSpace:$&&M.normalMapType===jy,normalMapTangentSpace:$&&M.normalMapType===pd,metalnessMap:Se,roughnessMap:Ee,anisotropy:Ne,anisotropyMap:k,clearcoat:nt,clearcoatMap:se,clearcoatNormalMap:re,clearcoatRoughnessMap:ae,iridescence:gt,iridescenceMap:be,iridescenceThicknessMap:oe,sheen:R,sheenColorMap:Y,sheenRoughnessMap:Ce,specularMap:Ae,specularColorMap:Ue,specularIntensityMap:xe,transmission:E,transmissionMap:ye,thicknessMap:Ve,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===xa,alphaMap:L,alphaTest:fe,alphaHash:X,combine:M.combine,mapUv:ze&&x(M.map.channel),aoMapUv:P&&x(M.aoMap.channel),lightMapUv:le&&x(M.lightMap.channel),bumpMapUv:te&&x(M.bumpMap.channel),normalMapUv:$&&x(M.normalMap.channel),displacementMapUv:pe&&x(M.displacementMap.channel),emissiveMapUv:Te&&x(M.emissiveMap.channel),metalnessMapUv:Se&&x(M.metalnessMap.channel),roughnessMapUv:Ee&&x(M.roughnessMap.channel),anisotropyMapUv:k&&x(M.anisotropyMap.channel),clearcoatMapUv:se&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(M.sheenRoughnessMap.channel),specularMapUv:Ae&&x(M.specularMap.channel),specularColorMapUv:Ue&&x(M.specularColorMap.channel),specularIntensityMapUv:xe&&x(M.specularIntensityMap.channel),transmissionMapUv:ye&&x(M.transmissionMap.channel),thicknessMapUv:Ve&&x(M.thicknessMap.channel),alphaMapUv:L&&x(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&($||Ne),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:Qe,vertexUv3s:at,pointsUvs:I.isPoints===!0&&!!G.attributes.uv&&(ze||L),fog:!!F,useFog:M.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:I.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&M.map.colorSpace===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hi,flipSided:M.side===ir,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ue&&M.extensions.derivatives===!0,extensionFragDepth:ue&&M.extensions.fragDepth===!0,extensionDrawBuffers:ue&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)S.push(z),S.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(v(S,M),f(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function f(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const S=_[M.type];let z;if(S){const V=qr[S];z=Cl.clone(V.uniforms)}else z=M.uniforms;return z}function b(M,S){let z;for(let V=0,I=u.length;V<I;V++){const F=u[V];if(F.cacheKey===S){z=F,++z.usedTimes;break}}return z===void 0&&(z=new qE(t,S,M,a),u.push(z)),z}function w(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:y,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:C}}function $E(){let t=new WeakMap;function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function r(a){t.delete(a)}function i(a,s,o){t.get(a)[s]=o}function n(){t=new WeakMap}return{get:e,remove:r,update:i,dispose:n}}function ew(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rm(){const t=[];let e=0;const r=[],i=[],n=[];function a(){e=0,r.length=0,i.length=0,n.length=0}function s(p,d,m,_,x,g){let h=t[e];return h===void 0?(h={id:p.id,object:p,geometry:d,material:m,groupOrder:_,renderOrder:p.renderOrder,z:x,group:g},t[e]=h):(h.id=p.id,h.object=p,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=p.renderOrder,h.z=x,h.group=g),e++,h}function o(p,d,m,_,x,g){const h=s(p,d,m,_,x,g);m.transmission>0?i.push(h):m.transparent===!0?n.push(h):r.push(h)}function l(p,d,m,_,x,g){const h=s(p,d,m,_,x,g);m.transmission>0?i.unshift(h):m.transparent===!0?n.unshift(h):r.unshift(h)}function u(p,d){r.length>1&&r.sort(p||ew),i.length>1&&i.sort(d||tm),n.length>1&&n.sort(d||tm)}function c(){for(let p=e,d=t.length;p<d;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:r,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:c,sort:u}}function tw(){let t=new WeakMap;function e(i,n){const a=t.get(i);let s;return a===void 0?(s=new rm,t.set(i,[s])):n>=a.length?(s=new rm,a.push(s)):s=a[n],s}function r(){t=new WeakMap}return{get:e,dispose:r}}function rw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new U,color:new we};break;case"SpotLight":r={position:new U,direction:new U,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new U,color:new we,distance:0,decay:0};break;case"HemisphereLight":r={direction:new U,skyColor:new we,groundColor:new we};break;case"RectAreaLight":r={color:new we,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=r,r}}}function iw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":r={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=r,r}}}let nw=0;function aw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sw(t,e){const r=new rw,i=iw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)n.probe.push(new U);const a=new U,s=new ft,o=new ft;function l(c,p){let d=0,m=0,_=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let x=0,g=0,h=0,v=0,f=0,y=0,b=0,w=0,T=0,C=0;c.sort(aw);const M=p===!0?Math.PI:1;for(let z=0,V=c.length;z<V;z++){const I=c[z],F=I.color,G=I.intensity,Q=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*G*M,m+=F.g*G*M,_+=F.b*G*M;else if(I.isLightProbe)for(let D=0;D<9;D++)n.probe[D].addScaledVector(I.sh.coefficients[D],G);else if(I.isDirectionalLight){const D=r.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const W=I.shadow,H=i.get(I);H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[x]=H,n.directionalShadowMap[x]=K,n.directionalShadowMatrix[x]=I.shadow.matrix,y++}n.directional[x]=D,x++}else if(I.isSpotLight){const D=r.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(F).multiplyScalar(G*M),D.distance=Q,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,n.spot[h]=D;const W=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,W.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[h]=W.matrix,I.castShadow){const H=i.get(I);H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[h]=H,n.spotShadowMap[h]=K,w++}h++}else if(I.isRectAreaLight){const D=r.get(I);D.color.copy(F).multiplyScalar(G),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),n.rectArea[v]=D,v++}else if(I.isPointLight){const D=r.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity*M),D.distance=I.distance,D.decay=I.decay,I.castShadow){const W=I.shadow,H=i.get(I);H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=D,g++}else if(I.isHemisphereLight){const D=r.get(I);D.skyColor.copy(I.color).multiplyScalar(G*M),D.groundColor.copy(I.groundColor).multiplyScalar(G*M),n.hemi[f]=D,f++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=_;const S=n.hash;(S.directionalLength!==x||S.pointLength!==g||S.spotLength!==h||S.rectAreaLength!==v||S.hemiLength!==f||S.numDirectionalShadows!==y||S.numPointShadows!==b||S.numSpotShadows!==w||S.numSpotMaps!==T)&&(n.directional.length=x,n.spot.length=h,n.rectArea.length=v,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=w+T-C,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=C,S.directionalLength=x,S.pointLength=g,S.spotLength=h,S.rectAreaLength=v,S.hemiLength=f,S.numDirectionalShadows=y,S.numPointShadows=b,S.numSpotShadows=w,S.numSpotMaps=T,n.version=nw++)}function u(c,p){let d=0,m=0,_=0,x=0,g=0;const h=p.matrixWorldInverse;for(let v=0,f=c.length;v<f;v++){const y=c[v];if(y.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(h),d++}else if(y.isSpotLight){const b=n.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(h),o.identity(),s.copy(y.matrixWorld),s.premultiply(h),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(h),m++}else if(y.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(h),g++}}}return{setup:l,setupView:u,state:n}}function im(t,e){const r=new sw(t,e),i=[],n=[];function a(){i.length=0,n.length=0}function s(c){i.push(c)}function o(c){n.push(c)}function l(c){r.setup(i,c)}function u(c){r.setupView(i,c)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:r},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function ow(t,e){let r=new WeakMap;function i(a,s=0){const o=r.get(a);let l;return o===void 0?(l=new im(t,e),r.set(a,[l])):s>=o.length?(l=new im(t,e),o.push(l)):l=o[s],l}function n(){r=new WeakMap}return{get:i,dispose:n}}class lw extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uw extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dw(t,e,r){let i=new md;const n=new ne,a=new ne,s=new Ct,o=new lw({depthPacking:Xy}),l=new uw,u={},c=r.maxTextureSize,p={[Ki]:ir,[ir]:Ki,[hi]:hi},d=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:cw,fragmentShader:hw}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Jt;_.setAttribute("position",new Gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ye(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ov;let h=this.type;this.render=function(b,w,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const C=t.getRenderTarget(),M=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),z=t.state;z.setBlending(gi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=h!==li&&this.type===li,I=h===li&&this.type!==li;for(let F=0,G=b.length;F<G;F++){const Q=b[F],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);const D=K.getFrameExtents();if(n.multiply(D),a.copy(K.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(a.x=Math.floor(c/D.x),n.x=a.x*D.x,K.mapSize.x=a.x),n.y>c&&(a.y=Math.floor(c/D.y),n.y=a.y*D.y,K.mapSize.y=a.y)),K.map===null||V===!0||I===!0){const H=this.type!==li?{minFilter:Yt,magFilter:Yt}:{};K.map!==null&&K.map.dispose(),K.map=new Hr(n.x,n.y,H),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}t.setRenderTarget(K.map),t.clear();const W=K.getViewportCount();for(let H=0;H<W;H++){const N=K.getViewport(H);s.set(a.x*N.x,a.y*N.y,a.x*N.z,a.y*N.w),z.viewport(s),K.updateMatrices(Q,H),i=K.getFrustum(),y(w,T,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===li&&v(K,T),K.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(C,M,S)};function v(b,w){const T=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Hr(n.x,n.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,T,d,x,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,T,m,x,null)}function f(b,w,T,C){let M=null;const S=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(S!==void 0)M=S;else if(M=T.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=M.uuid,V=w.uuid;let I=u[z];I===void 0&&(I={},u[z]=I);let F=I[V];F===void 0&&(F=M.clone(),I[V]=F),M=F}if(M.visible=w.visible,M.wireframe=w.wireframe,C===li?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:p[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=t.properties.get(M);z.light=T}return M}function y(b,w,T,C,M){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===li)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const z=e.update(b),V=b.material;if(Array.isArray(V)){const I=z.groups;for(let F=0,G=I.length;F<G;F++){const Q=I[F],K=V[Q.materialIndex];if(K&&K.visible){const D=f(b,K,C,M);t.renderBufferDirect(T,null,z,D,b,Q)}}}else if(V.visible){const I=f(b,V,C,M);t.renderBufferDirect(T,null,z,I,b,null)}}const S=b.children;for(let z=0,V=S.length;z<V;z++)y(S[z],w,T,C,M)}}function pw(t,e,r){const i=r.isWebGL2;function n(){let L=!1;const fe=new Ct;let X=null;const ue=new Ct(0,0,0,0);return{setMask:function(ce){X!==ce&&!L&&(t.colorMask(ce,ce,ce,ce),X=ce)},setLocked:function(ce){L=ce},setClear:function(ce,Qe,at,vt,Wr){Wr===!0&&(ce*=vt,Qe*=vt,at*=vt),fe.set(ce,Qe,at,vt),ue.equals(fe)===!1&&(t.clearColor(ce,Qe,at,vt),ue.copy(fe))},reset:function(){L=!1,X=null,ue.set(-1,0,0,0)}}}function a(){let L=!1,fe=null,X=null,ue=null;return{setTest:function(ce){ce?Re(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(ce){fe!==ce&&!L&&(t.depthMask(ce),fe=ce)},setFunc:function(ce){if(X!==ce){switch(ce){case yy:t.depthFunc(t.NEVER);break;case My:t.depthFunc(t.ALWAYS);break;case Sy:t.depthFunc(t.LESS);break;case nh:t.depthFunc(t.LEQUAL);break;case by:t.depthFunc(t.EQUAL);break;case Ey:t.depthFunc(t.GEQUAL);break;case wy:t.depthFunc(t.GREATER);break;case Ty:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=ce}},setLocked:function(ce){L=ce},setClear:function(ce){ue!==ce&&(t.clearDepth(ce),ue=ce)},reset:function(){L=!1,fe=null,X=null,ue=null}}}function s(){let L=!1,fe=null,X=null,ue=null,ce=null,Qe=null,at=null,vt=null,Wr=null;return{setTest:function(ct){L||(ct?Re(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(ct){fe!==ct&&!L&&(t.stencilMask(ct),fe=ct)},setFunc:function(ct,Xr,Gt){(X!==ct||ue!==Xr||ce!==Gt)&&(t.stencilFunc(ct,Xr,Gt),X=ct,ue=Xr,ce=Gt)},setOp:function(ct,Xr,Gt){(Qe!==ct||at!==Xr||vt!==Gt)&&(t.stencilOp(ct,Xr,Gt),Qe=ct,at=Xr,vt=Gt)},setLocked:function(ct){L=ct},setClear:function(ct){Wr!==ct&&(t.clearStencil(ct),Wr=ct)},reset:function(){L=!1,fe=null,X=null,ue=null,ce=null,Qe=null,at=null,vt=null,Wr=null}}}const o=new n,l=new a,u=new s,c=new WeakMap,p=new WeakMap;let d={},m={},_=new WeakMap,x=[],g=null,h=!1,v=null,f=null,y=null,b=null,w=null,T=null,C=null,M=!1,S=null,z=null,V=null,I=null,F=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,K=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(D)[1]),Q=K>=1):D.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),Q=K>=2);let W=null,H={};const N=t.getParameter(t.SCISSOR_BOX),j=t.getParameter(t.VIEWPORT),ie=new Ct().fromArray(N),he=new Ct().fromArray(j);function Me(L,fe,X,ue){const ce=new Uint8Array(4),Qe=t.createTexture();t.bindTexture(L,Qe),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<X;at++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(fe+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return Qe}const _e={};_e[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Re(t.DEPTH_TEST),l.setFunc(nh),pe(!1),Te(Hp),Re(t.CULL_FACE),te(gi);function Re(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Le(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function ze(L,fe){return m[L]!==fe?(t.bindFramebuffer(L,fe),m[L]=fe,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=fe),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function tt(L,fe){let X=x,ue=!1;if(L)if(X=_.get(fe),X===void 0&&(X=[],_.set(fe,X)),L.isWebGLMultipleRenderTargets){const ce=L.texture;if(X.length!==ce.length||X[0]!==t.COLOR_ATTACHMENT0){for(let Qe=0,at=ce.length;Qe<at;Qe++)X[Qe]=t.COLOR_ATTACHMENT0+Qe;X.length=ce.length,ue=!0}}else X[0]!==t.COLOR_ATTACHMENT0&&(X[0]=t.COLOR_ATTACHMENT0,ue=!0);else X[0]!==t.BACK&&(X[0]=t.BACK,ue=!0);ue&&(r.isWebGL2?t.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Z(L){return g!==L?(t.useProgram(L),g=L,!0):!1}const P={[Kn]:t.FUNC_ADD,[uy]:t.FUNC_SUBTRACT,[cy]:t.FUNC_REVERSE_SUBTRACT};if(i)P[Wp]=t.MIN,P[Xp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(P[Wp]=L.MIN_EXT,P[Xp]=L.MAX_EXT)}const le={[hy]:t.ZERO,[dy]:t.ONE,[py]:t.SRC_COLOR,[Fv]:t.SRC_ALPHA,[xy]:t.SRC_ALPHA_SATURATE,[vy]:t.DST_COLOR,[my]:t.DST_ALPHA,[fy]:t.ONE_MINUS_SRC_COLOR,[zv]:t.ONE_MINUS_SRC_ALPHA,[_y]:t.ONE_MINUS_DST_COLOR,[gy]:t.ONE_MINUS_DST_ALPHA};function te(L,fe,X,ue,ce,Qe,at,vt){if(L===gi){h===!0&&(Le(t.BLEND),h=!1);return}if(h===!1&&(Re(t.BLEND),h=!0),L!==ly){if(L!==v||vt!==M){if((f!==Kn||w!==Kn)&&(t.blendEquation(t.FUNC_ADD),f=Kn,w=Kn),vt)switch(L){case xa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wl:t.blendFunc(t.ONE,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,b=null,T=null,C=null,v=L,M=vt}return}ce=ce||fe,Qe=Qe||X,at=at||ue,(fe!==f||ce!==w)&&(t.blendEquationSeparate(P[fe],P[ce]),f=fe,w=ce),(X!==y||ue!==b||Qe!==T||at!==C)&&(t.blendFuncSeparate(le[X],le[ue],le[Qe],le[at]),y=X,b=ue,T=Qe,C=at),v=L,M=!1}function $(L,fe){L.side===hi?Le(t.CULL_FACE):Re(t.CULL_FACE);let X=L.side===ir;fe&&(X=!X),pe(X),L.blending===xa&&L.transparent===!1?te(gi):te(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const ue=L.stencilWrite;u.setTest(ue),ue&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Re(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function pe(L){S!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),S=L)}function Te(L){L!==ay?(Re(t.CULL_FACE),L!==z&&(L===Hp?t.cullFace(t.BACK):L===sy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),z=L}function Se(L){L!==V&&(Q&&t.lineWidth(L),V=L)}function Ee(L,fe,X){L?(Re(t.POLYGON_OFFSET_FILL),(I!==fe||F!==X)&&(t.polygonOffset(fe,X),I=fe,F=X)):Le(t.POLYGON_OFFSET_FILL)}function Ne(L){L?Re(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function nt(L){L===void 0&&(L=t.TEXTURE0+G-1),W!==L&&(t.activeTexture(L),W=L)}function gt(L,fe,X){X===void 0&&(W===null?X=t.TEXTURE0+G-1:X=W);let ue=H[X];ue===void 0&&(ue={type:void 0,texture:void 0},H[X]=ue),(ue.type!==L||ue.texture!==fe)&&(W!==X&&(t.activeTexture(X),W=X),t.bindTexture(L,fe||_e[L]),ue.type=L,ue.texture=fe)}function R(){const L=H[W];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){ie.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ie.copy(L))}function xe(L){he.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),he.copy(L))}function ye(L,fe){let X=p.get(fe);X===void 0&&(X=new WeakMap,p.set(fe,X));let ue=X.get(L);ue===void 0&&(ue=t.getUniformBlockIndex(fe,L.name),X.set(L,ue))}function Ve(L,fe){const X=p.get(fe).get(L);c.get(fe)!==X&&(t.uniformBlockBinding(fe,X,L.__bindingPointIndex),c.set(fe,X))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},W=null,H={},m={},_=new WeakMap,x=[],g=null,h=!1,v=null,f=null,y=null,b=null,w=null,T=null,C=null,M=!1,S=null,z=null,V=null,I=null,F=null,ie.set(0,0,t.canvas.width,t.canvas.height),he.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Re,disable:Le,bindFramebuffer:ze,drawBuffers:tt,useProgram:Z,setBlending:te,setMaterial:$,setFlipSided:pe,setCullFace:Te,setLineWidth:Se,setPolygonOffset:Ee,setScissorTest:Ne,activeTexture:nt,bindTexture:gt,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:Ce,texImage3D:Ae,updateUBOMapping:ye,uniformBlockBinding:Ve,texStorage2D:oe,texStorage3D:Y,texSubImage2D:se,texSubImage3D:re,compressedTexSubImage2D:ae,compressedTexSubImage3D:be,scissor:Ue,viewport:xe,reset:Ke}}function fw(t,e,r,i,n,a,s){const o=n.isWebGL2,l=n.maxTextures,u=n.maxCubemapSize,c=n.maxTextureSize,p=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const g=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return h?new OffscreenCanvas(R,E):Rl("canvas")}function f(R,E,k,se){let re=1;if((R.width>se||R.height>se)&&(re=se/Math.max(R.width,R.height)),re<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ae=E?Al:Math.floor,be=ae(re*R.width),oe=ae(re*R.height);x===void 0&&(x=v(be,oe));const Y=k?v(be,oe):x;return Y.width=be,Y.height=oe,Y.getContext("2d").drawImage(R,0,0,be,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+be+"x"+oe+")."),Y}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return ch(R.width)&&ch(R.height)}function b(R){return o?!1:R.wrapS!==Fr||R.wrapT!==Fr||R.minFilter!==Yt&&R.minFilter!==Mr}function w(R,E){return R.generateMipmaps&&E&&R.minFilter!==Yt&&R.minFilter!==Mr}function T(R){t.generateMipmap(R)}function C(R,E,k,se,re=!1){if(o===!1)return E;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=E;return E===t.RED&&(k===t.FLOAT&&(ae=t.R32F),k===t.HALF_FLOAT&&(ae=t.R16F),k===t.UNSIGNED_BYTE&&(ae=t.R8)),E===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(ae=t.R8UI),k===t.UNSIGNED_SHORT&&(ae=t.R16UI),k===t.UNSIGNED_INT&&(ae=t.R32UI),k===t.BYTE&&(ae=t.R8I),k===t.SHORT&&(ae=t.R16I),k===t.INT&&(ae=t.R32I)),E===t.RG&&(k===t.FLOAT&&(ae=t.RG32F),k===t.HALF_FLOAT&&(ae=t.RG16F),k===t.UNSIGNED_BYTE&&(ae=t.RG8)),E===t.RGBA&&(k===t.FLOAT&&(ae=t.RGBA32F),k===t.HALF_FLOAT&&(ae=t.RGBA16F),k===t.UNSIGNED_BYTE&&(ae=se===rt&&re===!1?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)),(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function M(R,E,k){return w(R,k)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==Mr?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function S(R){return R===Yt||R===jp||R===Lu?t.NEAREST:t.LINEAR}function z(R){const E=R.target;E.removeEventListener("dispose",z),I(E),E.isVideoTexture&&_.delete(E)}function V(R){const E=R.target;E.removeEventListener("dispose",V),G(E)}function I(R){const E=i.get(R);if(E.__webglInit===void 0)return;const k=R.source,se=g.get(k);if(se){const re=se[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(R),Object.keys(se).length===0&&g.delete(k)}i.remove(R)}function F(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const k=R.source,se=g.get(k);delete se[E.__cacheKey],s.memory.textures--}function G(R){const E=R.texture,k=i.get(R),se=i.get(E);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(k.__webglFramebuffer[re]))for(let ae=0;ae<k.__webglFramebuffer[re].length;ae++)t.deleteFramebuffer(k.__webglFramebuffer[re][ae]);else t.deleteFramebuffer(k.__webglFramebuffer[re]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[re])}else{if(Array.isArray(k.__webglFramebuffer))for(let re=0;re<k.__webglFramebuffer.length;re++)t.deleteFramebuffer(k.__webglFramebuffer[re]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let re=0;re<k.__webglColorRenderbuffer.length;re++)k.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[re]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let re=0,ae=E.length;re<ae;re++){const be=i.get(E[re]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),s.memory.textures--),i.remove(E[re])}i.remove(E),i.remove(R)}let Q=0;function K(){Q=0}function D(){const R=Q;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),Q+=1,R}function W(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function H(R,E){const k=i.get(R);if(R.isVideoTexture&&nt(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(k,R,E);return}}r.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+E)}function N(R,E){const k=i.get(R);if(R.version>0&&k.__version!==R.version){ze(k,R,E);return}r.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+E)}function j(R,E){const k=i.get(R);if(R.version>0&&k.__version!==R.version){ze(k,R,E);return}r.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+E)}function ie(R,E){const k=i.get(R);if(R.version>0&&k.__version!==R.version){tt(k,R,E);return}r.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+E)}const he={[oh]:t.REPEAT,[Fr]:t.CLAMP_TO_EDGE,[lh]:t.MIRRORED_REPEAT},Me={[Yt]:t.NEAREST,[jp]:t.NEAREST_MIPMAP_NEAREST,[Lu]:t.NEAREST_MIPMAP_LINEAR,[Mr]:t.LINEAR,[Iy]:t.LINEAR_MIPMAP_NEAREST,[Fs]:t.LINEAR_MIPMAP_LINEAR},_e={[qy]:t.NEVER,[t1]:t.ALWAYS,[Jy]:t.LESS,[Zy]:t.LEQUAL,[Ky]:t.EQUAL,[e1]:t.GEQUAL,[Qy]:t.GREATER,[$y]:t.NOTEQUAL};function Re(R,E,k){if(k?(t.texParameteri(R,t.TEXTURE_WRAP_S,he[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,he[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,he[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Me[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Me[E.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Fr||E.wrapT!==Fr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,S(E.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==Yt&&E.minFilter!==Mr&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Yt||E.minFilter!==Lu&&E.minFilter!==Fs||E.type===Oi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===vi&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Le(R,E){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",z));const se=E.source;let re=g.get(se);re===void 0&&(re={},g.set(se,re));const ae=W(E);if(ae!==R.__cacheKey){re[ae]===void 0&&(re[ae]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,k=!0),re[ae].usedTimes++;const be=re[R.__cacheKey];be!==void 0&&(re[R.__cacheKey].usedTimes--,be.usedTimes===0&&F(E)),R.__cacheKey=ae,R.__webglTexture=re[ae].texture}return k}function ze(R,E,k){let se=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=t.TEXTURE_3D);const re=Le(R,E),ae=E.source;r.bindTexture(se,R.__webglTexture,t.TEXTURE0+k);const be=i.get(ae);if(ae.version!==be.__version||re===!0){r.activeTexture(t.TEXTURE0+k),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const oe=b(E)&&y(E.image)===!1;let Y=f(E.image,oe,!1,c);Y=gt(E,Y);const Ce=y(Y)||o,Ae=a.convert(E.format,E.colorSpace);let Ue=a.convert(E.type),xe=C(E.internalFormat,Ae,Ue,E.colorSpace,E.isVideoTexture);Re(se,E,Ce);let ye;const Ve=E.mipmaps,Ke=o&&E.isVideoTexture!==!0,L=be.__version===void 0||re===!0,fe=M(E,Y,Ce);if(E.isDepthTexture)xe=t.DEPTH_COMPONENT,o?E.type===Oi?xe=t.DEPTH_COMPONENT32F:E.type===Ni?xe=t.DEPTH_COMPONENT24:E.type===vn?xe=t.DEPTH24_STENCIL8:xe=t.DEPTH_COMPONENT16:E.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===_n&&xe===t.DEPTH_COMPONENT&&E.type!==dd&&E.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ni,Ue=a.convert(E.type)),E.format===Pa&&xe===t.DEPTH_COMPONENT&&(xe=t.DEPTH_STENCIL,E.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=vn,Ue=a.convert(E.type))),L&&(Ke?r.texStorage2D(t.TEXTURE_2D,1,xe,Y.width,Y.height):r.texImage2D(t.TEXTURE_2D,0,xe,Y.width,Y.height,0,Ae,Ue,null));else if(E.isDataTexture)if(Ve.length>0&&Ce){Ke&&L&&r.texStorage2D(t.TEXTURE_2D,fe,xe,Ve[0].width,Ve[0].height);for(let X=0,ue=Ve.length;X<ue;X++)ye=Ve[X],Ke?r.texSubImage2D(t.TEXTURE_2D,X,0,0,ye.width,ye.height,Ae,Ue,ye.data):r.texImage2D(t.TEXTURE_2D,X,xe,ye.width,ye.height,0,Ae,Ue,ye.data);E.generateMipmaps=!1}else Ke?(L&&r.texStorage2D(t.TEXTURE_2D,fe,xe,Y.width,Y.height),r.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,Ae,Ue,Y.data)):r.texImage2D(t.TEXTURE_2D,0,xe,Y.width,Y.height,0,Ae,Ue,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&L&&r.texStorage3D(t.TEXTURE_2D_ARRAY,fe,xe,Ve[0].width,Ve[0].height,Y.depth);for(let X=0,ue=Ve.length;X<ue;X++)ye=Ve[X],E.format!==zr?Ae!==null?Ke?r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,Y.depth,Ae,ye.data,0,0):r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,xe,ye.width,ye.height,Y.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?r.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,Y.depth,Ae,Ue,ye.data):r.texImage3D(t.TEXTURE_2D_ARRAY,X,xe,ye.width,ye.height,Y.depth,0,Ae,Ue,ye.data)}else{Ke&&L&&r.texStorage2D(t.TEXTURE_2D,fe,xe,Ve[0].width,Ve[0].height);for(let X=0,ue=Ve.length;X<ue;X++)ye=Ve[X],E.format!==zr?Ae!==null?Ke?r.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ye.width,ye.height,Ae,ye.data):r.compressedTexImage2D(t.TEXTURE_2D,X,xe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?r.texSubImage2D(t.TEXTURE_2D,X,0,0,ye.width,ye.height,Ae,Ue,ye.data):r.texImage2D(t.TEXTURE_2D,X,xe,ye.width,ye.height,0,Ae,Ue,ye.data)}else if(E.isDataArrayTexture)Ke?(L&&r.texStorage3D(t.TEXTURE_2D_ARRAY,fe,xe,Y.width,Y.height,Y.depth),r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Ae,Ue,Y.data)):r.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,Y.width,Y.height,Y.depth,0,Ae,Ue,Y.data);else if(E.isData3DTexture)Ke?(L&&r.texStorage3D(t.TEXTURE_3D,fe,xe,Y.width,Y.height,Y.depth),r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Ae,Ue,Y.data)):r.texImage3D(t.TEXTURE_3D,0,xe,Y.width,Y.height,Y.depth,0,Ae,Ue,Y.data);else if(E.isFramebufferTexture){if(L)if(Ke)r.texStorage2D(t.TEXTURE_2D,fe,xe,Y.width,Y.height);else{let X=Y.width,ue=Y.height;for(let ce=0;ce<fe;ce++)r.texImage2D(t.TEXTURE_2D,ce,xe,X,ue,0,Ae,Ue,null),X>>=1,ue>>=1}}else if(Ve.length>0&&Ce){Ke&&L&&r.texStorage2D(t.TEXTURE_2D,fe,xe,Ve[0].width,Ve[0].height);for(let X=0,ue=Ve.length;X<ue;X++)ye=Ve[X],Ke?r.texSubImage2D(t.TEXTURE_2D,X,0,0,Ae,Ue,ye):r.texImage2D(t.TEXTURE_2D,X,xe,Ae,Ue,ye);E.generateMipmaps=!1}else Ke?(L&&r.texStorage2D(t.TEXTURE_2D,fe,xe,Y.width,Y.height),r.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Ue,Y)):r.texImage2D(t.TEXTURE_2D,0,xe,Ae,Ue,Y);w(E,Ce)&&T(se),be.__version=ae.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function tt(R,E,k){if(E.image.length!==6)return;const se=Le(R,E),re=E.source;r.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const ae=i.get(re);if(re.version!==ae.__version||se===!0){r.activeTexture(t.TEXTURE0+k),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const be=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let X=0;X<6;X++)!be&&!oe?Y[X]=f(E.image[X],!1,!0,u):Y[X]=oe?E.image[X].image:E.image[X],Y[X]=gt(E,Y[X]);const Ce=Y[0],Ae=y(Ce)||o,Ue=a.convert(E.format,E.colorSpace),xe=a.convert(E.type),ye=C(E.internalFormat,Ue,xe,E.colorSpace),Ve=o&&E.isVideoTexture!==!0,Ke=ae.__version===void 0||se===!0;let L=M(E,Ce,Ae);Re(t.TEXTURE_CUBE_MAP,E,Ae);let fe;if(be){Ve&&Ke&&r.texStorage2D(t.TEXTURE_CUBE_MAP,L,ye,Ce.width,Ce.height);for(let X=0;X<6;X++){fe=Y[X].mipmaps;for(let ue=0;ue<fe.length;ue++){const ce=fe[ue];E.format!==zr?Ue!==null?Ve?r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue,0,0,ce.width,ce.height,Ue,ce.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue,ye,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue,0,0,ce.width,ce.height,Ue,xe,ce.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue,ye,ce.width,ce.height,0,Ue,xe,ce.data)}}}else{fe=E.mipmaps,Ve&&Ke&&(fe.length>0&&L++,r.texStorage2D(t.TEXTURE_CUBE_MAP,L,ye,Y[0].width,Y[0].height));for(let X=0;X<6;X++)if(oe){Ve?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Y[X].width,Y[X].height,Ue,xe,Y[X].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ye,Y[X].width,Y[X].height,0,Ue,xe,Y[X].data);for(let ue=0;ue<fe.length;ue++){const ce=fe[ue].image[X].image;Ve?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue+1,0,0,ce.width,ce.height,Ue,xe,ce.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue+1,ye,ce.width,ce.height,0,Ue,xe,ce.data)}}else{Ve?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ue,xe,Y[X]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,ye,Ue,xe,Y[X]);for(let ue=0;ue<fe.length;ue++){const ce=fe[ue];Ve?r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue+1,0,0,Ue,xe,ce.image[X]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue+1,ye,Ue,xe,ce.image[X])}}}w(E,Ae)&&T(t.TEXTURE_CUBE_MAP),ae.__version=re.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Z(R,E,k,se,re,ae){const be=a.convert(k.format,k.colorSpace),oe=a.convert(k.type),Y=C(k.internalFormat,be,oe,k.colorSpace);if(!i.get(E).__hasExternalTextures){const Ce=Math.max(1,E.width>>ae),Ae=Math.max(1,E.height>>ae);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?r.texImage3D(re,ae,Y,Ce,Ae,E.depth,0,be,oe,null):r.texImage2D(re,ae,Y,Ce,Ae,0,be,oe,null)}r.bindFramebuffer(t.FRAMEBUFFER,R),Ne(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,re,i.get(k).__webglTexture,0,Ee(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,re,i.get(k).__webglTexture,ae),r.bindFramebuffer(t.FRAMEBUFFER,null)}function P(R,E,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let se=t.DEPTH_COMPONENT16;if(k||Ne(E)){const re=E.depthTexture;re&&re.isDepthTexture&&(re.type===Oi?se=t.DEPTH_COMPONENT32F:re.type===Ni&&(se=t.DEPTH_COMPONENT24));const ae=Ee(E);Ne(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,se,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,se,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const se=Ee(E);k&&Ne(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,E.width,E.height):Ne(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const se=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let re=0;re<se.length;re++){const ae=se[re],be=a.convert(ae.format,ae.colorSpace),oe=a.convert(ae.type),Y=C(ae.internalFormat,be,oe,ae.colorSpace),Ce=Ee(E);k&&Ne(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Y,E.width,E.height):Ne(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Y,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Y,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const k=i.get(E.depthTexture).__webglTexture,se=Ee(E);if(E.depthTexture.format===_n)Ne(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,k,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,k,0);else if(E.depthTexture.format===Pa)Ne(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,k,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function te(R){const E=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");le(E.__webglFramebuffer,R)}else if(k){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)r.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]=t.createRenderbuffer(),P(E.__webglDepthbuffer[se],R,!1)}else r.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),P(E.__webglDepthbuffer,R,!1);r.bindFramebuffer(t.FRAMEBUFFER,null)}function $(R,E,k){const se=i.get(R);E!==void 0&&Z(se.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&te(R)}function pe(R){const E=R.texture,k=i.get(R),se=i.get(E);R.addEventListener("dispose",V),R.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=E.version,s.memory.textures++);const re=R.isWebGLCubeRenderTarget===!0,ae=R.isWebGLMultipleRenderTargets===!0,be=y(R)||o;if(re){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let Y=0;Y<E.mipmaps.length;Y++)k.__webglFramebuffer[oe][Y]=t.createFramebuffer()}else k.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)k.__webglFramebuffer[oe]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ae)if(n.drawBuffers){const oe=R.texture;for(let Y=0,Ce=oe.length;Y<Ce;Y++){const Ae=i.get(oe[Y]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ne(R)===!1){const oe=ae?E:[E];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<oe.length;Y++){const Ce=oe[Y];k.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const Ae=a.convert(Ce.format,Ce.colorSpace),Ue=a.convert(Ce.type),xe=C(Ce.internalFormat,Ae,Ue,Ce.colorSpace,R.isXRRenderTarget===!0),ye=Ee(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),P(k.__webglDepthRenderbuffer,R,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){r.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),Re(t.TEXTURE_CUBE_MAP,E,be);for(let oe=0;oe<6;oe++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)Z(k.__webglFramebuffer[oe][Y],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Y);else Z(k.__webglFramebuffer[oe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);w(E,be)&&T(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(ae){const oe=R.texture;for(let Y=0,Ce=oe.length;Y<Ce;Y++){const Ae=oe[Y],Ue=i.get(Ae);r.bindTexture(t.TEXTURE_2D,Ue.__webglTexture),Re(t.TEXTURE_2D,Ae,be),Z(k.__webglFramebuffer,R,Ae,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D,0),w(Ae,be)&&T(t.TEXTURE_2D)}r.unbindTexture()}else{let oe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?oe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),r.bindTexture(oe,se.__webglTexture),Re(oe,E,be),o&&E.mipmaps&&E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)Z(k.__webglFramebuffer[Y],R,E,t.COLOR_ATTACHMENT0,oe,Y);else Z(k.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,oe,0);w(E,be)&&T(oe),r.unbindTexture()}R.depthBuffer&&te(R)}function Te(R){const E=y(R)||o,k=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let se=0,re=k.length;se<re;se++){const ae=k[se];if(w(ae,E)){const be=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,oe=i.get(ae).__webglTexture;r.bindTexture(be,oe),T(be),r.unbindTexture()}}}function Se(R){if(o&&R.samples>0&&Ne(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],k=R.width,se=R.height;let re=t.COLOR_BUFFER_BIT;const ae=[],be=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(R),Y=R.isWebGLMultipleRenderTargets===!0;if(Y)for(let Ce=0;Ce<E.length;Ce++)r.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){ae.push(t.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&ae.push(be);const Ae=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ae===!1&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Ce]),Ae===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),Y){const Ue=i.get(E[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ue,0)}t.blitFramebuffer(0,0,k,se,0,0,k,se,re,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let Ce=0;Ce<E.length;Ce++){r.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Ce]);const Ae=i.get(E[Ce]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Ae,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ee(R){return Math.min(p,R.samples)}function Ne(R){const E=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function nt(R){const E=s.render.frame;_.get(R)!==E&&(_.set(R,E),R.update())}function gt(R,E){const k=R.colorSpace,se=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===uh||k!==$r&&k!==yn&&(k===rt||k===Yl?o===!1?e.has("EXT_sRGB")===!0&&se===zr?(R.format=uh,R.minFilter=Mr,R.generateMipmaps=!1):E=qv.sRGBToLinear(E):(se!==zr||re!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}this.allocateTextureUnit=D,this.resetTextureUnits=K,this.setTexture2D=H,this.setTexture2DArray=N,this.setTexture3D=j,this.setTextureCube=ie,this.rebindTextures=$,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Ne}const mw=0,Mt=1;function gw(t,e,r){const i=r.isWebGL2;function n(a,s=yn){let o;const l=s===rt||s===Yl?Mt:mw;if(a===ji)return t.UNSIGNED_BYTE;if(a===Hv)return t.UNSIGNED_SHORT_4_4_4_4;if(a===Gv)return t.UNSIGNED_SHORT_5_5_5_1;if(a===Ny)return t.BYTE;if(a===Oy)return t.SHORT;if(a===dd)return t.UNSIGNED_SHORT;if(a===Bv)return t.INT;if(a===Ni)return t.UNSIGNED_INT;if(a===Oi)return t.FLOAT;if(a===vi)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Fy)return t.ALPHA;if(a===zr)return t.RGBA;if(a===zy)return t.LUMINANCE;if(a===ky)return t.LUMINANCE_ALPHA;if(a===_n)return t.DEPTH_COMPONENT;if(a===Pa)return t.DEPTH_STENCIL;if(a===uh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===By)return t.RED;if(a===Vv)return t.RED_INTEGER;if(a===Hy)return t.RG;if(a===Wv)return t.RG_INTEGER;if(a===Xv)return t.RGBA_INTEGER;if(a===Uu||a===Du||a===Iu||a===Nu)if(l===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Uu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Du)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Iu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Nu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Uu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Du)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Iu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Nu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Yp||a===qp||a===Jp||a===Kp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Yp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===qp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Jp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Kp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Gy)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Zp||a===Qp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Zp)return l===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===Qp)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===$p||a===ef||a===tf||a===rf||a===nf||a===af||a===sf||a===of||a===lf||a===uf||a===cf||a===hf||a===df||a===pf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===$p)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ef)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===tf)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===rf)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===nf)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===af)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===sf)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===of)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===lf)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===uf)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===cf)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===hf)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===df)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===pf)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ou||a===ff||a===mf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Ou)return l===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ff)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===mf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Vy||a===gf||a===vf||a===_f)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Ou)return o.COMPRESSED_RED_RGTC1_EXT;if(a===gf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===vf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===_f)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===vn?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:n}}class vw extends Sr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kr extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _w={type:"move"};class nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const i of e.hand.values())this._getHandJoint(r,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,i){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const g=r.getJointPose(x,i),h=this._getHandJoint(u,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=c.position.distanceTo(p.position),m=.02,_=.005;u.inputState.pinching&&d>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=r.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=r.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_w)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const i=new Kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[r.jointName]=i,e.add(i)}return e.joints[r.jointName]}}class xw extends dr{constructor(e,r,i,n,a,s,o,l,u,c){if(c=c!==void 0?c:_n,c!==_n&&c!==Pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===_n&&(i=Ni),i===void 0&&c===Pa&&(i=vn),super(null,n,a,s,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:r},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}class yw extends Oa{constructor(e,r){super();const i=this;let n=null,a=1,s=null,o="local-floor",l=1,u=null,c=null,p=null,d=null,m=null,_=null;const x=r.getContextAttributes();let g=null,h=null;const v=[],f=[],y=new Sr;y.layers.enable(1),y.viewport=new Ct;const b=new Sr;b.layers.enable(2),b.viewport=new Ct;const w=[y,b],T=new vw;T.layers.enable(1),T.layers.enable(2);let C=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let j=v[N];return j===void 0&&(j=new nc,v[N]=j),j.getTargetRaySpace()},this.getControllerGrip=function(N){let j=v[N];return j===void 0&&(j=new nc,v[N]=j),j.getGripSpace()},this.getHand=function(N){let j=v[N];return j===void 0&&(j=new nc,v[N]=j),j.getHandSpace()};function S(N){const j=f.indexOf(N.inputSource);if(j===-1)return;const ie=v[j];ie!==void 0&&(ie.update(N.inputSource,N.frame,u||s),ie.dispatchEvent({type:N.type,data:N.inputSource}))}function z(){n.removeEventListener("select",S),n.removeEventListener("selectstart",S),n.removeEventListener("selectend",S),n.removeEventListener("squeeze",S),n.removeEventListener("squeezestart",S),n.removeEventListener("squeezeend",S),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",V);for(let N=0;N<v.length;N++){const j=f[N];j!==null&&(f[N]=null,v[N].disconnect(j))}C=null,M=null,e.setRenderTarget(g),m=null,d=null,p=null,n=null,h=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(N){u=N},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(N){if(n=N,n!==null){if(g=e.getRenderTarget(),n.addEventListener("select",S),n.addEventListener("selectstart",S),n.addEventListener("selectend",S),n.addEventListener("squeeze",S),n.addEventListener("squeezestart",S),n.addEventListener("squeezeend",S),n.addEventListener("end",z),n.addEventListener("inputsourceschange",V),x.xrCompatible!==!0&&await r.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:n.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,r,j),n.updateRenderState({baseLayer:m}),h=new Hr(m.framebufferWidth,m.framebufferHeight,{format:zr,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let j=null,ie=null,he=null;x.depth&&(he=x.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,j=x.stencil?Pa:_n,ie=x.stencil?vn:Ni);const Me={colorFormat:r.RGBA8,depthFormat:he,scaleFactor:a};p=new XRWebGLBinding(n,r),d=p.createProjectionLayer(Me),n.updateRenderState({layers:[d]}),h=new Hr(d.textureWidth,d.textureHeight,{format:zr,type:ji,depthTexture:new xw(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const _e=e.properties.get(h);_e.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await n.requestReferenceSpace(o),H.setContext(n),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function V(N){for(let j=0;j<N.removed.length;j++){const ie=N.removed[j],he=f.indexOf(ie);he>=0&&(f[he]=null,v[he].disconnect(ie))}for(let j=0;j<N.added.length;j++){const ie=N.added[j];let he=f.indexOf(ie);if(he===-1){for(let _e=0;_e<v.length;_e++)if(_e>=f.length){f.push(ie),he=_e;break}else if(f[_e]===null){f[_e]=ie,he=_e;break}if(he===-1)break}const Me=v[he];Me&&Me.connect(ie)}}const I=new U,F=new U;function G(N,j,ie){I.setFromMatrixPosition(j.matrixWorld),F.setFromMatrixPosition(ie.matrixWorld);const he=I.distanceTo(F),Me=j.projectionMatrix.elements,_e=ie.projectionMatrix.elements,Re=Me[14]/(Me[10]-1),Le=Me[14]/(Me[10]+1),ze=(Me[9]+1)/Me[5],tt=(Me[9]-1)/Me[5],Z=(Me[8]-1)/Me[0],P=(_e[8]+1)/_e[0],le=Re*Z,te=Re*P,$=he/(-Z+P),pe=$*-Z;j.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(pe),N.translateZ($),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Te=Re+$,Se=Le+$,Ee=le-pe,Ne=te+(he-pe),nt=ze*Le/Se*Te,gt=tt*Le/Se*Te;N.projectionMatrix.makePerspective(Ee,Ne,nt,gt,Te,Se),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function Q(N,j){j===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(j.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(n===null)return;T.near=b.near=y.near=N.near,T.far=b.far=y.far=N.far,(C!==T.near||M!==T.far)&&(n.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,M=T.far);const j=N.parent,ie=T.cameras;Q(T,j);for(let he=0;he<ie.length;he++)Q(ie[he],j);ie.length===2?G(T,y,b):T.projectionMatrix.copy(y.projectionMatrix),K(N,T,j)};function K(N,j,ie){ie===null?N.matrix.copy(j.matrixWorld):(N.matrix.copy(ie.matrixWorld),N.matrix.invert(),N.matrix.multiply(j.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(j.projectionMatrix),N.projectionMatrixInverse.copy(j.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=zs*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)};let D=null;function W(N,j){if(c=j.getViewerPose(u||s),_=j,c!==null){const ie=c.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let he=!1;ie.length!==T.cameras.length&&(T.cameras.length=0,he=!0);for(let Me=0;Me<ie.length;Me++){const _e=ie[Me];let Re=null;if(m!==null)Re=m.getViewport(_e);else{const ze=p.getViewSubImage(d,_e);Re=ze.viewport,Me===0&&(e.setRenderTargetTextures(h,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(h))}let Le=w[Me];Le===void 0&&(Le=new Sr,Le.layers.enable(Me),Le.viewport=new Ct,w[Me]=Le),Le.matrix.fromArray(_e.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(_e.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Re.x,Re.y,Re.width,Re.height),Me===0&&(T.matrix.copy(Le.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),he===!0&&T.cameras.push(Le)}}for(let ie=0;ie<v.length;ie++){const he=f[ie],Me=v[ie];he!==null&&Me!==void 0&&Me.update(he,j,u||s)}D&&D(N,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const H=new a0;H.setAnimationLoop(W),this.setAnimationLoop=function(N){D=N},this.dispose=function(){}}}function Mw(t,e){function r(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,r0(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function n(g,h,v,f,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(g,h):h.isMeshToonMaterial?(a(g,h),p(g,h)):h.isMeshPhongMaterial?(a(g,h),c(g,h)):h.isMeshStandardMaterial?(a(g,h),d(g,h),h.isMeshPhysicalMaterial&&m(g,h,y)):h.isMeshMatcapMaterial?(a(g,h),_(g,h)):h.isMeshDepthMaterial?a(g,h):h.isMeshDistanceMaterial?(a(g,h),x(g,h)):h.isMeshNormalMaterial?a(g,h):h.isLineBasicMaterial?(s(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,v,f):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,r(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,r(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,r(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===ir&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,r(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===ir&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,r(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,r(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,r(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;const f=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*f,r(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,r(h.aoMap,g.aoMapTransform))}function s(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,r(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,f){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=f*.5,h.map&&(g.map.value=h.map,r(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,r(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,r(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,r(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,r(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,r(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function m(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,r(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,r(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,r(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,r(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,r(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ir&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,r(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,r(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,r(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,r(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,r(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,r(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,r(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Sw(t,e,r,i){let n={},a={},s=[];const o=r.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,f){const y=f.program;i.uniformBlockBinding(v,y)}function u(v,f){let y=n[v.id];y===void 0&&(_(v),y=c(v),n[v.id]=y,v.addEventListener("dispose",g));const b=f.program;i.updateUBOMapping(v,b);const w=e.render.frame;a[v.id]!==w&&(d(v),a[v.id]=w)}function c(v){const f=p();v.__bindingPointIndex=f;const y=t.createBuffer(),b=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,f,y),y}function p(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const f=n[v.id],y=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,f);for(let w=0,T=y.length;w<T;w++){const C=y[w];if(m(C,w,b)===!0){const M=C.__offset,S=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let V=0;V<S.length;V++){const I=S[V],F=x(I);typeof I=="number"?(C.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,M+z,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=I.elements[0],C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=I.elements[0],C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=I.elements[0]):(I.toArray(C.__data,z),z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,C.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,f,y){const b=v.value;if(y[f]===void 0){if(typeof b=="number")y[f]=b;else{const w=Array.isArray(b)?b:[b],T=[];for(let C=0;C<w.length;C++)T.push(w[C].clone());y[f]=T}return!0}else if(typeof b=="number"){if(y[f]!==b)return y[f]=b,!0}else{const w=Array.isArray(y[f])?y[f]:[y[f]],T=Array.isArray(b)?b:[b];for(let C=0;C<w.length;C++){const M=w[C];if(M.equals(T[C])===!1)return M.copy(T[C]),!0}}return!1}function _(v){const f=v.uniforms;let y=0;const b=16;let w=0;for(let T=0,C=f.length;T<C;T++){const M=f[T],S={boundary:0,storage:0},z=Array.isArray(M.value)?M.value:[M.value];for(let V=0,I=z.length;V<I;V++){const F=z[V],G=x(F);S.boundary+=G.boundary,S.storage+=G.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,T>0){w=y%b;const V=b-w;w!==0&&V-S.boundary<0&&(y+=b-w,M.__offset=y)}y+=S.storage}return w=y%b,w>0&&(y+=b-w),v.__size=y,v.__cache={},this}function x(v){const f={boundary:0,storage:0};return typeof v=="number"?(f.boundary=4,f.storage=4):v.isVector2?(f.boundary=8,f.storage=8):v.isVector3||v.isColor?(f.boundary=16,f.storage=12):v.isVector4?(f.boundary=16,f.storage=16):v.isMatrix3?(f.boundary=48,f.storage=48):v.isMatrix4?(f.boundary=64,f.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),f}function g(v){const f=v.target;f.removeEventListener("dispose",g);const y=s.indexOf(f.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(n[f.id]),delete n[f.id],delete a[f.id]}function h(){for(const v in n)t.deleteBuffer(n[v]);s=[],n={},a={}}return{bind:l,update:u,dispose:h}}class c0{constructor(e={}){const{canvas:r=g1(),context:i=null,depth:n=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=s;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,g=null;const h=[],v=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=rt,this._useLegacyLights=!1,this.toneMapping=Xi,this.toneMappingExposure=1;const f=this;let y=!1,b=0,w=0,T=null,C=-1,M=null;const S=new Ct,z=new Ct;let V=null;const I=new we(0);let F=0,G=r.width,Q=r.height,K=1,D=null,W=null;const H=new Ct(0,0,G,Q),N=new Ct(0,0,G,Q);let j=!1;const ie=new md;let he=!1,Me=!1,_e=null;const Re=new ft,Le=new ne,ze=new U,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Z(){return T===null?K:1}let P=i;function le(A,O){for(let J=0;J<A.length;J++){const B=A[J],q=r.getContext(B,O);if(q!==null)return q}return null}try{const A={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:p};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${cd}`),r.addEventListener("webglcontextlost",fe,!1),r.addEventListener("webglcontextrestored",X,!1),r.addEventListener("webglcontextcreationerror",ue,!1),P===null){const O=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&O.shift(),P=le(O,A),P===null)throw le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,$,pe,Te,Se,Ee,Ne,nt,gt,R,E,k,se,re,ae,be,oe,Y,Ce,Ae,Ue,xe,ye,Ve;function Ke(){te=new Ub(P),$=new Tb(P,te,e),te.init($),xe=new gw(P,te,$),pe=new pw(P,te,$),Te=new Nb(P),Se=new $E,Ee=new fw(P,te,pe,Se,$,xe,Te),Ne=new Rb(f),nt=new Lb(f),gt=new X1(P,$),ye=new Eb(P,te,gt,$),R=new Db(P,gt,Te,ye),E=new kb(P,R,gt,Te),Ce=new zb(P,$,Ee),be=new Ab(Se),k=new QE(f,Ne,nt,te,$,ye,be),se=new Mw(f,Se),re=new tw,ae=new ow(te,$),Y=new bb(f,Ne,nt,pe,E,d,l),oe=new dw(f,E,$),Ve=new Sw(P,Te,$,pe),Ae=new wb(P,te,Te,$),Ue=new Ib(P,te,Te,$),Te.programs=k.programs,f.capabilities=$,f.extensions=te,f.properties=Se,f.renderLists=re,f.shadowMap=oe,f.state=pe,f.info=Te}Ke();const L=new yw(f,P);this.xr=L,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(G,Q,!1))},this.getSize=function(A){return A.set(G,Q)},this.setSize=function(A,O,J=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,Q=O,r.width=Math.floor(A*K),r.height=Math.floor(O*K),J===!0&&(r.style.width=A+"px",r.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(G*K,Q*K).floor()},this.setDrawingBufferSize=function(A,O,J){G=A,Q=O,K=J,r.width=Math.floor(A*J),r.height=Math.floor(O*J),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(H)},this.setViewport=function(A,O,J,B){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,O,J,B),pe.viewport(S.copy(H).multiplyScalar(K).floor())},this.getScissor=function(A){return A.copy(N)},this.setScissor=function(A,O,J,B){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,O,J,B),pe.scissor(z.copy(N).multiplyScalar(K).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(A){pe.setScissorTest(j=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){W=A},this.getClearColor=function(A){return A.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(A=!0,O=!0,J=!0){let B=0;if(A){let q=!1;if(T!==null){const me=T.texture.format;q=me===Xv||me===Wv||me===Vv}if(q){const me=T.texture.type,De=me===ji||me===Ni||me===dd||me===vn||me===Hv||me===Gv,Oe=Y.getClearColor(),Fe=Y.getClearAlpha(),Xe=Oe.r,ke=Oe.g,Be=Oe.b;De?(m[0]=Xe,m[1]=ke,m[2]=Be,m[3]=Fe,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=Xe,_[1]=ke,_[2]=Be,_[3]=Fe,P.clearBufferiv(P.COLOR,0,_))}else B|=P.COLOR_BUFFER_BIT}O&&(B|=P.DEPTH_BUFFER_BIT),J&&(B|=P.STENCIL_BUFFER_BIT),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",fe,!1),r.removeEventListener("webglcontextrestored",X,!1),r.removeEventListener("webglcontextcreationerror",ue,!1),re.dispose(),ae.dispose(),Se.dispose(),Ne.dispose(),nt.dispose(),E.dispose(),ye.dispose(),Ve.dispose(),k.dispose(),L.dispose(),L.removeEventListener("sessionstart",ct),L.removeEventListener("sessionend",Xr),_e&&(_e.dispose(),_e=null),Gt.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Te.autoReset,O=oe.enabled,J=oe.autoUpdate,B=oe.needsUpdate,q=oe.type;Ke(),Te.autoReset=A,oe.enabled=O,oe.autoUpdate=J,oe.needsUpdate=B,oe.type=q}function ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){const O=A.target;O.removeEventListener("dispose",ce),Qe(O)}function Qe(A){at(A),Se.remove(A)}function at(A){const O=Se.get(A).programs;O!==void 0&&(O.forEach(function(J){k.releaseProgram(J)}),A.isShaderMaterial&&k.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,J,B,q,me){O===null&&(O=tt);const De=q.isMesh&&q.matrixWorld.determinant()<0,Oe=w0(A,O,J,B,q);pe.setMaterial(B,De);let Fe=J.index,Xe=1;if(B.wireframe===!0){if(Fe=R.getWireframeAttribute(J),Fe===void 0)return;Xe=2}const ke=J.drawRange,Be=J.attributes.position;let Tt=ke.start*Xe,dt=(ke.start+ke.count)*Xe;me!==null&&(Tt=Math.max(Tt,me.start*Xe),dt=Math.min(dt,(me.start+me.count)*Xe)),Fe!==null?(Tt=Math.max(Tt,0),dt=Math.min(dt,Fe.count)):Be!=null&&(Tt=Math.max(Tt,0),dt=Math.min(dt,Be.count));const gr=dt-Tt;if(gr<0||gr===1/0)return;ye.setup(q,B,Oe,J,Fe);let ti,_t=Ae;if(Fe!==null&&(ti=gt.get(Fe),_t=Ue,_t.setIndex(ti)),q.isMesh)B.wireframe===!0?(pe.setLineWidth(B.wireframeLinewidth*Z()),_t.setMode(P.LINES)):_t.setMode(P.TRIANGLES);else if(q.isLine){let je=B.linewidth;je===void 0&&(je=1),pe.setLineWidth(je*Z()),q.isLineSegments?_t.setMode(P.LINES):q.isLineLoop?_t.setMode(P.LINE_LOOP):_t.setMode(P.LINE_STRIP)}else q.isPoints?_t.setMode(P.POINTS):q.isSprite&&_t.setMode(P.TRIANGLES);if(q.isInstancedMesh)_t.renderInstances(Tt,gr,q.count);else if(J.isInstancedBufferGeometry){const je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,eu=Math.min(J.instanceCount,je);_t.renderInstances(Tt,gr,eu)}else _t.render(Tt,gr)},this.compile=function(A,O){function J(B,q,me){B.transparent===!0&&B.side===hi&&B.forceSinglePass===!1?(B.side=ir,B.needsUpdate=!0,Qs(B,q,me),B.side=Ki,B.needsUpdate=!0,Qs(B,q,me),B.side=hi):Qs(B,q,me)}g=ae.get(A),g.init(),v.push(g),A.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights(f._useLegacyLights),A.traverse(function(B){const q=B.material;if(q)if(Array.isArray(q))for(let me=0;me<q.length;me++){const De=q[me];J(De,A,B)}else J(q,A,B)}),v.pop(),g=null};let vt=null;function Wr(A){vt&&vt(A)}function ct(){Gt.stop()}function Xr(){Gt.start()}const Gt=new a0;Gt.setAnimationLoop(Wr),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(A){vt=A,L.setAnimationLoop(A),A===null?Gt.stop():Gt.start()},L.addEventListener("sessionstart",ct),L.addEventListener("sessionend",Xr),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(O),O=L.getCamera()),A.isScene===!0&&A.onBeforeRender(f,A,O,T),g=ae.get(A,v.length),g.init(),v.push(g),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ie.setFromProjectionMatrix(Re),Me=this.localClippingEnabled,he=be.init(this.clippingPlanes,Me),x=re.get(A,h.length),x.init(),h.push(x),Td(A,O,0,f.sortObjects),x.finish(),f.sortObjects===!0&&x.sort(D,W),this.info.render.frame++,he===!0&&be.beginShadows();const J=g.state.shadowsArray;if(oe.render(J,A,O),he===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(x,A),g.setupLights(f._useLegacyLights),O.isArrayCamera){const B=O.cameras;for(let q=0,me=B.length;q<me;q++){const De=B[q];Ad(x,A,De,De.viewport)}}else Ad(x,A,O);T!==null&&(Ee.updateMultisampleRenderTarget(T),Ee.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(f,A,O),ye.resetDefaultState(),C=-1,M=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Td(A,O,J,B){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ie.intersectsSprite(A)){B&&ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Re);const me=E.update(A),De=A.material;De.visible&&x.push(A,me,De,J,ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ie.intersectsObject(A))){const me=E.update(A),De=A.material;if(B&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ze.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),ze.copy(me.boundingSphere.center)),ze.applyMatrix4(A.matrixWorld).applyMatrix4(Re)),Array.isArray(De)){const Oe=me.groups;for(let Fe=0,Xe=Oe.length;Fe<Xe;Fe++){const ke=Oe[Fe],Be=De[ke.materialIndex];Be&&Be.visible&&x.push(A,me,Be,J,ze.z,ke)}}else De.visible&&x.push(A,me,De,J,ze.z,null)}}const q=A.children;for(let me=0,De=q.length;me<De;me++)Td(q[me],O,J,B)}function Ad(A,O,J,B){const q=A.opaque,me=A.transmissive,De=A.transparent;g.setupLightsView(J),he===!0&&be.setGlobalState(f.clippingPlanes,J),me.length>0&&E0(q,me,O,J),B&&pe.viewport(S.copy(B)),q.length>0&&Zs(q,O,J),me.length>0&&Zs(me,O,J),De.length>0&&Zs(De,O,J),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function E0(A,O,J,B){const q=$.isWebGL2;_e===null&&(_e=new Hr(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?vi:ji,minFilter:Fs,samples:q?4:0})),f.getDrawingBufferSize(Le),q?_e.setSize(Le.x,Le.y):_e.setSize(Al(Le.x),Al(Le.y));const me=f.getRenderTarget();f.setRenderTarget(_e),f.getClearColor(I),F=f.getClearAlpha(),F<1&&f.setClearColor(16777215,.5),f.clear();const De=f.toneMapping;f.toneMapping=Xi,Zs(A,J,B),Ee.updateMultisampleRenderTarget(_e),Ee.updateRenderTargetMipmap(_e);let Oe=!1;for(let Fe=0,Xe=O.length;Fe<Xe;Fe++){const ke=O[Fe],Be=ke.object,Tt=ke.geometry,dt=ke.material,gr=ke.group;if(dt.side===hi&&Be.layers.test(B.layers)){const ti=dt.side;dt.side=ir,dt.needsUpdate=!0,Rd(Be,J,B,Tt,dt,gr),dt.side=ti,dt.needsUpdate=!0,Oe=!0}}Oe===!0&&(Ee.updateMultisampleRenderTarget(_e),Ee.updateRenderTargetMipmap(_e)),f.setRenderTarget(me),f.setClearColor(I,F),f.toneMapping=De}function Zs(A,O,J){const B=O.isScene===!0?O.overrideMaterial:null;for(let q=0,me=A.length;q<me;q++){const De=A[q],Oe=De.object,Fe=De.geometry,Xe=B===null?De.material:B,ke=De.group;Oe.layers.test(J.layers)&&Rd(Oe,O,J,Fe,Xe,ke)}}function Rd(A,O,J,B,q,me){A.onBeforeRender(f,O,J,B,q,me),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(f,O,J,B,A,me),q.transparent===!0&&q.side===hi&&q.forceSinglePass===!1?(q.side=ir,q.needsUpdate=!0,f.renderBufferDirect(J,O,B,q,A,me),q.side=Ki,q.needsUpdate=!0,f.renderBufferDirect(J,O,B,q,A,me),q.side=hi):f.renderBufferDirect(J,O,B,q,A,me),A.onAfterRender(f,O,J,B,q,me)}function Qs(A,O,J){O.isScene!==!0&&(O=tt);const B=Se.get(A),q=g.state.lights,me=g.state.shadowsArray,De=q.state.version,Oe=k.getParameters(A,q.state,me,O,J),Fe=k.getProgramCacheKey(Oe);let Xe=B.programs;B.environment=A.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(A.isMeshStandardMaterial?nt:Ne).get(A.envMap||B.environment),Xe===void 0&&(A.addEventListener("dispose",ce),Xe=new Map,B.programs=Xe);let ke=Xe.get(Fe);if(ke!==void 0){if(B.currentProgram===ke&&B.lightsStateVersion===De)return Cd(A,Oe),ke}else Oe.uniforms=k.getUniforms(A),A.onBuild(J,Oe,f),A.onBeforeCompile(Oe,f),ke=k.acquireProgram(Oe,Fe),Xe.set(Fe,ke),B.uniforms=Oe.uniforms;const Be=B.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=be.uniform),Cd(A,Oe),B.needsLights=A0(A),B.lightsStateVersion=De,B.needsLights&&(Be.ambientLightColor.value=q.state.ambient,Be.lightProbe.value=q.state.probe,Be.directionalLights.value=q.state.directional,Be.directionalLightShadows.value=q.state.directionalShadow,Be.spotLights.value=q.state.spot,Be.spotLightShadows.value=q.state.spotShadow,Be.rectAreaLights.value=q.state.rectArea,Be.ltc_1.value=q.state.rectAreaLTC1,Be.ltc_2.value=q.state.rectAreaLTC2,Be.pointLights.value=q.state.point,Be.pointLightShadows.value=q.state.pointShadow,Be.hemisphereLights.value=q.state.hemi,Be.directionalShadowMap.value=q.state.directionalShadowMap,Be.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Be.spotShadowMap.value=q.state.spotShadowMap,Be.spotLightMatrix.value=q.state.spotLightMatrix,Be.spotLightMap.value=q.state.spotLightMap,Be.pointShadowMap.value=q.state.pointShadowMap,Be.pointShadowMatrix.value=q.state.pointShadowMatrix);const Tt=ke.getUniforms(),dt=el.seqWithValue(Tt.seq,Be);return B.currentProgram=ke,B.uniformsList=dt,ke}function Cd(A,O){const J=Se.get(A);J.outputColorSpace=O.outputColorSpace,J.instancing=O.instancing,J.instancingColor=O.instancingColor,J.skinning=O.skinning,J.morphTargets=O.morphTargets,J.morphNormals=O.morphNormals,J.morphColors=O.morphColors,J.morphTargetsCount=O.morphTargetsCount,J.numClippingPlanes=O.numClippingPlanes,J.numIntersection=O.numClipIntersection,J.vertexAlphas=O.vertexAlphas,J.vertexTangents=O.vertexTangents,J.toneMapping=O.toneMapping}function w0(A,O,J,B,q){O.isScene!==!0&&(O=tt),Ee.resetTextureUnits();const me=O.fog,De=B.isMeshStandardMaterial?O.environment:null,Oe=T===null?f.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:$r,Fe=(B.isMeshStandardMaterial?nt:Ne).get(B.envMap||De),Xe=B.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ke=!!J.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Be=!!J.morphAttributes.position,Tt=!!J.morphAttributes.normal,dt=!!J.morphAttributes.color;let gr=Xi;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(gr=f.toneMapping);const ti=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=ti!==void 0?ti.length:0,je=Se.get(B),eu=g.state.lights;if(he===!0&&(Me===!0||A!==M)){const nr=A===M&&B.id===C;be.setState(B,A,nr)}let tu=!1;B.version===je.__version?(je.needsLights&&je.lightsStateVersion!==eu.state.version||je.outputColorSpace!==Oe||q.isInstancedMesh&&je.instancing===!1||!q.isInstancedMesh&&je.instancing===!0||q.isSkinnedMesh&&je.skinning===!1||!q.isSkinnedMesh&&je.skinning===!0||q.isInstancedMesh&&je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&je.instancingColor===!1&&q.instanceColor!==null||je.envMap!==Fe||B.fog===!0&&je.fog!==me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==be.numPlanes||je.numIntersection!==be.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==ke||je.morphTargets!==Be||je.morphNormals!==Tt||je.morphColors!==dt||je.toneMapping!==gr||$.isWebGL2===!0&&je.morphTargetsCount!==_t)&&(tu=!0):(tu=!0,je.__version=B.version);let en=je.currentProgram;tu===!0&&(en=Qs(B,O,q));let Pd=!1,za=!1,ru=!1;const Vt=en.getUniforms(),tn=je.uniforms;if(pe.useProgram(en.program)&&(Pd=!0,za=!0,ru=!0),B.id!==C&&(C=B.id,za=!0),Pd||M!==A){Vt.setValue(P,"projectionMatrix",A.projectionMatrix),Vt.setValue(P,"viewMatrix",A.matrixWorldInverse);const nr=Vt.map.cameraPosition;nr!==void 0&&nr.setValue(P,ze.setFromMatrixPosition(A.matrixWorld)),$.logarithmicDepthBuffer&&Vt.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Vt.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,za=!0,ru=!0)}if(q.isSkinnedMesh){Vt.setOptional(P,q,"bindMatrix"),Vt.setOptional(P,q,"bindMatrixInverse");const nr=q.skeleton;nr&&($.floatVertexTextures?(nr.boneTexture===null&&nr.computeBoneTexture(),Vt.setValue(P,"boneTexture",nr.boneTexture,Ee),Vt.setValue(P,"boneTextureSize",nr.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const iu=J.morphAttributes;if((iu.position!==void 0||iu.normal!==void 0||iu.color!==void 0&&$.isWebGL2===!0)&&Ce.update(q,J,en),(za||je.receiveShadow!==q.receiveShadow)&&(je.receiveShadow=q.receiveShadow,Vt.setValue(P,"receiveShadow",q.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(tn.envMap.value=Fe,tn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),za&&(Vt.setValue(P,"toneMappingExposure",f.toneMappingExposure),je.needsLights&&T0(tn,ru),me&&B.fog===!0&&se.refreshFogUniforms(tn,me),se.refreshMaterialUniforms(tn,B,K,Q,_e),el.upload(P,je.uniformsList,tn,Ee)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(el.upload(P,je.uniformsList,tn,Ee),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Vt.setValue(P,"center",q.center),Vt.setValue(P,"modelViewMatrix",q.modelViewMatrix),Vt.setValue(P,"normalMatrix",q.normalMatrix),Vt.setValue(P,"modelMatrix",q.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const nr=B.uniformsGroups;for(let nu=0,R0=nr.length;nu<R0;nu++)if($.isWebGL2){const Ld=nr[nu];Ve.update(Ld,en),Ve.bind(Ld,en)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return en}function T0(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function A0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,O,J){Se.get(A.texture).__webglTexture=O,Se.get(A.depthTexture).__webglTexture=J;const B=Se.get(A);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=J===void 0,B.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const J=Se.get(A);J.__webglFramebuffer=O,J.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,J=0){T=A,b=O,w=J;let B=!0,q=null,me=!1,De=!1;if(A){const Oe=Se.get(A);Oe.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(P.FRAMEBUFFER,null),B=!1):Oe.__webglFramebuffer===void 0?Ee.setupRenderTarget(A):Oe.__hasExternalTextures&&Ee.rebindTextures(A,Se.get(A.texture).__webglTexture,Se.get(A.depthTexture).__webglTexture);const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(De=!0);const Xe=Se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[O])?q=Xe[O][J]:q=Xe[O],me=!0):$.isWebGL2&&A.samples>0&&Ee.useMultisampledRTT(A)===!1?q=Se.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?q=Xe[J]:q=Xe,S.copy(A.viewport),z.copy(A.scissor),V=A.scissorTest}else S.copy(H).multiplyScalar(K).floor(),z.copy(N).multiplyScalar(K).floor(),V=j;if(pe.bindFramebuffer(P.FRAMEBUFFER,q)&&$.drawBuffers&&B&&pe.drawBuffers(A,q),pe.viewport(S),pe.scissor(z),pe.setScissorTest(V),me){const Oe=Se.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Oe.__webglTexture,J)}else if(De){const Oe=Se.get(A.texture),Fe=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oe.__webglTexture,J||0,Fe)}C=-1},this.readRenderTargetPixels=function(A,O,J,B,q,me,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){pe.bindFramebuffer(P.FRAMEBUFFER,Oe);try{const Fe=A.texture,Xe=Fe.format,ke=Fe.type;if(Xe!==zr&&xe.convert(Xe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ke===vi&&(te.has("EXT_color_buffer_half_float")||$.isWebGL2&&te.has("EXT_color_buffer_float"));if(ke!==ji&&xe.convert(ke)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Oi&&($.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-B&&J>=0&&J<=A.height-q&&P.readPixels(O,J,B,q,xe.convert(Xe),xe.convert(ke),me)}finally{const Fe=T!==null?Se.get(T).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(A,O,J=0){const B=Math.pow(2,-J),q=Math.floor(O.image.width*B),me=Math.floor(O.image.height*B);Ee.setTexture2D(O,0),P.copyTexSubImage2D(P.TEXTURE_2D,J,0,0,A.x,A.y,q,me),pe.unbindTexture()},this.copyTextureToTexture=function(A,O,J,B=0){const q=O.image.width,me=O.image.height,De=xe.convert(J.format),Oe=xe.convert(J.type);Ee.setTexture2D(J,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,J.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,J.unpackAlignment),O.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,B,A.x,A.y,q,me,De,Oe,O.image.data):O.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,B,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,De,O.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,B,A.x,A.y,De,Oe,O.image),B===0&&J.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(A,O,J,B,q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=A.max.x-A.min.x+1,De=A.max.y-A.min.y+1,Oe=A.max.z-A.min.z+1,Fe=xe.convert(B.format),Xe=xe.convert(B.type);let ke;if(B.isData3DTexture)Ee.setTexture3D(B,0),ke=P.TEXTURE_3D;else if(B.isDataArrayTexture)Ee.setTexture2DArray(B,0),ke=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const Be=P.getParameter(P.UNPACK_ROW_LENGTH),Tt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),dt=P.getParameter(P.UNPACK_SKIP_PIXELS),gr=P.getParameter(P.UNPACK_SKIP_ROWS),ti=P.getParameter(P.UNPACK_SKIP_IMAGES),_t=J.isCompressedTexture?J.mipmaps[0]:J.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,_t.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,A.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,A.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,A.min.z),J.isDataTexture||J.isData3DTexture?P.texSubImage3D(ke,q,O.x,O.y,O.z,me,De,Oe,Fe,Xe,_t.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(ke,q,O.x,O.y,O.z,me,De,Oe,Fe,_t.data)):P.texSubImage3D(ke,q,O.x,O.y,O.z,me,De,Oe,Fe,Xe,_t),P.pixelStorei(P.UNPACK_ROW_LENGTH,Be),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,dt),P.pixelStorei(P.UNPACK_SKIP_ROWS,gr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ti),q===0&&B.generateMipmaps&&P.generateMipmap(ke),pe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ee.setTextureCube(A,0):A.isData3DTexture?Ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ee.setTexture2DArray(A,0):Ee.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){b=0,w=0,T=null,pe.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rt?xn:jv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xn?rt:$r}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bw extends c0{}bw.prototype.isWebGL1Renderer=!0;class gs{constructor(e,r=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=r}clone(){return new gs(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Ew extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r}}class dh extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nm=new ft,ph=new Zv,Fo=new ql,zo=new U;class am extends It{constructor(e=new Jt,r=new dh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,r){const i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(n),Fo.radius+=a,e.ray.intersectsSphere(Fo)===!1)return;nm.copy(n).invert(),ph.copy(e.ray).applyMatrix4(nm);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,c=i.attributes.position;if(u!==null){const p=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let m=p,_=d;m<_;m++){const x=u.getX(m);zo.fromBufferAttribute(c,x),sm(zo,x,l,n,e,r,this)}}else{const p=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let m=p,_=d;m<_;m++)zo.fromBufferAttribute(c,m),sm(zo,m,l,n,e,r,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function sm(t,e,r,i,n,a,s){const o=ph.distanceSqToPoint(t);if(o<r){const l=new U;ph.closestPointToPoint(t,l),l.applyMatrix4(i);const u=n.ray.origin.distanceTo(l);if(u<n.near||u>n.far)return;a.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,r){const i=this.getUtoTmapping(e);return this.getPoint(i,r)}getPoints(e=5){const r=[];for(let i=0;i<=e;i++)r.push(this.getPoint(i/e));return r}getSpacedPoints(e=5){const r=[];for(let i=0;i<=e;i++)r.push(this.getPointAt(i/e));return r}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const r=[];let i,n=this.getPoint(0),a=0;r.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(n),r.push(a),n=i;return this.cacheArcLengths=r,r}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,r){const i=this.getLengths();let n=0;const a=i.length;let s;r?s=r:s=e*i[a-1];let o=0,l=a-1,u;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),u=i[n]-s,u<0)o=n+1;else if(u>0)l=n-1;else{l=n;break}if(n=l,i[n]===s)return n/(a-1);const c=i[n],p=i[n+1]-c,d=(s-c)/p;return(n+d)/(a-1)}getTangent(e,r){let i=e-1e-4,n=e+1e-4;i<0&&(i=0),n>1&&(n=1);const a=this.getPoint(i),s=this.getPoint(n),o=r||(a.isVector2?new ne:new U);return o.copy(s).sub(a).normalize(),o}getTangentAt(e,r){const i=this.getUtoTmapping(e);return this.getTangent(i,r)}computeFrenetFrames(e,r){const i=new U,n=[],a=[],s=[],o=new U,l=new ft;for(let m=0;m<=e;m++){const _=m/e;n[m]=this.getTangentAt(_,new U)}a[0]=new U,s[0]=new U;let u=Number.MAX_VALUE;const c=Math.abs(n[0].x),p=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=u&&(u=c,i.set(1,0,0)),p<=u&&(u=p,i.set(0,1,0)),d<=u&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],o),s[0].crossVectors(n[0],a[0]);for(let m=1;m<=e;m++){if(a[m]=a[m-1].clone(),s[m]=s[m-1].clone(),o.crossVectors(n[m-1],n[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ut(n[m-1].dot(n[m]),-1,1));a[m].applyMatrix4(l.makeRotationAxis(o,_))}s[m].crossVectors(n[m],a[m])}if(r===!0){let m=Math.acos(Ut(a[0].dot(a[e]),-1,1));m/=e,n[0].dot(o.crossVectors(a[0],a[e]))>0&&(m=-m);for(let _=1;_<=e;_++)a[_].applyMatrix4(l.makeRotationAxis(n[_],m*_)),s[_].crossVectors(n[_],a[_])}return{tangents:n,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _d extends ei{constructor(e=0,r=0,i=1,n=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=r,this.xRadius=i,this.yRadius=n,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,r){const i=r||new ne,n=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=n;for(;a>n;)a-=n;a<Number.EPSILON&&(s?a=0:a=n),this.aClockwise===!0&&!s&&(a===n?a=-n:a=a-n);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,m=u-this.aY;l=d*c-m*p+this.aX,u=d*p+m*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ww extends _d{constructor(e,r,i,n,a,s){super(e,r,i,i,n,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function xd(){let t=0,e=0,r=0,i=0;function n(a,s,o,l){t=a,e=o,r=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,u){n(s,o,u*(o-a),u*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,u,c,p){let d=(s-a)/u-(o-a)/(u+c)+(o-s)/c,m=(o-s)/c-(l-s)/(c+p)+(l-o)/p;d*=c,m*=c,n(s,o,d,m)},calc:function(a){const s=a*a,o=s*a;return t+e*a+r*s+i*o}}}const ko=new U,ac=new xd,sc=new xd,oc=new xd;class Tw extends ei{constructor(e=[],r=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=r,this.curveType=i,this.tension=n}getPoint(e,r=new U){const i=r,n=this.points,a=n.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let u,c;this.closed||o>0?u=n[(o-1)%a]:(ko.subVectors(n[0],n[1]).add(n[0]),u=ko);const p=n[o%a],d=n[(o+1)%a];if(this.closed||o+2<a?c=n[(o+2)%a]:(ko.subVectors(n[a-1],n[a-2]).add(n[a-1]),c=ko),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(p),m),x=Math.pow(p.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(c),m);x<1e-4&&(x=1),_<1e-4&&(_=x),g<1e-4&&(g=x),ac.initNonuniformCatmullRom(u.x,p.x,d.x,c.x,_,x,g),sc.initNonuniformCatmullRom(u.y,p.y,d.y,c.y,_,x,g),oc.initNonuniformCatmullRom(u.z,p.z,d.z,c.z,_,x,g)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(u.x,p.x,d.x,c.x,this.tension),sc.initCatmullRom(u.y,p.y,d.y,c.y,this.tension),oc.initCatmullRom(u.z,p.z,d.z,c.z,this.tension));return i.set(ac.calc(l),sc.calc(l),oc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let r=0,i=e.points.length;r<i;r++){const n=e.points[r];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let r=0,i=this.points.length;r<i;r++){const n=this.points[r];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let r=0,i=e.points.length;r<i;r++){const n=e.points[r];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function om(t,e,r,i,n){const a=(i-e)*.5,s=(n-r)*.5,o=t*t,l=t*o;return(2*r-2*i+a+s)*l+(-3*r+3*i-2*a-s)*o+a*t+r}function Aw(t,e){const r=1-t;return r*r*e}function Rw(t,e){return 2*(1-t)*t*e}function Cw(t,e){return t*t*e}function vs(t,e,r,i){return Aw(t,e)+Rw(t,r)+Cw(t,i)}function Pw(t,e){const r=1-t;return r*r*r*e}function Lw(t,e){const r=1-t;return 3*r*r*t*e}function Uw(t,e){return 3*(1-t)*t*t*e}function Dw(t,e){return t*t*t*e}function _s(t,e,r,i,n){return Pw(t,e)+Lw(t,r)+Uw(t,i)+Dw(t,n)}class h0 extends ei{constructor(e=new ne,r=new ne,i=new ne,n=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=r,this.v2=i,this.v3=n}getPoint(e,r=new ne){const i=r,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(_s(e,n.x,a.x,s.x,o.x),_s(e,n.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Iw extends ei{constructor(e=new U,r=new U,i=new U,n=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=r,this.v2=i,this.v3=n}getPoint(e,r=new U){const i=r,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(_s(e,n.x,a.x,s.x,o.x),_s(e,n.y,a.y,s.y,o.y),_s(e,n.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yd extends ei{constructor(e=new ne,r=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=r}getPoint(e,r=new ne){const i=r;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,r){return this.getPoint(e,r)}getTangent(e,r=new ne){return r.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,r){return this.getTangent(e,r)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nw extends ei{constructor(e=new U,r=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=r}getPoint(e,r=new U){const i=r;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,r){return this.getPoint(e,r)}getTangent(e,r=new U){return r.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,r){return this.getTangent(e,r)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d0 extends ei{constructor(e=new ne,r=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=r,this.v2=i}getPoint(e,r=new ne){const i=r,n=this.v0,a=this.v1,s=this.v2;return i.set(vs(e,n.x,a.x,s.x),vs(e,n.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ow extends ei{constructor(e=new U,r=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=r,this.v2=i}getPoint(e,r=new U){const i=r,n=this.v0,a=this.v1,s=this.v2;return i.set(vs(e,n.x,a.x,s.x),vs(e,n.y,a.y,s.y),vs(e,n.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class p0 extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,r=new ne){const i=r,n=this.points,a=(n.length-1)*e,s=Math.floor(a),o=a-s,l=n[s===0?s:s-1],u=n[s],c=n[s>n.length-2?n.length-1:s+1],p=n[s>n.length-3?n.length-1:s+2];return i.set(om(o,l.x,u.x,c.x,p.x),om(o,l.y,u.y,c.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let r=0,i=e.points.length;r<i;r++){const n=e.points[r];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let r=0,i=this.points.length;r<i;r++){const n=this.points[r];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let r=0,i=e.points.length;r<i;r++){const n=e.points[r];this.points.push(new ne().fromArray(n))}return this}}var f0=Object.freeze({__proto__:null,ArcCurve:ww,CatmullRomCurve3:Tw,CubicBezierCurve:h0,CubicBezierCurve3:Iw,EllipseCurve:_d,LineCurve:yd,LineCurve3:Nw,QuadraticBezierCurve:d0,QuadraticBezierCurve3:Ow,SplineCurve:p0});class Fw extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),r=this.curves[this.curves.length-1].getPoint(1);e.equals(r)||this.curves.push(new yd(r,e))}getPoint(e,r){const i=e*this.getLength(),n=this.getCurveLengths();let a=0;for(;a<n.length;){if(n[a]>=i){const s=n[a]-i,o=this.curves[a],l=o.getLength(),u=l===0?0:1-s/l;return o.getPointAt(u,r)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let r=0;for(let i=0,n=this.curves.length;i<n;i++)r+=this.curves[i].getLength(),e.push(r);return this.cacheLengths=e,e}getSpacedPoints(e=40){const r=[];for(let i=0;i<=e;i++)r.push(this.getPoint(i/e));return this.autoClose&&r.push(r[0]),r}getPoints(e=12){const r=[];let i;for(let n=0,a=this.curves;n<a.length;n++){const s=a[n],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(r.push(c),i=c)}}return this.autoClose&&r.length>1&&!r[r.length-1].equals(r[0])&&r.push(r[0]),r}copy(e){super.copy(e),this.curves=[];for(let r=0,i=e.curves.length;r<i;r++){const n=e.curves[r];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let r=0,i=this.curves.length;r<i;r++){const n=this.curves[r];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let r=0,i=e.curves.length;r<i;r++){const n=e.curves[r];this.curves.push(new f0[n.type]().fromJSON(n))}return this}}class lm extends Fw{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let r=1,i=e.length;r<i;r++)this.lineTo(e[r].x,e[r].y);return this}moveTo(e,r){return this.currentPoint.set(e,r),this}lineTo(e,r){const i=new yd(this.currentPoint.clone(),new ne(e,r));return this.curves.push(i),this.currentPoint.set(e,r),this}quadraticCurveTo(e,r,i,n){const a=new d0(this.currentPoint.clone(),new ne(e,r),new ne(i,n));return this.curves.push(a),this.currentPoint.set(i,n),this}bezierCurveTo(e,r,i,n,a,s){const o=new h0(this.currentPoint.clone(),new ne(e,r),new ne(i,n),new ne(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const r=[this.currentPoint.clone()].concat(e),i=new p0(r);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,r,i,n,a,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,r+l,i,n,a,s),this}absarc(e,r,i,n,a,s){return this.absellipse(e,r,i,i,n,a,s),this}ellipse(e,r,i,n,a,s,o,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,r+c,i,n,a,s,o,l),this}absellipse(e,r,i,n,a,s,o,l){const u=new _d(e,r,i,n,a,s,o,l);if(this.curves.length>0){const p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ui extends Jt{constructor(e=1,r=1,i=1,n=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:r,height:i,radialSegments:n,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const u=this;n=Math.floor(n),a=Math.floor(a);const c=[],p=[],d=[],m=[];let _=0;const x=[],g=i/2;let h=0;v(),s===!1&&(e>0&&f(!0),r>0&&f(!1)),this.setIndex(c),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(m,2));function v(){const y=new U,b=new U;let w=0;const T=(r-e)/i;for(let C=0;C<=a;C++){const M=[],S=C/a,z=S*(r-e)+e;for(let V=0;V<=n;V++){const I=V/n,F=I*l+o,G=Math.sin(F),Q=Math.cos(F);b.x=z*G,b.y=-S*i+g,b.z=z*Q,p.push(b.x,b.y,b.z),y.set(G,T,Q).normalize(),d.push(y.x,y.y,y.z),m.push(I,1-S),M.push(_++)}x.push(M)}for(let C=0;C<n;C++)for(let M=0;M<a;M++){const S=x[M][C],z=x[M+1][C],V=x[M+1][C+1],I=x[M][C+1];c.push(S,z,I),c.push(z,V,I),w+=6}u.addGroup(h,w,0),h+=w}function f(y){const b=_,w=new ne,T=new U;let C=0;const M=y===!0?e:r,S=y===!0?1:-1;for(let V=1;V<=n;V++)p.push(0,g*S,0),d.push(0,S,0),m.push(.5,.5),_++;const z=_;for(let V=0;V<=n;V++){const I=V/n*l+o,F=Math.cos(I),G=Math.sin(I);T.x=M*G,T.y=g*S,T.z=M*F,p.push(T.x,T.y,T.z),d.push(0,S,0),w.x=F*.5+.5,w.y=G*.5*S+.5,m.push(w.x,w.y),_++}for(let V=0;V<n;V++){const I=b+V,F=z+V;y===!0?c.push(F,F+1,I):c.push(F+1,F,I),C+=3}u.addGroup(h,C,y===!0?1:2),h+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Md extends Ui{constructor(e=1,r=1,i=32,n=1,a=!1,s=0,o=Math.PI*2){super(0,e,r,i,n,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:r,radialSegments:i,heightSegments:n,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Md(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ql extends Jt{constructor(e=[],r=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:r,radius:i,detail:n};const a=[],s=[];o(n),u(i),c(),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(a.slice(),3)),this.setAttribute("uv",new mt(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const f=new U,y=new U,b=new U;for(let w=0;w<r.length;w+=3)m(r[w+0],f),m(r[w+1],y),m(r[w+2],b),l(f,y,b,v)}function l(v,f,y,b){const w=b+1,T=[];for(let C=0;C<=w;C++){T[C]=[];const M=v.clone().lerp(y,C/w),S=f.clone().lerp(y,C/w),z=w-C;for(let V=0;V<=z;V++)V===0&&C===w?T[C][V]=M:T[C][V]=M.clone().lerp(S,V/z)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){const S=Math.floor(M/2);M%2===0?(d(T[C][S+1]),d(T[C+1][S]),d(T[C][S])):(d(T[C][S+1]),d(T[C+1][S+1]),d(T[C+1][S]))}}function u(v){const f=new U;for(let y=0;y<a.length;y+=3)f.x=a[y+0],f.y=a[y+1],f.z=a[y+2],f.normalize().multiplyScalar(v),a[y+0]=f.x,a[y+1]=f.y,a[y+2]=f.z}function c(){const v=new U;for(let f=0;f<a.length;f+=3){v.x=a[f+0],v.y=a[f+1],v.z=a[f+2];const y=g(v)/2/Math.PI+.5,b=h(v)/Math.PI+.5;s.push(y,1-b)}_(),p()}function p(){for(let v=0;v<s.length;v+=6){const f=s[v+0],y=s[v+2],b=s[v+4],w=Math.max(f,y,b),T=Math.min(f,y,b);w>.9&&T<.1&&(f<.2&&(s[v+0]+=1),y<.2&&(s[v+2]+=1),b<.2&&(s[v+4]+=1))}}function d(v){a.push(v.x,v.y,v.z)}function m(v,f){const y=v*3;f.x=e[y+0],f.y=e[y+1],f.z=e[y+2]}function _(){const v=new U,f=new U,y=new U,b=new U,w=new ne,T=new ne,C=new ne;for(let M=0,S=0;M<a.length;M+=9,S+=6){v.set(a[M+0],a[M+1],a[M+2]),f.set(a[M+3],a[M+4],a[M+5]),y.set(a[M+6],a[M+7],a[M+8]),w.set(s[S+0],s[S+1]),T.set(s[S+2],s[S+3]),C.set(s[S+4],s[S+5]),b.copy(v).add(f).add(y).divideScalar(3);const z=g(b);x(w,S+0,v,z),x(T,S+2,f,z),x(C,S+4,y,z)}}function x(v,f,y,b){b<0&&v.x===1&&(s[f]=v.x-1),y.x===0&&y.z===0&&(s[f]=b/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function h(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.vertices,e.indices,e.radius,e.details)}}class Sd extends Ql{constructor(e=1,r=0){const i=(1+Math.sqrt(5))/2,n=1/i,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,s,e,r),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:r}}static fromJSON(e){return new Sd(e.radius,e.detail)}}class m0 extends lm{constructor(e){super(e),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){const r=[];for(let i=0,n=this.holes.length;i<n;i++)r[i]=this.holes[i].getPoints(e);return r}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let r=0,i=e.holes.length;r<i;r++){const n=e.holes[r];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let r=0,i=this.holes.length;r<i;r++){const n=this.holes[r];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let r=0,i=e.holes.length;r<i;r++){const n=e.holes[r];this.holes.push(new lm().fromJSON(n))}return this}}const zw={triangulate:function(t,e,r=2){const i=e&&e.length,n=i?e[0]*r:t.length;let a=g0(t,0,n,r,!0);const s=[];if(!a||a.next===a.prev)return s;let o,l,u,c,p,d,m;if(i&&(a=Vw(t,e,a,r)),t.length>80*r){o=u=t[0],l=c=t[1];for(let _=r;_<n;_+=r)p=t[_],d=t[_+1],p<o&&(o=p),d<l&&(l=d),p>u&&(u=p),d>c&&(c=d);m=Math.max(u-o,c-l),m=m!==0?32767/m:0}return ks(a,s,r,o,l,m,0),s}};function g0(t,e,r,i,n){let a,s;if(n===eT(t,e,r,i)>0)for(a=e;a<r;a+=i)s=um(a,t[a],t[a+1],s);else for(a=r-i;a>=e;a-=i)s=um(a,t[a],t[a+1],s);return s&&$l(s,s.next)&&(Hs(s),s=s.next),s}function Rn(t,e){if(!t)return t;e||(e=t);let r=t,i;do if(i=!1,!r.steiner&&($l(r,r.next)||ot(r.prev,r,r.next)===0)){if(Hs(r),r=e=r.prev,r===r.next)break;i=!0}else r=r.next;while(i||r!==e);return e}function ks(t,e,r,i,n,a,s){if(!t)return;!s&&a&&qw(t,i,n,a);let o=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,a?Bw(t,i,n,a):kw(t)){e.push(l.i/r|0),e.push(t.i/r|0),e.push(u.i/r|0),Hs(t),t=u.next,o=u.next;continue}if(t=u,t===o){s?s===1?(t=Hw(Rn(t),e,r),ks(t,e,r,i,n,a,2)):s===2&&Gw(t,e,r,i,n,a):ks(Rn(t),e,r,i,n,a,1);break}}}function kw(t){const e=t.prev,r=t,i=t.next;if(ot(e,r,i)>=0)return!1;const n=e.x,a=r.x,s=i.x,o=e.y,l=r.y,u=i.y,c=n<a?n<s?n:s:a<s?a:s,p=o<l?o<u?o:u:l<u?l:u,d=n>a?n>s?n:s:a>s?a:s,m=o>l?o>u?o:u:l>u?l:u;let _=i.next;for(;_!==e;){if(_.x>=c&&_.x<=d&&_.y>=p&&_.y<=m&&ha(n,o,a,l,s,u,_.x,_.y)&&ot(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Bw(t,e,r,i){const n=t.prev,a=t,s=t.next;if(ot(n,a,s)>=0)return!1;const o=n.x,l=a.x,u=s.x,c=n.y,p=a.y,d=s.y,m=o<l?o<u?o:u:l<u?l:u,_=c<p?c<d?c:d:p<d?p:d,x=o>l?o>u?o:u:l>u?l:u,g=c>p?c>d?c:d:p>d?p:d,h=fh(m,_,e,r,i),v=fh(x,g,e,r,i);let f=t.prevZ,y=t.nextZ;for(;f&&f.z>=h&&y&&y.z<=v;){if(f.x>=m&&f.x<=x&&f.y>=_&&f.y<=g&&f!==n&&f!==s&&ha(o,c,l,p,u,d,f.x,f.y)&&ot(f.prev,f,f.next)>=0||(f=f.prevZ,y.x>=m&&y.x<=x&&y.y>=_&&y.y<=g&&y!==n&&y!==s&&ha(o,c,l,p,u,d,y.x,y.y)&&ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;f&&f.z>=h;){if(f.x>=m&&f.x<=x&&f.y>=_&&f.y<=g&&f!==n&&f!==s&&ha(o,c,l,p,u,d,f.x,f.y)&&ot(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;y&&y.z<=v;){if(y.x>=m&&y.x<=x&&y.y>=_&&y.y<=g&&y!==n&&y!==s&&ha(o,c,l,p,u,d,y.x,y.y)&&ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Hw(t,e,r){let i=t;do{const n=i.prev,a=i.next.next;!$l(n,a)&&v0(n,i,i.next,a)&&Bs(n,a)&&Bs(a,n)&&(e.push(n.i/r|0),e.push(i.i/r|0),e.push(a.i/r|0),Hs(i),Hs(i.next),i=t=a),i=i.next}while(i!==t);return Rn(i)}function Gw(t,e,r,i,n,a){let s=t;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Zw(s,o)){let l=_0(s,o);s=Rn(s,s.next),l=Rn(l,l.next),ks(s,e,r,i,n,a,0),ks(l,e,r,i,n,a,0);return}o=o.next}s=s.next}while(s!==t)}function Vw(t,e,r,i){const n=[];let a,s,o,l,u;for(a=0,s=e.length;a<s;a++)o=e[a]*i,l=a<s-1?e[a+1]*i:t.length,u=g0(t,o,l,i,!1),u===u.next&&(u.steiner=!0),n.push(Kw(u));for(n.sort(Ww),a=0;a<n.length;a++)r=Xw(n[a],r);return r}function Ww(t,e){return t.x-e.x}function Xw(t,e){const r=jw(t,e);if(!r)return e;const i=_0(r,t);return Rn(i,i.next),Rn(r,r.next)}function jw(t,e){let r=e,i=-1/0,n;const a=t.x,s=t.y;do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){const d=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(d<=a&&d>i&&(i=d,n=r.x<r.next.x?r:r.next,d===a))return n}r=r.next}while(r!==e);if(!n)return null;const o=n,l=n.x,u=n.y;let c=1/0,p;r=n;do a>=r.x&&r.x>=l&&a!==r.x&&ha(s<u?a:i,s,l,u,s<u?i:a,s,r.x,r.y)&&(p=Math.abs(s-r.y)/(a-r.x),Bs(r,t)&&(p<c||p===c&&(r.x>n.x||r.x===n.x&&Yw(n,r)))&&(n=r,c=p)),r=r.next;while(r!==o);return n}function Yw(t,e){return ot(t.prev,t,e.prev)<0&&ot(e.next,t,t.next)<0}function qw(t,e,r,i){let n=t;do n.z===0&&(n.z=fh(n.x,n.y,e,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,Jw(n)}function Jw(t){let e,r,i,n,a,s,o,l,u=1;do{for(r=t,t=null,a=null,s=0;r;){for(s++,i=r,o=0,e=0;e<u&&(o++,i=i.nextZ,!!i);e++);for(l=u;o>0||l>0&&i;)o!==0&&(l===0||!i||r.z<=i.z)?(n=r,r=r.nextZ,o--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:t=n,n.prevZ=a,a=n;r=i}a.nextZ=null,u*=2}while(s>1);return t}function fh(t,e,r,i,n){return t=(t-r)*n|0,e=(e-i)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Kw(t){let e=t,r=t;do(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;while(e!==t);return r}function ha(t,e,r,i,n,a,s,o){return(n-s)*(e-o)>=(t-s)*(a-o)&&(t-s)*(i-o)>=(r-s)*(e-o)&&(r-s)*(a-o)>=(n-s)*(i-o)}function Zw(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Qw(t,e)&&(Bs(t,e)&&Bs(e,t)&&$w(t,e)&&(ot(t.prev,t,e.prev)||ot(t,e.prev,e))||$l(t,e)&&ot(t.prev,t,t.next)>0&&ot(e.prev,e,e.next)>0)}function ot(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function $l(t,e){return t.x===e.x&&t.y===e.y}function v0(t,e,r,i){const n=Ho(ot(t,e,r)),a=Ho(ot(t,e,i)),s=Ho(ot(r,i,t)),o=Ho(ot(r,i,e));return!!(n!==a&&s!==o||n===0&&Bo(t,r,e)||a===0&&Bo(t,i,e)||s===0&&Bo(r,t,i)||o===0&&Bo(r,e,i))}function Bo(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function Ho(t){return t>0?1:t<0?-1:0}function Qw(t,e){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&v0(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}function Bs(t,e){return ot(t.prev,t,t.next)<0?ot(t,e,t.next)>=0&&ot(t,t.prev,e)>=0:ot(t,e,t.prev)<0||ot(t,t.next,e)<0}function $w(t,e){let r=t,i=!1;const n=(t.x+e.x)/2,a=(t.y+e.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==t);return i}function _0(t,e){const r=new mh(t.i,t.x,t.y),i=new mh(e.i,e.x,e.y),n=t.next,a=e.prev;return t.next=e,e.prev=t,r.next=n,n.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}function um(t,e,r,i){const n=new mh(t,e,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Hs(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function mh(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eT(t,e,r,i){let n=0;for(let a=e,s=r-i;a<r;a+=i)n+=(t[s]-t[a])*(t[a+1]+t[s+1]),s=a;return n}class xs{static area(e){const r=e.length;let i=0;for(let n=r-1,a=0;a<r;n=a++)i+=e[n].x*e[a].y-e[a].x*e[n].y;return i*.5}static isClockWise(e){return xs.area(e)<0}static triangulateShape(e,r){const i=[],n=[],a=[];cm(e),hm(i,e);let s=e.length;r.forEach(cm);for(let l=0;l<r.length;l++)n.push(s),s+=r[l].length,hm(i,r[l]);const o=zw.triangulate(i,n);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function cm(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function hm(t,e){for(let r=0;r<e.length;r++)t.push(e[r].x),t.push(e[r].y)}class bd extends Jt{constructor(e=new m0([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),r={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:r},e=Array.isArray(e)?e:[e];const i=this,n=[],a=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s(u)}this.setAttribute("position",new mt(n,3)),this.setAttribute("uv",new mt(a,2)),this.computeVertexNormals();function s(o){const l=[],u=r.curveSegments!==void 0?r.curveSegments:12,c=r.steps!==void 0?r.steps:1,p=r.depth!==void 0?r.depth:1;let d=r.bevelEnabled!==void 0?r.bevelEnabled:!0,m=r.bevelThickness!==void 0?r.bevelThickness:.2,_=r.bevelSize!==void 0?r.bevelSize:m-.1,x=r.bevelOffset!==void 0?r.bevelOffset:0,g=r.bevelSegments!==void 0?r.bevelSegments:3;const h=r.extrudePath,v=r.UVGenerator!==void 0?r.UVGenerator:tT;let f,y=!1,b,w,T,C;h&&(f=h.getSpacedPoints(c),y=!0,d=!1,b=h.computeFrenetFrames(c,!1),w=new U,T=new U,C=new U),d||(g=0,m=0,_=0,x=0);const M=o.extractPoints(u);let S=M.shape;const z=M.holes;if(!xs.isClockWise(S)){S=S.reverse();for(let Z=0,P=z.length;Z<P;Z++){const le=z[Z];xs.isClockWise(le)&&(z[Z]=le.reverse())}}const V=xs.triangulateShape(S,z),I=S;for(let Z=0,P=z.length;Z<P;Z++){const le=z[Z];S=S.concat(le)}function F(Z,P,le){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(P,le)}const G=S.length,Q=V.length;function K(Z,P,le){let te,$,pe;const Te=Z.x-P.x,Se=Z.y-P.y,Ee=le.x-Z.x,Ne=le.y-Z.y,nt=Te*Te+Se*Se,gt=Te*Ne-Se*Ee;if(Math.abs(gt)>Number.EPSILON){const R=Math.sqrt(nt),E=Math.sqrt(Ee*Ee+Ne*Ne),k=P.x-Se/R,se=P.y+Te/R,re=le.x-Ne/E,ae=le.y+Ee/E,be=((re-k)*Ne-(ae-se)*Ee)/(Te*Ne-Se*Ee);te=k+Te*be-Z.x,$=se+Se*be-Z.y;const oe=te*te+$*$;if(oe<=2)return new ne(te,$);pe=Math.sqrt(oe/2)}else{let R=!1;Te>Number.EPSILON?Ee>Number.EPSILON&&(R=!0):Te<-Number.EPSILON?Ee<-Number.EPSILON&&(R=!0):Math.sign(Se)===Math.sign(Ne)&&(R=!0),R?(te=-Se,$=Te,pe=Math.sqrt(nt)):(te=Te,$=Se,pe=Math.sqrt(nt/2))}return new ne(te/pe,$/pe)}const D=[];for(let Z=0,P=I.length,le=P-1,te=Z+1;Z<P;Z++,le++,te++)le===P&&(le=0),te===P&&(te=0),D[Z]=K(I[Z],I[le],I[te]);const W=[];let H,N=D.concat();for(let Z=0,P=z.length;Z<P;Z++){const le=z[Z];H=[];for(let te=0,$=le.length,pe=$-1,Te=te+1;te<$;te++,pe++,Te++)pe===$&&(pe=0),Te===$&&(Te=0),H[te]=K(le[te],le[pe],le[Te]);W.push(H),N=N.concat(H)}for(let Z=0;Z<g;Z++){const P=Z/g,le=m*Math.cos(P*Math.PI/2),te=_*Math.sin(P*Math.PI/2)+x;for(let $=0,pe=I.length;$<pe;$++){const Te=F(I[$],D[$],te);_e(Te.x,Te.y,-le)}for(let $=0,pe=z.length;$<pe;$++){const Te=z[$];H=W[$];for(let Se=0,Ee=Te.length;Se<Ee;Se++){const Ne=F(Te[Se],H[Se],te);_e(Ne.x,Ne.y,-le)}}}const j=_+x;for(let Z=0;Z<G;Z++){const P=d?F(S[Z],N[Z],j):S[Z];y?(T.copy(b.normals[0]).multiplyScalar(P.x),w.copy(b.binormals[0]).multiplyScalar(P.y),C.copy(f[0]).add(T).add(w),_e(C.x,C.y,C.z)):_e(P.x,P.y,0)}for(let Z=1;Z<=c;Z++)for(let P=0;P<G;P++){const le=d?F(S[P],N[P],j):S[P];y?(T.copy(b.normals[Z]).multiplyScalar(le.x),w.copy(b.binormals[Z]).multiplyScalar(le.y),C.copy(f[Z]).add(T).add(w),_e(C.x,C.y,C.z)):_e(le.x,le.y,p/c*Z)}for(let Z=g-1;Z>=0;Z--){const P=Z/g,le=m*Math.cos(P*Math.PI/2),te=_*Math.sin(P*Math.PI/2)+x;for(let $=0,pe=I.length;$<pe;$++){const Te=F(I[$],D[$],te);_e(Te.x,Te.y,p+le)}for(let $=0,pe=z.length;$<pe;$++){const Te=z[$];H=W[$];for(let Se=0,Ee=Te.length;Se<Ee;Se++){const Ne=F(Te[Se],H[Se],te);y?_e(Ne.x,Ne.y+f[c-1].y,f[c-1].x+le):_e(Ne.x,Ne.y,p+le)}}}ie(),he();function ie(){const Z=n.length/3;if(d){let P=0,le=G*P;for(let te=0;te<Q;te++){const $=V[te];Re($[2]+le,$[1]+le,$[0]+le)}P=c+g*2,le=G*P;for(let te=0;te<Q;te++){const $=V[te];Re($[0]+le,$[1]+le,$[2]+le)}}else{for(let P=0;P<Q;P++){const le=V[P];Re(le[2],le[1],le[0])}for(let P=0;P<Q;P++){const le=V[P];Re(le[0]+G*c,le[1]+G*c,le[2]+G*c)}}i.addGroup(Z,n.length/3-Z,0)}function he(){const Z=n.length/3;let P=0;Me(I,P),P+=I.length;for(let le=0,te=z.length;le<te;le++){const $=z[le];Me($,P),P+=$.length}i.addGroup(Z,n.length/3-Z,1)}function Me(Z,P){let le=Z.length;for(;--le>=0;){const te=le;let $=le-1;$<0&&($=Z.length-1);for(let pe=0,Te=c+g*2;pe<Te;pe++){const Se=G*pe,Ee=G*(pe+1),Ne=P+te+Se,nt=P+$+Se,gt=P+$+Ee,R=P+te+Ee;Le(Ne,nt,gt,R)}}}function _e(Z,P,le){l.push(Z),l.push(P),l.push(le)}function Re(Z,P,le){ze(Z),ze(P),ze(le);const te=n.length/3,$=v.generateTopUV(i,n,te-3,te-2,te-1);tt($[0]),tt($[1]),tt($[2])}function Le(Z,P,le,te){ze(Z),ze(P),ze(te),ze(P),ze(le),ze(te);const $=n.length/3,pe=v.generateSideWallUV(i,n,$-6,$-3,$-2,$-1);tt(pe[0]),tt(pe[1]),tt(pe[3]),tt(pe[1]),tt(pe[2]),tt(pe[3])}function ze(Z){n.push(l[Z*3+0]),n.push(l[Z*3+1]),n.push(l[Z*3+2])}function tt(Z){a.push(Z.x),a.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),r=this.parameters.shapes,i=this.parameters.options;return rT(r,i,e)}static fromJSON(e,r){const i=[];for(let a=0,s=e.shapes.length;a<s;a++){const o=r[e.shapes[a]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new f0[n.type]().fromJSON(n)),new bd(i,e.options)}}const tT={generateTopUV:function(t,e,r,i,n){const a=e[r*3],s=e[r*3+1],o=e[i*3],l=e[i*3+1],u=e[n*3],c=e[n*3+1];return[new ne(a,s),new ne(o,l),new ne(u,c)]},generateSideWallUV:function(t,e,r,i,n,a){const s=e[r*3],o=e[r*3+1],l=e[r*3+2],u=e[i*3],c=e[i*3+1],p=e[i*3+2],d=e[n*3],m=e[n*3+1],_=e[n*3+2],x=e[a*3],g=e[a*3+1],h=e[a*3+2];return Math.abs(o-c)<Math.abs(s-u)?[new ne(s,1-l),new ne(u,1-p),new ne(d,1-_),new ne(x,1-h)]:[new ne(o,1-l),new ne(c,1-p),new ne(m,1-_),new ne(g,1-h)]}};function rT(t,e,r){if(r.shapes=[],Array.isArray(t))for(let i=0,n=t.length;i<n;i++){const a=t[i];r.shapes.push(a.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},e),e.extrudePath!==void 0&&(r.options.extrudePath=e.extrudePath.toJSON()),r}class Ed extends Ql{constructor(e=1,r=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,e,r),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:r}}static fromJSON(e){return new Ed(e.radius,e.detail)}}class Gs extends Jt{constructor(e=1,r=32,i=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:r,heightSegments:i,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},r=Math.max(3,Math.floor(r)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let u=0;const c=[],p=new U,d=new U,m=[],_=[],x=[],g=[];for(let h=0;h<=i;h++){const v=[],f=h/i;let y=0;h===0&&s===0?y=.5/r:h===i&&l===Math.PI&&(y=-.5/r);for(let b=0;b<=r;b++){const w=b/r;p.x=-e*Math.cos(n+w*a)*Math.sin(s+f*o),p.y=e*Math.cos(s+f*o),p.z=e*Math.sin(n+w*a)*Math.sin(s+f*o),_.push(p.x,p.y,p.z),d.copy(p).normalize(),x.push(d.x,d.y,d.z),g.push(w+y,1-f),v.push(u++)}c.push(v)}for(let h=0;h<i;h++)for(let v=0;v<r;v++){const f=c[h][v+1],y=c[h][v],b=c[h+1][v],w=c[h+1][v+1];(h!==0||s>0)&&m.push(f,y,w),(h!==i-1||l<Math.PI)&&m.push(y,b,w)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class x0 extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pd,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class da extends Un{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pd,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y0 extends It{constructor(e,r=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=r}dispose(){}copy(e,r){return super.copy(e,r),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const r=super.toJSON(e);return r.object.color=this.color.getHex(),r.object.intensity=this.intensity,this.groundColor!==void 0&&(r.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(r.object.distance=this.distance),this.angle!==void 0&&(r.object.angle=this.angle),this.decay!==void 0&&(r.object.decay=this.decay),this.penumbra!==void 0&&(r.object.penumbra=this.penumbra),this.shadow!==void 0&&(r.object.shadow=this.shadow.toJSON()),r}}const lc=new ft,dm=new U,pm=new U;class iT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const r=this.camera,i=this.matrix;dm.setFromMatrixPosition(e.matrixWorld),r.position.copy(dm),pm.setFromMatrixPosition(e.target.matrixWorld),r.lookAt(pm),r.updateMatrixWorld(),lc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nT extends iT{constructor(){super(new gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aT extends y0{constructor(e,r){super(e,r),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new nT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sT extends y0{constructor(e,r){super(e,r),this.isAmbientLight=!0,this.type="AmbientLight"}}class oT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const r=fm();e=(r-this.oldTime)/1e3,this.oldTime=r,this.elapsedTime+=e}return e}}function fm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);const M0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ks{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lT=new gd(-1,1,1,-1,0,1),wd=new Jt;wd.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3));wd.setAttribute("uv",new mt([0,2,0,0,2,0],2));class S0{constructor(e){this._mesh=new Ye(wd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class uT extends Ks{constructor(e,r){super(),this.textureID=r!==void 0?r:"tDiffuse",e instanceof cr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cl.clone(e.uniforms),this.material=new cr({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new S0(this.material)}render(e,r,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class mm extends Ks{constructor(e,r){super(),this.scene=e,this.camera=r,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,r,i){const n=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(n.EQUAL,1,4294967295),a.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.buffers.stencil.setLocked(!0)}}class cT extends Ks{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hT{constructor(e,r){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),r===void 0){const i=e.getSize(new ne);this._width=i.width,this._height=i.height,r=new Hr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vi}),r.texture.name="EffectComposer.rt1"}else this._width=r.width,this._height=r.height;this.renderTarget1=r,this.renderTarget2=r.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new uT(M0),this.copyPass.material.blending=gi,this.clock=new oT}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,r){this.passes.splice(r,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const r=this.passes.indexOf(e);r!==-1&&this.passes.splice(r,1)}isLastEnabledPass(e){for(let r=e+1;r<this.passes.length;r++)if(this.passes[r].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const r=this.renderer.getRenderTarget();let i=!1;for(let n=0,a=this.passes.length;n<a;n++){const s=this.passes[n];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}mm!==void 0&&(s instanceof mm?i=!0:s instanceof cT&&(i=!1))}}this.renderer.setRenderTarget(r)}reset(e){if(e===void 0){const r=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=r.width,this._height=r.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,r){this._width=e,this._height=r;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dT extends Ks{constructor(e,r,i=null,n=null,a=null){super(),this.scene=e,this.camera=r,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new we}render(e,r,i){const n=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=n}}const pT={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ua extends Ks{constructor(e,r,i,n){super(),this.strength=r!==void 0?r:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new we(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Hr(a,s,{type:vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const d=new Hr(a,s,{type:vi});d.texture.name="UnrealBloomPass.h"+p,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new Hr(a,s,{type:vi});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),a=Math.round(a/2),s=Math.round(s/2)}const o=pT;this.highPassUniforms=Cl.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new cr({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new ne(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=M0;this.copyUniforms=Cl.clone(c.uniforms),this.blendMaterial=new cr({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:wl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new we,this.oldClearAlpha=1,this.basic=new Js,this.fsQuad=new S0(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,r){let i=Math.round(e/2),n=Math.round(r/2);this.renderTargetBright.setSize(i,n);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,n),this.renderTargetsVertical[a].setSize(i,n),this.separableBlurMaterials[a].uniforms.invSize.value=new ne(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,r,i,n,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ua.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ua.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){const r=[];for(let i=0;i<e;i++)r.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new cr({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:r}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new cr({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ua.BlurDirectionX=new ne(1,0);Ua.BlurDirectionY=new ne(0,1);const fT=.8,mT=.2,gT=.03,vT=.05,_T=1e3,xT=100,yT=100,MT=.04,ST=35,bT=10,ET=3,wT=.8,TT=1.2,AT=.8,RT=.1,CT=.15,PT=!1,LT=5e-4,UT={baseForwardSpeed:fT,speedIncrementPerBiome:mT,rotationSpeed:gT,lerpFactor:vT,biomeDist:_T,maxHealth:xT,maxFuel:yT,fuelDrainRate:MT,fuelReplenish:ST,asteroidCount:bT,fuelCanCount:ET,maxPitch:wT,maxYaw:TT,maxRoll:AT,cameraLerp:RT,gravity:CT,day_night_cycle:PT,dayNightSpeed:LT},Ur=[{name:"AETHERIA",fog:8,ground:43690,terrainType:"FLAT",sunColor:65535,sunIntensity:.8},{name:"MARS PRIME",fog:1705984,ground:13382400,terrainType:"MOUNTAINS",sunColor:16737792,sunIntensity:1.2},{name:"VERIDIA",fog:2565,ground:43588,terrainType:"HILLS",sunColor:65416,sunIntensity:.7},{name:"NEON VOID",fog:655386,ground:11141290,terrainType:"GORGES",sunColor:16711935,sunIntensity:.6},{name:"FROST REACH",fog:526864,ground:11184810,terrainType:"HILLS",sunColor:13421823,sunIntensity:.9}],gm=["NEO","ALPHA","CYBER","VOID","AERO","TERRA","XENON"],vm=["PRIME","IV","VII","MINUS","CORP","OS","ALPHA"],DT=()=>{const t=gm[Math.floor(Math.random()*gm.length)],e=vm[Math.floor(Math.random()*vm.length)];return`${t} ${e}`},Pe={...UT,cameraOffset:new U(0,5,-15),cameraLookAtOffset:new U(0,2,10),chunkSize:200,chunkRes:64,renderDist:2,minSpeed:40,maxSpeed:250,cruiseSpeed:80,accelRate:.5,decelRate:.3,gravitySpeedImpact:.8},b0=Math.sqrt(3),IT=.5*(b0-1),Za=(3-b0)/6,_m=t=>Math.floor(t)|0,xm=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function NT(t=Math.random){const e=OT(t),r=new Float64Array(e).map(n=>xm[n%12*2]),i=new Float64Array(e).map(n=>xm[n%12*2+1]);return function(n,a){let s=0,o=0,l=0;const u=(n+a)*IT,c=_m(n+u),p=_m(a+u),d=(c+p)*Za,m=c-d,_=p-d,x=n-m,g=a-_;let h,v;x>g?(h=1,v=0):(h=0,v=1);const f=x-h+Za,y=g-v+Za,b=x-1+2*Za,w=g-1+2*Za,T=c&255,C=p&255;let M=.5-x*x-g*g;if(M>=0){const V=T+e[C],I=r[V],F=i[V];M*=M,s=M*M*(I*x+F*g)}let S=.5-f*f-y*y;if(S>=0){const V=T+h+e[C+v],I=r[V],F=i[V];S*=S,o=S*S*(I*f+F*y)}let z=.5-b*b-w*w;if(z>=0){const V=T+1+e[C+1],I=r[V],F=i[V];z*=z,l=z*z*(I*b+F*w)}return 70*(s+o+l)}}function OT(t){const e=new Uint8Array(512);for(let r=0;r<512/2;r++)e[r]=r;for(let r=0;r<512/2-1;r++){const i=r+~~(t()*(256-r)),n=e[r];e[r]=e[i],e[i]=n}for(let r=256;r<512;r++)e[r]=e[r-256];return e}const ym={FLAT:{freq:.002,amp:15,power:1,octaves:2,ridged:!1},HILLS:{freq:.004,amp:45,power:1.5,octaves:3,ridged:!1},MOUNTAINS:{freq:.006,amp:110,power:2.2,octaves:4,ridged:!0},GORGES:{freq:.005,amp:130,power:.6,octaves:3,ridged:!1}};class FT{constructor(e,r,i){Ie(this,"noise2D",NT()),Ie(this,"terrainChunks",new Map),Ie(this,"terrainMaterial"),Ie(this,"obstacles",[]),Ie(this,"fuelCells",[]),Ie(this,"currentBiomeIndex",0),Ie(this,"nextBiomeIndex",0),Ie(this,"biomeOffset",Math.floor(Math.random()*Ur.length)),Ie(this,"biomeTransition",1),Ie(this,"fog"),Ie(this,"sun"),Ie(this,"onBiomeChange"),this.fog=r,this.sun=i,this.currentBiomeIndex=0,this.nextBiomeIndex=0;const n=Ur[this.biomeOffset%Ur.length];this.fog.color.set(n.fog),this.sun.color.set(n.sunColor),this.sun.intensity=n.sunIntensity;const a=new we().setHSL(Math.random(),.7,.5);this.terrainMaterial=new x0({color:a,flatShading:!0,roughness:.8,metalness:.2})}getNoise(e,r,i,n,a){let s=0,o=1,l=i,u=0;for(let c=0;c<n;c++){let p=this.noise2D(e*l,r*l);a?(p=1-Math.abs(p),p=p*p):p=(p+1)/2,s+=p*o,u+=o,o*=.5,l*=2.1}return s/u}getHeight(e,r){const i=Math.sqrt(e*e+r*r),n=Math.floor(i/Pe.biomeDist)+this.biomeOffset,a=n+1,s=i%Pe.biomeDist/Pe.biomeDist,o=Ur[n%Ur.length],l=Ur[a%Ur.length],u=ym[o.terrainType],c=ym[l.terrainType],p=this.getNoise(e,r,u.freq,u.octaves,u.ridged),d=this.getNoise(e,r,c.freq,c.octaves,c.ridged);let m=p,_=d;o.terrainType,m=Math.pow(m,u.power),l.terrainType,_=Math.pow(_,c.power);const x=Mn.lerp(m,_,s),g=Mn.lerp(u.amp,c.amp,s),h=-45;return x*g+h}createChunk(e,r,i){const n=new Kr,a=Pe.chunkRes,s=Pe.chunkSize,o=new Kl(s,s,a,a);o.rotateX(-Math.PI/2);const l=o.attributes.position;for(let m=0;m<=a;m++)for(let _=0;_<=a;_++){const x=(_/a-.5)*s+e*s,g=(m/a-.5)*s+r*s,h=m*(a+1)+_;l.setY(h,this.getHeight(x,g))}o.computeVertexNormals();const u=new Ye(o,this.terrainMaterial);n.add(u);for(let m=0;m<Pe.asteroidCount;m++){const _=(Math.random()-.5)*Pe.chunkSize,x=(Math.random()-.5)*Pe.chunkSize,g=10+Math.random()*40,h=new Sd(2+Math.random()*5,0),v=new Ye(h,new da({color:4473924,flatShading:!0}));v.position.set(_,g,x),n.add(v),this.obstacles.push(v)}const c=Math.abs(r*Pe.chunkSize),p=Math.max(.2,1-c/1e4),d=Math.floor(Pe.fuelCanCount*p);for(let m=0;m<d;m++){const _=(Math.random()-.5)*Pe.chunkSize,x=(Math.random()-.5)*Pe.chunkSize,g=5+Math.random()*25,h=new Kr;h.add(new Ye(new Gs(1.2,16,16),new da({color:65535,emissive:43690,transparent:!0,opacity:.9}))),h.add(new Ye(new Gs(2.5,16,16),new Js({color:65535,transparent:!0,opacity:.2}))),h.position.set(_,g,x),n.add(h),this.fuelCells.push(h)}return n.position.set(e*Pe.chunkSize,-50,r*Pe.chunkSize),i.add(n),n}update(e,r,i){const n=Math.floor((e.x+Pe.chunkSize/2)/Pe.chunkSize),a=Math.floor((e.z+Pe.chunkSize/2)/Pe.chunkSize);for(let s=n-Pe.renderDist;s<=n+Pe.renderDist;s++)for(let o=a-Pe.renderDist;o<=a+Pe.renderDist;o++){const l=`${s},${o}`;this.terrainChunks.has(l)||this.terrainChunks.set(l,this.createChunk(s,o,r))}for(const[s,o]of this.terrainChunks){const[l,u]=s.split(",").map(Number);(Math.abs(l-n)>Pe.renderDist||Math.abs(u-a)>Pe.renderDist)&&(o.traverse(c=>{(c instanceof Ye||c instanceof Kr)&&(this.obstacles=this.obstacles.filter(p=>p!==c),this.fuelCells=this.fuelCells.filter(p=>p!==c))}),r.remove(o),this.terrainChunks.delete(s))}this.updateBiomes(i)}updateBiomes(e){var r;const i=Math.floor(e/Pe.biomeDist);if(i!==this.nextBiomeIndex){this.nextBiomeIndex=i,this.biomeTransition=0,(r=this.onBiomeChange)==null||r.call(this,DT());const n=new we().setHSL(Math.random(),.7,.5);this.terrainMaterial.color.copy(n)}if(this.biomeTransition<1){this.biomeTransition+=.005;const n=Ur[(this.currentBiomeIndex+this.biomeOffset)%Ur.length],a=Ur[(this.nextBiomeIndex+this.biomeOffset)%Ur.length];this.fog.color.lerpColors(new we(n.fog),new we(a.fog),this.biomeTransition),this.sun.color.lerpColors(new we(n.sunColor),new we(a.sunColor),this.biomeTransition),this.sun.intensity=Mn.lerp(n.sunIntensity,a.sunIntensity,this.biomeTransition),this.biomeTransition>=1&&(this.currentBiomeIndex=this.nextBiomeIndex)}}getSpeedMultiplier(){return 1+this.nextBiomeIndex*(Pe.speedIncrementPerBiome/Pe.baseForwardSpeed)}}class zT{constructor(e){Ie(this,"group"),Ie(this,"currentSpeed",Pe.cruiseSpeed),Ie(this,"glowMat"),Ie(this,"keys",{}),this.glowMat=new da({color:65535,emissive:65535,emissiveIntensity:2,flatShading:!0}),this.group=this.createShip(e.skin),this.setupInputs()}setupInputs(){window.addEventListener("keydown",e=>this.keys[e.key]=!0),window.addEventListener("keyup",e=>this.keys[e.key]=!1)}createShip(e){const r=new Kr,i=new we(e),n=new da({color:i,flatShading:!0}),a=new da({color:2236962,flatShading:!0}),s=new Ye(new Ui(.3,.8,2,6),n);s.rotateX(Math.PI/2),s.position.z=1.5,r.add(s);const o=new Ye(new Ui(.8,1,3,6),n);o.rotateX(Math.PI/2),o.position.z=-1,r.add(o);const l=new Ye(new Ui(1,.6,1.5,6),n);l.rotateX(Math.PI/2),l.position.z=-3,r.add(l);const u=new Ye(new Md(.08,1.2,6),a);u.rotateX(Math.PI/2),u.position.z=3,r.add(u);const c=new m0;c.moveTo(0,0),c.lineTo(4.5,-1),c.lineTo(4.5,.5),c.lineTo(.5,2.5),c.closePath();const p=new bd(c,{depth:.15,bevelEnabled:!1});p.rotateX(Math.PI/2);const d=new Ye(p,n);d.position.set(-.7,-.1,-1),r.add(d);const m=new Ye(p,n);m.scale.x=-1,m.position.set(.7,-.1,-1),r.add(m);const _=new Yi(.1,1,1.5),x=new Ye(_,n);x.position.set(-5.2,.4,-1.8),x.rotation.z=-.3,r.add(x);const g=new Ye(_,n);g.position.set(5.2,.4,-1.8),g.rotation.z=.3,r.add(g);const h=new Yi(.1,1.5,1.8),v=new Ye(h,n);v.position.set(-.6,1,-3.2),v.rotation.z=-Math.PI/4,r.add(v);const f=new Ye(h,n);f.position.set(.6,1,-3.2),f.rotation.z=Math.PI/4,r.add(f);const y=new Ui(.5,.6,2.2,8);y.rotateX(Math.PI/2);const b=new Ye(y,a);b.position.set(-1.1,-.4,-2),r.add(b);const w=new Ye(y,a);w.position.set(1.1,-.4,-2),r.add(w);const T=new Ui(.35,.45,.3,8);T.rotateX(Math.PI/2);const C=new Ye(T,this.glowMat);C.position.set(-1.1,-.4,-3.2),r.add(C);const M=new Ye(T,this.glowMat);M.position.set(1.1,-.4,-3.2),r.add(M);const S=new Ye(new Gs(.55,8,8),new da({color:65535,transparent:!0,opacity:.5}));S.position.set(0,.6,.8),S.scale.set(.8,.6,2.2),r.add(S);const z=new Yi(.05,.7,2.4),V=new Ye(z,a);return V.position.set(0,.65,.8),V.rotation.x=-.1,r.add(V),r}update(e){const r=this.keys.w||this.keys.ArrowUp?-1:this.keys.s||this.keys.ArrowDown?1:0,i=this.keys.a||this.keys.ArrowLeft?1:this.keys.d||this.keys.ArrowRight?-1:0,n=this.keys.q?1:this.keys.e?-1:0,a=this.keys.w||this.keys.ArrowUp?8:2;this.glowMat.emissiveIntensity=Mn.lerp(this.glowMat.emissiveIntensity,a,.1);const s=new U(0,0,1).applyQuaternion(this.group.quaternion),o=s.y>.1,l=s.y<-.1,u=this.keys.w||this.keys.ArrowUp?Pe.accelRate*1.5:0;l?this.currentSpeed+=Pe.accelRate+Math.abs(s.y)*Pe.gravitySpeedImpact:o?this.currentSpeed-=Pe.decelRate+s.y*Pe.gravitySpeedImpact-u:(this.currentSpeed+=(Pe.cruiseSpeed-this.currentSpeed)*.01,this.currentSpeed+=u),this.currentSpeed=Mn.clamp(this.currentSpeed,Pe.minSpeed,Pe.maxSpeed);const c=1-Mn.smoothstep(this.currentSpeed,Pe.cruiseSpeed,Pe.maxSpeed)*.5,p=.04*c,d=.065*c,m=.02*c,_=.025*c,x=.008*c;this.group.rotateX(r*p+x),this.group.rotateZ(i*d);const g=i*_;this.group.rotateY(n*m+g),this.group.position.add(s.multiplyScalar(this.currentSpeed*.01)),this.group.position.y-=Pe.gravity*.4}}class kT{constructor(e,r){Ie(this,"scene"),Ie(this,"camera"),Ie(this,"renderer"),Ie(this,"composer"),Ie(this,"terrain"),Ie(this,"ship"),Ie(this,"stars"),Ie(this,"spaceObjects",new Kr),Ie(this,"ambientLight",null),Ie(this,"sun"),Ie(this,"dayNightTime",Math.random()),Ie(this,"particles"),Ie(this,"particlePositions"),Ie(this,"particleActive",[]),Ie(this,"upgrades"),Ie(this,"maxHealth"),Ie(this,"fuelDrainRate"),Ie(this,"health"),Ie(this,"fuel",Pe.maxFuel),Ie(this,"points",0),Ie(this,"isGameOver",!1),Ie(this,"isCrashing",!1),Ie(this,"crashReason",""),Ie(this,"crashTimer",0),Ie(this,"shakeTimer",0),Ie(this,"lastDist",0),Ie(this,"altWarning",""),Ie(this,"altGameOverTimer",0),Ie(this,"onBiomeChange"),Ie(this,"onUpdateStats"),Ie(this,"onGameOver"),this.upgrades=r,this.maxHealth=Pe.maxHealth+this.upgrades.maxHealth*20,this.fuelDrainRate=Pe.fuelDrainRate*(1-this.upgrades.fuelEfficiency*.1),this.health=this.maxHealth,this.scene=new Ew,this.camera=new Sr(75,window.innerWidth/window.innerHeight,.1,3e3),this.renderer=new c0({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),e.appendChild(this.renderer.domElement);const i=new gs(8,.0015);this.scene.fog=i,this.renderer.setClearColor(2),this.sun=new aT(16777215,1.5),this.sun.position.set(200,50,100),this.sun.castShadow=!0,this.scene.add(this.sun),this.terrain=new FT(this.scene,i,this.sun),this.terrain.onBiomeChange=l=>{var u;return(u=this.onBiomeChange)==null?void 0:u.call(this,l)},this.ship=new zT(this.upgrades),this.scene.add(this.ship.group),this.stars=this.createStars(),this.scene.add(this.stars),this.createSpaceObjects(),this.scene.add(this.spaceObjects);const n=200,a=new Jt;this.particlePositions=new Float32Array(n*3);for(let l=0;l<n;l++)this.particlePositions[l*3]=0,this.particlePositions[l*3+1]=-1e3,this.particlePositions[l*3+2]=0,this.particleActive.push(!1);a.setAttribute("position",new Gr(this.particlePositions,3)),this.particles=new am(a,new dh({color:65535,size:.4,transparent:!0,opacity:.8,blending:wl})),this.scene.add(this.particles),this.setupLighting(),this.composer=new hT(this.renderer);const s=new dT(this.scene,this.camera);this.composer.addPass(s);const o=new Ua(new ne(window.innerWidth,window.innerHeight),.8,.3,.8);this.composer.addPass(o),window.addEventListener("resize",this.onResize.bind(this))}createStars(){const e=new Kr,r=3e3+Math.floor(Math.random()*5e3),i=Array.from({length:6},()=>({theta:Math.random()*Math.PI*2,phi:Math.acos(2*Math.random()-1),spread:.3+Math.random()*.5}));return[{size:1.2,color:16777215,ratio:.6},{size:2.2,color:15658734,ratio:.3},{size:3.8,color:16448250,ratio:.1}].forEach(n=>{const a=new Jt,s=[],o=Math.floor(r*n.ratio);for(let u=0;u<o;u++){let c,p;if(Math.random()<.45){const g=i[Math.floor(Math.random()*i.length)];c=g.theta+(Math.random()-.5)*g.spread,p=g.phi+(Math.random()-.5)*g.spread}else c=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1);const d=850+Math.random()*350,m=d*Math.sin(p)*Math.cos(c),_=d*Math.sin(p)*Math.sin(c),x=d*Math.cos(p);_>-40&&s.push(m,_,x)}a.setAttribute("position",new mt(s,3));const l=new dh({color:n.color,size:n.size,transparent:!0,opacity:.9,sizeAttenuation:!0});e.add(new am(a,l))}),e}createSpaceObjects(){const e=2+Math.floor(Math.random()*3);for(let r=0;r<e;r++){const i=1200+Math.random()*500,n=Math.random()*Math.PI*2,a=200+Math.random()*600,s=40+Math.random()*100,o=new Ed(s,1),l=new we().setHSL(Math.random(),.7,.7),u=new x0({color:l,flatShading:!0,emissive:l,emissiveIntensity:.4}),c=new Ye(o,u);c.position.set(Math.cos(n)*i,a,Math.sin(n)*i),c.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),c.userData.rotSpeed={x:(Math.random()-.5)*.002,y:(Math.random()-.5)*.002,z:(Math.random()-.5)*.002},this.spaceObjects.add(c)}}setupLighting(){this.ambientLight=new sT(16777215,.4),this.scene.add(this.ambientLight)}triggerFuelEffect(e){let r=0;for(let i=0;i<this.particleActive.length&&r<50;i++)if(!this.particleActive[i]){this.particleActive[i]=!0;const n=Math.random()*Math.PI*2,a=5+Math.random()*5;this.particlePositions[i*3]=e.x+Math.cos(n)*a,this.particlePositions[i*3+1]=e.y+(Math.random()-.5)*5,this.particlePositions[i*3+2]=e.z+Math.sin(n)*a,r++}}updateParticles(){const e=this.particles.geometry.attributes.position,r=this.ship.group.position;for(let i=0;i<this.particleActive.length;i++)if(this.particleActive[i]){const n=e.getX(i),a=e.getY(i),s=e.getZ(i);e.setX(i,n+(r.x-n)*.15),e.setY(i,a+(r.y-a)*.15),e.setZ(i,s+(r.z-s)*.15),Math.abs(r.x-n)<.5&&Math.abs(r.y-a)<.5&&Math.abs(r.z-s)<.5&&(this.particleActive[i]=!1,e.setY(i,-1e3))}e.needsUpdate=!0}checkCollisions(){const e=new An().setFromObject(this.ship.group),r=this.terrain.getHeight(this.ship.group.position.x,this.ship.group.position.z)-50;this.ship.group.position.y<r+1&&this.triggerDeath("CRASHED INTO TERRAIN");for(const n of this.terrain.obstacles)e.intersectsBox(new An().setFromObject(n))&&(this.health-=20,this.shakeTimer=.5,n.position.add(new U(0,0,50)),this.health<=0&&this.triggerDeath("HULL INTEGRITY CRITICAL"));const i=new U;for(const n of this.terrain.fuelCells)n.getWorldPosition(i),this.ship.group.position.distanceTo(i)<6&&(this.fuel=Math.min(Pe.maxFuel,this.fuel+Pe.fuelReplenish),this.points+=500,this.triggerFuelEffect(i),n.visible=!1)}triggerDeath(e){this.isGameOver||this.isCrashing||(this.isCrashing=!0,this.crashReason=e,this.crashTimer=.5,this.shakeTimer=1,this.ship.group.traverse(r=>{r instanceof Ye&&(r.material=new Js({color:0}))}))}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)}animate(){var e,r;if(this.isGameOver){this.composer.render();return}if(Pe.day_night_cycle){this.dayNightTime=(this.dayNightTime+Pe.dayNightSpeed)%1;const v=this.dayNightTime*Math.PI*2,f=1e3;this.sun.position.set(Math.cos(v)*f,Math.sin(v)*f,200);const y=Math.sin(v),b=Mn.clamp(y*2,0,1);this.ambientLight.intensity=.1+b*.4,this.sun.intensity=Math.max(.1,b*1.5);const w=new we(2),T=new we(1705984),C=new we(662067);let M;y>.1?M=new we().copy(T).lerp(C,(y-.1)*2):y>-.1?M=new we().copy(w).lerp(T,(y+.1)*5):M=new we().copy(w),this.renderer.setClearColor(M);const S=this.scene.fog instanceof gs?this.scene.fog.color:new we(8),z=new we(5),V=new we().copy(z).lerp(S,.2+b*.8);this.scene.fog instanceof gs&&this.scene.fog.color.copy(V);const I=1-b*.9;this.stars.children.forEach(F=>{const G=F.material;G.opacity=I})}this.isCrashing&&(this.crashTimer-=.016,this.shakeTimer=Math.max(this.shakeTimer,.8),this.camera.rotation.z+=.2,this.ship.group.position.y-=.8,this.crashTimer<=0&&(this.isGameOver=!0,(e=this.onGameOver)==null||e.call(this,this.crashReason)));const i=this.ship.group.position.length(),n=Math.sqrt(this.ship.group.position.x**2+this.ship.group.position.z**2),a=i-this.lastDist;this.lastDist=i;const s=.1+Math.floor(n/Pe.biomeDist)*.1;this.points+=a*s;const o=this.ship.group.position.y+50,l=new U(0,0,10).applyQuaternion(this.ship.group.quaternion),u=this.ship.group.position.clone().add(l),c=this.terrain.getHeight(this.ship.group.position.x,this.ship.group.position.z)-50,p=this.terrain.getHeight(u.x,u.z)-50;let d=this.fuelDrainRate;this.altWarning="";const m=this.ship.group.position.y<c+15,_=this.ship.group.position.y<p+15;if(m||_?(this.altWarning="PULL UP!",this.shakeTimer=Math.max(this.shakeTimer,.4)):o>=150?(d*=10,this.altGameOverTimer+=.016,this.altWarning=`PULL BACK IMMEDIATELY! ${Math.max(0,3-this.altGameOverTimer).toFixed(1)}s`,this.altGameOverTimer>=3&&this.triggerDeath("LOST IN UPPER ATMOSPHERE")):o>=100?(d*=4,this.altWarning="WARNING: HIGH ALTITUDE - FUEL LEAKING",this.altGameOverTimer=0):this.altGameOverTimer=0,!this.isCrashing){this.fuel-=d,this.fuel<=0&&this.triggerDeath("FUEL EXHAUSTED");const v=this.terrain.getSpeedMultiplier();this.ship.update(v)}const x=Pe.cameraOffset.clone().applyQuaternion(this.ship.group.quaternion).add(this.ship.group.position);this.shakeTimer>0&&(x.x+=(Math.random()-.5)*5,x.y+=(Math.random()-.5)*5,x.z+=(Math.random()-.5)*5,this.shakeTimer-=.016),this.camera.position.lerp(x,Pe.cameraLerp);const g=this.terrain.getHeight(this.camera.position.x,this.camera.position.z)-50;this.camera.position.y<g+2&&(this.camera.position.y=g+2);const h=new U(0,1,0).applyQuaternion(this.ship.group.quaternion);this.camera.up.lerp(h,Pe.cameraLerp),this.camera.lookAt(Pe.cameraLookAtOffset.clone().applyQuaternion(this.ship.group.quaternion).add(this.ship.group.position)),this.terrain.fuelCells.forEach(v=>{v.rotation.y+=.03,v.position.y+=Math.sin(Date.now()*.003)*.05}),this.terrain.update(this.ship.group.position,this.scene,n),this.checkCollisions(),this.updateParticles(),this.stars.position.copy(this.camera.position),this.spaceObjects.position.copy(this.camera.position),this.spaceObjects.children.forEach(v=>{v instanceof Ye&&v.userData.rotSpeed&&(v.rotation.x+=v.userData.rotSpeed.x,v.rotation.y+=v.userData.rotSpeed.y,v.rotation.z+=v.userData.rotSpeed.z)}),(r=this.onUpdateStats)==null||r.call(this,{health:Math.round(this.health/this.maxHealth*100),fuel:this.fuel,points:Math.floor(this.points),speed:Math.round(this.ship.currentSpeed*3.6),alt:Math.round(o),dist:Math.round(i),warning:this.altWarning,isCrashing:this.isCrashing}),this.composer.render()}}const Mm="flight_sim_users",uc="flight_sim_current_user",lr={getUsers:()=>{const t=localStorage.getItem(Mm);return t?JSON.parse(t):{}},saveUser:t=>{const e=lr.getUsers();e[t.username]=t,localStorage.setItem(Mm,JSON.stringify(e))},getCurrentUser:()=>{const t=localStorage.getItem(uc);return t&&lr.getUsers()[t]||null},setCurrentUser:t=>{t?localStorage.setItem(uc,t):localStorage.removeItem(uc)},login:t=>{const e=lr.getUsers();if(e[t])return lr.setCurrentUser(t),e[t];{const r={username:t,totalPoints:0,upgrades:{fuelEfficiency:0,maxHealth:0,skin:"#888888"}};return lr.saveUser(r),lr.setCurrentUser(t),r}},logout:()=>{lr.setCurrentUser(null)}},BT=[{name:"Classic Grey",color:"#888888"},{name:"Neon Blue",color:"#00ffff"},{name:"Crimson Fury",color:"#ff0000"},{name:"Emerald Wind",color:"#00ff88"},{name:"Gold Leaf",color:"#ffcc00"}],cc=[0,5e3,15e3,3e4,6e4,1e5],HT=()=>{const t=_r.useRef(null),e=_r.useRef(null),[r,i]=_r.useState(lr.getCurrentUser()),[n,a]=_r.useState(""),[s,o]=_r.useState("menu"),[l,u]=_r.useState({health:100,fuel:100,points:0,speed:0,alt:0,dist:0,warning:"",isCrashing:!1}),[c,p]=_r.useState({name:"",visible:!1}),[d,m]=_r.useState(""),_=f=>{if(f.preventDefault(),!n.trim())return;const y=lr.login(n.trim());i(y),o("menu")},x=()=>{lr.logout(),i(null),o("menu")},g=()=>{r&&o("playing")},h=f=>{if(!r)return;const y=r.upgrades[f];if(y>=5)return;const b=cc[y+1];if(r.totalPoints>=b){const w={...r,totalPoints:r.totalPoints-b,upgrades:{...r.upgrades,[f]:y+1}};i(w),lr.saveUser(w)}},v=f=>{if(!r)return;const y={...r,upgrades:{...r.upgrades,skin:f}};i(y),lr.saveUser(y)};return _r.useEffect(()=>{if(s!=="playing"||!t.current||!r)return;const f=new kT(t.current,r.upgrades);e.current=f,f.onBiomeChange=w=>{p({name:w,visible:!0}),setTimeout(()=>p(T=>({...T,visible:!1})),3e3)},f.onUpdateStats=w=>{u(w)},f.onGameOver=w=>{if(m(w),o("gameOver"),r){const T=f.points,C={...r,totalPoints:r.totalPoints+T};i(C),lr.saveUser(C)}};let y;const b=()=>{f.animate(),y=requestAnimationFrame(b)};return b(),()=>{cancelAnimationFrame(y),t.current&&(t.current.innerHTML="")}},[s]),r?ge.jsxs("div",{style:{width:"100vw",height:"100vh",position:"relative",overflow:"hidden",backgroundColor:"#000",fontFamily:"monospace"},children:[ge.jsx("div",{ref:t,style:{width:"100%",height:"100%"}}),s==="menu"&&ge.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#fff",zIndex:100},children:[ge.jsxs("h1",{style:{fontSize:"4em",textShadow:"0 0 20px #0ff"},children:["WELCOME, ",r.username]}),ge.jsxs("p",{style:{fontSize:"1.5em",color:"#0ff"},children:["TOTAL CREDITS: ",r.totalPoints.toLocaleString()]}),ge.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"40px"},children:[ge.jsx("button",{onClick:g,style:Qa,children:"START MISSION"}),ge.jsx("button",{onClick:()=>o("shop"),style:Qa,children:"HANGAR (SHOP)"}),ge.jsx("button",{onClick:x,style:{...Qa,borderColor:"#f00",color:"#f00"},children:"LOGOUT"})]})]}),s==="shop"&&ge.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 5, 5, 0.95)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#fff",zIndex:100,overflowY:"auto",padding:"40px"},children:[ge.jsx("h1",{style:{fontSize:"3em",color:"#0ff",marginBottom:"10px"},children:"SHIP HANGAR"}),ge.jsxs("p",{style:{fontSize:"1.5em",color:"#ffcc00"},children:["AVAILABLE CREDITS: ",r.totalPoints.toLocaleString()]}),ge.jsxs("div",{style:{display:"flex",gap:"40px",marginTop:"30px",flexWrap:"wrap",justifyContent:"center"},children:[ge.jsxs("div",{style:hc,children:[ge.jsx("h3",{children:"FUEL EFFICIENCY"}),ge.jsxs("p",{children:["Lvl ",r.upgrades.fuelEfficiency," / 5"]}),r.upgrades.fuelEfficiency<5?ge.jsxs("button",{onClick:()=>h("fuelEfficiency"),style:Sm,children:["UPGRADE (",cc[r.upgrades.fuelEfficiency+1].toLocaleString(),")"]}):ge.jsx("p",{style:{color:"#0f0"},children:"MAXED"})]}),ge.jsxs("div",{style:hc,children:[ge.jsx("h3",{children:"HULL REINFORCEMENT"}),ge.jsxs("p",{children:["Lvl ",r.upgrades.maxHealth," / 5"]}),r.upgrades.maxHealth<5?ge.jsxs("button",{onClick:()=>h("maxHealth"),style:Sm,children:["UPGRADE (",cc[r.upgrades.maxHealth+1].toLocaleString(),")"]}):ge.jsx("p",{style:{color:"#0f0"},children:"MAXED"})]}),ge.jsxs("div",{style:{...hc,width:"400px"},children:[ge.jsx("h3",{children:"SHIP PAINT JOB"}),ge.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"center",marginTop:"10px"},children:BT.map(f=>ge.jsx("div",{onClick:()=>v(f.color),style:{width:"60px",height:"60px",backgroundColor:f.color,border:r.upgrades.skin===f.color?"4px solid #fff":"2px solid #555",cursor:"pointer",borderRadius:"5px"},title:f.name},f.color))})]})]}),ge.jsx("button",{onClick:()=>o("menu"),style:{...Qa,marginTop:"50px"},children:"BACK TO COMMAND"})]}),s==="playing"&&ge.jsxs(ge.Fragment,{children:[ge.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",right:"20px",display:"flex",justifyContent:"space-between",alignItems:"flex-start",color:"#0ff",textShadow:"0 0 5px #0ff",pointerEvents:"none",userSelect:"none",zIndex:10},children:[ge.jsxs("div",{children:[ge.jsxs("div",{style:{marginBottom:"15px"},children:[ge.jsx("div",{style:{fontSize:"0.8em",color:"#888"},children:"HULL INTEGRITY"}),ge.jsx("div",{style:{width:"200px",height:"10px",background:"#002222",border:"1px solid #0ff",marginTop:"4px"},children:ge.jsx("div",{style:{width:`${l.health}%`,height:"100%",background:l.health<30?"#f00":"#0ff",transition:"width 0.3s"}})})]}),ge.jsxs("div",{children:[ge.jsx("div",{style:{fontSize:"0.8em",color:"#888"},children:"FUEL RESERVE"}),ge.jsx("div",{style:{width:"200px",height:"10px",background:"#002222",border:"1px solid #ffcc00",marginTop:"4px"},children:ge.jsx("div",{style:{width:`${l.fuel}%`,height:"100%",background:"#ffcc00",transition:"width 0.1s"}})})]})]}),ge.jsxs("div",{style:{textAlign:"center"},children:[ge.jsxs("div",{style:{fontSize:"1.2em",fontWeight:"bold"},children:["PILOT: ",r.username]}),ge.jsx("div",{style:{fontSize:"0.7em",color:"#888"},children:"STATUS: MISSION ACTIVE"})]}),ge.jsxs("div",{style:{textAlign:"right"},children:[ge.jsxs("div",{style:{fontSize:"1.5em"},children:[l.points.toLocaleString()," PTS"]}),ge.jsxs("div",{style:{marginTop:"10px"},children:["SPD: ",l.speed," km/h"]}),ge.jsxs("div",{children:["ALT: ",l.alt," m"]}),ge.jsxs("div",{children:["DST: ",l.dist," m"]})]})]}),ge.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"rgba(255, 255, 255, 0.6)",fontSize:"2em",fontWeight:"lighter",pointerEvents:"none",userSelect:"none",zIndex:5,fontFamily:"sans-serif"},children:"+"}),ge.jsxs("div",{style:{position:"absolute",top:"40%",left:"50%",transform:`translate(-50%, ${c.visible?"-60%":"-50%"})`,color:"#fff",fontSize:"2.5em",fontWeight:"bold",textAlign:"center",textShadow:"0 0 20px #0ff",opacity:c.visible?1:0,transition:"opacity 1s, transform 2s",pointerEvents:"none",letterSpacing:"4px"},children:["APPROACHING ZONE",ge.jsx("br",{}),ge.jsx("span",{style:{fontSize:"1.5em",color:"#0ff"},children:c.name})]}),(l.isCrashing||s==="gameOver")&&ge.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 0, 0, 0.3)",zIndex:30,animation:"crashFlash 0.15s infinite alternate",pointerEvents:"none"},children:ge.jsx("style",{children:`
                    @keyframes crashFlash {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                `})}),l.warning&&ge.jsxs("div",{style:{position:"absolute",top:"20%",left:"50%",transform:"translate(-50%, -50%)",color:"#f00",fontSize:"2em",fontWeight:"bold",textAlign:"center",textShadow:"0 0 10px #f00",animation:"blink 0.5s infinite",zIndex:20},children:[l.warning,ge.jsx("style",{children:`
                    @keyframes blink {
                        0% { opacity: 1; }
                        50% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                `})]})]}),s==="gameOver"&&ge.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(20, 0, 0, 0.8)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#fff",zIndex:100,backdropFilter:"blur(8px)"},children:[ge.jsx("h1",{style:{fontSize:"4em",textShadow:"0 0 20px #f00",marginBottom:"0"},children:"MISSION FAILED"}),ge.jsx("p",{style:{color:"#f00",fontSize:"1.2em",letterSpacing:"2px",marginBottom:"40px"},children:d}),ge.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[ge.jsx("div",{style:{fontSize:"2em",color:"#0ff"},children:l.points.toLocaleString()}),ge.jsx("div",{style:{fontSize:"0.8em",color:"#888"},children:"UNITS RECOVERED"})]}),ge.jsx("button",{onClick:()=>o("menu"),style:Qa,children:"RETURN TO COMMAND"})]})]}):ge.jsxs("div",{style:{width:"100vw",height:"100vh",backgroundColor:"#050505",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#0ff",fontFamily:"monospace"},children:[ge.jsx("h1",{style:{fontSize:"3em",textShadow:"0 0 20px #0ff",marginBottom:"40px"},children:"NEO-FLIGHT SIM"}),ge.jsxs("form",{onSubmit:_,style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[ge.jsx("input",{type:"text",placeholder:"PILOT USERNAME",value:n,onChange:f=>a(f.target.value),style:{padding:"15px",background:"#001111",border:"2px solid #0ff",color:"#0ff",fontSize:"1.2em",outline:"none",textAlign:"center"}}),ge.jsx("button",{type:"submit",style:{padding:"15px",background:"#0ff",color:"#000",border:"none",fontWeight:"bold",fontSize:"1.2em",cursor:"pointer",boxShadow:"0 0 15px #0ff"},children:"INITIALIZE SESSION"})]})]})},Qa={padding:"15px 40px",fontSize:"1.2em",cursor:"pointer",backgroundColor:"transparent",border:"2px solid #0ff",color:"#0ff",fontWeight:"bold",boxShadow:"0 0 10px #0ff",transition:"all 0.2s",outline:"none"},hc={background:"#001a1a",border:"1px solid #0ff",padding:"25px",width:"250px",textAlign:"center",borderRadius:"10px"},Sm={marginTop:"15px",padding:"10px 20px",background:"#0ff",color:"#000",border:"none",fontWeight:"bold",cursor:"pointer",width:"100%"};dc.createRoot(document.getElementById("root")).render(ge.jsx(Y0.StrictMode,{children:ge.jsx(HT,{})}));
