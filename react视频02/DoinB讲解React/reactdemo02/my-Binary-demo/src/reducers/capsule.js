import actionTypes  from '../actions/actionTypes'

const initState = {
  list:[
    {
      "capsule_id": 3,
      "capsule_title": "'test-title'",
      "capsule_time": "'test-time'",
      "capsule_content": "'test-content'"
  },
  {
      "capsule_id": 4,
      "capsule_title": "test-title-03",
      "capsule_time": "test-time",
      "capsule_content": "test-content"
  }
  ],
  isLoading: true,
  error:'',
}

export default (state=initState,action) =>{
    switch (action.type){
      case actionTypes.START_FETCH_CAPSULE_LIST:
        return {
          ...state,
          idLoading:true
        }
      case actionTypes.FETCH_CAPSULE_LIST_SUCCESS:
        return{
          ...state,
          isLoading: false,
          list:action.payload.list
        }
        case actionTypes.FETCH_CAPSULE_LIST_FAILED:
          return{
            ...state,
            isLoading: false,
            error:action.payload.error,
          }
        default:
            return state
    }
}