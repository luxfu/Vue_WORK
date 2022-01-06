import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
    components: () => { import("../views/Test.vue") },
    path: "/test"
}]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router