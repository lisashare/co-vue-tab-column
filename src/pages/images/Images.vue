<template>
    <div class="images page-top" >
         <header class="search-header bc line-bottom" id="header">
            <i class="icon-left" v-on:click = "$router.go(-1)"></i>
            <!-- <h2 class="ellipsis">123</h2> -->
            <!-- 选项卡 -->
            <ul class="images-tab">
                <li 
                v-for="item of tab" 
                :key="item.id" 
                @click="handlerTabChange(item.id)" :class="[activetab== item.id ? 'activetab': '']">{{item.title}}</li>
            </ul>
            <span class="header-contact-customer" @click="isTelShow=!isTelShow"></span>
            <span class="header-nav" @click="isNavShow=!isNavShow"></span>
        </header>
        <!-- <nav-list
            :closeNav="closeNav"
            :isNavShow="isNavShow">
        </nav-list>
        <service-pop
          :closeTel="closeTel"
          :isTelShow="isTelShow">
        </service-pop> -->
        <div class="content">
            <ul class="image-wrap" v-show="activetab == 1">
                <li><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></li>
                <li><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></li>
                <li><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></li>
                <li><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></li>
                <li><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></li>
                <li><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></li>
                <li><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></li>
                <li><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></li>
                <li><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></li>
                <li><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></li>
            </ul>
            <ul class="video-wrap" v-show="activetab == 2"> 
                <li>
                    <div class="img-box"><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></div>
                    <p><img src="/static/images/opportunity/branddetail/bofang.png" alt=""></p>
                </li>
                <li>
                    <div class="img-box"><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></div>
                    <p><img src="/static/images/opportunity/branddetail/bofang.png" alt=""></p>
                </li>
                <li>
                    <div class="img-box"><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></div>
                    <p><img src="/static/images/opportunity/branddetail/bofang.png" alt=""></p>
                </li>
                <li>
                    <div class="img-box"><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></div>
                    <p><img src="/static/images/opportunity/branddetail/bofang.png" alt=""></p>
                </li>
                <li>
                    <div class="img-box"><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></div>
                    <p><img src="/static/images/opportunity/branddetail/bofang.png" alt=""></p>
                </li>
                <li>
                    <div class="img-box"><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></div>
                    <p><img src="/static/images/opportunity/branddetail/bofang.png" alt=""></p>
                </li>
                <li>
                    <div class="img-box"><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></div>
                    <p><img src="/static/images/opportunity/branddetail/bofang.png" alt=""></p>
                </li>
                <li>
                    <div class="img-box"><img src="http://vodukbqznto.nosdn.127.net/f62f9a96-9631-4636-86ca-46e290fc88a7_18_0_0.jpg" alt=""></div>
                    <p><img src="/static/images/opportunity/branddetail/bofang.png" alt=""></p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
// import ServicePop from '@components/ServicePop'
// import NavList from '@components/NavList'
export default {
  name: 'Images',
//   components: {NavList,ServicePop},
//   props: ['title'],
  data () {
    return {
      isNavShow: false,
      isTelShow: false,
      tab: [
          {id: 1,title: '图片'},
          {id: 2,title: '视频'}
      ],
      activetab: 1,
    }
  },
  created(){
    //   this.getImages()
    //   this.getVideos()
  },
  methods: {
    getImages(){
        this.$http.post('').then(res=>{

        })
    },
    getVideos(){
        this.$http.post('').then(res=>{

        })
    },
    phoneCall () {
      window.location.href = 'tel:010-53579588'
    },
    closeNav () {
      this.isNavShow = false
    },
    closeTel () {
      this.isTelShow = false;
    },
    handlerTabChange(id){
        this.activetab = id
    }
  }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
.content{
    padding-top: 22/@rem;
    img{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .image-wrap{
        display: flex;
        flex-wrap: wrap;
        padding: 0 48/@rem;
        justify-content: space-between;
    }
    .video-wrap{
        display: flex;
        flex-wrap: wrap;
        padding: 0 48/@rem;
        justify-content: space-between;
        li{
            // background: greenyellow;
        }
    }
    li{
        width: 318/@rem;
        height: 188/@rem;
        // background: skyblue;
        border-radius: 8/@rem;  
        margin-bottom: 20/@rem;
        overflow: hidden;
        position: relative;
        .img-box{
            width: 100%;
            height: 100%;
        }
        p{
            width: 72/@rem;
            height:72/@rem;
            position:absolute;
            left: 50%;
            top: 50%;
            -webkit-transform:translate3d(-50%,-50%,0);
            -ms-transform: translate3d(-50%,-50%,0);
            transform:translate3d(-50%,-50%,0);
        }
    }
}
.search-header{
    padding:0;
}
.images-tab{
    position: absolute;
    top: 50%;left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    -ms-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    width: 320/@rem;
    height: 87/@rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    z-index: 10;
    li{
        width: 160/@rem;
        height:64/@rem;
        line-height: 64/@rem;
        border: 1px solid #35AEB6;
        font-size: 26/@rem;
        text-align: center;
        color: #35AEB6;
    }
    li:first-child{
        border-right: none;
        border-radius:8/@rem 0 0 8/@rem;            
    }
    li:last-child{
        border-left: none;
        border-radius: 0 8/@rem 8/@rem 0;
    }
    .activetab{
        background: #35AEB6;
        color: #ffffff;
    }
}
</style>
