<template>
  <div id="app">
    <search></search>
    <v-main></v-main>
  </div>
</template>

<script>
import main from '@/components/Main'
import Search from '@/components/Search'

export default {
  name: 'app',
  components: {
    'v-main': main,
    Search
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
