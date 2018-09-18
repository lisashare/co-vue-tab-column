<template>
  <div class="gallary-img container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in lists"
          :key="index"
        >
          <img class="gallary-img" :src="item.imgUrl" />
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GallaryImg',
  props:['swiper','busiType','brandId'],
  data () {
    const self = this
    return {
      swiperOptions: {
        pagination: {
          // el: '.swiper-pagination',
        },
        observeParents: true,
        observer: true,
      },
      info:{
        brandId: this.brandId,
        busiType: this.busiType,
        pageNum: 1,
        pageSize: 10
      },
      lists: this.swiper.list,
      imageSwiper: ''
    }
  },
  methods: {
    imageLoadOver(){
      if(this.imageSwiper&&(this.imageSwiper.pageNum == this.imageSwiper.pages)){
          return false
      }else{
        this.info.pageNum = this.info.pageNum + 1
        // console.log(this.info.pageNum)
        let params = {
          'apiUrl': this.weburl + 'mobile/share/listBrandImage',
          'params': this.info
        }
        this.$http.post( this.baseurl + '/brand/api',params).then(res=>{
          if(res.data.code == 200){
            // console.log(res.data.data)
            this.imageSwiper = res.data.data
            let list = res.data.data.list
            this.lists = this.lists.concat(list)
          }
        })
      }
    },
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less" scoped>
@rem: 50rem;
  // .container >>> .swiper-container
    // {overflow: inherit}
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background:rgba(0, 0, 0, .75);
    .wrapper{
      height: 440/@rem;
      // height: 0;
      width: 100%;
      // padding-bottom: 100%;
      .gallary-img{
        width: 100%;
      }
      .swiper-pagination{
        color: #fff;
        // bottom: -1rem;
      }
  }
}
</style>
