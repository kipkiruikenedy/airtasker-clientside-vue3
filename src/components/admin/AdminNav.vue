<template >
  <div class="flex justify-between py-2 px-2 mt-2 sticky top-0 w-full z-50">
  <div>  <a href="/" class="flex items-center text-blue-700 font-semibold">
        Airtasker Pro
        
      </a></div>
    <div class="flex space-x-3">
    
      <div class="flex">
      
       
        <div>
      <router-link @click="showMenu = !showMenu"
        :to="{ name: 'AdminNotifications' }"
        class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800">
        Notification
        </router-link>
    </div>
        

        <div class="border rounded-full">
      <router-link @click="showMenu = !showMenu"
        :to="{ name: 'ClientProfile' }">
        <v-avatar 
         image="../../assets/images/img1.PNG" alt="image">
        </v-avatar>
        </router-link>
      </div>
   
    
        <button
      @click="authStore.handleLogout()"
      class="
        block
        rounded
        py-2
        pr-4
        pl-3
        text-black
        hover:text-blue-800
        md:border-0
      "
    >
    <div v-if="authStore.isLoading" >
        <v-progress-circular indeterminate color="amber"></v-progress-circular>
        </div>
        <div v-else>Logout</div>
    </button>
      </div>
    </div>
  </div>
  </template>


  <script setup>
import { useAuthStore } from "../../stores/auth";
import { ref } from 'vue';
import Notification from '../notification/Notification.vue';
const authStore = useAuthStore();
console.log(authStore.user)

const showMenu = ref(false);
</script>