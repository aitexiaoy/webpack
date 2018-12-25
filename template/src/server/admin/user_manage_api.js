import {
    ajax_get,
    ajax_post,
    ajax_delete,
    ajax_put
} from "./admin_api";
import axios from 'axios'


import {axios_before_data} from '../yuanzifengzhang.js'

// 后台用户相关接口



// 官网用户相关接口
// 获取官网用户列表
export const ajax_get_webuserlist = data => ajax_get('/admin_proxy/web/list/', data);
// 新增用户接口
export const ajax_post_addwebuser = data => ajax_post('/admin_proxy/web/info/', data);
//删除官网用户
export const ajax_delete_delwebuser = data => ajax_delete('/admin_proxy/web/info/', data);
// 获取套餐类型接口
export const ajax_get_combolist = data => ajax_get('/admin_proxy/platform/platform_list/', data);
//增加木星超级管理员接口
export const ajax_post_addjupiteruser = data => ajax_post('/api_proxy/user/info/', data);
// 后台为官网用户开通平台接口
export const ajax_post_buyplatform = data => ajax_post('/admin_proxy/platform/buy/', data);
// 后台为官网用户添加超级管理员
export const ajax_put_setaccount = data => ajax_put('/admin_proxy/platform/setting/', data);

// 后台用户相关接口
// 获取后台用户列表
export const ajax_get_adminuserlist = data => ajax_get('/admin_proxy/admin/list/', data);
// 添加后台用户接口
export const ajax_post_addadminuser = data => ajax_post('/admin_proxy/admin/info/', data);
// 删除后台用户接口
export const ajax_delete_deladminuser = data => ajax_delete('/admin_proxy/admin/info/', data);
// 获取后台用户信息接口
export const ajax_get_infoadminuser = data => ajax_get('/admin_proxy/admin/info/', data);
// 修改用户信息接口
export const ajax_put_infoadminuser = data => ajax_put('/admin_proxy/admin/info/', data);


let instance = axios.create({
  baseURL: "/api",
  timeout: 60000,
  headers: {"X-Custom-Header": "foobar"}
});
export const ajax_search_user_list = data => instance.get('/api_proxy/user/list/', {
  params: axios_before_data('get')
}).then(result => {
  return result;
});
