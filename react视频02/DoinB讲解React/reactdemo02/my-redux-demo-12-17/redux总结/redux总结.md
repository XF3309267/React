## redux  自我总结

1. **第一步**

   -   使用命令：  ` npm install --save redux`   安装 **redux**

2. **第二步**

   -   建立一些文件夹  ，如下
   -   <img src="C:\Users\13433\Desktop\react视频02\DoinB讲解React\reactdemo02\my-redux-demo\redux总结\01.png" style="zoom: 25%;" />

3. 对于上图各个文件，进行解析：

   1.  **resucers 文件夹下**

       - cart.js

       - ```jsx
         import actionType from '../actions/actionType'
         
         // 初始化的数据
         const initState =   [{
             id:1,
             title: 'Apple',
             price: 888.5,
             amount:10,
         },{
             id:2,
             title: 'Orange',
             price: 666.5,
             amount:15,
         }
         ]
         
         /*
         	向外暴露 一个 reducer（ 一个方法，如下面的箭头函数）
         	且必须有  state ， action 两个 参数
         	state： 该state是存于 createStore() 方法 中的，
         	action： 下面的方法会在 dispathc(action) 中被调用，传递了 action
         	
         又因为dispatch() 在 createStore() 中被创建，所以下面的reducer中的state来自createStore 
         > 	其实也不算 “来自”，因为原始数据是在 reducer 中自己初始化的，
         >	而 createStore 中的 state 只是接收存储 reducer 修改后的 state 数据
         
         >	createStore 中的 state 起初为空，所以reducer第一次执行时，拿到的是 null 的state
         >	所以 reducer 要对数据进行  (state = initState,action)  这般的初始化
         <---  	且 createStore() 方法中 会 dispatch({}) 一次，
         <---	这样 reducer 就有了 初始的数据，createStore 中的 state 也有了值
         <---    store.getState() 也能获得值
         
         
         	注意： action 是一个对象 (如下)
         	
         	{
         		type:'CART_ITEM_INCREMENT'，
         		payload:{					
         			id,
         			step,
         		}
         	}
         	
         	
         */
         export default (state = initState,action) =>{
             // console.log(action)
             switch(action.type){
                 case actionType.CART_ITEM_INCREMENT:
                     return state.map(item => {
                         if(item.id === action.payload.id){
                             item.amount += action.payload.step
                         }
                         return item
                     })
                     
                 case actionType.CART_ITEM_DECREMENT:
                     return state.map(item => {
                         if(item.id === action.payload.id){
                   item.amount -= action.payload.step
                         }
                         return item
                     })
                     
                 default:
                     return state
             }
         
         
         }
         ```
         
       - index.js
       
       - ```jsx
         
         // 该 index.js  文件的作用：
         //  reducers 文件夹下 有多个 reducer，所以需要 reducers 下的 index 文件进行总的  引入 	并导出
         
         //  （ 下列是在  store.js  文件下 ）
         // *************************************************
         //  引入 reducer  并创建出 store  
         // import { createStore } from 'redux'				
         // import rootReducer from './reducers'				
         // export default createStore(rootReducer)			
         //****************************************************
         
         // export default createStore(rootReducer)   返回一个 store 
         // store 有
         
         // store.getState() 返回一个对象，属性名为 reduce名，值为各个 reducer存储在  
         //	createStore 中的 state  值
         
         
         // store.dispatch()  例如:触发事件 就可调用 dispatch()
         // 接收一个 action 对象 {type:..., payload:{id... }  } 的形式
         
         // 虽然 dispatch()方法只接收一个  对象作为参数，且对象中要有 type 、payload 属性
         // 可以 在 dispatch() 中调用一个方法，该方法接收 其他参数存于payload，	
         //		然后返回一个 action对象
         // 而对于 type 属性中的值，事先在方法中定义好即可
         // *****  这个方法 最好 在 actions 文件下，与 action.js 平级
         //	因为这个方法 其实就是一个 加工 action 的方法
         
         // store.subscribe()
         //	接收  需要 放入dispatch() 中的方法名
         //  subscribe() 会将该 所传入的参数方法存入 createStore() 中的 listeners 数组中
         //  listeners 一般存放 数据的渲染方法（即从 getState 中获得数据，并渲染至页面，必然
         //	  渲染方法，有方法就要有数据（从 getState() 获取存在 组件 state 上）
         //	  组件上有： 渲染方法 ，数据表现模式， 更改数据的方法(dispatch())，
         //	    渲染：从自身组件的 this.state 取数据显示
         //		componentDidMount(){} 在该方法中,调用渲染方法，并使用subscribe存进listeneres
         //  	dispatch() 执行时，会将 listeners 中的方法 都 一一 执行一遍，
         //  这样就是实现，每改一次数据就渲染一次数据
         
         
         import { combineReducers } from  'redux'
         
         import cart from './cart'
         
         /*
         	解释 combineReducers 的作用
       	reducers 下的 index.js 文件就是 用来总结 reducer 并向外暴露的
         	可是 别人要的是一个方法 ， 而且是 reduce 方法，
         	普通的 export default { cart1，cart2  } ， 返回的是一个对象
         	所以 下面的 combineReducers 可以将多个 reducer的方法 返回
         	而且接收者 也能接收 reducer 方法
         	
         */
         
         
         export default combineReducers({
             cart
         })
         ```
         
       
   2.  **store.js**

       - ```jsx
         import { createStore } from 'redux'
         
         import rootReducer from './reducers'
         
         export default createStore(rootReducer) // 返回一个store
         
         ```

   3.  **actions 文件夹下**    用以创建  action

       - 第一步： 创建 actionType，定义 type

         - ```jsx
           export default {  // actionType.js
               CART_ITEM_INCREMENT: 'CART_ITEM_INCREMENT',
               CART_ITEM_DECREMENT: 'CART_ITEM_DECREMENT'
           }
           ```

       - 第二步： 创建 action

         - ```jsx
           import actionType from './actionType'  
           // cart.js  (名字对应  reducer 的名字)
           
           export const  increment = (id,step)=>{
           	// 要求 action 是一个对象
               // 这样用一个方法 包起来  就可以传参，为 action 添加数据
               // 而在 使用到 action 时 （dispatch(action)），直接执行这个函数就可以了
               // 因为 会返回一个 action 
               return {
                   type: actionType.CART_ITEM_INCREMENT,
                   payload:{
                       id,
                       step
                   }
               }
           }
           
           export const  decrement = (obj)=>{
           
               return {
                   type: actionType.CART_ITEM_DECREMENT,
                   payload:{
                      ...obj
                   }
               }
           }
           
           ```

           

   4.  **components**

       - **/CartList/index.js**

       - ```jsx
         import React, { Component } from 'react'
         
         import {increment,decrement} from '../../actions/cart'
         
         export default class CartList extends Component {
         
             constructor(){
                 super()
                 this.state = {
                     cartList : []
                 }
                
             }
         
             getState = () =>{
                 this.setState({
                     cartList: this.props.store.getState().cart
                 })
             }
         
             componentDidMount(){
                 this.getState()
                 this.props.store.subscribe(this.getState)
             }
         
             render() {
                 return (
                     <table>
                         <thead>
                             <tr>
                                 <th>id</th>
                                 <th>商品名称</th>
                                 <th>价格</th>
                                 <th>数量</th>
                                 <th>操作</th>
                             </tr>
                         </thead>
                         <tbody>
                           {
                                 // 利用 map 渲染 this.state.cartList 数据
                               this.state.cartList.map( (item) => {
                                 return(
                                     <tr key={item.id}>
                                         <td>
                                             {item.id}
                                         </td>
                                         <td>
                                             {item.title}
                                         </td>
                                         <td>
                                             {item.price}
                                         </td>
                                        
                                         <td>
                                             <button onClick={
                                                  () =>{
                      	// 点击事件上 绑定 dispatch()
                     	//  这里的 store 是 外面 传进来的
                        	// 当然可以直接在这里面 引入 store 并使用
                        	//	因为  store 只有一个，在 store.js 文件中，且向外暴露了
                                                     this.props.store.dispatch( decrement({id:item.id,step:10}) )                                 
                                                 }
                                             }> - </button>
                                             <span> {item.amount} </span>
                                             <button onClick={
                                                  () =>{
                                                     this.props.store.dispatch( increment(item.id,10) )
                                                 }
                                             }> + </button>
                                         </td>
                                     </tr>
                                 )
                               })
                           }
                         </tbody>
                     </table>
                 )
             }
         }
         
         ```

       - **index.js**

       - ```jsx
         export {default as CartList} from './CartList'
         // 总结 components 中的所有组件，并向外暴露
         ```

   5.  **App.js**

       - ```jsx
         import React, { Component } from 'react'
         
         import {CartList} from './components'
         
         export default class App extends Component {
           render() {
             return (
               <div>
                 <CartList store =  {this.props.store}/>
               </div>
             )
           }
         }
         
         ```

   6.  **index.js**

       - ```jsx
         import React from 'react';
         import ReactDOM from 'react-dom';
         // import './index.css';
         import App from './App';
         import store from './store'
         // import * as serviceWorker from './serviceWorker';
         
         window.store = store
         console.log(store)
         
         ReactDOM.render(<App store={store} />, document.getElementById('root'));
         ```

         