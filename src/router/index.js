import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Pay from "../components/client/ClientTaskPayment.vue";
import sms from "../components/Global/PrivateChat.vue";
import Chat from "../components/Global/Chart.vue";
import { useAuthStore } from '../stores/profile-store'


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
  meta: { requiresAuth: true }
  },


  {
    path: "/rate",
    name: "Rate",
    component: () => import("../components/Global/RateUser.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: '/chat/:userId',
    name: 'Chat',
    component: Chat,
    props: true,
    meta: { requiresAuth: true }
  },
  
  { 
    path: "/private-chart",
   name: "sms", 
   component: sms,
 meta: { requiresAuth: true }

  },


// TASKER
{ 
  path: "/tasker/messages",
 name: "ClieMessages", 
 component: sms,
 meta: { requiresAuth: true }
 

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
  meta: { requiresAuth: true }
  },


  {
    path: "/tasker/profile",
    name: "TaskerProfile",
    component: () => import("../components/Profile/TaskerProfile.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/tasker/profile/edit",
    name: "TaskerEditProfile",
    component: () => import("../components/Profile/TaskerEditProfile.vue"),
  meta: { requiresAuth: true }
  },

  {
    path: "/tasker-task",
    name: "TaskerTasks",
    component: () => import("../components/tasker/TaskerTask.vue"),
  meta: { requiresAuth: true }
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
  meta: { requiresAuth: true }
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
  meta: { requiresAuth: true }
  },
  {
    path: "/tasker-in-progress-tasks/:id",
    name: "tasker-inprogress-tasksDetails",
    component: () => import("../components/tasker/InProgressDetails.vue"),
  meta: { requiresAuth: true }
  },





  {
    path: "/tasker-requested-payment-tasks",
    name: "tasker-requested-payment-tasks",
    component: () => import("../components/tasker/RequestedPayment.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/tasker-requested-payment-tasks/:id",
    name: "tasker-requested-payment-tasksDetails",
    component: () => import("../components/tasker/RequestedPaymentDetails.vue"),
  meta: { requiresAuth: true }
  },

  {
    path: "/tasker-paid-tasks",
    name: "tasker-paid-tasks",
    component: () => import("../components/tasker/Paid.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/tasker-paid-tasks/:id",
    name: "tasker-paid-tasksDetails",
    component: () => import("../components/tasker/PaidDetails.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/tasker-pending-tasks",
    name: "taskerPending-Tasks",
    component: () => import("../components/tasker/PendingTasks.vue"),
  meta: { requiresAuth: true }
  },



  {
    path: "/tasker-active-tasks",
    name: "taskerActive-Tasks",
    
    component: () => import("../components/tasker/ActiveTasks.vue"),
    meta: { requiresAuth: true }

  },
  {
    path: "/tasker-active-tasks/:id",
    name: "taskerActive-Tasks-details",
    component: () => import("../components/tasker/ActiveTasksDetails.vue"),
  meta: { requiresAuth: true },
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
  meta: { requiresAuth: true }
  },

 



  // CLIENT
  { 
    path: "/client/messages",
   name: "ClientMessages", 
   component: sms,
 meta: { requiresAuth: true }
  
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
  meta: { requiresAuth: true }
  },
  {
    path: "/client/profile/edit",
    name: "ClientEditProfile",
    component: () => import("../components/Profile/ClientEditProfile.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/client/post-task",
    name: "ClientTaskPost",
    component: () => import("../components/client/PostTask.vue"),
  meta: { requiresAuth: true }
   
  },
  {
    path: '/client/task/:id',
    name: 'clientTaskDetails',
    component: () => import('../components/client/ClientTaskDetails.vue'),
  meta: { requiresAuth: true },
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
 meta: { requiresAuth: true }
},
{
  path: "/client-completedtask",
  name: "ClientCurrentCompletedTasks",
  component: () => import("../components/client/ClientCompletedTasks.vue"),
 meta: { requiresAuth: true }
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
 meta: { requiresAuth: true },
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
  meta: { requiresAuth: true },
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
  meta: { requiresAuth: true }
 
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
  meta: { requiresAuth: true }
  },
  {
    path: "/add-categories",
    name: "AddCategories",
    component: () => import("../components/Categories.vue"),
  meta: { requiresAuth: true }
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
  meta: { requiresAuth: true }
  },
  {
    path: "/admin-dashboard",
    name: "AdminDahsboard",
    component: () => import("../components/admin/AdminDashboard.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/admin/profile",
    name: "AdminProfile",
    component: () => import("../components/Profile/AdminProfile.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/admin/profile/edit",
    name: "AdminEditProfile",
    component: () => import("../components/Profile/ClientEditProfile.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/admin-taskers",
    name: "Taskers",
    component: () => import("../components/admin/Taskers.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/admin-clients",
    name: "Clients",
    component: () => import("../components/admin/Clients.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/admin-pending-tasks",
    name: "Pending-Tasks",
    component: () => import("../components/admin/PendingTasks.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/admin-completed-tasks",
    name: "completed-Tasks",
    component: () => import("../components/admin/CompletedTasks.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/admin-pending-payments",
    name: "PendingPayment",
    component: () => import("../components/admin/PendingPayments.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/admin-completed-payments",
    name: "CompletedPayment",
    component: () => import("../components/admin/CompletedPayments.vue"),
  meta: { requiresAuth: true }
  },
  {
    path: "/admin-suspended-accounts",
    name: "CompletedPayment",
    component: () => import("../components/admin/CompletedPayments.vue"),
  meta: { requiresAuth: true }
  },





  // CLIENT
  {
    path: "/client-dashboard",
    name: "Dahsboard",
    component: () => import("../components/client/ClientDashboard.vue"),
  meta: { requiresAuth: true }
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
    meta: { requiresAuth: true }
    
    },
    {
      path: "/tasker-dashboard",
      name: "TaskerDahsboard",
      component: () => import("../components/tasker/TaskerDashboard.vue"),
    meta: { requiresAuth: true }
    },


    // CATEGORY
    {
      path: "/admin-create-category",
      name: "AdminCreateCategory",
      component: () => import("../components/admin/AddCategory.vue"),
    meta: { requiresAuth: true }
    },
    {
      path: "/categories",
      name: "Categories",
      component: () => import("../components/Categories.vue"),
    meta: { requiresAuth: true }
    },
    {
      path: "/help",
      name: "Help",
      component: () => import("../components/Global/MessageAdmin.vue"),
    meta: { requiresAuth: true }
    },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAuthenticated;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    // Store the original route in session storage
    sessionStorage.setItem('originalRoute', to.fullPath)
    next({ name: "Login" }); // redirect to login if not authenticated
  } else {
    next();
  }
});

// After the user logs in, retrieve the stored route from session storage
// and redirect the user to that route
function redirectToOriginalRoute() {
  const originalRoute = sessionStorage.getItem('originalRoute')
  if (originalRoute) {
    sessionStorage.removeItem('originalRoute')
    router.push(originalRoute)
  } else {
    router.push({ name: 'Home' })
  }
}


export default router;

