import{_,g as p,r as n,i as r,a as c,o as s,c as a,F as u,m as d,e as m,n as f}from"./index.da8c82bf.js";import{_ as h}from"./TaskCard.bb312303.js";const g={class:"bg-green-200"},v=["onClick"],k={__name:"AllTasks",setup(b){const i=p(),l=n([]),o=n([]);return r(!1),c.get("http://127.0.0.1:8000/api/categories").then(t=>{l.push(...t.data)}),c.get("http://127.0.0.1:8000/api/open-tasks").then(t=>{o.push(...t.data)}),r(!1),(t,x)=>(s(),a("div",g,[(s(!0),a(u,null,d(o,e=>(s(),a("div",{class:"m-2 space-y-5",onClick:y=>m(i).push(`/tasker-browse-task/${e.id}`)},[(s(),f(h,{key:e.id,title:e.title,status:e.status,amount:e.amount,location:t.Remote,date:e.deadline,description:e.description,offers:e.offers,time:e.time},null,8,["title","status","amount","location","date","description","offers","time"]))],8,v))),256))]))}},T=_(k,[["__scopeId","data-v-cf0eb546"]]);export{T as A};
