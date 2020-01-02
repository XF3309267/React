import React, { Component } from 'react'


import  WithCopyright from './WithCopyright'
import AnotherComponent from './AnotherComponent'

  class App extends Component {
  render() {
    return (
      <div>
        app
        <AnotherComponent name='abc'>
            AnotherComponent
        </AnotherComponent>
      </div>
    )
  }
}
export default (App)