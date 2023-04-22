<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Email Verified Successfully
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            You can now login and start using our platform
          </p>
        </div>
        <div class="mt-8">
          <div class="flex items-center justify-center">
            <router-link to="/login" class="text-base font-medium text-indigo-600 hover:text-indigo-500">
              Login
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  