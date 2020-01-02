import React, { Component } from 'react'

export default class BigItem extends Component {
    render() {
        return (
            <div className="row mid-img" style={{backgroundColor: "rgb(245, 245, 245)"}}>
                <div className="sec1200" style={{minWidth: "1024px"}}>
                    <div className="py-5 px-0">
                        <div className="my_clear">
                            <div className="W30-float">
                                <a href="#">
                                    <div className="card item">
                                        <div className="my_img_outer">
                                            <div style={{position: 'absolute',left: "0",right: "0",width: "100%",height: "100%"}}>
                                                <img className="card-img" src="image/01.jpg" alt=""/>
                                                <div className="card-block">
                                                    <div className="news-span">
                                                        作品展示
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="W30-float">
                                <a href="#">
                                    <div className="card item">
                                        <div className="my_img_outer">
                                            <div style={{position: 'absolute',left: "0",right: "0",width: "100%",height: "100%"}}>
                                                <img className="card-img" src="image/01.jpg" alt=""/>
                                                <div className="card-block">
                                                    <div className="news-span">
                                                        作品展示
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </a>
                            </div>
                            <div className="W30-float">
                                <a href="#">
                                    <div className="card item">
                                        <div className="my_img_outer">
                                            <div style={{position: 'absolute',left: "0",right: "0",width: "100%",height: "100%"}}>
                                                <img className="card-img" src="image/01.jpg" alt=""/>
                                                <div className="card-block">
                                                    <div className="news-span">
                                                        作品展示
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
