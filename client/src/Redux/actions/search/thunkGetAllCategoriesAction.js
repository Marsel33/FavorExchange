import axios from "axios"
import { getAllCategoryAction } from "./getAllCategoriesAction"

export const thunkGetAllCategoriesAction = () => async(dispatch) => {
  const response = await axios('/find/categories')
  dispatch(getAllCategoryAction(response.data))
}
