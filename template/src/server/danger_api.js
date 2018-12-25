// 隐患相关api
import {
    ajax_get,
    ajax_delete,
    ajax_post,
    ajax_put,
    file_updata
  } from './common_api'
  
  //请求隐患历史列表
  export const ajax_danger_list_by_site_id= data => ajax_get('/api_proxy/patrol/hazard/list_by_company_cared_hazard_past/',data);

  //隐患指派
  export const ajax_danger_list_assign= data => ajax_put('/api_proxy/patrol/hazard/by_designate_company/',data);

  //隐患历史记录删除
  export const ajax_danger_site_del = (data) => {
    return ajax_delete('/api_proxy/patrol/hazard/info/', data);
  }
  //隐患类型
  export const ajax_danger_type = (data) => {
    return ajax_get('/api_proxy/patrol/custom/list_by_company_custom/', data);
  }
  //获取地址
export const ajax_danger_adress = (data) => {
  return ajax_get('/api_proxy/patrol/hazard/list_by_address/', data);
}


