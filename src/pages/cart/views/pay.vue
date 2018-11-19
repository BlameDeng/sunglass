<template>
    <div class="pay">
        <div class="title">
            确认收货地址
        </div>
        <div class="address">
            <div class="detail-address" v-if="user">
                <p style="color:rgba(0,0,0,.45);">
                    默认收货地址：
                </p>
                <p>
                    {{`${user.address||''}${user.contract||''}（收）`}}
                </p>
                <p>
                    {{`${user.detailAddress||''} ${user.phone||''}`}}
                </p>
            </div>
            <div class="btn" role="button" @click="dialogVisible = true">
                使用新地址
            </div>
            <transition name="actions-fade">
                <div class="mask" v-show="dialogVisible">
                    <div class="dialog">
                        <div class="address">
                            <div class="info">使用新地址</div>
                            <div class="wrapper">
                                <p>
                                    <label>收货人：</label>
                                    <sun-input style="width:200px;" v-model="contract"></sun-input>
                                </p>
                                <p>
                                    <label>手机号码：</label>
                                    <sun-input style="width:200px;" v-model="phone"></sun-input>
                                </p>
                            </div>
                            <p>
                                <label>地址信息：</label>
                                <sun-input style="width:500px;" placeholder="省/市/区" v-model="address"></sun-input>
                            </p>
                            <p>
                                <label>详细地址：</label>
                                <sun-input style="width:500px;" placeholder="详细地址，如：门牌、街道、村镇" v-model="detailAddress"></sun-input>
                            </p>
                        </div>
                        <div class="btn-wrapper">
                            <div class="btn cancle" role="button" @click="onCancle">取消</div>
                            <div class="btn" role="button" @click="changeAddress">保存</div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div class="title">
            确认订单信息
        </div>
        <ul class="title-bar">
            <li class="info">商品信息</li>
            <li class="price">单价</li>
            <li>数量</li>
            <li>小计</li>
        </ul>
        <ul class="goods">
            <template v-if="orderProducts&&orderProducts.length">
                <li v-for="product in orderProducts" :key="product.id">
                    <div class="info">
                        <img :src="product.main_image" @click="onGoodsDetail(product)">
                        <span @click="onGoodsDetail(product)">
                            {{product.title}}
                        </span>
                    </div>
                    <div class="price">
                        <span class="text">单价</span>
                        <span>￥{{product.discount.toFixed(2)}}</span>
                        <span class="origin" v-if="product.discount<product.price">
                            <span class="text">原价</span>
                            ￥{{product.price.toFixed(2)}}
                        </span>
                    </div>
                    <div class="count">
                        <span class="text">数量</span>
                        {{product.count}}
                    </div>
                    <div class="total">
                        <span class="text">小计</span>
                        ￥{{(product.discount*product.count).toFixed(2)}}
                    </div>
                </li>
                <li class="order-info">
                    <div class="ems">
                        <span>运送方式 EMS 免邮</span>
                        <span class="number">0.00</span>
                    </div>
                    <div class="all">
                        <span>订单合计（含运费）</span><span class="number">￥{{total}}.00</span>
                    </div>
                </li>
            </template>
        </ul>
        <div class="action-bar">
            <div class="pay-info" v-if="user">
                <div class="pay">
                    <span class="label">实付款：</span>
                    <span class="number">￥{{total}}.00</span>
                </div>
                <div class="address">
                    <span class="label">寄送至：</span>
                    <span class="detail">
                        {{`${user.address||''} ${user.detailAddress||''}`}}
                    </span>
                </div>
                <div class="contract">
                    <span class="label">收货人：</span>
                    <span>{{`${user.contract||''} ${user.phone||''}`}}</span>
                </div>
            </div>
            <div class="btns">
                <div class="return" @click="onBack">
                    <x-icon name="back" class="icon"></x-icon>
                    <span>
                        返回购物车
                    </span>
                </div>
                <div class="confirm" @click="onConfirmToPay" :class="{disabled:!this.orderProducts||!this.orderProducts.length}">提交并支付</div>
            </div>
        </div>
        <transition name="actions-fade">
            <div class="check-password" v-show="checkPasswordVisible">
                <div class="inner">
                    <h3>支付订单需要验证登录密码</h3>
                    <sun-input style="width:200px;" type="password" v-model="password"></sun-input>
                    <div class="btns">
                        <div class="cancle" @click="onCheckAction('cancle')">取消</div>
                        <div class="confirm" @click="onCheckAction('confirm')">确定</div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import xIcon from '@/components/icon/icon.vue'
    import sunInput from '@/components/input.vue'
    import { mapState, mapMutations, mapActions } from 'vuex'
    import storeMixin from '@/mixin/storeMixin'
    export default {
        name: 'Pay',
        mixins: [storeMixin],
        components: { xIcon, sunInput },
        data() {
            return {
                orderIds: null,
                dialogVisible: false,
                contract: '',
                phone: '',
                address: '',
                detailAddress: '',
                checkPasswordVisible: false,
                password: ''
            }
        },
        computed: {
            orderProducts() {
                if (!this.orderIds || !this.cart || !this.cart.products.length) {
                    return null
                } else {
                    let array = []
                    this.cart.products.forEach(product => {
                        if (this.orderIds.indexOf(product.id) > -1) {
                            array.push(product)
                        }
                    })
                    return array
                }
            },
            total() {
                if (!this.orderProducts || !this.orderProducts.length) {
                    return 0
                } else {
                    return this.orderProducts.reduce((prev, current) => {
                        return prev + current.count * current.price
                    }, 0)
                }
            }
        },
        watch: {
            dialogVisible(val) {
                if (val) {
                    window.addEventListener('mousewheel', this.listenWindow)
                } else {
                    window.removeEventListener('mousewheel', this.listenWindow)
                }
            },
            checkPasswordVisible(val) {
                if (val) {
                    window.addEventListener('mousewheel', this.listenWindow)
                } else {
                    window.removeEventListener('mousewheel', this.listenWindow)
                }
            }
        },
        mounted() {
            this.orderIds = this.$route.query.selectedIds.map(id => parseInt(id, 10))
            document.title = '确认订单'
        },
        beforedestroy() {
            window.removeEventListener('mousewheel', this.listenWindow)
        },
        methods: {
            ...mapMutations(['setUser']),
            ...mapActions(['patchAddress', 'pay']),
            onGoodsDetail(goods) {
                window.open(`/goods.html?id=${goods.id}`, '_blank')
            },
            onCancle() {
                this.dialogVisible = false
                this.contract = ''
                this.phone = ''
                this.address = ''
                this.detailAddress = ''
            },
            changeAddress() {
                if (!this.contract || !this.phone || !this.address || !this.detailAddress) {
                    this.$info({ message: '联系人、手机号码、地址不能为空！' })
                    return
                }
                if (!/^[\d]+$/.test(this.phone)) {
                    this.$info({ message: '手机号码必须为数字！' })
                    return
                }
                this.patchAddress({ contract: this.contract, phone: this.phone, address: this.address, detailAddress: this.detailAddress })
                    .then(res => {
                        this.$success({ message: res.msg })
                        this.setUser(res.data)
                        this.dialogVisible = false
                    })
                    .catch(error => {
                        this.$error({ message: error.msg })
                        this.dialogVisible = false
                    })
            },
            listenWindow(e) {
                e.preventDefault && e.preventDefault()
                e.stopPropagation && e.stopPropagation()
                return false
            },
            onBack() {
                this.$router.go(-1)
            },
            checkPassword() {
                return new Promise((resolve, reject) => {
                    this.promiseStatus = { resolve, reject }
                })
            },
            onCheckAction(type) {
                if (type === 'cancle') {
                    this.checkPasswordVisible = false
                    this.password = ''
                } else if (type === 'confirm') {
                    if (!this.password) {
                        this.$error({ message: '必须输入密码' })
                        return
                    }
                    if (!/.{6,18}/.test(this.password)) {
                        this.$info({ message: '密码为6到18个字符' })
                        return
                    }
                    this.pay({ order: this.orderProducts, password: this.password })
                        .then(res => {
                            this.setUser(res.data)
                            this.$success({ message: '支付成功' })
                            this.checkPasswordVisible = false
                            this.password = ''
                            this.$router.push('/record')
                        })
                        .catch(error => {
                            this.$error({ message: error.msg })
                            this.checkPasswordVisible = false
                            this.password = ''
                            this.$router.push('/cart')
                        })
                }
            },
            onConfirmToPay() {
                if (!this.user.contract || !this.user.phone || !this.user.address || !this.user.detailAddress) {
                    this.$info({ message: '请先完善收货人姓名、手机号码、地址等信息！' })
                    return
                }
                if (!this.orderProducts || !this.orderProducts.length) {
                    return
                }
                this.checkPasswordVisible = true
            }
        }
    }
</script>
<style scoped lang="scss" src="./pay.scss"></style>