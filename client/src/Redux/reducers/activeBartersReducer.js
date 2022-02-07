import initState from "../init/initState";
import {GET_ALL_ACTIVE_BARTERS} from "../types/types";

export const activeBartersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_ACTIVE_BARTERS:
            return action.payload.filter(e => e.status === 'active')
        default:
            return state
    }
}