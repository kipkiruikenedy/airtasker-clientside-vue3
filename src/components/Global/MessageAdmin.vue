<template>

    
  <div class="flex justify-center items-center h-screen">
<div class="h-1/2">
    <form @submit.prevent="sendMessage">
      <h2 class="font-bold text-lg mb-2">Send Message to Admin</h2>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="message">
          Message
        </label>
        <textarea v-model="message" class="form-textarea mt-1 block w-full rounded-md border border-red-400 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" id="message" rows="3"></textarea>
      </div>
      <div class="mb-10">
                <button
                  type="submit"
                  class="
                    w-full
                    px-4
                    py-3
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                >
                
                <div v-if="authStore.isLoading" >
                <v-progress-circular indeterminate color="amber"></v-progress-circular>
                </div>
                <div v-else>Submit</div>
               
                  
                </button>
              </div>
    </form>
  </div>
  </div>

  
</template>

  
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useAuthStore } from '../../stores/auth'
import Swal from 'sweetalert2'
import {useRoute, useRouter} from "vue-router"
const authStore = useAuthStore()

const route = useRoute();
const router = useRouter();

  const message = ref('');
  


async function sendMessage() {
  try {
    authStore.isLoading = true;
    const response = await axios.post('/api/help', {
      message: message.value,
    });
    console.log(response.data);
    authStore.isLoading = false;

 

    // Optionally, redirect to another pag
     router.push("/help/success");

  } catch (error) {
    console.error(error);

    // Show an error message
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong. Please try again later.',
    });
  }
}


  </script>
  
  <style>
  /* Tailwind CSS styles */
  </style>
  