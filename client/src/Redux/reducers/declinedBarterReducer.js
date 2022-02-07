import initState from "../init/initState";
import {GET_ALL_DECLINE_BARTERS} from "../types/types";

export const declinedBarterReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_DECLINE_BARTERS:
            return action.payload.filter(e => e.status === 'declined')
        default :
            return state
    }
}