<template>
    <div class="sun-sku">
        <div class="show-img">
            <img :src="currentImg">
        </div>
        <div class="focus-img">
            <div class="cover" @mouseenter="currentImg=goods.attributes.cover" :class="{active:currentImg===goods.attributes.cover}">
                <img :src="goods.attributes.cover">
            </div>
            <div class="feature" @mouseenter="currentImg=goods.attributes.feature" :class="{active:currentImg===goods.attributes.feature}">
                <img :src="goods.attributes.feature">
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
            return { currentImg: '' }
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {
            if (Math.random() > 0.5) {
                this.currentImg = this.goods.attributes.cover
            } else {
                this.currentImg = this.goods.attributes.feature
            }
        },
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
                width: 32px;
                height: 32px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border: 1px solid transparent;
                border-radius: 2px;
                >img {
                    width: 30px;
                    border-radius: 2px;
                }
                &.active {
                    border: 1px solid #f10215;
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