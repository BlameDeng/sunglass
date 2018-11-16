import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState({
            newArrival: state => state.newArrival,
            allProducts: state => state.allProducts,
            singleProduct: state => state.singleProduct,
        })
    },
    methods:{
        ...mapMutations([]),
        ...mapActions(['getNewArrival'])
    }
}