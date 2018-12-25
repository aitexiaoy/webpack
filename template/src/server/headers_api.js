import axios from 'axios';

import {axios_before_data} from './yuanzifengzhang.js'


const loginaxios = axios.create();

// 全局的配置的默认值/defaults
export let axios_config = () => {
    loginaxios.defaults.baseURL = '/app';
    loginaxios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    loginaxios.defaults.timeout = 180000;
}

// 添加请求拦截器
loginaxios.interceptors.request.use(function(config) {
    //添加token
    // config.headers.common['Authorization'] = '';
    return config;
}, function(error) {
    Vue.$fbmessage.error('接口请求报错了...嗯...');
    // 对请求错误做些什么
    return Promise.reject(error);
});

/*** 在请求数据之前的处理 */
let ajax_before = (type, data) => {
    return axios_before_data(type,data)
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

//其他通用表格头部
export const ajax_header_list = (data) => ajax_get('/api/get_headers/',data);


