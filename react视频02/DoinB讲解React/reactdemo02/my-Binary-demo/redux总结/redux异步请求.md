### 		关于 redux 的用法

1.  先在  src 目录下建立  reducers 文件夹（blog.js  index.js  都是建立在  reducers 文件夹下的）

   1. 建立 组件独有的 redux 文件，文件名可以取 与组件名一样的名字（不过 组件首字母大写，如：blog.js

      - ```jsx
        // 一开始  redux 文件，可以 先如下写
        //  有  initstate  初始文件
        const initState = {
          list:[   			// list 要显示的数据
            {
              "userId": 1,
              "id": 1,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
              "userId": 1,
              "id": 2,
              "title": "qui est esse",
              "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            }
          ],
          isLoading: true,	// 用以判定是否 处于 数据请求 阶段，请求阶段界面就显示‘加载’
          error:'',			// 错误信息
        }
        
        export default (state=initState,action) =>{
            switch (action.type){
             
                default:
                    return state
            }
        }
        ```

        

   2. 建立 index.js ,将 reducers 文件夹下的 reducer ，进行总结向外暴露（以便  创建 store）

      - ```jsx
        
        import  blog from './blog.js'
        
        import {combineReducers} from 'redux'
        //	combineReducers  用以将多个 reducer 合成一个 reducer 向外暴露
        //  暴露的永远是一个  reducer 方法
        // 所以平常的 {} 包裹起来向外暴露，这样子暴露的是对象，不是方法
        
        export default combineReducers({
            blog
        })
        ```

2. src/store.js

   -  需要安装 redux-thunk` npm install --save redux-thunk`

   - ```jsx
     import { createStore, applyMiddleware } from 'redux'
     import rootReducer from './reducers/index'
     import thunk from 'redux-thunk'
     
     export default createStore(
         rootReducer,
         applyMiddleware(thunk),		// 用以自己单独调用 dispatch()
         //applyMiddleware(thunk)
     )
     // 已经向外暴露了一个 store
     ```

3. **使用 store **

   1. 在 src/index.js 文件中

      - 需安装 **react-redux** ,`npm install --save react-redux`    (建议先安装)

      - ```jsx
        import React from 'react';
        import ReactDOM from 'react-dom';
        import App from './App';
        import store from './store'
        
        import { Provider} from 'react-redux'
        
        ReactDOM.render(
            // 有了 provider 的包裹，App 组件里的内容就可以使用  store 了
           <Provider store={store}>
              <App  />
           </Provider>
          ,
             document.getElementById('root'));
        ```

   2. src/components/BlogList/index.js  (BlogList 组件中使用 store )

      - 

        ```jsx
        import React, { Component } from 'react'
        
        import BlogItem from './BlogItem'
        
        import {connect} from 'react-redux'
        import { getPosts } from '../../services'
        
        import {fetchBlogList} from '../../actions/blog'
        
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
                    (
                        error===''
                        ?
                        <ul>
                            {error===''}
                            ({
                                list.map( item =>{
                                    return (
                                        <BlogItem key={item.id} {...item}/>
                                    )
                                })
                            })  
                            <div> { error}</div>
                        </ul>
                        :
                        <div> {error} </div>
                    )
                )
            }
        }
        const mapState = (state)=>({
            list: state.blog.list,                 
            isLoading: state.blog.isLoading,
            error:state.blog.error,
        })
        
        export default connect(mapState)(BlogList)
        // 要在 组件中使用 store，就必须有如上的这句
        // connect(arg1,arg2)(argLast)   可接 三个参数
        arg1： 
                是个方法，该方法自定义，不过接收一个参数。因为这个方法会用于 conncet 中，到时候 			connect 会将 state 传递给 这个方法的 state
                所以，在这个方法里面使用 state，就可以获得 state 中的数据
                可以看到里面并没有返回什么，而只是个对象，会将这个对象 添加到  props 中取
                
        arg2:	// 看另外一个文件
        
        
        
        argLast： 表示 那个组件要使用  store（组件名）
            
        
        
        
        
        ```

        

        