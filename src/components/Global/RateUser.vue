<template>
  <div class="flex flex-col items-center space-y-4 mt-8">
<p class="text-2xl text-gray-900">Rate the tasker(OPTIONAL)</p>
    <div class="flex items-center">
      <button
        v-for="n in 5"
        :key="n"
        class="mr-1 focus:outline-none"
        :class="{
          'text-yellow-400': n <= rating,
          'text-gray-300': n > rating,
        }"
        @click="setRating(n)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-current" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class="flex flex-col items-center">
      <textarea
        class="rounded-lg w-96 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100"
        v-model="comment"
        placeholder="Enter your comment here"
      ></textarea>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="submit"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const rating = ref(0);
const comment = ref('');

function setRating(value) {
  rating.value = value;
}

function submit() {
  axios
    .post('http://localhost:8000/api/ratings', {
      rating: rating.value,
      comment: comment.value,
    })
    .then(() => {
      console.log('Rating saved successfully');
      alert('Thank you for rating your tutor!');
      comment.value = '';
    })
    .catch((error) => {
      console.error(error);
      alert('An error occurred while saving your rating.');
    });
}
</script>

<style scoped>
button:hover {
  cursor: pointer;
}
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fbbf24;
}
</style>
