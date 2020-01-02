
import Loadable from 'react-loadable'
import {Loading}   from '../components'
// import Dashboard from './Dashboard'
// import Login from './Login'
// import NotFound from './NotFound'
// import Settings from './Settings'

// import ArticleList from './Article'
// import ArticleEdit from './Article/Edit'

const Home = Loadable({
    loader:  () => import ('./Home'),
    loading: Loading
})
const Login = Loadable({
    loader:  () => import ('./Login'),
    loading: Loading
})
const NotFound = Loadable({
    loader:  () => import ('./NotFound'),
    loading: Loading
})
const InStduio = Loadable({
    loader:  () => import ('./InStduio'),
    loading: Loading
})
const StduioDynamic = Loadable({
    loader:  () => import ('./StduioDynamic'),
    loading: Loading
})
const StduioIntroduce = Loadable({
    loader:  () => import ('./StduioIntroduce'),
    loading: Loading
})

//  Loadable  方法， 会将  loader 方法引用的组件存于高级组件（高级组件只体现  loader 引用的组件，其实就相当于是 loader 引用的组件 ）中并返回
//   并且  在高级组件中  会在  componentDidMount() 方法中对 loader 引用的组件 进行加载 并存于  state 中，
//   在高级组件  render 的内容中，会对  state 中的组件是否存在进行判断，判断是否 应该加载  Loading 组件

export {
    Home,
    Login,
    NotFound,
    InStduio,
    StduioDynamic,
    StduioIntroduce,
}