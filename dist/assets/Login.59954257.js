import{u as h,i as v,c as a,b as i,d as e,e as r,t as g,y as w,z as f,k as u,p,w as m,j as l,F as y,h as _,o as d,B as E,g as F,S as k}from"./index.5c42c678.js";const B={class:"bg-[#F4F7FF] py-20 lg:py-[120px]"},C={class:"container mx-auto"},S={class:"-mx-4 flex flex-wrap"},D={class:"w-full px-4"},V={class:"relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"},L={key:0,class:"mb-6"},N={class:"bg-red-500 text-center rounded-lg py-1 text-white"},A=e("div",{class:"mb-10 text-center md:mb-16"},"Airtaskers Pro",-1),P={class:"mb-6"},U={class:"mb-6"},M={class:"mb-10"},T={type:"submit",class:"w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"},j={key:0},q={key:1},z={class:"text-base text-[#adadad]"},H={__name:"Login",setup(R){const o=h();F();const s=v({email:"",password:""}),x=()=>{k.fire({icon:"error",title:"Login Error",text:o.authError})};return($,t)=>{const b=_("v-progress-circular"),c=_("router-link");return d(),a(y,null,[i(E),e("section",B,[e("div",C,[e("div",S,[e("div",D,[e("div",V,[r(o).authError?(d(),a("div",L,[e("div",N,g(r(o).authError),1)])):w("",!0),A,e("form",{onSubmit:t[2]||(t[2]=f(async()=>{await r(o).login(s.value),r(o).authError&&x()},["prevent"]))},[e("div",P,[u(e("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=n=>s.value.email=n),placeholder:"Email",class:"bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"},null,512),[[p,s.value.email]])]),e("div",U,[u(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=n=>s.value.password=n),placeholder:"Password",required:"",class:"bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"},null,512),[[p,s.value.password]])]),e("div",M,[e("button",T,[r(o).isLoading?(d(),a("div",j,[i(b,{indeterminate:"",color:"amber"})])):(d(),a("div",q,"Login"))])])],32),i(c,{to:"/forgot-password",class:"mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"},{default:m(()=>[l(" Forgot Password? ")]),_:1}),e("p",z,[l(" Not a member yet? "),i(c,{to:"/register/client",class:"text-primary hover:underline"},{default:m(()=>[l(" Sign Up ")]),_:1})])])])])])])],64)}}};export{H as default};