import axios from "axios";
import {axios_before_data} from './yuanzifengzhang.js'

import fblocalstorage from '../assets/js/local_storage.js'

const statistic = axios.create({
    baseURL: "",
    timeout: 60000
});


let ajax_before = (type, data) => {
    statistic.defaults.headers.common['Authorization'] = 'token ' + fblocalstorage.getStore('user').user_token || "";
    return axios_before_data(type,data);
}

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


function ajax_get(url, data) {
    data = ajax_before('get', data);
    return statistic.get(url, {
        params: data,
    }).then(result => {
        return ajax_aftet(result);
    })
}



export const statistic_get = (url, data) => ajax_get(url, data);