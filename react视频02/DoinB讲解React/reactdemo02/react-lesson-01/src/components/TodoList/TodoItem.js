import React, { PureComponent,createRef } from 'react'    
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
//  Fragment  组件 相当于一个  空标签 ，  类似于   <>  </>
// 组件 return 必须有一个 根元素。所以，有时候又不想要一个根元素来包含，就可以使用 
//      <Fragment>  </Fragment>     或     <> </>


//  *************    TodoItem 组件是 TodoList 组件私有的，所以 只需要在 TodoList 引用即可  ******************
// **************   而且 TodoItem 要展示的信息，当然是  TodoList 传给他的，所以不需要自己再独立创建一个文件夹来存放

const noop = () =>  {}    // 定义了一个空函数


//  PrueComponent 组件  会自动在  shouldComponentUpdate()  进行一次 浅比较 

export default class TodoItem  extends PureComponent{
    // static defaultProps = {     // 对参数设置 默认值
    //     completed: false
    //  }
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
        this.ckeckboxDom = createRef()
    }
    // componentDidMount() {
    //     this.props.completed && this.ckeckboxDom.current.setAttribute('checked','checked')
    // }
    
    // shouldComponentUpdate 返回 boolean 值，true  则实现更新（即将 nextProps 拿过来 放置组件上去）
    // shouldComponentUpdate(nextProps,nextState){     //  nextProps 是操作组件后的  props 的值；  nextState  同理
    //     // console.log(nextProps)
    //     // console.log(this.props)                     // this.Props 未操作前的  props 的值
    //     return nextProps.completed!==this.props.completed    // 因为 item 组件 用户只能更改  props.completed  值，所以在这比较前后 ompleted
    // }

    //  ##########   注意 ！！！！！！！！ 
    //   在此将  父组件 传过来的数据，进行本地化。而不像 往常那样使用  this.props.
    //   在 事件 方法 中将 props 数据，本地化，使用起来更方便
    handleChangeClick = (e)=>{
        const {
            changeCompleted = noop,   // 在此设置默认值 为 空函数
            id
        } = this.props;
      
        changeCompleted(id)
    }

    //  属性值 绑定了  数据时
    //  单纯的 利用代码 改变  属性值，是不能的，因为 属性值已经绑死了
    //  所以 必须更改数据源
    //     数据绑死 是个不错的方法，因为  DOM 状态即  实际数据，没有了 “ 只是页面的单纯改变  ”，而且只需要改变元数据 即可。
    
    render(){
        // react 规范： （即 将外界穿过来的参数  “ 本地化 ”，不再使用之前的  this.props. ）
        //  %%%%%%%%%%%%   个人觉得  使用在  render 之后  将数据本地化  就可以了， 无须在 各个方法中将数据本地化  %%%%%%%%%%%
        //      ？？？？？  想想 是否  可以在一处 本地化，在 方法 或 render return 中都可以使用到
        console.log('todoItem render')
        const {
            id,
            title,
            completed,
        } = this.props;
        return (
        <li>
            <h4>需要完成事项：  {title};   </h4> 
        
            <span  > 
                <input id={id.toString()} type='checkbox'   checked={completed}  onChange={this.handleChangeClick} /> 
                <label htmlFor={id.toString()} > 是否完成:  </label> {completed ? '完成':'未完成' }  
            </span>
            <hr/>
        </li>
    )
    }
}
// TodoItem.propTypes = {
//     msg:PropTypes.string,
// }
// TodoItem.defaultProps ={
//     msg: 'item组件中 默认的值'
// }
