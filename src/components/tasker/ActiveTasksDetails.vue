


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

<div>
<p class="text-center text-blue-900 text-2xl font-semibold">{{ task.title }}</p>
<!-- TOP -->
<div class="flex justify-between">

<!-- right -->
<div class=" space-y-3">
<!-- ONE -->
<div class="flex space-x-3">
<div class="border rounded-full">image</div>
<div class="">
<p>POSTED BY</p>
<p>{{ task.client.first_name }} {{ task.client.last_name }}</p>
</div>
</div>
<!-- two -->
<div class="flex space-x-3">
<div class="">image</div>
<div class="">
<p>LOCATION</p>
<p>REMOTE</p>
</div>
</div>
<!-- three -->
<div class="flex space-x-3">
<div class="border rounded-full">image</div>
<div class="">
<p>TO BE DONE BEFORE</p>
<p>{{ task.deadline }}</p>
</div>
</div>
</div>
<!-- LEFT -->
<div class="flex flex-column justify-between py-6 my-5 mx-6">
<div>{{ formatDate(task.created_at) }}</div>
<div></div>
</div>
</div>
<!-- END OF TOP -->




<!-- START OF CARD -->
<div class="bg-gray-200 rounded m-4 p-3">
<div class="text-center" >
<p>Secured Payment</p>
<p class="text-2xl">${{ task.amount }}</p>
</div>

<div class="flex justify-between mt-4">
<div>Service Fee</div>
<div>${{ task.fees }}</div>
</div>

<div class="flex justify-between">
<div>You'll receive</div>
<div>${{ task.receivable }}</div>
</div>
<!-- BUTTON -->
<div class="bg-green-500 text-center rounded-full py-1 ">
<button><p class="text-white">Request Payment</p></button>
</div>
</div>
<!-- DETAILS -->
<div>
<p class="text-center">details</p>
<div>{{ task.description }}</div>
</div>
<!-- ASSIGNEE -->
<div>
<p class="text-start text-gray-800 mt-5 font-semibold">Assignee</p>
<div class="flex justify-between">
<!-- User Details -->
<div class="flex justify-between space-x-4">
<div class="rounded-full border">image</div>
<!-- details -->
<div >
  <p class="flex space-x-1">{{ task.tasker.first_name }} {{ task.tasker.last_name }}</p>
<p>rating</p>
<p>completion rate</p>
</div>

</div>

<div class="mr-10">${{ task.amount }}</div>
</div>

</div>

</div>
</div>

</div>

</template>

<script setup>
import TaskerNav from './TaskerNav.vue';
import TaskerSideBar from './TaskerSideBar.vue';
import { useAuthStore } from '../../stores/auth';
import { reactive } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
const authStore = useAuthStore();
const task = reactive([]);
// fetch data from localhost:5000

const route = useRoute();
const router = useRouter();
const Id=route.params.id;



  axios.get(`http://127.0.0.1:8000/api/tasks/${Id}`)
  .then(response => {
    task.title = response.data.title;
    task.description = response.data.description;
    task.deadline = response.data.deadline;
    task.created_at = response.data.created_at;
    task.amount = response.data.amount;
    task.status = response.data.status;
    task.fees = response.data.fees;
    task.receivable = response.data.receivable;
    task.created_at = response.data.created_at;

    task.client = response.data.client;
    task.tasker = response.data.tasker;

  })
  .catch(error => {
    console.error(error);
  });




const updateTaskStatus = (taskId) => {
  axios.put(`http://127.0.0.1:8000/api/tasks/${taskId}/status`, { status: 'completed' })
    .then(response => {
      const taskIndex = tasks.findIndex(t => t.id === taskId);
      if (taskIndex !== -1) {
        tasks[taskIndex].status = 'completed';
      }
    })
    .catch(error => {
      console.error(error);
    });
};


function formatDate(date) {
  const now = new Date();
  const timeDiff = (now.getTime() - new Date(date).getTime()) / 1000; // in seconds
  if (timeDiff < 60) {
    return 'now';
  } else if (timeDiff < 3600) {
    const minutes = Math.floor(timeDiff / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (timeDiff < 86400) {
    const hours = Math.floor(timeDiff / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(timeDiff / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}
</script>