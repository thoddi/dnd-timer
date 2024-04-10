var nx=Object.defineProperty;var ix=(e,t,r)=>t in e?nx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var jp=(e,t,r)=>(ix(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var Rv=Object.defineProperty,ox=Object.defineProperties,sx=Object.getOwnPropertyDescriptor,ax=Object.getOwnPropertyDescriptors,Fp=Object.getOwnPropertySymbols,lx=Object.prototype.hasOwnProperty,cx=Object.prototype.propertyIsEnumerable,mu=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Bp=(e,t,r)=>t in e?Rv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,sn=(e,t)=>{for(var r in t||(t={}))lx.call(t,r)&&Bp(e,r,t[r]);if(Fp)for(var r of Fp(t))cx.call(t,r)&&Bp(e,r,t[r]);return e},ya=(e,t)=>ox(e,ax(t)),u=(e,t,r,n)=>{for(var i=n>1?void 0:n?sx(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&Rv(t,r,i),i},ux=function(e,t){this[0]=e,this[1]=t},dx=e=>{var t=e[mu("asyncIterator")],r=!1,n,i={};return t==null?(t=e[mu("iterator")](),n=o=>i[o]=s=>t[o](s)):(t=t.call(e),n=o=>i[o]=s=>{if(r){if(r=!1,o==="throw")throw s;return s}return r=!0,{done:!1,value:new ux(new Promise(l=>{var a=t[o](s);if(!(a instanceof Object))throw TypeError("Object expected");l(a)}),1)}}),i[mu("iterator")]=()=>i,n("next"),"throw"in t?n("throw"):i.throw=o=>{throw o},"return"in t&&n("return"),i},Zo=new WeakMap,Jo=new WeakMap,es=new WeakMap,gu=new WeakSet,Ka=new WeakMap,an=class{constructor(e,t){this.handleFormData=r=>{const n=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!n&&!s&&typeof i=="string"&&i.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(l=>{r.formData.append(i,l.toString())}):r.formData.append(i,o.toString()))},this.handleFormSubmit=r=>{var n;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((n=Zo.get(this.form))==null||n.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!i&&!o(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ka.set(this.host,[])},this.handleInteraction=r=>{const n=Ka.get(this.host);n.includes(r.type)||n.push(r.type),n.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const n of r)if(typeof n.checkValidity=="function"&&!n.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const n of r)if(typeof n.reportValidity=="function"&&!n.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=sn({form:r=>{const n=r.form;if(n){const o=r.getRootNode().querySelector(`#${n}`);if(o)return o}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var n;return(n=r.disabled)!=null?n:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,n)=>r.value=n,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Ka.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ka.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Zo.has(this.form)?Zo.get(this.form).add(this.host):Zo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Jo.has(this.form)||(Jo.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),es.has(this.form)||(es.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Zo.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Jo.has(this.form)&&(this.form.reportValidity=Jo.get(this.form),Jo.delete(this.form)),es.has(this.form)&&(this.form.checkValidity=es.get(this.form),es.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?gu.add(e):gu.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(n=>{t.hasAttribute(n)&&r.setAttribute(n,t.getAttribute(n))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!gu.has(t),n=!!t.required;t.toggleAttribute("data-required",n),t.toggleAttribute("data-optional",!n),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Tc=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),fx=Object.freeze(ya(sn({},Tc),{valid:!1,valueMissing:!0})),hx=Object.freeze(ya(sn({},Tc),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const El=globalThis,Yf=El.ShadowRoot&&(El.ShadyCSS===void 0||El.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xf=Symbol(),Vp=new WeakMap;let Nv=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Xf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Yf&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Vp.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Vp.set(r,t))}return t}toString(){return this.cssText}};const px=e=>new Nv(typeof e=="string"?e:e+"",void 0,Xf),W=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Nv(r,e,Xf)},mx=(e,t)=>{if(Yf)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=El.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},Hp=Yf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return px(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:gx,defineProperty:vx,getOwnPropertyDescriptor:yx,getOwnPropertyNames:bx,getOwnPropertySymbols:wx,getPrototypeOf:xx}=Object,Pn=globalThis,Up=Pn.trustedTypes,_x=Up?Up.emptyScript:"",vu=Pn.reactiveElementPolyfillSupport,_s=(e,t)=>e,ko={toAttribute(e,t){switch(t){case Boolean:e=e?_x:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Gf=(e,t)=>!gx(e,t),Wp={attribute:!0,type:String,converter:ko,reflect:!1,hasChanged:Gf};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Pn.litPropertyMetadata??(Pn.litPropertyMetadata=new WeakMap);class qi extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Wp){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&vx(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:o}=yx(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const l=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Wp}static _$Ei(){if(this.hasOwnProperty(_s("elementProperties")))return;const t=xx(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_s("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_s("properties"))){const r=this.properties,n=[...bx(r),...wx(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(Hp(i))}else t!==void 0&&r.push(Hp(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mx(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){var o;const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:ko).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,r){var o;const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:ko;this._$Em=i,this[i]=l.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Gf)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}qi.elementStyles=[],qi.shadowRootOptions={mode:"open"},qi[_s("elementProperties")]=new Map,qi[_s("finalized")]=new Map,vu==null||vu({ReactiveElement:qi}),(Pn.reactiveElementVersions??(Pn.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ks=globalThis,Wl=ks.trustedTypes,Kp=Wl?Wl.createPolicy("lit-html",{createHTML:e=>e}):void 0,Dv="$lit$",kn=`lit$${(Math.random()+"").slice(9)}$`,Mv="?"+kn,kx=`<${Mv}>`,Ci=document,Us=()=>Ci.createComment(""),Ws=e=>e===null||typeof e!="object"&&typeof e!="function",jv=Array.isArray,Cx=e=>jv(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",yu=`[ 	
\f\r]`,ts=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yp=/-->/g,Xp=/>/g,ai=RegExp(`>|${yu}(?:([^\\s"'>=/]+)(${yu}*=${yu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gp=/'/g,qp=/"/g,Fv=/^(?:script|style|textarea|title)$/i,Sx=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),O=Sx(1),Rt=Symbol.for("lit-noChange"),Ce=Symbol.for("lit-nothing"),Qp=new WeakMap,hi=Ci.createTreeWalker(Ci,129);function Bv(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kp!==void 0?Kp.createHTML(t):t}const $x=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":"",s=ts;for(let l=0;l<r;l++){const a=e[l];let c,d,f=-1,h=0;for(;h<a.length&&(s.lastIndex=h,d=s.exec(a),d!==null);)h=s.lastIndex,s===ts?d[1]==="!--"?s=Yp:d[1]!==void 0?s=Xp:d[2]!==void 0?(Fv.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=ai):d[3]!==void 0&&(s=ai):s===ai?d[0]===">"?(s=i??ts,f=-1):d[1]===void 0?f=-2:(f=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?ai:d[3]==='"'?qp:Gp):s===qp||s===Gp?s=ai:s===Yp||s===Xp?s=ts:(s=ai,i=void 0);const p=s===ai&&e[l+1].startsWith("/>")?" ":"";o+=s===ts?a+kx:f>=0?(n.push(c),a.slice(0,f)+Dv+a.slice(f)+kn+p):a+kn+(f===-2?l:p)}return[Bv(e,o+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};let hd=class Vv{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const l=t.length-1,a=this.parts,[c,d]=$x(t,r);if(this.el=Vv.createElement(c,n),hi.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=hi.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Dv)){const h=d[s++],p=i.getAttribute(f).split(kn),v=/([.?@])?(.*)/.exec(h);a.push({type:1,index:o,name:v[2],strings:p,ctor:v[1]==="."?Ax:v[1]==="?"?zx:v[1]==="@"?Tx:Oc}),i.removeAttribute(f)}else f.startsWith(kn)&&(a.push({type:6,index:o}),i.removeAttribute(f));if(Fv.test(i.tagName)){const f=i.textContent.split(kn),h=f.length-1;if(h>0){i.textContent=Wl?Wl.emptyScript:"";for(let p=0;p<h;p++)i.append(f[p],Us()),hi.nextNode(),a.push({type:2,index:++o});i.append(f[h],Us())}}}else if(i.nodeType===8)if(i.data===Mv)a.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(kn,f+1))!==-1;)a.push({type:7,index:o}),f+=kn.length-1}o++}}static createElement(t,r){const n=Ci.createElement("template");return n.innerHTML=t,n}};function Co(e,t,r=e,n){var s,l;if(t===Rt)return t;let i=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const o=Ws(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(t=Co(e,i._$AS(e,t.values),i,n)),t}let Ex=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??Ci).importNode(r,!0);hi.currentNode=i;let o=hi.nextNode(),s=0,l=0,a=n[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new qf(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Ox(o,this,t)),this._$AV.push(c),a=n[++l]}s!==(a==null?void 0:a.index)&&(o=hi.nextNode(),s++)}return hi.currentNode=Ci,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}},qf=class Hv{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=Ce,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Co(this,t,r),Ws(t)?t===Ce||t==null||t===""?(this._$AH!==Ce&&this._$AR(),this._$AH=Ce):t!==this._$AH&&t!==Rt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Cx(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Ce&&Ws(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ci.createTextNode(t)),this._$AH=t}$(t){var o;const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=hd.createElement(Bv(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const s=new Ex(i,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(t){let r=Qp.get(t.strings);return r===void 0&&Qp.set(t.strings,r=new hd(t)),r}k(t){jv(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new Hv(this.S(Us()),this.S(Us()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}},Oc=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,o){this.type=1,this._$AH=Ce,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ce}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=Co(this,t,r,0),s=!Ws(t)||t!==this._$AH&&t!==Rt,s&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=Co(this,l[n+a],r,a),c===Rt&&(c=this._$AH[a]),s||(s=!Ws(c)||c!==this._$AH[a]),c===Ce?t=Ce:t!==Ce&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}s&&!i&&this.j(t)}j(t){t===Ce?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ax=class extends Oc{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ce?void 0:t}},zx=class extends Oc{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ce)}},Tx=class extends Oc{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){if((t=Co(this,t,r,0)??Ce)===Rt)return;const n=this._$AH,i=t===Ce&&n!==Ce||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==Ce&&(n===Ce||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}},Ox=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Co(this,t)}};const bu=ks.litHtmlPolyfillSupport;bu==null||bu(hd,qf),(ks.litHtmlVersions??(ks.litHtmlVersions=[])).push("3.1.2");const Px=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new qf(t.insertBefore(Us(),o),o,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ln=class extends qi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Px(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Rt}};var Iv;Ln._$litElement$=!0,Ln.finalized=!0,(Iv=globalThis.litElementHydrateSupport)==null||Iv.call(globalThis,{LitElement:Ln});const wu=globalThis.litElementPolyfillSupport;wu==null||wu({LitElement:Ln});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var Lx=W`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,X=W`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qf=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ix={attribute:!0,type:String,converter:ko,reflect:!1,hasChanged:Gf},Rx=(e=Ix,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,e)},init(l){return l!==void 0&&this.P(s,void 0,e),l}}}if(n==="setter"){const{name:s}=r;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+n)};function g(e){return(t,r)=>typeof r=="object"?Rx(e,t,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(e){return g({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zf(e){return(t,r)=>{const n=typeof t=="function"?t:t[r];Object.assign(n,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pd=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(e,t){return(r,n,i)=>{const o=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(e))??null};if(t){const{get:s,set:l}=typeof n=="object"?r:i??(()=>{const a=Symbol();return{get(){return this[a]},set(c){this[a]=c}}})();return pd(r,n,{get(){let a=s.call(this);return a===void 0&&(a=o(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return pd(r,n,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Nx(e){return(t,r)=>pd(t,r,{async get(){var n;return await this.updateComplete,((n=this.renderRoot)==null?void 0:n.querySelector(e))??null}})}var V=class extends Ln{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,sn({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const n=customElements.get(e);if(!n){customElements.define(e,class extends t{},r);return}let i=" (unknown version)",o=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in n&&n.version&&(o=" v"+n.version),!(i&&o&&i===o)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${o} has already been registered.`)}};V.version="2.15.0";V.dependencies={};u([g()],V.prototype,"dir",2);u([g()],V.prototype,"lang",2);var Jf=class extends V{render(){return O` <slot></slot> `}};Jf.styles=[X,Lx];Jf.define("sl-visually-hidden");var Dx=W`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Mx=W`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Vn=Math.min,It=Math.max,Kl=Math.round,Ya=Math.floor,Hn=e=>({x:e,y:e}),jx={left:"right",right:"left",bottom:"top",top:"bottom"},Fx={start:"end",end:"start"};function md(e,t,r){return It(e,Vn(t,r))}function jo(e,t){return typeof e=="function"?e(t):e}function Un(e){return e.split("-")[0]}function Fo(e){return e.split("-")[1]}function Uv(e){return e==="x"?"y":"x"}function eh(e){return e==="y"?"height":"width"}function ba(e){return["top","bottom"].includes(Un(e))?"y":"x"}function th(e){return Uv(ba(e))}function Bx(e,t,r){r===void 0&&(r=!1);const n=Fo(e),i=th(e),o=eh(i);let s=i==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Yl(s)),[s,Yl(s)]}function Vx(e){const t=Yl(e);return[gd(e),t,gd(t)]}function gd(e){return e.replace(/start|end/g,t=>Fx[t])}function Hx(e,t,r){const n=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return r?t?i:n:t?n:i;case"left":case"right":return t?o:s;default:return[]}}function Ux(e,t,r,n){const i=Fo(e);let o=Hx(Un(e),r==="start",n);return i&&(o=o.map(s=>s+"-"+i),t&&(o=o.concat(o.map(gd)))),o}function Yl(e){return e.replace(/left|right|bottom|top/g,t=>jx[t])}function Wx(e){return{top:0,right:0,bottom:0,left:0,...e}}function Wv(e){return typeof e!="number"?Wx(e):{top:e,right:e,bottom:e,left:e}}function Xl(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Zp(e,t,r){let{reference:n,floating:i}=e;const o=ba(t),s=th(t),l=eh(s),a=Un(t),c=o==="y",d=n.x+n.width/2-i.width/2,f=n.y+n.height/2-i.height/2,h=n[l]/2-i[l]/2;let p;switch(a){case"top":p={x:d,y:n.y-i.height};break;case"bottom":p={x:d,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:f};break;case"left":p={x:n.x-i.width,y:f};break;default:p={x:n.x,y:n.y}}switch(Fo(t)){case"start":p[s]-=h*(r&&c?-1:1);break;case"end":p[s]+=h*(r&&c?-1:1);break}return p}const Kx=async(e,t,r)=>{const{placement:n="bottom",strategy:i="absolute",middleware:o=[],platform:s}=r,l=o.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:f}=Zp(c,n,a),h=n,p={},v=0;for(let x=0;x<l.length;x++){const{name:S,fn:b}=l[x],{x:m,y,data:w,reset:C}=await b({x:d,y:f,initialPlacement:n,placement:h,strategy:i,middlewareData:p,rects:c,platform:s,elements:{reference:e,floating:t}});d=m??d,f=y??f,p={...p,[S]:{...p[S],...w}},C&&v<=50&&(v++,typeof C=="object"&&(C.placement&&(h=C.placement),C.rects&&(c=C.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):C.rects),{x:d,y:f}=Zp(c,h,a)),x=-1)}return{x:d,y:f,placement:h,strategy:i,middlewareData:p}};async function rh(e,t){var r;t===void 0&&(t={});const{x:n,y:i,platform:o,rects:s,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:h=!1,padding:p=0}=jo(t,e),v=Wv(p),S=l[h?f==="floating"?"reference":"floating":f],b=Xl(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(S)))==null||r?S:S.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),m=f==="floating"?{...s.floating,x:n,y:i}:s.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),w=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},C=Xl(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:m,offsetParent:y,strategy:a}):m);return{top:(b.top-C.top+v.top)/w.y,bottom:(C.bottom-b.bottom+v.bottom)/w.y,left:(b.left-C.left+v.left)/w.x,right:(C.right-b.right+v.right)/w.x}}const Yx=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:i,rects:o,platform:s,elements:l,middlewareData:a}=t,{element:c,padding:d=0}=jo(e,t)||{};if(c==null)return{};const f=Wv(d),h={x:r,y:n},p=th(i),v=eh(p),x=await s.getDimensions(c),S=p==="y",b=S?"top":"left",m=S?"bottom":"right",y=S?"clientHeight":"clientWidth",w=o.reference[v]+o.reference[p]-h[p]-o.floating[v],C=h[p]-o.reference[p],$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let E=$?$[y]:0;(!E||!await(s.isElement==null?void 0:s.isElement($)))&&(E=l.floating[y]||o.floating[v]);const A=w/2-C/2,T=E/2-x[v]/2-1,z=Vn(f[b],T),N=Vn(f[m],T),D=z,Y=E-x[v]-N,Z=E/2-x[v]/2+A,re=md(D,Z,Y),J=!a.arrow&&Fo(i)!=null&&Z!==re&&o.reference[v]/2-(Z<D?z:N)-x[v]/2<0,oe=J?Z<D?Z-D:Z-Y:0;return{[p]:h[p]+oe,data:{[p]:re,centerOffset:Z-re-oe,...J&&{alignmentOffset:oe}},reset:J}}}),Xx=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:i,middlewareData:o,rects:s,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...S}=jo(e,t);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const b=Un(i),m=Un(l)===l,y=await(a.isRTL==null?void 0:a.isRTL(c.floating)),w=h||(m||!x?[Yl(l)]:Vx(l));!h&&v!=="none"&&w.push(...Ux(l,x,v,y));const C=[l,...w],$=await rh(t,S),E=[];let A=((n=o.flip)==null?void 0:n.overflows)||[];if(d&&E.push($[b]),f){const D=Bx(i,s,y);E.push($[D[0]],$[D[1]])}if(A=[...A,{placement:i,overflows:E}],!E.every(D=>D<=0)){var T,z;const D=(((T=o.flip)==null?void 0:T.index)||0)+1,Y=C[D];if(Y)return{data:{index:D,overflows:A},reset:{placement:Y}};let Z=(z=A.filter(re=>re.overflows[0]<=0).sort((re,J)=>re.overflows[1]-J.overflows[1])[0])==null?void 0:z.placement;if(!Z)switch(p){case"bestFit":{var N;const re=(N=A.map(J=>[J.placement,J.overflows.filter(oe=>oe>0).reduce((oe,L)=>oe+L,0)]).sort((J,oe)=>J[1]-oe[1])[0])==null?void 0:N[0];re&&(Z=re);break}case"initialPlacement":Z=l;break}if(i!==Z)return{reset:{placement:Z}}}return{}}}};async function Gx(e,t){const{placement:r,platform:n,elements:i}=e,o=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=Un(r),l=Fo(r),a=ba(r)==="y",c=["left","top"].includes(s)?-1:1,d=o&&a?-1:1,f=jo(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof v=="number"&&(p=l==="end"?v*-1:v),a?{x:p*d,y:h*c}:{x:h*c,y:p*d}}const qx=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:i,y:o,placement:s,middlewareData:l}=t,a=await Gx(t,e);return s===((r=l.offset)==null?void 0:r.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+a.x,y:o+a.y,data:{...a,placement:s}}}}},Qx=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:i}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:S=>{let{x:b,y:m}=S;return{x:b,y:m}}},...a}=jo(e,t),c={x:r,y:n},d=await rh(t,a),f=ba(Un(i)),h=Uv(f);let p=c[h],v=c[f];if(o){const S=h==="y"?"top":"left",b=h==="y"?"bottom":"right",m=p+d[S],y=p-d[b];p=md(m,p,y)}if(s){const S=f==="y"?"top":"left",b=f==="y"?"bottom":"right",m=v+d[S],y=v-d[b];v=md(m,v,y)}const x=l.fn({...t,[h]:p,[f]:v});return{...x,data:{x:x.x-r,y:x.y-n}}}}},Zx=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:n,platform:i,elements:o}=t,{apply:s=()=>{},...l}=jo(e,t),a=await rh(t,l),c=Un(r),d=Fo(r),f=ba(r)==="y",{width:h,height:p}=n.floating;let v,x;c==="top"||c==="bottom"?(v=c,x=d===(await(i.isRTL==null?void 0:i.isRTL(o.floating))?"start":"end")?"left":"right"):(x=c,v=d==="end"?"top":"bottom");const S=p-a[v],b=h-a[x],m=!t.middlewareData.shift;let y=S,w=b;if(f){const $=h-a.left-a.right;w=d||m?Vn(b,$):$}else{const $=p-a.top-a.bottom;y=d||m?Vn(S,$):$}if(m&&!d){const $=It(a.left,0),E=It(a.right,0),A=It(a.top,0),T=It(a.bottom,0);f?w=h-2*($!==0||E!==0?$+E:It(a.left,a.right)):y=p-2*(A!==0||T!==0?A+T:It(a.top,a.bottom))}await s({...t,availableWidth:w,availableHeight:y});const C=await i.getDimensions(o.floating);return h!==C.width||p!==C.height?{reset:{rects:!0}}:{}}}};function Wn(e){return Kv(e)?(e.nodeName||"").toLowerCase():"#document"}function Dt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ln(e){var t;return(t=(Kv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Kv(e){return e instanceof Node||e instanceof Dt(e).Node}function Gr(e){return e instanceof Element||e instanceof Dt(e).Element}function Tr(e){return e instanceof HTMLElement||e instanceof Dt(e).HTMLElement}function Jp(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Dt(e).ShadowRoot}function wa(e){const{overflow:t,overflowX:r,overflowY:n,display:i}=er(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(i)}function Jx(e){return["table","td","th"].includes(Wn(e))}function nh(e){const t=ih(),r=er(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function e2(e){let t=So(e);for(;Tr(t)&&!Pc(t);){if(nh(t))return t;t=So(t)}return null}function ih(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Pc(e){return["html","body","#document"].includes(Wn(e))}function er(e){return Dt(e).getComputedStyle(e)}function Lc(e){return Gr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function So(e){if(Wn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Jp(e)&&e.host||ln(e);return Jp(t)?t.host:t}function Yv(e){const t=So(e);return Pc(t)?e.ownerDocument?e.ownerDocument.body:e.body:Tr(t)&&wa(t)?t:Yv(t)}function Ks(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=Yv(e),o=i===((n=e.ownerDocument)==null?void 0:n.body),s=Dt(i);return o?t.concat(s,s.visualViewport||[],wa(i)?i:[],s.frameElement&&r?Ks(s.frameElement):[]):t.concat(i,Ks(i,[],r))}function Xv(e){const t=er(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=Tr(e),o=i?e.offsetWidth:r,s=i?e.offsetHeight:n,l=Kl(r)!==o||Kl(n)!==s;return l&&(r=o,n=s),{width:r,height:n,$:l}}function oh(e){return Gr(e)?e:e.contextElement}function mo(e){const t=oh(e);if(!Tr(t))return Hn(1);const r=t.getBoundingClientRect(),{width:n,height:i,$:o}=Xv(t);let s=(o?Kl(r.width):r.width)/n,l=(o?Kl(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const t2=Hn(0);function Gv(e){const t=Dt(e);return!ih()||!t.visualViewport?t2:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function r2(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==Dt(e)?!1:t}function Si(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),o=oh(e);let s=Hn(1);t&&(n?Gr(n)&&(s=mo(n)):s=mo(e));const l=r2(o,r,n)?Gv(o):Hn(0);let a=(i.left+l.x)/s.x,c=(i.top+l.y)/s.y,d=i.width/s.x,f=i.height/s.y;if(o){const h=Dt(o),p=n&&Gr(n)?Dt(n):n;let v=h,x=v.frameElement;for(;x&&n&&p!==v;){const S=mo(x),b=x.getBoundingClientRect(),m=er(x),y=b.left+(x.clientLeft+parseFloat(m.paddingLeft))*S.x,w=b.top+(x.clientTop+parseFloat(m.paddingTop))*S.y;a*=S.x,c*=S.y,d*=S.x,f*=S.y,a+=y,c+=w,v=Dt(x),x=v.frameElement}}return Xl({width:d,height:f,x:a,y:c})}const n2=[":popover-open",":modal"];function qv(e){return n2.some(t=>{try{return e.matches(t)}catch{return!1}})}function i2(e){let{elements:t,rect:r,offsetParent:n,strategy:i}=e;const o=i==="fixed",s=ln(n),l=t?qv(t.floating):!1;if(n===s||l&&o)return r;let a={scrollLeft:0,scrollTop:0},c=Hn(1);const d=Hn(0),f=Tr(n);if((f||!f&&!o)&&((Wn(n)!=="body"||wa(s))&&(a=Lc(n)),Tr(n))){const h=Si(n);c=mo(n),d.x=h.x+n.clientLeft,d.y=h.y+n.clientTop}return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-a.scrollLeft*c.x+d.x,y:r.y*c.y-a.scrollTop*c.y+d.y}}function o2(e){return Array.from(e.getClientRects())}function Qv(e){return Si(ln(e)).left+Lc(e).scrollLeft}function s2(e){const t=ln(e),r=Lc(e),n=e.ownerDocument.body,i=It(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),o=It(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-r.scrollLeft+Qv(e);const l=-r.scrollTop;return er(n).direction==="rtl"&&(s+=It(t.clientWidth,n.clientWidth)-i),{width:i,height:o,x:s,y:l}}function a2(e,t){const r=Dt(e),n=ln(e),i=r.visualViewport;let o=n.clientWidth,s=n.clientHeight,l=0,a=0;if(i){o=i.width,s=i.height;const c=ih();(!c||c&&t==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:o,height:s,x:l,y:a}}function l2(e,t){const r=Si(e,!0,t==="fixed"),n=r.top+e.clientTop,i=r.left+e.clientLeft,o=Tr(e)?mo(e):Hn(1),s=e.clientWidth*o.x,l=e.clientHeight*o.y,a=i*o.x,c=n*o.y;return{width:s,height:l,x:a,y:c}}function em(e,t,r){let n;if(t==="viewport")n=a2(e,r);else if(t==="document")n=s2(ln(e));else if(Gr(t))n=l2(t,r);else{const i=Gv(e);n={...t,x:t.x-i.x,y:t.y-i.y}}return Xl(n)}function Zv(e,t){const r=So(e);return r===t||!Gr(r)||Pc(r)?!1:er(r).position==="fixed"||Zv(r,t)}function c2(e,t){const r=t.get(e);if(r)return r;let n=Ks(e,[],!1).filter(l=>Gr(l)&&Wn(l)!=="body"),i=null;const o=er(e).position==="fixed";let s=o?So(e):e;for(;Gr(s)&&!Pc(s);){const l=er(s),a=nh(s);!a&&l.position==="fixed"&&(i=null),(o?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||wa(s)&&!a&&Zv(e,s))?n=n.filter(d=>d!==s):i=l,s=So(s)}return t.set(e,n),n}function u2(e){let{element:t,boundary:r,rootBoundary:n,strategy:i}=e;const s=[...r==="clippingAncestors"?c2(t,this._c):[].concat(r),n],l=s[0],a=s.reduce((c,d)=>{const f=em(t,d,i);return c.top=It(f.top,c.top),c.right=Vn(f.right,c.right),c.bottom=Vn(f.bottom,c.bottom),c.left=It(f.left,c.left),c},em(t,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function d2(e){const{width:t,height:r}=Xv(e);return{width:t,height:r}}function f2(e,t,r){const n=Tr(t),i=ln(t),o=r==="fixed",s=Si(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const a=Hn(0);if(n||!n&&!o)if((Wn(t)!=="body"||wa(i))&&(l=Lc(t)),n){const f=Si(t,!0,o,t);a.x=f.x+t.clientLeft,a.y=f.y+t.clientTop}else i&&(a.x=Qv(i));const c=s.left+l.scrollLeft-a.x,d=s.top+l.scrollTop-a.y;return{x:c,y:d,width:s.width,height:s.height}}function tm(e,t){return!Tr(e)||er(e).position==="fixed"?null:t?t(e):e.offsetParent}function Jv(e,t){const r=Dt(e);if(!Tr(e)||qv(e))return r;let n=tm(e,t);for(;n&&Jx(n)&&er(n).position==="static";)n=tm(n,t);return n&&(Wn(n)==="html"||Wn(n)==="body"&&er(n).position==="static"&&!nh(n))?r:n||e2(e)||r}const h2=async function(e){const t=this.getOffsetParent||Jv,r=this.getDimensions;return{reference:f2(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await r(e.floating)}}};function p2(e){return er(e).direction==="rtl"}const Al={convertOffsetParentRelativeRectToViewportRelativeRect:i2,getDocumentElement:ln,getClippingRect:u2,getOffsetParent:Jv,getElementRects:h2,getClientRects:o2,getDimensions:d2,getScale:mo,isElement:Gr,isRTL:p2};function m2(e,t){let r=null,n;const i=ln(e);function o(){var l;clearTimeout(n),(l=r)==null||l.disconnect(),r=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:c,top:d,width:f,height:h}=e.getBoundingClientRect();if(l||t(),!f||!h)return;const p=Ya(d),v=Ya(i.clientWidth-(c+f)),x=Ya(i.clientHeight-(d+h)),S=Ya(c),m={rootMargin:-p+"px "+-v+"px "+-x+"px "+-S+"px",threshold:It(0,Vn(1,a))||1};let y=!0;function w(C){const $=C[0].intersectionRatio;if($!==a){if(!y)return s();$?s(!1,$):n=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{r=new IntersectionObserver(w,{...m,root:i.ownerDocument})}catch{r=new IntersectionObserver(w,m)}r.observe(e)}return s(!0),o}function g2(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,c=oh(e),d=i||o?[...c?Ks(c):[],...Ks(t)]:[];d.forEach(b=>{i&&b.addEventListener("scroll",r,{passive:!0}),o&&b.addEventListener("resize",r)});const f=c&&l?m2(c,r):null;let h=-1,p=null;s&&(p=new ResizeObserver(b=>{let[m]=b;m&&m.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var y;(y=p)==null||y.observe(t)})),r()}),c&&!a&&p.observe(c),p.observe(t));let v,x=a?Si(e):null;a&&S();function S(){const b=Si(e);x&&(b.x!==x.x||b.y!==x.y||b.width!==x.width||b.height!==x.height)&&r(),x=b,v=requestAnimationFrame(S)}return r(),()=>{var b;d.forEach(m=>{i&&m.removeEventListener("scroll",r),o&&m.removeEventListener("resize",r)}),f==null||f(),(b=p)==null||b.disconnect(),p=null,a&&cancelAnimationFrame(v)}}const v2=Qx,y2=Xx,rm=Zx,b2=Yx,w2=(e,t,r)=>{const n=new Map,i={platform:Al,...r},o={...i.platform,_c:n};return Kx(e,t,{...i,platform:o})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xa=e=>(...t)=>({_$litDirective$:e,values:t});let _a=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=xa(class extends _a{constructor(e){var t;if(super(e),e.type!==kr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Rt}});function x2(e){return _2(e)}function xu(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function _2(e){for(let t=e;t;t=xu(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=xu(e);t;t=xu(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||r.filter!=="none"||t.tagName==="BODY"))return t}return null}function k2(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var he=class extends V{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let n=0,i=0,o=0,s=0,l=0,a=0,c=0,d=0;r?e.top<t.top?(n=e.left,i=e.bottom,o=e.right,s=e.bottom,l=t.left,a=t.top,c=t.right,d=t.top):(n=t.left,i=t.bottom,o=t.right,s=t.bottom,l=e.left,a=e.top,c=e.right,d=e.top):e.left<t.left?(n=e.right,i=e.top,o=t.left,s=t.top,l=e.right,a=e.bottom,c=t.left,d=t.bottom):(n=t.right,i=t.top,o=e.left,s=e.top,l=t.right,a=t.bottom,c=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${n}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||k2(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=g2(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[qx({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(rm({apply:({rects:r})=>{const n=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=n?`${r.reference.width}px`:"",this.popup.style.height=i?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(y2({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(v2({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(rm({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:n})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${n}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(b2({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>Al.getOffsetParent(r,x2):Al.getOffsetParent;w2(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:ya(sn({},Al),{getOffsetParent:t})}).then(({x:r,y:n,middlewareData:i,placement:o})=>{const s=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${r}px`,top:`${n}px`}),this.arrow){const a=i.arrow.x,c=i.arrow.y;let d="",f="",h="",p="";if(this.arrowPlacement==="start"){const v=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",f=s?v:"",p=s?"":v}else if(this.arrowPlacement==="end"){const v=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=s?"":v,p=s?v:"",h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof a=="number"?`${a}px`:"",d=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:d,right:f,bottom:h,left:p,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return O`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${G({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${G({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?O`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};he.styles=[X,Mx];u([R(".popup")],he.prototype,"popup",2);u([R(".popup__arrow")],he.prototype,"arrowEl",2);u([g()],he.prototype,"anchor",2);u([g({type:Boolean,reflect:!0})],he.prototype,"active",2);u([g({reflect:!0})],he.prototype,"placement",2);u([g({reflect:!0})],he.prototype,"strategy",2);u([g({type:Number})],he.prototype,"distance",2);u([g({type:Number})],he.prototype,"skidding",2);u([g({type:Boolean})],he.prototype,"arrow",2);u([g({attribute:"arrow-placement"})],he.prototype,"arrowPlacement",2);u([g({attribute:"arrow-padding",type:Number})],he.prototype,"arrowPadding",2);u([g({type:Boolean})],he.prototype,"flip",2);u([g({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],he.prototype,"flipFallbackPlacements",2);u([g({attribute:"flip-fallback-strategy"})],he.prototype,"flipFallbackStrategy",2);u([g({type:Object})],he.prototype,"flipBoundary",2);u([g({attribute:"flip-padding",type:Number})],he.prototype,"flipPadding",2);u([g({type:Boolean})],he.prototype,"shift",2);u([g({type:Object})],he.prototype,"shiftBoundary",2);u([g({attribute:"shift-padding",type:Number})],he.prototype,"shiftPadding",2);u([g({attribute:"auto-size"})],he.prototype,"autoSize",2);u([g()],he.prototype,"sync",2);u([g({type:Object})],he.prototype,"autoSizeBoundary",2);u([g({attribute:"auto-size-padding",type:Number})],he.prototype,"autoSizePadding",2);u([g({attribute:"hover-bridge",type:Boolean})],he.prototype,"hoverBridge",2);var e0=new Map,C2=new WeakMap;function S2(e){return e??{keyframes:[],options:{duration:0}}}function nm(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function pe(e,t){e0.set(e,S2(t))}function $e(e,t,r){const n=C2.get(e);if(n!=null&&n[t])return nm(n[t],r.dir);const i=e0.get(t);return i?nm(i,r.dir):{keyframes:[],options:{duration:0}}}function bt(e,t){return new Promise(r=>{function n(i){i.target===e&&(e.removeEventListener(t,n),r())}e.addEventListener(t,n)})}function Re(e,t,r){return new Promise(n=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,ya(sn({},r),{duration:vd()?0:r.duration}));i.addEventListener("cancel",n,{once:!0}),i.addEventListener("finish",n,{once:!0})})}function im(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function vd(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function We(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}function Gl(e,t){return e.map(r=>ya(sn({},r),{height:r.height==="auto"?`${t}px`:r.height}))}const yd=new Set,$2=new MutationObserver(i0),Qi=new Map;let t0=document.documentElement.dir||"ltr",r0=document.documentElement.lang||navigator.language,di;$2.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function n0(...e){e.map(t=>{const r=t.$code.toLowerCase();Qi.has(r)?Qi.set(r,Object.assign(Object.assign({},Qi.get(r)),t)):Qi.set(r,t),di||(di=t)}),i0()}function i0(){t0=document.documentElement.dir||"ltr",r0=document.documentElement.lang||navigator.language,[...yd.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let E2=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){yd.add(this.host)}hostDisconnected(){yd.delete(this.host)}dir(){return`${this.host.dir||t0}`.toLowerCase()}lang(){return`${this.host.lang||r0}`.toLowerCase()}getTranslationData(t){var r,n;const i=new Intl.Locale(t.replace(/_/g,"-")),o=i==null?void 0:i.language.toLowerCase(),s=(n=(r=i==null?void 0:i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&n!==void 0?n:"",l=Qi.get(`${o}-${s}`),a=Qi.get(o);return{locale:i,language:o,region:s,primary:l,secondary:a}}exists(t,r){var n;const{primary:i,secondary:o}=this.getTranslationData((n=r.lang)!==null&&n!==void 0?n:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||o&&o[t]||r.includeFallback&&di&&di[t])}term(t,...r){const{primary:n,secondary:i}=this.getTranslationData(this.lang());let o;if(n&&n[t])o=n[t];else if(i&&i[t])o=i[t];else if(di&&di[t])o=di[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...r):o}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(t,r)}};var o0={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};n0(o0);var A2=o0,de=class extends E2{};n0(A2);function I(e,t){const r=sn({waitUntilFirstUpdate:!1},t);return(n,i)=>{const{update:o}=n,s=Array.isArray(e)?e:[e];n.update=function(l){s.forEach(a=>{const c=a;if(l.has(c)){const d=l.get(c),f=this[c];d!==f&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](d,f)}}),o.call(this,l)}}}var et=class extends V{constructor(){super(),this.localize=new de(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=im(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=im(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await We(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:r,options:n}=$e(this,"tooltip.show",{dir:this.localize.dir()});await Re(this.popup.popup,r,n),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await We(this.body);const{keyframes:r,options:n}=$e(this,"tooltip.hide",{dir:this.localize.dir()});await Re(this.popup.popup,r,n),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}render(){return O`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${G({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};et.styles=[X,Dx];et.dependencies={"sl-popup":he};u([R("slot:not([name])")],et.prototype,"defaultSlot",2);u([R(".tooltip__body")],et.prototype,"body",2);u([R("sl-popup")],et.prototype,"popup",2);u([g()],et.prototype,"content",2);u([g()],et.prototype,"placement",2);u([g({type:Boolean,reflect:!0})],et.prototype,"disabled",2);u([g({type:Number})],et.prototype,"distance",2);u([g({type:Boolean,reflect:!0})],et.prototype,"open",2);u([g({type:Number})],et.prototype,"skidding",2);u([g()],et.prototype,"trigger",2);u([g({type:Boolean})],et.prototype,"hoist",2);u([I("open",{waitUntilFirstUpdate:!0})],et.prototype,"handleOpenChange",1);u([I(["content","distance","hoist","placement","skidding"])],et.prototype,"handleOptionsChange",1);u([I("disabled")],et.prototype,"handleDisabledChange",1);pe("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});pe("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});et.define("sl-tooltip");var z2=W`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,T2=W`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,O2=W`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Ni=(e="value")=>(t,r)=>{const n=t.constructor,i=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(o,s,l){var a;const c=n.getPropertyOptions(e),d=typeof c.attribute=="string"?c.attribute:e;if(o===d){const f=c.converter||ko,p=(typeof f=="function"?f:(a=f==null?void 0:f.fromAttribute)!=null?a:ko.fromAttribute)(l,c.type);this[e]!==p&&(this[r]=p)}i.call(this,o,s,l)}},Di=W`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,wt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const n=r.target;(this.slotNames.includes("[default]")&&!n.name||n.name&&this.slotNames.includes(n.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function P2(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(n=>{n.nodeType===Node.TEXT_NODE&&(r+=n.textContent)}),r}var bd="";function om(e){bd=e}function L2(e=""){if(!bd){const t=[...document.getElementsByTagName("script")],r=t.find(n=>n.hasAttribute("data-shoelace"));if(r)om(r.getAttribute("data-shoelace"));else{const n=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let i="";n&&(i=n.getAttribute("src")),om(i.split("/").slice(0,-1).join("/"))}}return bd.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var I2={name:"default",resolver:e=>L2(`assets/icons/${e}.svg`)},R2=I2,sm={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},N2={name:"system",resolver:e=>e in sm?`data:image/svg+xml,${encodeURIComponent(sm[e])}`:""},D2=N2,M2=[R2,D2],wd=[];function j2(e){wd.push(e)}function F2(e){wd=wd.filter(t=>t!==e)}function am(e){return M2.find(t=>t.name===e)}var B2=W`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V2=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,s0=e=>e.strings===void 0,H2={},U2=(e,t=H2)=>e._$AH=t;var rs=Symbol(),Xa=Symbol(),_u,ku=new Map,ve=class extends V{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let n;if(t!=null&&t.spriteSheet){this.svg=O`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(i),this.svg}try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return n.status===410?rs:Xa}catch{return Xa}try{const i=document.createElement("div");i.innerHTML=await n.text();const o=i.firstElementChild;if(((r=o==null?void 0:o.tagName)==null?void 0:r.toLowerCase())!=="svg")return rs;_u||(_u=new DOMParser);const l=_u.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):rs}catch{return rs}}connectedCallback(){super.connectedCallback(),j2(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),F2(this)}getIconSource(){const e=am(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),n=r?am(this.library):void 0;if(!t){this.svg=null;return}let i=ku.get(t);if(i||(i=this.resolveIcon(t,n),ku.set(t,i)),!this.initialRender)return;const o=await i;if(o===Xa&&ku.delete(t),t===this.getIconSource().url){if(V2(o)){this.svg=o;return}switch(o){case Xa:case rs:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=n==null?void 0:n.mutator)==null||e.call(n,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ve.styles=[X,B2];u([q()],ve.prototype,"svg",2);u([g({reflect:!0})],ve.prototype,"name",2);u([g()],ve.prototype,"src",2);u([g()],ve.prototype,"label",2);u([g({reflect:!0})],ve.prototype,"library",2);u([I("label")],ve.prototype,"handleLabelChange",1);u([I(["name","src","library"])],ve.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=e=>e??Ce;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i=xa(class extends _a{constructor(e){if(super(e),e.type!==kr.PROPERTY&&e.type!==kr.ATTRIBUTE&&e.type!==kr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!s0(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Rt||t===Ce)return t;const r=e.element,n=e.name;if(e.type===kr.PROPERTY){if(t===r[n])return Rt}else if(e.type===kr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(n))return Rt}else if(e.type===kr.ATTRIBUTE&&r.getAttribute(n)===t+"")return Rt;return U2(e),t}});var Ge=class extends V{constructor(){super(...arguments),this.formControlController=new an(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new wt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return O`
      <div
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${G({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${B(this.value)}
            .indeterminate=${$i(this.indeterminate)}
            .checked=${$i(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?O`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?O`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ge.styles=[X,Di,O2];Ge.dependencies={"sl-icon":ve};u([R('input[type="checkbox"]')],Ge.prototype,"input",2);u([q()],Ge.prototype,"hasFocus",2);u([g()],Ge.prototype,"title",2);u([g()],Ge.prototype,"name",2);u([g()],Ge.prototype,"value",2);u([g({reflect:!0})],Ge.prototype,"size",2);u([g({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],Ge.prototype,"checked",2);u([g({type:Boolean,reflect:!0})],Ge.prototype,"indeterminate",2);u([Ni("checked")],Ge.prototype,"defaultChecked",2);u([g({reflect:!0})],Ge.prototype,"form",2);u([g({type:Boolean,reflect:!0})],Ge.prototype,"required",2);u([g({attribute:"help-text"})],Ge.prototype,"helpText",2);u([I("disabled",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleDisabledChange",1);u([I(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ge.prototype,"handleStateChange",1);var W2=W`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,ka=class extends V{constructor(){super(...arguments),this.localize=new de(this)}render(){return O`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ka.styles=[X,W2];/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lm(e,t,r){return e?t(e):r==null?void 0:r(e)}var De=class xd extends V{constructor(){super(...arguments),this.localize=new de(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await We(this.childrenContainer);const{keyframes:t,options:r}=$e(this,"tree-item.collapse",{dir:this.localize.dir()});await Re(this.childrenContainer,Gl(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&xd.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await We(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:r}=$e(this,"tree-item.expand",{dir:this.localize.dir()});await Re(this.childrenContainer,Gl(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>xd.isTreeItem(r)&&(t||!r.disabled)):[]}render(){const t=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return O`
      <div
        part="base"
        class="${G({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${G({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${lm(this.loading,()=>O` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${lm(this.selectable,()=>O`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${$i(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};De.styles=[X,T2];De.dependencies={"sl-checkbox":Ge,"sl-icon":ve,"sl-spinner":ka};u([q()],De.prototype,"indeterminate",2);u([q()],De.prototype,"isLeaf",2);u([q()],De.prototype,"loading",2);u([q()],De.prototype,"selectable",2);u([g({type:Boolean,reflect:!0})],De.prototype,"expanded",2);u([g({type:Boolean,reflect:!0})],De.prototype,"selected",2);u([g({type:Boolean,reflect:!0})],De.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],De.prototype,"lazy",2);u([R("slot:not([name])")],De.prototype,"defaultSlot",2);u([R("slot[name=children]")],De.prototype,"childrenSlot",2);u([R(".tree-item__item")],De.prototype,"itemElement",2);u([R(".tree-item__children")],De.prototype,"childrenContainer",2);u([R(".tree-item__expand-button slot")],De.prototype,"expandButtonSlot",2);u([I("loading",{waitUntilFirstUpdate:!0})],De.prototype,"handleLoadingChange",1);u([I("disabled")],De.prototype,"handleDisabledChange",1);u([I("selected")],De.prototype,"handleSelectedChange",1);u([I("expanded",{waitUntilFirstUpdate:!0})],De.prototype,"handleExpandedChange",1);u([I("expanded",{waitUntilFirstUpdate:!0})],De.prototype,"handleExpandAnimation",1);u([I("lazy",{waitUntilFirstUpdate:!0})],De.prototype,"handleLazyChange",1);var Cs=De;pe("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});pe("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function He(e,t,r){const n=i=>Object.is(i,-0)?0:i;return e<t?n(t):e>r?n(r):n(e)}function cm(e,t=!1){function r(o){const s=o.getChildrenItems({includeDisabled:!1});if(s.length){const l=s.every(c=>c.selected),a=s.every(c=>!c.selected&&!c.indeterminate);o.selected=l,o.indeterminate=!l&&!a}}function n(o){const s=o.parentElement;Cs.isTreeItem(s)&&(r(s),n(s))}function i(o){for(const s of o.getChildrenItems())s.selected=t?o.selected||s.selected:!s.disabled&&o.selected,i(s);t&&r(o)}i(e),n(e)}var Mi=class extends V{constructor(){super(),this.selection="single",this.localize=new de(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`),n=this.getExpandButtonIcon(t);n&&(r===null?e.append(n):r.hasAttribute("data-default")&&r.replaceWith(n))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(Cs.isTreeItem),n=[...t.removedNodes].filter(Cs.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&n.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Cs.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const n=r.cloneNode(!0);return[n,...n.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),n.setAttribute("data-default",""),n.slot=`${e}-icon`,n}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),cm(e);else if(this.selection==="single"||e.isLeaf){const n=this.getAllTreeItems();for(const i of n)i.selected=i===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(n=>!t.includes(n)))&&Promise.all(r.map(n=>n.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(i=>{var o;return["input","textarea"].includes((o=i==null?void 0:i.tagName)==null?void 0:o.toLowerCase())}))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",n=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const i=t.findIndex(a=>a.matches(":focus")),o=t[i],s=a=>{const c=t[He(a,0,t.length-1)];this.focusItem(c)},l=a=>{o.expanded=a};e.key==="ArrowDown"?s(i+1):e.key==="ArrowUp"?s(i-1):r&&e.key==="ArrowRight"||n&&e.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?s(i+1):l(!0):r&&e.key==="ArrowLeft"||n&&e.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?s(i-1):l(!1):e.key==="Home"?s(0):e.key==="End"?s(t.length-1):(e.key==="Enter"||e.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),n=e.composedPath().some(i=>{var o;return(o=i==null?void 0:i.classList)==null?void 0:o.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(n?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>cm(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var n;if(r.disabled)return!1;const i=(n=r.parentElement)==null?void 0:n.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||t.has(i))&&t.add(r),!t.has(r)})}render(){return O`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Mi.styles=[X,z2];u([R("slot:not([name])")],Mi.prototype,"defaultSlot",2);u([R("slot[name=expand-icon]")],Mi.prototype,"expandedIconSlot",2);u([R("slot[name=collapse-icon]")],Mi.prototype,"collapsedIconSlot",2);u([g()],Mi.prototype,"selection",2);u([I("selection")],Mi.prototype,"handleSelectionChange",1);Mi.define("sl-tree");Cs.define("sl-tree-item");var K2=W`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Y2=0,Ca=class extends V{constructor(){super(...arguments),this.attrId=++Y2,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return O`
      <slot
        part="base"
        class=${G({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Ca.styles=[X,K2];u([g({reflect:!0})],Ca.prototype,"name",2);u([g({type:Boolean,reflect:!0})],Ca.prototype,"active",2);u([I("active")],Ca.prototype,"handleActiveChange",1);Ca.define("sl-tab-panel");var X2=W`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,G2=W`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a0=Symbol.for(""),q2=e=>{if((e==null?void 0:e.r)===a0)return e==null?void 0:e._$litStatic$},ql=(e,...t)=>({_$litStatic$:t.reduce((r,n,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[i+1],e[0]),r:a0}),um=new Map,Q2=e=>(t,...r)=>{const n=r.length;let i,o;const s=[],l=[];let a,c=0,d=!1;for(;c<n;){for(a=t[c];c<n&&(o=r[c],(i=q2(o))!==void 0);)a+=i+t[++c],d=!0;c!==n&&l.push(o),s.push(a),c++}if(c===n&&s.push(t[n]),d){const f=s.join("$$lit$$");(t=um.get(f))===void 0&&(s.raw=s,um.set(f,t=s)),r=l}return e(t,...r)},Ss=Q2(O);var qe=class extends V{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?ql`a`:ql`button`;return Ss`
      <${t}
        part="base"
        class=${G({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${B(e?void 0:this.disabled)}
        type=${B(e?void 0:"button")}
        href=${B(e?this.href:void 0)}
        target=${B(e?this.target:void 0)}
        download=${B(e?this.download:void 0)}
        rel=${B(e&&this.target?"noreferrer noopener":void 0)}
        role=${B(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${B(this.name)}
          library=${B(this.library)}
          src=${B(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};qe.styles=[X,G2];qe.dependencies={"sl-icon":ve};u([R(".icon-button")],qe.prototype,"button",2);u([q()],qe.prototype,"hasFocus",2);u([g()],qe.prototype,"name",2);u([g()],qe.prototype,"library",2);u([g()],qe.prototype,"src",2);u([g()],qe.prototype,"href",2);u([g()],qe.prototype,"target",2);u([g()],qe.prototype,"download",2);u([g()],qe.prototype,"label",2);u([g({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);var Zn=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return O`
      <span
        part="base"
        class=${G({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?O`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Zn.styles=[X,X2];Zn.dependencies={"sl-icon-button":qe};u([g({reflect:!0})],Zn.prototype,"variant",2);u([g({reflect:!0})],Zn.prototype,"size",2);u([g({type:Boolean,reflect:!0})],Zn.prototype,"pill",2);u([g({type:Boolean})],Zn.prototype,"removable",2);Zn.define("sl-tag");var Z2=W`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,fe=class extends V{constructor(){super(...arguments),this.formControlController=new an(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new wt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,n="preserve"){const i=t??this.input.selectionStart,o=r??this.input.selectionEnd;this.input.setRangeText(e,i,o,n),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return O`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${G({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${B(this.name)}
              .value=${$i(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${B(this.placeholder)}
              rows=${B(this.rows)}
              minlength=${B(this.minlength)}
              maxlength=${B(this.maxlength)}
              autocapitalize=${B(this.autocapitalize)}
              autocorrect=${B(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${B(this.spellcheck)}
              enterkeyhint=${B(this.enterkeyhint)}
              inputmode=${B(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};fe.styles=[X,Di,Z2];u([R(".textarea__control")],fe.prototype,"input",2);u([q()],fe.prototype,"hasFocus",2);u([g()],fe.prototype,"title",2);u([g()],fe.prototype,"name",2);u([g()],fe.prototype,"value",2);u([g({reflect:!0})],fe.prototype,"size",2);u([g({type:Boolean,reflect:!0})],fe.prototype,"filled",2);u([g()],fe.prototype,"label",2);u([g({attribute:"help-text"})],fe.prototype,"helpText",2);u([g()],fe.prototype,"placeholder",2);u([g({type:Number})],fe.prototype,"rows",2);u([g()],fe.prototype,"resize",2);u([g({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],fe.prototype,"readonly",2);u([g({reflect:!0})],fe.prototype,"form",2);u([g({type:Boolean,reflect:!0})],fe.prototype,"required",2);u([g({type:Number})],fe.prototype,"minlength",2);u([g({type:Number})],fe.prototype,"maxlength",2);u([g()],fe.prototype,"autocapitalize",2);u([g()],fe.prototype,"autocorrect",2);u([g()],fe.prototype,"autocomplete",2);u([g({type:Boolean})],fe.prototype,"autofocus",2);u([g()],fe.prototype,"enterkeyhint",2);u([g({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],fe.prototype,"spellcheck",2);u([g()],fe.prototype,"inputmode",2);u([Ni()],fe.prototype,"defaultValue",2);u([I("disabled",{waitUntilFirstUpdate:!0})],fe.prototype,"handleDisabledChange",1);u([I("rows",{waitUntilFirstUpdate:!0})],fe.prototype,"handleRowsChange",1);u([I("value",{waitUntilFirstUpdate:!0})],fe.prototype,"handleValueChange",1);fe.define("sl-textarea");var J2=W`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,e_=0,Pr=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.attrId=++e_,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,O`
      <div
        part="base"
        class=${G({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?O`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Pr.styles=[X,J2];Pr.dependencies={"sl-icon-button":qe};u([R(".tab")],Pr.prototype,"tab",2);u([g({reflect:!0})],Pr.prototype,"panel",2);u([g({type:Boolean,reflect:!0})],Pr.prototype,"active",2);u([g({type:Boolean})],Pr.prototype,"closable",2);u([g({type:Boolean,reflect:!0})],Pr.prototype,"disabled",2);u([I("active")],Pr.prototype,"handleActiveChange",1);u([I("disabled")],Pr.prototype,"handleDisabledChange",1);Pr.define("sl-tab");var t_=W`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function r_(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var _d=new Set;function n_(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function i_(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function $s(e){if(_d.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=n_()+i_();document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Es(e){_d.delete(e),_d.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function kd(e,t,r="vertical",n="smooth"){const i=r_(e,t),o=i.top+t.scrollTop,s=i.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,c=t.scrollTop,d=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<l?t.scrollTo({left:s,behavior:n}):s+e.clientWidth>a&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:n})),(r==="vertical"||r==="both")&&(o<c?t.scrollTo({top:o,behavior:n}):o+e.clientHeight>d&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:n}))}var Bt=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,n)=>{var i;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),n.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(s=>s.matches(":focus")),o=this.localize.dir()==="rtl";if((i==null?void 0:i.tagName.toLowerCase())==="sl-tab"){let s=this.tabs.indexOf(i);e.key==="Home"?s=0:e.key==="End"?s=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?s--:(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&s++,s<0&&(s=this.tabs.length-1),s>this.tabs.length-1&&(s=0),this.tabs[s].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[s],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&kd(this.tabs[s],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=sn({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(n=>n.active=n===this.activeTab),this.panels.forEach(n=>{var i;return n.active=n.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&kd(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,n=this.localize.dir()==="rtl",i=this.getAllTabs(),s=i.slice(0,i.indexOf(e)).reduce((l,a)=>({left:l.left+a.clientWidth,top:l.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=n?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${s.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return O`
      <div
        part="base"
        class=${G({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?O`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?O`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Bt.styles=[X,t_];Bt.dependencies={"sl-icon-button":qe};u([R(".tab-group")],Bt.prototype,"tabGroup",2);u([R(".tab-group__body")],Bt.prototype,"body",2);u([R(".tab-group__nav")],Bt.prototype,"nav",2);u([R(".tab-group__indicator")],Bt.prototype,"indicator",2);u([q()],Bt.prototype,"hasScrollControls",2);u([g()],Bt.prototype,"placement",2);u([g()],Bt.prototype,"activation",2);u([g({attribute:"no-scroll-controls",type:Boolean})],Bt.prototype,"noScrollControls",2);u([I("noScrollControls",{waitUntilFirstUpdate:!0})],Bt.prototype,"updateScrollControls",1);u([I("placement",{waitUntilFirstUpdate:!0})],Bt.prototype,"syncIndicator",1);Bt.define("sl-tab-group");ka.define("sl-spinner");var o_=W`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function As(e,t){function r(i){const o=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,l=o.left+s.scrollX,a=o.top+s.scrollY,c=i.pageX-l,d=i.pageY-a;t!=null&&t.onMove&&t.onMove(c,d)}function n(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",n),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",n),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}var Vt=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),As(this,{onMove:(r,n)=>{let i=this.vertical?n:r;this.primary==="end"&&(i=this.size-i),this.snap&&this.snap.split(" ").forEach(s=>{let l;s.endsWith("%")?l=this.size*(parseFloat(s)/100):l=parseFloat(s),t&&!this.vertical&&(l=this.size-l),i>=l-this.snapThreshold&&i<=l+this.snapThreshold&&(i=l)}),this.position=He(this.pixelsToPercentage(i),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=He(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",n=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${n} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${n}`:r&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${n}`:this.style[e]=`${n} var(--divider-width) ${i}`,this.style[t]="",O`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${B(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Vt.styles=[X,o_];u([R(".divider")],Vt.prototype,"divider",2);u([g({type:Number,reflect:!0})],Vt.prototype,"position",2);u([g({attribute:"position-in-pixels",type:Number})],Vt.prototype,"positionInPixels",2);u([g({type:Boolean,reflect:!0})],Vt.prototype,"vertical",2);u([g({type:Boolean,reflect:!0})],Vt.prototype,"disabled",2);u([g()],Vt.prototype,"primary",2);u([g()],Vt.prototype,"snap",2);u([g({type:Number,attribute:"snap-threshold"})],Vt.prototype,"snapThreshold",2);u([I("position")],Vt.prototype,"handlePositionChange",1);u([I("positionInPixels")],Vt.prototype,"handlePositionInPixelsChange",1);u([I("vertical")],Vt.prototype,"handleVerticalChange",1);Vt.define("sl-split-panel");var s_=W`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,mt=class extends V{constructor(){super(...arguments),this.formControlController=new an(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new wt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return O`
      <div
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${G({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${B(this.value)}
            .checked=${$i(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};mt.styles=[X,Di,s_];u([R('input[type="checkbox"]')],mt.prototype,"input",2);u([q()],mt.prototype,"hasFocus",2);u([g()],mt.prototype,"title",2);u([g()],mt.prototype,"name",2);u([g()],mt.prototype,"value",2);u([g({reflect:!0})],mt.prototype,"size",2);u([g({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],mt.prototype,"checked",2);u([Ni("checked")],mt.prototype,"defaultChecked",2);u([g({reflect:!0})],mt.prototype,"form",2);u([g({type:Boolean,reflect:!0})],mt.prototype,"required",2);u([g({attribute:"help-text"})],mt.prototype,"helpText",2);u([I("checked",{waitUntilFirstUpdate:!0})],mt.prototype,"handleCheckedChange",1);u([I("disabled",{waitUntilFirstUpdate:!0})],mt.prototype,"handleDisabledChange",1);mt.define("sl-switch");var a_=W`
  :host {
    display: contents;
  }
`,Ic=class extends V{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return O` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ic.styles=[X,a_];u([g({type:Boolean,reflect:!0})],Ic.prototype,"disabled",2);u([I("disabled",{waitUntilFirstUpdate:!0})],Ic.prototype,"handleDisabledChange",1);Ic.define("sl-resize-observer");var l_=W`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Cd=class extends _a{constructor(t){if(super(t),this.it=Ce,t.type!==kr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Ce||t==null)return this._t=void 0,this.it=t;if(t===Rt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Cd.directiveName="unsafeHTML",Cd.resultType=1;const zl=xa(Cd);var se=class extends V{constructor(){super(...arguments),this.formControlController=new an(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new wt(this,"help-text","label"),this.localize=new de(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>O`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,r=t.closest(".select__clear")!==null,n=t.closest("sl-icon-button")!==null;if(!(r||n)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.getAllOptions(),o=i.indexOf(this.currentOption);let s=Math.max(0,o);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(s=o+1,s>i.length-1&&(s=0)):e.key==="ArrowUp"?(s=o-1,s<0&&(s=i.length-1)):e.key==="Home"?s=0:e.key==="End"&&(s=i.length-1),this.setCurrentOption(i[s])}if(e.key.length===1||e.key==="Backspace"){const i=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const o of i)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(n=>n instanceof Element&&n.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),n=this.value;r&&!r.disabled&&(this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],r=[];customElements.get("sl-option")?(e.forEach(n=>r.push(n.value)),this.setSelectedOptions(e.filter(n=>t.includes(n.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(n=>n.selected=!1),r.length&&r.forEach(n=>n.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r,n;this.selectedOptions=this.getAllOptions().filter(i=>i.selected),this.multiple?(this.value=this.selectedOptions.map(i=>i.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(n=(r=this.selectedOptions[0])==null?void 0:r.getTextLabel())!=null?n:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(e,t);return O`<div @sl-remove=${n=>this.handleTagRemove(n,e)}>
          ${typeof r=="string"?zl(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return O`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return O``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await We(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=$e(this,"select.show",{dir:this.localize.dir()});await Re(this.popup.popup,e,t),this.currentOption&&kd(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await We(this);const{keyframes:e,options:t}=$e(this,"select.hide",{dir:this.localize.dir()});await Re(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,bt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,bt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value.length===0;return O`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${G({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?O`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${i?O`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};se.styles=[X,Di,l_];se.dependencies={"sl-icon":ve,"sl-popup":he,"sl-tag":Zn};u([R(".select")],se.prototype,"popup",2);u([R(".select__combobox")],se.prototype,"combobox",2);u([R(".select__display-input")],se.prototype,"displayInput",2);u([R(".select__value-input")],se.prototype,"valueInput",2);u([R(".select__listbox")],se.prototype,"listbox",2);u([q()],se.prototype,"hasFocus",2);u([q()],se.prototype,"displayLabel",2);u([q()],se.prototype,"currentOption",2);u([q()],se.prototype,"selectedOptions",2);u([g()],se.prototype,"name",2);u([g({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],se.prototype,"value",2);u([Ni()],se.prototype,"defaultValue",2);u([g({reflect:!0})],se.prototype,"size",2);u([g()],se.prototype,"placeholder",2);u([g({type:Boolean,reflect:!0})],se.prototype,"multiple",2);u([g({attribute:"max-options-visible",type:Number})],se.prototype,"maxOptionsVisible",2);u([g({type:Boolean,reflect:!0})],se.prototype,"disabled",2);u([g({type:Boolean})],se.prototype,"clearable",2);u([g({type:Boolean,reflect:!0})],se.prototype,"open",2);u([g({type:Boolean})],se.prototype,"hoist",2);u([g({type:Boolean,reflect:!0})],se.prototype,"filled",2);u([g({type:Boolean,reflect:!0})],se.prototype,"pill",2);u([g()],se.prototype,"label",2);u([g({reflect:!0})],se.prototype,"placement",2);u([g({attribute:"help-text"})],se.prototype,"helpText",2);u([g({reflect:!0})],se.prototype,"form",2);u([g({type:Boolean,reflect:!0})],se.prototype,"required",2);u([g()],se.prototype,"getTag",2);u([I("disabled",{waitUntilFirstUpdate:!0})],se.prototype,"handleDisabledChange",1);u([I("value",{waitUntilFirstUpdate:!0})],se.prototype,"handleValueChange",1);u([I("open",{waitUntilFirstUpdate:!0})],se.prototype,"handleOpenChange",1);pe("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});pe("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});se.define("sl-select");var c_=W`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,sh=class extends V{constructor(){super(...arguments),this.effect="none"}render(){return O`
      <div
        part="base"
        class=${G({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};sh.styles=[X,c_];u([g()],sh.prototype,"effect",2);sh.define("sl-skeleton");var u_=W`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,Oe=class extends V{constructor(){super(...arguments),this.formControlController=new an(this),this.hasSlotController=new wt(this,"help-text","label"),this.localize=new de(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,n=getComputedStyle(this.input).getPropertyValue("--thumb-size"),i=this.localize.dir()==="rtl",o=t*e;if(i){const s=`${t-o}px + ${e} * ${n}`;this.output.style.translate=`calc((${s} - ${r/2}px - ${n} / 2))`}else{const s=`${o}px - ${e} * ${n}`;this.output.style.translate=`calc(${s} - ${r/2}px + ${n} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return O`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${G({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${B(this.name)}
              ?disabled=${this.disabled}
              min=${B(this.min)}
              max=${B(this.max)}
              step=${B(this.step)}
              .value=${$i(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?O`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Oe.styles=[X,Di,u_];u([R(".range__control")],Oe.prototype,"input",2);u([R(".range__tooltip")],Oe.prototype,"output",2);u([q()],Oe.prototype,"hasFocus",2);u([q()],Oe.prototype,"hasTooltip",2);u([g()],Oe.prototype,"title",2);u([g()],Oe.prototype,"name",2);u([g({type:Number})],Oe.prototype,"value",2);u([g()],Oe.prototype,"label",2);u([g({attribute:"help-text"})],Oe.prototype,"helpText",2);u([g({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);u([g({type:Number})],Oe.prototype,"min",2);u([g({type:Number})],Oe.prototype,"max",2);u([g({type:Number})],Oe.prototype,"step",2);u([g()],Oe.prototype,"tooltip",2);u([g({attribute:!1})],Oe.prototype,"tooltipFormatter",2);u([g({reflect:!0})],Oe.prototype,"form",2);u([Ni()],Oe.prototype,"defaultValue",2);u([Zf({passive:!0})],Oe.prototype,"handleThumbDragStart",1);u([I("value",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleValueChange",1);u([I("disabled",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleDisabledChange",1);u([I("hasTooltip",{waitUntilFirstUpdate:!0})],Oe.prototype,"syncRange",1);Oe.define("sl-range");var d_=W`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l0="important",f_=" !"+l0,Ct=xa(class extends _a{constructor(e){var t;if(super(e),e.type!==kr.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const n=e[r];return n==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?r.removeProperty(n):r[n]=null);for(const n in t){const i=t[n];if(i!=null){this.ft.add(n);const o=typeof i=="string"&&i.endsWith(f_);n.includes("-")||o?r.setProperty(n,o?i.slice(0,-11):i,o?l0:""):r[n]=i}}return Rt}});var gt=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:n,width:i}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((n-e)/i*this.max,this.precision):this.roundToPrecision((e-r)/i*this.max,this.precision);return He(o,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",n=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const i=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-i),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const i=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+i),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==n&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,O`
      <div
        part="base"
        class=${G({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(n=>r>n&&r<n+1?O`
                <span
                  class=${G({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===n+1})}
                  role="presentation"
                >
                  <div
                    style=${Ct({clipPath:e?`inset(0 ${(r-n)*100}% 0 0)`:`inset(0 0 0 ${(r-n)*100}%)`})}
                  >
                    ${zl(this.getSymbol(n+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Ct({clipPath:e?`inset(0 0 0 ${100-(r-n)*100}%)`:`inset(0 ${100-(r-n)*100}% 0 0)`})}
                  >
                    ${zl(this.getSymbol(n+1))}
                  </div>
                </span>
              `:O`
              <span
                class=${G({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===n+1,"rating__symbol--active":r>=n+1})}
                role="presentation"
              >
                ${zl(this.getSymbol(n+1))}
              </span>
            `)}
        </span>
      </div>
    `}};gt.styles=[X,d_];gt.dependencies={"sl-icon":ve};u([R(".rating")],gt.prototype,"rating",2);u([q()],gt.prototype,"hoverValue",2);u([q()],gt.prototype,"isHovering",2);u([g()],gt.prototype,"label",2);u([g({type:Number})],gt.prototype,"value",2);u([g({type:Number})],gt.prototype,"max",2);u([g({type:Number})],gt.prototype,"precision",2);u([g({type:Boolean,reflect:!0})],gt.prototype,"readonly",2);u([g({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);u([g()],gt.prototype,"getSymbol",2);u([Zf({passive:!0})],gt.prototype,"handleTouchMove",1);u([I("hoverValue")],gt.prototype,"handleHoverValueChange",1);u([I("isHovering")],gt.prototype,"handleIsHoveringChange",1);gt.define("sl-rating");var h_=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Jn=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:n,value:i}=h_.find(o=>Math.abs(r)<o.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/i),n,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;n==="minute"?o=Ga("second"):n==="hour"?o=Ga("minute"):n==="day"?o=Ga("hour"):o=Ga("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return O` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};u([q()],Jn.prototype,"isoTime",2);u([q()],Jn.prototype,"relativeTime",2);u([q()],Jn.prototype,"titleTime",2);u([g()],Jn.prototype,"date",2);u([g()],Jn.prototype,"format",2);u([g()],Jn.prototype,"numeric",2);u([g({type:Boolean})],Jn.prototype,"sync",2);function Ga(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}Jn.define("sl-relative-time");var c0=W`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button[checked]]) {
    z-index: 2;
  }
`,p_=W`
  ${c0}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,gr=class extends V{constructor(){super(...arguments),this.hasSlotController=new wt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return Ss`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${G({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${B(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};gr.styles=[X,p_];u([R(".button")],gr.prototype,"input",2);u([R(".hidden-input")],gr.prototype,"hiddenInput",2);u([q()],gr.prototype,"hasFocus",2);u([g({type:Boolean,reflect:!0})],gr.prototype,"checked",2);u([g()],gr.prototype,"value",2);u([g({type:Boolean,reflect:!0})],gr.prototype,"disabled",2);u([g({reflect:!0})],gr.prototype,"size",2);u([g({type:Boolean,reflect:!0})],gr.prototype,"pill",2);u([I("disabled",{waitUntilFirstUpdate:!0})],gr.prototype,"handleDisabledChange",1);gr.define("sl-radio-button");var m_=W`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,g_=W`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,ji=class extends V{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=ns(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=ns(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=ns(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=ns(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),n=ns(t);n&&(n.toggleAttribute("data-sl-button-group__button",!0),n.toggleAttribute("data-sl-button-group__button--first",r===0),n.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<e.length-1),n.toggleAttribute("data-sl-button-group__button--last",r===e.length-1),n.toggleAttribute("data-sl-button-group__button--radio",n.tagName.toLowerCase()==="sl-radio-button"))})}render(){return O`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};ji.styles=[X,g_];u([R("slot")],ji.prototype,"defaultSlot",2);u([q()],ji.prototype,"disableRole",2);u([g()],ji.prototype,"label",2);function ns(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var ct=class extends V{constructor(){super(...arguments),this.formControlController=new an(this),this.hasSlotController=new wt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?hx:e?fx:Tc}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),n=this.value;t.disabled||(this.value=t.value,r.forEach(i=>i.checked=i===t),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(l=>!l.disabled),n=(t=r.find(l=>l.checked))!=null?t:r[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,o=this.value;let s=r.indexOf(n)+i;s<0&&(s=r.length-1),s>r.length-1&&(s=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=r[s].value,r[s].checked=!0,this.hasButtonGroup?r[s].shadowRoot.querySelector("button").focus():(r[s].tabIndex=0,r[s].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(n=>n.checked)||e[0];r&&r.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async n=>{await n.updateComplete,n.checked=n.value===this.value,n.size=this.size})),this.hasButtonGroup=r.some(n=>n.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(n=>n.checked))if(this.hasButtonGroup){const n=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");n&&(n.tabIndex=0)}else r[0].tabIndex=0;if(this.hasButtonGroup){const n=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");n&&(n.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,i=O`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return O`
      <fieldset
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":n})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?O`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${i}
                </sl-button-group>
              `:i}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};ct.styles=[X,Di,m_];ct.dependencies={"sl-button-group":ji};u([R("slot:not([name])")],ct.prototype,"defaultSlot",2);u([R(".radio-group__validation-input")],ct.prototype,"validationInput",2);u([q()],ct.prototype,"hasButtonGroup",2);u([q()],ct.prototype,"errorMessage",2);u([q()],ct.prototype,"defaultValue",2);u([g()],ct.prototype,"label",2);u([g({attribute:"help-text"})],ct.prototype,"helpText",2);u([g()],ct.prototype,"name",2);u([g({reflect:!0})],ct.prototype,"value",2);u([g({reflect:!0})],ct.prototype,"size",2);u([g({reflect:!0})],ct.prototype,"form",2);u([g({type:Boolean,reflect:!0})],ct.prototype,"required",2);u([I("size",{waitUntilFirstUpdate:!0})],ct.prototype,"handleSizeChange",1);u([I("value")],ct.prototype,"handleValueChange",1);ct.define("sl-radio-group");var v_=W`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Bo=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,n=r-this.value/100*r;this.indicatorOffset=`${n}px`}}render(){return O`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Bo.styles=[X,v_];u([R(".progress-ring__indicator")],Bo.prototype,"indicator",2);u([q()],Bo.prototype,"indicatorOffset",2);u([g({type:Number,reflect:!0})],Bo.prototype,"value",2);u([g()],Bo.prototype,"label",2);Bo.define("sl-progress-ring");var y_=W`
  :host {
    display: inline-block;
  }
`;let u0=null,d0=class{};d0.render=function(e,t){u0(e,t)};self.QrCreator=d0;(function(e){function t(l,a,c,d){var f={},h=e(c,a);h.u(l),h.J(),d=d||0;var p=h.h(),v=h.h()+2*d;return f.text=l,f.level=a,f.version=c,f.O=v,f.a=function(x,S){return x-=d,S-=d,0>x||x>=p||0>S||S>=p?!1:h.a(x,S)},f}function r(l,a,c,d,f,h,p,v,x,S){function b(m,y,w,C,$,E,A){m?(l.lineTo(y+E,w+A),l.arcTo(y,w,C,$,h)):l.lineTo(y,w)}p?l.moveTo(a+h,c):l.moveTo(a,c),b(v,d,c,d,f,-h,0),b(x,d,f,a,f,0,-h),b(S,a,f,a,c,h,0),b(p,a,c,d,c,0,h)}function n(l,a,c,d,f,h,p,v,x,S){function b(m,y,w,C){l.moveTo(m+w,y),l.lineTo(m,y),l.lineTo(m,y+C),l.arcTo(m,y,m+w,y,h)}p&&b(a,c,h,h),v&&b(d,c,-h,h),x&&b(d,f,-h,-h),S&&b(a,f,h,-h)}function i(l,a){var c=a.fill;if(typeof c=="string")l.fillStyle=c;else{var d=c.type,f=c.colorStops;if(c=c.position.map(p=>Math.round(p*a.size)),d==="linear-gradient")var h=l.createLinearGradient.apply(l,c);else if(d==="radial-gradient")h=l.createRadialGradient.apply(l,c);else throw Error("Unsupported fill");f.forEach(([p,v])=>{h.addColorStop(p,v)}),l.fillStyle=h}}function o(l,a){e:{var c=a.text,d=a.v,f=a.N,h=a.K,p=a.P;for(f=Math.max(1,f||1),h=Math.min(40,h||40);f<=h;f+=1)try{var v=t(c,d,f,p);break e}catch{}v=void 0}if(!v)return null;for(c=l.getContext("2d"),a.background&&(c.fillStyle=a.background,c.fillRect(a.left,a.top,a.size,a.size)),d=v.O,h=a.size/d,c.beginPath(),p=0;p<d;p+=1)for(f=0;f<d;f+=1){var x=c,S=a.left+f*h,b=a.top+p*h,m=p,y=f,w=v.a,C=S+h,$=b+h,E=m-1,A=m+1,T=y-1,z=y+1,N=Math.floor(Math.min(.5,Math.max(0,a.R))*h),D=w(m,y),Y=w(E,T),Z=w(E,y);E=w(E,z);var re=w(m,z);z=w(A,z),y=w(A,y),A=w(A,T),m=w(m,T),S=Math.round(S),b=Math.round(b),C=Math.round(C),$=Math.round($),D?r(x,S,b,C,$,N,!Z&&!m,!Z&&!re,!y&&!re,!y&&!m):n(x,S,b,C,$,N,Z&&m&&Y,Z&&re&&E,y&&re&&z,y&&m&&A)}return i(c,a),c.fill(),l}var s={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};u0=function(l,a){var c={};Object.assign(c,s,l),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,a instanceof HTMLCanvasElement?((a.width!==c.size||a.height!==c.size)&&(a.width=c.size,a.height=c.size),a.getContext("2d").clearRect(0,0,a.width,a.height),o(a,c)):(l=document.createElement("canvas"),l.width=c.size,l.height=c.size,c=o(l,c),a.appendChild(c))}})(function(){function e(a){var c=r.s(a);return{S:function(){return 4},b:function(){return c.length},write:function(d){for(var f=0;f<c.length;f+=1)d.put(c[f],8)}}}function t(){var a=[],c=0,d={B:function(){return a},c:function(f){return(a[Math.floor(f/8)]>>>7-f%8&1)==1},put:function(f,h){for(var p=0;p<h;p+=1)d.m((f>>>h-p-1&1)==1)},f:function(){return c},m:function(f){var h=Math.floor(c/8);a.length<=h&&a.push(0),f&&(a[h]|=128>>>c%8),c+=1}};return d}function r(a,c){function d(m,y){for(var w=-1;7>=w;w+=1)if(!(-1>=m+w||v<=m+w))for(var C=-1;7>=C;C+=1)-1>=y+C||v<=y+C||(p[m+w][y+C]=0<=w&&6>=w&&(C==0||C==6)||0<=C&&6>=C&&(w==0||w==6)||2<=w&&4>=w&&2<=C&&4>=C)}function f(m,y){for(var w=v=4*a+17,C=Array(w),$=0;$<w;$+=1){C[$]=Array(w);for(var E=0;E<w;E+=1)C[$][E]=null}for(p=C,d(0,0),d(v-7,0),d(0,v-7),w=o.G(a),C=0;C<w.length;C+=1)for($=0;$<w.length;$+=1){E=w[C];var A=w[$];if(p[E][A]==null)for(var T=-2;2>=T;T+=1)for(var z=-2;2>=z;z+=1)p[E+T][A+z]=T==-2||T==2||z==-2||z==2||T==0&&z==0}for(w=8;w<v-8;w+=1)p[w][6]==null&&(p[w][6]=w%2==0);for(w=8;w<v-8;w+=1)p[6][w]==null&&(p[6][w]=w%2==0);for(w=o.w(h<<3|y),C=0;15>C;C+=1)$=!m&&(w>>C&1)==1,p[6>C?C:8>C?C+1:v-15+C][8]=$,p[8][8>C?v-C-1:9>C?15-C:14-C]=$;if(p[v-8][8]=!m,7<=a){for(w=o.A(a),C=0;18>C;C+=1)$=!m&&(w>>C&1)==1,p[Math.floor(C/3)][C%3+v-8-3]=$;for(C=0;18>C;C+=1)$=!m&&(w>>C&1)==1,p[C%3+v-8-3][Math.floor(C/3)]=$}if(x==null){for(m=l.I(a,h),w=t(),C=0;C<S.length;C+=1)$=S[C],w.put(4,4),w.put($.b(),o.f(4,a)),$.write(w);for(C=$=0;C<m.length;C+=1)$+=m[C].j;if(w.f()>8*$)throw Error("code length overflow. ("+w.f()+">"+8*$+")");for(w.f()+4<=8*$&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*$)&&(w.put(236,8),!(w.f()>=8*$));)w.put(17,8);var N=0;for($=C=0,E=Array(m.length),A=Array(m.length),T=0;T<m.length;T+=1){var D=m[T].j,Y=m[T].o-D;for(C=Math.max(C,D),$=Math.max($,Y),E[T]=Array(D),z=0;z<E[T].length;z+=1)E[T][z]=255&w.B()[z+N];for(N+=D,z=o.C(Y),D=n(E[T],z.b()-1).l(z),A[T]=Array(z.b()-1),z=0;z<A[T].length;z+=1)Y=z+D.b()-A[T].length,A[T][z]=0<=Y?D.c(Y):0}for(z=w=0;z<m.length;z+=1)w+=m[z].o;for(w=Array(w),z=N=0;z<C;z+=1)for(T=0;T<m.length;T+=1)z<E[T].length&&(w[N]=E[T][z],N+=1);for(z=0;z<$;z+=1)for(T=0;T<m.length;T+=1)z<A[T].length&&(w[N]=A[T][z],N+=1);x=w}for(m=x,w=-1,C=v-1,$=7,E=0,y=o.F(y),A=v-1;0<A;A-=2)for(A==6&&--A;;){for(T=0;2>T;T+=1)p[C][A-T]==null&&(z=!1,E<m.length&&(z=(m[E]>>>$&1)==1),y(C,A-T)&&(z=!z),p[C][A-T]=z,--$,$==-1&&(E+=1,$=7));if(C+=w,0>C||v<=C){C-=w,w=-w;break}}}var h=i[c],p=null,v=0,x=null,S=[],b={u:function(m){m=e(m),S.push(m),x=null},a:function(m,y){if(0>m||v<=m||0>y||v<=y)throw Error(m+","+y);return p[m][y]},h:function(){return v},J:function(){for(var m=0,y=0,w=0;8>w;w+=1){f(!0,w);var C=o.D(b);(w==0||m>C)&&(m=C,y=w)}f(!1,y)}};return b}function n(a,c){if(typeof a.length>"u")throw Error(a.length+"/"+c);var d=function(){for(var h=0;h<a.length&&a[h]==0;)h+=1;for(var p=Array(a.length-h+c),v=0;v<a.length-h;v+=1)p[v]=a[v+h];return p}(),f={c:function(h){return d[h]},b:function(){return d.length},multiply:function(h){for(var p=Array(f.b()+h.b()-1),v=0;v<f.b();v+=1)for(var x=0;x<h.b();x+=1)p[v+x]^=s.i(s.g(f.c(v))+s.g(h.c(x)));return n(p,0)},l:function(h){if(0>f.b()-h.b())return f;for(var p=s.g(f.c(0))-s.g(h.c(0)),v=Array(f.b()),x=0;x<f.b();x+=1)v[x]=f.c(x);for(x=0;x<h.b();x+=1)v[x]^=s.i(s.g(h.c(x))+p);return n(v,0).l(h)}};return f}r.s=function(a){for(var c=[],d=0;d<a.length;d++){var f=a.charCodeAt(d);128>f?c.push(f):2048>f?c.push(192|f>>6,128|f&63):55296>f||57344<=f?c.push(224|f>>12,128|f>>6&63,128|f&63):(d++,f=65536+((f&1023)<<10|a.charCodeAt(d)&1023),c.push(240|f>>18,128|f>>12&63,128|f>>6&63,128|f&63))}return c};var i={L:1,M:0,Q:3,H:2},o=function(){function a(f){for(var h=0;f!=0;)h+=1,f>>>=1;return h}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],d={w:function(f){for(var h=f<<10;0<=a(h)-a(1335);)h^=1335<<a(h)-a(1335);return(f<<10|h)^21522},A:function(f){for(var h=f<<12;0<=a(h)-a(7973);)h^=7973<<a(h)-a(7973);return f<<12|h},G:function(f){return c[f-1]},F:function(f){switch(f){case 0:return function(h,p){return(h+p)%2==0};case 1:return function(h){return h%2==0};case 2:return function(h,p){return p%3==0};case 3:return function(h,p){return(h+p)%3==0};case 4:return function(h,p){return(Math.floor(h/2)+Math.floor(p/3))%2==0};case 5:return function(h,p){return h*p%2+h*p%3==0};case 6:return function(h,p){return(h*p%2+h*p%3)%2==0};case 7:return function(h,p){return(h*p%3+(h+p)%2)%2==0};default:throw Error("bad maskPattern:"+f)}},C:function(f){for(var h=n([1],0),p=0;p<f;p+=1)h=h.multiply(n([1,s.i(p)],0));return h},f:function(f,h){if(f!=4||1>h||40<h)throw Error("mode: "+f+"; type: "+h);return 10>h?8:16},D:function(f){for(var h=f.h(),p=0,v=0;v<h;v+=1)for(var x=0;x<h;x+=1){for(var S=0,b=f.a(v,x),m=-1;1>=m;m+=1)if(!(0>v+m||h<=v+m))for(var y=-1;1>=y;y+=1)0>x+y||h<=x+y||(m!=0||y!=0)&&b==f.a(v+m,x+y)&&(S+=1);5<S&&(p+=3+S-5)}for(v=0;v<h-1;v+=1)for(x=0;x<h-1;x+=1)S=0,f.a(v,x)&&(S+=1),f.a(v+1,x)&&(S+=1),f.a(v,x+1)&&(S+=1),f.a(v+1,x+1)&&(S+=1),(S==0||S==4)&&(p+=3);for(v=0;v<h;v+=1)for(x=0;x<h-6;x+=1)f.a(v,x)&&!f.a(v,x+1)&&f.a(v,x+2)&&f.a(v,x+3)&&f.a(v,x+4)&&!f.a(v,x+5)&&f.a(v,x+6)&&(p+=40);for(x=0;x<h;x+=1)for(v=0;v<h-6;v+=1)f.a(v,x)&&!f.a(v+1,x)&&f.a(v+2,x)&&f.a(v+3,x)&&f.a(v+4,x)&&!f.a(v+5,x)&&f.a(v+6,x)&&(p+=40);for(x=S=0;x<h;x+=1)for(v=0;v<h;v+=1)f.a(v,x)&&(S+=1);return p+=Math.abs(100*S/h/h-50)/5*10}};return d}(),s=function(){for(var a=Array(256),c=Array(256),d=0;8>d;d+=1)a[d]=1<<d;for(d=8;256>d;d+=1)a[d]=a[d-4]^a[d-5]^a[d-6]^a[d-8];for(d=0;255>d;d+=1)c[a[d]]=d;return{g:function(f){if(1>f)throw Error("glog("+f+")");return c[f]},i:function(f){for(;0>f;)f+=255;for(;256<=f;)f-=255;return a[f]}}}(),l=function(){function a(f,h){switch(h){case i.L:return c[4*(f-1)];case i.M:return c[4*(f-1)+1];case i.Q:return c[4*(f-1)+2];case i.H:return c[4*(f-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],d={I:function(f,h){var p=a(f,h);if(typeof p>"u")throw Error("bad rs block @ typeNumber:"+f+"/errorCorrectLevel:"+h);f=p.length/3,h=[];for(var v=0;v<f;v+=1)for(var x=p[3*v],S=p[3*v+1],b=p[3*v+2],m=0;m<x;m+=1){var y=b,w={};w.o=S,w.j=y,h.push(w)}return h}};return d}();return r}());const b_=QrCreator;var vr=class extends V{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&b_.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return O`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${Ct({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};vr.styles=[X,y_];u([R("canvas")],vr.prototype,"canvas",2);u([g()],vr.prototype,"value",2);u([g()],vr.prototype,"label",2);u([g({type:Number})],vr.prototype,"size",2);u([g()],vr.prototype,"fill",2);u([g()],vr.prototype,"background",2);u([g({type:Number})],vr.prototype,"radius",2);u([g({attribute:"error-correction"})],vr.prototype,"errorCorrection",2);u([I(["background","errorCorrection","fill","radius","size","value"])],vr.prototype,"generate",1);vr.define("sl-qr-code");var w_=W`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Lr=class extends V{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return O`
      <span
        part="base"
        class=${G({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?O` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Lr.styles=[X,w_];Lr.dependencies={"sl-icon":ve};u([q()],Lr.prototype,"checked",2);u([q()],Lr.prototype,"hasFocus",2);u([g()],Lr.prototype,"value",2);u([g({reflect:!0})],Lr.prototype,"size",2);u([g({type:Boolean,reflect:!0})],Lr.prototype,"disabled",2);u([I("checked")],Lr.prototype,"handleCheckedChange",1);u([I("disabled",{waitUntilFirstUpdate:!0})],Lr.prototype,"handleDisabledChange",1);Lr.define("sl-radio");var x_=W`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,or=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(t+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(t+=r.textContent)}),t.trim()}render(){return O`
      <div
        part="base"
        class=${G({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};or.styles=[X,x_];or.dependencies={"sl-icon":ve};u([R(".option__label")],or.prototype,"defaultSlot",2);u([q()],or.prototype,"current",2);u([q()],or.prototype,"selected",2);u([q()],or.prototype,"hasHover",2);u([g({reflect:!0})],or.prototype,"value",2);u([g({type:Boolean,reflect:!0})],or.prototype,"disabled",2);u([I("disabled")],or.prototype,"handleDisabledChange",1);u([I("selected")],or.prototype,"handleSelectedChange",1);u([I("value")],or.prototype,"handleValueChange",1);or.define("sl-option");he.define("sl-popup");var __=W`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Sa=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return O`
      <div
        part="base"
        class=${G({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${B(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Ct({width:`${this.value}%`})}>
          ${this.indeterminate?"":O` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Sa.styles=[X,__];u([g({type:Number,reflect:!0})],Sa.prototype,"value",2);u([g({type:Boolean,reflect:!0})],Sa.prototype,"indeterminate",2);u([g()],Sa.prototype,"label",2);Sa.define("sl-progress-bar");var k_=W`
  :host {
    display: contents;
  }
`,Ir=class extends V{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return O` <slot></slot> `}};Ir.styles=[X,k_];u([g({reflect:!0})],Ir.prototype,"attr",2);u([g({attribute:"attr-old-value",type:Boolean,reflect:!0})],Ir.prototype,"attrOldValue",2);u([g({attribute:"char-data",type:Boolean,reflect:!0})],Ir.prototype,"charData",2);u([g({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Ir.prototype,"charDataOldValue",2);u([g({attribute:"child-list",type:Boolean,reflect:!0})],Ir.prototype,"childList",2);u([g({type:Boolean,reflect:!0})],Ir.prototype,"disabled",2);u([I("disabled")],Ir.prototype,"handleDisabledChange",1);u([I("attr",{waitUntilFirstUpdate:!0}),I("attr-old-value",{waitUntilFirstUpdate:!0}),I("char-data",{waitUntilFirstUpdate:!0}),I("char-data-old-value",{waitUntilFirstUpdate:!0}),I("childList",{waitUntilFirstUpdate:!0})],Ir.prototype,"handleChange",1);Ir.define("sl-mutation-observer");var C_=W`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs=(e,t)=>{var n;const r=e._$AN;if(r===void 0)return!1;for(const i of r)(n=i._$AO)==null||n.call(i,t,!1),zs(i,t);return!0},Ql=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},f0=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),E_(t)}};function S_(e){this._$AN!==void 0?(Ql(this),this._$AM=e,f0(this)):this._$AM=e}function $_(e,t=!1,r=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=r;o<n.length;o++)zs(n[o],!1),Ql(n[o]);else n!=null&&(zs(n,!1),Ql(n));else zs(this,e)}const E_=e=>{e.type==kr.CHILD&&(e._$AP??(e._$AP=$_),e._$AQ??(e._$AQ=S_))};let A_=class extends _a{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,n){super._$AT(t,r,n),f0(this),this.isConnected=t._$AU}_$AO(t,r=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),r&&(zs(this,t),Ql(this))}setValue(t){if(s0(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z_=()=>new T_;class T_{}const Cu=new WeakMap,O_=xa(class extends A_{render(e){return Ce}update(e,[t]){var n;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(n=e.options)==null?void 0:n.host,this.rt(this.ct=e.element)),Ce}rt(e){if(typeof this.Y=="function"){const t=this.ht??globalThis;let r=Cu.get(t);r===void 0&&(r=new WeakMap,Cu.set(t,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=Cu.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var P_=class{constructor(e,t,r){this.popupRef=z_(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=n=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${n.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${n.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=n=>{switch(n.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":n.target!==this.host&&(n.preventDefault(),n.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(n);break}},this.handleClick=n=>{var i;n.target===this.host?(n.preventDefault(),n.stopPropagation()):n.target instanceof Element&&(n.target.tagName==="sl-menu-item"||(i=n.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=n=>{n.relatedTarget&&n.relatedTarget instanceof Element&&this.host.contains(n.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=n=>{n.stopPropagation()},this.handlePopupReposition=()=>{const n=this.host.renderRoot.querySelector("slot[name='submenu']"),i=n==null?void 0:n.assignedElements({flatten:!0}).filter(d=>d.localName==="sl-menu")[0],o=this.localize.dir()==="rtl";if(!i)return;const{left:s,top:l,width:a,height:c}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?s+a:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?s+a:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${l+c}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=r}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const n of t.assignedElements())if(r=n.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let n=1;n!==r.length;++n)r[n].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),n=["padding-top","border-top-width","margin-top"].reduce((i,o)=>{var s;const l=(s=t.get(o))!=null?s:new CSSUnitValue(0,"px"),c=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return i-c.value},0);this.skidding=n}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?O`
      <sl-popup
        ${O_(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:O` <slot name="submenu" hidden></slot> `}},Ht=class extends V{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new de(this),this.hasSlotController=new wt(this,"submenu"),this.submenuController=new P_(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return P2(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return O`
      <div
        id="anchor"
        part="base"
        class=${G({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?O` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};Ht.styles=[X,C_];Ht.dependencies={"sl-icon":ve,"sl-popup":he,"sl-spinner":ka};u([R("slot:not([name])")],Ht.prototype,"defaultSlot",2);u([R(".menu-item")],Ht.prototype,"menuItem",2);u([g()],Ht.prototype,"type",2);u([g({type:Boolean,reflect:!0})],Ht.prototype,"checked",2);u([g()],Ht.prototype,"value",2);u([g({type:Boolean,reflect:!0})],Ht.prototype,"loading",2);u([g({type:Boolean,reflect:!0})],Ht.prototype,"disabled",2);u([I("checked")],Ht.prototype,"handleCheckedChange",1);u([I("disabled")],Ht.prototype,"handleDisabledChange",1);u([I("type")],Ht.prototype,"handleTypeChange",1);Ht.define("sl-menu-item");var L_=W`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,te=class extends V{constructor(){super(...arguments),this.formControlController=new an(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new wt(this,"help-text","label"),this.localize=new de(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,n="preserve"){const i=t??this.input.selectionStart,o=r??this.input.selectionEnd;this.input.setRangeText(e,i,o,n),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return O`
      <div
        part="form-control"
        class=${G({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":n})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${G({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${B(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${B(this.placeholder)}
              minlength=${B(this.minlength)}
              maxlength=${B(this.maxlength)}
              min=${B(this.min)}
              max=${B(this.max)}
              step=${B(this.step)}
              .value=${$i(this.value)}
              autocapitalize=${B(this.autocapitalize)}
              autocomplete=${B(this.autocomplete)}
              autocorrect=${B(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${B(this.pattern)}
              enterkeyhint=${B(this.enterkeyhint)}
              inputmode=${B(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?O`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?O`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?O`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:O`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};te.styles=[X,Di,L_];te.dependencies={"sl-icon":ve};u([R(".input__control")],te.prototype,"input",2);u([q()],te.prototype,"hasFocus",2);u([g()],te.prototype,"title",2);u([g({reflect:!0})],te.prototype,"type",2);u([g()],te.prototype,"name",2);u([g()],te.prototype,"value",2);u([Ni()],te.prototype,"defaultValue",2);u([g({reflect:!0})],te.prototype,"size",2);u([g({type:Boolean,reflect:!0})],te.prototype,"filled",2);u([g({type:Boolean,reflect:!0})],te.prototype,"pill",2);u([g()],te.prototype,"label",2);u([g({attribute:"help-text"})],te.prototype,"helpText",2);u([g({type:Boolean})],te.prototype,"clearable",2);u([g({type:Boolean,reflect:!0})],te.prototype,"disabled",2);u([g()],te.prototype,"placeholder",2);u([g({type:Boolean,reflect:!0})],te.prototype,"readonly",2);u([g({attribute:"password-toggle",type:Boolean})],te.prototype,"passwordToggle",2);u([g({attribute:"password-visible",type:Boolean})],te.prototype,"passwordVisible",2);u([g({attribute:"no-spin-buttons",type:Boolean})],te.prototype,"noSpinButtons",2);u([g({reflect:!0})],te.prototype,"form",2);u([g({type:Boolean,reflect:!0})],te.prototype,"required",2);u([g()],te.prototype,"pattern",2);u([g({type:Number})],te.prototype,"minlength",2);u([g({type:Number})],te.prototype,"maxlength",2);u([g()],te.prototype,"min",2);u([g()],te.prototype,"max",2);u([g()],te.prototype,"step",2);u([g()],te.prototype,"autocapitalize",2);u([g()],te.prototype,"autocorrect",2);u([g()],te.prototype,"autocomplete",2);u([g({type:Boolean})],te.prototype,"autofocus",2);u([g()],te.prototype,"enterkeyhint",2);u([g({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],te.prototype,"spellcheck",2);u([g()],te.prototype,"inputmode",2);u([I("disabled",{waitUntilFirstUpdate:!0})],te.prototype,"handleDisabledChange",1);u([I("step",{waitUntilFirstUpdate:!0})],te.prototype,"handleStepChange",1);u([I("value",{waitUntilFirstUpdate:!0})],te.prototype,"handleValueChange",1);te.define("sl-input");var I_=W`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,ah=class extends V{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],r=e.composedPath().find(i=>{var o;return t.includes(((o=i==null?void 0:i.getAttribute)==null?void 0:o.call(i,"role"))||"")});if(!r)return;const n=r;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let n=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?n++:e.key==="ArrowUp"?n--:e.key==="Home"?n=0:e.key==="End"&&(n=t.length-1),n<0&&(n=t.length-1),n>t.length-1&&(n=0),this.setCurrentItem(t[n]),t[n].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return O`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ah.styles=[X,I_];u([R("slot")],ah.prototype,"defaultSlot",2);ah.define("sl-menu");var R_=W`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,h0=class extends V{render(){return O` <slot part="base" class="menu-label"></slot> `}};h0.styles=[X,R_];h0.define("sl-menu-label");var N_=W`
  :host {
    display: block;
  }
`,Su=new Map;function D_(e,t="cors"){const r=Su.get(e);if(r!==void 0)return Promise.resolve(r);const n=fetch(e,{mode:t}).then(async i=>{const o={ok:i.ok,status:i.status,html:await i.text()};return Su.set(e,o),o});return Su.set(e,n),n}var Vo=class extends V{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await D_(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return O`<slot></slot>`}};Vo.styles=[X,N_];u([g()],Vo.prototype,"src",2);u([g()],Vo.prototype,"mode",2);u([g({attribute:"allow-scripts",type:Boolean})],Vo.prototype,"allowScripts",2);u([I("src")],Vo.prototype,"handleSrcChange",1);Vo.define("sl-include");var M_=W`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Fi=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),As(this.base,{onMove:n=>{this.position=parseFloat(He(n/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const n=e.shiftKey?10:1;let i=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(i-=n),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(i+=n),e.key==="Home"&&(i=0),e.key==="End"&&(i=100),i=He(i,0,100),this.position=i}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return O`
      <div
        part="base"
        id="image-comparer"
        class=${G({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Ct({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Ct({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Fi.styles=[X,M_];Fi.scopedElement={"sl-icon":ve};u([R(".image-comparer")],Fi.prototype,"base",2);u([R(".image-comparer__handle")],Fi.prototype,"handle",2);u([g({type:Number,reflect:!0})],Fi.prototype,"position",2);u([I("position",{waitUntilFirstUpdate:!0})],Fi.prototype,"handlePositionChange",1);Fi.define("sl-image-comparer");ve.define("sl-icon");qe.define("sl-icon-button");var Rc=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,n=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),i=r[n]+this.unit,o=parseFloat((this.value/Math.pow(1e3,n)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};u([g({type:Number})],Rc.prototype,"value",2);u([g()],Rc.prototype,"unit",2);u([g()],Rc.prototype,"display",2);Rc.define("sl-format-bytes");var Ut=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return O`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};u([g()],Ut.prototype,"date",2);u([g()],Ut.prototype,"weekday",2);u([g()],Ut.prototype,"era",2);u([g()],Ut.prototype,"year",2);u([g()],Ut.prototype,"month",2);u([g()],Ut.prototype,"day",2);u([g()],Ut.prototype,"hour",2);u([g()],Ut.prototype,"minute",2);u([g()],Ut.prototype,"second",2);u([g({attribute:"time-zone-name"})],Ut.prototype,"timeZoneName",2);u([g({attribute:"time-zone"})],Ut.prototype,"timeZone",2);u([g({attribute:"hour-format"})],Ut.prototype,"hourFormat",2);Ut.define("sl-format-date");var yr=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};u([g({type:Number})],yr.prototype,"value",2);u([g()],yr.prototype,"type",2);u([g({attribute:"no-grouping",type:Boolean})],yr.prototype,"noGrouping",2);u([g()],yr.prototype,"currency",2);u([g({attribute:"currency-display"})],yr.prototype,"currencyDisplay",2);u([g({attribute:"minimum-integer-digits",type:Number})],yr.prototype,"minimumIntegerDigits",2);u([g({attribute:"minimum-fraction-digits",type:Number})],yr.prototype,"minimumFractionDigits",2);u([g({attribute:"maximum-fraction-digits",type:Number})],yr.prototype,"maximumFractionDigits",2);u([g({attribute:"minimum-significant-digits",type:Number})],yr.prototype,"minimumSignificantDigits",2);u([g({attribute:"maximum-significant-digits",type:Number})],yr.prototype,"maximumSignificantDigits",2);yr.define("sl-format-number");var j_=W`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Nc=class extends V{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Nc.styles=[X,j_];u([g({type:Boolean,reflect:!0})],Nc.prototype,"vertical",2);u([I("vertical")],Nc.prototype,"handleVerticalChange",1);Nc.define("sl-divider");var F_=W`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,dm=new WeakMap;function p0(e){let t=dm.get(e);return t||(t=window.getComputedStyle(e,null),dm.set(e,t)),t}function B_(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=p0(e);return t.visibility!=="hidden"&&t.display!=="none"}function V_(e){const t=p0(e),{overflowY:r,overflowX:n}=t;return r==="scroll"||n==="scroll"?!0:r!=="auto"||n!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&n==="auto"}function H_(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!B_(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:V_(e)}function U_(e){var t,r;const n=Sd(e),i=(t=n[0])!=null?t:null,o=(r=n[n.length-1])!=null?r:null;return{start:i,end:o}}function W_(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function Sd(e){const t=new WeakMap,r=[];function n(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!r.includes(i)&&H_(i)&&r.push(i),i instanceof HTMLSlotElement&&W_(i,e)&&i.assignedElements({flatten:!0}).forEach(o=>{n(o)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&n(i.shadowRoot)}for(const o of i.children)n(o)}return n(e),r.sort((i,o)=>{const s=Number(i.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-s})}function*lh(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*dx(lh(e.shadowRoot.activeElement))))}function K_(){return[...lh()].pop()}var is=[],m0=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=r=>{var n;if(r.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=K_();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;r.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=Sd(this.element);let s=o.findIndex(a=>a===i);this.previousFocus=this.currentFocus;const l=this.tabDirection==="forward"?1:-1;for(;;){s+l>=o.length?s=0:s+l<0?s=o.length-1:s+=l,this.previousFocus=this.currentFocus;const a=o[s];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;r.preventDefault(),this.currentFocus=a,(n=this.currentFocus)==null||n.focus({preventScroll:!1});const c=[...lh()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){is.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){is=is.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return is[is.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Sd(this.element);if(!this.element.matches(":focus-within")){const r=t[0],n=t[t.length-1],i=this.tabDirection==="forward"?r:n;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function fm(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Wt=class extends V{constructor(){super(...arguments),this.hasSlotController=new wt(this,"footer"),this.localize=new de(this),this.modal=new m0(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),$s(this)))}disconnectedCallback(){var e;super.disconnectedCallback(),Es(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=$e(this,"drawer.denyClose",{dir:this.localize.dir()});Re(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),$s(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([We(this.drawer),We(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=$e(this,`drawer.show${fm(this.placement)}`,{dir:this.localize.dir()}),r=$e(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Re(this.panel,t.keyframes,t.options),Re(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Es(this)),await Promise.all([We(this.drawer),We(this.overlay)]);const e=$e(this,`drawer.hide${fm(this.placement)}`,{dir:this.localize.dir()}),t=$e(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Re(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Re(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),$s(this)),this.open&&this.contained&&(this.modal.deactivate(),Es(this))}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}render(){return O`
      <div
        part="base"
        class=${G({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${B(this.noHeader?this.label:void 0)}
          aria-labelledby=${B(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":O`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Wt.styles=[X,F_];Wt.dependencies={"sl-icon-button":qe};u([R(".drawer")],Wt.prototype,"drawer",2);u([R(".drawer__panel")],Wt.prototype,"panel",2);u([R(".drawer__overlay")],Wt.prototype,"overlay",2);u([g({type:Boolean,reflect:!0})],Wt.prototype,"open",2);u([g({reflect:!0})],Wt.prototype,"label",2);u([g({reflect:!0})],Wt.prototype,"placement",2);u([g({type:Boolean,reflect:!0})],Wt.prototype,"contained",2);u([g({attribute:"no-header",type:Boolean,reflect:!0})],Wt.prototype,"noHeader",2);u([I("open",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleOpenChange",1);u([I("contained",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleNoModalChange",1);pe("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});pe("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});pe("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});pe("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});pe("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});pe("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});pe("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});pe("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});pe("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});pe("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});pe("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Wt.define("sl-drawer");var Y_=W`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,ut=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,n,i;const o=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(i=(n=document.activeElement)==null?void 0:n.shadowRoot)==null?void 0:i.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),n=r[0],i=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(n),n.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(n=>U_(n).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await We(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=$e(this,"dropdown.show",{dir:this.localize.dir()});await Re(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await We(this);const{keyframes:e,options:t}=$e(this,"dropdown.hide",{dir:this.localize.dir()});await Re(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return O`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${B(this.sync?this.sync:void 0)}
        class=${G({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};ut.styles=[X,Y_];ut.dependencies={"sl-popup":he};u([R(".dropdown")],ut.prototype,"popup",2);u([R(".dropdown__trigger")],ut.prototype,"trigger",2);u([R(".dropdown__panel")],ut.prototype,"panel",2);u([g({type:Boolean,reflect:!0})],ut.prototype,"open",2);u([g({reflect:!0})],ut.prototype,"placement",2);u([g({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);u([g({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ut.prototype,"stayOpenOnSelect",2);u([g({attribute:!1})],ut.prototype,"containingElement",2);u([g({type:Number})],ut.prototype,"distance",2);u([g({type:Number})],ut.prototype,"skidding",2);u([g({type:Boolean})],ut.prototype,"hoist",2);u([g({reflect:!0})],ut.prototype,"sync",2);u([I("open",{waitUntilFirstUpdate:!0})],ut.prototype,"handleOpenChange",1);pe("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});pe("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});ut.define("sl-dropdown");var X_=W`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,tt=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),r=this.from.includes("."),n=this.from.includes("[")&&this.from.includes("]");let i=this.from,o="";r?[i,o]=this.from.trim().split("."):n&&([i,o]=this.from.trim().replace(/\]$/,"").split("["));const s="getElementById"in t?t.getElementById(i):null;s?n?e=s.getAttribute(o)||"":r?e=s[o]||"":e=s.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),n=this.errorLabel||this.localize.term("error"),i=e==="success"?this.successIcon:this.errorIcon,o=$e(this,"copy.in",{dir:"ltr"}),s=$e(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?r:n,await this.copyIcon.animate(s.keyframes,s.options).finished,this.copyIcon.hidden=!0,this.status=e,i.hidden=!1,await i.animate(o.keyframes,o.options).finished,setTimeout(async()=>{await i.animate(s.keyframes,s.options).finished,i.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(o.keyframes,o.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return O`
      <sl-tooltip
        class=${G({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};tt.styles=[X,X_];tt.dependencies={"sl-icon":ve,"sl-tooltip":et};u([R('slot[name="copy-icon"]')],tt.prototype,"copyIcon",2);u([R('slot[name="success-icon"]')],tt.prototype,"successIcon",2);u([R('slot[name="error-icon"]')],tt.prototype,"errorIcon",2);u([R("sl-tooltip")],tt.prototype,"tooltip",2);u([q()],tt.prototype,"isCopying",2);u([q()],tt.prototype,"status",2);u([g()],tt.prototype,"value",2);u([g()],tt.prototype,"from",2);u([g({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);u([g({attribute:"copy-label"})],tt.prototype,"copyLabel",2);u([g({attribute:"success-label"})],tt.prototype,"successLabel",2);u([g({attribute:"error-label"})],tt.prototype,"errorLabel",2);u([g({attribute:"feedback-duration",type:Number})],tt.prototype,"feedbackDuration",2);u([g({attribute:"tooltip-placement"})],tt.prototype,"tooltipPlacement",2);u([g({type:Boolean})],tt.prototype,"hoist",2);pe("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});pe("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});tt.define("sl-copy-button");var G_=W`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,br=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await We(this.body);const{keyframes:t,options:r}=$e(this,"details.show",{dir:this.localize.dir()});await Re(this.body,Gl(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await We(this.body);const{keyframes:t,options:r}=$e(this,"details.hide",{dir:this.localize.dir()});await Re(this.body,Gl(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,bt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,bt(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return O`
      <details
        part="base"
        class=${G({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};br.styles=[X,G_];br.dependencies={"sl-icon":ve};u([R(".details")],br.prototype,"details",2);u([R(".details__header")],br.prototype,"header",2);u([R(".details__body")],br.prototype,"body",2);u([R(".details__expand-icon-slot")],br.prototype,"expandIconSlot",2);u([g({type:Boolean,reflect:!0})],br.prototype,"open",2);u([g()],br.prototype,"summary",2);u([g({type:Boolean,reflect:!0})],br.prototype,"disabled",2);u([I("open",{waitUntilFirstUpdate:!0})],br.prototype,"handleOpenChange",1);pe("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});pe("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});br.define("sl-details");var q_=W`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Rr=class extends V{constructor(){super(...arguments),this.hasSlotController=new wt(this,"footer"),this.localize=new de(this),this.modal=new m0(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),$s(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),Es(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=$e(this,"dialog.denyClose",{dir:this.localize.dir()});Re(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),$s(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([We(this.dialog),We(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=$e(this,"dialog.show",{dir:this.localize.dir()}),r=$e(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Re(this.panel,t.keyframes,t.options),Re(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([We(this.dialog),We(this.overlay)]);const e=$e(this,"dialog.hide",{dir:this.localize.dir()}),t=$e(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Re(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Re(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Es(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}render(){return O`
      <div
        part="base"
        class=${G({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${B(this.noHeader?this.label:void 0)}
          aria-labelledby=${B(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":O`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Rr.styles=[X,q_];Rr.dependencies={"sl-icon-button":qe};u([R(".dialog")],Rr.prototype,"dialog",2);u([R(".dialog__panel")],Rr.prototype,"panel",2);u([R(".dialog__overlay")],Rr.prototype,"overlay",2);u([g({type:Boolean,reflect:!0})],Rr.prototype,"open",2);u([g({reflect:!0})],Rr.prototype,"label",2);u([g({attribute:"no-header",type:Boolean,reflect:!0})],Rr.prototype,"noHeader",2);u([I("open",{waitUntilFirstUpdate:!0})],Rr.prototype,"handleOpenChange",1);pe("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});pe("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});pe("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});pe("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});pe("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Rr.define("sl-dialog");Ge.define("sl-checkbox");var Q_=W`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,me=class extends V{constructor(){super(...arguments),this.formControlController=new an(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new wt(this,"[default]","prefix","suffix"),this.localize=new de(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Tc}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?ql`a`:ql`button`;return Ss`
      <${t}
        part="base"
        class=${G({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${B(e?void 0:this.disabled)}
        type=${B(e?void 0:this.type)}
        title=${this.title}
        name=${B(e?void 0:this.name)}
        value=${B(e?void 0:this.value)}
        href=${B(e?this.href:void 0)}
        target=${B(e?this.target:void 0)}
        download=${B(e?this.download:void 0)}
        rel=${B(e?this.rel:void 0)}
        role=${B(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Ss` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ss`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};me.styles=[X,c0];me.dependencies={"sl-icon":ve,"sl-spinner":ka};u([R(".button")],me.prototype,"button",2);u([q()],me.prototype,"hasFocus",2);u([q()],me.prototype,"invalid",2);u([g()],me.prototype,"title",2);u([g({reflect:!0})],me.prototype,"variant",2);u([g({reflect:!0})],me.prototype,"size",2);u([g({type:Boolean,reflect:!0})],me.prototype,"caret",2);u([g({type:Boolean,reflect:!0})],me.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],me.prototype,"loading",2);u([g({type:Boolean,reflect:!0})],me.prototype,"outline",2);u([g({type:Boolean,reflect:!0})],me.prototype,"pill",2);u([g({type:Boolean,reflect:!0})],me.prototype,"circle",2);u([g()],me.prototype,"type",2);u([g()],me.prototype,"name",2);u([g()],me.prototype,"value",2);u([g()],me.prototype,"href",2);u([g()],me.prototype,"target",2);u([g()],me.prototype,"rel",2);u([g()],me.prototype,"download",2);u([g()],me.prototype,"form",2);u([g({attribute:"formaction"})],me.prototype,"formAction",2);u([g({attribute:"formenctype"})],me.prototype,"formEnctype",2);u([g({attribute:"formmethod"})],me.prototype,"formMethod",2);u([g({attribute:"formnovalidate",type:Boolean})],me.prototype,"formNoValidate",2);u([g({attribute:"formtarget"})],me.prototype,"formTarget",2);u([I("disabled",{waitUntilFirstUpdate:!0})],me.prototype,"handleDisabledChange",1);function st(e,t){Z_(e)&&(e="100%");const r=J_(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function qa(e){return Math.min(1,Math.max(0,e))}function Z_(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function J_(e){return typeof e=="string"&&e.indexOf("%")!==-1}function g0(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Qa(e){return Number(e)<=1?`${Number(e)*100}%`:e}function pi(e){return e.length===1?"0"+e:String(e)}function ek(e,t,r){return{r:st(e,255)*255,g:st(t,255)*255,b:st(r,255)*255}}function hm(e,t,r){e=st(e,255),t=st(t,255),r=st(r,255);const n=Math.max(e,t,r),i=Math.min(e,t,r);let o=0,s=0;const l=(n+i)/2;if(n===i)s=0,o=0;else{const a=n-i;switch(s=l>.5?a/(2-n-i):a/(n+i),n){case e:o=(t-r)/a+(t<r?6:0);break;case t:o=(r-e)/a+2;break;case r:o=(e-t)/a+4;break}o/=6}return{h:o,s,l}}function $u(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function tk(e,t,r){let n,i,o;if(e=st(e,360),t=st(t,100),r=st(r,100),t===0)i=r,o=r,n=r;else{const s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;n=$u(l,s,e+1/3),i=$u(l,s,e),o=$u(l,s,e-1/3)}return{r:n*255,g:i*255,b:o*255}}function pm(e,t,r){e=st(e,255),t=st(t,255),r=st(r,255);const n=Math.max(e,t,r),i=Math.min(e,t,r);let o=0;const s=n,l=n-i,a=n===0?0:l/n;if(n===i)o=0;else{switch(n){case e:o=(t-r)/l+(t<r?6:0);break;case t:o=(r-e)/l+2;break;case r:o=(e-t)/l+4;break}o/=6}return{h:o,s:a,v:s}}function rk(e,t,r){e=st(e,360)*6,t=st(t,100),r=st(r,100);const n=Math.floor(e),i=e-n,o=r*(1-t),s=r*(1-i*t),l=r*(1-(1-i)*t),a=n%6,c=[r,s,o,o,l,r][a],d=[l,r,r,s,o,o][a],f=[o,o,l,r,r,s][a];return{r:c*255,g:d*255,b:f*255}}function mm(e,t,r,n){const i=[pi(Math.round(e).toString(16)),pi(Math.round(t).toString(16)),pi(Math.round(r).toString(16))];return n&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function nk(e,t,r,n,i){const o=[pi(Math.round(e).toString(16)),pi(Math.round(t).toString(16)),pi(Math.round(r).toString(16)),pi(ik(n))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function ik(e){return Math.round(parseFloat(e)*255).toString(16)}function gm(e){return Pt(e)/255}function Pt(e){return parseInt(e,16)}function ok(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const $d={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function sk(e){let t={r:0,g:0,b:0},r=1,n=null,i=null,o=null,s=!1,l=!1;return typeof e=="string"&&(e=ck(e)),typeof e=="object"&&(Vr(e.r)&&Vr(e.g)&&Vr(e.b)?(t=ek(e.r,e.g,e.b),s=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Vr(e.h)&&Vr(e.s)&&Vr(e.v)?(n=Qa(e.s),i=Qa(e.v),t=rk(e.h,n,i),s=!0,l="hsv"):Vr(e.h)&&Vr(e.s)&&Vr(e.l)&&(n=Qa(e.s),o=Qa(e.l),t=tk(e.h,n,o),s=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=g0(r),{ok:s,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}const ak="[-\\+]?\\d+%?",lk="[-\\+]?\\d*\\.\\d+%?",$n="(?:"+lk+")|(?:"+ak+")",Eu="[\\s|\\(]+("+$n+")[,|\\s]+("+$n+")[,|\\s]+("+$n+")\\s*\\)?",Au="[\\s|\\(]+("+$n+")[,|\\s]+("+$n+")[,|\\s]+("+$n+")[,|\\s]+("+$n+")\\s*\\)?",lr={CSS_UNIT:new RegExp($n),rgb:new RegExp("rgb"+Eu),rgba:new RegExp("rgba"+Au),hsl:new RegExp("hsl"+Eu),hsla:new RegExp("hsla"+Au),hsv:new RegExp("hsv"+Eu),hsva:new RegExp("hsva"+Au),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ck(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if($d[e])e=$d[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=lr.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=lr.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=lr.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=lr.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=lr.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=lr.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=lr.hex8.exec(e),r?{r:Pt(r[1]),g:Pt(r[2]),b:Pt(r[3]),a:gm(r[4]),format:t?"name":"hex8"}:(r=lr.hex6.exec(e),r?{r:Pt(r[1]),g:Pt(r[2]),b:Pt(r[3]),format:t?"name":"hex"}:(r=lr.hex4.exec(e),r?{r:Pt(r[1]+r[1]),g:Pt(r[2]+r[2]),b:Pt(r[3]+r[3]),a:gm(r[4]+r[4]),format:t?"name":"hex8"}:(r=lr.hex3.exec(e),r?{r:Pt(r[1]+r[1]),g:Pt(r[2]+r[2]),b:Pt(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function Vr(e){return!!lr.CSS_UNIT.exec(String(e))}class Pe{constructor(t="",r={}){if(t instanceof Pe)return t;typeof t=="number"&&(t=ok(t)),this.originalInput=t;const n=sk(t);this.originalInput=t,this.r=n.r,this.g=n.g,this.b=n.b,this.a=n.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??n.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=n.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let r,n,i;const o=t.r/255,s=t.g/255,l=t.b/255;return o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),s<=.03928?n=s/12.92:n=Math.pow((s+.055)/1.055,2.4),l<=.03928?i=l/12.92:i=Math.pow((l+.055)/1.055,2.4),.2126*r+.7152*n+.0722*i}getAlpha(){return this.a}setAlpha(t){return this.a=g0(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=pm(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=pm(this.r,this.g,this.b),r=Math.round(t.h*360),n=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?`hsv(${r}, ${n}%, ${i}%)`:`hsva(${r}, ${n}%, ${i}%, ${this.roundA})`}toHsl(){const t=hm(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=hm(this.r,this.g,this.b),r=Math.round(t.h*360),n=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?`hsl(${r}, ${n}%, ${i}%)`:`hsla(${r}, ${n}%, ${i}%, ${this.roundA})`}toHex(t=!1){return mm(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return nk(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),r=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${t}, ${r}, ${n})`:`rgba(${t}, ${r}, ${n}, ${this.roundA})`}toPercentageRgb(){const t=r=>`${Math.round(st(r,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=r=>Math.round(st(r,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+mm(this.r,this.g,this.b,!1);for(const[r,n]of Object.entries($d))if(t===n)return r;return!1}toString(t){const r=!!t;t=t??this.format;let n=!1;const i=this.a<1&&this.a>=0;return!r&&i&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Pe(this.toString())}lighten(t=10){const r=this.toHsl();return r.l+=t/100,r.l=qa(r.l),new Pe(r)}brighten(t=10){const r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new Pe(r)}darken(t=10){const r=this.toHsl();return r.l-=t/100,r.l=qa(r.l),new Pe(r)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const r=this.toHsl();return r.s-=t/100,r.s=qa(r.s),new Pe(r)}saturate(t=10){const r=this.toHsl();return r.s+=t/100,r.s=qa(r.s),new Pe(r)}greyscale(){return this.desaturate(100)}spin(t){const r=this.toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,new Pe(r)}mix(t,r=50){const n=this.toRgb(),i=new Pe(t).toRgb(),o=r/100,s={r:(i.r-n.r)*o+n.r,g:(i.g-n.g)*o+n.g,b:(i.b-n.b)*o+n.b,a:(i.a-n.a)*o+n.a};return new Pe(s)}analogous(t=6,r=30){const n=this.toHsl(),i=360/r,o=[this];for(n.h=(n.h-(i*t>>1)+720)%360;--t;)n.h=(n.h+i)%360,o.push(new Pe(n));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new Pe(t)}monochromatic(t=6){const r=this.toHsv(),{h:n}=r,{s:i}=r;let{v:o}=r;const s=[],l=1/t;for(;t--;)s.push(new Pe({h:n,s:i,v:o})),o=(o+l)%1;return s}splitcomplement(){const t=this.toHsl(),{h:r}=t;return[this,new Pe({h:(r+72)%360,s:t.s,l:t.l}),new Pe({h:(r+216)%360,s:t.s,l:t.l})]}onBackground(t){const r=this.toRgb(),n=new Pe(t).toRgb(),i=r.a+n.a*(1-r.a);return new Pe({r:(r.r*r.a+n.r*n.a*(1-r.a))/i,g:(r.g*r.a+n.g*n.a*(1-r.a))/i,b:(r.b*r.a+n.b*n.a*(1-r.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const r=this.toHsl(),{h:n}=r,i=[this],o=360/t;for(let s=1;s<t;s++)i.push(new Pe({h:(n+s*o)%360,s:r.s,l:r.l}));return i}equals(t){return this.toRgbString()===new Pe(t).toRgbString()}}var vm="EyeDropper"in window,ae=class extends V{constructor(){super(),this.formControlController=new an(this),this.isSafeValue=!1,this.localize=new de(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();let i=this.value,o=this.value;r.focus(),e.preventDefault(),As(t,{onMove:s=>{this.alpha=He(s/n*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();let i=this.value,o=this.value;r.focus(),e.preventDefault(),As(t,{onMove:s=>{this.hue=He(s/n*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:n,height:i}=t.getBoundingClientRect();let o=this.value,s=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,As(t,{onMove:(l,a)=>{this.saturation=He(l/n*100,0,100),this.brightness=He(100-a/i*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=He(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=He(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=He(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=He(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=He(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=He(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=He(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=He(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new Pe(e);if(!t.isValid)return null;const r=t.toHsl(),n={h:r.h,s:r.s*100,l:r.l*100,a:r.a},i=t.toRgb(),o=t.toHexString(),s=t.toHex8String(),l=t.toHsv(),a={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:n.h,s:n.s,l:n.l,string:this.setLetterCase(`hsl(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%)`)},hsla:{h:n.h,s:n.s,l:n.l,a:n.a,string:this.setLetterCase(`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${n.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(s)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!vm)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,n=100){const i=new Pe(`hsva(${e}, ${t}%, ${r}%, ${n/100})`);return i.isValid?i.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(i=>i.trim()!==""),n=O`
      <div
        part="base"
        class=${G({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?O`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Ct({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${G({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Ct({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${B(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Ct({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${B(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?O`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Ct({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Ct({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${B(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Ct({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":O`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${vm?O`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${r.length>0?O`
              <div part="swatches" class="color-picker__swatches">
                ${r.map(i=>{const o=this.parseColor(i);return o?O`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${B(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${i}
                      @click=${()=>this.selectSwatch(i)}
                      @keydown=${s=>!this.disabled&&s.key==="Enter"&&this.setColor(o.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Ct({backgroundColor:o.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${i}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?n:O`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${G({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Ct({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${n}
      </sl-dropdown>
    `}};ae.styles=[X,Q_];ae.dependencies={"sl-button-group":ji,"sl-button":me,"sl-dropdown":ut,"sl-icon":ve,"sl-input":te,"sl-visually-hidden":Jf};u([R('[part~="base"]')],ae.prototype,"base",2);u([R('[part~="input"]')],ae.prototype,"input",2);u([R(".color-dropdown")],ae.prototype,"dropdown",2);u([R('[part~="preview"]')],ae.prototype,"previewButton",2);u([R('[part~="trigger"]')],ae.prototype,"trigger",2);u([q()],ae.prototype,"hasFocus",2);u([q()],ae.prototype,"isDraggingGridHandle",2);u([q()],ae.prototype,"isEmpty",2);u([q()],ae.prototype,"inputValue",2);u([q()],ae.prototype,"hue",2);u([q()],ae.prototype,"saturation",2);u([q()],ae.prototype,"brightness",2);u([q()],ae.prototype,"alpha",2);u([g()],ae.prototype,"value",2);u([Ni()],ae.prototype,"defaultValue",2);u([g()],ae.prototype,"label",2);u([g()],ae.prototype,"format",2);u([g({type:Boolean,reflect:!0})],ae.prototype,"inline",2);u([g({reflect:!0})],ae.prototype,"size",2);u([g({attribute:"no-format-toggle",type:Boolean})],ae.prototype,"noFormatToggle",2);u([g()],ae.prototype,"name",2);u([g({type:Boolean,reflect:!0})],ae.prototype,"disabled",2);u([g({type:Boolean})],ae.prototype,"hoist",2);u([g({type:Boolean})],ae.prototype,"opacity",2);u([g({type:Boolean})],ae.prototype,"uppercase",2);u([g()],ae.prototype,"swatches",2);u([g({reflect:!0})],ae.prototype,"form",2);u([g({type:Boolean,reflect:!0})],ae.prototype,"required",2);u([I("format",{waitUntilFirstUpdate:!0})],ae.prototype,"handleFormatChange",1);u([I("opacity",{waitUntilFirstUpdate:!0})],ae.prototype,"handleOpacityChange",1);u([I("value")],ae.prototype,"handleValueChange",1);ae.define("sl-color-picker");var uk=W`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,v0=class extends V{constructor(){super(...arguments),this.hasSlotController=new wt(this,"footer","header","image")}render(){return O`
      <div
        part="base"
        class=${G({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};v0.styles=[X,uk];v0.define("sl-card");var dk=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},fk=W`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*hk(e,t){if(e!==void 0){let r=0;for(const n of e)yield t(n,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*pk(e,t,r=1){const n=t===void 0?0:e;t??(t=e);for(let i=n;r>0?i<t:t<i;i+=r)yield i}var mk=(e,t)=>{let r=0;return function(...n){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...n)},t)}},ym=(e,t,r)=>{const n=e[t];e[t]=function(...i){n.call(this,...i),r.call(this,n,...i)}},gk="onscrollend"in window;if(!gk){const e=new Set,t=new WeakMap,r=i=>{for(const o of i.changedTouches)e.add(o.identifier)},n=i=>{for(const o of i.changedTouches)e.delete(o.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",n,!0),document.addEventListener("touchcancel",n,!0),ym(EventTarget.prototype,"addEventListener",function(i,o){if(o!=="scrollend")return;const s=mk(()=>{e.size?s():this.dispatchEvent(new Event("scrollend"))},100);i.call(this,"scroll",s,{passive:!0}),t.set(this,s)}),ym(EventTarget.prototype,"removeEventListener",function(i,o){if(o!=="scrollend")return;const s=t.get(this);s&&i.call(this,"scroll",s,{passive:!0})})}var Me=class extends V{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new dk(this,()=>this.next()),this.localize=new de(this),this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const n=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:r,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==n||r!==i)&&(e.scrollTo({left:n,top:i,behavior:vd()?"auto":"smooth"}),await bt(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(n=>this.isCarouselItem(n)&&!n.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:r,loop:n}=this,i=n?e/r:(e-t)/r+1;return Math.ceil(i)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",n=t.closest('[part~="pagination-item"]')!==null,i=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",o=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),o&&this.previous(),i&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),n&&this.updateComplete.then(()=>{var s;const l=(s=this.shadowRoot)==null?void 0:s.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const n of t){const i=n.target;i.toggleAttribute("inert",!n.isIntersecting),i.classList.toggle("--in-view",n.isIntersecting),i.setAttribute("aria-hidden",n.isIntersecting?"false":"true")}const r=t.find(n=>n.isIntersecting);if(r)if(this.loop&&r.target.hasAttribute("data-clone")){const n=Number(r.target.getAttribute("data-clone"));this.goToSlide(n,"instant")}else{const i=this.getSlides().indexOf(r.target);this.activeSlide=Math.ceil(i/this.slidesPerMove)*this.slidesPerMove}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1)}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.synchronizeSlides(),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,r=e.slice(-t),n=e.slice(0,t);r.reverse().forEach((i,o)=>{const s=i.cloneNode(!0);s.setAttribute("data-clone",String(e.length-o-1)),this.prepend(s)}),n.forEach((i,o)=>{const s=i.cloneNode(!0);s.setAttribute("data-clone",String(o)),this.append(s)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((r,n)=>{(n+t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:n}=this,i=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!i.length)return;const s=n?(e+i.length)%i.length:He(e,0,i.length-1);this.activeSlide=s;const l=He(e+(n?r:0),0,o.length-1),a=o[l];this.scrollToSlide(a,vd()?"auto":t)}scrollToSlide(e,t="smooth"){const r=this.scrollContainer,n=r.getBoundingClientRect(),i=e.getBoundingClientRect(),o=i.left-n.left,s=i.top-n.top;r.scrollTo({left:o+r.scrollLeft,top:s+r.scrollTop,behavior:t})}render(){const{slidesPerMove:e,scrolling:t}=this,r=this.getPageCount(),n=this.getCurrentPage(),i=this.canScrollPrev(),o=this.canScrollNext(),s=this.localize.dir()==="ltr";return O`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${G({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?O`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${G({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!i})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?"false":"true"}"
                  @click=${i?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${s?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${G({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!o})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${s?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?O`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${hk(pk(r),l=>{const a=l===n;return O`
                    <button
                      part="pagination-item ${a?"pagination-item--active":""}"
                      class="${G({"carousel__pagination-item":!0,"carousel__pagination-item--active":a})}"
                      role="tab"
                      aria-selected="${a?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,r)}"
                      tabindex=${a?"0":"-1"}
                      @click=${()=>this.goToSlide(l*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};Me.styles=[X,fk];Me.dependencies={"sl-icon":ve};u([g({type:Boolean,reflect:!0})],Me.prototype,"loop",2);u([g({type:Boolean,reflect:!0})],Me.prototype,"navigation",2);u([g({type:Boolean,reflect:!0})],Me.prototype,"pagination",2);u([g({type:Boolean,reflect:!0})],Me.prototype,"autoplay",2);u([g({type:Number,attribute:"autoplay-interval"})],Me.prototype,"autoplayInterval",2);u([g({type:Number,attribute:"slides-per-page"})],Me.prototype,"slidesPerPage",2);u([g({type:Number,attribute:"slides-per-move"})],Me.prototype,"slidesPerMove",2);u([g()],Me.prototype,"orientation",2);u([g({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Me.prototype,"mouseDragging",2);u([R(".carousel__slides")],Me.prototype,"scrollContainer",2);u([R(".carousel__pagination")],Me.prototype,"paginationContainer",2);u([q()],Me.prototype,"activeSlide",2);u([q()],Me.prototype,"scrolling",2);u([q()],Me.prototype,"dragging",2);u([Zf({passive:!0})],Me.prototype,"handleScroll",1);u([I("loop",{waitUntilFirstUpdate:!0}),I("slidesPerPage",{waitUntilFirstUpdate:!0})],Me.prototype,"initializeSlides",1);u([I("activeSlide")],Me.prototype,"handelSlideChange",1);u([I("slidesPerMove")],Me.prototype,"updateSlidesSnap",1);u([I("autoplay")],Me.prototype,"handleAutoplayChange",1);Me.define("sl-carousel");var vk=W`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,y0=class extends V{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return O` <slot></slot> `}};y0.styles=[X,vk];y0.define("sl-carousel-item");me.define("sl-button");ji.define("sl-button-group");var yk=W`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,$a=class extends V{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return O`
      <span
        part="base"
        class=${G({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};$a.styles=[X,yk];u([g({reflect:!0})],$a.prototype,"variant",2);u([g({type:Boolean,reflect:!0})],$a.prototype,"pill",2);u([g({type:Boolean,reflect:!0})],$a.prototype,"pulse",2);$a.define("sl-badge");var bk=W`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ho=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const n=t.querySelector('[slot="separator"]');n===null?t.append(this.getSeparator()):n.hasAttribute("data-default")&&n.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),O`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ho.styles=[X,bk];Ho.dependencies={"sl-icon":ve};u([R("slot")],Ho.prototype,"defaultSlot",2);u([R('slot[name="separator"]')],Ho.prototype,"separatorSlot",2);u([g()],Ho.prototype,"label",2);Ho.define("sl-breadcrumb");var wk=W`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,Ea=class extends V{constructor(){super(...arguments),this.hasSlotController=new wt(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return O`
      <div
        part="base"
        class=${G({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?O`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${B(this.target?this.target:void 0)}"
                rel=${B(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:O`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Ea.styles=[X,wk];u([g()],Ea.prototype,"href",2);u([g()],Ea.prototype,"target",2);u([g()],Ea.prototype,"rel",2);Ea.define("sl-breadcrumb-item");var xk=W`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,wr=class extends V{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return O`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?O`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};wr.styles=[X,xk];wr.dependencies={"sl-icon":ve};u([R(".animated-image__animated")],wr.prototype,"animatedImage",2);u([q()],wr.prototype,"frozenFrame",2);u([q()],wr.prototype,"isLoaded",2);u([g()],wr.prototype,"src",2);u([g()],wr.prototype,"alt",2);u([g({type:Boolean,reflect:!0})],wr.prototype,"play",2);u([I("play",{waitUntilFirstUpdate:!0})],wr.prototype,"handlePlayChange",1);u([I("src")],wr.prototype,"handleSrcChange",1);wr.define("sl-animated-image");var _k=W`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Nr=class extends V{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=O`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=O``;return this.initials?t=O`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=O`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,O`
      <div
        part="base"
        class=${G({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};Nr.styles=[X,_k];Nr.dependencies={"sl-icon":ve};u([q()],Nr.prototype,"hasError",2);u([g()],Nr.prototype,"image",2);u([g()],Nr.prototype,"label",2);u([g()],Nr.prototype,"initials",2);u([g()],Nr.prototype,"loading",2);u([g({reflect:!0})],Nr.prototype,"shape",2);u([I("image")],Nr.prototype,"handleImageChange",1);Nr.define("sl-avatar");var kk=W`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Wi=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Dr=class extends V{constructor(){super(...arguments),this.hasSlotController=new wt(this,"icon","suffix"),this.localize=new de(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await We(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=$e(this,"alert.show",{dir:this.localize.dir()});await Re(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await We(this.base);const{keyframes:e,options:t}=$e(this,"alert.hide",{dir:this.localize.dir()});await Re(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}async toast(){return new Promise(e=>{Wi.parentElement===null&&document.body.append(Wi),Wi.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Wi.removeChild(this),e(),Wi.querySelector("sl-alert")===null&&Wi.remove()},{once:!0})})}render(){return O`
      <div
        part="base"
        class=${G({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?O`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};Dr.styles=[X,kk];Dr.dependencies={"sl-icon-button":qe};u([R('[part~="base"]')],Dr.prototype,"base",2);u([g({type:Boolean,reflect:!0})],Dr.prototype,"open",2);u([g({type:Boolean,reflect:!0})],Dr.prototype,"closable",2);u([g({reflect:!0})],Dr.prototype,"variant",2);u([g({type:Number})],Dr.prototype,"duration",2);u([I("open",{waitUntilFirstUpdate:!0})],Dr.prototype,"handleOpenChange",1);u([I("duration")],Dr.prototype,"handleDurationChange",1);pe("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});pe("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Dr.define("sl-alert");const Ck=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Sk=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],$k=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Ek=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Ak=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],zk=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Tk=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ok=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Pk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Lk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ik=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Rk=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Nk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Dk=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Mk=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],jk=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Fk=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Bk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Vk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Hk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Uk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Wk=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Kk=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Yk=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Xk=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Gk=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],qk=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Qk=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Zk=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Jk=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],eC=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],tC=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],rC=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],nC=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],iC=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],oC=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sC=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],aC=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],lC=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],cC=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],uC=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],dC=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fC=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hC=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pC=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],mC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],gC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],vC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],yC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],bC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],wC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],xC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],_C=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],kC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],CC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],SC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],$C=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],EC=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],AC=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],zC=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],TC=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],OC=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],PC=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],LC=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],IC=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],RC=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],NC=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],DC=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],MC=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],jC=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],FC=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],BC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],VC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],HC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],UC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],WC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],KC=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],YC=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],XC=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],GC=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],qC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],QC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],ZC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],JC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],e5=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],t5=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],r5=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],n5=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],i5=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],o5=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],s5=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],a5=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],l5=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],c5=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],u5=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],d5=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],f5=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],h5=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],b0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},p5=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Dk,backInLeft:Mk,backInRight:jk,backInUp:Fk,backOutDown:Bk,backOutLeft:Vk,backOutRight:Hk,backOutUp:Uk,bounce:Ck,bounceIn:Wk,bounceInDown:Kk,bounceInLeft:Yk,bounceInRight:Xk,bounceInUp:Gk,bounceOut:qk,bounceOutDown:Qk,bounceOutLeft:Zk,bounceOutRight:Jk,bounceOutUp:eC,easings:b0,fadeIn:tC,fadeInBottomLeft:rC,fadeInBottomRight:nC,fadeInDown:iC,fadeInDownBig:oC,fadeInLeft:sC,fadeInLeftBig:aC,fadeInRight:lC,fadeInRightBig:cC,fadeInTopLeft:uC,fadeInTopRight:dC,fadeInUp:fC,fadeInUpBig:hC,fadeOut:pC,fadeOutBottomLeft:mC,fadeOutBottomRight:gC,fadeOutDown:vC,fadeOutDownBig:yC,fadeOutLeft:bC,fadeOutLeftBig:wC,fadeOutRight:xC,fadeOutRightBig:_C,fadeOutTopLeft:kC,fadeOutTopRight:CC,fadeOutUp:SC,fadeOutUpBig:$C,flash:Sk,flip:EC,flipInX:AC,flipInY:zC,flipOutX:TC,flipOutY:OC,headShake:$k,heartBeat:Ek,hinge:e5,jackInTheBox:t5,jello:Ak,lightSpeedInLeft:PC,lightSpeedInRight:LC,lightSpeedOutLeft:IC,lightSpeedOutRight:RC,pulse:zk,rollIn:r5,rollOut:n5,rotateIn:NC,rotateInDownLeft:DC,rotateInDownRight:MC,rotateInUpLeft:jC,rotateInUpRight:FC,rotateOut:BC,rotateOutDownLeft:VC,rotateOutDownRight:HC,rotateOutUpLeft:UC,rotateOutUpRight:WC,rubberBand:Tk,shake:Ok,shakeX:Pk,shakeY:Lk,slideInDown:KC,slideInLeft:YC,slideInRight:XC,slideInUp:GC,slideOutDown:qC,slideOutLeft:QC,slideOutRight:ZC,slideOutUp:JC,swing:Ik,tada:Rk,wobble:Nk,zoomIn:i5,zoomInDown:o5,zoomInLeft:s5,zoomInRight:a5,zoomInUp:l5,zoomOut:c5,zoomOutDown:u5,zoomOutLeft:d5,zoomOutRight:f5,zoomOutUp:h5},Symbol.toStringTag,{value:"Module"}));var m5=W`
  :host {
    display: contents;
  }
`,rt=class extends V{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=b0[this.easing])!=null?e:this.easing,n=(t=this.keyframes)!=null?t:p5[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!n?!1:(this.destroyAnimation(),this.animation=o.animate(n,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return O` <slot @slotchange=${this.handleSlotChange}></slot> `}};rt.styles=[X,m5];u([Nx("slot")],rt.prototype,"defaultSlot",2);u([g()],rt.prototype,"name",2);u([g({type:Boolean,reflect:!0})],rt.prototype,"play",2);u([g({type:Number})],rt.prototype,"delay",2);u([g()],rt.prototype,"direction",2);u([g({type:Number})],rt.prototype,"duration",2);u([g()],rt.prototype,"easing",2);u([g({attribute:"end-delay",type:Number})],rt.prototype,"endDelay",2);u([g()],rt.prototype,"fill",2);u([g({type:Number})],rt.prototype,"iterations",2);u([g({attribute:"iteration-start",type:Number})],rt.prototype,"iterationStart",2);u([g({attribute:!1})],rt.prototype,"keyframes",2);u([g({attribute:"playback-rate",type:Number})],rt.prototype,"playbackRate",2);u([I(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],rt.prototype,"handleAnimationChange",1);u([I("play")],rt.prototype,"handlePlayChange",1);u([I("playbackRate")],rt.prototype,"handlePlaybackRateChange",1);rt.define("sl-animation");function Aa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var w0={exports:{}},Dc={},x0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),g5=Symbol.for("react.portal"),v5=Symbol.for("react.fragment"),y5=Symbol.for("react.strict_mode"),b5=Symbol.for("react.profiler"),w5=Symbol.for("react.provider"),x5=Symbol.for("react.context"),_5=Symbol.for("react.forward_ref"),k5=Symbol.for("react.suspense"),C5=Symbol.for("react.memo"),S5=Symbol.for("react.lazy"),bm=Symbol.iterator;function $5(e){return e===null||typeof e!="object"?null:(e=bm&&e[bm]||e["@@iterator"],typeof e=="function"?e:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k0=Object.assign,C0={};function Uo(e,t,r){this.props=e,this.context=t,this.refs=C0,this.updater=r||_0}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Uo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function S0(){}S0.prototype=Uo.prototype;function ch(e,t,r){this.props=e,this.context=t,this.refs=C0,this.updater=r||_0}var uh=ch.prototype=new S0;uh.constructor=ch;k0(uh,Uo.prototype);uh.isPureReactComponent=!0;var wm=Array.isArray,$0=Object.prototype.hasOwnProperty,dh={current:null},E0={key:!0,ref:!0,__self:!0,__source:!0};function A0(e,t,r){var n,i={},o=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)$0.call(t,n)&&!E0.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:za,type:e,key:o,ref:s,props:i,_owner:dh.current}}function E5(e,t){return{$$typeof:za,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fh(e){return typeof e=="object"&&e!==null&&e.$$typeof===za}function A5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var xm=/\/+/g;function zu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?A5(""+e.key):t.toString(36)}function Tl(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case za:case g5:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+zu(s,0):n,wm(i)?(r="",e!=null&&(r=e.replace(xm,"$&/")+"/"),Tl(i,t,r,"",function(c){return c})):i!=null&&(fh(i)&&(i=E5(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(xm,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",wm(e))for(var l=0;l<e.length;l++){o=e[l];var a=n+zu(o,l);s+=Tl(o,t,r,a,i)}else if(a=$5(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=n+zu(o,l++),s+=Tl(o,t,r,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Za(e,t,r){if(e==null)return e;var n=[],i=0;return Tl(e,n,"","",function(o){return t.call(r,o,i++)}),n}function z5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xt={current:null},Ol={transition:null},T5={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:dh};ie.Children={map:Za,forEach:function(e,t,r){Za(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Za(e,function(){t++}),t},toArray:function(e){return Za(e,function(t){return t})||[]},only:function(e){if(!fh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Uo;ie.Fragment=v5;ie.Profiler=b5;ie.PureComponent=ch;ie.StrictMode=y5;ie.Suspense=k5;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T5;ie.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=k0({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=dh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)$0.call(t,a)&&!E0.hasOwnProperty(a)&&(n[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)n.children=r;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:za,type:e.type,key:i,ref:o,props:n,_owner:s}};ie.createContext=function(e){return e={$$typeof:x5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:w5,_context:e},e.Consumer=e};ie.createElement=A0;ie.createFactory=function(e){var t=A0.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:_5,render:e}};ie.isValidElement=fh;ie.lazy=function(e){return{$$typeof:S5,_payload:{_status:-1,_result:e},_init:z5}};ie.memo=function(e,t){return{$$typeof:C5,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=Ol.transition;Ol.transition={};try{e()}finally{Ol.transition=t}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(e,t){return xt.current.useCallback(e,t)};ie.useContext=function(e){return xt.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return xt.current.useDeferredValue(e)};ie.useEffect=function(e,t){return xt.current.useEffect(e,t)};ie.useId=function(){return xt.current.useId()};ie.useImperativeHandle=function(e,t,r){return xt.current.useImperativeHandle(e,t,r)};ie.useInsertionEffect=function(e,t){return xt.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return xt.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return xt.current.useMemo(e,t)};ie.useReducer=function(e,t,r){return xt.current.useReducer(e,t,r)};ie.useRef=function(e){return xt.current.useRef(e)};ie.useState=function(e){return xt.current.useState(e)};ie.useSyncExternalStore=function(e,t,r){return xt.current.useSyncExternalStore(e,t,r)};ie.useTransition=function(){return xt.current.useTransition()};ie.version="18.2.0";x0.exports=ie;var _=x0.exports;const ot=Aa(_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O5=_,P5=Symbol.for("react.element"),L5=Symbol.for("react.fragment"),I5=Object.prototype.hasOwnProperty,R5=O5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N5={key:!0,ref:!0,__self:!0,__source:!0};function z0(e,t,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)I5.call(t,n)&&!N5.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:P5,type:e,key:o,ref:s,props:i,_owner:R5.current}}Dc.Fragment=L5;Dc.jsx=z0;Dc.jsxs=z0;w0.exports=Dc;var k=w0.exports,Ed={},T0={exports:{}},Kt={},O0={exports:{}},P0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,K){var H=L.length;L.push(K);e:for(;0<H;){var ne=H-1>>>1,ue=L[ne];if(0<i(ue,K))L[ne]=K,L[H]=ue,H=ne;else break e}}function r(L){return L.length===0?null:L[0]}function n(L){if(L.length===0)return null;var K=L[0],H=L.pop();if(H!==K){L[0]=H;e:for(var ne=0,ue=L.length,Ve=ue>>>1;ne<Ve;){var Ee=2*(ne+1)-1,Qe=L[Ee],nt=Ee+1,kt=L[nt];if(0>i(Qe,H))nt<ue&&0>i(kt,Qe)?(L[ne]=kt,L[nt]=H,ne=nt):(L[ne]=Qe,L[Ee]=H,ne=Ee);else if(nt<ue&&0>i(kt,H))L[ne]=kt,L[nt]=H,ne=nt;else break e}}return K}function i(L,K){var H=L.sortIndex-K.sortIndex;return H!==0?H:L.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],d=1,f=null,h=3,p=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var K=r(c);K!==null;){if(K.callback===null)n(c);else if(K.startTime<=L)n(c),K.sortIndex=K.expirationTime,t(a,K);else break;K=r(c)}}function w(L){if(x=!1,y(L),!v)if(r(a)!==null)v=!0,J(C);else{var K=r(c);K!==null&&oe(w,K.startTime-L)}}function C(L,K){v=!1,x&&(x=!1,b(A),A=-1),p=!0;var H=h;try{for(y(K),f=r(a);f!==null&&(!(f.expirationTime>K)||L&&!N());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var ue=ne(f.expirationTime<=K);K=e.unstable_now(),typeof ue=="function"?f.callback=ue:f===r(a)&&n(a),y(K)}else n(a);f=r(a)}if(f!==null)var Ve=!0;else{var Ee=r(c);Ee!==null&&oe(w,Ee.startTime-K),Ve=!1}return Ve}finally{f=null,h=H,p=!1}}var $=!1,E=null,A=-1,T=5,z=-1;function N(){return!(e.unstable_now()-z<T)}function D(){if(E!==null){var L=e.unstable_now();z=L;var K=!0;try{K=E(!0,L)}finally{K?Y():($=!1,E=null)}}else $=!1}var Y;if(typeof m=="function")Y=function(){m(D)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,re=Z.port2;Z.port1.onmessage=D,Y=function(){re.postMessage(null)}}else Y=function(){S(D,0)};function J(L){E=L,$||($=!0,Y())}function oe(L,K){A=S(function(){L(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||p||(v=!0,J(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(a)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var H=h;h=K;try{return L()}finally{h=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var H=h;h=L;try{return K()}finally{h=H}},e.unstable_scheduleCallback=function(L,K,H){var ne=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ne+H:ne):H=ne,L){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=H+ue,L={id:d++,callback:K,priorityLevel:L,startTime:H,expirationTime:ue,sortIndex:-1},H>ne?(L.sortIndex=H,t(c,L),r(a)===null&&L===r(c)&&(x?(b(A),A=-1):x=!0,oe(w,H-ne))):(L.sortIndex=ue,t(a,L),v||p||(v=!0,J(C))),L},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(L){var K=h;return function(){var H=h;h=K;try{return L.apply(this,arguments)}finally{h=H}}}})(P0);O0.exports=P0;var D5=O0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=_,jt=D5;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I0=new Set,Ys={};function Bi(e,t){$o(e,t),$o(e+"Capture",t)}function $o(e,t){for(Ys[e]=t,e=0;e<t.length;e++)I0.add(t[e])}var qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ad=Object.prototype.hasOwnProperty,M5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_m={},km={};function j5(e){return Ad.call(km,e)?!0:Ad.call(_m,e)?!1:M5.test(e)?km[e]=!0:(_m[e]=!0,!1)}function F5(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B5(e,t,r,n){if(t===null||typeof t>"u"||F5(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _t(e,t,r,n,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){lt[e]=new _t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];lt[t]=new _t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){lt[e]=new _t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){lt[e]=new _t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){lt[e]=new _t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){lt[e]=new _t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){lt[e]=new _t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){lt[e]=new _t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){lt[e]=new _t(e,5,!1,e.toLowerCase(),null,!1,!1)});var hh=/[\-:]([a-z])/g;function ph(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hh,ph);lt[t]=new _t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hh,ph);lt[t]=new _t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hh,ph);lt[t]=new _t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){lt[e]=new _t(e,1,!1,e.toLowerCase(),null,!1,!1)});lt.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){lt[e]=new _t(e,1,!1,e.toLowerCase(),null,!0,!0)});function mh(e,t,r,n){var i=lt.hasOwnProperty(t)?lt[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B5(t,r,i,n)&&(r=null),n||i===null?j5(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var cn=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),Zi=Symbol.for("react.portal"),Ji=Symbol.for("react.fragment"),gh=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),R0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),Od=Symbol.for("react.suspense_list"),yh=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),D0=Symbol.for("react.offscreen"),Cm=Symbol.iterator;function os(e){return e===null||typeof e!="object"?null:(e=Cm&&e[Cm]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,Tu;function gs(e){if(Tu===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Tu=t&&t[1]||""}return`
`+Tu+e}var Ou=!1;function Pu(e,t){if(!e||Ou)return"";Ou=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Ou=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?gs(e):""}function V5(e){switch(e.tag){case 5:return gs(e.type);case 16:return gs("Lazy");case 13:return gs("Suspense");case 19:return gs("SuspenseList");case 0:case 2:case 15:return e=Pu(e.type,!1),e;case 11:return e=Pu(e.type.render,!1),e;case 1:return e=Pu(e.type,!0),e;default:return""}}function Pd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ji:return"Fragment";case Zi:return"Portal";case zd:return"Profiler";case gh:return"StrictMode";case Td:return"Suspense";case Od:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case N0:return(e.displayName||"Context")+".Consumer";case R0:return(e._context.displayName||"Context")+".Provider";case vh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yh:return t=e.displayName||null,t!==null?t:Pd(e.type)||"Memo";case wn:t=e._payload,e=e._init;try{return Pd(e(t))}catch{}}return null}function H5(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pd(t);case 8:return t===gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function M0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function U5(e){var t=M0(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function el(e){e._valueTracker||(e._valueTracker=U5(e))}function j0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=M0(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Zl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ld(e,t){var r=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Sm(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Kn(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function F0(e,t){t=t.checked,t!=null&&mh(e,"checked",t,!1)}function Id(e,t){F0(e,t);var r=Kn(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rd(e,t.type,r):t.hasOwnProperty("defaultValue")&&Rd(e,t.type,Kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $m(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Rd(e,t,r){(t!=="number"||Zl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var vs=Array.isArray;function go(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Kn(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Em(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(P(92));if(vs(r)){if(1<r.length)throw Error(P(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Kn(r)}}function B0(e,t){var r=Kn(t.value),n=Kn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Am(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function V0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?V0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tl,H0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=tl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xs(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W5=["Webkit","ms","Moz","O"];Object.keys(Ts).forEach(function(e){W5.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ts[t]=Ts[e]})});function U0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ts.hasOwnProperty(e)&&Ts[e]?(""+t).trim():t+"px"}function W0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=U0(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var K5=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Md(e,t){if(t){if(K5[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function jd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fd=null;function bh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bd=null,vo=null,yo=null;function zm(e){if(e=Pa(e)){if(typeof Bd!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Vc(t),Bd(e.stateNode,e.type,t))}}function K0(e){vo?yo?yo.push(e):yo=[e]:vo=e}function Y0(){if(vo){var e=vo,t=yo;if(yo=vo=null,zm(e),t)for(e=0;e<t.length;e++)zm(t[e])}}function X0(e,t){return e(t)}function G0(){}var Lu=!1;function q0(e,t,r){if(Lu)return e(t,r);Lu=!0;try{return X0(e,t,r)}finally{Lu=!1,(vo!==null||yo!==null)&&(G0(),Y0())}}function Gs(e,t){var r=e.stateNode;if(r===null)return null;var n=Vc(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(P(231,t,typeof r));return r}var Vd=!1;if(qr)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){Vd=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{Vd=!1}function Y5(e,t,r,n,i,o,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(d){this.onError(d)}}var Os=!1,Jl=null,ec=!1,Hd=null,X5={onError:function(e){Os=!0,Jl=e}};function G5(e,t,r,n,i,o,s,l,a){Os=!1,Jl=null,Y5.apply(X5,arguments)}function q5(e,t,r,n,i,o,s,l,a){if(G5.apply(this,arguments),Os){if(Os){var c=Jl;Os=!1,Jl=null}else throw Error(P(198));ec||(ec=!0,Hd=c)}}function Vi(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Q0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tm(e){if(Vi(e)!==e)throw Error(P(188))}function Q5(e){var t=e.alternate;if(!t){if(t=Vi(e),t===null)throw Error(P(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Tm(i),e;if(o===n)return Tm(i),t;o=o.sibling}throw Error(P(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s)throw Error(P(189))}}if(r.alternate!==n)throw Error(P(190))}if(r.tag!==3)throw Error(P(188));return r.stateNode.current===r?e:t}function Z0(e){return e=Q5(e),e!==null?J0(e):null}function J0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=J0(e);if(t!==null)return t;e=e.sibling}return null}var ey=jt.unstable_scheduleCallback,Om=jt.unstable_cancelCallback,Z5=jt.unstable_shouldYield,J5=jt.unstable_requestPaint,je=jt.unstable_now,eS=jt.unstable_getCurrentPriorityLevel,wh=jt.unstable_ImmediatePriority,ty=jt.unstable_UserBlockingPriority,tc=jt.unstable_NormalPriority,tS=jt.unstable_LowPriority,ry=jt.unstable_IdlePriority,Mc=null,$r=null;function rS(e){if($r&&typeof $r.onCommitFiberRoot=="function")try{$r.onCommitFiberRoot(Mc,e,void 0,(e.current.flags&128)===128)}catch{}}var hr=Math.clz32?Math.clz32:oS,nS=Math.log,iS=Math.LN2;function oS(e){return e>>>=0,e===0?32:31-(nS(e)/iS|0)|0}var rl=64,nl=4194304;function ys(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rc(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=ys(l):(o&=s,o!==0&&(n=ys(o)))}else s=r&~i,s!==0?n=ys(s):o!==0&&(n=ys(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-hr(t),i=1<<r,n|=e[r],t&=~i;return n}function sS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aS(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-hr(o),l=1<<s,a=i[s];a===-1?(!(l&r)||l&n)&&(i[s]=sS(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Ud(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ny(){var e=rl;return rl<<=1,!(rl&4194240)&&(rl=64),e}function Iu(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ta(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hr(t),e[t]=r}function lS(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-hr(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function xh(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-hr(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ge=0;function iy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var oy,_h,sy,ay,ly,Wd=!1,il=[],In=null,Rn=null,Nn=null,qs=new Map,Qs=new Map,Cn=[],cS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pm(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":qs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(t.pointerId)}}function as(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Pa(t),t!==null&&_h(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function uS(e,t,r,n,i){switch(t){case"focusin":return In=as(In,e,t,r,n,i),!0;case"dragenter":return Rn=as(Rn,e,t,r,n,i),!0;case"mouseover":return Nn=as(Nn,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return qs.set(o,as(qs.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Qs.set(o,as(Qs.get(o)||null,e,t,r,n,i)),!0}return!1}function cy(e){var t=mi(e.target);if(t!==null){var r=Vi(t);if(r!==null){if(t=r.tag,t===13){if(t=Q0(r),t!==null){e.blockedOn=t,ly(e.priority,function(){sy(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Kd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Fd=n,r.target.dispatchEvent(n),Fd=null}else return t=Pa(r),t!==null&&_h(t),e.blockedOn=r,!1;t.shift()}return!0}function Lm(e,t,r){Pl(e)&&r.delete(t)}function dS(){Wd=!1,In!==null&&Pl(In)&&(In=null),Rn!==null&&Pl(Rn)&&(Rn=null),Nn!==null&&Pl(Nn)&&(Nn=null),qs.forEach(Lm),Qs.forEach(Lm)}function ls(e,t){e.blockedOn===t&&(e.blockedOn=null,Wd||(Wd=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,dS)))}function Zs(e){function t(i){return ls(i,e)}if(0<il.length){ls(il[0],e);for(var r=1;r<il.length;r++){var n=il[r];n.blockedOn===e&&(n.blockedOn=null)}}for(In!==null&&ls(In,e),Rn!==null&&ls(Rn,e),Nn!==null&&ls(Nn,e),qs.forEach(t),Qs.forEach(t),r=0;r<Cn.length;r++)n=Cn[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Cn.length&&(r=Cn[0],r.blockedOn===null);)cy(r),r.blockedOn===null&&Cn.shift()}var bo=cn.ReactCurrentBatchConfig,nc=!0;function fS(e,t,r,n){var i=ge,o=bo.transition;bo.transition=null;try{ge=1,kh(e,t,r,n)}finally{ge=i,bo.transition=o}}function hS(e,t,r,n){var i=ge,o=bo.transition;bo.transition=null;try{ge=4,kh(e,t,r,n)}finally{ge=i,bo.transition=o}}function kh(e,t,r,n){if(nc){var i=Kd(e,t,r,n);if(i===null)Uu(e,t,n,ic,r),Pm(e,n);else if(uS(i,e,t,r,n))n.stopPropagation();else if(Pm(e,n),t&4&&-1<cS.indexOf(e)){for(;i!==null;){var o=Pa(i);if(o!==null&&oy(o),o=Kd(e,t,r,n),o===null&&Uu(e,t,n,ic,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Uu(e,t,n,null,r)}}var ic=null;function Kd(e,t,r,n){if(ic=null,e=bh(n),e=mi(e),e!==null)if(t=Vi(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Q0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ic=e,null}function uy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eS()){case wh:return 1;case ty:return 4;case tc:case tS:return 16;case ry:return 536870912;default:return 16}default:return 16}}var En=null,Ch=null,Ll=null;function dy(){if(Ll)return Ll;var e,t=Ch,r=t.length,n,i="value"in En?En.value:En.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[o-n];n++);return Ll=i.slice(e,1<n?1-n:void 0)}function Il(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function Im(){return!1}function Yt(e){function t(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ol:Im,this.isPropagationStopped=Im,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),t}var Wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sh=Yt(Wo),Oa=Te({},Wo,{view:0,detail:0}),pS=Yt(Oa),Ru,Nu,cs,jc=Te({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$h,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cs&&(cs&&e.type==="mousemove"?(Ru=e.screenX-cs.screenX,Nu=e.screenY-cs.screenY):Nu=Ru=0,cs=e),Ru)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),Rm=Yt(jc),mS=Te({},jc,{dataTransfer:0}),gS=Yt(mS),vS=Te({},Oa,{relatedTarget:0}),Du=Yt(vS),yS=Te({},Wo,{animationName:0,elapsedTime:0,pseudoElement:0}),bS=Yt(yS),wS=Te({},Wo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xS=Yt(wS),_S=Te({},Wo,{data:0}),Nm=Yt(_S),kS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $S(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=SS[e])?!!t[e]:!1}function $h(){return $S}var ES=Te({},Oa,{key:function(e){if(e.key){var t=kS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?CS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$h,charCode:function(e){return e.type==="keypress"?Il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),AS=Yt(ES),zS=Te({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dm=Yt(zS),TS=Te({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$h}),OS=Yt(TS),PS=Te({},Wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),LS=Yt(PS),IS=Te({},jc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),RS=Yt(IS),NS=[9,13,27,32],Eh=qr&&"CompositionEvent"in window,Ps=null;qr&&"documentMode"in document&&(Ps=document.documentMode);var DS=qr&&"TextEvent"in window&&!Ps,fy=qr&&(!Eh||Ps&&8<Ps&&11>=Ps),Mm=" ",jm=!1;function hy(e,t){switch(e){case"keyup":return NS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function py(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var eo=!1;function MS(e,t){switch(e){case"compositionend":return py(t);case"keypress":return t.which!==32?null:(jm=!0,Mm);case"textInput":return e=t.data,e===Mm&&jm?null:e;default:return null}}function jS(e,t){if(eo)return e==="compositionend"||!Eh&&hy(e,t)?(e=dy(),Ll=Ch=En=null,eo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fy&&t.locale!=="ko"?null:t.data;default:return null}}var FS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!FS[e.type]:t==="textarea"}function my(e,t,r,n){K0(n),t=oc(t,"onChange"),0<t.length&&(r=new Sh("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ls=null,Js=null;function BS(e){$y(e,0)}function Fc(e){var t=no(e);if(j0(t))return e}function VS(e,t){if(e==="change")return t}var gy=!1;if(qr){var Mu;if(qr){var ju="oninput"in document;if(!ju){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;"),ju=typeof Bm.oninput=="function"}Mu=ju}else Mu=!1;gy=Mu&&(!document.documentMode||9<document.documentMode)}function Vm(){Ls&&(Ls.detachEvent("onpropertychange",vy),Js=Ls=null)}function vy(e){if(e.propertyName==="value"&&Fc(Js)){var t=[];my(t,Js,e,bh(e)),q0(BS,t)}}function HS(e,t,r){e==="focusin"?(Vm(),Ls=t,Js=r,Ls.attachEvent("onpropertychange",vy)):e==="focusout"&&Vm()}function US(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fc(Js)}function WS(e,t){if(e==="click")return Fc(t)}function KS(e,t){if(e==="input"||e==="change")return Fc(t)}function YS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mr=typeof Object.is=="function"?Object.is:YS;function ea(e,t){if(mr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Ad.call(t,i)||!mr(e[i],t[i]))return!1}return!0}function Hm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Um(e,t){var r=Hm(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Hm(r)}}function yy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function by(){for(var e=window,t=Zl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Zl(e.document)}return t}function Ah(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function XS(e){var t=by(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&yy(r.ownerDocument.documentElement,r)){if(n!==null&&Ah(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=Um(r,o);var s=Um(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var GS=qr&&"documentMode"in document&&11>=document.documentMode,to=null,Yd=null,Is=null,Xd=!1;function Wm(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xd||to==null||to!==Zl(n)||(n=to,"selectionStart"in n&&Ah(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Is&&ea(Is,n)||(Is=n,n=oc(Yd,"onSelect"),0<n.length&&(t=new Sh("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=to)))}function sl(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ro={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},Fu={},wy={};qr&&(wy=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function Bc(e){if(Fu[e])return Fu[e];if(!ro[e])return e;var t=ro[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in wy)return Fu[e]=t[r];return e}var xy=Bc("animationend"),_y=Bc("animationiteration"),ky=Bc("animationstart"),Cy=Bc("transitionend"),Sy=new Map,Km="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(e,t){Sy.set(e,t),Bi(t,[e])}for(var Bu=0;Bu<Km.length;Bu++){var Vu=Km[Bu],qS=Vu.toLowerCase(),QS=Vu[0].toUpperCase()+Vu.slice(1);ei(qS,"on"+QS)}ei(xy,"onAnimationEnd");ei(_y,"onAnimationIteration");ei(ky,"onAnimationStart");ei("dblclick","onDoubleClick");ei("focusin","onFocus");ei("focusout","onBlur");ei(Cy,"onTransitionEnd");$o("onMouseEnter",["mouseout","mouseover"]);$o("onMouseLeave",["mouseout","mouseover"]);$o("onPointerEnter",["pointerout","pointerover"]);$o("onPointerLeave",["pointerout","pointerover"]);Bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZS=new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));function Ym(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,q5(n,t,void 0,e),e.currentTarget=null}function $y(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Ym(i,l,c),o=a}else for(s=0;s<n.length;s++){if(l=n[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Ym(i,l,c),o=a}}}if(ec)throw e=Hd,ec=!1,Hd=null,e}function we(e,t){var r=t[Jd];r===void 0&&(r=t[Jd]=new Set);var n=e+"__bubble";r.has(n)||(Ey(t,e,2,!1),r.add(n))}function Hu(e,t,r){var n=0;t&&(n|=4),Ey(r,e,n,t)}var al="_reactListening"+Math.random().toString(36).slice(2);function ta(e){if(!e[al]){e[al]=!0,I0.forEach(function(r){r!=="selectionchange"&&(ZS.has(r)||Hu(r,!1,e),Hu(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[al]||(t[al]=!0,Hu("selectionchange",!1,t))}}function Ey(e,t,r,n){switch(uy(t)){case 1:var i=fS;break;case 4:i=hS;break;default:i=kh}r=i.bind(null,t,r,e),i=void 0,!Vd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Uu(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=mi(l),s===null)return;if(a=s.tag,a===5||a===6){n=o=s;continue e}l=l.parentNode}}n=n.return}q0(function(){var c=o,d=bh(r),f=[];e:{var h=Sy.get(e);if(h!==void 0){var p=Sh,v=e;switch(e){case"keypress":if(Il(r)===0)break e;case"keydown":case"keyup":p=AS;break;case"focusin":v="focus",p=Du;break;case"focusout":v="blur",p=Du;break;case"beforeblur":case"afterblur":p=Du;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=OS;break;case xy:case _y:case ky:p=bS;break;case Cy:p=LS;break;case"scroll":p=pS;break;case"wheel":p=RS;break;case"copy":case"cut":case"paste":p=xS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dm}var x=(t&4)!==0,S=!x&&e==="scroll",b=x?h!==null?h+"Capture":null:h;x=[];for(var m=c,y;m!==null;){y=m;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,b!==null&&(w=Gs(m,b),w!=null&&x.push(ra(m,w,y)))),S)break;m=m.return}0<x.length&&(h=new p(h,v,null,r,d),f.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&r!==Fd&&(v=r.relatedTarget||r.fromElement)&&(mi(v)||v[Qr]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=r.relatedTarget||r.toElement,p=c,v=v?mi(v):null,v!==null&&(S=Vi(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Rm,w="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Dm,w="onPointerLeave",b="onPointerEnter",m="pointer"),S=p==null?h:no(p),y=v==null?h:no(v),h=new x(w,m+"leave",p,r,d),h.target=S,h.relatedTarget=y,w=null,mi(d)===c&&(x=new x(b,m+"enter",v,r,d),x.target=y,x.relatedTarget=S,w=x),S=w,p&&v)t:{for(x=p,b=v,m=0,y=x;y;y=Ki(y))m++;for(y=0,w=b;w;w=Ki(w))y++;for(;0<m-y;)x=Ki(x),m--;for(;0<y-m;)b=Ki(b),y--;for(;m--;){if(x===b||b!==null&&x===b.alternate)break t;x=Ki(x),b=Ki(b)}x=null}else x=null;p!==null&&Xm(f,h,p,x,!1),v!==null&&S!==null&&Xm(f,S,v,x,!0)}}e:{if(h=c?no(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=VS;else if(Fm(h))if(gy)C=KS;else{C=US;var $=HS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=WS);if(C&&(C=C(e,c))){my(f,C,r,d);break e}$&&$(e,h,c),e==="focusout"&&($=h._wrapperState)&&$.controlled&&h.type==="number"&&Rd(h,"number",h.value)}switch($=c?no(c):window,e){case"focusin":(Fm($)||$.contentEditable==="true")&&(to=$,Yd=c,Is=null);break;case"focusout":Is=Yd=to=null;break;case"mousedown":Xd=!0;break;case"contextmenu":case"mouseup":case"dragend":Xd=!1,Wm(f,r,d);break;case"selectionchange":if(GS)break;case"keydown":case"keyup":Wm(f,r,d)}var E;if(Eh)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else eo?hy(e,r)&&(A="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(A="onCompositionStart");A&&(fy&&r.locale!=="ko"&&(eo||A!=="onCompositionStart"?A==="onCompositionEnd"&&eo&&(E=dy()):(En=d,Ch="value"in En?En.value:En.textContent,eo=!0)),$=oc(c,A),0<$.length&&(A=new Nm(A,e,null,r,d),f.push({event:A,listeners:$}),E?A.data=E:(E=py(r),E!==null&&(A.data=E)))),(E=DS?MS(e,r):jS(e,r))&&(c=oc(c,"onBeforeInput"),0<c.length&&(d=new Nm("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:c}),d.data=E))}$y(f,t)})}function ra(e,t,r){return{instance:e,listener:t,currentTarget:r}}function oc(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gs(e,r),o!=null&&n.unshift(ra(e,o,i)),o=Gs(e,t),o!=null&&n.push(ra(e,o,i))),e=e.return}return n}function Ki(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xm(e,t,r,n,i){for(var o=t._reactName,s=[];r!==null&&r!==n;){var l=r,a=l.alternate,c=l.stateNode;if(a!==null&&a===n)break;l.tag===5&&c!==null&&(l=c,i?(a=Gs(r,o),a!=null&&s.unshift(ra(r,a,l))):i||(a=Gs(r,o),a!=null&&s.push(ra(r,a,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var JS=/\r\n?/g,e3=/\u0000|\uFFFD/g;function Gm(e){return(typeof e=="string"?e:""+e).replace(JS,`
`).replace(e3,"")}function ll(e,t,r){if(t=Gm(t),Gm(e)!==t&&r)throw Error(P(425))}function sc(){}var Gd=null,qd=null;function Qd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,t3=typeof clearTimeout=="function"?clearTimeout:void 0,qm=typeof Promise=="function"?Promise:void 0,r3=typeof queueMicrotask=="function"?queueMicrotask:typeof qm<"u"?function(e){return qm.resolve(null).then(e).catch(n3)}:Zd;function n3(e){setTimeout(function(){throw e})}function Wu(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Zs(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Zs(t)}function Dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),Cr="__reactFiber$"+Ko,na="__reactProps$"+Ko,Qr="__reactContainer$"+Ko,Jd="__reactEvents$"+Ko,i3="__reactListeners$"+Ko,o3="__reactHandles$"+Ko;function mi(e){var t=e[Cr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Qr]||r[Cr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Qm(e);e!==null;){if(r=e[Cr])return r;e=Qm(e)}return t}e=r,r=e.parentNode}return null}function Pa(e){return e=e[Cr]||e[Qr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function no(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Vc(e){return e[na]||null}var ef=[],io=-1;function ti(e){return{current:e}}function _e(e){0>io||(e.current=ef[io],ef[io]=null,io--)}function be(e,t){io++,ef[io]=e.current,e.current=t}var Yn={},pt=ti(Yn),Et=ti(!1),Ei=Yn;function Eo(e,t){var r=e.type.contextTypes;if(!r)return Yn;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function At(e){return e=e.childContextTypes,e!=null}function ac(){_e(Et),_e(pt)}function Zm(e,t,r){if(pt.current!==Yn)throw Error(P(168));be(pt,t),be(Et,r)}function Ay(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(P(108,H5(e)||"Unknown",i));return Te({},r,n)}function lc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,Ei=pt.current,be(pt,e),be(Et,Et.current),!0}function Jm(e,t,r){var n=e.stateNode;if(!n)throw Error(P(169));r?(e=Ay(e,t,Ei),n.__reactInternalMemoizedMergedChildContext=e,_e(Et),_e(pt),be(pt,e)):_e(Et),be(Et,r)}var Ur=null,Hc=!1,Ku=!1;function zy(e){Ur===null?Ur=[e]:Ur.push(e)}function s3(e){Hc=!0,zy(e)}function ri(){if(!Ku&&Ur!==null){Ku=!0;var e=0,t=ge;try{var r=Ur;for(ge=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ur=null,Hc=!1}catch(i){throw Ur!==null&&(Ur=Ur.slice(e+1)),ey(wh,ri),i}finally{ge=t,Ku=!1}}return null}var oo=[],so=0,cc=null,uc=0,Gt=[],qt=0,Ai=null,Kr=1,Yr="";function li(e,t){oo[so++]=uc,oo[so++]=cc,cc=e,uc=t}function Ty(e,t,r){Gt[qt++]=Kr,Gt[qt++]=Yr,Gt[qt++]=Ai,Ai=e;var n=Kr;e=Yr;var i=32-hr(n)-1;n&=~(1<<i),r+=1;var o=32-hr(t)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Kr=1<<32-hr(t)+i|r<<i|n,Yr=o+e}else Kr=1<<o|r<<i|n,Yr=e}function zh(e){e.return!==null&&(li(e,1),Ty(e,1,0))}function Th(e){for(;e===cc;)cc=oo[--so],oo[so]=null,uc=oo[--so],oo[so]=null;for(;e===Ai;)Ai=Gt[--qt],Gt[qt]=null,Yr=Gt[--qt],Gt[qt]=null,Kr=Gt[--qt],Gt[qt]=null}var Mt=null,Nt=null,Se=!1,dr=null;function Oy(e,t){var r=Zt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function eg(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Mt=e,Nt=Dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Mt=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ai!==null?{id:Kr,overflow:Yr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Zt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Mt=e,Nt=null,!0):!1;default:return!1}}function tf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rf(e){if(Se){var t=Nt;if(t){var r=t;if(!eg(e,t)){if(tf(e))throw Error(P(418));t=Dn(r.nextSibling);var n=Mt;t&&eg(e,t)?Oy(n,r):(e.flags=e.flags&-4097|2,Se=!1,Mt=e)}}else{if(tf(e))throw Error(P(418));e.flags=e.flags&-4097|2,Se=!1,Mt=e}}}function tg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Mt=e}function cl(e){if(e!==Mt)return!1;if(!Se)return tg(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qd(e.type,e.memoizedProps)),t&&(t=Nt)){if(tf(e))throw Py(),Error(P(418));for(;t;)Oy(e,t),t=Dn(t.nextSibling)}if(tg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Nt=Dn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=Mt?Dn(e.stateNode.nextSibling):null;return!0}function Py(){for(var e=Nt;e;)e=Dn(e.nextSibling)}function Ao(){Nt=Mt=null,Se=!1}function Oh(e){dr===null?dr=[e]:dr.push(e)}var a3=cn.ReactCurrentBatchConfig;function cr(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var dc=ti(null),fc=null,ao=null,Ph=null;function Lh(){Ph=ao=fc=null}function Ih(e){var t=dc.current;_e(dc),e._currentValue=t}function nf(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function wo(e,t){fc=e,Ph=ao=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function tr(e){var t=e._currentValue;if(Ph!==e)if(e={context:e,memoizedValue:t,next:null},ao===null){if(fc===null)throw Error(P(308));ao=e,fc.dependencies={lanes:0,firstContext:e}}else ao=ao.next=e;return t}var gi=null;function Rh(e){gi===null?gi=[e]:gi.push(e)}function Ly(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Rh(t)):(r.next=i.next,i.next=r),t.interleaved=r,Zr(e,n)}function Zr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var xn=!1;function Nh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mn(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ce&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Zr(e,r)}return i=n.interleaved,i===null?(t.next=t,Rh(n)):(t.next=i.next,i.next=t),n.interleaved=t,Zr(e,r)}function Rl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,xh(e,r)}}function rg(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function hc(e,t,r,n){var i=e.updateQueue;xn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?o=c:s.next=c,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(o!==null){var f=i.baseState;s=0,d=c=a=null,l=o;do{var h=l.lane,p=l.eventTime;if((n&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(h=t,p=r,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=Te({},f,h);break e;case 2:xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=p,a=f):d=d.next=p,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=f),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ti|=s,e.lanes=s,e.memoizedState=f}}function ng(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(P(191,i));i.call(n)}}}var Ry=new L0.Component().refs;function of(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Te({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Uc={isMounted:function(e){return(e=e._reactInternals)?Vi(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=yt(),i=Fn(e),o=Xr(n,i);o.payload=t,r!=null&&(o.callback=r),t=Mn(e,o,i),t!==null&&(pr(t,e,i,n),Rl(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=yt(),i=Fn(e),o=Xr(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Mn(e,o,i),t!==null&&(pr(t,e,i,n),Rl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=yt(),n=Fn(e),i=Xr(r,n);i.tag=2,t!=null&&(i.callback=t),t=Mn(e,i,n),t!==null&&(pr(t,e,n,r),Rl(t,e,n))}};function ig(e,t,r,n,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!ea(r,n)||!ea(i,o):!0}function Ny(e,t,r){var n=!1,i=Yn,o=t.contextType;return typeof o=="object"&&o!==null?o=tr(o):(i=At(t)?Ei:pt.current,n=t.contextTypes,o=(n=n!=null)?Eo(e,i):Yn),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uc,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function og(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Uc.enqueueReplaceState(t,t.state,null)}function sf(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=Ry,Nh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=tr(o):(o=At(t)?Ei:pt.current,i.context=Eo(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(of(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Uc.enqueueReplaceState(i,i.state,null),hc(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function us(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(P(309));var n=r.stateNode}if(!n)throw Error(P(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===Ry&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!r._owner)throw Error(P(290,e))}return e}function ul(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sg(e){var t=e._init;return t(e._payload)}function Dy(e){function t(b,m){if(e){var y=b.deletions;y===null?(b.deletions=[m],b.flags|=16):y.push(m)}}function r(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function n(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function i(b,m){return b=Bn(b,m),b.index=0,b.sibling=null,b}function o(b,m,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<m?(b.flags|=2,m):y):(b.flags|=2,m)):(b.flags|=1048576,m)}function s(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,m,y,w){return m===null||m.tag!==6?(m=Ju(y,b.mode,w),m.return=b,m):(m=i(m,y),m.return=b,m)}function a(b,m,y,w){var C=y.type;return C===Ji?d(b,m,y.props.children,w,y.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wn&&sg(C)===m.type)?(w=i(m,y.props),w.ref=us(b,m,y),w.return=b,w):(w=Bl(y.type,y.key,y.props,null,b.mode,w),w.ref=us(b,m,y),w.return=b,w)}function c(b,m,y,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=ed(y,b.mode,w),m.return=b,m):(m=i(m,y.children||[]),m.return=b,m)}function d(b,m,y,w,C){return m===null||m.tag!==7?(m=xi(y,b.mode,w,C),m.return=b,m):(m=i(m,y),m.return=b,m)}function f(b,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ju(""+m,b.mode,y),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ja:return y=Bl(m.type,m.key,m.props,null,b.mode,y),y.ref=us(b,null,m),y.return=b,y;case Zi:return m=ed(m,b.mode,y),m.return=b,m;case wn:var w=m._init;return f(b,w(m._payload),y)}if(vs(m)||os(m))return m=xi(m,b.mode,y,null),m.return=b,m;ul(b,m)}return null}function h(b,m,y,w){var C=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:l(b,m,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:return y.key===C?a(b,m,y,w):null;case Zi:return y.key===C?c(b,m,y,w):null;case wn:return C=y._init,h(b,m,C(y._payload),w)}if(vs(y)||os(y))return C!==null?null:d(b,m,y,w,null);ul(b,y)}return null}function p(b,m,y,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return b=b.get(y)||null,l(m,b,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ja:return b=b.get(w.key===null?y:w.key)||null,a(m,b,w,C);case Zi:return b=b.get(w.key===null?y:w.key)||null,c(m,b,w,C);case wn:var $=w._init;return p(b,m,y,$(w._payload),C)}if(vs(w)||os(w))return b=b.get(y)||null,d(m,b,w,C,null);ul(m,w)}return null}function v(b,m,y,w){for(var C=null,$=null,E=m,A=m=0,T=null;E!==null&&A<y.length;A++){E.index>A?(T=E,E=null):T=E.sibling;var z=h(b,E,y[A],w);if(z===null){E===null&&(E=T);break}e&&E&&z.alternate===null&&t(b,E),m=o(z,m,A),$===null?C=z:$.sibling=z,$=z,E=T}if(A===y.length)return r(b,E),Se&&li(b,A),C;if(E===null){for(;A<y.length;A++)E=f(b,y[A],w),E!==null&&(m=o(E,m,A),$===null?C=E:$.sibling=E,$=E);return Se&&li(b,A),C}for(E=n(b,E);A<y.length;A++)T=p(E,b,A,y[A],w),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?A:T.key),m=o(T,m,A),$===null?C=T:$.sibling=T,$=T);return e&&E.forEach(function(N){return t(b,N)}),Se&&li(b,A),C}function x(b,m,y,w){var C=os(y);if(typeof C!="function")throw Error(P(150));if(y=C.call(y),y==null)throw Error(P(151));for(var $=C=null,E=m,A=m=0,T=null,z=y.next();E!==null&&!z.done;A++,z=y.next()){E.index>A?(T=E,E=null):T=E.sibling;var N=h(b,E,z.value,w);if(N===null){E===null&&(E=T);break}e&&E&&N.alternate===null&&t(b,E),m=o(N,m,A),$===null?C=N:$.sibling=N,$=N,E=T}if(z.done)return r(b,E),Se&&li(b,A),C;if(E===null){for(;!z.done;A++,z=y.next())z=f(b,z.value,w),z!==null&&(m=o(z,m,A),$===null?C=z:$.sibling=z,$=z);return Se&&li(b,A),C}for(E=n(b,E);!z.done;A++,z=y.next())z=p(E,b,A,z.value,w),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?A:z.key),m=o(z,m,A),$===null?C=z:$.sibling=z,$=z);return e&&E.forEach(function(D){return t(b,D)}),Se&&li(b,A),C}function S(b,m,y,w){if(typeof y=="object"&&y!==null&&y.type===Ji&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:e:{for(var C=y.key,$=m;$!==null;){if($.key===C){if(C=y.type,C===Ji){if($.tag===7){r(b,$.sibling),m=i($,y.props.children),m.return=b,b=m;break e}}else if($.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wn&&sg(C)===$.type){r(b,$.sibling),m=i($,y.props),m.ref=us(b,$,y),m.return=b,b=m;break e}r(b,$);break}else t(b,$);$=$.sibling}y.type===Ji?(m=xi(y.props.children,b.mode,w,y.key),m.return=b,b=m):(w=Bl(y.type,y.key,y.props,null,b.mode,w),w.ref=us(b,m,y),w.return=b,b=w)}return s(b);case Zi:e:{for($=y.key;m!==null;){if(m.key===$)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){r(b,m.sibling),m=i(m,y.children||[]),m.return=b,b=m;break e}else{r(b,m);break}else t(b,m);m=m.sibling}m=ed(y,b.mode,w),m.return=b,b=m}return s(b);case wn:return $=y._init,S(b,m,$(y._payload),w)}if(vs(y))return v(b,m,y,w);if(os(y))return x(b,m,y,w);ul(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(r(b,m.sibling),m=i(m,y),m.return=b,b=m):(r(b,m),m=Ju(y,b.mode,w),m.return=b,b=m),s(b)):r(b,m)}return S}var zo=Dy(!0),My=Dy(!1),La={},Er=ti(La),ia=ti(La),oa=ti(La);function vi(e){if(e===La)throw Error(P(174));return e}function Dh(e,t){switch(be(oa,t),be(ia,e),be(Er,La),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dd(t,e)}_e(Er),be(Er,t)}function To(){_e(Er),_e(ia),_e(oa)}function jy(e){vi(oa.current);var t=vi(Er.current),r=Dd(t,e.type);t!==r&&(be(ia,e),be(Er,r))}function Mh(e){ia.current===e&&(_e(Er),_e(ia))}var Ae=ti(0);function pc(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yu=[];function jh(){for(var e=0;e<Yu.length;e++)Yu[e]._workInProgressVersionPrimary=null;Yu.length=0}var Nl=cn.ReactCurrentDispatcher,Xu=cn.ReactCurrentBatchConfig,zi=0,ze=null,Ke=null,Ze=null,mc=!1,Rs=!1,sa=0,l3=0;function dt(){throw Error(P(321))}function Fh(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!mr(e[r],t[r]))return!1;return!0}function Bh(e,t,r,n,i,o){if(zi=o,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nl.current=e===null||e.memoizedState===null?f3:h3,e=r(n,i),Rs){o=0;do{if(Rs=!1,sa=0,25<=o)throw Error(P(301));o+=1,Ze=Ke=null,t.updateQueue=null,Nl.current=p3,e=r(n,i)}while(Rs)}if(Nl.current=gc,t=Ke!==null&&Ke.next!==null,zi=0,Ze=Ke=ze=null,mc=!1,t)throw Error(P(300));return e}function Vh(){var e=sa!==0;return sa=0,e}function _r(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ze.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function rr(){if(Ke===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=Ze===null?ze.memoizedState:Ze.next;if(t!==null)Ze=t,Ke=e;else{if(e===null)throw Error(P(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?ze.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function aa(e,t){return typeof t=="function"?t(e):t}function Gu(e){var t=rr(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var n=Ke,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=s=null,a=null,c=o;do{var d=c.lane;if((zi&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=f,s=n):a=a.next=f,ze.lanes|=d,Ti|=d}c=c.next}while(c!==null&&c!==o);a===null?s=n:a.next=l,mr(n,t.memoizedState)||($t=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=a,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,ze.lanes|=o,Ti|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function qu(e){var t=rr(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);mr(o,t.memoizedState)||($t=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Fy(){}function By(e,t){var r=ze,n=rr(),i=t(),o=!mr(n.memoizedState,i);if(o&&(n.memoizedState=i,$t=!0),n=n.queue,Hh(Uy.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||Ze!==null&&Ze.memoizedState.tag&1){if(r.flags|=2048,la(9,Hy.bind(null,r,n,i,t),void 0,null),Je===null)throw Error(P(349));zi&30||Vy(r,t,i)}return i}function Vy(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Hy(e,t,r,n){t.value=r,t.getSnapshot=n,Wy(t)&&Ky(e)}function Uy(e,t,r){return r(function(){Wy(t)&&Ky(e)})}function Wy(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!mr(e,r)}catch{return!0}}function Ky(e){var t=Zr(e,1);t!==null&&pr(t,e,1,-1)}function ag(e){var t=_r();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t.queue=e,e=e.dispatch=d3.bind(null,ze,e),[t.memoizedState,e]}function la(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Yy(){return rr().memoizedState}function Dl(e,t,r,n){var i=_r();ze.flags|=e,i.memoizedState=la(1|t,r,void 0,n===void 0?null:n)}function Wc(e,t,r,n){var i=rr();n=n===void 0?null:n;var o=void 0;if(Ke!==null){var s=Ke.memoizedState;if(o=s.destroy,n!==null&&Fh(n,s.deps)){i.memoizedState=la(t,r,o,n);return}}ze.flags|=e,i.memoizedState=la(1|t,r,o,n)}function lg(e,t){return Dl(8390656,8,e,t)}function Hh(e,t){return Wc(2048,8,e,t)}function Xy(e,t){return Wc(4,2,e,t)}function Gy(e,t){return Wc(4,4,e,t)}function qy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qy(e,t,r){return r=r!=null?r.concat([e]):null,Wc(4,4,qy.bind(null,t,e),r)}function Uh(){}function Zy(e,t){var r=rr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Fh(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Jy(e,t){var r=rr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Fh(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function eb(e,t,r){return zi&21?(mr(r,t)||(r=ny(),ze.lanes|=r,Ti|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$t=!0),e.memoizedState=r)}function c3(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var n=Xu.transition;Xu.transition={};try{e(!1),t()}finally{ge=r,Xu.transition=n}}function tb(){return rr().memoizedState}function u3(e,t,r){var n=Fn(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},rb(e))nb(t,r);else if(r=Ly(e,t,r,n),r!==null){var i=yt();pr(r,e,n,i),ib(r,t,n)}}function d3(e,t,r){var n=Fn(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(rb(e))nb(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,mr(l,s)){var a=t.interleaved;a===null?(i.next=i,Rh(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}r=Ly(e,t,i,n),r!==null&&(i=yt(),pr(r,e,n,i),ib(r,t,n))}}function rb(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function nb(e,t){Rs=mc=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function ib(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,xh(e,r)}}var gc={readContext:tr,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},f3={readContext:tr,useCallback:function(e,t){return _r().memoizedState=[e,t===void 0?null:t],e},useContext:tr,useEffect:lg,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Dl(4194308,4,qy.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Dl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dl(4,2,e,t)},useMemo:function(e,t){var r=_r();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=_r();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=u3.bind(null,ze,e),[n.memoizedState,e]},useRef:function(e){var t=_r();return e={current:e},t.memoizedState=e},useState:ag,useDebugValue:Uh,useDeferredValue:function(e){return _r().memoizedState=e},useTransition:function(){var e=ag(!1),t=e[0];return e=c3.bind(null,e[1]),_r().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ze,i=_r();if(Se){if(r===void 0)throw Error(P(407));r=r()}else{if(r=t(),Je===null)throw Error(P(349));zi&30||Vy(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,lg(Uy.bind(null,n,o,e),[e]),n.flags|=2048,la(9,Hy.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=_r(),t=Je.identifierPrefix;if(Se){var r=Yr,n=Kr;r=(n&~(1<<32-hr(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=sa++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=l3++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},h3={readContext:tr,useCallback:Zy,useContext:tr,useEffect:Hh,useImperativeHandle:Qy,useInsertionEffect:Xy,useLayoutEffect:Gy,useMemo:Jy,useReducer:Gu,useRef:Yy,useState:function(){return Gu(aa)},useDebugValue:Uh,useDeferredValue:function(e){var t=rr();return eb(t,Ke.memoizedState,e)},useTransition:function(){var e=Gu(aa)[0],t=rr().memoizedState;return[e,t]},useMutableSource:Fy,useSyncExternalStore:By,useId:tb,unstable_isNewReconciler:!1},p3={readContext:tr,useCallback:Zy,useContext:tr,useEffect:Hh,useImperativeHandle:Qy,useInsertionEffect:Xy,useLayoutEffect:Gy,useMemo:Jy,useReducer:qu,useRef:Yy,useState:function(){return qu(aa)},useDebugValue:Uh,useDeferredValue:function(e){var t=rr();return Ke===null?t.memoizedState=e:eb(t,Ke.memoizedState,e)},useTransition:function(){var e=qu(aa)[0],t=rr().memoizedState;return[e,t]},useMutableSource:Fy,useSyncExternalStore:By,useId:tb,unstable_isNewReconciler:!1};function Oo(e,t){try{var r="",n=t;do r+=V5(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Qu(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function af(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var m3=typeof WeakMap=="function"?WeakMap:Map;function ob(e,t,r){r=Xr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){yc||(yc=!0,vf=n),af(e,t)},r}function sb(e,t,r){r=Xr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){af(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){af(e,t),typeof n!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function cg(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new m3;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=z3.bind(null,e,t,r),t.then(e,e))}function ug(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dg(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Xr(-1,1),t.tag=2,Mn(r,t,1))),r.lanes|=1),e)}var g3=cn.ReactCurrentOwner,$t=!1;function vt(e,t,r,n){t.child=e===null?My(t,null,r,n):zo(t,e.child,r,n)}function fg(e,t,r,n,i){r=r.render;var o=t.ref;return wo(t,i),n=Bh(e,t,r,n,o,i),r=Vh(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jr(e,t,i)):(Se&&r&&zh(t),t.flags|=1,vt(e,t,n,i),t.child)}function hg(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Zh(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,ab(e,t,o,n,i)):(e=Bl(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:ea,r(s,n)&&e.ref===t.ref)return Jr(e,t,i)}return t.flags|=1,e=Bn(o,n),e.ref=t.ref,e.return=t,t.child=e}function ab(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(ea(o,n)&&e.ref===t.ref)if($t=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&($t=!0);else return t.lanes=e.lanes,Jr(e,t,i)}return lf(e,t,r,n,i)}function lb(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(co,Lt),Lt|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(co,Lt),Lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,be(co,Lt),Lt|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,be(co,Lt),Lt|=n;return vt(e,t,i,r),t.child}function cb(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function lf(e,t,r,n,i){var o=At(r)?Ei:pt.current;return o=Eo(t,o),wo(t,i),r=Bh(e,t,r,n,o,i),n=Vh(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jr(e,t,i)):(Se&&n&&zh(t),t.flags|=1,vt(e,t,r,i),t.child)}function pg(e,t,r,n,i){if(At(r)){var o=!0;lc(t)}else o=!1;if(wo(t,i),t.stateNode===null)Ml(e,t),Ny(t,r,n),sf(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,c=r.contextType;typeof c=="object"&&c!==null?c=tr(c):(c=At(r)?Ei:pt.current,c=Eo(t,c));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||a!==c)&&og(t,s,n,c),xn=!1;var h=t.memoizedState;s.state=h,hc(t,n,s,i),a=t.memoizedState,l!==n||h!==a||Et.current||xn?(typeof d=="function"&&(of(t,r,d,n),a=t.memoizedState),(l=xn||ig(t,r,l,n,h,a,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=a),s.props=n,s.state=a,s.context=c,n=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Iy(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:cr(t.type,l),s.props=c,f=t.pendingProps,h=s.context,a=r.contextType,typeof a=="object"&&a!==null?a=tr(a):(a=At(r)?Ei:pt.current,a=Eo(t,a));var p=r.getDerivedStateFromProps;(d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||h!==a)&&og(t,s,n,a),xn=!1,h=t.memoizedState,s.state=h,hc(t,n,s,i);var v=t.memoizedState;l!==f||h!==v||Et.current||xn?(typeof p=="function"&&(of(t,r,p,n),v=t.memoizedState),(c=xn||ig(t,r,c,n,h,v,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),s.props=n,s.state=v,s.context=a,n=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return cf(e,t,r,n,o,i)}function cf(e,t,r,n,i,o){cb(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&Jm(t,r,!1),Jr(e,t,o);n=t.stateNode,g3.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=zo(t,e.child,null,o),t.child=zo(t,null,l,o)):vt(e,t,l,o),t.memoizedState=n.state,i&&Jm(t,r,!0),t.child}function ub(e){var t=e.stateNode;t.pendingContext?Zm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zm(e,t.context,!1),Dh(e,t.containerInfo)}function mg(e,t,r,n,i){return Ao(),Oh(i),t.flags|=256,vt(e,t,r,n),t.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function df(e){return{baseLanes:e,cachePool:null,transitions:null}}function db(e,t,r){var n=t.pendingProps,i=Ae.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Ae,i&1),e===null)return rf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,o?(n=t.mode,o=t.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Xc(s,n,0,null),e=xi(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=df(r),t.memoizedState=uf,e):Wh(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return v3(e,t,s,n,l,i,r);if(o){o=n.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:n.children};return!(s&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=a,t.deletions=null):(n=Bn(i,a),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Bn(l,o):(o=xi(o,s,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,s=e.child.memoizedState,s=s===null?df(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,t.memoizedState=uf,n}return o=e.child,e=o.sibling,n=Bn(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Wh(e,t){return t=Xc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dl(e,t,r,n){return n!==null&&Oh(n),zo(t,e.child,null,r),e=Wh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function v3(e,t,r,n,i,o,s){if(r)return t.flags&256?(t.flags&=-257,n=Qu(Error(P(422))),dl(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Xc({mode:"visible",children:n.children},i,0,null),o=xi(o,i,s,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&zo(t,e.child,null,s),t.child.memoizedState=df(s),t.memoizedState=uf,o);if(!(t.mode&1))return dl(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(P(419)),n=Qu(o,n,void 0),dl(e,t,s,n)}if(l=(s&e.childLanes)!==0,$t||l){if(n=Je,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Zr(e,i),pr(n,e,i,-1))}return Qh(),n=Qu(Error(P(421))),dl(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=T3.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Nt=Dn(i.nextSibling),Mt=t,Se=!0,dr=null,e!==null&&(Gt[qt++]=Kr,Gt[qt++]=Yr,Gt[qt++]=Ai,Kr=e.id,Yr=e.overflow,Ai=t),t=Wh(t,n.children),t.flags|=4096,t)}function gg(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),nf(e.return,t,r)}function Zu(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function fb(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(vt(e,t,n.children,r),n=Ae.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gg(e,r,t);else if(e.tag===19)gg(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(be(Ae,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&pc(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Zu(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pc(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Zu(t,!0,r,null,o);break;case"together":Zu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ml(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ti|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,r=Bn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Bn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function y3(e,t,r){switch(t.tag){case 3:ub(t),Ao();break;case 5:jy(t);break;case 1:At(t.type)&&lc(t);break;case 4:Dh(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;be(dc,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(be(Ae,Ae.current&1),t.flags|=128,null):r&t.child.childLanes?db(e,t,r):(be(Ae,Ae.current&1),e=Jr(e,t,r),e!==null?e.sibling:null);be(Ae,Ae.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return fb(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Ae,Ae.current),n)break;return null;case 22:case 23:return t.lanes=0,lb(e,t,r)}return Jr(e,t,r)}var hb,ff,pb,mb;hb=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ff=function(){};pb=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,vi(Er.current);var o=null;switch(r){case"input":i=Ld(e,i),n=Ld(e,n),o=[];break;case"select":i=Te({},i,{value:void 0}),n=Te({},n,{value:void 0}),o=[];break;case"textarea":i=Nd(e,i),n=Nd(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=sc)}Md(r,n);var s;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ys.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var a=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(r||(r={}),r[s]=a[s])}else r||(o||(o=[]),o.push(c,r)),r=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ys.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&we("scroll",e),o||l===a||(o=[])):(o=o||[]).push(c,a))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};mb=function(e,t,r,n){r!==n&&(t.flags|=4)};function ds(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function b3(e,t,r){var n=t.pendingProps;switch(Th(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(t),null;case 1:return At(t.type)&&ac(),ft(t),null;case 3:return n=t.stateNode,To(),_e(Et),_e(pt),jh(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(cl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dr!==null&&(wf(dr),dr=null))),ff(e,t),ft(t),null;case 5:Mh(t);var i=vi(oa.current);if(r=t.type,e!==null&&t.stateNode!=null)pb(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(P(166));return ft(t),null}if(e=vi(Er.current),cl(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Cr]=t,n[na]=o,e=(t.mode&1)!==0,r){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(i=0;i<bs.length;i++)we(bs[i],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":Sm(n,o),we("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},we("invalid",n);break;case"textarea":Em(n,o),we("invalid",n)}Md(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&ll(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ll(n.textContent,l,e),i=["children",""+l]):Ys.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&we("scroll",n)}switch(r){case"input":el(n),$m(n,o,!0);break;case"textarea":el(n),Am(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=sc)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=V0(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Cr]=t,e[na]=n,hb(e,t,!1,!1),t.stateNode=e;e:{switch(s=jd(r,n),r){case"dialog":we("cancel",e),we("close",e),i=n;break;case"iframe":case"object":case"embed":we("load",e),i=n;break;case"video":case"audio":for(i=0;i<bs.length;i++)we(bs[i],e);i=n;break;case"source":we("error",e),i=n;break;case"img":case"image":case"link":we("error",e),we("load",e),i=n;break;case"details":we("toggle",e),i=n;break;case"input":Sm(e,n),i=Ld(e,n),we("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Te({},n,{value:void 0}),we("invalid",e);break;case"textarea":Em(e,n),i=Nd(e,n),we("invalid",e);break;default:i=n}Md(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?W0(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&H0(e,a)):o==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&Xs(e,a):typeof a=="number"&&Xs(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ys.hasOwnProperty(o)?a!=null&&o==="onScroll"&&we("scroll",e):a!=null&&mh(e,o,a,s))}switch(r){case"input":el(e),$m(e,n,!1);break;case"textarea":el(e),Am(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Kn(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?go(e,!!n.multiple,o,!1):n.defaultValue!=null&&go(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=sc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ft(t),null;case 6:if(e&&t.stateNode!=null)mb(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(P(166));if(r=vi(oa.current),vi(Er.current),cl(t)){if(n=t.stateNode,r=t.memoizedProps,n[Cr]=t,(o=n.nodeValue!==r)&&(e=Mt,e!==null))switch(e.tag){case 3:ll(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ll(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Cr]=t,t.stateNode=n}return ft(t),null;case 13:if(_e(Ae),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&Nt!==null&&t.mode&1&&!(t.flags&128))Py(),Ao(),t.flags|=98560,o=!1;else if(o=cl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[Cr]=t}else Ao(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ft(t),o=!1}else dr!==null&&(wf(dr),dr=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Ye===0&&(Ye=3):Qh())),t.updateQueue!==null&&(t.flags|=4),ft(t),null);case 4:return To(),ff(e,t),e===null&&ta(t.stateNode.containerInfo),ft(t),null;case 10:return Ih(t.type._context),ft(t),null;case 17:return At(t.type)&&ac(),ft(t),null;case 19:if(_e(Ae),o=t.memoizedState,o===null)return ft(t),null;if(n=(t.flags&128)!==0,s=o.rendering,s===null)if(n)ds(o,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=pc(e),s!==null){for(t.flags|=128,ds(o,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return be(Ae,Ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&je()>Po&&(t.flags|=128,n=!0,ds(o,!1),t.lanes=4194304)}else{if(!n)if(e=pc(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ds(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Se)return ft(t),null}else 2*je()-o.renderingStartTime>Po&&r!==1073741824&&(t.flags|=128,n=!0,ds(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(r=o.last,r!==null?r.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=je(),t.sibling=null,r=Ae.current,be(Ae,n?r&1|2:r&1),t):(ft(t),null);case 22:case 23:return qh(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Lt&1073741824&&(ft(t),t.subtreeFlags&6&&(t.flags|=8192)):ft(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function w3(e,t){switch(Th(t),t.tag){case 1:return At(t.type)&&ac(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return To(),_e(Et),_e(pt),jh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mh(t),null;case 13:if(_e(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Ao()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(Ae),null;case 4:return To(),null;case 10:return Ih(t.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var fl=!1,ht=!1,x3=typeof WeakSet=="function"?WeakSet:Set,F=null;function lo(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Le(e,t,n)}else r.current=null}function hf(e,t,r){try{r()}catch(n){Le(e,t,n)}}var vg=!1;function _3(e,t){if(Gd=nc,e=by(),Ah(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,a=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==r||i!==0&&f.nodeType!==3||(l=s+i),f!==o||n!==0&&f.nodeType!==3||(a=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===e)break t;if(h===r&&++c===i&&(l=s),h===o&&++d===n&&(a=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}r=l===-1||a===-1?null:{start:l,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(qd={focusedElem:e,selectionRange:r},nc=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,b=t.stateNode,m=b.getSnapshotBeforeUpdate(t.elementType===t.type?x:cr(t.type,x),S);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){Le(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return v=vg,vg=!1,v}function Ns(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&hf(t,r,o)}i=i.next}while(i!==n)}}function Kc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function pf(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function gb(e){var t=e.alternate;t!==null&&(e.alternate=null,gb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Cr],delete t[na],delete t[Jd],delete t[i3],delete t[o3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vb(e){return e.tag===5||e.tag===3||e.tag===4}function yg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mf(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=sc));else if(n!==4&&(e=e.child,e!==null))for(mf(e,t,r),e=e.sibling;e!==null;)mf(e,t,r),e=e.sibling}function gf(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(gf(e,t,r),e=e.sibling;e!==null;)gf(e,t,r),e=e.sibling}var it=null,ur=!1;function yn(e,t,r){for(r=r.child;r!==null;)yb(e,t,r),r=r.sibling}function yb(e,t,r){if($r&&typeof $r.onCommitFiberUnmount=="function")try{$r.onCommitFiberUnmount(Mc,r)}catch{}switch(r.tag){case 5:ht||lo(r,t);case 6:var n=it,i=ur;it=null,yn(e,t,r),it=n,ur=i,it!==null&&(ur?(e=it,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):it.removeChild(r.stateNode));break;case 18:it!==null&&(ur?(e=it,r=r.stateNode,e.nodeType===8?Wu(e.parentNode,r):e.nodeType===1&&Wu(e,r),Zs(e)):Wu(it,r.stateNode));break;case 4:n=it,i=ur,it=r.stateNode.containerInfo,ur=!0,yn(e,t,r),it=n,ur=i;break;case 0:case 11:case 14:case 15:if(!ht&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&hf(r,t,s),i=i.next}while(i!==n)}yn(e,t,r);break;case 1:if(!ht&&(lo(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Le(r,t,l)}yn(e,t,r);break;case 21:yn(e,t,r);break;case 22:r.mode&1?(ht=(n=ht)||r.memoizedState!==null,yn(e,t,r),ht=n):yn(e,t,r);break;default:yn(e,t,r)}}function bg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new x3),t.forEach(function(n){var i=O3.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function ar(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,ur=!1;break e;case 3:it=l.stateNode.containerInfo,ur=!0;break e;case 4:it=l.stateNode.containerInfo,ur=!0;break e}l=l.return}if(it===null)throw Error(P(160));yb(o,s,i),it=null,ur=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){Le(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bb(t,e),t=t.sibling}function bb(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ar(t,e),xr(e),n&4){try{Ns(3,e,e.return),Kc(3,e)}catch(x){Le(e,e.return,x)}try{Ns(5,e,e.return)}catch(x){Le(e,e.return,x)}}break;case 1:ar(t,e),xr(e),n&512&&r!==null&&lo(r,r.return);break;case 5:if(ar(t,e),xr(e),n&512&&r!==null&&lo(r,r.return),e.flags&32){var i=e.stateNode;try{Xs(i,"")}catch(x){Le(e,e.return,x)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&F0(i,o),jd(l,s);var c=jd(l,o);for(s=0;s<a.length;s+=2){var d=a[s],f=a[s+1];d==="style"?W0(i,f):d==="dangerouslySetInnerHTML"?H0(i,f):d==="children"?Xs(i,f):mh(i,d,f,c)}switch(l){case"input":Id(i,o);break;case"textarea":B0(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?go(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?go(i,!!o.multiple,o.defaultValue,!0):go(i,!!o.multiple,o.multiple?[]:"",!1))}i[na]=o}catch(x){Le(e,e.return,x)}}break;case 6:if(ar(t,e),xr(e),n&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Le(e,e.return,x)}}break;case 3:if(ar(t,e),xr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Zs(t.containerInfo)}catch(x){Le(e,e.return,x)}break;case 4:ar(t,e),xr(e);break;case 13:ar(t,e),xr(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Xh=je())),n&4&&bg(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(ht=(c=ht)||d,ar(t,e),ht=c):ar(t,e),xr(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(f=F=d;F!==null;){switch(h=F,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ns(4,h,h.return);break;case 1:lo(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Le(n,r,x)}}break;case 5:lo(h,h.return);break;case 22:if(h.memoizedState!==null){xg(f);continue}}p!==null?(p.return=h,F=p):xg(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,a=f.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=U0("display",s))}catch(x){Le(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Le(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ar(t,e),xr(e),n&4&&bg(e);break;case 21:break;default:ar(t,e),xr(e)}}function xr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(vb(r)){var n=r;break e}r=r.return}throw Error(P(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Xs(i,""),n.flags&=-33);var o=yg(e);gf(e,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=yg(e);mf(e,l,s);break;default:throw Error(P(161))}}catch(a){Le(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function k3(e,t,r){F=e,wb(e)}function wb(e,t,r){for(var n=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||fl;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ht;l=fl;var c=ht;if(fl=s,(ht=a)&&!c)for(F=i;F!==null;)s=F,a=s.child,s.tag===22&&s.memoizedState!==null?_g(i):a!==null?(a.return=s,F=a):_g(i);for(;o!==null;)F=o,wb(o),o=o.sibling;F=i,fl=l,ht=c}wg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):wg(e)}}function wg(e){for(;F!==null;){var t=F;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ht||Kc(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ht)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:cr(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ng(t,o,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ng(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Zs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ht||t.flags&512&&pf(t)}catch(h){Le(t,t.return,h)}}if(t===e){F=null;break}if(r=t.sibling,r!==null){r.return=t.return,F=r;break}F=t.return}}function xg(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var r=t.sibling;if(r!==null){r.return=t.return,F=r;break}F=t.return}}function _g(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Kc(4,t)}catch(a){Le(t,r,a)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(a){Le(t,i,a)}}var o=t.return;try{pf(t)}catch(a){Le(t,o,a)}break;case 5:var s=t.return;try{pf(t)}catch(a){Le(t,s,a)}}}catch(a){Le(t,t.return,a)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var C3=Math.ceil,vc=cn.ReactCurrentDispatcher,Kh=cn.ReactCurrentOwner,Jt=cn.ReactCurrentBatchConfig,ce=0,Je=null,Ue=null,at=0,Lt=0,co=ti(0),Ye=0,ca=null,Ti=0,Yc=0,Yh=0,Ds=null,St=null,Xh=0,Po=1/0,Hr=null,yc=!1,vf=null,jn=null,hl=!1,An=null,bc=0,Ms=0,yf=null,jl=-1,Fl=0;function yt(){return ce&6?je():jl!==-1?jl:jl=je()}function Fn(e){return e.mode&1?ce&2&&at!==0?at&-at:a3.transition!==null?(Fl===0&&(Fl=ny()),Fl):(e=ge,e!==0||(e=window.event,e=e===void 0?16:uy(e.type)),e):1}function pr(e,t,r,n){if(50<Ms)throw Ms=0,yf=null,Error(P(185));Ta(e,r,n),(!(ce&2)||e!==Je)&&(e===Je&&(!(ce&2)&&(Yc|=r),Ye===4&&Sn(e,at)),zt(e,n),r===1&&ce===0&&!(t.mode&1)&&(Po=je()+500,Hc&&ri()))}function zt(e,t){var r=e.callbackNode;aS(e,t);var n=rc(e,e===Je?at:0);if(n===0)r!==null&&Om(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Om(r),t===1)e.tag===0?s3(kg.bind(null,e)):zy(kg.bind(null,e)),r3(function(){!(ce&6)&&ri()}),r=null;else{switch(iy(n)){case 1:r=wh;break;case 4:r=ty;break;case 16:r=tc;break;case 536870912:r=ry;break;default:r=tc}r=Ab(r,xb.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function xb(e,t){if(jl=-1,Fl=0,ce&6)throw Error(P(327));var r=e.callbackNode;if(xo()&&e.callbackNode!==r)return null;var n=rc(e,e===Je?at:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=wc(e,n);else{t=n;var i=ce;ce|=2;var o=kb();(Je!==e||at!==t)&&(Hr=null,Po=je()+500,wi(e,t));do try{E3();break}catch(l){_b(e,l)}while(!0);Lh(),vc.current=o,ce=i,Ue!==null?t=0:(Je=null,at=0,t=Ye)}if(t!==0){if(t===2&&(i=Ud(e),i!==0&&(n=i,t=bf(e,i))),t===1)throw r=ca,wi(e,0),Sn(e,n),zt(e,je()),r;if(t===6)Sn(e,n);else{if(i=e.current.alternate,!(n&30)&&!S3(i)&&(t=wc(e,n),t===2&&(o=Ud(e),o!==0&&(n=o,t=bf(e,o))),t===1))throw r=ca,wi(e,0),Sn(e,n),zt(e,je()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(P(345));case 2:ci(e,St,Hr);break;case 3:if(Sn(e,n),(n&130023424)===n&&(t=Xh+500-je(),10<t)){if(rc(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){yt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zd(ci.bind(null,e,St,Hr),t);break}ci(e,St,Hr);break;case 4:if(Sn(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-hr(n);o=1<<s,s=t[s],s>i&&(i=s),n&=~o}if(n=i,n=je()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*C3(n/1960))-n,10<n){e.timeoutHandle=Zd(ci.bind(null,e,St,Hr),n);break}ci(e,St,Hr);break;case 5:ci(e,St,Hr);break;default:throw Error(P(329))}}}return zt(e,je()),e.callbackNode===r?xb.bind(null,e):null}function bf(e,t){var r=Ds;return e.current.memoizedState.isDehydrated&&(wi(e,t).flags|=256),e=wc(e,t),e!==2&&(t=St,St=r,t!==null&&wf(t)),e}function wf(e){St===null?St=e:St.push.apply(St,e)}function S3(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!mr(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~Yh,t&=~Yc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-hr(t),n=1<<r;e[r]=-1,t&=~n}}function kg(e){if(ce&6)throw Error(P(327));xo();var t=rc(e,0);if(!(t&1))return zt(e,je()),null;var r=wc(e,t);if(e.tag!==0&&r===2){var n=Ud(e);n!==0&&(t=n,r=bf(e,n))}if(r===1)throw r=ca,wi(e,0),Sn(e,t),zt(e,je()),r;if(r===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ci(e,St,Hr),zt(e,je()),null}function Gh(e,t){var r=ce;ce|=1;try{return e(t)}finally{ce=r,ce===0&&(Po=je()+500,Hc&&ri())}}function Oi(e){An!==null&&An.tag===0&&!(ce&6)&&xo();var t=ce;ce|=1;var r=Jt.transition,n=ge;try{if(Jt.transition=null,ge=1,e)return e()}finally{ge=n,Jt.transition=r,ce=t,!(ce&6)&&ri()}}function qh(){Lt=co.current,_e(co)}function wi(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,t3(r)),Ue!==null)for(r=Ue.return;r!==null;){var n=r;switch(Th(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ac();break;case 3:To(),_e(Et),_e(pt),jh();break;case 5:Mh(n);break;case 4:To();break;case 13:_e(Ae);break;case 19:_e(Ae);break;case 10:Ih(n.type._context);break;case 22:case 23:qh()}r=r.return}if(Je=e,Ue=e=Bn(e.current,null),at=Lt=t,Ye=0,ca=null,Yh=Yc=Ti=0,St=Ds=null,gi!==null){for(t=0;t<gi.length;t++)if(r=gi[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}gi=null}return e}function _b(e,t){do{var r=Ue;try{if(Lh(),Nl.current=gc,mc){for(var n=ze.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}mc=!1}if(zi=0,Ze=Ke=ze=null,Rs=!1,sa=0,Kh.current=null,r===null||r.return===null){Ye=1,ca=t,Ue=null;break}e:{var o=e,s=r.return,l=r,a=t;if(t=at,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=ug(s);if(p!==null){p.flags&=-257,dg(p,s,l,o,t),p.mode&1&&cg(o,c,t),t=p,a=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(a),t.updateQueue=x}else v.add(a);break e}else{if(!(t&1)){cg(o,c,t),Qh();break e}a=Error(P(426))}}else if(Se&&l.mode&1){var S=ug(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),dg(S,s,l,o,t),Oh(Oo(a,l));break e}}o=a=Oo(a,l),Ye!==4&&(Ye=2),Ds===null?Ds=[o]:Ds.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var b=ob(o,a,t);rg(o,b);break e;case 1:l=a;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(jn===null||!jn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=sb(o,l,t);rg(o,w);break e}}o=o.return}while(o!==null)}Sb(r)}catch(C){t=C,Ue===r&&r!==null&&(Ue=r=r.return);continue}break}while(!0)}function kb(){var e=vc.current;return vc.current=gc,e===null?gc:e}function Qh(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||!(Ti&268435455)&&!(Yc&268435455)||Sn(Je,at)}function wc(e,t){var r=ce;ce|=2;var n=kb();(Je!==e||at!==t)&&(Hr=null,wi(e,t));do try{$3();break}catch(i){_b(e,i)}while(!0);if(Lh(),ce=r,vc.current=n,Ue!==null)throw Error(P(261));return Je=null,at=0,Ye}function $3(){for(;Ue!==null;)Cb(Ue)}function E3(){for(;Ue!==null&&!Z5();)Cb(Ue)}function Cb(e){var t=Eb(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?Sb(e):Ue=t,Kh.current=null}function Sb(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=w3(r,t),r!==null){r.flags&=32767,Ue=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ue=null;return}}else if(r=b3(r,t,Lt),r!==null){Ue=r;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Ye===0&&(Ye=5)}function ci(e,t,r){var n=ge,i=Jt.transition;try{Jt.transition=null,ge=1,A3(e,t,r,n)}finally{Jt.transition=i,ge=n}return null}function A3(e,t,r,n){do xo();while(An!==null);if(ce&6)throw Error(P(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(lS(e,o),e===Je&&(Ue=Je=null,at=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||hl||(hl=!0,Ab(tc,function(){return xo(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Jt.transition,Jt.transition=null;var s=ge;ge=1;var l=ce;ce|=4,Kh.current=null,_3(e,r),bb(r,e),XS(qd),nc=!!Gd,qd=Gd=null,e.current=r,k3(r),J5(),ce=l,ge=s,Jt.transition=o}else e.current=r;if(hl&&(hl=!1,An=e,bc=i),o=e.pendingLanes,o===0&&(jn=null),rS(r.stateNode),zt(e,je()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(yc)throw yc=!1,e=vf,vf=null,e;return bc&1&&e.tag!==0&&xo(),o=e.pendingLanes,o&1?e===yf?Ms++:(Ms=0,yf=e):Ms=0,ri(),null}function xo(){if(An!==null){var e=iy(bc),t=Jt.transition,r=ge;try{if(Jt.transition=null,ge=16>e?16:e,An===null)var n=!1;else{if(e=An,An=null,bc=0,ce&6)throw Error(P(331));var i=ce;for(ce|=4,F=e.current;F!==null;){var o=F,s=o.child;if(F.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(F=c;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:Ns(8,d,o)}var f=d.child;if(f!==null)f.return=d,F=f;else for(;F!==null;){d=F;var h=d.sibling,p=d.return;if(gb(d),d===c){F=null;break}if(h!==null){h.return=p,F=h;break}F=p}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}F=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,F=s;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ns(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,F=b;break e}F=o.return}}var m=e.current;for(F=m;F!==null;){s=F;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,F=y;else e:for(s=m;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Kc(9,l)}}catch(C){Le(l,l.return,C)}if(l===s){F=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,F=w;break e}F=l.return}}if(ce=i,ri(),$r&&typeof $r.onPostCommitFiberRoot=="function")try{$r.onPostCommitFiberRoot(Mc,e)}catch{}n=!0}return n}finally{ge=r,Jt.transition=t}}return!1}function Cg(e,t,r){t=Oo(r,t),t=ob(e,t,1),e=Mn(e,t,1),t=yt(),e!==null&&(Ta(e,1,t),zt(e,t))}function Le(e,t,r){if(e.tag===3)Cg(e,e,r);else for(;t!==null;){if(t.tag===3){Cg(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(jn===null||!jn.has(n))){e=Oo(r,e),e=sb(t,e,1),t=Mn(t,e,1),e=yt(),t!==null&&(Ta(t,1,e),zt(t,e));break}}t=t.return}}function z3(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&r,Je===e&&(at&r)===r&&(Ye===4||Ye===3&&(at&130023424)===at&&500>je()-Xh?wi(e,0):Yh|=r),zt(e,t)}function $b(e,t){t===0&&(e.mode&1?(t=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):t=1);var r=yt();e=Zr(e,t),e!==null&&(Ta(e,t,r),zt(e,r))}function T3(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),$b(e,r)}function O3(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(P(314))}n!==null&&n.delete(t),$b(e,r)}var Eb;Eb=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Et.current)$t=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return $t=!1,y3(e,t,r);$t=!!(e.flags&131072)}else $t=!1,Se&&t.flags&1048576&&Ty(t,uc,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ml(e,t),e=t.pendingProps;var i=Eo(t,pt.current);wo(t,r),i=Bh(null,t,n,e,i,r);var o=Vh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,At(n)?(o=!0,lc(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nh(t),i.updater=Uc,t.stateNode=i,i._reactInternals=t,sf(t,n,e,r),t=cf(null,t,n,!0,o,r)):(t.tag=0,Se&&o&&zh(t),vt(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ml(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=L3(n),e=cr(n,e),i){case 0:t=lf(null,t,n,e,r);break e;case 1:t=pg(null,t,n,e,r);break e;case 11:t=fg(null,t,n,e,r);break e;case 14:t=hg(null,t,n,cr(n.type,e),r);break e}throw Error(P(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:cr(n,i),lf(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:cr(n,i),pg(e,t,n,i,r);case 3:e:{if(ub(t),e===null)throw Error(P(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Iy(e,t),hc(t,n,null,r);var s=t.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Oo(Error(P(423)),t),t=mg(e,t,n,r,i);break e}else if(n!==i){i=Oo(Error(P(424)),t),t=mg(e,t,n,r,i);break e}else for(Nt=Dn(t.stateNode.containerInfo.firstChild),Mt=t,Se=!0,dr=null,r=My(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ao(),n===i){t=Jr(e,t,r);break e}vt(e,t,n,r)}t=t.child}return t;case 5:return jy(t),e===null&&rf(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Qd(n,i)?s=null:o!==null&&Qd(n,o)&&(t.flags|=32),cb(e,t),vt(e,t,s,r),t.child;case 6:return e===null&&rf(t),null;case 13:return db(e,t,r);case 4:return Dh(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=zo(t,null,n,r):vt(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:cr(n,i),fg(e,t,n,i,r);case 7:return vt(e,t,t.pendingProps,r),t.child;case 8:return vt(e,t,t.pendingProps.children,r),t.child;case 12:return vt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,be(dc,n._currentValue),n._currentValue=s,o!==null)if(mr(o.value,s)){if(o.children===i.children&&!Et.current){t=Jr(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===n){if(o.tag===1){a=Xr(-1,r&-r),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),nf(o.return,r,t),l.lanes|=r;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(P(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),nf(s,r,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}vt(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,wo(t,r),i=tr(i),n=n(i),t.flags|=1,vt(e,t,n,r),t.child;case 14:return n=t.type,i=cr(n,t.pendingProps),i=cr(n.type,i),hg(e,t,n,i,r);case 15:return ab(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:cr(n,i),Ml(e,t),t.tag=1,At(n)?(e=!0,lc(t)):e=!1,wo(t,r),Ny(t,n,i),sf(t,n,i,r),cf(null,t,n,!0,e,r);case 19:return fb(e,t,r);case 22:return lb(e,t,r)}throw Error(P(156,t.tag))};function Ab(e,t){return ey(e,t)}function P3(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,r,n){return new P3(e,t,r,n)}function Zh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function L3(e){if(typeof e=="function")return Zh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vh)return 11;if(e===yh)return 14}return 2}function Bn(e,t){var r=e.alternate;return r===null?(r=Zt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Bl(e,t,r,n,i,o){var s=2;if(n=e,typeof e=="function")Zh(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ji:return xi(r.children,i,o,t);case gh:s=8,i|=8;break;case zd:return e=Zt(12,r,t,i|2),e.elementType=zd,e.lanes=o,e;case Td:return e=Zt(13,r,t,i),e.elementType=Td,e.lanes=o,e;case Od:return e=Zt(19,r,t,i),e.elementType=Od,e.lanes=o,e;case D0:return Xc(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R0:s=10;break e;case N0:s=9;break e;case vh:s=11;break e;case yh:s=14;break e;case wn:s=16,n=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Zt(s,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function xi(e,t,r,n){return e=Zt(7,e,n,t),e.lanes=r,e}function Xc(e,t,r,n){return e=Zt(22,e,n,t),e.elementType=D0,e.lanes=r,e.stateNode={isHidden:!1},e}function Ju(e,t,r){return e=Zt(6,e,null,t),e.lanes=r,e}function ed(e,t,r){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function I3(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Iu(0),this.expirationTimes=Iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jh(e,t,r,n,i,o,s,l,a){return e=new I3(e,t,r,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Zt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nh(o),e}function R3(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zi,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function zb(e){if(!e)return Yn;e=e._reactInternals;e:{if(Vi(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(At(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var r=e.type;if(At(r))return Ay(e,r,t)}return t}function Tb(e,t,r,n,i,o,s,l,a){return e=Jh(r,n,!0,e,i,o,s,l,a),e.context=zb(null),r=e.current,n=yt(),i=Fn(r),o=Xr(n,i),o.callback=t??null,Mn(r,o,i),e.current.lanes=i,Ta(e,i,n),zt(e,n),e}function Gc(e,t,r,n){var i=t.current,o=yt(),s=Fn(i);return r=zb(r),t.context===null?t.context=r:t.pendingContext=r,t=Xr(o,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Mn(i,t,s),e!==null&&(pr(e,i,s,o),Rl(e,i,s)),s}function xc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ep(e,t){Sg(e,t),(e=e.alternate)&&Sg(e,t)}function N3(){return null}var Ob=typeof reportError=="function"?reportError:function(e){console.error(e)};function tp(e){this._internalRoot=e}qc.prototype.render=tp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Gc(e,t,null,null)};qc.prototype.unmount=tp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Oi(function(){Gc(null,e,null,null)}),t[Qr]=null}};function qc(e){this._internalRoot=e}qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=ay();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Cn.length&&t!==0&&t<Cn[r].priority;r++);Cn.splice(r,0,e),r===0&&cy(e)}};function rp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $g(){}function D3(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var c=xc(s);o.call(c)}}var s=Tb(t,n,e,0,null,!1,!1,"",$g);return e._reactRootContainer=s,e[Qr]=s.current,ta(e.nodeType===8?e.parentNode:e),Oi(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var c=xc(a);l.call(c)}}var a=Jh(e,0,!1,null,null,!1,!1,"",$g);return e._reactRootContainer=a,e[Qr]=a.current,ta(e.nodeType===8?e.parentNode:e),Oi(function(){Gc(t,a,r,n)}),a}function Zc(e,t,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=xc(s);l.call(a)}}Gc(t,s,e,i)}else s=D3(r,t,e,i,n);return xc(s)}oy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ys(t.pendingLanes);r!==0&&(xh(t,r|1),zt(t,je()),!(ce&6)&&(Po=je()+500,ri()))}break;case 13:Oi(function(){var n=Zr(e,1);if(n!==null){var i=yt();pr(n,e,1,i)}}),ep(e,1)}};_h=function(e){if(e.tag===13){var t=Zr(e,134217728);if(t!==null){var r=yt();pr(t,e,134217728,r)}ep(e,134217728)}};sy=function(e){if(e.tag===13){var t=Fn(e),r=Zr(e,t);if(r!==null){var n=yt();pr(r,e,t,n)}ep(e,t)}};ay=function(){return ge};ly=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}};Bd=function(e,t,r){switch(t){case"input":if(Id(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Vc(n);if(!i)throw Error(P(90));j0(n),Id(n,i)}}}break;case"textarea":B0(e,r);break;case"select":t=r.value,t!=null&&go(e,!!r.multiple,t,!1)}};X0=Gh;G0=Oi;var M3={usingClientEntryPoint:!1,Events:[Pa,no,Vc,K0,Y0,Gh]},fs={findFiberByHostInstance:mi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},j3={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Z0(e),e===null?null:e.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||N3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{Mc=pl.inject(j3),$r=pl}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M3;Kt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(t))throw Error(P(200));return R3(e,t,null,r)};Kt.createRoot=function(e,t){if(!rp(e))throw Error(P(299));var r=!1,n="",i=Ob;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Jh(e,1,!1,null,null,r,!1,n,i),e[Qr]=t.current,ta(e.nodeType===8?e.parentNode:e),new tp(t)};Kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Z0(t),e=e===null?null:e.stateNode,e};Kt.flushSync=function(e){return Oi(e)};Kt.hydrate=function(e,t,r){if(!Qc(t))throw Error(P(200));return Zc(null,e,t,!0,r)};Kt.hydrateRoot=function(e,t,r){if(!rp(e))throw Error(P(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=Ob;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Tb(t,null,e,1,r??null,i,!1,o,s),e[Qr]=t.current,ta(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new qc(t)};Kt.render=function(e,t,r){if(!Qc(t))throw Error(P(200));return Zc(null,e,t,!1,r)};Kt.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(P(40));return e._reactRootContainer?(Oi(function(){Zc(null,null,e,!1,function(){e._reactRootContainer=null,e[Qr]=null})}),!0):!1};Kt.unstable_batchedUpdates=Gh;Kt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Qc(r))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Zc(e,t,r,!1,n)};Kt.version="18.2.0-next-9e3b772b8-20220608";function Pb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pb)}catch(e){console.error(e)}}Pb(),T0.exports=Kt;var Lb=T0.exports;const uo=Aa(Lb);var Eg=Lb;Ed.createRoot=Eg.createRoot,Ed.hydrateRoot=Eg.hydrateRoot;var Ib={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var o="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(o=i(o,n(l)))}return o}function n(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var l in o)t.call(o,l)&&o[l]&&(s=i(s,l));return s}function i(o,s){return s?o?o+" "+s:o+s:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Ib);var F3=Ib.exports;const Q=Aa(F3),B3=["as","disabled"];function V3(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function H3(e){return!e||e.trim()==="#"}function np({tagName:e,disabled:t,href:r,target:n,rel:i,role:o,onClick:s,tabIndex:l=0,type:a}){e||(r!=null||n!=null||i!=null?e="a":e="button");const c={tagName:e};if(e==="button")return[{type:a||"button",disabled:t},c];const d=h=>{if((t||e==="a"&&H3(r))&&h.preventDefault(),t){h.stopPropagation();return}s==null||s(h)},f=h=>{h.key===" "&&(h.preventDefault(),d(h))};return e==="a"&&(r||(r="#"),t&&(r=void 0)),[{role:o??"button",disabled:void 0,tabIndex:t?void 0:l,href:r,target:e==="a"?n:void 0,"aria-disabled":t||void 0,rel:e==="a"?i:void 0,onClick:d,onKeyDown:f},c]}const ip=_.forwardRef((e,t)=>{let{as:r,disabled:n}=e,i=V3(e,B3);const[o,{tagName:s}]=np(Object.assign({tagName:r,disabled:n},i));return k.jsx(s,Object.assign({},i,o,{ref:t}))});ip.displayName="Button";const U3=["xxl","xl","lg","md","sm","xs"],W3="xs",Jc=_.createContext({prefixes:{},breakpoints:U3,minBreakpoint:W3});function ee(e,t){const{prefixes:r}=_.useContext(Jc);return e||r[t]||t}function K3(){const{breakpoints:e}=_.useContext(Jc);return e}function Y3(){const{minBreakpoint:e}=_.useContext(Jc);return e}function Rb(){const{dir:e}=_.useContext(Jc);return e==="rtl"}const Nb=_.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:n,active:i=!1,disabled:o=!1,className:s,...l},a)=>{const c=ee(t,"btn"),[d,{tagName:f}]=np({tagName:e,disabled:o,...l}),h=f;return k.jsx(h,{...d,...l,ref:a,disabled:o,className:Q(s,c,i&&"active",r&&`${c}-${r}`,n&&`${c}-${n}`,l.href&&o&&"disabled")})});Nb.displayName="Button";const Be=Nb,Yo=!!(typeof window<"u"&&window.document&&window.document.createElement);var xf=!1,_f=!1;try{var td={get passive(){return xf=!0},get once(){return _f=xf=!0}};Yo&&(window.addEventListener("test",td,td),window.removeEventListener("test",td,!0))}catch{}function op(e,t,r,n){if(n&&typeof n!="boolean"&&!_f){var i=n.once,o=n.capture,s=r;!_f&&i&&(s=r.__once||function l(a){this.removeEventListener(t,l,o),r.call(this,a)},r.__once=s),e.addEventListener(t,s,xf?n:o)}e.addEventListener(t,r,n)}function Ia(e){return e&&e.ownerDocument||document}function kf(e,t,r,n){var i=n&&typeof n!="boolean"?n.capture:n;e.removeEventListener(t,r,i),r.__once&&e.removeEventListener(t,r.__once,i)}var ml;function Ag(e){if((!ml&&ml!==0||e)&&Yo){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),ml=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return ml}function Db(){return _.useState(null)}function X3(e){const t=_.useRef(e);return _.useEffect(()=>{t.current=e},[e]),t}function Fe(e){const t=X3(e);return _.useCallback(function(...r){return t.current&&t.current(...r)},[t])}const zg=e=>!e||typeof e=="function"?e:t=>{e.current=t};function G3(e,t){const r=zg(e),n=zg(t);return i=>{r&&r(i),n&&n(i)}}function ni(e,t){return _.useMemo(()=>G3(e,t),[e,t])}function q3(e){const t=_.useRef(e);return t.current=e,t}function Mb(e){const t=q3(e);_.useEffect(()=>()=>t.current(),[])}function Q3(e){var t=Ia(e);return t&&t.defaultView||window}function Z3(e,t){return Q3(e).getComputedStyle(e,t)}var J3=/([A-Z])/g;function e$(e){return e.replace(J3,"-$1").toLowerCase()}var t$=/^ms-/;function gl(e){return e$(e).replace(t$,"-ms-")}var r$=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function n$(e){return!!(e&&r$.test(e))}function _i(e,t){var r="",n="";if(typeof t=="string")return e.style.getPropertyValue(gl(t))||Z3(e).getPropertyValue(gl(t));Object.keys(t).forEach(function(i){var o=t[i];!o&&o!==0?e.style.removeProperty(gl(i)):n$(i)?n+=i+"("+o+") ":r+=gl(i)+": "+o+";"}),n&&(r+="transform: "+n+";"),e.style.cssText+=";"+r}function zn(e,t,r,n){return op(e,t,r,n),function(){kf(e,t,r,n)}}function i$(e,t,r,n){if(r===void 0&&(r=!1),n===void 0&&(n=!0),e){var i=document.createEvent("HTMLEvents");i.initEvent(t,r,n),e.dispatchEvent(i)}}function o$(e){var t=_i(e,"transitionDuration")||"",r=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*r}function s$(e,t,r){r===void 0&&(r=5);var n=!1,i=setTimeout(function(){n||i$(e,"transitionend",!0)},t+r),o=zn(e,"transitionend",function(){n=!0},{once:!0});return function(){clearTimeout(i),o()}}function jb(e,t,r,n){r==null&&(r=o$(e)||0);var i=s$(e,r,n),o=zn(e,"transitionend",t);return function(){i(),o()}}function rd(e){e===void 0&&(e=Ia());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function _c(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function Fb(){const e=_.useRef(!0),t=_.useRef(()=>e.current);return _.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function Bb(e){const t=_.useRef(null);return _.useEffect(()=>{t.current=e}),t.current}const a$="data-rr-ui-",l$="rrUi";function Xo(e){return`${a$}${e}`}function c$(e){return`${l$}${e}`}function u$(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const Tg=Xo("modal-open");class d${constructor({ownerDocument:t,handleContainerOverflow:r=!0,isRTL:n=!1}={}){this.handleContainerOverflow=r,this.isRTL=n,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return u$(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const r={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();t.style={overflow:i.style.overflow,[n]:i.style[n]},t.scrollBarWidth&&(r[n]=`${parseInt(_i(i,n)||"0",10)+t.scrollBarWidth}px`),i.setAttribute(Tg,""),_i(i,r)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const r=this.getElement();r.removeAttribute(Tg),Object.assign(r.style,t.style)}add(t){let r=this.modals.indexOf(t);return r!==-1||(r=this.modals.length,this.modals.push(t),this.setModalAttributes(t),r!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),r}remove(t){const r=this.modals.indexOf(t);r!==-1&&(this.modals.splice(r,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const sp=d$,Vb=_.createContext(Yo?window:void 0);Vb.Provider;function eu(){return _.useContext(Vb)}const nd=(e,t)=>Yo?e==null?(t||Ia()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function f$(e,t){const r=eu(),[n,i]=_.useState(()=>nd(e,r==null?void 0:r.document));if(!n){const o=nd(e);o&&i(o)}return _.useEffect(()=>{t&&n&&t(n)},[t,n]),_.useEffect(()=>{const o=nd(e);o!==n&&i(o)},[e,n]),n}const h$=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",p$=typeof document<"u",Cf=p$||h$?_.useLayoutEffect:_.useEffect;function m$({children:e,in:t,onExited:r,mountOnEnter:n,unmountOnExit:i}){const o=_.useRef(null),s=_.useRef(t),l=Fe(r);_.useEffect(()=>{t?s.current=!0:l(o.current)},[t,l]);const a=ni(o,e.ref),c=_.cloneElement(e,{ref:a});return t?c:i||!s.current&&n?null:c}const g$=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function v$(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function y$(e){let{onEnter:t,onEntering:r,onEntered:n,onExit:i,onExiting:o,onExited:s,addEndListener:l,children:a}=e,c=v$(e,g$);const d=_.useRef(null),f=ni(d,typeof a=="function"?null:a.ref),h=w=>C=>{w&&d.current&&w(d.current,C)},p=_.useCallback(h(t),[t]),v=_.useCallback(h(r),[r]),x=_.useCallback(h(n),[n]),S=_.useCallback(h(i),[i]),b=_.useCallback(h(o),[o]),m=_.useCallback(h(s),[s]),y=_.useCallback(h(l),[l]);return Object.assign({},c,{nodeRef:d},t&&{onEnter:p},r&&{onEntering:v},n&&{onEntered:x},i&&{onExit:S},o&&{onExiting:b},s&&{onExited:m},l&&{addEndListener:y},{children:typeof a=="function"?(w,C)=>a(w,Object.assign({},C,{ref:f})):_.cloneElement(a,{ref:f})})}const b$=["component"];function w$(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}const x$=_.forwardRef((e,t)=>{let{component:r}=e,n=w$(e,b$);const i=y$(n);return k.jsx(r,Object.assign({ref:t},i))}),_$=x$;function k$({in:e,onTransition:t}){const r=_.useRef(null),n=_.useRef(!0),i=Fe(t);return Cf(()=>{if(!r.current)return;let o=!1;return i({in:e,element:r.current,initial:n.current,isStale:()=>o}),()=>{o=!0}},[e,i]),Cf(()=>(n.current=!1,()=>{n.current=!0}),[]),r}function C$({children:e,in:t,onExited:r,onEntered:n,transition:i}){const[o,s]=_.useState(!t);t&&o&&s(!1);const l=k$({in:!!t,onTransition:c=>{const d=()=>{c.isStale()||(c.in?n==null||n(c.element,c.initial):(s(!0),r==null||r(c.element)))};Promise.resolve(i(c)).then(d,f=>{throw c.in||s(!0),f})}}),a=ni(l,e.ref);return o&&!t?null:_.cloneElement(e,{ref:a})}function Og(e,t,r){return e?k.jsx(_$,Object.assign({},r,{component:e})):t?k.jsx(C$,Object.assign({},r,{transition:t})):k.jsx(m$,Object.assign({},r))}function S$(e){return e.code==="Escape"||e.keyCode===27}const $$=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function E$(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}let id;function A$(e){return id||(id=new sp({ownerDocument:e==null?void 0:e.document})),id}function z$(e){const t=eu(),r=e||A$(t),n=_.useRef({dialog:null,backdrop:null});return Object.assign(n.current,{add:()=>r.add(n.current),remove:()=>r.remove(n.current),isTopModal:()=>r.isTopModal(n.current),setDialogRef:_.useCallback(i=>{n.current.dialog=i},[]),setBackdropRef:_.useCallback(i=>{n.current.backdrop=i},[])})}const Hb=_.forwardRef((e,t)=>{let{show:r=!1,role:n="dialog",className:i,style:o,children:s,backdrop:l=!0,keyboard:a=!0,onBackdropClick:c,onEscapeKeyDown:d,transition:f,runTransition:h,backdropTransition:p,runBackdropTransition:v,autoFocus:x=!0,enforceFocus:S=!0,restoreFocus:b=!0,restoreFocusOptions:m,renderDialog:y,renderBackdrop:w=ye=>k.jsx("div",Object.assign({},ye)),manager:C,container:$,onShow:E,onHide:A=()=>{},onExit:T,onExited:z,onExiting:N,onEnter:D,onEntering:Y,onEntered:Z}=e,re=E$(e,$$);const J=eu(),oe=f$($),L=z$(C),K=Fb(),H=Bb(r),[ne,ue]=_.useState(!r),Ve=_.useRef(null);_.useImperativeHandle(t,()=>L,[L]),Yo&&!H&&r&&(Ve.current=rd(J==null?void 0:J.document)),r&&ne&&ue(!1);const Ee=Fe(()=>{if(L.add(),fn.current=zn(document,"keydown",sr),jr.current=zn(document,"focus",()=>setTimeout(nt),!0),E&&E(),x){var ye,si;const vn=rd((ye=(si=L.dialog)==null?void 0:si.ownerDocument)!=null?ye:J==null?void 0:J.document);L.dialog&&vn&&!_c(L.dialog,vn)&&(Ve.current=vn,L.dialog.focus())}}),Qe=Fe(()=>{if(L.remove(),fn.current==null||fn.current(),jr.current==null||jr.current(),b){var ye;(ye=Ve.current)==null||ye.focus==null||ye.focus(m),Ve.current=null}});_.useEffect(()=>{!r||!oe||Ee()},[r,oe,Ee]),_.useEffect(()=>{ne&&Qe()},[ne,Qe]),Mb(()=>{Qe()});const nt=Fe(()=>{if(!S||!K()||!L.isTopModal())return;const ye=rd(J==null?void 0:J.document);L.dialog&&ye&&!_c(L.dialog,ye)&&L.dialog.focus()}),kt=Fe(ye=>{ye.target===ye.currentTarget&&(c==null||c(ye),l===!0&&A())}),sr=Fe(ye=>{a&&S$(ye)&&L.isTopModal()&&(d==null||d(ye),ye.defaultPrevented||A())}),jr=_.useRef(),fn=_.useRef(),hn=(...ye)=>{ue(!0),z==null||z(...ye)};if(!oe)return null;const pn=Object.assign({role:n,ref:L.setDialogRef,"aria-modal":n==="dialog"?!0:void 0},re,{style:o,className:i,tabIndex:-1});let mn=y?y(pn):k.jsx("div",Object.assign({},pn,{children:_.cloneElement(s,{role:"document"})}));mn=Og(f,h,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:T,onExiting:N,onExited:hn,onEnter:D,onEntering:Y,onEntered:Z,children:mn});let gn=null;return l&&(gn=w({ref:L.setBackdropRef,onClick:kt}),gn=Og(p,v,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:gn})),k.jsx(k.Fragment,{children:uo.createPortal(k.jsxs(k.Fragment,{children:[gn,mn]}),oe)})});Hb.displayName="Modal";const T$=Object.assign(Hb,{Manager:sp});function O$(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function P$(e,t){e.classList?e.classList.add(t):O$(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}var L$=Function.prototype.bind.call(Function.prototype.call,[].slice);function Wr(e,t){return L$(e.querySelectorAll(t))}function Pg(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function I$(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Pg(e.className,t):e.setAttribute("class",Pg(e.className&&e.className.baseVal||"",t))}const Yi={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class R$ extends sp{adjustAndStore(t,r,n){const i=r.style[t];r.dataset[t]=i,_i(r,{[t]:`${parseFloat(_i(r,t))+n}px`})}restore(t,r){const n=r.dataset[t];n!==void 0&&(delete r.dataset[t],_i(r,{[t]:n}))}setContainerStyle(t){super.setContainerStyle(t);const r=this.getElement();if(P$(r,"modal-open"),!t.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Wr(r,Yi.FIXED_CONTENT).forEach(o=>this.adjustAndStore(n,o,t.scrollBarWidth)),Wr(r,Yi.STICKY_CONTENT).forEach(o=>this.adjustAndStore(i,o,-t.scrollBarWidth)),Wr(r,Yi.NAVBAR_TOGGLER).forEach(o=>this.adjustAndStore(i,o,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const r=this.getElement();I$(r,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Wr(r,Yi.FIXED_CONTENT).forEach(o=>this.restore(n,o)),Wr(r,Yi.STICKY_CONTENT).forEach(o=>this.restore(i,o)),Wr(r,Yi.NAVBAR_TOGGLER).forEach(o=>this.restore(i,o))}}let od;function N$(e){return od||(od=new R$(e)),od}function Ub(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Sf(e,t){return Sf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Sf(e,t)}function D$(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Sf(e,t)}var Wb={exports:{}},M$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",j$=M$,F$=j$;function Kb(){}function Yb(){}Yb.resetWarningCache=Kb;var B$=function(){function e(n,i,o,s,l,a){if(a!==F$){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Yb,resetWarningCache:Kb};return r.PropTypes=r,r};Wb.exports=B$();var V$=Wb.exports;const M=Aa(V$),Lg={disabled:!1},Xb=ot.createContext(null);var H$=function(t){return t.scrollTop},ws="unmounted",ui="exited",_n="entering",fi="entered",$f="exiting",un=function(e){D$(t,e);function t(n,i){var o;o=e.call(this,n,i)||this;var s=i,l=s&&!s.isMounting?n.enter:n.appear,a;return o.appearStatus=null,n.in?l?(a=ui,o.appearStatus=_n):a=fi:n.unmountOnExit||n.mountOnEnter?a=ws:a=ui,o.state={status:a},o.nextCallback=null,o}t.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===ws?{status:ui}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==_n&&s!==fi&&(o=_n):(s===_n||s===fi)&&(o=$f)}this.updateStatus(!1,o)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var i=this.props.timeout,o,s,l;return o=s=l=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,l=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:l}},r.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===_n){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:uo.findDOMNode(this);s&&H$(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ui&&this.setState({status:ws})},r.performEnter=function(i){var o=this,s=this.props.enter,l=this.context?this.context.isMounting:i,a=this.props.nodeRef?[l]:[uo.findDOMNode(this),l],c=a[0],d=a[1],f=this.getTimeouts(),h=l?f.appear:f.enter;if(!i&&!s||Lg.disabled){this.safeSetState({status:fi},function(){o.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:_n},function(){o.props.onEntering(c,d),o.onTransitionEnd(h,function(){o.safeSetState({status:fi},function(){o.props.onEntered(c,d)})})})},r.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),l=this.props.nodeRef?void 0:uo.findDOMNode(this);if(!o||Lg.disabled){this.safeSetState({status:ui},function(){i.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:$f},function(){i.props.onExiting(l),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:ui},function(){i.props.onExited(l)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},r.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(l){s&&(s=!1,o.nextCallback=null,i(l))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:uo.findDOMNode(this),l=i==null&&!this.props.addEndListener;if(!s||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=a[0],d=a[1];this.props.addEndListener(c,d)}i!=null&&setTimeout(this.nextCallback,i)},r.render=function(){var i=this.state.status;if(i===ws)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var l=Ub(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ot.createElement(Xb.Provider,{value:null},typeof s=="function"?s(i,l):ot.cloneElement(ot.Children.only(s),l))},t}(ot.Component);un.contextType=Xb;un.propTypes={};function Xi(){}un.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Xi,onEntering:Xi,onEntered:Xi,onExit:Xi,onExiting:Xi,onExited:Xi};un.UNMOUNTED=ws;un.EXITED=ui;un.ENTERING=_n;un.ENTERED=fi;un.EXITING=$f;const U$=un;function Ig(e,t){const r=_i(e,t)||"",n=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*n}function W$(e,t){const r=Ig(e,"transitionDuration"),n=Ig(e,"transitionDelay"),i=jb(e,o=>{o.target===e&&(i(),t(o))},r+n)}function K$(e){e.offsetHeight}function Y$(e){return e&&"setState"in e?uo.findDOMNode(e):e??null}const X$=ot.forwardRef(({onEnter:e,onEntering:t,onEntered:r,onExit:n,onExiting:i,onExited:o,addEndListener:s,children:l,childRef:a,...c},d)=>{const f=_.useRef(null),h=ni(f,a),p=$=>{h(Y$($))},v=$=>E=>{$&&f.current&&$(f.current,E)},x=_.useCallback(v(e),[e]),S=_.useCallback(v(t),[t]),b=_.useCallback(v(r),[r]),m=_.useCallback(v(n),[n]),y=_.useCallback(v(i),[i]),w=_.useCallback(v(o),[o]),C=_.useCallback(v(s),[s]);return k.jsx(U$,{ref:d,...c,onEnter:x,onEntered:b,onEntering:S,onExit:m,onExited:w,onExiting:y,addEndListener:C,nodeRef:f,children:typeof l=="function"?($,E)=>l($,{...E,ref:p}):ot.cloneElement(l,{ref:p})})}),G$=X$,q$={[_n]:"show",[fi]:"show"},Gb=_.forwardRef(({className:e,children:t,transitionClasses:r={},onEnter:n,...i},o)=>{const s={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},l=_.useCallback((a,c)=>{K$(a),n==null||n(a,c)},[n]);return k.jsx(G$,{ref:o,addEndListener:W$,...s,onEnter:l,childRef:t.ref,children:(a,c)=>_.cloneElement(t,{...c,className:Q("fade",e,t.props.className,q$[a],r[a])})})});Gb.displayName="Fade";const qb=Gb,Qb=_.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=ee(t,"modal-body"),k.jsx(r,{ref:i,className:Q(e,t),...n})));Qb.displayName="ModalBody";const Q$=Qb,Z$=_.createContext({onHide(){}}),Zb=Z$,Jb=_.forwardRef(({bsPrefix:e,className:t,contentClassName:r,centered:n,size:i,fullscreen:o,children:s,scrollable:l,...a},c)=>{e=ee(e,"modal");const d=`${e}-dialog`,f=typeof o=="string"?`${e}-fullscreen-${o}`:`${e}-fullscreen`;return k.jsx("div",{...a,ref:c,className:Q(d,t,i&&`${e}-${i}`,n&&`${d}-centered`,l&&`${d}-scrollable`,o&&f),children:k.jsx("div",{className:Q(`${e}-content`,r),children:s})})});Jb.displayName="ModalDialog";const e1=Jb,t1=_.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=ee(t,"modal-footer"),k.jsx(r,{ref:i,className:Q(e,t),...n})));t1.displayName="ModalFooter";const J$=t1,e4={"aria-label":M.string,onClick:M.func,variant:M.oneOf(["white"])},ap=_.forwardRef(({className:e,variant:t,"aria-label":r="Close",...n},i)=>k.jsx("button",{ref:i,type:"button",className:Q("btn-close",t&&`btn-close-${t}`,e),"aria-label":r,...n}));ap.displayName="CloseButton";ap.propTypes=e4;const t4=ap,r4=_.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:r=!1,onHide:n,children:i,...o},s)=>{const l=_.useContext(Zb),a=Fe(()=>{l==null||l.onHide(),n==null||n()});return k.jsxs("div",{ref:s,...o,children:[i,r&&k.jsx(t4,{"aria-label":e,variant:t,onClick:a})]})}),n4=r4,r1=_.forwardRef(({bsPrefix:e,className:t,closeLabel:r="Close",closeButton:n=!1,...i},o)=>(e=ee(e,"modal-header"),k.jsx(n4,{ref:o,...i,className:Q(t,e),closeLabel:r,closeButton:n})));r1.displayName="ModalHeader";const i4=r1,lp=e=>_.forwardRef((t,r)=>k.jsx("div",{...t,ref:r,className:Q(t.className,e)})),o4=lp("h4"),n1=_.forwardRef(({className:e,bsPrefix:t,as:r=o4,...n},i)=>(t=ee(t,"modal-title"),k.jsx(r,{ref:i,className:Q(e,t),...n})));n1.displayName="ModalTitle";const s4=n1;function a4(e){return k.jsx(qb,{...e,timeout:null})}function l4(e){return k.jsx(qb,{...e,timeout:null})}const i1=_.forwardRef(({bsPrefix:e,className:t,style:r,dialogClassName:n,contentClassName:i,children:o,dialogAs:s=e1,"data-bs-theme":l,"aria-labelledby":a,"aria-describedby":c,"aria-label":d,show:f=!1,animation:h=!0,backdrop:p=!0,keyboard:v=!0,onEscapeKeyDown:x,onShow:S,onHide:b,container:m,autoFocus:y=!0,enforceFocus:w=!0,restoreFocus:C=!0,restoreFocusOptions:$,onEntered:E,onExit:A,onExiting:T,onEnter:z,onEntering:N,onExited:D,backdropClassName:Y,manager:Z,...re},J)=>{const[oe,L]=_.useState({}),[K,H]=_.useState(!1),ne=_.useRef(!1),ue=_.useRef(!1),Ve=_.useRef(null),[Ee,Qe]=Db(),nt=ni(J,Qe),kt=Fe(b),sr=Rb();e=ee(e,"modal");const jr=_.useMemo(()=>({onHide:kt}),[kt]);function fn(){return Z||N$({isRTL:sr})}function hn(le){if(!Yo)return;const Br=fn().getScrollbarWidth()>0,Qo=le.scrollHeight>Ia(le).documentElement.clientHeight;L({paddingRight:Br&&!Qo?Ag():void 0,paddingLeft:!Br&&Qo?Ag():void 0})}const pn=Fe(()=>{Ee&&hn(Ee.dialog)});Mb(()=>{kf(window,"resize",pn),Ve.current==null||Ve.current()});const mn=()=>{ne.current=!0},gn=le=>{ne.current&&Ee&&le.target===Ee.dialog&&(ue.current=!0),ne.current=!1},ye=()=>{H(!0),Ve.current=jb(Ee.dialog,()=>{H(!1)})},si=le=>{le.target===le.currentTarget&&ye()},vn=le=>{if(p==="static"){si(le);return}if(ue.current||le.target!==le.currentTarget){ue.current=!1;return}b==null||b()},hu=le=>{v?x==null||x(le):(le.preventDefault(),p==="static"&&ye())},pu=(le,Br)=>{le&&hn(le),z==null||z(le,Br)},Fr=le=>{Ve.current==null||Ve.current(),A==null||A(le)},Hi=(le,Br)=>{N==null||N(le,Br),op(window,"resize",pn)},Ha=le=>{le&&(le.style.display=""),D==null||D(le),kf(window,"resize",pn)},Ua=_.useCallback(le=>k.jsx("div",{...le,className:Q(`${e}-backdrop`,Y,!h&&"show")}),[h,Y,e]),Ui={...r,...oe};Ui.display="block";const Wa=le=>k.jsx("div",{role:"dialog",...le,style:Ui,className:Q(t,e,K&&`${e}-static`,!h&&"show"),onClick:p?vn:void 0,onMouseUp:gn,"data-bs-theme":l,"aria-label":d,"aria-labelledby":a,"aria-describedby":c,children:k.jsx(s,{...re,onMouseDown:mn,className:n,contentClassName:i,children:o})});return k.jsx(Zb.Provider,{value:jr,children:k.jsx(T$,{show:f,ref:nt,backdrop:p,container:m,keyboard:!0,autoFocus:y,enforceFocus:w,restoreFocus:C,restoreFocusOptions:$,onEscapeKeyDown:hu,onShow:S,onHide:b,onEnter:pu,onEntering:Hi,onEntered:E,onExit:Fr,onExiting:T,onExited:Ha,manager:fn(),transition:h?a4:void 0,backdropTransition:h?l4:void 0,renderBackdrop:Ua,renderDialog:Wa})})});i1.displayName="Modal";const hs=Object.assign(i1,{Body:Q$,Header:i4,Title:s4,Footer:J$,Dialog:e1,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Go=({show:e,title:t,onHide:r,children:n,primaryBtnText:i,onPrimaryBtnClick:o})=>k.jsxs(hs,{show:e,onHide:r,children:[k.jsx(hs.Header,{closeButton:!0,children:t&&k.jsx(hs.Title,{children:t})}),k.jsx(hs.Body,{children:n}),k.jsxs(hs.Footer,{children:[k.jsx(Be,{variant:"secondary",onClick:r,children:"Hætta við"}),k.jsx(Be,{variant:"primary",onClick:o,children:i??"Áfram"})]})]}),Rg="time";function c4(){const[e,t]=_.useState(()=>Number(localStorage.getItem(Rg))),[r,n]=_.useState(0),i=s=>{n(s)},o=s=>{const l=e+s;return t(l),l};return _.useEffect(()=>{let s;const a=r>4?4:r,c=a===4?r/a:1;return r&&(s=setInterval(()=>t(d=>{const f=d+c;return localStorage.setItem(Rg,f.toString()),f}),1e3/a)),()=>clearInterval(s)},[r]),[e,r!==0,i,o]}class u4{constructor(t){jp(this,"key");this.key=`${t}-sequence`}get nextValue(){const t=Number(localStorage.getItem(this.key)||1);return localStorage.setItem(this.key,`${t+1}`),t}}function ps(e){const t=new u4(e),[r,n]=_.useState(JSON.parse(localStorage.getItem(e)||"[]"));return{list:r,add:s=>{const l={id:t.nextValue,...s};return n(a=>{const c=[...a,l];return localStorage.setItem(e,JSON.stringify(c)),c}),l.id},remove:s=>{n(l=>{const a=l.filter(c=>c.id!==s);return localStorage.setItem(e,JSON.stringify(a)),a})}}}const Qt={seconds:{name:"sekúndur",seconds:1},minutes:{name:"mínútur",seconds:60},hours:{name:"klukkutímar",seconds:3600},days:{name:"dagar",seconds:86400},months:{name:"mánuðir",seconds:2592e3},years:{name:"ár",seconds:31104e3}},Mr=_.createContext({}),ii=_.createContext({}),tu=_.createContext({}),ru=_.createContext({}),nu=_.createContext({}),iu=_.createContext({}),d4=[{name:"Spilunartími",speed:2},{name:"Leita að loot-i",speed:60},{name:"Montosh",speed:Qt.hours.seconds*8}],f4=[{name:"Long rest",duration:Qt.hours.seconds*8,timer:{name:"Seinast sofið",finishAfterSeconds:Qt.days.seconds}},{name:"Short rest",duration:Qt.minutes.seconds*30}],h4=[{name:"Borðað"}];function p4({children:e}){const t=localStorage.length===0,[r,n,i,o]=c4(),s=ps("logs"),l=ps("timers"),a=ps("speeds"),c=ps("durations"),d=ps("events");if(t){for(const f of d4)a.add(f);for(const{timer:f,...h}of f4){const p=c.add(h);f&&l.add({...f,durationId:p})}for(const f of h4)d.add(f)}return k.jsx(Mr.Provider,{value:{time:r,isPlaying:n,setPlaySpeed:i,addTime:o},children:k.jsx(ii.Provider,{value:s,children:k.jsx(tu.Provider,{value:l,children:k.jsx(ru.Provider,{value:a,children:k.jsx(nu.Provider,{value:c,children:k.jsx(iu.Provider,{value:d,children:e})})})})})})}const m4={type:M.string,tooltip:M.bool,as:M.elementType},cp=_.forwardRef(({as:e="div",className:t,type:r="valid",tooltip:n=!1,...i},o)=>k.jsx(e,{...i,ref:o,className:Q(t,`${r}-${n?"tooltip":"feedback"}`)}));cp.displayName="Feedback";cp.propTypes=m4;const o1=cp,g4=_.createContext({}),en=g4,s1=_.forwardRef(({id:e,bsPrefix:t,className:r,type:n="checkbox",isValid:i=!1,isInvalid:o=!1,as:s="input",...l},a)=>{const{controlId:c}=_.useContext(en);return t=ee(t,"form-check-input"),k.jsx(s,{...l,ref:a,type:n,id:e||c,className:Q(r,t,i&&"is-valid",o&&"is-invalid")})});s1.displayName="FormCheckInput";const ou=s1,a1=_.forwardRef(({bsPrefix:e,className:t,htmlFor:r,...n},i)=>{const{controlId:o}=_.useContext(en);return e=ee(e,"form-check-label"),k.jsx("label",{...n,ref:i,htmlFor:r||o,className:Q(t,e)})});a1.displayName="FormCheckLabel";const Ef=a1;function v4(e,t){let r=0;return _.Children.map(e,n=>_.isValidElement(n)?t(n,r++):n)}function y4(e,t){return _.Children.toArray(e).some(r=>_.isValidElement(r)&&r.type===t)}const l1=_.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:n=!1,reverse:i=!1,disabled:o=!1,isValid:s=!1,isInvalid:l=!1,feedbackTooltip:a=!1,feedback:c,feedbackType:d,className:f,style:h,title:p="",type:v="checkbox",label:x,children:S,as:b="input",...m},y)=>{t=ee(t,"form-check"),r=ee(r,"form-switch");const{controlId:w}=_.useContext(en),C=_.useMemo(()=>({controlId:e||w}),[w,e]),$=!S&&x!=null&&x!==!1||y4(S,Ef),E=k.jsx(ou,{...m,type:v==="switch"?"checkbox":v,ref:y,isValid:s,isInvalid:l,disabled:o,as:b});return k.jsx(en.Provider,{value:C,children:k.jsx("div",{style:h,className:Q(f,$&&t,n&&`${t}-inline`,i&&`${t}-reverse`,v==="switch"&&r),children:S||k.jsxs(k.Fragment,{children:[E,$&&k.jsx(Ef,{title:p,children:x}),c&&k.jsx(o1,{type:d,tooltip:a,children:c})]})})})});l1.displayName="FormCheck";const kc=Object.assign(l1,{Input:ou,Label:Ef});var b4=function(){},w4=b4;const x4=Aa(w4),c1=_.forwardRef(({bsPrefix:e,type:t,size:r,htmlSize:n,id:i,className:o,isValid:s=!1,isInvalid:l=!1,plaintext:a,readOnly:c,as:d="input",...f},h)=>{const{controlId:p}=_.useContext(en);return e=ee(e,"form-control"),k.jsx(d,{...f,type:t,size:n,ref:h,readOnly:c,id:i||p,className:Q(o,a?`${e}-plaintext`:e,r&&`${e}-${r}`,t==="color"&&`${e}-color`,s&&"is-valid",l&&"is-invalid")})});c1.displayName="FormControl";const _4=Object.assign(c1,{Feedback:o1}),u1=_.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=ee(t,"form-floating"),k.jsx(r,{ref:i,className:Q(e,t),...n})));u1.displayName="FormFloating";const k4=u1,d1=_.forwardRef(({controlId:e,as:t="div",...r},n)=>{const i=_.useMemo(()=>({controlId:e}),[e]);return k.jsx(en.Provider,{value:i,children:k.jsx(t,{...r,ref:n})})});d1.displayName="FormGroup";const f1=d1;function C4({as:e,bsPrefix:t,className:r,...n}){t=ee(t,"col");const i=K3(),o=Y3(),s=[],l=[];return i.forEach(a=>{const c=n[a];delete n[a];let d,f,h;typeof c=="object"&&c!=null?{span:d,offset:f,order:h}=c:d=c;const p=a!==o?`-${a}`:"";d&&s.push(d===!0?`${t}${p}`:`${t}${p}-${d}`),h!=null&&l.push(`order${p}-${h}`),f!=null&&l.push(`offset${p}-${f}`)}),[{...n,className:Q(r,...s,...l)},{as:e,bsPrefix:t,spans:s}]}const h1=_.forwardRef((e,t)=>{const[{className:r,...n},{as:i="div",bsPrefix:o,spans:s}]=C4(e);return k.jsx(i,{...n,ref:t,className:Q(r,!s.length&&o)})});h1.displayName="Col";const S4=h1,p1=_.forwardRef(({as:e="label",bsPrefix:t,column:r=!1,visuallyHidden:n=!1,className:i,htmlFor:o,...s},l)=>{const{controlId:a}=_.useContext(en);t=ee(t,"form-label");let c="col-form-label";typeof r=="string"&&(c=`${c} ${c}-${r}`);const d=Q(i,t,n&&"visually-hidden",r&&c);return o=o||a,r?k.jsx(S4,{ref:l,as:"label",className:d,htmlFor:o,...s}):k.jsx(e,{ref:l,className:d,htmlFor:o,...s})});p1.displayName="FormLabel";const $4=p1,m1=_.forwardRef(({bsPrefix:e,className:t,id:r,...n},i)=>{const{controlId:o}=_.useContext(en);return e=ee(e,"form-range"),k.jsx("input",{...n,type:"range",ref:i,className:Q(t,e),id:r||o})});m1.displayName="FormRange";const E4=m1,g1=_.forwardRef(({bsPrefix:e,size:t,htmlSize:r,className:n,isValid:i=!1,isInvalid:o=!1,id:s,...l},a)=>{const{controlId:c}=_.useContext(en);return e=ee(e,"form-select"),k.jsx("select",{...l,size:r,ref:a,className:Q(n,e,t&&`${e}-${t}`,i&&"is-valid",o&&"is-invalid"),id:s||c})});g1.displayName="FormSelect";const A4=g1,v1=_.forwardRef(({bsPrefix:e,className:t,as:r="small",muted:n,...i},o)=>(e=ee(e,"form-text"),k.jsx(r,{...i,ref:o,className:Q(t,e,n&&"text-muted")})));v1.displayName="FormText";const z4=v1,y1=_.forwardRef((e,t)=>k.jsx(kc,{...e,ref:t,type:"switch"}));y1.displayName="Switch";const T4=Object.assign(y1,{Input:kc.Input,Label:kc.Label}),b1=_.forwardRef(({bsPrefix:e,className:t,children:r,controlId:n,label:i,...o},s)=>(e=ee(e,"form-floating"),k.jsxs(f1,{ref:s,className:Q(t,e),controlId:n,...o,children:[r,k.jsx("label",{htmlFor:n,children:i})]})));b1.displayName="FloatingLabel";const O4=b1,P4={_ref:M.any,validated:M.bool,as:M.elementType},up=_.forwardRef(({className:e,validated:t,as:r="form",...n},i)=>k.jsx(r,{...n,ref:i,className:Q(e,t&&"was-validated")}));up.displayName="Form";up.propTypes=P4;const Tn=Object.assign(up,{Group:f1,Control:_4,Floating:k4,Check:kc,Switch:T4,Label:$4,Text:z4,Range:E4,Select:A4,FloatingLabel:O4});function Pi({type:e,label:t,value:r,onChange:n,placeholder:i,text:o,autoFocus:s}){const l=({currentTarget:a})=>{e==="number"?a.value?n((Number(a.value)||r)??0):n(void 0):n(a.value)};return k.jsxs(Tn.Group,{children:[t&&k.jsx(Tn.Label,{children:t}),k.jsx(Tn.Control,{autoFocus:s,type:e==="number"?"text":e,placeholder:i,value:r,onChange:l}),o&&k.jsx(Tn.Text,{className:"text-muted",children:o})]})}function L4({show:e,onHide:t}){const[r,n]=_.useState(""),{add:i}=_.useContext(ii),{time:o}=_.useContext(Mr),s=()=>{i({text:r,inGameTime:o}),l()},l=()=>{n(""),t()};return k.jsx(Go,{show:e,title:"Skrá nýjan atburð",onHide:l,primaryBtnText:"Vista",onPrimaryBtnClick:s,children:k.jsx(Pi,{label:"Heiti atburðar",value:r,onChange:n,autoFocus:!0})})}function Ng(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ng(Object(r),!0).forEach(function(n){Xe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ng(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Cc(e){"@babel/helpers - typeof";return Cc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cc(e)}function I4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Dg(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R4(e,t,r){return t&&Dg(e.prototype,t),r&&Dg(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dp(e,t){return D4(e)||j4(e,t)||w1(e,t)||B4()}function Ra(e){return N4(e)||M4(e)||w1(e)||F4()}function N4(e){if(Array.isArray(e))return Af(e)}function D4(e){if(Array.isArray(e))return e}function M4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function j4(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],i=!0,o=!1,s,l;try{for(r=r.call(e);!(i=(s=r.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(a){o=!0,l=a}finally{try{!i&&r.return!=null&&r.return()}finally{if(o)throw l}}return n}}function w1(e,t){if(e){if(typeof e=="string")return Af(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Af(e,t)}}function Af(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mg=function(){},fp={},x1={},_1=null,k1={mark:Mg,measure:Mg};try{typeof window<"u"&&(fp=window),typeof document<"u"&&(x1=document),typeof MutationObserver<"u"&&(_1=MutationObserver),typeof performance<"u"&&(k1=performance)}catch{}var V4=fp.navigator||{},jg=V4.userAgent,Fg=jg===void 0?"":jg,Xn=fp,ke=x1,Bg=_1,vl=k1;Xn.document;var dn=!!ke.documentElement&&!!ke.head&&typeof ke.addEventListener=="function"&&typeof ke.createElement=="function",C1=~Fg.indexOf("MSIE")||~Fg.indexOf("Trident/"),yl,bl,wl,xl,_l,tn="___FONT_AWESOME___",zf=16,S1="fa",$1="svg-inline--fa",Li="data-fa-i2svg",Tf="data-fa-pseudo-element",H4="data-fa-pseudo-element-pending",hp="data-prefix",pp="data-icon",Vg="fontawesome-i2svg",U4="async",W4=["HTML","HEAD","STYLE","SCRIPT"],E1=function(){try{return!0}catch{return!1}}(),xe="classic",Ie="sharp",mp=[xe,Ie];function Na(e){return new Proxy(e,{get:function(r,n){return n in r?r[n]:r[xe]}})}var ua=Na((yl={},Xe(yl,xe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Xe(yl,Ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),yl)),da=Na((bl={},Xe(bl,xe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Xe(bl,Ie,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bl)),fa=Na((wl={},Xe(wl,xe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Xe(wl,Ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),wl)),K4=Na((xl={},Xe(xl,xe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Xe(xl,Ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),xl)),Y4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,A1="fa-layers-text",X4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,G4=Na((_l={},Xe(_l,xe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Xe(_l,Ie,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),_l)),z1=[1,2,3,4,5,6,7,8,9,10],q4=z1.concat([11,12,13,14,15,16,17,18,19,20]),Q4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ha=new Set;Object.keys(da[xe]).map(ha.add.bind(ha));Object.keys(da[Ie]).map(ha.add.bind(ha));var Z4=[].concat(mp,Ra(ha),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yi.GROUP,yi.SWAP_OPACITY,yi.PRIMARY,yi.SECONDARY]).concat(z1.map(function(e){return"".concat(e,"x")})).concat(q4.map(function(e){return"w-".concat(e)})),js=Xn.FontAwesomeConfig||{};function J4(e){var t=ke.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function eE(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ke&&typeof ke.querySelector=="function"){var tE=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];tE.forEach(function(e){var t=dp(e,2),r=t[0],n=t[1],i=eE(J4(r));i!=null&&(js[n]=i)})}var T1={styleDefault:"solid",familyDefault:"classic",cssPrefix:S1,replacementClass:$1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};js.familyPrefix&&(js.cssPrefix=js.familyPrefix);var Lo=j(j({},T1),js);Lo.autoReplaceSvg||(Lo.observeMutations=!1);var U={};Object.keys(T1).forEach(function(e){Object.defineProperty(U,e,{enumerable:!0,set:function(r){Lo[e]=r,Fs.forEach(function(n){return n(U)})},get:function(){return Lo[e]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(t){Lo.cssPrefix=t,Fs.forEach(function(r){return r(U)})},get:function(){return Lo.cssPrefix}});Xn.FontAwesomeConfig=U;var Fs=[];function rE(e){return Fs.push(e),function(){Fs.splice(Fs.indexOf(e),1)}}var bn=zf,Sr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nE(e){if(!(!e||!dn)){var t=ke.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=ke.head.childNodes,n=null,i=r.length-1;i>-1;i--){var o=r[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=o)}return ke.head.insertBefore(t,n),e}}var iE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pa(){for(var e=12,t="";e-- >0;)t+=iE[Math.random()*62|0];return t}function qo(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function gp(e){return e.classList?qo(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function O1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oE(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(O1(e[r]),'" ')},"").trim()}function su(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function vp(e){return e.size!==Sr.size||e.x!==Sr.x||e.y!==Sr.y||e.rotate!==Sr.rotate||e.flipX||e.flipY}function sE(e){var t=e.transform,r=e.containerWidth,n=e.iconWidth,i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),a={transform:"".concat(o," ").concat(s," ").concat(l)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:a,path:c}}function aE(e){var t=e.transform,r=e.width,n=r===void 0?zf:r,i=e.height,o=i===void 0?zf:i,s=e.startCentered,l=s===void 0?!1:s,a="";return l&&C1?a+="translate(".concat(t.x/bn-n/2,"em, ").concat(t.y/bn-o/2,"em) "):l?a+="translate(calc(-50% + ".concat(t.x/bn,"em), calc(-50% + ").concat(t.y/bn,"em)) "):a+="translate(".concat(t.x/bn,"em, ").concat(t.y/bn,"em) "),a+="scale(".concat(t.size/bn*(t.flipX?-1:1),", ").concat(t.size/bn*(t.flipY?-1:1),") "),a+="rotate(".concat(t.rotate,"deg) "),a}var lE=`:root, :host {
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
}`;function P1(){var e=S1,t=$1,r=U.cssPrefix,n=U.replacementClass,i=lE;if(r!==e||n!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(r,"-")).replace(s,"--".concat(r,"-")).replace(l,".".concat(n))}return i}var Hg=!1;function sd(){U.autoAddCss&&!Hg&&(nE(P1()),Hg=!0)}var cE={mixout:function(){return{dom:{css:P1,insertCss:sd}}},hooks:function(){return{beforeDOMElementCreation:function(){sd()},beforeI2svg:function(){sd()}}}},rn=Xn||{};rn[tn]||(rn[tn]={});rn[tn].styles||(rn[tn].styles={});rn[tn].hooks||(rn[tn].hooks={});rn[tn].shims||(rn[tn].shims=[]);var fr=rn[tn],L1=[],uE=function e(){ke.removeEventListener("DOMContentLoaded",e),Sc=1,L1.map(function(t){return t()})},Sc=!1;dn&&(Sc=(ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ke.readyState),Sc||ke.addEventListener("DOMContentLoaded",uE));function dE(e){dn&&(Sc?setTimeout(e,0):L1.push(e))}function Da(e){var t=e.tag,r=e.attributes,n=r===void 0?{}:r,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?O1(e):"<".concat(t," ").concat(oE(n),">").concat(o.map(Da).join(""),"</").concat(t,">")}function Ug(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}var fE=function(t,r){return function(n,i,o,s){return t.call(r,n,i,o,s)}},ad=function(t,r,n,i){var o=Object.keys(t),s=o.length,l=i!==void 0?fE(r,i):r,a,c,d;for(n===void 0?(a=1,d=t[o[0]]):(a=0,d=n);a<s;a++)c=o[a],d=l(d,t[c],c,t);return d};function hE(e){for(var t=[],r=0,n=e.length;r<n;){var i=e.charCodeAt(r++);if(i>=55296&&i<=56319&&r<n){var o=e.charCodeAt(r++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),r--)}else t.push(i)}return t}function Of(e){var t=hE(e);return t.length===1?t[0].toString(16):null}function pE(e,t){var r=e.length,n=e.charCodeAt(t),i;return n>=55296&&n<=56319&&r>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function Wg(e){return Object.keys(e).reduce(function(t,r){var n=e[r],i=!!n.icon;return i?t[n.iconName]=n.icon:t[r]=n,t},{})}function Pf(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.skipHooks,i=n===void 0?!1:n,o=Wg(t);typeof fr.hooks.addPack=="function"&&!i?fr.hooks.addPack(e,Wg(t)):fr.styles[e]=j(j({},fr.styles[e]||{}),o),e==="fas"&&Pf("fa",t)}var kl,Cl,Sl,fo=fr.styles,mE=fr.shims,gE=(kl={},Xe(kl,xe,Object.values(fa[xe])),Xe(kl,Ie,Object.values(fa[Ie])),kl),yp=null,I1={},R1={},N1={},D1={},M1={},vE=(Cl={},Xe(Cl,xe,Object.keys(ua[xe])),Xe(Cl,Ie,Object.keys(ua[Ie])),Cl);function yE(e){return~Z4.indexOf(e)}function bE(e,t){var r=t.split("-"),n=r[0],i=r.slice(1).join("-");return n===e&&i!==""&&!yE(i)?i:null}var j1=function(){var t=function(o){return ad(fo,function(s,l,a){return s[a]=ad(l,o,{}),s},{})};I1=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var l=o[2].filter(function(a){return typeof a=="number"});l.forEach(function(a){i[a.toString(16)]=s})}return i}),R1=t(function(i,o,s){if(i[s]=s,o[2]){var l=o[2].filter(function(a){return typeof a=="string"});l.forEach(function(a){i[a]=s})}return i}),M1=t(function(i,o,s){var l=o[2];return i[s]=s,l.forEach(function(a){i[a]=s}),i});var r="far"in fo||U.autoFetchSvg,n=ad(mE,function(i,o){var s=o[0],l=o[1],a=o[2];return l==="far"&&!r&&(l="fas"),typeof s=="string"&&(i.names[s]={prefix:l,iconName:a}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:l,iconName:a}),i},{names:{},unicodes:{}});N1=n.names,D1=n.unicodes,yp=au(U.styleDefault,{family:U.familyDefault})};rE(function(e){yp=au(e.styleDefault,{family:U.familyDefault})});j1();function bp(e,t){return(I1[e]||{})[t]}function wE(e,t){return(R1[e]||{})[t]}function bi(e,t){return(M1[e]||{})[t]}function F1(e){return N1[e]||{prefix:null,iconName:null}}function xE(e){var t=D1[e],r=bp("fas",e);return t||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Gn(){return yp}var wp=function(){return{prefix:null,iconName:null,rest:[]}};function au(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.family,n=r===void 0?xe:r,i=ua[n][e],o=da[n][e]||da[n][i],s=e in fr.styles?e:null;return o||s||null}var Kg=(Sl={},Xe(Sl,xe,Object.keys(fa[xe])),Xe(Sl,Ie,Object.keys(fa[Ie])),Sl);function lu(e){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.skipLookups,i=n===void 0?!1:n,o=(t={},Xe(t,xe,"".concat(U.cssPrefix,"-").concat(xe)),Xe(t,Ie,"".concat(U.cssPrefix,"-").concat(Ie)),t),s=null,l=xe;(e.includes(o[xe])||e.some(function(c){return Kg[xe].includes(c)}))&&(l=xe),(e.includes(o[Ie])||e.some(function(c){return Kg[Ie].includes(c)}))&&(l=Ie);var a=e.reduce(function(c,d){var f=bE(U.cssPrefix,d);if(fo[d]?(d=gE[l].includes(d)?K4[l][d]:d,s=d,c.prefix=d):vE[l].indexOf(d)>-1?(s=d,c.prefix=au(d,{family:l})):f?c.iconName=f:d!==U.replacementClass&&d!==o[xe]&&d!==o[Ie]&&c.rest.push(d),!i&&c.prefix&&c.iconName){var h=s==="fa"?F1(c.iconName):{},p=bi(c.prefix,c.iconName);h.prefix&&(s=null),c.iconName=h.iconName||p||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!fo.far&&fo.fas&&!U.autoFetchSvg&&(c.prefix="fas")}return c},wp());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&l===Ie&&(fo.fass||U.autoFetchSvg)&&(a.prefix="fass",a.iconName=bi(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=Gn()||"fas"),a}var _E=function(){function e(){I4(this,e),this.definitions={}}return R4(e,[{key:"add",value:function(){for(var r=this,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){r.definitions[l]=j(j({},r.definitions[l]||{}),s[l]),Pf(l,s[l]);var a=fa[xe][l];a&&Pf(a,s[l]),j1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,n){var i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(function(o){var s=i[o],l=s.prefix,a=s.iconName,c=s.icon,d=c[2];r[l]||(r[l]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(r[l][f]=c)}),r[l][a]=c}),r}}]),e}(),Yg=[],ho={},_o={},kE=Object.keys(_o);function CE(e,t){var r=t.mixoutsTo;return Yg=e,ho={},Object.keys(_o).forEach(function(n){kE.indexOf(n)===-1&&delete _o[n]}),Yg.forEach(function(n){var i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(r[s]=i[s]),Cc(i[s])==="object"&&Object.keys(i[s]).forEach(function(l){r[s]||(r[s]={}),r[s][l]=i[s][l]})}),n.hooks){var o=n.hooks();Object.keys(o).forEach(function(s){ho[s]||(ho[s]=[]),ho[s].push(o[s])})}n.provides&&n.provides(_o)}),r}function Lf(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];var o=ho[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(n))}),t}function Ii(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=ho[e]||[];i.forEach(function(o){o.apply(null,r)})}function nn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return _o[e]?_o[e].apply(null,t):void 0}function If(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,r=e.prefix||Gn();if(t)return t=bi(r,t)||t,Ug(B1.definitions,r,t)||Ug(fr.styles,r,t)}var B1=new _E,SE=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,Ii("noAuto")},$E={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dn?(Ii("beforeI2svg",t),nn("pseudoElements2svg",t),nn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,dE(function(){AE({autoReplaceSvgRoot:r}),Ii("watch",t)})}},EE={icon:function(t){if(t===null)return null;if(Cc(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bi(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var r=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=au(t[0]);return{prefix:n,iconName:bi(n,r)||r}}if(typeof t=="string"&&(t.indexOf("".concat(U.cssPrefix,"-"))>-1||t.match(Y4))){var i=lu(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Gn(),iconName:bi(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=Gn();return{prefix:o,iconName:bi(o,t)||t}}}},Xt={noAuto:SE,config:U,dom:$E,parse:EE,library:B1,findIconDefinition:If,toHtml:Da},AE=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot,n=r===void 0?ke:r;(Object.keys(fr.styles).length>0||U.autoFetchSvg)&&dn&&U.autoReplaceSvg&&Xt.dom.i2svg({node:n})};function cu(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return Da(n)})}}),Object.defineProperty(e,"node",{get:function(){if(dn){var n=ke.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function zE(e){var t=e.children,r=e.main,n=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(vp(s)&&r.found&&!n.found){var l=r.width,a=r.height,c={x:l/a/2,y:.5};i.style=su(j(j({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function TE(e){var t=e.prefix,r=e.iconName,n=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(U.cssPrefix,"-").concat(r):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},i),{},{id:s}),children:n}]}]}function xp(e){var t=e.icons,r=t.main,n=t.mask,i=e.prefix,o=e.iconName,s=e.transform,l=e.symbol,a=e.title,c=e.maskId,d=e.titleId,f=e.extra,h=e.watchable,p=h===void 0?!1:h,v=n.found?n:r,x=v.width,S=v.height,b=i==="fak",m=[U.replacementClass,o?"".concat(U.cssPrefix,"-").concat(o):""].filter(function(T){return f.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(f.classes).join(" "),y={children:[],attributes:j(j({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:m,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(S)})},w=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(x/S*16*.0625,"em")}:{};p&&(y.attributes[Li]=""),a&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(d||pa())},children:[a]}),delete y.attributes.title);var C=j(j({},y),{},{prefix:i,iconName:o,main:r,mask:n,maskId:c,transform:s,symbol:l,styles:j(j({},w),f.styles)}),$=n.found&&r.found?nn("generateAbstractMask",C)||{children:[],attributes:{}}:nn("generateAbstractIcon",C)||{children:[],attributes:{}},E=$.children,A=$.attributes;return C.children=E,C.attributes=A,l?TE(C):zE(C)}function Xg(e){var t=e.content,r=e.width,n=e.height,i=e.transform,o=e.title,s=e.extra,l=e.watchable,a=l===void 0?!1:l,c=j(j(j({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});a&&(c[Li]="");var d=j({},s.styles);vp(i)&&(d.transform=aE({transform:i,startCentered:!0,width:r,height:n}),d["-webkit-transform"]=d.transform);var f=su(d);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function OE(e){var t=e.content,r=e.title,n=e.extra,i=j(j(j({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")}),o=su(n.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),r&&s.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),s}var ld=fr.styles;function Rf(e){var t=e[0],r=e[1],n=e.slice(4),i=dp(n,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(yi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(yi.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(yi.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:r,icon:s}}var PE={found:!1,width:512,height:512};function LE(e,t){!E1&&!U.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Nf(e,t){var r=t;return t==="fa"&&U.styleDefault!==null&&(t=Gn()),new Promise(function(n,i){if(nn("missingIconAbstract"),r==="fa"){var o=F1(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ld[t]&&ld[t][e]){var s=ld[t][e];return n(Rf(s))}LE(e,t),n(j(j({},PE),{},{icon:U.showMissingIcons&&e?nn("missingIconAbstract")||{}:{}}))})}var Gg=function(){},Df=U.measurePerformance&&vl&&vl.mark&&vl.measure?vl:{mark:Gg,measure:Gg},xs='FA "6.5.1"',IE=function(t){return Df.mark("".concat(xs," ").concat(t," begins")),function(){return V1(t)}},V1=function(t){Df.mark("".concat(xs," ").concat(t," ends")),Df.measure("".concat(xs," ").concat(t),"".concat(xs," ").concat(t," begins"),"".concat(xs," ").concat(t," ends"))},_p={begin:IE,end:V1},Vl=function(){};function qg(e){var t=e.getAttribute?e.getAttribute(Li):null;return typeof t=="string"}function RE(e){var t=e.getAttribute?e.getAttribute(hp):null,r=e.getAttribute?e.getAttribute(pp):null;return t&&r}function NE(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(U.replacementClass)}function DE(){if(U.autoReplaceSvg===!0)return Hl.replace;var e=Hl[U.autoReplaceSvg];return e||Hl.replace}function ME(e){return ke.createElementNS("http://www.w3.org/2000/svg",e)}function jE(e){return ke.createElement(e)}function H1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.ceFn,n=r===void 0?e.tag==="svg"?ME:jE:r;if(typeof e=="string")return ke.createTextNode(e);var i=n(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(H1(s,{ceFn:n}))}),i}function FE(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Hl={replace:function(t){var r=t[0];if(r.parentNode)if(t[1].forEach(function(i){r.parentNode.insertBefore(H1(i),r)}),r.getAttribute(Li)===null&&U.keepOriginalSource){var n=ke.createComment(FE(r));r.parentNode.replaceChild(n,r)}else r.remove()},nest:function(t){var r=t[0],n=t[1];if(~gp(r).indexOf(U.replacementClass))return Hl.replace(t);var i=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var o=n[0].attributes.class.split(" ").reduce(function(l,a){return a===U.replacementClass||a.match(i)?l.toSvg.push(a):l.toNode.push(a),l},{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",o.toNode.join(" "))}var s=n.map(function(l){return Da(l)}).join(`
`);r.setAttribute(Li,""),r.innerHTML=s}};function Qg(e){e()}function U1(e,t){var r=typeof t=="function"?t:Vl;if(e.length===0)r();else{var n=Qg;U.mutateApproach===U4&&(n=Xn.requestAnimationFrame||Qg),n(function(){var i=DE(),o=_p.begin("mutate");e.map(i),o(),r()})}}var kp=!1;function W1(){kp=!0}function Mf(){kp=!1}var $c=null;function Zg(e){if(Bg&&U.observeMutations){var t=e.treeCallback,r=t===void 0?Vl:t,n=e.nodeCallback,i=n===void 0?Vl:n,o=e.pseudoElementsCallback,s=o===void 0?Vl:o,l=e.observeMutationsRoot,a=l===void 0?ke:l;$c=new Bg(function(c){if(!kp){var d=Gn();qo(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!qg(f.addedNodes[0])&&(U.searchPseudoElements&&s(f.target),r(f.target)),f.type==="attributes"&&f.target.parentNode&&U.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&qg(f.target)&&~Q4.indexOf(f.attributeName))if(f.attributeName==="class"&&RE(f.target)){var h=lu(gp(f.target)),p=h.prefix,v=h.iconName;f.target.setAttribute(hp,p||d),v&&f.target.setAttribute(pp,v)}else NE(f.target)&&i(f.target)})}}),dn&&$c.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function BE(){$c&&$c.disconnect()}function VE(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(n,i){var o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(n[s]=l.join(":").trim()),n},{})),r}function HE(e){var t=e.getAttribute("data-prefix"),r=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",i=lu(gp(e));return i.prefix||(i.prefix=Gn()),t&&r&&(i.prefix=t,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=wE(i.prefix,e.innerText)||bp(i.prefix,Of(e.innerText))),!i.iconName&&U.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function UE(e){var t=qo(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),r=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return U.autoA11y&&(r?t["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(n||pa()):(t["aria-hidden"]="true",t.focusable="false")),t}function WE(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Sr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=HE(e),n=r.iconName,i=r.prefix,o=r.rest,s=UE(e),l=Lf("parseNodeAttributes",{},e),a=t.styleParser?VE(e):[];return j({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Sr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:a,attributes:s}},l)}var KE=fr.styles;function K1(e){var t=U.autoReplaceSvg==="nest"?Jg(e,{styleParser:!1}):Jg(e);return~t.extra.classes.indexOf(A1)?nn("generateLayersText",e,t):nn("generateSvgReplacementMutation",e,t)}var qn=new Set;mp.map(function(e){qn.add("fa-".concat(e))});Object.keys(ua[xe]).map(qn.add.bind(qn));Object.keys(ua[Ie]).map(qn.add.bind(qn));qn=Ra(qn);function ev(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dn)return Promise.resolve();var r=ke.documentElement.classList,n=function(f){return r.add("".concat(Vg,"-").concat(f))},i=function(f){return r.remove("".concat(Vg,"-").concat(f))},o=U.autoFetchSvg?qn:mp.map(function(d){return"fa-".concat(d)}).concat(Object.keys(KE));o.includes("fa")||o.push("fa");var s=[".".concat(A1,":not([").concat(Li,"])")].concat(o.map(function(d){return".".concat(d,":not([").concat(Li,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=qo(e.querySelectorAll(s))}catch{}if(l.length>0)n("pending"),i("complete");else return Promise.resolve();var a=_p.begin("onTree"),c=l.reduce(function(d,f){try{var h=K1(f);h&&d.push(h)}catch(p){E1||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise(function(d,f){Promise.all(c).then(function(h){U1(h,function(){n("active"),n("complete"),i("pending"),typeof t=="function"&&t(),a(),d()})}).catch(function(h){a(),f(h)})})}function YE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;K1(e).then(function(r){r&&U1([r],t)})}function XE(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:If(t||{}),i=r.mask;return i&&(i=(i||{}).icon?i:If(i||{})),e(n,j(j({},r),{},{mask:i}))}}var GE=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?Sr:n,o=r.symbol,s=o===void 0?!1:o,l=r.mask,a=l===void 0?null:l,c=r.maskId,d=c===void 0?null:c,f=r.title,h=f===void 0?null:f,p=r.titleId,v=p===void 0?null:p,x=r.classes,S=x===void 0?[]:x,b=r.attributes,m=b===void 0?{}:b,y=r.styles,w=y===void 0?{}:y;if(t){var C=t.prefix,$=t.iconName,E=t.icon;return cu(j({type:"icon"},t),function(){return Ii("beforeDOMElementCreation",{iconDefinition:t,params:r}),U.autoA11y&&(h?m["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(v||pa()):(m["aria-hidden"]="true",m.focusable="false")),xp({icons:{main:Rf(E),mask:a?Rf(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:$,transform:j(j({},Sr),i),symbol:s,title:h,maskId:d,titleId:v,extra:{attributes:m,styles:w,classes:S}})})}},qE={mixout:function(){return{icon:XE(GE)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=ev,r.nodeCallback=YE,r}}},provides:function(t){t.i2svg=function(r){var n=r.node,i=n===void 0?ke:n,o=r.callback,s=o===void 0?function(){}:o;return ev(i,s)},t.generateSvgReplacementMutation=function(r,n){var i=n.iconName,o=n.title,s=n.titleId,l=n.prefix,a=n.transform,c=n.symbol,d=n.mask,f=n.maskId,h=n.extra;return new Promise(function(p,v){Promise.all([Nf(i,l),d.iconName?Nf(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var S=dp(x,2),b=S[0],m=S[1];p([r,xp({icons:{main:b,mask:m},prefix:l,iconName:i,transform:a,symbol:c,maskId:f,title:o,titleId:s,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(r){var n=r.children,i=r.attributes,o=r.main,s=r.transform,l=r.styles,a=su(l);a.length>0&&(i.style=a);var c;return vp(s)&&(c=nn("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),n.push(c||o.icon),{children:n,attributes:i}}}},QE={mixout:function(){return{layer:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.classes,o=i===void 0?[]:i;return cu({type:"layer"},function(){Ii("beforeDOMElementCreation",{assembler:r,params:n});var s=[];return r(function(l){Array.isArray(l)?l.map(function(a){s=s.concat(a.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(Ra(o)).join(" ")},children:s}]})}}}},ZE={mixout:function(){return{counter:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.title,o=i===void 0?null:i,s=n.classes,l=s===void 0?[]:s,a=n.attributes,c=a===void 0?{}:a,d=n.styles,f=d===void 0?{}:d;return cu({type:"counter",content:r},function(){return Ii("beforeDOMElementCreation",{content:r,params:n}),OE({content:r.toString(),title:o,extra:{attributes:c,styles:f,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(Ra(l))}})})}}}},JE={mixout:function(){return{text:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,o=i===void 0?Sr:i,s=n.title,l=s===void 0?null:s,a=n.classes,c=a===void 0?[]:a,d=n.attributes,f=d===void 0?{}:d,h=n.styles,p=h===void 0?{}:h;return cu({type:"text",content:r},function(){return Ii("beforeDOMElementCreation",{content:r,params:n}),Xg({content:r,transform:j(j({},Sr),o),title:l,extra:{attributes:f,styles:p,classes:["".concat(U.cssPrefix,"-layers-text")].concat(Ra(c))}})})}}},provides:function(t){t.generateLayersText=function(r,n){var i=n.title,o=n.transform,s=n.extra,l=null,a=null;if(C1){var c=parseInt(getComputedStyle(r).fontSize,10),d=r.getBoundingClientRect();l=d.width/c,a=d.height/c}return U.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([r,Xg({content:r.innerHTML,width:l,height:a,transform:o,title:i,extra:s,watchable:!0})])}}},e6=new RegExp('"',"ug"),tv=[1105920,1112319];function t6(e){var t=e.replace(e6,""),r=pE(t,0),n=r>=tv[0]&&r<=tv[1],i=t.length===2?t[0]===t[1]:!1;return{value:Of(i?t[0]:t),isSecondary:n||i}}function rv(e,t){var r="".concat(H4).concat(t.replace(":","-"));return new Promise(function(n,i){if(e.getAttribute(r)!==null)return n();var o=qo(e.children),s=o.filter(function(E){return E.getAttribute(Tf)===t})[0],l=Xn.getComputedStyle(e,t),a=l.getPropertyValue("font-family").match(X4),c=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(s&&!a)return e.removeChild(s),n();if(a&&d!=="none"&&d!==""){var f=l.getPropertyValue("content"),h=~["Sharp"].indexOf(a[2])?Ie:xe,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(a[2])?da[h][a[2].toLowerCase()]:G4[h][c],v=t6(f),x=v.value,S=v.isSecondary,b=a[0].startsWith("FontAwesome"),m=bp(p,x),y=m;if(b){var w=xE(x);w.iconName&&w.prefix&&(m=w.iconName,p=w.prefix)}if(m&&!S&&(!s||s.getAttribute(hp)!==p||s.getAttribute(pp)!==y)){e.setAttribute(r,y),s&&e.removeChild(s);var C=WE(),$=C.extra;$.attributes[Tf]=t,Nf(m,p).then(function(E){var A=xp(j(j({},C),{},{icons:{main:E,mask:wp()},prefix:p,iconName:y,extra:$,watchable:!0})),T=ke.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(T,e.firstChild):e.appendChild(T),T.outerHTML=A.map(function(z){return Da(z)}).join(`
`),e.removeAttribute(r),n()}).catch(i)}else n()}else n()})}function r6(e){return Promise.all([rv(e,"::before"),rv(e,"::after")])}function n6(e){return e.parentNode!==document.head&&!~W4.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tf)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function nv(e){if(dn)return new Promise(function(t,r){var n=qo(e.querySelectorAll("*")).filter(n6).map(r6),i=_p.begin("searchPseudoElements");W1(),Promise.all(n).then(function(){i(),Mf(),t()}).catch(function(){i(),Mf(),r()})})}var i6={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=nv,r}}},provides:function(t){t.pseudoElements2svg=function(r){var n=r.node,i=n===void 0?ke:n;U.searchPseudoElements&&nv(i)}}},iv=!1,o6={mixout:function(){return{dom:{unwatch:function(){W1(),iv=!0}}}},hooks:function(){return{bootstrap:function(){Zg(Lf("mutationObserverCallbacks",{}))},noAuto:function(){BE()},watch:function(r){var n=r.observeMutationsRoot;iv?Mf():Zg(Lf("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},ov=function(t){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,i){var o=i.toLowerCase().split("-"),s=o[0],l=o.slice(1).join("-");if(s&&l==="h")return n.flipX=!0,n;if(s&&l==="v")return n.flipY=!0,n;if(l=parseFloat(l),isNaN(l))return n;switch(s){case"grow":n.size=n.size+l;break;case"shrink":n.size=n.size-l;break;case"left":n.x=n.x-l;break;case"right":n.x=n.x+l;break;case"up":n.y=n.y-l;break;case"down":n.y=n.y+l;break;case"rotate":n.rotate=n.rotate+l;break}return n},r)},s6={mixout:function(){return{parse:{transform:function(r){return ov(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,n){var i=n.getAttribute("data-fa-transform");return i&&(r.transform=ov(i)),r}}},provides:function(t){t.generateAbstractTransformGrouping=function(r){var n=r.main,i=r.transform,o=r.containerWidth,s=r.iconWidth,l={transform:"translate(".concat(o/2," 256)")},a="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(a," ").concat(c," ").concat(d)},h={transform:"translate(".concat(s/2*-1," -256)")},p={outer:l,inner:f,path:h};return{tag:"g",attributes:j({},p.outer),children:[{tag:"g",attributes:j({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:j(j({},n.icon.attributes),p.path)}]}]}}}},cd={x:0,y:0,width:"100%",height:"100%"};function sv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function a6(e){return e.tag==="g"?e.children:[e]}var l6={hooks:function(){return{parseNodeAttributes:function(r,n){var i=n.getAttribute("data-fa-mask"),o=i?lu(i.split(" ").map(function(s){return s.trim()})):wp();return o.prefix||(o.prefix=Gn()),r.mask=o,r.maskId=n.getAttribute("data-fa-mask-id"),r}}},provides:function(t){t.generateAbstractMask=function(r){var n=r.children,i=r.attributes,o=r.main,s=r.mask,l=r.maskId,a=r.transform,c=o.width,d=o.icon,f=s.width,h=s.icon,p=sE({transform:a,containerWidth:f,iconWidth:c}),v={tag:"rect",attributes:j(j({},cd),{},{fill:"white"})},x=d.children?{children:d.children.map(sv)}:{},S={tag:"g",attributes:j({},p.inner),children:[sv(j({tag:d.tag,attributes:j(j({},d.attributes),p.path)},x))]},b={tag:"g",attributes:j({},p.outer),children:[S]},m="mask-".concat(l||pa()),y="clip-".concat(l||pa()),w={tag:"mask",attributes:j(j({},cd),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,b]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:a6(h)},w]};return n.push(C,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(m,")")},cd)}),{children:n,attributes:i}}}},c6={provides:function(t){var r=!1;Xn.matchMedia&&(r=Xn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:j(j({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=j(j({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:j(j({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||l.children.push({tag:"animate",attributes:j(j({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(l),n.push({tag:"path",attributes:j(j({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:j(j({},s),{},{values:"1;0;0;0;0;1;"})}]}),r||n.push({tag:"path",attributes:j(j({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},u6={hooks:function(){return{parseNodeAttributes:function(r,n){var i=n.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return r.symbol=o,r}}}},d6=[cE,qE,QE,ZE,JE,i6,o6,s6,l6,c6,u6];CE(d6,{mixoutsTo:Xt});Xt.noAuto;Xt.config;Xt.library;Xt.dom;var jf=Xt.parse;Xt.findIconDefinition;Xt.toHtml;var f6=Xt.icon;Xt.layer;Xt.text;Xt.counter;function av(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function On(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?av(Object(r),!0).forEach(function(n){po(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):av(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ec(e){"@babel/helpers - typeof";return Ec=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ec(e)}function po(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h6(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function p6(e,t){if(e==null)return{};var r=h6(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ff(e){return m6(e)||g6(e)||v6(e)||y6()}function m6(e){if(Array.isArray(e))return Bf(e)}function g6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function v6(e,t){if(e){if(typeof e=="string")return Bf(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Bf(e,t)}}function Bf(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b6(e){var t,r=e.beat,n=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,l=e.flash,a=e.spin,c=e.spinPulse,d=e.spinReverse,f=e.pulse,h=e.fixedWidth,p=e.inverse,v=e.border,x=e.listItem,S=e.flip,b=e.size,m=e.rotation,y=e.pull,w=(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":a,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":h,"fa-inverse":p,"fa-border":v,"fa-li":x,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},po(t,"fa-".concat(b),typeof b<"u"&&b!==null),po(t,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),po(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),po(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(C){return w[C]?C:null}).filter(function(C){return C})}function w6(e){return e=e-0,e===e}function Y1(e){return w6(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var x6=["style"];function _6(e){return e.charAt(0).toUpperCase()+e.slice(1)}function k6(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var n=r.indexOf(":"),i=Y1(r.slice(0,n)),o=r.slice(n+1).trim();return i.startsWith("webkit")?t[_6(i)]=o:t[i]=o,t},{})}function X1(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(a){return X1(e,a)}),i=Object.keys(t.attributes||{}).reduce(function(a,c){var d=t.attributes[c];switch(c){case"class":a.attrs.className=d,delete t.attributes.class;break;case"style":a.attrs.style=k6(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?a.attrs[c.toLowerCase()]=d:a.attrs[Y1(c)]=d}return a},{attrs:{}}),o=r.style,s=o===void 0?{}:o,l=p6(r,x6);return i.attrs.style=On(On({},i.attrs.style),s),e.apply(void 0,[t.tag,On(On({},i.attrs),l)].concat(Ff(n)))}var G1=!1;try{G1=!0}catch{}function C6(){if(!G1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function lv(e){if(e&&Ec(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jf.icon)return jf.icon(e);if(e===null)return null;if(e&&Ec(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ud(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?po({},e,t):{}}var Ne=ot.forwardRef(function(e,t){var r=e.icon,n=e.mask,i=e.symbol,o=e.className,s=e.title,l=e.titleId,a=e.maskId,c=lv(r),d=ud("classes",[].concat(Ff(b6(e)),Ff(o.split(" ")))),f=ud("transform",typeof e.transform=="string"?jf.transform(e.transform):e.transform),h=ud("mask",lv(n)),p=f6(c,On(On(On(On({},d),f),h),{},{symbol:i,title:s,titleId:l,maskId:a}));if(!p)return C6("Could not find icon",c),null;var v=p.abstract,x={ref:t};return Object.keys(e).forEach(function(S){Ne.defaultProps.hasOwnProperty(S)||(x[S]=e[S])}),S6(v[0],x)});Ne.displayName="FontAwesomeIcon";Ne.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};Ne.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var S6=X1.bind(null,ot.createElement),q1={prefix:"fas",iconName:"hourglass-half",icon:[384,512,["hourglass-2"],"f252","M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 19-5.6 37.4-16 53H112c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9H112z"]},$6={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},E6={prefix:"fas",iconName:"forward-fast",icon:[512,512,[9197,"fast-forward"],"f050","M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4L224 297.7V416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4L448 297.7V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32V214.3L276.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S224 83.6 224 96V214.3L52.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S0 83.6 0 96V416c0 12.4 7.2 23.7 18.4 29z"]},A6={prefix:"fas",iconName:"forward",icon:[512,512,[9193],"f04e","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]},Q1={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},uu={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Ma={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};function Vf(){return Vf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Vf.apply(this,arguments)}function cv(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function z6(e){var t=T6(e,"string");return typeof t=="symbol"?t:String(t)}function T6(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function O6(e,t,r){var n=_.useRef(e!==void 0),i=_.useState(t),o=i[0],s=i[1],l=e!==void 0,a=n.current;return n.current=l,!l&&a&&o!==t&&s(t),[l?e:o,_.useCallback(function(c){for(var d=arguments.length,f=new Array(d>1?d-1:0),h=1;h<d;h++)f[h-1]=arguments[h];r&&r.apply(void 0,[c].concat(f)),s(c)},[r])]}function Z1(e,t){return Object.keys(t).reduce(function(r,n){var i,o=r,s=o[cv(n)],l=o[n],a=Ub(o,[cv(n),n].map(z6)),c=t[n],d=O6(l,s,e[c]),f=d[0],h=d[1];return Vf({},a,(i={},i[n]=f,i[c]=h,i))},e)}function P6(e,t,r,n=!1){const i=Fe(r);_.useEffect(()=>{const o=typeof e=="function"?e():e;return o.addEventListener(t,i,n),()=>o.removeEventListener(t,i,n)},[e])}const L6=["onKeyDown"];function I6(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function R6(e){return!e||e.trim()==="#"}const J1=_.forwardRef((e,t)=>{let{onKeyDown:r}=e,n=I6(e,L6);const[i]=np(Object.assign({tagName:"a"},n)),o=Fe(s=>{i.onKeyDown(s),r==null||r(s)});return R6(n.href)||n.role==="button"?k.jsx("a",Object.assign({ref:t},n,i,{onKeyDown:o})):k.jsx("a",Object.assign({ref:t},n,{onKeyDown:r}))});J1.displayName="Anchor";const N6=J1,ew=_.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=ee(t,"card-body"),k.jsx(r,{ref:i,className:Q(e,t),...n})));ew.displayName="CardBody";const Cp=ew,tw=_.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=ee(t,"card-footer"),k.jsx(r,{ref:i,className:Q(e,t),...n})));tw.displayName="CardFooter";const D6=tw,rw=_.createContext(null);rw.displayName="CardHeaderContext";const M6=rw,nw=_.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},i)=>{const o=ee(e,"card-header"),s=_.useMemo(()=>({cardHeaderBsPrefix:o}),[o]);return k.jsx(M6.Provider,{value:s,children:k.jsx(r,{ref:i,...n,className:Q(t,o)})})});nw.displayName="CardHeader";const ja=nw,iw=_.forwardRef(({bsPrefix:e,className:t,variant:r,as:n="img",...i},o)=>{const s=ee(e,"card-img");return k.jsx(n,{ref:o,className:Q(r?`${s}-${r}`:s,t),...i})});iw.displayName="CardImg";const j6=iw,ow=_.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=ee(t,"card-img-overlay"),k.jsx(r,{ref:i,className:Q(e,t),...n})));ow.displayName="CardImgOverlay";const F6=ow,sw=_.forwardRef(({className:e,bsPrefix:t,as:r="a",...n},i)=>(t=ee(t,"card-link"),k.jsx(r,{ref:i,className:Q(e,t),...n})));sw.displayName="CardLink";const B6=sw,V6=lp("h6"),aw=_.forwardRef(({className:e,bsPrefix:t,as:r=V6,...n},i)=>(t=ee(t,"card-subtitle"),k.jsx(r,{ref:i,className:Q(e,t),...n})));aw.displayName="CardSubtitle";const H6=aw,lw=_.forwardRef(({className:e,bsPrefix:t,as:r="p",...n},i)=>(t=ee(t,"card-text"),k.jsx(r,{ref:i,className:Q(e,t),...n})));lw.displayName="CardText";const U6=lw,W6=lp("h5"),cw=_.forwardRef(({className:e,bsPrefix:t,as:r=W6,...n},i)=>(t=ee(t,"card-title"),k.jsx(r,{ref:i,className:Q(e,t),...n})));cw.displayName="CardTitle";const K6=cw,uw=_.forwardRef(({bsPrefix:e,className:t,bg:r,text:n,border:i,body:o=!1,children:s,as:l="div",...a},c)=>{const d=ee(e,"card");return k.jsx(l,{ref:c,...a,className:Q(t,d,r&&`bg-${r}`,n&&`text-${n}`,i&&`border-${i}`),children:o?k.jsx(Cp,{children:s}):s})});uw.displayName="Card";const Or=Object.assign(uw,{Img:j6,Title:K6,Subtitle:H6,Body:Cp,Link:B6,Text:U6,Header:ja,Footer:D6,ImgOverlay:F6});function Y6(e,t,r){const n=_.useRef(e!==void 0),[i,o]=_.useState(t),s=e!==void 0,l=n.current;return n.current=s,!s&&l&&i!==t&&o(t),[s?e:i,_.useCallback((...a)=>{const[c,...d]=a;let f=r==null?void 0:r(c,...d);return o(c),f},[r])]}function dw(){const[,e]=_.useReducer(t=>!t,!1);return e}const X6=_.createContext(null),du=X6;var uv=Object.prototype.hasOwnProperty;function dv(e,t,r){for(r of e.keys())if(Bs(r,t))return r}function Bs(e,t){var r,n,i;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&Bs(e[n],t[n]););return n===-1}if(r===Set){if(e.size!==t.size)return!1;for(n of e)if(i=n,i&&typeof i=="object"&&(i=dv(t,i),!i)||!t.has(i))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e)if(i=n[0],i&&typeof i=="object"&&(i=dv(t,i),!i)||!Bs(n[1],t.get(i)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return n===-1}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return n===-1}if(!r||typeof e=="object"){n=0;for(r in e)if(uv.call(e,r)&&++n&&!uv.call(t,r)||!(r in t)||!Bs(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!==e&&t!==t}function G6(e){const t=Fb();return[e[0],_.useCallback(r=>{if(t())return e[1](r)},[t,e[1]])]}var Tt="top",nr="bottom",ir="right",Ot="left",Sp="auto",Fa=[Tt,nr,ir,Ot],Io="start",ma="end",q6="clippingParents",fw="viewport",ms="popper",Q6="reference",fv=Fa.reduce(function(e,t){return e.concat([t+"-"+Io,t+"-"+ma])},[]),hw=[].concat(Fa,[Sp]).reduce(function(e,t){return e.concat([t,t+"-"+Io,t+"-"+ma])},[]),Z6="beforeRead",J6="read",eA="afterRead",tA="beforeMain",rA="main",nA="afterMain",iA="beforeWrite",oA="write",sA="afterWrite",aA=[Z6,J6,eA,tA,rA,nA,iA,oA,sA];function Ar(e){return e.split("-")[0]}function Ft(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Ri(e){var t=Ft(e).Element;return e instanceof t||e instanceof Element}function zr(e){var t=Ft(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function $p(e){if(typeof ShadowRoot>"u")return!1;var t=Ft(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var ki=Math.max,Ac=Math.min,Ro=Math.round;function Hf(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function pw(){return!/^((?!chrome|android).)*safari/i.test(Hf())}function No(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),i=1,o=1;t&&zr(e)&&(i=e.offsetWidth>0&&Ro(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&Ro(n.height)/e.offsetHeight||1);var s=Ri(e)?Ft(e):window,l=s.visualViewport,a=!pw()&&r,c=(n.left+(a&&l?l.offsetLeft:0))/i,d=(n.top+(a&&l?l.offsetTop:0))/o,f=n.width/i,h=n.height/o;return{width:f,height:h,top:d,right:c+f,bottom:d+h,left:c,x:c,y:d}}function Ep(e){var t=No(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function mw(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&$p(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Qn(e){return e?(e.nodeName||"").toLowerCase():null}function on(e){return Ft(e).getComputedStyle(e)}function lA(e){return["table","td","th"].indexOf(Qn(e))>=0}function oi(e){return((Ri(e)?e.ownerDocument:e.document)||window.document).documentElement}function fu(e){return Qn(e)==="html"?e:e.assignedSlot||e.parentNode||($p(e)?e.host:null)||oi(e)}function hv(e){return!zr(e)||on(e).position==="fixed"?null:e.offsetParent}function cA(e){var t=/firefox/i.test(Hf()),r=/Trident/i.test(Hf());if(r&&zr(e)){var n=on(e);if(n.position==="fixed")return null}var i=fu(e);for($p(i)&&(i=i.host);zr(i)&&["html","body"].indexOf(Qn(i))<0;){var o=on(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function Ba(e){for(var t=Ft(e),r=hv(e);r&&lA(r)&&on(r).position==="static";)r=hv(r);return r&&(Qn(r)==="html"||Qn(r)==="body"&&on(r).position==="static")?t:r||cA(e)||t}function Ap(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Vs(e,t,r){return ki(e,Ac(t,r))}function uA(e,t,r){var n=Vs(e,t,r);return n>r?r:n}function gw(){return{top:0,right:0,bottom:0,left:0}}function vw(e){return Object.assign({},gw(),e)}function yw(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var dA=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,vw(typeof t!="number"?t:yw(t,Fa))};function fA(e){var t,r=e.state,n=e.name,i=e.options,o=r.elements.arrow,s=r.modifiersData.popperOffsets,l=Ar(r.placement),a=Ap(l),c=[Ot,ir].indexOf(l)>=0,d=c?"height":"width";if(!(!o||!s)){var f=dA(i.padding,r),h=Ep(o),p=a==="y"?Tt:Ot,v=a==="y"?nr:ir,x=r.rects.reference[d]+r.rects.reference[a]-s[a]-r.rects.popper[d],S=s[a]-r.rects.reference[a],b=Ba(o),m=b?a==="y"?b.clientHeight||0:b.clientWidth||0:0,y=x/2-S/2,w=f[p],C=m-h[d]-f[v],$=m/2-h[d]/2+y,E=Vs(w,$,C),A=a;r.modifiersData[n]=(t={},t[A]=E,t.centerOffset=E-$,t)}}function hA(e){var t=e.state,r=e.options,n=r.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||mw(t.elements.popper,i)&&(t.elements.arrow=i))}const pA={name:"arrow",enabled:!0,phase:"main",fn:fA,effect:hA,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Do(e){return e.split("-")[1]}var mA={top:"auto",right:"auto",bottom:"auto",left:"auto"};function gA(e,t){var r=e.x,n=e.y,i=t.devicePixelRatio||1;return{x:Ro(r*i)/i||0,y:Ro(n*i)/i||0}}function pv(e){var t,r=e.popper,n=e.popperRect,i=e.placement,o=e.variation,s=e.offsets,l=e.position,a=e.gpuAcceleration,c=e.adaptive,d=e.roundOffsets,f=e.isFixed,h=s.x,p=h===void 0?0:h,v=s.y,x=v===void 0?0:v,S=typeof d=="function"?d({x:p,y:x}):{x:p,y:x};p=S.x,x=S.y;var b=s.hasOwnProperty("x"),m=s.hasOwnProperty("y"),y=Ot,w=Tt,C=window;if(c){var $=Ba(r),E="clientHeight",A="clientWidth";if($===Ft(r)&&($=oi(r),on($).position!=="static"&&l==="absolute"&&(E="scrollHeight",A="scrollWidth")),$=$,i===Tt||(i===Ot||i===ir)&&o===ma){w=nr;var T=f&&$===C&&C.visualViewport?C.visualViewport.height:$[E];x-=T-n.height,x*=a?1:-1}if(i===Ot||(i===Tt||i===nr)&&o===ma){y=ir;var z=f&&$===C&&C.visualViewport?C.visualViewport.width:$[A];p-=z-n.width,p*=a?1:-1}}var N=Object.assign({position:l},c&&mA),D=d===!0?gA({x:p,y:x},Ft(r)):{x:p,y:x};if(p=D.x,x=D.y,a){var Y;return Object.assign({},N,(Y={},Y[w]=m?"0":"",Y[y]=b?"0":"",Y.transform=(C.devicePixelRatio||1)<=1?"translate("+p+"px, "+x+"px)":"translate3d("+p+"px, "+x+"px, 0)",Y))}return Object.assign({},N,(t={},t[w]=m?x+"px":"",t[y]=b?p+"px":"",t.transform="",t))}function vA(e){var t=e.state,r=e.options,n=r.gpuAcceleration,i=n===void 0?!0:n,o=r.adaptive,s=o===void 0?!0:o,l=r.roundOffsets,a=l===void 0?!0:l,c={placement:Ar(t.placement),variation:Do(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,pv(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,pv(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const yA={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vA,data:{}};var $l={passive:!0};function bA(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,o=i===void 0?!0:i,s=n.resize,l=s===void 0?!0:s,a=Ft(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(d){d.addEventListener("scroll",r.update,$l)}),l&&a.addEventListener("resize",r.update,$l),function(){o&&c.forEach(function(d){d.removeEventListener("scroll",r.update,$l)}),l&&a.removeEventListener("resize",r.update,$l)}}const wA={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:bA,data:{}};var xA={left:"right",right:"left",bottom:"top",top:"bottom"};function Ul(e){return e.replace(/left|right|bottom|top/g,function(t){return xA[t]})}var _A={start:"end",end:"start"};function mv(e){return e.replace(/start|end/g,function(t){return _A[t]})}function zp(e){var t=Ft(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Tp(e){return No(oi(e)).left+zp(e).scrollLeft}function kA(e,t){var r=Ft(e),n=oi(e),i=r.visualViewport,o=n.clientWidth,s=n.clientHeight,l=0,a=0;if(i){o=i.width,s=i.height;var c=pw();(c||!c&&t==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:o,height:s,x:l+Tp(e),y:a}}function CA(e){var t,r=oi(e),n=zp(e),i=(t=e.ownerDocument)==null?void 0:t.body,o=ki(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=ki(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),l=-n.scrollLeft+Tp(e),a=-n.scrollTop;return on(i||r).direction==="rtl"&&(l+=ki(r.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:l,y:a}}function Op(e){var t=on(e),r=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+n)}function bw(e){return["html","body","#document"].indexOf(Qn(e))>=0?e.ownerDocument.body:zr(e)&&Op(e)?e:bw(fu(e))}function Hs(e,t){var r;t===void 0&&(t=[]);var n=bw(e),i=n===((r=e.ownerDocument)==null?void 0:r.body),o=Ft(n),s=i?[o].concat(o.visualViewport||[],Op(n)?n:[]):n,l=t.concat(s);return i?l:l.concat(Hs(fu(s)))}function Uf(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function SA(e,t){var r=No(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function gv(e,t,r){return t===fw?Uf(kA(e,r)):Ri(t)?SA(t,r):Uf(CA(oi(e)))}function $A(e){var t=Hs(fu(e)),r=["absolute","fixed"].indexOf(on(e).position)>=0,n=r&&zr(e)?Ba(e):e;return Ri(n)?t.filter(function(i){return Ri(i)&&mw(i,n)&&Qn(i)!=="body"}):[]}function EA(e,t,r,n){var i=t==="clippingParents"?$A(e):[].concat(t),o=[].concat(i,[r]),s=o[0],l=o.reduce(function(a,c){var d=gv(e,c,n);return a.top=ki(d.top,a.top),a.right=Ac(d.right,a.right),a.bottom=Ac(d.bottom,a.bottom),a.left=ki(d.left,a.left),a},gv(e,s,n));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function ww(e){var t=e.reference,r=e.element,n=e.placement,i=n?Ar(n):null,o=n?Do(n):null,s=t.x+t.width/2-r.width/2,l=t.y+t.height/2-r.height/2,a;switch(i){case Tt:a={x:s,y:t.y-r.height};break;case nr:a={x:s,y:t.y+t.height};break;case ir:a={x:t.x+t.width,y:l};break;case Ot:a={x:t.x-r.width,y:l};break;default:a={x:t.x,y:t.y}}var c=i?Ap(i):null;if(c!=null){var d=c==="y"?"height":"width";switch(o){case Io:a[c]=a[c]-(t[d]/2-r[d]/2);break;case ma:a[c]=a[c]+(t[d]/2-r[d]/2);break}}return a}function ga(e,t){t===void 0&&(t={});var r=t,n=r.placement,i=n===void 0?e.placement:n,o=r.strategy,s=o===void 0?e.strategy:o,l=r.boundary,a=l===void 0?q6:l,c=r.rootBoundary,d=c===void 0?fw:c,f=r.elementContext,h=f===void 0?ms:f,p=r.altBoundary,v=p===void 0?!1:p,x=r.padding,S=x===void 0?0:x,b=vw(typeof S!="number"?S:yw(S,Fa)),m=h===ms?Q6:ms,y=e.rects.popper,w=e.elements[v?m:h],C=EA(Ri(w)?w:w.contextElement||oi(e.elements.popper),a,d,s),$=No(e.elements.reference),E=ww({reference:$,element:y,strategy:"absolute",placement:i}),A=Uf(Object.assign({},y,E)),T=h===ms?A:$,z={top:C.top-T.top+b.top,bottom:T.bottom-C.bottom+b.bottom,left:C.left-T.left+b.left,right:T.right-C.right+b.right},N=e.modifiersData.offset;if(h===ms&&N){var D=N[i];Object.keys(z).forEach(function(Y){var Z=[ir,nr].indexOf(Y)>=0?1:-1,re=[Tt,nr].indexOf(Y)>=0?"y":"x";z[Y]+=D[re]*Z})}return z}function AA(e,t){t===void 0&&(t={});var r=t,n=r.placement,i=r.boundary,o=r.rootBoundary,s=r.padding,l=r.flipVariations,a=r.allowedAutoPlacements,c=a===void 0?hw:a,d=Do(n),f=d?l?fv:fv.filter(function(v){return Do(v)===d}):Fa,h=f.filter(function(v){return c.indexOf(v)>=0});h.length===0&&(h=f);var p=h.reduce(function(v,x){return v[x]=ga(e,{placement:x,boundary:i,rootBoundary:o,padding:s})[Ar(x)],v},{});return Object.keys(p).sort(function(v,x){return p[v]-p[x]})}function zA(e){if(Ar(e)===Sp)return[];var t=Ul(e);return[mv(e),t,mv(t)]}function TA(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var i=r.mainAxis,o=i===void 0?!0:i,s=r.altAxis,l=s===void 0?!0:s,a=r.fallbackPlacements,c=r.padding,d=r.boundary,f=r.rootBoundary,h=r.altBoundary,p=r.flipVariations,v=p===void 0?!0:p,x=r.allowedAutoPlacements,S=t.options.placement,b=Ar(S),m=b===S,y=a||(m||!v?[Ul(S)]:zA(S)),w=[S].concat(y).reduce(function(Ee,Qe){return Ee.concat(Ar(Qe)===Sp?AA(t,{placement:Qe,boundary:d,rootBoundary:f,padding:c,flipVariations:v,allowedAutoPlacements:x}):Qe)},[]),C=t.rects.reference,$=t.rects.popper,E=new Map,A=!0,T=w[0],z=0;z<w.length;z++){var N=w[z],D=Ar(N),Y=Do(N)===Io,Z=[Tt,nr].indexOf(D)>=0,re=Z?"width":"height",J=ga(t,{placement:N,boundary:d,rootBoundary:f,altBoundary:h,padding:c}),oe=Z?Y?ir:Ot:Y?nr:Tt;C[re]>$[re]&&(oe=Ul(oe));var L=Ul(oe),K=[];if(o&&K.push(J[D]<=0),l&&K.push(J[oe]<=0,J[L]<=0),K.every(function(Ee){return Ee})){T=N,A=!1;break}E.set(N,K)}if(A)for(var H=v?3:1,ne=function(Qe){var nt=w.find(function(kt){var sr=E.get(kt);if(sr)return sr.slice(0,Qe).every(function(jr){return jr})});if(nt)return T=nt,"break"},ue=H;ue>0;ue--){var Ve=ne(ue);if(Ve==="break")break}t.placement!==T&&(t.modifiersData[n]._skip=!0,t.placement=T,t.reset=!0)}}const OA={name:"flip",enabled:!0,phase:"main",fn:TA,requiresIfExists:["offset"],data:{_skip:!1}};function vv(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function yv(e){return[Tt,ir,nr,Ot].some(function(t){return e[t]>=0})}function PA(e){var t=e.state,r=e.name,n=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=ga(t,{elementContext:"reference"}),l=ga(t,{altBoundary:!0}),a=vv(s,n),c=vv(l,i,o),d=yv(a),f=yv(c);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":f})}const LA={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:PA};function IA(e,t,r){var n=Ar(e),i=[Ot,Tt].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,s=o[0],l=o[1];return s=s||0,l=(l||0)*i,[Ot,ir].indexOf(n)>=0?{x:l,y:s}:{x:s,y:l}}function RA(e){var t=e.state,r=e.options,n=e.name,i=r.offset,o=i===void 0?[0,0]:i,s=hw.reduce(function(d,f){return d[f]=IA(f,t.rects,o),d},{}),l=s[t.placement],a=l.x,c=l.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=s}const NA={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:RA};function DA(e){var t=e.state,r=e.name;t.modifiersData[r]=ww({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const MA={name:"popperOffsets",enabled:!0,phase:"read",fn:DA,data:{}};function jA(e){return e==="x"?"y":"x"}function FA(e){var t=e.state,r=e.options,n=e.name,i=r.mainAxis,o=i===void 0?!0:i,s=r.altAxis,l=s===void 0?!1:s,a=r.boundary,c=r.rootBoundary,d=r.altBoundary,f=r.padding,h=r.tether,p=h===void 0?!0:h,v=r.tetherOffset,x=v===void 0?0:v,S=ga(t,{boundary:a,rootBoundary:c,padding:f,altBoundary:d}),b=Ar(t.placement),m=Do(t.placement),y=!m,w=Ap(b),C=jA(w),$=t.modifiersData.popperOffsets,E=t.rects.reference,A=t.rects.popper,T=typeof x=="function"?x(Object.assign({},t.rects,{placement:t.placement})):x,z=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if($){if(o){var Y,Z=w==="y"?Tt:Ot,re=w==="y"?nr:ir,J=w==="y"?"height":"width",oe=$[w],L=oe+S[Z],K=oe-S[re],H=p?-A[J]/2:0,ne=m===Io?E[J]:A[J],ue=m===Io?-A[J]:-E[J],Ve=t.elements.arrow,Ee=p&&Ve?Ep(Ve):{width:0,height:0},Qe=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:gw(),nt=Qe[Z],kt=Qe[re],sr=Vs(0,E[J],Ee[J]),jr=y?E[J]/2-H-sr-nt-z.mainAxis:ne-sr-nt-z.mainAxis,fn=y?-E[J]/2+H+sr+kt+z.mainAxis:ue+sr+kt+z.mainAxis,hn=t.elements.arrow&&Ba(t.elements.arrow),pn=hn?w==="y"?hn.clientTop||0:hn.clientLeft||0:0,mn=(Y=N==null?void 0:N[w])!=null?Y:0,gn=oe+jr-mn-pn,ye=oe+fn-mn,si=Vs(p?Ac(L,gn):L,oe,p?ki(K,ye):K);$[w]=si,D[w]=si-oe}if(l){var vn,hu=w==="x"?Tt:Ot,pu=w==="x"?nr:ir,Fr=$[C],Hi=C==="y"?"height":"width",Ha=Fr+S[hu],Ua=Fr-S[pu],Ui=[Tt,Ot].indexOf(b)!==-1,Wa=(vn=N==null?void 0:N[C])!=null?vn:0,le=Ui?Ha:Fr-E[Hi]-A[Hi]-Wa+z.altAxis,Br=Ui?Fr+E[Hi]+A[Hi]-Wa-z.altAxis:Ua,Qo=p&&Ui?uA(le,Fr,Br):Vs(p?le:Ha,Fr,p?Br:Ua);$[C]=Qo,D[C]=Qo-Fr}t.modifiersData[n]=D}}const BA={name:"preventOverflow",enabled:!0,phase:"main",fn:FA,requiresIfExists:["offset"]};function VA(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function HA(e){return e===Ft(e)||!zr(e)?zp(e):VA(e)}function UA(e){var t=e.getBoundingClientRect(),r=Ro(t.width)/e.offsetWidth||1,n=Ro(t.height)/e.offsetHeight||1;return r!==1||n!==1}function WA(e,t,r){r===void 0&&(r=!1);var n=zr(t),i=zr(t)&&UA(t),o=oi(t),s=No(e,i,r),l={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(n||!n&&!r)&&((Qn(t)!=="body"||Op(o))&&(l=HA(t)),zr(t)?(a=No(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):o&&(a.x=Tp(o))),{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function KA(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function i(o){r.add(o.name);var s=[].concat(o.requires||[],o.requiresIfExists||[]);s.forEach(function(l){if(!r.has(l)){var a=t.get(l);a&&i(a)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||i(o)}),n}function YA(e){var t=KA(e);return aA.reduce(function(r,n){return r.concat(t.filter(function(i){return i.phase===n}))},[])}function XA(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function GA(e){var t=e.reduce(function(r,n){var i=r[n.name];return r[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var bv={placement:"bottom",modifiers:[],strategy:"absolute"};function wv(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function qA(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,i=t.defaultOptions,o=i===void 0?bv:i;return function(l,a,c){c===void 0&&(c=o);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},bv,o),modifiersData:{},elements:{reference:l,popper:a},attributes:{},styles:{}},f=[],h=!1,p={state:d,setOptions:function(b){var m=typeof b=="function"?b(d.options):b;x(),d.options=Object.assign({},o,d.options,m),d.scrollParents={reference:Ri(l)?Hs(l):l.contextElement?Hs(l.contextElement):[],popper:Hs(a)};var y=YA(GA([].concat(n,d.options.modifiers)));return d.orderedModifiers=y.filter(function(w){return w.enabled}),v(),p.update()},forceUpdate:function(){if(!h){var b=d.elements,m=b.reference,y=b.popper;if(wv(m,y)){d.rects={reference:WA(m,Ba(y),d.options.strategy==="fixed"),popper:Ep(y)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(z){return d.modifiersData[z.name]=Object.assign({},z.data)});for(var w=0;w<d.orderedModifiers.length;w++){if(d.reset===!0){d.reset=!1,w=-1;continue}var C=d.orderedModifiers[w],$=C.fn,E=C.options,A=E===void 0?{}:E,T=C.name;typeof $=="function"&&(d=$({state:d,options:A,name:T,instance:p})||d)}}}},update:XA(function(){return new Promise(function(S){p.forceUpdate(),S(d)})}),destroy:function(){x(),h=!0}};if(!wv(l,a))return p;p.setOptions(c).then(function(S){!h&&c.onFirstUpdate&&c.onFirstUpdate(S)});function v(){d.orderedModifiers.forEach(function(S){var b=S.name,m=S.options,y=m===void 0?{}:m,w=S.effect;if(typeof w=="function"){var C=w({state:d,name:b,instance:p,options:y}),$=function(){};f.push(C||$)}})}function x(){f.forEach(function(S){return S()}),f=[]}return p}}const QA=qA({defaultModifiers:[LA,MA,yA,wA,NA,OA,BA,pA]}),ZA=["enabled","placement","strategy","modifiers"];function JA(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}const ez={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},tz={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:r}=e.elements;if("removeAttribute"in t){const n=(t.getAttribute("aria-describedby")||"").split(",").filter(i=>i.trim()!==r.id);n.length?t.setAttribute("aria-describedby",n.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:r,reference:n}=e.elements,i=(t=r.getAttribute("role"))==null?void 0:t.toLowerCase();if(r.id&&i==="tooltip"&&"setAttribute"in n){const o=n.getAttribute("aria-describedby");if(o&&o.split(",").indexOf(r.id)!==-1)return;n.setAttribute("aria-describedby",o?`${o},${r.id}`:r.id)}}},rz=[];function nz(e,t,r={}){let{enabled:n=!0,placement:i="bottom",strategy:o="absolute",modifiers:s=rz}=r,l=JA(r,ZA);const a=_.useRef(s),c=_.useRef(),d=_.useCallback(()=>{var S;(S=c.current)==null||S.update()},[]),f=_.useCallback(()=>{var S;(S=c.current)==null||S.forceUpdate()},[]),[h,p]=G6(_.useState({placement:i,update:d,forceUpdate:f,attributes:{},styles:{popper:{},arrow:{}}})),v=_.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:S})=>{const b={},m={};Object.keys(S.elements).forEach(y=>{b[y]=S.styles[y],m[y]=S.attributes[y]}),p({state:S,styles:b,attributes:m,update:d,forceUpdate:f,placement:S.placement})}}),[d,f,p]),x=_.useMemo(()=>(Bs(a.current,s)||(a.current=s),a.current),[s]);return _.useEffect(()=>{!c.current||!n||c.current.setOptions({placement:i,strategy:o,modifiers:[...x,v,ez]})},[o,i,v,n,x]),_.useEffect(()=>{if(!(!n||e==null||t==null))return c.current=QA(e,t,Object.assign({},l,{placement:i,strategy:o,modifiers:[...x,tz,v]})),()=>{c.current!=null&&(c.current.destroy(),c.current=void 0,p(S=>Object.assign({},S,{attributes:{},styles:{popper:{}}})))}},[n,e,t]),h}const xv=()=>{};function iz(e){return e.button===0}function oz(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const dd=e=>e&&("current"in e?e.current:e),_v={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function sz(e,t=xv,{disabled:r,clickTrigger:n="click"}={}){const i=_.useRef(!1),o=_.useRef(!1),s=_.useCallback(c=>{const d=dd(e);x4(!!d,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),i.current=!d||oz(c)||!iz(c)||!!_c(d,c.target)||o.current,o.current=!1},[e]),l=Fe(c=>{const d=dd(e);d&&_c(d,c.target)&&(o.current=!0)}),a=Fe(c=>{i.current||t(c)});_.useEffect(()=>{var c,d;if(r||e==null)return;const f=Ia(dd(e)),h=f.defaultView||window;let p=(c=h.event)!=null?c:(d=h.parent)==null?void 0:d.event,v=null;_v[n]&&(v=zn(f,_v[n],l,!0));const x=zn(f,n,s,!0),S=zn(f,n,m=>{if(m===p){p=void 0;return}a(m)});let b=[];return"ontouchstart"in f.documentElement&&(b=[].slice.call(f.body.children).map(m=>zn(m,"mousemove",xv))),()=>{v==null||v(),x(),S(),b.forEach(m=>m())}},[e,r,n,s,l,a])}function az(e){const t={};return Array.isArray(e)?(e==null||e.forEach(r=>{t[r.name]=r}),t):e||t}function lz(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function cz({enabled:e,enableEvents:t,placement:r,flip:n,offset:i,fixed:o,containerPadding:s,arrowElement:l,popperConfig:a={}}){var c,d,f,h,p;const v=az(a.modifiers);return Object.assign({},a,{placement:r,enabled:e,strategy:o?"fixed":a.strategy,modifiers:lz(Object.assign({},v,{eventListeners:{enabled:t,options:(c=v.eventListeners)==null?void 0:c.options},preventOverflow:Object.assign({},v.preventOverflow,{options:s?Object.assign({padding:s},(d=v.preventOverflow)==null?void 0:d.options):(f=v.preventOverflow)==null?void 0:f.options}),offset:{options:Object.assign({offset:i},(h=v.offset)==null?void 0:h.options)},arrow:Object.assign({},v.arrow,{enabled:!!l,options:Object.assign({},(p=v.arrow)==null?void 0:p.options,{element:l})}),flip:Object.assign({enabled:!!n},v.flip)}))})}const uz=["children"];function dz(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}const fz=()=>{};function xw(e={}){const t=_.useContext(du),[r,n]=Db(),i=_.useRef(!1),{flip:o,offset:s,rootCloseEvent:l,fixed:a=!1,placement:c,popperConfig:d={},enableEventListeners:f=!0,usePopper:h=!!t}=e,p=(t==null?void 0:t.show)==null?!!e.show:t.show;p&&!i.current&&(i.current=!0);const v=$=>{t==null||t.toggle(!1,$)},{placement:x,setMenu:S,menuElement:b,toggleElement:m}=t||{},y=nz(m,b,cz({placement:c||x||"bottom-start",enabled:h,enableEvents:f??p,offset:s,flip:o,fixed:a,arrowElement:r,popperConfig:d})),w=Object.assign({ref:S||fz,"aria-labelledby":m==null?void 0:m.id},y.attributes.popper,{style:y.styles.popper}),C={show:p,placement:x,hasShown:i.current,toggle:t==null?void 0:t.toggle,popper:h?y:null,arrowProps:h?Object.assign({ref:n},y.attributes.arrow,{style:y.styles.arrow}):{}};return sz(b,v,{clickTrigger:l,disabled:!p}),[w,C]}const hz={usePopper:!0};function Pp(e){let{children:t}=e,r=dz(e,uz);const[n,i]=xw(r);return k.jsx(k.Fragment,{children:t(n,i)})}Pp.displayName="DropdownMenu";Pp.defaultProps=hz;const zc={prefix:String(Math.round(Math.random()*1e10)),current:0},_w=ot.createContext(zc),pz=ot.createContext(!1);let mz=!!(typeof window<"u"&&window.document&&window.document.createElement),fd=new WeakMap;function gz(e=!1){let t=_.useContext(_w),r=_.useRef(null);if(r.current===null&&!e){var n,i;let o=(i=ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||i===void 0||(n=i.ReactCurrentOwner)===null||n===void 0?void 0:n.current;if(o){let s=fd.get(o);s==null?fd.set(o,{id:t.current,state:o.memoizedState}):o.memoizedState!==s.state&&(t.current=s.id,fd.delete(o))}r.current=++t.current}return r.current}function vz(e){let t=_.useContext(_w);t===zc&&!mz&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=gz(!!e),n=`react-aria${t.prefix}`;return e||`${n}-${r}`}function yz(e){let t=ot.useId(),[r]=_.useState(kz()),n=r?"react-aria":`react-aria${zc.prefix}`;return e||`${n}-${t}`}const bz=typeof ot.useId=="function"?yz:vz;function wz(){return!1}function xz(){return!0}function _z(e){return()=>{}}function kz(){return typeof ot.useSyncExternalStore=="function"?ot.useSyncExternalStore(_z,wz,xz):_.useContext(pz)}const kw=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},kv=()=>{};function Cw(){const e=bz(),{show:t=!1,toggle:r=kv,setToggle:n,menuElement:i}=_.useContext(du)||{},o=_.useCallback(l=>{r(!t,l)},[t,r]),s={id:e,ref:n||kv,onClick:o,"aria-expanded":!!t};return i&&kw(i)&&(s["aria-haspopup"]=!0),[s,{show:t,toggle:r}]}function Sw({children:e}){const[t,r]=Cw();return k.jsx(k.Fragment,{children:e(t,r)})}Sw.displayName="DropdownToggle";const Mo=_.createContext(null),va=(e,t=null)=>e!=null?String(e):t||null,$w=_.createContext(null);$w.displayName="NavContext";const Lp=$w,Cz=["eventKey","disabled","onClick","active","as"];function Sz(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Ew({key:e,href:t,active:r,disabled:n,onClick:i}){const o=_.useContext(Mo),s=_.useContext(Lp),{activeKey:l}=s||{},a=va(e,t),c=r==null&&e!=null?va(l)===a:r;return[{onClick:Fe(f=>{n||(i==null||i(f),o&&!f.isPropagationStopped()&&o(a,f))}),"aria-disabled":n||void 0,"aria-selected":c,[Xo("dropdown-item")]:""},{isActive:c}]}const Aw=_.forwardRef((e,t)=>{let{eventKey:r,disabled:n,onClick:i,active:o,as:s=ip}=e,l=Sz(e,Cz);const[a]=Ew({key:r,href:l.href,disabled:n,onClick:i,active:o});return k.jsx(s,Object.assign({},l,{ref:t},a))});Aw.displayName="DropdownItem";function Cv(){const e=dw(),t=_.useRef(null),r=_.useCallback(n=>{t.current=n,e()},[e]);return[t,r]}function Va({defaultShow:e,show:t,onSelect:r,onToggle:n,itemSelector:i=`* [${Xo("dropdown-item")}]`,focusFirstItemOnShow:o,placement:s="bottom-start",children:l}){const a=eu(),[c,d]=Y6(t,e,n),[f,h]=Cv(),p=f.current,[v,x]=Cv(),S=v.current,b=Bb(c),m=_.useRef(null),y=_.useRef(!1),w=_.useContext(Mo),C=_.useCallback((N,D,Y=D==null?void 0:D.type)=>{d(N,{originalEvent:D,source:Y})},[d]),$=Fe((N,D)=>{r==null||r(N,D),C(!1,D,"select"),D.isPropagationStopped()||w==null||w(N,D)}),E=_.useMemo(()=>({toggle:C,placement:s,show:c,menuElement:p,toggleElement:S,setMenu:h,setToggle:x}),[C,s,c,p,S,h,x]);p&&b&&!c&&(y.current=p.contains(p.ownerDocument.activeElement));const A=Fe(()=>{S&&S.focus&&S.focus()}),T=Fe(()=>{const N=m.current;let D=o;if(D==null&&(D=f.current&&kw(f.current)?"keyboard":!1),D===!1||D==="keyboard"&&!/^key.+$/.test(N))return;const Y=Wr(f.current,i)[0];Y&&Y.focus&&Y.focus()});_.useEffect(()=>{c?T():y.current&&(y.current=!1,A())},[c,y,A,T]),_.useEffect(()=>{m.current=null});const z=(N,D)=>{if(!f.current)return null;const Y=Wr(f.current,i);let Z=Y.indexOf(N)+D;return Z=Math.max(0,Math.min(Z,Y.length)),Y[Z]};return P6(_.useCallback(()=>a.document,[a]),"keydown",N=>{var D,Y;const{key:Z}=N,re=N.target,J=(D=f.current)==null?void 0:D.contains(re),oe=(Y=v.current)==null?void 0:Y.contains(re);if(/input|textarea/i.test(re.tagName)&&(Z===" "||Z!=="Escape"&&J||Z==="Escape"&&re.type==="search")||!J&&!oe||Z==="Tab"&&(!f.current||!c))return;m.current=N.type;const K={originalEvent:N,source:N.type};switch(Z){case"ArrowUp":{const H=z(re,-1);H&&H.focus&&H.focus(),N.preventDefault();return}case"ArrowDown":if(N.preventDefault(),!c)d(!0,K);else{const H=z(re,1);H&&H.focus&&H.focus()}return;case"Tab":op(re.ownerDocument,"keyup",H=>{var ne;(H.key==="Tab"&&!H.target||!((ne=f.current)!=null&&ne.contains(H.target)))&&d(!1,K)},{once:!0});break;case"Escape":Z==="Escape"&&(N.preventDefault(),N.stopPropagation()),d(!1,K);break}}),k.jsx(Mo.Provider,{value:$,children:k.jsx(du.Provider,{value:E,children:l})})}Va.displayName="Dropdown";Va.Menu=Pp;Va.Toggle=Sw;Va.Item=Aw;const zw=_.createContext({});zw.displayName="DropdownContext";const Tw=zw,Ow=_.forwardRef(({className:e,bsPrefix:t,as:r="hr",role:n="separator",...i},o)=>(t=ee(t,"dropdown-divider"),k.jsx(r,{ref:o,className:Q(e,t),role:n,...i})));Ow.displayName="DropdownDivider";const $z=Ow,Pw=_.forwardRef(({className:e,bsPrefix:t,as:r="div",role:n="heading",...i},o)=>(t=ee(t,"dropdown-header"),k.jsx(r,{ref:o,className:Q(e,t),role:n,...i})));Pw.displayName="DropdownHeader";const Ez=Pw,Lw=_.forwardRef(({bsPrefix:e,className:t,eventKey:r,disabled:n=!1,onClick:i,active:o,as:s=N6,...l},a)=>{const c=ee(e,"dropdown-item"),[d,f]=Ew({key:r,href:l.href,disabled:n,onClick:i,active:o});return k.jsx(s,{...l,...d,ref:a,className:Q(t,c,f.isActive&&"active",n&&"disabled")})});Lw.displayName="DropdownItem";const Az=Lw,Iw=_.forwardRef(({className:e,bsPrefix:t,as:r="span",...n},i)=>(t=ee(t,"dropdown-item-text"),k.jsx(r,{ref:i,className:Q(e,t),...n})));Iw.displayName="DropdownItemText";const zz=Iw,Rw=_.createContext(null);Rw.displayName="InputGroupContext";const Ip=Rw,Nw=_.createContext(null);Nw.displayName="NavbarContext";const Tz=Nw;function Dw(e,t){return e}const Gi=M.oneOf(["start","end"]),Oz=M.oneOfType([Gi,M.shape({sm:Gi}),M.shape({md:Gi}),M.shape({lg:Gi}),M.shape({xl:Gi}),M.shape({xxl:Gi}),M.object]);function Mw(e,t,r){const n=r?"top-end":"top-start",i=r?"top-start":"top-end",o=r?"bottom-end":"bottom-start",s=r?"bottom-start":"bottom-end",l=r?"right-start":"left-start",a=r?"right-end":"left-end",c=r?"left-start":"right-start",d=r?"left-end":"right-end";let f=e?s:o;return t==="up"?f=e?i:n:t==="end"?f=e?d:c:t==="start"?f=e?a:l:t==="down-centered"?f="bottom":t==="up-centered"&&(f="top"),f}const jw=_.forwardRef(({bsPrefix:e,className:t,align:r,rootCloseEvent:n,flip:i=!0,show:o,renderOnMount:s,as:l="div",popperConfig:a,variant:c,...d},f)=>{let h=!1;const p=_.useContext(Tz),v=ee(e,"dropdown-menu"),{align:x,drop:S,isRTL:b}=_.useContext(Tw);r=r||x;const m=_.useContext(Ip),y=[];if(r)if(typeof r=="object"){const N=Object.keys(r);if(N.length){const D=N[0],Y=r[D];h=Y==="start",y.push(`${v}-${D}-${Y}`)}}else r==="end"&&(h=!0);const w=Mw(h,S,b),[C,{hasShown:$,popper:E,show:A,toggle:T}]=xw({flip:i,rootCloseEvent:n,show:o,usePopper:!p&&y.length===0,offset:[0,2],popperConfig:a,placement:w});if(C.ref=ni(Dw(f),C.ref),Cf(()=>{A&&(E==null||E.update())},[A]),!$&&!s&&!m)return null;typeof l!="string"&&(C.show=A,C.close=()=>T==null?void 0:T(!1),C.align=r);let z=d.style;return E!=null&&E.placement&&(z={...d.style,...C.style},d["x-placement"]=E.placement),k.jsx(l,{...d,...C,style:z,...(y.length||p)&&{"data-bs-popper":"static"},className:Q(t,v,A&&"show",h&&`${v}-end`,c&&`${v}-${c}`,...y)})});jw.displayName="DropdownMenu";const Fw=jw,Bw=_.forwardRef(({bsPrefix:e,split:t,className:r,childBsPrefix:n,as:i=Be,...o},s)=>{const l=ee(e,"dropdown-toggle"),a=_.useContext(du);n!==void 0&&(o.bsPrefix=n);const[c]=Cw();return c.ref=ni(c.ref,Dw(s)),k.jsx(i,{className:Q(r,l,t&&`${l}-split`,(a==null?void 0:a.show)&&"show"),...c,...o})});Bw.displayName="DropdownToggle";const Vw=Bw,Hw=_.forwardRef((e,t)=>{const{bsPrefix:r,drop:n="down",show:i,className:o,align:s="start",onSelect:l,onToggle:a,focusFirstItemOnShow:c,as:d="div",navbar:f,autoClose:h=!0,...p}=Z1(e,{show:"onToggle"}),v=_.useContext(Ip),x=ee(r,"dropdown"),S=Rb(),b=E=>h===!1?E==="click":h==="inside"?E!=="rootClose":h==="outside"?E!=="select":!0,m=Fe((E,A)=>{var T,z;!((T=A.originalEvent)==null||(z=T.target)==null)&&z.classList.contains("dropdown-toggle")&&A.source==="mousedown"||(A.originalEvent.currentTarget===document&&(A.source!=="keydown"||A.originalEvent.key==="Escape")&&(A.source="rootClose"),b(A.source)&&(a==null||a(E,A)))}),w=Mw(s==="end",n,S),C=_.useMemo(()=>({align:s,drop:n,isRTL:S}),[s,n,S]),$={down:x,"down-centered":`${x}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return k.jsx(Tw.Provider,{value:C,children:k.jsx(Va,{placement:w,show:i,onSelect:l,onToggle:m,focusFirstItemOnShow:c,itemSelector:`.${x}-item:not(.disabled):not(:disabled)`,children:v?p.children:k.jsx(d,{...p,ref:t,className:Q(o,i&&"show",$[n])})})})});Hw.displayName="Dropdown";const Uw=Object.assign(Hw,{Toggle:Vw,Menu:Fw,Item:Az,ItemText:zz,Divider:$z,Header:Ez}),Pz={id:M.string,href:M.string,onClick:M.func,title:M.node.isRequired,disabled:M.bool,align:Oz,menuRole:M.string,renderMenuOnMount:M.bool,rootCloseEvent:M.string,menuVariant:M.oneOf(["dark"]),flip:M.bool,bsPrefix:M.string,variant:M.string,size:M.string},Rp=_.forwardRef(({title:e,children:t,bsPrefix:r,rootCloseEvent:n,variant:i,size:o,menuRole:s,renderMenuOnMount:l,disabled:a,href:c,id:d,menuVariant:f,flip:h,...p},v)=>k.jsxs(Uw,{ref:v,...p,children:[k.jsx(Vw,{id:d,href:c,size:o,variant:i,disabled:a,childBsPrefix:r,children:e}),k.jsx(Fw,{role:s,renderOnMount:l,rootCloseEvent:n,variant:f,flip:h,children:t})]}));Rp.displayName="DropdownButton";Rp.propTypes=Pz;const Lz=Rp,Ww=_.forwardRef(({className:e,bsPrefix:t,as:r="span",...n},i)=>(t=ee(t,"input-group-text"),k.jsx(r,{ref:i,className:Q(e,t),...n})));Ww.displayName="InputGroupText";const Np=Ww,Iz=e=>k.jsx(Np,{children:k.jsx(ou,{type:"checkbox",...e})}),Rz=e=>k.jsx(Np,{children:k.jsx(ou,{type:"radio",...e})}),Kw=_.forwardRef(({bsPrefix:e,size:t,hasValidation:r,className:n,as:i="div",...o},s)=>{e=ee(e,"input-group");const l=_.useMemo(()=>({}),[]);return k.jsx(Ip.Provider,{value:l,children:k.jsx(i,{ref:s,...o,className:Q(n,e,t&&`${e}-${t}`,r&&"has-validation")})})});Kw.displayName="InputGroup";const Nz=Object.assign(Kw,{Text:Np,Radio:Rz,Checkbox:Iz}),Dz=_.createContext(null),Yw=Dz,Mz=["as","active","eventKey"];function jz(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Xw({key:e,onClick:t,active:r,id:n,role:i,disabled:o}){const s=_.useContext(Mo),l=_.useContext(Lp),a=_.useContext(Yw);let c=r;const d={role:i};if(l){!i&&l.role==="tablist"&&(d.role="tab");const f=l.getControllerId(e??null),h=l.getControlledId(e??null);d[Xo("event-key")]=e,d.id=f||n,c=r==null&&e!=null?l.activeKey===e:r,(c||!(a!=null&&a.unmountOnExit)&&!(a!=null&&a.mountOnEnter))&&(d["aria-controls"]=h)}return d.role==="tab"&&(d["aria-selected"]=c,c||(d.tabIndex=-1),o&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=Fe(f=>{o||(t==null||t(f),e!=null&&s&&!f.isPropagationStopped()&&s(e,f))}),[d,{isActive:c}]}const Gw=_.forwardRef((e,t)=>{let{as:r=ip,active:n,eventKey:i}=e,o=jz(e,Mz);const[s,l]=Xw(Object.assign({key:va(i,o.href),active:n},o));return s[Xo("active")]=l.isActive,k.jsx(r,Object.assign({},o,s,{ref:t}))});Gw.displayName="NavItem";const Fz=Gw,Bz=["as","onSelect","activeKey","role","onKeyDown"];function Vz(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}const Sv=()=>{},$v=Xo("event-key"),qw=_.forwardRef((e,t)=>{let{as:r="div",onSelect:n,activeKey:i,role:o,onKeyDown:s}=e,l=Vz(e,Bz);const a=dw(),c=_.useRef(!1),d=_.useContext(Mo),f=_.useContext(Yw);let h,p;f&&(o=o||"tablist",i=f.activeKey,h=f.getControlledId,p=f.getControllerId);const v=_.useRef(null),x=y=>{const w=v.current;if(!w)return null;const C=Wr(w,`[${$v}]:not([aria-disabled=true])`),$=w.querySelector("[aria-selected=true]");if(!$||$!==document.activeElement)return null;const E=C.indexOf($);if(E===-1)return null;let A=E+y;return A>=C.length&&(A=0),A<0&&(A=C.length-1),C[A]},S=(y,w)=>{y!=null&&(n==null||n(y,w),d==null||d(y,w))},b=y=>{if(s==null||s(y),!f)return;let w;switch(y.key){case"ArrowLeft":case"ArrowUp":w=x(-1);break;case"ArrowRight":case"ArrowDown":w=x(1);break;default:return}w&&(y.preventDefault(),S(w.dataset[c$("EventKey")]||null,y),c.current=!0,a())};_.useEffect(()=>{if(v.current&&c.current){const y=v.current.querySelector(`[${$v}][aria-selected=true]`);y==null||y.focus()}c.current=!1});const m=ni(t,v);return k.jsx(Mo.Provider,{value:S,children:k.jsx(Lp.Provider,{value:{role:o,activeKey:va(i),getControlledId:h||Sv,getControllerId:p||Sv},children:k.jsx(r,Object.assign({},l,{onKeyDown:b,ref:m,role:o}))})})});qw.displayName="Nav";const Hz=Object.assign(qw,{Item:Fz}),Qw=_.forwardRef(({bsPrefix:e,active:t,disabled:r,eventKey:n,className:i,variant:o,action:s,as:l,...a},c)=>{e=ee(e,"list-group-item");const[d,f]=Xw({key:va(n,a.href),active:t,...a}),h=Fe(v=>{if(r){v.preventDefault(),v.stopPropagation();return}d.onClick(v)});r&&a.tabIndex===void 0&&(a.tabIndex=-1,a["aria-disabled"]=!0);const p=l||(s?a.href?"a":"button":"div");return k.jsx(p,{ref:c,...a,...d,onClick:h,className:Q(i,e,f.isActive&&"active",r&&"disabled",o&&`${e}-${o}`,s&&`${e}-action`)})});Qw.displayName="ListGroupItem";const Zw=Qw,Jw=_.forwardRef((e,t)=>{const{className:r,bsPrefix:n,variant:i,horizontal:o,numbered:s,as:l="div",...a}=Z1(e,{activeKey:"onSelect"}),c=ee(n,"list-group");let d;return o&&(d=o===!0?"horizontal":`horizontal-${o}`),k.jsx(Hz,{ref:t,...a,as:l,className:Q(r,c,i&&`${c}-${i}`,d&&`${c}-${d}`,s&&`${c}-numbered`)})});Jw.displayName="ListGroup";const Uz=Object.assign(Jw,{Item:Zw}),Ev=1e3;function Wz(e,t,r){const n=(e-t)/(r-t)*100;return Math.round(n*Ev)/Ev}function Av({min:e,now:t,max:r,label:n,visuallyHidden:i,striped:o,animated:s,className:l,style:a,variant:c,bsPrefix:d,...f},h){return k.jsx("div",{ref:h,...f,role:"progressbar",className:Q(l,`${d}-bar`,{[`bg-${c}`]:c,[`${d}-bar-animated`]:s,[`${d}-bar-striped`]:s||o}),style:{width:`${Wz(t,e,r)}%`,...a},"aria-valuenow":t,"aria-valuemin":e,"aria-valuemax":r,children:i?k.jsx("span",{className:"visually-hidden",children:n}):n})}const ex=_.forwardRef(({isChild:e=!1,...t},r)=>{const n={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...t};if(n.bsPrefix=ee(n.bsPrefix,"progress"),e)return Av(n,r);const{min:i,now:o,max:s,label:l,visuallyHidden:a,striped:c,animated:d,bsPrefix:f,variant:h,className:p,children:v,...x}=n;return k.jsx("div",{ref:r,...x,className:Q(p,f),children:v?v4(v,S=>_.cloneElement(S,{isChild:!0})):Av({min:i,now:o,max:s,label:l,visuallyHidden:a,striped:c,animated:d,bsPrefix:f,variant:h},r)})});ex.displayName="ProgressBar";const Kz=ex;var Yz={prefix:"far",iconName:"hourglass-half",icon:[384,512,["hourglass-2"],"f252","M0 24C0 10.7 10.7 0 24 0H360c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V67c0 40.3-16 79-44.5 107.5L225.9 256l81.5 81.5C336 366 352 404.7 352 445v19h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V445c0-40.3 16-79 44.5-107.5L158.1 256 76.5 174.5C48 146 32 107.3 32 67V48H24C10.7 48 0 37.3 0 24zM110.5 371.5c-3.9 3.9-7.5 8.1-10.7 12.5H284.2c-3.2-4.4-6.8-8.6-10.7-12.5L192 289.9l-81.5 81.5zM284.2 128C297 110.4 304 89 304 67V48H80V67c0 22.1 7 43.4 19.8 61H284.2z"]},Xz={prefix:"far",iconName:"calendar-plus",icon:[448,512,[],"f271","M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V256c0-13.3-10.7-24-24-24z"]};function Dp({value:e,onChange:t}){var o;const[r,n]=_.useState(((o=Object.entries(Qt).reverse().find(([,s])=>s.seconds<=3600))==null?void 0:o[0])??"seconds"),i=({currentTarget:s})=>{const l=Number(s.value);t(l*Qt[r].seconds)};return k.jsxs(Nz,{children:[k.jsx(Tn.Control,{type:"number",value:e?e/Qt[r].seconds:"",onChange:i}),k.jsx(Lz,{variant:"outline-secondary",align:"end",title:Qt[r].name,children:Object.entries(Qt).map(([s,l])=>k.jsx(Uw.Item,{active:r===s,onClick:()=>n(s),children:l.name},s))})]})}function Mp({show:e,onHide:t,durationId:r,eventId:n,logId:i}){const[o,s]=_.useState(""),[l,a]=_.useState(),c=_.useContext(tu),d=()=>{c.add({name:o,eventId:n,logId:i,durationId:r,finishAfterSeconds:l||void 0}),f()},f=()=>{s(""),a(void 0),t()};return k.jsxs(Go,{show:e,title:"Vista nýjan teljara",onHide:f,primaryBtnText:"Vista",onPrimaryBtnClick:d,children:[k.jsx(Pi,{label:"Heiti teljara",value:o,onChange:s,autoFocus:!0}),k.jsx(Tn.Label,{children:"Telja upp í ..."}),k.jsx(Dp,{value:l,onChange:a})]})}function Gz({id:e,text:t,inGameTime:r}){const[n,i]=_.useState(!1),{time:o}=_.useContext(Mr),{remove:s}=_.useContext(ii),l=a=>{const c=Math.floor(a/60),d=Math.floor(c/60),f=Math.floor(d/24);return f>=1?`${f} dagar síðan`:d>=1?`${d} klst. síðan`:c>=1?`${c} mín. síðan`:`${a} sek. síðan`};return k.jsxs("div",{className:"hover-container p-2",children:[k.jsxs("div",{className:"d-flex w-100 justify-content-between",style:{minHeight:31},children:[t,k.jsxs("div",{className:"show-on-hover d-flex gap-1",children:[k.jsx(Be,{variant:"outline-secondary",size:"sm",onClick:()=>i(!0),children:k.jsx(Ne,{icon:Yz})}),k.jsx(Be,{variant:"outline-danger",size:"sm",onClick:()=>s(e),children:k.jsx(Ne,{icon:Ma})})]}),k.jsx("small",{className:"hide-on-hover",children:l(o-r)})]}),k.jsx(Mp,{show:n,onHide:()=>i(!1),logId:e})]})}function qz({className:e,children:t}){return k.jsx(Zw,{className:e,children:t})}function Qz({variant:e,children:t}){return k.jsx(Uz,{variant:e,children:t})}const zv=Object.assign(Qz,{Item:qz});function Zz(){const[e,t]=_.useState(!1),r=_.useContext(ii);return k.jsxs("div",{className:"logs",children:[k.jsxs(Or,{children:[k.jsxs(ja,{className:"d-flex justify-content-between p-2",children:[k.jsx("h5",{children:"Atburðir"}),k.jsx(Be,{variant:"outline-secondary",size:"sm",onClick:()=>t(!0),children:k.jsx(Ne,{icon:uu})})]}),k.jsx(Cp,{className:"p-0",children:k.jsx(zv,{variant:"flush",children:[...r.list].reverse().map(n=>k.jsx(zv.Item,{className:"p-0",children:k.jsx(Gz,{id:n.id,text:n.text,inGameTime:n.inGameTime})},n.id))})})]}),k.jsx(L4,{show:e,onHide:()=>t(!1)})]})}function Jz(){const{time:e}=_.useContext(Mr),t=e%Qt.days.seconds,r=Math.floor(t/Qt.hours.seconds%24),n=Math.floor(t/Qt.minutes.seconds%60),i=o=>o<10?`0${o}`:o;return k.jsxs("div",{style:{fontSize:"xxx-large"},children:[i(r),":",i(n)]})}var tx=Object.defineProperty,eT=Object.getOwnPropertyDescriptor,tT=(e,t,r)=>t in e?tx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,rT=(e,t,r,n)=>{for(var i=n>1?void 0:n?eT(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&tx(t,r,i),i},nT=(e,t,r)=>(tT(e,typeof t!="symbol"?t+"":t,r),r);let Wf=class extends Ln{firstUpdated(){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("canvas"),t=e==null?void 0:e.getContext("2d");if(e&&t){const n=e.width/2,i=e.height;let o=0;const s=20,l=60;let a=Math.PI;const c=15,d=60,f=()=>{t.clearRect(0,0,e.width,e.height);const h=n+l*Math.cos(o),p=i-l*Math.sin(o),v=n+d*Math.cos(a),x=i-d*Math.sin(a);t.fillStyle="yellow",t.beginPath(),t.arc(h,p,s,0,Math.PI*2),t.fill(),t.fillStyle="gray",t.beginPath(),t.arc(v,x,c,0,Math.PI*2),t.fill(),o+=.01,a+=.01,requestAnimationFrame(f)};f()}}render(){return O`<canvas></canvas>`}};nT(Wf,"styles",W`
    :host {
      display: block;
      position: relative;
      width: 300px; /* Adjust the size of the canvas as needed */
      height: 150px; /* Adjust the size of the canvas as needed */
      border: 1px solid black;
      border-radius: 50%;
      overflow: hidden;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `);Wf=rT([Qf("day-phase-display")],Wf);function iT(){const{time:e,isPlaying:t,setPlaySpeed:r}=_.useContext(Mr),n=i=>{const o=i%60,s=Math.floor(i/60),l=s%60,a=Math.floor(s/60),c=a%24;return`${Math.floor(a/24)} dagar, ${c} klukkutímar, ${l} mínútur og ${o} sekúndur`};return k.jsxs("div",{className:"time d-flex flex-column align-items-center",children:[n(e),k.jsx(Jz,{}),k.jsx("div",{children:t?k.jsx(Be,{variant:"danger",onClick:()=>r(0),children:k.jsx(Ne,{icon:$6})}):k.jsx(Be,{variant:"success",onClick:()=>r(1),children:k.jsx(Ne,{icon:Q1})})})]})}const Tv=3600;function oT({show:e,onHide:t}){const[r,n]=_.useState(""),[i,o]=_.useState(Tv),{add:s}=_.useContext(nu),l=()=>{s({name:r,duration:i}),a()},a=()=>{t(),n(""),o(Tv)};return k.jsxs(Go,{show:e,title:"Vista nýtt tímabil",onHide:a,primaryBtnText:"Vista",onPrimaryBtnClick:l,children:[k.jsx(Pi,{label:"Heiti",value:r,onChange:n}),k.jsx(Tn.Label,{children:"Tímalengd"}),k.jsx(Dp,{value:i,onChange:o})]})}function sT({id:e,name:t,duration:r}){const[n,i]=_.useState(!1),{remove:o}=_.useContext(nu),{add:s}=_.useContext(ii),{addTime:l}=_.useContext(Mr),a=()=>{const c=l(r);s({text:t,inGameTime:c,durationId:e})};return k.jsxs(k.Fragment,{children:[k.jsx(Or,{className:"p-2 mt-2",children:k.jsxs("div",{className:"d-flex w-100 justify-content-between",children:[k.jsxs("div",{children:[k.jsx(Be,{variant:"outline-success",size:"sm",onClick:a,children:k.jsx(Ne,{icon:A6})})," ",t]}),k.jsxs("div",{children:[k.jsx(Be,{className:"me-1",variant:"outline-secondary",size:"sm",onClick:()=>i(!0),children:k.jsx(Ne,{icon:q1})}),k.jsx(Be,{variant:"outline-danger",size:"sm",onClick:()=>o(e),children:k.jsx(Ne,{icon:Ma})})]})]})}),k.jsx(Mp,{show:n,onHide:()=>i(!1),durationId:e})]})}const Ov=3600;function aT({show:e,onHide:t}){const[r,n]=_.useState(""),[i,o]=_.useState(Ov),{addTime:s}=_.useContext(Mr),{add:l}=_.useContext(ii),a=()=>{const d=s(i);l({text:r,inGameTime:d}),c()},c=()=>{t(),n(""),o(Ov)};return k.jsxs(Go,{show:e,title:"Spóla áfram...",onHide:c,primaryBtnText:"Keyra",onPrimaryBtnClick:a,children:[k.jsx(Pi,{label:"Texti",value:r,onChange:n}),k.jsx(Tn.Label,{children:"Tímalengd"}),k.jsx(Dp,{value:i,onChange:o})]})}function lT(){const[e,t]=_.useState(!1),[r,n]=_.useState(!1),i=_.useContext(nu);return k.jsxs("div",{children:[k.jsx(Or,{style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:k.jsxs(ja,{className:"d-flex justify-content-between p-2",style:{borderBottom:"none"},children:[k.jsx("h5",{children:"Tímabil"}),k.jsxs("div",{children:[k.jsx(Be,{className:"me-1",variant:"outline-success",size:"sm",onClick:()=>n(!0),children:k.jsx(Ne,{icon:E6})}),k.jsx(Be,{variant:"outline-secondary",size:"sm",onClick:()=>t(!0),children:k.jsx(Ne,{icon:uu})})]})]})}),i.list.map(o=>k.jsx(sT,{id:o.id,name:o.name,duration:o.duration},o.id)),k.jsx(oT,{show:e,onHide:()=>t(!1)}),k.jsx(aT,{show:r,onHide:()=>n(!1)})]})}function cT({show:e,onHide:t}){const[r,n]=_.useState(""),{add:i}=_.useContext(iu),o=()=>{i({name:r}),n(""),t()};return k.jsx(Go,{show:e,title:"Vista nýjan atburð",onHide:t,primaryBtnText:"Vista",onPrimaryBtnClick:o,children:k.jsx(Pi,{label:"Heiti",value:r,onChange:n})})}function uT({id:e,name:t}){const[r,n]=_.useState(!1),{remove:i}=_.useContext(iu),{add:o}=_.useContext(ii),{time:s}=_.useContext(Mr);return k.jsxs(k.Fragment,{children:[k.jsx(Or,{className:"p-2 mt-2",children:k.jsxs("div",{className:"d-flex w-100 justify-content-between",children:[k.jsxs("div",{children:[k.jsx(Be,{variant:"outline-success",size:"sm",onClick:()=>o({text:t,inGameTime:s,eventId:e}),children:k.jsx(Ne,{icon:Xz})})," ",t]}),k.jsxs("div",{children:[k.jsx(Be,{className:"me-1",variant:"outline-secondary",size:"sm",onClick:()=>n(!0),children:k.jsx(Ne,{icon:q1})}),k.jsx(Be,{variant:"outline-danger",size:"sm",onClick:()=>i(e),children:k.jsx(Ne,{icon:Ma})})]})]})}),k.jsx(Mp,{show:r,onHide:()=>n(!1),eventId:e})]})}function dT(){const[e,t]=_.useState(!1),r=_.useContext(iu);return k.jsxs("div",{children:[k.jsx(Or,{style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:k.jsxs(ja,{className:"d-flex justify-content-between p-2",style:{borderBottom:"none"},children:[k.jsx("h5",{children:"Viðburðir"}),k.jsx(Be,{variant:"outline-secondary",size:"sm",onClick:()=>t(!0),children:k.jsx(Ne,{icon:uu})})]})}),r.list.map(n=>k.jsx(uT,{id:n.id,name:n.name},n.id)),k.jsx(cT,{show:e,onHide:()=>t(!1)})]})}function fT({show:e,onHide:t}){const[r,n]=_.useState(""),[i,o]=_.useState(1),{add:s}=_.useContext(ru),l=()=>{s({name:r,speed:i}),n(""),o(1),t()};return k.jsxs(Go,{show:e,title:"Vista nýjan tímahraða",onHide:t,primaryBtnText:"Vista",onPrimaryBtnClick:l,children:[k.jsx(Pi,{label:"Heiti",value:r,onChange:n}),k.jsx(Pi,{type:"number",label:"Hraði",text:"Hraði sem margfeldi við raunverulegan tíma.",value:i,onChange:a=>o(a??0)})]})}function hT({id:e,name:t,speed:r}){const{setPlaySpeed:n}=_.useContext(Mr),{remove:i}=_.useContext(ru);return k.jsx(Or,{className:"p-2 mt-2",children:k.jsxs("div",{className:"d-flex w-100 justify-content-between",children:[k.jsxs("div",{children:[k.jsx(Be,{variant:"outline-success",size:"sm",onClick:()=>n(r),children:k.jsx(Ne,{icon:Q1})})," ",t]}),k.jsx(Be,{variant:"outline-danger",size:"sm",onClick:()=>i(e),children:k.jsx(Ne,{icon:Ma})})]})})}function pT(){const[e,t]=_.useState(!1),r=_.useContext(ru);return k.jsxs("div",{children:[k.jsx(Or,{style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:k.jsxs(ja,{className:"d-flex justify-content-between p-2",style:{borderBottom:"none"},children:[k.jsx("h5",{children:"Spilunarhraði"}),k.jsx(Be,{variant:"outline-secondary",size:"sm",onClick:()=>t(!0),children:k.jsx(Ne,{icon:uu})})]})}),r.list.map(n=>k.jsx(hT,{id:n.id,name:n.name,speed:n.speed},n.id)),k.jsx(fT,{show:e,onHide:()=>t(!1)})]})}function mT(){return k.jsxs("div",{className:"lists",children:[k.jsx(pT,{}),k.jsx("hr",{}),k.jsx(lT,{}),k.jsx("hr",{}),k.jsx(dT,{})]})}function gT({id:e,durationId:t,eventId:r,logId:n,name:i,finishAfterSeconds:o}){const{time:s,isPlaying:l}=_.useContext(Mr),{list:a}=_.useContext(ii),{remove:c}=_.useContext(tu),d=_.useCallback(()=>{var p,v,x;return t?((p=a.findLast(S=>S.durationId===t))==null?void 0:p.inGameTime)??0:r?((v=a.findLast(S=>S.eventId===r))==null?void 0:v.inGameTime)??0:n?((x=a.find(S=>S.id===n))==null?void 0:x.inGameTime)??0:0},[a,t,r,n]),f=p=>{const v=Math.floor(p/60),x=Math.floor(v/60),S=Math.floor(x/24);return S>1?`${S} dagar síðan`:x>1?`${x} klukkutímar síðan`:v>1?`${v} mínútur síðan`:`${p} sekúndur síðan`},h=s-d()>(o??0);return k.jsxs(Or,{className:"p-2 mt-2 hover-container",children:[k.jsxs("div",{className:"d-flex w-100 justify-content-between",style:{minHeight:31},children:[i,k.jsx("div",{className:"show-on-hover d-flex gap-1",children:k.jsx(Be,{variant:"outline-danger",size:"sm",onClick:()=>c(e),children:k.jsx(Ne,{icon:Ma})})}),k.jsx("small",{className:"hide-on-hover",children:f(s-d())})]}),o&&k.jsx(Kz,{className:"mt-1",style:{height:"0.5em"},animated:l&&!h,variant:h?"danger":void 0,now:s-d(),max:o})]})}function vT(){const{list:e}=_.useContext(tu);return k.jsxs("div",{className:"mt-3",children:[k.jsx(Or,{style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:k.jsx(Or.Header,{className:"p-2",style:{borderBottom:"none"},children:k.jsx("h5",{children:"Teljarar"})})}),e.map(t=>k.jsx(gT,{id:t.id,name:t.name,durationId:t.durationId,eventId:t.eventId,logId:t.logId,finishAfterSeconds:t.finishAfterSeconds},t.id))]})}const yT=[{version:"0.3.0",changes:['Bætt við valkostinum að "spóla áfram" stöku sinnum, frekar en að þurfa að vista tímabil. Þetta er hugsað fyrir tilfelli eins og ferðatíma, sem getur verið mjög mismunandi.']},{version:"0.2.0",changes:['Bætt við möguleikanum á að "import"-a og "export"-a gögnum úr appinu. Þetta er aðallega hugsað til að geta fært gögn yfir á annan vafra.']}];var bT=Object.defineProperty,wT=Object.getOwnPropertyDescriptor,xT=(e,t,r,n)=>{for(var i=n>1?void 0:n?wT(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&bT(t,r,i),i};let Pv=class extends Ln{render(){return O`
      <sl-button variant="neutral" size="small" pill outline @click=${this.openDialog}>
        ${"0.3.0"}
      </sl-button>
      <sl-dialog label="Breytingasaga">
        ${yT.map(e=>O`
          <strong>${e.version}</strong>
          <ul>
            ${e.changes.map(t=>O`
              <li>${t}</li>
            `)}
          </ul>
        `)}
      </sl-dialog>
    `}openDialog(){var e,t;(t=(e=this.renderRoot)==null?void 0:e.querySelector("sl-dialog"))==null||t.show()}};Pv=xT([Qf("change-log-button")],Pv);var rx=Object.defineProperty,_T=Object.getOwnPropertyDescriptor,kT=(e,t,r)=>t in e?rx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,CT=(e,t,r,n)=>{for(var i=n>1?void 0:n?_T(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&rx(t,r,i),i},ST=(e,t,r)=>(kT(e,typeof t!="symbol"?t+"":t,r),r);let Kf=class extends Ln{render(){return O`
      <div class="top-panel">
        <change-log-button></change-log-button>
        <strong>D&D Timer</strong>
        <sl-button variant="default" size="small" circle @click=${this.openDialog}>
          <sl-icon name="gear" label="Settings"></sl-icon>
        </sl-button>
      </div>
      <sl-dialog label="Stillingar" class="settings-dialog">
        <sl-tab-group>
          <sl-tab slot="nav" panel="import">Import</sl-tab>
          <sl-tab slot="nav" panel="export">Export</sl-tab>

          <sl-tab-panel name="import">
            <sl-textarea id="import-text"></sl-textarea>
            <sl-button variant="success" class="mt-1" @click=${this.importData}>
              Vista
            </sl-button>
          </sl-tab-panel>
          <sl-tab-panel name="export" >
            <sl-copy-button value="Copied from a custom button" from="export-text.value">
              <sl-icon slot="copy-icon" name="clipboard"></sl-icon>
              <sl-icon slot="success-icon" name="clipboard-check"></sl-icon>
              <sl-icon slot="error-icon" name="clipboard-x"></sl-icon>
            </sl-copy-button>
            <sl-textarea id="export-text" disabled>
            </sl-textarea>
          </sl-tab-panel>
        </sl-tab-group>
      </sl-dialog>
    `}openDialog(){var e,t;(t=(e=this.renderRoot)==null?void 0:e.querySelector(".settings-dialog"))==null||t.show()}importData(){var t,r;const e=(r=(t=this.renderRoot)==null?void 0:t.querySelector("#import-text"))==null?void 0:r.value;localStorage.clear(),e&&Object.entries(JSON.parse(e)).forEach(([n,i])=>{localStorage.setItem(n,JSON.stringify(i))}),window.location.reload()}firstUpdated(){var r;const e={};Object.keys(localStorage).forEach(n=>e[n]=JSON.parse(localStorage.getItem(n)??"")||void 0);const t=(r=this.renderRoot)==null?void 0:r.querySelector("#export-text");t&&(t.value=JSON.stringify(e,null,2))}};ST(Kf,"styles",W`
    .top-panel {
      padding: 0.5rem;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid lightgray;
    }
    #import-text {
      margin-bottom: 0.5rem
    }
    .settings-dialog {
      --height: 22rem;
    }
  `);Kf=CT([Qf("top-panel")],Kf);function $T(){return k.jsxs("div",{children:[k.jsx("top-panel",{}),k.jsx("div",{className:"App",children:k.jsxs(p4,{children:[k.jsx(Zz,{}),k.jsxs("div",{style:{flex:1},children:[k.jsx(iT,{}),k.jsx(vT,{})]}),k.jsx(mT,{})]})})]})}const ET="modulepreload",AT=function(e){return"/dnd-timer/"+e},Lv={},zT=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(r.map(a=>{if(a=AT(a),a in Lv)return;Lv[a]=!0;const c=a.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const v=o[p];if(v.href===a&&(!c||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":ET,c||(h.as="script",h.crossOrigin=""),h.href=a,l&&h.setAttribute("nonce",l),document.head.appendChild(h),c)return new Promise((p,v)=>{h.addEventListener("load",p),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},TT=e=>{e&&e instanceof Function&&zT(()=>import("./web-vitals-BhWu73fZ.js"),[]).then(({getCLS:t,getFID:r,getFCP:n,getLCP:i,getTTFB:o})=>{t(e),r(e),n(e),i(e),o(e)})},OT=Ed.createRoot(document.getElementById("root"));OT.render(k.jsx(ot.StrictMode,{children:k.jsx($T,{})}));TT();
