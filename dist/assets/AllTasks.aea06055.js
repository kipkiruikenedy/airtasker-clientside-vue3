import{_,g as p,r,i,b as n,o as t,c as a,F as u,m as d,e as m,n as f}from"./index.5473cf79.js";import{_ as h}from"./TaskCard.3fe748ed.js";const g={class:"bg-green-200"},v=["onClick"],k={__name:"AllTasks",setup(b){const c=p(),l=r([]),o=r([]);return i(!1),n.get("/api/categories").then(s=>{l.push(...s.data)}),n.get("/api/open-tasks").then(s=>{o.push(...s.data)}),i(!1),(s,x)=>(t(),a("div",g,[(t(!0),a(u,null,d(o,e=>(t(),a("div",{class:"m-2 space-y-5",onClick:y=>m(c).push(`/tasker-browse-task/${e.id}`)},[(t(),f(h,{key:e.id,title:e.title,status:e.status,amount:e.amount,location:s.Remote,date:e.deadline,description:e.description,offers:e.offers,time:e.time},null,8,["title","status","amount","location","date","description","offers","time"]))],8,v))),256))]))}},T=_(k,[["__scopeId","data-v-a4924274"]]);export{T as A};
