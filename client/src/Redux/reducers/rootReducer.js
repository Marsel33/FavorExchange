
import {combineReducers} from 'redux';
import {profileReducer} from './profileReducer';
import {usersReducer} from './usersReducer';

import {userCatReducer} from './userCatReducer';
import {reqBarterReducer} from "./reqBarterReducer";
import {activeBartersReducer} from "./activeBartersReducer";
import {declinedBarterReducer} from "./declinedBarterReducer";


export const rootReducer = combineReducers({
    profile: profileReducer,
    user: usersReducer,
    roles: rolesReducer,
    userCat: userCatReducer,
    reqBarters: reqBarterReducer,
    activeBarters: activeBartersReducer,
    declinedBarters: declinedBarterReducer

})


