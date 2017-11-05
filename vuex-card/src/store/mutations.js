export const GET_PRODUCTS_DATA = (state, data) => {
  state.products = data
}
/*
加入购物车ADD_CARDS
根据传进来的pid  知道操作的是哪条数据currentProduct

在购物车cards 的数据中
这条数据的 num++
这条数据的库存 stock--
isAdded ->  true

find找到的是满足回调函数返回值的  第一项
如果当前遍历项的id与传进来的id相等  就是要操作的对象
 */
export const ADD_CARDS = (state, pid) => {
  let currentProduct = state.products.find(element => element.id === pid)
  currentProduct.num++
  currentProduct.stock--
  // 如果没有加入过购物车
  if(!currentProduct.isAdded){
    currentProduct.isAdded = true
    state.cards.push(currentProduct)
  }
}

// 加
export const PLUS = (state, pid) => {
  let currentProduct = state.cards.find(element => element.id === pid)
  currentProduct.num++
  currentProduct.stock--
}
/*
删除
删除的时候  从cards  中splice 方法  截掉当前项
当前项的  num = 0
stock = num + stock
isAdded = false
*/
export const DELETE_CARDS_PRODUCT = (state, pid) => {
  let currentProduct = state.cards.find(element => element.id === pid)
  let index = state.cards.indexOf(currentProduct)
  currentProduct.stock += currentProduct.num
  currentProduct.num = 0
  currentProduct.isAdded = false
  state.cards.splice(index, 1)
}
