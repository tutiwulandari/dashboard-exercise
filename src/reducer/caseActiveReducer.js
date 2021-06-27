import {
    GET_ALL_ACTIVE, GET_ALL_ACTIVE_FAILURE,
    GET_ALL_ACTIVE_SUCCESS
} from "../constants/actionConstant";

const initialState = {
    data: null,
    error: null,
    isLoading: false
}

export function getAllActive(state=initialState, data) {
    switch (data.type) {
        case GET_ALL_ACTIVE:
            return{
                ...state,
                isLoading: true
            }
        case GET_ALL_ACTIVE_SUCCESS:
            console.log("find active reducer" , data)
            return {
                data:data,
                error: null,
                isLoading: false
            }
        case GET_ALL_ACTIVE_FAILURE:
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
