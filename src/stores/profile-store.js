import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const useAuthStore = defineStore('profile', {
  state: () => ({
    id: null,
    first_name: null,
    last_name: null,
    email: null,
    location: null,
    phone_number: null,
    country: null,
    gender:null,
    profile_picture: null,

  
    isLoading: false,
    isAuthenticated: false,
    authError: null,
    refreshToken: null,
    token: null,
    user: null,
    
   

    errors: {
      error:null,
      email: null,
      password: null,
    },
  }),

  actions: {




    
    async login(data) {
      this.isLoading = true;

      try {
       
        const response = await axios.post('/api/login', {
          email: data.email,
          password: data.password,
        })

        this.refreshToken = response.data.refresh_token
        this.token = response.data.authToken
        this.user = response.data.user

        this.id = this.user.id
        this.first_name = this.user.first_name
        this.last_name = this.user.last_name
        this.email=this.user.email,
        this.location=this.user.location,
        this.phone_numbe= this.user.phone_number,
        this.country=this.user.country,
        this.gender=this.user.gender,
        this.isAuthenticated = true
        this.authError = response.data.error

        this.storeToken()

        let route = '/login'

        if (!this.authError) {
          switch (this.user.role_id) {
            case 'admin':
              route = '/admin-dashboard'
              break
            case 'tasker':
              route = '/tasker-browse-task'
              break
            case 'client':
              route = '/client/post-task'
              break
          }
        }

        this.router.push(route)
      } catch (error) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error.response ? error.response.data.message : 'Server error, please try again',
          showConfirmButton: false,
          timer: 2000,
        })
      } finally {
        this.isLoading = false
      }
    },
    storeToken() {
      localStorage.setItem('token', this.token)
    },



       // UPDATE CLIENT PROFILE

async handleUpdateClient(data) {
  this.authErrors = [];
  await this.getToken();
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

    await axios.post("/register", formData, {
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
  },
  persist: true,
})
