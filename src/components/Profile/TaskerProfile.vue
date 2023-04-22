<template>
 <TaskerNav />
   <div class=" mx-auto my-5">
     <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
       <div class="md:flex">
         <div class="md:flex-shrink-0">
           <!-- <img class="h-48 w-full object-cover md:w-48" :src="user.avatarUrl" alt="User avatar"> -->
           image
         </div>
         <div class="p-8 space-y-3">
           <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"><span class="text-gray-600">Name:</span> {{authStore.user.first_name}} {{authStore.user.last_name}}</div>
           <div class="mt-2 text-gray-600 text-sm">Email:{{authStore.user.email}}</div>
           <div class="mt-2 text-gray-600 text-sm">Phone No:{{authStore.user.phone_number}}</div>
           <div class="mt-2 text-gray-600 text-sm">Gender:{{authStore.user.gender}}</div>
           <div class="mt-2 text-gray-600 text-sm"><span class="text-gray-800 font-semibold">Country:</span>{{authStore.user.country}}</div>
           <div class="mt-2 text-gray-600 text-sm"><span class="text-gray-800">Active since:</span>{{authStore.user.created_at}}</div>
         
           <button class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" @click="editUserDetails()">Edit Details</button>
         </div>
       </div>
     </div>
   </div>
 </template>

<script setup>

import { useAuthStore } from "../../stores/profile-store";
import { ref } from 'vue';
import TaskerNav from "../tasker/TaskerNav.vue";
import {useRoute, useRouter} from "vue-router"
const router = useRouter();
const authStore = useAuthStore();
console.log(authStore.user.id)
const showMenu = ref(false);


const editUserDetails = () => {
  router.push("/tasker/profile/edit")
}
</script>