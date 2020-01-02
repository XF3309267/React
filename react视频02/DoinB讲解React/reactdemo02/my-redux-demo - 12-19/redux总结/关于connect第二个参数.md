#### 关于使用组件中使用 storez，connect(arg1,arg2)(argLast) 中的  arg2

```jsx
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
```

**累了，估计是饿的**