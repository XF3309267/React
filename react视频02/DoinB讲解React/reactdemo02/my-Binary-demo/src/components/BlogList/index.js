import React, { Component } from 'react'

import BlogItem from './BlogItem'

import {connect} from 'react-redux'
import { getHandleCapsule } from '../../services'
// import { BlogList } from '..'

import {fetchCapsuleList} from '../../actions/capsule'

class BlogList extends Component {

componentDidMount(){
    this.props.fetchBlogList()
}
  
    render() { 
        const {
            list,
            isLoading,
            error,
        } = this.props

        console.log(isLoading);
        console.log(error)
        return (
            isLoading
            ?
            <div>  isLoading..... </div>
            :
            
                error===''
                ?
                <ul>
                    {
                        list.map( item =>{
                            return <BlogItem key={item.id} {...item}/>
                        })
                    }
                    <div> { error}</div>
                </ul>
                :
                <div> {error} </div>
            
        )
    }
}
const mapState = (state)=>({
    list: state.blog.list,                      //   this.props.list   === state.blog.list   ( 下面等同)
    isLoading: state.blog.isLoading,
    error:state.blog.error,
})

export default connect(mapState,{fetchCapsuleList})(BlogList)
// export default connect()(BlogList)

// connect(arg1,arg2)(arg3)
/*
    解析：
    arg1： 
        是个方法，该方法自定义，不过接收一个参数。因为这个方法会用于 conncet 中，到时候 connect 会将 state 传递给 这个方法的 state
        所以，在这个方法里面使用 state，就可以获得 state 中的数据
        可以看到里面并没有返回什么，而只是个对象，会将这个对象 添加到  props 中取
    
    arg2：
        1.  可接受一个方法。和上面差不多，不过这个参数 是 dispatch() 方法，且需要返回一个对象，这个对象里的内容会作为  this.props 的一部分
            如下：
                // const mapDispatchToProps = dispatch =>{   
                //     return {
                //         add: (id) => {  dispatch( increment(id)) },
                //         reduce: (id) => {  dispatch(decrement(id))}
                //     }
                // }
            调用： export default  connect( mapStateToProps, mapDispatchToProps)(CartList)   
            而且 store 中就没有了 dispatch() 这个方法，只剩下了 add() reduce() 这两个方法
            在其他本该 调用 dispatch(increment(id)) 时，就可以直接使用  this.props.add(id)

        2.  可接收一个对象，（对象中存有方法，这些会存于 props 中，而 dispatch() 则不会在 props 存在）
            对象中是一个个方法，如： export default  connect( mapStateToProps, {increment,decrement})(CartList)   
    >>>>a.  注意： 若方法如下：
            1   // export const  increment = (id,step)=>{
                //     return {             return  action 让 dispatch() 去执行
                //         type: actionType.CART_ITEM_INCREMENT,
                //         payload:{
                //             id,
                //             step
                //         }
                //     }
                // }
                调用：export default  connect( mapStateToProps, {increment,decrement})(CartList)
                increment 方法，返回一个 action，在内部 会自动   dispatch(increment())，所以不用向上述那样返回 dispatch(increment())
                而且 store 中就没有了 dispatch() 这个方法，只剩下了 increment() 、decrement() 这两个方法
                每当执行 increment()  就相当于  执行 dispatch(increment())

                就相当于 
            2   // const mapDispatchToProps = dispatch =>{    
                //     return {
                //         increment: (id) => {  dispatch( increment(id)) },
                //         decrement: (id) => {  dispatch(decrement(id))}
                //     }
                // }
                 connect( mapStateToProps, mapDispatchToProps)(CartList)   

    >>>>>b.  注意： 若方法如下：(这种方法  适用于 异步调用  dispatch)
                export const fetchBlogList = ()=> dispatch =>{
                    dispatch(startFetchBloglist())
                    getPosts()
                    .then(resp=>{
                        if(resp.status === 200){
                            dispatch(fetchBloglistSuccess({
                                list: resp.data
                            }))
                        }else{
                            dispatch(fetchBloglistFailed())
                        }
                    })
                    .catch(error =>{
                        dispatch(fetchBloglistFailed())
                    })
                }
                
                a 中的方法  与  b中的方法 比较
                b 方法 没有返回 一个 action，而是里面又嵌套了一个方法（这个方法  可以接收 dispatch参数
                本来是不能使用  b 方法的，但是 在创建 store 时，是如下创建的（以下代码是在  src/store.js 文件中）

                import { createStore, applyMiddleware } from 'redux'
                import rootReducer from './reducers/index'
                import thunk from 'redux-thunk'
                export default createStore(
                    rootReducer,
                    applyMiddleware(thunk),
                    //applyMiddleware(thunk)
                )

*/
