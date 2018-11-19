import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import Options from '@/utils/storeOptions'
import router from './router'
import storeMixin from '@/mixin/storeMixin'
import xIcon from '@/components/icon/icon.vue'
import sunTopbar from '@/components/topbar.vue'
import sunSider from '@/components/sider.vue'
import sunFooter from '@/components/footer.vue'
import Message from '@/components/message/index'
import '@/assets/global.scss'
import './style.scss'
Vue.use(Message)
Vue.use(Vuex)
const options = new Options()
const store = new Vuex.Store(options)
new Vue({
    el: '#app',
    router,
    store,
    mixins: [storeMixin],
    components: { xIcon, sunTopbar, sunSider, sunFooter },
    data() {
        return {
            actionsVisible: false,
            currentTab: ''
        }
    },
    watch: {
        actionsVisible(val) {
            if (val) {
                document.addEventListener('click', this.listenDocument)
            } else {
                document.removeEventListener('click', this.listenDocument)
            }
        },
        $route(val) {
            let tab = val.path.substr(1)
            if (tab === 'cart' || tab === 'record') {
                this.currentTab = tab
            }
            if (tab === 'record') {
                document.title = '已买到的宝贝'
            } else {
                document.title = '我的购物车'
            }
        }
    },
    created() {},
    beforedestroy() {
        document.removeEventListener('click', this.listenDocument)
    },
    methods: {
        onLogo() { window.open('/home.html', '_self') },
        onClickUser() {
            if (!this.isLogin) { return }
            this.actionsVisible = true
        },
        listenDocument() {
            this.actionsVisible = false
        },
        onClickAction(type) {
            if (type === 'logout') {
                this.logout()
                    .then(res => {
                        localStorage.removeItem('user')
                        this.setLogin(res.isLogin)
                        this.setUser(null)
                        this.$router.push('/')
                    })
                    .catch(error => {
                        this.setLogin(res.isLogin)
                        this.setUser(null)
                        this.$router.push('/')
                    })
            } else if (type === 'member') {
                window.open('/member.html', '_blank')
            } else if (type === 'cart') {
                window.open('/cart.html', '_blank')
            }
        },
        onLink(tab) {
            this.$router.push(`/${tab}`)
        }
    }
})