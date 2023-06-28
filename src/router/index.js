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
            path: '/expenses',
            name: 'expense-expense',
            component: () => import('../views/Expense/ExpenseView.vue')
        },
        {
            path: '/sales-list',
            name: 'sales-saleslist',
            component: () => import('../views/Sales/SaleslistView.vue')
        },
        {
            path: '/add-sales',
            name: 'sales-addnewsales',
            component: () => import('../views/Sales/AddNewSalesView.vue')
        },
        {
            path: '/edit-sales',
            name: 'sales-editsales',
            component: () => import('../views/Sales/EditSalesView.vue')
        },
    ],
})

export default router;