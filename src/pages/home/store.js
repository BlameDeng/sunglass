import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

Vue.use(Vuex)

import request from '../../http/request.js'
import URL from '../../http/url.js'

export default new Vuex.Store({
    state: {
        allGoods: null,
        newArrival: null,
        isLogin: false,
        user: null
    },
    mutations: {
        setAllGoods(state, payload) {
            state.allGoods = payload
        },
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
        async fetchGoods({ commit }, data) {
            return await request({ url: URL.fetchGoods, data })
        },
        async check({ commit }) {
            return await request({ url: URL.check })
        },
        async logout({ commit }) {
            return await request({ url: URL.logout })
        },
        async addToCart({ commit }, data) {
            return await request({ url: URL.addToCart, method: 'POST', data })
        }
    }
})