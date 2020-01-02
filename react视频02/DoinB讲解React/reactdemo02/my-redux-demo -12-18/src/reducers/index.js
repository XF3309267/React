
// 该 index.js  文件的作用：
//  reducers 文件夹下 有多个 reducer，所以需要 reducers 下的 index 文件进行总的  引入 并导出

//  》》》》》》》  在 store 引入 reducer  并创建出 store  （ 下列是在  store.js  文件下 ）
// import { createStore } from 'redux'
// import rootReducer from './reducers'
// export default createStore(rootReducer)

import { combineReducers } from  'redux'

import cart from './cart'

export default combineReducers({
    cart
})