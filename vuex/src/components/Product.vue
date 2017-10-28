<template>
  <ul>
    <h2>产品列表</h2>
    <li v-for="(product, index) in products" :key="index">
      <h3>{{ product.name }}</h3>
      <button @click="add(product.id)">加入购物车</button>
    </li>
  </ul>
</template>
<script>
export default {
  computed: {
    products () {
      return this.$store.getters.products
    }
  },
  methods: {
    add (pid) {
      this.$store.commit('add', pid)
    }
  }
}
</script>
<style scoped>

</style>
