import {
    ajax_get,
    ajax_delete,
    ajax_post,
    ajax_put,
    file_updata
} from './common_api'

//验证账户存在
export const ajax_account_is = data => ajax_get('/api_proxy/user/check_account/', data);