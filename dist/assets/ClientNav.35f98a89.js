import{u as b,i as x,h as i,o as u,c as v,d as n,b as o,w as s,j as l,k as g,v as m,e as p}from"./index.da8c82bf.js";const y={class:"flex justify-between py-2 mb-2"},f={class:"flex space-x-3"},_={class:"flex space-x-3 mx-4 px-2"},C={class:"relative"},h={key:0},w={key:1},N={__name:"ClientNav",setup($){const d=b(),t=x(!1);return(T,e)=>{const a=i("router-link"),c=i("v-avatar"),k=i("v-progress-circular");return u(),v("div",y,[n("div",f,[o(a,{onClick:e[0]||(e[0]=r=>t.value=!t.value),to:{name:"Home"},class:"block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"},{default:s(()=>[l(" Airtaskers Pro ")]),_:1}),o(a,{onClick:e[1]||(e[1]=r=>t.value=!t.value),to:{name:"ClientTaskPost"},class:"block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"},{default:s(()=>[l(" Post Task ")]),_:1}),o(a,{onClick:e[2]||(e[2]=r=>t.value=!t.value),to:{name:"ClientCurrentActiveTasks"},class:"block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"},{default:s(()=>[l(" My Tasks ")]),_:1})]),n("div",_,[o(a,{onClick:e[3]||(e[3]=r=>t.value=!t.value),to:{name:"Help"},class:"block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"},{default:s(()=>[l(" Help ")]),_:1}),o(a,{onClick:e[4]||(e[4]=r=>t.value=!t.value),to:{name:"Login"},class:"block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"},{default:s(()=>[l(" Notification ")]),_:1}),o(a,{onClick:e[5]||(e[5]=r=>t.value=!t.value),to:{name:"Login"},class:"block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"},{default:s(()=>[l(" Message ")]),_:1}),n("div",C,[o(c,{class:"cursor-pointer border rounded-full",onClick:e[6]||(e[6]=r=>t.value=!t.value),image:""}),g(n("div",{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100",onClick:e[8]||(e[8]=r=>t.value=!1)},[o(a,{to:{name:"ClientProfile"},class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},{default:s(()=>[l(" Profile ")]),_:1}),o(a,{to:{name:"TaskerDashboard"},class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},{default:s(()=>[l(" Dashboard ")]),_:1}),o(a,{to:{name:"Login"},class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},{default:s(()=>[l(" Settings ")]),_:1}),o(a,{to:{name:"taskerActive-Tasks"},class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},{default:s(()=>[l(" My Tasks ")]),_:1}),n("button",{onClick:e[7]||(e[7]=r=>p(d).handleLogout()),class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},[p(d).isLoading?(u(),v("div",h,[o(k,{indeterminate:"",color:"amber"})])):(u(),v("div",w,"Logout"))])],512),[[m,t.value]])])])])}}};export{N as _};