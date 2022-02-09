import initState from "../init/initState";
import {DELETE_DECLINE_BARTERS, GET_ALL_DECLINE_BARTERS} from "../types/types";

export const declinedBarterReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_DECLINE_BARTERS:
            return action.payload.filter(e => e.status === 'declined')
        case DELETE_DECLINE_BARTERS:
            const temp = [...state]
            console.log(action.payload)
            return temp.filter(el => el.barterId !== Number(action.payload))
        default :
            return state
    }
}