import React from 'react'

//  每个组件 就是一个 文件夹，  目录的名字 就是  组件的名字
//  而一般目录下的 js 文件 ，会 起名字为  index.ju,  因为其他组件引用该组件时，就可以直接引用 文件名
//  （他会自动找到当前  目录下的  index.js 的文件； 如：import TodoHeader   from  './components/TodoHeader'

// 组件和一个 类 差不多。 即，
//      1.  可接受 形参，组件接受 形参，然后返回一个  操作数据的结果
//      2.  可自身带有数据

export default function TodoHead(props) {
    return (
        <div style={{backgroundColor:'#1dd'}}>
           
            <h1>
                这是 TodoHeader 组件
            </h1>
            {props.info}
        </div>
    )
}
