<template>
      <div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
        <!-- SIDEBAR -->
   <div class="bg-red-500 col-span-2">
    <AdminSideBar/>
   </div>
    <div class="flex h-screen place-items-center justify-center col-span-8">
      <div class="bg-red-500 text-center rounded-lg py-1 text-white mb-3"  >message</div>
      <label for="category">Category Name:</label>
      <input class="rounded bg-gray-400 text-white py-2 px-3" type="text"  id="name" v-model="job_category_name"/>
      <button @click="saveUser" class="bg-blue-800 ml-5 py-1 px-2 rounded text-white">Save</button>
    </div>
    </div>
  </template>
  

  <script setup>
import axios from "axios";
import { ref } from 'vue'
import AdminSideBar from './AdminSideBar.vue';
  const job_category_name = ref('');
 

  const saveUser = async (id) => {
    const data = { 	job_category_name:job_category_name.value}
  const confirmDelete = confirm("Are you sure you want to add this category?");
  if (confirmDelete) {
    try {
    axios.post('http://127.0.0.1:8000/api/admin-create-category', data)
      .then(response => {
       
      })
  
    } catch (error) {
      console.error(error);
    }
  }
};
  </script>
  