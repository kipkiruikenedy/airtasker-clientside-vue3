<template>
    <div class="flex-col h-screen bg-gray-800 text-white">
      <div class=" justify-center pt-4 pl-7">
        <v-avatar  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxVEw9MRh_vuujq_zWCppZySLY0aEH7HrM9gr9EHa&s"></v-avatar>
      </div>
      <nav class="mt-8">
        <router-link
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          class="flex items-center px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
        >
          <item.icon class="w-6 h-6 mr-4" />
         
          {{ item.title }}
        </router-link>
      </nav>
    </div>
  </template>
  
  <script>
  import { defineComponent} from 'vue';
 

  
  export default defineComponent({
    name: 'AdminSidebar',
    data() {
      return {
        items: [
          { title: 'Dashboard', to: '/admin-dashboard',icon:"mdi mdi-account-multiple-outline" },
          { title: 'Taskers', to: '/admin-taskers' },
          { title: 'Clients', to: '/admin-clients' },
          { title: 'Pending Tasks', to: '/admin-pending-tasks' },
          { title: 'Completed Tasks', to: '/admin-completed-tasks' },
          { title: 'Pending Payments', to: '/admin-pending-payments' },
          { title: 'Completed Payments', to: '/admin-completed-paymets' },
          { title: 'Suspended Acounts', to: '/admin-suspended-accounts' },
         
        ],
      };
    },
  });
  </script>
  