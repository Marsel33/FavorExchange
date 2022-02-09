import { GET_ALL_CATEGORIES } from "../../types/types"

export const getAllCategoryAction=(data)=>{
  return{
    type:GET_ALL_CATEGORIES,
    payload:data
  }
}
