import {GET_ALL_PROFILES, GET_PROFILE, GET_PROFILE_FOR_CATEGORIES, SET_IMG, SET_PROFILE} from "../types/types";

export const profileReducer = (state = [], action) => {
    const {type, payload} = action;


    switch (type) {
        case GET_PROFILE:
            return [{...payload}]

        case SET_IMG:
            return [payload]

        case GET_ALL_PROFILES:
            return payload

        case SET_PROFILE:
            return [payload]

        case GET_PROFILE_FOR_CATEGORIES:
            return payload

        default:
            return state;
    }
}
