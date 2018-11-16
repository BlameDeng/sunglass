import request from '@/http/request.js'
import URL from '@/http/url.js'

class Options {
    constructor() {
        this.state = {
            newArrival: null,
            allProducts: null,
            singleProduct: null,
            isLogin: false,
            user: null,
            allGoods: null,
            recommendGoods: null,
            goods: null
        }
        this.mutations = {
            setNewArrival(state, payload) {
                state.newArrival = payload
            },
            setAllProducts(state, payload) {
                state.allProducts = payload
            },
            setSingleProduct(state, payload) {
                state.singleProduct = payload
            },
            setLogin(state, payload) {
                state.isLogin = payload
            },
            setUser(state, payload) {
                state.user = payload
            },
            setAllGoods(state, payload) {
                state.allGoods = payload
            },
            setRecommendGoods(state, payload) {
                state.recommendGoods = payload
            },
            setGoods(state, payload) {
                state.goods = payload
            },

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
            },
            async delivery({ commit }, data) {
                return await request({ url: URL.delivery, method: 'POST', data })
            },
            async evaluate({ commit }, data) {
                return await request({ url: URL.evaluate, method: 'POST', data })
            },
            async getRecord({ commit }, data) {
                return await request({ url: URL.record, data })
            },
            async getGoodsEvaluation({ commit }, data) {
                return await request({ url: URL.goodsEvaluation, data })
            },
            async destroyRecord({ commit }, data) {
                return await request({ url: URL.destroyRecord, method: 'DELETE', data })
            },

            async getNewArrival({ commit }) {
                return await request({ url: URL.newArrival })
                    .then(res => {
                        commit('setNewArrival', res.data)
                        return res
                    })
            },

            async getAllProducts({ commit }) {
                return await request({ url: URL.allProducts })
                    .then(res => {
                        commit('setAllProducts', res.data)
                        return res
                    })
            },

            async getSingleProduct({ commit }) {
                return await request({ url: URL.singleProduct })
                    .then(res => {
                        commit('setSingleProduct', res.data)
                        return res
                    })
            },
        }
    }
}

export default Options