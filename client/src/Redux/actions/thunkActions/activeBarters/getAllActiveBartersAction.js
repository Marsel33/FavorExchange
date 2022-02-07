import {GET_ALL_ACTIVE_BARTERS} from "../../../types/types";

export const getAllActiveBartersAction = (data) => {
    return {
        type: GET_ALL_ACTIVE_BARTERS,
        payload: data
    }

}