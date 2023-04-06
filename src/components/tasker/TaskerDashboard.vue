


<template>
    <!-- NAV -->
    <TaskerNav />
<div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
    <!-- SIDEBAR -->
<div class="bg-gray-200 col-span-4">
  <AllTasks/>
</div>
   <!-- CONTENT -->
   <div class="bg-white col-span-8">
    <div class="bg-white-300 flex-1 p-3 overflow-hidden">

<div class="flex flex-col bg-sky-200">
    <!-- Stats Row Starts Here -->
    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 rounded-md">
        <div class="shadow-lg bg-pink-500 border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
            <div class="p-4 flex flex-col">
                <a href="#" class="no-underline text-white text-lg">
                    Pending Payment
                </a>
                <a href="#" class="no-underline text-white text-2xl flex">
                   <p>$</p> 12
                </a>
            </div>
        </div>

        <div class="shadow bg-green-300 border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
            <div class="p-4 flex flex-col">
                <a href="#" class="no-underline text-white text-lg">
                    Completed Tasks
                </a>
                <a href="#" class="no-underline text-white text-2xl">
                 4
                </a>
            </div>
        </div>

        <div class="shadow bg-yellow-300 border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
            <div class="p-4 flex flex-col">
                <a href="#" class="no-underline text-white text-lg">
                    Completed Payments
                </a>
                <a href="#" class="no-underline text-white text-2xl flex">
                   <p>$</p> 12
                </a>
            </div>
        </div>

        <div class="shadow bg-green-500 border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
            <div class="p-4 flex flex-col">
                <a href="#" class="no-underline text-white text-lg">
                    New Tasks
                </a>
                <a href="#" class="no-underline text-white text-2xl">
                   8
                </a>
            </div>
        </div>
    </div>
   </div>
   </div>
    </div>
    </div>
</template>
<script setup>
import AllTasks from '../Global/AllTasks.vue';
import TaskerNav from './TaskerNav.vue';
import TaskerSideBar from './TaskerSideBar.vue';

</script>