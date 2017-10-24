<template>
  <div class="main">
    <button @click="getData2" class="waves-effect waves-light btn red">userId = 3</button>
    <button @click="postData" class="waves-effect waves-light btn blue">post</button>
    <button @click="getData1" class="waves-effect waves-light btn">Http</button>
    <button @click="getApi" class="waves-effect waves-light btn pink">API</button>
    <div class="container">
      <div class="row">
        <div class="col s12 m4" v-for="(data, index) in datas" :key="index">
          <div class="card-panel teal">
            <h5>{{ data.title }}</h5>
            <span class="white-text">
              {{ data.body }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      datas: []
    }
  },
  mounted () {
    const url = 'http://jsonplaceholder.typicode.com/photos'
    axios({
      method: 'get',
      url: url
    })
    .then(res => {
      console.log(res.data)
    })
  },
  methods: {
    getData1 () {
      const url = 'http://jsonplaceholder.typicode.com/posts?userId=3'
      axios
        .get(url)
        .then(res => {
          this.datas = res.data
        })
        .catch(err => {
          console.log(err)
          throw new Error(err)
        })
    },
    getData2 () {
      const url = 'http://jsonplaceholder.typicode.com/posts'
      axios
        .get(url, {
          // 查询参数 params
          params: {
            userId: 3
          }
        })
        .then(res => {
          this.datas = res.data
        })
        .catch(err => {
          console.log(err)
          throw new Error(err)
        })
    },
    postData () {
      const url = 'http://jsonplaceholder.typicode.com/posts'
      axios
        .post(url, {
          title: '人生苦短, 我用Vue',
          body: 'vuejs is so coll, 吆西!'
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
          throw new Error(err)
        })
    },
    getApi () {
      axios
        .get('/api/users')
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>
<style scoped>

</style>
