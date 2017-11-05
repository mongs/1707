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
  actions,
  mutations
})

export default store
