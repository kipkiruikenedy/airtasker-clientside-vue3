import{r as d,G as l,a as _,c as e,b as n,d as s,F as i,m as p,o as a,J as m,t as g}from"./index.5c42c678.js";import{_ as h}from"./AdminNav.cd8f1953.js";const u={class:"grid grid-cols-12 gap-1"},v={class:"px-0 col-span-2"},f={class:"px-0 col-span-10"},x={class:"p-4 text-center"},y={class:"mt-4"},b=s("h2",{class:"font-bold text-lg mb-2"},"Notifications",-1),k={__name:"AdminViewNotifications",setup(N){const o=d([]);return l(async()=>{try{const t=await _.get("http://localhost:8000/api/help");console.log(t.data),o.push(...t.data.data)}catch(t){console.error(t)}}),(t,w)=>(a(),e(i,null,[n(h),s("div",u,[s("div",v,[n(m)]),s("div",f,[s("div",x,[s("div",y,[b,(a(!0),e(i,null,p(o,(c,r)=>(a(),e("div",{key:r,class:"bg-green-500 text-white rounded-lg p-2 mb-2"},[s("div",null,g(c.message),1)]))),128))])])])])],64))}};export{k as default};