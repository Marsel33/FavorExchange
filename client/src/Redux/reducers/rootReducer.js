
import {combineReducers} from 'redux';
import {profileReducer} from './profileReducer';
import {usersReducer} from './usersReducer';

import {userCatReducer} from './userCatReducer';
import {reqBarterReducer} from "./reqBarterReducer";
import {activeBartersReducer} from "./activeBartersReducer";
import { portfolioReducer } from './portfolioReducer';
import {declinedBarterReducer} from "./declinedBarterReducer";


export const rootReducer = combineReducers({
    profile: profileReducer,
    user: usersReducer,
    userCat: userCatReducer,
    reqBarters: reqBarterReducer,
    activeBarters: activeBartersReducer,
    portfolio:portfolioReducer,
    declinedBarters: declinedBarterReducer

})


