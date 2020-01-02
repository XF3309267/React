import React, { Component ,  } from 'react'
import {CounterConsumer} from '../ContextStroe'
 
export default class Counter extends Component {
    render() {
        return (
            //  CounterConsumer 组件用以接收  Provider 中的数据， 子元素必须是一个函数
        <CounterConsumer>    
            {
                ({count}) =>{  // CounterConsumer 接收的 参数 应于  Provider 的一样
                    console.log(count)
                    return  <span> {count} </span>
                }
            }
        </CounterConsumer>

        // <span> {10}</span>
        )
    }
}