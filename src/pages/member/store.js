import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
Vue.use(Vuex)

import Options from '@/utils/storeOptions.js'
const options = new Options()

export default new Vuex.Store(options)