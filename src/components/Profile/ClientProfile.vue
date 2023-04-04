<template>
   <ClientNav />
   <div class="grid grid-cols-12">
     <!-- SIDEBAR -->
     <div class="bg-green-100 col-span-2">
       <ClientSidebar />
     </div>
     <!-- CONTENT -->
     <div class="mx-auto py-10 col-span-10">
       <h1 class="text-3xl font-bold mb-5">Profile</h1>
       <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
         <div>
           <h2 class="text-xl font-bold mb-3">Personal Information</h2>
           <form @submit.prevent="updateProfile">
             <div class="mb-4">
               <label class="block text-gray-700 font-bold mb-2" for="name">First Name</label>
               <input
                 v-model="name"
                 class="appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="name"
                 type="text"
                 required
               />
             </div>

             <div class="mb-4">
               <label class="block text-gray-700 font-bold mb-2" for="name">Last Name</label>
               <input
                 v-model="name"
                 class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="name"
                 type="text"
                 required
               />
             </div>

             <div class="mb-4">
               <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
               <input
                 v-model="email"
                 class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="email"
                 type="email"
                 required
               />
             </div>
             <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Save
             </button>
           </form>
           
           <!-- PASSWORD -->
         <div>
           <h2 class="text-xl font-bold mb-3 mt-12">Change Password</h2>
           <form @submit.prevent="changePassword">
             <div class="mb-4">
               <label class="block text-gray-700 font-bold mb-2" for="currentPassword">Current Password</label>
               <input
                 v-model="currentPassword"
                 class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="currentPassword"
                 type="password"
                 required
               />
             </div>
             <div class="mb-4">
               <label class="block text-gray-700 font-bold mb-2" for="newPassword">New Password</label>
               <input
                 v-model="newPassword"
                 class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="newPassword"
                 type="password"
                 required
               />
             </div>
             <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Change Password
             </button>
           </form>
           <h2 class="text-xl font-bold my-3">Two-Step Verification</h2>
           <div class="mb-4">
             <label class="block text-gray-700 font-bold mb-2" for="twoStepVerification">Enable Two-Step Verification</label>
             <input
               v-model="twoStepVerification"
               class="form-checkbox h-5 w-5 text-gray-600"
               type="checkbox"
               id="twoStepVerification"
             />
           </div>
         </div>
         </div>

         
    </div>
    <div class="mt-8">
      <button @click="deleteAccount" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"></button>
        Delete Account
      </div>
  </div>
   </div>
 
</template>


<script setup>

import { useAuthStore } from "../../stores/auth";
import { ref } from 'vue';
import ClientNav from "../client/partials/ClientNav.vue";
import ClientSidebar from "../client/partials/ClientSideBar.vue";
import axios from 'axios'

const name = ref('')
const email = ref('')
const currentPassword = ref('')
const newPassword = ref('')
const twoStepVerification = ref(false)

const updateProfile = async () => {
  try {
    const response = await axios.put('/api/profile', {
      name: name.value,
      email: email.value
    })
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

const changePassword = async () => {
  try {
    const response = await axios.put('/api/password', {
      currentPassword: currentPassword.value,
      newPassword: newPassword.value
    })
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

const deleteAccount = async () => {
  if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
    try {
      const response = await axios.delete('/api/profile')
      console.log(response.data)
      // Redirect to login page after successful account deletion
      window.location.href = '/login'
    } catch (error) {
      console.error(error)
    }
  }
}



const authStore = useAuthStore();
console.log(authStore.user.id)
const showMenu = ref(false);
</script>

