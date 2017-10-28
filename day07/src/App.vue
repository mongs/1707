<template>
  <div id="app">
    <tab></tab>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <router-view name="a" />
    <router-view name="b" />
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
.fade-enter-active, .fade-leave-active{
  transition: all 500ms ease-in-out;
}
.fade-enter, .fade-leave-active{
  opacity: 0;
}
</style>
