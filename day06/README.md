# day06

## HTTP

+ vue-resource
  停止更新,官方推荐用axios
+ axios

  [中文文档](https://www.kancloud.cn/yunye/axios/234845)

  [官方仓库](https://github.com/axios/axios)

## Route

### 1. 安装vue-router

vue init 项目的时候会有选择,如果选择了yes就已经安装过了.如果没有运行下边的命令安装

``` bash
$ npm i vue-router --save
```

### 2. Vue.use(Router)

``` js
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
```

### 3. 在Vue实例选项中配置

如main.js中:

``` js
import router from './router'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```

### 4. 配置路由

如router/index.js中, routes中的每一个对象代表一组配置信息, path就是对应的路由(路径), component就是当匹配这个路由时,显示哪个组件

当路由时'/'显示HelloWorld组件,'/search'显示Search组件

``` js
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
    }
  ]
})
```

### 5. 在哪儿显示

`<router-view></router-view>`就相当于先刨了个坑,当匹配路由'/'的时候,这个坑里放的是HelloWorld,当匹配'/search',这个坑里放的就是search组件,如:

``` html
<div id="app">
  <router-view></router-view>
  <v-main></v-main>
</div>
```