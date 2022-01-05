import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/Header.vue"),
      redirect: "/home",
    },
    { path: "/home", component: () => import("../views/Home.vue") },
    { path: "/head", component: () => import("../components/Header.vue") },
  ],
});

export default router;
