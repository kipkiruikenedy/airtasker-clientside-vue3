import{_ as v,u as b,j as i,e as _,f as y,c as a,a as t,b as e,w as p,F as u,r,o,K as k,g as T,y as S,m as C,t as m,d as I,s as N,x as w,i as A,h as B}from"./index.f9fba2aa.js";/* empty css                                                 */import{_ as L}from"./AdminNav.3b241cd8.js";const h=s=>(N("data-v-73550560"),s=s(),w(),s),V={class:"grid grid-cols-12 gap-2 min-h-screen bg-gray-200"},D={class:"bg-gray-500 col-span-2 gap-1"},F={class:"bg-white col-span-10"},R=h(()=>e("h2",{class:"text-center"},"completed Tasks",-1)),j=h(()=>e("thead",null,[e("tr",null,[e("th",{class:"text-left"}," Task ID "),e("th",{class:"text-left"}," Task Title "),e("th",{class:"text-left"}," Amount "),e("th",{class:"text-left"}," Tasker Name "),e("th",{class:"text-left"}," Status "),e("th",{class:"text-left"}," Actions ")])],-1)),z={key:0,class:"text-center"},E={__name:"CompletedTasks",setup(s){A();const c=b();B(),i({}),_([]);const n=_([]);i(!1);try{c.isLoading=!0,y.get("/api/completed-tasks").then(d=>{n.push(...d.data),c.isLoading=!1})}catch{console.log("erro occured")}return(d,K)=>{const g=r("v-progress-circular"),x=r("v-button"),f=r("v-table");return o(),a(u,null,[t(L),e("div",V,[e("div",D,[t(k)]),e("div",F,[R,t(f,{"fixed-header":"",height:"300px"},{default:p(()=>[j,e("tbody",null,[T(c).isLoading?(o(),a("div",z,[t(g,{size:50,color:"primary",indeterminate:""})])):S("",!0),(o(!0),a(u,null,C(n,l=>(o(),a("tr",{key:l.id},[e("td",null,m(l.id),1),e("td",null,m(l.title),1),e("td",null,[t(x,{class:"bg-blue-500 rounded-md py-1 px-2 text-red-900 mx-2",disabled:""},{default:p(()=>[I("Completed")]),_:1})])]))),128))])]),_:1})])])],64)}}},H=v(E,[["__scopeId","data-v-73550560"]]);export{H as default};