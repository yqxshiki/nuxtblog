import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        count: 0
    },
    getters: {

    },
    mutations: {
        add(state) {
            state.count++;
        }
    },
    actions: {

    },
})
export default store