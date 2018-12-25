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


// 获取检查项字典表
export const ajax_class_list = data => ajax_get('/api_proxy/enum/list/enum_risk_class/', data);
export const ajax_type_list = data => ajax_get('/api_proxy/enum/list/enum_risk_type/', data);

// 最后一次检查分数 以及检测信息
export const ajax_get_lastscore = data => ajax_get('/api_proxy/risk_accessment/get_last_info/', data);
//统计信息
export const ajax_get_statisticinfo = data => ajax_get('/api_proxy/risk_accessment/get_risk_count/', data);
//联网单位获取检查记录
export const ajax_get_checkrecord = data => ajax_get('/api_proxy/risk_accessment/get_list_by_company_cared/', data);
// 联网单位获取三个月分时记录
export const ajax_get_threemonth_company = data => ajax_get('/api_proxy/risk_accessment/get_last_three_month_risk_by_company_cared/', data);



// 中心接口
// 获取最后一次评分
export const ajax_get_lastrecord_center = data => ajax_get('/api_proxy/risk_accessment/get_last_by_center/', data);
// 获取三个月成绩
export const ajax_get_threemonth_center = data => ajax_get('/api_proxy/risk_accessment/get_last_three_month_risk_by_center/', data);


//主管接口
// 获取最后一次评分
export const ajax_get_lastrecord_authority = data => ajax_get('/api_proxy/risk_accessment/get_last_by_company_authority/', data);
// 获取三个月成绩
export const ajax_get_threemonth_authority = data => ajax_get('/api_proxy/risk_accessment/get_last_three_month_risk_by_company_authority/', data);