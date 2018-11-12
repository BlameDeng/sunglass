<template>
    <div class="sun-captcha">
        <span>验证码：</span>
        <sun-input v-model.trim="text" style="width:6em;" @focus="$emit('focus',$event)"></sun-input>
        <img v-if="captcha" :src="captcha.url" style="width:80px;height:32px;margin:0 4px;">
        <span class="info" v-if="captcha&&!message">
            看不清楚？<span class="change" @click="changeOne">换一张</span>
        </span>
        <span class="error" v-if="message">{{message}}</span>
    </div>
</template>
<script>
    import sunInput from './input.vue'
    import AV from 'leancloud-storage'
    var appId = 'DeTUR37nflhNjfrjyOHdejeb-gzGzoHsz'
    var appKey = 'Qq9lrFxWFSVhXEbCiodJX7kl'
    AV.init({ appId: appId, appKey: appKey })
    export default {
        name: 'SunCaptcha',
        components: { sunInput },
        props: { autoGet: { type: Boolean, default: true } },
        data() {
            return { text: '', captcha: null, message: '', timerId: null }
        },
        mounted() {
            this.autoGet && this.getCaptcha()
        },
        beforedestroy() {
            if (this.timerId) {
                window.clearTimeout(this.timerId)
                this.timerId = null
            }
        },
        methods: {
            getCaptcha() {
                this.message = ''
                this.text = ''
                AV.Captcha.request({ width: 80, height: 32 }).then((captcha) => {
                    this.captcha = captcha
                })
            },
            changeOne() {
                this.getCaptcha()
            },
            async verify() {
                if (!this.captcha) {
                    return Promise.reject({ message: '还未初始化' })
                }
                if (this.timerId) { return Promise.reject({ message: '重置中' }) }
                if (!this.text) {
                    this.handleError({ message: '请输入验证码' })
                    return Promise.reject({ message: '请输入验证码' })
                }
                if (this.text.length !== 4) {
                    this.handleError({ message: '格式不正确' })
                    return Promise.reject({ message: '格式不正确' })
                }
                await this.captcha.verify(this.text)
                    .then(res => {
                        return Promise.resolve(res)
                    })
                    .catch(error => {
                        this.handleError(error)
                        return Promise.reject(error)
                    })
            },
            handleError(error) {
                if (/([\u4e00-\u9fa5]*)/.test(error.message)) {
                    this.message = RegExp.$1
                    this.timerId = setTimeout(() => {
                        this.getCaptcha()
                        window.clearTimeout(this.timerId)
                        this.timerId = null
                    }, 1500)
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .sun-captcha {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        >span {
            color: rgba(0, 0, 0, .45);
            cursor: default;
            user-select: none;
            >.change {
                color: #1890ff;
                cursor: pointer;
            }
            &.error {
                color: #f10215;
            }
        }
    }
</style>