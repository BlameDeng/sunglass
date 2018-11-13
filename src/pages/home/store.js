import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

Vue.use(Vuex)

import request from '../../http/request.js'
import URL from '../../http/url.js'

export default new Vuex.Store({
    state: {
        newArrival: null,
        user: null
    },
    mutations: {
        setNewArrival(state, payload) {
            state.newArrival = payload
        },
        setLogin(state, payload) {
            state.isLogin = payload
        },
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        async fetchNewArrival({ commit }) {
            return await request({ url: URL.newarrival })
        },
        async check({ commit }) {
            return await request({ url: URL.check })
        },
        async logout({ commit }) {
            return await request({ url: URL.logout })
        }
    }
})