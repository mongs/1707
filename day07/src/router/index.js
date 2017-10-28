import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Info from '@/components/Info'
import List from '@/components/List'

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
      component: Main,
      children: [
        {
          path: 'info',  // /news/:id/info
          component: Info
        },
        {
          path: 'list',
          component: List
        }
      ]
    },
    {
      path: '/router_name',
      name: 'router_name',
      components: {
        default: Info,
        a: List,
        b: Main
      }
    }
  ]
})
console.log(router)
export default router
