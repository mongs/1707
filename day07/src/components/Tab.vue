<template>
  <div>
    <div>
      <router-link class="link" v-for="item in titles" :key="item.tableNum" v-bind:to="'/news/'+item.tableNum">{{ item.title }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      titles: [
        {
          title: '头条',
          tableNum: 1
        },
        {
          title: '娱乐',
          tableNum: 2
        },
        {
          title: '军事',
          tableNum: 3
        },
        {
          title: '汽车',
          tableNum: 4
        },
        {
          title: '财经',
          tableNum: 5
        },
        {
          title: '笑话',
          tableNum: 6
        },
        {
          title: '体育',
          tableNum: 7
        },
        {
          title: '科技',
          tableNum: 8
        }
      ]
    }
  }
}
</script>
<style scoped>
.link {
  padding: 0.5em 1em;
}
</style>

