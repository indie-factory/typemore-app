import{i as v,c as k}from"./index-t7pAO_uB.js";import{g}from"./ProviderApi-DPvaIvaQ.js";import{d as V,b as s,E as b,O as r,P as d,Q as i,q as o,U as h,V as x,F as _}from"./@vue-mRSmcEt4.js";import{j as C,k as m,l as B,h as P,m as y}from"./vuetify-C1e8o-wN.js";/* empty css             */import"./vue-router-DceEJ2op.js";import"./axios-B6xwUs71.js";const w=c=>v.post("/publishing",{text:c}),M=V({__name:"Provider",setup(c){const t=s(!1),u=s({facebook:{name:"facebook",connected:!1},instagram:{name:"instagram",connected:!1},linkedin:{name:"linkedin",connected:!1}}),l=s("");function f(e){k(e)}function p(){t.value=!0,w(l.value).then(e=>{alert("발행 완료.")}).catch(e=>{alert("발행 실패.")}).finally(()=>{t.value=!1})}return b(async()=>{const e=await g();for(const n of e)u.value[n.providerType.toLowerCase()].connected=!0}),(e,n)=>(r(),d(P,{class:"h-100"},{default:i(()=>[o(B,null,{default:i(()=>[(r(!0),h(_,null,x(u.value,a=>(r(),d(y,{key:a.name},{default:i(()=>[o(m,{text:a.name,class:"ma-3",onClick:q=>f(a.name),disabled:a.connected},null,8,["text","onClick","disabled"])]),_:2},1024))),128)),o(C,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=a=>l.value=a)},null,8,["modelValue"]),o(m,{text:"Publishing",onClick:p,disabled:t.value,loading:t.value},null,8,["disabled","loading"])]),_:1})]),_:1}))}});export{M as default};
