


<template>
    <div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
        <!-- SIDEBAR -->
   <div class="bg-red-500 col-span-2">
    <AdminSideBar/>
   </div>
   <!-- CONTENT -->
   <div class="bg-white col-span-10">
    <h2 class="text-center">Completed Payments</h2>
  <v-table
    fixed-header
    height="300px"
  >
    <thead>
      <tr>
        <th class="text-left">
          Task ID
        </th>
        <th class="text-left">
          Client Name
        </th>
        <th class="text-left">
         Client Email
        </th>
        <th class="text-left">
         Tasker Name
        </th>
        <th class="text-left">
         Tasker Email
        </th>
        <th class="text-left">
         Amount
        </th>
        <th class="text-left">
         Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>df123123</td>
        <td>sam</td>
        <td>ken@gmail.com</td>
        <td>254799460000</td>
        <td>12/12/2022</td>
        <td>$200</td>
        <td>kenya</td>
        <td>
            <v-button class="bg-blue-500 rounded-md py-1 px-2 text-white mx-2">Update</v-button>
            <v-button class="bg-red-500 rounded-md py-1 px-2 text-white">Delete</v-button>
        </td>
      </tr>
      <!-- <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr> -->
    </tbody>
  </v-table>

   
   </div>
    </div>
</template>
<script setup>
import AdminSideBar from './AdminSideBar.vue';
import { reactive } from 'vue';
import axios from 'axios';
const taskers = reactive([]);
// fetch data from localhost:5000
axios.get('https://server.airtaska.com/public/api/admin-taskers')
  .then(response => {
    taskers.push(...response.data);
    console.log(" taskers")
  });
</script>