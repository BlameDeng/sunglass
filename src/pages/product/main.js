import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import Options from '@/utils/storeOptions'
import storeMixin from '@/mixin/storeMixin'
import xIcon from '@/components/icon/icon.vue'
import sunTopbar from '@/components/topbar.vue'
import sunSider from '@/components/sider.vue'
import sunFooter from '@/components/footer.vue'
import Message from '@/components/message/index.js'
import '@/assets/global.scss'
import './style.scss'
Vue.use(Message)
Vue.use(Message)
Vue.use(Vuex)
const options = new Options()
const store = new Vuex.Store(options)
import { mapState, mapActions, mapMutations } from 'vuex'
new Vue({
    el: '#app',
    store,
    mixins: [storeMixin],
    components: { xIcon, sunTopbar, sunSider, sunFooter },
    data() {
        return {
            currentImg: 'main',
            currentTab: 'detail',
            count: 1,
            record: null,
            content: '',
            evaluation: null,
            order: null
        }
    },
    computed: {
        ...mapState({
            goods: state => state.goods
        })
    },
    watch: {
        goods: {
            handler(val) {
                if (val) {
                    document.title = `商品详情-${val.attributes.name}`
                }
            },
            deep: true,
            immediate: true
        },
        content(val) {
            if (val.length > 300) {
                this.content = val.substr(0, 300)
            }
        }
    },
    created() {},
    async mounted() {
        let href = window.location.href
        const pattern1 = /^.*\?id=(\w+)$/
        const pattern2 = /^.*\?oid=(\w+)&pid=(\w+)$/
        if (pattern1.test(href)) {
            await this.getSingleProduct({ id: RegExp.$1 })
            await this.$nextTick()
            let { width } = this.$refs.showImg.getBoundingClientRect()
            this.$refs.showImg.style.height = width + 'px'
        } else if (pattern2.test(href)) {
            let oid = RegExp.$1
            let pid = RegExp.$2
            await this.getOrder({ id: oid }).then(res => {
                this.order = res.data
            })
            await this.getSingleProduct({ id: pid })
            await this.$nextTick()
            let { width } = this.$refs.showImg.getBoundingClientRect()
            this.$refs.showImg.style.height = width + 'px'
        }
    },
    methods: {
        ...mapMutations(['setLogin', 'setUser', 'setGoods']),
        ...mapActions([
            'check',
            'logout',
            'fetchGoods',
            'addToCart',
            'changeCount',
            'getRecord',
            'evaluate',
            'getGoodsEvaluation'
        ]),
        getEvaluation() {
            if (this.goods) {
                this.getGoodsEvaluation({ id: this.goods.id })
                    .then(res => {
                        this.evaluation = res.data
                    })
                    .catch(error => {})
            }
        },
        onLogo() { window.open('/home.html', '_self') },
        onClickUser() {
            if (!this.isLogin) {
                window.open('/member.html', '_blank')
                return
            }
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
            } else if (type === 'member') {
                window.open('/member.html', '_blank')
            } else if (type === 'cart') {
                window.open('/cart.html', '_blank')
            }
        },
        countBlur() {
            if (!this.count || typeof this.count !== 'number' || this.count < 0) {
                this.count = 1
            }
        },
        onChangeCount(n) {
            if (this.count + n < 1) {
                return
            } else {
                this.count += n
            }
        },
        handleClickAction() {
            if (this.count === 1) {
                return this.addToCart({ count: 1, ...this.goods })
            } else {
                let goods = JSON.parse(JSON.stringify(this.goods))
                goods.count = this.count
                return this.changeCount(goods)
            }
        },
        onAddToCart() {
            this.handleClickAction()
                .then(res => {
                    this.setUser(res.data)
                })
                .catch(error => {
                    if (error.status === 401) {
                        window.open(`/member.html`, '_blank')
                    }
                })
        },
        onBuy() {
            this.handleClickAction()
                .then(res => {
                    this.setUser(res.data)
                    window.open('/cart.html', '_blank')
                })
                .catch(error => {
                    if (error.status === 401) {
                        window.open(`/member.html`, '_blank')
                    }
                })
        },
        onSubmit() {
            if (!this.content) {
                this.$info({ message: '评价内容不能为空' })
                return
            }
            //data:{rid,gid,uid,username,nickyname,content}
            if (this.order.status !== 'toEvaluate') { return }
            this.createEvaluation({
                    pid: this.singleProduct.id,
                    oid: this.order.id,
                    username: this.user.username,
                    nickyname: this.user.nickyname || '',
                    content: this.content
                })
                .then(res=>{
                    console.log(res)
                })
                // .then(res => {
                //     this.setUser(res.data)
                //     this.getEvaluation() //获取最新商品评论列表
                //     let userRecord = res.data.record
                //     for (let i = 0; i < userRecord.length; i++) {
                //         if (userRecord[i].id === this.record.id) {
                //             this.record = userRecord[i]
                //             break
                //         }
                //     }
                // })
                // .catch(error => {
                //     this.$error({ message: error.msg })
                // })
        },
        formatDate(params) {
            let time
            if (typeof params === 'string') {
                time = new Date(params)
            } else {
                time = params
            }
            let year = time.getFullYear()
            let month = time.getMonth() + 1
            if (month < 10) {
                month = '0' + month
            }
            let date = time.getDate()
            if (date < 10) {
                date = '0' + date
            }
            return '' + year + '-' + month + '-' + date
        }
    }
})