import Vue from 'vue/dist/vue.js'
import '@/assets/global.scss'
import './style.scss'

import gSlides from './components/slides.vue'
const banners = [
    'https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/banner1.jpg',
    'https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/banner2.jpg',
    'https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/banner3.jpg',
    'https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/banner4.jpg'
]

new Vue({
    el: '#app',
    mixins: [],
    components: { gSlides },
    data: {
        banners
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    beforedestroy() {},
    methods: {}
})