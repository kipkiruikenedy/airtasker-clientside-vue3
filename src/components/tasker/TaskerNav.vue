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
      :to="{ name: 'TaskerBrowseTask' }"
      class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"
    >
      Browse Tasks
    </router-link>

    <router-link
      @click="showMenu = !showMenu"
      :to="{ name: 'taskerActive-Tasks' }"
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
    <router-link
      @click="showMenu = !showMenu"
      :to="{ name: 'Login' }"
      class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800"
    >
      Notification
    </router-link>
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
          :to="{ name: 'TaskerProfile' }"
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
import { useAuthStore } from "../../stores/auth";
import { ref } from 'vue';

const authStore = useAuthStore();
const showMenu = ref(false);
</script>
