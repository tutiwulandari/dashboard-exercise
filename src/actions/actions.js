import {
    FIND_ALL,
    FIND_ALL_DATA,
    GET_ALL_ACTIVE,
    GET_CASE_ACTIVE_BY_DATE_1,
    GET_CASE_ACTIVE_BY_DATE_2
} from "../constants/actionConstant";

export function findAll() {
    return{
        type:FIND_ALL
    }
}

export function findAllData() {
    return{
        type:FIND_ALL_DATA
    }
}

export function findAllActive() {
    return{
        type: GET_ALL_ACTIVE
    }
}

export  function getAllCaseActiveByDate1() {
    return {
        type: GET_CASE_ACTIVE_BY_DATE_1
    }
}

export  function  getAllCaseActiveByDate2() {
    return {
        type : GET_CASE_ACTIVE_BY_DATE_2
    }
}

