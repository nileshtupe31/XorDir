import { 
    USERNAME_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGGED_IN,
    USER_LOGGING_IN,
    LOGIN_FAILED,
    SAVED_USER

 } from "../Actions/types";

const INITIAL_STATE = {
    userName: '',
    password: '',
    isloading: false,
    showError: null
}

export default (state = INITIAL_STATE, action) => {

    if (action.type === USERNAME_CHANGED) {
        return {...state, userName: action.payload}
    }

    if (action.type === PASSWORD_CHANGED) {
        return {...state, password:action.payload}
    }

    if (action.type === USER_LOGGING_IN) {
        return {...state, isloading: true}
    }

    if (action.type === LOGIN_FAILED) {
        return {...state, showError: 'Please enter valid creadentials', isloading:false }
    }

    if (action.type === SAVED_USER) {
        return {...state, userName: action.payload.userName, password: action.payload.password }
    }

    return INITIAL_STATE
}