<template>
    <div class="cart">
        <div class="title">
            我的购物车
        </div>
        <ul class="title-bar">
            <li class="label" @click="selectAll">
                <label :class="{selected:allSelected}"></label>
                <span>全选</span>
            </li>
            <li class="info">商品信息</li>
            <li>单价</li>
            <li>数量</li>
            <li>金额</li>
            <li>操作</li>
        </ul>
        <ul class="goods">
            <template v-if="user&&user.cart&&user.cart.length">
                <li v-for="goods in user.cart" :key="goods.id">
                    <div class="label">
                        <label @click="onGoodsLabel(goods.id)" :class="{selected:selectedIds&&selectedIds.indexOf(goods.id)>-1}"></label>
                    </div>
                    <div class="info">
                        <img :src="goods.attributes.cover">
                        <span>
                            {{goods.attributes.title}}
                        </span>
                    </div>
                    <div class="price">￥{{goods.attributes.price.toFixed(2)}}</div>
                    <div class="count">
                        <span class="minus" @click="changeGoodsCount(goods,-1)" :class="{disabled:goods.count<=1}">-</span>
                        <input type="text" v-model.number="goods.count" @blur="changeGoodsCount(goods)">
                        <span class="plus" @click="changeGoodsCount(goods,1)">+</span>
                    </div>
                    <div class="total">￥{{(goods.attributes.price*goods.count)&&(goods.attributes.price*goods.count).toFixed(2)||'0.00'}}</div>
                    <div class="action">
                        <span @click="onClickDelete(goods)">删除</span>
                    </div>
                </li>
            </template>
        </ul>
        <ul class="action-bar">
            <li class="label" @click="selectAll">
                <label :class="{selected:allSelected}"></label>
                <span>全选</span>
            </li>
            <li class="info"></li>
            <li>已选商品<span class="number">{{(selectedIds&&selectedIds.length)||0}}</span>件</li>
            <li>合计<span class="number">{{'￥'+total.toFixed(2)}}</span></li>
            <li class="pay" :class="{disabled:!selectedIds||!selectedIds.length}">结 算</li>
        </ul>
    </div>
</template>
<script>
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        name: 'Cart',
        mixins: [],
        components: {},
        props: {},
        data() {
            return { selectedIds: null }
        },
        computed: {
            ...mapState({
                user: state => state.user
            }),
            total() {
                if (this.selectedIds && this.selectedIds.length) {
                    let selectedGoods = []
                    this.user.cart.forEach(goods => {
                        if (this.selectedIds.indexOf(goods.id) > -1) {
                            selectedGoods.push(goods)
                        }
                    })
                    return selectedGoods.reduce((prev, current) => {
                        return prev + current.attributes.price * current.count
                    }, 0)
                } else {
                    return 0
                }
            },
            allSelected() {
                if (!this.selectedIds||!this.user.cart.length) { return false }
                if (this.selectedIds.length !== this.user.cart.length) {
                    return false
                }
                let ids1 = JSON.parse(JSON.stringify(this.selectedIds)).sort()
                let ids2 = this.user.cart.map(goods => goods.id).sort()
                let result = true
                for (let i = 0; i < ids2.length; i++) {
                    if (ids1[i] !== ids2[i]) {
                        result = false
                        break
                    }
                }
                return result
            }
        },
        watch: {},
        created() {},
        mounted() {},
        beforedestroy() {},
        methods: {
            ...mapMutations(['setUser']),
            ...mapActions(['changeCount', 'removeGoods']),
            changeGoodsCount(goods, payload) {
                if (payload) {
                    if (goods.count + payload <= 0) { return }
                    goods.count += payload
                } else {
                    if (goods.count < 0 || !goods.count) { goods.count = 1 }
                }
                this.changeCount(goods)
                    .then(res => {
                        this.setUser(res.data)
                    })
                    .catch(error => {
                        this.$error({ message: error.msg })
                    })
            },
            onClickDelete(goods) {
                this.removeGoods({ id: goods.id })
                    .then(res => {
                        this.selectedIds ? this.selectedIds = this.selectedIds.filter(id => id !== goods.id) : ''
                        this.setUser(res.data)
                    })
                    .catch(error => {
                        this.$error({ message: error.msg })
                    })
            },
            onGoodsLabel(id) {
                this.selectedIds = this.selectedIds || []
                let index = this.selectedIds.indexOf(id)
                if (index === -1) {
                    this.selectedIds.push(id)
                } else {
                    this.selectedIds.splice(index, 1)
                }
            },
            selectAll() {
                if (!this.user.cart.length) {
                    return
                }
                if (this.allSelected) {
                    this.selectedIds = null
                } else {
                    this.selectedIds = this.selectedIds || []
                    this.user.cart.forEach(goods => {
                        if (this.selectedIds.indexOf(goods.id) === -1) {
                            this.selectedIds.push(goods.id)
                        }
                    })
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .cart {
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
                &.label {
                    width: 60px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    cursor: pointer;
                    >label {
                        background: #fff;
                        display: block;
                        width: 14px;
                        height: 14px;
                        border-radius: 2px;
                        margin-right: 4px;
                        border: 1px solid rgba(0, 0, 0, 0.15);
                        cursor: pointer;
                        &.selected {
                            &::after {
                                content: '';
                                display: block;
                                width: 10px;
                                height: 5px;
                                border-left: 2px solid #f10215;
                                border-bottom: 2px solid #f10215;
                                transform: rotateZ(-50deg) translateX(-1px) translateY(2px);
                                pointer-events: none;
                            }
                        }
                    }
                    >span {
                        font-size: 12px;
                    }
                }
                &.info {
                    flex-grow: 1;
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
                >div {
                    width: 100px;
                    font-size: 12px;
                    &.label {
                        width: 60px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        >label {
                            background: #fff;
                            display: block;
                            width: 14px;
                            height: 14px;
                            border-radius: 2px;
                            margin-right: 2px;
                            border: 1px solid rgba(0, 0, 0, 0.15);
                            cursor: pointer;
                            &.selected {
                                &::after {
                                    content: '';
                                    display: block;
                                    width: 10px;
                                    height: 5px;
                                    border-left: 2px solid #f10215;
                                    border-bottom: 2px solid #f10215;
                                    transform: rotateZ(-50deg) translateX(-1px) translateY(2px);
                                    pointer-events: none;
                                }
                            }
                        }
                        >span {
                            font-size: 12px;
                        }
                    }
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
                            transform: translateX(-20px);
                        }
                        >span {
                            cursor: default;
                            font-size: 14px;
                        }
                    }
                    &.price {
                        font-weight: 700;
                        cursor: default;
                    }
                    &.count {
                        font-weight: 700;
                        cursor: default;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        >span {
                            display: flex;
                            justify-content: center;
                            align-content: center;
                            width: 24px;
                            height: 24px;
                            font-size: 14px;
                            background: rgba(0, 0, 0, 0.05);
                            cursor: pointer;
                            border-radius: 2px;
                            border: 1px solid transparent;
                            user-select: none;
                            &:hover {
                                color: #f10215;
                                border-color: #f10215;
                            }
                            &.disabled {
                                cursor: not-allowed;
                                color: rgba(0, 0, 0, 0.45);
                                &:hover {
                                    color: rgba(0, 0, 0, 0.45);
                                    border-color: transparent;
                                }
                            }
                        }
                        >input {
                            display: block;
                            width: 35px;
                            text-align: center;
                            font-size: 12px;
                            box-shadow: none;
                            border: 1px solid rgba(0, 0, 0, 0.15);
                            border-radius: 2px;
                            cursor: default;
                            &:focus {
                                outline: none;
                            }
                        }
                    }
                    &.total {
                        color: #f10215;
                        font-weight: 700;
                        cursor: default;
                    }
                    &.action {
                        >span {
                            font-size: 12px;
                            cursor: pointer;
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
        >.action-bar {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 30px 0 30px 20px;
            user-select: none;
            cursor: default;
            height: 30px;
            background: rgba(0, 0, 0, 0.05);
            margin: 10px 0 20px 0;
            >li {
                width: 130px;
                font-size: 12px;
                >span {
                    &.number {
                        font-size: 16px;
                        margin: 0 4px;
                        color: #f10215;
                        font-weight: 700;
                    }
                }
                &.label {
                    width: 60px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    cursor: pointer;
                    >label {
                        background: #fff;
                        display: block;
                        width: 14px;
                        height: 14px;
                        border-radius: 2px;
                        margin-right: 4px;
                        border: 1px solid rgba(0, 0, 0, 0.15);
                        cursor: pointer;
                        &.selected {
                            &::after {
                                content: '';
                                display: block;
                                width: 10px;
                                height: 5px;
                                border-left: 2px solid #f10215;
                                border-bottom: 2px solid #f10215;
                                transform: rotateZ(-50deg) translateX(-1px) translateY(2px);
                                pointer-events: none;
                            }
                        }
                    }
                    >span {
                        font-size: 12px;
                        &.number {
                            color: #f10215;
                            font-weight: 700;
                        }
                    }
                }
                &.info {
                    flex-grow: 1;
                }
                &.pay {
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    font-size: 18px;
                    color: rgba(255, 255, 255, .85);
                    background: #f10215;
                    border-top-right-radius: 2px;
                    border-bottom-right-radius: 2px;
                    cursor: pointer;
                    &.disabled {
                        background: #B0B0B0;
                        cursor: not-allowed;
                    }
                }
            }
        }
    }
</style>