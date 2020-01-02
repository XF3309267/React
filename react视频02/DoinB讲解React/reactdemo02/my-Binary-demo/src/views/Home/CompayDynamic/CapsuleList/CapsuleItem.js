/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class CapsuleItem extends Component {
    render() {
        return (
            <div className="news-item">
                <div className="decoration">
                    <div className="news-circle">
                        <div className="solid-circle"></div>
                    </div>
                </div>
                <div className="news-box">
                <a href="" className="news-title" data-id="17931" target="_blank">{this.props.capsule_title}</a>
                    <div className="news-time">
                        {this.props.capsule_time} </div>
                </div>
            </div>
        )
    }
}
