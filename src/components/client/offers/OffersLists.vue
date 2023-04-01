<script setup>
import ClientOfferCard from './ClientOfferCard.vue';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { reactive, toRefs } from 'vue'
import axios from 'axios'
import { Icon } from "@iconify/vue";


const route = useRoute();
const router = useRouter();

const { taskId } = route.params;
 
   const params = new URLSearchParams([['task_id', taskId]]);

const categories = reactive([]);
const offers = reactive([]);
axios.get('http://127.0.0.1:8000/api/client/task-offer',{params} )
  .then(response => {
    offers.push(...response.data);

  });
</script>

<template>
 <div v-for="offer in offers" class="m-2 space-y-5 " >
<ClientOfferCard
 :key="offer.id" 
 :name="offer.title" 

 :CompletionPercentage="offer.status" 
 :message="offer.amount" 
 :minutesAgo="offer.amount" 
 />
</div>
</template>