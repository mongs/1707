<template>
  <div>
    <!-- 只能有一个根节点 -->
    <h1>测试一下组件吧</h1>
    <input type="text" v-model="value">
    <v-header v-bind:str="value"></v-header>
    <v-main v-on:sendMsg="say">
      <p slot="first" class="lead">我是被插入的内容</p>
      <a href="" slot="second">link</a>
    </v-main>
    <v-footer></v-footer>
  </div> 
</template>
<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import Main from '@/components/Main'

  export default {
    data () {
      return {
        value: ''
      }
    },
    methods: {
      say () {
        // alert('hello')
        this.value = 'changging'
      }
    },
    components: {
      'v-header': Header,
      'v-footer': Footer,
      'v-main': Main
    }
  }
</script>
<style scoped>
h1{
  color: darkblue
}
</style>
