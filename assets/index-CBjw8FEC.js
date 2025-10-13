(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ml(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ke={},Br=[],Qt=()=>{},zm=()=>!1,qo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ll=n=>n.startsWith("onUpdate:"),Tt=Object.assign,Fl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Wm=Object.prototype.hasOwnProperty,Ce=(n,e)=>Wm.call(n,e),ue=Array.isArray,$r=n=>Ho(n)==="[object Map]",zd=n=>Ho(n)==="[object Set]",ge=n=>typeof n=="function",Ke=n=>typeof n=="string",tr=n=>typeof n=="symbol",Be=n=>n!==null&&typeof n=="object",Wd=n=>(Be(n)||ge(n))&&ge(n.then)&&ge(n.catch),Gd=Object.prototype.toString,Ho=n=>Gd.call(n),Gm=n=>Ho(n).slice(8,-1),Kd=n=>Ho(n)==="[object Object]",Ul=n=>Ke(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Fs=Ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Km=/-(\w)/g,Wn=zo(n=>n.replace(Km,(e,t)=>t?t.toUpperCase():"")),Qm=/\B([A-Z])/g,Er=zo(n=>n.replace(Qm,"-$1").toLowerCase()),Qd=zo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Pa=zo(n=>n?`on${Qd(n)}`:""),Bn=(n,e)=>!Object.is(n,e),to=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Za=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},el=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ju;const Wo=()=>ju||(ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bl(n){if(ue(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ke(r)?Zm(r):Bl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(n)||Be(n))return n}const Jm=/;(?![^(]*\))/g,Ym=/:([^]+)/,Xm=/\/\*[^]*?\*\//g;function Zm(n){const e={};return n.replace(Xm,"").split(Jm).forEach(t=>{if(t){const r=t.split(Ym);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Z(n){let e="";if(Ke(n))e=n;else if(ue(n))for(let t=0;t<n.length;t++){const r=Z(n[t]);r&&(e+=r+" ")}else if(Be(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const e_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",t_=Ml(e_);function Jd(n){return!!n||n===""}const Yd=n=>!!(n&&n.__v_isRef===!0),De=n=>Ke(n)?n:n==null?"":ue(n)||Be(n)&&(n.toString===Gd||!ge(n.toString))?Yd(n)?De(n.value):JSON.stringify(n,Xd,2):String(n),Xd=(n,e)=>Yd(e)?Xd(n,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[xa(r,i)+" =>"]=s,t),{})}:zd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>xa(t))}:tr(e)?xa(e):Be(e)&&!ue(e)&&!Kd(e)?String(e):e,xa=(n,e="")=>{var t;return tr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class n_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=wt;try{return wt=this,e()}finally{wt=t}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){this._on>0&&--this._on===0&&(wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function r_(){return wt}let Ve;const ka=new WeakSet;class Zd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&wt.active&&wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ka.has(this)&&(ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qu(this),nf(this);const e=Ve,t=Ut;Ve=this,Ut=!0;try{return this.fn()}finally{rf(this),Ve=e,Ut=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ql(e);this.deps=this.depsTail=void 0,qu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tl(this)&&this.run()}get dirty(){return tl(this)}}let ef=0,Us,Bs;function tf(n,e=!1){if(n.flags|=8,e){n.next=Bs,Bs=n;return}n.next=Us,Us=n}function $l(){ef++}function jl(){if(--ef>0)return;if(Bs){let e=Bs;for(Bs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Us;){let e=Us;for(Us=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function nf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rf(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),ql(r),s_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function tl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function sf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Zs)||(n.globalVersion=Zs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!tl(n))))return;n.flags|=2;const e=n.dep,t=Ve,r=Ut;Ve=n,Ut=!0;try{nf(n);const s=n.fn(n._value);(e.version===0||Bn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=t,Ut=r,rf(n),n.flags&=-3}}function ql(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)ql(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function s_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ut=!0;const of=[];function yn(){of.push(Ut),Ut=!1}function vn(){const n=of.pop();Ut=n===void 0?!0:n}function qu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ve;Ve=void 0;try{e()}finally{Ve=t}}}let Zs=0;class i_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!Ut||Ve===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ve)t=this.activeLink=new i_(Ve,this),Ve.deps?(t.prevDep=Ve.depsTail,Ve.depsTail.nextDep=t,Ve.depsTail=t):Ve.deps=Ve.depsTail=t,af(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ve.depsTail,t.nextDep=void 0,Ve.depsTail.nextDep=t,Ve.depsTail=t,Ve.deps===t&&(Ve.deps=r)}return t}trigger(e){this.version++,Zs++,this.notify(e)}notify(e){$l();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{jl()}}}function af(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)af(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const nl=new WeakMap,gr=Symbol(""),rl=Symbol(""),ei=Symbol("");function ht(n,e,t){if(Ut&&Ve){let r=nl.get(n);r||nl.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Hl),s.map=r,s.key=t),s.track()}}function un(n,e,t,r,s,i){const a=nl.get(n);if(!a){Zs++;return}const l=c=>{c&&c.trigger()};if($l(),e==="clear")a.forEach(l);else{const c=ue(n),h=c&&Ul(t);if(c&&t==="length"){const f=Number(r);a.forEach((g,m)=>{(m==="length"||m===ei||!tr(m)&&m>=f)&&l(g)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(ei)),e){case"add":c?h&&l(a.get("length")):(l(a.get(gr)),$r(n)&&l(a.get(rl)));break;case"delete":c||(l(a.get(gr)),$r(n)&&l(a.get(rl)));break;case"set":$r(n)&&l(a.get(gr));break}}jl()}function Dr(n){const e=Se(n);return e===n?e:(ht(e,"iterate",ei),Nt(n)?e:e.map(rt))}function Go(n){return ht(n=Se(n),"iterate",ei),n}const o_={__proto__:null,[Symbol.iterator](){return Va(this,Symbol.iterator,rt)},concat(...n){return Dr(this).concat(...n.map(e=>ue(e)?Dr(e):e))},entries(){return Va(this,"entries",n=>(n[1]=rt(n[1]),n))},every(n,e){return ln(this,"every",n,e,void 0,arguments)},filter(n,e){return ln(this,"filter",n,e,t=>t.map(rt),arguments)},find(n,e){return ln(this,"find",n,e,rt,arguments)},findIndex(n,e){return ln(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ln(this,"findLast",n,e,rt,arguments)},findLastIndex(n,e){return ln(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ln(this,"forEach",n,e,void 0,arguments)},includes(...n){return Da(this,"includes",n)},indexOf(...n){return Da(this,"indexOf",n)},join(n){return Dr(this).join(n)},lastIndexOf(...n){return Da(this,"lastIndexOf",n)},map(n,e){return ln(this,"map",n,e,void 0,arguments)},pop(){return xs(this,"pop")},push(...n){return xs(this,"push",n)},reduce(n,...e){return Hu(this,"reduce",n,e)},reduceRight(n,...e){return Hu(this,"reduceRight",n,e)},shift(){return xs(this,"shift")},some(n,e){return ln(this,"some",n,e,void 0,arguments)},splice(...n){return xs(this,"splice",n)},toReversed(){return Dr(this).toReversed()},toSorted(n){return Dr(this).toSorted(n)},toSpliced(...n){return Dr(this).toSpliced(...n)},unshift(...n){return xs(this,"unshift",n)},values(){return Va(this,"values",rt)}};function Va(n,e,t){const r=Go(n),s=r[e]();return r!==n&&!Nt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const a_=Array.prototype;function ln(n,e,t,r,s,i){const a=Go(n),l=a!==n&&!Nt(n),c=a[e];if(c!==a_[e]){const g=c.apply(n,i);return l?rt(g):g}let h=t;a!==n&&(l?h=function(g,m){return t.call(this,rt(g),m,n)}:t.length>2&&(h=function(g,m){return t.call(this,g,m,n)}));const f=c.call(a,h,r);return l&&s?s(f):f}function Hu(n,e,t,r){const s=Go(n);let i=t;return s!==n&&(Nt(n)?t.length>3&&(i=function(a,l,c){return t.call(this,a,l,c,n)}):i=function(a,l,c){return t.call(this,a,rt(l),c,n)}),s[e](i,...r)}function Da(n,e,t){const r=Se(n);ht(r,"iterate",ei);const s=r[e](...t);return(s===-1||s===!1)&&Kl(t[0])?(t[0]=Se(t[0]),r[e](...t)):s}function xs(n,e,t=[]){yn(),$l();const r=Se(n)[e].apply(n,t);return jl(),vn(),r}const l_=Ml("__proto__,__v_isRef,__isVue"),lf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(tr));function c_(n){tr(n)||(n=String(n));const e=Se(this);return ht(e,"has",n),e.hasOwnProperty(n)}class cf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?v_:ff:i?df:hf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ue(e);if(!s){let c;if(a&&(c=o_[t]))return c;if(t==="hasOwnProperty")return c_}const l=Reflect.get(e,t,ft(e)?e:r);return(tr(t)?lf.has(t):l_(t))||(s||ht(e,"get",t),i)?l:ft(l)?a&&Ul(t)?l:l.value:Be(l)?s?pf(l):Wl(l):l}}class uf extends cf{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=Gn(i);if(!Nt(r)&&!Gn(r)&&(i=Se(i),r=Se(r)),!ue(e)&&ft(i)&&!ft(r))return c?!1:(i.value=r,!0)}const a=ue(e)&&Ul(t)?Number(t)<e.length:Ce(e,t),l=Reflect.set(e,t,r,ft(e)?e:s);return e===Se(s)&&(a?Bn(r,i)&&un(e,"set",t,r):un(e,"add",t,r)),l}deleteProperty(e,t){const r=Ce(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&un(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!tr(t)||!lf.has(t))&&ht(e,"has",t),r}ownKeys(e){return ht(e,"iterate",ue(e)?"length":gr),Reflect.ownKeys(e)}}class u_ extends cf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const h_=new uf,d_=new u_,f_=new uf(!0);const sl=n=>n,Wi=n=>Reflect.getPrototypeOf(n);function p_(n,e,t){return function(...r){const s=this.__v_raw,i=Se(s),a=$r(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),f=t?sl:e?mo:rt;return!e&&ht(i,"iterate",c?rl:gr),{next(){const{value:g,done:m}=h.next();return m?{value:g,done:m}:{value:l?[f(g[0]),f(g[1])]:f(g),done:m}},[Symbol.iterator](){return this}}}}function Gi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function g_(n,e){const t={get(s){const i=this.__v_raw,a=Se(i),l=Se(s);n||(Bn(s,l)&&ht(a,"get",s),ht(a,"get",l));const{has:c}=Wi(a),h=e?sl:n?mo:rt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&ht(Se(s),"iterate",gr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Se(i),l=Se(s);return n||(Bn(s,l)&&ht(a,"has",s),ht(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Se(l),h=e?sl:n?mo:rt;return!n&&ht(c,"iterate",gr),l.forEach((f,g)=>s.call(i,h(f),h(g),a))}};return Tt(t,n?{add:Gi("add"),set:Gi("set"),delete:Gi("delete"),clear:Gi("clear")}:{add(s){!e&&!Nt(s)&&!Gn(s)&&(s=Se(s));const i=Se(this);return Wi(i).has.call(i,s)||(i.add(s),un(i,"add",s,s)),this},set(s,i){!e&&!Nt(i)&&!Gn(i)&&(i=Se(i));const a=Se(this),{has:l,get:c}=Wi(a);let h=l.call(a,s);h||(s=Se(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?Bn(i,f)&&un(a,"set",s,i):un(a,"add",s,i),this},delete(s){const i=Se(this),{has:a,get:l}=Wi(i);let c=a.call(i,s);c||(s=Se(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&un(i,"delete",s,void 0),h},clear(){const s=Se(this),i=s.size!==0,a=s.clear();return i&&un(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=p_(s,n,e)}),t}function zl(n,e){const t=g_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ce(t,s)&&s in r?t:r,s,i)}const m_={get:zl(!1,!1)},__={get:zl(!1,!0)},y_={get:zl(!0,!1)};const hf=new WeakMap,df=new WeakMap,ff=new WeakMap,v_=new WeakMap;function T_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w_(n){return n.__v_skip||!Object.isExtensible(n)?0:T_(Gm(n))}function Wl(n){return Gn(n)?n:Gl(n,!1,h_,m_,hf)}function E_(n){return Gl(n,!1,f_,__,df)}function pf(n){return Gl(n,!0,d_,y_,ff)}function Gl(n,e,t,r,s){if(!Be(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=w_(n);if(i===0)return n;const a=s.get(n);if(a)return a;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function jr(n){return Gn(n)?jr(n.__v_raw):!!(n&&n.__v_isReactive)}function Gn(n){return!!(n&&n.__v_isReadonly)}function Nt(n){return!!(n&&n.__v_isShallow)}function Kl(n){return n?!!n.__v_raw:!1}function Se(n){const e=n&&n.__v_raw;return e?Se(e):n}function I_(n){return!Ce(n,"__v_skip")&&Object.isExtensible(n)&&Za(n,"__v_skip",!0),n}const rt=n=>Be(n)?Wl(n):n,mo=n=>Be(n)?pf(n):n;function ft(n){return n?n.__v_isRef===!0:!1}function Ue(n){return b_(n,!1)}function b_(n,e){return ft(n)?n:new A_(n,e)}class A_{constructor(e,t){this.dep=new Hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Se(e),this._value=t?e:rt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Nt(e)||Gn(e);e=r?e:Se(e),Bn(e,t)&&(this._rawValue=e,this._value=r?e:rt(e),this.dep.trigger())}}function ve(n){return ft(n)?n.value:n}const S_={get:(n,e,t)=>e==="__v_raw"?n:ve(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ft(s)&&!ft(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function gf(n){return jr(n)?n:new Proxy(n,S_)}class C_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return tf(this,!0),!0}get value(){const e=this.dep.track();return sf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function R_(n,e,t=!1){let r,s;return ge(n)?r=n:(r=n.get,s=n.set),new C_(r,s,t)}const Ki={},_o=new WeakMap;let ur;function P_(n,e=!1,t=ur){if(t){let r=_o.get(t);r||_o.set(t,r=[]),r.push(n)}}function x_(n,e,t=ke){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=Q=>s?Q:Nt(Q)||s===!1||s===0?hn(Q,1):hn(Q);let f,g,m,A,x=!1,P=!1;if(ft(n)?(g=()=>n.value,x=Nt(n)):jr(n)?(g=()=>h(n),x=!0):ue(n)?(P=!0,x=n.some(Q=>jr(Q)||Nt(Q)),g=()=>n.map(Q=>{if(ft(Q))return Q.value;if(jr(Q))return h(Q);if(ge(Q))return c?c(Q,2):Q()})):ge(n)?e?g=c?()=>c(n,2):n:g=()=>{if(m){yn();try{m()}finally{vn()}}const Q=ur;ur=f;try{return c?c(n,3,[A]):n(A)}finally{ur=Q}}:g=Qt,e&&s){const Q=g,Ie=s===!0?1/0:s;g=()=>hn(Q(),Ie)}const M=r_(),q=()=>{f.stop(),M&&M.active&&Fl(M.effects,f)};if(i&&e){const Q=e;e=(...Ie)=>{Q(...Ie),q()}}let N=P?new Array(n.length).fill(Ki):Ki;const W=Q=>{if(!(!(f.flags&1)||!f.dirty&&!Q))if(e){const Ie=f.run();if(s||x||(P?Ie.some((Pe,b)=>Bn(Pe,N[b])):Bn(Ie,N))){m&&m();const Pe=ur;ur=f;try{const b=[Ie,N===Ki?void 0:P&&N[0]===Ki?[]:N,A];N=Ie,c?c(e,3,b):e(...b)}finally{ur=Pe}}}else f.run()};return l&&l(W),f=new Zd(g),f.scheduler=a?()=>a(W,!1):W,A=Q=>P_(Q,!1,f),m=f.onStop=()=>{const Q=_o.get(f);if(Q){if(c)c(Q,4);else for(const Ie of Q)Ie();_o.delete(f)}},e?r?W(!0):N=f.run():a?a(W.bind(null,!0),!0):f.run(),q.pause=f.pause.bind(f),q.resume=f.resume.bind(f),q.stop=q,q}function hn(n,e=1/0,t){if(e<=0||!Be(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,ft(n))hn(n.value,e,t);else if(ue(n))for(let r=0;r<n.length;r++)hn(n[r],e,t);else if(zd(n)||$r(n))n.forEach(r=>{hn(r,e,t)});else if(Kd(n)){for(const r in n)hn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&hn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fi(n,e,t,r){try{return r?n(...r):n()}catch(s){Ko(s,e,t)}}function tn(n,e,t,r){if(ge(n)){const s=fi(n,e,t,r);return s&&Wd(s)&&s.catch(i=>{Ko(i,e,t)}),s}if(ue(n)){const s=[];for(let i=0;i<n.length;i++)s.push(tn(n[i],e,t,r));return s}}function Ko(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ke;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](n,c,h)===!1)return}l=l.parent}if(i){yn(),fi(i,null,10,[n,c,h]),vn();return}}k_(n,t,s,r,a)}function k_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const yt=[];let Wt=-1;const qr=[];let Nn=null,Nr=0;const mf=Promise.resolve();let yo=null;function V_(n){const e=yo||mf;return n?e.then(this?n.bind(this):n):e}function D_(n){let e=Wt+1,t=yt.length;for(;e<t;){const r=e+t>>>1,s=yt[r],i=ti(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Ql(n){if(!(n.flags&1)){const e=ti(n),t=yt[yt.length-1];!t||!(n.flags&2)&&e>=ti(t)?yt.push(n):yt.splice(D_(e),0,n),n.flags|=1,_f()}}function _f(){yo||(yo=mf.then(vf))}function N_(n){ue(n)?qr.push(...n):Nn&&n.id===-1?Nn.splice(Nr+1,0,n):n.flags&1||(qr.push(n),n.flags|=1),_f()}function zu(n,e,t=Wt+1){for(;t<yt.length;t++){const r=yt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;yt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function yf(n){if(qr.length){const e=[...new Set(qr)].sort((t,r)=>ti(t)-ti(r));if(qr.length=0,Nn){Nn.push(...e);return}for(Nn=e,Nr=0;Nr<Nn.length;Nr++){const t=Nn[Nr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Nn=null,Nr=0}}const ti=n=>n.id==null?n.flags&2?-1:1/0:n.id;function vf(n){try{for(Wt=0;Wt<yt.length;Wt++){const e=yt[Wt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Wt<yt.length;Wt++){const e=yt[Wt];e&&(e.flags&=-2)}Wt=-1,yt.length=0,yf(),yo=null,(yt.length||qr.length)&&vf()}}let Dt=null,Tf=null;function vo(n){const e=Dt;return Dt=n,Tf=n&&n.type.__scopeId||null,e}function O_(n,e=Dt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&eh(-1);const i=vo(e);let a;try{a=n(...s)}finally{vo(i),r._d&&eh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function M_(n,e){if(Dt===null)return n;const t=Xo(Dt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=ke]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&hn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function lr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(yn(),tn(c,t,8,[n.el,l,n,e]),vn())}}const L_=Symbol("_vte"),F_=n=>n.__isTeleport;function Jl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Jl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function wf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function $s(n,e,t,r,s=!1){if(ue(n)){n.forEach((x,P)=>$s(x,e&&(ue(e)?e[P]:e),t,r,s));return}if(js(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&$s(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Xo(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,f=l.refs===ke?l.refs={}:l.refs,g=l.setupState,m=Se(g),A=g===ke?()=>!1:x=>Ce(m,x);if(h!=null&&h!==c&&(Ke(h)?(f[h]=null,A(h)&&(g[h]=null)):ft(h)&&(h.value=null)),ge(c))fi(c,l,12,[a,f]);else{const x=Ke(c),P=ft(c);if(x||P){const M=()=>{if(n.f){const q=x?A(c)?g[c]:f[c]:c.value;s?ue(q)&&Fl(q,i):ue(q)?q.includes(i)||q.push(i):x?(f[c]=[i],A(c)&&(g[c]=f[c])):(c.value=[i],n.k&&(f[n.k]=c.value))}else x?(f[c]=a,A(c)&&(g[c]=a)):P&&(c.value=a,n.k&&(f[n.k]=a))};a?(M.id=-1,bt(M,t)):M()}}}Wo().requestIdleCallback;Wo().cancelIdleCallback;const js=n=>!!n.type.__asyncLoader,Ef=n=>n.type.__isKeepAlive;function U_(n,e){If(n,"a",e)}function B_(n,e){If(n,"da",e)}function If(n,e,t=vt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Qo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Ef(s.parent.vnode)&&$_(r,e,t,s),s=s.parent}}function $_(n,e,t,r){const s=Qo(e,n,r,!0);Yl(()=>{Fl(r[e],s)},t)}function Qo(n,e,t=vt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{yn();const l=gi(t),c=tn(e,t,n,a);return l(),vn(),c});return r?s.unshift(i):s.push(i),i}}const Sn=n=>(e,t=vt)=>{(!ri||n==="sp")&&Qo(n,(...r)=>e(...r),t)},j_=Sn("bm"),pi=Sn("m"),q_=Sn("bu"),H_=Sn("u"),z_=Sn("bum"),Yl=Sn("um"),W_=Sn("sp"),G_=Sn("rtg"),K_=Sn("rtc");function Q_(n,e=vt){Qo("ec",n,e)}const J_=Symbol.for("v-ndc");function Xl(n,e,t,r){let s;const i=t,a=ue(n);if(a||Ke(n)){const l=a&&jr(n);let c=!1,h=!1;l&&(c=!Nt(n),h=Gn(n),n=Go(n)),s=new Array(n.length);for(let f=0,g=n.length;f<g;f++)s[f]=e(c?h?mo(rt(n[f])):rt(n[f]):n[f],f,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Be(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(n[f],f,c,i)}}else s=[];return s}const il=n=>n?Hf(n)?Xo(n):il(n.parent):null,qs=Tt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>il(n.parent),$root:n=>il(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Af(n),$forceUpdate:n=>n.f||(n.f=()=>{Ql(n.update)}),$nextTick:n=>n.n||(n.n=V_.bind(n.proxy)),$watch:n=>yy.bind(n)}),Na=(n,e)=>n!==ke&&!n.__isScriptSetup&&Ce(n,e),Y_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;let h;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Na(r,e))return a[e]=1,r[e];if(s!==ke&&Ce(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&Ce(h,e))return a[e]=3,i[e];if(t!==ke&&Ce(t,e))return a[e]=4,t[e];ol&&(a[e]=0)}}const f=qs[e];let g,m;if(f)return e==="$attrs"&&ht(n.attrs,"get",""),f(n);if((g=l.__cssModules)&&(g=g[e]))return g;if(t!==ke&&Ce(t,e))return a[e]=4,t[e];if(m=c.config.globalProperties,Ce(m,e))return m[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Na(s,e)?(s[e]=t,!0):r!==ke&&Ce(r,e)?(r[e]=t,!0):Ce(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!t[a]||n!==ke&&Ce(n,a)||Na(e,a)||(l=i[0])&&Ce(l,a)||Ce(r,a)||Ce(qs,a)||Ce(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ce(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Wu(n){return ue(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ol=!0;function X_(n){const e=Af(n),t=n.proxy,r=n.ctx;ol=!1,e.beforeCreate&&Gu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:g,mounted:m,beforeUpdate:A,updated:x,activated:P,deactivated:M,beforeDestroy:q,beforeUnmount:N,destroyed:W,unmounted:Q,render:Ie,renderTracked:Pe,renderTriggered:b,errorCaptured:_,serverPrefetch:v,expose:E,inheritAttrs:I,components:C,directives:T,filters:Ye}=e;if(h&&Z_(h,r,null),a)for(const J in a){const L=a[J];ge(L)&&(r[J]=L.bind(t))}if(s){const J=s.call(t,t);Be(J)&&(n.data=Wl(J))}if(ol=!0,i)for(const J in i){const L=i[J],he=ge(L)?L.bind(t,t):ge(L.get)?L.get.bind(t,t):Qt,Fe=!ge(L)&&ge(L.set)?L.set.bind(t):Qt,Me=si({get:he,set:Fe});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Me.value,set:me=>Me.value=me})}if(l)for(const J in l)bf(l[J],r,t,J);if(c){const J=ge(c)?c.call(t):c;Reflect.ownKeys(J).forEach(L=>{iy(L,J[L])})}f&&Gu(f,n,"c");function ie(J,L){ue(L)?L.forEach(he=>J(he.bind(t))):L&&J(L.bind(t))}if(ie(j_,g),ie(pi,m),ie(q_,A),ie(H_,x),ie(U_,P),ie(B_,M),ie(Q_,_),ie(K_,Pe),ie(G_,b),ie(z_,N),ie(Yl,Q),ie(W_,v),ue(E))if(E.length){const J=n.exposed||(n.exposed={});E.forEach(L=>{Object.defineProperty(J,L,{get:()=>t[L],set:he=>t[L]=he,enumerable:!0})})}else n.exposed||(n.exposed={});Ie&&n.render===Qt&&(n.render=Ie),I!=null&&(n.inheritAttrs=I),C&&(n.components=C),T&&(n.directives=T),v&&wf(n)}function Z_(n,e,t=Qt){ue(n)&&(n=al(n));for(const r in n){const s=n[r];let i;Be(s)?"default"in s?i=no(s.from||r,s.default,!0):i=no(s.from||r):i=no(s),ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Gu(n,e,t){tn(ue(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function bf(n,e,t,r){let s=r.includes(".")?Ff(t,r):()=>t[r];if(Ke(n)){const i=e[n];ge(i)&&Hs(s,i)}else if(ge(n))Hs(s,n.bind(t));else if(Be(n))if(ue(n))n.forEach(i=>bf(i,e,t,r));else{const i=ge(n.handler)?n.handler.bind(t):e[n.handler];ge(i)&&Hs(s,i,n)}}function Af(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>To(c,h,a,!0)),To(c,e,a)),Be(e)&&i.set(e,c),c}function To(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&To(n,i,t,!0),s&&s.forEach(a=>To(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=ey[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const ey={data:Ku,props:Qu,emits:Qu,methods:Vs,computed:Vs,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Vs,directives:Vs,watch:ny,provide:Ku,inject:ty};function Ku(n,e){return e?n?function(){return Tt(ge(n)?n.call(this,this):n,ge(e)?e.call(this,this):e)}:e:n}function ty(n,e){return Vs(al(n),al(e))}function al(n){if(ue(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function mt(n,e){return n?[...new Set([].concat(n,e))]:e}function Vs(n,e){return n?Tt(Object.create(null),n,e):e}function Qu(n,e){return n?ue(n)&&ue(e)?[...new Set([...n,...e])]:Tt(Object.create(null),Wu(n),Wu(e??{})):e}function ny(n,e){if(!n)return e;if(!e)return n;const t=Tt(Object.create(null),n);for(const r in e)t[r]=mt(n[r],e[r]);return t}function Sf(){return{app:null,config:{isNativeTag:zm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ry=0;function sy(n,e){return function(r,s=null){ge(r)||(r=Tt({},r)),s!=null&&!Be(s)&&(s=null);const i=Sf(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:ry++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Uy,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&ge(f.install)?(a.add(f),f.install(h,...g)):ge(f)&&(a.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,m){if(!c){const A=h._ceVNode||gn(r,s);return A.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(A,f,m),c=!0,h._container=f,f.__vue_app__=h,Xo(A.component)}},onUnmount(f){l.push(f)},unmount(){c&&(tn(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=Hr;Hr=h;try{return f()}finally{Hr=g}}};return h}}let Hr=null;function iy(n,e){if(vt){let t=vt.provides;const r=vt.parent&&vt.parent.provides;r===t&&(t=vt.provides=Object.create(r)),t[n]=e}}function no(n,e,t=!1){const r=Dy();if(r||Hr){let s=Hr?Hr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ge(e)?e.call(r&&r.proxy):e}}const Cf={},Rf=()=>Object.create(Cf),Pf=n=>Object.getPrototypeOf(n)===Cf;function oy(n,e,t,r=!1){const s={},i=Rf();n.propsDefaults=Object.create(null),xf(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:E_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function ay(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=Se(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let g=0;g<f.length;g++){let m=f[g];if(Jo(n.emitsOptions,m))continue;const A=e[m];if(c)if(Ce(i,m))A!==i[m]&&(i[m]=A,h=!0);else{const x=Wn(m);s[x]=ll(c,l,x,A,n,!1)}else A!==i[m]&&(i[m]=A,h=!0)}}}else{xf(n,e,s,i)&&(h=!0);let f;for(const g in l)(!e||!Ce(e,g)&&((f=Er(g))===g||!Ce(e,f)))&&(c?t&&(t[g]!==void 0||t[f]!==void 0)&&(s[g]=ll(c,l,g,void 0,n,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!Ce(e,g))&&(delete i[g],h=!0)}h&&un(n.attrs,"set","")}function xf(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(Fs(c))continue;const h=e[c];let f;s&&Ce(s,f=Wn(c))?!i||!i.includes(f)?t[f]=h:(l||(l={}))[f]=h:Jo(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Se(t),h=l||ke;for(let f=0;f<i.length;f++){const g=i[f];t[g]=ll(s,c,g,h[g],n,!Ce(h,g))}}return a}function ll(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=Ce(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ge(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=gi(s);r=h[t]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Er(t))&&(r=!0))}return r}const ly=new WeakMap;function kf(n,e,t=!1){const r=t?ly:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!ge(n)){const f=g=>{c=!0;const[m,A]=kf(g,e,!0);Tt(a,m),A&&l.push(...A)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!c)return Be(n)&&r.set(n,Br),Br;if(ue(i))for(let f=0;f<i.length;f++){const g=Wn(i[f]);Ju(g)&&(a[g]=ke)}else if(i)for(const f in i){const g=Wn(f);if(Ju(g)){const m=i[f],A=a[g]=ue(m)||ge(m)?{type:m}:Tt({},m),x=A.type;let P=!1,M=!0;if(ue(x))for(let q=0;q<x.length;++q){const N=x[q],W=ge(N)&&N.name;if(W==="Boolean"){P=!0;break}else W==="String"&&(M=!1)}else P=ge(x)&&x.name==="Boolean";A[0]=P,A[1]=M,(P||Ce(A,"default"))&&l.push(g)}}const h=[a,l];return Be(n)&&r.set(n,h),h}function Ju(n){return n[0]!=="$"&&!Fs(n)}const Zl=n=>n==="_"||n==="__"||n==="_ctx"||n==="$stable",ec=n=>ue(n)?n.map(Kt):[Kt(n)],cy=(n,e,t)=>{if(e._n)return e;const r=O_((...s)=>ec(e(...s)),t);return r._c=!1,r},Vf=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Zl(s))continue;const i=n[s];if(ge(i))e[s]=cy(s,i,r);else if(i!=null){const a=ec(i);e[s]=()=>a}}},Df=(n,e)=>{const t=ec(e);n.slots.default=()=>t},Nf=(n,e,t)=>{for(const r in e)(t||!Zl(r))&&(n[r]=e[r])},uy=(n,e,t)=>{const r=n.slots=Rf();if(n.vnode.shapeFlag&32){const s=e.__;s&&Za(r,"__",s,!0);const i=e._;i?(Nf(r,e,t),t&&Za(r,"_",i,!0)):Vf(e,r)}else e&&Df(n,e)},hy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=ke;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:Nf(s,e,t):(i=!e.$stable,Vf(e,s)),a=e}else e&&(Df(n,e),a={default:1});if(i)for(const l in s)!Zl(l)&&a[l]==null&&delete s[l]},bt=Ay;function dy(n){return fy(n)}function fy(n,e){const t=Wo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:g,nextSibling:m,setScopeId:A=Qt,insertStaticContent:x}=n,P=(y,w,k,B=null,F=null,U=null,K=void 0,H=null,j=!!w.dynamicChildren)=>{if(y===w)return;y&&!ks(y,w)&&(B=sn(y),me(y,F,U,!0),y=null),w.patchFlag===-2&&(j=!1,w.dynamicChildren=null);const{type:$,ref:te,shapeFlag:G}=w;switch($){case Yo:M(y,w,k,B);break;case Kn:q(y,w,k,B);break;case Ma:y==null&&N(w,k,B,K);break;case xt:C(y,w,k,B,F,U,K,H,j);break;default:G&1?Ie(y,w,k,B,F,U,K,H,j):G&6?T(y,w,k,B,F,U,K,H,j):(G&64||G&128)&&$.process(y,w,k,B,F,U,K,H,j,Ht)}te!=null&&F?$s(te,y&&y.ref,U,w||y,!w):te==null&&y&&y.ref!=null&&$s(y.ref,null,U,y,!0)},M=(y,w,k,B)=>{if(y==null)r(w.el=l(w.children),k,B);else{const F=w.el=y.el;w.children!==y.children&&h(F,w.children)}},q=(y,w,k,B)=>{y==null?r(w.el=c(w.children||""),k,B):w.el=y.el},N=(y,w,k,B)=>{[y.el,y.anchor]=x(y.children,w,k,B,y.el,y.anchor)},W=({el:y,anchor:w},k,B)=>{let F;for(;y&&y!==w;)F=m(y),r(y,k,B),y=F;r(w,k,B)},Q=({el:y,anchor:w})=>{let k;for(;y&&y!==w;)k=m(y),s(y),y=k;s(w)},Ie=(y,w,k,B,F,U,K,H,j)=>{w.type==="svg"?K="svg":w.type==="math"&&(K="mathml"),y==null?Pe(w,k,B,F,U,K,H,j):v(y,w,F,U,K,H,j)},Pe=(y,w,k,B,F,U,K,H)=>{let j,$;const{props:te,shapeFlag:G,transition:ee,dirs:ae}=y;if(j=y.el=a(y.type,U,te&&te.is,te),G&8?f(j,y.children):G&16&&_(y.children,j,null,B,F,Oa(y,U),K,H),ae&&lr(y,null,B,"created"),b(j,y,y.scopeId,K,B),te){for(const fe in te)fe!=="value"&&!Fs(fe)&&i(j,fe,null,te[fe],U,B);"value"in te&&i(j,"value",null,te.value,U),($=te.onVnodeBeforeMount)&&zt($,B,y)}ae&&lr(y,null,B,"beforeMount");const se=py(F,ee);se&&ee.beforeEnter(j),r(j,w,k),(($=te&&te.onVnodeMounted)||se||ae)&&bt(()=>{$&&zt($,B,y),se&&ee.enter(j),ae&&lr(y,null,B,"mounted")},F)},b=(y,w,k,B,F)=>{if(k&&A(y,k),B)for(let U=0;U<B.length;U++)A(y,B[U]);if(F){let U=F.subTree;if(w===U||Bf(U.type)&&(U.ssContent===w||U.ssFallback===w)){const K=F.vnode;b(y,K,K.scopeId,K.slotScopeIds,F.parent)}}},_=(y,w,k,B,F,U,K,H,j=0)=>{for(let $=j;$<y.length;$++){const te=y[$]=H?On(y[$]):Kt(y[$]);P(null,te,w,k,B,F,U,K,H)}},v=(y,w,k,B,F,U,K)=>{const H=w.el=y.el;let{patchFlag:j,dynamicChildren:$,dirs:te}=w;j|=y.patchFlag&16;const G=y.props||ke,ee=w.props||ke;let ae;if(k&&cr(k,!1),(ae=ee.onVnodeBeforeUpdate)&&zt(ae,k,w,y),te&&lr(w,y,k,"beforeUpdate"),k&&cr(k,!0),(G.innerHTML&&ee.innerHTML==null||G.textContent&&ee.textContent==null)&&f(H,""),$?E(y.dynamicChildren,$,H,k,B,Oa(w,F),U):K||L(y,w,H,null,k,B,Oa(w,F),U,!1),j>0){if(j&16)I(H,G,ee,k,F);else if(j&2&&G.class!==ee.class&&i(H,"class",null,ee.class,F),j&4&&i(H,"style",G.style,ee.style,F),j&8){const se=w.dynamicProps;for(let fe=0;fe<se.length;fe++){const we=se[fe],Xe=G[we],Ze=ee[we];(Ze!==Xe||we==="value")&&i(H,we,Xe,Ze,F,k)}}j&1&&y.children!==w.children&&f(H,w.children)}else!K&&$==null&&I(H,G,ee,k,F);((ae=ee.onVnodeUpdated)||te)&&bt(()=>{ae&&zt(ae,k,w,y),te&&lr(w,y,k,"updated")},B)},E=(y,w,k,B,F,U,K)=>{for(let H=0;H<w.length;H++){const j=y[H],$=w[H],te=j.el&&(j.type===xt||!ks(j,$)||j.shapeFlag&198)?g(j.el):k;P(j,$,te,null,B,F,U,K,!0)}},I=(y,w,k,B,F)=>{if(w!==k){if(w!==ke)for(const U in w)!Fs(U)&&!(U in k)&&i(y,U,w[U],null,F,B);for(const U in k){if(Fs(U))continue;const K=k[U],H=w[U];K!==H&&U!=="value"&&i(y,U,H,K,F,B)}"value"in k&&i(y,"value",w.value,k.value,F)}},C=(y,w,k,B,F,U,K,H,j)=>{const $=w.el=y?y.el:l(""),te=w.anchor=y?y.anchor:l("");let{patchFlag:G,dynamicChildren:ee,slotScopeIds:ae}=w;ae&&(H=H?H.concat(ae):ae),y==null?(r($,k,B),r(te,k,B),_(w.children||[],k,te,F,U,K,H,j)):G>0&&G&64&&ee&&y.dynamicChildren?(E(y.dynamicChildren,ee,k,F,U,K,H),(w.key!=null||F&&w===F.subTree)&&Of(y,w,!0)):L(y,w,k,te,F,U,K,H,j)},T=(y,w,k,B,F,U,K,H,j)=>{w.slotScopeIds=H,y==null?w.shapeFlag&512?F.ctx.activate(w,k,B,K,j):Ye(w,k,B,F,U,K,j):qt(y,w,j)},Ye=(y,w,k,B,F,U,K)=>{const H=y.component=Vy(y,B,F);if(Ef(y)&&(H.ctx.renderer=Ht),Ny(H,!1,K),H.asyncDep){if(F&&F.registerDep(H,ie,K),!y.el){const j=H.subTree=gn(Kn);q(null,j,w,k),y.placeholder=j.el}}else ie(H,y,w,k,F,U,K)},qt=(y,w,k)=>{const B=w.component=y.component;if(Iy(y,w,k))if(B.asyncDep&&!B.asyncResolved){J(B,w,k);return}else B.next=w,B.update();else w.el=y.el,B.vnode=w},ie=(y,w,k,B,F,U,K)=>{const H=()=>{if(y.isMounted){let{next:G,bu:ee,u:ae,parent:se,vnode:fe}=y;{const ot=Mf(y);if(ot){G&&(G.el=fe.el,J(y,G,K)),ot.asyncDep.then(()=>{y.isUnmounted||H()});return}}let we=G,Xe;cr(y,!1),G?(G.el=fe.el,J(y,G,K)):G=fe,ee&&to(ee),(Xe=G.props&&G.props.onVnodeBeforeUpdate)&&zt(Xe,se,G,fe),cr(y,!0);const Ze=Xu(y),Rt=y.subTree;y.subTree=Ze,P(Rt,Ze,g(Rt.el),sn(Rt),y,F,U),G.el=Ze.el,we===null&&by(y,Ze.el),ae&&bt(ae,F),(Xe=G.props&&G.props.onVnodeUpdated)&&bt(()=>zt(Xe,se,G,fe),F)}else{let G;const{el:ee,props:ae}=w,{bm:se,m:fe,parent:we,root:Xe,type:Ze}=y,Rt=js(w);cr(y,!1),se&&to(se),!Rt&&(G=ae&&ae.onVnodeBeforeMount)&&zt(G,we,w),cr(y,!0);{Xe.ce&&Xe.ce._def.shadowRoot!==!1&&Xe.ce._injectChildStyle(Ze);const ot=y.subTree=Xu(y);P(null,ot,k,B,y,F,U),w.el=ot.el}if(fe&&bt(fe,F),!Rt&&(G=ae&&ae.onVnodeMounted)){const ot=w;bt(()=>zt(G,we,ot),F)}(w.shapeFlag&256||we&&js(we.vnode)&&we.vnode.shapeFlag&256)&&y.a&&bt(y.a,F),y.isMounted=!0,w=k=B=null}};y.scope.on();const j=y.effect=new Zd(H);y.scope.off();const $=y.update=j.run.bind(j),te=y.job=j.runIfDirty.bind(j);te.i=y,te.id=y.uid,j.scheduler=()=>Ql(te),cr(y,!0),$()},J=(y,w,k)=>{w.component=y;const B=y.vnode.props;y.vnode=w,y.next=null,ay(y,w.props,B,k),hy(y,w.children,k),yn(),zu(y),vn()},L=(y,w,k,B,F,U,K,H,j=!1)=>{const $=y&&y.children,te=y?y.shapeFlag:0,G=w.children,{patchFlag:ee,shapeFlag:ae}=w;if(ee>0){if(ee&128){Fe($,G,k,B,F,U,K,H,j);return}else if(ee&256){he($,G,k,B,F,U,K,H,j);return}}ae&8?(te&16&&rr($,F,U),G!==$&&f(k,G)):te&16?ae&16?Fe($,G,k,B,F,U,K,H,j):rr($,F,U,!0):(te&8&&f(k,""),ae&16&&_(G,k,B,F,U,K,H,j))},he=(y,w,k,B,F,U,K,H,j)=>{y=y||Br,w=w||Br;const $=y.length,te=w.length,G=Math.min($,te);let ee;for(ee=0;ee<G;ee++){const ae=w[ee]=j?On(w[ee]):Kt(w[ee]);P(y[ee],ae,k,null,F,U,K,H,j)}$>te?rr(y,F,U,!0,!1,G):_(w,k,B,F,U,K,H,j,G)},Fe=(y,w,k,B,F,U,K,H,j)=>{let $=0;const te=w.length;let G=y.length-1,ee=te-1;for(;$<=G&&$<=ee;){const ae=y[$],se=w[$]=j?On(w[$]):Kt(w[$]);if(ks(ae,se))P(ae,se,k,null,F,U,K,H,j);else break;$++}for(;$<=G&&$<=ee;){const ae=y[G],se=w[ee]=j?On(w[ee]):Kt(w[ee]);if(ks(ae,se))P(ae,se,k,null,F,U,K,H,j);else break;G--,ee--}if($>G){if($<=ee){const ae=ee+1,se=ae<te?w[ae].el:B;for(;$<=ee;)P(null,w[$]=j?On(w[$]):Kt(w[$]),k,se,F,U,K,H,j),$++}}else if($>ee)for(;$<=G;)me(y[$],F,U,!0),$++;else{const ae=$,se=$,fe=new Map;for($=se;$<=ee;$++){const et=w[$]=j?On(w[$]):Kt(w[$]);et.key!=null&&fe.set(et.key,$)}let we,Xe=0;const Ze=ee-se+1;let Rt=!1,ot=0;const Pn=new Array(Ze);for($=0;$<Ze;$++)Pn[$]=0;for($=ae;$<=G;$++){const et=y[$];if(Xe>=Ze){me(et,F,U,!0);continue}let Pt;if(et.key!=null)Pt=fe.get(et.key);else for(we=se;we<=ee;we++)if(Pn[we-se]===0&&ks(et,w[we])){Pt=we;break}Pt===void 0?me(et,F,U,!0):(Pn[Pt-se]=$+1,Pt>=ot?ot=Pt:Rt=!0,P(et,w[Pt],k,null,F,U,K,H,j),Xe++)}const _s=Rt?gy(Pn):Br;for(we=_s.length-1,$=Ze-1;$>=0;$--){const et=se+$,Pt=w[et],xi=w[et+1],Rr=et+1<te?xi.el||xi.placeholder:B;Pn[$]===0?P(null,Pt,k,Rr,F,U,K,H,j):Rt&&(we<0||$!==_s[we]?Me(Pt,k,Rr,2):we--)}}},Me=(y,w,k,B,F=null)=>{const{el:U,type:K,transition:H,children:j,shapeFlag:$}=y;if($&6){Me(y.component.subTree,w,k,B);return}if($&128){y.suspense.move(w,k,B);return}if($&64){K.move(y,w,k,Ht);return}if(K===xt){r(U,w,k);for(let G=0;G<j.length;G++)Me(j[G],w,k,B);r(y.anchor,w,k);return}if(K===Ma){W(y,w,k);return}if(B!==2&&$&1&&H)if(B===0)H.beforeEnter(U),r(U,w,k),bt(()=>H.enter(U),F);else{const{leave:G,delayLeave:ee,afterLeave:ae}=H,se=()=>{y.ctx.isUnmounted?s(U):r(U,w,k)},fe=()=>{G(U,()=>{se(),ae&&ae()})};ee?ee(U,se,fe):fe()}else r(U,w,k)},me=(y,w,k,B=!1,F=!1)=>{const{type:U,props:K,ref:H,children:j,dynamicChildren:$,shapeFlag:te,patchFlag:G,dirs:ee,cacheIndex:ae}=y;if(G===-2&&(F=!1),H!=null&&(yn(),$s(H,null,k,y,!0),vn()),ae!=null&&(w.renderCache[ae]=void 0),te&256){w.ctx.deactivate(y);return}const se=te&1&&ee,fe=!js(y);let we;if(fe&&(we=K&&K.onVnodeBeforeUnmount)&&zt(we,w,y),te&6)nr(y.component,k,B);else{if(te&128){y.suspense.unmount(k,B);return}se&&lr(y,null,w,"beforeUnmount"),te&64?y.type.remove(y,w,k,Ht,B):$&&!$.hasOnce&&(U!==xt||G>0&&G&64)?rr($,w,k,!1,!0):(U===xt&&G&384||!F&&te&16)&&rr(j,w,k),B&&Ae(y)}(fe&&(we=K&&K.onVnodeUnmounted)||se)&&bt(()=>{we&&zt(we,w,y),se&&lr(y,null,w,"unmounted")},k)},Ae=y=>{const{type:w,el:k,anchor:B,transition:F}=y;if(w===xt){Cr(k,B);return}if(w===Ma){Q(y);return}const U=()=>{s(k),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(y.shapeFlag&1&&F&&!F.persisted){const{leave:K,delayLeave:H}=F,j=()=>K(k,U);H?H(y.el,U,j):j()}else U()},Cr=(y,w)=>{let k;for(;y!==w;)k=m(y),s(y),y=k;s(w)},nr=(y,w,k)=>{const{bum:B,scope:F,job:U,subTree:K,um:H,m:j,a:$,parent:te,slots:{__:G}}=y;Yu(j),Yu($),B&&to(B),te&&ue(G)&&G.forEach(ee=>{te.renderCache[ee]=void 0}),F.stop(),U&&(U.flags|=8,me(K,y,w,k)),H&&bt(H,w),bt(()=>{y.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},rr=(y,w,k,B=!1,F=!1,U=0)=>{for(let K=U;K<y.length;K++)me(y[K],w,k,B,F)},sn=y=>{if(y.shapeFlag&6)return sn(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=m(y.anchor||y.el),k=w&&w[L_];return k?m(k):w};let gs=!1;const Pi=(y,w,k)=>{y==null?w._vnode&&me(w._vnode,null,null,!0):P(w._vnode||null,y,w,null,null,null,k),w._vnode=y,gs||(gs=!0,zu(),yf(),gs=!1)},Ht={p:P,um:me,m:Me,r:Ae,mt:Ye,mc:_,pc:L,pbc:E,n:sn,o:n};return{render:Pi,hydrate:void 0,createApp:sy(Pi)}}function Oa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function cr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function py(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Of(n,e,t=!1){const r=n.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=On(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&Of(a,l)),l.type===Yo&&(l.el=a.el),l.type===Kn&&!l.el&&(l.el=a.el)}}function gy(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Mf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mf(e)}function Yu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const my=Symbol.for("v-scx"),_y=()=>no(my);function Hs(n,e,t){return Lf(n,e,t)}function Lf(n,e,t=ke){const{immediate:r,deep:s,flush:i,once:a}=t,l=Tt({},t),c=e&&r||!e&&i!=="post";let h;if(ri){if(i==="sync"){const A=_y();h=A.__watcherHandles||(A.__watcherHandles=[])}else if(!c){const A=()=>{};return A.stop=Qt,A.resume=Qt,A.pause=Qt,A}}const f=vt;l.call=(A,x,P)=>tn(A,f,x,P);let g=!1;i==="post"?l.scheduler=A=>{bt(A,f&&f.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(A,x)=>{x?A():Ql(A)}),l.augmentJob=A=>{e&&(A.flags|=4),g&&(A.flags|=2,f&&(A.id=f.uid,A.i=f))};const m=x_(n,e,l);return ri&&(h?h.push(m):c&&m()),m}function yy(n,e,t){const r=this.proxy,s=Ke(n)?n.includes(".")?Ff(r,n):()=>r[n]:n.bind(r,r);let i;ge(e)?i=e:(i=e.handler,t=e);const a=gi(this),l=Lf(s,i.bind(r),t);return a(),l}function Ff(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const vy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Wn(e)}Modifiers`]||n[`${Er(e)}Modifiers`];function Ty(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||ke;let s=t;const i=e.startsWith("update:"),a=i&&vy(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>Ke(f)?f.trim():f)),a.number&&(s=t.map(el)));let l,c=r[l=Pa(e)]||r[l=Pa(Wn(e))];!c&&i&&(c=r[l=Pa(Er(e))]),c&&tn(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,tn(h,n,6,s)}}function Uf(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!ge(n)){const c=h=>{const f=Uf(h,e,!0);f&&(l=!0,Tt(a,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Be(n)&&r.set(n,null),null):(ue(i)?i.forEach(c=>a[c]=null):Tt(a,i),Be(n)&&r.set(n,a),a)}function Jo(n,e){return!n||!qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(n,e[0].toLowerCase()+e.slice(1))||Ce(n,Er(e))||Ce(n,e))}function Xu(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:g,data:m,setupState:A,ctx:x,inheritAttrs:P}=n,M=vo(n);let q,N;try{if(t.shapeFlag&4){const Q=s||r,Ie=Q;q=Kt(h.call(Ie,Q,f,g,A,m,x)),N=l}else{const Q=e;q=Kt(Q.length>1?Q(g,{attrs:l,slots:a,emit:c}):Q(g,null)),N=e.props?l:wy(l)}}catch(Q){zs.length=0,Ko(Q,n,1),q=gn(Kn)}let W=q;if(N&&P!==!1){const Q=Object.keys(N),{shapeFlag:Ie}=W;Q.length&&Ie&7&&(i&&Q.some(Ll)&&(N=Ey(N,i)),W=Jr(W,N,!1,!0))}return t.dirs&&(W=Jr(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(t.dirs):t.dirs),t.transition&&Jl(W,t.transition),q=W,vo(M),q}const wy=n=>{let e;for(const t in n)(t==="class"||t==="style"||qo(t))&&((e||(e={}))[t]=n[t]);return e},Ey=(n,e)=>{const t={};for(const r in n)(!Ll(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Iy(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Zu(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const m=f[g];if(a[m]!==r[m]&&!Jo(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Zu(r,a,h):!0:!!a;return!1}function Zu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Jo(t,i))return!0}return!1}function by({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Bf=n=>n.__isSuspense;function Ay(n,e){e&&e.pendingBranch?ue(n)?e.effects.push(...n):e.effects.push(n):N_(n)}const xt=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),Kn=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),zs=[];let St=null;function re(n=!1){zs.push(St=n?null:[])}function Sy(){zs.pop(),St=zs[zs.length-1]||null}let ni=1;function eh(n,e=!1){ni+=n,n<0&&St&&e&&(St.hasOnce=!0)}function $f(n){return n.dynamicChildren=ni>0?St||Br:null,Sy(),ni>0&&St&&St.push(n),n}function pe(n,e,t,r,s,i){return $f(O(n,e,t,r,s,i,!0))}function Mt(n,e,t,r,s){return $f(gn(n,e,t,r,s,!0))}function jf(n){return n?n.__v_isVNode===!0:!1}function ks(n,e){return n.type===e.type&&n.key===e.key}const qf=({key:n})=>n??null,ro=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ke(n)||ft(n)||ge(n)?{i:Dt,r:n,k:e,f:!!t}:n:null);function O(n,e=null,t=null,r=0,s=null,i=n===xt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qf(e),ref:e&&ro(e),scopeId:Tf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dt};return l?(tc(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Ke(t)?8:16),ni>0&&!a&&St&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&St.push(c),c}const gn=Cy;function Cy(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===J_)&&(n=Kn),jf(n)){const l=Jr(n,e,!0);return t&&tc(l,t),ni>0&&!i&&St&&(l.shapeFlag&6?St[St.indexOf(n)]=l:St.push(l)),l.patchFlag=-2,l}if(Fy(n)&&(n=n.__vccOpts),e){e=Ry(e);let{class:l,style:c}=e;l&&!Ke(l)&&(e.class=Z(l)),Be(c)&&(Kl(c)&&!ue(c)&&(c=Tt({},c)),e.style=Bl(c))}const a=Ke(n)?1:Bf(n)?128:F_(n)?64:Be(n)?4:ge(n)?2:0;return O(n,e,t,r,s,a,i,!0)}function Ry(n){return n?Kl(n)||Pf(n)?Tt({},n):n:null}function Jr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?Py(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&qf(h),ref:e&&e.ref?t&&i?ue(i)?i.concat(ro(e)):[i,ro(e)]:ro(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Jr(n.ssContent),ssFallback:n.ssFallback&&Jr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&Jl(f,c.clone(f)),f}function dr(n=" ",e=0){return gn(Yo,null,n,e)}function _t(n="",e=!1){return e?(re(),Mt(Kn,null,n)):gn(Kn,null,n)}function Kt(n){return n==null||typeof n=="boolean"?gn(Kn):ue(n)?gn(xt,null,n.slice()):jf(n)?On(n):gn(Yo,null,String(n))}function On(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Jr(n)}function tc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ue(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),tc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Pf(e)?e._ctx=Dt:s===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:Dt},t=32):(e=String(e),r&64?(t=16,e=[dr(e)]):t=8);n.children=e,n.shapeFlag|=t}function Py(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Z([e.class,r.class]));else if(s==="style")e.style=Bl([e.style,r.style]);else if(qo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ue(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function zt(n,e,t,r=null){tn(n,e,7,[t,r])}const xy=Sf();let ky=0;function Vy(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||xy,i={uid:ky++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new n_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kf(r,s),emitsOptions:Uf(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ty.bind(null,i),n.ce&&n.ce(i),i}let vt=null;const Dy=()=>vt||Dt;let wo,cl;{const n=Wo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};wo=e("__VUE_INSTANCE_SETTERS__",t=>vt=t),cl=e("__VUE_SSR_SETTERS__",t=>ri=t)}const gi=n=>{const e=vt;return wo(n),n.scope.on(),()=>{n.scope.off(),wo(e)}},th=()=>{vt&&vt.scope.off(),wo(null)};function Hf(n){return n.vnode.shapeFlag&4}let ri=!1;function Ny(n,e=!1,t=!1){e&&cl(e);const{props:r,children:s}=n.vnode,i=Hf(n);oy(n,r,i,e),uy(n,s,t||e);const a=i?Oy(n,e):void 0;return e&&cl(!1),a}function Oy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Y_);const{setup:r}=t;if(r){yn();const s=n.setupContext=r.length>1?Ly(n):null,i=gi(n),a=fi(r,n,0,[n.props,s]),l=Wd(a);if(vn(),i(),(l||n.sp)&&!js(n)&&wf(n),l){if(a.then(th,th),e)return a.then(c=>{nh(n,c)}).catch(c=>{Ko(c,n,0)});n.asyncDep=a}else nh(n,a)}else zf(n)}function nh(n,e,t){ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Be(e)&&(n.setupState=gf(e)),zf(n)}function zf(n,e,t){const r=n.type;n.render||(n.render=r.render||Qt);{const s=gi(n);yn();try{X_(n)}finally{vn(),s()}}}const My={get(n,e){return ht(n,"get",""),n[e]}};function Ly(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,My),slots:n.slots,emit:n.emit,expose:e}}function Xo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(gf(I_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qs)return qs[t](n)},has(e,t){return t in e||t in qs}})):n.proxy}function Fy(n){return ge(n)&&"__vccOpts"in n}const si=(n,e)=>R_(n,e,ri),Uy="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ul;const rh=typeof window<"u"&&window.trustedTypes;if(rh)try{ul=rh.createPolicy("vue",{createHTML:n=>n})}catch{}const Wf=ul?n=>ul.createHTML(n):n=>n,By="http://www.w3.org/2000/svg",$y="http://www.w3.org/1998/Math/MathML",cn=typeof document<"u"?document:null,sh=cn&&cn.createElement("template"),jy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?cn.createElementNS(By,n):e==="mathml"?cn.createElementNS($y,n):t?cn.createElement(n,{is:t}):cn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>cn.createTextNode(n),createComment:n=>cn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>cn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{sh.innerHTML=Wf(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=sh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},qy=Symbol("_vtc");function Hy(n,e,t){const r=n[qy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ih=Symbol("_vod"),zy=Symbol("_vsh"),Wy=Symbol(""),Gy=/(^|;)\s*display\s*:/;function Ky(n,e,t){const r=n.style,s=Ke(t);let i=!1;if(t&&!s){if(e)if(Ke(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&so(r,l,"")}else for(const a in e)t[a]==null&&so(r,a,"");for(const a in t)a==="display"&&(i=!0),so(r,a,t[a])}else if(s){if(e!==t){const a=r[Wy];a&&(t+=";"+a),r.cssText=t,i=Gy.test(t)}}else e&&n.removeAttribute("style");ih in n&&(n[ih]=i?r.display:"",n[zy]&&(r.display="none"))}const oh=/\s*!important$/;function so(n,e,t){if(ue(t))t.forEach(r=>so(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Qy(n,e);oh.test(t)?n.setProperty(Er(r),t.replace(oh,""),"important"):n[r]=t}}const ah=["Webkit","Moz","ms"],La={};function Qy(n,e){const t=La[e];if(t)return t;let r=Wn(e);if(r!=="filter"&&r in n)return La[e]=r;r=Qd(r);for(let s=0;s<ah.length;s++){const i=ah[s]+r;if(i in n)return La[e]=i}return e}const lh="http://www.w3.org/1999/xlink";function ch(n,e,t,r,s,i=t_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(lh,e.slice(6,e.length)):n.setAttributeNS(lh,e,t):t==null||i&&!Jd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":tr(t)?String(t):t)}function uh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Wf(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Jd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Or(n,e,t,r){n.addEventListener(e,t,r)}function Jy(n,e,t,r){n.removeEventListener(e,t,r)}const hh=Symbol("_vei");function Yy(n,e,t,r,s=null){const i=n[hh]||(n[hh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=Xy(e);if(r){const h=i[e]=tv(r,s);Or(n,l,h,c)}else a&&(Jy(n,l,a,c),i[e]=void 0)}}const dh=/(?:Once|Passive|Capture)$/;function Xy(n){let e;if(dh.test(n)){e={};let r;for(;r=n.match(dh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Er(n.slice(2)),e]}let Fa=0;const Zy=Promise.resolve(),ev=()=>Fa||(Zy.then(()=>Fa=0),Fa=Date.now());function tv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;tn(nv(r,t.value),e,5,[r])};return t.value=n,t.attached=ev(),t}function nv(n,e){if(ue(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const fh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,rv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Hy(n,r,a):e==="style"?Ky(n,t,r):qo(e)?Ll(e)||Yy(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sv(n,e,r,a))?(uh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ch(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?uh(n,Wn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),ch(n,e,r,a))};function sv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&fh(e)&&ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return fh(e)&&Ke(t)?!1:e in n}const ph=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ue(e)?t=>to(e,t):e};function iv(n){n.target.composing=!0}function gh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ua=Symbol("_assign"),ov={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Ua]=ph(s);const i=r||s.props&&s.props.type==="number";Or(n,e?"change":"input",a=>{if(a.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=el(l)),n[Ua](l)}),t&&Or(n,"change",()=>{n.value=n.value.trim()}),e||(Or(n,"compositionstart",iv),Or(n,"compositionend",gh),Or(n,"change",gh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Ua]=ph(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?el(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},av=["ctrl","shift","alt","meta"],lv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>av.some(t=>n[`${t}Key`]&&!e.includes(t))},Gf=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=lv[e[a]];if(l&&l(s,e))return}return n(s,...i)})},cv=Tt({patchProp:rv},jy);let mh;function uv(){return mh||(mh=dy(cv))}const hv=(...n)=>{const e=uv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=fv(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,dv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function dv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function fv(n){return Ke(n)?document.querySelector(n):n}const pv=()=>{};var _h={};/**
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
 */const Kf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},gv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,A=h&63;c||(A=64,a||(m=64)),r.push(t[f],t[g],t[m],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Kf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new mv;const m=i<<2|l>>4;if(r.push(m),h!==64){const A=l<<4&240|h>>2;if(r.push(A),g!==64){const x=h<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _v=function(n){const e=Kf(n);return Qf.encodeByteArray(e,!0)},Eo=function(n){return _v(n).replace(/\./g,"")},Jf=function(n){try{return Qf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vv=()=>yv().__FIREBASE_DEFAULTS__,Tv=()=>{if(typeof process>"u"||typeof _h>"u")return;const n=_h.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Jf(n[1]);return e&&JSON.parse(e)},Zo=()=>{try{return pv()||vv()||Tv()||wv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yf=n=>Zo()?.emulatorHosts?.[n],Ev=n=>{const e=Yf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Xf=()=>Zo()?.config,Zf=n=>Zo()?.[`_${n}`];/**
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
 */class Iv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ss(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ep(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function bv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Eo(JSON.stringify(t)),Eo(JSON.stringify(a)),""].join(".")}const Ws={};function Av(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ws))Ws[e]?n.emulator.push(e):n.prod.push(e);return n}function Sv(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let yh=!1;function tp(n,e){if(typeof window>"u"||typeof document>"u"||!ss(window.location.host)||Ws[n]===e||Ws[n]||yh)return;Ws[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Av().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,A){m.setAttribute("width","24"),m.setAttribute("id",A),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{yh=!0,a()},m}function f(m,A){m.setAttribute("id",A),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function g(){const m=Sv(r),A=t("text"),x=document.getElementById(A)||document.createElement("span"),P=t("learnmore"),M=document.getElementById(P)||document.createElement("a"),q=t("preprendIcon"),N=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const W=m.element;l(W),f(M,P);const Q=h();c(N,q),W.append(N,x,M,Q),document.body.appendChild(W)}i?(x.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Rv(){const n=Zo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vv(){const n=pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Dv(){return!Rv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nv(){try{return typeof indexedDB=="object"}catch{return!1}}function Ov(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Mv="FirebaseError";class Cn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Mv,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Lv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Cn(s,l,r)}}function Lv(n,e){return n.replace(Fv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Fv=/\{\$([^}]+)}/g;function Uv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _r(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(vh(i)&&vh(a)){if(!_r(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function vh(n){return n!==null&&typeof n=="object"}/**
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
 */function _i(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bv(n,e){const t=new $v(n,e);return t.subscribe.bind(t)}class $v{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");jv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ba),s.error===void 0&&(s.error=Ba),s.complete===void 0&&(s.complete=Ba);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ba(){}/**
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
 */function Ct(n){return n&&n._delegate?n._delegate:n}class yr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hr="[DEFAULT]";/**
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
 */class qv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Iv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zv(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hv(n){return n===hr?void 0:n}function zv(n){return n.instantiationMode==="EAGER"}/**
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
 */class Wv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(_e||(_e={}));const Gv={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},Kv=_e.INFO,Qv={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},Jv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Qv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=Kv,this._logHandler=Jv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const Yv=(n,e)=>e.some(t=>n instanceof t);let Th,wh;function Xv(){return Th||(Th=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zv(){return wh||(wh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const np=new WeakMap,hl=new WeakMap,rp=new WeakMap,$a=new WeakMap,rc=new WeakMap;function eT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t($n(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&np.set(t,n)}).catch(()=>{}),rc.set(e,n),e}function tT(n){if(hl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});hl.set(n,e)}let dl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $n(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nT(n){dl=n(dl)}function rT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ja(this),e,...t);return rp.set(r,e.sort?e.sort():[e]),$n(r)}:Zv().includes(n)?function(...e){return n.apply(ja(this),e),$n(np.get(this))}:function(...e){return $n(n.apply(ja(this),e))}}function sT(n){return typeof n=="function"?rT(n):(n instanceof IDBTransaction&&tT(n),Yv(n,Xv())?new Proxy(n,dl):n)}function $n(n){if(n instanceof IDBRequest)return eT(n);if($a.has(n))return $a.get(n);const e=sT(n);return e!==n&&($a.set(n,e),rc.set(e,n)),e}const ja=n=>rc.get(n);function iT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=$n(a);return r&&a.addEventListener("upgradeneeded",c=>{r($n(a.result),c.oldVersion,c.newVersion,$n(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const oT=["get","getKey","getAll","getAllKeys","count"],aT=["put","add","delete","clear"],qa=new Map;function Eh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=aT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||oT.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return qa.set(e,i),i}nT(n=>({...n,get:(e,t,r)=>Eh(e,t)||n.get(e,t,r),has:(e,t)=>!!Eh(e,t)||n.has(e,t)}));/**
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
 */class lT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function cT(n){return n.getComponent()?.type==="VERSION"}const fl="@firebase/app",Ih="0.14.0";/**
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
 */const Tn=new nc("@firebase/app"),uT="@firebase/app-compat",hT="@firebase/analytics-compat",dT="@firebase/analytics",fT="@firebase/app-check-compat",pT="@firebase/app-check",gT="@firebase/auth",mT="@firebase/auth-compat",_T="@firebase/database",yT="@firebase/data-connect",vT="@firebase/database-compat",TT="@firebase/functions",wT="@firebase/functions-compat",ET="@firebase/installations",IT="@firebase/installations-compat",bT="@firebase/messaging",AT="@firebase/messaging-compat",ST="@firebase/performance",CT="@firebase/performance-compat",RT="@firebase/remote-config",PT="@firebase/remote-config-compat",xT="@firebase/storage",kT="@firebase/storage-compat",VT="@firebase/firestore",DT="@firebase/ai",NT="@firebase/firestore-compat",OT="firebase",MT="12.0.0";/**
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
 */const pl="[DEFAULT]",LT={[fl]:"fire-core",[uT]:"fire-core-compat",[dT]:"fire-analytics",[hT]:"fire-analytics-compat",[pT]:"fire-app-check",[fT]:"fire-app-check-compat",[gT]:"fire-auth",[mT]:"fire-auth-compat",[_T]:"fire-rtdb",[yT]:"fire-data-connect",[vT]:"fire-rtdb-compat",[TT]:"fire-fn",[wT]:"fire-fn-compat",[ET]:"fire-iid",[IT]:"fire-iid-compat",[bT]:"fire-fcm",[AT]:"fire-fcm-compat",[ST]:"fire-perf",[CT]:"fire-perf-compat",[RT]:"fire-rc",[PT]:"fire-rc-compat",[xT]:"fire-gcs",[kT]:"fire-gcs-compat",[VT]:"fire-fst",[NT]:"fire-fst-compat",[DT]:"fire-vertex","fire-js":"fire-js",[OT]:"fire-js-all"};/**
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
 */const Io=new Map,FT=new Map,gl=new Map;function bh(n,e){try{n.container.addComponent(e)}catch(t){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Yr(n){const e=n.name;if(gl.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;gl.set(e,n);for(const t of Io.values())bh(t,n);for(const t of FT.values())bh(t,n);return!0}function sc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function At(n){return n==null?!1:n.settings!==void 0}/**
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
 */const UT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new mi("app","Firebase",UT);/**
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
 */class BT{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
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
 */const is=MT;function sp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:pl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(t||(t=Xf()),!t)throw jn.create("no-options");const i=Io.get(s);if(i){if(_r(t,i.options)&&_r(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const a=new Wv(s);for(const c of gl.values())a.addComponent(c);const l=new BT(t,r,a);return Io.set(s,l),l}function ip(n=pl){const e=Io.get(n);if(!e&&n===pl&&Xf())return sp();if(!e)throw jn.create("no-app",{appName:n});return e}function qn(n,e,t){let r=LT[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(a.join(" "));return}Yr(new yr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const $T="firebase-heartbeat-database",jT=1,ii="firebase-heartbeat-store";let Ha=null;function op(){return Ha||(Ha=iT($T,jT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ii)}catch(t){console.warn(t)}}}}).catch(n=>{throw jn.create("idb-open",{originalErrorMessage:n.message})})),Ha}async function qT(n){try{const t=(await op()).transaction(ii),r=await t.objectStore(ii).get(ap(n));return await t.done,r}catch(e){if(e instanceof Cn)Tn.warn(e.message);else{const t=jn.create("idb-get",{originalErrorMessage:e?.message});Tn.warn(t.message)}}}async function Ah(n,e){try{const r=(await op()).transaction(ii,"readwrite");await r.objectStore(ii).put(e,ap(n)),await r.done}catch(t){if(t instanceof Cn)Tn.warn(t.message);else{const r=jn.create("idb-set",{originalErrorMessage:t?.message});Tn.warn(r.message)}}}function ap(n){return`${n.name}!${n.options.appId}`}/**
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
 */const HT=1024,zT=30;class WT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new KT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>zT){const s=QT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Tn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sh(),{heartbeatsToSend:t,unsentEntries:r}=GT(this._heartbeatsCache.heartbeats),s=Eo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Tn.warn(e),""}}}function Sh(){return new Date().toISOString().substring(0,10)}function GT(n,e=HT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ch(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ch(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class KT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nv()?Ov().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qT(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ah(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ah(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ch(n){return Eo(JSON.stringify({version:2,heartbeats:n})).length}function QT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function JT(n){Yr(new yr("platform-logger",e=>new lT(e),"PRIVATE")),Yr(new yr("heartbeat",e=>new WT(e),"PRIVATE")),qn(fl,Ih,n),qn(fl,Ih,"esm2020"),qn("fire-js","")}JT("");function lp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YT=lp,cp=new mi("auth","Firebase",lp());/**
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
 */const bo=new nc("@firebase/auth");function XT(n,...e){bo.logLevel<=_e.WARN&&bo.warn(`Auth (${is}): ${n}`,...e)}function io(n,...e){bo.logLevel<=_e.ERROR&&bo.error(`Auth (${is}): ${n}`,...e)}/**
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
 */function nn(n,...e){throw oc(n,...e)}function Bt(n,...e){return oc(n,...e)}function ic(n,e,t){const r={...YT(),[e]:t};return new mi("auth","Firebase",r).create(e,{appName:n.name})}function mn(n){return ic(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ZT(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(n,"argument-error"),ic(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return cp.create(n,...e)}function le(n,e,...t){if(!n)throw oc(e,...t)}function fn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw io(e),new Error(e)}function wn(n,e){n||fn(e)}/**
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
 */function ml(){return typeof self<"u"&&self.location?.href||""}function ew(){return Rh()==="http:"||Rh()==="https:"}function Rh(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function tw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ew()||xv()||"connection"in navigator)?navigator.onLine:!0}function nw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class yi{constructor(e,t){this.shortDelay=e,this.longDelay=t,wn(t>e,"Short delay should be less than long delay!"),this.isMobile=Cv()||kv()}get(){return tw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ac(n,e){wn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class up{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iw=new yi(3e4,6e4);function vi(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function os(n,e,t,r,s={}){return hp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=_i({key:n.config.apiKey,...a}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:c,...i};return Pv()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ss(n.emulatorConfig.host)&&(h.credentials="include"),up.fetch()(await dp(n,n.config.apiHost,t,l),h)})}async function hp(n,e,t){n._canInitEmulator=!1;const r={...rw,...e};try{const s=new ow(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Qi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qi(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Qi(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Qi(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ic(n,f,h);nn(n,f)}}catch(s){if(s instanceof Cn)throw s;nn(n,"network-request-failed",{message:String(s)})}}async function lc(n,e,t,r,s={}){const i=await os(n,e,t,r,s);return"mfaPendingCredential"in i&&nn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function dp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?ac(n.config,s):`${n.config.apiScheme}://${s}`;return sw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class ow{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),iw.get())})}}function Qi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Bt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function aw(n,e){return os(n,"POST","/v1/accounts:delete",e)}async function Ao(n,e){return os(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lw(n,e=!1){const t=Ct(n),r=await t.getIdToken(e),s=cc(r);le(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Gs(za(s.auth_time)),issuedAtTime:Gs(za(s.iat)),expirationTime:Gs(za(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function za(n){return Number(n)*1e3}function cc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const s=Jf(t);return s?JSON.parse(s):(io("Failed to decode base64 JWT payload"),null)}catch(s){return io("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ph(n){const e=cc(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function oi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Cn&&cw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function cw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class uw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _l{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function So(n){const e=n.auth,t=await n.getIdToken(),r=await oi(n,Ao(e,{idToken:t}));le(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?fp(s.providerUserInfo):[],a=dw(n.providerData,i),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!a?.length,h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _l(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function hw(n){const e=Ct(n);await So(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fp(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function fw(n,e){const t=await hp(n,{},async()=>{const r=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await dp(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&ss(n.emulatorConfig.host)&&(c.credentials="include"),up.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pw(n,e){return os(n,"POST","/v2/accounts:revokeToken",vi(n,e))}/**
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
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ph(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=Ph(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await fw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new zr;return r&&(le(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Dn(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Lt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new uw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _l(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await oi(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lw(this,e)}reload(){return hw(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await So(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(mn(this.auth));const e=await this.getIdToken();return await oi(this,aw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:g,emailVerified:m,isAnonymous:A,providerData:x,stsTokenManager:P}=t;le(g&&P,e,"internal-error");const M=zr.fromJSON(this.name,P);le(typeof g=="string",e,"internal-error"),Dn(r,e.name),Dn(s,e.name),le(typeof m=="boolean",e,"internal-error"),le(typeof A=="boolean",e,"internal-error"),Dn(i,e.name),Dn(a,e.name),Dn(l,e.name),Dn(c,e.name),Dn(h,e.name),Dn(f,e.name);const q=new Lt({uid:g,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:A,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:M,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(q.providerData=x.map(N=>({...N}))),c&&(q._redirectEventId=c),q}static async _fromIdTokenResponse(e,t,r=!1){const s=new zr;s.updateFromServerResponse(t);const i=new Lt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await So(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?fp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new zr;l.updateFromIdToken(r);const c=new Lt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _l(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,h),c}}/**
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
 */const xh=new Map;function pn(n){wn(n instanceof Function,"Expected a class definition");let e=xh.get(n);return e?(wn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xh.set(n,e),e)}/**
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
 */class pp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pp.type="NONE";const kh=pp;/**
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
 */function oo(n,e,t){return`firebase:${n}:${e}:${t}`}class Wr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=oo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ao(this.auth,{idToken:e}).catch(()=>{});return t?Lt._fromGetAccountInfoResponse(this.auth,t,e):null}return Lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Wr(pn(kh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||pn(kh);const a=oo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let g;if(typeof f=="string"){const m=await Ao(e,{idToken:f}).catch(()=>{});if(!m)break;g=await Lt._fromGetAccountInfoResponse(e,m,f)}else g=Lt._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Wr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Wr(i,e,r))}}/**
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
 */function Vh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tp(e))return"Blackberry";if(wp(e))return"Webos";if(mp(e))return"Safari";if((e.includes("chrome/")||_p(e))&&!e.includes("edge/"))return"Chrome";if(vp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function gp(n=pt()){return/firefox\//i.test(n)}function mp(n=pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _p(n=pt()){return/crios\//i.test(n)}function yp(n=pt()){return/iemobile/i.test(n)}function vp(n=pt()){return/android/i.test(n)}function Tp(n=pt()){return/blackberry/i.test(n)}function wp(n=pt()){return/webos/i.test(n)}function uc(n=pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gw(n=pt()){return uc(n)&&!!window.navigator?.standalone}function mw(){return Vv()&&document.documentMode===10}function Ep(n=pt()){return uc(n)||vp(n)||wp(n)||Tp(n)||/windows phone/i.test(n)||yp(n)}/**
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
 */function Ip(n,e=[]){let t;switch(n){case"Browser":t=Vh(pt());break;case"Worker":t=`${Vh(pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${is}/${r}`}/**
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
 */class _w{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function yw(n,e={}){return os(n,"GET","/v2/passwordPolicy",vi(n,e))}/**
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
 */const vw=6;class Tw{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??vw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ww{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dh(this),this.idTokenSubscription=new Dh(this),this.beforeStateQueue=new _w(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ao(this,{idToken:e}),r=await Lt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(At(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await So(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(mn(this));const t=e?Ct(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yw(this),t=new Tw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await pw(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pn(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[pn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ip(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&XT(`Error while retrieving App Check token: ${e.error}`),e?.token}}function as(n){return Ct(n)}class Dh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bv(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ew(n){hc=n}function Iw(n){return hc.loadJS(n)}function bw(){return hc.gapiScript}function Aw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Sw(n,e){const t=sc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(_r(i,e??{}))return s;nn(s,"already-initialized")}return t.initialize({options:e})}function Cw(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(pn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Rw(n,e,t){const r=as(n);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=bp(e),{host:a,port:l}=Pw(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(_r(h,r.config.emulator)&&_r(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ss(a)?(ep(`${i}//${a}${c}`),tp("Auth",!0)):xw()}function bp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Pw(n){const e=bp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Nh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Nh(a)}}}function Nh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ap{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,t){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
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
 */async function Gr(n,e){return lc(n,"POST","/v1/accounts:signInWithIdp",vi(n,e))}/**
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
 */const kw="http://localhost";class vr extends Ap{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new vr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Gr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Gr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gr(e,t)}buildRequest(){const e={requestUri:kw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_i(t)}return e}}/**
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
 */class dc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ti extends dc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mn extends Ti{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
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
 */class dn extends Ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return dn.credential(t,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class Ln extends Ti{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
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
 */class Fn extends Ti{constructor(){super("twitter.com")}static credential(e,t){return vr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Fn.credential(t,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
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
 */async function Vw(n,e){return lc(n,"POST","/v1/accounts:signUp",vi(n,e))}/**
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
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Lt._fromIdTokenResponse(e,r,s),a=Oh(r);return new En({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Oh(r);return new En({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Oh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function Dw(n){if(At(n.app))return Promise.reject(mn(n));const e=as(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new En({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Vw(e,{returnSecureToken:!0}),r=await En._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class Co extends Cn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Co.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Co(e,t,r,s)}}function Sp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(n,i,e,r):i})}async function Nw(n,e,t=!1){const r=await oi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return En._forOperation(n,"link",r)}/**
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
 */async function Ow(n,e,t=!1){const{auth:r}=n;if(At(r.app))return Promise.reject(mn(r));const s="reauthenticate";try{const i=await oi(n,Sp(r,s,e,n),t);le(i.idToken,r,"internal-error");const a=cc(i.idToken);le(a,r,"internal-error");const{sub:l}=a;return le(n.uid===l,r,"user-mismatch"),En._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
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
 */async function Mw(n,e,t=!1){if(At(n.app))return Promise.reject(mn(n));const r="signIn",s=await Sp(n,r,e),i=await En._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
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
 */async function Lw(n,e){return lc(n,"POST","/v1/accounts:signInWithCustomToken",vi(n,e))}/**
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
 */async function Fw(n,e){if(At(n.app))return Promise.reject(mn(n));const t=as(n),r=await Lw(t,{token:e,returnSecureToken:!0}),s=await En._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}function Uw(n,e,t,r){return Ct(n).onIdTokenChanged(e,t,r)}function Bw(n,e,t){return Ct(n).beforeAuthStateChanged(e,t)}function Cp(n,e,t,r){return Ct(n).onAuthStateChanged(e,t,r)}const Ro="__sak";/**
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
 */class Rp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ro,"1"),this.storage.removeItem(Ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $w=1e3,jw=10;class Pp extends Rp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ep(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);mw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},$w)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pp.type="LOCAL";const qw=Pp;/**
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
 */class xp extends Rp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xp.type="SESSION";const kp=xp;/**
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
 */function Hw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ea(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await Hw(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ea.receivers=[];/**
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
 */function fc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class zw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=fc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Jt(){return window}function Ww(n){Jt().location.href=n}/**
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
 */function Vp(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function Gw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kw(){return navigator?.serviceWorker?.controller||null}function Qw(){return Vp()?self:null}/**
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
 */const Dp="firebaseLocalStorageDb",Jw=1,Po="firebaseLocalStorage",Np="fbase_key";class wi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ta(n,e){return n.transaction([Po],e?"readwrite":"readonly").objectStore(Po)}function Yw(){const n=indexedDB.deleteDatabase(Dp);return new wi(n).toPromise()}function yl(){const n=indexedDB.open(Dp,Jw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Po,{keyPath:Np})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Po)?e(r):(r.close(),await Yw(),e(await yl()))})})}async function Mh(n,e,t){const r=ta(n,!0).put({[Np]:e,value:t});return new wi(r).toPromise()}async function Xw(n,e){const t=ta(n,!1).get(e),r=await new wi(t).toPromise();return r===void 0?null:r.value}function Lh(n,e){const t=ta(n,!0).delete(e);return new wi(t).toPromise()}const Zw=800,eE=3;class Op{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>eE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ea._getInstance(Qw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Gw(),!this.activeServiceWorker)return;this.sender=new zw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yl();return await Mh(e,Ro,"1"),await Lh(e,Ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Xw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ta(s,!1).getAll();return new wi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Op.type="LOCAL";const tE=Op;new yi(3e4,6e4);/**
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
 */function Mp(n,e){return e?pn(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class pc extends Ap{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nE(n){return Mw(n.auth,new pc(n),n.bypassAuthState)}function rE(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),Ow(t,new pc(n),n.bypassAuthState)}async function sE(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),Nw(t,new pc(n),n.bypassAuthState)}/**
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
 */class Lp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nE;case"linkViaPopup":case"linkViaRedirect":return sE;case"reauthViaPopup":case"reauthViaRedirect":return rE;default:nn(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iE=new yi(2e3,1e4);async function oE(n,e,t){if(At(n.app))return Promise.reject(Bt(n,"operation-not-supported-in-this-environment"));const r=as(n);ZT(n,e,dc);const s=Mp(r,t);return new fr(r,"signInViaPopup",e,s).executeNotNull()}class fr extends Lp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iE.get())};e()}}fr.currentPopupAction=null;/**
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
 */const aE="pendingRedirect",ao=new Map;class lE extends Lp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const r=await cE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cE(n,e){const t=dE(e),r=hE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function uE(n,e){ao.set(n._key(),e)}function hE(n){return pn(n._redirectPersistence)}function dE(n){return oo(aE,n.config.apiKey,n.name)}async function fE(n,e,t=!1){if(At(n.app))return Promise.reject(mn(n));const r=as(n),s=Mp(r,e),a=await new lE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const pE=600*1e3;class gE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Fp(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Bt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fh(e))}saveEventToCache(e){this.cachedEventUids.add(Fh(e)),this.lastProcessedEventTime=Date.now()}}function Fh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function mE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fp(n);default:return!1}}/**
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
 */async function _E(n,e={}){return os(n,"GET","/v1/projects",e)}/**
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
 */const yE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vE=/^https?/;async function TE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _E(n);for(const t of e)try{if(wE(t))return}catch{}nn(n,"unauthorized-domain")}function wE(n){const e=ml(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!vE.test(t))return!1;if(yE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const EE=new yi(3e4,6e4);function Uh(){const n=Jt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function IE(n){return new Promise((e,t)=>{function r(){Uh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uh(),t(Bt(n,"network-request-failed"))},timeout:EE.get()})}if(Jt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Jt().gapi?.load)r();else{const s=Aw("iframefcb");return Jt()[s]=()=>{gapi.load?r():t(Bt(n,"network-request-failed"))},Iw(`${bw()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw lo=null,e})}let lo=null;function bE(n){return lo=lo||IE(n),lo}/**
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
 */const AE=new yi(5e3,15e3),SE="__/auth/iframe",CE="emulator/auth/iframe",RE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xE(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ac(e,CE):`https://${n.config.authDomain}/${SE}`,r={apiKey:e.apiKey,appName:n.name,v:is},s=PE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${_i(r).slice(1)}`}async function kE(n){const e=await bE(n),t=Jt().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:xE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Bt(n,"network-request-failed"),l=Jt().setTimeout(()=>{i(a)},AE.get());function c(){Jt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const VE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DE=500,NE=600,OE="_blank",ME="http://localhost";class Bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LE(n,e,t,r=DE,s=NE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...VE,width:r.toString(),height:s.toString(),top:i,left:a},h=pt().toLowerCase();t&&(l=_p(h)?OE:t),gp(h)&&(e=e||ME,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[A,x])=>`${m}${A}=${x},`,"");if(gw(h)&&l!=="_self")return FE(e||"",l),new Bh(null);const g=window.open(e||"",l,f);le(g,n,"popup-blocked");try{g.focus()}catch{}return new Bh(g)}function FE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const UE="__/auth/handler",BE="emulator/auth/handler",$E=encodeURIComponent("fac");async function $h(n,e,t,r,s,i){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:is,eventId:s};if(e instanceof dc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Uv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof Ti){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${$E}=${encodeURIComponent(c)}`:"";return`${jE(n)}?${_i(l).slice(1)}${h}`}function jE({config:n}){return n.emulator?ac(n,BE):`https://${n.authDomain}/${UE}`}/**
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
 */const Wa="webStorageSupport";class qE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kp,this._completeRedirectFn=fE,this._overrideRedirectResult=uE}async _openPopup(e,t,r,s){wn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await $h(e,t,r,ml(),s);return LE(e,i,fc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await $h(e,t,r,ml(),s);return Ww(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await kE(e),r=new gE(e);return t.register("authEvent",s=>(le(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wa,{type:Wa},s=>{const i=s?.[0]?.[Wa];i!==void 0&&t(!!i),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=TE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ep()||mp()||uc()}}const HE=qE;var jh="@firebase/auth",qh="1.11.0";/**
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
 */class zE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function WE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GE(n){Yr(new yr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;le(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ip(n)},h=new ww(r,s,i,c);return Cw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new yr("auth-internal",e=>{const t=as(e.getProvider("auth").getImmediate());return(r=>new zE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(jh,qh,WE(n)),qn(jh,qh,"esm2020")}/**
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
 */const KE=300,QE=Zf("authIdTokenMaxAge")||KE;let Hh=null;const JE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>QE)return;const s=t?.token;Hh!==s&&(Hh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ls(n=ip()){const e=sc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Sw(n,{popupRedirectResolver:HE,persistence:[tE,qw,kp]}),r=Zf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=JE(i.toString());Bw(t,a,()=>a(t.currentUser)),Uw(t,l=>a(l))}}const s=Yf("auth");return s&&Rw(t,`http://${s}`),t}function YE(){return document.getElementsByTagName("head")?.[0]??document}Ew({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Bt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",YE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GE("Browser");var zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hn,Up;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function v(){}v.prototype=_.prototype,b.D=_.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(E,I,C){for(var T=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)T[Ye-2]=arguments[Ye];return _.prototype[I].apply(E,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,v){v||(v=0);var E=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)E[I]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(I=0;16>I;++I)E[I]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=b.g[0],v=b.g[1],I=b.g[2];var C=b.g[3],T=_+(C^v&(I^C))+E[0]+3614090360&4294967295;_=v+(T<<7&4294967295|T>>>25),T=C+(I^_&(v^I))+E[1]+3905402710&4294967295,C=_+(T<<12&4294967295|T>>>20),T=I+(v^C&(_^v))+E[2]+606105819&4294967295,I=C+(T<<17&4294967295|T>>>15),T=v+(_^I&(C^_))+E[3]+3250441966&4294967295,v=I+(T<<22&4294967295|T>>>10),T=_+(C^v&(I^C))+E[4]+4118548399&4294967295,_=v+(T<<7&4294967295|T>>>25),T=C+(I^_&(v^I))+E[5]+1200080426&4294967295,C=_+(T<<12&4294967295|T>>>20),T=I+(v^C&(_^v))+E[6]+2821735955&4294967295,I=C+(T<<17&4294967295|T>>>15),T=v+(_^I&(C^_))+E[7]+4249261313&4294967295,v=I+(T<<22&4294967295|T>>>10),T=_+(C^v&(I^C))+E[8]+1770035416&4294967295,_=v+(T<<7&4294967295|T>>>25),T=C+(I^_&(v^I))+E[9]+2336552879&4294967295,C=_+(T<<12&4294967295|T>>>20),T=I+(v^C&(_^v))+E[10]+4294925233&4294967295,I=C+(T<<17&4294967295|T>>>15),T=v+(_^I&(C^_))+E[11]+2304563134&4294967295,v=I+(T<<22&4294967295|T>>>10),T=_+(C^v&(I^C))+E[12]+1804603682&4294967295,_=v+(T<<7&4294967295|T>>>25),T=C+(I^_&(v^I))+E[13]+4254626195&4294967295,C=_+(T<<12&4294967295|T>>>20),T=I+(v^C&(_^v))+E[14]+2792965006&4294967295,I=C+(T<<17&4294967295|T>>>15),T=v+(_^I&(C^_))+E[15]+1236535329&4294967295,v=I+(T<<22&4294967295|T>>>10),T=_+(I^C&(v^I))+E[1]+4129170786&4294967295,_=v+(T<<5&4294967295|T>>>27),T=C+(v^I&(_^v))+E[6]+3225465664&4294967295,C=_+(T<<9&4294967295|T>>>23),T=I+(_^v&(C^_))+E[11]+643717713&4294967295,I=C+(T<<14&4294967295|T>>>18),T=v+(C^_&(I^C))+E[0]+3921069994&4294967295,v=I+(T<<20&4294967295|T>>>12),T=_+(I^C&(v^I))+E[5]+3593408605&4294967295,_=v+(T<<5&4294967295|T>>>27),T=C+(v^I&(_^v))+E[10]+38016083&4294967295,C=_+(T<<9&4294967295|T>>>23),T=I+(_^v&(C^_))+E[15]+3634488961&4294967295,I=C+(T<<14&4294967295|T>>>18),T=v+(C^_&(I^C))+E[4]+3889429448&4294967295,v=I+(T<<20&4294967295|T>>>12),T=_+(I^C&(v^I))+E[9]+568446438&4294967295,_=v+(T<<5&4294967295|T>>>27),T=C+(v^I&(_^v))+E[14]+3275163606&4294967295,C=_+(T<<9&4294967295|T>>>23),T=I+(_^v&(C^_))+E[3]+4107603335&4294967295,I=C+(T<<14&4294967295|T>>>18),T=v+(C^_&(I^C))+E[8]+1163531501&4294967295,v=I+(T<<20&4294967295|T>>>12),T=_+(I^C&(v^I))+E[13]+2850285829&4294967295,_=v+(T<<5&4294967295|T>>>27),T=C+(v^I&(_^v))+E[2]+4243563512&4294967295,C=_+(T<<9&4294967295|T>>>23),T=I+(_^v&(C^_))+E[7]+1735328473&4294967295,I=C+(T<<14&4294967295|T>>>18),T=v+(C^_&(I^C))+E[12]+2368359562&4294967295,v=I+(T<<20&4294967295|T>>>12),T=_+(v^I^C)+E[5]+4294588738&4294967295,_=v+(T<<4&4294967295|T>>>28),T=C+(_^v^I)+E[8]+2272392833&4294967295,C=_+(T<<11&4294967295|T>>>21),T=I+(C^_^v)+E[11]+1839030562&4294967295,I=C+(T<<16&4294967295|T>>>16),T=v+(I^C^_)+E[14]+4259657740&4294967295,v=I+(T<<23&4294967295|T>>>9),T=_+(v^I^C)+E[1]+2763975236&4294967295,_=v+(T<<4&4294967295|T>>>28),T=C+(_^v^I)+E[4]+1272893353&4294967295,C=_+(T<<11&4294967295|T>>>21),T=I+(C^_^v)+E[7]+4139469664&4294967295,I=C+(T<<16&4294967295|T>>>16),T=v+(I^C^_)+E[10]+3200236656&4294967295,v=I+(T<<23&4294967295|T>>>9),T=_+(v^I^C)+E[13]+681279174&4294967295,_=v+(T<<4&4294967295|T>>>28),T=C+(_^v^I)+E[0]+3936430074&4294967295,C=_+(T<<11&4294967295|T>>>21),T=I+(C^_^v)+E[3]+3572445317&4294967295,I=C+(T<<16&4294967295|T>>>16),T=v+(I^C^_)+E[6]+76029189&4294967295,v=I+(T<<23&4294967295|T>>>9),T=_+(v^I^C)+E[9]+3654602809&4294967295,_=v+(T<<4&4294967295|T>>>28),T=C+(_^v^I)+E[12]+3873151461&4294967295,C=_+(T<<11&4294967295|T>>>21),T=I+(C^_^v)+E[15]+530742520&4294967295,I=C+(T<<16&4294967295|T>>>16),T=v+(I^C^_)+E[2]+3299628645&4294967295,v=I+(T<<23&4294967295|T>>>9),T=_+(I^(v|~C))+E[0]+4096336452&4294967295,_=v+(T<<6&4294967295|T>>>26),T=C+(v^(_|~I))+E[7]+1126891415&4294967295,C=_+(T<<10&4294967295|T>>>22),T=I+(_^(C|~v))+E[14]+2878612391&4294967295,I=C+(T<<15&4294967295|T>>>17),T=v+(C^(I|~_))+E[5]+4237533241&4294967295,v=I+(T<<21&4294967295|T>>>11),T=_+(I^(v|~C))+E[12]+1700485571&4294967295,_=v+(T<<6&4294967295|T>>>26),T=C+(v^(_|~I))+E[3]+2399980690&4294967295,C=_+(T<<10&4294967295|T>>>22),T=I+(_^(C|~v))+E[10]+4293915773&4294967295,I=C+(T<<15&4294967295|T>>>17),T=v+(C^(I|~_))+E[1]+2240044497&4294967295,v=I+(T<<21&4294967295|T>>>11),T=_+(I^(v|~C))+E[8]+1873313359&4294967295,_=v+(T<<6&4294967295|T>>>26),T=C+(v^(_|~I))+E[15]+4264355552&4294967295,C=_+(T<<10&4294967295|T>>>22),T=I+(_^(C|~v))+E[6]+2734768916&4294967295,I=C+(T<<15&4294967295|T>>>17),T=v+(C^(I|~_))+E[13]+1309151649&4294967295,v=I+(T<<21&4294967295|T>>>11),T=_+(I^(v|~C))+E[4]+4149444226&4294967295,_=v+(T<<6&4294967295|T>>>26),T=C+(v^(_|~I))+E[11]+3174756917&4294967295,C=_+(T<<10&4294967295|T>>>22),T=I+(_^(C|~v))+E[2]+718787259&4294967295,I=C+(T<<15&4294967295|T>>>17),T=v+(C^(I|~_))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var v=_-this.blockSize,E=this.B,I=this.h,C=0;C<_;){if(I==0)for(;C<=v;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<_;)if(E[I++]=b.charCodeAt(C++),I==this.blockSize){s(this,E),I=0;break}}else for(;C<_;)if(E[I++]=b[C++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var v=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=v&255,v/=256;for(this.u(b),b=Array(16),_=v=0;4>_;++_)for(var E=0;32>E;E+=8)b[v++]=this.g[_]>>>E&255;return b};function i(b,_){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=_(b)}function a(b,_){this.h=_;for(var v=[],E=!0,I=b.length-1;0<=I;I--){var C=b[I]|0;E&&C==_||(v[I]=C,E=!1)}this.g=v}var l={};function c(b){return-128<=b&&128>b?i(b,function(_){return new a([_|0],0>_?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return g;if(0>b)return M(h(-b));for(var _=[],v=1,E=0;b>=v;E++)_[E]=b/v|0,v*=4294967296;return new a(_,0)}function f(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return M(f(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),E=g,I=0;I<b.length;I+=8){var C=Math.min(8,b.length-I),T=parseInt(b.substring(I,I+C),_);8>C?(C=h(Math.pow(_,C)),E=E.j(C).add(h(T))):(E=E.j(v),E=E.add(h(T)))}return E}var g=c(0),m=c(1),A=c(16777216);n=a.prototype,n.m=function(){if(P(this))return-M(this).m();for(var b=0,_=1,v=0;v<this.g.length;v++){var E=this.i(v);b+=(0<=E?E:4294967296+E)*_,_*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(P(this))return"-"+M(this).toString(b);for(var _=h(Math.pow(b,6)),v=this,E="";;){var I=Q(v,_).g;v=q(v,I.j(_));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=I,x(v))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=q(this,b),P(b)?-1:x(b)?0:1};function M(b){for(var _=b.g.length,v=[],E=0;E<_;E++)v[E]=~b.g[E];return new a(v,~b.h).add(m)}n.abs=function(){return P(this)?M(this):this},n.add=function(b){for(var _=Math.max(this.g.length,b.g.length),v=[],E=0,I=0;I<=_;I++){var C=E+(this.i(I)&65535)+(b.i(I)&65535),T=(C>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);E=T>>>16,C&=65535,T&=65535,v[I]=T<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function q(b,_){return b.add(M(_))}n.j=function(b){if(x(this)||x(b))return g;if(P(this))return P(b)?M(this).j(M(b)):M(M(this).j(b));if(P(b))return M(this.j(M(b)));if(0>this.l(A)&&0>b.l(A))return h(this.m()*b.m());for(var _=this.g.length+b.g.length,v=[],E=0;E<2*_;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<b.g.length;I++){var C=this.i(E)>>>16,T=this.i(E)&65535,Ye=b.i(I)>>>16,qt=b.i(I)&65535;v[2*E+2*I]+=T*qt,N(v,2*E+2*I),v[2*E+2*I+1]+=C*qt,N(v,2*E+2*I+1),v[2*E+2*I+1]+=T*Ye,N(v,2*E+2*I+1),v[2*E+2*I+2]+=C*Ye,N(v,2*E+2*I+2)}for(E=0;E<_;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=_;E<2*_;E++)v[E]=0;return new a(v,0)};function N(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function W(b,_){this.g=b,this.h=_}function Q(b,_){if(x(_))throw Error("division by zero");if(x(b))return new W(g,g);if(P(b))return _=Q(M(b),_),new W(M(_.g),M(_.h));if(P(_))return _=Q(b,M(_)),new W(M(_.g),_.h);if(30<b.g.length){if(P(b)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=_;0>=E.l(b);)v=Ie(v),E=Ie(E);var I=Pe(v,1),C=Pe(E,1);for(E=Pe(E,2),v=Pe(v,2);!x(E);){var T=C.add(E);0>=T.l(b)&&(I=I.add(v),C=T),E=Pe(E,1),v=Pe(v,1)}return _=q(b,I.j(_)),new W(I,_)}for(I=g;0<=b.l(_);){for(v=Math.max(1,Math.floor(b.m()/_.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=h(v),T=C.j(_);P(T)||0<T.l(b);)v-=E,C=h(v),T=C.j(_);x(C)&&(C=m),I=I.add(C),b=q(b,T)}return new W(I,b)}n.A=function(b){return Q(this,b).h},n.and=function(b){for(var _=Math.max(this.g.length,b.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)&b.i(E);return new a(v,this.h&b.h)},n.or=function(b){for(var _=Math.max(this.g.length,b.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)|b.i(E);return new a(v,this.h|b.h)},n.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)^b.i(E);return new a(v,this.h^b.h)};function Ie(b){for(var _=b.g.length+1,v=[],E=0;E<_;E++)v[E]=b.i(E)<<1|b.i(E-1)>>>31;return new a(v,b.h)}function Pe(b,_){var v=_>>5;_%=32;for(var E=b.g.length-v,I=[],C=0;C<E;C++)I[C]=0<_?b.i(C+v)>>>_|b.i(C+v+1)<<32-_:b.i(C+v);return new a(I,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Up=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Hn=a}).apply(typeof zh<"u"?zh:typeof self<"u"?self:typeof window<"u"?window:{});var Ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bp,Ds,$p,co,vl,jp,qp,Hp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ji=="object"&&Ji];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in d))break e;d=d[S]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,S={next:function(){if(!p&&d<o.length){var R=d++;return{value:u(R,o[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function m(o,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,m.apply(null,arguments)}function A(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function x(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,S,R){for(var z=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)z[xe-2]=arguments[xe];return u.prototype[S].apply(p,z)}}function P(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function M(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const S=o.length||0,R=p.length||0;o.length=S+R;for(let z=0;z<R;z++)o[S+z]=p[z]}else o.push(p)}}class q{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(o){return/^[\s\xa0]*$/.test(o)}function W(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var Ie=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function Pe(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function b(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function _(o){const u={};for(const d in o)u[d]=o[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,u){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)o[d]=p[d];for(let R=0;R<v.length;R++)d=v[R],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function C(o){l.setTimeout(()=>{throw o},0)}function T(){var o=he;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Ye{constructor(){this.h=this.g=null}add(u,d){const p=qt.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var qt=new q(()=>new ie,o=>o.reset());class ie{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let J,L=!1,he=new Ye,Fe=()=>{const o=l.Promise.resolve(void 0);J=()=>{o.then(Me)}};var Me=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){C(d)}var u=qt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}L=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var Cr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function nr(o,u){if(Ae.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Ie){e:{try{Q(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:rr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&nr.aa.h.call(this)}}x(nr,Ae);var rr={2:"touch",3:"pen",4:"mouse"};nr.prototype.h=function(){nr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),gs=0;function Pi(o,u,d,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=S,this.key=++gs,this.da=this.fa=!1}function Ht(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ms(o){this.src=o,this.g={},this.h=0}ms.prototype.add=function(o,u,d,p,S){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var z=w(o,u,p,S);return-1<z?(u=o[z],d||(u.fa=!1)):(u=new Pi(u,this.src,R,!!p,S),u.fa=d,o.push(u)),u};function y(o,u){var d=u.type;if(d in o.g){var p=o.g[d],S=Array.prototype.indexOf.call(p,u,void 0),R;(R=0<=S)&&Array.prototype.splice.call(p,S,1),R&&(Ht(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function w(o,u,d,p){for(var S=0;S<o.length;++S){var R=o[S];if(!R.da&&R.listener==u&&R.capture==!!d&&R.ha==p)return S}return-1}var k="closure_lm_"+(1e6*Math.random()|0),B={};function F(o,u,d,p,S){if(Array.isArray(u)){for(var R=0;R<u.length;R++)F(o,u[R],d,p,S);return null}return d=ae(d),o&&o[sn]?o.K(u,d,h(p)?!!p.capture:!1,S):U(o,u,d,!1,p,S)}function U(o,u,d,p,S,R){if(!u)throw Error("Invalid event type");var z=h(S)?!!S.capture:!!S,xe=G(o);if(xe||(o[k]=xe=new ms(o)),d=xe.add(u,d,p,z,R),d.proxy)return d;if(p=K(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Cr||(S=z),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent($(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function K(){function o(d){return u.call(o.src,o.listener,d)}const u=te;return o}function H(o,u,d,p,S){if(Array.isArray(u))for(var R=0;R<u.length;R++)H(o,u[R],d,p,S);else p=h(p)?!!p.capture:!!p,d=ae(d),o&&o[sn]?(o=o.i,u=String(u).toString(),u in o.g&&(R=o.g[u],d=w(R,d,p,S),-1<d&&(Ht(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete o.g[u],o.h--)))):o&&(o=G(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,d,p,S)),(d=-1<o?u[o]:null)&&j(d))}function j(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[sn])y(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent($(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=G(u))?(y(d,o),d.h==0&&(d.src=null,u[k]=null)):Ht(o)}}}function $(o){return o in B?B[o]:B[o]="on"+o}function te(o,u){if(o.da)o=!0;else{u=new nr(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&j(o),o=d.call(p,u)}return o}function G(o){return o=o[k],o instanceof ms?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function se(){me.call(this),this.i=new ms(this),this.M=this,this.F=null}x(se,me),se.prototype[sn]=!0,se.prototype.removeEventListener=function(o,u,d,p){H(this,o,u,d,p)};function fe(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Ae(u,o);else if(u instanceof Ae)u.target=u.target||o;else{var S=u;u=new Ae(p,o),E(u,S)}if(S=!0,d)for(var R=d.length-1;0<=R;R--){var z=u.g=d[R];S=we(z,p,!0,u)&&S}if(z=u.g=o,S=we(z,p,!0,u)&&S,S=we(z,p,!1,u)&&S,d)for(R=0;R<d.length;R++)z=u.g=d[R],S=we(z,p,!1,u)&&S}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Ht(d[p]);delete o.g[u],o.h--}}this.F=null},se.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},se.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function we(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,R=0;R<u.length;++R){var z=u[R];if(z&&!z.da&&z.capture==d){var xe=z.listener,tt=z.ha||z.src;z.fa&&y(o.i,z),S=xe.call(tt,p)!==!1&&S}}return S&&!p.defaultPrevented}function Xe(o,u,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ze(o){o.g=Xe(()=>{o.g=null,o.i&&(o.i=!1,Ze(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Rt extends me{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ze(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(o){me.call(this),this.h=o,this.g={}}x(ot,me);var Pn=[];function _s(o){Pe(o.g,function(u,d){this.g.hasOwnProperty(d)&&j(u)},o),o.g={}}ot.prototype.N=function(){ot.aa.N.call(this),_s(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var et=l.JSON.stringify,Pt=l.JSON.parse,xi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Rr(){}Rr.prototype.h=null;function Yc(o){return o.h||(o.h=o.i())}function Xc(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ga(){Ae.call(this,"d")}x(ga,Ae);function ma(){Ae.call(this,"c")}x(ma,Ae);var sr={},Zc=null;function ki(){return Zc=Zc||new se}sr.La="serverreachability";function eu(o){Ae.call(this,sr.La,o)}x(eu,Ae);function vs(o){const u=ki();fe(u,new eu(u))}sr.STAT_EVENT="statevent";function tu(o,u){Ae.call(this,sr.STAT_EVENT,o),this.stat=u}x(tu,Ae);function gt(o){const u=ki();fe(u,new tu(u,o))}sr.Ma="timingevent";function nu(o,u){Ae.call(this,sr.Ma,o),this.size=u}x(nu,Ae);function Ts(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ws(){this.g=!0}ws.prototype.xa=function(){this.g=!1};function Em(o,u,d,p,S,R){o.info(function(){if(o.g)if(R)for(var z="",xe=R.split("&"),tt=0;tt<xe.length;tt++){var be=xe[tt].split("=");if(1<be.length){var at=be[0];be=be[1];var lt=at.split("_");z=2<=lt.length&&lt[1]=="type"?z+(at+"="+be+"&"):z+(at+"=redacted&")}}else z=null;else z=R;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+d+`
`+z})}function Im(o,u,d,p,S,R,z){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+d+`
`+R+" "+z})}function Pr(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Am(o,d)+(p?" "+p:"")})}function bm(o,u){o.info(function(){return"TIMEOUT: "+u})}ws.prototype.info=function(){};function Am(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var R=S[0];if(R!="noop"&&R!="stop"&&R!="close")for(var z=1;z<S.length;z++)S[z]=""}}}}return et(d)}catch{return u}}var Vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ru={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_a;function Di(){}x(Di,Rr),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},_a=new Di;function xn(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new su}function su(){this.i=null,this.g="",this.h=!1}var iu={},ya={};function va(o,u,d){o.L=1,o.v=Li(on(u)),o.m=d,o.P=!0,ou(o,null)}function ou(o,u){o.F=Date.now(),Ni(o),o.A=on(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Tu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new su,o.g=Fu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Rt(m(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Pn[0]=S.toString()),S=Pn);for(var R=0;R<S.length;R++){var z=F(d,S[R],p||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),vs(),Em(o.i,o.u,o.A,o.l,o.R,o.m)}xn.prototype.ca=function(o){o=o.target;const u=this.M;u&&an(o)==3?u.j():this.Y(o)},xn.prototype.Y=function(o){try{if(o==this.g)e:{const lt=an(this.g);var u=this.g.Ba();const Vr=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||Cu(this.g)))){this.J||lt!=4||u==7||(u==8||0>=Vr?vs(3):vs(2)),Ta(this);var d=this.g.Z();this.X=d;t:if(au(this)){var p=Cu(this.g);o="";var S=p.length,R=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),Es(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(R&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Im(this.i,this.u,this.A,this.l,this.R,lt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,tt=this.g;if((xe=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(xe)){var be=xe;break t}}be=null}if(d=be)Pr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wa(this,d);else{this.o=!1,this.s=3,gt(12),ir(this),Es(this);break e}}if(this.P){d=!0;let Ot;for(;!this.J&&this.C<z.length;)if(Ot=Sm(this,z),Ot==ya){lt==4&&(this.s=4,gt(14),d=!1),Pr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==iu){this.s=4,gt(15),Pr(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Pr(this.i,this.l,Ot,null),wa(this,Ot);if(au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||z.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)Pr(this.i,this.l,z,"[Invalid Chunked Response]"),ir(this),Es(this);else if(0<z.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ca(at),at.M=!0,gt(11))}}else Pr(this.i,this.l,z,null),wa(this,z);lt==4&&ir(this),this.o&&!this.J&&(lt==4?Nu(this.j,this):(this.o=!1,Ni(this)))}else qm(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),ir(this),Es(this)}}}catch{}finally{}};function au(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Sm(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?ya:(d=Number(u.substring(d,p)),isNaN(d)?iu:(p+=1,p+d>u.length?ya:(u=u.slice(p,p+d),o.C=p+d,u)))}xn.prototype.cancel=function(){this.J=!0,ir(this)};function Ni(o){o.S=Date.now()+o.I,lu(o,o.I)}function lu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ts(m(o.ba,o),u)}function Ta(o){o.B&&(l.clearTimeout(o.B),o.B=null)}xn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(bm(this.i,this.A),this.L!=2&&(vs(),gt(17)),ir(this),this.s=2,Es(this)):lu(this,this.S-o)};function Es(o){o.j.G==0||o.J||Nu(o.j,o)}function ir(o){Ta(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,_s(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function wa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Ea(d.h,o))){if(!o.K&&Ea(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)qi(d),$i(d);else break e;Sa(d),gt(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ts(m(d.Za,d),6e3));if(1>=hu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ar(d,11)}else if((o.K||d.g==o)&&qi(d),!N(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let be=S[u];if(d.T=be[0],be=be[1],d.G==2)if(be[0]=="c"){d.K=be[1],d.ia=be[2];const at=be[3];at!=null&&(d.la=at,d.j.info("VER="+d.la));const lt=be[4];lt!=null&&(d.Aa=lt,d.j.info("SVER="+d.Aa));const Vr=be[5];Vr!=null&&typeof Vr=="number"&&0<Vr&&(p=1.5*Vr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ot=o.g;if(Ot){const zi=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var R=p.h;R.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ia(R,R.h),R.h=null))}if(p.D){const Ra=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Ra&&(p.ya=Ra,Le(p.I,p.D,Ra))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var z=o;if(p.qa=Lu(p,p.J?p.ia:null,p.W),z.K){du(p.h,z);var xe=z,tt=p.L;tt&&(xe.I=tt),xe.B&&(Ta(xe),Ni(xe)),p.g=z}else Vu(p);0<d.i.length&&ji(d)}else be[0]!="stop"&&be[0]!="close"||ar(d,7);else d.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?ar(d,7):Aa(d):be[0]!="noop"&&d.l&&d.l.ta(be),d.v=0)}}vs(4)}catch{}}var Cm=class{constructor(o,u){this.g=o,this.map=u}};function cu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function uu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function hu(o){return o.h?1:o.g?o.g.size:0}function Ea(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ia(o,u){o.g?o.g.add(u):o.h=u}function du(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}cu.prototype.cancel=function(){if(this.i=fu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function fu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return P(o.i)}function Rm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function Pm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function pu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Pm(o),p=Rm(o),S=p.length,R=0;R<S;R++)u.call(void 0,p[R],d&&d[R],o)}var gu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),S=null;if(0<=p){var R=o[d].substring(0,p);S=o[d].substring(p+1)}else R=o[d];u(R,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function or(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof or){this.h=o.h,Oi(this,o.j),this.o=o.o,this.g=o.g,Mi(this,o.s),this.l=o.l;var u=o.i,d=new As;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),mu(this,d),this.m=o.m}else o&&(u=String(o).match(gu))?(this.h=!1,Oi(this,u[1]||"",!0),this.o=Is(u[2]||""),this.g=Is(u[3]||"",!0),Mi(this,u[4]),this.l=Is(u[5]||"",!0),mu(this,u[6]||"",!0),this.m=Is(u[7]||"")):(this.h=!1,this.i=new As(null,this.h))}or.prototype.toString=function(){var o=[],u=this.j;u&&o.push(bs(u,_u,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(bs(u,_u,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(bs(d,d.charAt(0)=="/"?Dm:Vm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",bs(d,Om)),o.join("")};function on(o){return new or(o)}function Oi(o,u,d){o.j=d?Is(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Mi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function mu(o,u,d){u instanceof As?(o.i=u,Mm(o.i,o.h)):(d||(u=bs(u,Nm)),o.i=new As(u,o.h))}function Le(o,u,d){o.i.set(u,d)}function Li(o){return Le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Is(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function bs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,km),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function km(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var _u=/[#\/\?@]/g,Vm=/[#\?:]/g,Dm=/[#\?]/g,Nm=/[#\?@]/g,Om=/#/g;function As(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function kn(o){o.g||(o.g=new Map,o.h=0,o.i&&xm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=As.prototype,n.add=function(o,u){kn(this),this.i=null,o=xr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function yu(o,u){kn(o),u=xr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function vu(o,u){return kn(o),u=xr(o,u),o.g.has(u)}n.forEach=function(o,u){kn(this),this.g.forEach(function(d,p){d.forEach(function(S){o.call(u,S,p,this)},this)},this)},n.na=function(){kn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const S=o[p];for(let R=0;R<S.length;R++)d.push(u[p])}return d},n.V=function(o){kn(this);let u=[];if(typeof o=="string")vu(this,o)&&(u=u.concat(this.g.get(xr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return kn(this),this.i=null,o=xr(this,o),vu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Tu(o,u,d){yu(o,u),0<d.length&&(o.i=null,o.g.set(xr(o,u),P(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const R=encodeURIComponent(String(p)),z=this.V(p);for(p=0;p<z.length;p++){var S=R;z[p]!==""&&(S+="="+encodeURIComponent(String(z[p]))),o.push(S)}}return this.i=o.join("&")};function xr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Mm(o,u){u&&!o.j&&(kn(o),o.i=null,o.g.forEach(function(d,p){var S=p.toLowerCase();p!=S&&(yu(this,p),Tu(this,S,d))},o)),o.j=u}function Lm(o,u){const d=new ws;if(l.Image){const p=new Image;p.onload=A(Vn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=A(Vn,d,"TestLoadImage: error",!1,u,p),p.onabort=A(Vn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=A(Vn,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Fm(o,u){const d=new ws,p=new AbortController,S=setTimeout(()=>{p.abort(),Vn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(S),R.ok?Vn(d,"TestPingServer: ok",!0,u):Vn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Vn(d,"TestPingServer: error",!1,u)})}function Vn(o,u,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function Um(){this.g=new xi}function Bm(o,u,d){const p=d||"";try{pu(o,function(S,R){let z=S;h(S)&&(z=et(S)),u.push(p+R+"="+encodeURIComponent(z))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function Fi(o){this.l=o.Ub||null,this.j=o.eb||!1}x(Fi,Rr),Fi.prototype.g=function(){return new Ui(this.l,this.j)},Fi.prototype.i=function(o){return function(){return o}}({});function Ui(o,u){se.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ui,se),n=Ui.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Cs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ss(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function wu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ss(this):Cs(this),this.readyState==3&&wu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Ss(this))},n.Qa=function(o){this.g&&(this.response=o,Ss(this))},n.ga=function(){this.g&&Ss(this)};function Ss(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Cs(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Cs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Eu(o){let u="";return Pe(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function ba(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Eu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Le(o,u,d))}function je(o){se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(je,se);var $m=/^https?$/i,jm=["POST","PUT"];n=je.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_a.g(),this.v=this.o?Yc(this.o):Yc(_a),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(R){Iu(this,R);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jm,u,void 0))||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,z]of d)this.g.setRequestHeader(R,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Su(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Iu(this,R)}};function Iu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,bu(o),Bi(o)}function bu(o){o.A||(o.A=!0,fe(o,"complete"),fe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,fe(this,"complete"),fe(this,"abort"),Bi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bi(this,!0)),je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Au(this):this.bb())},n.bb=function(){Au(this)};function Au(o){if(o.h&&typeof a<"u"&&(!o.v[1]||an(o)!=4||o.Z()!=2)){if(o.u&&an(o)==4)Xe(o.Ea,0,o);else if(fe(o,"readystatechange"),an(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=z===0){var S=String(o.D).match(gu)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!$m.test(S?S.toLowerCase():"")}d=p}if(d)fe(o,"complete"),fe(o,"success");else{o.m=6;try{var R=2<an(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",bu(o)}}finally{Bi(o)}}}}function Bi(o,u){if(o.g){Su(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||fe(o,"ready");try{d.onreadystatechange=p}catch{}}}function Su(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function an(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Pt(u)}};function Cu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function qm(o){const u={};o=(o.g&&2<=an(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(N(o[p]))continue;var d=I(o[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=u[S]||[];u[S]=R,R.push(d)}b(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Ru(o){this.Aa=0,this.i=[],this.j=new ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rs("baseRetryDelayMs",5e3,o),this.cb=Rs("retryDelaySeedMs",1e4,o),this.Wa=Rs("forwardChannelMaxRetries",2,o),this.wa=Rs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new cu(o&&o.concurrentRequestLimit),this.Da=new Um,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ru.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,p){gt(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Lu(this,null,this.W),ji(this)};function Aa(o){if(Pu(o),o.G==3){var u=o.U++,d=on(o.I);if(Le(d,"SID",o.K),Le(d,"RID",u),Le(d,"TYPE","terminate"),Ps(o,d),u=new xn(o,o.j,u),u.L=2,u.v=Li(on(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Fu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ni(u)}Mu(o)}function $i(o){o.g&&(Ca(o),o.g.cancel(),o.g=null)}function Pu(o){$i(o),o.u&&(l.clearTimeout(o.u),o.u=null),qi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ji(o){if(!uu(o.h)&&!o.s){o.s=!0;var u=o.Ga;J||Fe(),L||(J(),L=!0),he.add(u,o),o.B=0}}function Hm(o,u){return hu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ts(m(o.Ga,o,u),Ou(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new xn(this,this.j,o);let R=this.o;if(this.S&&(R?(R=_(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(S.H=R,R=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=ku(this,S,u),d=on(this.I),Le(d,"RID",o),Le(d,"CVER",22),this.D&&Le(d,"X-HTTP-Session-Id",this.D),Ps(this,d),R&&(this.O?u="headers="+encodeURIComponent(String(Eu(R)))+"&"+u:this.m&&ba(d,this.m,R)),Ia(this.h,S),this.Ua&&Le(d,"TYPE","init"),this.P?(Le(d,"$req",u),Le(d,"SID","null"),S.T=!0,va(S,d,null)):va(S,d,u),this.G=2}}else this.G==3&&(o?xu(this,o):this.i.length==0||uu(this.h)||xu(this))};function xu(o,u){var d;u?d=u.l:d=o.U++;const p=on(o.I);Le(p,"SID",o.K),Le(p,"RID",d),Le(p,"AID",o.T),Ps(o,p),o.m&&o.o&&ba(p,o.m,o.o),d=new xn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=ku(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ia(o.h,d),va(d,p,u)}function Ps(o,u){o.H&&Pe(o.H,function(d,p){Le(u,p,d)}),o.l&&pu({},function(d,p){Le(u,p,d)})}function ku(o,u,d){d=Math.min(o.i.length,d);var p=o.l?m(o.l.Na,o.l,o):null;e:{var S=o.i;let R=-1;for(;;){const z=["count="+d];R==-1?0<d?(R=S[0].g,z.push("ofs="+R)):R=0:z.push("ofs="+R);let xe=!0;for(let tt=0;tt<d;tt++){let be=S[tt].g;const at=S[tt].map;if(be-=R,0>be)R=Math.max(0,S[tt].g-100),xe=!1;else try{Bm(at,z,"req"+be+"_")}catch{p&&p(at)}}if(xe){p=z.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function Vu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;J||Fe(),L||(J(),L=!0),he.add(u,o),o.v=0}}function Sa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ts(m(o.Fa,o),Ou(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Du(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ts(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),$i(this),Du(this))};function Ca(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Du(o){o.g=new xn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=on(o.qa);Le(u,"RID","rpc"),Le(u,"SID",o.K),Le(u,"AID",o.T),Le(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Le(u,"TO",o.ja),Le(u,"TYPE","xmlhttp"),Ps(o,u),o.m&&o.o&&ba(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Li(on(u)),d.m=null,d.P=!0,ou(d,o)}n.Za=function(){this.C!=null&&(this.C=null,$i(this),Sa(this),gt(19))};function qi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Nu(o,u){var d=null;if(o.g==u){qi(o),Ca(o),o.g=null;var p=2}else if(Ea(o.h,u))d=u.D,du(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=ki(),fe(p,new nu(p,d)),ji(o)}else Vu(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&Hm(o,u)||p==2&&Sa(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:ar(o,5);break;case 4:ar(o,10);break;case 3:ar(o,6);break;default:ar(o,2)}}}function Ou(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function ar(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.fb,o),p=o.Xa;const S=!p;p=new or(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Oi(p,"https"),Li(p),S?Lm(p.toString(),d):Fm(p.toString(),d)}else gt(2);o.G=0,o.l&&o.l.sa(u),Mu(o),Pu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Mu(o){if(o.G=0,o.ka=[],o.l){const u=fu(o.h);(u.length!=0||o.i.length!=0)&&(M(o.ka,u),M(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function Lu(o,u,d){var p=d instanceof or?on(d):new or(d);if(p.g!="")u&&(p.g=u+"."+p.g),Mi(p,p.s);else{var S=l.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var R=new or(null);p&&Oi(R,p),u&&(R.g=u),S&&Mi(R,S),d&&(R.l=d),p=R}return d=o.D,u=o.ya,d&&u&&Le(p,d,u),Le(p,"VER",o.la),Ps(o,p),p}function Fu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new je(new Fi({eb:d})):new je(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uu(){}n=Uu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hi(){}Hi.prototype.g=function(o,u){return new It(o,u)};function It(o,u){se.call(this),this.g=new Ru(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!N(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!N(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new kr(this)}x(It,se),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Aa(this.g)},It.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=et(o),o=d);u.i.push(new Cm(u.Ya++,o)),u.G==3&&ji(u)},It.prototype.N=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,It.aa.N.call(this)};function Bu(o){ga.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}x(Bu,ga);function $u(){ma.call(this),this.status=1}x($u,ma);function kr(o){this.g=o}x(kr,Uu),kr.prototype.ua=function(){fe(this.g,"a")},kr.prototype.ta=function(o){fe(this.g,new Bu(o))},kr.prototype.sa=function(o){fe(this.g,new $u)},kr.prototype.ra=function(){fe(this.g,"b")},Hi.prototype.createWebChannel=Hi.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,Hp=function(){return new Hi},qp=function(){return ki()},jp=sr,vl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vi.NO_ERROR=0,Vi.TIMEOUT=8,Vi.HTTP_ERROR=6,co=Vi,ru.COMPLETE="complete",$p=ru,Xc.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",se.prototype.listen=se.prototype.K,Ds=Xc,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,Bp=je}).apply(typeof Ji<"u"?Ji:typeof self<"u"?self:typeof window<"u"?window:{});const Wh="@firebase/firestore",Gh="4.9.0";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let cs="12.0.0";/**
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
 */const Tr=new nc("@firebase/firestore");function Mr(){return Tr.logLevel}function X(n,...e){if(Tr.logLevel<=_e.DEBUG){const t=e.map(gc);Tr.debug(`Firestore (${cs}): ${n}`,...t)}}function In(n,...e){if(Tr.logLevel<=_e.ERROR){const t=e.map(gc);Tr.error(`Firestore (${cs}): ${n}`,...t)}}function Xr(n,...e){if(Tr.logLevel<=_e.WARN){const t=e.map(gc);Tr.warn(`Firestore (${cs}): ${n}`,...t)}}function gc(n){if(typeof n=="string")return n;try{/**
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
 */function oe(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,zp(n,r,t)}function zp(n,e,t){let r=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw In(r),new Error(r)}function Re(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||zp(e,s,r)}function de(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Cn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _n{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Wp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ut.UNAUTHENTICATED))}shutdown(){}}class ZE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eI{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Re(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _n,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _n)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new Wp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new ut(e)}}class tI{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nI{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new tI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,At(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Re(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Kh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Kh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class mc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=sI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ye(n,e){return n<e?-1:n>e?1:0}function Tl(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Ga(s)===Ga(i)?ye(s,i):Ga(s)?1:-1}return ye(n.length,e.length)}const iI=55296,oI=57343;function Ga(n){const e=n.charCodeAt(0);return e>=iI&&e<=oI}function Zr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Qh="__name__";class Gt{constructor(e,t,r){t===void 0?t=0:t>e.length&&oe(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&oe(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Gt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Gt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ye(e.length,t.length)}static compareSegments(e,t){const r=Gt.isNumericId(e),s=Gt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Gt.extractNumericId(e).compare(Gt.extractNumericId(t)):Tl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hn.fromString(e.substring(4,e.length-2))}}class Ne extends Gt{construct(e,t,r){return new Ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ne(t)}static emptyPath(){return new Ne([])}}const aI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Gt{construct(e,t,r){return new st(e,t,r)}static isValidIdentifier(e){return aI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qh}static keyField(){return new st([Qh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Y(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(t)}static emptyPath(){return new st([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ne.fromString(e))}static fromName(e){return new ne(Ne.fromString(e).popFirst(5))}static empty(){return new ne(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ne(e.slice()))}}/**
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
 */function Gp(n,e,t){if(!t)throw new Y(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function lI(n,e,t,r){if(e===!0&&r===!0)throw new Y(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Jh(n){if(!ne.isDocumentKey(n))throw new Y(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yh(n){if(ne.isDocumentKey(n))throw new Y(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Kp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function na(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":oe(12329,{type:typeof n})}function bn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=na(n);throw new Y(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function We(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ei(n,e){if(!Kp(n))throw new Y(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new Y(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const Xh=-62135596800,Zh=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Zh);return new Oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Xh)throw new Y(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zh}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ei(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:We("string",Oe._jsonSchemaVersion),seconds:We("number"),nanoseconds:We("number")};/**
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
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Oe(0,0))}static max(){return new ce(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ai=-1;function cI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Oe(t+1,0):new Oe(t,r));return new Qn(s,ne.empty(),e)}function uI(n){return new Qn(n.readTime,n.key,ai)}class Qn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Qn(ce.min(),ne.empty(),ai)}static max(){return new Qn(ce.max(),ne.empty(),ai)}}function hI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ne.comparator(n.documentKey,e.documentKey),t!==0?t:ye(n.largestBatchId,e.largestBatchId))}/**
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
 */const dI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function us(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==dI)throw n;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(s=>s?D.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new D((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new D((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function pI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function hs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ra{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ra.ce=-1;/**
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
 */const _c=-1;function sa(n){return n==null}function xo(n){return n===0&&1/n==-1/0}function gI(n){return typeof n=="number"&&Number.isInteger(n)&&!xo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Qp="";function mI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ed(e)),e=_I(n.get(t),e);return ed(e)}function _I(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Qp:t+="";break;default:t+=i}}return t}function ed(n){return n+Qp+""}/**
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
 */function td(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ir(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Jp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class $e{constructor(e,t){this.comparator=e,this.root=t||nt.EMPTY}insert(e,t){return new $e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yi(this.root,e,this.comparator,!0)}}class Yi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new nt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nd(this.data.getIterator())}getIteratorFrom(e){return new nd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Qe(this.comparator);return t.data=e,t}}class nd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Ft([])}unionWith(e){let t=new Qe(st.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ft(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Yp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yp("Invalid base64 string: "+i):i}}(e);return new it(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new it(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const yI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(n){if(Re(!!n,39018),typeof n=="string"){let e=0;const t=yI.exec(n);if(Re(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(n.seconds),nanos:qe(n.nanos)}}function qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yn(n){return typeof n=="string"?it.fromBase64String(n):it.fromUint8Array(n)}/**
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
 */const Xp="server_timestamp",Zp="__type__",eg="__previous_value__",tg="__local_write_time__";function yc(n){return(n?.mapValue?.fields||{})[Zp]?.stringValue===Xp}function ia(n){const e=n.mapValue.fields[eg];return yc(e)?ia(e):e}function li(n){const e=Jn(n.mapValue.fields[tg].timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class vI{constructor(e,t,r,s,i,a,l,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const ko="(default)";class ci{constructor(e,t){this.projectId=e,this.database=t||ko}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database===ko}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ng="__type__",TI="__max__",Xi={mapValue:{}},rg="__vector__",Vo="value";function Xn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?yc(n)?4:EI(n)?9007199254740991:wI(n)?10:11:oe(28295,{value:n})}function rn(n,e){if(n===e)return!0;const t=Xn(n);if(t!==Xn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return li(n).isEqual(li(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Jn(s.timestampValue),l=Jn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Yn(s.bytesValue).isEqual(Yn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=qe(s.doubleValue),l=qe(i.doubleValue);return a===l?xo(a)===xo(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Zr(n.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(td(a)!==td(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!rn(a[c],l[c])))return!1;return!0}(n,e);default:return oe(52216,{left:n})}}function ui(n,e){return(n.values||[]).find(t=>rn(t,e))!==void 0}function es(n,e){if(n===e)return 0;const t=Xn(n),r=Xn(e);if(t!==r)return ye(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ye(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=qe(i.integerValue||i.doubleValue),c=qe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return rd(n.timestampValue,e.timestampValue);case 4:return rd(li(n),li(e));case 5:return Tl(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Yn(i),c=Yn(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=ye(l[h],c[h]);if(f!==0)return f}return ye(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ye(qe(i.latitude),qe(a.latitude));return l!==0?l:ye(qe(i.longitude),qe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return sd(n.arrayValue,e.arrayValue);case 10:return function(i,a){const l=i.fields||{},c=a.fields||{},h=l[Vo]?.arrayValue,f=c[Vo]?.arrayValue,g=ye(h?.values?.length||0,f?.values?.length||0);return g!==0?g:sd(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Xi.mapValue&&a===Xi.mapValue)return 0;if(i===Xi.mapValue)return 1;if(a===Xi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const m=Tl(c[g],f[g]);if(m!==0)return m;const A=es(l[c[g]],h[f[g]]);if(A!==0)return A}return ye(c.length,f.length)}(n.mapValue,e.mapValue);default:throw oe(23264,{he:t})}}function rd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ye(n,e);const t=Jn(n),r=Jn(e),s=ye(t.seconds,r.seconds);return s!==0?s:ye(t.nanos,r.nanos)}function sd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=es(t[s],r[s]);if(i)return i}return ye(t.length,r.length)}function ts(n){return wl(n)}function wl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Jn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ne.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=wl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${wl(t.fields[a])}`;return s+"}"}(n.mapValue):oe(61005,{value:n})}function uo(n){switch(Xn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ia(n);return e?16+uo(e):16;case 5:return 2*n.stringValue.length;case 6:return Yn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+uo(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ir(r.fields,(i,a)=>{s+=i.length+uo(a)}),s}(n.mapValue);default:throw oe(13486,{value:n})}}function id(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function El(n){return!!n&&"integerValue"in n}function vc(n){return!!n&&"arrayValue"in n}function od(n){return!!n&&"nullValue"in n}function ad(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ho(n){return!!n&&"mapValue"in n}function wI(n){return(n?.mapValue?.fields||{})[ng]?.stringValue===rg}function Ks(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ir(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ks(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ks(n.arrayValue.values[t]);return e}return{...n}}function EI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===TI}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ho(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(t)}setAll(e){let t=st.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Ks(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ho(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ho(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ir(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(Ks(this.value))}}function sg(n){const e=[];return Ir(n.fields,(t,r)=>{const s=new st([t]);if(ho(r)){const i=sg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ft(e)}/**
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
 */class dt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,ce.min(),ce.min(),ce.min(),kt.empty(),0)}static newFoundDocument(e,t,r,s){return new dt(e,1,t,ce.min(),r,s,0)}static newNoDocument(e,t){return new dt(e,2,t,ce.min(),ce.min(),kt.empty(),0)}static newUnknownDocument(e,t){return new dt(e,3,t,ce.min(),ce.min(),kt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Do{constructor(e,t){this.position=e,this.inclusive=t}}function ld(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(a.referenceValue),t.key):r=es(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function cd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!rn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class No{constructor(e,t="asc"){this.field=e,this.dir=t}}function II(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ig{}class ze extends ig{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new AI(e,t,r):t==="array-contains"?new RI(e,r):t==="in"?new PI(e,r):t==="not-in"?new xI(e,r):t==="array-contains-any"?new kI(e,r):new ze(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new SI(e,r):new CI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(es(t,this.value)):t!==null&&Xn(this.value)===Xn(t)&&this.matchesComparison(es(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends ig{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new jt(e,t)}matches(e){return og(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function og(n){return n.op==="and"}function ag(n){return bI(n)&&og(n)}function bI(n){for(const e of n.filters)if(e instanceof jt)return!1;return!0}function Il(n){if(n instanceof ze)return n.field.canonicalString()+n.op.toString()+ts(n.value);if(ag(n))return n.filters.map(e=>Il(e)).join(",");{const e=n.filters.map(t=>Il(t)).join(",");return`${n.op}(${e})`}}function lg(n,e){return n instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&rn(r.value,s.value)}(n,e):n instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&lg(a,s.filters[l]),!0):!1}(n,e):void oe(19439)}function cg(n){return n instanceof ze?function(t){return`${t.field.canonicalString()} ${t.op} ${ts(t.value)}`}(n):n instanceof jt?function(t){return t.op.toString()+" {"+t.getFilters().map(cg).join(" ,")+"}"}(n):"Filter"}class AI extends ze{constructor(e,t,r){super(e,t,r),this.key=ne.fromName(r.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class SI extends ze{constructor(e,t){super(e,"in",t),this.keys=ug("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class CI extends ze{constructor(e,t){super(e,"not-in",t),this.keys=ug("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ug(n,e){return(e.arrayValue?.values||[]).map(t=>ne.fromName(t.referenceValue))}class RI extends ze{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vc(t)&&ui(t.arrayValue,this.value)}}class PI extends ze{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ui(this.value.arrayValue,t)}}class xI extends ze{constructor(e,t){super(e,"not-in",t)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ui(this.value.arrayValue,t)}}class kI extends ze{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ui(this.value.arrayValue,r))}}/**
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
 */class VI{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function ud(n,e=null,t=[],r=[],s=null,i=null,a=null){return new VI(n,e,t,r,s,i,a)}function Tc(n){const e=de(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Il(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ts(r)).join(",")),e.Te=t}return e.Te}function wc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!II(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!lg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!cd(n.startAt,e.startAt)&&cd(n.endAt,e.endAt)}function bl(n){return ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ii{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function DI(n,e,t,r,s,i,a,l){return new Ii(n,e,t,r,s,i,a,l)}function Ec(n){return new Ii(n)}function hd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hg(n){return n.collectionGroup!==null}function Qs(n){const e=de(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Qe(st.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new No(i,r))}),t.has(st.keyField().canonicalString())||e.Ie.push(new No(st.keyField(),r))}return e.Ie}function Yt(n){const e=de(n);return e.Ee||(e.Ee=NI(e,Qs(n))),e.Ee}function NI(n,e){if(n.limitType==="F")return ud(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new No(s.field,i)});const t=n.endAt?new Do(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Do(n.startAt.position,n.startAt.inclusive):null;return ud(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Al(n,e){const t=n.filters.concat([e]);return new Ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Sl(n,e,t){return new Ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function oa(n,e){return wc(Yt(n),Yt(e))&&n.limitType===e.limitType}function dg(n){return`${Tc(Yt(n))}|lt:${n.limitType}`}function Lr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>cg(s)).join(", ")}]`),sa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>ts(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>ts(s)).join(",")),`Target(${r})`}(Yt(n))}; limitType=${n.limitType})`}function aa(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=ld(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Qs(r),s)||r.endAt&&!function(a,l,c){const h=ld(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Qs(r),s))}(n,e)}function OI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fg(n){return(e,t)=>{let r=!1;for(const s of Qs(n)){const i=MI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function MI(n,e,t){const r=n.field.isKeyField()?ne.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?es(c,h):oe(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:n.dir})}}/**
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
 */class br{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ir(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Jp(this.inner)}size(){return this.innerSize}}/**
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
 */const LI=new $e(ne.comparator);function An(){return LI}const pg=new $e(ne.comparator);function Ns(...n){let e=pg;for(const t of n)e=e.insert(t.key,t);return e}function gg(n){let e=pg;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function pr(){return Js()}function mg(){return Js()}function Js(){return new br(n=>n.toString(),(n,e)=>n.isEqual(e))}const FI=new $e(ne.comparator),UI=new Qe(ne.comparator);function Te(...n){let e=UI;for(const t of n)e=e.add(t);return e}const BI=new Qe(ye);function $I(){return BI}/**
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
 */function Ic(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function _g(n){return{integerValue:""+n}}function jI(n,e){return gI(e)?_g(e):Ic(n,e)}/**
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
 */class la{constructor(){this._=void 0}}function qI(n,e,t){return n instanceof Oo?function(s,i){const a={fields:{[Zp]:{stringValue:Xp},[tg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yc(i)&&(i=ia(i)),i&&(a.fields[eg]=i),{mapValue:a}}(t,e):n instanceof hi?vg(n,e):n instanceof di?Tg(n,e):function(s,i){const a=yg(s,i),l=dd(a)+dd(s.Ae);return El(a)&&El(s.Ae)?_g(l):Ic(s.serializer,l)}(n,e)}function HI(n,e,t){return n instanceof hi?vg(n,e):n instanceof di?Tg(n,e):t}function yg(n,e){return n instanceof Mo?function(r){return El(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Oo extends la{}class hi extends la{constructor(e){super(),this.elements=e}}function vg(n,e){const t=wg(e);for(const r of n.elements)t.some(s=>rn(s,r))||t.push(r);return{arrayValue:{values:t}}}class di extends la{constructor(e){super(),this.elements=e}}function Tg(n,e){let t=wg(e);for(const r of n.elements)t=t.filter(s=>!rn(s,r));return{arrayValue:{values:t}}}class Mo extends la{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function dd(n){return qe(n.integerValue||n.doubleValue)}function wg(n){return vc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zI(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof hi&&s instanceof hi||r instanceof di&&s instanceof di?Zr(r.elements,s.elements,rn):r instanceof Mo&&s instanceof Mo?rn(r.Ae,s.Ae):r instanceof Oo&&s instanceof Oo}(n.transform,e.transform)}class WI{constructor(e,t){this.version=e,this.transformResults=t}}class $t{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ca{}function Eg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new bc(n.key,$t.none()):new bi(n.key,n.data,$t.none());{const t=n.data,r=kt.empty();let s=new Qe(st.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Ar(n.key,r,new Ft(s.toArray()),$t.none())}}function GI(n,e,t){n instanceof bi?function(s,i,a){const l=s.value.clone(),c=pd(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ar?function(s,i,a){if(!fo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=pd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Ig(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ys(n,e,t,r){return n instanceof bi?function(i,a,l,c){if(!fo(i.precondition,a))return l;const h=i.value.clone(),f=gd(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ar?function(i,a,l,c){if(!fo(i.precondition,a))return l;const h=gd(i.fieldTransforms,c,a),f=a.data;return f.setAll(Ig(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return fo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function KI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=yg(r.transform,s||null);i!=null&&(t===null&&(t=kt.empty()),t.set(r.field,i))}return t||null}function fd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zr(r,s,(i,a)=>zI(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class bi extends ca{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ar extends ca{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ig(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function pd(n,e,t){const r=new Map;Re(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,HI(a,l,t[s]))}return r}function gd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,qI(i,a,e))}return r}class bc extends ca{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QI extends ca{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&GI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ys(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ys(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=mg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=Eg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Te())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,(t,r)=>fd(t,r))&&Zr(this.baseMutations,e.baseMutations,(t,r)=>fd(t,r))}}class Ac{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return FI}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ac(e,t,r,s)}}/**
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
 */class YI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var He,Ee;function ZI(n){switch(n){case V.OK:return oe(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return oe(15467,{code:n})}}function bg(n){if(n===void 0)return In("GRPC error has no .code"),V.UNKNOWN;switch(n){case He.OK:return V.OK;case He.CANCELLED:return V.CANCELLED;case He.UNKNOWN:return V.UNKNOWN;case He.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case He.INTERNAL:return V.INTERNAL;case He.UNAVAILABLE:return V.UNAVAILABLE;case He.UNAUTHENTICATED:return V.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case He.NOT_FOUND:return V.NOT_FOUND;case He.ALREADY_EXISTS:return V.ALREADY_EXISTS;case He.PERMISSION_DENIED:return V.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case He.ABORTED:return V.ABORTED;case He.OUT_OF_RANGE:return V.OUT_OF_RANGE;case He.UNIMPLEMENTED:return V.UNIMPLEMENTED;case He.DATA_LOSS:return V.DATA_LOSS;default:return oe(39323,{code:n})}}(Ee=He||(He={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function eb(){return new TextEncoder}/**
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
 */const tb=new Hn([4294967295,4294967295],0);function md(n){const e=eb().encode(n),t=new Up;return t.update(e),new Uint8Array(t.digest())}function _d(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hn([t,r],0),new Hn([s,i],0)]}class Sc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Os(`Invalid padding: ${t}`);if(r<0)throw new Os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Os(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Hn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Hn.fromNumber(r)));return s.compare(tb)===1&&(s=new Hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=md(e),[r,s]=_d(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Sc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=md(e),[r,s]=_d(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ua{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ai.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ua(ce.min(),s,new $e(ye),An(),Te())}}class Ai{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ai(r,t,Te(),Te(),Te())}}/**
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
 */class po{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Ag{constructor(e,t){this.targetId=e,this.Ce=t}}class Sg{constructor(e,t,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class yd{constructor(){this.ve=0,this.Fe=vd(),this.Me=it.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),t=Te(),r=Te();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}}),new Ai(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=vd()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class nb{constructor(e){this.Ge=e,this.ze=new Map,this.je=An(),this.Je=Zi(),this.He=Zi(),this.Ye=new $e(ye)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:oe(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(bl(i))if(r===0){const a=new ne(i.path);this.et(t,a,dt.newNoDocument(a,ce.min()))}else Re(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),c=l?this.ct(l,e,a):1;if(c!==0){this.it(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Yn(r).toUint8Array()}catch(c){if(c instanceof Yp)return Xr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Sc(a,s,i)}catch(c){return Xr(c instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&bl(l.target)){const c=new ne(l.target.path);this.It(c).has(a)||this.Et(a,c)||this.et(a,c,dt.newNoDocument(c,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=Te();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new ua(e,t,this.Ye,this.je,r);return this.je=An(),this.Je=Zi(),this.He=Zi(),this.Ye=new $e(ye),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new yd,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Qe(ye),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Qe(ye),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||X("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new yd),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Zi(){return new $e(ne.comparator)}function vd(){return new $e(ne.comparator)}const rb={asc:"ASCENDING",desc:"DESCENDING"},sb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ib={and:"AND",or:"OR"};class ob{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cl(n,e){return n.useProto3Json||sa(e)?e:{value:e}}function Lo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ab(n,e){return Lo(n,e.toTimestamp())}function Xt(n){return Re(!!n,49232),ce.fromTimestamp(function(t){const r=Jn(t);return new Oe(r.seconds,r.nanos)}(n))}function Cc(n,e){return Rl(n,e).canonicalString()}function Rl(n,e){const t=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Rg(n){const e=Ne.fromString(n);return Re(Dg(e),10190,{key:e.toString()}),e}function Pl(n,e){return Cc(n.databaseId,e.path)}function Ka(n,e){const t=Rg(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ne(xg(t))}function Pg(n,e){return Cc(n.databaseId,e)}function lb(n){const e=Rg(n);return e.length===4?Ne.emptyPath():xg(e)}function xl(n){return new Ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xg(n){return Re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Td(n,e,t){return{name:Pl(n,e),fields:t.value.mapValue.fields}}function cb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:oe(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Re(f===void 0||typeof f=="string",58123),it.fromBase64String(f||"")):(Re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),it.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?V.UNKNOWN:bg(h.code);return new Y(f,h.message||"")}(a);t=new Sg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ka(n,r.document.name),i=Xt(r.document.updateTime),a=r.document.createTime?Xt(r.document.createTime):ce.min(),l=new kt({mapValue:{fields:r.document.fields}}),c=dt.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new po(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ka(n,r.document),i=r.readTime?Xt(r.readTime):ce.min(),a=dt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new po([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ka(n,r.document),i=r.removedTargetIds||[];t=new po([],i,s,null)}else{if(!("filter"in e))return oe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new XI(s,i),l=r.targetId;t=new Ag(l,a)}}return t}function ub(n,e){let t;if(e instanceof bi)t={update:Td(n,e.key,e.value)};else if(e instanceof bc)t={delete:Pl(n,e.key)};else if(e instanceof Ar)t={update:Td(n,e.key,e.data),updateMask:vb(e.fieldMask)};else{if(!(e instanceof QI))return oe(16599,{Vt:e.type});t={verify:Pl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Oo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof hi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof di)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Mo)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw oe(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ab(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)}(n,e.precondition)),t}function hb(n,e){return n&&n.length>0?(Re(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Xt(s.updateTime):Xt(i);return a.isEqual(ce.min())&&(a=Xt(i)),new WI(a,s.transformResults||[])}(t,e))):[]}function db(n,e){return{documents:[Pg(n,e.path)]}}function fb(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Pg(n,s);const i=function(h){if(h.length!==0)return Vg(jt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Fr(m.field),direction:mb(m.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Cl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function pb(n){let e=lb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Re(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const m=kg(g);return m instanceof jt&&ag(m)?m.getFilters():[m]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(m=>function(x){return new No(Ur(x.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,sa(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(g){const m=!!g.before,A=g.values||[];return new Do(A,m)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const m=!g.before,A=g.values||[];return new Do(A,m)}(t.endAt)),DI(e,s,a,i,l,"F",c,h)}function gb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ur(t.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ur(t.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(t.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ur(t.unaryFilter.field);return ze.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}}(n):n.fieldFilter!==void 0?function(t){return ze.create(Ur(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return jt.create(t.compositeFilter.filters.map(r=>kg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}}(t.compositeFilter.op))}(n):oe(30097,{filter:n})}function mb(n){return rb[n]}function _b(n){return sb[n]}function yb(n){return ib[n]}function Fr(n){return{fieldPath:n.canonicalString()}}function Ur(n){return st.fromServerFormat(n.fieldPath)}function Vg(n){return n instanceof ze?function(t){if(t.op==="=="){if(ad(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NAN"}};if(od(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ad(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NOT_NAN"}};if(od(t.value))return{unaryFilter:{field:Fr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(t.field),op:_b(t.op),value:t.value}}}(n):n instanceof jt?function(t){const r=t.getFilters().map(s=>Vg(s));return r.length===1?r[0]:{compositeFilter:{op:yb(t.op),filters:r}}}(n):oe(54877,{filter:n})}function vb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Dg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Un{constructor(e,t,r,s,i=ce.min(),a=ce.min(),l=it.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Tb{constructor(e){this.yt=e}}function wb(n){const e=pb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sl(e,e.limit,"L"):e}/**
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
 */class Eb{constructor(){this.Cn=new Ib}addToCollectionParentIndex(e,t){return this.Cn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Qn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Ib{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Qe(Ne.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Qe(Ne.comparator)).toArray()}}/**
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
 */const wd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ng=41943040;class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Ng,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
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
 */class ns{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ns(0)}static cr(){return new ns(-1)}}/**
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
 */const Ed="LruGarbageCollector",bb=1048576;function Id([n,e],[t,r]){const s=ye(n,t);return s===0?ye(e,r):s}class Ab{constructor(e){this.Ir=e,this.buffer=new Qe(Id),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Id(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Sb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(Ed,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){hs(t)?X(Ed,"Ignoring IndexedDB error during garbage collection: ",t):await us(t)}await this.Vr(3e5)})}}class Cb{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(ra.ce);const r=new Ab(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(wd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wd):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Mr()<=_e.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function Rb(n,e){return new Cb(n,e)}/**
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
 */class Pb{constructor(){this.changes=new br(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class xb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class kb{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ys(r.mutation,s,Ft.empty(),Oe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Te()){const s=pr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Ns();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=pr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Te()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=An();const a=Js(),l=function(){return Js()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Ar)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ys(f.mutation,h,f.mutation.getFieldMask(),Oe.now())):a.set(h.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>l.set(h,new xb(f,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Js();let s=new $e((a,l)=>a-l),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Ft.empty();f=l.applyToLocalView(h,f),r.set(c,f);const g=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,g=mg();f.forEach(m=>{if(!i.has(m)){const A=Eg(t.get(m),r.get(m));A!==null&&g.set(m,A),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return ne.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(pr());let l=ai,c=i;return a.next(h=>D.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,Te())).next(f=>({batchId:l,changes:gg(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ne(t)).next(r=>{let s=Ns();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ns();return this.indexManager.getCollectionParents(e,i).next(l=>D.forEach(l,c=>{const h=function(g,m){return new Ii(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,m)=>{a=a.insert(g,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,dt.newInvalidDocument(f)))});let l=Ns();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Ys(f.mutation,h,Ft.empty(),Oe.now()),aa(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class Vb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return D.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:wb(s.bundledQuery),readTime:Xt(s.readTime)}}(t)),D.resolve()}}/**
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
 */class Db{constructor(){this.overlays=new $e(ne.comparator),this.qr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=pr();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=pr(),i=t.length+1,a=new ne(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new $e((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=pr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=pr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return D.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new YI(t,r));let i=this.qr.get(t);i===void 0&&(i=Te(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class Nb{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class Rc{constructor(){this.Qr=new Qe(Je.$r),this.Ur=new Qe(Je.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Je(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Je(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new ne(new Ne([])),r=new Je(t,e),s=new Je(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ne(new Ne([])),r=new Je(t,e),s=new Je(t,e+1);let i=Te();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Je(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ne.comparator(e.key,t.key)||ye(e.Yr,t.Yr)}static Kr(e,t){return ye(e.Yr,t.Yr)||ne.comparator(e.key,t.key)}}/**
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
 */class Ob{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Qe(Je.$r)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new JI(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new Je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?_c:this.tr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Je(t,0),s=new Je(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);i.push(l)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Qe(ye);return t.forEach(s=>{const i=new Je(s,0),a=new Je(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],l=>{r=r.add(l.Yr)})}),D.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const a=new Je(new ne(i),0);let l=new Qe(ye);return this.Zr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Yr)),!0)},a),D.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Re(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return D.forEach(t.mutations,s=>{const i=new Je(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Je(t,0),s=this.Zr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Mb{constructor(e){this.ri=e,this.docs=function(){return new $e(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let r=An();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=An();const a=t.path,l=new ne(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||hI(uI(f),r)<=0||(s.has(f.key)||aa(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){oe(9500)}ii(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Lb(this)}getSize(e){return D.resolve(this.size)}}class Lb extends Pb{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Fb{constructor(e){this.persistence=e,this.si=new br(t=>Tc(t),wc),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.oi=0,this._i=new Rc,this.targetCount=0,this.ai=ns.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),D.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ns(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Pr(t),D.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this._i.containsKey(t))}}/**
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
 */class Og{constructor(e,t){this.ui={},this.overlays={},this.ci=new ra(0),this.li=!1,this.li=!0,this.hi=new Nb,this.referenceDelegate=e(this),this.Pi=new Fb(this),this.indexManager=new Eb,this.remoteDocumentCache=function(s){return new Mb(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Tb(t),this.Ii=new Vb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Db,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Ob(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){X("MemoryPersistence","Starting transaction:",e);const s=new Ub(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return D.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class Ub extends fI{constructor(e){super(),this.currentSequenceNumber=e}}class Pc{constructor(e){this.persistence=e,this.Ri=new Rc,this.Vi=null}static mi(e){return new Pc(e)}get fi(){if(this.Vi)return this.Vi;throw oe(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.fi,r=>{const s=ne.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,ce.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return D.or([()=>D.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Fo{constructor(e,t){this.persistence=e,this.pi=new br(r=>mI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Rb(this,t)}static mi(e,t){return new Fo(e,t)}Ei(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return D.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?D.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(l=>{l||(r++,i.removeEntry(a,ce.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),D.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=uo(e.data.value)),t}br(e,t,r){return D.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class xc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=Te(),s=Te();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xc(e,t.fromCache,r,s)}}/**
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
 */class Bb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $b{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Dv()?8:pI(pt())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Bb;return this.Ss(e,t,a).next(l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Mr()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Lr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),D.resolve()):(Mr()<=_e.DEBUG&&X("QueryEngine","Query:",Lr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Mr()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Lr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(t))):D.resolve())}ys(e,t){if(hd(t))return D.resolve(null);let r=Yt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Sl(t,null,"F"),r=Yt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Te(...i);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Ds(t,l);return this.Cs(t,h,a,c.readTime)?this.ys(e,Sl(t,null,"F")):this.vs(e,h,t,c)}))})))}ws(e,t,r,s){return hd(t)||s.isEqual(ce.min())?D.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?D.resolve(null):(Mr()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lr(t)),this.vs(e,a,t,cI(s,ai)).next(l=>l))})}Ds(e,t){let r=new Qe(fg(e));return t.forEach((s,i)=>{aa(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Mr()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Lr(t)),this.ps.getDocumentsMatchingQuery(e,t,Qn.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const kc="LocalStore",jb=3e8;class qb{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new $e(ye),this.xs=new br(i=>Tc(i),wc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Hb(n,e,t,r){return new qb(n,e,t,r)}async function Mg(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=Te();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:l}))})})}function zb(n,e){const t=de(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const g=h.batch,m=g.keys();let A=D.resolve();return m.forEach(x=>{A=A.next(()=>f.getEntry(c,x)).next(P=>{const M=h.docVersions.get(x);Re(M!==null,48541),P.version.compareTo(M)<0&&(g.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Lg(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function Wb(n,e){const t=de(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;l.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,g)));let A=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(it.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(g,A),function(P,M,q){return P.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=jb?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(m,A,f)&&l.push(t.Pi.updateTargetData(i,A))});let c=An(),h=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Gb(i,a,e.documentUpdates).next(f=>{c=f.ks,h=f.qs})),!r.isEqual(ce.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(g=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return D.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.Ms=s,i))}function Gb(n,e,t){let r=Te(),s=Te();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=An();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):X(kc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{ks:a,qs:s}})}function Kb(n,e){const t=de(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=_c),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Qb(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Un(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function kl(n,e,t){const r=de(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!hs(a))throw a;X(kc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function bd(n,e,t){const r=de(n);let s=ce.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const g=de(c),m=g.xs.get(f);return m!==void 0?D.resolve(g.Ms.get(m)):g.Pi.getTargetData(h,f)}(r,a,Yt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:ce.min(),t?i:Te())).next(l=>(Jb(r,OI(e),l),{documents:l,Qs:i})))}function Jb(n,e,t){let r=n.Os.get(e)||ce.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Ad{constructor(){this.activeTargetIds=$I()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yb{constructor(){this.Mo=new Ad,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ad,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Xb{Oo(e){}shutdown(){}}/**
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
 */const Sd="ConnectivityMonitor";class Cd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(Sd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(Sd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let eo=null;function Vl(){return eo===null?eo=function(){return 268435456+Math.round(2147483648*Math.random())}():eo++,"0x"+eo.toString(16)}/**
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
 */const Qa="RestConnection",Zb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class e0{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ko?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Vl(),l=this.zo(e,t.toUriEncodedString());X(Qa,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:h}=new URL(l),f=ss(h);return this.Jo(e,l,c,r,f).then(g=>(X(Qa,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Xr(Qa,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=Zb[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class t0{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ct="WebChannelConnection";class n0 extends e0{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Vl();return new Promise((l,c)=>{const h=new Bp;h.setWithCredentials(!0),h.listenOnce($p.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case co.NO_ERROR:const g=h.getResponseJson();X(ct,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case co.TIMEOUT:X(ct,`RPC '${e}' ${a} timed out`),c(new Y(V.DEADLINE_EXCEEDED,"Request time out"));break;case co.HTTP_ERROR:const m=h.getStatus();if(X(ct,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const x=A?.error;if(x&&x.status&&x.message){const P=function(q){const N=q.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(N)>=0?N:V.UNKNOWN}(x.status);c(new Y(P,x.message))}else c(new Y(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new Y(V.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{X(ct,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);X(ct,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Vl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Hp(),l=qp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");X(ct,`Creating RPC '${e}' stream ${s}: ${f}`,c);const g=a.createWebChannel(f,c);this.I_(g);let m=!1,A=!1;const x=new t0({Yo:M=>{A?X(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(m||(X(ct,`Opening RPC '${e}' stream ${s} transport.`),g.open(),m=!0),X(ct,`RPC '${e}' stream ${s} sending:`,M),g.send(M))},Zo:()=>g.close()}),P=(M,q,N)=>{M.listen(q,W=>{try{N(W)}catch(Q){setTimeout(()=>{throw Q},0)}})};return P(g,Ds.EventType.OPEN,()=>{A||(X(ct,`RPC '${e}' stream ${s} transport opened.`),x.o_())}),P(g,Ds.EventType.CLOSE,()=>{A||(A=!0,X(ct,`RPC '${e}' stream ${s} transport closed`),x.a_(),this.E_(g))}),P(g,Ds.EventType.ERROR,M=>{A||(A=!0,Xr(ct,`RPC '${e}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),x.a_(new Y(V.UNAVAILABLE,"The operation could not be completed")))}),P(g,Ds.EventType.MESSAGE,M=>{if(!A){const q=M.data[0];Re(!!q,16349);const N=q,W=N?.error||N[0]?.error;if(W){X(ct,`RPC '${e}' stream ${s} received error:`,W);const Q=W.status;let Ie=function(_){const v=He[_];if(v!==void 0)return bg(v)}(Q),Pe=W.message;Ie===void 0&&(Ie=V.INTERNAL,Pe="Unknown error status: "+Q+" with message "+W.message),A=!0,x.a_(new Y(Ie,Pe)),g.close()}else X(ct,`RPC '${e}' stream ${s} received:`,q),x.u_(q)}}),P(l,jp.STAT_EVENT,M=>{M.stat===vl.PROXY?X(ct,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===vl.NOPROXY&&X(ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Ja(){return typeof document<"u"?document:null}/**
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
 */function ha(n){return new ob(n,!0)}/**
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
 */class Fg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Rd="PersistentStream";class Ug{constructor(e,t,r,s,i,a,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Fg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(In(t.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new Y(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return X(Rd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(X(Rd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class r0 extends Ug{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=cb(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ce.min():a.readTime?Xt(a.readTime):ce.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=xl(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=bl(c)?{documents:db(i,c)}:{query:fb(i,c).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Cg(i,a.resumeToken);const h=Cl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ce.min())>0){l.readTime=Lo(i,a.snapshotVersion.toTimestamp());const h=Cl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=gb(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=xl(this.serializer),t.removeTarget=e,this.q_(t)}}class s0 extends Ug{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=hb(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=xl(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ub(this.serializer,r))};this.q_(t)}}/**
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
 */class i0{}class o0 extends i0{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Y(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Rl(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(V.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,Rl(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Y(V.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class a0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(In(t),this.aa=!1):X("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const wr="RemoteStore";class l0{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Sr(this)&&(X(wr,"Restarting streams for network reachability change."),await async function(c){const h=de(c);h.Ea.add(4),await Si(h),h.Ra.set("Unknown"),h.Ea.delete(4),await da(h)}(this))})}),this.Ra=new a0(r,s)}}async function da(n){if(Sr(n))for(const e of n.da)await e(!0)}async function Si(n){for(const e of n.da)await e(!1)}function Bg(n,e){const t=de(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Oc(t)?Nc(t):ds(t).O_()&&Dc(t,e))}function Vc(n,e){const t=de(n),r=ds(t);t.Ia.delete(e),r.O_()&&$g(t,e),t.Ia.size===0&&(r.O_()?r.L_():Sr(t)&&t.Ra.set("Unknown"))}function Dc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ds(n).Y_(e)}function $g(n,e){n.Va.Ue(e),ds(n).Z_(e)}function Nc(n){n.Va=new nb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ds(n).start(),n.Ra.ua()}function Oc(n){return Sr(n)&&!ds(n).x_()&&n.Ia.size>0}function Sr(n){return de(n).Ea.size===0}function jg(n){n.Va=void 0}async function c0(n){n.Ra.set("Online")}async function u0(n){n.Ia.forEach((e,t)=>{Dc(n,e)})}async function h0(n,e){jg(n),Oc(n)?(n.Ra.ha(e),Nc(n)):n.Ra.set("Unknown")}async function d0(n,e,t){if(n.Ra.set("Online"),e instanceof Sg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))}(n,e)}catch(r){X(wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uo(n,r)}else if(e instanceof po?n.Va.Ze(e):e instanceof Ag?n.Va.st(e):n.Va.tt(e),!t.isEqual(ce.min()))try{const r=await Lg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(it.EMPTY_BYTE_STRING,f.snapshotVersion)),$g(i,c);const g=new Un(f.target,c,h,f.sequenceNumber);Dc(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){X(wr,"Failed to raise snapshot:",r),await Uo(n,r)}}async function Uo(n,e,t){if(!hs(e))throw e;n.Ea.add(1),await Si(n),n.Ra.set("Offline"),t||(t=()=>Lg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{X(wr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await da(n)})}function qg(n,e){return e().catch(t=>Uo(n,t,e))}async function fa(n){const e=de(n),t=Zn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:_c;for(;f0(e);)try{const s=await Kb(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,p0(e,s)}catch(s){await Uo(e,s)}Hg(e)&&zg(e)}function f0(n){return Sr(n)&&n.Ta.length<10}function p0(n,e){n.Ta.push(e);const t=Zn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Hg(n){return Sr(n)&&!Zn(n).x_()&&n.Ta.length>0}function zg(n){Zn(n).start()}async function g0(n){Zn(n).ra()}async function m0(n){const e=Zn(n);for(const t of n.Ta)e.ea(t.mutations)}async function _0(n,e,t){const r=n.Ta.shift(),s=Ac.from(r,e,t);await qg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await fa(n)}async function y0(n,e){e&&Zn(n).X_&&await async function(r,s){if(function(a){return ZI(a)&&a!==V.ABORTED}(s.code)){const i=r.Ta.shift();Zn(r).B_(),await qg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fa(r)}}(n,e),Hg(n)&&zg(n)}async function Pd(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),X(wr,"RemoteStore received new credentials");const r=Sr(t);t.Ea.add(3),await Si(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await da(t)}async function v0(n,e){const t=de(n);e?(t.Ea.delete(2),await da(t)):e||(t.Ea.add(2),await Si(t),t.Ra.set("Unknown"))}function ds(n){return n.ma||(n.ma=function(t,r,s){const i=de(t);return i.sa(),new r0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:c0.bind(null,n),t_:u0.bind(null,n),r_:h0.bind(null,n),H_:d0.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Oc(n)?Nc(n):n.Ra.set("Unknown")):(await n.ma.stop(),jg(n))})),n.ma}function Zn(n){return n.fa||(n.fa=function(t,r,s){const i=de(t);return i.sa(),new s0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:g0.bind(null,n),r_:y0.bind(null,n),ta:m0.bind(null,n),na:_0.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await fa(n)):(await n.fa.stop(),n.Ta.length>0&&(X(wr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Mc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Mc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lc(n,e){if(In("AsyncQueue",`${e}: ${n}`),hs(n))return new Y(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Kr{static emptySet(e){return new Kr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ne.comparator(t.key,r.key):(t,r)=>ne.comparator(t.key,r.key),this.keyedMap=Ns(),this.sortedSet=new $e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Kr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class xd{constructor(){this.ga=new $e(ne.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):oe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class rs{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new rs(e,t,Kr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class T0{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class w0{constructor(){this.queries=kd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=de(t),i=s.queries;s.queries=kd(),i.forEach((a,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new Y(V.ABORTED,"Firestore shutting down"))}}function kd(){return new br(n=>dg(n),oa)}async function Wg(n,e){const t=de(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new T0,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Lc(a,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Fc(t)}async function Gg(n,e){const t=de(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function E0(n,e){const t=de(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Fc(t)}function I0(n,e,t){const r=de(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Fc(n){n.Ca.forEach(e=>{e.next()})}var Dl,Vd;(Vd=Dl||(Dl={})).Ma="default",Vd.Cache="cache";class Kg{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Dl.Cache}}/**
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
 */class Qg{constructor(e){this.key=e}}class Jg{constructor(e){this.key=e}}class b0{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Te(),this.mutatedKeys=Te(),this.eu=fg(e),this.tu=new Kr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new xd,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const m=s.get(f),A=aa(this.query,g)?g:null,x=!!m&&this.mutatedKeys.has(m.key),P=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let M=!1;m&&A?m.data.isEqual(A.data)?x!==P&&(r.track({type:3,doc:A}),M=!0):this.su(m,A)||(r.track({type:2,doc:A}),M=!0,(c&&this.eu(A,c)>0||h&&this.eu(A,h)<0)&&(l=!0)):!m&&A?(r.track({type:0,doc:A}),M=!0):m&&!A&&(r.track({type:1,doc:m}),M=!0,(c||h)&&(l=!0)),M&&(A?(a=a.add(A),i=P?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,g)=>function(A,x){const P=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{Rt:M})}};return P(A)-P(x)}(f.type,g.type)||this.eu(f.doc,g.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,h=c!==this.Za;return this.Za=c,a.length!==0||h?{snapshot:new rs(this.query,e.tu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new xd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Te(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new Jg(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new Qg(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=Te();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return rs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Uc="SyncEngine";class A0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class S0{constructor(e){this.key=e,this.hu=!1}}class C0{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new br(l=>dg(l),oa),this.Iu=new Map,this.Eu=new Set,this.du=new $e(ne.comparator),this.Au=new Map,this.Ru=new Rc,this.Vu={},this.mu=new Map,this.fu=ns.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function R0(n,e,t=!0){const r=nm(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Yg(r,e,t,!0),s}async function P0(n,e){const t=nm(n);await Yg(t,e,!0,!1)}async function Yg(n,e,t,r){const s=await Qb(n.localStore,Yt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await x0(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Bg(n.remoteStore,s),l}async function x0(n,e,t,r,s){n.pu=(g,m,A)=>async function(P,M,q,N){let W=M.view.ru(q);W.Cs&&(W=await bd(P.localStore,M.query,!1).then(({documents:b})=>M.view.ru(b,W)));const Q=N&&N.targetChanges.get(M.targetId),Ie=N&&N.targetMismatches.get(M.targetId)!=null,Pe=M.view.applyChanges(W,P.isPrimaryClient,Q,Ie);return Nd(P,M.targetId,Pe.au),Pe.snapshot}(n,g,m,A);const i=await bd(n.localStore,e,!0),a=new b0(e,i.Qs),l=a.ru(i.documents),c=Ai.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Nd(n,t,h.au);const f=new A0(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function k0(n,e,t){const r=de(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!oa(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await kl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Vc(r.remoteStore,s.targetId),Nl(r,s.targetId)}).catch(us)):(Nl(r,s.targetId),await kl(r.localStore,s.targetId,!0))}async function V0(n,e){const t=de(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Vc(t.remoteStore,r.targetId))}async function D0(n,e,t){const r=B0(n);try{const s=await function(a,l){const c=de(a),h=Oe.now(),f=l.reduce((A,x)=>A.add(x.key),Te());let g,m;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let x=An(),P=Te();return c.Ns.getEntries(A,f).next(M=>{x=M,x.forEach((q,N)=>{N.isValidDocument()||(P=P.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,x)).next(M=>{g=M;const q=[];for(const N of l){const W=KI(N,g.get(N.key).overlayedDocument);W!=null&&q.push(new Ar(N.key,W,sg(W.value.mapValue),$t.exists(!0)))}return c.mutationQueue.addMutationBatch(A,h,q,l)}).next(M=>{m=M;const q=M.applyToLocalDocumentSet(g,P);return c.documentOverlayCache.saveOverlays(A,M.batchId,q)})}).then(()=>({batchId:m.batchId,changes:gg(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Vu[a.currentUser.toKey()];h||(h=new $e(ye)),h=h.insert(l,c),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await Ci(r,s.changes),await fa(r.remoteStore)}catch(s){const i=Lc(s,"Failed to persist write");t.reject(i)}}async function Xg(n,e){const t=de(n);try{const r=await Wb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Re(a.hu,14607):s.removedDocuments.size>0&&(Re(a.hu,42227),a.hu=!1))}),await Ci(t,r,e)}catch(r){await us(r)}}function Dd(n,e,t){const r=de(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=de(a);c.onlineState=l;let h=!1;c.queries.forEach((f,g)=>{for(const m of g.Sa)m.va(l)&&(h=!0)}),h&&Fc(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function N0(n,e,t){const r=de(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new $e(ne.comparator);a=a.insert(i,dt.newNoDocument(i,ce.min()));const l=Te().add(i),c=new ua(ce.min(),new Map,new $e(ye),a,l);await Xg(r,c),r.du=r.du.remove(i),r.Au.delete(e),Bc(r)}else await kl(r.localStore,e,!1).then(()=>Nl(r,e,t)).catch(us)}async function O0(n,e){const t=de(n),r=e.batch.batchId;try{const s=await zb(t.localStore,e);em(t,r,null),Zg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ci(t,s)}catch(s){await us(s)}}async function M0(n,e,t){const r=de(n);try{const s=await function(a,l){const c=de(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(Re(g!==null,37113),f=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);em(r,e,t),Zg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ci(r,s)}catch(s){await us(s)}}function Zg(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function em(n,e,t){const r=de(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Nl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||tm(n,r)})}function tm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Vc(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Bc(n))}function Nd(n,e,t){for(const r of t)r instanceof Qg?(n.Ru.addReference(r.key,e),L0(n,r)):r instanceof Jg?(X(Uc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||tm(n,r.key)):oe(19791,{wu:r})}function L0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(X(Uc,"New document in limbo: "+t),n.Eu.add(r),Bc(n))}function Bc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ne(Ne.fromString(e)),r=n.fu.next();n.Au.set(r,new S0(t)),n.du=n.du.insert(t,r),Bg(n.remoteStore,new Un(Yt(Ec(t.path)),r,"TargetPurposeLimboResolution",ra.ce))}}async function Ci(n,e,t){const r=de(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{a.push(r.pu(c,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(h){s.push(h);const f=xc.As(c.targetId,h);i.push(f)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(c,h){const f=de(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(h,m=>D.forEach(m.Es,A=>f.persistence.referenceDelegate.addReference(g,m.targetId,A)).next(()=>D.forEach(m.ds,A=>f.persistence.referenceDelegate.removeReference(g,m.targetId,A)))))}catch(g){if(!hs(g))throw g;X(kc,"Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const A=f.Ms.get(m),x=A.snapshotVersion,P=A.withLastLimboFreeSnapshotVersion(x);f.Ms=f.Ms.insert(m,P)}}}(r.localStore,i))}async function F0(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){X(Uc,"User change. New user:",e.toKey());const r=await Mg(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new Y(V.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ci(t,r.Ls)}}function U0(n,e){const t=de(n),r=t.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let s=Te();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function nm(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=N0.bind(null,e),e.Pu.H_=E0.bind(null,e.eventManager),e.Pu.yu=I0.bind(null,e.eventManager),e}function B0(n){const e=de(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=M0.bind(null,e),e}class Bo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ha(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Hb(this.persistence,new $b,e.initialUser,this.serializer)}Cu(e){return new Og(Pc.mi,this.serializer)}Du(e){return new Yb}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bo.provider={build:()=>new Bo};class $0 extends Bo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Re(this.persistence.referenceDelegate instanceof Fo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Sb(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Og(r=>Fo.mi(r,t),this.serializer)}}class Ol{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=F0.bind(null,this.syncEngine),await v0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new w0}()}createDatastore(e){const t=ha(e.databaseInfo.databaseId),r=function(i){return new n0(i)}(e.databaseInfo);return function(i,a,l,c){return new o0(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new l0(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Dd(this.syncEngine,t,0),function(){return Cd.v()?new Cd:new Xb}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,f){const g=new C0(s,i,a,l,c,h);return f&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=de(t);X(wr,"RemoteStore shutting down."),r.Ea.add(5),await Si(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ol.provider={build:()=>new Ol};/**
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
 */class rm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const er="FirestoreClient";class j0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=mc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X(er,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X(er,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Lc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ya(n,e){n.asyncQueue.verifyOperationInProgress(),X(er,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Mg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Od(n,e){n.asyncQueue.verifyOperationInProgress();const t=await q0(n);X(er,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Pd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Pd(e.remoteStore,s)),n._onlineComponents=e}async function q0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){X(er,"Using user provided OfflineComponentProvider");try{await Ya(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Xr("Error using user provided cache. Falling back to memory cache: "+t),await Ya(n,new Bo)}}else X(er,"Using default OfflineComponentProvider"),await Ya(n,new $0(void 0));return n._offlineComponents}async function sm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(X(er,"Using user provided OnlineComponentProvider"),await Od(n,n._uninitializedComponentsProvider._online)):(X(er,"Using default OnlineComponentProvider"),await Od(n,new Ol))),n._onlineComponents}function H0(n){return sm(n).then(e=>e.syncEngine)}async function im(n){const e=await sm(n),t=e.eventManager;return t.onListen=R0.bind(null,e.syncEngine),t.onUnlisten=k0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=P0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=V0.bind(null,e.syncEngine),t}function z0(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new rm({next:m=>{f.Nu(),a.enqueueAndForget(()=>Gg(i,g));const A=m.docs.has(l);!A&&m.fromCache?h.reject(new Y(V.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&m.fromCache&&c&&c.source==="server"?h.reject(new Y(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new Kg(Ec(l.path),f,{includeMetadataChanges:!0,qa:!0});return Wg(i,g)}(await im(n),n.asyncQueue,e,t,r)),r.promise}function W0(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new rm({next:m=>{f.Nu(),a.enqueueAndForget(()=>Gg(i,g)),m.fromCache&&c.source==="server"?h.reject(new Y(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new Kg(l,f,{includeMetadataChanges:!0,qa:!0});return Wg(i,g)}(await im(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function om(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Md=new Map;/**
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
 */const am="firestore.googleapis.com",Ld=!0;class Fd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Y(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=am,this.ssl=Ld}else this.host=e.host,this.ssl=e.ssl??Ld;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ng;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bb)throw new Y(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=om(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XE;switch(r.type){case"firstParty":return new nI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Md.get(t);r&&(X("ComponentProvider","Removing Datastore"),Md.delete(t),r.terminate())}(this),Promise.resolve()}}function G0(n,e,t,r={}){n=bn(n,pa);const s=ss(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(ep(`https://${l}`),tp("Firestore",!0)),i.host!==am&&i.host!==l&&Xr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!_r(c,a)&&(n._setSettings(c),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=ut.MOCK_USER;else{h=bv(r.mockUserToken,n._app?.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Y(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ut(g)}n._authCredentials=new ZE(new Wp(h,f))}}/**
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
 */class fs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fs(this.firestore,e,this._query)}}class Ge{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ei(t,Ge._jsonSchema))return new Ge(e,r||null,new ne(Ne.fromString(t.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:We("string",Ge._jsonSchemaVersion),referencePath:We("string")};class zn extends fs{constructor(e,t,r){super(e,t,Ec(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new ne(e))}withConverter(e){return new zn(this.firestore,e,this._path)}}function lm(n,e,...t){if(n=Ct(n),Gp("collection","path",e),n instanceof pa){const r=Ne.fromString(e,...t);return Yh(r),new zn(n,null,r)}{if(!(n instanceof Ge||n instanceof zn))throw new Y(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return Yh(r),new zn(n.firestore,null,r)}}function $o(n,e,...t){if(n=Ct(n),arguments.length===1&&(e=mc.newId()),Gp("doc","path",e),n instanceof pa){const r=Ne.fromString(e,...t);return Jh(r),new Ge(n,null,new ne(r))}{if(!(n instanceof Ge||n instanceof zn))throw new Y(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return Jh(r),new Ge(n.firestore,n instanceof zn?n.converter:null,new ne(r))}}/**
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
 */const Ud="AsyncQueue";class Bd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Fg(this,"async_queue_retry"),this._c=()=>{const r=Ja();r&&X(Ud,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ja();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ja();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new _n;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!hs(e))throw e;X(Ud,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,In("INTERNAL UNHANDLED ERROR: ",$d(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Mc.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&oe(47125,{Pc:$d(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function $d(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ps extends pa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Bd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bd(e),this._firestoreClient=void 0,await e}}}function Ri(n,e){const t=typeof n=="object"?n:ip(),r=typeof n=="string"?n:ko,s=sc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ev("firestore");i&&G0(s,...i)}return s}function $c(n){if(n._terminated)throw new Y(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||K0(n),n._firestoreClient}function K0(n){const e=n._freezeSettings(),t=function(s,i,a,l){return new vI(s,i,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,om(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)}(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new j0(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(it.fromBase64String(e))}catch(t){throw new Y(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vt(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ei(e,Vt._jsonSchema))return Vt.fromBase64String(e.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:We("string",Vt._jsonSchemaVersion),bytes:We("string")};/**
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
 */class jc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cm{constructor(e){this._methodName=e}}/**
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
 */class Zt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(e){if(Ei(e,Zt._jsonSchema))return new Zt(e.latitude,e.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:We("string",Zt._jsonSchemaVersion),latitude:We("number"),longitude:We("number")};/**
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
 */class en{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:en._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ei(e,en._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new en(e.vectorValues);throw new Y(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}en._jsonSchemaVersion="firestore/vectorValue/1.0",en._jsonSchema={type:We("string",en._jsonSchemaVersion),vectorValues:We("object")};/**
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
 */const Q0=/^__.*__$/;class J0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,t,this.fieldTransforms):new bi(e,this.data,t,this.fieldTransforms)}}function um(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{Ac:n})}}class qc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new qc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return jo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(um(this.Ac)&&Q0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Y0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ha(e)}Cc(e,t,r,s=!1){return new qc({Ac:e,methodName:t,Dc:r,path:st.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hc(n){const e=n._freezeSettings(),t=ha(n._databaseId);return new Y0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function hm(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);pm("Data must be an object, but it was:",a,r);const l=dm(r,a);let c,h;if(i.merge)c=new Ft(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=Z0(e,g,t);if(!a.contains(m))throw new Y(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);tA(f,m)||f.push(m)}c=new Ft(f),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new J0(new kt(l),c,h)}function X0(n,e,t,r=!1){return zc(t,n.Cc(r?4:3,e))}function zc(n,e){if(fm(n=Ct(n)))return pm("Unsupported field value:",e,n),dm(n,e);if(n instanceof cm)return function(r,s){if(!um(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=zc(l,s.wc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:Lo(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lo(s.serializer,i)}}if(r instanceof Zt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:Cg(s.serializer,r._byteString)};if(r instanceof Ge){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Cc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof en)return function(a,l){return{mapValue:{fields:{[ng]:{stringValue:rg},[Vo]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return Ic(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${na(r)}`)}(n,e)}function dm(n,e){const t={};return Jp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ir(n,(r,s)=>{const i=zc(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function fm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Oe||n instanceof Zt||n instanceof Vt||n instanceof Ge||n instanceof cm||n instanceof en)}function pm(n,e,t){if(!fm(t)||!Kp(t)){const r=na(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Z0(n,e,t){if((e=Ct(e))instanceof jc)return e._internalPath;if(typeof e=="string")return gm(n,e);throw jo("Field path arguments must be of type string or ",n,!1,void 0,t)}const eA=new RegExp("[~\\*/\\[\\]]");function gm(n,e,t){if(e.search(eA)>=0)throw jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new jc(...e.split("."))._internalPath}catch{throw jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function jo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Y(V.INVALID_ARGUMENT,l+n+c)}function tA(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class mm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(_m("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nA extends mm{data(){return super.data()}}function _m(n,e){return typeof e=="string"?gm(n,e):e instanceof jc?e._internalPath:e._delegate._internalPath}/**
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
 */function rA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wc{}class sA extends Wc{}function iA(n,e,...t){let r=[];e instanceof Wc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(c=>c instanceof Kc).length,l=i.filter(c=>c instanceof Gc).length;if(a>1||a>0&&l>0)throw new Y(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Gc extends sA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Gc(e,t,r)}_apply(e){const t=this._parse(e);return ym(e._query,t),new fs(e.firestore,e.converter,Al(e._query,t))}_parse(e){const t=Hc(e.firestore);return function(i,a,l,c,h,f,g){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){qd(g,f);const x=[];for(const P of g)x.push(jd(c,i,P));m={arrayValue:{values:x}}}else m=jd(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||qd(g,f),m=X0(l,a,g,f==="in"||f==="not-in");return ze.create(h,f,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Kc extends Wc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:jt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)ym(a,c),a=Al(a,c)}(e._query,t),new fs(e.firestore,e.converter,Al(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function jd(n,e,t){if(typeof(t=Ct(t))=="string"){if(t==="")throw new Y(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hg(e)&&t.indexOf("/")!==-1)throw new Y(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ne.fromString(t));if(!ne.isDocumentKey(r))throw new Y(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return id(n,new ne(r))}if(t instanceof Ge)return id(n,t._key);throw new Y(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${na(t)}.`)}function qd(n,e){if(!Array.isArray(n)||n.length===0)throw new Y(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ym(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Y(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class oA{convertValue(e,t="none"){switch(Xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ir(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[Vo].arrayValue?.values?.map(r=>qe(r.doubleValue));return new en(t)}convertGeoPoint(e){return new Zt(qe(e.latitude),qe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ia(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(li(e));default:return null}}convertTimestamp(e){const t=Jn(e);return new Oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ne.fromString(e);Re(Dg(r),9688,{name:e});const s=new ci(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(t)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function vm(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ms{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mr extends mm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(_m("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=mr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}mr._jsonSchemaVersion="firestore/documentSnapshot/1.0",mr._jsonSchema={type:We("string",mr._jsonSchemaVersion),bundleSource:We("string","DocumentSnapshot"),bundleName:We("string"),bundle:We("string")};class go extends mr{data(e={}){return super.data(e)}}class Qr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ms(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new go(this._firestore,this._userDataWriter,r.key,r,new Ms(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new go(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ms(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new go(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ms(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:aA(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function aA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:n})}}/**
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
 */function lA(n){n=bn(n,Ge);const e=bn(n.firestore,ps);return z0($c(e),n._key).then(t=>fA(e,n,t))}Qr._jsonSchemaVersion="firestore/querySnapshot/1.0",Qr._jsonSchema={type:We("string",Qr._jsonSchemaVersion),bundleSource:We("string","QuerySnapshot"),bundleName:We("string"),bundle:We("string")};class Tm extends oA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,t)}}function cA(n){n=bn(n,fs);const e=bn(n.firestore,ps),t=$c(e),r=new Tm(e);return rA(n._query),W0(t,n._query).then(s=>new Qr(e,r,n,s))}function uA(n,e,t){n=bn(n,Ge);const r=bn(n.firestore,ps),s=vm(n.converter,e,t);return Qc(r,[hm(Hc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,$t.none())])}function hA(n){return Qc(bn(n.firestore,ps),[new bc(n._key,$t.none())])}function dA(n,e){const t=bn(n.firestore,ps),r=$o(n),s=vm(n.converter,e);return Qc(t,[hm(Hc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function Qc(n,e){return function(r,s){const i=new _n;return r.asyncQueue.enqueueAndForget(async()=>D0(await H0(r),s,i)),i.promise}($c(n),e)}function fA(n,e,t){const r=t.docs.get(e._key),s=new Tm(n);return new mr(n,s,e._key,r,new Ms(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){cs=s})(is),Yr(new yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ps(new eI(r.getProvider("auth-internal")),new rI(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(h.options.projectId,f)}(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),qn(Wh,Gh,e),qn(Wh,Gh,"esm2020")})();const Rn=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},pA={class:"flex flex-col items-center justify-center h-screen bg-gray-100 p-4 sm:p-6 md:p-8"},gA={key:0,class:"mt-6 text-gray-600"},mA={key:1,class:"mt-6 text-red-600 bg-red-100 p-3 rounded-md"},_A={__name:"LoginScreen",emits:["successfulLogin"],setup(n,{emit:e}){const t=Ue(!1),r=Ue(null),s=e,i=async()=>{t.value=!0,r.value=null;try{const a=ls(),l=new dn,h=(await oE(a,l)).user;console.log("Google Login successful:",h),s("successfulLogin",h)}catch(a){console.error("Google Login error:",a),r.value=`Google Login failed: ${a.message}`}finally{t.value=!1}};return(a,l)=>(re(),pe("div",pA,[l[2]||(l[2]=O("h1",{class:"text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center"},"The Arcane Scholar’s Legacy",-1)),O("div",{class:"flex flex-col space-y-4 w-full max-w-sm"},[O("button",{onClick:i,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center text-lg"},l[0]||(l[0]=[O("img",{src:"https://www.google.com/favicon.ico",alt:"Google Logo",class:"h-7 w-7 mr-3"},null,-1),dr(" Sign in with Google ",-1)]))]),t.value?(re(),pe("div",gA,l[1]||(l[1]=[O("p",null,"Loading...",-1)]))):_t("",!0),r.value?(re(),pe("div",mA,[O("p",null,De(r.value),1)])):_t("",!0)]))}},yA=Rn(_A,[["__scopeId","data-v-f45bb7de"]]),vA={class:"flex flex-col items-center justify-center h-screen w-full bg-gray-950 text-yellow-300 p-4 sm:p-6 md:p-8 overflow-y-auto"},TA={key:0,class:"mt-4 text-yellow-400"},wA={key:1,class:"mt-4 text-red-500 bg-red-100 p-3 rounded-md"},EA={key:2,class:"w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700 text-center"},IA={key:3,class:"w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700"},bA=["innerHTML"],AA={class:"space-y-4"},SA={key:1,class:"space-y-4 mt-6"},CA=["disabled"],RA={key:4,class:"w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700"},PA=["innerHTML"],xA={class:"space-y-4"},kA={key:1,class:"space-y-4 mt-6"},VA=["disabled"],DA={key:5,class:"w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700"},NA={class:"text-sm text-yellow-400 mb-4 italic"},OA=["disabled"],MA={__name:"CharacterManager",emits:["character-created","return-to-select"],setup(n,{emit:e}){const t=e,r=ls(),s=Ri(),i=typeof __app_id<"u"?__app_id:"default-app-id",a=Ue(!1),l=Ue(null),c=Ue("chapter1"),h=Ue({chapter1:"",chapter2:""}),f=Ue(!1),g=Ue({name:"",faction:"",specialty:"",knowledge:0,resources:{},research:{}}),m=async()=>{try{const q=await fetch("/the-arcane-scholar-s-legacy/Chapter1.txt");if(!q.ok)throw new Error("Failed to fetch Chapter1.txt.");const N=await q.text();h.value.chapter1=N.trim(),console.log("Successfully read Chapter1.txt.");const W=await fetch("/the-arcane-scholar-s-legacy/Chapter2.txt");if(!W.ok)throw new Error("Failed to fetch Chapter2.txt.");const Q=await W.text();h.value.chapter2=Q.trim(),console.log("Successfully read Chapter2.txt."),f.value=!0}catch(q){console.error("Error fetching lore:",q),l.value="Failed to load game lore. Please try again later."}};pi(()=>{m()});const A=q=>{g.value.faction=q},x=q=>{g.value.specialty=q},P=()=>{c.value==="factionSelect"?c.value="chapter2":c.value==="specialtySelect"&&(c.value="nameAssign")},M=async()=>{const q=r.currentUser?.uid;if(!q){l.value="User not authenticated. Please log in again.";return}if(!g.value.name){l.value="Please enter a name for your scholar.";return}a.value=!0,l.value=null;try{const N=lm(s,`artifacts/${i}/users/${q}/characters`),W=await dA(N,g.value);console.log("New character created with ID:",W.id),t("character-created",W.id)}catch(N){console.error("Error creating character:",N),l.value=`Failed to create character: ${N.message}`}finally{a.value=!1}};return(q,N)=>(re(),pe("div",vA,[N[16]||(N[16]=O("h2",{class:"text-4xl font-serif text-yellow-100 mb-8 text-center leading-tight"},"Forge Your Legacy",-1)),a.value?(re(),pe("div",TA,"Loading...")):_t("",!0),l.value?(re(),pe("div",wA,De(l.value),1)):_t("",!0),f.value?c.value==="chapter1"||c.value==="factionSelect"?(re(),pe("div",IA,[N[11]||(N[11]=O("h3",{class:"text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2"},"Chapter 1: The First Whisper",-1)),O("div",{innerHTML:h.value.chapter1,class:"text-lg text-yellow-300 mb-6 max-h-80 overflow-y-auto"},null,8,bA),O("div",AA,[c.value==="chapter1"?(re(),pe("button",{key:0,onClick:N[0]||(N[0]=W=>c.value="factionSelect"),class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out"}," Continue to Faction Selection ")):_t("",!0),c.value==="factionSelect"?(re(),pe("div",SA,[O("button",{onClick:N[1]||(N[1]=W=>A("Lumen")),class:Z(["w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out",g.value.faction==="Lumen"?"bg-blue-600 text-white shadow-xl":"bg-violet-800 hover:bg-blue-500 text-yellow-100"])}," Select Lumen ",2),O("button",{onClick:N[2]||(N[2]=W=>A("Umbra")),class:Z(["w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out",g.value.faction==="Umbra"?"bg-purple-600 text-white shadow-xl":"bg-violet-800 hover:bg-purple-500 text-yellow-100"])}," Select Umbra ",2),O("button",{onClick:P,disabled:!g.value.faction,class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"}," Proceed ",8,CA),O("button",{onClick:N[3]||(N[3]=W=>c.value="chapter1"),class:"w-full py-2 px-4 rounded-lg text-sm bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out"}," Go Back ")])):_t("",!0)])])):c.value==="chapter2"||c.value==="specialtySelect"?(re(),pe("div",RA,[N[12]||(N[12]=O("h3",{class:"text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2"},"The Second Whisper",-1)),O("div",{innerHTML:h.value.chapter2,class:"text-lg text-yellow-300 mb-6 max-h-80 overflow-y-auto"},null,8,PA),O("div",xA,[c.value==="chapter2"?(re(),pe("button",{key:0,onClick:N[4]||(N[4]=W=>c.value="specialtySelect"),class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out"}," Continue to Specialty Selection ")):_t("",!0),c.value==="specialtySelect"?(re(),pe("div",kA,[O("button",{onClick:N[5]||(N[5]=W=>x("Arcane")),class:Z(["w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out",g.value.specialty==="Arcane"?"bg-cyan-600 text-white shadow-xl":"bg-violet-800 hover:bg-cyan-500 text-yellow-100"])}," Select Arcane ",2),O("button",{onClick:N[6]||(N[6]=W=>x("Alchemist")),class:Z(["w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out",g.value.specialty==="Alchemist"?"bg-amber-600 text-white shadow-xl":"bg-violet-800 hover:bg-amber-500 text-yellow-100"])}," Select Alchemist ",2),O("button",{onClick:P,disabled:!g.value.specialty,class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"}," Proceed ",8,VA),O("button",{onClick:N[7]||(N[7]=W=>c.value="chapter1"),class:"w-full py-2 px-4 rounded-lg text-sm bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out"}," Go Back ")])):_t("",!0)])])):c.value==="nameAssign"?(re(),pe("div",DA,[N[14]||(N[14]=O("h3",{class:"text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2"},"Assign Your Scholar Name",-1)),N[15]||(N[15]=O("p",{class:"text-lg text-yellow-300 mb-4"}," Name your scholar, choose wisely as this name will define your legacy. ",-1)),O("p",NA," Faction: "+De(g.value.faction)+" | Specialty: "+De(g.value.specialty),1),O("form",{onSubmit:Gf(M,["prevent"]),class:"space-y-4"},[O("div",null,[N[13]||(N[13]=O("label",{for:"characterName",class:"block text-lg text-yellow-300 mb-2"},"Scholar's Name:",-1)),M_(O("input",{id:"characterName","onUpdate:modelValue":N[8]||(N[8]=W=>g.value.name=W),type:"text",required:"",class:"w-full p-3 rounded-lg bg-gray-800 text-yellow-100 border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"Enter a name"},null,512),[[ov,g.value.name]])]),O("button",{type:"submit",disabled:!g.value.name,class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"}," Forge Legacy ",8,OA)],32),O("button",{onClick:N[9]||(N[9]=W=>c.value="specialtySelect"),class:"w-full py-2 px-4 mt-4 rounded-lg text-sm bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out"}," Go Back ")])):_t("",!0):(re(),pe("div",EA,N[10]||(N[10]=[O("p",{class:"text-lg text-yellow-300"},"Loading lore...",-1)])))]))}},LA={class:"flex flex-col items-center justify-center min-h-screen w-full bg-gray-950 text-yellow-300 font-sans p-6"},FA={class:"bg-violet-900 p-8 rounded-xl shadow-2xl border border-yellow-700 w-full max-w-2xl"},UA={class:"bg-violet-800 p-6 rounded-lg shadow-inner mb-8"},BA={class:"bg-violet-800 p-6 rounded-lg shadow-inner"},$A={key:0,class:"text-center text-sm text-yellow-400 italic"},jA={key:1,class:"space-y-4"},qA=["onClick"],HA={class:"text-2xl font-bold text-yellow-100"},zA={class:"text-sm text-yellow-400"},WA=["onClick"],GA={key:0,class:"fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50"},KA={__name:"CharacterSelectionView",emits:["characterSelected","startNewCharacterCreation"],setup(n,{emit:e}){const t=e,r=Ue([]),s=Ue(!1),i=Ue(null),a=ls(),l=Ri(),c=typeof __app_id<"u"?__app_id:"default-app-id",h=async x=>{if(x)try{const P=lm(l,`artifacts/${c}/users/${x}/characters`),M=iA(P),q=await cA(M);r.value=q.docs.map(N=>({id:N.id,...N.data()}))}catch(P){console.error("Error fetching characters:",P)}},f=x=>{t("characterSelected",x)},g=x=>{i.value=x,s.value=!0},m=()=>{s.value=!1,i.value=null},A=async()=>{const x=a.currentUser?.uid;if(!(!x||!i.value))try{const P=$o(l,`artifacts/${c}/users/${x}/characters`,i.value);await hA(P),console.log("Character deleted successfully."),s.value=!1,i.value=null,await h(x)}catch(P){console.error("Error deleting character:",P)}};return pi(()=>{Cp(a,x=>{x&&h(x.uid)})}),(x,P)=>(re(),pe("div",LA,[O("div",FA,[P[2]||(P[2]=O("h2",{class:"text-4xl font-serif text-yellow-100 mb-6 text-center"},"Your Scholars",-1)),O("div",UA,[O("button",{onClick:P[0]||(P[0]=M=>t("startNewCharacterCreation")),class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out"}," Forge a New Legacy ")]),O("div",BA,[P[1]||(P[1]=O("h3",{class:"text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2"},"Continue Your Legacy",-1)),r.value.length===0?(re(),pe("p",$A," No scholars found. Forge your first one above! ")):(re(),pe("ul",jA,[(re(!0),pe(xt,null,Xl(r.value,M=>(re(),pe("li",{key:M.id,class:"flex items-center justify-between bg-violet-700 p-4 rounded-lg shadow-md transition duration-200 ease-in-out hover:bg-violet-600"},[O("div",{onClick:q=>f(M.id),class:"flex-grow cursor-pointer"},[O("h3",HA,De(M.name),1),O("p",zA," Faction: "+De(M.faction)+" | Specialty: "+De(M.specialty),1)],8,qA),O("button",{onClick:Gf(q=>g(M.id),["stop"]),class:"ml-4 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out"}," Delete ",8,WA)]))),128))]))])]),s.value?(re(),pe("div",GA,[O("div",{class:"bg-violet-900 p-8 rounded-xl shadow-2xl border border-yellow-700 w-full max-w-md text-center"},[P[3]||(P[3]=O("h3",{class:"text-2xl font-bold text-yellow-100 mb-4"},"Confirm Deletion",-1)),P[4]||(P[4]=O("p",{class:"text-yellow-300 mb-6"},"Are you sure you want to delete this scholar? This action cannot be undone.",-1)),O("div",{class:"flex justify-center space-x-4"},[O("button",{onClick:A,class:"bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg"},"Delete"),O("button",{onClick:m,class:"bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg"},"Cancel")])])])):_t("",!0)]))}},QA=Rn(KA,[["__scopeId","data-v-3755d9ae"]]),JA={class:"flex items-start space-x-6 mb-4"},YA={class:"flex flex-col items-center w-28 flex-shrink-0"},XA=["title"],ZA={class:"flex-grow"},eS={class:"flex flex-col items-center justify-center space-y-6 mt-8"},tS={class:"font-bold"},nS={key:0},rS={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"},sS={key:0},iS=["onClick","disabled"],oS={key:0,class:"mt-8 text-center"},aS={__name:"SanctumView",props:{knowledge:{type:Number,required:!0},passiveKnowledgeGain:{type:Number,required:!0},multiplierTiers:{type:Array,required:!0},characterDetails:{type:Object,required:!0},currentTierIndex:{type:Number,required:!0},themeClasses:{type:Object,required:!0,default:()=>({primaryBg:"bg-gray-950",primaryText:"text-yellow-300",accentBorder:"border-yellow-600",sidebarBg:"bg-violet-950",activeMenuBg:"bg-green-800"})}},emits:["generate-knowledge","buy-multiplier","advance-tier"],setup(n,{emit:e}){const t=n,r=e,s=si(()=>t.multiplierTiers[t.currentTierIndex]),i=si(()=>{const l=s.value;if(!l)return!1;const c=l.multipliers.every(f=>f.level===f.maxLevel),h=t.multiplierTiers[t.currentTierIndex+1];return c&&h}),a=(l,c)=>{const h=t.multiplierTiers[l]?.multipliers[c];return h?h.baseCost*Math.pow(h.costMultiplier,h.level):1/0};return(l,c)=>(re(),pe("section",{class:Z([t.themeClasses.primaryText,t.themeClasses.accentBorder,t.themeClasses.primaryBg,"p-6 rounded-lg shadow-xl border"])},[O("div",JA,[O("div",YA,[O("div",{class:Z(["w-24 h-24 sm:w-28 sm:h-28 border-2 rounded-lg shadow-inner flex items-center justify-center",[t.themeClasses.primaryBg,t.themeClasses.accentBorder]])},[O("span",{class:Z([t.themeClasses.primaryText,"text-sm italic opacity-70"])},"Avatar",2)],2),O("h3",{class:Z(["mt-2 text-lg font-bold text-center truncate w-full",t.themeClasses.primaryText]),title:n.characterDetails.name},De(n.characterDetails.name),11,XA),O("p",{class:Z(["text-sm",t.themeClasses.primaryText])},"Prestige: "+De(n.characterDetails.prestige),3)]),O("div",ZA,[O("h2",{class:Z(["text-3xl font-serif mb-2 pb-2 border-b",[t.themeClasses.primaryText,t.themeClasses.accentBorder]])}," Sanctum Overview ",2),O("p",{class:Z(["text-lg",t.themeClasses.primaryText])}," Welcome back, Scholar. The whispers of ancient knowledge await your command. ",2)])]),O("div",eS,[O("span",{class:Z(["text-4xl sm:text-5xl font-bold mb-4",t.themeClasses.primaryText])}," Current Knowledge: "+De(n.knowledge.toFixed(2)),3),O("button",{onClick:c[0]||(c[0]=h=>r("generate-knowledge")),class:Z([t.themeClasses.activeMenuBg,"text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-80"])}," Generate Knowledge ",2),O("p",{class:Z(["text-sm mt-2",t.themeClasses.primaryText])},"Click to harness raw arcane energy and convert it into Knowledge.",2),O("p",{class:Z(["text-xl mt-4",t.themeClasses.primaryText])},[c[2]||(c[2]=dr(" Passive Knowledge Gain: ",-1)),O("span",tS,De(n.passiveKnowledgeGain.toFixed(2)),1),c[3]||(c[3]=dr(" / second ",-1))],2)]),O("div",{class:Z(["mt-10 pt-6 border-t",t.themeClasses.accentBorder])},[s.value?(re(),pe("div",nS,[O("h4",{class:Z(["text-3xl font-serif mb-6 text-center",[t.themeClasses.primaryText]])},De(s.value.name),3),O("div",rS,[(re(!0),pe(xt,null,Xl(s.value.multipliers,(h,f)=>(re(),pe("div",{key:`multiplier-${t.currentTierIndex}-${f}`,class:Z(["p-4 rounded-lg border shadow-md flex flex-col",[t.themeClasses.primaryBg,t.themeClasses.accentBorder]])},[O("h4",{class:Z(["text-xl mb-2",t.themeClasses.primaryText])},De(h.name)+" (Level "+De(h.level)+" / "+De(h.maxLevel)+") ",3),O("p",{class:Z(["text-sm mb-2",t.themeClasses.primaryText])},[dr(" Current effect: +"+De((h.baseEffect*Math.pow(h.effectMultiplier,h.level>0?h.level-1:0)).toFixed(2))+" knowledge/s ",1),h.level>0&&h.level<h.maxLevel?(re(),pe("span",sS,"(Next: +"+De((h.baseEffect*Math.pow(h.effectMultiplier,h.level)).toFixed(2))+" knowledge/s)",1)):_t("",!0)],2),O("p",{class:Z(["text-sm mb-4",t.themeClasses.primaryText])},[dr(" Cost for next level ("+De(h.level+1)+"): ",1),O("span",{class:Z(["font-bold",t.themeClasses.primaryText])},De(a(t.currentTierIndex,f).toFixed(2))+" Knowledge",3)],2),h.level<h.maxLevel?(re(),pe("button",{key:0,onClick:g=>r("buy-multiplier",{tierIndex:t.currentTierIndex,multiplierIndex:f}),disabled:n.knowledge<a(t.currentTierIndex,f),class:Z(["mt-auto bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md text-base font-bold transition duration-300 ease-in-out",n.knowledge<a(t.currentTierIndex,f)?"opacity-50 cursor-not-allowed":""])}," Buy Upgrade (Level "+De(h.level+1)+") ",11,iS)):(re(),pe("div",{key:1,class:Z(["mt-auto text-center py-2 rounded-md font-bold text-base shadow-inner",[t.themeClasses.activeMenuBg,t.themeClasses.primaryText,"bg-opacity-80"]])}," Max Level Reached ✅ ",2))],2))),128))]),i.value?(re(),pe("div",oS,[O("button",{onClick:c[1]||(c[1]=h=>r("advance-tier")),class:Z(["py-3 px-6 rounded-lg text-xl font-bold transition duration-300 ease-in-out transform hover:scale-105",t.themeClasses.activeMenuBg,t.themeClasses.primaryText])}," Go to Next Tier: "+De(t.multiplierTiers[t.currentTierIndex+1].name)+" → ",3)])):_t("",!0)])):(re(),pe("div",{key:1,class:Z(["text-center p-4 rounded-lg border border-dashed",[t.themeClasses.sidebarBg,t.themeClasses.accentBorder,t.themeClasses.primaryText]])},c[4]||(c[4]=[O("p",{class:"italic"},"Loading Arcane Data...",-1)]),2))],2)],2))}},lS=Rn(aS,[["__scopeId","data-v-cd886d5e"]]),cS={__name:"ResearchView",props:{themeClasses:{type:Object,required:!0,default:()=>({primaryBg:"bg-gray-950",primaryText:"text-yellow-300",accentBorder:"border-yellow-600",sidebarBg:"bg-violet-950",activeMenuBg:"bg-green-800"})}},setup(n){const e=n,{themeClasses:t}=e;return console.log("ResearchView: Component loaded."),(r,s)=>(re(),pe("section",{class:Z([ve(t).sidebarBg,ve(t).primaryText,ve(t).accentBorder,"p-6 rounded-lg shadow-xl border"])},[O("h2",{class:Z(["text-3xl font-serif mb-6 border-b pb-3",[ve(t).primaryText,ve(t).accentBorder]])}," Research ",2),O("p",{class:Z(["text-lg",ve(t).primaryText])}," Uncover forgotten spells and ancient technologies. ",2),O("p",{class:Z(["text-sm mt-4",ve(t).primaryText])},"This section will contain various research projects, their costs, and effects.",2)],2))}},uS=Rn(cS,[["__scopeId","data-v-675a273d"]]),hS={__name:"ExpeditionsView",props:{themeClasses:{type:Object,required:!0,default:()=>({primaryBg:"bg-gray-950",primaryText:"text-yellow-300",accentBorder:"border-yellow-600",sidebarBg:"bg-violet-950",activeMenuBg:"bg-green-800"})}},setup(n){const e=n,{themeClasses:t}=e;return console.log("ExpeditionsView: Component loaded."),(r,s)=>(re(),pe("section",{class:Z([ve(t).primaryBg,ve(t).primaryText,ve(t).accentBorder,"p-6 rounded-lg shadow-xl border"])},[O("h2",{class:Z(["text-3xl font-serif mb-6 border-b pb-3",[ve(t).primaryText,ve(t).accentBorder]])}," Expeditions ",2),O("p",{class:Z(["text-lg",ve(t).primaryText])}," Send your scholars on perilous journeys to retrieve rare artifacts and knowledge. ",2),O("p",{class:Z(["text-sm mt-4",ve(t).primaryText])},"Manage your expeditions, track their progress, and claim rewards here.",2)],2))}},dS=Rn(hS,[["__scopeId","data-v-9c681b39"]]),fS={__name:"InventoryView",props:{themeClasses:{type:Object,required:!0,default:()=>({primaryBg:"bg-gray-950",primaryText:"text-yellow-300",accentBorder:"border-yellow-600",sidebarBg:"bg-violet-950",activeMenuBg:"bg-green-800"})}},setup(n){const e=n,{themeClasses:t}=e;return console.log("InventoryView: Component loaded."),(r,s)=>(re(),pe("section",{class:Z([ve(t).primaryBg,ve(t).primaryText,ve(t).accentBorder,"p-6 rounded-lg shadow-xl border"])},[O("h2",{class:Z(["text-3xl font-serif mb-6 border-b pb-3",[ve(t).primaryText,ve(t).accentBorder]])}," Inventory ",2),O("p",{class:Z(["text-lg",ve(t).primaryText])}," Behold your collected treasures and resources. ",2),O("p",{class:Z(["text-sm mt-4",ve(t).primaryText])},"This section will display all your acquired items, resources, and their quantities.",2)],2))}},pS=Rn(fS,[["__scopeId","data-v-d4a9dca2"]]),gS={__name:"SkillTreeView",props:{themeClasses:{type:Object,required:!0,default:()=>({primaryBg:"bg-gray-950",primaryText:"text-yellow-300",accentBorder:"border-yellow-600",sidebarBg:"bg-violet-950",activeMenuBg:"bg-green-800"})}},setup(n){const e=n,{themeClasses:t}=e;return console.log("SkillTreeView: Component loaded."),(r,s)=>(re(),pe("section",{class:Z([ve(t).primaryBg,ve(t).primaryText,ve(t).accentBorder,"p-6 rounded-lg shadow-xl border"])},[O("h2",{class:Z(["text-3xl font-serif mb-6 border-b pb-3",[ve(t).primaryText,ve(t).accentBorder]])}," Skill Tree ",2),O("p",{class:Z(["text-lg",ve(t).primaryText])}," Forge your destiny by mastering powerful skills and abilities. ",2),O("p",{class:Z(["text-sm mt-4",ve(t).primaryText])},"Invest your hard-earned skill points to unlock new capabilities and enhance existing ones.",2)],2))}},mS=Rn(gS,[["__scopeId","data-v-20e61295"]]),_S={__name:"ClassificationView",props:{themeClasses:{type:Object,required:!0,default:()=>({primaryBg:"bg-gray-950",primaryText:"text-yellow-300",accentBorder:"border-yellow-600",sidebarBg:"bg-violet-950",activeMenuBg:"bg-green-800"})}},setup(n){const e=n,{themeClasses:t}=e;return console.log("ClassificationView: Component loaded."),(r,s)=>(re(),pe("section",{class:Z([ve(t).primaryBg,ve(t).primaryText,ve(t).accentBorder,"p-6 rounded-lg shadow-xl border"])},[O("h2",{class:Z(["text-3xl font-serif mb-6 border-b pb-3",[ve(t).primaryText,ve(t).accentBorder]])}," Classification ",2),O("p",{class:Z(["text-lg",ve(t).primaryText])}," Organize and categorize your vast knowledge and discoveries. ",2),O("p",{class:Z(["text-sm mt-4",ve(t).primaryText])},"This section helps you keep track of all the arcane secrets you've uncovered.",2)],2))}},yS=Rn(_S,[["__scopeId","data-v-02a1b9f0"]]),vS={class:"flex items-center space-x-4"},TS={class:"text-lg"},wS={class:"font-bold text-yellow-100 text-2xl"},ES=["disabled"],IS={class:"flex flex-1 overflow-hidden"},bS=["title"],AS=["onClick"],SS=["title"],CS={key:0,class:"whitespace-nowrap overflow-hidden"},RS={__name:"MainGameComponent",props:{userId:{type:String,required:!0},characterId:{type:String,required:!0}},emits:["returnToCharacterSelect"],setup(n,{emit:e}){const t=n,r=e,s=Ue(0),i=Ue(0),a=Ue({name:"",faction:"",specialty:"",prestige:0}),l=Ue([]),c=Ue("sanctum"),h=Ue(!1),f=Ue(!1),g=Ue(0),m=ls(),A=Ri(),x=typeof __app_id<"u"?__app_id:"default-app-id",P=si(()=>{const{faction:ie,specialty:J}=a.value;let L="bg-gray-950",he="text-yellow-300",Fe="bg-violet-900",Me="border-yellow-600",me="bg-violet-950",Ae="bg-green-800";return ie==="Lumen"?J==="Arcane"?(L="bg-white",he="text-blue-900",Fe="bg-amber-500",Me="border-blue-500",me="bg-blue-50",Ae="bg-blue-300"):J==="Alchemist"?(L="bg-gray-50",he="text-green-900",Fe="bg-lime-600",Me="border-green-700",me="bg-lime-50",Ae="bg-lime-300"):(L="bg-gray-100",he="text-gray-800",Fe="bg-amber-500",Me="border-amber-700",me="bg-amber-100",Ae="bg-amber-300"):ie==="Umbra"&&(J==="Arcane"?(L="bg-black",he="text-lime-400",Fe="bg-purple-950",Me="border-lime-500",me="bg-purple-900",Ae="bg-lime-700"):J==="Alchemist"&&(L="bg-red-950",he="text-red-300",Fe="bg-red-800",Me="border-red-600",me="bg-red-900",Ae="bg-red-700")),{primaryBg:L,primaryText:he,headerBg:Fe,accentBorder:Me,sidebarBg:me,activeMenuBg:Ae}}),M=()=>{f.value=!f.value},q=ie=>{const{faction:J,specialty:L}=a.value;let he=["Novice Whispers","Apprentice Glyphs","Adept's Tomes","Mystic Runes","Etheric Weavings","Celestial Charts","Planar Bindings","Chronomancer's Texts","Abjurer's Wards","Transmuter's Circles","Grandmaster's Codex","Archmage's Grimoire","Aetheric Formulas","Cosmic Inscriptions","Reality Equations","Void Manuscripts","Primordial Truths","Ascendant Doctrines","God-Hand Schematics","Nexus of All Knowledge"];return J==="Lumen"?L==="Arcane"?he=["Solar Inscriptions","Starfire Studies","Aetheric Lumina","Ascendant Cantrips","Chalice of Radiance","Empyrean Scrolls","Divine Geometry","Sunsong Orbs","Sanctified Wards","Radiant Transcriptions","The Holy Codex","High Archon's Primer","Light-Form Formulas","Cosmic Alignment","Edicts of Truth","Ethereal Scripts","Primal Genesis","Edicts of the Source","Schema of Creation","Heart of the Cosmos"]:L==="Alchemist"&&(he=["Bright Concoctions","Verdant Formulas","Golden Retorts","Elixirs of Life","Vials of Purity","Reagent Catalysts","Alchemical Transmutations","Crystals of Growth","Stable Solutions","The Great Work","Philosopher's Stone","Magnum Opus","Homunculus Formulas","Symphony of Elements","Apothecary's Vault","True Essences","Materia Prima","The Unbreakable Bond","Perfect Synthesis","Wellspring of Vitality"]):J==="Umbra"&&(L==="Arcane"?he=["Shadowed Whispers","Nocturnal Glyphs","Voidweaver Texts","Ebon Incantations","Sepulchral Weavings","Forbidden Scrolls","The Black Geometry","Moonshard Orbs","Cursed Wards","Malefic Transcriptions","The Shadow Codex","Necromancer's Grimoire","Dark Matter Formulas","Cosmic Discord","Equations of Decay","Void Manuscripts","Primal Entropy","Doctrines of the End","Schema of Annihilation","Heart of the Void"]:L==="Alchemist"&&(he=["Crimson Brews","Corrupted Essences","Blackened Crucibles","Tinctures of Dread","Sanguine Phials","Venomous Catalysts","Vile Transmutations","Crystals of Stasis","Unstable Solutions","The Lesser Work","Blood Stone","Abyss Opus","Gargoyle Formulas","Dissonant Elements","Poisoner's Vault","Dark Essences","Materia Tenebrae","The Broken Bond","Failed Synthesis","Wellspring of Pestilence"])),he[ie]||`Esoteric Tier ${ie+1}`},N=()=>{const{faction:ie,specialty:J}=a.value;let L=["Conduits","Scrolls","Crystals","Orbs"];return ie==="Lumen"?J==="Arcane"?L=["Light Channels","Sunstone Tablets","Prismatic Focus","Aether Orbs"]:J==="Alchemist"&&(L=["Flow Regulators","Reagent Formulas","Growth Crystals","Stabilizing Orbs"]):ie==="Umbra"&&(J==="Arcane"?L=["Shadow Conduits","Ebon Runes","Void Shards","Lunar Orbs"]:J==="Alchemist"&&(L=["Corrupting Vents","Necrotic Pages","Binding Agents","Decay Orbs"])),L},W=()=>{const ie=[],J=N();for(let L=0;L<20;L++){const he=Math.pow(1.8,L),Fe=Math.pow(10,L),Me=20+L*20;ie.push({name:`Tier ${L+1}: ${q(L)}`,unlocked:L===0,multipliers:J.map((me,Ae)=>({level:0,maxLevel:Me,baseCost:(10+Ae*40)*Fe,costMultiplier:1.15+L*.01,baseEffect:(.1+Ae*.4)*he,effectMultiplier:1.05+L*.005,name:me}))})}return ie},Q=si(()=>{let ie=0;return l.value.forEach(J=>{J.unlocked&&J.multipliers.forEach(L=>{L.level>0&&(ie+=L.baseEffect*Math.pow(L.effectMultiplier,L.level-1))})}),ie}),Ie=()=>{s.value+=Q.value||1},Pe=(ie,J)=>{const L=l.value[ie]?.multipliers[J];return L?L.baseCost*Math.pow(L.costMultiplier,L.level):1/0},b=({tierIndex:ie,multiplierIndex:J})=>{const L=l.value[ie],he=L?.multipliers[J];if(!he||he.level>=he.maxLevel)return;const Fe=Pe(ie,J);s.value>=Fe&&(s.value-=Fe,he.level+=1,he.level===he.maxLevel&&L.multipliers.every(me=>me.level===me.maxLevel)&&l.value[ie+1]&&(l.value[ie+1].unlocked=!0),v())},_=()=>{const ie=l.value[g.value],J=l.value[g.value+1];ie&&ie.multipliers.every(L=>L.level===L.maxLevel)&&J&&J.unlocked&&(g.value+=1,v())},v=async()=>{if(h.value=!0,!m.currentUser||!t.characterId)return;const ie=$o(A,`artifacts/${x}/users/${m.currentUser.uid}/characters`,t.characterId),J={knowledge:s.value,prestige:a.value.prestige,currentTierIndex:g.value,multiplierTiers:l.value.map(L=>({unlocked:L.unlocked,levels:L.multipliers.map(he=>he.level)})),lastSaved:Oe.now()};try{await uA(ie,J,{merge:!0})}catch(L){console.error("Error saving game progress:",L)}finally{h.value=!1}},E=async()=>{if(!m.currentUser||!t.characterId)return;const ie=$o(A,`artifacts/${x}/users/${m.currentUser.uid}/characters`,t.characterId);try{const J=await lA(ie);if(J.exists()){const L=J.data();a.value.name=L.name||"Scholar",a.value.faction=L.faction||"",a.value.specialty=L.specialty||"",a.value.prestige=L.prestige||0,g.value=L.currentTierIndex||0;const he=W();L.multiplierTiers&&L.multiplierTiers.forEach((Me,me)=>{he[me]&&(he[me].unlocked=Me.unlocked,Me.levels.forEach((Ae,Cr)=>{he[me].multipliers[Cr]&&(he[me].multipliers[Cr].level=Ae)}))}),l.value=he;const Fe=L.knowledge||0;if(L.lastSaved&&Q.value>0){const Me=(new Date().getTime()-L.lastSaved.toDate().getTime())/1e3;s.value=Me>0?Fe+Me*Q.value:Fe}else s.value=Fe;i.value=s.value}else l.value=W(),s.value=0,i.value=0,g.value=0}catch(J){console.error("Error loading game progress:",J),l.value=W()}};let I=null;Hs(s,ie=>{I&&cancelAnimationFrame(I);const J=()=>{const L=ie-i.value,he=L/20;Math.abs(L)<.01?(i.value=ie,I=null):(i.value+=he,I=requestAnimationFrame(J))};J()});const C=async()=>{await v(),await m.signOut()},T=async()=>{await v(),r("returnToCharacterSelect")};let Ye=null;pi(()=>{E(),Ye=setInterval(()=>{Q.value>0&&(s.value+=Q.value)},1e3)}),Yl(async()=>{Ye&&clearInterval(Ye),I&&cancelAnimationFrame(I),await v()});const qt=[{id:"sanctum",name:"Sanctum / Home",icon:"🏠"},{id:"research",name:"Research",icon:"🔬"},{id:"expeditions",name:"Expeditions",icon:"🗺️"},{id:"inventory",name:"Inventory",icon:"🧰"},{id:"skill-tree",name:"Skill Tree",icon:"🌳"},{id:"classification",name:"Classification",icon:"📜"}];return(ie,J)=>(re(),pe("div",{class:Z([P.value.primaryBg,P.value.primaryText,"flex flex-col h-screen w-full font-sans overflow-hidden"])},[O("header",{class:Z([P.value.headerBg,"shadow-lg border-b",P.value.accentBorder,"flex items-center justify-between p-4"])},[J[1]||(J[1]=O("h1",{class:"text-3xl font-serif text-yellow-100 tracking-wide"},"The Arcane Scholar’s Legacy",-1)),O("div",vS,[O("span",TS,[J[0]||(J[0]=dr("Knowledge: ",-1)),O("span",wS,De(i.value.toFixed(2)),1)]),O("button",{onClick:v,disabled:h.value,class:"bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"},De(h.value?"Saving...":"Save Progress"),9,ES),O("button",{onClick:T,class:"bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"}," Back to Characters "),O("button",{onClick:C,class:"bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"}," Log Out ")])],2),O("div",IS,[O("nav",{class:Z([P.value.sidebarBg,"transition-all duration-300 p-4 border-r",P.value.accentBorder,"flex flex-col space-y-3",f.value?"w-20":"w-1/5 min-w-[180px]"])},[O("div",{class:Z(["flex items-center",f.value?"justify-center":"justify-between"])},[O("h3",{class:Z(["text-xl font-serif text-yellow-100 pb-2 mb-4 transition-opacity border-b",P.value.accentBorder,f.value?"opacity-0 h-0 p-0 overflow-hidden":"opacity-100"])}," Sanctum Menu ",2),O("button",{onClick:M,class:Z(["p-2 rounded-full hover:opacity-80 transition duration-150 flex-shrink-0",P.value.primaryText]),title:f.value?"Expand Menu":"Collapse Menu"},[(re(),pe("svg",{xmlns:"http://www.w3.org/2000/svg",class:Z(["w-6 h-6 transform transition-transform duration-300",f.value?"rotate-180":""]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},J[2]||(J[2]=[O("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"},null,-1)]),2))],10,bS)],2),(re(),pe(xt,null,Xl(qt,L=>O("button",{key:L.id,onClick:he=>c.value=L.id,class:Z(["text-left py-2 rounded-lg transition duration-200 ease-in-out flex items-center",c.value===L.id?[P.value.activeMenuBg,P.value.primaryText,"shadow-inner"]:"hover:opacity-80",P.value.primaryText,f.value?"justify-center px-0":"px-4 space-x-3"])},[O("span",{class:Z(["text-2xl flex-shrink-0",f.value?"mx-auto":""]),title:f.value?L.name:""},De(L.icon),11,SS),f.value?_t("",!0):(re(),pe("span",CS,De(L.name),1))],10,AS)),64))],2),O("main",{class:Z(["flex-1 p-6 overflow-y-auto custom-scrollbar",P.value.primaryBg])},[c.value==="sanctum"?(re(),Mt(lS,{key:0,knowledge:s.value,multiplierTiers:l.value,passiveKnowledgeGain:Q.value,characterDetails:a.value,"theme-classes":P.value,currentTierIndex:g.value,onGenerateKnowledge:Ie,onBuyMultiplier:b,onAdvanceTier:_},null,8,["knowledge","multiplierTiers","passiveKnowledgeGain","characterDetails","theme-classes","currentTierIndex"])):c.value==="research"?(re(),Mt(uS,{key:1,"theme-classes":P.value},null,8,["theme-classes"])):c.value==="expeditions"?(re(),Mt(dS,{key:2,"theme-classes":P.value},null,8,["theme-classes"])):c.value==="inventory"?(re(),Mt(pS,{key:3,"theme-classes":P.value},null,8,["theme-classes"])):c.value==="skill-tree"?(re(),Mt(mS,{key:4,"theme-classes":P.value},null,8,["theme-classes"])):c.value==="classification"?(re(),Mt(yS,{key:5,"theme-classes":P.value},null,8,["theme-classes"])):_t("",!0)],2)])],2))}},PS=Rn(RS,[["__scopeId","data-v-972ca0af"]]),xS={id:"app"},kS={key:0,class:"flex items-center justify-center h-screen w-full bg-gray-950 text-yellow-300 text-3xl font-serif"},VS={key:1},DS={__name:"App",setup(n){const e=ls();Ri();const t=Ue(null),r=Ue(!1),s=Ue(null),i=Ue("loading");pi(()=>{Cp(e,f=>{t.value=f,r.value=!0,console.log("App.vue: Auth state changed. User:",f?f.uid:"None"),console.log("App.vue: Is app ready?",r.value)})}),Hs([t,r,s],([f,g,m])=>{g&&(f?m?i.value="game":i.value="characterSelection":i.value="login")});const a=f=>{s.value=f,i.value="game",console.log("App.vue: Character selected with ID:",f)},l=()=>{i.value="characterCreation",console.log("App.vue: Starting new character creation. `currentView` is now:",i.value)},c=f=>{s.value=f,i.value="game",console.log("App.vue: New character created with ID:",f)},h=()=>{s.value=null,i.value="characterSelection",console.log("App.vue: Returning to character selection.")};return(f,g)=>(re(),pe("div",xS,[r.value?(re(),pe("div",VS,[i.value==="login"?(re(),Mt(yA,{key:0})):i.value==="characterSelection"?(re(),Mt(QA,{key:`selection-${t.value.uid}`,onCharacterSelected:a,onStartNewCharacterCreation:l})):i.value==="characterCreation"?(re(),Mt(MA,{key:`creation-${t.value.uid}`,onCharacterCreated:c,onReturnToSelect:h})):i.value==="game"?(re(),Mt(PS,{key:`game-${s.value}`,userId:t.value.uid,characterId:s.value,onReturnToCharacterSelect:h},null,8,["userId","characterId"])):_t("",!0)])):(re(),pe("div",kS," Loading... "))]))}};var NS="firebase",OS="12.0.0";/**
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
 */qn(NS,OS,"app");const MS={apiKey:"AIzaSyARajg1PBZ0n8gyWrrpWynr8298-pmm0l4",authDomain:"arcane-scholars-legacy.firebaseapp.com",projectId:"arcane-scholars-legacy",storageBucket:"arcane-scholars-legacy.firebasestorage.app",messagingSenderId:"976593685731",appId:"1:976593685731:web:bfa95e8221f0b76f27c9d6",measurementId:"G-W3VDVWF7LF"},Ls=typeof __firebase_config<"u"&&Object.keys(JSON.parse(__firebase_config)).length>0?JSON.parse(__firebase_config):MS;const Hd=typeof __initial_auth_token<"u"?__initial_auth_token:null;let Xa,Xs,wm;console.log("main.js: Starting Firebase initialization process...");console.log("main.js: Using firebaseConfig:",Ls);if(Ls&&Object.keys(Ls).length>0&&Ls.apiKey!=="YOUR_FIREBASE_API_KEY")try{Xa=sp(Ls),Xs=ls(Xa),wm=Ri(Xa),console.log("Firebase initialized successfully.")}catch(n){console.error("Failed to initialize Firebase:",n)}else console.warn("Firebase configuration is missing or placeholder. Firebase will not be fully initialized."),console.warn('Please replace "YOUR_FIREBASE_API_KEY", "YOUR_PROJECT_ID", etc., with your actual Firebase project credentials for local development.');async function LS(){if(!Xs){console.warn("Firebase Auth not initialized, skipping authentication.");return}try{Hd?(await Fw(Xs,Hd),console.log("Signed in with custom token.")):(await Dw(Xs),console.log("Signed in anonymously."))}catch(n){console.error("Firebase authentication error:",n)}}const Jc=hv(DS);Jc.config.globalProperties.$auth=Xs;Jc.config.globalProperties.$db=wm;LS().then(()=>{Jc.mount("#app")});
