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



/*** 用户管理 报警监控平台 列表 ?uid=22*/
export const ajax_center_origin_account_list = data => ajax_get('/api_proxy/center/bond_list_by_account/',data);

/*** 用户管理 报警监控平台 新增 */
export const ajax_center_post = data => ajax_post('/api_proxy/center/info/',data);

/*** 用户管理 报警监控平台 详情 */
export const ajax_center_info = data => ajax_get('/api_proxy/center/info/',data);

/*** 用户管理 报警监控平台 删除 */
export const ajax_center_delete = data => ajax_delete('/api_proxy/center/info/',data);

/*** 用户管理 报警监控平台 新增 */
export const ajax_center_put = data => ajax_put('/api_proxy/center/info/',data);

// export const ajax_post_bind = data => ajax_post('/api_proxy/company/bind/',data);
export const ajax_post_bind = data => ajax_post('/api_proxy/bind/info/',data);

export const ajax_state_between_center_list_by_company = data => ajax_get('/api_proxy/center/state_between_company_list_by_company/',data);
/*export const ajax_state_between_center_list_by_center = data => ajax_get('/api_proxy/center/state_between_company_list_by_center/',data);*/
//获取中心列表绑定
export const ajax_state_between_center_list = data => ajax_get('/api_proxy/center/list/',data);
//获取单位列表绑定
export const ajax_state_between_company_list = data => ajax_get('/api_proxy/company/list/',data);
//获取除中心用户之外其他用户的绑定关系
export const ajax_state_between_center_list_status_by_company = data => ajax_get('/api_proxy/company/bound_state_list/',data);
//获取中心用户的绑定关系
export const ajax_state_between_center_list_status_by_center = data => ajax_get('/api_proxy/center/bound_state_list/',data);

export const state_between_company_list_by_center = data => ajax_get('/api_proxy/company_cared/state_between_company_list_by_center/',data);
export const state_between_company_list_by_company = data => ajax_get('/api_proxy/company_cared/state_between_company_list_by_company/',data);

export const ajax_state_between_company_maint_list_by_company = data => ajax_get('/api_proxy/company_maint/state_between_company_list_by_company/',data);
export const ajax_state_between_company_maint_list_by_center = data => ajax_get('/api_proxy/company_maint/state_between_company_list_by_center/',data);

export const ajax_state_between_company_authority_list_by_company = data => ajax_get('/api_proxy/company_authority/state_between_company_list_by_company/',data);
export const ajax_state_between_company_authority_list_by_center = data => ajax_get('/api_proxy/company_authority/state_between_company_list_by_center/',data);

/*** 联网单位列表 列表 */
export const ajax_company_cared_list = data => ajax_get('/api_proxy/company_cared/filter_list_by_center_id/',data);

/*** 用户管理 联网单位 详情 */
export const ajax_company_info= data => ajax_get('/api_proxy/company_cared/info/',data);

/*** 联网单位 列表 */
export const ajax_company_list_center= data => ajax_get('/api_proxy/company_cared/bond_list_by_account/',data);

/*** 维保单位  列表 */
export const ajax_company_maint_center= data => ajax_get('/api_proxy/company_maint/bond_list_by_account/',data);

/*** 联网单位 列表 */
export const ajax_company_authority_center= data => ajax_get('/api_proxy/company_authority/bond_list_by_account/',data);

/*** 维保单位  列表 */
export const ajax_company_maint_put = data => ajax_put('/api_proxy/company_maint/info/',data);

/*** 用户管理 维保单位 详情 */
export const ajax_company_maint_info = data => ajax_get('/api_proxy/company_maint/info/',data);
/*** 用户管理 维保单位 新增 */
export const ajax_company_maint_post = data => ajax_post('/api_proxy/company_maint/info/',data);

/*** 联网单位  解除绑定 */
// export const ajax_delete_bind = data => ajax_delete('/api_proxy/company/bind/',data);
export const ajax_delete_bind = data => ajax_delete('/api_proxy/bind/info/',data);

/*** 用户管理 联网单位 新增 */
export const ajax_company_post= data => ajax_post('/api_proxy/company_cared/info/',data);

/*** 用户管理 消防主管参谋 详情 */
export const ajax_company_authority_info = data => ajax_get('/api_proxy/company_authority/info/',data);

/*** 用户管理 消防主管参谋 新增 */
export const ajax_company_authority_post = data => ajax_post('/api_proxy/company_authority/info/',data);

/*** 用户管理 联网单位 删除 */
export const ajax_company_delete= data => ajax_delete('/api_proxy/company_cared/info/',data);

/*** 用户管理 维保单位 删除 */
export const ajax_company_maint_delete = data => ajax_delete('/api_proxy/company_maint/info/',data);

/*** 用户管理 消防主管参谋 删除 */
export const ajax_company_authority_delete = data => ajax_delete('/api_proxy/company_authority/info/',data);

/*** 联网单位  绑定申请列表 */
// export const ajax_company_bind_list = data => ajax_get('/api_proxy/company_cared/bind_company_list/',data);
export const ajax_company_bind_list = data => ajax_get('/api_proxy/bind/apply_bind_list/',data);

/*** 联网单位  处理绑定 */
// export const ajax_put_bind = data => ajax_put('/api_proxy/company/bind/',data);
export const ajax_put_bind = data => ajax_put('/api_proxy/bind/info/',data);

export const ajax_post_integrity = data => ajax_post('/api_proxy/integrity/info/',data);

/*** 增加用户信息 -- 验证账号是否存在 */
export const ajax_user_check_account = data => ajax_get('/api_proxy/user/check_account/', data);
/*** 增加用户信息 */
export const ajax_user_add = data => ajax_post('/api_proxy/user/info/', data);






