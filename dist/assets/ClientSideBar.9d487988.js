import{l as d,_ as p,r as e,o as s,c as a,b as n,a as o,F as _,m,n as k,w as u,d as g,t as v}from"./index.f9fba2aa.js";const y=d({name:"ClientSideBar",data(){return{items:[{title:"Post a Task",to:"/client/post-task"},{title:"Pending Tasks",to:"/client-pending-task"},{title:"Active Tasks",to:"/client-active-task"},{title:"Requested Payments",to:"/client-requested-payments"},{title:"Completed Tasks",to:"/client-completedtask"},{title:"Rejected Tasks",to:"/client-rejectedtask"}]}}}),f={class:"flex-col h-screen bg-gray-800 text-white sticky left-0 top-0"},h={class:"justify-center pt-4 pl-7"},x={class:"mt-8"};function C(c,T,B,b,w,j){const i=e("v-avatar"),r=e("item.icon"),l=e("router-link");return s(),a("div",f,[n("div",h,[o(i,{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxVEw9MRh_vuujq_zWCppZySLY0aEH7HrM9gr9EHa&s"})]),n("nav",x,[(s(!0),a(_,null,m(c.items,t=>(s(),k(l,{key:t.title,to:t.to,class:"flex items-center px-4 py-2 hover:bg-gray-700 transition-colors duration-200"},{default:u(()=>[o(r,{class:"w-6 h-6 mr-4"}),g(" "+v(t.title),1)]),_:2},1032,["to"]))),128))])])}const E=p(y,[["render",C]]);export{E as C};