import axios from "axios";
import {getAllEndedBarterAction} from "./getAllEndedBarterAction";

export const thunkGetAllEndedBarterAction = (id) => async (dispatch) => {
    const response = await axios(`/deals/all-barters/${id}`)
    dispatch(getAllEndedBarterAction(response.data.barters))
}