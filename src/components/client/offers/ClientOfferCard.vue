<template>
<div class="bg-white rounded border border-red m-3 p-2">
    <!-- TOP -->
  
    <div class="flex space-x-2">
   
     <div class=" justify-center pt-4 pl-7">
         <v-avatar  image="../../assets/images/azure.PNG"></v-avatar>
       </div>
 <!-- ITEMS -->
    <div class="flex space-x-10">
    <div>
    <div >user{{name}}</div>
    <div>{{rating  }}/5<span class="ml-1">stars</span></div>
    <div>{{ CompletionPercentage }}<span class="mr-1">%</span>Completion rate</div>
</div>

<div class="py-1 px-2">
<button class="bg-blue-600 text-white py-1 px-3 rounded-full items-center flex "
@click="router.push(`/client/task/${id}/pay`)"
          ><p>Employ tasker</p>
        </button>
</div>
   
    </div>
    </div>
    <!-- MESSAGE -->
    <div class="p-3">
    <p>
        {{ message }}
    </p>
    
    <div class="py-1 px-2 flex justify-between m-1">
      <p class="text-gray-900 text-center">{{ minutesAgo }}minutes ago</p>
<button class="bg-blue-600 text-white py-1 px-3 rounded-full items-center flex "
@click="router.push(`/client/task/${id}/pay`)"
          ><p>Reply</p>
        </button>

</div>
    </div>
    </div>


    </template>


    <script setup>

import { Icon } from "@iconify/vue";
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const { id } = route.params;

const props = defineProps({
 name: String,
 message: String,

 rating:{
    type: Number,
    validator: (value) => {
      // Return true if value is a valid integer, otherwise false
      return Number.isInteger(parseInt(value));
    },
  },

  CompletionPercentage:{
    type: Number,
    validator: (value) => {
      // Return true if value is a valid integer, otherwise false
      return Number.isInteger(parseInt(value));
    },
  },


  minutesAgo: {
    type: Number,
    validator: (value) => {
      // Return true if value is a valid integer, otherwise false
      return Number.isInteger(parseInt(value));
    },
  },
 
 
});
</script>