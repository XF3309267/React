import React, { Component } from 'react'

export default class NavItem extends Component {
    render() {
        // console.log(this.props)
        return (
            <li className="nav-item" >
                {/* <a className={this.props.pathname==='/home'?'active nav-link':'nav-link' } >{ this.props.text }</a> */}
                <span> { this.props.title } </span>
            </li>
        )
    }
}
