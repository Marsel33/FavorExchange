import { SET_USER } from '../types/types'

export const usersReducer = (state = null, action) => {
	const {type, payload} = action

	switch (type) {
		case SET_USER:
			console.log(payload.id)
			return payload

		default:
			return state
	}
}
