import axios from "axios";
import {getAllDeclinedBartersAction} from "./getAllDeclinedBartersAction";

export const thunkGetAllDecliendBartersAction = (id) => async (dispatch) => {
    const response = await axios(`/deals/all-barters/${id}`)
    dispatch(getAllDeclinedBartersAction(response.data.barters))
}