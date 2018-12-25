/**
 * 巡检巡查相关API
 *
 */

  // 生成二维码接口
  import axios from 'axios'
  let code_two = axios.create({
    baseURL: '/codeTwo'
  })
  code_two.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  export const ajax_code_two = data => code_two.post('/qrcode', data)

  // 批量下载
  export const ajax_download_file = (data) => {
    return new Promise((resolve)=>{
      let {href}= Vue.$router.resolve({
        path:'/download_file',
        query:data,
      })
      // console.log(href,"999")
      href = href.replace('#/','');
      window.open(href);
      resolve();
    })
  }

import {
    ajax_get,
    ajax_delete,
    ajax_post,
    ajax_put,
    file_updata,
    get_stream
} from './common_api'
  

  /*** 巡查记录  列表 */
  export const ajax_patrol_record_list = data => ajax_get('/api_proxy/patrol/archive/list_by_company_id/',data);
  // 巡查记录详情列表
  export const ajax_patrol_record_detail_list = data => ajax_get('/api_proxy/patrol/record/list_by_day_person_site/', data);
  // 巡查记录详情列表详情
  export const ajax_patrol_record_by_site_item = data => ajax_get('/api_proxy/patrol/record/details_by_record_siteid/', data);


  
  /** 巡查报告相关API */
  // 巡查报告列表
  export const ajax_get_patrol_report_list = data => ajax_get('/api_proxy/patrol/report/list_by_company_id/', data);


  /** 巡查点管理相关API */
  // 巡查点列表
  export const ajax_patrol_site_list = data => ajax_get('/api_proxy/patrol/site/list_by_company_cared/', data);
  // 添加巡查点信息
  export const ajax_patrol_site_add = data => ajax_post('/api_proxy/patrol/site/info/', data);
  // 巡查点修改
  export const ajax_patrol_site_put = data => ajax_put('/api_proxy/patrol/site/info/', data);
  // 获取巡查点信息
  export const ajax_patrol_site_get = data => ajax_get('/api_proxy/patrol/site/info/', data);
  // 删除巡查点信息 
  export const ajax_patrol_site_del = data => ajax_delete('/api_proxy/patrol/site/info/', data);
  // 巡查历史API
  export const ajax_patrol_history_list = data => ajax_get('/api_proxy/patrol/record/list_by_site_id/', data);

  // 巡查点详情
  export const ajax_patrol_record_site_detail = data => ajax_get('/api_proxy/patrol/details/info/', data);




  /** 巡查项相关API */
  // 获取巡查项列表
  export const ajax_patrol_item_list_get = data => ajax_get('/api_proxy/patrol/item/list_by_company_cared/', data);

  // 获取巡查项信息
  export const ajax_protal_item_get = data => ajax_get('/api_proxy/patrol/item/info/', data);

  // 添加巡查项信息
  export const ajax_protal_item_new = data => ajax_post('/api_proxy/patrol/item/info/', data);

  // 更新巡查项信息
  export const ajax_protal_item_updata = data => ajax_put('/api_proxy/patrol/item/info/', data);

  // 删除巡查项信息
  export const ajax_protal_item_del = data => ajax_delete('/api_proxy/patrol/item/info/', data); 

  // 获取巡查项所属分类  
  export const ajax_patrol_enum_pt_item_type = data => ajax_get('/api_proxy/patrol/enum/list/enum_pt_item_type', data);

  // 判断巡查项名称是否重复 /api_proxy/patrol/item/exist_item_name/
  export const ajax_exist_item_name = data => ajax_get('/api_proxy/patrol/item/exist_item_name/', data)




  /** 巡查频率API */ 
  export const ajax_patrol_frequency_list = data => ajax_get('/api_proxy/patrol/enum/list/enum_pt_frequency', data);
  
  /** 巡查方式API */ 
  export const ajax_patrol_sign_mode = data => ajax_get('/api_proxy/patrol/enum/list/enum_pt_sign_mode', data);

  /** 获取责任人API */ 
  export const ajax_patrol_user_list = data => ajax_get('/api_proxy/user/list_by_company_id/', data);

  // 巡查点编码
  export const ajax_patrol_num = data => ajax_get('/api_proxy/patrol/common/gen_number/', data);

  // 巡查方式编码
  export const ajax_patrol_type_num = data => ajax_get('/api_proxy/patrol/site/exist_label_code/', data);

  // 巡查记录导出 /api_proxy/patrol/record/down_reocrd_by_date/
  export const ajax_patrol_record_export = data => get_stream('/api_proxy/patrol/record/down_reocrd_by_date/', data);

  //导出之前检测是否有记录
  export const ajax_has_patrol_record_export = data => ajax_get('/api_proxy/patrol/record/check_data_by_date/', data);
  
  // 巡查态势图  api_proxy/patrol/report/git_pic/
  export const ajax_git_pic = data => ajax_get('/api_proxy/patrol/report/git_pic/', data);

  // 二维码合成图片
  export const ajax_qrcode_pic = data => get_stream('/api_proxy/patrol/site/qrcode_picture/', data);