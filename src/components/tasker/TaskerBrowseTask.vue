<template>
  <TaskerNav  />
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
    <div v-for="task in tasks" class="m-2 space-y-5 grid-col "  @click="router.push(`/tasker-browse-task/${task.id}`)">


      <TaskCard 
       :key="task.id" 
       :title="task.title" 
       :status="task.status" 
       :amount="task.amount" 
       :location="Remote" 
       :date="task.deadline" 
       :description="task.description" 
       :offers="task.offers" 
       :time="task.time" />
    </div>
    </div>
<!-- RIGHT -->
    <div class="bg-green-200 col-span-1 md:col-span-8">
 <img src="https://pikwizard.com/pw/medium/f47d318cec9a759ae4d4a11112025ae8.avif" alt="image"/>
  </div>

  </div>
</template>


<script setup>

import { reactive, toRefs } from 'vue'
import axios from 'axios'
import TaskCard from "../TaskCard.vue";
import { ref } from 'vue'
import { Icon } from "@iconify/vue";
import {useRoute, useRouter} from "vue-router"
import { onMounted, watch } from "vue";
import OfferCard from '../OfferCard.vue';
import Nav from './TaskerNav.vue';
import TaskerSideBar from './TaskerSideBar.vue';
import TaskerNav from './TaskerNav.vue';
const router = useRouter();

const categories = reactive([]);
const tasks = reactive([]);
const showCheckboxes = ref(false);

// fetch data from localhost:5000

axios.get('https://server.airtaska.com/public/api/categories')
  .then(response => {
    categories.push(...response.data);

  });



  axios.get('https://server.airtaska.com/public/api/open-tasks')
  .then(response => {
    tasks.push(...response.data);

  });


  const showDescription = ref(false)

function truncateDescription(description, maxLength) {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...'
  } else {
    return description
  }
}
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
