import {createRouter, createWebHistory} from "vue-router";

import HomePage from "@/router/HomePage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        name: 'Home',
        path: '/',
        component: HomePage,
    },]
})
export default router;