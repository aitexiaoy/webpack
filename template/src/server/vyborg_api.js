// 系统相关api
import {
    ajax_get,
    ajax_delete,
    ajax_post,
    ajax_put,
    file_updata,
    file_info
} from './common_api'

//   获取维保合同列表
export const ajax_vyborg_contract_list = data => ajax_get('api_proxy/maint/contract/list/', data);

// 维保合同详情
export const ajax_vyborg_contract_detail = data => ajax_get('api_proxy/maint/contract/info/', data);

//新增维保合同
export const ajax_vyborg_contract_add = data => ajax_post('api_proxy/maint/contract/info/', data);

//获取联网单位列表
//export const ajax_company_list = data => ajax_get('/api_proxy/company_cared/list/',data);
//获取联网单位列表绑定
export const ajax_company_list = data => ajax_get('/api_proxy/company_cared/bond_list_by_account/', data);

//获取关联主管机构
export const ajax_company_belong = data => ajax_get('/api_proxy/company_cared/info/', data);

//搜索联网单位
export const ajax_company_search = data => ajax_get('api_proxy/company_cared/search/', data);

//修改维保合同
// export const ajax_vyborg_contract_modify= data => ajax_put('api_proxy/company_maint/contract_info/',data);
export const ajax_vyborg_contract_modify = data => ajax_put('api_proxy/maint/contract/info/', data);
export const ajax_vyborg_project_post = data => ajax_post('api_proxy/maint/equip/contract_related/info/', data);
export const ajax_vyborg_project_put = data => ajax_put('api_proxy/maint/equip/contract_related/info/', data);



//删除维保合同
export const ajax_vyborg_contract_dell = data => ajax_delete('api_proxy/maint/contract/info/', data);

//获取指定合同下的建筑列表
export const ajax_vyborg_contract_buildlist = data => ajax_get('api_proxy/maint/contract/mt_building_list/', data);
//设置维保建筑
export const ajax_vyborg_contract_buildlist_set = data => ajax_post('api_proxy/maint/contract/mt_building/', data);
//取消维保建筑
export const ajax_vyborg_contract_buildlist_del = data => ajax_delete('api_proxy/maint/contract/mt_building/', data);
// export const ajax_vyborg_contract_buildlist = data => ajax_get('api_proxy/building/list_by_company_id/', data);
// export const ajax_vyborg_contract_buildlist= data => ajax_get('api_proxy/company_maint/contract_building_list/',data);

//获取合同中的建筑信息
export const ajax_vyborg_contract_buildinfo = data => ajax_get('api_proxy/company_maint/contract_building_info/', data)

//新增合同中的建筑
export const ajax_vyborg_contract_buildadd = data => ajax_post('api_proxy/building/info/', data)

// 修改合同建筑信息
export const ajax_vyborg_contract_buildmodify = data => ajax_put('api_proxy/building/info/', data)

// 删除合同中的的建筑
export const ajax_vyborg_contract_builddell = data => ajax_delete('api_proxy/building/info/', data)


//获取指定维保单位下合同列表
export const ajax_vyborg_contract_appoint_list = data => ajax_get('api_proxy/company_maint/contract_list_by_company_cared_id/', data);



//获取维保设施  新接口
export const ajax_vyborg_project_list = data => ajax_get('api_proxy/maint/enum/list/enum_equip_type/', data);
export const ajax_vyborg_contract_related_equip_list = data => ajax_get('api_proxy/maint/equip/contract_related/list/', data);
// export const ajax_vyborg_project_list= data => ajax_get('api_proxy/company_maint/facility_list/',data);
// 获取主系统接口
export const ajax_vyborg_oneSys_list = data => ajax_get('api_proxy/maint/enum/list/enum_system_type/', data);
//获取指定维保设施
export const ajax_vyborg_equip_list = data => ajax_get('api_proxy/company_maint/facility_info/', data);
export const ajax_vyborg_equip_list_rela = data => ajax_get('api_proxy/maint/equip/contract_related/list', data);


//获取维保计划
export const ajax_vyborg_plan_list = data => ajax_get('api_proxy/maint/plan/list/', data);

//获取维保详情
export const ajax_vyborg_plan_detail = data => ajax_get('api_proxy/company_maint/plan_info/', data);

//新增维保计划
export const ajax_vyborg_plan_add = data => ajax_post('api_proxy/maint/plan/info/', data);

// 修改维保计划
export const ajax_vyborg_plan_modify = data => ajax_put('api_proxy/company_maint/plan_info/', data);
export const ajax_vyborg_plan_modify_put = data => ajax_put('api_proxy/maint/plan/info/', data);

// 删除维保计划
export const ajax_vyborg_plan_dell = data => ajax_delete('api_proxy/maint/plan/info/', data);



//获取维保报告
export const ajax_vyborg_report_list = data => ajax_get('api_proxy/maint/report/list_by_company_authority/', data);

//维保报告新增
// export const ajax_report_add= data => ajax_post('api_proxy/company_maint/report_info/',data);
export const ajax_report_add = data => ajax_post('api_proxy/maint/report/info/', data);

//维保报告修改
export const ajax_report_modify = data => ajax_put('api_proxy/company_maint/report_info/', data);

//删除维保报告
export const ajax_report_dell = data => ajax_delete('api_proxy/company_maint/report_info/', data);



//获取维修任务列表
export const ajax_repaire_task_list_cared = data => ajax_get('api_proxy/maint/task/list_by_company_cared/', data);
export const ajax_repaire_task_list = data => ajax_get('api_proxy/maint/task/list_by_company_maint/', data);

//获取任务详情
export const ajax_repaire_task_detail = data => ajax_get('api_proxy/maint/task/maint_info/', data);
// 获取维修任务详情
export const ajax_repaire_task_detail_get = data => ajax_get('api_proxy/maint/task/repair_info/', data);

//新增维修任务
export const ajax_repaire_task_add = data => ajax_post('api_proxy/maint/task/maint_info/', data);
// 维保修改
export const ajax_maint_task_add_put = data => ajax_put('api_proxy/maint/task/maint_info/', data);
export const ajax_repaire_task_add_post = data => ajax_post('api_proxy/maint/task/repair_info/', data);
//编辑维修任务
export const ajax_repaire_task_add_put = data => ajax_put('api_proxy/maint/task/repair_info/', data);

//获取项目名称下拉选项
export const ajax_project_name_list = data => ajax_get('api_proxy/maint/project/list/', data);

//修改维修任务
export const ajax_repaire_task_modify = data => ajax_put('api_proxy/company_maint/task_info/', data);
export const ajax_repaire_task_edit = data => ajax_put('api_proxy/maint/task/maint_info/', data);

//删除维修任务
export const ajax_repaire_task_dell = data => ajax_delete('api_proxy/maint/task/maint_info/', data);

//获取维修项信息
export const ajax_repaire_item_list = data => ajax_get('api_proxy/company_maint/facility_check_item_qa/', data);

//维修设施问卷结果
export const ajax_repaire_equip_res = data => ajax_post('api_proxy/company_maint/task_confirm_info/', data);
export const ajax_repaire_equip_res_put = data => ajax_put('api_proxy/maint/equip/task_related/equip_confirm/info/', data);

//维修结果提交
export const ajax_repaire_result = data => ajax_post('api_proxy/company_maint/task_confirm_info/', data);

//生成维保报告 维保角色 王凯0802
export const ajax_report_generate = data => ajax_post('api_proxy/maint/report/auto_create_report/', data);

//联网单位角色
//维修记录
export const ajax_record_list = data => ajax_get('api_proxy/company_maint/list_by_company_cared_id/', data);


//获取联网单位下的维保公司列表 没有 创建
export const ajax_company_maint_center = data => ajax_get('/api_proxy/company_maint/bond_list_by_account/', data);
export const ajax_company_maint_relation_list = data => ajax_get('api_proxy/maint/contract/company_maint_list/', data);

//上传维保合同
export const ajax_contract_file_updata = data => file_updata(data);

//获取人员信息
export const ajax_user_list = data => ajax_get('/api_proxy/user/list_by_company_id/', data);

export const ajax_contract_related_project = data => ajax_get('/api_proxy/maint/equip/contract_related/list/', data);


/**
 *
 * 维修任务新的接口
 *
 */
// 获取任务详情
export const ajax_repaire_task_detail_new = data => ajax_get('api_proxy/maint/task/repair_info/', data);
// 新增维修任务
export const ajax_repair_info_add = data => ajax_post('api_proxy/maint/task/repair_info/', data);
// 删除维修任务
export const ajax_repaire_task_dell_new = data => ajax_delete('api_proxy/maint/task/repair_info/', data);
// 修改维修任务
export const ajax_repaire_task_modify_new = data => ajax_put('api_proxy/maint/task/repair_info/', data);


/**
 *
 * 维保报告新的接口
 *
 */
//获取维保报告
export const ajax_vyborg_report_list_new = data => ajax_get('api_proxy/maint/report/list_by_company_maint/', data);

//维保报告新增
// export const ajax_report_add= data => ajax_post('api_proxy/company_maint/report_info/',data);

//维保报告修改
// export const ajax_report_modify= data => ajax_put('api_proxy/company_maint/report_info/',data);

//删除维保报告
export const ajax_report_dell_new = data => ajax_delete('api_proxy/maint/report/info/', data);


//主管未提交报告单位
export const ajax_authority_report_no = data => ajax_get('api_proxy/maint/report/company_cared_unrecord_list/', data);
//主管已提交报告单位
export const ajax_authority_report_is = data => ajax_get('api_proxy/maint/report/company_cared_record_list/', data);
export const ajax_authority_report_should = data => ajax_get('api_proxy/maint/report/should_record_list/', data);



// 联网单位报告列表接口
export const ajax_company_report_list_new = data => ajax_get('api_proxy/maint/report/list_by_company_cared/', data);
export const ajax_company_report_del_new = data => ajax_delete('api_proxy/maint/report/info/', data);
export const ajax_company_report_edit = data => ajax_put('api_proxy/maint/report/info/', data);


// 备案接口
export const ajax_report_record = data => ajax_post('api_proxy/maint/report/record/', data);

// 获取设施检查项的详情 接口
export const ajax_vyborg_equip_list_new = data => ajax_get('api_proxy/maint/equip/task_related/equip_confirm/info/', data);
// 修改设施检查项的详情 接口
export const ajax_vyborg_equip_modify_new = data => ajax_put('api_proxy/maint/equip/task_related/equip_confirm/info/', data);

// 获取和主管单位绑定的联网单位（非影子单位）
export const ajax_get_authority_raletion_company_list = data => ajax_get('/api_proxy/company_cared/bond_list_by_account/', data);

// 获取主管统计信息
export const ajax_get_authority_statistic = data => ajax_get('/api_proxy/maint/report/statistic/', data);

//获取文件详细信息
export const ajax_get_file_detail = data => file_info('file/info', data);
