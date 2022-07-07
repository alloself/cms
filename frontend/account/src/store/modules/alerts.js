export const alerts = {
    namespaced: true,
    state: {
        alerts: [],
    },
    mutations: {
        PUSH_ALERT(state, data) {
            state.alerts.push(data)
        },
        REMOVE_ALERT(state) {
            state.alerts.shift()
        }
    }, actions: {
        pushAlert({ commit }, data) {
            commit('PUSH_ALERT', data)
            setTimeout(() => {
                commit('REMOVE_ALERT')
            }, 7000)

        }

    }
}
