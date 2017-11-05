/*
vuex 状态管理的入口文件
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cards: [],
    products: []
  },
  getters: {
    cardsProducts (state) {
      /*
      return state.products.filter(function (element) {
        return element.isAdded
      });
      */
      return state.products.filter(element => element.isAdded);
    }
  },
  actions,
  mutations
})

export default store
