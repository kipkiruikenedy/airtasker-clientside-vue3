<template>
<div class="bg-white rounded border border-red m-6 p-2">
    <!-- TOP -->
  
    <div class="flex space-x-2">
   
     <div class=" justify-center pt-4 pl-7">
         <v-avatar  image=""></v-avatar>
       </div>
 <!-- ITEMS -->
    <div class="flex space-x-10">
    <div>
   
      <div><span class="text-blue-800 font-semibold mx-1">{{fname }}</span><span class="text-blue-900 font-bold">{{ lname ? lname.charAt(0) : '' }}</span></div>

    <!-- <div>{{avgStars}}/5<span class="ml-1">of<span>(</span>{{numberOftimeRated }}<span>)</span></span></div> -->
    <div class="flex items-center space-x-1">
    <template v-for="i in 5"  key="i">
      <Icon
        icon="ic:baseline-star"
        :class="{ 'text-yellow-500': i <= avgStars }"
        class="w-4 h-4"
       
      />
    </template>
    <span class="ml-1">of ({{ numberOftimeRated }})</span>
  </div>

    
    <div>{{ CompletionPercentage }}<span class="mr-1">%</span>Completion rate</div>
</div>

<div class="py-1 px-2">

</div>
   
    </div>
   
    </div>

    <div class="text-center text-2xl">Bidded Amount: ${{name}}</div>
    <!-- MESSAGE -->
    <div class="p-3">
    <div class="bg-gray-200 rounded py-2 px-3 text-center">
        {{ message }}
    </div>
    
    <div class="py-1 px-2 flex justify-between m-1">
      <p class="text-blue-900 text-center font-semibold border rounded py-1 px-2 mt-4">posted {{ minutesAgo }}</p>
<div>
  <button 
class="bg-green-600 text-white py-1 px-3 rounded-lg items-center flex "

@click="reply()" >

<p>Reply</p>
</button>
</div>


        <div>
        <button 
        class="bg-green-600 text-white py-1 px-3 rounded-lg items-center flex "
        @click="Employ()"
          ><p>employ</p>
        </button>
        </div>


</div>

    </div>
    <div class="bg-gray-200">
      <RouterView />
    </div>
    </div>


    </template>


    <script setup>
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Icon } from "@iconify/vue";
import { useRoute, useRouter } from 'vue-router';
import { RouterView } from "vue-router";
const route = useRoute();
const router = useRouter();
const Id = route.params.id;
;

const props = defineProps({
  name: String,
  fname: String,
  lname: String,
  message: String,
  taskerId: String,
  taskId: String,
  avgStars:{
    type: Number,
    validator: (value) => {
      // Return true if value is a valid integer, otherwise false
      return Number.isInteger(parseInt(value));
    },
  },
  amount:{
    type: Number,
    validator: (value) => {
      // Return true if value is a valid integer, otherwise false
      return Number.isInteger(parseInt(value));
    },
  },

  totalStars:{
    type: Number,
    validator: (value) => {
      // Return true if value is a valid integer, otherwise false
      return Number.isInteger(parseInt(value));
    },
  },
  numberOftimeRated:{
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

const tasker_id = props.taskerId;
const task_id = props.taskId;

const Employ = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You want to employ this tasker!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, I want to employ!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Proceed to the payment page to complete employment process',
        'Your money will be on hold untill the tasker completes the task.',
        'warning'
      ).then(() => {
        router.push(`/client/task/${Id}/pay?tasker_id=${tasker_id}`);

      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled succesfully',
        'You have succesfully cancelled the operation.',
        'error'
      );
    }
  });


};



const reply = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You want to open private chat with tasker!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'ok',
    cancelButtonText: 'cancel',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  }).then((result) => {
    if (result.isConfirmed) {
      router.push(`/client/task/${task_id}/offer/${Id}/chats`)
    }
  });
};


</script>
