import '../../../resources/scss/index.scss';
import { themeOnLoad } from '../../../shared/js/helpers/index';

import Vue from 'vue';
import router from './router';
import store from './store';

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
import SupportForm from './components/forms/SupportForm';

Vue.component('app-svg-sprite', SvgSprite);
Vue.component('app-svg-icon', SvgIcon);
Vue.component('app-offcanvas', Offcanvas);
Vue.component('app-modal', Modal);
Vue.component('app-header', Header);
Vue.component('app-aside-menu', AsideMenu);
Vue.component('app-tokens-form', TokensForm);
Vue.component('app-wallet-form', WalletForm);
Vue.component('app-support-form', SupportForm);
// [-] components

themeOnLoad();

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
