import {
    ajax_get,
    ajax_delete,
    ajax_post,
    ajax_put,
    file_updata,
    ajax_aftet
} from './common_api'
import { axios_before_data} from "./yuanzifengzhang.js"
import fblocalstorage from '../assets/js/local_storage.js'
import axios from 'axios'
export const ajax_message_whole_number = (data) => ajax_post('/api_proxy/integrity/info/', data)


/** 请求中心单位的联网单位列表 */
export const ajax_company_list_center = (data) => {
    return ajax_get('/api_proxy/center/bond_list_by_center/', data);
}

export const ajax_company_list_authority = (data) => {
    return ajax_get('/api_proxy/company_cared/list_by_authority_id/', data);
}

export const ajax_company_list_maint = (data) => {
    return ajax_get('/api_proxy/company_cared/list_by_maint_id/', data);
}

let base_url_company = '/api_proxy/company_cared/info/'

/*** 获取联网单位基本信息 */
export const ajax_company_info = (data) => {
    return ajax_get(base_url_company, data);
}

/**
 * 修改联网单位信息
 * @param {*} data
 */
export const ajax_company_revise = (data) => {
    return ajax_put(base_url_company, data);
}

/**
 * 获取指定联网单位下的建筑物 列表 新接口 @wangkai
 * @param {*} data
 */
export const ajax_buildings_list = (data) => {
    return ajax_get('/api_proxy/building/format_list_by_company_id/', data);
}

/**
 * 获取指定联网单位下的建筑物
 * @param {*} data
 */
export const ajax_buildings_company = (data) => {
    return ajax_get('/api_proxy/building/list_by_company_id/', data);
}

/** 建筑物信息的基本数据请求接口 */
const base_url_building = '/api_proxy/building/info/';

/**
 * 获取指定建筑信息
 * @param {*} data
 */
export const ajax_building_info = (data) => {
    return ajax_get(base_url_building, data);
}

/****
 * 添加建筑物
 */
export const ajax_building_add = (data) => {
        return ajax_post(base_url_building, data);
    }
    /****
     * 修改建筑物信息
     */
export const ajax_building_revise = (data) => {
    return ajax_put(base_url_building, data);
}

/****
 * 删除建筑物信息
 */
export const ajax_building_del = (data) => {
    return ajax_delete(base_url_building, data);
}


/***
 * 系统信息
 */
const base_url_system = '/api_proxy/system/info/';

/**
 * 获取系统信息
 * @param {*} data
 */
export const ajax_system_info = (data) => {
        return ajax_get(base_url_system, data);
    }
    /**
     * 添加系统
     * @param {*} data
     */
export const ajax_system_add = (data) => {
    return ajax_post(base_url_system, data);
}

/****
 * 修改系统
 */
export const ajax_system_revise = (data) => {
        return ajax_put(base_url_system, data);
    }
    /****
     * 删除系统
     */
export const ajax_system_del = (data) => {
        return ajax_delete(base_url_system, data);
    }
    /** 获取指定系统下的报警主机信息 */
export const ajax_alarmer_by_systemId = (data) => ajax_get('/api_proxy/device/alarmer_by_system_id', data);
/** 获取联网单位下报警主机列表 */
export const ajax_alarmer_by_companyId = (data) => ajax_get('/api_proxy/device/alarmer_by_company_id', data);
/**
 * 获取指定联网单位的系统列表
 * @param {*} data
 */
export const ajax_system_list_company = (data) => {
        return ajax_get('/api_proxy/system/list_by_company_id/', data);
    }
    /**
     * 获取联网单位下指定建筑指定系统类型的系统
     * @param {*} data
     */
export const ajax_system_list = (data) => {
        return ajax_get('/api_proxy/system/list/', data);
    }
    /**
     * 获取联网单位下指定建筑指定系统类型的系统  新接口 带分页
     * @param {*} data
     */

export const ajax_system_list_new = (data) => {
        return ajax_get('/api_proxy/system/compos_list/', data);
        // return ajax_get('/api_proxy/system/mix_list/', data);
    }
    //删除报警主机和系统的关系 @wangkia 2018.12.11 新接口
export const ajax_system_alarmer_del = (data) => {
        return ajax_delete('/api_proxy/device/del_alarmer_and_system/', data);
    }
    // 删除主机个设备的关系  @wangkia 2018.12.11 新接口
export const ajax_alarmer_dtu_del = (data) => {
    return ajax_delete('/api_proxy/device/del_dtu_and_alarmer/', data);
}

const base_url_component = '/api_proxy/device/component_info/';

/**
 * 获取指定部件信息
 * @param {*} data
 */
export const ajax_component_info = (data) => {
    return ajax_get(base_url_component, data);
}

/**
 * 添加部件信息
 * @param {*} data
 */
export const ajax_component_add = (data) => {
    return ajax_post(base_url_component, data);
}


/**
 * 修改部件信息
 * @param {*} data
 */
export const ajax_component_revise = (data) => {
        return ajax_put(base_url_component, data);
    }
    /**
     * 删除指定部件
     * @param {*} data
     */
export const ajax_component_del = (data) => {
    return ajax_delete(base_url_component, data);
}

/**
 * 部件列表 多条件查询
 * @param {*} data
 */
export const ajax_component_list = (data) => {
    return ajax_get('/api_proxy/device/component_list_by_company_cared_id/', data);
}

/** 获取指定联网单位部件  【弃用】 */
export const ajax_component_list_company = (data) => {
        return ajax_get('/api_proxy/company_cared/component_list/', data);
    }
    /** 查询部件,设备列表列表 */
export const ajax_device_component_list = (data) => {
    return ajax_get('/api_proxy/device/device_list_by_mulit_params/', data);
}

/** get 部件,设备 筛选列表 */
// export const ajax_device_model_by_any_ids = (data) => {
//   return ajax_get('/api_proxy/device/device_model_by_any_ids/', data);
// }


/***
 * 设备，部件，报警主机统一接口
 */

const base_url_deviceAll = '/api_proxy/device/info/';
/**
 * 新增设备，部件，报警主机
 * @param {*} data
 */
export const ajax_deviceAll_add = (data) => ajax_post(base_url_deviceAll, data);
export const ajax_deviceAll_revise = (data) => ajax_put(base_url_deviceAll, data);
export const ajax_deviceAll_del = (data) => ajax_delete(base_url_deviceAll, data);
export const ajax_deviceAll_info = (data) => ajax_get(base_url_deviceAll, data);

/**
 * 获取单位下的dtu列表
 * @param {*} data
 */
export const ajax_dtulist_by_company = (data) => ajax_get('api_proxy/device/dtu_list_by_company/', data);




/*** 设备管理 */
const base_url_device = '/api_proxy/device/dtu_info/';

/**
 * 获取dtu信息
 * @param {} data
 */
export const ajax_device_info = (data) => {
        return ajax_get(base_url_device, data);
    }
    /**
     * 新增dtu信息 设备信息
     * @param {*} data
     */
export const ajax_device_add = (data) => {
        return ajax_post(base_url_device, data);
    }
    /**
     * 修改dtu信息  设备信息
     * @param {*} data
     */
export const ajax_device_revise = (data) => {
    return ajax_put(base_url_device, data);
}

/**
 * 删除设备信息 dtu信息
 * @param {*} data
 */
export const ajax_device_del = (data) => {
    return ajax_delete(base_url_device, data);
}

/**
 * 报警主机相关接口
 */
const base_url_alarmhost = '/api_proxy/device/alarmer_info/'

/**
 * 获取报警主机信息
 * @param {*} data
 */
export const ajax_alarmer_info = (data) => {
    return ajax_get(base_url_alarmhost, data);
}

/**
 * 新增报警主机
 */
export const ajax_alarmer_add = data => {
        return ajax_post(base_url_alarmhost, data);
    }
    /**
     * 修改报警主机信息
     * @param {*} data
     */
export const ajax_alarmer_revise = data => {
        return ajax_put(base_url_alarmhost, data);
    }
    /**
     * 删除报警主机信息
     * @param {*} data
     */
export const ajax_alarmer_del = data => {
        return ajax_delete(base_url_alarmhost, data);
    }
    /** 获取指定用户信息传输装置下的报警主机列表 */
export const ajax_alarmer_list_device = (data) => {
    return ajax_get('/api_proxy/device/alarmer_by_dtu_id/', data);
}


/**
 * 获取设备列表
 * @param {*} data
 */
export const ajax_device_list = (data) => {
    return ajax_get('/api_proxy/device/device_list_by_any_ids/', data);
}


/*** 动态数据查询(联网单位)   告警历史 */
export const ajax_event_list_history = (data) => {
        return ajax_get('api_proxy/event/list_by_company_cared/', data);
    }
    /*** 删除  告警历史 */
export const ajax_event_del = (data) => {
        return ajax_delete('api_proxy/event/info/', data);
    }
    /*** 查看详情  告警历史 */
export const ajax_event_confirm = (data) => {
        return ajax_put('api_proxy/event/info/', data);
    }
    /*** 根据event_id 获取告警详细 */
export const ajax_event_info = (data) => {
    return ajax_get('api_proxy/event/info/', data);
}

/** 根据uuid 获取告警详细 */

export const ajax_event_info_by_uuid = (data) => {
    return ajax_get('api_proxy/event/info_by_uuid/', data);
}


/*** 处理告警 */
export const ajax_history_event_info = (data) => {
    return ajax_get('api_proxy/event/list_by_device/', data);
}


const base_url_user = '/api_proxy/user/info/';


/*** 用户信息列表 */
export const ajax_user_list = (data) => {
        return ajax_get('/api_proxy/user/list_by_company_id/', data);
    }
    /*** 获取用户信息 */
export const ajax_user_info = (data) => {
        return ajax_get(base_url_user, data);
    }
    /*** 删除用户信息 */
export const ajax_user_del = (data) => {
        return ajax_delete(base_url_user, data);
    }
    /*** 增加用户信息 */
export const ajax_user_add = (data) => {
        return ajax_post(base_url_user, data);
    }
    /*** 增加用户信息 -- 验证账号是否存在 */
export const ajax_user_check_account = data => ajax_get('/api_proxy/user/check_account/', data);
/*** 修改用户信息 */
export const ajax_user_revise = (data) => {
        return ajax_put(base_url_user, data);
    }
    /***停用激活 */
export const ajax_user_revise_is_active = (data) => {
    return ajax_put('/api_proxy/user/set_active_status/', data);
}






/** 维保 */
let base_url_maint = '/api_proxy/company_maint/info/';
/*** 查询维保单位列表 */
export const ajax_maint_list = (data) => {
        return ajax_get('/api_proxy/company_maint/list/', data);
    }
    /*** 删除维保单位信息 */
export const ajax_maint_del = (data) => {
        return ajax_delete(base_url_maint, data);
    }
    /*** 添加维保单位信息 */
export const ajax_maint_add = (data) => {
        return ajax_post(base_url_maint, data);
    }
    /*** 修改维保单位信息 */
export const ajax_maint_revise = (data) => {
        return ajax_put(base_url_maint, data);
    }
    /*** 查询维保单位信息 */
export const ajax_maint_info = (data) => {
    return ajax_get(base_url_maint, data);
}



/** 楼层信息 */
let base_url_floor = '';
export const ajax_floor_list = (data) => {
    return ajax_get('/api_proxy/floor/simple_floor_list/', data);
}


/*** 区域信息 */
export const ajax_area_list = (data) => {
    return ajax_get('/api_proxy/floor/floor_area_list/', data);
}


/*** 平面图相关接口 */
let base_url_mapImg = '/api_proxy/device_map/info/';
export const ajax_mapImg_add = (data) => {
        return ajax_post(base_url_mapImg, data);
    }
    /** 获取平面图 */
export const ajax_mapImg_info = (data) => {
        return ajax_get(base_url_mapImg, data);
    }
    /** 删除平面图 */
export const ajax_mapImg_del = (data) => {
    return ajax_delete(base_url_mapImg, data);
}

/** 替换平面图 */
export const ajax_mapImg_revise = (data) => {
        return ajax_post(base_url_mapImg, data);
    }
    /** 修改平面图顶点坐标 */
export const ajax_mapImg_coordinate = (data) => {
        return ajax_post(base_url_mapImg, data);
    }
    /** 获取指定楼层平面图 */
export const ajax_mapImg_floor_list = (data) => {
    return ajax_get(base_url_mapImg, data);
}

/** 获取指定平面图所有部件列表 */
export const ajax_mapImg_component = (data) => {
    return ajax_get('/api_proxy/device_map/dots/', data);
}

/** 部件统计 */
export const ajax_mulit_params = (data) => {
    return ajax_get('/api_proxy/device/device_count_by_mulit_params', data);
}

/** 重置关联 */
export const ajax_mapImg_reset = (data) => {
    return ajax_delete('/api_proxy/device_map/dots/', data);
}

/** 关联点位图 */
export const ajax_mapImg_component_about = (data) => {
    return ajax_post('/api_proxy/device_map/dots/', data);
}


/** 楼层区域管理 */
let base_url_floorArea = "/api_proxy/floor/floor_info/"

/**
 * 新增楼层区域
 */
export const ajax_floorArea_add = (data) => {
    return ajax_post(base_url_floorArea, data);
}

/**
 * 修改楼层区域信息
 */
export const ajax_floorArea_revice = (data) => {
    return ajax_put(base_url_floorArea, data);
}

/**
 * 删除区域以及区域的平面图
 * */
export const ajax_area_del = (data) => {
    return ajax_delete('/api_proxy/floor/floor_area_info/', data);
}

/**
 * 删除楼层以及楼层区域中的平面图
 */
export const ajax_floorArea_del = (data) => {
    return ajax_delete(base_url_floorArea, data);
}

/**
 * 获取楼层，区域以及平面图
 */

export const ajax_floorArea_list = (data) => {
    return ajax_get('/api_proxy/floor/floor_list/', data);
}


// 上传文件
export const ajax_firecock_data_file_updata = data => file_updata(data);


//下载 excal
export const ajax_import_Xlsx = (url) => {
    return new Promise((resolve) => {
        let { href } = Vue.$router.resolve({
            path: url
        })
        console.log(href, "href")
        href = href.replace('#/', '');
        window.open(href);
        resolve();
    })
};

//导入部分
const instance = axios.create({
    baseURL: "",
    timeout: 60000,
    headers: { "X-Custom-Header": "foobar" }
});
const ajax_import_get = (url, data) => {
  instance.defaults.headers.common['Authorization'] = 'token ' + fblocalstorage.getStore('user').user_token || "";
  data = axios_before_data('get', data);
  return instance.get(url, {
    params: data,
    // cancelToken: new axios.CancelToken(function (c) {
    //   cancel_list.push(c);
    // })
  })
  // .then(result => {
  //   return ajax_aftet(result);
  // })
}

/**
 * 独立式设备 批量导入
 */
export const ajax_independ_import = (data) => ajax_import_get("/import/import_dtu?file_id=" + data.file_id + "&creater_id=" + data.creater_id + "&company_id=" + data.company_id)
    /**
     * 部件 批量导入
     */
export const ajax_component_import = (data) => ajax_import_get("/import/import_component?file_id=" + data.file_id + "&creater_id=" + data.creater_id + "&company_id=" + data.company_id)
    /**
     * 联网单位 批量导入
     */
export const ajax_company_cared_import = (data) => ajax_import_get("/import/import_company_cared?file_id=" + data.file_id + "&creater_id=" + data.creater_id + "&center_id=" + data.center_id)
    /**
     * 查询导入是否成功
     */
export const ajax_import_result = (data) => ajax_import_get("/import/import_result?file_id=" + data.file_id)


/**
 * 视频
 * */
// 视频列表
export const ajax_video_list = (data) => {
        return ajax_get('/api_proxy/device/device_video_by_monitor_list/', data);
    }
    // 视频列表查询
export const ajax_video_list_search = (data) => {
    return ajax_get('/api_proxy/device/device_video_by_monitor/', data);
}

// 视频--添加
export const ajax_video_new_add = (data) => {
    return ajax_post('/api_proxy/device/device_video_by_monitor/', data);
}

/*** 摄像头 删除 */
export const ajax_video_delete = (data) => {
    return ajax_delete('/api_proxy/device/device_video_by_monitor/', data);
}

/**
 * 获取中心下的摄像头列表
 * @param {*} data 
 */
export const ajax_getCenter_video_list = (data) => {
        return ajax_get('/api_proxy/device/device_video_by_center_list/', data);
    }
    /**
     * 获取设备相关的摄像头
     * @param {*} data 
     */
export const ajax_getVideoList_by_device = (data) => {
    return ajax_get('/api_proxy/device/device_list_by_device_id/', data);
}


/***
 * 获取萤石云的token
 */
export const get_yingshi_token = (data) => {
    return ajax_get('/api_proxy/device/device_video_token', data);
}


//获取视频品牌
export const ajax_video_brand = (data) => {
    return ajax_get('/api_proxy/device/device_video_by_trademark/', data);
}



// 联网单位卡片信息
export const ajax_company_cared = (data) => {
    return ajax_get('/api_proxy/company_cared/get_admin_user/', data);
}

export const ajax_company_or_center_info = data => {
    let url;
    if (data.type == 'info_company_cared') {
        url = '/api_proxy/company_cared/info/';
    } else if (data.type == 'info_company_maint') {
        url = '/api_proxy/company_maint/info/';
    } else if (data.type == 'info_company_authority') {
        url = '/api_proxy/company_authority/info/';
    } else if (data.type == 'info_company_household') {
        url = '/api_proxy/company_cared/info/';
    } else {
        url = '/api_proxy/center/info/';
    }
    return ajax_get(url, data);
}

// ========================
//新增联网单位
export const ajax_company_cared_post = data => ajax_post('/api_proxy/company_cared/info/', data);
//新增中心
export const ajax_center_post = data => ajax_post('/api_proxy/center/info/', data);
//新增大队
export const ajax_company_authority_post = data => ajax_post('/api_proxy/company_authority/info/', data);
//新增维保
export const ajax_company_maint_post = data => ajax_post('/api_proxy/company_maint/info/', data);


//修改用户信息 使他们关联
export const ajax_user_put = data => ajax_put('/api_proxy/user/info/', data);

//数字预案
export const ajax_digital_plan_list = data => ajax_get('/api_proxy/digital_plan/list/', data);
//新增
export const ajax_digital_plan_post = data => ajax_post('/api_proxy/digital_plan/info/', data);

export const ajax_digital_plan_del = data => ajax_delete('/api_proxy/digital_plan/info/', data);
//获取单个预案信息
export const ajax_digital_one_plan_get = data => ajax_get('/api_proxy/digital_plan/info/', data);

export const ajax_digital_plan_put = data => ajax_put('/api_proxy/digital_plan/info/', data);

export const ajax_digital_file_updata = data => file_updata(data);




// /** 获取已绑定的主管单位 消防站 列表 */
// export const ajax_company_bound_list = (data) => ajax_get('/api_proxy/company/circular_bound_list/', data);

// /** 获取已绑定的主管单位 九小 列表 */
// export const ajax_ninelittle_bound_list = (data) => ajax_get('/api_proxy/company/circular_bound_list/', data);

// /** 获取已绑定的主管单位 家庭 列表 */
// export const ajax_family_bound_list = (data) => ajax_get('/api_proxy/company/circular_bound_list/', data);


//获取主管单位绑定的微型消防站、九小、家庭单位列表
export const ajax_firestation_ninetype_household_bound_list = (data) => ajax_get('/api_proxy/company/circular_bound_list/', data);


/** 消防站  基本信息 */
export const ajax_company_firestation_info = (data) => ajax_get('/api_proxy/company_firestation/info/', data);

/** 消防站  设施列表 */
export const ajax_company_firestation_equipment_list = (data) => ajax_get('/api_proxy/company_firestation_equipment/list/', data);

/** 九小  基本信息 */
export const ajax_company_nine_type_info = (data) => ajax_get('/api_proxy/company_nine_type/info/', data);

/** 家庭  基本信息 */
export const ajax_company_household_info = (data) => ajax_get('/api_proxy/company_household/info/', data);