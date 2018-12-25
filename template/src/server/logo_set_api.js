import {ajax_put} from "./common_api";


/*** 用户管理 报警监控平台 新增 */
export const ajax_center_put = data => ajax_put('/api_proxy/center/info/',data);

/*** 用户管理 报警监控平台 新增 */
export const ajax_maint_put = data => ajax_put('/api_proxy/company_maint/info/',data);

/*** 用户管理 报警监控平台 新增 */
export const ajax_authority_put = data => ajax_put('/api_proxy/company_authority/info/',data);

export const ajax_cared_put= data => ajax_put('/api_proxy/company_cared/info/',data);
