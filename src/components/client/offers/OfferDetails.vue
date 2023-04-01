<template>
  <div>details
    <button class="bg-blue-600 text-white py-1 px-3 rounded-full items-center flex "
    @click="router.push(`/task/offer/${task.id}`)"
          ><p>Employ tasker</p>
        </button>
  </div>
    <!-- payment -->
    <div >
        
        <RouterView />

      </div>
</template>

<script setup>

import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { reactive, toRefs } from 'vue'
import axios from 'axios'
import { Icon } from "@iconify/vue";
import { computed } from 'vue'

const route = useRoute();
const router = useRouter();

const taskId =route.params.taskId
const offerId = computed(() => parseInt(route.params.offerId))
console.log(taskId)
function handleEmployTaskerClick() {
  router.push({
    name: 'pay',
    params: {
      taskId: taskId.value,
      offerId: offerId.value,
    },
  })
}
</script>