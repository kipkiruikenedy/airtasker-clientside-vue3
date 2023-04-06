<script setup>
import ClientOfferCard from './ClientOfferCard.vue';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { reactive, toRefs } from 'vue'
import axios from 'axios'
import { Icon } from "@iconify/vue";

const route = useRoute();
const router = useRouter();

const taskId = route.params.id;
const params = new URLSearchParams([['task_id', taskId ]]);

const state = reactive({
  categories: [],
  offers: []
});

function formatDate(date) {
  const now = new Date();
  const timeDiff = (now.getTime() - new Date(date).getTime()) / 1000; // in seconds
  if (timeDiff < 60) {
    return 'now';
  } else if (timeDiff < 3600) {
    const minutes = Math.floor(timeDiff / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (timeDiff < 86400) {
    const hours = Math.floor(timeDiff / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(timeDiff / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}

axios.get('http://127.0.0.1:8000/api/client/task-offer',{params} )
  .then(response => {
    state.offers.push(...response.data.map(offer => ({
      ...offer,
      created_at: formatDate(offer.created_at)
    })));
  });


</script>

<template>

  <div v-for="offer in state.offers" class="m-2 space-y-5 " >
    <ClientOfferCard
      :key="offer.id" 
      :name="offer.tasker_id" 
      :CompletionPercentage="offer.status" 
      :message="offer.content" 
      :minutesAgo="offer.created_at" 
      :taskerId="offer.tasker_id"
      :taskId=taskId
    />
  </div>
</template>
