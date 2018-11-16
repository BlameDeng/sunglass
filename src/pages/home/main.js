import Vue from 'vue/dist/vue.js'
import router from './router.js'
import store from './store.js'
import '@/assets/global.scss'
import './style.scss'
import xIcon from '@/components/icon/icon.vue'
import sunSider from '@/components/sider.vue'
import sunFooter from '@/components/footer.vue'
import Message from '@/components/message/index.js'
Vue.use(Message)
import { mapState, mapActions, mapMutations } from 'vuex'
import storeMixin from '@/mixin/storeMixin'
new Vue({
    el: '#app',
    router,
    store,
    mixins: [storeMixin],
    provide() {
        return { eventBus: this.eventBus }
    },
    components: { xIcon, sunSider, sunFooter },
    data: { currentTab: 'index', actionsVisible: false, eventBus: new Vue() },
    computed: {
        ...mapState({
            isLogin: state => state.isLogin,
            user: state => state.user
        })
    },
    watch: {
        currentTab(val) {
            switch (val) {
                case 'index':
                    this.hanleSlider(1)
                    document.title = 'Sunglass - 首页'
                    break
                case 'all':
                    this.hanleSlider(2)
                    document.title = 'Sunglass - 全部'
                    break
                case 'female':
                    this.hanleSlider(3)
                    document.title = 'Sunglass - 女士'
                    break
                case 'male':
                    this.hanleSlider(4)
                    document.title = 'Sunglass - 男士'
                    break
                case 'discount':
                    this.hanleSlider(5)
                    document.title = 'Sunglass - 特惠'
                    break
            }
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
        this.getNewArrival()
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
            } else if (type === 'member') {
                window.open('/member.html', '_blank')
            } else if (type === 'cart') {
                window.open('/cart.html', '_blank')
            }
        }
    }
})