import{l as i,m as _,c as h,a as t,g as e,h as s,i as n,o as r,A as u,j as o}from"./index.9e412263.js";const m={class:"grid grid-cols-12 gap-2 min-h-screen bg-gray-200"},p={class:"bg-red-500 col-span-2"},x={class:"bg-white col-span-10"},f=t("h2",{class:"text-center"},"Pendind Tasks",-1),g=t("thead",null,[t("tr",null,[t("th",{class:"text-left"}," Task ID "),t("th",{class:"text-left"}," Client Name "),t("th",{class:"text-left"}," Client Email "),t("th",{class:"text-left"}," Client Phone "),t("th",{class:"text-left"}," Posted Date "),t("th",{class:"text-left"}," Amount "),t("th",{class:"text-left"}," Country "),t("th",{class:"text-left"}," Actions ")])],-1),b=t("td",null,"df123123",-1),k=t("td",null,"sam",-1),v=t("td",null,"ken@gmail.com",-1),y=t("td",null,"254799460000",-1),C=t("td",null,"12/12/2022",-1),w=t("td",null,"$200",-1),A=t("td",null,"kenya",-1),T={__name:"PendingTasks",setup(B){const d=i([]);return _.get("http://127.0.0.1:8000/api/admin-taskers").then(l=>{d.push(...l.data),console.log(" taskers")}),(l,N)=>{const a=n("v-button"),c=n("v-table");return r(),h("div",m,[t("div",p,[e(u)]),t("div",x,[f,e(c,{"fixed-header":"",height:"300px"},{default:s(()=>[g,t("tbody",null,[t("tr",null,[b,k,v,y,C,w,A,t("td",null,[e(a,{class:"bg-blue-500 rounded-md py-1 px-2 text-white mx-2"},{default:s(()=>[o("Update")]),_:1}),e(a,{class:"bg-red-500 rounded-md py-1 px-2 text-white"},{default:s(()=>[o("Delete")]),_:1})])])])]),_:1})])])}}};export{T as default};