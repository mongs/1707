import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import Cards from '@/components/Cards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    }
  ]
})
