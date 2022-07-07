import { BASE_API_AUTH_URL } from '@/const';
export const ticket = {
    namespaced: true,
    state: {
        tickets: [],
    },
    actions: {
        async createTicket({ rootState, commit }, ticket) {
            const { data } = await rootState.client.post(`${BASE_API_AUTH_URL}/ticket`, {
                creator_id: rootState.auth.user.id,
                ...ticket,
            });
            commit('PUSH_TICKET', data);
        },
        async getTickets({ rootState, commit }) {
            const { data } = await rootState.client.get(`${BASE_API_AUTH_URL}/ticket`);
            commit('SET_TICKETS', data);
        },
        async getTicket({ rootState }, id) {
            const { data } = await rootState.client.get(`${BASE_API_AUTH_URL}/ticket/${id}`);
            return data;
        },
    },
    mutations: {
        SET_USER(state, data) {
            state.user = data;
        },
        SET_TICKETS(state, data) {
            state.tickets = data;
        },
        PUSH_TICKET(state, data) {
            state.tickets.push(data);
        },
    },
};
