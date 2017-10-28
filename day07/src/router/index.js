import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/news/1'    // 默认重定向到头条新闻的路由
    },
    {
      path: '/news/:id',
      name: 'Main',
      component: Main
    }
  ]
})
console.log(router)
export default router
