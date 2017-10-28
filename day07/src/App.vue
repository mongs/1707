<template>
  <div id="app">
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import Tab from '@/components/Tab'
export default {
  name: 'app',
  components: {
    Tab
  }
}
</script>

<style>

</style>
