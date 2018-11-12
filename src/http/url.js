const prefix = 'http://localhost:8989'
const URL = {
    newarrival: `${prefix}/api/newarrival`,
    login: `${prefix}/auth/login`,
    check: `${prefix}/auth/check`,
    logout: `${prefix}/auth/logout`,
    patchpassword: `${prefix}/auth/patchpassword`,
}
export default URL