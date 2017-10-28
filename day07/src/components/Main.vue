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
  created () {
    console.log(this.$route.params.id)
  }
}
</script>
<style scoped>

</style>

