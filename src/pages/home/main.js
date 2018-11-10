import Vue from 'vue/dist/vue.js'
import router from './router.js'
import store from './store.js'
import '@/assets/global.scss'
import './style.scss'
import xIcon from '../../components/icon/icon.vue'
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
        console.log(this.$store);

        this.fetchNewArrival()
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    },
    mounted() {
        const pattern = /^.*\?tab=(\w+)$/
        if (pattern.test(window.location.href)) { this.currentTab = RegExp.$1 }
    },
    beforedestroy() {},
    methods: {
        ...mapActions(['fetchNewArrival']),
        onTab(tab) {
            tab === 'index' ? this.$router.push('/') : this.$router.push({ path: '/category', query: { tab } })
            this.currentTab = tab
        },
        hanleSlider(n) {
            this.$refs.slider.style.transform = `translateX(${(n-1)*80}px)`
            this.$refs.fill.style.transform = `translateX(${(n-1)*80}px)`
        }
    }
})