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
        {
            path: '/expense-category',
            name: 'expense-category',
            component: () => import('../views/Expense/CategoryView.vue')
        }
    ],
})

export default router;