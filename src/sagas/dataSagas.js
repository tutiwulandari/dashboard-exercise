import axios from "axios";
import {
    FIND_ALL_DATA,
    FIND_ALL_DATA_FAILURE,
    FIND_ALL_DATA_SUCCESS,
} from "../constants/actionConstant";
import {put, takeLatest} from "redux-saga/effects";

function* findAllData(action) {
    let result = yield axios
        .get('https://covid19.mathdro.id/api/recovered')
        .then((data)=> {
            // console.log("find all data sagas", data)
            return{
                type:FIND_ALL_DATA_SUCCESS,
                data: data.data,
            }
        })
        .catch((error) =>{
            return {
                type:FIND_ALL_DATA_FAILURE,
                error
            }
        })
    yield put(result)
}

export function* watchFindAllData() {
    yield takeLatest(FIND_ALL_DATA, findAllData)
}
