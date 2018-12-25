
import Axios from 'axios';
import {axios_before_data} from './yuanzifengzhang.js'


const axios = Axios.create();

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




/***
 * 获取中心
 */
export const ajax_sta_centerList = data => {
  return ajax_get('/juno/company/center_list_by_center/', data);
}

/**
 * 获取中心下的单位
 * @param {*} data 
 */
export const ajax_sta_companyLsit_byCenter = data => {
  return ajax_get('/juno/company/cared_list_by_center/', data);
}


/***
 * 单位
 */
export const ajax_sta_company_list = (data) => {
  let company_type = Vue.$store.state.user_info.company_type;
  if (company_type == 'info_company_center') {
    return ajax_get('/juno/company/count_by_center/', data);

  } else if (company_type == 'info_company_authority') {
    return ajax_get('/juno/company/count_by_authority/', data);

  } else if (company_type == 'info_company_maint') {
    return ajax_get('/juno/company/count_by_maint/', data);
  }
}

export const ajax_sta_company_count = data => {
  let company_type = Vue.$store.state.user_info.company_type;
  if (company_type == 'info_company_center') {
    return ajax_get('/juno/company/count_by_center/', data);

  } else if (company_type == 'info_company_authority') {
    return ajax_get('/juno/company/count_by_authority/', data);

  } else if (company_type == 'info_company_maint') {
    return ajax_get('/juno/company/count_by_maint/', data);
  }
}


/***
 * 建筑相关
 */
export const ajax_sta_building = data = {

}
