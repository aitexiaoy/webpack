import {
  ajax_get,
  ajax_delete,
  ajax_post,
  ajax_put,
  file_updata
} from './common_api'
export const ajax_notice_data_file_updata = data => file_updata(data)
//新增
export const ajax_notice_post = data =>
  ajax_post('/api_proxy/notification/info/', data)
//已接受list
export const ajax_notice_receiver_list = data =>
  ajax_get('/api_proxy/notification/receiver_list/', data)
//已发送list
export const ajax_notice_sent_list = data =>
  ajax_get('/api_proxy/notification/sender_list/', data)
//put 修改
export const ajax_notice_put = data =>
  ajax_put('/api_proxy/notification/info/', data)
//get 获取
export const ajax_notice_get = data =>
  ajax_get('/api_proxy/notification/info/', data)
//get 接收者签收状态列表
export const ajax_notice_status_get = data =>
  ajax_get('/api_proxy/notification/status/', data)
export const ajax_notice_user_get = data =>
  ajax_get('/api_proxy/user/mix_list_by_uid', data)
//只有告警用到
export const ajax_notice_alarmUser_get = data =>
  ajax_get('api_proxy/user/list_by_company_id/', data)
