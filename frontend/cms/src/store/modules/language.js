import ApiService from '@/services/ApiService';
import { createVuexCRUDModule } from '@/utils';

export const language = createVuexCRUDModule('language', {
    state: {
        entities: []
    },
    mutations: {
        SET_ENTITIES(state, data) {
            state.entities = data
        }
    },
    actions: {
        async getEntities({ commit }) {
            const { data } = await ApiService.client.get(`/language`)
            commit('SET_ENTITIES', data)
        }
    }
}
);
