import{l as d,_ as p,h as e,o as s,c as a,d as o,b as n,F as m,m as _,n as k,w as u,j as h,t as f}from"./index.da8c82bf.js";const g=d({name:"TaskerSidebar",data(){return{items:[{title:"Dashboard",to:"/tasker/dashboard",icon:"mdi mdi-account-multiple-outline"},{title:"New Tasks",to:"/tasker-pending-tasks"},{title:"My Tasks",to:"/tasker-active-tasks"},{title:"My offers",to:"/tasker-pending-tasks"},{title:"Completed Tasks",to:"/tasker-completed-tasks"}]}}}),v={class:"flex-col h-screen bg-gray-800 text-white"},y={class:"justify-center pt-4 pl-7"},x={class:"mt-8"};function b(r,T,w,B,C,N){const c=e("v-avatar"),i=e("item.icon"),l=e("router-link");return s(),a("div",v,[o("div",y,[n(c,{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxVEw9MRh_vuujq_zWCppZySLY0aEH7HrM9gr9EHa&s"})]),o("nav",x,[(s(!0),a(m,null,_(r.items,t=>(s(),k(l,{key:t.title,to:t.to,class:"flex items-center px-4 py-2 hover:bg-gray-700 transition-colors duration-200"},{default:u(()=>[n(i,{class:"w-6 h-6 mr-4"}),h(" "+f(t.title),1)]),_:2},1032,["to"]))),128))])])}const M=p(g,[["render",b]]);export{M as T};
