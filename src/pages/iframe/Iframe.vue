<template>
    <div class="iframe page-top">
        <header-title :title="title"></header-title>
        <div v-if="!iframe">123</div>
        <div class="box" v-else>
            <iframe src="https://weex.kaola.com/activity/pages/quality.html?p_kpm=aG9tZVBhZ2U%253D.dGFiMS3mjqjojZA%253D._._-_%2540%2540_&kpm=bWVzc2FnZVBhZ2U%253D._._._-_%2540%2540_&shareOs=iOS&datid=__da_230bb323_5691a87490c33c80&shareTo=qq" frameborder="0" width="100%" height="100%"></iframe>
        </div>
    </div>
</template>
<script>
import HeaderTitle from '@/components/HeaderTitle.vue'
export default {
    name: 'Iframe',
    components:{HeaderTitle},
    data(){
        return {
            iframe: false,
            title: '测试'
        }
    },
    mounted(){
        this.iframe = true
    }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
.box{
    position: absolute;
    width: 100%;
    // min-height: 100vh;
    top: 88/@rem;
    left: 0;right:0;bottom:0;
}
</style>
