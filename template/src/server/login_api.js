// 登录相关接口
import axios from 'axios';

import { axios_before_data } from './yuanzifengzhang.js'

const loginaxios = axios.create();

// 全局的配置的默认值/defaults
export let axios_config = () => {
    loginaxios.defaults.baseURL = '/api';
    loginaxios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    loginaxios.defaults.timeout = 180000;
}

// 添加请求拦截器
loginaxios.interceptors.request.use(function(config) {
    //添加token
    // config.headers.common['Authorization'] = 'ZXlKaGJHY2lPaUprWldaaGRXeDBJaXdpZEhsd0lqb2lTbGRRSW4wOjFnUTZzbDpJcV85SC1hZ2k5ZHBrcmRDTVd2ekFVSllkeHc.ZXlKd2JHRjBabTl5YlNJNklsZEZRaUlzSW1saGRDSTZNVFUwTWprMk1Ua3pNU3dpZFhObGNsOXBaQ0k2TlRVMU5qQXhNU3dpZFhObGNsOTBlWEJsSWpveUxDSjFjMlZ5WDNKdmJHVWlPakY5OjFnUTZzbDpGbkVhaEhFQmtER1dITUx1RGNlRWNYWTVDVDQ.911b0fab0d031d4e20ebc0386c1f7aa4';
    return config;
}, function(error) {
    Vue.$fbmessage.error('接口请求报错了...嗯...');
    // 对请求错误做些什么
    return Promise.reject(error);
});


/*** 在请求数据之前的处理 */
let ajax_before = (type, data) => {
    return axios_before_data(type, data)
}


axios_config();

/*** 在数据请求回来之后的公共判断 */
let ajax_aftet = (result) => {
        return new Promise((resolve, reject) => {
            if (result.status == 200) {
                if (result.data.code == 0) {
                    resolve(result.data);
                } else {
                    Vue.$fbmessage.error(result.data.msg);
                    reject(result.data);
                }
            } else {
                Vue.$fbmessage.error('网络错误');
                reject(result.data);
            }
        })
    }
    /****
     * get 请求   用于请求列表，请求详情
     */
export const ajax_get = (url, data) => {
    data = ajax_before('get', data);
    return loginaxios.get(url, {
        params: data,
    }).then(result => {
        return ajax_aftet(result);
    })
}

/****
 * post 请求   用于新增
 */
export const ajax_post = (url, data) => {
    data = ajax_before('post', data);
    return loginaxios.request({
        url: url,
        method: 'post',
        data: data.data,
        params: data.params,
    }).then(result => {
        return ajax_aftet(result);
    })
}

/**
 * put 请求    用于修改
 */
export const ajax_put = (url, data) => {
    data = ajax_before('put', data);
    return loginaxios.request({
        url: url,
        method: 'put',
        params: data.params,
        data: data.data,
    }).then(result => {
        return ajax_aftet(result);
    })
}

//登录页面
export const ajax_login = data => ajax_post('/api_proxy/user/login/', data);

//注销
export const ajax_logout = data => ajax_get('/api_proxy/user/loginout/', data);

//验证账号是否存在
export const ajax_has_company = data => ajax_get('/api_proxy/user/check_account/', data);

//注册
export const ajax_post_register = data => ajax_post('/api_proxy/user/register/', data);

// 修改密码
//验证账户存在
export const ajax_account_is = data => ajax_get('/api_proxy/user/check_account/', data);
//生成图片验证码
export const ajax_generate_piccode = data => ajax_get('/generate_pic_code', data);
//验证图片验证码
export const ajax_verify_piccode = data => ajax_get('/verify_pic_code', data);
// 生成短信验证码
export const ajax_generate_numcode = data => ajax_get('/sms_send', data);
// 验证短信验证码
export const ajax_verify_numcode = data => ajax_get('/verify_sms', data);
// 忘记密码
export const ajax_midify_pass = data => ajax_post('/api_proxy/user/forget_pwd/', data);