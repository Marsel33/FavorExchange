import {ACCEPT_BARTER} from "../types/types";

export const acceptBarterAction = (id) => {
    return {
        type: ACCEPT_BARTER,
        payload: id
    }
}