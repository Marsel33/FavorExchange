import axios from "axios";
import {getAllDeclinedBartersAction} from "./getAllDeclinedBartersAction";

export const thunkGetAllDecliendBartersAction = (id) => async (dispatch) => {
    const response = await axios(`/deals/all-barters/${id}`)
    console.log(response.data)
    dispatch(getAllDeclinedBartersAction(response.data.barters))
}