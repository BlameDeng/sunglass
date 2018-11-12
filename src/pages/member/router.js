import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: () => import('./views/login.vue')
    }, {
        path: '/user',
        component: () => import('./views/user.vue')
    }]
})

export default router