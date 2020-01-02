import React from 'react';
import ReactDOM from 'react-dom';




import App from './App';
import store from './store'

import { Provider} from 'react-redux'

import { HashRouter as Router,Route,Switch,Redirect } from 'react-router-dom'

import {mainRoutes} from './routes'

// import * as serviceWorker from './serviceWorker';

// window.store = store
// console.log(store)


ReactDOM.render(
   <Provider store={store}>
      <Router>
         <Switch>
            <Route path='/info' render={(routeProps)=>{
               return <App {...routeProps} />
               // return <div> 11111111111</div>
            }} />
            {mainRoutes.map(route =>{
               return <Route  key={route.pathname} path={route.pathname} component={route.component} />
            })}
            <Redirect to='/info' from='/' exact />
            <Redirect  to='/404' />
         </Switch>
      </Router>
    </Provider>
  ,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
