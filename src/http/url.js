const prefix = 'http://localhost:8989'
const URL = {
    login: `${prefix}/auth/login`,
    check: `${prefix}/auth/check`,
    logout: `${prefix}/auth/logout`,
    patchPassword: `${prefix}/auth/patchpassword`,
    patchProfile: `${prefix}/auth/patchprofile`,
    patchAddress: `${prefix}/auth/patchaddress`,
    newArrival: `${prefix}/api/newarrival`,
    addToCart: `${prefix}/api/addtocart`,
    changeCount: `${prefix}/api/changecount`,
}
export default URL