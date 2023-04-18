<template>

  
  
  
      <div class="bg-green-200  ">
      <div v-for="task in tasks" class="m-2 space-y-5  "  @click="router.push(`/tasker-browse-task/${task.id}`)">
  
  
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
 
 
  </template>
  
  
  <script setup>
  
  import { reactive, toRefs } from 'vue'
  import axios from 'axios'
  import TaskCard from "../TaskCard.vue";
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
  
  
  
    axios.get('http://127.0.0.1:8000/api/open-tasks')
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
  