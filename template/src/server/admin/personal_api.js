import {
    ajax_get,
    ajax_post,
    ajax_put,
    ajax_delete
  } from "./admin_api";
// 后台管理接口注册木星一个
export const ajax_post_addjupiteruser = data => ajax_post('/api/api_proxy/user/info/', data);
// 获取所有木星用户
export const ajax_get_alljupiteruser = data => ajax_get('/api/api_proxy/user/list/', data);
//删除用户
export const ajax_delete_alljupiteruser = data => ajax_delete('/api/api_proxy/user/info/', data);
// 获取木星用户信息
export const ajax_get_jupiteruserinfo = data => ajax_get('/api/api_proxy/user/info/', data);