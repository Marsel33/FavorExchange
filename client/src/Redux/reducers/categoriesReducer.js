import initState from "../init/initState";
import { GET_ALL_CATEGORIES } from "../types/types";

export const categoriesReducer=(state=initState,action)=>{
  switch (action.type){ 
    
    case GET_ALL_CATEGORIES:
      return action.payload
   
    default:
     return state
  }
}
