import Axios from 'axios';

import fblocalstorage from '../assets/js/local_storage.js'

import Vuex from '../store/index.js'
const CancelToken = Axios.CancelToken;
let cancel_list = []; //用于存取消函数


import { axios_before_data } from './yuanzifengzhang.js'

const axios = Axios.create();
export const appAxios = axios;


// 全局的配置的默认值/defaults
export let axios_config = () => {
    axios.defaults.baseURL = '/api';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.timeout = 180000; //3min
}

axios_config();

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // console.log(this);
    //添加token
    // console.log('---------------111')
    config.headers.common['Authorization'] = 'token ' + fblocalstorage.getStore('user').user_token || "";
    return config;
}, function(error) {
    Vue.$fbmessage.error('接口请求报错了...嗯...');
    // 对请求错误做些什么
    return Promise.reject(error);
});



// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {

//   if (error.message.match('timeout')) {
//     Vue.$fbmessage.error('接口请求超时');
//   }
//   //认证令牌无效 这个地方路由跳转有问题
//   if (error.response.status && error.response.status == 401) {
//     //认证令牌无效
//     Vue.$router.push({
//       path: '/login',
//       query: {
//         redirect: Vue.$route.fullPath
//       } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//     })
//   }
//   return Promise.reject(error);
// });


/***调用该方法会取消当前正在请求的所有ajax请求***/
export const ajax_abort_all = () => {
    if (cancel_list.length > 0) {
        cancel_list.forEach(item => {
            item()
        })
    }
    cancel_list = [];
}

/*** 在请求数据之前的处理 */
let ajax_before = (type, data) => {
    // console.log('---------------222')
    axios.defaults.headers.common['Authorization'] = 'token ' + fblocalstorage.getStore('user').user_token || "";

    return axios_before_data(type, data);

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
                window.location.href = `${window.location.protocol}//${window.location.host}/login.html#/`;
            } else {
                // Vue.$fbmessage.error(result.data.msg);
                reject(result.data);
            }
        } else {
            Vue.$fbmessage.error('网络错误');
            reject(result.data);
        }
    })
}


/***
 *  用来下载后台传过来数据流
 */

export const get_stream = (url, data) => {
    data = ajax_before('get', data);
    return new Promise((resolve) => {
        let { href } = Vue.$router.resolve({
            path: url,
            query: data,
        })
        href = href.replace('#', 'api');
        window.open(href);
        resolve();
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

/**
 * 基础文件上传服务
 * @param {*} data
 */
export const file_updata = (file, type) => {
    return new Promise((resolve, reject) => {
        let xmlhttp = new XMLHttpRequest();
        var data = new FormData();
        data.append('file', file);
        xmlhttp.open("POST", '/upload/jupiter/file', true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    let result = JSON.parse(xmlhttp.response);
                    resolve(result.data);
                } else {
                    reject('上传文件失败');
                }
            }
        }
        xmlhttp.upload.onprogress = function(event) {
            // Vue.progress_value = parseInt((event.loaded * 100 / event.total) || 0);
        }
        xmlhttp.upload.onloadstart = function() {

        };
        xmlhttp.upload.onloadend = function() {

        };
        xmlhttp.onerror = function() {
            reject('网络错误');
        };
        xmlhttp.send(data);
    })
}

/**
 * 获取文件信息
 */
export const file_info = (url, data) => {
    return new Promise((resolve, reject) => {
        let xmlhttp = new XMLHttpRequest();
        let params = '';
        Object.keys(data).forEach(key => {
            params += '?' + key + '=' + data[key]
        })
        url = url + params;
        // console.log(url, '===')
        xmlhttp.open("get", url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function() {

            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {

                    let result = JSON.parse(xmlhttp.response);
                    resolve(result.data);
                } else {
                    reject('获取文件信息失败');
                }
            }
        }
    })
}

// import get_enum from './get_enums.js'

/**
 * 请求字典表
 * @param {vue的this对象} vue
 * @param {字典名称,数组,可以同时请求多个} enums
 * @param {存到本地的名称，数组，默认为enums,暂时不用} name
 */
const maint_xunjian = 'enum_pt_frequency,'
export const get_enums = async(vue, enums, name) => {
    return new Promise((resolve, reject) => {
        if (vue.$typeOf(enums) === 'array') {
            let get_list = [];
            let get_list_data = [];
            let get_one_enum = function(one_enum, one_name) {
                let url = '';
                if (one_enum.match('enum_user_property')) {
                    url = `/api_proxy/enum/search/enum_user_property/code/${one_enum.replace('enum_user_property_','')}/`
                } else if (maint_xunjian.match(`${one_enum},`)) {
                    url = `/api_proxy/patrol/enum/list/${one_enum}/`
                } else {
                    url = `/api_proxy/enum/list/${one_enum}/`
                }
                return ajax_get(url);
            }
            let enums_length = enums.length;
            // console.log(enums);
            for (let index = 0; index < enums_length; index++) {
                //没存到字典表中，请求接口，存在了不再重复请求
                if (enums[index] != '') {
                    if (!vue.$store.state.enums_dictionary[enums[index]]) {
                        get_list.push(new get_one_enum(enums[index]));
                        get_list_data.push(enums[index]);
                    }
                }
            }
            let get_list_data_length = get_list_data.length;
            if (get_list_data_length > 0) {
                return Axios.all(get_list).then(Axios.spread(function() {
                    //数据处理
                    for (let num = 0; num < get_list_data_length; num++) {
                        let key = get_list_data[num];
                        let result = arguments[num].data;
                        let data = [];
                        if (enums[num].match('enum_user_property')) {
                            for (let n = 0; n < result.length; n++) {
                                if (typeof result[n]['is_show'] === 'undefined' || (typeof result[n]['is_show'] !== 'undefined' && result[n]['is_show'] == 1)) {
                                    let obj = {};
                                    obj['id'] = result[n]['value'];
                                    obj['name'] = result[n]['value'];
                                    data.push(obj);
                                }

                            }
                        } else {
                            for (let n = 0; n < result.length; n++) {
                                if (typeof result[n]['is_show'] === 'undefined' || (typeof result[n]['is_show'] !== 'undefined' && result[n]['is_show'] == 1)) {
                                    let obj = {};
                                    obj['id'] = result[n]['id'];
                                    obj['name'] = result[n]['name'];
                                    obj['company_class'] = result[n]['company_class'] || "";
                                    data.push(obj);
                                }
                            }
                        }

                        vue.$store.commit('m_enums_dictionary', {
                            key: key,
                            data: data,
                        })
                    }
                    resolve();
                })).catch(error => {
                    console.log('----------error', error)
                })
            } else {
                resolve();
            }
        } else {
            resolve();
        }
    })
}


/**
 * 单独的请求字典表
 */
export const get_enums_item = (enum_name, data) => {
    let url = '';
    if (data && Object.keys(data).length > 0) {
        let key = '';
        for (let index in data) {
            key = index;
        }
        url = `/api_proxy/enum/search/${enum_name}/${key}/${data[key]||''}`;
    } else {
        url = `/api_proxy/enum/list/${enum_name}/`;
    }
    return new Promise((resolve, reject) => {
            ajax_get(url).then(result => {
                let data = [];
                result.data.forEach(item => {
                    if (typeof item['is_show'] === 'undefined' || (typeof item['is_show'] !== 'undefined' && item['is_show'] == 1)) {
                        data.push(item);
                    }
                })
                result.data = data;
                // console.log(result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
        // return ajax_get(url);
}

//注销
export const ajax_logout = data => ajax_get('/api_proxy/user/loginout/', data);


//key_api
/***
 * 一个全局函数，获取用户配置
 */
export const get_serverUserConfig = () => {
    return new Promise((resolve, reject) => {
        let user = Vuex.state.user_info;
        let data = {
                key: `${user.company_type}_${user.uid}` || '',
            }
            //   data = ajax_before('get', data);
        let kv_axja = Axios.create({
            baseURL: "",
        });
        kv_axja.request({
            url: '/kv_api',
            method: 'get',
            params: data,
        }).then(result => {
            return ajax_aftet(result).then(res => {
                if (res.data.value) {
                    fblocalstorage.setStore('user_config', JSON.parse(res.data.value));
                } else {
                    fblocalstorage.setStore('user_config', JSON.parse('""'));
                }
                resolve();
            }).catch(error => {
                fblocalstorage.setStore('user_config', JSON.parse('""'));
                console.log(error);
                resolve();
            })
        })
    })


}

/***
 * 一个全局的函数，修改kv配置
 */
export const set_serverUserConfig = data => {
    let user_config = data;
    // delete user_config.key;
    // fblocalstorage.setStore('user_config', user_config);
    let user = Vuex.state.user_info;

    let key = `${user.company_type}_${user.uid}` || '';
    if (key == '' || key == '_')
        return false;
    let postData = {
        key: key,
        value: JSON.stringify(user_config)
    }
    data = ajax_before('post', postData);
    let kv_axja = Axios.create({
        baseURL: "",
    });
    kv_axja.request({
        url: '/kv_api',
        method: 'post',
        params: data.params,
        data: data.data,
    }).then(result => {
        return ajax_aftet(result);
    })

}