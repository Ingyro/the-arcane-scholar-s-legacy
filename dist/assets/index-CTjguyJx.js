(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Nl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ae={},Fr=[],Ht=()=>{},Hm=()=>!1,$o=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ol=n=>n.startsWith("onUpdate:"),ft=Object.assign,Ml=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},zm=Object.prototype.hasOwnProperty,Ee=(n,e)=>zm.call(n,e),le=Array.isArray,Ur=n=>Bo(n)==="[object Map]",qd=n=>Bo(n)==="[object Set]",he=n=>typeof n=="function",Ue=n=>typeof n=="string",Zn=n=>typeof n=="symbol",xe=n=>n!==null&&typeof n=="object",Hd=n=>(xe(n)||he(n))&&he(n.then)&&he(n.catch),zd=Object.prototype.toString,Bo=n=>zd.call(n),Gm=n=>Bo(n).slice(8,-1),Gd=n=>Bo(n)==="[object Object]",Ll=n=>Ue(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ms=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Wm=/-(\w)/g,Hn=jo(n=>n.replace(Wm,(e,t)=>t?t.toUpperCase():"")),Km=/\B([A-Z])/g,Er=jo(n=>n.replace(Km,"-$1").toLowerCase()),Wd=jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ra=jo(n=>n?`on${Wd(n)}`:""),Fn=(n,e)=>!Object.is(n,e),Yi=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ya=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Xa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let $u;const qo=()=>$u||($u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fl(n){if(le(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ue(r)?Xm(r):Fl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(n)||xe(n))return n}const Qm=/;(?![^(]*\))/g,Jm=/:([^]+)/,Ym=/\/\*[^]*?\*\//g;function Xm(n){const e={};return n.replace(Ym,"").split(Qm).forEach(t=>{if(t){const r=t.split(Jm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function cn(n){let e="";if(Ue(n))e=n;else if(le(n))for(let t=0;t<n.length;t++){const r=cn(n[t]);r&&(e+=r+" ")}else if(xe(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e_=Nl(Zm);function Kd(n){return!!n||n===""}const Qd=n=>!!(n&&n.__v_isRef===!0),De=n=>Ue(n)?n:n==null?"":le(n)||xe(n)&&(n.toString===zd||!he(n.toString))?Qd(n)?De(n.value):JSON.stringify(n,Jd,2):String(n),Jd=(n,e)=>Qd(e)?Jd(n,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Ca(r,i)+" =>"]=s,t),{})}:qd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ca(t))}:Zn(e)?Ca(e):xe(e)&&!le(e)&&!Gd(e)?String(e):e,Ca=(n,e="")=>{var t;return Zn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pt;class t_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pt,!e&&pt&&(this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=pt;try{return pt=this,e()}finally{pt=t}}}on(){++this._on===1&&(this.prevScope=pt,pt=this)}off(){this._on>0&&--this._on===0&&(pt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function n_(){return pt}let Se;const Pa=new WeakSet;class Yd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pt&&pt.active&&pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pa.has(this)&&(Pa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bu(this),ef(this);const e=Se,t=Ot;Se=this,Ot=!0;try{return this.fn()}finally{tf(this),Se=e,Ot=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bl(e);this.deps=this.depsTail=void 0,Bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Za(this)&&this.run()}get dirty(){return Za(this)}}let Xd=0,Ls,Fs;function Zd(n,e=!1){if(n.flags|=8,e){n.next=Fs,Fs=n;return}n.next=Ls,Ls=n}function Ul(){Xd++}function $l(){if(--Xd>0)return;if(Fs){let e=Fs;for(Fs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ls;){let e=Ls;for(Ls=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function ef(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tf(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Bl(r),r_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Za(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(nf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function nf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Js)||(n.globalVersion=Js,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Za(n))))return;n.flags|=2;const e=n.dep,t=Se,r=Ot;Se=n,Ot=!0;try{ef(n);const s=n.fn(n._value);(e.version===0||Fn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Se=t,Ot=r,tf(n),n.flags&=-3}}function Bl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Bl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function r_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ot=!0;const rf=[];function gn(){rf.push(Ot),Ot=!1}function mn(){const n=rf.pop();Ot=n===void 0?!0:n}function Bu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Se;Se=void 0;try{e()}finally{Se=t}}}let Js=0;class s_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Se||!Ot||Se===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Se)t=this.activeLink=new s_(Se,this),Se.deps?(t.prevDep=Se.depsTail,Se.depsTail.nextDep=t,Se.depsTail=t):Se.deps=Se.depsTail=t,sf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Se.depsTail,t.nextDep=void 0,Se.depsTail.nextDep=t,Se.depsTail=t,Se.deps===t&&(Se.deps=r)}return t}trigger(e){this.version++,Js++,this.notify(e)}notify(e){Ul();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{$l()}}}function sf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)sf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const el=new WeakMap,pr=Symbol(""),tl=Symbol(""),Ys=Symbol("");function it(n,e,t){if(Ot&&Se){let r=el.get(n);r||el.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new jl),s.map=r,s.key=t),s.track()}}function on(n,e,t,r,s,i){const a=el.get(n);if(!a){Js++;return}const l=c=>{c&&c.trigger()};if(Ul(),e==="clear")a.forEach(l);else{const c=le(n),h=c&&Ll(t);if(c&&t==="length"){const f=Number(r);a.forEach((g,_)=>{(_==="length"||_===Ys||!Zn(_)&&_>=f)&&l(g)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(Ys)),e){case"add":c?h&&l(a.get("length")):(l(a.get(pr)),Ur(n)&&l(a.get(tl)));break;case"delete":c||(l(a.get(pr)),Ur(n)&&l(a.get(tl)));break;case"set":Ur(n)&&l(a.get(pr));break}}$l()}function kr(n){const e=we(n);return e===n?e:(it(e,"iterate",Ys),Pt(n)?e:e.map(Ye))}function Ho(n){return it(n=we(n),"iterate",Ys),n}const i_={__proto__:null,[Symbol.iterator](){return xa(this,Symbol.iterator,Ye)},concat(...n){return kr(this).concat(...n.map(e=>le(e)?kr(e):e))},entries(){return xa(this,"entries",n=>(n[1]=Ye(n[1]),n))},every(n,e){return rn(this,"every",n,e,void 0,arguments)},filter(n,e){return rn(this,"filter",n,e,t=>t.map(Ye),arguments)},find(n,e){return rn(this,"find",n,e,Ye,arguments)},findIndex(n,e){return rn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return rn(this,"findLast",n,e,Ye,arguments)},findLastIndex(n,e){return rn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return rn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ka(this,"includes",n)},indexOf(...n){return ka(this,"indexOf",n)},join(n){return kr(this).join(n)},lastIndexOf(...n){return ka(this,"lastIndexOf",n)},map(n,e){return rn(this,"map",n,e,void 0,arguments)},pop(){return Cs(this,"pop")},push(...n){return Cs(this,"push",n)},reduce(n,...e){return ju(this,"reduce",n,e)},reduceRight(n,...e){return ju(this,"reduceRight",n,e)},shift(){return Cs(this,"shift")},some(n,e){return rn(this,"some",n,e,void 0,arguments)},splice(...n){return Cs(this,"splice",n)},toReversed(){return kr(this).toReversed()},toSorted(n){return kr(this).toSorted(n)},toSpliced(...n){return kr(this).toSpliced(...n)},unshift(...n){return Cs(this,"unshift",n)},values(){return xa(this,"values",Ye)}};function xa(n,e,t){const r=Ho(n),s=r[e]();return r!==n&&!Pt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const o_=Array.prototype;function rn(n,e,t,r,s,i){const a=Ho(n),l=a!==n&&!Pt(n),c=a[e];if(c!==o_[e]){const g=c.apply(n,i);return l?Ye(g):g}let h=t;a!==n&&(l?h=function(g,_){return t.call(this,Ye(g),_,n)}:t.length>2&&(h=function(g,_){return t.call(this,g,_,n)}));const f=c.call(a,h,r);return l&&s?s(f):f}function ju(n,e,t,r){const s=Ho(n);let i=t;return s!==n&&(Pt(n)?t.length>3&&(i=function(a,l,c){return t.call(this,a,l,c,n)}):i=function(a,l,c){return t.call(this,a,Ye(l),c,n)}),s[e](i,...r)}function ka(n,e,t){const r=we(n);it(r,"iterate",Ys);const s=r[e](...t);return(s===-1||s===!1)&&Gl(t[0])?(t[0]=we(t[0]),r[e](...t)):s}function Cs(n,e,t=[]){gn(),Ul();const r=we(n)[e].apply(n,t);return $l(),mn(),r}const a_=Nl("__proto__,__v_isRef,__isVue"),of=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zn));function l_(n){Zn(n)||(n=String(n));const e=we(this);return it(e,"has",n),e.hasOwnProperty(n)}class af{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?y_:hf:i?uf:cf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=le(e);if(!s){let c;if(a&&(c=i_[t]))return c;if(t==="hasOwnProperty")return l_}const l=Reflect.get(e,t,at(e)?e:r);return(Zn(t)?of.has(t):a_(t))||(s||it(e,"get",t),i)?l:at(l)?a&&Ll(t)?l:l.value:xe(l)?s?df(l):Hl(l):l}}class lf extends af{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=zn(i);if(!Pt(r)&&!zn(r)&&(i=we(i),r=we(r)),!le(e)&&at(i)&&!at(r))return c?!1:(i.value=r,!0)}const a=le(e)&&Ll(t)?Number(t)<e.length:Ee(e,t),l=Reflect.set(e,t,r,at(e)?e:s);return e===we(s)&&(a?Fn(r,i)&&on(e,"set",t,r):on(e,"add",t,r)),l}deleteProperty(e,t){const r=Ee(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&on(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Zn(t)||!of.has(t))&&it(e,"has",t),r}ownKeys(e){return it(e,"iterate",le(e)?"length":pr),Reflect.ownKeys(e)}}class c_ extends af{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const u_=new lf,h_=new c_,d_=new lf(!0);const nl=n=>n,ji=n=>Reflect.getPrototypeOf(n);function f_(n,e,t){return function(...r){const s=this.__v_raw,i=we(s),a=Ur(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),f=t?nl:e?fo:Ye;return!e&&it(i,"iterate",c?tl:pr),{next(){const{value:g,done:_}=h.next();return _?{value:g,done:_}:{value:l?[f(g[0]),f(g[1])]:f(g),done:_}},[Symbol.iterator](){return this}}}}function qi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function p_(n,e){const t={get(s){const i=this.__v_raw,a=we(i),l=we(s);n||(Fn(s,l)&&it(a,"get",s),it(a,"get",l));const{has:c}=ji(a),h=e?nl:n?fo:Ye;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&it(we(s),"iterate",pr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=we(i),l=we(s);return n||(Fn(s,l)&&it(a,"has",s),it(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=we(l),h=e?nl:n?fo:Ye;return!n&&it(c,"iterate",pr),l.forEach((f,g)=>s.call(i,h(f),h(g),a))}};return ft(t,n?{add:qi("add"),set:qi("set"),delete:qi("delete"),clear:qi("clear")}:{add(s){!e&&!Pt(s)&&!zn(s)&&(s=we(s));const i=we(this);return ji(i).has.call(i,s)||(i.add(s),on(i,"add",s,s)),this},set(s,i){!e&&!Pt(i)&&!zn(i)&&(i=we(i));const a=we(this),{has:l,get:c}=ji(a);let h=l.call(a,s);h||(s=we(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?Fn(i,f)&&on(a,"set",s,i):on(a,"add",s,i),this},delete(s){const i=we(this),{has:a,get:l}=ji(i);let c=a.call(i,s);c||(s=we(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&on(i,"delete",s,void 0),h},clear(){const s=we(this),i=s.size!==0,a=s.clear();return i&&on(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=f_(s,n,e)}),t}function ql(n,e){const t=p_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ee(t,s)&&s in r?t:r,s,i)}const g_={get:ql(!1,!1)},m_={get:ql(!1,!0)},__={get:ql(!0,!1)};const cf=new WeakMap,uf=new WeakMap,hf=new WeakMap,y_=new WeakMap;function v_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w_(n){return n.__v_skip||!Object.isExtensible(n)?0:v_(Gm(n))}function Hl(n){return zn(n)?n:zl(n,!1,u_,g_,cf)}function E_(n){return zl(n,!1,d_,m_,uf)}function df(n){return zl(n,!0,h_,__,hf)}function zl(n,e,t,r,s){if(!xe(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=w_(n);if(i===0)return n;const a=s.get(n);if(a)return a;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function $r(n){return zn(n)?$r(n.__v_raw):!!(n&&n.__v_isReactive)}function zn(n){return!!(n&&n.__v_isReadonly)}function Pt(n){return!!(n&&n.__v_isShallow)}function Gl(n){return n?!!n.__v_raw:!1}function we(n){const e=n&&n.__v_raw;return e?we(e):n}function T_(n){return!Ee(n,"__v_skip")&&Object.isExtensible(n)&&Ya(n,"__v_skip",!0),n}const Ye=n=>xe(n)?Hl(n):n,fo=n=>xe(n)?df(n):n;function at(n){return n?n.__v_isRef===!0:!1}function je(n){return I_(n,!1)}function I_(n,e){return at(n)?n:new b_(n,e)}class b_{constructor(e,t){this.dep=new jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:we(e),this._value=t?e:Ye(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Pt(e)||zn(e);e=r?e:we(e),Fn(e,t)&&(this._rawValue=e,this._value=r?e:Ye(e),this.dep.trigger())}}function A_(n){return at(n)?n.value:n}const S_={get:(n,e,t)=>e==="__v_raw"?n:A_(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return at(s)&&!at(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function ff(n){return $r(n)?n:new Proxy(n,S_)}class R_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return Zd(this,!0),!0}get value(){const e=this.dep.track();return nf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function C_(n,e,t=!1){let r,s;return he(n)?r=n:(r=n.get,s=n.set),new R_(r,s,t)}const Hi={},po=new WeakMap;let cr;function P_(n,e=!1,t=cr){if(t){let r=po.get(t);r||po.set(t,r=[]),r.push(n)}}function x_(n,e,t=Ae){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=J=>s?J:Pt(J)||s===!1||s===0?an(J,1):an(J);let f,g,_,A,P=!1,k=!1;if(at(n)?(g=()=>n.value,P=Pt(n)):$r(n)?(g=()=>h(n),P=!0):le(n)?(k=!0,P=n.some(J=>$r(J)||Pt(J)),g=()=>n.map(J=>{if(at(J))return J.value;if($r(J))return h(J);if(he(J))return c?c(J,2):J()})):he(n)?e?g=c?()=>c(n,2):n:g=()=>{if(_){gn();try{_()}finally{mn()}}const J=cr;cr=f;try{return c?c(n,3,[A]):n(A)}finally{cr=J}}:g=Ht,e&&s){const J=g,ee=s===!0?1/0:s;g=()=>an(J(),ee)}const O=n_(),j=()=>{f.stop(),O&&O.active&&Ml(O.effects,f)};if(i&&e){const J=e;e=(...ee)=>{J(...ee),j()}}let N=k?new Array(n.length).fill(Hi):Hi;const z=J=>{if(!(!(f.flags&1)||!f.dirty&&!J))if(e){const ee=f.run();if(s||P||(k?ee.some((ne,E)=>Fn(ne,N[E])):Fn(ee,N))){_&&_();const ne=cr;cr=f;try{const E=[ee,N===Hi?void 0:k&&N[0]===Hi?[]:N,A];N=ee,c?c(e,3,E):e(...E)}finally{cr=ne}}}else f.run()};return l&&l(z),f=new Yd(g),f.scheduler=a?()=>a(z,!1):z,A=J=>P_(J,!1,f),_=f.onStop=()=>{const J=po.get(f);if(J){if(c)c(J,4);else for(const ee of J)ee();po.delete(f)}},e?r?z(!0):N=f.run():a?a(z.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function an(n,e=1/0,t){if(e<=0||!xe(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,at(n))an(n.value,e,t);else if(le(n))for(let r=0;r<n.length;r++)an(n[r],e,t);else if(qd(n)||Ur(n))n.forEach(r=>{an(r,e,t)});else if(Gd(n)){for(const r in n)an(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&an(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ci(n,e,t,r){try{return r?n(...r):n()}catch(s){zo(s,e,t)}}function Jt(n,e,t,r){if(he(n)){const s=ci(n,e,t,r);return s&&Hd(s)&&s.catch(i=>{zo(i,e,t)}),s}if(le(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Jt(n[i],e,t,r));return s}}function zo(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](n,c,h)===!1)return}l=l.parent}if(i){gn(),ci(i,null,10,[n,c,h]),mn();return}}k_(n,t,s,r,a)}function k_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const ht=[];let Bt=-1;const Br=[];let Vn=null,Vr=0;const pf=Promise.resolve();let go=null;function V_(n){const e=go||pf;return n?e.then(this?n.bind(this):n):e}function D_(n){let e=Bt+1,t=ht.length;for(;e<t;){const r=e+t>>>1,s=ht[r],i=Xs(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Wl(n){if(!(n.flags&1)){const e=Xs(n),t=ht[ht.length-1];!t||!(n.flags&2)&&e>=Xs(t)?ht.push(n):ht.splice(D_(e),0,n),n.flags|=1,gf()}}function gf(){go||(go=pf.then(_f))}function N_(n){le(n)?Br.push(...n):Vn&&n.id===-1?Vn.splice(Vr+1,0,n):n.flags&1||(Br.push(n),n.flags|=1),gf()}function qu(n,e,t=Bt+1){for(;t<ht.length;t++){const r=ht[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;ht.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function mf(n){if(Br.length){const e=[...new Set(Br)].sort((t,r)=>Xs(t)-Xs(r));if(Br.length=0,Vn){Vn.push(...e);return}for(Vn=e,Vr=0;Vr<Vn.length;Vr++){const t=Vn[Vr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Vn=null,Vr=0}}const Xs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function _f(n){try{for(Bt=0;Bt<ht.length;Bt++){const e=ht[Bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bt<ht.length;Bt++){const e=ht[Bt];e&&(e.flags&=-2)}Bt=-1,ht.length=0,mf(),go=null,(ht.length||Br.length)&&_f()}}let Ct=null,yf=null;function mo(n){const e=Ct;return Ct=n,yf=n&&n.type.__scopeId||null,e}function O_(n,e=Ct,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Xu(-1);const i=mo(e);let a;try{a=n(...s)}finally{mo(i),r._d&&Xu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function M_(n,e){if(Ct===null)return n;const t=Qo(Ct),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ae]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&an(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function ar(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(gn(),Jt(c,t,8,[n.el,l,n,e]),mn())}}const L_=Symbol("_vte"),F_=n=>n.__isTeleport;function Kl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Kl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function vf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Us(n,e,t,r,s=!1){if(le(n)){n.forEach((P,k)=>Us(P,e&&(le(e)?e[k]:e),t,r,s));return}if($s(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Us(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Qo(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,f=l.refs===Ae?l.refs={}:l.refs,g=l.setupState,_=we(g),A=g===Ae?()=>!1:P=>Ee(_,P);if(h!=null&&h!==c&&(Ue(h)?(f[h]=null,A(h)&&(g[h]=null)):at(h)&&(h.value=null)),he(c))ci(c,l,12,[a,f]);else{const P=Ue(c),k=at(c);if(P||k){const O=()=>{if(n.f){const j=P?A(c)?g[c]:f[c]:c.value;s?le(j)&&Ml(j,i):le(j)?j.includes(i)||j.push(i):P?(f[c]=[i],A(c)&&(g[c]=f[c])):(c.value=[i],n.k&&(f[n.k]=c.value))}else P?(f[c]=a,A(c)&&(g[c]=a)):k&&(c.value=a,n.k&&(f[n.k]=a))};a?(O.id=-1,yt(O,t)):O()}}}qo().requestIdleCallback;qo().cancelIdleCallback;const $s=n=>!!n.type.__asyncLoader,wf=n=>n.type.__isKeepAlive;function U_(n,e){Ef(n,"a",e)}function $_(n,e){Ef(n,"da",e)}function Ef(n,e,t=dt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Go(e,r,t),t){let s=t.parent;for(;s&&s.parent;)wf(s.parent.vnode)&&B_(r,e,t,s),s=s.parent}}function B_(n,e,t,r){const s=Go(e,n,r,!0);Ql(()=>{Ml(r[e],s)},t)}function Go(n,e,t=dt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{gn();const l=hi(t),c=Jt(e,t,n,a);return l(),mn(),c});return r?s.unshift(i):s.push(i),i}}const In=n=>(e,t=dt)=>{(!ei||n==="sp")&&Go(n,(...r)=>e(...r),t)},j_=In("bm"),ui=In("m"),q_=In("bu"),H_=In("u"),z_=In("bum"),Ql=In("um"),G_=In("sp"),W_=In("rtg"),K_=In("rtc");function Q_(n,e=dt){Go("ec",n,e)}const J_=Symbol.for("v-ndc");function Jl(n,e,t,r){let s;const i=t,a=le(n);if(a||Ue(n)){const l=a&&$r(n);let c=!1,h=!1;l&&(c=!Pt(n),h=zn(n),n=Ho(n)),s=new Array(n.length);for(let f=0,g=n.length;f<g;f++)s[f]=e(c?h?fo(Ye(n[f])):Ye(n[f]):n[f],f,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(xe(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(n[f],f,c,i)}}else s=[];return s}const rl=n=>n?jf(n)?Qo(n):rl(n.parent):null,Bs=ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>rl(n.parent),$root:n=>rl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>If(n),$forceUpdate:n=>n.f||(n.f=()=>{Wl(n.update)}),$nextTick:n=>n.n||(n.n=V_.bind(n.proxy)),$watch:n=>yy.bind(n)}),Va=(n,e)=>n!==Ae&&!n.__isScriptSetup&&Ee(n,e),Y_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;let h;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Va(r,e))return a[e]=1,r[e];if(s!==Ae&&Ee(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&Ee(h,e))return a[e]=3,i[e];if(t!==Ae&&Ee(t,e))return a[e]=4,t[e];sl&&(a[e]=0)}}const f=Bs[e];let g,_;if(f)return e==="$attrs"&&it(n.attrs,"get",""),f(n);if((g=l.__cssModules)&&(g=g[e]))return g;if(t!==Ae&&Ee(t,e))return a[e]=4,t[e];if(_=c.config.globalProperties,Ee(_,e))return _[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Va(s,e)?(s[e]=t,!0):r!==Ae&&Ee(r,e)?(r[e]=t,!0):Ee(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!t[a]||n!==Ae&&Ee(n,a)||Va(e,a)||(l=i[0])&&Ee(l,a)||Ee(r,a)||Ee(Bs,a)||Ee(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ee(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hu(n){return le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let sl=!0;function X_(n){const e=If(n),t=n.proxy,r=n.ctx;sl=!1,e.beforeCreate&&zu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:g,mounted:_,beforeUpdate:A,updated:P,activated:k,deactivated:O,beforeDestroy:j,beforeUnmount:N,destroyed:z,unmounted:J,render:ee,renderTracked:ne,renderTriggered:E,errorCaptured:m,serverPrefetch:v,expose:I,inheritAttrs:b,components:S,directives:w,filters:mt}=e;if(h&&Z_(h,r,null),a)for(const Ie in a){const ye=a[Ie];he(ye)&&(r[Ie]=ye.bind(t))}if(s){const Ie=s.call(t,t);xe(Ie)&&(n.data=Hl(Ie))}if(sl=!0,i)for(const Ie in i){const ye=i[Ie],xt=he(ye)?ye.bind(t,t):he(ye.get)?ye.get.bind(t,t):Ht,er=!he(ye)&&he(ye.set)?ye.set.bind(t):Ht,Zt=Hf({get:xt,set:er});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:$e=>Zt.value=$e})}if(l)for(const Ie in l)Tf(l[Ie],r,t,Ie);if(c){const Ie=he(c)?c.call(t):c;Reflect.ownKeys(Ie).forEach(ye=>{iy(ye,Ie[ye])})}f&&zu(f,n,"c");function ze(Ie,ye){le(ye)?ye.forEach(xt=>Ie(xt.bind(t))):ye&&Ie(ye.bind(t))}if(ze(j_,g),ze(ui,_),ze(q_,A),ze(H_,P),ze(U_,k),ze($_,O),ze(Q_,m),ze(K_,ne),ze(W_,E),ze(z_,N),ze(Ql,J),ze(G_,v),le(I))if(I.length){const Ie=n.exposed||(n.exposed={});I.forEach(ye=>{Object.defineProperty(Ie,ye,{get:()=>t[ye],set:xt=>t[ye]=xt,enumerable:!0})})}else n.exposed||(n.exposed={});ee&&n.render===Ht&&(n.render=ee),b!=null&&(n.inheritAttrs=b),S&&(n.components=S),w&&(n.directives=w),v&&vf(n)}function Z_(n,e,t=Ht){le(n)&&(n=il(n));for(const r in n){const s=n[r];let i;xe(s)?"default"in s?i=Xi(s.from||r,s.default,!0):i=Xi(s.from||r):i=Xi(s),at(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function zu(n,e,t){Jt(le(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Tf(n,e,t,r){let s=r.includes(".")?Mf(t,r):()=>t[r];if(Ue(n)){const i=e[n];he(i)&&Zi(s,i)}else if(he(n))Zi(s,n.bind(t));else if(xe(n))if(le(n))n.forEach(i=>Tf(i,e,t,r));else{const i=he(n.handler)?n.handler.bind(t):e[n.handler];he(i)&&Zi(s,i,n)}}function If(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>_o(c,h,a,!0)),_o(c,e,a)),xe(e)&&i.set(e,c),c}function _o(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&_o(n,i,t,!0),s&&s.forEach(a=>_o(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=ey[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const ey={data:Gu,props:Wu,emits:Wu,methods:xs,computed:xs,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:xs,directives:xs,watch:ny,provide:Gu,inject:ty};function Gu(n,e){return e?n?function(){return ft(he(n)?n.call(this,this):n,he(e)?e.call(this,this):e)}:e:n}function ty(n,e){return xs(il(n),il(e))}function il(n){if(le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ut(n,e){return n?[...new Set([].concat(n,e))]:e}function xs(n,e){return n?ft(Object.create(null),n,e):e}function Wu(n,e){return n?le(n)&&le(e)?[...new Set([...n,...e])]:ft(Object.create(null),Hu(n),Hu(e??{})):e}function ny(n,e){if(!n)return e;if(!e)return n;const t=ft(Object.create(null),n);for(const r in e)t[r]=ut(n[r],e[r]);return t}function bf(){return{app:null,config:{isNativeTag:Hm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ry=0;function sy(n,e){return function(r,s=null){he(r)||(r=ft({},r)),s!=null&&!xe(s)&&(s=null);const i=bf(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:ry++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Uy,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&he(f.install)?(a.add(f),f.install(h,...g)):he(f)&&(a.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,_){if(!c){const A=h._ceVNode||dn(r,s);return A.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(A,f,_),c=!0,h._container=f,f.__vue_app__=h,Qo(A.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Jt(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=jr;jr=h;try{return f()}finally{jr=g}}};return h}}let jr=null;function iy(n,e){if(dt){let t=dt.provides;const r=dt.parent&&dt.parent.provides;r===t&&(t=dt.provides=Object.create(r)),t[n]=e}}function Xi(n,e,t=!1){const r=Dy();if(r||jr){let s=jr?jr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&he(e)?e.call(r&&r.proxy):e}}const Af={},Sf=()=>Object.create(Af),Rf=n=>Object.getPrototypeOf(n)===Af;function oy(n,e,t,r=!1){const s={},i=Sf();n.propsDefaults=Object.create(null),Cf(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:E_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function ay(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=we(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let g=0;g<f.length;g++){let _=f[g];if(Wo(n.emitsOptions,_))continue;const A=e[_];if(c)if(Ee(i,_))A!==i[_]&&(i[_]=A,h=!0);else{const P=Hn(_);s[P]=ol(c,l,P,A,n,!1)}else A!==i[_]&&(i[_]=A,h=!0)}}}else{Cf(n,e,s,i)&&(h=!0);let f;for(const g in l)(!e||!Ee(e,g)&&((f=Er(g))===g||!Ee(e,f)))&&(c?t&&(t[g]!==void 0||t[f]!==void 0)&&(s[g]=ol(c,l,g,void 0,n,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!Ee(e,g))&&(delete i[g],h=!0)}h&&on(n.attrs,"set","")}function Cf(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ms(c))continue;const h=e[c];let f;s&&Ee(s,f=Hn(c))?!i||!i.includes(f)?t[f]=h:(l||(l={}))[f]=h:Wo(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=we(t),h=l||Ae;for(let f=0;f<i.length;f++){const g=i[f];t[g]=ol(s,c,g,h[g],n,!Ee(h,g))}}return a}function ol(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=Ee(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&he(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=hi(s);r=h[t]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Er(t))&&(r=!0))}return r}const ly=new WeakMap;function Pf(n,e,t=!1){const r=t?ly:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!he(n)){const f=g=>{c=!0;const[_,A]=Pf(g,e,!0);ft(a,_),A&&l.push(...A)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!c)return xe(n)&&r.set(n,Fr),Fr;if(le(i))for(let f=0;f<i.length;f++){const g=Hn(i[f]);Ku(g)&&(a[g]=Ae)}else if(i)for(const f in i){const g=Hn(f);if(Ku(g)){const _=i[f],A=a[g]=le(_)||he(_)?{type:_}:ft({},_),P=A.type;let k=!1,O=!0;if(le(P))for(let j=0;j<P.length;++j){const N=P[j],z=he(N)&&N.name;if(z==="Boolean"){k=!0;break}else z==="String"&&(O=!1)}else k=he(P)&&P.name==="Boolean";A[0]=k,A[1]=O,(k||Ee(A,"default"))&&l.push(g)}}const h=[a,l];return xe(n)&&r.set(n,h),h}function Ku(n){return n[0]!=="$"&&!Ms(n)}const Yl=n=>n==="_"||n==="__"||n==="_ctx"||n==="$stable",Xl=n=>le(n)?n.map(qt):[qt(n)],cy=(n,e,t)=>{if(e._n)return e;const r=O_((...s)=>Xl(e(...s)),t);return r._c=!1,r},xf=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Yl(s))continue;const i=n[s];if(he(i))e[s]=cy(s,i,r);else if(i!=null){const a=Xl(i);e[s]=()=>a}}},kf=(n,e)=>{const t=Xl(e);n.slots.default=()=>t},Vf=(n,e,t)=>{for(const r in e)(t||!Yl(r))&&(n[r]=e[r])},uy=(n,e,t)=>{const r=n.slots=Sf();if(n.vnode.shapeFlag&32){const s=e.__;s&&Ya(r,"__",s,!0);const i=e._;i?(Vf(r,e,t),t&&Ya(r,"_",i,!0)):xf(e,r)}else e&&kf(n,e)},hy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ae;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:Vf(s,e,t):(i=!e.$stable,xf(e,s)),a=e}else e&&(kf(n,e),a={default:1});if(i)for(const l in s)!Yl(l)&&a[l]==null&&delete s[l]},yt=Ay;function dy(n){return fy(n)}function fy(n,e){const t=qo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:g,nextSibling:_,setScopeId:A=Ht,insertStaticContent:P}=n,k=(y,T,x,F=null,M=null,L=null,W=void 0,q=null,B=!!T.dynamicChildren)=>{if(y===T)return;y&&!Ps(y,T)&&(F=en(y),$e(y,M,L,!0),y=null),T.patchFlag===-2&&(B=!1,T.dynamicChildren=null);const{type:U,ref:X,shapeFlag:G}=T;switch(U){case Ko:O(y,T,x,F);break;case Gn:j(y,T,x,F);break;case Na:y==null&&N(T,x,F,W);break;case At:S(y,T,x,F,M,L,W,q,B);break;default:G&1?ee(y,T,x,F,M,L,W,q,B):G&6?w(y,T,x,F,M,L,W,q,B):(G&64||G&128)&&U.process(y,T,x,F,M,L,W,q,B,Ut)}X!=null&&M?Us(X,y&&y.ref,L,T||y,!T):X==null&&y&&y.ref!=null&&Us(y.ref,null,L,y,!0)},O=(y,T,x,F)=>{if(y==null)r(T.el=l(T.children),x,F);else{const M=T.el=y.el;T.children!==y.children&&h(M,T.children)}},j=(y,T,x,F)=>{y==null?r(T.el=c(T.children||""),x,F):T.el=y.el},N=(y,T,x,F)=>{[y.el,y.anchor]=P(y.children,T,x,F,y.el,y.anchor)},z=({el:y,anchor:T},x,F)=>{let M;for(;y&&y!==T;)M=_(y),r(y,x,F),y=M;r(T,x,F)},J=({el:y,anchor:T})=>{let x;for(;y&&y!==T;)x=_(y),s(y),y=x;s(T)},ee=(y,T,x,F,M,L,W,q,B)=>{T.type==="svg"?W="svg":T.type==="math"&&(W="mathml"),y==null?ne(T,x,F,M,L,W,q,B):v(y,T,M,L,W,q,B)},ne=(y,T,x,F,M,L,W,q)=>{let B,U;const{props:X,shapeFlag:G,transition:Y,dirs:se}=y;if(B=y.el=a(y.type,L,X&&X.is,X),G&8?f(B,y.children):G&16&&m(y.children,B,null,F,M,Da(y,L),W,q),se&&ar(y,null,F,"created"),E(B,y,y.scopeId,W,F),X){for(const ue in X)ue!=="value"&&!Ms(ue)&&i(B,ue,null,X[ue],L,F);"value"in X&&i(B,"value",null,X.value,L),(U=X.onVnodeBeforeMount)&&$t(U,F,y)}se&&ar(y,null,F,"beforeMount");const te=py(M,Y);te&&Y.beforeEnter(B),r(B,T,x),((U=X&&X.onVnodeMounted)||te||se)&&yt(()=>{U&&$t(U,F,y),te&&Y.enter(B),se&&ar(y,null,F,"mounted")},M)},E=(y,T,x,F,M)=>{if(x&&A(y,x),F)for(let L=0;L<F.length;L++)A(y,F[L]);if(M){let L=M.subTree;if(T===L||Ff(L.type)&&(L.ssContent===T||L.ssFallback===T)){const W=M.vnode;E(y,W,W.scopeId,W.slotScopeIds,M.parent)}}},m=(y,T,x,F,M,L,W,q,B=0)=>{for(let U=B;U<y.length;U++){const X=y[U]=q?Dn(y[U]):qt(y[U]);k(null,X,T,x,F,M,L,W,q)}},v=(y,T,x,F,M,L,W)=>{const q=T.el=y.el;let{patchFlag:B,dynamicChildren:U,dirs:X}=T;B|=y.patchFlag&16;const G=y.props||Ae,Y=T.props||Ae;let se;if(x&&lr(x,!1),(se=Y.onVnodeBeforeUpdate)&&$t(se,x,T,y),X&&ar(T,y,x,"beforeUpdate"),x&&lr(x,!0),(G.innerHTML&&Y.innerHTML==null||G.textContent&&Y.textContent==null)&&f(q,""),U?I(y.dynamicChildren,U,q,x,F,Da(T,M),L):W||ye(y,T,q,null,x,F,Da(T,M),L,!1),B>0){if(B&16)b(q,G,Y,x,M);else if(B&2&&G.class!==Y.class&&i(q,"class",null,Y.class,M),B&4&&i(q,"style",G.style,Y.style,M),B&8){const te=T.dynamicProps;for(let ue=0;ue<te.length;ue++){const ge=te[ue],Ge=G[ge],We=Y[ge];(We!==Ge||ge==="value")&&i(q,ge,Ge,We,M,x)}}B&1&&y.children!==T.children&&f(q,T.children)}else!W&&U==null&&b(q,G,Y,x,M);((se=Y.onVnodeUpdated)||X)&&yt(()=>{se&&$t(se,x,T,y),X&&ar(T,y,x,"updated")},F)},I=(y,T,x,F,M,L,W)=>{for(let q=0;q<T.length;q++){const B=y[q],U=T[q],X=B.el&&(B.type===At||!Ps(B,U)||B.shapeFlag&198)?g(B.el):x;k(B,U,X,null,F,M,L,W,!0)}},b=(y,T,x,F,M)=>{if(T!==x){if(T!==Ae)for(const L in T)!Ms(L)&&!(L in x)&&i(y,L,T[L],null,M,F);for(const L in x){if(Ms(L))continue;const W=x[L],q=T[L];W!==q&&L!=="value"&&i(y,L,q,W,M,F)}"value"in x&&i(y,"value",T.value,x.value,M)}},S=(y,T,x,F,M,L,W,q,B)=>{const U=T.el=y?y.el:l(""),X=T.anchor=y?y.anchor:l("");let{patchFlag:G,dynamicChildren:Y,slotScopeIds:se}=T;se&&(q=q?q.concat(se):se),y==null?(r(U,x,F),r(X,x,F),m(T.children||[],x,X,M,L,W,q,B)):G>0&&G&64&&Y&&y.dynamicChildren?(I(y.dynamicChildren,Y,x,M,L,W,q),(T.key!=null||M&&T===M.subTree)&&Df(y,T,!0)):ye(y,T,x,X,M,L,W,q,B)},w=(y,T,x,F,M,L,W,q,B)=>{T.slotScopeIds=q,y==null?T.shapeFlag&512?M.ctx.activate(T,x,F,W,B):mt(T,x,F,M,L,W,B):Sn(y,T,B)},mt=(y,T,x,F,M,L,W)=>{const q=y.component=Vy(y,F,M);if(wf(y)&&(q.ctx.renderer=Ut),Ny(q,!1,W),q.asyncDep){if(M&&M.registerDep(q,ze,W),!y.el){const B=q.subTree=dn(Gn);j(null,B,T,x),y.placeholder=B.el}}else ze(q,y,T,x,M,L,W)},Sn=(y,T,x)=>{const F=T.component=y.component;if(Iy(y,T,x))if(F.asyncDep&&!F.asyncResolved){Ie(F,T,x);return}else F.next=T,F.update();else T.el=y.el,F.vnode=T},ze=(y,T,x,F,M,L,W)=>{const q=()=>{if(y.isMounted){let{next:G,bu:Y,u:se,parent:te,vnode:ue}=y;{const et=Nf(y);if(et){G&&(G.el=ue.el,Ie(y,G,W)),et.asyncDep.then(()=>{y.isUnmounted||q()});return}}let ge=G,Ge;lr(y,!1),G?(G.el=ue.el,Ie(y,G,W)):G=ue,Y&&Yi(Y),(Ge=G.props&&G.props.onVnodeBeforeUpdate)&&$t(Ge,te,G,ue),lr(y,!0);const We=Ju(y),It=y.subTree;y.subTree=We,k(It,We,g(It.el),en(It),y,M,L),G.el=We.el,ge===null&&by(y,We.el),se&&yt(se,M),(Ge=G.props&&G.props.onVnodeUpdated)&&yt(()=>$t(Ge,te,G,ue),M)}else{let G;const{el:Y,props:se}=T,{bm:te,m:ue,parent:ge,root:Ge,type:We}=y,It=$s(T);lr(y,!1),te&&Yi(te),!It&&(G=se&&se.onVnodeBeforeMount)&&$t(G,ge,T),lr(y,!0);{Ge.ce&&Ge.ce._def.shadowRoot!==!1&&Ge.ce._injectChildStyle(We);const et=y.subTree=Ju(y);k(null,et,x,F,y,M,L),T.el=et.el}if(ue&&yt(ue,M),!It&&(G=se&&se.onVnodeMounted)){const et=T;yt(()=>$t(G,ge,et),M)}(T.shapeFlag&256||ge&&$s(ge.vnode)&&ge.vnode.shapeFlag&256)&&y.a&&yt(y.a,M),y.isMounted=!0,T=x=F=null}};y.scope.on();const B=y.effect=new Yd(q);y.scope.off();const U=y.update=B.run.bind(B),X=y.job=B.runIfDirty.bind(B);X.i=y,X.id=y.uid,B.scheduler=()=>Wl(X),lr(y,!0),U()},Ie=(y,T,x)=>{T.component=y;const F=y.vnode.props;y.vnode=T,y.next=null,ay(y,T.props,F,x),hy(y,T.children,x),gn(),qu(y),mn()},ye=(y,T,x,F,M,L,W,q,B=!1)=>{const U=y&&y.children,X=y?y.shapeFlag:0,G=T.children,{patchFlag:Y,shapeFlag:se}=T;if(Y>0){if(Y&128){er(U,G,x,F,M,L,W,q,B);return}else if(Y&256){xt(U,G,x,F,M,L,W,q,B);return}}se&8?(X&16&&nr(U,M,L),G!==U&&f(x,G)):X&16?se&16?er(U,G,x,F,M,L,W,q,B):nr(U,M,L,!0):(X&8&&f(x,""),se&16&&m(G,x,F,M,L,W,q,B))},xt=(y,T,x,F,M,L,W,q,B)=>{y=y||Fr,T=T||Fr;const U=y.length,X=T.length,G=Math.min(U,X);let Y;for(Y=0;Y<G;Y++){const se=T[Y]=B?Dn(T[Y]):qt(T[Y]);k(y[Y],se,x,null,M,L,W,q,B)}U>X?nr(y,M,L,!0,!1,G):m(T,x,F,M,L,W,q,B,G)},er=(y,T,x,F,M,L,W,q,B)=>{let U=0;const X=T.length;let G=y.length-1,Y=X-1;for(;U<=G&&U<=Y;){const se=y[U],te=T[U]=B?Dn(T[U]):qt(T[U]);if(Ps(se,te))k(se,te,x,null,M,L,W,q,B);else break;U++}for(;U<=G&&U<=Y;){const se=y[G],te=T[Y]=B?Dn(T[Y]):qt(T[Y]);if(Ps(se,te))k(se,te,x,null,M,L,W,q,B);else break;G--,Y--}if(U>G){if(U<=Y){const se=Y+1,te=se<X?T[se].el:F;for(;U<=Y;)k(null,T[U]=B?Dn(T[U]):qt(T[U]),x,te,M,L,W,q,B),U++}}else if(U>Y)for(;U<=G;)$e(y[U],M,L,!0),U++;else{const se=U,te=U,ue=new Map;for(U=te;U<=Y;U++){const Ke=T[U]=B?Dn(T[U]):qt(T[U]);Ke.key!=null&&ue.set(Ke.key,U)}let ge,Ge=0;const We=Y-te+1;let It=!1,et=0;const Rn=new Array(We);for(U=0;U<We;U++)Rn[U]=0;for(U=se;U<=G;U++){const Ke=y[U];if(Ge>=We){$e(Ke,M,L,!0);continue}let bt;if(Ke.key!=null)bt=ue.get(Ke.key);else for(ge=te;ge<=Y;ge++)if(Rn[ge-te]===0&&Ps(Ke,T[ge])){bt=ge;break}bt===void 0?$e(Ke,M,L,!0):(Rn[bt-te]=U+1,bt>=et?et=bt:It=!0,k(Ke,T[bt],x,null,M,L,W,q,B),Ge++)}const gs=It?gy(Rn):Fr;for(ge=gs.length-1,U=We-1;U>=0;U--){const Ke=te+U,bt=T[Ke],Si=T[Ke+1],Sr=Ke+1<X?Si.el||Si.placeholder:F;Rn[U]===0?k(null,bt,x,Sr,M,L,W,q,B):It&&(ge<0||U!==gs[ge]?Zt(bt,x,Sr,2):ge--)}}},Zt=(y,T,x,F,M=null)=>{const{el:L,type:W,transition:q,children:B,shapeFlag:U}=y;if(U&6){Zt(y.component.subTree,T,x,F);return}if(U&128){y.suspense.move(T,x,F);return}if(U&64){W.move(y,T,x,Ut);return}if(W===At){r(L,T,x);for(let G=0;G<B.length;G++)Zt(B[G],T,x,F);r(y.anchor,T,x);return}if(W===Na){z(y,T,x);return}if(F!==2&&U&1&&q)if(F===0)q.beforeEnter(L),r(L,T,x),yt(()=>q.enter(L),M);else{const{leave:G,delayLeave:Y,afterLeave:se}=q,te=()=>{y.ctx.isUnmounted?s(L):r(L,T,x)},ue=()=>{G(L,()=>{te(),se&&se()})};Y?Y(L,te,ue):ue()}else r(L,T,x)},$e=(y,T,x,F=!1,M=!1)=>{const{type:L,props:W,ref:q,children:B,dynamicChildren:U,shapeFlag:X,patchFlag:G,dirs:Y,cacheIndex:se}=y;if(G===-2&&(M=!1),q!=null&&(gn(),Us(q,null,x,y,!0),mn()),se!=null&&(T.renderCache[se]=void 0),X&256){T.ctx.deactivate(y);return}const te=X&1&&Y,ue=!$s(y);let ge;if(ue&&(ge=W&&W.onVnodeBeforeUnmount)&&$t(ge,T,y),X&6)tr(y.component,x,F);else{if(X&128){y.suspense.unmount(x,F);return}te&&ar(y,null,T,"beforeUnmount"),X&64?y.type.remove(y,T,x,Ut,F):U&&!U.hasOnce&&(L!==At||G>0&&G&64)?nr(U,T,x,!1,!0):(L===At&&G&384||!M&&X&16)&&nr(B,T,x),F&&Be(y)}(ue&&(ge=W&&W.onVnodeUnmounted)||te)&&yt(()=>{ge&&$t(ge,T,y),te&&ar(y,null,T,"unmounted")},x)},Be=y=>{const{type:T,el:x,anchor:F,transition:M}=y;if(T===At){da(x,F);return}if(T===Na){J(y);return}const L=()=>{s(x),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(y.shapeFlag&1&&M&&!M.persisted){const{leave:W,delayLeave:q}=M,B=()=>W(x,L);q?q(y.el,L,B):B()}else L()},da=(y,T)=>{let x;for(;y!==T;)x=_(y),s(y),y=x;s(T)},tr=(y,T,x)=>{const{bum:F,scope:M,job:L,subTree:W,um:q,m:B,a:U,parent:X,slots:{__:G}}=y;Qu(B),Qu(U),F&&Yi(F),X&&le(G)&&G.forEach(Y=>{X.renderCache[Y]=void 0}),M.stop(),L&&(L.flags|=8,$e(W,y,T,x)),q&&yt(q,T),yt(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},nr=(y,T,x,F=!1,M=!1,L=0)=>{for(let W=L;W<y.length;W++)$e(y[W],T,x,F,M)},en=y=>{if(y.shapeFlag&6)return en(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const T=_(y.anchor||y.el),x=T&&T[L_];return x?_(x):T};let fs=!1;const Ai=(y,T,x)=>{y==null?T._vnode&&$e(T._vnode,null,null,!0):k(T._vnode||null,y,T,null,null,null,x),T._vnode=y,fs||(fs=!0,qu(),mf(),fs=!1)},Ut={p:k,um:$e,m:Zt,r:Be,mt,mc:m,pc:ye,pbc:I,n:en,o:n};return{render:Ai,hydrate:void 0,createApp:sy(Ai)}}function Da({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function lr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function py(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Df(n,e,t=!1){const r=n.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Dn(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&Df(a,l)),l.type===Ko&&(l.el=a.el),l.type===Gn&&!l.el&&(l.el=a.el)}}function gy(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Nf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nf(e)}function Qu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const my=Symbol.for("v-scx"),_y=()=>Xi(my);function Zi(n,e,t){return Of(n,e,t)}function Of(n,e,t=Ae){const{immediate:r,deep:s,flush:i,once:a}=t,l=ft({},t),c=e&&r||!e&&i!=="post";let h;if(ei){if(i==="sync"){const A=_y();h=A.__watcherHandles||(A.__watcherHandles=[])}else if(!c){const A=()=>{};return A.stop=Ht,A.resume=Ht,A.pause=Ht,A}}const f=dt;l.call=(A,P,k)=>Jt(A,f,P,k);let g=!1;i==="post"?l.scheduler=A=>{yt(A,f&&f.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(A,P)=>{P?A():Wl(A)}),l.augmentJob=A=>{e&&(A.flags|=4),g&&(A.flags|=2,f&&(A.id=f.uid,A.i=f))};const _=x_(n,e,l);return ei&&(h?h.push(_):c&&_()),_}function yy(n,e,t){const r=this.proxy,s=Ue(n)?n.includes(".")?Mf(r,n):()=>r[n]:n.bind(r,r);let i;he(e)?i=e:(i=e.handler,t=e);const a=hi(this),l=Of(s,i.bind(r),t);return a(),l}function Mf(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const vy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Hn(e)}Modifiers`]||n[`${Er(e)}Modifiers`];function wy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ae;let s=t;const i=e.startsWith("update:"),a=i&&vy(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>Ue(f)?f.trim():f)),a.number&&(s=t.map(Xa)));let l,c=r[l=Ra(e)]||r[l=Ra(Hn(e))];!c&&i&&(c=r[l=Ra(Er(e))]),c&&Jt(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Jt(h,n,6,s)}}function Lf(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!he(n)){const c=h=>{const f=Lf(h,e,!0);f&&(l=!0,ft(a,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(xe(n)&&r.set(n,null),null):(le(i)?i.forEach(c=>a[c]=null):ft(a,i),xe(n)&&r.set(n,a),a)}function Wo(n,e){return!n||!$o(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(n,e[0].toLowerCase()+e.slice(1))||Ee(n,Er(e))||Ee(n,e))}function Ju(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:g,data:_,setupState:A,ctx:P,inheritAttrs:k}=n,O=mo(n);let j,N;try{if(t.shapeFlag&4){const J=s||r,ee=J;j=qt(h.call(ee,J,f,g,A,_,P)),N=l}else{const J=e;j=qt(J.length>1?J(g,{attrs:l,slots:a,emit:c}):J(g,null)),N=e.props?l:Ey(l)}}catch(J){js.length=0,zo(J,n,1),j=dn(Gn)}let z=j;if(N&&k!==!1){const J=Object.keys(N),{shapeFlag:ee}=z;J.length&&ee&7&&(i&&J.some(Ol)&&(N=Ty(N,i)),z=Kr(z,N,!1,!0))}return t.dirs&&(z=Kr(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(t.dirs):t.dirs),t.transition&&Kl(z,t.transition),j=z,mo(O),j}const Ey=n=>{let e;for(const t in n)(t==="class"||t==="style"||$o(t))&&((e||(e={}))[t]=n[t]);return e},Ty=(n,e)=>{const t={};for(const r in n)(!Ol(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Iy(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Yu(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const _=f[g];if(a[_]!==r[_]&&!Wo(h,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Yu(r,a,h):!0:!!a;return!1}function Yu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Wo(t,i))return!0}return!1}function by({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ff=n=>n.__isSuspense;function Ay(n,e){e&&e.pendingBranch?le(n)?e.effects.push(...n):e.effects.push(n):N_(n)}const At=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),Gn=Symbol.for("v-cmt"),Na=Symbol.for("v-stc"),js=[];let Et=null;function oe(n=!1){js.push(Et=n?null:[])}function Sy(){js.pop(),Et=js[js.length-1]||null}let Zs=1;function Xu(n,e=!1){Zs+=n,n<0&&Et&&e&&(Et.hasOnce=!0)}function Uf(n){return n.dynamicChildren=Zs>0?Et||Fr:null,Sy(),Zs>0&&Et&&Et.push(n),n}function _e(n,e,t,r,s,i){return Uf($(n,e,t,r,s,i,!0))}function Vt(n,e,t,r,s){return Uf(dn(n,e,t,r,s,!0))}function $f(n){return n?n.__v_isVNode===!0:!1}function Ps(n,e){return n.type===e.type&&n.key===e.key}const Bf=({key:n})=>n??null,eo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ue(n)||at(n)||he(n)?{i:Ct,r:n,k:e,f:!!t}:n:null);function $(n,e=null,t=null,r=0,s=null,i=n===At?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Bf(e),ref:e&&eo(e),scopeId:yf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return l?(Zl(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Ue(t)?8:16),Zs>0&&!a&&Et&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Et.push(c),c}const dn=Ry;function Ry(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===J_)&&(n=Gn),$f(n)){const l=Kr(n,e,!0);return t&&Zl(l,t),Zs>0&&!i&&Et&&(l.shapeFlag&6?Et[Et.indexOf(n)]=l:Et.push(l)),l.patchFlag=-2,l}if(Fy(n)&&(n=n.__vccOpts),e){e=Cy(e);let{class:l,style:c}=e;l&&!Ue(l)&&(e.class=cn(l)),xe(c)&&(Gl(c)&&!le(c)&&(c=ft({},c)),e.style=Fl(c))}const a=Ue(n)?1:Ff(n)?128:F_(n)?64:xe(n)?4:he(n)?2:0;return $(n,e,t,r,s,a,i,!0)}function Cy(n){return n?Gl(n)||Rf(n)?ft({},n):n:null}function Kr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?Py(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Bf(h),ref:e&&e.ref?t&&i?le(i)?i.concat(eo(e)):[i,eo(e)]:eo(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==At?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Kr(n.ssContent),ssFallback:n.ssFallback&&Kr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&Kl(f,c.clone(f)),f}function hr(n=" ",e=0){return dn(Ko,null,n,e)}function vt(n="",e=!1){return e?(oe(),Vt(Gn,null,n)):dn(Gn,null,n)}function qt(n){return n==null||typeof n=="boolean"?dn(Gn):le(n)?dn(At,null,n.slice()):$f(n)?Dn(n):dn(Ko,null,String(n))}function Dn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Kr(n)}function Zl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(le(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Zl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Rf(e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Ct},t=32):(e=String(e),r&64?(t=16,e=[hr(e)]):t=8);n.children=e,n.shapeFlag|=t}function Py(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=cn([e.class,r.class]));else if(s==="style")e.style=Fl([e.style,r.style]);else if($o(s)){const i=e[s],a=r[s];a&&i!==a&&!(le(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function $t(n,e,t,r=null){Jt(n,e,7,[t,r])}const xy=bf();let ky=0;function Vy(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||xy,i={uid:ky++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new t_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pf(r,s),emitsOptions:Lf(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wy.bind(null,i),n.ce&&n.ce(i),i}let dt=null;const Dy=()=>dt||Ct;let yo,al;{const n=qo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};yo=e("__VUE_INSTANCE_SETTERS__",t=>dt=t),al=e("__VUE_SSR_SETTERS__",t=>ei=t)}const hi=n=>{const e=dt;return yo(n),n.scope.on(),()=>{n.scope.off(),yo(e)}},Zu=()=>{dt&&dt.scope.off(),yo(null)};function jf(n){return n.vnode.shapeFlag&4}let ei=!1;function Ny(n,e=!1,t=!1){e&&al(e);const{props:r,children:s}=n.vnode,i=jf(n);oy(n,r,i,e),uy(n,s,t||e);const a=i?Oy(n,e):void 0;return e&&al(!1),a}function Oy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Y_);const{setup:r}=t;if(r){gn();const s=n.setupContext=r.length>1?Ly(n):null,i=hi(n),a=ci(r,n,0,[n.props,s]),l=Hd(a);if(mn(),i(),(l||n.sp)&&!$s(n)&&vf(n),l){if(a.then(Zu,Zu),e)return a.then(c=>{eh(n,c)}).catch(c=>{zo(c,n,0)});n.asyncDep=a}else eh(n,a)}else qf(n)}function eh(n,e,t){he(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xe(e)&&(n.setupState=ff(e)),qf(n)}function qf(n,e,t){const r=n.type;n.render||(n.render=r.render||Ht);{const s=hi(n);gn();try{X_(n)}finally{mn(),s()}}}const My={get(n,e){return it(n,"get",""),n[e]}};function Ly(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,My),slots:n.slots,emit:n.emit,expose:e}}function Qo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ff(T_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Bs)return Bs[t](n)},has(e,t){return t in e||t in Bs}})):n.proxy}function Fy(n){return he(n)&&"__vccOpts"in n}const Hf=(n,e)=>C_(n,e,ei),Uy="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ll;const th=typeof window<"u"&&window.trustedTypes;if(th)try{ll=th.createPolicy("vue",{createHTML:n=>n})}catch{}const zf=ll?n=>ll.createHTML(n):n=>n,$y="http://www.w3.org/2000/svg",By="http://www.w3.org/1998/Math/MathML",sn=typeof document<"u"?document:null,nh=sn&&sn.createElement("template"),jy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?sn.createElementNS($y,n):e==="mathml"?sn.createElementNS(By,n):t?sn.createElement(n,{is:t}):sn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>sn.createTextNode(n),createComment:n=>sn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>sn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{nh.innerHTML=zf(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=nh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},qy=Symbol("_vtc");function Hy(n,e,t){const r=n[qy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const rh=Symbol("_vod"),zy=Symbol("_vsh"),Gy=Symbol(""),Wy=/(^|;)\s*display\s*:/;function Ky(n,e,t){const r=n.style,s=Ue(t);let i=!1;if(t&&!s){if(e)if(Ue(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&to(r,l,"")}else for(const a in e)t[a]==null&&to(r,a,"");for(const a in t)a==="display"&&(i=!0),to(r,a,t[a])}else if(s){if(e!==t){const a=r[Gy];a&&(t+=";"+a),r.cssText=t,i=Wy.test(t)}}else e&&n.removeAttribute("style");rh in n&&(n[rh]=i?r.display:"",n[zy]&&(r.display="none"))}const sh=/\s*!important$/;function to(n,e,t){if(le(t))t.forEach(r=>to(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Qy(n,e);sh.test(t)?n.setProperty(Er(r),t.replace(sh,""),"important"):n[r]=t}}const ih=["Webkit","Moz","ms"],Oa={};function Qy(n,e){const t=Oa[e];if(t)return t;let r=Hn(e);if(r!=="filter"&&r in n)return Oa[e]=r;r=Wd(r);for(let s=0;s<ih.length;s++){const i=ih[s]+r;if(i in n)return Oa[e]=i}return e}const oh="http://www.w3.org/1999/xlink";function ah(n,e,t,r,s,i=e_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(oh,e.slice(6,e.length)):n.setAttributeNS(oh,e,t):t==null||i&&!Kd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Zn(t)?String(t):t)}function lh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?zf(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Kd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Dr(n,e,t,r){n.addEventListener(e,t,r)}function Jy(n,e,t,r){n.removeEventListener(e,t,r)}const ch=Symbol("_vei");function Yy(n,e,t,r,s=null){const i=n[ch]||(n[ch]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=Xy(e);if(r){const h=i[e]=tv(r,s);Dr(n,l,h,c)}else a&&(Jy(n,l,a,c),i[e]=void 0)}}const uh=/(?:Once|Passive|Capture)$/;function Xy(n){let e;if(uh.test(n)){e={};let r;for(;r=n.match(uh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Er(n.slice(2)),e]}let Ma=0;const Zy=Promise.resolve(),ev=()=>Ma||(Zy.then(()=>Ma=0),Ma=Date.now());function tv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Jt(nv(r,t.value),e,5,[r])};return t.value=n,t.attached=ev(),t}function nv(n,e){if(le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const hh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,rv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Hy(n,r,a):e==="style"?Ky(n,t,r):$o(e)?Ol(e)||Yy(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sv(n,e,r,a))?(lh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ah(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ue(r))?lh(n,Hn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),ah(n,e,r,a))};function sv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&hh(e)&&he(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hh(e)&&Ue(t)?!1:e in n}const dh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return le(e)?t=>Yi(e,t):e};function iv(n){n.target.composing=!0}function fh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const La=Symbol("_assign"),ov={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[La]=dh(s);const i=r||s.props&&s.props.type==="number";Dr(n,e?"change":"input",a=>{if(a.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=Xa(l)),n[La](l)}),t&&Dr(n,"change",()=>{n.value=n.value.trim()}),e||(Dr(n,"compositionstart",iv),Dr(n,"compositionend",fh),Dr(n,"change",fh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[La]=dh(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?Xa(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},av=["ctrl","shift","alt","meta"],lv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>av.some(t=>n[`${t}Key`]&&!e.includes(t))},Gf=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=lv[e[a]];if(l&&l(s,e))return}return n(s,...i)})},cv=ft({patchProp:rv},jy);let ph;function uv(){return ph||(ph=dy(cv))}const hv=(...n)=>{const e=uv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=fv(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,dv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function dv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function fv(n){return Ue(n)?document.querySelector(n):n}const pv=()=>{};var gh={};/**
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
 */const Wf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},gv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Kf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,A=h&63;c||(A=64,a||(_=64)),r.push(t[f],t[g],t[_],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Wf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new mv;const _=i<<2|l>>4;if(r.push(_),h!==64){const A=l<<4&240|h>>2;if(r.push(A),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _v=function(n){const e=Wf(n);return Kf.encodeByteArray(e,!0)},vo=function(n){return _v(n).replace(/\./g,"")},Qf=function(n){try{return Kf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const vv=()=>yv().__FIREBASE_DEFAULTS__,wv=()=>{if(typeof process>"u"||typeof gh>"u")return;const n=gh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ev=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qf(n[1]);return e&&JSON.parse(e)},Jo=()=>{try{return pv()||vv()||wv()||Ev()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jf=n=>Jo()?.emulatorHosts?.[n],Tv=n=>{const e=Jf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Yf=()=>Jo()?.config,Xf=n=>Jo()?.[`_${n}`];/**
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
 */function ns(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zf(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function bv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[vo(JSON.stringify(t)),vo(JSON.stringify(a)),""].join(".")}const qs={};function Av(){const n={prod:[],emulator:[]};for(const e of Object.keys(qs))qs[e]?n.emulator.push(e):n.prod.push(e);return n}function Sv(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let mh=!1;function ep(n,e){if(typeof window>"u"||typeof document>"u"||!ns(window.location.host)||qs[n]===e||qs[n]||mh)return;qs[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=Av().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function c(_,A){_.setAttribute("width","24"),_.setAttribute("id",A),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{mh=!0,a()},_}function f(_,A){_.setAttribute("id",A),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function g(){const _=Sv(r),A=t("text"),P=document.getElementById(A)||document.createElement("span"),k=t("learnmore"),O=document.getElementById(k)||document.createElement("a"),j=t("preprendIcon"),N=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const z=_.element;l(z),f(O,k);const J=h();c(N,j),z.append(N,P,O,J),document.body.appendChild(z)}i?(P.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function Cv(){const n=Jo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vv(){const n=lt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Dv(){return!Cv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nv(){try{return typeof indexedDB=="object"}catch{return!1}}function Ov(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Mv="FirebaseError";class bn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Mv,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,di.prototype.create)}}class di{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Lv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new bn(s,l,r)}}function Lv(n,e){return n.replace(Fv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Fv=/\{\$([^}]+)}/g;function Uv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(_h(i)&&_h(a)){if(!mr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function _h(n){return n!==null&&typeof n=="object"}/**
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
 */function fi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $v(n,e){const t=new Bv(n,e);return t.subscribe.bind(t)}class Bv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");jv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Fa),s.error===void 0&&(s.error=Fa),s.complete===void 0&&(s.complete=Fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fa(){}/**
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
 */function Tt(n){return n&&n._delegate?n._delegate:n}class _r{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ur="[DEFAULT]";/**
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
 */class qv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Iv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zv(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hv(n){return n===ur?void 0:n}function zv(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const Wv={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Kv=de.INFO,Qv={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Jv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Qv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=Kv,this._logHandler=Jv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Yv=(n,e)=>e.some(t=>n instanceof t);let yh,vh;function Xv(){return yh||(yh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zv(){return vh||(vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tp=new WeakMap,cl=new WeakMap,np=new WeakMap,Ua=new WeakMap,tc=new WeakMap;function ew(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Un(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&tp.set(t,n)}).catch(()=>{}),tc.set(e,n),e}function tw(n){if(cl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});cl.set(n,e)}let ul={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return cl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||np.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Un(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nw(n){ul=n(ul)}function rw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($a(this),e,...t);return np.set(r,e.sort?e.sort():[e]),Un(r)}:Zv().includes(n)?function(...e){return n.apply($a(this),e),Un(tp.get(this))}:function(...e){return Un(n.apply($a(this),e))}}function sw(n){return typeof n=="function"?rw(n):(n instanceof IDBTransaction&&tw(n),Yv(n,Xv())?new Proxy(n,ul):n)}function Un(n){if(n instanceof IDBRequest)return ew(n);if(Ua.has(n))return Ua.get(n);const e=sw(n);return e!==n&&(Ua.set(n,e),tc.set(e,n)),e}const $a=n=>tc.get(n);function iw(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Un(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Un(a.result),c.oldVersion,c.newVersion,Un(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const ow=["get","getKey","getAll","getAllKeys","count"],aw=["put","add","delete","clear"],Ba=new Map;function wh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ba.get(e))return Ba.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=aw.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ow.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return Ba.set(e,i),i}nw(n=>({...n,get:(e,t,r)=>wh(e,t)||n.get(e,t,r),has:(e,t)=>!!wh(e,t)||n.has(e,t)}));/**
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
 */class lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cw(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function cw(n){return n.getComponent()?.type==="VERSION"}const hl="@firebase/app",Eh="0.14.0";/**
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
 */const _n=new ec("@firebase/app"),uw="@firebase/app-compat",hw="@firebase/analytics-compat",dw="@firebase/analytics",fw="@firebase/app-check-compat",pw="@firebase/app-check",gw="@firebase/auth",mw="@firebase/auth-compat",_w="@firebase/database",yw="@firebase/data-connect",vw="@firebase/database-compat",ww="@firebase/functions",Ew="@firebase/functions-compat",Tw="@firebase/installations",Iw="@firebase/installations-compat",bw="@firebase/messaging",Aw="@firebase/messaging-compat",Sw="@firebase/performance",Rw="@firebase/performance-compat",Cw="@firebase/remote-config",Pw="@firebase/remote-config-compat",xw="@firebase/storage",kw="@firebase/storage-compat",Vw="@firebase/firestore",Dw="@firebase/ai",Nw="@firebase/firestore-compat",Ow="firebase",Mw="12.0.0";/**
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
 */const dl="[DEFAULT]",Lw={[hl]:"fire-core",[uw]:"fire-core-compat",[dw]:"fire-analytics",[hw]:"fire-analytics-compat",[pw]:"fire-app-check",[fw]:"fire-app-check-compat",[gw]:"fire-auth",[mw]:"fire-auth-compat",[_w]:"fire-rtdb",[yw]:"fire-data-connect",[vw]:"fire-rtdb-compat",[ww]:"fire-fn",[Ew]:"fire-fn-compat",[Tw]:"fire-iid",[Iw]:"fire-iid-compat",[bw]:"fire-fcm",[Aw]:"fire-fcm-compat",[Sw]:"fire-perf",[Rw]:"fire-perf-compat",[Cw]:"fire-rc",[Pw]:"fire-rc-compat",[xw]:"fire-gcs",[kw]:"fire-gcs-compat",[Vw]:"fire-fst",[Nw]:"fire-fst-compat",[Dw]:"fire-vertex","fire-js":"fire-js",[Ow]:"fire-js-all"};/**
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
 */const wo=new Map,Fw=new Map,fl=new Map;function Th(n,e){try{n.container.addComponent(e)}catch(t){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qr(n){const e=n.name;if(fl.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;fl.set(e,n);for(const t of wo.values())Th(t,n);for(const t of Fw.values())Th(t,n);return!0}function nc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Uw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new di("app","Firebase",Uw);/**
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
 */class $w{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=Mw;function rp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:dl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});if(t||(t=Yf()),!t)throw $n.create("no-options");const i=wo.get(s);if(i){if(mr(t,i.options)&&mr(r,i.config))return i;throw $n.create("duplicate-app",{appName:s})}const a=new Gv(s);for(const c of fl.values())a.addComponent(c);const l=new $w(t,r,a);return wo.set(s,l),l}function sp(n=dl){const e=wo.get(n);if(!e&&n===dl&&Yf())return rp();if(!e)throw $n.create("no-app",{appName:n});return e}function Bn(n,e,t){let r=Lw[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(a.join(" "));return}Qr(new _r(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Bw="firebase-heartbeat-database",jw=1,ti="firebase-heartbeat-store";let ja=null;function ip(){return ja||(ja=iw(Bw,jw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ti)}catch(t){console.warn(t)}}}}).catch(n=>{throw $n.create("idb-open",{originalErrorMessage:n.message})})),ja}async function qw(n){try{const t=(await ip()).transaction(ti),r=await t.objectStore(ti).get(op(n));return await t.done,r}catch(e){if(e instanceof bn)_n.warn(e.message);else{const t=$n.create("idb-get",{originalErrorMessage:e?.message});_n.warn(t.message)}}}async function Ih(n,e){try{const r=(await ip()).transaction(ti,"readwrite");await r.objectStore(ti).put(e,op(n)),await r.done}catch(t){if(t instanceof bn)_n.warn(t.message);else{const r=$n.create("idb-set",{originalErrorMessage:t?.message});_n.warn(r.message)}}}function op(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Hw=1024,zw=30;class Gw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>zw){const s=Qw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){_n.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bh(),{heartbeatsToSend:t,unsentEntries:r}=Ww(this._heartbeatsCache.heartbeats),s=vo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return _n.warn(e),""}}}function bh(){return new Date().toISOString().substring(0,10)}function Ww(n,e=Hw){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ah(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ah(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Kw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nv()?Ov().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qw(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ih(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ih(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ah(n){return vo(JSON.stringify({version:2,heartbeats:n})).length}function Qw(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Jw(n){Qr(new _r("platform-logger",e=>new lw(e),"PRIVATE")),Qr(new _r("heartbeat",e=>new Gw(e),"PRIVATE")),Bn(hl,Eh,n),Bn(hl,Eh,"esm2020"),Bn("fire-js","")}Jw("");function ap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yw=ap,lp=new di("auth","Firebase",ap());/**
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
 */const Eo=new ec("@firebase/auth");function Xw(n,...e){Eo.logLevel<=de.WARN&&Eo.warn(`Auth (${rs}): ${n}`,...e)}function no(n,...e){Eo.logLevel<=de.ERROR&&Eo.error(`Auth (${rs}): ${n}`,...e)}/**
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
 */function Yt(n,...e){throw sc(n,...e)}function Mt(n,...e){return sc(n,...e)}function rc(n,e,t){const r={...Yw(),[e]:t};return new di("auth","Firebase",r).create(e,{appName:n.name})}function fn(n){return rc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zw(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(n,"argument-error"),rc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return lp.create(n,...e)}function ie(n,e,...t){if(!n)throw sc(e,...t)}function un(n){const e="INTERNAL ASSERTION FAILED: "+n;throw no(e),new Error(e)}function yn(n,e){n||un(e)}/**
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
 */function pl(){return typeof self<"u"&&self.location?.href||""}function eE(){return Sh()==="http:"||Sh()==="https:"}function Sh(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function tE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eE()||xv()||"connection"in navigator)?navigator.onLine:!0}function nE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class pi{constructor(e,t){this.shortDelay=e,this.longDelay=t,yn(t>e,"Short delay should be less than long delay!"),this.isMobile=Rv()||kv()}get(){return tE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ic(n,e){yn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iE=new pi(3e4,6e4);function gi(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ss(n,e,t,r,s={}){return up(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=fi({key:n.config.apiKey,...a}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:c,...i};return Pv()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ns(n.emulatorConfig.host)&&(h.credentials="include"),cp.fetch()(await hp(n,n.config.apiHost,t,l),h)})}async function up(n,e,t){n._canInitEmulator=!1;const r={...rE,...e};try{const s=new oE(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw zi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw zi(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw zi(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw rc(n,f,h);Yt(n,f)}}catch(s){if(s instanceof bn)throw s;Yt(n,"network-request-failed",{message:String(s)})}}async function oc(n,e,t,r,s={}){const i=await ss(n,e,t,r,s);return"mfaPendingCredential"in i&&Yt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function hp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?ic(n.config,s):`${n.config.apiScheme}://${s}`;return sE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class oE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),iE.get())})}}function zi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Mt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function aE(n,e){return ss(n,"POST","/v1/accounts:delete",e)}async function To(n,e){return ss(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lE(n,e=!1){const t=Tt(n),r=await t.getIdToken(e),s=ac(r);ie(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Hs(qa(s.auth_time)),issuedAtTime:Hs(qa(s.iat)),expirationTime:Hs(qa(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function qa(n){return Number(n)*1e3}function ac(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return no("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qf(t);return s?JSON.parse(s):(no("Failed to decode base64 JWT payload"),null)}catch(s){return no("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Rh(n){const e=ac(n);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ni(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof bn&&cE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function cE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class uE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Io(n){const e=n.auth,t=await n.getIdToken(),r=await ni(n,To(e,{idToken:t}));ie(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?dp(s.providerUserInfo):[],a=dE(n.providerData,i),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!a?.length,h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function hE(n){const e=Tt(n);await Io(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dp(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function fE(n,e){const t=await up(n,{},async()=>{const r=fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await hp(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&ns(n.emulatorConfig.host)&&(c.credentials="include"),cp.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pE(n,e){return ss(n,"POST","/v2/accounts:revokeToken",gi(n,e))}/**
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
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const t=Rh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await fE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new qr;return r&&(ie(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function kn(n,e){ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new uE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ni(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lE(this,e)}reload(){return hE(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Io(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(fn(this.auth));const e=await this.getIdToken();return await ni(this,aE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:g,emailVerified:_,isAnonymous:A,providerData:P,stsTokenManager:k}=t;ie(g&&k,e,"internal-error");const O=qr.fromJSON(this.name,k);ie(typeof g=="string",e,"internal-error"),kn(r,e.name),kn(s,e.name),ie(typeof _=="boolean",e,"internal-error"),ie(typeof A=="boolean",e,"internal-error"),kn(i,e.name),kn(a,e.name),kn(l,e.name),kn(c,e.name),kn(h,e.name),kn(f,e.name);const j=new Dt({uid:g,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:A,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:O,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(j.providerData=P.map(N=>({...N}))),c&&(j._redirectEventId=c),j}static async _fromIdTokenResponse(e,t,r=!1){const s=new qr;s.updateFromServerResponse(t);const i=new Dt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Io(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?dp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new qr;l.updateFromIdToken(r);const c=new Dt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new gl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,h),c}}/**
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
 */const Ch=new Map;function hn(n){yn(n instanceof Function,"Expected a class definition");let e=Ch.get(n);return e?(yn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ch.set(n,e),e)}/**
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
 */class fp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fp.type="NONE";const Ph=fp;/**
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
 */function ro(n,e,t){return`firebase:${n}:${e}:${t}`}class Hr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ro(this.userKey,s.apiKey,i),this.fullPersistenceKey=ro("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await To(this.auth,{idToken:e}).catch(()=>{});return t?Dt._fromGetAccountInfoResponse(this.auth,t,e):null}return Dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hr(hn(Ph),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||hn(Ph);const a=ro(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let g;if(typeof f=="string"){const _=await To(e,{idToken:f}).catch(()=>{});if(!_)break;g=await Dt._fromGetAccountInfoResponse(e,_,f)}else g=Dt._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Hr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Hr(i,e,r))}}/**
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
 */function xh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_p(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vp(e))return"Blackberry";if(wp(e))return"Webos";if(gp(e))return"Safari";if((e.includes("chrome/")||mp(e))&&!e.includes("edge/"))return"Chrome";if(yp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function pp(n=lt()){return/firefox\//i.test(n)}function gp(n=lt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mp(n=lt()){return/crios\//i.test(n)}function _p(n=lt()){return/iemobile/i.test(n)}function yp(n=lt()){return/android/i.test(n)}function vp(n=lt()){return/blackberry/i.test(n)}function wp(n=lt()){return/webos/i.test(n)}function lc(n=lt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gE(n=lt()){return lc(n)&&!!window.navigator?.standalone}function mE(){return Vv()&&document.documentMode===10}function Ep(n=lt()){return lc(n)||yp(n)||wp(n)||vp(n)||/windows phone/i.test(n)||_p(n)}/**
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
 */function Tp(n,e=[]){let t;switch(n){case"Browser":t=xh(lt());break;case"Worker":t=`${xh(lt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rs}/${r}`}/**
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
 */class _E{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function yE(n,e={}){return ss(n,"GET","/v2/passwordPolicy",gi(n,e))}/**
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
 */const vE=6;class wE{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??vE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class EE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kh(this),this.idTokenSubscription=new kh(this),this.beforeStateQueue=new _E(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=hn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await To(this,{idToken:e}),r=await Dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(wt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Io(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(fn(this));const t=e?Tt(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yE(this),t=new wE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new di("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await pE(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&hn(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[hn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Xw(`Error while retrieving App Check token: ${e.error}`),e?.token}}function is(n){return Tt(n)}class kh{constructor(e){this.auth=e,this.observer=null,this.addObserver=$v(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let cc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TE(n){cc=n}function IE(n){return cc.loadJS(n)}function bE(){return cc.gapiScript}function AE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function SE(n,e){const t=nc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(mr(i,e??{}))return s;Yt(s,"already-initialized")}return t.initialize({options:e})}function RE(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(hn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function CE(n,e,t){const r=is(n);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ip(e),{host:a,port:l}=PE(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(mr(h,r.config.emulator)&&mr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ns(a)?(Zf(`${i}//${a}${c}`),ep("Auth",!0)):xE()}function Ip(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function PE(n){const e=Ip(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Vh(a)}}}function Vh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class bp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,t){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
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
 */async function zr(n,e){return oc(n,"POST","/v1/accounts:signInWithIdp",gi(n,e))}/**
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
 */const kE="http://localhost";class yr extends bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new yr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return zr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zr(e,t)}buildRequest(){const e={requestUri:kE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fi(t)}return e}}/**
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
 */class uc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mi extends uc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nn extends mi{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class ln extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ln.credential(t,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
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
 */class On extends mi{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
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
 */class Mn extends mi{constructor(){super("twitter.com")}static credential(e,t){return yr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Mn.credential(t,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */async function VE(n,e){return oc(n,"POST","/v1/accounts:signUp",gi(n,e))}/**
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
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Dt._fromIdTokenResponse(e,r,s),a=Dh(r);return new vn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Dh(r);return new vn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Dh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function DE(n){if(wt(n.app))return Promise.reject(fn(n));const e=is(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new vn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await VE(e,{returnSecureToken:!0}),r=await vn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class bo extends bn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new bo(e,t,r,s)}}function Ap(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bo._fromErrorAndOperation(n,i,e,r):i})}async function NE(n,e,t=!1){const r=await ni(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",r)}/**
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
 */async function OE(n,e,t=!1){const{auth:r}=n;if(wt(r.app))return Promise.reject(fn(r));const s="reauthenticate";try{const i=await ni(n,Ap(r,s,e,n),t);ie(i.idToken,r,"internal-error");const a=ac(i.idToken);ie(a,r,"internal-error");const{sub:l}=a;return ie(n.uid===l,r,"user-mismatch"),vn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function ME(n,e,t=!1){if(wt(n.app))return Promise.reject(fn(n));const r="signIn",s=await Ap(n,r,e),i=await vn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}/**
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
 */async function LE(n,e){return oc(n,"POST","/v1/accounts:signInWithCustomToken",gi(n,e))}/**
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
 */async function FE(n,e){if(wt(n.app))return Promise.reject(fn(n));const t=is(n),r=await LE(t,{token:e,returnSecureToken:!0}),s=await vn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}function UE(n,e,t,r){return Tt(n).onIdTokenChanged(e,t,r)}function $E(n,e,t){return Tt(n).beforeAuthStateChanged(e,t)}function Sp(n,e,t,r){return Tt(n).onAuthStateChanged(e,t,r)}const Ao="__sak";/**
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
 */class Rp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ao,"1"),this.storage.removeItem(Ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const BE=1e3,jE=10;class Cp extends Rp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ep(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);mE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},BE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cp.type="LOCAL";const qE=Cp;/**
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
 */class Pp extends Rp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pp.type="SESSION";const xp=Pp;/**
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
 */function HE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Yo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await HE(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yo.receivers=[];/**
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
 */function hc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class zE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=hc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function zt(){return window}function GE(n){zt().location.href=n}/**
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
 */function kp(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function WE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KE(){return navigator?.serviceWorker?.controller||null}function QE(){return kp()?self:null}/**
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
 */const Vp="firebaseLocalStorageDb",JE=1,So="firebaseLocalStorage",Dp="fbase_key";class _i{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xo(n,e){return n.transaction([So],e?"readwrite":"readonly").objectStore(So)}function YE(){const n=indexedDB.deleteDatabase(Vp);return new _i(n).toPromise()}function ml(){const n=indexedDB.open(Vp,JE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(So,{keyPath:Dp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(So)?e(r):(r.close(),await YE(),e(await ml()))})})}async function Nh(n,e,t){const r=Xo(n,!0).put({[Dp]:e,value:t});return new _i(r).toPromise()}async function XE(n,e){const t=Xo(n,!1).get(e),r=await new _i(t).toPromise();return r===void 0?null:r.value}function Oh(n,e){const t=Xo(n,!0).delete(e);return new _i(t).toPromise()}const ZE=800,eT=3;class Np{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ml(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>eT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yo._getInstance(QE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await WE(),!this.activeServiceWorker)return;this.sender=new zE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ml();return await Nh(e,Ao,"1"),await Oh(e,Ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>XE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Oh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xo(s,!1).getAll();return new _i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Np.type="LOCAL";const tT=Np;new pi(3e4,6e4);/**
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
 */function Op(n,e){return e?hn(e):(ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class dc extends bp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nT(n){return ME(n.auth,new dc(n),n.bypassAuthState)}function rT(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),OE(t,new dc(n),n.bypassAuthState)}async function sT(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),NE(t,new dc(n),n.bypassAuthState)}/**
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
 */class Mp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nT;case"linkViaPopup":case"linkViaRedirect":return sT;case"reauthViaPopup":case"reauthViaRedirect":return rT;default:Yt(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iT=new pi(2e3,1e4);async function oT(n,e,t){if(wt(n.app))return Promise.reject(Mt(n,"operation-not-supported-in-this-environment"));const r=is(n);Zw(n,e,uc);const s=Op(r,t);return new dr(r,"signInViaPopup",e,s).executeNotNull()}class dr extends Mp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dr.currentPopupAction&&dr.currentPopupAction.cancel(),dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iT.get())};e()}}dr.currentPopupAction=null;/**
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
 */const aT="pendingRedirect",so=new Map;class lT extends Mp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=so.get(this.auth._key());if(!e){try{const r=await cT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}so.set(this.auth._key(),e)}return this.bypassAuthState||so.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cT(n,e){const t=dT(e),r=hT(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function uT(n,e){so.set(n._key(),e)}function hT(n){return hn(n._redirectPersistence)}function dT(n){return ro(aT,n.config.apiKey,n.name)}async function fT(n,e,t=!1){if(wt(n.app))return Promise.reject(fn(n));const r=is(n),s=Op(r,e),a=await new lT(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const pT=600*1e3;class gT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Lp(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Mt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mh(e))}saveEventToCache(e){this.cachedEventUids.add(Mh(e)),this.lastProcessedEventTime=Date.now()}}function Mh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function mT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lp(n);default:return!1}}/**
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
 */async function _T(n,e={}){return ss(n,"GET","/v1/projects",e)}/**
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
 */const yT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vT=/^https?/;async function wT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _T(n);for(const t of e)try{if(ET(t))return}catch{}Yt(n,"unauthorized-domain")}function ET(n){const e=pl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!vT.test(t))return!1;if(yT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const TT=new pi(3e4,6e4);function Lh(){const n=zt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function IT(n){return new Promise((e,t)=>{function r(){Lh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lh(),t(Mt(n,"network-request-failed"))},timeout:TT.get()})}if(zt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(zt().gapi?.load)r();else{const s=AE("iframefcb");return zt()[s]=()=>{gapi.load?r():t(Mt(n,"network-request-failed"))},IE(`${bE()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw io=null,e})}let io=null;function bT(n){return io=io||IT(n),io}/**
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
 */const AT=new pi(5e3,15e3),ST="__/auth/iframe",RT="emulator/auth/iframe",CT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xT(n){const e=n.config;ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ic(e,RT):`https://${n.config.authDomain}/${ST}`,r={apiKey:e.apiKey,appName:n.name,v:rs},s=PT.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${fi(r).slice(1)}`}async function kT(n){const e=await bT(n),t=zt().gapi;return ie(t,n,"internal-error"),e.open({where:document.body,url:xT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Mt(n,"network-request-failed"),l=zt().setTimeout(()=>{i(a)},AT.get());function c(){zt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const VT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DT=500,NT=600,OT="_blank",MT="http://localhost";class Fh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LT(n,e,t,r=DT,s=NT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...VT,width:r.toString(),height:s.toString(),top:i,left:a},h=lt().toLowerCase();t&&(l=mp(h)?OT:t),pp(h)&&(e=e||MT,c.scrollbars="yes");const f=Object.entries(c).reduce((_,[A,P])=>`${_}${A}=${P},`,"");if(gE(h)&&l!=="_self")return FT(e||"",l),new Fh(null);const g=window.open(e||"",l,f);ie(g,n,"popup-blocked");try{g.focus()}catch{}return new Fh(g)}function FT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const UT="__/auth/handler",$T="emulator/auth/handler",BT=encodeURIComponent("fac");async function Uh(n,e,t,r,s,i){ie(n.config.authDomain,n,"auth-domain-config-required"),ie(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:rs,eventId:s};if(e instanceof uc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Uv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof mi){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${BT}=${encodeURIComponent(c)}`:"";return`${jT(n)}?${fi(l).slice(1)}${h}`}function jT({config:n}){return n.emulator?ic(n,$T):`https://${n.authDomain}/${UT}`}/**
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
 */const Ha="webStorageSupport";class qT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xp,this._completeRedirectFn=fT,this._overrideRedirectResult=uT}async _openPopup(e,t,r,s){yn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Uh(e,t,r,pl(),s);return LT(e,i,hc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Uh(e,t,r,pl(),s);return GE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await kT(e),r=new gT(e);return t.register("authEvent",s=>(ie(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ha,{type:Ha},s=>{const i=s?.[0]?.[Ha];i!==void 0&&t(!!i),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ep()||gp()||lc()}}const HT=qT;var $h="@firebase/auth",Bh="1.11.0";/**
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
 */class zT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WT(n){Qr(new _r("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tp(n)},h=new EE(r,s,i,c);return RE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new _r("auth-internal",e=>{const t=is(e.getProvider("auth").getImmediate());return(r=>new zT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn($h,Bh,GT(n)),Bn($h,Bh,"esm2020")}/**
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
 */const KT=300,QT=Xf("authIdTokenMaxAge")||KT;let jh=null;const JT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>QT)return;const s=t?.token;jh!==s&&(jh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function os(n=sp()){const e=nc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=SE(n,{popupRedirectResolver:HT,persistence:[tT,qE,xp]}),r=Xf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=JT(i.toString());$E(t,a,()=>a(t.currentUser)),UE(t,l=>a(l))}}const s=Jf("auth");return s&&CE(t,`http://${s}`),t}function YT(){return document.getElementsByTagName("head")?.[0]??document}TE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Mt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",YT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WT("Browser");var qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jn,Fp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function v(){}v.prototype=m.prototype,E.D=m.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(I,b,S){for(var w=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)w[mt-2]=arguments[mt];return m.prototype[b].apply(I,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,v){v||(v=0);var I=Array(16);if(typeof m=="string")for(var b=0;16>b;++b)I[b]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(b=0;16>b;++b)I[b]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=E.g[0],v=E.g[1],b=E.g[2];var S=E.g[3],w=m+(S^v&(b^S))+I[0]+3614090360&4294967295;m=v+(w<<7&4294967295|w>>>25),w=S+(b^m&(v^b))+I[1]+3905402710&4294967295,S=m+(w<<12&4294967295|w>>>20),w=b+(v^S&(m^v))+I[2]+606105819&4294967295,b=S+(w<<17&4294967295|w>>>15),w=v+(m^b&(S^m))+I[3]+3250441966&4294967295,v=b+(w<<22&4294967295|w>>>10),w=m+(S^v&(b^S))+I[4]+4118548399&4294967295,m=v+(w<<7&4294967295|w>>>25),w=S+(b^m&(v^b))+I[5]+1200080426&4294967295,S=m+(w<<12&4294967295|w>>>20),w=b+(v^S&(m^v))+I[6]+2821735955&4294967295,b=S+(w<<17&4294967295|w>>>15),w=v+(m^b&(S^m))+I[7]+4249261313&4294967295,v=b+(w<<22&4294967295|w>>>10),w=m+(S^v&(b^S))+I[8]+1770035416&4294967295,m=v+(w<<7&4294967295|w>>>25),w=S+(b^m&(v^b))+I[9]+2336552879&4294967295,S=m+(w<<12&4294967295|w>>>20),w=b+(v^S&(m^v))+I[10]+4294925233&4294967295,b=S+(w<<17&4294967295|w>>>15),w=v+(m^b&(S^m))+I[11]+2304563134&4294967295,v=b+(w<<22&4294967295|w>>>10),w=m+(S^v&(b^S))+I[12]+1804603682&4294967295,m=v+(w<<7&4294967295|w>>>25),w=S+(b^m&(v^b))+I[13]+4254626195&4294967295,S=m+(w<<12&4294967295|w>>>20),w=b+(v^S&(m^v))+I[14]+2792965006&4294967295,b=S+(w<<17&4294967295|w>>>15),w=v+(m^b&(S^m))+I[15]+1236535329&4294967295,v=b+(w<<22&4294967295|w>>>10),w=m+(b^S&(v^b))+I[1]+4129170786&4294967295,m=v+(w<<5&4294967295|w>>>27),w=S+(v^b&(m^v))+I[6]+3225465664&4294967295,S=m+(w<<9&4294967295|w>>>23),w=b+(m^v&(S^m))+I[11]+643717713&4294967295,b=S+(w<<14&4294967295|w>>>18),w=v+(S^m&(b^S))+I[0]+3921069994&4294967295,v=b+(w<<20&4294967295|w>>>12),w=m+(b^S&(v^b))+I[5]+3593408605&4294967295,m=v+(w<<5&4294967295|w>>>27),w=S+(v^b&(m^v))+I[10]+38016083&4294967295,S=m+(w<<9&4294967295|w>>>23),w=b+(m^v&(S^m))+I[15]+3634488961&4294967295,b=S+(w<<14&4294967295|w>>>18),w=v+(S^m&(b^S))+I[4]+3889429448&4294967295,v=b+(w<<20&4294967295|w>>>12),w=m+(b^S&(v^b))+I[9]+568446438&4294967295,m=v+(w<<5&4294967295|w>>>27),w=S+(v^b&(m^v))+I[14]+3275163606&4294967295,S=m+(w<<9&4294967295|w>>>23),w=b+(m^v&(S^m))+I[3]+4107603335&4294967295,b=S+(w<<14&4294967295|w>>>18),w=v+(S^m&(b^S))+I[8]+1163531501&4294967295,v=b+(w<<20&4294967295|w>>>12),w=m+(b^S&(v^b))+I[13]+2850285829&4294967295,m=v+(w<<5&4294967295|w>>>27),w=S+(v^b&(m^v))+I[2]+4243563512&4294967295,S=m+(w<<9&4294967295|w>>>23),w=b+(m^v&(S^m))+I[7]+1735328473&4294967295,b=S+(w<<14&4294967295|w>>>18),w=v+(S^m&(b^S))+I[12]+2368359562&4294967295,v=b+(w<<20&4294967295|w>>>12),w=m+(v^b^S)+I[5]+4294588738&4294967295,m=v+(w<<4&4294967295|w>>>28),w=S+(m^v^b)+I[8]+2272392833&4294967295,S=m+(w<<11&4294967295|w>>>21),w=b+(S^m^v)+I[11]+1839030562&4294967295,b=S+(w<<16&4294967295|w>>>16),w=v+(b^S^m)+I[14]+4259657740&4294967295,v=b+(w<<23&4294967295|w>>>9),w=m+(v^b^S)+I[1]+2763975236&4294967295,m=v+(w<<4&4294967295|w>>>28),w=S+(m^v^b)+I[4]+1272893353&4294967295,S=m+(w<<11&4294967295|w>>>21),w=b+(S^m^v)+I[7]+4139469664&4294967295,b=S+(w<<16&4294967295|w>>>16),w=v+(b^S^m)+I[10]+3200236656&4294967295,v=b+(w<<23&4294967295|w>>>9),w=m+(v^b^S)+I[13]+681279174&4294967295,m=v+(w<<4&4294967295|w>>>28),w=S+(m^v^b)+I[0]+3936430074&4294967295,S=m+(w<<11&4294967295|w>>>21),w=b+(S^m^v)+I[3]+3572445317&4294967295,b=S+(w<<16&4294967295|w>>>16),w=v+(b^S^m)+I[6]+76029189&4294967295,v=b+(w<<23&4294967295|w>>>9),w=m+(v^b^S)+I[9]+3654602809&4294967295,m=v+(w<<4&4294967295|w>>>28),w=S+(m^v^b)+I[12]+3873151461&4294967295,S=m+(w<<11&4294967295|w>>>21),w=b+(S^m^v)+I[15]+530742520&4294967295,b=S+(w<<16&4294967295|w>>>16),w=v+(b^S^m)+I[2]+3299628645&4294967295,v=b+(w<<23&4294967295|w>>>9),w=m+(b^(v|~S))+I[0]+4096336452&4294967295,m=v+(w<<6&4294967295|w>>>26),w=S+(v^(m|~b))+I[7]+1126891415&4294967295,S=m+(w<<10&4294967295|w>>>22),w=b+(m^(S|~v))+I[14]+2878612391&4294967295,b=S+(w<<15&4294967295|w>>>17),w=v+(S^(b|~m))+I[5]+4237533241&4294967295,v=b+(w<<21&4294967295|w>>>11),w=m+(b^(v|~S))+I[12]+1700485571&4294967295,m=v+(w<<6&4294967295|w>>>26),w=S+(v^(m|~b))+I[3]+2399980690&4294967295,S=m+(w<<10&4294967295|w>>>22),w=b+(m^(S|~v))+I[10]+4293915773&4294967295,b=S+(w<<15&4294967295|w>>>17),w=v+(S^(b|~m))+I[1]+2240044497&4294967295,v=b+(w<<21&4294967295|w>>>11),w=m+(b^(v|~S))+I[8]+1873313359&4294967295,m=v+(w<<6&4294967295|w>>>26),w=S+(v^(m|~b))+I[15]+4264355552&4294967295,S=m+(w<<10&4294967295|w>>>22),w=b+(m^(S|~v))+I[6]+2734768916&4294967295,b=S+(w<<15&4294967295|w>>>17),w=v+(S^(b|~m))+I[13]+1309151649&4294967295,v=b+(w<<21&4294967295|w>>>11),w=m+(b^(v|~S))+I[4]+4149444226&4294967295,m=v+(w<<6&4294967295|w>>>26),w=S+(v^(m|~b))+I[11]+3174756917&4294967295,S=m+(w<<10&4294967295|w>>>22),w=b+(m^(S|~v))+I[2]+718787259&4294967295,b=S+(w<<15&4294967295|w>>>17),w=v+(S^(b|~m))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+S&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var v=m-this.blockSize,I=this.B,b=this.h,S=0;S<m;){if(b==0)for(;S<=v;)s(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<m;)if(I[b++]=E.charCodeAt(S++),b==this.blockSize){s(this,I),b=0;break}}else for(;S<m;)if(I[b++]=E[S++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var v=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=v&255,v/=256;for(this.u(E),E=Array(16),m=v=0;4>m;++m)for(var I=0;32>I;I+=8)E[v++]=this.g[m]>>>I&255;return E};function i(E,m){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=m(E)}function a(E,m){this.h=m;for(var v=[],I=!0,b=E.length-1;0<=b;b--){var S=E[b]|0;I&&S==m||(v[b]=S,I=!1)}this.g=v}var l={};function c(E){return-128<=E&&128>E?i(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return O(h(-E));for(var m=[],v=1,I=0;E>=v;I++)m[I]=E/v|0,v*=4294967296;return new a(m,0)}function f(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return O(f(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),I=g,b=0;b<E.length;b+=8){var S=Math.min(8,E.length-b),w=parseInt(E.substring(b,b+S),m);8>S?(S=h(Math.pow(m,S)),I=I.j(S).add(h(w))):(I=I.j(v),I=I.add(h(w)))}return I}var g=c(0),_=c(1),A=c(16777216);n=a.prototype,n.m=function(){if(k(this))return-O(this).m();for(var E=0,m=1,v=0;v<this.g.length;v++){var I=this.i(v);E+=(0<=I?I:4294967296+I)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(k(this))return"-"+O(this).toString(E);for(var m=h(Math.pow(E,6)),v=this,I="";;){var b=J(v,m).g;v=j(v,b.j(m));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=b,P(v))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=j(this,E),k(E)?-1:P(E)?0:1};function O(E){for(var m=E.g.length,v=[],I=0;I<m;I++)v[I]=~E.g[I];return new a(v,~E.h).add(_)}n.abs=function(){return k(this)?O(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),v=[],I=0,b=0;b<=m;b++){var S=I+(this.i(b)&65535)+(E.i(b)&65535),w=(S>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);I=w>>>16,S&=65535,w&=65535,v[b]=w<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function j(E,m){return E.add(O(m))}n.j=function(E){if(P(this)||P(E))return g;if(k(this))return k(E)?O(this).j(O(E)):O(O(this).j(E));if(k(E))return O(this.j(O(E)));if(0>this.l(A)&&0>E.l(A))return h(this.m()*E.m());for(var m=this.g.length+E.g.length,v=[],I=0;I<2*m;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<E.g.length;b++){var S=this.i(I)>>>16,w=this.i(I)&65535,mt=E.i(b)>>>16,Sn=E.i(b)&65535;v[2*I+2*b]+=w*Sn,N(v,2*I+2*b),v[2*I+2*b+1]+=S*Sn,N(v,2*I+2*b+1),v[2*I+2*b+1]+=w*mt,N(v,2*I+2*b+1),v[2*I+2*b+2]+=S*mt,N(v,2*I+2*b+2)}for(I=0;I<m;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=m;I<2*m;I++)v[I]=0;return new a(v,0)};function N(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function z(E,m){this.g=E,this.h=m}function J(E,m){if(P(m))throw Error("division by zero");if(P(E))return new z(g,g);if(k(E))return m=J(O(E),m),new z(O(m.g),O(m.h));if(k(m))return m=J(E,O(m)),new z(O(m.g),m.h);if(30<E.g.length){if(k(E)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var v=_,I=m;0>=I.l(E);)v=ee(v),I=ee(I);var b=ne(v,1),S=ne(I,1);for(I=ne(I,2),v=ne(v,2);!P(I);){var w=S.add(I);0>=w.l(E)&&(b=b.add(v),S=w),I=ne(I,1),v=ne(v,1)}return m=j(E,b.j(m)),new z(b,m)}for(b=g;0<=E.l(m);){for(v=Math.max(1,Math.floor(E.m()/m.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=h(v),w=S.j(m);k(w)||0<w.l(E);)v-=I,S=h(v),w=S.j(m);P(S)&&(S=_),b=b.add(S),E=j(E,w)}return new z(b,E)}n.A=function(E){return J(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)&E.i(I);return new a(v,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)|E.i(I);return new a(v,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)^E.i(I);return new a(v,this.h^E.h)};function ee(E){for(var m=E.g.length+1,v=[],I=0;I<m;I++)v[I]=E.i(I)<<1|E.i(I-1)>>>31;return new a(v,E.h)}function ne(E,m){var v=m>>5;m%=32;for(var I=E.g.length-v,b=[],S=0;S<I;S++)b[S]=0<m?E.i(S+v)>>>m|E.i(S+v+1)<<32-m:E.i(S+v);return new a(b,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Fp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,jn=a}).apply(typeof qh<"u"?qh:typeof self<"u"?self:typeof window<"u"?window:{});var Gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Up,ks,$p,oo,_l,Bp,jp,qp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gi=="object"&&Gi];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var C=d++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function _(o,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function A(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,C){for(var H=Array(arguments.length-2),be=2;be<arguments.length;be++)H[be-2]=arguments[be];return u.prototype[R].apply(p,H)}}function k(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function O(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const R=o.length||0,C=p.length||0;o.length=R+C;for(let H=0;H<C;H++)o[R+H]=p[H]}else o.push(p)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function J(o){return J[" "](o),o}J[" "]=function(){};var ee=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ne(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function E(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function m(o){const u={};for(const d in o)u[d]=o[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let C=0;C<v.length;C++)d=v[C],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function b(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function S(o){l.setTimeout(()=>{throw o},0)}function w(){var o=xt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class mt{constructor(){this.h=this.g=null}add(u,d){const p=Sn.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Sn=new j(()=>new ze,o=>o.reset());class ze{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,ye=!1,xt=new mt,er=()=>{const o=l.Promise.resolve(void 0);Ie=()=>{o.then(Zt)}};var Zt=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){S(d)}var u=Sn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ye=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var da=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function tr(o,u){if(Be.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ee){e:{try{J(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:nr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&tr.aa.h.call(this)}}P(tr,Be);var nr={2:"touch",3:"pen",4:"mouse"};tr.prototype.h=function(){tr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),fs=0;function Ai(o,u,d,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=R,this.key=++fs,this.da=this.fa=!1}function Ut(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ps(o){this.src=o,this.g={},this.h=0}ps.prototype.add=function(o,u,d,p,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var H=T(o,u,p,R);return-1<H?(u=o[H],d||(u.fa=!1)):(u=new Ai(u,this.src,C,!!p,R),u.fa=d,o.push(u)),u};function y(o,u){var d=u.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(p,R,1),C&&(Ut(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function T(o,u,d,p){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==p)return R}return-1}var x="closure_lm_"+(1e6*Math.random()|0),F={};function M(o,u,d,p,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)M(o,u[C],d,p,R);return null}return d=se(d),o&&o[en]?o.K(u,d,h(p)?!!p.capture:!1,R):L(o,u,d,!1,p,R)}function L(o,u,d,p,R,C){if(!u)throw Error("Invalid event type");var H=h(R)?!!R.capture:!!R,be=G(o);if(be||(o[x]=be=new ps(o)),d=be.add(u,d,p,H,C),d.proxy)return d;if(p=W(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)da||(R=H),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent(U(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function W(){function o(d){return u.call(o.src,o.listener,d)}const u=X;return o}function q(o,u,d,p,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)q(o,u[C],d,p,R);else p=h(p)?!!p.capture:!!p,d=se(d),o&&o[en]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],d=T(C,d,p,R),-1<d&&(Ut(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=G(o))&&(u=o.g[u.toString()],o=-1,u&&(o=T(u,d,p,R)),(d=-1<o?u[o]:null)&&B(d))}function B(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[en])y(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(U(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=G(u))?(y(d,o),d.h==0&&(d.src=null,u[x]=null)):Ut(o)}}}function U(o){return o in F?F[o]:F[o]="on"+o}function X(o,u){if(o.da)o=!0;else{u=new tr(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&B(o),o=d.call(p,u)}return o}function G(o){return o=o[x],o instanceof ps?o:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(o){return typeof o=="function"?o:(o[Y]||(o[Y]=function(u){return o.handleEvent(u)}),o[Y])}function te(){$e.call(this),this.i=new ps(this),this.M=this,this.F=null}P(te,$e),te.prototype[en]=!0,te.prototype.removeEventListener=function(o,u,d,p){q(this,o,u,d,p)};function ue(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Be(u,o);else if(u instanceof Be)u.target=u.target||o;else{var R=u;u=new Be(p,o),I(u,R)}if(R=!0,d)for(var C=d.length-1;0<=C;C--){var H=u.g=d[C];R=ge(H,p,!0,u)&&R}if(H=u.g=o,R=ge(H,p,!0,u)&&R,R=ge(H,p,!1,u)&&R,d)for(C=0;C<d.length;C++)H=u.g=d[C],R=ge(H,p,!1,u)&&R}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Ut(d[p]);delete o.g[u],o.h--}}this.F=null},te.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},te.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function ge(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var H=u[C];if(H&&!H.da&&H.capture==d){var be=H.listener,Qe=H.ha||H.src;H.fa&&y(o.i,H),R=be.call(Qe,p)!==!1&&R}}return R&&!p.defaultPrevented}function Ge(o,u,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function We(o){o.g=Ge(()=>{o.g=null,o.i&&(o.i=!1,We(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class It extends $e{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(o){$e.call(this),this.h=o,this.g={}}P(et,$e);var Rn=[];function gs(o){ne(o.g,function(u,d){this.g.hasOwnProperty(d)&&B(u)},o),o.g={}}et.prototype.N=function(){et.aa.N.call(this),gs(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ke=l.JSON.stringify,bt=l.JSON.parse,Si=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Sr(){}Sr.prototype.h=null;function Qc(o){return o.h||(o.h=o.i())}function Jc(){}var ms={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fa(){Be.call(this,"d")}P(fa,Be);function pa(){Be.call(this,"c")}P(pa,Be);var rr={},Yc=null;function Ri(){return Yc=Yc||new te}rr.La="serverreachability";function Xc(o){Be.call(this,rr.La,o)}P(Xc,Be);function _s(o){const u=Ri();ue(u,new Xc(u))}rr.STAT_EVENT="statevent";function Zc(o,u){Be.call(this,rr.STAT_EVENT,o),this.stat=u}P(Zc,Be);function ct(o){const u=Ri();ue(u,new Zc(u,o))}rr.Ma="timingevent";function eu(o,u){Be.call(this,rr.Ma,o),this.size=u}P(eu,Be);function ys(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function vs(){this.g=!0}vs.prototype.xa=function(){this.g=!1};function Em(o,u,d,p,R,C){o.info(function(){if(o.g)if(C)for(var H="",be=C.split("&"),Qe=0;Qe<be.length;Qe++){var ve=be[Qe].split("=");if(1<ve.length){var tt=ve[0];ve=ve[1];var nt=tt.split("_");H=2<=nt.length&&nt[1]=="type"?H+(tt+"="+ve+"&"):H+(tt+"=redacted&")}}else H=null;else H=C;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+d+`
`+H})}function Tm(o,u,d,p,R,C,H){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+d+`
`+C+" "+H})}function Rr(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+bm(o,d)+(p?" "+p:"")})}function Im(o,u){o.info(function(){return"TIMEOUT: "+u})}vs.prototype.info=function(){};function bm(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var H=1;H<R.length;H++)R[H]=""}}}}return Ke(d)}catch{return u}}var Ci={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ga;function Pi(){}P(Pi,Sr),Pi.prototype.g=function(){return new XMLHttpRequest},Pi.prototype.i=function(){return{}},ga=new Pi;function Cn(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nu}function nu(){this.i=null,this.g="",this.h=!1}var ru={},ma={};function _a(o,u,d){o.L=1,o.v=Di(tn(u)),o.m=d,o.P=!0,su(o,null)}function su(o,u){o.F=Date.now(),xi(o),o.A=tn(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),yu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new nu,o.g=Mu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new It(_(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Rn[0]=R.toString()),R=Rn);for(var C=0;C<R.length;C++){var H=M(d,R[C],p||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),_s(),Em(o.i,o.u,o.A,o.l,o.R,o.m)}Cn.prototype.ca=function(o){o=o.target;const u=this.M;u&&nn(o)==3?u.j():this.Y(o)},Cn.prototype.Y=function(o){try{if(o==this.g)e:{const nt=nn(this.g);var u=this.g.Ba();const xr=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Au(this.g)))){this.J||nt!=4||u==7||(u==8||0>=xr?_s(3):_s(2)),ya(this);var d=this.g.Z();this.X=d;t:if(iu(this)){var p=Au(this.g);o="";var R=p.length,C=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),ws(this);var H="";break t}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==R-1)});p.length=0,this.h.g+=o,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=d==200,Tm(this.i,this.u,this.A,this.l,this.R,nt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var be,Qe=this.g;if((be=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(be)){var ve=be;break t}}ve=null}if(d=ve)Rr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,va(this,d);else{this.o=!1,this.s=3,ct(12),sr(this),ws(this);break e}}if(this.P){d=!0;let kt;for(;!this.J&&this.C<H.length;)if(kt=Am(this,H),kt==ma){nt==4&&(this.s=4,ct(14),d=!1),Rr(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==ru){this.s=4,ct(15),Rr(this.i,this.l,H,"[Invalid Chunk]"),d=!1;break}else Rr(this.i,this.l,kt,null),va(this,kt);if(iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||H.length!=0||this.h.h||(this.s=1,ct(16),d=!1),this.o=this.o&&d,!d)Rr(this.i,this.l,H,"[Invalid Chunked Response]"),sr(this),ws(this);else if(0<H.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Aa(tt),tt.M=!0,ct(11))}}else Rr(this.i,this.l,H,null),va(this,H);nt==4&&sr(this),this.o&&!this.J&&(nt==4?Vu(this.j,this):(this.o=!1,xi(this)))}else jm(this.g),d==400&&0<H.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),sr(this),ws(this)}}}catch{}finally{}};function iu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Am(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?ma:(d=Number(u.substring(d,p)),isNaN(d)?ru:(p+=1,p+d>u.length?ma:(u=u.slice(p,p+d),o.C=p+d,u)))}Cn.prototype.cancel=function(){this.J=!0,sr(this)};function xi(o){o.S=Date.now()+o.I,ou(o,o.I)}function ou(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ys(_(o.ba,o),u)}function ya(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Cn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Im(this.i,this.A),this.L!=2&&(_s(),ct(17)),sr(this),this.s=2,ws(this)):ou(this,this.S-o)};function ws(o){o.j.G==0||o.J||Vu(o.j,o)}function sr(o){ya(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,gs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function va(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||wa(d.h,o))){if(!o.K&&wa(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ui(d),Li(d);else break e;ba(d),ct(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=ys(_(d.Za,d),6e3));if(1>=cu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else or(d,11)}else if((o.K||d.g==o)&&Ui(d),!N(u))for(R=d.Da.g.parse(u),u=0;u<R.length;u++){let ve=R[u];if(d.T=ve[0],ve=ve[1],d.G==2)if(ve[0]=="c"){d.K=ve[1],d.ia=ve[2];const tt=ve[3];tt!=null&&(d.la=tt,d.j.info("VER="+d.la));const nt=ve[4];nt!=null&&(d.Aa=nt,d.j.info("SVER="+d.Aa));const xr=ve[5];xr!=null&&typeof xr=="number"&&0<xr&&(p=1.5*xr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const kt=o.g;if(kt){const Bi=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var C=p.h;C.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ea(C,C.h),C.h=null))}if(p.D){const Sa=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Sa&&(p.ya=Sa,Pe(p.I,p.D,Sa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var H=o;if(p.qa=Ou(p,p.J?p.ia:null,p.W),H.K){uu(p.h,H);var be=H,Qe=p.L;Qe&&(be.I=Qe),be.B&&(ya(be),xi(be)),p.g=H}else xu(p);0<d.i.length&&Fi(d)}else ve[0]!="stop"&&ve[0]!="close"||or(d,7);else d.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?or(d,7):Ia(d):ve[0]!="noop"&&d.l&&d.l.ta(ve),d.v=0)}}_s(4)}catch{}}var Sm=class{constructor(o,u){this.g=o,this.map=u}};function au(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function cu(o){return o.h?1:o.g?o.g.size:0}function wa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ea(o,u){o.g?o.g.add(u):o.h=u}function uu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}au.prototype.cancel=function(){if(this.i=hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return k(o.i)}function Rm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function Cm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function du(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Cm(o),p=Rm(o),R=p.length,C=0;C<R;C++)u.call(void 0,p[C],d&&d[C],o)}var fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pm(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var C=o[d].substring(0,p);R=o[d].substring(p+1)}else C=o[d];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ir(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ir){this.h=o.h,ki(this,o.j),this.o=o.o,this.g=o.g,Vi(this,o.s),this.l=o.l;var u=o.i,d=new Is;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),pu(this,d),this.m=o.m}else o&&(u=String(o).match(fu))?(this.h=!1,ki(this,u[1]||"",!0),this.o=Es(u[2]||""),this.g=Es(u[3]||"",!0),Vi(this,u[4]),this.l=Es(u[5]||"",!0),pu(this,u[6]||"",!0),this.m=Es(u[7]||"")):(this.h=!1,this.i=new Is(null,this.h))}ir.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ts(u,gu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ts(u,gu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ts(d,d.charAt(0)=="/"?Vm:km,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ts(d,Nm)),o.join("")};function tn(o){return new ir(o)}function ki(o,u,d){o.j=d?Es(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Vi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function pu(o,u,d){u instanceof Is?(o.i=u,Om(o.i,o.h)):(d||(u=Ts(u,Dm)),o.i=new Is(u,o.h))}function Pe(o,u,d){o.i.set(u,d)}function Di(o){return Pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Es(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ts(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,xm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function xm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var gu=/[#\/\?@]/g,km=/[#\?:]/g,Vm=/[#\?]/g,Dm=/[#\?@]/g,Nm=/#/g;function Is(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Pn(o){o.g||(o.g=new Map,o.h=0,o.i&&Pm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Is.prototype,n.add=function(o,u){Pn(this),this.i=null,o=Cr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function mu(o,u){Pn(o),u=Cr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function _u(o,u){return Pn(o),u=Cr(o,u),o.g.has(u)}n.forEach=function(o,u){Pn(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(u,R,p,this)},this)},this)},n.na=function(){Pn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const R=o[p];for(let C=0;C<R.length;C++)d.push(u[p])}return d},n.V=function(o){Pn(this);let u=[];if(typeof o=="string")_u(this,o)&&(u=u.concat(this.g.get(Cr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return Pn(this),this.i=null,o=Cr(this,o),_u(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function yu(o,u,d){mu(o,u),0<d.length&&(o.i=null,o.g.set(Cr(o,u),k(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const C=encodeURIComponent(String(p)),H=this.V(p);for(p=0;p<H.length;p++){var R=C;H[p]!==""&&(R+="="+encodeURIComponent(String(H[p]))),o.push(R)}}return this.i=o.join("&")};function Cr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Om(o,u){u&&!o.j&&(Pn(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(mu(this,p),yu(this,R,d))},o)),o.j=u}function Mm(o,u){const d=new vs;if(l.Image){const p=new Image;p.onload=A(xn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=A(xn,d,"TestLoadImage: error",!1,u,p),p.onabort=A(xn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=A(xn,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Lm(o,u){const d=new vs,p=new AbortController,R=setTimeout(()=>{p.abort(),xn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(R),C.ok?xn(d,"TestPingServer: ok",!0,u):xn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),xn(d,"TestPingServer: error",!1,u)})}function xn(o,u,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function Fm(){this.g=new Si}function Um(o,u,d){const p=d||"";try{du(o,function(R,C){let H=R;h(R)&&(H=Ke(R)),u.push(p+C+"="+encodeURIComponent(H))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function Ni(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Ni,Sr),Ni.prototype.g=function(){return new Oi(this.l,this.j)},Ni.prototype.i=function(o){return function(){return o}}({});function Oi(o,u){te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Oi,te),n=Oi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,As(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function vu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?bs(this):As(this),this.readyState==3&&vu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,bs(this))},n.Qa=function(o){this.g&&(this.response=o,bs(this))},n.ga=function(){this.g&&bs(this)};function bs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,As(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function As(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wu(o){let u="";return ne(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Ta(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=wu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Pe(o,u,d))}function Ve(o){te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ve,te);var $m=/^https?$/i,Bm=["POST","PUT"];n=Ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ga.g(),this.v=this.o?Qc(this.o):Qc(ga),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Eu(this,C);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Bm,u,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,H]of d)this.g.setRequestHeader(C,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Eu(this,C)}};function Eu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Tu(o),Mi(o)}function Tu(o){o.A||(o.A=!0,ue(o,"complete"),ue(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ue(this,"complete"),ue(this,"abort"),Mi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mi(this,!0)),Ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Iu(this):this.bb())},n.bb=function(){Iu(this)};function Iu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nn(o)!=4||o.Z()!=2)){if(o.u&&nn(o)==4)Ge(o.Ea,0,o);else if(ue(o,"readystatechange"),nn(o)==4){o.h=!1;try{const H=o.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=H===0){var R=String(o.D).match(fu)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!$m.test(R?R.toLowerCase():"")}d=p}if(d)ue(o,"complete"),ue(o,"success");else{o.m=6;try{var C=2<nn(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Tu(o)}}finally{Mi(o)}}}}function Mi(o,u){if(o.g){bu(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ue(o,"ready");try{d.onreadystatechange=p}catch{}}}function bu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function nn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),bt(u)}};function Au(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function jm(o){const u={};o=(o.g&&2<=nn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(N(o[p]))continue;var d=b(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[R]||[];u[R]=C,C.push(d)}E(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Su(o){this.Aa=0,this.i=[],this.j=new vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ss("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ss("baseRetryDelayMs",5e3,o),this.cb=Ss("retryDelaySeedMs",1e4,o),this.Wa=Ss("forwardChannelMaxRetries",2,o),this.wa=Ss("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new au(o&&o.concurrentRequestLimit),this.Da=new Fm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Su.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,p){ct(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Ou(this,null,this.W),Fi(this)};function Ia(o){if(Ru(o),o.G==3){var u=o.U++,d=tn(o.I);if(Pe(d,"SID",o.K),Pe(d,"RID",u),Pe(d,"TYPE","terminate"),Rs(o,d),u=new Cn(o,o.j,u),u.L=2,u.v=Di(tn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Mu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),xi(u)}Nu(o)}function Li(o){o.g&&(Aa(o),o.g.cancel(),o.g=null)}function Ru(o){Li(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ui(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Fi(o){if(!lu(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ie||er(),ye||(Ie(),ye=!0),xt.add(u,o),o.B=0}}function qm(o,u){return cu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ys(_(o.Ga,o,u),Du(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Cn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),I(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Pu(this,R,u),d=tn(this.I),Pe(d,"RID",o),Pe(d,"CVER",22),this.D&&Pe(d,"X-HTTP-Session-Id",this.D),Rs(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(wu(C)))+"&"+u:this.m&&Ta(d,this.m,C)),Ea(this.h,R),this.Ua&&Pe(d,"TYPE","init"),this.P?(Pe(d,"$req",u),Pe(d,"SID","null"),R.T=!0,_a(R,d,null)):_a(R,d,u),this.G=2}}else this.G==3&&(o?Cu(this,o):this.i.length==0||lu(this.h)||Cu(this))};function Cu(o,u){var d;u?d=u.l:d=o.U++;const p=tn(o.I);Pe(p,"SID",o.K),Pe(p,"RID",d),Pe(p,"AID",o.T),Rs(o,p),o.m&&o.o&&Ta(p,o.m,o.o),d=new Cn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Pu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ea(o.h,d),_a(d,p,u)}function Rs(o,u){o.H&&ne(o.H,function(d,p){Pe(u,p,d)}),o.l&&du({},function(d,p){Pe(u,p,d)})}function Pu(o,u,d){d=Math.min(o.i.length,d);var p=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const H=["count="+d];C==-1?0<d?(C=R[0].g,H.push("ofs="+C)):C=0:H.push("ofs="+C);let be=!0;for(let Qe=0;Qe<d;Qe++){let ve=R[Qe].g;const tt=R[Qe].map;if(ve-=C,0>ve)C=Math.max(0,R[Qe].g-100),be=!1;else try{Um(tt,H,"req"+ve+"_")}catch{p&&p(tt)}}if(be){p=H.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function xu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ie||er(),ye||(Ie(),ye=!0),xt.add(u,o),o.v=0}}function ba(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ys(_(o.Fa,o),Du(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ku(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ys(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Li(this),ku(this))};function Aa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function ku(o){o.g=new Cn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=tn(o.qa);Pe(u,"RID","rpc"),Pe(u,"SID",o.K),Pe(u,"AID",o.T),Pe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Pe(u,"TO",o.ja),Pe(u,"TYPE","xmlhttp"),Rs(o,u),o.m&&o.o&&Ta(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Di(tn(u)),d.m=null,d.P=!0,su(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Li(this),ba(this),ct(19))};function Ui(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Vu(o,u){var d=null;if(o.g==u){Ui(o),Aa(o),o.g=null;var p=2}else if(wa(o.h,u))d=u.D,uu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;p=Ri(),ue(p,new eu(p,d)),Fi(o)}else xu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&qm(o,u)||p==2&&ba(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),R){case 1:or(o,5);break;case 4:or(o,10);break;case 3:or(o,6);break;default:or(o,2)}}}function Du(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function or(o,u){if(o.j.info("Error code "+u),u==2){var d=_(o.fb,o),p=o.Xa;const R=!p;p=new ir(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ki(p,"https"),Di(p),R?Mm(p.toString(),d):Lm(p.toString(),d)}else ct(2);o.G=0,o.l&&o.l.sa(u),Nu(o),Ru(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Nu(o){if(o.G=0,o.ka=[],o.l){const u=hu(o.h);(u.length!=0||o.i.length!=0)&&(O(o.ka,u),O(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Ou(o,u,d){var p=d instanceof ir?tn(d):new ir(d);if(p.g!="")u&&(p.g=u+"."+p.g),Vi(p,p.s);else{var R=l.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new ir(null);p&&ki(C,p),u&&(C.g=u),R&&Vi(C,R),d&&(C.l=d),p=C}return d=o.D,u=o.ya,d&&u&&Pe(p,d,u),Pe(p,"VER",o.la),Rs(o,p),p}function Mu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ve(new Ni({eb:d})):new Ve(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lu(){}n=Lu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function $i(){}$i.prototype.g=function(o,u){return new _t(o,u)};function _t(o,u){te.call(this),this.g=new Su(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!N(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!N(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Pr(this)}P(_t,te),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){Ia(this.g)},_t.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ke(o),o=d);u.i.push(new Sm(u.Ya++,o)),u.G==3&&Fi(u)},_t.prototype.N=function(){this.g.l=null,delete this.j,Ia(this.g),delete this.g,_t.aa.N.call(this)};function Fu(o){fa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(Fu,fa);function Uu(){pa.call(this),this.status=1}P(Uu,pa);function Pr(o){this.g=o}P(Pr,Lu),Pr.prototype.ua=function(){ue(this.g,"a")},Pr.prototype.ta=function(o){ue(this.g,new Fu(o))},Pr.prototype.sa=function(o){ue(this.g,new Uu)},Pr.prototype.ra=function(){ue(this.g,"b")},$i.prototype.createWebChannel=$i.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,qp=function(){return new $i},jp=function(){return Ri()},Bp=rr,_l={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ci.NO_ERROR=0,Ci.TIMEOUT=8,Ci.HTTP_ERROR=6,oo=Ci,tu.COMPLETE="complete",$p=tu,Jc.EventType=ms,ms.OPEN="a",ms.CLOSE="b",ms.ERROR="c",ms.MESSAGE="d",te.prototype.listen=te.prototype.K,ks=Jc,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,Up=Ve}).apply(typeof Gi<"u"?Gi:typeof self<"u"?self:typeof window<"u"?window:{});const Hh="@firebase/firestore",zh="4.9.0";/**
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
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let as="12.0.0";/**
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
 */const vr=new ec("@firebase/firestore");function Nr(){return vr.logLevel}function Q(n,...e){if(vr.logLevel<=de.DEBUG){const t=e.map(fc);vr.debug(`Firestore (${as}): ${n}`,...t)}}function wn(n,...e){if(vr.logLevel<=de.ERROR){const t=e.map(fc);vr.error(`Firestore (${as}): ${n}`,...t)}}function Jr(n,...e){if(vr.logLevel<=de.WARN){const t=e.map(fc);vr.warn(`Firestore (${as}): ${n}`,...t)}}function fc(n){if(typeof n=="string")return n;try{/**
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
 */function re(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Hp(n,r,t)}function Hp(n,e,t){let r=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw wn(r),new Error(r)}function Te(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Hp(e,s,r)}function ce(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class zp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(st.UNAUTHENTICATED))}shutdown(){}}class ZT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eI{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Te(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string",31837,{l:r}),new zp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class tI{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nI{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new tI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Te(this.o===void 0,3512);const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Gh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Gh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class pc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=sI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function fe(n,e){return n<e?-1:n>e?1:0}function yl(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return za(s)===za(i)?fe(s,i):za(s)?1:-1}return fe(n.length,e.length)}const iI=55296,oI=57343;function za(n){const e=n.charCodeAt(0);return e>=iI&&e<=oI}function Yr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Wh="__name__";class jt{constructor(e,t,r){t===void 0?t=0:t>e.length&&re(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&re(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return jt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=jt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return fe(e.length,t.length)}static compareSegments(e,t){const r=jt.isNumericId(e),s=jt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?jt.extractNumericId(e).compare(jt.extractNumericId(t)):yl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jn.fromString(e.substring(4,e.length-2))}}class Re extends jt{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Re(t)}static emptyPath(){return new Re([])}}const aI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends jt{construct(e,t,r){return new Xe(e,t,r)}static isValidIdentifier(e){return aI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wh}static keyField(){return new Xe([Wh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new K(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(t)}static emptyPath(){return new Xe([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Re.fromString(e))}static fromName(e){return new Z(Re.fromString(e).popFirst(5))}static empty(){return new Z(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Re(e.slice()))}}/**
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
 */function Gp(n,e,t){if(!t)throw new K(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function lI(n,e,t,r){if(e===!0&&r===!0)throw new K(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Kh(n){if(!Z.isDocumentKey(n))throw new K(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qh(n){if(Z.isDocumentKey(n))throw new K(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Zo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":re(12329,{type:typeof n})}function En(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zo(n);throw new K(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Le(n,e){const t={typeString:n};return e&&(t.value=e),t}function yi(n,e){if(!Wp(n))throw new K(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new K(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const Jh=-62135596800,Yh=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Yh);return new Ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Jh)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yh}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(yi(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Le("string",Ce._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
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
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Ce(0,0))}static max(){return new ae(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ri=-1;function cI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new Ce(t+1,0):new Ce(t,r));return new Wn(s,Z.empty(),e)}function uI(n){return new Wn(n.readTime,n.key,ri)}class Wn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Wn(ae.min(),Z.empty(),ri)}static max(){return new Wn(ae.max(),Z.empty(),ri)}}function hI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:fe(n.largestBatchId,e.largestBatchId))}/**
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
 */async function ls(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==dI)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(s=>s?D.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new D((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new D((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function pI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function cs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ea{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ea.ce=-1;/**
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
 */const gc=-1;function ta(n){return n==null}function Ro(n){return n===0&&1/n==-1/0}function gI(n){return typeof n=="number"&&Number.isInteger(n)&&!Ro(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Kp="";function mI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xh(e)),e=_I(n.get(t),e);return Xh(e)}function _I(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Kp:t+="";break;default:t+=i}}return t}function Xh(n){return n+Kp+""}/**
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
 */function Zh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Tr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ke{constructor(e,t){this.comparator=e,this.root=t||Je.EMPTY}insert(e,t){return new ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wi(this.root,e,this.comparator,!0)}}class Wi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Je(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ed(this.data.getIterator())}getIteratorFrom(e){return new ed(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new qe(this.comparator);return t.data=e,t}}class ed{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Nt([])}unionWith(e){let t=new qe(Xe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Jp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Jp("Invalid base64 string: "+i):i}}(e);return new Ze(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const yI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(n){if(Te(!!n,39018),typeof n=="string"){let e=0;const t=yI.exec(n);if(Te(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(n.seconds),nanos:Ne(n.nanos)}}function Ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qn(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */const Yp="server_timestamp",Xp="__type__",Zp="__previous_value__",eg="__local_write_time__";function mc(n){return(n?.mapValue?.fields||{})[Xp]?.stringValue===Yp}function na(n){const e=n.mapValue.fields[Zp];return mc(e)?na(e):e}function si(n){const e=Kn(n.mapValue.fields[eg].timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class vI{constructor(e,t,r,s,i,a,l,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const Co="(default)";class ii{constructor(e,t){this.projectId=e,this.database=t||Co}static empty(){return new ii("","")}get isDefaultDatabase(){return this.database===Co}isEqual(e){return e instanceof ii&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const tg="__type__",wI="__max__",Ki={mapValue:{}},ng="__vector__",Po="value";function Jn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mc(n)?4:TI(n)?9007199254740991:EI(n)?10:11:re(28295,{value:n})}function Xt(n,e){if(n===e)return!0;const t=Jn(n);if(t!==Jn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return si(n).isEqual(si(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Kn(s.timestampValue),l=Kn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Qn(s.bytesValue).isEqual(Qn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ne(s.doubleValue),l=Ne(i.doubleValue);return a===l?Ro(a)===Ro(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Yr(n.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Zh(a)!==Zh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Xt(a[c],l[c])))return!1;return!0}(n,e);default:return re(52216,{left:n})}}function oi(n,e){return(n.values||[]).find(t=>Xt(t,e))!==void 0}function Xr(n,e){if(n===e)return 0;const t=Jn(n),r=Jn(e);if(t!==r)return fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ne(i.integerValue||i.doubleValue),c=Ne(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return td(n.timestampValue,e.timestampValue);case 4:return td(si(n),si(e));case 5:return yl(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Qn(i),c=Qn(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=fe(l[h],c[h]);if(f!==0)return f}return fe(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=fe(Ne(i.latitude),Ne(a.latitude));return l!==0?l:fe(Ne(i.longitude),Ne(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return nd(n.arrayValue,e.arrayValue);case 10:return function(i,a){const l=i.fields||{},c=a.fields||{},h=l[Po]?.arrayValue,f=c[Po]?.arrayValue,g=fe(h?.values?.length||0,f?.values?.length||0);return g!==0?g:nd(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ki.mapValue&&a===Ki.mapValue)return 0;if(i===Ki.mapValue)return 1;if(a===Ki.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const _=yl(c[g],f[g]);if(_!==0)return _;const A=Xr(l[c[g]],h[f[g]]);if(A!==0)return A}return fe(c.length,f.length)}(n.mapValue,e.mapValue);default:throw re(23264,{he:t})}}function td(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return fe(n,e);const t=Kn(n),r=Kn(e),s=fe(t.seconds,r.seconds);return s!==0?s:fe(t.nanos,r.nanos)}function nd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Xr(t[s],r[s]);if(i)return i}return fe(t.length,r.length)}function Zr(n){return vl(n)}function vl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Kn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Qn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=vl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${vl(t.fields[a])}`;return s+"}"}(n.mapValue):re(61005,{value:n})}function ao(n){switch(Jn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=na(n);return e?16+ao(e):16;case 5:return 2*n.stringValue.length;case 6:return Qn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ao(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Tr(r.fields,(i,a)=>{s+=i.length+ao(a)}),s}(n.mapValue);default:throw re(13486,{value:n})}}function rd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wl(n){return!!n&&"integerValue"in n}function _c(n){return!!n&&"arrayValue"in n}function sd(n){return!!n&&"nullValue"in n}function id(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function lo(n){return!!n&&"mapValue"in n}function EI(n){return(n?.mapValue?.fields||{})[tg]?.stringValue===ng}function zs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Tr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=zs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zs(n.arrayValue.values[t]);return e}return{...n}}function TI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wI}/**
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
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!lo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(t)}setAll(e){let t=Xe.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=zs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());lo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];lo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Tr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new St(zs(this.value))}}function rg(n){const e=[];return Tr(n.fields,(t,r)=>{const s=new Xe([t]);if(lo(r)){const i=rg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Nt(e)}/**
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
 */class ot{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ot(e,0,ae.min(),ae.min(),ae.min(),St.empty(),0)}static newFoundDocument(e,t,r,s){return new ot(e,1,t,ae.min(),r,s,0)}static newNoDocument(e,t){return new ot(e,2,t,ae.min(),ae.min(),St.empty(),0)}static newUnknownDocument(e,t){return new ot(e,3,t,ae.min(),ae.min(),St.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xo{constructor(e,t){this.position=e,this.inclusive=t}}function od(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=Xr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ad(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Xt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ko{constructor(e,t="asc"){this.field=e,this.dir=t}}function II(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class sg{}class Me extends sg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new AI(e,t,r):t==="array-contains"?new CI(e,r):t==="in"?new PI(e,r):t==="not-in"?new xI(e,r):t==="array-contains-any"?new kI(e,r):new Me(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new SI(e,r):new RI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Xr(t,this.value)):t!==null&&Jn(this.value)===Jn(t)&&this.matchesComparison(Xr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends sg{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ft(e,t)}matches(e){return ig(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ig(n){return n.op==="and"}function og(n){return bI(n)&&ig(n)}function bI(n){for(const e of n.filters)if(e instanceof Ft)return!1;return!0}function El(n){if(n instanceof Me)return n.field.canonicalString()+n.op.toString()+Zr(n.value);if(og(n))return n.filters.map(e=>El(e)).join(",");{const e=n.filters.map(t=>El(t)).join(",");return`${n.op}(${e})`}}function ag(n,e){return n instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&Xt(r.value,s.value)}(n,e):n instanceof Ft?function(r,s){return s instanceof Ft&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&ag(a,s.filters[l]),!0):!1}(n,e):void re(19439)}function lg(n){return n instanceof Me?function(t){return`${t.field.canonicalString()} ${t.op} ${Zr(t.value)}`}(n):n instanceof Ft?function(t){return t.op.toString()+" {"+t.getFilters().map(lg).join(" ,")+"}"}(n):"Filter"}class AI extends Me{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class SI extends Me{constructor(e,t){super(e,"in",t),this.keys=cg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class RI extends Me{constructor(e,t){super(e,"not-in",t),this.keys=cg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cg(n,e){return(e.arrayValue?.values||[]).map(t=>Z.fromName(t.referenceValue))}class CI extends Me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _c(t)&&oi(t.arrayValue,this.value)}}class PI extends Me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&oi(this.value.arrayValue,t)}}class xI extends Me{constructor(e,t){super(e,"not-in",t)}matches(e){if(oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!oi(this.value.arrayValue,t)}}class kI extends Me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_c(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>oi(this.value.arrayValue,r))}}/**
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
 */class VI{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function ld(n,e=null,t=[],r=[],s=null,i=null,a=null){return new VI(n,e,t,r,s,i,a)}function yc(n){const e=ce(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>El(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ta(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Zr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Zr(r)).join(",")),e.Te=t}return e.Te}function vc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!II(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ag(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ad(n.startAt,e.startAt)&&ad(n.endAt,e.endAt)}function Tl(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class vi{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function DI(n,e,t,r,s,i,a,l){return new vi(n,e,t,r,s,i,a,l)}function wc(n){return new vi(n)}function cd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ug(n){return n.collectionGroup!==null}function Gs(n){const e=ce(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new qe(Xe.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ko(i,r))}),t.has(Xe.keyField().canonicalString())||e.Ie.push(new ko(Xe.keyField(),r))}return e.Ie}function Gt(n){const e=ce(n);return e.Ee||(e.Ee=NI(e,Gs(n))),e.Ee}function NI(n,e){if(n.limitType==="F")return ld(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ko(s.field,i)});const t=n.endAt?new xo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new xo(n.startAt.position,n.startAt.inclusive):null;return ld(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Il(n,e){const t=n.filters.concat([e]);return new vi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function bl(n,e,t){return new vi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ra(n,e){return vc(Gt(n),Gt(e))&&n.limitType===e.limitType}function hg(n){return`${yc(Gt(n))}|lt:${n.limitType}`}function Or(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>lg(s)).join(", ")}]`),ta(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Zr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Zr(s)).join(",")),`Target(${r})`}(Gt(n))}; limitType=${n.limitType})`}function sa(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Gs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=od(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Gs(r),s)||r.endAt&&!function(a,l,c){const h=od(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Gs(r),s))}(n,e)}function OI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function dg(n){return(e,t)=>{let r=!1;for(const s of Gs(n)){const i=MI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function MI(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Xr(c,h):re(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:n.dir})}}/**
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
 */class Ir{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Tr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Qp(this.inner)}size(){return this.innerSize}}/**
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
 */const LI=new ke(Z.comparator);function Tn(){return LI}const fg=new ke(Z.comparator);function Vs(...n){let e=fg;for(const t of n)e=e.insert(t.key,t);return e}function pg(n){let e=fg;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function fr(){return Ws()}function gg(){return Ws()}function Ws(){return new Ir(n=>n.toString(),(n,e)=>n.isEqual(e))}const FI=new ke(Z.comparator),UI=new qe(Z.comparator);function pe(...n){let e=UI;for(const t of n)e=e.add(t);return e}const $I=new qe(fe);function BI(){return $I}/**
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
 */function Ec(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ro(e)?"-0":e}}function mg(n){return{integerValue:""+n}}function jI(n,e){return gI(e)?mg(e):Ec(n,e)}/**
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
 */class ia{constructor(){this._=void 0}}function qI(n,e,t){return n instanceof Vo?function(s,i){const a={fields:{[Xp]:{stringValue:Yp},[eg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mc(i)&&(i=na(i)),i&&(a.fields[Zp]=i),{mapValue:a}}(t,e):n instanceof ai?yg(n,e):n instanceof li?vg(n,e):function(s,i){const a=_g(s,i),l=ud(a)+ud(s.Ae);return wl(a)&&wl(s.Ae)?mg(l):Ec(s.serializer,l)}(n,e)}function HI(n,e,t){return n instanceof ai?yg(n,e):n instanceof li?vg(n,e):t}function _g(n,e){return n instanceof Do?function(r){return wl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Vo extends ia{}class ai extends ia{constructor(e){super(),this.elements=e}}function yg(n,e){const t=wg(e);for(const r of n.elements)t.some(s=>Xt(s,r))||t.push(r);return{arrayValue:{values:t}}}class li extends ia{constructor(e){super(),this.elements=e}}function vg(n,e){let t=wg(e);for(const r of n.elements)t=t.filter(s=>!Xt(s,r));return{arrayValue:{values:t}}}class Do extends ia{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ud(n){return Ne(n.integerValue||n.doubleValue)}function wg(n){return _c(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zI(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ai&&s instanceof ai||r instanceof li&&s instanceof li?Yr(r.elements,s.elements,Xt):r instanceof Do&&s instanceof Do?Xt(r.Ae,s.Ae):r instanceof Vo&&s instanceof Vo}(n.transform,e.transform)}class GI{constructor(e,t){this.version=e,this.transformResults=t}}class Lt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function co(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class oa{}function Eg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Tc(n.key,Lt.none()):new wi(n.key,n.data,Lt.none());{const t=n.data,r=St.empty();let s=new qe(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new br(n.key,r,new Nt(s.toArray()),Lt.none())}}function WI(n,e,t){n instanceof wi?function(s,i,a){const l=s.value.clone(),c=dd(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof br?function(s,i,a){if(!co(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=dd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Tg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ks(n,e,t,r){return n instanceof wi?function(i,a,l,c){if(!co(i.precondition,a))return l;const h=i.value.clone(),f=fd(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof br?function(i,a,l,c){if(!co(i.precondition,a))return l;const h=fd(i.fieldTransforms,c,a),f=a.data;return f.setAll(Tg(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return co(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function KI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=_g(r.transform,s||null);i!=null&&(t===null&&(t=St.empty()),t.set(r.field,i))}return t||null}function hd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Yr(r,s,(i,a)=>zI(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wi extends oa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class br extends oa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function dd(n,e,t){const r=new Map;Te(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,HI(a,l,t[s]))}return r}function fd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,qI(i,a,e))}return r}class Tc extends oa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QI extends oa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class JI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&WI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ks(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ks(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=Eg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),pe())}isEqual(e){return this.batchId===e.batchId&&Yr(this.mutations,e.mutations,(t,r)=>hd(t,r))&&Yr(this.baseMutations,e.baseMutations,(t,r)=>hd(t,r))}}class Ic{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Te(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return FI}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ic(e,t,r,s)}}/**
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
 */var Oe,me;function ZI(n){switch(n){case V.OK:return re(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return re(15467,{code:n})}}function Ig(n){if(n===void 0)return wn("GRPC error has no .code"),V.UNKNOWN;switch(n){case Oe.OK:return V.OK;case Oe.CANCELLED:return V.CANCELLED;case Oe.UNKNOWN:return V.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return V.INTERNAL;case Oe.UNAVAILABLE:return V.UNAVAILABLE;case Oe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Oe.NOT_FOUND:return V.NOT_FOUND;case Oe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Oe.ABORTED:return V.ABORTED;case Oe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Oe.DATA_LOSS:return V.DATA_LOSS;default:return re(39323,{code:n})}}(me=Oe||(Oe={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function e0(){return new TextEncoder}/**
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
 */const t0=new jn([4294967295,4294967295],0);function pd(n){const e=e0().encode(n),t=new Fp;return t.update(e),new Uint8Array(t.digest())}function gd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jn([t,r],0),new jn([s,i],0)]}class bc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ds(`Invalid padding: ${t}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=jn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(jn.fromNumber(r)));return s.compare(t0)===1&&(s=new jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=pd(e),[r,s]=gd(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new bc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=pd(e),[r,s]=gd(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class aa{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ei.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new aa(ae.min(),s,new ke(fe),Tn(),pe())}}class Ei{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ei(r,t,pe(),pe(),pe())}}/**
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
 */class uo{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class bg{constructor(e,t){this.targetId=e,this.Ce=t}}class Ag{constructor(e,t,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class md{constructor(){this.ve=0,this.Fe=_d(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=pe(),t=pe(),r=pe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:re(38017,{changeType:i})}}),new Ei(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=_d()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Te(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class n0{constructor(e){this.Ge=e,this.ze=new Map,this.je=Tn(),this.Je=Qi(),this.He=Qi(),this.Ye=new ke(fe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:re(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Tl(i))if(r===0){const a=new Z(i.path);this.et(t,a,ot.newNoDocument(a,ae.min()))}else Te(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),c=l?this.ct(l,e,a):1;if(c!==0){this.it(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Qn(r).toUint8Array()}catch(c){if(c instanceof Jp)return Jr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new bc(a,s,i)}catch(c){return Jr(c instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&Tl(l.target)){const c=new Z(l.target.path);this.It(c).has(a)||this.Et(a,c)||this.et(a,c,ot.newNoDocument(c,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=pe();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new aa(e,t,this.Ye,this.je,r);return this.je=Tn(),this.Je=Qi(),this.He=Qi(),this.Ye=new ke(fe),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new md,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new qe(fe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new qe(fe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new md),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Qi(){return new ke(Z.comparator)}function _d(){return new ke(Z.comparator)}const r0={asc:"ASCENDING",desc:"DESCENDING"},s0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},i0={and:"AND",or:"OR"};class o0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Al(n,e){return n.useProto3Json||ta(e)?e:{value:e}}function No(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function a0(n,e){return No(n,e.toTimestamp())}function Wt(n){return Te(!!n,49232),ae.fromTimestamp(function(t){const r=Kn(t);return new Ce(r.seconds,r.nanos)}(n))}function Ac(n,e){return Sl(n,e).canonicalString()}function Sl(n,e){const t=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Rg(n){const e=Re.fromString(n);return Te(Vg(e),10190,{key:e.toString()}),e}function Rl(n,e){return Ac(n.databaseId,e.path)}function Ga(n,e){const t=Rg(e);if(t.get(1)!==n.databaseId.projectId)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(Pg(t))}function Cg(n,e){return Ac(n.databaseId,e)}function l0(n){const e=Rg(n);return e.length===4?Re.emptyPath():Pg(e)}function Cl(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Pg(n){return Te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function yd(n,e,t){return{name:Rl(n,e),fields:t.value.mapValue.fields}}function c0(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:re(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Te(f===void 0||typeof f=="string",58123),Ze.fromBase64String(f||"")):(Te(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ze.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?V.UNKNOWN:Ig(h.code);return new K(f,h.message||"")}(a);t=new Ag(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ga(n,r.document.name),i=Wt(r.document.updateTime),a=r.document.createTime?Wt(r.document.createTime):ae.min(),l=new St({mapValue:{fields:r.document.fields}}),c=ot.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new uo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ga(n,r.document),i=r.readTime?Wt(r.readTime):ae.min(),a=ot.newNoDocument(s,i),l=r.removedTargetIds||[];t=new uo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ga(n,r.document),i=r.removedTargetIds||[];t=new uo([],i,s,null)}else{if(!("filter"in e))return re(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new XI(s,i),l=r.targetId;t=new bg(l,a)}}return t}function u0(n,e){let t;if(e instanceof wi)t={update:yd(n,e.key,e.value)};else if(e instanceof Tc)t={delete:Rl(n,e.key)};else if(e instanceof br)t={update:yd(n,e.key,e.data),updateMask:v0(e.fieldMask)};else{if(!(e instanceof QI))return re(16599,{Vt:e.type});t={verify:Rl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Vo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ai)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof li)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Do)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw re(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:a0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re(27497)}(n,e.precondition)),t}function h0(n,e){return n&&n.length>0?(Te(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Wt(s.updateTime):Wt(i);return a.isEqual(ae.min())&&(a=Wt(i)),new GI(a,s.transformResults||[])}(t,e))):[]}function d0(n,e){return{documents:[Cg(n,e.path)]}}function f0(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Cg(n,s);const i=function(h){if(h.length!==0)return kg(Ft.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Mr(_.field),direction:m0(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Al(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function p0(n){let e=l0(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Te(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const _=xg(g);return _ instanceof Ft&&og(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(_=>function(P){return new ko(Lr(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(_))}(t.orderBy));let l=null;t.limit&&(l=function(g){let _;return _=typeof g=="object"?g.value:g,ta(_)?null:_}(t.limit));let c=null;t.startAt&&(c=function(g){const _=!!g.before,A=g.values||[];return new xo(A,_)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const _=!g.before,A=g.values||[];return new xo(A,_)}(t.endAt)),DI(e,s,a,i,l,"F",c,h)}function g0(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Lr(t.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Lr(t.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Lr(t.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Lr(t.unaryFilter.field);return Me.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(n):n.fieldFilter!==void 0?function(t){return Me.create(Lr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ft.create(t.compositeFilter.filters.map(r=>xg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(t.compositeFilter.op))}(n):re(30097,{filter:n})}function m0(n){return r0[n]}function _0(n){return s0[n]}function y0(n){return i0[n]}function Mr(n){return{fieldPath:n.canonicalString()}}function Lr(n){return Xe.fromServerFormat(n.fieldPath)}function kg(n){return n instanceof Me?function(t){if(t.op==="=="){if(id(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NAN"}};if(sd(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(id(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NOT_NAN"}};if(sd(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(t.field),op:_0(t.op),value:t.value}}}(n):n instanceof Ft?function(t){const r=t.getFilters().map(s=>kg(s));return r.length===1?r[0]:{compositeFilter:{op:y0(t.op),filters:r}}}(n):re(54877,{filter:n})}function v0(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Vg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ln{constructor(e,t,r,s,i=ae.min(),a=ae.min(),l=Ze.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class w0{constructor(e){this.yt=e}}function E0(n){const e=p0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bl(e,e.limit,"L"):e}/**
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
 */class T0{constructor(){this.Cn=new I0}addToCollectionParentIndex(e,t){return this.Cn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Wn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class I0{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new qe(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(Re.comparator)).toArray()}}/**
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
 */const vd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Dg=41943040;class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */gt.DEFAULT_COLLECTION_PERCENTILE=10,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gt.DEFAULT=new gt(Dg,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gt.DISABLED=new gt(-1,0,0);/**
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
 */class es{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new es(0)}static cr(){return new es(-1)}}/**
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
 */const wd="LruGarbageCollector",b0=1048576;function Ed([n,e],[t,r]){const s=fe(n,t);return s===0?fe(e,r):s}class A0{constructor(e){this.Ir=e,this.buffer=new qe(Ed),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ed(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class S0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Q(wd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cs(t)?Q(wd,"Ignoring IndexedDB error during garbage collection: ",t):await ls(t)}await this.Vr(3e5)})}}class R0{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(ea.ce);const r=new A0(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(vd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vd):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Nr()<=de.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function C0(n,e){return new R0(n,e)}/**
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
 */class P0{constructor(){this.changes=new Ir(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class x0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class k0{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ks(r.mutation,s,Nt.empty(),Ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=pe()){const s=fr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Vs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=fr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,pe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=Tn();const a=Ws(),l=function(){return Ws()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof br)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ks(f.mutation,h,f.mutation.getFieldMask(),Ce.now())):a.set(h.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>l.set(h,new x0(f,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Ws();let s=new ke((a,l)=>a-l),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Nt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const g=(s.get(l.batchId)||pe()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,g=gg();f.forEach(_=>{if(!i.has(_)){const A=Eg(t.get(_),r.get(_));A!==null&&g.set(_,A),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ug(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(fr());let l=ri,c=i;return a.next(h=>D.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,pe())).next(f=>({batchId:l,changes:pg(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let s=Vs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Vs();return this.indexManager.getCollectionParents(e,i).next(l=>D.forEach(l,c=>{const h=function(g,_){return new vi(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ot.newInvalidDocument(f)))});let l=Vs();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Ks(f.mutation,h,Nt.empty(),Ce.now()),sa(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class V0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return D.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:E0(s.bundledQuery),readTime:Wt(s.readTime)}}(t)),D.resolve()}}/**
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
 */class D0{constructor(){this.overlays=new ke(Z.comparator),this.qr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=fr();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=fr(),i=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ke((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=fr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=fr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return D.resolve(l)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new YI(t,r));let i=this.qr.get(t);i===void 0&&(i=pe(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class N0{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class Sc{constructor(){this.Qr=new qe(He.$r),this.Ur=new qe(He.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new He(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new He(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new Z(new Re([])),r=new He(t,e),s=new He(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Z(new Re([])),r=new He(t,e),s=new He(t,e+1);let i=pe();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new He(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Z.comparator(e.key,t.key)||fe(e.Yr,t.Yr)}static Kr(e,t){return fe(e.Yr,t.Yr)||Z.comparator(e.key,t.key)}}/**
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
 */class O0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new qe(He.$r)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new JI(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Zr=this.Zr.add(new He(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?gc:this.tr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new He(t,0),s=new He(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const l=this.Xr(a.Yr);i.push(l)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new qe(fe);return t.forEach(s=>{const i=new He(s,0),a=new He(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],l=>{r=r.add(l.Yr)})}),D.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new He(new Z(i),0);let l=new qe(fe);return this.Zr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Yr)),!0)},a),D.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Te(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return D.forEach(t.mutations,s=>{const i=new He(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new He(t,0),s=this.Zr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class M0{constructor(e){this.ri=e,this.docs=function(){return new ke(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(t))}getEntries(e,t){let r=Tn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Tn();const a=t.path,l=new Z(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||hI(uI(f),r)<=0||(s.has(f.key)||sa(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){re(9500)}ii(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new L0(this)}getSize(e){return D.resolve(this.size)}}class L0 extends P0{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class F0{constructor(e){this.persistence=e,this.si=new Ir(t=>yc(t),vc),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.oi=0,this._i=new Sc,this.targetCount=0,this.ai=es.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),D.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new es(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Pr(t),D.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this._i.containsKey(t))}}/**
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
 */class Ng{constructor(e,t){this.ui={},this.overlays={},this.ci=new ea(0),this.li=!1,this.li=!0,this.hi=new N0,this.referenceDelegate=e(this),this.Pi=new F0(this),this.indexManager=new T0,this.remoteDocumentCache=function(s){return new M0(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new w0(t),this.Ii=new V0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new D0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new O0(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){Q("MemoryPersistence","Starting transaction:",e);const s=new U0(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return D.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class U0 extends fI{constructor(e){super(),this.currentSequenceNumber=e}}class Rc{constructor(e){this.persistence=e,this.Ri=new Sc,this.Vi=null}static mi(e){return new Rc(e)}get fi(){if(this.Vi)return this.Vi;throw re(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.fi,r=>{const s=Z.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,ae.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return D.or([()=>D.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Oo{constructor(e,t){this.persistence=e,this.pi=new Ir(r=>mI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=C0(this,t)}static mi(e,t){return new Oo(e,t)}Ei(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return D.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?D.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(l=>{l||(r++,i.removeEntry(a,ae.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),D.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ao(e.data.value)),t}br(e,t,r){return D.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Cc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=pe(),s=pe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Cc(e,t.fromCache,r,s)}}/**
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
 */class $0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class B0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Dv()?8:pI(lt())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new $0;return this.Ss(e,t,a).next(l=>{if(i.result=l,this.Vs)return this.bs(e,t,a,l.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Nr()<=de.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),D.resolve()):(Nr()<=de.DEBUG&&Q("QueryEngine","Query:",Or(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Nr()<=de.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gt(t))):D.resolve())}ys(e,t){if(cd(t))return D.resolve(null);let r=Gt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=bl(t,null,"F"),r=Gt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=pe(...i);return this.ps.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Ds(t,l);return this.Cs(t,h,a,c.readTime)?this.ys(e,bl(t,null,"F")):this.vs(e,h,t,c)}))})))}ws(e,t,r,s){return cd(t)||s.isEqual(ae.min())?D.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?D.resolve(null):(Nr()<=de.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Or(t)),this.vs(e,a,t,cI(s,ri)).next(l=>l))})}Ds(e,t){let r=new qe(dg(e));return t.forEach((s,i)=>{sa(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Nr()<=de.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Or(t)),this.ps.getDocumentsMatchingQuery(e,t,Wn.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Pc="LocalStore",j0=3e8;class q0{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ke(fe),this.xs=new Ir(i=>yc(i),vc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new k0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function H0(n,e,t,r){return new q0(n,e,t,r)}async function Og(n,e){const t=ce(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=pe();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:l}))})})}function z0(n,e){const t=ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const g=h.batch,_=g.keys();let A=D.resolve();return _.forEach(P=>{A=A.next(()=>f.getEntry(c,P)).next(k=>{const O=h.docVersions.get(P);Te(O!==null,48541),k.version.compareTo(O)<0&&(g.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=pe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Mg(n){const e=ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function G0(n,e){const t=ce(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const l=[];e.targetChanges.forEach((f,g)=>{const _=s.get(g);if(!_)return;l.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,g)));let A=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(Ze.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(g,A),function(k,O,j){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=j0?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(_,A,f)&&l.push(t.Pi.updateTargetData(i,A))});let c=Tn(),h=pe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(W0(i,a,e.documentUpdates).next(f=>{c=f.ks,h=f.qs})),!r.isEqual(ae.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(g=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return D.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.Ms=s,i))}function W0(n,e,t){let r=pe(),s=pe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Tn();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):Q(Pc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{ks:a,qs:s}})}function K0(n,e){const t=ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=gc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Q0(n,e){const t=ce(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Ln(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Pl(n,e,t){const r=ce(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!cs(a))throw a;Q(Pc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Td(n,e,t){const r=ce(n);let s=ae.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const g=ce(c),_=g.xs.get(f);return _!==void 0?D.resolve(g.Ms.get(_)):g.Pi.getTargetData(h,f)}(r,a,Gt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:ae.min(),t?i:pe())).next(l=>(J0(r,OI(e),l),{documents:l,Qs:i})))}function J0(n,e,t){let r=n.Os.get(e)||ae.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Id{constructor(){this.activeTargetIds=BI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Y0{constructor(){this.Mo=new Id,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Id,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class X0{Oo(e){}shutdown(){}}/**
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
 */const bd="ConnectivityMonitor";class Ad{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Q(bd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Q(bd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ji=null;function xl(){return Ji===null?Ji=function(){return 268435456+Math.round(2147483648*Math.random())}():Ji++,"0x"+Ji.toString(16)}/**
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
 */const Wa="RestConnection",Z0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Co?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=xl(),l=this.zo(e,t.toUriEncodedString());Q(Wa,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:h}=new URL(l),f=ns(h);return this.Jo(e,l,c,r,f).then(g=>(Q(Wa,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Jr(Wa,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+as}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=Z0[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class tb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const rt="WebChannelConnection";class nb extends eb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=xl();return new Promise((l,c)=>{const h=new Up;h.setWithCredentials(!0),h.listenOnce($p.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case oo.NO_ERROR:const g=h.getResponseJson();Q(rt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case oo.TIMEOUT:Q(rt,`RPC '${e}' ${a} timed out`),c(new K(V.DEADLINE_EXCEEDED,"Request time out"));break;case oo.HTTP_ERROR:const _=h.getStatus();if(Q(rt,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A?.error;if(P&&P.status&&P.message){const k=function(j){const N=j.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(N)>=0?N:V.UNKNOWN}(P.status);c(new K(k,P.message))}else c(new K(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new K(V.UNAVAILABLE,"Connection failed."));break;default:re(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Q(rt,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);Q(rt,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=xl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=qp(),l=jp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Q(rt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const g=a.createWebChannel(f,c);this.I_(g);let _=!1,A=!1;const P=new tb({Yo:O=>{A?Q(rt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(_||(Q(rt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),_=!0),Q(rt,`RPC '${e}' stream ${s} sending:`,O),g.send(O))},Zo:()=>g.close()}),k=(O,j,N)=>{O.listen(j,z=>{try{N(z)}catch(J){setTimeout(()=>{throw J},0)}})};return k(g,ks.EventType.OPEN,()=>{A||(Q(rt,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),k(g,ks.EventType.CLOSE,()=>{A||(A=!0,Q(rt,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(g))}),k(g,ks.EventType.ERROR,O=>{A||(A=!0,Jr(rt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),P.a_(new K(V.UNAVAILABLE,"The operation could not be completed")))}),k(g,ks.EventType.MESSAGE,O=>{if(!A){const j=O.data[0];Te(!!j,16349);const N=j,z=N?.error||N[0]?.error;if(z){Q(rt,`RPC '${e}' stream ${s} received error:`,z);const J=z.status;let ee=function(m){const v=Oe[m];if(v!==void 0)return Ig(v)}(J),ne=z.message;ee===void 0&&(ee=V.INTERNAL,ne="Unknown error status: "+J+" with message "+z.message),A=!0,P.a_(new K(ee,ne)),g.close()}else Q(rt,`RPC '${e}' stream ${s} received:`,j),P.u_(j)}}),k(l,Bp.STAT_EVENT,O=>{O.stat===_l.PROXY?Q(rt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===_l.NOPROXY&&Q(rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Ka(){return typeof document<"u"?document:null}/**
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
 */function la(n){return new o0(n,!0)}/**
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
 */class Lg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Sd="PersistentStream";class Fg{constructor(e,t,r,s,i,a,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Lg(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(wn(t.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new K(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Q(Sd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(Q(Sd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rb extends Fg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=c0(this.serializer,e),r=function(i){if(!("targetChange"in i))return ae.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ae.min():a.readTime?Wt(a.readTime):ae.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Cl(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=Tl(c)?{documents:d0(i,c)}:{query:f0(i,c).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Sg(i,a.resumeToken);const h=Al(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ae.min())>0){l.readTime=No(i,a.snapshotVersion.toTimestamp());const h=Al(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=g0(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Cl(this.serializer),t.removeTarget=e,this.q_(t)}}class sb extends Fg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=h0(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Cl(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>u0(this.serializer,r))};this.q_(t)}}/**
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
 */class ib{}class ob extends ib{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Sl(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(V.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Ho(e,Sl(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(V.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class ab{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(wn(t),this.aa=!1):Q("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const wr="RemoteStore";class lb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Ar(this)&&(Q(wr,"Restarting streams for network reachability change."),await async function(c){const h=ce(c);h.Ea.add(4),await Ti(h),h.Ra.set("Unknown"),h.Ea.delete(4),await ca(h)}(this))})}),this.Ra=new ab(r,s)}}async function ca(n){if(Ar(n))for(const e of n.da)await e(!0)}async function Ti(n){for(const e of n.da)await e(!1)}function Ug(n,e){const t=ce(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Dc(t)?Vc(t):us(t).O_()&&kc(t,e))}function xc(n,e){const t=ce(n),r=us(t);t.Ia.delete(e),r.O_()&&$g(t,e),t.Ia.size===0&&(r.O_()?r.L_():Ar(t)&&t.Ra.set("Unknown"))}function kc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}us(n).Y_(e)}function $g(n,e){n.Va.Ue(e),us(n).Z_(e)}function Vc(n){n.Va=new n0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),us(n).start(),n.Ra.ua()}function Dc(n){return Ar(n)&&!us(n).x_()&&n.Ia.size>0}function Ar(n){return ce(n).Ea.size===0}function Bg(n){n.Va=void 0}async function cb(n){n.Ra.set("Online")}async function ub(n){n.Ia.forEach((e,t)=>{kc(n,e)})}async function hb(n,e){Bg(n),Dc(n)?(n.Ra.ha(e),Vc(n)):n.Ra.set("Unknown")}async function db(n,e,t){if(n.Ra.set("Online"),e instanceof Ag&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.Va.removeTarget(l))}(n,e)}catch(r){Q(wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mo(n,r)}else if(e instanceof uo?n.Va.Ze(e):e instanceof bg?n.Va.st(e):n.Va.tt(e),!t.isEqual(ae.min()))try{const r=await Mg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Va.Tt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),$g(i,c);const g=new Ln(f.target,c,h,f.sequenceNumber);kc(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){Q(wr,"Failed to raise snapshot:",r),await Mo(n,r)}}async function Mo(n,e,t){if(!cs(e))throw e;n.Ea.add(1),await Ti(n),n.Ra.set("Offline"),t||(t=()=>Mg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q(wr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ca(n)})}function jg(n,e){return e().catch(t=>Mo(n,t,e))}async function ua(n){const e=ce(n),t=Yn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:gc;for(;fb(e);)try{const s=await K0(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,pb(e,s)}catch(s){await Mo(e,s)}qg(e)&&Hg(e)}function fb(n){return Ar(n)&&n.Ta.length<10}function pb(n,e){n.Ta.push(e);const t=Yn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function qg(n){return Ar(n)&&!Yn(n).x_()&&n.Ta.length>0}function Hg(n){Yn(n).start()}async function gb(n){Yn(n).ra()}async function mb(n){const e=Yn(n);for(const t of n.Ta)e.ea(t.mutations)}async function _b(n,e,t){const r=n.Ta.shift(),s=Ic.from(r,e,t);await jg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ua(n)}async function yb(n,e){e&&Yn(n).X_&&await async function(r,s){if(function(a){return ZI(a)&&a!==V.ABORTED}(s.code)){const i=r.Ta.shift();Yn(r).B_(),await jg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ua(r)}}(n,e),qg(n)&&Hg(n)}async function Rd(n,e){const t=ce(n);t.asyncQueue.verifyOperationInProgress(),Q(wr,"RemoteStore received new credentials");const r=Ar(t);t.Ea.add(3),await Ti(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ca(t)}async function vb(n,e){const t=ce(n);e?(t.Ea.delete(2),await ca(t)):e||(t.Ea.add(2),await Ti(t),t.Ra.set("Unknown"))}function us(n){return n.ma||(n.ma=function(t,r,s){const i=ce(t);return i.sa(),new rb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:cb.bind(null,n),t_:ub.bind(null,n),r_:hb.bind(null,n),H_:db.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Dc(n)?Vc(n):n.Ra.set("Unknown")):(await n.ma.stop(),Bg(n))})),n.ma}function Yn(n){return n.fa||(n.fa=function(t,r,s){const i=ce(t);return i.sa(),new sb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:gb.bind(null,n),r_:yb.bind(null,n),ta:mb.bind(null,n),na:_b.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await ua(n)):(await n.fa.stop(),n.Ta.length>0&&(Q(wr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Nc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Nc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oc(n,e){if(wn("AsyncQueue",`${e}: ${n}`),cs(n))return new K(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Gr{static emptySet(e){return new Gr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=Vs(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Cd{constructor(){this.ga=new ke(Z.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):re(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class ts{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new ts(e,t,Gr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class wb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Eb{constructor(){this.queries=Pd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=ce(t),i=s.queries;s.queries=Pd(),i.forEach((a,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new K(V.ABORTED,"Firestore shutting down"))}}function Pd(){return new Ir(n=>hg(n),ra)}async function zg(n,e){const t=ce(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new wb,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Oc(a,`Initialization of query '${Or(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Mc(t)}async function Gg(n,e){const t=ce(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Tb(n,e){const t=ce(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Mc(t)}function Ib(n,e,t){const r=ce(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Mc(n){n.Ca.forEach(e=>{e.next()})}var kl,xd;(xd=kl||(kl={})).Ma="default",xd.Cache="cache";class Wg{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==kl.Cache}}/**
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
 */class Kg{constructor(e){this.key=e}}class Qg{constructor(e){this.key=e}}class bb{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=pe(),this.mutatedKeys=pe(),this.eu=dg(e),this.tu=new Gr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Cd,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const _=s.get(f),A=sa(this.query,g)?g:null,P=!!_&&this.mutatedKeys.has(_.key),k=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let O=!1;_&&A?_.data.isEqual(A.data)?P!==k&&(r.track({type:3,doc:A}),O=!0):this.su(_,A)||(r.track({type:2,doc:A}),O=!0,(c&&this.eu(A,c)>0||h&&this.eu(A,h)<0)&&(l=!0)):!_&&A?(r.track({type:0,doc:A}),O=!0):_&&!A&&(r.track({type:1,doc:_}),O=!0,(c||h)&&(l=!0)),O&&(A?(a=a.add(A),i=k?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,g)=>function(A,P){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{Rt:O})}};return k(A)-k(P)}(f.type,g.type)||this.eu(f.doc,g.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,h=c!==this.Za;return this.Za=c,a.length!==0||h?{snapshot:new ts(this.query,e.tu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Cd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=pe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new Qg(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new Kg(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ts.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Lc="SyncEngine";class Ab{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Sb{constructor(e){this.key=e,this.hu=!1}}class Rb{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ir(l=>hg(l),ra),this.Iu=new Map,this.Eu=new Set,this.du=new ke(Z.comparator),this.Au=new Map,this.Ru=new Sc,this.Vu={},this.mu=new Map,this.fu=es.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Cb(n,e,t=!0){const r=tm(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Jg(r,e,t,!0),s}async function Pb(n,e){const t=tm(n);await Jg(t,e,!0,!1)}async function Jg(n,e,t,r){const s=await Q0(n.localStore,Gt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await xb(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Ug(n.remoteStore,s),l}async function xb(n,e,t,r,s){n.pu=(g,_,A)=>async function(k,O,j,N){let z=O.view.ru(j);z.Cs&&(z=await Td(k.localStore,O.query,!1).then(({documents:E})=>O.view.ru(E,z)));const J=N&&N.targetChanges.get(O.targetId),ee=N&&N.targetMismatches.get(O.targetId)!=null,ne=O.view.applyChanges(z,k.isPrimaryClient,J,ee);return Vd(k,O.targetId,ne.au),ne.snapshot}(n,g,_,A);const i=await Td(n.localStore,e,!0),a=new bb(e,i.Qs),l=a.ru(i.documents),c=Ei.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Vd(n,t,h.au);const f=new Ab(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function kb(n,e,t){const r=ce(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!ra(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Pl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&xc(r.remoteStore,s.targetId),Vl(r,s.targetId)}).catch(ls)):(Vl(r,s.targetId),await Pl(r.localStore,s.targetId,!0))}async function Vb(n,e){const t=ce(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xc(t.remoteStore,r.targetId))}async function Db(n,e,t){const r=$b(n);try{const s=await function(a,l){const c=ce(a),h=Ce.now(),f=l.reduce((A,P)=>A.add(P.key),pe());let g,_;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=Tn(),k=pe();return c.Ns.getEntries(A,f).next(O=>{P=O,P.forEach((j,N)=>{N.isValidDocument()||(k=k.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,P)).next(O=>{g=O;const j=[];for(const N of l){const z=KI(N,g.get(N.key).overlayedDocument);z!=null&&j.push(new br(N.key,z,rg(z.value.mapValue),Lt.exists(!0)))}return c.mutationQueue.addMutationBatch(A,h,j,l)}).next(O=>{_=O;const j=O.applyToLocalDocumentSet(g,k);return c.documentOverlayCache.saveOverlays(A,O.batchId,j)})}).then(()=>({batchId:_.batchId,changes:pg(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Vu[a.currentUser.toKey()];h||(h=new ke(fe)),h=h.insert(l,c),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await Ii(r,s.changes),await ua(r.remoteStore)}catch(s){const i=Oc(s,"Failed to persist write");t.reject(i)}}async function Yg(n,e){const t=ce(n);try{const r=await G0(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Te(a.hu,14607):s.removedDocuments.size>0&&(Te(a.hu,42227),a.hu=!1))}),await Ii(t,r,e)}catch(r){await ls(r)}}function kd(n,e,t){const r=ce(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ce(a);c.onlineState=l;let h=!1;c.queries.forEach((f,g)=>{for(const _ of g.Sa)_.va(l)&&(h=!0)}),h&&Mc(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Nb(n,e,t){const r=ce(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new ke(Z.comparator);a=a.insert(i,ot.newNoDocument(i,ae.min()));const l=pe().add(i),c=new aa(ae.min(),new Map,new ke(fe),a,l);await Yg(r,c),r.du=r.du.remove(i),r.Au.delete(e),Fc(r)}else await Pl(r.localStore,e,!1).then(()=>Vl(r,e,t)).catch(ls)}async function Ob(n,e){const t=ce(n),r=e.batch.batchId;try{const s=await z0(t.localStore,e);Zg(t,r,null),Xg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ii(t,s)}catch(s){await ls(s)}}async function Mb(n,e,t){const r=ce(n);try{const s=await function(a,l){const c=ce(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(Te(g!==null,37113),f=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Zg(r,e,t),Xg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ii(r,s)}catch(s){await ls(s)}}function Xg(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Zg(n,e,t){const r=ce(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Vl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||em(n,r)})}function em(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(xc(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Fc(n))}function Vd(n,e,t){for(const r of t)r instanceof Kg?(n.Ru.addReference(r.key,e),Lb(n,r)):r instanceof Qg?(Q(Lc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||em(n,r.key)):re(19791,{wu:r})}function Lb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(Q(Lc,"New document in limbo: "+t),n.Eu.add(r),Fc(n))}function Fc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Z(Re.fromString(e)),r=n.fu.next();n.Au.set(r,new Sb(t)),n.du=n.du.insert(t,r),Ug(n.remoteStore,new Ln(Gt(wc(t.path)),r,"TargetPurposeLimboResolution",ea.ce))}}async function Ii(n,e,t){const r=ce(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{a.push(r.pu(c,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(h){s.push(h);const f=Cc.As(c.targetId,h);i.push(f)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(c,h){const f=ce(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(h,_=>D.forEach(_.Es,A=>f.persistence.referenceDelegate.addReference(g,_.targetId,A)).next(()=>D.forEach(_.ds,A=>f.persistence.referenceDelegate.removeReference(g,_.targetId,A)))))}catch(g){if(!cs(g))throw g;Q(Pc,"Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const A=f.Ms.get(_),P=A.snapshotVersion,k=A.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(_,k)}}}(r.localStore,i))}async function Fb(n,e){const t=ce(n);if(!t.currentUser.isEqual(e)){Q(Lc,"User change. New user:",e.toKey());const r=await Og(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new K(V.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ii(t,r.Ls)}}function Ub(n,e){const t=ce(n),r=t.Au.get(e);if(r&&r.hu)return pe().add(r.key);{let s=pe();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function tm(n){const e=ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ub.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Nb.bind(null,e),e.Pu.H_=Tb.bind(null,e.eventManager),e.Pu.yu=Ib.bind(null,e.eventManager),e}function $b(n){const e=ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ob.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mb.bind(null,e),e}class Lo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=la(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return H0(this.persistence,new B0,e.initialUser,this.serializer)}Cu(e){return new Ng(Rc.mi,this.serializer)}Du(e){return new Y0}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lo.provider={build:()=>new Lo};class Bb extends Lo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Te(this.persistence.referenceDelegate instanceof Oo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new S0(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new Ng(r=>Oo.mi(r,t),this.serializer)}}class Dl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fb.bind(null,this.syncEngine),await vb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Eb}()}createDatastore(e){const t=la(e.databaseInfo.databaseId),r=function(i){return new nb(i)}(e.databaseInfo);return function(i,a,l,c){return new ob(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new lb(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>kd(this.syncEngine,t,0),function(){return Ad.v()?new Ad:new X0}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,f){const g=new Rb(s,i,a,l,c,h);return f&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=ce(t);Q(wr,"RemoteStore shutting down."),r.Ea.add(5),await Ti(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Dl.provider={build:()=>new Dl};/**
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
 */class nm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Xn="FirestoreClient";class jb{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=pc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Q(Xn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Q(Xn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Oc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qa(n,e){n.asyncQueue.verifyOperationInProgress(),Q(Xn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Og(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Dd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await qb(n);Q(Xn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Rd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Rd(e.remoteStore,s)),n._onlineComponents=e}async function qb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q(Xn,"Using user provided OfflineComponentProvider");try{await Qa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Jr("Error using user provided cache. Falling back to memory cache: "+t),await Qa(n,new Lo)}}else Q(Xn,"Using default OfflineComponentProvider"),await Qa(n,new Bb(void 0));return n._offlineComponents}async function rm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q(Xn,"Using user provided OnlineComponentProvider"),await Dd(n,n._uninitializedComponentsProvider._online)):(Q(Xn,"Using default OnlineComponentProvider"),await Dd(n,new Dl))),n._onlineComponents}function Hb(n){return rm(n).then(e=>e.syncEngine)}async function sm(n){const e=await rm(n),t=e.eventManager;return t.onListen=Cb.bind(null,e.syncEngine),t.onUnlisten=kb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Pb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Vb.bind(null,e.syncEngine),t}function zb(n,e,t={}){const r=new pn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new nm({next:_=>{f.Nu(),a.enqueueAndForget(()=>Gg(i,g));const A=_.docs.has(l);!A&&_.fromCache?h.reject(new K(V.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&c&&c.source==="server"?h.reject(new K(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Wg(wc(l.path),f,{includeMetadataChanges:!0,qa:!0});return zg(i,g)}(await sm(n),n.asyncQueue,e,t,r)),r.promise}function Gb(n,e,t={}){const r=new pn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new nm({next:_=>{f.Nu(),a.enqueueAndForget(()=>Gg(i,g)),_.fromCache&&c.source==="server"?h.reject(new K(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new Wg(l,f,{includeMetadataChanges:!0,qa:!0});return zg(i,g)}(await sm(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function im(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Nd=new Map;/**
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
 */const om="firestore.googleapis.com",Od=!0;class Md{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=om,this.ssl=Od}else this.host=e.host,this.ssl=e.ssl??Od;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Dg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<b0)throw new K(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=im(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ha{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Md({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Md(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XT;switch(r.type){case"firstParty":return new nI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Nd.get(t);r&&(Q("ComponentProvider","Removing Datastore"),Nd.delete(t),r.terminate())}(this),Promise.resolve()}}function Wb(n,e,t,r={}){n=En(n,ha);const s=ns(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(Zf(`https://${l}`),ep("Firestore",!0)),i.host!==om&&i.host!==l&&Jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!mr(c,a)&&(n._setSettings(c),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=st.MOCK_USER;else{h=bv(r.mockUserToken,n._app?.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new K(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new st(g)}n._authCredentials=new ZT(new zp(h,f))}}/**
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
 */class hs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hs(this.firestore,e,this._query)}}class Fe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}toJSON(){return{type:Fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(yi(t,Fe._jsonSchema))return new Fe(e,r||null,new Z(Re.fromString(t.referencePath)))}}Fe._jsonSchemaVersion="firestore/documentReference/1.0",Fe._jsonSchema={type:Le("string",Fe._jsonSchemaVersion),referencePath:Le("string")};class qn extends hs{constructor(e,t,r){super(e,t,wc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new Z(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function am(n,e,...t){if(n=Tt(n),Gp("collection","path",e),n instanceof ha){const r=Re.fromString(e,...t);return Qh(r),new qn(n,null,r)}{if(!(n instanceof Fe||n instanceof qn))throw new K(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Qh(r),new qn(n.firestore,null,r)}}function Fo(n,e,...t){if(n=Tt(n),arguments.length===1&&(e=pc.newId()),Gp("doc","path",e),n instanceof ha){const r=Re.fromString(e,...t);return Kh(r),new Fe(n,null,new Z(r))}{if(!(n instanceof Fe||n instanceof qn))throw new K(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Kh(r),new Fe(n.firestore,n instanceof qn?n.converter:null,new Z(r))}}/**
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
 */const Ld="AsyncQueue";class Fd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Lg(this,"async_queue_retry"),this._c=()=>{const r=Ka();r&&Q(Ld,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ka();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ka();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new pn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!cs(e))throw e;Q(Ld,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,wn("INTERNAL UNHANDLED ERROR: ",Ud(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Nc.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&re(47125,{Pc:Ud(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ud(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ds extends ha{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Fd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fd(e),this._firestoreClient=void 0,await e}}}function bi(n,e){const t=typeof n=="object"?n:sp(),r=typeof n=="string"?n:Co,s=nc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Tv("firestore");i&&Wb(s,...i)}return s}function Uc(n){if(n._terminated)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Kb(n),n._firestoreClient}function Kb(n){const e=n._freezeSettings(),t=function(s,i,a,l){return new vI(s,i,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,im(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)}(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new jb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Ze.fromBase64String(e))}catch(t){throw new K(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rt(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(yi(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:Le("string",Rt._jsonSchemaVersion),bytes:Le("string")};/**
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
 */class $c{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class lm{constructor(e){this._methodName=e}}/**
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
 */class Kt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kt._jsonSchemaVersion}}static fromJSON(e){if(yi(e,Kt._jsonSchema))return new Kt(e.latitude,e.longitude)}}Kt._jsonSchemaVersion="firestore/geoPoint/1.0",Kt._jsonSchema={type:Le("string",Kt._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
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
 */class Qt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(yi(e,Qt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Qt(e.vectorValues);throw new K(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qt._jsonSchemaVersion="firestore/vectorValue/1.0",Qt._jsonSchema={type:Le("string",Qt._jsonSchemaVersion),vectorValues:Le("object")};/**
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
 */const Qb=/^__.*__$/;class Jb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,t,this.fieldTransforms):new wi(e,this.data,t,this.fieldTransforms)}}function cm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ac:n})}}class Bc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Bc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Uo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(cm(this.Ac)&&Qb.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Yb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||la(e)}Cc(e,t,r,s=!1){return new Bc({Ac:e,methodName:t,Dc:r,path:Xe.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jc(n){const e=n._freezeSettings(),t=la(n._databaseId);return new Yb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function um(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);fm("Data must be an object, but it was:",a,r);const l=hm(r,a);let c,h;if(i.merge)c=new Nt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const _=Zb(e,g,t);if(!a.contains(_))throw new K(V.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);tA(f,_)||f.push(_)}c=new Nt(f),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new Jb(new St(l),c,h)}function Xb(n,e,t,r=!1){return qc(t,n.Cc(r?4:3,e))}function qc(n,e){if(dm(n=Tt(n)))return fm("Unsupported field value:",e,n),hm(n,e);if(n instanceof lm)return function(r,s){if(!cm(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=qc(l,s.wc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ce.fromDate(r);return{timestampValue:No(s.serializer,i)}}if(r instanceof Ce){const i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:No(s.serializer,i)}}if(r instanceof Kt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:Sg(s.serializer,r._byteString)};if(r instanceof Fe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ac(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qt)return function(a,l){return{mapValue:{fields:{[tg]:{stringValue:ng},[Po]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return Ec(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Zo(r)}`)}(n,e)}function hm(n,e){const t={};return Qp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tr(n,(r,s)=>{const i=qc(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function dm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof Kt||n instanceof Rt||n instanceof Fe||n instanceof lm||n instanceof Qt)}function fm(n,e,t){if(!dm(t)||!Wp(t)){const r=Zo(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Zb(n,e,t){if((e=Tt(e))instanceof $c)return e._internalPath;if(typeof e=="string")return pm(n,e);throw Uo("Field path arguments must be of type string or ",n,!1,void 0,t)}const eA=new RegExp("[~\\*/\\[\\]]");function pm(n,e,t){if(e.search(eA)>=0)throw Uo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new $c(...e.split("."))._internalPath}catch{throw Uo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Uo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new K(V.INVALID_ARGUMENT,l+n+c)}function tA(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class gm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nA extends gm{data(){return super.data()}}function mm(n,e){return typeof e=="string"?pm(n,e):e instanceof $c?e._internalPath:e._delegate._internalPath}/**
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
 */function rA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hc{}class sA extends Hc{}function iA(n,e,...t){let r=[];e instanceof Hc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(c=>c instanceof Gc).length,l=i.filter(c=>c instanceof zc).length;if(a>1||a>0&&l>0)throw new K(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class zc extends sA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new zc(e,t,r)}_apply(e){const t=this._parse(e);return _m(e._query,t),new hs(e.firestore,e.converter,Il(e._query,t))}_parse(e){const t=jc(e.firestore);return function(i,a,l,c,h,f,g){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Bd(g,f);const P=[];for(const k of g)P.push($d(c,i,k));_={arrayValue:{values:P}}}else _=$d(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Bd(g,f),_=Xb(l,a,g,f==="in"||f==="not-in");return Me.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Gc extends Hc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Gc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ft.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)_m(a,c),a=Il(a,c)}(e._query,t),new hs(e.firestore,e.converter,Il(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function $d(n,e,t){if(typeof(t=Tt(t))=="string"){if(t==="")throw new K(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ug(e)&&t.indexOf("/")!==-1)throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!Z.isDocumentKey(r))throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rd(n,new Z(r))}if(t instanceof Fe)return rd(n,t._key);throw new K(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zo(t)}.`)}function Bd(n,e){if(!Array.isArray(n)||n.length===0)throw new K(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _m(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new K(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class oA{convertValue(e,t="none"){switch(Jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Tr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[Po].arrayValue?.values?.map(r=>Ne(r.doubleValue));return new Qt(t)}convertGeoPoint(e){return new Kt(Ne(e.latitude),Ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=na(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const t=Kn(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);Te(Vg(r),9688,{name:e});const s=new ii(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function ym(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ns{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gr extends gm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(mm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",gr._jsonSchema={type:Le("string",gr._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class ho extends gr{data(e={}){return super.data(e)}}class Wr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ns(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ho(this._firestore,this._userDataWriter,r.key,r,new Ns(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new ho(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ns(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ho(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ns(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:aA(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=pc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function aA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:n})}}/**
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
 */function lA(n){n=En(n,Fe);const e=En(n.firestore,ds);return zb(Uc(e),n._key).then(t=>fA(e,n,t))}Wr._jsonSchemaVersion="firestore/querySnapshot/1.0",Wr._jsonSchema={type:Le("string",Wr._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};class vm extends oA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,t)}}function cA(n){n=En(n,hs);const e=En(n.firestore,ds),t=Uc(e),r=new vm(e);return rA(n._query),Gb(t,n._query).then(s=>new Wr(e,r,n,s))}function uA(n,e,t){n=En(n,Fe);const r=En(n.firestore,ds),s=ym(n.converter,e,t);return Wc(r,[um(jc(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Lt.none())])}function hA(n){return Wc(En(n.firestore,ds),[new Tc(n._key,Lt.none())])}function dA(n,e){const t=En(n.firestore,ds),r=Fo(n),s=ym(n.converter,e);return Wc(t,[um(jc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function Wc(n,e){return function(r,s){const i=new pn;return r.asyncQueue.enqueueAndForget(async()=>Db(await Hb(r),s,i)),i.promise}(Uc(n),e)}function fA(n,e,t){const r=t.docs.get(e._key),s=new vm(n);return new gr(n,s,e._key,r,new Ns(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){as=s})(rs),Qr(new _r("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ds(new eI(r.getProvider("auth-internal")),new rI(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ii(h.options.projectId,f)}(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Bn(Hh,zh,e),Bn(Hh,zh,"esm2020")})();const An=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},pA={class:"flex flex-col items-center justify-center h-screen bg-gray-100 p-4 sm:p-6 md:p-8"},gA={key:0,class:"mt-6 text-gray-600"},mA={key:1,class:"mt-6 text-red-600 bg-red-100 p-3 rounded-md"},_A={__name:"LoginScreen",emits:["successfulLogin"],setup(n,{emit:e}){const t=je(!1),r=je(null),s=e,i=async()=>{t.value=!0,r.value=null;try{const a=os(),l=new ln,h=(await oT(a,l)).user;console.log("Google Login successful:",h),s("successfulLogin",h)}catch(a){console.error("Google Login error:",a),r.value=`Google Login failed: ${a.message}`}finally{t.value=!1}};return(a,l)=>(oe(),_e("div",pA,[l[2]||(l[2]=$("h1",{class:"text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center"},"The Arcane Scholar’s Legacy",-1)),$("div",{class:"flex flex-col space-y-4 w-full max-w-sm"},[$("button",{onClick:i,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center text-lg"},l[0]||(l[0]=[$("img",{src:"https://www.google.com/favicon.ico",alt:"Google Logo",class:"h-7 w-7 mr-3"},null,-1),hr(" Sign in with Google ",-1)]))]),t.value?(oe(),_e("div",gA,l[1]||(l[1]=[$("p",null,"Loading...",-1)]))):vt("",!0),r.value?(oe(),_e("div",mA,[$("p",null,De(r.value),1)])):vt("",!0)]))}},yA=An(_A,[["__scopeId","data-v-5b7bc38b"]]),vA={class:"flex flex-col items-center justify-center h-screen w-full bg-gray-950 text-yellow-300 p-4 sm:p-6 md:p-8 overflow-y-auto"},wA={key:0,class:"mt-4 text-yellow-400"},EA={key:1,class:"mt-4 text-red-500 bg-red-100 p-3 rounded-md"},TA={key:2,class:"w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700 text-center"},IA={key:3,class:"w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700"},bA=["innerHTML"],AA={class:"space-y-4"},SA={key:1,class:"space-y-4 mt-6"},RA=["disabled"],CA={key:4,class:"w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700"},PA=["innerHTML"],xA={class:"space-y-4"},kA={key:1,class:"space-y-4 mt-6"},VA=["disabled"],DA={key:5,class:"w-full max-w-lg bg-violet-900 p-6 rounded-lg shadow-xl border border-yellow-700"},NA={class:"text-sm text-yellow-400 mb-4 italic"},OA=["disabled"],MA={__name:"CharacterManager",emits:["character-created","return-to-select"],setup(n,{emit:e}){const t=e,r=os(),s=bi(),i=typeof __app_id<"u"?__app_id:"default-app-id",a=je(!1),l=je(null),c=je("chapter1"),h=je({chapter1:"",chapter2:""}),f=je(!1),g=je({name:"",faction:"",specialty:"",knowledge:0,resources:{},research:{}}),_=async()=>{try{const j=await fetch("/Chapter1.txt");if(!j.ok)throw new Error("Failed to fetch Chapter1.txt.");const N=await j.text();h.value.chapter1=N.trim(),console.log("Successfully read Chapter1.txt.");const z=await fetch("/Chapter2.txt");if(!z.ok)throw new Error("Failed to fetch Chapter2.txt.");const J=await z.text();h.value.chapter2=J.trim(),console.log("Successfully read Chapter2.txt."),f.value=!0}catch(j){console.error("Error fetching lore:",j),l.value="Failed to load game lore. Please try again later."}};ui(()=>{_()});const A=j=>{g.value.faction=j},P=j=>{g.value.specialty=j},k=()=>{c.value==="factionSelect"?c.value="chapter2":c.value==="specialtySelect"&&(c.value="nameAssign")},O=async()=>{const j=r.currentUser?.uid;if(!j){l.value="User not authenticated. Please log in again.";return}if(!g.value.name){l.value="Please enter a name for your scholar.";return}a.value=!0,l.value=null;try{const N=am(s,`artifacts/${i}/users/${j}/characters`),z=await dA(N,g.value);console.log("New character created with ID:",z.id),t("character-created",z.id)}catch(N){console.error("Error creating character:",N),l.value=`Failed to create character: ${N.message}`}finally{a.value=!1}};return(j,N)=>(oe(),_e("div",vA,[N[16]||(N[16]=$("h2",{class:"text-4xl font-serif text-yellow-100 mb-8 text-center leading-tight"},"Forge Your Legacy",-1)),a.value?(oe(),_e("div",wA,"Loading...")):vt("",!0),l.value?(oe(),_e("div",EA,De(l.value),1)):vt("",!0),f.value?c.value==="chapter1"||c.value==="factionSelect"?(oe(),_e("div",IA,[N[11]||(N[11]=$("h3",{class:"text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2"},"Chapter 1: The First Whisper",-1)),$("div",{innerHTML:h.value.chapter1,class:"text-lg text-yellow-300 mb-6 max-h-80 overflow-y-auto"},null,8,bA),$("div",AA,[c.value==="chapter1"?(oe(),_e("button",{key:0,onClick:N[0]||(N[0]=z=>c.value="factionSelect"),class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out"}," Continue to Faction Selection ")):vt("",!0),c.value==="factionSelect"?(oe(),_e("div",SA,[$("button",{onClick:N[1]||(N[1]=z=>A("Lumen")),class:cn(["w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out",g.value.faction==="Lumen"?"bg-blue-600 text-white shadow-xl":"bg-violet-800 hover:bg-blue-500 text-yellow-100"])}," Select Lumen ",2),$("button",{onClick:N[2]||(N[2]=z=>A("Umbra")),class:cn(["w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out",g.value.faction==="Umbra"?"bg-purple-600 text-white shadow-xl":"bg-violet-800 hover:bg-purple-500 text-yellow-100"])}," Select Umbra ",2),$("button",{onClick:k,disabled:!g.value.faction,class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"}," Proceed ",8,RA),$("button",{onClick:N[3]||(N[3]=z=>c.value="chapter1"),class:"w-full py-2 px-4 rounded-lg text-sm bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out"}," Go Back ")])):vt("",!0)])])):c.value==="chapter2"||c.value==="specialtySelect"?(oe(),_e("div",CA,[N[12]||(N[12]=$("h3",{class:"text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2"},"The Second Whisper",-1)),$("div",{innerHTML:h.value.chapter2,class:"text-lg text-yellow-300 mb-6 max-h-80 overflow-y-auto"},null,8,PA),$("div",xA,[c.value==="chapter2"?(oe(),_e("button",{key:0,onClick:N[4]||(N[4]=z=>c.value="specialtySelect"),class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out"}," Continue to Specialty Selection ")):vt("",!0),c.value==="specialtySelect"?(oe(),_e("div",kA,[$("button",{onClick:N[5]||(N[5]=z=>P("Arcane")),class:cn(["w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out",g.value.specialty==="Arcane"?"bg-cyan-600 text-white shadow-xl":"bg-violet-800 hover:bg-cyan-500 text-yellow-100"])}," Select Arcane ",2),$("button",{onClick:N[6]||(N[6]=z=>P("Alchemist")),class:cn(["w-full py-3 px-4 rounded-lg text-xl font-bold transition-all duration-200 ease-in-out",g.value.specialty==="Alchemist"?"bg-amber-600 text-white shadow-xl":"bg-violet-800 hover:bg-amber-500 text-yellow-100"])}," Select Alchemist ",2),$("button",{onClick:k,disabled:!g.value.specialty,class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"}," Proceed ",8,VA),$("button",{onClick:N[7]||(N[7]=z=>c.value="chapter1"),class:"w-full py-2 px-4 rounded-lg text-sm bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out"}," Go Back ")])):vt("",!0)])])):c.value==="nameAssign"?(oe(),_e("div",DA,[N[14]||(N[14]=$("h3",{class:"text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2"},"Assign Your Scholar Name",-1)),N[15]||(N[15]=$("p",{class:"text-lg text-yellow-300 mb-4"}," Name your scholar, choose wisely as this name will define your legacy. ",-1)),$("p",NA," Faction: "+De(g.value.faction)+" | Specialty: "+De(g.value.specialty),1),$("form",{onSubmit:Gf(O,["prevent"]),class:"space-y-4"},[$("div",null,[N[13]||(N[13]=$("label",{for:"characterName",class:"block text-lg text-yellow-300 mb-2"},"Scholar's Name:",-1)),M_($("input",{id:"characterName","onUpdate:modelValue":N[8]||(N[8]=z=>g.value.name=z),type:"text",required:"",class:"w-full p-3 rounded-lg bg-gray-800 text-yellow-100 border border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500",placeholder:"Enter a name"},null,512),[[ov,g.value.name]])]),$("button",{type:"submit",disabled:!g.value.name,class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"}," Forge Legacy ",8,OA)],32),$("button",{onClick:N[9]||(N[9]=z=>c.value="specialtySelect"),class:"w-full py-2 px-4 mt-4 rounded-lg text-sm bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200 ease-in-out"}," Go Back ")])):vt("",!0):(oe(),_e("div",TA,N[10]||(N[10]=[$("p",{class:"text-lg text-yellow-300"},"Loading lore...",-1)])))]))}},LA={class:"flex flex-col items-center justify-center min-h-screen w-full bg-gray-950 text-yellow-300 font-sans p-6"},FA={class:"bg-violet-900 p-8 rounded-xl shadow-2xl border border-yellow-700 w-full max-w-2xl"},UA={class:"bg-violet-800 p-6 rounded-lg shadow-inner mb-8"},$A={class:"bg-violet-800 p-6 rounded-lg shadow-inner"},BA={key:0,class:"text-center text-sm text-yellow-400 italic"},jA={key:1,class:"space-y-4"},qA=["onClick"],HA={class:"text-2xl font-bold text-yellow-100"},zA={class:"text-sm text-yellow-400"},GA=["onClick"],WA={key:0,class:"fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50"},KA={__name:"CharacterSelectionView",emits:["characterSelected","startNewCharacterCreation"],setup(n,{emit:e}){const t=e,r=je([]),s=je(!1),i=je(null),a=os(),l=bi(),c=typeof __app_id<"u"?__app_id:"default-app-id",h=async P=>{if(P)try{const k=am(l,`artifacts/${c}/users/${P}/characters`),O=iA(k),j=await cA(O);r.value=j.docs.map(N=>({id:N.id,...N.data()}))}catch(k){console.error("Error fetching characters:",k)}},f=P=>{t("characterSelected",P)},g=P=>{i.value=P,s.value=!0},_=()=>{s.value=!1,i.value=null},A=async()=>{const P=a.currentUser?.uid;if(!(!P||!i.value))try{const k=Fo(l,`artifacts/${c}/users/${P}/characters`,i.value);await hA(k),console.log("Character deleted successfully."),s.value=!1,i.value=null,await h(P)}catch(k){console.error("Error deleting character:",k)}};return ui(()=>{Sp(a,P=>{P&&h(P.uid)})}),(P,k)=>(oe(),_e("div",LA,[$("div",FA,[k[2]||(k[2]=$("h2",{class:"text-4xl font-serif text-yellow-100 mb-6 text-center"},"Your Scholars",-1)),$("div",UA,[$("button",{onClick:k[0]||(k[0]=O=>t("startNewCharacterCreation")),class:"w-full py-3 px-4 rounded-lg text-xl font-bold bg-green-700 hover:bg-green-800 text-white shadow-lg transition-all duration-200 ease-in-out"}," Forge a New Legacy ")]),$("div",$A,[k[1]||(k[1]=$("h3",{class:"text-2xl font-serif text-yellow-100 mb-4 border-b border-yellow-600 pb-2"},"Continue Your Legacy",-1)),r.value.length===0?(oe(),_e("p",BA," No scholars found. Forge your first one above! ")):(oe(),_e("ul",jA,[(oe(!0),_e(At,null,Jl(r.value,O=>(oe(),_e("li",{key:O.id,class:"flex items-center justify-between bg-violet-700 p-4 rounded-lg shadow-md transition duration-200 ease-in-out hover:bg-violet-600"},[$("div",{onClick:j=>f(O.id),class:"flex-grow cursor-pointer"},[$("h3",HA,De(O.name),1),$("p",zA," Faction: "+De(O.faction)+" | Specialty: "+De(O.specialty),1)],8,qA),$("button",{onClick:Gf(j=>g(O.id),["stop"]),class:"ml-4 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out"}," Delete ",8,GA)]))),128))]))])]),s.value?(oe(),_e("div",WA,[$("div",{class:"bg-violet-900 p-8 rounded-xl shadow-2xl border border-yellow-700 w-full max-w-md text-center"},[k[3]||(k[3]=$("h3",{class:"text-2xl font-bold text-yellow-100 mb-4"},"Confirm Deletion",-1)),k[4]||(k[4]=$("p",{class:"text-yellow-300 mb-6"},"Are you sure you want to delete this scholar? This action cannot be undone.",-1)),$("div",{class:"flex justify-center space-x-4"},[$("button",{onClick:A,class:"bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg"},"Delete"),$("button",{onClick:_,class:"bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg"},"Cancel")])])])):vt("",!0)]))}},QA=An(KA,[["__scopeId","data-v-3755d9ae"]]),JA={class:"bg-violet-800 p-6 rounded-lg shadow-xl border border-yellow-700"},YA={class:"flex flex-col items-center justify-center space-y-6 mt-8"},XA={class:"text-4xl sm:text-5xl font-bold text-yellow-100 mb-4"},ZA={class:"text-xl text-yellow-200 mt-4"},eS={class:"font-bold"},tS={class:"mt-10 pt-6 border-t border-yellow-700"},nS={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"},rS={class:"text-xl text-yellow-200 mb-2"},sS={class:"text-yellow-400 text-sm mb-2"},iS={key:0},oS={class:"text-yellow-400 text-sm mb-4"},aS={class:"font-bold text-yellow-100"},lS=["onClick","disabled"],cS={__name:"SanctumView",props:{knowledge:{type:Number,required:!0},multiplierItems:{type:Object,required:!0},passiveKnowledgeGain:{type:Number,required:!0}},emits:["generate-knowledge","buy-multiplier"],setup(n,{emit:e}){const t=n,r=e;console.log("SanctumView: Component loaded.");const s=i=>{const a=t.multiplierItems[i];return a?a.baseCost*Math.pow(a.costMultiplier,a.level):1/0};return(i,a)=>(oe(),_e("section",JA,[a[5]||(a[5]=$("h2",{class:"text-3xl font-serif text-yellow-100 mb-6 border-b border-yellow-600 pb-3"},"Sanctum Overview",-1)),a[6]||(a[6]=$("p",{class:"text-lg text-yellow-300 mb-4"}," Welcome back, Scholar. The whispers of ancient knowledge await your command. Your current reserves of Knowledge are vital for your arcane pursuits. ",-1)),$("div",YA,[$("span",XA," Current Knowledge: "+De(n.knowledge.toFixed(2)),1),$("button",{onClick:a[0]||(a[0]=l=>r("generate-knowledge")),class:"bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"}," Generate Knowledge "),a[3]||(a[3]=$("p",{class:"text-sm text-yellow-400 mt-2"},"Click to harness raw arcane energy and convert it into Knowledge.",-1)),$("p",ZA,[a[1]||(a[1]=hr("Passive Knowledge Gain: ",-1)),$("span",eS,De(n.passiveKnowledgeGain.toFixed(2)),1),a[2]||(a[2]=hr(" / second",-1))])]),$("div",tS,[a[4]||(a[4]=$("h3",{class:"text-2xl font-serif text-yellow-100 mb-4"},"Arcane Multipliers",-1)),$("div",nS,[(oe(!0),_e(At,null,Jl(n.multiplierItems,(l,c)=>(oe(),_e("div",{key:c,class:"bg-violet-700 p-4 rounded-lg border border-yellow-800 shadow-md flex flex-col"},[$("h4",rS,De(l.name)+" (Level "+De(l.level)+")",1),$("p",sS,[hr(" Current effect: +"+De((l.baseEffect*Math.pow(l.effectMultiplier,l.level>0?l.level-1:0)).toFixed(2))+" knowledge/s ",1),l.level>0?(oe(),_e("span",iS,"(Next: +"+De((l.baseEffect*Math.pow(l.effectMultiplier,l.level)).toFixed(2))+" knowledge/s)",1)):vt("",!0)]),$("p",oS,[hr(" Cost for next level ("+De(l.level+1)+"): ",1),$("span",aS,De(s(c).toFixed(2))+" Knowledge",1)]),$("button",{onClick:h=>r("buy-multiplier",c),disabled:n.knowledge<s(c),class:cn(["mt-auto bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md text-base font-bold transition duration-300 ease-in-out",n.knowledge<s(c)?"opacity-50 cursor-not-allowed":""])}," Buy "+De(l.name)+" (Level "+De(l.level+1)+") ",11,lS)]))),128))])])]))}},uS=An(cS,[["__scopeId","data-v-fd3b34cd"]]),hS={class:"bg-violet-800 p-6 rounded-lg shadow-xl border border-yellow-700"},dS={__name:"ResearchView",setup(n){return console.log("ResearchView: Component loaded."),(e,t)=>(oe(),_e("section",hS,t[0]||(t[0]=[$("h2",{class:"text-3xl font-serif text-yellow-100 mb-6 border-b border-yellow-600 pb-3"},"Research",-1),$("p",{class:"text-lg text-yellow-300"}," Uncover forgotten spells and ancient technologies. ",-1),$("p",{class:"text-sm text-yellow-400 mt-4"},"This section will contain various research projects, their costs, and effects.",-1)])))}},fS=An(dS,[["__scopeId","data-v-60638391"]]),pS={class:"bg-violet-800 p-6 rounded-lg shadow-xl border border-yellow-700"},gS={__name:"ExpeditionsView",setup(n){return console.log("ExpeditionsView: Component loaded."),(e,t)=>(oe(),_e("section",pS,t[0]||(t[0]=[$("h2",{class:"text-3xl font-serif text-yellow-100 mb-6 border-b border-yellow-600 pb-3"},"Expeditions",-1),$("p",{class:"text-lg text-yellow-300"}," Send your scholars on perilous journeys to retrieve rare artifacts and knowledge. ",-1),$("p",{class:"text-sm text-yellow-400 mt-4"},"Manage your expeditions, track their progress, and claim rewards here.",-1)])))}},mS=An(gS,[["__scopeId","data-v-28357401"]]),_S={class:"bg-violet-800 p-6 rounded-lg shadow-xl border border-yellow-700"},yS={__name:"InventoryView",setup(n){return console.log("InventoryView: Component loaded."),(e,t)=>(oe(),_e("section",_S,t[0]||(t[0]=[$("h2",{class:"text-3xl font-serif text-yellow-100 mb-6 border-b border-yellow-600 pb-3"},"Inventory",-1),$("p",{class:"text-lg text-yellow-300"}," Behold your collected treasures and resources. ",-1),$("p",{class:"text-sm text-yellow-400 mt-4"},"This section will display all your acquired items, resources, and their quantities.",-1)])))}},vS=An(yS,[["__scopeId","data-v-5a23a6b6"]]),wS={class:"bg-violet-800 p-6 rounded-lg shadow-xl border border-yellow-700"},ES={__name:"SkillTreeView",setup(n){return console.log("SkillTreeView: Component loaded."),(e,t)=>(oe(),_e("section",wS,t[0]||(t[0]=[$("h2",{class:"text-3xl font-serif text-yellow-100 mb-6 border-b border-yellow-600 pb-3"},"Skill Tree",-1),$("p",{class:"text-lg text-yellow-300"}," Forge your destiny by mastering powerful skills and abilities. ",-1),$("p",{class:"text-sm text-yellow-400 mt-4"},"Invest your hard-earned skill points to unlock new capabilities and enhance existing ones.",-1)])))}},TS=An(ES,[["__scopeId","data-v-683dc665"]]),IS={class:"bg-violet-800 p-6 rounded-lg shadow-xl border border-yellow-700"},bS={__name:"ClassificationView",setup(n){return console.log("ClassificationView: Component loaded."),(e,t)=>(oe(),_e("section",IS,t[0]||(t[0]=[$("h2",{class:"text-3xl font-serif text-yellow-100 mb-6 border-b border-yellow-600 pb-3"},"Classification",-1),$("p",{class:"text-lg text-yellow-300"}," Organize and categorize your vast knowledge and discoveries. ",-1),$("p",{class:"text-sm text-yellow-400 mt-4"},"This section helps you keep track of all the arcane secrets you've uncovered.",-1)])))}},AS=An(bS,[["__scopeId","data-v-67dce0e0"]]),SS={class:"flex flex-col h-screen w-full bg-gray-950 text-yellow-300 font-sans overflow-hidden"},RS={class:"flex items-center justify-between p-4 bg-violet-900 shadow-lg border-b border-yellow-600"},CS={class:"flex items-center space-x-4"},PS={class:"text-lg text-yellow-300"},xS={class:"font-bold text-yellow-100 text-2xl"},kS=["disabled"],VS={class:"flex flex-1 overflow-hidden bg-gray-950"},DS={class:"w-1/5 min-w-[180px] bg-violet-950 p-4 border-r border-yellow-600 flex flex-col space-y-3"},NS=["onClick"],OS={class:"flex-1 p-6 overflow-y-auto custom-scrollbar"},MS={__name:"MainGameComponent",props:{userId:{type:String,required:!0},characterId:{type:String,required:!0}},emits:["returnToCharacterSelect"],setup(n,{emit:e}){const t=n,r=e;console.log("MainGameComponent: Component setup started.");const s=je(0),i=je("sanctum"),a=je(!1),l=je({arcaneConduits:{level:0,baseCost:10,costMultiplier:1.15,baseEffect:.1,effectMultiplier:1.05,name:"Arcane Conduit"},ancientScrolls:{level:0,baseCost:50,costMultiplier:1.2,baseEffect:.5,effectMultiplier:1.08,name:"Ancient Scroll"},ethericCrystals:{level:0,baseCost:200,costMultiplier:1.25,baseEffect:2,effectMultiplier:1.1,name:"Etheric Crystal"},celestialOrbs:{level:0,baseCost:1e3,costMultiplier:1.3,baseEffect:10,effectMultiplier:1.12,name:"Celestial Orb"}}),c=os(),h=bi(),f=typeof __app_id<"u"?__app_id:"default-app-id",g=Hf(()=>{let ee=0;for(const ne in l.value){const E=l.value[ne];if(E.level>0){const m=E.baseEffect*Math.pow(E.effectMultiplier,E.level-1);ee+=m}}return ee}),_=()=>{s.value+=1,console.log("Knowledge generated (click):",s.value)},A=ee=>{const ne=l.value[ee];return ne?ne.baseCost*Math.pow(ne.costMultiplier,ne.level):1/0},P=ee=>{const ne=l.value[ee];if(!ne){console.error("Invalid multiplier item key:",ee);return}const E=A(ee);s.value>=E?(s.value-=E,ne.level+=1,console.log(`Bought ${ne.name} level ${ne.level}. Knowledge remaining: ${s.value.toFixed(2)}`),k()):console.warn(`Not enough knowledge to buy ${ne.name}. Needed: ${E.toFixed(2)}, Have: ${s.value.toFixed(2)}`)},k=async()=>{a.value=!0;try{const ee=c.currentUser;if(!ee||!t.characterId){console.error("Save failed: User not authenticated or character not selected.");return}const ne=Fo(h,`artifacts/${f}/users/${ee.uid}/characters`,t.characterId);await uA(ne,{knowledge:s.value,multiplierItems:JSON.parse(JSON.stringify(l.value)),lastSaved:Ce.now()},{merge:!0}),console.log("Game progress saved successfully for character:",t.characterId)}catch(ee){console.error("Error saving game progress:",ee)}finally{a.value=!1}},O=async()=>{try{const ee=c.currentUser;if(!ee||!t.characterId){console.warn("Load skipped: User not authenticated or character not selected.");return}const ne=Fo(h,`artifacts/${f}/users/${ee.uid}/characters`,t.characterId),E=await lA(ne);if(E.exists()){const m=E.data();if(s.value=m.knowledge||0,m.multiplierItems)for(const v in l.value)m.multiplierItems[v]&&(l.value[v].level=m.multiplierItems[v].level||0);if(m.lastSaved&&g.value>0){const v=m.lastSaved.toDate(),b=(new Date().getTime()-v.getTime())/1e3;if(b>0){const S=b*g.value;s.value+=S,console.log(`Offline gain for ${t.characterId}: ${S.toFixed(2)} knowledge over ${b.toFixed(0)} seconds.`)}}console.log("Game progress loaded for character:",t.characterId,"Knowledge:",s.value,"Multipliers:",l.value)}else{console.log("No saved progress found for this character. Starting new game state."),s.value=0;for(const m in l.value)l.value[m].level=0}}catch(ee){console.error("Error loading game progress:",ee)}},j=async()=>{await k();try{await c.signOut(),console.log("MainGameComponent: User logged out successfully.")}catch(ee){console.error("MainGameComponent: Logout error:",ee)}},N=async()=>{await k(),r("returnToCharacterSelect"),console.log("MainGameComponent: Returning to character selection.")};let z=null;ui(()=>{O(),z=setInterval(()=>{s.value+=g.value},1e3)}),Ql(async()=>{z&&clearInterval(z),await k()});const J=[{id:"sanctum",name:"Sanctum / Home"},{id:"research",name:"Research"},{id:"expeditions",name:"Expeditions"},{id:"inventory",name:"Inventory"},{id:"skill-tree",name:"Skill Tree"},{id:"classification",name:"Classification"}];return(ee,ne)=>(oe(),_e("div",SS,[$("header",RS,[ne[1]||(ne[1]=$("h1",{class:"text-3xl font-serif text-yellow-100 tracking-wide"},"The Arcane Scholar’s Legacy",-1)),$("div",CS,[$("span",PS,[ne[0]||(ne[0]=hr("Knowledge: ",-1)),$("span",xS,De(s.value.toFixed(2)),1)]),$("button",{onClick:k,disabled:a.value,class:"bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"},De(a.value?"Saving...":"Save Progress"),9,kS),$("button",{onClick:N,class:"bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"}," Back to Characters "),$("button",{onClick:j,class:"bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"}," Log Out ")])]),$("div",VS,[$("nav",DS,[ne[2]||(ne[2]=$("h3",{class:"text-xl font-serif text-yellow-100 mb-4 border-b border-yellow-700 pb-2"},"Sanctum Menu",-1)),(oe(),_e(At,null,Jl(J,E=>$("button",{key:E.id,onClick:m=>i.value=E.id,class:cn(["text-left px-4 py-2 rounded-lg transition duration-200 ease-in-out",i.value===E.id?"bg-green-800 text-yellow-500 shadow-inner":"hover:bg-violet-800 text-yellow-300"])},De(E.name),11,NS)),64))]),$("main",OS,[i.value==="sanctum"?(oe(),Vt(uS,{key:0,knowledge:s.value,multiplierItems:l.value,passiveKnowledgeGain:g.value,onGenerateKnowledge:_,onBuyMultiplier:P},null,8,["knowledge","multiplierItems","passiveKnowledgeGain"])):i.value==="research"?(oe(),Vt(fS,{key:1})):i.value==="expeditions"?(oe(),Vt(mS,{key:2})):i.value==="inventory"?(oe(),Vt(vS,{key:3})):i.value==="skill-tree"?(oe(),Vt(TS,{key:4})):i.value==="classification"?(oe(),Vt(AS,{key:5})):vt("",!0)])])]))}},LS=An(MS,[["__scopeId","data-v-6b66c390"]]),FS={id:"app"},US={key:0,class:"flex items-center justify-center h-screen w-full bg-gray-950 text-yellow-300 text-3xl font-serif"},$S={key:1},BS={__name:"App",setup(n){const e=os();bi();const t=je(null),r=je(!1),s=je(null),i=je("loading");ui(()=>{Sp(e,f=>{t.value=f,r.value=!0,console.log("App.vue: Auth state changed. User:",f?f.uid:"None"),console.log("App.vue: Is app ready?",r.value)})}),Zi([t,r,s],([f,g,_])=>{g&&(f?_?i.value="game":i.value="characterSelection":i.value="login")});const a=f=>{s.value=f,i.value="game",console.log("App.vue: Character selected with ID:",f)},l=()=>{i.value="characterCreation",console.log("App.vue: Starting new character creation. `currentView` is now:",i.value)},c=f=>{s.value=f,i.value="game",console.log("App.vue: New character created with ID:",f)},h=()=>{s.value=null,i.value="characterSelection",console.log("App.vue: Returning to character selection.")};return(f,g)=>(oe(),_e("div",FS,[r.value?(oe(),_e("div",$S,[i.value==="login"?(oe(),Vt(yA,{key:0})):i.value==="characterSelection"?(oe(),Vt(QA,{key:`selection-${t.value.uid}`,onCharacterSelected:a,onStartNewCharacterCreation:l})):i.value==="characterCreation"?(oe(),Vt(MA,{key:`creation-${t.value.uid}`,onCharacterCreated:c,onReturnToSelect:h})):i.value==="game"?(oe(),Vt(LS,{key:`game-${s.value}`,userId:t.value.uid,characterId:s.value,onReturnToCharacterSelect:h},null,8,["userId","characterId"])):vt("",!0)])):(oe(),_e("div",US," Loading... "))]))}};var jS="firebase",qS="12.0.0";/**
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
 */Bn(jS,qS,"app");const HS={apiKey:"AIzaSyARajg1PBZ0n8gyWrrpWynr8298-pmm0l4",authDomain:"arcane-scholars-legacy.firebaseapp.com",projectId:"arcane-scholars-legacy",storageBucket:"arcane-scholars-legacy.firebasestorage.app",messagingSenderId:"976593685731",appId:"1:976593685731:web:bfa95e8221f0b76f27c9d6",measurementId:"G-W3VDVWF7LF"},Os=typeof __firebase_config<"u"&&Object.keys(JSON.parse(__firebase_config)).length>0?JSON.parse(__firebase_config):HS;const jd=typeof __initial_auth_token<"u"?__initial_auth_token:null;let Ja,Qs,wm;console.log("main.js: Starting Firebase initialization process...");console.log("main.js: Using firebaseConfig:",Os);if(Os&&Object.keys(Os).length>0&&Os.apiKey!=="YOUR_FIREBASE_API_KEY")try{Ja=rp(Os),Qs=os(Ja),wm=bi(Ja),console.log("Firebase initialized successfully.")}catch(n){console.error("Failed to initialize Firebase:",n)}else console.warn("Firebase configuration is missing or placeholder. Firebase will not be fully initialized."),console.warn('Please replace "YOUR_FIREBASE_API_KEY", "YOUR_PROJECT_ID", etc., with your actual Firebase project credentials for local development.');async function zS(){if(!Qs){console.warn("Firebase Auth not initialized, skipping authentication.");return}try{jd?(await FE(Qs,jd),console.log("Signed in with custom token.")):(await DE(Qs),console.log("Signed in anonymously."))}catch(n){console.error("Firebase authentication error:",n)}}const Kc=hv(BS);Kc.config.globalProperties.$auth=Qs;Kc.config.globalProperties.$db=wm;zS().then(()=>{Kc.mount("#app")});
