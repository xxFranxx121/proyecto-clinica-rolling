(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function o(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(d){if(d.ep)return;d.ep=!0;const h=o(d);fetch(d.href,h)}})();function Ug(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var cs={exports:{}},xi={};var xh;function Hg(){if(xh)return xi;xh=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(u,d,h){var p=null;if(h!==void 0&&(p=""+h),d.key!==void 0&&(p=""+d.key),"key"in d){h={};for(var x in d)x!=="key"&&(h[x]=d[x])}else h=d;return d=h.ref,{$$typeof:n,type:u,key:p,ref:d!==void 0?d:null,props:h}}return xi.Fragment=r,xi.jsx=o,xi.jsxs=o,xi}var bh;function $g(){return bh||(bh=1,cs.exports=Hg()),cs.exports}var s=$g(),rs={exports:{}},le={};var Sh;function Bg(){if(Sh)return le;Sh=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),T=Symbol.iterator;function _(j){return j===null||typeof j!="object"?null:(j=T&&j[T]||j["@@iterator"],typeof j=="function"?j:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,X={};function Q(j,H,k){this.props=j,this.context=H,this.refs=X,this.updater=k||G}Q.prototype.isReactComponent={},Q.prototype.setState=function(j,H){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,H,"setState")},Q.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function q(){}q.prototype=Q.prototype;function L(j,H,k){this.props=j,this.context=H,this.refs=X,this.updater=k||G}var W=L.prototype=new q;W.constructor=L,V(W,Q.prototype),W.isPureReactComponent=!0;var P=Array.isArray;function Y(){}var R={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function ce(j,H,k){var J=k.ref;return{$$typeof:n,type:j,key:H,ref:J!==void 0?J:null,props:k}}function se(j,H){return ce(j.type,H,j.props)}function Be(j){return typeof j=="object"&&j!==null&&j.$$typeof===n}function Re(j){var H={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(k){return H[k]})}var gt=/\/+/g;function ut(j,H){return typeof j=="object"&&j!==null&&j.key!=null?Re(""+j.key):H.toString(36)}function yt(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(Y,Y):(j.status="pending",j.then(function(H){j.status==="pending"&&(j.status="fulfilled",j.value=H)},function(H){j.status==="pending"&&(j.status="rejected",j.reason=H)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function U(j,H,k,J,ne){var re=typeof j;(re==="undefined"||re==="boolean")&&(j=null);var ye=!1;if(j===null)ye=!0;else switch(re){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(j.$$typeof){case n:case r:ye=!0;break;case z:return ye=j._init,U(ye(j._payload),H,k,J,ne)}}if(ye)return ne=ne(j),ye=J===""?"."+ut(j,0):J,P(ne)?(k="",ye!=null&&(k=ye.replace(gt,"$&/")+"/"),U(ne,H,k,"",function(It){return It})):ne!=null&&(Be(ne)&&(ne=se(ne,k+(ne.key==null||j&&j.key===ne.key?"":(""+ne.key).replace(gt,"$&/")+"/")+ye)),H.push(ne)),1;ye=0;var Ve=J===""?".":J+":";if(P(j))for(var Te=0;Te<j.length;Te++)J=j[Te],re=Ve+ut(J,Te),ye+=U(J,H,k,re,ne);else if(Te=_(j),typeof Te=="function")for(j=Te.call(j),Te=0;!(J=j.next()).done;)J=J.value,re=Ve+ut(J,Te++),ye+=U(J,H,k,re,ne);else if(re==="object"){if(typeof j.then=="function")return U(yt(j),H,k,J,ne);throw H=String(j),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ye}function Z(j,H,k){if(j==null)return j;var J=[],ne=0;return U(j,J,"","",function(re){return H.call(k,re,ne++)}),J}function te(j){if(j._status===-1){var H=j._result;H=H(),H.then(function(k){(j._status===0||j._status===-1)&&(j._status=1,j._result=k)},function(k){(j._status===0||j._status===-1)&&(j._status=2,j._result=k)}),j._status===-1&&(j._status=0,j._result=H)}if(j._status===1)return j._result.default;throw j._result}var fe=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},ve={map:Z,forEach:function(j,H,k){Z(j,function(){H.apply(this,arguments)},k)},count:function(j){var H=0;return Z(j,function(){H++}),H},toArray:function(j){return Z(j,function(H){return H})||[]},only:function(j){if(!Be(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return le.Activity=E,le.Children=ve,le.Component=Q,le.Fragment=o,le.Profiler=d,le.PureComponent=L,le.StrictMode=u,le.Suspense=y,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,le.__COMPILER_RUNTIME={__proto__:null,c:function(j){return R.H.useMemoCache(j)}},le.cache=function(j){return function(){return j.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(j,H,k){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var J=V({},j.props),ne=j.key;if(H!=null)for(re in H.key!==void 0&&(ne=""+H.key),H)!F.call(H,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&H.ref===void 0||(J[re]=H[re]);var re=arguments.length-2;if(re===1)J.children=k;else if(1<re){for(var ye=Array(re),Ve=0;Ve<re;Ve++)ye[Ve]=arguments[Ve+2];J.children=ye}return ce(j.type,ne,J)},le.createContext=function(j){return j={$$typeof:p,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:h,_context:j},j},le.createElement=function(j,H,k){var J,ne={},re=null;if(H!=null)for(J in H.key!==void 0&&(re=""+H.key),H)F.call(H,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ne[J]=H[J]);var ye=arguments.length-2;if(ye===1)ne.children=k;else if(1<ye){for(var Ve=Array(ye),Te=0;Te<ye;Te++)Ve[Te]=arguments[Te+2];ne.children=Ve}if(j&&j.defaultProps)for(J in ye=j.defaultProps,ye)ne[J]===void 0&&(ne[J]=ye[J]);return ce(j,re,ne)},le.createRef=function(){return{current:null}},le.forwardRef=function(j){return{$$typeof:x,render:j}},le.isValidElement=Be,le.lazy=function(j){return{$$typeof:z,_payload:{_status:-1,_result:j},_init:te}},le.memo=function(j,H){return{$$typeof:g,type:j,compare:H===void 0?null:H}},le.startTransition=function(j){var H=R.T,k={};R.T=k;try{var J=j(),ne=R.S;ne!==null&&ne(k,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Y,fe)}catch(re){fe(re)}finally{H!==null&&k.types!==null&&(H.types=k.types),R.T=H}},le.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},le.use=function(j){return R.H.use(j)},le.useActionState=function(j,H,k){return R.H.useActionState(j,H,k)},le.useCallback=function(j,H){return R.H.useCallback(j,H)},le.useContext=function(j){return R.H.useContext(j)},le.useDebugValue=function(){},le.useDeferredValue=function(j,H){return R.H.useDeferredValue(j,H)},le.useEffect=function(j,H){return R.H.useEffect(j,H)},le.useEffectEvent=function(j){return R.H.useEffectEvent(j)},le.useId=function(){return R.H.useId()},le.useImperativeHandle=function(j,H,k){return R.H.useImperativeHandle(j,H,k)},le.useInsertionEffect=function(j,H){return R.H.useInsertionEffect(j,H)},le.useLayoutEffect=function(j,H){return R.H.useLayoutEffect(j,H)},le.useMemo=function(j,H){return R.H.useMemo(j,H)},le.useOptimistic=function(j,H){return R.H.useOptimistic(j,H)},le.useReducer=function(j,H,k){return R.H.useReducer(j,H,k)},le.useRef=function(j){return R.H.useRef(j)},le.useState=function(j){return R.H.useState(j)},le.useSyncExternalStore=function(j,H,k){return R.H.useSyncExternalStore(j,H,k)},le.useTransition=function(){return R.H.useTransition()},le.version="19.2.4",le}var jh;function af(){return jh||(jh=1,rs.exports=Bg()),rs.exports}var O=af();const Ue=Ug(O);var us={exports:{}},bi={},os={exports:{}},ss={};var Eh;function Lg(){return Eh||(Eh=1,(function(n){function r(U,Z){var te=U.length;U.push(Z);e:for(;0<te;){var fe=te-1>>>1,ve=U[fe];if(0<d(ve,Z))U[fe]=Z,U[te]=ve,te=fe;else break e}}function o(U){return U.length===0?null:U[0]}function u(U){if(U.length===0)return null;var Z=U[0],te=U.pop();if(te!==Z){U[0]=te;e:for(var fe=0,ve=U.length,j=ve>>>1;fe<j;){var H=2*(fe+1)-1,k=U[H],J=H+1,ne=U[J];if(0>d(k,te))J<ve&&0>d(ne,k)?(U[fe]=ne,U[J]=te,fe=J):(U[fe]=k,U[H]=te,fe=H);else if(J<ve&&0>d(ne,te))U[fe]=ne,U[J]=te,fe=J;else break e}}return Z}function d(U,Z){var te=U.sortIndex-Z.sortIndex;return te!==0?te:U.id-Z.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;n.unstable_now=function(){return h.now()}}else{var p=Date,x=p.now();n.unstable_now=function(){return p.now()-x}}var y=[],g=[],z=1,E=null,T=3,_=!1,G=!1,V=!1,X=!1,Q=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function W(U){for(var Z=o(g);Z!==null;){if(Z.callback===null)u(g);else if(Z.startTime<=U)u(g),Z.sortIndex=Z.expirationTime,r(y,Z);else break;Z=o(g)}}function P(U){if(V=!1,W(U),!G)if(o(y)!==null)G=!0,Y||(Y=!0,Re());else{var Z=o(g);Z!==null&&yt(P,Z.startTime-U)}}var Y=!1,R=-1,F=5,ce=-1;function se(){return X?!0:!(n.unstable_now()-ce<F)}function Be(){if(X=!1,Y){var U=n.unstable_now();ce=U;var Z=!0;try{e:{G=!1,V&&(V=!1,q(R),R=-1),_=!0;var te=T;try{t:{for(W(U),E=o(y);E!==null&&!(E.expirationTime>U&&se());){var fe=E.callback;if(typeof fe=="function"){E.callback=null,T=E.priorityLevel;var ve=fe(E.expirationTime<=U);if(U=n.unstable_now(),typeof ve=="function"){E.callback=ve,W(U),Z=!0;break t}E===o(y)&&u(y),W(U)}else u(y);E=o(y)}if(E!==null)Z=!0;else{var j=o(g);j!==null&&yt(P,j.startTime-U),Z=!1}}break e}finally{E=null,T=te,_=!1}Z=void 0}}finally{Z?Re():Y=!1}}}var Re;if(typeof L=="function")Re=function(){L(Be)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,ut=gt.port2;gt.port1.onmessage=Be,Re=function(){ut.postMessage(null)}}else Re=function(){Q(Be,0)};function yt(U,Z){R=Q(function(){U(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_next=function(U){switch(T){case 1:case 2:case 3:var Z=3;break;default:Z=T}var te=T;T=Z;try{return U()}finally{T=te}},n.unstable_requestPaint=function(){X=!0},n.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var te=T;T=U;try{return Z()}finally{T=te}},n.unstable_scheduleCallback=function(U,Z,te){var fe=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?fe+te:fe):te=fe,U){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=te+ve,U={id:z++,callback:Z,priorityLevel:U,startTime:te,expirationTime:ve,sortIndex:-1},te>fe?(U.sortIndex=te,r(g,U),o(y)===null&&U===o(g)&&(V?(q(R),R=-1):V=!0,yt(P,te-fe))):(U.sortIndex=ve,r(y,U),G||_||(G=!0,Y||(Y=!0,Re()))),U},n.unstable_shouldYield=se,n.unstable_wrapCallback=function(U){var Z=T;return function(){var te=T;T=Z;try{return U.apply(this,arguments)}finally{T=te}}}})(ss)),ss}var zh;function Yg(){return zh||(zh=1,os.exports=Lg()),os.exports}var fs={exports:{}},it={};var Ch;function qg(){if(Ch)return it;Ch=1;var n=af();function r(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)g+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var u={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(y,g,z){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:E==null?null:""+E,children:y,containerInfo:g,implementation:z}}var p=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,it.createPortal=function(y,g){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return h(y,g,null,z)},it.flushSync=function(y){var g=p.T,z=u.p;try{if(p.T=null,u.p=2,y)return y()}finally{p.T=g,u.p=z,u.d.f()}},it.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,u.d.C(y,g))},it.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},it.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var z=g.as,E=x(z,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,_=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;z==="style"?u.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:T,fetchPriority:_}):z==="script"&&u.d.X(y,{crossOrigin:E,integrity:T,fetchPriority:_,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},it.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var z=x(g.as,g.crossOrigin);u.d.M(y,{crossOrigin:z,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&u.d.M(y)},it.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var z=g.as,E=x(z,g.crossOrigin);u.d.L(y,z,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},it.preloadModule=function(y,g){if(typeof y=="string")if(g){var z=x(g.as,g.crossOrigin);u.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:z,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else u.d.m(y)},it.requestFormReset=function(y){u.d.r(y)},it.unstable_batchedUpdates=function(y,g){return y(g)},it.useFormState=function(y,g,z){return p.H.useFormState(y,g,z)},it.useFormStatus=function(){return p.H.useHostTransitionStatus()},it.version="19.2.4",it}var Th;function Gg(){if(Th)return fs.exports;Th=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),fs.exports=qg(),fs.exports}var Ah;function Vg(){if(Ah)return bi;Ah=1;var n=Yg(),r=af(),o=Gg();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(u(188))}function g(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var c=i.alternate;if(c===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===c.child){for(c=i.child;c;){if(c===a)return y(i),e;if(c===l)return y(i),t;c=c.sibling}throw Error(u(188))}if(a.return!==l.return)a=i,l=c;else{for(var f=!1,m=i.child;m;){if(m===a){f=!0,a=i,l=c;break}if(m===l){f=!0,l=i,a=c;break}m=m.sibling}if(!f){for(m=c.child;m;){if(m===a){f=!0,a=c,l=i;break}if(m===l){f=!0,l=c,a=i;break}m=m.sibling}if(!f)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=z(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,T=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),L=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),Be=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=Be&&e[Be]||e["@@iterator"],typeof e=="function"?e:null)}var gt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===gt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case Q:return"Profiler";case X:return"StrictMode";case P:return"Suspense";case Y:return"SuspenseList";case ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case L:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return t=e.displayName||null,t!==null?t:ut(e.type)||"Memo";case F:t=e._payload,e=e._init;try{return ut(e(t))}catch{}}return null}var yt=Array.isArray,U=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},fe=[],ve=-1;function j(e){return{current:e}}function H(e){0>ve||(e.current=fe[ve],fe[ve]=null,ve--)}function k(e,t){ve++,fe[ve]=e.current,e.current=t}var J=j(null),ne=j(null),re=j(null),ye=j(null);function Ve(e,t){switch(k(re,t),k(ne,e),k(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?G1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=G1(t),e=V1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(J),k(J,e)}function Te(){H(J),H(ne),H(re)}function It(e){e.memoizedState!==null&&k(ye,e);var t=J.current,a=V1(t,e.type);t!==a&&(k(ne,e),k(J,a))}function Pt(e){ne.current===e&&(H(J),H(ne)),ye.current===e&&(H(ye),pi._currentValue=te)}var vt,Mn;function Dt(e){if(vt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);vt=t&&t[1]||"",Mn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+e+Mn}var ea=!1;function Vr(e,t){if(!e||ea)return"";ea=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(D){var M=D}Reflect.construct(e,[],B)}else{try{B.call()}catch(D){M=D}e.call(B.prototype)}}else{try{throw Error()}catch(D){M=D}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(D){if(D&&M&&typeof D.stack=="string")return[D.stack,M.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),f=c[0],m=c[1];if(f&&m){var v=f.split(`
`),w=m.split(`
`);for(i=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;i<w.length&&!w[i].includes("DetermineComponentFrameRoot");)i++;if(l===v.length||i===w.length)for(l=v.length-1,i=w.length-1;1<=l&&0<=i&&v[l]!==w[i];)i--;for(;1<=l&&0<=i;l--,i--)if(v[l]!==w[i]){if(l!==1||i!==1)do if(l--,i--,0>i||v[l]!==w[i]){var N=`
`+v[l].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=l&&0<=i);break}}}finally{ea=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Dt(a):""}function dp(e,t){switch(e.tag){case 26:case 27:case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return e.child!==t&&t!==null?Dt("Suspense Fallback"):Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return Vr(e.type,!1);case 11:return Vr(e.type.render,!1);case 1:return Vr(e.type,!0);case 31:return Dt("Activity");default:return""}}function xf(e){try{var t="",a=null;do t+=dp(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Xr=Object.prototype.hasOwnProperty,Qr=n.unstable_scheduleCallback,Zr=n.unstable_cancelCallback,hp=n.unstable_shouldYield,mp=n.unstable_requestPaint,xt=n.unstable_now,pp=n.unstable_getCurrentPriorityLevel,bf=n.unstable_ImmediatePriority,Sf=n.unstable_UserBlockingPriority,Yi=n.unstable_NormalPriority,gp=n.unstable_LowPriority,jf=n.unstable_IdlePriority,yp=n.log,vp=n.unstable_setDisableYieldValue,Al=null,bt=null;function Ra(e){if(typeof yp=="function"&&vp(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Al,e)}catch{}}var St=Math.clz32?Math.clz32:Sp,xp=Math.log,bp=Math.LN2;function Sp(e){return e>>>=0,e===0?32:31-(xp(e)/bp|0)|0}var qi=256,Gi=262144,Vi=4194304;function cn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,c=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var m=l&134217727;return m!==0?(l=m&~c,l!==0?i=cn(l):(f&=m,f!==0?i=cn(f):a||(a=m&~e,a!==0&&(i=cn(a))))):(m=l&~c,m!==0?i=cn(m):f!==0?i=cn(f):a||(a=l&~e,a!==0&&(i=cn(a)))),i===0?0:t!==0&&t!==i&&(t&c)===0&&(c=i&-i,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:i}function Ol(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function jp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ef(){var e=Vi;return Vi<<=1,(Vi&62914560)===0&&(Vi=4194304),e}function kr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function wl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ep(e,t,a,l,i,c){var f=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(a=f&~a;0<a;){var N=31-St(a),B=1<<N;m[N]=0,v[N]=-1;var M=w[N];if(M!==null)for(w[N]=null,N=0;N<M.length;N++){var D=M[N];D!==null&&(D.lane&=-536870913)}a&=~B}l!==0&&zf(e,l,0),c!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=c&~(f&~t))}function zf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-St(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Cf(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-St(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function Tf(e,t){var a=t&-t;return a=(a&42)!==0?1:Jr(a),(a&(e.suspendedLanes|t))!==0?0:a}function Jr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Kr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Af(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:dh(e.type))}function Of(e,t){var a=Z.p;try{return Z.p=e,t()}finally{Z.p=a}}var Da=Math.random().toString(36).slice(2),et="__reactFiber$"+Da,ot="__reactProps$"+Da,Rn="__reactContainer$"+Da,Fr="__reactEvents$"+Da,zp="__reactListeners$"+Da,Cp="__reactHandles$"+Da,wf="__reactResources$"+Da,Ml="__reactMarker$"+Da;function Wr(e){delete e[et],delete e[ot],delete e[Fr],delete e[zp],delete e[Cp]}function Dn(e){var t=e[et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Rn]||a[et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=F1(e);e!==null;){if(a=e[et])return a;e=F1(e)}return t}e=a,a=e.parentNode}return null}function _n(e){if(e=e[et]||e[Rn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Nn(e){var t=e[wf];return t||(t=e[wf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Ml]=!0}var Mf=new Set,Rf={};function rn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(Rf[e]=t,e=0;e<t.length;e++)Mf.add(t[e])}var Tp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Df={},_f={};function Ap(e){return Xr.call(_f,e)?!0:Xr.call(Df,e)?!1:Tp.test(e)?_f[e]=!0:(Df[e]=!0,!1)}function Qi(e,t,a){if(Ap(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ra(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function _t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Op(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,c=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){a=""+f,c.call(this,f)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){if(!e._valueTracker){var t=Nf(e)?"checked":"value";e._valueTracker=Op(e,t,""+e[t])}}function Uf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Nf(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wp=/[\n"\\]/g;function Nt(e){return e.replace(wp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Pr(e,t,a,l,i,c,f,m){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+_t(t)):e.value!==""+_t(t)&&(e.value=""+_t(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?eu(e,f,_t(t)):a!=null?eu(e,f,_t(a)):l!=null&&e.removeAttribute("value"),i==null&&c!=null&&(e.defaultChecked=!!c),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+_t(m):e.removeAttribute("name")}function Hf(e,t,a,l,i,c,f,m){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Ir(e);return}a=a!=null?""+_t(a):"",t=t!=null?""+_t(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=m?e.checked:!!l,e.defaultChecked=!!l,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Ir(e)}function eu(e,t,a){t==="number"&&ki(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Hn(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+_t(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $f(e,t,a){if(t!=null&&(t=""+_t(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+_t(a):""}function Bf(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(yt(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=_t(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ir(e)}function $n(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Mp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lf(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Mp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Yf(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&Lf(e,i,l)}else for(var c in t)t.hasOwnProperty(c)&&Lf(e,c,t[c])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ji(e){return Dp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ua(){}var au=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bn=null,Ln=null;function qf(e){var t=_n(e);if(t&&(e=t.stateNode)){var a=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[ot]||null;if(!i)throw Error(u(90));Pr(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Uf(l)}break e;case"textarea":$f(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Hn(e,!!a.multiple,t,!1)}}}var lu=!1;function Gf(e,t,a){if(lu)return e(t,a);lu=!0;try{var l=e(t);return l}finally{if(lu=!1,(Bn!==null||Ln!==null)&&(Uc(),Bn&&(t=Bn,e=Ln,Ln=Bn=null,qf(t),e)))for(t=0;t<e.length;t++)qf(e[t])}}function Dl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[ot]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(oa)try{var _l={};Object.defineProperty(_l,"passive",{get:function(){iu=!0}}),window.addEventListener("test",_l,_l),window.removeEventListener("test",_l,_l)}catch{iu=!1}var _a=null,cu=null,Ki=null;function Vf(){if(Ki)return Ki;var e,t=cu,a=t.length,l,i="value"in _a?_a.value:_a.textContent,c=i.length;for(e=0;e<a&&t[e]===i[e];e++);var f=a-e;for(l=1;l<=f&&t[a-l]===i[c-l];l++);return Ki=i.slice(e,1<l?1-l:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function Xf(){return!1}function st(e){function t(a,l,i,c,f){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=c,this.target=f,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(c):c[m]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Wi:Xf,this.isPropagationStopped=Xf,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ii=st(un),Nl=E({},un,{view:0,detail:0}),_p=st(Nl),ru,uu,Ul,Pi=E({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ul&&(Ul&&e.type==="mousemove"?(ru=e.screenX-Ul.screenX,uu=e.screenY-Ul.screenY):uu=ru=0,Ul=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),Qf=st(Pi),Np=E({},Pi,{dataTransfer:0}),Up=st(Np),Hp=E({},Nl,{relatedTarget:0}),ou=st(Hp),$p=E({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),Bp=st($p),Lp=E({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yp=st(Lp),qp=E({},un,{data:0}),Zf=st(qp),Gp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xp[e])?!!t[e]:!1}function su(){return Qp}var Zp=E({},Nl,{key:function(e){if(e.key){var t=Gp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kp=st(Zp),Jp=E({},Pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=st(Jp),Kp=E({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Fp=st(Kp),Wp=E({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ip=st(Wp),Pp=E({},Pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e2=st(Pp),t2=E({},un,{newState:0,oldState:0}),a2=st(t2),n2=[9,13,27,32],fu=oa&&"CompositionEvent"in window,Hl=null;oa&&"documentMode"in document&&(Hl=document.documentMode);var l2=oa&&"TextEvent"in window&&!Hl,Jf=oa&&(!fu||Hl&&8<Hl&&11>=Hl),Kf=" ",Ff=!1;function Wf(e,t){switch(e){case"keyup":return n2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function i2(e,t){switch(e){case"compositionend":return If(t);case"keypress":return t.which!==32?null:(Ff=!0,Kf);case"textInput":return e=t.data,e===Kf&&Ff?null:e;default:return null}}function c2(e,t){if(Yn)return e==="compositionend"||!fu&&Wf(e,t)?(e=Vf(),Ki=cu=_a=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jf&&t.locale!=="ko"?null:t.data;default:return null}}var r2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r2[e.type]:t==="textarea"}function ed(e,t,a,l){Bn?Ln?Ln.push(l):Ln=[l]:Bn=l,t=Gc(t,"onChange"),0<t.length&&(a=new Ii("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var $l=null,Bl=null;function u2(e){H1(e,0)}function ec(e){var t=Rl(e);if(Uf(t))return e}function td(e,t){if(e==="change")return t}var ad=!1;if(oa){var du;if(oa){var hu="oninput"in document;if(!hu){var nd=document.createElement("div");nd.setAttribute("oninput","return;"),hu=typeof nd.oninput=="function"}du=hu}else du=!1;ad=du&&(!document.documentMode||9<document.documentMode)}function ld(){$l&&($l.detachEvent("onpropertychange",id),Bl=$l=null)}function id(e){if(e.propertyName==="value"&&ec(Bl)){var t=[];ed(t,Bl,e,nu(e)),Gf(u2,t)}}function o2(e,t,a){e==="focusin"?(ld(),$l=t,Bl=a,$l.attachEvent("onpropertychange",id)):e==="focusout"&&ld()}function s2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ec(Bl)}function f2(e,t){if(e==="click")return ec(t)}function d2(e,t){if(e==="input"||e==="change")return ec(t)}function h2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:h2;function Ll(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!Xr.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,t){var a=cd(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cd(a)}}function ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function od(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ki(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ki(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var m2=oa&&"documentMode"in document&&11>=document.documentMode,qn=null,pu=null,Yl=null,gu=!1;function sd(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||qn==null||qn!==ki(l)||(l=qn,"selectionStart"in l&&mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yl&&Ll(Yl,l)||(Yl=l,l=Gc(pu,"onSelect"),0<l.length&&(t=new Ii("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=qn)))}function on(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Gn={animationend:on("Animation","AnimationEnd"),animationiteration:on("Animation","AnimationIteration"),animationstart:on("Animation","AnimationStart"),transitionrun:on("Transition","TransitionRun"),transitionstart:on("Transition","TransitionStart"),transitioncancel:on("Transition","TransitionCancel"),transitionend:on("Transition","TransitionEnd")},yu={},fd={};oa&&(fd=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function sn(e){if(yu[e])return yu[e];if(!Gn[e])return e;var t=Gn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in fd)return yu[e]=t[a];return e}var dd=sn("animationend"),hd=sn("animationiteration"),md=sn("animationstart"),p2=sn("transitionrun"),g2=sn("transitionstart"),y2=sn("transitioncancel"),pd=sn("transitionend"),gd=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function Qt(e,t){gd.set(e,t),rn(t,[e])}var tc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],Vn=0,xu=0;function ac(){for(var e=Vn,t=xu=Vn=0;t<e;){var a=Ut[t];Ut[t++]=null;var l=Ut[t];Ut[t++]=null;var i=Ut[t];Ut[t++]=null;var c=Ut[t];if(Ut[t++]=null,l!==null&&i!==null){var f=l.pending;f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i}c!==0&&yd(a,i,c)}}function nc(e,t,a,l){Ut[Vn++]=e,Ut[Vn++]=t,Ut[Vn++]=a,Ut[Vn++]=l,xu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function bu(e,t,a,l){return nc(e,t,a,l),lc(e)}function fn(e,t){return nc(e,null,null,t),lc(e)}function yd(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,c=e.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(i=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,i&&t!==null&&(i=31-St(a),e=c.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),c):null}function lc(e){if(50<ui)throw ui=0,Mo=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xn={};function v2(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,a,l){return new v2(e,t,a,l)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sa(e,t){var a=e.alternate;return a===null?(a=Et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ic(e,t,a,l,i,c){var f=0;if(l=e,typeof e=="function")Su(e)&&(f=1);else if(typeof e=="string")f=Eg(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ce:return e=Et(31,a,t,i),e.elementType=ce,e.lanes=c,e;case V:return dn(a.children,i,c,t);case X:f=8,i|=24;break;case Q:return e=Et(12,a,t,i|2),e.elementType=Q,e.lanes=c,e;case P:return e=Et(13,a,t,i),e.elementType=P,e.lanes=c,e;case Y:return e=Et(19,a,t,i),e.elementType=Y,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:f=10;break e;case q:f=9;break e;case W:f=11;break e;case R:f=14;break e;case F:f=16,l=null;break e}f=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=Et(f,a,t,i),t.elementType=e,t.type=l,t.lanes=c,t}function dn(e,t,a,l){return e=Et(7,e,l,t),e.lanes=a,e}function ju(e,t,a){return e=Et(6,e,null,t),e.lanes=a,e}function xd(e){var t=Et(18,null,null,0);return t.stateNode=e,t}function Eu(e,t,a){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bd=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var a=bd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:xf(t)},bd.set(e,t),t)}return{value:e,source:t,stack:xf(t)}}var Qn=[],Zn=0,cc=null,ql=0,$t=[],Bt=0,Na=null,ta=1,aa="";function fa(e,t){Qn[Zn++]=ql,Qn[Zn++]=cc,cc=e,ql=t}function Sd(e,t,a){$t[Bt++]=ta,$t[Bt++]=aa,$t[Bt++]=Na,Na=e;var l=ta;e=aa;var i=32-St(l)-1;l&=~(1<<i),a+=1;var c=32-St(t)+i;if(30<c){var f=i-i%5;c=(l&(1<<f)-1).toString(32),l>>=f,i-=f,ta=1<<32-St(t)+i|a<<i|l,aa=c+e}else ta=1<<c|a<<i|l,aa=e}function zu(e){e.return!==null&&(fa(e,1),Sd(e,1,0))}function Cu(e){for(;e===cc;)cc=Qn[--Zn],Qn[Zn]=null,ql=Qn[--Zn],Qn[Zn]=null;for(;e===Na;)Na=$t[--Bt],$t[Bt]=null,aa=$t[--Bt],$t[Bt]=null,ta=$t[--Bt],$t[Bt]=null}function jd(e,t){$t[Bt++]=ta,$t[Bt++]=aa,$t[Bt++]=Na,ta=t.id,aa=t.overflow,Na=e}var tt=null,De=null,ge=!1,Ua=null,Lt=!1,Tu=Error(u(519));function Ha(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gl(Ht(t,e)),Tu}function Ed(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[et]=e,t[ot]=l,a){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(a=0;a<si.length;a++)he(si[a],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),Hf(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),Bf(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Y1(t.textContent,a)?(l.popover!=null&&(he("beforetoggle",t),he("toggle",t)),l.onScroll!=null&&he("scroll",t),l.onScrollEnd!=null&&he("scrollend",t),l.onClick!=null&&(t.onclick=ua),t=!0):t=!1,t||Ha(e,!0)}function zd(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:tt=tt.return}}function kn(e){if(e!==tt)return!1;if(!ge)return zd(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qo(e.type,e.memoizedProps)),a=!a),a&&De&&Ha(e),zd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));De=K1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));De=K1(e)}else t===27?(t=De,Fa(e.type)?(e=Fo,Fo=null,De=e):De=t):De=tt?qt(e.stateNode.nextSibling):null;return!0}function hn(){De=tt=null,ge=!1}function Au(){var e=Ua;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),Ua=null),e}function Gl(e){Ua===null?Ua=[e]:Ua.push(e)}var Ou=j(null),mn=null,da=null;function $a(e,t,a){k(Ou,t._currentValue),t._currentValue=a}function ha(e){e._currentValue=Ou.current,H(Ou)}function wu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Mu(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){var f=i.child;c=c.firstContext;e:for(;c!==null;){var m=c;c=i;for(var v=0;v<t.length;v++)if(m.context===t[v]){c.lanes|=a,m=c.alternate,m!==null&&(m.lanes|=a),wu(c.return,a,e),l||(f=null);break e}c=m.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(u(341));f.lanes|=a,c=f.alternate,c!==null&&(c.lanes|=a),wu(f,a,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Jn(e,t,a,l){e=null;for(var i=t,c=!1;i!==null;){if(!c){if((i.flags&524288)!==0)c=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var m=i.type;jt(i.pendingProps.value,f.value)||(e!==null?e.push(m):e=[m])}}else if(i===ye.current){if(f=i.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(pi):e=[pi])}i=i.return}e!==null&&Mu(t,e,a,l),t.flags|=262144}function rc(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pn(e){mn=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return Cd(mn,e)}function uc(e,t){return mn===null&&pn(e),Cd(e,t)}function Cd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},da===null){if(e===null)throw Error(u(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return a}var x2=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},b2=n.unstable_scheduleCallback,S2=n.unstable_NormalPriority,Xe={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new x2,data:new Map,refCount:0}}function Vl(e){e.refCount--,e.refCount===0&&b2(S2,function(){e.controller.abort()})}var Xl=null,Du=0,Kn=0,Fn=null;function j2(e,t){if(Xl===null){var a=Xl=[];Du=0,Kn=Ho(),Fn={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Du++,t.then(Td,Td),t}function Td(){if(--Du===0&&Xl!==null){Fn!==null&&(Fn.status="fulfilled");var e=Xl;Xl=null,Kn=0,Fn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function E2(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var Ad=U.S;U.S=function(e,t){s1=xt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&j2(e,t),Ad!==null&&Ad(e,t)};var gn=j(null);function _u(){var e=gn.current;return e!==null?e:Me.pooledCache}function oc(e,t){t===null?k(gn,gn.current):k(gn,t.pool)}function Od(){var e=_u();return e===null?null:{parent:Xe._currentValue,pool:e}}var Wn=Error(u(460)),Nu=Error(u(474)),sc=Error(u(542)),fc={then:function(){}};function wd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Md(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ua,ua),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dd(e),e;default:if(typeof t.status=="string")t.then(ua,ua);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dd(e),e}throw vn=t,Wn}}function yn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vn=a,Wn):a}}var vn=null;function Rd(){if(vn===null)throw Error(u(459));var e=vn;return vn=null,e}function Dd(e){if(e===Wn||e===sc)throw Error(u(483))}var In=null,Ql=0;function dc(e){var t=Ql;return Ql+=1,In===null&&(In=[]),Md(In,e,t)}function Zl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function hc(e,t){throw t.$$typeof===T?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _d(e){function t(C,S){if(e){var A=C.deletions;A===null?(C.deletions=[S],C.flags|=16):A.push(S)}}function a(C,S){if(!e)return null;for(;S!==null;)t(C,S),S=S.sibling;return null}function l(C){for(var S=new Map;C!==null;)C.key!==null?S.set(C.key,C):S.set(C.index,C),C=C.sibling;return S}function i(C,S){return C=sa(C,S),C.index=0,C.sibling=null,C}function c(C,S,A){return C.index=A,e?(A=C.alternate,A!==null?(A=A.index,A<S?(C.flags|=67108866,S):A):(C.flags|=67108866,S)):(C.flags|=1048576,S)}function f(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function m(C,S,A,$){return S===null||S.tag!==6?(S=ju(A,C.mode,$),S.return=C,S):(S=i(S,A),S.return=C,S)}function v(C,S,A,$){var ee=A.type;return ee===V?N(C,S,A.props.children,$,A.key):S!==null&&(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===F&&yn(ee)===S.type)?(S=i(S,A.props),Zl(S,A),S.return=C,S):(S=ic(A.type,A.key,A.props,null,C.mode,$),Zl(S,A),S.return=C,S)}function w(C,S,A,$){return S===null||S.tag!==4||S.stateNode.containerInfo!==A.containerInfo||S.stateNode.implementation!==A.implementation?(S=Eu(A,C.mode,$),S.return=C,S):(S=i(S,A.children||[]),S.return=C,S)}function N(C,S,A,$,ee){return S===null||S.tag!==7?(S=dn(A,C.mode,$,ee),S.return=C,S):(S=i(S,A),S.return=C,S)}function B(C,S,A){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=ju(""+S,C.mode,A),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _:return A=ic(S.type,S.key,S.props,null,C.mode,A),Zl(A,S),A.return=C,A;case G:return S=Eu(S,C.mode,A),S.return=C,S;case F:return S=yn(S),B(C,S,A)}if(yt(S)||Re(S))return S=dn(S,C.mode,A,null),S.return=C,S;if(typeof S.then=="function")return B(C,dc(S),A);if(S.$$typeof===L)return B(C,uc(C,S),A);hc(C,S)}return null}function M(C,S,A,$){var ee=S!==null?S.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ee!==null?null:m(C,S,""+A,$);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case _:return A.key===ee?v(C,S,A,$):null;case G:return A.key===ee?w(C,S,A,$):null;case F:return A=yn(A),M(C,S,A,$)}if(yt(A)||Re(A))return ee!==null?null:N(C,S,A,$,null);if(typeof A.then=="function")return M(C,S,dc(A),$);if(A.$$typeof===L)return M(C,S,uc(C,A),$);hc(C,A)}return null}function D(C,S,A,$,ee){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return C=C.get(A)||null,m(S,C,""+$,ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case _:return C=C.get($.key===null?A:$.key)||null,v(S,C,$,ee);case G:return C=C.get($.key===null?A:$.key)||null,w(S,C,$,ee);case F:return $=yn($),D(C,S,A,$,ee)}if(yt($)||Re($))return C=C.get(A)||null,N(S,C,$,ee,null);if(typeof $.then=="function")return D(C,S,A,dc($),ee);if($.$$typeof===L)return D(C,S,A,uc(S,$),ee);hc(S,$)}return null}function K(C,S,A,$){for(var ee=null,xe=null,I=S,ue=S=0,pe=null;I!==null&&ue<A.length;ue++){I.index>ue?(pe=I,I=null):pe=I.sibling;var be=M(C,I,A[ue],$);if(be===null){I===null&&(I=pe);break}e&&I&&be.alternate===null&&t(C,I),S=c(be,S,ue),xe===null?ee=be:xe.sibling=be,xe=be,I=pe}if(ue===A.length)return a(C,I),ge&&fa(C,ue),ee;if(I===null){for(;ue<A.length;ue++)I=B(C,A[ue],$),I!==null&&(S=c(I,S,ue),xe===null?ee=I:xe.sibling=I,xe=I);return ge&&fa(C,ue),ee}for(I=l(I);ue<A.length;ue++)pe=D(I,C,ue,A[ue],$),pe!==null&&(e&&pe.alternate!==null&&I.delete(pe.key===null?ue:pe.key),S=c(pe,S,ue),xe===null?ee=pe:xe.sibling=pe,xe=pe);return e&&I.forEach(function(tn){return t(C,tn)}),ge&&fa(C,ue),ee}function ae(C,S,A,$){if(A==null)throw Error(u(151));for(var ee=null,xe=null,I=S,ue=S=0,pe=null,be=A.next();I!==null&&!be.done;ue++,be=A.next()){I.index>ue?(pe=I,I=null):pe=I.sibling;var tn=M(C,I,be.value,$);if(tn===null){I===null&&(I=pe);break}e&&I&&tn.alternate===null&&t(C,I),S=c(tn,S,ue),xe===null?ee=tn:xe.sibling=tn,xe=tn,I=pe}if(be.done)return a(C,I),ge&&fa(C,ue),ee;if(I===null){for(;!be.done;ue++,be=A.next())be=B(C,be.value,$),be!==null&&(S=c(be,S,ue),xe===null?ee=be:xe.sibling=be,xe=be);return ge&&fa(C,ue),ee}for(I=l(I);!be.done;ue++,be=A.next())be=D(I,C,ue,be.value,$),be!==null&&(e&&be.alternate!==null&&I.delete(be.key===null?ue:be.key),S=c(be,S,ue),xe===null?ee=be:xe.sibling=be,xe=be);return e&&I.forEach(function(Ng){return t(C,Ng)}),ge&&fa(C,ue),ee}function we(C,S,A,$){if(typeof A=="object"&&A!==null&&A.type===V&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case _:e:{for(var ee=A.key;S!==null;){if(S.key===ee){if(ee=A.type,ee===V){if(S.tag===7){a(C,S.sibling),$=i(S,A.props.children),$.return=C,C=$;break e}}else if(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===F&&yn(ee)===S.type){a(C,S.sibling),$=i(S,A.props),Zl($,A),$.return=C,C=$;break e}a(C,S);break}else t(C,S);S=S.sibling}A.type===V?($=dn(A.props.children,C.mode,$,A.key),$.return=C,C=$):($=ic(A.type,A.key,A.props,null,C.mode,$),Zl($,A),$.return=C,C=$)}return f(C);case G:e:{for(ee=A.key;S!==null;){if(S.key===ee)if(S.tag===4&&S.stateNode.containerInfo===A.containerInfo&&S.stateNode.implementation===A.implementation){a(C,S.sibling),$=i(S,A.children||[]),$.return=C,C=$;break e}else{a(C,S);break}else t(C,S);S=S.sibling}$=Eu(A,C.mode,$),$.return=C,C=$}return f(C);case F:return A=yn(A),we(C,S,A,$)}if(yt(A))return K(C,S,A,$);if(Re(A)){if(ee=Re(A),typeof ee!="function")throw Error(u(150));return A=ee.call(A),ae(C,S,A,$)}if(typeof A.then=="function")return we(C,S,dc(A),$);if(A.$$typeof===L)return we(C,S,uc(C,A),$);hc(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,S!==null&&S.tag===6?(a(C,S.sibling),$=i(S,A),$.return=C,C=$):(a(C,S),$=ju(A,C.mode,$),$.return=C,C=$),f(C)):a(C,S)}return function(C,S,A,$){try{Ql=0;var ee=we(C,S,A,$);return In=null,ee}catch(I){if(I===Wn||I===sc)throw I;var xe=Et(29,I,null,C.mode);return xe.lanes=$,xe.return=C,xe}}}var xn=_d(!0),Nd=_d(!1),Ba=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(je&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=lc(e),yd(e,null,a),t}return nc(e,l,t,a),lc(e)}function kl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Cf(e,a)}}function $u(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?i=c=f:c=c.next=f,a=a.next}while(a!==null);c===null?i=c=t:c=c.next=t}else i=c=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Bu=!1;function Jl(){if(Bu){var e=Fn;if(e!==null)throw e}}function Kl(e,t,a,l){Bu=!1;var i=e.updateQueue;Ba=!1;var c=i.firstBaseUpdate,f=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var v=m,w=v.next;v.next=null,f===null?c=w:f.next=w,f=v;var N=e.alternate;N!==null&&(N=N.updateQueue,m=N.lastBaseUpdate,m!==f&&(m===null?N.firstBaseUpdate=w:m.next=w,N.lastBaseUpdate=v))}if(c!==null){var B=i.baseState;f=0,N=w=v=null,m=c;do{var M=m.lane&-536870913,D=M!==m.lane;if(D?(me&M)===M:(l&M)===M){M!==0&&M===Kn&&(Bu=!0),N!==null&&(N=N.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var K=e,ae=m;M=t;var we=a;switch(ae.tag){case 1:if(K=ae.payload,typeof K=="function"){B=K.call(we,B,M);break e}B=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=ae.payload,M=typeof K=="function"?K.call(we,B,M):K,M==null)break e;B=E({},B,M);break e;case 2:Ba=!0}}M=m.callback,M!==null&&(e.flags|=64,D&&(e.flags|=8192),D=i.callbacks,D===null?i.callbacks=[M]:D.push(M))}else D={lane:M,tag:m.tag,payload:m.payload,callback:m.callback,next:null},N===null?(w=N=D,v=B):N=N.next=D,f|=M;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;D=m,m=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);N===null&&(v=B),i.baseState=v,i.firstBaseUpdate=w,i.lastBaseUpdate=N,c===null&&(i.shared.lanes=0),Qa|=f,e.lanes=f,e.memoizedState=B}}function Ud(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Hd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ud(a[e],t)}var Pn=j(null),mc=j(0);function $d(e,t){e=ja,k(mc,e),k(Pn,t),ja=e|t.baseLanes}function Lu(){k(mc,ja),k(Pn,Pn.current)}function Yu(){ja=mc.current,H(Pn),H(mc)}var zt=j(null),Yt=null;function qa(e){var t=e.alternate;k(qe,qe.current&1),k(zt,e),Yt===null&&(t===null||Pn.current!==null||t.memoizedState!==null)&&(Yt=e)}function qu(e){k(qe,qe.current),k(zt,e),Yt===null&&(Yt=e)}function Bd(e){e.tag===22?(k(qe,qe.current),k(zt,e),Yt===null&&(Yt=e)):Ga()}function Ga(){k(qe,qe.current),k(zt,zt.current)}function Ct(e){H(zt),Yt===e&&(Yt=null),H(qe)}var qe=j(0);function pc(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jo(a)||Ko(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=0,ie=null,Ae=null,Qe=null,gc=!1,el=!1,bn=!1,yc=0,Fl=0,tl=null,z2=0;function Le(){throw Error(u(321))}function Gu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!jt(e[a],t[a]))return!1;return!0}function Vu(e,t,a,l,i,c){return ma=c,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?S0:lo,bn=!1,c=a(l,i),bn=!1,el&&(c=Yd(t,a,l,i)),Ld(e),c}function Ld(e){U.H=Pl;var t=Ae!==null&&Ae.next!==null;if(ma=0,Qe=Ae=ie=null,gc=!1,Fl=0,tl=null,t)throw Error(u(300));e===null||Ze||(e=e.dependencies,e!==null&&rc(e)&&(Ze=!0))}function Yd(e,t,a,l){ie=e;var i=0;do{if(el&&(tl=null),Fl=0,el=!1,25<=i)throw Error(u(301));if(i+=1,Qe=Ae=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}U.H=j0,c=t(a,l)}while(el);return c}function C2(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?Wl(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(ie.flags|=1024),t}function Xu(){var e=yc!==0;return yc=0,e}function Qu(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Zu(e){if(gc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gc=!1}ma=0,Qe=Ae=ie=null,el=!1,Fl=yc=0,tl=null}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ie.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ge(){if(Ae===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Qe===null?ie.memoizedState:Qe.next;if(t!==null)Qe=t,Ae=e;else{if(e===null)throw ie.alternate===null?Error(u(467)):Error(u(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Qe===null?ie.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wl(e){var t=Fl;return Fl+=1,tl===null&&(tl=[]),e=Md(tl,e,t),t=ie,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?S0:lo),e}function xc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wl(e);if(e.$$typeof===L)return at(e)}throw Error(u(438,String(e)))}function ku(e){var t=null,a=ie.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ie.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=vc(),ie.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=se;return t.index++,a}function pa(e,t){return typeof t=="function"?t(e):t}function bc(e){var t=Ge();return Ju(t,Ae,e)}function Ju(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var i=e.baseQueue,c=l.pending;if(c!==null){if(i!==null){var f=i.next;i.next=c.next,c.next=f}t.baseQueue=i=c,l.pending=null}if(c=e.baseState,i===null)e.memoizedState=c;else{t=i.next;var m=f=null,v=null,w=t,N=!1;do{var B=w.lane&-536870913;if(B!==w.lane?(me&B)===B:(ma&B)===B){var M=w.revertLane;if(M===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),B===Kn&&(N=!0);else if((ma&M)===M){w=w.next,M===Kn&&(N=!0);continue}else B={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(m=v=B,f=c):v=v.next=B,ie.lanes|=M,Qa|=M;B=w.action,bn&&a(c,B),c=w.hasEagerState?w.eagerState:a(c,B)}else M={lane:B,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(m=v=M,f=c):v=v.next=M,ie.lanes|=B,Qa|=B;w=w.next}while(w!==null&&w!==t);if(v===null?f=c:v.next=m,!jt(c,e.memoizedState)&&(Ze=!0,N&&(a=Fn,a!==null)))throw a;e.memoizedState=c,e.baseState=f,e.baseQueue=v,l.lastRenderedState=c}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ku(e){var t=Ge(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,c=t.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do c=e(c,f.action),f=f.next;while(f!==i);jt(c,t.memoizedState)||(Ze=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,l]}function qd(e,t,a){var l=ie,i=Ge(),c=ge;if(c){if(a===void 0)throw Error(u(407));a=a()}else a=t();var f=!jt((Ae||i).memoizedState,a);if(f&&(i.memoizedState=a,Ze=!0),i=i.queue,Iu(Xd.bind(null,l,i,e),[e]),i.getSnapshot!==t||f||Qe!==null&&Qe.memoizedState.tag&1){if(l.flags|=2048,al(9,{destroy:void 0},Vd.bind(null,l,i,a,t),null),Me===null)throw Error(u(349));c||(ma&127)!==0||Gd(l,t,a)}return a}function Gd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ie.updateQueue,t===null?(t=vc(),ie.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Vd(e,t,a,l){t.value=a,t.getSnapshot=l,Qd(t)&&Zd(e)}function Xd(e,t,a){return a(function(){Qd(t)&&Zd(e)})}function Qd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!jt(e,a)}catch{return!0}}function Zd(e){var t=fn(e,2);t!==null&&pt(t,e,2)}function Fu(e){var t=rt();if(typeof e=="function"){var a=e;if(e=a(),bn){Ra(!0);try{a()}finally{Ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function kd(e,t,a,l){return e.baseState=a,Ju(e,Ae,typeof l=="function"?l:pa)}function T2(e,t,a,l,i){if(Ec(e))throw Error(u(485));if(e=t.action,e!==null){var c={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){c.listeners.push(f)}};U.T!==null?a(!0):c.isTransition=!1,l(c),a=t.pending,a===null?(c.next=t.pending=c,Jd(t,c)):(c.next=a.next,t.pending=a.next=c)}}function Jd(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var c=U.T,f={};U.T=f;try{var m=a(i,l),v=U.S;v!==null&&v(f,m),Kd(e,t,m)}catch(w){Wu(e,t,w)}finally{c!==null&&f.types!==null&&(c.types=f.types),U.T=c}}else try{c=a(i,l),Kd(e,t,c)}catch(w){Wu(e,t,w)}}function Kd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Fd(e,t,l)},function(l){return Wu(e,t,l)}):Fd(e,t,a)}function Fd(e,t,a){t.status="fulfilled",t.value=a,Wd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Jd(e,a)))}function Wu(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Wd(t),t=t.next;while(t!==l)}e.action=null}function Wd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Id(e,t){return t}function Pd(e,t){if(ge){var a=Me.formState;if(a!==null){e:{var l=ie;if(ge){if(De){t:{for(var i=De,c=Lt;i.nodeType!==8;){if(!c){i=null;break t}if(i=qt(i.nextSibling),i===null){i=null;break t}}c=i.data,i=c==="F!"||c==="F"?i:null}if(i){De=qt(i.nextSibling),l=i.data==="F!";break e}}Ha(l)}l=!1}l&&(t=a[0])}}return a=rt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Id,lastRenderedState:t},a.queue=l,a=v0.bind(null,ie,l),l.dispatch=a,l=Fu(!1),c=no.bind(null,ie,!1,l.queue),l=rt(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=T2.bind(null,ie,i,c,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function e0(e){var t=Ge();return t0(t,Ae,e)}function t0(e,t,a){if(t=Ju(e,t,Id)[0],e=bc(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Wl(t)}catch(f){throw f===Wn?sc:f}else l=t;t=Ge();var i=t.queue,c=i.dispatch;return a!==t.memoizedState&&(ie.flags|=2048,al(9,{destroy:void 0},A2.bind(null,i,a),null)),[l,c,e]}function A2(e,t){e.action=t}function a0(e){var t=Ge(),a=Ae;if(a!==null)return t0(t,a,e);Ge(),t=t.memoizedState,a=Ge();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function al(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ie.updateQueue,t===null&&(t=vc(),ie.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function n0(){return Ge().memoizedState}function Sc(e,t,a,l){var i=rt();ie.flags|=e,i.memoizedState=al(1|t,{destroy:void 0},a,l===void 0?null:l)}function jc(e,t,a,l){var i=Ge();l=l===void 0?null:l;var c=i.memoizedState.inst;Ae!==null&&l!==null&&Gu(l,Ae.memoizedState.deps)?i.memoizedState=al(t,c,a,l):(ie.flags|=e,i.memoizedState=al(1|t,c,a,l))}function l0(e,t){Sc(8390656,8,e,t)}function Iu(e,t){jc(2048,8,e,t)}function O2(e){ie.flags|=4;var t=ie.updateQueue;if(t===null)t=vc(),ie.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function i0(e){var t=Ge().memoizedState;return O2({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function c0(e,t){return jc(4,2,e,t)}function r0(e,t){return jc(4,4,e,t)}function u0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function o0(e,t,a){a=a!=null?a.concat([e]):null,jc(4,4,u0.bind(null,t,e),a)}function Pu(){}function s0(e,t){var a=Ge();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Gu(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function f0(e,t){var a=Ge();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Gu(t,l[1]))return l[0];if(l=e(),bn){Ra(!0);try{e()}finally{Ra(!1)}}return a.memoizedState=[l,t],l}function eo(e,t,a){return a===void 0||(ma&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=d1(),ie.lanes|=e,Qa|=e,a)}function d0(e,t,a,l){return jt(a,t)?a:Pn.current!==null?(e=eo(e,a,l),jt(e,t)||(Ze=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(me&261930)===0?(Ze=!0,e.memoizedState=a):(e=d1(),ie.lanes|=e,Qa|=e,t)}function h0(e,t,a,l,i){var c=Z.p;Z.p=c!==0&&8>c?c:8;var f=U.T,m={};U.T=m,no(e,!1,t,a);try{var v=i(),w=U.S;if(w!==null&&w(m,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var N=E2(v,l);Il(e,t,N,Ot(e))}else Il(e,t,l,Ot(e))}catch(B){Il(e,t,{then:function(){},status:"rejected",reason:B},Ot())}finally{Z.p=c,f!==null&&m.types!==null&&(f.types=m.types),U.T=f}}function w2(){}function to(e,t,a,l){if(e.tag!==5)throw Error(u(476));var i=m0(e).queue;h0(e,i,t,te,a===null?w2:function(){return p0(e),a(l)})}function m0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:te},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function p0(e){var t=m0(e);t.next===null&&(t=e.alternate.memoizedState),Il(e,t.next.queue,{},Ot())}function ao(){return at(pi)}function g0(){return Ge().memoizedState}function y0(){return Ge().memoizedState}function M2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ot();e=La(a);var l=Ya(t,e,a);l!==null&&(pt(l,t,a),kl(l,t,a)),t={cache:Ru()},e.payload=t;return}t=t.return}}function R2(e,t,a){var l=Ot();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ec(e)?x0(t,a):(a=bu(e,t,a,l),a!==null&&(pt(a,e,l),b0(a,t,l)))}function v0(e,t,a){var l=Ot();Il(e,t,a,l)}function Il(e,t,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))x0(t,i);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var f=t.lastRenderedState,m=c(f,a);if(i.hasEagerState=!0,i.eagerState=m,jt(m,f))return nc(e,t,i,0),Me===null&&ac(),!1}catch{}if(a=bu(e,t,i,l),a!==null)return pt(a,e,l),b0(a,t,l),!0}return!1}function no(e,t,a,l){if(l={lane:2,revertLane:Ho(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ec(e)){if(t)throw Error(u(479))}else t=bu(e,a,l,2),t!==null&&pt(t,e,2)}function Ec(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function x0(e,t){el=gc=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function b0(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Cf(e,a)}}var Pl={readContext:at,use:xc,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};Pl.useEffectEvent=Le;var S0={readContext:at,use:xc,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:l0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Sc(4194308,4,u0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Sc(4194308,4,e,t)},useInsertionEffect:function(e,t){Sc(4,2,e,t)},useMemo:function(e,t){var a=rt();t=t===void 0?null:t;var l=e();if(bn){Ra(!0);try{e()}finally{Ra(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=rt();if(a!==void 0){var i=a(t);if(bn){Ra(!0);try{a(t)}finally{Ra(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=R2.bind(null,ie,e),[l.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:function(e){e=Fu(e);var t=e.queue,a=v0.bind(null,ie,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Pu,useDeferredValue:function(e,t){var a=rt();return eo(a,e,t)},useTransition:function(){var e=Fu(!1);return e=h0.bind(null,ie,e.queue,!0,!1),rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ie,i=rt();if(ge){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Me===null)throw Error(u(349));(me&127)!==0||Gd(l,t,a)}i.memoizedState=a;var c={value:a,getSnapshot:t};return i.queue=c,l0(Xd.bind(null,l,c,e),[e]),l.flags|=2048,al(9,{destroy:void 0},Vd.bind(null,l,c,a,t),null),a},useId:function(){var e=rt(),t=Me.identifierPrefix;if(ge){var a=aa,l=ta;a=(l&~(1<<32-St(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=yc++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=z2++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ao,useFormState:Pd,useActionState:Pd,useOptimistic:function(e){var t=rt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=no.bind(null,ie,!0,a),a.dispatch=t,[e,t]},useMemoCache:ku,useCacheRefresh:function(){return rt().memoizedState=M2.bind(null,ie)},useEffectEvent:function(e){var t=rt(),a={impl:e};return t.memoizedState=a,function(){if((je&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},lo={readContext:at,use:xc,useCallback:s0,useContext:at,useEffect:Iu,useImperativeHandle:o0,useInsertionEffect:c0,useLayoutEffect:r0,useMemo:f0,useReducer:bc,useRef:n0,useState:function(){return bc(pa)},useDebugValue:Pu,useDeferredValue:function(e,t){var a=Ge();return d0(a,Ae.memoizedState,e,t)},useTransition:function(){var e=bc(pa)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Wl(e),t]},useSyncExternalStore:qd,useId:g0,useHostTransitionStatus:ao,useFormState:e0,useActionState:e0,useOptimistic:function(e,t){var a=Ge();return kd(a,Ae,e,t)},useMemoCache:ku,useCacheRefresh:y0};lo.useEffectEvent=i0;var j0={readContext:at,use:xc,useCallback:s0,useContext:at,useEffect:Iu,useImperativeHandle:o0,useInsertionEffect:c0,useLayoutEffect:r0,useMemo:f0,useReducer:Ku,useRef:n0,useState:function(){return Ku(pa)},useDebugValue:Pu,useDeferredValue:function(e,t){var a=Ge();return Ae===null?eo(a,e,t):d0(a,Ae.memoizedState,e,t)},useTransition:function(){var e=Ku(pa)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Wl(e),t]},useSyncExternalStore:qd,useId:g0,useHostTransitionStatus:ao,useFormState:a0,useActionState:a0,useOptimistic:function(e,t){var a=Ge();return Ae!==null?kd(a,Ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:y0};j0.useEffectEvent=i0;function io(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var co={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Ot(),i=La(l);i.payload=t,a!=null&&(i.callback=a),t=Ya(e,i,l),t!==null&&(pt(t,e,l),kl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Ot(),i=La(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Ya(e,i,l),t!==null&&(pt(t,e,l),kl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ot(),l=La(a);l.tag=2,t!=null&&(l.callback=t),t=Ya(e,l,a),t!==null&&(pt(t,e,a),kl(t,e,a))}};function E0(e,t,a,l,i,c,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,f):t.prototype&&t.prototype.isPureReactComponent?!Ll(a,l)||!Ll(i,c):!0}function z0(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&co.enqueueReplaceState(t,t.state,null)}function Sn(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function C0(e){tc(e)}function T0(e){console.error(e)}function A0(e){tc(e)}function zc(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function O0(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ro(e,t,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){zc(e,t)},a}function w0(e){return e=La(e),e.tag=3,e}function M0(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var c=l.value;e.payload=function(){return i(c)},e.callback=function(){O0(t,a,l)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){O0(t,a,l),typeof i!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var m=l.stack;this.componentDidCatch(l.value,{componentStack:m!==null?m:""})})}function D2(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Jn(t,a,i,!0),a=zt.current,a!==null){switch(a.tag){case 31:case 13:return Yt===null?Hc():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===fc?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),_o(e,l,i)),!1;case 22:return a.flags|=65536,l===fc?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),_o(e,l,i)),!1}throw Error(u(435,a.tag))}return _o(e,l,i),Hc(),!1}if(ge)return t=zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==Tu&&(e=Error(u(422),{cause:l}),Gl(Ht(e,a)))):(l!==Tu&&(t=Error(u(423),{cause:l}),Gl(Ht(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=Ht(l,a),i=ro(e.stateNode,l,i),$u(e,i),Ye!==4&&(Ye=2)),!1;var c=Error(u(520),{cause:l});if(c=Ht(c,a),ri===null?ri=[c]:ri.push(c),Ye!==4&&(Ye=2),t===null)return!0;l=Ht(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=ro(a.stateNode,l,e),$u(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Za===null||!Za.has(c))))return a.flags|=65536,i&=-i,a.lanes|=i,i=w0(i),M0(i,e,a,l),$u(a,i),!1}a=a.return}while(a!==null);return!1}var uo=Error(u(461)),Ze=!1;function nt(e,t,a,l){t.child=e===null?Nd(t,null,a,l):xn(t,e.child,a,l)}function R0(e,t,a,l,i){a=a.render;var c=t.ref;if("ref"in l){var f={};for(var m in l)m!=="ref"&&(f[m]=l[m])}else f=l;return pn(t),l=Vu(e,t,a,f,c,i),m=Xu(),e!==null&&!Ze?(Qu(e,t,i),ga(e,t,i)):(ge&&m&&zu(t),t.flags|=1,nt(e,t,l,i),t.child)}function D0(e,t,a,l,i){if(e===null){var c=a.type;return typeof c=="function"&&!Su(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,_0(e,t,c,l,i)):(e=ic(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!yo(e,i)){var f=c.memoizedProps;if(a=a.compare,a=a!==null?a:Ll,a(f,l)&&e.ref===t.ref)return ga(e,t,i)}return t.flags|=1,e=sa(c,l),e.ref=t.ref,e.return=t,t.child=e}function _0(e,t,a,l,i){if(e!==null){var c=e.memoizedProps;if(Ll(c,l)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=l=c,yo(e,i))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,ga(e,t,i)}return oo(e,t,a,l,i)}function N0(e,t,a,l){var i=l.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~c}else l=0,t.child=null;return U0(e,t,c,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&oc(t,c!==null?c.cachePool:null),c!==null?$d(t,c):Lu(),Bd(t);else return l=t.lanes=536870912,U0(e,t,c!==null?c.baseLanes|a:a,a,l)}else c!==null?(oc(t,c.cachePool),$d(t,c),Ga(),t.memoizedState=null):(e!==null&&oc(t,null),Lu(),Ga());return nt(e,t,i,a),t.child}function ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function U0(e,t,a,l,i){var c=_u();return c=c===null?null:{parent:Xe._currentValue,pool:c},t.memoizedState={baseLanes:a,cachePool:c},e!==null&&oc(t,null),Lu(),Bd(t),e!==null&&Jn(e,t,l,!0),t.childLanes=i,null}function Cc(e,t){return t=Ac({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function H0(e,t,a){return xn(t,e.child,null,a),e=Cc(t,t.pendingProps),e.flags|=2,Ct(t),t.memoizedState=null,e}function _2(e,t,a){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(l.mode==="hidden")return e=Cc(t,l),t.lanes=536870912,ei(null,e);if(qu(t),(e=De)?(e=J1(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Na!==null?{id:ta,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=xd(e),a.return=t,t.child=a,tt=t,De=null)):e=null,e===null)throw Ha(t);return t.lanes=536870912,null}return Cc(t,l)}var c=e.memoizedState;if(c!==null){var f=c.dehydrated;if(qu(t),i)if(t.flags&256)t.flags&=-257,t=H0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ze||Jn(e,t,a,!1),i=(a&e.childLanes)!==0,Ze||i){if(l=Me,l!==null&&(f=Tf(l,a),f!==0&&f!==c.retryLane))throw c.retryLane=f,fn(e,f),pt(l,e,f),uo;Hc(),t=H0(e,t,a)}else e=c.treeContext,De=qt(f.nextSibling),tt=t,ge=!0,Ua=null,Lt=!1,e!==null&&jd(t,e),t=Cc(t,l),t.flags|=4096;return t}return e=sa(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Tc(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function oo(e,t,a,l,i){return pn(t),a=Vu(e,t,a,l,void 0,i),l=Xu(),e!==null&&!Ze?(Qu(e,t,i),ga(e,t,i)):(ge&&l&&zu(t),t.flags|=1,nt(e,t,a,i),t.child)}function $0(e,t,a,l,i,c){return pn(t),t.updateQueue=null,a=Yd(t,l,a,i),Ld(e),l=Xu(),e!==null&&!Ze?(Qu(e,t,c),ga(e,t,c)):(ge&&l&&zu(t),t.flags|=1,nt(e,t,a,c),t.child)}function B0(e,t,a,l,i){if(pn(t),t.stateNode===null){var c=Xn,f=a.contextType;typeof f=="object"&&f!==null&&(c=at(f)),c=new a(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=co,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},Uu(t),f=a.contextType,c.context=typeof f=="object"&&f!==null?at(f):Xn,c.state=t.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(io(t,a,f,l),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(f=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),f!==c.state&&co.enqueueReplaceState(c,c.state,null),Kl(t,l,c,i),Jl(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var m=t.memoizedProps,v=Sn(a,m);c.props=v;var w=c.context,N=a.contextType;f=Xn,typeof N=="object"&&N!==null&&(f=at(N));var B=a.getDerivedStateFromProps;N=typeof B=="function"||typeof c.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,N||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m||w!==f)&&z0(t,c,l,f),Ba=!1;var M=t.memoizedState;c.state=M,Kl(t,l,c,i),Jl(),w=t.memoizedState,m||M!==w||Ba?(typeof B=="function"&&(io(t,a,B,l),w=t.memoizedState),(v=Ba||E0(t,a,v,l,M,w,f))?(N||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),c.props=l,c.state=w,c.context=f,l=v):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,Hu(e,t),f=t.memoizedProps,N=Sn(a,f),c.props=N,B=t.pendingProps,M=c.context,w=a.contextType,v=Xn,typeof w=="object"&&w!==null&&(v=at(w)),m=a.getDerivedStateFromProps,(w=typeof m=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==B||M!==v)&&z0(t,c,l,v),Ba=!1,M=t.memoizedState,c.state=M,Kl(t,l,c,i),Jl();var D=t.memoizedState;f!==B||M!==D||Ba||e!==null&&e.dependencies!==null&&rc(e.dependencies)?(typeof m=="function"&&(io(t,a,m,l),D=t.memoizedState),(N=Ba||E0(t,a,N,l,M,D,v)||e!==null&&e.dependencies!==null&&rc(e.dependencies))?(w||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,D,v),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,D,v)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=D),c.props=l,c.state=D,c.context=v,l=N):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,Tc(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=xn(t,e.child,null,i),t.child=xn(t,null,a,i)):nt(e,t,a,i),t.memoizedState=c.state,e=t.child):e=ga(e,t,i),e}function L0(e,t,a,l){return hn(),t.flags|=256,nt(e,t,a,l),t.child}var so={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fo(e){return{baseLanes:e,cachePool:Od()}}function ho(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=At),e}function Y0(e,t,a){var l=t.pendingProps,i=!1,c=(t.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?qa(t):Ga(),(e=De)?(e=J1(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Na!==null?{id:ta,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=xd(e),a.return=t,t.child=a,tt=t,De=null)):e=null,e===null)throw Ha(t);return Ko(e)?t.lanes=32:t.lanes=536870912,null}var m=l.children;return l=l.fallback,i?(Ga(),i=t.mode,m=Ac({mode:"hidden",children:m},i),l=dn(l,i,a,null),m.return=t,l.return=t,m.sibling=l,t.child=m,l=t.child,l.memoizedState=fo(a),l.childLanes=ho(e,f,a),t.memoizedState=so,ei(null,l)):(qa(t),mo(t,m))}var v=e.memoizedState;if(v!==null&&(m=v.dehydrated,m!==null)){if(c)t.flags&256?(qa(t),t.flags&=-257,t=po(e,t,a)):t.memoizedState!==null?(Ga(),t.child=e.child,t.flags|=128,t=null):(Ga(),m=l.fallback,i=t.mode,l=Ac({mode:"visible",children:l.children},i),m=dn(m,i,a,null),m.flags|=2,l.return=t,m.return=t,l.sibling=m,t.child=l,xn(t,e.child,null,a),l=t.child,l.memoizedState=fo(a),l.childLanes=ho(e,f,a),t.memoizedState=so,t=ei(null,l));else if(qa(t),Ko(m)){if(f=m.nextSibling&&m.nextSibling.dataset,f)var w=f.dgst;f=w,l=Error(u(419)),l.stack="",l.digest=f,Gl({value:l,source:null,stack:null}),t=po(e,t,a)}else if(Ze||Jn(e,t,a,!1),f=(a&e.childLanes)!==0,Ze||f){if(f=Me,f!==null&&(l=Tf(f,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,fn(e,l),pt(f,e,l),uo;Jo(m)||Hc(),t=po(e,t,a)}else Jo(m)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,De=qt(m.nextSibling),tt=t,ge=!0,Ua=null,Lt=!1,e!==null&&jd(t,e),t=mo(t,l.children),t.flags|=4096);return t}return i?(Ga(),m=l.fallback,i=t.mode,v=e.child,w=v.sibling,l=sa(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,w!==null?m=sa(w,m):(m=dn(m,i,a,null),m.flags|=2),m.return=t,l.return=t,l.sibling=m,t.child=l,ei(null,l),l=t.child,m=e.child.memoizedState,m===null?m=fo(a):(i=m.cachePool,i!==null?(v=Xe._currentValue,i=i.parent!==v?{parent:v,pool:v}:i):i=Od(),m={baseLanes:m.baseLanes|a,cachePool:i}),l.memoizedState=m,l.childLanes=ho(e,f,a),t.memoizedState=so,ei(e.child,l)):(qa(t),a=e.child,e=a.sibling,a=sa(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=a,t.memoizedState=null,a)}function mo(e,t){return t=Ac({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ac(e,t){return e=Et(22,e,null,t),e.lanes=0,e}function po(e,t,a){return xn(t,e.child,null,a),e=mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function q0(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),wu(e.return,t,a)}function go(e,t,a,l,i,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:c}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=a,f.tailMode=i,f.treeForkCount=c)}function G0(e,t,a){var l=t.pendingProps,i=l.revealOrder,c=l.tail;l=l.children;var f=qe.current,m=(f&2)!==0;if(m?(f=f&1|2,t.flags|=128):f&=1,k(qe,f),nt(e,t,l,a),l=ge?ql:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&q0(e,a,t);else if(e.tag===19)q0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&pc(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),go(t,!1,i,a,c,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pc(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}go(t,!0,a,null,c,l);break;case"together":go(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ga(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Jn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=sa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=sa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function yo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rc(e)))}function N2(e,t,a){switch(t.tag){case 3:Ve(t,t.stateNode.containerInfo),$a(t,Xe,e.memoizedState.cache),hn();break;case 27:case 5:It(t);break;case 4:Ve(t,t.stateNode.containerInfo);break;case 10:$a(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,qu(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(qa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Y0(e,t,a):(qa(t),e=ga(e,t,a),e!==null?e.sibling:null);qa(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Jn(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return G0(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(qe,qe.current),l)break;return null;case 22:return t.lanes=0,N0(e,t,a,t.pendingProps);case 24:$a(t,Xe,e.memoizedState.cache)}return ga(e,t,a)}function V0(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!yo(e,a)&&(t.flags&128)===0)return Ze=!1,N2(e,t,a);Ze=(e.flags&131072)!==0}else Ze=!1,ge&&(t.flags&1048576)!==0&&Sd(t,ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=yn(t.elementType),t.type=e,typeof e=="function")Su(e)?(l=Sn(e,l),t.tag=1,t=B0(null,t,e,l,a)):(t.tag=0,t=oo(null,t,e,l,a));else{if(e!=null){var i=e.$$typeof;if(i===W){t.tag=11,t=R0(null,t,e,l,a);break e}else if(i===R){t.tag=14,t=D0(null,t,e,l,a);break e}}throw t=ut(e)||e,Error(u(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=Sn(l,t.pendingProps),B0(e,t,l,i,a);case 3:e:{if(Ve(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var c=t.memoizedState;i=c.element,Hu(e,t),Kl(t,l,null,a);var f=t.memoizedState;if(l=f.cache,$a(t,Xe,l),l!==c.cache&&Mu(t,[Xe],a,!0),Jl(),l=f.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=L0(e,t,l,a);break e}else if(l!==i){i=Ht(Error(u(424)),t),Gl(i),t=L0(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,De=qt(e.firstChild),tt=t,ge=!0,Ua=null,Lt=!0,a=Nd(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hn(),l===i){t=ga(e,t,a);break e}nt(e,t,l,a)}t=t.child}return t;case 26:return Tc(e,t),e===null?(a=eh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,l=Vc(re.current).createElement(a),l[et]=t,l[ot]=e,lt(l,a,e),We(l),t.stateNode=l):t.memoizedState=eh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return It(t),e===null&&ge&&(l=t.stateNode=W1(t.type,t.pendingProps,re.current),tt=t,Lt=!0,i=De,Fa(t.type)?(Fo=i,De=qt(l.firstChild)):De=i),nt(e,t,t.pendingProps.children,a),Tc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=l=De)&&(l=sg(l,t.type,t.pendingProps,Lt),l!==null?(t.stateNode=l,tt=t,De=qt(l.firstChild),Lt=!1,i=!0):i=!1),i||Ha(t)),It(t),i=t.type,c=t.pendingProps,f=e!==null?e.memoizedProps:null,l=c.children,Qo(i,c)?l=null:f!==null&&Qo(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=Vu(e,t,C2,null,null,a),pi._currentValue=i),Tc(e,t),nt(e,t,l,a),t.child;case 6:return e===null&&ge&&((e=a=De)&&(a=fg(a,t.pendingProps,Lt),a!==null?(t.stateNode=a,tt=t,De=null,e=!0):e=!1),e||Ha(t)),null;case 13:return Y0(e,t,a);case 4:return Ve(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=xn(t,null,l,a):nt(e,t,l,a),t.child;case 11:return R0(e,t,t.type,t.pendingProps,a);case 7:return nt(e,t,t.pendingProps,a),t.child;case 8:return nt(e,t,t.pendingProps.children,a),t.child;case 12:return nt(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,$a(t,t.type,l.value),nt(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,pn(t),i=at(i),l=l(i),t.flags|=1,nt(e,t,l,a),t.child;case 14:return D0(e,t,t.type,t.pendingProps,a);case 15:return _0(e,t,t.type,t.pendingProps,a);case 19:return G0(e,t,a);case 31:return _2(e,t,a);case 22:return N0(e,t,a,t.pendingProps);case 24:return pn(t),l=at(Xe),e===null?(i=_u(),i===null&&(i=Me,c=Ru(),i.pooledCache=c,c.refCount++,c!==null&&(i.pooledCacheLanes|=a),i=c),t.memoizedState={parent:l,cache:i},Uu(t),$a(t,Xe,i)):((e.lanes&a)!==0&&(Hu(e,t),Kl(t,null,null,a),Jl()),i=e.memoizedState,c=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),$a(t,Xe,l)):(l=c.cache,$a(t,Xe,l),l!==i.cache&&Mu(t,[Xe],a,!0))),nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function ya(e){e.flags|=4}function vo(e,t,a,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(g1())e.flags|=8192;else throw vn=fc,Nu}else e.flags&=-16777217}function X0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ih(t))if(g1())e.flags|=8192;else throw vn=fc,Nu}function Oc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ef():536870912,e.lanes|=t,cl|=t)}function ti(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function U2(e,t,a){var l=t.pendingProps;switch(Cu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ha(Xe),Te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(kn(t)?ya(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Au())),_e(t),null;case 26:var i=t.type,c=t.memoizedState;return e===null?(ya(t),c!==null?(_e(t),X0(t,c)):(_e(t),vo(t,i,null,l,a))):c?c!==e.memoizedState?(ya(t),_e(t),X0(t,c)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ya(t),_e(t),vo(t,i,e,l,a)),null;case 27:if(Pt(t),a=re.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ya(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return _e(t),null}e=J.current,kn(t)?Ed(t):(e=W1(i,l,a),t.stateNode=e,ya(t))}return _e(t),null;case 5:if(Pt(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ya(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return _e(t),null}if(c=J.current,kn(t))Ed(t);else{var f=Vc(re.current);switch(c){case 1:c=f.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:c=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":c=f.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":c=f.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":c=f.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?f.createElement(i,{is:l.is}):f.createElement(i)}}c[et]=t,c[ot]=l;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)c.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=c;e:switch(lt(c,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ya(t)}}return _e(t),vo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ya(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=re.current,kn(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=tt,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[et]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Y1(e.nodeValue,a)),e||Ha(t,!0)}else e=Vc(e).createTextNode(l),e[et]=t,t.stateNode=e}return _e(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=kn(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[et]=t}else hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else a=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ct(t),t):(Ct(t),null);if((t.flags&128)!==0)throw Error(u(558))}return _e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=kn(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[et]=t}else hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else i=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Ct(t),t):(Ct(t),null)}return Ct(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==i&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Oc(t,t.updateQueue),_e(t),null);case 4:return Te(),e===null&&Yo(t.stateNode.containerInfo),_e(t),null;case 10:return ha(t.type),_e(t),null;case 19:if(H(qe),l=t.memoizedState,l===null)return _e(t),null;if(i=(t.flags&128)!==0,c=l.rendering,c===null)if(i)ti(l,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=pc(e),c!==null){for(t.flags|=128,ti(l,!1),e=c.updateQueue,t.updateQueue=e,Oc(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)vd(a,e),a=a.sibling;return k(qe,qe.current&1|2),ge&&fa(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&xt()>_c&&(t.flags|=128,i=!0,ti(l,!1),t.lanes=4194304)}else{if(!i)if(e=pc(c),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Oc(t,e),ti(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!ge)return _e(t),null}else 2*xt()-l.renderingStartTime>_c&&a!==536870912&&(t.flags|=128,i=!0,ti(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(e=l.last,e!==null?e.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=xt(),e.sibling=null,a=qe.current,k(qe,i?a&1|2:a&1),ge&&fa(t,l.treeForkCount),e):(_e(t),null);case 22:case 23:return Ct(t),Yu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&Oc(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&H(gn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ha(Xe),_e(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function H2(e,t){switch(Cu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ha(Xe),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pt(t),null;case 31:if(t.memoizedState!==null){if(Ct(t),t.alternate===null)throw Error(u(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ct(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(qe),null;case 4:return Te(),null;case 10:return ha(t.type),null;case 22:case 23:return Ct(t),Yu(),e!==null&&H(gn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ha(Xe),null;case 25:return null;default:return null}}function Q0(e,t){switch(Cu(t),t.tag){case 3:ha(Xe),Te();break;case 26:case 27:case 5:Pt(t);break;case 4:Te();break;case 31:t.memoizedState!==null&&Ct(t);break;case 13:Ct(t);break;case 19:H(qe);break;case 10:ha(t.type);break;case 22:case 23:Ct(t),Yu(),e!==null&&H(gn);break;case 24:ha(Xe)}}function ai(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var c=a.create,f=a.inst;l=c(),f.destroy=l}a=a.next}while(a!==i)}}catch(m){Ce(t,t.return,m)}}function Va(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var c=i.next;l=c;do{if((l.tag&e)===e){var f=l.inst,m=f.destroy;if(m!==void 0){f.destroy=void 0,i=t;var v=a,w=m;try{w()}catch(N){Ce(i,v,N)}}}l=l.next}while(l!==c)}}catch(N){Ce(t,t.return,N)}}function Z0(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Hd(t,a)}catch(l){Ce(e,e.return,l)}}}function k0(e,t,a){a.props=Sn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ce(e,t,l)}}function ni(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){Ce(e,t,i)}}function na(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){Ce(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ce(e,t,i)}else a.current=null}function J0(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){Ce(e,e.return,i)}}function xo(e,t,a){try{var l=e.stateNode;lg(l,e.type,a,t),l[ot]=t}catch(i){Ce(e,e.return,i)}}function K0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fa(e.type)||e.tag===4}function bo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||K0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function So(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ua));else if(l!==4&&(l===27&&Fa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(So(e,t,a),e=e.sibling;e!==null;)So(e,t,a),e=e.sibling}function wc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Fa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(wc(e,t,a),e=e.sibling;e!==null;)wc(e,t,a),e=e.sibling}function F0(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);lt(t,l,a),t[et]=e,t[ot]=a}catch(c){Ce(e,e.return,c)}}var va=!1,ke=!1,jo=!1,W0=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function $2(e,t){if(e=e.containerInfo,Vo=Fc,e=od(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var f=0,m=-1,v=-1,w=0,N=0,B=e,M=null;t:for(;;){for(var D;B!==a||i!==0&&B.nodeType!==3||(m=f+i),B!==c||l!==0&&B.nodeType!==3||(v=f+l),B.nodeType===3&&(f+=B.nodeValue.length),(D=B.firstChild)!==null;)M=B,B=D;for(;;){if(B===e)break t;if(M===a&&++w===i&&(m=f),M===c&&++N===l&&(v=f),(D=B.nextSibling)!==null)break;B=M,M=B.parentNode}B=D}a=m===-1||v===-1?null:{start:m,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xo={focusedElem:e,selectionRange:a},Fc=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=t,i=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var K=Sn(a.type,i);e=l.getSnapshotBeforeUpdate(K,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ce(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ko(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ko(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function I0(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a),l&4&&ai(5,a);break;case 1:if(ba(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(f){Ce(a,a.return,f)}else{var i=Sn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ce(a,a.return,f)}}l&64&&Z0(a),l&512&&ni(a,a.return);break;case 3:if(ba(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Hd(e,t)}catch(f){Ce(a,a.return,f)}}break;case 27:t===null&&l&4&&F0(a);case 26:case 5:ba(e,a),t===null&&l&4&&J0(a),l&512&&ni(a,a.return);break;case 12:ba(e,a);break;case 31:ba(e,a),l&4&&t1(e,a);break;case 13:ba(e,a),l&4&&a1(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Z2.bind(null,a),dg(e,a))));break;case 22:if(l=a.memoizedState!==null||va,!l){t=t!==null&&t.memoizedState!==null||ke,i=va;var c=ke;va=l,(ke=t)&&!c?Sa(e,a,(a.subtreeFlags&8772)!==0):ba(e,a),va=i,ke=c}break;case 30:break;default:ba(e,a)}}function P0(e){var t=e.alternate;t!==null&&(e.alternate=null,P0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,ft=!1;function xa(e,t,a){for(a=a.child;a!==null;)e1(e,t,a),a=a.sibling}function e1(e,t,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Al,a)}catch{}switch(a.tag){case 26:ke||na(a,t),xa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||na(a,t);var l=He,i=ft;Fa(a.type)&&(He=a.stateNode,ft=!1),xa(e,t,a),di(a.stateNode),He=l,ft=i;break;case 5:ke||na(a,t);case 6:if(l=He,i=ft,He=null,xa(e,t,a),He=l,ft=i,He!==null)if(ft)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(a.stateNode)}catch(c){Ce(a,t,c)}else try{He.removeChild(a.stateNode)}catch(c){Ce(a,t,c)}break;case 18:He!==null&&(ft?(e=He,Z1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ml(e)):Z1(He,a.stateNode));break;case 4:l=He,i=ft,He=a.stateNode.containerInfo,ft=!0,xa(e,t,a),He=l,ft=i;break;case 0:case 11:case 14:case 15:Va(2,a,t),ke||Va(4,a,t),xa(e,t,a);break;case 1:ke||(na(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&k0(a,t,l)),xa(e,t,a);break;case 21:xa(e,t,a);break;case 22:ke=(l=ke)||a.memoizedState!==null,xa(e,t,a),ke=l;break;default:xa(e,t,a)}}function t1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ml(e)}catch(a){Ce(t,t.return,a)}}}function a1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(a){Ce(t,t.return,a)}}function B2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new W0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new W0),t;default:throw Error(u(435,e.tag))}}function Mc(e,t){var a=B2(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var i=k2.bind(null,e,l);l.then(i,i)}})}function dt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],c=e,f=t,m=f;e:for(;m!==null;){switch(m.tag){case 27:if(Fa(m.type)){He=m.stateNode,ft=!1;break e}break;case 5:He=m.stateNode,ft=!1;break e;case 3:case 4:He=m.stateNode.containerInfo,ft=!0;break e}m=m.return}if(He===null)throw Error(u(160));e1(c,f,i),He=null,ft=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)n1(t,e),t=t.sibling}var Zt=null;function n1(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dt(t,e),ht(e),l&4&&(Va(3,e,e.return),ai(3,e),Va(5,e,e.return));break;case 1:dt(t,e),ht(e),l&512&&(ke||a===null||na(a,a.return)),l&64&&va&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Zt;if(dt(t,e),ht(e),l&512&&(ke||a===null||na(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":c=i.getElementsByTagName("title")[0],(!c||c[Ml]||c[et]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=i.createElement(l),i.head.insertBefore(c,i.querySelector("head > title"))),lt(c,l,a),c[et]=e,We(c),l=c;break e;case"link":var f=nh("link","href",i).get(l+(a.href||""));if(f){for(var m=0;m<f.length;m++)if(c=f[m],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(m,1);break t}}c=i.createElement(l),lt(c,l,a),i.head.appendChild(c);break;case"meta":if(f=nh("meta","content",i).get(l+(a.content||""))){for(m=0;m<f.length;m++)if(c=f[m],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(m,1);break t}}c=i.createElement(l),lt(c,l,a),i.head.appendChild(c);break;default:throw Error(u(468,l))}c[et]=e,We(c),l=c}e.stateNode=l}else lh(i,e.type,e.stateNode);else e.stateNode=ah(i,l,e.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?lh(i,e.type,e.stateNode):ah(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&xo(e,e.memoizedProps,a.memoizedProps)}break;case 27:dt(t,e),ht(e),l&512&&(ke||a===null||na(a,a.return)),a!==null&&l&4&&xo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dt(t,e),ht(e),l&512&&(ke||a===null||na(a,a.return)),e.flags&32){i=e.stateNode;try{$n(i,"")}catch(K){Ce(e,e.return,K)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,xo(e,i,a!==null?a.memoizedProps:i)),l&1024&&(jo=!0);break;case 6:if(dt(t,e),ht(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(K){Ce(e,e.return,K)}}break;case 3:if(Zc=null,i=Zt,Zt=Xc(t.containerInfo),dt(t,e),Zt=i,ht(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ml(t.containerInfo)}catch(K){Ce(e,e.return,K)}jo&&(jo=!1,l1(e));break;case 4:l=Zt,Zt=Xc(e.stateNode.containerInfo),dt(t,e),ht(e),Zt=l;break;case 12:dt(t,e),ht(e);break;case 31:dt(t,e),ht(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mc(e,l)));break;case 13:dt(t,e),ht(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dc=xt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mc(e,l)));break;case 22:i=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,w=va,N=ke;if(va=w||i,ke=N||v,dt(t,e),ke=N,va=w,ht(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||v||va||ke||jn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(c=v.stateNode,i)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{m=v.stateNode;var B=v.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null;m.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(K){Ce(v,v.return,K)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(K){Ce(v,v.return,K)}}}else if(t.tag===18){if(a===null){v=t;try{var D=v.stateNode;i?k1(D,!0):k1(v.stateNode,!1)}catch(K){Ce(v,v.return,K)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Mc(e,a))));break;case 19:dt(t,e),ht(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mc(e,l)));break;case 30:break;case 21:break;default:dt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(K0(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,c=bo(e);wc(e,c,i);break;case 5:var f=a.stateNode;a.flags&32&&($n(f,""),a.flags&=-33);var m=bo(e);wc(e,m,f);break;case 3:case 4:var v=a.stateNode.containerInfo,w=bo(e);So(e,w,v);break;default:throw Error(u(161))}}catch(N){Ce(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;l1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)I0(e,t.alternate,t),t=t.sibling}function jn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Va(4,t,t.return),jn(t);break;case 1:na(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&k0(t,t.return,a),jn(t);break;case 27:di(t.stateNode);case 26:case 5:na(t,t.return),jn(t);break;case 22:t.memoizedState===null&&jn(t);break;case 30:jn(t);break;default:jn(t)}e=e.sibling}}function Sa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,c=t,f=c.flags;switch(c.tag){case 0:case 11:case 15:Sa(i,c,a),ai(4,c);break;case 1:if(Sa(i,c,a),l=c,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(w){Ce(l,l.return,w)}if(l=c,i=l.updateQueue,i!==null){var m=l.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)Ud(v[i],m)}catch(w){Ce(l,l.return,w)}}a&&f&64&&Z0(c),ni(c,c.return);break;case 27:F0(c);case 26:case 5:Sa(i,c,a),a&&l===null&&f&4&&J0(c),ni(c,c.return);break;case 12:Sa(i,c,a);break;case 31:Sa(i,c,a),a&&f&4&&t1(i,c);break;case 13:Sa(i,c,a),a&&f&4&&a1(i,c);break;case 22:c.memoizedState===null&&Sa(i,c,a),ni(c,c.return);break;case 30:break;default:Sa(i,c,a)}t=t.sibling}}function Eo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vl(a))}function zo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vl(e))}function kt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)i1(e,t,a,l),t=t.sibling}function i1(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:kt(e,t,a,l),i&2048&&ai(9,t);break;case 1:kt(e,t,a,l);break;case 3:kt(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vl(e)));break;case 12:if(i&2048){kt(e,t,a,l),e=t.stateNode;try{var c=t.memoizedProps,f=c.id,m=c.onPostCommit;typeof m=="function"&&m(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ce(t,t.return,v)}}else kt(e,t,a,l);break;case 31:kt(e,t,a,l);break;case 13:kt(e,t,a,l);break;case 23:break;case 22:c=t.stateNode,f=t.alternate,t.memoizedState!==null?c._visibility&2?kt(e,t,a,l):li(e,t):c._visibility&2?kt(e,t,a,l):(c._visibility|=2,nl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Eo(f,t);break;case 24:kt(e,t,a,l),i&2048&&zo(t.alternate,t);break;default:kt(e,t,a,l)}}function nl(e,t,a,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,f=t,m=a,v=l,w=f.flags;switch(f.tag){case 0:case 11:case 15:nl(c,f,m,v,i),ai(8,f);break;case 23:break;case 22:var N=f.stateNode;f.memoizedState!==null?N._visibility&2?nl(c,f,m,v,i):li(c,f):(N._visibility|=2,nl(c,f,m,v,i)),i&&w&2048&&Eo(f.alternate,f);break;case 24:nl(c,f,m,v,i),i&&w&2048&&zo(f.alternate,f);break;default:nl(c,f,m,v,i)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:li(a,l),i&2048&&Eo(l.alternate,l);break;case 24:li(a,l),i&2048&&zo(l.alternate,l);break;default:li(a,l)}t=t.sibling}}var ii=8192;function ll(e,t,a){if(e.subtreeFlags&ii)for(e=e.child;e!==null;)c1(e,t,a),e=e.sibling}function c1(e,t,a){switch(e.tag){case 26:ll(e,t,a),e.flags&ii&&e.memoizedState!==null&&zg(a,Zt,e.memoizedState,e.memoizedProps);break;case 5:ll(e,t,a);break;case 3:case 4:var l=Zt;Zt=Xc(e.stateNode.containerInfo),ll(e,t,a),Zt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ii,ii=16777216,ll(e,t,a),ii=l):ll(e,t,a));break;default:ll(e,t,a)}}function r1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ie=l,o1(l,e)}r1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)u1(e),e=e.sibling}function u1(e){switch(e.tag){case 0:case 11:case 15:ci(e),e.flags&2048&&Va(9,e,e.return);break;case 3:ci(e);break;case 12:ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rc(e)):ci(e);break;default:ci(e)}}function Rc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ie=l,o1(l,e)}r1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Va(8,t,t.return),Rc(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Rc(t));break;default:Rc(t)}e=e.sibling}}function o1(e,t){for(;Ie!==null;){var a=Ie;switch(a.tag){case 0:case 11:case 15:Va(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Vl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ie=l;else e:for(a=e;Ie!==null;){l=Ie;var i=l.sibling,c=l.return;if(P0(l),l===a){Ie=null;break e}if(i!==null){i.return=c,Ie=i;break e}Ie=c}}}var L2={getCacheForType:function(e){var t=at(Xe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return at(Xe).controller.signal}},Y2=typeof WeakMap=="function"?WeakMap:Map,je=0,Me=null,de=null,me=0,ze=0,Tt=null,Xa=!1,il=!1,Co=!1,ja=0,Ye=0,Qa=0,En=0,To=0,At=0,cl=0,ri=null,mt=null,Ao=!1,Dc=0,s1=0,_c=1/0,Nc=null,Za=null,Ke=0,ka=null,rl=null,Ea=0,Oo=0,wo=null,f1=null,ui=0,Mo=null;function Ot(){return(je&2)!==0&&me!==0?me&-me:U.T!==null?Ho():Af()}function d1(){if(At===0)if((me&536870912)===0||ge){var e=Gi;Gi<<=1,(Gi&3932160)===0&&(Gi=262144),At=e}else At=536870912;return e=zt.current,e!==null&&(e.flags|=32),At}function pt(e,t,a){(e===Me&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(ul(e,0),Ja(e,me,At,!1)),wl(e,a),((je&2)===0||e!==Me)&&(e===Me&&((je&2)===0&&(En|=a),Ye===4&&Ja(e,me,At,!1)),la(e))}function h1(e,t,a){if((je&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ol(e,t),i=l?V2(e,t):Do(e,t,!0),c=l;do{if(i===0){il&&!l&&Ja(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!q2(a)){i=Do(e,t,!1),c=!1;continue}if(i===2){if(c=t,e.errorRecoveryDisabledLanes&c)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var m=e;i=ri;var v=m.current.memoizedState.isDehydrated;if(v&&(ul(m,f).flags|=256),f=Do(m,f,!1),f!==2){if(Co&&!v){m.errorRecoveryDisabledLanes|=c,En|=c,i=4;break e}c=mt,mt=i,c!==null&&(mt===null?mt=c:mt.push.apply(mt,c))}i=f}if(c=!1,i!==2)continue}}if(i===1){ul(e,0),Ja(e,t,0,!0);break}e:{switch(l=e,c=i,c){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ja(l,t,At,!Xa);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Dc+300-xt(),10<i)){if(Ja(l,t,At,!Xa),Xi(l,0,!0)!==0)break e;Ea=t,l.timeoutHandle=X1(m1.bind(null,l,a,mt,Nc,Ao,t,At,En,cl,Xa,c,"Throttled",-0,0),i);break e}m1(l,a,mt,Nc,Ao,t,At,En,cl,Xa,c,null,-0,0)}}break}while(!0);la(e)}function m1(e,t,a,l,i,c,f,m,v,w,N,B,M,D){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ua},c1(t,c,B);var K=(c&62914560)===c?Dc-xt():(c&4194048)===c?s1-xt():0;if(K=Cg(B,K),K!==null){Ea=c,e.cancelPendingCommit=K(j1.bind(null,e,t,c,a,l,i,f,m,v,N,B,null,M,D)),Ja(e,c,f,!w);return}}j1(e,t,c,a,l,i,f,m,v)}function q2(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],c=i.getSnapshot;i=i.value;try{if(!jt(c(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ja(e,t,a,l){t&=~To,t&=~En,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var c=31-St(i),f=1<<c;l[c]=-1,i&=~f}a!==0&&zf(e,a,t)}function Uc(){return(je&6)===0?(oi(0),!1):!0}function Ro(){if(de!==null){if(ze===0)var e=de.return;else e=de,da=mn=null,Zu(e),In=null,Ql=0,e=de;for(;e!==null;)Q0(e.alternate,e),e=e.return;de=null}}function ul(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,rg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ea=0,Ro(),Me=e,de=a=sa(e.current,null),me=t,ze=0,Tt=null,Xa=!1,il=Ol(e,t),Co=!1,cl=At=To=En=Qa=Ye=0,mt=ri=null,Ao=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-St(l),c=1<<i;t|=e[i],l&=~c}return ja=t,ac(),a}function p1(e,t){ie=null,U.H=Pl,t===Wn||t===sc?(t=Rd(),ze=3):t===Nu?(t=Rd(),ze=4):ze=t===uo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,de===null&&(Ye=1,zc(e,Ht(t,e.current)))}function g1(){var e=zt.current;return e===null?!0:(me&4194048)===me?Yt===null:(me&62914560)===me||(me&536870912)!==0?e===Yt:!1}function y1(){var e=U.H;return U.H=Pl,e===null?Pl:e}function v1(){var e=U.A;return U.A=L2,e}function Hc(){Ye=4,Xa||(me&4194048)!==me&&zt.current!==null||(il=!0),(Qa&134217727)===0&&(En&134217727)===0||Me===null||Ja(Me,me,At,!1)}function Do(e,t,a){var l=je;je|=2;var i=y1(),c=v1();(Me!==e||me!==t)&&(Nc=null,ul(e,t)),t=!1;var f=Ye;e:do try{if(ze!==0&&de!==null){var m=de,v=Tt;switch(ze){case 8:Ro(),f=6;break e;case 3:case 2:case 9:case 6:zt.current===null&&(t=!0);var w=ze;if(ze=0,Tt=null,ol(e,m,v,w),a&&il){f=0;break e}break;default:w=ze,ze=0,Tt=null,ol(e,m,v,w)}}G2(),f=Ye;break}catch(N){p1(e,N)}while(!0);return t&&e.shellSuspendCounter++,da=mn=null,je=l,U.H=i,U.A=c,de===null&&(Me=null,me=0,ac()),f}function G2(){for(;de!==null;)x1(de)}function V2(e,t){var a=je;je|=2;var l=y1(),i=v1();Me!==e||me!==t?(Nc=null,_c=xt()+500,ul(e,t)):il=Ol(e,t);e:do try{if(ze!==0&&de!==null){t=de;var c=Tt;t:switch(ze){case 1:ze=0,Tt=null,ol(e,t,c,1);break;case 2:case 9:if(wd(c)){ze=0,Tt=null,b1(t);break}t=function(){ze!==2&&ze!==9||Me!==e||(ze=7),la(e)},c.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:wd(c)?(ze=0,Tt=null,b1(t)):(ze=0,Tt=null,ol(e,t,c,7));break;case 5:var f=null;switch(de.tag){case 26:f=de.memoizedState;case 5:case 27:var m=de;if(f?ih(f):m.stateNode.complete){ze=0,Tt=null;var v=m.sibling;if(v!==null)de=v;else{var w=m.return;w!==null?(de=w,$c(w)):de=null}break t}}ze=0,Tt=null,ol(e,t,c,5);break;case 6:ze=0,Tt=null,ol(e,t,c,6);break;case 8:Ro(),Ye=6;break e;default:throw Error(u(462))}}X2();break}catch(N){p1(e,N)}while(!0);return da=mn=null,U.H=l,U.A=i,je=a,de!==null?0:(Me=null,me=0,ac(),Ye)}function X2(){for(;de!==null&&!hp();)x1(de)}function x1(e){var t=V0(e.alternate,e,ja);e.memoizedProps=e.pendingProps,t===null?$c(e):de=t}function b1(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=$0(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=$0(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:Zu(t);default:Q0(a,t),t=de=vd(t,ja),t=V0(a,t,ja)}e.memoizedProps=e.pendingProps,t===null?$c(e):de=t}function ol(e,t,a,l){da=mn=null,Zu(t),In=null,Ql=0;var i=t.return;try{if(D2(e,i,t,a,me)){Ye=1,zc(e,Ht(a,e.current)),de=null;return}}catch(c){if(i!==null)throw de=i,c;Ye=1,zc(e,Ht(a,e.current)),de=null;return}t.flags&32768?(ge||l===1?e=!0:il||(me&536870912)!==0?e=!1:(Xa=e=!0,(l===2||l===9||l===3||l===6)&&(l=zt.current,l!==null&&l.tag===13&&(l.flags|=16384))),S1(t,e)):$c(t)}function $c(e){var t=e;do{if((t.flags&32768)!==0){S1(t,Xa);return}e=t.return;var a=U2(t.alternate,t,ja);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Ye===0&&(Ye=5)}function S1(e,t){do{var a=H2(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Ye=6,de=null}function j1(e,t,a,l,i,c,f,m,v){e.cancelPendingCommit=null;do Bc();while(Ke!==0);if((je&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(c=t.lanes|t.childLanes,c|=xu,Ep(e,a,c,f,m,v),e===Me&&(de=Me=null,me=0),rl=t,ka=e,Ea=a,Oo=c,wo=i,f1=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,J2(Yi,function(){return A1(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=U.T,U.T=null,i=Z.p,Z.p=2,f=je,je|=4;try{$2(e,t,a)}finally{je=f,Z.p=i,U.T=l}}Ke=1,E1(),z1(),C1()}}function E1(){if(Ke===1){Ke=0;var e=ka,t=rl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var l=Z.p;Z.p=2;var i=je;je|=4;try{n1(t,e);var c=Xo,f=od(e.containerInfo),m=c.focusedElem,v=c.selectionRange;if(f!==m&&m&&m.ownerDocument&&ud(m.ownerDocument.documentElement,m)){if(v!==null&&mu(m)){var w=v.start,N=v.end;if(N===void 0&&(N=w),"selectionStart"in m)m.selectionStart=w,m.selectionEnd=Math.min(N,m.value.length);else{var B=m.ownerDocument||document,M=B&&B.defaultView||window;if(M.getSelection){var D=M.getSelection(),K=m.textContent.length,ae=Math.min(v.start,K),we=v.end===void 0?ae:Math.min(v.end,K);!D.extend&&ae>we&&(f=we,we=ae,ae=f);var C=rd(m,ae),S=rd(m,we);if(C&&S&&(D.rangeCount!==1||D.anchorNode!==C.node||D.anchorOffset!==C.offset||D.focusNode!==S.node||D.focusOffset!==S.offset)){var A=B.createRange();A.setStart(C.node,C.offset),D.removeAllRanges(),ae>we?(D.addRange(A),D.extend(S.node,S.offset)):(A.setEnd(S.node,S.offset),D.addRange(A))}}}}for(B=[],D=m;D=D.parentNode;)D.nodeType===1&&B.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<B.length;m++){var $=B[m];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Fc=!!Vo,Xo=Vo=null}finally{je=i,Z.p=l,U.T=a}}e.current=t,Ke=2}}function z1(){if(Ke===2){Ke=0;var e=ka,t=rl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var l=Z.p;Z.p=2;var i=je;je|=4;try{I0(e,t.alternate,t)}finally{je=i,Z.p=l,U.T=a}}Ke=3}}function C1(){if(Ke===4||Ke===3){Ke=0,mp();var e=ka,t=rl,a=Ea,l=f1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ke=5:(Ke=0,rl=ka=null,T1(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Za=null),Kr(a),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Al,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=U.T,i=Z.p,Z.p=2,U.T=null;try{for(var c=e.onRecoverableError,f=0;f<l.length;f++){var m=l[f];c(m.value,{componentStack:m.stack})}}finally{U.T=t,Z.p=i}}(Ea&3)!==0&&Bc(),la(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Mo?ui++:(ui=0,Mo=e):ui=0,oi(0)}}function T1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vl(t)))}function Bc(){return E1(),z1(),C1(),A1()}function A1(){if(Ke!==5)return!1;var e=ka,t=Oo;Oo=0;var a=Kr(Ea),l=U.T,i=Z.p;try{Z.p=32>a?32:a,U.T=null,a=wo,wo=null;var c=ka,f=Ea;if(Ke=0,rl=ka=null,Ea=0,(je&6)!==0)throw Error(u(331));var m=je;if(je|=4,u1(c.current),i1(c,c.current,f,a),je=m,oi(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Al,c)}catch{}return!0}finally{Z.p=i,U.T=l,T1(e,t)}}function O1(e,t,a){t=Ht(a,t),t=ro(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(wl(e,2),la(e))}function Ce(e,t,a){if(e.tag===3)O1(e,e,a);else for(;t!==null;){if(t.tag===3){O1(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Za===null||!Za.has(l))){e=Ht(a,e),a=w0(2),l=Ya(t,a,2),l!==null&&(M0(a,l,t,e),wl(l,2),la(l));break}}t=t.return}}function _o(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Y2;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(Co=!0,i.add(a),e=Q2.bind(null,e,t,a),t.then(e,e))}function Q2(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Me===e&&(me&a)===a&&(Ye===4||Ye===3&&(me&62914560)===me&&300>xt()-Dc?(je&2)===0&&ul(e,0):To|=a,cl===me&&(cl=0)),la(e)}function w1(e,t){t===0&&(t=Ef()),e=fn(e,t),e!==null&&(wl(e,t),la(e))}function Z2(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),w1(e,a)}function k2(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),w1(e,a)}function J2(e,t){return Qr(e,t)}var Lc=null,sl=null,No=!1,Yc=!1,Uo=!1,Ka=0;function la(e){e!==sl&&e.next===null&&(sl===null?Lc=sl=e:sl=sl.next=e),Yc=!0,No||(No=!0,F2())}function oi(e,t){if(!Uo&&Yc){Uo=!0;do for(var a=!1,l=Lc;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var c=0;else{var f=l.suspendedLanes,m=l.pingedLanes;c=(1<<31-St(42|e)+1)-1,c&=i&~(f&~m),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,_1(l,c))}else c=me,c=Xi(l,l===Me?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Ol(l,c)||(a=!0,_1(l,c));l=l.next}while(a);Uo=!1}}function K2(){M1()}function M1(){Yc=No=!1;var e=0;Ka!==0&&cg()&&(e=Ka);for(var t=xt(),a=null,l=Lc;l!==null;){var i=l.next,c=R1(l,t);c===0?(l.next=null,a===null?Lc=i:a.next=i,i===null&&(sl=a)):(a=l,(e!==0||(c&3)!==0)&&(Yc=!0)),l=i}Ke!==0&&Ke!==5||oi(e),Ka!==0&&(Ka=0)}function R1(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var f=31-St(c),m=1<<f,v=i[f];v===-1?((m&a)===0||(m&l)!==0)&&(i[f]=jp(m,t)):v<=t&&(e.expiredLanes|=m),c&=~m}if(t=Me,a=me,a=Xi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Zr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ol(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Zr(l),Kr(a)){case 2:case 8:a=Sf;break;case 32:a=Yi;break;case 268435456:a=jf;break;default:a=Yi}return l=D1.bind(null,e),a=Qr(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Zr(l),e.callbackPriority=2,e.callbackNode=null,2}function D1(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bc()&&e.callbackNode!==a)return null;var l=me;return l=Xi(e,e===Me?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(h1(e,l,t),R1(e,xt()),e.callbackNode!=null&&e.callbackNode===a?D1.bind(null,e):null)}function _1(e,t){if(Bc())return null;h1(e,t,!0)}function F2(){ug(function(){(je&6)!==0?Qr(bf,K2):M1()})}function Ho(){if(Ka===0){var e=Kn;e===0&&(e=qi,qi<<=1,(qi&261888)===0&&(qi=256)),Ka=e}return Ka}function N1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ji(""+e)}function U1(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function W2(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var c=N1((i[ot]||null).action),f=l.submitter;f&&(t=(t=f[ot]||null)?N1(t.formAction):f.getAttribute("formAction"),t!==null&&(c=t,f=null));var m=new Ii("action","action",null,l,i);e.push({event:m,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ka!==0){var v=f?U1(i,f):new FormData(i);to(a,{pending:!0,data:v,method:i.method,action:c},null,v)}}else typeof c=="function"&&(m.preventDefault(),v=f?U1(i,f):new FormData(i),to(a,{pending:!0,data:v,method:i.method,action:c},c,v))},currentTarget:i}]})}}for(var $o=0;$o<vu.length;$o++){var Bo=vu[$o],I2=Bo.toLowerCase(),P2=Bo[0].toUpperCase()+Bo.slice(1);Qt(I2,"on"+P2)}Qt(dd,"onAnimationEnd"),Qt(hd,"onAnimationIteration"),Qt(md,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(p2,"onTransitionRun"),Qt(g2,"onTransitionStart"),Qt(y2,"onTransitionCancel"),Qt(pd,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rn("onBeforeInput",["compositionend","keypress","textInput","paste"]),rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si));function H1(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var f=l.length-1;0<=f;f--){var m=l[f],v=m.instance,w=m.currentTarget;if(m=m.listener,v!==c&&i.isPropagationStopped())break e;c=m,i.currentTarget=w;try{c(i)}catch(N){tc(N)}i.currentTarget=null,c=v}else for(f=0;f<l.length;f++){if(m=l[f],v=m.instance,w=m.currentTarget,m=m.listener,v!==c&&i.isPropagationStopped())break e;c=m,i.currentTarget=w;try{c(i)}catch(N){tc(N)}i.currentTarget=null,c=v}}}}function he(e,t){var a=t[Fr];a===void 0&&(a=t[Fr]=new Set);var l=e+"__bubble";a.has(l)||($1(t,e,2,!1),a.add(l))}function Lo(e,t,a){var l=0;t&&(l|=4),$1(a,e,l,t)}var qc="_reactListening"+Math.random().toString(36).slice(2);function Yo(e){if(!e[qc]){e[qc]=!0,Mf.forEach(function(a){a!=="selectionchange"&&(eg.has(a)||Lo(a,!1,e),Lo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qc]||(t[qc]=!0,Lo("selectionchange",!1,t))}}function $1(e,t,a,l){switch(dh(t)){case 2:var i=Og;break;case 8:i=wg;break;default:i=ts}a=i.bind(null,t,a,e),i=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function qo(e,t,a,l,i){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var f=l.tag;if(f===3||f===4){var m=l.stateNode.containerInfo;if(m===i)break;if(f===4)for(f=l.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;m!==null;){if(f=Dn(m),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){l=c=f;continue e}m=m.parentNode}}l=l.return}Gf(function(){var w=c,N=nu(a),B=[];e:{var M=gd.get(e);if(M!==void 0){var D=Ii,K=e;switch(e){case"keypress":if(Fi(a)===0)break e;case"keydown":case"keyup":D=kp;break;case"focusin":K="focus",D=ou;break;case"focusout":K="blur",D=ou;break;case"beforeblur":case"afterblur":D=ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Fp;break;case dd:case hd:case md:D=Bp;break;case pd:D=Ip;break;case"scroll":case"scrollend":D=_p;break;case"wheel":D=e2;break;case"copy":case"cut":case"paste":D=Yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=kf;break;case"toggle":case"beforetoggle":D=a2}var ae=(t&4)!==0,we=!ae&&(e==="scroll"||e==="scrollend"),C=ae?M!==null?M+"Capture":null:M;ae=[];for(var S=w,A;S!==null;){var $=S;if(A=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||A===null||C===null||($=Dl(S,C),$!=null&&ae.push(fi(S,$,A))),we)break;S=S.return}0<ae.length&&(M=new D(M,K,null,a,N),B.push({event:M,listeners:ae}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",M&&a!==au&&(K=a.relatedTarget||a.fromElement)&&(Dn(K)||K[Rn]))break e;if((D||M)&&(M=N.window===N?N:(M=N.ownerDocument)?M.defaultView||M.parentWindow:window,D?(K=a.relatedTarget||a.toElement,D=w,K=K?Dn(K):null,K!==null&&(we=h(K),ae=K.tag,K!==we||ae!==5&&ae!==27&&ae!==6)&&(K=null)):(D=null,K=w),D!==K)){if(ae=Qf,$="onMouseLeave",C="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ae=kf,$="onPointerLeave",C="onPointerEnter",S="pointer"),we=D==null?M:Rl(D),A=K==null?M:Rl(K),M=new ae($,S+"leave",D,a,N),M.target=we,M.relatedTarget=A,$=null,Dn(N)===w&&(ae=new ae(C,S+"enter",K,a,N),ae.target=A,ae.relatedTarget=we,$=ae),we=$,D&&K)t:{for(ae=tg,C=D,S=K,A=0,$=C;$;$=ae($))A++;$=0;for(var ee=S;ee;ee=ae(ee))$++;for(;0<A-$;)C=ae(C),A--;for(;0<$-A;)S=ae(S),$--;for(;A--;){if(C===S||S!==null&&C===S.alternate){ae=C;break t}C=ae(C),S=ae(S)}ae=null}else ae=null;D!==null&&B1(B,M,D,ae,!1),K!==null&&we!==null&&B1(B,we,K,ae,!0)}}e:{if(M=w?Rl(w):window,D=M.nodeName&&M.nodeName.toLowerCase(),D==="select"||D==="input"&&M.type==="file")var xe=td;else if(Pf(M))if(ad)xe=d2;else{xe=s2;var I=o2}else D=M.nodeName,!D||D.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?w&&tu(w.elementType)&&(xe=td):xe=f2;if(xe&&(xe=xe(e,w))){ed(B,xe,a,N);break e}I&&I(e,M,w),e==="focusout"&&w&&M.type==="number"&&w.memoizedProps.value!=null&&eu(M,"number",M.value)}switch(I=w?Rl(w):window,e){case"focusin":(Pf(I)||I.contentEditable==="true")&&(qn=I,pu=w,Yl=null);break;case"focusout":Yl=pu=qn=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,sd(B,a,N);break;case"selectionchange":if(m2)break;case"keydown":case"keyup":sd(B,a,N)}var ue;if(fu)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Yn?Wf(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Jf&&a.locale!=="ko"&&(Yn||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Yn&&(ue=Vf()):(_a=N,cu="value"in _a?_a.value:_a.textContent,Yn=!0)),I=Gc(w,pe),0<I.length&&(pe=new Zf(pe,e,null,a,N),B.push({event:pe,listeners:I}),ue?pe.data=ue:(ue=If(a),ue!==null&&(pe.data=ue)))),(ue=l2?i2(e,a):c2(e,a))&&(pe=Gc(w,"onBeforeInput"),0<pe.length&&(I=new Zf("onBeforeInput","beforeinput",null,a,N),B.push({event:I,listeners:pe}),I.data=ue)),W2(B,e,w,a,N)}H1(B,t)})}function fi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Gc(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,c=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||c===null||(i=Dl(e,a),i!=null&&l.unshift(fi(e,i,c)),i=Dl(e,t),i!=null&&l.push(fi(e,i,c))),e.tag===3)return l;e=e.return}return[]}function tg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function B1(e,t,a,l,i){for(var c=t._reactName,f=[];a!==null&&a!==l;){var m=a,v=m.alternate,w=m.stateNode;if(m=m.tag,v!==null&&v===l)break;m!==5&&m!==26&&m!==27||w===null||(v=w,i?(w=Dl(a,c),w!=null&&f.unshift(fi(a,w,v))):i||(w=Dl(a,c),w!=null&&f.push(fi(a,w,v)))),a=a.return}f.length!==0&&e.push({event:t,listeners:f})}var ag=/\r\n?/g,ng=/\u0000|\uFFFD/g;function L1(e){return(typeof e=="string"?e:""+e).replace(ag,`
`).replace(ng,"")}function Y1(e,t){return t=L1(t),L1(e)===t}function Oe(e,t,a,l,i,c){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||$n(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&$n(e,""+l);break;case"className":Zi(e,"class",l);break;case"tabIndex":Zi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Zi(e,a,l);break;case"style":Yf(e,l,c);break;case"data":if(t!=="object"){Zi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ji(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&Oe(e,t,"name",i.name,i,null),Oe(e,t,"formEncType",i.formEncType,i,null),Oe(e,t,"formMethod",i.formMethod,i,null),Oe(e,t,"formTarget",i.formTarget,i,null)):(Oe(e,t,"encType",i.encType,i,null),Oe(e,t,"method",i.method,i,null),Oe(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Ji(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ua);break;case"onScroll":l!=null&&he("scroll",e);break;case"onScrollEnd":l!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Ji(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":he("beforetoggle",e),he("toggle",e),Qi(e,"popover",l);break;case"xlinkActuate":ra(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ra(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ra(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ra(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ra(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ra(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ra(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ra(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ra(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Qi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rp.get(a)||a,Qi(e,a,l))}}function Go(e,t,a,l,i,c){switch(a){case"style":Yf(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?$n(e,l):(typeof l=="number"||typeof l=="bigint")&&$n(e,""+l);break;case"onScroll":l!=null&&he("scroll",e);break;case"onScrollEnd":l!=null&&he("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),c=e[ot]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(t,c,i),typeof l=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Qi(e,a,l)}}}function lt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var l=!1,i=!1,c;for(c in a)if(a.hasOwnProperty(c)){var f=a[c];if(f!=null)switch(c){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Oe(e,t,c,f,a,null)}}i&&Oe(e,t,"srcSet",a.srcSet,a,null),l&&Oe(e,t,"src",a.src,a,null);return;case"input":he("invalid",e);var m=c=f=i=null,v=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var N=a[l];if(N!=null)switch(l){case"name":i=N;break;case"type":f=N;break;case"checked":v=N;break;case"defaultChecked":w=N;break;case"value":c=N;break;case"defaultValue":m=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:Oe(e,t,l,N,a,null)}}Hf(e,c,m,v,w,f,i,!1);return;case"select":he("invalid",e),l=f=c=null;for(i in a)if(a.hasOwnProperty(i)&&(m=a[i],m!=null))switch(i){case"value":c=m;break;case"defaultValue":f=m;break;case"multiple":l=m;default:Oe(e,t,i,m,a,null)}t=c,a=f,e.multiple=!!l,t!=null?Hn(e,!!l,t,!1):a!=null&&Hn(e,!!l,a,!0);return;case"textarea":he("invalid",e),c=i=l=null;for(f in a)if(a.hasOwnProperty(f)&&(m=a[f],m!=null))switch(f){case"value":l=m;break;case"defaultValue":i=m;break;case"children":c=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(u(91));break;default:Oe(e,t,f,m,a,null)}Bf(e,l,i,c);return;case"option":for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null)&&(v==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Oe(e,t,v,l,a,null));return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(l=0;l<si.length;l++)he(si[l],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Oe(e,t,w,l,a,null)}return;default:if(tu(t)){for(N in a)a.hasOwnProperty(N)&&(l=a[N],l!==void 0&&Go(e,t,N,l,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!=null&&Oe(e,t,m,l,a,null))}function lg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,c=null,f=null,m=null,v=null,w=null,N=null;for(D in a){var B=a[D];if(a.hasOwnProperty(D)&&B!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":v=B;default:l.hasOwnProperty(D)||Oe(e,t,D,null,l,B)}}for(var M in l){var D=l[M];if(B=a[M],l.hasOwnProperty(M)&&(D!=null||B!=null))switch(M){case"type":c=D;break;case"name":i=D;break;case"checked":w=D;break;case"defaultChecked":N=D;break;case"value":f=D;break;case"defaultValue":m=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:D!==B&&Oe(e,t,M,D,l,B)}}Pr(e,f,m,v,w,N,c,i);return;case"select":D=f=m=M=null;for(c in a)if(v=a[c],a.hasOwnProperty(c)&&v!=null)switch(c){case"value":break;case"multiple":D=v;default:l.hasOwnProperty(c)||Oe(e,t,c,null,l,v)}for(i in l)if(c=l[i],v=a[i],l.hasOwnProperty(i)&&(c!=null||v!=null))switch(i){case"value":M=c;break;case"defaultValue":m=c;break;case"multiple":f=c;default:c!==v&&Oe(e,t,i,c,l,v)}t=m,a=f,l=D,M!=null?Hn(e,!!a,M,!1):!!l!=!!a&&(t!=null?Hn(e,!!a,t,!0):Hn(e,!!a,a?[]:"",!1));return;case"textarea":D=M=null;for(m in a)if(i=a[m],a.hasOwnProperty(m)&&i!=null&&!l.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Oe(e,t,m,null,l,i)}for(f in l)if(i=l[f],c=a[f],l.hasOwnProperty(f)&&(i!=null||c!=null))switch(f){case"value":M=i;break;case"defaultValue":D=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==c&&Oe(e,t,f,i,l,c)}$f(e,M,D);return;case"option":for(var K in a)M=a[K],a.hasOwnProperty(K)&&M!=null&&!l.hasOwnProperty(K)&&(K==="selected"?e.selected=!1:Oe(e,t,K,null,l,M));for(v in l)M=l[v],D=a[v],l.hasOwnProperty(v)&&M!==D&&(M!=null||D!=null)&&(v==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":Oe(e,t,v,M,l,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)M=a[ae],a.hasOwnProperty(ae)&&M!=null&&!l.hasOwnProperty(ae)&&Oe(e,t,ae,null,l,M);for(w in l)if(M=l[w],D=a[w],l.hasOwnProperty(w)&&M!==D&&(M!=null||D!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:Oe(e,t,w,M,l,D)}return;default:if(tu(t)){for(var we in a)M=a[we],a.hasOwnProperty(we)&&M!==void 0&&!l.hasOwnProperty(we)&&Go(e,t,we,void 0,l,M);for(N in l)M=l[N],D=a[N],!l.hasOwnProperty(N)||M===D||M===void 0&&D===void 0||Go(e,t,N,M,l,D);return}}for(var C in a)M=a[C],a.hasOwnProperty(C)&&M!=null&&!l.hasOwnProperty(C)&&Oe(e,t,C,null,l,M);for(B in l)M=l[B],D=a[B],!l.hasOwnProperty(B)||M===D||M==null&&D==null||Oe(e,t,B,M,l,D)}function q1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ig(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],c=i.transferSize,f=i.initiatorType,m=i.duration;if(c&&m&&q1(f)){for(f=0,m=i.responseEnd,l+=1;l<a.length;l++){var v=a[l],w=v.startTime;if(w>m)break;var N=v.transferSize,B=v.initiatorType;N&&q1(B)&&(v=v.responseEnd,f+=N*(v<m?1:(m-w)/(v-w)))}if(--l,t+=8*(c+f)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vo=null,Xo=null;function Vc(e){return e.nodeType===9?e:e.ownerDocument}function G1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function V1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zo=null;function cg(){var e=window.event;return e&&e.type==="popstate"?e===Zo?!1:(Zo=e,!0):(Zo=null,!1)}var X1=typeof setTimeout=="function"?setTimeout:void 0,rg=typeof clearTimeout=="function"?clearTimeout:void 0,Q1=typeof Promise=="function"?Promise:void 0,ug=typeof queueMicrotask=="function"?queueMicrotask:typeof Q1<"u"?function(e){return Q1.resolve(null).then(e).catch(og)}:X1;function og(e){setTimeout(function(){throw e})}function Fa(e){return e==="head"}function Z1(e,t){var a=t,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(i),ml(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")di(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,di(a);for(var c=a.firstChild;c;){var f=c.nextSibling,m=c.nodeName;c[Ml]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=f}}else a==="body"&&di(e.ownerDocument.body);a=i}while(a);ml(t)}function k1(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function ko(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ko(a),Wr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sg(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ml])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=qt(e.nextSibling),e===null)break}return null}function fg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=qt(e.nextSibling),e===null))return null;return e}function J1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=qt(e.nextSibling),e===null))return null;return e}function Jo(e){return e.data==="$?"||e.data==="$~"}function Ko(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fo=null;function K1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return qt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function F1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function W1(e,t,a){switch(t=Vc(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function di(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wr(e)}var Gt=new Map,I1=new Set;function Xc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var za=Z.d;Z.d={f:hg,r:mg,D:pg,C:gg,L:yg,m:vg,X:bg,S:xg,M:Sg};function hg(){var e=za.f(),t=Uc();return e||t}function mg(e){var t=_n(e);t!==null&&t.tag===5&&t.type==="form"?p0(t):za.r(e)}var fl=typeof document>"u"?null:document;function P1(e,t,a){var l=fl;if(l&&typeof t=="string"&&t){var i=Nt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),I1.has(i)||(I1.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),lt(t,"link",e),We(t),l.head.appendChild(t)))}}function pg(e){za.D(e),P1("dns-prefetch",e,null)}function gg(e,t){za.C(e,t),P1("preconnect",e,t)}function yg(e,t,a){za.L(e,t,a);var l=fl;if(l&&e&&t){var i='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Nt(a.imageSizes)+'"]')):i+='[href="'+Nt(e)+'"]';var c=i;switch(t){case"style":c=dl(e);break;case"script":c=hl(e)}Gt.has(c)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Gt.set(c,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(hi(c))||t==="script"&&l.querySelector(mi(c))||(t=l.createElement("link"),lt(t,"link",e),We(t),l.head.appendChild(t)))}}function vg(e,t){za.m(e,t);var a=fl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Nt(l)+'"][href="'+Nt(e)+'"]',c=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=hl(e)}if(!Gt.has(c)&&(e=E({rel:"modulepreload",href:e},t),Gt.set(c,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mi(c)))return}l=a.createElement("link"),lt(l,"link",e),We(l),a.head.appendChild(l)}}}function xg(e,t,a){za.S(e,t,a);var l=fl;if(l&&e){var i=Nn(l).hoistableStyles,c=dl(e);t=t||"default";var f=i.get(c);if(!f){var m={loading:0,preload:null};if(f=l.querySelector(hi(c)))m.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Gt.get(c))&&Wo(e,a);var v=f=l.createElement("link");We(v),lt(v,"link",e),v._p=new Promise(function(w,N){v.onload=w,v.onerror=N}),v.addEventListener("load",function(){m.loading|=1}),v.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Qc(f,t,l)}f={type:"stylesheet",instance:f,count:1,state:m},i.set(c,f)}}}function bg(e,t){za.X(e,t);var a=fl;if(a&&e){var l=Nn(a).hoistableScripts,i=hl(e),c=l.get(i);c||(c=a.querySelector(mi(i)),c||(e=E({src:e,async:!0},t),(t=Gt.get(i))&&Io(e,t),c=a.createElement("script"),We(c),lt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(i,c))}}function Sg(e,t){za.M(e,t);var a=fl;if(a&&e){var l=Nn(a).hoistableScripts,i=hl(e),c=l.get(i);c||(c=a.querySelector(mi(i)),c||(e=E({src:e,async:!0,type:"module"},t),(t=Gt.get(i))&&Io(e,t),c=a.createElement("script"),We(c),lt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(i,c))}}function eh(e,t,a,l){var i=(i=re.current)?Xc(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=dl(a.href),a=Nn(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dl(a.href);var c=Nn(i).hoistableStyles,f=c.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,f),(c=i.querySelector(hi(e)))&&!c._p&&(f.instance=c,f.state.loading=5),Gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gt.set(e,a),c||jg(i,e,a,f.state))),t&&l===null)throw Error(u(528,""));return f}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hl(a),a=Nn(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function dl(e){return'href="'+Nt(e)+'"'}function hi(e){return'link[rel="stylesheet"]['+e+"]"}function th(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function jg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),lt(t,"link",a),We(t),e.head.appendChild(t))}function hl(e){return'[src="'+Nt(e)+'"]'}function mi(e){return"script[async]"+e}function ah(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Nt(a.href)+'"]');if(l)return t.instance=l,We(l),l;var i=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),We(l),lt(l,"style",i),Qc(l,a.precedence,e),t.instance=l;case"stylesheet":i=dl(a.href);var c=e.querySelector(hi(i));if(c)return t.state.loading|=4,t.instance=c,We(c),c;l=th(a),(i=Gt.get(i))&&Wo(l,i),c=(e.ownerDocument||e).createElement("link"),We(c);var f=c;return f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),lt(c,"link",l),t.state.loading|=4,Qc(c,a.precedence,e),t.instance=c;case"script":return c=hl(a.src),(i=e.querySelector(mi(c)))?(t.instance=i,We(i),i):(l=a,(i=Gt.get(c))&&(l=E({},a),Io(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),We(i),lt(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Qc(l,a.precedence,e));return t.instance}function Qc(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,c=i,f=0;f<l.length;f++){var m=l[f];if(m.dataset.precedence===t)c=m;else if(c!==i)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Wo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Io(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zc=null;function nh(e,t,a){if(Zc===null){var l=new Map,i=Zc=new Map;i.set(a,l)}else i=Zc,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var c=a[i];if(!(c[Ml]||c[et]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var f=c.getAttribute(t)||"";f=e+f;var m=l.get(f);m?m.push(c):l.set(f,[c])}}return l}function lh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Eg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ih(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function zg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=dl(l.href),c=t.querySelector(hi(i));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=kc.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=c,We(c);return}c=t.ownerDocument||t,l=th(l),(i=Gt.get(i))&&Wo(l,i),c=c.createElement("link"),We(c);var f=c;f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),lt(c,"link",l),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=kc.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Po=0;function Cg(e,t){return e.stylesheets&&e.count===0&&Kc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Kc(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Po===0&&(Po=62500*ig());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kc(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Po?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function kc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jc=null;function Kc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jc=new Map,t.forEach(Tg,e),Jc=null,kc.call(e))}function Tg(e,t){if(!(t.state.loading&4)){var a=Jc.get(e);if(a)var l=a.get(null);else{a=new Map,Jc.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<i.length;c++){var f=i[c];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),l=f)}l&&a.set(null,l)}i=t.instance,f=i.getAttribute("data-precedence"),c=a.get(f)||l,c===l&&a.set(null,i),a.set(f,i),this.count++,l=kc.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),c?c.parentNode.insertBefore(i,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var pi={$$typeof:L,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Ag(e,t,a,l,i,c,f,m,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kr(0),this.hiddenUpdates=kr(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=c,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function ch(e,t,a,l,i,c,f,m,v,w,N,B){return e=new Ag(e,t,a,f,v,w,N,B,m),t=1,c===!0&&(t|=24),c=Et(3,null,null,t),e.current=c,c.stateNode=e,t=Ru(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:t},Uu(c),e}function rh(e){return e?(e=Xn,e):Xn}function uh(e,t,a,l,i,c){i=rh(i),l.context===null?l.context=i:l.pendingContext=i,l=La(t),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=Ya(e,l,t),a!==null&&(pt(a,e,t),kl(a,e,t))}function oh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function es(e,t){oh(e,t),(e=e.alternate)&&oh(e,t)}function sh(e){if(e.tag===13||e.tag===31){var t=fn(e,67108864);t!==null&&pt(t,e,67108864),es(e,67108864)}}function fh(e){if(e.tag===13||e.tag===31){var t=Ot();t=Jr(t);var a=fn(e,t);a!==null&&pt(a,e,t),es(e,t)}}var Fc=!0;function Og(e,t,a,l){var i=U.T;U.T=null;var c=Z.p;try{Z.p=2,ts(e,t,a,l)}finally{Z.p=c,U.T=i}}function wg(e,t,a,l){var i=U.T;U.T=null;var c=Z.p;try{Z.p=8,ts(e,t,a,l)}finally{Z.p=c,U.T=i}}function ts(e,t,a,l){if(Fc){var i=as(l);if(i===null)qo(e,t,l,Wc,a),hh(e,l);else if(Rg(i,e,t,a,l))l.stopPropagation();else if(hh(e,l),t&4&&-1<Mg.indexOf(e)){for(;i!==null;){var c=_n(i);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var f=cn(c.pendingLanes);if(f!==0){var m=c;for(m.pendingLanes|=2,m.entangledLanes|=2;f;){var v=1<<31-St(f);m.entanglements[1]|=v,f&=~v}la(c),(je&6)===0&&(_c=xt()+500,oi(0))}}break;case 31:case 13:m=fn(c,2),m!==null&&pt(m,c,2),Uc(),es(c,2)}if(c=as(l),c===null&&qo(e,t,l,Wc,a),c===i)break;i=c}i!==null&&l.stopPropagation()}else qo(e,t,l,null,a)}}function as(e){return e=nu(e),ns(e)}var Wc=null;function ns(e){if(Wc=null,e=Dn(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=x(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wc=e,null}function dh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pp()){case bf:return 2;case Sf:return 8;case Yi:case gp:return 32;case jf:return 268435456;default:return 32}default:return 32}}var ls=!1,Wa=null,Ia=null,Pa=null,gi=new Map,yi=new Map,en=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hh(e,t){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function vi(e,t,a,l,i,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[i]},t!==null&&(t=_n(t),t!==null&&sh(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Rg(e,t,a,l,i){switch(t){case"focusin":return Wa=vi(Wa,e,t,a,l,i),!0;case"dragenter":return Ia=vi(Ia,e,t,a,l,i),!0;case"mouseover":return Pa=vi(Pa,e,t,a,l,i),!0;case"pointerover":var c=i.pointerId;return gi.set(c,vi(gi.get(c)||null,e,t,a,l,i)),!0;case"gotpointercapture":return c=i.pointerId,yi.set(c,vi(yi.get(c)||null,e,t,a,l,i)),!0}return!1}function mh(e){var t=Dn(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,Of(e.priority,function(){fh(a)});return}}else if(t===31){if(t=x(a),t!==null){e.blockedOn=t,Of(e.priority,function(){fh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ic(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=as(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);au=l,a.target.dispatchEvent(l),au=null}else return t=_n(a),t!==null&&sh(t),e.blockedOn=a,!1;t.shift()}return!0}function ph(e,t,a){Ic(e)&&a.delete(t)}function Dg(){ls=!1,Wa!==null&&Ic(Wa)&&(Wa=null),Ia!==null&&Ic(Ia)&&(Ia=null),Pa!==null&&Ic(Pa)&&(Pa=null),gi.forEach(ph),yi.forEach(ph)}function Pc(e,t){e.blockedOn===t&&(e.blockedOn=null,ls||(ls=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Dg)))}var er=null;function gh(e){er!==e&&(er=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){er===e&&(er=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(ns(l||a)===null)continue;break}var c=_n(a);c!==null&&(e.splice(t,3),t-=3,to(c,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function ml(e){function t(v){return Pc(v,e)}Wa!==null&&Pc(Wa,e),Ia!==null&&Pc(Ia,e),Pa!==null&&Pc(Pa,e),gi.forEach(t),yi.forEach(t);for(var a=0;a<en.length;a++){var l=en[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<en.length&&(a=en[0],a.blockedOn===null);)mh(a),a.blockedOn===null&&en.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],c=a[l+1],f=i[ot]||null;if(typeof c=="function")f||gh(a);else if(f){var m=null;if(c&&c.hasAttribute("formAction")){if(i=c,f=c[ot]||null)m=f.formAction;else if(ns(i)!==null)continue}else m=f.action;typeof m=="function"?a[l+1]=m:(a.splice(l,3),l-=3),gh(a)}}}function yh(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(f){return i=f})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function is(e){this._internalRoot=e}tr.prototype.render=is.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=Ot();uh(a,l,e,t,null,null)},tr.prototype.unmount=is.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;uh(e.current,2,null,e,null,null),Uc(),t[Rn]=null}};function tr(e){this._internalRoot=e}tr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Af();e={blockedOn:null,target:e,priority:t};for(var a=0;a<en.length&&t!==0&&t<en[a].priority;a++);en.splice(a,0,e),a===0&&mh(e)}};var vh=r.version;if(vh!=="19.2.4")throw Error(u(527,vh,"19.2.4"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=g(t),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var _g={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ar.isDisabled&&ar.supportsFiber)try{Al=ar.inject(_g),bt=ar}catch{}}return bi.createRoot=function(e,t){if(!d(e))throw Error(u(299));var a=!1,l="",i=C0,c=T0,f=A0;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=ch(e,1,!1,null,null,a,l,null,i,c,f,yh),e[Rn]=t.current,Yo(e),new is(t)},bi.hydrateRoot=function(e,t,a){if(!d(e))throw Error(u(299));var l=!1,i="",c=C0,f=T0,m=A0,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=ch(e,1,!0,t,a??null,l,i,v,c,f,m,yh),t.context=rh(null),a=t.current,l=Ot(),l=Jr(l),i=La(l),i.callback=null,Ya(a,i,l),a=l,t.current.lanes=a,wl(t,a),la(t),e[Rn]=t.current,Yo(e),new tr(t)},bi.version="19.2.4",bi}var Oh;function Xg(){if(Oh)return us.exports;Oh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),us.exports=Vg(),us.exports}var Qg=Xg(),Pe=function(){return Pe=Object.assign||function(r){for(var o,u=1,d=arguments.length;u<d;u++){o=arguments[u];for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(r[h]=o[h])}return r},Pe.apply(this,arguments)};function Mi(n,r,o){if(o||arguments.length===2)for(var u=0,d=r.length,h;u<d;u++)(h||!(u in r))&&(h||(h=Array.prototype.slice.call(r,0,u)),h[u]=r[u]);return n.concat(h||Array.prototype.slice.call(r))}var Ne="-ms-",wi="-moz-",Ee="-webkit-",hm="comm",_r="rule",nf="decl",Zg="@import",kg="@namespace",mm="@keyframes",Jg="@layer",pm=Math.abs,lf=String.fromCharCode,Xs=Object.assign;function Kg(n,r){return Fe(n,0)^45?(((r<<2^Fe(n,0))<<2^Fe(n,1))<<2^Fe(n,2))<<2^Fe(n,3):0}function gm(n){return n.trim()}function Ta(n,r){return(n=r.exec(n))?n[0]:n}function oe(n,r,o){return n.replace(r,o)}function xr(n,r,o){return n.indexOf(r,o)}function Fe(n,r){return n.charCodeAt(r)|0}function Tn(n,r,o){return n.slice(r,o)}function Jt(n){return n.length}function ym(n){return n.length}function Oi(n,r){return r.push(n),n}function Fg(n,r){return n.map(r).join("")}function wh(n,r){return n.filter(function(o){return!Ta(o,r)})}var Nr=1,bl=1,vm=0,Vt=0,Je=0,El="";function Ur(n,r,o,u,d,h,p,x){return{value:n,root:r,parent:o,type:u,props:d,children:h,line:Nr,column:bl,length:p,return:"",siblings:x}}function an(n,r){return Xs(Ur("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},r)}function pl(n){for(;n.root;)n=an(n.root,{children:[n]});Oi(n,n.siblings)}function Wg(){return Je}function Ig(){return Je=Vt>0?Fe(El,--Vt):0,bl--,Je===10&&(bl=1,Nr--),Je}function Kt(){return Je=Vt<vm?Fe(El,Vt++):0,bl++,Je===10&&(bl=1,Nr++),Je}function nn(){return Fe(El,Vt)}function br(){return Vt}function Hr(n,r){return Tn(El,n,r)}function Ri(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pg(n){return Nr=bl=1,vm=Jt(El=n),Vt=0,[]}function ey(n){return El="",n}function ds(n){return gm(Hr(Vt-1,Qs(n===91?n+2:n===40?n+1:n)))}function ty(n){for(;(Je=nn())&&Je<33;)Kt();return Ri(n)>2||Ri(Je)>3?"":" "}function ay(n,r){for(;--r&&Kt()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return Hr(n,br()+(r<6&&nn()==32&&Kt()==32))}function Qs(n){for(;Kt();)switch(Je){case n:return Vt;case 34:case 39:n!==34&&n!==39&&Qs(Je);break;case 40:n===41&&Qs(n);break;case 92:Kt();break}return Vt}function ny(n,r){for(;Kt()&&n+Je!==57;)if(n+Je===84&&nn()===47)break;return"/*"+Hr(r,Vt-1)+"*"+lf(n===47?n:Kt())}function ly(n){for(;!Ri(nn());)Kt();return Hr(n,Vt)}function iy(n){return ey(Sr("",null,null,null,[""],n=Pg(n),0,[0],n))}function Sr(n,r,o,u,d,h,p,x,y){for(var g=0,z=0,E=p,T=0,_=0,G=0,V=1,X=1,Q=1,q=0,L="",W=d,P=h,Y=u,R=L;X;)switch(G=q,q=Kt()){case 40:if(G!=108&&Fe(R,E-1)==58){xr(R+=oe(ds(q),"&","&\f"),"&\f",pm(g?x[g-1]:0))!=-1&&(Q=-1);break}case 34:case 39:case 91:R+=ds(q);break;case 9:case 10:case 13:case 32:R+=ty(G);break;case 92:R+=ay(br()-1,7);continue;case 47:switch(nn()){case 42:case 47:Oi(cy(ny(Kt(),br()),r,o,y),y),(Ri(G||1)==5||Ri(nn()||1)==5)&&Jt(R)&&Tn(R,-1,void 0)!==" "&&(R+=" ");break;default:R+="/"}break;case 123*V:x[g++]=Jt(R)*Q;case 125*V:case 59:case 0:switch(q){case 0:case 125:X=0;case 59+z:Q==-1&&(R=oe(R,/\f/g,"")),_>0&&(Jt(R)-E||V===0&&G===47)&&Oi(_>32?Rh(R+";",u,o,E-1,y):Rh(oe(R," ","")+";",u,o,E-2,y),y);break;case 59:R+=";";default:if(Oi(Y=Mh(R,r,o,g,z,d,x,L,W=[],P=[],E,h),h),q===123)if(z===0)Sr(R,r,Y,Y,W,h,E,x,P);else{switch(T){case 99:if(Fe(R,3)===110)break;case 108:if(Fe(R,2)===97)break;default:z=0;case 100:case 109:case 115:}z?Sr(n,Y,Y,u&&Oi(Mh(n,Y,Y,0,0,d,x,L,d,W=[],E,P),P),d,P,E,x,u?W:P):Sr(R,Y,Y,Y,[""],P,0,x,P)}}g=z=_=0,V=Q=1,L=R="",E=p;break;case 58:E=1+Jt(R),_=G;default:if(V<1){if(q==123)--V;else if(q==125&&V++==0&&Ig()==125)continue}switch(R+=lf(q),q*V){case 38:Q=z>0?1:(R+="\f",-1);break;case 44:x[g++]=(Jt(R)-1)*Q,Q=1;break;case 64:nn()===45&&(R+=ds(Kt())),T=nn(),z=E=Jt(L=R+=ly(br())),q++;break;case 45:G===45&&Jt(R)==2&&(V=0)}}return h}function Mh(n,r,o,u,d,h,p,x,y,g,z,E){for(var T=d-1,_=d===0?h:[""],G=ym(_),V=0,X=0,Q=0;V<u;++V)for(var q=0,L=Tn(n,T+1,T=pm(X=p[V])),W=n;q<G;++q)(W=gm(X>0?_[q]+" "+L:oe(L,/&\f/g,_[q])))&&(y[Q++]=W);return Ur(n,r,o,d===0?_r:x,y,g,z,E)}function cy(n,r,o,u){return Ur(n,r,o,hm,lf(Wg()),Tn(n,2,-2),0,u)}function Rh(n,r,o,u,d){return Ur(n,r,o,nf,Tn(n,0,u),Tn(n,u+1,-1),u,d)}function xm(n,r,o){switch(Kg(n,r)){case 5103:return Ee+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ee+n+n;case 4855:return Ee+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return wi+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+n+wi+n+Ne+n+n;case 5936:switch(Fe(n,r+11)){case 114:return Ee+n+Ne+oe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ee+n+Ne+oe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ee+n+Ne+oe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ee+n+Ne+n+n;case 6165:return Ee+n+Ne+"flex-"+n+n;case 5187:return Ee+n+oe(n,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+Ne+"flex-$1$2")+n;case 5443:return Ee+n+Ne+"flex-item-"+oe(n,/flex-|-self/g,"")+(Ta(n,/flex-|baseline/)?"":Ne+"grid-row-"+oe(n,/flex-|-self/g,""))+n;case 4675:return Ee+n+Ne+"flex-line-pack"+oe(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ee+n+Ne+oe(n,"shrink","negative")+n;case 5292:return Ee+n+Ne+oe(n,"basis","preferred-size")+n;case 6060:return Ee+"box-"+oe(n,"-grow","")+Ee+n+Ne+oe(n,"grow","positive")+n;case 4554:return Ee+oe(n,/([^-])(transform)/g,"$1"+Ee+"$2")+n;case 6187:return oe(oe(oe(n,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),n,"")+n;case 5495:case 3959:return oe(n,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return oe(oe(n,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+Ne+"flex-pack:$3"),/space-between/,"justify")+Ee+n+n;case 4200:if(!Ta(n,/flex-|baseline/))return Ne+"grid-column-align"+Tn(n,r)+n;break;case 2592:case 3360:return Ne+oe(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(u,d){return r=d,Ta(u.props,/grid-\w+-end/)})?~xr(n+(o=o[r].value),"span",0)?n:Ne+oe(n,"-start","")+n+Ne+"grid-row-span:"+(~xr(o,"span",0)?Ta(o,/\d+/):+Ta(o,/\d+/)-+Ta(n,/\d+/))+";":Ne+oe(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(u){return Ta(u.props,/grid-\w+-start/)})?n:Ne+oe(oe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return oe(n,/(.+)-inline(.+)/,Ee+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(n)-1-r>6)switch(Fe(n,r+1)){case 109:if(Fe(n,r+4)!==45)break;case 102:return oe(n,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+wi+(Fe(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~xr(n,"stretch",0)?xm(oe(n,"stretch","fill-available"),r,o)+n:n}break;case 5152:case 5920:return oe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,h,p,x,y,g){return Ne+d+":"+h+g+(p?Ne+d+"-span:"+(x?y:+y-+h)+g:"")+n});case 4949:if(Fe(n,r+6)===121)return oe(n,":",":"+Ee)+n;break;case 6444:switch(Fe(n,Fe(n,14)===45?18:11)){case 120:return oe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ee+(Fe(n,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+Ne+"$2box$3")+n;case 100:return oe(n,":",":"+Ne)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(n,"scroll-","scroll-snap-")+n}return n}function Tr(n,r){for(var o="",u=0;u<n.length;u++)o+=r(n[u],u,n,r)||"";return o}function ry(n,r,o,u){switch(n.type){case Jg:if(n.children.length)break;case Zg:case kg:case nf:return n.return=n.return||n.value;case hm:return"";case mm:return n.return=n.value+"{"+Tr(n.children,u)+"}";case _r:if(!Jt(n.value=n.props.join(",")))return""}return Jt(o=Tr(n.children,u))?n.return=n.value+"{"+o+"}":""}function uy(n){var r=ym(n);return function(o,u,d,h){for(var p="",x=0;x<r;x++)p+=n[x](o,u,d,h)||"";return p}}function oy(n){return function(r){r.root||(r=r.return)&&n(r)}}function sy(n,r,o,u){if(n.length>-1&&!n.return)switch(n.type){case nf:n.return=xm(n.value,n.length,o);return;case mm:return Tr([an(n,{value:oe(n.value,"@","@"+Ee)})],u);case _r:if(n.length)return Fg(o=n.props,function(d){switch(Ta(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pl(an(n,{props:[oe(d,/:(read-\w+)/,":"+wi+"$1")]})),pl(an(n,{props:[d]})),Xs(n,{props:wh(o,u)});break;case"::placeholder":pl(an(n,{props:[oe(d,/:(plac\w+)/,":"+Ee+"input-$1")]})),pl(an(n,{props:[oe(d,/:(plac\w+)/,":"+wi+"$1")]})),pl(an(n,{props:[oe(d,/:(plac\w+)/,Ne+"input-$1")]})),pl(an(n,{props:[d]})),Xs(n,{props:wh(o,u)});break}return""})}}var fy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wt={},Sl=typeof process<"u"&&wt!==void 0&&(wt.REACT_APP_SC_ATTR||wt.SC_ATTR)||"data-styled",bm="active",Sm="data-styled-version",$r="6.3.8",cf=`/*!sc*/
`,Ar=typeof window<"u"&&typeof document<"u",ia=Ue.createContext===void 0,dy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&wt.REACT_APP_SC_DISABLE_SPEEDY!==""?wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&wt!==void 0&&wt.SC_DISABLE_SPEEDY!==void 0&&wt.SC_DISABLE_SPEEDY!==""&&wt.SC_DISABLE_SPEEDY!=="false"&&wt.SC_DISABLE_SPEEDY),hy={},Br=Object.freeze([]),jl=Object.freeze({});function jm(n,r,o){return o===void 0&&(o=jl),n.theme!==o.theme&&n.theme||r||o.theme}var Em=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),my=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,py=/(^-|-$)/g;function Dh(n){return n.replace(my,"-").replace(py,"")}var gy=/(a)(d)/gi,_h=function(n){return String.fromCharCode(n+(n>25?39:97))};function Zs(n){var r,o="";for(r=Math.abs(n);r>52;r=r/52|0)o=_h(r%52)+o;return(_h(r%52)+o).replace(gy,"$1-$2")}var hs,yl=function(n,r){for(var o=r.length;o;)n=33*n^r.charCodeAt(--o);return n},zm=function(n){return yl(5381,n)};function Cm(n){return Zs(zm(n)>>>0)}function yy(n){return n.displayName||n.name||"Component"}function ms(n){return typeof n=="string"&&!0}var Tm=typeof Symbol=="function"&&Symbol.for,Am=Tm?Symbol.for("react.memo"):60115,vy=Tm?Symbol.for("react.forward_ref"):60112,xy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},by={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Om={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sy=((hs={})[vy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hs[Am]=Om,hs);function Nh(n){return("type"in(r=n)&&r.type.$$typeof)===Am?Om:"$$typeof"in n?Sy[n.$$typeof]:xy;var r}var jy=Object.defineProperty,Ey=Object.getOwnPropertyNames,Uh=Object.getOwnPropertySymbols,zy=Object.getOwnPropertyDescriptor,Cy=Object.getPrototypeOf,Hh=Object.prototype;function wm(n,r,o){if(typeof r!="string"){if(Hh){var u=Cy(r);u&&u!==Hh&&wm(n,u,o)}var d=Ey(r);Uh&&(d=d.concat(Uh(r)));for(var h=Nh(n),p=Nh(r),x=0;x<d.length;++x){var y=d[x];if(!(y in by||o&&o[y]||p&&y in p||h&&y in h)){var g=zy(r,y);try{jy(n,y,g)}catch{}}}}return n}function An(n){return typeof n=="function"}function rf(n){return typeof n=="object"&&"styledComponentId"in n}function Cn(n,r){return n&&r?"".concat(n," ").concat(r):n||r||""}function ks(n,r){if(n.length===0)return"";for(var o=n[0],u=1;u<n.length;u++)o+=n[u];return o}function Di(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Js(n,r,o){if(o===void 0&&(o=!1),!o&&!Di(n)&&!Array.isArray(n))return r;if(Array.isArray(r))for(var u=0;u<r.length;u++)n[u]=Js(n[u],r[u]);else if(Di(r))for(var u in r)n[u]=Js(n[u],r[u]);return n}function uf(n,r){Object.defineProperty(n,"toString",{value:r})}function On(n){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Ty=(function(){function n(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return n.prototype.indexOfGroup=function(r){for(var o=0,u=0;u<r;u++)o+=this.groupSizes[u];return o},n.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,h=d;r>=h;)if((h<<=1)<0)throw On(16,"".concat(r));this.groupSizes=new Uint32Array(h),this.groupSizes.set(u),this.length=h;for(var p=d;p<h;p++)this.groupSizes[p]=0}for(var x=this.indexOfGroup(r+1),y=(p=0,o.length);p<y;p++)this.tag.insertRule(x,o[p])&&(this.groupSizes[r]++,x++)},n.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],u=this.indexOfGroup(r),d=u+o;this.groupSizes[r]=0;for(var h=u;h<d;h++)this.tag.deleteRule(u)}},n.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var u=this.groupSizes[r],d=this.indexOfGroup(r),h=d+u,p=d;p<h;p++)o+="".concat(this.tag.getRule(p)).concat(cf);return o},n})(),jr=new Map,Or=new Map,Er=1,vl=function(n){if(jr.has(n))return jr.get(n);for(;Or.has(Er);)Er++;var r=Er++;return jr.set(n,r),Or.set(r,n),r},Ay=function(n,r){Er=r+1,jr.set(n,r),Or.set(r,n)},Oy="style[".concat(Sl,"][").concat(Sm,'="').concat($r,'"]'),wy=new RegExp("^".concat(Sl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),My=function(n,r,o){for(var u,d=o.split(","),h=0,p=d.length;h<p;h++)(u=d[h])&&n.registerName(r,u)},Ry=function(n,r){for(var o,u=((o=r.textContent)!==null&&o!==void 0?o:"").split(cf),d=[],h=0,p=u.length;h<p;h++){var x=u[h].trim();if(x){var y=x.match(wy);if(y){var g=0|parseInt(y[1],10),z=y[2];g!==0&&(Ay(z,g),My(n,z,y[3]),n.getTag().insertRules(g,d)),d.length=0}else d.push(x)}}},$h=function(n){for(var r=document.querySelectorAll(Oy),o=0,u=r.length;o<u;o++){var d=r[o];d&&d.getAttribute(Sl)!==bm&&(Ry(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Dy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Mm=function(n){var r=document.head,o=n||r,u=document.createElement("style"),d=(function(x){var y=Array.from(x.querySelectorAll("style[".concat(Sl,"]")));return y[y.length-1]})(o),h=d!==void 0?d.nextSibling:null;u.setAttribute(Sl,bm),u.setAttribute(Sm,$r);var p=Dy();return p&&u.setAttribute("nonce",p),o.insertBefore(u,h),u},_y=(function(){function n(r){this.element=Mm(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var u=document.styleSheets,d=0,h=u.length;d<h;d++){var p=u[d];if(p.ownerNode===o)return p}throw On(17)})(this.element),this.length=0}return n.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},n.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},n})(),Ny=(function(){function n(r){this.element=Mm(r),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var u=document.createTextNode(o);return this.element.insertBefore(u,this.nodes[r]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},n.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},n})(),Uy=(function(){function n(r){this.rules=[],this.length=0}return n.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},n.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},n.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},n})(),Bh=Ar,Hy={isServer:!Ar,useCSSOMInjection:!dy},wr=(function(){function n(r,o,u){r===void 0&&(r=jl),o===void 0&&(o={});var d=this;this.options=Pe(Pe({},Hy),r),this.gs=o,this.names=new Map(u),this.server=!!r.isServer,!this.server&&Ar&&Bh&&(Bh=!1,$h(this)),uf(this,function(){return(function(h){for(var p=h.getTag(),x=p.length,y="",g=function(E){var T=(function(Q){return Or.get(Q)})(E);if(T===void 0)return"continue";var _=h.names.get(T),G=p.getGroup(E);if(_===void 0||!_.size||G.length===0)return"continue";var V="".concat(Sl,".g").concat(E,'[id="').concat(T,'"]'),X="";_!==void 0&&_.forEach(function(Q){Q.length>0&&(X+="".concat(Q,","))}),y+="".concat(G).concat(V,'{content:"').concat(X,'"}').concat(cf)},z=0;z<x;z++)g(z);return y})(d)})}return n.registerId=function(r){return vl(r)},n.prototype.rehydrate=function(){!this.server&&Ar&&$h(this)},n.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new n(Pe(Pe({},this.options),r),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(o){var u=o.useCSSOMInjection,d=o.target;return o.isServer?new Uy(d):u?new _y(d):new Ny(d)})(this.options),new Ty(r)));var r},n.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},n.prototype.registerName=function(r,o){if(vl(r),this.names.has(r))this.names.get(r).add(o);else{var u=new Set;u.add(o),this.names.set(r,u)}},n.prototype.insertRules=function(r,o,u){this.registerName(r,o),this.getTag().insertRules(vl(r),u)},n.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},n.prototype.clearRules=function(r){this.getTag().clearGroup(vl(r)),this.clearNames(r)},n.prototype.clearTag=function(){this.tag=void 0},n})(),$y=/&/g,xl=47;function Lh(n){if(n.indexOf("}")===-1)return!1;for(var r=n.length,o=0,u=0,d=!1,h=0;h<r;h++){var p=n.charCodeAt(h);if(u!==0||d||p!==xl||n.charCodeAt(h+1)!==42)if(d)p===42&&n.charCodeAt(h+1)===xl&&(d=!1,h++);else if(p!==34&&p!==39||h!==0&&n.charCodeAt(h-1)===92){if(u===0){if(p===123)o++;else if(p===125&&--o<0)return!0}}else u===0?u=p:u===p&&(u=0);else d=!0,h++}return o!==0||u!==0}function Rm(n,r){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(u){return"".concat(r," ").concat(u)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Rm(o.children,r)),o})}function By(n){var r,o,u,d=jl,h=d.options,p=h===void 0?jl:h,x=d.plugins,y=x===void 0?Br:x,g=function(T,_,G){return G.startsWith(o)&&G.endsWith(o)&&G.replaceAll(o,"").length>0?".".concat(r):T},z=y.slice();z.push(function(T){T.type===_r&&T.value.includes("&")&&(T.props[0]=T.props[0].replace($y,o).replace(u,g))}),p.prefix&&z.push(sy),z.push(ry);var E=function(T,_,G,V){_===void 0&&(_=""),G===void 0&&(G=""),V===void 0&&(V="&"),r=V,o=_,u=new RegExp("\\".concat(o,"\\b"),"g");var X=(function(L){if(!Lh(L))return L;for(var W=L.length,P="",Y=0,R=0,F=0,ce=!1,se=0;se<W;se++){var Be=L.charCodeAt(se);if(F!==0||ce||Be!==xl||L.charCodeAt(se+1)!==42)if(ce)Be===42&&L.charCodeAt(se+1)===xl&&(ce=!1,se++);else if(Be!==34&&Be!==39||se!==0&&L.charCodeAt(se-1)===92){if(F===0)if(Be===123)R++;else if(Be===125){if(--R<0){for(var Re=se+1;Re<W;){var gt=L.charCodeAt(Re);if(gt===59||gt===10)break;Re++}Re<W&&L.charCodeAt(Re)===59&&Re++,R=0,se=Re-1,Y=Re;continue}R===0&&(P+=L.substring(Y,se+1),Y=se+1)}else Be===59&&R===0&&(P+=L.substring(Y,se+1),Y=se+1)}else F===0?F=Be:F===Be&&(F=0);else ce=!0,se++}if(Y<W){var ut=L.substring(Y);Lh(ut)||(P+=ut)}return P})((function(L){if(L.indexOf("//")===-1)return L;for(var W=L.length,P=[],Y=0,R=0,F=0,ce=0;R<W;){var se=L.charCodeAt(R);if(se!==34&&se!==39||R!==0&&L.charCodeAt(R-1)===92)if(F===0)if(se===40&&R>=3&&(32|L.charCodeAt(R-1))==108&&(32|L.charCodeAt(R-2))==114&&(32|L.charCodeAt(R-3))==117)ce=1,R++;else if(ce>0)se===41?ce--:se===40&&ce++,R++;else if(se===xl&&R+1<W&&L.charCodeAt(R+1)===xl){for(R>Y&&P.push(L.substring(Y,R));R<W&&L.charCodeAt(R)!==10;)R++;Y=R}else R++;else R++;else F===0?F=se:F===se&&(F=0),R++}return Y===0?L:(Y<W&&P.push(L.substring(Y)),P.join(""))})(T)),Q=iy(G||_?"".concat(G," ").concat(_," { ").concat(X," }"):X);p.namespace&&(Q=Rm(Q,p.namespace));var q=[];return Tr(Q,uy(z.concat(oy(function(L){return q.push(L)})))),q};return E.hash=y.length?y.reduce(function(T,_){return _.name||On(15),yl(T,_.name)},5381).toString():"",E}var Ly=new wr,Ks=By(),Fs={shouldForwardProp:void 0,styleSheet:Ly,stylis:Ks},Dm=ia?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(Fs)}}:Ue.createContext(Fs);Dm.Consumer;ia||Ue.createContext(void 0);function Ws(){return ia?Fs:Ue.useContext(Dm)}var Yy=(function(){function n(r,o){var u=this;this.inject=function(d,h){h===void 0&&(h=Ks);var p=u.name+h.hash;d.hasNameForId(u.id,p)||d.insertRules(u.id,p,h(u.rules,p,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,uf(this,function(){throw On(12,String(u.name))})}return n.prototype.getName=function(r){return r===void 0&&(r=Ks),this.name+r.hash},n})();function qy(n,r){return r==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||n in fy||n.startsWith("--")?String(r).trim():"".concat(r,"px")}var Gy=function(n){return n>="A"&&n<="Z"};function Yh(n){for(var r="",o=0;o<n.length;o++){var u=n[o];if(o===1&&u==="-"&&n[0]==="-")return n;Gy(u)?r+="-"+u.toLowerCase():r+=u}return r.startsWith("ms-")?"-"+r:r}var _m=function(n){return n==null||n===!1||n===""},Nm=function(n){var r=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!_m(u)&&(Array.isArray(u)&&u.isCss||An(u)?r.push("".concat(Yh(o),":"),u,";"):Di(u)?r.push.apply(r,Mi(Mi(["".concat(o," {")],Nm(u),!1),["}"],!1)):r.push("".concat(Yh(o),": ").concat(qy(o,u),";")))}return r};function ln(n,r,o,u){if(_m(n))return[];if(rf(n))return[".".concat(n.styledComponentId)];if(An(n)){if(!An(h=n)||h.prototype&&h.prototype.isReactComponent||!r)return[n];var d=n(r);return ln(d,r,o,u)}var h;return n instanceof Yy?o?(n.inject(o,u),[n.getName(u)]):[n]:Di(n)?Nm(n):Array.isArray(n)?Array.prototype.concat.apply(Br,n.map(function(p){return ln(p,r,o,u)})):[n.toString()]}function Um(n){for(var r=0;r<n.length;r+=1){var o=n[r];if(An(o)&&!rf(o))return!1}return!0}var Vy=zm($r),Xy=(function(){function n(r,o,u){this.rules=r,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Um(r),this.componentId=o,this.baseHash=yl(Vy,o),this.baseStyle=u,wr.registerId(o)}return n.prototype.generateAndInjectStyles=function(r,o,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))d=Cn(d,this.staticRulesId);else{var h=ks(ln(this.rules,r,o,u)),p=Zs(yl(this.baseHash,h)>>>0);if(!o.hasNameForId(this.componentId,p)){var x=u(h,".".concat(p),void 0,this.componentId);o.insertRules(this.componentId,p,x)}d=Cn(d,p),this.staticRulesId=p}else{for(var y=yl(this.baseHash,u.hash),g="",z=0;z<this.rules.length;z++){var E=this.rules[z];if(typeof E=="string")g+=E;else if(E){var T=ks(ln(E,r,o,u));y=yl(y,T+z),g+=T}}if(g){var _=Zs(y>>>0);if(!o.hasNameForId(this.componentId,_)){var G=u(g,".".concat(_),void 0,this.componentId);o.insertRules(this.componentId,_,G)}d=Cn(d,_)}}return{className:d,css:typeof window>"u"?o.getTag().getGroup(vl(this.componentId)):""}},n})(),_i=ia?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:Ue.createContext(void 0);_i.Consumer;function Qy(n){if(ia)return n.children;var r=Ue.useContext(_i),o=Ue.useMemo(function(){return(function(u,d){if(!u)throw On(14);if(An(u)){var h=u(d);return h}if(Array.isArray(u)||typeof u!="object")throw On(8);return d?Pe(Pe({},d),u):u})(n.theme,r)},[n.theme,r]);return n.children?Ue.createElement(_i.Provider,{value:o},n.children):null}var ps={};function Zy(n,r,o){var u=rf(n),d=n,h=!ms(n),p=r.attrs,x=p===void 0?Br:p,y=r.componentId,g=y===void 0?(function(W,P){var Y=typeof W!="string"?"sc":Dh(W);ps[Y]=(ps[Y]||0)+1;var R="".concat(Y,"-").concat(Cm($r+Y+ps[Y]));return P?"".concat(P,"-").concat(R):R})(r.displayName,r.parentComponentId):y,z=r.displayName,E=z===void 0?(function(W){return ms(W)?"styled.".concat(W):"Styled(".concat(yy(W),")")})(n):z,T=r.displayName&&r.componentId?"".concat(Dh(r.displayName),"-").concat(r.componentId):r.componentId||g,_=u&&d.attrs?d.attrs.concat(x).filter(Boolean):x,G=r.shouldForwardProp;if(u&&d.shouldForwardProp){var V=d.shouldForwardProp;if(r.shouldForwardProp){var X=r.shouldForwardProp;G=function(W,P){return V(W,P)&&X(W,P)}}else G=V}var Q=new Xy(o,T,u?d.componentStyle:void 0);function q(W,P){return(function(Y,R,F){var ce=Y.attrs,se=Y.componentStyle,Be=Y.defaultProps,Re=Y.foldedComponentIds,gt=Y.styledComponentId,ut=Y.target,yt=ia?void 0:Ue.useContext(_i),U=Ws(),Z=Y.shouldForwardProp||U.shouldForwardProp,te=jm(R,yt,Be)||jl,fe=(function(Ve,Te,It){for(var Pt,vt=Pe(Pe({},Te),{className:void 0,theme:It}),Mn=0;Mn<Ve.length;Mn+=1){var Dt=An(Pt=Ve[Mn])?Pt(vt):Pt;for(var ea in Dt)ea==="className"?vt.className=Cn(vt.className,Dt[ea]):ea==="style"?vt.style=Pe(Pe({},vt.style),Dt[ea]):vt[ea]=Dt[ea]}return"className"in Te&&typeof Te.className=="string"&&(vt.className=Cn(vt.className,Te.className)),vt})(ce,R,te),ve=fe.as||ut,j={};for(var H in fe)fe[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&fe.theme===te||(H==="forwardedAs"?j.as=fe.forwardedAs:Z&&!Z(H,ve)||(j[H]=fe[H]));var k=(function(Ve,Te){var It=Ws(),Pt=Ve.generateAndInjectStyles(Te,It.styleSheet,It.stylis);return Pt})(se,fe),J=k.className,ne=k.css,re=Cn(Re,gt);J&&(re+=" "+J),fe.className&&(re+=" "+fe.className),j[ms(ve)&&!Em.has(ve)?"class":"className"]=re,F&&(j.ref=F);var ye=O.createElement(ve,j);return ia&&ne?Ue.createElement(Ue.Fragment,null,Ue.createElement("style",{precedence:"styled-components",href:"sc-".concat(gt,"-").concat(J),children:ne}),ye):ye})(L,W,P)}q.displayName=E;var L=Ue.forwardRef(q);return L.attrs=_,L.componentStyle=Q,L.displayName=E,L.shouldForwardProp=G,L.foldedComponentIds=u?Cn(d.foldedComponentIds,d.styledComponentId):"",L.styledComponentId=T,L.target=u?d.target:n,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=u?(function(P){for(var Y=[],R=1;R<arguments.length;R++)Y[R-1]=arguments[R];for(var F=0,ce=Y;F<ce.length;F++)Js(P,ce[F],!0);return P})({},d.defaultProps,W):W}}),uf(L,function(){return".".concat(L.styledComponentId)}),h&&wm(L,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function qh(n,r){for(var o=[n[0]],u=0,d=r.length;u<d;u+=1)o.push(r[u],n[u+1]);return o}var Gh=function(n){return Object.assign(n,{isCss:!0})};function Hm(n){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(An(n)||Di(n))return Gh(ln(qh(Br,Mi([n],r,!0))));var u=n;return r.length===0&&u.length===1&&typeof u[0]=="string"?ln(u):Gh(ln(qh(u,r)))}function Is(n,r,o){if(o===void 0&&(o=jl),!r)throw On(1,r);var u=function(d){for(var h=[],p=1;p<arguments.length;p++)h[p-1]=arguments[p];return n(r,o,Hm.apply(void 0,Mi([d],h,!1)))};return u.attrs=function(d){return Is(n,r,Pe(Pe({},o),{attrs:Array.prototype.concat(o.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return Is(n,r,Pe(Pe({},o),d))},u}var $m=function(n){return Is(Zy,n)},b=$m;Em.forEach(function(n){b[n]=$m(n)});var ky=(function(){function n(r,o){this.rules=r,this.componentId=o,this.isStatic=Um(r),wr.registerId(this.componentId+1)}return n.prototype.createStyles=function(r,o,u,d){var h=d(ks(ln(this.rules,o,u,d)),""),p=this.componentId+r;u.insertRules(p,p,h)},n.prototype.removeStyles=function(r,o){o.clearRules(this.componentId+r)},n.prototype.renderStyles=function(r,o,u,d){r>2&&wr.registerId(this.componentId+r);var h=this.componentId+r;this.isStatic?u.hasNameForId(h,h)||this.createStyles(r,o,u,d):(this.removeStyles(r,u),this.createStyles(r,o,u,d))},n})();function Jy(n){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];var u=Hm.apply(void 0,Mi([n],r,!1)),d="sc-global-".concat(Cm(JSON.stringify(u))),h=new ky(u,d),p=new WeakMap,x=function(y){var g=Ws(),z=ia?void 0:Ue.useContext(_i),E=p.get(g.styleSheet);if(E===void 0&&(E=g.styleSheet.allocateGSInstance(d),p.set(g.styleSheet,E)),(typeof window>"u"||!g.styleSheet.server)&&(function(X,Q,q,L,W){if(h.isStatic)h.renderStyles(X,hy,q,W);else{var P=Pe(Pe({},Q),{theme:jm(Q,L,x.defaultProps)});h.renderStyles(X,P,q,W)}})(E,y,g.styleSheet,z,g.stylis),!ia){var T=Ue.useRef(!0);Ue.useLayoutEffect(function(){return T.current=!1,function(){T.current=!0,queueMicrotask(function(){T.current&&(h.removeStyles(E,g.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(d,'"]')).forEach(function(X){return X.remove()}))})}},[E,g.styleSheet])}if(ia){var _=d+E,G=typeof window>"u"?g.styleSheet.getTag().getGroup(vl(_)):"";if(G){var V="".concat(d,"-").concat(E);return Ue.createElement("style",{key:V,"data-styled-global":d,precedence:"styled-components",href:V,children:G})}}return null};return Ue.memo(x)}var Vh="popstate";function Ky(n={}){function r(u,d){let{pathname:h,search:p,hash:x}=u.location;return Ps("",{pathname:h,search:p,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(u,d){return typeof d=="string"?d:Ni(d)}return Wy(r,o,null,n)}function $e(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function Xt(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Fy(){return Math.random().toString(36).substring(2,10)}function Xh(n,r){return{usr:n.state,key:n.key,idx:r}}function Ps(n,r,o=null,u){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof r=="string"?zl(r):r,state:o,key:r&&r.key||u||Fy()}}function Ni({pathname:n="/",search:r="",hash:o=""}){return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function zl(n){let r={};if(n){let o=n.indexOf("#");o>=0&&(r.hash=n.substring(o),n=n.substring(0,o));let u=n.indexOf("?");u>=0&&(r.search=n.substring(u),n=n.substring(0,u)),n&&(r.pathname=n)}return r}function Wy(n,r,o,u={}){let{window:d=document.defaultView,v5Compat:h=!1}=u,p=d.history,x="POP",y=null,g=z();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function z(){return(p.state||{idx:null}).idx}function E(){x="POP";let X=z(),Q=X==null?null:X-g;g=X,y&&y({action:x,location:V.location,delta:Q})}function T(X,Q){x="PUSH";let q=Ps(V.location,X,Q);g=z()+1;let L=Xh(q,g),W=V.createHref(q);try{p.pushState(L,"",W)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;d.location.assign(W)}h&&y&&y({action:x,location:V.location,delta:1})}function _(X,Q){x="REPLACE";let q=Ps(V.location,X,Q);g=z();let L=Xh(q,g),W=V.createHref(q);p.replaceState(L,"",W),h&&y&&y({action:x,location:V.location,delta:0})}function G(X){return Iy(X)}let V={get action(){return x},get location(){return n(d,p)},listen(X){if(y)throw new Error("A history only accepts one active listener");return d.addEventListener(Vh,E),y=X,()=>{d.removeEventListener(Vh,E),y=null}},createHref(X){return r(d,X)},createURL:G,encodeLocation(X){let Q=G(X);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:T,replace:_,go(X){return p.go(X)}};return V}function Iy(n,r=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),$e(o,"No window.location.(origin|href) available to create URL");let u=typeof n=="string"?n:Ni(n);return u=u.replace(/ $/,"%20"),!r&&u.startsWith("//")&&(u=o+u),new URL(u,o)}function Bm(n,r,o="/"){return Py(n,r,o,!1)}function Py(n,r,o,u){let d=typeof r=="string"?zl(r):r,h=Oa(d.pathname||"/",o);if(h==null)return null;let p=Lm(n);e4(p);let x=null;for(let y=0;x==null&&y<p.length;++y){let g=f4(h);x=o4(p[y],g,u)}return x}function Lm(n,r=[],o=[],u="",d=!1){let h=(p,x,y=d,g)=>{let z={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:x,route:p};if(z.relativePath.startsWith("/")){if(!z.relativePath.startsWith(u)&&y)return;$e(z.relativePath.startsWith(u),`Absolute route path "${z.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),z.relativePath=z.relativePath.slice(u.length)}let E=Aa([u,z.relativePath]),T=o.concat(z);p.children&&p.children.length>0&&($e(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Lm(p.children,r,T,E,y)),!(p.path==null&&!p.index)&&r.push({path:E,score:r4(E,p.index),routesMeta:T})};return n.forEach((p,x)=>{if(p.path===""||!p.path?.includes("?"))h(p,x);else for(let y of Ym(p.path))h(p,x,!0,y)}),r}function Ym(n){let r=n.split("/");if(r.length===0)return[];let[o,...u]=r,d=o.endsWith("?"),h=o.replace(/\?$/,"");if(u.length===0)return d?[h,""]:[h];let p=Ym(u.join("/")),x=[];return x.push(...p.map(y=>y===""?h:[h,y].join("/"))),d&&x.push(...p),x.map(y=>n.startsWith("/")&&y===""?"/":y)}function e4(n){n.sort((r,o)=>r.score!==o.score?o.score-r.score:u4(r.routesMeta.map(u=>u.childrenIndex),o.routesMeta.map(u=>u.childrenIndex)))}var t4=/^:[\w-]+$/,a4=3,n4=2,l4=1,i4=10,c4=-2,Qh=n=>n==="*";function r4(n,r){let o=n.split("/"),u=o.length;return o.some(Qh)&&(u+=c4),r&&(u+=n4),o.filter(d=>!Qh(d)).reduce((d,h)=>d+(t4.test(h)?a4:h===""?l4:i4),u)}function u4(n,r){return n.length===r.length&&n.slice(0,-1).every((u,d)=>u===r[d])?n[n.length-1]-r[r.length-1]:0}function o4(n,r,o=!1){let{routesMeta:u}=n,d={},h="/",p=[];for(let x=0;x<u.length;++x){let y=u[x],g=x===u.length-1,z=h==="/"?r:r.slice(h.length)||"/",E=Mr({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},z),T=y.route;if(!E&&g&&o&&!u[u.length-1].route.index&&(E=Mr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},z)),!E)return null;Object.assign(d,E.params),p.push({params:d,pathname:Aa([h,E.pathname]),pathnameBase:p4(Aa([h,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(h=Aa([h,E.pathnameBase]))}return p}function Mr(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,u]=s4(n.path,n.caseSensitive,n.end),d=r.match(o);if(!d)return null;let h=d[0],p=h.replace(/(.)\/+$/,"$1"),x=d.slice(1);return{params:u.reduce((g,{paramName:z,isOptional:E},T)=>{if(z==="*"){let G=x[T]||"";p=h.slice(0,h.length-G.length).replace(/(.)\/+$/,"$1")}const _=x[T];return E&&!_?g[z]=void 0:g[z]=(_||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:p,pattern:n}}function s4(n,r=!1,o=!0){Xt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let u=[],d="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,x,y)=>(u.push({paramName:x,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(u.push({paramName:"*"}),d+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?d+="\\/*$":n!==""&&n!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,r?void 0:"i"),u]}function f4(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Xt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),n}}function Oa(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,u=n.charAt(o);return u&&u!=="/"?null:n.slice(o)||"/"}var d4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function h4(n,r="/"){let{pathname:o,search:u="",hash:d=""}=typeof n=="string"?zl(n):n,h;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?h=Zh(o.substring(1),"/"):h=Zh(o,r)):h=r,{pathname:h,search:g4(u),hash:y4(d)}}function Zh(n,r){let o=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(d=>{d===".."?o.length>1&&o.pop():d!=="."&&o.push(d)}),o.length>1?o.join("/"):"/"}function gs(n,r,o,u){return`Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function m4(n){return n.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function of(n){let r=m4(n);return r.map((o,u)=>u===r.length-1?o.pathname:o.pathnameBase)}function sf(n,r,o,u=!1){let d;typeof n=="string"?d=zl(n):(d={...n},$e(!d.pathname||!d.pathname.includes("?"),gs("?","pathname","search",d)),$e(!d.pathname||!d.pathname.includes("#"),gs("#","pathname","hash",d)),$e(!d.search||!d.search.includes("#"),gs("#","search","hash",d)));let h=n===""||d.pathname==="",p=h?"/":d.pathname,x;if(p==null)x=o;else{let E=r.length-1;if(!u&&p.startsWith("..")){let T=p.split("/");for(;T[0]==="..";)T.shift(),E-=1;d.pathname=T.join("/")}x=E>=0?r[E]:"/"}let y=h4(d,x),g=p&&p!=="/"&&p.endsWith("/"),z=(h||p===".")&&o.endsWith("/");return!y.pathname.endsWith("/")&&(g||z)&&(y.pathname+="/"),y}var Aa=n=>n.join("/").replace(/\/\/+/g,"/"),p4=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),g4=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,y4=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,v4=class{constructor(n,r,o,u=!1){this.status=n,this.statusText=r||"",this.internal=u,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function x4(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function b4(n){return n.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var qm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Gm(n,r){let o=n;if(typeof o!="string"||!d4.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let u=o,d=!1;if(qm)try{let h=new URL(window.location.href),p=o.startsWith("//")?new URL(h.protocol+o):new URL(o),x=Oa(p.pathname,r);p.origin===h.origin&&x!=null?o=x+p.search+p.hash:d=!0}catch{Xt(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:d,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Vm=["POST","PUT","PATCH","DELETE"];new Set(Vm);var S4=["GET",...Vm];new Set(S4);var Cl=O.createContext(null);Cl.displayName="DataRouter";var Lr=O.createContext(null);Lr.displayName="DataRouterState";var j4=O.createContext(!1),Xm=O.createContext({isTransitioning:!1});Xm.displayName="ViewTransition";var E4=O.createContext(new Map);E4.displayName="Fetchers";var z4=O.createContext(null);z4.displayName="Await";var Mt=O.createContext(null);Mt.displayName="Navigation";var Hi=O.createContext(null);Hi.displayName="Location";var Ft=O.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var ff=O.createContext(null);ff.displayName="RouteError";var Qm="REACT_ROUTER_ERROR",C4="REDIRECT",T4="ROUTE_ERROR_RESPONSE";function A4(n){if(n.startsWith(`${Qm}:${C4}:{`))try{let r=JSON.parse(n.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function O4(n){if(n.startsWith(`${Qm}:${T4}:{`))try{let r=JSON.parse(n.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new v4(r.status,r.statusText,r.data)}catch{}}function w4(n,{relative:r}={}){$e(Tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:u}=O.useContext(Mt),{hash:d,pathname:h,search:p}=$i(n,{relative:r}),x=h;return o!=="/"&&(x=h==="/"?o:Aa([o,h])),u.createHref({pathname:x,search:p,hash:d})}function Tl(){return O.useContext(Hi)!=null}function wa(){return $e(Tl(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Hi).location}var Zm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function km(n){O.useContext(Mt).static||O.useLayoutEffect(n)}function Rt(){let{isDataRoute:n}=O.useContext(Ft);return n?V4():M4()}function M4(){$e(Tl(),"useNavigate() may be used only in the context of a <Router> component.");let n=O.useContext(Cl),{basename:r,navigator:o}=O.useContext(Mt),{matches:u}=O.useContext(Ft),{pathname:d}=wa(),h=JSON.stringify(of(u)),p=O.useRef(!1);return km(()=>{p.current=!0}),O.useCallback((y,g={})=>{if(Xt(p.current,Zm),!p.current)return;if(typeof y=="number"){o.go(y);return}let z=sf(y,JSON.parse(h),d,g.relative==="path");n==null&&r!=="/"&&(z.pathname=z.pathname==="/"?r:Aa([r,z.pathname])),(g.replace?o.replace:o.push)(z,g.state,g)},[r,o,h,d,n])}O.createContext(null);function R4(){let{matches:n}=O.useContext(Ft),r=n[n.length-1];return r?r.params:{}}function $i(n,{relative:r}={}){let{matches:o}=O.useContext(Ft),{pathname:u}=wa(),d=JSON.stringify(of(o));return O.useMemo(()=>sf(n,JSON.parse(d),u,r==="path"),[n,d,u,r])}function D4(n,r){return Jm(n,r)}function Jm(n,r,o,u,d){$e(Tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=O.useContext(Mt),{matches:p}=O.useContext(Ft),x=p[p.length-1],y=x?x.params:{},g=x?x.pathname:"/",z=x?x.pathnameBase:"/",E=x&&x.route;{let q=E&&E.path||"";Fm(g,!E||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let T=wa(),_;if(r){let q=typeof r=="string"?zl(r):r;$e(z==="/"||q.pathname?.startsWith(z),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${z}" but pathname "${q.pathname}" was given in the \`location\` prop.`),_=q}else _=T;let G=_.pathname||"/",V=G;if(z!=="/"){let q=z.replace(/^\//,"").split("/");V="/"+G.replace(/^\//,"").split("/").slice(q.length).join("/")}let X=Bm(n,{pathname:V});Xt(E||X!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Xt(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=$4(X&&X.map(q=>Object.assign({},q,{params:Object.assign({},y,q.params),pathname:Aa([z,h.encodeLocation?h.encodeLocation(q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?z:Aa([z,h.encodeLocation?h.encodeLocation(q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),p,o,u,d);return r&&Q?O.createElement(Hi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},Q):Q}function _4(){let n=G4(),r=x4(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},p=null;return console.error("Error handled by React Router default ErrorBoundary:",n),p=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:h},"ErrorBoundary")," or"," ",O.createElement("code",{style:h},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},r),o?O.createElement("pre",{style:d},o):null,p)}var N4=O.createElement(_4,null),Km=class extends O.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){this.props.onError?this.props.onError(n,r):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const o=O4(n.digest);o&&(n=o)}let r=n!==void 0?O.createElement(Ft.Provider,{value:this.props.routeContext},O.createElement(ff.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?O.createElement(U4,{error:n},r):r}};Km.contextType=j4;var ys=new WeakMap;function U4({children:n,error:r}){let{basename:o}=O.useContext(Mt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let u=A4(r.digest);if(u){let d=ys.get(r);if(d)throw d;let h=Gm(u.location,o);if(qm&&!ys.get(r))if(h.isExternal||u.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:u.replace}));throw ys.set(r,p),p}return O.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return n}function H4({routeContext:n,match:r,children:o}){let u=O.useContext(Cl);return u&&u.static&&u.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=r.route.id),O.createElement(Ft.Provider,{value:n},o)}function $4(n,r=[],o=null,u=null,d=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let h=n,p=o?.errors;if(p!=null){let z=h.findIndex(E=>E.route.id&&p?.[E.route.id]!==void 0);$e(z>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,z+1))}let x=!1,y=-1;if(o)for(let z=0;z<h.length;z++){let E=h[z];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=z),E.route.id){let{loaderData:T,errors:_}=o,G=E.route.loader&&!T.hasOwnProperty(E.route.id)&&(!_||_[E.route.id]===void 0);if(E.route.lazy||G){x=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}let g=o&&u?(z,E)=>{u(z,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:b4(o.matches),errorInfo:E})}:void 0;return h.reduceRight((z,E,T)=>{let _,G=!1,V=null,X=null;o&&(_=p&&E.route.id?p[E.route.id]:void 0,V=E.route.errorElement||N4,x&&(y<0&&T===0?(Fm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,X=null):y===T&&(G=!0,X=E.route.hydrateFallbackElement||null)));let Q=r.concat(h.slice(0,T+1)),q=()=>{let L;return _?L=V:G?L=X:E.route.Component?L=O.createElement(E.route.Component,null):E.route.element?L=E.route.element:L=z,O.createElement(H4,{match:E,routeContext:{outlet:z,matches:Q,isDataRoute:o!=null},children:L})};return o&&(E.route.ErrorBoundary||E.route.errorElement||T===0)?O.createElement(Km,{location:o.location,revalidation:o.revalidation,component:V,error:_,children:q(),routeContext:{outlet:null,matches:Q,isDataRoute:!0},onError:g}):q()},null)}function df(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function B4(n){let r=O.useContext(Cl);return $e(r,df(n)),r}function L4(n){let r=O.useContext(Lr);return $e(r,df(n)),r}function Y4(n){let r=O.useContext(Ft);return $e(r,df(n)),r}function hf(n){let r=Y4(n),o=r.matches[r.matches.length-1];return $e(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function q4(){return hf("useRouteId")}function G4(){let n=O.useContext(ff),r=L4("useRouteError"),o=hf("useRouteError");return n!==void 0?n:r.errors?.[o]}function V4(){let{router:n}=B4("useNavigate"),r=hf("useNavigate"),o=O.useRef(!1);return km(()=>{o.current=!0}),O.useCallback(async(d,h={})=>{Xt(o.current,Zm),o.current&&(typeof d=="number"?await n.navigate(d):await n.navigate(d,{fromRouteId:r,...h}))},[n,r])}var kh={};function Fm(n,r,o){!r&&!kh[n]&&(kh[n]=!0,Xt(!1,o))}O.memo(X4);function X4({routes:n,future:r,state:o,onError:u}){return Jm(n,void 0,o,u,r)}function vs({to:n,replace:r,state:o,relative:u}){$e(Tl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=O.useContext(Mt);Xt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=O.useContext(Ft),{pathname:p}=wa(),x=Rt(),y=sf(n,of(h),p,u==="path"),g=JSON.stringify(y);return O.useEffect(()=>{x(JSON.parse(g),{replace:r,state:o,relative:u})},[x,g,u,r,o]),null}function ct(n){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Q4({basename:n="/",children:r=null,location:o,navigationType:u="POP",navigator:d,static:h=!1,unstable_useTransitions:p}){$e(!Tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=n.replace(/^\/*/,"/"),y=O.useMemo(()=>({basename:x,navigator:d,static:h,unstable_useTransitions:p,future:{}}),[x,d,h,p]);typeof o=="string"&&(o=zl(o));let{pathname:g="/",search:z="",hash:E="",state:T=null,key:_="default"}=o,G=O.useMemo(()=>{let V=Oa(g,x);return V==null?null:{location:{pathname:V,search:z,hash:E,state:T,key:_},navigationType:u}},[x,g,z,E,T,_,u]);return Xt(G!=null,`<Router basename="${x}"> is not able to match the URL "${g}${z}${E}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:O.createElement(Mt.Provider,{value:y},O.createElement(Hi.Provider,{children:r,value:G}))}function Z4({children:n,location:r}){return D4(ef(n),r)}function ef(n,r=[]){let o=[];return O.Children.forEach(n,(u,d)=>{if(!O.isValidElement(u))return;let h=[...r,d];if(u.type===O.Fragment){o.push.apply(o,ef(u.props.children,h));return}$e(u.type===ct,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!u.props.index||!u.props.children,"An index route cannot have child routes.");let p={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(p.children=ef(u.props.children,h)),o.push(p)}),o}var zr="get",Cr="application/x-www-form-urlencoded";function Yr(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function k4(n){return Yr(n)&&n.tagName.toLowerCase()==="button"}function J4(n){return Yr(n)&&n.tagName.toLowerCase()==="form"}function K4(n){return Yr(n)&&n.tagName.toLowerCase()==="input"}function F4(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function W4(n,r){return n.button===0&&(!r||r==="_self")&&!F4(n)}function tf(n=""){return new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((r,o)=>{let u=n[o];return r.concat(Array.isArray(u)?u.map(d=>[o,d]):[[o,u]])},[]))}function I4(n,r){let o=tf(n);return r&&r.forEach((u,d)=>{o.has(d)||r.getAll(d).forEach(h=>{o.append(d,h)})}),o}var nr=null;function P4(){if(nr===null)try{new FormData(document.createElement("form"),0),nr=!1}catch{nr=!0}return nr}var ev=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xs(n){return n!=null&&!ev.has(n)?(Xt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cr}"`),null):n}function tv(n,r){let o,u,d,h,p;if(J4(n)){let x=n.getAttribute("action");u=x?Oa(x,r):null,o=n.getAttribute("method")||zr,d=xs(n.getAttribute("enctype"))||Cr,h=new FormData(n)}else if(k4(n)||K4(n)&&(n.type==="submit"||n.type==="image")){let x=n.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=n.getAttribute("formaction")||x.getAttribute("action");if(u=y?Oa(y,r):null,o=n.getAttribute("formmethod")||x.getAttribute("method")||zr,d=xs(n.getAttribute("formenctype"))||xs(x.getAttribute("enctype"))||Cr,h=new FormData(x,n),!P4()){let{name:g,type:z,value:E}=n;if(z==="image"){let T=g?`${g}.`:"";h.append(`${T}x`,"0"),h.append(`${T}y`,"0")}else g&&h.append(g,E)}}else{if(Yr(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=zr,u=null,d=Cr,p=n}return h&&d==="text/plain"&&(p=h,h=void 0),{action:u,method:o.toLowerCase(),encType:d,formData:h,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function mf(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function av(n,r,o,u){let d=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${u}`:d.pathname=`${d.pathname}.${u}`:d.pathname==="/"?d.pathname=`_root.${u}`:r&&Oa(d.pathname,r)==="/"?d.pathname=`${r.replace(/\/$/,"")}/_root.${u}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${u}`,d}async function nv(n,r){if(n.id in r)return r[n.id];try{let o=await import(n.module);return r[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lv(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function iv(n,r,o){let u=await Promise.all(n.map(async d=>{let h=r.routes[d.route.id];if(h){let p=await nv(h,o);return p.links?p.links():[]}return[]}));return ov(u.flat(1).filter(lv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Jh(n,r,o,u,d,h){let p=(y,g)=>o[g]?y.route.id!==o[g].route.id:!0,x=(y,g)=>o[g].pathname!==y.pathname||o[g].route.path?.endsWith("*")&&o[g].params["*"]!==y.params["*"];return h==="assets"?r.filter((y,g)=>p(y,g)||x(y,g)):h==="data"?r.filter((y,g)=>{let z=u.routes[y.route.id];if(!z||!z.hasLoader)return!1;if(p(y,g)||x(y,g))return!0;if(y.route.shouldRevalidate){let E=y.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function cv(n,r,{includeHydrateFallback:o}={}){return rv(n.map(u=>{let d=r.routes[u.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),o&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function rv(n){return[...new Set(n)]}function uv(n){let r={},o=Object.keys(n).sort();for(let u of o)r[u]=n[u];return r}function ov(n,r){let o=new Set;return new Set(r),n.reduce((u,d)=>{let h=JSON.stringify(uv(d));return o.has(h)||(o.add(h),u.push({key:h,link:d})),u},[])}function Wm(){let n=O.useContext(Cl);return mf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function sv(){let n=O.useContext(Lr);return mf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var pf=O.createContext(void 0);pf.displayName="FrameworkContext";function Im(){let n=O.useContext(pf);return mf(n,"You must render this element inside a <HydratedRouter> element"),n}function fv(n,r){let o=O.useContext(pf),[u,d]=O.useState(!1),[h,p]=O.useState(!1),{onFocus:x,onBlur:y,onMouseEnter:g,onMouseLeave:z,onTouchStart:E}=r,T=O.useRef(null);O.useEffect(()=>{if(n==="render"&&p(!0),n==="viewport"){let V=Q=>{Q.forEach(q=>{p(q.isIntersecting)})},X=new IntersectionObserver(V,{threshold:.5});return T.current&&X.observe(T.current),()=>{X.disconnect()}}},[n]),O.useEffect(()=>{if(u){let V=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(V)}}},[u]);let _=()=>{d(!0)},G=()=>{d(!1),p(!1)};return o?n!=="intent"?[h,T,{}]:[h,T,{onFocus:Si(x,_),onBlur:Si(y,G),onMouseEnter:Si(g,_),onMouseLeave:Si(z,G),onTouchStart:Si(E,_)}]:[!1,T,{}]}function Si(n,r){return o=>{n&&n(o),o.defaultPrevented||r(o)}}function dv({page:n,...r}){let{router:o}=Wm(),u=O.useMemo(()=>Bm(o.routes,n,o.basename),[o.routes,n,o.basename]);return u?O.createElement(mv,{page:n,matches:u,...r}):null}function hv(n){let{manifest:r,routeModules:o}=Im(),[u,d]=O.useState([]);return O.useEffect(()=>{let h=!1;return iv(n,r,o).then(p=>{h||d(p)}),()=>{h=!0}},[n,r,o]),u}function mv({page:n,matches:r,...o}){let u=wa(),{future:d,manifest:h,routeModules:p}=Im(),{basename:x}=Wm(),{loaderData:y,matches:g}=sv(),z=O.useMemo(()=>Jh(n,r,g,h,u,"data"),[n,r,g,h,u]),E=O.useMemo(()=>Jh(n,r,g,h,u,"assets"),[n,r,g,h,u]),T=O.useMemo(()=>{if(n===u.pathname+u.search+u.hash)return[];let V=new Set,X=!1;if(r.forEach(q=>{let L=h.routes[q.route.id];!L||!L.hasLoader||(!z.some(W=>W.route.id===q.route.id)&&q.route.id in y&&p[q.route.id]?.shouldRevalidate||L.hasClientLoader?X=!0:V.add(q.route.id))}),V.size===0)return[];let Q=av(n,x,d.unstable_trailingSlashAwareDataRequests,"data");return X&&V.size>0&&Q.searchParams.set("_routes",r.filter(q=>V.has(q.route.id)).map(q=>q.route.id).join(",")),[Q.pathname+Q.search]},[x,d.unstable_trailingSlashAwareDataRequests,y,u,h,z,r,n,p]),_=O.useMemo(()=>cv(E,h),[E,h]),G=hv(E);return O.createElement(O.Fragment,null,T.map(V=>O.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...o})),_.map(V=>O.createElement("link",{key:V,rel:"modulepreload",href:V,...o})),G.map(({key:V,link:X})=>O.createElement("link",{key:V,nonce:o.nonce,...X,crossOrigin:X.crossOrigin??o.crossOrigin})))}function pv(...n){return r=>{n.forEach(o=>{typeof o=="function"?o(r):o!=null&&(o.current=r)})}}var gv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gv&&(window.__reactRouterVersion="7.13.0")}catch{}function yv({basename:n,children:r,unstable_useTransitions:o,window:u}){let d=O.useRef();d.current==null&&(d.current=Ky({window:u,v5Compat:!0}));let h=d.current,[p,x]=O.useState({action:h.action,location:h.location}),y=O.useCallback(g=>{o===!1?x(g):O.startTransition(()=>x(g))},[o]);return O.useLayoutEffect(()=>h.listen(y),[h,y]),O.createElement(Q4,{basename:n,children:r,location:p.location,navigationType:p.action,navigator:h,unstable_useTransitions:o})}var Pm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ma=O.forwardRef(function({onClick:r,discover:o="render",prefetch:u="none",relative:d,reloadDocument:h,replace:p,state:x,target:y,to:g,preventScrollReset:z,viewTransition:E,unstable_defaultShouldRevalidate:T,..._},G){let{basename:V,unstable_useTransitions:X}=O.useContext(Mt),Q=typeof g=="string"&&Pm.test(g),q=Gm(g,V);g=q.to;let L=w4(g,{relative:d}),[W,P,Y]=fv(u,_),R=Sv(g,{replace:p,state:x,target:y,preventScrollReset:z,relative:d,viewTransition:E,unstable_defaultShouldRevalidate:T,unstable_useTransitions:X});function F(se){r&&r(se),se.defaultPrevented||R(se)}let ce=O.createElement("a",{..._,...Y,href:q.absoluteURL||L,onClick:q.isExternal||h?r:F,ref:pv(G,P),target:y,"data-discover":!Q&&o==="render"?"true":void 0});return W&&!Q?O.createElement(O.Fragment,null,ce,O.createElement(dv,{page:L})):ce});Ma.displayName="Link";var vv=O.forwardRef(function({"aria-current":r="page",caseSensitive:o=!1,className:u="",end:d=!1,style:h,to:p,viewTransition:x,children:y,...g},z){let E=$i(p,{relative:g.relative}),T=wa(),_=O.useContext(Lr),{navigator:G,basename:V}=O.useContext(Mt),X=_!=null&&Av(E)&&x===!0,Q=G.encodeLocation?G.encodeLocation(E).pathname:E.pathname,q=T.pathname,L=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;o||(q=q.toLowerCase(),L=L?L.toLowerCase():null,Q=Q.toLowerCase()),L&&V&&(L=Oa(L,V)||L);const W=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let P=q===Q||!d&&q.startsWith(Q)&&q.charAt(W)==="/",Y=L!=null&&(L===Q||!d&&L.startsWith(Q)&&L.charAt(Q.length)==="/"),R={isActive:P,isPending:Y,isTransitioning:X},F=P?r:void 0,ce;typeof u=="function"?ce=u(R):ce=[u,P?"active":null,Y?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let se=typeof h=="function"?h(R):h;return O.createElement(Ma,{...g,"aria-current":F,className:ce,ref:z,style:se,to:p,viewTransition:x},typeof y=="function"?y(R):y)});vv.displayName="NavLink";var xv=O.forwardRef(({discover:n="render",fetcherKey:r,navigate:o,reloadDocument:u,replace:d,state:h,method:p=zr,action:x,onSubmit:y,relative:g,preventScrollReset:z,viewTransition:E,unstable_defaultShouldRevalidate:T,..._},G)=>{let{unstable_useTransitions:V}=O.useContext(Mt),X=Cv(),Q=Tv(x,{relative:g}),q=p.toLowerCase()==="get"?"get":"post",L=typeof x=="string"&&Pm.test(x),W=P=>{if(y&&y(P),P.defaultPrevented)return;P.preventDefault();let Y=P.nativeEvent.submitter,R=Y?.getAttribute("formmethod")||p,F=()=>X(Y||P.currentTarget,{fetcherKey:r,method:R,navigate:o,replace:d,state:h,relative:g,preventScrollReset:z,viewTransition:E,unstable_defaultShouldRevalidate:T});V&&o!==!1?O.startTransition(()=>F()):F()};return O.createElement("form",{ref:G,method:q,action:Q,onSubmit:u?y:W,..._,"data-discover":!L&&n==="render"?"true":void 0})});xv.displayName="Form";function bv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ep(n){let r=O.useContext(Cl);return $e(r,bv(n)),r}function Sv(n,{target:r,replace:o,state:u,preventScrollReset:d,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:x,unstable_useTransitions:y}={}){let g=Rt(),z=wa(),E=$i(n,{relative:h});return O.useCallback(T=>{if(W4(T,r)){T.preventDefault();let _=o!==void 0?o:Ni(z)===Ni(E),G=()=>g(n,{replace:_,state:u,preventScrollReset:d,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:x});y?O.startTransition(()=>G()):G()}},[z,g,E,o,u,r,n,d,h,p,x,y])}function jv(n){Xt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let r=O.useRef(tf(n)),o=O.useRef(!1),u=wa(),d=O.useMemo(()=>I4(u.search,o.current?null:r.current),[u.search]),h=Rt(),p=O.useCallback((x,y)=>{const g=tf(typeof x=="function"?x(new URLSearchParams(d)):x);o.current=!0,h("?"+g,y)},[h,d]);return[d,p]}var Ev=0,zv=()=>`__${String(++Ev)}__`;function Cv(){let{router:n}=ep("useSubmit"),{basename:r}=O.useContext(Mt),o=q4(),u=n.fetch,d=n.navigate;return O.useCallback(async(h,p={})=>{let{action:x,method:y,encType:g,formData:z,body:E}=tv(h,r);if(p.navigate===!1){let T=p.fetcherKey||zv();await u(T,o,p.action||x,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:z,body:E,formMethod:p.method||y,formEncType:p.encType||g,flushSync:p.flushSync})}else await d(p.action||x,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:z,body:E,formMethod:p.method||y,formEncType:p.encType||g,replace:p.replace,state:p.state,fromRouteId:o,flushSync:p.flushSync,viewTransition:p.viewTransition})},[u,d,r,o])}function Tv(n,{relative:r}={}){let{basename:o}=O.useContext(Mt),u=O.useContext(Ft);$e(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),h={...$i(n||".",{relative:r})},p=wa();if(n==null){h.search=p.search;let x=new URLSearchParams(h.search),y=x.getAll("index");if(y.some(z=>z==="")){x.delete("index"),y.filter(E=>E).forEach(E=>x.append("index",E));let z=x.toString();h.search=z?`?${z}`:""}}return(!n||n===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(h.pathname=h.pathname==="/"?o:Aa([o,h.pathname])),Ni(h)}function Av(n,{relative:r}={}){let o=O.useContext(Xm);$e(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=ep("useViewTransitionState"),d=$i(n,{relative:r});if(!o.isTransitioning)return!1;let h=Oa(o.currentLocation.pathname,u)||o.currentLocation.pathname,p=Oa(o.nextLocation.pathname,u)||o.nextLocation.pathname;return Mr(d.pathname,p)!=null||Mr(d.pathname,h)!=null}const Ov={colors:{primary:"#0ca694",secondary:"#004d40",accent:"#e0f2f1",text:"#333333",white:"#ffffff",bannerBg:"#fff3cd",bannerText:"#856404",background:"#f8fdfc"},fonts:{main:"'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif"},spacing:{small:"8px",medium:"16px",large:"24px",xlarge:"32px"},breakpoints:{mobile:"768px"}},wv=Jy`
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
`,tp=[{id:1,name:"Dr. Gregory House",specialty:"Clínica Medica",email:"dr.house@clinica.com",image:"https://i.pravatar.cc/150?u=house",approved:!0},{id:2,name:"Dra. Meredith Grey",specialty:"Cirugía General",email:"grey@clinica.com",image:"https://i.pravatar.cc/150?u=grey",approved:!0},{id:3,name:"Dr. Shaun Murphy",specialty:"Pediatría / Neonatología",email:"murphy@clinica.com",image:"https://i.pravatar.cc/150?u=shaun",approved:!0},{id:4,name:"Dra. Lisa Cuddy",specialty:"Endocrinología",email:"cuddy@clinica.com",image:"https://i.pravatar.cc/150?u=cuddy",approved:!0},{id:5,name:"Dr. Derek Shepherd",specialty:"Neurología",email:"shepherd@clinica.com",image:"https://i.pravatar.cc/150?u=derek",approved:!0},{id:6,name:"Dra. Addison Montgomery",specialty:"Ginecología",email:"montgomery@clinica.com",image:"https://i.pravatar.cc/150?u=addison",approved:!0},{id:7,name:"Dra. Cristina Yang",specialty:"Cardiología",email:"yang@clinica.com",image:"https://i.pravatar.cc/150?u=yang",approved:!0}],lr=[{id:101,doctorId:1,patientName:"Juan Pérez",date:"2023-11-15",time:"09:00",status:"confirmado",reason:"Dolor de cabeza"},{id:102,doctorId:2,patientName:"Maria Gómez",date:"2023-11-16",time:"10:30",status:"pendiente",reason:"Consulta general"},{id:103,doctorId:3,patientName:"Tomasito Ruiz",date:"2023-11-17",time:"14:00",status:"confirmado",reason:"Control pediátrico"},{id:104,doctorId:1,patientName:"Ana García",date:"2023-11-15",time:"11:30",status:"pendiente",reason:"Resultados análisis"},{id:105,doctorId:3,patientName:"Lucía Lopez",date:"2023-11-18",time:"09:00",status:"pendiente",reason:"Fiebre"},{id:106,doctorId:7,patientName:"Roberto B.",date:"2023-11-19",time:"16:00",status:"confirmado",reason:"Control post-cirugía"}],Mv=[{id:1,name:"Cardiología"},{id:2,name:"Clínica Medica"},{id:3,name:"Pediatría / Neonatología"},{id:4,name:"Endocrinología"},{id:5,name:"Neurología"},{id:6,name:"Ginecología"},{id:7,name:"Dermatología"},{id:8,name:"Oftalmología"},{id:9,name:"Cirugía General"},{id:10,name:"Traumatología"}],ap=O.createContext(),Kh=[{email:"admin@clinica.com",password:"admin123",name:"Carlos Admin",role:"admin"},{email:"pepe@gmail.com",password:"pepe123",name:"Pepe Argento",role:"paciente"}],ca=()=>O.useContext(ap),Rv=({children:n})=>{const[r,o]=O.useState(null),[u,d]=O.useState(Kh);O.useEffect(()=>{const g=tp.map(_=>({email:_.email||`doc${_.id}@clinica.com`,password:"123",name:_.name,role:"medico",specialty:_.specialty,id:_.id})),z=JSON.parse(localStorage.getItem("registered_users")||"[]"),E=[...Kh,...g,...z];d(E);const T=localStorage.getItem("user");T&&o(JSON.parse(T))},[]);const y={user:r,login:(g,z)=>{const E=g.trim().toLowerCase(),T=u.find(_=>_.email.toLowerCase()===E&&_.password===z);if(T){if(T.role==="medico"&&T.approved===!1)return{success:!1,message:"Su cuenta está pendiente de aprobación por un administrador."};const{password:_,...G}=T;return o(G),localStorage.setItem("user",JSON.stringify(G)),{success:!0,role:T.role}}else return{success:!1,message:"Credenciales inválidas. Verifique email y contraseña."}},logout:()=>{o(null),localStorage.removeItem("user")},register:g=>{if(u.some(G=>G.email===g.email))return{success:!1,message:"El correo electrónico ya está registrado."};const z={...g,id:Date.now()},{password:E,...T}=z;o(T),localStorage.setItem("user",JSON.stringify(T)),d([...u,z]);const _=JSON.parse(localStorage.getItem("registered_users")||"[]");return localStorage.setItem("registered_users",JSON.stringify([..._,z])),{success:!0}}};return s.jsx(ap.Provider,{value:y,children:n})},np=O.createContext(),Wt=()=>O.useContext(np),Dv=({children:n})=>{const[r,o]=O.useState(tp),[u,d]=O.useState(()=>{const Y=localStorage.getItem("specialties");return Y?JSON.parse(Y):Mv}),h=Y=>{const R={id:Date.now(),name:Y},F=[...u,R];d(F),localStorage.setItem("specialties",JSON.stringify(F))},p=Y=>{const R=u.filter(F=>F.id!==Y);d(R),localStorage.setItem("specialties",JSON.stringify(R))},[x,y]=O.useState(()=>{const Y=localStorage.getItem("patients");if(Y)return JSON.parse(Y);const R=[{id:1,name:"Juan Pérez",email:"juan@example.com",insurance:"OSDE 210",history:"Hipertensión"},{id:2,name:"Maria Gómez",email:"maria@example.com",insurance:"Swiss Medical",history:"Sin antecedentes"}];return localStorage.setItem("patients",JSON.stringify(R)),R}),[g,z]=O.useState(()=>{const Y=localStorage.getItem("appointments");if(Y)try{return JSON.parse(Y)}catch(R){return console.error("Error parsing appointments:",R),localStorage.setItem("appointments",JSON.stringify(lr)),lr}return localStorage.setItem("appointments",JSON.stringify(lr)),lr}),P={doctors:r,addDoctor:Y=>{const R={...Y,id:Date.now(),approved:Y.approved||!1},F=[...r,R];o(F)},updateDoctor:Y=>{const R=r.map(F=>F.id===Y.id?Y:F);o(R)},deleteDoctor:Y=>{o(r.filter(R=>R.id!==Y))},patients:x,addPatient:Y=>{const R=[...x,{...Y,id:Date.now()}];y(R),localStorage.setItem("patients",JSON.stringify(R))},updatePatient:Y=>{const R=x.map(F=>F.id===Y.id?Y:F);y(R),localStorage.setItem("patients",JSON.stringify(R))},deletePatient:Y=>{const R=x.filter(F=>F.id!==Y);y(R),localStorage.setItem("patients",JSON.stringify(R))},appointments:g,addAppointment:Y=>{const R=[...g,{...Y,id:Date.now(),status:"pendiente"}];z(R),localStorage.setItem("appointments",JSON.stringify(R))},updateAppointmentStatus:(Y,R)=>{const F=g.map(ce=>ce.id===Y?{...ce,status:R}:ce);z(F),localStorage.setItem("appointments",JSON.stringify(F))},deleteAppointment:Y=>{const R=g.filter(F=>F.id!==Y);z(R),localStorage.setItem("appointments",JSON.stringify(R))},checkAvailability:(Y,R,F)=>!g.some(ce=>Number(ce.doctorId)===Number(Y)&&ce.date===R&&ce.time===F&&ce.status!=="cancelado"),specialties:u,addSpecialty:h,deleteSpecialty:p};return s.jsx(np.Provider,{value:P,children:n})};var lp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fh=Ue.createContext&&Ue.createContext(lp),_v=["attr","size","title"];function Nv(n,r){if(n==null)return{};var o=Uv(n,r),u,d;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(n);for(d=0;d<h.length;d++)u=h[d],!(r.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(n,u)&&(o[u]=n[u])}return o}function Uv(n,r){if(n==null)return{};var o={};for(var u in n)if(Object.prototype.hasOwnProperty.call(n,u)){if(r.indexOf(u)>=0)continue;o[u]=n[u]}return o}function Rr(){return Rr=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(n[u]=o[u])}return n},Rr.apply(this,arguments)}function Wh(n,r){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);r&&(u=u.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),o.push.apply(o,u)}return o}function Dr(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?Wh(Object(o),!0).forEach(function(u){Hv(n,u,o[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Wh(Object(o)).forEach(function(u){Object.defineProperty(n,u,Object.getOwnPropertyDescriptor(o,u))})}return n}function Hv(n,r,o){return r=$v(r),r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}function $v(n){var r=Bv(n,"string");return typeof r=="symbol"?r:r+""}function Bv(n,r){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var u=o.call(n,r);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function ip(n){return n&&n.map((r,o)=>Ue.createElement(r.tag,Dr({key:o},r.attr),ip(r.child)))}function Se(n){return r=>Ue.createElement(Lv,Rr({attr:Dr({},n.attr)},r),ip(n.child))}function Lv(n){var r=o=>{var{attr:u,size:d,title:h}=n,p=Nv(n,_v),x=d||o.size||"1em",y;return o.className&&(y=o.className),n.className&&(y=(y?y+" ":"")+n.className),Ue.createElement("svg",Rr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,u,p,{className:y,style:Dr(Dr({color:n.color||o.color},o.style),n.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),h&&Ue.createElement("title",null,h),n.children)};return Fh!==void 0?Ue.createElement(Fh.Consumer,null,o=>r(o)):r(lp)}function Yv(n){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(n)}function qv(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(n)}function Gv(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}function Vv(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function Xv(n){return Se({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(n)}function Qv(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(n)}function Zv(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(n)}function Ui(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"},child:[]}]})(n)}function cp(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(n)}function kv(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm316 140c0-6.6-5.4-12-12-12h-60v-60c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v60h-60c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h60v60c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-60h60c6.6 0 12-5.4 12-12v-40z"},child:[]}]})(n)}function Jv(n){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(n)}function Kv(n){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function Bi(n){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(n)}function rp(n){return Se({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(n)}function gf(n){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function up(n){return Se({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(n)}function Fv(n){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(n)}function Wv(n){return Se({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"},child:[]}]})(n)}function Iv(n){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"},child:[]}]})(n)}function yf(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(n)}function Pv(n){return Se({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(n)}function op(n){return Se({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z"},child:[]}]})(n)}function ex(n){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(n)}function qr(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(n)}function tx(n){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(n)}function vf(n){return Se({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"},child:[]}]})(n)}function sp(n){return Se({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function Li(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(n)}function fp(n){return Se({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(n)}function ax(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M277.37 11.98C261.08 4.47 243.11 0 224 0c-53.69 0-99.5 33.13-118.51 80h81.19l90.69-68.02zM342.51 80c-7.9-19.47-20.67-36.2-36.49-49.52L239.99 80h102.52zM224 256c70.69 0 128-57.31 128-128 0-5.48-.95-10.7-1.61-16H97.61c-.67 5.3-1.61 10.52-1.61 16 0 70.69 57.31 128 128 128zM80 299.7V512h128.26l-98.45-221.52A132.835 132.835 0 0 0 80 299.7zM0 464c0 26.51 21.49 48 48 48V320.24C18.88 344.89 0 381.26 0 422.4V464zm256-48h-55.38l42.67 96H256c26.47 0 48-21.53 48-48s-21.53-48-48-48zm57.6-128h-16.71c-22.24 10.18-46.88 16-72.89 16s-50.65-5.82-72.89-16h-7.37l42.67 96H256c44.11 0 80 35.89 80 80 0 18.08-6.26 34.59-16.41 48H400c26.51 0 48-21.49 48-48v-41.6c0-74.23-60.17-134.4-134.4-134.4z"},child:[]}]})(n)}function wn(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"},child:[]}]})(n)}function Gr(n){return Se({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}const nx="/proyecto-clinica-rolling/assets/logo-D5tjI_5o.svg",lx=b.header`
  background-color: ${({theme:n})=>n.colors.white};
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`,ix=b.div`
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
`,cx=b(Ma)`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
`,rx=b.img`
  height: 60px;
  width: auto;
`,ux=b.div`
  display: none;
  font-size: 1.5rem;
  color: ${({theme:n})=>n.colors.primary};
  cursor: pointer;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: block;
  }
`,ox=b.nav`
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
`,bs=b(Ma)`
  color: ${({theme:n})=>n.colors.text};
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.2s;
  text-decoration: none;

  &:hover {
    color: ${({theme:n})=>n.colors.primary};
  }
`,sx=b.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({theme:n})=>n.colors.primary};
  font-weight: 600;
`,fx=b(tx)`
  cursor: pointer;
  font-size: 1.2rem;
  color: #e74c3c;
  
  &:hover {
    opacity: 0.8;
  }
`,dx=b(fp)`
  font-size: 1.5rem;
  color: ${({theme:n})=>n.colors.primary};
  cursor: pointer;
  
  &:hover {
    color: ${({theme:n})=>n.colors.secondary};
  }
`,hx=()=>{const{user:n,logout:r}=ca(),[o,u]=O.useState(!1),d=()=>{u(!o)},h=()=>{u(!1)};return s.jsx(lx,{children:s.jsxs(ix,{children:[s.jsx(cx,{to:"/",onClick:h,children:s.jsx(rx,{src:nx,alt:"Azahares Logo"})}),s.jsx(ux,{onClick:d,children:o?s.jsx(sp,{}):s.jsx(Qv,{})}),s.jsxs(ox,{isOpen:o,children:[n?s.jsx(bs,{to:n.role==="medico"?"/turnos-medico":"/mis-turnos",onClick:h,children:"Turnos"}):s.jsx(bs,{to:"/login",onClick:h,children:"Turnos"}),n&&n.role==="admin"&&s.jsx(bs,{to:"/admin",style:{color:"#e67e22"},onClick:h,children:"Panel Admin"}),n?s.jsxs(sx,{children:[s.jsxs("span",{children:["Hola, ",n.name]}),s.jsx(fx,{onClick:()=>{r(),h()},title:"Cerrar Sesión"})]}):s.jsx(Ma,{to:"/login",onClick:h,children:s.jsx(dx,{title:"Ingresar"})})]})]})})},mx=b.footer`
  background-color: ${({theme:n})=>n.colors.secondary};
  color: ${({theme:n})=>n.colors.white};
  padding: ${({theme:n})=>n.spacing.xlarge} ${({theme:n})=>n.spacing.large};
  margin-top: auto;
  width: 100%;
`,px=b.div`
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
`,Ss=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing.medium};

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    align-items: center;
  }
`,js=b.h3`
  font-size: 1.3rem;
  border-bottom: 2px solid ${({theme:n})=>n.colors.primary};
  padding-bottom: ${({theme:n})=>n.spacing.small};
  display: inline-block;
  width: max-content;
  margin-bottom: ${({theme:n})=>n.spacing.small};
`,gl=b.div`
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
`,gx=b.div`
  display: flex;
  flex-direction: column;
`,yx=b.div`
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
`,vx=b.div`
  text-align: center;
  padding-top: ${({theme:n})=>n.spacing.large};
  margin-top: ${({theme:n})=>n.spacing.large};
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 0.85rem;
  opacity: 0.8;
  letter-spacing: 0.5px;
`,xx=()=>s.jsxs(mx,{children:[s.jsxs(px,{children:[s.jsxs(Ss,{children:[s.jsx(js,{children:"Contáctanos"}),s.jsxs(gl,{children:[s.jsx(ex,{}),s.jsxs(gx,{children:[s.jsx("span",{children:"385 – 421 4652"}),s.jsx("span",{children:"385 – 421 2767"})]})]}),s.jsxs(gl,{children:[s.jsx(Gv,{}),s.jsx("span",{children:"385 – 155 938 904"})]}),s.jsxs(gl,{children:[s.jsx(Pv,{}),s.jsx("span",{children:"Mitre 279 – SDE"})]})]}),s.jsxs(Ss,{children:[s.jsx(js,{children:"Horarios"}),s.jsx(gl,{children:s.jsx("span",{children:"Lunes a Viernes: 08:00 - 20:00"})}),s.jsx(gl,{children:s.jsx("span",{children:"Sábados: 08:00 - 13:00"})}),s.jsx(gl,{children:s.jsx("span",{children:"Guardia 24hs"})})]}),s.jsxs(Ss,{children:[s.jsx(js,{children:"Redes Sociales"}),s.jsx("p",{children:"Seguinos para novedades y consejos."}),s.jsxs(yx,{children:[s.jsx("a",{href:"#",title:"Facebook",children:s.jsx(Yv,{})}),s.jsx("a",{href:"#",title:"Instagram",children:s.jsx(qv,{})})]})]})]}),s.jsxs(vx,{children:["© ",new Date().getFullYear()," Azahares Centro Integral de Salud. Todos los derechos reservados."]})]}),bx=b.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,Sx=b.main`
  flex: 1;
  padding: ${({theme:n})=>n.spacing.large};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: ${({theme:n})=>n.spacing.medium};
  }
`,jx=({children:n})=>s.jsxs(bx,{children:[s.jsx(hx,{}),s.jsx(Sx,{children:n}),s.jsx(xx,{})]}),Ex=b.div`
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
`,zx=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing.small};
`,Cx=b.span`
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
`,Tx=b.h3`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
`,Ax=b.p`
  color: ${({theme:n})=>n.colors.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,Ox=b.p`
  color: #666;
  font-size: 0.95rem;
  margin: 0;
  font-style: italic;
`,wx=b.div`
  display: none;
  font-size: 3rem;
  color: ${({theme:n})=>n.colors.accent};
  
  @media (min-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: block;
    margin-left: ${({theme:n})=>n.spacing.large};
  }
`,Mx=()=>s.jsxs(Ex,{children:[s.jsxs(zx,{children:[s.jsx(Cx,{children:"Aviso Importante"}),s.jsx(Tx,{children:"Nuevo horario de atención"}),s.jsx(Ax,{children:"de 8:00 a 20:30 hs"}),s.jsx(Ox,{children:"Desde el jueves 4 de enero"})]}),s.jsx(wx,{children:s.jsx(Bi,{})})]}),Rx="/proyecto-clinica-rolling/assets/c1-NiYs6g-t.jpg",Dx=b.section`
  height: 60vh;
  background: linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url(${Rx});
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
`,_x=b.section`
  width: 100%;
`,Nx=b.section`
  margin-top: ${({theme:n})=>n.spacing.xlarge};
  margin-bottom: ${({theme:n})=>n.spacing.xlarge};
  text-align: center;
  padding: 0 ${({theme:n})=>n.spacing.large};
`,Ux=b.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: ${({theme:n})=>n.spacing.medium};
  line-height: 1.2;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`,Hx=b.p`
  font-size: 1.1rem;
  color: #f1f1f1;
  max-width: 700px;
  margin: 0 auto;
`,$x=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({theme:n})=>n.spacing.large};
  margin-top: ${({theme:n})=>n.spacing.xlarge};
`,Es=b.div`
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
`,zs=b.div`
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
`,Cs=b.h3`
  font-size: 1.3rem;
  color: ${({theme:n})=>n.colors.secondary};
  margin-bottom: ${({theme:n})=>n.spacing.small};
`,Ts=b.p`
  color: #666;
  font-size: 0.95rem;
`,Bx=b.div`
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
`,Lx=b.h2`
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
  
  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`,Yx=b.p`
  font-size: 1.1rem;
  max-width: 600px;
  opacity: 0.9;
  line-height: 1.5;
`,qx=b.button`
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
`,Gx=()=>{const n=Rt(),{user:r}=ca(),o=()=>{if(!r){n("/login");return}r.role==="medico"?n("/turnos-medico"):r.role==="admin"?n("/admin"):n("/especialidades")};return s.jsxs(s.Fragment,{children:[s.jsx(Dx,{children:s.jsxs(Nx,{children:[s.jsx(Ux,{children:"Cuidamos tu salud, cerca de vos"}),s.jsx(Hx,{children:"En Azahares brindamos atención médica integral con los mejores profesionales y tecnología de última generación."})]})}),s.jsx(_x,{children:s.jsx(Mx,{})}),s.jsxs($x,{children:[s.jsxs(Es,{children:[s.jsx(zs,{children:s.jsx(vf,{})}),s.jsx(Cs,{children:"Especialidades Médicas"}),s.jsx(Ts,{children:"Más de 30 especialidades a tu disposición. Cardiología, Pediatría, Traumatología y más."})]}),s.jsxs(Es,{children:[s.jsx(zs,{children:s.jsx(Ui,{})}),s.jsx(Cs,{children:"Turnos Online"}),s.jsx(Ts,{children:"Gestioná tus citas de manera rápida y sencilla desde la comodidad de tu hogar."})]}),s.jsxs(Es,{children:[s.jsx(zs,{children:s.jsx(op,{})}),s.jsx(Cs,{children:"Resultados de Estudios"}),s.jsx(Ts,{children:"Accedé a tus informes y resultados de laboratorio sin necesidad de venir a la clínica."})]})]}),s.jsxs(Bx,{children:[s.jsx(Lx,{children:"¿Necesitás ver a un médico?"}),s.jsx(Yx,{children:r?.role==="medico"?"Accedé a tu panel para ver tus próximos pacientes y gestionar tu agenda.":"Reservá tu turno online de forma rápida y segura. Elegí la especialidad y el profesional que mejor se adapte a tus horarios."}),s.jsx(qx,{onClick:o,children:r?.role==="medico"?"Gestionar Turnos":"Sacar Turno"})]})]})},Vx=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
`,Xx=b.div`
  background: ${({theme:n})=>n.colors.white};
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 450px;
  text-align: center;
`,Qx=b.h2`
  color: ${({theme:n})=>n.colors.secondary};
  margin-bottom: ${({theme:n})=>n.spacing.medium};
  font-size: 1.8rem;
`,Zx=b.p`
  color: #666;
  margin-bottom: ${({theme:n})=>n.spacing.large};
`,kx=b.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing.medium};
`,Ih=b.div`
  position: relative;
`,Ph=b.input`
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
`,em=b.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`,Jx=b.button`
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
`,Kx=b.div`
  color: #e74c3c;
  background-color: #fce4e4;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-bottom: 10px;
`,Fx=b.div`
  margin-top: ${({theme:n})=>n.spacing.large};
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.9rem;
  border-top: 1px solid #eee;
  padding-top: ${({theme:n})=>n.spacing.medium};
`,Wx=b.a`
  color: ${({theme:n})=>n.colors.primary};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,Ix=()=>{const[n,r]=O.useState(""),[o,u]=O.useState(""),[d,h]=O.useState(""),{login:p}=ca(),x=Rt(),y=g=>{if(g.preventDefault(),h(""),!n||!o){h("Por favor complete todos los campos");return}const z=p(n,o);z.success?z.role==="admin"?x("/admin"):z.role==="medico"?x("/turnos-medico"):x("/menu-paciente"):h(z.message)};return s.jsx(Vx,{children:s.jsxs(Xx,{children:[s.jsx(Qx,{children:"Bienvenido"}),s.jsx(Zx,{children:"Ingrese a su cuenta"}),d&&s.jsx(Kx,{children:d}),s.jsxs(kx,{onSubmit:y,children:[s.jsxs(Ih,{children:[s.jsx(em,{children:s.jsx(Gr,{})}),s.jsx(Ph,{type:"email",placeholder:"Correo electrónico",value:n,onChange:g=>r(g.target.value)})]}),s.jsxs(Ih,{children:[s.jsx(em,{children:s.jsx(yf,{})}),s.jsx(Ph,{type:"password",placeholder:"Contraseña",value:o,onChange:g=>u(g.target.value)})]}),s.jsx(Jx,{type:"submit",children:"Ingresar"})]}),s.jsx(Fx,{children:s.jsx(Wx,{onClick:()=>x("/register"),children:"Crear Cuenta Nueva"})})]})})},Px=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
  min-height: 60vh;
`,e6=b.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 600px;
  text-align: center;
`,t6=b.h2`
  color: ${({theme:n})=>n.colors.secondary};
  margin-bottom: ${({theme:n})=>n.spacing.medium};
  font-size: 2rem;
`,a6=b.p`
  color: #666;
  margin-bottom: ${({theme:n})=>n.spacing.xlarge};
  font-size: 1.1rem;
`,n6=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({theme:n})=>n.spacing.large};
  margin-top: ${({theme:n})=>n.spacing.xlarge};
`,tm=b.div`
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
`,am=b.div`
  font-size: 3rem;
  color: ${({theme:n})=>n.colors.primary};
`,nm=b.h3`
  margin: 0;
  font-size: 1.3rem;
`,lm=b.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
`,l6=b.div`
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
`,i6=()=>{const n=Rt();return s.jsx(Px,{children:s.jsxs(e6,{children:[s.jsx(t6,{children:"Crear Cuenta"}),s.jsx(a6,{children:"Seleccione el tipo de cuenta que desea crear"}),s.jsxs(n6,{children:[s.jsxs(tm,{onClick:()=>n("/register/paciente"),children:[s.jsx(am,{children:s.jsx(Gr,{})}),s.jsx(nm,{children:"Soy Paciente"}),s.jsx(lm,{children:"Quiero reservar turnos y gestionar mis consultas"})]}),s.jsxs(tm,{onClick:()=>n("/register/medico"),children:[s.jsx(am,{children:s.jsx(wn,{})}),s.jsx(nm,{children:"Soy Médico"}),s.jsx(lm,{children:"Quiero gestionar mi agenda y atender pacientes"})]})]}),s.jsxs(l6,{children:["¿Ya tienes cuenta? ",s.jsx("a",{href:"/login",children:"Ingresar"})]})]})})},c6=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
`,r6=b.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 500px;
`,u6=b.h2`
  color: ${({theme:n})=>n.colors.secondary};
  text-align: center;
  margin-bottom: 20px;
`,o6=b.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,ir=b.div`
  position: relative;
`,cr=b.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({theme:n})=>n.colors.primary};
  }
`,rr=b.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`,s6=b.button`
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
`,f6=b.div`
  color: #e74c3c;
  background: #fce4e4;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
`,d6=()=>{const[n,r]=O.useState({name:"",email:"",password:"",insurance:""}),[o,u]=O.useState(""),{register:d}=ca(),{addPatient:h}=Wt(),p=Rt(),x=g=>{r({...n,[g.target.name]:g.target.value})},y=async g=>{if(g.preventDefault(),u(""),!n.name||!n.email||!n.password){u("Por favor complete todos los campos.");return}const z={...n,role:"paciente"},E=d(z);E.success?(h(z),p("/menu-paciente")):u(E.message)};return s.jsx(c6,{children:s.jsxs(r6,{children:[s.jsx(u6,{children:"Registro de Paciente"}),o&&s.jsx(f6,{children:o}),s.jsxs(o6,{onSubmit:y,children:[s.jsxs(ir,{children:[s.jsx(rr,{children:s.jsx(Gr,{})}),s.jsx(cr,{name:"name",placeholder:"Nombre Completo",value:n.name,onChange:x})]}),s.jsxs(ir,{children:[s.jsx(rr,{children:s.jsx(gf,{})}),s.jsx(cr,{type:"email",name:"email",placeholder:"Correo Electrónico",value:n.email,onChange:x})]}),s.jsxs(ir,{children:[s.jsx(rr,{children:s.jsx(yf,{})}),s.jsx(cr,{type:"password",name:"password",placeholder:"Contraseña",value:n.password,onChange:x})]}),s.jsxs(ir,{children:[s.jsx(rr,{children:s.jsx(Wv,{})}),s.jsx(cr,{name:"insurance",placeholder:"Obra Social (Opcional)",value:n.insurance,onChange:x})]}),s.jsx(s6,{type:"submit",children:"Registrarse como Paciente"})]}),s.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:s.jsx(Ma,{to:"/register",children:"Volver"})})]})})},h6=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
`,m6=b.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 500px;
`,p6=b.h2`
  color: ${({theme:n})=>n.colors.secondary};
  text-align: center;
  margin-bottom: 20px;
`,g6=b.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,ur=b.div`
  position: relative;
`,or=b.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({theme:n})=>n.colors.primary};
  }
`,sr=b.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`,y6=b.button`
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
`,v6=b.div`
  color: #e74c3c;
  background: #fce4e4;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9rem;
  text-align: center;
`,x6=()=>{const[n,r]=O.useState({name:"",email:"",password:"",specialty:"",image:"https://i.pravatar.cc/150"}),[o,u]=O.useState(""),{register:d}=ca(),{addDoctor:h}=Wt(),p=Rt(),x=g=>{r({...n,[g.target.name]:g.target.value})},y=async g=>{if(g.preventDefault(),u(""),!n.name||!n.email||!n.password||!n.specialty){u("Por favor complete todos los campos.");return}const z={...n,role:"medico",approved:!1},E=d(z);E.success?(h(z),alert("Cuenta creada. Un administrador debe aprobar su cuenta antes de que pueda operar."),p("/login")):u(E.message)};return s.jsx(h6,{children:s.jsxs(m6,{children:[s.jsx(p6,{children:"Registro de Médico"}),o&&s.jsx(v6,{children:o}),s.jsxs(g6,{onSubmit:y,children:[s.jsxs(ur,{children:[s.jsx(sr,{children:s.jsx(wn,{})}),s.jsx(or,{name:"name",placeholder:"Nombre Completo",value:n.name,onChange:x})]}),s.jsxs(ur,{children:[s.jsx(sr,{children:s.jsx(gf,{})}),s.jsx(or,{type:"email",name:"email",placeholder:"Correo Electrónico",value:n.email,onChange:x})]}),s.jsxs(ur,{children:[s.jsx(sr,{children:s.jsx(yf,{})}),s.jsx(or,{type:"password",name:"password",placeholder:"Contraseña",value:n.password,onChange:x})]}),s.jsxs(ur,{children:[s.jsx(sr,{children:s.jsx(vf,{})}),s.jsx(or,{name:"specialty",placeholder:"Especialidad (Ej: Cardiología)",value:n.specialty,onChange:x})]}),s.jsx(y6,{type:"submit",children:"Registrarse como Médico"})]}),s.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:s.jsx(Ma,{to:"/register",children:"Volver"})})]})})},zn=({children:n,requiredRole:r})=>{const{user:o}=ca();return o?o.role==="admin"?n:o.role==="medico"&&o.approved===!1?s.jsx(vs,{to:"/login",replace:!0}):r&&o.role!==r?s.jsx(vs,{to:"/",replace:!0}):n:s.jsx(vs,{to:"/login",replace:!0})},b6=b.div``,S6=b.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        justify-content: center;
    }
`,As=b.button`
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
`,j6=b.table`
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
`,E6=b.thead`
    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: none;
    }
`,z6=b.tr`
    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: block;
        background: white;
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        border: 1px solid #eee;
    }
`,fr=b.th`
    background: #f4f4f4;
    padding: 12px;
    text-align: left;
    color: #555;
`,dr=b.td`
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
`,im=b.input`
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
`,C6=b.div`
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
`,T6=b.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
`,A6=()=>{const{doctors:n,addDoctor:r,updateDoctor:o,deleteDoctor:u}=Wt(),[d,h]=O.useState(!1),[p,x]=O.useState(null),[y,g]=O.useState({name:"",specialty:"",image:"https://i.pravatar.cc/150"}),z=(T=null)=>{T?(x(T),g(T)):(x(null),g({name:"",specialty:"",image:"https://i.pravatar.cc/150"})),h(!0)},E=()=>{p?o(y):r(y),h(!1)};return s.jsxs(b6,{children:[s.jsx(S6,{children:s.jsxs(As,{onClick:()=>z(),children:[s.jsx(qr,{})," Nuevo Médico"]})}),s.jsxs(j6,{children:[s.jsx(E6,{children:s.jsxs("tr",{children:[s.jsx(fr,{children:"Nombre"}),s.jsx(fr,{children:"Especialidad"}),s.jsx(fr,{children:"Estado"}),s.jsx(fr,{children:"Acciones"})]})}),s.jsx("tbody",{children:n.map(T=>s.jsxs(z6,{children:[s.jsx(dr,{"data-label":"Nombre",children:T.name}),s.jsx(dr,{"data-label":"Especialidad",children:T.specialty}),s.jsx(dr,{"data-label":"Estado",children:s.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"0.85rem",fontWeight:"600",background:T.approved?"#e8f5e9":"#fff3e0",color:T.approved?"#2e7d32":"#ef6c00"},children:T.approved?"Aprobado":"Pendiente"})}),s.jsx(dr,{"data-label":"Acciones",children:s.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[!T.approved&&s.jsx("button",{style:{padding:"4px 10px",background:"#4caf50",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"0.85rem"},onClick:()=>o({...T,approved:!0}),children:"Aprobar"}),s.jsx(rp,{style:{cursor:"pointer",color:"#f39c12",fontSize:"1.1rem"},onClick:()=>z(T)}),s.jsx(Li,{style:{cursor:"pointer",color:"#e74c3c",fontSize:"1.1rem"},onClick:()=>{window.confirm("Eliminar?")&&u(T.id)}})]})})]},T.id))})]}),d&&s.jsxs(s.Fragment,{children:[s.jsx(T6,{onClick:()=>h(!1)}),s.jsxs(C6,{children:[s.jsx("h3",{children:p?"Editar Médico":"Nuevo Médico"}),s.jsx(im,{placeholder:"Nombre Dr/Dra",value:y.name,onChange:T=>g({...y,name:T.target.value})}),s.jsx(im,{placeholder:"Especialidad",value:y.specialty,onChange:T=>g({...y,specialty:T.target.value})}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",marginTop:"15px"},children:[s.jsx(As,{style:{background:"#ccc"},onClick:()=>h(!1),children:"Cancelar"}),s.jsx(As,{onClick:E,children:"Guardar"})]})]})]})]})},O6=b.div``,w6=b.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        justify-content: center;
    }
`,Os=b.button`
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
`,M6=b.table`
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
`,R6=b.thead`
    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: none;
    }
`,D6=b.tr`
    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: block;
        background: white;
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        border: 1px solid #eee;
    }
`,hr=b.th`
    background: #f4f4f4;
    padding: 12px;
    text-align: left;
    color: #555;
`,mr=b.td`
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
`,pr=b.input`
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
`,_6=b.div`
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
`,N6=b.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
`,U6=()=>{const{patients:n,addPatient:r,updatePatient:o,deletePatient:u}=Wt(),[d,h]=O.useState(!1),[p,x]=O.useState(null),[y,g]=O.useState({name:"",email:"",insurance:"",history:""}),z=(T=null)=>{T?(x(T),g(T)):(x(null),g({name:"",email:"",insurance:"",history:""})),h(!0)},E=()=>{p?o(y):r(y),h(!1)};return s.jsxs(O6,{children:[s.jsx(w6,{children:s.jsxs(Os,{onClick:()=>z(),children:[s.jsx(qr,{})," Nuevo Paciente"]})}),s.jsxs(M6,{children:[s.jsx(R6,{children:s.jsxs("tr",{children:[s.jsx(hr,{children:"Nombre"}),s.jsx(hr,{children:"Obra Social"}),s.jsx(hr,{children:"Antecedentes"}),s.jsx(hr,{children:"Acciones"})]})}),s.jsx("tbody",{children:n.map(T=>s.jsxs(D6,{children:[s.jsx(mr,{"data-label":"Nombre",children:T.name}),s.jsx(mr,{"data-label":"Obra Social",children:T.insurance}),s.jsx(mr,{"data-label":"Antecedentes",children:T.history}),s.jsx(mr,{"data-label":"Acciones",children:s.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[s.jsx(rp,{style:{cursor:"pointer",color:"#f39c12",fontSize:"1.2rem"},onClick:()=>z(T)}),s.jsx(Li,{style:{cursor:"pointer",color:"#e74c3c",fontSize:"1.2rem"},onClick:()=>{window.confirm("Eliminar?")&&u(T.id)}})]})})]},T.id))})]}),d&&s.jsxs(s.Fragment,{children:[s.jsx(N6,{onClick:()=>h(!1)}),s.jsxs(_6,{children:[s.jsx("h3",{children:p?"Editar Paciente":"Nuevo Paciente"}),s.jsx(pr,{placeholder:"Nombre Completo",value:y.name,onChange:T=>g({...y,name:T.target.value})}),s.jsx(pr,{placeholder:"Email",value:y.email,onChange:T=>g({...y,email:T.target.value})}),s.jsx(pr,{placeholder:"Obra Social",value:y.insurance,onChange:T=>g({...y,insurance:T.target.value})}),s.jsx(pr,{placeholder:"Historial / Antecedentes",value:y.history,onChange:T=>g({...y,history:T.target.value})}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",marginTop:"15px"},children:[s.jsx(Os,{style:{background:"#ccc"},onClick:()=>h(!1),children:"Cancelar"}),s.jsx(Os,{onClick:E,children:"Guardar"})]})]})]})]})},H6=b.div``,$6=b.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        justify-content: center;
    }
`,ws=b.button`
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
`,B6=b.table`
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
`,L6=b.thead`
    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: none;
    }
`,Y6=b.tr`
    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        display: block;
        background: white;
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        border: 1px solid #eee;
    }
`,ji=b.th`
    background: #f4f4f4;
    padding: 12px;
    text-align: left;
    color: #555;
`,Ei=b.td`
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
`,cm=b.select`
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
`,Ms=b.input`
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
`,q6=b.div`
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
`,G6=b.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
`,V6=b.p`
    color: red;
    font-size: 0.9rem;
    margin-bottom: 10px;
`,X6=()=>{const{appointments:n,doctors:r,addAppointment:o,deleteAppointment:u,checkAvailability:d}=Wt(),[h,p]=O.useState(!1),[x,y]=O.useState({doctorId:"",patientName:"",date:"",time:"",reason:""}),[g,z]=O.useState(""),E=()=>{y({doctorId:"",patientName:"",date:"",time:"",reason:""}),z(""),p(!0)},T=()=>{if(!x.doctorId||!x.date||!x.time||!x.patientName){z("Todos los campos son obligatorios");return}if(!d(x.doctorId,x.date,x.time)){z("⚠️ El médico no tiene disponibilidad en ese horario.");return}const G=r.find(V=>V.id===Number(x.doctorId));o({...x,doctorId:Number(x.doctorId),doctorName:G?G.name:"Desconocido"}),p(!1)};return s.jsxs(H6,{children:[s.jsx($6,{children:s.jsxs(ws,{onClick:E,children:[s.jsx(qr,{})," Agendar Turno"]})}),s.jsxs(B6,{children:[s.jsx(L6,{children:s.jsxs("tr",{children:[s.jsx(ji,{children:"Paciente"}),s.jsx(ji,{children:"Médico"}),s.jsx(ji,{children:"Fecha/Hora"}),s.jsx(ji,{children:"Estado"}),s.jsx(ji,{children:"Acciones"})]})}),s.jsx("tbody",{children:n.map(_=>s.jsxs(Y6,{children:[s.jsx(Ei,{"data-label":"Paciente",children:_.patientName}),s.jsx(Ei,{"data-label":"Médico",children:_.doctorName}),s.jsxs(Ei,{"data-label":"Fecha/Hora",children:[_.date," ",_.time]}),s.jsx(Ei,{"data-label":"Estado",children:_.status}),s.jsx(Ei,{"data-label":"Acciones",children:s.jsx("span",{style:{display:"flex",justifyContent:"flex-end"},children:s.jsx(Li,{style:{cursor:"pointer",color:"#e74c3c",fontSize:"1.2rem"},onClick:()=>{window.confirm("Cancelar turno?")&&u(_.id)}})})})]},_.id))})]}),h&&s.jsxs(s.Fragment,{children:[s.jsx(G6,{onClick:()=>p(!1)}),s.jsxs(q6,{children:[s.jsx("h3",{children:"Agendar Nuevo Turno"}),g&&s.jsx(V6,{children:g}),s.jsx("label",{children:"Médico:"}),s.jsxs(cm,{value:x.doctorId,onChange:_=>y({...x,doctorId:_.target.value}),children:[s.jsx("option",{value:"",children:"Seleccione Médico"}),r.map(_=>s.jsxs("option",{value:_.id,children:[_.name," - ",_.specialty]},_.id))]}),s.jsx("label",{children:"Paciente:"}),s.jsx(Ms,{placeholder:"Nombre Paciente",value:x.patientName,onChange:_=>y({...x,patientName:_.target.value})}),s.jsxs("div",{style:{display:"flex",gap:"10px"},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{children:"Fecha:"}),s.jsx(Ms,{type:"date",value:x.date,onChange:_=>y({...x,date:_.target.value})})]}),s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{children:"Hora:"}),s.jsxs(cm,{value:x.time,onChange:_=>y({...x,time:_.target.value}),children:[s.jsx("option",{value:"",children:"Hora"}),s.jsx("option",{value:"09:00",children:"09:00"}),s.jsx("option",{value:"10:00",children:"10:00"}),s.jsx("option",{value:"11:30",children:"11:30"}),s.jsx("option",{value:"14:00",children:"14:00"}),s.jsx("option",{value:"16:00",children:"16:00"})]})]})]}),s.jsx("label",{children:"Motivo:"}),s.jsx(Ms,{placeholder:"Motivo de consulta",value:x.reason,onChange:_=>y({...x,reason:_.target.value})}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",marginTop:"15px"},children:[s.jsx(ws,{style:{background:"#ccc"},onClick:()=>p(!1),children:"Cancelar"}),s.jsx(ws,{onClick:T,children:"Confirmar"})]})]})]})]})},Q6=b.div``,Z6=b.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
`,Rs=b.button`
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
`,k6=b.table`
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`,rm=b.th`
    background: #f4f4f4;
    padding: 12px;
    text-align: left;
    color: #555;
`,um=b.td`
    padding: 12px;
    border-bottom: 1px solid #eee;
`,J6=b.input`
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
`,K6=b.div`
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
`,F6=b.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
`,W6=()=>{const{specialties:n,addSpecialty:r,deleteSpecialty:o}=Wt(),[u,d]=O.useState(!1),[h,p]=O.useState(""),x=()=>{h.trim()&&(r(h),p(""),d(!1))};return s.jsxs(Q6,{children:[s.jsx(Z6,{children:s.jsxs(Rs,{onClick:()=>d(!0),children:[s.jsx(qr,{})," Nueva Especialidad"]})}),s.jsxs(k6,{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx(rm,{children:"Nombre"}),s.jsx(rm,{children:"Acciones"})]})}),s.jsx("tbody",{children:n.map(y=>s.jsxs("tr",{children:[s.jsx(um,{children:y.name}),s.jsx(um,{children:s.jsx(Li,{style:{cursor:"pointer",color:"#e74c3c"},onClick:()=>{window.confirm(`Eliminar ${y.name}?`)&&o(y.id)}})})]},y.id))})]}),u&&s.jsxs(s.Fragment,{children:[s.jsx(F6,{onClick:()=>d(!1)}),s.jsxs(K6,{children:[s.jsx("h3",{children:"Nueva Especialidad"}),s.jsx(J6,{placeholder:"Nombre de Especialidad",value:h,onChange:y=>p(y.target.value)}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px",marginTop:"15px"},children:[s.jsx(Rs,{style:{background:"#ccc"},onClick:()=>d(!1),children:"Cancelar"}),s.jsx(Rs,{onClick:x,children:"Guardar"})]})]})]})]})},I6=b.div`
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
`,P6=b.h2`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
`,eb=b.div`
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
`,gr=b.button`
    background: ${({active:n,theme:r})=>n?r.colors.primary:"transparent"};
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
        background: ${({active:n,theme:r})=>n?r.colors.primary:"#e9ecef"};
        transform: translateY(-2px);
    }
`,tb=()=>{const[n,r]=O.useState("doctors");return s.jsxs(I6,{children:[s.jsx(P6,{children:"Panel de Administración"}),s.jsxs(eb,{children:[s.jsxs(gr,{active:n==="doctors",onClick:()=>r("doctors"),children:[s.jsx(wn,{size:20})," Médicos"]}),s.jsxs(gr,{active:n==="patients",onClick:()=>r("patients"),children:[s.jsx(ax,{size:20})," Pacientes"]}),s.jsxs(gr,{active:n==="appointments",onClick:()=>r("appointments"),children:[s.jsx(Ui,{size:20})," Turnos"]}),s.jsxs(gr,{active:n==="specialties",onClick:()=>r("specialties"),children:[s.jsx(Ui,{size:20})," Especialidades"]})]}),n==="doctors"&&s.jsx(A6,{}),n==="patients"&&s.jsx(U6,{}),n==="appointments"&&s.jsx(X6,{}),n==="specialties"&&s.jsx(W6,{})]})},ab=b.div`
  padding: ${({theme:n})=>n.spacing.xlarge} ${({theme:n})=>n.spacing.large};
  max-width: 1000px;
  margin: 0 auto;
`,nb=b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #eee;
  padding-bottom: 20px;
`,lb=b.h2`
  color: ${({theme:n})=>n.colors.secondary};
  margin: 0;
`,ib=b.span`
  color: #666;
  font-size: 1.1rem;
`,cb=b.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
`,rb=b.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: block;
  }
`,ub=b.thead`
  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: none;
  }
`,ob=b.tr`
   @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: block;
    background: white;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    border: 1px solid #eee;
  }
`,zi=b.th`
  background-color: #f8f9fa;
  color: ${({theme:n})=>n.colors.secondary};
  padding: 15px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #eee;
`,Ci=b.td`
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
`,sb=b.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
  
  ${({status:n})=>{switch(n){case"confirmado":return"background-color: #e8f5e9; color: #2e7d32;";case"cancelado":return"background-color: #ffebee; color: #c62828;";default:return"background-color: #fff3e0; color: #ef6c00;"}}}
`,Ds=b.button`
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
`,fb=()=>{const{appointments:n,updateAppointmentStatus:r,deleteAppointment:o}=Wt(),{user:u}=ca(),d=n.filter(p=>p.doctorId===u?.id),h=u?.name?u.name.startsWith("Dr.")||u.name.startsWith("Dra.")?u.name:`Dr. ${u.name}`:"Médico";return s.jsxs(ab,{children:[s.jsxs(nb,{children:[s.jsx(lb,{children:"Gestión de Turnos"}),s.jsx(ib,{children:h})]}),d.length>0?s.jsx(cb,{children:s.jsxs(rb,{children:[s.jsx(ub,{children:s.jsxs("tr",{children:[s.jsx(zi,{children:"Paciente"}),s.jsx(zi,{children:"Fecha y Hora"}),s.jsx(zi,{children:"Motivo"}),s.jsx(zi,{children:"Estado"}),s.jsx(zi,{children:"Acciones"})]})}),s.jsx("tbody",{children:d.map(p=>s.jsxs(ob,{children:[s.jsx(Ci,{"data-label":"Paciente",children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",justifyContent:"flex-end"},children:[p.patientName," ",s.jsx(Gr,{style:{color:"#ccc"}})]})}),s.jsx(Ci,{"data-label":"Fecha y Hora",children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",fontSize:"0.9rem",alignItems:"flex-end"},children:[s.jsxs("span",{children:[p.date," ",s.jsx(cp,{size:12})]}),s.jsxs("span",{style:{color:"#666"},children:[p.time," ",s.jsx(Bi,{size:12})]})]})}),s.jsx(Ci,{"data-label":"Motivo",children:p.reason}),s.jsx(Ci,{"data-label":"Estado",children:s.jsx(sb,{status:p.status,children:p.status.charAt(0).toUpperCase()+p.status.slice(1)})}),s.jsx(Ci,{"data-label":"Acciones",children:s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[p.status==="pendiente"&&s.jsxs(s.Fragment,{children:[s.jsx(Ds,{color:"#2e7d32",bg:"#e8f5e9",title:"Confirmar",onClick:()=>r(p.id,"confirmado"),children:s.jsx(Kv,{})}),s.jsx(Ds,{color:"#c62828",bg:"#ffebee",title:"Cancelar",onClick:()=>r(p.id,"cancelado"),children:s.jsx(sp,{})})]}),p.status==="cancelado"&&s.jsx(Ds,{color:"#444",bg:"#eee",title:"Eliminar registro",onClick:()=>{window.confirm("¿Eliminar este turno cancelado?")&&o(p.id)},children:s.jsx(Li,{})})]})})]},p.id))})]})}):s.jsx("div",{style:{textAlign:"center",color:"#666",marginTop:"50px"},children:s.jsx("h3",{children:"No hay turnos asignados por el momento."})})]})},db=b.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing.xlarge} ${({theme:n})=>n.spacing.large};
`,hb=b.div`
  text-align: center;
  margin-bottom: 40px;
`,mb=b.h2`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 2rem;
  margin-bottom: 8px;
`,pb=b.p`
  color: #666;
  font-size: 1.1rem;
`,gb=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`,_s=b.div`
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
`,Ns=b.div`
  font-size: 3rem;
  color: ${({theme:n})=>n.colors.primary};
  margin-bottom: 16px;
`,Us=b.h3`
  color: ${({theme:n})=>n.colors.secondary};
  margin-bottom: 8px;
  font-size: 1.3rem;
`,Hs=b.p`
  color: #777;
  font-size: 0.9rem;
`,yb=()=>{const{user:n}=ca(),r=Rt();return s.jsxs(db,{children:[s.jsxs(hb,{children:[s.jsxs(mb,{children:["¡Hola, ",n?.name||"Paciente","!"]}),s.jsx(pb,{children:"¿Cómo podemos ayudarte hoy?"})]}),s.jsxs(gb,{children:[s.jsxs(_s,{onClick:()=>r("/especialidades"),children:[s.jsx(Ns,{children:s.jsx(kv,{})}),s.jsx(Us,{children:"Reservar Turno"}),s.jsx(Hs,{children:"Elegí especialidad y profesional"})]}),s.jsxs(_s,{onClick:()=>r("/mis-turnos"),children:[s.jsx(Ns,{children:s.jsx(Iv,{})}),s.jsx(Us,{children:"Mis Turnos"}),s.jsx(Hs,{children:"Ver turnos programados e historial"})]}),s.jsxs(_s,{onClick:()=>r("/perfil"),children:[s.jsx(Ns,{children:s.jsx(fp,{})}),s.jsx(Us,{children:"Mi Perfil"}),s.jsx(Hs,{children:"Actualizar datos personales"})]})]})]})},vb=b.div`
  padding: ${({theme:n})=>n.spacing.large} 0;
`,xb=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme:n})=>n.spacing.xlarge};
`,bb=b.button`
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
`,Sb=b.h2`
  text-align: center;
  color: ${({theme:n})=>n.colors.secondary};
  flex: 1;
`,jb=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({theme:n})=>n.spacing.large};
`,Eb=b.div`
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
`,zb=b.div`
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
`,Cb=b.div`
  padding: ${({theme:n})=>n.spacing.large};
  flex: 1;
  display: flex;
  flex-direction: column;
`,Tb=b.h3`
  margin: 0 0 ${({theme:n})=>n.spacing.small};
  color: ${({theme:n})=>n.colors.text};
`,Ab=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:n})=>n.colors.primary};
  font-weight: 500;
  margin-bottom: ${({theme:n})=>n.spacing.large};
`,Ob=b(Ma)`
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
`,wb=b.div`
    text-align: center;
    grid-column: 1 / -1;
    color: #666;
    font-size: 1.2rem;
    padding: 40px;
`,Mb=()=>{const{doctors:n}=Wt(),[r]=jv(),o=Rt(),u=r.get("specialty"),d=u?n.filter(h=>h.specialty===u&&h.approved!==!1):n.filter(h=>h.approved!==!1);return s.jsxs(vb,{children:[s.jsxs(xb,{children:[u&&s.jsxs(bb,{onClick:()=>o("/especialidades"),children:[s.jsx(Vv,{})," Volver"]}),s.jsx(Sb,{children:u?`Especialistas en ${u}`:"Nuestros Profesionales"}),s.jsx("div",{style:{width:"100px"}})," "]}),s.jsx(jb,{children:d.length>0?d.map(h=>s.jsxs(Eb,{children:[s.jsx(zb,{children:s.jsx("img",{src:h.image,alt:h.name})}),s.jsxs(Cb,{children:[s.jsx(Tb,{children:h.name}),s.jsxs(Ab,{children:[s.jsx(vf,{})," ",h.specialty]}),s.jsx(Ob,{to:`/medico/${h.id}`,children:"Solicitar Turno"})]})]},h.id)):s.jsxs(wb,{children:["No se encontraron profesionales para esta especialidad.",s.jsx("br",{}),s.jsx("br",{}),s.jsx(Ma,{to:"/especialidades",style:{color:"#2a9d8f"},children:"Ver otras especialidades"})]})})]})},om=b.div`
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`,Rb=b.div`
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
`,Db=b.div`
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
`,_b=b.div`
  flex: 1;
  text-align: center;
  
  @media (min-width: ${({theme:n})=>n.breakpoints.mobile}) {
    text-align: left;
  }
`,Nb=b.h2`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 2rem;
  margin-bottom: ${({theme:n})=>n.spacing.small};
`,Ub=b.p`
  color: ${({theme:n})=>n.colors.primary};
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${({theme:n})=>n.spacing.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
`,Hb=b.div`
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
`,$b=b.div`
  background: ${({theme:n})=>n.colors.white};
  border-radius: 12px;
  padding: ${({theme:n})=>n.spacing.large};
  box-shadow: 0 4px 6px rgba(0,0,0,0.04);
`,Bb=b.h3`
  color: ${({theme:n})=>n.colors.secondary};
  border-bottom: 2px solid ${({theme:n})=>n.colors.accent};
  padding-bottom: ${({theme:n})=>n.spacing.small};
  margin-bottom: ${({theme:n})=>n.spacing.large};
  display: flex;
  align-items: center;
  gap: 10px;
`,Lb=b.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
`,$s=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Bs=b.label`
  font-weight: 600;
  color: #555;
`,sm=b.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
`,Yb=b.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
`,qb=b.button`
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
`,Gb=b.p`
    color: #c62828;
    background: #ffebee;
    padding: 10px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
`,Vb=()=>{const{id:n}=R4(),r=Rt(),{doctors:o,checkAvailability:u,addAppointment:d}=Wt(),{user:h}=ca(),[p,x]=O.useState({date:"",time:"",reason:""}),[y,g]=O.useState(""),z=n&&o.length>0?o.find(T=>T.id===Number(n)):null,E=T=>{if(T.preventDefault(),g(""),!p.date||!p.time||!p.reason){g("Por favor complete todos los campos.");return}if(!u(n,p.date,p.time)){g("El médico no tiene disponibilidad en ese horario.");return}d({doctorId:Number(n),doctorName:z.name,patientName:h?.name||"Paciente",patientId:h?.id,patientEmail:h?.email,date:p.date,time:p.time,reason:p.reason}),r("/mis-turnos")};return z?s.jsxs(om,{children:[s.jsxs(Rb,{children:[s.jsx(Db,{children:z.image?s.jsx("img",{src:z.image,alt:z.name}):s.jsx(wn,{size:50})}),s.jsxs(_b,{children:[s.jsx(Nb,{children:z.name}),s.jsx(Ub,{children:z.specialty}),s.jsxs(Hb,{children:[s.jsxs("div",{children:[s.jsx(Bi,{}),s.jsx("span",{children:"Horarios: 08:00 - 20:00"})]}),s.jsxs("div",{children:[s.jsx(gf,{}),s.jsx("span",{children:z.email||"contacto@clinica.com"})]})]})]})]}),s.jsxs($b,{children:[s.jsxs(Bb,{children:[s.jsx(Zv,{}),"Solicitar Turno"]}),y&&s.jsxs(Gb,{children:[s.jsx(up,{})," ",y]}),s.jsxs(Lb,{onSubmit:E,children:[s.jsxs($s,{children:[s.jsx(Bs,{children:"Fecha"}),s.jsx(sm,{type:"date",min:new Date().toISOString().split("T")[0],value:p.date,onChange:T=>x({...p,date:T.target.value})})]}),s.jsxs($s,{children:[s.jsx(Bs,{children:"Horario"}),s.jsxs(Yb,{value:p.time,onChange:T=>x({...p,time:T.target.value}),disabled:!p.date,children:[s.jsx("option",{value:"",children:"Seleccione Horario"}),["09:00","10:00","11:30","14:00","16:00","17:30"].map(T=>{const _=p.date?u(n,p.date,T):!0;return s.jsxs("option",{value:T,disabled:!_,children:[T," ",p.date&&!_?"(Ocupado)":""]},T)})]})]}),s.jsxs($s,{children:[s.jsx(Bs,{children:"Motivo de Consulta"}),s.jsx(sm,{placeholder:"Ej: Dolor de cabeza, Chequeo...",value:p.reason,onChange:T=>x({...p,reason:T.target.value})})]}),s.jsx(qb,{type:"submit",children:"Confirmar Turno"})]})]})]}):s.jsx(om,{children:"Cargando información del médico..."})},Xb=b.div`
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`,Qb=b.div`
  background: ${({theme:n})=>n.colors.white};
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  padding: ${({theme:n})=>n.spacing.xlarge};
  position: relative;
  overflow: hidden;
`,Zb=b.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background-color: ${({status:n})=>n==="confirmado"?"#2e7d32":"#fbc02d"};
`,kb=b.div`
  text-align: center;
  margin-bottom: ${({theme:n})=>n.spacing.large};
`,Jb=b.span`
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
`,Kb=b.h2`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 1.8rem;
  margin: 0;
`,Fb=b.p`
  color: #777;
  font-size: 0.95rem;
  margin-top: ${({theme:n})=>n.spacing.small};
`,Wb=b.div`
  display: grid;
  gap: ${({theme:n})=>n.spacing.large};
  margin-top: ${({theme:n})=>n.spacing.xlarge};
`,Ls=b.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: ${({theme:n})=>n.spacing.medium};
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`,Ys=b.div`
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
`,qs=b.div`
  display: flex;
  flex-direction: column;
`,Gs=b.span`
  font-size: 0.85rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 4px;
`,Vs=b.span`
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
`,Ca={id:12345,status:"confirmado",doctor:"Dr. Gregory House",specialty:"Diagnóstico Clínico",date:"Jueves 8 de Junio",time:"09:00 hs",reason:"Consulta de control y seguimiento de tratamiento."},Ib=()=>s.jsx(Xb,{children:s.jsxs(Qb,{children:[s.jsx(Zb,{status:Ca.status}),s.jsxs(kb,{children:[s.jsxs(Jb,{status:Ca.status,children:[s.jsx(Jv,{})," ",Ca.status]}),s.jsx(Kb,{children:"Detalle del Turno"}),s.jsxs(Fb,{children:["Código de reserva: #",Ca.id]})]}),s.jsxs(Wb,{children:[s.jsxs(Ls,{children:[s.jsx(Ys,{children:s.jsx(wn,{})}),s.jsxs(qs,{children:[s.jsx(Gs,{children:"Profesional"}),s.jsx(Vs,{children:Ca.doctor}),s.jsx("span",{style:{fontSize:"0.9rem",color:"#666"},children:Ca.specialty})]})]}),s.jsxs(Ls,{children:[s.jsx(Ys,{children:s.jsx(cp,{})}),s.jsxs(qs,{children:[s.jsx(Gs,{children:"Fecha y Hora"}),s.jsxs(Vs,{children:[Ca.date," - ",Ca.time]})]})]}),s.jsxs(Ls,{children:[s.jsx(Ys,{children:s.jsx(op,{})}),s.jsxs(qs,{children:[s.jsx(Gs,{children:"Motivo de Consulta"}),s.jsx(Vs,{children:Ca.reason})]})]})]})]})}),Pb=b.div`
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  max-width: 1000px;
  margin: 0 auto;
`,e3=b.div`
  text-align: center;
  margin-bottom: ${({theme:n})=>n.spacing.xlarge};
`,t3=b.h1`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 2.5rem;
  margin-bottom: ${({theme:n})=>n.spacing.medium};
`,a3=b.p`
  color: #666;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`,fm=b.div`
  margin: ${({theme:n})=>n.spacing.xlarge} 0;
`,dm=b.h2`
  color: ${({theme:n})=>n.colors.primary};
  font-size: 1.8rem;
  margin-bottom: ${({theme:n})=>n.spacing.large};
  text-align: center;
`,n3=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({theme:n})=>n.spacing.large};
  margin-top: ${({theme:n})=>n.spacing.large};
`,Ti=b.div`
  background: white;
  padding: ${({theme:n})=>n.spacing.large};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`,yr=b.div`
  font-size: 3rem;
  color: ${({theme:n})=>n.colors.primary};
  margin-bottom: ${({theme:n})=>n.spacing.medium};
`,vr=b.h3`
  color: ${({theme:n})=>n.colors.secondary};
  margin-bottom: ${({theme:n})=>n.spacing.small};
`,Ai=b.p`
  color: #666;
  line-height: 1.5;
`,l3=()=>s.jsxs(Pb,{children:[s.jsxs(e3,{children:[s.jsx(t3,{children:"Acerca de Nosotros"}),s.jsx(a3,{children:"Clínica Azahares es un centro de salud integral comprometido con brindar atención médica de excelencia a nuestra comunidad. Nuestro equipo de profesionales altamente capacitados trabaja día a día para cuidar tu salud y bienestar."})]}),s.jsxs(fm,{children:[s.jsx(dm,{children:"Nuestros Valores"}),s.jsxs(n3,{children:[s.jsxs(Ti,{children:[s.jsx(yr,{children:s.jsx(Fv,{})}),s.jsx(vr,{children:"Compromiso"}),s.jsx(Ai,{children:"Nos dedicamos plenamente al cuidado y bienestar de nuestros pacientes."})]}),s.jsxs(Ti,{children:[s.jsx(yr,{children:s.jsx(wn,{})}),s.jsx(vr,{children:"Profesionalismo"}),s.jsx(Ai,{children:"Contamos con un equipo médico altamente calificado y en constante actualización."})]}),s.jsxs(Ti,{children:[s.jsx(yr,{children:s.jsx(Xv,{})}),s.jsx(vr,{children:"Excelencia"}),s.jsx(Ai,{children:"Nos esforzamos por ofrecer servicios de la más alta calidad en cada consulta."})]}),s.jsxs(Ti,{children:[s.jsx(yr,{children:s.jsx(Bi,{})}),s.jsx(vr,{children:"Disponibilidad"}),s.jsx(Ai,{children:"Horarios flexibles y atención personalizada para adaptarnos a tus necesidades."})]})]})]}),s.jsxs(fm,{children:[s.jsx(dm,{children:"Nuestra Misión"}),s.jsx(Ti,{children:s.jsx(Ai,{style:{fontSize:"1.1rem",textAlign:"left"},children:"Proveer servicios de salud integrales, accesibles y de calidad a nuestra comunidad, trabajando con un enfoque humano y tecnología de punta. Nos comprometemos a estar cerca de vos en cada etapa de tu vida, brindando atención médica personalizada que te permita vivir de manera más saludable y plena."})})]})]}),i3=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${({theme:n})=>n.spacing.xlarge};
  text-align: center;
`,c3=b.div`
  font-size: 6rem;
  color: ${({theme:n})=>n.colors.primary};
  margin-bottom: ${({theme:n})=>n.spacing.large};
  opacity: 0.3;
`,r3=b.h1`
  color: ${({theme:n})=>n.colors.secondary};
  font-size: 4rem;
  margin-bottom: ${({theme:n})=>n.spacing.medium};
`,u3=b.h2`
  color: #666;
  font-size: 1.5rem;
  margin-bottom: ${({theme:n})=>n.spacing.large};
`,o3=b.p`
  color: #888;
  font-size: 1.1rem;
  margin-bottom: ${({theme:n})=>n.spacing.xlarge};
  max-width: 500px;
`,s3=b.button`
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
`,f3=()=>{const n=Rt();return s.jsxs(i3,{children:[s.jsx(c3,{children:s.jsx(up,{})}),s.jsx(r3,{children:"404"}),s.jsx(u3,{children:"Página No Encontrada"}),s.jsx(o3,{children:"Lo sentimos, la página que estás buscando no existe o ha sido movida."}),s.jsx(s3,{onClick:()=>n("/"),children:"Volver al Inicio"})]})},d3=b.div`
  padding: ${({theme:n})=>n.spacing.xlarge} 0;
  max-width: 800px;
  margin: 0 auto;
`,h3=b.h2`
  text-align: center;
  color: ${({theme:n})=>n.colors.secondary};
  margin-bottom: 40px;
`,m3=b.div`
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
`,p3=b.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,g3=b.h3`
    margin: 0;
    color: #333;
    font-size: 1.1rem;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        font-size: 1.3rem;
    }
`,y3=b.div`
    color: #666;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        font-size: 1.1rem;
    }
`,v3=b.p`
    color: #888;
    font-size: 0.9rem;
    margin: 5px 0 0 0;
    font-style: italic;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
        font-size: 1.05rem;
    }
`,x3=b.span`
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
`,b3=b.div`
    text-align: center;
    color: #999;
    margin-top: 50px;
`,S3=()=>{const{appointments:n}=Wt(),{user:r}=ca(),o=n.filter(u=>r?.id&&u.patientId===r.id||r?.email&&u.patientEmail===r.email||r?.name&&u.patientName===r.name);return s.jsxs(d3,{children:[s.jsx(h3,{children:"Mis Turnos Programados"}),o.length>0?o.map(u=>s.jsxs(m3,{children:[s.jsxs(p3,{children:[s.jsxs(g3,{children:[s.jsx(wn,{style:{marginRight:8}}),u.doctorName||"Dr. Desconocido"]}),s.jsxs(y3,{children:[s.jsx(Ui,{})," ",u.date,s.jsx(Bi,{style:{marginLeft:10}})," ",u.time]}),s.jsxs(v3,{children:['"',u.reason,'"']})]}),s.jsx(x3,{children:u.status})]},u.id)):s.jsxs(b3,{children:[s.jsx("h3",{children:"No tenés turnos programados."}),s.jsx("p",{children:'Utilizá la opción "Reservar Turno" para agendar una cita.'})]})]})},j3=b.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${({theme:n})=>n.spacing.xlarge} ${({theme:n})=>n.spacing.medium};
  text-align: center;
`,E3=b.div`
  margin-bottom: 40px;
`,z3=b.div`
  font-size: 3.5rem;
  color: ${({theme:n})=>n.colors.primary}; /* Teal/Green */
  margin-bottom: 10px;
`,C3=b.h2`
  color: ${({theme:n})=>n.colors.primary};
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 10px;
`,T3=b.p`
  color: #666;
  font-size: 1rem;
`,A3=b.h3`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: #333;
`,O3=b.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 15px;
`,w3=b.button`
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
`,M3=()=>{const n=Rt(),{specialties:r}=Wt(),o=u=>{n(`/profesionales?specialty=${encodeURIComponent(u)}`)};return s.jsxs(j3,{children:[s.jsxs(E3,{children:[s.jsx(z3,{children:s.jsx(Ui,{})}),s.jsx(C3,{children:"Reservar Turno"}),s.jsx(T3,{children:"Turno Presencial"})]}),s.jsx(A3,{children:"Elige una especialidad:"}),s.jsx(O3,{children:r.map(u=>s.jsx(w3,{onClick:()=>o(u.name),children:u.name},u.id))})]})};function R3(){return s.jsxs(Qy,{theme:Ov,children:[s.jsx(wv,{}),s.jsx(Rv,{children:s.jsx(Dv,{children:s.jsx(yv,{basename:"/proyecto-clinica-rolling",children:s.jsx(jx,{children:s.jsxs(Z4,{children:[s.jsx(ct,{path:"/",element:s.jsx(Gx,{})}),s.jsx(ct,{path:"/register",element:s.jsx(i6,{})}),s.jsx(ct,{path:"/register/paciente",element:s.jsx(d6,{})}),s.jsx(ct,{path:"/register/medico",element:s.jsx(x6,{})}),s.jsx(ct,{path:"/login",element:s.jsx(Ix,{})}),s.jsx(ct,{path:"/admin",element:s.jsx(zn,{requiredRole:"admin",children:s.jsx(tb,{})})}),s.jsx(ct,{path:"/turnos-medico",element:s.jsx(zn,{requiredRole:"medico",children:s.jsx(fb,{})})}),s.jsx(ct,{path:"/menu-paciente",element:s.jsx(zn,{requiredRole:"paciente",children:s.jsx(yb,{})})}),s.jsx(ct,{path:"/mis-turnos",element:s.jsx(zn,{requiredRole:"paciente",children:s.jsx(S3,{})})}),s.jsx(ct,{path:"/especialidades",element:s.jsx(zn,{requiredRole:"paciente",children:s.jsx(M3,{})})}),s.jsx(ct,{path:"/profesionales",element:s.jsx(zn,{requiredRole:"paciente",children:s.jsx(Mb,{})})}),s.jsx(ct,{path:"/medico/:id",element:s.jsx(zn,{requiredRole:"paciente",children:s.jsx(Vb,{})})}),s.jsx(ct,{path:"/turno",element:s.jsx(Ib,{})}),s.jsx(ct,{path:"/nosotros",element:s.jsx(l3,{})}),s.jsx(ct,{path:"*",element:s.jsx(f3,{})})]})})})})})]})}Qg.createRoot(document.getElementById("root")).render(s.jsx(O.StrictMode,{children:s.jsx(R3,{})}));
