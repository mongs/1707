{ // 为了形成块级作用域 ()()
	let vm = new Vue({
		el: '#app',
		data: {
			datas: [
				{id: 123, title: 'HTML5', isCompleted: false},
				{id: 124, title: 'JavaScript', isCompleted: false},
				{id: 125, title: 'Vue.js', isCompleted: true}
			]
		}
	})
}