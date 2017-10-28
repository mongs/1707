// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cards: [],
    products: [
      {
        id: 123111,
        name: '坚果PRO'
      },
      {
        id: 123112,
        name: '小米PRO'
      },
      {
        id: 123113,
        name: '华为PRO'
      },
      {
        id: 123114,
        name: '三星PRO'
      },
      {
        id: 123115,
        name: '苹果PRO'
      }
    ]
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
