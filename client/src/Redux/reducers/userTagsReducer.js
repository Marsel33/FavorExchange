import {DELL_TAG, GET_USER_TAGS, SET_CAT} from "../types/types"

export const userTagsReducer = (state = null, action) => {
    const {type, payload} = action

    switch (type) {
        case SET_CAT:
            console.log(payload)
            return [...state, payload]

        case GET_USER_TAGS:
            console.log(payload)

            return [...payload]

        case DELL_TAG:
            console.log(payload)

            return state.filter(el => el.id !== payload)

        default:
            return state
    }
}
