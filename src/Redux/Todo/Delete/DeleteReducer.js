import { DELETE_REQUEST, DELETE_SUCCESS, DELETE_FALIURE } from "./DeleteType";

const initialstate ={
    loading: false,
    data: {},
    error: {}
}

export const deleteReducer = (state=initialstate, action) =>{
    switch(action.type){
        case DELETE_REQUEST:
            return{
                ...state,
                loading: true,
            }
           
        case DELETE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: {}
            }
        case DELETE_FALIURE:
            return{
                loading:false,
                data: {},
                error: action.payload
            }
        default: return state
    }
}