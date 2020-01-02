import React, { Component } from 'react'


export default class Test extends Component {
    constructor(){
        super()
        this.state={
            msg: 1
        }
    }
    changeStateInfo = () =>{

        //  更改 state 中的数据的第一种方法
        // this.setState = {
        //     msg:'信息2'
        // }

        //  更改 state 中的数据的第二种方法： this.setState() 中的 箭头函数 可接收 两个参数，1：pervState 上一次的 state 值；2： 接受参数 props
        //
        // ***************   setState  方法是 异步的  *********************
        // this.setState( ) 的第二个参数 也可以是一个 箭头函数（修改 state值 的回调函数），所以在这个函数里的  state 值 是更改后的值

        this.setState( (prevState)=>{
            // console.log(typeof prevState.msg)
            return {msg: ++prevState.msg}
        },()=>{
            console.log('最新的  state ', this.state)
        } )
        console.log(' " 增加"  执行完，this.setState 后的 state 值',this.state);
    }
    changeI = () =>{
        //  想根据输入框中的内容，改变  this.state.msg 的值

        const newValue = this.refs.txt.value;
        if (!Number(newValue)) {
            return
        }
        this.setState({
            msg:newValue
        })
        console.log(' "输入框"  执行完，this.setState 后的 state 值',this.state);
    }

    // props 只能接收外面传过来的值，即 使用该组件时传过来的 值
    //  而对于 组件内部，有一个 事件 可以对 某个信息更改，必须是 state 中的值
    //  

    render() {
        return (
            <div>
                {/* 这里的 onClick  */}
                {this.state.msg}
                <input type="text" ref={this.state.msg}  ref='txt'  value={this.state.msg}  onChange={ this.changeI} />  
                <button onClick={this.changeI}>确认</button>
                <button onClick={this.changeStateInfo}> 增加</button>   
            </div>
        )
    }
}
