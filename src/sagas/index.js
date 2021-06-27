import {watchFindAllStatus} from "./dashboardSagas";
import {all} from 'redux-saga/effects'
import {watchFindAllData} from "./dataSagas";
import {watchFindAllActive} from "./caseActiveSagas";
import {watchGetCaseActiveByDate} from "./caseActiveByDateSagas";
import {watchGetActiveDate} from "./caseActiveDateSagas";

export default function* rootSaga() {
    yield all([
        watchFindAllStatus(), watchFindAllData(), watchFindAllActive(),watchGetCaseActiveByDate(),watchGetActiveDate(),
    ])
}
