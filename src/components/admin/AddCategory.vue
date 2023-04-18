<template>
  <div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
    <!-- SIDEBAR -->
    <div class="bg-red-500 col-span-2">
      <AdminSideBar />
    </div>
    <!-- CONTENT -->
    <div class="col-span-8 flex flex-col justify-center items-center">
      <div class="bg-blue-100 text-center rounded-lg py-1 text-blue-900 font-semibold text-2xl mb-3">
        Add tasks Category
      </div>
      <form class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          
          <div class="md:w-2/3">
            <input
              v-model="job_category_name"
              class="appearance-none bg-white border border-blue-700 rounded w-full py-2 px-3 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              placeholder="Bussiness"
            />
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              @click="saveUser"
              class="shadow bg-blue-800 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

  

  <script setup>
import axios from "axios";
import { ref } from 'vue'
import AdminSideBar from './AdminSideBar.vue';
  const job_category_name = ref('');
 

  const saveUser = async (id) => {
    const data = { 	job_category_name:job_category_name.value}
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
  