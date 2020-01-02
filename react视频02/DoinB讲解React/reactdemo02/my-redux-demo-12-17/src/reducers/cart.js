import actionType from '../actions/actionType'

const initState =   [{
    id:1,
    title: 'Apple',
    price: 888.5,
    amount:10,
},{
    id:2,
    title: 'Orange',
    price: 666.5,
    amount:15,
}
]


export default (state = initState,action) =>{
    // console.log(action)
    switch(action.type){
        case actionType.CART_ITEM_INCREMENT:
            return state.map(item => {
                if(item.id === action.payload.id){
                    item.amount += action.payload.step
                }
                return item
            })
            
        case actionType.CART_ITEM_DECREMENT:
            return state.map(item => {
                if(item.id === action.payload.id){
                    item.amount -= action.payload.step
                }
                return item
            })
            
        default:
            return state
    }


}