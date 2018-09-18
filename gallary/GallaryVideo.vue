<template>
    <div class="gallary-video list_alertbox" @click="handleVideoClick">
        <div class="bg_alertbox">
            <div class="video3" width="100%" v-if="video.videoUrl">

                    <video id="video" controls="controls" preload :poster="video.coverdUrl" >
                        <source :src="video.videoUrl" type="video/mp4" />
                    </video>

                <!-- <video :src="video.videoUrl"  controls="controls" loop preload id="video" :poster="video.coverdUrl">
                </video> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'GallaryVideo',
  props: ['video'],
  created(){
      console.log(this.video)
  },
  methods: {
    handleVideoClick () {
      this.$emit('hidevideo')
    }
  }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
*{
    box-sizing: border-box;
}
.list_alertbox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background:rgba(0, 0, 0, .7);
    .bg_alertbox{
        width: 100%;
        height: 440/@rem;
      .video3 {
        width: 100%;
        position: absolute;
        top: 25%;
        height: 50%;
        video{
            width: 100%;
            height: 100%;
        }
      }
    }
}
</style>
