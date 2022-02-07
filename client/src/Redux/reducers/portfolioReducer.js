import { GET_PORTFOLIO } from "../types/types";

export const portfolioReducer = (state = [], action) => {
  const { type, payload } = action;


  switch (type) {
    case GET_PORTFOLIO:
      return [...state, { ...payload }]


    default:
      return state;
  }
}
