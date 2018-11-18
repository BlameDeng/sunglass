import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState({
            newArrival: state => state.newArrival,
            allProducts: state => state.allProducts,
            singleProduct: state => state.singleProduct,
            isLogin: state => state.isLogin,
            user: state => state.user
        })
    },
    methods: {
        ...mapMutations(['setLogin', 'setUser']),
        ...mapActions(['getNewArrival', 'getAllProducts', 'check', 'login', 'logout', 'changePassword', 'changeProfile', 'getSingleProduct'])
    }
}