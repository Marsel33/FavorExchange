import { GET_PROFILE_FOR_CATEGORIES } from "../../types/types"

export const searchProfForCategoriesAction = (data) => {
  return{
    type: GET_PROFILE_FOR_CATEGORIES,
    payload: data
  }
}
