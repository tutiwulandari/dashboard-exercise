import {
    GET_ALL_ACTIVE,
    GET_ALL_ACTIVE_FAILURE,
    GET_ALL_ACTIVE_SUCCESS
} from "../constants/actionConstant";
import {put, takeLatest} from "redux-saga/effects";
import axios from "axios";

function* getAllActive() {
    let today = new Date();
    let dd = today.getDate() -2;
    let mm = today.getMonth() +1
    let yyyy = today.getFullYear();
   const dateString = mm + '-' + dd + '-' + yyyy;

    let result = yield axios
        .get('https://covid19.mathdro.id/api/daily/' + dateString)
        .then((data)=> {
            console.log("find case active sagas", data)
            return{
                type:GET_ALL_ACTIVE_SUCCESS,
                data: data.data,
            }
        })
        .catch((error) =>{
            return {
                type:GET_ALL_ACTIVE_FAILURE,
                error
            }
        })
    yield put(result)
}

export function* watchFindAllActive() {
    yield takeLatest(GET_ALL_ACTIVE, getAllActive)
}
