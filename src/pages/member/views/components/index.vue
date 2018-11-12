<template>
    <div class="index">
        <div class="title-wrapper">
            <h4 class="title">
                <span @click="onClickTab('pay')">
                    待付款
                </span>
            </h4>
            <h4 class="title">
                <span @click="onClickTab('delivery')">
                    待发货
                </span>
            </h4>
            <h4 class="title">
                <span @click="onClickTab('takeDelivery')">
                    待收货
                </span>
            </h4>
            <h4 class="title">
                <span @click="onClickTab('evaluation')">
                    待评价
                </span>
            </h4>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Index',
        mixins: [],
        components: {},
        props: {},
        data() {
            return {}
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        beforedestroy() {},
        methods: {
            onClickTab(tab) {

            }
        }
    }
</script>
<style scoped lang="scss">
    .index {
        border: 1px solid rgba(0, 0, 0, .15);
        border-radius: 2px;
        >.title-wrapper {
            display: flex;
            justify-content: flex-start;
            >.title {
                border-bottom: 1px solid rgba(0, 0, 0, .15);
                padding-bottom: 5px;
                padding-left: 20px;
                padding-right: 40px;
                cursor: pointer;
                user-select: none;
                >span {
                    padding: 4px 0;
                }
                &:last-child {
                    flex-grow: 1;
                }
                &:hover {
                    color: #f10215;
                }
            }
        }
    }
</style>