<template>
  
  <div class="flex flex-col h-full mx-20 border border-blue-600 rounded my-4 shadow-lg bg-white px-3 py-3">
    <div class="flex-1 overflow-y-auto">
      <div v-for="user in users" :key="user.id">
        <div class="flex justify-between items-center py-2 px-4 bg-white shadow-sm rounded-md my-1 cursor-pointer" @click="openChat(user)">
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-2" :src="user.profile_photo_url" :alt="`${user.first_name} `"/>
            <div class="text-gray-500">{{ user.first_name }} {{ user.last_name }}</div>
          </div>
          <div v-if="user.is_online" class="rounded-full w-3 h-3 bg-green-500"></div>
          <div v-else  class="rounded-full w-3 h-3 bg-gray-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from "../../stores/auth";
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const authUserId = authStore.user.id;
const users = ref([]);
const router = useRouter();

async function getUsers() {
  try {
    const response = await axios.get(`http://localhost:8000/api/charts/users/${authUserId}`);
    users.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

async function openChat(user) {
  try {
    const response = await axios.get(`http://localhost:8000/api/charts/${authUserId}?sender_id=${authUserId}&receiver_id=${user.id}`);
    if (response.data) {
      console.log(response.data); 
      // response.data is not undefined or null
      const messages = response.data.data;
      // navigate to the chat page and pass the messages as a prop
     router.push({ name: 'Chat', query: { messages: JSON.stringify(messages) } });

    } else {
      // response.data is undefined or null
      console.error('No messages found');
    }
  } catch (error) {
    console.error(error);
  }
}

getUsers();
</script>

<style scoped>
.img-circle {
  border-radius: 50%;
}

.bg-green-500 {
  background-color: #48bb78;
}
</style>
