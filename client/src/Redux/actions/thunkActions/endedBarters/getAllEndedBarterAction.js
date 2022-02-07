import {GET_ALL_ENDED_BARTERS} from "../../../types/types";

export const getAllEndedBarterAction = (data) => {
    return {
        type: GET_ALL_ENDED_BARTERS,
        payload: data
    }
}