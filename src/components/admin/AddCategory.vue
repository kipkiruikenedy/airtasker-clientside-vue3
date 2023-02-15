<template>
    <div>
      <label for="name">Category Name:</label>
      <input type="text" id="name" v-model="name">

  
      <button @click="saveUser">Save</button>
    </div>
  </template>
  
  <script setup>

import axios from "axios";
import { ref } from 'vue'
  
  const name = ref('')
 

  const saveUser = async (id) => {
    const data = { name: name.value}
  const confirmDelete = confirm("Are you sure you want to add this category?");
  if (confirmDelete) {
    try {
    axios.post('http://127.0.0.1:8000/api/admin-create-category', data)
      .then(response => {
      })
    } catch (error) {
      console.error(error);
    }
  }
};
  </script>
  