


<template>
    <div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
        <!-- SIDEBAR -->
   <div class="bg-red-500 col-span-2">
    <AdminSideBar/>
   </div>
   <!-- CONTENT -->
   <div class="bg-white col-span-10">
    <h2 class="text-center">Categories</h2>
  <v-table
    fixed-header
    height="300px"
  >
    <thead>
      <tr>
        <th class="text-left">
          First Name
        </th>
      
        <th class="text-left">
         Actions
        </th>
      </tr>
    </thead>
    <tbody>
<div class="text-center" v-if="authStore.isLoading"> <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    </div>
      <tr v-for="category in categories" :key="category .id">
          <td>{{ category.id }}</td>
        
          <td>
            <v-button class="bg-blue-500 rounded-md py-1 px-2 text-white mx-2">Update</v-button>
            <v-button class="bg-red-500 rounded-md py-1 px-2 text-white">Delete</v-button></td>
        </tr>
     
    </tbody>
  </v-table>

   
   </div>
    </div>
</template>
<script setup>
import AdminSideBar from '../components/admin/AdminSideBar.vue';
import { useAuthStore } from '../stores/auth';
import { reactive } from 'vue';
import axios from 'axios';
const authStore = useAuthStore();
const categories = reactive([]);
// fetch data from localhost:5000
authStore.isLoading=true;
axios.get('http://127.0.0.1:8000/api/categories')
  .then(response => {
    categories.push(...response.data);
    authStore.isLoading=false;
    console.log(categories)
  });


</script>