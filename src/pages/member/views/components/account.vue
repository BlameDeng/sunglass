<template>
    <div class="account">
        <div class="title-wrapper">
            <h4 class="title" :class="{active:currentTab==='password'}">
                <span @click="onClickTab('password')">
                    修改密码
                </span>
            </h4>
            <h4 class="title" :class="{active:currentTab==='address'}">
                <span @click="onClickTab('address')">
                    我的收货地址
                </span>
            </h4>
        </div>
        <div class="password" v-if="currentTab==='password'">
            <p>
                <label>新密码：</label>
                <sun-input style="width:240px;" type="password"></sun-input>
            </p>
            <p>
                <label>确认新密码：</label>
                <sun-input style="width:240px;" type="password"></sun-input>
            </p>
        </div>
        <div class="address" v-else>
            <p>
                <label>收货人：</label>
                <sun-input style="width:200px;"></sun-input>
            </p>
            <p>
                <label>电话号码：</label>
                <sun-input style="width:200px;"></sun-input>
            </p>
            <p>
                <label>地址信息：</label>
                <sun-input style="width:500px;" placeholder="省/市/区"></sun-input>
            </p>
            <p>
                <label>详细地址：</label>
                <sun-input style="width:500px;" placeholder="详细地址，如：门牌、街道、村镇"></sun-input>
            </p>
        </div>
        <div class="btn" role="button">保存</div>
    </div>
</template>
<script>
    import sunInput from '@/components/input.vue'
    export default {
        name: 'Account',
        mixins: [],
        components: { sunInput },
        props: {},
        data() {
            return { currentTab: 'password' }
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        beforedestroy() {},
        methods: {
            onClickTab(tab) {
                this.currentTab = tab
            }
        }
    }
</script>
<style scoped lang="scss">
    .account {
        border: 1px solid rgba(0, 0, 0, .15);
        border-radius: 2px;
        >.title-wrapper {
            display: flex;
            justify-content: flex-start;
            >.title {
                border-bottom: 1px solid rgba(0, 0, 0, .15);
                padding-bottom: 5px;
                padding-left: 20px;
                cursor: default;
                user-select: none;
                >span {
                    padding: 4px 0;
                }
                &:last-child {
                    flex-grow: 1;
                }
                &.active {
                    color: #f10215;
                }
            }
        }
        >.password, >.address {
            margin-left: 20px;
            padding: 20px 0;
            border-bottom: 1px solid rgba(0, 0, 0, .15);
            >p {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                >label {
                    width: 6em;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    &:not(:first-child) {
                        width: 3em;
                    }
                }
            }
        }
        >.btn {
            margin: 20px 80px;
            width: 80px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background: lighten(#f10215, 20%);
            color: rgba(255, 255, 255, .85);
            cursor: pointer;
            user-select: none;
            border-radius: 2px;
            &:hover {
                background: lighten(#f10215, 10%);
            }
        }
    }
</style>