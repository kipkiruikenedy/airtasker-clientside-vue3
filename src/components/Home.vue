<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../stores/auth";
import SideBar from "./admin/AdminSideBar.vue";
import { Icon } from "@iconify/vue";
import Nav from "../components/Nav.vue";
const authStore = useAuthStore();


</script>
<template>
  <Nav />
  <div class="max-w-7xl mx-auto px-5">
  
    <div >
      <div
        class="min-h-screen bg-gray-200 rounded-md flex flex-col-reverse md:flex-row justify-between"
      >
        <!-- LEFT -->
        <div class="flex flex-col justify-between">
          <div class="flex items-center flex-col justify-center">
            <p class="text-blue-900 text-4xl md:text-8xl">GET MORE</p>
            <p class="text-blue-900 text-4xl md:text-8xl">DONE</p>
          </div>
          <!-- BOTTOM -->
          <div class="mb-15 space-y-4 flex flex-col md:flex-row">
            <div class="flex flex-col">
              <p>Post any task. Pick the best person. Get it done.</p>

              <div class="flex flex-col md:flex-row space-y-3 mb-5 p-4 md:space-x-3">
                <butto
                  class="bg-blue-600 text-white py-2 px-4 rounded-full flex items-center"
                >
                  <p>Post your task for free</p>
                  <Icon icon="mdi:arrow-right" />
                </butto>
                <butto class="bg-blue-900 text-white py-2 px-4 rounded-full"
                  >Earn money as a tasker
                </butto>
              </div>
              <div class="flex justify-center space-x-3">
                <p class="flex space-x-2 items-center">
                  <Icon icon="mdi:account-group"></Icon><span>1M+ Customers</span>
                </p>
                <p class="hidden md:block">Completed tasks</p>
                <p class="hidden md:block">Reviews</p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div>
          <img src="../assets/images/img1.jpg" class="rounded-lg" alt="image" />
        </div>
      </div>
      <div>
        <p class="text-5xl text-blue-900 font-semibold">
          Post your first task in seconds
        </p>
        <p class="text-blue-900 font-medium text-2xl">
          Save yourself hours and get your to-do list completed
        </p>
        <div class="ml-10">
          <p class="text-blue-900">1 Describe what you need done</p>
          <p class="text-blue-900">2 Set your budget</p>
          <p class="mb-2">3 Receive quotes and pick the best Tasker</p>
        </div>

        <button class="bg-blue-600 text-white py-2 px-2 rounded-full items-center flex"
          ><p>Post your task</p>
          <Icon icon="mdi:arrow-right"
        /></button>
      </div>

      <!-- CARD -->
      <div class="flex justify-between p-6">
        <div>
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/4nxjScQk75U0xwd2c0aJDl/edb2b5976ca93c4141c31a0c37367cec/shutterstock_1118421353__3_.jpg?fit=fill&w=480&h=270&fm=webp"
            alt="image"
            class="rounded-lg h-[100px]"
          />
        </div>
        <div>
          <p class="text-blue-900 text-2xl">Title</p>
          <p class="text-blue-900">Description</p>
        </div>
      </div>
      <p class="text-blue-900 flex items-center space-x-1 mb-6">
        Learn how Airtasker works <Icon icon="mdi:arrow-right" />
      </p>

      <!-- WHAT OTHERS ARE SAYING -->
      <div>
        <p class="text-5xl text-blue-900 font-semibold">
          See what others are getting done
        </p>
        <div
          class="flex flex-col md:flex-row space-y-2 md:space-x-3 items-start md:items-center pl-4"
        >
          <p>Moving In</p>
          <p>Home Maintenance</p>
          <p>Starting a bussiness</p>
          <p>Parties</p>
          <p>Something different</p>
        </div>
      </div>
      <!-- WHAT OTHERS ARE SAYING ends-->
    </div>
  </div>
</template>
