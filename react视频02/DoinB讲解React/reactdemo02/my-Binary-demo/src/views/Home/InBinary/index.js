import React, { Component } from 'react'
import InBinaryItem from './InBinaryItem'

export default class InBinary extends Component {
    constructor(){
        super()
        this.state={
            inBinaryListNum:[0,1,2]
        }
    }
    render() {
        return (
            <>
                <div id="inwork-indicator" className="index1"></div>
                <div className="row inwork-section bd-home-inwork minWidth" id="stduio_study">
                    <div className="section">
                        <div className="section-title inwork-section-title">在Binary</div>
                        <div className="row section-content inwork-section-content">
                            <div className="flex-row card-deck full-section ml-auto mr-auto">
                                {
                                    this.state.inBinaryListNum.map(item=>{
                                        return(
                                            <InBinaryItem key={item}></InBinaryItem>
                                        )
                                    })
                                }
                                {/* <div className="col-4 J-inwork-item video-link-wrap">
                                    <div className="card bd-inwork-item">
                                        <div className="card-block bd-card-title">
                                            <span className="bd-card-span">我们的故事<span className="bd-font-bottomline"></span></span>
                                        </div>
                                        <div className="bd-card-mod">
                                            <div className="img-outer">
                                                <div className="img-inner">
                                                    <img className="card-img lazy" src="../image/smm01.jpg" alt="Card image cap"/>
                                                    <div className="bd-work-coverbg"></div>
                                                    <div className="bd-work-cover" style={{position:"absolute", top:"40%"}}>
                                                      
                                                        <div style={{fontSize: "1.0vw"}}>
                                                            工作室成立之初，各个对编程感兴趣的小伙伴形成了各种项目团队，目标是为学院创建一个良好的计算机专业学习氛围，平台建设途中遇到了各种各样的设备、技术难题，但在各个成员的努力下，为工作室平台建设积累了大量项目经验，之后我们也会为工作室平台建设、学院项目化需求而奋斗。

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 J-inwork-item">
                                    <a href="" className="card bd-inwork-item" target="_blank">
                                        <div className="card-block bd-card-title">
                                            <span className="bd-card-span">我们的项目<span className="bd-font-bottomline"></span></span>
                                        </div>
                                        <div className="bd-card-mod">
                                            <div className="img-outer">
                                                <div className="img-inner">
                                                    <img className="card-img lazy" src="../image/smm02.jpg" alt="Card image cap"/>
                                                    <div className="bd-work-coverbg"></div>
                                                    <div className="bd-work-cover">
                                                        <div className="bd-work-slogan">
                                                            <p style={{boxSizing: "border-box", margin: "0px 0px 10px",}}> 项目...</p>
                                                            <p style={{boxSizing: "border-box", margin: "0px 0px 10px",}}>项目...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
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
                                 */}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
