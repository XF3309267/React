import {
    Home,
    StduioDynamic,
    InStduio,
    StduioIntroduce,
    NotFound,
    Login
} from '../views'

export const mainRoutes = [{
    pathname: '/login',
    component:Login
},{
    pathname: '/404',
    component:NotFound
}]
export const  infoRoutes= [{
    pathname: '/info/home',
    component:Home,
    title:'Binary首页',
    icon: 'dashboard',
    isNav:true
},{
    pathname: '/info/stduioDynamic',
    component:StduioDynamic,
    title:'工作室动态',
    icon: 'dashboard',
    isNav:true
},{
    pathname:'/info/stduioIntroduce',
    component:StduioIntroduce,
    title:'工作室介绍',
    icon: 'dashboard',
    isNav:true
},{
    pathname:'/info/inStduio',
    component:InStduio,
    title:'学在Binary',
    icon: 'dashboard',
    isNav:true
}]