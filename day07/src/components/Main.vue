<template>
  <div>
    <ul>
      <li>
        main
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  watch: {
    '$route': (val) => {
      let tableNum = val.params.id
      console.log(tableNum)
    }
  }
}
</script>
<style scoped>

</style>

