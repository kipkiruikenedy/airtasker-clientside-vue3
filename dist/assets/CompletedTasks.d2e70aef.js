import{u as p,l as x,m as g,c as l,a as t,g as a,h as d,i as r,o as n,A as f,b,d as v,F as y,n as T,t as s,j as u}from"./index.9e412263.js";const k={class:"grid grid-cols-12 gap-2 min-h-screen bg-gray-200"},C={class:"bg-red-500 col-span-2"},A={class:"bg-white col-span-10"},D=t("h2",{class:"text-center"},"Completed Tasks",-1),N=t("thead",null,[t("tr",null,[t("th",{class:"text-left"}," Task ID "),t("th",{class:"text-left"}," Tasker Name "),t("th",{class:"text-left"}," Tasker Email "),t("th",{class:"text-left"}," Tasker Phone "),t("th",{class:"text-left"}," Posted Date "),t("th",{class:"text-left"}," completed Date "),t("th",{class:"text-left"}," Amount "),t("th",{class:"text-left"}," Country "),t("th",{class:"text-left"}," Actions ")])],-1),w={key:0,class:"text-center"},V={__name:"CompletedTasks",setup(B){const o=p(),_=x([]);return o.isLoading=!0,g.get("http://127.0.0.1:8000/api/admin-taskers").then(c=>{_.push(...c.data),o.isLoading=!1}),(c,L)=>{const h=r("v-progress-circular"),i=r("v-button"),m=r("v-table");return n(),l("div",k,[t("div",C,[a(f)]),t("div",A,[D,a(m,{"fixed-header":"",height:"300px"},{default:d(()=>[N,t("tbody",null,[b(o).isLoading?(n(),l("div",w,[a(h,{size:50,color:"primary",indeterminate:""})])):v("",!0),(n(!0),l(y,null,T(c.taskers,e=>(n(),l("tr",{key:e.id},[t("td",null,s(e.first_name),1),t("td",null,s(e.last_name),1),t("td",null,s(e.email),1),t("td",null,s(e.phone_number),1),t("td",null,s(e.gender),1),t("td",null,s(e.country),1),t("td",null,[a(i,{class:"bg-blue-500 rounded-md py-1 px-2 text-white mx-2"},{default:d(()=>[u("Update")]),_:1}),a(i,{class:"bg-red-500 rounded-md py-1 px-2 text-white"},{default:d(()=>[u("Delete")]),_:1})])]))),128))])]),_:1})])])}}};export{V as default};
