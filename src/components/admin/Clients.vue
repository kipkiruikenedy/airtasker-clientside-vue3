


<template>
    <div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
        <!-- SIDEBAR -->
   <div class="bg-red-500 col-span-2">
    <AdminSideBar/>
   </div>
   <!-- CONTENT -->
   <div class="bg-white col-span-10">
    <h2 class="text-center">Clients</h2>
  
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
          Last Name
        </th>
        <th class="text-left">
          Email
        </th>
        <th class="text-left">
        Phone
        </th>
        <th class="text-left">
         Gender
        </th>
        <th class="text-left">
         Country
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
      <tr v-for="client in clients" :key="client.id">
          <td>{{ client.first_name }}</td>
          <td>{{ client.last_name }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.phone_number }}</td>
          <td>{{ client.gender }}</td>
          <td>{{ client.country }}</td>
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
import AdminSideBar from './AdminSideBar.vue';
import { useAuthStore } from '../../stores/auth';
import { reactive } from 'vue';
import axios from 'axios';
const authStore = useAuthStore();
const clients = reactive([]);
// fetch data from localhost:5000
authStore.isLoading=true;
axios.get('http://127.0.0.1:8000/api/admin-clients')
  .then(response => {
    clients.push(...response.data);
    authStore.isLoading=false;
    console.log( clients.tasks)
  });


</script>