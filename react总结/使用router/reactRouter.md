### 如何使用  路由在 react 项目中

1. **安装  react-router**

   - ```js
     npm i react-router-dom -S
     ```

2. **注意：关于不同路由各自的页面，应一个组件表示一个页面，并存于   `src/views/` 中**

   - ![](C:\Users\13433\Desktop\使用router\views.png)

3. **引入router  ` import{BrowserRouter as Router,Route，Link} from 'react-router-dom' `**

4. **要想使用 router 必须在最外层包一层  `  <Router>   </Router> ` , 即上述的  Router **。所以你可以把 App组件包在其中。

   - **Router 的作用： 只要 是 Router 的子元素，就可以使用  Route 组件**

   - **Route 的作用： 参数： component：要显示的组件名   、path ：路由**；即当浏览器上的路由与之相同，就会显示 component对应的组件

     - 如：`   <Route   component={App}  path='/admin' >    </Route> ` 

     - **Route    将  路由  与 组件绑定了在一起**

     - Route 组件绑定组件的同时，还为组件传递了   props

     - **注意：！!  !  !  !   !**

       - **可以将  component    替换成    render**，如：

         ```jsx
         <Route path="/admin" render={(routerProps)=>{
                             return <App {...routerProps}/>
                         }} />
         //  在 Route 组件中的  component  或 render ， 两者都会传入一些值。
  //  若 只有  component 属性，则 这些值 会存于 组件的  props 属性中
         //  若 只有  render，render 内 只能是一个方法，且接收一个参数，这个参数的内容 就是  那些  值
      
         ```
      
       -   `    this.props.history.push('/admin') `  
       
      - **解释：**  对于上述的 Route 传入的 props 的值，中有一个   history.push()  方法
         - 可以更改  路由的值，相当于   Link 组件中的  to 
    
       - **使用   history.push  方法   与   Link   to  属性的不同**
       
         - **history.push**   可以存在于  某它其他库中的  事件中，与其他库 原生的方法一起触发
      - **Link   to**  转至某个路由，需要  LInk 组件包裹。一般用以 单一的  路由  
   
   - **关联路由：** 即 当点击某个  元素，就会跳转至某个路由，进而触发  Route 展示相对应的组件
   
     - `<Link to='/admin'> admin   </Link>`
     - 使用 Link 组件，点击时，会转至对应的路由，对应的路由  就会有 对应的 组件
   
   - **Redirect  组件的作用**                (默认 从   某个路由   转至某个  路由)
   
     - 如：`  <Redirect to="/admin" from='/' exact />  `
     - **解释**： 当路由是 '/' 时，会 默认转至  ‘/admin’ 路由； 
     -  **exact**    精准匹配  **from** 中的路由。若没有 **exact** 属性，则会模糊匹配，（相当于路由是以  /  开头就会匹配到）
   
     