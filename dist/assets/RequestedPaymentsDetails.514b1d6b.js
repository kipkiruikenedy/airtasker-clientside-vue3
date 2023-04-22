import{u as g,r as y,i as w,b as r,c as _,a as e,d as l,t as n,j as $,e as m,y as D,f as R,S as p,o as h,R as S,g as B,h as P}from"./index.5473cf79.js";import{_ as C}from"./ClientNav.95260edf.js";import"./ClientSideBar.6d70ac17.js";import"./moment.0d47bed0.js";const L={class:""},N={class:""},T={class:"bg-gray mx-10 my-3 px-10 py-1 border border-blue-600 flex justify-between rounded"},V={class:"b"},A={class:"flex space-x-2"},M=e("p",{class:"text-blue-900 font-semibold"},null,-1),j={class:"text-blue-900"},q={class:"flex space-x-2"},E=e("p",{class:"text-blue-900 font-semibold"},"Description:",-1),U={class:"text-blue-900"},z={class:"flex space-x-2"},I=e("p",{class:"text-blue-900 font-semibold"},"Status:",-1),Y={class:"text-blue-900"},F={class:"flex space-x-2 mt-3 text-center border rounded py-1 px-2 mb-3"},G={class:"text-blue-900 font-semibold"},H={class:"text-blue-900"},J={class:"flex space-x-2"},K=e("p",{class:"text-blue-900 font-semibold"},"Amount:",-1),O={class:"text-blue-900 font-semibold"},Q={class:"flex space-x-2"},W=e("p",{class:"text-blue-900 font-semibold"},"Deadline:",-1),X={class:"text-blue-900"},Z={key:0,class:"text-center"},it={__name:"RequestedPaymentsDetails",setup(tt){const f=R(),x=B(),i=f.params.id,d=g(),s=y({}),u=w({});console.log(i),r.get(`/api/tasks/${i}`).then(t=>{if(s.title=t.data.title,s.description=t.data.description,s.deadline=t.data.deadline,s.created_at=t.data.created_at,s.amount=t.data.amount,s.status=t.data.status,s.client_id=t.data.client_id,s.tasker_id=t.data.tasker_id,s.tasker_id){const c=new URLSearchParams([["task_id",i],["tasker_id",s.tasker_id]]);try{d.isLoading=!0,r.get("/api/offers",{params:c}).then(a=>{u.value=a.data[0],d.isLoading=!1})}catch{console.log("Error occurred")}}}).catch(t=>{console.error(t)}),r.get(`/api/tasks/${i}`).then(t=>{s.title=t.data.title,s.description=t.data.description,s.deadline=t.data.deadline,s.created_at=t.data.created_at,s.amount=t.data.amount,s.status=t.data.status,s.client_id=t.data.client_id,s.tasker_id=t.data.tasker_id}).catch(t=>{console.error(t)});const b=new URLSearchParams([["task_id",i],["tasker_id",s.tasker_id]]);r.get("/api/offers",{params:b}).then(t=>{u.value=t.data[0]}).catch(t=>{console.error(t)});function v(t){const a=(new Date().getTime()-new Date(t).getTime())/1e3;if(a<60)return"now";if(a<3600){const o=Math.floor(a/60);return`${o} minute${o>1?"s":""} ago`}else if(a<86400){const o=Math.floor(a/3600);return`${o} hour${o>1?"s":""} ago`}else{const o=Math.floor(a/86400);return`${o} day${o>1?"s":""} ago`}}function k(){p.fire({title:"Are you sure you want to release payment for this task?",showCancelButton:!0,confirmButtonText:"Yes!",cancelButtonText:"No, keep it on hold"}).then(t=>{t.isConfirmed&&r.put(`/api/tasks/${i}/status`,{status:"paid"}).then(c=>{p.fire({icon:"success",title:"Payment released successfully!",showConfirmButton:!1,timer:1500}),x.push(`/client-requested-payments/${i}/rate`)}).catch(c=>{console.error(c)})})}return(t,c)=>{const a=P("v-progress-circular");return h(),_("div",null,[e("div",L,[l(C),e("div",N,[e("div",T,[e("div",V,[e("div",A,[M,e("span",j,n(s.id),1)]),e("div",q,[E,e("span",U,n(s.description),1)]),e("div",z,[I,e("span",Y,n(s.status),1)]),e("div",F,[e("p",G,[$("Posted "),e("span",H,n(v(s.created_at)),1)])]),e("div",{class:"mt-5 flex space-x-2"},[e("button",{class:"flex space-x-2 rounded-lg bg-green-500 text-white py-1 px-2 hover:bg-green-300 font-medium",onClick:k},"Release Payment")])]),e("div",null,[e("div",J,[K,e("span",O,n(s.amount),1)]),e("div",Q,[W,e("span",X,n(s.deadline),1)])]),m(d).isLoading?(h(),_("div",Z,[l(a,{size:50,color:"primary",indeterminate:""})])):D("",!0)])])]),e("div",null,[l(m(S))])])}}};export{it as default};
