import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'detail',
      component: ()=>import('@/pages/detail/Detail')
    },
    {
      path: '/iframe',
      name: 'iframe',
      component: ()=>import('@/pages/iframe/Iframe')
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
