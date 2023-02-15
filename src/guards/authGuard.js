import { useAuthStore } from "@/store/auth";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

const authStore = useAuthStore();

export function authGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  if (authStore.isAuthenticated) {
    // user is authenticated, allow access to the route
    next();
  } else {
    // user is not authenticated, redirect to login page
    next("/login");
  }
}
