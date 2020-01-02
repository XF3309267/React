import React, { Component } from 'react'

export default class InBinaryItem extends Component {
    render() {
        return (
            <div className="col-4 J-inwork-item">
                <a href="" className="card bd-inwork-item" target="_blank">
                    <div className="card-block bd-card-title">
                        <span className="bd-card-span">在这里学习<span className="bd-font-bottomline"></span></span>
                    </div>
                    <div className="bd-card-mod">
                        <div className="img-outer">
                            <div className="img-inner">
                                <img className="card-img lazy" src="../image/smm03.jpg" alt="Card image cap"/>
                                <div className="bd-work-coverbg"></div>
                                <div className="bd-work-cover">
                                    <div className="bd-work-slogan">
                                        <p>在这学习<br/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}
