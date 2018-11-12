import Vue from 'vue/dist/vue.js'
import router from './router.js'
import store from './store.js'
import '@/assets/global.scss'
import './style.scss'
import xIcon from '@/components/icon/icon.vue'
import { mapState, mapActions, mapMutations } from 'vuex'
new Vue({
    el: '#app',
    router,
    store,
    mixins: [],
    components: { xIcon },
    data: { currentTab: 'index' },
    computed: {},
    watch: {
        currentTab(val) {
            val === 'index' && this.hanleSlider(1)
            val === 'all' && this.hanleSlider(2)
            val === 'female' && this.hanleSlider(3)
            val === 'male' && this.hanleSlider(4)
            val === 'onsale' && this.hanleSlider(5)
        }
    },
    created() {
        this.fetchNewArrival()
            .then(res => {
                this.setNewArrival(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    },
    mounted() {
        const pattern = /^.*\?tab=(\w+)$/
        if (pattern.test(window.location.href)) { this.currentTab = RegExp.$1 }
    },
    beforedestroy() {},
    methods: {
        ...mapMutations(['setNewArrival']),
        ...mapActions(['fetchNewArrival']),
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
        linkMember(type) {
            if (type === 'user') {
                window.open('/member.html', '_blank')
            }
        }
    }
})