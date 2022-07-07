import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { BASE_URL, BASE_API_URL } from '@/const.js';
import * as modules from '@/store/modules';
import router from '@/router';
Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules,
    state: {
        client: null,
        errorInterceptor: null,
    },
    mutations: {
        SET_CLIENT(state, payload) {
            state.client = payload;
        },
        SET_ERROR_INTERCEPTOR(state, payload) {
            if (state.errorInterceptor) {
                state.client.interceptors.response.eject(state.errorInterceptor);
            }
            state.errorInterceptor = payload;
        },
    },
    actions: {
        async initClient({ state, commit, dispatch }) {
            commit(
                'SET_CLIENT',
                axios.create({
                    baseURL: `${BASE_API_URL}/auth/`,
                    headers: { Authorization: `Bearer ${state.auth.token}` },
                    withCredentials: true,
                })
            );
            commit(
                'SET_ERROR_INTERCEPTOR',
                state.client.interceptors.response.use(
                    (config) => config,
                    (error) => {
                        if (
                            error.response &&
                            (error.response.status === 401 || error.response.status === 403) &&
                            !error.config.url.includes('verification-notification')
                        ) {
                            commit('auth/SET_TOKEN', null);
                            if (router.app.$route.name !== 'Login') router.push({ name: 'Login' });
                        }
                        return Promise.reject(error.response);
                    }
                )
            );
            await dispatch('getCSRFCookie');
        },
        async getCSRFCookie({ state }) {
            await state.client.get(`${BASE_URL}/sanctum/csrf-cookie`);
        },
    },
});
