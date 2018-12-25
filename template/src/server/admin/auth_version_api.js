import {
  ajax_get,
  ajax_post,
  ajax_put,
  ajax_delete
} from "./admin_api";

import axios from 'axios'

import {axios_before_data} from '../yuanzifengzhang.js'

let instance = axios.create({
  baseURL: "/api",
  timeout: 60000,
  headers: {"X-Custom-Header": "foobar"}
});
export const ajax_user_role = data => instance.get('/api_proxy/enum/list/enum_user_role/', {
  params: axios_before_data('get')
}).then(result => {
  return result;
});
// 套餐管理--获取各个单位下的套餐列表
export const ajax_auth_version_company = data => ajax_get('/admin_proxy/platform/platform_list/', data);

// export const ajax_module_list_get = data => ajax_get('/admin_proxy/module/module_list/',data);

// export const ajax_module_list_get = data => ajax_get('/admin_proxy/module/user_module/', data);
export const ajax_module_list_get = data => ajax_get('/admin_proxy/module/design_module/', data);
export const ajax_template_module_del = data => ajax_delete('/admin_proxy/module/template_module//', data);

export const ajax_platform_info_post = data => ajax_post('/admin_proxy/platform/info/', data);
export const ajax_platform_info_put = data => ajax_put('/admin_proxy/platform/info/', data);
export const ajax_platform_info_del = data => ajax_delete('/admin_proxy/platform/info/', data);
export const ajax_platform_template_info_post = data => ajax_post('/admin_proxy/platform_template/info/', data);
export const ajax_platform_template_info_put = data => ajax_put('/admin_proxy/platform_template/info/', data);
export const ajax_platform_template_setting_post = data => ajax_post('/admin_proxy/platform_template/setting/', data);
export const ajax_platform_template_setting_put = data => ajax_put('/admin_proxy/platform_template/setting/', data);
export const ajax_platform_info_get = data => ajax_get('/admin_proxy/platform/info/', data);



