<template>
    <div class="flex flex-col h-full mx-20 my-4 py-3">
      <div class="flex-1 overflow-y-auto">
        <div v-for="message in messages" :key="message.id">
          <div v-if="message">
            <div :class="{'justify-end': message.sender_id === currentUser?.id, 'justify-start': message.sender_id !== currentUser?.id}">
              <div class="flex items-center mb-2">
                <div v-if="message.sender_id !== currentUser?.id">
                  <img class="w-8 h-8 rounded-full mr-2" :src="receiverProfilePhotoUrl" :alt="receiverName"/>
                  <div class="font-semibold">{{ receiverName }}</div>
                </div>
                <div class="flex justify-end">
                  <div class="text-xs text-gray-500">{{ message.created_at }}</div>
                </div>
              </div>
              <div :class="{'bg-blue-100': message.sender_id === currentUser?.id, 'bg-gray-200': message.sender_id !== currentUser?.id} " class="rounded-md p-2 max-w-lg break-all">
                <div class="text-sm text-gray-700">{{ message.content }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <form @submit.prevent="sendMessage" class="flex items-center">
          <input v-model="newMessage" type="text" class="flex-1 rounded-md border-gray-400 border p-2 mr-2" placeholder="Type a message...">
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4">Send</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, defineProps, ref } from 'vue';
  import axios from 'axios';
  import { useAuthStore } from "../../stores/auth";
  
  const props = defineProps({
    messages: {
      type: Array,
      required: true
    },
    receiverProfilePhotoUrl: {
      type: String,
      required: true
    },
    receiverName: {
      type: String,
      required: true
    }
  });
  
  const authStore = useAuthStore();
 
  const userId = 1;
 
  const newMessage = ref('');
  
  async function sendMessage() {
    try {
      const response = await axios.post(`http://localhost:8000/api/charts/${userId}`, { receiver_id: props.messages[0].sender_id, content: newMessage.value });
      if (response.data) {
        console.log(response.data); 
        // response.data is not undefined or null
        newMessage.value = '';
      } else {
        // response.data is undefined or null
        console.error('Message not sent');
      }
    } catch (error) {
      console.error(error);
    }
  }
  </script>
  
 
  
  
  <style scoped>
  .bg-blue-100 {
    background-color: #bee3f8;
  }
  
  .bg-gray-200 {
    background-color: #f3f4f6;
  }
  </style>
  