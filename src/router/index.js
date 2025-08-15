import { createRouter, createWebHistory } from "vue-router";
// import { useAuthStore } from "@auth/stores/auth/authGuard";
import routes from "./routes";

// const router = createRouter({
//   routes,
//   history: createWebHistory(),
// });

const router = createRouter({
  routes,
  history: createWebHistory('/'),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;