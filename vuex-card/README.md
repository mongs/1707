# vuex-card

> A Vue.js project

## vuex

+ store:
  中央状态管理的部门
+ state:
  中央数据中心
  
+ getters:
  可以对state进行处理(过滤),用来获取state中某种状态的数据

+ mutations
  直接操作state, 可以在组件中通过commit触发mutations, 放的都是同步的操作

+ actions
  放的是异步的操作(backend API/ajax),通过actions来commit   mutations  进而操作state
  在组件中可以通过dispatch触发actions

+ module
  单项目足够复杂时,可以将一个模块的state,actions,mutations及getters放到一个module中,方便管理
