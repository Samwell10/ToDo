import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FALIURE, LOGOUT } from './LoginType'
import axios from 'axios'
export const loginrequest=()=>{
    return{
        type:LOGIN_REQUEST
    }
}
export const loginsuccess=(response)=>{
    return{
        type:LOGIN_SUCCESS,
        payload: response
    }
}

export const loginfaliure=(error)=>{
    return{
        type:LOGIN_FALIURE,
        payload: error
    }
}

export const logoutrequest=()=>{
    return{
        type:LOGOUT,
        payload:{}
    }
}


const baseUrl = 'https://todo-server-boo1.onrender.com/api/user'

export const loginaction = (postState, history, errors) =>{
    return async (dispatch) => {
        dispatch(loginrequest())
        try{
            const res = await axios.post(`${baseUrl}/login`, postState)
            const {data} = res 
            console.log(data)
            console.log(res)
            dispatch(loginsuccess(data))
            if(res.status){
                history()
                localStorage.setItem("auth", JSON.stringify(res.data));
            }
        }
        catch(error){
            console.log(error)
            dispatch(loginfaliure(error.response.data.error))
            errors()
        }
    }
}

export const logout =()=>{
    return (dispatch)=>{
        dispatch(logoutrequest())
        localStorage.clear("auth")
    }
}

