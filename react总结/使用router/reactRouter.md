### 如何使用  路由在 react 项目中

1. **安装  react-router**

   - ```js
     npm i react-router-dom -S
     ```

2. **注意： 每个路由对应一个组件，一个组件表示一个页面，并存于   `src/views/` 中**

   - ![](C:\Users\13433\Desktop\使用router\views.png)

3. **引入router  ` import{BrowserRouter as Router,Route，Link} from 'react-router-dom' `**

4. **要想使用 router 必须在最外层包一层  `  <Router>   </Router> ` , 即上述的  Router **。所以你可以使用  Router 组件把 App 组件包起来

   - **Router 的作用： 只要 是 Router 的子元素，就可以使用  Route 组件**

   - **Route 的作用： 参数： component：要显示的组件名   、path ：路由**；即当浏览器上的路由与之相同，就会显示 component对应的组件

     - 如：`   <Route   component={App}  path='/admin' >    </Route> ` 

     - **Route    将  路由  与 组件绑定了在一起**

     - Route 组件绑定组件的同时，还为组件传递了一些值且  存于 被绑组件的  **props** 中

     - **注意：！!  !  !  !   !**

       - **可以将  component    替换成    render**，如：

         ```jsx
         <Route path="/admin" render={(routerProps)=>{
                             return <App {...routerProps}/>
                         }} />
         //  在 Route 组件中的  component  或 render ， 两者都会传入一些值。
      //  若 只有  component 属性，则 这些值 会存于 组件的  props 属性中
         //  若 只有  render，render 内 只能是一个方法，且接收一个参数，这个参数的内容 就是  那些  值
       
         //  虽然  使用 render 方法绑定组件 需要自己传值
       	//	但是  被绑的组件  接收  Route 组件内的信息的方式 是一样的
         //   	都是 通过  this.props   来获得一些数据 与 方法
         ```
       
       -   `    this.props.history.push('/admin') `  
       
      - **解释：**  对于上述的 Route 传入的 props 的值，中有一个   **history.push()  方法**
        
     - 可以更改  路由的值，相当于   Link 组件中的  to 
       
       - **使用   history.push  方法   与   Link   to  属性的不同**
       - **history.push**   可以存在于  某它其他库中的  事件中，与其他库 原生的方法一起触发
      - **Link   to**  转至某个路由，需要  LInk 组件包裹。一般用以 单一的  路由  
     
   - **关联路由：** 即 **当点击某个  元素，就会跳转至某个路由**，进而触发  Route 展示相对应的组件
   
     - `<Link to='/admin'> admin   </Link>`
     - 使用 Link 组件，点击时，会转至对应的路由，对应的路由  就会有 对应的 组件
   
   - **Redirect  组件的作用**                (默认 从   某个路由   转至某个  路由)
   
     - 如：`  <Redirect to="/admin" from='/' exact />  `
     - **解释**： 当路由是 '/' 时，会 默认转至  ‘/admin’ 路由； 
     -  **exact**    精准匹配  **from** 中的路由。若没有 **exact** 属性，则会模糊匹配，（相当于路由是以  /  开头就会匹配到）
     -  **作用：**  **将没有设置的路由  都转为   404  路由**，` <Redirect to='/404' />`
   
5. **关于  路由的匹配**

   1. 先天条件， 一般  都会将  Route组件 、 Redirect 组件 都放在   <Switch> </Switch> 中，就如  switch 语句一样，只要匹配到相应的路由  就会停止继续往下匹配

      - 而  匹配规则是：只要  Route 上设置的 路由（字符串值） 包含   浏览器上的路由（字符串值）就算匹配成功

      -  **若没有使用  Switch  组件  包起来**，则会按照规则  一一匹配，直至所有  Route 所设置的 路由 匹配完，只要匹配成功就会显示，所以  一个 路由  可能会使 多个路由显示了

   2. **exact  的使用**，

      - 如： <Route exact={route.exact} path={route.pathname} component={route.component}>  </Route>       

      - 上述  中的  route  ，大致结构如下

        ```jsx
        {
            pathname: '/admin/dashboard',
            component:Dashboard,
            title:'仪表盘',
            icon: 'dashboard',
            exact: true,
            isNav: true
        }
        ```

      -  **exact**  一般都会用在  **根路径**  上 ，因为  只有 其 底下的 子路径  孙路径，都会包含 根路径字符串，在匹配时，就总会匹配到 根路径。
      - **exact 的作用**：上面也有讲，exact 为 true时，会精准 匹配，即 只有 路径 与 Route 里设置的路由一摸一样，才算匹配成功，而不是  包含 关系。

6. **对于  一个路由绑定一个组件**

   1. 我们通常会将   路由  与  路由相绑定的组件 ，全部都存放在一个文件里，**my-app\src\routes\index.js**

   2. 存放的大致内容如下

      ```jsx
      import {
          Dashboard,
          Login,
          NotFound,
          Settings,
          ArticleList,
          ArticleEdit,
      }from '../views'
      // 导入 各个路由需要的组件
      
      // 路由进行分类。	
      //	这里将  '/login'  '/404'   组在一起，名为  mainRoutes
      // 	这里将  '/admin/dashboard'  '/admin/article' '/admin/article/edit/:id' '/admin/settings'  //  组在一起，名为  adminRoutes 
      
      // 其实大致可分为 3 类  login  404  总页面路由
      // 之所以  Route 分类，并存于数组。是因为  方便的使用 Route 组件导入 这些数据
      
      export const mainRoutes = [{
          pathname: '/login',
          component:Login
      },{
          pathname: '/404',
          component:NotFound
      }]
      export const adminRoutes = [{
          pathname: '/admin/dashboard',
          component:Dashboard,
          title:'仪表盘',
          icon: 'dashboard',
          isNav: true
      },{
          pathname:'/admin/article',
          component: ArticleList,
          title: '文章管理',
          icon: 'unordered-list',
          isNav: true,
          exact:true
      },{
          pathname:'/admin/article/edit/:id',
          component: ArticleEdit
      },{
          pathname:'/admin/settings',
          component: Settings,
          icon: 'setting',
          title: '设置',
          isNav: true
      }]
      // 对于这些 数据 的使用，如下（！！！！ 下列内容不是  routes\index.js 文件中的内容 ）
      {mainRoutes.map(route =>{
           return <Route key={route.pathname} path={route.pathname} component={route.component} />
                      })}
      // 如上 对于 Route 绑定组件，
      // 自我感觉 Route 就是一个 容器, 路由（我指的是  输入浏览器上 输入网址的 那块地方）是一个开关
      
      // 这个开关，当浏览器上的路由  与 Route 容器上 设置的路由  一致就会显示， Route 里的组件
      //  问：  在哪显示 ？
      //  答：  该 Route 组件放在 哪，与其绑定的 组件就会 哪 显示
      
      ```

      

   