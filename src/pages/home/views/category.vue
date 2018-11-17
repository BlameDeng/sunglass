<template>
    <div class="category">
        <x-waterfall v-if="goodsList&&goodsList.length" :width="200" :source="goodsList" @scroll-bottom="scrollBottom">
            <div slot-scope="slotProps">
                <sun-sku :goods="slotProps.prop" @add-to-cart="handleAddToCart($event)"></sun-sku>
            </div>
        </x-waterfall>
    </div>
</template>
<script>
    import xWaterfall from '@/components/waterfall.vue'
    import sunSku from '@/components/sku.vue'
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        name: 'Category',
        components: { xWaterfall, sunSku },
        data() {
            return { tab: '', fakeAllGoods: null, timerId: null }
        },
        computed: {
            ...mapState({
                allGoods: state => state.allGoods
            }),
            goodsList() {
                if (!this.fakeAllGoods) { return null }
                if (this.tab === 'male') {
                    return this.fakeAllGoods.filter(goods => goods.attributes.category === 'male')
                }
                if (this.tab === 'female') {
                    return this.fakeAllGoods.filter(goods => goods.attributes.category === 'female')
                }
                if (this.tab === 'discount') {
                    return this.fakeAllGoods.filter(goods => goods.attributes.price < goods.attributes.originPrice)
                }
                return this.fakeAllGoods
            }
        },
        watch: {
            allGoods: {
                handler(val) {
                    if (val) {
                        this.fakeAllGoods = val
                    }
                },
                deep: true,
                immediate: true
            },
            $route: {
                handler(val) {
                    this.tab = val.query.tab
                },
                deep: true,
                immediate: true
            }
        },
        created() {
            !this.allGoods && this.fetchGoods({ type: 'all' })
                .then(res => {
                    this.setAllGoods(res.data)
                })
        },
        beforedestroy() {
            if (this.timerId) {
                window.clearTimeout(this.timerId)
                this.timerId = null
            }
        },
        methods: {
            ...mapMutations(['setAllGoods', 'setUser']),
            ...mapActions(['fetchGoods', 'addToCart']),
            scrollBottom() {
                if (this.timerId || this.fakeAllGoods.length > 80) { return }
                if (this.fakeAllGoods && this.allGoods) {
                    this.timerId = setTimeout(() => {
                        this.fakeAllGoods = this.fakeAllGoods.concat(this.allGoods)
                        if (this.timerId) {
                            window.clearTimeout(this.timerId)
                            this.timerId = null
                        }
                    }, 2000)
                }
            },
            handleAddToCart(goods) {
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
    .category {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
</style>