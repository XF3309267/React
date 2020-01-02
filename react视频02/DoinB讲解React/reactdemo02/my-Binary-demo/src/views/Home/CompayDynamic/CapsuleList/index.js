import React, { Component } from 'react'

import {connect} from 'react-redux'

import CapsuleItem from './CapsuleItem'
import {fetchCapsuleList} from '../../../../actions/capsule'

class CapsuleList extends Component {


    componentDidMount(){
        this.props.fetchCapsuleList()
    }
    render() {
        const {
            list,
            isLoading,
            error,
        } = this.props
        return (
            <div className="col-6 ">
                <div className="bd-dynamic-news">
                    <div className="dynamic-title1">
                        Binary时讯
                    </div>
                    <div className="news-list">
                        {
                            list.map( item =>{
                                return <CapsuleItem key={item.capsule_id} {...item}/>
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}
const mapState = (state)=>({
    list: state.capsule.list,                      //   this.props.list   === state.blog.list   ( 下面等同)
    isLoading: state.capsule.isLoading,
    error:state.capsule.error,
})

export default connect(mapState,{fetchCapsuleList})(CapsuleList)