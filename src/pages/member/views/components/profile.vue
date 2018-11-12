<template>
    <div class="profile">
        <h4 class="title">个人资料</h4>
        <div class="user-info">
            <p>
                <label>用户名：</label>
                {{user.username}}
            </p>
            <p>
                <label>昵称：</label>
                <sun-input style="width:240px;" v-model="user.nickyname"></sun-input>
            </p>
            <p>
                <label>性别：</label>
                <label><input type="radio" value="male" v-model="user.gender">男</label>
                <label><input type="radio" value="female" v-model="user.gender">女</label>
            </p>
        </div>
        <div class="btn" role="button" @click="onSave">保存</div>
    </div>
</template>
<script>
    import sunInput from '@/components/input.vue'
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        name: 'Profile',
        mixins: [],
        components: { sunInput },
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapState({
                user: state => state.user
            })
        },
        watch: {},
        created() {},
        mounted() {},
        beforedestroy() {},
        methods: {
            ...mapMutations(['setUser']),
            ...mapActions(['patchProfile']),
            onSave() {
                this.patchProfile({ nickyname: this.user.nickyname, gender: this.user.gender })
                    .then(res => {
                        this.setUser(res.data)
                        this.$success({ message: res.msg })
                    })
                    .catch(error => {
                        this.$error({ message: error.msg })
                    })
            }
        }
    }
</script>
<style scoped lang="scss">
    .profile {
        border: 1px solid rgba(0, 0, 0, .15);
        border-radius: 2px;
        >.title {
            border-bottom: 1px solid rgba(0, 0, 0, .15);
            padding-bottom: 5px;
            padding-left: 20px;
            cursor: default;
            user-select: none;
        }
        >.user-info {
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