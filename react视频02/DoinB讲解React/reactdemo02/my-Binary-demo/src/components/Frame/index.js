import React, { Component } from 'react'

import {withRouter,Link} from 'react-router-dom'


import  './frame.less'
import NavItem from './NavItem'

@withRouter
class Frame extends Component {
    constructor(){
        super()
        this.state={
            nowPathName:''
            }
        }
    onClick=(item)=>{
        // console.log(item.pathname)

        this.props.history.push(item.pathname)
        // console.log(this.props.location)
    }
    
    render() {
        return (
            <div className="full-section container-fluid" style={{overflow: "hidden"}}>
                <div>
                    <nav className="full-section navbar head-font  navbar-expand-lg navbar-light">
                        <img src="image/icon.png" alt="logo" display="inline-block" style={{width:'180px'}} />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="ull navbar-nav mr-auto mt-2 mt-lg-0">
                            {/* <li className="nav-item" > </li> */}
                            {
                                this.props.menus.map(item=>{
                                    // console.log({...item})
                                    return(
                                        <li className={this.props.location.pathname===item.pathname?'nav-item active':'nav-item'} key={item.pathname} onClick={this.onClick.bind(this,item)}>
                                        {/* <li className='nav-item active' key={item.pathname} onClick={this.onClick.bind(this,item)}> */}

                                            <span className='nav-link'> { item.title } </span>
                                        </li>
                                    )
                                })
                            }
                            {/* <li className="nav-item">
                                <a className="nav-link " href="#stduio_dynamic" >工作室动态</a>
                            </li>
                            <li className="nav-item " >
                                <a className=" nav-link " href="#stduio_study">学在Binary</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#stduio_introduce">工作室介绍</a>
                            </li> */}
                        </ul>
                    </div>
                    </nav>
                </div>
                {this.props.children}
            </div>
        )}                   
}
export default Frame