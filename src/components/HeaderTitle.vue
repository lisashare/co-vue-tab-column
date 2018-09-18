<template>
    <div class="header-title">
        <header class="search-header bc line-bottom" id="header">
            <i class="icon-left" v-on:click = "$router.go(-1)"></i>
            <h2 class="ellipsis">{{title}}</h2>
            <span class="header-contact-customer" @click="isTelShow=!isTelShow"></span>
            <span class="header-nav" @click="isNavShow=!isNavShow"></span>
        </header>
        <nav-list
            :closeNav="closeNav"
            :isNavShow="isNavShow">
        </nav-list>
        <service-pop
          :closeTel="closeTel"
          :isTelShow="isTelShow">
        </service-pop>
    </div>
</template>
<script>
import ServicePop from './ServicePop'
import NavList from './NavList'
export default {
  name: 'HeaderTitle',
  components: {NavList,ServicePop},
  props: ['title'],
  data () {
    return {
      isNavShow: false,
      isTelShow: false,
    }
  },
  methods: {
    phoneCall () {
      window.location.href = 'tel:010-53579588'
    },
    closeNav () {
      this.isNavShow = false
    },
    closeTel () {
      this.isTelShow = false;
    },
  }
}
</script>
<style lang="less" scoped>
@rem: 50rem;
*{
    box-sizing: border-box;
}
.header-title{
  z-index:9;
}
</style>
