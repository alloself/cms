import { setValue, removeValue } from '@/utils';
import { TOKEN, BASE_API_URL, BASE_API_AUTH_URL } from '@/const';
export const auth = {
    namespaced: true,
    state: {
        user: null,
        token: null,
        menu: null,
    },
    actions: {
        async createUser({ commit, dispatch, rootState }, user) {
            const { data } = await rootState.client.post(`${BASE_API_URL}/register`, {
                ...user,
            });
            commit('SET_TOKEN', data.token);
            commit('SET_USER', data.user);
            setValue(TOKEN, data.token);
            await dispatch('initClient', null, { root: true });
            return data;
        },
        async checkValidEmail({ rootState }, email) {
            const { data } = await rootState.client.post(`${BASE_API_URL}/check-email`, {
                email,
            });
            return data;
        },
        async getUser({ commit, rootState }) {
            const { data } = await rootState.client.get('user');
            commit('SET_USER', data);
        },
        async login({ commit, dispatch, rootState, state }, { email, password }) {
            const { data } = await rootState.client.post(`${BASE_API_URL}/login`, {
                email,
                password,
            });
            commit('SET_TOKEN', data);
            setValue(TOKEN, data);
            await dispatch('initClient', null, { root: true });
            if (!state.user) await dispatch('getUser');
        },
        async logout({ commit, state, rootState }, router) {
            await rootState.client.post('/logout', {
                id: state.user.id,
            });
            router.push({ name: 'Login' });
            removeValue(TOKEN);
            commit('SET_TOKEN', null);
            commit('SET_USER', null);
        },
        async menu({ commit, state, rootState }, router) {
            const { data } = await rootState.client.get('/menu');
            commit('SET_MENU', data);
        },
        // eslint-disable-next-line no-unused-vars
        async forgotPassword({ commit, state, rootState }, email) {
            await rootState.client.post(`${BASE_API_URL}/forgot-password`, {
                email,
            });
        },
        async resetPassword({ rootState }, data) {
            return await rootState.client.post(`${BASE_API_URL}/reset-password`, { ...data });
        },
        async toUpBalance({ rootState }, payment) {
            const data = await rootState.client.post(`${BASE_API_AUTH_URL}/invoice/create`, {
                payment,
            });
            return data;
        },
        async toDownBalance({ rootState, dispatch }, payload) {
            const data = await rootState.client.post('/to-down-balance', {
                ...payload,
            });
            await dispatch('getUser');
            return data;
        },
        async setUserBriefcase({ commit, rootState }, id) {
            const { data } = await rootState.client.post(`${BASE_API_AUTH_URL}/set-user-briefcase`, {
                briefcase_id: id,
            });
            commit('SET_USER', data);
        },
    },
    mutations: {
        SET_USER(state, data) {
            state.user = data;
        },
        SET_TOKEN(state, data) {
            if (!data) {
                removeValue(TOKEN);
            }
            state.token = data;
        },
        SET_SPECIAL_OFFER5S(state, data) {
            state.user.special_offers = data;
        },
        SET_MENU(state, data) {
            state.menu = data;
        },
    },
};
