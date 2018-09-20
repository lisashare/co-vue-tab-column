<template>
    <div class="iframe page-top">
        <header-title :title="title"></header-title>
        <div class="iframe-detail">
            <ul>
                <li @click="handlerChange(1)">tab-1</li>
                <li @click="handlerChange(2)">tab-2</li>
            </ul>
            <!-- <div class="abc">
                <iframe src="http://192.168.30.221:8020/company/server.html?__hbt=1537347123258" scrolling="auto" frameborder="0" width="100%" height="100%"></iframe>
            </div> -->
            <div class="pox" v-if="tabiframe==1">
                <iframe src="https://mact.kuaidao.cn/activity?fr=baidu" scrolling="auto" frameborder="0" width="100%" height="100%"></iframe>
            </div>
            <div class="box" v-else>
                <iframe src="http://zl.sjhz.shangji.cn/m/shichang/guzidi/#/" scrolling="auto" frameborder="0" width="100%" height="100%"></iframe>
            </div>
        </div>
    </div>
</template>
<script>
// import server from '@/pages/server.js'
import HeaderTitle from '@/components/HeaderTitle.vue'
export default {
    name: 'Iframe',
    components:{HeaderTitle},
    data(){
        return {
            tabiframe: 1,
            title: '测试'
        }
    },
    // mounted(){
    //     var _53code = document.createElement("script");_53code.src = "https://tb.53kf.com/code/code/10179711/1";
    //     var s = document.getElementsByTagName("script")[0]; 
    //     s.parentNode.insertBefore(_53code, s);
    // },
    methods:{
        handlerChange(index){
            this.tabiframe = index
        }
    },
    // mounted(){
    //     this.tabiframe = 1
    // }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
.abc{
    z-index: 9;
    position: absolute;
    width: 100%;
    // top: 166/@rem;
    // top: 0;
    left: 0;right:0;
    max-height: 1140/@rem;
    bottom:0;
}
.pox,.box{
    position: absolute;
    width: 100%;
    top: 166/@rem;
    left: 0;right:0;bottom:0;
}
.iframe-detail{
    // position: relative;
    padding-top: 88/@rem;
    ul{
        position: fixed;
        display: flex;
        height: 88/@rem;
        top: 88/@rem;
        left:0;
        width: 100%;
        z-index: 9;
        li{
            width: 50%;
            height: 88/@rem;
            background: yellow;
            font-size: 34/@rem;
            line-height: 88/@rem;
            text-align: center;
        }
        li:first-child{
            background: blue;
        }
    }
}
</style>
