import {FIND_ALL, FIND_ALL_FAILURE, FIND_ALL_SUCCESS} from "../constants/actionConstant";
import {put, takeLatest} from "redux-saga/effects";
import axios from "axios";

function* findAllStatus(action) {
    let result = yield axios
        .get('https://covid19.mathdro.id/api/')
        .then((data)=> {
            // console.log("find all sagas", data)
            return{
                type:FIND_ALL_SUCCESS,
                data: data.data,
            }
        })
        .catch((error) =>{
            return {
                type:FIND_ALL_FAILURE,
                error
            }
        })
    yield put(result)
}

export function* watchFindAllStatus() {
    yield takeLatest(FIND_ALL, findAllStatus)
}
