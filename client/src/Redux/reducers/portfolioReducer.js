import { ContactsOutlined } from "@ant-design/icons";
import { GET_PORTFOLIO, ALL_USER_PORTFOLIO } from "../types/types";

export const portfolioReducer = (state = [], action) => {
  const { type, payload } = action;


  switch (type) {
    case GET_PORTFOLIO:

      return [...state, { ...payload }]

    case ALL_USER_PORTFOLIO:
      return [ state, ...payload]

    default:
      return state;
  }
}
