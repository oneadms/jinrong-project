//只要是未登录状态，想要跳转到名单内的路径时，直接跳到登录页。
// 页面白名单，不受拦截
const whiteList = [
    '/pages/login/login',
    '/pages/reg/reg'
]
const user = uniCloud.importObject('user')
async function hasPermission (url) {
	
    let token = uni.getStorageSync("token")
    if (!token) {
        return false;
    }
     let resp =await user.userInfo(token);
    console.log(resp)
    const {code, msg, data} = resp;
    const isLogin = code == 0;
    if (whiteList.indexOf(url) !== -1 || isLogin) {
        uni.setStorageSync("userInfo",data)
        return true
    }
    return false
}
uni.addInterceptor('navigateTo', {
    // 页面跳转前进行拦截, invoke根据返回值进行判断是否继续执行跳转
    invoke (e) {
        if(!hasPermission(e.url)){
            uni.reLaunch({
                url: '/pages/login/login'
            })
            return false
        }
        return true
    },
    success (e) {
    }
})
uni.addInterceptor('switchTab', {
    // tabbar页面跳转前进行拦截
    invoke (e) {
        if(!hasPermission(e.url)){
            uni.reLaunch({
                url: '/pages/login/login'
            })
            return false
        }
        return true
    },
    success (e) {
    }
})