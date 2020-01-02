import actionType from './actionType'

export const  increment = (id,step)=>{

    return {
        type: actionType.CART_ITEM_INCREMENT,
        payload:{
            id,
            step
        }
    }
}

export const  decrement = (obj)=>{

    return {
        type: actionType.CART_ITEM_DECREMENT,
        payload:{
           ...obj
        }
    }
}
