// import {ajax_get} from '../server/common_api.js'
import localStorage from '../assets/js/local_storage.js'
import {
  ajax_import_result
} from "../server/company_api.js";
let id = null;
export default {
  //获取设备信息
  get_device_info({ commit }) {
    commit('m_device_info');
  },

  // 轮询查询导入知否成功
  get_import_result(context, data) {
    setTimeout(()=>{
      id = setInterval(() => {
        context.dispatch('importFunc',data);
      }, 1000)
    },3000)
  },

  // 查询函数
  importFunc(context, data) {
    ajax_import_result({
      file_id: data.data.file_id
    }).then(res => {
      if (res.data.code == 0) {
        localStorage.setStore('import_result', { file_id: '', type: false });
        data.vue.$fbConfirmDialog({
          info: "您的信息批量导入完成",
          cancelText:''
        })
        console.log('导入成功！！！');
        context.state.import_result_data = res.data.data;
        localStorage.setStore('import_result_data', res.data.data);
        clearInterval(id);
      } else if (res.data.code == 1) {
        localStorage.setStore('import_result', { file_id: data.data.file_id, type: false });
        context.state.import_result_data = res.data.data;
        console.log('正在导入ing......');
      } else {
        localStorage.setStore('import_result', { file_id: '', type: false });
        context.state.import_result_data = {};
        data.message.warning(res.data.msg);
        setTimeout(() => {
          data.vue.$router.go(-1);
        }, 1000)
        console.log('文件不存在！');
        clearInterval(id);
      }
    }).catch(error => {
      console.log(error)
    })
  }

  //获取模拟量类型字典列表
}