import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Search from '@/components/Search'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/main/:pid',
      name: 'Main',
      component: Main
    }
  ]
})
