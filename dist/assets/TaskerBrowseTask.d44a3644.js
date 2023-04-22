import{_ as x,e as h,j as f,f as m,c as l,a as b,b as s,k as i,p as k,E as y,v as B,F as n,m as g,C,o as a,G as L,t as M,g as T,n as z,s as S,x as $,i as I}from"./index.c1ad8f3c.js";import{_ as V}from"./TaskCard.38947591.js";/* empty css                                                  */import{_ as j}from"./TaskerNav.8187326a.js";import"./TaskerSideBar.b3bcd77c.js";/* empty css                                                 */const c=r=>(S("data-v-448390ef"),r=r(),$(),r),N={class:"bg-white col-span-8 flex flex-row space-x-10 justify-center"},A={class:"flex items-center border rounded-lg px-4 py-2 m-2"},D=c(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"",viewBox:"0 0 24 24"},[s("path",{d:"M9 17a8 8 0 1 1 6.08-13.444l5.613 5.614A1 1 0 0 1 19 11.414l-.003.003-5.614-5.613A8 8 0 0 1 9 17zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})],-1)),E=[D],F={class:"flex space-x-2 flex-row"},K=c(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z","clip-rule":"evenodd"})],-1)),R=[K],U={class:"hover-parent"},G={class:"checkboxes"},O=["value"],q={class:"checkbox-text"},H=C('<div class="flex space-x-2" data-v-448390ef><p data-v-448390ef>price</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-448390ef><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-448390ef></path></svg></div><div class="flex space-x-2" data-v-448390ef><p data-v-448390ef>other filters</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-448390ef><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-448390ef></path></svg></div><div class="flex space-x-2" data-v-448390ef><p data-v-448390ef>Other</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-448390ef><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-448390ef></path></svg></div>',3),J={class:"min-h-screen bg-slate-400 grid grid-cols-1 md:grid-cols-12 mx-0 md:mx-10 gap-0 md:gap-6"},P={class:"bg-green-200 col-span-1 md:col-span-4"},Q=["onClick"],W=c(()=>s("div",{class:"bg-green-200 col-span-1 md:col-span-8"},[s("img",{src:"https://pikwizard.com/pw/medium/f47d318cec9a759ae4d4a11112025ae8.avif",alt:"image"})],-1)),X={__name:"TaskerBrowseTask",setup(r){const w=I(),p=h([]),v=h([]),d=f(!1);return m.get("/api/categories").then(t=>{p.push(...t.data)}),m.get("/api/open-tasks").then(t=>{v.push(...t.data)}),f(!1),(t,o)=>(a(),l(n,null,[b(j),s("div",N,[s("div",A,[i(s("input",{type:"text",placeholder:"Search...","onUpdate:modelValue":o[0]||(o[0]=e=>t.searchTerm=e),onKeydown:o[1]||(o[1]=y((...e)=>t.search&&t.search(...e),["enter"])),class:"w-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"},null,544),[[k,t.searchTerm]]),s("button",{onClick:o[2]||(o[2]=(...e)=>t.search&&t.search(...e)),class:"ml-2"},E)]),s("div",F,[s("button",{class:"hover-button",onMouseover:o[3]||(o[3]=e=>d.value=!0),onMouseout:o[4]||(o[4]=e=>d.value=!1)},R,32)]),s("div",U,[i(s("div",G,[(a(!0),l(n,null,g(p,(e,u)=>(a(),l("label",{key:`item-${u}`,class:"checkbox-label"},[i(s("input",{type:"checkbox",value:e,"onUpdate:modelValue":o[5]||(o[5]=_=>t.selectedItems=_),class:"checkbox-input"},null,8,O),[[L,t.selectedItems]]),s("span",q,M(e.job_category_name),1)]))),128))],512),[[B,d.value]])]),H]),s("div",J,[s("div",P,[(a(!0),l(n,null,g(v,e=>(a(),l("div",{class:"m-2 space-y-5 grid-col",onClick:u=>T(w).push(`/tasker-browse-task/${e.id}`)},[(a(),z(V,{key:e.id,title:e.title,status:e.status,amount:e.amount,location:t.Remote,date:e.deadline,description:e.description,offers:e.offers,time:e.time},null,8,["title","status","amount","location","date","description","offers","time"]))],8,Q))),256))]),W])],64))}},ae=x(X,[["__scopeId","data-v-448390ef"]]);export{ae as default};
