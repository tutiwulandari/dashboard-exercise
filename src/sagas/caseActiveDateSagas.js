import {
    GET_CASE_ACTIVE_BY_DATE_2,
    GET_CASE_ACTIVE_BY_DATE_2_FAILURE,
    GET_CASE_ACTIVE_BY_DATE_2_SUCCESS
} from "../constants/actionConstant";
import {put, takeLatest} from "redux-saga/effects";
import axios from "axios";

function* getActiveByDate() {
    let today = new Date();
    let dd = today.getDate() - 4;
    let mm = today.getMonth() +1
    let yyyy = today.getFullYear();
    const dateString = mm + '-' + dd + '-' + yyyy;

    let result = yield axios
        .get('https://covid19.mathdro.id/api/daily/' + dateString)
        .then((data)=> {
            console.log("find case active sagas", data)
            return{
                type:GET_CASE_ACTIVE_BY_DATE_2_SUCCESS,
                data: data.data,
            }
        })
        .catch((error) =>{
            return {
                type:GET_CASE_ACTIVE_BY_DATE_2_FAILURE,
                error
            }
        })
    yield put(result)
}

export function* watchGetActiveDate() {
    yield takeLatest(GET_CASE_ACTIVE_BY_DATE_2, getActiveByDate)
}
