import React, { Component , createContext } from 'react'
import {render} from 'react-dom' 


const {
    Provider,   // 这是一个组件
    Consumer: CounterConsumer
} = createContext()

class CountProvider  extends Component {

    // 对 Provider 的解释
    // region
    // ***********************************************************************
    //  CountProvider  提供状态的组件
    //  且改组一定要在 render(){  return() } 的 return 中 包含 {this.props.children}
    //  因为之后  会用该组件 包含  “ 一个较大的组件 ”
    //      （ 在此之前 父组件 向 后代组件 传递数据，都是通过 props 参数传递，利用了 Context 就不一样了     ）
    //
    //   context 的 本质：
        // const {
        //     Provider,   // 这是一个组件
        //     Consumer: CounterConsumer            //  将 Consumer  更改名 为  CounterConsumer
        // } = createContext()
    //  createContext()  利用上述方式 创建出一个对象，  （ Provider 、 Consumer 名字不能更改，如果要更改， ）
    //   Provider  是组件，且该组件 自带一个 value 属性，接收一个 对象
    //  #########  如：
    // <Provider value={{                        //可以看到 value 中数据 都来自  this.state 中的数据（有属性，有修改属性的方法）
    //     count: this.state.count,              //所以， Provider 该组件，应该被 一个 组件（假如名字为 CountProvider ）包着
    //     incrementCount: this.incrementCount,  //  且 只有 Provider 组件 的后代组件，才可以访问到  value 中的数据
    //     decrementCount: this.decrementCount,  
    //     }}> 
    // 
    //     ！!!!!   注意 此处的 {this.props.children}，Provider 组件要包含其他组件，其他组件才可以使用它的数据
    //      @@@   因为 以往都是 父组件，以及其后代组件 都是 有名字 可以直接用的
    //      @@@   在 ，Provider 组件中，不知道后代组件名，但是有必须包含其他组件，所以 使用 {this.props.children}
    // 
    //     {this.props.children}
    // </Provider>
    // *****************************************************************
    //  end


    /*

        CounterConsumer

        CounterConsumer 组件只接收函数，但只要函数中的 参数名 与 Provider 组件中的 value 中键名相等，就可以接收 value 中的数据
        
        一般子组件 通过 获得父级组件 传过来的数据 或 方法，来进行操作
        有了 context 
        子组件 在 return 时，只需要 返回的时候 总的是被  CounterConsumer 标签包起来
        CounterConsumer 因为只接收函数，故需要 在方法中返回 其需要的组件 或标签

        问：“Provider后代组件 如何获取 value 中的数据 ”
        region1 end
     */


    constructor(){
        super()
        this.state ={
            count: 100
        }
    }
    incrementCount = ()=>{
        this.setState({
            count: this.state.count +1
        })
    }
    decrementCount = ()=>{
        this.setState({
            count: this.state.count - 1
        })
    }

    render(){
        return( 
            <Provider value={{
                count: this.state.count,
                incrementCount: this.incrementCount,
                decrementCount: this.decrementCount,
                }}> 
                {this.props.children}
            </Provider>
            )
    }
}
export {
    CountProvider,
    CounterConsumer
}