import Axios from 'axios';
import Vuex from '../../store/admin_store/index.js'

import {axios_before_data} from '../yuanzifengzhang.js'

import fblocalstorage from '../../assets/js/local_storage.js'


const CancelToken = Axios.CancelToken;
let cancel_list = []; //用于存取消函数

const axios =Axios.create();


// 全局的配置的默认值/defaults
export let axios_config = () => {
    axios.defaults.baseURL = '/admin';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.timeout = 180000;
}

axios_config();

// // 添加请求拦截器
// axios.interceptors.request.use(function(config) {

//     console.log('------------333')
//     //添加token
//     // config.headers.common['Authorization'] = 'token ' + fblocalstorage.getStore('admin_user').user_token||"";
//     config.headers.common['Authorization'] = 'token ZXlKaGJHY2lPaUprWldaaGRXeDBJaXdpZEhsd0lqb2lTbGRRSW4wOjFnUTZzbDpJcV85SC1hZ2k5ZHBrcmRDTVd2ekFVSllkeHc.ZXlKd2JHRjBabTl5YlNJNklsZEZRaUlzSW1saGRDSTZNVFUwTWprMk1Ua3pNU3dpZFhObGNsOXBaQ0k2TlRVMU5qQXhNU3dpZFhObGNsOTBlWEJsSWpveUxDSjFjMlZ5WDNKdmJHVWlPakY5OjFnUTZzbDpGbkVhaEhFQmtER1dITUx1RGNlRWNYWTVDVDQ.911b0fab0d031d4e20ebc0386c1f7aa4';

//     return config;
// }, function(error) {
//     Vue.$fbmessage.error('接口请求报错了...嗯...');
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });

export const appAxios = axios;



/***调用该方法会取消当前正在请求的所有ajax请求***/
export const ajax_abort_all = () => {
    if (cancel_list.length > 0) {
        cancel_list.forEach(item => {
            item();
        })
    }
    cancel_list = [];
}

/*** 在请求数据之前的处理 */
let ajax_before = (type, data) => {
    // console.log('------------444')
    axios.defaults.headers.common['Authorization'] = 'token ZXlKaGJHY2lPaUprWldaaGRXeDBJaXdpZEhsd0lqb2lTbGRRSW4wOjFnUTZzbDpJcV85SC1hZ2k5ZHBrcmRDTVd2ekFVSllkeHc.ZXlKd2JHRjBabTl5YlNJNklsZEZRaUlzSW1saGRDSTZNVFUwTWprMk1Ua3pNU3dpZFhObGNsOXBaQ0k2TlRVMU5qQXhNU3dpZFhObGNsOTBlWEJsSWpveUxDSjFjMlZ5WDNKdmJHVWlPakY5OjFnUTZzbDpGbkVhaEhFQmtER1dITUx1RGNlRWNYWTVDVDQ.911b0fab0d031d4e20ebc0386c1f7aa4';
    return axios_before_data(type,data);

}

/*** 在数据请求回来之后的公共判断 */
let ajax_aftet = (result) => {
    return new Promise((resolve, reject) => {
        if (result.status == 200) {
            if (result.data.code == 0) {
                resolve(result.data);
            }
            //token 失效
            else if (result.data.code == 9996) {
                fblocalstorage.setStore('loginoverTime', '该账号在别处登录,请重新登录');
                ajax_abort_all();
                window.location.href = `${window.location.protocol}//${window.location.host}/admin.html#/login`;
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
    return axios.get(url, {
        params: data,
        cancelToken: new CancelToken(function(c) {
            cancel_list.push(c);
        })
    }).then(result => {
        return ajax_aftet(result);
    })
}

/****
 * post 请求   用于新增
 */
export const ajax_post = (url, data) => {
    data = ajax_before('post', data);
    return axios.request({
        url: url,
        method: 'post',
        params: data.params,
        data: data.data,
        cancelToken: new CancelToken(function(c) {
            //这个executor函数接受一个cancel function作为参数
            cancel_list.push(c);
        })
    }).then(result => {
        return ajax_aftet(result);
    })
}

/**
 * delete 请求   用于删除
 */
export const ajax_delete = (url, data) => {
    data = ajax_before('delete', data);
    return axios.request({
        url: url,
        method: 'delete',
        params: data,
        cancelToken: new CancelToken(function(c) {
            //这个executor函数接受一个cancel function作为参数
            cancel_list.push(c);
        })
    }).then(result => {
        return ajax_aftet(result);
    })
}

/**
 * put 请求    用于修改
 */
export const ajax_put = (url, data) => {
    data = ajax_before('put', data);
    return axios.request({
        url: url,
        method: 'put',
        params: data.params,
        data: data.data,
        cancelToken: new CancelToken(function(c) {
            //这个executor函数接受一个cancel function作为参数
            cancel_list.push(c);
        })
    }).then(result => {
        return ajax_aftet(result);
    })
}

//注销
export const ajax_logout = data => ajax_get('/admin_proxy/admin/logout/', data);
