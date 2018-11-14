import Vue from 'vue/dist/vue.js'
import router from './router.js'
import store from './store.js'
import '@/assets/global.scss'
import './style.scss'
import xIcon from '@/components/icon/icon.vue'
import Message from '@/components/message/index.js'
Vue.use(Message)
import { mapState, mapActions, mapMutations } from 'vuex'
new Vue({
    el: '#app',
    router,
    store,
    mixins: [],
    provide() {
        return { eventBus: this.eventBus }
    },
    components: { xIcon },
    data: { currentTab: 'index', actionsVisible: false, eventBus: new Vue() },
    computed: {
        ...mapState({
            isLogin: state => state.isLogin,
            user: state => state.user
        })
    },
    watch: {
        currentTab(val) {
            val === 'index' && this.hanleSlider(1)
            val === 'all' && this.hanleSlider(2)
            val === 'female' && this.hanleSlider(3)
            val === 'male' && this.hanleSlider(4)
            val === 'discount' && this.hanleSlider(5)
        },
        actionsVisible(val) {
            if (val) {
                document.addEventListener('click', this.listenDocument)
            } else {
                document.removeEventListener('click', this.listenDocument)
            }
        }
    },
    created() {
        this.fetchGoods({ type: 'newArrival' })
            .then(res => {
                this.setNewArrival(res.data)
            })
            .catch(error => {})
    },
    async mounted() {
        await this.$nextTick()
        const pattern = /^.*\?tab=(\w+)$/
        if (pattern.test(window.location.href)) { this.currentTab = RegExp.$1 }
        this.check()
            .then(res => {
                this.setLogin(res.isLogin)
                this.setUser(res.data)
            })
            .catch(error => {})
    },
    beforedestroy() {
        document.removeEventListener('click', this.listenDocument)
    },
    methods: {
        ...mapMutations(['setNewArrival', 'setLogin', 'setUser']),
        ...mapActions(['fetchGoods', 'check', 'logout']),
        onTab(tab) {
            tab === 'index' ? this.$router.push('/') : this.$router.push({ path: '/category', query: { tab } })
            this.currentTab = tab
        },
        hanleSlider(n) {
            this.$refs.slider.style.transform = `translateX(${(n-1)*80}px)`
            this.$refs.fill.style.transform = `translateX(${(n-1)*80}px)`
        },
        onLink(type) {
            type === 'github' ? window.open('https://github.com/BlameDeng', '_blank') : window.open('https://www.jianshu.com/u/d12c8982dc3c', '_blank')
        },
        listenDocument() {
            this.actionsVisible = false
        },
        onClickUser() {
            if (!this.isLogin) {
                window.open('/member.html', '_blank')
                return
            }
            this.actionsVisible = true
        },
        onClickAction(type) {
            if (type === 'logout') {
                this.logout()
                    .then(res => {
                        localStorage.removeItem('user')
                        this.setLogin(res.isLogin)
                        this.setUser(null)
                    })
                    .catch(error => {
                        this.setLogin(res.isLogin)
                        this.setUser(null)
                    })
            } else if (type === 'account') {
                window.open('/member.html', '_blank')
            } else if (type === 'cart') {
                window.open('/cart.html', '_blank')
            }
        }
    }
})