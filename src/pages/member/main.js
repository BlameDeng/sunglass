import Vue from 'vue/dist/vue.js'
import router from './router.js'
import store from './store.js'
import '@/assets/global.scss'
import './style.scss'
import xIcon from '@/components/icon/icon.vue'
import sunInput from '@/components/input.vue'
import sunCaptcha from '@/components/captcha.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
new Vue({
    el: '#app',
    router,
    store,
    mixins: [],
    components: { xIcon, sunInput, sunCaptcha },
    data: {
        username: '',
        password: ''
    },
    computed: {
        ...mapState({
            isLogin: state => state.isLogin
        })
    },
    watch: {

    },
    created() {
        this.check()
            .then(res => {
                console.log(res)
                this.setLogin(res.isLogin)
                this.setUser(res.data)
            })
            .catch(error => {
                console.log(error)
                this.$router.push('/')
            })
    },
    mounted() {

    },
    beforedestroy() {},
    methods: {
        ...mapMutations(['setLogin', 'setUser']),
        ...mapActions(['check']),
        onLink(type) {
            type === 'github' ? window.open('https://github.com/BlameDeng', '_blank') : window.open('https://www.jianshu.com/u/d12c8982dc3c', '_blank')
        },
        onLogin() {
            this.$refs.captcha.verify()
                .then(res => {

                })
                .catch(error => {

                })
        }
    }
})