<template>
    <div class="category">
        <x-waterfall v-if="allGoods&&allGoods.length" :width="220" :source="allGoods">
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
            return {}
        },
        computed: {
            ...mapState({
                allGoods: state => state.allGoods
            })
        },
        watch: {},
        created() {
            !this.allGoods && this.fetchGoods({ type: 'all' })
                .then(res => {
                    this.setAllGoods(res.data)
                })
        },
        mounted() {

        },
        beforedestroy() {},
        methods: {
            ...mapMutations(['setAllGoods']),
            ...mapActions(['fetchGoods'])
        }
    }
</script>
<style scoped lang="scss">
    .category {
        width: 1200px;
        margin: 0 auto;
    }
</style>