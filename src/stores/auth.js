import { defineStore } from "pinia";
import axios from "axios";
import { ref } from 'vue'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


export const useAuthStore = defineStore('auth',{
  state: () => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    status:true,
    token: localStorage.getItem('token'),
    refreshToken: localStorage.getItem('refreshToken') || '',
    authMessage:null,
    authError:null,
    authStatus: null,
    messages:null,


    errors: {
      first_name: null,
      last_name: null,
      phone_number: null,
      country: null,
      gender: null,
      email: null,
      password: null,
      password_confirmation: null,
    },

  }),

  // getters: {
  //   isLoggedIn: (state) => !!state.token,
  //   isAdmin: (state) => state.user?.role_id === 'admin',
  //   isClient: (state) => state.user?.role === 'client',
  //   isTasker: (state) => state.user?.role === 'tasker',
    
 
    

  // },

  actions: {


    async getToken() {
      await axios.get('/sanctum/csrf-cookie').then(response => {
        // CSRF cookie has been set
    });
    },

  
   
    async verifyEmail(token) {
      try {
        const response = await axios.get(`/api/verify-email/${token}`);
        // If email verification is successful, show a success message and redirect to login page
        this.$router.push({ name: 'login' });
        this.$toast.success(response.data.message);
      } catch (error) {
        // If there is an error with email verification, show an error message
        this.$toast.error(error.response.data.error);
      }
    },
    




    // LOGIN THE USER
    async login(data) {
      await this.getToken();
      this.isLoading = true
      try {
        const response = await axios.post('/api/login', {
          email: data.email,
          password: data.password,
        })
        this.isLoading = false
        this.refreshToken = response.data.refresh_token
        this.token = response.data.authToken
        this.user = response.data.user
        this.isAuthenticated = true
        this.authError = response.data.error
    
        localStorage.setItem('token', this.token)
    
        if (this.authError == null && this.user.role_id == 'admin' && this.user.is_email_verified) {
          this.router.push('/admin-dashboard')
        } else if (this.authError == null && this.user.role_id == 'tasker' ) {
          this.router.push('/tasker-browse-task')
        } else if (this.authError == null && this.user.role_id == 'client') {
          this.router.push('/client/post-task')
        } else {
          this.router.push('/login')
        }
      } catch (error) {
        const errorMessage = error.response.data.message;
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: errorMessage,
          showConfirmButton: false,
          timer: 2000
        })
        this.isLoading = false
      
        
      }
    },
    

   // REGISTER CLIENT

   async handleRegisterClient(data) {
    this.authErrors = [];
 
    this.isLoading = true;
    const formData = new FormData();
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('phone_number', data.phone_number);
    formData.append('country', data.country);
    formData.append('gender', data.gender);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('password_confirmation', data.password_confirmation);
    formData.append('profile_photo', data.profile_photo);
    
    try {
      await axios.get("/sanctum/csrf-cookie");
      await axios.post("/api/register/client", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${this.token}`
        }
        
      });
      this.isLoading = false;
      this.authError = null;
      this.router.push("/login");
    } catch (error) {
      this.isLoading = false;
      const errorResponse = error.response.data;
    
      this.errors = {
        first_name: null,
        last_name: null,
        phone_number: null,
        country: null,
        gender: null,
        email: null,
        password: null,
        password_confirmation: null,
        profile_photo: null // add error property for profile photo
      }
    
      if (errorResponse.errors) {
        const errors = errorResponse.errors;
        Object.keys(errors).forEach((key) => {
          this.errors[key] = errors[key][0];
          if (key === 'password_confirmation') {
            this.errors.password_confirmation = 'The password confirmation does not match.';
          }
        });
        // check if there's an error with the profile photo upload
        if (errors.photo) {
          this.errors.profile_photo = errors.profile_photo[0];
        }
      }  
      else if (errorResponse.message && errorResponse.message.errorInfo && errorResponse.message.errorInfo.includes("Duplicate entry")) {
        this.errors.email = errorResponse.message.errorInfo[0];
      }
      else if (errorResponse.message && errorResponse.message.errorInfo && errorResponse.message.errorInfo.includes("Out of range value for column 'phone_number' ")) {
        this.errors.phone = errorResponse.message.errorInfo[0];
      }
      else {
        this.authError = 'Registration failed';
      }
    }
  },
  



   // UPDATE CLIENT PROFILE

async handleUpdateClient(data) {
  this.authErrors = [];
  this.isLoading = true;
  try {
    const formData = new FormData();
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('phone_number', data.phone_number);
    formData.append('country', data.country);
    formData.append('gender', data.gender);
    formData.append('email', data.email);
    formData.append('card_number', data.card_number);
    formData.append('profile_image', data.profile_image);
    await axios.get("/sanctum/csrf-cookie");
    await axios.post("/api/register/client", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${this.token}`
      }
    });
    this.isLoading = false;
    this.authError = null;
    this.router.push("/login");
  } catch (error) {
    this.isLoading = false;
    this.authError = error.response.data.error;
  }
},



// REGISTER TASKER
    async handleRegisterTasker(data) {
      await this.getToken();
      this.authErrors = [];
      this.isLoading=true
      try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/api/register/tasker", {
          first_name:data.first_name,
          last_name:data.last_name,
          phone_number:data.phone_number,
          country:data.country,
          gender:data.gender,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });
        this.isLoading=false
        this.authError = null
        this.router.push("/login");
      } catch (error) {
        this.isLoading = false;
        const errorResponse = error.response.data;
      
        this.errors = {
          first_name: null,
          last_name: null,
          phone_number: null,
          country: null,
          gender: null,
          email: null,
          password: null,
          password_confirmation: null,
          profile_photo: null // add error property for profile photo
        }
      
        if (errorResponse.errors) {
          const errors = errorResponse.errors;
          Object.keys(errors).forEach((key) => {
            this.errors[key] = errors[key][0];
            if (key === 'password_confirmation') {
              this.errors.password_confirmation = 'The password confirmation does not match.';
            }
          });
          // check if there's an error with the profile photo upload
          if (errors.photo) {
            this.errors.profile_photo = errors.profile_photo[0];
          }
        }  
        else if (errorResponse.message && errorResponse.message.errorInfo && errorResponse.message.errorInfo.includes("Duplicate entry")) {
          this.errors.email = errorResponse.message.errorInfo[0];
        }
        else if (errorResponse.message && errorResponse.message.errorInfo && errorResponse.message.errorInfo.includes("Out of range value for column 'phone_number' ")) {
          this.errors.phone = errorResponse.message.errorInfo[0];
        }
        else {
          this.authError = 'Registration failed';
        }
      }
    },


// CREATE TASK

async handleTaskCreate(data) {
  this.authErrors = [];
  await this.getToken();
  this.isLoading = true
  try {
    await axios.post("/api/create-task", {
      title:data.title,
      description:data.description,
      amount:data.amount,
      category_id:data.job_category_name,
      deadline:data.deadline,
      time:data.time,
      client_id:this.user.id
    });
   // Display congratulations popup upon successful task creation
   Swal.fire({
    title: 'Congratulations!',
    text: 'Your task has been created successfully.',
    icon: 'success',
    confirmButtonText: 'OK'
  }).then(() => {
    router.push('/client-pending-task'); // Navigate to "/home" route when "OK" button is clicked
  });
    this.isLoading=false
    this.authError = null
    this.router.push('/client-pending-task')
  } catch (error) {
    this.isLoading=false 
    // this.authError = error.response.data.error;
  }
},
// CREATE TASK

async handleTaskUpdate(data) {
  this.authErrors = [];
  await this.getToken();
  this.isLoading = true
  try {
    await axios.post("/api/create-task", {
      title:data.title,
      description:data.description,
      amount:data.amount,
      category_id:data.job_category_name,
      deadline:data.deadline,
      time:data.time,
      client_id:this.user.id
    });
   // Display congratulations popup upon successful task creation
   Swal.fire({
    title: 'Congratulations!',
    text: 'Your task has been created successfully.',
    icon: 'success',
    confirmButtonText: 'OK'
  }).then(() => {
    router.push('/client-pending-task'); // Navigate to "/home" route when "OK" button is clicked
  });
    this.isLoading=false
    this.authError = null
    this.router.push('/client-pending-task')
  } catch (error) {
    this.isLoading=false 
    // this.authError = error.response.data.error;
  }
},





async offer(data) {
  // Show confirmation message to user
  const { value } = await Swal.fire({
    title: 'Are you sure you want to make an offer?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, make offer',
    cancelButtonText: 'Cancel'
  })

  if (value) {
    await this.getToken();
    this.isLoading = true;
    try {
      const response = await axios.post('/api/create-offer', {
        tasker_id: this.user.id,
        content: data.title, 
        task_id: data.task_id,
        price: data.price
      })
      this.isLoading=false;
      // Show congratulatory message to user
      Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: response.data.message,
        confirmButtonText: 'OK'
      }).then(() => {
        // Redirect to appropriate page
        router.push("/tasker-browse-task")
      })
    } catch (error) {
      this.isLoading=false;
      // Show error message to user
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message,
        confirmButtonText: 'OK'
      })
    }
  }
},





    // LOGOUT THE USER
    async handleLogout() {
      this.authErrors = [];
      this.isLoading=true
      try {
        await axios.post("/api/logout");
        this.isAuthenticated = false
        this.isLoading=false
        this.user=null
        this.router.push("/login");
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading=false
        this.isAuthenticated = false
        this.router.push("/login");
        // localStorage.removeItem('user')
        // localStorage.removeItem('token')
        // localStorage.removeItem('refreshToken')
      }
    },
   


// UPDATE USER
    async updateUser({ state }, { email, password }) {
      try {
        const response = await axios.put(`/users/${state.user.id}`, { email, password })
        state.user = response.data
        return response.data
      } catch (error) {
        return Promise.reject(error.response.data)
      }
    },


// FORGOT PASSWORD
    async handleForgotPassword(email) {
      this.authErrors = [];
      this.isLoading = true;
      this.getToken();
      try {
        const response = await axios.post("/api/forgot-password", {
          email: email,
        });
        this.authStatus = response.data.status;
        this.isLoading = false;
        this.router.push("/reset-password");
      } catch (error) {
        this.isLoading = false;
        this.authErrors = error.response.data.errors;
      }
    },




    // RESET PASSWORD
    async handleResetPassword(resetData) {
      this.authErrors = [];
      try {
        const response = await axios.post("/api/change-password", resetData);
        this.authStatus = response.data.status;
        this.router.push("/login");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    
},
}
}
);
