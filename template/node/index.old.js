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


var jsonPlaceholderProxyGetheaders = proxy({
    // target:'http://172.16.15.240:9017/',     //代理地址
    target: 'http://localhost:9017/',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        '^/api/app': ''
    },
    proxyTimeout: 60000, //连接超时时间

})

var jsonPlaceholderProxy = proxy({
    // target:'http://172.16.15.240:9017/',     //代理地址
    target: 'http://localhost:9017/',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        '^/api': 'fe'
    },
    proxyTimeout: 60000, //连接超时时间

})

var jsonPlaceholderProxyFileInfo = proxy({
    target: 'http://localhost:7082/', //代理地址
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      //   '^/file/info': ''
    },
    proxyTimeout: 60000, //连接超时时间
})



var jsonPlaceholderProxyImg = proxy({
    target: 'http://localhost:7082/', //代理地址
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        // '^/api': 'fe'
    },
    proxyTimeout: 60000, //连接超时时间
})

var addressPlaceholderProxyImg = proxy({
    target: 'http://localhost:9901/', //代理地址
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        '^/address': ''
    },
    proxyTimeout: 60000, //连接超时时间
})


var piccodePlaceholderProxyImg = proxy({
    target: 'http://localhost:9902/', //代理地址
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        '^/piccode': ''
    },
    proxyTimeout: 60000, //连接超时时间
})

var sendPlaceholderProxyImg = proxy({
    target: 'http://localhost:9903/', //代理地址
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        '^/send': ''
    },
    proxyTimeout: 60000, //连接超时时间
})

var staticProxy = proxy({
    target: 'http://localhost:9017/',
    changeOrigin: true,
    pathRewrite: {
        '^/statistic/statistic': '/statistic'
    }
})

var codeTwoPlaceholderProxy = proxy({
    target: 'http://localhost:7081/',
    changeOrigin: true,
    pathRewrite: {
        '^/codeTwo':''
    }
})

var moreDownloadPlaceholderProxy = proxy({
    target: 'http://localhost:7082/',
    changeOrigin: true,
    pathRewrite: {
        '^/download_file':''
    }
})

var adminPlaceholderProxy = proxy({
    target: 'http://localhost:8027/',
    changeOrigin: true,
    pathRewrite: {
        '^/admin':''
    }
})

var importPlaceholderProxy = proxy({
    target: 'http://localhost:9001/',
    changeOrigin: true,
    pathRewrite: {
        '^/import':''
    }
})

var yingshiPlaceholderProxy = proxy({
    target: 'https://open.ys7.com/',
    changeOrigin: true,
    pathRewrite: {
        '^/yingshi': '/api'
    }
})

var sendWebPlaceholderProxy = proxy({
    target: 'http://localhost:9903/',
    changeOrigin: true,
    pathRewrite: {
        '^/sendWeb': ''
    }
})

var regisWebPlaceholderProxy = proxy({
    target: 'http://localhost:2323/',
    changeOrigin: true,
    pathRewrite: {
        '^/regisWeb': ''
    }
})

var app = express();

//设置静态文件目录
app.use(express.static(path.join(__dirname, '../dist')));
/**
 * Add the proxy to express
 */
app.use('/api/app', jsonPlaceholderProxyGetheaders); //Getheaders的

app.use('/api/*', jsonPlaceholderProxy); //匹配api下的进行代理

app.use('/upload/jupiter/', jsonPlaceholderProxyImg); //上传图片的代理

app.use('/admin/*', adminPlaceholderProxy); // 后台管理

/**地址 */
app.use('/address/region/', addressPlaceholderProxyImg); //上传图片的代理

app.use('/piccode/*', piccodePlaceholderProxyImg); //图片验证码代理

app.use('/send/*', sendPlaceholderProxyImg); //发送短信代理

app.use('/statistic/statistic', staticProxy); //统计分析的

app.use('/file/*', jsonPlaceholderProxyFileInfo); //文件详情的

app.use('/codeTwo/*', codeTwoPlaceholderProxy); //巡检二维码的

app.use('/download_file/*', moreDownloadPlaceholderProxy); //批量下载

app.use('/import/*', importPlaceholderProxy); //批量导入

app.use('/yingshi/*', yingshiPlaceholderProxy); //萤石云

app.use('/sendWeb/*', sendWebPlaceholderProxy); //官网代理

app.use('/regisWeb/*', regisWebPlaceholderProxy); //


      
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
