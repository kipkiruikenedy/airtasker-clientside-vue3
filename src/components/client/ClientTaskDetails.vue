<script setup>
import { useRoute, useRouter, RouterView } from 'vue-router';
import { onMounted, ref, reactive } from 'vue';
import axios from 'axios';
import { Icon } from "@iconify/vue";
import ClientOfferCard from './offers/ClientOfferCard.vue';
import ClientSideBar from './partials/ClientSideBar.vue';
import ClientNav from './partials/ClientNav.vue';

const route = useRoute();
const router = useRouter();

const tasks = reactive([]);
const { id } = route.params;
const taskId = parseInt(id);



axios.get(`http://localhost:8000/api/tasks/${taskId}`)
  .then(response => {
    tasks.push(response.data);
  });

</script>

<template>
  <div>
    <ClientNav />
    <div class="grid grid-cols-12">
      <!-- SIDEBAR -->
      <div class="bg-red-100 col-span-2">
        <ClientSideBar />
      </div>
     
      <div class=" col-span-10">

 <!-- TASK DETAILS -->
        <div class="bg-white col-span-">
          <p>title</p>
        
        </div>

        <!-- OFFERS -->
        <div >
        
          <RouterView />

        </div>
      
      
      </div>
    </div>
  </div>
</template>
