import{_ as y,u as C,i,r as _,a as k,c as o,b as e,d as t,w as u,F as p,h as n,o as c,e as S,y as T,m as w,t as m,j as I,s as A,x as L,g as N,f as B}from"./index.da8c82bf.js";/* empty css                                                 */import{_ as V}from"./ClientNav.35f98a89.js";import{C as R}from"./ClientSideBar.4a3fe426.js";const h=s=>(A("data-v-2af80671"),s=s(),L(),s),D={class:"grid grid-cols-12 gap-2 min-h-screen bg-gray-200"},F={class:"bg-gray-500 col-span-2 gap-1"},j={class:"bg-white col-span-10"},z=h(()=>t("h2",{class:"text-center"},"Active Tasks",-1)),E=h(()=>t("thead",null,[t("tr",null,[t("th",{class:"text-left"}," Task ID "),t("th",{class:"text-left"}," Task Title "),t("th",{class:"text-left"}," Amount "),t("th",{class:"text-left"}," Tasker Name "),t("th",{class:"text-left"}," Status "),t("th",{class:"text-left"}," Actions ")])],-1)),P={key:0,class:"text-center"},U={__name:"ClientCompletedTasks",setup(s){N();const a=C();B(),i({}),_([]);const l=_([]);i(!1);const f=a.user.id,g=new URLSearchParams([["user_id",f]]);try{a.isLoading=!0,k.get("http://127.0.0.1:8000/api/client/own-completed-tasks",{params:g}).then(d=>{l.push(...d.data),a.isLoading=!1})}catch{console.log("erro occured")}return(d,$)=>{const x=n("v-progress-circular"),v=n("v-button"),b=n("v-table");return c(),o(p,null,[e(V),t("div",D,[t("div",F,[e(R)]),t("div",j,[z,e(b,{"fixed-header":"",height:"300px"},{default:u(()=>[E,t("tbody",null,[S(a).isLoading?(c(),o("div",P,[e(x,{size:50,color:"primary",indeterminate:""})])):T("",!0),(c(!0),o(p,null,w(l,r=>(c(),o("tr",{key:r.id},[t("td",null,m(r.id),1),t("td",null,m(r.title),1),t("td",null,[e(v,{class:"bg-blue-500 rounded-md py-1 px-2 text-red-900 mx-2",disabled:""},{default:u(()=>[I("Completed")]),_:1})])]))),128))])]),_:1})])])],64)}}},K=y(U,[["__scopeId","data-v-2af80671"]]);export{K as default};