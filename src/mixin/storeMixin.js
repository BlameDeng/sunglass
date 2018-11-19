import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState({
            newArrival: state => state.newArrival,
            allProducts: state => state.allProducts,
            singleProduct: state => state.singleProduct,
            recommend: state => state.recommend,
            isLogin: state => state.isLogin,
            user: state => state.user,
            cart: state => state.cart
        })
    },
    methods: {
        ...mapMutations([
            'setLogin',
            'setUser'
        ]),
        ...mapActions([
            'getNewArrival',
            'getAllProducts',
            'getSingleProduct',
            'getRecommend',
            'check',
            'login',
            'logout',
            'changePassword',
            'changeProfile',
            'addToCart'
        ])
    }
}