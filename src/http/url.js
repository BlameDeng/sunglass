const prefix = 'http://localhost:8989'
const URL = {
    newarrival: `${prefix}/api/newarrival`,
    login: `${prefix}/auth/login`,
    check: `${prefix}/auth/check`,
    logout: `${prefix}/auth/logout`,
    patchPassword: `${prefix}/auth/patchpassword`,
    patchProfile: `${prefix}/auth/patchprofile`,
    patchAddress: `${prefix}/auth/patchaddress`,
}
export default URL