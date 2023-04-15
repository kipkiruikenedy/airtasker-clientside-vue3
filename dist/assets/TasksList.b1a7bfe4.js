import{h as k,o as i,c as r,d as e,t as d,j as C,b as o,e as c,I as v,w as L,_ as S,r as g,i as B,a as w,k as h,p as T,D as M,v as I,F as _,m as b,C as y,B as O,E as N,n as D,s as z,x as E,g as V}from"./index.47ead3c3.js";import{_ as j}from"./TaskCard.c4e8cd8c.js";/* empty css                                                  *//* empty css                                                 */const A={class:"p-6 bg-white rounded-lg shadow-md"},P={class:"flex space-x-8"},K={class:"text-lg font-semibold mb-2"},U={class:"font-bold"},F=e("span",null,"$",-1),G={class:"flex justify-between flex-col text-gray-500 text-sm space-y-2"},R={class:"flex space-x-2"},q={class:"flex space-x-2"},J={class:"flex space-x-2"},Z={class:"flex justify-between"},H={class:"text-blue-900 rounded font-semibold"},Q={class:"mb-2"},W=e("img",{src:"https://images.ctfassets.net/hrltx12pl8hq/6VnchrGZSnO8xyvO7uT7PC/811d0fd7d53c07ad055adbd761f205c8/shutterstock_1919883236__1_.jpg?fit=fill&w=480&h=270&fm=webp"},null,-1),X={__name:"OfferCard",props:{title:String,location:String,offers:String,date:String,status:String,time:String,amount:{type:Number,validator:t=>Number.isInteger(parseInt(t))}},setup(t){return(x,u)=>{const p=k("v-avatar");return i(),r("div",A,[e("div",P,[e("h2",K,d(t.title),1),e("h2",U,[F,C(d(t.amount),1)])]),e("div",G,[e("div",R,[o(c(v),{icon:"ic:outline-location-on"}),e("p",null,d(t.location),1)]),e("div",q,[o(c(v),{icon:"ic:baseline-calendar-month"}),e("p",null,d(t.date),1)]),e("div",J,[o(c(v),{icon:"ic:baseline-access-time-filled"}),e("p",null,d(t.time),1)])]),e("div",Z,[e("p",H,d(t.status),1),e("p",Q,d(t.offers),1),o(p,null,{default:L(()=>[W]),_:1})])])}}};const n=t=>(z("data-v-116aef4d"),t=t(),E(),t),Y={class:"bg-white col-span-8 flex flex-row space-x-10 justify-center"},ee={class:"flex items-center border rounded-lg px-4 py-2 m-2"},se=n(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"",viewBox:"0 0 24 24"},[e("path",{d:"M9 17a8 8 0 1 1 6.08-13.444l5.613 5.614A1 1 0 0 1 19 11.414l-.003.003-5.614-5.613A8 8 0 0 1 9 17zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"})],-1)),te=[se],ae={class:"flex space-x-2 flex-row"},le=n(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z","clip-rule":"evenodd"})],-1)),oe=[le],de={class:"hover-parent"},ne={class:"checkboxes"},ie=["value"],ce={class:"checkbox-text"},re=y('<div class="flex space-x-2" data-v-116aef4d><p data-v-116aef4d>Location</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-116aef4d><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-116aef4d></path></svg></div><div class="flex space-x-2" data-v-116aef4d><p data-v-116aef4d>price</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-116aef4d><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-116aef4d></path></svg></div><div class="flex space-x-2" data-v-116aef4d><p data-v-116aef4d>other filters</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-116aef4d><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-116aef4d></path></svg></div><div class="flex space-x-2" data-v-116aef4d><p data-v-116aef4d>Other</p><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" data-v-116aef4d><path fill-rule="evenodd" d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" clip-rule="evenodd" data-v-116aef4d></path></svg></div>',4),ve={class:"min-h-screen bg-slate-400 grid grid-cols-1 md:grid-cols-12 mx-0 md:mx-10 gap-0 md:gap-6"},pe={class:"bg-green-200 col-span-1 md:col-span-4"},ue=["onClick"],fe={class:"bg-gray-200 col-span-8"},he={class:"flex space-x-4 p-3"},_e={class:"w-3/5 bg-white"},xe=n(()=>e("div",{class:"flex space-x-3 p-2"},[e("div",{class:"bg-green-300 rounded-full py-1 px-2"},"COMPLETED")],-1)),me=n(()=>e("div",{class:"text-4xl text-blue-900 font-semibold"},"Small sent pulled out of car bonnet",-1)),ge={class:"space-y-4"},we={class:"space-y-1"},be={class:"flex space-x-1"},ye=n(()=>e("div",null,[e("p",null,"Posted By"),e("p",null,"John")],-1)),$e={class:"space-y-1"},ke={class:"flex space-x-1"},Ce=n(()=>e("div",null,[e("p",null,"LOCATION"),e("p",null,"Remote")],-1)),Le={class:"space-y-1"},Se={class:"flex space-x-1"},Be=n(()=>e("div",null,[e("p",null,"TO BE DONE ON"),e("p",null,"15/45/45")],-1)),Te=n(()=>e("div",{class:"p-2 space-x-2"},[e("div",{class:"text-blue-800 text-2xl"},"Details"),e("div",{class:"text-blue-900"},"Preparing car for sale has small dent on bonnet"),e("div",{class:"flex space-x-2"},[e("p",null,"Due date:"),e("p",null,"flexible")])],-1)),Me=y('<div class="w-2/5 bg-white" data-v-116aef4d><div class="bg-gray-200 rounded-lg m-8" data-v-116aef4d><div class="p-3" data-v-116aef4d><p class="text-center text-gray-700 mt-4" data-v-116aef4d>TASK BUDGET</p><h1 class="text-center text-4xl font-semibold text-blue-900 mt-4" data-v-116aef4d>$1000</h1></div><div class="ml-6 mt-5 mb-3 pb-3" data-v-116aef4d><button class="bg-blue-600 text-white py-2 px-2 rounded-full items-center flex" data-v-116aef4d><p data-v-116aef4d>Make an Offer</p></button></div></div><div class="m-5" data-v-116aef4d><p data-v-116aef4d>posted 6 minutes ago</p></div></div>',1),Ie={__name:"TasksList",setup(t){const x=V(),u=g([]),p=g([]),f=B(!1);return w.get("https://server.airtaska.com/public/api/categories").then(a=>{u.push(...a.data)}),w.get("https://server.airtaska.com/public/api/all-tasks").then(a=>{p.push(...a.data)}),(a,l)=>(i(),r(_,null,[o(O),e("div",Y,[e("div",ee,[h(e("input",{type:"text",placeholder:"Search...","onUpdate:modelValue":l[0]||(l[0]=s=>a.searchTerm=s),onKeydown:l[1]||(l[1]=M((...s)=>a.search&&a.search(...s),["enter"])),class:"w-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"},null,544),[[T,a.searchTerm]]),e("button",{onClick:l[2]||(l[2]=(...s)=>a.search&&a.search(...s)),class:"ml-2"},te)]),e("div",ae,[e("button",{class:"hover-button",onMouseover:l[3]||(l[3]=s=>f.value=!0),onMouseout:l[4]||(l[4]=s=>f.value=!1)},oe,32)]),e("div",de,[h(e("div",ne,[(i(!0),r(_,null,b(u,(s,m)=>(i(),r("label",{key:`item-${m}`,class:"checkbox-label"},[h(e("input",{type:"checkbox",value:s,"onUpdate:modelValue":l[5]||(l[5]=$=>a.selectedItems=$),class:"checkbox-input"},null,8,ie),[[N,a.selectedItems]]),e("span",ce,d(s.job_category_name),1)]))),128))],512),[[I,f.value]])]),re]),e("div",ve,[e("div",pe,[(i(!0),r(_,null,b(p,s=>(i(),r("div",{class:"m-2 space-y-5",onClick:m=>c(x).push(`/task/${s.id}`)},[(i(),D(j,{key:s.id,title:s.title,status:s.status,amount:s.amount,location:s.location,date:s.date_on,date_before:s.date_before,offers:s.offers,time:s.time},null,8,["title","status","amount","location","date","date_before","offers","time"]))],8,ue))),256))]),e("div",fe,[e("div",he,[e("div",_e,[xe,me,e("div",ge,[e("div",we,[e("div",be,[e("div",null,[o(c(v),{icon:"ic:twotone-location-on"})]),ye])]),e("div",$e,[e("div",ke,[e("div",null,[o(c(v),{icon:"ic:twotone-location-on"})]),Ce])]),e("div",Le,[e("div",Se,[e("div",null,[o(c(v),{icon:"ic:twotone-location-on"})]),Be])])]),Te]),Me]),e("div",null,[o(X)])])])],64))}},Ee=S(Ie,[["__scopeId","data-v-116aef4d"]]);export{Ee as default};
