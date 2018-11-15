import request from '@/http/request.js'
import URL from '@/http/url.js'

class Options {
    constructor() {
        this.state = {
            isLogin: false,
            user: null,
            allGoods: null,
            newArrival: null,
            recommendGoods: null,
            goods: null
        }
        this.mutations = {
            setLogin(state, payload) {
                state.isLogin = payload
            },
            setUser(state, payload) {
                state.user = payload
            },
            setAllGoods(state, payload) {
                state.allGoods = payload
            },
            setNewArrival(state, payload) {
                state.newArrival = payload
            },
            setRecommendGoods(state, payload) {
                state.recommendGoods = payload
            },
            setGoods(state, payload) {
                state.goods = payload
            }
        }
        this.actions = {
            async login({ commit }, data) {
                return await request({ url: URL.login, method: 'POST', data })
            },
            async check({ commit }) {
                return await request({ url: URL.check })
            },
            async logout({ commit }) {
                return await request({ url: URL.logout })
            },
            async patchPassword({ commit }, data) {
                return await request({ url: URL.patchPassword, method: 'POST', data })
            },
            async patchProfile({ commit }, data) {
                return await request({ url: URL.patchProfile, method: 'POST', data })
            },
            async patchAddress({ commit }, data) {
                return await request({ url: URL.patchAddress, method: 'POST', data })
            },
            async fetchGoods({ commit }, data) {
                return await request({ url: URL.fetchGoods, data })
            },
            async addToCart({ commit }, data) {
                return await request({ url: URL.addToCart, method: 'POST', data })
            },
            async changeCount({ commit }, data) {
                return await request({ url: URL.changeCount, method: 'POST', data })
            },
            async removeGoods({ commit }, data) {
                return await request({ url: URL.removeGoods, method: 'POST', data })
            },
            async pay({ commit }, data) {
                return await request({ url: URL.pay, method: 'POST', data })
            }
        }
    }
}

export default Options