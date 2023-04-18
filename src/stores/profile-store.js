import axios from 'axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('profile', {
  state: () => ({
    id: null,
    first_name: null,
    last_name: null,
    email: null,
    location: null,
    image: null,
    description: null,
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
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: data.email,
          password: data.password,
        })

        this.refreshToken = response.data.refresh_token
        this.token = response.data.authToken
        this.user = response.data.user

        this.id = this.user.id
        this.first_name = this.user.first_name
        this.last_name = this.user.last_name

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
  },
  persist: true,
})
