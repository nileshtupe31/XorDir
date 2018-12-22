import axios from "axios";
import { FETCH_HIERARCHY, LOADING } from "./types";
import { HOSTURL, HIERARCHYKEY } from "../res/constant";

export const fetchHierarchy = (empId) => {

    return (dispatch) => {

        dispatch({
            type: LOADING
        })

        const url = HOSTURL + HIERARCHYKEY + '?empId=' + empId
        axios.get(url).then((res) => {
            let data = res.data;
            dispatch({
                type: FETCH_HIERARCHY,
                payload: data
            })
        });
    }
}