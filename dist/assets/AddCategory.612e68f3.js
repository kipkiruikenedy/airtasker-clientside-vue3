import{i as d,c as l,d as e,b as r,k as i,p as u,a as m,o as p,J as _}from"./index.47ead3c3.js";const b={class:"grid grid-cols-12 gap-2 min-h-screen bg-gray-200"},f={class:"bg-red-500 col-span-2"},h={class:"col-span-8 flex flex-col justify-center items-center"},g=e("div",{class:"bg-blue-100 text-center rounded-lg py-1 text-blue-900 font-semibold text-2xl mb-3"}," Add tasks Category ",-1),v={class:"w-full max-w-sm"},x={class:"md:flex md:items-center mb-6"},y={class:"md:w-2/3"},w=e("div",{class:"md:w-1/3"},null,-1),A={__name:"AddCategory",setup(k){const t=d(""),n=async c=>{const s={job_category_name:t.value};if(confirm("Are you sure you want to add this category?"))try{m.post("http://127.0.0.1:8000/api/admin-create-category",s).then(a=>{})}catch(a){console.error(a)}};return(c,s)=>(p(),l("div",b,[e("div",f,[r(_)]),e("div",h,[g,e("form",v,[e("div",x,[e("div",y,[i(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.value=o),class:"appearance-none bg-white border border-blue-700 rounded w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline",id:"category",type:"text",placeholder:"Bussiness"},null,512),[[u,t.value]])])]),e("div",{class:"md:flex md:items-center"},[w,e("div",{class:"md:w-2/3"},[e("button",{onClick:n,class:"shadow bg-blue-800 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",type:"button"}," Save ")])])])])]))}};export{A as default};
