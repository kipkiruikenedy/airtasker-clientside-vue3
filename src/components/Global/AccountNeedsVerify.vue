<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-3xl font-bold mb-4">Account Verification Required</h1>
      <p class="text-lg text-gray-600 mb-8">
        You need to verify your email address before you can access this page.
      </p>
      <router-link
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        to="/verify-email"
      >
        Verify Email
      </router-link>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'AccountNeedsVerify',
  }
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  