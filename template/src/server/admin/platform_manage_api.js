import {
    ajax_get,
    ajax_post,
    ajax_delete,
    ajax_put
} from "./admin_api";

// 获取列表
export const ajax_get_platformlist = data => ajax_get('/admin_proxy/platform/list_by_user_type/', data);