<template>
    <div class="sun-sku">
        <div class="show-img">
            <img :src="goods.attributes.cover" v-if="currentImg==='cover'">
            <img :src="goods.attributes.feature" v-else>
        </div>
        <div class="focus-img">
            <div class="cover" @mouseenter="currentImg='cover'" :class="{active:currentImg==='cover'}">
                <img :src="goods.attributes.cover">
            </div>
            <div class="feature" @mouseenter="currentImg='feature'" :class="{active:currentImg==='feature'}">
                <img :src="goods.attributes.feature">
            </div>
        </div>
        <div class="goods-price">
            <div class="price">
                <span>￥</span><span class="number">{{goods.attributes.price}}</span><span>.00</span>
            </div>
            <div class="origin-price" v-if="goods.attributes.price<goods.attributes.originPrice">
                <span>￥{{goods.attributes.originPrice}}.00</span>
            </div>
        </div>
        <div class="title">
            {{goods.attributes.title}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'SunSku',
        mixins: [],
        components: {},
        props: {
            goods: {
                type: Object,
                required: true
            }
        },
        data() {
            return { currentImg: 'cover' }
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        beforedestroy() {},
        methods: {}
    }
</script>
<style scoped lang="scss">
    .sun-sku {
        padding: 10px 0;
        >.show-img {
            margin: 0 auto;
            width: 200px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            >img {
                width: 200px;
                border-radius: 2px;
            }
        }
        >.focus-img {
            margin: 10px auto;
            width: 200px;
            height: 32px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            >div {
                width: 34px;
                height: 34px;
                display: flex;
                padding: 1px;
                justify-content: flex-start;
                align-items: center;
                border: 1px solid transparent;
                border-radius: 2px;
                margin-right: 2px;
                >img {
                    width: 30px;
                    border-radius: 2px;
                }
                &.active {
                    border: 1px solid #f10215;
                }
            }
        }
        >.goods-price {
            margin: 10px auto;
            width: 200px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            >.price {
                cursor: default;
                margin-right: 4px;
                >span {
                    font-weight: 700;
                    font-size: 12px;
                    color: #f10215;
                    &.number {
                        font-size: 18px;
                    }
                }
            }
            >.origin-price {
                cursor: default;
                >span {
                    font-size: 12px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, .45);
                    text-decoration: line-through;
                }
            }
        }
        >.title {
            cursor: default;
            margin: 10px auto;
            width: 200px;
            font-size: 12px;
            height: 60px;
        }
        &:hover {
            box-shadow: 2px 0 8px rgba(0, 0, 0, .15);
        }
    }
</style>