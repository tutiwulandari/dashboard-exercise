import {FIND_ALL, FIND_ALL_FAILURE, FIND_ALL_SUCCESS} from "../constants/actionConstant";


const initialState = {
    data:null,
    error:null,
    isLoading:false,
}

export function findAll(state=initialState, data) {
    switch (data.type) {
        case FIND_ALL:
            return{
                ...state,
                isLoading: true
            }
        case FIND_ALL_SUCCESS:
            // console.log("find all reducer" , data)
            return {
                data:data,
                error: null,
                isLoading: false
            }
        case FIND_ALL_FAILURE:
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
