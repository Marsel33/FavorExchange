import { CREATE_COMMENT } from "../types/types";

export const commentReducer = (state = [], action) => {
  const { type, payload } = action;
  
  switch (type) {
    case CREATE_COMMENT:
      return [...state, payload]
  
    default:
      return state;
  }
}
