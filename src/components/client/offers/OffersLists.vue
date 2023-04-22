<script setup>
import ClientOfferCard from './ClientOfferCard.vue';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { reactive, toRefs } from 'vue'
import axios from 'axios'
import { Icon } from "@iconify/vue";

const route = useRoute();
const router = useRouter();

const totalStars = ref(0);
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

axios.get('/api/client/task-offer',{params} )
  .then(response => {
    state.offers.push(...response.data.map(offer => ({
      ...offer,
      created_at: formatDate(offer.created_at),
      tasker: null // initialize tasker property to null
    })));

    // extract tasker_id from the first offer in the response and save it in a separate variable
    const taskerId = response.data[0].tasker_id;

    // make another API call to fetch the star rating for the tasker with taskerId
    axios.get(`/api/ratings/${taskerId}`)
      .then(response => {
        const rating = response.data;
        state.offers[0].rating = rating;
      })
      .catch(error => {
        console.log(error);
      });

    // make another API call to fetch the user details for the tasker with taskerId
    axios.get(`/api/users/${taskerId}`)
      .then(response => {
        const tasker = response.data;
        // find the offer object with matching tasker_id and update it with tasker details
        state.offers.find(offer => offer.tasker_id === taskerId).tasker = tasker;
      })
      .catch(error => {
        console.log(error);
      });
  });

</script>

<template>
  <div v-for="offer in state.offers" class="m-2 space-y-5 " >
    <ClientOfferCard
      :key="offer.id" 
      :name="offer.price" 
      :CompletionPercentage="offer.status" 
      :message="offer.content" 
      :minutesAgo="offer.created_at" 
      :taskerId="offer.tasker_id"
      :priceAmount="offer.price"
      :avgStars="offer.rating ? offer.rating.average_rating : null"
      :numberOftimeRated="offer.rating ? offer.rating.times_rated : null"
      :totalStars="offer.rating ? offer.rating.total_stars : null"
      :fname="offer.tasker ? offer.tasker.first_name : null"
      :lname="offer.tasker ? offer.tasker.last_name : null"
    />
  </div>
</template>
