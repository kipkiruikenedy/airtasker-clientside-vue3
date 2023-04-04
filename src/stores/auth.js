import { defineStore } from "pinia";
import axios from "axios";
import { ref } from 'vue'
import Swal from 'sweetalert2'

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
  }),

  // getters: {
  //   isLoggedIn: (state) => !!state.token,
  //   isAdmin: (state) => state.user?.role_id === 'admin',
  //   isClient: (state) => state.user?.role === 'client',
  //   isTasker: (state) => state.user?.role === 'tasker',
    
 
    

  // },

  actions: {


    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
      
      localStorage.getItem('token')
    },



    // LOGIN THE USER
    async login(data) {
      await this.getToken()
      this.isLoading = true
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
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
    
        if (this.authError == null && this.user.role_id == 'admin') {
          this.router.push('/admin-dashboard')
        } else if (this.authError == null && this.user.role_id == 'tasker') {
          this.router.push('/tasker/dashboard')
        } else if (this.authError == null && this.user.role_id == 'client') {
          this.router.push('/client/post-task')
        } else {
          this.router.push('/login')
        }
      } catch (error) {
        this.isLoading = false
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: this.authError,
          position: 'top-end',
          showConfirmButton: true,
       
        });
        
      }
    },
    

    // REGISTER CLIENT

    async handleRegisterClient(data) {
      this.authErrors = [];
      await this.getToken();
      this.isLoading = true
      try {
        await axios.post("http://127.0.0.1:8000/api/register/client", {
         

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
        this.isLoading=false 
        this.authError = error.response.data.error;
      }
    },



// REGISTER TASKER
    async handleRegisterTasker(data) {
      this.authErrors = [];
      await this.getToken();
      this.isLoading=true
      try {
        await axios.post("http://127.0.0.1:8000/api/register/tasker", {
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
        this.isLoading=false 
        this.authError = error.response.data.error;
      }
    },



// CREATE TASK

async handleTaskCreate(data) {
  this.authErrors = [];
  await this.getToken();
  this.isLoading = true
  try {
    await axios.post("http://127.0.0.1:8000/api/create-task", {
      title:data.title,
      description:data.description,
      amount:data.amount,
      category_id:data.job_category_name,
      deadline:data.deadline,
      time:data.time,
      client_id:this.user.id
    });
    this.isLoading=false
    this.authError = null
   
  } catch (error) {
    this.isLoading=false 
    // this.authError = error.response.data.error;
  }
},


// CREATE AN OFFER TO DO TASK
    async offer(data) {
   
      await this.getToken();
      this.isLoading = true;
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/create-offer',
         {
          tasker_id:this.user.id,
            content:data.title, 
            task_id: data.task_id, })
         this.isLoading=false 
      
      } catch (error) {
        this.isLoading=false ;
      
      }
    },




    // LOGOUT THE USER
    async handleLogout() {
      this.authErrors = [];
      this.isLoading=true
      try {
        await axios.post("http://127.0.0.1:8000/api/logout");
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
      this.getToken();
      try {
        const response = await axios.post("/forgot-password", {
          email: email,
        });
        this.authStatus = response.data.status;
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },




    // RESET PASSWORD
    async handleResetPassword(resetData) {
      this.authErrors = [];
      try {
        const response = await axios.post("/reset-password", resetData);
        this.authStatus = response.data.status;
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    
},
}
}
);
