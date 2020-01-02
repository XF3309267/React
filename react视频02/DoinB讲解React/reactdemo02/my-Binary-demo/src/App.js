import React, { Component,createContext } from 'react'
// import {CartList} from './components'
import Home from './views/Home'
import {Frame} from './components'
import {Route,Switch,Redirect } from 'react-router-dom'

import {infoRoutes} from './routes'


const menus = infoRoutes.filter(routes =>routes.isNav === true)

export default class App extends Component {
  render() {
    return (
      <Frame menus={menus}>
        <Switch>
            {
              infoRoutes.map(route=>{
                return <Route
                    key={route.pathname}
                    path={route.pathname}
                    exact={route.exact}
                    render = {(routeProps)=>{
                      // 这里的  render 限制的是: 你虽然登录了，但是仍然有 等级区分，从而限制访问的 页面的多少
                              return <route.component {...routeProps} />
                    }}
                />
              })
            }
            <Redirect to={infoRoutes[0].pathname} from='/info' exact  />
            <Redirect  to='/404' />
        </Switch>
         
      </Frame>
    )
  }
}
