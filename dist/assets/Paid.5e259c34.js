import{_ as k,r as u,i as C,u as L,a as h,c as l,b as m,d as s,k as d,p as S,D as B,v as M,F as i,m as _,C as I,o,E as $,t as z,e as A,n as V,g as P,s as T,x as D}from"./index.47ead3c3.js";import{_ as N}from"./TaskCard.c4e8cd8c.js";/* empty css                                                  */import{_ as U}from"./TaskerNav.740763ec.js";import"./TaskerSideBar.adb157d4.js";import{A as j}from"./AllTasks.70a4653a.js";/* empty css                                                 */const g=c=>(T("data-v-43b78cc3"),c=c(),D(),c),E={class:"bg-white col-span-8 flex flex-row space-x-10 justify-center"},F={class:"flex items-center border rounded-lg px-4 py-2 m-2"},K=g(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"",viewBox:"0 0 24 24"},[s("path",{d:"M9 17a8 8 0 1 1 6.08-13.444l5.613 5.614A1 1 0 0 1 19 11.414l-.003.003-5.614-5.613A8 8 0 0 1 9 17zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})],-1)),R=[K],O={class:"flex space-x-2 flex-row"},q=g(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z","clip-rule":"evenodd"})],-1)),G=[q],H={class:"hover-parent"},J={class:"checkboxes"},Q=["value"],W={class:"checkbox-text"},X=I('<div class="flex space-x-2" data-v-43b78cc3><p data-v-43b78cc3>price</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-43b78cc3><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-43b78cc3></path></svg></div><div class="flex space-x-2" data-v-43b78cc3><p data-v-43b78cc3>other filters</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-43b78cc3><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-43b78cc3></path></svg></div><div class="flex space-x-2" data-v-43b78cc3><p data-v-43b78cc3>Other</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-43b78cc3><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-43b78cc3></path></svg></div>',3),Y={class:"min-h-screen bg-slate-400 grid grid-cols-1 md:grid-cols-12 mx-0 md:mx-10 gap-0 md:gap-6"},Z={class:"bg-gray-200 col-span-4"},ee={class:"bg-green-200 col-span-1 md:col-span-8"},se=["onClick"],te={__name:"Paid",setup(c){const f=P(),n=u([]),p=u([]),r=C(!1),w=L();h.get("http://127.0.0.1:8000/api/categories").then(t=>{n.push(...t.data)});const b=w.user.id,x=new URLSearchParams([["user_id",b]]);return h.get("http://127.0.0.1:8000/api/tasker-paid-tasks",{params:x}).then(t=>{p.push(...t.data)}),(t,a)=>(o(),l(i,null,[m(U),s("div",E,[s("div",F,[d(s("input",{type:"text",placeholder:"Search...","onUpdate:modelValue":a[0]||(a[0]=e=>t.searchTerm=e),onKeydown:a[1]||(a[1]=B((...e)=>t.search&&t.search(...e),["enter"])),class:"w-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"},null,544),[[S,t.searchTerm]]),s("button",{onClick:a[2]||(a[2]=(...e)=>t.search&&t.search(...e)),class:"ml-2"},R)]),s("div",O,[s("button",{class:"hover-button",onMouseover:a[3]||(a[3]=e=>r.value=!0),onMouseout:a[4]||(a[4]=e=>r.value=!1)},G,32)]),s("div",H,[d(s("div",J,[(o(!0),l(i,null,_(n,(e,v)=>(o(),l("label",{key:`item-${v}`,class:"checkbox-label"},[d(s("input",{type:"checkbox",value:e,"onUpdate:modelValue":a[5]||(a[5]=y=>t.selectedItems=y),class:"checkbox-input"},null,8,Q),[[$,t.selectedItems]]),s("span",W,z(e.job_category_name),1)]))),128))],512),[[M,r.value]])]),X]),s("div",Y,[s("div",Z,[m(j)]),s("div",ee,[(o(!0),l(i,null,_(p,e=>(o(),l("div",{class:"m-2 space-y-5",onClick:v=>A(f).push(`/tasker-paid-tasks/${e.id}`)},[(o(),V(N,{key:e.id,title:e.title,status:e.status,amount:e.amount,location:e.location,date:e.date_on,date_before:e.date_before,offers:e.offers,time:e.time},null,8,["title","status","amount","location","date","date_before","offers","time"]))],8,se))),256))])])],64))}},ne=k(te,[["__scopeId","data-v-43b78cc3"]]);export{ne as default};
