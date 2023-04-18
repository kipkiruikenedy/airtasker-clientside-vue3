


<template>
  <!-- NAV -->
  <div class="flex justify-between p-1"><p>Airtaskers Pro</p><AdminNav /></div>
<div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
    <!-- SIDEBAR -->
<div class="bg-red-500 col-span-2">
<AdminSideBar/>
</div>
<!-- CONTENT -->
<div class="bg-white col-span-10">
<h2 class="text-center">Pending Tasks</h2>
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
     Task Title
    </th>
    <th class="text-left">
     client Name
    </th>
    <th class="text-left">
     Deadline
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
  <div class="text-center" v-if="authStore.isLoading"> <v-progress-circular
  :size="50"
  color="primary"
  indeterminate
></v-progress-circular>
</div>
<tr v-for="task in tasks" :key="task.id">
      <td>{{ task.id }}</td>
      <td>{{ task.title }}</td>
      <td>{{ task.amount }}</td>
      <td>{{ task.clie }}</td>
      <td>{{ task.gender }}</td>
      <td>{{ task.country }}</td>
      <td>
        <button @click="() => updateTaskStatus(task.id)" class="bg-blue-500 rounded-md py-1 px-2 text-white mx-2">Submit</button>
       
    </td>
  </tr>

</tbody>
</v-table>


</div>
</div>
</template>
<script setup>

import { useAuthStore } from '../../stores/auth';
import { reactive } from 'vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import AdminNav from './AdminNav.vue';
import AdminSideBar from './AdminSideBar.vue';
const authStore = useAuthStore();
const tasks = reactive([]);
// fetch data from localhost:5000



authStore.isLoading=true;
axios.get('http://127.0.0.1:8000/api/pending-tasks')
.then(response => {
tasks.push(...response.data);

authStore.isLoading=false;
});
console.log(tasks)





const updateTaskStatus = (taskId) => {
  axios.put(`http://127.0.0.1:8000/api/tasks/${taskId}/status`, { status: 'in-progress' })
    .then(response => {
      const taskIndex = tasks.findIndex(t => t.id === taskId);
      if (taskIndex !== -1) {
        tasks[taskIndex].status = 'in-progress';
      }
    })
    .catch(error => {
      console.error(error);
    });
};
</script>