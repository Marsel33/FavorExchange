import {SET_USER, USER_LOGIN, USER_LOGOUT, USER_REGISTER} from '../types/types'

export const usersReducer = (state = null, action) => {
    const {type, payload} = action

    switch (type) {
        case SET_USER:
            console.log(payload)
            return payload

        case USER_REGISTER:
            console.log(payload)

            return payload

        case USER_LOGIN:
            console.log(payload)

            return payload

        case USER_LOGOUT:
            return null

        default:
            return state
    }
}
