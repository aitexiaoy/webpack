/**
 * 系统管相关API
 *
 */
import {
  ajax_get,
  ajax_delete,
  ajax_post,
  ajax_put,
  file_updata
} from './common_api'

//-------------  1  -------------//
/*** 用户管理 联网单位 / 消防主管参谋 / 维保单位  列表 */
export const ajax_company_list_center= data => ajax_get('/api_proxy/company_cared/origin_account_list/',data);

/*** 用户管理 联网单位 详情 */
export const ajax_company_info= data => ajax_get('/api_proxy/company_cared/info/',data);

/*** 用户管理 联网单位 删除 */
export const ajax_company_delete= data => ajax_delete('/api_proxy/company_cared/info/',data);

/*** 用户管理 联网单位 新增 */
export const ajax_company_post= data => ajax_post('/api_proxy/company_cared/info/',data);

/*** 用户管理 联网单位 修改 */
export const ajax_company_put= data => ajax_put('/api_proxy/user/info/',data);



/*** 用户管理 联网单位批量导入 */
export const ajax_company_import= data => ajax_get('/api_proxy/company_cared/company_cared_import/',data);

/*** 用户管理 其他单位批量导入 */
export const ajax_or_center_import= data => ajax_get('/api_proxy/company_maint/other_company_or_center_import/',data);






/*** 用户管理 联网单位 重点关注 添加 */
export const ajax_subscribe_post= data => ajax_post('/api_proxy/subscribe/subscribe_info/',data);

/*** 用户管理 联网单位 重点关注 取消 */
export const ajax_subscribe_delete= data => ajax_delete('/api_proxy/subscribe/subscribe_info/',data);

/*** 用户管理 联网单位 屏蔽 添加 */
export const ajax_shilter_post= data => ajax_post('/api_proxy/subscribe/shilter_info/',data);

/*** 用户管理 联网单位 屏蔽 取消 */
export const ajax_shilter_delete= data => ajax_delete('/api_proxy/subscribe/shilter_info/',data);



/*** 用户管理 报警监控平台 列表 */
export const ajax_center_origin_account_list = data => ajax_get('/api_proxy/center/origin_account_list/',data);

/*** 用户管理 报警监控平台 新增 */
export const ajax_center_post = data => ajax_post('/api_proxy/center/info/',data);

/*** 用户管理 报警监控平台 详情 */
export const ajax_center_info = data => ajax_get('/api_proxy/center/info/',data);

/*** 用户管理 报警监控平台 详情 */
export const ajax_authority_info = data => ajax_get('/api_proxy/company_authority/info/',data);

/*** 用户管理 报警监控平台 详情 */
export const ajax_maint_info = data => ajax_get('/api_proxy/company_maint/info/',data);

/*** 用户管理 报警监控平台 删除 */
export const ajax_center_delete = data => ajax_delete('/api_proxy/center/info/',data);

/*** 用户管理 报警监控平台 修改中心信息 */
export const ajax_center_put = data => ajax_put('/api_proxy/center/info/',data);

/*** 用户管理 报警监控平台 修改主管信息 */
export const ajax_authority_put = data => ajax_put('/api_proxy/company_authority/info/',data);

/*** 用户管理 报警监控平台 修改维保信息 */
export const ajax_maint_put = data => ajax_put('/api_proxy/company_maint/info/',data);



/*** 用户管理 消防主管参谋 新增 */
export const ajax_company_authority_post = data => ajax_post('/api_proxy/company_authority/info/',data);

/*** 用户管理 消防主管参谋 详情 */
export const ajax_company_authority_info = data => ajax_get('/api_proxy/company_authority/info/',data);

/*** 用户管理 消防主管参谋 删除 */
export const ajax_company_authority_delete = data => ajax_delete('/api_proxy/company_authority/info/',data);



/*** 用户管理 维保单位 新增 */
export const ajax_company_maint_post = data => ajax_post('/api_proxy/company_maint/info/',data);

/*** 用户管理 维保单位 详情 */
export const ajax_company_maint_info = data => ajax_get('/api_proxy/company_maint/info/',data);

/*** 用户管理 维保单位 删除 */
export const ajax_company_maint_delete = data => ajax_delete('/api_proxy/company_maint/info/',data);




// 上传文件
export const ajax_firecock_data_file_updata = data => file_updata(data);

// 批量导入接口
export const ajax_firecock_data_file_import = data => ajax_post('/api_proxy/equipment_summary/branch/',data);




//-------------  2  -------------//
/*** 联网单位列表 列表 */
export const ajax_company_cared_list = data => ajax_get('/api_proxy/company_cared/filter_list_by_center_id/',data);

/*** 联网单位  发起绑定 */
export const ajax_post_bind = data => ajax_post('/api_proxy/company_cared/bind_company/',data);

/*** 联网单位列表（任何单位和他的绑定关系） */
export const ajax_state_between_company_list = data => ajax_get('/api_proxy/company_cared/state_between_company_list/',data);





//-------------  4 --------------//
/*** 用户信息列表 */
export const ajax_user_list_center = data => ajax_get('/api_proxy/user/list_by_center_id/', data);
export const ajax_user_list_company = data => ajax_get('/api_proxy/user/list_by_company_id/', data);

/*** 获取用户信息 */
export const ajax_user_info = data => ajax_get('/api_proxy/user/info/', data);

/*** 删除用户信息 */
export const ajax_user_del = data => ajax_delete('/api_proxy/user/info/', data);

/*** 增加用户信息 */
export const ajax_user_add = data => ajax_post('/api_proxy/user/info/', data);
/*** 增加用户信息 -- 验证账号是否存在 */
export const ajax_user_check_account = data => ajax_get('/api_proxy/user/check_account/', data);

/*** 修改用户信息 */
export const ajax_user_revise = data => ajax_put('/api_proxy/user/info/', data);

/***停用激活 */
export const ajax_user_revise_is_active = (data) => {
  return ajax_put('/api_proxy/user/set_active_status/', data);
}
/*** 人员分警  列表 */
export const ajax_user_alarm = data => ajax_get('/api_proxy/user/user_alarm/', data);

/*** 查看历史工作详情 */
export const ajax_user_history_info = data => ajax_get('/api_proxy/user/user_history_info/', data);





//-------------  5 --------------//
/*** 已绑定列表 */
export const ajax_center_company = data => ajax_get('/api_proxy/center/list_by_company_id/', data);

/*** 联网单位  绑定申请列表 */
export const ajax_company_bind_list = data => ajax_get('/api_proxy/company_cared/bind_company_list/',data);

/*** 联网单位  处理绑定 */
export const ajax_put_bind = data => ajax_put('/api_proxy/company_cared/bind_company/',data);

/*** 联网单位  解除绑定 */
export const ajax_delete_bind = data => ajax_delete('/api_proxy/company_cared/bind_company/',data);








/*****系统设置模块 */
// 获取
export const ajax_get_setting_user = data => ajax_get('/api_proxy/setting_user/info_by_web/', data);
export const ajax_put_setting_user = data => ajax_put('/api_proxy/setting_user/info_by_web/', data);