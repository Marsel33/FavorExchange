import initState from "../init/initState";
import {GET_ALL_ENDED_BARTERS} from "../types/types";

export const endedBarterReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_ENDED_BARTERS:
            return action.payload.filter(e => e.status == 'ended')
        default:
            return state
    }
}