<template>
  <div class="p-4 text-center">
    <h2 class="font-bold text-lg mb-2">Send Message to Admin</h2>
    <form @submit.prevent="sendMessage">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="message">
          Message
        </label>
        <textarea v-model="message" class="form-textarea mt-1 block w-full rounded-md border border-red-400 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" id="message" rows="3"></textarea>
      </div>
      <div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

  
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const message = ref('');
  
  async function sendMessage() {
    try {
      const response = await axios.post('/api/help', {
        message: message.value,
      });
      console.log(response.data);
      // Show a success message or redirect to another page
    } catch (error) {
      console.error(error);
      // Show an error message
    }
  }

  </script>
  
  <style>
  /* Tailwind CSS styles */
  </style>
  