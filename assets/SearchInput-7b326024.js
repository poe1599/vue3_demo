import{j as J,k as z,u as w,h as j,w as x,c as M,l as G,e as H,q as K,r as D,o as g,a as y,b as f,s as E,v as R,F,f as $,t as k,d as I,x as X,T as Y,i as Z,y as ee,z as te,A as ne}from"./index-2d613598.js";import{_ as U}from"./plugin-vueexport-helper-c27b6911.js";const Fe="/vue3_demo/assets/logo-cb6e08a6.svg";var T;const b=typeof window<"u",se=e=>typeof e<"u",oe=e=>typeof e=="function",ae=e=>typeof e=="string",re=()=>{};b&&((T=window==null?void 0:window.navigator)!=null&&T.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function le(e){return typeof e=="function"?e():w(e)}function ie(e){return e}function ue(e){return J()?(z(e),!0):!1}function O(e){var t;const o=le(e);return(t=o==null?void 0:o.$el)!=null?t:o}const W=b?window:void 0;b&&window.document;b&&window.navigator;b&&window.location;function C(...e){let t,o,n,c;if(ae(e[0])||Array.isArray(e[0])?([o,n,c]=e,t=W):[t,o,n,c]=e,!t)return re;Array.isArray(o)||(o=[o]),Array.isArray(n)||(n=[n]);const l=[],_=()=>{l.forEach(a=>a()),l.length=0},d=(a,u,r)=>(a.addEventListener(u,r,c),()=>a.removeEventListener(u,r,c)),v=x(()=>O(t),a=>{_(),a&&l.push(...o.flatMap(u=>n.map(r=>d(a,u,r))))},{immediate:!0,flush:"post"}),p=()=>{v(),_()};return ue(p),p}function ce(e,t,o={}){const{window:n=W,ignore:c,capture:l=!0,detectIframe:_=!1}=o;if(!n)return;let d=!0,v;const p=s=>{n.clearTimeout(v);const i=O(e);if(!(!i||i===s.target||s.composedPath().includes(i))){if(!d){d=!0;return}t(s)}},a=s=>c&&c.some(i=>{const m=O(i);return m&&(s.target===m||s.composedPath().includes(m))}),u=[C(n,"click",p,{passive:!0,capture:l}),C(n,"pointerdown",s=>{const i=O(e);i&&(d=!s.composedPath().includes(i)&&!a(s))},{passive:!0}),C(n,"pointerup",s=>{if(s.button===0){const i=s.composedPath();s.composedPath=()=>i,v=n.setTimeout(()=>p(s),50)}},{passive:!0}),_&&C(n,"blur",s=>{var i;const m=O(e);((i=n.document.activeElement)==null?void 0:i.tagName)==="IFRAME"&&!(m!=null&&m.contains(n.document.activeElement))&&t(s)})].filter(Boolean);return()=>u.forEach(s=>s())}function de(e){return JSON.parse(JSON.stringify(e))}const V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P="__vueuse_ssr_handlers__";V[P]=V[P]||{};V[P];var B;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(B||(B={}));var _e=Object.defineProperty,Q=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,L=(e,t,o)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ve=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&L(e,o,t[o]);if(Q)for(var o of Q(t))fe.call(t,o)&&L(e,o,t[o]);return e};const me={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ve({linear:ie},me);function q(e,t,o,n={}){var c,l,_;const{clone:d=!1,passive:v=!1,eventName:p,deep:a=!1,defaultValue:u}=n,r=G(),s=o||(r==null?void 0:r.emit)||((c=r==null?void 0:r.$emit)==null?void 0:c.bind(r))||((_=(l=r==null?void 0:r.proxy)==null?void 0:l.$emit)==null?void 0:_.bind(r==null?void 0:r.proxy));let i=p;t||(t="modelValue"),i=p||i||`update:${t.toString()}`;const m=h=>d?oe(d)?d(h):de(h):h,N=()=>se(e[t])?m(e[t]):u;if(v){const h=N(),A=j(h);return x(()=>e[t],S=>A.value=m(S)),x(A,S=>{(S!==e[t]||a)&&s(i,S)},{deep:a}),A}else return M({get(){return N()},set(h){s(i,h)}})}const he={class:"search__input"},ge={class:"search__placeholder"},ye=["onClick"],Oe={class:"search__fold"},Ie={key:0,class:"search__menu"},we=["onClick"],be={name:"AreaSelector"},Se=Object.assign(be,{props:{modelValue:{type:Array,default:()=>[],required:!0}},emits:["update:modelValue","areaChange"],setup(e,{emit:t}){const n=q(e,"modelValue",t),c=j(null),l=H({isFolded:!0,list:[]}),_=M(()=>l.list.filter(a=>n.value.includes(a.id))),d=()=>{const a=["基隆","台北","新北","桃園","新竹","苗栗","台中","彰化","雲林","南投","嘉義","台南","高雄","屏東","台東","花蓮","澎湖","綠島","蘭嶼","小琉球","金門","馬祖"];l.list=a.map(u=>({id:u,name:u}))};K(()=>{d()});const v=({id:a})=>{const u=n.value.findIndex(r=>r===a);u<0?n.value.push(a):n.value.splice(u,1),t("areaChange",n.value)},p=({id:a})=>n.value.findIndex(r=>r===a)<0?"hollowButton":"solidButton";return ce(c,()=>{l.isFolded=!0}),(a,u)=>{const r=D("SvgIcon");return g(),y("div",{ref_key:"AreaSelector",ref:c,class:"search"},[f("div",{class:"search__group",onClick:u[0]||(u[0]=s=>l.isFolded=!l.isFolded)},[f("div",he,[E(f("span",ge,"目的地",512),[[R,!w(_).length]]),(g(!0),y(F,null,$(w(_),s=>(g(),y("span",{key:s.id,class:"search__selected"},[f("span",null,k(s.name),1),f("button",{class:"search__clear",onClick:i=>v(s)},[I(r,{name:"cross"})],8,ye)]))),128))]),f("button",Oe,[I(r,{name:"boldArrow"})])]),I(Y,{name:"slide--down"},{default:X(()=>[l.isFolded?ee("",!0):(g(),y("div",Ie,[(g(!0),y(F,null,$(l.list,s=>(g(),y("button",{key:s.id,class:Z(p(s)),onClick:i=>v(s)},k(s.name),11,we))),128))]))]),_:1})],512)}}}),$e=U(Se,[["__scopeId","data-v-80146238"]]);const Ce={class:"search"},xe={class:"search__group"},Ae={class:"search__magnifier"},Ee={name:"SearchInput"},Ve=Object.assign(Ee,{props:{modelValue:{type:String,default:"",required:!0}},emits:["update:modelValue","inputChange"],setup(e,{emit:t}){const n=q(e,"modelValue",t);return x(()=>n.value,c=>{t("inputChange",c)}),(c,l)=>{const _=D("SvgIcon");return g(),y("div",Ce,[f("div",xe,[E(f("input",{"onUpdate:modelValue":l[0]||(l[0]=d=>ne(n)?n.value=d:null),type:"text",class:"search__input",placeholder:"搜尋關鍵字"},null,512),[[te,w(n)]]),E(f("button",{class:"search__clear",onClick:l[1]||(l[1]=d=>n.value="")},[I(_,{name:"cross"})],512),[[R,w(n)]]),f("span",Ae,[I(_,{name:"search"})])])])}}}),ke=U(Ve,[["__scopeId","data-v-95ac1de0"]]);export{$e as A,ke as S,Fe as _,ce as o};
