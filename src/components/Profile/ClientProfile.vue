<template>
   <ClientNav/>
   <div class="grid grid-cols-12">
   <!-- SIDEBAR -->
   <div class="bg-green-100 col-span-2">
   <ClientSidebar />
   </div>
   <!-- CONTENT -->
   <div class=" col-span-10">
   <p>PROFILE</p>
      <p>{{authStore.user.first_name}}</p>
   <p>{{authStore.user.last_name}}</p>
   <p>{{authStore.user.email}}</p>
   <p>{{authStore.user.phone_number}}</p>
   </div>
 
   </div>
 
</template>

<script setup>

import { useAuthStore } from "../../stores/auth";
import { ref } from 'vue';
import ClientNav from "../client/partials/ClientNav.vue";
import ClientSidebar from "../client/partials/ClientSideBar.vue";

const authStore = useAuthStore();
console.log(authStore.user.id)
const showMenu = ref(false);
</script>