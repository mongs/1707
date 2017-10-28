# vuex

> 状态管理

## 步骤

1. 安装

``` bash
$ npm i vuex --save
```

2. 导入

``` js
import Vue from 'vue'
import Vuex from 'vuex'
```

3. 使用

``` js
Vue.use(Vuex)
```

4. 实例化Vuex.Store

``` js
const store = new Vuex.Store({
  state: {
    cards: [],
    products: [
      {
        id: 123111,
        name: '坚果PRO'
      }
    ]
  }
})
```

5. 注入到Vue的选项中

``` js
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
```

## state

取state中的数据`this.$store.state.<name>`

## mutations

专门用来同步操作, 直接操作state
方法中触发mutate, 用的方法是`this.$store.commit('mutate名', 参数)`

``` js
mutations: {
  add (state, pid) {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === pid) {
        state.products.splice(i, 1)
        state.cards.push(state.products[i])
        return
      }
    }
  }
}
```

``` js
// products.vue 中的方法
methods: {
  add (pid) {
    this.$store.commit('add', pid)
  }
}
```

## getters

通过getters可以对state中的数据进行获取或者处理,
组件中拿到的数据, 一般不直接从state中拿, 从getters中拿,
拿的方法是`this.$store.getters.<name>`