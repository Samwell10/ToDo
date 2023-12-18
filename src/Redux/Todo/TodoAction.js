import axios from 'axios'
import { TODO_REQUEST, TODO_SUCCESS, TODO_FALIURE, TODO_POST_REQUEST, TODO_POST_SUCCESS, TODO_POST_FALIURE } from "./TodoType";

export const todorequest = ()=>{
    return{
        type: TODO_REQUEST
    }
}
export const todosuccess = (response) =>{
    return{
        type: TODO_SUCCESS,
        payload: response
    }
}
export const todofaliure = (error)=>{
    return{
        type: TODO_FALIURE,
        payload: error
    }
}
const baseUrl = 'https://todo-server-boo1.onrender.com'
export const fetchtodo = ()=>{
    return (dispatch)=>{
        dispatch(todorequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/api/todo/todo`, {headers: {
            Authorization: `Bearer ${datas?.token}`
        }})
        .then(response=>{
            const data = response.data;
            dispatch(todosuccess(data))
        }).catch(error=>{
            dispatch(todofaliure(error))
        })
    }
}

export const todopostrequest = ()=>{
    return{
        type: TODO_POST_REQUEST
    }
}
export const todopostsuccess = (response) =>{
    return{
        type: TODO_POST_SUCCESS,
        payload: response
    }
}
export const todopostfaliure = (error)=>{
    return{
        type: TODO_POST_FALIURE,
        payload: error
    }
}
export const posttodo = (postState, history)=>{
    return (dispatch)=>{
        dispatch(todopostrequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.post(`${baseUrl}/api/todo/todo`,postState,{headers: {
            Authorization: `Bearer ${datas?.token}`
        }})
        .then(response=>{
            const data = response.data;
            dispatch(todopostsuccess(data))
            history()
        }).catch(error=>{
            dispatch(todopostfaliure(error))
        })
    }
}