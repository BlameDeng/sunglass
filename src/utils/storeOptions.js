import Vue from 'vue/dist/vue.js'
import request from '@/http/request.js'
import URL from '@/http/url.js'

class Options {
    constructor() {
        this.state = {
            newArrival: null,
            allProducts: null,
            singleProduct: null,
            recommend: null,
            isLogin: false,
            user: null,
            cart: null,
            receiver: null,
            allOrders: null,




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
            setRecommend(state, payload) {
                state.recommend = payload
            },
            setLogin(state, payload) {
                state.isLogin = payload
            },
            setUser(state, payload) {
                const { username, nickyname, gender, cart } = payload
                state.user = { username, nickyname, gender }
                Vue.set(state, 'cart', cart)
            },
            updateCart(state, payload) {
                Vue.set(state, 'cart', payload)
            },
            setReceiver(state, payload) {
                state.receiver = payload
            },
            setAllOrders(state, payload) {
                state.allOrders = payload
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
                    .then(res => {
                        commit('setLogin', res.isLogin)
                        commit('setUser', res.data)
                        return res
                    })
            },
            async logout({ commit }) {
                return await request({ url: URL.logout })
            },


            async patchAddress({ commit }, data) {
                return await request({ url: URL.patchAddress, method: 'POST', data })
            },
            async fetchGoods({ commit }, data) {
                return await request({ url: URL.fetchGoods, data })
            },

            async changeCount({ commit }, data) {
                return await request({ url: URL.changeCount, method: 'POST', data })
            },
            async removeGoods({ commit }, data) {
                return await request({ url: URL.removeGoods, method: 'POST', data })
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

            async getSingleProduct({ commit }, data) {
                return await request({ url: URL.singleProduct, data })
                    .then(res => {
                        commit('setSingleProduct', res.data)
                        return res
                    })
            },

            async getRecommend({ commit }, data) {
                return await request({ url: URL.recommend, data })
                    .then(res => {
                        commit('setRecommend', res.data)
                        return res
                    })
            },

            async changePassword({ commit }, data) {
                return await request({ url: URL.changePassword, method: 'PATCH', data })
            },

            async changeProfile({ commit }, data) {
                return await request({ url: URL.changeProfile, method: 'PATCH', data })
                    .then(res => {
                        commit('setUser', res.data)
                        return res
                    })
            },

            async addToCart({ commit }, data) {
                return await request({ url: URL.addToCart, method: 'PATCH', data })
                    .then(res => {
                        commit('updateCart', res.data)
                        return res
                    })
            },

            async removeFromCart({ commit }, data) {
                return await request({ url: URL.removeFromCart, method: 'PATCH', data })
                    .then(res => {
                        commit('updateCart', res.data)
                        return res
                    })
            },

            async getReceiver({ commit }) {
                return await request({ url: URL.getReceiver })
                    .then(res => {
                        commit('setReceiver', res.data)
                        return res
                    })
            },

            async updateReceiver({ commit }, data) {
                return await request({ url: URL.updateReceiver, method: 'PATCH', data })
                    .then(res => {
                        commit('setReceiver', res.data)
                        return res
                    })
            },

            async pay({ commit }, data) {
                return await request({ url: URL.pay, method: 'POST', data })
            },

            async getOrder({ commit }, data) {
                return await request({ url: URL.getOrder, data })
                    .then(res => {
                        commit('setAllOrders', res.data)
                        return res
                    })
            },

            async changeOrderStatus({ commit }, data) {
                return await request({ url: URL.changeOrderStatus, method: 'PATCH', data })
                    .then(res => {
                        commit('setAllOrders', res.data)
                        return res
                    })
            },

            async createEvaluation({ commit }, data) {
                return await request({ url: URL.createEvaluation, method: 'POST', data })
            },

            async getEvaluation({ commit }, data) {
                return await request({ url: URL.getEvaluation, data })
            }
        }
    }
}

export default Options