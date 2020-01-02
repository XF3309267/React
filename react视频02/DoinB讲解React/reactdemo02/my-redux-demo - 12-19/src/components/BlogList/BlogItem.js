import React, { Component } from 'react'




export default class BlogItem extends Component {
    render() {
        return (
            <li>
                <h3>
                    {this.props.title}
                </h3>
                <p>
                    {this.props.body}
                </p>
            </li>
        )
    }
}
