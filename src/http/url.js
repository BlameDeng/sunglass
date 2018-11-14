const prefix = 'http://localhost:8989'
const URL = {
    login: `${prefix}/auth/login`,
    check: `${prefix}/auth/check`,
    logout: `${prefix}/auth/logout`,
    patchPassword: `${prefix}/auth/patchpassword`,
    patchProfile: `${prefix}/auth/patchprofile`,
    patchAddress: `${prefix}/auth/patchaddress`,
    fetchGoods: `${prefix}/api/fetchgoods`,
    addToCart: `${prefix}/api/addtocart`,
    changeCount: `${prefix}/api/changecount`,
    removeGoods: `${prefix}/api/removegoods`
}
export default URL