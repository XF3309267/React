import React, { Component } from 'react'

export default class SharePartList extends Component {
    render() {
        return (
            <div className={"col-6 "}>
            <div className={"bd-dynamic-topic"}>
                <div className={"dynamic-title1 topic-title"}>专题</div>
                <div className={"bd-topic-items"}>
                    <div className={"row"}>
                        <div className={"col-6 mb-2 mt-3"}>
                            <a href="#" className={"item"} target="_blank">
                                <div className={"img-outer"}>
                                    <div className={"img-inner"}>
                                        <img className={"card-img lazy"} src="image/binaryPicture.jpg" alt="Card image" />
                                        <div className={"card-img-bottomlay font-autoHid"}>
                                            HTML称为超文本标签语言，是一种标识性的语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的Internet资源连接为一个逻辑整体。
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={"col-6 mb-2 mt-3"}>
                            <a href="#" className={"item"} target="_blank">
                                <div className={"img-outer"}>
                                    <div className={"img-inner"}>
                                        <img className={"card-img lazy"} src="image/info(1).jpg" alt="Card image"/>
                                        <div className={"card-img-bottomlay font-autoHid"}>
                                            BinaryAI行业应用手册
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={"col-6"}>
                            <a href="" className={"item"} target="_blank">
                                <div className={"img-outer"}>
                                    <div className={"img-inner"}>
                                        <img className={"card-img lazy"} src="image/android01.jpg" alt="Card image" />
                                        <div className={"card-img-bottomlay font-autoHid"}>
                                            BinaryAndroid </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={"col-6"}>
                            <a href="" className={"item"}target="_blank">
                                <div className={"img-outer"}>
                                    <div className={"img-inner"}>
                                        <img className={"card-img lazy"} src="image/pao01.jpg" alt="Card image"/>
                                        <div className={"card-img-bottomlay font-autoHid"}>
                                            Binary想法 </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
