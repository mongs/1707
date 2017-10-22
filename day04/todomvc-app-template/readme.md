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