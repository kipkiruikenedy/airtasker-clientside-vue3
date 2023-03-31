<template>
   <p>{{authStore.user.id}}</p>
</template>

<script setup>

import { useAuthStore } from "../../stores/auth";
import { ref } from 'vue';

const authStore = useAuthStore();
console.log(authStore.user.id)
const showMenu = ref(false);
</script>