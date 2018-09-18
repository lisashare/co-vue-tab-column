<template>
    <div class="banner-video">
        <swiper :options="swiperOption" class="swiperY">
            <!-- <swiper-slide class="swiper" v-for = "(list,index) in lists" :key = "index">
                  <img width="100%" height="100%" :src="list.coverdUrl" @click="handleVideoClick(index)" >
                  <p><img width="100%" src="/static/images/opportunity/branddetail/bofang.png" @click="handleVideoClick(index)"></p>
            </swiper-slide> -->
            <swiper-slide class="swiper" v-for = "(list,index) in lists" :key = "index">
              <div class="video-box" @click="handleVideoClick(index)">
                  <img width="100%" height="100%" :src="list.coverdUrl" >
                  <p><img width="100%" src="/static/images/detail/bofang.png"></p>
                  <div class="video-title">产品宣传视频</div>
              </div>
            </swiper-slide>
        </swiper>
        <gallary-video
            :video="video"
            v-if="showVideo"
            @hidevideo="handleVideoClose"
        ></gallary-video>
    </div>
</template>
<script>
import GallaryVideo from '@/common/gallary/GallaryVideo'
export default {
  name: 'BannerVideo',
  // props: ['swiper','brandId'],
  components: {GallaryVideo},
  data () {
    const self = this
    return {
      video: '',
      showVideo: false,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 22,
        pagination: {
          // el: '.swiper-pagination',
          clickable: true
        },
        observeParents: true,
        observer: true,
        // on: {
        //   slideChange:function(){
        //     // console.log(this.activeIndex);
        //     // 如果第一次传递的数据，还有第二页，则进行第二页的请求
        //     if(self.swiper.size !== self.swiper.total){
        //       self.imageLoadOver()
        //     }     
        //   } 
        // }
      },
      info:{
        brandId: this.brandId,
        pageNum: 1,
        pageSize: 10
      },
      // lists: this.swiper.list,
      imageSwiper: '',
      lists:[
        {id: 1,coverdUrl:'http://static.kuaidao.cn/brand/bhEXjziQQD.jpg'},
        {id: 2,coverdUrl:'http://static.kuaidao.cn/brand/bhEXjziQQD.jpg'},
        {id: 3,coverdUrl:'http://static.kuaidao.cn/brand/bhEXjziQQD.jpg'},
        {id: 4,coverdUrl:'http://static.kuaidao.cn/brand/bhEXjziQQD.jpg'},
      ]
    }
  },
  methods: {
    // imageLoadOver(){
    //   if(this.imageSwiper&&(this.imageSwiper.pageNum == this.imageSwiper.pages)){
    //       return false
    //   }else{
    //     this.info.pageNum = this.info.pageNum + 1
    //     // console.log(this.info.pageNum)
    //     let params = {
    //       'apiUrl': this.weburl + 'mobile/share/listBrandVideo',
    //       'params': this.info
    //     }
    //     this.$http.post( this.baseurl + '/brand/api',params).then(res=>{
    //       if(res.data.code == 200){
    //         // console.log(res.data.data)
    //         this.imageSwiper = res.data.data
    //         let list = res.data.data.list
    //         this.lists = this.lists.concat(list)
    //       }
    //     })
    //   }
    // },
    handleVideoClick (index) {
      this.video = this.swiper.list[index]
      // console.log(this.video)
      this.showVideo = true
    },
    handleVideoClose () {
      this.showVideo = false
    }
  }

}
</script>
<style lang="less" scoped>
@rem: 50rem;
.swiper{
    width: 340/@rem;
    // background: #dd0;
    border-radius: 5px;
    // margin-right: 22/@rem;
    height: 200/@rem;
    overflow: hidden;
    position: relative;
}
.swiperY{
    margin: 40/@rem 0;
    padding: 0 24/@rem;
    height: 200/@rem;
    // background-image:url();
    a{
        display: inline-block;
        width: 340/@rem;
        border-radius: 5px;
        margin-right: 22/@rem;
        overflow: hidden;
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
</style>
