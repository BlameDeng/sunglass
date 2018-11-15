<template>
    <div class="order">
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
            <template v-if="orderGoods&&orderGoods.length">
                <li v-for="goods in orderGoods" :key="goods.id">
                    <div class="info">
                        <img :src="goods.attributes.cover" @click="onGoodsDetail(goods)">
                        <span @click="onGoodsDetail(goods)">
                            {{goods.attributes.title}}
                        </span>
                    </div>
                    <div class="price">
                        <span>￥{{goods.attributes.price.toFixed(2)}}</span>
                        <span class="origin" v-if="goods.attributes.price<goods.attributes.originPrice">
                            <span>原价</span>
                            ￥{{goods.attributes.originPrice.toFixed(2)}}
                        </span>
                    </div>
                    <div class="count">
                        {{goods.count}}
                    </div>
                    <div class="total">￥{{(goods.attributes.price*goods.count).toFixed(2)}}</div>
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
                <div class="congfirm" @click="onConfirmToPay">提交并支付</div>
            </div>
        </div>
    </div>
</template>
<script>
    import xIcon from '@/components/icon/icon.vue'
    import sunInput from '@/components/input.vue'
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        name: 'Order',
        mixins: [],
        components: { xIcon, sunInput },
        props: {},
        data() {
            return {
                orderIds: null,
                dialogVisible: false,
                contract: '',
                phone: '',
                address: '',
                detailAddress: ''
            }
        },
        computed: {
            ...mapState({
                user: state => state.user
            }),
            orderGoods() {
                if (!this.orderIds || !this.user || !this.user.cart.length) {
                    return null
                } else {
                    let array = []
                    this.user.cart.forEach(goods => {
                        if (this.orderIds.indexOf(goods.id) > -1) {
                            array.push(goods)
                        }
                    })
                    return array
                }
            },
            total() {
                if (!this.orderGoods || !this.orderGoods.length) {
                    return 0
                } else {
                    return this.orderGoods.reduce((prev, current) => {
                        return prev + current.count * current.attributes.price
                    }, 0)
                }
            }
        },
        watch: {
            dialogVisible(val) {
                if (val) {
                    window.addEventListener('mousewheel', this.listenWindow)
                    window.addEventListener('keydown', this.listenWindow)
                } else {
                    window.removeEventListener('mousewheel', this.listenWindow)
                    window.removeEventListener('keydown', this.listenWindow)
                }
            }
        },
        created() {},
        mounted() {
            this.orderIds = this.$route.query.selectedIds
            document.title = 'Sunglass 确认订单'
        },
        beforedestroy() {
            window.removeEventListener('mousewheel', this.listenWindow)
            window.removeEventListener('keydown', this.listenWindow)
        },
        methods: {
            ...mapMutations(['setUser']),
            ...mapActions(['patchAddress']),
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
            onConfirmToPay() {
                if (!this.user.contract || !this.user.phone || !this.user.address || !this.user.detailAddress) {
                    this.$info({ message: '请先完善收货人姓名、手机号码、地址等信息！' })
                    return
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .order {
        width: 800px;
        margin: 0 auto;
        >.title {
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 2px;
            height: 70px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 18px;
            padding-left: 20px;
            margin: 10px 0;
            color: #f10215;
            cursor: default;
            user-select: none;
        }
        >.address {
            padding-left: 20px;
            >.detail-address {
                width: 400px;
                padding-left: 20px;
                transform: translateX(-20px);
                border: 1px dashed rgba(0, 0, 0, .15);
                >p {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    cursor: default;
                    margin: 5px 0;
                    font-size: 12px;
                }
            }
            >.btn {
                border: 1px solid rgba(0, 0, 0, .15);
                width: 100px;
                height: 30px;
                display: flex;
                margin-top: 10px;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                font-weight: 550;
                cursor: pointer;
                user-select: none;
                border-radius: 4px;
                transform: translateX(-20px);
                &:hover {
                    background: rgba(0, 0, 0, 0.05);
                }
            }
            >.mask {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, .15);
                >.dialog {
                    background: #fff;
                    width: 700px;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-70%);
                    border-radius: 2px;
                    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
                    >.address {
                        height: 280px;
                        padding: 20px;
                        padding-bottom: 0;
                        border-bottom: 1px solid rgba(0, 0, 0, .15);
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: stretch;
                        >.info {
                            cursor: default;
                            color: #f10215;
                            border-bottom: 1px solid rgba(0, 0, 0, .15);
                            padding-left: 20px;
                            padding-bottom: 5px;
                            margin: 0 -20px;
                        }
                        p {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            cursor: default;
                            font-size: 12px;
                            >label {
                                width: 6em;
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                &:not(:first-child) {
                                    width: 3em;
                                }
                            }
                        }
                        >.wrapper {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            >p {
                                &:last-child {
                                    margin-left: 17px;
                                }
                            }
                        }
                    }
                    >.btn-wrapper {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        >.btn {
                            margin: 20px;
                            width: 80px;
                            height: 30px;
                            line-height: 30px;
                            text-align: center;
                            background: lighten(#f10215, 20%);
                            color: rgba(255, 255, 255, .85);
                            cursor: pointer;
                            user-select: none;
                            border-radius: 2px;
                            &:hover {
                                background: lighten(#f10215, 10%);
                            }
                            &.cancle {
                                background: rgba(0, 0, 0, .15);
                                color: rgba(0, 0, 0, 0.65);
                                &:hover {
                                    background: lighten(rgba(0, 0, 0, .15), 10%);
                                }
                            }
                        }
                    }
                }
            }
        }
        >.title-bar {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-left: 20px;
            user-select: none;
            cursor: default;
            height: 30px;
            margin-bottom: 10px;
            >li {
                width: 100px;
                font-size: 12px;
                &.info {
                    flex-grow: 1;
                }
                &.price {
                    width: 140px;
                }
            }
        }
        >.goods {
            padding: 20px;
            padding-right: 0;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 2px;
            >li {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 10px 0;
                border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
                >div {
                    width: 100px;
                    font-size: 12px;
                    &.info {
                        flex-grow: 1;
                        padding-right: 10px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        >img {
                            width: 80px;
                            height: 80px;
                            flex-shrink: 0;
                            cursor: pointer;
                            margin-right: 15px;
                        }
                        >span {
                            cursor: pointer;
                            font-size: 12px;
                            &:hover {
                                color: #f10215;
                                text-decoration: underline;
                            }
                        }
                    }
                    &.price {
                        cursor: default;
                        width: 140px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-content: center;
                        >span {
                            font-size: 14px;
                            font-weight: 700;
                            &.origin {
                                font-size: 12px;
                                color: rgba(0, 0, 0, 0.45);
                                text-decoration: line-through;
                                >span {
                                    color: rgba(0, 0, 0, 0.45);
                                    font-size: 12px;
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                    &.count {
                        font-weight: 700;
                        cursor: default;
                        padding-left: .5em;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    &.total {
                        color: #f10215;
                        font-weight: 700;
                        cursor: default;
                    }
                }
                &.order-info {
                    background: #f2f7ff;
                    flex-direction: column;
                    align-items: flex-end;
                    padding: 0;
                    >.ems {
                        width: 400px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 8px 20px;
                        border-bottom: 1px solid #fff;
                        cursor: default;
                        >span {
                            cursor: default;
                            font-size: 12px;
                            &.number {
                                font-weight: 700;
                                color: #f10215;
                            }
                        }
                    }
                    >.all {
                        cursor: default;
                        width: 400px;
                        padding: 8px 20px;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        >span {
                            cursor: default;
                            font-size: 12px;
                            &.number {
                                font-size: 18px;
                                font-weight: 700;
                                color: #f10215;
                            }
                        }
                    }
                }
            }
        }
        >.action-bar {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-end;
            cursor: default;
            border-top: 1px dashed rgba(0, 0, 0, .15);
            margin: 20px 0;
            padding: 20px 0;
            >.pay-info {
                border: 1px solid #f10215;
                box-shadow: inset 0 0 2px #f10215;
                padding: 20px;
                border-radius: 2px;
                border-bottom-right-radius: 0;
                background: #fff;
                >div {
                    text-align: end;
                }
                span {
                    font-size: 12px;
                    &.label {
                        font-weight: 700;
                    }
                    &.number {
                        font-size: 18px;
                        font-weight: 700;
                        color: #f10215;
                    }
                }
            }
            >.btns {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                >.return {
                    width: 120px;
                    height: 40px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #1890ff;
                    >.icon {
                        width: 16px;
                        height: 16px;
                        margin-right: 4px;
                    }
                    &:hover {
                        color: #f10215;
                    }
                }
                >.congfirm {
                    width: 120px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background: #f10215;
                    color: rgba(255, 255, 255, .85);
                    cursor: pointer;
                    user-select: none;
                    border-radius: 2px;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                }
            }
        }
    }
    .actions-fade-enter-active, .actions-fade-leave-active {
        transition: opacity .3s ease-in-out;
    }
    .actions-fade-enter, .actions-fade-leave-to {
        opacity: 0;
    }
</style>