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

遍历datas, 如果当前项的isCompleted是false，将其填入到arr空数组中，最后将arr 赋值 给datas，datas中就只剩下未选中项

```html
<button class="clear-completed" v-show="isShowClear" @click="clearCompleted">Clear completed</button>
```

```js
clearCompleted() {
  let arr = []
  // 变量datas，如果当前项是未选中，就把它留下
  // 先把未选中项填到arr中， 最后将arr 赋值给 datas
  this.datas.forEach(function(element) {
    if(!element.isCompleted){
      arr.push(element)
    }
  }, this);
  this.datas = arr  // 所有的未选中项
}
```

### 点x 删除当前项

```html
<button class="destroy" @click="removeCurrent(index)"></button>
```

```js
removeCurrent(index) {
  this.datas.splice(index, 1)
}
```

### 全选

data添加数据`isCheckedAll:false`，给全选按钮双向绑定isCheckedAll，添加点击事件

```html
<input id="toggle-all" class="toggle-all" type="checkbox" @click="checkedAll" v-model="isCheckedAll">
```

```js
checkedAll() {
  if(this.isCheckedAll){ //全部选中
    this.datas.forEach(element => {
      element.isCompleted = false
    })
  }else{
    this.datas.forEach(element => {
      element.isCompleted = true
    })
  }
}
```

### 如果某一项是未选中状态，全选按钮未非激活状态

深度监听datas数据的变化，如果某一项是非选中状态，数据`isCheckedAll = false`，只有**全部**为选中状态`isCheckedAll = true`

```js
watch: {
  datas: { // 深度监听
    handler: function(val){
      for(let i=0;i<val.length;i++) {
        if(!val[i].isCompleted) {
          this.isCheckedAll = false
          return
        }
      }
      this.isCheckedAll = true
    },
    deep: true
  }
}
```

### 双击编辑

双击元素时给元素添加editing这个class就会显示为编辑状态

#### 思路一：DOM操作

给li添加双击事件`<li :class="{completed: item.isCompleted}" v-for="(item,index) in datas" @dblclick="edit(index)">`

```js
edit(index) {
  // DOM 操作
  let lists = this.$refs.todoList.children
  for(let i=0;i<lists.length;i++){
    lists[i].classList.remove('editing')
  }
  lists[index].classList.add('editing')
}
```

给ul添加ref属性`<ul class="todo-list" ref="todoList">`

#### 思路二： 定义一个数据`editingIndex=''`，通过绑定class时的判断条件，添加editing的class

双击当前元素时，使editingIndex=传进去的索引值，绑定class时判断，如果editingIndex=当前项索引就添加editing的class

```html
<li :class="{completed: item.isCompleted,editing: editingIndex === index}" v-for="(item,index) in datas" @dblclick="edit(index)">
```

```js
edit(index) {
  this.editingIndex = index
}
```

双击显示的输入框要显示当前项的title数据，并可以修改当前项的title，所以双向绑定

```html
<input class="edit" v-model="item.title">
```

### 回车去除编辑样式

在编辑输入框上回车时，要去除编辑样式（也就是移除editing的class），使`editingIndex=''`即可

```html
<input class="edit" v-model="item.title" @keyup.enter="editingIndex=''">
```

### 通过路由 切换内容显示

控制内容显示要通过过滤器的filterBy，`v-for="(item,index) in filterBy(datas, keyword)"`，keyword是过滤条件，分三种状态：

+ all -> keyword=''
+ active -> keyword='false'
+ completed -> keyword='true'

```html
<li :class="{completed: item.isCompleted,editing: editingIndex === index}" v-for="(item,index) in filterBy(datas, keyword)" @dblclick="edit(index)">
```

根据不同的hash改变keyword的值

```js
mounted () {
  window.onhashchange = () => {
    let hash = location.hash
    // 根据不同的hash  使用不同的过滤条件
    switch (hash) {
      case '#/active':
        this.keyword = 'false'
        break;
      case '#/completed':
        this.keyword = 'true'
        break;
      default:
        this.keyword = ''
        break;
    }
  }
}
```

### 控制按钮的选中样式

通过keyword的值，决定是否给当前元素绑定selected的class

```html
<a :class="{selected: keyword===''}" href="#/">All</a>
<a :class="{selected: keyword==='false'}" href="#/active">Active</a>
<a :class="{selected: keyword==='true'}" href="#/completed">Completed</a>
```