import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/cart'
        },
        {
            path: '/cart',
            component: () => import('./views/cart.vue')
        }, {
            path: '/pay',
            component: () => import('./views/pay.vue')
        },
        {
            path: '/record',
            component: () => import('./views/record.vue')
        }
    ]
})

export default router