const prefix = 'http://localhost:8080'
// const prefix=''
const URL = {
    patchProfile: `${prefix}/auth/patchprofile`,
    patchAddress: `${prefix}/auth/patchaddress`,
    pay: `${prefix}/auth/pay`,
    fetchGoods: `${prefix}/api/fetchgoods`,
    addToCart: `${prefix}/api/addtocart`,
    changeCount: `${prefix}/api/changecount`,
    removeGoods: `${prefix}/api/removegoods`,
    delivery: `${prefix}/api/delivery`,
    evaluate: `${prefix}/api/evaluate`,
    record: `${prefix}/api/record`,
    goodsEvaluation: `${prefix}/api/goodsevaluation`,
    destroyRecord: `${prefix}/api/destroyrecord`,
    newArrival: `${prefix}/product/newarrival`,
    allProducts: `${prefix}/product/allproducts`,
    singleProduct: `${prefix}/product/singleProduct`,
    login: `${prefix}/auth/login`,
    check: `${prefix}/auth/check`,
    logout: `${prefix}/auth/logout`,
    changePassword: `${prefix}/auth/changepassword`,
    changeProfile: `${prefix}/auth/changeprofile`,
}
export default URL