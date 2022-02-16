import {combineReducers} from 'redux';
import {profileReducer} from './profileReducer';
import {usersReducer} from './usersReducer';

import {userCatReducer} from './userCatReducer';
import {reqBarterReducer} from "./reqBarterReducer";
import {activeBartersReducer} from "./activeBartersReducer";
import {declinedBarterReducer} from "./declinedBarterReducer";
import {endedBarterReducer} from "./endedBarterReducer";
import {portfolioReducer} from './portfolioReducer';
import {userTagsReducer} from './userTagsReducer';
import {categoriesReducer} from './categoriesReducer';
import {commentReducer} from './commentReducer';
import {chatReducer} from "./chatReducer";


export const rootReducer = combineReducers({
    profile: profileReducer,
    user: usersReducer,
    userCat: userCatReducer,
    reqBarters: reqBarterReducer,
    activeBarters: activeBartersReducer,
    declinedBarters: declinedBarterReducer,
    endedBarters: endedBarterReducer,
    categories: categoriesReducer,
    portfolio: portfolioReducer,
    userTags: userTagsReducer,
    comment: commentReducer,
    chat: chatReducer,
})


