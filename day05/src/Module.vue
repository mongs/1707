<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ a.name }}</h1>
    <h2>{{ str }}</h2>
    <h2>{{ name() }}</h2>
    <h2>{{ num }}</h2>
    <router-view/>
  </div>
</template>

<script>
import a from '@/common/js/a.js'
import { num as str, fn } from '@/common/js/b.js'

import * as c from '@/common/js/c.js'

export default {
  name: 'app',
  data () {
    return {
      a,
      str,
      name: fn,
      num: c.num
    }
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
