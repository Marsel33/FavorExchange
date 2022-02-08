import {SET_USER, USER_LOGIN, USER_LOGOUT, USER_REGISTER} from '../types/types'

export const usersReducer = (state = null, action) => {
	const {type, payload} = action

	switch (type) {
		case SET_USER:
			return payload

		case USER_REGISTER:
			return payload

		case USER_LOGIN:
			return payload

		case USER_LOGOUT:
			return null

		default:
			return state
	}
}
