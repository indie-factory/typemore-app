import{u as _,g as V,h as C,i as M}from"./vuetify-C1e8o-wN.js";import{d as O,b as a,A as b,O as x,P as B,Q as g,q as h,u as I}from"./@vue-mRSmcEt4.js";const E=O({__name:"Schedules",setup(S){const w=a([0,1,2,3,4,5,6]),o=a([new Date]),l=a([]),r=a(["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"]),u=a(["Facebook","Instagram","Threads","LinkedIn"]);function y({start:e,end:n}){const s=[],d=e,c=n,i=(c.getTime()-d.getTime())/864e5,D=t(i,i+20);for(let m=0;m<D;m++){const f=t(0,3)===0,p=t(d.getTime(),c.getTime()),v=new Date(p-p%9e5),k=t(2,f?288:8)*9e5,T=new Date(v.getTime()+k);s.push({title:u.value[t(0,u.value.length-1)],start:v,end:T,color:r.value[t(0,r.value.length-1)],allDay:!f})}l.value=s}function t(e,n){return Math.floor((n-e+1)*Math.random())+e}return b(()=>{const e=_();y({start:e.startOfDay(e.startOfMonth(new Date)),end:e.endOfDay(e.endOfMonth(new Date))})}),(e,n)=>(x(),B(C,{class:"w-100"},{default:g(()=>[h(V,null,{default:g(()=>[h(I(M),{ref:"calendar",modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=s=>o.value=s),events:l.value,weekdays:w.value,"hide-week-number":""},null,8,["modelValue","events","weekdays"])]),_:1})]),_:1}))}});export{E as default};
