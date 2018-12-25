import Axios from 'axios';
import {
  ajax_get,
  ajax_delete,
  ajax_post,
  ajax_put,
  file_updata,
  appAxios,
} from './common_api'

/*** 通过中心ID获取联网单位列表 */
export const ajax_companyList_by_center = data => ajax_get('/api_proxy/company_cared/filter_list_by_center_id/', data);

/** 通过中心、联网单位获取中心、联网单位下的实时告警 */
// 告警列表
export const ajax_eventList = (data) => ajax_get('/api_proxy/event/event_list/', data);


/** 获取当前单位|中心的父级中心，单位 */
export const ajax_parentCenter = (data) => ajax_get('/api_proxy/center/list_by_company_or_center/', data);


/** 获取指定单位的维保单位列表 */
export const ajax_maintCompany_by_company = (data) => ajax_get('/api_proxy/company_maint/list_by_company_cared/', data);


/*** 单位相关接口处理 */
export const ajax_companyList_and_eventList = (companyListData, eventListData, parentCenterData, maintCompanyData,authData) => {
  /** 联网单位 */
  if(companyListData.company_type=='info_company_cared'){
    let get_companyData={
      company_id:companyListData.center_id,
    }
    return new Promise((resolve, reject) => {
      let get_array = [ajax_company_info(get_companyData), ajax_eventList(eventListData), ajax_parentCenter(parentCenterData), ajax_maintCompany_by_company(maintCompanyData),ajax_authority_byCompanyCared(authData)]
      Axios.all(get_array).then(Axios.spread(function (companyList, eventList, parentList, maintList,authList) {
        let resultCompanyData={
          data:[companyList.data],
          total:'1'
        };
        resolve([resultCompanyData, eventList.data, parentList.data, maintList.data,authList.data]);
      })).catch(error => {
        console.log('ajax_error:', error);
      })
    })
  }
  //维保
  else if(companyListData.company_type=='info_company_maint'){
    let get_maintCompanyData={
      company_id:maintCompanyData.company_id,
    }
    return new Promise((resolve, reject) => {
      let get_array = [ajax_companyListBymaint(), ajax_maint_info(get_maintCompanyData),ajax_authority_byCompanyCared(authData)]
      Axios.all(get_array).then(Axios.spread(function (companyList, maintList,authList) {
        let resultCompanyData={
          list:[maintList.data],
          total:'1'
        };
        resolve([companyList.data, {list:[]}, {list:[]}, resultCompanyData,authList.data]);
      })).catch(error => {
        console.log('ajax_error:', error);
      })
    })
  }
  // 中心
  else if(companyListData.company_type=='info_center'){
    return new Promise((resolve, reject) => {
      let get_data={
        center_id:parentCenterData.company_id,
      }
      let get_array = [ajax_companyList_by_center(companyListData), ajax_eventList(eventListData), ajax_center_info(get_data),ajax_authority_byCompanyCared(authData)]
      Axios.all(get_array).then(Axios.spread(function (companyList, eventList, parentList, authList) {
        let resultCompanyData={
          list:[parentList.data],
          total:'1'
        };
        resolve([companyList.data, eventList.data, resultCompanyData,{list:[]},authList.data]);
      })).catch(error => {
        console.log('ajax_error:', error);
      })
    })
  }
  /** 主管 */
  else{
    return new Promise((resolve, reject) => {
      let get_array = [ajax_companyList_by_center(companyListData), ajax_eventList(eventListData), ajax_parentCenter(parentCenterData),ajax_authority_byCompanyCared(authData)]
      Axios.all(get_array).then(Axios.spread(function (companyList, eventList, parentList, authList,) {
        resolve([companyList.data, eventList.data, parentList.data,{list:[]},authList.data]);
      })).catch(error => {
        console.log('ajax_error:', error);
      })
    })
  }
}

/***  获取当前维保单位有关系的联网单位 */
export const ajax_companyListBymaint=(data)=>ajax_get('/api_proxy/company_cared/bond_list_by_account/',data);


/*** 获取联网单位基本信息 */
export const ajax_company_info = (data) => ajax_get('/api_proxy/company_cared/info/', data);

/** 获取中心基本信息 */
export const ajax_center_info = (data) => ajax_get('/api_proxy/center/info/', data);


/*** 获取维保基本信息 */
export const ajax_maint_info = (data) => ajax_get('/api_proxy/company_maint/info', data);


/** 获取主管机构信息 */
export const ajax_authority_info=(data)=>ajax_get('/api_proxy/company_authority/info/',data);


/**
 * 获取当前单位下的建筑列表
 * @param {*} data 
 */
export const ajax_currentCompany_buildigList=(data)=>ajax_get('/api_proxy/building/list_by_company_id/',data);

/** 获取消火栓列表 */
export const ajax_fireCockPublic_list = (data) => ajax_get('/api_proxy/equipment/list/', data);


/**告警处理 */
export const ajax_alarmEvent_deal = (data) => ajax_put('/api_proxy/event/info/', data);


/**消防水源相关处理 */
export const ajax_fireWaterSource = (fireCockPublickData) => {
  return new Promise((resolve, reject) => {
    let get_array = [ajax_fireCockPublic_list(fireCockPublickData)]
    Axios.all(get_array).then(Axios.spread(function (fireCockPublickData) {
      resolve([fireCockPublickData.data]);
    })).catch(error => {
      console.log('ajax_error:', error);
    })
  })
}

/** 获取指定建筑的楼层列表 */
export const ajax_floor_list = (data) => {
  return ajax_get('/api_proxy/floor/simple_floor_list/', data);
}
/**
 * 部件列表 多条件查询
 * @param {*} data
 */
export const ajax_component_list = (data) => {
  return ajax_get('/api_proxy/device/component_list_by_company_cared_id/', data);
}

/**
 * 获取设备列表
 * @param {*} data
 */
export const ajax_device_list = (data) => {
  return ajax_get('/api_proxy/device/device_list_by_any_ids/', data);
}

/**
 * 获取联网单位有关系的消防主管机构
 * @param {*} data 
 */
export const ajax_authority_byCompanyCared=data=>{
  return ajax_get('/api_proxy/company_authority/bond_list_by_account/',data);
}
