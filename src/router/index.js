import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: DashboardView
        },
        // {
        //     path: '/testview',
        //     name: 'testview',
        //     component: () => import('../views/TestView.vue')
        // }
    ],
})

export default router;