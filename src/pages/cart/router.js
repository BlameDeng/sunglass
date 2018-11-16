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
            path: '/order',
            component: () => import('./views/order.vue')
        },
        {
            path: '/record',
            component: () => import('./views/record.vue')
        }
    ]
})

export default router