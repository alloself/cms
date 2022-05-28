import Vue from 'vue';
import { toggleTheme } from '../../shared/js/helpers/index';
import { showOffcanvas, showModal } from '../../shared/js/events/index';

// [+] components
import Offcanvas from '../../shared/js/components/Offcanvas';
import Modal from '../../shared/js/components/Modal';
// [-] components

Vue.component('app-offcanvas', Offcanvas);
Vue.component('app-modal', Modal);

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
    },
});

window.APP = app;
