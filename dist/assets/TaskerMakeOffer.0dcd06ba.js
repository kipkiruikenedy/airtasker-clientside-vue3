import{u as p,i as m,c as r,d as e,z as _,k as l,p as a,e as u,b,f as h,o as n,h as x}from"./index.da8c82bf.js";const f={class:"col-span-9"},v={class:"bg-[#F4F7FF] py-5 lg:py-[12px]"},y={class:"container mx-auto"},g={class:"-mx-4 flex flex-wrap"},w={class:"w-full px-4"},F={class:"relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"},E=e("div",{class:"mb-10 text-center md:mb-16 text-2xl text-blue-900"},"Tell the client why you are the best fit for this job",-1),k=e("p",null,"For your safety, do not share your personal information . eg email, phone or address",-1),B={class:"mb-6 mt-3"},C=e("p",null,"Enter your bid amount",-1),D={class:"mb-6"},S={class:"mb-10"},V={type:"submit",class:"w-full px-4 py-1 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"},A={key:0},M={key:1},j={__name:"TaskerMakeOffer",setup(T){const d=p(),i=h().params.id,t=m({title:"",task_id:i});return console.log(i),(N,o)=>{const c=x("v-progress-circular");return n(),r("div",f,[e("section",v,[e("div",y,[e("div",g,[e("div",w,[e("div",F,[E,e("form",{onSubmit:o[2]||(o[2]=_(s=>u(d).offer(t.value),["prevent"]))},[k,e("div",B,[C,l(e("input",{type:"number",required:"",placeholder:"amount","onUpdate:modelValue":o[0]||(o[0]=s=>t.value.amount=s),class:"bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-1 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"},null,512),[[a,t.value.amount]])]),e("div",D,[l(e("textarea",{type:"text",required:"",placeholder:"description goes here","onUpdate:modelValue":o[1]||(o[1]=s=>t.value.title=s),class:"bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-1 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"},null,512),[[a,t.value.title]])]),e("div",S,[e("button",V,[u(d).isLoading?(n(),r("div",A,[b(c,{indeterminate:"",color:"amber"})])):(n(),r("div",M,"Submit your Bid"))])])],32)])])])])])])}}};export{j as default};
