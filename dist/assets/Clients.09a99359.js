import{u as p,l as x,m as g,c as n,a as t,g as a,h as r,i as d,o as l,A as f,b,d as v,F as y,n as C,t as s,j as _}from"./index.9e412263.js";const N={class:"grid grid-cols-12 gap-2 min-h-screen bg-gray-200"},L={class:"bg-red-500 col-span-2"},k={class:"bg-white col-span-10"},w=t("h2",{class:"text-center"},"Clients",-1),A=t("thead",null,[t("tr",null,[t("th",{class:"text-left"}," First Name "),t("th",{class:"text-left"}," Last Name "),t("th",{class:"text-left"}," Email "),t("th",{class:"text-left"}," Phone "),t("th",{class:"text-left"}," Gender "),t("th",{class:"text-left"}," Country "),t("th",{class:"text-left"}," Actions ")])],-1),B={key:0,class:"text-center"},D={__name:"Clients",setup(S){const o=p(),c=x([]);return o.isLoading=!0,g.get("http://127.0.0.1:8000/api/admin-clients").then(i=>{c.push(...i.data),o.isLoading=!1}),(i,V)=>{const h=d("v-progress-circular"),u=d("v-button"),m=d("v-table");return l(),n("div",N,[t("div",L,[a(f)]),t("div",k,[w,a(m,{"fixed-header":"",height:"300px"},{default:r(()=>[A,t("tbody",null,[b(o).isLoading?(l(),n("div",B,[a(h,{size:50,color:"primary",indeterminate:""})])):v("",!0),(l(!0),n(y,null,C(c,e=>(l(),n("tr",{key:e.id},[t("td",null,s(e.first_name),1),t("td",null,s(e.last_name),1),t("td",null,s(e.email),1),t("td",null,s(e.phone_number),1),t("td",null,s(e.gender),1),t("td",null,s(e.country),1),t("td",null,[a(u,{class:"bg-blue-500 rounded-md py-1 px-2 text-white mx-2"},{default:r(()=>[_("Update")]),_:1}),a(u,{class:"bg-red-500 rounded-md py-1 px-2 text-white"},{default:r(()=>[_("Delete")]),_:1})])]))),128))])]),_:1})])])}}};export{D as default};
