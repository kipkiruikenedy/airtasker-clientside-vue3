<template>
    <div>
      <span class="icon">
        <i class="fas fa-bell"></i>
        <span v-if="unreadCount > 0" class="count">{{ unreadCount }}</span>
      </span>
      <div class="dropdown">
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" v-for="notification in notifications" :key="notification.id">
            {{ notification.message }}
          </a>
        </div>
      </div>
    </div>
  </template>
  

  <script setup>
  import { ref } from 'vue'
  
  const notifications = ref([])
  const unreadCount = ref(2)
  
  function markAllAsRead() {
    unreadCount.value = 0
  }
  
  // Listen for new notifications
  window.Echo.private('notifications').listen('.payment.success', (notification) => {
    notifications.value.push(notification)
    unreadCount.value++
  })
  
  window.Echo.private('notifications').listen('.product.created', (notification) => {
    notifications.value.push(notification)
    unreadCount.value++
  })
  
  window.Echo.private('notifications').listen('.payment.requested', (notification) => {
    notifications.value.push(notification)
    unreadCount.value++
  })
  </script>
  
  <style scoped>
  .icon {
    position: relative;
    display: inline-block;
  }
  
  .icon .count {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 4px;
    font-size: 12px;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-menu {
    position: absolute;
    right: 0;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    min-width: 160px;
    padding: 12px;
    border-radius: 4px;
  }
  </style>
  