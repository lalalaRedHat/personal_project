/*
 * @姓名           : 李洪毅
 * @Date         : 2020-09-13 17:11:42
 * @最后编辑         : 李洪毅
 * @LastEditTime : 2020-09-13 17:50:29
 * @FilePath     : \myblogd:\WEB2007\pro\clh\index.js
 */
//引入express框架
const express = require('express');
//引入中间件body-parser
const bodyParser=require('body-parser');
//引入路由器




//创建服务器
const app=express()
//设置端口
app.listen(8080);
//托管静态资源
app.use(express.static('./public'));




//使用body-parser中间件
app.use(bodyParser.urlencoded({
    extended: true
}));




//挂载路由器


