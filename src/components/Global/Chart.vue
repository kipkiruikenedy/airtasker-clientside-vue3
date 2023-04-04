<template>
    <div v-if="messages">
      <!-- render the component with messages -->
    </div>
    <div v-else>
      <!-- render an error message or loading spinner -->
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref } from 'vue';
  import axios from 'axios';
  
  const props = defineProps({
    userId: {
      type: Number,
      required: true
    }
  });
  
  const messages = ref(null);
  
  axios.get(`http://localhost:8000/api/charts/${props.userId}`)
    .then(response => {
      // set the response data to the messages ref
      messages.value = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  </script>
  