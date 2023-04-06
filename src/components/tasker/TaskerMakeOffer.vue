<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";
import Nav from "../Nav.vue";
import { useRoute, useRouter } from 'vue-router';
const authStore = useAuthStore();
const route = useRoute();

const Id = route.params.id;

const form = ref({
  title: "",
  task_id: Id,
});

console.log(Id);

</script>
<template>

  <div class=" col-span-9">
    <!-- ====== Forms Section Start -->
    <section class="bg-[#F4F7FF] py-5 lg:py-[12px]">
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
 
            <div class="mb-10 text-center md:mb-16 text-2xl text-blue-900">Tell the client why you are the best fit for this job</div>
           
            <form @submit.prevent="authStore.offer(form)">
              <p>For your safety, do not share your personal information . eg email, phone or address</p>
              <div class="mb-6 mt-3">
          <p>Enter your bid amount</p>
          
            <input
              type="number"
              required
              placeholder="amount"
              v-model="form.amount"
              class="
                bordder-[#E9EDF4]
                w-full
                rounded-md
                border
                bg-[#FCFDFE]
                py-1
                px-5
                text-base text-body-color
                placeholder-[#ACB6BE]
                outline-none
                focus:border-primary
                focus-visible:shadow-none
              "
            />
          </div>
        
              <div class="mb-6">


                <textarea
                  type="text"
                  required
                  placeholder="description goes here"
                  v-model="form.title"
                  class="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-1
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                />
              </div>
            
              <div class="mb-10">
                <button
                  type="submit"
                  class="
                    w-full
                    px-4
                    py-1
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                >
                <div v-if="authStore.isLoading" >
                <v-progress-circular indeterminate color="amber"></v-progress-circular>
                </div>
                <div v-else>Submit your Bid</div>
                </button>
              </div>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>



</template>