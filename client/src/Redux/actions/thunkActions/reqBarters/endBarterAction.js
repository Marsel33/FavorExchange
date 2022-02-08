import {END_BARTER} from "../../../types/types";

export const endBarterAction = (id) => {
    console.log('action end prishlo')
    return {
        type: END_BARTER,
        payload: id
    }
}