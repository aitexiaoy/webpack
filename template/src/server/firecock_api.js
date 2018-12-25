// 市政消火栓相关接口

import {
    ajax_get,
    ajax_delete,
    ajax_post,
    ajax_put,
    file_updata
} from './common_api'
//消火栓告警统计 统计的信息变为  今日报警总数   已处理数  真实告警数 本周误报率
export const ajax_firecock_alarm_statistics= data => ajax_get('api_proxy/statistic/out_hydrant_event_count/',data);
//消火栓统计  旧统计接口不用了
export const ajax_firecock_statistics= data => ajax_get('api_proxy/statistic/out_hydrant_count/',data);
//市政消火栓列表
export const ajax_company_list_center= data => ajax_get('api_proxy/equipment/list/',data);
//市政消火栓告警历史列表
export const ajax_company_list_warn_data= data => ajax_get('api_proxy/event/hydrant_event_list/',data);
//告警历史详情页面
export const ajax_warn_edit_list= data => ajax_get('api_proxy/event/info/',data);
//告警历史用户信息查询
export const ajax_warn_user_info = data => ajax_get('api_proxy/user/info/',data);
//屏蔽接口
export const ajax_company_firecock_shield= data => ajax_post('api_proxy/subscribe/shilter_info/',data);
//市政消火栓新增
export const ajax_firecock_data_post= data => ajax_post('api_proxy/equipment/info/',data);
//市政消火栓详情请求
export const ajax_firecock_list_details= data => ajax_get('api_proxy/equipment/info/',data);

//市政消火栓配置设备信息新增
// export const ajax_firecock_equipment_info= data => ajax_post('api_proxy/device/info/',data);
export const ajax_firecock_equipment_info= data => ajax_post('api_proxy/device/hydrant_info/',data);

//市政消火栓配置设备信息修改（更新）
// export const ajax_firecock_equipment_update= data => ajax_put('api_proxy/device/info/',data);
export const ajax_firecock_equipment_update= data => ajax_put('api_proxy/device/hydrant_info/',data);

//市政消火栓删除设备接口  
export const ajax_device_delete= data => ajax_delete('api_proxy/device/info/',data);
//市政消火栓更新
export const ajax_firecock_data_put= data => ajax_put('api_proxy/equipment/info/',data);

//市政消火栓位置批量关联位置
export const ajax_firecock_address_put= data => ajax_put('api_proxy/equipment/list/',data);


//市政消火栓删除
export const ajax_firecock_data_delete= data => ajax_delete('api_proxy/equipment/info/',data);

//关联位置页面
export const ajax_firecock_asso_location_put= data=> ajax_get('api_proxy/equipment_summary/relevance/',data) 

//关联位置 一键关联
export const ajax_firecock_one_asso_location_put= data=> ajax_put('api_proxy/equipment_summary/relevance/',data) 
//市政消火栓上传文件
export const ajax_firecock_data_file_updata = data => file_updata(data);

//市政消火栓批量导入接口 
export const ajax_firecock_data_file_import = data => ajax_get('/api_proxy/equipment/hydrant_import/',data);
// device/component_info/
// /fe/api_proxy/equipment_summary/list/