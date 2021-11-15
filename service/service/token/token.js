//生成token与验证
// 1.jsonwebtoken
// npm install jsonwebtoken --save
// * 生成token的方法 sign
// * 验证token的方法 verify

// 2.express-jwt
// npm install express-jwt --save
// * 验证token是否过期并规定那些路由不需要验证 express-jwt({})
let jwt = require('jsonwebtoken');
let jwtScrect = 'zgs_first_token';  //签名

//登录接口 生成token的方法
let setToken = function (account, password) {
    return new Promise((resolve, reject) => {
        //expiresln 设置token过期的时间
        //{ account: account, password: password } 传入需要解析的值（ 一般为用户名，用户id 等）
        const token = jwt.sign({ account: account, password: password }, jwtScrect, { expiresIn: '24h' });
        resolve(token)
        reject()
    })
}
//各个接口需要验证token的方法
let getToken = function (token) {
    return new Promise((resolve, reject) => {
        if (!token) {
            console.log('token是空的')
            reject({
                error: 'token 是空的'
            })
        }
        else {
            let info = jwt.verify(token.split(' ')[1], jwtScrect);
            resolve(info);  //解析返回的值（sign 传入的值）
        }
    })
}

module.exports = {
    setToken,
    getToken
}