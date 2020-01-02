import React, { Component } from 'react'
import PropTypes from 'prop-types'; // 用以检测  传至该组件的 参数，是否存在、是否为 string类型，是否为 number类型 ..

// npm install classnames --save  指令引入的 classnames 组件
import classNames from 'classnames'

import{
    TodoHeader,
    TodoInput,
    TodoList,
} from './components'


export default class App extends Component {
    static propTypes = {        // 用以约束参数类型，对于不符合的类型 发出警告
            msg:PropTypes.string,        
            x: PropTypes.number,                   
            y:PropTypes.number,
    }
    static defaultProps = {     // 对参数设置 默认值
        msg:' App组件中  默认的内容',
        x:1,
        y:2,
    }
    constructor (){ 
        super()
        this.state= {
            dsrc:'这是 传入  TodoHeader 的内容'
        }
    }
    render() {
        return (
            <div style={{backgroundColor:'#CCC',border:'2px solid black' }}>
                {/* ##############  此处用到了 classnames 组件  (可自行在 npm 搜索 classnames)      ######################### */}
                最外层盒子
            <div  style={{backgroundColor:'#C1C',border:'2px solid red' }} className={ classNames({a:true,b:false,}) }>
                <h3>
                     App  Component
                </h3> 
                <p style={{color:'white'}}>
                    {/*  
                        这里的两层 花括号；
                        最外层花括号表示：  里面是一个  js 语法的内容
                        内层花括号表示：    该花括号包着的是一个对象
                        且属性值,需要用  引号括起来
                     */}    
                    {this.props.msg}
                </p>
                <p>
                    {this.props.x} + {this.props.y} ={this.props.x+this.props.y}
                </p>
            </div>
            <TodoHeader info={this.state.dsrc}></TodoHeader>
            <TodoInput>
                <br/>
                    TodoInput 组件标签中的内容(在 APP 组件中使用了)
            </TodoInput>
            <TodoList></TodoList>
            </div>
        )
    }
}


