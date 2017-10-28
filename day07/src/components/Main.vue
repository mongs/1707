<template>
  <div>
    <router-view></router-view>
    <p v-show="!flag">加载中...</p>
    <ul>
      <li v-for="(item, index) in news" :key="index">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import { jsonp } from '@/common/js/jsonp'
import { BASE_URL, OPTIONS } from '@/common/js/config'
export default {
  data () {
    return {
      news: [],
      flag: true
    }
  },
  mounted () {
    const DATA = {
      tableNum: 1
    }
    jsonp(BASE_URL, DATA, OPTIONS)
      .then(res => {
        this.news = res.data
      })
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(to, from, 1)
    next()
  },
  beforeRouteUpdate: (to, from, next) => {
    console.log(to, from, 2)
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log(to, from, 3)
    next()
  },
  watch: {
    '$route': function (val) {
      this.flag = false
      let tableNum = val.params.id
      const DATA = {
        tableNum: tableNum
      }
      jsonp(BASE_URL, DATA, OPTIONS)
        .then(res => {
          this.news = res.data
          this.flag = true
        })
    }
  }
}
</script>
<style scoped>

</style>

