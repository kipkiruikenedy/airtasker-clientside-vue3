
<script setup>

import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { reactive } from 'vue';
import { Icon } from "@iconify/vue";
import ClientOfferCard from '../offers/ClientOfferCard.vue';
import ClientSideBar from '../partials/ClientSideBar.vue';
import ClientNav from '../partials/ClientNav.vue';

const route = useRoute();
const router = useRouter();


const tasks =  reactive([]);
const offers = reactive([]);
const { id } = route.params;


axios.get('http://127.0.0.1:8000/api/all-tasks')
  .then(response => {
    tasks.push(...response.data);
    
  });
  


  
  // task =  items.find(t => t.id === parseInt(id));

 


  const taskId=id;
 
   const params = new URLSearchParams([['task_id', taskId]]);
    axios.get('http://127.0.0.1:8000/api/client/task-offer',{params} )
    .then(response => {
      offers.push(...response.data);
  
    });
    console.log(offers)
</script>

<template>
  <ClientNav />
<div class="grid grid-cols-12">
<!-- SIDEBAR -->
<div class="bg-red-100 col-span-2">
<ClientSideBar/>
</div>
<!-- TASK DETAILS -->
<div class=" col-span-10">
<div class="bg-white">
<p>title</p>
<button @click="router.push(`/client/task/${id}/offer`)">View Offers for this task</button>
</div>

<!-- oFFERS -->
<div class="flex">
     <RouterView />
</div>
</div>



</div>

</template>


