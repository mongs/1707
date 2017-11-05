/*
用来处理异步操作的
api
axios

组件dispatch actions
actions请求api拿到数据
再commit mutations
mutations 再去修改 state
 */
import axios from 'axios'
export const getProductsData = (context) => {
  axios
    .get('/api')
    .then(res => {
      context.commit('GET_PRODUCTS_DATA', res.data.data)
      // context.state.products = res.data.data
    })
    .catch(err => {
      console.log(err)
      throw new Error(err)
    })
}
