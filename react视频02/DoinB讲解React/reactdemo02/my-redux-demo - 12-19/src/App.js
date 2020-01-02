import React, { Component } from 'react'

import {CartList} from './components'

import {BlogList} from './components'


export default class App extends Component {
  render() {
    return (
      <div>
        <BlogList />
      </div>
    )
  }
}
