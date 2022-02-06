import { GET_ALL_PROFILES, GET_PROFILE } from "../types/types";


export const profileReducer = (state = [], action) => {
  const { type, payload } = action;


  switch (type) {
    case GET_PROFILE:
      return [ { ...payload }]

    case GET_ALL_PROFILES:
        return payload

    default:
      return state;
  }
}
