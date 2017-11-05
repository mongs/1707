<template lang="html">
  <div class="">
    <router-link v-for="(link, index) in links" :to="link.url" :key="index"> {{ link.text }} </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          url: '/',
          text: 'products-list'
        },
        {
          url: '/cards',
          text: 'cards'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
