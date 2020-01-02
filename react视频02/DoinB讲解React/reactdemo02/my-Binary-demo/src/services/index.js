import axios from 'axios'

const ajax = axios.create({
    baseURL:'http://47.97.153.38:8080/BinaryStudio'
})

export const getHandleShare = () =>{
    return ajax.post('/handleShare/selectAllSharePart')
}
export const getHandleArtifact = ()=>{
    return ajax.post('/handleArtifact/selectAllArtifactInfo') 
}
export const getHandleCapsule = ()=>{
    return ajax.post('/handleCapsule/selectAllTimeCapsule') 
}

    