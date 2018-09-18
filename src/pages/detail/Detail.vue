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
            <div class="swiper-movie">
                <banner-video></banner-video>
            </div>
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
            <div class="commit section">
                <div class="title">
                    <h3>严选承诺</h3>
                    <p class="img-modify"></p>
                    <p class="sub-title">构建加盟信任</p>
                </div>
                <ul class="commit-content">
                    <li>
                        <img src="/static/images/detail/icon_sheng@2x.png" alt="">
                    </li>
                    <li>
                        <img src="/static/images/detail/icon_tui@2x.png" alt="">
                    </li>
                    <li>
                        <img src="/static/images/detail/icon_bao@2x.png" alt="">
                    </li>
                </ul>
            </div>
            <div class="line"></div>
            <!-- 创始人问答 -->
            <div class="founder">
                <h2 class="founder-title">
                    <span class="icon-hot"><img src="/static/images/detail/HOT@2x.png"/></span>
                    <span>创始人问答</span>
                    <span class="question"><img src="/static/images/detail/Btn_quiz@2x.png"/></span>
                </h2>

                <div class="explain">
                    <div class="information">
                        <div class="avator">
                            <img src="/static/images/detail/icon_bao1@2x.png">
                        </div>
                        <h3>王志会<span>谷子帝创始人</span></h3>
                        <div class="label">
                            <span class="founder-tag">餐饮大师</span>
                        </div>
                    </div>
                    <div class="synopsis">
                        <h3>给生活一个最健康的交代</h3>
                        <p>CSS 渐变 是在 CSS3 Image Module 中新增加的 类型. 使用 CSS 渐变可以在两种颜色间制造出平滑的渐变效果. 用它代替图片，可以加快页面的载入时间、减小带宽占用。同时，因为渐变是由浏览器直接生成的，它在页面缩放时的效果比图片更好，因此你可以更加灵活、便捷的调整页面布局。</p>
                    </div> 
                </div>
            </div>
        </div> 
 
            <div class="answerComent">
                <div class="answername">
                    <dl class="answerinfo over">
                        <dt class="avatar">
                            <div class="avatar-box img-bg over">
                                <img width="100%" src="/static/images/detail/icon_ask@2x.png" alt="">
                            </div>
                        </dt>
                        <dd class="avatarname">
                            <p class="avatarname-p font-w7">
                                <span>王女士</span>
                                <i class="wen"><img width="100%" height="100%" src="/static/images/detail/icon_ask@2x.png" alt=""></i>
                            </p>
                            <p class="answerwen">渐变可以在两种颜色间制造出平滑的渐变效果. 用它</p>
                            <div class="answerReturn position-re">
        
                                <div class="riangle-up"></div>
                                <dl class="answerfounder over">
                                    <dt class="avatar">
                                        <div class="avatar-box img-bg over">
                                            <img width="100%" src="/static/images/detail/icon_ask@2x.png" alt="">
                                        </div>
                                    </dt>
                                    <dd>
                                        <p class="avatarname-p font-w7">
                                            <span class="founderpersonal">创始人<i class="foundername">王志会</i></span><i class="da"><img width="100%" height="100%" src="/static/images/detail/icon_answer@2x.png" alt=""></i>
                                        </p>
                                        <p class="hello">中新增加的 类型. 使用 CSS 渐变可以在两种颜色间制造出平滑的渐变效果. 用它代替图片，可以加快页面的载入时间、减小带宽占用。同时，因为渐变是由浏览器直接生成的，它在页面缩放时的效</p>
                                    </dd>
                                </dl>
                            </div>
                        </dd>
                    </dl>
                </div>
                <div class="answername">
                    <dl class="answerinfo over">
                        <dt class="avatar">
                            <div class="avatar-box img-bg over">
                                <img width="100%" src="/static/images/detail/icon_ask@2x.png" alt="">
                            </div>
                        </dt>
                        <dd class="avatarname">
                            <p class="avatarname-p position-re font-w7">
                                <span>王女士</span>
                                <i class="wen"><img width="100%" height="100%" src="/static/images/detail/icon_ask@2x.png" alt=""></i>
                            </p>
                            <p class="answerwen"> 类型. 使用 CSS 渐变可以在两种颜色间制造出平滑的渐变效果. 用它</p>
                            <div class="answerReturn position-re">
        
                                <div class="riangle-up"></div>
                                <dl class="answerfounder over">
                                    <dt class="avatar">
                                        <div class="avatar-box img-bg over">
                                            <img width="100%" src="/static/images/detail/icon_ask@2x.png" alt="">
                                        </div>
                                    </dt>
                                    <dd>
                                        <p class="avatarname-p position-re font-w7">
                                            <span class="founderpersonal">创始人<i class="foundername">王志会</i></span><i class="da"><img width="100%" height="100%" src="/static/images/detail/icon_answer@2x.png" alt=""></i>
                                        </p>
                                        <p class="hello">中新增加的 类型. 使用 CSS 渐变可以在两种颜色间制造出平滑的渐变效果. 用它代替图片，可以加快页面的载入时间、减小带宽占用。同时，因为渐变是由浏览器直接生成的，它在页面缩放时的效</p>
                                    </dd>
                                </dl>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderTitle from '@/components/HeaderTitle.vue'
import BannerVideo from './BannerVideo.vue'
export default {
    name: 'Detail',
    components:{HeaderTitle,BannerVideo},
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
                            this.setTransition(1000)
                            this.setTranslate(0)
                        } 
                        else if (slideCenter > maxWidth) {
                            this.setTransition(1000)
                            this.setTranslate(maxTranslate)
                        } else {
                            var nowTlanslate = slideCenter - swiperWidth / 2
                            this.setTransition(1000)
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
                            that.setTransition(1000)
                            that.setTranslate(0)
                        } 
                        else if (slideCenter > maxWidth) {
                            that.setTransition(1000)
                            that.setTranslate(maxTranslate)
                        } else {
                            var nowTlanslate = slideCenter - swiperWidth / 2
                            that.setTransition(1000)
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
            var oHs = document.querySelectorAll('.section')
            for (var i = 0; i < oHs.length; i++) {
                var txtTop = oHs[i].offsetTop;
                this.topAry.push(txtTop);
            }
        },
       // 监听滚动导航吸顶
        watchScroll () {
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
        this.getOffset()
    },
    destroyed () { // 组件切换的时候，销毁监听
        window.removeEventListener('scroll', this.watchScroll)
    }
}
</script>
<style lang="less" scoped>
@rem:50rem;
// *{
//     box-sizing: border-box;
// }
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
// 统一title
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
        background:url('/static/images/detail/img_xiegang@2x.png') no-repeat center;
        background-size:100/@rem 10/@rem;
    }
}
// 严选承诺
.commit{
    .sub-title{
        line-height: 58/@rem;
        color: #999999;
    }
    .commit-content{
        padding: 10/@rem 48/@rem 60/@rem;
        display: flex;
        justify-content: space-between;
        li{
            width: 204/@rem;
            height: 148/@rem;
            img{
                width: 100%;
            }
        }
    }
}
// 创始人问答
.founder{
    padding: 0 48/@rem;
    border-bottom: 1px solid #e4e4e4;
}
.founder-title{
    position: relative;
    height: 130/@rem;
    font-size: 40/@rem;
    color:#333333;
    font-weight: 600;
    display: flex;
    align-items: center;
    img{
        vertical-align: top;
        width:100%;
    }
    .icon-hot{
        margin-right: 22/@rem;
        width: 52/@rem;
        height: 30/@rem;
    }
    .question{
        position: absolute;
        right:0;
        width: 190/@rem;
        height: 62/@rem;
    }
}
.explain{
    padding-top: 60/@rem;
    padding-bottom: 52/@rem;
    .information{
        margin-bottom: 57/@rem;
        display: flex;
        flex-direction:column;
        align-items: center;
       h3{
           height: 66/@rem;
           line-height: 66/@rem;
           font-size: 30/@rem;
           color: #333333;
           font-weight: 600;
           span{
               font-size: 26/@rem;
               font-weight: 500;
               margin-left: 30/@rem;
           }
       } 
    }
   .avator{
       width: 190/@rem;
       height: 190/@rem;
       border-radius: 50%;
       margin-bottom: 4/@rem;
       img{
           width: 100%;
       }
   }
    .label{
        span{
            font-size: 20/@rem;
            color: #999;
            height: 36/@rem;
            line-height: 36/@rem;
            padding:0 9/@rem;
            margin-right: 20/@rem;
            border-radius: 18/@rem;
            border: 1px solid #e3f4f6;
        }
    }
    .synopsis{
        h3{
            line-height: 36/@rem;
            font-size: 30/@rem;
            color: #333333; 
            font-weight: 600;
        }
        p{
            margin-top: 15/@rem;
            line-height: 42/@rem;
            font-size: 26/@rem;
            color: #666666;
        }
    }
}
// 创始人问答
.answerComent{
    padding: 54/@rem 48/@rem 0;
}
// 问
.answername{
    padding-bottom: 60/@rem;
    margin:0 24/@rem;
    // margin:10/@rem 24/@rem 40/@rem;
    .answerinfo{   // 头像
        display: flex;
        .avatar-box{
            width: 62/@rem;
            height: 62/@rem;
            border-radius: 50%;
            margin-right: 14/@rem;
        }
    }
    .avatarname{ // 提问者name
        width: 578/@rem;
        // padding-left: 20/@rem;
        // padding-top: 6/@rem;
        .avatarname-p{  // 提问者样式
            position:relative;
            line-height: 54/@rem;
            font-size: 34/@rem;
            color:#333333;
            margin-bottom: 18/@rem;
            .founderpersonal{
                display: inline-block;
                color: #30A6AE;
            }
            .foundername{
                margin-left: 22/@rem;
                font-size: 24/@rem;
                color: #666666;
            }
        }
        .answerwen{
            line-height: 40/@rem;
            font-size: 28/@rem;
            margin-bottom:30/@rem;
        }
    }
}
// 回答
.answerfounder{
    display: flex;
    padding: 18/@rem 26/@rem 28/@rem 18/@rem ;
    background:#f4f4f4;
    border-radius: 8/@rem;
    color: #333333;
    .kefuhuifu{  // 评论下的客服回复
        padding:0;
        p:first-child{
            color: #ff0404;
            font-size: 26/@rem;
        }
    }
    .hello{
        font-size: 28/@rem;
        line-height: 40/@rem;
        color: #333333;
    }
}

.wen,.da{
    position: absolute;
    top: 6/@rem;
    width:40/@rem;
    height: 36/@rem;
    margin-left: 26/@rem;
    img{
       display: block;
    }
}
.riangle-up{  // 修饰箭头
    width: 0;
    height: 0;
    border-left: 22/@rem solid transparent;
    border-right: 22/@rem solid transparent;
    border-bottom: 22/@rem solid #f4f4f4;
    position: absolute;
    left: 27/@rem;
    top: -18/@rem;
}
.position-re{
    position: relative;
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
