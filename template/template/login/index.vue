<template>
<div id="login" class="main-page">
    <!-- <div class="header width-full">
        <div class="width-main">
            <div class="logo-flex">
              <div class="company-logo">
                <i :class="['iconfont',`icon-muxinglogo_${$IMAGE_MARKED}`]"></i>
              </div>
             
            </div>
            <div class="return-home">
              <div v-if="$route.path=='/register'">
                已有账号，现在去<button @click="$router.push('/')">登录</button>
              </div>
            </div>
        </div>
    </div> -->
    <transition :name="transitionName">
        <router-view class="child-view"></router-view>
    </transition>
</div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            transitionName: 'slide-left'
        }
    },
    metaInfo() {
        if (this.$IS_INDEPENDENT != true) {
            return {
                title: '富邦木星云-云集木星，共建消防新生态！',
                meta: [{
                        name: 'description',
                        content: '以木星智慧云为核心云平台，综合运用物联网、云计算、大数据、AI智能等先进技术，致力于成为业界领先的智慧消防解决方案提供商！'
                    },
                    {
                        name: 'keywords',
                        content: '富邦木星云,智慧消防,消防物联网,云平台,物联网云平台,开放平台,助力生态,生态前瞻,产业链,生态链,便捷接入,设备兼容,网络安全'
                    },
                    {
                        name: 'keywords',
                        content: '智慧消防,智慧城市,消防,物联,智能,网关,消防,物联,智能,网关'
                    }
                ],
                link: [{
                    rel: 'icon',
                    href: '/static/htmlico/favicon_muxingyun.ico'
                }]
            }
        } else {
            return {
                title: '陇南市智慧消防物联网平台',
                meta: [{
                        name: 'description',
                        content: '陇南市智慧消防物联网平台'
                    },
                    {
                        name: 'keywords',
                        content: '陇南市智慧消防物联网平台'
                    },

                ],
                link:[ {
                    rel: 'icon',
                    href: '/static/htmlico/favicon_muxingyun.ico',
                }]
            }
        }
    },
    methods: {},
    watch: {
        '$route'(to, from) {
            if (to.path == '/') {
                this.transitionName = 'slide-right';
            } else {
                this.transitionName = 'slide-left';
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../../src/assets/css/css_config.less');

.main-page {
    position: relative;
    min-width: @screen-min-width;
}

@keyframes fontInit {
    50% {
        text-shadow: 0 0 8px #fff
    }
}

.header {
    height: 60px;
    background-color: #1d1c21;

    .width-main {
        height: 100%;
        display: flex;
        justify-content: space-between;
        padding-right: 5px;

        .logo-flex {
            display: flex;
            align-items: center;
            // img{
            //   width: 115px;
            //   height:22px;
            //   margin-left:10px; 
            // }
        }

        .company-logo {
            display: flex;
            align-items: center;
            margin-left: 70px;
            width: 35px;
            height: 100%;
            // background: url("../public/img/login/logo.gif") no-repeat center;
            background-size: 35px 30px;

            i {
                font-size: 34px;
                color: #fff;
                // animation: fontInit 1.5s infinite linear;
            }
        }

        .return-home {
            height: 100%;
            line-height: 60px;
            display: flex;
            color: #ffffff;

            button {
                padding: 5px 13px;
                background: transparent;
                border: 1px solid #fff !important;
                color: #fff;
                margin: 0 15px;
                cursor: pointer;
            }

            a {
                font-size: 14px;
                color: #ffffff;
                margin-right: 20px;
            }
        }
    }
}

.child-view {
    position: absolute;
    left: 0;
    // top: 60px;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}
</style>
