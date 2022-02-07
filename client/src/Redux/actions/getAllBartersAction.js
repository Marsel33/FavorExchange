import {GET_ALL_BARTERS} from "../types/types";

export const getAllBartersAction = (data) => {
    return {
        type: GET_ALL_BARTERS,
        payload: data
    }

}