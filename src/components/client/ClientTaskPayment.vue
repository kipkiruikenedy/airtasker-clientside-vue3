<template>
  <div class="container mx-auto">
    <form class="max-w-md mx-auto bg-white p-8 my-10 rounded-lg shadow-lg border" @submit.prevent="submitTask">

<p class="text-red-900">You  are about to pay <span class="font-semibold">${{ task.amount}}</span> for the task and a fee of <span class="font-semibold">${{ task.fees }}</span>  . Total=<span class="font-semibold">${{ task.amountPayable  }}</span> </p>
<p>Your money will be on hold untill the tasker completes the task. </p>
    

      <!-- CARD INFORMATION -->

      <div class="my-10 rounded-md border border-gray-300 p-4" ref="cardWrapper">
  <div ref="card" id="card"></div>
</div>
      <button type="submit" :disabled="isSubmitting" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"> 
        
      <div class="flex space-x-1">
      <p>pay</p>
      <span class="font-semibold">${{ task.amountPayable }}</span>
      <p>for the task</p>
      </div>
      </button>
      <div v-if="isSubmitting" class="mt-2">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden"> please wait...</span>
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
import 'sweetalert2/dist/sweetalert2.min.css';
import { reactive, toRefs } from 'vue';
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();
const userAuthId = authStore.user.id;

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
const Id = route.params.id;
const task = reactive({
  amount: null,
  fees: null,
  amountPayable: null,
});



const taskerId = route.query.tasker_id;

  axios.get(`/api/tasks/${Id}`)
    .then(response => {
      task.amount = response.data.amount;
      task.amountPayable = response.data.amountPayable;
      task.tasker_id= response.data.tasker_id;
      task.client_id= response.data.client_id;
      task.fees= response.data.fees;
    console.log( task.fees)
    })
    .catch(error => {
      console.error(error);
    });

const submitTask = () => {


  isSubmitting.value = true;
  stripe.createToken(card).then(function(result) {
    const stripe_token = result.token.id;
    const Id = route.params.id;
    const clientId = userAuthId;
    const task_id = Id;
    const tasker_id = taskerId;
    const amount = task.amountPayable;
   

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit payment!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('/api/client-pay-task', {
          stripe_token,
          amount,
          tasker_id,
          task_id,
          client_id: clientId,
        
        }).then(function(response) {
          console.log(response.data);
          title.value = '';
          description.value = '';
          price.value = '';
          Swal.fire({
            icon: '',
            title: 'Congratulations! You payment have succesfully been submitted',
            text: 'Your money will be on hold untill the tasker completes the task!',
            footer: '<a href="">Want to read more about payment?</a>'
          });
          card.clear();
          isSubmitting.value = false;
          const router = useRouter();
          router.push("/client-active-task");
          // window.location.href = '/client-active-task';
        }).catch(function(error) {
          console.log(error);
          isSubmitting.value = false;
        });
      }
    })
  });
};



const mounted = () => {
  if (!card) {
    card = elements.create('card', {
      style: {
        base: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        },
        postalCode: {
          display: 'none'
        }
      }
    });
    card.mount(document.querySelector('#card'));
  }
};
const cardRef = ref(null);
onMounted(mounted);
</script>