import{j as d,c as l,b as e,a as r,k as i,p as u,f as m,o as _,K as p}from"./index.f9fba2aa.js";const b={class:"grid grid-cols-12 gap-2 min-h-screen bg-gray-200"},f={class:"bg-red-500 col-span-2"},g={class:"col-span-8 flex flex-col justify-center items-center"},h=e("div",{class:"bg-blue-100 text-center rounded-lg py-1 text-blue-900 font-semibold text-2xl mb-3"}," Add tasks Category ",-1),x={class:"w-full max-w-sm"},y={class:"md:flex md:items-center mb-6"},v={class:"md:w-2/3"},w=e("div",{class:"md:w-1/3"},null,-1),j={__name:"AddCategory",setup(k){const t=d(""),n=async c=>{const s={job_category_name:t.value};if(confirm("Are you sure you want to add this category?"))try{m.post("/api/admin-create-category",s).then(a=>{})}catch(a){console.error(a)}};return(c,s)=>(_(),l("div",b,[e("div",f,[r(p)]),e("div",g,[h,e("form",x,[e("div",y,[e("div",v,[i(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),class:"appearance-none bg-white border border-blue-700 rounded w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline",id:"category",type:"text",placeholder:"Bussiness"},null,512),[[u,t.value]])])]),e("div",{class:"md:flex md:items-center"},[w,e("div",{class:"md:w-2/3"},[e("button",{onClick:n,class:"shadow bg-blue-800 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",type:"button"}," Save ")])])])])]))}};export{j as default};