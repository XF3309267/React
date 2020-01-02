import React, { Component,createRef } from 'react'     
// createRef 用以创建一个  ref，通过 ref 的值来获取组件 或 DOM 元素
//  上面也说了， createRef 使用来 创建  ref的，但使用 ref 时，可以直接在 在 标签中 添加 ref，如：<input type="text" ref='myInput'   />
//  ####  如何使用: createRef 
//                  在 constructor 中创建一个 ref，如： this.inputDom = createRef()
//      使用：      <input type="text" ref={this.inputDom}   />
//      获取        this.inputDom.current  (这就获取到了  一个元素，使用  ref 的属性值)       

export default class TodoInput extends Component {
    constructor(){
        super()
        this.state ={
            inputValue:"XXX"
        }
        this.inputDom =createRef()
    }

    // region
    //  handleAddClick  这个方法, 不能直接输出 this.state,应该是 this 指向的问题
    //  但可以在 constructor 中绑定一下 this:  this.handleAddClick = this.handleAddClick.bind(this)  
    //      因为  constructor 只执行一次，所以 this.handleAddClick 只会 bind 一次

    //      或者如： onClick = {  this.handleAddClick.bind(this) }; 
    //      缺点：每次都会 bind 一下    优点：可进行对事件方法 传参，如 onClick = {  this.handleAddClick.bind(this，123) }
    //    ##########   对于传参 改变数据；
    //          1： 是上述的这种
    //          2： 父组件 将更改父组件数据的方法   利用 props 方式 传递给 子组件，子组件 获得方法传入参数改变数据
    //  end

    handleinputChange = (e)=>{
        // console.log(this)
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    handleKeyUp = (e) =>{
        // console.log('回车')
        if(e.keyCode === 13){
            this.handleAddClick();
        }
    }

    handleAddClick =  () =>{
        if(this.state.inputValue === ''){
            return 
        }
       this.props.addTodo(this.state.inputValue)
       this.setState({
           inputValue: ''
       }, () => {
        this.inputDom.current.focus()
       })
      
    }
    //  绑定事件 中的方法不能直接放置 函数（包括 匿名函数  箭头函数）,  

    render() {
        return (
            <div style={{ backgroundColor:'yellow'}}>
                这是  TodoInput 插件
                {this.props.children}

                <input 
                    ref={this.inputDom
                    
                    }
                    type="text"
                    value={this.state.inputValue} 
                    onChange={this.handleinputChange}
                    onKeyUp={this.handleKeyUp} 
                />
                <button onClick={this.handleAddClick.bind(this) } > 添加 </button>
            </div>
        )
    }
}
