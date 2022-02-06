import { SET_ROLES } from '../types/types'

export const rolesReducer = (state = [], action) => {
	const {type, payload} = action

	switch (type) {
		case SET_ROLES:
			return payload
	
		default:
			return state
	}
}
