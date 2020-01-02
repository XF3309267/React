import actionTypes from './actionTypes'
import { getPosts } from '../services'

const startFetchBloglist = ()=>{
    return{
        type: actionTypes.START_FETCH_BLOG_LIST
    }
}

const fetchBloglistSuccess = (payload)=>{
    return{
        type: actionTypes.FETCH_BLOG_LIST_SUCCESS,
        payload
    }
}

const fetchBloglistFailed = (payload)=>{
    console.log('failed')
    return{
        type: actionTypes.FETCH_BLOG_LIST_FAILED,
        payload 
    }
}
export const fetchBlogList = ()=> dispatch =>{
    dispatch(startFetchBloglist())
    getPosts()
    .then(resp=>{
        if(resp.status === 200){
            dispatch(fetchBloglistSuccess({
                list: resp.data
            }))
        }else{
            dispatch(fetchBloglistFailed({
                error:'请求错误。。。'
            }))
        }
    })
    .catch(error =>{
        console.log('into catch ')
        dispatch(fetchBloglistFailed({
            error:'..... 没有网络....'
        }))
    })
}