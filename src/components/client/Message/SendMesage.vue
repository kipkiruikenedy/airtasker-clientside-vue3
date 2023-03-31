<template>
  <div class="chat-container">
    <div class="messages">
      <p class="font-bold text-lg mb-2">Messages</p>
      <div
        v-for="message in messages"
        :key="message.id"
        class="message p-4 rounded-lg mb-4"
        :class="{ 'bg-gray-100': message.sender_id === senderId, 'bg-blue-100': message.receiver_id === senderId }"
      >
        <p class="text-gray-900">{{ message.content }}</p>
      </div>
    </div>
    <div class="message-input flex">
      <input
        type="text"
        v-model="form.newMessage"
        @keyup.enter="form.sendMessage"
        class="flex-grow rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        @click.prevent="authStore.sendMessage(form)"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useAuthStore } from "../../../stores/auth";
const authStore = useAuthStore();


const senderId = 1; // change to the ID of the sender
const assignmentId = 1; // change to the ID of the assignment

const messages = ref([]);


const form = ref({
  newMessage: "",
  task_id:1
});







</script>
