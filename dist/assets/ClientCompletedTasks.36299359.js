import{_ as k,u as y,i,r as _,a as C,c as o,b as t,d as e,w as p,F as u,h as l,o as r,e as S,y as T,m as w,t as m,j as I,s as A,x as L,g as N,f as B}from"./index.5c42c678.js";/* empty css                                                 */import{_ as V}from"./ClientNav.2822bf23.js";import{C as R}from"./ClientSideBar.4907c247.js";const h=s=>(A("data-v-2a5df29a"),s=s(),L(),s),D={class:"grid grid-cols-12 gap-2 min-h-screen bg-gray-200"},F={class:"bg-gray-500 col-span-2 gap-1"},j={class:"bg-white col-span-10"},z=h(()=>e("h2",{class:"text-center"},"Active Tasks",-1)),E=h(()=>e("thead",null,[e("tr",null,[e("th",{class:"text-left"}," Task ID "),e("th",{class:"text-left"}," Task Title "),e("th",{class:"text-left"}," Amount "),e("th",{class:"text-left"}," Tasker Name "),e("th",{class:"text-left"}," Status "),e("th",{class:"text-left"}," Actions ")])],-1)),P={key:0,class:"text-center"},U={__name:"ClientCompletedTasks",setup(s){N();const a=y();B(),i({}),_([]);const n=_([]);i(!1);const f=a.user.id,g=new URLSearchParams([["user_id",f]]);try{a.isLoading=!0,C.get("http://127.0.0.1:8000/api/client/own-completed-tasks",{params:g}).then(d=>{n.push(...d.data),a.isLoading=!1})}catch{console.log("erro occured")}return(d,$)=>{const x=l("v-progress-circular"),v=l("v-button"),b=l("v-table");return r(),o(u,null,[t(V),e("div",D,[e("div",F,[t(R)]),e("div",j,[z,t(b,{"fixed-header":"",height:"300px"},{default:p(()=>[E,e("tbody",null,[S(a).isLoading?(r(),o("div",P,[t(x,{size:50,color:"primary",indeterminate:""})])):T("",!0),(r(!0),o(u,null,w(n,c=>(r(),o("tr",{key:c.id},[e("td",null,m(c.id),1),e("td",null,m(c.title),1),e("td",null,[t(v,{class:"bg-blue-500 rounded-md py-1 px-2 text-red-900 mx-2",disabled:""},{default:p(()=>[I("Completed")]),_:1})])]))),128))])]),_:1})])])],64)}}},K=k(U,[["__scopeId","data-v-2a5df29a"]]);export{K as default};
