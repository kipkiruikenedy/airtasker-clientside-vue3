<template>
 <div v-for="user in users" :key="user.id">
  <div v-if="user">
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

</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from "../../stores/auth";
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const userId = authStore.user.id;
console.log(userId)
const users = ref([]);
const router = useRouter();
async function getUsers() {
  try {
    const response = await axios.get(`http://localhost:8000/api/charts/users/${userId}`);
    users.value = response.data;
   
  } catch (error) {
    console.error(error);
  }
}

async function openChat(user) {
  try {
    const response = await axios.get(`http://localhost:8000/api/charts/${userId}?sender_id=${userId}&receiver_id=${user.id}`);

    if (response.data) {
      console.log(response.data); 
      const messages = response.data; // assuming response.data is an array of messages
      router.push({ name: 'Chat', params: { userId: userId }, query: { messages: JSON.stringify(messages) } });

    } else {
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
