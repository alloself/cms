import Vue from 'vue';
export const eventBus = new Vue();

export function showOffcanvas() {
    eventBus.$emit('toggleOffcanvas', true);
}

export function showModal(ref = 'login-modal') {
    eventBus.$emit('showModal', ref);
    eventBus.$emit('toggleOffcanvas', false);
}
