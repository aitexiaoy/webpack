import {
    ajax_get,
    get_stream
} from './common_api';

//请求建筑列表
export const ajax_patrol_location_list_by_company_id=(data)=>ajax_get('/api_proxy/patrol/location/list_by_company_id/',data);

//请求人员足迹列表
export const ajax_patrol_sign_record_list_by_companyid=(data)=>ajax_get('/api_proxy/patrol/sign_record/list_by_companyid/',data);

//请求人员定位列表
export const ajax_patrol_sign_record_list_by_uid_list=(data)=>ajax_get('/api_proxy/patrol/sign_record/list_by_uid_list/',data);

//导出 excal
export const ajax_patrol_sign_record_export_record = data => get_stream('/api_proxy/patrol/sign_record/export_record/', data);

//判断 excal 是否有数据
export const ajax_patrol_sign_record_check_export_data = data => ajax_get('/api_proxy/patrol/sign_record/check_export_data/', data);

