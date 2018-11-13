import Vue from 'vue/dist/vue.js'
import router from './router.js'
import store from './store.js'
import '@/assets/global.scss'
import './style.scss'
import xIcon from '@/components/icon/icon.vue'
import sunInput from '@/components/input.vue'
import sunCaptcha from '@/components/captcha.vue'
import Message from '@/components/message/index.js'
Vue.use(Message)
import { mapState, mapMutations, mapActions } from 'vuex'
new Vue({
    el: '#app',
    router,
    store,
    mixins: [],
    components: { xIcon, sunInput, sunCaptcha },
    data: {
        username: '',
        password: '',
        actionsVisible: false
    },
    computed: {
        ...mapState({
            isLogin: state => state.isLogin,
            user: state => state.user
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
                this.$router.push('/user')
            })
            .catch(error => {
                this.$router.push('/')
            })
    },
    mounted() {

    },
    beforedestroy() {
        document.removeEventListener('click', this.listenDocument)
    },
    methods: {
        ...mapMutations(['setLogin', 'setUser']),
        ...mapActions(['check', 'logout']),
        onLink(type) {
            // type === 'user' ? window.open('/member.html', '_blank') : ''
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
            }
        }
    }
})