import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '../views/Auth/LoginView.vue';
import LoginPinView from '../views/Auth/LoginPinView.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginView
        },
        {
            path: '/login-pin',
            name: 'login-pin',
            component: LoginPinView
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/DashboardView.vue')
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
        {
            path: '/sales-preview',
            name: 'sales-salespreview',
            component: () => import('../views/Sales/SalesPreviewView.vue')
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
        {
            path: '/salary-payout',
            name: 'salary-payout',
            component: () => import('../views/SalaryPayoutView.vue')
        },
        {
            path: '/banking-view',
            name: 'banking-view',
            component: () => import('../views/Banking/BankingView.vue')
        },
        {
            path: '/banking-view-more',
            name: 'banking-view-more',
            redirect: { name: 'banking-view-deposit' },
            component: () => import('../views/Banking/BankingViewMore.vue'),
            children: [
                {
                    path: '/',
                    name: 'banking-view-deposit',
                    component: () => import('../views/Banking/Deposit.vue')
                },
                {
                    path: '/banking-view-withdraw',
                    name: 'banking-view-withdraw',
                    component: () => import('../views/Banking/Withdraw.vue')
                }
            ]
        },
        {
            path: '/customers',
            name: 'customers',
            component: () => import('../views/CustomersView.vue')
        },
    ],
})

export default router;