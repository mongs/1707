<template>
  <ul>
    <h2>产品列表</h2>
    <li v-for="(product, index) in products" :key="index">
      <h3>{{ product.name }}</h3>
      <button>加入购物车</button>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      products: [
        {
          id: 123111,
          name: '坚果PRO'
        },
        {
          id: 123112,
          name: '小米PRO'
        },
        {
          id: 123113,
          name: '华为PRO'
        },
        {
          id: 123114,
          name: '三星PRO'
        },
        {
          id: 123115,
          name: '苹果PRO'
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>
