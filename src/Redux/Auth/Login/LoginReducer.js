import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FALIURE } from "./LoginType";

const initialstate = {
    loading: false,
    data: {},
    error: {}
}

export const loginReducer = (state=initialstate, action) => {
    switch (action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: {}
            }
        case LOGIN_FALIURE:
            return{
                loading:false,
                data: {},
                error: action.payload
            }
        default: return state   
    }
}