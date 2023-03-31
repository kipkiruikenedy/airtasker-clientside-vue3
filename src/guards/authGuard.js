import { useAuthStore } from "@/store/auth";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

const authStore = useAuthStore();

export function authGuard() {
  if (authStore.isAuthenticated) {
    // user is authenticated, allow access to the route
    next();
  } else {
    // user is not authenticated, redirect to login page
    next("/login");
  }
}

router.beforeEach((to, from, next) => {

  // to and from are both route objects. must call `next`.
})