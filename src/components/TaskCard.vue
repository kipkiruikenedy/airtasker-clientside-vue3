<template>
  <div class="p-6 bg-white rounded-lg  shadow-xl shadow-slate-900 cursor-pointer hover:scale-105  hover:ease-in-out m-4">
    <div class="flex space-x-8">
      <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
      <h2 class="font-bold"><span>$</span>{{ amount }}</h2>
    </div>

    <div class="flex justify-between flex-col text-gray-500 text-sm space-y-2">
      <div class="flex space-x-2">
        <Icon icon="ic:outline-location-on" />
        <p>{{ location }}</p>
      </div>
      <div class="flex space-x-2">
        <Icon icon="ic:baseline-calendar-month" />
        <p>{{ date }}</p>
      </div>
      <div class="flex space-x-2">
        <Icon icon="ic:baseline-access-time-filled" />
        <p>{{ time}}</p>
      </div>
    </div>
    <div class="flex justify-between">
      <p class=" text-blue-900 rounded font-semibold">{{ status }}</p>
      <p class="mb-2">{{ offers }}</p>
      <v-avatar>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/6VnchrGZSnO8xyvO7uT7PC/811d0fd7d53c07ad055adbd761f205c8/shutterstock_1919883236__1_.jpg?fit=fill&w=480&h=270&fm=webp" />
      </v-avatar>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Icon } from "@iconify/vue";
const props = defineProps({
  title: String,
  location: String,
  offers: String,
  date: String,
  status: String,
  time: String,
  amount: {
    type: Number,
    validator: (value) => {
      // Return true if value is a valid integer, otherwise false
      return Number.isInteger(parseInt(value));
    },
  },
});
</script>

<style>
.card {
  max-width: 400px;
}
</style>
