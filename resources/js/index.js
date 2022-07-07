import Vue from 'vue';
import { toggleTheme, toggleLanguage } from '../../shared/js/helpers/index';
import { showOffcanvas, showModal } from '../../shared/js/events/index';

// [+] components
import Offcanvas from '../../shared/js/components/Offcanvas';
import Modal from '../../shared/js/components/Modal';
import Tab from './components/Tab.vue';
import Tabs from './components/Tabs.vue';
// [-] components

Vue.component('app-offcanvas', Offcanvas);
Vue.component('app-modal', Modal);
Vue.component('app-tabs', Tabs);
Vue.component('app-tab', Tab);

const app = new Vue({
    el: '#main',
    data() {
        return {
            mobileSearchVisible: false,
        };
    },
    methods: {
        toggleTheme,
        showOffcanvas,
        showModal,
        toggleLanguage,
    },
});

window.APP = app;
