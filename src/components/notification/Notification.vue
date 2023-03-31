<template>
    <div>
      <h3>Notifications</h3>
      <ul>
        <li v-for="notification in notifications" :key="notification.id">
          <a @click="openNotification(notification)">
            {{ notification.title }}
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    notifications: {
      type: Array,
      required: true
    }
  });
  
  const emits = defineEmits(['notification-clicked']);
  
  function openNotification(notification) {
    // Show a modal with the notification details
    emits('notification-clicked', notification.id);
  
    // Mark the notification as read
    notification.read = true;
  
    // Navigate to a different page
    this.$router.push(`/notifications/${notification.id}`);
  }
  </script>
  