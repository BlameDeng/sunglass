import Vue from 'vue/dist/vue.js'
import '@/assets/global.scss'
import './style.scss'
import xIcon from '@/components/icon/icon.vue'
import sunInput from '@/components/input.vue'
new Vue({
    el: '#app',
    mixins: [],
    components: { xIcon, sunInput },
    data: {
        username:'',
        password:''
    },
    computed: {},
    watch: {

    },
    created() {

    },
    mounted() {

    },
    beforedestroy() {},
    methods: {
        onLink(type) {
            type === 'github' ? window.open('https://github.com/BlameDeng', '_blank') : window.open('https://www.jianshu.com/u/d12c8982dc3c', '_blank')
        },
    }
})