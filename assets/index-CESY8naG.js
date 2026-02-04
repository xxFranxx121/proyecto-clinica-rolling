(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function o(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(d){if(d.ep)return;d.ep=!0;const h=o(d);fetch(d.href,h)}})();function qg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rs={exports:{}},Si={};var Sh;function Yg(){if(Sh)return Si;Sh=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function o(u,d,h){var p=null;if(h!==void 0&&(p=""+h),d.key!==void 0&&(p=""+d.key),"key"in d){h={};for(var b in d)b!=="key"&&(h[b]=d[b])}else h=d;return d=h.ref,{$$typeof:n,type:u,key:p,ref:d!==void 0?d:null,props:h}}return Si.Fragment=c,Si.jsx=o,Si.jsxs=o,Si}var jh;function Gg(){return jh||(jh=1,rs.exports=Yg()),rs.exports}var s=Gg(),cs={exports:{}},le={};var zh;function Vg(){if(zh)return le;zh=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),R=Symbol.iterator;function O(z){return z===null||typeof z!="object"?null:(z=R&&z[R]||z["@@iterator"],typeof z=="function"?z:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,X={};function Q(z,H,k){this.props=z,this.context=H,this.refs=X,this.updater=k||q}Q.prototype.isReactComponent={},Q.prototype.setState=function(z,H){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,H,"setState")},Q.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function V(){}V.prototype=Q.prototype;function L(z,H,k){this.props=z,this.context=H,this.refs=X,this.updater=k||q}var W=L.prototype=new V;W.constructor=L,G(W,Q.prototype),W.isPureReactComponent=!0;var P=Array.isArray;function Y(){}var D={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function re(z,H,k){var J=k.ref;return{$$typeof:n,type:z,key:H,ref:J!==void 0?J:null,props:k}}function se(z,H){return re(z.type,H,z.props)}function Be(z){return typeof z=="object"&&z!==null&&z.$$typeof===n}function Re(z){var H={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(k){return H[k]})}var gt=/\/+/g;function ut(z,H){return typeof z=="object"&&z!==null&&z.key!=null?Re(""+z.key):H.toString(36)}function yt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(Y,Y):(z.status="pending",z.then(function(H){z.status==="pending"&&(z.status="fulfilled",z.value=H)},function(H){z.status==="pending"&&(z.status="rejected",z.reason=H)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function U(z,H,k,J,ne){var ce=typeof z;(ce==="undefined"||ce==="boolean")&&(z=null);var ye=!1;if(z===null)ye=!0;else switch(ce){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(z.$$typeof){case n:case c:ye=!0;break;case E:return ye=z._init,U(ye(z._payload),H,k,J,ne)}}if(ye)return ne=ne(z),ye=J===""?"."+ut(z,0):J,P(ne)?(k="",ye!=null&&(k=ye.replace(gt,"$&/")+"/"),U(ne,H,k,"",function(ea){return ea})):ne!=null&&(Be(ne)&&(ne=se(ne,k+(ne.key==null||z&&z.key===ne.key?"":(""+ne.key).replace(gt,"$&/")+"/")+ye)),H.push(ne)),1;ye=0;var Ve=J===""?".":J+":";if(P(z))for(var Te=0;Te<z.length;Te++)J=z[Te],ce=Ve+ut(J,Te),ye+=U(J,H,k,ce,ne);else if(Te=O(z),typeof Te=="function")for(z=Te.call(z),Te=0;!(J=z.next()).done;)J=J.value,ce=Ve+ut(J,Te++),ye+=U(J,H,k,ce,ne);else if(ce==="object"){if(typeof z.then=="function")return U(yt(z),H,k,J,ne);throw H=String(z),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ye}function Z(z,H,k){if(z==null)return z;var J=[],ne=0;return U(z,J,"","",function(ce){return H.call(k,ce,ne++)}),J}function te(z){if(z._status===-1){var H=z._result;H=H(),H.then(function(k){(z._status===0||z._status===-1)&&(z._status=1,z._result=k)},function(k){(z._status===0||z._status===-1)&&(z._status=2,z._result=k)}),z._status===-1&&(z._status=0,z._result=H)}if(z._status===1)return z._result.default;throw z._result}var fe=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},xe={map:Z,forEach:function(z,H,k){Z(z,function(){H.apply(this,arguments)},k)},count:function(z){var H=0;return Z(z,function(){H++}),H},toArray:function(z){return Z(z,function(H){return H})||[]},only:function(z){if(!Be(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return le.Activity=j,le.Children=xe,le.Component=Q,le.Fragment=o,le.Profiler=d,le.PureComponent=L,le.StrictMode=u,le.Suspense=y,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,le.__COMPILER_RUNTIME={__proto__:null,c:function(z){return D.H.useMemoCache(z)}},le.cache=function(z){return function(){return z.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(z,H,k){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var J=G({},z.props),ne=z.key;if(H!=null)for(ce in H.key!==void 0&&(ne=""+H.key),H)!K.call(H,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&H.ref===void 0||(J[ce]=H[ce]);var ce=arguments.length-2;if(ce===1)J.children=k;else if(1<ce){for(var ye=Array(ce),Ve=0;Ve<ce;Ve++)ye[Ve]=arguments[Ve+2];J.children=ye}return re(z.type,ne,J)},le.createContext=function(z){return z={$$typeof:p,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:h,_context:z},z},le.createElement=function(z,H,k){var J,ne={},ce=null;if(H!=null)for(J in H.key!==void 0&&(ce=""+H.key),H)K.call(H,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ne[J]=H[J]);var ye=arguments.length-2;if(ye===1)ne.children=k;else if(1<ye){for(var Ve=Array(ye),Te=0;Te<ye;Te++)Ve[Te]=arguments[Te+2];ne.children=Ve}if(z&&z.defaultProps)for(J in ye=z.defaultProps,ye)ne[J]===void 0&&(ne[J]=ye[J]);return re(z,ce,ne)},le.createRef=function(){return{current:null}},le.forwardRef=function(z){return{$$typeof:b,render:z}},le.isValidElement=Be,le.lazy=function(z){return{$$typeof:E,_payload:{_status:-1,_result:z},_init:te}},le.memo=function(z,H){return{$$typeof:g,type:z,compare:H===void 0?null:H}},le.startTransition=function(z){var H=D.T,k={};D.T=k;try{var J=z(),ne=D.S;ne!==null&&ne(k,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Y,fe)}catch(ce){fe(ce)}finally{H!==null&&k.types!==null&&(H.types=k.types),D.T=H}},le.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},le.use=function(z){return D.H.use(z)},le.useActionState=function(z,H,k){return D.H.useActionState(z,H,k)},le.useCallback=function(z,H){return D.H.useCallback(z,H)},le.useContext=function(z){return D.H.useContext(z)},le.useDebugValue=function(){},le.useDeferredValue=function(z,H){return D.H.useDeferredValue(z,H)},le.useEffect=function(z,H){return D.H.useEffect(z,H)},le.useEffectEvent=function(z){return D.H.useEffectEvent(z)},le.useId=function(){return D.H.useId()},le.useImperativeHandle=function(z,H,k){return D.H.useImperativeHandle(z,H,k)},le.useInsertionEffect=function(z,H){return D.H.useInsertionEffect(z,H)},le.useLayoutEffect=function(z,H){return D.H.useLayoutEffect(z,H)},le.useMemo=function(z,H){return D.H.useMemo(z,H)},le.useOptimistic=function(z,H){return D.H.useOptimistic(z,H)},le.useReducer=function(z,H,k){return D.H.useReducer(z,H,k)},le.useRef=function(z){return D.H.useRef(z)},le.useState=function(z){return D.H.useState(z)},le.useSyncExternalStore=function(z,H,k){return D.H.useSyncExternalStore(z,H,k)},le.useTransition=function(){return D.H.useTransition()},le.version="19.2.4",le}var Eh;function lf(){return Eh||(Eh=1,cs.exports=Vg()),cs.exports}var A=lf();const Ue=qg(A);var us={exports:{}},ji={},os={exports:{}},ss={};var Ch;function Xg(){return Ch||(Ch=1,(function(n){function c(U,Z){var te=U.length;U.push(Z);e:for(;0<te;){var fe=te-1>>>1,xe=U[fe];if(0<d(xe,Z))U[fe]=Z,U[te]=xe,te=fe;else break e}}function o(U){return U.length===0?null:U[0]}function u(U){if(U.length===0)return null;var Z=U[0],te=U.pop();if(te!==Z){U[0]=te;e:for(var fe=0,xe=U.length,z=xe>>>1;fe<z;){var H=2*(fe+1)-1,k=U[H],J=H+1,ne=U[J];if(0>d(k,te))J<xe&&0>d(ne,k)?(U[fe]=ne,U[J]=te,fe=J):(U[fe]=k,U[H]=te,fe=H);else if(J<xe&&0>d(ne,te))U[fe]=ne,U[J]=te,fe=J;else break e}}return Z}function d(U,Z){var te=U.sortIndex-Z.sortIndex;return te!==0?te:U.id-Z.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;n.unstable_now=function(){return h.now()}}else{var p=Date,b=p.now();n.unstable_now=function(){return p.now()-b}}var y=[],g=[],E=1,j=null,R=3,O=!1,q=!1,G=!1,X=!1,Q=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function W(U){for(var Z=o(g);Z!==null;){if(Z.callback===null)u(g);else if(Z.startTime<=U)u(g),Z.sortIndex=Z.expirationTime,c(y,Z);else break;Z=o(g)}}function P(U){if(G=!1,W(U),!q)if(o(y)!==null)q=!0,Y||(Y=!0,Re());else{var Z=o(g);Z!==null&&yt(P,Z.startTime-U)}}var Y=!1,D=-1,K=5,re=-1;function se(){return X?!0:!(n.unstable_now()-re<K)}function Be(){if(X=!1,Y){var U=n.unstable_now();re=U;var Z=!0;try{e:{q=!1,G&&(G=!1,V(D),D=-1),O=!0;var te=R;try{t:{for(W(U),j=o(y);j!==null&&!(j.expirationTime>U&&se());){var fe=j.callback;if(typeof fe=="function"){j.callback=null,R=j.priorityLevel;var xe=fe(j.expirationTime<=U);if(U=n.unstable_now(),typeof xe=="function"){j.callback=xe,W(U),Z=!0;break t}j===o(y)&&u(y),W(U)}else u(y);j=o(y)}if(j!==null)Z=!0;else{var z=o(g);z!==null&&yt(P,z.startTime-U),Z=!1}}break e}finally{j=null,R=te,O=!1}Z=void 0}}finally{Z?Re():Y=!1}}}var Re;if(typeof L=="function")Re=function(){L(Be)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,ut=gt.port2;gt.port1.onmessage=Be,Re=function(){ut.postMessage(null)}}else Re=function(){Q(Be,0)};function yt(U,Z){D=Q(function(){U(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_next=function(U){switch(R){case 1:case 2:case 3:var Z=3;break;default:Z=R}var te=R;R=Z;try{return U()}finally{R=te}},n.unstable_requestPaint=function(){X=!0},n.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var te=R;R=U;try{return Z()}finally{R=te}},n.unstable_scheduleCallback=function(U,Z,te){var fe=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?fe+te:fe):te=fe,U){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=te+xe,U={id:E++,callback:Z,priorityLevel:U,startTime:te,expirationTime:xe,sortIndex:-1},te>fe?(U.sortIndex=te,c(g,U),o(y)===null&&U===o(g)&&(G?(V(D),D=-1):G=!0,yt(P,te-fe))):(U.sortIndex=xe,c(y,U),q||O||(q=!0,Y||(Y=!0,Re()))),U},n.unstable_shouldYield=se,n.unstable_wrapCallback=function(U){var Z=R;return function(){var te=R;R=Z;try{return U.apply(this,arguments)}finally{R=te}}}})(ss)),ss}var Th;function Qg(){return Th||(Th=1,os.exports=Xg()),os.exports}var fs={exports:{}},it={};var Ah;function Zg(){if(Ah)return it;Ah=1;var n=lf();function c(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(c(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(y,g,E){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:j==null?null:""+j,children:y,containerInfo:g,implementation:E}}var p=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,it.createPortal=function(y,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(c(299));return h(y,g,null,E)},it.flushSync=function(y){var g=p.T,E=u.p;try{if(p.T=null,u.p=2,y)return y()}finally{p.T=g,u.p=E,u.d.f()}},it.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(y,g))},it.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},it.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var E=g.as,j=b(E,g.crossOrigin),R=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?u.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:j,integrity:R,fetchPriority:O}):E==="script"&&u.d.X(y,{crossOrigin:j,integrity:R,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},it.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=b(g.as,g.crossOrigin);u.d.M(y,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(y)},it.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,j=b(E,g.crossOrigin);u.d.L(y,E,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},it.preloadModule=function(y,g){if(typeof y=="string")if(g){var E=b(g.as,g.crossOrigin);u.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(y)},it.requestFormReset=function(y){u.d.r(y)},it.unstable_batchedUpdates=function(y,g){return y(g)},it.useFormState=function(y,g,E){return p.H.useFormState(y,g,E)},it.useFormStatus=function(){return p.H.useHostTransitionStatus()},it.version="19.2.4",it}var wh;function kg(){if(wh)return fs.exports;wh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),fs.exports=Zg(),fs.exports}var Oh;function Jg(){if(Oh)return ji;Oh=1;var n=Qg(),c=lf(),o=kg();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(u(188))}function g(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return y(i),e;if(r===l)return y(i),t;r=r.sibling}throw Error(u(188))}if(a.return!==l.return)a=i,l=r;else{for(var f=!1,m=i.child;m;){if(m===a){f=!0,a=i,l=r;break}if(m===l){f=!0,l=i,a=r;break}m=m.sibling}if(!f){for(m=r.child;m;){if(m===a){f=!0,a=r,l=i;break}if(m===l){f=!0,l=r,a=i;break}m=m.sibling}if(!f)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=E(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,R=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),L=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),Be=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=Be&&e[Be]||e["@@iterator"],typeof e=="function"?e:null)}var gt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case Q:return"Profiler";case X:return"StrictMode";case P:return"Suspense";case Y:return"SuspenseList";case re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case L:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return t=e.displayName||null,t!==null?t:ut(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return ut(e(t))}catch{}}return null}var yt=Array.isArray,U=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},fe=[],xe=-1;function z(e){return{current:e}}function H(e){0>xe||(e.current=fe[xe],fe[xe]=null,xe--)}function k(e,t){xe++,fe[xe]=e.current,e.current=t}var J=z(null),ne=z(null),ce=z(null),ye=z(null);function Ve(e,t){switch(k(ce,t),k(ne,e),k(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?X1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=X1(t),e=Q1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(J),k(J,e)}function Te(){H(J),H(ne),H(ce)}function ea(e){e.memoizedState!==null&&k(ye,e);var t=J.current,a=Q1(t,e.type);t!==a&&(k(ne,e),k(J,a))}function ta(e){ne.current===e&&(H(J),H(ne)),ye.current===e&&(H(ye),yi._currentValue=te)}var vt,Mn;function Dt(e){if(vt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);vt=t&&t[1]||"",Mn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+e+Mn}var aa=!1;function Vc(e,t){if(!e||aa)return"";aa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(_){var M=_}Reflect.construct(e,[],B)}else{try{B.call()}catch(_){M=_}e.call(B.prototype)}}else{try{throw Error()}catch(_){M=_}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(_){if(_&&M&&typeof _.stack=="string")return[_.stack,M.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),f=r[0],m=r[1];if(f&&m){var v=f.split(`
`),w=m.split(`
`);for(i=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;i<w.length&&!w[i].includes("DetermineComponentFrameRoot");)i++;if(l===v.length||i===w.length)for(l=v.length-1,i=w.length-1;1<=l&&0<=i&&v[l]!==w[i];)i--;for(;1<=l&&0<=i;l--,i--)if(v[l]!==w[i]){if(l!==1||i!==1)do if(l--,i--,0>i||v[l]!==w[i]){var N=`
`+v[l].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=l&&0<=i);break}}}finally{aa=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Dt(a):""}function yp(e,t){switch(e.tag){case 26:case 27:case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return e.child!==t&&t!==null?Dt("Suspense Fallback"):Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return Vc(e.type,!1);case 11:return Vc(e.type.render,!1);case 1:return Vc(e.type,!0);case 31:return Dt("Activity");default:return""}}function Sf(e){try{var t="",a=null;do t+=yp(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Xc=Object.prototype.hasOwnProperty,Qc=n.unstable_scheduleCallback,Zc=n.unstable_cancelCallback,vp=n.unstable_shouldYield,xp=n.unstable_requestPaint,xt=n.unstable_now,bp=n.unstable_getCurrentPriorityLevel,jf=n.unstable_ImmediatePriority,zf=n.unstable_UserBlockingPriority,Gi=n.unstable_NormalPriority,Sp=n.unstable_LowPriority,Ef=n.unstable_IdlePriority,jp=n.log,zp=n.unstable_setDisableYieldValue,Ol=null,bt=null;function Ra(e){if(typeof jp=="function"&&zp(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Ol,e)}catch{}}var St=Math.clz32?Math.clz32:Tp,Ep=Math.log,Cp=Math.LN2;function Tp(e){return e>>>=0,e===0?32:31-(Ep(e)/Cp|0)|0}var Vi=256,Xi=262144,Qi=4194304;function rn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~r,l!==0?i=rn(l):(f&=m,f!==0?i=rn(f):a||(a=m&~e,a!==0&&(i=rn(a))))):(m=l&~r,m!==0?i=rn(m):f!==0?i=rn(f):a||(a=l&~e,a!==0&&(i=rn(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function Ml(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ap(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cf(){var e=Qi;return Qi<<=1,(Qi&62914560)===0&&(Qi=4194304),e}function kc(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Rl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wp(e,t,a,l,i,r){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(a=f&~a;0<a;){var N=31-St(a),B=1<<N;m[N]=0,v[N]=-1;var M=w[N];if(M!==null)for(w[N]=null,N=0;N<M.length;N++){var _=M[N];_!==null&&(_.lane&=-536870913)}a&=~B}l!==0&&Tf(e,l,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function Tf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-St(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Af(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-St(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function wf(e,t){var a=t&-t;return a=(a&42)!==0?1:Jc(a),(a&(e.suspendedLanes|t))!==0?0:a}function Jc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Kc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Of(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:mh(e.type))}function Mf(e,t){var a=Z.p;try{return Z.p=e,t()}finally{Z.p=a}}var Da=Math.random().toString(36).slice(2),et="__reactFiber$"+Da,ot="__reactProps$"+Da,Rn="__reactContainer$"+Da,Fc="__reactEvents$"+Da,Op="__reactListeners$"+Da,Mp="__reactHandles$"+Da,Rf="__reactResources$"+Da,Dl="__reactMarker$"+Da;function Wc(e){delete e[et],delete e[ot],delete e[Fc],delete e[Op],delete e[Mp]}function Dn(e){var t=e[et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Rn]||a[et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=I1(e);e!==null;){if(a=e[et])return a;e=I1(e)}return t}e=a,a=e.parentNode}return null}function _n(e){if(e=e[et]||e[Rn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Nn(e){var t=e[Rf];return t||(t=e[Rf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Dl]=!0}var Df=new Set,_f={};function cn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(_f[e]=t,e=0;e<t.length;e++)Df.add(t[e])}var Rp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nf={},Uf={};function Dp(e){return Xc.call(Uf,e)?!0:Xc.call(Nf,e)?!1:Rp.test(e)?Uf[e]=!0:(Nf[e]=!0,!1)}function ki(e,t,a){if(Dp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ji(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ua(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function _t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _p(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ic(e){if(!e._valueTracker){var t=Hf(e)?"checked":"value";e._valueTracker=_p(e,t,""+e[t])}}function $f(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Hf(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Np=/[\n"\\]/g;function Nt(e){return e.replace(Np,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Pc(e,t,a,l,i,r,f,m){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_t(t)):e.value!==""+_t(t)&&(e.value=""+_t(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?eu(e,f,_t(t)):a!=null?eu(e,f,_t(a)):l!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+_t(m):e.removeAttribute("name")}function Bf(e,t,a,l,i,r,f,m){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Ic(e);return}a=a!=null?""+_t(a):"",t=t!=null?""+_t(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Ic(e)}function eu(e,t,a){t==="number"&&Ki(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Hn(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+_t(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lf(e,t,a){if(t!=null&&(t=""+_t(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+_t(a):""}function qf(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(yt(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=_t(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ic(e)}function $n(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Up=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yf(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Up.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Gf(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&Yf(e,i,l)}else for(var r in t)t.hasOwnProperty(r)&&Yf(e,r,t[r])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$p=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fi(e){return $p.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var au=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bn=null,Ln=null;function Vf(e){var t=_n(e);if(t&&(e=t.stateNode)){var a=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[ot]||null;if(!i)throw Error(u(90));Pc(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&$f(l)}break e;case"textarea":Lf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Hn(e,!!a.multiple,t,!1)}}}var lu=!1;function Xf(e,t,a){if(lu)return e(t,a);lu=!0;try{var l=e(t);return l}finally{if(lu=!1,(Bn!==null||Ln!==null)&&($r(),Bn&&(t=Bn,e=Ln,Ln=Bn=null,Vf(t),e)))for(t=0;t<e.length;t++)Vf(e[t])}}function Nl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[ot]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(sa)try{var Ul={};Object.defineProperty(Ul,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Ul,Ul),window.removeEventListener("test",Ul,Ul)}catch{iu=!1}var _a=null,ru=null,Wi=null;function Qf(){if(Wi)return Wi;var e,t=ru,a=t.length,l,i="value"in _a?_a.value:_a.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var f=a-e;for(l=1;l<=f&&t[a-l]===i[r-l];l++);return Wi=i.slice(e,1<l?1-l:void 0)}function Ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function Zf(){return!1}function st(e){function t(a,l,i,r,f){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(r):r[m]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Pi:Zf,this.isPropagationStopped=Zf,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},er=st(un),Hl=j({},un,{view:0,detail:0}),Bp=st(Hl),cu,uu,$l,tr=j({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$l&&($l&&e.type==="mousemove"?(cu=e.screenX-$l.screenX,uu=e.screenY-$l.screenY):uu=cu=0,$l=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),kf=st(tr),Lp=j({},tr,{dataTransfer:0}),qp=st(Lp),Yp=j({},Hl,{relatedTarget:0}),ou=st(Yp),Gp=j({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),Vp=st(Gp),Xp=j({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qp=st(Xp),Zp=j({},un,{data:0}),Jf=st(Zp),kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kp[e])?!!t[e]:!1}function su(){return Fp}var Wp=j({},Hl,{key:function(e){if(e.key){var t=kp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?Ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ip=st(Wp),Pp=j({},tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=st(Pp),e2=j({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),t2=st(e2),a2=j({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),n2=st(a2),l2=j({},tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),i2=st(l2),r2=j({},un,{newState:0,oldState:0}),c2=st(r2),u2=[9,13,27,32],fu=sa&&"CompositionEvent"in window,Bl=null;sa&&"documentMode"in document&&(Bl=document.documentMode);var o2=sa&&"TextEvent"in window&&!Bl,Ff=sa&&(!fu||Bl&&8<Bl&&11>=Bl),Wf=" ",If=!1;function Pf(e,t){switch(e){case"keyup":return u2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function s2(e,t){switch(e){case"compositionend":return ed(t);case"keypress":return t.which!==32?null:(If=!0,Wf);case"textInput":return e=t.data,e===Wf&&If?null:e;default:return null}}function f2(e,t){if(qn)return e==="compositionend"||!fu&&Pf(e,t)?(e=Qf(),Wi=ru=_a=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ff&&t.locale!=="ko"?null:t.data;default:return null}}var d2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!d2[e.type]:t==="textarea"}function ad(e,t,a,l){Bn?Ln?Ln.push(l):Ln=[l]:Bn=l,t=Xr(t,"onChange"),0<t.length&&(a=new er("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Ll=null,ql=null;function h2(e){B1(e,0)}function ar(e){var t=_l(e);if($f(t))return e}function nd(e,t){if(e==="change")return t}var ld=!1;if(sa){var du;if(sa){var hu="oninput"in document;if(!hu){var id=document.createElement("div");id.setAttribute("oninput","return;"),hu=typeof id.oninput=="function"}du=hu}else du=!1;ld=du&&(!document.documentMode||9<document.documentMode)}function rd(){Ll&&(Ll.detachEvent("onpropertychange",cd),ql=Ll=null)}function cd(e){if(e.propertyName==="value"&&ar(ql)){var t=[];ad(t,ql,e,nu(e)),Xf(h2,t)}}function m2(e,t,a){e==="focusin"?(rd(),Ll=t,ql=a,Ll.attachEvent("onpropertychange",cd)):e==="focusout"&&rd()}function p2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ar(ql)}function g2(e,t){if(e==="click")return ar(t)}function y2(e,t){if(e==="input"||e==="change")return ar(t)}function v2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:v2;function Yl(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!Xc.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function od(e,t){var a=ud(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ud(a)}}function sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ki(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ki(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var x2=sa&&"documentMode"in document&&11>=document.documentMode,Yn=null,pu=null,Gl=null,gu=!1;function dd(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||Yn==null||Yn!==Ki(l)||(l=Yn,"selectionStart"in l&&mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Gl&&Yl(Gl,l)||(Gl=l,l=Xr(pu,"onSelect"),0<l.length&&(t=new er("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Yn)))}function on(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Gn={animationend:on("Animation","AnimationEnd"),animationiteration:on("Animation","AnimationIteration"),animationstart:on("Animation","AnimationStart"),transitionrun:on("Transition","TransitionRun"),transitionstart:on("Transition","TransitionStart"),transitioncancel:on("Transition","TransitionCancel"),transitionend:on("Transition","TransitionEnd")},yu={},hd={};sa&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function sn(e){if(yu[e])return yu[e];if(!Gn[e])return e;var t=Gn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in hd)return yu[e]=t[a];return e}var md=sn("animationend"),pd=sn("animationiteration"),gd=sn("animationstart"),b2=sn("transitionrun"),S2=sn("transitionstart"),j2=sn("transitioncancel"),yd=sn("transitionend"),vd=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function Qt(e,t){vd.set(e,t),cn(t,[e])}var nr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],Vn=0,xu=0;function lr(){for(var e=Vn,t=xu=Vn=0;t<e;){var a=Ut[t];Ut[t++]=null;var l=Ut[t];Ut[t++]=null;var i=Ut[t];Ut[t++]=null;var r=Ut[t];if(Ut[t++]=null,l!==null&&i!==null){var f=l.pending;f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i}r!==0&&xd(a,i,r)}}function ir(e,t,a,l){Ut[Vn++]=e,Ut[Vn++]=t,Ut[Vn++]=a,Ut[Vn++]=l,xu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function bu(e,t,a,l){return ir(e,t,a,l),rr(e)}function fn(e,t){return ir(e,null,null,t),rr(e)}function xd(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-St(a),e=r.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),r):null}function rr(e){if(50<si)throw si=0,Mo=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xn={};function z2(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,a,l){return new z2(e,t,a,l)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fa(e,t){var a=e.alternate;return a===null?(a=zt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cr(e,t,a,l,i,r){var f=0;if(l=e,typeof e=="function")Su(e)&&(f=1);else if(typeof e=="string")f=wg(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case re:return e=zt(31,a,t,i),e.elementType=re,e.lanes=r,e;case G:return dn(a.children,i,r,t);case X:f=8,i|=24;break;case Q:return e=zt(12,a,t,i|2),e.elementType=Q,e.lanes=r,e;case P:return e=zt(13,a,t,i),e.elementType=P,e.lanes=r,e;case Y:return e=zt(19,a,t,i),e.elementType=Y,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:f=10;break e;case V:f=9;break e;case W:f=11;break e;case D:f=14;break e;case K:f=16,l=null;break e}f=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=zt(f,a,t,i),t.elementType=e,t.type=l,t.lanes=r,t}function dn(e,t,a,l){return e=zt(7,e,l,t),e.lanes=a,e}function ju(e,t,a){return e=zt(6,e,null,t),e.lanes=a,e}function Sd(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function zu(e,t,a){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var jd=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var a=jd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Sf(t)},jd.set(e,t),t)}return{value:e,source:t,stack:Sf(t)}}var Qn=[],Zn=0,ur=null,Vl=0,$t=[],Bt=0,Na=null,na=1,la="";function da(e,t){Qn[Zn++]=Vl,Qn[Zn++]=ur,ur=e,Vl=t}function zd(e,t,a){$t[Bt++]=na,$t[Bt++]=la,$t[Bt++]=Na,Na=e;var l=na;e=la;var i=32-St(l)-1;l&=~(1<<i),a+=1;var r=32-St(t)+i;if(30<r){var f=i-i%5;r=(l&(1<<f)-1).toString(32),l>>=f,i-=f,na=1<<32-St(t)+i|a<<i|l,la=r+e}else na=1<<r|a<<i|l,la=e}function Eu(e){e.return!==null&&(da(e,1),zd(e,1,0))}function Cu(e){for(;e===ur;)ur=Qn[--Zn],Qn[Zn]=null,Vl=Qn[--Zn],Qn[Zn]=null;for(;e===Na;)Na=$t[--Bt],$t[Bt]=null,la=$t[--Bt],$t[Bt]=null,na=$t[--Bt],$t[Bt]=null}function Ed(e,t){$t[Bt++]=na,$t[Bt++]=la,$t[Bt++]=Na,na=t.id,la=t.overflow,Na=e}var tt=null,De=null,ge=!1,Ua=null,Lt=!1,Tu=Error(u(519));function Ha(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xl(Ht(t,e)),Tu}function Cd(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[et]=e,t[ot]=l,a){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(a=0;a<di.length;a++)he(di[a],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),Bf(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),qf(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||G1(t.textContent,a)?(l.popover!=null&&(he("beforetoggle",t),he("toggle",t)),l.onScroll!=null&&he("scroll",t),l.onScrollEnd!=null&&he("scrollend",t),l.onClick!=null&&(t.onclick=oa),t=!0):t=!1,t||Ha(e,!0)}function Td(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:tt=tt.return}}function kn(e){if(e!==tt)return!1;if(!ge)return Td(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qo(e.type,e.memoizedProps)),a=!a),a&&De&&Ha(e),Td(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));De=W1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));De=W1(e)}else t===27?(t=De,Fa(e.type)?(e=Fo,Fo=null,De=e):De=t):De=tt?Yt(e.stateNode.nextSibling):null;return!0}function hn(){De=tt=null,ge=!1}function Au(){var e=Ua;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),Ua=null),e}function Xl(e){Ua===null?Ua=[e]:Ua.push(e)}var wu=z(null),mn=null,ha=null;function $a(e,t,a){k(wu,t._currentValue),t._currentValue=a}function ma(e){e._currentValue=wu.current,H(wu)}function Ou(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Mu(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;e:for(;r!==null;){var m=r;r=i;for(var v=0;v<t.length;v++)if(m.context===t[v]){r.lanes|=a,m=r.alternate,m!==null&&(m.lanes|=a),Ou(r.return,a,e),l||(f=null);break e}r=m.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(u(341));f.lanes|=a,r=f.alternate,r!==null&&(r.lanes|=a),Ou(f,a,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Jn(e,t,a,l){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var m=i.type;jt(i.pendingProps.value,f.value)||(e!==null?e.push(m):e=[m])}}else if(i===ye.current){if(f=i.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(yi):e=[yi])}i=i.return}e!==null&&Mu(t,e,a,l),t.flags|=262144}function or(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pn(e){mn=e,ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return Ad(mn,e)}function sr(e,t){return mn===null&&pn(e),Ad(e,t)}function Ad(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ha===null){if(e===null)throw Error(u(308));ha=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ha=ha.next=t;return a}var E2=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},C2=n.unstable_scheduleCallback,T2=n.unstable_NormalPriority,Xe={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new E2,data:new Map,refCount:0}}function Ql(e){e.refCount--,e.refCount===0&&C2(T2,function(){e.controller.abort()})}var Zl=null,Du=0,Kn=0,Fn=null;function A2(e,t){if(Zl===null){var a=Zl=[];Du=0,Kn=Ho(),Fn={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Du++,t.then(wd,wd),t}function wd(){if(--Du===0&&Zl!==null){Fn!==null&&(Fn.status="fulfilled");var e=Zl;Zl=null,Kn=0,Fn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function w2(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var Od=U.S;U.S=function(e,t){d1=xt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&A2(e,t),Od!==null&&Od(e,t)};var gn=z(null);function _u(){var e=gn.current;return e!==null?e:Me.pooledCache}function fr(e,t){t===null?k(gn,gn.current):k(gn,t.pool)}function Md(){var e=_u();return e===null?null:{parent:Xe._currentValue,pool:e}}var Wn=Error(u(460)),Nu=Error(u(474)),dr=Error(u(542)),hr={then:function(){}};function Rd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(oa,oa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nd(e),e;default:if(typeof t.status=="string")t.then(oa,oa);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nd(e),e}throw vn=t,Wn}}function yn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vn=a,Wn):a}}var vn=null;function _d(){if(vn===null)throw Error(u(459));var e=vn;return vn=null,e}function Nd(e){if(e===Wn||e===dr)throw Error(u(483))}var In=null,kl=0;function mr(e){var t=kl;return kl+=1,In===null&&(In=[]),Dd(In,e,t)}function Jl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function pr(e,t){throw t.$$typeof===R?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ud(e){function t(C,S){if(e){var T=C.deletions;T===null?(C.deletions=[S],C.flags|=16):T.push(S)}}function a(C,S){if(!e)return null;for(;S!==null;)t(C,S),S=S.sibling;return null}function l(C){for(var S=new Map;C!==null;)C.key!==null?S.set(C.key,C):S.set(C.index,C),C=C.sibling;return S}function i(C,S){return C=fa(C,S),C.index=0,C.sibling=null,C}function r(C,S,T){return C.index=T,e?(T=C.alternate,T!==null?(T=T.index,T<S?(C.flags|=67108866,S):T):(C.flags|=67108866,S)):(C.flags|=1048576,S)}function f(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function m(C,S,T,$){return S===null||S.tag!==6?(S=ju(T,C.mode,$),S.return=C,S):(S=i(S,T),S.return=C,S)}function v(C,S,T,$){var ee=T.type;return ee===G?N(C,S,T.props.children,$,T.key):S!==null&&(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===K&&yn(ee)===S.type)?(S=i(S,T.props),Jl(S,T),S.return=C,S):(S=cr(T.type,T.key,T.props,null,C.mode,$),Jl(S,T),S.return=C,S)}function w(C,S,T,$){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=zu(T,C.mode,$),S.return=C,S):(S=i(S,T.children||[]),S.return=C,S)}function N(C,S,T,$,ee){return S===null||S.tag!==7?(S=dn(T,C.mode,$,ee),S.return=C,S):(S=i(S,T),S.return=C,S)}function B(C,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ju(""+S,C.mode,T),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case O:return T=cr(S.type,S.key,S.props,null,C.mode,T),Jl(T,S),T.return=C,T;case q:return S=zu(S,C.mode,T),S.return=C,S;case K:return S=yn(S),B(C,S,T)}if(yt(S)||Re(S))return S=dn(S,C.mode,T,null),S.return=C,S;if(typeof S.then=="function")return B(C,mr(S),T);if(S.$$typeof===L)return B(C,sr(C,S),T);pr(C,S)}return null}function M(C,S,T,$){var ee=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return ee!==null?null:m(C,S,""+T,$);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case O:return T.key===ee?v(C,S,T,$):null;case q:return T.key===ee?w(C,S,T,$):null;case K:return T=yn(T),M(C,S,T,$)}if(yt(T)||Re(T))return ee!==null?null:N(C,S,T,$,null);if(typeof T.then=="function")return M(C,S,mr(T),$);if(T.$$typeof===L)return M(C,S,sr(C,T),$);pr(C,T)}return null}function _(C,S,T,$,ee){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return C=C.get(T)||null,m(S,C,""+$,ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case O:return C=C.get($.key===null?T:$.key)||null,v(S,C,$,ee);case q:return C=C.get($.key===null?T:$.key)||null,w(S,C,$,ee);case K:return $=yn($),_(C,S,T,$,ee)}if(yt($)||Re($))return C=C.get(T)||null,N(S,C,$,ee,null);if(typeof $.then=="function")return _(C,S,T,mr($),ee);if($.$$typeof===L)return _(C,S,T,sr(S,$),ee);pr(S,$)}return null}function F(C,S,T,$){for(var ee=null,be=null,I=S,ue=S=0,pe=null;I!==null&&ue<T.length;ue++){I.index>ue?(pe=I,I=null):pe=I.sibling;var Se=M(C,I,T[ue],$);if(Se===null){I===null&&(I=pe);break}e&&I&&Se.alternate===null&&t(C,I),S=r(Se,S,ue),be===null?ee=Se:be.sibling=Se,be=Se,I=pe}if(ue===T.length)return a(C,I),ge&&da(C,ue),ee;if(I===null){for(;ue<T.length;ue++)I=B(C,T[ue],$),I!==null&&(S=r(I,S,ue),be===null?ee=I:be.sibling=I,be=I);return ge&&da(C,ue),ee}for(I=l(I);ue<T.length;ue++)pe=_(I,C,ue,T[ue],$),pe!==null&&(e&&pe.alternate!==null&&I.delete(pe.key===null?ue:pe.key),S=r(pe,S,ue),be===null?ee=pe:be.sibling=pe,be=pe);return e&&I.forEach(function(tn){return t(C,tn)}),ge&&da(C,ue),ee}function ae(C,S,T,$){if(T==null)throw Error(u(151));for(var ee=null,be=null,I=S,ue=S=0,pe=null,Se=T.next();I!==null&&!Se.done;ue++,Se=T.next()){I.index>ue?(pe=I,I=null):pe=I.sibling;var tn=M(C,I,Se.value,$);if(tn===null){I===null&&(I=pe);break}e&&I&&tn.alternate===null&&t(C,I),S=r(tn,S,ue),be===null?ee=tn:be.sibling=tn,be=tn,I=pe}if(Se.done)return a(C,I),ge&&da(C,ue),ee;if(I===null){for(;!Se.done;ue++,Se=T.next())Se=B(C,Se.value,$),Se!==null&&(S=r(Se,S,ue),be===null?ee=Se:be.sibling=Se,be=Se);return ge&&da(C,ue),ee}for(I=l(I);!Se.done;ue++,Se=T.next())Se=_(I,C,ue,Se.value,$),Se!==null&&(e&&Se.alternate!==null&&I.delete(Se.key===null?ue:Se.key),S=r(Se,S,ue),be===null?ee=Se:be.sibling=Se,be=Se);return e&&I.forEach(function(Lg){return t(C,Lg)}),ge&&da(C,ue),ee}function Oe(C,S,T,$){if(typeof T=="object"&&T!==null&&T.type===G&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case O:e:{for(var ee=T.key;S!==null;){if(S.key===ee){if(ee=T.type,ee===G){if(S.tag===7){a(C,S.sibling),$=i(S,T.props.children),$.return=C,C=$;break e}}else if(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===K&&yn(ee)===S.type){a(C,S.sibling),$=i(S,T.props),Jl($,T),$.return=C,C=$;break e}a(C,S);break}else t(C,S);S=S.sibling}T.type===G?($=dn(T.props.children,C.mode,$,T.key),$.return=C,C=$):($=cr(T.type,T.key,T.props,null,C.mode,$),Jl($,T),$.return=C,C=$)}return f(C);case q:e:{for(ee=T.key;S!==null;){if(S.key===ee)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){a(C,S.sibling),$=i(S,T.children||[]),$.return=C,C=$;break e}else{a(C,S);break}else t(C,S);S=S.sibling}$=zu(T,C.mode,$),$.return=C,C=$}return f(C);case K:return T=yn(T),Oe(C,S,T,$)}if(yt(T))return F(C,S,T,$);if(Re(T)){if(ee=Re(T),typeof ee!="function")throw Error(u(150));return T=ee.call(T),ae(C,S,T,$)}if(typeof T.then=="function")return Oe(C,S,mr(T),$);if(T.$$typeof===L)return Oe(C,S,sr(C,T),$);pr(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,S!==null&&S.tag===6?(a(C,S.sibling),$=i(S,T),$.return=C,C=$):(a(C,S),$=ju(T,C.mode,$),$.return=C,C=$),f(C)):a(C,S)}return function(C,S,T,$){try{kl=0;var ee=Oe(C,S,T,$);return In=null,ee}catch(I){if(I===Wn||I===dr)throw I;var be=zt(29,I,null,C.mode);return be.lanes=$,be.return=C,be}}}var xn=Ud(!0),Hd=Ud(!1),Ba=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(je&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=rr(e),xd(e,null,a),t}return ir(e,l,t,a),rr(e)}function Kl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Af(e,a)}}function $u(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Bu=!1;function Fl(){if(Bu){var e=Fn;if(e!==null)throw e}}function Wl(e,t,a,l){Bu=!1;var i=e.updateQueue;Ba=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var v=m,w=v.next;v.next=null,f===null?r=w:f.next=w,f=v;var N=e.alternate;N!==null&&(N=N.updateQueue,m=N.lastBaseUpdate,m!==f&&(m===null?N.firstBaseUpdate=w:m.next=w,N.lastBaseUpdate=v))}if(r!==null){var B=i.baseState;f=0,N=w=v=null,m=r;do{var M=m.lane&-536870913,_=M!==m.lane;if(_?(me&M)===M:(l&M)===M){M!==0&&M===Kn&&(Bu=!0),N!==null&&(N=N.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var F=e,ae=m;M=t;var Oe=a;switch(ae.tag){case 1:if(F=ae.payload,typeof F=="function"){B=F.call(Oe,B,M);break e}B=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=ae.payload,M=typeof F=="function"?F.call(Oe,B,M):F,M==null)break e;B=j({},B,M);break e;case 2:Ba=!0}}M=m.callback,M!==null&&(e.flags|=64,_&&(e.flags|=8192),_=i.callbacks,_===null?i.callbacks=[M]:_.push(M))}else _={lane:M,tag:m.tag,payload:m.payload,callback:m.callback,next:null},N===null?(w=N=_,v=B):N=N.next=_,f|=M;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;_=m,m=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);N===null&&(v=B),i.baseState=v,i.firstBaseUpdate=w,i.lastBaseUpdate=N,r===null&&(i.shared.lanes=0),Qa|=f,e.lanes=f,e.memoizedState=B}}function $d(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Bd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$d(a[e],t)}var Pn=z(null),gr=z(0);function Ld(e,t){e=za,k(gr,e),k(Pn,t),za=e|t.baseLanes}function Lu(){k(gr,za),k(Pn,Pn.current)}function qu(){za=gr.current,H(Pn),H(gr)}var Et=z(null),qt=null;function Ya(e){var t=e.alternate;k(Ye,Ye.current&1),k(Et,e),qt===null&&(t===null||Pn.current!==null||t.memoizedState!==null)&&(qt=e)}function Yu(e){k(Ye,Ye.current),k(Et,e),qt===null&&(qt=e)}function qd(e){e.tag===22?(k(Ye,Ye.current),k(Et,e),qt===null&&(qt=e)):Ga()}function Ga(){k(Ye,Ye.current),k(Et,Et.current)}function Ct(e){H(Et),qt===e&&(qt=null),H(Ye)}var Ye=z(0);function yr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jo(a)||Ko(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pa=0,ie=null,Ae=null,Qe=null,vr=!1,el=!1,bn=!1,xr=0,Il=0,tl=null,O2=0;function Le(){throw Error(u(321))}function Gu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!jt(e[a],t[a]))return!1;return!0}function Vu(e,t,a,l,i,r){return pa=r,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?z0:lo,bn=!1,r=a(l,i),bn=!1,el&&(r=Gd(t,a,l,i)),Yd(e),r}function Yd(e){U.H=ti;var t=Ae!==null&&Ae.next!==null;if(pa=0,Qe=Ae=ie=null,vr=!1,Il=0,tl=null,t)throw Error(u(300));e===null||Ze||(e=e.dependencies,e!==null&&or(e)&&(Ze=!0))}function Gd(e,t,a,l){ie=e;var i=0;do{if(el&&(tl=null),Il=0,el=!1,25<=i)throw Error(u(301));if(i+=1,Qe=Ae=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}U.H=E0,r=t(a,l)}while(el);return r}function M2(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?Pl(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(ie.flags|=1024),t}function Xu(){var e=xr!==0;return xr=0,e}function Qu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Zu(e){if(vr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vr=!1}pa=0,Qe=Ae=ie=null,el=!1,Il=xr=0,tl=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ie.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ge(){if(Ae===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Qe===null?ie.memoizedState:Qe.next;if(t!==null)Qe=t,Ae=e;else{if(e===null)throw ie.alternate===null?Error(u(467)):Error(u(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Qe===null?ie.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function br(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(e){var t=Il;return Il+=1,tl===null&&(tl=[]),e=Dd(tl,e,t),t=ie,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?z0:lo),e}function Sr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pl(e);if(e.$$typeof===L)return at(e)}throw Error(u(438,String(e)))}function ku(e){var t=null,a=ie.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ie.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=br(),ie.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=se;return t.index++,a}function ga(e,t){return typeof t=="function"?t(e):t}function jr(e){var t=Ge();return Ju(t,Ae,e)}function Ju(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var i=e.baseQueue,r=l.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}t.baseQueue=i=r,l.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var m=f=null,v=null,w=t,N=!1;do{var B=w.lane&-536870913;if(B!==w.lane?(me&B)===B:(pa&B)===B){var M=w.revertLane;if(M===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),B===Kn&&(N=!0);else if((pa&M)===M){w=w.next,M===Kn&&(N=!0);continue}else B={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(m=v=B,f=r):v=v.next=B,ie.lanes|=M,Qa|=M;B=w.action,bn&&a(r,B),r=w.hasEagerState?w.eagerState:a(r,B)}else M={lane:B,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(m=v=M,f=r):v=v.next=M,ie.lanes|=B,Qa|=B;w=w.next}while(w!==null&&w!==t);if(v===null?f=r:v.next=m,!jt(r,e.memoizedState)&&(Ze=!0,N&&(a=Fn,a!==null)))throw a;e.memoizedState=r,e.baseState=f,e.baseQueue=v,l.lastRenderedState=r}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ku(e){var t=Ge(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do r=e(r,f.action),f=f.next;while(f!==i);jt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function Vd(e,t,a){var l=ie,i=Ge(),r=ge;if(r){if(a===void 0)throw Error(u(407));a=a()}else a=t();var f=!jt((Ae||i).memoizedState,a);if(f&&(i.memoizedState=a,Ze=!0),i=i.queue,Iu(Zd.bind(null,l,i,e),[e]),i.getSnapshot!==t||f||Qe!==null&&Qe.memoizedState.tag&1){if(l.flags|=2048,al(9,{destroy:void 0},Qd.bind(null,l,i,a,t),null),Me===null)throw Error(u(349));r||(pa&127)!==0||Xd(l,t,a)}return a}function Xd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ie.updateQueue,t===null?(t=br(),ie.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Qd(e,t,a,l){t.value=a,t.getSnapshot=l,kd(t)&&Jd(e)}function Zd(e,t,a){return a(function(){kd(t)&&Jd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!jt(e,a)}catch{return!0}}function Jd(e){var t=fn(e,2);t!==null&&pt(t,e,2)}function Fu(e){var t=ct();if(typeof e=="function"){var a=e;if(e=a(),bn){Ra(!0);try{a()}finally{Ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:e},t}function Kd(e,t,a,l){return e.baseState=a,Ju(e,Ae,typeof l=="function"?l:ga)}function R2(e,t,a,l,i){if(Cr(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};U.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,Fd(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Fd(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var r=U.T,f={};U.T=f;try{var m=a(i,l),v=U.S;v!==null&&v(f,m),Wd(e,t,m)}catch(w){Wu(e,t,w)}finally{r!==null&&f.types!==null&&(r.types=f.types),U.T=r}}else try{r=a(i,l),Wd(e,t,r)}catch(w){Wu(e,t,w)}}function Wd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Id(e,t,l)},function(l){return Wu(e,t,l)}):Id(e,t,a)}function Id(e,t,a){t.status="fulfilled",t.value=a,Pd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Fd(e,a)))}function Wu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Pd(t),t=t.next;while(t!==l)}e.action=null}function Pd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function e0(e,t){return t}function t0(e,t){if(ge){var a=Me.formState;if(a!==null){e:{var l=ie;if(ge){if(De){t:{for(var i=De,r=Lt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Yt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){De=Yt(i.nextSibling),l=i.data==="F!";break e}}Ha(l)}l=!1}l&&(t=a[0])}}return a=ct(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e0,lastRenderedState:t},a.queue=l,a=b0.bind(null,ie,l),l.dispatch=a,l=Fu(!1),r=no.bind(null,ie,!1,l.queue),l=ct(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=R2.bind(null,ie,i,r,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function a0(e){var t=Ge();return n0(t,Ae,e)}function n0(e,t,a){if(t=Ju(e,t,e0)[0],e=jr(ga)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Pl(t)}catch(f){throw f===Wn?dr:f}else l=t;t=Ge();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ie.flags|=2048,al(9,{destroy:void 0},D2.bind(null,i,a),null)),[l,r,e]}function D2(e,t){e.action=t}function l0(e){var t=Ge(),a=Ae;if(a!==null)return n0(t,a,e);Ge(),t=t.memoizedState,a=Ge();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function al(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ie.updateQueue,t===null&&(t=br(),ie.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function i0(){return Ge().memoizedState}function zr(e,t,a,l){var i=ct();ie.flags|=e,i.memoizedState=al(1|t,{destroy:void 0},a,l===void 0?null:l)}function Er(e,t,a,l){var i=Ge();l=l===void 0?null:l;var r=i.memoizedState.inst;Ae!==null&&l!==null&&Gu(l,Ae.memoizedState.deps)?i.memoizedState=al(t,r,a,l):(ie.flags|=e,i.memoizedState=al(1|t,r,a,l))}function r0(e,t){zr(8390656,8,e,t)}function Iu(e,t){Er(2048,8,e,t)}function _2(e){ie.flags|=4;var t=ie.updateQueue;if(t===null)t=br(),ie.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function c0(e){var t=Ge().memoizedState;return _2({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function u0(e,t){return Er(4,2,e,t)}function o0(e,t){return Er(4,4,e,t)}function s0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function f0(e,t,a){a=a!=null?a.concat([e]):null,Er(4,4,s0.bind(null,t,e),a)}function Pu(){}function d0(e,t){var a=Ge();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Gu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function h0(e,t){var a=Ge();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Gu(t,l[1]))return l[0];if(l=e(),bn){Ra(!0);try{e()}finally{Ra(!1)}}return a.memoizedState=[l,t],l}function eo(e,t,a){return a===void 0||(pa&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=m1(),ie.lanes|=e,Qa|=e,a)}function m0(e,t,a,l){return jt(a,t)?a:Pn.current!==null?(e=eo(e,a,l),jt(e,t)||(Ze=!0),e):(pa&42)===0||(pa&1073741824)!==0&&(me&261930)===0?(Ze=!0,e.memoizedState=a):(e=m1(),ie.lanes|=e,Qa|=e,t)}function p0(e,t,a,l,i){var r=Z.p;Z.p=r!==0&&8>r?r:8;var f=U.T,m={};U.T=m,no(e,!1,t,a);try{var v=i(),w=U.S;if(w!==null&&w(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var N=w2(v,l);ei(e,t,N,wt(e))}else ei(e,t,l,wt(e))}catch(B){ei(e,t,{then:function(){},status:"rejected",reason:B},wt())}finally{Z.p=r,f!==null&&m.types!==null&&(f.types=m.types),U.T=f}}function N2(){}function to(e,t,a,l){if(e.tag!==5)throw Error(u(476));var i=g0(e).queue;p0(e,i,t,te,a===null?N2:function(){return y0(e),a(l)})}function g0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:te},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function y0(e){var t=g0(e);t.next===null&&(t=e.alternate.memoizedState),ei(e,t.next.queue,{},wt())}function ao(){return at(yi)}function v0(){return Ge().memoizedState}function x0(){return Ge().memoizedState}function U2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=wt();e=La(a);var l=qa(t,e,a);l!==null&&(pt(l,t,a),Kl(l,t,a)),t={cache:Ru()},e.payload=t;return}t=t.return}}function H2(e,t,a){var l=wt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cr(e)?S0(t,a):(a=bu(e,t,a,l),a!==null&&(pt(a,e,l),j0(a,t,l)))}function b0(e,t,a){var l=wt();ei(e,t,a,l)}function ei(e,t,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cr(e))S0(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,m=r(f,a);if(i.hasEagerState=!0,i.eagerState=m,jt(m,f))return ir(e,t,i,0),Me===null&&lr(),!1}catch{}if(a=bu(e,t,i,l),a!==null)return pt(a,e,l),j0(a,t,l),!0}return!1}function no(e,t,a,l){if(l={lane:2,revertLane:Ho(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Cr(e)){if(t)throw Error(u(479))}else t=bu(e,a,l,2),t!==null&&pt(t,e,2)}function Cr(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function S0(e,t){el=vr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function j0(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Af(e,a)}}var ti={readContext:at,use:Sr,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};ti.useEffectEvent=Le;var z0={readContext:at,use:Sr,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:r0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,zr(4194308,4,s0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){zr(4,2,e,t)},useMemo:function(e,t){var a=ct();t=t===void 0?null:t;var l=e();if(bn){Ra(!0);try{e()}finally{Ra(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=ct();if(a!==void 0){var i=a(t);if(bn){Ra(!0);try{a(t)}finally{Ra(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=H2.bind(null,ie,e),[l.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Fu(e);var t=e.queue,a=b0.bind(null,ie,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Pu,useDeferredValue:function(e,t){var a=ct();return eo(a,e,t)},useTransition:function(){var e=Fu(!1);return e=p0.bind(null,ie,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ie,i=ct();if(ge){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Me===null)throw Error(u(349));(me&127)!==0||Xd(l,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,r0(Zd.bind(null,l,r,e),[e]),l.flags|=2048,al(9,{destroy:void 0},Qd.bind(null,l,r,a,t),null),a},useId:function(){var e=ct(),t=Me.identifierPrefix;if(ge){var a=la,l=na;a=(l&~(1<<32-St(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=xr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=O2++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ao,useFormState:t0,useActionState:t0,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=no.bind(null,ie,!0,a),a.dispatch=t,[e,t]},useMemoCache:ku,useCacheRefresh:function(){return ct().memoizedState=U2.bind(null,ie)},useEffectEvent:function(e){var t=ct(),a={impl:e};return t.memoizedState=a,function(){if((je&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},lo={readContext:at,use:Sr,useCallback:d0,useContext:at,useEffect:Iu,useImperativeHandle:f0,useInsertionEffect:u0,useLayoutEffect:o0,useMemo:h0,useReducer:jr,useRef:i0,useState:function(){return jr(ga)},useDebugValue:Pu,useDeferredValue:function(e,t){var a=Ge();return m0(a,Ae.memoizedState,e,t)},useTransition:function(){var e=jr(ga)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Vd,useId:v0,useHostTransitionStatus:ao,useFormState:a0,useActionState:a0,useOptimistic:function(e,t){var a=Ge();return Kd(a,Ae,e,t)},useMemoCache:ku,useCacheRefresh:x0};lo.useEffectEvent=c0;var E0={readContext:at,use:Sr,useCallback:d0,useContext:at,useEffect:Iu,useImperativeHandle:f0,useInsertionEffect:u0,useLayoutEffect:o0,useMemo:h0,useReducer:Ku,useRef:i0,useState:function(){return Ku(ga)},useDebugValue:Pu,useDeferredValue:function(e,t){var a=Ge();return Ae===null?eo(a,e,t):m0(a,Ae.memoizedState,e,t)},useTransition:function(){var e=Ku(ga)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Vd,useId:v0,useHostTransitionStatus:ao,useFormState:l0,useActionState:l0,useOptimistic:function(e,t){var a=Ge();return Ae!==null?Kd(a,Ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:x0};E0.useEffectEvent=c0;function io(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:j({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ro={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=wt(),i=La(l);i.payload=t,a!=null&&(i.callback=a),t=qa(e,i,l),t!==null&&(pt(t,e,l),Kl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=wt(),i=La(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=qa(e,i,l),t!==null&&(pt(t,e,l),Kl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=wt(),l=La(a);l.tag=2,t!=null&&(l.callback=t),t=qa(e,l,a),t!==null&&(pt(t,e,a),Kl(t,e,a))}};function C0(e,t,a,l,i,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,f):t.prototype&&t.prototype.isPureReactComponent?!Yl(a,l)||!Yl(i,r):!0}function T0(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function Sn(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=j({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function A0(e){nr(e)}function w0(e){console.error(e)}function O0(e){nr(e)}function Tr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function M0(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function co(e,t,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Tr(e,t)},a}function R0(e){return e=La(e),e.tag=3,e}function D0(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=l.value;e.payload=function(){return i(r)},e.callback=function(){M0(t,a,l)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){M0(t,a,l),typeof i!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function $2(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Jn(t,a,i,!0),a=Et.current,a!==null){switch(a.tag){case 31:case 13:return qt===null?Br():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===hr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),_o(e,l,i)),!1;case 22:return a.flags|=65536,l===hr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),_o(e,l,i)),!1}throw Error(u(435,a.tag))}return _o(e,l,i),Br(),!1}if(ge)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==Tu&&(e=Error(u(422),{cause:l}),Xl(Ht(e,a)))):(l!==Tu&&(t=Error(u(423),{cause:l}),Xl(Ht(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=Ht(l,a),i=co(e.stateNode,l,i),$u(e,i),qe!==4&&(qe=2)),!1;var r=Error(u(520),{cause:l});if(r=Ht(r,a),oi===null?oi=[r]:oi.push(r),qe!==4&&(qe=2),t===null)return!0;l=Ht(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=co(a.stateNode,l,e),$u(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Za===null||!Za.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=R0(i),D0(i,e,a,l),$u(a,i),!1}a=a.return}while(a!==null);return!1}var uo=Error(u(461)),Ze=!1;function nt(e,t,a,l){t.child=e===null?Hd(t,null,a,l):xn(t,e.child,a,l)}function _0(e,t,a,l,i){a=a.render;var r=t.ref;if("ref"in l){var f={};for(var m in l)m!=="ref"&&(f[m]=l[m])}else f=l;return pn(t),l=Vu(e,t,a,f,r,i),m=Xu(),e!==null&&!Ze?(Qu(e,t,i),ya(e,t,i)):(ge&&m&&Eu(t),t.flags|=1,nt(e,t,l,i),t.child)}function N0(e,t,a,l,i){if(e===null){var r=a.type;return typeof r=="function"&&!Su(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,U0(e,t,r,l,i)):(e=cr(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!yo(e,i)){var f=r.memoizedProps;if(a=a.compare,a=a!==null?a:Yl,a(f,l)&&e.ref===t.ref)return ya(e,t,i)}return t.flags|=1,e=fa(r,l),e.ref=t.ref,e.return=t,t.child=e}function U0(e,t,a,l,i){if(e!==null){var r=e.memoizedProps;if(Yl(r,l)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=l=r,yo(e,i))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,ya(e,t,i)}return oo(e,t,a,l,i)}function H0(e,t,a,l){var i=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~r}else l=0,t.child=null;return $0(e,t,r,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fr(t,r!==null?r.cachePool:null),r!==null?Ld(t,r):Lu(),qd(t);else return l=t.lanes=536870912,$0(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(fr(t,r.cachePool),Ld(t,r),Ga(),t.memoizedState=null):(e!==null&&fr(t,null),Lu(),Ga());return nt(e,t,i,a),t.child}function ai(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $0(e,t,a,l,i){var r=_u();return r=r===null?null:{parent:Xe._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&fr(t,null),Lu(),qd(t),e!==null&&Jn(e,t,l,!0),t.childLanes=i,null}function Ar(e,t){return t=Or({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function B0(e,t,a){return xn(t,e.child,null,a),e=Ar(t,t.pendingProps),e.flags|=2,Ct(t),t.memoizedState=null,e}function B2(e,t,a){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(l.mode==="hidden")return e=Ar(t,l),t.lanes=536870912,ai(null,e);if(Yu(t),(e=De)?(e=F1(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Na!==null?{id:na,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Sd(e),a.return=t,t.child=a,tt=t,De=null)):e=null,e===null)throw Ha(t);return t.lanes=536870912,null}return Ar(t,l)}var r=e.memoizedState;if(r!==null){var f=r.dehydrated;if(Yu(t),i)if(t.flags&256)t.flags&=-257,t=B0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ze||Jn(e,t,a,!1),i=(a&e.childLanes)!==0,Ze||i){if(l=Me,l!==null&&(f=wf(l,a),f!==0&&f!==r.retryLane))throw r.retryLane=f,fn(e,f),pt(l,e,f),uo;Br(),t=B0(e,t,a)}else e=r.treeContext,De=Yt(f.nextSibling),tt=t,ge=!0,Ua=null,Lt=!1,e!==null&&Ed(t,e),t=Ar(t,l),t.flags|=4096;return t}return e=fa(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function oo(e,t,a,l,i){return pn(t),a=Vu(e,t,a,l,void 0,i),l=Xu(),e!==null&&!Ze?(Qu(e,t,i),ya(e,t,i)):(ge&&l&&Eu(t),t.flags|=1,nt(e,t,a,i),t.child)}function L0(e,t,a,l,i,r){return pn(t),t.updateQueue=null,a=Gd(t,l,a,i),Yd(e),l=Xu(),e!==null&&!Ze?(Qu(e,t,r),ya(e,t,r)):(ge&&l&&Eu(t),t.flags|=1,nt(e,t,a,r),t.child)}function q0(e,t,a,l,i){if(pn(t),t.stateNode===null){var r=Xn,f=a.contextType;typeof f=="object"&&f!==null&&(r=at(f)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ro,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},Uu(t),f=a.contextType,r.context=typeof f=="object"&&f!==null?at(f):Xn,r.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(io(t,a,f,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&ro.enqueueReplaceState(r,r.state,null),Wl(t,l,r,i),Fl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var m=t.memoizedProps,v=Sn(a,m);r.props=v;var w=r.context,N=a.contextType;f=Xn,typeof N=="object"&&N!==null&&(f=at(N));var B=a.getDerivedStateFromProps;N=typeof B=="function"||typeof r.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,N||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(m||w!==f)&&T0(t,r,l,f),Ba=!1;var M=t.memoizedState;r.state=M,Wl(t,l,r,i),Fl(),w=t.memoizedState,m||M!==w||Ba?(typeof B=="function"&&(io(t,a,B,l),w=t.memoizedState),(v=Ba||C0(t,a,v,l,M,w,f))?(N||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),r.props=l,r.state=w,r.context=f,l=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,Hu(e,t),f=t.memoizedProps,N=Sn(a,f),r.props=N,B=t.pendingProps,M=r.context,w=a.contextType,v=Xn,typeof w=="object"&&w!==null&&(v=at(w)),m=a.getDerivedStateFromProps,(w=typeof m=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==B||M!==v)&&T0(t,r,l,v),Ba=!1,M=t.memoizedState,r.state=M,Wl(t,l,r,i),Fl();var _=t.memoizedState;f!==B||M!==_||Ba||e!==null&&e.dependencies!==null&&or(e.dependencies)?(typeof m=="function"&&(io(t,a,m,l),_=t.memoizedState),(N=Ba||C0(t,a,N,l,M,_,v)||e!==null&&e.dependencies!==null&&or(e.dependencies))?(w||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,_,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,_,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=_),r.props=l,r.state=_,r.context=v,l=N):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,wr(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=xn(t,e.child,null,i),t.child=xn(t,null,a,i)):nt(e,t,a,i),t.memoizedState=r.state,e=t.child):e=ya(e,t,i),e}function Y0(e,t,a,l){return hn(),t.flags|=256,nt(e,t,a,l),t.child}var so={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fo(e){return{baseLanes:e,cachePool:Md()}}function ho(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=At),e}function G0(e,t,a){var l=t.pendingProps,i=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?Ya(t):Ga(),(e=De)?(e=F1(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Na!==null?{id:na,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Sd(e),a.return=t,t.child=a,tt=t,De=null)):e=null,e===null)throw Ha(t);return Ko(e)?t.lanes=32:t.lanes=536870912,null}var m=l.children;return l=l.fallback,i?(Ga(),i=t.mode,m=Or({mode:"hidden",children:m},i),l=dn(l,i,a,null),m.return=t,l.return=t,m.sibling=l,t.child=m,l=t.child,l.memoizedState=fo(a),l.childLanes=ho(e,f,a),t.memoizedState=so,ai(null,l)):(Ya(t),mo(t,m))}var v=e.memoizedState;if(v!==null&&(m=v.dehydrated,m!==null)){if(r)t.flags&256?(Ya(t),t.flags&=-257,t=po(e,t,a)):t.memoizedState!==null?(Ga(),t.child=e.child,t.flags|=128,t=null):(Ga(),m=l.fallback,i=t.mode,l=Or({mode:"visible",children:l.children},i),m=dn(m,i,a,null),m.flags|=2,l.return=t,m.return=t,l.sibling=m,t.child=l,xn(t,e.child,null,a),l=t.child,l.memoizedState=fo(a),l.childLanes=ho(e,f,a),t.memoizedState=so,t=ai(null,l));else if(Ya(t),Ko(m)){if(f=m.nextSibling&&m.nextSibling.dataset,f)var w=f.dgst;f=w,l=Error(u(419)),l.stack="",l.digest=f,Xl({value:l,source:null,stack:null}),t=po(e,t,a)}else if(Ze||Jn(e,t,a,!1),f=(a&e.childLanes)!==0,Ze||f){if(f=Me,f!==null&&(l=wf(f,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,fn(e,l),pt(f,e,l),uo;Jo(m)||Br(),t=po(e,t,a)}else Jo(m)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,De=Yt(m.nextSibling),tt=t,ge=!0,Ua=null,Lt=!1,e!==null&&Ed(t,e),t=mo(t,l.children),t.flags|=4096);return t}return i?(Ga(),m=l.fallback,i=t.mode,v=e.child,w=v.sibling,l=fa(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,w!==null?m=fa(w,m):(m=dn(m,i,a,null),m.flags|=2),m.return=t,l.return=t,l.sibling=m,t.child=l,ai(null,l),l=t.child,m=e.child.memoizedState,m===null?m=fo(a):(i=m.cachePool,i!==null?(v=Xe._currentValue,i=i.parent!==v?{parent:v,pool:v}:i):i=Md(),m={baseLanes:m.baseLanes|a,cachePool:i}),l.memoizedState=m,l.childLanes=ho(e,f,a),t.memoizedState=so,ai(e.child,l)):(Ya(t),a=e.child,e=a.sibling,a=fa(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function mo(e,t){return t=Or({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Or(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function po(e,t,a){return xn(t,e.child,null,a),e=mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function V0(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ou(e.return,t,a)}function go(e,t,a,l,i,r){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:r}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=a,f.tailMode=i,f.treeForkCount=r)}function X0(e,t,a){var l=t.pendingProps,i=l.revealOrder,r=l.tail;l=l.children;var f=Ye.current,m=(f&2)!==0;if(m?(f=f&1|2,t.flags|=128):f&=1,k(Ye,f),nt(e,t,l,a),l=ge?Vl:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&V0(e,a,t);else if(e.tag===19)V0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&yr(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),go(t,!1,i,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}go(t,!0,a,null,r,l);break;case"together":go(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ya(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Jn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=fa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=fa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function yo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&or(e)))}function L2(e,t,a){switch(t.tag){case 3:Ve(t,t.stateNode.containerInfo),$a(t,Xe,e.memoizedState.cache),hn();break;case 27:case 5:ea(t);break;case 4:Ve(t,t.stateNode.containerInfo);break;case 10:$a(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Yu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?G0(e,t,a):(Ya(t),e=ya(e,t,a),e!==null?e.sibling:null);Ya(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Jn(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return X0(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(Ye,Ye.current),l)break;return null;case 22:return t.lanes=0,H0(e,t,a,t.pendingProps);case 24:$a(t,Xe,e.memoizedState.cache)}return ya(e,t,a)}function Q0(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!yo(e,a)&&(t.flags&128)===0)return Ze=!1,L2(e,t,a);Ze=(e.flags&131072)!==0}else Ze=!1,ge&&(t.flags&1048576)!==0&&zd(t,Vl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=yn(t.elementType),t.type=e,typeof e=="function")Su(e)?(l=Sn(e,l),t.tag=1,t=q0(null,t,e,l,a)):(t.tag=0,t=oo(null,t,e,l,a));else{if(e!=null){var i=e.$$typeof;if(i===W){t.tag=11,t=_0(null,t,e,l,a);break e}else if(i===D){t.tag=14,t=N0(null,t,e,l,a);break e}}throw t=ut(e)||e,Error(u(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=Sn(l,t.pendingProps),q0(e,t,l,i,a);case 3:e:{if(Ve(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var r=t.memoizedState;i=r.element,Hu(e,t),Wl(t,l,null,a);var f=t.memoizedState;if(l=f.cache,$a(t,Xe,l),l!==r.cache&&Mu(t,[Xe],a,!0),Fl(),l=f.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Y0(e,t,l,a);break e}else if(l!==i){i=Ht(Error(u(424)),t),Xl(i),t=Y0(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,De=Yt(e.firstChild),tt=t,ge=!0,Ua=null,Lt=!0,a=Hd(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hn(),l===i){t=ya(e,t,a);break e}nt(e,t,l,a)}t=t.child}return t;case 26:return wr(e,t),e===null?(a=ah(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,l=Qr(ce.current).createElement(a),l[et]=t,l[ot]=e,lt(l,a,e),We(l),t.stateNode=l):t.memoizedState=ah(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ea(t),e===null&&ge&&(l=t.stateNode=P1(t.type,t.pendingProps,ce.current),tt=t,Lt=!0,i=De,Fa(t.type)?(Fo=i,De=Yt(l.firstChild)):De=i),nt(e,t,t.pendingProps.children,a),wr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=l=De)&&(l=pg(l,t.type,t.pendingProps,Lt),l!==null?(t.stateNode=l,tt=t,De=Yt(l.firstChild),Lt=!1,i=!0):i=!1),i||Ha(t)),ea(t),i=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,l=r.children,Qo(i,r)?l=null:f!==null&&Qo(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=Vu(e,t,M2,null,null,a),yi._currentValue=i),wr(e,t),nt(e,t,l,a),t.child;case 6:return e===null&&ge&&((e=a=De)&&(a=gg(a,t.pendingProps,Lt),a!==null?(t.stateNode=a,tt=t,De=null,e=!0):e=!1),e||Ha(t)),null;case 13:return G0(e,t,a);case 4:return Ve(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=xn(t,null,l,a):nt(e,t,l,a),t.child;case 11:return _0(e,t,t.type,t.pendingProps,a);case 7:return nt(e,t,t.pendingProps,a),t.child;case 8:return nt(e,t,t.pendingProps.children,a),t.child;case 12:return nt(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,$a(t,t.type,l.value),nt(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,pn(t),i=at(i),l=l(i),t.flags|=1,nt(e,t,l,a),t.child;case 14:return N0(e,t,t.type,t.pendingProps,a);case 15:return U0(e,t,t.type,t.pendingProps,a);case 19:return X0(e,t,a);case 31:return B2(e,t,a);case 22:return H0(e,t,a,t.pendingProps);case 24:return pn(t),l=at(Xe),e===null?(i=_u(),i===null&&(i=Me,r=Ru(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:l,cache:i},Uu(t),$a(t,Xe,i)):((e.lanes&a)!==0&&(Hu(e,t),Wl(t,null,null,a),Fl()),i=e.memoizedState,r=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),$a(t,Xe,l)):(l=r.cache,$a(t,Xe,l),l!==i.cache&&Mu(t,[Xe],a,!0))),nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function va(e){e.flags|=4}function vo(e,t,a,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(v1())e.flags|=8192;else throw vn=hr,Nu}else e.flags&=-16777217}function Z0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ch(t))if(v1())e.flags|=8192;else throw vn=hr,Nu}function Mr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Cf():536870912,e.lanes|=t,rl|=t)}function ni(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function q2(e,t,a){var l=t.pendingProps;switch(Cu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ma(Xe),Te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(kn(t)?va(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Au())),_e(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(va(t),r!==null?(_e(t),Z0(t,r)):(_e(t),vo(t,i,null,l,a))):r?r!==e.memoizedState?(va(t),_e(t),Z0(t,r)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&va(t),_e(t),vo(t,i,e,l,a)),null;case 27:if(ta(t),a=ce.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&va(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return _e(t),null}e=J.current,kn(t)?Cd(t):(e=P1(i,l,a),t.stateNode=e,va(t))}return _e(t),null;case 5:if(ta(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&va(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return _e(t),null}if(r=J.current,kn(t))Cd(t);else{var f=Qr(ce.current);switch(r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?f.createElement(i,{is:l.is}):f.createElement(i)}}r[et]=t,r[ot]=l;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=r;e:switch(lt(r,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&va(t)}}return _e(t),vo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&va(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ce.current,kn(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=tt,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[et]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||G1(e.nodeValue,a)),e||Ha(t,!0)}else e=Qr(e).createTextNode(l),e[et]=t,t.stateNode=e}return _e(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=kn(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[et]=t}else hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else a=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ct(t),t):(Ct(t),null);if((t.flags&128)!==0)throw Error(u(558))}return _e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=kn(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[et]=t}else hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else i=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Ct(t),t):(Ct(t),null)}return Ct(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==i&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Mr(t,t.updateQueue),_e(t),null);case 4:return Te(),e===null&&qo(t.stateNode.containerInfo),_e(t),null;case 10:return ma(t.type),_e(t),null;case 19:if(H(Ye),l=t.memoizedState,l===null)return _e(t),null;if(i=(t.flags&128)!==0,r=l.rendering,r===null)if(i)ni(l,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=yr(e),r!==null){for(t.flags|=128,ni(l,!1),e=r.updateQueue,t.updateQueue=e,Mr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)bd(a,e),a=a.sibling;return k(Ye,Ye.current&1|2),ge&&da(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&xt()>Ur&&(t.flags|=128,i=!0,ni(l,!1),t.lanes=4194304)}else{if(!i)if(e=yr(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Mr(t,e),ni(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ge)return _e(t),null}else 2*xt()-l.renderingStartTime>Ur&&a!==536870912&&(t.flags|=128,i=!0,ni(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=xt(),e.sibling=null,a=Ye.current,k(Ye,i?a&1|2:a&1),ge&&da(t,l.treeForkCount),e):(_e(t),null);case 22:case 23:return Ct(t),qu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&Mr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&H(gn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ma(Xe),_e(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Y2(e,t){switch(Cu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ma(Xe),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ta(t),null;case 31:if(t.memoizedState!==null){if(Ct(t),t.alternate===null)throw Error(u(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ct(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Ye),null;case 4:return Te(),null;case 10:return ma(t.type),null;case 22:case 23:return Ct(t),qu(),e!==null&&H(gn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ma(Xe),null;case 25:return null;default:return null}}function k0(e,t){switch(Cu(t),t.tag){case 3:ma(Xe),Te();break;case 26:case 27:case 5:ta(t);break;case 4:Te();break;case 31:t.memoizedState!==null&&Ct(t);break;case 13:Ct(t);break;case 19:H(Ye);break;case 10:ma(t.type);break;case 22:case 23:Ct(t),qu(),e!==null&&H(gn);break;case 24:ma(Xe)}}function li(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var r=a.create,f=a.inst;l=r(),f.destroy=l}a=a.next}while(a!==i)}}catch(m){Ce(t,t.return,m)}}function Va(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var r=i.next;l=r;do{if((l.tag&e)===e){var f=l.inst,m=f.destroy;if(m!==void 0){f.destroy=void 0,i=t;var v=a,w=m;try{w()}catch(N){Ce(i,v,N)}}}l=l.next}while(l!==r)}}catch(N){Ce(t,t.return,N)}}function J0(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Bd(t,a)}catch(l){Ce(e,e.return,l)}}}function K0(e,t,a){a.props=Sn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ce(e,t,l)}}function ii(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){Ce(e,t,i)}}function ia(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){Ce(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ce(e,t,i)}else a.current=null}function F0(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){Ce(e,e.return,i)}}function xo(e,t,a){try{var l=e.stateNode;og(l,e.type,a,t),l[ot]=t}catch(i){Ce(e,e.return,i)}}function W0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fa(e.type)||e.tag===4}function bo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||W0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function So(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=oa));else if(l!==4&&(l===27&&Fa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(So(e,t,a),e=e.sibling;e!==null;)So(e,t,a),e=e.sibling}function Rr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Fa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Rr(e,t,a),e=e.sibling;e!==null;)Rr(e,t,a),e=e.sibling}function I0(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);lt(t,l,a),t[et]=e,t[ot]=a}catch(r){Ce(e,e.return,r)}}var xa=!1,ke=!1,jo=!1,P0=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function G2(e,t){if(e=e.containerInfo,Vo=Ir,e=fd(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var f=0,m=-1,v=-1,w=0,N=0,B=e,M=null;t:for(;;){for(var _;B!==a||i!==0&&B.nodeType!==3||(m=f+i),B!==r||l!==0&&B.nodeType!==3||(v=f+l),B.nodeType===3&&(f+=B.nodeValue.length),(_=B.firstChild)!==null;)M=B,B=_;for(;;){if(B===e)break t;if(M===a&&++w===i&&(m=f),M===r&&++N===l&&(v=f),(_=B.nextSibling)!==null)break;B=M,M=B.parentNode}B=_}a=m===-1||v===-1?null:{start:m,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xo={focusedElem:e,selectionRange:a},Ir=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var F=Sn(a.type,i);e=l.getSnapshotBeforeUpdate(F,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ce(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ko(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ko(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function e1(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(e,a),l&4&&li(5,a);break;case 1:if(Sa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){Ce(a,a.return,f)}else{var i=Sn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ce(a,a.return,f)}}l&64&&J0(a),l&512&&ii(a,a.return);break;case 3:if(Sa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Bd(e,t)}catch(f){Ce(a,a.return,f)}}break;case 27:t===null&&l&4&&I0(a);case 26:case 5:Sa(e,a),t===null&&l&4&&F0(a),l&512&&ii(a,a.return);break;case 12:Sa(e,a);break;case 31:Sa(e,a),l&4&&n1(e,a);break;case 13:Sa(e,a),l&4&&l1(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=W2.bind(null,a),yg(e,a))));break;case 22:if(l=a.memoizedState!==null||xa,!l){t=t!==null&&t.memoizedState!==null||ke,i=xa;var r=ke;xa=l,(ke=t)&&!r?ja(e,a,(a.subtreeFlags&8772)!==0):Sa(e,a),xa=i,ke=r}break;case 30:break;default:Sa(e,a)}}function t1(e){var t=e.alternate;t!==null&&(e.alternate=null,t1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,ft=!1;function ba(e,t,a){for(a=a.child;a!==null;)a1(e,t,a),a=a.sibling}function a1(e,t,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Ol,a)}catch{}switch(a.tag){case 26:ke||ia(a,t),ba(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||ia(a,t);var l=He,i=ft;Fa(a.type)&&(He=a.stateNode,ft=!1),ba(e,t,a),mi(a.stateNode),He=l,ft=i;break;case 5:ke||ia(a,t);case 6:if(l=He,i=ft,He=null,ba(e,t,a),He=l,ft=i,He!==null)if(ft)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(a.stateNode)}catch(r){Ce(a,t,r)}else try{He.removeChild(a.stateNode)}catch(r){Ce(a,t,r)}break;case 18:He!==null&&(ft?(e=He,J1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ml(e)):J1(He,a.stateNode));break;case 4:l=He,i=ft,He=a.stateNode.containerInfo,ft=!0,ba(e,t,a),He=l,ft=i;break;case 0:case 11:case 14:case 15:Va(2,a,t),ke||Va(4,a,t),ba(e,t,a);break;case 1:ke||(ia(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&K0(a,t,l)),ba(e,t,a);break;case 21:ba(e,t,a);break;case 22:ke=(l=ke)||a.memoizedState!==null,ba(e,t,a),ke=l;break;default:ba(e,t,a)}}function n1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ml(e)}catch(a){Ce(t,t.return,a)}}}function l1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(a){Ce(t,t.return,a)}}function V2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new P0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new P0),t;default:throw Error(u(435,e.tag))}}function Dr(e,t){var a=V2(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var i=I2.bind(null,e,l);l.then(i,i)}})}function dt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],r=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 27:if(Fa(m.type)){He=m.stateNode,ft=!1;break e}break;case 5:He=m.stateNode,ft=!1;break e;case 3:case 4:He=m.stateNode.containerInfo,ft=!0;break e}m=m.return}if(He===null)throw Error(u(160));a1(r,f,i),He=null,ft=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)i1(t,e),t=t.sibling}var Zt=null;function i1(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dt(t,e),ht(e),l&4&&(Va(3,e,e.return),li(3,e),Va(5,e,e.return));break;case 1:dt(t,e),ht(e),l&512&&(ke||a===null||ia(a,a.return)),l&64&&xa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Zt;if(dt(t,e),ht(e),l&512&&(ke||a===null||ia(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Dl]||r[et]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(l),i.head.insertBefore(r,i.querySelector("head > title"))),lt(r,l,a),r[et]=e,We(r),l=r;break e;case"link":var f=ih("link","href",i).get(l+(a.href||""));if(f){for(var m=0;m<f.length;m++)if(r=f[m],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(m,1);break t}}r=i.createElement(l),lt(r,l,a),i.head.appendChild(r);break;case"meta":if(f=ih("meta","content",i).get(l+(a.content||""))){for(m=0;m<f.length;m++)if(r=f[m],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(m,1);break t}}r=i.createElement(l),lt(r,l,a),i.head.appendChild(r);break;default:throw Error(u(468,l))}r[et]=e,We(r),l=r}e.stateNode=l}else rh(i,e.type,e.stateNode);else e.stateNode=lh(i,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?rh(i,e.type,e.stateNode):lh(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&xo(e,e.memoizedProps,a.memoizedProps)}break;case 27:dt(t,e),ht(e),l&512&&(ke||a===null||ia(a,a.return)),a!==null&&l&4&&xo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dt(t,e),ht(e),l&512&&(ke||a===null||ia(a,a.return)),e.flags&32){i=e.stateNode;try{$n(i,"")}catch(F){Ce(e,e.return,F)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,xo(e,i,a!==null?a.memoizedProps:i)),l&1024&&(jo=!0);break;case 6:if(dt(t,e),ht(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(F){Ce(e,e.return,F)}}break;case 3:if(Jr=null,i=Zt,Zt=Zr(t.containerInfo),dt(t,e),Zt=i,ht(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ml(t.containerInfo)}catch(F){Ce(e,e.return,F)}jo&&(jo=!1,r1(e));break;case 4:l=Zt,Zt=Zr(e.stateNode.containerInfo),dt(t,e),ht(e),Zt=l;break;case 12:dt(t,e),ht(e);break;case 31:dt(t,e),ht(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Dr(e,l)));break;case 13:dt(t,e),ht(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nr=xt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Dr(e,l)));break;case 22:i=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,w=xa,N=ke;if(xa=w||i,ke=N||v,dt(t,e),ke=N,xa=w,ht(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||v||xa||ke||jn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(r=v.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=v.stateNode;var B=v.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null;m.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(F){Ce(v,v.return,F)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(F){Ce(v,v.return,F)}}}else if(t.tag===18){if(a===null){v=t;try{var _=v.stateNode;i?K1(_,!0):K1(v.stateNode,!1)}catch(F){Ce(v,v.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Dr(e,a))));break;case 19:dt(t,e),ht(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Dr(e,l)));break;case 30:break;case 21:break;default:dt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(W0(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,r=bo(e);Rr(e,r,i);break;case 5:var f=a.stateNode;a.flags&32&&($n(f,""),a.flags&=-33);var m=bo(e);Rr(e,m,f);break;case 3:case 4:var v=a.stateNode.containerInfo,w=bo(e);So(e,w,v);break;default:throw Error(u(161))}}catch(N){Ce(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;r1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)e1(e,t.alternate,t),t=t.sibling}function jn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Va(4,t,t.return),jn(t);break;case 1:ia(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&K0(t,t.return,a),jn(t);break;case 27:mi(t.stateNode);case 26:case 5:ia(t,t.return),jn(t);break;case 22:t.memoizedState===null&&jn(t);break;case 30:jn(t);break;default:jn(t)}e=e.sibling}}function ja(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:ja(i,r,a),li(4,r);break;case 1:if(ja(i,r,a),l=r,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(w){Ce(l,l.return,w)}if(l=r,i=l.updateQueue,i!==null){var m=l.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)$d(v[i],m)}catch(w){Ce(l,l.return,w)}}a&&f&64&&J0(r),ii(r,r.return);break;case 27:I0(r);case 26:case 5:ja(i,r,a),a&&l===null&&f&4&&F0(r),ii(r,r.return);break;case 12:ja(i,r,a);break;case 31:ja(i,r,a),a&&f&4&&n1(i,r);break;case 13:ja(i,r,a),a&&f&4&&l1(i,r);break;case 22:r.memoizedState===null&&ja(i,r,a),ii(r,r.return);break;case 30:break;default:ja(i,r,a)}t=t.sibling}}function zo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ql(a))}function Eo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e))}function kt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)c1(e,t,a,l),t=t.sibling}function c1(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,a,l),i&2048&&li(9,t);break;case 1:kt(e,t,a,l);break;case 3:kt(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e)));break;case 12:if(i&2048){kt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,m=r.onPostCommit;typeof m=="function"&&m(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ce(t,t.return,v)}}else kt(e,t,a,l);break;case 31:kt(e,t,a,l);break;case 13:kt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?kt(e,t,a,l):ri(e,t):r._visibility&2?kt(e,t,a,l):(r._visibility|=2,nl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&zo(f,t);break;case 24:kt(e,t,a,l),i&2048&&Eo(t.alternate,t);break;default:kt(e,t,a,l)}}function nl(e,t,a,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,f=t,m=a,v=l,w=f.flags;switch(f.tag){case 0:case 11:case 15:nl(r,f,m,v,i),li(8,f);break;case 23:break;case 22:var N=f.stateNode;f.memoizedState!==null?N._visibility&2?nl(r,f,m,v,i):ri(r,f):(N._visibility|=2,nl(r,f,m,v,i)),i&&w&2048&&zo(f.alternate,f);break;case 24:nl(r,f,m,v,i),i&&w&2048&&Eo(f.alternate,f);break;default:nl(r,f,m,v,i)}t=t.sibling}}function ri(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:ri(a,l),i&2048&&zo(l.alternate,l);break;case 24:ri(a,l),i&2048&&Eo(l.alternate,l);break;default:ri(a,l)}t=t.sibling}}var ci=8192;function ll(e,t,a){if(e.subtreeFlags&ci)for(e=e.child;e!==null;)u1(e,t,a),e=e.sibling}function u1(e,t,a){switch(e.tag){case 26:ll(e,t,a),e.flags&ci&&e.memoizedState!==null&&Og(a,Zt,e.memoizedState,e.memoizedProps);break;case 5:ll(e,t,a);break;case 3:case 4:var l=Zt;Zt=Zr(e.stateNode.containerInfo),ll(e,t,a),Zt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ci,ci=16777216,ll(e,t,a),ci=l):ll(e,t,a));break;default:ll(e,t,a)}}function o1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ie=l,f1(l,e)}o1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)s1(e),e=e.sibling}function s1(e){switch(e.tag){case 0:case 11:case 15:ui(e),e.flags&2048&&Va(9,e,e.return);break;case 3:ui(e);break;case 12:ui(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_r(e)):ui(e);break;default:ui(e)}}function _r(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ie=l,f1(l,e)}o1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Va(8,t,t.return),_r(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,_r(t));break;default:_r(t)}e=e.sibling}}function f1(e,t){for(;Ie!==null;){var a=Ie;switch(a.tag){case 0:case 11:case 15:Va(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ql(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ie=l;else e:for(a=e;Ie!==null;){l=Ie;var i=l.sibling,r=l.return;if(t1(l),l===a){Ie=null;break e}if(i!==null){i.return=r,Ie=i;break e}Ie=r}}}var X2={getCacheForType:function(e){var t=at(Xe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return at(Xe).controller.signal}},Q2=typeof WeakMap=="function"?WeakMap:Map,je=0,Me=null,de=null,me=0,Ee=0,Tt=null,Xa=!1,il=!1,Co=!1,za=0,qe=0,Qa=0,zn=0,To=0,At=0,rl=0,oi=null,mt=null,Ao=!1,Nr=0,d1=0,Ur=1/0,Hr=null,Za=null,Ke=0,ka=null,cl=null,Ea=0,wo=0,Oo=null,h1=null,si=0,Mo=null;function wt(){return(je&2)!==0&&me!==0?me&-me:U.T!==null?Ho():Of()}function m1(){if(At===0)if((me&536870912)===0||ge){var e=Xi;Xi<<=1,(Xi&3932160)===0&&(Xi=262144),At=e}else At=536870912;return e=Et.current,e!==null&&(e.flags|=32),At}function pt(e,t,a){(e===Me&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(ul(e,0),Ja(e,me,At,!1)),Rl(e,a),((je&2)===0||e!==Me)&&(e===Me&&((je&2)===0&&(zn|=a),qe===4&&Ja(e,me,At,!1)),ra(e))}function p1(e,t,a){if((je&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ml(e,t),i=l?J2(e,t):Do(e,t,!0),r=l;do{if(i===0){il&&!l&&Ja(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Z2(a)){i=Do(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var m=e;i=oi;var v=m.current.memoizedState.isDehydrated;if(v&&(ul(m,f).flags|=256),f=Do(m,f,!1),f!==2){if(Co&&!v){m.errorRecoveryDisabledLanes|=r,zn|=r,i=4;break e}r=mt,mt=i,r!==null&&(mt===null?mt=r:mt.push.apply(mt,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){ul(e,0),Ja(e,t,0,!0);break}e:{switch(l=e,r=i,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ja(l,t,At,!Xa);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Nr+300-xt(),10<i)){if(Ja(l,t,At,!Xa),Zi(l,0,!0)!==0)break e;Ea=t,l.timeoutHandle=Z1(g1.bind(null,l,a,mt,Hr,Ao,t,At,zn,rl,Xa,r,"Throttled",-0,0),i);break e}g1(l,a,mt,Hr,Ao,t,At,zn,rl,Xa,r,null,-0,0)}}break}while(!0);ra(e)}function g1(e,t,a,l,i,r,f,m,v,w,N,B,M,_){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},u1(t,r,B);var F=(r&62914560)===r?Nr-xt():(r&4194048)===r?d1-xt():0;if(F=Mg(B,F),F!==null){Ea=r,e.cancelPendingCommit=F(E1.bind(null,e,t,r,a,l,i,f,m,v,N,B,null,M,_)),Ja(e,r,f,!w);return}}E1(e,t,r,a,l,i,f,m,v)}function Z2(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],r=i.getSnapshot;i=i.value;try{if(!jt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ja(e,t,a,l){t&=~To,t&=~zn,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var r=31-St(i),f=1<<r;l[r]=-1,i&=~f}a!==0&&Tf(e,a,t)}function $r(){return(je&6)===0?(fi(0),!1):!0}function Ro(){if(de!==null){if(Ee===0)var e=de.return;else e=de,ha=mn=null,Zu(e),In=null,kl=0,e=de;for(;e!==null;)k0(e.alternate,e),e=e.return;de=null}}function ul(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ea=0,Ro(),Me=e,de=a=fa(e.current,null),me=t,Ee=0,Tt=null,Xa=!1,il=Ml(e,t),Co=!1,rl=At=To=zn=Qa=qe=0,mt=oi=null,Ao=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-St(l),r=1<<i;t|=e[i],l&=~r}return za=t,lr(),a}function y1(e,t){ie=null,U.H=ti,t===Wn||t===dr?(t=_d(),Ee=3):t===Nu?(t=_d(),Ee=4):Ee=t===uo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,de===null&&(qe=1,Tr(e,Ht(t,e.current)))}function v1(){var e=Et.current;return e===null?!0:(me&4194048)===me?qt===null:(me&62914560)===me||(me&536870912)!==0?e===qt:!1}function x1(){var e=U.H;return U.H=ti,e===null?ti:e}function b1(){var e=U.A;return U.A=X2,e}function Br(){qe=4,Xa||(me&4194048)!==me&&Et.current!==null||(il=!0),(Qa&134217727)===0&&(zn&134217727)===0||Me===null||Ja(Me,me,At,!1)}function Do(e,t,a){var l=je;je|=2;var i=x1(),r=b1();(Me!==e||me!==t)&&(Hr=null,ul(e,t)),t=!1;var f=qe;e:do try{if(Ee!==0&&de!==null){var m=de,v=Tt;switch(Ee){case 8:Ro(),f=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var w=Ee;if(Ee=0,Tt=null,ol(e,m,v,w),a&&il){f=0;break e}break;default:w=Ee,Ee=0,Tt=null,ol(e,m,v,w)}}k2(),f=qe;break}catch(N){y1(e,N)}while(!0);return t&&e.shellSuspendCounter++,ha=mn=null,je=l,U.H=i,U.A=r,de===null&&(Me=null,me=0,lr()),f}function k2(){for(;de!==null;)S1(de)}function J2(e,t){var a=je;je|=2;var l=x1(),i=b1();Me!==e||me!==t?(Hr=null,Ur=xt()+500,ul(e,t)):il=Ml(e,t);e:do try{if(Ee!==0&&de!==null){t=de;var r=Tt;t:switch(Ee){case 1:Ee=0,Tt=null,ol(e,t,r,1);break;case 2:case 9:if(Rd(r)){Ee=0,Tt=null,j1(t);break}t=function(){Ee!==2&&Ee!==9||Me!==e||(Ee=7),ra(e)},r.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:Rd(r)?(Ee=0,Tt=null,j1(t)):(Ee=0,Tt=null,ol(e,t,r,7));break;case 5:var f=null;switch(de.tag){case 26:f=de.memoizedState;case 5:case 27:var m=de;if(f?ch(f):m.stateNode.complete){Ee=0,Tt=null;var v=m.sibling;if(v!==null)de=v;else{var w=m.return;w!==null?(de=w,Lr(w)):de=null}break t}}Ee=0,Tt=null,ol(e,t,r,5);break;case 6:Ee=0,Tt=null,ol(e,t,r,6);break;case 8:Ro(),qe=6;break e;default:throw Error(u(462))}}K2();break}catch(N){y1(e,N)}while(!0);return ha=mn=null,U.H=l,U.A=i,je=a,de!==null?0:(Me=null,me=0,lr(),qe)}function K2(){for(;de!==null&&!vp();)S1(de)}function S1(e){var t=Q0(e.alternate,e,za);e.memoizedProps=e.pendingProps,t===null?Lr(e):de=t}function j1(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=L0(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=L0(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:Zu(t);default:k0(a,t),t=de=bd(t,za),t=Q0(a,t,za)}e.memoizedProps=e.pendingProps,t===null?Lr(e):de=t}function ol(e,t,a,l){ha=mn=null,Zu(t),In=null,kl=0;var i=t.return;try{if($2(e,i,t,a,me)){qe=1,Tr(e,Ht(a,e.current)),de=null;return}}catch(r){if(i!==null)throw de=i,r;qe=1,Tr(e,Ht(a,e.current)),de=null;return}t.flags&32768?(ge||l===1?e=!0:il||(me&536870912)!==0?e=!1:(Xa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Et.current,l!==null&&l.tag===13&&(l.flags|=16384))),z1(t,e)):Lr(t)}function Lr(e){var t=e;do{if((t.flags&32768)!==0){z1(t,Xa);return}e=t.return;var a=q2(t.alternate,t,za);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);qe===0&&(qe=5)}function z1(e,t){do{var a=Y2(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);qe=6,de=null}function E1(e,t,a,l,i,r,f,m,v){e.cancelPendingCommit=null;do qr();while(Ke!==0);if((je&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=xu,wp(e,a,r,f,m,v),e===Me&&(de=Me=null,me=0),cl=t,ka=e,Ea=a,wo=r,Oo=i,h1=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,P2(Gi,function(){return O1(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=U.T,U.T=null,i=Z.p,Z.p=2,f=je,je|=4;try{G2(e,t,a)}finally{je=f,Z.p=i,U.T=l}}Ke=1,C1(),T1(),A1()}}function C1(){if(Ke===1){Ke=0;var e=ka,t=cl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var l=Z.p;Z.p=2;var i=je;je|=4;try{i1(t,e);var r=Xo,f=fd(e.containerInfo),m=r.focusedElem,v=r.selectionRange;if(f!==m&&m&&m.ownerDocument&&sd(m.ownerDocument.documentElement,m)){if(v!==null&&mu(m)){var w=v.start,N=v.end;if(N===void 0&&(N=w),"selectionStart"in m)m.selectionStart=w,m.selectionEnd=Math.min(N,m.value.length);else{var B=m.ownerDocument||document,M=B&&B.defaultView||window;if(M.getSelection){var _=M.getSelection(),F=m.textContent.length,ae=Math.min(v.start,F),Oe=v.end===void 0?ae:Math.min(v.end,F);!_.extend&&ae>Oe&&(f=Oe,Oe=ae,ae=f);var C=od(m,ae),S=od(m,Oe);if(C&&S&&(_.rangeCount!==1||_.anchorNode!==C.node||_.anchorOffset!==C.offset||_.focusNode!==S.node||_.focusOffset!==S.offset)){var T=B.createRange();T.setStart(C.node,C.offset),_.removeAllRanges(),ae>Oe?(_.addRange(T),_.extend(S.node,S.offset)):(T.setEnd(S.node,S.offset),_.addRange(T))}}}}for(B=[],_=m;_=_.parentNode;)_.nodeType===1&&B.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<B.length;m++){var $=B[m];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Ir=!!Vo,Xo=Vo=null}finally{je=i,Z.p=l,U.T=a}}e.current=t,Ke=2}}function T1(){if(Ke===2){Ke=0;var e=ka,t=cl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var l=Z.p;Z.p=2;var i=je;je|=4;try{e1(e,t.alternate,t)}finally{je=i,Z.p=l,U.T=a}}Ke=3}}function A1(){if(Ke===4||Ke===3){Ke=0,xp();var e=ka,t=cl,a=Ea,l=h1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,cl=ka=null,w1(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Za=null),Kc(a),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=U.T,i=Z.p,Z.p=2,U.T=null;try{for(var r=e.onRecoverableError,f=0;f<l.length;f++){var m=l[f];r(m.value,{componentStack:m.stack})}}finally{U.T=t,Z.p=i}}(Ea&3)!==0&&qr(),ra(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Mo?si++:(si=0,Mo=e):si=0,fi(0)}}function w1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ql(t)))}function qr(){return C1(),T1(),A1(),O1()}function O1(){if(Ke!==5)return!1;var e=ka,t=wo;wo=0;var a=Kc(Ea),l=U.T,i=Z.p;try{Z.p=32>a?32:a,U.T=null,a=Oo,Oo=null;var r=ka,f=Ea;if(Ke=0,cl=ka=null,Ea=0,(je&6)!==0)throw Error(u(331));var m=je;if(je|=4,s1(r.current),c1(r,r.current,f,a),je=m,fi(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Ol,r)}catch{}return!0}finally{Z.p=i,U.T=l,w1(e,t)}}function M1(e,t,a){t=Ht(a,t),t=co(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(Rl(e,2),ra(e))}function Ce(e,t,a){if(e.tag===3)M1(e,e,a);else for(;t!==null;){if(t.tag===3){M1(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Za===null||!Za.has(l))){e=Ht(a,e),a=R0(2),l=qa(t,a,2),l!==null&&(D0(a,l,t,e),Rl(l,2),ra(l));break}}t=t.return}}function _o(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Q2;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(Co=!0,i.add(a),e=F2.bind(null,e,t,a),t.then(e,e))}function F2(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Me===e&&(me&a)===a&&(qe===4||qe===3&&(me&62914560)===me&&300>xt()-Nr?(je&2)===0&&ul(e,0):To|=a,rl===me&&(rl=0)),ra(e)}function R1(e,t){t===0&&(t=Cf()),e=fn(e,t),e!==null&&(Rl(e,t),ra(e))}function W2(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),R1(e,a)}function I2(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),R1(e,a)}function P2(e,t){return Qc(e,t)}var Yr=null,sl=null,No=!1,Gr=!1,Uo=!1,Ka=0;function ra(e){e!==sl&&e.next===null&&(sl===null?Yr=sl=e:sl=sl.next=e),Gr=!0,No||(No=!0,tg())}function fi(e,t){if(!Uo&&Gr){Uo=!0;do for(var a=!1,l=Yr;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var r=0;else{var f=l.suspendedLanes,m=l.pingedLanes;r=(1<<31-St(42|e)+1)-1,r&=i&~(f&~m),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,U1(l,r))}else r=me,r=Zi(l,l===Me?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Ml(l,r)||(a=!0,U1(l,r));l=l.next}while(a);Uo=!1}}function eg(){D1()}function D1(){Gr=No=!1;var e=0;Ka!==0&&fg()&&(e=Ka);for(var t=xt(),a=null,l=Yr;l!==null;){var i=l.next,r=_1(l,t);r===0?(l.next=null,a===null?Yr=i:a.next=i,i===null&&(sl=a)):(a=l,(e!==0||(r&3)!==0)&&(Gr=!0)),l=i}Ke!==0&&Ke!==5||fi(e),Ka!==0&&(Ka=0)}function _1(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-St(r),m=1<<f,v=i[f];v===-1?((m&a)===0||(m&l)!==0)&&(i[f]=Ap(m,t)):v<=t&&(e.expiredLanes|=m),r&=~m}if(t=Me,a=me,a=Zi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Zc(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ml(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Zc(l),Kc(a)){case 2:case 8:a=zf;break;case 32:a=Gi;break;case 268435456:a=Ef;break;default:a=Gi}return l=N1.bind(null,e),a=Qc(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Zc(l),e.callbackPriority=2,e.callbackNode=null,2}function N1(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(qr()&&e.callbackNode!==a)return null;var l=me;return l=Zi(e,e===Me?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(p1(e,l,t),_1(e,xt()),e.callbackNode!=null&&e.callbackNode===a?N1.bind(null,e):null)}function U1(e,t){if(qr())return null;p1(e,t,!0)}function tg(){hg(function(){(je&6)!==0?Qc(jf,eg):D1()})}function Ho(){if(Ka===0){var e=Kn;e===0&&(e=Vi,Vi<<=1,(Vi&261888)===0&&(Vi=256)),Ka=e}return Ka}function H1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fi(""+e)}function $1(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function ag(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var r=H1((i[ot]||null).action),f=l.submitter;f&&(t=(t=f[ot]||null)?H1(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var m=new er("action","action",null,l,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ka!==0){var v=f?$1(i,f):new FormData(i);to(a,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(m.preventDefault(),v=f?$1(i,f):new FormData(i),to(a,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var $o=0;$o<vu.length;$o++){var Bo=vu[$o],ng=Bo.toLowerCase(),lg=Bo[0].toUpperCase()+Bo.slice(1);Qt(ng,"on"+lg)}Qt(md,"onAnimationEnd"),Qt(pd,"onAnimationIteration"),Qt(gd,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(b2,"onTransitionRun"),Qt(S2,"onTransitionStart"),Qt(j2,"onTransitionCancel"),Qt(yd,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ig=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di));function B1(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var f=l.length-1;0<=f;f--){var m=l[f],v=m.instance,w=m.currentTarget;if(m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=w;try{r(i)}catch(N){nr(N)}i.currentTarget=null,r=v}else for(f=0;f<l.length;f++){if(m=l[f],v=m.instance,w=m.currentTarget,m=m.listener,v!==r&&i.isPropagationStopped())break e;r=m,i.currentTarget=w;try{r(i)}catch(N){nr(N)}i.currentTarget=null,r=v}}}}function he(e,t){var a=t[Fc];a===void 0&&(a=t[Fc]=new Set);var l=e+"__bubble";a.has(l)||(L1(t,e,2,!1),a.add(l))}function Lo(e,t,a){var l=0;t&&(l|=4),L1(a,e,l,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function qo(e){if(!e[Vr]){e[Vr]=!0,Df.forEach(function(a){a!=="selectionchange"&&(ig.has(a)||Lo(a,!1,e),Lo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,Lo("selectionchange",!1,t))}}function L1(e,t,a,l){switch(mh(t)){case 2:var i=_g;break;case 8:i=Ng;break;default:i=ts}a=i.bind(null,t,a,e),i=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Yo(e,t,a,l,i){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var f=l.tag;if(f===3||f===4){var m=l.stateNode.containerInfo;if(m===i)break;if(f===4)for(f=l.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;m!==null;){if(f=Dn(m),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){l=r=f;continue e}m=m.parentNode}}l=l.return}Xf(function(){var w=r,N=nu(a),B=[];e:{var M=vd.get(e);if(M!==void 0){var _=er,F=e;switch(e){case"keypress":if(Ii(a)===0)break e;case"keydown":case"keyup":_=Ip;break;case"focusin":F="focus",_=ou;break;case"focusout":F="blur",_=ou;break;case"beforeblur":case"afterblur":_=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=t2;break;case md:case pd:case gd:_=Vp;break;case yd:_=n2;break;case"scroll":case"scrollend":_=Bp;break;case"wheel":_=i2;break;case"copy":case"cut":case"paste":_=Qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Kf;break;case"toggle":case"beforetoggle":_=c2}var ae=(t&4)!==0,Oe=!ae&&(e==="scroll"||e==="scrollend"),C=ae?M!==null?M+"Capture":null:M;ae=[];for(var S=w,T;S!==null;){var $=S;if(T=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||T===null||C===null||($=Nl(S,C),$!=null&&ae.push(hi(S,$,T))),Oe)break;S=S.return}0<ae.length&&(M=new _(M,F,null,a,N),B.push({event:M,listeners:ae}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",M&&a!==au&&(F=a.relatedTarget||a.fromElement)&&(Dn(F)||F[Rn]))break e;if((_||M)&&(M=N.window===N?N:(M=N.ownerDocument)?M.defaultView||M.parentWindow:window,_?(F=a.relatedTarget||a.toElement,_=w,F=F?Dn(F):null,F!==null&&(Oe=h(F),ae=F.tag,F!==Oe||ae!==5&&ae!==27&&ae!==6)&&(F=null)):(_=null,F=w),_!==F)){if(ae=kf,$="onMouseLeave",C="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Kf,$="onPointerLeave",C="onPointerEnter",S="pointer"),Oe=_==null?M:_l(_),T=F==null?M:_l(F),M=new ae($,S+"leave",_,a,N),M.target=Oe,M.relatedTarget=T,$=null,Dn(N)===w&&(ae=new ae(C,S+"enter",F,a,N),ae.target=T,ae.relatedTarget=Oe,$=ae),Oe=$,_&&F)t:{for(ae=rg,C=_,S=F,T=0,$=C;$;$=ae($))T++;$=0;for(var ee=S;ee;ee=ae(ee))$++;for(;0<T-$;)C=ae(C),T--;for(;0<$-T;)S=ae(S),$--;for(;T--;){if(C===S||S!==null&&C===S.alternate){ae=C;break t}C=ae(C),S=ae(S)}ae=null}else ae=null;_!==null&&q1(B,M,_,ae,!1),F!==null&&Oe!==null&&q1(B,Oe,F,ae,!0)}}e:{if(M=w?_l(w):window,_=M.nodeName&&M.nodeName.toLowerCase(),_==="select"||_==="input"&&M.type==="file")var be=nd;else if(td(M))if(ld)be=y2;else{be=p2;var I=m2}else _=M.nodeName,!_||_.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?w&&tu(w.elementType)&&(be=nd):be=g2;if(be&&(be=be(e,w))){ad(B,be,a,N);break e}I&&I(e,M,w),e==="focusout"&&w&&M.type==="number"&&w.memoizedProps.value!=null&&eu(M,"number",M.value)}switch(I=w?_l(w):window,e){case"focusin":(td(I)||I.contentEditable==="true")&&(Yn=I,pu=w,Gl=null);break;case"focusout":Gl=pu=Yn=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,dd(B,a,N);break;case"selectionchange":if(x2)break;case"keydown":case"keyup":dd(B,a,N)}var ue;if(fu)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else qn?Pf(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Ff&&a.locale!=="ko"&&(qn||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&qn&&(ue=Qf()):(_a=N,ru="value"in _a?_a.value:_a.textContent,qn=!0)),I=Xr(w,pe),0<I.length&&(pe=new Jf(pe,e,null,a,N),B.push({event:pe,listeners:I}),ue?pe.data=ue:(ue=ed(a),ue!==null&&(pe.data=ue)))),(ue=o2?s2(e,a):f2(e,a))&&(pe=Xr(w,"onBeforeInput"),0<pe.length&&(I=new Jf("onBeforeInput","beforeinput",null,a,N),B.push({event:I,listeners:pe}),I.data=ue)),ag(B,e,w,a,N)}B1(B,t)})}function hi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Xr(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Nl(e,a),i!=null&&l.unshift(hi(e,i,r)),i=Nl(e,t),i!=null&&l.push(hi(e,i,r))),e.tag===3)return l;e=e.return}return[]}function rg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function q1(e,t,a,l,i){for(var r=t._reactName,f=[];a!==null&&a!==l;){var m=a,v=m.alternate,w=m.stateNode;if(m=m.tag,v!==null&&v===l)break;m!==5&&m!==26&&m!==27||w===null||(v=w,i?(w=Nl(a,r),w!=null&&f.unshift(hi(a,w,v))):i||(w=Nl(a,r),w!=null&&f.push(hi(a,w,v)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var cg=/\r\n?/g,ug=/\u0000|\uFFFD/g;function Y1(e){return(typeof e=="string"?e:""+e).replace(cg,`
`).replace(ug,"")}function G1(e,t){return t=Y1(t),Y1(e)===t}function we(e,t,a,l,i,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||$n(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&$n(e,""+l);break;case"className":Ji(e,"class",l);break;case"tabIndex":Ji(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ji(e,a,l);break;case"style":Gf(e,l,r);break;case"data":if(t!=="object"){Ji(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&we(e,t,"name",i.name,i,null),we(e,t,"formEncType",i.formEncType,i,null),we(e,t,"formMethod",i.formMethod,i,null),we(e,t,"formTarget",i.formTarget,i,null)):(we(e,t,"encType",i.encType,i,null),we(e,t,"method",i.method,i,null),we(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Fi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=oa);break;case"onScroll":l!=null&&he("scroll",e);break;case"onScrollEnd":l!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Fi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":he("beforetoggle",e),he("toggle",e),ki(e,"popover",l);break;case"xlinkActuate":ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ua(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ua(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ua(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ua(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ki(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hp.get(a)||a,ki(e,a,l))}}function Go(e,t,a,l,i,r){switch(a){case"style":Gf(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?$n(e,l):(typeof l=="number"||typeof l=="bigint")&&$n(e,""+l);break;case"onScroll":l!=null&&he("scroll",e);break;case"onScrollEnd":l!=null&&he("scrollend",e);break;case"onClick":l!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_f.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[ot]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ki(e,a,l)}}}function lt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var l=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var f=a[r];if(f!=null)switch(r){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:we(e,t,r,f,a,null)}}i&&we(e,t,"srcSet",a.srcSet,a,null),l&&we(e,t,"src",a.src,a,null);return;case"input":he("invalid",e);var m=r=f=i=null,v=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var N=a[l];if(N!=null)switch(l){case"name":i=N;break;case"type":f=N;break;case"checked":v=N;break;case"defaultChecked":w=N;break;case"value":r=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:we(e,t,l,N,a,null)}}Bf(e,r,m,v,w,f,i,!1);return;case"select":he("invalid",e),l=f=r=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":r=m;break;case"defaultValue":f=m;break;case"multiple":l=m;default:we(e,t,i,m,a,null)}t=r,a=f,e.multiple=!!l,t!=null?Hn(e,!!l,t,!1):a!=null&&Hn(e,!!l,a,!0);return;case"textarea":he("invalid",e),r=i=l=null;for(f in a)if(a.hasOwnProperty(f)&&(m=a[f],m!=null))switch(f){case"value":l=m;break;case"defaultValue":i=m;break;case"children":r=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:we(e,t,f,m,a,null)}qf(e,l,i,r);return;case"option":for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null)&&(v==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":we(e,t,v,l,a,null));return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(l=0;l<di.length;l++)he(di[l],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:we(e,t,w,l,a,null)}return;default:if(tu(t)){for(N in a)a.hasOwnProperty(N)&&(l=a[N],l!==void 0&&Go(e,t,N,l,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null&&we(e,t,m,l,a,null))}function og(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,m=null,v=null,w=null,N=null;for(_ in a){var B=a[_];if(a.hasOwnProperty(_)&&B!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":v=B;default:l.hasOwnProperty(_)||we(e,t,_,null,l,B)}}for(var M in l){var _=l[M];if(B=a[M],l.hasOwnProperty(M)&&(_!=null||B!=null))switch(M){case"type":r=_;break;case"name":i=_;break;case"checked":w=_;break;case"defaultChecked":N=_;break;case"value":f=_;break;case"defaultValue":m=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(u(137,t));break;default:_!==B&&we(e,t,M,_,l,B)}}Pc(e,f,m,v,w,N,r,i);return;case"select":_=f=m=M=null;for(r in a)if(v=a[r],a.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":_=v;default:l.hasOwnProperty(r)||we(e,t,r,null,l,v)}for(i in l)if(r=l[i],v=a[i],l.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":M=r;break;case"defaultValue":m=r;break;case"multiple":f=r;default:r!==v&&we(e,t,i,r,l,v)}t=m,a=f,l=_,M!=null?Hn(e,!!a,M,!1):!!l!=!!a&&(t!=null?Hn(e,!!a,t,!0):Hn(e,!!a,a?[]:"",!1));return;case"textarea":_=M=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:we(e,t,m,null,l,i)}for(f in l)if(i=l[f],r=a[f],l.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":M=i;break;case"defaultValue":_=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==r&&we(e,t,f,i,l,r)}Lf(e,M,_);return;case"option":for(var F in a)M=a[F],a.hasOwnProperty(F)&&M!=null&&!l.hasOwnProperty(F)&&(F==="selected"?e.selected=!1:we(e,t,F,null,l,M));for(v in l)M=l[v],_=a[v],l.hasOwnProperty(v)&&M!==_&&(M!=null||_!=null)&&(v==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":we(e,t,v,M,l,_));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)M=a[ae],a.hasOwnProperty(ae)&&M!=null&&!l.hasOwnProperty(ae)&&we(e,t,ae,null,l,M);for(w in l)if(M=l[w],_=a[w],l.hasOwnProperty(w)&&M!==_&&(M!=null||_!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:we(e,t,w,M,l,_)}return;default:if(tu(t)){for(var Oe in a)M=a[Oe],a.hasOwnProperty(Oe)&&M!==void 0&&!l.hasOwnProperty(Oe)&&Go(e,t,Oe,void 0,l,M);for(N in l)M=l[N],_=a[N],!l.hasOwnProperty(N)||M===_||M===void 0&&_===void 0||Go(e,t,N,M,l,_);return}}for(var C in a)M=a[C],a.hasOwnProperty(C)&&M!=null&&!l.hasOwnProperty(C)&&we(e,t,C,null,l,M);for(B in l)M=l[B],_=a[B],!l.hasOwnProperty(B)||M===_||M==null&&_==null||we(e,t,B,M,l,_)}function V1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],r=i.transferSize,f=i.initiatorType,m=i.duration;if(r&&m&&V1(f)){for(f=0,m=i.responseEnd,l+=1;l<a.length;l++){var v=a[l],w=v.startTime;if(w>m)break;var N=v.transferSize,B=v.initiatorType;N&&V1(B)&&(v=v.responseEnd,f+=N*(v<m?1:(m-w)/(v-w)))}if(--l,t+=8*(r+f)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vo=null,Xo=null;function Qr(e){return e.nodeType===9?e:e.ownerDocument}function X1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zo=null;function fg(){var e=window.event;return e&&e.type==="popstate"?e===Zo?!1:(Zo=e,!0):(Zo=null,!1)}var Z1=typeof setTimeout=="function"?setTimeout:void 0,dg=typeof clearTimeout=="function"?clearTimeout:void 0,k1=typeof Promise=="function"?Promise:void 0,hg=typeof queueMicrotask=="function"?queueMicrotask:typeof k1<"u"?function(e){return k1.resolve(null).then(e).catch(mg)}:Z1;function mg(e){setTimeout(function(){throw e})}function Fa(e){return e==="head"}function J1(e,t){var a=t,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(i),ml(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")mi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mi(a);for(var r=a.firstChild;r;){var f=r.nextSibling,m=r.nodeName;r[Dl]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=f}}else a==="body"&&mi(e.ownerDocument.body);a=i}while(a);ml(t)}function K1(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function ko(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ko(a),Wc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function pg(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Dl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Yt(e.nextSibling),e===null)break}return null}function gg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Yt(e.nextSibling),e===null))return null;return e}function F1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Yt(e.nextSibling),e===null))return null;return e}function Jo(e){return e.data==="$?"||e.data==="$~"}function Ko(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fo=null;function W1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Yt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function I1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function P1(e,t,a){switch(t=Qr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function mi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wc(e)}var Gt=new Map,eh=new Set;function Zr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ca=Z.d;Z.d={f:vg,r:xg,D:bg,C:Sg,L:jg,m:zg,X:Cg,S:Eg,M:Tg};function vg(){var e=Ca.f(),t=$r();return e||t}function xg(e){var t=_n(e);t!==null&&t.tag===5&&t.type==="form"?y0(t):Ca.r(e)}var fl=typeof document>"u"?null:document;function th(e,t,a){var l=fl;if(l&&typeof t=="string"&&t){var i=Nt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),eh.has(i)||(eh.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),lt(t,"link",e),We(t),l.head.appendChild(t)))}}function bg(e){Ca.D(e),th("dns-prefetch",e,null)}function Sg(e,t){Ca.C(e,t),th("preconnect",e,t)}function jg(e,t,a){Ca.L(e,t,a);var l=fl;if(l&&e&&t){var i='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Nt(a.imageSizes)+'"]')):i+='[href="'+Nt(e)+'"]';var r=i;switch(t){case"style":r=dl(e);break;case"script":r=hl(e)}Gt.has(r)||(e=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Gt.set(r,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(pi(r))||t==="script"&&l.querySelector(gi(r))||(t=l.createElement("link"),lt(t,"link",e),We(t),l.head.appendChild(t)))}}function zg(e,t){Ca.m(e,t);var a=fl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Nt(l)+'"][href="'+Nt(e)+'"]',r=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=hl(e)}if(!Gt.has(r)&&(e=j({rel:"modulepreload",href:e},t),Gt.set(r,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gi(r)))return}l=a.createElement("link"),lt(l,"link",e),We(l),a.head.appendChild(l)}}}function Eg(e,t,a){Ca.S(e,t,a);var l=fl;if(l&&e){var i=Nn(l).hoistableStyles,r=dl(e);t=t||"default";var f=i.get(r);if(!f){var m={loading:0,preload:null};if(f=l.querySelector(pi(r)))m.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Gt.get(r))&&Wo(e,a);var v=f=l.createElement("link");We(v),lt(v,"link",e),v._p=new Promise(function(w,N){v.onload=w,v.onerror=N}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,kr(f,t,l)}f={type:"stylesheet",instance:f,count:1,state:m},i.set(r,f)}}}function Cg(e,t){Ca.X(e,t);var a=fl;if(a&&e){var l=Nn(a).hoistableScripts,i=hl(e),r=l.get(i);r||(r=a.querySelector(gi(i)),r||(e=j({src:e,async:!0},t),(t=Gt.get(i))&&Io(e,t),r=a.createElement("script"),We(r),lt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function Tg(e,t){Ca.M(e,t);var a=fl;if(a&&e){var l=Nn(a).hoistableScripts,i=hl(e),r=l.get(i);r||(r=a.querySelector(gi(i)),r||(e=j({src:e,async:!0,type:"module"},t),(t=Gt.get(i))&&Io(e,t),r=a.createElement("script"),We(r),lt(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(i,r))}}function ah(e,t,a,l){var i=(i=ce.current)?Zr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=dl(a.href),a=Nn(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dl(a.href);var r=Nn(i).hoistableStyles,f=r.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=i.querySelector(pi(e)))&&!r._p&&(f.instance=r,f.state.loading=5),Gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gt.set(e,a),r||Ag(i,e,a,f.state))),t&&l===null)throw Error(u(528,""));return f}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hl(a),a=Nn(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function dl(e){return'href="'+Nt(e)+'"'}function pi(e){return'link[rel="stylesheet"]['+e+"]"}function nh(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Ag(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),lt(t,"link",a),We(t),e.head.appendChild(t))}function hl(e){return'[src="'+Nt(e)+'"]'}function gi(e){return"script[async]"+e}function lh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(l)return t.instance=l,We(l),l;var i=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),We(l),lt(l,"style",i),kr(l,a.precedence,e),t.instance=l;case"stylesheet":i=dl(a.href);var r=e.querySelector(pi(i));if(r)return t.state.loading|=4,t.instance=r,We(r),r;l=nh(a),(i=Gt.get(i))&&Wo(l,i),r=(e.ownerDocument||e).createElement("link"),We(r);var f=r;return f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),lt(r,"link",l),t.state.loading|=4,kr(r,a.precedence,e),t.instance=r;case"script":return r=hl(a.src),(i=e.querySelector(gi(r)))?(t.instance=i,We(i),i):(l=a,(i=Gt.get(r))&&(l=j({},a),Io(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),We(i),lt(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,kr(l,a.precedence,e));return t.instance}function kr(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,r=i,f=0;f<l.length;f++){var m=l[f];if(m.dataset.precedence===t)r=m;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Wo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Io(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Jr=null;function ih(e,t,a){if(Jr===null){var l=new Map,i=Jr=new Map;i.set(a,l)}else i=Jr,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[Dl]||r[et]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var m=l.get(f);m?m.push(r):l.set(f,[r])}}return l}function rh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function wg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ch(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Og(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=dl(l.href),r=t.querySelector(pi(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Kr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,We(r);return}r=t.ownerDocument||t,l=nh(l),(i=Gt.get(i))&&Wo(l,i),r=r.createElement("link"),We(r);var f=r;f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),lt(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Kr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Po=0;function Mg(e,t){return e.stylesheets&&e.count===0&&Wr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Wr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Po===0&&(Po=62500*sg());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Po?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function Kr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fr=null;function Wr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fr=new Map,t.forEach(Rg,e),Fr=null,Kr.call(e))}function Rg(e,t){if(!(t.state.loading&4)){var a=Fr.get(e);if(a)var l=a.get(null);else{a=new Map,Fr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),l=f)}l&&a.set(null,l)}i=t.instance,f=i.getAttribute("data-precedence"),r=a.get(f)||l,r===l&&a.set(null,i),a.set(f,i),this.count++,l=Kr.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var yi={$$typeof:L,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Dg(e,t,a,l,i,r,f,m,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.hiddenUpdates=kc(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function uh(e,t,a,l,i,r,f,m,v,w,N,B){return e=new Dg(e,t,a,f,v,w,N,B,m),t=1,r===!0&&(t|=24),r=zt(3,null,null,t),e.current=r,r.stateNode=e,t=Ru(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},Uu(r),e}function oh(e){return e?(e=Xn,e):Xn}function sh(e,t,a,l,i,r){i=oh(i),l.context===null?l.context=i:l.pendingContext=i,l=La(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=qa(e,l,t),a!==null&&(pt(a,e,t),Kl(a,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function es(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function dh(e){if(e.tag===13||e.tag===31){var t=fn(e,67108864);t!==null&&pt(t,e,67108864),es(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=wt();t=Jc(t);var a=fn(e,t);a!==null&&pt(a,e,t),es(e,t)}}var Ir=!0;function _g(e,t,a,l){var i=U.T;U.T=null;var r=Z.p;try{Z.p=2,ts(e,t,a,l)}finally{Z.p=r,U.T=i}}function Ng(e,t,a,l){var i=U.T;U.T=null;var r=Z.p;try{Z.p=8,ts(e,t,a,l)}finally{Z.p=r,U.T=i}}function ts(e,t,a,l){if(Ir){var i=as(l);if(i===null)Yo(e,t,l,Pr,a),ph(e,l);else if(Hg(i,e,t,a,l))l.stopPropagation();else if(ph(e,l),t&4&&-1<Ug.indexOf(e)){for(;i!==null;){var r=_n(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=rn(r.pendingLanes);if(f!==0){var m=r;for(m.pendingLanes|=2,m.entangledLanes|=2;f;){var v=1<<31-St(f);m.entanglements[1]|=v,f&=~v}ra(r),(je&6)===0&&(Ur=xt()+500,fi(0))}}break;case 31:case 13:m=fn(r,2),m!==null&&pt(m,r,2),$r(),es(r,2)}if(r=as(l),r===null&&Yo(e,t,l,Pr,a),r===i)break;i=r}i!==null&&l.stopPropagation()}else Yo(e,t,l,null,a)}}function as(e){return e=nu(e),ns(e)}var Pr=null;function ns(e){if(Pr=null,e=Dn(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pr=e,null}function mh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bp()){case jf:return 2;case zf:return 8;case Gi:case Sp:return 32;case Ef:return 268435456;default:return 32}default:return 32}}var ls=!1,Wa=null,Ia=null,Pa=null,vi=new Map,xi=new Map,en=[],Ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ph(e,t){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(t.pointerId)}}function bi(e,t,a,l,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[i]},t!==null&&(t=_n(t),t!==null&&dh(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hg(e,t,a,l,i){switch(t){case"focusin":return Wa=bi(Wa,e,t,a,l,i),!0;case"dragenter":return Ia=bi(Ia,e,t,a,l,i),!0;case"mouseover":return Pa=bi(Pa,e,t,a,l,i),!0;case"pointerover":var r=i.pointerId;return vi.set(r,bi(vi.get(r)||null,e,t,a,l,i)),!0;case"gotpointercapture":return r=i.pointerId,xi.set(r,bi(xi.get(r)||null,e,t,a,l,i)),!0}return!1}function gh(e){var t=Dn(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,Mf(e.priority,function(){hh(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,Mf(e.priority,function(){hh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=as(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);au=l,a.target.dispatchEvent(l),au=null}else return t=_n(a),t!==null&&dh(t),e.blockedOn=a,!1;t.shift()}return!0}function yh(e,t,a){ec(e)&&a.delete(t)}function $g(){ls=!1,Wa!==null&&ec(Wa)&&(Wa=null),Ia!==null&&ec(Ia)&&(Ia=null),Pa!==null&&ec(Pa)&&(Pa=null),vi.forEach(yh),xi.forEach(yh)}function tc(e,t){e.blockedOn===t&&(e.blockedOn=null,ls||(ls=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,$g)))}var ac=null;function vh(e){ac!==e&&(ac=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){ac===e&&(ac=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(ns(l||a)===null)continue;break}var r=_n(a);r!==null&&(e.splice(t,3),t-=3,to(r,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function ml(e){function t(v){return tc(v,e)}Wa!==null&&tc(Wa,e),Ia!==null&&tc(Ia,e),Pa!==null&&tc(Pa,e),vi.forEach(t),xi.forEach(t);for(var a=0;a<en.length;a++){var l=en[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<en.length&&(a=en[0],a.blockedOn===null);)gh(a),a.blockedOn===null&&en.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],r=a[l+1],f=i[ot]||null;if(typeof r=="function")f||vh(a);else if(f){var m=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[ot]||null)m=f.formAction;else if(ns(i)!==null)continue}else m=f.action;typeof m=="function"?a[l+1]=m:(a.splice(l,3),l-=3),vh(a)}}}function xh(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(f){return i=f})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function is(e){this._internalRoot=e}nc.prototype.render=is.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=wt();sh(a,l,e,t,null,null)},nc.prototype.unmount=is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sh(e.current,2,null,e,null,null),$r(),t[Rn]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Of();e={blockedOn:null,target:e,priority:t};for(var a=0;a<en.length&&t!==0&&t<en[a].priority;a++);en.splice(a,0,e),a===0&&gh(e)}};var bh=c.version;if(bh!=="19.2.4")throw Error(u(527,bh,"19.2.4"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=g(t),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var Bg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Ol=lc.inject(Bg),bt=lc}catch{}}return ji.createRoot=function(e,t){if(!d(e))throw Error(u(299));var a=!1,l="",i=A0,r=w0,f=O0;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=uh(e,1,!1,null,null,a,l,null,i,r,f,xh),e[Rn]=t.current,qo(e),new is(t)},ji.hydrateRoot=function(e,t,a){if(!d(e))throw Error(u(299));var l=!1,i="",r=A0,f=w0,m=O0,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=uh(e,1,!0,t,a??null,l,i,v,r,f,m,xh),t.context=oh(null),a=t.current,l=wt(),l=Jc(l),i=La(l),i.callback=null,qa(a,i,l),a=l,t.current.lanes=a,Rl(t,a),ra(t),e[Rn]=t.current,qo(e),new nc(t)},ji.version="19.2.4",ji}var Mh;function Kg(){if(Mh)return us.exports;Mh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),us.exports=Jg(),us.exports}var Fg=Kg(),Pe=function(){return Pe=Object.assign||function(c){for(var o,u=1,d=arguments.length;u<d;u++){o=arguments[u];for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(c[h]=o[h])}return c},Pe.apply(this,arguments)};function Di(n,c,o){if(o||arguments.length===2)for(var u=0,d=c.length,h;u<d;u++)(h||!(u in c))&&(h||(h=Array.prototype.slice.call(c,0,u)),h[u]=c[u]);return n.concat(h||Array.prototype.slice.call(c))}var Ne="-ms-",Ri="-moz-",ze="-webkit-",ym="comm",_c="rule",rf="decl",Wg="@import",Ig="@namespace",vm="@keyframes",Pg="@layer",xm=Math.abs,cf=String.fromCharCode,Zs=Object.assign;function e4(n,c){return Fe(n,0)^45?(((c<<2^Fe(n,0))<<2^Fe(n,1))<<2^Fe(n,2))<<2^Fe(n,3):0}function bm(n){return n.trim()}function Aa(n,c){return(n=c.exec(n))?n[0]:n}function oe(n,c,o){return n.replace(c,o)}function xc(n,c,o){return n.indexOf(c,o)}function Fe(n,c){return n.charCodeAt(c)|0}function Tn(n,c,o){return n.slice(c,o)}function Jt(n){return n.length}function Sm(n){return n.length}function Mi(n,c){return c.push(n),n}function t4(n,c){return n.map(c).join("")}function Rh(n,c){return n.filter(function(o){return!Aa(o,c)})}var Nc=1,jl=1,jm=0,Vt=0,Je=0,Cl="";function Uc(n,c,o,u,d,h,p,b){return{value:n,root:c,parent:o,type:u,props:d,children:h,line:Nc,column:jl,length:p,return:"",siblings:b}}function an(n,c){return Zs(Uc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},c)}function pl(n){for(;n.root;)n=an(n.root,{children:[n]});Mi(n,n.siblings)}function a4(){return Je}function n4(){return Je=Vt>0?Fe(Cl,--Vt):0,jl--,Je===10&&(jl=1,Nc--),Je}function Kt(){return Je=Vt<jm?Fe(Cl,Vt++):0,jl++,Je===10&&(jl=1,Nc++),Je}function nn(){return Fe(Cl,Vt)}function bc(){return Vt}function Hc(n,c){return Tn(Cl,n,c)}function _i(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function l4(n){return Nc=jl=1,jm=Jt(Cl=n),Vt=0,[]}function i4(n){return Cl="",n}function ds(n){return bm(Hc(Vt-1,ks(n===91?n+2:n===40?n+1:n)))}function r4(n){for(;(Je=nn())&&Je<33;)Kt();return _i(n)>2||_i(Je)>3?"":" "}function c4(n,c){for(;--c&&Kt()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return Hc(n,bc()+(c<6&&nn()==32&&Kt()==32))}function ks(n){for(;Kt();)switch(Je){case n:return Vt;case 34:case 39:n!==34&&n!==39&&ks(Je);break;case 40:n===41&&ks(n);break;case 92:Kt();break}return Vt}function u4(n,c){for(;Kt()&&n+Je!==57;)if(n+Je===84&&nn()===47)break;return"/*"+Hc(c,Vt-1)+"*"+cf(n===47?n:Kt())}function o4(n){for(;!_i(nn());)Kt();return Hc(n,Vt)}function s4(n){return i4(Sc("",null,null,null,[""],n=l4(n),0,[0],n))}function Sc(n,c,o,u,d,h,p,b,y){for(var g=0,E=0,j=p,R=0,O=0,q=0,G=1,X=1,Q=1,V=0,L="",W=d,P=h,Y=u,D=L;X;)switch(q=V,V=Kt()){case 40:if(q!=108&&Fe(D,j-1)==58){xc(D+=oe(ds(V),"&","&\f"),"&\f",xm(g?b[g-1]:0))!=-1&&(Q=-1);break}case 34:case 39:case 91:D+=ds(V);break;case 9:case 10:case 13:case 32:D+=r4(q);break;case 92:D+=c4(bc()-1,7);continue;case 47:switch(nn()){case 42:case 47:Mi(f4(u4(Kt(),bc()),c,o,y),y),(_i(q||1)==5||_i(nn()||1)==5)&&Jt(D)&&Tn(D,-1,void 0)!==" "&&(D+=" ");break;default:D+="/"}break;case 123*G:b[g++]=Jt(D)*Q;case 125*G:case 59:case 0:switch(V){case 0:case 125:X=0;case 59+E:Q==-1&&(D=oe(D,/\f/g,"")),O>0&&(Jt(D)-j||G===0&&q===47)&&Mi(O>32?_h(D+";",u,o,j-1,y):_h(oe(D," ","")+";",u,o,j-2,y),y);break;case 59:D+=";";default:if(Mi(Y=Dh(D,c,o,g,E,d,b,L,W=[],P=[],j,h),h),V===123)if(E===0)Sc(D,c,Y,Y,W,h,j,b,P);else{switch(R){case 99:if(Fe(D,3)===110)break;case 108:if(Fe(D,2)===97)break;default:E=0;case 100:case 109:case 115:}E?Sc(n,Y,Y,u&&Mi(Dh(n,Y,Y,0,0,d,b,L,d,W=[],j,P),P),d,P,j,b,u?W:P):Sc(D,Y,Y,Y,[""],P,0,b,P)}}g=E=O=0,G=Q=1,L=D="",j=p;break;case 58:j=1+Jt(D),O=q;default:if(G<1){if(V==123)--G;else if(V==125&&G++==0&&n4()==125)continue}switch(D+=cf(V),V*G){case 38:Q=E>0?1:(D+="\f",-1);break;case 44:b[g++]=(Jt(D)-1)*Q,Q=1;break;case 64:nn()===45&&(D+=ds(Kt())),R=nn(),E=j=Jt(L=D+=o4(bc())),V++;break;case 45:q===45&&Jt(D)==2&&(G=0)}}return h}function Dh(n,c,o,u,d,h,p,b,y,g,E,j){for(var R=d-1,O=d===0?h:[""],q=Sm(O),G=0,X=0,Q=0;G<u;++G)for(var V=0,L=Tn(n,R+1,R=xm(X=p[G])),W=n;V<q;++V)(W=bm(X>0?O[V]+" "+L:oe(L,/&\f/g,O[V])))&&(y[Q++]=W);return Uc(n,c,o,d===0?_c:b,y,g,E,j)}function f4(n,c,o,u){return Uc(n,c,o,ym,cf(a4()),Tn(n,2,-2),0,u)}function _h(n,c,o,u,d){return Uc(n,c,o,rf,Tn(n,0,u),Tn(n,u+1,-1),u,d)}function zm(n,c,o){switch(e4(n,c)){case 5103:return ze+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ze+n+n;case 4855:return ze+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Ri+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+n+Ri+n+Ne+n+n;case 5936:switch(Fe(n,c+11)){case 114:return ze+n+Ne+oe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ze+n+Ne+oe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ze+n+Ne+oe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ze+n+Ne+n+n;case 6165:return ze+n+Ne+"flex-"+n+n;case 5187:return ze+n+oe(n,/(\w+).+(:[^]+)/,ze+"box-$1$2"+Ne+"flex-$1$2")+n;case 5443:return ze+n+Ne+"flex-item-"+oe(n,/flex-|-self/g,"")+(Aa(n,/flex-|baseline/)?"":Ne+"grid-row-"+oe(n,/flex-|-self/g,""))+n;case 4675:return ze+n+Ne+"flex-line-pack"+oe(n,/align-content|flex-|-self/g,"")+n;case 5548:return ze+n+Ne+oe(n,"shrink","negative")+n;case 5292:return ze+n+Ne+oe(n,"basis","preferred-size")+n;case 6060:return ze+"box-"+oe(n,"-grow","")+ze+n+Ne+oe(n,"grow","positive")+n;case 4554:return ze+oe(n,/([^-])(transform)/g,"$1"+ze+"$2")+n;case 6187:return oe(oe(oe(n,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),n,"")+n;case 5495:case 3959:return oe(n,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return oe(oe(n,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+Ne+"flex-pack:$3"),/space-between/,"justify")+ze+n+n;case 4200:if(!Aa(n,/flex-|baseline/))return Ne+"grid-column-align"+Tn(n,c)+n;break;case 2592:case 3360:return Ne+oe(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(u,d){return c=d,Aa(u.props,/grid-\w+-end/)})?~xc(n+(o=o[c].value),"span",0)?n:Ne+oe(n,"-start","")+n+Ne+"grid-row-span:"+(~xc(o,"span",0)?Aa(o,/\d+/):+Aa(o,/\d+/)-+Aa(n,/\d+/))+";":Ne+oe(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(u){return Aa(u.props,/grid-\w+-start/)})?n:Ne+oe(oe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return oe(n,/(.+)-inline(.+)/,ze+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(n)-1-c>6)switch(Fe(n,c+1)){case 109:if(Fe(n,c+4)!==45)break;case 102:return oe(n,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+Ri+(Fe(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return~xc(n,"stretch",0)?zm(oe(n,"stretch","fill-available"),c,o)+n:n}break;case 5152:case 5920:return oe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,h,p,b,y,g){return Ne+d+":"+h+g+(p?Ne+d+"-span:"+(b?y:+y-+h)+g:"")+n});case 4949:if(Fe(n,c+6)===121)return oe(n,":",":"+ze)+n;break;case 6444:switch(Fe(n,Fe(n,14)===45?18:11)){case 120:return oe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ze+(Fe(n,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+Ne+"$2box$3")+n;case 100:return oe(n,":",":"+Ne)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(n,"scroll-","scroll-snap-")+n}return n}function Tc(n,c){for(var o="",u=0;u<n.length;u++)o+=c(n[u],u,n,c)||"";return o}function d4(n,c,o,u){switch(n.type){case Pg:if(n.children.length)break;case Wg:case Ig:case rf:return n.return=n.return||n.value;case ym:return"";case vm:return n.return=n.value+"{"+Tc(n.children,u)+"}";case _c:if(!Jt(n.value=n.props.join(",")))return""}return Jt(o=Tc(n.children,u))?n.return=n.value+"{"+o+"}":""}function h4(n){var c=Sm(n);return function(o,u,d,h){for(var p="",b=0;b<c;b++)p+=n[b](o,u,d,h)||"";return p}}function m4(n){return function(c){c.root||(c=c.return)&&n(c)}}function p4(n,c,o,u){if(n.length>-1&&!n.return)switch(n.type){case rf:n.return=zm(n.value,n.length,o);return;case vm:return Tc([an(n,{value:oe(n.value,"@","@"+ze)})],u);case _c:if(n.length)return t4(o=n.props,function(d){switch(Aa(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pl(an(n,{props:[oe(d,/:(read-\w+)/,":"+Ri+"$1")]})),pl(an(n,{props:[d]})),Zs(n,{props:Rh(o,u)});break;case"::placeholder":pl(an(n,{props:[oe(d,/:(plac\w+)/,":"+ze+"input-$1")]})),pl(an(n,{props:[oe(d,/:(plac\w+)/,":"+Ri+"$1")]})),pl(an(n,{props:[oe(d,/:(plac\w+)/,Ne+"input-$1")]})),pl(an(n,{props:[d]})),Zs(n,{props:Rh(o,u)});break}return""})}}var g4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ot={},zl=typeof process<"u"&&Ot!==void 0&&(Ot.REACT_APP_SC_ATTR||Ot.SC_ATTR)||"data-styled",Em="active",Cm="data-styled-version",$c="6.3.8",uf=`/*!sc*/
`,Ac=typeof window<"u"&&typeof document<"u",ca=Ue.createContext===void 0,y4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==""?Ot.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ot.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.SC_DISABLE_SPEEDY!==void 0&&Ot.SC_DISABLE_SPEEDY!==""&&Ot.SC_DISABLE_SPEEDY!=="false"&&Ot.SC_DISABLE_SPEEDY),v4={},Bc=Object.freeze([]),El=Object.freeze({});function Tm(n,c,o){return o===void 0&&(o=El),n.theme!==o.theme&&n.theme||c||o.theme}var Am=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),x4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,b4=/(^-|-$)/g;function Nh(n){return n.replace(x4,"-").replace(b4,"")}var S4=/(a)(d)/gi,Uh=function(n){return String.fromCharCode(n+(n>25?39:97))};function Js(n){var c,o="";for(c=Math.abs(n);c>52;c=c/52|0)o=Uh(c%52)+o;return(Uh(c%52)+o).replace(S4,"$1-$2")}var hs,xl=function(n,c){for(var o=c.length;o;)n=33*n^c.charCodeAt(--o);return n},wm=function(n){return xl(5381,n)};function Om(n){return Js(wm(n)>>>0)}function j4(n){return n.displayName||n.name||"Component"}function ms(n){return typeof n=="string"&&!0}var Mm=typeof Symbol=="function"&&Symbol.for,Rm=Mm?Symbol.for("react.memo"):60115,z4=Mm?Symbol.for("react.forward_ref"):60112,E4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},C4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T4=((hs={})[z4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hs[Rm]=Dm,hs);function Hh(n){return("type"in(c=n)&&c.type.$$typeof)===Rm?Dm:"$$typeof"in n?T4[n.$$typeof]:E4;var c}var A4=Object.defineProperty,w4=Object.getOwnPropertyNames,$h=Object.getOwnPropertySymbols,O4=Object.getOwnPropertyDescriptor,M4=Object.getPrototypeOf,Bh=Object.prototype;function _m(n,c,o){if(typeof c!="string"){if(Bh){var u=M4(c);u&&u!==Bh&&_m(n,u,o)}var d=w4(c);$h&&(d=d.concat($h(c)));for(var h=Hh(n),p=Hh(c),b=0;b<d.length;++b){var y=d[b];if(!(y in C4||o&&o[y]||p&&y in p||h&&y in h)){var g=O4(c,y);try{A4(n,y,g)}catch{}}}}return n}function An(n){return typeof n=="function"}function of(n){return typeof n=="object"&&"styledComponentId"in n}function Cn(n,c){return n&&c?"".concat(n," ").concat(c):n||c||""}function Ks(n,c){if(n.length===0)return"";for(var o=n[0],u=1;u<n.length;u++)o+=n[u];return o}function Ni(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Fs(n,c,o){if(o===void 0&&(o=!1),!o&&!Ni(n)&&!Array.isArray(n))return c;if(Array.isArray(c))for(var u=0;u<c.length;u++)n[u]=Fs(n[u],c[u]);else if(Ni(c))for(var u in c)n[u]=Fs(n[u],c[u]);return n}function sf(n,c){Object.defineProperty(n,"toString",{value:c})}function wn(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var R4=(function(){function n(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return n.prototype.indexOfGroup=function(c){for(var o=0,u=0;u<c;u++)o+=this.groupSizes[u];return o},n.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,h=d;c>=h;)if((h<<=1)<0)throw wn(16,"".concat(c));this.groupSizes=new Uint32Array(h),this.groupSizes.set(u),this.length=h;for(var p=d;p<h;p++)this.groupSizes[p]=0}for(var b=this.indexOfGroup(c+1),y=(p=0,o.length);p<y;p++)this.tag.insertRule(b,o[p])&&(this.groupSizes[c]++,b++)},n.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],u=this.indexOfGroup(c),d=u+o;this.groupSizes[c]=0;for(var h=u;h<d;h++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var u=this.groupSizes[c],d=this.indexOfGroup(c),h=d+u,p=d;p<h;p++)o+="".concat(this.tag.getRule(p)).concat(uf);return o},n})(),jc=new Map,wc=new Map,zc=1,bl=function(n){if(jc.has(n))return jc.get(n);for(;wc.has(zc);)zc++;var c=zc++;return jc.set(n,c),wc.set(c,n),c},D4=function(n,c){zc=c+1,jc.set(n,c),wc.set(c,n)},_4="style[".concat(zl,"][").concat(Cm,'="').concat($c,'"]'),N4=new RegExp("^".concat(zl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),U4=function(n,c,o){for(var u,d=o.split(","),h=0,p=d.length;h<p;h++)(u=d[h])&&n.registerName(c,u)},H4=function(n,c){for(var o,u=((o=c.textContent)!==null&&o!==void 0?o:"").split(uf),d=[],h=0,p=u.length;h<p;h++){var b=u[h].trim();if(b){var y=b.match(N4);if(y){var g=0|parseInt(y[1],10),E=y[2];g!==0&&(D4(E,g),U4(n,E,y[3]),n.getTag().insertRules(g,d)),d.length=0}else d.push(b)}}},Lh=function(n){for(var c=document.querySelectorAll(_4),o=0,u=c.length;o<u;o++){var d=c[o];d&&d.getAttribute(zl)!==Em&&(H4(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function $4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Nm=function(n){var c=document.head,o=n||c,u=document.createElement("style"),d=(function(b){var y=Array.from(b.querySelectorAll("style[".concat(zl,"]")));return y[y.length-1]})(o),h=d!==void 0?d.nextSibling:null;u.setAttribute(zl,Em),u.setAttribute(Cm,$c);var p=$4();return p&&u.setAttribute("nonce",p),o.insertBefore(u,h),u},B4=(function(){function n(c){this.element=Nm(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,d=0,h=u.length;d<h;d++){var p=u[d];if(p.ownerNode===o)return p}throw wn(17)})(this.element),this.length=0}return n.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},n.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},n})(),L4=(function(){function n(c){this.element=Nm(c),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[c]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},n.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},n})(),q4=(function(){function n(c){this.rules=[],this.length=0}return n.prototype.insertRule=function(c,o){return c<=this.length&&(this.rules.splice(c,0,o),this.length++,!0)},n.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},n.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},n})(),qh=Ac,Y4={isServer:!Ac,useCSSOMInjection:!y4},Oc=(function(){function n(c,o,u){c===void 0&&(c=El),o===void 0&&(o={});var d=this;this.options=Pe(Pe({},Y4),c),this.gs=o,this.names=new Map(u),this.server=!!c.isServer,!this.server&&Ac&&qh&&(qh=!1,Lh(this)),sf(this,function(){return(function(h){for(var p=h.getTag(),b=p.length,y="",g=function(j){var R=(function(Q){return wc.get(Q)})(j);if(R===void 0)return"continue";var O=h.names.get(R),q=p.getGroup(j);if(O===void 0||!O.size||q.length===0)return"continue";var G="".concat(zl,".g").concat(j,'[id="').concat(R,'"]'),X="";O!==void 0&&O.forEach(function(Q){Q.length>0&&(X+="".concat(Q,","))}),y+="".concat(q).concat(G,'{content:"').concat(X,'"}').concat(uf)},E=0;E<b;E++)g(E);return y})(d)})}return n.registerId=function(c){return bl(c)},n.prototype.rehydrate=function(){!this.server&&Ac&&Lh(this)},n.prototype.reconstructWithOptions=function(c,o){return o===void 0&&(o=!0),new n(Pe(Pe({},this.options),c),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(o){var u=o.useCSSOMInjection,d=o.target;return o.isServer?new q4(d):u?new B4(d):new L4(d)})(this.options),new R4(c)));var c},n.prototype.hasNameForId=function(c,o){return this.names.has(c)&&this.names.get(c).has(o)},n.prototype.registerName=function(c,o){if(bl(c),this.names.has(c))this.names.get(c).add(o);else{var u=new Set;u.add(o),this.names.set(c,u)}},n.prototype.insertRules=function(c,o,u){this.registerName(c,o),this.getTag().insertRules(bl(c),u)},n.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},n.prototype.clearRules=function(c){this.getTag().clearGroup(bl(c)),this.clearNames(c)},n.prototype.clearTag=function(){this.tag=void 0},n})(),G4=/&/g,Sl=47;function Yh(n){if(n.indexOf("}")===-1)return!1;for(var c=n.length,o=0,u=0,d=!1,h=0;h<c;h++){var p=n.charCodeAt(h);if(u!==0||d||p!==Sl||n.charCodeAt(h+1)!==42)if(d)p===42&&n.charCodeAt(h+1)===Sl&&(d=!1,h++);else if(p!==34&&p!==39||h!==0&&n.charCodeAt(h-1)===92){if(u===0){if(p===123)o++;else if(p===125&&--o<0)return!0}}else u===0?u=p:u===p&&(u=0);else d=!0,h++}return o!==0||u!==0}function Um(n,c){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(u){return"".concat(c," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Um(o.children,c)),o})}function V4(n){var c,o,u,d=El,h=d.options,p=h===void 0?El:h,b=d.plugins,y=b===void 0?Bc:b,g=function(R,O,q){return q.startsWith(o)&&q.endsWith(o)&&q.replaceAll(o,"").length>0?".".concat(c):R},E=y.slice();E.push(function(R){R.type===_c&&R.value.includes("&")&&(R.props[0]=R.props[0].replace(G4,o).replace(u,g))}),p.prefix&&E.push(p4),E.push(d4);var j=function(R,O,q,G){O===void 0&&(O=""),q===void 0&&(q=""),G===void 0&&(G="&"),c=G,o=O,u=new RegExp("\\".concat(o,"\\b"),"g");var X=(function(L){if(!Yh(L))return L;for(var W=L.length,P="",Y=0,D=0,K=0,re=!1,se=0;se<W;se++){var Be=L.charCodeAt(se);if(K!==0||re||Be!==Sl||L.charCodeAt(se+1)!==42)if(re)Be===42&&L.charCodeAt(se+1)===Sl&&(re=!1,se++);else if(Be!==34&&Be!==39||se!==0&&L.charCodeAt(se-1)===92){if(K===0)if(Be===123)D++;else if(Be===125){if(--D<0){for(var Re=se+1;Re<W;){var gt=L.charCodeAt(Re);if(gt===59||gt===10)break;Re++}Re<W&&L.charCodeAt(Re)===59&&Re++,D=0,se=Re-1,Y=Re;continue}D===0&&(P+=L.substring(Y,se+1),Y=se+1)}else Be===59&&D===0&&(P+=L.substring(Y,se+1),Y=se+1)}else K===0?K=Be:K===Be&&(K=0);else re=!0,se++}if(Y<W){var ut=L.substring(Y);Yh(ut)||(P+=ut)}return P})((function(L){if(L.indexOf("//")===-1)return L;for(var W=L.length,P=[],Y=0,D=0,K=0,re=0;D<W;){var se=L.charCodeAt(D);if(se!==34&&se!==39||D!==0&&L.charCodeAt(D-1)===92)if(K===0)if(se===40&&D>=3&&(32|L.charCodeAt(D-1))==108&&(32|L.charCodeAt(D-2))==114&&(32|L.charCodeAt(D-3))==117)re=1,D++;else if(re>0)se===41?re--:se===40&&re++,D++;else if(se===Sl&&D+1<W&&L.charCodeAt(D+1)===Sl){for(D>Y&&P.push(L.substring(Y,D));D<W&&L.charCodeAt(D)!==10;)D++;Y=D}else D++;else D++;else K===0?K=se:K===se&&(K=0),D++}return Y===0?L:(Y<W&&P.push(L.substring(Y)),P.join(""))})(R)),Q=s4(q||O?"".concat(q," ").concat(O," { ").concat(X," }"):X);p.namespace&&(Q=Um(Q,p.namespace));var V=[];return Tc(Q,h4(E.concat(m4(function(L){return V.push(L)})))),V};return j.hash=y.length?y.reduce(function(R,O){return O.name||wn(15),xl(R,O.name)},5381).toString():"",j}var X4=new Oc,Ws=V4(),Is={shouldForwardProp:void 0,styleSheet:X4,stylis:Ws},Hm=ca?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(Is)}}:Ue.createContext(Is);Hm.Consumer;ca||Ue.createContext(void 0);function Ps(){return ca?Is:Ue.useContext(Hm)}var Q4=(function(){function n(c,o){var u=this;this.inject=function(d,h){h===void 0&&(h=Ws);var p=u.name+h.hash;d.hasNameForId(u.id,p)||d.insertRules(u.id,p,h(u.rules,p,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,sf(this,function(){throw wn(12,String(u.name))})}return n.prototype.getName=function(c){return c===void 0&&(c=Ws),this.name+c.hash},n})();function Z4(n,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||n in g4||n.startsWith("--")?String(c).trim():"".concat(c,"px")}var k4=function(n){return n>="A"&&n<="Z"};function Gh(n){for(var c="",o=0;o<n.length;o++){var u=n[o];if(o===1&&u==="-"&&n[0]==="-")return n;k4(u)?c+="-"+u.toLowerCase():c+=u}return c.startsWith("ms-")?"-"+c:c}var $m=function(n){return n==null||n===!1||n===""},Bm=function(n){var c=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!$m(u)&&(Array.isArray(u)&&u.isCss||An(u)?c.push("".concat(Gh(o),":"),u,";"):Ni(u)?c.push.apply(c,Di(Di(["".concat(o," {")],Bm(u),!1),["}"],!1)):c.push("".concat(Gh(o),": ").concat(Z4(o,u),";")))}return c};function ln(n,c,o,u){if($m(n))return[];if(of(n))return[".".concat(n.styledComponentId)];if(An(n)){if(!An(h=n)||h.prototype&&h.prototype.isReactComponent||!c)return[n];var d=n(c);return ln(d,c,o,u)}var h;return n instanceof Q4?o?(n.inject(o,u),[n.getName(u)]):[n]:Ni(n)?Bm(n):Array.isArray(n)?Array.prototype.concat.apply(Bc,n.map(function(p){return ln(p,c,o,u)})):[n.toString()]}function Lm(n){for(var c=0;c<n.length;c+=1){var o=n[c];if(An(o)&&!of(o))return!1}return!0}var J4=wm($c),K4=(function(){function n(c,o,u){this.rules=c,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Lm(c),this.componentId=o,this.baseHash=xl(J4,o),this.baseStyle=u,Oc.registerId(o)}return n.prototype.generateAndInjectStyles=function(c,o,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=Cn(d,this.staticRulesId);else{var h=Ks(ln(this.rules,c,o,u)),p=Js(xl(this.baseHash,h)>>>0);if(!o.hasNameForId(this.componentId,p)){var b=u(h,".".concat(p),void 0,this.componentId);o.insertRules(this.componentId,p,b)}d=Cn(d,p),this.staticRulesId=p}else{for(var y=xl(this.baseHash,u.hash),g="",E=0;E<this.rules.length;E++){var j=this.rules[E];if(typeof j=="string")g+=j;else if(j){var R=Ks(ln(j,c,o,u));y=xl(y,R+E),g+=R}}if(g){var O=Js(y>>>0);if(!o.hasNameForId(this.componentId,O)){var q=u(g,".".concat(O),void 0,this.componentId);o.insertRules(this.componentId,O,q)}d=Cn(d,O)}}return{className:d,css:typeof window>"u"?o.getTag().getGroup(bl(this.componentId)):""}},n})(),Ui=ca?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:Ue.createContext(void 0);Ui.Consumer;function F4(n){if(ca)return n.children;var c=Ue.useContext(Ui),o=Ue.useMemo(function(){return(function(u,d){if(!u)throw wn(14);if(An(u)){var h=u(d);return h}if(Array.isArray(u)||typeof u!="object")throw wn(8);return d?Pe(Pe({},d),u):u})(n.theme,c)},[n.theme,c]);return n.children?Ue.createElement(Ui.Provider,{value:o},n.children):null}var ps={};function W4(n,c,o){var u=of(n),d=n,h=!ms(n),p=c.attrs,b=p===void 0?Bc:p,y=c.componentId,g=y===void 0?(function(W,P){var Y=typeof W!="string"?"sc":Nh(W);ps[Y]=(ps[Y]||0)+1;var D="".concat(Y,"-").concat(Om($c+Y+ps[Y]));return P?"".concat(P,"-").concat(D):D})(c.displayName,c.parentComponentId):y,E=c.displayName,j=E===void 0?(function(W){return ms(W)?"styled.".concat(W):"Styled(".concat(j4(W),")")})(n):E,R=c.displayName&&c.componentId?"".concat(Nh(c.displayName),"-").concat(c.componentId):c.componentId||g,O=u&&d.attrs?d.attrs.concat(b).filter(Boolean):b,q=c.shouldForwardProp;if(u&&d.shouldForwardProp){var G=d.shouldForwardProp;if(c.shouldForwardProp){var X=c.shouldForwardProp;q=function(W,P){return G(W,P)&&X(W,P)}}else q=G}var Q=new K4(o,R,u?d.componentStyle:void 0);function V(W,P){return(function(Y,D,K){var re=Y.attrs,se=Y.componentStyle,Be=Y.defaultProps,Re=Y.foldedComponentIds,gt=Y.styledComponentId,ut=Y.target,yt=ca?void 0:Ue.useContext(Ui),U=Ps(),Z=Y.shouldForwardProp||U.shouldForwardProp,te=Tm(D,yt,Be)||El,fe=(function(Ve,Te,ea){for(var ta,vt=Pe(Pe({},Te),{className:void 0,theme:ea}),Mn=0;Mn<Ve.length;Mn+=1){var Dt=An(ta=Ve[Mn])?ta(vt):ta;for(var aa in Dt)aa==="className"?vt.className=Cn(vt.className,Dt[aa]):aa==="style"?vt.style=Pe(Pe({},vt.style),Dt[aa]):vt[aa]=Dt[aa]}return"className"in Te&&typeof Te.className=="string"&&(vt.className=Cn(vt.className,Te.className)),vt})(re,D,te),xe=fe.as||ut,z={};for(var H in fe)fe[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&fe.theme===te||(H==="forwardedAs"?z.as=fe.forwardedAs:Z&&!Z(H,xe)||(z[H]=fe[H]));var k=(function(Ve,Te){var ea=Ps(),ta=Ve.generateAndInjectStyles(Te,ea.styleSheet,ea.stylis);return ta})(se,fe),J=k.className,ne=k.css,ce=Cn(Re,gt);J&&(ce+=" "+J),fe.className&&(ce+=" "+fe.className),z[ms(xe)&&!Am.has(xe)?"class":"className"]=ce,K&&(z.ref=K);var ye=A.createElement(xe,z);return ca&&ne?Ue.createElement(Ue.Fragment,null,Ue.createElement("style",{precedence:"styled-components",href:"sc-".concat(gt,"-").concat(J),children:ne}),ye):ye})(L,W,P)}V.displayName=j;var L=Ue.forwardRef(V);return L.attrs=O,L.componentStyle=Q,L.displayName=j,L.shouldForwardProp=q,L.foldedComponentIds=u?Cn(d.foldedComponentIds,d.styledComponentId):"",L.styledComponentId=R,L.target=u?d.target:n,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=u?(function(P){for(var Y=[],D=1;D<arguments.length;D++)Y[D-1]=arguments[D];for(var K=0,re=Y;K<re.length;K++)Fs(P,re[K],!0);return P})({},d.defaultProps,W):W}}),sf(L,function(){return".".concat(L.styledComponentId)}),h&&_m(L,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function Vh(n,c){for(var o=[n[0]],u=0,d=c.length;u<d;u+=1)o.push(c[u],n[u+1]);return o}var Xh=function(n){return Object.assign(n,{isCss:!0})};function qm(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(An(n)||Ni(n))return Xh(ln(Vh(Bc,Di([n],c,!0))));var u=n;return c.length===0&&u.length===1&&typeof u[0]=="string"?ln(u):Xh(ln(Vh(u,c)))}function ef(n,c,o){if(o===void 0&&(o=El),!c)throw wn(1,c);var u=function(d){for(var h=[],p=1;p<arguments.length;p++)h[p-1]=arguments[p];return n(c,o,qm.apply(void 0,Di([d],h,!1)))};return u.attrs=function(d){return ef(n,c,Pe(Pe({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return ef(n,c,Pe(Pe({},o),d))},u}var Ym=function(n){return ef(W4,n)},x=Ym;Am.forEach(function(n){x[n]=Ym(n)});var I4=(function(){function n(c,o){this.rules=c,this.componentId=o,this.isStatic=Lm(c),Oc.registerId(this.componentId+1)}return n.prototype.createStyles=function(c,o,u,d){var h=d(Ks(ln(this.rules,o,u,d)),""),p=this.componentId+c;u.insertRules(p,p,h)},n.prototype.removeStyles=function(c,o){o.clearRules(this.componentId+c)},n.prototype.renderStyles=function(c,o,u,d){c>2&&Oc.registerId(this.componentId+c);var h=this.componentId+c;this.isStatic?u.hasNameForId(h,h)||this.createStyles(c,o,u,d):(this.removeStyles(c,u),this.createStyles(c,o,u,d))},n})();function P4(n){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];var u=qm.apply(void 0,Di([n],c,!1)),d="sc-global-".concat(Om(JSON.stringify(u))),h=new I4(u,d),p=new WeakMap,b=function(y){var g=Ps(),E=ca?void 0:Ue.useContext(Ui),j=p.get(g.styleSheet);if(j===void 0&&(j=g.styleSheet.allocateGSInstance(d),p.set(g.styleSheet,j)),(typeof window>"u"||!g.styleSheet.server)&&(function(X,Q,V,L,W){if(h.isStatic)h.renderStyles(X,v4,V,W);else{var P=Pe(Pe({},Q),{theme:Tm(Q,L,b.defaultProps)});h.renderStyles(X,P,V,W)}})(j,y,g.styleSheet,E,g.stylis),!ca){var R=Ue.useRef(!0);Ue.useLayoutEffect(function(){return R.current=!1,function(){R.current=!0,queueMicrotask(function(){R.current&&(h.removeStyles(j,g.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(d,'"]')).forEach(function(X){return X.remove()}))})}},[j,g.styleSheet])}if(ca){var O=d+j,q=typeof window>"u"?g.styleSheet.getTag().getGroup(bl(O)):"";if(q){var G="".concat(d,"-").concat(j);return Ue.createElement("style",{key:G,"data-styled-global":d,precedence:"styled-components",href:G,children:q})}}return null};return Ue.memo(b)}var Qh="popstate";function ey(n={}){function c(u,d){let{pathname:h,search:p,hash:b}=u.location;return tf("",{pathname:h,search:p,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(u,d){return typeof d=="string"?d:Hi(d)}return ay(c,o,null,n)}function $e(n,c){if(n===!1||n===null||typeof n>"u")throw new Error(c)}function Xt(n,c){if(!n){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function ty(){return Math.random().toString(36).substring(2,10)}function Zh(n,c){return{usr:n.state,key:n.key,idx:c}}function tf(n,c,o=null,u){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof c=="string"?Tl(c):c,state:o,key:c&&c.key||u||ty()}}function Hi({pathname:n="/",search:c="",hash:o=""}){return c&&c!=="?"&&(n+=c.charAt(0)==="?"?c:"?"+c),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function Tl(n){let c={};if(n){let o=n.indexOf("#");o>=0&&(c.hash=n.substring(o),n=n.substring(0,o));let u=n.indexOf("?");u>=0&&(c.search=n.substring(u),n=n.substring(0,u)),n&&(c.pathname=n)}return c}function ay(n,c,o,u={}){let{window:d=document.defaultView,v5Compat:h=!1}=u,p=d.history,b="POP",y=null,g=E();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function E(){return(p.state||{idx:null}).idx}function j(){b="POP";let X=E(),Q=X==null?null:X-g;g=X,y&&y({action:b,location:G.location,delta:Q})}function R(X,Q){b="PUSH";let V=tf(G.location,X,Q);g=E()+1;let L=Zh(V,g),W=G.createHref(V);try{p.pushState(L,"",W)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;d.location.assign(W)}h&&y&&y({action:b,location:G.location,delta:1})}function O(X,Q){b="REPLACE";let V=tf(G.location,X,Q);g=E();let L=Zh(V,g),W=G.createHref(V);p.replaceState(L,"",W),h&&y&&y({action:b,location:G.location,delta:0})}function q(X){return ny(X)}let G={get action(){return b},get location(){return n(d,p)},listen(X){if(y)throw new Error("A history only accepts one active listener");return d.addEventListener(Qh,j),y=X,()=>{d.removeEventListener(Qh,j),y=null}},createHref(X){return c(d,X)},createURL:q,encodeLocation(X){let Q=q(X);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:R,replace:O,go(X){return p.go(X)}};return G}function ny(n,c=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),$e(o,"No window.location.(origin|href) available to create URL");let u=typeof n=="string"?n:Hi(n);return u=u.replace(/ $/,"%20"),!c&&u.startsWith("//")&&(u=o+u),new URL(u,o)}function Gm(n,c,o="/"){return ly(n,c,o,!1)}function ly(n,c,o,u){let d=typeof c=="string"?Tl(c):c,h=Oa(d.pathname||"/",o);if(h==null)return null;let p=Vm(n);iy(p);let b=null;for(let y=0;b==null&&y<p.length;++y){let g=gy(h);b=my(p[y],g,u)}return b}function Vm(n,c=[],o=[],u="",d=!1){let h=(p,b,y=d,g)=>{let E={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:b,route:p};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(u)&&y)return;$e(E.relativePath.startsWith(u),`Absolute route path "${E.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(u.length)}let j=wa([u,E.relativePath]),R=o.concat(E);p.children&&p.children.length>0&&($e(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${j}".`),Vm(p.children,c,R,j,y)),!(p.path==null&&!p.index)&&c.push({path:j,score:dy(j,p.index),routesMeta:R})};return n.forEach((p,b)=>{if(p.path===""||!p.path?.includes("?"))h(p,b);else for(let y of Xm(p.path))h(p,b,!0,y)}),c}function Xm(n){let c=n.split("/");if(c.length===0)return[];let[o,...u]=c,d=o.endsWith("?"),h=o.replace(/\?$/,"");if(u.length===0)return d?[h,""]:[h];let p=Xm(u.join("/")),b=[];return b.push(...p.map(y=>y===""?h:[h,y].join("/"))),d&&b.push(...p),b.map(y=>n.startsWith("/")&&y===""?"/":y)}function iy(n){n.sort((c,o)=>c.score!==o.score?o.score-c.score:hy(c.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var ry=/^:[\w-]+$/,cy=3,uy=2,oy=1,sy=10,fy=-2,kh=n=>n==="*";function dy(n,c){let o=n.split("/"),u=o.length;return o.some(kh)&&(u+=fy),c&&(u+=uy),o.filter(d=>!kh(d)).reduce((d,h)=>d+(ry.test(h)?cy:h===""?oy:sy),u)}function hy(n,c){return n.length===c.length&&n.slice(0,-1).every((u,d)=>u===c[d])?n[n.length-1]-c[c.length-1]:0}function my(n,c,o=!1){let{routesMeta:u}=n,d={},h="/",p=[];for(let b=0;b<u.length;++b){let y=u[b],g=b===u.length-1,E=h==="/"?c:c.slice(h.length)||"/",j=Mc({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},E),R=y.route;if(!j&&g&&o&&!u[u.length-1].route.index&&(j=Mc({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},E)),!j)return null;Object.assign(d,j.params),p.push({params:d,pathname:wa([h,j.pathname]),pathnameBase:by(wa([h,j.pathnameBase])),route:R}),j.pathnameBase!=="/"&&(h=wa([h,j.pathnameBase]))}return p}function Mc(n,c){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,u]=py(n.path,n.caseSensitive,n.end),d=c.match(o);if(!d)return null;let h=d[0],p=h.replace(/(.)\/+$/,"$1"),b=d.slice(1);return{params:u.reduce((g,{paramName:E,isOptional:j},R)=>{if(E==="*"){let q=b[R]||"";p=h.slice(0,h.length-q.length).replace(/(.)\/+$/,"$1")}const O=b[R];return j&&!O?g[E]=void 0:g[E]=(O||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:p,pattern:n}}function py(n,c=!1,o=!0){Xt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let u=[],d="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,b,y)=>(u.push({paramName:b,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(u.push({paramName:"*"}),d+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":n!==""&&n!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,c?void 0:"i"),u]}function gy(n){try{return n.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Xt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),n}}function Oa(n,c){if(c==="/")return n;if(!n.toLowerCase().startsWith(c.toLowerCase()))return null;let o=c.endsWith("/")?c.length-1:c.length,u=n.charAt(o);return u&&u!=="/"?null:n.slice(o)||"/"}var yy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function vy(n,c="/"){let{pathname:o,search:u="",hash:d=""}=typeof n=="string"?Tl(n):n,h;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?h=Jh(o.substring(1),"/"):h=Jh(o,c)):h=c,{pathname:h,search:Sy(u),hash:jy(d)}}function Jh(n,c){let o=c.replace(/\/+$/,"").split("/");return n.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function gs(n,c,o,u){return`Cannot include a '${n}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xy(n){return n.filter((c,o)=>o===0||c.route.path&&c.route.path.length>0)}function ff(n){let c=xy(n);return c.map((o,u)=>u===c.length-1?o.pathname:o.pathnameBase)}function df(n,c,o,u=!1){let d;typeof n=="string"?d=Tl(n):(d={...n},$e(!d.pathname||!d.pathname.includes("?"),gs("?","pathname","search",d)),$e(!d.pathname||!d.pathname.includes("#"),gs("#","pathname","hash",d)),$e(!d.search||!d.search.includes("#"),gs("#","search","hash",d)));let h=n===""||d.pathname==="",p=h?"/":d.pathname,b;if(p==null)b=o;else{let j=c.length-1;if(!u&&p.startsWith("..")){let R=p.split("/");for(;R[0]==="..";)R.shift(),j-=1;d.pathname=R.join("/")}b=j>=0?c[j]:"/"}let y=vy(d,b),g=p&&p!=="/"&&p.endsWith("/"),E=(h||p===".")&&o.endsWith("/");return!y.pathname.endsWith("/")&&(g||E)&&(y.pathname+="/"),y}var wa=n=>n.join("/").replace(/\/\/+/g,"/"),by=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Sy=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,jy=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,zy=class{constructor(n,c,o,u=!1){this.status=n,this.statusText=c||"",this.internal=u,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function Ey(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function Cy(n){return n.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Qm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Zm(n,c){let o=n;if(typeof o!="string"||!yy.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let u=o,d=!1;if(Qm)try{let h=new URL(window.location.href),p=o.startsWith("//")?new URL(h.protocol+o):new URL(o),b=Oa(p.pathname,c);p.origin===h.origin&&b!=null?o=b+p.search+p.hash:d=!0}catch{Xt(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:d,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var km=["POST","PUT","PATCH","DELETE"];new Set(km);var Ty=["GET",...km];new Set(Ty);var Al=A.createContext(null);Al.displayName="DataRouter";var Lc=A.createContext(null);Lc.displayName="DataRouterState";var Ay=A.createContext(!1),Jm=A.createContext({isTransitioning:!1});Jm.displayName="ViewTransition";var wy=A.createContext(new Map);wy.displayName="Fetchers";var Oy=A.createContext(null);Oy.displayName="Await";var Mt=A.createContext(null);Mt.displayName="Navigation";var Bi=A.createContext(null);Bi.displayName="Location";var Wt=A.createContext({outlet:null,matches:[],isDataRoute:!1});Wt.displayName="Route";var hf=A.createContext(null);hf.displayName="RouteError";var Km="REACT_ROUTER_ERROR",My="REDIRECT",Ry="ROUTE_ERROR_RESPONSE";function Dy(n){if(n.startsWith(`${Km}:${My}:{`))try{let c=JSON.parse(n.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function _y(n){if(n.startsWith(`${Km}:${Ry}:{`))try{let c=JSON.parse(n.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new zy(c.status,c.statusText,c.data)}catch{}}function Ny(n,{relative:c}={}){$e(wl(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=A.useContext(Mt),{hash:d,pathname:h,search:p}=Li(n,{relative:c}),b=h;return o!=="/"&&(b=h==="/"?o:wa([o,h])),u.createHref({pathname:b,search:p,hash:d})}function wl(){return A.useContext(Bi)!=null}function Ma(){return $e(wl(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Bi).location}var Fm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Wm(n){A.useContext(Mt).static||A.useLayoutEffect(n)}function Rt(){let{isDataRoute:n}=A.useContext(Wt);return n?Jy():Uy()}function Uy(){$e(wl(),"useNavigate() may be used only in the context of a <Router> component.");let n=A.useContext(Al),{basename:c,navigator:o}=A.useContext(Mt),{matches:u}=A.useContext(Wt),{pathname:d}=Ma(),h=JSON.stringify(ff(u)),p=A.useRef(!1);return Wm(()=>{p.current=!0}),A.useCallback((y,g={})=>{if(Xt(p.current,Fm),!p.current)return;if(typeof y=="number"){o.go(y);return}let E=df(y,JSON.parse(h),d,g.relative==="path");n==null&&c!=="/"&&(E.pathname=E.pathname==="/"?c:wa([c,E.pathname])),(g.replace?o.replace:o.push)(E,g.state,g)},[c,o,h,d,n])}A.createContext(null);function Hy(){let{matches:n}=A.useContext(Wt),c=n[n.length-1];return c?c.params:{}}function Li(n,{relative:c}={}){let{matches:o}=A.useContext(Wt),{pathname:u}=Ma(),d=JSON.stringify(ff(o));return A.useMemo(()=>df(n,JSON.parse(d),u,c==="path"),[n,d,u,c])}function $y(n,c){return Im(n,c)}function Im(n,c,o,u,d){$e(wl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=A.useContext(Mt),{matches:p}=A.useContext(Wt),b=p[p.length-1],y=b?b.params:{},g=b?b.pathname:"/",E=b?b.pathnameBase:"/",j=b&&b.route;{let V=j&&j.path||"";ep(g,!j||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let R=Ma(),O;if(c){let V=typeof c=="string"?Tl(c):c;$e(E==="/"||V.pathname?.startsWith(E),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${V.pathname}" was given in the \`location\` prop.`),O=V}else O=R;let q=O.pathname||"/",G=q;if(E!=="/"){let V=E.replace(/^\//,"").split("/");G="/"+q.replace(/^\//,"").split("/").slice(V.length).join("/")}let X=Gm(n,{pathname:G});Xt(j||X!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),Xt(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=Gy(X&&X.map(V=>Object.assign({},V,{params:Object.assign({},y,V.params),pathname:wa([E,h.encodeLocation?h.encodeLocation(V.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?E:wa([E,h.encodeLocation?h.encodeLocation(V.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathnameBase])})),p,o,u,d);return c&&Q?A.createElement(Bi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},Q):Q}function By(){let n=ky(),c=Ey(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},p=null;return console.error("Error handled by React Router default ErrorBoundary:",n),p=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:h},"ErrorBoundary")," or"," ",A.createElement("code",{style:h},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},c),o?A.createElement("pre",{style:d},o):null,p)}var Ly=A.createElement(By,null),Pm=class extends A.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,c){return c.location!==n.location||c.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:c.error,location:c.location,revalidation:n.revalidation||c.revalidation}}componentDidCatch(n,c){this.props.onError?this.props.onError(n,c):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const o=_y(n.digest);o&&(n=o)}let c=n!==void 0?A.createElement(Wt.Provider,{value:this.props.routeContext},A.createElement(hf.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?A.createElement(qy,{error:n},c):c}};Pm.contextType=Ay;var ys=new WeakMap;function qy({children:n,error:c}){let{basename:o}=A.useContext(Mt);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let u=Dy(c.digest);if(u){let d=ys.get(c);if(d)throw d;let h=Zm(u.location,o);if(Qm&&!ys.get(c))if(h.isExternal||u.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:u.replace}));throw ys.set(c,p),p}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return n}function Yy({routeContext:n,match:c,children:o}){let u=A.useContext(Al);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),A.createElement(Wt.Provider,{value:n},o)}function Gy(n,c=[],o=null,u=null,d=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(c.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let h=n,p=o?.errors;if(p!=null){let E=h.findIndex(j=>j.route.id&&p?.[j.route.id]!==void 0);$e(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,E+1))}let b=!1,y=-1;if(o)for(let E=0;E<h.length;E++){let j=h[E];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(y=E),j.route.id){let{loaderData:R,errors:O}=o,q=j.route.loader&&!R.hasOwnProperty(j.route.id)&&(!O||O[j.route.id]===void 0);if(j.route.lazy||q){b=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}let g=o&&u?(E,j)=>{u(E,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:Cy(o.matches),errorInfo:j})}:void 0;return h.reduceRight((E,j,R)=>{let O,q=!1,G=null,X=null;o&&(O=p&&j.route.id?p[j.route.id]:void 0,G=j.route.errorElement||Ly,b&&(y<0&&R===0?(ep("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,X=null):y===R&&(q=!0,X=j.route.hydrateFallbackElement||null)));let Q=c.concat(h.slice(0,R+1)),V=()=>{let L;return O?L=G:q?L=X:j.route.Component?L=A.createElement(j.route.Component,null):j.route.element?L=j.route.element:L=E,A.createElement(Yy,{match:j,routeContext:{outlet:E,matches:Q,isDataRoute:o!=null},children:L})};return o&&(j.route.ErrorBoundary||j.route.errorElement||R===0)?A.createElement(Pm,{location:o.location,revalidation:o.revalidation,component:G,error:O,children:V(),routeContext:{outlet:null,matches:Q,isDataRoute:!0},onError:g}):V()},null)}function mf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vy(n){let c=A.useContext(Al);return $e(c,mf(n)),c}function Xy(n){let c=A.useContext(Lc);return $e(c,mf(n)),c}function Qy(n){let c=A.useContext(Wt);return $e(c,mf(n)),c}function pf(n){let c=Qy(n),o=c.matches[c.matches.length-1];return $e(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function Zy(){return pf("useRouteId")}function ky(){let n=A.useContext(hf),c=Xy("useRouteError"),o=pf("useRouteError");return n!==void 0?n:c.errors?.[o]}function Jy(){let{router:n}=Vy("useNavigate"),c=pf("useNavigate"),o=A.useRef(!1);return Wm(()=>{o.current=!0}),A.useCallback(async(d,h={})=>{Xt(o.current,Fm),o.current&&(typeof d=="number"?await n.navigate(d):await n.navigate(d,{fromRouteId:c,...h}))},[n,c])}var Kh={};function ep(n,c,o){!c&&!Kh[n]&&(Kh[n]=!0,Xt(!1,o))}A.memo(Ky);function Ky({routes:n,future:c,state:o,onError:u}){return Im(n,void 0,o,u,c)}function vs({to:n,replace:c,state:o,relative:u}){$e(wl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=A.useContext(Mt);Xt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=A.useContext(Wt),{pathname:p}=Ma(),b=Rt(),y=df(n,ff(h),p,u==="path"),g=JSON.stringify(y);return A.useEffect(()=>{b(JSON.parse(g),{replace:c,state:o,relative:u})},[b,g,u,c,o]),null}function rt(n){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Fy({basename:n="/",children:c=null,location:o,navigationType:u="POP",navigator:d,static:h=!1,unstable_useTransitions:p}){$e(!wl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=n.replace(/^\/*/,"/"),y=A.useMemo(()=>({basename:b,navigator:d,static:h,unstable_useTransitions:p,future:{}}),[b,d,h,p]);typeof o=="string"&&(o=Tl(o));let{pathname:g="/",search:E="",hash:j="",state:R=null,key:O="default"}=o,q=A.useMemo(()=>{let G=Oa(g,b);return G==null?null:{location:{pathname:G,search:E,hash:j,state:R,key:O},navigationType:u}},[b,g,E,j,R,O,u]);return Xt(q!=null,`<Router basename="${b}"> is not able to match the URL "${g}${E}${j}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:A.createElement(Mt.Provider,{value:y},A.createElement(Bi.Provider,{children:c,value:q}))}function Wy({children:n,location:c}){return $y(af(n),c)}function af(n,c=[]){let o=[];return A.Children.forEach(n,(u,d)=>{if(!A.isValidElement(u))return;let h=[...c,d];if(u.type===A.Fragment){o.push.apply(o,af(u.props.children,h));return}$e(u.type===rt,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!u.props.index||!u.props.children,"An index route cannot have child routes.");let p={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(p.children=af(u.props.children,h)),o.push(p)}),o}var Ec="get",Cc="application/x-www-form-urlencoded";function qc(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function Iy(n){return qc(n)&&n.tagName.toLowerCase()==="button"}function Py(n){return qc(n)&&n.tagName.toLowerCase()==="form"}function ev(n){return qc(n)&&n.tagName.toLowerCase()==="input"}function tv(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function av(n,c){return n.button===0&&(!c||c==="_self")&&!tv(n)}function nf(n=""){return new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((c,o)=>{let u=n[o];return c.concat(Array.isArray(u)?u.map(d=>[o,d]):[[o,u]])},[]))}function nv(n,c){let o=nf(n);return c&&c.forEach((u,d)=>{o.has(d)||c.getAll(d).forEach(h=>{o.append(d,h)})}),o}var ic=null;function lv(){if(ic===null)try{new FormData(document.createElement("form"),0),ic=!1}catch{ic=!0}return ic}var iv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xs(n){return n!=null&&!iv.has(n)?(Xt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cc}"`),null):n}function rv(n,c){let o,u,d,h,p;if(Py(n)){let b=n.getAttribute("action");u=b?Oa(b,c):null,o=n.getAttribute("method")||Ec,d=xs(n.getAttribute("enctype"))||Cc,h=new FormData(n)}else if(Iy(n)||ev(n)&&(n.type==="submit"||n.type==="image")){let b=n.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=n.getAttribute("formaction")||b.getAttribute("action");if(u=y?Oa(y,c):null,o=n.getAttribute("formmethod")||b.getAttribute("method")||Ec,d=xs(n.getAttribute("formenctype"))||xs(b.getAttribute("enctype"))||Cc,h=new FormData(b,n),!lv()){let{name:g,type:E,value:j}=n;if(E==="image"){let R=g?`${g}.`:"";h.append(`${R}x`,"0"),h.append(`${R}y`,"0")}else g&&h.append(g,j)}}else{if(qc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Ec,u=null,d=Cc,p=n}return h&&d==="text/plain"&&(p=h,h=void 0),{action:u,method:o.toLowerCase(),encType:d,formData:h,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gf(n,c){if(n===!1||n===null||typeof n>"u")throw new Error(c)}function cv(n,c,o,u){let d=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${u}`:d.pathname=`${d.pathname}.${u}`:d.pathname==="/"?d.pathname=`_root.${u}`:c&&Oa(d.pathname,c)==="/"?d.pathname=`${c.replace(/\/$/,"")}/_root.${u}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${u}`,d}async function uv(n,c){if(n.id in c)return c[n.id];try{let o=await import(n.module);return c[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ov(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function sv(n,c,o){let u=await Promise.all(n.map(async d=>{let h=c.routes[d.route.id];if(h){let p=await uv(h,o);return p.links?p.links():[]}return[]}));return mv(u.flat(1).filter(ov).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Fh(n,c,o,u,d,h){let p=(y,g)=>o[g]?y.route.id!==o[g].route.id:!0,b=(y,g)=>o[g].pathname!==y.pathname||o[g].route.path?.endsWith("*")&&o[g].params["*"]!==y.params["*"];return h==="assets"?c.filter((y,g)=>p(y,g)||b(y,g)):h==="data"?c.filter((y,g)=>{let E=u.routes[y.route.id];if(!E||!E.hasLoader)return!1;if(p(y,g)||b(y,g))return!0;if(y.route.shouldRevalidate){let j=y.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function fv(n,c,{includeHydrateFallback:o}={}){return dv(n.map(u=>{let d=c.routes[u.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function dv(n){return[...new Set(n)]}function hv(n){let c={},o=Object.keys(n).sort();for(let u of o)c[u]=n[u];return c}function mv(n,c){let o=new Set;return new Set(c),n.reduce((u,d)=>{let h=JSON.stringify(hv(d));return o.has(h)||(o.add(h),u.push({key:h,link:d})),u},[])}function tp(){let n=A.useContext(Al);return gf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function pv(){let n=A.useContext(Lc);return gf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var yf=A.createContext(void 0);yf.displayName="FrameworkContext";function ap(){let n=A.useContext(yf);return gf(n,"You must render this element inside a <HydratedRouter> element"),n}function gv(n,c){let o=A.useContext(yf),[u,d]=A.useState(!1),[h,p]=A.useState(!1),{onFocus:b,onBlur:y,onMouseEnter:g,onMouseLeave:E,onTouchStart:j}=c,R=A.useRef(null);A.useEffect(()=>{if(n==="render"&&p(!0),n==="viewport"){let G=Q=>{Q.forEach(V=>{p(V.isIntersecting)})},X=new IntersectionObserver(G,{threshold:.5});return R.current&&X.observe(R.current),()=>{X.disconnect()}}},[n]),A.useEffect(()=>{if(u){let G=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(G)}}},[u]);let O=()=>{d(!0)},q=()=>{d(!1),p(!1)};return o?n!=="intent"?[h,R,{}]:[h,R,{onFocus:zi(b,O),onBlur:zi(y,q),onMouseEnter:zi(g,O),onMouseLeave:zi(E,q),onTouchStart:zi(j,O)}]:[!1,R,{}]}function zi(n,c){return o=>{n&&n(o),o.defaultPrevented||c(o)}}function yv({page:n,...c}){let{router:o}=tp(),u=A.useMemo(()=>Gm(o.routes,n,o.basename),[o.routes,n,o.basename]);return u?A.createElement(xv,{page:n,matches:u,...c}):null}function vv(n){let{manifest:c,routeModules:o}=ap(),[u,d]=A.useState([]);return A.useEffect(()=>{let h=!1;return sv(n,c,o).then(p=>{h||d(p)}),()=>{h=!0}},[n,c,o]),u}function xv({page:n,matches:c,...o}){let u=Ma(),{future:d,manifest:h,routeModules:p}=ap(),{basename:b}=tp(),{loaderData:y,matches:g}=pv(),E=A.useMemo(()=>Fh(n,c,g,h,u,"data"),[n,c,g,h,u]),j=A.useMemo(()=>Fh(n,c,g,h,u,"assets"),[n,c,g,h,u]),R=A.useMemo(()=>{if(n===u.pathname+u.search+u.hash)return[];let G=new Set,X=!1;if(c.forEach(V=>{let L=h.routes[V.route.id];!L||!L.hasLoader||(!E.some(W=>W.route.id===V.route.id)&&V.route.id in y&&p[V.route.id]?.shouldRevalidate||L.hasClientLoader?X=!0:G.add(V.route.id))}),G.size===0)return[];let Q=cv(n,b,d.unstable_trailingSlashAwareDataRequests,"data");return X&&G.size>0&&Q.searchParams.set("_routes",c.filter(V=>G.has(V.route.id)).map(V=>V.route.id).join(",")),[Q.pathname+Q.search]},[b,d.unstable_trailingSlashAwareDataRequests,y,u,h,E,c,n,p]),O=A.useMemo(()=>fv(j,h),[j,h]),q=vv(j);return A.createElement(A.Fragment,null,R.map(G=>A.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...o})),O.map(G=>A.createElement("link",{key:G,rel:"modulepreload",href:G,...o})),q.map(({key:G,link:X})=>A.createElement("link",{key:G,nonce:o.nonce,...X,crossOrigin:X.crossOrigin??o.crossOrigin})))}function bv(...n){return c=>{n.forEach(o=>{typeof o=="function"?o(c):o!=null&&(o.current=c)})}}var Sv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sv&&(window.__reactRouterVersion="7.13.0")}catch{}function jv({basename:n,children:c,unstable_useTransitions:o,window:u}){let d=A.useRef();d.current==null&&(d.current=ey({window:u,v5Compat:!0}));let h=d.current,[p,b]=A.useState({action:h.action,location:h.location}),y=A.useCallback(g=>{o===!1?b(g):A.startTransition(()=>b(g))},[o]);return A.useLayoutEffect(()=>h.listen(y),[h,y]),A.createElement(Fy,{basename:n,children:c,location:p.location,navigationType:p.action,navigator:h,unstable_useTransitions:o})}var np=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ft=A.forwardRef(function({onClick:c,discover:o="render",prefetch:u="none",relative:d,reloadDocument:h,replace:p,state:b,target:y,to:g,preventScrollReset:E,viewTransition:j,unstable_defaultShouldRevalidate:R,...O},q){let{basename:G,unstable_useTransitions:X}=A.useContext(Mt),Q=typeof g=="string"&&np.test(g),V=Zm(g,G);g=V.to;let L=Ny(g,{relative:d}),[W,P,Y]=gv(u,O),D=Tv(g,{replace:p,state:b,target:y,preventScrollReset:E,relative:d,viewTransition:j,unstable_defaultShouldRevalidate:R,unstable_useTransitions:X});function K(se){c&&c(se),se.defaultPrevented||D(se)}let re=A.createElement("a",{...O,...Y,href:V.absoluteURL||L,onClick:V.isExternal||h?c:K,ref:bv(q,P),target:y,"data-discover":!Q&&o==="render"?"true":void 0});return W&&!Q?A.createElement(A.Fragment,null,re,A.createElement(yv,{page:L})):re});Ft.displayName="Link";var zv=A.forwardRef(function({"aria-current":c="page",caseSensitive:o=!1,className:u="",end:d=!1,style:h,to:p,viewTransition:b,children:y,...g},E){let j=Li(p,{relative:g.relative}),R=Ma(),O=A.useContext(Lc),{navigator:q,basename:G}=A.useContext(Mt),X=O!=null&&Dv(j)&&b===!0,Q=q.encodeLocation?q.encodeLocation(j).pathname:j.pathname,V=R.pathname,L=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;o||(V=V.toLowerCase(),L=L?L.toLowerCase():null,Q=Q.toLowerCase()),L&&G&&(L=Oa(L,G)||L);const W=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let P=V===Q||!d&&V.startsWith(Q)&&V.charAt(W)==="/",Y=L!=null&&(L===Q||!d&&L.startsWith(Q)&&L.charAt(Q.length)==="/"),D={isActive:P,isPending:Y,isTransitioning:X},K=P?c:void 0,re;typeof u=="function"?re=u(D):re=[u,P?"active":null,Y?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let se=typeof h=="function"?h(D):h;return A.createElement(Ft,{...g,"aria-current":K,className:re,ref:E,style:se,to:p,viewTransition:b},typeof y=="function"?y(D):y)});zv.displayName="NavLink";var Ev=A.forwardRef(({discover:n="render",fetcherKey:c,navigate:o,reloadDocument:u,replace:d,state:h,method:p=Ec,action:b,onSubmit:y,relative:g,preventScrollReset:E,viewTransition:j,unstable_defaultShouldRevalidate:R,...O},q)=>{let{unstable_useTransitions:G}=A.useContext(Mt),X=Mv(),Q=Rv(b,{relative:g}),V=p.toLowerCase()==="get"?"get":"post",L=typeof b=="string"&&np.test(b),W=P=>{if(y&&y(P),P.defaultPrevented)return;P.preventDefault();let Y=P.nativeEvent.submitter,D=Y?.getAttribute("formmethod")||p,K=()=>X(Y||P.currentTarget,{fetcherKey:c,method:D,navigate:o,replace:d,state:h,relative:g,preventScrollReset:E,viewTransition:j,unstable_defaultShouldRevalidate:R});G&&o!==!1?A.startTransition(()=>K()):K()};return A.createElement("form",{ref:q,method:V,action:Q,onSubmit:u?y:W,...O,"data-discover":!L&&n==="render"?"true":void 0})});Ev.displayName="Form";function Cv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lp(n){let c=A.useContext(Al);return $e(c,Cv(n)),c}function Tv(n,{target:c,replace:o,state:u,preventScrollReset:d,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:b,unstable_useTransitions:y}={}){let g=Rt(),E=Ma(),j=Li(n,{relative:h});return A.useCallback(R=>{if(av(R,c)){R.preventDefault();let O=o!==void 0?o:Hi(E)===Hi(j),q=()=>g(n,{replace:O,state:u,preventScrollReset:d,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:b});y?A.startTransition(()=>q()):q()}},[E,g,j,o,u,c,n,d,h,p,b,y])}function Av(n){Xt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let c=A.useRef(nf(n)),o=A.useRef(!1),u=Ma(),d=A.useMemo(()=>nv(u.search,o.current?null:c.current),[u.search]),h=Rt(),p=A.useCallback((b,y)=>{const g=nf(typeof b=="function"?b(new URLSearchParams(d)):b);o.current=!0,h("?"+g,y)},[h,d]);return[d,p]}var wv=0,Ov=()=>`__${String(++wv)}__`;function Mv(){let{router:n}=lp("useSubmit"),{basename:c}=A.useContext(Mt),o=Zy(),u=n.fetch,d=n.navigate;return A.useCallback(async(h,p={})=>{let{action:b,method:y,encType:g,formData:E,body:j}=rv(h,c);if(p.navigate===!1){let R=p.fetcherKey||Ov();await u(R,o,p.action||b,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:E,body:j,formMethod:p.method||y,formEncType:p.encType||g,flushSync:p.flushSync})}else await d(p.action||b,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:E,body:j,formMethod:p.method||y,formEncType:p.encType||g,replace:p.replace,state:p.state,fromRouteId:o,flushSync:p.flushSync,viewTransition:p.viewTransition})},[u,d,c,o])}function Rv(n,{relative:c}={}){let{basename:o}=A.useContext(Mt),u=A.useContext(Wt);$e(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),h={...Li(n||".",{relative:c})},p=Ma();if(n==null){h.search=p.search;let b=new URLSearchParams(h.search),y=b.getAll("index");if(y.some(E=>E==="")){b.delete("index"),y.filter(j=>j).forEach(j=>b.append("index",j));let E=b.toString();h.search=E?`?${E}`:""}}return(!n||n===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(h.pathname=h.pathname==="/"?o:wa([o,h.pathname])),Hi(h)}function Dv(n,{relative:c}={}){let o=A.useContext(Jm);$e(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=lp("useViewTransitionState"),d=Li(n,{relative:c});if(!o.isTransitioning)return!1;let h=Oa(o.currentLocation.pathname,u)||o.currentLocation.pathname,p=Oa(o.nextLocation.pathname,u)||o.nextLocation.pathname;return Mc(d.pathname,p)!=null||Mc(d.pathname,h)!=null}const _v={colors:{primary:"#0ca694",secondary:"#004d40",accent:"#e0f2f1",text:"#333333",white:"#ffffff",bannerBg:"#fff3cd",bannerText:"#856404",background:"#f8fdfc"},fonts:{main:"'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif"},spacing:{small:"8px",medium:"16px",large:"24px",xlarge:"32px"},breakpoints:{mobile:"768px"}},Nv=P4`
  /* RESET GENERAL */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
  }

  body {
    font-family: ${({theme:n})=>n.fonts.main};
    background: linear-gradient(
      180deg,
      ${({theme:n})=>n.colors.background} 0%,
      #f2f6fb 100%
    );
    color: ${({theme:n})=>n.colors.text};
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* TÍTULOS */
  h1, h2, h3, h4 {
    color: ${({theme:n})=>n.colors.primary};
    font-weight: 600;
    margin-bottom: 12px;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  /* TEXTO */
  p {
    margin-bottom: 10px;
    color: ${({theme:n})=>n.colors.text};
  }

  /* LINKS */
  a {
    text-decoration: none;
    color: ${({theme:n})=>n.colors.primary};
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${({theme:n})=>n.colors.secondary};
  }

  /* LISTAS */
  ul {
    list-style: none;
  }

  /* BOTONES GENERALES */
  button {
    font-family: inherit;
    cursor: pointer;
    border-radius: 6px;
    border: none;
    transition: all 0.2s ease;
  }

  button:hover {
    transform: translateY(-1px);
  }
`,Uv="/proyecto-clinica-rolling/assets/doctor-house-BwAzLtLz.png",Hv="/proyecto-clinica-rolling/assets/doctor-grey-bSmyvu9p.png",$v="/proyecto-clinica-rolling/assets/doctor-murphy-5rtR8y0T.png",Bv="/proyecto-clinica-rolling/assets/doctor-cuddy-CUTyzwu4.png",Lv="/proyecto-clinica-rolling/assets/doctor-shepherd-sX3nCsV0.png",ip=[{id:1,name:"Dr. Gregory House",specialty:"Clínica Medica",email:"dr.house@clinica.com",image:Uv,approved:!0},{id:2,name:"Dra. Meredith Grey",specialty:"Cirugía General",email:"grey@clinica.com",image:Hv,approved:!0},{id:3,name:"Dr. Shaun Murphy",specialty:"Pediatría / Neonatología",email:"murphy@clinica.com",image:$v,approved:!0},{id:4,name:"Dra. Lisa Cuddy",specialty:"Endocrinología",email:"cuddy@clinica.com",image:Bv,approved:!0},{id:5,name:"Dr. Derek Shepherd",specialty:"Neurología",email:"shepherd@clinica.com",image:Lv,approved:!0},{id:6,name:"Dra. Addison Montgomery",specialty:"Ginecología",email:"montgomery@clinica.com",image:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=faces",approved:!0},{id:7,name:"Dra. Cristina Yang",specialty:"Cardiología",email:"yang@clinica.com",image:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=faces",approved:!0}],rc=[{id:101,doctorId:1,patientName:"Juan Pérez",date:"2023-11-15",time:"09:00",status:"confirmado",reason:"Dolor de cabeza"},{id:102,doctorId:2,patientName:"Maria Gómez",date:"2023-11-16",time:"10:30",status:"pendiente",reason:"Consulta general"},{id:103,doctorId:3,patientName:"Tomasito Ruiz",date:"2023-11-17",time:"14:00",status:"confirmado",reason:"Control pediátrico"},{id:104,doctorId:1,patientName:"Ana García",date:"2023-11-15",time:"11:30",status:"pendiente",reason:"Resultados análisis"},{id:105,doctorId:3,patientName:"Lucía Lopez",date:"2023-11-18",time:"09:00",status:"pendiente",reason:"Fiebre"},{id:106,doctorId:7,patientName:"Roberto B.",date:"2023-11-19",time:"16:00",status:"confirmado",reason:"Control post-cirugía"}],qv=[{id:1,name:"Cardiología"},{id:2,name:"Clínica Medica"},{id:3,name:"Pediatría / Neonatología"},{id:4,name:"Endocrinología"},{id:5,name:"Neurología"},{id:6,name:"Ginecología"},{id:7,name:"Dermatología"},{id:8,name:"Oftalmología"},{id:9,name:"Cirugía General"},{id:10,name:"Traumatología"}],rp=A.createContext(),Wh=[{email:"admin@clinica.com",password:"admin123",name:"Carlos Admin",role:"admin"},{email:"pepe@gmail.com",password:"pepe123",name:"Pepe Argento",role:"paciente"}],It=()=>A.useContext(rp),Yv=({children:n})=>{const[c,o]=A.useState(null),[u,d]=A.useState(Wh);A.useEffect(()=>{const E=ip.map(q=>({email:q.email||`doc${q.id}@clinica.com`,password:"123",name:q.name,role:"medico",specialty:q.specialty,id:q.id})),j=JSON.parse(localStorage.getItem("registered_users")||"[]"),R=[...Wh,...E,...j];d(R);const O=localStorage.getItem("user");O&&o(JSON.parse(O))},[]);const g={user:c,login:(E,j)=>{const R=E.trim().toLowerCase(),O=u.find(q=>q.email.toLowerCase()===R&&q.password===j);if(O){if(O.role==="medico"&&O.approved===!1)return{success:!1,message:"Su cuenta está pendiente de aprobación por un administrador."};const{password:q,...G}=O;return o(G),localStorage.setItem("user",JSON.stringify(G)),{success:!0,role:O.role}}else return{success:!1,message:"Credenciales inválidas. Verifique email y contraseña."}},logout:()=>{o(null),localStorage.removeItem("user")},register:E=>{if(u.some(G=>G.email===E.email))return{success:!1,message:"El correo electrónico ya está registrado."};const j={...E,id:Date.now()},{password:R,...O}=j;o(O),localStorage.setItem("user",JSON.stringify(O)),d([...u,j]);const q=JSON.parse(localStorage.getItem("registered_users")||"[]");return localStorage.setItem("registered_users",JSON.stringify([...q,j])),{success:!0}},updateUser:E=>{d(O=>O.map(q=>q.email===E.email?E:q));const j=JSON.parse(localStorage.getItem("registered_users")||"[]"),R=j.findIndex(O=>O.email===E.email);if(R!==-1&&(j[R]=E,localStorage.setItem("registered_users",JSON.stringify(j))),c&&c.email===E.email){const{password:O,...q}=E;o(q),localStorage.setItem("user",JSON.stringify(q))}}};return s.jsx(rp.Provider,{value:g,children:n})},cp=A.createContext(),Pt=()=>A.useContext(cp),Gv=({children:n})=>{const[c,o]=A.useState(()=>{const D=JSON.parse(localStorage.getItem("registered_users")||"[]").filter(K=>K.role==="medico");return[...ip,...D]}),[u,d]=A.useState(()=>{const Y=localStorage.getItem("specialties");return Y?JSON.parse(Y):qv}),h=Y=>{const D={id:Date.now(),name:Y},K=[...u,D];d(K),localStorage.setItem("specialties",JSON.stringify(K))},p=Y=>{const D=u.filter(K=>K.id!==Y);d(D),localStorage.setItem("specialties",JSON.stringify(D))},[b,y]=A.useState(()=>{const Y=localStorage.getItem("patients");if(Y)return JSON.parse(Y);const D=[{id:1,name:"Juan Pérez",email:"juan@example.com",insurance:"OSDE 210",history:"Hipertensión"},{id:2,name:"Maria Gómez",email:"maria@example.com",insurance:"Swiss Medical",history:"Sin antecedentes"}];return localStorage.setItem("patients",JSON.stringify(D)),D}),[g,E]=A.useState(()=>{const Y=localStorage.getItem("appointments");if(Y)try{return JSON.parse(Y)}catch(D){return console.error("Error parsing appointments:",D),localStorage.setItem("appointments",JSON.stringify(rc)),rc}return localStorage.setItem("appointments",JSON.stringify(rc)),rc}),P={doctors:c,addDoctor:Y=>{const D={...Y,id:Date.now(),approved:Y.approved||!1},K=[...c,D];o(K)},updateDoctor:Y=>{const D=c.map(K=>K.id===Y.id?Y:K);o(D)},deleteDoctor:Y=>{o(c.filter(D=>D.id!==Y))},patients:b,addPatient:Y=>{const D=[...b,{...Y,id:Date.now()}];y(D),localStorage.setItem("patients",JSON.stringify(D))},updatePatient:Y=>{const D=b.map(K=>K.id===Y.id?Y:K);y(D),localStorage.setItem("patients",JSON.stringify(D))},deletePatient:Y=>{const D=b.filter(K=>K.id!==Y);y(D),localStorage.setItem("patients",JSON.stringify(D))},appointments:g,addAppointment:Y=>{const D=[...g,{...Y,id:Date.now(),status:"pendiente"}];E(D),localStorage.setItem("appointments",JSON.stringify(D))},updateAppointmentStatus:(Y,D)=>{const K=g.map(re=>re.id===Y?{...re,status:D}:re);E(K),localStorage.setItem("appointments",JSON.stringify(K))},deleteAppointment:Y=>{const D=g.filter(K=>K.id!==Y);E(D),localStorage.setItem("appointments",JSON.stringify(D))},checkAvailability:(Y,D,K)=>!g.some(re=>Number(re.doctorId)===Number(Y)&&re.date===D&&re.time===K&&re.status!=="cancelado"),specialties:u,addSpecialty:h,deleteSpecialty:p};return s.jsx(cp.Provider,{value:P,children:n})};var up={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ih=Ue.createContext&&Ue.createContext(up),Vv=["attr","size","title"];function Xv(n,c){if(n==null)return{};var o=Qv(n,c),u,d;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(n);for(d=0;d<h.length;d++)u=h[d],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(n,u)&&(o[u]=n[u])}return o}function Qv(n,c){if(n==null)return{};var o={};for(var u in n)if(Object.prototype.hasOwnProperty.call(n,u)){if(c.indexOf(u)>=0)continue;o[u]=n[u]}return o}function Rc(){return Rc=Object.assign?Object.assign.bind():function(n){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(n[u]=o[u])}return n},Rc.apply(this,arguments)}function Ph(n,c){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);c&&(u=u.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),o.push.apply(o,u)}return o}function Dc(n){for(var c=1;c<arguments.length;c++){var o=arguments[c]!=null?arguments[c]:{};c%2?Ph(Object(o),!0).forEach(function(u){Zv(n,u,o[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Ph(Object(o)).forEach(function(u){Object.defineProperty(n,u,Object.getOwnPropertyDescriptor(o,u))})}return n}function Zv(n,c,o){return c=kv(c),c in n?Object.defineProperty(n,c,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[c]=o,n}function kv(n){var c=Jv(n,"string");return typeof c=="symbol"?c:c+""}function Jv(n,c){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var u=o.call(n,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(n)}function op(n){return n&&n.map((c,o)=>Ue.createElement(c.tag,Dc({key:o},c.attr),op(c.child)))}function ve(n){return c=>Ue.createElement(Kv,Rc({attr:Dc({},n.attr)},c),op(n.child))}function Kv(n){var c=o=>{var{attr:u,size:d,title:h}=n,p=Xv(n,Vv),b=d||o.size||"1em",y;return o.className&&(y=o.className),n.className&&(y=(y?y+" ":"")+n.className),Ue.createElement("svg",Rc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,u,p,{className:y,style:Dc(Dc({color:n.color||o.color},o.style),n.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),h&&Ue.createElement("title",null,h),n.children)};return Ih!==void 0?Ue.createElement(Ih.Consumer,null,o=>c(o)):c(up)}function Fv(n){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(n)}function Wv(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(n)}function Iv(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}function Pv(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function ex(n){return ve({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(n)}function tx(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(n)}function ax(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(n)}function $i(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"},child:[]}]})(n)}function sp(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(n)}function nx(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm316 140c0-6.6-5.4-12-12-12h-60v-60c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v60h-60c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h60v60c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-60h60c6.6 0 12-5.4 12-12v-40z"},child:[]}]})(n)}function lx(n){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(n)}function ix(n){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function qi(n){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(n)}function fp(n){return ve({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(n)}function vf(n){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function dp(n){return ve({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(n)}function rx(n){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(n)}function cx(n){return ve({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"},child:[]}]})(n)}function ux(n){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(n)}function ox(n){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"},child:[]}]})(n)}function xf(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(n)}function hp(n){return ve({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(n)}function mp(n){return ve({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z"},child:[]}]})(n)}function sx(n){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(n)}function Yc(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(n)}function fx(n){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(n)}function bf(n){return ve({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"},child:[]}]})(n)}function pp(n){return ve({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function Yi(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(n)}function gp(n){return ve({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(n)}function dx(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M277.37 11.98C261.08 4.47 243.11 0 224 0c-53.69 0-99.5 33.13-118.51 80h81.19l90.69-68.02zM342.51 80c-7.9-19.47-20.67-36.2-36.49-49.52L239.99 80h102.52zM224 256c70.69 0 128-57.31 128-128 0-5.48-.95-10.7-1.61-16H97.61c-.67 5.3-1.61 10.52-1.61 16 0 70.69 57.31 128 128 128zM80 299.7V512h128.26l-98.45-221.52A132.835 132.835 0 0 0 80 299.7zM0 464c0 26.51 21.49 48 48 48V320.24C18.88 344.89 0 381.26 0 422.4V464zm256-48h-55.38l42.67 96H256c26.47 0 48-21.53 48-48s-21.53-48-48-48zm57.6-128h-16.71c-22.24 10.18-46.88 16-72.89 16s-50.65-5.82-72.89-16h-7.37l42.67 96H256c44.11 0 80 35.89 80 80 0 18.08-6.26 34.59-16.41 48H400c26.51 0 48-21.49 48-48v-41.6c0-74.23-60.17-134.4-134.4-134.4z"},child:[]}]})(n)}function On(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"},child:[]}]})(n)}function Gc(n){return ve({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}const hx="/proyecto-clinica-rolling/assets/logo-D5tjI_5o.svg",mx=x.header`
  background-color: ${({theme:n})=>n.colors.white};
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`,px=x.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing.medium} ${({theme:n})=>n.spacing.large};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
    padding: ${({theme:n})=>n.spacing.medium};
  }
`,gx=x(Ft)`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
`,yx=x.img`
  height: 60px;
  width: auto;
`,vx=x.div`
  display: none;
  font-size: 1.5rem;
  color: ${({theme:n})=>n.colors.primary};
  cursor: pointer;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: block;
  }
`,xx=x.nav`
  display: flex;
  gap: ${({theme:n})=>n.spacing.large};
  align-items: center;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    position: absolute;
    top: 70px; /* Header height approx */
    left: 0;
    width: 100%;
    background-color: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transform: ${({isOpen:n})=>n?"translateY(0)":"translateY(-200%)"};
    transition: transform 0.3s ease-in-out;
    z-index: 99;
  }
`,bs=x(Ft)`
  color: ${({theme:n})=>n.colors.text};
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.2s;
  text-decoration: none;

  &:hover {
    color: ${({theme:n})=>n.colors.primary};
  }
`,bx=x.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({theme:n})=>n.colors.primary};
  font-weight: 600;
`,Sx=x(fx)`
  cursor: pointer;
  font-size: 1.2rem;
  color: #e74c3c;
  
  &:hover {
    opacity: 0.8;
  }
`,jx=x(gp)`
  font-size: 1.5rem;
  color: ${({theme:n})=>n.colors.primary};
  cursor: pointer;
  
  &:hover {
    color: ${({theme:n})=>n.colors.secondary};
  }
`,zx=()=>{const{user:n,logout:c}=It(),[o,u]=A.useState(!1),d=()=>{u(!o)},h=()=>{u(!1)};return s.jsx(mx,{children:s.jsxs(px,{children:[s.jsx(gx,{to:"/",onClick:h,children:s.jsx(yx,{src:hx,alt:"Azahares Logo"})}),s.jsx(vx,{onClick:d,children:o?s.jsx(pp,{}):s.jsx(tx,{})}),s.jsxs(xx,{isOpen:o,children:[n?s.jsx(bs,{to:n.role==="medico"?"/turnos-medico":"/mis-turnos",onClick:h,children:"Turnos"}):s.jsx(bs,{to:"/login",onClick:h,children:"Turnos"}),n&&n.role==="admin"&&s.jsx(bs,{to:"/admin",style:{color:"#e67e22"},onClick:h,children:"Panel Admin"}),n?s.jsxs(bx,{children:[s.jsxs("span",{children:["Hola, ",n.name]}),s.jsx(Sx,{onClick:()=>{c(),h()},title:"Cerrar Sesión"})]}):s.jsx(Ft,{to:"/login",onClick:h,children:s.jsx(jx,{title:"Ingresar"})})]})]})})},Ex=x.footer`
  background-color: ${({theme:n})=>n.colors.secondary};
  color: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing.xlarge} ${({theme:n})=>n.spacing.large};
  margin-top: auto;
  width: 100%;
`,Cx=x.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({theme:n})=>n.spacing.large};
  padding: 0 ${({theme:n})=>n.spacing.large};

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 0 ${({theme:n})=>n.spacing.medium};
    text-align: center;
  }
`,Ss=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing.medium};

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    align-items: center;
  }
`,js=x.h3`
  font-size: 1.3rem;
  border-bottom: 2px solid ${({theme:n})=>n.colors.primary};
  padding-bottom: ${({theme:n})=>n.spacing.small};
  display: inline-block;
  width: max-content;
  margin-bottom: ${({theme:n})=>n.spacing.small};
`,gl=x.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  line-height: 1.5;
  
  svg {
    color: ${({theme:n})=>n.colors.primary};
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`,Tx=x.div`
  display: flex;
  flex-direction: column;
`,Ax=x.div`
  display: flex;
  gap: ${({theme:n})=>n.spacing.medium};
  margin-top: ${({theme:n})=>n.spacing.medium};

  a {
    font-size: 1.8rem;
    color: ${({theme:n})=>n.colors.white};
    transition: color 0.2s;

    &:hover {
      color: ${({theme:n})=>n.colors.primary};
    }
  }
`,wx=x.div`
  text-align: center;
  padding-top: ${({theme:n})=>n.spacing.large};
  margin-top: ${({theme:n})=>n.spacing.large};
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 0.85rem;
  opacity: 0.8;
  letter-spacing: 0.5px;
`,Ox=()=>s.jsxs(Ex,{children:[s.jsxs(Cx,{children:[s.jsxs(Ss,{children:[s.jsx(js,{children:"Contáctanos"}),s.jsxs(gl,{children:[s.jsx(sx,{}),s.jsxs(Tx,{children:[s.jsx("span",{children:"385 – 421 4652"}),s.jsx("span",{children:"385 – 421 2767"})]})]}),s.jsxs(gl,{children:[s.jsx(Iv,{}),s.jsx("span",{children:"385 – 155 938 904"})]}),s.jsxs(gl,{children:[s.jsx(hp,{}),s.jsx("span",{children:"Mitre 279 – SDE"})]})]}),s.jsxs(Ss,{children:[s.jsx(js,{children:"Horarios"}),s.jsx(gl,{children:s.jsx("span",{children:"Lunes a Viernes: 08:00 - 20:00"})}),s.jsx(gl,{children:s.jsx("span",{children:"Sábados: 08:00 - 13:00"})}),s.jsx(gl,{children:s.jsx("span",{children:"Guardia 24hs"})})]}),s.jsxs(Ss,{children:[s.jsx(js,{children:"Redes Sociales"}),s.jsx("p",{children:"Seguinos para novedades y consejos."}),s.jsxs(Ax,{children:[s.jsx(Ft,{to:"/404",title:"Facebook",children:s.jsx(Fv,{})}),s.jsx(Ft,{to:"/404",title:"Instagram",children:s.jsx(Wv,{})})]})]})]}),s.jsxs(wx,{children:["© ",new Date().getFullYear()," Azahares Centro Integral de Salud. Todos los derechos reservados."]})]}),Mx=x.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Rx=x.main`
  flex: 1;
  padding: ${({theme:n})=>n.spacing.large};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: ${({theme:n})=>n.spacing.medium};
  }
`,Dx=({children:n})=>s.jsxs(Mx,{children:[s.jsx(zx,{}),s.jsx(Rx,{children:n}),s.jsx(Ox,{})]}),_x=x.div`
  background-color: ${({theme:n})=>n.colors.white};
  border-left: 5px solid ${({theme:n})=>n.colors.primary};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: ${({theme:n})=>n.spacing.medium};
  margin: ${({theme:n})=>n.spacing.large} auto;
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme:n})=>n.spacing.small};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.mobile}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,Nx=x.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing.small};
`,Ux=x.span`
  background-color: ${({theme:n})=>n.colors.accent};
  color: ${({theme:n})=>n.colors.primary};
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-block;
  width: fit-content;
  border: 1px solid ${({theme:n})=>n.colors.primary};
`,Hx=x.h3`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
`,$x=x.p`
  color: ${({theme:n})=>n.colors.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,Bx=x.p`
  color: #666;
  font-size: 0.95rem;
  margin: 0;
  font-style: italic;
`,Lx=x.div`
  display: none;
  font-size: 3rem;
  color: ${({theme:n})=>n.colors.accent};
  
  @media (min-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: block;
    margin-left: ${({theme:n})=>n.spacing.large};
  }
`,qx=()=>s.jsxs(_x,{children:[s.jsxs(Nx,{children:[s.jsx(Ux,{children:"Aviso Importante"}),s.jsx(Hx,{children:"Nuevo horario de atención"}),s.jsx($x,{children:"de 8:00 a 20:30 hs"}),s.jsx(Bx,{children:"Desde el jueves 4 de enero"})]}),s.jsx(Lx,{children:s.jsx(qi,{})})]}),Yx="/proyecto-clinica-rolling/assets/clinic-hero-CGP8eFDt.png",Gx=x.section`
  height: 60vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url(${Yx});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({theme:n})=>n.spacing.xlarge};

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    height: 45vh;
  }
`,Vx=x.section`
  width: 100%;
`,Xx=x.section`
  margin-top: ${({theme:n})=>n.spacing.xlarge};
  margin-bottom: ${({theme:n})=>n.spacing.xlarge};
  text-align: center;
  padding: 0 ${({theme:n})=>n.spacing.large};
`,Qx=x.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: ${({theme:n})=>n.spacing.medium};
  line-height: 1.2;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`,Zx=x.p`
  font-size: 1.1rem;
  color: #f1f1f1;
  max-width: 700px;
  margin: 0 auto;
`,kx=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:n})=>n.spacing.large};
  margin-top: ${({theme:n})=>n.spacing.xlarge};
`,zs=x.div`
  background: ${({theme:n})=>n.colors.white};
  border-radius: 12px;
  padding: ${({theme:n})=>n.spacing.xlarge};
  box-shadow: 0 4px 6px rgba(0,0,0,0.04);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  }
`,Es=x.div`
  font-size: 3rem;
  color: ${({theme:n})=>n.colors.primary};
  margin-bottom: ${({theme:n})=>n.spacing.medium};
  background-color: ${({theme:n})=>n.colors.accent};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Cs=x.h3`
  font-size: 1.3rem;
  color: ${({theme:n})=>n.colors.secondary};
  margin-bottom: ${({theme:n})=>n.spacing.small};
`,Ts=x.p`
  color: #666;
  font-size: 0.95rem;
`,em=x.div`
  background-color: ${({theme:n})=>n.colors.primary}; /* Brand Green */
  color: ${({theme:n})=>n.colors.white};
  text-align: center;
  padding: ${({theme:n})=>n.spacing.xlarge};
  margin-top: ${({theme:n})=>n.spacing.xlarge};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:n})=>n.spacing.medium};
`,tm=x.h2`
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
  
  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`,am=x.p`
  font-size: 1.1rem;
  max-width: 600px;
  opacity: 0.9;
  line-height: 1.5;
`,nm=x.button`
  background-color: ${({theme:n})=>n.colors.white};
  color: ${({theme:n})=>n.colors.primary};
  border: none;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  text-transform: uppercase;
  margin-top: ${({theme:n})=>n.spacing.small};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }

  &:active {
    transform: translateY(0);
  }
`,Jx=()=>{const n=Rt(),{user:c}=It(),o=()=>{if(!c){n("/login");return}c.role==="medico"?n("/turnos-medico"):c.role==="admin"?n("/admin"):n("/especialidades")};return s.jsxs(s.Fragment,{children:[s.jsx(Gx,{children:s.jsxs(Xx,{children:[s.jsx(Qx,{children:"Cuidamos tu salud, cerca de vos"}),s.jsx(Zx,{children:"En Azahares brindamos atención médica integral con los mejores profesionales y tecnología de última generación."})]})}),s.jsx(Vx,{children:s.jsx(qx,{})}),s.jsxs(kx,{children:[s.jsxs(zs,{children:[s.jsx(Es,{children:s.jsx(bf,{})}),s.jsx(Cs,{children:"Especialidades Médicas"}),s.jsx(Ts,{children:"Más de 30 especialidades a tu disposición. Cardiología, Pediatría, Traumatología y más."})]}),s.jsxs(zs,{children:[s.jsx(Es,{children:s.jsx($i,{})}),s.jsx(Cs,{children:"Turnos Online"}),s.jsx(Ts,{children:"Gestioná tus citas de manera rápida y sencilla desde la comodidad de tu hogar."})]}),s.jsxs(zs,{onClick:()=>n("/404"),children:[s.jsx(Es,{children:s.jsx(mp,{})}),s.jsx(Cs,{children:"Resultados de Estudios"}),s.jsx(Ts,{children:"Accedé a tus informes y resultados de laboratorio sin necesidad de venir a la clínica."})]})]}),s.jsxs(em,{style:{backgroundColor:"#f8f9fa",color:"#333"},children:[s.jsx(ux,{style:{fontSize:"3rem",color:"#2e7d32",marginBottom:"1rem"}}),s.jsx(tm,{style:{color:"#2e7d32"},children:"Conocé Clínica Azahares"}),s.jsx(am,{style:{color:"#666"},children:"Descubrí nuestra historia, valores y el compromiso que nos impulsa a brindarte la mejor atención médica. Conocé más sobre nuestro equipo y misión."}),s.jsx(nm,{onClick:()=>n("/nosotros"),style:{backgroundColor:"#2e7d32",color:"white"},children:"Acerca de Nosotros"})]}),s.jsxs(em,{children:[s.jsx(tm,{children:"¿Necesitás ver a un médico?"}),s.jsx(am,{children:c?.role==="medico"?"Accedé a tu panel para ver tus próximos pacientes y gestionar tu agenda.":"Reservá tu turno online de forma rápida y segura. Elegí la especialidad y el profesional que mejor se adapte a tus horarios."}),s.jsx(nm,{onClick:o,children:c?.role==="medico"?"Gestionar Turnos":"Sacar Turno"})]})]})},Kx=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
`,Fx=x.div`
  background: ${({theme:n})=>n.colors.white};
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 450px;
  text-align: center;
`,Wx=x.h2`
  color: ${({theme:n})=>n.colors.secondary};
  margin-bottom: ${({theme:n})=>n.spacing.medium};
  font-size: 1.8rem;
`,Ix=x.p`
  color: #666;
  margin-bottom: ${({theme:n})=>n.spacing.large};
`,Px=x.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing.medium};
`,lm=x.div`
  position: relative;
`,im=x.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({theme:n})=>n.colors.primary};
  }
`,rm=x.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`,e6=x.button`
  background-color: ${({theme:n})=>n.colors.primary};
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: ${({theme:n})=>n.spacing.small};

  &:hover {
    background-color: ${({theme:n})=>n.colors.secondary};
  }
`,t6=x.div`
  color: #e74c3c;
  background-color: #fce4e4;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-bottom: 10px;
`,a6=x.div`
  margin-top: ${({theme:n})=>n.spacing.large};
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
  border-top: 1px solid #eee;
  padding-top: ${({theme:n})=>n.spacing.medium};
`,n6=x.a`
  color: ${({theme:n})=>n.colors.primary};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,l6=()=>{const[n,c]=A.useState(""),[o,u]=A.useState(""),[d,h]=A.useState(""),{login:p}=It(),b=Rt(),y=g=>{if(g.preventDefault(),h(""),!n||!o){h("Por favor complete todos los campos");return}const E=p(n,o);E.success?E.role==="admin"?b("/admin"):E.role==="medico"?b("/turnos-medico"):b("/menu-paciente"):h(E.message)};return s.jsx(Kx,{children:s.jsxs(Fx,{children:[s.jsx(Wx,{children:"Bienvenido"}),s.jsx(Ix,{children:"Ingrese a su cuenta"}),d&&s.jsx(t6,{children:d}),s.jsxs(Px,{onSubmit:y,children:[s.jsxs(lm,{children:[s.jsx(rm,{children:s.jsx(Gc,{})}),s.jsx(im,{type:"email",placeholder:"Correo electrónico",value:n,onChange:g=>c(g.target.value)})]}),s.jsxs(lm,{children:[s.jsx(rm,{children:s.jsx(xf,{})}),s.jsx(im,{type:"password",placeholder:"Contraseña",value:o,onChange:g=>u(g.target.value)})]}),s.jsx(e6,{type:"submit",children:"Ingresar"})]}),s.jsx(a6,{children:s.jsx(n6,{onClick:()=>b("/register"),children:"Crear Cuenta Nueva"})})]})})},i6=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
  min-height: 60vh;
`,r6=x.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 600px;
  text-align: center;
`,c6=x.h2`
  color: ${({theme:n})=>n.colors.secondary};
  margin-bottom: ${({theme:n})=>n.spacing.medium};
  font-size: 2rem;
`,u6=x.p`
  color: #666;
  margin-bottom: ${({theme:n})=>n.spacing.xlarge};
  font-size: 1.1rem;
`,o6=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:n})=>n.spacing.large};
  margin-top: ${({theme:n})=>n.spacing.xlarge};
`,cm=x.div`
  background: ${({theme:n})=>n.colors.accent};
  border: 2px solid ${({theme:n})=>n.colors.primary};
  border-radius: 12px;
  padding: ${({theme:n})=>n.spacing.xlarge};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:n})=>n.spacing.medium};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    background: ${({theme:n})=>n.colors.primary};
    color: white;

    svg {
      color: white;
    }
  }
`,um=x.div`
  font-size: 3rem;
  color: ${({theme:n})=>n.colors.primary};
`,om=x.h3`
  margin: 0;
  font-size: 1.3rem;
`,sm=x.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
`,s6=x.div`
  margin-top: ${({theme:n})=>n.spacing.xlarge};
  padding-top: ${({theme:n})=>n.spacing.medium};
  border-top: 1px solid #eee;
  
  a {
    color: ${({theme:n})=>n.colors.primary};
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,f6=()=>{const n=Rt();return s.jsx(i6,{children:s.jsxs(r6,{children:[s.jsx(c6,{children:"Crear Cuenta"}),s.jsx(u6,{children:"Seleccione el tipo de cuenta que desea crear"}),s.jsxs(o6,{children:[s.jsxs(cm,{onClick:()=>n("/register/paciente"),children:[s.jsx(um,{children:s.jsx(Gc,{})}),s.jsx(om,{children:"Soy Paciente"}),s.jsx(sm,{children:"Quiero reservar turnos y gestionar mis consultas"})]}),s.jsxs(cm,{onClick:()=>n("/register/medico"),children:[s.jsx(um,{children:s.jsx(On,{})}),s.jsx(om,{children:"Soy Médico"}),s.jsx(sm,{children:"Quiero gestionar mi agenda y atender pacientes"})]})]}),s.jsxs(s6,{children:["¿Ya tienes cuenta? ",s.jsx("a",{href:"/login",children:"Ingresar"})]})]})})},d6=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
`,h6=x.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 500px;
`,m6=x.h2`
  color: ${({theme:n})=>n.colors.secondary};
  text-align: center;
  margin-bottom: 20px;
`,p6=x.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,cc=x.div`
  position: relative;
`,uc=x.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({theme:n})=>n.colors.primary};
  }
`,oc=x.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`,g6=x.button`
  background-color: ${({theme:n})=>n.colors.primary};
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: ${({theme:n})=>n.colors.secondary};
  }
`,y6=x.div`
  color: #e74c3c;
  background: #fce4e4;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
`,v6=()=>{const[n,c]=A.useState({name:"",email:"",password:"",insurance:""}),[o,u]=A.useState(""),{register:d}=It(),{addPatient:h}=Pt(),p=Rt(),b=g=>{c({...n,[g.target.name]:g.target.value})},y=async g=>{if(g.preventDefault(),u(""),!n.name||!n.email||!n.password){u("Por favor complete todos los campos.");return}const E={...n,role:"paciente"},j=d(E);j.success?(h(E),p("/menu-paciente")):u(j.message)};return s.jsx(d6,{children:s.jsxs(h6,{children:[s.jsx(m6,{children:"Registro de Paciente"}),o&&s.jsx(y6,{children:o}),s.jsxs(p6,{onSubmit:y,children:[s.jsxs(cc,{children:[s.jsx(oc,{children:s.jsx(Gc,{})}),s.jsx(uc,{name:"name",placeholder:"Nombre Completo",value:n.name,onChange:b})]}),s.jsxs(cc,{children:[s.jsx(oc,{children:s.jsx(vf,{})}),s.jsx(uc,{type:"email",name:"email",placeholder:"Correo Electrónico",value:n.email,onChange:b})]}),s.jsxs(cc,{children:[s.jsx(oc,{children:s.jsx(xf,{})}),s.jsx(uc,{type:"password",name:"password",placeholder:"Contraseña",value:n.password,onChange:b})]}),s.jsxs(cc,{children:[s.jsx(oc,{children:s.jsx(cx,{})}),s.jsx(uc,{name:"insurance",placeholder:"Obra Social (Opcional)",value:n.insurance,onChange:b})]}),s.jsx(g6,{type:"submit",children:"Registrarse como Paciente"})]}),s.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:s.jsx(Ft,{to:"/register",children:"Volver"})})]})})},x6=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
`,b6=x.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 500px;
`,S6=x.h2`
  color: ${({theme:n})=>n.colors.secondary};
  text-align: center;
  margin-bottom: 20px;
`,j6=x.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,sc=x.div`
  position: relative;
`,fc=x.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({theme:n})=>n.colors.primary};
  }
`,dc=x.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`,z6=x.button`
  background-color: ${({theme:n})=>n.colors.primary};
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: ${({theme:n})=>n.colors.secondary};
  }
`,E6=x.div`
  color: #e74c3c;
  background: #fce4e4;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
`,C6=()=>{const[n,c]=A.useState({name:"",email:"",password:"",specialty:"",image:"https://i.pravatar.cc/150"}),[o,u]=A.useState(""),{register:d}=It(),{addDoctor:h}=Pt(),p=Rt(),b=g=>{c({...n,[g.target.name]:g.target.value})},y=async g=>{if(g.preventDefault(),u(""),!n.name||!n.email||!n.password||!n.specialty){u("Por favor complete todos los campos.");return}const E={...n,role:"medico",approved:!1},j=d(E);j.success?(h(E),alert("Cuenta creada. Un administrador debe aprobar su cuenta antes de que pueda operar."),p("/login")):u(j.message)};return s.jsx(x6,{children:s.jsxs(b6,{children:[s.jsx(S6,{children:"Registro de Médico"}),o&&s.jsx(E6,{children:o}),s.jsxs(j6,{onSubmit:y,children:[s.jsxs(sc,{children:[s.jsx(dc,{children:s.jsx(On,{})}),s.jsx(fc,{name:"name",placeholder:"Nombre Completo",value:n.name,onChange:b})]}),s.jsxs(sc,{children:[s.jsx(dc,{children:s.jsx(vf,{})}),s.jsx(fc,{type:"email",name:"email",placeholder:"Correo Electrónico",value:n.email,onChange:b})]}),s.jsxs(sc,{children:[s.jsx(dc,{children:s.jsx(xf,{})}),s.jsx(fc,{type:"password",name:"password",placeholder:"Contraseña",value:n.password,onChange:b})]}),s.jsxs(sc,{children:[s.jsx(dc,{children:s.jsx(bf,{})}),s.jsx(fc,{name:"specialty",placeholder:"Especialidad (Ej: Cardiología)",value:n.specialty,onChange:b})]}),s.jsx(z6,{type:"submit",children:"Registrarse como Médico"})]}),s.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:s.jsx(Ft,{to:"/register",children:"Volver"})})]})})},En=({children:n,requiredRole:c})=>{const{user:o}=It();return o?o.role==="admin"?n:o.role==="medico"&&o.approved===!1?s.jsx(vs,{to:"/login",replace:!0}):c&&o.role!==c?s.jsx(vs,{to:"/",replace:!0}):n:s.jsx(vs,{to:"/login",replace:!0})},T6=x.div``,A6=x.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        justify-content: center;
    }
`,As=x.button`
    background-color: ${({theme:n})=>n.colors.primary};
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    
    &:hover {
        background-color: ${({theme:n})=>n.colors.secondary};
    }

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        width: 100%;
        justify-content: center;
    }
`,w6=x.table`
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: block;
        box-shadow: none;
        background: transparent;
    }
`,O6=x.thead`
    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: none;
    }
`,M6=x.tr`
    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: block;
        background: white;
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        border: 1px solid #eee;
    }
`,hc=x.th`
    background: #f4f4f4;
    padding: 12px;
    text-align: left;
    color: #555;
`,mc=x.td`
    padding: 12px;
    border-bottom: 1px solid #eee;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: right;
        padding: 10px 50px;
        border-bottom: 1px solid #f0f0f0;
        font-size: 1.2rem;

        &::before {
            content: attr(data-label);
            font-weight: 700;
            color: ${({theme:n})=>n.colors.primary};
            font-size: 1rem;
            text-transform: uppercase;
            text-align: left;
            margin-right: 15px;
        }

        &:last-child {
            border-bottom: none;
            justify-content: flex-end;
            margin-top: 0;
            border-top: 1px solid #eee;
            padding-top: 15px;
        }
    }
`,fm=x.input`
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
`,R6=x.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 100;
    width: 400px;
    max-width: 90%; 

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        width: 90%;
        padding: 20px;
    }
`,D6=x.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
`,_6=()=>{const{doctors:n,addDoctor:c,updateDoctor:o,deleteDoctor:u}=Pt(),{updateUser:d}=It(),[h,p]=A.useState(!1),[b,y]=A.useState(null),[g,E]=A.useState({name:"",specialty:"",image:"https://i.pravatar.cc/150"}),j=(O=null)=>{O?(y(O),E(O)):(y(null),E({name:"",specialty:"",image:"https://i.pravatar.cc/150"})),p(!0)},R=()=>{b?o(g):c(g),p(!1)};return s.jsxs(T6,{children:[s.jsx(A6,{children:s.jsxs(As,{onClick:()=>j(),children:[s.jsx(Yc,{})," Nuevo Médico"]})}),s.jsxs(w6,{children:[s.jsx(O6,{children:s.jsxs("tr",{children:[s.jsx(hc,{children:"Nombre"}),s.jsx(hc,{children:"Especialidad"}),s.jsx(hc,{children:"Estado"}),s.jsx(hc,{children:"Acciones"})]})}),s.jsx("tbody",{children:n.map(O=>s.jsxs(M6,{children:[s.jsx(mc,{"data-label":"Nombre",children:O.name}),s.jsx(mc,{"data-label":"Especialidad",children:O.specialty}),s.jsx(mc,{"data-label":"Estado",children:s.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"0.85rem",fontWeight:"600",background:O.approved?"#e8f5e9":"#fff3e0",color:O.approved?"#2e7d32":"#ef6c00"},children:O.approved?"Aprobado":"Pendiente"})}),s.jsx(mc,{"data-label":"Acciones",children:s.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[!O.approved&&s.jsx("button",{style:{padding:"4px 10px",background:"#4caf50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"0.85rem"},onClick:()=>{const q={...O,approved:!0};o(q),d(q)},children:"Aprobar"}),s.jsx(fp,{style:{cursor:"pointer",color:"#f39c12",fontSize:"1.1rem"},onClick:()=>j(O)}),s.jsx(Yi,{style:{cursor:"pointer",color:"#e74c3c",fontSize:"1.1rem"},onClick:()=>{window.confirm("Eliminar?")&&u(O.id)}})]})})]},O.id))})]}),h&&s.jsxs(s.Fragment,{children:[s.jsx(D6,{onClick:()=>p(!1)}),s.jsxs(R6,{children:[s.jsx("h3",{children:b?"Editar Médico":"Nuevo Médico"}),s.jsx(fm,{placeholder:"Nombre Dr/Dra",value:g.name,onChange:O=>E({...g,name:O.target.value})}),s.jsx(fm,{placeholder:"Especialidad",value:g.specialty,onChange:O=>E({...g,specialty:O.target.value})}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",marginTop:"15px"},children:[s.jsx(As,{style:{background:"#ccc"},onClick:()=>p(!1),children:"Cancelar"}),s.jsx(As,{onClick:R,children:"Guardar"})]})]})]})]})},N6=x.div``,U6=x.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        justify-content: center;
    }
`,ws=x.button`
    background-color: ${({theme:n})=>n.colors.primary};
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;

    &:hover {
        background-color: ${({theme:n})=>n.colors.secondary};
    }

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        width: 100%;
        justify-content: center;
    }
`,H6=x.table`
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: block;
        box-shadow: none;
        background: transparent;
    }
`,$6=x.thead`
    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: none;
    }
`,B6=x.tr`
    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: block;
        background: white;
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        border: 1px solid #eee;
    }
`,pc=x.th`
    background: #f4f4f4;
    padding: 12px;
    text-align: left;
    color: #555;
`,gc=x.td`
    padding: 12px;
    border-bottom: 1px solid #eee;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: right;
        padding: 10px 50px;
        border-bottom: 1px solid #f0f0f0;
        font-size: 1.2rem;

        &::before {
            content: attr(data-label);
            font-weight: 700;
            color: ${({theme:n})=>n.colors.primary};
            font-size: 1rem;
            text-transform: uppercase;
            text-align: left;
            margin-right: 15px;
        }

        &:last-child {
            border-bottom: none;
            justify-content: flex-end;
            margin-top: 0;
            border-top: 1px solid #eee;
            padding-top: 15px;
        }
    }
`,yc=x.input`
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
`,L6=x.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 100;
    width: 400px;
    max-width: 90%;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        width: 90%;
        padding: 20px;
    }
`,q6=x.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
`,Y6=()=>{const{patients:n,addPatient:c,updatePatient:o,deletePatient:u}=Pt(),[d,h]=A.useState(!1),[p,b]=A.useState(null),[y,g]=A.useState({name:"",email:"",insurance:"",history:""}),E=(R=null)=>{R?(b(R),g(R)):(b(null),g({name:"",email:"",insurance:"",history:""})),h(!0)},j=()=>{p?o(y):c(y),h(!1)};return s.jsxs(N6,{children:[s.jsx(U6,{children:s.jsxs(ws,{onClick:()=>E(),children:[s.jsx(Yc,{})," Nuevo Paciente"]})}),s.jsxs(H6,{children:[s.jsx($6,{children:s.jsxs("tr",{children:[s.jsx(pc,{children:"Nombre"}),s.jsx(pc,{children:"Obra Social"}),s.jsx(pc,{children:"Antecedentes"}),s.jsx(pc,{children:"Acciones"})]})}),s.jsx("tbody",{children:n.map(R=>s.jsxs(B6,{children:[s.jsx(gc,{"data-label":"Nombre",children:R.name}),s.jsx(gc,{"data-label":"Obra Social",children:R.insurance}),s.jsx(gc,{"data-label":"Antecedentes",children:R.history}),s.jsx(gc,{"data-label":"Acciones",children:s.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[s.jsx(fp,{style:{cursor:"pointer",color:"#f39c12",fontSize:"1.2rem"},onClick:()=>E(R)}),s.jsx(Yi,{style:{cursor:"pointer",color:"#e74c3c",fontSize:"1.2rem"},onClick:()=>{window.confirm("Eliminar?")&&u(R.id)}})]})})]},R.id))})]}),d&&s.jsxs(s.Fragment,{children:[s.jsx(q6,{onClick:()=>h(!1)}),s.jsxs(L6,{children:[s.jsx("h3",{children:p?"Editar Paciente":"Nuevo Paciente"}),s.jsx(yc,{placeholder:"Nombre Completo",value:y.name,onChange:R=>g({...y,name:R.target.value})}),s.jsx(yc,{placeholder:"Email",value:y.email,onChange:R=>g({...y,email:R.target.value})}),s.jsx(yc,{placeholder:"Obra Social",value:y.insurance,onChange:R=>g({...y,insurance:R.target.value})}),s.jsx(yc,{placeholder:"Historial / Antecedentes",value:y.history,onChange:R=>g({...y,history:R.target.value})}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",marginTop:"15px"},children:[s.jsx(ws,{style:{background:"#ccc"},onClick:()=>h(!1),children:"Cancelar"}),s.jsx(ws,{onClick:j,children:"Guardar"})]})]})]})]})},G6=x.div``,V6=x.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        justify-content: center;
    }
`,Os=x.button`
    background-color: ${({theme:n})=>n.colors.primary};
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;

    &:hover {
        background-color: ${({theme:n})=>n.colors.secondary};
    }

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        width: 100%;
        justify-content: center;
    }
`,X6=x.table`
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: block;
        box-shadow: none;
        background: transparent;
    }
`,Q6=x.thead`
    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: none;
    }
`,Z6=x.tr`
    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: block;
        background: white;
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        border: 1px solid #eee;
    }
`,Ei=x.th`
    background: #f4f4f4;
    padding: 12px;
    text-align: left;
    color: #555;
`,Ci=x.td`
    padding: 12px;
    border-bottom: 1px solid #eee;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: right;
        padding: 10px 50px;
        border-bottom: 1px solid #f0f0f0;
        font-size: 1.2rem;

        &::before {
            content: attr(data-label);
            font-weight: 700;
            color: ${({theme:n})=>n.colors.primary};
            font-size: 1rem;
            text-transform: uppercase;
            text-align: left;
            margin-right: 10px;
        }

        &:last-child {
            border-bottom: none;
            justify-content: flex-end;
            margin-top: 0;
            border-top: 1px solid #eee;
            padding-top: 15px;
        }
    }
`,dm=x.select`
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
`,Ms=x.input`
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
`,k6=x.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 100;
    width: 400px;
    max-width: 90%;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        width: 90%;
        padding: 20px;
    }
`,J6=x.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
`,K6=x.p`
    color: red;
    font-size: 0.9rem;
    margin-bottom: 10px;
`,F6=()=>{const{appointments:n,doctors:c,addAppointment:o,deleteAppointment:u,checkAvailability:d}=Pt(),[h,p]=A.useState(!1),[b,y]=A.useState({doctorId:"",patientName:"",date:"",time:"",reason:""}),[g,E]=A.useState(""),j=()=>{y({doctorId:"",patientName:"",date:"",time:"",reason:""}),E(""),p(!0)},R=()=>{if(!b.doctorId||!b.date||!b.time||!b.patientName){E("Todos los campos son obligatorios");return}if(!d(b.doctorId,b.date,b.time)){E("⚠️ El médico no tiene disponibilidad en ese horario.");return}const q=c.find(G=>G.id===Number(b.doctorId));o({...b,doctorId:Number(b.doctorId),doctorName:q?q.name:"Desconocido"}),p(!1)};return s.jsxs(G6,{children:[s.jsx(V6,{children:s.jsxs(Os,{onClick:j,children:[s.jsx(Yc,{})," Agendar Turno"]})}),s.jsxs(X6,{children:[s.jsx(Q6,{children:s.jsxs("tr",{children:[s.jsx(Ei,{children:"Paciente"}),s.jsx(Ei,{children:"Médico"}),s.jsx(Ei,{children:"Fecha/Hora"}),s.jsx(Ei,{children:"Estado"}),s.jsx(Ei,{children:"Acciones"})]})}),s.jsx("tbody",{children:n.map(O=>s.jsxs(Z6,{children:[s.jsx(Ci,{"data-label":"Paciente",children:O.patientName}),s.jsx(Ci,{"data-label":"Médico",children:O.doctorName}),s.jsxs(Ci,{"data-label":"Fecha/Hora",children:[O.date," ",O.time]}),s.jsx(Ci,{"data-label":"Estado",children:O.status}),s.jsx(Ci,{"data-label":"Acciones",children:s.jsx("span",{style:{display:"flex",justifyContent:"flex-end"},children:s.jsx(Yi,{style:{cursor:"pointer",color:"#e74c3c",fontSize:"1.2rem"},onClick:()=>{window.confirm("Cancelar turno?")&&u(O.id)}})})})]},O.id))})]}),h&&s.jsxs(s.Fragment,{children:[s.jsx(J6,{onClick:()=>p(!1)}),s.jsxs(k6,{children:[s.jsx("h3",{children:"Agendar Nuevo Turno"}),g&&s.jsx(K6,{children:g}),s.jsx("label",{children:"Médico:"}),s.jsxs(dm,{value:b.doctorId,onChange:O=>y({...b,doctorId:O.target.value}),children:[s.jsx("option",{value:"",children:"Seleccione Médico"}),c.map(O=>s.jsxs("option",{value:O.id,children:[O.name," - ",O.specialty]},O.id))]}),s.jsx("label",{children:"Paciente:"}),s.jsx(Ms,{placeholder:"Nombre Paciente",value:b.patientName,onChange:O=>y({...b,patientName:O.target.value})}),s.jsxs("div",{style:{display:"flex",gap:"10px"},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{children:"Fecha:"}),s.jsx(Ms,{type:"date",value:b.date,onChange:O=>y({...b,date:O.target.value})})]}),s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{children:"Hora:"}),s.jsxs(dm,{value:b.time,onChange:O=>y({...b,time:O.target.value}),children:[s.jsx("option",{value:"",children:"Hora"}),s.jsx("option",{value:"09:00",children:"09:00"}),s.jsx("option",{value:"10:00",children:"10:00"}),s.jsx("option",{value:"11:30",children:"11:30"}),s.jsx("option",{value:"14:00",children:"14:00"}),s.jsx("option",{value:"16:00",children:"16:00"})]})]})]}),s.jsx("label",{children:"Motivo:"}),s.jsx(Ms,{placeholder:"Motivo de consulta",value:b.reason,onChange:O=>y({...b,reason:O.target.value})}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",marginTop:"15px"},children:[s.jsx(Os,{style:{background:"#ccc"},onClick:()=>p(!1),children:"Cancelar"}),s.jsx(Os,{onClick:R,children:"Confirmar"})]})]})]})]})},W6=x.div``,I6=x.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
`,Rs=x.button`
    background-color: ${({theme:n})=>n.colors.primary};
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;

    &:hover {
        background-color: ${({theme:n})=>n.colors.secondary};
    }
`,P6=x.table`
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`,hm=x.th`
    background: #f4f4f4;
    padding: 12px;
    text-align: left;
    color: #555;
`,mm=x.td`
    padding: 12px;
    border-bottom: 1px solid #eee;
`,e3=x.input`
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
`,t3=x.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 100;
    width: 400px;
`,a3=x.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
`,n3=()=>{const{specialties:n,addSpecialty:c,deleteSpecialty:o}=Pt(),[u,d]=A.useState(!1),[h,p]=A.useState(""),b=()=>{h.trim()&&(c(h),p(""),d(!1))};return s.jsxs(W6,{children:[s.jsx(I6,{children:s.jsxs(Rs,{onClick:()=>d(!0),children:[s.jsx(Yc,{})," Nueva Especialidad"]})}),s.jsxs(P6,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx(hm,{children:"Nombre"}),s.jsx(hm,{children:"Acciones"})]})}),s.jsx("tbody",{children:n.map(y=>s.jsxs("tr",{children:[s.jsx(mm,{children:y.name}),s.jsx(mm,{children:s.jsx(Yi,{style:{cursor:"pointer",color:"#e74c3c"},onClick:()=>{window.confirm(`Eliminar ${y.name}?`)&&o(y.id)}})})]},y.id))})]}),u&&s.jsxs(s.Fragment,{children:[s.jsx(a3,{onClick:()=>d(!1)}),s.jsxs(t3,{children:[s.jsx("h3",{children:"Nueva Especialidad"}),s.jsx(e3,{placeholder:"Nombre de Especialidad",value:h,onChange:y=>p(y.target.value)}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",marginTop:"15px"},children:[s.jsx(Rs,{style:{background:"#ccc"},onClick:()=>d(!1),children:"Cancelar"}),s.jsx(Rs,{onClick:b,children:"Guardar"})]})]})]})]})},l3=x.div`
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
`,i3=x.h2`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
`,r3=x.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        flex-wrap: wrap;
        gap: 10px;
    }
`,vc=x.button`
    background: ${({active:n,theme:c})=>n?c.colors.primary:"transparent"};
    color: ${({active:n})=>n?"white":"#666"};
    border: none;
    padding: 12px 25px;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: ${({active:n})=>n?"0 4px 10px rgba(0,0,0,0.2)":"none"};

    &:hover {
        background: ${({active:n,theme:c})=>n?c.colors.primary:"#e9ecef"};
        transform: translateY(-2px);
    }
`,c3=()=>{const[n,c]=A.useState("doctors");return s.jsxs(l3,{children:[s.jsx(i3,{children:"Panel de Administración"}),s.jsxs(r3,{children:[s.jsxs(vc,{active:n==="doctors",onClick:()=>c("doctors"),children:[s.jsx(On,{size:20})," Médicos"]}),s.jsxs(vc,{active:n==="patients",onClick:()=>c("patients"),children:[s.jsx(dx,{size:20})," Pacientes"]}),s.jsxs(vc,{active:n==="appointments",onClick:()=>c("appointments"),children:[s.jsx($i,{size:20})," Turnos"]}),s.jsxs(vc,{active:n==="specialties",onClick:()=>c("specialties"),children:[s.jsx($i,{size:20})," Especialidades"]})]}),n==="doctors"&&s.jsx(_6,{}),n==="patients"&&s.jsx(Y6,{}),n==="appointments"&&s.jsx(F6,{}),n==="specialties"&&s.jsx(n3,{})]})},u3=x.div`
  padding: ${({theme:n})=>n.spacing.xlarge} ${({theme:n})=>n.spacing.large};
  max-width: 1000px;
  margin: 0 auto;
`,o3=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #eee;
  padding-bottom: 20px;
`,s3=x.h2`
  color: ${({theme:n})=>n.colors.secondary};
  margin: 0;
`,f3=x.span`
  color: #666;
  font-size: 1.1rem;
`,d3=x.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
`,h3=x.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: block;
  }
`,m3=x.thead`
  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: none;
  }
`,p3=x.tr`
   @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: block;
    background: white;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    border: 1px solid #eee;
  }
`,Ti=x.th`
  background-color: #f8f9fa;
  color: ${({theme:n})=>n.colors.secondary};
  padding: 15px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #eee;
`,Ai=x.td`
  padding: 15px;
  border-bottom: 1px solid #eee;
  color: #444;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    padding: 25px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 1.2rem;

    &::before {
      content: attr(data-label);
      font-weight: 700;
      color: ${({theme:n})=>n.colors.primary}; // Or just a dark gray if secondary theme color is better
      font-size: 1rem;
      text-transform: uppercase;
      text-align: left;
      margin-right: 15px;
    }

    &:last-child {
      border-bottom: none;
      justify-content: flex-end;
      margin-top: 0;
      border-top: 1px solid #eee;
      padding-top: 15px;
    }
  }
`,g3=x.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
  
  ${({status:n})=>{switch(n){case"confirmado":return"background-color: #e8f5e9; color: #2e7d32;";case"cancelado":return"background-color: #ffebee; color: #c62828;";default:return"background-color: #fff3e0; color: #ef6c00;"}}}
`,Ds=x.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  margin-right: 5px;
  color: ${({color:n})=>n};

  &:hover {
    background-color: ${({bg:n})=>n};
  }
`,y3=()=>{const{appointments:n,updateAppointmentStatus:c,deleteAppointment:o}=Pt(),{user:u}=It(),d=n.filter(p=>p.doctorId===u?.id),h=u?.name?u.name.startsWith("Dr.")||u.name.startsWith("Dra.")?u.name:`Dr. ${u.name}`:"Médico";return s.jsxs(u3,{children:[s.jsxs(o3,{children:[s.jsx(s3,{children:"Gestión de Turnos"}),s.jsx(f3,{children:h})]}),d.length>0?s.jsx(d3,{children:s.jsxs(h3,{children:[s.jsx(m3,{children:s.jsxs("tr",{children:[s.jsx(Ti,{children:"Paciente"}),s.jsx(Ti,{children:"Fecha y Hora"}),s.jsx(Ti,{children:"Motivo"}),s.jsx(Ti,{children:"Estado"}),s.jsx(Ti,{children:"Acciones"})]})}),s.jsx("tbody",{children:d.map(p=>s.jsxs(p3,{children:[s.jsx(Ai,{"data-label":"Paciente",children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",justifyContent:"flex-end"},children:[p.patientName," ",s.jsx(Gc,{style:{color:"#ccc"}})]})}),s.jsx(Ai,{"data-label":"Fecha y Hora",children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",fontSize:"0.9rem",alignItems:"flex-end"},children:[s.jsxs("span",{children:[p.date," ",s.jsx(sp,{size:12})]}),s.jsxs("span",{style:{color:"#666"},children:[p.time," ",s.jsx(qi,{size:12})]})]})}),s.jsx(Ai,{"data-label":"Motivo",children:p.reason}),s.jsx(Ai,{"data-label":"Estado",children:s.jsx(g3,{status:p.status,children:p.status.charAt(0).toUpperCase()+p.status.slice(1)})}),s.jsx(Ai,{"data-label":"Acciones",children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[p.status==="pendiente"&&s.jsxs(s.Fragment,{children:[s.jsx(Ds,{color:"#2e7d32",bg:"#e8f5e9",title:"Confirmar",onClick:()=>c(p.id,"confirmado"),children:s.jsx(ix,{})}),s.jsx(Ds,{color:"#c62828",bg:"#ffebee",title:"Cancelar",onClick:()=>c(p.id,"cancelado"),children:s.jsx(pp,{})})]}),p.status==="cancelado"&&s.jsx(Ds,{color:"#444",bg:"#eee",title:"Eliminar registro",onClick:()=>{window.confirm("¿Eliminar este turno cancelado?")&&o(p.id)},children:s.jsx(Yi,{})})]})})]},p.id))})]})}):s.jsx("div",{style:{textAlign:"center",color:"#666",marginTop:"50px"},children:s.jsx("h3",{children:"No hay turnos asignados por el momento."})})]})},v3=x.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing.xlarge} ${({theme:n})=>n.spacing.large};
`,x3=x.div`
  text-align: center;
  margin-bottom: 40px;
`,b3=x.h2`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 2rem;
  margin-bottom: 8px;
`,S3=x.p`
  color: #666;
  font-size: 1.1rem;
`,j3=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`,_s=x.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    border-color: ${({theme:n})=>n.colors.primary};
  }
`,Ns=x.div`
  font-size: 3rem;
  color: ${({theme:n})=>n.colors.primary};
  margin-bottom: 16px;
`,Us=x.h3`
  color: ${({theme:n})=>n.colors.secondary};
  margin-bottom: 8px;
  font-size: 1.3rem;
`,Hs=x.p`
  color: #777;
  font-size: 0.9rem;
`,z3=()=>{const{user:n}=It(),c=Rt();return s.jsxs(v3,{children:[s.jsxs(x3,{children:[s.jsxs(b3,{children:["¡Hola, ",n?.name||"Paciente","!"]}),s.jsx(S3,{children:"¿Cómo podemos ayudarte hoy?"})]}),s.jsxs(j3,{children:[s.jsxs(_s,{onClick:()=>c("/especialidades"),children:[s.jsx(Ns,{children:s.jsx(nx,{})}),s.jsx(Us,{children:"Reservar Turno"}),s.jsx(Hs,{children:"Elegí especialidad y profesional"})]}),s.jsxs(_s,{onClick:()=>c("/mis-turnos"),children:[s.jsx(Ns,{children:s.jsx(ox,{})}),s.jsx(Us,{children:"Mis Turnos"}),s.jsx(Hs,{children:"Ver turnos programados e historial"})]}),s.jsxs(_s,{onClick:()=>c("/perfil"),children:[s.jsx(Ns,{children:s.jsx(gp,{})}),s.jsx(Us,{children:"Mi Perfil"}),s.jsx(Hs,{children:"Actualizar datos personales"})]})]})]})},E3=x.div`
  padding: ${({theme:n})=>n.spacing.large} 0;
`,C3=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:n})=>n.spacing.xlarge};
`,T3=x.button`
    background: none;
    border: none;
    color: ${({theme:n})=>n.colors.primary};
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`,A3=x.h2`
  text-align: center;
  color: ${({theme:n})=>n.colors.secondary};
  flex: 1;
`,w3=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:n})=>n.spacing.large};
`,O3=x.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`,M3=x.div`
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,R3=x.div`
  padding: ${({theme:n})=>n.spacing.large};
  flex: 1;
  display: flex;
  flex-direction: column;
`,D3=x.h3`
  margin: 0 0 ${({theme:n})=>n.spacing.small};
  color: ${({theme:n})=>n.colors.text};
`,_3=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:n})=>n.colors.primary};
  font-weight: 500;
  margin-bottom: ${({theme:n})=>n.spacing.large};
`,N3=x(Ft)`
  margin-top: auto;
  display: block;
  text-align: center;
  background-color: ${({theme:n})=>n.colors.primary};
  color: white;
  padding: 10px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    background-color: ${({theme:n})=>n.colors.secondary};
  }
`,U3=x.div`
    text-align: center;
    grid-column: 1 / -1;
    color: #666;
    font-size: 1.2rem;
    padding: 40px;
`,H3=()=>{const{doctors:n}=Pt(),[c]=Av(),o=Rt(),u=c.get("specialty"),d=u?n.filter(h=>h.specialty===u&&h.approved!==!1):n.filter(h=>h.approved!==!1);return s.jsxs(E3,{children:[s.jsxs(C3,{children:[u&&s.jsxs(T3,{onClick:()=>o("/especialidades"),children:[s.jsx(Pv,{})," Volver"]}),s.jsx(A3,{children:u?`Especialistas en ${u}`:"Nuestros Profesionales"}),s.jsx("div",{style:{width:"100px"}})," "]}),s.jsx(w3,{children:d.length>0?d.map(h=>s.jsxs(O3,{children:[s.jsx(M3,{children:s.jsx("img",{src:h.image,alt:h.name})}),s.jsxs(R3,{children:[s.jsx(D3,{children:h.name}),s.jsxs(_3,{children:[s.jsx(bf,{})," ",h.specialty]}),s.jsx(N3,{to:`/medico/${h.id}`,children:"Solicitar Turno"})]})]},h.id)):s.jsxs(U3,{children:["No se encontraron profesionales para esta especialidad.",s.jsx("br",{}),s.jsx("br",{}),s.jsx(Ft,{to:"/especialidades",style:{color:"#2a9d8f"},children:"Ver otras especialidades"})]})})]})},pm=x.div`
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`,$3=x.div`
  background: ${({theme:n})=>n.colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: ${({theme:n})=>n.spacing.xlarge};
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing.large};
  margin-bottom: ${({theme:n})=>n.spacing.xlarge};

  @media (min-width: ${({theme:n})=>n.breakpoints.mobile}) {
    flex-direction: row;
    align-items: center;
  }
`,B3=x.div`
  width: 120px;
  height: 120px;
  background-color: #f0f0f0;
  border-radius: 50%;
  color: ${({theme:n})=>n.colors.primary};
  flex-shrink: 0;
  margin: 0 auto;
  overflow: hidden;
  
  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }

  @media (min-width: ${({theme:n})=>n.breakpoints.mobile}) {
    margin: 0;
  }
`,L3=x.div`
  flex: 1;
  text-align: center;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.mobile}) {
    text-align: left;
  }
`,q3=x.h2`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 2rem;
  margin-bottom: ${({theme:n})=>n.spacing.small};
`,Y3=x.p`
  color: ${({theme:n})=>n.colors.primary};
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${({theme:n})=>n.spacing.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
`,G3=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #666;
  font-size: 0.95rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media (min-width: ${({theme:n})=>n.breakpoints.mobile}) {
      justify-content: flex-start;
    }
  }

  svg {
    color: ${({theme:n})=>n.colors.primary};
  }
`,V3=x.div`
  background: ${({theme:n})=>n.colors.white};
  border-radius: 12px;
  padding: ${({theme:n})=>n.spacing.large};
  box-shadow: 0 4px 6px rgba(0,0,0,0.04);
`,X3=x.h3`
  color: ${({theme:n})=>n.colors.secondary};
  border-bottom: 2px solid ${({theme:n})=>n.colors.accent};
  padding-bottom: ${({theme:n})=>n.spacing.small};
  margin-bottom: ${({theme:n})=>n.spacing.large};
  display: flex;
  align-items: center;
  gap: 10px;
`,Q3=x.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
`,$s=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Bs=x.label`
  font-weight: 600;
  color: #555;
`,gm=x.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
`,Z3=x.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
`,k3=x.button`
  background-color: ${({theme:n})=>n.colors.primary};
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({theme:n})=>n.colors.secondary};
  }

  &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
  }
`,J3=x.p`
    color: #c62828;
    background: #ffebee;
    padding: 10px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
`,K3=()=>{const{id:n}=Hy(),c=Rt(),{doctors:o,checkAvailability:u,addAppointment:d}=Pt(),{user:h}=It(),[p,b]=A.useState({date:"",time:"",reason:""}),[y,g]=A.useState(""),E=n&&o.length>0?o.find(R=>R.id===Number(n)):null,j=R=>{if(R.preventDefault(),g(""),!p.date||!p.time||!p.reason){g("Por favor complete todos los campos.");return}if(!u(n,p.date,p.time)){g("El médico no tiene disponibilidad en ese horario.");return}d({doctorId:Number(n),doctorName:E.name,patientName:h?.name||"Paciente",patientId:h?.id,patientEmail:h?.email,date:p.date,time:p.time,reason:p.reason}),c("/mis-turnos")};return E?s.jsxs(pm,{children:[s.jsxs($3,{children:[s.jsx(B3,{children:E.image?s.jsx("img",{src:E.image,alt:E.name}):s.jsx(On,{size:50})}),s.jsxs(L3,{children:[s.jsx(q3,{children:E.name}),s.jsx(Y3,{children:E.specialty}),s.jsxs(G3,{children:[s.jsxs("div",{children:[s.jsx(qi,{}),s.jsx("span",{children:"Horarios: 08:00 - 20:00"})]}),s.jsxs("div",{children:[s.jsx(vf,{}),s.jsx("span",{children:E.email||"contacto@clinica.com"})]})]})]})]}),s.jsxs(V3,{children:[s.jsxs(X3,{children:[s.jsx(ax,{}),"Solicitar Turno"]}),y&&s.jsxs(J3,{children:[s.jsx(dp,{})," ",y]}),s.jsxs(Q3,{onSubmit:j,children:[s.jsxs($s,{children:[s.jsx(Bs,{children:"Fecha"}),s.jsx(gm,{type:"date",min:new Date().toISOString().split("T")[0],value:p.date,onChange:R=>b({...p,date:R.target.value})})]}),s.jsxs($s,{children:[s.jsx(Bs,{children:"Horario"}),s.jsxs(Z3,{value:p.time,onChange:R=>b({...p,time:R.target.value}),disabled:!p.date,children:[s.jsx("option",{value:"",children:"Seleccione Horario"}),["09:00","10:00","11:30","14:00","16:00","17:30"].map(R=>{const O=p.date?u(n,p.date,R):!0;return s.jsxs("option",{value:R,disabled:!O,children:[R," ",p.date&&!O?"(Ocupado)":""]},R)})]})]}),s.jsxs($s,{children:[s.jsx(Bs,{children:"Motivo de Consulta"}),s.jsx(gm,{placeholder:"Ej: Dolor de cabeza, Chequeo...",value:p.reason,onChange:R=>b({...p,reason:R.target.value})})]}),s.jsx(k3,{type:"submit",children:"Confirmar Turno"})]})]})]}):s.jsx(pm,{children:"Cargando información del médico..."})},F3=x.div`
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`,W3=x.div`
  background: ${({theme:n})=>n.colors.white};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  padding: ${({theme:n})=>n.spacing.xlarge};
  position: relative;
  overflow: hidden;
`,I3=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background-color: ${({status:n})=>n==="confirmado"?"#2e7d32":"#fbc02d"};
`,P3=x.div`
  text-align: center;
  margin-bottom: ${({theme:n})=>n.spacing.large};
`,eb=x.span`
  background-color: ${({status:n})=>n==="confirmado"?"#e8f5e9":"#fff9c4"};
  color: ${({status:n})=>n==="confirmado"?"#2e7d32":"#f57f17"};
  padding: 6px 16px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  margin-bottom: ${({theme:n})=>n.spacing.medium};
`,tb=x.h2`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 1.8rem;
  margin: 0;
`,ab=x.p`
  color: #777;
  font-size: 0.95rem;
  margin-top: ${({theme:n})=>n.spacing.small};
`,nb=x.div`
  display: grid;
  gap: ${({theme:n})=>n.spacing.large};
  margin-top: ${({theme:n})=>n.spacing.xlarge};
`,Ls=x.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: ${({theme:n})=>n.spacing.medium};
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`,qs=x.div`
  background-color: ${({theme:n})=>n.colors.accent};
  color: ${({theme:n})=>n.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`,Ys=x.div`
  display: flex;
  flex-direction: column;
`,Gs=x.span`
  font-size: 0.85rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 4px;
`,Vs=x.span`
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
`,Ta={id:12345,status:"confirmado",doctor:"Dr. Gregory House",specialty:"Diagnóstico Clínico",date:"Jueves 8 de Junio",time:"09:00 hs",reason:"Consulta de control y seguimiento de tratamiento."},lb=()=>s.jsx(F3,{children:s.jsxs(W3,{children:[s.jsx(I3,{status:Ta.status}),s.jsxs(P3,{children:[s.jsxs(eb,{status:Ta.status,children:[s.jsx(lx,{})," ",Ta.status]}),s.jsx(tb,{children:"Detalle del Turno"}),s.jsxs(ab,{children:["Código de reserva: #",Ta.id]})]}),s.jsxs(nb,{children:[s.jsxs(Ls,{children:[s.jsx(qs,{children:s.jsx(On,{})}),s.jsxs(Ys,{children:[s.jsx(Gs,{children:"Profesional"}),s.jsx(Vs,{children:Ta.doctor}),s.jsx("span",{style:{fontSize:"0.9rem",color:"#666"},children:Ta.specialty})]})]}),s.jsxs(Ls,{children:[s.jsx(qs,{children:s.jsx(sp,{})}),s.jsxs(Ys,{children:[s.jsx(Gs,{children:"Fecha y Hora"}),s.jsxs(Vs,{children:[Ta.date," - ",Ta.time]})]})]}),s.jsxs(Ls,{children:[s.jsx(qs,{children:s.jsx(mp,{})}),s.jsxs(Ys,{children:[s.jsx(Gs,{children:"Motivo de Consulta"}),s.jsx(Vs,{children:Ta.reason})]})]})]})]})}),ib=x.div`
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  max-width: 1000px;
  margin: 0 auto;
`,rb=x.div`
  text-align: center;
  margin-bottom: ${({theme:n})=>n.spacing.xlarge};
`,cb=x.h1`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 2.5rem;
  margin-bottom: ${({theme:n})=>n.spacing.medium};
`,ub=x.p`
  color: #666;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`,Xs=x.div`
  margin: ${({theme:n})=>n.spacing.xlarge} 0;
`,Qs=x.h2`
  color: ${({theme:n})=>n.colors.primary};
  font-size: 1.8rem;
  margin-bottom: ${({theme:n})=>n.spacing.large};
  text-align: center;
`,ob=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:n})=>n.spacing.large};
  margin-top: ${({theme:n})=>n.spacing.large};
`,yl=x.div`
  background: white;
  padding: ${({theme:n})=>n.spacing.large};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`,wi=x.div`
  font-size: 3rem;
  color: ${({theme:n})=>n.colors.primary};
  margin-bottom: ${({theme:n})=>n.spacing.medium};
`,Oi=x.h3`
  color: ${({theme:n})=>n.colors.secondary};
  margin-bottom: ${({theme:n})=>n.spacing.small};
`,vl=x.p`
  color: #666;
  line-height: 1.5;
`,sb=x.div`
  width: 100%;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-top: ${({theme:n})=>n.spacing.large};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    height: 350px;
  }
`,fb=()=>s.jsxs(ib,{children:[s.jsxs(rb,{children:[s.jsx(cb,{children:"Acerca de Nosotros"}),s.jsx(ub,{children:"Clínica Azahares es un centro de salud integral comprometido con brindar atención médica de excelencia a nuestra comunidad. Nuestro equipo de profesionales altamente capacitados trabaja día a día para cuidar tu salud y bienestar."})]}),s.jsxs(Xs,{children:[s.jsx(Qs,{children:"Nuestros Valores"}),s.jsxs(ob,{children:[s.jsxs(yl,{children:[s.jsx(wi,{children:s.jsx(rx,{})}),s.jsx(Oi,{children:"Compromiso"}),s.jsx(vl,{children:"Nos dedicamos plenamente al cuidado y bienestar de nuestros pacientes."})]}),s.jsxs(yl,{children:[s.jsx(wi,{children:s.jsx(On,{})}),s.jsx(Oi,{children:"Profesionalismo"}),s.jsx(vl,{children:"Contamos con un equipo médico altamente calificado y en constante actualización."})]}),s.jsxs(yl,{children:[s.jsx(wi,{children:s.jsx(ex,{})}),s.jsx(Oi,{children:"Excelencia"}),s.jsx(vl,{children:"Nos esforzamos por ofrecer servicios de la más alta calidad en cada consulta."})]}),s.jsxs(yl,{children:[s.jsx(wi,{children:s.jsx(qi,{})}),s.jsx(Oi,{children:"Disponibilidad"}),s.jsx(vl,{children:"Horarios flexibles y atención personalizada para adaptarnos a tus necesidades."})]})]})]}),s.jsxs(Xs,{children:[s.jsx(Qs,{children:"Nuestra Misión"}),s.jsx(yl,{children:s.jsx(vl,{style:{fontSize:"1.1rem",textAlign:"left"},children:"Proveer servicios de salud integrales, accesibles y de calidad a nuestra comunidad, trabajando con un enfoque humano y tecnología de punta. Nos comprometemos a estar cerca de vos en cada etapa de tu vida, brindando atención médica personalizada que te permita vivir de manera más saludable y plena."})})]}),s.jsxs(Xs,{children:[s.jsx(Qs,{children:"Nuestra Ubicación"}),s.jsxs(yl,{children:[s.jsx(wi,{children:s.jsx(hp,{})}),s.jsx(Oi,{children:"Visitanos"}),s.jsx(vl,{style:{fontSize:"1.1rem",marginBottom:"1.5rem"},children:"Estamos ubicados en el corazón de la ciudad para brindarte fácil acceso a nuestros servicios médicos. ¡Te esperamos!"}),s.jsx(sb,{children:s.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.6024491996241!2d-64.25493863167316!3d-27.7900896405551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b5210037e8ae1%3A0xf259a2c1623991a5!2sDr.%20Dar%C3%ADo%20Ledesma!5e0!3m2!1ses!2sar!4v1770240429763!5m2!1ses!2sar",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Ubicación de Clínica Azahares"})})]})]})]}),db=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${({theme:n})=>n.spacing.xlarge};
  text-align: center;
`,hb=x.div`
  font-size: 6rem;
  color: ${({theme:n})=>n.colors.primary};
  margin-bottom: ${({theme:n})=>n.spacing.large};
  opacity: 0.3;
`,mb=x.h1`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 4rem;
  margin-bottom: ${({theme:n})=>n.spacing.medium};
`,pb=x.h2`
  color: #666;
  font-size: 1.5rem;
  margin-bottom: ${({theme:n})=>n.spacing.large};
`,gb=x.p`
  color: #888;
  font-size: 1.1rem;
  margin-bottom: ${({theme:n})=>n.spacing.xlarge};
  max-width: 500px;
`,yb=x.button`
  background-color: ${({theme:n})=>n.colors.primary};
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({theme:n})=>n.colors.secondary};
    transform: translateY(-2px);
  }
`,vb=()=>{const n=Rt();return s.jsxs(db,{children:[s.jsx(hb,{children:s.jsx(dp,{})}),s.jsx(mb,{children:"404"}),s.jsx(pb,{children:"Página No Encontrada"}),s.jsx(gb,{children:"Lo sentimos, la página que estás buscando no existe o ha sido movida."}),s.jsx(yb,{onClick:()=>n("/"),children:"Volver al Inicio"})]})},xb=x.div`
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  max-width: 800px;
  margin: 0 auto;
`,bb=x.h2`
  text-align: center;
  color: ${({theme:n})=>n.colors.secondary};
  margin-bottom: 40px;
`,Sb=x.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 5px solid ${({theme:n})=>n.colors.primary};

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 30px;
  }
`,jb=x.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,zb=x.h3`
    margin: 0;
    color: #333;
    font-size: 1.1rem;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        font-size: 1.3rem;
    }
`,Eb=x.div`
    color: #666;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        font-size: 1.1rem;
    }
`,Cb=x.p`
    color: #888;
    font-size: 0.9rem;
    margin: 5px 0 0 0;
    font-style: italic;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        font-size: 1.05rem;
    }
`,Tb=x.span`
    background-color: #e8f5e9;
    color: #2e7d32;
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        font-size: 1.1rem;
        padding: 10px 18px;
    }
`,Ab=x.div`
    text-align: center;
    color: #999;
    margin-top: 50px;
`,wb=()=>{const{appointments:n}=Pt(),{user:c}=It(),o=n.filter(u=>c?.id&&u.patientId===c.id||c?.email&&u.patientEmail===c.email||c?.name&&u.patientName===c.name);return s.jsxs(xb,{children:[s.jsx(bb,{children:"Mis Turnos Programados"}),o.length>0?o.map(u=>s.jsxs(Sb,{children:[s.jsxs(jb,{children:[s.jsxs(zb,{children:[s.jsx(On,{style:{marginRight:8}}),u.doctorName||"Dr. Desconocido"]}),s.jsxs(Eb,{children:[s.jsx($i,{})," ",u.date,s.jsx(qi,{style:{marginLeft:10}})," ",u.time]}),s.jsxs(Cb,{children:['"',u.reason,'"']})]}),s.jsx(Tb,{children:u.status})]},u.id)):s.jsxs(Ab,{children:[s.jsx("h3",{children:"No tenés turnos programados."}),s.jsx("p",{children:'Utilizá la opción "Reservar Turno" para agendar una cita.'})]})]})},Ob=x.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing.xlarge} ${({theme:n})=>n.spacing.medium};
  text-align: center;
`,Mb=x.div`
  margin-bottom: 40px;
`,Rb=x.div`
  font-size: 3.5rem;
  color: ${({theme:n})=>n.colors.primary}; /* Teal/Green */
  margin-bottom: 10px;
`,Db=x.h2`
  color: ${({theme:n})=>n.colors.primary};
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 10px;
`,_b=x.p`
  color: #666;
  font-size: 1rem;
`,Nb=x.h3`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: #333;
`,Ub=x.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 15px;
`,Hb=x.button`
  background-color: #2a9d8f; /* Teal color from image reference */
  color: white;
  border: none;
  border-radius: 6px;
  padding: 15px 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover {
    background-color: #21867a;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,$b=()=>{const n=Rt(),{specialties:c}=Pt(),o=u=>{n(`/profesionales?specialty=${encodeURIComponent(u)}`)};return s.jsxs(Ob,{children:[s.jsxs(Mb,{children:[s.jsx(Rb,{children:s.jsx($i,{})}),s.jsx(Db,{children:"Reservar Turno"}),s.jsx(_b,{children:"Turno Presencial"})]}),s.jsx(Nb,{children:"Elige una especialidad:"}),s.jsx(Ub,{children:c.map(u=>s.jsx(Hb,{onClick:()=>o(u.name),children:u.name},u.id))})]})};function Bb(){return s.jsxs(F4,{theme:_v,children:[s.jsx(Nv,{}),s.jsx(Yv,{children:s.jsx(Gv,{children:s.jsx(jv,{basename:"/proyecto-clinica-rolling",children:s.jsx(Dx,{children:s.jsxs(Wy,{children:[s.jsx(rt,{path:"/",element:s.jsx(Jx,{})}),s.jsx(rt,{path:"/register",element:s.jsx(f6,{})}),s.jsx(rt,{path:"/register/paciente",element:s.jsx(v6,{})}),s.jsx(rt,{path:"/register/medico",element:s.jsx(C6,{})}),s.jsx(rt,{path:"/login",element:s.jsx(l6,{})}),s.jsx(rt,{path:"/admin",element:s.jsx(En,{requiredRole:"admin",children:s.jsx(c3,{})})}),s.jsx(rt,{path:"/turnos-medico",element:s.jsx(En,{requiredRole:"medico",children:s.jsx(y3,{})})}),s.jsx(rt,{path:"/menu-paciente",element:s.jsx(En,{requiredRole:"paciente",children:s.jsx(z3,{})})}),s.jsx(rt,{path:"/mis-turnos",element:s.jsx(En,{requiredRole:"paciente",children:s.jsx(wb,{})})}),s.jsx(rt,{path:"/especialidades",element:s.jsx(En,{requiredRole:"paciente",children:s.jsx($b,{})})}),s.jsx(rt,{path:"/profesionales",element:s.jsx(En,{requiredRole:"paciente",children:s.jsx(H3,{})})}),s.jsx(rt,{path:"/medico/:id",element:s.jsx(En,{requiredRole:"paciente",children:s.jsx(K3,{})})}),s.jsx(rt,{path:"/turno",element:s.jsx(lb,{})}),s.jsx(rt,{path:"/nosotros",element:s.jsx(fb,{})}),s.jsx(rt,{path:"*",element:s.jsx(vb,{})})]})})})})})]})}Fg.createRoot(document.getElementById("root")).render(s.jsx(A.StrictMode,{children:s.jsx(Bb,{})}));
