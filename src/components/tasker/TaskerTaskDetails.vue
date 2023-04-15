


<template>
  <div class="flex justify-between m-2"><p>Tasker Pro</p><TaskerNav /></div>
    <div class="bg-gray-200 col-span-8">
    <div class="flex space-x-4 p-3">
      <div class="w-3/5 bg-white">
      <!-- ROW1 -->
      <div class="flex space-x-3 p-2">
      <div class="bg-green-200 rounded-full py-1 px-2">OPEN</div>
     
      </div>

<!-- ROW2 -->
      <div class="text-4xl text-blue-900 font-semibold">title</div>
      <!-- ROW4 -->
      <div class="space-y-4">
      <div class="space-y-1">
      <div class="flex space-x-1">
      <div> <Icon icon="ic:twotone-location-on" /></div>
      <div> <p>Posted By</p><p>John</p></div>
      </div>
      </div>

      <div class="space-y-1">
      <div class="flex space-x-1">
      <div> <Icon icon="ic:twotone-location-on" />location here</div>
      <div> <p>LOCATION</p><p>{{ }}</p></div>
      </div>
      </div>


      <div class="space-y-1">
      <div class="flex space-x-1">
      <div> <Icon icon="ic:twotone-location-on" /></div>
      <div> <p>TO BE DONE ON</p><p>date here</p></div>
      </div>
      </div>

     
      </div>
      <!-- ROW4 -->
      <div class="p-2 space-x-2">
      <div class="text-blue-800 text-2xl">Details</div>
      <div class="text-blue-900">details here</div>
      <div class="flex space-x-2"><p>Due date:</p><p>flexible</p></div>
      </div>

      </div>

      <!-- RIGHT -->
      <div class="w-2/5 bg-white">
      <div class="bg-gray-200 rounded-lg m-8">
      <div class="p-3">
      <p class="text-center text-gray-700 mt-4">TASK BUDGET</p>
      <h1 class="text-center text-4xl font-semibold text-blue-900 mt-4">$45</h1>
      </div>
      <!-- BUTTON -->
     <div class="ml-6 mt-5 mb-3 pb-3">
      <button class="bg-blue-600 text-white py-2 px-2 rounded-full items-center flex "
      @click="router.push(`/tasker/task/${task.id}/make-offer`)"
          ><p>Make an Offer</p>
        </button>
     </div>
     
      </div>

      <!-- TIME -->
      <div class="m-5">
      <p>posted 6 minutes ago</p>
      </div>

      </div>
    </div>

    <!-- OFFERS -->
   <div>
   <!-- TOP -->
   <h1 class="text-center">OFFERS</h1>
   <div class="flex space-x-2">
  
    <div class=" justify-center pt-4 pl-7">
        <v-avatar  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxVEw9MRh_vuujq_zWCppZySLY0aEH7HrM9gr9EHa&s"></v-avatar>
      </div>
<!-- ITEMS -->
   <div>
   <div>kenedy k.</div>
   <div>5 star</div>
   <div>98% Completion rate</div>
   </div>
   </div>
   <!-- MESSAGE -->
   <div class="p-3">
   <p>
    Hi Gautam,

Small pressure washing business
 trying to start up and would love to gain some work completing this 
task for you. I have all the correct commercial grade equipment and 
would love to show what I can do. 
Readily available!

Kind regards,
Aaron
   </p>
   <p class="text-gray-900 text-center">35 minutes ago</p>
   </div>
   </div>


    </div>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { Icon } from "@iconify/vue";
import TaskerNav from './TaskerNav.vue';

const tasks = ref([]);

const route = useRoute();
const router = useRouter();

const task = ref({});

async function fetchData() {
  try {
    const response = await axios.get('https://server.airtaska.com/public/api/all-tasks');
    tasks.value.push(...response.data);

    const { id } = route.params;
    await router.isReady(); // wait for router to be ready
    task.value = tasks.value.find(t => t.id === parseInt(id));
  } catch (error) {
    console.error(error);
  }
}

onMounted(fetchData);

</script>