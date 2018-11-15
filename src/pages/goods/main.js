import Vue from 'vue/dist/vue.js'
import store from './store.js'
import '@/assets/global.scss'
import './style.scss'
import xIcon from '@/components/icon/icon.vue'
import sunSider from '@/components/sider.vue'
import Message from '@/components/message/index.js'
Vue.use(Message)
import { mapState, mapActions, mapMutations } from 'vuex'
new Vue({
    el: '#app',
    store,
    mixins: [],
    components: { xIcon, sunSider },
    data() {
        return {
            actionsVisible: false,
            currentImg: 'cover',
            currentTab: 'detail'
        }
    },
    computed: {
        ...mapState({
            isLogin: state => state.isLogin,
            user: state => state.user,
            goods: state => state.goods
        })
    },
    watch: {
        actionsVisible(val) {
            if (val) {
                document.addEventListener('click', this.listenDocument)
            } else {
                document.removeEventListener('click', this.listenDocument)
            }
        }
    },
    created() {
        this.check()
            .then(res => {
                this.setLogin(res.isLogin)
                this.setUser(res.data)
            })
            .catch(error => {
                // window.open('/member.html', '_self')
            })
    },
    mounted() {
        let href = window.location.href
        const pattern = /^.*?id=(\w+)$/
        if (pattern.test(href)) {
            this.fetchGoods({ id: RegExp.$1 })
                .then(res => {
                    this.setGoods(res.data)
                    console.log(this.goods.attributes.detail.split('\n'));

                })
                .catch(error => {
                    window.open('/home.html', '_self')
                })
        }
    },
    beforedestroy() {
        document.removeEventListener('click', this.listenDocument)
    },
    methods: {
        ...mapMutations(['setLogin', 'setUser', 'setGoods']),
        ...mapActions(['check', 'logout', 'fetchGoods']),
        onLogo() { window.open('/home.html', '_self') },
        onLink(type) {
            type === 'github' ? window.open('https://github.com/BlameDeng', '_blank') : window.open('https://www.jianshu.com/u/d12c8982dc3c', '_blank')
        },
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
            } else if (type === 'cart') {
                window.open('/cart.html', '_blank')
            }
        }
    }
})