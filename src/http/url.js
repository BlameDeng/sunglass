const prefix = 'http://localhost:8989'
const URL = {
    login: `${prefix}/auth/login`,
    check: `${prefix}/auth/check`,
    logout: `${prefix}/auth/logout`,
    patchPassword: `${prefix}/auth/patchpassword`,
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
    destroyRecord: `${prefix}/api/destroyrecord`
}
export default URL