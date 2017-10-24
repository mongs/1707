<template>
  <div id="app">
    <v-main></v-main>
  </div>
</template>

<script>
import main from '@/components/Main'

export default {
  name: 'app',
  components: {
    'v-main': main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
