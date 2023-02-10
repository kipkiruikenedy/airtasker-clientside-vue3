import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },

  {
    path: "/register/tasker",
    name: "RegisterAsTasker",
    component: () => import("../components/tasker/RegisterTasker.vue"),
  },
  {
    path: "/register/client",
    name: "Register",
    component: () => import("../components/client/ClientRegister.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../components/ForgotPassword.vue"),
  },
  {
    path: "/password-reset/:token",
    name: "ResetPassword",
    component: () => import("../components/ResetPassword.vue"),
  },
  {
    path: "/how-it-works",
    name: "HowItWorks",
    component: () => import("../components/How-it-works.vue"),
  },
  {
    path: "/all-tasks",
    name: "AllTasks",
    component: () => import("../components/TasksList.vue"),
  },
  {
    path: "/categories",
    name: "Categories",
    component: () => import("../components/Categories.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },

  // ADMIN
  {
    path: "/admin-dashboard",
    name: "Dahsboard",
    component: () => import("../components/admin/AdminDashboard.vue"),
  },
  {
    path: "/admin-taskers",
    name: "Taskers",
    component: () => import("../components/admin/Taskers.vue"),
  },
  {
    path: "/admin-clients",
    name: "Clients",
    component: () => import("../components/admin/Clients.vue"),
  },
  {
    path: "/admin-pending-tasks",
    name: "Pending-Tasks",
    component: () => import("../components/admin/PendingTasks.vue"),
  },
  {
    path: "/admin-completed-tasks",
    name: "completed-Tasks",
    component: () => import("../components/admin/CompletedTasks.vue"),
  },
  {
    path: "/admin-pending-payments",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/admin-completed-payments",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/admin-suspended-accounts",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/admin-system-logs",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },




  // CLIENT
  {
    path: "/client-dashboard",
    name: "Dahsboard",
    component: () => import("../components/admin/AdminDashboard.vue"),
  },
  {
    path: "/client-register",
    name: "Client-Register",
    component: () => import("../components/client/ClientRegister.vue"),
  },
  {
    path: "/post-task",
    name: "TaskPost",
    component: () => import("../components/client/PostTask.vue"),
  },
    // WRITER
    {
      path: "/tasker-dashboard",
      name: "TaskerDahsboard",
      component: () => import("../components/tasker/TaskerDashboard.vue"),
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
