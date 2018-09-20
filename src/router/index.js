import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'detail',
      component: ()=>import('@/pages/detail/Detail'),
      // children:[{
      //   path: 'images',
      //   // name: 'images',
      //   component: ()=>import('@/pages/detail/Images'),
      // }]
    },
    {
      path: '/iframe',
      name: 'iframe',
      component: ()=>import('@/pages/iframe/Iframe')
    },
    {
      path: '/images',
      name: 'images',
      component: ()=>import('@/pages/detail/Images'),
    }
  ]
})
