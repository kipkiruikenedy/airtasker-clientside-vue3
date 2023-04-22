import{_ as b,r as h,i as m,b as g,c as l,d as x,a as s,k as i,p as k,E as y,v as B,F as n,m as w,C,o,G as L,t as M,e as T,n as z,s as S,x as $,g as I}from"./index.5473cf79.js";import{_ as V}from"./TaskCard.3fe748ed.js";/* empty css                                                  */import{_ as N}from"./TaskerNav.d11b536a.js";import"./TaskerSideBar.232e7177.js";/* empty css                                                 */const c=d=>(S("data-v-d51302b4"),d=d(),$(),d),j={class:"bg-white col-span-8 flex flex-row space-x-10 justify-center"},A={class:"flex items-center border rounded-lg px-4 py-2 m-2"},D=c(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"",viewBox:"0 0 24 24"},[s("path",{d:"M9 17a8 8 0 1 1 6.08-13.444l5.613 5.614A1 1 0 0 1 19 11.414l-.003.003-5.614-5.613A8 8 0 0 1 9 17zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})],-1)),E=[D],F={class:"flex space-x-2 flex-row"},K=c(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[s("path",{"fill-rule":"evenodd",d:"M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z","clip-rule":"evenodd"})],-1)),R=[K],U={class:"hover-parent"},G={class:"checkboxes"},O=["value"],q={class:"checkbox-text"},H=C('<div class="flex space-x-2" data-v-d51302b4><p data-v-d51302b4>price</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-d51302b4><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-d51302b4></path></svg></div><div class="flex space-x-2" data-v-d51302b4><p data-v-d51302b4>other filters</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-d51302b4><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-d51302b4></path></svg></div><div class="flex space-x-2" data-v-d51302b4><p data-v-d51302b4>Other</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-d51302b4><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-d51302b4></path></svg></div>',3),J={class:"min-h-screen bg-slate-400 grid grid-cols-1 md:grid-cols-12 mx-0 md:mx-10 gap-0 md:gap-6"},P={class:"bg-green-200 col-span-1 md:col-span-4"},Q=["onClick"],W=c(()=>s("div",{class:"bg-green-200 col-span-1 md:col-span-8"},[s("img",{src:"https://pikwizard.com/pw/medium/f47d318cec9a759ae4d4a11112025ae8.avif",alt:"image"})],-1)),X={__name:"TaskerBrowseTask",setup(d){const _=I(),p=h([]),v=h([]),r=m(!1);return g.get("/api/categories").then(t=>{p.push(...t.data)}),g.get("/api/open-tasks").then(t=>{v.push(...t.data)}),m(!1),(t,a)=>(o(),l(n,null,[x(N),s("div",j,[s("div",A,[i(s("input",{type:"text",placeholder:"Search...","onUpdate:modelValue":a[0]||(a[0]=e=>t.searchTerm=e),onKeydown:a[1]||(a[1]=y((...e)=>t.search&&t.search(...e),["enter"])),class:"w-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"},null,544),[[k,t.searchTerm]]),s("button",{onClick:a[2]||(a[2]=(...e)=>t.search&&t.search(...e)),class:"ml-2"},E)]),s("div",F,[s("button",{class:"hover-button",onMouseover:a[3]||(a[3]=e=>r.value=!0),onMouseout:a[4]||(a[4]=e=>r.value=!1)},R,32)]),s("div",U,[i(s("div",G,[(o(!0),l(n,null,w(p,(e,u)=>(o(),l("label",{key:`item-${u}`,class:"checkbox-label"},[i(s("input",{type:"checkbox",value:e,"onUpdate:modelValue":a[5]||(a[5]=f=>t.selectedItems=f),class:"checkbox-input"},null,8,O),[[L,t.selectedItems]]),s("span",q,M(e.job_category_name),1)]))),128))],512),[[B,r.value]])]),H]),s("div",J,[s("div",P,[(o(!0),l(n,null,w(v,e=>(o(),l("div",{class:"m-2 space-y-5 grid-col",onClick:u=>T(_).push(`/tasker-browse-task/${e.id}`)},[(o(),z(V,{key:e.id,title:e.title,status:e.status,amount:e.amount,location:t.Remote,date:e.deadline,description:e.description,offers:e.offers,time:e.time},null,8,["title","status","amount","location","date","description","offers","time"]))],8,Q))),256))]),W])],64))}},oe=b(X,[["__scopeId","data-v-d51302b4"]]);export{oe as default};
