<template>
  <div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
    <!-- SIDEBAR -->
    <div class="bg-red-500 col-span-2">
      <AdminSideBar />
    </div>
    <!-- CONTENT -->
    <div class="bg-white col-span-10">
      <h2 class="text-center">Taskers</h2>
      <v-table fixed-header height="300px">
        <thead>
          <tr>
            <th class="text-left">
              First Name
            </th>
            <th class="text-left">
              Last Name
            </th>
            <th class="text-left">
              Email
            </th>
            <th class="text-left">
              Contacts
            </th>
            <th class="text-left">
              Gender
            </th>
            <th class="text-left">
              Country
            </th>
            <th class="text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <div class="text-center" v-if="authStore.isLoading">
            <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
          </div>
          <tr v-for="tasker in taskers" :key="tasker.id">
            <td>{{ tasker.first_name }}</td>
            <td>{{ tasker.last_name }}</td>
            <td>{{ tasker.email }}</td>
            <td>{{ tasker.phone_number }}</td>
            <td>{{ tasker.gender }}</td>
            <td>{{ tasker.country }}</td>
            <td>
              <v-button
                class="bg-blue-500 rounded-md py-1 px-2 text-white mx-2"
                @click="updateTasker(tasker.id)"
              >
                Update
              </v-button>
              <v-button
                class="bg-red-500 rounded-md py-1 px-2 text-white"
                @click="deleteTasker(tasker.id)"
              >
                Delete
              </v-button>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script setup>
import AdminSideBar from "./AdminSideBar.vue";
import { useAuthStore } from "../../stores/auth";
import { reactive } from "vue";
import axios from "axios";

const authStore = useAuthStore();
const taskers = reactive([]);

// fetch data from localhost:5000
authStore.isLoading = true;
axios
  .get("http://127.0.0.1:8000/api/admin-taskers")
  .then((response) => {
    taskers.push(...response.data);
    authStore.isLoading = false;
  });

const deleteTasker = async (id) => {
  const confirmDelete = confirm("Are you sure you want to delete this tasker?");
  if (confirmDelete) {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/admin-taskers/${id}`);
      taskers.splice(taskers.findIndex((tasker) => tasker.id === id), 1);
    } catch (error) {
      console.error(error);
    }
  }
};

const updateTasker = async (id) => {
  // TODO: Implement update tasker logic
};

</script>
