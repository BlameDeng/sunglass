import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

Vue.use(Vuex)

import request from '../../http/request.js'
import URL from '../../http/url.js'

export default new Vuex.Store({
    state: {
        isLogin: false,
        user: null
    },
    mutations: {
        setLogin(state, payload) {
            state.isLogin = payload
        },
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        async login({ commit }, data) {
            return await request({ url: URL.login, method: 'POST', data })
        },
        async check({ commit }) {
            return await request({ url: URL.check })
        },
        async logout({ commit }) {
            return await request({ url: URL.logout })
        }
    }
})