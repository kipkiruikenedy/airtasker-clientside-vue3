import{h as i,o as l,c as d,d as t,t as s,j as r,b as o,e as a,I as n,w as h}from"./index.da8c82bf.js";/* empty css                                                 */const _={class:"p-6 bg-white rounded-lg shadow-xl shadow-slate-900 cursor-pointer hover:scale-105 hover:ease-in-out m-4"},u={class:"flex space-x-8"},f={class:"text-lg font-semibold mb-2"},m={class:"font-bold"},x=t("span",null,"$",-1),p={class:"flex justify-between flex-col text-gray-500 text-sm space-y-2"},b={class:"flex space-x-2"},v={class:"flex space-x-2"},g={class:"flex space-x-2"},w={class:"flex justify-between"},S={class:"text-blue-900 rounded font-semibold"},y={class:"mb-2"},N=t("img",{src:"https://images.ctfassets.net/hrltx12pl8hq/6VnchrGZSnO8xyvO7uT7PC/811d0fd7d53c07ad055adbd761f205c8/shutterstock_1919883236__1_.jpg?fit=fill&w=480&h=270&fm=webp"},null,-1),V={__name:"TaskCard",props:{title:String,location:String,offers:String,date:String,status:String,time:String,amount:{type:Number,validator:e=>Number.isInteger(parseInt(e))}},setup(e){return(j,k)=>{const c=i("v-avatar");return l(),d("div",_,[t("div",u,[t("h2",f,s(e.title),1),t("h2",m,[x,r(s(e.amount),1)])]),t("div",p,[t("div",b,[o(a(n),{icon:"ic:outline-location-on"}),t("p",null,s(e.location),1)]),t("div",v,[o(a(n),{icon:"ic:baseline-calendar-month"}),t("p",null,s(e.date),1)]),t("div",g,[o(a(n),{icon:"ic:baseline-access-time-filled"}),t("p",null,s(e.time),1)])]),t("div",w,[t("p",S,s(e.status),1),t("p",y,s(e.offers),1),o(c,null,{default:h(()=>[N]),_:1})])])}}};export{V as _};
