import { combineReducers} from 'redux';
import { profileReducer } from './profileReducer';
import { usersReducer } from './usersReducer';
import { userCatReducer } from './userCatReducer';


export const rootReducer = combineReducers({
  profile: profileReducer,
	user: usersReducer,
  userCat: userCatReducer,

})


