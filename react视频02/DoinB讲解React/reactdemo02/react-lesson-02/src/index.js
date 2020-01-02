
import React from 'react'
import {render} from 'react-dom' 

import {CountProvider} from './Components'

import App from './App.js'

 





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

