import initState from "../init/initState";
import {ACCEPT_BARTER, DECLINE_BARTER, GET_ALL_BARTERS} from "../types/types";

export const reqBarterReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_BARTERS:
          console.log('action===================>',action)
            return action.payload.filter(e => e.status === 'requested')
        case ACCEPT_BARTER:
            const tempAcc = [...state]
            return tempAcc.filter(e => e.barterId !== Number(action.payload))
        case DECLINE_BARTER:
            const tempDec = [...state]
            return tempDec.filter((el) => el.barterId !== Number(action.payload))
        default:
            return state
    }
}
