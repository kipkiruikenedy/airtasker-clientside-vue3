import{u as p,r as x,a as g,c as n,d as t,b as a,w as c,h as d,o,J as f,e as b,y as v,F as y,m as k,t as s,j as _}from"./index.5c42c678.js";const C={class:"grid grid-cols-12 gap-2 min-h-screen bg-gray-200"},N={class:"bg-red-500 col-span-2"},w={class:"bg-white col-span-10"},L=t("h2",{class:"text-center"},"Clients",-1),B=t("thead",null,[t("tr",null,[t("th",{class:"text-left"}," First Name "),t("th",{class:"text-left"}," Last Name "),t("th",{class:"text-left"}," Email "),t("th",{class:"text-left"}," Phone "),t("th",{class:"text-left"}," Gender "),t("th",{class:"text-left"}," Country "),t("th",{class:"text-left"}," Actions ")])],-1),S={key:0,class:"text-center"},D={__name:"Clients",setup(V){const l=p(),r=x([]);return l.isLoading=!0,g.get("http://127.0.0.1:8000/api/admin-clients").then(i=>{r.push(...i.data),l.isLoading=!1,console.log(r.tasks)}),(i,A)=>{const h=d("v-progress-circular"),u=d("v-button"),m=d("v-table");return o(),n("div",C,[t("div",N,[a(f)]),t("div",w,[L,a(m,{"fixed-header":"",height:"300px"},{default:c(()=>[B,t("tbody",null,[b(l).isLoading?(o(),n("div",S,[a(h,{size:50,color:"primary",indeterminate:""})])):v("",!0),(o(!0),n(y,null,k(r,e=>(o(),n("tr",{key:e.id},[t("td",null,s(e.first_name),1),t("td",null,s(e.last_name),1),t("td",null,s(e.email),1),t("td",null,s(e.phone_number),1),t("td",null,s(e.gender),1),t("td",null,s(e.country),1),t("td",null,[a(u,{class:"bg-blue-500 rounded-md py-1 px-2 text-white mx-2"},{default:c(()=>[_("Update")]),_:1}),a(u,{class:"bg-red-500 rounded-md py-1 px-2 text-white"},{default:c(()=>[_("Delete")]),_:1})])]))),128))])]),_:1})])])}}};export{D as default};