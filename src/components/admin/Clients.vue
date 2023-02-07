


<template>
    <div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
        <!-- SIDEBAR -->
   <div class="bg-red-500 col-span-2">
    <AdminSideBar/>
   </div>
   <!-- CONTENT -->
   <div class="bg-white col-span-10">
    <h2 class="text-center">Clients</h2>
  <v-table
    fixed-header
    height="300px"
  >
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
      <tr>
        <td>ken</td>
        <td>sam</td>
        <td>ken@gmail.com</td>
        <td>254799460000</td>
        <td>male</td>
        <td>kenya</td>
        <td>
            <v-button class="bg-blue-500 rounded-md py-1 px-2 text-white mx-2">Update</v-button>
            <v-button class="bg-red-500 rounded-md py-1 px-2 text-white">Delete</v-button>
        </td>
      </tr>
      <!-- <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr> -->
    </tbody>
  </v-table>

   
   </div>
    </div>
</template>
<script setup>
import AdminSideBar from './AdminSideBar.vue';

</script>