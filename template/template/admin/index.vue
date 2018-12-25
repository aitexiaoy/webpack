<template>
  <div id="admin" class="admin_main_page">
    <router-view></router-view>
  </div>
</template>

<script>

  import localStorage from '../../src/assets/js/local_storage.js'
  import {
    mapActions
  } from 'vuex'
  export default {
    name: 'admin',
    created() {
      this.get_device_info();
      this.refreshEvent();
      this.onresizeEvent();
      this.user();
    },

    mounted() {},

    methods: {
      ...mapActions(['get_device_info']),
      user() {
        const userInfo = localStorage.getStore('admin_user');
        if (userInfo) {
          this.$store.commit('save_web_admin_user', userInfo);
        }
      },
      change_window() {
        let flag = true;

      },

      /**函数去抖 */
      throttle(fn, interval) {
        var _self = fn, // 保存需要被延迟执行的函数引用
          timer, // 计时器
          firstTime = true; // 是否第一次调用

        return function() {
          var args = arguments,
            _this = this;

          if (firstTime) { // 如果是第一次调用, 不需要延迟执行
            _self.apply(_this, args);
            return firstTime = false;
          }

          if (timer) { // 如果定时器还在, 说明前一次延迟执行还未完成
            return false;
          }
          timer = setTimeout(function() {
            clearTimeout(timer);
            timer = null;
            _self.apply(_this, args);
          }, interval || 500);
        };
      },

      // 页面尺寸变化事件
      onresizeEvent() {
        let vue = this;
        window.onresize = this.throttle(() => {
          vue.get_device_info();
        }, 100);
      },
      /** 页面刷新事件，将当前页面的路由存到localstorage中 */
      refreshEvent() {
        window.onbeforeunload = () => {
          this.$route.query.page_no='99999';
          let obj = {
            refresh_falg: true,
            route: {
              path: this.$route.path,
              query: this.$route.query,
              params: this.$route.params
            }
          }
          localStorage.setStore('adminCurrentPage', obj);
          localStorage.setStore('ocCurrentPageInfo',obj);
        }
      }
    },
    watch: {
      "$route.path": function() {
        // console.log(this.$route.path);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url("../../src/assets/css/css_config.less");
  .admin_main_page {
    position: relative;
    min-width: @screen-min-width;
    height: 100%;
  }

  .main-page-app {
    // display: none;
  }

  ::-webkit-scrollbar {
    width: 0;
    /*滚动条宽度*/
    cursor: pointer;
  }
</style>

