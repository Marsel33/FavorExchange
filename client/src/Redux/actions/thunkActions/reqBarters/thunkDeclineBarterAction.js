import axios from "axios";
import {declinedBarterAction} from "./declinedBarterAction";

export const thunkDeclineBarterAction = (id) => async (dispatch) => {
    const response = await axios.put(`/deals/declined/${id}`)
    if (response.status === 200) {
        dispatch(declinedBarterAction(response.data))
    }
}