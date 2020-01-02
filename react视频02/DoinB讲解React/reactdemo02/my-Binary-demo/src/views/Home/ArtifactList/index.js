import React, { Component } from 'react'

import BigItem from './BigItem'
import SmItem  from './SmItem'

export default class ArtifactList extends Component {
    render() {
        return (
            <>
                <BigItem></BigItem>
                <SmItem></SmItem>
            </>
        )
    }
}
