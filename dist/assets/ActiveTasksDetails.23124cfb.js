import{_ as v}from"./TaskerNav.740763ec.js";import"./TaskerSideBar.adb157d4.js";import{u as p,r as x,a as r,c as g,b as c,d as t,t as a,e as y,F as b,f as k,S as _,o as w,g as $,h as T}from"./index.47ead3c3.js";import{A as B}from"./AllTasks.70a4653a.js";import"./TaskCard.c4e8cd8c.js";/* empty css                                                 */const C={class:"grid grid-cols-12 gap-2 min-h-screen bg-gray-200"},E={class:"bg-gray-200 col-span-4"},j={class:"bg-white col-span-8"},D={class:"text-center text-blue-900 text-2xl font-semibold"},O={class:"flex justify-between"},R={class:"space-y-3"},A={class:"flex space-x-3"},P=t("div",{class:"border rounded-full"},"image",-1),S={class:""},M=t("p",null,"POSTED BY",-1),q=t("div",{class:"flex space-x-3"},[t("div",{class:""},"image"),t("div",{class:""},[t("p",null,"LOCATION"),t("p",null,"REMOTE")])],-1),F={class:"flex space-x-3"},I=t("div",{class:"border rounded-full"},"image",-1),N={class:""},V=t("p",null,"TO BE DONE BEFORE",-1),Y={class:"flex flex-column justify-between py-6 my-5 mx-6"},K=t("div",null,null,-1),L={class:"bg-gray-200 rounded m-4 p-3"},z={class:"text-center"},G=t("p",null,"Secured Payment",-1),H={class:"text-2xl"},J={class:"flex justify-between mt-4"},Q=t("div",null,"Service Fee",-1),U={class:"flex justify-between"},W=t("div",null,"You'll receive",-1),X={class:"bg-green-500 text-center rounded-full py-1"},Z=t("p",{class:"text-white"},"Request Payment",-1),tt=[Z],et=t("p",{class:"text-center"},"details",-1),st=t("p",{class:"text-start text-gray-800 mt-5 font-semibold"},"Assignee",-1),at={class:"flex justify-between"},ot={class:"flex justify-between space-x-4"},nt=t("div",{class:"rounded-full border"},"image",-1),it={class:"flex space-x-1"},ct=t("p",null,"rating",-1),lt=t("p",null,"completion rate",-1),dt={class:"mr-10"},rt=t("p",{class:"text-center"},"Private Chat",-1),_t=t("p",null,null,-1),ut={class:"flex justify-center items-center h-screen"},ht={class:"m-3",id:"chat-messages"},bt={__name:"ActiveTasksDetails",setup(mt){p();const e=x([]),u=k(),l=$(),d=u.params.id;r.get(`http://127.0.0.1:8000/api/tasks/${d}`).then(s=>{e.title=s.data.title,e.description=s.data.description,e.deadline=s.data.deadline,e.created_at=s.data.created_at,e.amount=s.data.amount,e.status=s.data.status,e.fees=s.data.fees,e.receivable=s.data.receivable,e.created_at=s.data.created_at,e.client=s.data.client,e.tasker=s.data.tasker}).catch(s=>{console.error(s)});const h=s=>{r.put(`/api/tasks/${s}/status`,{status:"requestedPayment"}).then(i=>{_.fire({icon:"success",title:"Payment request have been send successfully to the client",showConfirmButton:!1,timer:1500}).then(()=>{l.push("/tasker-active-tasks")})}).catch(i=>{console.error(i),_.fire({icon:"error",title:"An error occurred while trying to update the task status",text:i.response.data.message,confirmButtonText:"OK"})})};function m(s){const n=(new Date().getTime()-new Date(s).getTime())/1e3;if(n<60)return"now";if(n<3600){const o=Math.floor(n/60);return`${o} minute${o>1?"s":""} ago`}else if(n<86400){const o=Math.floor(n/3600);return`${o} hour${o>1?"s":""} ago`}else{const o=Math.floor(n/86400);return`${o} day${o>1?"s":""} ago`}}const f=()=>{const s=document.getElementById("chat-messages");s&&s.scrollTo({top:0,behavior:"smooth"}),l.push(`/tasker-active-tasks/${Id}/chat`)};return(s,i)=>{const n=T("RouterView");return w(),g(b,null,[c(v),t("div",C,[t("div",E,[c(B)]),t("div",j,[t("div",null,[t("p",D,a(e.title),1),t("div",O,[t("div",R,[t("div",A,[P,t("div",S,[M,t("p",null,a(e.client.first_name)+" "+a(e.client.last_name),1)])]),q,t("div",F,[I,t("div",N,[V,t("p",null,a(e.deadline),1)])])]),t("div",Y,[t("div",null,a(m(e.created_at)),1),K])]),t("div",L,[t("div",z,[G,t("p",H,"$"+a(e.amount),1)]),t("div",J,[Q,t("div",null,"$"+a(e.fees),1)]),t("div",U,[W,t("div",null,"$"+a(e.receivable),1)]),t("div",X,[t("button",{onClick:i[0]||(i[0]=o=>h(y(d)))},tt)])]),t("div",null,[et,t("div",null,a(e.description),1)]),t("div",null,[st,t("div",at,[t("div",ot,[nt,t("div",null,[t("p",it,a(e.tasker.first_name)+" "+a(e.tasker.last_name),1),ct,lt])]),t("div",dt,"$"+a(e.amount),1)])]),rt,t("div",{class:"flex justify-center"},[_t,t("button",{class:"py-1 px-2 rounded-full bg-gray-300 text-center text-green-900 font-semibold",onClick:f}," Message Cutomer")]),t("div",ut,[t("div",ht,[c(n)])])])])])],64)}}};export{bt as default};
