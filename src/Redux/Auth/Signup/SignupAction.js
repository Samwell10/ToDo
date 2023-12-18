import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FALIURE } from "./SignupType";
import axios from 'axios'
export const signuprequest=()=>{
    return{
        type:SIGNUP_REQUEST
    }
}
export const signupsuccess=(response)=>{
    return{
        type:SIGNUP_SUCCESS,
        payload: response
    }
}

export const signupfaliure=(error)=>{
    return{
        type:SIGNUP_FALIURE,
        payload: error
    }
}

const baseUrl = 'https://todo-server-boo1.onrender.com/api/user'

export const signupaction = (postState, history, errors) =>{
    return async (dispatch) => {
        dispatch(signuprequest())
        try{
            const res = await axios.post(`${baseUrl}/signup`, postState)
            const {data} = res 
            console.log(data)
            console.log(res)
            dispatch(signupsuccess(data))
            if(res.status){
                history()
                localStorage.setItem("auth", JSON.stringify(res.data));
            }
        }
        catch(error){
            dispatch(signupfaliure(error.response.data.error))
            errors()
        }
    }
}

