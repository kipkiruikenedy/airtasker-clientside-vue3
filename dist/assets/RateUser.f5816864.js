import{_ as p,i as r,c,d as e,F as v,m as h,k as f,p as g,a as m,o as i,q as x,s as y,x as w}from"./index.da8c82bf.js";const u=o=>(y("data-v-3e09184d"),o=o(),w(),o),b={class:"flex flex-col items-center space-y-4 mt-8"},k=u(()=>e("p",{class:"text-2xl text-gray-900"},"Rate the tasker(OPTIONAL)",-1)),R={class:"flex items-center"},C=["onClick"],I=u(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-current",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z","clip-rule":"evenodd"})],-1)),B=[I],L={class:"flex flex-col items-center"},S={__name:"RateUser",setup(o){const s=r(0),l=r("");function d(a){s.value=a}function _(){m.post("http://localhost:8000/api/ratings",{rating:s.value,comment:l.value}).then(()=>{console.log("Rating saved successfully"),alert("Thank you for rating your tutor!"),l.value=""}).catch(a=>{console.error(a),alert("An error occurred while saving your rating.")})}return(a,n)=>(i(),c("div",b,[k,e("div",R,[(i(),c(v,null,h(5,t=>e("button",{key:t,class:x(["mr-1 focus:outline-none",{"text-yellow-400":t<=s.value,"text-gray-300":t>s.value}]),onClick:U=>d(t)},B,10,C)),64))]),e("div",L,[f(e("textarea",{class:"rounded-lg w-96 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100","onUpdate:modelValue":n[0]||(n[0]=t=>l.value=t),placeholder:"Enter your comment here"},null,512),[[g,l.value]]),e("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:_}," Submit ")])]))}},T=p(S,[["__scopeId","data-v-3e09184d"]]);export{T as default};
