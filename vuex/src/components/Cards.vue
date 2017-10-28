<template>
  <ul>
    <h2>购物车</h2>
    <li v-for="(product, index) in cards" :key="index">
      <h3>{{ product.name }}</h3>
      <button @click="del(product.id)">删除</button>
    </li>
  </ul>
</template>
<script>
export default {
  computed: {
    cards () {
      return this.$store.getters.cards
    }
  },
  methods: {
    del (pid) {
      this.$store.commit('delete', pid)
    }
  }
}
</script>
<style scoped>

</style>
