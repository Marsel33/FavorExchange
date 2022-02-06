import { GET_PROFILE, SET_IMG, GET_ALL_PROFILES } from "../types/types";


export const profileReducer = (state = [], action) => {
  const { type, payload } = action;


  switch (type) {
    case GET_PROFILE:
      return [{ ...payload }]

    case SET_IMG:
      return [...state, { ...payload }]

    case GET_ALL_PROFILES:
      return [...state, ...payload]


    default:
      return state;
  }
}
