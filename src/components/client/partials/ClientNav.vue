<template>
  <div class="flex justify-between py-2 px-2 mt-2 sticky top-0 w-full z-50">
    <div>
      <a href="/" class="flex items-center text-blue-700 font-semibold">
        Airtasker Pro
      </a>
    </div>
    <div class="flex space-x-3">
      <div class="flex">
        <div>
          <router-link
            @click="showMenu = !showMenu"
            :to="{ name: 'Help' }"
            class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"
          >
            Help
          </router-link>
        </div>
        <div>
          <button
            @click="showNotifications = !showNotifications"
            class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"
          >
            Notifications
          </button>
        </div>
        <div>
          <router-link
            @click="showMenu = !showMenu"
            :to="{ name: 'ClientMessages' }"
            class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"
          >
            Message
          </router-link>
        </div>
        <div class="border rounded-full">
          <router-link @click="showMenu = !showMenu" :to="{ name: 'ClientProfile' }">
            <v-avatar image="../../assets/images/img1.PNG" alt="image"></v-avatar>
          </router-link>
        </div>
        <button
          @click="authStore.handleLogout()"
          class="
            block
            rounded
            py-2
            pr-4
            pl-3
            text-black
            hover:text-blue-800
            md:border-0
          "
        >
          <div v-if="authStore.isLoading">
            <v-progress-circular indeterminate color="amber"></v-progress-circular>
          </div>
          <div v-else>Logout</div>
        </button>
      </div>
    </div>
  </div>

  <!-- Notification dropdown -->
  <div v-if="showNotifications" class="absolute right-0 mt-2 mr-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div class="p-2">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
      <div class="mt-2 space-y-2">
        <div v-for="notification in notifications" :key="notification.id" class="p-2 bg-gray-100 rounded-md">
          <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
          <p class="text-sm text-gray-500">{{ notification.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../../../stores/auth";
import { ref } from 'vue';
import axios from 'axios';
import Notification from '../../notification/Notification.vue';

const authStore = useAuthStore();

const showMenu = ref(false);
const showNotifications = ref(false);
const notifications = ref([]);

// Fetch notifications from backend
// This assumes you have a route setup in Laravel for getting notifications
// You'll also need to update the route to match your own implementation
async function fetchNotifications() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/client/own-bidding-tasks');
    notifications.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

fetchNotifications();
</script>

