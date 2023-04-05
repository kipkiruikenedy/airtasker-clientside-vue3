


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

<div v-for="task in tasks">
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
<p>kenedy</p>
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
<div>one</div>
<div>2</div>
</div>
</div>
<!-- END OF TOP -->




<!-- START OF CARD -->
<div class="bg-gray-200 rounded m-4 p-3">
<div class="text-center" >
<p>Secured Payment</p>
<p class="text-2xl">${{ task.amount }}</p>
</div>

<div class="flex justify-between">
<div>Service Fee</div>
<div>$2</div>
</div>

<div class="flex justify-between">
<div>You'll receive</div>
<div>$16.21</div>
</div>
<!-- BUTTON -->
<div class="bg-green-500 text-center rounded-full py-1 ">
<button><p class="text-white">Request Payment</p></button>
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
const tasks = reactive([]);
// fetch data from localhost:5000

const route = useRoute();
const router = useRouter();
const Id=route.params.id;

console.log(Id)
authStore.isLoading=true;
axios.get(`http://127.0.0.1:8000/api/tasker-active-tasks/${Id}`)
.then(response => {
tasks.push(...response.data);

authStore.isLoading=false;
});
console.log(tasks)





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
</script>