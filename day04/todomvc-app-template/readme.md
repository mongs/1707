### 安装依赖

安装依赖的css  js

```
$ npm install
```

### 引入vue

```html
<script src="js/vue.js"></script>
```

### 定义初始数据

在app.js中,实例化Vue,然后定义初始数据

```js
{
  id: 唯一不重复的,
  title: 主要内容,
  isCompleted: boolean  //是否选中
}
```

``` js

{ // 为了形成块级作用域 ()()
  let vm = new Vue({
   el: '#app',
   data: {
     datas: [
       {id: 123, title: 'HTML5', isCompleted: false},
       {id: 124, title: 'JavaScript', isCompleted: false},
       {id: 125, title: 'Vue.js', isCompleted: false}
      ]
    }
  })
}
```

### 绑定假数据

用v-for 将假数据绑定到li上

如果当前项的isCompleted是true，添加completed这个class，显示选中样式 `:class="{completed: item.isCompleted}"`

```html
<li :class="{completed: item.isCompleted}" v-for="(item,index) in datas">
  <div class="view">
    <input class="toggle" type="checkbox">
    <label>{{ item.title }}</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="Rule the web">
</li>
```

在每一项的复选框上双向绑定isCompleted数据`<input v-model="item.isCompleted" class="toggle" type="checkbox">`

### footer中显示剩余数据条数

```html
<span class="todo-count"><strong>{{ datas.length }}</strong> item left</span>
```

### 输入框回车添加数据

找到输入框`<input class="new-todo" placeholder="What needs to be done?" autofocus>`添加**回车**的事件`@keyup.enter="addItem"`，然后addItem中需要将输入框输入的内容添加到数据datas数组中，所以给input添加`v-model="value"`将输入数据实时同步到model层，如下;

```html
<input class="new-todo" placeholder="What needs to be done?" autofocus @keyup.enter="addItem" v-model="value">
```

在Vue的option中添加methods选项，并定义addItem方法。

```js
methods: {
  // 回车添加数据
  addItem() {}
}
```

在addItem方法中，向datas数组添加object数据

```js
{
  id: 时间戳, //为了保持id的唯一性
  title: 输入框双向绑定的数据value,
  isCompleted: false
}
```

最终代码如下：

```js
addItem() {
  if(this.value){  // value 非空 才会去添加
    this.datas.push({
      id: new Date().getTime(), //为了保持id的唯一性,用时间戳作为id
      title: this.value,
      isCompleted: false
  })
  this.value = '' // 填完数据后 清空输入的内容
  }
}
```

### 显示 clear completed

只有某一项选中，才会显示，没有选中任何项，不会显示
在计算属性中添加isShowClear，isShowClear最终返回boolean，在`<button class="clear-completed" v-show="isShowClear">Clear completed</button>`上通过v-show控制button的显示隐藏

```js
computed: {
  // 是否显示clear completed
  isShowClear() {
    for(let i=0;i<this.datas.length;i++){
      if(this.datas[i].isCompleted){
        return true
      }
    }
    return false
  }
}
```

### 点击clear completed清除选中项

### 点x 删除当前项

### 全选

