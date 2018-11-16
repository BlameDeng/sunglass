<template>
    <div class="user">
        <nav class="user-navbar">
            <div class="user-avatar">
                <x-icon name="avatar" class="icon"></x-icon>
                <span v-if="user">{{user.nickyname||user.username}}</span>
            </div>
            <div class="index" @click="changeComponent('Index')" :class="{active:currentComponent==='Index'}">我的首页</div>
            <div class="account" @click="changeComponent('Account')" :class="{active:currentComponent==='Account'}">账户设置</div>
        </nav>
        <main class="main">
            <keep-alive>
                <component :is="currentComponent"></component>
            </keep-alive>
        </main>
    </div>
</template>
<script>
    import xIcon from '@/components/icon/icon.vue'
    import Index from './components/index.vue'
    import Account from './components/account.vue'
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        name: 'User',
        components: { xIcon, Index, Account },
        data() {
            return { currentComponent: 'Index' }
        },
        computed: {
            ...mapState({
                user: state => state.user,
                recommendGoods: state => state.recommendGoods
            })
        },
        watch: {
            user: {
                handler(val) {
                    if (val) {
                        this.fetchGoods({ type: 'recommend', gender: this.user.gender || 'unknown' })
                            .then(res => {
                                this.setRecommendGoods(res.data)
                            })
                            .catch(error => {})
                    }
                },
                deep: true,
                immediate: true
            }
        },
        mounted() {
            document.title='账户管理'
        },
        methods: {
            ...mapMutations(['setRecommendGoods']),
            ...mapActions(['fetchGoods']),
            changeComponent(name) {
                this.currentComponent = name
            }
        }
    }
</script>
<style scoped lang="scss">
    .user {
        width: 1200px;
        margin: 0 auto;
        >.user-navbar {
            width: 800px;
            height: 70px;
            margin: 10px auto;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border: 1px solid rgba(0, 0, 0, .15);
            border-radius: 2px;
            >.user-avatar {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                cursor: default;
                >.icon {
                    width: 40px;
                    height: 40px;
                }
                >span {
                    font-size: 16px;
                    margin-left: 4px;
                }
            }
            >.index, >.account {
                margin-left: 30px;
                cursor: pointer;
                user-select: none;
                &:hover {
                    color: #f10215;
                }
                &.active {
                    color: #f10215;
                }
            }
        }
        >.main {
            width: 800px;
            margin: 0 auto;
        }
    }
</style>