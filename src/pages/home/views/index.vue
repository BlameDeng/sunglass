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
    </div>
</template>
<script>
    import xIcon from '../../../components/icon/icon.vue'
    import sunSlides from '../../../components/slides.vue'
    export default {
        name: 'Index',
        mixins: [],
        components: { xIcon, sunSlides },
        props: {},
        data() {
            return {}
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
    .index {
        width: 100%;
        >.slides {
            width: 100%;
            .banner {
                width: 100%;
                flex-shrink: 0;
                >img {
                    width: 100%;
                }
            }
        }
    }
</style>