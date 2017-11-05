<template>
  <div class="hello">
    <h2>Products List</h2>
    <ul>
      <li v-for="(product, index) in products" :key="product.id">
        <a>
          <img :src="product.pic" :alt="product.name">
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
          <button :disabled="product.stock<1" @click="addCard(product.id)">加入购物车</button>
          <button>立即购买</button>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  /*
  通过计算属性去拿store里的数据
   */
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    addCard (pid) {
      this.$store.commit('ADD_CARDS', pid)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
