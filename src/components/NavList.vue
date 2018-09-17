<template>
  <div class="nav-list">
      <transition
        name="fade"
      >
           <div
            v-if="isNavShow"
            @click="closeNav" class="mask"></div>
      </transition>
          <!-- 导航 -->
        <transition name="fade">
        <nav
            @click="closeNav"
            v-if="isNavShow"
            class="nav-group">
            <ul>
                <li @click="$router.push({name:'home'})">
                    <div class="nav-img"><img class="icon1" src="/static/images/nav/icon_home@3x.png" /></div>
                    <span class="title">首页</span>
                </li>
                <li @click="$router.push({name:'opportunity'})">
                    <div class="nav-img"><img class="icon2" src="/static/images/nav/icon_shangji@3x.png" /></div>
                    <span class="title">商机</span>
                </li>
                <li @click="$router.push({name:'vr'})">
                    <div class="nav-img"><img class="icon3" src="/static/images/nav/icon_vr@3x.png" /></div>
                    <span class="title">VR看店</span>
                </li>
                <li @click="$router.push({name:'shangping'})">
                    <div class="nav-img"><img class="icon4" src="/static/images/nav/icon_shangping@3x.png" /></div>
                    <span class="title">商评</span>
                </li>
                <li @click="$router.push({name:'case'})">
                    <div class="nav-img"><img class="icon5" src="/static/images/nav/icon_find@3x.png" /></div>
                    <span class="title">发现</span>
                </li>
                <li @click="goSession">
                    <div class="nav-img"><img class="icon6" src="/static/images/nav/icon_xiaoxi@3x.png" /></div>
                    <span class="title">消息</span>
                </li>
                <li @click="$router.push({name:'my'})">
                    <div class="nav-img"><img class="icon7" src="/static/images/nav/icon_me@3x.png" /></div>
                    <span class="title">我的</span>
                </li>
                <li @click="downLoadApp">
                    <div class="nav-img"><img class="icon8" src="/static/images/nav/icon_app@3x.png" /></div>
                    <span class="title">APP</span>
                </li>
                <!-- <router-link tag="li" :to="{name:nav.name}" v-for="nav in navs" :key="nav.id">
                    <div class="nav-img"><img :class="nav.icon" :src="nav.img" /></div>
                    <span class="title">{{nav.title}}</span>
                </router-link> -->
            </ul>
            <span class="triangle"></span>
        </nav>
    </transition>
  </div>
</template>
<script>
import config from '@/modules/http'
import utils from '@/modules/utils'
export default {
  name: 'NavList',
  props: ['isNavShow', 'closeNav'],
  data () {
    return {
      navs: [
        {id: 1, title: '首页', name: 'home', icon: 'icon1', img: '/static/images/nav/icon_app@3x.png'},
        {id: 2, title: '商机', name: 'opportunity', icon: 'icon2', img: '/static/images/nav/icon_shangji@3x.png'},
        {id: 3, title: 'VR看店', name: 'opportunity', icon: 'icon3', img: '/static/images/nav/icon_vr@3x.png'},
        {id: 4, title: '商评', name: 'opportunity', icon: 'icon4', img: '/static/images/nav/icon_shangping@3x.png'},
        {id: 5, title: '发现', name: 'opportunity', icon: 'icon5', img: '/static/images/nav/icon_find@3x.png'},
        {id: 6, title: '消息', name: 'message', icon: 'icon6', img: '/static/images/nav/icon_xiaoxi@3x.png'},
        {id: 7, title: '我的', name: 'opportunity', icon: 'icon7', img: '/static/images/nav/icon_me@3x.png'},
        {id: 8, title: 'APP', name: 'opportunity', icon: 'icon8', img: '/static/images/nav/icon_app@3x.png'}
      ],
      uid: '',
      mobile: '',
      sdktoken: '',
      accountId: '',
      accountMsg:''
    }
  },
  methods: {
    downLoadApp(){
        console.log(config.downLoad)
        window.location.href = config.downLoad
        // if( this.judgeType() == 'IOS' ){
        //     window.location.href = config.downLoadIos
        // }
        // if( this.judgeType() == 'Android' ){
        //     window.location.href = config.downLoadAndroid
        // }
    },
    // judgeType(){
    //     var ua = navigator.userAgent.toLowerCase();
    //     if (ua.match(/iPhone\sOS/i) == "iphone os") {
    //         return "IOS";
    //     } else if(ua.match(/Android/i) == "android") {
    //         return "Android";
    //     }
    // },
    // im获取sessionId
    getSessionId () {
      let params = {
        'params': {
          'customerIM': this.uid,
          'customerPhone': this.mobile
        }
      }
      this.$http.post(this.baseurl + '/im/getimaccount', params).then(res => {
          if(res.data.code == 200){
            let sessionId = res.data.data
            this.sessionId = utils.getCookie('sessionId', sessionId)
            // 跳转
            location.href = config.imSession
          }

      })
    },
    getAccountId(){
       let params = {
        'params': {
          'accountId': this.accountId,
        }
      }
      this.$http.post(this.baseurl + '/im/notice', params).then(res => {
          if(res.data.code == 200){
            this.accountMsg = res.data.data

            let sendTime = res.data.data.sendTime
            utils.setCookie('sendTime', res.data.data.sendTime)

            let readStatus = res.data.data.readStatus
            utils.setCookie('readStatus', res.data.data.readStatus)

            let msgDetails =  res.data.data.msgDetails
            utils.setCookie('msgDetails', res.data.data.msgDetails)

            utils.setCookie('accountMsg',this.accountMsg)
            console.log(sendTime,readStatus,msgDetails)
            // 跳转
            if(!this.sessionId){  // 没有id
                // console.log('没有getSessionId的时候')
                this.getSessionId()
            }else{
                // console.log('有getSessionId的时候---')
                location.href = config.imSession
            }
          }

      })
    },
    goSession () {
      this.uid = utils.getCookie('uid')
      this.sdktoken = utils.getCookie('sdktoken')
      this.mobile = utils.getCookie('mobile')
      this.sessionId = utils.getCookie('sessionId')
      this.accountId = utils.getCookie('accountId')
    //   this.accountMsg = utils.getCookie('accountMsg')

      if (!this.uid && !this.mobile && !this.sdktoken && !this.accountId ) { // 没有登录直接跳转
        location.href = config.imSession
      } else{
        //   console.log('有登录的时候getAccountId')
          this.getAccountId()
      }
    }
  }
}
</script>

<style lang="less" scoped>
@rem: 50rem;
*{
    box-sizing:border-box;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
// 调节动画时间
.animated{
    animation-duration: 0.7s;
}
.mask{
    z-index: 11;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .6)
}
.nav-list{
    .triangle{
        width: 0;
        height: 0;
        border-left: 24/@rem solid transparent;
        border-right: 24/@rem solid transparent;
        border-bottom: 24/@rem solid #ffffff;
        position: absolute;
        // right: 68/@rem; // 首页
        right: 22/@rem;
        top: -12/@rem;
    }
    nav{
        position: fixed;
        // top: 130/@rem; // 首页
        top: 88/@rem;
        left: 0;
        right: 0;
        width: auto;
        // height: 384/@rem;
        z-index: 11;
        background: #ffffff;
        border-radius: 0 0 14/@rem 14/@rem;
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding: 20/@rem 16/@rem 20/@rem;
            li{
                width: 179/@rem;
                margin-top: 32/@rem;
                text-align: center;
                .nav-img{
                    height: 58/@rem;
                    text-align: center;
                    line-height: 58/@rem;
                    img{
                        display: inline-block;
                    }
                    .icon1{
                        width: 56/@rem;
                        height: 58/@rem;
                    }
                    .icon2{
                        width: 58/@rem;
                        height: 58/@rem;
                    }
                    .icon3{
                        width: 56/@rem;
                        height: 56/@rem;
                    }
                    .icon4{
                        width: 52/@rem;
                        height: 58/@rem;
                    }
                    .icon5{
                        width: 44@rem;
                        height: 58/@rem;
                    }
                    .icon7{
                        width: 54/@rem;
                        height: 57/@rem;
                    }
                    .icon8,.icon6{
                        width: 56/@rem;
                        height: 58 /@rem;
                    }
                }
                .title{
                    display: inline-block;
                    font-size: 24/@rem;
                    color: #333333;
                    line-height: 80/@rem;
                    text-align: center;
                }
            }
        }
    }
}
</style>
