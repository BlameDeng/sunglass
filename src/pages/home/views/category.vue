<template>
    <div class="category">
        <x-waterfall v-if="goodsList&&goodsList.length" :width="220" :source="goodsList" @scroll-bottom="scrollBottom">
            <div slot-scope="slotProps">
                <sun-sku :goods="slotProps.prop"></sun-sku>
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
        mixins: [],
        components: { xWaterfall, sunSku },
        props: {},
        data() {
            return { tab: '' }
        },
        computed: {
            ...mapState({
                allGoods: state => state.allGoods
            }),
            goodsList() {
                if (!this.allGoods) { return null }
                if (this.tab === 'male') {
                    return this.allGoods.filter(goods => goods.attributes.category === 'male')
                }
                if (this.tab === 'female') {
                    return this.allGoods.filter(goods => goods.attributes.category === 'female')
                }
                if (this.tab === 'discount') {
                    return this.allGoods.filter(goods => goods.attributes.price < goods.attributes.originPrice)
                }
                return this.allGoods
            }
        },
        watch: {
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
        mounted() {},
        beforedestroy() {},
        methods: {
            ...mapMutations(['setAllGoods']),
            ...mapActions(['fetchGoods']),
            scrollBottom() {
                console.log(1);

            }
        }
    }
</script>
<style scoped lang="scss">
    .category {
        width: 1200px;
        margin: 0 auto;
    }
</style>