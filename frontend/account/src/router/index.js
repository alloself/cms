import Vue from 'vue';
import VueRouter from 'vue-router';
import { getValue } from '@/utils';
import { TOKEN } from '@/const';
import store from '../store';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/Auth.vue'),
        meta: {
            requiresAuth: true,
            requiresEmailConfrim: true,
        },
        children: [
            {
                path: '',
                name: 'Wallet',
                component: () => import('@/views/Wallet.vue'),
            },
            {
                path: '/referrals',
                name: 'Referrals',
                component: () => import('@/views/Referrals.vue'),
            },
            {
                path: '/information',
                name: 'Information',
                component: () => import('@/views/Information.vue'),
            },
            {
                path: '/instruction',
                name: 'Instruction',
                component: () => import('@/views/Instruction.vue'),
            },
            {
                path: '/support',
                name: 'Support',
                component: () => import('@/views/Support.vue'),
            },
            {
                path: '/ticket/:id',
                name: 'Ticket',
                component: () => import('@/views/Ticket.vue'),
            },
            {
                path: '/email-warning',
                name: 'EmailWarning',
                component: () => import('@/views/EmailWarning.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import('@/views/Registration.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: '/account/',
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        const token = getValue(TOKEN);
        console.log(token);
        if (!token) {
            next({
                name: 'Login',
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
