import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
let Home = ()=> import('../view/home.vue')
let My = ()=> import('../view/my.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/my',
      component:My
    },
    {
      path: '*',
      redirect:'/home'
    }
  ]
})
