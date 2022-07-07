export const briefcase = {
    namespaced: true,
    state: {
        briefcases: [],
    },
    actions: {
        async getBriefcases({ commit, rootState }) {
            const { data } = await rootState.client.get('briefcase')
            commit('SET_BRIEFCASES', data)
        },
    },
    mutations: {
        SET_BRIEFCASES(state, data) {
            state.briefcases = data
        },
    }
}
