<template>
  <div class="z-50">
    <div class="bg-white rounded-lg border border-gray-300 shadow-lg overflow-hidden w-96">
      <div class="bg-gray-100 py-2 px-4">
        <h3 class="text-lg font-medium text-gray-900">Chat </h3>
      </div>
      <div class="p-4 h-64 overflow-y-auto">
        <!-- Chat messages go here -->
        <div v-for="message in messages" :key="message.id" :class="[message.from === 'user' ? 'bg-blue-100 text-left' : 'bg-gray-100 text-right', 'p-2 rounded-lg mb-2']">{{ message.content }}</div>
      </div>
      
      <div class="bg-gray-100 py-2 px-4 flex">
        <input type="file" class="hidden" ref="fileInput" @change="sendFile">
        <button class="mr-4 text-gray-700 hover:text-gray-900" @click="openFileInput">
  <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 3c3.87 0 7 3.13 7 7v4h2l-3.5 3.5L13 14h-2v4c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h6m0 2H6v12h4v-5h2v5h4V5m-2 7l-2.5 2.5L9 12l3-3 3 3-1.5 1.5L13 12z"/>
  </svg>
</button>

        <input type="text" class="border border-gray-300 rounded-full py-2 px-4 w-full" placeholder="Type your message here" v-model="message" @keyup.enter="sendMessage">
        <button class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-full" @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from "../../stores/auth";
import { reactive } from 'vue';
const route = useRoute();
const router = useRouter();
const Id=route.params.id;

const authStore = useAuthStore();
const userAuthId=authStore.user.id;
// const userAuthId=authStore.user.id;
const message = ref('');
const messages = ref([]);
const offer = reactive([]);
const taskerID = ref(null);
 

axios.get(`http://127.0.0.1:8000/api/offers/${Id}`)
  .then(response => {
    offer.title = response.data.title;
    offer.client = response.data.client;
    taskerID.value = response.data.tasker.id;

    fetchMessages(); 
  })
  .catch(error => {
    console.error(error);
  });










async function sendMessage() {
  try {
    // Send the message to the server
    const response = await axios.post('http://127.0.0.1:8000/api/chats', { 
      content: message.value,
      sender_id:userAuthId, 
      receiver_id:taskerID.value,
      task_id: Id 
    });
    // Add the message to the list of messages
    messages.value.push(response.data);
    // Clear the message input
    message.value = '';
  } catch (error) {
    console.log(error);
  }
}





function openFileInput() {
  fileInput.value.click();
}




async function sendFile(event) {
  const file = event.target.files[0];
  try {
    const formData = new FormData();
    formData.append('file', file);
    // Send the file to the server
    const response = await axios.post('http://127.0.0.1:8000/files', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    // Add a message to the list of messages with a link to the uploaded file
    messages.value.push({ content: `File uploaded: ${response.data.url}`, from: 'user' });
  } catch (error) {
    console.log(error);
  }
}


async function fetchMessages() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/chats', {
      params: {
        sender_id: taskerID.value, // Fetch messages where the current user is the receiver
        receiver_id: userAuthId, // Fetch messages sent by the other user
        task_id: Id 
      }
    });
    messages.value = response.data;
  } catch (error) {
    console.log(error);
  }
}




const fileInput = ref(null);

onMounted(() => {
  fetchMessages();
});




</script>

<style>
/* Tailwind CSS styles */
</style>
