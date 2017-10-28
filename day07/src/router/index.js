import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Info from '@/components/Info'
import List from '@/components/List'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news/1'    // 默认重定向到头条新闻的路由
    },
    {
      path: '/news/:id',
      name: 'Main',
      component: Main,
      beforeEnter: (to, from, next) => {
        console.log(to, from)
        next()
      },
      children: [
        {
          path: 'info',  // /news/:id/info
          component: Info,
          props: true
        },
        {
          path: 'list',
          component: List,
          props: {
            name: 'wally'
          }
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
    },
    {
      path: '/list',
      component: HelloWorld
    }
  ]
})
export default router

/*
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  next(false)
  // next('/')
})
*/
