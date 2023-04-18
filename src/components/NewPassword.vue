<template>
    <form @submit.prevent="submitForm">
      <label for="password">New password</label>
      <input type="password" id="password" v-model="password" required>
  
      <label for="password_confirmation">Confirm password</label>
      <input type="password" id="password_confirmation" v-model="confirmPassword" required>
  
      <button type="submit">Reset password</button>
    </form>
  </template>
  
  <script>
  
  import { ref } from 'vue';
  
  export default {
    props: ['token', 'email'],
  
    setup(props) {
      const password = ref('');
      const confirmPassword = ref('');
  
      const submitForm = async () => {
        try {
          const response = await fetch('/api/password/reset', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: props.email,
              token: props.token,
              password: password.value,
              password_confirmation: confirmPassword.value,
            }),
          });
  
          const data = await response.json();
  
          console.log(data); // Log the response data for debugging purposes
        } catch (error) {
          console.error(error);
        }
      };
  
      return {
        password,
        confirmPassword,
        submitForm,
      };
    },
  };
  </script>
  