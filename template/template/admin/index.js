// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入i18n语言切换实例
import "babel-polyfill"; //引入针对IE支持
import Vue from 'vue'
import i18n from '../../src/i18n/index.js'
import store from '../../src/store/admin_store/index'
import router from '../../src/router/admin/admin.js'
import Admin from './index.vue'
import ElementUI from 'element-ui' //引入eleui
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import current_system from '../../src/assets/js/huanjing_panduan.js'

import fblocalStorage from '../../src/assets/js/local_storage.js'

import  '../../src/assets/js/global-param.js'

// import echarts from 'echarts'

import '../../src/assets/css/swiper.css'
import '../../static/font_icon/iconfont.css'



//自定义组件库
import FBmodules from '../../src/components/modules/index.js'

import FBmainModules from '../../src/components/modules/main_index.js'

//自定义全局方法库
import fbFunction from '../../src/assets/js/fbFunction.js'

//引入地图
// import VueAMap from 'vue-amap';

//基础css
import '../../src/assets/css/mian_base.css'
import '../../src/assets/css/animate.css'

//引入校验工具
import '../../src/assets/js/validate.js'



Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
//使用自定义组件库
Vue.use(FBmodules);
Vue.use(FBmainModules);
Vue.use(fbFunction);
Vue.use(ElementUI);
router.beforeEach((to, from, next) => {
    const userInfo = fblocalStorage.getStore('admin_user');
    next();
    if(to.path=='/'||to.path=='/login'){
        if (userInfo) { 
            // console.log('---------------xxx')
            /*let href = `${window.location.protocol}//${window.location.host}/admin.html#/auth_meal/company`;
            window.location.href = href;*/
            next({ path: '/auth_meal/company' })
        }else{
            next();
        }
    }else{
        // console.log('-----------xxx22');
        // console.log(to.path);
        if (userInfo) { //如果有就直接到首页咯
            next();
        } else {
            next({ path: '/login' })
        }
    }

});
const adminVue = new Vue({
    el: '#admin',
    router,
    store,
    i18n, //挂载到Vue上
    components: {
        Admin
    },
    template: '<Admin/>'
})

global.Vue = adminVue;
global.runTimeSystem = current_system; //运行环境

// store.state.pageVue = adminVue;

export default adminVue;
