export const specialOffers = {
    namespaced: true,
    state: {
        specialOffers: [],
    },
    actions: {
        async getSpecialOffers({ commit, rootState }) {
            const { data } = await rootState.client.get('special-offer')
            commit('SET_SPECIAL_OFFERS', data)
        },
        async sendRequestForOffer({ commit, rootState }, id) {
            const { data } = await rootState.client.post('special-offer/request', {
                id
            })
            commit('auth/SET_SPECIAL_OFFER5S', data, { root: true })
        }
    },
    mutations: {
        SET_SPECIAL_OFFERS(state, data) {
            state.specialOffers = data
        },
    }
}
