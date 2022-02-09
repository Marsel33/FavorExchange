import axios from "axios"
import { searchProfForCategoriesAction } from "./searchProfForCategoriesAction";

export const thunkSearchForCategories =(input)=>async(dispatch)=>{
  const response = await axios.post('/find/categories',{category_id:input})
  dispatch(searchProfForCategoriesAction(response.data))
}
