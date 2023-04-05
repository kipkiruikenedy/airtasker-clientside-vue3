<template>
  <div class="rating-page max-w-xl mx-auto p-6">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-6">
        <label class="block text-blue-700 font-bold mb-2 text-center" for="rating">
          Rate Your Tasker
        </label>
        <div class="flex justify-center mt-6">
  <StarRating v-model="rating" />
</div>
       

      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="comment">
          Comment:
        </label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="comment"
          v-model="comment"
        ></textarea>
      </div>
      <div class="flex items-center justify-end">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click.prevent="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import StarRating from './StarRating.vue';
const state = reactive({
  rating: 3,
  comment: '',
});

function submit() {
  axios
    .post('http://localhost:8000/api/ratings', {
      rating: state.rating,
      comment: state.comment,
    })
    .then(() => {
      alert('Thank you for rating your tasker!');
    })
    .catch((error) => {
      console.error(error);
      alert('An error occurred while rating your tasker.');
    });
}
</script>

<style scoped>
.rating-page {
  max-width: 600px;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

button:focus {
  outline: none;
}

button:hover {
  background-color: #48bb78;
}

button:active {
  background-color: #38a169;
}
</style>
