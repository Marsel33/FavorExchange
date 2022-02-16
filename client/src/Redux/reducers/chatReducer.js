import {SET_CHAT, UNSET_CHAT} from "../types/types";
import initState from "../init/initState";

export const chatReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CHAT :
            return [action.payload, ...state]

        case UNSET_CHAT:
            return []

        default:
            return state
    }
}
