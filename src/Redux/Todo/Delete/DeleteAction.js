import { DELETE_REQUEST, DELETE_SUCCESS, DELETE_FALIURE } from "./DeleteType";
import axios from 'axios'

export const deleterequest = ()=>{
    return{
        type: DELETE_REQUEST
    } 
}
export const deletesuccess = (response)=>{
    return{
        type: DELETE_SUCCESS,
        payload: response
    }
  
}
export const deletefaliure = (error)=>{
    return{
        type: DELETE_FALIURE,
        payload: error
    }
}
const baseUrl = 'https://todo-server-boo1.onrender.com'
export const deleteaction = (id, history) =>{
    return (dispatch)=>{
        dispatch(deleterequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        axios.delete(`${baseUrl}/api/todo/todo/${id}`,{headers: {
            Authorization: `Bearer ${datas?.token}`
        }})
        .then(response=>{
            const data = response.data;
            dispatch(deletesuccess(data))
            history()
        }).catch(error=>{
            dispatch(deletefaliure(error))
        })
    }
}