import { GET_CASE_ACTIVE_BY_DATE_1,
    GET_CASE_ACTIVE_BY_DATE_1_FAILURE,
    GET_CASE_ACTIVE_BY_DATE_1_SUCCESS,
} from "../constants/actionConstant";
import {put, takeLatest} from "redux-saga/effects";
import axios from "axios";

function* getCaseActiveByDate(action) {
    let today = new Date();
    let dd = today.getDate() -3;
    let mm = today.getMonth() +1
    let yyyy = today.getFullYear();
    const dateString = mm + '-' + dd + '-' + yyyy;

    let result = yield axios
        .get('https://covid19.mathdro.id/api/daily/' + dateString)
        .then((data)=> {
            console.log("find case active sagas", data)
            return{
                type:GET_CASE_ACTIVE_BY_DATE_1_SUCCESS,
                data: data.data,
            }
        })
        .catch((error) =>{
            return {
                type:GET_CASE_ACTIVE_BY_DATE_1_FAILURE,
                error
            }
        })
    yield put(result)
}

export function* watchGetCaseActiveByDate() {
    yield takeLatest(GET_CASE_ACTIVE_BY_DATE_1, getCaseActiveByDate)
}
