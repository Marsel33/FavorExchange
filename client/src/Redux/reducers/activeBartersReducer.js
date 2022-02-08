import initState from "../init/initState";
import {END_BARTER, GET_ALL_ACTIVE_BARTERS} from "../types/types";

export const activeBartersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_ACTIVE_BARTERS:
            return action.payload.filter(e => e.status == 'active')
        case END_BARTER:
            const temp = [...state]
            return temp.filter(e => e.barterId !== Number(action.payload))
        default:
            return state
    }
}