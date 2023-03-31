<template>
    <div class="flex space-x-3">
      <div class="flex">
        <div>
      <router-link @click="showMenu = !showMenu"
        :to="{ name: 'TaskerBrowseTask' }"
        class="
          block
          rounded
          py-2
          pr-4
          pl-3
          text-black
          hover:text-blue-800
        "
        >Browse Tasks</router-link
      >
    </div>
   
      </div>
      <div class="flex">
      
        <div>
      <router-link @click="showMenu = !showMenu"
        :to="{ name: 'Login' }"
        class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800">
        Help
        </router-link>
    </div>
        <div>
      <router-link @click="showMenu = !showMenu"
        :to="{ name: 'Login' }"
        class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800">
        Notification
        </router-link>
    </div>
        <div>
      <router-link @click="showMenu = !showMenu"
        :to="{ name: 'Login' }"
        class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800">
        Message
        </router-link>
    </div>
   
    <div class=" justify-center pt-4 pl-7">
<v-avatar  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxVEw9MRh_vuujq_zWCppZySLY0aEH7HrM9gr9EHa&s"></v-avatar>
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
    
   
  </template>

  <script setup>
import { useAuthStore } from "../../stores/auth";
import { ref } from 'vue';

const authStore = useAuthStore();

const showMenu = ref(false);
</script>