import { FETCH_HIERARCHY, LOADING } from "../Actions/types";

const INITIAL_STATE = {
    isloading: true,
    empData: null
}

export default (state = INITIAL_STATE, action) => {
    if (action.type === FETCH_HIERARCHY) {
        return {...state, isloading: false, empData:action.payload}
    }

    if (action.type === LOADING) {
        return {...state, isloading: true}
    }

    return state;
}