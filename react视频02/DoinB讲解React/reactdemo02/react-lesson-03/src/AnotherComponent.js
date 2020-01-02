import React, { Component } from 'react'

import WithCopyright from './WithCopyright'
// import {connect} from 'tls'

// @WithCopyright  装饰器


@WithCopyright
class AnotherComponent extends Component {
    render() {
        return (
            <div>
                {/* AnotherComponent */}
                传过来的  name = {this.props.name}  <br/>
                穿过来的  子集内容 = {this.props.children}
            </div>
        )
    }
}

export default AnotherComponent

// 高级组件 劫持渲染， 即 组件传给了 高级组件，高级组件再进一步的进行渲染（ 增加一些数据
// 
//  注意：     WithCopyright(AnotherComponent)
//   一个 js 文件 返回的本来是 与自己同名的 组件
//   但经过一个函数  再返回一个  新的 组件，当然 这个新的组件 ，然后向外暴露
//   但是    在外面引入组件时， 我们依然想 往常 一样， js 文件名 就是 组件名来获取
//   但是  在外面 获取的组件时，该组件 已经被  其他高阶组件 重改过，而且返回的是  高阶组件，并非 原组件

//      &&&&&&&&    个 人 觉 得：   &&&&&&&&& 
//      高阶组件  只是为 组件 添加某些内容   ，或 是否允许 组件 渲染， 整顿 重修 一个组件
//      
//      //  高阶组件  一定要记得 向  传过来的组件   传递  { this.props } == ，因为 在外界获得 各种数据的 一直都是 高阶组件 非 组件本身
//     //  因为 组件 一旦经过高阶组件， 高阶组件 会将 这个组件 放进自己的   组件内容里， 然后返回出来，
//     *********   强调：   出来的 不是 原组件，是高阶组件




