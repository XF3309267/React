import React, { Component } from 'react'

import {increment,decrement} from '../../actions/cart'

import {connect} from 'react-redux'

class CartList extends Component {
  
    render() {
        // console.log(this.props)
        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            商品名称
                        </th>
                        <th>
                            价格
                        </th>
                        <th>
                            数量
                        </th>
                        <th>
                             操作
                        </th>

                    </tr>
                </thead>
                <tbody>
                  {
                      this.props.cartList.map( (item) => {
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
                                            this.props.decrement({id:item.id,step:10}) 
                                        }
                                    }> - </button>
                                    <span> {item.amount} </span>
                                    <button onClick={
                                         () =>{
                                            this.props.increment(item.id,10) 
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
const mapStateToProps = (state)=>{    //   这里的  state  就是 store.getState() 的值
    // console.log(state)
    // console.log(state.cart)

    return {    // 在这个方法 return 的 对象会存于  this.props  中
        cartList: state.cart,
    }}              



// export default  connect( mapStateToProps )(CartList)    
// mapStateToProps 只是个方法名 可以 更改

// const mapDispatchToProps = dispatch =>{     // 然后，上述 触发事件，就可以直接用 this.props.add(item.id)
//     return {
//         add: (id) => {  dispatch( increment(id)) },
//         reduce: (id) => {  dispatch(decrement(id))}
//     }
// }
// export default  connect( mapStateToProps, mapDispatchToProps)(CartList)   

//  对于  action 的简化使用，也可以如下
// 虽然没有 传  dispatch(increment(id)),但是 在执行这些方法的时候，他会自动放入 dispatch() 执行一遍
// export default  connect( mapStateToProps, {increment,decrement})(CartList)   
// 和下面叙述的是等价的
// const mapDispatchToProps = dispatch =>{    
//     return {
//         increment: (id) => {  dispatch( increment(id)) },
//         decrement: (id) => {  dispatch(decrement(id))}
//     }
// }

// export const  increment = (id,step)=>{
//     return {
//         type: actionType.CART_ITEM_INCREMENT,
//         payload:{
//             id,
//             step
//         }
//     }
// }
// connect() 第二个参数用以返回 action 对象，这其中存有各种 action