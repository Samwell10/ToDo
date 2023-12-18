import { TODO_REQUEST, TODO_SUCCESS, TODO_FALIURE, TODO_POST_FALIURE, TODO_POST_SUCCESS, TODO_POST_REQUEST } from "./TodoType";

const initialstate = {
    loading: true,
    data: {},
    error:{}
}
const poststate = {
    loading: false,
    data: {},
    error:{}
}
export const TodoReducer =( state=initialstate, action)=>{
    switch(action.type){
        case TODO_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case TODO_SUCCESS:
            return{
                loading:false,
                data:action.payload,
                error:{},
            }
        case TODO_FALIURE:
            return{
                loading:false,
                data:{},
                error: action.payload
            }
        default: return state;
    }
}

export const TodoPostReducer =( state=poststate, action)=>{
    switch(action.type){
        case TODO_POST_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case TODO_POST_SUCCESS:
            return{
                loading:false,
                data:action.payload,
                error:{},
            }
        case TODO_POST_FALIURE:
            return{
                loading:false,
                data:{},
                error: action.payload
            }
        default: return state;
    }
}
