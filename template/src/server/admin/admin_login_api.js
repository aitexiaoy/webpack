import {
    ajax_get,
    ajax_post
  } from "./admin_api";
  
  export const ajax_admin_login = data => ajax_post('/admin_proxy/admin/login/',data);
  