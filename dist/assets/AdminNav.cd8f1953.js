import{u as p,i as m,h as l,o as a,c as r,d as e,b as s,w as d,j as f,e as u}from"./index.5c42c678.js";const k={class:"flex justify-between py-2 px-2 mt-2 sticky top-0 w-full z-50"},x=e("div",null,[e("a",{href:"/",class:"flex items-center text-blue-700 font-semibold"}," Airtaskers Pro ")],-1),b={class:"flex space-x-3"},h={class:"flex"},g={class:"border rounded-full"},y={key:0},C={key:1},B={__name:"AdminNav",setup(N){const n=p();console.log(n.user);const o=m(!1);return(w,t)=>{const i=l("router-link"),_=l("v-avatar"),v=l("v-progress-circular");return a(),r("div",k,[x,e("div",b,[e("div",h,[e("div",null,[s(i,{onClick:t[0]||(t[0]=c=>o.value=!o.value),to:{name:"AdminNotifications"},class:"block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"},{default:d(()=>[f(" Notification ")]),_:1})]),e("div",g,[s(i,{onClick:t[1]||(t[1]=c=>o.value=!o.value),to:{name:"ClientProfile"}},{default:d(()=>[s(_,{image:"",alt:"image"})]),_:1})]),e("button",{onClick:t[2]||(t[2]=c=>u(n).handleLogout()),class:"block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800 md:border-0"},[u(n).isLoading?(a(),r("div",y,[s(v,{indeterminate:"",color:"amber"})])):(a(),r("div",C,"Logout"))])])])])}}};export{B as _};