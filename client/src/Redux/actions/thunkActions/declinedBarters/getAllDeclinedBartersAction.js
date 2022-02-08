import {GET_ALL_DECLINE_BARTERS} from "../../../types/types";

export const getAllDeclinedBartersAction = (data) => {
    return {
        type: GET_ALL_DECLINE_BARTERS,
        payload: data
    }
}