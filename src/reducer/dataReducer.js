import {
    FIND_ALL_DATA, FIND_ALL_DATA_FAILURE,
    FIND_ALL_DATA_SUCCESS,
} from "../constants/actionConstant";

const initialState = {
    data:null,
    error:null,
    isLoading:false,
}
export function findAllDataCovid(state=initialState, data) {
    switch (data.type) {
        case FIND_ALL_DATA:
            return{
                ...state,
                isLoading: true
            }
        case FIND_ALL_DATA_SUCCESS:
            // console.log("find all reducer" , data)
            return {
                data:data,
                error: null,
                isLoading: false
            }
        case FIND_ALL_DATA_FAILURE:
            console.log("INI ERROR", data.error)
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
