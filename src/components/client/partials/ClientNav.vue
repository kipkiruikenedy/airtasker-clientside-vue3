<template>
  <div class="flex justify-between py-2 mb-2">
  <div class="flex space-x-3">
    <router-link
      @click="showMenu = !showMenu"
      :to="{ name: 'Home' }"
      class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"
    >
     Airtaskers Pro
    </router-link>

    <router-link
      @click="showMenu = !showMenu"
      :to="{ name: 'ClientTaskPost' }"
      class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"
    >
     Post Task
    </router-link>

    <router-link
      @click="showMenu = !showMenu"
      :to="{ name: 'ClientCurrentActiveTasks' }"
      class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"
    >
    My Tasks
    </router-link>
  
  </div>



  <div class="flex space-x-3 mx-4 px-2">
    <router-link
      @click="showMenu = !showMenu"
      :to="{ name: 'Help' }"
      class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"
    >
      Help
    </router-link>




    <div
    @click="showNotifications = !showNotifications"
      class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800 cursor-pointer"
    >
    <div class="relative">
      <p @click="toggleDropdown"><Icon icon="bi:bell" class="h-7 w-7 text-gray-500" /></p>
      <span class="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center z-10">2</span>
    </div>
    <div v-show="isDropdownVisible" class="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48">
      <ul>
        <li v-for="notification in notifications" :key="notification.id" @click="showNotificationDetails(notification)">
          {{ notification.title }}
        </li>
      </ul>
    </div>
    <div v-if="selectedNotification" class="mt-2 p-2 bg-gray-200 rounded-md">
      <h3>{{ selectedNotification.title }}</h3>
      <p>{{ selectedNotification.content }}</p>
      <p>Description goes here</p>
    </div>
    </div>






    <router-link
      @click="showMenu = !showMenu"
      :to="{ name: 'Login' }"
      class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"
    >
      Message
    </router-link>
    <div class="relative">
      <v-avatar
        class="cursor-pointer border rounded-full"
        @click="showMenu = !showMenu"
image
      ></v-avatar>
      <div
        v-show="showMenu"
        class="
          origin-top-right
          absolute
          right-0
          mt-2
          w-48
          rounded-md
          shadow-lg
          bg-white
          ring-1
          ring-black
          ring-opacity-5
          divide-y divide-gray-100
        "
        @click.away="showMenu = false"
      >
        <router-link
          :to="{ name: 'ClientProfile' }"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Profile
        </router-link>
        <router-link
          :to="{ name: 'TaskerDashboard' }"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Dashboard
        </router-link>



        <router-link
          :to="{ name: 'Login' }"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Settings
        </router-link>
        <router-link
          :to="{ name: 'taskerActive-Tasks' }"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          My Tasks
        </router-link>
        <button
          @click="authStore.handleLogout()"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <div v-if="authStore.isLoading">
            <v-progress-circular
              indeterminate
              color="amber"
            ></v-progress-circular>
          </div>
          <div v-else>Logout</div>
        </button>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script setup>
import { useAuthStore } from "../../../stores/auth";
import { reactive, ref } from 'vue';
import { Icon } from '@iconify/vue';
const authStore = useAuthStore();
const showMenu = ref(false);
const showNotifications = ref(false);

const state = reactive({
  isDropdownVisible: false,
  selectedNotification: null,
});

const notifications = ref([
  { id: 1, title: 'Notification 1', content: 'Notification 1 content' },
  { id: 2, title: 'Notification 2', content: 'Notification 2 content' },
]);

const toggleDropdown = () => {
  state.isDropdownVisible = !state.isDropdownVisible;
};

const showNotificationDetails = (notification) => {
  state.selectedNotification = notification;
};
</script>
