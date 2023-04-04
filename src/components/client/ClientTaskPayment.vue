<template>
  <div class="container mx-auto">
    <form class="max-w-md mx-auto bg-white p-8 my-10 rounded-lg shadow-lg border" @submit.prevent="submitTask">

<p>You  are about to pay $25 for the task and a fee of $20</p>
<p>Your money will be on hold untill the tasker completes the task. </p>
    

      <!-- CARD INFORMATION -->

      <div class="my-10 rounded-md border border-gray-300 p-4" ref="cardWrapper">
  <div ref="card" id="card"></div>
</div>
      <button type="submit" :disabled="isSubmitting" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"> 
        
      <div class="flex space-x-1">
      <p>pay</p>
      <span>$45</span>
      <p>for the task</p>
      </div>
      </button>
      <div v-if="isSubmitting" class="mt-2">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">wait...</span>
      </div>
    </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { reactive, toRefs } from 'vue';
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();
const userAuthId = authStore.user.id;
const task = ref({});
const categories = reactive([]);
const tasks = reactive([]);
const showCheckboxes = ref(false);
    let stripe = Stripe(`pk_test_51MptVhBQovItJ3xem1WVQAsYny0SKYmYJBrSU3QPn33MwZmrYChJBZm7tqmX7Xx43AAxCgcmrAco0iuZKTX53cS800t2QmFabq`),
    elements = stripe.elements(),
    card = undefined;
const route = useRoute();
const router = useRouter();
const title = ref('');
const description = ref('');
const price = ref('');
const isSubmitting = ref(false);
const submitTask = () => {
  isSubmitting.value = true;
  stripe.createToken(card).then(function(result) {
    const stripe_token = result.token.id;
    const { taskId } = route.params;
    
    const clientId = userAuthId;
    const amount = 1000; // replace with your student ID
    const tasker_id = 2; // replace with your student ID
   
    axios.post('http://localhost:8000/api/client-pay-task', {
      stripe_token,
      tasker_id,
      amount: amount,
      task_id: taskId,
      client_id: clientId,
     
    }).then(function(response) {
      console.log(response.data);
      console.log("dfghjukilkjghfdghjkdf")
      // reset the form fields and card element
      title.value = '';
      description.value = '';
      price.value = '';
         
      card.clear();
      isSubmitting.value = false;
      const router = useRouter();
      // window.location.href = '/client-active-task';
    }).catch(function(error) {
      console.log(error);
      isSubmitting.value = false;
    });
  });
};
const mounted = () => {
  if (!card) {
    card = elements.create('card');
    card.mount(document.querySelector('#card'));
  }
};
const cardRef = ref(null);
onMounted(mounted);
</script>