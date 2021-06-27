import {combineReducers} from "redux";
import {findAll} from "./dashboardReducer";
import {findAllDataCovid} from "./dataReducer";
import {getAllActive} from "./caseActiveReducer";
import {getCaseActiveByDate} from "./caseActiveByDateReducer";
import {getActiveByDate} from "./caseActiveDateReducer";

const rootReducer = combineReducers({
    findAll, findAllDataCovid, getAllActive, getCaseActiveByDate,getActiveByDate,
})

export default rootReducer;
