<template>
    <div class="bg-white col-span-8 flex flex-row space-x-10 justify-center">
      <!-- SEARCH -->
      <div class="flex items-center border rounded-lg px-4 py-2 m-2">
        <input
          type="text"
          placeholder="Search..."
          v-model="searchTerm"
          @keydown.enter="search"
          class="w-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
            />


        <button @click="search" class="ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="" viewBox="0 0 24 24">
            <path
              d="M9 17a8 8 0 1 1 6.08-13.444l5.613 5.614A1 1 0 0 1 19 11.414l-.003.003-5.614-5.613A8 8 0 0 1 9 17zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            />
          </svg>
        </button>
      </div>
  
      <div class="flex space-x-2 flex-row">
      
        <button class="hover-button" @mouseover="showCheckboxes = true" @mouseout="showCheckboxes = false">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z"
            clip-rule="evenodd"
          />
        </svg>
        </button>
       
  
      </div>
  
      <div class="hover-parent">
      <div class="checkboxes" v-show="showCheckboxes">
        <label v-for="(item, index) in categories" :key="`item-${index}`" class="checkbox-label">
          <input type="checkbox" :value="item" v-model="selectedItems" class="checkbox-input" />
          <span class="checkbox-text">{{ item.job_category_name }}</span>
        </label>
      </div>
    </div>
  
  
  
      <div class="flex space-x-2">
        <p>Location</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
  
      <div class="flex space-x-2">
        <p>price</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="flex space-x-2">
        <p>other filters</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="flex space-x-2">
        <p>Other</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div
      class="min-h-screen bg-slate-400 grid grid-cols-1 md:grid-cols-12 mx-0 md:mx-10 gap-0 md:gap-6"
    >
      <div class="bg-green-200 col-span-1 md:col-span-4 ">
      <div v-for="task in tasks" class="m-2 space-y-5 "  @click="router.push(`/task/${task.id}`)">
  
  
        <TaskCard 
         :key="task.id" 
         :title="task.title" 
        
         :status="task.status" 
         :amount="task.amount" 
         :location="task.location" 
         :date="task.date_on" 
         :date_before="task.date_before" 
         :offers="task.offers" 
         :time="task.time" />
      </div>
      </div>
  
      <!-- MORE DETAILS -->
      <div class="bg-gray-200 col-span-8">
      <div class="flex space-x-4 p-3">
        <div class="w-3/5 bg-white">
        <!-- ROW1 -->
        <div class="flex space-x-3 p-2">
       
        <div class="bg-green-300 rounded-full py-1 px-2">COMPLETED</div>
     
        </div>
  
  <!-- ROW2 -->
        <div class="text-4xl text-blue-900 font-semibold">Small sent pulled out of car bonnet</div>
        <!-- ROW4 -->
        <div class="space-y-4">
        <div class="space-y-1">
        <div class="flex space-x-1">
        <div> <Icon icon="ic:twotone-location-on" /></div>
        <div> <p>Posted By</p><p>John</p></div>
        </div>
        </div>
  
        <div class="space-y-1">
        <div class="flex space-x-1">
        <div> <Icon icon="ic:twotone-location-on" /></div>
        <div> <p>LOCATION</p><p>Remote</p></div>
        </div>
        </div>
  
  
        <div class="space-y-1">
        <div class="flex space-x-1">
        <div> <Icon icon="ic:twotone-location-on" /></div>
        <div> <p>TO BE DONE ON</p><p>15/45/45</p></div>
        </div>
        </div>
  
       
        </div>
        <!-- ROW4 -->
        <div class="p-2 space-x-2">
        <div class="text-blue-800 text-2xl">Details</div>
        <div class="text-blue-900">Preparing car for sale has small dent on bonnet</div>
        <div class="flex space-x-2"><p>Due date:</p><p>flexible</p></div>
        </div>
  
        </div>
  
        <!-- RIGHT -->
        <div class="w-2/5 bg-white">
        <div class="bg-gray-200 rounded-lg m-8">
        <div class="p-3">
        <p class="text-center text-gray-700 mt-4">TASK BUDGET</p>
        <h1 class="text-center text-4xl font-semibold text-blue-900 mt-4">$1000</h1>
        </div>
        <!-- BUTTON -->
       <div class="ml-6 mt-5 mb-3 pb-3">
        <button class="bg-blue-600 text-white py-2 px-2 rounded-full items-center flex"
            ><p>Make an Offer</p>
          </button>
       </div>
       
        </div>
  
        <!-- TIME -->
        <div class="m-5">
        <p>posted 6 minutes ago</p>
        </div>
  
        </div>
      </div>
  
      <!-- OFFERS -->
     <div>
     <!-- TOP -->
     <div class="flex space-x-2">
      <div class=" justify-center pt-4 pl-7">
          <v-avatar  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxVEw9MRh_vuujq_zWCppZySLY0aEH7HrM9gr9EHa&s"></v-avatar>
        </div>
  <!-- ITEMS -->
     <div>
     <div>kenedy k.</div>
     <div>5 star</div>
     <div>98% Completion rate</div>
     </div>
     </div>
     <!-- MESSAGE -->
     <div class="p-3">
     <p>
      Hi Gautam,
  
  Small pressure washing business
   trying to start up and would love to gain some work completing this 
  task for you. I have all the correct commercial grade equipment and 
  would love to show what I can do. 
  Readily available!
  
  Kind regards,
  Aaron
     </p>
     <p class="text-gray-900 text-center">35 minutes ago</p>
     </div>
     </div>
  
  
      </div>
    </div>
  </template>
  
  
  <script setup>
  
  import { reactive, toRefs } from 'vue'
  import axios from 'axios'
  import TaskCard from "./TaskCard.vue";
  import { ref } from 'vue'
  import { Icon } from "@iconify/vue";
  import {useRoute, useRouter} from "vue-router"
  import { onMounted, watch } from "vue";
  const router = useRouter();
  
  const categories = reactive([]);
  const tasks = reactive([]);
  const showCheckboxes = ref(false);
  
  // fetch data from localhost:5000
  
  axios.get('http://127.0.0.1:8000/api/categories')
    .then(response => {
      categories.push(...response.data);
  
    });
  
  
  
    axios.get('http://127.0.0.1:8000/api/all-tasks')
    .then(response => {
      tasks.push(...response.data);
  
    });
  
  
  </script>
  
  
  
  
  <style scoped>
  .hover-parent {
    position: relative;
  }
  .hover-button {
    padding: 0.5rem 1rem;
    background-color: #3182CE;
    color: white;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  .checkboxes {
    position: absolute;
    top: 100%;
    left: 0;
    padding: 0.5rem;
    background-color: white;
    border: 1px solid #E5E7EB;
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .checkbox-label {
    display: block;
    margin-bottom: 0.5rem;
  }
  .checkbox-input {
    margin-right: 0.5rem;
    cursor: pointer;
  }
  .checkbox-text {
    cursor: pointer;
  }
  </style>
  