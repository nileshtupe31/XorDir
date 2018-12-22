import axios from "axios";
import { Actions } from "react-native-router-flux";
import { AsyncStorage } from "react-native";
import { HOSTURL, LOGINKEY } from "../res/constant";
import { LOGINCREDS } from "../res/keys";


import { 
    USERNAME_CHANGED, 
    PASSWORD_CHANGED,
    USER_LOGGING_IN,
    USER_LOGGED_IN,
    LOGIN_FAILED,
    SAVED_USER
} from "./types";


export const userNameChanged = (text) => {

    return ({
        type: USERNAME_CHANGED,
        payload:text
    })
}

export const passwordChanged = (text) => {

    return ({
        type: PASSWORD_CHANGED,
        payload:text

    })
}

export const savedUser = () => {
    return (dispatch) => {
            AsyncStorage.getItem(LOGINCREDS).then(result => {
                if (result !== null) {
                    const dict = JSON.parse(result);
                    dispatch({
                        type: SAVED_USER,
                        payload: dict
                    })
                }
            }
        );
    }
}

export const login = (userName, password) => {

    return (dispatch) => {
         const dict = {
            userName: userName,
            password: password
        }

        const loginURL = HOSTURL + LOGINKEY

        dispatch({
            type: USER_LOGGING_IN
        })

        axios.post(loginURL,dict).then(res => {

            if (res.data.status === false) {
                dispatch({
                    type: LOGIN_FAILED
                });
            } else {
                dispatch({
                    type: USER_LOGGED_IN,
                    payload: dict
                });

                Actions.hierarchy();
                AsyncStorage.setItem(LOGINCREDS,JSON.stringify(dict));
            }
        }).catch(error => {
            debugger;
            dispatch({
                type: LOGIN_FAILED
            })
        });

    }
}
