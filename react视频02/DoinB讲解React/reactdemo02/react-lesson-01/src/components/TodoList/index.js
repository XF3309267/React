import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
  

export default class TodoList extends Component {

    static propTypes = {                                            //  ！！！！！！！  注意  名称, 首字母 p 是小写
        todos: PropTypes.arrayOf(PropTypes.shape({              //    这里的名字  首字母 p 是大写
        //  PropTypes.arrayOf( PropTypes.number)   要求 参数是一个数组，且数组元素是 是一个 数值类型的值
        //  PropTypes.arrayOf(PropTypes.shape({ })  要求 参数是一个数组，且可使用 shape 对里面的 数据类型一一规定，如下：
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        isCompleted: PropTypes.bool,
        })).isRequired         
    }


    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
        this.state={
            inputValue:'XXX'
        }
    }
  

    render() {
        return (
           <ul  >
               {
                    this.props.todos.map( (ele) =>{
                    return (
                        <TodoItem key={ele.id} {...ele}  changeCompleted={this.props.changeCompleted}>    </TodoItem>
                    )
                    } )
                }
           </ul>
        )
    }
}
