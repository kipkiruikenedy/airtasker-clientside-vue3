<script setup>

import { defineProps, reactive,ref } from 'vue';
import axios from 'axios';
import ClientNav from './partials/ClientNav.vue';
import ClientSidebar from './partials/ClientSideBar.vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';
import moment from 'moment';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const route = useRoute();
const router = useRouter();
const Id=route.params.id;
const authStore = useAuthStore();

const task = reactive({});
const offer = ref({});

console.log(Id);
axios.get(`http://localhost:8000/api/tasks/${Id}`)
  .then(response => {
    task.title = response.data.title;
    task.description = response.data.description;
    task.deadline = response.data.deadline;
    task.created_at = response.data.created_at;

    task.amount = response.data.amount;
    task.status = response.data.status;
    task.client_id = response.data.client_id;
    task.tasker_id = response.data.tasker_id;

    if (task.tasker_id) {
      const params = new URLSearchParams([
        ['task_id', Id],
        ['tasker_id', task.tasker_id],
      ]);

      try {
        authStore.isLoading = true;
        axios.get('http://127.0.0.1:8000/api/offers', { params })
  .then(response => {
    offer.value = response.data[0];
    authStore.isLoading = false;
   
  });

      } catch {
        console.log('Error occurred');
      }
    }
  })
  .catch(error => {
    console.error(error);
  });

  axios.get(`http://localhost:8000/api/tasks/${Id}`)
  .then(response => {
    task.title = response.data.title;
    task.description = response.data.description;
    task.deadline = response.data.deadline;
    task.created_at = response.data.created_at;
    task.amount = response.data.amount;
    task.status = response.data.status;
    task.client_id = response.data.client_id;
    task.tasker_id = response.data.tasker_id;
  })
  .catch(error => {
    console.error(error);
  });

const params = new URLSearchParams([
  ['task_id', Id],
  ['tasker_id', task.tasker_id],
]);

axios.get('http://127.0.0.1:8000/api/offers', { params })
  .then(response => {
    offer.value = response.data[0];
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




function editTasks() {
  axios.put(`http://localhost:8000/api/tasks/${Id}`, {
    title: task.title,
    description: task.description,
    deadline: task.deadline,
    amount: task.amount,
    status: task.status
  })
  .then(response => {
    // Display a success message to the user
    Swal.fire({
      icon: 'success',
      title: 'Task edited successfully!',
      showConfirmButton: false,
      timer: 1500
    });

    // Redirect the user to the client dashboard after successful task edit
    router.push('/client-active-task');
  })
  .catch(error => {
    console.error(error);
  });
}





function editTask() {
  router.push(`/client/task/${Id}/edit`);
}
function openChat() {
  router.push(`/client-active-task/${Id}/offer/${offer.id}`);
}






function cancelTask() {
  Swal.fire({
    title: 'Are you sure you want to cancel this task?',
    showCancelButton: true,
    confirmButtonText: 'Yes, cancel it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`http://localhost:8000/api/task/${Id}`)
        .then(response => {
          // Display a success message to the user
          Swal.fire({
            icon: 'success',
            title: 'Task cancelled successfully!',
            showConfirmButton: false,
            timer: 1500
          });

          // Redirect the user to the client dashboard after successful task cancellation
          router.push('/client-active-task');
        })
        .catch(error => {
          console.error(error);
        });
    }
  });
}



</script>

<template>
  <div>
    <div class="">
      <!-- SIDEBAR -->
     
     
      <div class="">

        <!-- TASK DETAILS -->
      
        <div class="bg-gray mx-10 my-3 px-10 py-1 border border-blue-600 flex justify-between rounded">
          



          <!-- left -->
        <div class="b">
          <div class="flex space-x-2">
          <p class="text-blue-900 font-semibold"></p><span class="text-blue-900">{{ offer.id }}</span>
          </div>

          <div class="flex space-x-2">
          <p class="text-blue-900 font-semibold">Description:</p><span class="text-blue-900">{{ offer.content}}</span>
          </div>
          
         
         
          <div class="flex space-x-2"><p class="text-blue-900 font-semibold">Status:</p><span class="text-blue-900">{{ task.status }}</span></div>
          <div class="flex space-x-2 mt-3 text-center border rounded py-1 px-2 mb-3"><p class="text-blue-900 font-semibold">Posted <span class="text-blue-900">{{ formatDate(offer.created_at) }}</span> </p></div>
          <div class="mt-5 flex space-x-2">
         <button  class="flex space-x-2 rounded-lg bg-green-500 text-white py-1 px-2 hover:bg-green-300 font-medium" @click="openChat">Message the Tasker</button>

          </div>
        </div>



<!-- right -->
        <div>
     
          <div class="flex space-x-2"><p class="text-blue-900 font-semibold">Amount:</p><span class="text-blue-900 font-semibold">{{ task.amount}}</span></div>

          <div class="flex space-x-2">
          <p class="text-blue-900 font-semibold">Deadline:</p><span class="text-blue-900">{{ task.deadline }}</span>
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
        <h1 class="text-center text-green-700 font-semibold underline"></h1>
          <router-view />
        </div>
      
      </div>
    </div>
  </div>
</template>
