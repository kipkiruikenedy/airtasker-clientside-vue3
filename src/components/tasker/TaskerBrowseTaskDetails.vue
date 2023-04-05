<script setup>
import { defineProps, reactive } from 'vue';
import axios from 'axios';

import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import moment from 'moment';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import TaskerNav from './TaskerNav.vue';
import TaskerSideBar from './TaskerSideBar.vue';

const route = useRoute();
const router = useRouter();
const Id=route.params.id;
const authStore = useAuthStore();

const task = reactive({});

console.log(Id);

axios.get(`http://localhost:8000/api/tasks/${Id}`)
  .then(response => {
    task.title = response.data.title;
    task.description = response.data.description;
    task.deadline = response.data.deadline;
    task.created_at = response.data.created_at;

    task.amount = response.data.amount;
    task.status = response.data.status;

  })
  .catch(error => {
    console.error(error);
  });



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





function cancelTask() {
  Swal.fire({
    title: 'Are you sure you want to bid for this task?',
    showCancelButton: true,
    confirmButtonText: 'Yes, I want to bid!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.isConfirmed) {
      router.push(`/tasker-browse-task/${task.id}/make-offer`);
    }
  });
}


</script>

<template>
  <div>
    <TaskerNav />
    <div class="grid grid-cols-12">
      <!-- SIDEBAR -->
      <div class="bg-red-100 col-span-2">
        <TaskerSideBar />
      </div>
     
      <div class="col-span-10">

        <!-- TASK DETAILS -->
        <h2 class="text-center">Details</h2>
        <div class="bg-gray mx-10 my-3 px-10 py-1 border border-blue-600 flex justify-between rounded">
          



          <!-- left -->
        <div class="b">
          <div class="flex space-x-2">
          <p class="text-blue-900 font-semibold">image:</p><span class="text-blue-900">{{ task.title }}</span>
          </div>
          <div class="flex space-x-2">
          <p class="text-blue-900 font-semibold">By:</p><span class="text-blue-900">{{ task.title }}</span>
          </div>
          <div class="flex space-x-2">
          <p class="text-blue-900 font-semibold">Rating:</p><span class="text-blue-900">{{ task.title }}</span>
          </div>

          <div class="flex space-x-2">
          <p class="text-blue-900 font-semibold">Description:</p><span class="text-blue-900">{{ task.description }}</span>
          </div>
          
         
         
          <div class="flex space-x-2"><p class="text-blue-900 font-semibold">Status:</p><span class="text-blue-900">{{ task.status }}</span></div>
          <div class="flex space-x-2 mt-3 text-center border rounded py-1 px-2 mb-3"><p class="text-blue-900 font-semibold">Posted <span class="text-blue-900">{{ formatDate(task.created_at) }}</span> </p></div>
        </div>



<!-- right -->
        <div>
     
          <div class="flex space-x-2"><p class="text-blue-900 font-semibold">Amount:</p><span class="text-blue-900 font-semibold">{{ task.amount}}</span></div>

          <div class="flex space-x-2">
          <p class="text-blue-900 font-semibold">Deadline:</p><span class="text-blue-900">{{ task.deadline }}</span>
          </div>
          <div class="mt-5">
         <button  class=" space-x-2 rounded-lg bg-green-500 text-white py-1 px-3 hover:bg-green-300 font-medium w-10" @click="cancelTask">Bid</button>
          </div>
        </div>
          
         
        <div class="text-center" v-if="authStore.isLoading"> <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    </div>
        </div>

        <!-- OFFERS -->
        <div>
        <h1 class="text-center text-green-700 font-semibold underline">Offers</h1>
          <router-view />
        </div>
      
      </div>
    </div>
  </div>
</template>
