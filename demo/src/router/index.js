import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        component: Home,
        path: '/',
    },
    {
        component: () => { import("../views/Test.vue") },
        path: "/test"
    },
    {
        component: () => { import("../views/Test.vue") },
        path: "/demo"
    }
]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router