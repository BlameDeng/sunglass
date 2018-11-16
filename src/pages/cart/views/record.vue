<template>
    <div class="sun-record">
        <div class="title">
            已买到的宝贝
        </div>
        <nav class="navbar">
            <a href="javascript:0;" :class="{active:currentTab==='all'}" @click="onTab('all')">
                全部订单
            </a>
            <a href="javascript:0;" :class="{active:currentTab==='dispatched'}" @click="onTab('dispatched')">
                待收货
                <span class="number">{{dispatchedGoods&&(dispatchedGoods.length||'')}}</span>
            </a>
            <a href="javascript:0;" :class="{active:currentTab==='toEvaluate'}" @click="onTab('toEvaluate')">
                待评价
                <span class="number">{{toEvaluateGoods&&(toEvaluateGoods.length||'')}}</span>
            </a>
            <a href="javascript:0;" :class="{active:currentTab==='done'}" @click="onTab('done')">
                已完成订单
            </a>
        </nav>
        <ul class="title-bar">
            <li class="info">商品信息</li>
            <li class="price">单价</li>
            <li>数量</li>
            <li>实付款</li>
            <li class="action">操作</li>
        </ul>
        <ul class="goods">
            <template v-if="user&&user.record&&user.record.length">
                <li v-for="item in instageRecord" :key="item.id">
                    <header class="order-info">
                        <span class="number">{{formatDate(item.createdAt)}}</span>
                        <span>订单号：</span>
                        <span class="number">{{item.id}}</span>
                    </header>
                    <div class="info">
                        <img :src="item.goods.attributes.cover" @click="onGoodsDetail(item.goods)">
                        <span @click="onGoodsDetail(item.goods)">
                            {{item.goods.attributes.title}}
                        </span>
                    </div>
                    <div class="price">
                        <span>￥{{item.goods.attributes.price.toFixed(2)}}</span>
                        <span class="origin" v-if="item.goods.attributes.price<item.goods.attributes.originPrice">
                            <span>原价</span>
                            ￥{{item.goods.attributes.originPrice.toFixed(2)}}
                        </span>
                    </div>
                    <div class="count">
                        {{item.goods.count}}
                    </div>
                    <div class="total">￥{{(item.goods.attributes.price*item.goods.count).toFixed(2)}}</div>
                    <div class="action">
                        <a class="btn delivery" href="javascript:0;" @click="onDelivery(item)" v-if="item.status==='payed'">
                            确认收货
                        </a>
                        <a class="btn" href="javascript:0;" @click="onEvaluate(item)" v-if="item.status==='toEvaluate'">
                            评价商品
                        </a>
                        <a class="btn" href="javascript:0;" @click="onDelete(item)" v-if="item.status==='done'">
                            <x-icon name="delete" class="icon"></x-icon>删除订单
                        </a>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>
<script>
    import xIcon from '@/components/icon/icon.vue'
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        name: 'Record',
        components: { xIcon },
        data() {
            return { currentTab: 'dispatched' }
        },
        computed: {
            ...mapState({
                user: state => state.user
            }),
            dispatchedGoods() {
                if (!this.user || !this.user.record || !this.user.record.length) {
                    return null
                }
                return this.user.record.filter(record => record.status === 'payed')
            },
            toEvaluateGoods() {
                if (!this.user || !this.user.record || !this.user.record.length) {
                    return null
                }
                return this.user.record.filter(record => record.status === 'toEvaluate')
            },
            doneGoods() {
                if (!this.user || !this.user.record || !this.user.record.length) {
                    return null
                }
                return this.user.record.filter(record => record.status === 'done')
            },
            instageRecord() {
                if (!this.user || !this.user.record || !this.user.record.length) {
                    return null
                }
                if (this.currentTab === 'all') {
                    return this.user.record
                }
                if (this.currentTab === 'dispatched') {
                    return this.dispatchedGoods
                }
                if (this.currentTab === 'toEvaluate') {
                    return this.toEvaluateGoods
                }
                if (this.currentTab === 'done') {
                    return this.doneGoods
                }
            }
        },
        methods: {
            ...mapMutations(['setUser']),
            ...mapActions(['delivery', 'evaluate', 'destroyRecord']),
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
            },
            onTab(tab) {
                this.currentTab = tab
            },
            onGoodsDetail(goods) {
                window.open(`/goods.html?id=${goods.id}`, '_blank')
            },
            onDelivery(record) {
                this.delivery(record)
                    .then(res => {
                        this.setUser(res.data)
                    })
                    .catch(error => {
                        this.$error({ message: error.msg })
                    })
            },
            onEvaluate(record) {
                window.open(`/goods.html?rid=${record.id}`, '_blank')
            },
            onDelete(record) {
                this.destroyRecord({ id: record.id })
                    .then(res => {
                        this.setUser(res.data)
                    })
            }
        }
    }
</script>
<style scoped lang="scss">
    .sun-record {
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
        >.navbar {
            height: 30px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-left: 20px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.15);
            position: relative;
            margin-bottom: 10px;
            >a {
                display: flex;
                justify-content: center;
                align-items: center;
                color: rgba(0, 0, 0, 0.65);
                width: 80px;
                height: 30px;
                &:last-child {
                    position: absolute;
                    top: 0;
                    right: 20px;
                }
                &:hover {
                    color: #f10215;
                }
                &.active {
                    color: #f10215;
                }
                >span.number {
                    font-size: 14px;
                    font-weight: 700;
                    margin-left: 5px;
                    color: #f10215;
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
                transform: translateX(-20px);
                &.info {
                    flex-grow: 1;
                    transform: translateX(0);
                }
                &.price {
                    width: 140px;
                }
                &.action {
                    text-align: center;
                }
            }
        }
        >.goods {
            padding: 20px;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 2px;
            margin-bottom: 30px;
            >li {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 10px 0;
                border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
                position: relative;
                padding-top: 50px;
                margin-bottom: 10px;
                >.order-info {
                    padding: 0 20px;
                    position: absolute;
                    height: 40px;
                    top: 0;
                    left: -20px;
                    right: -20px;
                    bottom: 0;
                    background: rgb(245, 245, 245);
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    >span {
                        font-size: 12px;
                        margin-right: 10px;
                        cursor: default;
                        &.number {
                            font-weight: 700;
                        }
                        &:nth-child(2) {
                            margin-right: 0;
                        }
                    }
                }
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
                            font-size: 12px;
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
                        padding-left: 0.5em;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    &.total {
                        font-weight: 700;
                        cursor: default;
                    }
                    &.action {
                        >a {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 4px 0;
                            color: rgba(0, 0, 0, 0.65);
                            font-size: 12px;
                            text-align: center;
                            &:hover {
                                text-decoration: underline;
                                color: #f10215;
                            }
                            &.delivery {
                                background: #1890ff;
                                color: rgba(255, 255, 255, 0.85);
                                border-radius: 2px;
                                &:hover {
                                    text-decoration: none;
                                }
                            }
                            >.icon {
                                width: 16px;
                                height: 16px;
                                margin-right: 4px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>