<script setup>
import { useAuthStore } from "../stores/auth";
import { ref } from 'vue';

const authStore = useAuthStore();

const showMenu = ref(false);
</script>
<template>
  <nav class="rounded bg-white text-white px-2 py-1 sm:px-4 sticky top-0 z-50">
    <div
      class="hidden md:container mx-auto md:flex flex-wrap items-center justify-between"
      bis_skin_checked="1"
    >
      <a href="/" class="flex items-center text-blue-700 font-semibold">
        Airtaskers Pro
        
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="
          ml-3
          inline-flex
          items-center
          rounded-lg
          p-2
          text-sm text-black
          hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-200
          dark:text-gray-400 dark:hover:text-blue-800 dark:focus:ring-gray-600
          md:hidden
        "
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only"></span>
        <svg
          class="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        class="hidden w-full md:block md:w-auto"
        id="navbar-default"
        bis_skin_checked="1"
      >
        <ul
          class="
            mt-4
            flex flex-col
            rounded-lg
            p-4
            md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium
          "
        >
        
          <li>
              <router-link @click="showMenu = !showMenu"
              :to="{ name: 'TaskPost' }"
                class="
                  block
                  rounded-full
                  py-2
                  px-4
                  bg-blue-600
                  text-white
                  hover:bg-blue-500
                "
                >Post task</router-link
              >
            </li>
          <template v-if="!authStore.isAuthenticated">
            <!-- <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'Categories' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-black
                  hover:text-blue-800
                "
                >categories</router-link
              >
            </li> -->
            <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'AllTasks' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-black
                  hover:text-blue-800
                "
             
                >Browse Tasks</router-link
              >
            </li>
            <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'HowItWorks' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-black
                  hover:text-blue-800
                "
                >How it works</router-link
              >
            </li>
           
            <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'Register' }"
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
                >Sign Up</router-link
              >
            </li>
            <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'Login' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-black
                  hover:text-blue-800
                "
                >Login</router-link
              >
            </li>
            <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'RegisterAsTasker' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-blue-600
                  hover:text-blue-800
                
                "
                >Become a tasker</router-link
              >
            </li>
         
          </template>
          <template v-else>
            <div class="flex space-x-3">
              <div class="flex">
                <li v-if="!authStore.user">
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'Login' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-black
                  hover:text-blue-800
                "
                >Browse Tasks</router-link
              >
            </li>
            <!-- <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'Mytask' }"
                class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800">
                My task
                </router-link>
            </li> -->
              </div>
              <div class="flex">
              
                <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'Login' }"
                class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800">
                Help
                </router-link>
            </li>
                <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'Login' }"
                class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800">
                bell icon
                </router-link>
            </li>
                <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'Login' }"
                class="block rounded py-2 pr-4 pl-3 text-black hover:text-blue-800">
                Message
                </router-link>
            </li>
           
            <div class=" justify-center pt-4 pl-7">
        <v-avatar  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxVEw9MRh_vuujq_zWCppZySLY0aEH7HrM9gr9EHa&s"></v-avatar>
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
            <div v-if="authStore.isLoading" >
                <v-progress-circular indeterminate color="amber"></v-progress-circular>
                </div>
                <div v-else>Logout</div>
            </button>
              </div>
            </div>
            
           
          </template>
        </ul>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <div class="flex  md:hidden bg-white">
     <button
      @click="showMenu = !showMenu"> <p v-if="!showMenu">
    <div class="flex space-x-12 justify-between align-content-center m-2">
     <div><img src="../assets/images/menu.png" alt="menu"/></div>
     <div class="text-blue-700 font-extrabold text-2xl">Airtaskers Pro</div>
     <div ><p class="bg-blue-700 rounded-full p-4 text-white font-bold text-2xl">+</p></div>
    
    </div>
    
   
    <v-divider class="border-opacity-100"></v-divider>
     </p>
     
     </button>
    <div v-if="showMenu">
      <button  @click="showMenu = false"><div class="flex justify-between align-center space-x-8"><p class="text-blue-400 font-bold text-2xl cursor-pointer">X</p> <div class="text-blue-700 font-extrabold text-2xl">Airtaskers Pro</div></div></button>
      <v-divider class="border-opacity-100"></v-divider>
        <ul
          class="
            mt-4
            flex flex-col
            rounded-lg
            p-4
            md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium
          "
        >
       
          <li>
            <router-link @click="showMenu = !showMenu"
              :to="{ name: 'TaskPost' }"
              class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-black
                  hover:text-blue-800
                "
              aria-current="page"
              >Post a task</router-link
            >
          </li>
          <template v-if="!authStore.isAuthenticated">
            <!-- <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'Categories' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-black
                  hover:text-blue-800
                "
                >categories</router-link
              >
            </li> -->
            <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'AllTasks' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-black
                  hover:text-blue-800
                "
                >Browse Tasks</router-link
              >
            </li>
            <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'HowItWorks' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-black
                  hover:text-blue-800
                "
                >How it works</router-link
              >
            </li>
           
            <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'Register' }"
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
                >Sign Up</router-link
              >
            </li>
            <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'Login' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-black
                  hover:text-blue-800
                "
                >Login</router-link
              >
            </li>
            <li>
              <router-link @click="showMenu = !showMenu"
                :to="{ name: 'RegisterAsTasker' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-blue-600
                  hover:text-blue-800
              
                "
                >Become a tasker</router-link
              >
            </li>
         
          </template>
         
        </ul>
      </div>
    </div>
  </nav>
</template>