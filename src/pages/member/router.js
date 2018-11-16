import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
        path: '/',
        component: () => import('./views/login.vue')
    }, {
        path: '/user',
        component: () => import('./views/user.vue')
    }]
})

export default router