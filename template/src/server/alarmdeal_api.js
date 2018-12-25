/***
 * 告警处理接口
 */
import { ajax_get, ajax_delete, ajax_post, ajax_put } from './common_api'
import axios from 'axios'
/** 被屏蔽的告警列表 */
export const ajax_event_shilter = data => {
  return ajax_get('/api_proxy/event/event_shilter_list/', data)
}
// 告警列表
export const ajax_event_list = data => {
  return ajax_get('/api_proxy/event/event_list/', data)
}

/***告警列表新的*/
export const ajax_new_event_list = data => {
  return ajax_get('/api_proxy/event/list_treats_v2/', data)
}

/*** 告警列表合并接口 */
export const ajax_new_event_list_merge = data => {
  return ajax_get('/api_proxy/event/list_merge_treats_v2/', data)
}

/*** 获取合并的数据 */
export const ajax_merge_event_list = data => {
  return ajax_get('/api_proxy/event/list_device_treats_v2/', data)
}

/** 获取设备连续7天报警数 以及30天误报率 */
export const ajax_get_device_seven_data = data => {
  return ajax_get('/api_proxy/event/event_count_with_7days/', data)
}

//隐患大队下身份列表
export const ajax_danger_list = data => {
  return ajax_get(
    '/api_proxy/patrol/hazard/list_by_company_cared_hazard/',
    data
  )
}
//消防大队隐患列表
export const ajax_executive_director_danger_list = data => {
  return ajax_get('/api_proxy/patrol/hazard/list_by_company_hazard/', data)
}
//隐患类型
export const ajax_danger_type = data => {
  return ajax_get('/api_proxy/patrol/custom/list_by_company_custom/', data)
}
//获取地址
export const ajax_danger_adress = data => {
  return ajax_get('/api_proxy/patrol/hazard/list_by_address/', data)
}

/**
 * 隐患操作按钮请求
 */

//隐患信息删除
export const ajax_danger_site_del = data => {
  return ajax_delete('/api_proxy/patrol/hazard/info/', data)
}
//驳回
export const ajax_danger_site_reject = data => {
  return ajax_post('/api_proxy/patrol/hazard/by_hazard_reject/', data)
}
//处理
export const ajax_danger_site_deal = data => {
  return ajax_post('/api_proxy/patrol/hazard/dispost_by_comfirm_hazard/', data)
}
//主管隐患关闭

export const ajax_danger_site_close = data => {
  return ajax_put('/api_proxy/patrol/hazard/by_hazard_close/', data)
}
//指派获取搜索单位
export const ajax_get_assign_company = data => {
  return ajax_get('/api_proxy/patrol/hazard/list_by_company/', data)
}
//主管单位指派
export const ajax_director_assign = data => {
  return ajax_put('/api_proxy/patrol/hazard/by_designate_company/', data)
}
//单位分派个人
export const ajax_company_assign_person = data => {
  return ajax_put('/api_proxy/patrol/hazard/by_designate_user/', data)
}
//获取指派人员
export const ajax_get_assign_person = data => {
  return ajax_get('/api_proxy/patrol/hazard/by_designate_user/', data)
}
//获取隐患详细信息 /api_proxy/patrol/hazard/by_hazard_detail/
export const ajax_get_danger_detail = data => {
  return ajax_get('/api_proxy/patrol/hazard/by_hazard_detail/', data)
}
/**
 * 隐患操作按钮请求
 */

//全部数据
export const ajax_event_list_count = data => {
  // return ajax_get('/api_proxy/event/event_list_count/', data);
  return ajax_get('/api_proxy/event/event_list_count_v2/', data)
}

//本周 ** 数量
export const ajax_event_list_count_by_type = data => {
  return ajax_get('/api_proxy/statistic/event_count/', data)
}

/*** 报警短信推送（火警、故障、异常、摄像头）*/
export const ajax_fire_put_info = data => {
  return ajax_post('/api_proxy/extend_service/alarm_push/', data)
}

const base_url_subscrible = '/api_proxy/subscribe/subscribe_info/'
/** 添加重点关注 */
export const ajax_subscrible_add = data => {
  return ajax_post(base_url_subscrible, data)
}
/** 删除重点关注 */
export const ajax_subscrible_del = data => {
  return ajax_delete(base_url_subscrible, data)
}

/** 添加屏蔽 */
const base_url_shilter = '/api_proxy/subscribe/shilter_info/'
export const ajax_shilter_add = data => {
  return ajax_post(base_url_shilter, data)
}

/** 删除屏蔽 */
export const ajax_shilter_del = data => {
  return ajax_delete(base_url_shilter, data)
}

/** 关注屏蔽单位或部件接口 */
export const ajax_shilter = data => {
  return ajax_post('/api_proxy/shilter/info/', data)
}

/** 取消单位或部件接口 */
export const ajax_shilter_delete = data => {
  return ajax_delete('/api_proxy/shilter/info/', data)
}

//************** 告警受理头部 **************************/

//获取告警屏蔽的头部
export const ajax_header_event_shilter_list = data =>
  ajax_get('/api_proxy/event/header_event_shilter_list/', data)

//获取告警正常+重点关注的头部
export const ajax_header_event_list = data =>
  ajax_get('/api_proxy/event/header_event_list/', data)

//************** 告警历史头部 **************************/

//获取告警历史头部
export const ajax_header_list_by_company_cared = data =>
  ajax_get('/api_proxy/event/header_list_by_company_cared/', data)

var instance = axios.create({
  baseURL: '',
  timeout: 60000,
  headers: { 'X-Custom-Header': 'foobar' }
})
instance.defaults.headers.common['Authorization'] =
  'token ' +'ZXlKaGJHY2lPaUprWldaaGRXeDBJaXdpZEhsd0lqb2lTbGRRSW4wOjFnV3pQOTpxcGVxakxHYlUwdGtma09zd0tGUjkwNEpGYWc.ZXlKd2JHRjB    abTl5YlNJNklrZEZUa1ZTUVV3aUxDSnBZWFFpT2pFMU5EUTJNREUwT0RNc0luVnpaWEpmYVdRaU9pSTJOallpTENKMWMyVnlYM1I1Y0dVaU9qSXNJblZ6WlhKZmN    tOXNaU0k2TVgwOjFnV3pQOTozdS1mUlhxYjdTSjV3MjlwdC1jSjU2RHJlUVk.49020d6a5e57bf0cff2c941abfa762e5';
export const ajax_search_list = data =>
  instance.get('/associate_word', { params: data })
