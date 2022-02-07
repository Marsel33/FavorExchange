import axios from "axios";
import {getAllActiveBartersAction} from "./getAllActiveBartersAction";

export const thunkGetAllActiveBartersAction = (id) => async (dispatch) => {
    const response = await axios(`/deals/all-barters/${id}`)
    console.log(response.data)
    dispatch(getAllActiveBartersAction(response.data.barters))
}