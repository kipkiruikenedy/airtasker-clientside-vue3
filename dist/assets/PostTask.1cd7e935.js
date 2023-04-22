import{u as v,i as h,r as x,b as y,c as a,d as u,a as e,e as n,t as m,y as g,z as f,k as l,p as r,A as k,F as _,m as w,o as d,h as F}from"./index.5473cf79.js";import{_ as E}from"./ClientNav.95260edf.js";import{C}from"./ClientSideBar.6d70ac17.js";const B={class:"grid grid-cols-12 z-0"},D={class:"col-span-3"},T={class:"col-span-9"},S={class:"bg-[#F4F7FF] py-20 lg:py-[120px]"},V={class:"container mx-auto"},U={class:"-mx-4 flex flex-wrap"},j={class:"w-full px-4"},A={class:"relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"},q={key:0,class:"bg-red-500 text-center rounded-lg py-1 text-white mb-3"},M=e("div",{class:"mb-10 text-center md:mb-16 text-2xl text-blue-900"},"Post a Task and get a Tasker do the work for you",-1),N={class:"mb-6"},$=e("p",null,"Title of your task. Give a brief title",-1),z={class:"mb-6"},L=e("p",null,"Tell us more about your project",-1),P={class:"mb-4 flex mt-3"},G=e("label",{for:"category",class:"block text-gray-700 font-bold mb-2"},"Task Category:",-1),I=e("option",{value:""},"Select a category",-1),W=["value"],H={class:"mb-6 mt-4"},J=e("p",null,"What is your Budget in USD for this task?",-1),K={class:"mb-6"},O=e("p",{class:"text-blue-800"},"Deadline of the task",-1),Q={class:"mb-6"},R=e("p",{class:"text-blue-800"},"Deadline Time",-1),X={class:"p-5"},Y={class:"mb-10"},Z={type:"submit",class:"w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"},ee={key:0},te={key:1},de={__name:"PostTask",setup(oe){const i=v(),s=h({title:"",description:"",amount:"",job_category_name:"",deadline:"",time:""}),c=x([]);return y.get("/api/categories").then(p=>{c.push(...p.data)}),(p,o)=>{const b=F("v-progress-circular");return d(),a(_,null,[u(E),e("div",B,[e("div",D,[u(C)]),e("div",T,[e("section",S,[e("div",V,[e("div",U,[e("div",j,[e("div",A,[n(i).authError?(d(),a("div",q,m(n(i).authError),1)):g("",!0),M,e("form",{onSubmit:o[6]||(o[6]=f(t=>n(i).handleTaskCreate(s.value),["prevent"]))},[e("div",N,[$,l(e("input",{type:"text",required:"",placeholder:"e.g I need a wordpress website","onUpdate:modelValue":o[0]||(o[0]=t=>s.value.title=t),class:"bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"},null,512),[[r,s.value.title]])]),e("div",z,[L,l(e("textarea",{type:"text",required:"",placeholder:"descripe your task fully to help the tasker understand the task fully","onUpdate:modelValue":o[1]||(o[1]=t=>s.value.description=t),class:"bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-5 px-8 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"},null,512),[[r,s.value.description]])]),e("div",P,[G,l(e("select",{id:"category","onUpdate:modelValue":o[2]||(o[2]=t=>s.value.job_category_name=t),class:"bg-gray-300 text-center ml-4 py-1 px-2 rounded-md",required:""},[I,(d(!0),a(_,null,w(c,t=>(d(),a("option",{value:t.id},m(t.job_category_name),9,W))),256))],512),[[k,s.value.job_category_name]])]),e("div",H,[J,l(e("input",{type:"number",placeholder:"$1200","onUpdate:modelValue":o[3]||(o[3]=t=>s.value.amount=t),class:"bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"},null,512),[[r,s.value.amount]])]),e("div",K,[O,e("div",null,[l(e("input",{type:"date",id:"birthday",name:"birthday","onUpdate:modelValue":o[4]||(o[4]=t=>s.value.deadline=t)},null,512),[[r,s.value.deadline]])])]),e("div",Q,[R,e("div",X,[l(e("input",{type:"time",id:"picker",name:"picker","onUpdate:modelValue":o[5]||(o[5]=t=>s.value.time=t)},null,512),[[r,s.value.time]])])]),e("div",Y,[e("button",Z,[n(i).isLoading?(d(),a("div",ee,[u(b,{indeterminate:"",color:"amber"})])):(d(),a("div",te,"Submit Task"))])])],32)])])])])])])])],64)}}};export{de as default};
