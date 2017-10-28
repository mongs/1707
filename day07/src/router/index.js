import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/news/:id',
      name: 'Main',
      component: Main
    }
  ]
})
