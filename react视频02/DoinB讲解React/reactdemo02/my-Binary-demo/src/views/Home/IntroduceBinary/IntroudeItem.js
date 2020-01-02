import React, { Component } from 'react'

export default class IntroudeItem extends Component {
    render() {
        return (
        <div className="col">
            <div className="card bd-desc-item">
                <div className="img-outer">
                    <div className="img-inner">
                        <img src="../image/bottom04.jpg" alt="" className="lazy"/>
                        <div className="card-cover">
                            我们的团队 <span className="bd-desc-titleline"></span>
                            <div className="bd-desc-content">
                            </div>
                            {/* <!-- <a href="/home/index/management_team" className="bd-desc-btn" target="_blank">了解更多</a> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
