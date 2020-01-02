import React, { Component } from 'react'

export default class SmItem extends Component {
    render() {
        return (
            <div className={"row mid-big-img"}>
                <a className={"mid-big-img-a"} href="#">
                    <div className={"mid-big-img-a-left"}>
                        <img className={"card-img"} src="image/computerSM01.jpg" alt=""/>
                    </div>
                    <div className={"mid-big-img-a-right"}>
                        Binary开发平台
                    </div>
                </a>
                <a className={"mid-big-img-a"} href="#">
                    <div className={"mid-big-img-a-left"}>
                        <img className={"card-img"} src="image/internet01.jpg" alt=""/>
                    </div>
                    <div className={"mid-big-img-a-right"}>
                        Binary开发平台
                    </div>
                </a>
                <a className={"mid-big-img-a"} href="#">
                    <div className={"mid-big-img-a-left"}>
                        <img className={"card-img"} src="image/01.jpg" alt=""/>
                    </div>
                    <div className={"mid-big-img-a-right"}>
                        Binary开发平台
                    </div>
                </a>
                {/* <!-- <a href="" class="h5-more">
                    获取更多
                </a> --> */}
            </div>
        )
    }
}
