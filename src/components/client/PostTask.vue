<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";
import Nav from "../Nav.vue";
import ClientNav from "./partials/ClientNav.vue";
import ClientSidebar from "./partials/ClientSideBar.vue";
import axios from 'axios'
import { reactive, toRefs } from 'vue'
const authStore = useAuthStore();


const form = ref({
  title: "",
  description: "",
  amount: "",
  job_category_name: "",
  deadline: "",
  time: "",

});

const categories = reactive([]);

axios.get('http://127.0.0.1:8000/api/categories')
  .then(response => {
    categories.push(...response.data);

  });
</script>
<template>
  <ClientNav/>
  <div class="grid grid-cols-12 z-0">
  <div class=" col-span-3 ">
  <ClientSidebar />
  </div>
  <div class=" col-span-9">
    <!-- ====== Forms Section Start -->
    <section class="bg-[#F4F7FF] py-20 lg:py-[120px]">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div
            class="
              relative
              mx-auto
              max-w-[525px]
              overflow-hidden
              rounded-lg
              bg-white
              py-16
              px-10
              text-center
              sm:px-12
              md:px-[60px]
            "
          >
          <div class="bg-red-500 text-center rounded-lg py-1 text-white mb-3" v-if="authStore.authError" >{{authStore.authError }}</div>
            <div class="mb-10 text-center md:mb-16 text-2xl text-blue-900">Post a Task and get a Tasker do the work for you</div>
           
            <form @submit.prevent="authStore.handleTaskCreate(form)">
              <div class="mb-6">
              <p>Title of your task. Give a brief title</p>
                <input
                  type="text"
                  required
                  placeholder="e.g I need a wordpress website"
                  v-model="form.title"
                  class="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                />
                <!-- <div v-if="authStore.errors.name" class="flex">
                  <span class="text-red-400 text-sm m-2 p-2">{{
                    authStore.errors.name[0]
                  }}</span>
                </div> -->
              </div>
            
              <div class="mb-6">
              <p>Tell us more about your project</p>
                <textarea
                  type="text"
                  required
                  placeholder="descripe your task fully to help the tasker understand the task fully"
                  v-model="form.description"
                  class="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-5
                    px-8
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                />
                <!-- <div v-if="authStore.errors.name" class="flex">
                  <span class="text-red-400 text-sm m-2 p-2">{{
                    authStore.errors.name[0]
                  }}</span>
                </div> -->
              </div>
         
      
            
              <div class="mb-4 flex mt-3">
      <label for="category" class="block text-gray-700 font-bold mb-2">Task Category:</label>
      <select id="category" v-model="form.job_category_name" class="bg-gray-300 text-center ml-4 py-1 px-2 rounded-md" required>
  <option value="">Select a category</option>
  <option v-for="category in categories" :value="category.id">{{ category.job_category_name }}</option>
</select>

    </div>
              <div class="mb-6 mt-4">
           <p>What is your Budget in USD for this task?</p>
                <input
                  type="number"
                  placeholder="$1200"
                  v-model="form.amount"
                  class="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                />
                <!-- <div v-if="authStore.errors.password" class="flex">
                  <span class="text-red-400 text-sm m-2 p-2">{{
                    authStore.errors.password[0]
                  }}</span>
                </div> -->
              </div>

              <div class="mb-6">
              <p class="text-blue-800">Deadline of the task</p>
              <div>     
<input type="date" id="birthday" name="birthday"  v-model="form.deadline">
              </div>
              </div>


              <div class="mb-6">
              <p class="text-blue-800">Deadline Time</p>
              <div class="p-5">     
              
<input type="time" id="picker" name="picker" v-model="form.time">
              </div>
              </div>


              <div class="mb-10">
                <button
                  type="submit"
                  class="
                    w-full
                    px-4
                    py-3
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                >
                <div v-if="authStore.isLoading" >
                <v-progress-circular indeterminate color="amber"></v-progress-circular>
                </div>
                <div v-else>Submit Task</div>
                </button>
              </div>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>

  </div>

</template>