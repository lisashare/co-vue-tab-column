<template>
    <div class="banner-image">
        <swiper :options="swiperAnimateOption" class="img-bg">
            <swiper-slide v-for = "(slide, index) in slides" :key = "index">
                <div class="image-wrap">
                    <img :src="slide.imgUrl" width="100%">
                    <div class="describe">
                        <h4>大众点评</h4>
                        <p>{{slide.p}}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'BannerImage',
    props: ['slides'],
    data(){
        return {
            swiperAnimateOption: {  // 品牌故事轮播
                loop: true,
                observeParents: true,
                observer: true,

                watchSlidesProgress: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                loopedSlides: 5,
                on: {
                    progress: function(progress) {
                        for (var i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i);
                            var slideProgress = this.slides[i].progress;
                            var modify = 1;
                            if (Math.abs(slideProgress) > 1) {
                                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                            }
                            var translate = slideProgress * modify * 130 + 'px';
                            var scale = 1 - Math.abs(slideProgress) / 5;
                            var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                            slide.css('zIndex', zIndex);
                            slide.css('opacity', 1);
                            if (Math.abs(slideProgress) > 3) {
                                slide.css('opacity', 0);
                            }
                        }
                    },
                    setTransition: function(transition) {
                        for (var i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i)
                            slide.transition(transition);
                        }

                    }
                }
            },
        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
.image-wrap{
    width: 508/@rem;
    height: 462/@rem;
    overflow: hidden;
    margin: 0 auto 60/@rem;
    border-radius: 8/@rem;
    background: #f4f4f4;
    img{
        height: 300/@rem;
    }
    .describe{
        padding: 3/@rem 24/@rem 19 /@rem;
        min-height: 162/@rem;
        h4{
            height:64/@rem;
            line-height: 64/@rem;
            font-size: 30/@rem;
            font-weight: 600;
            color: #333333;
        }
        p{
            line-height: 40/@rem;
            font-size: 26/@rem;
            color: #666666;
        }
    }
}
</style>
