<script setup>
import { ref, reactive, toRefs } from "vue";
import { useAuthStore } from "../../stores/auth";
import { useRoute, useRouter } from 'vue-router';
import Nav from "../Nav.vue";
import ClientNav from "./partials/ClientNav.vue";
import ClientSidebar from "./partials/ClientSideBar.vue";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios'
const route = useRoute();
const router = useRouter();
const Id=route.params.id;
const authStore = useAuthStore();


// const task = reactive({});


const task = ref({
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


  axios.get(`http://127.0.0.1:8000/api/tasks/${Id}`)
  .then(response => {
    task.title = response.data.title;
    task.description = response.data.description;
    task.deadline = response.data.deadline;
    task.created_at = response.data.created_at;
    task.amount = response.data.amount;
    task.status = response.data.status;
    task.client_id = response.data.client_id;
    task.tasker_id = response.data.tasker_id;
  })
  .catch(error => {
    console.error(error);
  });
console.log(task.title)
</script>
















<template>
  
  <div class="grid grid-cols-12 z-0">
 
  <div class=" col-span-12">
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
            <div class="mb-10 text-center md:mb-16 text-2xl text-blue-900">Edit task details</div>
           
            <form @submit.prevent="authStore.handleTaskUpdate(form)">
              <div class="mb-6">
              <p>Title of your task. Give a brief title</p>
                <input
                  type="text"
                  required
                  v-model="task.title"
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
                  v-model="task.description"
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
                  <span class="text-red-400 text-sm m-2 p-2">
                  {{authStore.errors.name[0]}}
                  </span>
                </div> -->
              </div>
         
      
            
              <div class="mb-4 flex mt-3">
      <label for="category" class="block text-gray-700 font-bold mb-2">Task Category:</label>
      <select id="category" v-model="task.job_category_name" class="bg-gray-300 text-center ml-4 py-1 px-2 rounded-md" required>
  <option value="">Select a category</option>
  <option v-for="category in categories" :value="category.id">{{ category.job_category_name }}</option>
</select>

    </div>
              <div class="mb-6 mt-4">
           <p>What is your Budget in USD for this task?</p>
                <input
                  type="number"
                  placeholder="$1200"
                  v-model="task.amount"
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
<input type="date" id="birthday" name="birthday"  v-model="task.deadline">
              </div>
              </div>


              <div class="mb-6">
              <p class="text-blue-800">Deadline Time</p>
              <div class="p-5">     
              
<input type="time" id="picker" name="picker" v-model="task.time">
              </div>
              </div>


              <div class="mb-10">
                <button
                  type="submit"
                  class="
                    w-full
                    px-4
                    py-3
                    bg-green-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                >
                <div v-if="authStore.isLoading" >
                <v-progress-circular indeterminate color="amber"></v-progress-circular>
                </div>
                <div v-else>Update Task</div>
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