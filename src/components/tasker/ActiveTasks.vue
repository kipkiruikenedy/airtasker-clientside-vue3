


<template>
      <!-- NAV -->
      <div class="flex justify-between p-1"><p>Airtasker Pro</p><TaskerNav /></div>
    <div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
        <!-- SIDEBAR -->
   <div class="bg-red-500 col-span-2">
    <TaskerSideBar/>
   </div>
   <!-- CONTENT -->
   <div class="bg-white col-span-10">
    <h2 class="text-center">Activly workig on Tasks</h2>
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
         Tasker Name
        </th>
        <th class="text-left">
         Tasker Email
        </th>
        <th class="text-left">
         Tasker Phone
        </th>
        <th class="text-left">
         Posted Date
        </th>
        <th class="text-left">
         completed Date
        </th>
        <th class="text-left">
         Amount
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
    <tr v-for="tasker in taskers" :key="tasker.id">
          <td>{{ tasker.first_name }}</td>
          <td>{{ tasker.last_name }}</td>
          <td>{{ tasker.email }}</td>
          <td>{{ tasker.phone_number }}</td>
          <td>{{ tasker.gender }}</td>
          <td>{{ tasker.country }}</td>
          <td>
            <v-button class="bg-blue-500 rounded-md py-1 px-2 text-white mx-2">Update</v-button>
            <v-button class="bg-red-500 rounded-md py-1 px-2 text-white">Delete</v-button>
        </td>
      </tr>
  
    </tbody>
  </v-table>

   
   </div>
    </div>
</template>
<script setup>
import TaskerNav from './TaskerNav.vue';
import TaskerSideBar from './TaskerSideBar.vue';
import { useAuthStore } from '../../stores/auth';
import { reactive } from 'vue';
import axios from 'axios';
const authStore = useAuthStore();
const completedTasks = reactive([]);
// fetch data from localhost:5000
authStore.isLoading=true;
axios.get('http://127.0.0.1:8000/api/admin-taskers')
  .then(response => {
    completedTasks.push(...response.data);
    authStore.isLoading=false;
  });

</script>