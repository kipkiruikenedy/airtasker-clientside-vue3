<template>
  <div class="my-8">
    <div class="mb-4">     <p>huihui</p>
      <button class="bg-green-600 text-white py-1 px-3 rounded-lg items-center flex"
              @click="handleEmployTaskerClick()">
        <p>Employ tasker</p>
      </button>
    </div>
    <div class="flex items-center justify-center bg-gray-100 p-4">
      <router-view />
    </div>
  </div>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { onMounted, ref, reactive } from 'vue';
  import axios from 'axios';
  import { Icon } from "@iconify/vue";
  import { computed } from 'vue';

  const route = useRoute();
  const router = useRouter();
  
  const taskId = ref(route.params.taskId);
  const offerId = computed(() => parseInt(route.params.offerId));

  function handleEmployTaskerClick() {
    router.push({
      name: 'pay',
      params: {
        taskId: taskId.value,
        offerId: offerId.value,
      },
    });
  }

  const id = ref(route.params.id);

  const offer = reactive({
    content: ''
  });

  onMounted(() => {
    axios.get(`http://localhost:8000/api/offers/${id.value}`)
      .then(response => {
        offer.content = response.data;
        console.log(offer.content);
      })
      .catch(error => {
        console.error(error);
      });
  });

  // Do not include an export statement here

</script>

<script>
  // Use a separate script block for any non-setup code (if needed)
  export default {
    setup() {
      return {
        offer
      }
    }
  };
</script>
