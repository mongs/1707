<template>
  <div>
    <a href="#/" class="btn blue">HelloWorld</a>
    <a href="#/search" class="btn blue">Search</a>
    <a href="#/main" class="btn blue">Main</a>
    <hr>
    <router-link to="/" tag="button" class="btn flat">HelloWorld</router-link>
    <router-link to="/search" class="btn flat">Search</router-link>
    <router-link to="/main" class="btn flat">Main</router-link>
    <hr>
    <router-link v-bind:to="router.route" tag="button" class="btn flat" v-for="router in routers" :key="router">{{ router.text }}</router-link>
    <hr>

    <router-link to="/main/123" tag="button" class="btn flat">123</router-link>
    <router-link to="/main/虾米" class="btn flat">虾米</router-link>
    <router-link to="/main/螃蟹" class="btn flat">螃蟹</router-link>

    <hr>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routers: [
        {
          text: 'HelloWorld',
          route: '/'
        },
        {
          text: 'Search',
          route: '/search'
        },
        {
          text: 'Main',
          route: '/main'
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>

