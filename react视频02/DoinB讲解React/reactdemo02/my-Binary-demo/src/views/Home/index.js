import React, { Component,createContext } from 'react'

import CompayDynamic from './CompayDynamic'
import  MainImg from './MainImg'
import ArtifactList from './ArtifactList'
import InBinary from './InBinary'
import IntroduceBinary from './IntroduceBinary'
import BinaryFotter from './BinaryFotter'




// import {NavList,ArtifactList} from '../index.js'

export  const {
    Provider,
    Consumer
  }= createContext()
  
  class ConsumerProvider extends Component{
    constructor(){
        super()
        this.state={
            artifactList:{},
            CapsuleList:{},
            sharePartList:{},
            inBinary:{},
            introduceBinary:{},
            binaryFotter:{
                contactUs:'联系我们'
            }
        }
    }
    render(){
        // console.log(this.state)
        return(
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
  }

export default class Home extends Component {
    render() {
        return (
            <ConsumerProvider>
                    <MainImg></MainImg>
                    <ArtifactList></ArtifactList>
                    <CompayDynamic></CompayDynamic>
                    <InBinary></InBinary>
                    <IntroduceBinary></IntroduceBinary>
                    <BinaryFotter></BinaryFotter>
            </ConsumerProvider>

        )
    }
}
