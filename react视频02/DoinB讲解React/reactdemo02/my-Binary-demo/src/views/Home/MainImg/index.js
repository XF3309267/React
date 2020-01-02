/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

export default class MainImg extends Component {
    render() {
        return (
            <>
            {/* <div>
               <nav className="full-section navbar head-font  navbar-expand-lg navbar-light">
                    <a className="ml-0   mr-lg-0  mr-xl-2 navbar-brand" href="#">
                        <h6>
                            江西科技师范大学软件动漫学院
                        </h6>
                        <h6>
                            Binary工作室
                        </h6>
                        <img src="image/icon.png" alt="logo" display="inline-block" style={{height:'60px'}} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="ull navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active " style={{bottomBorder:'2px solid black'}}>   
                                <a className="nav-link" href="#">Binary首页
                                    <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#stduio_dynamic" id="newsBinary">工作室动态</a>
                            </li>
                            <li className="nav-item " id="studyBinary">
                                <a className=" nav-link " href="#stduio_study">学在Binary</a>
                            </li>
                            <li className="nav-item " id="introduceBinary">
                                <a className="nav-link" href="#stduio_introduce">工作室介绍</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div> */}
            <div className={"row tle-img"} style={{overflow: "hidden"}}>
            <a href="#" className={"full-section head-big-img-a"}>
                <div className={"full-section head-big-img full-pic"} style={{backgroundImage:"url(image/titleJpg2.jpg)",position: "relative"}}>

                </div>
            </a>
            <a href="#" className={"head-sm-img"}>
                <div className={"head-sm-img"} style={{height: "20rem", backgroundImage: "url(image/titleSM.jpg)"}}>
                </div>
            </a>
        </div>
            </>
        )
    }
}
