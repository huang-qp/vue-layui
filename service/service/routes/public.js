// 引入mysql
let mysql = require('mysql')
// 创建连接配置 createConnection
let connection = mysql.createConnection({
    host: 'localhost', //数据库地址
    port: '3306',//端口号
    user: 'root',//用户名
    password: '',//密码
    database: 'account_password'//数据库名称
});
//建立连接
connection.connect();

module.exports  = connection
