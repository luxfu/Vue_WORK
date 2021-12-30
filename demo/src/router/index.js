import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/home', component: () => import('../views/home.vue') }
  ]
});

export default router
