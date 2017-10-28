<template>
  <div id="app">
    <product></product>
    <cards></cards>
  </div>
</template>

<script>
import Product from '@/components/Product'
import Cards from '@/components/Cards'
export default {
  name: 'app',
  components: {
    Product,
    Cards
  }
}
</script>

<style>
*{margin: 0;padding: 0;list-style-type: none}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 550px;margin: 60px auto;
}
ul{
  width: 250px;
  min-height: 300px;
  border: 1px solid #ccc;
}
ul:first-child{
  float: left;
}
ul:last-child{
  float: right;
}
li{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}
h3{
  float: left;
}
button{
  float: right;
  margin-top: 15px;
}
h2{
  height: 54px;line-height: 54px;
  text-align: center;background: darkcyan;
  color: #fff;
}
</style>
