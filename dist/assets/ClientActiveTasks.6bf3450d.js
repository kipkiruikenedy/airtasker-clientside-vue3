import{_ as b,u as k,i as d,r as p,a as u,c as o,b as c,d as t,k as C,p as S,D as w,e as _,F as m,m as T,o as a,n as A,s as B,x as I,g as L,f as F,h as R}from"./index.47ead3c3.js";import{_ as V}from"./TaskCard.c4e8cd8c.js";import{_ as $}from"./ClientNav.1f9c3677.js";import{C as D}from"./ClientSideBar.bb4ee8de.js";/* empty css                                                 */const f=r=>(B("data-v-021caafb"),r=r(),I(),r),K={class:"flex justify-center space-x-3 m-3 py-1 px-3"},M={class:"border py-1 px-3 rounded-md"},N=f(()=>t("div",null,"Filter",-1)),P={class:"grid grid-cols-12"},U={class:"bg-gray-500 col-span-2 gap-1"},j={key:0},E={key:1,class:"col-span-10 p-5"},q=f(()=>t("p",null,"My Pending Tasks",-1)),z=["onClick"],G={__name:"ClientActiveTasks",setup(r){const h=L(),i=k();F(),d({});const v=p([]),l=p([]);d(!1),u.get("http://127.0.0.1:8000/api/categories").then(s=>{v.push(...s.data)});const g=i.user.id,y=new URLSearchParams([["user_id",g]]);try{i.isLoading=!0,u.get("http://127.0.0.1:8000/api/client/own-active-tasks",{params:y}).then(s=>{l.push(...s.data),i.isLoading=!1})}catch{console.log("erro occured")}return(s,n)=>{const x=R("v-progress-circular");return a(),o(m,null,[c($),t("div",K,[t("div",M,[C(t("input",{type:"text",placeholder:"Search...","onUpdate:modelValue":n[0]||(n[0]=e=>s.searchTerm=e),onKeydown:n[1]||(n[1]=w((...e)=>s.search&&s.search(...e),["enter"])),class:"bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"},null,544),[[S,s.searchTerm]])]),N]),t("div",P,[t("div",U,[c(D)]),_(i).isLoading?(a(),o("div",j,[c(x,{indeterminate:"",color:"amber"})])):(a(),o("div",E,[q,(a(!0),o(m,null,T(l,e=>(a(),o("div",{class:"m-2 space-y-5 flex flex-row",onClick:H=>_(h).push("/client-active-task/"+e.id+"/offer/")},[(a(),A(V,{key:e.id,title:e.title,status:e.status,amount:e.amount,location:e.location,date:e.deadline,offers:e.offers,time:e.time},null,8,["title","status","amount","location","date","offers","time"]))],8,z))),256))]))])],64)}}},Y=b(G,[["__scopeId","data-v-021caafb"]]);export{Y as default};
