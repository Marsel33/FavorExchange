import { GET_CAT } from "../types/types";




export const userCatReducer = (state = [], action) => {
  const { type, payload } = action;


  switch (type) {
    case GET_CAT:
      return [...state, ...payload]


    default:
      return state;
  }
}
