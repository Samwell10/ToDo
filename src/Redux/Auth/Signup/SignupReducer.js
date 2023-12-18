import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FALIURE } from "./SignupType";

const initialstate = {
    loading: false,
    data: {},
    error: {}
}

export const signupReducer = (state=initialstate, action) => {
    switch (action.type){
        case SIGNUP_REQUEST:
            return{
                ...state,
                loading: true
            }
        case SIGNUP_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: {}
            }
        case SIGNUP_FALIURE:
            return{
                loading:false,
                data: {},
                error: action.payload
            }
        default: return state   
    }
}