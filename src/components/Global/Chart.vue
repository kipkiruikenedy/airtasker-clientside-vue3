<template>
  <div v-if="messages">
    <!-- render the component with messages -->
    <ChatComponent :messages="messages" />
  </div>
  <div v-else>
    <!-- render an error message or loading spinner -->
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import axios from 'axios';
import ChatComponent from './ChatComponent.vue';

const props = defineProps({
  userId: {
    type: [Number, String], // update the prop type to accept Number or String
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
