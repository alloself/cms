import '../../../resources/scss/index.scss';
import { languageOnLoad, themeOnLoad } from '../../../shared/js/helpers/index';

import Vue from 'vue';
import router from './router';
import store from './store';
import { getValue } from '@/utils';
import { TOKEN } from '@/const';
// [+] components
import Offcanvas from '../../../shared/js/components/Offcanvas';
import Modal from '../../../shared/js/components/Modal';
import App from './App.vue';
import SvgIcon from './components/SvgIcon';
import Header from './components/Header';
import SvgSprite from './components/SvgSprite';
import AsideMenu from './components/AsideMenu';
import WalletForm from './components/forms/WalletForm';
import TokensForm from './components/forms/TokensForm';
import Tabs from './components/Tabs';

Vue.component('app-svg-sprite', SvgSprite);
Vue.component('app-svg-icon', SvgIcon);
Vue.component('app-offcanvas', Offcanvas);
Vue.component('app-modal', Modal);
Vue.component('app-header', Header);
Vue.component('app-aside-menu', AsideMenu);
Vue.component('app-tokens-form', TokensForm);
Vue.component('app-wallet-form', WalletForm);

Vue.component('app-tabs', Tabs);
// [-] components

themeOnLoad();
languageOnLoad();

Vue.config.productionTip = false;

export const app = new Vue({
    router,
    store,
    render: (h) => h(App),
    async created() {
        const token = getValue(TOKEN);
        this.$store.commit('auth/SET_TOKEN', token);
        await this.$store.dispatch('initClient', router);
        if (token) {
            await this.$store.dispatch('auth/menu');
            await this.$store.dispatch('auth/getUser');
        }
    },
}).$mount('#app');
