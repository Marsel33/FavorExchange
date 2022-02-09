import {SET_PROFILE} from "../../../types/types";

export const setProfileAction = (data) => {
    return {
        type: SET_PROFILE,
        payload: data
    }
}
