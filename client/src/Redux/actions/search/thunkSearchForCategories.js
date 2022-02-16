import axios from "axios"
import {searchProfForCategoriesAction} from "./searchProfForCategoriesAction";

export const thunkSearchForCategories = (input) => async (dispatch) => {
    const response = await axios.post('/find/categories', {category_id: input})
    // console.log(response.data, 'ETO INPUT THUNK!!!!!!!')
    dispatch(searchProfForCategoriesAction(response.data))
}
