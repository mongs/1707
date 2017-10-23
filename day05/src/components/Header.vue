<template>
  <header>
    This is the {{ str }} component
  </header>
</template>
<script>
  export default {
    props: ['str']
  }
</script>
<style>
header{
  text-align: center;
  height: 44px;line-height: 44px;
  background-color: darkcyan;
  color: #fff;
}
</style>
