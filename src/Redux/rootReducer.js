import { combineReducers } from "redux";
import { TodoPostReducer, TodoReducer } from "./Todo/TodoReducer";
import { deleteReducer } from "./Todo/Delete/DeleteReducer";
import { signupReducer } from "./Auth/Signup/SignupReducer";
import { loginReducer } from "./Auth/Login/LoginReducer";

const rootReducer = combineReducers({
    todo: TodoReducer,
    todopost: TodoPostReducer,
    delete: deleteReducer,
    signup: signupReducer,
    login: loginReducer,
})

export default rootReducer;