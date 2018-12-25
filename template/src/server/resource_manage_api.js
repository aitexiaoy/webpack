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


// 用户列表接口

export const ajax_user_list = data => ajax_get('/api_proxy/user/list_by_center_id_binded_company_user/', data);

/*** 获取用户信息 */
export const ajax_user_info = (data) => {
        return ajax_get('/api_proxy/user/info/', data);
    }
    /***停用激活 */
export const ajax_user_revise_is_active = (data) => {
        return ajax_put('/api_proxy/user/set_active_status/', data);
    }
    // 设备列表接口
export const ajax_equip_list = data => ajax_get('/api_proxy/device/device_list_by_center_id/', data);

    // 设备列表头部接口
export const ajax_device_list_header_by_center_id = data => ajax_get('/api_proxy/device/device_list_header_by_center_id/', data);