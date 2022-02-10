import {DELETE_DECLINE_BARTERS} from "../../../types/types";

export const deleteDeclineBarterAction = (id) => {
    console.log('1234--------------', id)
    return {
        type: DELETE_DECLINE_BARTERS,
        payload: id
    }
}