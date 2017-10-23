<template>
  <footer>
    This is Footer
    <button class="btn btn-sm btn-warning" @click="listen">监听</button>
  </footer>
</template>
<script>
  import bus from '@/common/js/bus.js'

  export default {
    methods: {
      listen () {
        bus.$on('sibling', () => {
          alert('接受到了，哈哈哈')
        })
      }
    }
  }
</script>
<style>
footer{
  height: 50px;line-height: 50px;
  text-align: center;
  background: darkmagenta;
  color: #fff;
}
</style>
