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
        name: '坚果PRO',
        added: true
      },
      {
        id: 123112,
        name: '小米PRO',
        added: false
      },
      {
        id: 123113,
        name: '华为PRO',
        added: false
      },
      {
        id: 123114,
        name: '三星PRO',
        added: false
      },
      {
        id: 123115,
        name: '苹果PRO',
        added: false
      }
    ]
  },
  getters: {
    products (state) {
      return state.products.filter(item => !item.added)
    },
    cards (state) {
      return state.products.filter(item => item.added)
    }
  },
  mutations: {
    add (state, pid) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === pid) {
          state.products[i].added = true
          return
        }
      }
    },
    delete (state, pid) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === pid) {
          state.products[i].added = false
          return
        }
      }
    }
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
