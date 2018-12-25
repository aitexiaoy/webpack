import {
  ajax_put,
  ajax_get, ajax_post
} from "./common_api";


/*** 视频单位列表 */
export const ajax_video_company_list = data => ajax_get('/api_proxy/device/device_video_by_company_list/',data);

// 视频列表
export const ajax_video_list=(data)=>{
  return ajax_get('/api_proxy/device/device_video_by_monitor_list/',data);
}

// 视频--添加
export const ajax_video_new_add=(data)=>{
  return ajax_post('/api_proxy/device/device_video_by_monitor/',data);
}

export const ajax_video_brand=(data)=>{
  return ajax_get('/api_proxy/device/device_video_by_trademark/',data);
}
