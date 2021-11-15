let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
// 导入路由模块
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

//引入token插件
let verToken = require('./token/token')
let expressJwt = require('express-jwt')

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
//设置解析数据的
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// express.static( )是处理静态请求的，设置了public文件，public下所有文件都会以静态资料文件形式返回（如样式、脚本、图片素材等文件）
app.use(express.static(path.join(__dirname, 'public')));
//设置跨域访问
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
// 下面代码表示当用户使用/访问时，调用routes，即routes目录下的index.js文件，其中.js后缀省略，用/users访问时，调用routes目录下users.js文件
app.use('/', indexRouter);
app.use('/users', usersRouter);

//解析token获取用户信息
app.use(function (req, res, next) {
  let token = req.headers['X-TOKEN'];
  if (token === undefined) {
    next();
  } else {
    verToken.getToken(token).then((data) => {
      req.data = data;
      next();
    }).catch((error) => {
      console.log(error);
      next();
    })
  }
});

//验证token是否过期并规定那些路由不需要验证
app.use(expressJwt({
  secret: 'zgs_first_token',
  // 算法
  algorithms: ['HS256']
}).unless({
  path: ['/user/login', '/register','/']  //不需要验证的接口名称
}))

//token失效返回信息
app.use(function (err, req, res, next) {
  if (err.status === 401) {
    console.log(next);
    return res.status(401).send('token失效')
    //可以设置返回json 形式  res.json({message:'token失效'})
  }
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  console.log(next);
});




module.exports = app;
