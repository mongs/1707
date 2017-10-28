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
import { jsonp } from '@/common/js/jsonp'
export default {
  watch: {
    '$route': (val) => {
      let tableNum = val.params.id
      const BASE_URL = 'http://api.dagoogle.cn/news/get-news'
      const DATA = {
        tableNum: tableNum
      }
      const OPTIONS = {
        param: 'callback'
      }
      jsonp(BASE_URL, DATA, OPTIONS)
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>
<style scoped>

</style>

