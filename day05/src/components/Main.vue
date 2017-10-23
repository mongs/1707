<template>
  <section>
    <slot name="first"></slot>
    <hr>
    <h1>this is the main </h1>
    <button @click="emitMsg" class="btn btn-primary">发射消息</button>
    <hr>
    <slot name="second"></slot>  
    <button @click="silbingEvent" class="btn btn-primary">Bus发射消息</button>
    <hr>
    <button class="btn btn-seccess" @click="flag = !flag">show/hide</button>
    <br>
    <transition name="fade">
      <div class="box" v-show="flag"></div> 
    </transition>
    <transition name="slide">
      <div class="box" v-show="flag"></div> 
    </transition>
    <hr>
    <!-- 动态绑定组件 -->
    <button v-on:click="toggleComponent" class="btn btn-primary">切换</button>
    <transition name="slide">
      <div :is="currentView"></div>
    </transition>

  </section>
</template>
<script>
  import bus from '@/common/js/bus.js'
  import Slide from '@/components/Slide'
  import List from '@/components/List'

  export default {
    data () {
      return {
        flag: true,
        currentView: Slide
      }
    },
    methods: {
      toggleComponent () {
        if (this.currentView === Slide) {
          this.currentView = List
        } else {
          this.currentView = Slide
        }
      },
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
.box{
  width: 200px;height: 200px;
  background: darkorchid;
}
.fade-enter-active, .fade-leave-active{
  transition: all 500ms ease-in;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-enter-active, .slide-leave-active{
  transition: all 500ms ease-in;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translate3d(-500px,0,0);
}
</style>


