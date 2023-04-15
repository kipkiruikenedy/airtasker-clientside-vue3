


<template>
  <ClientNav/>
  <div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
      <!-- SIDEBAR -->
      <div class="bg-gray-500 col-span-2 gap-1">
 <ClientSidebar />
  </div>
 <!-- CONTENT -->
 <div class="bg-white col-span-10">
  <h2 class="text-center">Active Tasks</h2>
<v-table
  fixed-header
  height="300px"
>
  <thead>
    <tr>
      <th class="text-left">
        Task ID
      </th>
    
      <th class="text-left">
       Task Title
      </th>
    
      <th class="text-left">
      Amount
      </th>
      <th class="text-left">
        Tasker Name
      </th>
      <th class="text-left">
       Status
      </th>
      
      <th class="text-left">
       Actions
      </th>
    </tr>
  </thead>
  <tbody>
    <div class="text-center" v-if="authStore.isLoading"> <v-progress-circular
    :size="50"
    color="primary"
    indeterminate
  ></v-progress-circular>
  </div>
  <tr v-for="task in tasks" :key="task.id">
        <td>{{ task.id }}</td>
        <td>{{ task.title }}</td>
        <!-- <td>{{ task.user.name }}</td>
        <td>{{ task.amount }}</td>
        <td>{{ task.gender }}</td>
        <td>{{ task.country }}</td> -->
        <td>
          <v-button class="bg-blue-500 rounded-md py-1 px-2 text-red-900 mx-2" disabled>Completed</v-button>
         
      </td>
    </tr>

  </tbody>
</v-table>

 
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

const userAuthId=authStore.user.id;

 const params = new URLSearchParams([['user_id', userAuthId]]);

try{
  authStore.isLoading = true;
  axios.get('https://server.airtaska.com/public/api/client/own-completed-tasks',{params} )
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
