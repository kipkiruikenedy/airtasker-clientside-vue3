<template>
  <ClientNav />
  <div class="flex justify-center space-x-3 m-3 py-1 px-3">
<div class="border py-1 px-3 rounded-md"> 
  <input
          type="text"
          placeholder="Search..."
          v-model="searchTerm"
          @keydown.enter="search"
          class=" bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
            />
  </div>


<div>Filter</div>

</div>



  <div class="grid grid-cols-12">
  <div class="bg-gray-500 col-span-2 gap-1">
 <ClientSidebar />
  </div>



<div v-if="authStore.isLoading">
  <v-progress-circular indeterminate color="amber"></v-progress-circular>
</div>
  <div v-else class="col-span-10 p-5 ">
  <p>My Pending Tasks</p>
    <div v-for="task in tasks"
     class="m-2 space-y-5 flex flex-row" 
     @click="router.push('/client/task/' + task.id +'/offer')"

>
    
   <TaskCard 
    :key="task.id" 
    :title="task.title" 
    :status="task.status" 
    :amount="task.amount" 
    :location="task.location" 
    :date="task.deadline" 
    :offers="task.offers" 
    :time="task.time" />
 </div>
  </div>
  </div>
  </template>
  
  

  <script setup>
  
  import { reactive, toRefs } from 'vue'
  import axios from 'axios'
  import TaskCard from "../TaskCard.vue";
  import { ref } from 'vue'
  import { Icon } from "@iconify/vue";
  import { useAuthStore } from "../../stores/auth";
  import {useRoute, useRouter} from "vue-router"
  import { onMounted, watch } from "vue";
  import ClientNav from './partials/ClientNav.vue';
  import ClientSidebar from './partials/ClientSideBar.vue';
  const router = useRouter();


const authStore = useAuthStore();

const route = useRoute();


const task = ref({});





  const categories = reactive([]);
  const tasks = reactive([]);
  const showCheckboxes = ref(false);
  
  // fetch data from localhost:8000
  
  axios.get('/api/categories')
    .then(response => {
      categories.push(...response.data);
  
    });
  
  const userAuthId=authStore.user.id;
 
   const params = new URLSearchParams([['user_id', userAuthId]]);
  
  try{
    authStore.isLoading = true;
    axios.get('/api/client/own-bidding-tasks',{params} )
    .then(response => {
      tasks.push(...response.data);
      authStore.isLoading = false;
    });
  }catch{
    console.log("erro occured")
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
  