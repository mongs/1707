# day05

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### module

#### ES6之前，使用的模块化:

+ AMD   require.js
+ CMD   sea.js(阿里-玉伯开发)
+ Commonjs Node.js的模块语法
+ ES6的语法

#### import

+ 导入文件类型的包

从‘包的路径’找到包，导入到当前文件夹中，并起名'<名字>'
`import <名字> from <包的路径>`，如： `import App from './App'`

**注意：** 文件模块要想导入给别人用，自己必须先导出（把给别人用的东西要暴露出去）

+ 导入原生的包（npm 安装的包）

不需要写路径，自己就会去node_modules文件夹下去找，如：`import Vue from 'vue'`

#### export

export **一个页面可以出现多次**，如：

``` js
export const num = 3
export function fn () {
  return 'wally'
}
export let obj = {
  name: 'fengjun',
  age: 13
}
```

用export导出的数据，**导入时需要加`{}`**，如：

```js
import { num, fn } from '@/common/js/b.js'
```

#### export default

导出内容给别的文件使用，如a.js中

``` js
let obj = {
  name: 'wally',
  age: 17,
  sex: 'man'
}
// 将obj暴露出去
export default obj
```

在app.vue中，导入`import a from '@/common/js/a.js'`，那么现在a就代表的是a.js导出的obj。

export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此**export default命令只能使用一次**。所以，import命令后面才不用加大括号，因为只可能对应一个方法。

#### 别名

`import {a as b} from '路径'` 导入a并给它别名b，用b来代替a

### 导入全部并起名

`import * as <对象别名> from <路径>`，如：c.js导出：

``` js
const num = 3
function fn () {
  return 'wally'
}
let obj = {
  name: 'fengjun',
  age: 13
}
export {num, fn, obj}
```

app.vue中导入时：`import * as c from '@/common/js/c.js'`那么现在c就代表的是`{num, fn, obj}`这个对象，所以在app.vue中可以通过c.num,c.fn的方式拿到对应的数据

### 组件

### scoped

组件中写的样式最终都会以内嵌style的方式注入到index.html页面中, 在每个组件的style标签上添加scoped属性,可以样式变成局部样式, 只作用于当前组件

### props

父组件给子组件传递数据用props。
在子组件的选项中定义props，如：

```js
export default {
  props: ['str']
}
```

然后在子组件的模版内就可以绑定str这个数据，如：

``` html
<header>
  This is the {{ str }} component
</header>
```

在父组件中，使用子组件时，通过props定义的属性传递数据给子组件。如app.vue中使用header组件并给其传递数据str：

``` html
<v-header str="Hello"></v-header>
```

那么最终页面中渲染的结果就是`This is the Hello component`

#### 动态数据绑定

如果父组件给子组件传递的是动态数据，可以通过v-bind绑定，如：

```html
<input type="text" v-model="value">
<v-header v-bind:str="value"></v-header>
```

value是data中定义的数据

``` js
data () {
  return {
    value: ''
  }
}
```

### 子组件向父组件通信

在子组件上 通过$emit发射一个自定义事件，父组件上通过v-on监听自定义事件，然后进行业务处理，如：

Main.vue子组件中：

``` html
<button @click="emitMsg" class="btn btn-primary">发射消息</button>
```

``` js
export default {
  methods: {
    emitMsg () {
      console.log('msg has emited')
      this.$emit('sendMsg')
    }
  }
}
```

App.vue父组件上监听sendMsg事件：

``` html
<v-main v-on:sendMsg="say"></v-main>
```

``` js
methods: {
  say () {
    alert('hello')
  }
}
```

### event bus

通过定义一个Vue的实例bus，来作为在组件间传递信息的bus（公共汽车），如：
bus.js

```js
import Vue from 'vue'
let bus = new Vue()
export default bus
```

在Main.vue中通过bus发射事件`bus.$emit('sibling')`

在Footer.vue中通过bus监听发射的事件，然后在回调函数中处理业务：

```js
bus.$on('sibling', () => {
  alert('接受到了，哈哈哈')
})
```

### slot

### transition

### HTTP
