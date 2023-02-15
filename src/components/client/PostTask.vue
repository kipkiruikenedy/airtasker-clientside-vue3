<template>
    <div class="flex items-center justify-center h-screen">
      <form @submit.prevent="submitTask" class="w-3/5">
        <div class="mb-4">
          <label for="title" class="block text-gray-700 font-bold mb-2">Title:</label>
          <input type="text" id="title" v-model="title" class="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
  
        <div class="mb-4">
          <label for="description" class="block text-gray-700 font-bold mb-2">Description:</label>
          <GrammarlyEditorPlugin clientId="client_FT69PXiE6gD2r6ya8tv4AD">
          <textarea id="description" v-model="description" class="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
          </GrammarlyEditorPlugin>
        </div>
  
        <div class="mb-4">
          <label for="amount" class="block text-gray-700 font-bold mb-2">Amount:</label>
          <input type="number" id="amount" v-model="amount" class="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
  
        <div class="mb-4">
          <label for="category" class="block text-gray-700 font-bold mb-2">Category:</label>
          <select id="category" v-model="category" class="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="">Select a category</option>
            <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
          </select>
        </div>
  
         

        <div class="mb-4">
  <label for="image" class="text-gray-700 font-bold mb-2">Image:</label>
  <input 
    type="file" 
    id="image" 
    :rules="fileRules"
    accept="image/*"
    name="image" 
    @change="onFileSelected"
  >
</div>



        <div class="flex justify-end">
          <button type="submit" :disabled="!paymentCompleted" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <i class="mdi mdi-send mdi-18px mr-1"></i>
            Submit Task
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>

  import { ref, reactive, onMounted } from 'vue';
  import axios from 'axios';
  import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-vue'

  const file = ref(null)
  const title = ref('');
  const description = ref('');
  const amount = ref('');
  const category = ref('');
  const image = ref(null);
  const paymentCompleted = ref(false);
  const categories = reactive([]);


  const fileRules = [
  value => !!value || 'File is required',
  value => !value || value.size < 2000000 || 'File size should be less than 2 MB',
]

function onFileSelected(event) {
  const files = event.target.files
  if (files.length > 0) {
    file.value = files[0]
  }
};


  
  const getCategories = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/categories');
    categories = response.data;
  } catch (error) {
    console.error(error);
  }
};

const submitTask = async () => {
  if (paymentCompleted.value) {
    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('description', description.value);
    formData.append('amount', amount.value);
    formData.append('category', category.value);
    formData.append('image', image.value);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/create-tasks', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  } else {
    alert('Please complete payment before submitting the task.');
  }
};

onMounted(() => {
  getCategories();
});
</script>

<style scoped>
  form {
    width: 60%;
    margin: 0 auto;
  }
</style>

  