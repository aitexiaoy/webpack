// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"; //引入针对IE支持
//引入i18n语言切换实例
// import "babel-polyfill";      //引入针对IE支持
import Vue from 'vue'
import i18n from '../../src/i18n/index.js'
import Login from './index.vue'
import router from '../../src/router/login.js'
import ElementUI from 'element-ui' //引入eleui
import 'element-ui/lib/theme-chalk/index.css';
import store from '../../src/store/index'

import current_system from '../../src/assets/js/huanjing_panduan.js'

import Meta from 'vue-meta'

//自定义组件库
import FBmodules from '../../src/components/modules/index.js'

//自定义全局方法库
import fbFunction from '../../src/assets/js/fbFunction.js'

//全局参数
import  '../../src/assets/js/global-param.js'


//基础css
import '../../src/assets/css/mian_base.css'
import '../../src/assets/css/animate.css'

//引入校验工具
import '../../src/assets/js/validate.js'

//iconfont
import '../../static/font_icon/iconfont.css'

Vue.config.productionTip = false;

//使用自定义组件库
Vue.use(FBmodules);
Vue.use(fbFunction);
Vue.use(Meta);

Vue.use(ElementUI);
const loginVue = new Vue({
    el: '#login',
    router,
    store,
    i18n,
    components: {
        Login
    },
    template: '<Login/>'
})
global.Vue = loginVue;
global.runTimeSystem = current_system; //运行环境

store.state.pageVue = loginVue;
export default loginVue;
