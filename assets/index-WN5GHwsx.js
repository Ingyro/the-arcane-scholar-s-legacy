(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function zl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Me={},qr=[],tn=()=>{},n_=()=>!1,zo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Wl=n=>n.startsWith("onUpdate:"),At=Object.assign,Gl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},r_=Object.prototype.hasOwnProperty,xe=(n,e)=>r_.call(n,e),de=Array.isArray,Hr=n=>Wo(n)==="[object Map]",Zd=n=>Wo(n)==="[object Set]",_e=n=>typeof n=="function",Ye=n=>typeof n=="string",ar=n=>typeof n=="symbol",$e=n=>n!==null&&typeof n=="object",ef=n=>($e(n)||_e(n))&&_e(n.then)&&_e(n.catch),tf=Object.prototype.toString,Wo=n=>tf.call(n),s_=n=>Wo(n).slice(8,-1),nf=n=>Wo(n)==="[object Object]",Kl=n=>Ye(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$s=zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Go=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},i_=/-(\w)/g,Xn=Go(n=>n.replace(i_,(e,t)=>t?t.toUpperCase():"")),o_=/\B([A-Z])/g,Cr=Go(n=>n.replace(o_,"-$1").toLowerCase()),rf=Go(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ma=Go(n=>n?`on${rf(n)}`:""),Wn=(n,e)=>!Object.is(n,e),io=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ol=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},al=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ju;const Ko=()=>Ju||(Ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ql(n){if(de(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ye(r)?u_(r):Ql(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(n)||$e(n))return n}const a_=/;(?![^(]*\))/g,l_=/:([^]+)/,c_=/\/\*[^]*?\*\//g;function u_(n){const e={};return n.replace(c_,"").split(a_).forEach(t=>{if(t){const r=t.split(l_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Z(n){let e="";if(Ye(n))e=n;else if(de(n))for(let t=0;t<n.length;t++){const r=Z(n[t]);r&&(e+=r+" ")}else if($e(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const h_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",d_=zl(h_);function sf(n){return!!n||n===""}const of=n=>!!(n&&n.__v_isRef===!0),Se=n=>Ye(n)?n:n==null?"":de(n)||$e(n)&&(n.toString===tf||!_e(n.toString))?of(n)?Se(n.value):JSON.stringify(n,af,2):String(n),af=(n,e)=>of(e)?af(n,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[La(r,i)+" =>"]=s,t),{})}:Zd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>La(t))}:ar(e)?La(e):$e(e)&&!de(e)&&!nf(e)?String(e):e,La=(n,e="")=>{var t;return ar(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class f_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=St;try{return St=this,e()}finally{St=t}}}on(){++this._on===1&&(this.prevScope=St,St=this)}off(){this._on>0&&--this._on===0&&(St=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function p_(){return St}let Le;const Fa=new WeakSet;class lf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,St&&St.active&&St.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fa.has(this)&&(Fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||uf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yu(this),hf(this);const e=Le,t=Wt;Le=this,Wt=!0;try{return this.fn()}finally{df(this),Le=e,Wt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xl(e);this.deps=this.depsTail=void 0,Yu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ll(this)&&this.run()}get dirty(){return ll(this)}}let cf=0,js,qs;function uf(n,e=!1){if(n.flags|=8,e){n.next=qs,qs=n;return}n.next=js,js=n}function Jl(){cf++}function Yl(){if(--cf>0)return;if(qs){let e=qs;for(qs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;js;){let e=js;for(js=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function hf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function df(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Xl(r),g_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function ll(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ff(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ff(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ni)||(n.globalVersion=ni,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ll(n))))return;n.flags|=2;const e=n.dep,t=Le,r=Wt;Le=n,Wt=!0;try{hf(n);const s=n.fn(n._value);(e.version===0||Wn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=t,Wt=r,df(n),n.flags&=-3}}function Xl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Xl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function g_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Wt=!0;const pf=[];function bn(){pf.push(Wt),Wt=!1}function An(){const n=pf.pop();Wt=n===void 0?!0:n}function Yu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Le;Le=void 0;try{e()}finally{Le=t}}}let ni=0;class m_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Le||!Wt||Le===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Le)t=this.activeLink=new m_(Le,this),Le.deps?(t.prevDep=Le.depsTail,Le.depsTail.nextDep=t,Le.depsTail=t):Le.deps=Le.depsTail=t,gf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Le.depsTail,t.nextDep=void 0,Le.depsTail.nextDep=t,Le.depsTail=t,Le.deps===t&&(Le.deps=r)}return t}trigger(e){this.version++,ni++,this.notify(e)}notify(e){Jl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Yl()}}}function gf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)gf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const cl=new WeakMap,wr=Symbol(""),ul=Symbol(""),ri=Symbol("");function mt(n,e,t){if(Wt&&Le){let r=cl.get(n);r||cl.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Zl),s.map=r,s.key=t),s.track()}}function gn(n,e,t,r,s,i){const a=cl.get(n);if(!a){ni++;return}const l=c=>{c&&c.trigger()};if(Jl(),e==="clear")a.forEach(l);else{const c=de(n),h=c&&Kl(t);if(c&&t==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===ri||!ar(m)&&m>=d)&&l(p)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(ri)),e){case"add":c?h&&l(a.get("length")):(l(a.get(wr)),Hr(n)&&l(a.get(ul)));break;case"delete":c||(l(a.get(wr)),Hr(n)&&l(a.get(ul)));break;case"set":Hr(n)&&l(a.get(wr));break}}Yl()}function Mr(n){const e=Pe(n);return e===n?e:(mt(e,"iterate",ri),Bt(n)?e:e.map(lt))}function Qo(n){return mt(n=Pe(n),"iterate",ri),n}const __={__proto__:null,[Symbol.iterator](){return Ua(this,Symbol.iterator,lt)},concat(...n){return Mr(this).concat(...n.map(e=>de(e)?Mr(e):e))},entries(){return Ua(this,"entries",n=>(n[1]=lt(n[1]),n))},every(n,e){return fn(this,"every",n,e,void 0,arguments)},filter(n,e){return fn(this,"filter",n,e,t=>t.map(lt),arguments)},find(n,e){return fn(this,"find",n,e,lt,arguments)},findIndex(n,e){return fn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return fn(this,"findLast",n,e,lt,arguments)},findLastIndex(n,e){return fn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return fn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ba(this,"includes",n)},indexOf(...n){return Ba(this,"indexOf",n)},join(n){return Mr(this).join(n)},lastIndexOf(...n){return Ba(this,"lastIndexOf",n)},map(n,e){return fn(this,"map",n,e,void 0,arguments)},pop(){return Vs(this,"pop")},push(...n){return Vs(this,"push",n)},reduce(n,...e){return Xu(this,"reduce",n,e)},reduceRight(n,...e){return Xu(this,"reduceRight",n,e)},shift(){return Vs(this,"shift")},some(n,e){return fn(this,"some",n,e,void 0,arguments)},splice(...n){return Vs(this,"splice",n)},toReversed(){return Mr(this).toReversed()},toSorted(n){return Mr(this).toSorted(n)},toSpliced(...n){return Mr(this).toSpliced(...n)},unshift(...n){return Vs(this,"unshift",n)},values(){return Ua(this,"values",lt)}};function Ua(n,e,t){const r=Qo(n),s=r[e]();return r!==n&&!Bt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const y_=Array.prototype;function fn(n,e,t,r,s,i){const a=Qo(n),l=a!==n&&!Bt(n),c=a[e];if(c!==y_[e]){const p=c.apply(n,i);return l?lt(p):p}let h=t;a!==n&&(l?h=function(p,m){return t.call(this,lt(p),m,n)}:t.length>2&&(h=function(p,m){return t.call(this,p,m,n)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Xu(n,e,t,r){const s=Qo(n);let i=t;return s!==n&&(Bt(n)?t.length>3&&(i=function(a,l,c){return t.call(this,a,l,c,n)}):i=function(a,l,c){return t.call(this,a,lt(l),c,n)}),s[e](i,...r)}function Ba(n,e,t){const r=Pe(n);mt(r,"iterate",ri);const s=r[e](...t);return(s===-1||s===!1)&&rc(t[0])?(t[0]=Pe(t[0]),r[e](...t)):s}function Vs(n,e,t=[]){bn(),Jl();const r=Pe(n)[e].apply(n,t);return Yl(),An(),r}const v_=zl("__proto__,__v_isRef,__isVue"),mf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ar));function w_(n){ar(n)||(n=String(n));const e=Pe(this);return mt(e,"has",n),e.hasOwnProperty(n)}class _f{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?x_:Tf:i?wf:vf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=de(e);if(!s){let c;if(a&&(c=__[t]))return c;if(t==="hasOwnProperty")return w_}const l=Reflect.get(e,t,yt(e)?e:r);return(ar(t)?mf.has(t):v_(t))||(s||mt(e,"get",t),i)?l:yt(l)?a&&Kl(t)?l:l.value:$e(l)?s?Ef(l):tc(l):l}}class yf extends _f{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=Zn(i);if(!Bt(r)&&!Zn(r)&&(i=Pe(i),r=Pe(r)),!de(e)&&yt(i)&&!yt(r))return c?!1:(i.value=r,!0)}const a=de(e)&&Kl(t)?Number(t)<e.length:xe(e,t),l=Reflect.set(e,t,r,yt(e)?e:s);return e===Pe(s)&&(a?Wn(r,i)&&gn(e,"set",t,r):gn(e,"add",t,r)),l}deleteProperty(e,t){const r=xe(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&gn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!ar(t)||!mf.has(t))&&mt(e,"has",t),r}ownKeys(e){return mt(e,"iterate",de(e)?"length":wr),Reflect.ownKeys(e)}}class T_ extends _f{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const E_=new yf,I_=new T_,b_=new yf(!0);const hl=n=>n,Ji=n=>Reflect.getPrototypeOf(n);function A_(n,e,t){return function(...r){const s=this.__v_raw,i=Pe(s),a=Hr(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),d=t?hl:e?wo:lt;return!e&&mt(i,"iterate",c?ul:wr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Yi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function S_(n,e){const t={get(s){const i=this.__v_raw,a=Pe(i),l=Pe(s);n||(Wn(s,l)&&mt(a,"get",s),mt(a,"get",l));const{has:c}=Ji(a),h=e?hl:n?wo:lt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&mt(Pe(s),"iterate",wr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Pe(i),l=Pe(s);return n||(Wn(s,l)&&mt(a,"has",s),mt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Pe(l),h=e?hl:n?wo:lt;return!n&&mt(c,"iterate",wr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return At(t,n?{add:Yi("add"),set:Yi("set"),delete:Yi("delete"),clear:Yi("clear")}:{add(s){!e&&!Bt(s)&&!Zn(s)&&(s=Pe(s));const i=Pe(this);return Ji(i).has.call(i,s)||(i.add(s),gn(i,"add",s,s)),this},set(s,i){!e&&!Bt(i)&&!Zn(i)&&(i=Pe(i));const a=Pe(this),{has:l,get:c}=Ji(a);let h=l.call(a,s);h||(s=Pe(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Wn(i,d)&&gn(a,"set",s,i):gn(a,"add",s,i),this},delete(s){const i=Pe(this),{has:a,get:l}=Ji(i);let c=a.call(i,s);c||(s=Pe(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&gn(i,"delete",s,void 0),h},clear(){const s=Pe(this),i=s.size!==0,a=s.clear();return i&&gn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=A_(s,n,e)}),t}function ec(n,e){const t=S_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(xe(t,s)&&s in r?t:r,s,i)}const C_={get:ec(!1,!1)},R_={get:ec(!1,!0)},P_={get:ec(!0,!1)};const vf=new WeakMap,wf=new WeakMap,Tf=new WeakMap,x_=new WeakMap;function k_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function V_(n){return n.__v_skip||!Object.isExtensible(n)?0:k_(s_(n))}function tc(n){return Zn(n)?n:nc(n,!1,E_,C_,vf)}function D_(n){return nc(n,!1,b_,R_,wf)}function Ef(n){return nc(n,!0,I_,P_,Tf)}function nc(n,e,t,r,s){if(!$e(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=V_(n);if(i===0)return n;const a=s.get(n);if(a)return a;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function zr(n){return Zn(n)?zr(n.__v_raw):!!(n&&n.__v_isReactive)}function Zn(n){return!!(n&&n.__v_isReadonly)}function Bt(n){return!!(n&&n.__v_isShallow)}function rc(n){return n?!!n.__v_raw:!1}function Pe(n){const e=n&&n.__v_raw;return e?Pe(e):n}function N_(n){return!xe(n,"__v_skip")&&Object.isExtensible(n)&&ol(n,"__v_skip",!0),n}const lt=n=>$e(n)?tc(n):n,wo=n=>$e(n)?Ef(n):n;function yt(n){return n?n.__v_isRef===!0:!1}function Oe(n){return O_(n,!1)}function O_(n,e){return yt(n)?n:new M_(n,e)}class M_{constructor(e,t){this.dep=new Zl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Pe(e),this._value=t?e:lt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Bt(e)||Zn(e);e=r?e:Pe(e),Wn(e,t)&&(this._rawValue=e,this._value=r?e:lt(e),this.dep.trigger())}}function Te(n){return yt(n)?n.value:n}const L_={get:(n,e,t)=>e==="__v_raw"?n:Te(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return yt(s)&&!yt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function If(n){return zr(n)?n:new Proxy(n,L_)}class F_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Zl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ni-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return uf(this,!0),!0}get value(){const e=this.dep.track();return ff(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function U_(n,e,t=!1){let r,s;return _e(n)?r=n:(r=n.get,s=n.set),new F_(r,s,t)}const Xi={},To=new WeakMap;let mr;function B_(n,e=!1,t=mr){if(t){let r=To.get(t);r||To.set(t,r=[]),r.push(n)}}function $_(n,e,t=Me){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=F=>s?F:Bt(F)||s===!1||s===0?mn(F,1):mn(F);let d,p,m,A,k=!1,O=!1;if(yt(n)?(p=()=>n.value,k=Bt(n)):zr(n)?(p=()=>h(n),k=!0):de(n)?(O=!0,k=n.some(F=>zr(F)||Bt(F)),p=()=>n.map(F=>{if(yt(F))return F.value;if(zr(F))return h(F);if(_e(F))return c?c(F,2):F()})):_e(n)?e?p=c?()=>c(n,2):n:p=()=>{if(m){bn();try{m()}finally{An()}}const F=mr;mr=d;try{return c?c(n,3,[A]):n(A)}finally{mr=F}}:p=tn,e&&s){const F=p,ne=s===!0?1/0:s;p=()=>mn(F(),ne)}const U=p_(),q=()=>{d.stop(),U&&U.active&&Gl(U.effects,d)};if(i&&e){const F=e;e=(...ne)=>{F(...ne),q()}}let L=O?new Array(n.length).fill(Xi):Xi;const P=F=>{if(!(!(d.flags&1)||!d.dirty&&!F))if(e){const ne=d.run();if(s||k||(O?ne.some((fe,E)=>Wn(fe,L[E])):Wn(ne,L))){m&&m();const fe=mr;mr=d;try{const E=[ne,L===Xi?void 0:O&&L[0]===Xi?[]:L,A];L=ne,c?c(e,3,E):e(...E)}finally{mr=fe}}}else d.run()};return l&&l(P),d=new lf(p),d.scheduler=a?()=>a(P,!1):P,A=F=>B_(F,!1,d),m=d.onStop=()=>{const F=To.get(d);if(F){if(c)c(F,4);else for(const ne of F)ne();To.delete(d)}},e?r?P(!0):L=d.run():a?a(P.bind(null,!0),!0):d.run(),q.pause=d.pause.bind(d),q.resume=d.resume.bind(d),q.stop=q,q}function mn(n,e=1/0,t){if(e<=0||!$e(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,yt(n))mn(n.value,e,t);else if(de(n))for(let r=0;r<n.length;r++)mn(n[r],e,t);else if(Zd(n)||Hr(n))n.forEach(r=>{mn(r,e,t)});else if(nf(n)){for(const r in n)mn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&mn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mi(n,e,t,r){try{return r?n(...r):n()}catch(s){Jo(s,e,t)}}function ln(n,e,t,r){if(_e(n)){const s=mi(n,e,t,r);return s&&ef(s)&&s.catch(i=>{Jo(i,e,t)}),s}if(de(n)){const s=[];for(let i=0;i<n.length;i++)s.push(ln(n[i],e,t,r));return s}}function Jo(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Me;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,c,h)===!1)return}l=l.parent}if(i){bn(),mi(i,null,10,[n,c,h]),An();return}}j_(n,t,s,r,a)}function j_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const It=[];let Xt=-1;const Wr=[];let Un=null,Lr=0;const bf=Promise.resolve();let Eo=null;function q_(n){const e=Eo||bf;return n?e.then(this?n.bind(this):n):e}function H_(n){let e=Xt+1,t=It.length;for(;e<t;){const r=e+t>>>1,s=It[r],i=si(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function sc(n){if(!(n.flags&1)){const e=si(n),t=It[It.length-1];!t||!(n.flags&2)&&e>=si(t)?It.push(n):It.splice(H_(e),0,n),n.flags|=1,Af()}}function Af(){Eo||(Eo=bf.then(Cf))}function z_(n){de(n)?Wr.push(...n):Un&&n.id===-1?Un.splice(Lr+1,0,n):n.flags&1||(Wr.push(n),n.flags|=1),Af()}function Zu(n,e,t=Xt+1){for(;t<It.length;t++){const r=It[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;It.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Sf(n){if(Wr.length){const e=[...new Set(Wr)].sort((t,r)=>si(t)-si(r));if(Wr.length=0,Un){Un.push(...e);return}for(Un=e,Lr=0;Lr<Un.length;Lr++){const t=Un[Lr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Un=null,Lr=0}}const si=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Cf(n){try{for(Xt=0;Xt<It.length;Xt++){const e=It[Xt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xt<It.length;Xt++){const e=It[Xt];e&&(e.flags&=-2)}Xt=-1,It.length=0,Sf(),Eo=null,(It.length||Wr.length)&&Cf()}}let Ut=null,Rf=null;function Io(n){const e=Ut;return Ut=n,Rf=n&&n.type.__scopeId||null,e}function W_(n,e=Ut,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&lh(-1);const i=Io(e);let a;try{a=n(...s)}finally{Io(i),r._d&&lh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function G_(n,e){if(Ut===null)return n;const t=ea(Ut),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Me]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&mn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function pr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(bn(),ln(c,t,8,[n.el,l,n,e]),An())}}const K_=Symbol("_vte"),Q_=n=>n.__isTeleport;function ic(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ic(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Pf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Hs(n,e,t,r,s=!1){if(de(n)){n.forEach((k,O)=>Hs(k,e&&(de(e)?e[O]:e),t,r,s));return}if(zs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Hs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ea(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,d=l.refs===Me?l.refs={}:l.refs,p=l.setupState,m=Pe(p),A=p===Me?()=>!1:k=>xe(m,k);if(h!=null&&h!==c&&(Ye(h)?(d[h]=null,A(h)&&(p[h]=null)):yt(h)&&(h.value=null)),_e(c))mi(c,l,12,[a,d]);else{const k=Ye(c),O=yt(c);if(k||O){const U=()=>{if(n.f){const q=k?A(c)?p[c]:d[c]:c.value;s?de(q)&&Gl(q,i):de(q)?q.includes(i)||q.push(i):k?(d[c]=[i],A(c)&&(p[c]=d[c])):(c.value=[i],n.k&&(d[n.k]=c.value))}else k?(d[c]=a,A(c)&&(p[c]=a)):O&&(c.value=a,n.k&&(d[n.k]=a))};a?(U.id=-1,kt(U,t)):U()}}}Ko().requestIdleCallback;Ko().cancelIdleCallback;const zs=n=>!!n.type.__asyncLoader,xf=n=>n.type.__isKeepAlive;function J_(n,e){kf(n,"a",e)}function Y_(n,e){kf(n,"da",e)}function kf(n,e,t=bt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Yo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)xf(s.parent.vnode)&&X_(r,e,t,s),s=s.parent}}function X_(n,e,t,r){const s=Yo(e,n,r,!0);oc(()=>{Gl(r[e],s)},t)}function Yo(n,e,t=bt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{bn();const l=yi(t),c=ln(e,t,n,a);return l(),An(),c});return r?s.unshift(i):s.push(i),i}}const kn=n=>(e,t=bt)=>{(!oi||n==="sp")&&Yo(n,(...r)=>e(...r),t)},Z_=kn("bm"),_i=kn("m"),ey=kn("bu"),ty=kn("u"),ny=kn("bum"),oc=kn("um"),ry=kn("sp"),sy=kn("rtg"),iy=kn("rtc");function oy(n,e=bt){Yo("ec",n,e)}const ay=Symbol.for("v-ndc");function ac(n,e,t,r){let s;const i=t,a=de(n);if(a||Ye(n)){const l=a&&zr(n);let c=!1,h=!1;l&&(c=!Bt(n),h=Zn(n),n=Qo(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(c?h?wo(lt(n[d])):lt(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if($e(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(n[d],d,c,i)}}else s=[];return s}const dl=n=>n?Xf(n)?ea(n):dl(n.parent):null,Ws=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>dl(n.parent),$root:n=>dl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Df(n),$forceUpdate:n=>n.f||(n.f=()=>{sc(n.update)}),$nextTick:n=>n.n||(n.n=q_.bind(n.proxy)),$watch:n=>Py.bind(n)}),$a=(n,e)=>n!==Me&&!n.__isScriptSetup&&xe(n,e),ly={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;let h;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if($a(r,e))return a[e]=1,r[e];if(s!==Me&&xe(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&xe(h,e))return a[e]=3,i[e];if(t!==Me&&xe(t,e))return a[e]=4,t[e];fl&&(a[e]=0)}}const d=Ws[e];let p,m;if(d)return e==="$attrs"&&mt(n.attrs,"get",""),d(n);if((p=l.__cssModules)&&(p=p[e]))return p;if(t!==Me&&xe(t,e))return a[e]=4,t[e];if(m=c.config.globalProperties,xe(m,e))return m[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return $a(s,e)?(s[e]=t,!0):r!==Me&&xe(r,e)?(r[e]=t,!0):xe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!t[a]||n!==Me&&xe(n,a)||$a(e,a)||(l=i[0])&&xe(l,a)||xe(r,a)||xe(Ws,a)||xe(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:xe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function eh(n){return de(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let fl=!0;function cy(n){const e=Df(n),t=n.proxy,r=n.ctx;fl=!1,e.beforeCreate&&th(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:A,updated:k,activated:O,deactivated:U,beforeDestroy:q,beforeUnmount:L,destroyed:P,unmounted:F,render:ne,renderTracked:fe,renderTriggered:E,errorCaptured:y,serverPrefetch:v,expose:T,inheritAttrs:b,components:S,directives:_,filters:et}=e;if(h&&uy(h,r,null),a)for(const Ce in a){const ye=a[Ce];_e(ye)&&(r[Ce]=ye.bind(t))}if(s){const Ce=s.call(t,t);$e(Ce)&&(n.data=tc(Ce))}if(fl=!0,i)for(const Ce in i){const ye=i[Ce],Pt=_e(ye)?ye.bind(t,t):_e(ye.get)?ye.get.bind(t,t):tn,le=!_e(ye)&&_e(ye.set)?ye.set.bind(t):tn,ee=Kr({get:Pt,set:le});Object.defineProperty(r,Ce,{enumerable:!0,configurable:!0,get:()=>ee.value,set:H=>ee.value=H})}if(l)for(const Ce in l)Vf(l[Ce],r,t,Ce);if(c){const Ce=_e(c)?c.call(t):c;Reflect.ownKeys(Ce).forEach(ye=>{my(ye,Ce[ye])})}d&&th(d,n,"c");function De(Ce,ye){de(ye)?ye.forEach(Pt=>Ce(Pt.bind(t))):ye&&Ce(ye.bind(t))}if(De(Z_,p),De(_i,m),De(ey,A),De(ty,k),De(J_,O),De(Y_,U),De(oy,y),De(iy,fe),De(sy,E),De(ny,L),De(oc,F),De(ry,v),de(T))if(T.length){const Ce=n.exposed||(n.exposed={});T.forEach(ye=>{Object.defineProperty(Ce,ye,{get:()=>t[ye],set:Pt=>t[ye]=Pt,enumerable:!0})})}else n.exposed||(n.exposed={});ne&&n.render===tn&&(n.render=ne),b!=null&&(n.inheritAttrs=b),S&&(n.components=S),_&&(n.directives=_),v&&Pf(n)}function uy(n,e,t=tn){de(n)&&(n=pl(n));for(const r in n){const s=n[r];let i;$e(s)?"default"in s?i=oo(s.from||r,s.default,!0):i=oo(s.from||r):i=oo(s),yt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function th(n,e,t){ln(de(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Vf(n,e,t,r){let s=r.includes(".")?Wf(t,r):()=>t[r];if(Ye(n)){const i=e[n];_e(i)&&Gs(s,i)}else if(_e(n))Gs(s,n.bind(t));else if($e(n))if(de(n))n.forEach(i=>Vf(i,e,t,r));else{const i=_e(n.handler)?n.handler.bind(t):e[n.handler];_e(i)&&Gs(s,i,n)}}function Df(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>bo(c,h,a,!0)),bo(c,e,a)),$e(e)&&i.set(e,c),c}function bo(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&bo(n,i,t,!0),s&&s.forEach(a=>bo(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=hy[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const hy={data:nh,props:rh,emits:rh,methods:Os,computed:Os,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:Os,directives:Os,watch:fy,provide:nh,inject:dy};function nh(n,e){return e?n?function(){return At(_e(n)?n.call(this,this):n,_e(e)?e.call(this,this):e)}:e:n}function dy(n,e){return Os(pl(n),pl(e))}function pl(n){if(de(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Et(n,e){return n?[...new Set([].concat(n,e))]:e}function Os(n,e){return n?At(Object.create(null),n,e):e}function rh(n,e){return n?de(n)&&de(e)?[...new Set([...n,...e])]:At(Object.create(null),eh(n),eh(e??{})):e}function fy(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const r in e)t[r]=Et(n[r],e[r]);return t}function Nf(){return{app:null,config:{isNativeTag:n_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let py=0;function gy(n,e){return function(r,s=null){_e(r)||(r=At({},r)),s!=null&&!$e(s)&&(s=null);const i=Nf(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:py++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jy,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&_e(d.install)?(a.add(d),d.install(h,...p)):_e(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const A=h._ceVNode||Tn(r,s);return A.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(A,d,m),c=!0,h._container=d,d.__vue_app__=h,ea(A.component)}},onUnmount(d){l.push(d)},unmount(){c&&(ln(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Gr;Gr=h;try{return d()}finally{Gr=p}}};return h}}let Gr=null;function my(n,e){if(bt){let t=bt.provides;const r=bt.parent&&bt.parent.provides;r===t&&(t=bt.provides=Object.create(r)),t[n]=e}}function oo(n,e,t=!1){const r=Hy();if(r||Gr){let s=Gr?Gr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&_e(e)?e.call(r&&r.proxy):e}}const Of={},Mf=()=>Object.create(Of),Lf=n=>Object.getPrototypeOf(n)===Of;function _y(n,e,t,r=!1){const s={},i=Mf();n.propsDefaults=Object.create(null),Ff(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:D_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function yy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=Pe(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Xo(n.emitsOptions,m))continue;const A=e[m];if(c)if(xe(i,m))A!==i[m]&&(i[m]=A,h=!0);else{const k=Xn(m);s[k]=gl(c,l,k,A,n,!1)}else A!==i[m]&&(i[m]=A,h=!0)}}}else{Ff(n,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!xe(e,p)&&((d=Cr(p))===p||!xe(e,d)))&&(c?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=gl(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!xe(e,p))&&(delete i[p],h=!0)}h&&gn(n.attrs,"set","")}function Ff(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if($s(c))continue;const h=e[c];let d;s&&xe(s,d=Xn(c))?!i||!i.includes(d)?t[d]=h:(l||(l={}))[d]=h:Xo(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Pe(t),h=l||Me;for(let d=0;d<i.length;d++){const p=i[d];t[p]=gl(s,c,p,h[p],n,!xe(h,p))}}return a}function gl(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=xe(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&_e(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=yi(s);r=h[t]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Cr(t))&&(r=!0))}return r}const vy=new WeakMap;function Uf(n,e,t=!1){const r=t?vy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!_e(n)){const d=p=>{c=!0;const[m,A]=Uf(p,e,!0);At(a,m),A&&l.push(...A)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!c)return $e(n)&&r.set(n,qr),qr;if(de(i))for(let d=0;d<i.length;d++){const p=Xn(i[d]);sh(p)&&(a[p]=Me)}else if(i)for(const d in i){const p=Xn(d);if(sh(p)){const m=i[d],A=a[p]=de(m)||_e(m)?{type:m}:At({},m),k=A.type;let O=!1,U=!0;if(de(k))for(let q=0;q<k.length;++q){const L=k[q],P=_e(L)&&L.name;if(P==="Boolean"){O=!0;break}else P==="String"&&(U=!1)}else O=_e(k)&&k.name==="Boolean";A[0]=O,A[1]=U,(O||xe(A,"default"))&&l.push(p)}}const h=[a,l];return $e(n)&&r.set(n,h),h}function sh(n){return n[0]!=="$"&&!$s(n)}const lc=n=>n==="_"||n==="__"||n==="_ctx"||n==="$stable",cc=n=>de(n)?n.map(en):[en(n)],wy=(n,e,t)=>{if(e._n)return e;const r=W_((...s)=>cc(e(...s)),t);return r._c=!1,r},Bf=(n,e,t)=>{const r=n._ctx;for(const s in n){if(lc(s))continue;const i=n[s];if(_e(i))e[s]=wy(s,i,r);else if(i!=null){const a=cc(i);e[s]=()=>a}}},$f=(n,e)=>{const t=cc(e);n.slots.default=()=>t},jf=(n,e,t)=>{for(const r in e)(t||!lc(r))&&(n[r]=e[r])},Ty=(n,e,t)=>{const r=n.slots=Mf();if(n.vnode.shapeFlag&32){const s=e.__;s&&ol(r,"__",s,!0);const i=e._;i?(jf(r,e,t),t&&ol(r,"_",i,!0)):Bf(e,r)}else e&&$f(n,e)},Ey=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Me;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:jf(s,e,t):(i=!e.$stable,Bf(e,s)),a=e}else e&&($f(n,e),a={default:1});if(i)for(const l in s)!lc(l)&&a[l]==null&&delete s[l]},kt=My;function Iy(n){return by(n)}function by(n,e){const t=Ko();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:A=tn,insertStaticContent:k}=n,O=(w,I,x,$=null,M=null,B=null,Q=void 0,W=null,z=!!I.dynamicChildren)=>{if(w===I)return;w&&!Ds(w,I)&&($=Ge(w),H(w,M,B,!0),w=null),I.patchFlag===-2&&(z=!1,I.dynamicChildren=null);const{type:j,ref:re,shapeFlag:K}=I;switch(j){case Zo:U(w,I,x,$);break;case er:q(w,I,x,$);break;case qa:w==null&&L(I,x,$,Q);break;case Lt:S(w,I,x,$,M,B,Q,W,z);break;default:K&1?ne(w,I,x,$,M,B,Q,W,z):K&6?_(w,I,x,$,M,B,Q,W,z):(K&64||K&128)&&j.process(w,I,x,$,M,B,Q,W,z,Jt)}re!=null&&M?Hs(re,w&&w.ref,B,I||w,!I):re==null&&w&&w.ref!=null&&Hs(w.ref,null,B,w,!0)},U=(w,I,x,$)=>{if(w==null)r(I.el=l(I.children),x,$);else{const M=I.el=w.el;I.children!==w.children&&h(M,I.children)}},q=(w,I,x,$)=>{w==null?r(I.el=c(I.children||""),x,$):I.el=w.el},L=(w,I,x,$)=>{[w.el,w.anchor]=k(w.children,I,x,$,w.el,w.anchor)},P=({el:w,anchor:I},x,$)=>{let M;for(;w&&w!==I;)M=m(w),r(w,x,$),w=M;r(I,x,$)},F=({el:w,anchor:I})=>{let x;for(;w&&w!==I;)x=m(w),s(w),w=x;s(I)},ne=(w,I,x,$,M,B,Q,W,z)=>{I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),w==null?fe(I,x,$,M,B,Q,W,z):v(w,I,M,B,Q,W,z)},fe=(w,I,x,$,M,B,Q,W)=>{let z,j;const{props:re,shapeFlag:K,transition:te,dirs:ce}=w;if(z=w.el=a(w.type,B,re&&re.is,re),K&8?d(z,w.children):K&16&&y(w.children,z,null,$,M,ja(w,B),Q,W),ce&&pr(w,null,$,"created"),E(z,w,w.scopeId,Q,$),re){for(const me in re)me!=="value"&&!$s(me)&&i(z,me,null,re[me],B,$);"value"in re&&i(z,"value",null,re.value,B),(j=re.onVnodeBeforeMount)&&Yt(j,$,w)}ce&&pr(w,null,$,"beforeMount");const oe=Ay(M,te);oe&&te.beforeEnter(z),r(z,I,x),((j=re&&re.onVnodeMounted)||oe||ce)&&kt(()=>{j&&Yt(j,$,w),oe&&te.enter(z),ce&&pr(w,null,$,"mounted")},M)},E=(w,I,x,$,M)=>{if(x&&A(w,x),$)for(let B=0;B<$.length;B++)A(w,$[B]);if(M){let B=M.subTree;if(I===B||Kf(B.type)&&(B.ssContent===I||B.ssFallback===I)){const Q=M.vnode;E(w,Q,Q.scopeId,Q.slotScopeIds,M.parent)}}},y=(w,I,x,$,M,B,Q,W,z=0)=>{for(let j=z;j<w.length;j++){const re=w[j]=W?Bn(w[j]):en(w[j]);O(null,re,I,x,$,M,B,Q,W)}},v=(w,I,x,$,M,B,Q)=>{const W=I.el=w.el;let{patchFlag:z,dynamicChildren:j,dirs:re}=I;z|=w.patchFlag&16;const K=w.props||Me,te=I.props||Me;let ce;if(x&&gr(x,!1),(ce=te.onVnodeBeforeUpdate)&&Yt(ce,x,I,w),re&&pr(I,w,x,"beforeUpdate"),x&&gr(x,!0),(K.innerHTML&&te.innerHTML==null||K.textContent&&te.textContent==null)&&d(W,""),j?T(w.dynamicChildren,j,W,x,$,ja(I,M),B):Q||ye(w,I,W,null,x,$,ja(I,M),B,!1),z>0){if(z&16)b(W,K,te,x,M);else if(z&2&&K.class!==te.class&&i(W,"class",null,te.class,M),z&4&&i(W,"style",K.style,te.style,M),z&8){const oe=I.dynamicProps;for(let me=0;me<oe.length;me++){const Ie=oe[me],nt=K[Ie],rt=te[Ie];(rt!==nt||Ie==="value")&&i(W,Ie,nt,rt,M,x)}}z&1&&w.children!==I.children&&d(W,I.children)}else!Q&&j==null&&b(W,K,te,x,M);((ce=te.onVnodeUpdated)||re)&&kt(()=>{ce&&Yt(ce,x,I,w),re&&pr(I,w,x,"updated")},$)},T=(w,I,x,$,M,B,Q)=>{for(let W=0;W<I.length;W++){const z=w[W],j=I[W],re=z.el&&(z.type===Lt||!Ds(z,j)||z.shapeFlag&198)?p(z.el):x;O(z,j,re,null,$,M,B,Q,!0)}},b=(w,I,x,$,M)=>{if(I!==x){if(I!==Me)for(const B in I)!$s(B)&&!(B in x)&&i(w,B,I[B],null,M,$);for(const B in x){if($s(B))continue;const Q=x[B],W=I[B];Q!==W&&B!=="value"&&i(w,B,W,Q,M,$)}"value"in x&&i(w,"value",I.value,x.value,M)}},S=(w,I,x,$,M,B,Q,W,z)=>{const j=I.el=w?w.el:l(""),re=I.anchor=w?w.anchor:l("");let{patchFlag:K,dynamicChildren:te,slotScopeIds:ce}=I;ce&&(W=W?W.concat(ce):ce),w==null?(r(j,x,$),r(re,x,$),y(I.children||[],x,re,M,B,Q,W,z)):K>0&&K&64&&te&&w.dynamicChildren?(T(w.dynamicChildren,te,x,M,B,Q,W),(I.key!=null||M&&I===M.subTree)&&qf(w,I,!0)):ye(w,I,x,re,M,B,Q,W,z)},_=(w,I,x,$,M,B,Q,W,z)=>{I.slotScopeIds=W,w==null?I.shapeFlag&512?M.ctx.activate(I,x,$,Q,z):et(I,x,$,M,B,Q,z):Xe(w,I,z)},et=(w,I,x,$,M,B,Q)=>{const W=w.component=qy(w,$,M);if(xf(w)&&(W.ctx.renderer=Jt),zy(W,!1,Q),W.asyncDep){if(M&&M.registerDep(W,De,Q),!w.el){const z=W.subTree=Tn(er);q(null,z,I,x),w.placeholder=z.el}}else De(W,w,I,x,M,B,Q)},Xe=(w,I,x)=>{const $=I.component=w.component;if(Ny(w,I,x))if($.asyncDep&&!$.asyncResolved){Ce($,I,x);return}else $.next=I,$.update();else I.el=w.el,$.vnode=I},De=(w,I,x,$,M,B,Q)=>{const W=()=>{if(w.isMounted){let{next:K,bu:te,u:ce,parent:oe,vnode:me}=w;{const ht=Hf(w);if(ht){K&&(K.el=me.el,Ce(w,K,Q)),ht.asyncDep.then(()=>{w.isUnmounted||W()});return}}let Ie=K,nt;gr(w,!1),K?(K.el=me.el,Ce(w,K,Q)):K=me,te&&io(te),(nt=K.props&&K.props.onVnodeBeforeUpdate)&&Yt(nt,oe,K,me),gr(w,!0);const rt=oh(w),Ot=w.subTree;w.subTree=rt,O(Ot,rt,p(Ot.el),Ge(Ot),w,M,B),K.el=rt.el,Ie===null&&Oy(w,rt.el),ce&&kt(ce,M),(nt=K.props&&K.props.onVnodeUpdated)&&kt(()=>Yt(nt,oe,K,me),M)}else{let K;const{el:te,props:ce}=I,{bm:oe,m:me,parent:Ie,root:nt,type:rt}=w,Ot=zs(I);gr(w,!1),oe&&io(oe),!Ot&&(K=ce&&ce.onVnodeBeforeMount)&&Yt(K,Ie,I),gr(w,!0);{nt.ce&&nt.ce._def.shadowRoot!==!1&&nt.ce._injectChildStyle(rt);const ht=w.subTree=oh(w);O(null,ht,x,$,w,M,B),I.el=ht.el}if(me&&kt(me,M),!Ot&&(K=ce&&ce.onVnodeMounted)){const ht=I;kt(()=>Yt(K,Ie,ht),M)}(I.shapeFlag&256||Ie&&zs(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&w.a&&kt(w.a,M),w.isMounted=!0,I=x=$=null}};w.scope.on();const z=w.effect=new lf(W);w.scope.off();const j=w.update=z.run.bind(z),re=w.job=z.runIfDirty.bind(z);re.i=w,re.id=w.uid,z.scheduler=()=>sc(re),gr(w,!0),j()},Ce=(w,I,x)=>{I.component=w;const $=w.vnode.props;w.vnode=I,w.next=null,yy(w,I.props,$,x),Ey(w,I.children,x),bn(),Zu(w),An()},ye=(w,I,x,$,M,B,Q,W,z=!1)=>{const j=w&&w.children,re=w?w.shapeFlag:0,K=I.children,{patchFlag:te,shapeFlag:ce}=I;if(te>0){if(te&128){le(j,K,x,$,M,B,Q,W,z);return}else if(te&256){Pt(j,K,x,$,M,B,Q,W,z);return}}ce&8?(re&16&&Re(j,M,B),K!==j&&d(x,K)):re&16?ce&16?le(j,K,x,$,M,B,Q,W,z):Re(j,M,B,!0):(re&8&&d(x,""),ce&16&&y(K,x,$,M,B,Q,W,z))},Pt=(w,I,x,$,M,B,Q,W,z)=>{w=w||qr,I=I||qr;const j=w.length,re=I.length,K=Math.min(j,re);let te;for(te=0;te<K;te++){const ce=I[te]=z?Bn(I[te]):en(I[te]);O(w[te],ce,x,null,M,B,Q,W,z)}j>re?Re(w,M,B,!0,!1,K):y(I,x,$,M,B,Q,W,z,K)},le=(w,I,x,$,M,B,Q,W,z)=>{let j=0;const re=I.length;let K=w.length-1,te=re-1;for(;j<=K&&j<=te;){const ce=w[j],oe=I[j]=z?Bn(I[j]):en(I[j]);if(Ds(ce,oe))O(ce,oe,x,null,M,B,Q,W,z);else break;j++}for(;j<=K&&j<=te;){const ce=w[K],oe=I[te]=z?Bn(I[te]):en(I[te]);if(Ds(ce,oe))O(ce,oe,x,null,M,B,Q,W,z);else break;K--,te--}if(j>K){if(j<=te){const ce=te+1,oe=ce<re?I[ce].el:$;for(;j<=te;)O(null,I[j]=z?Bn(I[j]):en(I[j]),x,oe,M,B,Q,W,z),j++}}else if(j>te)for(;j<=K;)H(w[j],M,B,!0),j++;else{const ce=j,oe=j,me=new Map;for(j=oe;j<=te;j++){const st=I[j]=z?Bn(I[j]):en(I[j]);st.key!=null&&me.set(st.key,j)}let Ie,nt=0;const rt=te-oe+1;let Ot=!1,ht=0;const Nn=new Array(rt);for(j=0;j<rt;j++)Nn[j]=0;for(j=ce;j<=K;j++){const st=w[j];if(nt>=rt){H(st,M,B,!0);continue}let Mt;if(st.key!=null)Mt=me.get(st.key);else for(Ie=oe;Ie<=te;Ie++)if(Nn[Ie-oe]===0&&Ds(st,I[Ie])){Mt=Ie;break}Mt===void 0?H(st,M,B,!0):(Nn[Mt-oe]=j+1,Mt>=ht?ht=Mt:Ot=!0,O(st,I[Mt],x,null,M,B,Q,W,z),nt++)}const vs=Ot?Sy(Nn):qr;for(Ie=vs.length-1,j=rt-1;j>=0;j--){const st=oe+j,Mt=I[st],Ni=I[st+1],kr=st+1<re?Ni.el||Ni.placeholder:$;Nn[j]===0?O(null,Mt,x,kr,M,B,Q,W,z):Ot&&(Ie<0||j!==vs[Ie]?ee(Mt,x,kr,2):Ie--)}}},ee=(w,I,x,$,M=null)=>{const{el:B,type:Q,transition:W,children:z,shapeFlag:j}=w;if(j&6){ee(w.component.subTree,I,x,$);return}if(j&128){w.suspense.move(I,x,$);return}if(j&64){Q.move(w,I,x,Jt);return}if(Q===Lt){r(B,I,x);for(let K=0;K<z.length;K++)ee(z[K],I,x,$);r(w.anchor,I,x);return}if(Q===qa){P(w,I,x);return}if($!==2&&j&1&&W)if($===0)W.beforeEnter(B),r(B,I,x),kt(()=>W.enter(B),M);else{const{leave:K,delayLeave:te,afterLeave:ce}=W,oe=()=>{w.ctx.isUnmounted?s(B):r(B,I,x)},me=()=>{K(B,()=>{oe(),ce&&ce()})};te?te(B,oe,me):me()}else r(B,I,x)},H=(w,I,x,$=!1,M=!1)=>{const{type:B,props:Q,ref:W,children:z,dynamicChildren:j,shapeFlag:re,patchFlag:K,dirs:te,cacheIndex:ce}=w;if(K===-2&&(M=!1),W!=null&&(bn(),Hs(W,null,x,w,!0),An()),ce!=null&&(I.renderCache[ce]=void 0),re&256){I.ctx.deactivate(w);return}const oe=re&1&&te,me=!zs(w);let Ie;if(me&&(Ie=Q&&Q.onVnodeBeforeUnmount)&&Yt(Ie,I,w),re&6)Ve(w.component,x,$);else{if(re&128){w.suspense.unmount(x,$);return}oe&&pr(w,null,I,"beforeUnmount"),re&64?w.type.remove(w,I,x,Jt,$):j&&!j.hasOnce&&(B!==Lt||K>0&&K&64)?Re(j,I,x,!1,!0):(B===Lt&&K&384||!M&&re&16)&&Re(z,I,x),$&&X(w)}(me&&(Ie=Q&&Q.onVnodeUnmounted)||oe)&&kt(()=>{Ie&&Yt(Ie,I,w),oe&&pr(w,null,I,"unmounted")},x)},X=w=>{const{type:I,el:x,anchor:$,transition:M}=w;if(I===Lt){He(x,$);return}if(I===qa){F(w);return}const B=()=>{s(x),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(w.shapeFlag&1&&M&&!M.persisted){const{leave:Q,delayLeave:W}=M,z=()=>Q(x,B);W?W(w.el,B,z):z()}else B()},He=(w,I)=>{let x;for(;w!==I;)x=m(w),s(w),w=x;s(I)},Ve=(w,I,x)=>{const{bum:$,scope:M,job:B,subTree:Q,um:W,m:z,a:j,parent:re,slots:{__:K}}=w;ih(z),ih(j),$&&io($),re&&de(K)&&K.forEach(te=>{re.renderCache[te]=void 0}),M.stop(),B&&(B.flags|=8,H(Q,w,I,x)),W&&kt(W,I),kt(()=>{w.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Re=(w,I,x,$=!1,M=!1,B=0)=>{for(let Q=B;Q<w.length;Q++)H(w[Q],I,x,$,M)},Ge=w=>{if(w.shapeFlag&6)return Ge(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const I=m(w.anchor||w.el),x=I&&I[K_];return x?m(x):I};let jt=!1;const Di=(w,I,x)=>{w==null?I._vnode&&H(I._vnode,null,null,!0):O(I._vnode||null,w,I,null,null,null,x),I._vnode=w,jt||(jt=!0,Zu(),Sf(),jt=!1)},Jt={p:O,um:H,m:ee,r:X,mt:et,mc:y,pc:ye,pbc:T,n:Ge,o:n};return{render:Di,hydrate:void 0,createApp:gy(Di)}}function ja({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function gr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ay(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function qf(n,e,t=!1){const r=n.children,s=e.children;if(de(r)&&de(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Bn(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&qf(a,l)),l.type===Zo&&(l.el=a.el),l.type===er&&!l.el&&(l.el=a.el)}}function Sy(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Hf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hf(e)}function ih(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Cy=Symbol.for("v-scx"),Ry=()=>oo(Cy);function Gs(n,e,t){return zf(n,e,t)}function zf(n,e,t=Me){const{immediate:r,deep:s,flush:i,once:a}=t,l=At({},t),c=e&&r||!e&&i!=="post";let h;if(oi){if(i==="sync"){const A=Ry();h=A.__watcherHandles||(A.__watcherHandles=[])}else if(!c){const A=()=>{};return A.stop=tn,A.resume=tn,A.pause=tn,A}}const d=bt;l.call=(A,k,O)=>ln(A,d,k,O);let p=!1;i==="post"?l.scheduler=A=>{kt(A,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(A,k)=>{k?A():sc(A)}),l.augmentJob=A=>{e&&(A.flags|=4),p&&(A.flags|=2,d&&(A.id=d.uid,A.i=d))};const m=$_(n,e,l);return oi&&(h?h.push(m):c&&m()),m}function Py(n,e,t){const r=this.proxy,s=Ye(n)?n.includes(".")?Wf(r,n):()=>r[n]:n.bind(r,r);let i;_e(e)?i=e:(i=e.handler,t=e);const a=yi(this),l=zf(s,i.bind(r),t);return a(),l}function Wf(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const xy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Xn(e)}Modifiers`]||n[`${Cr(e)}Modifiers`];function ky(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Me;let s=t;const i=e.startsWith("update:"),a=i&&xy(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Ye(d)?d.trim():d)),a.number&&(s=t.map(al)));let l,c=r[l=Ma(e)]||r[l=Ma(Xn(e))];!c&&i&&(c=r[l=Ma(Cr(e))]),c&&ln(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,ln(h,n,6,s)}}function Gf(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!_e(n)){const c=h=>{const d=Gf(h,e,!0);d&&(l=!0,At(a,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?($e(n)&&r.set(n,null),null):(de(i)?i.forEach(c=>a[c]=null):At(a,i),$e(n)&&r.set(n,a),a)}function Xo(n,e){return!n||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(n,e[0].toLowerCase()+e.slice(1))||xe(n,Cr(e))||xe(n,e))}function oh(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:A,ctx:k,inheritAttrs:O}=n,U=Io(n);let q,L;try{if(t.shapeFlag&4){const F=s||r,ne=F;q=en(h.call(ne,F,d,p,A,m,k)),L=l}else{const F=e;q=en(F.length>1?F(p,{attrs:l,slots:a,emit:c}):F(p,null)),L=e.props?l:Vy(l)}}catch(F){Ks.length=0,Jo(F,n,1),q=Tn(er)}let P=q;if(L&&O!==!1){const F=Object.keys(L),{shapeFlag:ne}=P;F.length&&ne&7&&(i&&F.some(Wl)&&(L=Dy(L,i)),P=es(P,L,!1,!0))}return t.dirs&&(P=es(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition&&ic(P,t.transition),q=P,Io(U),q}const Vy=n=>{let e;for(const t in n)(t==="class"||t==="style"||zo(t))&&((e||(e={}))[t]=n[t]);return e},Dy=(n,e)=>{const t={};for(const r in n)(!Wl(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Ny(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?ah(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!Xo(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?ah(r,a,h):!0:!!a;return!1}function ah(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Xo(t,i))return!0}return!1}function Oy({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Kf=n=>n.__isSuspense;function My(n,e){e&&e.pendingBranch?de(n)?e.effects.push(...n):e.effects.push(n):z_(n)}const Lt=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),er=Symbol.for("v-cmt"),qa=Symbol.for("v-stc"),Ks=[];let Dt=null;function ie(n=!1){Ks.push(Dt=n?null:[])}function Ly(){Ks.pop(),Dt=Ks[Ks.length-1]||null}let ii=1;function lh(n,e=!1){ii+=n,n<0&&Dt&&e&&(Dt.hasOnce=!0)}function Qf(n){return n.dynamicChildren=ii>0?Dt||qr:null,Ly(),ii>0&&Dt&&Dt.push(n),n}function ge(n,e,t,r,s,i){return Qf(D(n,e,t,r,s,i,!0))}function Ht(n,e,t,r,s){return Qf(Tn(n,e,t,r,s,!0))}function Jf(n){return n?n.__v_isVNode===!0:!1}function Ds(n,e){return n.type===e.type&&n.key===e.key}const Yf=({key:n})=>n??null,ao=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ye(n)||yt(n)||_e(n)?{i:Ut,r:n,k:e,f:!!t}:n:null);function D(n,e=null,t=null,r=0,s=null,i=n===Lt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Yf(e),ref:e&&ao(e),scopeId:Rf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ut};return l?(uc(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Ye(t)?8:16),ii>0&&!a&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const Tn=Fy;function Fy(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===ay)&&(n=er),Jf(n)){const l=es(n,e,!0);return t&&uc(l,t),ii>0&&!i&&Dt&&(l.shapeFlag&6?Dt[Dt.indexOf(n)]=l:Dt.push(l)),l.patchFlag=-2,l}if(Qy(n)&&(n=n.__vccOpts),e){e=Uy(e);let{class:l,style:c}=e;l&&!Ye(l)&&(e.class=Z(l)),$e(c)&&(rc(c)&&!de(c)&&(c=At({},c)),e.style=Ql(c))}const a=Ye(n)?1:Kf(n)?128:Q_(n)?64:$e(n)?4:_e(n)?2:0;return D(n,e,t,r,s,a,i,!0)}function Uy(n){return n?rc(n)||Lf(n)?At({},n):n:null}function es(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?By(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Yf(h),ref:e&&e.ref?t&&i?de(i)?i.concat(ao(e)):[i,ao(e)]:ao(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Lt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&es(n.ssContent),ssFallback:n.ssFallback&&es(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&ic(d,c.clone(d)),d}function yn(n=" ",e=0){return Tn(Zo,null,n,e)}function at(n="",e=!1){return e?(ie(),Ht(er,null,n)):Tn(er,null,n)}function en(n){return n==null||typeof n=="boolean"?Tn(er):de(n)?Tn(Lt,null,n.slice()):Jf(n)?Bn(n):Tn(Zo,null,String(n))}function Bn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:es(n)}function uc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(de(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),uc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Lf(e)?e._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:Ut},t=32):(e=String(e),r&64?(t=16,e=[yn(e)]):t=8);n.children=e,n.shapeFlag|=t}function By(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Z([e.class,r.class]));else if(s==="style")e.style=Ql([e.style,r.style]);else if(zo(s)){const i=e[s],a=r[s];a&&i!==a&&!(de(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Yt(n,e,t,r=null){ln(n,e,7,[t,r])}const $y=Nf();let jy=0;function qy(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||$y,i={uid:jy++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new f_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uf(r,s),emitsOptions:Gf(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ky.bind(null,i),n.ce&&n.ce(i),i}let bt=null;const Hy=()=>bt||Ut;let Ao,ml;{const n=Ko(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Ao=e("__VUE_INSTANCE_SETTERS__",t=>bt=t),ml=e("__VUE_SSR_SETTERS__",t=>oi=t)}const yi=n=>{const e=bt;return Ao(n),n.scope.on(),()=>{n.scope.off(),Ao(e)}},ch=()=>{bt&&bt.scope.off(),Ao(null)};function Xf(n){return n.vnode.shapeFlag&4}let oi=!1;function zy(n,e=!1,t=!1){e&&ml(e);const{props:r,children:s}=n.vnode,i=Xf(n);_y(n,r,i,e),Ty(n,s,t||e);const a=i?Wy(n,e):void 0;return e&&ml(!1),a}function Wy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ly);const{setup:r}=t;if(r){bn();const s=n.setupContext=r.length>1?Ky(n):null,i=yi(n),a=mi(r,n,0,[n.props,s]),l=ef(a);if(An(),i(),(l||n.sp)&&!zs(n)&&Pf(n),l){if(a.then(ch,ch),e)return a.then(c=>{uh(n,c)}).catch(c=>{Jo(c,n,0)});n.asyncDep=a}else uh(n,a)}else Zf(n)}function uh(n,e,t){_e(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:$e(e)&&(n.setupState=If(e)),Zf(n)}function Zf(n,e,t){const r=n.type;n.render||(n.render=r.render||tn);{const s=yi(n);bn();try{cy(n)}finally{An(),s()}}}const Gy={get(n,e){return mt(n,"get",""),n[e]}};function Ky(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Gy),slots:n.slots,emit:n.emit,expose:e}}function ea(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(If(N_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ws)return Ws[t](n)},has(e,t){return t in e||t in Ws}})):n.proxy}function Qy(n){return _e(n)&&"__vccOpts"in n}const Kr=(n,e)=>U_(n,e,oi),Jy="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _l;const hh=typeof window<"u"&&window.trustedTypes;if(hh)try{_l=hh.createPolicy("vue",{createHTML:n=>n})}catch{}const ep=_l?n=>_l.createHTML(n):n=>n,Yy="http://www.w3.org/2000/svg",Xy="http://www.w3.org/1998/Math/MathML",pn=typeof document<"u"?document:null,dh=pn&&pn.createElement("template"),Zy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?pn.createElementNS(Yy,n):e==="mathml"?pn.createElementNS(Xy,n):t?pn.createElement(n,{is:t}):pn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>pn.createTextNode(n),createComment:n=>pn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>pn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{dh.innerHTML=ep(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=dh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ev=Symbol("_vtc");function tv(n,e,t){const r=n[ev];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const fh=Symbol("_vod"),nv=Symbol("_vsh"),rv=Symbol(""),sv=/(^|;)\s*display\s*:/;function iv(n,e,t){const r=n.style,s=Ye(t);let i=!1;if(t&&!s){if(e)if(Ye(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&lo(r,l,"")}else for(const a in e)t[a]==null&&lo(r,a,"");for(const a in t)a==="display"&&(i=!0),lo(r,a,t[a])}else if(s){if(e!==t){const a=r[rv];a&&(t+=";"+a),r.cssText=t,i=sv.test(t)}}else e&&n.removeAttribute("style");fh in n&&(n[fh]=i?r.display:"",n[nv]&&(r.display="none"))}const ph=/\s*!important$/;function lo(n,e,t){if(de(t))t.forEach(r=>lo(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=ov(n,e);ph.test(t)?n.setProperty(Cr(r),t.replace(ph,""),"important"):n[r]=t}}const gh=["Webkit","Moz","ms"],Ha={};function ov(n,e){const t=Ha[e];if(t)return t;let r=Xn(e);if(r!=="filter"&&r in n)return Ha[e]=r;r=rf(r);for(let s=0;s<gh.length;s++){const i=gh[s]+r;if(i in n)return Ha[e]=i}return e}const mh="http://www.w3.org/1999/xlink";function _h(n,e,t,r,s,i=d_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(mh,e.slice(6,e.length)):n.setAttributeNS(mh,e,t):t==null||i&&!sf(t)?n.removeAttribute(e):n.setAttribute(e,i?"":ar(t)?String(t):t)}function yh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ep(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=sf(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Fr(n,e,t,r){n.addEventListener(e,t,r)}function av(n,e,t,r){n.removeEventListener(e,t,r)}const vh=Symbol("_vei");function lv(n,e,t,r,s=null){const i=n[vh]||(n[vh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=cv(e);if(r){const h=i[e]=dv(r,s);Fr(n,l,h,c)}else a&&(av(n,l,a,c),i[e]=void 0)}}const wh=/(?:Once|Passive|Capture)$/;function cv(n){let e;if(wh.test(n)){e={};let r;for(;r=n.match(wh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Cr(n.slice(2)),e]}let za=0;const uv=Promise.resolve(),hv=()=>za||(uv.then(()=>za=0),za=Date.now());function dv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;ln(fv(r,t.value),e,5,[r])};return t.value=n,t.attached=hv(),t}function fv(n,e){if(de(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Th=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,pv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?tv(n,r,a):e==="style"?iv(n,t,r):zo(e)?Wl(e)||lv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gv(n,e,r,a))?(yh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_h(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ye(r))?yh(n,Xn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),_h(n,e,r,a))};function gv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Th(e)&&_e(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Th(e)&&Ye(t)?!1:e in n}const Eh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return de(e)?t=>io(e,t):e};function mv(n){n.target.composing=!0}function Ih(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wa=Symbol("_assign"),_v={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Wa]=Eh(s);const i=r||s.props&&s.props.type==="number";Fr(n,e?"change":"input",a=>{if(a.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=al(l)),n[Wa](l)}),t&&Fr(n,"change",()=>{n.value=n.value.trim()}),e||(Fr(n,"compositionstart",mv),Fr(n,"compositionend",Ih),Fr(n,"change",Ih))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Wa]=Eh(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?al(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},yv=["ctrl","shift","alt","meta"],vv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>yv.some(t=>n[`${t}Key`]&&!e.includes(t))},tp=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=vv[e[a]];if(l&&l(s,e))return}return n(s,...i)})},wv=At({patchProp:pv},Zy);let bh;function Tv(){return bh||(bh=Iy(wv))}const Ev=(...n)=>{const e=Tv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=bv(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Iv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Iv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function bv(n){return Ye(n)?document.querySelector(n):n}const Av=()=>{};var Ah={};/**
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
 */const np=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Sv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,A=h&63;c||(A=64,a||(m=64)),r.push(t[d],t[p],t[m],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(np(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Sv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Cv;const m=i<<2|l>>4;if(r.push(m),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rv=function(n){const e=np(n);return rp.encodeByteArray(e,!0)},So=function(n){return Rv(n).replace(/\./g,"")},sp=function(n){try{return rp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xv=()=>Pv().__FIREBASE_DEFAULTS__,kv=()=>{if(typeof process>"u"||typeof Ah>"u")return;const n=Ah.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&sp(n[1]);return e&&JSON.parse(e)},ta=()=>{try{return Av()||xv()||kv()||Vv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ip=n=>ta()?.emulatorHosts?.[n],Dv=n=>{const e=ip(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},op=()=>ta()?.config,ap=n=>ta()?.[`_${n}`];/**
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
 */class Nv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ls(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lp(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ov(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[So(JSON.stringify(t)),So(JSON.stringify(a)),""].join(".")}const Qs={};function Mv(){const n={prod:[],emulator:[]};for(const e of Object.keys(Qs))Qs[e]?n.emulator.push(e):n.prod.push(e);return n}function Lv(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Sh=!1;function cp(n,e){if(typeof window>"u"||typeof document>"u"||!ls(window.location.host)||Qs[n]===e||Qs[n]||Sh)return;Qs[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Mv().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,A){m.setAttribute("width","24"),m.setAttribute("id",A),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Sh=!0,a()},m}function d(m,A){m.setAttribute("id",A),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Lv(r),A=t("text"),k=document.getElementById(A)||document.createElement("span"),O=t("learnmore"),U=document.getElementById(O)||document.createElement("a"),q=t("preprendIcon"),L=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const P=m.element;l(P),d(U,O);const F=h();c(L,q),P.append(L,k,U,F),document.body.appendChild(P)}i?(k.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function Uv(){const n=ta()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $v(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qv(){const n=vt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hv(){return!Uv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zv(){try{return typeof indexedDB=="object"}catch{return!1}}function Wv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Gv="FirebaseError";class Vn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Gv,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vi.prototype.create)}}class vi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Kv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Vn(s,l,r)}}function Kv(n,e){return n.replace(Qv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qv=/\{\$([^}]+)}/g;function Jv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Er(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ch(i)&&Ch(a)){if(!Er(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ch(n){return n!==null&&typeof n=="object"}/**
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
 */function wi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yv(n,e){const t=new Xv(n,e);return t.subscribe.bind(t)}class Xv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ga),s.error===void 0&&(s.error=Ga),s.complete===void 0&&(s.complete=Ga);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ga(){}/**
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
 */function wt(n){return n&&n._delegate?n._delegate:n}class Ir{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _r="[DEFAULT]";/**
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
 */class ew{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Nv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nw(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tw(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tw(n){return n===_r?void 0:n}function nw(n){return n.instantiationMode==="EAGER"}/**
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
 */class rw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ew(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ve||(ve={}));const sw={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},iw=ve.INFO,ow={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},aw=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ow[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hc{constructor(e){this.name=e,this._logLevel=iw,this._logHandler=aw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const lw=(n,e)=>e.some(t=>n instanceof t);let Rh,Ph;function cw(){return Rh||(Rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uw(){return Ph||(Ph=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const up=new WeakMap,yl=new WeakMap,hp=new WeakMap,Ka=new WeakMap,dc=new WeakMap;function hw(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Gn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&up.set(t,n)}).catch(()=>{}),dc.set(e,n),e}function dw(n){if(yl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});yl.set(n,e)}let vl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return yl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Gn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fw(n){vl=n(vl)}function pw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Qa(this),e,...t);return hp.set(r,e.sort?e.sort():[e]),Gn(r)}:uw().includes(n)?function(...e){return n.apply(Qa(this),e),Gn(up.get(this))}:function(...e){return Gn(n.apply(Qa(this),e))}}function gw(n){return typeof n=="function"?pw(n):(n instanceof IDBTransaction&&dw(n),lw(n,cw())?new Proxy(n,vl):n)}function Gn(n){if(n instanceof IDBRequest)return hw(n);if(Ka.has(n))return Ka.get(n);const e=gw(n);return e!==n&&(Ka.set(n,e),dc.set(e,n)),e}const Qa=n=>dc.get(n);function mw(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Gn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Gn(a.result),c.oldVersion,c.newVersion,Gn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const _w=["get","getKey","getAll","getAllKeys","count"],yw=["put","add","delete","clear"],Ja=new Map;function xh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ja.get(e))return Ja.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=yw.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_w.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return Ja.set(e,i),i}fw(n=>({...n,get:(e,t,r)=>xh(e,t)||n.get(e,t,r),has:(e,t)=>!!xh(e,t)||n.has(e,t)}));/**
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
 */class vw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ww(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ww(n){return n.getComponent()?.type==="VERSION"}const wl="@firebase/app",kh="0.14.0";/**
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
 */const Sn=new hc("@firebase/app"),Tw="@firebase/app-compat",Ew="@firebase/analytics-compat",Iw="@firebase/analytics",bw="@firebase/app-check-compat",Aw="@firebase/app-check",Sw="@firebase/auth",Cw="@firebase/auth-compat",Rw="@firebase/database",Pw="@firebase/data-connect",xw="@firebase/database-compat",kw="@firebase/functions",Vw="@firebase/functions-compat",Dw="@firebase/installations",Nw="@firebase/installations-compat",Ow="@firebase/messaging",Mw="@firebase/messaging-compat",Lw="@firebase/performance",Fw="@firebase/performance-compat",Uw="@firebase/remote-config",Bw="@firebase/remote-config-compat",$w="@firebase/storage",jw="@firebase/storage-compat",qw="@firebase/firestore",Hw="@firebase/ai",zw="@firebase/firestore-compat",Ww="firebase",Gw="12.0.0";/**
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
 */const Tl="[DEFAULT]",Kw={[wl]:"fire-core",[Tw]:"fire-core-compat",[Iw]:"fire-analytics",[Ew]:"fire-analytics-compat",[Aw]:"fire-app-check",[bw]:"fire-app-check-compat",[Sw]:"fire-auth",[Cw]:"fire-auth-compat",[Rw]:"fire-rtdb",[Pw]:"fire-data-connect",[xw]:"fire-rtdb-compat",[kw]:"fire-fn",[Vw]:"fire-fn-compat",[Dw]:"fire-iid",[Nw]:"fire-iid-compat",[Ow]:"fire-fcm",[Mw]:"fire-fcm-compat",[Lw]:"fire-perf",[Fw]:"fire-perf-compat",[Uw]:"fire-rc",[Bw]:"fire-rc-compat",[$w]:"fire-gcs",[jw]:"fire-gcs-compat",[qw]:"fire-fst",[zw]:"fire-fst-compat",[Hw]:"fire-vertex","fire-js":"fire-js",[Ww]:"fire-js-all"};/**
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
 */const Co=new Map,Qw=new Map,El=new Map;function Vh(n,e){try{n.container.addComponent(e)}catch(t){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ts(n){const e=n.name;if(El.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;El.set(e,n);for(const t of Co.values())Vh(t,n);for(const t of Qw.values())Vh(t,n);return!0}function fc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Jw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new vi("app","Firebase",Jw);/**
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
 */class Yw{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const cs=Gw;function dp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Tl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(t||(t=op()),!t)throw Kn.create("no-options");const i=Co.get(s);if(i){if(Er(t,i.options)&&Er(r,i.config))return i;throw Kn.create("duplicate-app",{appName:s})}const a=new rw(s);for(const c of El.values())a.addComponent(c);const l=new Yw(t,r,a);return Co.set(s,l),l}function fp(n=Tl){const e=Co.get(n);if(!e&&n===Tl&&op())return dp();if(!e)throw Kn.create("no-app",{appName:n});return e}function Qn(n,e,t){let r=Kw[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(a.join(" "));return}ts(new Ir(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Xw="firebase-heartbeat-database",Zw=1,ai="firebase-heartbeat-store";let Ya=null;function pp(){return Ya||(Ya=mw(Xw,Zw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ai)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kn.create("idb-open",{originalErrorMessage:n.message})})),Ya}async function eT(n){try{const t=(await pp()).transaction(ai),r=await t.objectStore(ai).get(gp(n));return await t.done,r}catch(e){if(e instanceof Vn)Sn.warn(e.message);else{const t=Kn.create("idb-get",{originalErrorMessage:e?.message});Sn.warn(t.message)}}}async function Dh(n,e){try{const r=(await pp()).transaction(ai,"readwrite");await r.objectStore(ai).put(e,gp(n)),await r.done}catch(t){if(t instanceof Vn)Sn.warn(t.message);else{const r=Kn.create("idb-set",{originalErrorMessage:t?.message});Sn.warn(r.message)}}}function gp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tT=1024,nT=30;class rT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new iT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Nh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>nT){const s=oT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Sn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Nh(),{heartbeatsToSend:t,unsentEntries:r}=sT(this._heartbeatsCache.heartbeats),s=So(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Sn.warn(e),""}}}function Nh(){return new Date().toISOString().substring(0,10)}function sT(n,e=tT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Oh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Oh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class iT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zv()?Wv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eT(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Dh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Dh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Oh(n){return So(JSON.stringify({version:2,heartbeats:n})).length}function oT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function aT(n){ts(new Ir("platform-logger",e=>new vw(e),"PRIVATE")),ts(new Ir("heartbeat",e=>new rT(e),"PRIVATE")),Qn(wl,kh,n),Qn(wl,kh,"esm2020"),Qn("fire-js","")}aT("");function mp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lT=mp,_p=new vi("auth","Firebase",mp());/**
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
 */const Ro=new hc("@firebase/auth");function cT(n,...e){Ro.logLevel<=ve.WARN&&Ro.warn(`Auth (${cs}): ${n}`,...e)}function co(n,...e){Ro.logLevel<=ve.ERROR&&Ro.error(`Auth (${cs}): ${n}`,...e)}/**
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
 */function cn(n,...e){throw gc(n,...e)}function Gt(n,...e){return gc(n,...e)}function pc(n,e,t){const r={...lT(),[e]:t};return new vi("auth","Firebase",r).create(e,{appName:n.name})}function En(n){return pc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uT(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&cn(n,"argument-error"),pc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return _p.create(n,...e)}function ue(n,e,...t){if(!n)throw gc(e,...t)}function vn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw co(e),new Error(e)}function Cn(n,e){n||vn(e)}/**
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
 */function Il(){return typeof self<"u"&&self.location?.href||""}function hT(){return Mh()==="http:"||Mh()==="https:"}function Mh(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function dT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hT()||$v()||"connection"in navigator)?navigator.onLine:!0}function fT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ti{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cn(t>e,"Short delay should be less than long delay!"),this.isMobile=Fv()||jv()}get(){return dT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mc(n,e){Cn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class yp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mT=new Ti(3e4,6e4);function Ei(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function us(n,e,t,r,s={}){return vp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=wi({key:n.config.apiKey,...a}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:c,...i};return Bv()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ls(n.emulatorConfig.host)&&(h.credentials="include"),yp.fetch()(await wp(n,n.config.apiHost,t,l),h)})}async function vp(n,e,t){n._canInitEmulator=!1;const r={...pT,...e};try{const s=new _T(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Zi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Zi(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Zi(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw pc(n,d,h);cn(n,d)}}catch(s){if(s instanceof Vn)throw s;cn(n,"network-request-failed",{message:String(s)})}}async function _c(n,e,t,r,s={}){const i=await us(n,e,t,r,s);return"mfaPendingCredential"in i&&cn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function wp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?mc(n.config,s):`${n.config.apiScheme}://${s}`;return gT.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class _T{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),mT.get())})}}function Zi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Gt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function yT(n,e){return us(n,"POST","/v1/accounts:delete",e)}async function Po(n,e){return us(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Js(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vT(n,e=!1){const t=wt(n),r=await t.getIdToken(e),s=yc(r);ue(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Js(Xa(s.auth_time)),issuedAtTime:Js(Xa(s.iat)),expirationTime:Js(Xa(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Xa(n){return Number(n)*1e3}function yc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return co("JWT malformed, contained fewer than 3 sections"),null;try{const s=sp(t);return s?JSON.parse(s):(co("Failed to decode base64 JWT payload"),null)}catch(s){return co("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Lh(n){const e=yc(n);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function li(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Vn&&wT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class TT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xo(n){const e=n.auth,t=await n.getIdToken(),r=await li(n,Po(e,{idToken:t}));ue(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?Tp(s.providerUserInfo):[],a=IT(n.providerData,i),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!a?.length,h=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function ET(n){const e=wt(n);await xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IT(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tp(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function bT(n,e){const t=await vp(n,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await wp(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&ls(n.emulatorConfig.host)&&(c.credentials="include"),yp.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function AT(n,e){return us(n,"POST","/v2/accounts:revokeToken",Ei(n,e))}/**
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
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const t=Lh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await bT(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Qr;return r&&(ue(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Fn(n,e){ue(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new TT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await li(this,this.stsTokenManager.getToken(this.auth,e));return ue(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vT(this,e)}reload(){return ET(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await li(this,yT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,h=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:A,providerData:k,stsTokenManager:O}=t;ue(p&&O,e,"internal-error");const U=Qr.fromJSON(this.name,O);ue(typeof p=="string",e,"internal-error"),Fn(r,e.name),Fn(s,e.name),ue(typeof m=="boolean",e,"internal-error"),ue(typeof A=="boolean",e,"internal-error"),Fn(i,e.name),Fn(a,e.name),Fn(l,e.name),Fn(c,e.name),Fn(h,e.name),Fn(d,e.name);const q=new zt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:A,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:U,createdAt:h,lastLoginAt:d});return k&&Array.isArray(k)&&(q.providerData=k.map(L=>({...L}))),c&&(q._redirectEventId=c),q}static async _fromIdTokenResponse(e,t,r=!1){const s=new Qr;s.updateFromServerResponse(t);const i=new zt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Tp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new Qr;l.updateFromIdToken(r);const c=new zt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,h),c}}/**
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
 */const Fh=new Map;function wn(n){Cn(n instanceof Function,"Expected a class definition");let e=Fh.get(n);return e?(Cn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fh.set(n,e),e)}/**
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
 */class Ep{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ep.type="NONE";const Uh=Ep;/**
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
 */function uo(n,e,t){return`firebase:${n}:${e}:${t}`}class Jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=uo(this.userKey,s.apiKey,i),this.fullPersistenceKey=uo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Po(this.auth,{idToken:e}).catch(()=>{});return t?zt._fromGetAccountInfoResponse(this.auth,t,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Jr(wn(Uh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||wn(Uh);const a=uo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const m=await Po(e,{idToken:d}).catch(()=>{});if(!m)break;p=await zt._fromGetAccountInfoResponse(e,m,d)}else p=zt._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Jr(i,e,r))}}/**
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
 */function Bh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ip(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rp(e))return"Blackberry";if(Pp(e))return"Webos";if(bp(e))return"Safari";if((e.includes("chrome/")||Ap(e))&&!e.includes("edge/"))return"Chrome";if(Cp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Ip(n=vt()){return/firefox\//i.test(n)}function bp(n=vt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ap(n=vt()){return/crios\//i.test(n)}function Sp(n=vt()){return/iemobile/i.test(n)}function Cp(n=vt()){return/android/i.test(n)}function Rp(n=vt()){return/blackberry/i.test(n)}function Pp(n=vt()){return/webos/i.test(n)}function vc(n=vt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ST(n=vt()){return vc(n)&&!!window.navigator?.standalone}function CT(){return qv()&&document.documentMode===10}function xp(n=vt()){return vc(n)||Cp(n)||Pp(n)||Rp(n)||/windows phone/i.test(n)||Sp(n)}/**
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
 */function kp(n,e=[]){let t;switch(n){case"Browser":t=Bh(vt());break;case"Worker":t=`${Bh(vt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${cs}/${r}`}/**
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
 */class RT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function PT(n,e={}){return us(n,"GET","/v2/passwordPolicy",Ei(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const xT=6;class kT{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??xT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class VT{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $h(this),this.idTokenSubscription=new $h(this),this.beforeStateQueue=new RT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Po(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Vt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(En(this));const t=e?wt(e):null;return t&&ue(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PT(this),t=new kT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await AT(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wn(e)||this._popupRedirectResolver;ue(t,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[wn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&cT(`Error while retrieving App Check token: ${e.error}`),e?.token}}function hs(n){return wt(n)}class $h{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yv(t=>this.observer=t)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DT(n){wc=n}function NT(n){return wc.loadJS(n)}function OT(){return wc.gapiScript}function MT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function LT(n,e){const t=fc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Er(i,e??{}))return s;cn(s,"already-initialized")}return t.initialize({options:e})}function FT(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(wn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function UT(n,e,t){const r=hs(n);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Vp(e),{host:a,port:l}=BT(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(Er(h,r.config.emulator)&&Er(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ls(a)?(lp(`${i}//${a}${c}`),cp("Auth",!0)):$T()}function Vp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function BT(n){const e=Vp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:jh(a)}}}function jh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $T(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Dp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,t){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
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
 */async function Yr(n,e){return _c(n,"POST","/v1/accounts:signInWithIdp",Ei(n,e))}/**
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
 */const jT="http://localhost";class br extends Dp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new br(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Yr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yr(e,t)}buildRequest(){const e={requestUri:jT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wi(t)}return e}}/**
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
 */class Tc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ii extends Tc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $n extends Ii{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
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
 */class _n extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return br._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _n.credential(t,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
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
 */class jn extends Ii{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
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
 */class qn extends Ii{constructor(){super("twitter.com")}static credential(e,t){return br._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return qn.credential(t,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
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
 */async function qT(n,e){return _c(n,"POST","/v1/accounts:signUp",Ei(n,e))}/**
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
 */class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await zt._fromIdTokenResponse(e,r,s),a=qh(r);return new Rn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=qh(r);return new Rn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function qh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function HT(n){if(Vt(n.app))return Promise.reject(En(n));const e=hs(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Rn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await qT(e,{returnSecureToken:!0}),r=await Rn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class ko extends Vn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ko(e,t,r,s)}}function Np(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(n,i,e,r):i})}async function zT(n,e,t=!1){const r=await li(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rn._forOperation(n,"link",r)}/**
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
 */async function WT(n,e,t=!1){const{auth:r}=n;if(Vt(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await li(n,Np(r,s,e,n),t);ue(i.idToken,r,"internal-error");const a=yc(i.idToken);ue(a,r,"internal-error");const{sub:l}=a;return ue(n.uid===l,r,"user-mismatch"),Rn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&cn(r,"user-mismatch"),i}}/**
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
 */async function GT(n,e,t=!1){if(Vt(n.app))return Promise.reject(En(n));const r="signIn",s=await Np(n,r,e),i=await Rn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
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
 */async function KT(n,e){return _c(n,"POST","/v1/accounts:signInWithCustomToken",Ei(n,e))}/**
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
 */async function QT(n,e){if(Vt(n.app))return Promise.reject(En(n));const t=hs(n),r=await KT(t,{token:e,returnSecureToken:!0}),s=await Rn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}function JT(n,e,t,r){return wt(n).onIdTokenChanged(e,t,r)}function YT(n,e,t){return wt(n).beforeAuthStateChanged(e,t)}function Op(n,e,t,r){return wt(n).onAuthStateChanged(e,t,r)}const Vo="__sak";/**
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
 */class Mp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const XT=1e3,ZT=10;class Lp extends Mp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);CT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ZT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},XT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lp.type="LOCAL";const eE=Lp;/**
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
 */class Fp extends Mp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fp.type="SESSION";const Up=Fp;/**
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
 */function tE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await tE(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
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
 */function Ec(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class nE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Ec("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function nn(){return window}function rE(n){nn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Bp(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function sE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iE(){return navigator?.serviceWorker?.controller||null}function oE(){return Bp()?self:null}/**
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
 */const $p="firebaseLocalStorageDb",aE=1,Do="firebaseLocalStorage",jp="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ra(n,e){return n.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function lE(){const n=indexedDB.deleteDatabase($p);return new bi(n).toPromise()}function Al(){const n=indexedDB.open($p,aE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Do,{keyPath:jp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Do)?e(r):(r.close(),await lE(),e(await Al()))})})}async function Hh(n,e,t){const r=ra(n,!0).put({[jp]:e,value:t});return new bi(r).toPromise()}async function cE(n,e){const t=ra(n,!1).get(e),r=await new bi(t).toPromise();return r===void 0?null:r.value}function zh(n,e){const t=ra(n,!0).delete(e);return new bi(t).toPromise()}const uE=800,hE=3;class qp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Al(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>hE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance(oE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await sE(),!this.activeServiceWorker)return;this.sender=new nE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Al();return await Hh(e,Vo,"1"),await zh(e,Vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>cE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ra(s,!1).getAll();return new bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qp.type="LOCAL";const dE=qp;new Ti(3e4,6e4);/**
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
 */function Hp(n,e){return e?wn(e):(ue(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ic extends Dp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fE(n){return GT(n.auth,new Ic(n),n.bypassAuthState)}function pE(n){const{auth:e,user:t}=n;return ue(t,e,"internal-error"),WT(t,new Ic(n),n.bypassAuthState)}async function gE(n){const{auth:e,user:t}=n;return ue(t,e,"internal-error"),zT(t,new Ic(n),n.bypassAuthState)}/**
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
 */class zp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fE;case"linkViaPopup":case"linkViaRedirect":return gE;case"reauthViaPopup":case"reauthViaRedirect":return pE;default:cn(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mE=new Ti(2e3,1e4);async function _E(n,e,t){if(Vt(n.app))return Promise.reject(Gt(n,"operation-not-supported-in-this-environment"));const r=hs(n);uT(n,e,Tc);const s=Hp(r,t);return new yr(r,"signInViaPopup",e,s).executeNotNull()}class yr extends zp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Ec();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mE.get())};e()}}yr.currentPopupAction=null;/**
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
 */const yE="pendingRedirect",ho=new Map;class vE extends zp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ho.get(this.auth._key());if(!e){try{const r=await wE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ho.set(this.auth._key(),e)}return this.bypassAuthState||ho.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wE(n,e){const t=IE(e),r=EE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function TE(n,e){ho.set(n._key(),e)}function EE(n){return wn(n._redirectPersistence)}function IE(n){return uo(yE,n.config.apiKey,n.name)}async function bE(n,e,t=!1){if(Vt(n.app))return Promise.reject(En(n));const r=hs(n),s=Hp(r,e),a=await new vE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const AE=600*1e3;class SE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Wp(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Gt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wh(e))}saveEventToCache(e){this.cachedEventUids.add(Wh(e)),this.lastProcessedEventTime=Date.now()}}function Wh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Wp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function CE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wp(n);default:return!1}}/**
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
 */async function RE(n,e={}){return us(n,"GET","/v1/projects",e)}/**
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
 */const PE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xE=/^https?/;async function kE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await RE(n);for(const t of e)try{if(VE(t))return}catch{}cn(n,"unauthorized-domain")}function VE(n){const e=Il(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!xE.test(t))return!1;if(PE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const DE=new Ti(3e4,6e4);function Gh(){const n=nn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function NE(n){return new Promise((e,t)=>{function r(){Gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gh(),t(Gt(n,"network-request-failed"))},timeout:DE.get()})}if(nn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(nn().gapi?.load)r();else{const s=MT("iframefcb");return nn()[s]=()=>{gapi.load?r():t(Gt(n,"network-request-failed"))},NT(`${OT()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw fo=null,e})}let fo=null;function OE(n){return fo=fo||NE(n),fo}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ME=new Ti(5e3,15e3),LE="__/auth/iframe",FE="emulator/auth/iframe",UE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $E(n){const e=n.config;ue(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?mc(e,FE):`https://${n.config.authDomain}/${LE}`,r={apiKey:e.apiKey,appName:n.name,v:cs},s=BE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${wi(r).slice(1)}`}async function jE(n){const e=await OE(n),t=nn().gapi;return ue(t,n,"internal-error"),e.open({where:document.body,url:$E(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Gt(n,"network-request-failed"),l=nn().setTimeout(()=>{i(a)},ME.get());function c(){nn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const qE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HE=500,zE=600,WE="_blank",GE="http://localhost";class Kh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KE(n,e,t,r=HE,s=zE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...qE,width:r.toString(),height:s.toString(),top:i,left:a},h=vt().toLowerCase();t&&(l=Ap(h)?WE:t),Ip(h)&&(e=e||GE,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[A,k])=>`${m}${A}=${k},`,"");if(ST(h)&&l!=="_self")return QE(e||"",l),new Kh(null);const p=window.open(e||"",l,d);ue(p,n,"popup-blocked");try{p.focus()}catch{}return new Kh(p)}function QE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const JE="__/auth/handler",YE="emulator/auth/handler",XE=encodeURIComponent("fac");async function Qh(n,e,t,r,s,i){ue(n.config.authDomain,n,"auth-domain-config-required"),ue(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:cs,eventId:s};if(e instanceof Tc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Jv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Ii){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${XE}=${encodeURIComponent(c)}`:"";return`${ZE(n)}?${wi(l).slice(1)}${h}`}function ZE({config:n}){return n.emulator?mc(n,YE):`https://${n.authDomain}/${JE}`}/**
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
 */const Za="webStorageSupport";class eI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Up,this._completeRedirectFn=bE,this._overrideRedirectResult=TE}async _openPopup(e,t,r,s){Cn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Qh(e,t,r,Il(),s);return KE(e,i,Ec())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Qh(e,t,r,Il(),s);return rE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await jE(e),r=new SE(e);return t.register("authEvent",s=>(ue(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Za,{type:Za},s=>{const i=s?.[0]?.[Za];i!==void 0&&t(!!i),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xp()||bp()||vc()}}const tI=eI;var Jh="@firebase/auth",Yh="1.11.0";/**
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
 */class nI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sI(n){ts(new Ir("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ue(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kp(n)},h=new VT(r,s,i,c);return FT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Ir("auth-internal",e=>{const t=hs(e.getProvider("auth").getImmediate());return(r=>new nI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(Jh,Yh,rI(n)),Qn(Jh,Yh,"esm2020")}/**
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
 */const iI=300,oI=ap("authIdTokenMaxAge")||iI;let Xh=null;const aI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>oI)return;const s=t?.token;Xh!==s&&(Xh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ds(n=fp()){const e=fc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=LT(n,{popupRedirectResolver:tI,persistence:[dE,eE,Up]}),r=ap("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=aI(i.toString());YT(t,a,()=>a(t.currentUser)),JT(t,l=>a(l))}}const s=ip("auth");return s&&UT(t,`http://${s}`),t}function lI(){return document.getElementsByTagName("head")?.[0]??document}DT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",lI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sI("Browser");var Zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,Gp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(T,b,S){for(var _=Array(arguments.length-2),et=2;et<arguments.length;et++)_[et-2]=arguments[et];return y.prototype[b].apply(T,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)T[b]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(b=0;16>b;++b)T[b]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],b=E.g[2];var S=E.g[3],_=y+(S^v&(b^S))+T[0]+3614090360&4294967295;y=v+(_<<7&4294967295|_>>>25),_=S+(b^y&(v^b))+T[1]+3905402710&4294967295,S=y+(_<<12&4294967295|_>>>20),_=b+(v^S&(y^v))+T[2]+606105819&4294967295,b=S+(_<<17&4294967295|_>>>15),_=v+(y^b&(S^y))+T[3]+3250441966&4294967295,v=b+(_<<22&4294967295|_>>>10),_=y+(S^v&(b^S))+T[4]+4118548399&4294967295,y=v+(_<<7&4294967295|_>>>25),_=S+(b^y&(v^b))+T[5]+1200080426&4294967295,S=y+(_<<12&4294967295|_>>>20),_=b+(v^S&(y^v))+T[6]+2821735955&4294967295,b=S+(_<<17&4294967295|_>>>15),_=v+(y^b&(S^y))+T[7]+4249261313&4294967295,v=b+(_<<22&4294967295|_>>>10),_=y+(S^v&(b^S))+T[8]+1770035416&4294967295,y=v+(_<<7&4294967295|_>>>25),_=S+(b^y&(v^b))+T[9]+2336552879&4294967295,S=y+(_<<12&4294967295|_>>>20),_=b+(v^S&(y^v))+T[10]+4294925233&4294967295,b=S+(_<<17&4294967295|_>>>15),_=v+(y^b&(S^y))+T[11]+2304563134&4294967295,v=b+(_<<22&4294967295|_>>>10),_=y+(S^v&(b^S))+T[12]+1804603682&4294967295,y=v+(_<<7&4294967295|_>>>25),_=S+(b^y&(v^b))+T[13]+4254626195&4294967295,S=y+(_<<12&4294967295|_>>>20),_=b+(v^S&(y^v))+T[14]+2792965006&4294967295,b=S+(_<<17&4294967295|_>>>15),_=v+(y^b&(S^y))+T[15]+1236535329&4294967295,v=b+(_<<22&4294967295|_>>>10),_=y+(b^S&(v^b))+T[1]+4129170786&4294967295,y=v+(_<<5&4294967295|_>>>27),_=S+(v^b&(y^v))+T[6]+3225465664&4294967295,S=y+(_<<9&4294967295|_>>>23),_=b+(y^v&(S^y))+T[11]+643717713&4294967295,b=S+(_<<14&4294967295|_>>>18),_=v+(S^y&(b^S))+T[0]+3921069994&4294967295,v=b+(_<<20&4294967295|_>>>12),_=y+(b^S&(v^b))+T[5]+3593408605&4294967295,y=v+(_<<5&4294967295|_>>>27),_=S+(v^b&(y^v))+T[10]+38016083&4294967295,S=y+(_<<9&4294967295|_>>>23),_=b+(y^v&(S^y))+T[15]+3634488961&4294967295,b=S+(_<<14&4294967295|_>>>18),_=v+(S^y&(b^S))+T[4]+3889429448&4294967295,v=b+(_<<20&4294967295|_>>>12),_=y+(b^S&(v^b))+T[9]+568446438&4294967295,y=v+(_<<5&4294967295|_>>>27),_=S+(v^b&(y^v))+T[14]+3275163606&4294967295,S=y+(_<<9&4294967295|_>>>23),_=b+(y^v&(S^y))+T[3]+4107603335&4294967295,b=S+(_<<14&4294967295|_>>>18),_=v+(S^y&(b^S))+T[8]+1163531501&4294967295,v=b+(_<<20&4294967295|_>>>12),_=y+(b^S&(v^b))+T[13]+2850285829&4294967295,y=v+(_<<5&4294967295|_>>>27),_=S+(v^b&(y^v))+T[2]+4243563512&4294967295,S=y+(_<<9&4294967295|_>>>23),_=b+(y^v&(S^y))+T[7]+1735328473&4294967295,b=S+(_<<14&4294967295|_>>>18),_=v+(S^y&(b^S))+T[12]+2368359562&4294967295,v=b+(_<<20&4294967295|_>>>12),_=y+(v^b^S)+T[5]+4294588738&4294967295,y=v+(_<<4&4294967295|_>>>28),_=S+(y^v^b)+T[8]+2272392833&4294967295,S=y+(_<<11&4294967295|_>>>21),_=b+(S^y^v)+T[11]+1839030562&4294967295,b=S+(_<<16&4294967295|_>>>16),_=v+(b^S^y)+T[14]+4259657740&4294967295,v=b+(_<<23&4294967295|_>>>9),_=y+(v^b^S)+T[1]+2763975236&4294967295,y=v+(_<<4&4294967295|_>>>28),_=S+(y^v^b)+T[4]+1272893353&4294967295,S=y+(_<<11&4294967295|_>>>21),_=b+(S^y^v)+T[7]+4139469664&4294967295,b=S+(_<<16&4294967295|_>>>16),_=v+(b^S^y)+T[10]+3200236656&4294967295,v=b+(_<<23&4294967295|_>>>9),_=y+(v^b^S)+T[13]+681279174&4294967295,y=v+(_<<4&4294967295|_>>>28),_=S+(y^v^b)+T[0]+3936430074&4294967295,S=y+(_<<11&4294967295|_>>>21),_=b+(S^y^v)+T[3]+3572445317&4294967295,b=S+(_<<16&4294967295|_>>>16),_=v+(b^S^y)+T[6]+76029189&4294967295,v=b+(_<<23&4294967295|_>>>9),_=y+(v^b^S)+T[9]+3654602809&4294967295,y=v+(_<<4&4294967295|_>>>28),_=S+(y^v^b)+T[12]+3873151461&4294967295,S=y+(_<<11&4294967295|_>>>21),_=b+(S^y^v)+T[15]+530742520&4294967295,b=S+(_<<16&4294967295|_>>>16),_=v+(b^S^y)+T[2]+3299628645&4294967295,v=b+(_<<23&4294967295|_>>>9),_=y+(b^(v|~S))+T[0]+4096336452&4294967295,y=v+(_<<6&4294967295|_>>>26),_=S+(v^(y|~b))+T[7]+1126891415&4294967295,S=y+(_<<10&4294967295|_>>>22),_=b+(y^(S|~v))+T[14]+2878612391&4294967295,b=S+(_<<15&4294967295|_>>>17),_=v+(S^(b|~y))+T[5]+4237533241&4294967295,v=b+(_<<21&4294967295|_>>>11),_=y+(b^(v|~S))+T[12]+1700485571&4294967295,y=v+(_<<6&4294967295|_>>>26),_=S+(v^(y|~b))+T[3]+2399980690&4294967295,S=y+(_<<10&4294967295|_>>>22),_=b+(y^(S|~v))+T[10]+4293915773&4294967295,b=S+(_<<15&4294967295|_>>>17),_=v+(S^(b|~y))+T[1]+2240044497&4294967295,v=b+(_<<21&4294967295|_>>>11),_=y+(b^(v|~S))+T[8]+1873313359&4294967295,y=v+(_<<6&4294967295|_>>>26),_=S+(v^(y|~b))+T[15]+4264355552&4294967295,S=y+(_<<10&4294967295|_>>>22),_=b+(y^(S|~v))+T[6]+2734768916&4294967295,b=S+(_<<15&4294967295|_>>>17),_=v+(S^(b|~y))+T[13]+1309151649&4294967295,v=b+(_<<21&4294967295|_>>>11),_=y+(b^(v|~S))+T[4]+4149444226&4294967295,y=v+(_<<6&4294967295|_>>>26),_=S+(v^(y|~b))+T[11]+3174756917&4294967295,S=y+(_<<10&4294967295|_>>>22),_=b+(y^(S|~v))+T[2]+718787259&4294967295,b=S+(_<<15&4294967295|_>>>17),_=v+(S^(b|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(b+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+S&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,T=this.B,b=this.h,S=0;S<y;){if(b==0)for(;S<=v;)s(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<y;)if(T[b++]=E.charCodeAt(S++),b==this.blockSize){s(this,T),b=0;break}}else for(;S<y;)if(T[b++]=E[S++],b==this.blockSize){s(this,T),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)E[v++]=this.g[y]>>>T&255;return E};function i(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function a(E,y){this.h=y;for(var v=[],T=!0,b=E.length-1;0<=b;b--){var S=E[b]|0;T&&S==y||(v[b]=S,T=!1)}this.g=v}var l={};function c(E){return-128<=E&&128>E?i(E,function(y){return new a([y|0],0>y?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return U(h(-E));for(var y=[],v=1,T=0;E>=v;T++)y[T]=E/v|0,v*=4294967296;return new a(y,0)}function d(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return U(d(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),T=p,b=0;b<E.length;b+=8){var S=Math.min(8,E.length-b),_=parseInt(E.substring(b,b+S),y);8>S?(S=h(Math.pow(y,S)),T=T.j(S).add(h(_))):(T=T.j(v),T=T.add(h(_)))}return T}var p=c(0),m=c(1),A=c(16777216);n=a.prototype,n.m=function(){if(O(this))return-U(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(O(this))return"-"+U(this).toString(E);for(var y=h(Math.pow(E,6)),v=this,T="";;){var b=F(v,y).g;v=q(v,b.j(y));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=b,k(v))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function O(E){return E.h==-1}n.l=function(E){return E=q(this,E),O(E)?-1:k(E)?0:1};function U(E){for(var y=E.g.length,v=[],T=0;T<y;T++)v[T]=~E.g[T];return new a(v,~E.h).add(m)}n.abs=function(){return O(this)?U(this):this},n.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0,b=0;b<=y;b++){var S=T+(this.i(b)&65535)+(E.i(b)&65535),_=(S>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);T=_>>>16,S&=65535,_&=65535,v[b]=_<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function q(E,y){return E.add(U(y))}n.j=function(E){if(k(this)||k(E))return p;if(O(this))return O(E)?U(this).j(U(E)):U(U(this).j(E));if(O(E))return U(this.j(U(E)));if(0>this.l(A)&&0>E.l(A))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<E.g.length;b++){var S=this.i(T)>>>16,_=this.i(T)&65535,et=E.i(b)>>>16,Xe=E.i(b)&65535;v[2*T+2*b]+=_*Xe,L(v,2*T+2*b),v[2*T+2*b+1]+=S*Xe,L(v,2*T+2*b+1),v[2*T+2*b+1]+=_*et,L(v,2*T+2*b+1),v[2*T+2*b+2]+=S*et,L(v,2*T+2*b+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new a(v,0)};function L(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function P(E,y){this.g=E,this.h=y}function F(E,y){if(k(y))throw Error("division by zero");if(k(E))return new P(p,p);if(O(E))return y=F(U(E),y),new P(U(y.g),U(y.h));if(O(y))return y=F(E,U(y)),new P(U(y.g),y.h);if(30<E.g.length){if(O(E)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,T=y;0>=T.l(E);)v=ne(v),T=ne(T);var b=fe(v,1),S=fe(T,1);for(T=fe(T,2),v=fe(v,2);!k(T);){var _=S.add(T);0>=_.l(E)&&(b=b.add(v),S=_),T=fe(T,1),v=fe(v,1)}return y=q(E,b.j(y)),new P(b,y)}for(b=p;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(v),_=S.j(y);O(_)||0<_.l(E);)v-=T,S=h(v),_=S.j(y);k(S)&&(S=m),b=b.add(S),E=q(E,_)}return new P(b,E)}n.A=function(E){return F(this,E).h},n.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&E.i(T);return new a(v,this.h&E.h)},n.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|E.i(T);return new a(v,this.h|E.h)},n.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^E.i(T);return new a(v,this.h^E.h)};function ne(E){for(var y=E.g.length+1,v=[],T=0;T<y;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(v,E.h)}function fe(E,y){var v=y>>5;y%=32;for(var T=E.g.length-v,b=[],S=0;S<T;S++)b[S]=0<y?E.i(S+v)>>>y|E.i(S+v+1)<<32-y:E.i(S+v);return new a(b,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Gp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Jn=a}).apply(typeof Zh<"u"?Zh:typeof self<"u"?self:typeof window<"u"?window:{});var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kp,Ms,Qp,po,Sl,Jp,Yp,Xp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof eo=="object"&&eo];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in f))break e;f=f[C]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,C={next:function(){if(!g&&f<o.length){var R=f++;return{value:u(R,o[R]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function A(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,C,R){for(var G=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)G[Ne-2]=arguments[Ne];return u.prototype[C].apply(g,G)}}function O(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function U(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=o.length||0,R=g.length||0;o.length=C+R;for(let G=0;G<R;G++)o[C+G]=g[G]}else o.push(g)}}class q{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(o){return/^[\s\xa0]*$/.test(o)}function P(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function F(o){return F[" "](o),o}F[" "]=function(){};var ne=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function fe(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function E(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)o[f]=g[f];for(let R=0;R<v.length;R++)f=v[R],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function _(){var o=Pt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class et{constructor(){this.h=this.g=null}add(u,f){const g=Xe.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Xe=new q(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,ye=!1,Pt=new et,le=()=>{const o=l.Promise.resolve(void 0);Ce=()=>{o.then(ee)}};var ee=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(f){S(f)}var u=Xe;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ye=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function X(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var He=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function Ve(o,u){if(X.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ne){e:{try{F(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Re[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ve.aa.h.call(this)}}k(Ve,X);var Re={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ge="closure_listenable_"+(1e6*Math.random()|0),jt=0;function Di(o,u,f,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++jt,this.da=this.fa=!1}function Jt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ys(o){this.src=o,this.g={},this.h=0}ys.prototype.add=function(o,u,f,g,C){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var G=I(o,u,g,C);return-1<G?(u=o[G],f||(u.fa=!1)):(u=new Di(u,this.src,R,!!g,C),u.fa=f,o.push(u)),u};function w(o,u){var f=u.type;if(f in o.g){var g=o.g[f],C=Array.prototype.indexOf.call(g,u,void 0),R;(R=0<=C)&&Array.prototype.splice.call(g,C,1),R&&(Jt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function I(o,u,f,g){for(var C=0;C<o.length;++C){var R=o[C];if(!R.da&&R.listener==u&&R.capture==!!f&&R.ha==g)return C}return-1}var x="closure_lm_"+(1e6*Math.random()|0),$={};function M(o,u,f,g,C){if(Array.isArray(u)){for(var R=0;R<u.length;R++)M(o,u[R],f,g,C);return null}return f=ce(f),o&&o[Ge]?o.K(u,f,h(g)?!!g.capture:!1,C):B(o,u,f,!1,g,C)}function B(o,u,f,g,C,R){if(!u)throw Error("Invalid event type");var G=h(C)?!!C.capture:!!C,Ne=K(o);if(Ne||(o[x]=Ne=new ys(o)),f=Ne.add(u,f,g,G,R),f.proxy)return f;if(g=Q(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)He||(C=G),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(j(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Q(){function o(f){return u.call(o.src,o.listener,f)}const u=re;return o}function W(o,u,f,g,C){if(Array.isArray(u))for(var R=0;R<u.length;R++)W(o,u[R],f,g,C);else g=h(g)?!!g.capture:!!g,f=ce(f),o&&o[Ge]?(o=o.i,u=String(u).toString(),u in o.g&&(R=o.g[u],f=I(R,f,g,C),-1<f&&(Jt(R[f]),Array.prototype.splice.call(R,f,1),R.length==0&&(delete o.g[u],o.h--)))):o&&(o=K(o))&&(u=o.g[u.toString()],o=-1,u&&(o=I(u,f,g,C)),(f=-1<o?u[o]:null)&&z(f))}function z(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Ge])w(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(j(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=K(u))?(w(f,o),f.h==0&&(f.src=null,u[x]=null)):Jt(o)}}}function j(o){return o in $?$[o]:$[o]="on"+o}function re(o,u){if(o.da)o=!0;else{u=new Ve(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&z(o),o=f.call(g,u)}return o}function K(o){return o=o[x],o instanceof ys?o:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(o){return typeof o=="function"?o:(o[te]||(o[te]=function(u){return o.handleEvent(u)}),o[te])}function oe(){H.call(this),this.i=new ys(this),this.M=this,this.F=null}k(oe,H),oe.prototype[Ge]=!0,oe.prototype.removeEventListener=function(o,u,f,g){W(this,o,u,f,g)};function me(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new X(u,o);else if(u instanceof X)u.target=u.target||o;else{var C=u;u=new X(g,o),T(u,C)}if(C=!0,f)for(var R=f.length-1;0<=R;R--){var G=u.g=f[R];C=Ie(G,g,!0,u)&&C}if(G=u.g=o,C=Ie(G,g,!0,u)&&C,C=Ie(G,g,!1,u)&&C,f)for(R=0;R<f.length;R++)G=u.g=f[R],C=Ie(G,g,!1,u)&&C}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Jt(f[g]);delete o.g[u],o.h--}}this.F=null},oe.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},oe.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function Ie(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,R=0;R<u.length;++R){var G=u[R];if(G&&!G.da&&G.capture==f){var Ne=G.listener,it=G.ha||G.src;G.fa&&w(o.i,G),C=Ne.call(it,g)!==!1&&C}}return C&&!g.defaultPrevented}function nt(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function rt(o){o.g=nt(()=>{o.g=null,o.i&&(o.i=!1,rt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ot extends H{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(o){H.call(this),this.h=o,this.g={}}k(ht,H);var Nn=[];function vs(o){fe(o.g,function(u,f){this.g.hasOwnProperty(f)&&z(u)},o),o.g={}}ht.prototype.N=function(){ht.aa.N.call(this),vs(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var st=l.JSON.stringify,Mt=l.JSON.parse,Ni=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function kr(){}kr.prototype.h=null;function iu(o){return o.h||(o.h=o.i())}function ou(){}var ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ea(){X.call(this,"d")}k(Ea,X);function Ia(){X.call(this,"c")}k(Ia,X);var ur={},au=null;function Oi(){return au=au||new oe}ur.La="serverreachability";function lu(o){X.call(this,ur.La,o)}k(lu,X);function Ts(o){const u=Oi();me(u,new lu(u))}ur.STAT_EVENT="statevent";function cu(o,u){X.call(this,ur.STAT_EVENT,o),this.stat=u}k(cu,X);function Tt(o){const u=Oi();me(u,new cu(u,o))}ur.Ma="timingevent";function uu(o,u){X.call(this,ur.Ma,o),this.size=u}k(uu,X);function Es(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function Dm(o,u,f,g,C,R){o.info(function(){if(o.g)if(R)for(var G="",Ne=R.split("&"),it=0;it<Ne.length;it++){var Ae=Ne[it].split("=");if(1<Ae.length){var dt=Ae[0];Ae=Ae[1];var ft=dt.split("_");G=2<=ft.length&&ft[1]=="type"?G+(dt+"="+Ae+"&"):G+(dt+"=redacted&")}}else G=null;else G=R;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+G})}function Nm(o,u,f,g,C,R,G){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+R+" "+G})}function Vr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Mm(o,f)+(g?" "+g:"")})}function Om(o,u){o.info(function(){return"TIMEOUT: "+u})}Is.prototype.info=function(){};function Mm(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var R=C[0];if(R!="noop"&&R!="stop"&&R!="close")for(var G=1;G<C.length;G++)C[G]=""}}}}return st(f)}catch{return u}}var Mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ba;function Li(){}k(Li,kr),Li.prototype.g=function(){return new XMLHttpRequest},Li.prototype.i=function(){return{}},ba=new Li;function On(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new du}function du(){this.i=null,this.g="",this.h=!1}var fu={},Aa={};function Sa(o,u,f){o.L=1,o.v=$i(hn(u)),o.m=f,o.P=!0,pu(o,null)}function pu(o,u){o.F=Date.now(),Fi(o),o.A=hn(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Ru(f.i,"t",g),o.C=0,f=o.j.J,o.h=new du,o.g=Wu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Ot(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Nn[0]=C.toString()),C=Nn);for(var R=0;R<C.length;R++){var G=M(f,C[R],g||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ts(),Dm(o.i,o.u,o.A,o.l,o.R,o.m)}On.prototype.ca=function(o){o=o.target;const u=this.M;u&&dn(o)==3?u.j():this.Y(o)},On.prototype.Y=function(o){try{if(o==this.g)e:{const ft=dn(this.g);var u=this.g.Ba();const Or=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Ou(this.g)))){this.J||ft!=4||u==7||(u==8||0>=Or?Ts(3):Ts(2)),Ca(this);var f=this.g.Z();this.X=f;t:if(gu(this)){var g=Ou(this.g);o="";var C=g.length,R=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hr(this),bs(this);var G="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(R&&u==C-1)});g.length=0,this.h.g+=o,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,Nm(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,it=this.g;if((Ne=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Ne)){var Ae=Ne;break t}}Ae=null}if(f=Ae)Vr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ra(this,f);else{this.o=!1,this.s=3,Tt(12),hr(this),bs(this);break e}}if(this.P){f=!0;let qt;for(;!this.J&&this.C<G.length;)if(qt=Lm(this,G),qt==Aa){ft==4&&(this.s=4,Tt(14),f=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==fu){this.s=4,Tt(15),Vr(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else Vr(this.i,this.l,qt,null),Ra(this,qt);if(gu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||G.length!=0||this.h.h||(this.s=1,Tt(16),f=!1),this.o=this.o&&f,!f)Vr(this.i,this.l,G,"[Invalid Chunked Response]"),hr(this),bs(this);else if(0<G.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Na(dt),dt.M=!0,Tt(11))}}else Vr(this.i,this.l,G,null),Ra(this,G);ft==4&&hr(this),this.o&&!this.J&&(ft==4?ju(this.j,this):(this.o=!1,Fi(this)))}else e_(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),hr(this),bs(this)}}}catch{}finally{}};function gu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Lm(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Aa:(f=Number(u.substring(f,g)),isNaN(f)?fu:(g+=1,g+f>u.length?Aa:(u=u.slice(g,g+f),o.C=g+f,u)))}On.prototype.cancel=function(){this.J=!0,hr(this)};function Fi(o){o.S=Date.now()+o.I,mu(o,o.I)}function mu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Es(m(o.ba,o),u)}function Ca(o){o.B&&(l.clearTimeout(o.B),o.B=null)}On.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Om(this.i,this.A),this.L!=2&&(Ts(),Tt(17)),hr(this),this.s=2,bs(this)):mu(this,this.S-o)};function bs(o){o.j.G==0||o.J||ju(o.j,o)}function hr(o){Ca(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,vs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ra(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Pa(f.h,o))){if(!o.K&&Pa(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Gi(f),zi(f);else break e;Da(f),Tt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Es(m(f.Za,f),6e3));if(1>=vu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else fr(f,11)}else if((o.K||f.g==o)&&Gi(f),!L(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Ae=C[u];if(f.T=Ae[0],Ae=Ae[1],f.G==2)if(Ae[0]=="c"){f.K=Ae[1],f.ia=Ae[2];const dt=Ae[3];dt!=null&&(f.la=dt,f.j.info("VER="+f.la));const ft=Ae[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const Or=Ae[5];Or!=null&&typeof Or=="number"&&0<Or&&(g=1.5*Or,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const qt=o.g;if(qt){const Qi=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qi){var R=g.h;R.g||Qi.indexOf("spdy")==-1&&Qi.indexOf("quic")==-1&&Qi.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(xa(R,R.h),R.h=null))}if(g.D){const Oa=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Oa&&(g.ya=Oa,Be(g.I,g.D,Oa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var G=o;if(g.qa=zu(g,g.J?g.ia:null,g.W),G.K){wu(g.h,G);var Ne=G,it=g.L;it&&(Ne.I=it),Ne.B&&(Ca(Ne),Fi(Ne)),g.g=G}else Bu(g);0<f.i.length&&Wi(f)}else Ae[0]!="stop"&&Ae[0]!="close"||fr(f,7);else f.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?fr(f,7):Va(f):Ae[0]!="noop"&&f.l&&f.l.ta(Ae),f.v=0)}}Ts(4)}catch{}}var Fm=class{constructor(o,u){this.g=o,this.map=u}};function _u(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function vu(o){return o.h?1:o.g?o.g.size:0}function Pa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function xa(o,u){o.g?o.g.add(u):o.h=u}function wu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}_u.prototype.cancel=function(){if(this.i=Tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Tu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return O(o.i)}function Um(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function Bm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Eu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Bm(o),g=Um(o),C=g.length,R=0;R<C;R++)u.call(void 0,g[R],f&&f[R],o)}var Iu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $m(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),C=null;if(0<=g){var R=o[f].substring(0,g);C=o[f].substring(g+1)}else R=o[f];u(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function dr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof dr){this.h=o.h,Ui(this,o.j),this.o=o.o,this.g=o.g,Bi(this,o.s),this.l=o.l;var u=o.i,f=new Cs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),bu(this,f),this.m=o.m}else o&&(u=String(o).match(Iu))?(this.h=!1,Ui(this,u[1]||"",!0),this.o=As(u[2]||""),this.g=As(u[3]||"",!0),Bi(this,u[4]),this.l=As(u[5]||"",!0),bu(this,u[6]||"",!0),this.m=As(u[7]||"")):(this.h=!1,this.i=new Cs(null,this.h))}dr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ss(u,Au,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ss(u,Au,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ss(f,f.charAt(0)=="/"?Hm:qm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ss(f,Wm)),o.join("")};function hn(o){return new dr(o)}function Ui(o,u,f){o.j=f?As(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Bi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function bu(o,u,f){u instanceof Cs?(o.i=u,Gm(o.i,o.h)):(f||(u=Ss(u,zm)),o.i=new Cs(u,o.h))}function Be(o,u,f){o.i.set(u,f)}function $i(o){return Be(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function As(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ss(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,jm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function jm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Au=/[#\/\?@]/g,qm=/[#\?:]/g,Hm=/[#\?]/g,zm=/[#\?@]/g,Wm=/#/g;function Cs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Mn(o){o.g||(o.g=new Map,o.h=0,o.i&&$m(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Cs.prototype,n.add=function(o,u){Mn(this),this.i=null,o=Dr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Su(o,u){Mn(o),u=Dr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Cu(o,u){return Mn(o),u=Dr(o,u),o.g.has(u)}n.forEach=function(o,u){Mn(this),this.g.forEach(function(f,g){f.forEach(function(C){o.call(u,C,g,this)},this)},this)},n.na=function(){Mn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const C=o[g];for(let R=0;R<C.length;R++)f.push(u[g])}return f},n.V=function(o){Mn(this);let u=[];if(typeof o=="string")Cu(this,o)&&(u=u.concat(this.g.get(Dr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return Mn(this),this.i=null,o=Dr(this,o),Cu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Ru(o,u,f){Su(o,u),0<f.length&&(o.i=null,o.g.set(Dr(o,u),O(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const R=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var C=R;G[g]!==""&&(C+="="+encodeURIComponent(String(G[g]))),o.push(C)}}return this.i=o.join("&")};function Dr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Gm(o,u){u&&!o.j&&(Mn(o),o.i=null,o.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Su(this,g),Ru(this,C,f))},o)),o.j=u}function Km(o,u){const f=new Is;if(l.Image){const g=new Image;g.onload=A(Ln,f,"TestLoadImage: loaded",!0,u,g),g.onerror=A(Ln,f,"TestLoadImage: error",!1,u,g),g.onabort=A(Ln,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=A(Ln,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Qm(o,u){const f=new Is,g=new AbortController,C=setTimeout(()=>{g.abort(),Ln(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(R=>{clearTimeout(C),R.ok?Ln(f,"TestPingServer: ok",!0,u):Ln(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Ln(f,"TestPingServer: error",!1,u)})}function Ln(o,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Jm(){this.g=new Ni}function Ym(o,u,f){const g=f||"";try{Eu(o,function(C,R){let G=C;h(C)&&(G=st(C)),u.push(g+R+"="+encodeURIComponent(G))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function ji(o){this.l=o.Ub||null,this.j=o.eb||!1}k(ji,kr),ji.prototype.g=function(){return new qi(this.l,this.j)},ji.prototype.i=function(o){return function(){return o}}({});function qi(o,u){oe.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(qi,oe),n=qi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ps(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Rs(this):Ps(this),this.readyState==3&&Pu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Rs(this))},n.Qa=function(o){this.g&&(this.response=o,Rs(this))},n.ga=function(){this.g&&Rs(this)};function Rs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ps(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ps(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function xu(o){let u="";return fe(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function ka(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=xu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Be(o,u,f))}function qe(o){oe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(qe,oe);var Xm=/^https?$/i,Zm=["POST","PUT"];n=qe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ba.g(),this.v=this.o?iu(this.o):iu(ba),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(R){ku(this,R);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const R of g.keys())f.set(R,g.get(R));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(R=>R.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Zm,u,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,G]of f)this.g.setRequestHeader(R,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nu(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){ku(this,R)}};function ku(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Vu(o),Hi(o)}function Vu(o){o.A||(o.A=!0,me(o,"complete"),me(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,me(this,"complete"),me(this,"abort"),Hi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hi(this,!0)),qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Du(this):this.bb())},n.bb=function(){Du(this)};function Du(o){if(o.h&&typeof a<"u"&&(!o.v[1]||dn(o)!=4||o.Z()!=2)){if(o.u&&dn(o)==4)nt(o.Ea,0,o);else if(me(o,"readystatechange"),dn(o)==4){o.h=!1;try{const G=o.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=G===0){var C=String(o.D).match(Iu)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!Xm.test(C?C.toLowerCase():"")}f=g}if(f)me(o,"complete"),me(o,"success");else{o.m=6;try{var R=2<dn(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Vu(o)}}finally{Hi(o)}}}}function Hi(o,u){if(o.g){Nu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||me(o,"ready");try{f.onreadystatechange=g}catch{}}}function Nu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function dn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Mt(u)}};function Ou(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function e_(o){const u={};o=(o.g&&2<=dn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(L(o[g]))continue;var f=b(o[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const R=u[C]||[];u[C]=R,R.push(f)}E(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Mu(o){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xs("baseRetryDelayMs",5e3,o),this.cb=xs("retryDelaySeedMs",1e4,o),this.Wa=xs("forwardChannelMaxRetries",2,o),this.wa=xs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new _u(o&&o.concurrentRequestLimit),this.Da=new Jm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Mu.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){Tt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=zu(this,null,this.W),Wi(this)};function Va(o){if(Lu(o),o.G==3){var u=o.U++,f=hn(o.I);if(Be(f,"SID",o.K),Be(f,"RID",u),Be(f,"TYPE","terminate"),ks(o,f),u=new On(o,o.j,u),u.L=2,u.v=$i(hn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Wu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Fi(u)}Hu(o)}function zi(o){o.g&&(Na(o),o.g.cancel(),o.g=null)}function Lu(o){zi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Gi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Wi(o){if(!yu(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ce||le(),ye||(Ce(),ye=!0),Pt.add(u,o),o.B=0}}function t_(o,u){return vu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Es(m(o.Ga,o,u),qu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new On(this,this.j,o);let R=this.o;if(this.S&&(R?(R=y(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(C.H=R,R=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Uu(this,C,u),f=hn(this.I),Be(f,"RID",o),Be(f,"CVER",22),this.D&&Be(f,"X-HTTP-Session-Id",this.D),ks(this,f),R&&(this.O?u="headers="+encodeURIComponent(String(xu(R)))+"&"+u:this.m&&ka(f,this.m,R)),xa(this.h,C),this.Ua&&Be(f,"TYPE","init"),this.P?(Be(f,"$req",u),Be(f,"SID","null"),C.T=!0,Sa(C,f,null)):Sa(C,f,u),this.G=2}}else this.G==3&&(o?Fu(this,o):this.i.length==0||yu(this.h)||Fu(this))};function Fu(o,u){var f;u?f=u.l:f=o.U++;const g=hn(o.I);Be(g,"SID",o.K),Be(g,"RID",f),Be(g,"AID",o.T),ks(o,g),o.m&&o.o&&ka(g,o.m,o.o),f=new On(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Uu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),xa(o.h,f),Sa(f,g,u)}function ks(o,u){o.H&&fe(o.H,function(f,g){Be(u,g,f)}),o.l&&Eu({},function(f,g){Be(u,g,f)})}function Uu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;e:{var C=o.i;let R=-1;for(;;){const G=["count="+f];R==-1?0<f?(R=C[0].g,G.push("ofs="+R)):R=0:G.push("ofs="+R);let Ne=!0;for(let it=0;it<f;it++){let Ae=C[it].g;const dt=C[it].map;if(Ae-=R,0>Ae)R=Math.max(0,C[it].g-100),Ne=!1;else try{Ym(dt,G,"req"+Ae+"_")}catch{g&&g(dt)}}if(Ne){g=G.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Bu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ce||le(),ye||(Ce(),ye=!0),Pt.add(u,o),o.v=0}}function Da(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Es(m(o.Fa,o),qu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,$u(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Es(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),zi(this),$u(this))};function Na(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function $u(o){o.g=new On(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=hn(o.qa);Be(u,"RID","rpc"),Be(u,"SID",o.K),Be(u,"AID",o.T),Be(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Be(u,"TO",o.ja),Be(u,"TYPE","xmlhttp"),ks(o,u),o.m&&o.o&&ka(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=$i(hn(u)),f.m=null,f.P=!0,pu(f,o)}n.Za=function(){this.C!=null&&(this.C=null,zi(this),Da(this),Tt(19))};function Gi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ju(o,u){var f=null;if(o.g==u){Gi(o),Na(o),o.g=null;var g=2}else if(Pa(o.h,u))f=u.D,wu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;g=Oi(),me(g,new uu(g,f)),Wi(o)}else Bu(o);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&t_(o,u)||g==2&&Da(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),C){case 1:fr(o,5);break;case 4:fr(o,10);break;case 3:fr(o,6);break;default:fr(o,2)}}}function qu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function fr(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const C=!g;g=new dr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ui(g,"https"),$i(g),C?Km(g.toString(),f):Qm(g.toString(),f)}else Tt(2);o.G=0,o.l&&o.l.sa(u),Hu(o),Lu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Hu(o){if(o.G=0,o.ka=[],o.l){const u=Tu(o.h);(u.length!=0||o.i.length!=0)&&(U(o.ka,u),U(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function zu(o,u,f){var g=f instanceof dr?hn(f):new dr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Bi(g,g.s);else{var C=l.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var R=new dr(null);g&&Ui(R,g),u&&(R.g=u),C&&Bi(R,C),f&&(R.l=f),g=R}return f=o.D,u=o.ya,f&&u&&Be(g,f,u),Be(g,"VER",o.la),ks(o,g),g}function Wu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new qe(new ji({eb:f})):new qe(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gu(){}n=Gu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ki(){}Ki.prototype.g=function(o,u){return new xt(o,u)};function xt(o,u){oe.call(this),this.g=new Mu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!L(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!L(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Nr(this)}k(xt,oe),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Va(this.g)},xt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=st(o),o=f);u.i.push(new Fm(u.Ya++,o)),u.G==3&&Wi(u)},xt.prototype.N=function(){this.g.l=null,delete this.j,Va(this.g),delete this.g,xt.aa.N.call(this)};function Ku(o){Ea.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Ku,Ea);function Qu(){Ia.call(this),this.status=1}k(Qu,Ia);function Nr(o){this.g=o}k(Nr,Gu),Nr.prototype.ua=function(){me(this.g,"a")},Nr.prototype.ta=function(o){me(this.g,new Ku(o))},Nr.prototype.sa=function(o){me(this.g,new Qu)},Nr.prototype.ra=function(){me(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Xp=function(){return new Ki},Yp=function(){return Oi()},Jp=ur,Sl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,po=Mi,hu.COMPLETE="complete",Qp=hu,ou.EventType=ws,ws.OPEN="a",ws.CLOSE="b",ws.ERROR="c",ws.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Ms=ou,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,Kp=qe}).apply(typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{});const ed="@firebase/firestore",td="4.9.0";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let fs="12.0.0";/**
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
 */const Ar=new hc("@firebase/firestore");function Ur(){return Ar.logLevel}function Y(n,...e){if(Ar.logLevel<=ve.DEBUG){const t=e.map(bc);Ar.debug(`Firestore (${fs}): ${n}`,...t)}}function Pn(n,...e){if(Ar.logLevel<=ve.ERROR){const t=e.map(bc);Ar.error(`Firestore (${fs}): ${n}`,...t)}}function ns(n,...e){if(Ar.logLevel<=ve.WARN){const t=e.map(bc);Ar.warn(`Firestore (${fs}): ${n}`,...t)}}function bc(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ae(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Zp(n,r,t)}function Zp(n,e,t){let r=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Pn(r),new Error(r)}function ke(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Zp(e,s,r)}function pe(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Vn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class In{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class eg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(gt.UNAUTHENTICATED))}shutdown(){}}class uI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class hI{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ke(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new In;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new In,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string",31837,{l:r}),new eg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string",2055,{h:e}),new gt(e)}}class dI{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fI{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new dI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ke(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new nd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new nd(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function gI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ac{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=gI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function we(n,e){return n<e?-1:n>e?1:0}function Cl(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return el(s)===el(i)?we(s,i):el(s)?1:-1}return we(n.length,e.length)}const mI=55296,_I=57343;function el(n){const e=n.charCodeAt(0);return e>=mI&&e<=_I}function rs(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const rd="__name__";class Zt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ae(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ae(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Zt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return we(e.length,t.length)}static compareSegments(e,t){const r=Zt.isNumericId(e),s=Zt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Zt.extractNumericId(e).compare(Zt.extractNumericId(t)):Cl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jn.fromString(e.substring(4,e.length-2))}}class Fe extends Zt{construct(e,t,r){return new Fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Fe(t)}static emptyPath(){return new Fe([])}}const yI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Zt{construct(e,t,r){return new ct(e,t,r)}static isValidIdentifier(e){return yI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rd}static keyField(){return new ct([rd])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new J(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(t)}static emptyPath(){return new ct([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Fe.fromString(e))}static fromName(e){return new se(Fe.fromString(e).popFirst(5))}static empty(){return new se(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Fe(e.slice()))}}/**
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
 */function tg(n,e,t){if(!t)throw new J(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vI(n,e,t,r){if(e===!0&&r===!0)throw new J(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function sd(n){if(!se.isDocumentKey(n))throw new J(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function id(n){if(se.isDocumentKey(n))throw new J(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ng(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function sa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ae(12329,{type:typeof n})}function Kt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sa(n);throw new J(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Je(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ai(n,e){if(!ng(n))throw new J(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new J(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const od=-62135596800,ad=1e6;class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*ad);return new Ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<od)throw new J(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ad}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ai(e,Ue._jsonSchema))return new Ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-od;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ue._jsonSchemaVersion="firestore/timestamp/1.0",Ue._jsonSchema={type:Je("string",Ue._jsonSchemaVersion),seconds:Je("number"),nanoseconds:Je("number")};/**
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
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Ue(0,0))}static max(){return new he(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ci=-1;function wI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Ue(t+1,0):new Ue(t,r));return new tr(s,se.empty(),e)}function TI(n){return new tr(n.readTime,n.key,ci)}class tr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new tr(he.min(),se.empty(),ci)}static max(){return new tr(he.max(),se.empty(),ci)}}function EI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=se.comparator(n.documentKey,e.documentKey),t!==0?t:we(n.largestBatchId,e.largestBatchId))}/**
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
 */const II="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ps(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==II)throw n;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(s=>s?N.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new N((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new N((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function AI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gs(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ia{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ia.ce=-1;/**
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
 */const Sc=-1;function oa(n){return n==null}function No(n){return n===0&&1/n==-1/0}function SI(n){return typeof n=="number"&&Number.isInteger(n)&&!No(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const rg="";function CI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ld(e)),e=RI(n.get(t),e);return ld(e)}function RI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case rg:t+="";break;default:t+=i}}return t}function ld(n){return n+rg+""}/**
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
 */function cd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function lr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class je{constructor(e,t){this.comparator=e,this.root=t||ot.EMPTY}insert(e,t){return new je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ot(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ud(this.data.getIterator())}getIteratorFrom(e){return new ud(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ze(this.comparator);return t.data=e,t}}class ud{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Nt([])}unionWith(e){let t=new Ze(ct.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class ig extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ig("Invalid base64 string: "+i):i}}(e);return new ut(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const PI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(n){if(ke(!!n,39018),typeof n=="string"){let e=0;const t=PI.exec(n);if(ke(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(n.seconds),nanos:ze(n.nanos)}}function ze(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rr(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
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
 */const og="server_timestamp",ag="__type__",lg="__previous_value__",cg="__local_write_time__";function Cc(n){return(n?.mapValue?.fields||{})[ag]?.stringValue===og}function aa(n){const e=n.mapValue.fields[lg];return Cc(e)?aa(e):e}function ui(n){const e=nr(n.mapValue.fields[cg].timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class xI{constructor(e,t,r,s,i,a,l,c,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const Oo="(default)";class hi{constructor(e,t){this.projectId=e,this.database=t||Oo}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database===Oo}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ug="__type__",kI="__max__",no={mapValue:{}},hg="__vector__",Mo="value";function sr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Cc(n)?4:DI(n)?9007199254740991:VI(n)?10:11:ae(28295,{value:n})}function un(n,e){if(n===e)return!0;const t=sr(n);if(t!==sr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ui(n).isEqual(ui(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=nr(s.timestampValue),l=nr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return rr(s.bytesValue).isEqual(rr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ze(s.doubleValue),l=ze(i.doubleValue);return a===l?No(a)===No(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return rs(n.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(cd(a)!==cd(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!un(a[c],l[c])))return!1;return!0}(n,e);default:return ae(52216,{left:n})}}function di(n,e){return(n.values||[]).find(t=>un(t,e))!==void 0}function ss(n,e){if(n===e)return 0;const t=sr(n),r=sr(e);if(t!==r)return we(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return we(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ze(i.integerValue||i.doubleValue),c=ze(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return hd(n.timestampValue,e.timestampValue);case 4:return hd(ui(n),ui(e));case 5:return Cl(n.stringValue,e.stringValue);case 6:return function(i,a){const l=rr(i),c=rr(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=we(l[h],c[h]);if(d!==0)return d}return we(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=we(ze(i.latitude),ze(a.latitude));return l!==0?l:we(ze(i.longitude),ze(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return dd(n.arrayValue,e.arrayValue);case 10:return function(i,a){const l=i.fields||{},c=a.fields||{},h=l[Mo]?.arrayValue,d=c[Mo]?.arrayValue,p=we(h?.values?.length||0,d?.values?.length||0);return p!==0?p:dd(h,d)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===no.mapValue&&a===no.mapValue)return 0;if(i===no.mapValue)return 1;if(a===no.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Cl(c[p],d[p]);if(m!==0)return m;const A=ss(l[c[p]],h[d[p]]);if(A!==0)return A}return we(c.length,d.length)}(n.mapValue,e.mapValue);default:throw ae(23264,{he:t})}}function hd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return we(n,e);const t=nr(n),r=nr(e),s=we(t.seconds,r.seconds);return s!==0?s:we(t.nanos,r.nanos)}function dd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ss(t[s],r[s]);if(i)return i}return we(t.length,r.length)}function is(n){return Rl(n)}function Rl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=nr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return rr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return se.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Rl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Rl(t.fields[a])}`;return s+"}"}(n.mapValue):ae(61005,{value:n})}function go(n){switch(sr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=aa(n);return e?16+go(e):16;case 5:return 2*n.stringValue.length;case 6:return rr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+go(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return lr(r.fields,(i,a)=>{s+=i.length+go(a)}),s}(n.mapValue);default:throw ae(13486,{value:n})}}function fd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Pl(n){return!!n&&"integerValue"in n}function Rc(n){return!!n&&"arrayValue"in n}function pd(n){return!!n&&"nullValue"in n}function gd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mo(n){return!!n&&"mapValue"in n}function VI(n){return(n?.mapValue?.fields||{})[ug]?.stringValue===hg}function Ys(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return lr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ys(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ys(n.arrayValue.values[t]);return e}return{...n}}function DI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===kI}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!mo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(t)}setAll(e){let t=ct.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Ys(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());mo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){lr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Rt(Ys(this.value))}}function dg(n){const e=[];return lr(n.fields,(t,r)=>{const s=new ct([t]);if(mo(r)){const i=dg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Nt(e)}/**
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
 */class _t{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,he.min(),he.min(),he.min(),Rt.empty(),0)}static newFoundDocument(e,t,r,s){return new _t(e,1,t,he.min(),r,s,0)}static newNoDocument(e,t){return new _t(e,2,t,he.min(),he.min(),Rt.empty(),0)}static newUnknownDocument(e,t){return new _t(e,3,t,he.min(),he.min(),Rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lo{constructor(e,t){this.position=e,this.inclusive=t}}function md(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(a.referenceValue),t.key):r=ss(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _d(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!un(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Fo{constructor(e,t="asc"){this.field=e,this.dir=t}}function NI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class fg{}class Qe extends fg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new MI(e,t,r):t==="array-contains"?new UI(e,r):t==="in"?new BI(e,r):t==="not-in"?new $I(e,r):t==="array-contains-any"?new jI(e,r):new Qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new LI(e,r):new FI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ss(t,this.value)):t!==null&&sr(this.value)===sr(t)&&this.matchesComparison(ss(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends fg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Qt(e,t)}matches(e){return pg(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function pg(n){return n.op==="and"}function gg(n){return OI(n)&&pg(n)}function OI(n){for(const e of n.filters)if(e instanceof Qt)return!1;return!0}function xl(n){if(n instanceof Qe)return n.field.canonicalString()+n.op.toString()+is(n.value);if(gg(n))return n.filters.map(e=>xl(e)).join(",");{const e=n.filters.map(t=>xl(t)).join(",");return`${n.op}(${e})`}}function mg(n,e){return n instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(n,e):n instanceof Qt?function(r,s){return s instanceof Qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&mg(a,s.filters[l]),!0):!1}(n,e):void ae(19439)}function _g(n){return n instanceof Qe?function(t){return`${t.field.canonicalString()} ${t.op} ${is(t.value)}`}(n):n instanceof Qt?function(t){return t.op.toString()+" {"+t.getFilters().map(_g).join(" ,")+"}"}(n):"Filter"}class MI extends Qe{constructor(e,t,r){super(e,t,r),this.key=se.fromName(r.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.matchesComparison(t)}}class LI extends Qe{constructor(e,t){super(e,"in",t),this.keys=yg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class FI extends Qe{constructor(e,t){super(e,"not-in",t),this.keys=yg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function yg(n,e){return(e.arrayValue?.values||[]).map(t=>se.fromName(t.referenceValue))}class UI extends Qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rc(t)&&di(t.arrayValue,this.value)}}class BI extends Qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&di(this.value.arrayValue,t)}}class $I extends Qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!di(this.value.arrayValue,t)}}class jI extends Qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>di(this.value.arrayValue,r))}}/**
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
 */class qI{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function yd(n,e=null,t=[],r=[],s=null,i=null,a=null){return new qI(n,e,t,r,s,i,a)}function Pc(n){const e=pe(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>xl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>is(r)).join(",")),e.Te=t}return e.Te}function xc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!NI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!mg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_d(n.startAt,e.startAt)&&_d(n.endAt,e.endAt)}function kl(n){return se.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Si{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function HI(n,e,t,r,s,i,a,l){return new Si(n,e,t,r,s,i,a,l)}function kc(n){return new Si(n)}function vd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vg(n){return n.collectionGroup!==null}function Xs(n){const e=pe(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ze(ct.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Fo(i,r))}),t.has(ct.keyField().canonicalString())||e.Ie.push(new Fo(ct.keyField(),r))}return e.Ie}function rn(n){const e=pe(n);return e.Ee||(e.Ee=zI(e,Xs(n))),e.Ee}function zI(n,e){if(n.limitType==="F")return yd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fo(s.field,i)});const t=n.endAt?new Lo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Lo(n.startAt.position,n.startAt.inclusive):null;return yd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Vl(n,e){const t=n.filters.concat([e]);return new Si(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Dl(n,e,t){return new Si(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function la(n,e){return xc(rn(n),rn(e))&&n.limitType===e.limitType}function wg(n){return`${Pc(rn(n))}|lt:${n.limitType}`}function Br(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>_g(s)).join(", ")}]`),oa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>is(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>is(s)).join(",")),`Target(${r})`}(rn(n))}; limitType=${n.limitType})`}function ca(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=md(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Xs(r),s)||r.endAt&&!function(a,l,c){const h=md(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Xs(r),s))}(n,e)}function WI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Tg(n){return(e,t)=>{let r=!1;for(const s of Xs(n)){const i=GI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function GI(n,e,t){const r=n.field.isKeyField()?se.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ss(c,h):ae(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:n.dir})}}/**
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
 */class Rr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){lr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return sg(this.inner)}size(){return this.innerSize}}/**
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
 */const KI=new je(se.comparator);function xn(){return KI}const Eg=new je(se.comparator);function Ls(...n){let e=Eg;for(const t of n)e=e.insert(t.key,t);return e}function Ig(n){let e=Eg;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function vr(){return Zs()}function bg(){return Zs()}function Zs(){return new Rr(n=>n.toString(),(n,e)=>n.isEqual(e))}const QI=new je(se.comparator),JI=new Ze(se.comparator);function Ee(...n){let e=JI;for(const t of n)e=e.add(t);return e}const YI=new Ze(we);function XI(){return YI}/**
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
 */function Vc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(e)?"-0":e}}function Ag(n){return{integerValue:""+n}}function Sg(n,e){return SI(e)?Ag(e):Vc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ua{constructor(){this._=void 0}}function ZI(n,e,t){return n instanceof Uo?function(s,i){const a={fields:{[ag]:{stringValue:og},[cg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cc(i)&&(i=aa(i)),i&&(a.fields[lg]=i),{mapValue:a}}(t,e):n instanceof fi?Rg(n,e):n instanceof pi?Pg(n,e):function(s,i){const a=Cg(s,i),l=wd(a)+wd(s.Ae);return Pl(a)&&Pl(s.Ae)?Ag(l):Vc(s.serializer,l)}(n,e)}function eb(n,e,t){return n instanceof fi?Rg(n,e):n instanceof pi?Pg(n,e):t}function Cg(n,e){return n instanceof gi?function(r){return Pl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Uo extends ua{}class fi extends ua{constructor(e){super(),this.elements=e}}function Rg(n,e){const t=xg(e);for(const r of n.elements)t.some(s=>un(s,r))||t.push(r);return{arrayValue:{values:t}}}class pi extends ua{constructor(e){super(),this.elements=e}}function Pg(n,e){let t=xg(e);for(const r of n.elements)t=t.filter(s=>!un(s,r));return{arrayValue:{values:t}}}class gi extends ua{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function wd(n){return ze(n.integerValue||n.doubleValue)}function xg(n){return Rc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class tb{constructor(e,t){this.field=e,this.transform=t}}function nb(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof fi&&s instanceof fi||r instanceof pi&&s instanceof pi?rs(r.elements,s.elements,un):r instanceof gi&&s instanceof gi?un(r.Ae,s.Ae):r instanceof Uo&&s instanceof Uo}(n.transform,e.transform)}class rb{constructor(e,t){this.version=e,this.transformResults=t}}class $t{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ha{}function kg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Dc(n.key,$t.none()):new Ci(n.key,n.data,$t.none());{const t=n.data,r=Rt.empty();let s=new Ze(ct.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new cr(n.key,r,new Nt(s.toArray()),$t.none())}}function sb(n,e,t){n instanceof Ci?function(s,i,a){const l=s.value.clone(),c=Ed(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof cr?function(s,i,a){if(!_o(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Ed(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Vg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ei(n,e,t,r){return n instanceof Ci?function(i,a,l,c){if(!_o(i.precondition,a))return l;const h=i.value.clone(),d=Id(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof cr?function(i,a,l,c){if(!_o(i.precondition,a))return l;const h=Id(i.fieldTransforms,c,a),d=a.data;return d.setAll(Vg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return _o(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function ib(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Cg(r.transform,s||null);i!=null&&(t===null&&(t=Rt.empty()),t.set(r.field,i))}return t||null}function Td(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,(i,a)=>nb(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ci extends ha{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cr extends ha{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ed(n,e,t){const r=new Map;ke(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,eb(a,l,t[s]))}return r}function Id(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,ZI(i,a,e))}return r}class Dc extends ha{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ob extends ha{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ab{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sb(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ei(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ei(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=kg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ee())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(t,r)=>Td(t,r))&&rs(this.baseMutations,e.baseMutations,(t,r)=>Td(t,r))}}class Nc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ke(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return QI}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Nc(e,t,r,s)}}/**
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
 */class lb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class cb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ke,be;function ub(n){switch(n){case V.OK:return ae(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ae(15467,{code:n})}}function Dg(n){if(n===void 0)return Pn("GRPC error has no .code"),V.UNKNOWN;switch(n){case Ke.OK:return V.OK;case Ke.CANCELLED:return V.CANCELLED;case Ke.UNKNOWN:return V.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return V.INTERNAL;case Ke.UNAVAILABLE:return V.UNAVAILABLE;case Ke.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ke.NOT_FOUND:return V.NOT_FOUND;case Ke.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ke.ABORTED:return V.ABORTED;case Ke.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ke.DATA_LOSS:return V.DATA_LOSS;default:return ae(39323,{code:n})}}(be=Ke||(Ke={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function hb(){return new TextEncoder}/**
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
 */const db=new Jn([4294967295,4294967295],0);function bd(n){const e=hb().encode(n),t=new Gp;return t.update(e),new Uint8Array(t.digest())}function Ad(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jn([t,r],0),new Jn([s,i],0)]}class Oc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Fs(`Invalid padding: ${t}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Jn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Jn.fromNumber(r)));return s.compare(db)===1&&(s=new Jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=bd(e),[r,s]=Ad(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Oc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=bd(e),[r,s]=Ad(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class da{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new da(he.min(),s,new je(we),xn(),Ee())}}class Ri{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ri(r,t,Ee(),Ee(),Ee())}}/**
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
 */class yo{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Ng{constructor(e,t){this.targetId=e,this.Ce=t}}class Og{constructor(e,t,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Sd{constructor(){this.ve=0,this.Fe=Cd(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ee(),t=Ee(),r=Ee();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}}),new Ri(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Cd()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ke(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class fb{constructor(e){this.Ge=e,this.ze=new Map,this.je=xn(),this.Je=ro(),this.He=ro(),this.Ye=new je(we)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ae(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(kl(i))if(r===0){const a=new se(i.path);this.et(t,a,_t.newNoDocument(a,he.min()))}else ke(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),c=l?this.ct(l,e,a):1;if(c!==0){this.it(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=rr(r).toUint8Array()}catch(c){if(c instanceof ig)return ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Oc(a,s,i)}catch(c){return ns(c instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&kl(l.target)){const c=new se(l.target.path);this.It(c).has(a)||this.Et(a,c)||this.et(a,c,_t.newNoDocument(c,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=Ee();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new da(e,t,this.Ye,this.je,r);return this.je=xn(),this.Je=ro(),this.He=ro(),this.Ye=new je(we),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Sd,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ze(we),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ze(we),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||Y("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Sd),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ro(){return new je(se.comparator)}function Cd(){return new je(se.comparator)}const pb={asc:"ASCENDING",desc:"DESCENDING"},gb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mb={and:"AND",or:"OR"};class _b{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nl(n,e){return n.useProto3Json||oa(e)?e:{value:e}}function Bo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function yb(n,e){return Bo(n,e.toTimestamp())}function sn(n){return ke(!!n,49232),he.fromTimestamp(function(t){const r=nr(t);return new Ue(r.seconds,r.nanos)}(n))}function Mc(n,e){return Ol(n,e).canonicalString()}function Ol(n,e){const t=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Lg(n){const e=Fe.fromString(n);return ke(jg(e),10190,{key:e.toString()}),e}function Ml(n,e){return Mc(n.databaseId,e.path)}function tl(n,e){const t=Lg(e);if(t.get(1)!==n.databaseId.projectId)throw new J(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new se(Ug(t))}function Fg(n,e){return Mc(n.databaseId,e)}function vb(n){const e=Lg(n);return e.length===4?Fe.emptyPath():Ug(e)}function Ll(n){return new Fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ug(n){return ke(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Rd(n,e,t){return{name:Ml(n,e),fields:t.value.mapValue.fields}}function wb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(ke(d===void 0||typeof d=="string",58123),ut.fromBase64String(d||"")):(ke(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ut.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?V.UNKNOWN:Dg(h.code);return new J(d,h.message||"")}(a);t=new Og(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=tl(n,r.document.name),i=sn(r.document.updateTime),a=r.document.createTime?sn(r.document.createTime):he.min(),l=new Rt({mapValue:{fields:r.document.fields}}),c=_t.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new yo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=tl(n,r.document),i=r.readTime?sn(r.readTime):he.min(),a=_t.newNoDocument(s,i),l=r.removedTargetIds||[];t=new yo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=tl(n,r.document),i=r.removedTargetIds||[];t=new yo([],i,s,null)}else{if(!("filter"in e))return ae(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new cb(s,i),l=r.targetId;t=new Ng(l,a)}}return t}function Tb(n,e){let t;if(e instanceof Ci)t={update:Rd(n,e.key,e.value)};else if(e instanceof Dc)t={delete:Ml(n,e.key)};else if(e instanceof cr)t={update:Rd(n,e.key,e.data),updateMask:xb(e.fieldMask)};else{if(!(e instanceof ob))return ae(16599,{Vt:e.type});t={verify:Ml(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Uo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof gi)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw ae(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:yb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)}(n,e.precondition)),t}function Eb(n,e){return n&&n.length>0?(ke(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?sn(s.updateTime):sn(i);return a.isEqual(he.min())&&(a=sn(i)),new rb(a,s.transformResults||[])}(t,e))):[]}function Ib(n,e){return{documents:[Fg(n,e.path)]}}function bb(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Fg(n,s);const i=function(h){if(h.length!==0)return $g(Qt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:$r(m.field),direction:Cb(m.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Nl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function Ab(n){let e=vb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ke(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const m=Bg(p);return m instanceof Qt&&gg(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(m=>function(k){return new Fo(jr(k.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,oa(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(p){const m=!!p.before,A=p.values||[];return new Lo(A,m)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const m=!p.before,A=p.values||[];return new Lo(A,m)}(t.endAt)),HI(e,s,a,i,l,"F",c,h)}function Sb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=jr(t.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=jr(t.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jr(t.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=jr(t.unaryFilter.field);return Qe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}}(n):n.fieldFilter!==void 0?function(t){return Qe.create(jr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Qt.create(t.compositeFilter.filters.map(r=>Bg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}}(t.compositeFilter.op))}(n):ae(30097,{filter:n})}function Cb(n){return pb[n]}function Rb(n){return gb[n]}function Pb(n){return mb[n]}function $r(n){return{fieldPath:n.canonicalString()}}function jr(n){return ct.fromServerFormat(n.fieldPath)}function $g(n){return n instanceof Qe?function(t){if(t.op==="=="){if(gd(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NAN"}};if(pd(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gd(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NAN"}};if(pd(t.value))return{unaryFilter:{field:$r(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(t.field),op:Rb(t.op),value:t.value}}}(n):n instanceof Qt?function(t){const r=t.getFilters().map(s=>$g(s));return r.length===1?r[0]:{compositeFilter:{op:Pb(t.op),filters:r}}}(n):ae(54877,{filter:n})}function xb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Hn{constructor(e,t,r,s,i=he.min(),a=he.min(),l=ut.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class kb{constructor(e){this.yt=e}}function Vb(n){const e=Ab({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Dl(e,e.limit,"L"):e}/**
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
 */class Db{constructor(){this.Cn=new Nb}addToCollectionParentIndex(e,t){return this.Cn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(tr.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Nb{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ze(Fe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ze(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Pd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qg=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(qg,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
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
 */class os{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new os(0)}static cr(){return new os(-1)}}/**
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
 */const xd="LruGarbageCollector",Ob=1048576;function kd([n,e],[t,r]){const s=we(n,t);return s===0?we(e,r):s}class Mb{constructor(e){this.Ir=e,this.buffer=new Ze(kd),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();kd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Lb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Y(xd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gs(t)?Y(xd,"Ignoring IndexedDB error during garbage collection: ",t):await ps(t)}await this.Vr(3e5)})}}class Fb{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(ia.ce);const r=new Mb(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Pd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pd):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Ur()<=ve.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Ub(n,e){return new Fb(n,e)}/**
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
 */class Bb{constructor(){this.changes=new Rr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class $b{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class jb{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ei(r.mutation,s,Nt.empty(),Ue.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ee()){const s=vr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Ls();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=vr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ee()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=xn();const a=Zs(),l=function(){return Zs()}();return t.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof cr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ei(d.mutation,h,d.mutation.getFieldMask(),Ue.now())):a.set(h.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),t.forEach((h,d)=>l.set(h,new $b(d,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Zs();let s=new je((a,l)=>a-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||Nt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||Ee()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=bg();d.forEach(m=>{if(!i.has(m)){const A=kg(t.get(m),r.get(m));A!==null&&p.set(m,A),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return se.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(vr());let l=ci,c=i;return a.next(h=>N.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,Ee())).next(d=>({batchId:l,changes:Ig(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new se(t)).next(r=>{let s=Ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ls();return this.indexManager.getCollectionParents(e,i).next(l=>N.forEach(l,c=>{const h=function(p,m){return new Si(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,_t.newInvalidDocument(d)))});let l=Ls();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&ei(d.mutation,h,Nt.empty(),Ue.now()),ca(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class qb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return N.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:sn(s.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:Vb(s.bundledQuery),readTime:sn(s.readTime)}}(t)),N.resolve()}}/**
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
 */class Hb{constructor(){this.overlays=new je(se.comparator),this.qr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=vr();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=vr(),i=t.length+1,a=new se(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new je((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=vr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=vr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return N.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new lb(t,r));let i=this.qr.get(t);i===void 0&&(i=Ee(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class zb{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class Lc{constructor(){this.Qr=new Ze(tt.$r),this.Ur=new Ze(tt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new tt(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new tt(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new se(new Fe([])),r=new tt(t,e),s=new tt(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new se(new Fe([])),r=new tt(t,e),s=new tt(t,e+1);let i=Ee();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new tt(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return se.comparator(e.key,t.key)||we(e.Yr,t.Yr)}static Kr(e,t){return we(e.Yr,t.Yr)||se.comparator(e.key,t.key)}}/**
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
 */class Wb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ze(tt.$r)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ab(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new tt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Sc:this.tr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new tt(t,0),s=new tt(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);i.push(l)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ze(we);return t.forEach(s=>{const i=new tt(s,0),a=new tt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],l=>{r=r.add(l.Yr)})}),N.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const a=new tt(new se(i),0);let l=new Ze(we);return this.Zr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Yr)),!0)},a),N.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ke(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return N.forEach(t.mutations,s=>{const i=new tt(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new tt(t,0),s=this.Zr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Gb{constructor(e){this.ri=e,this.docs=function(){return new je(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(t))}getEntries(e,t){let r=xn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=xn();const a=t.path,l=new se(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||EI(TI(d),r)<=0||(s.has(d.key)||ca(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ae(9500)}ii(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Kb(this)}getSize(e){return N.resolve(this.size)}}class Kb extends Bb{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Qb{constructor(e){this.persistence=e,this.si=new Rr(t=>Pc(t),xc),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.oi=0,this._i=new Lc,this.targetCount=0,this.ai=os.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),N.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new os(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Pr(t),N.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this._i.containsKey(t))}}/**
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
 */class Hg{constructor(e,t){this.ui={},this.overlays={},this.ci=new ia(0),this.li=!1,this.li=!0,this.hi=new zb,this.referenceDelegate=e(this),this.Pi=new Qb(this),this.indexManager=new Db,this.remoteDocumentCache=function(s){return new Gb(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new kb(t),this.Ii=new qb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Hb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Wb(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){Y("MemoryPersistence","Starting transaction:",e);const s=new Jb(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return N.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class Jb extends bI{constructor(e){super(),this.currentSequenceNumber=e}}class Fc{constructor(e){this.persistence=e,this.Ri=new Lc,this.Vi=null}static mi(e){return new Fc(e)}get fi(){if(this.Vi)return this.Vi;throw ae(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.fi,r=>{const s=se.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,he.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return N.or([()=>N.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class $o{constructor(e,t){this.persistence=e,this.pi=new Rr(r=>CI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Ub(this,t)}static mi(e,t){return new $o(e,t)}Ei(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return N.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?N.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(l=>{l||(r++,i.removeEntry(a,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=go(e.data.value)),t}br(e,t,r){return N.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Uc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=Ee(),s=Ee();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Uc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Yb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Xb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Hv()?8:AI(vt())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Yb;return this.Ss(e,t,a).next(l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Ur()<=ve.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Br(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),N.resolve()):(Ur()<=ve.DEBUG&&Y("QueryEngine","Query:",Br(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ur()<=ve.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Br(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(t))):N.resolve())}ys(e,t){if(vd(t))return N.resolve(null);let r=rn(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Dl(t,null,"F"),r=rn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Ee(...i);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Ds(t,l);return this.Cs(t,h,a,c.readTime)?this.ys(e,Dl(t,null,"F")):this.vs(e,h,t,c)}))})))}ws(e,t,r,s){return vd(t)||s.isEqual(he.min())?N.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?N.resolve(null):(Ur()<=ve.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Br(t)),this.vs(e,a,t,wI(s,ci)).next(l=>l))})}Ds(e,t){let r=new Ze(Tg(e));return t.forEach((s,i)=>{ca(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Ur()<=ve.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Br(t)),this.ps.getDocumentsMatchingQuery(e,t,tr.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Bc="LocalStore",Zb=3e8;class e0{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new je(we),this.xs=new Rr(i=>Pc(i),xc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function t0(n,e,t,r){return new e0(n,e,t,r)}async function zg(n,e){const t=pe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=Ee();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:l}))})})}function n0(n,e){const t=pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let A=N.resolve();return m.forEach(k=>{A=A.next(()=>d.getEntry(c,k)).next(O=>{const U=h.docVersions.get(k);ke(U!==null,48541),O.version.compareTo(U)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),d.addEntry(O)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Wg(n){const e=pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function r0(n,e){const t=pe(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(t.Pi.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(i,d.addedDocuments,p)));let A=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(ut.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):d.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(d.resumeToken,r)),s=s.insert(p,A),function(O,U,q){return O.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Zb?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(m,A,d)&&l.push(t.Pi.updateTargetData(i,A))});let c=xn(),h=Ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(s0(i,a,e.documentUpdates).next(d=>{c=d.ks,h=d.qs})),!r.isEqual(he.min())){const d=t.Pi.getLastRemoteSnapshotVersion(i).next(p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return N.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.Ms=s,i))}function s0(n,e,t){let r=Ee(),s=Ee();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=xn();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):Y(Bc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{ks:a,qs:s}})}function i0(n,e){const t=pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Sc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function o0(n,e){const t=pe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Hn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Fl(n,e,t){const r=pe(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!gs(a))throw a;Y(Bc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Vd(n,e,t){const r=pe(n);let s=he.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=pe(c),m=p.xs.get(d);return m!==void 0?N.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,d)}(r,a,rn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:he.min(),t?i:Ee())).next(l=>(a0(r,WI(e),l),{documents:l,Qs:i})))}function a0(n,e,t){let r=n.Os.get(e)||he.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Dd{constructor(){this.activeTargetIds=XI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class l0{constructor(){this.Mo=new Dd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Dd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class c0{Oo(e){}shutdown(){}}/**
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
 */const Nd="ConnectivityMonitor";class Od{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Y(Nd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Y(Nd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let so=null;function Ul(){return so===null?so=function(){return 268435456+Math.round(2147483648*Math.random())}():so++,"0x"+so.toString(16)}/**
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
 */const nl="RestConnection",u0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class h0{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Oo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Ul(),l=this.zo(e,t.toUriEncodedString());Y(nl,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:h}=new URL(l),d=ls(h);return this.Jo(e,l,c,r,d).then(p=>(Y(nl,`Received RPC '${e}' ${a}: `,p),p),p=>{throw ns(nl,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=u0[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class d0{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const pt="WebChannelConnection";class f0 extends h0{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Ul();return new Promise((l,c)=>{const h=new Kp;h.setWithCredentials(!0),h.listenOnce(Qp.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case po.NO_ERROR:const p=h.getResponseJson();Y(pt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case po.TIMEOUT:Y(pt,`RPC '${e}' ${a} timed out`),c(new J(V.DEADLINE_EXCEEDED,"Request time out"));break;case po.HTTP_ERROR:const m=h.getStatus();if(Y(pt,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const k=A?.error;if(k&&k.status&&k.message){const O=function(q){const L=q.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(L)>=0?L:V.UNKNOWN}(k.status);c(new J(O,k.message))}else c(new J(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new J(V.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Y(pt,`RPC '${e}' ${a} completed.`)}});const d=JSON.stringify(s);Y(pt,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)})}T_(e,t,r){const s=Ul(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Xp(),l=Yp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Y(pt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);this.I_(p);let m=!1,A=!1;const k=new d0({Yo:U=>{A?Y(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,U):(m||(Y(pt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(pt,`RPC '${e}' stream ${s} sending:`,U),p.send(U))},Zo:()=>p.close()}),O=(U,q,L)=>{U.listen(q,P=>{try{L(P)}catch(F){setTimeout(()=>{throw F},0)}})};return O(p,Ms.EventType.OPEN,()=>{A||(Y(pt,`RPC '${e}' stream ${s} transport opened.`),k.o_())}),O(p,Ms.EventType.CLOSE,()=>{A||(A=!0,Y(pt,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(p))}),O(p,Ms.EventType.ERROR,U=>{A||(A=!0,ns(pt,`RPC '${e}' stream ${s} transport errored. Name:`,U.name,"Message:",U.message),k.a_(new J(V.UNAVAILABLE,"The operation could not be completed")))}),O(p,Ms.EventType.MESSAGE,U=>{if(!A){const q=U.data[0];ke(!!q,16349);const L=q,P=L?.error||L[0]?.error;if(P){Y(pt,`RPC '${e}' stream ${s} received error:`,P);const F=P.status;let ne=function(y){const v=Ke[y];if(v!==void 0)return Dg(v)}(F),fe=P.message;ne===void 0&&(ne=V.INTERNAL,fe="Unknown error status: "+F+" with message "+P.message),A=!0,k.a_(new J(ne,fe)),p.close()}else Y(pt,`RPC '${e}' stream ${s} received:`,q),k.u_(q)}}),O(l,Jp.STAT_EVENT,U=>{U.stat===Sl.PROXY?Y(pt,`RPC '${e}' stream ${s} detected buffering proxy`):U.stat===Sl.NOPROXY&&Y(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function rl(){return typeof document<"u"?document:null}/**
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
 */function fa(n){return new _b(n,!0)}/**
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
 */class Gg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Md="PersistentStream";class Kg{constructor(e,t,r,s,i,a,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Gg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Pn(t.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new J(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Y(Md,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(Y(Md,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class p0 extends Kg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=wb(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?he.min():a.readTime?sn(a.readTime):he.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Ll(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=kl(c)?{documents:Ib(i,c)}:{query:bb(i,c).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Mg(i,a.resumeToken);const h=Nl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(he.min())>0){l.readTime=Bo(i,a.snapshotVersion.toTimestamp());const h=Nl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Sb(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Ll(this.serializer),t.removeTarget=e,this.q_(t)}}class g0 extends Kg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Eb(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Ll(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Tb(this.serializer,r))};this.q_(t)}}/**
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
 */class m0{}class _0 extends m0{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new J(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Ol(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(V.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,Ol(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J(V.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class y0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pn(t),this.aa=!1):Y("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Sr="RemoteStore";class v0{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Pr(this)&&(Y(Sr,"Restarting streams for network reachability change."),await async function(c){const h=pe(c);h.Ea.add(4),await Pi(h),h.Ra.set("Unknown"),h.Ea.delete(4),await pa(h)}(this))})}),this.Ra=new y0(r,s)}}async function pa(n){if(Pr(n))for(const e of n.da)await e(!0)}async function Pi(n){for(const e of n.da)await e(!1)}function Qg(n,e){const t=pe(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Hc(t)?qc(t):ms(t).O_()&&jc(t,e))}function $c(n,e){const t=pe(n),r=ms(t);t.Ia.delete(e),r.O_()&&Jg(t,e),t.Ia.size===0&&(r.O_()?r.L_():Pr(t)&&t.Ra.set("Unknown"))}function jc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ms(n).Y_(e)}function Jg(n,e){n.Va.Ue(e),ms(n).Z_(e)}function qc(n){n.Va=new fb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ms(n).start(),n.Ra.ua()}function Hc(n){return Pr(n)&&!ms(n).x_()&&n.Ia.size>0}function Pr(n){return pe(n).Ea.size===0}function Yg(n){n.Va=void 0}async function w0(n){n.Ra.set("Online")}async function T0(n){n.Ia.forEach((e,t)=>{jc(n,e)})}async function E0(n,e){Yg(n),Hc(n)?(n.Ra.ha(e),qc(n)):n.Ra.set("Unknown")}async function I0(n,e,t){if(n.Ra.set("Online"),e instanceof Og&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))}(n,e)}catch(r){Y(Sr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jo(n,r)}else if(e instanceof yo?n.Va.Ze(e):e instanceof Ng?n.Va.st(e):n.Va.tt(e),!t.isEqual(he.min()))try{const r=await Wg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ia.get(h);d&&i.Ia.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.Ia.get(c);if(!d)return;i.Ia.set(c,d.withResumeToken(ut.EMPTY_BYTE_STRING,d.snapshotVersion)),Jg(i,c);const p=new Hn(d.target,c,h,d.sequenceNumber);jc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){Y(Sr,"Failed to raise snapshot:",r),await jo(n,r)}}async function jo(n,e,t){if(!gs(e))throw e;n.Ea.add(1),await Pi(n),n.Ra.set("Offline"),t||(t=()=>Wg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Y(Sr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await pa(n)})}function Xg(n,e){return e().catch(t=>jo(n,t,e))}async function ga(n){const e=pe(n),t=ir(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Sc;for(;b0(e);)try{const s=await i0(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,A0(e,s)}catch(s){await jo(e,s)}Zg(e)&&em(e)}function b0(n){return Pr(n)&&n.Ta.length<10}function A0(n,e){n.Ta.push(e);const t=ir(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Zg(n){return Pr(n)&&!ir(n).x_()&&n.Ta.length>0}function em(n){ir(n).start()}async function S0(n){ir(n).ra()}async function C0(n){const e=ir(n);for(const t of n.Ta)e.ea(t.mutations)}async function R0(n,e,t){const r=n.Ta.shift(),s=Nc.from(r,e,t);await Xg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ga(n)}async function P0(n,e){e&&ir(n).X_&&await async function(r,s){if(function(a){return ub(a)&&a!==V.ABORTED}(s.code)){const i=r.Ta.shift();ir(r).B_(),await Xg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ga(r)}}(n,e),Zg(n)&&em(n)}async function Ld(n,e){const t=pe(n);t.asyncQueue.verifyOperationInProgress(),Y(Sr,"RemoteStore received new credentials");const r=Pr(t);t.Ea.add(3),await Pi(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await pa(t)}async function x0(n,e){const t=pe(n);e?(t.Ea.delete(2),await pa(t)):e||(t.Ea.add(2),await Pi(t),t.Ra.set("Unknown"))}function ms(n){return n.ma||(n.ma=function(t,r,s){const i=pe(t);return i.sa(),new p0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:w0.bind(null,n),t_:T0.bind(null,n),r_:E0.bind(null,n),H_:I0.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Hc(n)?qc(n):n.Ra.set("Unknown")):(await n.ma.stop(),Yg(n))})),n.ma}function ir(n){return n.fa||(n.fa=function(t,r,s){const i=pe(t);return i.sa(),new g0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:S0.bind(null,n),r_:P0.bind(null,n),ta:C0.bind(null,n),na:R0.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await ga(n)):(await n.fa.stop(),n.Ta.length>0&&(Y(Sr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class zc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new zc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wc(n,e){if(Pn("AsyncQueue",`${e}: ${n}`),gs(n))return new J(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Xr{static emptySet(e){return new Xr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||se.comparator(t.key,r.key):(t,r)=>se.comparator(t.key,r.key),this.keyedMap=Ls(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Fd{constructor(){this.ga=new je(se.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ae(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class as{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new as(e,t,Xr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&la(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class k0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class V0{constructor(){this.queries=Ud(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=pe(t),i=s.queries;s.queries=Ud(),i.forEach((a,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new J(V.ABORTED,"Firestore shutting down"))}}function Ud(){return new Rr(n=>wg(n),la)}async function tm(n,e){const t=pe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new k0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Wc(a,`Initialization of query '${Br(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Gc(t)}async function nm(n,e){const t=pe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function D0(n,e){const t=pe(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Gc(t)}function N0(n,e,t){const r=pe(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Gc(n){n.Ca.forEach(e=>{e.next()})}var Bl,Bd;(Bd=Bl||(Bl={})).Ma="default",Bd.Cache="cache";class rm{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bl.Cache}}/**
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
 */class sm{constructor(e){this.key=e}}class im{constructor(e){this.key=e}}class O0{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ee(),this.mutatedKeys=Ee(),this.eu=Tg(e),this.tu=new Xr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Fd,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),A=ca(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),O=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let U=!1;m&&A?m.data.isEqual(A.data)?k!==O&&(r.track({type:3,doc:A}),U=!0):this.su(m,A)||(r.track({type:2,doc:A}),U=!0,(c&&this.eu(A,c)>0||h&&this.eu(A,h)<0)&&(l=!0)):!m&&A?(r.track({type:0,doc:A}),U=!0):m&&!A&&(r.track({type:1,doc:m}),U=!0,(c||h)&&(l=!0)),U&&(A?(a=a.add(A),i=O?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((d,p)=>function(A,k){const O=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{Rt:U})}};return O(A)-O(k)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,h=c!==this.Za;return this.Za=c,a.length!==0||h?{snapshot:new as(this.query,e.tu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ee(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new im(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new sm(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=Ee();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return as.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Kc="SyncEngine";class M0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class L0{constructor(e){this.key=e,this.hu=!1}}class F0{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Rr(l=>wg(l),la),this.Iu=new Map,this.Eu=new Set,this.du=new je(se.comparator),this.Au=new Map,this.Ru=new Lc,this.Vu={},this.mu=new Map,this.fu=os.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function U0(n,e,t=!0){const r=hm(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await om(r,e,t,!0),s}async function B0(n,e){const t=hm(n);await om(t,e,!0,!1)}async function om(n,e,t,r){const s=await o0(n.localStore,rn(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await $0(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Qg(n.remoteStore,s),l}async function $0(n,e,t,r,s){n.pu=(p,m,A)=>async function(O,U,q,L){let P=U.view.ru(q);P.Cs&&(P=await Vd(O.localStore,U.query,!1).then(({documents:E})=>U.view.ru(E,P)));const F=L&&L.targetChanges.get(U.targetId),ne=L&&L.targetMismatches.get(U.targetId)!=null,fe=U.view.applyChanges(P,O.isPrimaryClient,F,ne);return jd(O,U.targetId,fe.au),fe.snapshot}(n,p,m,A);const i=await Vd(n.localStore,e,!0),a=new O0(e,i.Qs),l=a.ru(i.documents),c=Ri.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);jd(n,t,h.au);const d=new M0(e,t,a);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function j0(n,e,t){const r=pe(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!la(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&$c(r.remoteStore,s.targetId),$l(r,s.targetId)}).catch(ps)):($l(r,s.targetId),await Fl(r.localStore,s.targetId,!0))}async function q0(n,e){const t=pe(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),$c(t.remoteStore,r.targetId))}async function H0(n,e,t){const r=Y0(n);try{const s=await function(a,l){const c=pe(a),h=Ue.now(),d=l.reduce((A,k)=>A.add(k.key),Ee());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=xn(),O=Ee();return c.Ns.getEntries(A,d).next(U=>{k=U,k.forEach((q,L)=>{L.isValidDocument()||(O=O.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,k)).next(U=>{p=U;const q=[];for(const L of l){const P=ib(L,p.get(L.key).overlayedDocument);P!=null&&q.push(new cr(L.key,P,dg(P.value.mapValue),$t.exists(!0)))}return c.mutationQueue.addMutationBatch(A,h,q,l)}).next(U=>{m=U;const q=U.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(A,U.batchId,q)})}).then(()=>({batchId:m.batchId,changes:Ig(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Vu[a.currentUser.toKey()];h||(h=new je(we)),h=h.insert(l,c),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await xi(r,s.changes),await ga(r.remoteStore)}catch(s){const i=Wc(s,"Failed to persist write");t.reject(i)}}async function am(n,e){const t=pe(n);try{const r=await r0(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ke(a.hu,14607):s.removedDocuments.size>0&&(ke(a.hu,42227),a.hu=!1))}),await xi(t,r,e)}catch(r){await ps(r)}}function $d(n,e,t){const r=pe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=pe(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(h=!0)}),h&&Gc(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function z0(n,e,t){const r=pe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new je(se.comparator);a=a.insert(i,_t.newNoDocument(i,he.min()));const l=Ee().add(i),c=new da(he.min(),new Map,new je(we),a,l);await am(r,c),r.du=r.du.remove(i),r.Au.delete(e),Qc(r)}else await Fl(r.localStore,e,!1).then(()=>$l(r,e,t)).catch(ps)}async function W0(n,e){const t=pe(n),r=e.batch.batchId;try{const s=await n0(t.localStore,e);cm(t,r,null),lm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await xi(t,s)}catch(s){await ps(s)}}async function G0(n,e,t){const r=pe(n);try{const s=await function(a,l){const c=pe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(ke(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);cm(r,e,t),lm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await xi(r,s)}catch(s){await ps(s)}}function lm(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function cm(n,e,t){const r=pe(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function $l(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||um(n,r)})}function um(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&($c(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Qc(n))}function jd(n,e,t){for(const r of t)r instanceof sm?(n.Ru.addReference(r.key,e),K0(n,r)):r instanceof im?(Y(Kc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||um(n,r.key)):ae(19791,{wu:r})}function K0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(Y(Kc,"New document in limbo: "+t),n.Eu.add(r),Qc(n))}function Qc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new se(Fe.fromString(e)),r=n.fu.next();n.Au.set(r,new L0(t)),n.du=n.du.insert(t,r),Qg(n.remoteStore,new Hn(rn(kc(t.path)),r,"TargetPurposeLimboResolution",ia.ce))}}async function xi(n,e,t){const r=pe(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{a.push(r.pu(c,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const d=h?!h.fromCache:t?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(h){s.push(h);const d=Uc.As(c.targetId,h);i.push(d)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(c,h){const d=pe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(h,m=>N.forEach(m.Es,A=>d.persistence.referenceDelegate.addReference(p,m.targetId,A)).next(()=>N.forEach(m.ds,A=>d.persistence.referenceDelegate.removeReference(p,m.targetId,A)))))}catch(p){if(!gs(p))throw p;Y(Bc,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const A=d.Ms.get(m),k=A.snapshotVersion,O=A.withLastLimboFreeSnapshotVersion(k);d.Ms=d.Ms.insert(m,O)}}}(r.localStore,i))}async function Q0(n,e){const t=pe(n);if(!t.currentUser.isEqual(e)){Y(Kc,"User change. New user:",e.toKey());const r=await zg(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new J(V.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xi(t,r.Ls)}}function J0(n,e){const t=pe(n),r=t.Au.get(e);if(r&&r.hu)return Ee().add(r.key);{let s=Ee();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function hm(n){const e=pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=am.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=J0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=z0.bind(null,e),e.Pu.H_=D0.bind(null,e.eventManager),e.Pu.yu=N0.bind(null,e.eventManager),e}function Y0(n){const e=pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=W0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=G0.bind(null,e),e}class qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return t0(this.persistence,new Xb,e.initialUser,this.serializer)}Cu(e){return new Hg(Fc.mi,this.serializer)}Du(e){return new l0}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qo.provider={build:()=>new qo};class X0 extends qo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ke(this.persistence.referenceDelegate instanceof $o,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Lb(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new Hg(r=>$o.mi(r,t),this.serializer)}}class jl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$d(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Q0.bind(null,this.syncEngine),await x0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new V0}()}createDatastore(e){const t=fa(e.databaseInfo.databaseId),r=function(i){return new f0(i)}(e.databaseInfo);return function(i,a,l,c){return new _0(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new v0(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>$d(this.syncEngine,t,0),function(){return Od.v()?new Od:new c0}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,d){const p=new F0(s,i,a,l,c,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=pe(t);Y(Sr,"RemoteStore shutting down."),r.Ea.add(5),await Pi(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}jl.provider={build:()=>new jl};/**
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
 *//**
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
 */class dm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const or="FirestoreClient";class Z0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=Ac.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Y(or,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Y(or,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Wc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sl(n,e){n.asyncQueue.verifyOperationInProgress(),Y(or,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function qd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await eA(n);Y(or,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ld(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ld(e.remoteStore,s)),n._onlineComponents=e}async function eA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Y(or,"Using user provided OfflineComponentProvider");try{await sl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ns("Error using user provided cache. Falling back to memory cache: "+t),await sl(n,new qo)}}else Y(or,"Using default OfflineComponentProvider"),await sl(n,new X0(void 0));return n._offlineComponents}async function fm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Y(or,"Using user provided OnlineComponentProvider"),await qd(n,n._uninitializedComponentsProvider._online)):(Y(or,"Using default OnlineComponentProvider"),await qd(n,new jl))),n._onlineComponents}function tA(n){return fm(n).then(e=>e.syncEngine)}async function pm(n){const e=await fm(n),t=e.eventManager;return t.onListen=U0.bind(null,e.syncEngine),t.onUnlisten=j0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=B0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=q0.bind(null,e.syncEngine),t}function nA(n,e,t={}){const r=new In;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new dm({next:m=>{d.Nu(),a.enqueueAndForget(()=>nm(i,p));const A=m.docs.has(l);!A&&m.fromCache?h.reject(new J(V.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&c&&c.source==="server"?h.reject(new J(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new rm(kc(l.path),d,{includeMetadataChanges:!0,qa:!0});return tm(i,p)}(await pm(n),n.asyncQueue,e,t,r)),r.promise}function rA(n,e,t={}){const r=new In;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new dm({next:m=>{d.Nu(),a.enqueueAndForget(()=>nm(i,p)),m.fromCache&&c.source==="server"?h.reject(new J(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new rm(l,d,{includeMetadataChanges:!0,qa:!0});return tm(i,p)}(await pm(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function gm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Hd=new Map;/**
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
 */const mm="firestore.googleapis.com",zd=!0;class Wd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mm,this.ssl=zd}else this.host=e.host,this.ssl=e.ssl??zd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ob)throw new J(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gm(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ma{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cI;switch(r.type){case"firstParty":return new fI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Hd.get(t);r&&(Y("ComponentProvider","Removing Datastore"),Hd.delete(t),r.terminate())}(this),Promise.resolve()}}function sA(n,e,t,r={}){n=Kt(n,ma);const s=ls(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(lp(`https://${l}`),cp("Firestore",!0)),i.host!==mm&&i.host!==l&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!Er(c,a)&&(n._setSettings(c),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=gt.MOCK_USER;else{h=Ov(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new J(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new gt(p)}n._authCredentials=new uI(new eg(h,d))}}/**
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
 */class _s{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _s(this.firestore,e,this._query)}}class We{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}toJSON(){return{type:We._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ai(t,We._jsonSchema))return new We(e,r||null,new se(Fe.fromString(t.referencePath)))}}We._jsonSchemaVersion="firestore/documentReference/1.0",We._jsonSchema={type:Je("string",We._jsonSchemaVersion),referencePath:Je("string")};class Yn extends _s{constructor(e,t,r){super(e,t,kc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new se(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function _m(n,e,...t){if(n=wt(n),tg("collection","path",e),n instanceof ma){const r=Fe.fromString(e,...t);return id(r),new Yn(n,null,r)}{if(!(n instanceof We||n instanceof Yn))throw new J(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Fe.fromString(e,...t));return id(r),new Yn(n.firestore,null,r)}}function zn(n,e,...t){if(n=wt(n),arguments.length===1&&(e=Ac.newId()),tg("doc","path",e),n instanceof ma){const r=Fe.fromString(e,...t);return sd(r),new We(n,null,new se(r))}{if(!(n instanceof We||n instanceof Yn))throw new J(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Fe.fromString(e,...t));return sd(r),new We(n.firestore,n instanceof Yn?n.converter:null,new se(r))}}/**
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
 */const Gd="AsyncQueue";class Kd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Gg(this,"async_queue_retry"),this._c=()=>{const r=rl();r&&Y(Gd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=rl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=rl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new In;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gs(e))throw e;Y(Gd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Pn("INTERNAL UNHANDLED ERROR: ",Qd(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=zc.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ae(47125,{Pc:Qd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Qd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class xr extends ma{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Kd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kd(e),this._firestoreClient=void 0,await e}}}function ki(n,e){const t=typeof n=="object"?n:fp(),r=typeof n=="string"?n:Oo,s=fc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dv("firestore");i&&sA(s,...i)}return s}function Jc(n){if(n._terminated)throw new J(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||iA(n),n._firestoreClient}function iA(n){const e=n._freezeSettings(),t=function(s,i,a,l){return new xI(s,i,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,gm(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)}(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Z0(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(ut.fromBase64String(e))}catch(t){throw new J(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ft(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ai(e,Ft._jsonSchema))return Ft.fromBase64String(e.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:Je("string",Ft._jsonSchemaVersion),bytes:Je("string")};/**
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
 */class _a{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ya{constructor(e){this._methodName=e}}/**
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
 */class on{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(e){if(Ai(e,on._jsonSchema))return new on(e.latitude,e.longitude)}}on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:Je("string",on._jsonSchemaVersion),latitude:Je("number"),longitude:Je("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class an{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:an._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ai(e,an._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new an(e.vectorValues);throw new J(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}an._jsonSchemaVersion="firestore/vectorValue/1.0",an._jsonSchema={type:Je("string",an._jsonSchemaVersion),vectorValues:Je("object")};/**
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
 */const oA=/^__.*__$/;class aA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ci(e,this.data,t,this.fieldTransforms)}}class ym{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new cr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function vm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{Ac:n})}}class Yc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Yc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ho(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(vm(this.Ac)&&oA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class lA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||fa(e)}Cc(e,t,r,s=!1){return new Yc({Ac:e,methodName:t,Dc:r,path:ct.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function va(n){const e=n._freezeSettings(),t=fa(n._databaseId);return new lA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function wm(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Zc("Data must be an object, but it was:",a,r);const l=Tm(r,a);let c,h;if(i.merge)c=new Nt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=ql(e,p,t);if(!a.contains(m))throw new J(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Im(d,m)||d.push(m)}c=new Nt(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new aA(new Rt(l),c,h)}class wa extends ya{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wa}}class Xc extends ya{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new gi(e.serializer,Sg(e.serializer,this.Fc));return new tb(e.path,t)}isEqual(e){return e instanceof Xc&&this.Fc===e.Fc}}function cA(n,e,t,r){const s=n.Cc(1,e,t);Zc("Data must be an object, but it was:",s,r);const i=[],a=Rt.empty();lr(r,(c,h)=>{const d=eu(e,c,t);h=wt(h);const p=s.yc(d);if(h instanceof wa)i.push(d);else{const m=Vi(h,p);m!=null&&(i.push(d),a.set(d,m))}});const l=new Nt(i);return new ym(a,l,s.fieldTransforms)}function uA(n,e,t,r,s,i){const a=n.Cc(1,e,t),l=[ql(e,r,t)],c=[s];if(i.length%2!=0)throw new J(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(ql(e,i[m])),c.push(i[m+1]);const h=[],d=Rt.empty();for(let m=l.length-1;m>=0;--m)if(!Im(h,l[m])){const A=l[m];let k=c[m];k=wt(k);const O=a.yc(A);if(k instanceof wa)h.push(A);else{const U=Vi(k,O);U!=null&&(h.push(A),d.set(A,U))}}const p=new Nt(h);return new ym(d,p,a.fieldTransforms)}function hA(n,e,t,r=!1){return Vi(t,n.Cc(r?4:3,e))}function Vi(n,e){if(Em(n=wt(n)))return Zc("Unsupported field value:",e,n),Tm(n,e);if(n instanceof ya)return function(r,s){if(!vm(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Vi(l,s.wc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:Bo(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bo(s.serializer,i)}}if(r instanceof on)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:Mg(s.serializer,r._byteString)};if(r instanceof We){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof an)return function(a,l){return{mapValue:{fields:{[ug]:{stringValue:hg},[Mo]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return Vc(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${sa(r)}`)}(n,e)}function Tm(n,e){const t={};return sg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lr(n,(r,s)=>{const i=Vi(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Em(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ue||n instanceof on||n instanceof Ft||n instanceof We||n instanceof ya||n instanceof an)}function Zc(n,e,t){if(!Em(t)||!ng(t)){const r=sa(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function ql(n,e,t){if((e=wt(e))instanceof _a)return e._internalPath;if(typeof e=="string")return eu(n,e);throw Ho("Field path arguments must be of type string or ",n,!1,void 0,t)}const dA=new RegExp("[~\\*/\\[\\]]");function eu(n,e,t){if(e.search(dA)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _a(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ho(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new J(V.INVALID_ARGUMENT,l+n+c)}function Im(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class bm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Am("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fA extends bm{data(){return super.data()}}function Am(n,e){return typeof e=="string"?eu(n,e):e instanceof _a?e._internalPath:e._delegate._internalPath}/**
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
 */function pA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tu{}class gA extends tu{}function mA(n,e,...t){let r=[];e instanceof tu&&r.push(e),r=r.concat(t),function(i){const a=i.filter(c=>c instanceof ru).length,l=i.filter(c=>c instanceof nu).length;if(a>1||a>0&&l>0)throw new J(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class nu extends gA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new nu(e,t,r)}_apply(e){const t=this._parse(e);return Sm(e._query,t),new _s(e.firestore,e.converter,Vl(e._query,t))}_parse(e){const t=va(e.firestore);return function(i,a,l,c,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new J(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Yd(p,d);const k=[];for(const O of p)k.push(Jd(c,i,O));m={arrayValue:{values:k}}}else m=Jd(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Yd(p,d),m=hA(l,a,p,d==="in"||d==="not-in");return Qe.create(h,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ru extends tu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ru(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Qt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Sm(a,c),a=Vl(a,c)}(e._query,t),new _s(e.firestore,e.converter,Vl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Jd(n,e,t){if(typeof(t=wt(t))=="string"){if(t==="")throw new J(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vg(e)&&t.indexOf("/")!==-1)throw new J(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Fe.fromString(t));if(!se.isDocumentKey(r))throw new J(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fd(n,new se(r))}if(t instanceof We)return fd(n,t._key);throw new J(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sa(t)}.`)}function Yd(n,e){if(!Array.isArray(n)||n.length===0)throw new J(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Sm(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new J(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class _A{convertValue(e,t="none"){switch(sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return lr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[Mo].arrayValue?.values?.map(r=>ze(r.doubleValue));return new an(t)}convertGeoPoint(e){return new on(ze(e.latitude),ze(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=aa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ui(e));default:return null}}convertTimestamp(e){const t=nr(e);return new Ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Fe.fromString(e);ke(jg(r),9688,{name:e});const s=new hi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(t)||Pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Cm(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Us{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tr extends bm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Am("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Tr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Tr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Tr._jsonSchema={type:Je("string",Tr._jsonSchemaVersion),bundleSource:Je("string","DocumentSnapshot"),bundleName:Je("string"),bundle:Je("string")};class vo extends Tr{data(e={}){return super.data(e)}}class Zr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new vo(this._firestore,this._userDataWriter,r.key,r,new Us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new vo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Us(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new vo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Us(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:yA(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ac.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function yA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:n})}}/**
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
 */function Rm(n){n=Kt(n,We);const e=Kt(n.firestore,xr);return nA(Jc(e),n._key).then(t=>EA(e,n,t))}Zr._jsonSchemaVersion="firestore/querySnapshot/1.0",Zr._jsonSchema={type:Je("string",Zr._jsonSchemaVersion),bundleSource:Je("string","QuerySnapshot"),bundleName:Je("string"),bundle:Je("string")};class Pm extends _A{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,t)}}function vA(n){n=Kt(n,_s);const e=Kt(n.firestore,xr),t=Jc(e),r=new Pm(e);return pA(n._query),rA(t,n._query).then(s=>new Zr(e,r,n,s))}function xm(n,e,t){n=Kt(n,We);const r=Kt(n.firestore,xr),s=Cm(n.converter,e,t);return Ta(r,[wm(va(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,$t.none())])}function Hl(n,e,t,...r){n=Kt(n,We);const s=Kt(n.firestore,xr),i=va(s);let a;return a=typeof(e=wt(e))=="string"||e instanceof _a?uA(i,"updateDoc",n._key,e,t,r):cA(i,"updateDoc",n._key,e),Ta(s,[a.toMutation(n._key,$t.exists(!0))])}function wA(n){return Ta(Kt(n.firestore,xr),[new Dc(n._key,$t.none())])}function TA(n,e){const t=Kt(n.firestore,xr),r=zn(n),s=Cm(n.converter,e);return Ta(t,[wm(va(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function Ta(n,e){return function(r,s){const i=new In;return r.asyncQueue.enqueueAndForget(async()=>H0(await tA(r),s,i)),i.promise}(Jc(n),e)}function EA(n,e,t){const r=t.docs.get(e._key),s=new Pm(n);return new Tr(n,s,e._key,r,new Us(t.hasPendingWrites,t.fromCache),e.converter)}function km(n){return new Xc("increment",n)}(function(e,t=!0){(function(s){fs=s})(cs),ts(new Ir("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new xr(new hI(r.getProvider("auth-internal")),new pI(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(h.options.projectId,d)}(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Qn(ed,td,e),Qn(ed,td,"esm2020")})();const Dn=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},IA={class:"flex flex-col items-center justify-center h-screen bg-gray-100 p-4 sm:p-6 md:p-8"},bA={key:0,class:"mt-6 text-gray-600"},AA={key:1,class:"mt-6 text-red-600 bg-red-100 p-3 rounded-md"},SA={__name:"LoginScreen",emits:["successfulLogin"],setup(n,{emit:e}){const t=Oe(!1),r=Oe(null),s=e,i=async()=>{t.value=!0,r.value=null;try{const a=ds(),l=new _n,h=(await _E(a,l)).user;console.log("Google Login successful:",h),s("successfulLogin",h)}catch(a){console.error("Google Login error:",a),r.value=`Google Login failed: ${a.message}`}finally{t.value=!1}};return(a,l)=>(ie(),ge("div",IA,[l[2]||(l[2]=D("h1",{class:"text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center"},"The Arcane Scholar’s Legacy",-1)),D("div",{class:"flex flex-col space-y-4 w-full max-w-sm"},[D("button",{onClick:i,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center text-lg"},l[0]||(l[0]=[D("img",{src:"https://www.google.com/favicon.ico",alt:"Google Logo",class:"h-7 w-7 mr-3"},null,-1),yn(" Sign in with Google ",-1)]))]),t.value?(ie(),ge("div",bA,l[1]||(l[1]=[D("p",null,"Loading...",-1)]))):at("",!0),r.value?(ie(),ge("div",AA,[D("p",null,Se(r.value),1)])):at("",!0)]))}},CA=Dn(SA,[["__scopeId","data-v-f45bb7de"]]),RA={class:"flex flex-col items-center justify-center h-screen w-full bg-gray-950 text-yellow-300 p-4 sm:p-6 md:p-8 overflow-y-auto"},PA={key:0,class:"mt-4 text-yellow-400"},xA={key:1,class:"mt-4 text-red-500 bg-red-100 p-3 rounded-md"},kA={key:2,class:"w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700 text-center"},VA={key:3,class:"w-full max-w-3xl bg-violet-900 p-6 rounded-xl shadow-2xl border border-yellow-700"},DA=["innerHTML"],NA={class:"space-y-4"},OA={key:1,class:"space-y-4 mt-6"},MA=["disabled"],LA={key:4,class:"w-full max-w-3xl bg-violet-900 p-6 rounded-xl shadow-2xl border border-yellow-700"},FA=["innerHTML"],UA={class:"space-y-4"},BA={key:1,class:"space-y-4 mt-6"},$A=["disabled"],jA={key:5,class:"w-full max-w-3xl bg-violet-900 p-6 rounded-xl shadow-2xl border border-yellow-700"},qA={class:"text-sm text-yellow-400 mb-4 italic"},HA=["disabled"],zA={__name:"CharacterManager",emits:["character-created","return-to-select"],setup(n,{emit:e}){const t=e,r=ds(),s=ki(),i=typeof __app_id<"u"?__app_id:"default-app-id",a=Oe(!1),l=Oe(null),c=Oe("chapter1"),h=Oe({chapter1:"",chapter2:""}),d=Oe(!1),p=Oe({name:"",faction:"",specialty:"",knowledge:0,resources:{},research:{}}),m=L=>{if(!L)return"";const F=L.replace(/</g,"&lt;").replace(/>/g,"&gt;").split(`
`);let ne="",fe=!1,E=[];const y=()=>{if(E.length===0)return;let v='<div class="overflow-x-auto my-4"><table class="min-w-full divide-y divide-yellow-700 border border-yellow-700 rounded-lg">';const b=E[0].replace(/^\||\|$/g,"").split("|").map(S=>S.trim());if(b.length>0&&(v+='<thead class="bg-violet-800/80">',v+="<tr>",b.forEach(S=>{let _=S;_=_.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),_=_.replace(/\*(.*?)\*/g,"<em>$1</em>"),_=_.replace(/_(.*?)_/g,"<em>$1</em>"),v+=`<th scope="col" class="px-3 py-2 text-left text-xs font-medium text-yellow-300 uppercase tracking-wider">${_}</th>`}),v+="</tr>",v+="</thead>"),E.length>1){v+='<tbody class="divide-y divide-yellow-800">';for(let S=2;S<E.length;S++){const et=E[S].replace(/^\||\|$/g,"").split("|").map(Xe=>Xe.trim());et.length===b.length&&(v+='<tr class="bg-violet-900/50 hover:bg-violet-800/70">',et.forEach(Xe=>{let De=Xe;De=De.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),De=De.replace(/\*(.*?)\*/g,"<em>$1</em>"),De=De.replace(/_(.*?)_/g,"<em>$1</em>"),v+=`<td class="px-3 py-2 whitespace-nowrap text-sm text-yellow-100">${De}</td>`}),v+="</tr>")}v+="</tbody>"}v+="</table></div>",ne+=v,E=[]};return F.forEach(v=>{let T=v.trim();if(T.includes("|")&&!T.startsWith("#")){const _=T.match(/\|[:-]*\|/);if(E.length===0&&_)E.push(T);else if(E.length>0||T.startsWith("|")){fe&&(ne+="</ul>",fe=!1),E.push(T);return}}if(E.length>0&&y(),T.length===0){fe&&(ne+="</ul>",fe=!1);return}if(T.startsWith("###")){ne+=`<h3 class="text-xl font-bold text-yellow-200 mt-4 mb-2">${T.substring(3).trim()}</h3>`;return}if(T.startsWith("##")){ne+=`<h2 class="text-2xl font-serif text-yellow-100 mt-6 mb-3 border-b border-yellow-700 pb-1">${T.substring(2).trim()}</h2>`;return}if(T.startsWith("#")){ne+=`<h1 class="text-3xl font-serif text-yellow-50 mt-8 mb-4">${T.substring(1).trim()}</h1>`;return}if(T==="---"){fe&&(ne+="</ul>",fe=!1),ne+='<hr class="my-6 border-yellow-800">';return}if(T.startsWith("* ")||T.startsWith("- ")){fe||(ne+='<ul class="list-disc ml-6 space-y-1 mb-4">',fe=!0);let _=T.substring(2).trim();_=_.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),_=_.replace(/\*(.*?)\*/g,"<em>$1</em>"),_=_.replace(/_(.*?)_/g,"<em>$1</em>"),ne+=`<li>${_}</li>`;return}fe&&(ne+="</ul>",fe=!1);let S=T;S=S.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),S=S.replace(/\*(.*?)\*/g,"<em>$1</em>"),S=S.replace(/_(.*?)_/g,"<em>$1</em>"),ne+=`<p class="mb-4">${S}</p>`}),fe&&(ne+="</ul>"),E.length>0&&y(),ne},A=async()=>{try{const L=await fetch("/the-arcane-scholar-s-legacy/Chapter1.md");if(!L.ok)throw new Error("Failed to fetch Chapter1.md.");const P=await L.text();h.value.chapter1=m(P),console.log("Successfully read and parsed Chapter1.md.");const F=await fetch("/the-arcane-scholar-s-legacy/Chapter2.md");if(!F.ok)throw new Error("Failed to fetch Chapter2.md.");const ne=await F.text();h.value.chapter2=m(ne),console.log("Successfully read and parsed Chapter2.md."),d.value=!0}catch(L){console.error("Error fetching lore:",L),l.value=`Failed to load game lore (${L.message}). Ensure Chapter1.md and Chapter2.md exist.`}};_i(()=>{A()});const k=L=>{p.value.faction=L},O=L=>{p.value.specialty=L},U=()=>{c.value==="factionSelect"?c.value="chapter2":c.value==="specialtySelect"&&(c.value="nameAssign")},q=async()=>{const L=r.currentUser?.uid;if(!L){l.value="User not authenticated. Please log in again.";return}if(!p.value.name){l.value="Please enter a name for your scholar.";return}a.value=!0,l.value=null;try{const P=_m(s,`artifacts/${i}/users/${L}/characters`),F=await TA(P,p.value),ne=zn(s,`artifacts/${i}/users/${L}/profile/user_data`);await Hl(ne,{characterCount:km(1)},{merge:!0}),console.log("New character created with ID:",F.id),t("character-created",F.id)}catch(P){console.error("Error creating character:",P),P.message.includes("permission denied")||P.message.includes("unauthorized")?l.value="Creation failed: You have reached the maximum limit of 4 characters. Please delete one to continue.":l.value=`Failed to create character: ${P.message}`}finally{a.value=!1}};return(L,P)=>(ie(),ge("div",RA,[P[16]||(P[16]=D("h2",{class:"text-4xl font-serif text-yellow-100 mb-8 text-center leading-tight"},"Forge Your Legacy",-1)),a.value?(ie(),ge("div",PA,"Loading...")):at("",!0),l.value?(ie(),ge("div",xA,Se(l.value),1)):at("",!0),d.value?c.value==="chapter1"||c.value==="factionSelect"?(ie(),ge("div",VA,[P[11]||(P[11]=D("h3",{class:"text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2"},"Chapter 1: The First Whisper",-1)),D("div",{innerHTML:h.value.chapter1,class:"text-lg text-yellow-100/90 leading-relaxed mb-6 max-h-80 overflow-y-auto markdown-content"},null,8,DA),D("div",NA,[c.value==="chapter1"?(ie(),ge("button",{key:0,onClick:P[0]||(P[0]=F=>c.value="factionSelect"),class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out"}," Continue to Faction Selection ")):at("",!0),c.value==="factionSelect"?(ie(),ge("div",OA,[D("button",{onClick:P[1]||(P[1]=F=>k("Lumen")),class:Z(["w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out",p.value.faction==="Lumen"?"bg-blue-600 text-white shadow-xl":"bg-violet-800 hover:bg-blue-500 text-yellow-100"])}," Select Lumen ",2),D("button",{onClick:P[2]||(P[2]=F=>k("Umbra")),class:Z(["w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out",p.value.faction==="Umbra"?"bg-purple-600 text-white shadow-xl":"bg-violet-800 hover:bg-purple-500 text-yellow-100"])}," Select Umbra ",2),D("button",{onClick:U,disabled:!p.value.faction,class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"}," Proceed ",8,MA),D("button",{onClick:P[3]||(P[3]=F=>c.value="chapter1"),class:"w-full py-2 px-4 rounded-lg text-sm bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out"}," Go Back ")])):at("",!0)])])):c.value==="chapter2"||c.value==="specialtySelect"?(ie(),ge("div",LA,[P[12]||(P[12]=D("h3",{class:"text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2"},"Chapter 2: The Second Whisper",-1)),D("div",{innerHTML:h.value.chapter2,class:"text-lg text-yellow-100/90 leading-relaxed mb-6 max-h-80 overflow-y-auto markdown-content"},null,8,FA),D("div",UA,[c.value==="chapter2"?(ie(),ge("button",{key:0,onClick:P[4]||(P[4]=F=>c.value="specialtySelect"),class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out"}," Continue to Specialty Selection ")):at("",!0),c.value==="specialtySelect"?(ie(),ge("div",BA,[D("button",{onClick:P[5]||(P[5]=F=>O("Arcane")),class:Z(["w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out",p.value.specialty==="Arcane"?"bg-cyan-600 text-white shadow-xl":"bg-violet-800 hover:bg-cyan-500 text-yellow-100"])}," Select Arcane ",2),D("button",{onClick:P[6]||(P[6]=F=>O("Alchemist")),class:Z(["w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out",p.value.specialty==="Alchemist"?"bg-amber-600 text-white shadow-xl":"bg-violet-800 hover:bg-amber-500 text-yellow-100"])}," Select Alchemist ",2),D("button",{onClick:U,disabled:!p.value.specialty,class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"}," Proceed ",8,$A),D("button",{onClick:P[7]||(P[7]=F=>c.value="chapter1"),class:"w-full py-2 px-4 rounded-lg text-sm bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out"}," Go Back ")])):at("",!0)])])):c.value==="nameAssign"?(ie(),ge("div",jA,[P[14]||(P[14]=D("h3",{class:"text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2"},"Assign Your Scholar Name",-1)),P[15]||(P[15]=D("p",{class:"text-lg text-yellow-300 mb-4"}," Name your scholar, choose wisely as this name will define your legacy. ",-1)),D("p",qA," Faction: "+Se(p.value.faction)+" | Specialty: "+Se(p.value.specialty),1),D("form",{onSubmit:tp(q,["prevent"]),class:"space-y-4"},[D("div",null,[P[13]||(P[13]=D("label",{for:"characterName",class:"block text-lg text-yellow-300 mb-2"},"Scholar's Name:",-1)),G_(D("input",{id:"characterName","onUpdate:modelValue":P[8]||(P[8]=F=>p.value.name=F),type:"text",required:"",class:"w-full p-3 rounded-lg bg-gray-800 text-yellow-100 border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"Enter a name"},null,512),[[_v,p.value.name]])]),D("button",{type:"submit",disabled:!p.value.name||a.value,class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"}," Forge Legacy ",8,HA)],32),D("button",{onClick:P[9]||(P[9]=F=>c.value="specialtySelect"),class:"w-full py-2 px-4 mt-4 rounded-lg text-sm bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out"}," Go Back ")])):at("",!0):(ie(),ge("div",kA,P[10]||(P[10]=[D("p",{class:"text-lg text-yellow-300"},"Loading lore...",-1)])))]))}},WA={class:"flex flex-col items-center justify-center min-h-screen w-full bg-gray-950 text-yellow-300 font-sans p-6"},GA={class:"bg-violet-900 p-8 rounded-xl shadow-2xl border border-yellow-700 w-full max-w-2xl"},KA={class:"bg-violet-800 p-6 rounded-lg shadow-inner mb-8"},QA={key:0,class:"text-center text-lg text-red-400 font-bold mb-3 p-2 rounded-lg bg-red-900/50"},JA=["disabled"],YA={class:"bg-violet-800 p-6 rounded-lg shadow-inner"},XA={class:"text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2"},ZA={key:0,class:"text-center text-sm text-yellow-400 italic"},eS={key:1,class:"space-y-4"},tS=["onClick"],nS={class:"text-2xl font-bold text-yellow-100"},rS={class:"text-sm text-yellow-400"},sS=["onClick"],iS={key:0,class:"fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50"},oS={key:1,class:"fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50"},aS={class:"bg-red-900 p-8 rounded-xl shadow-2xl border border-red-700 w-full max-w-sm text-center"},lS={class:"text-red-100 mb-6"},Ns=4,cS={__name:"CharacterSelectionView",emits:["characterSelected","startNewCharacterCreation"],setup(n,{emit:e}){const t=e,r=Oe([]),s=Oe(0),i=Oe(!1),a=Oe(null),l=Oe(!1),c=Oe(""),h=ds(),d=ki(),p=typeof __app_id<"u"?__app_id:"default-app-id",m=async L=>{if(L)try{const P=zn(d,`artifacts/${p}/users/${L}/profile/user_data`),F=await Rm(P);F.exists()?s.value=F.data().characterCount||0:(await xm(P,{characterCount:0},{merge:!0}),s.value=0),console.log(`Character count loaded: ${s.value}`)}catch(P){console.error("Error fetching or initializing user profile:",P)}},A=async L=>{if(L)try{const P=_m(d,`artifacts/${p}/users/${L}/characters`),F=mA(P),ne=await vA(F);r.value=ne.docs.map(E=>({id:E.id,...E.data()})),s.value=r.value.length;const fe=zn(d,`artifacts/${p}/users/${L}/profile/user_data`);await Hl(fe,{characterCount:r.value.length},{merge:!0})}catch(P){console.error("Error fetching characters:",P),c.value="Failed to load characters. Please check your connection.",l.value=!0}},k=L=>{t("characterSelected",L)},O=L=>{a.value=L,i.value=!0},U=()=>{i.value=!1,a.value=null},q=async()=>{const L=h.currentUser?.uid;if(!(!L||!a.value))try{const P=zn(d,`artifacts/${p}/users/${L}/characters`,a.value);await wA(P);const F=zn(d,`artifacts/${p}/users/${L}/profile/user_data`);await Hl(F,{characterCount:km(-1)},{merge:!0}),console.log("Character deleted successfully and count decremented."),i.value=!1,a.value=null,await A(L)}catch(P){console.error("Error deleting character:",P),c.value=`Failed to delete character: ${P.message}`,l.value=!0}};return _i(()=>{Op(h,async L=>{L&&(await m(L.uid),await A(L.uid))})}),(L,P)=>(ie(),ge("div",WA,[D("div",GA,[P[2]||(P[2]=D("h2",{class:"text-4xl font-serif text-yellow-100 mb-6 text-center"},"Your Scholars",-1)),D("div",KA,[s.value>=Ns?(ie(),ge("p",QA," Limit Reached ("+Se(Ns)+" Max): Delete a scholar to forge a new legacy. ")):at("",!0),D("button",{onClick:P[0]||(P[0]=F=>t("startNewCharacterCreation")),disabled:s.value>=Ns,class:Z(["w-full py-3 px-4 rounded-lg text-xl font-bold text-white shadow-lg transition-all duration-200 ease-in-out",s.value>=Ns?"bg-gray-600 cursor-not-allowed":"bg-green-700 hover:bg-green-800"])}," Forge a New Legacy ",10,JA)]),D("div",YA,[D("h3",XA," Continue Your Legacy ("+Se(r.value.length)+" / "+Se(Ns)+") ",1),r.value.length===0?(ie(),ge("p",ZA," No scholars found. Forge your first one above! ")):(ie(),ge("ul",eS,[(ie(!0),ge(Lt,null,ac(r.value,F=>(ie(),ge("li",{key:F.id,class:"flex items-center justify-between bg-violet-700 p-4 rounded-lg shadow-md transition duration-200 ease-in-out hover:bg-violet-600"},[D("div",{onClick:ne=>k(F.id),class:"flex-grow cursor-pointer"},[D("h3",nS,Se(F.name),1),D("p",rS," Faction: "+Se(F.faction)+" | Specialty: "+Se(F.specialty),1)],8,tS),D("button",{onClick:tp(ne=>O(F.id),["stop"]),class:"ml-4 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out"}," Delete ",8,sS)]))),128))]))])]),i.value?(ie(),ge("div",iS,[D("div",{class:"bg-violet-900 p-8 rounded-xl shadow-2xl border border-yellow-700 w-full max-w-md text-center"},[P[3]||(P[3]=D("h3",{class:"text-2xl font-bold text-yellow-100 mb-4"},"Confirm Deletion",-1)),P[4]||(P[4]=D("p",{class:"text-yellow-300 mb-6"},"Are you sure you want to delete this scholar? This action cannot be undone.",-1)),D("div",{class:"flex justify-center space-x-4"},[D("button",{onClick:q,class:"bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg"},"Delete"),D("button",{onClick:U,class:"bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg"},"Cancel")])])])):at("",!0),l.value?(ie(),ge("div",oS,[D("div",aS,[P[5]||(P[5]=D("h3",{class:"text-2xl font-bold text-red-300 mb-4"},"Error",-1)),D("p",lS,Se(c.value),1),D("button",{onClick:P[1]||(P[1]=F=>l.value=!1),class:"bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg"},"Close")])])):at("",!0)]))}},uS=Dn(cS,[["__scopeId","data-v-fc551975"]]),hS={class:"flex items-start space-x-6 mb-4"},dS={class:"flex flex-col items-center w-28 flex-shrink-0"},fS=["title"],pS={class:"flex-grow"},gS={class:"flex flex-col items-center justify-center space-y-6 mt-8"},mS={class:"font-bold"},_S={key:0},yS={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"},vS={key:0},wS=["onClick","disabled"],TS={key:0,class:"mt-8 text-center"},ES={__name:"SanctumView",props:{knowledge:{type:Number,required:!0},passiveKnowledgeGain:{type:Number,required:!0},multiplierTiers:{type:Array,required:!0},characterDetails:{type:Object,required:!0},currentTierIndex:{type:Number,required:!0},themeClasses:{type:Object,required:!0,default:()=>({primaryBg:"bg-gray-950",primaryText:"text-yellow-300",accentBorder:"border-yellow-600",sidebarBg:"bg-violet-950",activeMenuBg:"bg-green-800"})}},emits:["generate-knowledge","buy-multiplier","advance-tier"],setup(n,{emit:e}){const t=n,r=e,s=c=>{if(c==null)return"0.00";c=Number(c);const h=[{value:1e12,symbol:"T"},{value:1e9,symbol:"B"},{value:1e6,symbol:"M"},{value:1e3,symbol:"K"}];for(let d=0;d<h.length;d++){const{value:p,symbol:m}=h[d];if(Math.abs(c)>=p){const A=c/p;let k;return A<10?k=A.toFixed(3):A<100?k=A.toFixed(2):k=A.toFixed(1),k+m}}return c.toFixed(2)},i=Kr(()=>t.multiplierTiers[t.currentTierIndex]),a=Kr(()=>{const c=i.value;if(!c)return!1;const h=c.multipliers.every(p=>p.level===p.maxLevel),d=t.multiplierTiers[t.currentTierIndex+1];return h&&d}),l=(c,h)=>{const d=t.multiplierTiers[c]?.multipliers[h];return d?d.baseCost*Math.pow(d.costMultiplier,d.level):1/0};return(c,h)=>(ie(),ge("section",{class:Z([t.themeClasses.primaryText,t.themeClasses.accentBorder,t.themeClasses.primaryBg,"p-6 rounded-lg shadow-xl border"])},[D("div",hS,[D("div",dS,[D("div",{class:Z(["w-24 h-24 sm:w-28 sm:h-28 border-2 rounded-lg shadow-inner flex items-center justify-center",[t.themeClasses.primaryBg,t.themeClasses.accentBorder]])},[D("span",{class:Z([t.themeClasses.primaryText,"text-sm italic opacity-70"])},"Avatar",2)],2),D("h3",{class:Z(["mt-2 text-lg font-bold text-center truncate w-full",t.themeClasses.primaryText]),title:n.characterDetails.name},Se(n.characterDetails.name),11,fS),D("p",{class:Z(["text-sm",t.themeClasses.primaryText])},"Prestige: "+Se(n.characterDetails.prestige),3)]),D("div",pS,[D("h2",{class:Z(["text-3xl font-serif mb-2 pb-2 border-b",[t.themeClasses.primaryText,t.themeClasses.accentBorder]])}," Sanctum Overview ",2),D("p",{class:Z(["text-lg",t.themeClasses.primaryText])}," Welcome back, Scholar. The whispers of ancient knowledge await your command. ",2)])]),D("div",gS,[D("span",{class:Z(["text-4xl sm:text-5xl font-bold mb-4",t.themeClasses.primaryText])}," Current Knowledge: "+Se(s(n.knowledge)),3),D("button",{onClick:h[0]||(h[0]=d=>r("generate-knowledge")),class:Z([t.themeClasses.activeMenuBg,"text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80"])}," Generate Knowledge ",2),D("p",{class:Z(["text-sm mt-2",t.themeClasses.primaryText])},"Click to harness raw arcane energy and convert it into Knowledge.",2),D("p",{class:Z(["text-xl mt-4",t.themeClasses.primaryText])},[h[2]||(h[2]=yn(" Passive Knowledge Gain: ",-1)),D("span",mS,Se(s(n.passiveKnowledgeGain)),1),h[3]||(h[3]=yn(" / second ",-1))],2)]),D("div",{class:Z(["mt-10 pt-6 border-t",t.themeClasses.accentBorder])},[i.value?(ie(),ge("div",_S,[D("h4",{class:Z(["text-3xl font-serif mb-6 text-center",[t.themeClasses.primaryText]])},Se(i.value.name),3),D("div",yS,[(ie(!0),ge(Lt,null,ac(i.value.multipliers,(d,p)=>(ie(),ge("div",{key:`multiplier-${t.currentTierIndex}-${p}`,class:Z(["p-4 rounded-lg border shadow-md flex flex-col",[t.themeClasses.primaryBg,t.themeClasses.accentBorder]])},[D("h4",{class:Z(["text-xl mb-2",t.themeClasses.primaryText])},Se(d.name)+" (Level "+Se(d.level)+" / "+Se(d.maxLevel)+") ",3),D("p",{class:Z(["text-sm mb-2",t.themeClasses.primaryText])},[yn(" Current effect: +"+Se(s(d.baseEffect*Math.pow(d.effectMultiplier,d.level>0?d.level-1:0)))+" knowledge/s ",1),d.level>0&&d.level<d.maxLevel?(ie(),ge("span",vS,"(Next: +"+Se(s(d.baseEffect*Math.pow(d.effectMultiplier,d.level)))+" knowledge/s)",1)):at("",!0)],2),D("p",{class:Z(["text-sm mb-4",t.themeClasses.primaryText])},[yn(" Cost for next level ("+Se(d.level+1)+"): ",1),D("span",{class:Z(["font-bold",t.themeClasses.primaryText])},Se(s(l(t.currentTierIndex,p)))+" Knowledge",3)],2),d.level<d.maxLevel?(ie(),ge("button",{key:0,onClick:m=>r("buy-multiplier",{tierIndex:t.currentTierIndex,multiplierIndex:p}),disabled:n.knowledge<l(t.currentTierIndex,p),class:Z(["mt-auto bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md text-base font-bold transition duration-300 ease-in-out",n.knowledge<l(t.currentTierIndex,p)?"opacity-50 cursor-not-allowed":""])}," Buy Upgrade (Level "+Se(d.level+1)+") ",11,wS)):(ie(),ge("div",{key:1,class:Z(["mt-auto text-center py-2 rounded-md font-bold text-base shadow-inner",[t.themeClasses.activeMenuBg,t.themeClasses.primaryText,"bg-opacity-80"]])}," Max Level Reached ✅ ",2))],2))),128))]),a.value?(ie(),ge("div",TS,[D("button",{onClick:h[1]||(h[1]=d=>r("advance-tier")),class:Z(["py-3 px-6 rounded-lg text-xl font-bold transition duration-300 ease-in-out transform hover:scale-105",t.themeClasses.activeMenuBg,t.themeClasses.primaryText])}," Go to Next Tier: "+Se(t.multiplierTiers[t.currentTierIndex+1].name)+" → ",3)])):at("",!0)])):(ie(),ge("div",{key:1,class:Z(["text-center p-4 rounded-lg border border-dashed",[t.themeClasses.sidebarBg,t.themeClasses.accentBorder,t.themeClasses.primaryText]])},h[4]||(h[4]=[D("p",{class:"italic"},"Loading Arcane Data...",-1)]),2))],2)],2))}},IS=Dn(ES,[["__scopeId","data-v-ba649607"]]),bS={__name:"ResearchView",props:{themeClasses:{type:Object,required:!0,default:()=>({primaryBg:"bg-gray-950",primaryText:"text-yellow-300",accentBorder:"border-yellow-600",sidebarBg:"bg-violet-950",activeMenuBg:"bg-green-800"})}},setup(n){const e=n,{themeClasses:t}=e;return console.log("ResearchView: Component loaded."),(r,s)=>(ie(),ge("section",{class:Z([Te(t).sidebarBg,Te(t).primaryText,Te(t).accentBorder,"p-6 rounded-lg shadow-xl border"])},[D("h2",{class:Z(["text-3xl font-serif mb-6 border-b pb-3",[Te(t).primaryText,Te(t).accentBorder]])}," Research ",2),D("p",{class:Z(["text-lg",Te(t).primaryText])}," Uncover forgotten spells and ancient technologies. ",2),D("p",{class:Z(["text-sm mt-4",Te(t).primaryText])},"This section will contain various research projects, their costs, and effects.",2)],2))}},AS=Dn(bS,[["__scopeId","data-v-675a273d"]]),SS={__name:"ExpeditionsView",props:{themeClasses:{type:Object,required:!0,default:()=>({primaryBg:"bg-gray-950",primaryText:"text-yellow-300",accentBorder:"border-yellow-600",sidebarBg:"bg-violet-950",activeMenuBg:"bg-green-800"})}},setup(n){const e=n,{themeClasses:t}=e;return console.log("ExpeditionsView: Component loaded."),(r,s)=>(ie(),ge("section",{class:Z([Te(t).primaryBg,Te(t).primaryText,Te(t).accentBorder,"p-6 rounded-lg shadow-xl border"])},[D("h2",{class:Z(["text-3xl font-serif mb-6 border-b pb-3",[Te(t).primaryText,Te(t).accentBorder]])}," Expeditions ",2),D("p",{class:Z(["text-lg",Te(t).primaryText])}," Send your scholars on perilous journeys to retrieve rare artifacts and knowledge. ",2),D("p",{class:Z(["text-sm mt-4",Te(t).primaryText])},"Manage your expeditions, track their progress, and claim rewards here.",2)],2))}},CS=Dn(SS,[["__scopeId","data-v-9c681b39"]]),RS={__name:"InventoryView",props:{themeClasses:{type:Object,required:!0,default:()=>({primaryBg:"bg-gray-950",primaryText:"text-yellow-300",accentBorder:"border-yellow-600",sidebarBg:"bg-violet-950",activeMenuBg:"bg-green-800"})}},setup(n){const e=n,{themeClasses:t}=e;return console.log("InventoryView: Component loaded."),(r,s)=>(ie(),ge("section",{class:Z([Te(t).primaryBg,Te(t).primaryText,Te(t).accentBorder,"p-6 rounded-lg shadow-xl border"])},[D("h2",{class:Z(["text-3xl font-serif mb-6 border-b pb-3",[Te(t).primaryText,Te(t).accentBorder]])}," Inventory ",2),D("p",{class:Z(["text-lg",Te(t).primaryText])}," Behold your collected treasures and resources. ",2),D("p",{class:Z(["text-sm mt-4",Te(t).primaryText])},"This section will display all your acquired items, resources, and their quantities.",2)],2))}},PS=Dn(RS,[["__scopeId","data-v-d4a9dca2"]]),xS={__name:"SkillTreeView",props:{themeClasses:{type:Object,required:!0,default:()=>({primaryBg:"bg-gray-950",primaryText:"text-yellow-300",accentBorder:"border-yellow-600",sidebarBg:"bg-violet-950",activeMenuBg:"bg-green-800"})}},setup(n){const e=n,{themeClasses:t}=e;return console.log("SkillTreeView: Component loaded."),(r,s)=>(ie(),ge("section",{class:Z([Te(t).primaryBg,Te(t).primaryText,Te(t).accentBorder,"p-6 rounded-lg shadow-xl border"])},[D("h2",{class:Z(["text-3xl font-serif mb-6 border-b pb-3",[Te(t).primaryText,Te(t).accentBorder]])}," Skill Tree ",2),D("p",{class:Z(["text-lg",Te(t).primaryText])}," Forge your destiny by mastering powerful skills and abilities. ",2),D("p",{class:Z(["text-sm mt-4",Te(t).primaryText])},"Invest your hard-earned skill points to unlock new capabilities and enhance existing ones.",2)],2))}},kS=Dn(xS,[["__scopeId","data-v-20e61295"]]),VS={__name:"ClassificationView",props:{themeClasses:{type:Object,required:!0,default:()=>({primaryBg:"bg-gray-950",primaryText:"text-yellow-300",accentBorder:"border-yellow-600",sidebarBg:"bg-violet-950",activeMenuBg:"bg-green-800"})}},setup(n){const e=n,{themeClasses:t}=e;return console.log("ClassificationView: Component loaded."),(r,s)=>(ie(),ge("section",{class:Z([Te(t).primaryBg,Te(t).primaryText,Te(t).accentBorder,"p-6 rounded-lg shadow-xl border"])},[D("h2",{class:Z(["text-3xl font-serif mb-6 border-b pb-3",[Te(t).primaryText,Te(t).accentBorder]])}," Classification ",2),D("p",{class:Z(["text-lg",Te(t).primaryText])}," Organize and categorize all current players (seasonals and permanents). ",2),D("p",{class:Z(["text-sm mt-4",Te(t).primaryText])},"This section is for rankings. You will see your possition based on Faction, Specialty, and location.",2)],2))}},DS=Dn(VS,[["__scopeId","data-v-d1387bda"]]),NS={class:"flex items-center space-x-4"},OS={class:"text-lg"},MS={class:"font-bold text-yellow-100 text-2xl"},LS={class:"text-lg"},FS={class:"font-bold text-yellow-100 text-2xl"},US={class:"text-lg"},BS={class:"font-bold text-yellow-100 text-2xl"},$S=["disabled"],jS={class:"flex flex-1 overflow-hidden"},qS=["title"],HS=["onClick"],zS=["title"],WS={key:0,class:"whitespace-nowrap overflow-hidden"},GS={__name:"MainGameComponent",props:{userId:{type:String,required:!0},characterId:{type:String,required:!0}},emits:["returnToCharacterSelect"],setup(n,{emit:e}){const t=n,r=e,s=Oe(0),i=Oe(0),a=Oe({name:"",faction:"",specialty:"",prestige:0}),l=Oe([]),c=Oe("sanctum"),h=Oe(!1),d=Oe(!1),p=Oe(0),m=Oe(0),A=ds(),k=ki(),O=typeof __app_id<"u"?__app_id:"default-app-id",U=le=>{if(le==null)return"0.00";le=Number(le);const ee=[{value:1e12,symbol:"T"},{value:1e9,symbol:"B"},{value:1e6,symbol:"M"},{value:1e3,symbol:"K"}];for(let H=0;H<ee.length;H++){const{value:X,symbol:He}=ee[H];if(Math.abs(le)>=X){const Ve=le/X;let Re;return Ve<10?Re=Ve.toFixed(2):Ve<100?Re=Ve.toFixed(1):Re=Math.floor(Ve).toString(),Re=Re.replace(/\.00$/,"").replace(/(\.\d)0$/,"$1"),Re+He}}return le.toFixed(2)},q=Kr(()=>{const{faction:le,specialty:ee}=a.value;let H="bg-gray-950",X="text-yellow-300",He="bg-violet-900",Ve="border-yellow-600",Re="bg-violet-950",Ge="bg-green-800";return le==="Lumen"?ee==="Arcane"?(H="bg-white",X="text-blue-900",He="bg-amber-500",Ve="border-blue-500",Re="bg-blue-50",Ge="bg-blue-300"):ee==="Alchemist"?(H="bg-gray-50",X="text-green-900",He="bg-lime-600",Ve="border-green-700",Re="bg-lime-50",Ge="bg-lime-300"):(H="bg-gray-100",X="text-gray-800",He="bg-amber-500",Ve="border-amber-700",Re="bg-amber-100",Ge="bg-amber-300"):le==="Umbra"&&(ee==="Arcane"?(H="bg-black",X="text-lime-400",He="bg-purple-950",Ve="border-lime-500",Re="bg-purple-900",Ge="bg-lime-700"):ee==="Alchemist"&&(H="bg-red-950",X="text-red-300",He="bg-red-800",Ve="border-red-600",Re="bg-red-900",Ge="bg-red-700")),{primaryBg:H,primaryText:X,headerBg:He,accentBorder:Ve,sidebarBg:Re,activeMenuBg:Ge}}),L=()=>{d.value=!d.value},P=Kr(()=>1+a.value.prestige*.005),F=le=>{const{faction:ee,specialty:H}=a.value;let X=["Novice Whispers","Apprentice Glyphs","Adept's Tomes","Mystic Runes","Etheric Weavings","Celestial Charts","Planar Bindings","Chronomancer's Texts","Abjurer's Wards","Transmuter's Circles","Grandmaster's Codex","Archmage's Grimoire","Aetheric Formulas","Cosmic Inscriptions","Reality Equations","Void Manuscripts","Primordial Truths","Ascendant Doctrines","God-Hand Schematics","Nexus of All Knowledge"];return ee==="Lumen"?H==="Arcane"?X=["Solar Inscriptions","Starfire Studies","Aetheric Lumina","Ascendant Cantrips","Chalice of Radiance","Empyrean Scrolls","Divine Geometry","Sunsong Orbs","Sanctified Wards","Radiant Transcriptions","The Holy Codex","High Archon's Primer","Light-Form Formulas","Cosmic Alignment","Edicts of Truth","Ethereal Scripts","Primal Genesis","Edicts of the Source","Schema of Creation","Heart of the Cosmos"]:H==="Alchemist"&&(X=["Bright Concoctions","Verdant Formulas","Golden Retorts","Elixirs of Life","Vials of Purity","Reagent Catalysts","Alchemical Transmutations","Crystals of Growth","Stable Solutions","The Great Work","Philosopher's Stone","Magnum Opus","Homunculus Formulas","Symphony of Elements","Apothecary's Vault","True Essences","Materia Prima","The Unbreakable Bond","Perfect Synthesis","Wellspring of Vitality"]):ee==="Umbra"&&(H==="Arcane"?X=["Shadowed Whispers","Nocturnal Glyphs","Voidweaver Texts","Ebon Incantations","Sepulchral Weavings","Forbidden Scrolls","The Black Geometry","Moonshard Orbs","Cursed Wards","Malefic Transcriptions","The Shadow Codex","Necromancer's Grimoire","Dark Matter Formulas","Cosmic Discord","Equations of Decay","Void Manuscripts","Primal Entropy","Doctrines of the End","Schema of Annihilation","Heart of the Void"]:H==="Alchemist"&&(X=["Crimson Brews","Corrupted Essences","Blackened Crucibles","Tinctures of Dread","Sanguine Phials","Venomous Catalysts","Vile Transmutations","Crystals of Stasis","Unstable Solutions","The Lesser Work","Blood Stone","Abyss Opus","Gargoyle Formulas","Dissonant Elements","Poisoner's Vault","Dark Essences","Materia Tenebrae","The Broken Bond","Failed Synthesis","Wellspring of Pestilence"])),X[le]||`Esoteric Tier ${le+1}`},ne=()=>{const{faction:le,specialty:ee}=a.value;let H=["Conduits","Scrolls","Crystals","Orbs"];return le==="Lumen"?ee==="Arcane"?H=["Light Channels","Sunstone Tablets","Prismatic Focus","Aether Orbs"]:ee==="Alchemist"&&(H=["Flow Regulators","Reagent Formulas","Growth Crystals","Stabilizing Orbs"]):le==="Umbra"&&(ee==="Arcane"?H=["Shadow Conduits","Ebon Runes","Void Shards","Lunar Orbs"]:ee==="Alchemist"&&(H=["Corrupting Vents","Necrotic Pages","Binding Agents","Decay Orbs"])),H},fe=()=>{const le=[],ee=ne(),H=P.value;for(let X=0;X<20;X++){const He=Math.pow(1.8,X),Ve=Math.pow(10,X),Re=20+X*20;le.push({name:`Tier ${X+1}: ${F(X)}`,unlocked:X===0,multipliers:ee.map((Ge,jt)=>({level:0,maxLevel:Re,baseCost:(10+jt*40)*Ve,costMultiplier:1.15+X*.01,baseEffect:(.1+jt*.4)*He*H,effectMultiplier:1.05+X*.005,name:Ge}))})}return le},E=Kr(()=>{let le=0;return l.value.forEach(ee=>{ee.unlocked&&ee.multipliers.forEach(H=>{H.level>0&&(le+=H.baseEffect*Math.pow(H.effectMultiplier,H.level-1))})}),le}),y=()=>{s.value+=E.value||1},v=(le,ee)=>{const H=l.value[le]?.multipliers[ee];return H?H.baseCost/P.value*Math.pow(H.costMultiplier,H.level):1/0},T=({tierIndex:le,multiplierIndex:ee})=>{const H=l.value[le],X=H?.multipliers[ee];if(!X||X.level>=X.maxLevel)return;const He=v(le,ee);s.value>=He&&(s.value-=He,X.level+=1,X.level===X.maxLevel&&H.multipliers.every(Re=>Re.level===Re.maxLevel)&&l.value[le+1]&&(l.value[le+1].unlocked=!0),_())},b=()=>{a.value.prestige,a.value.prestige+=1,a.value.prestige>0&&a.value.prestige%10===0&&(m.value+=1),s.value=0,i.value=0,p.value=0,l.value=fe(),_(),console.log(`PRESTIGE UP! Level: ${a.value.prestige}. Skill Points: ${m.value}`)},S=()=>{const le=l.value[p.value],ee=l.value[p.value+1];!le||!le.multipliers.every(H=>H.level===H.maxLevel)||(ee?l.value[p.value+1].unlocked&&(p.value+=1,_()):b())},_=async()=>{if(h.value=!0,!A.currentUser||!t.characterId)return;const le=zn(k,`artifacts/${O}/users/${A.currentUser.uid}/characters`,t.characterId),ee={knowledge:s.value,prestige:a.value.prestige,currentTierIndex:p.value,multiplierTiers:l.value.map(H=>({unlocked:H.unlocked,levels:H.multipliers.map(X=>X.level)})),skillPoints:m.value,lastSaved:Ue.now()};try{await xm(le,ee,{merge:!0})}catch(H){console.error("Error saving game progress:",H)}finally{h.value=!1}},et=async()=>{if(!A.currentUser||!t.characterId)return;const le=zn(k,`artifacts/${O}/users/${A.currentUser.uid}/characters`,t.characterId);try{const ee=await Rm(le);if(ee.exists()){const H=ee.data();a.value.name=H.name||"Scholar",a.value.faction=H.faction||"",a.value.specialty=H.specialty||"",a.value.prestige=H.prestige||0,m.value=H.skillPoints||0,p.value=H.currentTierIndex||0;const X=fe();H.multiplierTiers&&H.multiplierTiers.forEach((Ve,Re)=>{X[Re]&&(X[Re].unlocked=Ve.unlocked,Ve.levels.forEach((Ge,jt)=>{X[Re].multipliers[jt]&&(X[Re].multipliers[jt].level=Ge)}))}),l.value=X;const He=H.knowledge||0;if(H.lastSaved&&E.value>0){const Ve=(new Date().getTime()-H.lastSaved.toDate().getTime())/1e3;s.value=Ve>0?He+Ve*E.value:He}else s.value=He;i.value=s.value}else l.value=fe(),s.value=0,i.value=0,p.value=0,m.value=0}catch(ee){console.error("Error loading game progress:",ee),l.value=fe()}};let Xe=null;Gs(s,le=>{Xe&&cancelAnimationFrame(Xe);const ee=()=>{const H=le-i.value,X=H/20;Math.abs(H)<.01?(i.value=le,Xe=null):(i.value+=X,Xe=requestAnimationFrame(ee))};ee()});const De=async()=>{await _(),await A.signOut()},Ce=async()=>{await _(),r("returnToCharacterSelect")};let ye=null;_i(()=>{et(),ye=setInterval(()=>{E.value>0&&(s.value+=E.value)},1e3)}),oc(async()=>{ye&&clearInterval(ye),Xe&&cancelAnimationFrame(Xe),await _()});const Pt=[{id:"sanctum",name:"Sanctum / Home",icon:"🏠"},{id:"research",name:"Research",icon:"🔬"},{id:"expeditions",name:"Expeditions",icon:"🗺️"},{id:"inventory",name:"Inventory",icon:"🧰"},{id:"skill-tree",name:"Skill Tree",icon:"🌳"},{id:"classification",name:"Classification",icon:"📜"}];return(le,ee)=>(ie(),ge("div",{class:Z([q.value.primaryBg,q.value.primaryText,"flex flex-col h-screen w-full font-sans overflow-hidden"])},[D("header",{class:Z([q.value.headerBg,"shadow-lg border-b",q.value.accentBorder,"flex items-center justify-between p-4"])},[ee[3]||(ee[3]=D("h1",{class:"text-3xl font-serif text-yellow-100 tracking-wide"},"The Arcane Scholar’s Legacy",-1)),D("div",NS,[D("span",OS,[ee[0]||(ee[0]=yn("Prestige: ",-1)),D("span",MS,Se(a.value.prestige),1)]),D("span",LS,[ee[1]||(ee[1]=yn("Skill Points: ",-1)),D("span",FS,Se(m.value),1)]),D("span",US,[ee[2]||(ee[2]=yn("Knowledge: ",-1)),D("span",BS,Se(U(i.value)),1)]),D("button",{onClick:_,disabled:h.value,class:"bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"},Se(h.value?"Saving...":"Save Progress"),9,$S),D("button",{onClick:Ce,class:"bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"}," Back to Characters "),D("button",{onClick:De,class:"bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"}," Log Out ")])],2),D("div",jS,[D("nav",{class:Z([q.value.sidebarBg,"transition-all duration-300 p-4 border-r",q.value.accentBorder,"flex flex-col space-y-3",d.value?"w-20":"w-1/5 min-w-[180px]"])},[D("div",{class:Z(["flex items-center",d.value?"justify-center":"justify-between"])},[D("h3",{class:Z(["text-xl font-serif text-yellow-100 pb-2 mb-4 transition-opacity border-b",q.value.accentBorder,d.value?"opacity-0 h-0 p-0 overflow-hidden":"opacity-100"])}," Sanctum Menu ",2),D("button",{onClick:L,class:Z(["p-2 rounded-full hover:opacity-80 transition duration-150 flex-shrink-0",q.value.primaryText]),title:d.value?"Expand Menu":"Collapse Menu"},[(ie(),ge("svg",{xmlns:"http://www.w3.org/2000/svg",class:Z(["w-6 h-6 transform transition-transform duration-300",d.value?"rotate-180":""]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},ee[4]||(ee[4]=[D("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"},null,-1)]),2))],10,qS)],2),(ie(),ge(Lt,null,ac(Pt,H=>D("button",{key:H.id,onClick:X=>c.value=H.id,class:Z(["text-left py-2 rounded-lg transition duration-200 ease-in-out flex items-center",c.value===H.id?[q.value.activeMenuBg,q.value.primaryText,"shadow-inner"]:"hover:opacity-80",q.value.primaryText,d.value?"justify-center px-0":"px-4 space-x-3"])},[D("span",{class:Z(["text-2xl flex-shrink-0",d.value?"mx-auto":""]),title:d.value?H.name:""},Se(H.icon),11,zS),d.value?at("",!0):(ie(),ge("span",WS,Se(H.name),1))],10,HS)),64))],2),D("main",{class:Z(["flex-1 p-6 overflow-y-auto custom-scrollbar",q.value.primaryBg])},[c.value==="sanctum"?(ie(),Ht(IS,{key:0,knowledge:s.value,multiplierTiers:l.value,passiveKnowledgeGain:E.value,characterDetails:a.value,"theme-classes":q.value,currentTierIndex:p.value,onGenerateKnowledge:y,onBuyMultiplier:T,onAdvanceTier:S},null,8,["knowledge","multiplierTiers","passiveKnowledgeGain","characterDetails","theme-classes","currentTierIndex"])):c.value==="research"?(ie(),Ht(AS,{key:1,"theme-classes":q.value},null,8,["theme-classes"])):c.value==="expeditions"?(ie(),Ht(CS,{key:2,"theme-classes":q.value},null,8,["theme-classes"])):c.value==="inventory"?(ie(),Ht(PS,{key:3,"theme-classes":q.value},null,8,["theme-classes"])):c.value==="skill-tree"?(ie(),Ht(kS,{key:4,"theme-classes":q.value},null,8,["theme-classes"])):c.value==="classification"?(ie(),Ht(DS,{key:5,"theme-classes":q.value},null,8,["theme-classes"])):at("",!0)],2)])],2))}},KS=Dn(GS,[["__scopeId","data-v-b59b0954"]]),QS={id:"app"},JS={key:0,class:"flex items-center justify-center h-screen w-full bg-gray-950 text-yellow-300 text-3xl font-serif"},YS={key:1},XS={__name:"App",setup(n){const e=ds();ki();const t=Oe(null),r=Oe(!1),s=Oe(null),i=Oe("loading");_i(()=>{Op(e,d=>{t.value=d,r.value=!0,console.log("App.vue: Auth state changed. User:",d?d.uid:"None"),console.log("App.vue: Is app ready?",r.value)})}),Gs([t,r,s],([d,p,m])=>{p&&(d?m?i.value="game":i.value="characterSelection":i.value="login")});const a=d=>{s.value=d,i.value="game",console.log("App.vue: Character selected with ID:",d)},l=()=>{i.value="characterCreation",console.log("App.vue: Starting new character creation. `currentView` is now:",i.value)},c=d=>{s.value=d,i.value="game",console.log("App.vue: New character created with ID:",d)},h=()=>{s.value=null,i.value="characterSelection",console.log("App.vue: Returning to character selection.")};return(d,p)=>(ie(),ge("div",QS,[r.value?(ie(),ge("div",YS,[i.value==="login"?(ie(),Ht(CA,{key:0})):i.value==="characterSelection"?(ie(),Ht(uS,{key:`selection-${t.value.uid}`,onCharacterSelected:a,onStartNewCharacterCreation:l})):i.value==="characterCreation"?(ie(),Ht(zA,{key:`creation-${t.value.uid}`,onCharacterCreated:c,onReturnToSelect:h})):i.value==="game"?(ie(),Ht(KS,{key:`game-${s.value}`,userId:t.value.uid,characterId:s.value,onReturnToCharacterSelect:h},null,8,["userId","characterId"])):at("",!0)])):(ie(),ge("div",JS," Loading... "))]))}};var ZS="firebase",eC="12.0.0";/**
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
 */Qn(ZS,eC,"app");const tC={apiKey:"AIzaSyARajg1PBZ0n8gyWrrpWynr8298-pmm0l4",authDomain:"arcane-scholars-legacy.firebaseapp.com",projectId:"arcane-scholars-legacy",storageBucket:"arcane-scholars-legacy.firebasestorage.app",messagingSenderId:"976593685731",appId:"1:976593685731:web:bfa95e8221f0b76f27c9d6",measurementId:"G-W3VDVWF7LF"},Bs=typeof __firebase_config<"u"&&Object.keys(JSON.parse(__firebase_config)).length>0?JSON.parse(__firebase_config):tC;const Xd=typeof __initial_auth_token<"u"?__initial_auth_token:null;let il,ti,Vm;console.log("main.js: Starting Firebase initialization process...");console.log("main.js: Using firebaseConfig:",Bs);if(Bs&&Object.keys(Bs).length>0&&Bs.apiKey!=="YOUR_FIREBASE_API_KEY")try{il=dp(Bs),ti=ds(il),Vm=ki(il),console.log("Firebase initialized successfully.")}catch(n){console.error("Failed to initialize Firebase:",n)}else console.warn("Firebase configuration is missing or placeholder. Firebase will not be fully initialized."),console.warn('Please replace "YOUR_FIREBASE_API_KEY", "YOUR_PROJECT_ID", etc., with your actual Firebase project credentials for local development.');async function nC(){if(!ti){console.warn("Firebase Auth not initialized, skipping authentication.");return}try{Xd?(await QT(ti,Xd),console.log("Signed in with custom token.")):(await HT(ti),console.log("Signed in anonymously."))}catch(n){console.error("Firebase authentication error:",n)}}const su=Ev(XS);su.config.globalProperties.$auth=ti;su.config.globalProperties.$db=Vm;nC().then(()=>{su.mount("#app")});
