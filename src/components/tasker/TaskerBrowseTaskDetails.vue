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
      @click="router.push(`/tasker-browse-task/${task.id}/make-offer`)"
          ><p class="px-8">Bid</p>
        </button>
     </div>
     
      </div>

      <!-- TIME -->
      <div class="m-5">
      <p>posted 6 minutes ago</p>
      </div>

      </div>
      <div>
        
      </div>
    </div>

    <!--Make OFFER -->
   <div>
    <RouterView/>
   </div>


    </div>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';
import { RouterView } from "vue-router";
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { Icon } from "@iconify/vue";
import TaskerNav from './TaskerNav.vue';
import { useAuthStore } from '../../stores/auth'
const authStore = useAuthStore()
const tasks = ref([]);

const form = ref({
  title: "",
});

const route = useRoute();
const router = useRouter();

const task = ref({});

async function fetchData() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/all-tasks');
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