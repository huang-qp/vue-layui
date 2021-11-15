let express = require('express');
let router = express.Router();
let connection = require('./public')
let async = require('async')
//引入token 
let verToken = require('../token/token')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
    console.log(next);
});
//登陆
router.post('/backstage/loginIndex/loginData', (req, res, next) => {
    console.log(next);
    // 前端请求传递的参数
    let account = req.body['account']
    let password = req.body['password']
    // sql语句获取数据库中账号密码
    let sqlAccountAndPassword = 'SELECT * FROM `user`';
    // sql语句获取一级菜单
    let sqlSaidMenuFirstLevel = 'SELECT * FROM `said_menu_first_level`';
    // sql语句获取二级菜单
    let sqlSaidMenuSecondLevel = 'SELECT * FROM `said_menu_second_level`';
    // 查询数据 connection.query(sql,callback(err,result))
    connection.query(sqlAccountAndPassword, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR]：', err.message);
        }
        //遍历数据库并与前端登陆输入的账号密码做对比
        let accountPassword = result.some(function (item) {
            return item.account === account && item.password === password
        })
        if (accountPassword) {
            //查询一级菜单
            connection.query(sqlSaidMenuFirstLevel, function (errFirst, resultFirst) {
                if (errFirst) {
                    console.log('[SELECT ERROR]：', err.message);
                }
                let resultFirstData = JSON.parse(JSON.stringify(resultFirst))
                // 查询二级菜单
                connection.query(sqlSaidMenuSecondLevel, function (errSecond, resultSecond) {
                    if (errSecond) {
                        console.log('[SELECT ERROR]：', err.message);
                    } else {
                        let resultSecondData = JSON.parse(JSON.stringify(resultSecond))
                        // 处理nodejs异步
                        // node异步执行的特点总是在for循环开始运行的时候重新开启一个线程来执行下一步操作，导致接口返回的数据为空
                        async.each(resultFirstData, function (FirstItem) {
                            FirstItem.children = []
                            async.each(resultSecondData, function (SecondItem) {
                                SecondItem.children = []
                                if (FirstItem.menuId === SecondItem.parentId) {
                                    FirstItem.children.push(SecondItem)
                                }
                            })
                        })
                        //调用生成token的方法
                        verToken.setToken(account,password).then(token => {
                            console.log(resultFirstData);
                            // 返回结果
                            res.send({
                                result: {
                                    code: '000000',
                                    data: resultFirstData,
                                    token: token
                                }
                            })
                        })

                    }

                })
            })
        } else {
            res.send({
                result: {
                    code: '123456',
                    codeReason: '账号密码错误'
                }
            })
        }
    })
})
module.exports = router;
