<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../stores/auth";
import SideBar from "./admin/AdminSideBar.vue";

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});
</script>
<template>
  <div class="max-w-7xl mx-auto">
    <div v-if="authStore.user">
      <h1>{{ authStore.user.name }}</h1>
      <p>{{ authStore.user.email }}</p>
    </div>
    <div v-else>
     
    <div>
    <p>landing page</p>
    </div>
   
    </div>
  </div>
</template>