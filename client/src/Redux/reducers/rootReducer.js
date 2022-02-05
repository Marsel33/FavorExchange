import { combineReducers} from 'redux';
import { profileReducer } from './profileReducer';
import { userCatReducer } from './userCatReducer';


export const rootReducer = combineReducers({
  profile: profileReducer,
  userCat: userCatReducer,
  
})


