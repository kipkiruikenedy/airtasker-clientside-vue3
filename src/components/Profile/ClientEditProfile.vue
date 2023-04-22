<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";
import Nav from "../Nav.vue";
import TaskerNav from "../tasker/TaskerNav.vue";
const authStore = useAuthStore();

const form = ref({
  first_name: authStore.first_name || "",
  last_name: authStore.last_name || "",
  phone_number: authStore.phone_number || "",
  country: authStore.country || "",
  gender: authStore.gender || "",
  email: authStore.email || "",
  email:  "",
  profile_picture: null,
});



const handleProfilePictureChange = (event) => {
  const file = event.target.files[0];
  form.value.profile_picture = file;
};

</script>
<template>
  <TaskerNav/>
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
            <div class="mb-10 text-center md:mb-16">Edit Your Details </div>
           
            <form @submit.prevent="authStore.handleUpdateClient(form)">
              <div class="mb-6">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  v-model="form.first_name"
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
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  v-model="form.last_name"
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
                <input
                  type="number"
                  required
                  placeholder="Phone Number"
                  v-model="form.phone_number"
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
              <div class="mb-4 flex">
      <label for="gender" class="block text-gray-700 font-bold mb-2">Gender:</label>
      <select id="gender" v-model="form.gender" class="bg-gray-300 text-center ml-4 py-1 px-2 rounded-md">
        <option value="">Select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Country"
                  v-model="form.country"
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
                <input
                  type="email"
                  placeholder="Email"
                  v-model="form.email"
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
                <!-- <div v-if="authStore.errors.email" class="flex">
                  <span class="text-red-400 text-sm m-2 p-2">{{
                    authStore.errors.email[0]
                  }}</span>
                </div> -->
              </div>

              <div class="mb-6">
  <label for="profile-picture" class="block text-gray-700 font-bold mb-2">
    Profile Picture:
  </label>
  <input
    id="profile-picture"
    type="file"
    accept="image/*"
    @change="handleProfilePictureChange"
    class="border-gray-400 p-2 border rounded-lg w-full"
  />
  <!-- <div v-if="authStore.errors.profile_picture" class="flex">
    <span class="text-red-400 text-sm m-2 p-2">{{
      authStore.errors.profile_picture[0]
    }}</span>
  </div> -->
</div>

<div class="mb-6">
  <label for="profile-picture" class="block text-gray-700 font-bold mb-2">
   Payment Details
  </label>
  <span class="text-gray-400 font-light">(This is where you will receive payment into after completing task)</span>
                <input
                type="number"
                  placeholder="4242 4242 4242 4242 4242"
                  v-model="form.card_number"
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
                <!-- <div v-if="authStore.errors.email" class="flex">
                  <span class="text-red-400 text-sm m-2 p-2">{{
                    authStore.errors.email[0]
                  }}</span>
                </div> -->
              </div>

           
              <div class="mb-10">
                <button
                  type="submit"
                  class="
                    w-full
                    px-4
                    py-3
                    bg-green-500
                    hover:bg-green-700
                    rounded-md
                    text-white
                  "
                >
                <div v-if="authStore.isLoading" >
                <v-progress-circular indeterminate color="amber"></v-progress-circular>
                </div>
                <div v-else><p class="text-white">Update</p></div>
                </button>
              </div>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  </section>
</template>