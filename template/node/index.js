/**
 * Module dependencies.
 */
var express = require('express')
var proxy = require('http-proxy-middleware');
var path = require('path');
var port = 11199;

const proxyTable=require('../config/proxy-table.js');

/**
 * Configure proxy middleware
 */


 let proxy_list=[];

 function create_proxy(){
     for(let index in proxyTable){
        let obj={};
        obj.path=index;
        let options={
            // target: 'http://localhost:9017/',
            target: (function(){
                let port_t=(proxyTable[index].target.split(':'))[2];
                if(port_t){
                    let port =port_t.replace('/','');
                    return `http://localhost:${port}/`;
                }
                else{
                    return proxyTable[index].target;
                }
            })(),
            changeOrigin: proxyTable[index].changeOrigin,
            ws: true,
            pathRewrite: proxyTable[index].pathRewrite||{},
            proxyTimeout: 60000, //连接超时时间
        };
        obj.proxy=proxy(options);
        proxy_list.push(obj);
     }
 }

 create_proxy();




var app = express();
//设置静态文件目录
app.use(express.static(path.join(__dirname, '../dist')));

//代理
proxy_list.map(item=>{
    app.use(item.path,item.proxy);
 })
      
//主页面
app.get('/index', function (req, res, next) { //主页面，可以添加更多页面
    res.sendfile(path.join(__dirname,'../dist/index.html'));
})
//登录页
app.get('/login.html', function (req, res, next) { //登录页
    res.sendfile(path.join(__dirname,'../dist/login.html'));
})
//后端管理页
app.get('/admin.html', function (req, res, next) { //登录页
    res.sendfile(path.join(__dirname,'../dist/admin.html'));
})

app.listen(port || 11199); //开启端口

console.log('start success');
