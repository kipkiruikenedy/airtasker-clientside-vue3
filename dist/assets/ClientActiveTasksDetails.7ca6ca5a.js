import{u as g,r as k,i as y,a as d,c as _,d as e,t as n,j as w,e as $,b as u,y as D,f as S,o as h,g as C,h as f}from"./index.da8c82bf.js";import"./ClientSideBar.4a3fe426.js";import"./moment.0d47bed0.js";const L={class:""},T={class:""},M={class:"bg-gray mx-10 my-3 px-10 py-1 border border-blue-600 flex justify-between rounded"},N={class:"b"},R={class:"flex space-x-2"},V=e("p",{class:"text-blue-900 font-semibold"},null,-1),A={class:"text-blue-900"},B={class:"flex space-x-2"},P=e("p",{class:"text-blue-900 font-semibold"},"Description:",-1),j={class:"text-blue-900"},E={class:"flex space-x-2"},U=e("p",{class:"text-blue-900 font-semibold"},"Status:",-1),z={class:"text-blue-900"},I={class:"flex space-x-2 mt-3 text-center border rounded py-1 px-2 mb-3"},q={class:"text-blue-900 font-semibold"},F={class:"text-blue-900"},G={class:"flex space-x-2"},H=e("p",{class:"text-blue-900 font-semibold"},"Amount:",-1),J={class:"text-blue-900 font-semibold"},K={class:"flex space-x-2"},O=e("p",{class:"text-blue-900 font-semibold"},"Deadline:",-1),Q={class:"text-blue-900"},W={key:0,class:"text-center"},X=e("h1",{class:"text-center text-green-700 font-semibold underline"},null,-1),st={__name:"ClientActiveTasksDetails",setup(Y){const m=S(),p=C(),i=m.params.id,l=g(),s=k({}),c=y({});console.log(i),d.get(`http://localhost:8000/api/tasks/${i}`).then(t=>{if(s.title=t.data.title,s.description=t.data.description,s.deadline=t.data.deadline,s.created_at=t.data.created_at,s.amount=t.data.amount,s.status=t.data.status,s.client_id=t.data.client_id,s.tasker_id=t.data.tasker_id,s.tasker_id){const r=new URLSearchParams([["task_id",i],["tasker_id",s.tasker_id]]);try{l.isLoading=!0,d.get("http://127.0.0.1:8000/api/offers",{params:r}).then(a=>{c.value=a.data[0],l.isLoading=!1})}catch{console.log("Error occurred")}}}).catch(t=>{console.error(t)}),d.get(`http://localhost:8000/api/tasks/${i}`).then(t=>{s.title=t.data.title,s.description=t.data.description,s.deadline=t.data.deadline,s.created_at=t.data.created_at,s.amount=t.data.amount,s.status=t.data.status,s.client_id=t.data.client_id,s.tasker_id=t.data.tasker_id}).catch(t=>{console.error(t)});const x=new URLSearchParams([["task_id",i],["tasker_id",s.tasker_id]]);d.get("http://127.0.0.1:8000/api/offers",{params:x}).then(t=>{c.value=t.data[0]}).catch(t=>{console.error(t)});function b(t){const a=(new Date().getTime()-new Date(t).getTime())/1e3;if(a<60)return"now";if(a<3600){const o=Math.floor(a/60);return`${o} minute${o>1?"s":""} ago`}else if(a<86400){const o=Math.floor(a/3600);return`${o} hour${o>1?"s":""} ago`}else{const o=Math.floor(a/86400);return`${o} day${o>1?"s":""} ago`}}function v(){p.push(`/client-active-task/${i}/offer/${c.id}`)}return(t,r)=>{const a=f("v-progress-circular"),o=f("router-view");return h(),_("div",null,[e("div",L,[e("div",T,[e("div",M,[e("div",N,[e("div",R,[V,e("span",A,n(c.value.id),1)]),e("div",B,[P,e("span",j,n(c.value.content),1)]),e("div",E,[U,e("span",z,n(s.status),1)]),e("div",I,[e("p",q,[w("Posted "),e("span",F,n(b(c.value.created_at)),1)])]),e("div",{class:"mt-5 flex space-x-2"},[e("button",{class:"flex space-x-2 rounded-lg bg-green-500 text-white py-1 px-2 hover:bg-green-300 font-medium",onClick:v},"Message the Tasker")])]),e("div",null,[e("div",G,[H,e("span",J,n(s.amount),1)]),e("div",K,[O,e("span",Q,n(s.deadline),1)])]),$(l).isLoading?(h(),_("div",W,[u(a,{size:50,color:"primary",indeterminate:""})])):D("",!0)]),e("div",null,[X,u(o)])])])])}}};export{st as default};
