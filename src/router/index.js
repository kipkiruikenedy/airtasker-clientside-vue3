import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Pay from "../components/client/ClientTaskPayment.vue";
import sms from "../components/Global/PrivateChat.vue";
import Chat from "../components/Global/Chart.vue";



const routes = [
  { path: "/", name: "Home", component: Home },

  
 
  {
    path: "/help/success",
    name: "SMSSucess",
    component: () => import("../components/Global/MessageSuccess.vue"),
 
  },
  {
    path: "/sms",
    name: "SMSS",
    component: () => import("../components/tasker/ActiveTasksDetails.vue"),
  meta: { requiresAuth: false }
  },


  {
    path: "/rate",
    name: "Rate",
    component: () => import("../components/Global/RateUser.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: '/chat/:userId',
    name: 'Chat',
    component: Chat,
    props: true,
    meta: { requiresAuth: false }
  },
  
  { 
    path: "/private-chart",
   name: "sms", 
   component: sms,
 meta: { requiresAuth: false }

  },


// TASKER
{ 
  path: "/tasker/messages",
 name: "ClieMessages", 
 component: sms,
 meta: { requiresAuth: false }
 

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
  meta: { requiresAuth: false }
  },


  {
    path: "/tasker/profile",
    name: "TaskerProfile",
    component: () => import("../components/Profile/TaskerProfile.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/tasker/profile/edit",
    name: "TaskerEditProfile",
    component: () => import("../components/Profile/TaskerEditProfile.vue"),
  meta: { requiresAuth: false }
  },

  {
    path: "/tasker-task",
    name: "TaskerTasks",
    component: () => import("../components/tasker/TaskerTask.vue"),
  meta: { requiresAuth: false }
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
      {
        path: "private-chat",
        component: () => import('../components/client/PrivateChart.vue'),
     },

    
 ]
  },




  {
    path: "/tasker-browse-task",
    name:"TaskerBrowseTask",
    component: () => import("../components/tasker/TaskerBrowseTask.vue"),
  meta: { requiresAuth: false }
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
    path: "/tasker-in-progress-tasks",
    name: "tasker-inprogress-tasks",
    component: () => import("../components/tasker/InProgress.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/tasker-in-progress-tasks/:id",
    name: "tasker-inprogress-tasksDetails",
    component: () => import("../components/tasker/InProgressDetails.vue"),
  meta: { requiresAuth: false }
  },





  {
    path: "/tasker-requested-payment-tasks",
    name: "tasker-requested-payment-tasks",
    component: () => import("../components/tasker/RequestedPayment.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/tasker-requested-payment-tasks/:id",
    name: "tasker-requested-payment-tasksDetails",
    component: () => import("../components/tasker/RequestedPaymentDetails.vue"),
  meta: { requiresAuth: false }
  },

  {
    path: "/tasker-paid-tasks",
    name: "tasker-paid-tasks",
    component: () => import("../components/tasker/Paid.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/tasker-paid-tasks/:id",
    name: "tasker-paid-tasksDetails",
    component: () => import("../components/tasker/PaidDetails.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/tasker-pending-tasks",
    name: "taskerPending-Tasks",
    component: () => import("../components/tasker/PendingTasks.vue"),
  meta: { requiresAuth: false }
  },



  {
    path: "/tasker-active-tasks",
    name: "taskerActive-Tasks",
    
    component: () => import("../components/tasker/ActiveTasks.vue"),
    meta: { requiresAuth: false }

  },
  {
    path: "/tasker-active-tasks/:id",
    name: "taskerActive-Tasks-details",
    component: () => import("../components/tasker/ActiveTasksDetails.vue"),
  meta: { requiresAuth: false },
    children: [
        
      {
     path: "chat",
     component: () => import("../components/Global/PrivateChat.vue"),
      },
    ]
  },


  {
    path: "/tasker-completed-tasks",
    name: "taskercompleted-Tasks",
    component: () => import("../components/tasker/CompletedTasks.vue"),
  meta: { requiresAuth: false }
  },

 



  // CLIENT
  { 
    path: "/client/messages",
   name: "ClientMessages", 
   component: sms,
 meta: { requiresAuth: false }
  
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
  meta: { requiresAuth: false }
  },
  {
    path: "/client/profile/edit",
    name: "ClientEditProfile",
    component: () => import("../components/Profile/ClientEditProfile.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/client/post-task",
    name: "ClientTaskPost",
    component: () => import("../components/client/PostTask.vue"),
  meta: { requiresAuth: false }
    //  meta: { requiresAuth: false }
  },
  {
    path: '/client/task/:id',
    name: 'clientTaskDetails',
    component: () => import('../components/client/ClientTaskDetails.vue'),
  meta: { requiresAuth: false },
    children: [
        
           {
          path: "offer",
          component: () => import("../components/client/offers/OffersLists.vue"),
           },
           {
          path: 'offer/:id',
          component: () => import("../components/client/offers/OfferDetails.vue"),
          children: [
        
            {
           path: "chats",
           component: () => import("../components/Global/ClientChart.vue"),
            },
          ]
           },
           {
            path: 'pay',
            component: () => import('../components/client/ClientTaskPayment.vue'),
         },
           {
            path: 'edit',
            component: () => import('../components/client/EditTask.vue'),
         },
           

         
         
         
      ]
  },




// ACTIVE TASK
{
  path: "/client-rejectedtask",
  name: "ClientCurrentRejectedTasks",
  component: () => import("../components/client/ClientRejectedTasks.vue"),
 meta: { requiresAuth: false }
},
{
  path: "/client-completedtask",
  name: "ClientCurrentCompletedTasks",
  component: () => import("../components/client/ClientCompletedTasks.vue"),
 meta: { requiresAuth: false }
},
{
  path: "/client-active-task",
  name: "ClientCurrentActiveTasks",
  component: () => import("../components/client/ClientActiveTasks.vue"),
meta: { requiresAuth: false }
},
{
  path: "/client-requested-payments",
  name: "client-requested-payments",
  component: () => import("../components/client/RequestedPayments.vue"),
meta: { requiresAuth: false }
},
{
  path: "/client-requested-payments/:id",
  name: "client-requested-payments-details",
  component: () => import("../components/client/RequestedPaymentsDetails.vue"),
 meta: { requiresAuth: false },
  children: [
        
    {
   path: "rate",
   component: () => import("../components/Global/RateUser.vue"),
   
    },]
},




  {
    path: '/client-active-task/:id',
    name: 'ClientActiveTaskDetails',
    component: () => import('../components/client/ClientTaskDetails.vue'),
  meta: { requiresAuth: false },
    children: [
        
           {
          path: "offer",
          component: () => import("../components/client/ClientActiveTasksDetails.vue"),
          
           },
        
           {
          path: "offer/:id",
          component: () => import("../components/client/ClientActiveTasksDetails.vue"),
          children: [
        
            {
           path: "chat",
           component: () => import("../components/client/ClientActiveTasksDetails.vue"),
           
            },]
           },
         
      ]
  },



  {
    path: "/client-pending-task",
    name: "ClientPendingTasks",
    component: () => import("../components/client/ClientPendingTasks.vue"),
  meta: { requiresAuth: false }
 
  },

 













  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../components/ForgotPassword.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/password-reset/:token",
    name: "ResetPassword",
    component: () => import("../components/ResetPassword.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/how-it-works",
    name: "HowItWorks",
    component: () => import("../components/How-it-works.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/all-tasks",
    name: "AllTasks",
    component: () => import("../components/TasksList.vue"),
  meta: { requiresAuth: false }
  },










  {
    path: "/categories",
    name: "Categories",
    component: () => import("../components/Categories.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/add-categories",
    name: "AddCategories",
    component: () => import("../components/Categories.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),

  },

  // ADMIN
  {
    path: "/admin-view-notifications",
    name: "AdminNotifications",
    component: () => import("../components/admin/AdminViewNotifications.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/admin-dashboard",
    name: "AdminDahsboard",
    component: () => import("../components/admin/AdminDashboard.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/admin/profile",
    name: "AdminProfile",
    component: () => import("../components/Profile/AdminProfile.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/admin/profile/edit",
    name: "AdminEditProfile",
    component: () => import("../components/Profile/ClientEditProfile.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/admin-taskers",
    name: "Taskers",
    component: () => import("../components/admin/Taskers.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/admin-clients",
    name: "Clients",
    component: () => import("../components/admin/Clients.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/admin-pending-tasks",
    name: "Pending-Tasks",
    component: () => import("../components/admin/PendingTasks.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/admin-completed-tasks",
    name: "completed-Tasks",
    component: () => import("../components/admin/CompletedTasks.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/admin-pending-payments",
    name: "PendingPayment",
    component: () => import("../components/admin/PendingPayments.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/admin-completed-payments",
    name: "CompletedPayment",
    component: () => import("../components/admin/CompletedPayments.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/admin-suspended-accounts",
    name: "CompletedPayment",
    component: () => import("../components/admin/CompletedPayments.vue"),
  meta: { requiresAuth: false }
  },





  // CLIENT
  {
    path: "/client-dashboard",
    name: "Dahsboard",
    component: () => import("../components/client/ClientDashboard.vue"),
  meta: { requiresAuth: false }
  },
  {
    path: "/client-register",
    name: "Client-Register",
    component: () => import("../components/client/ClientRegister.vue"),
  meta: { requiresAuth: false }
  },
 
    // WRITER
    {
      path: "/post-task",
      name: "TaskPost",
      component: () => import("../components/client/PostTask.vue"),
    meta: { requiresAuth: false }
    
    },
    {
      path: "/tasker-dashboard",
      name: "TaskerDahsboard",
      component: () => import("../components/tasker/TaskerDashboard.vue"),
    meta: { requiresAuth: false }
    },


    // CATEGORY
    {
      path: "/admin-create-category",
      name: "AdminCreateCategory",
      component: () => import("../components/admin/AddCategory.vue"),
    meta: { requiresAuth: false }
    },
    {
      path: "/categories",
      name: "Categories",
      component: () => import("../components/Categories.vue"),
    meta: { requiresAuth: false }
    },
    {
      path: "/help",
      name: "Help",
      component: () => import("../components/Global/MessageAdmin.vue"),
    meta: { requiresAuth: false }
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

