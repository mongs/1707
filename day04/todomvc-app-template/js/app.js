{ // 为了形成块级作用域 ()()
	let vm = new Vue({
		el: '#app',
		data: {
			value: '',  // 显式声明 输入框数据
			datas: [
				{id: 123, title: 'HTML5', isCompleted: false},
				{id: 124, title: 'JavaScript', isCompleted: false},
				{id: 125, title: 'Vue.js', isCompleted: true}
			]
		},
		methods: {
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
		},
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
	})
}