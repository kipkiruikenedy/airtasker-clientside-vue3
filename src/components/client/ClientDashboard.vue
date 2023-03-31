


<template>
    <ClientNav/>
    <div class="grid grid-cols-12 gap-2 min-h-screen bg-gray-200">
        <!-- SIDEBAR -->
   <div class="bg-red-500 col-span-2">
    <ClientSideBar/>
   </div>
   <!-- CONTENT -->
   <div class="bg-white col-span-10">
    <div class="bg-white-300 flex-1 p-3 overflow-hidden">

<div class="flex flex-col bg-sky-200">
    <!-- Stats Row Starts Here -->
    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
        <div class="shadow-lg bg-pink-500 border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
            <div class="p-4 flex flex-col">
                <a href="#" class="no-underline text-white text-2xl">
                    12
                </a>
                <a href="#" class="no-underline text-white text-lg">
                    New Tasks
                </a>
            </div>
        </div>

        <div class="shadow bg-green-300 border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
            <div class="p-4 flex flex-col">
                <a href="#" class="no-underline text-white text-2xl">
                 4
                </a>
                <a href="#" class="no-underline text-white text-lg">
                    New Tasks
                </a>
            </div>
        </div>

        <div class="shadow bg-yellow-300 border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
            <div class="p-4 flex flex-col">
                <a href="#" class="no-underline text-white text-2xl">
                    8
                </a>
                <a href="#" class="no-underline text-white text-lg">
                    New Tasks
                </a>
            </div>
        </div>

        <div class="shadow bg-green-500 border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
            <div class="p-4 flex flex-col">
                <a href="#" class="no-underline text-white text-2xl">
                   8
                </a>
                <a href="#" class="no-underline text-white text-lg">
                    New Tasks
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
import ClientNav from './partials/ClientNav.vue';
import ClientSideBar from './partials/ClientSideBar.vue';

</script>