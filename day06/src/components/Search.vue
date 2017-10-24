<template>
<div class="container">
  <input type="text" @keyup="search" v-model="keyword">
  <ul>
    <li v-for="(subject, index) in subjects" :key="index">
      {{ index }} - {{ subject }}
    </li>
  </ul>
</div>  
</template>
<script>
import { jsonp } from '@/common/js/jsonp'

export default {
  data () {
    return {
      keyword: '',
      subjects: []
    }
  },
  methods: {
    search () {
      let url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su'
      let data = {
        wd: this.keyword
      }
      let options = {
        param: 'cb'
      }
      jsonp(url, data, options)
        .then(res => {
          console.log(res)
          this.subjects = res.s
        })
        .catch(err => {
          console.log(err)
          throw new Error(err)
        })
    }
  }
}
</script>
<style scoped>

</style>

