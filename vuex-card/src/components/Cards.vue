<template lang="html">
  <div class="">
    <ul>
      <li v-for="(card, index) in cards" :key="index">
        <input type="checkbox">
        <span class="name">{{ card.name }}</span>
        <span class="price">{{ card.price }}</span>
        <span>
          <button>-</button>
          <input type="number" disabled :value="card.num">
          <button :disabled="card.stock < 1" @click="plus(card.id)">+</button>
        </span>
        <span class="price">{{ card.num*card.price }}</span>
        <button  @click="deleteProduct(card.id)">×</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    cards () {
      return this.$store.getters.cardsProducts
    }
  },
  methods: {
    plus (pid) {
      this.$store.commit('PLUS', pid)
    },
    deleteProduct (pid) {
      console.log(1)
      this.$store.dispatch('deleteCardsProduct', pid)
    }
  }
}
</script>

<style lang="css" scoped>
ul{margin: 0;padding: 0;width: 800px;margin:50px auto}
li{list-style-type: none;height: 70px;line-height: 70px;text-align: left;}
span{
  display: inline-block;
  text-align: center;
}
.name{
  width: 200px;
}
.price{
  width: 100px;
}
</style>
