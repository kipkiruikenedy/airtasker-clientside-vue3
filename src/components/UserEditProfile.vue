<template>
    <form @submit.prevent="updateUser">
      <input type="email" v-model="email" required />
      <input type="password" v-model="password" required />
      <button type="submit">Update</button>
    </form>
  </template>
  
  
  <script setup>
  import { useAuthStore } from '../store/auth'
  
  const authStore = useAuthStore()
  
  let email = authStore.user.email
  let password = ''
  
  async function updateUser() {
    try {
      await authStore.updateUser({ email, password })
    } catch (error) {
      console.error(error)
    }
  }
  </script>
  