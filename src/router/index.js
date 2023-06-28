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
        },
        {
            path: '/financial-year',
            name: 'financial-year',
            component: () => import('../views/FinancialYearView.vue')
        },
        {
            path: '/employee',
            name: 'employee',
            component: () => import('../views/EmployeeView.vue')
        },
    ],
})

export default router;