import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    authErrors: [],
    authStatus: null,
    loading:false
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus,
  },
  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    async getUser() {
      await this.getToken();
      const data = await axios.get("/api/user");
      this.authUser = data.data;
    },
    async handleLogin(data) {
      this.authErrors = [];
      await this.getToken();

      try {
        await axios.post("/login", {
          email: data.email,
          password: data.password,
        });
       if (this.authUser=="ken") {
        this.router.push("/admin-dashboard");
       } 
       else if(role=="tasker"){
        this.router.push("/tasker-dashboard");
       }
       else{
        this.router.push("/client-dashboard");
       }
        
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleRegisterClient(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await axios.post("/register/client", {
         

          first_name:data.first_name,
          last_name:data.last_name,
          phone_number:data.last_name,
          country:data.last_name,
          gender:data.country,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });
        this.router.push("/login");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleRegisterTasker(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await axios.post("/register/tasker", {
          first_name:data.first_name,
          last_name:data.last_name,
          phone_number:data.last_name,
          country:data.last_name,
          gender:data.country,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });
        this.router.push("/login");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleLogout() {
      await axios.post("/logout");
      this.authUser = null;
    },

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
  },
});
