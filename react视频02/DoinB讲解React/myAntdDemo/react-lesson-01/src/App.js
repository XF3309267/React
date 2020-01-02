import React, { Component } from 'react'

import{
    Button, 
    Spin,
    Pagination,
    Badge,
}  from 'antd'



export default class App extends Component {
    render() {
        return (
            <div>
                <Button  type="primary"> antd</Button>
                <Spin>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque excepturi illo aperiam sapiente culpa quo placeat! Ex, obcaecati accusantium id ab tempora facere, non illo, nam hic voluptatum totam.
                    </div>
                </Spin>
                <Pagination
                 showQuickJumper 
                 defaultCurrent={2} 
                 total={500} 
                 showSizeChanger
                 />
                <Badge 
                    count={9} 
                    overflowCount={9}
                    showZero
                >
                    <span>
                    Lorem uae odit amet ducimus voluptate at nobis quod?
                    </span>
                </Badge>
            </div>
        )
    }
}
