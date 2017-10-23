<template>
  <section>
    <hr>
    <h1>this is the main </h1>
    <button @click="emitMsg" class="btn btn-primary">发射消息</button>
    <hr>
    <button @click="silbingEvent" class="btn btn-primary">Bus发射消息</button>
    <hr>
  </section>
</template>
<script>
  import bus from '@/common/js/bus.js'

  export default {
    methods: {
      emitMsg () {
        console.log('msg has emited')
        this.$emit('sendMsg')
      },
      silbingEvent () {
        bus.$emit('sibling')
      }
    }
  }
</script>
<style scoped>
h1{
  color: darkorange
}
</style>


