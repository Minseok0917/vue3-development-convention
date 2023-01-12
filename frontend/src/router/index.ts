import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

export const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});
