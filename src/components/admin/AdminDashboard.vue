


<template>
    <div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
        <!-- SIDEBAR -->
   <div class="bg-red-500 col-span-2">
    <AdminSideBar/>
   </div>
   <!-- CONTENT -->
   <div class="bg-white col-span-10">
    <p>dashboard content</p>
   
   </div>
    </div>
</template>
<script setup>
import AdminSideBar from './AdminSideBar.vue';

</script>