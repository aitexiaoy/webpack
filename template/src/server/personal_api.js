// 登录相关接口
import Axios from 'axios';

import { axios_before_data } from './yuanzifengzhang.js'

import fblocalstorage from '../assets/js/local_storage.js'

const CancelToken = Axios.CancelToken;
let cancel_list = []; //用于存取消函数

const loginaxios = Axios.create();
const axios = Axios.create();

// 全局的配置的默认值/defaults
export let axios_config = () => {
    loginaxios.defaults.baseURL = '';
    loginaxios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    loginaxios.defaults.timeout = 180000;

    axios.defaults.baseURL = '/api';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.timeout = 180000; //3min
}

// 添加请求拦截器
loginaxios.interceptors.request.use(function(config) {
    //添加token
    config.headers.common['Authorization'] = 'ZXlKaGJHY2lPaUprWldaaGRXeDBJaXdpZEhsd0lqb2lTbGRRSW4wOjFnUTZzbDpJcV85SC1hZ2k5ZHBrcmRDTVd2ekFVSllkeHc.ZXlKd2JHRjBabTl5YlNJNklsZEZRaUlzSW1saGRDSTZNVFUwTWprMk1Ua3pNU3dpZFhObGNsOXBaQ0k2TlRVMU5qQXhNU3dpZFhObGNsOTBlWEJsSWpveUxDSjFjMlZ5WDNKdmJHVWlPakY5OjFnUTZzbDpGbkVhaEhFQmtER1dITUx1RGNlRWNYWTVDVDQ.911b0fab0d031d4e20ebc0386c1f7aa4 ' + fblocalstorage.getStore('web_user').user_token || "";
    return config;
}, function(error) {
    Vue.$fbmessage.error('接口请求报错了...嗯...');
    // 对请求错误做些什么
    return Promise.reject(error);
});


/*** 在请求数据之前的处理 */
let ajax_before = (type, data) => {
    axios.defaults.headers.common['Authorization'] = 'token ' + fblocalstorage.getStore('web_user').user_token || "";
    return axios_before_data(type, data);
}


axios_config();

/*** 在数据请求回来之后的公共判断 */
let ajax_aftet = (result) => {
        return new Promise((resolve, reject) => {
            if (result.status == 200) {
                if (result.data.code == 0) {
                    resolve(result.data);
                } else if (result.data.code == 9996) {
                    Vue.$store.state.web_login_status = false;
                    Vue.$localStorage.removeStore("web_user");
                    Vue.$cookie.removeStore("web_user");
                    Vue.$fbmessage.error('该账号在别处登录,请重新登录');
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

/**
 * delete 请求   用于删除
 */
export const ajax_delete = (url, data) => {
    // console.log(data)
    data = ajax_before('delete', data);
    return loginaxios.request({
        url: url,
        method: 'delete',
        params: data,
        data: data.data,
    }).then(result => {
        return ajax_aftet(result);
    })
}

// 官网
//注册
export const ajax_post_registerWeb = data => ajax_post('/regisWeb/api_proxy/auth/user/register/', data);
// 验证账户是否存在 官网
export const ajax_account_check = data => ajax_get('/regisWeb/api_proxy/auth/user/check_account/', data);
// 登录官网
export const ajax_loginweb = data => ajax_post('/regisWeb/api_proxy/auth/user/login/', data);
// 获取官网信息 用户
export const ajax_infoweb = data => ajax_get('/regisWeb/api_proxy/auth/user/info/', data);
// 获取套餐信息
export const ajax_infowebtariff = data => ajax_get('/api/api_proxy/auth/web_platform/list_by_web_user_id/', data);
// 退出登录 官网
export const ajax_logoutweb = data => ajax_get('/regisWeb/api_proxy/auth/user/logout/', data);
// 购买套餐
export const ajax_buycombo = data => ajax_post('/api/api_proxy/auth/web_platform/buy/', data);
// 删除套餐
export const ajax_delcombo = data => ajax_delete('/api/api_proxy/auth/web_platform/info/', data);
// 注册木星
export const ajax_post_register = data => ajax_post('/api/api_proxy/user/register/', data);
// 验证木星用户是否存在
export const ajax_has_company = data => ajax_get('/api/api_proxy/user/check_account/', data);
// 管理木星 官网
export const ajax_put_setuser = data => ajax_put('/api/api_proxy/auth/web_platform/setting/', data);
// 修改密码 官网
export const ajax_modifypass = data => ajax_post('/regisWeb/api_proxy/auth/user/update_pwd/', data);
// 忘记密码 官网
export const ajax_forgetpass = data => ajax_post('/regisWeb/api_proxy/auth/user/forget_pwd/', data);

// 官网更换账号 新接口
export const ajax_put_changeaccount = data => ajax_put('/regisWeb/api_proxy/user/update_account/', data);