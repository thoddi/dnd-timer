var rx=Object.defineProperty;var nx=(e,t,r)=>t in e?rx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Mp=(e,t,r)=>(nx(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var Lv=Object.defineProperty,ix=Object.defineProperties,ox=Object.getOwnPropertyDescriptor,sx=Object.getOwnPropertyDescriptors,jp=Object.getOwnPropertySymbols,ax=Object.prototype.hasOwnProperty,lx=Object.prototype.propertyIsEnumerable,mu=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Fp=(e,t,r)=>t in e?Lv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,on=(e,t)=>{for(var r in t||(t={}))ax.call(t,r)&&Fp(e,r,t[r]);if(jp)for(var r of jp(t))lx.call(t,r)&&Fp(e,r,t[r]);return e},va=(e,t)=>ix(e,sx(t)),u=(e,t,r,n)=>{for(var i=n>1?void 0:n?ox(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&Lv(t,r,i),i},cx=function(e,t){this[0]=e,this[1]=t},ux=e=>{var t=e[mu("asyncIterator")],r=!1,n,i={};return t==null?(t=e[mu("iterator")](),n=o=>i[o]=s=>t[o](s)):(t=t.call(e),n=o=>i[o]=s=>{if(r){if(r=!1,o==="throw")throw s;return s}return r=!0,{done:!1,value:new cx(new Promise(l=>{var a=t[o](s);if(!(a instanceof Object))throw TypeError("Object expected");l(a)}),1)}}),i[mu("iterator")]=()=>i,n("next"),"throw"in t?n("throw"):i.throw=o=>{throw o},"return"in t&&n("return"),i},Qo=new WeakMap,Zo=new WeakMap,Jo=new WeakMap,gu=new WeakSet,Ka=new WeakMap,sn=class{constructor(e,t){this.handleFormData=r=>{const n=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!n&&!s&&typeof i=="string"&&i.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(l=>{r.formData.append(i,l.toString())}):r.formData.append(i,o.toString()))},this.handleFormSubmit=r=>{var n;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((n=Qo.get(this.form))==null||n.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!i&&!o(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ka.set(this.host,[])},this.handleInteraction=r=>{const n=Ka.get(this.host);n.includes(r.type)||n.push(r.type),n.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const n of r)if(typeof n.checkValidity=="function"&&!n.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const n of r)if(typeof n.reportValidity=="function"&&!n.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=on({form:r=>{const n=r.form;if(n){const o=r.getRootNode().querySelector(`#${n}`);if(o)return o}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var n;return(n=r.disabled)!=null?n:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,n)=>r.value=n,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Ka.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ka.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Qo.has(this.form)?Qo.get(this.form).add(this.host):Qo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Zo.has(this.form)||(Zo.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Jo.has(this.form)||(Jo.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Qo.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Zo.has(this.form)&&(this.form.reportValidity=Zo.get(this.form),Zo.delete(this.form)),Jo.has(this.form)&&(this.form.checkValidity=Jo.get(this.form),Jo.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?gu.add(e):gu.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(n=>{t.hasAttribute(n)&&r.setAttribute(n,t.getAttribute(n))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!gu.has(t),n=!!t.required;t.toggleAttribute("data-required",n),t.toggleAttribute("data-optional",!n),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Tc=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),dx=Object.freeze(va(on({},Tc),{valid:!1,valueMissing:!0})),fx=Object.freeze(va(on({},Tc),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const El=globalThis,Yf=El.ShadowRoot&&(El.ShadyCSS===void 0||El.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xf=Symbol(),Bp=new WeakMap;let Iv=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Xf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Yf&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Bp.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Bp.set(r,t))}return t}toString(){return this.cssText}};const hx=e=>new Iv(typeof e=="string"?e:e+"",void 0,Xf),W=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Iv(r,e,Xf)},px=(e,t)=>{if(Yf)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=El.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},Vp=Yf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return hx(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mx,defineProperty:gx,getOwnPropertyDescriptor:vx,getOwnPropertyNames:yx,getOwnPropertySymbols:bx,getPrototypeOf:wx}=Object,On=globalThis,Hp=On.trustedTypes,xx=Hp?Hp.emptyScript:"",vu=On.reactiveElementPolyfillSupport,xs=(e,t)=>e,_o={toAttribute(e,t){switch(t){case Boolean:e=e?xx:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Gf=(e,t)=>!mx(e,t),Up={attribute:!0,type:String,converter:_o,reflect:!1,hasChanged:Gf};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),On.litPropertyMetadata??(On.litPropertyMetadata=new WeakMap);class Gi extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Up){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&gx(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:o}=vx(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const l=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Up}static _$Ei(){if(this.hasOwnProperty(xs("elementProperties")))return;const t=wx(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(xs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xs("properties"))){const r=this.properties,n=[...yx(r),...bx(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(Vp(i))}else t!==void 0&&r.push(Vp(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return px(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EC(t,r){var o;const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:_o).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,r){var o;const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:_o;this._$Em=i,this[i]=l.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Gf)(this[t],r))return;this.P(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(r)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}Gi.elementStyles=[],Gi.shadowRootOptions={mode:"open"},Gi[xs("elementProperties")]=new Map,Gi[xs("finalized")]=new Map,vu==null||vu({ReactiveElement:Gi}),(On.reactiveElementVersions??(On.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _s=globalThis,Wl=_s.trustedTypes,Wp=Wl?Wl.createPolicy("lit-html",{createHTML:e=>e}):void 0,Rv="$lit$",kn=`lit$${(Math.random()+"").slice(9)}$`,Nv="?"+kn,_x=`<${Nv}>`,ki=document,Hs=()=>ki.createComment(""),Us=e=>e===null||typeof e!="object"&&typeof e!="function",Dv=Array.isArray,kx=e=>Dv(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",yu=`[ 	
\f\r]`,es=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kp=/-->/g,Yp=/>/g,oi=RegExp(`>|${yu}(?:([^\\s"'>=/]+)(${yu}*=${yu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xp=/'/g,Gp=/"/g,Mv=/^(?:script|style|textarea|title)$/i,Cx=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),O=Cx(1),Rt=Symbol.for("lit-noChange"),Ce=Symbol.for("lit-nothing"),qp=new WeakMap,di=ki.createTreeWalker(ki,129);function jv(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wp!==void 0?Wp.createHTML(t):t}const Sx=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":"",s=es;for(let l=0;l<r;l++){const a=e[l];let c,f,d=-1,h=0;for(;h<a.length&&(s.lastIndex=h,f=s.exec(a),f!==null);)h=s.lastIndex,s===es?f[1]==="!--"?s=Kp:f[1]!==void 0?s=Yp:f[2]!==void 0?(Mv.test(f[2])&&(i=RegExp("</"+f[2],"g")),s=oi):f[3]!==void 0&&(s=oi):s===oi?f[0]===">"?(s=i??es,d=-1):f[1]===void 0?d=-2:(d=s.lastIndex-f[2].length,c=f[1],s=f[3]===void 0?oi:f[3]==='"'?Gp:Xp):s===Gp||s===Xp?s=oi:s===Kp||s===Yp?s=es:(s=oi,i=void 0);const p=s===oi&&e[l+1].startsWith("/>")?" ":"";o+=s===es?a+_x:d>=0?(n.push(c),a.slice(0,d)+Rv+a.slice(d)+kn+p):a+kn+(d===-2?l:p)}return[jv(e,o+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};let hd=class Fv{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const l=t.length-1,a=this.parts,[c,f]=Sx(t,r);if(this.el=Fv.createElement(c,n),di.currentNode=this.el.content,r===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=di.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Rv)){const h=f[s++],p=i.getAttribute(d).split(kn),v=/([.?@])?(.*)/.exec(h);a.push({type:1,index:o,name:v[2],strings:p,ctor:v[1]==="."?Ex:v[1]==="?"?Ax:v[1]==="@"?zx:Oc}),i.removeAttribute(d)}else d.startsWith(kn)&&(a.push({type:6,index:o}),i.removeAttribute(d));if(Mv.test(i.tagName)){const d=i.textContent.split(kn),h=d.length-1;if(h>0){i.textContent=Wl?Wl.emptyScript:"";for(let p=0;p<h;p++)i.append(d[p],Hs()),di.nextNode(),a.push({type:2,index:++o});i.append(d[h],Hs())}}}else if(i.nodeType===8)if(i.data===Nv)a.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(kn,d+1))!==-1;)a.push({type:7,index:o}),d+=kn.length-1}o++}}static createElement(t,r){const n=ki.createElement("template");return n.innerHTML=t,n}};function ko(e,t,r=e,n){var s,l;if(t===Rt)return t;let i=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const o=Us(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(t=ko(e,i._$AS(e,t.values),i,n)),t}let $x=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??ki).importNode(r,!0);di.currentNode=i;let o=di.nextNode(),s=0,l=0,a=n[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new qf(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Tx(o,this,t)),this._$AV.push(c),a=n[++l]}s!==(a==null?void 0:a.index)&&(o=di.nextNode(),s++)}return di.currentNode=ki,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}},qf=class Bv{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=Ce,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ko(this,t,r),Us(t)?t===Ce||t==null||t===""?(this._$AH!==Ce&&this._$AR(),this._$AH=Ce):t!==this._$AH&&t!==Rt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):kx(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Ce&&Us(this._$AH)?this._$AA.nextSibling.data=t:this.T(ki.createTextNode(t)),this._$AH=t}$(t){var o;const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=hd.createElement(jv(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(r);else{const s=new $x(i,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(t){let r=qp.get(t.strings);return r===void 0&&qp.set(t.strings,r=new hd(t)),r}k(t){Dv(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new Bv(this.S(Hs()),this.S(Hs()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}},Oc=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,o){this.type=1,this._$AH=Ce,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ce}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=ko(this,t,r,0),s=!Us(t)||t!==this._$AH&&t!==Rt,s&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=ko(this,l[n+a],r,a),c===Rt&&(c=this._$AH[a]),s||(s=!Us(c)||c!==this._$AH[a]),c===Ce?t=Ce:t!==Ce&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}s&&!i&&this.j(t)}j(t){t===Ce?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ex=class extends Oc{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ce?void 0:t}},Ax=class extends Oc{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ce)}},zx=class extends Oc{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){if((t=ko(this,t,r,0)??Ce)===Rt)return;const n=this._$AH,i=t===Ce&&n!==Ce||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==Ce&&(n===Ce||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}},Tx=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ko(this,t)}};const bu=_s.litHtmlPolyfillSupport;bu==null||bu(hd,qf),(_s.litHtmlVersions??(_s.litHtmlVersions=[])).push("3.1.2");const Ox=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const o=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new qf(t.insertBefore(Hs(),o),o,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pn=class extends Gi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ox(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Rt}};var Pv;Pn._$litElement$=!0,Pn.finalized=!0,(Pv=globalThis.litElementHydrateSupport)==null||Pv.call(globalThis,{LitElement:Pn});const wu=globalThis.litElementPolyfillSupport;wu==null||wu({LitElement:Pn});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var Px=W`
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
 */const Lx={attribute:!0,type:String,converter:_o,reflect:!1,hasChanged:Gf},Ix=(e=Lx,t,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,e)},init(l){return l!==void 0&&this.P(s,void 0,e),l}}}if(n==="setter"){const{name:s}=r;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+n)};function g(e){return(t,r)=>typeof r=="object"?Ix(e,t,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,r)}/**
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
 */function Rx(e){return(t,r)=>pd(t,r,{async get(){var n;return await this.updateComplete,((n=this.renderRoot)==null?void 0:n.querySelector(e))??null}})}var V=class extends Pn{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,on({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const n=customElements.get(e);if(!n){customElements.define(e,class extends t{},r);return}let i=" (unknown version)",o=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in n&&n.version&&(o=" v"+n.version),!(i&&o&&i===o)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${o} has already been registered.`)}};V.version="2.15.0";V.dependencies={};u([g()],V.prototype,"dir",2);u([g()],V.prototype,"lang",2);var Jf=class extends V{render(){return O` <slot></slot> `}};Jf.styles=[X,Px];Jf.define("sl-visually-hidden");var Nx=W`
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
`,Dx=W`
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
`;const Bn=Math.min,It=Math.max,Kl=Math.round,Ya=Math.floor,Vn=e=>({x:e,y:e}),Mx={left:"right",right:"left",bottom:"top",top:"bottom"},jx={start:"end",end:"start"};function md(e,t,r){return It(e,Bn(t,r))}function jo(e,t){return typeof e=="function"?e(t):e}function Hn(e){return e.split("-")[0]}function Fo(e){return e.split("-")[1]}function Vv(e){return e==="x"?"y":"x"}function eh(e){return e==="y"?"height":"width"}function ya(e){return["top","bottom"].includes(Hn(e))?"y":"x"}function th(e){return Vv(ya(e))}function Fx(e,t,r){r===void 0&&(r=!1);const n=Fo(e),i=th(e),o=eh(i);let s=i==="x"?n===(r?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Yl(s)),[s,Yl(s)]}function Bx(e){const t=Yl(e);return[gd(e),t,gd(t)]}function gd(e){return e.replace(/start|end/g,t=>jx[t])}function Vx(e,t,r){const n=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return r?t?i:n:t?n:i;case"left":case"right":return t?o:s;default:return[]}}function Hx(e,t,r,n){const i=Fo(e);let o=Vx(Hn(e),r==="start",n);return i&&(o=o.map(s=>s+"-"+i),t&&(o=o.concat(o.map(gd)))),o}function Yl(e){return e.replace(/left|right|bottom|top/g,t=>Mx[t])}function Ux(e){return{top:0,right:0,bottom:0,left:0,...e}}function Hv(e){return typeof e!="number"?Ux(e):{top:e,right:e,bottom:e,left:e}}function Xl(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Qp(e,t,r){let{reference:n,floating:i}=e;const o=ya(t),s=th(t),l=eh(s),a=Hn(t),c=o==="y",f=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,h=n[l]/2-i[l]/2;let p;switch(a){case"top":p={x:f,y:n.y-i.height};break;case"bottom":p={x:f,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:d};break;case"left":p={x:n.x-i.width,y:d};break;default:p={x:n.x,y:n.y}}switch(Fo(t)){case"start":p[s]-=h*(r&&c?-1:1);break;case"end":p[s]+=h*(r&&c?-1:1);break}return p}const Wx=async(e,t,r)=>{const{placement:n="bottom",strategy:i="absolute",middleware:o=[],platform:s}=r,l=o.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:f,y:d}=Qp(c,n,a),h=n,p={},v=0;for(let x=0;x<l.length;x++){const{name:S,fn:b}=l[x],{x:m,y,data:w,reset:C}=await b({x:f,y:d,initialPlacement:n,placement:h,strategy:i,middlewareData:p,rects:c,platform:s,elements:{reference:e,floating:t}});f=m??f,d=y??d,p={...p,[S]:{...p[S],...w}},C&&v<=50&&(v++,typeof C=="object"&&(C.placement&&(h=C.placement),C.rects&&(c=C.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):C.rects),{x:f,y:d}=Qp(c,h,a)),x=-1)}return{x:f,y:d,placement:h,strategy:i,middlewareData:p}};async function rh(e,t){var r;t===void 0&&(t={});const{x:n,y:i,platform:o,rects:s,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=jo(t,e),v=Hv(p),S=l[h?d==="floating"?"reference":"floating":d],b=Xl(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(S)))==null||r?S:S.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:f,strategy:a})),m=d==="floating"?{...s.floating,x:n,y:i}:s.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),w=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},C=Xl(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:m,offsetParent:y,strategy:a}):m);return{top:(b.top-C.top+v.top)/w.y,bottom:(C.bottom-b.bottom+v.bottom)/w.y,left:(b.left-C.left+v.left)/w.x,right:(C.right-b.right+v.right)/w.x}}const Kx=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:n,placement:i,rects:o,platform:s,elements:l,middlewareData:a}=t,{element:c,padding:f=0}=jo(e,t)||{};if(c==null)return{};const d=Hv(f),h={x:r,y:n},p=th(i),v=eh(p),x=await s.getDimensions(c),S=p==="y",b=S?"top":"left",m=S?"bottom":"right",y=S?"clientHeight":"clientWidth",w=o.reference[v]+o.reference[p]-h[p]-o.floating[v],C=h[p]-o.reference[p],$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let E=$?$[y]:0;(!E||!await(s.isElement==null?void 0:s.isElement($)))&&(E=l.floating[y]||o.floating[v]);const A=w/2-C/2,T=E/2-x[v]/2-1,z=Bn(d[b],T),N=Bn(d[m],T),D=z,Y=E-x[v]-N,Z=E/2-x[v]/2+A,re=md(D,Z,Y),J=!a.arrow&&Fo(i)!=null&&Z!==re&&o.reference[v]/2-(Z<D?z:N)-x[v]/2<0,oe=J?Z<D?Z-D:Z-Y:0;return{[p]:h[p]+oe,data:{[p]:re,centerOffset:Z-re-oe,...J&&{alignmentOffset:oe}},reset:J}}}),Yx=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,n;const{placement:i,middlewareData:o,rects:s,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...S}=jo(e,t);if((r=o.arrow)!=null&&r.alignmentOffset)return{};const b=Hn(i),m=Hn(l)===l,y=await(a.isRTL==null?void 0:a.isRTL(c.floating)),w=h||(m||!x?[Yl(l)]:Bx(l));!h&&v!=="none"&&w.push(...Hx(l,x,v,y));const C=[l,...w],$=await rh(t,S),E=[];let A=((n=o.flip)==null?void 0:n.overflows)||[];if(f&&E.push($[b]),d){const D=Fx(i,s,y);E.push($[D[0]],$[D[1]])}if(A=[...A,{placement:i,overflows:E}],!E.every(D=>D<=0)){var T,z;const D=(((T=o.flip)==null?void 0:T.index)||0)+1,Y=C[D];if(Y)return{data:{index:D,overflows:A},reset:{placement:Y}};let Z=(z=A.filter(re=>re.overflows[0]<=0).sort((re,J)=>re.overflows[1]-J.overflows[1])[0])==null?void 0:z.placement;if(!Z)switch(p){case"bestFit":{var N;const re=(N=A.map(J=>[J.placement,J.overflows.filter(oe=>oe>0).reduce((oe,L)=>oe+L,0)]).sort((J,oe)=>J[1]-oe[1])[0])==null?void 0:N[0];re&&(Z=re);break}case"initialPlacement":Z=l;break}if(i!==Z)return{reset:{placement:Z}}}return{}}}};async function Xx(e,t){const{placement:r,platform:n,elements:i}=e,o=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=Hn(r),l=Fo(r),a=ya(r)==="y",c=["left","top"].includes(s)?-1:1,f=o&&a?-1:1,d=jo(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof v=="number"&&(p=l==="end"?v*-1:v),a?{x:p*f,y:h*c}:{x:h*c,y:p*f}}const Gx=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,n;const{x:i,y:o,placement:s,middlewareData:l}=t,a=await Xx(t,e);return s===((r=l.offset)==null?void 0:r.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+a.x,y:o+a.y,data:{...a,placement:s}}}}},qx=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:n,placement:i}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:S=>{let{x:b,y:m}=S;return{x:b,y:m}}},...a}=jo(e,t),c={x:r,y:n},f=await rh(t,a),d=ya(Hn(i)),h=Vv(d);let p=c[h],v=c[d];if(o){const S=h==="y"?"top":"left",b=h==="y"?"bottom":"right",m=p+f[S],y=p-f[b];p=md(m,p,y)}if(s){const S=d==="y"?"top":"left",b=d==="y"?"bottom":"right",m=v+f[S],y=v-f[b];v=md(m,v,y)}const x=l.fn({...t,[h]:p,[d]:v});return{...x,data:{x:x.x-r,y:x.y-n}}}}},Qx=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:n,platform:i,elements:o}=t,{apply:s=()=>{},...l}=jo(e,t),a=await rh(t,l),c=Hn(r),f=Fo(r),d=ya(r)==="y",{width:h,height:p}=n.floating;let v,x;c==="top"||c==="bottom"?(v=c,x=f===(await(i.isRTL==null?void 0:i.isRTL(o.floating))?"start":"end")?"left":"right"):(x=c,v=f==="end"?"top":"bottom");const S=p-a[v],b=h-a[x],m=!t.middlewareData.shift;let y=S,w=b;if(d){const $=h-a.left-a.right;w=f||m?Bn(b,$):$}else{const $=p-a.top-a.bottom;y=f||m?Bn(S,$):$}if(m&&!f){const $=It(a.left,0),E=It(a.right,0),A=It(a.top,0),T=It(a.bottom,0);d?w=h-2*($!==0||E!==0?$+E:It(a.left,a.right)):y=p-2*(A!==0||T!==0?A+T:It(a.top,a.bottom))}await s({...t,availableWidth:w,availableHeight:y});const C=await i.getDimensions(o.floating);return h!==C.width||p!==C.height?{reset:{rects:!0}}:{}}}};function Un(e){return Uv(e)?(e.nodeName||"").toLowerCase():"#document"}function Dt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function an(e){var t;return(t=(Uv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Uv(e){return e instanceof Node||e instanceof Dt(e).Node}function Xr(e){return e instanceof Element||e instanceof Dt(e).Element}function Tr(e){return e instanceof HTMLElement||e instanceof Dt(e).HTMLElement}function Zp(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Dt(e).ShadowRoot}function ba(e){const{overflow:t,overflowX:r,overflowY:n,display:i}=er(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(i)}function Zx(e){return["table","td","th"].includes(Un(e))}function nh(e){const t=ih(),r=er(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(r.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(r.contain||"").includes(n))}function Jx(e){let t=Co(e);for(;Tr(t)&&!Pc(t);){if(nh(t))return t;t=Co(t)}return null}function ih(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Pc(e){return["html","body","#document"].includes(Un(e))}function er(e){return Dt(e).getComputedStyle(e)}function Lc(e){return Xr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Co(e){if(Un(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Zp(e)&&e.host||an(e);return Zp(t)?t.host:t}function Wv(e){const t=Co(e);return Pc(t)?e.ownerDocument?e.ownerDocument.body:e.body:Tr(t)&&ba(t)?t:Wv(t)}function Ws(e,t,r){var n;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=Wv(e),o=i===((n=e.ownerDocument)==null?void 0:n.body),s=Dt(i);return o?t.concat(s,s.visualViewport||[],ba(i)?i:[],s.frameElement&&r?Ws(s.frameElement):[]):t.concat(i,Ws(i,[],r))}function Kv(e){const t=er(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=Tr(e),o=i?e.offsetWidth:r,s=i?e.offsetHeight:n,l=Kl(r)!==o||Kl(n)!==s;return l&&(r=o,n=s),{width:r,height:n,$:l}}function oh(e){return Xr(e)?e:e.contextElement}function po(e){const t=oh(e);if(!Tr(t))return Vn(1);const r=t.getBoundingClientRect(),{width:n,height:i,$:o}=Kv(t);let s=(o?Kl(r.width):r.width)/n,l=(o?Kl(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const e2=Vn(0);function Yv(e){const t=Dt(e);return!ih()||!t.visualViewport?e2:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function t2(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==Dt(e)?!1:t}function Ci(e,t,r,n){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),o=oh(e);let s=Vn(1);t&&(n?Xr(n)&&(s=po(n)):s=po(e));const l=t2(o,r,n)?Yv(o):Vn(0);let a=(i.left+l.x)/s.x,c=(i.top+l.y)/s.y,f=i.width/s.x,d=i.height/s.y;if(o){const h=Dt(o),p=n&&Xr(n)?Dt(n):n;let v=h,x=v.frameElement;for(;x&&n&&p!==v;){const S=po(x),b=x.getBoundingClientRect(),m=er(x),y=b.left+(x.clientLeft+parseFloat(m.paddingLeft))*S.x,w=b.top+(x.clientTop+parseFloat(m.paddingTop))*S.y;a*=S.x,c*=S.y,f*=S.x,d*=S.y,a+=y,c+=w,v=Dt(x),x=v.frameElement}}return Xl({width:f,height:d,x:a,y:c})}const r2=[":popover-open",":modal"];function Xv(e){return r2.some(t=>{try{return e.matches(t)}catch{return!1}})}function n2(e){let{elements:t,rect:r,offsetParent:n,strategy:i}=e;const o=i==="fixed",s=an(n),l=t?Xv(t.floating):!1;if(n===s||l&&o)return r;let a={scrollLeft:0,scrollTop:0},c=Vn(1);const f=Vn(0),d=Tr(n);if((d||!d&&!o)&&((Un(n)!=="body"||ba(s))&&(a=Lc(n)),Tr(n))){const h=Ci(n);c=po(n),f.x=h.x+n.clientLeft,f.y=h.y+n.clientTop}return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-a.scrollLeft*c.x+f.x,y:r.y*c.y-a.scrollTop*c.y+f.y}}function i2(e){return Array.from(e.getClientRects())}function Gv(e){return Ci(an(e)).left+Lc(e).scrollLeft}function o2(e){const t=an(e),r=Lc(e),n=e.ownerDocument.body,i=It(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),o=It(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-r.scrollLeft+Gv(e);const l=-r.scrollTop;return er(n).direction==="rtl"&&(s+=It(t.clientWidth,n.clientWidth)-i),{width:i,height:o,x:s,y:l}}function s2(e,t){const r=Dt(e),n=an(e),i=r.visualViewport;let o=n.clientWidth,s=n.clientHeight,l=0,a=0;if(i){o=i.width,s=i.height;const c=ih();(!c||c&&t==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:o,height:s,x:l,y:a}}function a2(e,t){const r=Ci(e,!0,t==="fixed"),n=r.top+e.clientTop,i=r.left+e.clientLeft,o=Tr(e)?po(e):Vn(1),s=e.clientWidth*o.x,l=e.clientHeight*o.y,a=i*o.x,c=n*o.y;return{width:s,height:l,x:a,y:c}}function Jp(e,t,r){let n;if(t==="viewport")n=s2(e,r);else if(t==="document")n=o2(an(e));else if(Xr(t))n=a2(t,r);else{const i=Yv(e);n={...t,x:t.x-i.x,y:t.y-i.y}}return Xl(n)}function qv(e,t){const r=Co(e);return r===t||!Xr(r)||Pc(r)?!1:er(r).position==="fixed"||qv(r,t)}function l2(e,t){const r=t.get(e);if(r)return r;let n=Ws(e,[],!1).filter(l=>Xr(l)&&Un(l)!=="body"),i=null;const o=er(e).position==="fixed";let s=o?Co(e):e;for(;Xr(s)&&!Pc(s);){const l=er(s),a=nh(s);!a&&l.position==="fixed"&&(i=null),(o?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ba(s)&&!a&&qv(e,s))?n=n.filter(f=>f!==s):i=l,s=Co(s)}return t.set(e,n),n}function c2(e){let{element:t,boundary:r,rootBoundary:n,strategy:i}=e;const s=[...r==="clippingAncestors"?l2(t,this._c):[].concat(r),n],l=s[0],a=s.reduce((c,f)=>{const d=Jp(t,f,i);return c.top=It(d.top,c.top),c.right=Bn(d.right,c.right),c.bottom=Bn(d.bottom,c.bottom),c.left=It(d.left,c.left),c},Jp(t,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function u2(e){const{width:t,height:r}=Kv(e);return{width:t,height:r}}function d2(e,t,r){const n=Tr(t),i=an(t),o=r==="fixed",s=Ci(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const a=Vn(0);if(n||!n&&!o)if((Un(t)!=="body"||ba(i))&&(l=Lc(t)),n){const d=Ci(t,!0,o,t);a.x=d.x+t.clientLeft,a.y=d.y+t.clientTop}else i&&(a.x=Gv(i));const c=s.left+l.scrollLeft-a.x,f=s.top+l.scrollTop-a.y;return{x:c,y:f,width:s.width,height:s.height}}function em(e,t){return!Tr(e)||er(e).position==="fixed"?null:t?t(e):e.offsetParent}function Qv(e,t){const r=Dt(e);if(!Tr(e)||Xv(e))return r;let n=em(e,t);for(;n&&Zx(n)&&er(n).position==="static";)n=em(n,t);return n&&(Un(n)==="html"||Un(n)==="body"&&er(n).position==="static"&&!nh(n))?r:n||Jx(e)||r}const f2=async function(e){const t=this.getOffsetParent||Qv,r=this.getDimensions;return{reference:d2(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await r(e.floating)}}};function h2(e){return er(e).direction==="rtl"}const Al={convertOffsetParentRelativeRectToViewportRelativeRect:n2,getDocumentElement:an,getClippingRect:c2,getOffsetParent:Qv,getElementRects:f2,getClientRects:i2,getDimensions:u2,getScale:po,isElement:Xr,isRTL:h2};function p2(e,t){let r=null,n;const i=an(e);function o(){var l;clearTimeout(n),(l=r)==null||l.disconnect(),r=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:c,top:f,width:d,height:h}=e.getBoundingClientRect();if(l||t(),!d||!h)return;const p=Ya(f),v=Ya(i.clientWidth-(c+d)),x=Ya(i.clientHeight-(f+h)),S=Ya(c),m={rootMargin:-p+"px "+-v+"px "+-x+"px "+-S+"px",threshold:It(0,Bn(1,a))||1};let y=!0;function w(C){const $=C[0].intersectionRatio;if($!==a){if(!y)return s();$?s(!1,$):n=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{r=new IntersectionObserver(w,{...m,root:i.ownerDocument})}catch{r=new IntersectionObserver(w,m)}r.observe(e)}return s(!0),o}function m2(e,t,r,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,c=oh(e),f=i||o?[...c?Ws(c):[],...Ws(t)]:[];f.forEach(b=>{i&&b.addEventListener("scroll",r,{passive:!0}),o&&b.addEventListener("resize",r)});const d=c&&l?p2(c,r):null;let h=-1,p=null;s&&(p=new ResizeObserver(b=>{let[m]=b;m&&m.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var y;(y=p)==null||y.observe(t)})),r()}),c&&!a&&p.observe(c),p.observe(t));let v,x=a?Ci(e):null;a&&S();function S(){const b=Ci(e);x&&(b.x!==x.x||b.y!==x.y||b.width!==x.width||b.height!==x.height)&&r(),x=b,v=requestAnimationFrame(S)}return r(),()=>{var b;f.forEach(m=>{i&&m.removeEventListener("scroll",r),o&&m.removeEventListener("resize",r)}),d==null||d(),(b=p)==null||b.disconnect(),p=null,a&&cancelAnimationFrame(v)}}const g2=qx,v2=Yx,tm=Qx,y2=Kx,b2=(e,t,r)=>{const n=new Map,i={platform:Al,...r},o={...i.platform,_c:n};return Wx(e,t,{...i,platform:o})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},wa=e=>(...t)=>({_$litDirective$:e,values:t});let xa=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=wa(class extends xa{constructor(e){var t;if(super(e),e.type!==kr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Rt}});function w2(e){return x2(e)}function xu(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function x2(e){for(let t=e;t;t=xu(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=xu(e);t;t=xu(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||r.filter!=="none"||t.tagName==="BODY"))return t}return null}function _2(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var he=class extends V{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let n=0,i=0,o=0,s=0,l=0,a=0,c=0,f=0;r?e.top<t.top?(n=e.left,i=e.bottom,o=e.right,s=e.bottom,l=t.left,a=t.top,c=t.right,f=t.top):(n=t.left,i=t.bottom,o=t.right,s=t.bottom,l=e.left,a=e.top,c=e.right,f=e.top):e.left<t.left?(n=e.right,i=e.top,o=t.left,s=t.top,l=e.right,a=e.bottom,c=t.left,f=t.bottom):(n=t.right,i=t.top,o=e.left,s=e.top,l=t.right,a=t.bottom,c=e.left,f=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${n}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${f}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||_2(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=m2(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Gx({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(tm({apply:({rects:r})=>{const n=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=n?`${r.reference.width}px`:"",this.popup.style.height=i?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(v2({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(g2({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(tm({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:n})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${n}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(y2({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>Al.getOffsetParent(r,w2):Al.getOffsetParent;b2(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:va(on({},Al),{getOffsetParent:t})}).then(({x:r,y:n,middlewareData:i,placement:o})=>{const s=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${r}px`,top:`${n}px`}),this.arrow){const a=i.arrow.x,c=i.arrow.y;let f="",d="",h="",p="";if(this.arrowPlacement==="start"){const v=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=s?v:"",p=s?"":v}else if(this.arrowPlacement==="end"){const v=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=s?"":v,p=s?v:"",h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",f=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof a=="number"?`${a}px`:"",f=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:f,right:d,bottom:h,left:p,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return O`
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
    `}};he.styles=[X,Dx];u([R(".popup")],he.prototype,"popup",2);u([R(".popup__arrow")],he.prototype,"arrowEl",2);u([g()],he.prototype,"anchor",2);u([g({type:Boolean,reflect:!0})],he.prototype,"active",2);u([g({reflect:!0})],he.prototype,"placement",2);u([g({reflect:!0})],he.prototype,"strategy",2);u([g({type:Number})],he.prototype,"distance",2);u([g({type:Number})],he.prototype,"skidding",2);u([g({type:Boolean})],he.prototype,"arrow",2);u([g({attribute:"arrow-placement"})],he.prototype,"arrowPlacement",2);u([g({attribute:"arrow-padding",type:Number})],he.prototype,"arrowPadding",2);u([g({type:Boolean})],he.prototype,"flip",2);u([g({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],he.prototype,"flipFallbackPlacements",2);u([g({attribute:"flip-fallback-strategy"})],he.prototype,"flipFallbackStrategy",2);u([g({type:Object})],he.prototype,"flipBoundary",2);u([g({attribute:"flip-padding",type:Number})],he.prototype,"flipPadding",2);u([g({type:Boolean})],he.prototype,"shift",2);u([g({type:Object})],he.prototype,"shiftBoundary",2);u([g({attribute:"shift-padding",type:Number})],he.prototype,"shiftPadding",2);u([g({attribute:"auto-size"})],he.prototype,"autoSize",2);u([g()],he.prototype,"sync",2);u([g({type:Object})],he.prototype,"autoSizeBoundary",2);u([g({attribute:"auto-size-padding",type:Number})],he.prototype,"autoSizePadding",2);u([g({attribute:"hover-bridge",type:Boolean})],he.prototype,"hoverBridge",2);var Zv=new Map,k2=new WeakMap;function C2(e){return e??{keyframes:[],options:{duration:0}}}function rm(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function pe(e,t){Zv.set(e,C2(t))}function $e(e,t,r){const n=k2.get(e);if(n!=null&&n[t])return rm(n[t],r.dir);const i=Zv.get(t);return i?rm(i,r.dir):{keyframes:[],options:{duration:0}}}function bt(e,t){return new Promise(r=>{function n(i){i.target===e&&(e.removeEventListener(t,n),r())}e.addEventListener(t,n)})}function Re(e,t,r){return new Promise(n=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,va(on({},r),{duration:vd()?0:r.duration}));i.addEventListener("cancel",n,{once:!0}),i.addEventListener("finish",n,{once:!0})})}function nm(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function vd(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ue(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}function Gl(e,t){return e.map(r=>va(on({},r),{height:r.height==="auto"?`${t}px`:r.height}))}const yd=new Set,S2=new MutationObserver(r0),qi=new Map;let Jv=document.documentElement.dir||"ltr",e0=document.documentElement.lang||navigator.language,ci;S2.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function t0(...e){e.map(t=>{const r=t.$code.toLowerCase();qi.has(r)?qi.set(r,Object.assign(Object.assign({},qi.get(r)),t)):qi.set(r,t),ci||(ci=t)}),r0()}function r0(){Jv=document.documentElement.dir||"ltr",e0=document.documentElement.lang||navigator.language,[...yd.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let $2=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){yd.add(this.host)}hostDisconnected(){yd.delete(this.host)}dir(){return`${this.host.dir||Jv}`.toLowerCase()}lang(){return`${this.host.lang||e0}`.toLowerCase()}getTranslationData(t){var r,n;const i=new Intl.Locale(t.replace(/_/g,"-")),o=i==null?void 0:i.language.toLowerCase(),s=(n=(r=i==null?void 0:i.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&n!==void 0?n:"",l=qi.get(`${o}-${s}`),a=qi.get(o);return{locale:i,language:o,region:s,primary:l,secondary:a}}exists(t,r){var n;const{primary:i,secondary:o}=this.getTranslationData((n=r.lang)!==null&&n!==void 0?n:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||o&&o[t]||r.includeFallback&&ci&&ci[t])}term(t,...r){const{primary:n,secondary:i}=this.getTranslationData(this.lang());let o;if(n&&n[t])o=n[t];else if(i&&i[t])o=i[t];else if(ci&&ci[t])o=ci[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...r):o}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(t,r)}};var n0={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};t0(n0);var E2=n0,de=class extends $2{};t0(E2);function I(e,t){const r=on({waitUntilFirstUpdate:!1},t);return(n,i)=>{const{update:o}=n,s=Array.isArray(e)?e:[e];n.update=function(l){s.forEach(a=>{const c=a;if(l.has(c)){const f=l.get(c),d=this[c];f!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](f,d)}}),o.call(this,l)}}}var et=class extends V{constructor(){super(),this.localize=new de(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=nm(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=nm(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Ue(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:r,options:n}=$e(this,"tooltip.show",{dir:this.localize.dir()});await Re(this.popup.popup,r,n),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Ue(this.body);const{keyframes:r,options:n}=$e(this,"tooltip.hide",{dir:this.localize.dir()});await Re(this.popup.popup,r,n),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}render(){return O`
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
    `}};et.styles=[X,Nx];et.dependencies={"sl-popup":he};u([R("slot:not([name])")],et.prototype,"defaultSlot",2);u([R(".tooltip__body")],et.prototype,"body",2);u([R("sl-popup")],et.prototype,"popup",2);u([g()],et.prototype,"content",2);u([g()],et.prototype,"placement",2);u([g({type:Boolean,reflect:!0})],et.prototype,"disabled",2);u([g({type:Number})],et.prototype,"distance",2);u([g({type:Boolean,reflect:!0})],et.prototype,"open",2);u([g({type:Number})],et.prototype,"skidding",2);u([g()],et.prototype,"trigger",2);u([g({type:Boolean})],et.prototype,"hoist",2);u([I("open",{waitUntilFirstUpdate:!0})],et.prototype,"handleOpenChange",1);u([I(["content","distance","hoist","placement","skidding"])],et.prototype,"handleOptionsChange",1);u([I("disabled")],et.prototype,"handleDisabledChange",1);pe("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});pe("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});et.define("sl-tooltip");var A2=W`
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
`,z2=W`
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
`,T2=W`
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
`,Ii=(e="value")=>(t,r)=>{const n=t.constructor,i=n.prototype.attributeChangedCallback;n.prototype.attributeChangedCallback=function(o,s,l){var a;const c=n.getPropertyOptions(e),f=typeof c.attribute=="string"?c.attribute:e;if(o===f){const d=c.converter||_o,p=(typeof d=="function"?d:(a=d==null?void 0:d.fromAttribute)!=null?a:_o.fromAttribute)(l,c.type);this[e]!==p&&(this[r]=p)}i.call(this,o,s,l)}},Ri=W`
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
`,wt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const n=r.target;(this.slotNames.includes("[default]")&&!n.name||n.name&&this.slotNames.includes(n.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function O2(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(n=>{n.nodeType===Node.TEXT_NODE&&(r+=n.textContent)}),r}var bd="";function im(e){bd=e}function P2(e=""){if(!bd){const t=[...document.getElementsByTagName("script")],r=t.find(n=>n.hasAttribute("data-shoelace"));if(r)im(r.getAttribute("data-shoelace"));else{const n=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let i="";n&&(i=n.getAttribute("src")),im(i.split("/").slice(0,-1).join("/"))}}return bd.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var L2={name:"default",resolver:e=>P2(`assets/icons/${e}.svg`)},I2=L2,om={caret:`
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
  `},R2={name:"system",resolver:e=>e in om?`data:image/svg+xml,${encodeURIComponent(om[e])}`:""},N2=R2,D2=[I2,N2],wd=[];function M2(e){wd.push(e)}function j2(e){wd=wd.filter(t=>t!==e)}function sm(e){return D2.find(t=>t.name===e)}var F2=W`
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
 */const B2=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,i0=e=>e.strings===void 0,V2={},H2=(e,t=V2)=>e._$AH=t;var ts=Symbol(),Xa=Symbol(),_u,ku=new Map,ve=class extends V{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let n;if(t!=null&&t.spriteSheet){this.svg=O`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(i),this.svg}try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return n.status===410?ts:Xa}catch{return Xa}try{const i=document.createElement("div");i.innerHTML=await n.text();const o=i.firstElementChild;if(((r=o==null?void 0:o.tagName)==null?void 0:r.toLowerCase())!=="svg")return ts;_u||(_u=new DOMParser);const l=_u.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):ts}catch{return ts}}connectedCallback(){super.connectedCallback(),M2(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),j2(this)}getIconSource(){const e=sm(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),n=r?sm(this.library):void 0;if(!t){this.svg=null;return}let i=ku.get(t);if(i||(i=this.resolveIcon(t,n),ku.set(t,i)),!this.initialRender)return;const o=await i;if(o===Xa&&ku.delete(t),t===this.getIconSource().url){if(B2(o)){this.svg=o;return}switch(o){case Xa:case ts:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=n==null?void 0:n.mutator)==null||e.call(n,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ve.styles=[X,F2];u([q()],ve.prototype,"svg",2);u([g({reflect:!0})],ve.prototype,"name",2);u([g()],ve.prototype,"src",2);u([g()],ve.prototype,"label",2);u([g({reflect:!0})],ve.prototype,"library",2);u([I("label")],ve.prototype,"handleLabelChange",1);u([I(["name","src","library"])],ve.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=e=>e??Ce;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si=wa(class extends xa{constructor(e){if(super(e),e.type!==kr.PROPERTY&&e.type!==kr.ATTRIBUTE&&e.type!==kr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!i0(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Rt||t===Ce)return t;const r=e.element,n=e.name;if(e.type===kr.PROPERTY){if(t===r[n])return Rt}else if(e.type===kr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(n))return Rt}else if(e.type===kr.ATTRIBUTE&&r.getAttribute(n)===t+"")return Rt;return H2(e),t}});var Ge=class extends V{constructor(){super(...arguments),this.formControlController=new sn(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new wt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return O`
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
            .indeterminate=${Si(this.indeterminate)}
            .checked=${Si(this.checked)}
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
    `}};Ge.styles=[X,Ri,T2];Ge.dependencies={"sl-icon":ve};u([R('input[type="checkbox"]')],Ge.prototype,"input",2);u([q()],Ge.prototype,"hasFocus",2);u([g()],Ge.prototype,"title",2);u([g()],Ge.prototype,"name",2);u([g()],Ge.prototype,"value",2);u([g({reflect:!0})],Ge.prototype,"size",2);u([g({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],Ge.prototype,"checked",2);u([g({type:Boolean,reflect:!0})],Ge.prototype,"indeterminate",2);u([Ii("checked")],Ge.prototype,"defaultChecked",2);u([g({reflect:!0})],Ge.prototype,"form",2);u([g({type:Boolean,reflect:!0})],Ge.prototype,"required",2);u([g({attribute:"help-text"})],Ge.prototype,"helpText",2);u([I("disabled",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleDisabledChange",1);u([I(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ge.prototype,"handleStateChange",1);var U2=W`
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
`,_a=class extends V{constructor(){super(...arguments),this.localize=new de(this)}render(){return O`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};_a.styles=[X,U2];/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function am(e,t,r){return e?t(e):r==null?void 0:r(e)}var Ne=class xd extends V{constructor(){super(...arguments),this.localize=new de(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Ue(this.childrenContainer);const{keyframes:t,options:r}=$e(this,"tree-item.collapse",{dir:this.localize.dir()});await Re(this.childrenContainer,Gl(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&xd.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Ue(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:r}=$e(this,"tree-item.expand",{dir:this.localize.dir()});await Re(this.childrenContainer,Gl(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>xd.isTreeItem(r)&&(t||!r.disabled)):[]}render(){const t=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return O`
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
            ${am(this.loading,()=>O` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${am(this.selectable,()=>O`
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
                ?checked="${Si(this.selected)}"
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
    `}};Ne.styles=[X,z2];Ne.dependencies={"sl-checkbox":Ge,"sl-icon":ve,"sl-spinner":_a};u([q()],Ne.prototype,"indeterminate",2);u([q()],Ne.prototype,"isLeaf",2);u([q()],Ne.prototype,"loading",2);u([q()],Ne.prototype,"selectable",2);u([g({type:Boolean,reflect:!0})],Ne.prototype,"expanded",2);u([g({type:Boolean,reflect:!0})],Ne.prototype,"selected",2);u([g({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],Ne.prototype,"lazy",2);u([R("slot:not([name])")],Ne.prototype,"defaultSlot",2);u([R("slot[name=children]")],Ne.prototype,"childrenSlot",2);u([R(".tree-item__item")],Ne.prototype,"itemElement",2);u([R(".tree-item__children")],Ne.prototype,"childrenContainer",2);u([R(".tree-item__expand-button slot")],Ne.prototype,"expandButtonSlot",2);u([I("loading",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleLoadingChange",1);u([I("disabled")],Ne.prototype,"handleDisabledChange",1);u([I("selected")],Ne.prototype,"handleSelectedChange",1);u([I("expanded",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleExpandedChange",1);u([I("expanded",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleExpandAnimation",1);u([I("lazy",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleLazyChange",1);var ks=Ne;pe("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});pe("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function Ve(e,t,r){const n=i=>Object.is(i,-0)?0:i;return e<t?n(t):e>r?n(r):n(e)}function lm(e,t=!1){function r(o){const s=o.getChildrenItems({includeDisabled:!1});if(s.length){const l=s.every(c=>c.selected),a=s.every(c=>!c.selected&&!c.indeterminate);o.selected=l,o.indeterminate=!l&&!a}}function n(o){const s=o.parentElement;ks.isTreeItem(s)&&(r(s),n(s))}function i(o){for(const s of o.getChildrenItems())s.selected=t?o.selected||s.selected:!s.disabled&&o.selected,i(s);t&&r(o)}i(e),n(e)}var Ni=class extends V{constructor(){super(),this.selection="single",this.localize=new de(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`),n=this.getExpandButtonIcon(t);n&&(r===null?e.append(n):r.hasAttribute("data-default")&&r.replaceWith(n))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(ks.isTreeItem),n=[...t.removedNodes].filter(ks.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&n.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),ks.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const n=r.cloneNode(!0);return[n,...n.querySelectorAll("[id]")].forEach(i=>i.removeAttribute("id")),n.setAttribute("data-default",""),n.slot=`${e}-icon`,n}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),lm(e);else if(this.selection==="single"||e.isLeaf){const n=this.getAllTreeItems();for(const i of n)i.selected=i===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(n=>!t.includes(n)))&&Promise.all(r.map(n=>n.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(i=>{var o;return["input","textarea"].includes((o=i==null?void 0:i.tagName)==null?void 0:o.toLowerCase())}))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",n=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const i=t.findIndex(a=>a.matches(":focus")),o=t[i],s=a=>{const c=t[Ve(a,0,t.length-1)];this.focusItem(c)},l=a=>{o.expanded=a};e.key==="ArrowDown"?s(i+1):e.key==="ArrowUp"?s(i-1):r&&e.key==="ArrowRight"||n&&e.key==="ArrowLeft"?!o||o.disabled||o.expanded||o.isLeaf&&!o.lazy?s(i+1):l(!0):r&&e.key==="ArrowLeft"||n&&e.key==="ArrowRight"?!o||o.disabled||o.isLeaf||!o.expanded?s(i-1):l(!1):e.key==="Home"?s(0):e.key==="End"?s(t.length-1):(e.key==="Enter"||e.key===" ")&&(o.disabled||this.selectItem(o))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),n=e.composedPath().some(i=>{var o;return(o=i==null?void 0:i.classList)==null?void 0:o.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(n?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>lm(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var n;if(r.disabled)return!1;const i=(n=r.parentElement)==null?void 0:n.closest("[role=treeitem]");return i&&(!i.expanded||i.loading||t.has(i))&&t.add(r),!t.has(r)})}render(){return O`
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
    `}};Ni.styles=[X,A2];u([R("slot:not([name])")],Ni.prototype,"defaultSlot",2);u([R("slot[name=expand-icon]")],Ni.prototype,"expandedIconSlot",2);u([R("slot[name=collapse-icon]")],Ni.prototype,"collapsedIconSlot",2);u([g()],Ni.prototype,"selection",2);u([I("selection")],Ni.prototype,"handleSelectionChange",1);Ni.define("sl-tree");ks.define("sl-tree-item");var W2=W`
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
`,K2=0,ka=class extends V{constructor(){super(...arguments),this.attrId=++K2,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return O`
      <slot
        part="base"
        class=${G({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};ka.styles=[X,W2];u([g({reflect:!0})],ka.prototype,"name",2);u([g({type:Boolean,reflect:!0})],ka.prototype,"active",2);u([I("active")],ka.prototype,"handleActiveChange",1);ka.define("sl-tab-panel");var Y2=W`
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
`,X2=W`
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
 */const o0=Symbol.for(""),G2=e=>{if((e==null?void 0:e.r)===o0)return e==null?void 0:e._$litStatic$},ql=(e,...t)=>({_$litStatic$:t.reduce((r,n,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[i+1],e[0]),r:o0}),cm=new Map,q2=e=>(t,...r)=>{const n=r.length;let i,o;const s=[],l=[];let a,c=0,f=!1;for(;c<n;){for(a=t[c];c<n&&(o=r[c],(i=G2(o))!==void 0);)a+=i+t[++c],f=!0;c!==n&&l.push(o),s.push(a),c++}if(c===n&&s.push(t[n]),f){const d=s.join("$$lit$$");(t=cm.get(d))===void 0&&(s.raw=s,cm.set(d,t=s)),r=l}return e(t,...r)},Cs=q2(O);var qe=class extends V{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?ql`a`:ql`button`;return Cs`
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
    `}};qe.styles=[X,X2];qe.dependencies={"sl-icon":ve};u([R(".icon-button")],qe.prototype,"button",2);u([q()],qe.prototype,"hasFocus",2);u([g()],qe.prototype,"name",2);u([g()],qe.prototype,"library",2);u([g()],qe.prototype,"src",2);u([g()],qe.prototype,"href",2);u([g()],qe.prototype,"target",2);u([g()],qe.prototype,"download",2);u([g()],qe.prototype,"label",2);u([g({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);var Qn=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return O`
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
    `}};Qn.styles=[X,Y2];Qn.dependencies={"sl-icon-button":qe};u([g({reflect:!0})],Qn.prototype,"variant",2);u([g({reflect:!0})],Qn.prototype,"size",2);u([g({type:Boolean,reflect:!0})],Qn.prototype,"pill",2);u([g({type:Boolean})],Qn.prototype,"removable",2);Qn.define("sl-tag");var Q2=W`
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
`,fe=class extends V{constructor(){super(...arguments),this.formControlController=new sn(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new wt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,n="preserve"){const i=t??this.input.selectionStart,o=r??this.input.selectionEnd;this.input.setRangeText(e,i,o,n),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return O`
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
              .value=${Si(this.value)}
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
    `}};fe.styles=[X,Ri,Q2];u([R(".textarea__control")],fe.prototype,"input",2);u([q()],fe.prototype,"hasFocus",2);u([g()],fe.prototype,"title",2);u([g()],fe.prototype,"name",2);u([g()],fe.prototype,"value",2);u([g({reflect:!0})],fe.prototype,"size",2);u([g({type:Boolean,reflect:!0})],fe.prototype,"filled",2);u([g()],fe.prototype,"label",2);u([g({attribute:"help-text"})],fe.prototype,"helpText",2);u([g()],fe.prototype,"placeholder",2);u([g({type:Number})],fe.prototype,"rows",2);u([g()],fe.prototype,"resize",2);u([g({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],fe.prototype,"readonly",2);u([g({reflect:!0})],fe.prototype,"form",2);u([g({type:Boolean,reflect:!0})],fe.prototype,"required",2);u([g({type:Number})],fe.prototype,"minlength",2);u([g({type:Number})],fe.prototype,"maxlength",2);u([g()],fe.prototype,"autocapitalize",2);u([g()],fe.prototype,"autocorrect",2);u([g()],fe.prototype,"autocomplete",2);u([g({type:Boolean})],fe.prototype,"autofocus",2);u([g()],fe.prototype,"enterkeyhint",2);u([g({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],fe.prototype,"spellcheck",2);u([g()],fe.prototype,"inputmode",2);u([Ii()],fe.prototype,"defaultValue",2);u([I("disabled",{waitUntilFirstUpdate:!0})],fe.prototype,"handleDisabledChange",1);u([I("rows",{waitUntilFirstUpdate:!0})],fe.prototype,"handleRowsChange",1);u([I("value",{waitUntilFirstUpdate:!0})],fe.prototype,"handleValueChange",1);fe.define("sl-textarea");var Z2=W`
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
`,J2=0,Pr=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.attrId=++J2,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,O`
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
    `}};Pr.styles=[X,Z2];Pr.dependencies={"sl-icon-button":qe};u([R(".tab")],Pr.prototype,"tab",2);u([g({reflect:!0})],Pr.prototype,"panel",2);u([g({type:Boolean,reflect:!0})],Pr.prototype,"active",2);u([g({type:Boolean})],Pr.prototype,"closable",2);u([g({type:Boolean,reflect:!0})],Pr.prototype,"disabled",2);u([I("active")],Pr.prototype,"handleActiveChange",1);u([I("disabled")],Pr.prototype,"handleDisabledChange",1);Pr.define("sl-tab");var e_=W`
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
`;function t_(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var _d=new Set;function r_(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function n_(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Ss(e){if(_d.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=r_()+n_();document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function $s(e){_d.delete(e),_d.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function kd(e,t,r="vertical",n="smooth"){const i=t_(e,t),o=i.top+t.scrollTop,s=i.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,c=t.scrollTop,f=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<l?t.scrollTo({left:s,behavior:n}):s+e.clientWidth>a&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:n})),(r==="vertical"||r==="both")&&(o<c?t.scrollTo({top:o,behavior:n}):o+e.clientHeight>f&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:n}))}var Bt=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,n)=>{var i;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),n.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(s=>s.matches(":focus")),o=this.localize.dir()==="rtl";if((i==null?void 0:i.tagName.toLowerCase())==="sl-tab"){let s=this.tabs.indexOf(i);e.key==="Home"?s=0:e.key==="End"?s=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?s--:(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&s++,s<0&&(s=this.tabs.length-1),s>this.tabs.length-1&&(s=0),this.tabs[s].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[s],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&kd(this.tabs[s],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=on({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(n=>n.active=n===this.activeTab),this.panels.forEach(n=>{var i;return n.active=n.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&kd(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,n=this.localize.dir()==="rtl",i=this.getAllTabs(),s=i.slice(0,i.indexOf(e)).reduce((l,a)=>({left:l.left+a.clientWidth,top:l.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=n?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${s.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return O`
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
    `}};Bt.styles=[X,e_];Bt.dependencies={"sl-icon-button":qe};u([R(".tab-group")],Bt.prototype,"tabGroup",2);u([R(".tab-group__body")],Bt.prototype,"body",2);u([R(".tab-group__nav")],Bt.prototype,"nav",2);u([R(".tab-group__indicator")],Bt.prototype,"indicator",2);u([q()],Bt.prototype,"hasScrollControls",2);u([g()],Bt.prototype,"placement",2);u([g()],Bt.prototype,"activation",2);u([g({attribute:"no-scroll-controls",type:Boolean})],Bt.prototype,"noScrollControls",2);u([I("noScrollControls",{waitUntilFirstUpdate:!0})],Bt.prototype,"updateScrollControls",1);u([I("placement",{waitUntilFirstUpdate:!0})],Bt.prototype,"syncIndicator",1);Bt.define("sl-tab-group");_a.define("sl-spinner");var i_=W`
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
`;function Es(e,t){function r(i){const o=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,l=o.left+s.scrollX,a=o.top+s.scrollY,c=i.pageX-l,f=i.pageY-a;t!=null&&t.onMove&&t.onMove(c,f)}function n(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",n),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",n),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}var Vt=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Es(this,{onMove:(r,n)=>{let i=this.vertical?n:r;this.primary==="end"&&(i=this.size-i),this.snap&&this.snap.split(" ").forEach(s=>{let l;s.endsWith("%")?l=this.size*(parseFloat(s)/100):l=parseFloat(s),t&&!this.vertical&&(l=this.size-l),i>=l-this.snapThreshold&&i<=l+this.snapThreshold&&(i=l)}),this.position=Ve(this.pixelsToPercentage(i),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=Ve(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",n=`
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
    `}};Vt.styles=[X,i_];u([R(".divider")],Vt.prototype,"divider",2);u([g({type:Number,reflect:!0})],Vt.prototype,"position",2);u([g({attribute:"position-in-pixels",type:Number})],Vt.prototype,"positionInPixels",2);u([g({type:Boolean,reflect:!0})],Vt.prototype,"vertical",2);u([g({type:Boolean,reflect:!0})],Vt.prototype,"disabled",2);u([g()],Vt.prototype,"primary",2);u([g()],Vt.prototype,"snap",2);u([g({type:Number,attribute:"snap-threshold"})],Vt.prototype,"snapThreshold",2);u([I("position")],Vt.prototype,"handlePositionChange",1);u([I("positionInPixels")],Vt.prototype,"handlePositionInPixelsChange",1);u([I("vertical")],Vt.prototype,"handleVerticalChange",1);Vt.define("sl-split-panel");var o_=W`
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
`,mt=class extends V{constructor(){super(...arguments),this.formControlController=new sn(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new wt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return O`
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
            .checked=${Si(this.checked)}
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
    `}};mt.styles=[X,Ri,o_];u([R('input[type="checkbox"]')],mt.prototype,"input",2);u([q()],mt.prototype,"hasFocus",2);u([g()],mt.prototype,"title",2);u([g()],mt.prototype,"name",2);u([g()],mt.prototype,"value",2);u([g({reflect:!0})],mt.prototype,"size",2);u([g({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],mt.prototype,"checked",2);u([Ii("checked")],mt.prototype,"defaultChecked",2);u([g({reflect:!0})],mt.prototype,"form",2);u([g({type:Boolean,reflect:!0})],mt.prototype,"required",2);u([g({attribute:"help-text"})],mt.prototype,"helpText",2);u([I("checked",{waitUntilFirstUpdate:!0})],mt.prototype,"handleCheckedChange",1);u([I("disabled",{waitUntilFirstUpdate:!0})],mt.prototype,"handleDisabledChange",1);mt.define("sl-switch");var s_=W`
  :host {
    display: contents;
  }
`,Ic=class extends V{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return O` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ic.styles=[X,s_];u([g({type:Boolean,reflect:!0})],Ic.prototype,"disabled",2);u([I("disabled",{waitUntilFirstUpdate:!0})],Ic.prototype,"handleDisabledChange",1);Ic.define("sl-resize-observer");var a_=W`
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
 */let Cd=class extends xa{constructor(t){if(super(t),this.it=Ce,t.type!==kr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Ce||t==null)return this._t=void 0,this.it=t;if(t===Rt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Cd.directiveName="unsafeHTML",Cd.resultType=1;const zl=wa(Cd);var se=class extends V{constructor(){super(...arguments),this.formControlController=new sn(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new wt(this,"help-text","label"),this.localize=new de(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>O`
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
        </div>`}else if(t===this.maxOptionsVisible)return O`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return O``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Ue(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=$e(this,"select.show",{dir:this.localize.dir()});await Re(this.popup.popup,e,t),this.currentOption&&kd(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ue(this);const{keyframes:e,options:t}=$e(this,"select.hide",{dir:this.localize.dir()});await Re(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,bt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,bt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value.length===0;return O`
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
    `}};se.styles=[X,Ri,a_];se.dependencies={"sl-icon":ve,"sl-popup":he,"sl-tag":Qn};u([R(".select")],se.prototype,"popup",2);u([R(".select__combobox")],se.prototype,"combobox",2);u([R(".select__display-input")],se.prototype,"displayInput",2);u([R(".select__value-input")],se.prototype,"valueInput",2);u([R(".select__listbox")],se.prototype,"listbox",2);u([q()],se.prototype,"hasFocus",2);u([q()],se.prototype,"displayLabel",2);u([q()],se.prototype,"currentOption",2);u([q()],se.prototype,"selectedOptions",2);u([g()],se.prototype,"name",2);u([g({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],se.prototype,"value",2);u([Ii()],se.prototype,"defaultValue",2);u([g({reflect:!0})],se.prototype,"size",2);u([g()],se.prototype,"placeholder",2);u([g({type:Boolean,reflect:!0})],se.prototype,"multiple",2);u([g({attribute:"max-options-visible",type:Number})],se.prototype,"maxOptionsVisible",2);u([g({type:Boolean,reflect:!0})],se.prototype,"disabled",2);u([g({type:Boolean})],se.prototype,"clearable",2);u([g({type:Boolean,reflect:!0})],se.prototype,"open",2);u([g({type:Boolean})],se.prototype,"hoist",2);u([g({type:Boolean,reflect:!0})],se.prototype,"filled",2);u([g({type:Boolean,reflect:!0})],se.prototype,"pill",2);u([g()],se.prototype,"label",2);u([g({reflect:!0})],se.prototype,"placement",2);u([g({attribute:"help-text"})],se.prototype,"helpText",2);u([g({reflect:!0})],se.prototype,"form",2);u([g({type:Boolean,reflect:!0})],se.prototype,"required",2);u([g()],se.prototype,"getTag",2);u([I("disabled",{waitUntilFirstUpdate:!0})],se.prototype,"handleDisabledChange",1);u([I("value",{waitUntilFirstUpdate:!0})],se.prototype,"handleValueChange",1);u([I("open",{waitUntilFirstUpdate:!0})],se.prototype,"handleOpenChange",1);pe("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});pe("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});se.define("sl-select");var l_=W`
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
    `}};sh.styles=[X,l_];u([g()],sh.prototype,"effect",2);sh.define("sl-skeleton");var c_=W`
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
`,Oe=class extends V{constructor(){super(...arguments),this.formControlController=new sn(this),this.hasSlotController=new wt(this,"help-text","label"),this.localize=new de(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,n=getComputedStyle(this.input).getPropertyValue("--thumb-size"),i=this.localize.dir()==="rtl",o=t*e;if(i){const s=`${t-o}px + ${e} * ${n}`;this.output.style.translate=`calc((${s} - ${r/2}px - ${n} / 2))`}else{const s=`${o}px - ${e} * ${n}`;this.output.style.translate=`calc(${s} - ${r/2}px + ${n} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t;return O`
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
              .value=${Si(this.value.toString())}
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
    `}};Oe.styles=[X,Ri,c_];u([R(".range__control")],Oe.prototype,"input",2);u([R(".range__tooltip")],Oe.prototype,"output",2);u([q()],Oe.prototype,"hasFocus",2);u([q()],Oe.prototype,"hasTooltip",2);u([g()],Oe.prototype,"title",2);u([g()],Oe.prototype,"name",2);u([g({type:Number})],Oe.prototype,"value",2);u([g()],Oe.prototype,"label",2);u([g({attribute:"help-text"})],Oe.prototype,"helpText",2);u([g({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);u([g({type:Number})],Oe.prototype,"min",2);u([g({type:Number})],Oe.prototype,"max",2);u([g({type:Number})],Oe.prototype,"step",2);u([g()],Oe.prototype,"tooltip",2);u([g({attribute:!1})],Oe.prototype,"tooltipFormatter",2);u([g({reflect:!0})],Oe.prototype,"form",2);u([Ii()],Oe.prototype,"defaultValue",2);u([Zf({passive:!0})],Oe.prototype,"handleThumbDragStart",1);u([I("value",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleValueChange",1);u([I("disabled",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleDisabledChange",1);u([I("hasTooltip",{waitUntilFirstUpdate:!0})],Oe.prototype,"syncRange",1);Oe.define("sl-range");var u_=W`
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
 */const s0="important",d_=" !"+s0,Ct=wa(class extends xa{constructor(e){var t;if(super(e),e.type!==kr.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const n=e[r];return n==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?r.removeProperty(n):r[n]=null);for(const n in t){const i=t[n];if(i!=null){this.ft.add(n);const o=typeof i=="string"&&i.endsWith(d_);n.includes("-")||o?r.setProperty(n,o?i.slice(0,-11):i,o?s0:""):r[n]=i}}return Rt}});var gt=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:n,width:i}=this.rating.getBoundingClientRect(),o=t?this.roundToPrecision((n-e)/i*this.max,this.precision):this.roundToPrecision((e-r)/i*this.max,this.precision);return Ve(o,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",n=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const i=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-i),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const i=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+i),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==n&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,O`
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
    `}};gt.styles=[X,u_];gt.dependencies={"sl-icon":ve};u([R(".rating")],gt.prototype,"rating",2);u([q()],gt.prototype,"hoverValue",2);u([q()],gt.prototype,"isHovering",2);u([g()],gt.prototype,"label",2);u([g({type:Number})],gt.prototype,"value",2);u([g({type:Number})],gt.prototype,"max",2);u([g({type:Number})],gt.prototype,"precision",2);u([g({type:Boolean,reflect:!0})],gt.prototype,"readonly",2);u([g({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);u([g()],gt.prototype,"getSymbol",2);u([Zf({passive:!0})],gt.prototype,"handleTouchMove",1);u([I("hoverValue")],gt.prototype,"handleHoverValueChange",1);u([I("isHovering")],gt.prototype,"handleIsHoveringChange",1);gt.define("sl-rating");var f_=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Zn=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:n,value:i}=f_.find(o=>Math.abs(r)<o.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/i),n,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let o;n==="minute"?o=Ga("second"):n==="hour"?o=Ga("minute"):n==="day"?o=Ga("hour"):o=Ga("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),o)}return O` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};u([q()],Zn.prototype,"isoTime",2);u([q()],Zn.prototype,"relativeTime",2);u([q()],Zn.prototype,"titleTime",2);u([g()],Zn.prototype,"date",2);u([g()],Zn.prototype,"format",2);u([g()],Zn.prototype,"numeric",2);u([g({type:Boolean})],Zn.prototype,"sync",2);function Ga(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}Zn.define("sl-relative-time");var a0=W`
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
`,h_=W`
  ${a0}

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
`,gr=class extends V{constructor(){super(...arguments),this.hasSlotController=new wt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return Cs`
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
    `}};gr.styles=[X,h_];u([R(".button")],gr.prototype,"input",2);u([R(".hidden-input")],gr.prototype,"hiddenInput",2);u([q()],gr.prototype,"hasFocus",2);u([g({type:Boolean,reflect:!0})],gr.prototype,"checked",2);u([g()],gr.prototype,"value",2);u([g({type:Boolean,reflect:!0})],gr.prototype,"disabled",2);u([g({reflect:!0})],gr.prototype,"size",2);u([g({type:Boolean,reflect:!0})],gr.prototype,"pill",2);u([I("disabled",{waitUntilFirstUpdate:!0})],gr.prototype,"handleDisabledChange",1);gr.define("sl-radio-button");var p_=W`
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
`,m_=W`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Di=class extends V{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=rs(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=rs(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=rs(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=rs(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),n=rs(t);n&&(n.toggleAttribute("data-sl-button-group__button",!0),n.toggleAttribute("data-sl-button-group__button--first",r===0),n.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<e.length-1),n.toggleAttribute("data-sl-button-group__button--last",r===e.length-1),n.toggleAttribute("data-sl-button-group__button--radio",n.tagName.toLowerCase()==="sl-radio-button"))})}render(){return O`
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
    `}};Di.styles=[X,m_];u([R("slot")],Di.prototype,"defaultSlot",2);u([q()],Di.prototype,"disableRole",2);u([g()],Di.prototype,"label",2);function rs(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var ct=class extends V{constructor(){super(...arguments),this.formControlController=new sn(this),this.hasSlotController=new wt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?fx:e?dx:Tc}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),n=this.value;t.disabled||(this.value=t.value,r.forEach(i=>i.checked=i===t),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(l=>!l.disabled),n=(t=r.find(l=>l.checked))!=null?t:r[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,o=this.value;let s=r.indexOf(n)+i;s<0&&(s=r.length-1),s>r.length-1&&(s=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=r[s].value,r[s].checked=!0,this.hasButtonGroup?r[s].shadowRoot.querySelector("button").focus():(r[s].tabIndex=0,r[s].focus()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(n=>n.checked)||e[0];r&&r.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async n=>{await n.updateComplete,n.checked=n.value===this.value,n.size=this.size})),this.hasButtonGroup=r.some(n=>n.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(n=>n.checked))if(this.hasButtonGroup){const n=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");n&&(n.tabIndex=0)}else r[0].tabIndex=0;if(this.hasButtonGroup){const n=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");n&&(n.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,i=O`
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
    `}};ct.styles=[X,Ri,p_];ct.dependencies={"sl-button-group":Di};u([R("slot:not([name])")],ct.prototype,"defaultSlot",2);u([R(".radio-group__validation-input")],ct.prototype,"validationInput",2);u([q()],ct.prototype,"hasButtonGroup",2);u([q()],ct.prototype,"errorMessage",2);u([q()],ct.prototype,"defaultValue",2);u([g()],ct.prototype,"label",2);u([g({attribute:"help-text"})],ct.prototype,"helpText",2);u([g()],ct.prototype,"name",2);u([g({reflect:!0})],ct.prototype,"value",2);u([g({reflect:!0})],ct.prototype,"size",2);u([g({reflect:!0})],ct.prototype,"form",2);u([g({type:Boolean,reflect:!0})],ct.prototype,"required",2);u([I("size",{waitUntilFirstUpdate:!0})],ct.prototype,"handleSizeChange",1);u([I("value")],ct.prototype,"handleValueChange",1);ct.define("sl-radio-group");var g_=W`
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
    `}};Bo.styles=[X,g_];u([R(".progress-ring__indicator")],Bo.prototype,"indicator",2);u([q()],Bo.prototype,"indicatorOffset",2);u([g({type:Number,reflect:!0})],Bo.prototype,"value",2);u([g()],Bo.prototype,"label",2);Bo.define("sl-progress-ring");var v_=W`
  :host {
    display: inline-block;
  }
`;let l0=null,c0=class{};c0.render=function(e,t){l0(e,t)};self.QrCreator=c0;(function(e){function t(l,a,c,f){var d={},h=e(c,a);h.u(l),h.J(),f=f||0;var p=h.h(),v=h.h()+2*f;return d.text=l,d.level=a,d.version=c,d.O=v,d.a=function(x,S){return x-=f,S-=f,0>x||x>=p||0>S||S>=p?!1:h.a(x,S)},d}function r(l,a,c,f,d,h,p,v,x,S){function b(m,y,w,C,$,E,A){m?(l.lineTo(y+E,w+A),l.arcTo(y,w,C,$,h)):l.lineTo(y,w)}p?l.moveTo(a+h,c):l.moveTo(a,c),b(v,f,c,f,d,-h,0),b(x,f,d,a,d,0,-h),b(S,a,d,a,c,h,0),b(p,a,c,f,c,0,h)}function n(l,a,c,f,d,h,p,v,x,S){function b(m,y,w,C){l.moveTo(m+w,y),l.lineTo(m,y),l.lineTo(m,y+C),l.arcTo(m,y,m+w,y,h)}p&&b(a,c,h,h),v&&b(f,c,-h,h),x&&b(f,d,-h,-h),S&&b(a,d,h,-h)}function i(l,a){var c=a.fill;if(typeof c=="string")l.fillStyle=c;else{var f=c.type,d=c.colorStops;if(c=c.position.map(p=>Math.round(p*a.size)),f==="linear-gradient")var h=l.createLinearGradient.apply(l,c);else if(f==="radial-gradient")h=l.createRadialGradient.apply(l,c);else throw Error("Unsupported fill");d.forEach(([p,v])=>{h.addColorStop(p,v)}),l.fillStyle=h}}function o(l,a){e:{var c=a.text,f=a.v,d=a.N,h=a.K,p=a.P;for(d=Math.max(1,d||1),h=Math.min(40,h||40);d<=h;d+=1)try{var v=t(c,f,d,p);break e}catch{}v=void 0}if(!v)return null;for(c=l.getContext("2d"),a.background&&(c.fillStyle=a.background,c.fillRect(a.left,a.top,a.size,a.size)),f=v.O,h=a.size/f,c.beginPath(),p=0;p<f;p+=1)for(d=0;d<f;d+=1){var x=c,S=a.left+d*h,b=a.top+p*h,m=p,y=d,w=v.a,C=S+h,$=b+h,E=m-1,A=m+1,T=y-1,z=y+1,N=Math.floor(Math.min(.5,Math.max(0,a.R))*h),D=w(m,y),Y=w(E,T),Z=w(E,y);E=w(E,z);var re=w(m,z);z=w(A,z),y=w(A,y),A=w(A,T),m=w(m,T),S=Math.round(S),b=Math.round(b),C=Math.round(C),$=Math.round($),D?r(x,S,b,C,$,N,!Z&&!m,!Z&&!re,!y&&!re,!y&&!m):n(x,S,b,C,$,N,Z&&m&&Y,Z&&re&&E,y&&re&&z,y&&m&&A)}return i(c,a),c.fill(),l}var s={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};l0=function(l,a){var c={};Object.assign(c,s,l),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,a instanceof HTMLCanvasElement?((a.width!==c.size||a.height!==c.size)&&(a.width=c.size,a.height=c.size),a.getContext("2d").clearRect(0,0,a.width,a.height),o(a,c)):(l=document.createElement("canvas"),l.width=c.size,l.height=c.size,c=o(l,c),a.appendChild(c))}})(function(){function e(a){var c=r.s(a);return{S:function(){return 4},b:function(){return c.length},write:function(f){for(var d=0;d<c.length;d+=1)f.put(c[d],8)}}}function t(){var a=[],c=0,f={B:function(){return a},c:function(d){return(a[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,h){for(var p=0;p<h;p+=1)f.m((d>>>h-p-1&1)==1)},f:function(){return c},m:function(d){var h=Math.floor(c/8);a.length<=h&&a.push(0),d&&(a[h]|=128>>>c%8),c+=1}};return f}function r(a,c){function f(m,y){for(var w=-1;7>=w;w+=1)if(!(-1>=m+w||v<=m+w))for(var C=-1;7>=C;C+=1)-1>=y+C||v<=y+C||(p[m+w][y+C]=0<=w&&6>=w&&(C==0||C==6)||0<=C&&6>=C&&(w==0||w==6)||2<=w&&4>=w&&2<=C&&4>=C)}function d(m,y){for(var w=v=4*a+17,C=Array(w),$=0;$<w;$+=1){C[$]=Array(w);for(var E=0;E<w;E+=1)C[$][E]=null}for(p=C,f(0,0),f(v-7,0),f(0,v-7),w=o.G(a),C=0;C<w.length;C+=1)for($=0;$<w.length;$+=1){E=w[C];var A=w[$];if(p[E][A]==null)for(var T=-2;2>=T;T+=1)for(var z=-2;2>=z;z+=1)p[E+T][A+z]=T==-2||T==2||z==-2||z==2||T==0&&z==0}for(w=8;w<v-8;w+=1)p[w][6]==null&&(p[w][6]=w%2==0);for(w=8;w<v-8;w+=1)p[6][w]==null&&(p[6][w]=w%2==0);for(w=o.w(h<<3|y),C=0;15>C;C+=1)$=!m&&(w>>C&1)==1,p[6>C?C:8>C?C+1:v-15+C][8]=$,p[8][8>C?v-C-1:9>C?15-C:14-C]=$;if(p[v-8][8]=!m,7<=a){for(w=o.A(a),C=0;18>C;C+=1)$=!m&&(w>>C&1)==1,p[Math.floor(C/3)][C%3+v-8-3]=$;for(C=0;18>C;C+=1)$=!m&&(w>>C&1)==1,p[C%3+v-8-3][Math.floor(C/3)]=$}if(x==null){for(m=l.I(a,h),w=t(),C=0;C<S.length;C+=1)$=S[C],w.put(4,4),w.put($.b(),o.f(4,a)),$.write(w);for(C=$=0;C<m.length;C+=1)$+=m[C].j;if(w.f()>8*$)throw Error("code length overflow. ("+w.f()+">"+8*$+")");for(w.f()+4<=8*$&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*$)&&(w.put(236,8),!(w.f()>=8*$));)w.put(17,8);var N=0;for($=C=0,E=Array(m.length),A=Array(m.length),T=0;T<m.length;T+=1){var D=m[T].j,Y=m[T].o-D;for(C=Math.max(C,D),$=Math.max($,Y),E[T]=Array(D),z=0;z<E[T].length;z+=1)E[T][z]=255&w.B()[z+N];for(N+=D,z=o.C(Y),D=n(E[T],z.b()-1).l(z),A[T]=Array(z.b()-1),z=0;z<A[T].length;z+=1)Y=z+D.b()-A[T].length,A[T][z]=0<=Y?D.c(Y):0}for(z=w=0;z<m.length;z+=1)w+=m[z].o;for(w=Array(w),z=N=0;z<C;z+=1)for(T=0;T<m.length;T+=1)z<E[T].length&&(w[N]=E[T][z],N+=1);for(z=0;z<$;z+=1)for(T=0;T<m.length;T+=1)z<A[T].length&&(w[N]=A[T][z],N+=1);x=w}for(m=x,w=-1,C=v-1,$=7,E=0,y=o.F(y),A=v-1;0<A;A-=2)for(A==6&&--A;;){for(T=0;2>T;T+=1)p[C][A-T]==null&&(z=!1,E<m.length&&(z=(m[E]>>>$&1)==1),y(C,A-T)&&(z=!z),p[C][A-T]=z,--$,$==-1&&(E+=1,$=7));if(C+=w,0>C||v<=C){C-=w,w=-w;break}}}var h=i[c],p=null,v=0,x=null,S=[],b={u:function(m){m=e(m),S.push(m),x=null},a:function(m,y){if(0>m||v<=m||0>y||v<=y)throw Error(m+","+y);return p[m][y]},h:function(){return v},J:function(){for(var m=0,y=0,w=0;8>w;w+=1){d(!0,w);var C=o.D(b);(w==0||m>C)&&(m=C,y=w)}d(!1,y)}};return b}function n(a,c){if(typeof a.length>"u")throw Error(a.length+"/"+c);var f=function(){for(var h=0;h<a.length&&a[h]==0;)h+=1;for(var p=Array(a.length-h+c),v=0;v<a.length-h;v+=1)p[v]=a[v+h];return p}(),d={c:function(h){return f[h]},b:function(){return f.length},multiply:function(h){for(var p=Array(d.b()+h.b()-1),v=0;v<d.b();v+=1)for(var x=0;x<h.b();x+=1)p[v+x]^=s.i(s.g(d.c(v))+s.g(h.c(x)));return n(p,0)},l:function(h){if(0>d.b()-h.b())return d;for(var p=s.g(d.c(0))-s.g(h.c(0)),v=Array(d.b()),x=0;x<d.b();x+=1)v[x]=d.c(x);for(x=0;x<h.b();x+=1)v[x]^=s.i(s.g(h.c(x))+p);return n(v,0).l(h)}};return d}r.s=function(a){for(var c=[],f=0;f<a.length;f++){var d=a.charCodeAt(f);128>d?c.push(d):2048>d?c.push(192|d>>6,128|d&63):55296>d||57344<=d?c.push(224|d>>12,128|d>>6&63,128|d&63):(f++,d=65536+((d&1023)<<10|a.charCodeAt(f)&1023),c.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return c};var i={L:1,M:0,Q:3,H:2},o=function(){function a(d){for(var h=0;d!=0;)h+=1,d>>>=1;return h}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],f={w:function(d){for(var h=d<<10;0<=a(h)-a(1335);)h^=1335<<a(h)-a(1335);return(d<<10|h)^21522},A:function(d){for(var h=d<<12;0<=a(h)-a(7973);)h^=7973<<a(h)-a(7973);return d<<12|h},G:function(d){return c[d-1]},F:function(d){switch(d){case 0:return function(h,p){return(h+p)%2==0};case 1:return function(h){return h%2==0};case 2:return function(h,p){return p%3==0};case 3:return function(h,p){return(h+p)%3==0};case 4:return function(h,p){return(Math.floor(h/2)+Math.floor(p/3))%2==0};case 5:return function(h,p){return h*p%2+h*p%3==0};case 6:return function(h,p){return(h*p%2+h*p%3)%2==0};case 7:return function(h,p){return(h*p%3+(h+p)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var h=n([1],0),p=0;p<d;p+=1)h=h.multiply(n([1,s.i(p)],0));return h},f:function(d,h){if(d!=4||1>h||40<h)throw Error("mode: "+d+"; type: "+h);return 10>h?8:16},D:function(d){for(var h=d.h(),p=0,v=0;v<h;v+=1)for(var x=0;x<h;x+=1){for(var S=0,b=d.a(v,x),m=-1;1>=m;m+=1)if(!(0>v+m||h<=v+m))for(var y=-1;1>=y;y+=1)0>x+y||h<=x+y||(m!=0||y!=0)&&b==d.a(v+m,x+y)&&(S+=1);5<S&&(p+=3+S-5)}for(v=0;v<h-1;v+=1)for(x=0;x<h-1;x+=1)S=0,d.a(v,x)&&(S+=1),d.a(v+1,x)&&(S+=1),d.a(v,x+1)&&(S+=1),d.a(v+1,x+1)&&(S+=1),(S==0||S==4)&&(p+=3);for(v=0;v<h;v+=1)for(x=0;x<h-6;x+=1)d.a(v,x)&&!d.a(v,x+1)&&d.a(v,x+2)&&d.a(v,x+3)&&d.a(v,x+4)&&!d.a(v,x+5)&&d.a(v,x+6)&&(p+=40);for(x=0;x<h;x+=1)for(v=0;v<h-6;v+=1)d.a(v,x)&&!d.a(v+1,x)&&d.a(v+2,x)&&d.a(v+3,x)&&d.a(v+4,x)&&!d.a(v+5,x)&&d.a(v+6,x)&&(p+=40);for(x=S=0;x<h;x+=1)for(v=0;v<h;v+=1)d.a(v,x)&&(S+=1);return p+=Math.abs(100*S/h/h-50)/5*10}};return f}(),s=function(){for(var a=Array(256),c=Array(256),f=0;8>f;f+=1)a[f]=1<<f;for(f=8;256>f;f+=1)a[f]=a[f-4]^a[f-5]^a[f-6]^a[f-8];for(f=0;255>f;f+=1)c[a[f]]=f;return{g:function(d){if(1>d)throw Error("glog("+d+")");return c[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return a[d]}}}(),l=function(){function a(d,h){switch(h){case i.L:return c[4*(d-1)];case i.M:return c[4*(d-1)+1];case i.Q:return c[4*(d-1)+2];case i.H:return c[4*(d-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f={I:function(d,h){var p=a(d,h);if(typeof p>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+h);d=p.length/3,h=[];for(var v=0;v<d;v+=1)for(var x=p[3*v],S=p[3*v+1],b=p[3*v+2],m=0;m<x;m+=1){var y=b,w={};w.o=S,w.j=y,h.push(w)}return h}};return f}();return r}());const y_=QrCreator;var vr=class extends V{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&y_.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return O`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${Ct({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};vr.styles=[X,v_];u([R("canvas")],vr.prototype,"canvas",2);u([g()],vr.prototype,"value",2);u([g()],vr.prototype,"label",2);u([g({type:Number})],vr.prototype,"size",2);u([g()],vr.prototype,"fill",2);u([g()],vr.prototype,"background",2);u([g({type:Number})],vr.prototype,"radius",2);u([g({attribute:"error-correction"})],vr.prototype,"errorCorrection",2);u([I(["background","errorCorrection","fill","radius","size","value"])],vr.prototype,"generate",1);vr.define("sl-qr-code");var b_=W`
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
    `}};Lr.styles=[X,b_];Lr.dependencies={"sl-icon":ve};u([q()],Lr.prototype,"checked",2);u([q()],Lr.prototype,"hasFocus",2);u([g()],Lr.prototype,"value",2);u([g({reflect:!0})],Lr.prototype,"size",2);u([g({type:Boolean,reflect:!0})],Lr.prototype,"disabled",2);u([I("checked")],Lr.prototype,"handleCheckedChange",1);u([I("disabled",{waitUntilFirstUpdate:!0})],Lr.prototype,"handleDisabledChange",1);Lr.define("sl-radio");var w_=W`
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
    `}};or.styles=[X,w_];or.dependencies={"sl-icon":ve};u([R(".option__label")],or.prototype,"defaultSlot",2);u([q()],or.prototype,"current",2);u([q()],or.prototype,"selected",2);u([q()],or.prototype,"hasHover",2);u([g({reflect:!0})],or.prototype,"value",2);u([g({type:Boolean,reflect:!0})],or.prototype,"disabled",2);u([I("disabled")],or.prototype,"handleDisabledChange",1);u([I("selected")],or.prototype,"handleSelectedChange",1);u([I("value")],or.prototype,"handleValueChange",1);or.define("sl-option");he.define("sl-popup");var x_=W`
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
`,Ca=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return O`
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
    `}};Ca.styles=[X,x_];u([g({type:Number,reflect:!0})],Ca.prototype,"value",2);u([g({type:Boolean,reflect:!0})],Ca.prototype,"indeterminate",2);u([g()],Ca.prototype,"label",2);Ca.define("sl-progress-bar");var __=W`
  :host {
    display: contents;
  }
`,Ir=class extends V{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return O` <slot></slot> `}};Ir.styles=[X,__];u([g({reflect:!0})],Ir.prototype,"attr",2);u([g({attribute:"attr-old-value",type:Boolean,reflect:!0})],Ir.prototype,"attrOldValue",2);u([g({attribute:"char-data",type:Boolean,reflect:!0})],Ir.prototype,"charData",2);u([g({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Ir.prototype,"charDataOldValue",2);u([g({attribute:"child-list",type:Boolean,reflect:!0})],Ir.prototype,"childList",2);u([g({type:Boolean,reflect:!0})],Ir.prototype,"disabled",2);u([I("disabled")],Ir.prototype,"handleDisabledChange",1);u([I("attr",{waitUntilFirstUpdate:!0}),I("attr-old-value",{waitUntilFirstUpdate:!0}),I("char-data",{waitUntilFirstUpdate:!0}),I("char-data-old-value",{waitUntilFirstUpdate:!0}),I("childList",{waitUntilFirstUpdate:!0})],Ir.prototype,"handleChange",1);Ir.define("sl-mutation-observer");var k_=W`
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
 */const As=(e,t)=>{var n;const r=e._$AN;if(r===void 0)return!1;for(const i of r)(n=i._$AO)==null||n.call(i,t,!1),As(i,t);return!0},Ql=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},u0=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),$_(t)}};function C_(e){this._$AN!==void 0?(Ql(this),this._$AM=e,u0(this)):this._$AM=e}function S_(e,t=!1,r=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=r;o<n.length;o++)As(n[o],!1),Ql(n[o]);else n!=null&&(As(n,!1),Ql(n));else As(this,e)}const $_=e=>{e.type==kr.CHILD&&(e._$AP??(e._$AP=S_),e._$AQ??(e._$AQ=C_))};let E_=class extends xa{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,n){super._$AT(t,r,n),u0(this),this.isConnected=t._$AU}_$AO(t,r=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),r&&(As(this,t),Ql(this))}setValue(t){if(i0(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A_=()=>new z_;class z_{}const Cu=new WeakMap,T_=wa(class extends E_{render(e){return Ce}update(e,[t]){var n;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(n=e.options)==null?void 0:n.host,this.rt(this.ct=e.element)),Ce}rt(e){if(typeof this.Y=="function"){const t=this.ht??globalThis;let r=Cu.get(t);r===void 0&&(r=new WeakMap,Cu.set(t,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=Cu.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var O_=class{constructor(e,t,r){this.popupRef=A_(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=n=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${n.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${n.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=n=>{switch(n.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":n.target!==this.host&&(n.preventDefault(),n.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(n);break}},this.handleClick=n=>{var i;n.target===this.host?(n.preventDefault(),n.stopPropagation()):n.target instanceof Element&&(n.target.tagName==="sl-menu-item"||(i=n.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=n=>{n.relatedTarget&&n.relatedTarget instanceof Element&&this.host.contains(n.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=n=>{n.stopPropagation()},this.handlePopupReposition=()=>{const n=this.host.renderRoot.querySelector("slot[name='submenu']"),i=n==null?void 0:n.assignedElements({flatten:!0}).filter(f=>f.localName==="sl-menu")[0],o=this.localize.dir()==="rtl";if(!i)return;const{left:s,top:l,width:a,height:c}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?s+a:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?s+a:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${l+c}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=r}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const n of t.assignedElements())if(r=n.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let n=1;n!==r.length;++n)r[n].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),n=["padding-top","border-top-width","margin-top"].reduce((i,o)=>{var s;const l=(s=t.get(o))!=null?s:new CSSUnitValue(0,"px"),c=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return i-c.value},0);this.skidding=n}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?O`
      <sl-popup
        ${T_(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:O` <slot name="submenu" hidden></slot> `}},Ht=class extends V{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new de(this),this.hasSlotController=new wt(this,"submenu"),this.submenuController=new O_(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return O2(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return O`
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
    `}};Ht.styles=[X,k_];Ht.dependencies={"sl-icon":ve,"sl-popup":he,"sl-spinner":_a};u([R("slot:not([name])")],Ht.prototype,"defaultSlot",2);u([R(".menu-item")],Ht.prototype,"menuItem",2);u([g()],Ht.prototype,"type",2);u([g({type:Boolean,reflect:!0})],Ht.prototype,"checked",2);u([g()],Ht.prototype,"value",2);u([g({type:Boolean,reflect:!0})],Ht.prototype,"loading",2);u([g({type:Boolean,reflect:!0})],Ht.prototype,"disabled",2);u([I("checked")],Ht.prototype,"handleCheckedChange",1);u([I("disabled")],Ht.prototype,"handleDisabledChange",1);u([I("type")],Ht.prototype,"handleTypeChange",1);Ht.define("sl-menu-item");var P_=W`
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
`,te=class extends V{constructor(){super(...arguments),this.formControlController=new sn(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new wt(this,"help-text","label"),this.localize=new de(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,n="preserve"){const i=t??this.input.selectionStart,o=r??this.input.selectionEnd;this.input.setRangeText(e,i,o,n),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,n=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return O`
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
              .value=${Si(this.value)}
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
    `}};te.styles=[X,Ri,P_];te.dependencies={"sl-icon":ve};u([R(".input__control")],te.prototype,"input",2);u([q()],te.prototype,"hasFocus",2);u([g()],te.prototype,"title",2);u([g({reflect:!0})],te.prototype,"type",2);u([g()],te.prototype,"name",2);u([g()],te.prototype,"value",2);u([Ii()],te.prototype,"defaultValue",2);u([g({reflect:!0})],te.prototype,"size",2);u([g({type:Boolean,reflect:!0})],te.prototype,"filled",2);u([g({type:Boolean,reflect:!0})],te.prototype,"pill",2);u([g()],te.prototype,"label",2);u([g({attribute:"help-text"})],te.prototype,"helpText",2);u([g({type:Boolean})],te.prototype,"clearable",2);u([g({type:Boolean,reflect:!0})],te.prototype,"disabled",2);u([g()],te.prototype,"placeholder",2);u([g({type:Boolean,reflect:!0})],te.prototype,"readonly",2);u([g({attribute:"password-toggle",type:Boolean})],te.prototype,"passwordToggle",2);u([g({attribute:"password-visible",type:Boolean})],te.prototype,"passwordVisible",2);u([g({attribute:"no-spin-buttons",type:Boolean})],te.prototype,"noSpinButtons",2);u([g({reflect:!0})],te.prototype,"form",2);u([g({type:Boolean,reflect:!0})],te.prototype,"required",2);u([g()],te.prototype,"pattern",2);u([g({type:Number})],te.prototype,"minlength",2);u([g({type:Number})],te.prototype,"maxlength",2);u([g()],te.prototype,"min",2);u([g()],te.prototype,"max",2);u([g()],te.prototype,"step",2);u([g()],te.prototype,"autocapitalize",2);u([g()],te.prototype,"autocorrect",2);u([g()],te.prototype,"autocomplete",2);u([g({type:Boolean})],te.prototype,"autofocus",2);u([g()],te.prototype,"enterkeyhint",2);u([g({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],te.prototype,"spellcheck",2);u([g()],te.prototype,"inputmode",2);u([I("disabled",{waitUntilFirstUpdate:!0})],te.prototype,"handleDisabledChange",1);u([I("step",{waitUntilFirstUpdate:!0})],te.prototype,"handleStepChange",1);u([I("value",{waitUntilFirstUpdate:!0})],te.prototype,"handleValueChange",1);te.define("sl-input");var L_=W`
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
    `}};ah.styles=[X,L_];u([R("slot")],ah.prototype,"defaultSlot",2);ah.define("sl-menu");var I_=W`
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
`,d0=class extends V{render(){return O` <slot part="base" class="menu-label"></slot> `}};d0.styles=[X,I_];d0.define("sl-menu-label");var R_=W`
  :host {
    display: block;
  }
`,Su=new Map;function N_(e,t="cors"){const r=Su.get(e);if(r!==void 0)return Promise.resolve(r);const n=fetch(e,{mode:t}).then(async i=>{const o={ok:i.ok,status:i.status,html:await i.text()};return Su.set(e,o),o});return Su.set(e,n),n}var Vo=class extends V{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await N_(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return O`<slot></slot>`}};Vo.styles=[X,R_];u([g()],Vo.prototype,"src",2);u([g()],Vo.prototype,"mode",2);u([g({attribute:"allow-scripts",type:Boolean})],Vo.prototype,"allowScripts",2);u([I("src")],Vo.prototype,"handleSrcChange",1);Vo.define("sl-include");var D_=W`
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
`,Mi=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),Es(this.base,{onMove:n=>{this.position=parseFloat(Ve(n/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const n=e.shiftKey?10:1;let i=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(i-=n),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(i+=n),e.key==="Home"&&(i=0),e.key==="End"&&(i=100),i=Ve(i,0,100),this.position=i}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return O`
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
    `}};Mi.styles=[X,D_];Mi.scopedElement={"sl-icon":ve};u([R(".image-comparer")],Mi.prototype,"base",2);u([R(".image-comparer__handle")],Mi.prototype,"handle",2);u([g({type:Number,reflect:!0})],Mi.prototype,"position",2);u([I("position",{waitUntilFirstUpdate:!0})],Mi.prototype,"handlePositionChange",1);Mi.define("sl-image-comparer");ve.define("sl-icon");qe.define("sl-icon-button");var Rc=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,n=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),i=r[n]+this.unit,o=parseFloat((this.value/Math.pow(1e3,n)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};u([g({type:Number})],Rc.prototype,"value",2);u([g()],Rc.prototype,"unit",2);u([g()],Rc.prototype,"display",2);Rc.define("sl-format-bytes");var Ut=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return O`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};u([g()],Ut.prototype,"date",2);u([g()],Ut.prototype,"weekday",2);u([g()],Ut.prototype,"era",2);u([g()],Ut.prototype,"year",2);u([g()],Ut.prototype,"month",2);u([g()],Ut.prototype,"day",2);u([g()],Ut.prototype,"hour",2);u([g()],Ut.prototype,"minute",2);u([g()],Ut.prototype,"second",2);u([g({attribute:"time-zone-name"})],Ut.prototype,"timeZoneName",2);u([g({attribute:"time-zone"})],Ut.prototype,"timeZone",2);u([g({attribute:"hour-format"})],Ut.prototype,"hourFormat",2);Ut.define("sl-format-date");var yr=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};u([g({type:Number})],yr.prototype,"value",2);u([g()],yr.prototype,"type",2);u([g({attribute:"no-grouping",type:Boolean})],yr.prototype,"noGrouping",2);u([g()],yr.prototype,"currency",2);u([g({attribute:"currency-display"})],yr.prototype,"currencyDisplay",2);u([g({attribute:"minimum-integer-digits",type:Number})],yr.prototype,"minimumIntegerDigits",2);u([g({attribute:"minimum-fraction-digits",type:Number})],yr.prototype,"minimumFractionDigits",2);u([g({attribute:"maximum-fraction-digits",type:Number})],yr.prototype,"maximumFractionDigits",2);u([g({attribute:"minimum-significant-digits",type:Number})],yr.prototype,"minimumSignificantDigits",2);u([g({attribute:"maximum-significant-digits",type:Number})],yr.prototype,"maximumSignificantDigits",2);yr.define("sl-format-number");var M_=W`
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
`,Nc=class extends V{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Nc.styles=[X,M_];u([g({type:Boolean,reflect:!0})],Nc.prototype,"vertical",2);u([I("vertical")],Nc.prototype,"handleVerticalChange",1);Nc.define("sl-divider");var j_=W`
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
`,um=new WeakMap;function f0(e){let t=um.get(e);return t||(t=window.getComputedStyle(e,null),um.set(e,t)),t}function F_(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=f0(e);return t.visibility!=="hidden"&&t.display!=="none"}function B_(e){const t=f0(e),{overflowY:r,overflowX:n}=t;return r==="scroll"||n==="scroll"?!0:r!=="auto"||n!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&n==="auto"}function V_(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!F_(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:B_(e)}function H_(e){var t,r;const n=Sd(e),i=(t=n[0])!=null?t:null,o=(r=n[n.length-1])!=null?r:null;return{start:i,end:o}}function U_(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function Sd(e){const t=new WeakMap,r=[];function n(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!r.includes(i)&&V_(i)&&r.push(i),i instanceof HTMLSlotElement&&U_(i,e)&&i.assignedElements({flatten:!0}).forEach(o=>{n(o)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&n(i.shadowRoot)}for(const o of i.children)n(o)}return n(e),r.sort((i,o)=>{const s=Number(i.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-s})}function*lh(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*ux(lh(e.shadowRoot.activeElement))))}function W_(){return[...lh()].pop()}var ns=[],h0=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=r=>{var n;if(r.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=W_();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;r.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=Sd(this.element);let s=o.findIndex(a=>a===i);this.previousFocus=this.currentFocus;const l=this.tabDirection==="forward"?1:-1;for(;;){s+l>=o.length?s=0:s+l<0?s=o.length-1:s+=l,this.previousFocus=this.currentFocus;const a=o[s];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;r.preventDefault(),this.currentFocus=a,(n=this.currentFocus)==null||n.focus({preventScroll:!1});const c=[...lh()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){ns.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ns=ns.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ns[ns.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Sd(this.element);if(!this.element.matches(":focus-within")){const r=t[0],n=t[t.length-1],i=this.tabDirection==="forward"?r:n;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function dm(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Wt=class extends V{constructor(){super(...arguments),this.hasSlotController=new wt(this,"footer"),this.localize=new de(this),this.modal=new h0(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ss(this)))}disconnectedCallback(){var e;super.disconnectedCallback(),$s(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=$e(this,"drawer.denyClose",{dir:this.localize.dir()});Re(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ss(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ue(this.drawer),Ue(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=$e(this,`drawer.show${dm(this.placement)}`,{dir:this.localize.dir()}),r=$e(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Re(this.panel,t.keyframes,t.options),Re(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),$s(this)),await Promise.all([Ue(this.drawer),Ue(this.overlay)]);const e=$e(this,`drawer.hide${dm(this.placement)}`,{dir:this.localize.dir()}),t=$e(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Re(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Re(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ss(this)),this.open&&this.contained&&(this.modal.deactivate(),$s(this))}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}render(){return O`
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
    `}};Wt.styles=[X,j_];Wt.dependencies={"sl-icon-button":qe};u([R(".drawer")],Wt.prototype,"drawer",2);u([R(".drawer__panel")],Wt.prototype,"panel",2);u([R(".drawer__overlay")],Wt.prototype,"overlay",2);u([g({type:Boolean,reflect:!0})],Wt.prototype,"open",2);u([g({reflect:!0})],Wt.prototype,"label",2);u([g({reflect:!0})],Wt.prototype,"placement",2);u([g({type:Boolean,reflect:!0})],Wt.prototype,"contained",2);u([g({attribute:"no-header",type:Boolean,reflect:!0})],Wt.prototype,"noHeader",2);u([I("open",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleOpenChange",1);u([I("contained",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleNoModalChange",1);pe("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});pe("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});pe("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});pe("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});pe("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});pe("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});pe("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});pe("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});pe("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});pe("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});pe("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Wt.define("sl-drawer");var K_=W`
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
`,ut=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,n,i;const o=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(i=(n=document.activeElement)==null?void 0:n.shadowRoot)==null?void 0:i.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),n=r[0],i=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(n),n.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(n=>H_(n).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Ue(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=$e(this,"dropdown.show",{dir:this.localize.dir()});await Re(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Ue(this);const{keyframes:e,options:t}=$e(this,"dropdown.hide",{dir:this.localize.dir()});await Re(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return O`
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
    `}};ut.styles=[X,K_];ut.dependencies={"sl-popup":he};u([R(".dropdown")],ut.prototype,"popup",2);u([R(".dropdown__trigger")],ut.prototype,"trigger",2);u([R(".dropdown__panel")],ut.prototype,"panel",2);u([g({type:Boolean,reflect:!0})],ut.prototype,"open",2);u([g({reflect:!0})],ut.prototype,"placement",2);u([g({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);u([g({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ut.prototype,"stayOpenOnSelect",2);u([g({attribute:!1})],ut.prototype,"containingElement",2);u([g({type:Number})],ut.prototype,"distance",2);u([g({type:Number})],ut.prototype,"skidding",2);u([g({type:Boolean})],ut.prototype,"hoist",2);u([g({reflect:!0})],ut.prototype,"sync",2);u([I("open",{waitUntilFirstUpdate:!0})],ut.prototype,"handleOpenChange",1);pe("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});pe("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});ut.define("sl-dropdown");var Y_=W`
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
    `}};tt.styles=[X,Y_];tt.dependencies={"sl-icon":ve,"sl-tooltip":et};u([R('slot[name="copy-icon"]')],tt.prototype,"copyIcon",2);u([R('slot[name="success-icon"]')],tt.prototype,"successIcon",2);u([R('slot[name="error-icon"]')],tt.prototype,"errorIcon",2);u([R("sl-tooltip")],tt.prototype,"tooltip",2);u([q()],tt.prototype,"isCopying",2);u([q()],tt.prototype,"status",2);u([g()],tt.prototype,"value",2);u([g()],tt.prototype,"from",2);u([g({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);u([g({attribute:"copy-label"})],tt.prototype,"copyLabel",2);u([g({attribute:"success-label"})],tt.prototype,"successLabel",2);u([g({attribute:"error-label"})],tt.prototype,"errorLabel",2);u([g({attribute:"feedback-duration",type:Number})],tt.prototype,"feedbackDuration",2);u([g({attribute:"tooltip-placement"})],tt.prototype,"tooltipPlacement",2);u([g({type:Boolean})],tt.prototype,"hoist",2);pe("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});pe("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});tt.define("sl-copy-button");var X_=W`
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
`,br=class extends V{constructor(){super(...arguments),this.localize=new de(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Ue(this.body);const{keyframes:t,options:r}=$e(this,"details.show",{dir:this.localize.dir()});await Re(this.body,Gl(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Ue(this.body);const{keyframes:t,options:r}=$e(this,"details.hide",{dir:this.localize.dir()});await Re(this.body,Gl(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,bt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,bt(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return O`
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
    `}};br.styles=[X,X_];br.dependencies={"sl-icon":ve};u([R(".details")],br.prototype,"details",2);u([R(".details__header")],br.prototype,"header",2);u([R(".details__body")],br.prototype,"body",2);u([R(".details__expand-icon-slot")],br.prototype,"expandIconSlot",2);u([g({type:Boolean,reflect:!0})],br.prototype,"open",2);u([g()],br.prototype,"summary",2);u([g({type:Boolean,reflect:!0})],br.prototype,"disabled",2);u([I("open",{waitUntilFirstUpdate:!0})],br.prototype,"handleOpenChange",1);pe("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});pe("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});br.define("sl-details");var G_=W`
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
`,Rr=class extends V{constructor(){super(...arguments),this.hasSlotController=new wt(this,"footer"),this.localize=new de(this),this.modal=new h0(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ss(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),$s(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=$e(this,"dialog.denyClose",{dir:this.localize.dir()});Re(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ss(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Ue(this.dialog),Ue(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=$e(this,"dialog.show",{dir:this.localize.dir()}),r=$e(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Re(this.panel,t.keyframes,t.options),Re(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Ue(this.dialog),Ue(this.overlay)]);const e=$e(this,"dialog.hide",{dir:this.localize.dir()}),t=$e(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Re(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Re(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,$s(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}render(){return O`
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
    `}};Rr.styles=[X,G_];Rr.dependencies={"sl-icon-button":qe};u([R(".dialog")],Rr.prototype,"dialog",2);u([R(".dialog__panel")],Rr.prototype,"panel",2);u([R(".dialog__overlay")],Rr.prototype,"overlay",2);u([g({type:Boolean,reflect:!0})],Rr.prototype,"open",2);u([g({reflect:!0})],Rr.prototype,"label",2);u([g({attribute:"no-header",type:Boolean,reflect:!0})],Rr.prototype,"noHeader",2);u([I("open",{waitUntilFirstUpdate:!0})],Rr.prototype,"handleOpenChange",1);pe("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});pe("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});pe("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});pe("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});pe("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Rr.define("sl-dialog");Ge.define("sl-checkbox");var q_=W`
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
`,me=class extends V{constructor(){super(...arguments),this.formControlController=new sn(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new wt(this,"[default]","prefix","suffix"),this.localize=new de(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Tc}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?ql`a`:ql`button`;return Cs`
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
        ${this.caret?Cs` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Cs`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};me.styles=[X,a0];me.dependencies={"sl-icon":ve,"sl-spinner":_a};u([R(".button")],me.prototype,"button",2);u([q()],me.prototype,"hasFocus",2);u([q()],me.prototype,"invalid",2);u([g()],me.prototype,"title",2);u([g({reflect:!0})],me.prototype,"variant",2);u([g({reflect:!0})],me.prototype,"size",2);u([g({type:Boolean,reflect:!0})],me.prototype,"caret",2);u([g({type:Boolean,reflect:!0})],me.prototype,"disabled",2);u([g({type:Boolean,reflect:!0})],me.prototype,"loading",2);u([g({type:Boolean,reflect:!0})],me.prototype,"outline",2);u([g({type:Boolean,reflect:!0})],me.prototype,"pill",2);u([g({type:Boolean,reflect:!0})],me.prototype,"circle",2);u([g()],me.prototype,"type",2);u([g()],me.prototype,"name",2);u([g()],me.prototype,"value",2);u([g()],me.prototype,"href",2);u([g()],me.prototype,"target",2);u([g()],me.prototype,"rel",2);u([g()],me.prototype,"download",2);u([g()],me.prototype,"form",2);u([g({attribute:"formaction"})],me.prototype,"formAction",2);u([g({attribute:"formenctype"})],me.prototype,"formEnctype",2);u([g({attribute:"formmethod"})],me.prototype,"formMethod",2);u([g({attribute:"formnovalidate",type:Boolean})],me.prototype,"formNoValidate",2);u([g({attribute:"formtarget"})],me.prototype,"formTarget",2);u([I("disabled",{waitUntilFirstUpdate:!0})],me.prototype,"handleDisabledChange",1);function st(e,t){Q_(e)&&(e="100%");const r=Z_(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function qa(e){return Math.min(1,Math.max(0,e))}function Q_(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Z_(e){return typeof e=="string"&&e.indexOf("%")!==-1}function p0(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Qa(e){return Number(e)<=1?`${Number(e)*100}%`:e}function fi(e){return e.length===1?"0"+e:String(e)}function J_(e,t,r){return{r:st(e,255)*255,g:st(t,255)*255,b:st(r,255)*255}}function fm(e,t,r){e=st(e,255),t=st(t,255),r=st(r,255);const n=Math.max(e,t,r),i=Math.min(e,t,r);let o=0,s=0;const l=(n+i)/2;if(n===i)s=0,o=0;else{const a=n-i;switch(s=l>.5?a/(2-n-i):a/(n+i),n){case e:o=(t-r)/a+(t<r?6:0);break;case t:o=(r-e)/a+2;break;case r:o=(e-t)/a+4;break}o/=6}return{h:o,s,l}}function $u(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ek(e,t,r){let n,i,o;if(e=st(e,360),t=st(t,100),r=st(r,100),t===0)i=r,o=r,n=r;else{const s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;n=$u(l,s,e+1/3),i=$u(l,s,e),o=$u(l,s,e-1/3)}return{r:n*255,g:i*255,b:o*255}}function hm(e,t,r){e=st(e,255),t=st(t,255),r=st(r,255);const n=Math.max(e,t,r),i=Math.min(e,t,r);let o=0;const s=n,l=n-i,a=n===0?0:l/n;if(n===i)o=0;else{switch(n){case e:o=(t-r)/l+(t<r?6:0);break;case t:o=(r-e)/l+2;break;case r:o=(e-t)/l+4;break}o/=6}return{h:o,s:a,v:s}}function tk(e,t,r){e=st(e,360)*6,t=st(t,100),r=st(r,100);const n=Math.floor(e),i=e-n,o=r*(1-t),s=r*(1-i*t),l=r*(1-(1-i)*t),a=n%6,c=[r,s,o,o,l,r][a],f=[l,r,r,s,o,o][a],d=[o,o,l,r,r,s][a];return{r:c*255,g:f*255,b:d*255}}function pm(e,t,r,n){const i=[fi(Math.round(e).toString(16)),fi(Math.round(t).toString(16)),fi(Math.round(r).toString(16))];return n&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function rk(e,t,r,n,i){const o=[fi(Math.round(e).toString(16)),fi(Math.round(t).toString(16)),fi(Math.round(r).toString(16)),fi(nk(n))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function nk(e){return Math.round(parseFloat(e)*255).toString(16)}function mm(e){return Pt(e)/255}function Pt(e){return parseInt(e,16)}function ik(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const $d={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ok(e){let t={r:0,g:0,b:0},r=1,n=null,i=null,o=null,s=!1,l=!1;return typeof e=="string"&&(e=lk(e)),typeof e=="object"&&(Br(e.r)&&Br(e.g)&&Br(e.b)?(t=J_(e.r,e.g,e.b),s=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Br(e.h)&&Br(e.s)&&Br(e.v)?(n=Qa(e.s),i=Qa(e.v),t=tk(e.h,n,i),s=!0,l="hsv"):Br(e.h)&&Br(e.s)&&Br(e.l)&&(n=Qa(e.s),o=Qa(e.l),t=ek(e.h,n,o),s=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=p0(r),{ok:s,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}const sk="[-\\+]?\\d+%?",ak="[-\\+]?\\d*\\.\\d+%?",$n="(?:"+ak+")|(?:"+sk+")",Eu="[\\s|\\(]+("+$n+")[,|\\s]+("+$n+")[,|\\s]+("+$n+")\\s*\\)?",Au="[\\s|\\(]+("+$n+")[,|\\s]+("+$n+")[,|\\s]+("+$n+")[,|\\s]+("+$n+")\\s*\\)?",lr={CSS_UNIT:new RegExp($n),rgb:new RegExp("rgb"+Eu),rgba:new RegExp("rgba"+Au),hsl:new RegExp("hsl"+Eu),hsla:new RegExp("hsla"+Au),hsv:new RegExp("hsv"+Eu),hsva:new RegExp("hsva"+Au),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function lk(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if($d[e])e=$d[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=lr.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=lr.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=lr.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=lr.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=lr.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=lr.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=lr.hex8.exec(e),r?{r:Pt(r[1]),g:Pt(r[2]),b:Pt(r[3]),a:mm(r[4]),format:t?"name":"hex8"}:(r=lr.hex6.exec(e),r?{r:Pt(r[1]),g:Pt(r[2]),b:Pt(r[3]),format:t?"name":"hex"}:(r=lr.hex4.exec(e),r?{r:Pt(r[1]+r[1]),g:Pt(r[2]+r[2]),b:Pt(r[3]+r[3]),a:mm(r[4]+r[4]),format:t?"name":"hex8"}:(r=lr.hex3.exec(e),r?{r:Pt(r[1]+r[1]),g:Pt(r[2]+r[2]),b:Pt(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function Br(e){return!!lr.CSS_UNIT.exec(String(e))}class Pe{constructor(t="",r={}){if(t instanceof Pe)return t;typeof t=="number"&&(t=ik(t)),this.originalInput=t;const n=ok(t);this.originalInput=t,this.r=n.r,this.g=n.g,this.b=n.b,this.a=n.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??n.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=n.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let r,n,i;const o=t.r/255,s=t.g/255,l=t.b/255;return o<=.03928?r=o/12.92:r=Math.pow((o+.055)/1.055,2.4),s<=.03928?n=s/12.92:n=Math.pow((s+.055)/1.055,2.4),l<=.03928?i=l/12.92:i=Math.pow((l+.055)/1.055,2.4),.2126*r+.7152*n+.0722*i}getAlpha(){return this.a}setAlpha(t){return this.a=p0(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=hm(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=hm(this.r,this.g,this.b),r=Math.round(t.h*360),n=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?`hsv(${r}, ${n}%, ${i}%)`:`hsva(${r}, ${n}%, ${i}%, ${this.roundA})`}toHsl(){const t=fm(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=fm(this.r,this.g,this.b),r=Math.round(t.h*360),n=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?`hsl(${r}, ${n}%, ${i}%)`:`hsla(${r}, ${n}%, ${i}%, ${this.roundA})`}toHex(t=!1){return pm(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return rk(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),r=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${t}, ${r}, ${n})`:`rgba(${t}, ${r}, ${n}, ${this.roundA})`}toPercentageRgb(){const t=r=>`${Math.round(st(r,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=r=>Math.round(st(r,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+pm(this.r,this.g,this.b,!1);for(const[r,n]of Object.entries($d))if(t===n)return r;return!1}toString(t){const r=!!t;t=t??this.format;let n=!1;const i=this.a<1&&this.a>=0;return!r&&i&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Pe(this.toString())}lighten(t=10){const r=this.toHsl();return r.l+=t/100,r.l=qa(r.l),new Pe(r)}brighten(t=10){const r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new Pe(r)}darken(t=10){const r=this.toHsl();return r.l-=t/100,r.l=qa(r.l),new Pe(r)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const r=this.toHsl();return r.s-=t/100,r.s=qa(r.s),new Pe(r)}saturate(t=10){const r=this.toHsl();return r.s+=t/100,r.s=qa(r.s),new Pe(r)}greyscale(){return this.desaturate(100)}spin(t){const r=this.toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,new Pe(r)}mix(t,r=50){const n=this.toRgb(),i=new Pe(t).toRgb(),o=r/100,s={r:(i.r-n.r)*o+n.r,g:(i.g-n.g)*o+n.g,b:(i.b-n.b)*o+n.b,a:(i.a-n.a)*o+n.a};return new Pe(s)}analogous(t=6,r=30){const n=this.toHsl(),i=360/r,o=[this];for(n.h=(n.h-(i*t>>1)+720)%360;--t;)n.h=(n.h+i)%360,o.push(new Pe(n));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new Pe(t)}monochromatic(t=6){const r=this.toHsv(),{h:n}=r,{s:i}=r;let{v:o}=r;const s=[],l=1/t;for(;t--;)s.push(new Pe({h:n,s:i,v:o})),o=(o+l)%1;return s}splitcomplement(){const t=this.toHsl(),{h:r}=t;return[this,new Pe({h:(r+72)%360,s:t.s,l:t.l}),new Pe({h:(r+216)%360,s:t.s,l:t.l})]}onBackground(t){const r=this.toRgb(),n=new Pe(t).toRgb(),i=r.a+n.a*(1-r.a);return new Pe({r:(r.r*r.a+n.r*n.a*(1-r.a))/i,g:(r.g*r.a+n.g*n.a*(1-r.a))/i,b:(r.b*r.a+n.b*n.a*(1-r.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const r=this.toHsl(),{h:n}=r,i=[this],o=360/t;for(let s=1;s<t;s++)i.push(new Pe({h:(n+s*o)%360,s:r.s,l:r.l}));return i}equals(t){return this.toRgbString()===new Pe(t).toRgbString()}}var gm="EyeDropper"in window,ae=class extends V{constructor(){super(),this.formControlController=new sn(this),this.isSafeValue=!1,this.localize=new de(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();let i=this.value,o=this.value;r.focus(),e.preventDefault(),Es(t,{onMove:s=>{this.alpha=Ve(s/n*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:n}=t.getBoundingClientRect();let i=this.value,o=this.value;r.focus(),e.preventDefault(),Es(t,{onMove:s=>{this.hue=Ve(s/n*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==i&&(i=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:n,height:i}=t.getBoundingClientRect();let o=this.value,s=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Es(t,{onMove:(l,a)=>{this.saturation=Ve(l/n*100,0,100),this.brightness=Ve(100-a/i*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Ve(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Ve(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Ve(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Ve(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Ve(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Ve(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Ve(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Ve(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new Pe(e);if(!t.isValid)return null;const r=t.toHsl(),n={h:r.h,s:r.s*100,l:r.l*100,a:r.a},i=t.toRgb(),o=t.toHexString(),s=t.toHex8String(),l=t.toHsv(),a={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:n.h,s:n.s,l:n.l,string:this.setLetterCase(`hsl(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%)`)},hsla:{h:n.h,s:n.s,l:n.l,a:n.a,string:this.setLetterCase(`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${n.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(s)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!gm)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,n=100){const i=new Pe(`hsva(${e}, ${t}%, ${r}%, ${n/100})`);return i.isValid?i.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(i=>i.trim()!==""),n=O`
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
            ${gm?O`
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
    `}};ae.styles=[X,q_];ae.dependencies={"sl-button-group":Di,"sl-button":me,"sl-dropdown":ut,"sl-icon":ve,"sl-input":te,"sl-visually-hidden":Jf};u([R('[part~="base"]')],ae.prototype,"base",2);u([R('[part~="input"]')],ae.prototype,"input",2);u([R(".color-dropdown")],ae.prototype,"dropdown",2);u([R('[part~="preview"]')],ae.prototype,"previewButton",2);u([R('[part~="trigger"]')],ae.prototype,"trigger",2);u([q()],ae.prototype,"hasFocus",2);u([q()],ae.prototype,"isDraggingGridHandle",2);u([q()],ae.prototype,"isEmpty",2);u([q()],ae.prototype,"inputValue",2);u([q()],ae.prototype,"hue",2);u([q()],ae.prototype,"saturation",2);u([q()],ae.prototype,"brightness",2);u([q()],ae.prototype,"alpha",2);u([g()],ae.prototype,"value",2);u([Ii()],ae.prototype,"defaultValue",2);u([g()],ae.prototype,"label",2);u([g()],ae.prototype,"format",2);u([g({type:Boolean,reflect:!0})],ae.prototype,"inline",2);u([g({reflect:!0})],ae.prototype,"size",2);u([g({attribute:"no-format-toggle",type:Boolean})],ae.prototype,"noFormatToggle",2);u([g()],ae.prototype,"name",2);u([g({type:Boolean,reflect:!0})],ae.prototype,"disabled",2);u([g({type:Boolean})],ae.prototype,"hoist",2);u([g({type:Boolean})],ae.prototype,"opacity",2);u([g({type:Boolean})],ae.prototype,"uppercase",2);u([g()],ae.prototype,"swatches",2);u([g({reflect:!0})],ae.prototype,"form",2);u([g({type:Boolean,reflect:!0})],ae.prototype,"required",2);u([I("format",{waitUntilFirstUpdate:!0})],ae.prototype,"handleFormatChange",1);u([I("opacity",{waitUntilFirstUpdate:!0})],ae.prototype,"handleOpacityChange",1);u([I("value")],ae.prototype,"handleValueChange",1);ae.define("sl-color-picker");var ck=W`
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
`,m0=class extends V{constructor(){super(...arguments),this.hasSlotController=new wt(this,"footer","header","image")}render(){return O`
      <div
        part="base"
        class=${G({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};m0.styles=[X,ck];m0.define("sl-card");var uk=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},dk=W`
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
 */function*fk(e,t){if(e!==void 0){let r=0;for(const n of e)yield t(n,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*hk(e,t,r=1){const n=t===void 0?0:e;t??(t=e);for(let i=n;r>0?i<t:t<i;i+=r)yield i}var pk=(e,t)=>{let r=0;return function(...n){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...n)},t)}},vm=(e,t,r)=>{const n=e[t];e[t]=function(...i){n.call(this,...i),r.call(this,n,...i)}},mk="onscrollend"in window;if(!mk){const e=new Set,t=new WeakMap,r=i=>{for(const o of i.changedTouches)e.add(o.identifier)},n=i=>{for(const o of i.changedTouches)e.delete(o.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",n,!0),document.addEventListener("touchcancel",n,!0),vm(EventTarget.prototype,"addEventListener",function(i,o){if(o!=="scrollend")return;const s=pk(()=>{e.size?s():this.dispatchEvent(new Event("scrollend"))},100);i.call(this,"scroll",s,{passive:!0}),t.set(this,s)}),vm(EventTarget.prototype,"removeEventListener",function(i,o){if(o!=="scrollend")return;const s=t.get(this);s&&i.call(this,"scroll",s,{passive:!0})})}var De=class extends V{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new uk(this,()=>this.next()),this.localize=new de(this),this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const n=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:r,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==n||r!==i)&&(e.scrollTo({left:n,top:i,behavior:vd()?"auto":"smooth"}),await bt(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(n=>this.isCarouselItem(n)&&!n.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:r,loop:n}=this,i=n?e/r:(e-t)/r+1;return Math.ceil(i)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",n=t.closest('[part~="pagination-item"]')!==null,i=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",o=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),o&&this.previous(),i&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),n&&this.updateComplete.then(()=>{var s;const l=(s=this.shadowRoot)==null?void 0:s.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const n of t){const i=n.target;i.toggleAttribute("inert",!n.isIntersecting),i.classList.toggle("--in-view",n.isIntersecting),i.setAttribute("aria-hidden",n.isIntersecting?"false":"true")}const r=t.find(n=>n.isIntersecting);if(r)if(this.loop&&r.target.hasAttribute("data-clone")){const n=Number(r.target.getAttribute("data-clone"));this.goToSlide(n,"instant")}else{const i=this.getSlides().indexOf(r.target);this.activeSlide=Math.ceil(i/this.slidesPerMove)*this.slidesPerMove}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1)}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.synchronizeSlides(),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,r=e.slice(-t),n=e.slice(0,t);r.reverse().forEach((i,o)=>{const s=i.cloneNode(!0);s.setAttribute("data-clone",String(e.length-o-1)),this.prepend(s)}),n.forEach((i,o)=>{const s=i.cloneNode(!0);s.setAttribute("data-clone",String(o)),this.append(s)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((r,n)=>{(n+t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:n}=this,i=this.getSlides(),o=this.getSlides({excludeClones:!1});if(!i.length)return;const s=n?(e+i.length)%i.length:Ve(e,0,i.length-1);this.activeSlide=s;const l=Ve(e+(n?r:0),0,o.length-1),a=o[l];this.scrollToSlide(a,vd()?"auto":t)}scrollToSlide(e,t="smooth"){const r=this.scrollContainer,n=r.getBoundingClientRect(),i=e.getBoundingClientRect(),o=i.left-n.left,s=i.top-n.top;r.scrollTo({left:o+r.scrollLeft,top:s+r.scrollTop,behavior:t})}render(){const{slidesPerMove:e,scrolling:t}=this,r=this.getPageCount(),n=this.getCurrentPage(),i=this.canScrollPrev(),o=this.canScrollNext(),s=this.localize.dir()==="ltr";return O`
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
                ${fk(hk(r),l=>{const a=l===n;return O`
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
    `}};De.styles=[X,dk];De.dependencies={"sl-icon":ve};u([g({type:Boolean,reflect:!0})],De.prototype,"loop",2);u([g({type:Boolean,reflect:!0})],De.prototype,"navigation",2);u([g({type:Boolean,reflect:!0})],De.prototype,"pagination",2);u([g({type:Boolean,reflect:!0})],De.prototype,"autoplay",2);u([g({type:Number,attribute:"autoplay-interval"})],De.prototype,"autoplayInterval",2);u([g({type:Number,attribute:"slides-per-page"})],De.prototype,"slidesPerPage",2);u([g({type:Number,attribute:"slides-per-move"})],De.prototype,"slidesPerMove",2);u([g()],De.prototype,"orientation",2);u([g({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],De.prototype,"mouseDragging",2);u([R(".carousel__slides")],De.prototype,"scrollContainer",2);u([R(".carousel__pagination")],De.prototype,"paginationContainer",2);u([q()],De.prototype,"activeSlide",2);u([q()],De.prototype,"scrolling",2);u([q()],De.prototype,"dragging",2);u([Zf({passive:!0})],De.prototype,"handleScroll",1);u([I("loop",{waitUntilFirstUpdate:!0}),I("slidesPerPage",{waitUntilFirstUpdate:!0})],De.prototype,"initializeSlides",1);u([I("activeSlide")],De.prototype,"handelSlideChange",1);u([I("slidesPerMove")],De.prototype,"updateSlidesSnap",1);u([I("autoplay")],De.prototype,"handleAutoplayChange",1);De.define("sl-carousel");var gk=W`
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
`,g0=class extends V{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return O` <slot></slot> `}};g0.styles=[X,gk];g0.define("sl-carousel-item");me.define("sl-button");Di.define("sl-button-group");var vk=W`
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
`,Sa=class extends V{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return O`
      <span
        part="base"
        class=${G({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Sa.styles=[X,vk];u([g({reflect:!0})],Sa.prototype,"variant",2);u([g({type:Boolean,reflect:!0})],Sa.prototype,"pill",2);u([g({type:Boolean,reflect:!0})],Sa.prototype,"pulse",2);Sa.define("sl-badge");var yk=W`
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
    `}};Ho.styles=[X,yk];Ho.dependencies={"sl-icon":ve};u([R("slot")],Ho.prototype,"defaultSlot",2);u([R('slot[name="separator"]')],Ho.prototype,"separatorSlot",2);u([g()],Ho.prototype,"label",2);Ho.define("sl-breadcrumb");var bk=W`
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
`,$a=class extends V{constructor(){super(...arguments),this.hasSlotController=new wt(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return O`
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
    `}};$a.styles=[X,bk];u([g()],$a.prototype,"href",2);u([g()],$a.prototype,"target",2);u([g()],$a.prototype,"rel",2);$a.define("sl-breadcrumb-item");var wk=W`
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
    `}};wr.styles=[X,wk];wr.dependencies={"sl-icon":ve};u([R(".animated-image__animated")],wr.prototype,"animatedImage",2);u([q()],wr.prototype,"frozenFrame",2);u([q()],wr.prototype,"isLoaded",2);u([g()],wr.prototype,"src",2);u([g()],wr.prototype,"alt",2);u([g({type:Boolean,reflect:!0})],wr.prototype,"play",2);u([I("play",{waitUntilFirstUpdate:!0})],wr.prototype,"handlePlayChange",1);u([I("src")],wr.prototype,"handleSrcChange",1);wr.define("sl-animated-image");var xk=W`
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
    `}};Nr.styles=[X,xk];Nr.dependencies={"sl-icon":ve};u([q()],Nr.prototype,"hasError",2);u([g()],Nr.prototype,"image",2);u([g()],Nr.prototype,"label",2);u([g()],Nr.prototype,"initials",2);u([g()],Nr.prototype,"loading",2);u([g({reflect:!0})],Nr.prototype,"shape",2);u([I("image")],Nr.prototype,"handleImageChange",1);Nr.define("sl-avatar");var _k=W`
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
`,Ui=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Dr=class extends V{constructor(){super(...arguments),this.hasSlotController=new wt(this,"icon","suffix"),this.localize=new de(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Ue(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=$e(this,"alert.show",{dir:this.localize.dir()});await Re(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Ue(this.base);const{keyframes:e,options:t}=$e(this,"alert.hide",{dir:this.localize.dir()});await Re(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,bt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,bt(this,"sl-after-hide")}async toast(){return new Promise(e=>{Ui.parentElement===null&&document.body.append(Ui),Ui.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ui.removeChild(this),e(),Ui.querySelector("sl-alert")===null&&Ui.remove()},{once:!0})})}render(){return O`
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
    `}};Dr.styles=[X,_k];Dr.dependencies={"sl-icon-button":qe};u([R('[part~="base"]')],Dr.prototype,"base",2);u([g({type:Boolean,reflect:!0})],Dr.prototype,"open",2);u([g({type:Boolean,reflect:!0})],Dr.prototype,"closable",2);u([g({reflect:!0})],Dr.prototype,"variant",2);u([g({type:Number})],Dr.prototype,"duration",2);u([I("open",{waitUntilFirstUpdate:!0})],Dr.prototype,"handleOpenChange",1);u([I("duration")],Dr.prototype,"handleDurationChange",1);pe("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});pe("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Dr.define("sl-alert");const kk=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Ck=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Sk=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],$k=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Ek=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ak=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],zk=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Tk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ok=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Pk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Lk=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Ik=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Rk=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Nk=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Dk=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Mk=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],jk=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Fk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Bk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Vk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Hk=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Uk=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Wk=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Kk=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Yk=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Xk=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Gk=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],qk=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Qk=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Zk=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Jk=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],eC=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],tC=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rC=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],nC=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],iC=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],oC=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],sC=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],aC=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],lC=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],cC=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],uC=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],dC=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fC=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hC=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],pC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],mC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],gC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],vC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],yC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],bC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],wC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],xC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],_C=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],kC=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],CC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],SC=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],$C=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],EC=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],AC=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],zC=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],TC=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],OC=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],PC=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],LC=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],IC=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],RC=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],NC=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],DC=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],MC=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],jC=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],FC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],BC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],VC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],HC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],UC=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],WC=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],KC=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],YC=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],XC=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],GC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],qC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],QC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],ZC=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],JC=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],e5=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],t5=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],r5=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],n5=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],i5=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],o5=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],s5=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],a5=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],l5=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],c5=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],u5=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],d5=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],f5=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],v0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},h5=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Nk,backInLeft:Dk,backInRight:Mk,backInUp:jk,backOutDown:Fk,backOutLeft:Bk,backOutRight:Vk,backOutUp:Hk,bounce:kk,bounceIn:Uk,bounceInDown:Wk,bounceInLeft:Kk,bounceInRight:Yk,bounceInUp:Xk,bounceOut:Gk,bounceOutDown:qk,bounceOutLeft:Qk,bounceOutRight:Zk,bounceOutUp:Jk,easings:v0,fadeIn:eC,fadeInBottomLeft:tC,fadeInBottomRight:rC,fadeInDown:nC,fadeInDownBig:iC,fadeInLeft:oC,fadeInLeftBig:sC,fadeInRight:aC,fadeInRightBig:lC,fadeInTopLeft:cC,fadeInTopRight:uC,fadeInUp:dC,fadeInUpBig:fC,fadeOut:hC,fadeOutBottomLeft:pC,fadeOutBottomRight:mC,fadeOutDown:gC,fadeOutDownBig:vC,fadeOutLeft:yC,fadeOutLeftBig:bC,fadeOutRight:wC,fadeOutRightBig:xC,fadeOutTopLeft:_C,fadeOutTopRight:kC,fadeOutUp:CC,fadeOutUpBig:SC,flash:Ck,flip:$C,flipInX:EC,flipInY:AC,flipOutX:zC,flipOutY:TC,headShake:Sk,heartBeat:$k,hinge:JC,jackInTheBox:e5,jello:Ek,lightSpeedInLeft:OC,lightSpeedInRight:PC,lightSpeedOutLeft:LC,lightSpeedOutRight:IC,pulse:Ak,rollIn:t5,rollOut:r5,rotateIn:RC,rotateInDownLeft:NC,rotateInDownRight:DC,rotateInUpLeft:MC,rotateInUpRight:jC,rotateOut:FC,rotateOutDownLeft:BC,rotateOutDownRight:VC,rotateOutUpLeft:HC,rotateOutUpRight:UC,rubberBand:zk,shake:Tk,shakeX:Ok,shakeY:Pk,slideInDown:WC,slideInLeft:KC,slideInRight:YC,slideInUp:XC,slideOutDown:GC,slideOutLeft:qC,slideOutRight:QC,slideOutUp:ZC,swing:Lk,tada:Ik,wobble:Rk,zoomIn:n5,zoomInDown:i5,zoomInLeft:o5,zoomInRight:s5,zoomInUp:a5,zoomOut:l5,zoomOutDown:c5,zoomOutLeft:u5,zoomOutRight:d5,zoomOutUp:f5},Symbol.toStringTag,{value:"Module"}));var p5=W`
  :host {
    display: contents;
  }
`,rt=class extends V{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=v0[this.easing])!=null?e:this.easing,n=(t=this.keyframes)!=null?t:h5[this.name],o=(await this.defaultSlot).assignedElements()[0];return!o||!n?!1:(this.destroyAnimation(),this.animation=o.animate(n,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return O` <slot @slotchange=${this.handleSlotChange}></slot> `}};rt.styles=[X,p5];u([Rx("slot")],rt.prototype,"defaultSlot",2);u([g()],rt.prototype,"name",2);u([g({type:Boolean,reflect:!0})],rt.prototype,"play",2);u([g({type:Number})],rt.prototype,"delay",2);u([g()],rt.prototype,"direction",2);u([g({type:Number})],rt.prototype,"duration",2);u([g()],rt.prototype,"easing",2);u([g({attribute:"end-delay",type:Number})],rt.prototype,"endDelay",2);u([g()],rt.prototype,"fill",2);u([g({type:Number})],rt.prototype,"iterations",2);u([g({attribute:"iteration-start",type:Number})],rt.prototype,"iterationStart",2);u([g({attribute:!1})],rt.prototype,"keyframes",2);u([g({attribute:"playback-rate",type:Number})],rt.prototype,"playbackRate",2);u([I(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],rt.prototype,"handleAnimationChange",1);u([I("play")],rt.prototype,"handlePlayChange",1);u([I("playbackRate")],rt.prototype,"handlePlaybackRateChange",1);rt.define("sl-animation");function Ea(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var y0={exports:{}},Dc={},b0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=Symbol.for("react.element"),m5=Symbol.for("react.portal"),g5=Symbol.for("react.fragment"),v5=Symbol.for("react.strict_mode"),y5=Symbol.for("react.profiler"),b5=Symbol.for("react.provider"),w5=Symbol.for("react.context"),x5=Symbol.for("react.forward_ref"),_5=Symbol.for("react.suspense"),k5=Symbol.for("react.memo"),C5=Symbol.for("react.lazy"),ym=Symbol.iterator;function S5(e){return e===null||typeof e!="object"?null:(e=ym&&e[ym]||e["@@iterator"],typeof e=="function"?e:null)}var w0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x0=Object.assign,_0={};function Uo(e,t,r){this.props=e,this.context=t,this.refs=_0,this.updater=r||w0}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Uo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function k0(){}k0.prototype=Uo.prototype;function ch(e,t,r){this.props=e,this.context=t,this.refs=_0,this.updater=r||w0}var uh=ch.prototype=new k0;uh.constructor=ch;x0(uh,Uo.prototype);uh.isPureReactComponent=!0;var bm=Array.isArray,C0=Object.prototype.hasOwnProperty,dh={current:null},S0={key:!0,ref:!0,__self:!0,__source:!0};function $0(e,t,r){var n,i={},o=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)C0.call(t,n)&&!S0.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Aa,type:e,key:o,ref:s,props:i,_owner:dh.current}}function $5(e,t){return{$$typeof:Aa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Aa}function E5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var wm=/\/+/g;function zu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?E5(""+e.key):t.toString(36)}function Tl(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Aa:case m5:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+zu(s,0):n,bm(i)?(r="",e!=null&&(r=e.replace(wm,"$&/")+"/"),Tl(i,t,r,"",function(c){return c})):i!=null&&(fh(i)&&(i=$5(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(wm,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",bm(e))for(var l=0;l<e.length;l++){o=e[l];var a=n+zu(o,l);s+=Tl(o,t,r,a,i)}else if(a=S5(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=n+zu(o,l++),s+=Tl(o,t,r,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Za(e,t,r){if(e==null)return e;var n=[],i=0;return Tl(e,n,"","",function(o){return t.call(r,o,i++)}),n}function A5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xt={current:null},Ol={transition:null},z5={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:dh};ie.Children={map:Za,forEach:function(e,t,r){Za(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Za(e,function(){t++}),t},toArray:function(e){return Za(e,function(t){return t})||[]},only:function(e){if(!fh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Uo;ie.Fragment=g5;ie.Profiler=y5;ie.PureComponent=ch;ie.StrictMode=v5;ie.Suspense=_5;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z5;ie.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=x0({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=dh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)C0.call(t,a)&&!S0.hasOwnProperty(a)&&(n[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)n.children=r;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:Aa,type:e.type,key:i,ref:o,props:n,_owner:s}};ie.createContext=function(e){return e={$$typeof:w5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:b5,_context:e},e.Consumer=e};ie.createElement=$0;ie.createFactory=function(e){var t=$0.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:x5,render:e}};ie.isValidElement=fh;ie.lazy=function(e){return{$$typeof:C5,_payload:{_status:-1,_result:e},_init:A5}};ie.memo=function(e,t){return{$$typeof:k5,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=Ol.transition;Ol.transition={};try{e()}finally{Ol.transition=t}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(e,t){return xt.current.useCallback(e,t)};ie.useContext=function(e){return xt.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return xt.current.useDeferredValue(e)};ie.useEffect=function(e,t){return xt.current.useEffect(e,t)};ie.useId=function(){return xt.current.useId()};ie.useImperativeHandle=function(e,t,r){return xt.current.useImperativeHandle(e,t,r)};ie.useInsertionEffect=function(e,t){return xt.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return xt.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return xt.current.useMemo(e,t)};ie.useReducer=function(e,t,r){return xt.current.useReducer(e,t,r)};ie.useRef=function(e){return xt.current.useRef(e)};ie.useState=function(e){return xt.current.useState(e)};ie.useSyncExternalStore=function(e,t,r){return xt.current.useSyncExternalStore(e,t,r)};ie.useTransition=function(){return xt.current.useTransition()};ie.version="18.2.0";b0.exports=ie;var _=b0.exports;const ot=Ea(_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T5=_,O5=Symbol.for("react.element"),P5=Symbol.for("react.fragment"),L5=Object.prototype.hasOwnProperty,I5=T5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R5={key:!0,ref:!0,__self:!0,__source:!0};function E0(e,t,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)L5.call(t,n)&&!R5.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:O5,type:e,key:o,ref:s,props:i,_owner:I5.current}}Dc.Fragment=P5;Dc.jsx=E0;Dc.jsxs=E0;y0.exports=Dc;var k=y0.exports,Ed={},A0={exports:{}},Kt={},z0={exports:{}},T0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,K){var H=L.length;L.push(K);e:for(;0<H;){var ne=H-1>>>1,ue=L[ne];if(0<i(ue,K))L[ne]=K,L[H]=ue,H=ne;else break e}}function r(L){return L.length===0?null:L[0]}function n(L){if(L.length===0)return null;var K=L[0],H=L.pop();if(H!==K){L[0]=H;e:for(var ne=0,ue=L.length,Be=ue>>>1;ne<Be;){var Ee=2*(ne+1)-1,Qe=L[Ee],nt=Ee+1,kt=L[nt];if(0>i(Qe,H))nt<ue&&0>i(kt,Qe)?(L[ne]=kt,L[nt]=H,ne=nt):(L[ne]=Qe,L[Ee]=H,ne=Ee);else if(nt<ue&&0>i(kt,H))L[ne]=kt,L[nt]=H,ne=nt;else break e}}return K}function i(L,K){var H=L.sortIndex-K.sortIndex;return H!==0?H:L.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],f=1,d=null,h=3,p=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var K=r(c);K!==null;){if(K.callback===null)n(c);else if(K.startTime<=L)n(c),K.sortIndex=K.expirationTime,t(a,K);else break;K=r(c)}}function w(L){if(x=!1,y(L),!v)if(r(a)!==null)v=!0,J(C);else{var K=r(c);K!==null&&oe(w,K.startTime-L)}}function C(L,K){v=!1,x&&(x=!1,b(A),A=-1),p=!0;var H=h;try{for(y(K),d=r(a);d!==null&&(!(d.expirationTime>K)||L&&!N());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,h=d.priorityLevel;var ue=ne(d.expirationTime<=K);K=e.unstable_now(),typeof ue=="function"?d.callback=ue:d===r(a)&&n(a),y(K)}else n(a);d=r(a)}if(d!==null)var Be=!0;else{var Ee=r(c);Ee!==null&&oe(w,Ee.startTime-K),Be=!1}return Be}finally{d=null,h=H,p=!1}}var $=!1,E=null,A=-1,T=5,z=-1;function N(){return!(e.unstable_now()-z<T)}function D(){if(E!==null){var L=e.unstable_now();z=L;var K=!0;try{K=E(!0,L)}finally{K?Y():($=!1,E=null)}}else $=!1}var Y;if(typeof m=="function")Y=function(){m(D)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,re=Z.port2;Z.port1.onmessage=D,Y=function(){re.postMessage(null)}}else Y=function(){S(D,0)};function J(L){E=L,$||($=!0,Y())}function oe(L,K){A=S(function(){L(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||p||(v=!0,J(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(a)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var H=h;h=K;try{return L()}finally{h=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var H=h;h=L;try{return K()}finally{h=H}},e.unstable_scheduleCallback=function(L,K,H){var ne=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ne+H:ne):H=ne,L){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=H+ue,L={id:f++,callback:K,priorityLevel:L,startTime:H,expirationTime:ue,sortIndex:-1},H>ne?(L.sortIndex=H,t(c,L),r(a)===null&&L===r(c)&&(x?(b(A),A=-1):x=!0,oe(w,H-ne))):(L.sortIndex=ue,t(a,L),v||p||(v=!0,J(C))),L},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(L){var K=h;return function(){var H=h;h=K;try{return L.apply(this,arguments)}finally{h=H}}}})(T0);z0.exports=T0;var N5=z0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=_,jt=N5;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P0=new Set,Ks={};function ji(e,t){So(e,t),So(e+"Capture",t)}function So(e,t){for(Ks[e]=t,e=0;e<t.length;e++)P0.add(t[e])}var Gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ad=Object.prototype.hasOwnProperty,D5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xm={},_m={};function M5(e){return Ad.call(_m,e)?!0:Ad.call(xm,e)?!1:D5.test(e)?_m[e]=!0:(xm[e]=!0,!1)}function j5(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F5(e,t,r,n){if(t===null||typeof t>"u"||j5(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _t(e,t,r,n,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){lt[e]=new _t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];lt[t]=new _t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){lt[e]=new _t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){lt[e]=new _t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){lt[e]=new _t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){lt[e]=new _t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){lt[e]=new _t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){lt[e]=new _t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){lt[e]=new _t(e,5,!1,e.toLowerCase(),null,!1,!1)});var hh=/[\-:]([a-z])/g;function ph(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hh,ph);lt[t]=new _t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hh,ph);lt[t]=new _t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hh,ph);lt[t]=new _t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){lt[e]=new _t(e,1,!1,e.toLowerCase(),null,!1,!1)});lt.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){lt[e]=new _t(e,1,!1,e.toLowerCase(),null,!0,!0)});function mh(e,t,r,n){var i=lt.hasOwnProperty(t)?lt[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F5(t,r,i,n)&&(r=null),n||i===null?M5(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ln=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Zi=Symbol.for("react.fragment"),gh=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),Od=Symbol.for("react.suspense_list"),yh=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),R0=Symbol.for("react.offscreen"),km=Symbol.iterator;function is(e){return e===null||typeof e!="object"?null:(e=km&&e[km]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,Tu;function ms(e){if(Tu===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Tu=t&&t[1]||""}return`
`+Tu+e}var Ou=!1;function Pu(e,t){if(!e||Ou)return"";Ou=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Ou=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ms(e):""}function B5(e){switch(e.tag){case 5:return ms(e.type);case 16:return ms("Lazy");case 13:return ms("Suspense");case 19:return ms("SuspenseList");case 0:case 2:case 15:return e=Pu(e.type,!1),e;case 11:return e=Pu(e.type.render,!1),e;case 1:return e=Pu(e.type,!0),e;default:return""}}function Pd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zi:return"Fragment";case Qi:return"Portal";case zd:return"Profiler";case gh:return"StrictMode";case Td:return"Suspense";case Od:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case I0:return(e.displayName||"Context")+".Consumer";case L0:return(e._context.displayName||"Context")+".Provider";case vh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yh:return t=e.displayName||null,t!==null?t:Pd(e.type)||"Memo";case wn:t=e._payload,e=e._init;try{return Pd(e(t))}catch{}}return null}function V5(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pd(t);case 8:return t===gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function N0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H5(e){var t=N0(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function el(e){e._valueTracker||(e._valueTracker=H5(e))}function D0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=N0(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Zl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ld(e,t){var r=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Cm(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Wn(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function M0(e,t){t=t.checked,t!=null&&mh(e,"checked",t,!1)}function Id(e,t){M0(e,t);var r=Wn(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rd(e,t.type,r):t.hasOwnProperty("defaultValue")&&Rd(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sm(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Rd(e,t,r){(t!=="number"||Zl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var gs=Array.isArray;function mo(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Wn(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $m(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(P(92));if(gs(r)){if(1<r.length)throw Error(P(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Wn(r)}}function j0(e,t){var r=Wn(t.value),n=Wn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Em(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function F0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?F0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tl,B0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=tl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ys(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U5=["Webkit","ms","Moz","O"];Object.keys(zs).forEach(function(e){U5.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zs[t]=zs[e]})});function V0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||zs.hasOwnProperty(e)&&zs[e]?(""+t).trim():t+"px"}function H0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=V0(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var W5=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Md(e,t){if(t){if(W5[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function jd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fd=null;function bh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bd=null,go=null,vo=null;function Am(e){if(e=Oa(e)){if(typeof Bd!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Vc(t),Bd(e.stateNode,e.type,t))}}function U0(e){go?vo?vo.push(e):vo=[e]:go=e}function W0(){if(go){var e=go,t=vo;if(vo=go=null,Am(e),t)for(e=0;e<t.length;e++)Am(t[e])}}function K0(e,t){return e(t)}function Y0(){}var Lu=!1;function X0(e,t,r){if(Lu)return e(t,r);Lu=!0;try{return K0(e,t,r)}finally{Lu=!1,(go!==null||vo!==null)&&(Y0(),W0())}}function Xs(e,t){var r=e.stateNode;if(r===null)return null;var n=Vc(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(P(231,t,typeof r));return r}var Vd=!1;if(Gr)try{var os={};Object.defineProperty(os,"passive",{get:function(){Vd=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{Vd=!1}function K5(e,t,r,n,i,o,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(f){this.onError(f)}}var Ts=!1,Jl=null,ec=!1,Hd=null,Y5={onError:function(e){Ts=!0,Jl=e}};function X5(e,t,r,n,i,o,s,l,a){Ts=!1,Jl=null,K5.apply(Y5,arguments)}function G5(e,t,r,n,i,o,s,l,a){if(X5.apply(this,arguments),Ts){if(Ts){var c=Jl;Ts=!1,Jl=null}else throw Error(P(198));ec||(ec=!0,Hd=c)}}function Fi(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function G0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zm(e){if(Fi(e)!==e)throw Error(P(188))}function q5(e){var t=e.alternate;if(!t){if(t=Fi(e),t===null)throw Error(P(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return zm(i),e;if(o===n)return zm(i),t;o=o.sibling}throw Error(P(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s)throw Error(P(189))}}if(r.alternate!==n)throw Error(P(190))}if(r.tag!==3)throw Error(P(188));return r.stateNode.current===r?e:t}function q0(e){return e=q5(e),e!==null?Q0(e):null}function Q0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Q0(e);if(t!==null)return t;e=e.sibling}return null}var Z0=jt.unstable_scheduleCallback,Tm=jt.unstable_cancelCallback,Q5=jt.unstable_shouldYield,Z5=jt.unstable_requestPaint,Me=jt.unstable_now,J5=jt.unstable_getCurrentPriorityLevel,wh=jt.unstable_ImmediatePriority,J0=jt.unstable_UserBlockingPriority,tc=jt.unstable_NormalPriority,eS=jt.unstable_LowPriority,ey=jt.unstable_IdlePriority,Mc=null,$r=null;function tS(e){if($r&&typeof $r.onCommitFiberRoot=="function")try{$r.onCommitFiberRoot(Mc,e,void 0,(e.current.flags&128)===128)}catch{}}var hr=Math.clz32?Math.clz32:iS,rS=Math.log,nS=Math.LN2;function iS(e){return e>>>=0,e===0?32:31-(rS(e)/nS|0)|0}var rl=64,nl=4194304;function vs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rc(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=vs(l):(o&=s,o!==0&&(n=vs(o)))}else s=r&~i,s!==0?n=vs(s):o!==0&&(n=vs(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-hr(t),i=1<<r,n|=e[r],t&=~i;return n}function oS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sS(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-hr(o),l=1<<s,a=i[s];a===-1?(!(l&r)||l&n)&&(i[s]=oS(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Ud(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ty(){var e=rl;return rl<<=1,!(rl&4194240)&&(rl=64),e}function Iu(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function za(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hr(t),e[t]=r}function aS(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-hr(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function xh(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-hr(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ge=0;function ry(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ny,_h,iy,oy,sy,Wd=!1,il=[],Ln=null,In=null,Rn=null,Gs=new Map,qs=new Map,Cn=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Om(e,t){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Gs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(t.pointerId)}}function ss(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Oa(t),t!==null&&_h(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cS(e,t,r,n,i){switch(t){case"focusin":return Ln=ss(Ln,e,t,r,n,i),!0;case"dragenter":return In=ss(In,e,t,r,n,i),!0;case"mouseover":return Rn=ss(Rn,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Gs.set(o,ss(Gs.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,qs.set(o,ss(qs.get(o)||null,e,t,r,n,i)),!0}return!1}function ay(e){var t=hi(e.target);if(t!==null){var r=Fi(t);if(r!==null){if(t=r.tag,t===13){if(t=G0(r),t!==null){e.blockedOn=t,sy(e.priority,function(){iy(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Kd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Fd=n,r.target.dispatchEvent(n),Fd=null}else return t=Oa(r),t!==null&&_h(t),e.blockedOn=r,!1;t.shift()}return!0}function Pm(e,t,r){Pl(e)&&r.delete(t)}function uS(){Wd=!1,Ln!==null&&Pl(Ln)&&(Ln=null),In!==null&&Pl(In)&&(In=null),Rn!==null&&Pl(Rn)&&(Rn=null),Gs.forEach(Pm),qs.forEach(Pm)}function as(e,t){e.blockedOn===t&&(e.blockedOn=null,Wd||(Wd=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,uS)))}function Qs(e){function t(i){return as(i,e)}if(0<il.length){as(il[0],e);for(var r=1;r<il.length;r++){var n=il[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Ln!==null&&as(Ln,e),In!==null&&as(In,e),Rn!==null&&as(Rn,e),Gs.forEach(t),qs.forEach(t),r=0;r<Cn.length;r++)n=Cn[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Cn.length&&(r=Cn[0],r.blockedOn===null);)ay(r),r.blockedOn===null&&Cn.shift()}var yo=ln.ReactCurrentBatchConfig,nc=!0;function dS(e,t,r,n){var i=ge,o=yo.transition;yo.transition=null;try{ge=1,kh(e,t,r,n)}finally{ge=i,yo.transition=o}}function fS(e,t,r,n){var i=ge,o=yo.transition;yo.transition=null;try{ge=4,kh(e,t,r,n)}finally{ge=i,yo.transition=o}}function kh(e,t,r,n){if(nc){var i=Kd(e,t,r,n);if(i===null)Uu(e,t,n,ic,r),Om(e,n);else if(cS(i,e,t,r,n))n.stopPropagation();else if(Om(e,n),t&4&&-1<lS.indexOf(e)){for(;i!==null;){var o=Oa(i);if(o!==null&&ny(o),o=Kd(e,t,r,n),o===null&&Uu(e,t,n,ic,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Uu(e,t,n,null,r)}}var ic=null;function Kd(e,t,r,n){if(ic=null,e=bh(n),e=hi(e),e!==null)if(t=Fi(e),t===null)e=null;else if(r=t.tag,r===13){if(e=G0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ic=e,null}function ly(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J5()){case wh:return 1;case J0:return 4;case tc:case eS:return 16;case ey:return 536870912;default:return 16}default:return 16}}var En=null,Ch=null,Ll=null;function cy(){if(Ll)return Ll;var e,t=Ch,r=t.length,n,i="value"in En?En.value:En.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[o-n];n++);return Ll=i.slice(e,1<n?1-n:void 0)}function Il(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function Lm(){return!1}function Yt(e){function t(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ol:Lm,this.isPropagationStopped=Lm,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),t}var Wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sh=Yt(Wo),Ta=Te({},Wo,{view:0,detail:0}),hS=Yt(Ta),Ru,Nu,ls,jc=Te({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$h,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ls&&(ls&&e.type==="mousemove"?(Ru=e.screenX-ls.screenX,Nu=e.screenY-ls.screenY):Nu=Ru=0,ls=e),Ru)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),Im=Yt(jc),pS=Te({},jc,{dataTransfer:0}),mS=Yt(pS),gS=Te({},Ta,{relatedTarget:0}),Du=Yt(gS),vS=Te({},Wo,{animationName:0,elapsedTime:0,pseudoElement:0}),yS=Yt(vS),bS=Te({},Wo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wS=Yt(bS),xS=Te({},Wo,{data:0}),Rm=Yt(xS),_S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=CS[e])?!!t[e]:!1}function $h(){return SS}var $S=Te({},Ta,{key:function(e){if(e.key){var t=_S[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$h,charCode:function(e){return e.type==="keypress"?Il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ES=Yt($S),AS=Te({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=Yt(AS),zS=Te({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$h}),TS=Yt(zS),OS=Te({},Wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),PS=Yt(OS),LS=Te({},jc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),IS=Yt(LS),RS=[9,13,27,32],Eh=Gr&&"CompositionEvent"in window,Os=null;Gr&&"documentMode"in document&&(Os=document.documentMode);var NS=Gr&&"TextEvent"in window&&!Os,uy=Gr&&(!Eh||Os&&8<Os&&11>=Os),Dm=" ",Mm=!1;function dy(e,t){switch(e){case"keyup":return RS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ji=!1;function DS(e,t){switch(e){case"compositionend":return fy(t);case"keypress":return t.which!==32?null:(Mm=!0,Dm);case"textInput":return e=t.data,e===Dm&&Mm?null:e;default:return null}}function MS(e,t){if(Ji)return e==="compositionend"||!Eh&&dy(e,t)?(e=cy(),Ll=Ch=En=null,Ji=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uy&&t.locale!=="ko"?null:t.data;default:return null}}var jS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jS[e.type]:t==="textarea"}function hy(e,t,r,n){U0(n),t=oc(t,"onChange"),0<t.length&&(r=new Sh("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ps=null,Zs=null;function FS(e){Cy(e,0)}function Fc(e){var t=ro(e);if(D0(t))return e}function BS(e,t){if(e==="change")return t}var py=!1;if(Gr){var Mu;if(Gr){var ju="oninput"in document;if(!ju){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),ju=typeof Fm.oninput=="function"}Mu=ju}else Mu=!1;py=Mu&&(!document.documentMode||9<document.documentMode)}function Bm(){Ps&&(Ps.detachEvent("onpropertychange",my),Zs=Ps=null)}function my(e){if(e.propertyName==="value"&&Fc(Zs)){var t=[];hy(t,Zs,e,bh(e)),X0(FS,t)}}function VS(e,t,r){e==="focusin"?(Bm(),Ps=t,Zs=r,Ps.attachEvent("onpropertychange",my)):e==="focusout"&&Bm()}function HS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fc(Zs)}function US(e,t){if(e==="click")return Fc(t)}function WS(e,t){if(e==="input"||e==="change")return Fc(t)}function KS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mr=typeof Object.is=="function"?Object.is:KS;function Js(e,t){if(mr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Ad.call(t,i)||!mr(e[i],t[i]))return!1}return!0}function Vm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hm(e,t){var r=Vm(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Vm(r)}}function gy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vy(){for(var e=window,t=Zl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Zl(e.document)}return t}function Ah(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function YS(e){var t=vy(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&gy(r.ownerDocument.documentElement,r)){if(n!==null&&Ah(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=Hm(r,o);var s=Hm(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var XS=Gr&&"documentMode"in document&&11>=document.documentMode,eo=null,Yd=null,Ls=null,Xd=!1;function Um(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xd||eo==null||eo!==Zl(n)||(n=eo,"selectionStart"in n&&Ah(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ls&&Js(Ls,n)||(Ls=n,n=oc(Yd,"onSelect"),0<n.length&&(t=new Sh("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=eo)))}function sl(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var to={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},Fu={},yy={};Gr&&(yy=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Bc(e){if(Fu[e])return Fu[e];if(!to[e])return e;var t=to[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in yy)return Fu[e]=t[r];return e}var by=Bc("animationend"),wy=Bc("animationiteration"),xy=Bc("animationstart"),_y=Bc("transitionend"),ky=new Map,Wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,t){ky.set(e,t),ji(t,[e])}for(var Bu=0;Bu<Wm.length;Bu++){var Vu=Wm[Bu],GS=Vu.toLowerCase(),qS=Vu[0].toUpperCase()+Vu.slice(1);Jn(GS,"on"+qS)}Jn(by,"onAnimationEnd");Jn(wy,"onAnimationIteration");Jn(xy,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(_y,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));function Km(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,G5(n,t,void 0,e),e.currentTarget=null}function Cy(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Km(i,l,c),o=a}else for(s=0;s<n.length;s++){if(l=n[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Km(i,l,c),o=a}}}if(ec)throw e=Hd,ec=!1,Hd=null,e}function we(e,t){var r=t[Jd];r===void 0&&(r=t[Jd]=new Set);var n=e+"__bubble";r.has(n)||(Sy(t,e,2,!1),r.add(n))}function Hu(e,t,r){var n=0;t&&(n|=4),Sy(r,e,n,t)}var al="_reactListening"+Math.random().toString(36).slice(2);function ea(e){if(!e[al]){e[al]=!0,P0.forEach(function(r){r!=="selectionchange"&&(QS.has(r)||Hu(r,!1,e),Hu(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[al]||(t[al]=!0,Hu("selectionchange",!1,t))}}function Sy(e,t,r,n){switch(ly(t)){case 1:var i=dS;break;case 4:i=fS;break;default:i=kh}r=i.bind(null,t,r,e),i=void 0,!Vd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Uu(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=hi(l),s===null)return;if(a=s.tag,a===5||a===6){n=o=s;continue e}l=l.parentNode}}n=n.return}X0(function(){var c=o,f=bh(r),d=[];e:{var h=ky.get(e);if(h!==void 0){var p=Sh,v=e;switch(e){case"keypress":if(Il(r)===0)break e;case"keydown":case"keyup":p=ES;break;case"focusin":v="focus",p=Du;break;case"focusout":v="blur",p=Du;break;case"beforeblur":case"afterblur":p=Du;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=mS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=TS;break;case by:case wy:case xy:p=yS;break;case _y:p=PS;break;case"scroll":p=hS;break;case"wheel":p=IS;break;case"copy":case"cut":case"paste":p=wS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Nm}var x=(t&4)!==0,S=!x&&e==="scroll",b=x?h!==null?h+"Capture":null:h;x=[];for(var m=c,y;m!==null;){y=m;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,b!==null&&(w=Xs(m,b),w!=null&&x.push(ta(m,w,y)))),S)break;m=m.return}0<x.length&&(h=new p(h,v,null,r,f),d.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&r!==Fd&&(v=r.relatedTarget||r.fromElement)&&(hi(v)||v[qr]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=r.relatedTarget||r.toElement,p=c,v=v?hi(v):null,v!==null&&(S=Fi(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Im,w="onMouseLeave",b="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Nm,w="onPointerLeave",b="onPointerEnter",m="pointer"),S=p==null?h:ro(p),y=v==null?h:ro(v),h=new x(w,m+"leave",p,r,f),h.target=S,h.relatedTarget=y,w=null,hi(f)===c&&(x=new x(b,m+"enter",v,r,f),x.target=y,x.relatedTarget=S,w=x),S=w,p&&v)t:{for(x=p,b=v,m=0,y=x;y;y=Wi(y))m++;for(y=0,w=b;w;w=Wi(w))y++;for(;0<m-y;)x=Wi(x),m--;for(;0<y-m;)b=Wi(b),y--;for(;m--;){if(x===b||b!==null&&x===b.alternate)break t;x=Wi(x),b=Wi(b)}x=null}else x=null;p!==null&&Ym(d,h,p,x,!1),v!==null&&S!==null&&Ym(d,S,v,x,!0)}}e:{if(h=c?ro(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=BS;else if(jm(h))if(py)C=WS;else{C=HS;var $=VS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=US);if(C&&(C=C(e,c))){hy(d,C,r,f);break e}$&&$(e,h,c),e==="focusout"&&($=h._wrapperState)&&$.controlled&&h.type==="number"&&Rd(h,"number",h.value)}switch($=c?ro(c):window,e){case"focusin":(jm($)||$.contentEditable==="true")&&(eo=$,Yd=c,Ls=null);break;case"focusout":Ls=Yd=eo=null;break;case"mousedown":Xd=!0;break;case"contextmenu":case"mouseup":case"dragend":Xd=!1,Um(d,r,f);break;case"selectionchange":if(XS)break;case"keydown":case"keyup":Um(d,r,f)}var E;if(Eh)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ji?dy(e,r)&&(A="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(A="onCompositionStart");A&&(uy&&r.locale!=="ko"&&(Ji||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ji&&(E=cy()):(En=f,Ch="value"in En?En.value:En.textContent,Ji=!0)),$=oc(c,A),0<$.length&&(A=new Rm(A,e,null,r,f),d.push({event:A,listeners:$}),E?A.data=E:(E=fy(r),E!==null&&(A.data=E)))),(E=NS?DS(e,r):MS(e,r))&&(c=oc(c,"onBeforeInput"),0<c.length&&(f=new Rm("onBeforeInput","beforeinput",null,r,f),d.push({event:f,listeners:c}),f.data=E))}Cy(d,t)})}function ta(e,t,r){return{instance:e,listener:t,currentTarget:r}}function oc(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Xs(e,r),o!=null&&n.unshift(ta(e,o,i)),o=Xs(e,t),o!=null&&n.push(ta(e,o,i))),e=e.return}return n}function Wi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ym(e,t,r,n,i){for(var o=t._reactName,s=[];r!==null&&r!==n;){var l=r,a=l.alternate,c=l.stateNode;if(a!==null&&a===n)break;l.tag===5&&c!==null&&(l=c,i?(a=Xs(r,o),a!=null&&s.unshift(ta(r,a,l))):i||(a=Xs(r,o),a!=null&&s.push(ta(r,a,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var ZS=/\r\n?/g,JS=/\u0000|\uFFFD/g;function Xm(e){return(typeof e=="string"?e:""+e).replace(ZS,`
`).replace(JS,"")}function ll(e,t,r){if(t=Xm(t),Xm(e)!==t&&r)throw Error(P(425))}function sc(){}var Gd=null,qd=null;function Qd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,e3=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,t3=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(e){return Gm.resolve(null).then(e).catch(r3)}:Zd;function r3(e){setTimeout(function(){throw e})}function Wu(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Qs(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Qs(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),Cr="__reactFiber$"+Ko,ra="__reactProps$"+Ko,qr="__reactContainer$"+Ko,Jd="__reactEvents$"+Ko,n3="__reactListeners$"+Ko,i3="__reactHandles$"+Ko;function hi(e){var t=e[Cr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[qr]||r[Cr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=qm(e);e!==null;){if(r=e[Cr])return r;e=qm(e)}return t}e=r,r=e.parentNode}return null}function Oa(e){return e=e[Cr]||e[qr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ro(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Vc(e){return e[ra]||null}var ef=[],no=-1;function ei(e){return{current:e}}function _e(e){0>no||(e.current=ef[no],ef[no]=null,no--)}function be(e,t){no++,ef[no]=e.current,e.current=t}var Kn={},pt=ei(Kn),Et=ei(!1),$i=Kn;function $o(e,t){var r=e.type.contextTypes;if(!r)return Kn;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function At(e){return e=e.childContextTypes,e!=null}function ac(){_e(Et),_e(pt)}function Qm(e,t,r){if(pt.current!==Kn)throw Error(P(168));be(pt,t),be(Et,r)}function $y(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(P(108,V5(e)||"Unknown",i));return Te({},r,n)}function lc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kn,$i=pt.current,be(pt,e),be(Et,Et.current),!0}function Zm(e,t,r){var n=e.stateNode;if(!n)throw Error(P(169));r?(e=$y(e,t,$i),n.__reactInternalMemoizedMergedChildContext=e,_e(Et),_e(pt),be(pt,e)):_e(Et),be(Et,r)}var Hr=null,Hc=!1,Ku=!1;function Ey(e){Hr===null?Hr=[e]:Hr.push(e)}function o3(e){Hc=!0,Ey(e)}function ti(){if(!Ku&&Hr!==null){Ku=!0;var e=0,t=ge;try{var r=Hr;for(ge=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Hr=null,Hc=!1}catch(i){throw Hr!==null&&(Hr=Hr.slice(e+1)),Z0(wh,ti),i}finally{ge=t,Ku=!1}}return null}var io=[],oo=0,cc=null,uc=0,Gt=[],qt=0,Ei=null,Wr=1,Kr="";function si(e,t){io[oo++]=uc,io[oo++]=cc,cc=e,uc=t}function Ay(e,t,r){Gt[qt++]=Wr,Gt[qt++]=Kr,Gt[qt++]=Ei,Ei=e;var n=Wr;e=Kr;var i=32-hr(n)-1;n&=~(1<<i),r+=1;var o=32-hr(t)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Wr=1<<32-hr(t)+i|r<<i|n,Kr=o+e}else Wr=1<<o|r<<i|n,Kr=e}function zh(e){e.return!==null&&(si(e,1),Ay(e,1,0))}function Th(e){for(;e===cc;)cc=io[--oo],io[oo]=null,uc=io[--oo],io[oo]=null;for(;e===Ei;)Ei=Gt[--qt],Gt[qt]=null,Kr=Gt[--qt],Gt[qt]=null,Wr=Gt[--qt],Gt[qt]=null}var Mt=null,Nt=null,Se=!1,dr=null;function zy(e,t){var r=Zt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Jm(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Mt=e,Nt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Mt=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ei!==null?{id:Wr,overflow:Kr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Zt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Mt=e,Nt=null,!0):!1;default:return!1}}function tf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rf(e){if(Se){var t=Nt;if(t){var r=t;if(!Jm(e,t)){if(tf(e))throw Error(P(418));t=Nn(r.nextSibling);var n=Mt;t&&Jm(e,t)?zy(n,r):(e.flags=e.flags&-4097|2,Se=!1,Mt=e)}}else{if(tf(e))throw Error(P(418));e.flags=e.flags&-4097|2,Se=!1,Mt=e}}}function eg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Mt=e}function cl(e){if(e!==Mt)return!1;if(!Se)return eg(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qd(e.type,e.memoizedProps)),t&&(t=Nt)){if(tf(e))throw Ty(),Error(P(418));for(;t;)zy(e,t),t=Nn(t.nextSibling)}if(eg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Nt=Nn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=Mt?Nn(e.stateNode.nextSibling):null;return!0}function Ty(){for(var e=Nt;e;)e=Nn(e.nextSibling)}function Eo(){Nt=Mt=null,Se=!1}function Oh(e){dr===null?dr=[e]:dr.push(e)}var s3=ln.ReactCurrentBatchConfig;function cr(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var dc=ei(null),fc=null,so=null,Ph=null;function Lh(){Ph=so=fc=null}function Ih(e){var t=dc.current;_e(dc),e._currentValue=t}function nf(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function bo(e,t){fc=e,Ph=so=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function tr(e){var t=e._currentValue;if(Ph!==e)if(e={context:e,memoizedValue:t,next:null},so===null){if(fc===null)throw Error(P(308));so=e,fc.dependencies={lanes:0,firstContext:e}}else so=so.next=e;return t}var pi=null;function Rh(e){pi===null?pi=[e]:pi.push(e)}function Oy(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Rh(t)):(r.next=i.next,i.next=r),t.interleaved=r,Qr(e,n)}function Qr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var xn=!1;function Nh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Py(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ce&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Qr(e,r)}return i=n.interleaved,i===null?(t.next=t,Rh(n)):(t.next=i.next,i.next=t),n.interleaved=t,Qr(e,r)}function Rl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,xh(e,r)}}function tg(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function hc(e,t,r,n){var i=e.updateQueue;xn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?o=c:s.next=c,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=a))}if(o!==null){var d=i.baseState;s=0,f=c=a=null,l=o;do{var h=l.lane,p=l.eventTime;if((n&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(h=t,p=r,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=Te({},d,h);break e;case 2:xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=p,a=d):f=f.next=p,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);zi|=s,e.lanes=s,e.memoizedState=d}}function rg(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(P(191,i));i.call(n)}}}var Ly=new O0.Component().refs;function of(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Te({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Uc={isMounted:function(e){return(e=e._reactInternals)?Fi(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=yt(),i=jn(e),o=Yr(n,i);o.payload=t,r!=null&&(o.callback=r),t=Dn(e,o,i),t!==null&&(pr(t,e,i,n),Rl(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=yt(),i=jn(e),o=Yr(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Dn(e,o,i),t!==null&&(pr(t,e,i,n),Rl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=yt(),n=jn(e),i=Yr(r,n);i.tag=2,t!=null&&(i.callback=t),t=Dn(e,i,n),t!==null&&(pr(t,e,n,r),Rl(t,e,n))}};function ng(e,t,r,n,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!Js(r,n)||!Js(i,o):!0}function Iy(e,t,r){var n=!1,i=Kn,o=t.contextType;return typeof o=="object"&&o!==null?o=tr(o):(i=At(t)?$i:pt.current,n=t.contextTypes,o=(n=n!=null)?$o(e,i):Kn),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uc,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ig(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Uc.enqueueReplaceState(t,t.state,null)}function sf(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=Ly,Nh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=tr(o):(o=At(t)?$i:pt.current,i.context=$o(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(of(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Uc.enqueueReplaceState(i,i.state,null),hc(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function cs(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(P(309));var n=r.stateNode}if(!n)throw Error(P(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===Ly&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!r._owner)throw Error(P(290,e))}return e}function ul(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function og(e){var t=e._init;return t(e._payload)}function Ry(e){function t(b,m){if(e){var y=b.deletions;y===null?(b.deletions=[m],b.flags|=16):y.push(m)}}function r(b,m){if(!e)return null;for(;m!==null;)t(b,m),m=m.sibling;return null}function n(b,m){for(b=new Map;m!==null;)m.key!==null?b.set(m.key,m):b.set(m.index,m),m=m.sibling;return b}function i(b,m){return b=Fn(b,m),b.index=0,b.sibling=null,b}function o(b,m,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<m?(b.flags|=2,m):y):(b.flags|=2,m)):(b.flags|=1048576,m)}function s(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,m,y,w){return m===null||m.tag!==6?(m=Ju(y,b.mode,w),m.return=b,m):(m=i(m,y),m.return=b,m)}function a(b,m,y,w){var C=y.type;return C===Zi?f(b,m,y.props.children,w,y.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wn&&og(C)===m.type)?(w=i(m,y.props),w.ref=cs(b,m,y),w.return=b,w):(w=Bl(y.type,y.key,y.props,null,b.mode,w),w.ref=cs(b,m,y),w.return=b,w)}function c(b,m,y,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=ed(y,b.mode,w),m.return=b,m):(m=i(m,y.children||[]),m.return=b,m)}function f(b,m,y,w,C){return m===null||m.tag!==7?(m=wi(y,b.mode,w,C),m.return=b,m):(m=i(m,y),m.return=b,m)}function d(b,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ju(""+m,b.mode,y),m.return=b,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ja:return y=Bl(m.type,m.key,m.props,null,b.mode,y),y.ref=cs(b,null,m),y.return=b,y;case Qi:return m=ed(m,b.mode,y),m.return=b,m;case wn:var w=m._init;return d(b,w(m._payload),y)}if(gs(m)||is(m))return m=wi(m,b.mode,y,null),m.return=b,m;ul(b,m)}return null}function h(b,m,y,w){var C=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:l(b,m,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:return y.key===C?a(b,m,y,w):null;case Qi:return y.key===C?c(b,m,y,w):null;case wn:return C=y._init,h(b,m,C(y._payload),w)}if(gs(y)||is(y))return C!==null?null:f(b,m,y,w,null);ul(b,y)}return null}function p(b,m,y,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return b=b.get(y)||null,l(m,b,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ja:return b=b.get(w.key===null?y:w.key)||null,a(m,b,w,C);case Qi:return b=b.get(w.key===null?y:w.key)||null,c(m,b,w,C);case wn:var $=w._init;return p(b,m,y,$(w._payload),C)}if(gs(w)||is(w))return b=b.get(y)||null,f(m,b,w,C,null);ul(m,w)}return null}function v(b,m,y,w){for(var C=null,$=null,E=m,A=m=0,T=null;E!==null&&A<y.length;A++){E.index>A?(T=E,E=null):T=E.sibling;var z=h(b,E,y[A],w);if(z===null){E===null&&(E=T);break}e&&E&&z.alternate===null&&t(b,E),m=o(z,m,A),$===null?C=z:$.sibling=z,$=z,E=T}if(A===y.length)return r(b,E),Se&&si(b,A),C;if(E===null){for(;A<y.length;A++)E=d(b,y[A],w),E!==null&&(m=o(E,m,A),$===null?C=E:$.sibling=E,$=E);return Se&&si(b,A),C}for(E=n(b,E);A<y.length;A++)T=p(E,b,A,y[A],w),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?A:T.key),m=o(T,m,A),$===null?C=T:$.sibling=T,$=T);return e&&E.forEach(function(N){return t(b,N)}),Se&&si(b,A),C}function x(b,m,y,w){var C=is(y);if(typeof C!="function")throw Error(P(150));if(y=C.call(y),y==null)throw Error(P(151));for(var $=C=null,E=m,A=m=0,T=null,z=y.next();E!==null&&!z.done;A++,z=y.next()){E.index>A?(T=E,E=null):T=E.sibling;var N=h(b,E,z.value,w);if(N===null){E===null&&(E=T);break}e&&E&&N.alternate===null&&t(b,E),m=o(N,m,A),$===null?C=N:$.sibling=N,$=N,E=T}if(z.done)return r(b,E),Se&&si(b,A),C;if(E===null){for(;!z.done;A++,z=y.next())z=d(b,z.value,w),z!==null&&(m=o(z,m,A),$===null?C=z:$.sibling=z,$=z);return Se&&si(b,A),C}for(E=n(b,E);!z.done;A++,z=y.next())z=p(E,b,A,z.value,w),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?A:z.key),m=o(z,m,A),$===null?C=z:$.sibling=z,$=z);return e&&E.forEach(function(D){return t(b,D)}),Se&&si(b,A),C}function S(b,m,y,w){if(typeof y=="object"&&y!==null&&y.type===Zi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:e:{for(var C=y.key,$=m;$!==null;){if($.key===C){if(C=y.type,C===Zi){if($.tag===7){r(b,$.sibling),m=i($,y.props.children),m.return=b,b=m;break e}}else if($.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wn&&og(C)===$.type){r(b,$.sibling),m=i($,y.props),m.ref=cs(b,$,y),m.return=b,b=m;break e}r(b,$);break}else t(b,$);$=$.sibling}y.type===Zi?(m=wi(y.props.children,b.mode,w,y.key),m.return=b,b=m):(w=Bl(y.type,y.key,y.props,null,b.mode,w),w.ref=cs(b,m,y),w.return=b,b=w)}return s(b);case Qi:e:{for($=y.key;m!==null;){if(m.key===$)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){r(b,m.sibling),m=i(m,y.children||[]),m.return=b,b=m;break e}else{r(b,m);break}else t(b,m);m=m.sibling}m=ed(y,b.mode,w),m.return=b,b=m}return s(b);case wn:return $=y._init,S(b,m,$(y._payload),w)}if(gs(y))return v(b,m,y,w);if(is(y))return x(b,m,y,w);ul(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(r(b,m.sibling),m=i(m,y),m.return=b,b=m):(r(b,m),m=Ju(y,b.mode,w),m.return=b,b=m),s(b)):r(b,m)}return S}var Ao=Ry(!0),Ny=Ry(!1),Pa={},Er=ei(Pa),na=ei(Pa),ia=ei(Pa);function mi(e){if(e===Pa)throw Error(P(174));return e}function Dh(e,t){switch(be(ia,t),be(na,e),be(Er,Pa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dd(t,e)}_e(Er),be(Er,t)}function zo(){_e(Er),_e(na),_e(ia)}function Dy(e){mi(ia.current);var t=mi(Er.current),r=Dd(t,e.type);t!==r&&(be(na,e),be(Er,r))}function Mh(e){na.current===e&&(_e(Er),_e(na))}var Ae=ei(0);function pc(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yu=[];function jh(){for(var e=0;e<Yu.length;e++)Yu[e]._workInProgressVersionPrimary=null;Yu.length=0}var Nl=ln.ReactCurrentDispatcher,Xu=ln.ReactCurrentBatchConfig,Ai=0,ze=null,Ke=null,Ze=null,mc=!1,Is=!1,oa=0,a3=0;function dt(){throw Error(P(321))}function Fh(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!mr(e[r],t[r]))return!1;return!0}function Bh(e,t,r,n,i,o){if(Ai=o,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nl.current=e===null||e.memoizedState===null?d3:f3,e=r(n,i),Is){o=0;do{if(Is=!1,oa=0,25<=o)throw Error(P(301));o+=1,Ze=Ke=null,t.updateQueue=null,Nl.current=h3,e=r(n,i)}while(Is)}if(Nl.current=gc,t=Ke!==null&&Ke.next!==null,Ai=0,Ze=Ke=ze=null,mc=!1,t)throw Error(P(300));return e}function Vh(){var e=oa!==0;return oa=0,e}function _r(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ze.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function rr(){if(Ke===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=Ze===null?ze.memoizedState:Ze.next;if(t!==null)Ze=t,Ke=e;else{if(e===null)throw Error(P(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?ze.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function sa(e,t){return typeof t=="function"?t(e):t}function Gu(e){var t=rr(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var n=Ke,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=s=null,a=null,c=o;do{var f=c.lane;if((Ai&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=d,s=n):a=a.next=d,ze.lanes|=f,zi|=f}c=c.next}while(c!==null&&c!==o);a===null?s=n:a.next=l,mr(n,t.memoizedState)||($t=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=a,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,ze.lanes|=o,zi|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function qu(e){var t=rr(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);mr(o,t.memoizedState)||($t=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function My(){}function jy(e,t){var r=ze,n=rr(),i=t(),o=!mr(n.memoizedState,i);if(o&&(n.memoizedState=i,$t=!0),n=n.queue,Hh(Vy.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||Ze!==null&&Ze.memoizedState.tag&1){if(r.flags|=2048,aa(9,By.bind(null,r,n,i,t),void 0,null),Je===null)throw Error(P(349));Ai&30||Fy(r,t,i)}return i}function Fy(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function By(e,t,r,n){t.value=r,t.getSnapshot=n,Hy(t)&&Uy(e)}function Vy(e,t,r){return r(function(){Hy(t)&&Uy(e)})}function Hy(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!mr(e,r)}catch{return!0}}function Uy(e){var t=Qr(e,1);t!==null&&pr(t,e,1,-1)}function sg(e){var t=_r();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t.queue=e,e=e.dispatch=u3.bind(null,ze,e),[t.memoizedState,e]}function aa(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Wy(){return rr().memoizedState}function Dl(e,t,r,n){var i=_r();ze.flags|=e,i.memoizedState=aa(1|t,r,void 0,n===void 0?null:n)}function Wc(e,t,r,n){var i=rr();n=n===void 0?null:n;var o=void 0;if(Ke!==null){var s=Ke.memoizedState;if(o=s.destroy,n!==null&&Fh(n,s.deps)){i.memoizedState=aa(t,r,o,n);return}}ze.flags|=e,i.memoizedState=aa(1|t,r,o,n)}function ag(e,t){return Dl(8390656,8,e,t)}function Hh(e,t){return Wc(2048,8,e,t)}function Ky(e,t){return Wc(4,2,e,t)}function Yy(e,t){return Wc(4,4,e,t)}function Xy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gy(e,t,r){return r=r!=null?r.concat([e]):null,Wc(4,4,Xy.bind(null,t,e),r)}function Uh(){}function qy(e,t){var r=rr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Fh(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Qy(e,t){var r=rr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Fh(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Zy(e,t,r){return Ai&21?(mr(r,t)||(r=ty(),ze.lanes|=r,zi|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$t=!0),e.memoizedState=r)}function l3(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var n=Xu.transition;Xu.transition={};try{e(!1),t()}finally{ge=r,Xu.transition=n}}function Jy(){return rr().memoizedState}function c3(e,t,r){var n=jn(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},eb(e))tb(t,r);else if(r=Oy(e,t,r,n),r!==null){var i=yt();pr(r,e,n,i),rb(r,t,n)}}function u3(e,t,r){var n=jn(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(eb(e))tb(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,mr(l,s)){var a=t.interleaved;a===null?(i.next=i,Rh(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}r=Oy(e,t,i,n),r!==null&&(i=yt(),pr(r,e,n,i),rb(r,t,n))}}function eb(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function tb(e,t){Is=mc=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function rb(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,xh(e,r)}}var gc={readContext:tr,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},d3={readContext:tr,useCallback:function(e,t){return _r().memoizedState=[e,t===void 0?null:t],e},useContext:tr,useEffect:ag,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Dl(4194308,4,Xy.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Dl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dl(4,2,e,t)},useMemo:function(e,t){var r=_r();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=_r();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=c3.bind(null,ze,e),[n.memoizedState,e]},useRef:function(e){var t=_r();return e={current:e},t.memoizedState=e},useState:sg,useDebugValue:Uh,useDeferredValue:function(e){return _r().memoizedState=e},useTransition:function(){var e=sg(!1),t=e[0];return e=l3.bind(null,e[1]),_r().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ze,i=_r();if(Se){if(r===void 0)throw Error(P(407));r=r()}else{if(r=t(),Je===null)throw Error(P(349));Ai&30||Fy(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,ag(Vy.bind(null,n,o,e),[e]),n.flags|=2048,aa(9,By.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=_r(),t=Je.identifierPrefix;if(Se){var r=Kr,n=Wr;r=(n&~(1<<32-hr(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=oa++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=a3++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},f3={readContext:tr,useCallback:qy,useContext:tr,useEffect:Hh,useImperativeHandle:Gy,useInsertionEffect:Ky,useLayoutEffect:Yy,useMemo:Qy,useReducer:Gu,useRef:Wy,useState:function(){return Gu(sa)},useDebugValue:Uh,useDeferredValue:function(e){var t=rr();return Zy(t,Ke.memoizedState,e)},useTransition:function(){var e=Gu(sa)[0],t=rr().memoizedState;return[e,t]},useMutableSource:My,useSyncExternalStore:jy,useId:Jy,unstable_isNewReconciler:!1},h3={readContext:tr,useCallback:qy,useContext:tr,useEffect:Hh,useImperativeHandle:Gy,useInsertionEffect:Ky,useLayoutEffect:Yy,useMemo:Qy,useReducer:qu,useRef:Wy,useState:function(){return qu(sa)},useDebugValue:Uh,useDeferredValue:function(e){var t=rr();return Ke===null?t.memoizedState=e:Zy(t,Ke.memoizedState,e)},useTransition:function(){var e=qu(sa)[0],t=rr().memoizedState;return[e,t]},useMutableSource:My,useSyncExternalStore:jy,useId:Jy,unstable_isNewReconciler:!1};function To(e,t){try{var r="",n=t;do r+=B5(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Qu(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function af(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var p3=typeof WeakMap=="function"?WeakMap:Map;function nb(e,t,r){r=Yr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){yc||(yc=!0,vf=n),af(e,t)},r}function ib(e,t,r){r=Yr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){af(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){af(e,t),typeof n!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function lg(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new p3;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=A3.bind(null,e,t,r),t.then(e,e))}function cg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ug(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Yr(-1,1),t.tag=2,Dn(r,t,1))),r.lanes|=1),e)}var m3=ln.ReactCurrentOwner,$t=!1;function vt(e,t,r,n){t.child=e===null?Ny(t,null,r,n):Ao(t,e.child,r,n)}function dg(e,t,r,n,i){r=r.render;var o=t.ref;return bo(t,i),n=Bh(e,t,r,n,o,i),r=Vh(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zr(e,t,i)):(Se&&r&&zh(t),t.flags|=1,vt(e,t,n,i),t.child)}function fg(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!Zh(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,ob(e,t,o,n,i)):(e=Bl(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:Js,r(s,n)&&e.ref===t.ref)return Zr(e,t,i)}return t.flags|=1,e=Fn(o,n),e.ref=t.ref,e.return=t,t.child=e}function ob(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Js(o,n)&&e.ref===t.ref)if($t=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&($t=!0);else return t.lanes=e.lanes,Zr(e,t,i)}return lf(e,t,r,n,i)}function sb(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(lo,Lt),Lt|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(lo,Lt),Lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,be(lo,Lt),Lt|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,be(lo,Lt),Lt|=n;return vt(e,t,i,r),t.child}function ab(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function lf(e,t,r,n,i){var o=At(r)?$i:pt.current;return o=$o(t,o),bo(t,i),r=Bh(e,t,r,n,o,i),n=Vh(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zr(e,t,i)):(Se&&n&&zh(t),t.flags|=1,vt(e,t,r,i),t.child)}function hg(e,t,r,n,i){if(At(r)){var o=!0;lc(t)}else o=!1;if(bo(t,i),t.stateNode===null)Ml(e,t),Iy(t,r,n),sf(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,c=r.contextType;typeof c=="object"&&c!==null?c=tr(c):(c=At(r)?$i:pt.current,c=$o(t,c));var f=r.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||a!==c)&&ig(t,s,n,c),xn=!1;var h=t.memoizedState;s.state=h,hc(t,n,s,i),a=t.memoizedState,l!==n||h!==a||Et.current||xn?(typeof f=="function"&&(of(t,r,f,n),a=t.memoizedState),(l=xn||ng(t,r,l,n,h,a,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=a),s.props=n,s.state=a,s.context=c,n=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Py(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:cr(t.type,l),s.props=c,d=t.pendingProps,h=s.context,a=r.contextType,typeof a=="object"&&a!==null?a=tr(a):(a=At(r)?$i:pt.current,a=$o(t,a));var p=r.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||h!==a)&&ig(t,s,n,a),xn=!1,h=t.memoizedState,s.state=h,hc(t,n,s,i);var v=t.memoizedState;l!==d||h!==v||Et.current||xn?(typeof p=="function"&&(of(t,r,p,n),v=t.memoizedState),(c=xn||ng(t,r,c,n,h,v,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),s.props=n,s.state=v,s.context=a,n=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return cf(e,t,r,n,o,i)}function cf(e,t,r,n,i,o){ab(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&Zm(t,r,!1),Zr(e,t,o);n=t.stateNode,m3.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=Ao(t,e.child,null,o),t.child=Ao(t,null,l,o)):vt(e,t,l,o),t.memoizedState=n.state,i&&Zm(t,r,!0),t.child}function lb(e){var t=e.stateNode;t.pendingContext?Qm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qm(e,t.context,!1),Dh(e,t.containerInfo)}function pg(e,t,r,n,i){return Eo(),Oh(i),t.flags|=256,vt(e,t,r,n),t.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function df(e){return{baseLanes:e,cachePool:null,transitions:null}}function cb(e,t,r){var n=t.pendingProps,i=Ae.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Ae,i&1),e===null)return rf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,o?(n=t.mode,o=t.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Xc(s,n,0,null),e=wi(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=df(r),t.memoizedState=uf,e):Wh(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return g3(e,t,s,n,l,i,r);if(o){o=n.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:n.children};return!(s&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=a,t.deletions=null):(n=Fn(i,a),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Fn(l,o):(o=wi(o,s,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,s=e.child.memoizedState,s=s===null?df(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,t.memoizedState=uf,n}return o=e.child,e=o.sibling,n=Fn(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Wh(e,t){return t=Xc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dl(e,t,r,n){return n!==null&&Oh(n),Ao(t,e.child,null,r),e=Wh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function g3(e,t,r,n,i,o,s){if(r)return t.flags&256?(t.flags&=-257,n=Qu(Error(P(422))),dl(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Xc({mode:"visible",children:n.children},i,0,null),o=wi(o,i,s,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Ao(t,e.child,null,s),t.child.memoizedState=df(s),t.memoizedState=uf,o);if(!(t.mode&1))return dl(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(P(419)),n=Qu(o,n,void 0),dl(e,t,s,n)}if(l=(s&e.childLanes)!==0,$t||l){if(n=Je,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Qr(e,i),pr(n,e,i,-1))}return Qh(),n=Qu(Error(P(421))),dl(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=z3.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Nt=Nn(i.nextSibling),Mt=t,Se=!0,dr=null,e!==null&&(Gt[qt++]=Wr,Gt[qt++]=Kr,Gt[qt++]=Ei,Wr=e.id,Kr=e.overflow,Ei=t),t=Wh(t,n.children),t.flags|=4096,t)}function mg(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),nf(e.return,t,r)}function Zu(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function ub(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(vt(e,t,n.children,r),n=Ae.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mg(e,r,t);else if(e.tag===19)mg(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(be(Ae,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&pc(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Zu(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pc(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Zu(t,!0,r,null,o);break;case"together":Zu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ml(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),zi|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,r=Fn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Fn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function v3(e,t,r){switch(t.tag){case 3:lb(t),Eo();break;case 5:Dy(t);break;case 1:At(t.type)&&lc(t);break;case 4:Dh(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;be(dc,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(be(Ae,Ae.current&1),t.flags|=128,null):r&t.child.childLanes?cb(e,t,r):(be(Ae,Ae.current&1),e=Zr(e,t,r),e!==null?e.sibling:null);be(Ae,Ae.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return ub(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Ae,Ae.current),n)break;return null;case 22:case 23:return t.lanes=0,sb(e,t,r)}return Zr(e,t,r)}var db,ff,fb,hb;db=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ff=function(){};fb=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,mi(Er.current);var o=null;switch(r){case"input":i=Ld(e,i),n=Ld(e,n),o=[];break;case"select":i=Te({},i,{value:void 0}),n=Te({},n,{value:void 0}),o=[];break;case"textarea":i=Nd(e,i),n=Nd(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=sc)}Md(r,n);var s;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ks.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var a=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(r||(r={}),r[s]=a[s])}else r||(o||(o=[]),o.push(c,r)),r=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&we("scroll",e),o||l===a||(o=[])):(o=o||[]).push(c,a))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};hb=function(e,t,r,n){r!==n&&(t.flags|=4)};function us(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function y3(e,t,r){var n=t.pendingProps;switch(Th(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(t),null;case 1:return At(t.type)&&ac(),ft(t),null;case 3:return n=t.stateNode,zo(),_e(Et),_e(pt),jh(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(cl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dr!==null&&(wf(dr),dr=null))),ff(e,t),ft(t),null;case 5:Mh(t);var i=mi(ia.current);if(r=t.type,e!==null&&t.stateNode!=null)fb(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(P(166));return ft(t),null}if(e=mi(Er.current),cl(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Cr]=t,n[ra]=o,e=(t.mode&1)!==0,r){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(i=0;i<ys.length;i++)we(ys[i],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":Cm(n,o),we("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},we("invalid",n);break;case"textarea":$m(n,o),we("invalid",n)}Md(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&ll(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ll(n.textContent,l,e),i=["children",""+l]):Ks.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&we("scroll",n)}switch(r){case"input":el(n),Sm(n,o,!0);break;case"textarea":el(n),Em(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=sc)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=F0(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Cr]=t,e[ra]=n,db(e,t,!1,!1),t.stateNode=e;e:{switch(s=jd(r,n),r){case"dialog":we("cancel",e),we("close",e),i=n;break;case"iframe":case"object":case"embed":we("load",e),i=n;break;case"video":case"audio":for(i=0;i<ys.length;i++)we(ys[i],e);i=n;break;case"source":we("error",e),i=n;break;case"img":case"image":case"link":we("error",e),we("load",e),i=n;break;case"details":we("toggle",e),i=n;break;case"input":Cm(e,n),i=Ld(e,n),we("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Te({},n,{value:void 0}),we("invalid",e);break;case"textarea":$m(e,n),i=Nd(e,n),we("invalid",e);break;default:i=n}Md(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?H0(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&B0(e,a)):o==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&Ys(e,a):typeof a=="number"&&Ys(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ks.hasOwnProperty(o)?a!=null&&o==="onScroll"&&we("scroll",e):a!=null&&mh(e,o,a,s))}switch(r){case"input":el(e),Sm(e,n,!1);break;case"textarea":el(e),Em(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Wn(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?mo(e,!!n.multiple,o,!1):n.defaultValue!=null&&mo(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=sc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ft(t),null;case 6:if(e&&t.stateNode!=null)hb(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(P(166));if(r=mi(ia.current),mi(Er.current),cl(t)){if(n=t.stateNode,r=t.memoizedProps,n[Cr]=t,(o=n.nodeValue!==r)&&(e=Mt,e!==null))switch(e.tag){case 3:ll(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ll(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Cr]=t,t.stateNode=n}return ft(t),null;case 13:if(_e(Ae),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&Nt!==null&&t.mode&1&&!(t.flags&128))Ty(),Eo(),t.flags|=98560,o=!1;else if(o=cl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[Cr]=t}else Eo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ft(t),o=!1}else dr!==null&&(wf(dr),dr=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Ye===0&&(Ye=3):Qh())),t.updateQueue!==null&&(t.flags|=4),ft(t),null);case 4:return zo(),ff(e,t),e===null&&ea(t.stateNode.containerInfo),ft(t),null;case 10:return Ih(t.type._context),ft(t),null;case 17:return At(t.type)&&ac(),ft(t),null;case 19:if(_e(Ae),o=t.memoizedState,o===null)return ft(t),null;if(n=(t.flags&128)!==0,s=o.rendering,s===null)if(n)us(o,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=pc(e),s!==null){for(t.flags|=128,us(o,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return be(Ae,Ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>Oo&&(t.flags|=128,n=!0,us(o,!1),t.lanes=4194304)}else{if(!n)if(e=pc(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),us(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Se)return ft(t),null}else 2*Me()-o.renderingStartTime>Oo&&r!==1073741824&&(t.flags|=128,n=!0,us(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(r=o.last,r!==null?r.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,r=Ae.current,be(Ae,n?r&1|2:r&1),t):(ft(t),null);case 22:case 23:return qh(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Lt&1073741824&&(ft(t),t.subtreeFlags&6&&(t.flags|=8192)):ft(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function b3(e,t){switch(Th(t),t.tag){case 1:return At(t.type)&&ac(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zo(),_e(Et),_e(pt),jh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mh(t),null;case 13:if(_e(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Eo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(Ae),null;case 4:return zo(),null;case 10:return Ih(t.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var fl=!1,ht=!1,w3=typeof WeakSet=="function"?WeakSet:Set,F=null;function ao(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Le(e,t,n)}else r.current=null}function hf(e,t,r){try{r()}catch(n){Le(e,t,n)}}var gg=!1;function x3(e,t){if(Gd=nc,e=vy(),Ah(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,a=-1,c=0,f=0,d=e,h=null;t:for(;;){for(var p;d!==r||i!==0&&d.nodeType!==3||(l=s+i),d!==o||n!==0&&d.nodeType!==3||(a=s+n),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break t;if(h===r&&++c===i&&(l=s),h===o&&++f===n&&(a=s),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}r=l===-1||a===-1?null:{start:l,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(qd={focusedElem:e,selectionRange:r},nc=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,b=t.stateNode,m=b.getSnapshotBeforeUpdate(t.elementType===t.type?x:cr(t.type,x),S);b.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){Le(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return v=gg,gg=!1,v}function Rs(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&hf(t,r,o)}i=i.next}while(i!==n)}}function Kc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function pf(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function pb(e){var t=e.alternate;t!==null&&(e.alternate=null,pb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Cr],delete t[ra],delete t[Jd],delete t[n3],delete t[i3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mb(e){return e.tag===5||e.tag===3||e.tag===4}function vg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mf(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=sc));else if(n!==4&&(e=e.child,e!==null))for(mf(e,t,r),e=e.sibling;e!==null;)mf(e,t,r),e=e.sibling}function gf(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(gf(e,t,r),e=e.sibling;e!==null;)gf(e,t,r),e=e.sibling}var it=null,ur=!1;function yn(e,t,r){for(r=r.child;r!==null;)gb(e,t,r),r=r.sibling}function gb(e,t,r){if($r&&typeof $r.onCommitFiberUnmount=="function")try{$r.onCommitFiberUnmount(Mc,r)}catch{}switch(r.tag){case 5:ht||ao(r,t);case 6:var n=it,i=ur;it=null,yn(e,t,r),it=n,ur=i,it!==null&&(ur?(e=it,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):it.removeChild(r.stateNode));break;case 18:it!==null&&(ur?(e=it,r=r.stateNode,e.nodeType===8?Wu(e.parentNode,r):e.nodeType===1&&Wu(e,r),Qs(e)):Wu(it,r.stateNode));break;case 4:n=it,i=ur,it=r.stateNode.containerInfo,ur=!0,yn(e,t,r),it=n,ur=i;break;case 0:case 11:case 14:case 15:if(!ht&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&hf(r,t,s),i=i.next}while(i!==n)}yn(e,t,r);break;case 1:if(!ht&&(ao(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Le(r,t,l)}yn(e,t,r);break;case 21:yn(e,t,r);break;case 22:r.mode&1?(ht=(n=ht)||r.memoizedState!==null,yn(e,t,r),ht=n):yn(e,t,r);break;default:yn(e,t,r)}}function yg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new w3),t.forEach(function(n){var i=T3.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function ar(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,ur=!1;break e;case 3:it=l.stateNode.containerInfo,ur=!0;break e;case 4:it=l.stateNode.containerInfo,ur=!0;break e}l=l.return}if(it===null)throw Error(P(160));gb(o,s,i),it=null,ur=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){Le(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vb(t,e),t=t.sibling}function vb(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ar(t,e),xr(e),n&4){try{Rs(3,e,e.return),Kc(3,e)}catch(x){Le(e,e.return,x)}try{Rs(5,e,e.return)}catch(x){Le(e,e.return,x)}}break;case 1:ar(t,e),xr(e),n&512&&r!==null&&ao(r,r.return);break;case 5:if(ar(t,e),xr(e),n&512&&r!==null&&ao(r,r.return),e.flags&32){var i=e.stateNode;try{Ys(i,"")}catch(x){Le(e,e.return,x)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&M0(i,o),jd(l,s);var c=jd(l,o);for(s=0;s<a.length;s+=2){var f=a[s],d=a[s+1];f==="style"?H0(i,d):f==="dangerouslySetInnerHTML"?B0(i,d):f==="children"?Ys(i,d):mh(i,f,d,c)}switch(l){case"input":Id(i,o);break;case"textarea":j0(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?mo(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?mo(i,!!o.multiple,o.defaultValue,!0):mo(i,!!o.multiple,o.multiple?[]:"",!1))}i[ra]=o}catch(x){Le(e,e.return,x)}}break;case 6:if(ar(t,e),xr(e),n&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Le(e,e.return,x)}}break;case 3:if(ar(t,e),xr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Qs(t.containerInfo)}catch(x){Le(e,e.return,x)}break;case 4:ar(t,e),xr(e);break;case 13:ar(t,e),xr(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Xh=Me())),n&4&&yg(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(ht=(c=ht)||f,ar(t,e),ht=c):ar(t,e),xr(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(F=e,f=e.child;f!==null;){for(d=F=f;F!==null;){switch(h=F,p=h.child,h.tag){case 0:case 11:case 14:case 15:Rs(4,h,h.return);break;case 1:ao(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Le(n,r,x)}}break;case 5:ao(h,h.return);break;case 22:if(h.memoizedState!==null){wg(d);continue}}p!==null?(p.return=h,F=p):wg(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=V0("display",s))}catch(x){Le(e,e.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Le(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ar(t,e),xr(e),n&4&&yg(e);break;case 21:break;default:ar(t,e),xr(e)}}function xr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(mb(r)){var n=r;break e}r=r.return}throw Error(P(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ys(i,""),n.flags&=-33);var o=vg(e);gf(e,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=vg(e);mf(e,l,s);break;default:throw Error(P(161))}}catch(a){Le(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _3(e,t,r){F=e,yb(e)}function yb(e,t,r){for(var n=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||fl;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ht;l=fl;var c=ht;if(fl=s,(ht=a)&&!c)for(F=i;F!==null;)s=F,a=s.child,s.tag===22&&s.memoizedState!==null?xg(i):a!==null?(a.return=s,F=a):xg(i);for(;o!==null;)F=o,yb(o),o=o.sibling;F=i,fl=l,ht=c}bg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):bg(e)}}function bg(e){for(;F!==null;){var t=F;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ht||Kc(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ht)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:cr(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&rg(t,o,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}rg(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Qs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ht||t.flags&512&&pf(t)}catch(h){Le(t,t.return,h)}}if(t===e){F=null;break}if(r=t.sibling,r!==null){r.return=t.return,F=r;break}F=t.return}}function wg(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var r=t.sibling;if(r!==null){r.return=t.return,F=r;break}F=t.return}}function xg(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Kc(4,t)}catch(a){Le(t,r,a)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(a){Le(t,i,a)}}var o=t.return;try{pf(t)}catch(a){Le(t,o,a)}break;case 5:var s=t.return;try{pf(t)}catch(a){Le(t,s,a)}}}catch(a){Le(t,t.return,a)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var k3=Math.ceil,vc=ln.ReactCurrentDispatcher,Kh=ln.ReactCurrentOwner,Jt=ln.ReactCurrentBatchConfig,ce=0,Je=null,He=null,at=0,Lt=0,lo=ei(0),Ye=0,la=null,zi=0,Yc=0,Yh=0,Ns=null,St=null,Xh=0,Oo=1/0,Vr=null,yc=!1,vf=null,Mn=null,hl=!1,An=null,bc=0,Ds=0,yf=null,jl=-1,Fl=0;function yt(){return ce&6?Me():jl!==-1?jl:jl=Me()}function jn(e){return e.mode&1?ce&2&&at!==0?at&-at:s3.transition!==null?(Fl===0&&(Fl=ty()),Fl):(e=ge,e!==0||(e=window.event,e=e===void 0?16:ly(e.type)),e):1}function pr(e,t,r,n){if(50<Ds)throw Ds=0,yf=null,Error(P(185));za(e,r,n),(!(ce&2)||e!==Je)&&(e===Je&&(!(ce&2)&&(Yc|=r),Ye===4&&Sn(e,at)),zt(e,n),r===1&&ce===0&&!(t.mode&1)&&(Oo=Me()+500,Hc&&ti()))}function zt(e,t){var r=e.callbackNode;sS(e,t);var n=rc(e,e===Je?at:0);if(n===0)r!==null&&Tm(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Tm(r),t===1)e.tag===0?o3(_g.bind(null,e)):Ey(_g.bind(null,e)),t3(function(){!(ce&6)&&ti()}),r=null;else{switch(ry(n)){case 1:r=wh;break;case 4:r=J0;break;case 16:r=tc;break;case 536870912:r=ey;break;default:r=tc}r=$b(r,bb.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function bb(e,t){if(jl=-1,Fl=0,ce&6)throw Error(P(327));var r=e.callbackNode;if(wo()&&e.callbackNode!==r)return null;var n=rc(e,e===Je?at:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=wc(e,n);else{t=n;var i=ce;ce|=2;var o=xb();(Je!==e||at!==t)&&(Vr=null,Oo=Me()+500,bi(e,t));do try{$3();break}catch(l){wb(e,l)}while(!0);Lh(),vc.current=o,ce=i,He!==null?t=0:(Je=null,at=0,t=Ye)}if(t!==0){if(t===2&&(i=Ud(e),i!==0&&(n=i,t=bf(e,i))),t===1)throw r=la,bi(e,0),Sn(e,n),zt(e,Me()),r;if(t===6)Sn(e,n);else{if(i=e.current.alternate,!(n&30)&&!C3(i)&&(t=wc(e,n),t===2&&(o=Ud(e),o!==0&&(n=o,t=bf(e,o))),t===1))throw r=la,bi(e,0),Sn(e,n),zt(e,Me()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(P(345));case 2:ai(e,St,Vr);break;case 3:if(Sn(e,n),(n&130023424)===n&&(t=Xh+500-Me(),10<t)){if(rc(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){yt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zd(ai.bind(null,e,St,Vr),t);break}ai(e,St,Vr);break;case 4:if(Sn(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-hr(n);o=1<<s,s=t[s],s>i&&(i=s),n&=~o}if(n=i,n=Me()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*k3(n/1960))-n,10<n){e.timeoutHandle=Zd(ai.bind(null,e,St,Vr),n);break}ai(e,St,Vr);break;case 5:ai(e,St,Vr);break;default:throw Error(P(329))}}}return zt(e,Me()),e.callbackNode===r?bb.bind(null,e):null}function bf(e,t){var r=Ns;return e.current.memoizedState.isDehydrated&&(bi(e,t).flags|=256),e=wc(e,t),e!==2&&(t=St,St=r,t!==null&&wf(t)),e}function wf(e){St===null?St=e:St.push.apply(St,e)}function C3(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!mr(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~Yh,t&=~Yc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-hr(t),n=1<<r;e[r]=-1,t&=~n}}function _g(e){if(ce&6)throw Error(P(327));wo();var t=rc(e,0);if(!(t&1))return zt(e,Me()),null;var r=wc(e,t);if(e.tag!==0&&r===2){var n=Ud(e);n!==0&&(t=n,r=bf(e,n))}if(r===1)throw r=la,bi(e,0),Sn(e,t),zt(e,Me()),r;if(r===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ai(e,St,Vr),zt(e,Me()),null}function Gh(e,t){var r=ce;ce|=1;try{return e(t)}finally{ce=r,ce===0&&(Oo=Me()+500,Hc&&ti())}}function Ti(e){An!==null&&An.tag===0&&!(ce&6)&&wo();var t=ce;ce|=1;var r=Jt.transition,n=ge;try{if(Jt.transition=null,ge=1,e)return e()}finally{ge=n,Jt.transition=r,ce=t,!(ce&6)&&ti()}}function qh(){Lt=lo.current,_e(lo)}function bi(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,e3(r)),He!==null)for(r=He.return;r!==null;){var n=r;switch(Th(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ac();break;case 3:zo(),_e(Et),_e(pt),jh();break;case 5:Mh(n);break;case 4:zo();break;case 13:_e(Ae);break;case 19:_e(Ae);break;case 10:Ih(n.type._context);break;case 22:case 23:qh()}r=r.return}if(Je=e,He=e=Fn(e.current,null),at=Lt=t,Ye=0,la=null,Yh=Yc=zi=0,St=Ns=null,pi!==null){for(t=0;t<pi.length;t++)if(r=pi[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}pi=null}return e}function wb(e,t){do{var r=He;try{if(Lh(),Nl.current=gc,mc){for(var n=ze.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}mc=!1}if(Ai=0,Ze=Ke=ze=null,Is=!1,oa=0,Kh.current=null,r===null||r.return===null){Ye=1,la=t,He=null;break}e:{var o=e,s=r.return,l=r,a=t;if(t=at,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=cg(s);if(p!==null){p.flags&=-257,ug(p,s,l,o,t),p.mode&1&&lg(o,c,t),t=p,a=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(a),t.updateQueue=x}else v.add(a);break e}else{if(!(t&1)){lg(o,c,t),Qh();break e}a=Error(P(426))}}else if(Se&&l.mode&1){var S=cg(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ug(S,s,l,o,t),Oh(To(a,l));break e}}o=a=To(a,l),Ye!==4&&(Ye=2),Ns===null?Ns=[o]:Ns.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var b=nb(o,a,t);tg(o,b);break e;case 1:l=a;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Mn===null||!Mn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=ib(o,l,t);tg(o,w);break e}}o=o.return}while(o!==null)}kb(r)}catch(C){t=C,He===r&&r!==null&&(He=r=r.return);continue}break}while(!0)}function xb(){var e=vc.current;return vc.current=gc,e===null?gc:e}function Qh(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||!(zi&268435455)&&!(Yc&268435455)||Sn(Je,at)}function wc(e,t){var r=ce;ce|=2;var n=xb();(Je!==e||at!==t)&&(Vr=null,bi(e,t));do try{S3();break}catch(i){wb(e,i)}while(!0);if(Lh(),ce=r,vc.current=n,He!==null)throw Error(P(261));return Je=null,at=0,Ye}function S3(){for(;He!==null;)_b(He)}function $3(){for(;He!==null&&!Q5();)_b(He)}function _b(e){var t=Sb(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,t===null?kb(e):He=t,Kh.current=null}function kb(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=b3(r,t),r!==null){r.flags&=32767,He=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,He=null;return}}else if(r=y3(r,t,Lt),r!==null){He=r;return}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);Ye===0&&(Ye=5)}function ai(e,t,r){var n=ge,i=Jt.transition;try{Jt.transition=null,ge=1,E3(e,t,r,n)}finally{Jt.transition=i,ge=n}return null}function E3(e,t,r,n){do wo();while(An!==null);if(ce&6)throw Error(P(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(aS(e,o),e===Je&&(He=Je=null,at=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||hl||(hl=!0,$b(tc,function(){return wo(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Jt.transition,Jt.transition=null;var s=ge;ge=1;var l=ce;ce|=4,Kh.current=null,x3(e,r),vb(r,e),YS(qd),nc=!!Gd,qd=Gd=null,e.current=r,_3(r),Z5(),ce=l,ge=s,Jt.transition=o}else e.current=r;if(hl&&(hl=!1,An=e,bc=i),o=e.pendingLanes,o===0&&(Mn=null),tS(r.stateNode),zt(e,Me()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(yc)throw yc=!1,e=vf,vf=null,e;return bc&1&&e.tag!==0&&wo(),o=e.pendingLanes,o&1?e===yf?Ds++:(Ds=0,yf=e):Ds=0,ti(),null}function wo(){if(An!==null){var e=ry(bc),t=Jt.transition,r=ge;try{if(Jt.transition=null,ge=16>e?16:e,An===null)var n=!1;else{if(e=An,An=null,bc=0,ce&6)throw Error(P(331));var i=ce;for(ce|=4,F=e.current;F!==null;){var o=F,s=o.child;if(F.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(F=c;F!==null;){var f=F;switch(f.tag){case 0:case 11:case 15:Rs(8,f,o)}var d=f.child;if(d!==null)d.return=f,F=d;else for(;F!==null;){f=F;var h=f.sibling,p=f.return;if(pb(f),f===c){F=null;break}if(h!==null){h.return=p,F=h;break}F=p}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}F=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,F=s;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rs(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,F=b;break e}F=o.return}}var m=e.current;for(F=m;F!==null;){s=F;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,F=y;else e:for(s=m;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Kc(9,l)}}catch(C){Le(l,l.return,C)}if(l===s){F=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,F=w;break e}F=l.return}}if(ce=i,ti(),$r&&typeof $r.onPostCommitFiberRoot=="function")try{$r.onPostCommitFiberRoot(Mc,e)}catch{}n=!0}return n}finally{ge=r,Jt.transition=t}}return!1}function kg(e,t,r){t=To(r,t),t=nb(e,t,1),e=Dn(e,t,1),t=yt(),e!==null&&(za(e,1,t),zt(e,t))}function Le(e,t,r){if(e.tag===3)kg(e,e,r);else for(;t!==null;){if(t.tag===3){kg(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Mn===null||!Mn.has(n))){e=To(r,e),e=ib(t,e,1),t=Dn(t,e,1),e=yt(),t!==null&&(za(t,1,e),zt(t,e));break}}t=t.return}}function A3(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&r,Je===e&&(at&r)===r&&(Ye===4||Ye===3&&(at&130023424)===at&&500>Me()-Xh?bi(e,0):Yh|=r),zt(e,t)}function Cb(e,t){t===0&&(e.mode&1?(t=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):t=1);var r=yt();e=Qr(e,t),e!==null&&(za(e,t,r),zt(e,r))}function z3(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Cb(e,r)}function T3(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(P(314))}n!==null&&n.delete(t),Cb(e,r)}var Sb;Sb=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Et.current)$t=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return $t=!1,v3(e,t,r);$t=!!(e.flags&131072)}else $t=!1,Se&&t.flags&1048576&&Ay(t,uc,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ml(e,t),e=t.pendingProps;var i=$o(t,pt.current);bo(t,r),i=Bh(null,t,n,e,i,r);var o=Vh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,At(n)?(o=!0,lc(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nh(t),i.updater=Uc,t.stateNode=i,i._reactInternals=t,sf(t,n,e,r),t=cf(null,t,n,!0,o,r)):(t.tag=0,Se&&o&&zh(t),vt(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ml(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=P3(n),e=cr(n,e),i){case 0:t=lf(null,t,n,e,r);break e;case 1:t=hg(null,t,n,e,r);break e;case 11:t=dg(null,t,n,e,r);break e;case 14:t=fg(null,t,n,cr(n.type,e),r);break e}throw Error(P(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:cr(n,i),lf(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:cr(n,i),hg(e,t,n,i,r);case 3:e:{if(lb(t),e===null)throw Error(P(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Py(e,t),hc(t,n,null,r);var s=t.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=To(Error(P(423)),t),t=pg(e,t,n,r,i);break e}else if(n!==i){i=To(Error(P(424)),t),t=pg(e,t,n,r,i);break e}else for(Nt=Nn(t.stateNode.containerInfo.firstChild),Mt=t,Se=!0,dr=null,r=Ny(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Eo(),n===i){t=Zr(e,t,r);break e}vt(e,t,n,r)}t=t.child}return t;case 5:return Dy(t),e===null&&rf(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Qd(n,i)?s=null:o!==null&&Qd(n,o)&&(t.flags|=32),ab(e,t),vt(e,t,s,r),t.child;case 6:return e===null&&rf(t),null;case 13:return cb(e,t,r);case 4:return Dh(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ao(t,null,n,r):vt(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:cr(n,i),dg(e,t,n,i,r);case 7:return vt(e,t,t.pendingProps,r),t.child;case 8:return vt(e,t,t.pendingProps.children,r),t.child;case 12:return vt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,be(dc,n._currentValue),n._currentValue=s,o!==null)if(mr(o.value,s)){if(o.children===i.children&&!Et.current){t=Zr(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===n){if(o.tag===1){a=Yr(-1,r&-r),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),nf(o.return,r,t),l.lanes|=r;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(P(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),nf(s,r,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}vt(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,bo(t,r),i=tr(i),n=n(i),t.flags|=1,vt(e,t,n,r),t.child;case 14:return n=t.type,i=cr(n,t.pendingProps),i=cr(n.type,i),fg(e,t,n,i,r);case 15:return ob(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:cr(n,i),Ml(e,t),t.tag=1,At(n)?(e=!0,lc(t)):e=!1,bo(t,r),Iy(t,n,i),sf(t,n,i,r),cf(null,t,n,!0,e,r);case 19:return ub(e,t,r);case 22:return sb(e,t,r)}throw Error(P(156,t.tag))};function $b(e,t){return Z0(e,t)}function O3(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,r,n){return new O3(e,t,r,n)}function Zh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function P3(e){if(typeof e=="function")return Zh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vh)return 11;if(e===yh)return 14}return 2}function Fn(e,t){var r=e.alternate;return r===null?(r=Zt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Bl(e,t,r,n,i,o){var s=2;if(n=e,typeof e=="function")Zh(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Zi:return wi(r.children,i,o,t);case gh:s=8,i|=8;break;case zd:return e=Zt(12,r,t,i|2),e.elementType=zd,e.lanes=o,e;case Td:return e=Zt(13,r,t,i),e.elementType=Td,e.lanes=o,e;case Od:return e=Zt(19,r,t,i),e.elementType=Od,e.lanes=o,e;case R0:return Xc(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L0:s=10;break e;case I0:s=9;break e;case vh:s=11;break e;case yh:s=14;break e;case wn:s=16,n=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Zt(s,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function wi(e,t,r,n){return e=Zt(7,e,n,t),e.lanes=r,e}function Xc(e,t,r,n){return e=Zt(22,e,n,t),e.elementType=R0,e.lanes=r,e.stateNode={isHidden:!1},e}function Ju(e,t,r){return e=Zt(6,e,null,t),e.lanes=r,e}function ed(e,t,r){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function L3(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Iu(0),this.expirationTimes=Iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Iu(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jh(e,t,r,n,i,o,s,l,a){return e=new L3(e,t,r,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Zt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nh(o),e}function I3(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Eb(e){if(!e)return Kn;e=e._reactInternals;e:{if(Fi(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(At(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var r=e.type;if(At(r))return $y(e,r,t)}return t}function Ab(e,t,r,n,i,o,s,l,a){return e=Jh(r,n,!0,e,i,o,s,l,a),e.context=Eb(null),r=e.current,n=yt(),i=jn(r),o=Yr(n,i),o.callback=t??null,Dn(r,o,i),e.current.lanes=i,za(e,i,n),zt(e,n),e}function Gc(e,t,r,n){var i=t.current,o=yt(),s=jn(i);return r=Eb(r),t.context===null?t.context=r:t.pendingContext=r,t=Yr(o,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Dn(i,t,s),e!==null&&(pr(e,i,s,o),Rl(e,i,s)),s}function xc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ep(e,t){Cg(e,t),(e=e.alternate)&&Cg(e,t)}function R3(){return null}var zb=typeof reportError=="function"?reportError:function(e){console.error(e)};function tp(e){this._internalRoot=e}qc.prototype.render=tp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Gc(e,t,null,null)};qc.prototype.unmount=tp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ti(function(){Gc(null,e,null,null)}),t[qr]=null}};function qc(e){this._internalRoot=e}qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=oy();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Cn.length&&t!==0&&t<Cn[r].priority;r++);Cn.splice(r,0,e),r===0&&ay(e)}};function rp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sg(){}function N3(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var c=xc(s);o.call(c)}}var s=Ab(t,n,e,0,null,!1,!1,"",Sg);return e._reactRootContainer=s,e[qr]=s.current,ea(e.nodeType===8?e.parentNode:e),Ti(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var c=xc(a);l.call(c)}}var a=Jh(e,0,!1,null,null,!1,!1,"",Sg);return e._reactRootContainer=a,e[qr]=a.current,ea(e.nodeType===8?e.parentNode:e),Ti(function(){Gc(t,a,r,n)}),a}function Zc(e,t,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=xc(s);l.call(a)}}Gc(t,s,e,i)}else s=N3(r,t,e,i,n);return xc(s)}ny=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=vs(t.pendingLanes);r!==0&&(xh(t,r|1),zt(t,Me()),!(ce&6)&&(Oo=Me()+500,ti()))}break;case 13:Ti(function(){var n=Qr(e,1);if(n!==null){var i=yt();pr(n,e,1,i)}}),ep(e,1)}};_h=function(e){if(e.tag===13){var t=Qr(e,134217728);if(t!==null){var r=yt();pr(t,e,134217728,r)}ep(e,134217728)}};iy=function(e){if(e.tag===13){var t=jn(e),r=Qr(e,t);if(r!==null){var n=yt();pr(r,e,t,n)}ep(e,t)}};oy=function(){return ge};sy=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}};Bd=function(e,t,r){switch(t){case"input":if(Id(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Vc(n);if(!i)throw Error(P(90));D0(n),Id(n,i)}}}break;case"textarea":j0(e,r);break;case"select":t=r.value,t!=null&&mo(e,!!r.multiple,t,!1)}};K0=Gh;Y0=Ti;var D3={usingClientEntryPoint:!1,Events:[Oa,ro,Vc,U0,W0,Gh]},ds={findFiberByHostInstance:hi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},M3={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=q0(e),e===null?null:e.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||R3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{Mc=pl.inject(M3),$r=pl}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D3;Kt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(t))throw Error(P(200));return I3(e,t,null,r)};Kt.createRoot=function(e,t){if(!rp(e))throw Error(P(299));var r=!1,n="",i=zb;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Jh(e,1,!1,null,null,r,!1,n,i),e[qr]=t.current,ea(e.nodeType===8?e.parentNode:e),new tp(t)};Kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=q0(t),e=e===null?null:e.stateNode,e};Kt.flushSync=function(e){return Ti(e)};Kt.hydrate=function(e,t,r){if(!Qc(t))throw Error(P(200));return Zc(null,e,t,!0,r)};Kt.hydrateRoot=function(e,t,r){if(!rp(e))throw Error(P(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=zb;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Ab(t,null,e,1,r??null,i,!1,o,s),e[qr]=t.current,ea(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new qc(t)};Kt.render=function(e,t,r){if(!Qc(t))throw Error(P(200));return Zc(null,e,t,!1,r)};Kt.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(P(40));return e._reactRootContainer?(Ti(function(){Zc(null,null,e,!1,function(){e._reactRootContainer=null,e[qr]=null})}),!0):!1};Kt.unstable_batchedUpdates=Gh;Kt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Qc(r))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Zc(e,t,r,!1,n)};Kt.version="18.2.0-next-9e3b772b8-20220608";function Tb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tb)}catch(e){console.error(e)}}Tb(),A0.exports=Kt;var Ob=A0.exports;const co=Ea(Ob);var $g=Ob;Ed.createRoot=$g.createRoot,Ed.hydrateRoot=$g.hydrateRoot;var Pb={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var o="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(o=i(o,n(l)))}return o}function n(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return r.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var l in o)t.call(o,l)&&o[l]&&(s=i(s,l));return s}function i(o,s){return s?o?o+" "+s:o+s:o}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Pb);var j3=Pb.exports;const Q=Ea(j3),F3=["as","disabled"];function B3(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function V3(e){return!e||e.trim()==="#"}function np({tagName:e,disabled:t,href:r,target:n,rel:i,role:o,onClick:s,tabIndex:l=0,type:a}){e||(r!=null||n!=null||i!=null?e="a":e="button");const c={tagName:e};if(e==="button")return[{type:a||"button",disabled:t},c];const f=h=>{if((t||e==="a"&&V3(r))&&h.preventDefault(),t){h.stopPropagation();return}s==null||s(h)},d=h=>{h.key===" "&&(h.preventDefault(),f(h))};return e==="a"&&(r||(r="#"),t&&(r=void 0)),[{role:o??"button",disabled:void 0,tabIndex:t?void 0:l,href:r,target:e==="a"?n:void 0,"aria-disabled":t||void 0,rel:e==="a"?i:void 0,onClick:f,onKeyDown:d},c]}const ip=_.forwardRef((e,t)=>{let{as:r,disabled:n}=e,i=B3(e,F3);const[o,{tagName:s}]=np(Object.assign({tagName:r,disabled:n},i));return k.jsx(s,Object.assign({},i,o,{ref:t}))});ip.displayName="Button";const H3=["xxl","xl","lg","md","sm","xs"],U3="xs",Jc=_.createContext({prefixes:{},breakpoints:H3,minBreakpoint:U3});function ee(e,t){const{prefixes:r}=_.useContext(Jc);return e||r[t]||t}function W3(){const{breakpoints:e}=_.useContext(Jc);return e}function K3(){const{minBreakpoint:e}=_.useContext(Jc);return e}function Lb(){const{dir:e}=_.useContext(Jc);return e==="rtl"}const Ib=_.forwardRef(({as:e,bsPrefix:t,variant:r="primary",size:n,active:i=!1,disabled:o=!1,className:s,...l},a)=>{const c=ee(t,"btn"),[f,{tagName:d}]=np({tagName:e,disabled:o,...l}),h=d;return k.jsx(h,{...f,...l,ref:a,disabled:o,className:Q(s,c,i&&"active",r&&`${c}-${r}`,n&&`${c}-${n}`,l.href&&o&&"disabled")})});Ib.displayName="Button";const We=Ib,Yo=!!(typeof window<"u"&&window.document&&window.document.createElement);var xf=!1,_f=!1;try{var td={get passive(){return xf=!0},get once(){return _f=xf=!0}};Yo&&(window.addEventListener("test",td,td),window.removeEventListener("test",td,!0))}catch{}function op(e,t,r,n){if(n&&typeof n!="boolean"&&!_f){var i=n.once,o=n.capture,s=r;!_f&&i&&(s=r.__once||function l(a){this.removeEventListener(t,l,o),r.call(this,a)},r.__once=s),e.addEventListener(t,s,xf?n:o)}e.addEventListener(t,r,n)}function La(e){return e&&e.ownerDocument||document}function kf(e,t,r,n){var i=n&&typeof n!="boolean"?n.capture:n;e.removeEventListener(t,r,i),r.__once&&e.removeEventListener(t,r.__once,i)}var ml;function Eg(e){if((!ml&&ml!==0||e)&&Yo){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),ml=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return ml}function Rb(){return _.useState(null)}function Y3(e){const t=_.useRef(e);return _.useEffect(()=>{t.current=e},[e]),t}function je(e){const t=Y3(e);return _.useCallback(function(...r){return t.current&&t.current(...r)},[t])}const Ag=e=>!e||typeof e=="function"?e:t=>{e.current=t};function X3(e,t){const r=Ag(e),n=Ag(t);return i=>{r&&r(i),n&&n(i)}}function ri(e,t){return _.useMemo(()=>X3(e,t),[e,t])}function G3(e){const t=_.useRef(e);return t.current=e,t}function Nb(e){const t=G3(e);_.useEffect(()=>()=>t.current(),[])}function q3(e){var t=La(e);return t&&t.defaultView||window}function Q3(e,t){return q3(e).getComputedStyle(e,t)}var Z3=/([A-Z])/g;function J3(e){return e.replace(Z3,"-$1").toLowerCase()}var e$=/^ms-/;function gl(e){return J3(e).replace(e$,"-ms-")}var t$=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function r$(e){return!!(e&&t$.test(e))}function xi(e,t){var r="",n="";if(typeof t=="string")return e.style.getPropertyValue(gl(t))||Q3(e).getPropertyValue(gl(t));Object.keys(t).forEach(function(i){var o=t[i];!o&&o!==0?e.style.removeProperty(gl(i)):r$(i)?n+=i+"("+o+") ":r+=gl(i)+": "+o+";"}),n&&(r+="transform: "+n+";"),e.style.cssText+=";"+r}function zn(e,t,r,n){return op(e,t,r,n),function(){kf(e,t,r,n)}}function n$(e,t,r,n){if(r===void 0&&(r=!1),n===void 0&&(n=!0),e){var i=document.createEvent("HTMLEvents");i.initEvent(t,r,n),e.dispatchEvent(i)}}function i$(e){var t=xi(e,"transitionDuration")||"",r=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*r}function o$(e,t,r){r===void 0&&(r=5);var n=!1,i=setTimeout(function(){n||n$(e,"transitionend",!0)},t+r),o=zn(e,"transitionend",function(){n=!0},{once:!0});return function(){clearTimeout(i),o()}}function Db(e,t,r,n){r==null&&(r=i$(e)||0);var i=o$(e,r,n),o=zn(e,"transitionend",t);return function(){i(),o()}}function rd(e){e===void 0&&(e=La());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function _c(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function Mb(){const e=_.useRef(!0),t=_.useRef(()=>e.current);return _.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function jb(e){const t=_.useRef(null);return _.useEffect(()=>{t.current=e}),t.current}const s$="data-rr-ui-",a$="rrUi";function Xo(e){return`${s$}${e}`}function l$(e){return`${a$}${e}`}function c$(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const zg=Xo("modal-open");class u${constructor({ownerDocument:t,handleContainerOverflow:r=!0,isRTL:n=!1}={}){this.handleContainerOverflow=r,this.isRTL=n,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return c$(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const r={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();t.style={overflow:i.style.overflow,[n]:i.style[n]},t.scrollBarWidth&&(r[n]=`${parseInt(xi(i,n)||"0",10)+t.scrollBarWidth}px`),i.setAttribute(zg,""),xi(i,r)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const r=this.getElement();r.removeAttribute(zg),Object.assign(r.style,t.style)}add(t){let r=this.modals.indexOf(t);return r!==-1||(r=this.modals.length,this.modals.push(t),this.setModalAttributes(t),r!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),r}remove(t){const r=this.modals.indexOf(t);r!==-1&&(this.modals.splice(r,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const sp=u$,Fb=_.createContext(Yo?window:void 0);Fb.Provider;function eu(){return _.useContext(Fb)}const nd=(e,t)=>Yo?e==null?(t||La()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function d$(e,t){const r=eu(),[n,i]=_.useState(()=>nd(e,r==null?void 0:r.document));if(!n){const o=nd(e);o&&i(o)}return _.useEffect(()=>{t&&n&&t(n)},[t,n]),_.useEffect(()=>{const o=nd(e);o!==n&&i(o)},[e,n]),n}const f$=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",h$=typeof document<"u",Cf=h$||f$?_.useLayoutEffect:_.useEffect;function p$({children:e,in:t,onExited:r,mountOnEnter:n,unmountOnExit:i}){const o=_.useRef(null),s=_.useRef(t),l=je(r);_.useEffect(()=>{t?s.current=!0:l(o.current)},[t,l]);const a=ri(o,e.ref),c=_.cloneElement(e,{ref:a});return t?c:i||!s.current&&n?null:c}const m$=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function g$(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function v$(e){let{onEnter:t,onEntering:r,onEntered:n,onExit:i,onExiting:o,onExited:s,addEndListener:l,children:a}=e,c=g$(e,m$);const f=_.useRef(null),d=ri(f,typeof a=="function"?null:a.ref),h=w=>C=>{w&&f.current&&w(f.current,C)},p=_.useCallback(h(t),[t]),v=_.useCallback(h(r),[r]),x=_.useCallback(h(n),[n]),S=_.useCallback(h(i),[i]),b=_.useCallback(h(o),[o]),m=_.useCallback(h(s),[s]),y=_.useCallback(h(l),[l]);return Object.assign({},c,{nodeRef:f},t&&{onEnter:p},r&&{onEntering:v},n&&{onEntered:x},i&&{onExit:S},o&&{onExiting:b},s&&{onExited:m},l&&{addEndListener:y},{children:typeof a=="function"?(w,C)=>a(w,Object.assign({},C,{ref:d})):_.cloneElement(a,{ref:d})})}const y$=["component"];function b$(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}const w$=_.forwardRef((e,t)=>{let{component:r}=e,n=b$(e,y$);const i=v$(n);return k.jsx(r,Object.assign({ref:t},i))}),x$=w$;function _$({in:e,onTransition:t}){const r=_.useRef(null),n=_.useRef(!0),i=je(t);return Cf(()=>{if(!r.current)return;let o=!1;return i({in:e,element:r.current,initial:n.current,isStale:()=>o}),()=>{o=!0}},[e,i]),Cf(()=>(n.current=!1,()=>{n.current=!0}),[]),r}function k$({children:e,in:t,onExited:r,onEntered:n,transition:i}){const[o,s]=_.useState(!t);t&&o&&s(!1);const l=_$({in:!!t,onTransition:c=>{const f=()=>{c.isStale()||(c.in?n==null||n(c.element,c.initial):(s(!0),r==null||r(c.element)))};Promise.resolve(i(c)).then(f,d=>{throw c.in||s(!0),d})}}),a=ri(l,e.ref);return o&&!t?null:_.cloneElement(e,{ref:a})}function Tg(e,t,r){return e?k.jsx(x$,Object.assign({},r,{component:e})):t?k.jsx(k$,Object.assign({},r,{transition:t})):k.jsx(p$,Object.assign({},r))}function C$(e){return e.code==="Escape"||e.keyCode===27}const S$=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function $$(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}let id;function E$(e){return id||(id=new sp({ownerDocument:e==null?void 0:e.document})),id}function A$(e){const t=eu(),r=e||E$(t),n=_.useRef({dialog:null,backdrop:null});return Object.assign(n.current,{add:()=>r.add(n.current),remove:()=>r.remove(n.current),isTopModal:()=>r.isTopModal(n.current),setDialogRef:_.useCallback(i=>{n.current.dialog=i},[]),setBackdropRef:_.useCallback(i=>{n.current.backdrop=i},[])})}const Bb=_.forwardRef((e,t)=>{let{show:r=!1,role:n="dialog",className:i,style:o,children:s,backdrop:l=!0,keyboard:a=!0,onBackdropClick:c,onEscapeKeyDown:f,transition:d,runTransition:h,backdropTransition:p,runBackdropTransition:v,autoFocus:x=!0,enforceFocus:S=!0,restoreFocus:b=!0,restoreFocusOptions:m,renderDialog:y,renderBackdrop:w=ye=>k.jsx("div",Object.assign({},ye)),manager:C,container:$,onShow:E,onHide:A=()=>{},onExit:T,onExited:z,onExiting:N,onEnter:D,onEntering:Y,onEntered:Z}=e,re=$$(e,S$);const J=eu(),oe=d$($),L=A$(C),K=Mb(),H=jb(r),[ne,ue]=_.useState(!r),Be=_.useRef(null);_.useImperativeHandle(t,()=>L,[L]),Yo&&!H&&r&&(Be.current=rd(J==null?void 0:J.document)),r&&ne&&ue(!1);const Ee=je(()=>{if(L.add(),fn.current=zn(document,"keydown",sr),Mr.current=zn(document,"focus",()=>setTimeout(nt),!0),E&&E(),x){var ye,ii;const vn=rd((ye=(ii=L.dialog)==null?void 0:ii.ownerDocument)!=null?ye:J==null?void 0:J.document);L.dialog&&vn&&!_c(L.dialog,vn)&&(Be.current=vn,L.dialog.focus())}}),Qe=je(()=>{if(L.remove(),fn.current==null||fn.current(),Mr.current==null||Mr.current(),b){var ye;(ye=Be.current)==null||ye.focus==null||ye.focus(m),Be.current=null}});_.useEffect(()=>{!r||!oe||Ee()},[r,oe,Ee]),_.useEffect(()=>{ne&&Qe()},[ne,Qe]),Nb(()=>{Qe()});const nt=je(()=>{if(!S||!K()||!L.isTopModal())return;const ye=rd(J==null?void 0:J.document);L.dialog&&ye&&!_c(L.dialog,ye)&&L.dialog.focus()}),kt=je(ye=>{ye.target===ye.currentTarget&&(c==null||c(ye),l===!0&&A())}),sr=je(ye=>{a&&C$(ye)&&L.isTopModal()&&(f==null||f(ye),ye.defaultPrevented||A())}),Mr=_.useRef(),fn=_.useRef(),hn=(...ye)=>{ue(!0),z==null||z(...ye)};if(!oe)return null;const pn=Object.assign({role:n,ref:L.setDialogRef,"aria-modal":n==="dialog"?!0:void 0},re,{style:o,className:i,tabIndex:-1});let mn=y?y(pn):k.jsx("div",Object.assign({},pn,{children:_.cloneElement(s,{role:"document"})}));mn=Tg(d,h,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:T,onExiting:N,onExited:hn,onEnter:D,onEntering:Y,onEntered:Z,children:mn});let gn=null;return l&&(gn=w({ref:L.setBackdropRef,onClick:kt}),gn=Tg(p,v,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:gn})),k.jsx(k.Fragment,{children:co.createPortal(k.jsxs(k.Fragment,{children:[gn,mn]}),oe)})});Bb.displayName="Modal";const z$=Object.assign(Bb,{Manager:sp});function T$(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function O$(e,t){e.classList?e.classList.add(t):T$(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}var P$=Function.prototype.bind.call(Function.prototype.call,[].slice);function Ur(e,t){return P$(e.querySelectorAll(t))}function Og(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function L$(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Og(e.className,t):e.setAttribute("class",Og(e.className&&e.className.baseVal||"",t))}const Ki={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class I$ extends sp{adjustAndStore(t,r,n){const i=r.style[t];r.dataset[t]=i,xi(r,{[t]:`${parseFloat(xi(r,t))+n}px`})}restore(t,r){const n=r.dataset[t];n!==void 0&&(delete r.dataset[t],xi(r,{[t]:n}))}setContainerStyle(t){super.setContainerStyle(t);const r=this.getElement();if(O$(r,"modal-open"),!t.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Ur(r,Ki.FIXED_CONTENT).forEach(o=>this.adjustAndStore(n,o,t.scrollBarWidth)),Ur(r,Ki.STICKY_CONTENT).forEach(o=>this.adjustAndStore(i,o,-t.scrollBarWidth)),Ur(r,Ki.NAVBAR_TOGGLER).forEach(o=>this.adjustAndStore(i,o,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const r=this.getElement();L$(r,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Ur(r,Ki.FIXED_CONTENT).forEach(o=>this.restore(n,o)),Ur(r,Ki.STICKY_CONTENT).forEach(o=>this.restore(i,o)),Ur(r,Ki.NAVBAR_TOGGLER).forEach(o=>this.restore(i,o))}}let od;function R$(e){return od||(od=new I$(e)),od}function Vb(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Sf(e,t){return Sf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Sf(e,t)}function N$(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Sf(e,t)}var Hb={exports:{}},D$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",M$=D$,j$=M$;function Ub(){}function Wb(){}Wb.resetWarningCache=Ub;var F$=function(){function e(n,i,o,s,l,a){if(a!==j$){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Wb,resetWarningCache:Ub};return r.PropTypes=r,r};Hb.exports=F$();var B$=Hb.exports;const M=Ea(B$),Pg={disabled:!1},Kb=ot.createContext(null);var V$=function(t){return t.scrollTop},bs="unmounted",li="exited",_n="entering",ui="entered",$f="exiting",cn=function(e){N$(t,e);function t(n,i){var o;o=e.call(this,n,i)||this;var s=i,l=s&&!s.isMounting?n.enter:n.appear,a;return o.appearStatus=null,n.in?l?(a=li,o.appearStatus=_n):a=ui:n.unmountOnExit||n.mountOnEnter?a=bs:a=li,o.state={status:a},o.nextCallback=null,o}t.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===bs?{status:li}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==_n&&s!==ui&&(o=_n):(s===_n||s===ui)&&(o=$f)}this.updateStatus(!1,o)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var i=this.props.timeout,o,s,l;return o=s=l=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,l=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:l}},r.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===_n){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:co.findDOMNode(this);s&&V$(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===li&&this.setState({status:bs})},r.performEnter=function(i){var o=this,s=this.props.enter,l=this.context?this.context.isMounting:i,a=this.props.nodeRef?[l]:[co.findDOMNode(this),l],c=a[0],f=a[1],d=this.getTimeouts(),h=l?d.appear:d.enter;if(!i&&!s||Pg.disabled){this.safeSetState({status:ui},function(){o.props.onEntered(c)});return}this.props.onEnter(c,f),this.safeSetState({status:_n},function(){o.props.onEntering(c,f),o.onTransitionEnd(h,function(){o.safeSetState({status:ui},function(){o.props.onEntered(c,f)})})})},r.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),l=this.props.nodeRef?void 0:co.findDOMNode(this);if(!o||Pg.disabled){this.safeSetState({status:li},function(){i.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:$f},function(){i.props.onExiting(l),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:li},function(){i.props.onExited(l)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},r.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(l){s&&(s=!1,o.nextCallback=null,i(l))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:co.findDOMNode(this),l=i==null&&!this.props.addEndListener;if(!s||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=a[0],f=a[1];this.props.addEndListener(c,f)}i!=null&&setTimeout(this.nextCallback,i)},r.render=function(){var i=this.state.status;if(i===bs)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var l=Vb(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ot.createElement(Kb.Provider,{value:null},typeof s=="function"?s(i,l):ot.cloneElement(ot.Children.only(s),l))},t}(ot.Component);cn.contextType=Kb;cn.propTypes={};function Yi(){}cn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Yi,onEntering:Yi,onEntered:Yi,onExit:Yi,onExiting:Yi,onExited:Yi};cn.UNMOUNTED=bs;cn.EXITED=li;cn.ENTERING=_n;cn.ENTERED=ui;cn.EXITING=$f;const H$=cn;function Lg(e,t){const r=xi(e,t)||"",n=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*n}function U$(e,t){const r=Lg(e,"transitionDuration"),n=Lg(e,"transitionDelay"),i=Db(e,o=>{o.target===e&&(i(),t(o))},r+n)}function W$(e){e.offsetHeight}function K$(e){return e&&"setState"in e?co.findDOMNode(e):e??null}const Y$=ot.forwardRef(({onEnter:e,onEntering:t,onEntered:r,onExit:n,onExiting:i,onExited:o,addEndListener:s,children:l,childRef:a,...c},f)=>{const d=_.useRef(null),h=ri(d,a),p=$=>{h(K$($))},v=$=>E=>{$&&d.current&&$(d.current,E)},x=_.useCallback(v(e),[e]),S=_.useCallback(v(t),[t]),b=_.useCallback(v(r),[r]),m=_.useCallback(v(n),[n]),y=_.useCallback(v(i),[i]),w=_.useCallback(v(o),[o]),C=_.useCallback(v(s),[s]);return k.jsx(H$,{ref:f,...c,onEnter:x,onEntered:b,onEntering:S,onExit:m,onExited:w,onExiting:y,addEndListener:C,nodeRef:d,children:typeof l=="function"?($,E)=>l($,{...E,ref:p}):ot.cloneElement(l,{ref:p})})}),X$=Y$,G$={[_n]:"show",[ui]:"show"},Yb=_.forwardRef(({className:e,children:t,transitionClasses:r={},onEnter:n,...i},o)=>{const s={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...i},l=_.useCallback((a,c)=>{W$(a),n==null||n(a,c)},[n]);return k.jsx(X$,{ref:o,addEndListener:U$,...s,onEnter:l,childRef:t.ref,children:(a,c)=>_.cloneElement(t,{...c,className:Q("fade",e,t.props.className,G$[a],r[a])})})});Yb.displayName="Fade";const Xb=Yb,Gb=_.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=ee(t,"modal-body"),k.jsx(r,{ref:i,className:Q(e,t),...n})));Gb.displayName="ModalBody";const q$=Gb,Q$=_.createContext({onHide(){}}),qb=Q$,Qb=_.forwardRef(({bsPrefix:e,className:t,contentClassName:r,centered:n,size:i,fullscreen:o,children:s,scrollable:l,...a},c)=>{e=ee(e,"modal");const f=`${e}-dialog`,d=typeof o=="string"?`${e}-fullscreen-${o}`:`${e}-fullscreen`;return k.jsx("div",{...a,ref:c,className:Q(f,t,i&&`${e}-${i}`,n&&`${f}-centered`,l&&`${f}-scrollable`,o&&d),children:k.jsx("div",{className:Q(`${e}-content`,r),children:s})})});Qb.displayName="ModalDialog";const Zb=Qb,Jb=_.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=ee(t,"modal-footer"),k.jsx(r,{ref:i,className:Q(e,t),...n})));Jb.displayName="ModalFooter";const Z$=Jb,J$={"aria-label":M.string,onClick:M.func,variant:M.oneOf(["white"])},ap=_.forwardRef(({className:e,variant:t,"aria-label":r="Close",...n},i)=>k.jsx("button",{ref:i,type:"button",className:Q("btn-close",t&&`btn-close-${t}`,e),"aria-label":r,...n}));ap.displayName="CloseButton";ap.propTypes=J$;const e4=ap,t4=_.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:r=!1,onHide:n,children:i,...o},s)=>{const l=_.useContext(qb),a=je(()=>{l==null||l.onHide(),n==null||n()});return k.jsxs("div",{ref:s,...o,children:[i,r&&k.jsx(e4,{"aria-label":e,variant:t,onClick:a})]})}),r4=t4,e1=_.forwardRef(({bsPrefix:e,className:t,closeLabel:r="Close",closeButton:n=!1,...i},o)=>(e=ee(e,"modal-header"),k.jsx(r4,{ref:o,...i,className:Q(t,e),closeLabel:r,closeButton:n})));e1.displayName="ModalHeader";const n4=e1,lp=e=>_.forwardRef((t,r)=>k.jsx("div",{...t,ref:r,className:Q(t.className,e)})),i4=lp("h4"),t1=_.forwardRef(({className:e,bsPrefix:t,as:r=i4,...n},i)=>(t=ee(t,"modal-title"),k.jsx(r,{ref:i,className:Q(e,t),...n})));t1.displayName="ModalTitle";const o4=t1;function s4(e){return k.jsx(Xb,{...e,timeout:null})}function a4(e){return k.jsx(Xb,{...e,timeout:null})}const r1=_.forwardRef(({bsPrefix:e,className:t,style:r,dialogClassName:n,contentClassName:i,children:o,dialogAs:s=Zb,"data-bs-theme":l,"aria-labelledby":a,"aria-describedby":c,"aria-label":f,show:d=!1,animation:h=!0,backdrop:p=!0,keyboard:v=!0,onEscapeKeyDown:x,onShow:S,onHide:b,container:m,autoFocus:y=!0,enforceFocus:w=!0,restoreFocus:C=!0,restoreFocusOptions:$,onEntered:E,onExit:A,onExiting:T,onEnter:z,onEntering:N,onExited:D,backdropClassName:Y,manager:Z,...re},J)=>{const[oe,L]=_.useState({}),[K,H]=_.useState(!1),ne=_.useRef(!1),ue=_.useRef(!1),Be=_.useRef(null),[Ee,Qe]=Rb(),nt=ri(J,Qe),kt=je(b),sr=Lb();e=ee(e,"modal");const Mr=_.useMemo(()=>({onHide:kt}),[kt]);function fn(){return Z||R$({isRTL:sr})}function hn(le){if(!Yo)return;const Fr=fn().getScrollbarWidth()>0,qo=le.scrollHeight>La(le).documentElement.clientHeight;L({paddingRight:Fr&&!qo?Eg():void 0,paddingLeft:!Fr&&qo?Eg():void 0})}const pn=je(()=>{Ee&&hn(Ee.dialog)});Nb(()=>{kf(window,"resize",pn),Be.current==null||Be.current()});const mn=()=>{ne.current=!0},gn=le=>{ne.current&&Ee&&le.target===Ee.dialog&&(ue.current=!0),ne.current=!1},ye=()=>{H(!0),Be.current=Db(Ee.dialog,()=>{H(!1)})},ii=le=>{le.target===le.currentTarget&&ye()},vn=le=>{if(p==="static"){ii(le);return}if(ue.current||le.target!==le.currentTarget){ue.current=!1;return}b==null||b()},hu=le=>{v?x==null||x(le):(le.preventDefault(),p==="static"&&ye())},pu=(le,Fr)=>{le&&hn(le),z==null||z(le,Fr)},jr=le=>{Be.current==null||Be.current(),A==null||A(le)},Vi=(le,Fr)=>{N==null||N(le,Fr),op(window,"resize",pn)},Ha=le=>{le&&(le.style.display=""),D==null||D(le),kf(window,"resize",pn)},Ua=_.useCallback(le=>k.jsx("div",{...le,className:Q(`${e}-backdrop`,Y,!h&&"show")}),[h,Y,e]),Hi={...r,...oe};Hi.display="block";const Wa=le=>k.jsx("div",{role:"dialog",...le,style:Hi,className:Q(t,e,K&&`${e}-static`,!h&&"show"),onClick:p?vn:void 0,onMouseUp:gn,"data-bs-theme":l,"aria-label":f,"aria-labelledby":a,"aria-describedby":c,children:k.jsx(s,{...re,onMouseDown:mn,className:n,contentClassName:i,children:o})});return k.jsx(qb.Provider,{value:Mr,children:k.jsx(z$,{show:d,ref:nt,backdrop:p,container:m,keyboard:!0,autoFocus:y,enforceFocus:w,restoreFocus:C,restoreFocusOptions:$,onEscapeKeyDown:hu,onShow:S,onHide:b,onEnter:pu,onEntering:Vi,onEntered:E,onExit:jr,onExiting:T,onExited:Ha,manager:fn(),transition:h?s4:void 0,backdropTransition:h?a4:void 0,renderBackdrop:Ua,renderDialog:Wa})})});r1.displayName="Modal";const fs=Object.assign(r1,{Body:q$,Header:n4,Title:o4,Footer:Z$,Dialog:Zb,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Ia=({show:e,title:t,onHide:r,children:n,primaryBtnText:i,onPrimaryBtnClick:o})=>k.jsxs(fs,{show:e,onHide:r,children:[k.jsx(fs.Header,{closeButton:!0,children:t&&k.jsx(fs.Title,{children:t})}),k.jsx(fs.Body,{children:n}),k.jsxs(fs.Footer,{children:[k.jsx(We,{variant:"secondary",onClick:r,children:"Hætta við"}),k.jsx(We,{variant:"primary",onClick:o,children:i??"Áfram"})]})]}),Ig="time";function l4(){const[e,t]=_.useState(()=>Number(localStorage.getItem(Ig))),[r,n]=_.useState(0),i=s=>{n(s)},o=s=>{const l=e+s;return t(l),l};return _.useEffect(()=>{let s;const a=r>4?4:r,c=a===4?r/a:1;return r&&(s=setInterval(()=>t(f=>{const d=f+c;return localStorage.setItem(Ig,d.toString()),d}),1e3/a)),()=>clearInterval(s)},[r]),[e,r!==0,i,o]}class c4{constructor(t){Mp(this,"key");this.key=`${t}-sequence`}get nextValue(){const t=Number(localStorage.getItem(this.key)||1);return localStorage.setItem(this.key,`${t+1}`),t}}function hs(e){const t=new c4(e),[r,n]=_.useState(JSON.parse(localStorage.getItem(e)||"[]"));return{list:r,add:s=>{const l={id:t.nextValue,...s};return n(a=>{const c=[...a,l];return localStorage.setItem(e,JSON.stringify(c)),c}),l.id},remove:s=>{n(l=>{const a=l.filter(c=>c.id!==s);return localStorage.setItem(e,JSON.stringify(a)),a})}}}const Qt={seconds:{name:"sekúndur",seconds:1},minutes:{name:"mínútur",seconds:60},hours:{name:"klukkutímar",seconds:3600},days:{name:"dagar",seconds:86400},months:{name:"mánuðir",seconds:2592e3},years:{name:"ár",seconds:31104e3}},un=_.createContext({}),Bi=_.createContext({}),tu=_.createContext({}),ru=_.createContext({}),nu=_.createContext({}),iu=_.createContext({}),u4=[{name:"Spilunartími",speed:2},{name:"Leita að loot-i",speed:60},{name:"Montosh",speed:Qt.hours.seconds*8}],d4=[{name:"Long rest",duration:Qt.hours.seconds*8,timer:{name:"Seinast sofið",finishAfterSeconds:Qt.days.seconds}},{name:"Short rest",duration:Qt.minutes.seconds*30}],f4=[{name:"Borðað"}];function h4({children:e}){const t=localStorage.length===0,[r,n,i,o]=l4(),s=hs("logs"),l=hs("timers"),a=hs("speeds"),c=hs("durations"),f=hs("events");if(t){for(const d of u4)a.add(d);for(const{timer:d,...h}of d4){const p=c.add(h);d&&l.add({...d,durationId:p})}for(const d of f4)f.add(d)}return k.jsx(un.Provider,{value:{time:r,isPlaying:n,setPlaySpeed:i,addTime:o},children:k.jsx(Bi.Provider,{value:s,children:k.jsx(tu.Provider,{value:l,children:k.jsx(ru.Provider,{value:a,children:k.jsx(nu.Provider,{value:c,children:k.jsx(iu.Provider,{value:f,children:e})})})})})})}const p4={type:M.string,tooltip:M.bool,as:M.elementType},cp=_.forwardRef(({as:e="div",className:t,type:r="valid",tooltip:n=!1,...i},o)=>k.jsx(e,{...i,ref:o,className:Q(t,`${r}-${n?"tooltip":"feedback"}`)}));cp.displayName="Feedback";cp.propTypes=p4;const n1=cp,m4=_.createContext({}),Jr=m4,i1=_.forwardRef(({id:e,bsPrefix:t,className:r,type:n="checkbox",isValid:i=!1,isInvalid:o=!1,as:s="input",...l},a)=>{const{controlId:c}=_.useContext(Jr);return t=ee(t,"form-check-input"),k.jsx(s,{...l,ref:a,type:n,id:e||c,className:Q(r,t,i&&"is-valid",o&&"is-invalid")})});i1.displayName="FormCheckInput";const ou=i1,o1=_.forwardRef(({bsPrefix:e,className:t,htmlFor:r,...n},i)=>{const{controlId:o}=_.useContext(Jr);return e=ee(e,"form-check-label"),k.jsx("label",{...n,ref:i,htmlFor:r||o,className:Q(t,e)})});o1.displayName="FormCheckLabel";const Ef=o1;function g4(e,t){let r=0;return _.Children.map(e,n=>_.isValidElement(n)?t(n,r++):n)}function v4(e,t){return _.Children.toArray(e).some(r=>_.isValidElement(r)&&r.type===t)}const s1=_.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:n=!1,reverse:i=!1,disabled:o=!1,isValid:s=!1,isInvalid:l=!1,feedbackTooltip:a=!1,feedback:c,feedbackType:f,className:d,style:h,title:p="",type:v="checkbox",label:x,children:S,as:b="input",...m},y)=>{t=ee(t,"form-check"),r=ee(r,"form-switch");const{controlId:w}=_.useContext(Jr),C=_.useMemo(()=>({controlId:e||w}),[w,e]),$=!S&&x!=null&&x!==!1||v4(S,Ef),E=k.jsx(ou,{...m,type:v==="switch"?"checkbox":v,ref:y,isValid:s,isInvalid:l,disabled:o,as:b});return k.jsx(Jr.Provider,{value:C,children:k.jsx("div",{style:h,className:Q(d,$&&t,n&&`${t}-inline`,i&&`${t}-reverse`,v==="switch"&&r),children:S||k.jsxs(k.Fragment,{children:[E,$&&k.jsx(Ef,{title:p,children:x}),c&&k.jsx(n1,{type:f,tooltip:a,children:c})]})})})});s1.displayName="FormCheck";const kc=Object.assign(s1,{Input:ou,Label:Ef});var y4=function(){},b4=y4;const w4=Ea(b4),a1=_.forwardRef(({bsPrefix:e,type:t,size:r,htmlSize:n,id:i,className:o,isValid:s=!1,isInvalid:l=!1,plaintext:a,readOnly:c,as:f="input",...d},h)=>{const{controlId:p}=_.useContext(Jr);return e=ee(e,"form-control"),k.jsx(f,{...d,type:t,size:n,ref:h,readOnly:c,id:i||p,className:Q(o,a?`${e}-plaintext`:e,r&&`${e}-${r}`,t==="color"&&`${e}-color`,s&&"is-valid",l&&"is-invalid")})});a1.displayName="FormControl";const x4=Object.assign(a1,{Feedback:n1}),l1=_.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=ee(t,"form-floating"),k.jsx(r,{ref:i,className:Q(e,t),...n})));l1.displayName="FormFloating";const _4=l1,c1=_.forwardRef(({controlId:e,as:t="div",...r},n)=>{const i=_.useMemo(()=>({controlId:e}),[e]);return k.jsx(Jr.Provider,{value:i,children:k.jsx(t,{...r,ref:n})})});c1.displayName="FormGroup";const u1=c1;function k4({as:e,bsPrefix:t,className:r,...n}){t=ee(t,"col");const i=W3(),o=K3(),s=[],l=[];return i.forEach(a=>{const c=n[a];delete n[a];let f,d,h;typeof c=="object"&&c!=null?{span:f,offset:d,order:h}=c:f=c;const p=a!==o?`-${a}`:"";f&&s.push(f===!0?`${t}${p}`:`${t}${p}-${f}`),h!=null&&l.push(`order${p}-${h}`),d!=null&&l.push(`offset${p}-${d}`)}),[{...n,className:Q(r,...s,...l)},{as:e,bsPrefix:t,spans:s}]}const d1=_.forwardRef((e,t)=>{const[{className:r,...n},{as:i="div",bsPrefix:o,spans:s}]=k4(e);return k.jsx(i,{...n,ref:t,className:Q(r,!s.length&&o)})});d1.displayName="Col";const C4=d1,f1=_.forwardRef(({as:e="label",bsPrefix:t,column:r=!1,visuallyHidden:n=!1,className:i,htmlFor:o,...s},l)=>{const{controlId:a}=_.useContext(Jr);t=ee(t,"form-label");let c="col-form-label";typeof r=="string"&&(c=`${c} ${c}-${r}`);const f=Q(i,t,n&&"visually-hidden",r&&c);return o=o||a,r?k.jsx(C4,{ref:l,as:"label",className:f,htmlFor:o,...s}):k.jsx(e,{ref:l,className:f,htmlFor:o,...s})});f1.displayName="FormLabel";const S4=f1,h1=_.forwardRef(({bsPrefix:e,className:t,id:r,...n},i)=>{const{controlId:o}=_.useContext(Jr);return e=ee(e,"form-range"),k.jsx("input",{...n,type:"range",ref:i,className:Q(t,e),id:r||o})});h1.displayName="FormRange";const $4=h1,p1=_.forwardRef(({bsPrefix:e,size:t,htmlSize:r,className:n,isValid:i=!1,isInvalid:o=!1,id:s,...l},a)=>{const{controlId:c}=_.useContext(Jr);return e=ee(e,"form-select"),k.jsx("select",{...l,size:r,ref:a,className:Q(n,e,t&&`${e}-${t}`,i&&"is-valid",o&&"is-invalid"),id:s||c})});p1.displayName="FormSelect";const E4=p1,m1=_.forwardRef(({bsPrefix:e,className:t,as:r="small",muted:n,...i},o)=>(e=ee(e,"form-text"),k.jsx(r,{...i,ref:o,className:Q(t,e,n&&"text-muted")})));m1.displayName="FormText";const A4=m1,g1=_.forwardRef((e,t)=>k.jsx(kc,{...e,ref:t,type:"switch"}));g1.displayName="Switch";const z4=Object.assign(g1,{Input:kc.Input,Label:kc.Label}),v1=_.forwardRef(({bsPrefix:e,className:t,children:r,controlId:n,label:i,...o},s)=>(e=ee(e,"form-floating"),k.jsxs(u1,{ref:s,className:Q(t,e),controlId:n,...o,children:[r,k.jsx("label",{htmlFor:n,children:i})]})));v1.displayName="FloatingLabel";const T4=v1,O4={_ref:M.any,validated:M.bool,as:M.elementType},up=_.forwardRef(({className:e,validated:t,as:r="form",...n},i)=>k.jsx(r,{...n,ref:i,className:Q(e,t&&"was-validated")}));up.displayName="Form";up.propTypes=O4;const gi=Object.assign(up,{Group:u1,Control:x4,Floating:_4,Check:kc,Switch:z4,Label:S4,Text:A4,Range:$4,Select:E4,FloatingLabel:T4});function Po({type:e,label:t,value:r,onChange:n,placeholder:i,text:o,autoFocus:s}){const l=({currentTarget:a})=>{e==="number"?a.value?n((Number(a.value)||r)??0):n(void 0):n(a.value)};return k.jsxs(gi.Group,{children:[t&&k.jsx(gi.Label,{children:t}),k.jsx(gi.Control,{autoFocus:s,type:e==="number"?"text":e,placeholder:i,value:r,onChange:l}),o&&k.jsx(gi.Text,{className:"text-muted",children:o})]})}function P4({show:e,onHide:t}){const[r,n]=_.useState(""),{add:i}=_.useContext(Bi),{time:o}=_.useContext(un),s=()=>{i({text:r,inGameTime:o}),l()},l=()=>{n(""),t()};return k.jsx(Ia,{show:e,title:"Skrá nýjan atburð",onHide:l,primaryBtnText:"Vista",onPrimaryBtnClick:s,children:k.jsx(Po,{label:"Heiti atburðar",value:r,onChange:n,autoFocus:!0})})}function Rg(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Rg(Object(r),!0).forEach(function(n){Xe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Rg(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Cc(e){"@babel/helpers - typeof";return Cc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cc(e)}function L4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ng(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I4(e,t,r){return t&&Ng(e.prototype,t),r&&Ng(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dp(e,t){return N4(e)||M4(e,t)||y1(e,t)||F4()}function Ra(e){return R4(e)||D4(e)||y1(e)||j4()}function R4(e){if(Array.isArray(e))return Af(e)}function N4(e){if(Array.isArray(e))return e}function D4(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function M4(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],i=!0,o=!1,s,l;try{for(r=r.call(e);!(i=(s=r.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(a){o=!0,l=a}finally{try{!i&&r.return!=null&&r.return()}finally{if(o)throw l}}return n}}function y1(e,t){if(e){if(typeof e=="string")return Af(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Af(e,t)}}function Af(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Dg=function(){},fp={},b1={},w1=null,x1={mark:Dg,measure:Dg};try{typeof window<"u"&&(fp=window),typeof document<"u"&&(b1=document),typeof MutationObserver<"u"&&(w1=MutationObserver),typeof performance<"u"&&(x1=performance)}catch{}var B4=fp.navigator||{},Mg=B4.userAgent,jg=Mg===void 0?"":Mg,Yn=fp,ke=b1,Fg=w1,vl=x1;Yn.document;var dn=!!ke.documentElement&&!!ke.head&&typeof ke.addEventListener=="function"&&typeof ke.createElement=="function",_1=~jg.indexOf("MSIE")||~jg.indexOf("Trident/"),yl,bl,wl,xl,_l,en="___FONT_AWESOME___",zf=16,k1="fa",C1="svg-inline--fa",Oi="data-fa-i2svg",Tf="data-fa-pseudo-element",V4="data-fa-pseudo-element-pending",hp="data-prefix",pp="data-icon",Bg="fontawesome-i2svg",H4="async",U4=["HTML","HEAD","STYLE","SCRIPT"],S1=function(){try{return!0}catch{return!1}}(),xe="classic",Ie="sharp",mp=[xe,Ie];function Na(e){return new Proxy(e,{get:function(r,n){return n in r?r[n]:r[xe]}})}var ca=Na((yl={},Xe(yl,xe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Xe(yl,Ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),yl)),ua=Na((bl={},Xe(bl,xe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Xe(bl,Ie,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bl)),da=Na((wl={},Xe(wl,xe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Xe(wl,Ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),wl)),W4=Na((xl={},Xe(xl,xe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Xe(xl,Ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),xl)),K4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,$1="fa-layers-text",Y4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,X4=Na((_l={},Xe(_l,xe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Xe(_l,Ie,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),_l)),E1=[1,2,3,4,5,6,7,8,9,10],G4=E1.concat([11,12,13,14,15,16,17,18,19,20]),q4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fa=new Set;Object.keys(ua[xe]).map(fa.add.bind(fa));Object.keys(ua[Ie]).map(fa.add.bind(fa));var Q4=[].concat(mp,Ra(fa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vi.GROUP,vi.SWAP_OPACITY,vi.PRIMARY,vi.SECONDARY]).concat(E1.map(function(e){return"".concat(e,"x")})).concat(G4.map(function(e){return"w-".concat(e)})),Ms=Yn.FontAwesomeConfig||{};function Z4(e){var t=ke.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function J4(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ke&&typeof ke.querySelector=="function"){var eE=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];eE.forEach(function(e){var t=dp(e,2),r=t[0],n=t[1],i=J4(Z4(r));i!=null&&(Ms[n]=i)})}var A1={styleDefault:"solid",familyDefault:"classic",cssPrefix:k1,replacementClass:C1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ms.familyPrefix&&(Ms.cssPrefix=Ms.familyPrefix);var Lo=j(j({},A1),Ms);Lo.autoReplaceSvg||(Lo.observeMutations=!1);var U={};Object.keys(A1).forEach(function(e){Object.defineProperty(U,e,{enumerable:!0,set:function(r){Lo[e]=r,js.forEach(function(n){return n(U)})},get:function(){return Lo[e]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(t){Lo.cssPrefix=t,js.forEach(function(r){return r(U)})},get:function(){return Lo.cssPrefix}});Yn.FontAwesomeConfig=U;var js=[];function tE(e){return js.push(e),function(){js.splice(js.indexOf(e),1)}}var bn=zf,Sr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function rE(e){if(!(!e||!dn)){var t=ke.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=ke.head.childNodes,n=null,i=r.length-1;i>-1;i--){var o=r[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=o)}return ke.head.insertBefore(t,n),e}}var nE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ha(){for(var e=12,t="";e-- >0;)t+=nE[Math.random()*62|0];return t}function Go(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function gp(e){return e.classList?Go(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function z1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function iE(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(z1(e[r]),'" ')},"").trim()}function su(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function vp(e){return e.size!==Sr.size||e.x!==Sr.x||e.y!==Sr.y||e.rotate!==Sr.rotate||e.flipX||e.flipY}function oE(e){var t=e.transform,r=e.containerWidth,n=e.iconWidth,i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),a={transform:"".concat(o," ").concat(s," ").concat(l)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:a,path:c}}function sE(e){var t=e.transform,r=e.width,n=r===void 0?zf:r,i=e.height,o=i===void 0?zf:i,s=e.startCentered,l=s===void 0?!1:s,a="";return l&&_1?a+="translate(".concat(t.x/bn-n/2,"em, ").concat(t.y/bn-o/2,"em) "):l?a+="translate(calc(-50% + ".concat(t.x/bn,"em), calc(-50% + ").concat(t.y/bn,"em)) "):a+="translate(".concat(t.x/bn,"em, ").concat(t.y/bn,"em) "),a+="scale(".concat(t.size/bn*(t.flipX?-1:1),", ").concat(t.size/bn*(t.flipY?-1:1),") "),a+="rotate(".concat(t.rotate,"deg) "),a}var aE=`:root, :host {
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
}`;function T1(){var e=k1,t=C1,r=U.cssPrefix,n=U.replacementClass,i=aE;if(r!==e||n!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(r,"-")).replace(s,"--".concat(r,"-")).replace(l,".".concat(n))}return i}var Vg=!1;function sd(){U.autoAddCss&&!Vg&&(rE(T1()),Vg=!0)}var lE={mixout:function(){return{dom:{css:T1,insertCss:sd}}},hooks:function(){return{beforeDOMElementCreation:function(){sd()},beforeI2svg:function(){sd()}}}},tn=Yn||{};tn[en]||(tn[en]={});tn[en].styles||(tn[en].styles={});tn[en].hooks||(tn[en].hooks={});tn[en].shims||(tn[en].shims=[]);var fr=tn[en],O1=[],cE=function e(){ke.removeEventListener("DOMContentLoaded",e),Sc=1,O1.map(function(t){return t()})},Sc=!1;dn&&(Sc=(ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ke.readyState),Sc||ke.addEventListener("DOMContentLoaded",cE));function uE(e){dn&&(Sc?setTimeout(e,0):O1.push(e))}function Da(e){var t=e.tag,r=e.attributes,n=r===void 0?{}:r,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?z1(e):"<".concat(t," ").concat(iE(n),">").concat(o.map(Da).join(""),"</").concat(t,">")}function Hg(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}var dE=function(t,r){return function(n,i,o,s){return t.call(r,n,i,o,s)}},ad=function(t,r,n,i){var o=Object.keys(t),s=o.length,l=i!==void 0?dE(r,i):r,a,c,f;for(n===void 0?(a=1,f=t[o[0]]):(a=0,f=n);a<s;a++)c=o[a],f=l(f,t[c],c,t);return f};function fE(e){for(var t=[],r=0,n=e.length;r<n;){var i=e.charCodeAt(r++);if(i>=55296&&i<=56319&&r<n){var o=e.charCodeAt(r++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),r--)}else t.push(i)}return t}function Of(e){var t=fE(e);return t.length===1?t[0].toString(16):null}function hE(e,t){var r=e.length,n=e.charCodeAt(t),i;return n>=55296&&n<=56319&&r>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function Ug(e){return Object.keys(e).reduce(function(t,r){var n=e[r],i=!!n.icon;return i?t[n.iconName]=n.icon:t[r]=n,t},{})}function Pf(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.skipHooks,i=n===void 0?!1:n,o=Ug(t);typeof fr.hooks.addPack=="function"&&!i?fr.hooks.addPack(e,Ug(t)):fr.styles[e]=j(j({},fr.styles[e]||{}),o),e==="fas"&&Pf("fa",t)}var kl,Cl,Sl,uo=fr.styles,pE=fr.shims,mE=(kl={},Xe(kl,xe,Object.values(da[xe])),Xe(kl,Ie,Object.values(da[Ie])),kl),yp=null,P1={},L1={},I1={},R1={},N1={},gE=(Cl={},Xe(Cl,xe,Object.keys(ca[xe])),Xe(Cl,Ie,Object.keys(ca[Ie])),Cl);function vE(e){return~Q4.indexOf(e)}function yE(e,t){var r=t.split("-"),n=r[0],i=r.slice(1).join("-");return n===e&&i!==""&&!vE(i)?i:null}var D1=function(){var t=function(o){return ad(uo,function(s,l,a){return s[a]=ad(l,o,{}),s},{})};P1=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var l=o[2].filter(function(a){return typeof a=="number"});l.forEach(function(a){i[a.toString(16)]=s})}return i}),L1=t(function(i,o,s){if(i[s]=s,o[2]){var l=o[2].filter(function(a){return typeof a=="string"});l.forEach(function(a){i[a]=s})}return i}),N1=t(function(i,o,s){var l=o[2];return i[s]=s,l.forEach(function(a){i[a]=s}),i});var r="far"in uo||U.autoFetchSvg,n=ad(pE,function(i,o){var s=o[0],l=o[1],a=o[2];return l==="far"&&!r&&(l="fas"),typeof s=="string"&&(i.names[s]={prefix:l,iconName:a}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:l,iconName:a}),i},{names:{},unicodes:{}});I1=n.names,R1=n.unicodes,yp=au(U.styleDefault,{family:U.familyDefault})};tE(function(e){yp=au(e.styleDefault,{family:U.familyDefault})});D1();function bp(e,t){return(P1[e]||{})[t]}function bE(e,t){return(L1[e]||{})[t]}function yi(e,t){return(N1[e]||{})[t]}function M1(e){return I1[e]||{prefix:null,iconName:null}}function wE(e){var t=R1[e],r=bp("fas",e);return t||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Xn(){return yp}var wp=function(){return{prefix:null,iconName:null,rest:[]}};function au(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.family,n=r===void 0?xe:r,i=ca[n][e],o=ua[n][e]||ua[n][i],s=e in fr.styles?e:null;return o||s||null}var Wg=(Sl={},Xe(Sl,xe,Object.keys(da[xe])),Xe(Sl,Ie,Object.keys(da[Ie])),Sl);function lu(e){var t,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.skipLookups,i=n===void 0?!1:n,o=(t={},Xe(t,xe,"".concat(U.cssPrefix,"-").concat(xe)),Xe(t,Ie,"".concat(U.cssPrefix,"-").concat(Ie)),t),s=null,l=xe;(e.includes(o[xe])||e.some(function(c){return Wg[xe].includes(c)}))&&(l=xe),(e.includes(o[Ie])||e.some(function(c){return Wg[Ie].includes(c)}))&&(l=Ie);var a=e.reduce(function(c,f){var d=yE(U.cssPrefix,f);if(uo[f]?(f=mE[l].includes(f)?W4[l][f]:f,s=f,c.prefix=f):gE[l].indexOf(f)>-1?(s=f,c.prefix=au(f,{family:l})):d?c.iconName=d:f!==U.replacementClass&&f!==o[xe]&&f!==o[Ie]&&c.rest.push(f),!i&&c.prefix&&c.iconName){var h=s==="fa"?M1(c.iconName):{},p=yi(c.prefix,c.iconName);h.prefix&&(s=null),c.iconName=h.iconName||p||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!uo.far&&uo.fas&&!U.autoFetchSvg&&(c.prefix="fas")}return c},wp());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&l===Ie&&(uo.fass||U.autoFetchSvg)&&(a.prefix="fass",a.iconName=yi(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=Xn()||"fas"),a}var xE=function(){function e(){L4(this,e),this.definitions={}}return I4(e,[{key:"add",value:function(){for(var r=this,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){r.definitions[l]=j(j({},r.definitions[l]||{}),s[l]),Pf(l,s[l]);var a=da[xe][l];a&&Pf(a,s[l]),D1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,n){var i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(function(o){var s=i[o],l=s.prefix,a=s.iconName,c=s.icon,f=c[2];r[l]||(r[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(r[l][d]=c)}),r[l][a]=c}),r}}]),e}(),Kg=[],fo={},xo={},_E=Object.keys(xo);function kE(e,t){var r=t.mixoutsTo;return Kg=e,fo={},Object.keys(xo).forEach(function(n){_E.indexOf(n)===-1&&delete xo[n]}),Kg.forEach(function(n){var i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(r[s]=i[s]),Cc(i[s])==="object"&&Object.keys(i[s]).forEach(function(l){r[s]||(r[s]={}),r[s][l]=i[s][l]})}),n.hooks){var o=n.hooks();Object.keys(o).forEach(function(s){fo[s]||(fo[s]=[]),fo[s].push(o[s])})}n.provides&&n.provides(xo)}),r}function Lf(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];var o=fo[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(n))}),t}function Pi(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=fo[e]||[];i.forEach(function(o){o.apply(null,r)})}function rn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xo[e]?xo[e].apply(null,t):void 0}function If(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,r=e.prefix||Xn();if(t)return t=yi(r,t)||t,Hg(j1.definitions,r,t)||Hg(fr.styles,r,t)}var j1=new xE,CE=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,Pi("noAuto")},SE={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dn?(Pi("beforeI2svg",t),rn("pseudoElements2svg",t),rn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,uE(function(){EE({autoReplaceSvgRoot:r}),Pi("watch",t)})}},$E={icon:function(t){if(t===null)return null;if(Cc(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yi(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var r=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=au(t[0]);return{prefix:n,iconName:yi(n,r)||r}}if(typeof t=="string"&&(t.indexOf("".concat(U.cssPrefix,"-"))>-1||t.match(K4))){var i=lu(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Xn(),iconName:yi(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=Xn();return{prefix:o,iconName:yi(o,t)||t}}}},Xt={noAuto:CE,config:U,dom:SE,parse:$E,library:j1,findIconDefinition:If,toHtml:Da},EE=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot,n=r===void 0?ke:r;(Object.keys(fr.styles).length>0||U.autoFetchSvg)&&dn&&U.autoReplaceSvg&&Xt.dom.i2svg({node:n})};function cu(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return Da(n)})}}),Object.defineProperty(e,"node",{get:function(){if(dn){var n=ke.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function AE(e){var t=e.children,r=e.main,n=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(vp(s)&&r.found&&!n.found){var l=r.width,a=r.height,c={x:l/a/2,y:.5};i.style=su(j(j({},o),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function zE(e){var t=e.prefix,r=e.iconName,n=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(U.cssPrefix,"-").concat(r):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},i),{},{id:s}),children:n}]}]}function xp(e){var t=e.icons,r=t.main,n=t.mask,i=e.prefix,o=e.iconName,s=e.transform,l=e.symbol,a=e.title,c=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,p=h===void 0?!1:h,v=n.found?n:r,x=v.width,S=v.height,b=i==="fak",m=[U.replacementClass,o?"".concat(U.cssPrefix,"-").concat(o):""].filter(function(T){return d.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(d.classes).join(" "),y={children:[],attributes:j(j({},d.attributes),{},{"data-prefix":i,"data-icon":o,class:m,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(S)})},w=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(x/S*16*.0625,"em")}:{};p&&(y.attributes[Oi]=""),a&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||ha())},children:[a]}),delete y.attributes.title);var C=j(j({},y),{},{prefix:i,iconName:o,main:r,mask:n,maskId:c,transform:s,symbol:l,styles:j(j({},w),d.styles)}),$=n.found&&r.found?rn("generateAbstractMask",C)||{children:[],attributes:{}}:rn("generateAbstractIcon",C)||{children:[],attributes:{}},E=$.children,A=$.attributes;return C.children=E,C.attributes=A,l?zE(C):AE(C)}function Yg(e){var t=e.content,r=e.width,n=e.height,i=e.transform,o=e.title,s=e.extra,l=e.watchable,a=l===void 0?!1:l,c=j(j(j({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});a&&(c[Oi]="");var f=j({},s.styles);vp(i)&&(f.transform=sE({transform:i,startCentered:!0,width:r,height:n}),f["-webkit-transform"]=f.transform);var d=su(f);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function TE(e){var t=e.content,r=e.title,n=e.extra,i=j(j(j({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")}),o=su(n.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),r&&s.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),s}var ld=fr.styles;function Rf(e){var t=e[0],r=e[1],n=e.slice(4),i=dp(n,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(vi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(vi.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(vi.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:r,icon:s}}var OE={found:!1,width:512,height:512};function PE(e,t){!S1&&!U.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Nf(e,t){var r=t;return t==="fa"&&U.styleDefault!==null&&(t=Xn()),new Promise(function(n,i){if(rn("missingIconAbstract"),r==="fa"){var o=M1(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ld[t]&&ld[t][e]){var s=ld[t][e];return n(Rf(s))}PE(e,t),n(j(j({},OE),{},{icon:U.showMissingIcons&&e?rn("missingIconAbstract")||{}:{}}))})}var Xg=function(){},Df=U.measurePerformance&&vl&&vl.mark&&vl.measure?vl:{mark:Xg,measure:Xg},ws='FA "6.5.1"',LE=function(t){return Df.mark("".concat(ws," ").concat(t," begins")),function(){return F1(t)}},F1=function(t){Df.mark("".concat(ws," ").concat(t," ends")),Df.measure("".concat(ws," ").concat(t),"".concat(ws," ").concat(t," begins"),"".concat(ws," ").concat(t," ends"))},_p={begin:LE,end:F1},Vl=function(){};function Gg(e){var t=e.getAttribute?e.getAttribute(Oi):null;return typeof t=="string"}function IE(e){var t=e.getAttribute?e.getAttribute(hp):null,r=e.getAttribute?e.getAttribute(pp):null;return t&&r}function RE(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(U.replacementClass)}function NE(){if(U.autoReplaceSvg===!0)return Hl.replace;var e=Hl[U.autoReplaceSvg];return e||Hl.replace}function DE(e){return ke.createElementNS("http://www.w3.org/2000/svg",e)}function ME(e){return ke.createElement(e)}function B1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.ceFn,n=r===void 0?e.tag==="svg"?DE:ME:r;if(typeof e=="string")return ke.createTextNode(e);var i=n(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(B1(s,{ceFn:n}))}),i}function jE(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Hl={replace:function(t){var r=t[0];if(r.parentNode)if(t[1].forEach(function(i){r.parentNode.insertBefore(B1(i),r)}),r.getAttribute(Oi)===null&&U.keepOriginalSource){var n=ke.createComment(jE(r));r.parentNode.replaceChild(n,r)}else r.remove()},nest:function(t){var r=t[0],n=t[1];if(~gp(r).indexOf(U.replacementClass))return Hl.replace(t);var i=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var o=n[0].attributes.class.split(" ").reduce(function(l,a){return a===U.replacementClass||a.match(i)?l.toSvg.push(a):l.toNode.push(a),l},{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",o.toNode.join(" "))}var s=n.map(function(l){return Da(l)}).join(`
`);r.setAttribute(Oi,""),r.innerHTML=s}};function qg(e){e()}function V1(e,t){var r=typeof t=="function"?t:Vl;if(e.length===0)r();else{var n=qg;U.mutateApproach===H4&&(n=Yn.requestAnimationFrame||qg),n(function(){var i=NE(),o=_p.begin("mutate");e.map(i),o(),r()})}}var kp=!1;function H1(){kp=!0}function Mf(){kp=!1}var $c=null;function Qg(e){if(Fg&&U.observeMutations){var t=e.treeCallback,r=t===void 0?Vl:t,n=e.nodeCallback,i=n===void 0?Vl:n,o=e.pseudoElementsCallback,s=o===void 0?Vl:o,l=e.observeMutationsRoot,a=l===void 0?ke:l;$c=new Fg(function(c){if(!kp){var f=Xn();Go(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Gg(d.addedNodes[0])&&(U.searchPseudoElements&&s(d.target),r(d.target)),d.type==="attributes"&&d.target.parentNode&&U.searchPseudoElements&&s(d.target.parentNode),d.type==="attributes"&&Gg(d.target)&&~q4.indexOf(d.attributeName))if(d.attributeName==="class"&&IE(d.target)){var h=lu(gp(d.target)),p=h.prefix,v=h.iconName;d.target.setAttribute(hp,p||f),v&&d.target.setAttribute(pp,v)}else RE(d.target)&&i(d.target)})}}),dn&&$c.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function FE(){$c&&$c.disconnect()}function BE(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(n,i){var o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(n[s]=l.join(":").trim()),n},{})),r}function VE(e){var t=e.getAttribute("data-prefix"),r=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",i=lu(gp(e));return i.prefix||(i.prefix=Xn()),t&&r&&(i.prefix=t,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=bE(i.prefix,e.innerText)||bp(i.prefix,Of(e.innerText))),!i.iconName&&U.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function HE(e){var t=Go(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),r=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return U.autoA11y&&(r?t["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(n||ha()):(t["aria-hidden"]="true",t.focusable="false")),t}function UE(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Sr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=VE(e),n=r.iconName,i=r.prefix,o=r.rest,s=HE(e),l=Lf("parseNodeAttributes",{},e),a=t.styleParser?BE(e):[];return j({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Sr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:a,attributes:s}},l)}var WE=fr.styles;function U1(e){var t=U.autoReplaceSvg==="nest"?Zg(e,{styleParser:!1}):Zg(e);return~t.extra.classes.indexOf($1)?rn("generateLayersText",e,t):rn("generateSvgReplacementMutation",e,t)}var Gn=new Set;mp.map(function(e){Gn.add("fa-".concat(e))});Object.keys(ca[xe]).map(Gn.add.bind(Gn));Object.keys(ca[Ie]).map(Gn.add.bind(Gn));Gn=Ra(Gn);function Jg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dn)return Promise.resolve();var r=ke.documentElement.classList,n=function(d){return r.add("".concat(Bg,"-").concat(d))},i=function(d){return r.remove("".concat(Bg,"-").concat(d))},o=U.autoFetchSvg?Gn:mp.map(function(f){return"fa-".concat(f)}).concat(Object.keys(WE));o.includes("fa")||o.push("fa");var s=[".".concat($1,":not([").concat(Oi,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(Oi,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=Go(e.querySelectorAll(s))}catch{}if(l.length>0)n("pending"),i("complete");else return Promise.resolve();var a=_p.begin("onTree"),c=l.reduce(function(f,d){try{var h=U1(d);h&&f.push(h)}catch(p){S1||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(h){V1(h,function(){n("active"),n("complete"),i("pending"),typeof t=="function"&&t(),a(),f()})}).catch(function(h){a(),d(h)})})}function KE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;U1(e).then(function(r){r&&V1([r],t)})}function YE(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:If(t||{}),i=r.mask;return i&&(i=(i||{}).icon?i:If(i||{})),e(n,j(j({},r),{},{mask:i}))}}var XE=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?Sr:n,o=r.symbol,s=o===void 0?!1:o,l=r.mask,a=l===void 0?null:l,c=r.maskId,f=c===void 0?null:c,d=r.title,h=d===void 0?null:d,p=r.titleId,v=p===void 0?null:p,x=r.classes,S=x===void 0?[]:x,b=r.attributes,m=b===void 0?{}:b,y=r.styles,w=y===void 0?{}:y;if(t){var C=t.prefix,$=t.iconName,E=t.icon;return cu(j({type:"icon"},t),function(){return Pi("beforeDOMElementCreation",{iconDefinition:t,params:r}),U.autoA11y&&(h?m["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(v||ha()):(m["aria-hidden"]="true",m.focusable="false")),xp({icons:{main:Rf(E),mask:a?Rf(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:$,transform:j(j({},Sr),i),symbol:s,title:h,maskId:f,titleId:v,extra:{attributes:m,styles:w,classes:S}})})}},GE={mixout:function(){return{icon:YE(XE)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=Jg,r.nodeCallback=KE,r}}},provides:function(t){t.i2svg=function(r){var n=r.node,i=n===void 0?ke:n,o=r.callback,s=o===void 0?function(){}:o;return Jg(i,s)},t.generateSvgReplacementMutation=function(r,n){var i=n.iconName,o=n.title,s=n.titleId,l=n.prefix,a=n.transform,c=n.symbol,f=n.mask,d=n.maskId,h=n.extra;return new Promise(function(p,v){Promise.all([Nf(i,l),f.iconName?Nf(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var S=dp(x,2),b=S[0],m=S[1];p([r,xp({icons:{main:b,mask:m},prefix:l,iconName:i,transform:a,symbol:c,maskId:d,title:o,titleId:s,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(r){var n=r.children,i=r.attributes,o=r.main,s=r.transform,l=r.styles,a=su(l);a.length>0&&(i.style=a);var c;return vp(s)&&(c=rn("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),n.push(c||o.icon),{children:n,attributes:i}}}},qE={mixout:function(){return{layer:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.classes,o=i===void 0?[]:i;return cu({type:"layer"},function(){Pi("beforeDOMElementCreation",{assembler:r,params:n});var s=[];return r(function(l){Array.isArray(l)?l.map(function(a){s=s.concat(a.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(Ra(o)).join(" ")},children:s}]})}}}},QE={mixout:function(){return{counter:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.title,o=i===void 0?null:i,s=n.classes,l=s===void 0?[]:s,a=n.attributes,c=a===void 0?{}:a,f=n.styles,d=f===void 0?{}:f;return cu({type:"counter",content:r},function(){return Pi("beforeDOMElementCreation",{content:r,params:n}),TE({content:r.toString(),title:o,extra:{attributes:c,styles:d,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(Ra(l))}})})}}}},ZE={mixout:function(){return{text:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,o=i===void 0?Sr:i,s=n.title,l=s===void 0?null:s,a=n.classes,c=a===void 0?[]:a,f=n.attributes,d=f===void 0?{}:f,h=n.styles,p=h===void 0?{}:h;return cu({type:"text",content:r},function(){return Pi("beforeDOMElementCreation",{content:r,params:n}),Yg({content:r,transform:j(j({},Sr),o),title:l,extra:{attributes:d,styles:p,classes:["".concat(U.cssPrefix,"-layers-text")].concat(Ra(c))}})})}}},provides:function(t){t.generateLayersText=function(r,n){var i=n.title,o=n.transform,s=n.extra,l=null,a=null;if(_1){var c=parseInt(getComputedStyle(r).fontSize,10),f=r.getBoundingClientRect();l=f.width/c,a=f.height/c}return U.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([r,Yg({content:r.innerHTML,width:l,height:a,transform:o,title:i,extra:s,watchable:!0})])}}},JE=new RegExp('"',"ug"),ev=[1105920,1112319];function e6(e){var t=e.replace(JE,""),r=hE(t,0),n=r>=ev[0]&&r<=ev[1],i=t.length===2?t[0]===t[1]:!1;return{value:Of(i?t[0]:t),isSecondary:n||i}}function tv(e,t){var r="".concat(V4).concat(t.replace(":","-"));return new Promise(function(n,i){if(e.getAttribute(r)!==null)return n();var o=Go(e.children),s=o.filter(function(E){return E.getAttribute(Tf)===t})[0],l=Yn.getComputedStyle(e,t),a=l.getPropertyValue("font-family").match(Y4),c=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(s&&!a)return e.removeChild(s),n();if(a&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(a[2])?Ie:xe,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(a[2])?ua[h][a[2].toLowerCase()]:X4[h][c],v=e6(d),x=v.value,S=v.isSecondary,b=a[0].startsWith("FontAwesome"),m=bp(p,x),y=m;if(b){var w=wE(x);w.iconName&&w.prefix&&(m=w.iconName,p=w.prefix)}if(m&&!S&&(!s||s.getAttribute(hp)!==p||s.getAttribute(pp)!==y)){e.setAttribute(r,y),s&&e.removeChild(s);var C=UE(),$=C.extra;$.attributes[Tf]=t,Nf(m,p).then(function(E){var A=xp(j(j({},C),{},{icons:{main:E,mask:wp()},prefix:p,iconName:y,extra:$,watchable:!0})),T=ke.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(T,e.firstChild):e.appendChild(T),T.outerHTML=A.map(function(z){return Da(z)}).join(`
`),e.removeAttribute(r),n()}).catch(i)}else n()}else n()})}function t6(e){return Promise.all([tv(e,"::before"),tv(e,"::after")])}function r6(e){return e.parentNode!==document.head&&!~U4.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tf)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function rv(e){if(dn)return new Promise(function(t,r){var n=Go(e.querySelectorAll("*")).filter(r6).map(t6),i=_p.begin("searchPseudoElements");H1(),Promise.all(n).then(function(){i(),Mf(),t()}).catch(function(){i(),Mf(),r()})})}var n6={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=rv,r}}},provides:function(t){t.pseudoElements2svg=function(r){var n=r.node,i=n===void 0?ke:n;U.searchPseudoElements&&rv(i)}}},nv=!1,i6={mixout:function(){return{dom:{unwatch:function(){H1(),nv=!0}}}},hooks:function(){return{bootstrap:function(){Qg(Lf("mutationObserverCallbacks",{}))},noAuto:function(){FE()},watch:function(r){var n=r.observeMutationsRoot;nv?Mf():Qg(Lf("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},iv=function(t){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,i){var o=i.toLowerCase().split("-"),s=o[0],l=o.slice(1).join("-");if(s&&l==="h")return n.flipX=!0,n;if(s&&l==="v")return n.flipY=!0,n;if(l=parseFloat(l),isNaN(l))return n;switch(s){case"grow":n.size=n.size+l;break;case"shrink":n.size=n.size-l;break;case"left":n.x=n.x-l;break;case"right":n.x=n.x+l;break;case"up":n.y=n.y-l;break;case"down":n.y=n.y+l;break;case"rotate":n.rotate=n.rotate+l;break}return n},r)},o6={mixout:function(){return{parse:{transform:function(r){return iv(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,n){var i=n.getAttribute("data-fa-transform");return i&&(r.transform=iv(i)),r}}},provides:function(t){t.generateAbstractTransformGrouping=function(r){var n=r.main,i=r.transform,o=r.containerWidth,s=r.iconWidth,l={transform:"translate(".concat(o/2," 256)")},a="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(a," ").concat(c," ").concat(f)},h={transform:"translate(".concat(s/2*-1," -256)")},p={outer:l,inner:d,path:h};return{tag:"g",attributes:j({},p.outer),children:[{tag:"g",attributes:j({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:j(j({},n.icon.attributes),p.path)}]}]}}}},cd={x:0,y:0,width:"100%",height:"100%"};function ov(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function s6(e){return e.tag==="g"?e.children:[e]}var a6={hooks:function(){return{parseNodeAttributes:function(r,n){var i=n.getAttribute("data-fa-mask"),o=i?lu(i.split(" ").map(function(s){return s.trim()})):wp();return o.prefix||(o.prefix=Xn()),r.mask=o,r.maskId=n.getAttribute("data-fa-mask-id"),r}}},provides:function(t){t.generateAbstractMask=function(r){var n=r.children,i=r.attributes,o=r.main,s=r.mask,l=r.maskId,a=r.transform,c=o.width,f=o.icon,d=s.width,h=s.icon,p=oE({transform:a,containerWidth:d,iconWidth:c}),v={tag:"rect",attributes:j(j({},cd),{},{fill:"white"})},x=f.children?{children:f.children.map(ov)}:{},S={tag:"g",attributes:j({},p.inner),children:[ov(j({tag:f.tag,attributes:j(j({},f.attributes),p.path)},x))]},b={tag:"g",attributes:j({},p.outer),children:[S]},m="mask-".concat(l||ha()),y="clip-".concat(l||ha()),w={tag:"mask",attributes:j(j({},cd),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,b]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:s6(h)},w]};return n.push(C,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(m,")")},cd)}),{children:n,attributes:i}}}},l6={provides:function(t){var r=!1;Yn.matchMedia&&(r=Yn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:j(j({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=j(j({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:j(j({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||l.children.push({tag:"animate",attributes:j(j({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(l),n.push({tag:"path",attributes:j(j({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:j(j({},s),{},{values:"1;0;0;0;0;1;"})}]}),r||n.push({tag:"path",attributes:j(j({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},c6={hooks:function(){return{parseNodeAttributes:function(r,n){var i=n.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return r.symbol=o,r}}}},u6=[lE,GE,qE,QE,ZE,n6,i6,o6,a6,l6,c6];kE(u6,{mixoutsTo:Xt});Xt.noAuto;Xt.config;Xt.library;Xt.dom;var jf=Xt.parse;Xt.findIconDefinition;Xt.toHtml;var d6=Xt.icon;Xt.layer;Xt.text;Xt.counter;function sv(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Tn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?sv(Object(r),!0).forEach(function(n){ho(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sv(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ec(e){"@babel/helpers - typeof";return Ec=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ec(e)}function ho(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f6(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function h6(e,t){if(e==null)return{};var r=f6(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ff(e){return p6(e)||m6(e)||g6(e)||v6()}function p6(e){if(Array.isArray(e))return Bf(e)}function m6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function g6(e,t){if(e){if(typeof e=="string")return Bf(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Bf(e,t)}}function Bf(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y6(e){var t,r=e.beat,n=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,l=e.flash,a=e.spin,c=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,p=e.inverse,v=e.border,x=e.listItem,S=e.flip,b=e.size,m=e.rotation,y=e.pull,w=(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":a,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":h,"fa-inverse":p,"fa-border":v,"fa-li":x,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},ho(t,"fa-".concat(b),typeof b<"u"&&b!==null),ho(t,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),ho(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),ho(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(C){return w[C]?C:null}).filter(function(C){return C})}function b6(e){return e=e-0,e===e}function W1(e){return b6(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var w6=["style"];function x6(e){return e.charAt(0).toUpperCase()+e.slice(1)}function _6(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var n=r.indexOf(":"),i=W1(r.slice(0,n)),o=r.slice(n+1).trim();return i.startsWith("webkit")?t[x6(i)]=o:t[i]=o,t},{})}function K1(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(a){return K1(e,a)}),i=Object.keys(t.attributes||{}).reduce(function(a,c){var f=t.attributes[c];switch(c){case"class":a.attrs.className=f,delete t.attributes.class;break;case"style":a.attrs.style=_6(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?a.attrs[c.toLowerCase()]=f:a.attrs[W1(c)]=f}return a},{attrs:{}}),o=r.style,s=o===void 0?{}:o,l=h6(r,w6);return i.attrs.style=Tn(Tn({},i.attrs.style),s),e.apply(void 0,[t.tag,Tn(Tn({},i.attrs),l)].concat(Ff(n)))}var Y1=!1;try{Y1=!0}catch{}function k6(){if(!Y1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function av(e){if(e&&Ec(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jf.icon)return jf.icon(e);if(e===null)return null;if(e&&Ec(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ud(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ho({},e,t):{}}var Fe=ot.forwardRef(function(e,t){var r=e.icon,n=e.mask,i=e.symbol,o=e.className,s=e.title,l=e.titleId,a=e.maskId,c=av(r),f=ud("classes",[].concat(Ff(y6(e)),Ff(o.split(" ")))),d=ud("transform",typeof e.transform=="string"?jf.transform(e.transform):e.transform),h=ud("mask",av(n)),p=d6(c,Tn(Tn(Tn(Tn({},f),d),h),{},{symbol:i,title:s,titleId:l,maskId:a}));if(!p)return k6("Could not find icon",c),null;var v=p.abstract,x={ref:t};return Object.keys(e).forEach(function(S){Fe.defaultProps.hasOwnProperty(S)||(x[S]=e[S])}),C6(v[0],x)});Fe.displayName="FontAwesomeIcon";Fe.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};Fe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var C6=K1.bind(null,ot.createElement),X1={prefix:"fas",iconName:"hourglass-half",icon:[384,512,["hourglass-2"],"f252","M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 19-5.6 37.4-16 53H112c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9H112z"]},S6={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},$6={prefix:"fas",iconName:"forward",icon:[512,512,[9193],"f04e","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]},G1={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},uu={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Ma={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};function Vf(){return Vf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Vf.apply(this,arguments)}function lv(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function E6(e){var t=A6(e,"string");return typeof t=="symbol"?t:String(t)}function A6(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function z6(e,t,r){var n=_.useRef(e!==void 0),i=_.useState(t),o=i[0],s=i[1],l=e!==void 0,a=n.current;return n.current=l,!l&&a&&o!==t&&s(t),[l?e:o,_.useCallback(function(c){for(var f=arguments.length,d=new Array(f>1?f-1:0),h=1;h<f;h++)d[h-1]=arguments[h];r&&r.apply(void 0,[c].concat(d)),s(c)},[r])]}function q1(e,t){return Object.keys(t).reduce(function(r,n){var i,o=r,s=o[lv(n)],l=o[n],a=Vb(o,[lv(n),n].map(E6)),c=t[n],f=z6(l,s,e[c]),d=f[0],h=f[1];return Vf({},a,(i={},i[n]=d,i[c]=h,i))},e)}function T6(e,t,r,n=!1){const i=je(r);_.useEffect(()=>{const o=typeof e=="function"?e():e;return o.addEventListener(t,i,n),()=>o.removeEventListener(t,i,n)},[e])}const O6=["onKeyDown"];function P6(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function L6(e){return!e||e.trim()==="#"}const Q1=_.forwardRef((e,t)=>{let{onKeyDown:r}=e,n=P6(e,O6);const[i]=np(Object.assign({tagName:"a"},n)),o=je(s=>{i.onKeyDown(s),r==null||r(s)});return L6(n.href)||n.role==="button"?k.jsx("a",Object.assign({ref:t},n,i,{onKeyDown:o})):k.jsx("a",Object.assign({ref:t},n,{onKeyDown:r}))});Q1.displayName="Anchor";const I6=Q1,Z1=_.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=ee(t,"card-body"),k.jsx(r,{ref:i,className:Q(e,t),...n})));Z1.displayName="CardBody";const Cp=Z1,J1=_.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=ee(t,"card-footer"),k.jsx(r,{ref:i,className:Q(e,t),...n})));J1.displayName="CardFooter";const R6=J1,ew=_.createContext(null);ew.displayName="CardHeaderContext";const N6=ew,tw=_.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},i)=>{const o=ee(e,"card-header"),s=_.useMemo(()=>({cardHeaderBsPrefix:o}),[o]);return k.jsx(N6.Provider,{value:s,children:k.jsx(r,{ref:i,...n,className:Q(t,o)})})});tw.displayName="CardHeader";const ja=tw,rw=_.forwardRef(({bsPrefix:e,className:t,variant:r,as:n="img",...i},o)=>{const s=ee(e,"card-img");return k.jsx(n,{ref:o,className:Q(r?`${s}-${r}`:s,t),...i})});rw.displayName="CardImg";const D6=rw,nw=_.forwardRef(({className:e,bsPrefix:t,as:r="div",...n},i)=>(t=ee(t,"card-img-overlay"),k.jsx(r,{ref:i,className:Q(e,t),...n})));nw.displayName="CardImgOverlay";const M6=nw,iw=_.forwardRef(({className:e,bsPrefix:t,as:r="a",...n},i)=>(t=ee(t,"card-link"),k.jsx(r,{ref:i,className:Q(e,t),...n})));iw.displayName="CardLink";const j6=iw,F6=lp("h6"),ow=_.forwardRef(({className:e,bsPrefix:t,as:r=F6,...n},i)=>(t=ee(t,"card-subtitle"),k.jsx(r,{ref:i,className:Q(e,t),...n})));ow.displayName="CardSubtitle";const B6=ow,sw=_.forwardRef(({className:e,bsPrefix:t,as:r="p",...n},i)=>(t=ee(t,"card-text"),k.jsx(r,{ref:i,className:Q(e,t),...n})));sw.displayName="CardText";const V6=sw,H6=lp("h5"),aw=_.forwardRef(({className:e,bsPrefix:t,as:r=H6,...n},i)=>(t=ee(t,"card-title"),k.jsx(r,{ref:i,className:Q(e,t),...n})));aw.displayName="CardTitle";const U6=aw,lw=_.forwardRef(({bsPrefix:e,className:t,bg:r,text:n,border:i,body:o=!1,children:s,as:l="div",...a},c)=>{const f=ee(e,"card");return k.jsx(l,{ref:c,...a,className:Q(t,f,r&&`bg-${r}`,n&&`text-${n}`,i&&`border-${i}`),children:o?k.jsx(Cp,{children:s}):s})});lw.displayName="Card";const Or=Object.assign(lw,{Img:D6,Title:U6,Subtitle:B6,Body:Cp,Link:j6,Text:V6,Header:ja,Footer:R6,ImgOverlay:M6});function W6(e,t,r){const n=_.useRef(e!==void 0),[i,o]=_.useState(t),s=e!==void 0,l=n.current;return n.current=s,!s&&l&&i!==t&&o(t),[s?e:i,_.useCallback((...a)=>{const[c,...f]=a;let d=r==null?void 0:r(c,...f);return o(c),d},[r])]}function cw(){const[,e]=_.useReducer(t=>!t,!1);return e}const K6=_.createContext(null),du=K6;var cv=Object.prototype.hasOwnProperty;function uv(e,t,r){for(r of e.keys())if(Fs(r,t))return r}function Fs(e,t){var r,n,i;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&Fs(e[n],t[n]););return n===-1}if(r===Set){if(e.size!==t.size)return!1;for(n of e)if(i=n,i&&typeof i=="object"&&(i=uv(t,i),!i)||!t.has(i))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e)if(i=n[0],i&&typeof i=="object"&&(i=uv(t,i),!i)||!Fs(n[1],t.get(i)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return n===-1}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return n===-1}if(!r||typeof e=="object"){n=0;for(r in e)if(cv.call(e,r)&&++n&&!cv.call(t,r)||!(r in t)||!Fs(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!==e&&t!==t}function Y6(e){const t=Mb();return[e[0],_.useCallback(r=>{if(t())return e[1](r)},[t,e[1]])]}var Tt="top",nr="bottom",ir="right",Ot="left",Sp="auto",Fa=[Tt,nr,ir,Ot],Io="start",pa="end",X6="clippingParents",uw="viewport",ps="popper",G6="reference",dv=Fa.reduce(function(e,t){return e.concat([t+"-"+Io,t+"-"+pa])},[]),dw=[].concat(Fa,[Sp]).reduce(function(e,t){return e.concat([t,t+"-"+Io,t+"-"+pa])},[]),q6="beforeRead",Q6="read",Z6="afterRead",J6="beforeMain",eA="main",tA="afterMain",rA="beforeWrite",nA="write",iA="afterWrite",oA=[q6,Q6,Z6,J6,eA,tA,rA,nA,iA];function Ar(e){return e.split("-")[0]}function Ft(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Li(e){var t=Ft(e).Element;return e instanceof t||e instanceof Element}function zr(e){var t=Ft(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function $p(e){if(typeof ShadowRoot>"u")return!1;var t=Ft(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var _i=Math.max,Ac=Math.min,Ro=Math.round;function Hf(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function fw(){return!/^((?!chrome|android).)*safari/i.test(Hf())}function No(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),i=1,o=1;t&&zr(e)&&(i=e.offsetWidth>0&&Ro(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&Ro(n.height)/e.offsetHeight||1);var s=Li(e)?Ft(e):window,l=s.visualViewport,a=!fw()&&r,c=(n.left+(a&&l?l.offsetLeft:0))/i,f=(n.top+(a&&l?l.offsetTop:0))/o,d=n.width/i,h=n.height/o;return{width:d,height:h,top:f,right:c+d,bottom:f+h,left:c,x:c,y:f}}function Ep(e){var t=No(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function hw(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&$p(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function qn(e){return e?(e.nodeName||"").toLowerCase():null}function nn(e){return Ft(e).getComputedStyle(e)}function sA(e){return["table","td","th"].indexOf(qn(e))>=0}function ni(e){return((Li(e)?e.ownerDocument:e.document)||window.document).documentElement}function fu(e){return qn(e)==="html"?e:e.assignedSlot||e.parentNode||($p(e)?e.host:null)||ni(e)}function fv(e){return!zr(e)||nn(e).position==="fixed"?null:e.offsetParent}function aA(e){var t=/firefox/i.test(Hf()),r=/Trident/i.test(Hf());if(r&&zr(e)){var n=nn(e);if(n.position==="fixed")return null}var i=fu(e);for($p(i)&&(i=i.host);zr(i)&&["html","body"].indexOf(qn(i))<0;){var o=nn(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function Ba(e){for(var t=Ft(e),r=fv(e);r&&sA(r)&&nn(r).position==="static";)r=fv(r);return r&&(qn(r)==="html"||qn(r)==="body"&&nn(r).position==="static")?t:r||aA(e)||t}function Ap(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Bs(e,t,r){return _i(e,Ac(t,r))}function lA(e,t,r){var n=Bs(e,t,r);return n>r?r:n}function pw(){return{top:0,right:0,bottom:0,left:0}}function mw(e){return Object.assign({},pw(),e)}function gw(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var cA=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,mw(typeof t!="number"?t:gw(t,Fa))};function uA(e){var t,r=e.state,n=e.name,i=e.options,o=r.elements.arrow,s=r.modifiersData.popperOffsets,l=Ar(r.placement),a=Ap(l),c=[Ot,ir].indexOf(l)>=0,f=c?"height":"width";if(!(!o||!s)){var d=cA(i.padding,r),h=Ep(o),p=a==="y"?Tt:Ot,v=a==="y"?nr:ir,x=r.rects.reference[f]+r.rects.reference[a]-s[a]-r.rects.popper[f],S=s[a]-r.rects.reference[a],b=Ba(o),m=b?a==="y"?b.clientHeight||0:b.clientWidth||0:0,y=x/2-S/2,w=d[p],C=m-h[f]-d[v],$=m/2-h[f]/2+y,E=Bs(w,$,C),A=a;r.modifiersData[n]=(t={},t[A]=E,t.centerOffset=E-$,t)}}function dA(e){var t=e.state,r=e.options,n=r.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||hw(t.elements.popper,i)&&(t.elements.arrow=i))}const fA={name:"arrow",enabled:!0,phase:"main",fn:uA,effect:dA,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Do(e){return e.split("-")[1]}var hA={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pA(e,t){var r=e.x,n=e.y,i=t.devicePixelRatio||1;return{x:Ro(r*i)/i||0,y:Ro(n*i)/i||0}}function hv(e){var t,r=e.popper,n=e.popperRect,i=e.placement,o=e.variation,s=e.offsets,l=e.position,a=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,d=e.isFixed,h=s.x,p=h===void 0?0:h,v=s.y,x=v===void 0?0:v,S=typeof f=="function"?f({x:p,y:x}):{x:p,y:x};p=S.x,x=S.y;var b=s.hasOwnProperty("x"),m=s.hasOwnProperty("y"),y=Ot,w=Tt,C=window;if(c){var $=Ba(r),E="clientHeight",A="clientWidth";if($===Ft(r)&&($=ni(r),nn($).position!=="static"&&l==="absolute"&&(E="scrollHeight",A="scrollWidth")),$=$,i===Tt||(i===Ot||i===ir)&&o===pa){w=nr;var T=d&&$===C&&C.visualViewport?C.visualViewport.height:$[E];x-=T-n.height,x*=a?1:-1}if(i===Ot||(i===Tt||i===nr)&&o===pa){y=ir;var z=d&&$===C&&C.visualViewport?C.visualViewport.width:$[A];p-=z-n.width,p*=a?1:-1}}var N=Object.assign({position:l},c&&hA),D=f===!0?pA({x:p,y:x},Ft(r)):{x:p,y:x};if(p=D.x,x=D.y,a){var Y;return Object.assign({},N,(Y={},Y[w]=m?"0":"",Y[y]=b?"0":"",Y.transform=(C.devicePixelRatio||1)<=1?"translate("+p+"px, "+x+"px)":"translate3d("+p+"px, "+x+"px, 0)",Y))}return Object.assign({},N,(t={},t[w]=m?x+"px":"",t[y]=b?p+"px":"",t.transform="",t))}function mA(e){var t=e.state,r=e.options,n=r.gpuAcceleration,i=n===void 0?!0:n,o=r.adaptive,s=o===void 0?!0:o,l=r.roundOffsets,a=l===void 0?!0:l,c={placement:Ar(t.placement),variation:Do(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,hv(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,hv(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const gA={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mA,data:{}};var $l={passive:!0};function vA(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,o=i===void 0?!0:i,s=n.resize,l=s===void 0?!0:s,a=Ft(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(f){f.addEventListener("scroll",r.update,$l)}),l&&a.addEventListener("resize",r.update,$l),function(){o&&c.forEach(function(f){f.removeEventListener("scroll",r.update,$l)}),l&&a.removeEventListener("resize",r.update,$l)}}const yA={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:vA,data:{}};var bA={left:"right",right:"left",bottom:"top",top:"bottom"};function Ul(e){return e.replace(/left|right|bottom|top/g,function(t){return bA[t]})}var wA={start:"end",end:"start"};function pv(e){return e.replace(/start|end/g,function(t){return wA[t]})}function zp(e){var t=Ft(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Tp(e){return No(ni(e)).left+zp(e).scrollLeft}function xA(e,t){var r=Ft(e),n=ni(e),i=r.visualViewport,o=n.clientWidth,s=n.clientHeight,l=0,a=0;if(i){o=i.width,s=i.height;var c=fw();(c||!c&&t==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:o,height:s,x:l+Tp(e),y:a}}function _A(e){var t,r=ni(e),n=zp(e),i=(t=e.ownerDocument)==null?void 0:t.body,o=_i(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=_i(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),l=-n.scrollLeft+Tp(e),a=-n.scrollTop;return nn(i||r).direction==="rtl"&&(l+=_i(r.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:l,y:a}}function Op(e){var t=nn(e),r=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+n)}function vw(e){return["html","body","#document"].indexOf(qn(e))>=0?e.ownerDocument.body:zr(e)&&Op(e)?e:vw(fu(e))}function Vs(e,t){var r;t===void 0&&(t=[]);var n=vw(e),i=n===((r=e.ownerDocument)==null?void 0:r.body),o=Ft(n),s=i?[o].concat(o.visualViewport||[],Op(n)?n:[]):n,l=t.concat(s);return i?l:l.concat(Vs(fu(s)))}function Uf(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function kA(e,t){var r=No(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function mv(e,t,r){return t===uw?Uf(xA(e,r)):Li(t)?kA(t,r):Uf(_A(ni(e)))}function CA(e){var t=Vs(fu(e)),r=["absolute","fixed"].indexOf(nn(e).position)>=0,n=r&&zr(e)?Ba(e):e;return Li(n)?t.filter(function(i){return Li(i)&&hw(i,n)&&qn(i)!=="body"}):[]}function SA(e,t,r,n){var i=t==="clippingParents"?CA(e):[].concat(t),o=[].concat(i,[r]),s=o[0],l=o.reduce(function(a,c){var f=mv(e,c,n);return a.top=_i(f.top,a.top),a.right=Ac(f.right,a.right),a.bottom=Ac(f.bottom,a.bottom),a.left=_i(f.left,a.left),a},mv(e,s,n));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function yw(e){var t=e.reference,r=e.element,n=e.placement,i=n?Ar(n):null,o=n?Do(n):null,s=t.x+t.width/2-r.width/2,l=t.y+t.height/2-r.height/2,a;switch(i){case Tt:a={x:s,y:t.y-r.height};break;case nr:a={x:s,y:t.y+t.height};break;case ir:a={x:t.x+t.width,y:l};break;case Ot:a={x:t.x-r.width,y:l};break;default:a={x:t.x,y:t.y}}var c=i?Ap(i):null;if(c!=null){var f=c==="y"?"height":"width";switch(o){case Io:a[c]=a[c]-(t[f]/2-r[f]/2);break;case pa:a[c]=a[c]+(t[f]/2-r[f]/2);break}}return a}function ma(e,t){t===void 0&&(t={});var r=t,n=r.placement,i=n===void 0?e.placement:n,o=r.strategy,s=o===void 0?e.strategy:o,l=r.boundary,a=l===void 0?X6:l,c=r.rootBoundary,f=c===void 0?uw:c,d=r.elementContext,h=d===void 0?ps:d,p=r.altBoundary,v=p===void 0?!1:p,x=r.padding,S=x===void 0?0:x,b=mw(typeof S!="number"?S:gw(S,Fa)),m=h===ps?G6:ps,y=e.rects.popper,w=e.elements[v?m:h],C=SA(Li(w)?w:w.contextElement||ni(e.elements.popper),a,f,s),$=No(e.elements.reference),E=yw({reference:$,element:y,strategy:"absolute",placement:i}),A=Uf(Object.assign({},y,E)),T=h===ps?A:$,z={top:C.top-T.top+b.top,bottom:T.bottom-C.bottom+b.bottom,left:C.left-T.left+b.left,right:T.right-C.right+b.right},N=e.modifiersData.offset;if(h===ps&&N){var D=N[i];Object.keys(z).forEach(function(Y){var Z=[ir,nr].indexOf(Y)>=0?1:-1,re=[Tt,nr].indexOf(Y)>=0?"y":"x";z[Y]+=D[re]*Z})}return z}function $A(e,t){t===void 0&&(t={});var r=t,n=r.placement,i=r.boundary,o=r.rootBoundary,s=r.padding,l=r.flipVariations,a=r.allowedAutoPlacements,c=a===void 0?dw:a,f=Do(n),d=f?l?dv:dv.filter(function(v){return Do(v)===f}):Fa,h=d.filter(function(v){return c.indexOf(v)>=0});h.length===0&&(h=d);var p=h.reduce(function(v,x){return v[x]=ma(e,{placement:x,boundary:i,rootBoundary:o,padding:s})[Ar(x)],v},{});return Object.keys(p).sort(function(v,x){return p[v]-p[x]})}function EA(e){if(Ar(e)===Sp)return[];var t=Ul(e);return[pv(e),t,pv(t)]}function AA(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var i=r.mainAxis,o=i===void 0?!0:i,s=r.altAxis,l=s===void 0?!0:s,a=r.fallbackPlacements,c=r.padding,f=r.boundary,d=r.rootBoundary,h=r.altBoundary,p=r.flipVariations,v=p===void 0?!0:p,x=r.allowedAutoPlacements,S=t.options.placement,b=Ar(S),m=b===S,y=a||(m||!v?[Ul(S)]:EA(S)),w=[S].concat(y).reduce(function(Ee,Qe){return Ee.concat(Ar(Qe)===Sp?$A(t,{placement:Qe,boundary:f,rootBoundary:d,padding:c,flipVariations:v,allowedAutoPlacements:x}):Qe)},[]),C=t.rects.reference,$=t.rects.popper,E=new Map,A=!0,T=w[0],z=0;z<w.length;z++){var N=w[z],D=Ar(N),Y=Do(N)===Io,Z=[Tt,nr].indexOf(D)>=0,re=Z?"width":"height",J=ma(t,{placement:N,boundary:f,rootBoundary:d,altBoundary:h,padding:c}),oe=Z?Y?ir:Ot:Y?nr:Tt;C[re]>$[re]&&(oe=Ul(oe));var L=Ul(oe),K=[];if(o&&K.push(J[D]<=0),l&&K.push(J[oe]<=0,J[L]<=0),K.every(function(Ee){return Ee})){T=N,A=!1;break}E.set(N,K)}if(A)for(var H=v?3:1,ne=function(Qe){var nt=w.find(function(kt){var sr=E.get(kt);if(sr)return sr.slice(0,Qe).every(function(Mr){return Mr})});if(nt)return T=nt,"break"},ue=H;ue>0;ue--){var Be=ne(ue);if(Be==="break")break}t.placement!==T&&(t.modifiersData[n]._skip=!0,t.placement=T,t.reset=!0)}}const zA={name:"flip",enabled:!0,phase:"main",fn:AA,requiresIfExists:["offset"],data:{_skip:!1}};function gv(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function vv(e){return[Tt,ir,nr,Ot].some(function(t){return e[t]>=0})}function TA(e){var t=e.state,r=e.name,n=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=ma(t,{elementContext:"reference"}),l=ma(t,{altBoundary:!0}),a=gv(s,n),c=gv(l,i,o),f=vv(a),d=vv(c);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":d})}const OA={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:TA};function PA(e,t,r){var n=Ar(e),i=[Ot,Tt].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,s=o[0],l=o[1];return s=s||0,l=(l||0)*i,[Ot,ir].indexOf(n)>=0?{x:l,y:s}:{x:s,y:l}}function LA(e){var t=e.state,r=e.options,n=e.name,i=r.offset,o=i===void 0?[0,0]:i,s=dw.reduce(function(f,d){return f[d]=PA(d,t.rects,o),f},{}),l=s[t.placement],a=l.x,c=l.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=s}const IA={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:LA};function RA(e){var t=e.state,r=e.name;t.modifiersData[r]=yw({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const NA={name:"popperOffsets",enabled:!0,phase:"read",fn:RA,data:{}};function DA(e){return e==="x"?"y":"x"}function MA(e){var t=e.state,r=e.options,n=e.name,i=r.mainAxis,o=i===void 0?!0:i,s=r.altAxis,l=s===void 0?!1:s,a=r.boundary,c=r.rootBoundary,f=r.altBoundary,d=r.padding,h=r.tether,p=h===void 0?!0:h,v=r.tetherOffset,x=v===void 0?0:v,S=ma(t,{boundary:a,rootBoundary:c,padding:d,altBoundary:f}),b=Ar(t.placement),m=Do(t.placement),y=!m,w=Ap(b),C=DA(w),$=t.modifiersData.popperOffsets,E=t.rects.reference,A=t.rects.popper,T=typeof x=="function"?x(Object.assign({},t.rects,{placement:t.placement})):x,z=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if($){if(o){var Y,Z=w==="y"?Tt:Ot,re=w==="y"?nr:ir,J=w==="y"?"height":"width",oe=$[w],L=oe+S[Z],K=oe-S[re],H=p?-A[J]/2:0,ne=m===Io?E[J]:A[J],ue=m===Io?-A[J]:-E[J],Be=t.elements.arrow,Ee=p&&Be?Ep(Be):{width:0,height:0},Qe=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:pw(),nt=Qe[Z],kt=Qe[re],sr=Bs(0,E[J],Ee[J]),Mr=y?E[J]/2-H-sr-nt-z.mainAxis:ne-sr-nt-z.mainAxis,fn=y?-E[J]/2+H+sr+kt+z.mainAxis:ue+sr+kt+z.mainAxis,hn=t.elements.arrow&&Ba(t.elements.arrow),pn=hn?w==="y"?hn.clientTop||0:hn.clientLeft||0:0,mn=(Y=N==null?void 0:N[w])!=null?Y:0,gn=oe+Mr-mn-pn,ye=oe+fn-mn,ii=Bs(p?Ac(L,gn):L,oe,p?_i(K,ye):K);$[w]=ii,D[w]=ii-oe}if(l){var vn,hu=w==="x"?Tt:Ot,pu=w==="x"?nr:ir,jr=$[C],Vi=C==="y"?"height":"width",Ha=jr+S[hu],Ua=jr-S[pu],Hi=[Tt,Ot].indexOf(b)!==-1,Wa=(vn=N==null?void 0:N[C])!=null?vn:0,le=Hi?Ha:jr-E[Vi]-A[Vi]-Wa+z.altAxis,Fr=Hi?jr+E[Vi]+A[Vi]-Wa-z.altAxis:Ua,qo=p&&Hi?lA(le,jr,Fr):Bs(p?le:Ha,jr,p?Fr:Ua);$[C]=qo,D[C]=qo-jr}t.modifiersData[n]=D}}const jA={name:"preventOverflow",enabled:!0,phase:"main",fn:MA,requiresIfExists:["offset"]};function FA(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function BA(e){return e===Ft(e)||!zr(e)?zp(e):FA(e)}function VA(e){var t=e.getBoundingClientRect(),r=Ro(t.width)/e.offsetWidth||1,n=Ro(t.height)/e.offsetHeight||1;return r!==1||n!==1}function HA(e,t,r){r===void 0&&(r=!1);var n=zr(t),i=zr(t)&&VA(t),o=ni(t),s=No(e,i,r),l={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(n||!n&&!r)&&((qn(t)!=="body"||Op(o))&&(l=BA(t)),zr(t)?(a=No(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):o&&(a.x=Tp(o))),{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function UA(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function i(o){r.add(o.name);var s=[].concat(o.requires||[],o.requiresIfExists||[]);s.forEach(function(l){if(!r.has(l)){var a=t.get(l);a&&i(a)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||i(o)}),n}function WA(e){var t=UA(e);return oA.reduce(function(r,n){return r.concat(t.filter(function(i){return i.phase===n}))},[])}function KA(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function YA(e){var t=e.reduce(function(r,n){var i=r[n.name];return r[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var yv={placement:"bottom",modifiers:[],strategy:"absolute"};function bv(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function XA(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,i=t.defaultOptions,o=i===void 0?yv:i;return function(l,a,c){c===void 0&&(c=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},yv,o),modifiersData:{},elements:{reference:l,popper:a},attributes:{},styles:{}},d=[],h=!1,p={state:f,setOptions:function(b){var m=typeof b=="function"?b(f.options):b;x(),f.options=Object.assign({},o,f.options,m),f.scrollParents={reference:Li(l)?Vs(l):l.contextElement?Vs(l.contextElement):[],popper:Vs(a)};var y=WA(YA([].concat(n,f.options.modifiers)));return f.orderedModifiers=y.filter(function(w){return w.enabled}),v(),p.update()},forceUpdate:function(){if(!h){var b=f.elements,m=b.reference,y=b.popper;if(bv(m,y)){f.rects={reference:HA(m,Ba(y),f.options.strategy==="fixed"),popper:Ep(y)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(z){return f.modifiersData[z.name]=Object.assign({},z.data)});for(var w=0;w<f.orderedModifiers.length;w++){if(f.reset===!0){f.reset=!1,w=-1;continue}var C=f.orderedModifiers[w],$=C.fn,E=C.options,A=E===void 0?{}:E,T=C.name;typeof $=="function"&&(f=$({state:f,options:A,name:T,instance:p})||f)}}}},update:KA(function(){return new Promise(function(S){p.forceUpdate(),S(f)})}),destroy:function(){x(),h=!0}};if(!bv(l,a))return p;p.setOptions(c).then(function(S){!h&&c.onFirstUpdate&&c.onFirstUpdate(S)});function v(){f.orderedModifiers.forEach(function(S){var b=S.name,m=S.options,y=m===void 0?{}:m,w=S.effect;if(typeof w=="function"){var C=w({state:f,name:b,instance:p,options:y}),$=function(){};d.push(C||$)}})}function x(){d.forEach(function(S){return S()}),d=[]}return p}}const GA=XA({defaultModifiers:[OA,NA,gA,yA,IA,zA,jA,fA]}),qA=["enabled","placement","strategy","modifiers"];function QA(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}const ZA={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},JA={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:r}=e.elements;if("removeAttribute"in t){const n=(t.getAttribute("aria-describedby")||"").split(",").filter(i=>i.trim()!==r.id);n.length?t.setAttribute("aria-describedby",n.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:r,reference:n}=e.elements,i=(t=r.getAttribute("role"))==null?void 0:t.toLowerCase();if(r.id&&i==="tooltip"&&"setAttribute"in n){const o=n.getAttribute("aria-describedby");if(o&&o.split(",").indexOf(r.id)!==-1)return;n.setAttribute("aria-describedby",o?`${o},${r.id}`:r.id)}}},ez=[];function tz(e,t,r={}){let{enabled:n=!0,placement:i="bottom",strategy:o="absolute",modifiers:s=ez}=r,l=QA(r,qA);const a=_.useRef(s),c=_.useRef(),f=_.useCallback(()=>{var S;(S=c.current)==null||S.update()},[]),d=_.useCallback(()=>{var S;(S=c.current)==null||S.forceUpdate()},[]),[h,p]=Y6(_.useState({placement:i,update:f,forceUpdate:d,attributes:{},styles:{popper:{},arrow:{}}})),v=_.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:S})=>{const b={},m={};Object.keys(S.elements).forEach(y=>{b[y]=S.styles[y],m[y]=S.attributes[y]}),p({state:S,styles:b,attributes:m,update:f,forceUpdate:d,placement:S.placement})}}),[f,d,p]),x=_.useMemo(()=>(Fs(a.current,s)||(a.current=s),a.current),[s]);return _.useEffect(()=>{!c.current||!n||c.current.setOptions({placement:i,strategy:o,modifiers:[...x,v,ZA]})},[o,i,v,n,x]),_.useEffect(()=>{if(!(!n||e==null||t==null))return c.current=GA(e,t,Object.assign({},l,{placement:i,strategy:o,modifiers:[...x,JA,v]})),()=>{c.current!=null&&(c.current.destroy(),c.current=void 0,p(S=>Object.assign({},S,{attributes:{},styles:{popper:{}}})))}},[n,e,t]),h}const wv=()=>{};function rz(e){return e.button===0}function nz(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const dd=e=>e&&("current"in e?e.current:e),xv={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function iz(e,t=wv,{disabled:r,clickTrigger:n="click"}={}){const i=_.useRef(!1),o=_.useRef(!1),s=_.useCallback(c=>{const f=dd(e);w4(!!f,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),i.current=!f||nz(c)||!rz(c)||!!_c(f,c.target)||o.current,o.current=!1},[e]),l=je(c=>{const f=dd(e);f&&_c(f,c.target)&&(o.current=!0)}),a=je(c=>{i.current||t(c)});_.useEffect(()=>{var c,f;if(r||e==null)return;const d=La(dd(e)),h=d.defaultView||window;let p=(c=h.event)!=null?c:(f=h.parent)==null?void 0:f.event,v=null;xv[n]&&(v=zn(d,xv[n],l,!0));const x=zn(d,n,s,!0),S=zn(d,n,m=>{if(m===p){p=void 0;return}a(m)});let b=[];return"ontouchstart"in d.documentElement&&(b=[].slice.call(d.body.children).map(m=>zn(m,"mousemove",wv))),()=>{v==null||v(),x(),S(),b.forEach(m=>m())}},[e,r,n,s,l,a])}function oz(e){const t={};return Array.isArray(e)?(e==null||e.forEach(r=>{t[r.name]=r}),t):e||t}function sz(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function az({enabled:e,enableEvents:t,placement:r,flip:n,offset:i,fixed:o,containerPadding:s,arrowElement:l,popperConfig:a={}}){var c,f,d,h,p;const v=oz(a.modifiers);return Object.assign({},a,{placement:r,enabled:e,strategy:o?"fixed":a.strategy,modifiers:sz(Object.assign({},v,{eventListeners:{enabled:t,options:(c=v.eventListeners)==null?void 0:c.options},preventOverflow:Object.assign({},v.preventOverflow,{options:s?Object.assign({padding:s},(f=v.preventOverflow)==null?void 0:f.options):(d=v.preventOverflow)==null?void 0:d.options}),offset:{options:Object.assign({offset:i},(h=v.offset)==null?void 0:h.options)},arrow:Object.assign({},v.arrow,{enabled:!!l,options:Object.assign({},(p=v.arrow)==null?void 0:p.options,{element:l})}),flip:Object.assign({enabled:!!n},v.flip)}))})}const lz=["children"];function cz(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}const uz=()=>{};function bw(e={}){const t=_.useContext(du),[r,n]=Rb(),i=_.useRef(!1),{flip:o,offset:s,rootCloseEvent:l,fixed:a=!1,placement:c,popperConfig:f={},enableEventListeners:d=!0,usePopper:h=!!t}=e,p=(t==null?void 0:t.show)==null?!!e.show:t.show;p&&!i.current&&(i.current=!0);const v=$=>{t==null||t.toggle(!1,$)},{placement:x,setMenu:S,menuElement:b,toggleElement:m}=t||{},y=tz(m,b,az({placement:c||x||"bottom-start",enabled:h,enableEvents:d??p,offset:s,flip:o,fixed:a,arrowElement:r,popperConfig:f})),w=Object.assign({ref:S||uz,"aria-labelledby":m==null?void 0:m.id},y.attributes.popper,{style:y.styles.popper}),C={show:p,placement:x,hasShown:i.current,toggle:t==null?void 0:t.toggle,popper:h?y:null,arrowProps:h?Object.assign({ref:n},y.attributes.arrow,{style:y.styles.arrow}):{}};return iz(b,v,{clickTrigger:l,disabled:!p}),[w,C]}const dz={usePopper:!0};function Pp(e){let{children:t}=e,r=cz(e,lz);const[n,i]=bw(r);return k.jsx(k.Fragment,{children:t(n,i)})}Pp.displayName="DropdownMenu";Pp.defaultProps=dz;const zc={prefix:String(Math.round(Math.random()*1e10)),current:0},ww=ot.createContext(zc),fz=ot.createContext(!1);let hz=!!(typeof window<"u"&&window.document&&window.document.createElement),fd=new WeakMap;function pz(e=!1){let t=_.useContext(ww),r=_.useRef(null);if(r.current===null&&!e){var n,i;let o=(i=ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||i===void 0||(n=i.ReactCurrentOwner)===null||n===void 0?void 0:n.current;if(o){let s=fd.get(o);s==null?fd.set(o,{id:t.current,state:o.memoizedState}):o.memoizedState!==s.state&&(t.current=s.id,fd.delete(o))}r.current=++t.current}return r.current}function mz(e){let t=_.useContext(ww);t===zc&&!hz&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=pz(!!e),n=`react-aria${t.prefix}`;return e||`${n}-${r}`}function gz(e){let t=ot.useId(),[r]=_.useState(xz()),n=r?"react-aria":`react-aria${zc.prefix}`;return e||`${n}-${t}`}const vz=typeof ot.useId=="function"?gz:mz;function yz(){return!1}function bz(){return!0}function wz(e){return()=>{}}function xz(){return typeof ot.useSyncExternalStore=="function"?ot.useSyncExternalStore(wz,yz,bz):_.useContext(fz)}const xw=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},_v=()=>{};function _w(){const e=vz(),{show:t=!1,toggle:r=_v,setToggle:n,menuElement:i}=_.useContext(du)||{},o=_.useCallback(l=>{r(!t,l)},[t,r]),s={id:e,ref:n||_v,onClick:o,"aria-expanded":!!t};return i&&xw(i)&&(s["aria-haspopup"]=!0),[s,{show:t,toggle:r}]}function kw({children:e}){const[t,r]=_w();return k.jsx(k.Fragment,{children:e(t,r)})}kw.displayName="DropdownToggle";const Mo=_.createContext(null),ga=(e,t=null)=>e!=null?String(e):t||null,Cw=_.createContext(null);Cw.displayName="NavContext";const Lp=Cw,_z=["eventKey","disabled","onClick","active","as"];function kz(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Sw({key:e,href:t,active:r,disabled:n,onClick:i}){const o=_.useContext(Mo),s=_.useContext(Lp),{activeKey:l}=s||{},a=ga(e,t),c=r==null&&e!=null?ga(l)===a:r;return[{onClick:je(d=>{n||(i==null||i(d),o&&!d.isPropagationStopped()&&o(a,d))}),"aria-disabled":n||void 0,"aria-selected":c,[Xo("dropdown-item")]:""},{isActive:c}]}const $w=_.forwardRef((e,t)=>{let{eventKey:r,disabled:n,onClick:i,active:o,as:s=ip}=e,l=kz(e,_z);const[a]=Sw({key:r,href:l.href,disabled:n,onClick:i,active:o});return k.jsx(s,Object.assign({},l,{ref:t},a))});$w.displayName="DropdownItem";function kv(){const e=cw(),t=_.useRef(null),r=_.useCallback(n=>{t.current=n,e()},[e]);return[t,r]}function Va({defaultShow:e,show:t,onSelect:r,onToggle:n,itemSelector:i=`* [${Xo("dropdown-item")}]`,focusFirstItemOnShow:o,placement:s="bottom-start",children:l}){const a=eu(),[c,f]=W6(t,e,n),[d,h]=kv(),p=d.current,[v,x]=kv(),S=v.current,b=jb(c),m=_.useRef(null),y=_.useRef(!1),w=_.useContext(Mo),C=_.useCallback((N,D,Y=D==null?void 0:D.type)=>{f(N,{originalEvent:D,source:Y})},[f]),$=je((N,D)=>{r==null||r(N,D),C(!1,D,"select"),D.isPropagationStopped()||w==null||w(N,D)}),E=_.useMemo(()=>({toggle:C,placement:s,show:c,menuElement:p,toggleElement:S,setMenu:h,setToggle:x}),[C,s,c,p,S,h,x]);p&&b&&!c&&(y.current=p.contains(p.ownerDocument.activeElement));const A=je(()=>{S&&S.focus&&S.focus()}),T=je(()=>{const N=m.current;let D=o;if(D==null&&(D=d.current&&xw(d.current)?"keyboard":!1),D===!1||D==="keyboard"&&!/^key.+$/.test(N))return;const Y=Ur(d.current,i)[0];Y&&Y.focus&&Y.focus()});_.useEffect(()=>{c?T():y.current&&(y.current=!1,A())},[c,y,A,T]),_.useEffect(()=>{m.current=null});const z=(N,D)=>{if(!d.current)return null;const Y=Ur(d.current,i);let Z=Y.indexOf(N)+D;return Z=Math.max(0,Math.min(Z,Y.length)),Y[Z]};return T6(_.useCallback(()=>a.document,[a]),"keydown",N=>{var D,Y;const{key:Z}=N,re=N.target,J=(D=d.current)==null?void 0:D.contains(re),oe=(Y=v.current)==null?void 0:Y.contains(re);if(/input|textarea/i.test(re.tagName)&&(Z===" "||Z!=="Escape"&&J||Z==="Escape"&&re.type==="search")||!J&&!oe||Z==="Tab"&&(!d.current||!c))return;m.current=N.type;const K={originalEvent:N,source:N.type};switch(Z){case"ArrowUp":{const H=z(re,-1);H&&H.focus&&H.focus(),N.preventDefault();return}case"ArrowDown":if(N.preventDefault(),!c)f(!0,K);else{const H=z(re,1);H&&H.focus&&H.focus()}return;case"Tab":op(re.ownerDocument,"keyup",H=>{var ne;(H.key==="Tab"&&!H.target||!((ne=d.current)!=null&&ne.contains(H.target)))&&f(!1,K)},{once:!0});break;case"Escape":Z==="Escape"&&(N.preventDefault(),N.stopPropagation()),f(!1,K);break}}),k.jsx(Mo.Provider,{value:$,children:k.jsx(du.Provider,{value:E,children:l})})}Va.displayName="Dropdown";Va.Menu=Pp;Va.Toggle=kw;Va.Item=$w;const Ew=_.createContext({});Ew.displayName="DropdownContext";const Aw=Ew,zw=_.forwardRef(({className:e,bsPrefix:t,as:r="hr",role:n="separator",...i},o)=>(t=ee(t,"dropdown-divider"),k.jsx(r,{ref:o,className:Q(e,t),role:n,...i})));zw.displayName="DropdownDivider";const Cz=zw,Tw=_.forwardRef(({className:e,bsPrefix:t,as:r="div",role:n="heading",...i},o)=>(t=ee(t,"dropdown-header"),k.jsx(r,{ref:o,className:Q(e,t),role:n,...i})));Tw.displayName="DropdownHeader";const Sz=Tw,Ow=_.forwardRef(({bsPrefix:e,className:t,eventKey:r,disabled:n=!1,onClick:i,active:o,as:s=I6,...l},a)=>{const c=ee(e,"dropdown-item"),[f,d]=Sw({key:r,href:l.href,disabled:n,onClick:i,active:o});return k.jsx(s,{...l,...f,ref:a,className:Q(t,c,d.isActive&&"active",n&&"disabled")})});Ow.displayName="DropdownItem";const $z=Ow,Pw=_.forwardRef(({className:e,bsPrefix:t,as:r="span",...n},i)=>(t=ee(t,"dropdown-item-text"),k.jsx(r,{ref:i,className:Q(e,t),...n})));Pw.displayName="DropdownItemText";const Ez=Pw,Lw=_.createContext(null);Lw.displayName="InputGroupContext";const Ip=Lw,Iw=_.createContext(null);Iw.displayName="NavbarContext";const Az=Iw;function Rw(e,t){return e}const Xi=M.oneOf(["start","end"]),zz=M.oneOfType([Xi,M.shape({sm:Xi}),M.shape({md:Xi}),M.shape({lg:Xi}),M.shape({xl:Xi}),M.shape({xxl:Xi}),M.object]);function Nw(e,t,r){const n=r?"top-end":"top-start",i=r?"top-start":"top-end",o=r?"bottom-end":"bottom-start",s=r?"bottom-start":"bottom-end",l=r?"right-start":"left-start",a=r?"right-end":"left-end",c=r?"left-start":"right-start",f=r?"left-end":"right-end";let d=e?s:o;return t==="up"?d=e?i:n:t==="end"?d=e?f:c:t==="start"?d=e?a:l:t==="down-centered"?d="bottom":t==="up-centered"&&(d="top"),d}const Dw=_.forwardRef(({bsPrefix:e,className:t,align:r,rootCloseEvent:n,flip:i=!0,show:o,renderOnMount:s,as:l="div",popperConfig:a,variant:c,...f},d)=>{let h=!1;const p=_.useContext(Az),v=ee(e,"dropdown-menu"),{align:x,drop:S,isRTL:b}=_.useContext(Aw);r=r||x;const m=_.useContext(Ip),y=[];if(r)if(typeof r=="object"){const N=Object.keys(r);if(N.length){const D=N[0],Y=r[D];h=Y==="start",y.push(`${v}-${D}-${Y}`)}}else r==="end"&&(h=!0);const w=Nw(h,S,b),[C,{hasShown:$,popper:E,show:A,toggle:T}]=bw({flip:i,rootCloseEvent:n,show:o,usePopper:!p&&y.length===0,offset:[0,2],popperConfig:a,placement:w});if(C.ref=ri(Rw(d),C.ref),Cf(()=>{A&&(E==null||E.update())},[A]),!$&&!s&&!m)return null;typeof l!="string"&&(C.show=A,C.close=()=>T==null?void 0:T(!1),C.align=r);let z=f.style;return E!=null&&E.placement&&(z={...f.style,...C.style},f["x-placement"]=E.placement),k.jsx(l,{...f,...C,style:z,...(y.length||p)&&{"data-bs-popper":"static"},className:Q(t,v,A&&"show",h&&`${v}-end`,c&&`${v}-${c}`,...y)})});Dw.displayName="DropdownMenu";const Mw=Dw,jw=_.forwardRef(({bsPrefix:e,split:t,className:r,childBsPrefix:n,as:i=We,...o},s)=>{const l=ee(e,"dropdown-toggle"),a=_.useContext(du);n!==void 0&&(o.bsPrefix=n);const[c]=_w();return c.ref=ri(c.ref,Rw(s)),k.jsx(i,{className:Q(r,l,t&&`${l}-split`,(a==null?void 0:a.show)&&"show"),...c,...o})});jw.displayName="DropdownToggle";const Fw=jw,Bw=_.forwardRef((e,t)=>{const{bsPrefix:r,drop:n="down",show:i,className:o,align:s="start",onSelect:l,onToggle:a,focusFirstItemOnShow:c,as:f="div",navbar:d,autoClose:h=!0,...p}=q1(e,{show:"onToggle"}),v=_.useContext(Ip),x=ee(r,"dropdown"),S=Lb(),b=E=>h===!1?E==="click":h==="inside"?E!=="rootClose":h==="outside"?E!=="select":!0,m=je((E,A)=>{var T,z;!((T=A.originalEvent)==null||(z=T.target)==null)&&z.classList.contains("dropdown-toggle")&&A.source==="mousedown"||(A.originalEvent.currentTarget===document&&(A.source!=="keydown"||A.originalEvent.key==="Escape")&&(A.source="rootClose"),b(A.source)&&(a==null||a(E,A)))}),w=Nw(s==="end",n,S),C=_.useMemo(()=>({align:s,drop:n,isRTL:S}),[s,n,S]),$={down:x,"down-centered":`${x}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return k.jsx(Aw.Provider,{value:C,children:k.jsx(Va,{placement:w,show:i,onSelect:l,onToggle:m,focusFirstItemOnShow:c,itemSelector:`.${x}-item:not(.disabled):not(:disabled)`,children:v?p.children:k.jsx(f,{...p,ref:t,className:Q(o,i&&"show",$[n])})})})});Bw.displayName="Dropdown";const Vw=Object.assign(Bw,{Toggle:Fw,Menu:Mw,Item:$z,ItemText:Ez,Divider:Cz,Header:Sz}),Tz={id:M.string,href:M.string,onClick:M.func,title:M.node.isRequired,disabled:M.bool,align:zz,menuRole:M.string,renderMenuOnMount:M.bool,rootCloseEvent:M.string,menuVariant:M.oneOf(["dark"]),flip:M.bool,bsPrefix:M.string,variant:M.string,size:M.string},Rp=_.forwardRef(({title:e,children:t,bsPrefix:r,rootCloseEvent:n,variant:i,size:o,menuRole:s,renderMenuOnMount:l,disabled:a,href:c,id:f,menuVariant:d,flip:h,...p},v)=>k.jsxs(Vw,{ref:v,...p,children:[k.jsx(Fw,{id:f,href:c,size:o,variant:i,disabled:a,childBsPrefix:r,children:e}),k.jsx(Mw,{role:s,renderOnMount:l,rootCloseEvent:n,variant:d,flip:h,children:t})]}));Rp.displayName="DropdownButton";Rp.propTypes=Tz;const Oz=Rp,Hw=_.forwardRef(({className:e,bsPrefix:t,as:r="span",...n},i)=>(t=ee(t,"input-group-text"),k.jsx(r,{ref:i,className:Q(e,t),...n})));Hw.displayName="InputGroupText";const Np=Hw,Pz=e=>k.jsx(Np,{children:k.jsx(ou,{type:"checkbox",...e})}),Lz=e=>k.jsx(Np,{children:k.jsx(ou,{type:"radio",...e})}),Uw=_.forwardRef(({bsPrefix:e,size:t,hasValidation:r,className:n,as:i="div",...o},s)=>{e=ee(e,"input-group");const l=_.useMemo(()=>({}),[]);return k.jsx(Ip.Provider,{value:l,children:k.jsx(i,{ref:s,...o,className:Q(n,e,t&&`${e}-${t}`,r&&"has-validation")})})});Uw.displayName="InputGroup";const Iz=Object.assign(Uw,{Text:Np,Radio:Lz,Checkbox:Pz}),Rz=_.createContext(null),Ww=Rz,Nz=["as","active","eventKey"];function Dz(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Kw({key:e,onClick:t,active:r,id:n,role:i,disabled:o}){const s=_.useContext(Mo),l=_.useContext(Lp),a=_.useContext(Ww);let c=r;const f={role:i};if(l){!i&&l.role==="tablist"&&(f.role="tab");const d=l.getControllerId(e??null),h=l.getControlledId(e??null);f[Xo("event-key")]=e,f.id=d||n,c=r==null&&e!=null?l.activeKey===e:r,(c||!(a!=null&&a.unmountOnExit)&&!(a!=null&&a.mountOnEnter))&&(f["aria-controls"]=h)}return f.role==="tab"&&(f["aria-selected"]=c,c||(f.tabIndex=-1),o&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=je(d=>{o||(t==null||t(d),e!=null&&s&&!d.isPropagationStopped()&&s(e,d))}),[f,{isActive:c}]}const Yw=_.forwardRef((e,t)=>{let{as:r=ip,active:n,eventKey:i}=e,o=Dz(e,Nz);const[s,l]=Kw(Object.assign({key:ga(i,o.href),active:n},o));return s[Xo("active")]=l.isActive,k.jsx(r,Object.assign({},o,s,{ref:t}))});Yw.displayName="NavItem";const Mz=Yw,jz=["as","onSelect","activeKey","role","onKeyDown"];function Fz(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}const Cv=()=>{},Sv=Xo("event-key"),Xw=_.forwardRef((e,t)=>{let{as:r="div",onSelect:n,activeKey:i,role:o,onKeyDown:s}=e,l=Fz(e,jz);const a=cw(),c=_.useRef(!1),f=_.useContext(Mo),d=_.useContext(Ww);let h,p;d&&(o=o||"tablist",i=d.activeKey,h=d.getControlledId,p=d.getControllerId);const v=_.useRef(null),x=y=>{const w=v.current;if(!w)return null;const C=Ur(w,`[${Sv}]:not([aria-disabled=true])`),$=w.querySelector("[aria-selected=true]");if(!$||$!==document.activeElement)return null;const E=C.indexOf($);if(E===-1)return null;let A=E+y;return A>=C.length&&(A=0),A<0&&(A=C.length-1),C[A]},S=(y,w)=>{y!=null&&(n==null||n(y,w),f==null||f(y,w))},b=y=>{if(s==null||s(y),!d)return;let w;switch(y.key){case"ArrowLeft":case"ArrowUp":w=x(-1);break;case"ArrowRight":case"ArrowDown":w=x(1);break;default:return}w&&(y.preventDefault(),S(w.dataset[l$("EventKey")]||null,y),c.current=!0,a())};_.useEffect(()=>{if(v.current&&c.current){const y=v.current.querySelector(`[${Sv}][aria-selected=true]`);y==null||y.focus()}c.current=!1});const m=ri(t,v);return k.jsx(Mo.Provider,{value:S,children:k.jsx(Lp.Provider,{value:{role:o,activeKey:ga(i),getControlledId:h||Cv,getControllerId:p||Cv},children:k.jsx(r,Object.assign({},l,{onKeyDown:b,ref:m,role:o}))})})});Xw.displayName="Nav";const Bz=Object.assign(Xw,{Item:Mz}),Gw=_.forwardRef(({bsPrefix:e,active:t,disabled:r,eventKey:n,className:i,variant:o,action:s,as:l,...a},c)=>{e=ee(e,"list-group-item");const[f,d]=Kw({key:ga(n,a.href),active:t,...a}),h=je(v=>{if(r){v.preventDefault(),v.stopPropagation();return}f.onClick(v)});r&&a.tabIndex===void 0&&(a.tabIndex=-1,a["aria-disabled"]=!0);const p=l||(s?a.href?"a":"button":"div");return k.jsx(p,{ref:c,...a,...f,onClick:h,className:Q(i,e,d.isActive&&"active",r&&"disabled",o&&`${e}-${o}`,s&&`${e}-action`)})});Gw.displayName="ListGroupItem";const qw=Gw,Qw=_.forwardRef((e,t)=>{const{className:r,bsPrefix:n,variant:i,horizontal:o,numbered:s,as:l="div",...a}=q1(e,{activeKey:"onSelect"}),c=ee(n,"list-group");let f;return o&&(f=o===!0?"horizontal":`horizontal-${o}`),k.jsx(Bz,{ref:t,...a,as:l,className:Q(r,c,i&&`${c}-${i}`,f&&`${c}-${f}`,s&&`${c}-numbered`)})});Qw.displayName="ListGroup";const Vz=Object.assign(Qw,{Item:qw}),$v=1e3;function Hz(e,t,r){const n=(e-t)/(r-t)*100;return Math.round(n*$v)/$v}function Ev({min:e,now:t,max:r,label:n,visuallyHidden:i,striped:o,animated:s,className:l,style:a,variant:c,bsPrefix:f,...d},h){return k.jsx("div",{ref:h,...d,role:"progressbar",className:Q(l,`${f}-bar`,{[`bg-${c}`]:c,[`${f}-bar-animated`]:s,[`${f}-bar-striped`]:s||o}),style:{width:`${Hz(t,e,r)}%`,...a},"aria-valuenow":t,"aria-valuemin":e,"aria-valuemax":r,children:i?k.jsx("span",{className:"visually-hidden",children:n}):n})}const Zw=_.forwardRef(({isChild:e=!1,...t},r)=>{const n={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...t};if(n.bsPrefix=ee(n.bsPrefix,"progress"),e)return Ev(n,r);const{min:i,now:o,max:s,label:l,visuallyHidden:a,striped:c,animated:f,bsPrefix:d,variant:h,className:p,children:v,...x}=n;return k.jsx("div",{ref:r,...x,className:Q(p,d),children:v?g4(v,S=>_.cloneElement(S,{isChild:!0})):Ev({min:i,now:o,max:s,label:l,visuallyHidden:a,striped:c,animated:f,bsPrefix:d,variant:h},r)})});Zw.displayName="ProgressBar";const Uz=Zw;var Wz={prefix:"far",iconName:"hourglass-half",icon:[384,512,["hourglass-2"],"f252","M0 24C0 10.7 10.7 0 24 0H360c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V67c0 40.3-16 79-44.5 107.5L225.9 256l81.5 81.5C336 366 352 404.7 352 445v19h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V445c0-40.3 16-79 44.5-107.5L158.1 256 76.5 174.5C48 146 32 107.3 32 67V48H24C10.7 48 0 37.3 0 24zM110.5 371.5c-3.9 3.9-7.5 8.1-10.7 12.5H284.2c-3.2-4.4-6.8-8.6-10.7-12.5L192 289.9l-81.5 81.5zM284.2 128C297 110.4 304 89 304 67V48H80V67c0 22.1 7 43.4 19.8 61H284.2z"]},Kz={prefix:"far",iconName:"calendar-plus",icon:[448,512,[],"f271","M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V256c0-13.3-10.7-24-24-24z"]};function Jw({value:e,onChange:t}){var o;const[r,n]=_.useState(((o=Object.entries(Qt).reverse().find(([,s])=>s.seconds<=3600))==null?void 0:o[0])??"seconds"),i=({currentTarget:s})=>{const l=Number(s.value);t(l*Qt[r].seconds)};return k.jsxs(Iz,{children:[k.jsx(gi.Control,{type:"number",value:e?e/Qt[r].seconds:"",onChange:i}),k.jsx(Oz,{variant:"outline-secondary",align:"end",title:Qt[r].name,children:Object.entries(Qt).map(([s,l])=>k.jsx(Vw.Item,{active:r===s,onClick:()=>n(s),children:l.name},s))})]})}function Dp({show:e,onHide:t,durationId:r,eventId:n,logId:i}){const[o,s]=_.useState(""),[l,a]=_.useState(),c=_.useContext(tu),f=()=>{c.add({name:o,eventId:n,logId:i,durationId:r,finishAfterSeconds:l||void 0}),d()},d=()=>{s(""),a(void 0),t()};return k.jsxs(Ia,{show:e,title:"Vista nýjan teljara",onHide:d,primaryBtnText:"Vista",onPrimaryBtnClick:f,children:[k.jsx(Po,{label:"Heiti teljara",value:o,onChange:s,autoFocus:!0}),k.jsx(gi.Label,{children:"Telja upp í ..."}),k.jsx(Jw,{value:l,onChange:a})]})}function Yz({id:e,text:t,inGameTime:r}){const[n,i]=_.useState(!1),{time:o}=_.useContext(un),{remove:s}=_.useContext(Bi),l=a=>{const c=Math.floor(a/60),f=Math.floor(c/60),d=Math.floor(f/24);return d>=1?`${d} dagar síðan`:f>=1?`${f} klst. síðan`:c>=1?`${c} mín. síðan`:`${a} sek. síðan`};return k.jsxs("div",{className:"hover-container p-2",children:[k.jsxs("div",{className:"d-flex w-100 justify-content-between",style:{minHeight:31},children:[t,k.jsxs("div",{className:"show-on-hover d-flex gap-1",children:[k.jsx(We,{variant:"outline-secondary",size:"sm",onClick:()=>i(!0),children:k.jsx(Fe,{icon:Wz})}),k.jsx(We,{variant:"outline-danger",size:"sm",onClick:()=>s(e),children:k.jsx(Fe,{icon:Ma})})]}),k.jsx("small",{className:"hide-on-hover",children:l(o-r)})]}),k.jsx(Dp,{show:n,onHide:()=>i(!1),logId:e})]})}function Xz({className:e,children:t}){return k.jsx(qw,{className:e,children:t})}function Gz({variant:e,children:t}){return k.jsx(Vz,{variant:e,children:t})}const Av=Object.assign(Gz,{Item:Xz});function qz(){const[e,t]=_.useState(!1),r=_.useContext(Bi);return k.jsxs("div",{className:"logs",children:[k.jsxs(Or,{children:[k.jsxs(ja,{className:"d-flex justify-content-between p-2",children:[k.jsx("h5",{children:"Atburðir"}),k.jsx(We,{variant:"outline-secondary",size:"sm",onClick:()=>t(!0),children:k.jsx(Fe,{icon:uu})})]}),k.jsx(Cp,{className:"p-0",children:k.jsx(Av,{variant:"flush",children:[...r.list].reverse().map(n=>k.jsx(Av.Item,{className:"p-0",children:k.jsx(Yz,{id:n.id,text:n.text,inGameTime:n.inGameTime})},n.id))})})]}),k.jsx(P4,{show:e,onHide:()=>t(!1)})]})}function Qz(){const{time:e}=_.useContext(un),t=e%Qt.days.seconds,r=Math.floor(t/Qt.hours.seconds%24),n=Math.floor(t/Qt.minutes.seconds%60),i=o=>o<10?`0${o}`:o;return k.jsxs("div",{style:{fontSize:"xxx-large"},children:[i(r),":",i(n)]})}var ex=Object.defineProperty,Zz=Object.getOwnPropertyDescriptor,Jz=(e,t,r)=>t in e?ex(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eT=(e,t,r,n)=>{for(var i=n>1?void 0:n?Zz(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&ex(t,r,i),i},tT=(e,t,r)=>(Jz(e,typeof t!="symbol"?t+"":t,r),r);let Wf=class extends Pn{firstUpdated(){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("canvas"),t=e==null?void 0:e.getContext("2d");if(e&&t){const n=e.width/2,i=e.height;let o=0;const s=20,l=60;let a=Math.PI;const c=15,f=60,d=()=>{t.clearRect(0,0,e.width,e.height);const h=n+l*Math.cos(o),p=i-l*Math.sin(o),v=n+f*Math.cos(a),x=i-f*Math.sin(a);t.fillStyle="yellow",t.beginPath(),t.arc(h,p,s,0,Math.PI*2),t.fill(),t.fillStyle="gray",t.beginPath(),t.arc(v,x,c,0,Math.PI*2),t.fill(),o+=.01,a+=.01,requestAnimationFrame(d)};d()}}render(){return O`<canvas></canvas>`}};tT(Wf,"styles",W`
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
  `);Wf=eT([Qf("day-phase-display")],Wf);function rT(){const{time:e,isPlaying:t,setPlaySpeed:r}=_.useContext(un),n=i=>{const o=i%60,s=Math.floor(i/60),l=s%60,a=Math.floor(s/60),c=a%24;return`${Math.floor(a/24)} dagar, ${c} klukkutímar, ${l} mínútur og ${o} sekúndur`};return k.jsxs("div",{className:"time d-flex flex-column align-items-center",children:[n(e),k.jsx(Qz,{}),k.jsx("div",{children:t?k.jsx(We,{variant:"danger",onClick:()=>r(0),children:k.jsx(Fe,{icon:S6})}):k.jsx(We,{variant:"success",onClick:()=>r(1),children:k.jsx(Fe,{icon:G1})})})]})}const zv=3600;function nT({show:e,onHide:t}){const[r,n]=_.useState(""),[i,o]=_.useState(zv),{add:s}=_.useContext(nu),l=()=>{s({name:r,duration:i}),a()},a=()=>{t(),n(""),o(zv)};return k.jsxs(Ia,{show:e,title:"Vista nýtt tímabil",onHide:a,primaryBtnText:"Vista",onPrimaryBtnClick:l,children:[k.jsx(Po,{label:"Heiti",value:r,onChange:n}),k.jsx(gi.Label,{children:"Tímalengd"}),k.jsx(Jw,{value:i,onChange:o})]})}function iT({id:e,name:t,duration:r}){const[n,i]=_.useState(!1),{remove:o}=_.useContext(nu),{add:s}=_.useContext(Bi),{addTime:l}=_.useContext(un),a=()=>{const c=l(r);s({text:t,inGameTime:c,durationId:e})};return k.jsxs(k.Fragment,{children:[k.jsx(Or,{className:"p-2 mt-2",children:k.jsxs("div",{className:"d-flex w-100 justify-content-between",children:[k.jsxs("div",{children:[k.jsx(We,{variant:"outline-success",size:"sm",onClick:a,children:k.jsx(Fe,{icon:$6})})," ",t]}),k.jsxs("div",{children:[k.jsx(We,{className:"me-1",variant:"outline-secondary",size:"sm",onClick:()=>i(!0),children:k.jsx(Fe,{icon:X1})}),k.jsx(We,{variant:"outline-danger",size:"sm",onClick:()=>o(e),children:k.jsx(Fe,{icon:Ma})})]})]})}),k.jsx(Dp,{show:n,onHide:()=>i(!1),durationId:e})]})}function oT(){const[e,t]=_.useState(!1),r=_.useContext(nu);return k.jsxs("div",{children:[k.jsx(Or,{style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:k.jsxs(ja,{className:"d-flex justify-content-between p-2",style:{borderBottom:"none"},children:[k.jsx("h5",{children:"Tímabil"}),k.jsx(We,{variant:"outline-secondary",size:"sm",onClick:()=>t(!0),children:k.jsx(Fe,{icon:uu})})]})}),r.list.map(n=>k.jsx(iT,{id:n.id,name:n.name,duration:n.duration},n.id)),k.jsx(nT,{show:e,onHide:()=>t(!1)})]})}function sT({show:e,onHide:t}){const[r,n]=_.useState(""),{add:i}=_.useContext(iu),o=()=>{i({name:r}),n(""),t()};return k.jsx(Ia,{show:e,title:"Vista nýjan atburð",onHide:t,primaryBtnText:"Vista",onPrimaryBtnClick:o,children:k.jsx(Po,{label:"Heiti",value:r,onChange:n})})}function aT({id:e,name:t}){const[r,n]=_.useState(!1),{remove:i}=_.useContext(iu),{add:o}=_.useContext(Bi),{time:s}=_.useContext(un);return k.jsxs(k.Fragment,{children:[k.jsx(Or,{className:"p-2 mt-2",children:k.jsxs("div",{className:"d-flex w-100 justify-content-between",children:[k.jsxs("div",{children:[k.jsx(We,{variant:"outline-success",size:"sm",onClick:()=>o({text:t,inGameTime:s,eventId:e}),children:k.jsx(Fe,{icon:Kz})})," ",t]}),k.jsxs("div",{children:[k.jsx(We,{className:"me-1",variant:"outline-secondary",size:"sm",onClick:()=>n(!0),children:k.jsx(Fe,{icon:X1})}),k.jsx(We,{variant:"outline-danger",size:"sm",onClick:()=>i(e),children:k.jsx(Fe,{icon:Ma})})]})]})}),k.jsx(Dp,{show:r,onHide:()=>n(!1),eventId:e})]})}function lT(){const[e,t]=_.useState(!1),r=_.useContext(iu);return k.jsxs("div",{children:[k.jsx(Or,{style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:k.jsxs(ja,{className:"d-flex justify-content-between p-2",style:{borderBottom:"none"},children:[k.jsx("h5",{children:"Viðburðir"}),k.jsx(We,{variant:"outline-secondary",size:"sm",onClick:()=>t(!0),children:k.jsx(Fe,{icon:uu})})]})}),r.list.map(n=>k.jsx(aT,{id:n.id,name:n.name},n.id)),k.jsx(sT,{show:e,onHide:()=>t(!1)})]})}function cT({show:e,onHide:t}){const[r,n]=_.useState(""),[i,o]=_.useState(1),{add:s}=_.useContext(ru),l=()=>{s({name:r,speed:i}),n(""),o(1),t()};return k.jsxs(Ia,{show:e,title:"Vista nýjan tímahraða",onHide:t,primaryBtnText:"Vista",onPrimaryBtnClick:l,children:[k.jsx(Po,{label:"Heiti",value:r,onChange:n}),k.jsx(Po,{type:"number",label:"Hraði",text:"Hraði sem margfeldi við raunverulegan tíma.",value:i,onChange:a=>o(a??0)})]})}function uT({id:e,name:t,speed:r}){const{setPlaySpeed:n}=_.useContext(un),{remove:i}=_.useContext(ru);return k.jsx(Or,{className:"p-2 mt-2",children:k.jsxs("div",{className:"d-flex w-100 justify-content-between",children:[k.jsxs("div",{children:[k.jsx(We,{variant:"outline-success",size:"sm",onClick:()=>n(r),children:k.jsx(Fe,{icon:G1})})," ",t]}),k.jsx(We,{variant:"outline-danger",size:"sm",onClick:()=>i(e),children:k.jsx(Fe,{icon:Ma})})]})})}function dT(){const[e,t]=_.useState(!1),r=_.useContext(ru);return k.jsxs("div",{children:[k.jsx(Or,{style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:k.jsxs(ja,{className:"d-flex justify-content-between p-2",style:{borderBottom:"none"},children:[k.jsx("h5",{children:"Spilunarhraði"}),k.jsx(We,{variant:"outline-secondary",size:"sm",onClick:()=>t(!0),children:k.jsx(Fe,{icon:uu})})]})}),r.list.map(n=>k.jsx(uT,{id:n.id,name:n.name,speed:n.speed},n.id)),k.jsx(cT,{show:e,onHide:()=>t(!1)})]})}function fT(){return k.jsxs("div",{className:"lists",children:[k.jsx(dT,{}),k.jsx("hr",{}),k.jsx(oT,{}),k.jsx("hr",{}),k.jsx(lT,{})]})}function hT({id:e,durationId:t,eventId:r,logId:n,name:i,finishAfterSeconds:o}){const{time:s,isPlaying:l}=_.useContext(un),{list:a}=_.useContext(Bi),{remove:c}=_.useContext(tu),f=_.useCallback(()=>{var p,v,x;return t?((p=a.findLast(S=>S.durationId===t))==null?void 0:p.inGameTime)??0:r?((v=a.findLast(S=>S.eventId===r))==null?void 0:v.inGameTime)??0:n?((x=a.find(S=>S.id===n))==null?void 0:x.inGameTime)??0:0},[a,t,r,n]),d=p=>{const v=Math.floor(p/60),x=Math.floor(v/60),S=Math.floor(x/24);return S>1?`${S} dagar síðan`:x>1?`${x} klukkutímar síðan`:v>1?`${v} mínútur síðan`:`${p} sekúndur síðan`},h=s-f()>(o??0);return k.jsxs(Or,{className:"p-2 mt-2 hover-container",children:[k.jsxs("div",{className:"d-flex w-100 justify-content-between",style:{minHeight:31},children:[i,k.jsx("div",{className:"show-on-hover d-flex gap-1",children:k.jsx(We,{variant:"outline-danger",size:"sm",onClick:()=>c(e),children:k.jsx(Fe,{icon:Ma})})}),k.jsx("small",{className:"hide-on-hover",children:d(s-f())})]}),o&&k.jsx(Uz,{className:"mt-1",style:{height:"0.5em"},animated:l&&!h,variant:h?"danger":void 0,now:s-f(),max:o})]})}function pT(){const{list:e}=_.useContext(tu);return k.jsxs("div",{className:"mt-3",children:[k.jsx(Or,{style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:k.jsx(Or.Header,{className:"p-2",style:{borderBottom:"none"},children:k.jsx("h5",{children:"Teljarar"})})}),e.map(t=>k.jsx(hT,{id:t.id,name:t.name,durationId:t.durationId,eventId:t.eventId,logId:t.logId,finishAfterSeconds:t.finishAfterSeconds},t.id))]})}const mT=[{version:"0.2.0",changes:['Bætt við möguleikanum á að "import"-a og "export"-a gögnum úr appinu. Þetta er aðallega hugsað til að geta fært gögn yfir á annan vafra.']}];var gT=Object.defineProperty,vT=Object.getOwnPropertyDescriptor,yT=(e,t,r,n)=>{for(var i=n>1?void 0:n?vT(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&gT(t,r,i),i};let Tv=class extends Pn{render(){return O`
      <sl-button variant="neutral" size="small" pill outline @click=${this.openDialog}>
        ${"0.2.0"}
      </sl-button>
      <sl-dialog label="Breytingasaga">
        ${mT.map(e=>O`
          <strong>${e.version}</strong>
          <ul>
            ${e.changes.map(t=>O`
              <li>${t}</li>
            `)}
          </ul>
        `)}
      </sl-dialog>
    `}openDialog(){var e,t;(t=(e=this.renderRoot)==null?void 0:e.querySelector("sl-dialog"))==null||t.show()}};Tv=yT([Qf("change-log-button")],Tv);var tx=Object.defineProperty,bT=Object.getOwnPropertyDescriptor,wT=(e,t,r)=>t in e?tx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,xT=(e,t,r,n)=>{for(var i=n>1?void 0:n?bT(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&tx(t,r,i),i},_T=(e,t,r)=>(wT(e,typeof t!="symbol"?t+"":t,r),r);let Kf=class extends Pn{render(){return O`
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
    `}openDialog(){var e,t;(t=(e=this.renderRoot)==null?void 0:e.querySelector(".settings-dialog"))==null||t.show()}importData(){var t,r;const e=(r=(t=this.renderRoot)==null?void 0:t.querySelector("#import-text"))==null?void 0:r.value;localStorage.clear(),e&&Object.entries(JSON.parse(e)).forEach(([n,i])=>{localStorage.setItem(n,JSON.stringify(i))}),window.location.reload()}firstUpdated(){var r;const e={};Object.keys(localStorage).forEach(n=>e[n]=JSON.parse(localStorage.getItem(n)??"")||void 0);const t=(r=this.renderRoot)==null?void 0:r.querySelector("#export-text");t&&(t.value=JSON.stringify(e,null,2))}};_T(Kf,"styles",W`
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
  `);Kf=xT([Qf("top-panel")],Kf);function kT(){return k.jsxs("div",{children:[k.jsx("top-panel",{}),k.jsx("div",{className:"App",children:k.jsxs(h4,{children:[k.jsx(qz,{}),k.jsxs("div",{style:{flex:1},children:[k.jsx(rT,{}),k.jsx(pT,{})]}),k.jsx(fT,{})]})})]})}const CT="modulepreload",ST=function(e){return"/"+e},Ov={},$T=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){const o=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(r.map(a=>{if(a=ST(a),a in Ov)return;Ov[a]=!0;const c=a.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const v=o[p];if(v.href===a&&(!c||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${f}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":CT,c||(h.as="script",h.crossOrigin=""),h.href=a,l&&h.setAttribute("nonce",l),document.head.appendChild(h),c)return new Promise((p,v)=>{h.addEventListener("load",p),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},ET=e=>{e&&e instanceof Function&&$T(()=>import("./web-vitals-BhWu73fZ.js"),[]).then(({getCLS:t,getFID:r,getFCP:n,getLCP:i,getTTFB:o})=>{t(e),r(e),n(e),i(e),o(e)})},AT=Ed.createRoot(document.getElementById("root"));AT.render(k.jsx(ot.StrictMode,{children:k.jsx(kT,{})}));ET();
