import { GET_ALL_CAT, SET_CAT } from "../types/types";




export const userCatReducer = (state = [], action) => {
  const { type, payload } = action;


  switch (type) {
    

    case GET_ALL_CAT:
      return [...payload]
    default:
      return state;
  }
}
