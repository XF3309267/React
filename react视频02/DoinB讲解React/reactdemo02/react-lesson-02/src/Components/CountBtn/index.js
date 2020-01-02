import React, {Component} from 'react'

import {CounterConsumer} from '../ContextStroe'

export default class CountBtn extends Component {
    render() {
        return (
            <CounterConsumer> 
                {
                    ({incrementCount, decrementCount} ) => {
                        const handle = this.props.type === 'incr' ? incrementCount : decrementCount
                        return  <button onClick={ handle} > {this.props.children} </button>
                    }
                }
            </CounterConsumer>
        )
    }
}
