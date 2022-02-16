import {SET_CHAT} from "../../types/types";

export const ACTION_setChat = obj => {
    return {
        type: SET_CHAT,
        payload: obj
    }
}