<template>
    <AdminNav/>
    <div class="grid grid-cols-12 gap-1">
    <div class="px-0 col-span-2">
    <AdminSideBar/>
    </div>

    <div class="px-0 col-span-10">
        <div class="p-4 text-center">
      <div class="mt-4">
        <h2 class="font-bold text-lg mb-2">Notifications</h2>
        <div v-for="(item, index) in messages" :key="index" class="bg-green-500 text-white rounded-lg p-2 mb-2">
          <div>{{ item.message }}</div>
        </div>
      </div>
    </div>
    </div>
    </div>

 
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { reactive } from 'vue';
import AdminNav from './AdminNav.vue';
import AdminSideBar from './AdminSideBar.vue';
  
  const messages = reactive([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get('https://server.airtaska.com/public/api/help');
      console.log(response.data);
      messages.push(...response.data.data)
    } catch (error) {
      console.error(error);
      // Show an error message
    }
  });
  </script>
  
  <style>
  /* Tailwind CSS styles */
  </style>
  