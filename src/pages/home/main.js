import Vue from 'vue/dist/vue.js'
import '@/assets/global.scss'
import './style.scss'

const banners = [
    'https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/banner1.jpg',
    'https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/banner2.jpg',
    'https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/banner3.jpg',
    'https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/banner4.jpg'
]
banners.unshift(banners[0])
banners.push(banners[banners.length - 1])

new Vue({
    el: '#app',
    data: {
        banners
    }
})