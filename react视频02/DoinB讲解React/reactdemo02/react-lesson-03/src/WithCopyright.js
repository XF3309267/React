import React, {Component } from 'react'


const WithCopyright = (YourComponent)=>{
    return class withCopyright extends Component {
        render(){
            return (
                <>
                    {/* <h4 style={{ color:'red'}}>
                        这里是高阶函数
                    </h4> */}

                    <div style={{ border:'1px solid red' }}>
                    <YourComponent {...this.props} />
                    </div>
                </>
            )
        }
    }
}
export default WithCopyright