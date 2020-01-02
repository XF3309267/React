import actionTypes from './actionTypes'
import { getHandleCapsule } from '../services'

const startFetchCapsulelist = ()=>{
    return{
        type: actionTypes.START_FETCH_CAPSULE_LIST
    }
}

const fetchCapsulelistSuccess = (payload)=>{
    return{
        type: actionTypes.FETCH_CAPSULE_LIST_SUCCESS,
        payload
    }
}

const fetchCapsulelistFailed = (payload)=>{
    console.log('failed')
    return{
        type: actionTypes.FETCH_CAPSULE_LIST_FAILED,
        payload 
    }
}
export const fetchCapsuleList = ()=> dispatch =>{
    dispatch(startFetchCapsulelist())
    getHandleCapsule()
    .then(resp=>{
        if(resp.status === 200){
            dispatch(fetchCapsulelistSuccess({
                list: resp.data
            }))
        }else{
            dispatch(fetchCapsulelistFailed({
                error:'请求错误。。。'
            }))
        }
    })
    .catch(error =>{
        console.log('into catch ')
        dispatch(fetchCapsulelistFailed({
            error:'..... 没有网络....'
        }))
    })
}