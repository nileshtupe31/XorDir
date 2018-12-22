import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import EmployeeReducer from "./EmployeeReducer";

export default combineReducers({
        auth: AuthReducers,
        employee: EmployeeReducer
    })