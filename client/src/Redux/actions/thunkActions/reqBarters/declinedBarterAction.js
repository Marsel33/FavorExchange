import {DECLINE_BARTER} from "../../../types/types";

export const declinedBarterAction = (id) => {
    return {
        type: DECLINE_BARTER,
        payload: id
    }
}