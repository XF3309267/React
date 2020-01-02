import React, { Component } from 'react'
import IntroudecItem from './IntroudeItem'

export default class IntroduceBinary extends Component {
    constructor(){
        super()
        this.state={
            num:[0,1,2,3]
        }
        
    }
    
    render() {
        return (
            <>
            <div className="row company-section" style={{minWidth: "1024px"}} id="stduio_introduce">
                <div className="section">
                    <div className="bd-home-company-desc">
                        <div className="section-title">Binary工作室介绍</div>
                        <div className="section-content company-section-content">
                            <div className="row">
                                {
                                    this.state.num.map(item =>{
                                        return (
                                            <IntroudecItem key={item}>

                                            </IntroudecItem>
                                        )
                                    })
                                }
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
