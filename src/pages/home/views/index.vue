<template>
    <div class="index">
        <div class="slides">
            <sun-slides :duration="5000">
                <div class="banner">
                    <img src="https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/banner1.jpg" />
                </div>
                <div class="banner">
                    <img src="https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/banner2.jpg" />
                </div>
                <div class="banner">
                    <img src="https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/banner3.jpg" />
                </div>
            </sun-slides>
        </div>
        <div class="new-arrival">
            <h1 class="title">New Arrival</h1>
            <div class="goods-wrapper">
                <template v-if="newArrival&&newArrival.length">
                    <div class="goods" v-for="goods in newArrival" :key="goods.id">
                        <h2 class="name">{{goods.attributes.name}}</h2>
                        <img :src="goods.attributes.feature">
                        <span class="price">￥{{goods.attributes.price.toFixed(2)}}</span>
                        <div class="add" @click="onAdd(goods)">
                            <x-icon name="cart" class="icon"></x-icon>
                            添加到购物车
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="lorem">
            <div class="upper">
                <div class="img-wrapper">
                    <img src="https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/layer1.png">
                </div>

                <div class="text">
                    <h2>The Difference is<br>
                        in The Lens</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div class="img-wrapper">
                    <img src="https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/layer2.png">
                </div>
            </div>
            <div class="lower">
                <div class="cube"></div>
                <div class="img-wrapper">
                    <img src="https://sunglassstore.oss-cn-hangzhou.aliyuncs.com/banners/layer3.png">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import xIcon from '@/components/icon/icon.vue'
    import sunSlides from '@/components/slides.vue'
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        name: 'Index',
        mixins: [],
        components: { xIcon, sunSlides },
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapState({
                newArrival: state => state.newArrival,
                isLogin: state => state.isLogin,
                user: state => state.user
            })
        },
        watch: {},
        created() {},
        mounted() {},
        beforedestroy() {},
        methods: {
            ...mapMutations(['setUser']),
            ...mapActions(['addToCart']),
            onAdd(goods) {
                if (!this.isLogin) {
                    window.open('/member.html', '_blank')
                    return
                }
                this.addToCart({ count: 1, ...goods })
                    .then(res => {
                        this.setUser(res.data)
                    })
                    .catch(error => {
                        if (error.status === 401) {
                            window.open(`/member.html`, '_blank')
                        }
                    })
            }
        }
    }
</script>
<style scoped lang="scss">
    .index {
        width: 100%;
        >.slides {
            width: 100%;
            .banner {
                width: 100%;
                flex-shrink: 0;
                >img {
                    width: 1200px;
                    height: 675px;
                }
            }
        }
        >.new-arrival {
            width: 70%;
            min-width: 650px;
            margin: -100px auto 0;
            background: #fff;
            position: relative;
            padding: 20px;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            >.title {
                text-align: center;
                font-weight: 600;
                cursor: default;
                user-select: none;
            }
            >.goods-wrapper {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                >.goods {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    padding-top: 20px;
                    box-shadow: none;
                    transition: all 0.2s linear;
                    >.name {
                        cursor: default;
                    }
                    >img {
                        width: 200px;
                        margin: 40px 0;
                    }
                    >.price {
                        font-size: 16px;
                        font-weight: 600;
                        cursor: default;
                    }
                    >.add {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        padding: 15px 0;
                        cursor: pointer;
                        margin-top: 20px;
                        background: transparent;
                        color: transparent;
                        transition: all 0.2s linear;
                        user-select: none;
                        box-shadow: none;
                        >.icon {
                            width: 18px;
                            height: 18px;
                            margin-right: 2px;
                        }
                    }
                    &:hover {
                        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
                        >.add {
                            background: #f10215;
                            color: #fff;
                            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
                        }
                    }
                }
            }
        }
        >.lorem {
            margin: 40px 0;
            >.upper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: #fff;
                >.img-wrapper {
                    width: 280px;
                    overflow: hidden;
                    flex-shrink: 0;
                    >img {
                        border-radius: 2px;
                        width: 280px;
                        transition: all 0.2s linear;
                        &:hover {
                            transform: scale(1.2);
                        }
                    }
                }

                >.text {
                    padding: 0 30px;
                    >h2 {
                        text-align: center;
                        font-weight: 600;
                        cursor: default;
                    }
                    >p {
                        text-align: center;
                        font-weight: 500;
                        cursor: default;
                    }
                }
            }
            >.lower {
                text-align: center;
                width: 500px;
                position: relative;
                padding-top: 25px;
                margin: -70px auto 0;
                >.cube {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 200px;
                    height: 150px;
                    background: lighten(#f10215, 20%);
                }
                >.img-wrapper {
                    width: 450px;
                    overflow: hidden;
                    >img {
                        border-radius: 2px;
                        width: 450px;
                        position: relative;
                        transition: all 0.2s linear;
                        &:hover {
                            transform: scale(1.2);
                        }
                    }
                }
            }
        }
    }
</style>