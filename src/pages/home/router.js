import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: () => import('./views/index.vue')
    }, {
        path: '/category',
        component: () => import('./views/category.vue')
    }]
})

export default router