
import React, { Component , createContext } from 'react'
import {render} from 'react-dom' 
import ReactDOM from 'react-dom';
import classNames from 'classnames';




const {
    Provider,   // 这是一个组件
    Consumer: CounterConsumer
} = createContext()

class CountProvider  extends Component {
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

 class Counter extends Component {
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

class CountBtn extends Component {
    render() {
        return (
            <CounterConsumer>
                {
                    ({incrementCount, decrementCount} ) => {
                        const handle = this.props.type === 'incr' ? incrementCount : decrementCount
                        return  <button onClick={ handle} > {this.props.children} </button>
                    }
                }
            </CounterConsumer>
        )
    }
}

class App extends Component {
    render(){
        return(
            <>
                <CountBtn type='incr'> + </CountBtn>
                    <Counter>

                    </Counter>
                <CountBtn type='derc'> - </CountBtn>
            </>
        )
    }
}

render( 
    //  CountProvider 组件用以提供数据（通过 Consumer 共享  CounterProvider 中的数据）
    <CountProvider>  
        <App/>
    </CountProvider>
,document.getElementById('root'))




//  如果想要 全局的扩展  React.Component 的 prototype， 比如  想把  ajax 的方法全局挂载组件的  this 上，就可以使下面的方式

//  1.  引入所有的  ajax 的请求
//  import * as services from './services'
//  2.  在 prototype 上挂载一个 http 的东西，然后就可以在组件内部 通过  this.http  的方法名，执行 ajax 请求
//  React.Component.ptototype.http = services


// ************   请记住  下面的方法： 
//              new 一个 App 的实例 app；
//              app 具有 App 组件的所拥有的方法
//              app 可以接受参数，且参数值 都存与  props 属性中
// const app = new App({
//     msg: 'infoinfo'
// });
// const renderApp = app.render();
// ReactDOM.render( renderApp, document.getElementById('root'))

// 因为 app 只是一个实例对象，而并非是一个  元素，所以需要使用 render 方法转换出实例
// 也可直接：************   建议如此写
// const app = new App({
//     msg: 'infoinfo'
// }).render();


// ReactDOM.render( ), 第一个参数： 是个元素 或 虚拟元素； 第二个参数： 是个页面上的 节点（且该节点是存在的）

