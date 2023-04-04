<template>
    <div class="rating-page">
      <h1>Rate Your Tutor</h1>
      <form>
        <div>
          <label for="rating">Rating:</label>
          <select id="rating" v-model="rating">
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <div>
          <label for="comment">Comment:</label>
          <textarea id="comment" v-model="comment"></textarea>
        </div>
        <button @click.prevent="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { reactive } from 'vue';
  
  const state = reactive({
    rating: null,
    comment: ''
  });
  
  function submit() {
    axios.post('http://localhost:8000/api/ratings', {
      rating: state.rating,
      comment: state.comment
    }).then(() => {
      alert('Thank you for rating your tasker!');
    }).catch(error => {
      console.error(error);
      alert('An error occurred while rating your tasker.');
    });
  }
  </script>
  
  <style scoped>
  .rating-page {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  select, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  