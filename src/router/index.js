import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Pay from "../components/client/ClientTaskPayment.vue";
import sms from "../components/client/Message/SendMesage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },

  { 
    path: "/message",
   name: "sms", 
   component: sms,
  //  meta: { requiresAuth: true }
  },


// TASKER
{ 
  path: "/tasker/messages",
 name: "ClieMessages", 
 component: sms,
//  meta: { requiresAuth: true }
},
  {
    path: "/register/tasker",
    name: "RegisterAsTasker",
    component: () => import("../components/tasker/RegisterTasker.vue"),
  },
  {
    path: "/tasker/dashboard",
    name: "TaskerDashboard",
    component: () => import("../components/tasker/TaskerDashboard.vue"),
  },


  {
    path: "/tasker/profile",
    name: "TaskerProfile",
    component: () => import("../components/Profile/TaskerProfile.vue"),
  },
  {
    path: "/tasker/profile/edit",
    name: "TaskerEditProfile",
    component: () => import("../components/Profile/TaskerEditProfile.vue"),
  },

  {
    path: "/tasker-task",
    name: "TaskerTasks",
    component: () => import("../components/tasker/TaskerTask.vue"),
  },
  {
    path: "/tasker-task/:id",
    name: "TaskerTaskDetails",
    component: () => import("../components/tasker/TaskerTask.vue"),
    children: [
        
      {
     path: "task-messages",
     component: () => import("../components/tasker/TaskerMakeOffer.vue"),
      },

      {
         path: "pay",
         component: () => import('../components/client/ClientTaskPayment.vue'),
      },

    
 ]
  },




  {
    path: "/tasker-browse-task",
    name:"TaskerBrowseTask",
    component: () => import("../components/tasker/TaskerBrowseTask.vue"),
  },
  

  {
    path:"/tasker-browse-task/:id",
    name:"taskerBrowseTaskDetails",
    component: () => import('../components/tasker/TaskerBrowseTaskDetails.vue'),
    children: [
        
      {
     path: "make-offer",
     component: () => import("../components/tasker/TaskerMakeOffer.vue"),
      },

      {
         path: "tasker-payment-details",
         component: () => import('../components/client/ClientTaskPayment.vue'),
      },

    
 ]
  },
  {
    path: "/tasker-pending-tasks",
    name: "taskerPending-Tasks",
    component: () => import("../components/tasker/PendingTasks.vue"),
  },
  {
    path: "/tasker-active-tasks",
    name: "taskerActive-Tasks",
    component: () => import("../components/tasker/ActiveTasks.vue"),
  },
  {
    path: "/tasker-completed-tasks",
    name: "taskercompleted-Tasks",
    component: () => import("../components/tasker/CompletedTasks.vue"),
  },

 



  // CLIENT
  { 
    path: "/client/messages",
   name: "ClientMessages", 
   component: sms,
  //  meta: { requiresAuth: true }
  },
  {
    path: "/register/client",
    name: "Register",
    component: () => import("../components/client/ClientRegister.vue"),
  },

  {
    path: "/client/profile",
    name: "ClientProfile",
    component: () => import("../components/Profile/ClientProfile.vue"),
  },
  {
    path: "/client/profile/edit",
    name: "ClientEditProfile",
    component: () => import("../components/Profile/ClientEditProfile.vue"),
  },
  {
    path: "/client/post-task",
    name: "ClientTaskPost",
    component: () => import("../components/client/PostTask.vue"),
  },
  {
    path: '/client/task/:id',
    name: 'clientTaskDetails',
    component: () => import('../components/client/ClientTaskDetails.vue'),
       children: [
        
           {
          path: "offer",
          component: () => import("../components/client/offers/ClientOfferCard.vue"),
           },
           {
          path: 'offer/:id',
          component: () => import("../components/client/offers/OfferDetails.vue"),
          children: [
            {
              path: 'messages',
              component: () => import('../components/client/ClientTaskPayment.vue'),
           },
          ]
           },

           {
              path: 'pay',
              component: () => import('../components/client/ClientTaskPayment.vue'),
           },
         
         
      ]
  },




// ACTIVE TASK
{
  path: "/client-active-task",
  name: "ClientCurrentActiveTasks",
  component: () => import("../components/client/ClientWorkingTasks.vue"),
},

  {
    path: '/client-active-task/:id',
    name: 'ClientActiveTaskDetails',
    component: () => import('../components/client/ClientTaskDetails.vue'),
       children: [
        
           {
          path: "offer",
          component: () => import("../components/client/offers/ClientOfferCard.vue"),
           },
      ]
  },



  {
    path: "/client-task",
    name: "ClientActiveTasks",
    component: () => import("../components/client/ClientActiveTasks.vue"),
  },
  {
    path: "/client-rejected-task",
    name: "ClientRejectedTasks",
    component: () => import("../components/client/ClientRejectedTasks.vue"),
  },
  {
    path: "/client-completed-task",
    name: "ClientCompletedTasks",
    component: () => import("../components/client/ClientCompletedTasks.vue"),
  },
  // {
  //   path: "/client-settings",
  //   name: "ClientSetting",
  //   component: () => import("../components/client/ClientTasks.vue"),
  // },
 













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
    path: "/add-categories",
    name: "AddCategories",
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
    name: "AdminDahsboard",
    component: () => import("../components/admin/AdminDashboard.vue"),
  },
  {
    path: "/admin/profile",
    name: "AdminProfile",
    component: () => import("../components/Profile/AdminProfile.vue"),
  },
  {
    path: "/admin/profile/edit",
    name: "AdminEditProfile",
    component: () => import("../components/Profile/ClientEditProfile.vue"),
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
    name: "PendingPayment",
    component: () => import("../components/admin/PendingPayments.vue"),
  },
  {
    path: "/admin-completed-payments",
    name: "CompletedPayment",
    component: () => import("../components/admin/CompletedPayments.vue"),
  },
  {
    path: "/admin-suspended-accounts",
    name: "CompletedPayment",
    component: () => import("../components/admin/CompletedPayments.vue"),
  },





  // CLIENT
  {
    path: "/client-dashboard",
    name: "Dahsboard",
    component: () => import("../components/client/ClientDashboard.vue"),
  },
  {
    path: "/client-register",
    name: "Client-Register",
    component: () => import("../components/client/ClientRegister.vue"),
  },
 
    // WRITER
    {
      path: "/post-task",
      name: "TaskPost",
      component: () => import("../components/client/PostTask.vue"),
    },
    {
      path: "/tasker-dashboard",
      name: "TaskerDahsboard",
      component: () => import("../components/tasker/TaskerDashboard.vue"),
    },


    // CATEGORY
    {
      path: "/admin-create-category",
      name: "AdminCreateCategory",
      component: () => import("../components/admin/AddCategory.vue"),
    },
    {
      path: "/categories",
      name: "Categories",
      component: () => import("../components/Categories.vue"),
    },
];




const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = /* your authentication logic */ false; // replace with your authentication logic
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next({ name: "Login" }); // redirect to login if not authenticated
  } else {
    next();
  }
});

export default router;

