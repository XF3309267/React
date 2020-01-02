import React, { Component } from 'react'
import {Consumer} from '../index'

export default class BinaryFotter extends Component {
    render() {
        return (
            <Consumer>
                {

                    (arg)=>{
                       const {binaryFotter} = arg
                        return(
                            <div className="full-section bottom-section">
                                <div className="row" style={{maxwidth: "1200px",margin: "auto"}}>
                                    <div className="bd-home-bottom">
                                        <div className="bd-bottom-share">
                                            <span>实时资讯请关注：</span>
                                            <div className="share-wechat">
                                                <img src="../image/wechatIcon.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="bd-bottom-moremsg">
                                            <div className="bd-more-msg">
                                                <a href="#">
                                                {binaryFotter.contactUs}
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                    )}
                }
            </Consumer>
        )
    }
}
