import {
    GET_CASE_ACTIVE_BY_DATE_2,
    GET_CASE_ACTIVE_BY_DATE_2_FAILURE,
    GET_CASE_ACTIVE_BY_DATE_2_SUCCESS
} from "../constants/actionConstant";

const initialState = {
    data: null,
    error: null,
    isLoading: false
}

export function getActiveByDate(state=initialState, data) {
    switch (data.type) {
        case GET_CASE_ACTIVE_BY_DATE_2:
            return{
                ...state,
                isLoading: true
            }
        case GET_CASE_ACTIVE_BY_DATE_2_SUCCESS:
            console.log("find active reducer" , data)
            return {
                data:data,
                error: null,
                isLoading: false
            }
        case GET_CASE_ACTIVE_BY_DATE_2_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: data.error
            }
        default:
            return {
                ...state,
                isLoading: false,
                error: null
            }
    }
}
