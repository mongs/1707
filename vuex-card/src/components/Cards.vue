<template lang="html">
  <div class="">
    <ul>
      <li>
        <input type="checkbox">
        <span class="name">产品名称</span>
        <span class="price">单价</span>
        <span>
          <button>-</button>
          <input type="number" disabled>
          <button>+</button>
        </span>
        <span class="price">总价</span>
        <button>×</button>
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
