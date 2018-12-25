// let proxyUrl = 'http://172.16.15.252';     //预演
// let proxyUrl = 'http://172.16.15.240'; //开发
// let proxyUrl = 'http://172.16.15.252';     //测试


//线上
// let proxyUrl = 'https://jcloud.fubangyun.com';
// let proxyUrlPort = 'https://jcloud.fubangyun.com'

//预演
// let proxyUrl = 'http://172.16.15.252';
// let proxyUrlPort = 'http://172.16.15.252:11199/'


//开发联调
// let proxyUrl = 'http://172.16.15.202';
// let proxyUrlPort = 'http://172.16.15.202:11199/'

//测试联调2
// let proxyUrl = 'http://172.16.15.201';
// let proxyUrlPort = 'http://172.16.15.201:11199/'


//测试联调1
let proxyUrl = 'http://172.16.15.204';
let proxyUrlPort = 'http://172.16.15.204:11199/'

//孔凯迪环境
// let proxyUrl = 'http://172.16.15.240';
// let proxyUrlPort = 'http://172.16.15.240:21203/'

//郭伟电脑
// let proxyUrl = 'http://172.16.15.203';
// let proxyUrlPort='http://172.16.15.203:8013/'

//张华帅本机
// let proxyUrl = 'http://172.16.11.27';
// let proxyUrlPort = 'http://172.16.11.27:8007/'


//马明明本地服务
// let proxyUrl = 'http://172.16.15.203';
// let proxyUrlPort = 'http://172.16.15.203:8012/'


//吴朝鹏
// let proxyUrl = 'http://172.16.15.203';
// let proxyUrlPort = 'http://172.16.15.203:9018/'


module.exports = {
    '/associate_word': {
        target: 'http://172.16.15.203:7084/',
        changeOrigin: true,
    },
    '/app': {
        target: proxyUrlPort,
        changeOrigin: true,
    },
    '/statistic': {
        target: proxyUrlPort,
        changeOrigin: true,
        pathRewrite: {
            '^/statistic': ''
        }
    },
    '/admin': {
        target: proxyUrlPort,
        changeOrigin: true,
        pathRewrite: {
            '^/admin': ''
        }
    },

    /*** 后端fe接口 */
    '/api': {
        target: proxyUrlPort,
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/fe',
            // '^/api': ''
        }
    },

    // 批量下载
    '/download_file': {
        target: proxyUrlPort,
        changeOrigin: true,
    },

    /********  微服务 ***************/

    // 二维码下载
    '/codeTwo': {
        target: proxyUrl + ':7081',
        changeOrigin: true,
        pathRewrite: {
            '^/codeTwo': ''
        }
    },

    //微服务——图片上传服务
    '/upload/jupiter': {
        target: proxyUrl + ':7082/',
        changeOrigin: true,
    },
    // 微服务-下载文件
    '/download/jupiter/file/': {
        target: proxyUrl + ':7082',
        changeOrigin: true,
    },
    // 微服务-文件详情
    '/file/info': {
        target: proxyUrl + ':7082',
        changeOrigin: true,
    },

    //  后端的kv服务
    '/kv_api': {
        target: proxyUrl + ':7083',
        changeOrigin: true,
    },

    '/regisWeb': {
        target: proxyUrl + ':11088',
        changeOrigin: true,
        pathRewrite: {
            '^/regisWeb': ''
        }
    },


    // 导入模板下载
    '/import': {
        target: proxyUrl + ':9001',
        changeOrigin: true,
        pathRewrite: {
            '^/import': ''
        }
    },
    //微服务-获取地址
    '/address/region/': {
        target: proxyUrl + ':9901/',
        changeOrigin: true,
        pathRewrite: {
            '^/address': ''
        }
    },

    //微服务-图片验证码
    '/piccode': {
        target: proxyUrl + ':9902',
        changeOrigin: true,
        pathRewrite: {
            '^/piccode': ''
        }
    },

    //微服务-发送验证码
    '/send': {
        target: proxyUrl + ':9903',
        changeOrigin: true,
        pathRewrite: {
            '^/send': ''
        }
    },

    // 官网代理
    '/sendWeb': {
        target: proxyUrl + ':9903',
        changeOrigin: true,
        pathRewrite: {
            '^/sendWeb': ''
        }
    },

    //萤石云
    '/yingshi': {
        target: 'https://open.ys7.com',
        changeOrigin: true,
        pathRewrite: {
            '^/yingshi': '/api'
        }
    },

}