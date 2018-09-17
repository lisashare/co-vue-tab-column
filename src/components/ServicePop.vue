<template>
  <div class="servicePop">
    <div class="mask" v-if="isTelShow" @click="closeTel"></div>
    <div class="popWrap" v-if="isTelShow" @click="closeTel">
      <img src="/static/images/common/pop_dianhuakefu@3x.png" />
      <img class="closeBtn" src="/static/images/common/icon_close@3x.png" />
      <div class="btnBottom">
        <a @click="goChat" class="online">
          <span class="icon-tel"></span>
          在线咨询
        </a>
        <!-- <a @click="phoneCall" class="call"> -->
        <a class="call" href="tel:010-53579588">
          <span class="icon-call"></span>
          拨打电话
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/modules/http'
import utils from '@/modules/utils'
export default {
  name: 'ServicePop',
  props: ["isTelShow","closeTel"],
  data () {
    return {
      uid: '',
      mobile: '',
      sdktoken: ''
    }
  },
  methods: {
    //拨打电话
    phoneCall () {
      window.location.href = 'tel:010-53579588'
    },
    //在线聊天
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
          utils.setCookie('sessionId', sessionId)
          // console.log(sessionId)
          // 跳转
          location.href = config.imChat + sessionId
          }
      })
    },
    goChat () {
      this.uid = utils.getCookie('uid')
      this.sdktoken = utils.getCookie('sdktoken')
      this.mobile = utils.getCookie('mobile')
      if (!this.uid && !this.mobile && !this.sdktoken) {
        this.$router.push({name: 'login'})
      } else {
        // location.href="http://localhost:3000/webdemo/h5/index.html#/chat/p2p-9c09d7a4417c406293a115a8e41901c9"
        this.getSessionId()
      }
    }
  },
}
</script>



<style lang="less" scoped>
  @rem: 50rem;
  .servicePop {
    .mask {
      z-index: 11;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,.6);
    }
    .popWrap {
      width: 570/@rem;
      height: 400/@rem;
      position: fixed;
      left: 50%;
      top: 50%;
      margin-left: -285/@rem;
      margin-top: -200/@rem;
      //border: 1px solid red;
      img {
        width: 570/@rem;
        height: 400/@rem;
      }
      z-index: 11;
      .closeBtn {
        width: 52/@rem;
        height: 52/@rem;
        position: absolute;
        right: -8/@rem;
        top: 0/@rem;
      }
      .btnBottom {
        width: 518/@rem;
        height: 73/@rem;
        position: absolute;
        bottom: 60/@rem;
        left: 50%;
        margin-left: -259/@rem;
        display: flex;
        justify-content: space-between;
        //border: 1px solid blue;
        a {
           font-size: 30/@rem;
           color:#fff;
           width: 248/@rem;
           height: 73/@rem;
           text-align: center;
           display: inline-block;
           border-radius: 6px;
           display: flex;
           align-items: center;
        }
        span {
          display: inline-block;
          background-repeat: no-repeat;
        }
        .online {
           background: #f66d61;
          .icon-tel {
            margin-left: 34/@rem;
            margin-right: 18/@rem;
            width: 34/@rem;
            height: 32/@rem;
            background-image: url('/static/images/common/icon_zixun@3x.png');
            //background-size: 34/@rem 32/@rem;
            background-size: 98%;
          }
        }
        .call {
          background: #2caeb7;
          .icon-call {
            margin-top: -3/@rem;
            margin-left: 26/@rem;
            margin-right: 20/@rem;
            width: 34/@rem;
            height: 34/@rem;
            background-image: url('/static/images/common/icon_phone@3x.png');
            //background-size: 34/@rem 34/@rem;
            background-size: 98%;
          }
        }
      }
    }
  }
</style>


