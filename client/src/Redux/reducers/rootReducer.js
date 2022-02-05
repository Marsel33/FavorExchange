import { combineReducers} from 'redux';
import { profileReducer } from './profileReducer';
import { usersReducer } from './usersReducer';
import { rolesReducer } from './rolesReducer';
import { userCatReducer } from './userCatReducer';




export const rootReducer = combineReducers({
  profile: profileReducer,
	user: usersReducer,
	roles: rolesReducer,
  userCat: userCatReducer,
  
})


