import {
    get_scrollbarWidth
} from "../assets/js/fbFunction_fn.js";

import fblocalStorage from '../assets/js/local_storage.js'

export default {
    save_web_user(state, data) {
        state.web_user = data
    },
    save_web_status(state, data) {

        state.web_login_status = data
    },
    //存储 web scoket 推送数据
    save_sockt_data(state, data) {
        state.sockt_data = data
    },
    user_control(state, control) {

        state.users = JSON.parse(JSON.stringify(control));
    },

    m_user_config(state,data){
        let _config = state.user_config;
        state.user_config={..._config,...data};
    },

    dahua_video(state, video) {
        state.dahuaVideo = video;
    },
    Gis(state, params) {

        if (params.noparams) {
            let href = `${window.location.protocol}//${window.location.host}/#/gis`;
            window.open(href);
            return;
        }
        let { type, data } = params;
        let list = [];
        let name = '';
        let id = '';
        if (data.list_data) {
            if (!data.list_data.length) {
                return;
            }

            if (type == 'yinhuan') {
                data.list_data.forEach(function(item, index) {
                    if (item.company_name || item.center_name || item.name) {
                        name = item.company_name || item.center_name || item.name;
                    }
                    if (item.company_id || item.center_id || item.id) {
                        id = item.company_id || item.center_id || item.id;
                    }
                    list.push({
                        id: id,
                        name: name,
                        type: 'yinhuan',
                        sourceInfo: item,
                        latitude: item.latitude,
                        longitude: item.longitude
                    });
                });
            } else if (type == 'firecock') {
                data.list_data.forEach(function(item, index) {
                    if (item.company_name || item.center_name || item.name) {
                        name = item.company_name || item.center_name || item.name;
                    }
                    if (item.company_id || item.center_id || item.id) {
                        id = item.company_id || item.center_id || item.id;
                    }
                    list.push({
                        id: id,
                        name: name,
                        type: 'firecock',
                        sourceInfo: item,
                    });
                });
            } else if (type == 'device_component') {
                data.list_data.forEach(function(item, index) {
                    if (item.company_name || item.center_name || item.name) {
                        name = item.company_name || item.center_name || item.name;
                    }
                    if (item.company_id || item.center_id || item.id) {
                        id = item.company_id || item.center_id || item.id;
                    }
                    list.push({
                        id: id,
                        name: name,
                        type: 'device_component',
                        sourceInfo: item,
                    });
                });
            } else {
                data.list_data.forEach(function(item, index) {
                    if (item.company_name || item.center_name || item.name) {
                        name = item.company_name || item.center_name || item.name;
                    }
                    if (item.company_id || item.center_id || item.id) {
                        id = item.company_id || item.center_id || item.id;
                    }
                    let type = '';

                    if (item.thing_type) {
                        type = item.thing_type == 'info_device_dtu' ? 'device' : 'component';
                    }
                    if (item.system_type) {
                        type = item.system_type == 'info_device_dtu' ? 'device' : 'component';
                    }
                    list.push({
                        id: id,
                        name: name,
                        type: type,
                        sourceInfo: item
                    });
                });
            }
        } else {
            if (type != 'yinhuan') {
                data.forEach(function(item, index) {
                    list.push({
                        id: item.id,
                        name: item.name,
                        type: item.type,
                        sourceInfo: item.sourceInfo
                    })
                });
            } else {
                data.forEach(function(item, index) {
                    list.push({
                        id: item.id,
                        name: item.name,
                        type: item.type,
                        longitude: item.longitude || '',
                        latitude: item.latitude || '',
                        sourceInfo: item.sourceInfo
                    })
                });
            }

        }

        let obj = {
            // 当前点的类型
            type, // 联网单位|中心|维保单位|消火栓|设备|部件
            //所选择的数据列表
            list: list,
            company_id: '', //当前单位id
            building_id: '' //当前建筑id
        };

        // console.log(data.sourceInfo,'====');

        // if(type == 'component' || type == 'device'){
        obj['company_id'] = obj.list[0].sourceInfo.company_id; //当前单位id
        if (obj.list[0].sourceInfo && obj.list[0].sourceInfo.building_id_id) {
            obj['building_id'] = obj.list[0].sourceInfo.building_id_id //当前建筑id
        } else {
            obj['building_id'] = obj.list[0].sourceInfo.building_id //当前建筑id
        }
        // }

        fblocalStorage.setStore('gisfilterdata', obj);
        window.setTimeout(() => {
            let href = `${window.location.protocol}//${window.location.host}/#/gis?maptype=filter`;
            window.open(href);
        }, 50);

    },
    change_left_width_change_flag(state, info) {
        state.left_width_change_flag = info;
    },
    user(state, info) {
        state.user_info = info;
    },
    status_change(state, status) {
        state.status = status;
    },
    /**
     * 屏幕宽度高度处理
     *
     * @param {any} state
     */
    m_device_info(state) {
        let windowMinHeight = 670;
        state.device_info.scrollbar_width = get_scrollbarWidth() + 8;
        state.device_info.document_width = window.innerWidth;
        state.device_info.page_width = Math.max(1200, state.device_info.document_width);
        window.innerWidth > 1200 ? state.device_info.document_height = window.innerHeight : state.device_info.document_height = window.innerHeight - state.device_info.scrollbar_width;
        window.innerHeight < windowMinHeight ? state.device_info.content_height = windowMinHeight - state.device_info.topNav_height : state.device_info.content_height = state.device_info.document_height - state.device_info.topNav_height;

        state.device_info.right_content_height = state.device_info.content_height;
    },
    m_company_info(state, info) {
        let key = info.key;
        let data = info.data;
        if (key && data) {
            state.company_info[key] = data;
        }
    },
    m_enums_dictionary(state, info) {
        let key = info.key;
        let data = info.data;
        if (key && data) {
            state.enums_dictionary[key] = data;
        }
    },
    m_company_list_status_flag(state, info) {
        state.company_list_status_flag = info;
    }
    // 关于面包屑导航
    // breadListMutations(getters, list) {
    //   getters.breadListState = list;
    //   sessionStorage.setItem('breadListStorage', list);
    // }

}