import React, { Component } from 'react'
import PropTypes from 'prop-types'; // 用以检测  传至该组件的 参数，是否存在、是否为 string类型，是否为 number类型 ..

// npm install classnames --save  指令引入的 classnames 组件
import classNames from 'classnames'

import Test from './Test'

import{
    TodoHeader,
    TodoInput,
    TodoList,
} from './components'

import { getTodos} from './services'

export default class App extends Component {
    constructor(){
     
        super()
        this.state= {
            title:'待办事项',
            desc:'以下是我每天应该办的事',
            // article:'<div> 这里是 article 中的内容</idv> ',
            //  article 字符串的内容中含有 html 标签，可用下列方式进行  渲染到页面上去
            // <div style={{backgroundColor:'#eee'}}  dangerouslySetInnerHTML={{ __html:this.state.article }}    />
            todos:[
                // {
                //     id:1,
                //     title:'eat',
                //     completed:true,
                // }, {
                //     id:2,
                //     title:'打豆豆',
                //     completed:true,
                // } ,{
                //     id:3,
                //     title:'sleep',
                //     completed:false,
                // },
            ],
            isLoading: false,    
            // 用以表示 数据请求的 开始 与 结束，当请求方法开始执行时，就为 true;
            //  方法执行结束 就为 false（无论是 请求成功 还是失败）
        }
    }
    getData = () =>{
        this.setState({
            isLoading: true
        })
        getTodos().then(  resp  =>{     // resp 接收 getTodos() 返回的结果，也就是  ajax.get(apis.todos)  返回的结果
            console.log(resp)
            if(resp.status === 200){
                this.setState({
                    todos: resp.data,
                    loading : true,
                })
                console.log(resp.data)
            }
        }).catch( err =>{
            console.log(err)
        }).finally(  () => {     // 无论请求成功  或 失败 都会执行 finally 这个函数
            this.setState({
                isLoading: false
            })
        })
    }


    componentDidMount(){    //   在render方法成功调用并且真实的DOM已经被渲染之后,发生执行
       this.getData();
    }

    myDeepClone(obj){
        let _obj = JSON.stringify(obj),
            objClone = JSON.parse(_obj);
        return objClone
    }  

    addTodo = (todotitle) =>{
        const addThing = { 
            id: this.state.todos.length+1,
            title: todotitle,
            completed: false ,
        }
        //   #########  注意  ！！！  ###########
        //  const mytodos = this.state.todos
        //  const mytodos = [...this.state.todos]

        //   @@@@@@@@@    对象 是引用类型    数组  也是引用类型
        //   所以在此 对 this.state 中的数据进行更改时。若 this.state  中有引用数据类型的数据，在对他们进行更改时，不用 this.setState 也行
        //   因为 当你把 this.state 中的  引用数据 进行赋值给其他变量( 比如是 a )时，a 中的数据进行更改  this.state 数据也会进行更改
        //    所以用不上  this.setState() 方法进行更改。
        //     &&&&&   如果只想  this.setState 来进行更改，可以对 引用数据 进行  深复制，这样才不会有关联

        //  两者的区别：
        //      1.  第一种： 将 this.state.todos 数组的 指针 赋给了 mytodos，所以 mytodos 的改变会将  this.state.todos 的内容也进行改变
        //      2.  第二种： 只是单纯的 将 this.state.todos中的数据 复制出一份 给了 mytodos，两者的 数组的指针地址不同
        //      3.  第三中： 使用如上的  myDeepClone() 方法 进行  深复制，这样复制出来的 新一份数据 就完全与 原来数据 毫无关联
                // myDeepClone(obj){   *******  第三种 方法
                //     let _obj = JSON.stringify(obj),
                //         objClone = JSON.parse(_obj);
                //     return objClone
                // } 
        //    @@@@@@  注意： 第二种虽然 数组指针指向不同了，当里面的 对象 指针指向是一样的，所以更改数组里的对象还是 this.state.todos 里的对象也会进行改变的
        //      $$$$$$$  建议使用  myDeepClone() 方法进行 深拷贝，避免 不小心更改  源数据


        // const mytodos = this.state.todos
        const myTodos =this.myDeepClone(this.state.todos)
        
        // const my
        myTodos.push(addThing)
        // myTodos[0].title ='吹牛逼'
        this.setState({
            todos: myTodos
        }, () =>{
            // console.log('app.js中')
            // console.log(this.state.todos)
        } );
        // console.log(this.state.todos)
    }
    changeCompleted = (id) =>{
        // const myTodos = this.state.todos.slice()
        // const myTodos =this.myDeepClone(this.state.todos)
        // for (let i = 0; i < myTodos.length; i++) {
        //     const element = myTodos[i];
        //     (id === element.id )&& (element.completed = !element.completed)
        // }
        // console.log('after', this.state.todos)
        // console.log(this.state.title)
        this.setState( (prevState) => {
            return{
                todos: prevState.todos.map( todo =>{
                    if(todo.id === id){
                        todo.completed = !todo.completed
                    }
                    return todo
                } )
            }
           
        })
       
    }

    render() {
        //  因为  todos 数据 是请求而来，要一定的时间
        //  所以  必然 一些要操作 todos 的组件，必须等到  isLoading 为 false ，才能用上 这些组件
        //  %%%%%%  解释： 为什么 isLoading 为 false 才可以显示
        //  %%%%%%         虽然感觉 这些组件一开始有，然后 在请求数据途中，有 没了 ，然后请求结束，又出现了。
        //                 因为 网页一打开就会 请求数据，isLoading  瞬间 从 false 转为 true
        //                 实际上可认为 就是 true
        //          问： 那为什么 不在一开始就设置为 true 
        //          答：  》》》》  有待考究
        return (
            <div style={{backgroundColor:'#fff'}}>
                 <h3> {this.state.title} </h3>
                {/* {
                    this.state.isLoading
                    ?
                    <h3> 正在加载中..... </h3> 
                    :
                    (   <>  
                            <TodoInput addTodo={this.addTodo} />
                            <TodoList todos={this.state.todos} changeCompleted={this.changeCompleted}>  </TodoList>
                            <TodoHeader></TodoHeader>
                        </>
                        //  ???????   问：  为什么 一定要有一个根元素包裹起来
                    )
                  
                } */}
               
                
                {/* {
                    this.state.todos.map( (ele) =>{
                        console.log(this)
                        return (
                            <div style={{backgroundColor:'#BBB' }} key={ele.id}>
                                <h3>需完成事项： {ele.title} </h3>
                                <h5>是否完成： {ele.completed ?'已完成':'未完成'}  </h5>
                            </div>
                        )
                    } )
                } */}
             
            </div>
        )
    }
}

