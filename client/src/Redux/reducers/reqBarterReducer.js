import initState from "../init/initState";
import {ACCEPT_BARTER, GET_ALL_BARTERS} from "../types/types";

export const reqBarterReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_BARTERS:
            return action.payload.filter(e => e.status === 'requested')
        case ACCEPT_BARTER:
            const temp = [...state]
            return temp.filter(e => e.barterId !== Number(action.payload))
        default:
            return state
    }
}