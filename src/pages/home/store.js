import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

Vue.use(Vuex)

import request from '../../http/request.js'
import URL from '../../http/url.js'

export default new Vuex.Store({
    state: {
        newArrival: null
    },
    mutations: {
        setNewArrival(state, payload) {
            state.newArrival = payload
        }
    },
    actions: {
        async fetchNewArrival({ commit }) {
            let res = await request({ url: URL.newarrival })
            return res
        }
    }
})