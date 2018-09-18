<template>
    <div class="detail page-top">
        <header-title :title="title"></header-title>    
        <!-- 顶部banner -->
        <swiper :options="swiperOption" ref="mySwiper-p1" class="brandImg img-bg">
			<swiper-slide v-for = "(slide, index) in brandImages" :key = "index">
				<img :src="slide.imgUrl" width="100%">
			</swiper-slide>
            <div class="swiper-pagination swiper-p1" slot="pagination"></div>
		</swiper>
        <!-- 品牌介绍 start -->
        <div class="brand-introduce">
            <div class="name over bc">
                <h1 class="ellipsis font-w6">谷子帝五谷煎饼</h1>
                <!-- <div class="comments">
                    <div class="concern"> -->
                        <!-- <i class="img-bg"><img width="100%" src="/static/images/opportunity/branddetail/icon_attention_normal.png" alt=""></i> -->
                        <!-- <span class="concern-plus">关注</span>
                    </div>
                    <div class="concern"> -->
                        <!-- <i class="img-bg"><img width="100%" src="/static/images/opportunity/branddetail/icon_attention_normal.png" alt=""></i> -->
                        <!-- <span class="concern-plus">已关注</span>
                    </div> -->
                    <!-- 跳转到认证页面 -->
                    <!-- <span class="authentication">
                        <i class="img-bg"></i>
                        <span class="authenticated">已认证</span>
                    </span> 
                </div>-->
            </div>
            <p class="dl">用良心品质，为顾客提供优质服务</p>
            <div class="investment-info">
                <h2>北京王大百味餐饮管理有限公司</h2>
                <ul>
                    <li>加盟费用：2.98~5.98万</li>
                    <li>门店数量：96家</li>
                </ul>
            </div>
        </div>
        <div class="line"></div>
        <div class="know-movie">
            <h2 class="font-w6">秒懂品牌</h2>
            <div class="swiper-movie">123</div>
        </div>
        <div class="line"></div> 
    <!-- 大标题 -->
    <div class="item-advantage">
        <h2 class="font-w6">项目优势</h2>
    </div>
    <!-- 内容 -->
    <div class="content" id="tab">
       <div class="tab-nav border-e5">
            <swiper :options="tabNavOption" ref="mySwiperScroll" id="tabnav" :class="tabNavFixed? 'isFixed' :''">
                <swiper-slide v-for = "(slide, index) in tabNavs" :key = "index">
                    <div class="tab-item">
                        <span :class="[slide.active ?' active':'']">{{slide.title}}</span>
                    </div>
                    
                </swiper-slide>
            </swiper>
        </div>
        <div>
            <!-- 品牌故事 -->
            <div class="brand-story bg-f4 section" id="certify">
                <div class="title">
                    <h3>品牌故事</h3>
                    <p class="img-modify"></p>
                </div>
                <swiper :options="brandStoryOption" ref="mySwiper-p2" class="img-bg">
                    <swiper-slide v-for = "(slide, index) in brandStory" :key = "index">
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
            <!-- 特色产品 -->
            <div class="featured-products section">
                <div class="title">
                    <h3>特色产品</h3>
                    <p class="img-modify"></p>
                </div>
                <swiper :options="featuredProductsOption" ref="mySwiper-p2" class="img-bg">
                    <swiper-slide v-for = "(slide, index) in featuredProducts" :key = "index">
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
            <!-- 品牌形象 -->
            <div class="brand-image bg-f4 section">
                <div class="title">
                    <h3>品牌形象</h3>
                    <p class="img-modify"></p>
                </div>
                <swiper :options="brandStoryOption" ref="mySwiper-p2" class="img-bg">
                    <swiper-slide v-for = "(slide, index) in brandStory" :key = "index">
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
            <!-- 运营优势 -->
            <div class="operational-advantages section">
                <div class="title">
                    <h3>运营优势</h3>
                    <p class="img-modify"></p>
                </div>
                <swiper :options="brandStoryOption" ref="mySwiper-p2" class="img-bg">
                    <swiper-slide v-for = "(slide, index) in brandStory" :key = "index">
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
            <!-- 大众口碑 -->
            <div class="public-praise bg-f4 section">
                <div class="title">
                    <h3>大众口碑</h3>
                    <p class="img-modify"></p>
                </div>
                <swiper :options="brandStoryOption" ref="mySwiper-p2" class="img-bg">
                    <swiper-slide v-for = "(slide, index) in brandStory" :key = "index">
                        <div class="image-wrap">
                            <img :src="slide.imgUrl" width="100%">
                            <div class="describe">
                                <h3>大众点评</h3>
                                <p>{{slide.p}}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <!-- 严选承诺 -->
            <div class="commitment section">
                <div class="title">
                    <h3>严选承诺</h3>
                    <p class="img-modify"></p>
                    <p class="sub-title">构建加盟信任</p>
                </div>
            </div>
            <div class="line"></div>
            <!-- 创始人问答 -->
            <div class="founder"></div>
        </div>

        </div>
    </div>
</template>
<script>
import HeaderTitle from '@/components/HeaderTitle.vue'
// import Swiper from 'Swiper'
export default {
    name: 'Detail',
    components:{HeaderTitle},
    data(){
        var self = this;
        return{
            contentFixed: false,
            tabNavFixed: false,
            swiperOption: {
                pagination: {
                el: '.swiper-p1',
                type: 'fraction',
                clickable: true
                },
                autoplay: {
                delay: 5000,
                disableOnInteraction: false // 触碰后自动切换也不会停止
                },
                loop: true,
                observeParents: true,
                observer: true,
            },
            brandStoryOption: {
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
                            var translate = slideProgress * modify * 150 + 'px';
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
            featuredProductsOption:{
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
                            var translate = slideProgress * modify * 150 + 'px';
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
            tabNavOption:{
                resistanceRatio:0,  // 回弹距离
                observeParents: true,
                observer: true,
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                slidesPerView: 'auto',
                on:{
                    tap: function(e){
            
                        var swiperWidth = self._self.$refs.mySwiperScroll.$el.clientWidth
                       
                        var maxTranslate = this.maxTranslate();
                        // console.log(maxTranslate)
                        var maxWidth = -maxTranslate + swiperWidth / 2
                        var slide = this.slides[this.clickedIndex]   //通过mySwiper.slides[1]获取特定的slide

                        
                        self.tabNavs.forEach(item=>{
                            return item.active = false
                        })
                        self.tabNavs[this.clickedIndex].active = true

                        var slideLeft = slide.offsetLeft
                        var slideWidth = slide.clientWidth
                        var slideCenter = slideLeft + slideWidth / 2  // 被点击slide的中心点
           
                        if (slideCenter < swiperWidth / 2) {
                            this.setTranslate(0)
                        } 
                        else if (slideCenter > maxWidth) {
                            this.setTranslate(maxTranslate)
                        } else {
                            var nowTlanslate = slideCenter - swiperWidth / 2
                            this.setTranslate(-nowTlanslate) 
                        }

                        // 点击导航，控制content内部页面offsetTop
                        // 获取内容到顶部的距离
                        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

                        var offsetTop = document.querySelector('#tab').offsetTop - document.querySelector('#header').clientHeight
                        if (scrollTop > offsetTop) {  
                            this.tabNavFixed = true
                        } else {
                            this.tabNavFixed = false
                        }
                      
                        var top = document.querySelector('#tabnav').clientHeight + document.querySelector('#header').clientHeight;
     
                        var louti = document.querySelectorAll('.section')[this.clickedIndex].offsetTop - top;
                        
                        window.scrollTo({ 
                            top: louti, 
                            behavior: "smooth" 
                        });
                    },
                    slide: function(){
                        var that = self._self.$refs.mySwiperScroll.swiper
                        that.clickedIndex = self.index

                        var swiperWidth = self._self.$refs.mySwiperScroll.$el.clientWidth
                        var maxTranslate = that.maxTranslate();
                
                        var maxWidth = -maxTranslate + swiperWidth / 2
                        var slide = self._self.$refs.mySwiperScroll.swiper.slides[that.clickedIndex]

                        self.tabNavs.forEach(item=>{
                            return item.active = false
                        })
                        self.tabNavs[that.clickedIndex].active = true

                        var slideLeft = slide.offsetLeft
                        var slideWidth = slide.clientWidth
                        var slideCenter = slideLeft + slideWidth / 2  // 被点击slide的中心点

                        if (slideCenter < swiperWidth / 2) {
                            that.setTranslate(0)
                        } 
                        else if (slideCenter > maxWidth) {
                            that.setTranslate(maxTranslate)
                        } else {
                            var nowTlanslate = slideCenter - swiperWidth / 2
                            that.setTranslate(-nowTlanslate) 
                        }
                    }
                },
            },
            title:'详情页',
            tabNavs:[
                    {title: '品牌故事',active: true},
                    {title: '特色产品',active: false},
                    {title: '品牌形象',active: false},
                    {title: '运营优势',active: false},
                    {title: '大众口碑',active: false},
                    {title: '严选承诺',active: false},
                    {title: '创始人问答',active: false},
                ],
            brandImages:[
                {imgUrl:'http://static.kuaidao.cn/brand/bhEXjziQQD.jpg'},
                {imgUrl:'http://static.kuaidao.cn/brand/bhEXjziQQD.jpg'},
                {imgUrl:'http://static.kuaidao.cn/brand/bhEXjziQQD.jpg'},
            ],
            brandStory:[
                {imgUrl:'http://static.kuaidao.cn/brand/QxrmAMd7XP.jpg',p:'手撕鸡腿肉，软糯鲜嫩，量大料足，可口美味'},
                {imgUrl:'http://static.kuaidao.cn/brand/bhEXjziQQD.jpg',p:'特色产品，手撕鸡腿肉，软糯鲜嫩，量大料足，可口美味'},
                {imgUrl:'http://static.kuaidao.cn/brand/BAHkmMSpze.jpg',p:'品牌形象，黄金产粮带之五谷杂粮，手撕鸡腿肉，软糯鲜嫩，量大料足，可口美味'},
            ],
            featuredProducts:[
                {imgUrl:'http://static.kuaidao.cn/brand/QxrmAMd7XP.jpg',p:'手撕鸡腿肉，软糯鲜嫩，量大料足，可口美味'},
                {imgUrl:'http://static.kuaidao.cn/brand/bhEXjziQQD.jpg',p:'特色产品，手撕鸡腿肉，软糯鲜嫩，量大料足，可口美味'},
                {imgUrl:'http://static.kuaidao.cn/brand/BAHkmMSpze.jpg',p:'品牌形象，手撕鸡腿肉，软糯鲜嫩，量大料足，可口美味'},
            ],
            topAry:[],
            index: 0    
        }
    },
    created(){
        // this.initSwiper()
    },
    methods:{
        getOffset(){ // 将楼梯层距离顶部高度，存放在数组中
            // var topAry = []
            var oHs = document.querySelectorAll('.section')
            for (var i = 0; i < oHs.length; i++) {
                var txtTop = oHs[i].offsetTop;
                this.topAry.push(txtTop);
            }
            // console.log(this.topAry)
        },
       // 监听滚动导航吸顶
        watchScroll () {
            // console.log(this.tabNavOption)

            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            
            // console.log(scrollTop)
            var offsetTop = document.querySelector('#tab').offsetTop - document.querySelector('#header').clientHeight
            var value = scrollTop + document.querySelector('#tabnav').clientHeight + document.querySelector('#header').clientHeight;
            for (var i = 0; i < this.topAry.length; i++) {
                if( value >= this.topAry[i]){
                    if(this.topAry[i+1] > scrollTop){
                        this.index = i
                    }
                }
            }
            this.tabNavOption.on.slide()
            // console.log(this.index)
            if (scrollTop > offsetTop) {  
                this.tabNavFixed = true
            } else {
                this.tabNavFixed = false
            }
        }
    },
    mounted () { // 监听滚动条
        window.addEventListener('scroll', this.watchScroll)
        // console.log(this.tabNavOption.on.tap)
        this.getOffset()
    },
    destroyed () { // 组件切换的时候，销毁监听
        window.removeEventListener('scroll', this.watchScroll)
    },

}
</script>
<style lang="less" scoped>
@rem:50rem;
*{
    box-sizing: border-box;
}
.line{
    height: 16/@rem;
    background: #f4f4f4;  
}
// 品牌简介
.brand-introduce{
    padding: 32/@rem 48/@rem 60/@rem;
    h1{
        width: 400/@rem;
        font-size: 44/@rem;
        color: #333333;
    }
    p.dl{
        margin-top: 5/@rem;
        line-height: 38/@rem;
        font-size: 28/@rem;
        color: #666666;
    }
    .investment-info{ 
        font-size: 32/@rem;
        color: #333333;
        h2{
            margin-top: 50/@rem;
            margin-bottom: 24/@rem;   
        }
        ul{
            display: flex;
            justify-content: space-between;
            flex-wrap:wrap;
        }
    }
}
// 秒懂品牌 
.know-movie{
    .swiper-movie{
        height: 472/@rem;
        // height: 365/@rem; 
    }
}
.item-advantage,.know-movie{
    h2{
        height: 86/@rem;
        line-height: 86/@rem;
        font-size: 40/@rem;
        color: #2a2a2a;
        padding-left: 48/@rem;
    }
}
// 项目优势内容
#tabnav{
    background: #ffffff;
}
.border-e5{
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}
.bg-f4{
    background: #f4f4f4;
    .image-wrap{
       background: #ffffff!important;
    }
}
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
.title{
    text-align: center;
    margin: 0 auto;
    padding: 48/@rem 0;
    h3{
        height:38/@rem;
        line-height: 38/@rem;
        font-size: 38/@rem;
        font-weight: 600;
        color: #333333;
        margin-bottom: 16/@rem;
    }
    .img-modify{
        height: 10/@rem;
        background:url('/static/images/detail/img_xiegang.png') no-repeat center;
        background-size:100/@rem 10/@rem;
    }
}
// 选项卡 start
.isFixed{      // 滚动定位
    position:fixed;
    top:88/@rem;
    left: 0;
    right: 0;
    z-index:103;
}
.active{
    color:#30A6AE;
    border-bottom: 8/@rem solid #2ca1ab!important;
    // #41bcbc  
}
.tab-nav{
    // position: relative;
    width: 100%; 
    height: 98/@rem;
    line-height: 98/@rem;
    overflow: hidden; 
    font-size: 30/@rem;
    background: #ffffff;
    .swiper-slide{
        width: 210/@rem!important;
    }
    .tab-item{
        display: inline-block;
        width: 210/@rem;
        text-align: center;
        background: #ffffff;
        box-sizing: border-box;
        span{
            box-sizing: border-box;
            display: inline-block;
            line-height: 84/@rem;
            border-bottom: 8/@rem solid #ffffff;
        }
    }
    .tab-item:first-child{
    //    padding-left: 48/@rem;
    }
}
.commitment{
    .sub-title{
        line-height: 58/@rem;
        color: #999999;
        margin-bottom: 10/@rem;
    }
}
// 顶部banner
.swiper-pagination-fraction{
  color: #ffffff;
  text-align: right !important;
}
.brandImg{
    width:750/@rem;
    height:420/@rem;
    background-image: url(/static/images/background_img/brand_top_banner.png);
}
.img-background{
  background-image: url(/static/images/background_img/brand_top_banner.png);
  background-size:100% 420/@rem;
  background-position:center center;
  background-repeat:no-repeat;
  overflow: hidden;
}
</style>
