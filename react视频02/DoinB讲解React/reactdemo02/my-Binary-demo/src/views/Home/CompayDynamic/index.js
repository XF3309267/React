import React, { Component } from 'react'

import CapsuleList from './CapsuleList'

import SharePartList from './SharePartList'


export default class CompayDynamic extends Component {
    render() {
        return (
            <div className={" row dynamic-section minWidth"} id="stduio_dynamic">
            <div className={"section"} style={{backgroundColor: "rgb(255, 255, 255)"}}>
                <div className={"section-title"}>
                    工作室动态
                </div>
                <div className={""}style={{paddingBottom:"48px"}}>
                    <div className={"row"} style={{backgroundColor: "rgb(245, 245, 245)"}}>
                    <CapsuleList></CapsuleList>
                    <SharePartList></SharePartList>
                    </div>
                </div>

            </div>
        </div>
        )
    }
}
