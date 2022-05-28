import Vue from 'vue';
import VueRouter from 'vue-router';

// views
import Wallet from '../views/Wallet.vue';
import Referrals from '../views/Referrals.vue';
import Information from '../views/Information.vue';
import Instruction from '../views/Instruction.vue';
import Support from '../views/Support.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Wallet',
        component: Wallet,
    },
    {
        path: '/referrals',
        name: 'Referrals',
        component: Referrals,
    },
    {
        path: '/information',
        name: 'Information',
        component: Information,
    },
    {
        path: '/instruction',
        name: 'Instruction',
        component: Instruction,
    },
    {
        path: '/support',
        name: 'Support',
        component: Support,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
