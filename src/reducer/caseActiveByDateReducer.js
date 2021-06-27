import {
    GET_CASE_ACTIVE_BY_DATE_1,
    GET_CASE_ACTIVE_BY_DATE_1_FAILURE,
    GET_CASE_ACTIVE_BY_DATE_1_SUCCESS
} from "../constants/actionConstant";

const initialState = {
    data: null,
    error: null,
    isLoading: false
}

export function getCaseActiveByDate(state=initialState, data) {
    switch (data.type) {
        case GET_CASE_ACTIVE_BY_DATE_1:
            return{
                ...state,
                isLoading: true
            }
        case GET_CASE_ACTIVE_BY_DATE_1_SUCCESS:
            // console.log("find active reducer" , data)
            return {
                data:data,
                error: null,
                isLoading: false
            }
        case GET_CASE_ACTIVE_BY_DATE_1_FAILURE:
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
