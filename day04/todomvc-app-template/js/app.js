{ // 为了形成块级作用域 ()()
	let vm = new Vue({
		el: '#app',
		data: {
			value: '',  // 显式声明 输入框数据
			isCheckedAll: false, // 全选
			editingIndex: '',
			keyword: '', // 过滤条件 '' -> all false->active true->completed
			datas: [
				{id: 123, title: 'HTML5', isCompleted: false},
				{id: 124, title: 'JavaScript', isCompleted: false},
				{id: 125, title: 'Vue.js', isCompleted: true}
			]
		},
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
			},
			clearCompleted() {
				let arr = []
				arr = this.datas.filter(element => {
					return !element.isCompleted
				});
				/*
				// 变量datas，如果当前项是未选中，就把它留下
				// 先把未选中项填到arr中， 最后将arr 赋值给 datas
				this.datas.forEach(function(element) {
					if(!element.isCompleted){
						arr.push(element)
					}
				}, this);
				*/
				this.datas = arr  // 所有的未选中项
			},
			removeCurrent(index) {
				this.datas.splice(index, 1)
			},
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
			},
			edit(index) {
				this.editingIndex = index
				/*
				// DOM 操作
				let lists = this.$refs.todoList.children
				for(let i=0;i<lists.length;i++){
					lists[i].classList.remove('editing')
				}
				lists[index].classList.add('editing')
				*/
			}
		},
		computed: {
			// 是否显示clear completed
			isShowClear() {
				return !this.datas.every((element, index) => {
				  return !element.isCompleted
				})
				/*
        for(let i=0;i<this.datas.length;i++){
          if(this.datas[i].isCompleted){
						return true
					}
				}
				return false
				*/
			}
		},
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
	})
}